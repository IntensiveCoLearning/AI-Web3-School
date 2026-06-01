---
timezone: UTC+8
---

# milli

**GitHub ID:** tz-hao

**Telegram:** 

## Self-introduction

学习

## Notes

<!-- Content_START -->
# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->
Cobo 赛道的核心要求是：项目必须围绕 **Agent 与资金操作场景** 展开，并且资金相关操作需要通过 **Cobo Agentic Wallet (CAW)** 完成。

根据今天的判断，当前项目状态如下：

| 赛道要求 | 当前项目状态 | 结论 |
| --- | --- | --- |
| 围绕 Agent 与资金操作场景 | 已围绕 agent payment / transfer / approve 设计 | 部分符合 |
| 体现权限控制和安全边界 | 已有 policy、人工确认、deny、audit log | 部分符合 |
| Agent 具备真实资金执行能力 | 当前仍是 mock wallet | 不符合 |
| 使用 Cobo Agentic Wallet | 当前还没有接入 CAW | 不符合 |
| 可运行产品 Demo | 本地 Next.js demo 可运行 | 部分符合 |
| 提供 CAW 关键代码或配置 | 当前没有 | 不符合 |
| 提供测试网地址、tx hash、agent wallet 地址 | 当前没有 | 不符合 |

所以今天的结论是：

> Guardian Agent Wallet 当前是一个合格的赛道原型基础，但还不是最终可提交版本。要符合 Cobo 赛道，必须把 mock wallet execution 替换或扩展为 CAW 测试网真实执行。

* * *

## **推荐选择的赛道方向**

在 Cobo 给出的几个方向里，我认为当前项目最适合切入：

## **Agent-Native Payments**

这个方向的目标是让 Agent 成为互联网的一等支付公民，可以在授权范围内自动完成支付、购买 API、购买数据或调用付费服务。

当前项目天然适配这个方向，因为它已经有：

-   agent action 输入；
    
-   payment / transfer / approve intent；
    
-   policy 判断；
    
-   低风险自动执行；
    
-   高风险人工确认；
    
-   危险操作拒绝；
    
-   audit trail。
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->

