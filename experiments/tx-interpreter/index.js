const { ethers } = require('ethers');
const https = require('https');
const fs = require('fs');
const path = require('path');

// ── Config ──────────────────────────────────────────────
const RPC_URL = 'https://sepolia.drpc.org';
const provider = new ethers.JsonRpcProvider(RPC_URL);

// Known event topic hashes → human names
const KNOWN_TOPICS = {
  '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef': 'Transfer(address indexed from, address indexed to, uint256 value)',
  '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925': 'Approval(address indexed owner, address indexed spender, uint256 value)',
};
const T_ERC20_TRANSFER = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';

// ERC20 minimal ABI (for decoding calls + reading token metadata)
const ERC20_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function decimals() view returns (uint8)',
  'function transfer(address to, uint256 amount) returns (bool)',
];

// ── Helpers ─────────────────────────────────────────────

function short(addr) {
  if (!addr) return 'N/A';
  return addr.slice(0, 6) + '...' + addr.slice(-4);
}

// ── Fetch on-chain data ─────────────────────────────────

async function fetchTxData(txHash) {
  const [tx, receipt] = await Promise.all([
    provider.getTransaction(txHash),
    provider.getTransactionReceipt(txHash),
  ]);

  // Decode event logs
  const events = receipt.logs.map((log) => {
    const entry = {
      contract: log.address,
      topics: [...log.topics],
      data: log.data,
    };
    const sig = log.topics[0];
    if (KNOWN_TOPICS[sig]) entry.event = KNOWN_TOPICS[sig];

    // Decode ERC20 Transfer
    if (sig === T_ERC20_TRANSFER && log.topics.length === 3) {
      entry.decoded = {
        from: '0x' + log.topics[1].slice(26), // strip padding
        to: '0x' + log.topics[2].slice(26),
        rawValue: BigInt(log.data).toString(10),
      };
    }
    return entry;
  });

  // If tx.to is a contract, try reading token metadata
  let token = null;
  if (tx.to) {
    const code = await provider.getCode(tx.to);
    if (code !== '0x') {
      try {
        const iface = new ethers.Interface(ERC20_ABI);
        // Call sequentially to avoid RPC rate limits
        const nameR = await provider.call({ to: tx.to, data: iface.encodeFunctionData('name') });
        const symR = await provider.call({ to: tx.to, data: iface.encodeFunctionData('symbol') });
        const decR = await provider.call({ to: tx.to, data: iface.encodeFunctionData('decimals') });
        token = {
          name: iface.decodeFunctionResult('name', nameR)[0],
          symbol: iface.decodeFunctionResult('symbol', symR)[0],
          decimals: Number(iface.decodeFunctionResult('decimals', decR)[0]),
        };
      } catch (_) { /* not an ERC20 contract, skip */ }
    }
  }

  // Decode calldata if it looks like ERC20 transfer
  let decodedCall = null;
  if (tx.data && tx.data !== '0x') {
    try {
      const iface = new ethers.Interface(ERC20_ABI);
      const parsed = iface.parseTransaction({ data: tx.data });
      if (parsed) {
        decodedCall = {
          function: parsed.name,
          args: parsed.args.map((a, i) => {
            // Format address args for readability
            if (ethers.isAddress(a.toString())) return { type: 'address', value: a, short: short(a) };
            return { type: typeof a, value: a.toString() };
          }),
        };
      }
    } catch (_) { /* not a known function */ }
  }

  return {
    hash: tx.hash,
    from: tx.from,
    to: tx.to,
    valueWei: tx.value.toString(),
    valueEth: ethers.formatEther(tx.value),
    gasPriceGwei: tx.gasPrice ? ethers.formatUnits(tx.gasPrice, 'gwei') : 'N/A',
    gasLimit: tx.gasLimit.toString(),
    nonce: tx.nonce,
    status: receipt.status === 1 ? 'success' : 'failed',
    gasUsed: receipt.gasUsed.toString(),
    blockNumber: receipt.blockNumber,
    calldataHex: tx.data,
    decodedCall,
    events,
    token,
  };
}

// ── Build LLM prompt ────────────────────────────────────

