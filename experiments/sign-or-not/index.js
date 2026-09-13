#!/usr/bin/env node

const OpenAI = require("openai");
const readline = require("readline");

// ── 测试案例库（5个，涵盖不同风险等级） ──

const CASES = [
  {
    id: 1,
    contract: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    permission: "授权 USDC（限额 100 USDC）用于兑换",
    origin: "app.uniswap.org",
    description: "Uniswap V2 Router 请求授权少量 USDC 进行代币兑换",
    riskLevel: "安全",
    riskReason: "Uniswap 是最大的 DEX，合约地址可验证，且限额合理",
    realRisk: "low",
  },
  {
    id: 2,
    contract: "0x1111111254EEB25477B68fb85Ed929f73A960582",
    permission: "授权 USDT（无限额度）用于聚合交易",
    origin: "app.1inch.io",
    description: "1inch 聚合器请求无限额度 USDT 授权",
    riskLevel: "中风险",
    riskReason:
      "1inch 是知名聚合器，但无限额度授权意味着该合约随时可转走你所有 USDT。建议改为按需授权或限额授权",
    realRisk: "medium",
  },
  {
    id: 3,
    contract: "0xdef171Fe48aB907209c8A2C5d7b5F3C6aEB1acE1",
    permission: "授权所有 NFT（setApprovalForAll）",
    origin: "opensea-vip.xyz",
    description: "「OpenSea 限时空投」页面请求授权你所有 NFT",
    riskLevel: "高风险",
    riskReason:
      "域名 opensea-vip.xyz 与真正的 opensea.io 不符，是典型钓鱼网站。setApprovalForAll 授权后对方可转走你全部 NFT",
    realRisk: "high",
  },
  {
    id: 4,
    contract: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    permission: "授权 USDC（无限额度）用于「Uniswap 流动性挖矿」",
    origin: "unlswap.org",
    description: "「Unlswap 流动性挖矿」页面请求无限额度 USDC 授权，界面长得和 Uniswap 一样",
    riskLevel: "高风险",
    riskReason:
      "域名 unlswap.org 是 uniswap.org 的仿冒（l 和 i 视觉相似）。合约地址虽是真实的 USDC 代币地址，但批准给一个恶意 spender 后资产可被转走。这是典型「伪装知名项目」攻击",
    realRisk: "high",
  },
  {
    id: 5,
    contract: "0x00000000000006b2eFe5C0f34B2Af0EC5A2FFa17",
    permission: "授权全部资产（ETH/WETH + 所有 ERC20 + 所有 NFT）",
    origin: "airdroop-claim.xyz",
    description: "「Arbitrum 基金会空投」页面要求你签署一笔 approve 交易，授权「领取合约」操作你钱包内全部资产",
    riskLevel: "极高风险",
    riskReason:
      "1. 来源域名可疑 2. 正经空投绝不会要求 approve 全部资产 3. 合约地址未经验证 4. 一旦签署，对方可一次性清空你钱包。这是典型的「零资产攻击」钓鱼",
    realRisk: "critical",
  },
];

// ── 状态管理 ──

let remaining = [...CASES];
let round = 0;

// ── DeepSeek 客户端 ──

const deepseek = new OpenAI({
  baseURL: "https://api.deepseek.com/v1",
  apiKey: process.env.DEEPSEEK_API_KEY,
});

async function analyzeWithAI(userCase, userChoice) {
  const prompt = `你是一个 Web3 安全专家。用户面对以下合约授权请求做出了选择。

  📋 授权请求信息：
  - 合约地址：${userCase.contract}
  - 请求权限：${userCase.permission}
  - 来源网站：${userCase.origin}
  - 描述：${userCase.description}

  👤 用户选择：${userChoice === "sign" ? "签" : "不签"}

  请从以下角度分析（用中文，简洁直接）：
  1. 这个授权请求危险吗？为什么？
  2. 用户的判断对不对？为什么？
  3. 如果签了会有什么后果？如果是安全的，签了会怎样？
  4. 给用户一句话建议

  回复格式：每点一行，不要用 markdown 标题。`;

  const completion = await deepseek.chat.completions.create({
    model: "deepseek-chat",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
    max_tokens: 600,
  });

  return completion.choices[0].message.content;
}

// ── 用户交互 ──

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(prompt) {
  return new Promise((resolve) => rl.question(prompt, resolve));
}

function showCase(c) {
  console.log("\n" + "═".repeat(56));
  console.log(`  📜 合约授权请求 #${round + 1}`);
  console.log("═".repeat(56));
  console.log(`  合约地址：${c.contract}`);
  console.log(`  请求权限：${c.permission}`);
  console.log(`  来源网站：${c.origin}`);
  console.log(`  描述　　：${c.description}`);
  console.log("─".repeat(56));
}

async function run() {
  console.clear();
  console.log("╔══════════════════════════════════════════╗");
  console.log("║       🔐 签还是不签 — Web3 安全训练      ║");
  console.log("║   模拟合约授权请求，训练你的安全直觉      ║");
  console.log("╚══════════════════════════════════════════╝");
  console.log(`\n  📚 共 ${CASES.length} 个案例，随机顺序，不做完不重复`);
  console.log("  ⌨️  输入「签」或「不签」做出判断\n");

  while (remaining.length > 0) {
    round++;

    // 随机选一个
    const idx = Math.floor(Math.random() * remaining.length);
    const current = remaining.splice(idx, 1)[0];

    showCase(current);

    // 获取用户输入
    let input;
    while (true) {
      input = await question("\n  你的判断（签 / 不签）：");
      input = input.trim();
      if (input === "签" || input === "不签") break;
      console.log("  ⚠️  请输入「签」或「不签」");
    }

    const choice = input === "签" ? "sign" : "reject";

    console.log("\n  🤖 DeepSeek 正在分析中...");

    try {
      const analysis = await analyzeWithAI(current, choice);
      console.log(`\n  📊 DeepSeek 分析结果：`);
      console.log("  " + "─".repeat(52));
      // 缩进显示分析结果
      analysis.split("\n").forEach((line) => {
        console.log(`  ${line}`);
      });
      console.log("  " + "─".repeat(52));

      // 显示内置风险等级
      console.log(`\n  🏷️  内置风险标记：${current.riskLevel}`);
    } catch (err) {
      console.log(`\n  ❌ DeepSeek API 调用失败：${err.message}`);
      console.log(`  🏷️  内置风险标记：${current.riskLevel}`);
      console.log(`  💡 内置分析：${current.riskReason}`);
    }

    if (remaining.length > 0) {
      console.log(`\n  📚 还剩 ${remaining.length} 个案例`);
      await question("\n  按 Enter 继续下一个...");
    }
  }

  console.log("\n" + "═".repeat(56));
  console.log("  🎉 全部 5 个案例完成！");
  console.log("═".repeat(56));
  console.log("\n  💡 记住：签名前一定要检查三点 —");
  console.log("     1. 网站域名对不对？");
  console.log("     2. 合约地址验证过吗？");
  console.log("     3. 授权额度合理吗？");
  console.log("");

  rl.close();
}

run().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