AI Agent Server Wallet 与 [LI.FI](http://LI.FI) Agent Integration 学习

今天学习了两份和 SafePay Guard Wallet 方向高度相关的资料：

1\. MetaMask - Design server wallets for AI agents with ERC-8004

[https://docs.metamask.io/tutorials/design-server-wallets/](https://docs.metamask.io/tutorials/design-server-wallets/)

2\. [LI.FI](http://LI.FI) - Agent Integration

[https://docs.li.fi/agents/overview](https://docs.li.fi/agents/overview)

今日理解

MetaMask 的 server wallet 架构说明了 AI agent 不应该直接接触控制资产的私钥，而应该通过 backend signer / TEE / policy engine 来请求签名。agent key 用来证明请求来源，account key 控制链上资产，两者应该分离。TEE 或 signer 层需要执行 spend limit、scope limit、chain limit、frequency limit、simulation check 和 human approval。

[LI.FI](http://LI.FI) 的 agent integration 展示了 agent 如何接入真实跨链执行能力。Agent 可以通过 `/quote` 获取可执行交易，通过 `/status` 跟踪跨链状态，通过 `/chains/tokens/tools` 查询支持范围。[LI.FI](http://LI.FI) 也提供 MCP Server，让 agent 更容易以工具形式调用跨链能力。

和我的 SafePay Guard Wallet 项目的关系

MetaMask 解决的是：agent 如何安全请求签名。

[LI.FI](http://LI.FI) 解决的是：agent 如何拿到可执行跨链交易。

我的 SafePay Guard Wallet 可以把两者接起来：

Agent 可以理解用户意图并获取 [LI.FI](http://LI.FI) quote，但最终是否签名执行，必须由 wallet policy / Safe / CAW / server wallet 决定。

核心结论

AI 可以找 route、解释交易、生成风险摘要；但 wallet policy 必须检查 chain、token、recipient、amount、slippage、contract、method 和 simulation 结果。

我今天进一步确认了 SafePay Guard Wallet 的设计原则：

\`\`\`text

Agent proposes.

Policy checks.

Wallet signs.

Human confirms high risk.

Audit records.
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->


Week 2 总结：AI x Web3 Bridge 深挖 - 安全钱包方向

本周我围绕 AI x Web3 的交叉方向完成了 Week 2 学习与项目方向收敛，最终选择主线：

Wallet / Permission / Safe Execution

项目方向初步命名为 SafePay Guard Wallet：一个面向 Web3 用户、DAO 财务人员和 builder 的安全钱包执行助手，在签名、授权、转账和 agent 自动付款前，解释交易意图，检查权限风险，执行预算和白名单策略，并留下可审计记录。

本周完成内容：

1\. 绘制 AI x Web3 问题地图，覆盖 Payment / Commerce / Settlement、Identity / Reputation、Wallet / Permission、Privacy / Security、Dev Tooling、Governance 等方向。

2\. 选择安全钱包作为主方向，并解释它为什么不是纯 AI 或纯 Web3 问题。

3\. 设计 x402 paywall + Cobo CAW agent 自主支付闭环。

4\. 完成一个本地可运行 demo：request -> 402 -> Pact check -> CAW mock payment payload -> retry -> verify / settle -> audit log -> protected API result。

5\. 设计 SafePay Execution Agent 的 agent profile。

6\. 设计 agent wallet 权限策略，包含预算、可调用合约、人工确认阈值、撤销方式、日志和失败处理。

7\. 完成 threat model，并模拟 prompt injection、伪造工具返回、越权付款、replay 等攻击。

8\. 设计 DAO budget execution checklist workflow。

9\. 完成 Week 2 final proposal：SafePay Guard Wallet。

关键 GitHub 产出：

\- Week 2 总结：

[https://github.com/tz-hao/ai-web3-school-cohort-0/blob/main/submissions/week-2-summary.md](https://github.com/tz-hao/ai-web3-school-cohort-0/blob/main/submissions/week-2-summary.md)

\- Week 2 Final Proposal：

[https://github.com/tz-hao/ai-web3-school-cohort-0/blob/main/submissions/week2-final-safe-wallet-proposal.md](https://github.com/tz-hao/ai-web3-school-cohort-0/blob/main/submissions/week2-final-safe-wallet-proposal.md)

\- x402 + CAW 本地 demo：

[https://github.com/tz-hao/ai-web3-school-cohort-0/tree/main/experiments/x402-caw-agent-payment](https://github.com/tz-hao/ai-web3-school-cohort-0/tree/main/experiments/x402-caw-agent-payment)

本周最大收获：

AI x Web3 的重点不是让 AI 无限制自动执行，而是让 AI 的理解能力进入一个受 Web3 权限系统约束的执行环境。我总结成一句话：

AI can suggest.

Policy decides.

Wallet enforces.

Human can revoke.

Audit records.

Week 3 下一步：

继续推进 SafePay Guard Wallet，从 mock demo 走向更真实的产品原型：接入 Safe / session key / policy guard，增加交易 simulation 和 token allowance 检查，做签名前风险说明页，并把攻击模拟扩展成 regression test。
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->



```
传统以太坊的痛点：

  EOA（私钥账户）:
    ❌ 丢失私钥 = 丢失全部资产
    ❌ 只能 ETH 付 gas（不能用 USDC）
    ❌ 没有权限控制（单签）
    ❌ 不能批量交易（多步操作要多次签名）
    ❌ 没有社交恢复 / 多签 / 限额

  智能合约钱包：
    ✅ 可以做到以上全部
    ❌ 但合约不能发起交易——必须有人用 EOA 触发
```

**ERC-4337 的答案**：让智能合约钱包自己"发起"交易——不是真的发起（那需要改协议层），而是通过一个替代 mempool（Alt Mempool）把用户的意图打包，由 Bundler 代为提交到链上。
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->




```
线 1：Agent 怎么做事？
  ├── MCP  → Agent ↔ 工具（发现 + 调用）
  ├── A2A  → Agent ↔ Agent（通信 + 协作）
  └── Z.AI Web Search → 托管搜索（MCP 的替代/补充方案）

线 2：做事之后怎么结算？
  ├── x402      → 支付（HTTP 层即时付款）
  ├── MPP       → 支付（Session 微支付，Stripe 出品）
  ├── ERC-8004  → 身份 + 声誉（你是谁、可信吗）
  └── ERC-8183  → 交易 + 结算（Escrow + Evaluator + Arbiter）
```
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->





# **MCP 远程服务器连接**  
**三种传输协议**

```
stdio                   Streamable HTTP          SSE (旧版，已废弃)
───────                 ────────────────         ──────────────────
本地子进程              远程 HTTP 单端点           远程双端点
无网络依赖              可过防火墙/负载均衡          GET /sse + POST /message
免认证                  支持 OAuth 2.1             需要两个端口
延迟最低                支持 session 恢复           不支持 session 恢复
Claude Desktop 默认     Lambda/SaaS 首选           2024-11 提出，2025-03 被取代
```

### **传输选择决策树**

```
服务器在哪里？
  ├── 本地本机 → stdio
  └── 远程/云端
        ├── 自己新写的 → Streamable HTTP（唯一推荐）
        └── 接已有旧服务 → SSE（兼容过渡，计划迁移）
```
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->






## **提示工程（让Agent从“靠运气”到“稳定可控”）**

### **1\. 系统提示符与用户提示符**

| 层 | 放什么 | 更新频率 | Web3类比 |
| --- | --- | --- | --- |
| 系统提示 | 角色、规则、工具说明 | 几乎不变 | 契约代码——行为定义边界 |
| 用户提示 | 具体任务、数据 | 各自不同 | 交易calldata——每次不同输入 |

**核心原则**：把“你是谁”“不能克”放系统，把“这次克”放用户。混着放→代理随任务变来变去，“看心情”遵守规则。

### **2\. 构造输出**

令Agent波形能力被程序解析，不能靠“感觉”：

| 方式 | 做法 | 适用场景 |
| --- | --- | --- |
| Markdown 规定 | 约定格式，则提取 | 简单的场景，够用就行 |
| JSON 模式 | 强制只输出JSON | 程序消费，但会降低推理质量 |
| 函数调用 | 重构输出重构参数 | 最可靠（部分模型支持） |
| 约束编码 | token生成阶段强制语法 | 100%合格，企业级 |

> **Web3类比**：Markdown ≈ 注释写接口文档（看人品），JSON 模式 ≈ ABI 编码，约束解码 ≈ solc 编译器（语法层保证）。

> **经验法则**：能用函数调用的用函数调用，不能用JSON模式，别用正则硬解析自然语言。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->







## **深度知识：Agent 架构模式**

> 补充 Handbook 没覆盖的工程层面知识

### **决策循环三模式**

| 模式 | 一句话 | Web3 类比 |
| --- | --- | --- |
| ReAct | 想一步，做一步，看一眼，再想一步 | 手动盯盘，边看边交易 |
| Plan-Execute | 先画完整地图，再逐步执行 | TWAP 定投，定好计划自动跑 |
| Multi-Agent | 多个 Agent 分头干活，统一汇报 | DAO 工作组分工 |

-   ReAct 是 Hermes 的底层模式（Thought → Action → Observation 循环）
    
-   死循环的根源：Agent 无法区分"没查到"和"方法不对"
    
-   解决：设最大步数、要求 Agent 换思路、工具返回加元数据
    

### **Multi-Agent 深入**

**任务分配**：

-   Centralized（Orchestrator 说了算）→ 实用，90% 的系统用这个
    
-   Decentralized（Agent 自己商量）→ 灵活但协调成本高
    

**拆分维度**：

-   按领域：Solidity 写手 / 前端写手 / 审计 → 适合并行任务
    
-   按阶段：研究 → 策略 → 执行 → 验证 → 适合流水线任务
    

**安全保障（三道防线）**：

1.  Orchestrator 做 sanity check
    
2.  独立 Reviewer Agent 审查
    
3.  涉及钱的留给人类确认
    

**经验法则**：能用一个 Agent 搞定的，不要用多个。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->








今天学习了一下web3xai有一些大概的总结：从 Agent Workflow 的 human-in-the-loop，到 Escrow 的多签仲裁，到 Sovereignty 的一键 kill switch，到 Governance AI 的「AI 不替你做投票建议」——**自动化程度越高，撤回机制必须越强**。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->









上午听了一下直播，感觉还是有点蒙  
  
**学习了Machine Payment（机器支付）**  
**核心理解**

**普通支付**：人 → 打开钱包 → 填地址 → 输金额 → 签名 → 等确认。每笔都要人。

**机器支付**：

-   机器 A（Agent）需要调机器 B（API 服务）的接口
    
-   一次调用 0.005 USDC，一天可能调几百次
    
-   人不可能守在旁边每笔确认
    
-   必须有自动化支付通道
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->










**1\. Web3 Tool Use（学完）**  
\- 工具分层：只读（RPC/Contract Read）↔️ 写交易（Contract Write/Wallet）必须硬分离  
\- 写交易前 7 步检查链：chain id → 合约地址 → ABI → value → gas → simulation → policy+确认  
\- 核心认知：Web3 工具比普通 API 调用高一个风险量级，工具设计本质是「模型能力 vs 确定性边界」的权衡  
  
**2\. Agent Workflow（开篇）**  
\- Task Graph：把目标拆成节点+依赖，每步定义输入/输出/权限/失败处理  
\- State Machine：Agent 要知道自己在哪个状态，交易 pending 时不"失忆"  
\- Human-in-the-loop：只读自动、小额放行、高风险必确认、越权直接拒
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->











核心收获：  
1\. Web3 工具必须**读写分离**——读链和写链是不同工具、不同权限，不能混在一个"万能 RPC"里  
2\. 写交易前需要完整的 7 步检查链：chain id → 合约 → ABI → value → gas → simulation → policy  
3\. 工具权限应该分层：查询自动允许 → 小额 session key → 大额必须人工确认 → 任意调用默认禁止  
4\. 日志是 Agent 行为的可审计基础——每次调用都要记录"模型看到了什么、调用了什么、用户确认了什么"
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->












今天听了一下web3的课，这些概念都懂算是巩固一下基础了
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->













今天终于把hermes弄好，也学习了一些ai的知识
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->














今天去研究了一下codex，昨天也听了一下开营仪式，下了一下hermas使用还是有一点问题还在研究中
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