function buildPrompt(data) {
  const facts = [];

  facts.push(`**交易哈希**: ${data.hash}`);
  facts.push(`**区块高度**: ${data.blockNumber}`);
  facts.push(`**状态**: ${data.status}`);
  facts.push(`**发送方 (from)**: ${data.from}`);
  facts.push(`**接收方 (to)**: ${data.to}`);
  facts.push(`**ETH 数量**: ${data.valueEth} ETH`);
  facts.push(`**Gas 价格**: ${data.gasPriceGwei} Gwei`);
  facts.push(`**Gas 消耗**: ${data.gasUsed} / limit ${data.gasLimit}`);
  facts.push(`**Nonce**: ${data.nonce}`);

  if (data.token) {
    facts.push(`\n**目标合约是 ERC20 代币**: ${data.token.name} (${data.token.symbol}), decimals=${data.token.decimals}`);
  } else if (data.to) {
    facts.push(`\n**目标地址**: 外部账户或非 ERC20 合约`);
  }

  if (data.decodedCall) {
    facts.push(`\n**解码后的函数调用**: ${data.decodedCall.function}(${data.decodedCall.args.map(a => a.short || a.value).join(', ')})`);
  } else if (data.calldataHex !== '0x') {
    facts.push(`\n**原始 calldata** (函数选择器 ${data.calldataHex.slice(0, 10)}): ${data.calldataHex}`);
  }

  if (data.events.length > 0) {
    facts.push(`\n**事件日志 (${data.events.length} 条)**:`);
    data.events.forEach((e, i) => {
      facts.push(`  ${i + 1}. ${e.event || '未知事件'}`);
      facts.push(`     合约: ${e.contract}`);
      if (e.decoded) {
        facts.push(`     从: ${e.decoded.from}`);
        facts.push(`     到: ${e.decoded.to}`);
        // If we know the token decimals, convert raw value
        if (data.token) {
          facts.push(`     数量: ${ethers.formatUnits(e.decoded.rawValue, data.token.decimals)} ${data.token.symbol}`);
        } else {
          facts.push(`     原始值: ${e.decoded.rawValue}`);
        }
      }
    });
  }

  return `你是一个以太坊交易分析助手。请根据以下**链上数据**解释这笔交易，严格区分事实、推断和不确定。

## 链上数据

${facts.join('\n')}

## 输出要求

请按以下结构输出（这是强制格式）：

### 1. 这笔交易做了什么
用 1-3 句话描述用户发起的动作（仅基于链上数据可以确认的事实）。

### 2. 涉及的资产和地址
| 角色 | 地址 | 资产变动 |
|------|------|----------|

### 3. 事实 vs 推断
| 事实（链上可验证） | 推断（模型根据上下文推测） |
|-------------------|---------------------------|
| ... | ... |

### 4. 不确定的部分
列出模型无法从链上数据确定的信息（例如：交易目的、地址归属、代币用途等）。

### 5. 用户签署类似交易前应检查什么
一个 3-5 条的检查清单，帮助用户避免常见陷阱（授权风险、金额确认、目标地址等）。`;
}

// ── Call DeepSeek API ───────────────────────────────────

function callLLM(prompt) {
  return new Promise((resolve, reject) => {
    // Read API key from ~/.hermes/.env
    let apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      try {
        const envPath = path.join(require('os').homedir(), '.hermes', '.env');
        const envContent = fs.readFileSync(envPath, 'utf8');
        const match = envContent.match(/DEEPSEEK_API_KEY=(.+)/);
        if (match) apiKey = match[1].trim();
      } catch (_) {}
    }
    if (!apiKey) {
      reject(new Error('未找到 DEEPSEEK_API_KEY（检查 ~/.hermes/.env）'));
      return;
    }

    const body = JSON.stringify({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: '你是一个以太坊交易分析助手。请用中文回复，严格遵循用户要求的输出格式。' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.3,
      max_tokens: 2048,
    });

    const req = https.request({
      hostname: 'api.deepseek.com',
      path: '/v1/chat/completions',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
    }, (res) => {
      let chunks = '';
      res.on('data', (d) => chunks += d);
      res.on('end', () => {
        try {
          const json = JSON.parse(chunks);
          resolve(json.choices?.[0]?.message?.content || JSON.stringify(json));
        } catch (e) {
          reject(new Error('JSON 解析失败: ' + chunks.slice(0, 200)));
        }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// ── Main ────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const txHash = args.find(a => a.startsWith('0x'));
  const useLLM = args.includes('--llm');

  if (!txHash) {
    console.log('用法: node index.js <tx-hash> [--llm]');
    console.log('示例: node index.js 0xabc... --llm');
    console.log('');
    console.log('不加 --llm 只输出提示词（不消耗 API）；加 --llm 会调用 DeepSeek 生成解释。');
    process.exit(0);
  }

  console.log('读取链上数据...\n');
  const data = await fetchTxData(txHash);

  console.log('═══════════════════════════════════════');
  console.log('  链上原始数据');
  console.log('═══════════════════════════════════════');
  console.log(JSON.stringify(data, (k, v) => typeof v === 'bigint' ? v.toString() : v, 2));

  const prompt = buildPrompt(data);

  console.log('\n═══════════════════════════════════════');
  console.log('  LLM 提示词');
  console.log('═══════════════════════════════════════');
  console.log(prompt);

  if (useLLM) {
    console.log('\n═══════════════════════════════════════');
    console.log('  LLM 解释（DeepSeek）');
    console.log('═══════════════════════════════════════');
    try {
      const explanation = await callLLM(prompt);
      console.log(explanation);
    } catch (e) {
      console.error('LLM 调用失败:', e.message);
    }
  } else {
    console.log('\n💡 使用 --llm 标志可自动调用 DeepSeek 生成解释。');
  }
}

main().catch((e) => {
  console.error('出错:', e.message);
  process.exit(1);
});
