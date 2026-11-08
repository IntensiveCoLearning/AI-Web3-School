# 交易解释器 (Transaction Interpreter)

一个受限的 Web3 助手原型：输入交易哈希，读取链上数据，由 LLM 生成结构化解释，并严格区分链上事实、模型推断和不确定部分。

## 1. 用户输入

用户在命令行输入一笔交易的哈希（tx hash）：

```bash
node index.js 0x5460f5cdff49a32806f301f6216c68f4ace75b57e2e1fc53b9b4320fcd0c7a50
```

可选加 `--llm` 自动调用 DeepSeek 生成最终解释：

```bash
node index.js 0x5460f5cdff49a32806f301f6216c68f4ace75b57e2e1fc53b9b4320fcd0c7a50 --llm
```

## 2. AI / Agent 做什么（只读，不碰资产）

AI 只负责**读**和**解释**，不执行任何链上写操作：

| 步骤 | 执行者 | 说明 |
|------|--------|------|
| 读取 tx 详情 | JS / ethers.js | 从 Sepolia RPC 读取 from, to, value, gas, calldata |
| 读取 receipt + 事件日志 | JS / ethers.js | 解析 Transfer / Approval 等标准事件 |
| 读取代币元数据 | JS / ethers.js | 通过 `eth_call` 读取 name, symbol, decimals |
| 解码函数调用 | JS / ethers.js | 匹配 ERC20 transfer / approve 等函数选择器 |
| 生成结构化提示词 | JS（规则引擎） | 将链上数据整理为 LLM 可读的 Markdown 提示词 |
| 生成人类可读解释 | LLM（DeepSeek） | 翻译链上数据为自然语言，标注推断和不确定 |

**红线**：这个工具永远不能接触私钥、助记词、钱包签名。它只做 `eth_call` 和 `eth_getTransaction` 等只读查询。

## 3. Web3 工具与链上步骤

- **Sepolia 测试网** RPC：`https://sepolia.drpc.org`
- **ethers.js v6**：读取交易、receipt、事件日志、合约元数据
- **事件解码**：识别 ERC20 `Transfer` / `Approval` 等标准事件
- **calldata 解码**：识别 ERC20 `transfer(address,uint256)` 等标准函数调用
- **链上验证**：用户可通过 [Sepolia Etherscan](https://sepolia.etherscan.io) 直接验证 tx hash

## 4. 必须人工确认的步骤

| 步骤 | 为什么必须人工 |
|------|----------------|
| **LLM 输出判断** | LLM 可能幻觉代币名称、推断错误动机、对未知合约猜测功能——用户必须对照区块浏览器核实 |
| **地址归属判断** | LLM 无法从链上数据知道地址属于谁（交易所、个人钱包、合约地址）——用户需要自己判断 |
| **代币信息** | 如果合约的 name/symbol 方法返回异常值或调用失败，模型可能编造代币名——用户应去 Etherscan 确认 |
| **签署类似交易** | 工具只能描述已发生的交易，用户签新交易前需要自己确认：目标地址是否正确、金额是否正确、calldata 的含义（如果是 approve 要特别警惕） |
| **API Key 管理** | 用户的 DeepSeek API Key 存储在本地 `~/.hermes/.env` 文件，工具读取但不暴露 |

## 5. 如何验证执行结果

1. **对照区块浏览器**：用 tx hash 在 https://sepolia.etherscan.io 查看原始数据，和工具输出的「链上原始数据」对比
2. **检查事件日志**：Etherscan 的「Logs」标签页应和工具解码的事件一致
3. **核对事实 vs 推断**：工具输出中「事实」部分必须能在 Etherscan 上直接验证
4. **示例交易验证**：以下是一笔 ERC20 USDT+ 转账的解码结果
   ```
   From:  0x30eB...9EB2
   To:    0x69eA...3B20
   Token: USDT+ (0xe205...272D)
   Amount: 155 USDT+
   ```

## 6. 风险与限制

| 类别 | 风险 | 缓解措施 |
|------|------|----------|
| **LLM 幻觉** | 模型可能编造代币名称、猜测交易目的、虚构地址归属 | 所有输出标注「链上事实」vs「模型推断」，链上事实必须在 Etherscan 可验证 |
| **未识别事件/函数** | 只解码了 ERC20 Transfer/Approval，DeFi 协议的自定义事件无法识别 | 原始 calldata 和事件 topics 仍会输出，用户可手动查询 |
| **代币元数据缺失** | 非标准 ERC20 合约可能不支持 name/symbol/decimals 查询 | 此时显示原始 on-chain value，输出标注「代币元数据不可用——请去 Etherscan 确认」 |
| **RPC 可靠性** | 公共 RPC 可能限速或不可用 | 可替换为 Infura / Alchemy 等付费 RPC |
| **地址隐私** | 工具不暴露用户身份，但 tx hash 本身是公开信息 | 无额外隐私风险（用户输入的是公开链上数据） |
| **API 密钥安全** | 工具从本地 `.env` 文件读取 API Key，需确保文件权限 | 建议 `chmod 600 ~/.hermes/.env` |

## 技术栈

- Node.js + ethers.js v6
- Sepolia 测试网（通过公共 RPC）
- DeepSeek API（chat completions，可选）

## 项目结构

```
tx-interpreter/
├── index.js      # 主程序
├── package.json  # 依赖：ethers
└── README.md     # 本文档（也是 WCB 任务 proof）
```
