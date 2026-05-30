const express = require("express");
const OpenAI = require("openai");

const CASES = [
  {
    id: 1,
    contract: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    permission: "授权 USDC（限额 100 USDC）用于兑换",
    origin: "app.uniswap.org",
    description: "Uniswap V2 Router 请求授权少量 USDC 进行代币兑换",
    riskLevel: "安全",
    realRisk: "low",
  },
  {
    id: 2,
    contract: "0x1111111254EEB25477B68fb85Ed929f73A960582",
    permission: "授权 USDT（无限额度）用于聚合交易",
    origin: "app.1inch.io",
    description: "1inch 聚合器请求无限额度 USDT 授权",
    riskLevel: "中风险",
    realRisk: "medium",
  },
  {
    id: 3,
    contract: "0xdef171Fe48aB907209c8A2C5d7b5F3C6aEB1acE1",
    permission: "授权所有 NFT（setApprovalForAll）",
    origin: "opensea-vip.xyz",
    description: "「OpenSea 限时空投」页面请求授权你所有 NFT",
    riskLevel: "高风险",
    realRisk: "high",
  },
  {
    id: 4,
    contract: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    permission: "授权 USDC（无限额度）用于「Uniswap 流动性挖矿」",
    origin: "unlswap.org",
    description: "「Unlswap 流动性挖矿」页面请求无限额度 USDC 授权，界面仿冒 Uniswap",
    riskLevel: "高风险",
    realRisk: "high",
  },
  {
    id: 5,
    contract: "0x00000000000006b2eFe5C0f34B2Af0EC5A2FFa17",
    permission: "授权全部资产（ETH + ERC20 + NFT）",
    origin: "airdroop-claim.xyz",
    description: "「Arbitrum 基金会空投」要求 approve 全部资产",
    riskLevel: "极高风险",
    realRisk: "critical",
  },
];

const deepseek = new OpenAI({
  baseURL: "https://api.deepseek.com/v1",
  apiKey: process.env.DEEPSEEK_API_KEY,
});

// ── 每个会话独立洗牌 ──

const sessions = new Map();

function getSession(sid) {
  if (!sessions.has(sid)) {
    const shuffled = [...CASES].sort(() => Math.random() - 0.5);
    sessions.set(sid, { cases: shuffled, index: 0 });
  }
  return sessions.get(sid);
}

// ── Express ──

const app = express();
app.use(express.json());
app.use(express.static(__dirname));

app.get("/api/case", (req, res) => {
  const s = getSession(req.query.sid || "default");
  if (s.index >= s.cases.length) {
    return res.json({ done: true });
  }
  const c = s.cases[s.index];
  res.json({
    done: false,
    round: s.index + 1,
    total: s.cases.length,
    ...c,
  });
});

app.post("/api/judge", async (req, res) => {
  const { sid, choice } = req.body;
  const s = getSession(sid || "default");
  const c = s.cases[s.index];

  const prompt = `Web3安全专家。用户面对以下合约授权请求做出了选择。
合约：${c.contract}
权限：${c.permission}
来源：${c.origin}
描述：${c.description}
用户选择：${choice === "sign" ? "签" : "不签"}

请用中文分析（3-5句话，不要markdown标题）：
1. 这个授权请求危险吗？为什么？
2. 用户判断对不对？为什么？
3. 如果签了会怎样？`;

  try {
    const completion = await deepseek.chat.completions.create({
      model: "deepseek-chat",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 500,
    });
    const analysis = completion.choices[0].message.content;

    // 判断用户是否正确
    const isDangerous = c.realRisk !== "low";
    const userChoseSign = choice === "sign";
    const correct = isDangerous ? !userChoseSign : userChoseSign;

    s.index++;
    res.json({ analysis, riskLevel: c.riskLevel, correct, remaining: s.cases.length - s.index });
  } catch (err) {
    res.json({ analysis: `API 调用失败：${err.message}`, riskLevel: c.riskLevel, error: true });
  }
});

app.listen(3456, () => console.log("http://localhost:3456"));
