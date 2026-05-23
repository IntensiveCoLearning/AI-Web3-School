---
timezone: UTC+8
---

# Paxon Qiao 乔鹏军

**GitHub ID:** qiaopengjun5162

**Telegram:** @Qiao4812

## Self-introduction

Web3 开发者 Python Go  Rust  Solidity

## Notes

<!-- Content_START -->
# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->
2026-05-23 (Day 6) — Web3 基础：密码学 → 钱包 → 智能合约 → 开发栈  
  
**今日学习内容：**  
\- AI 基础 11 章全部完成，今天扫 Web3 基础  
\- 密码学 — 哈希函数、非对称加密、数字签名  
\- 钱包 — 身份与签名入口，授权确认机制  
\- 智能合约 — 链上规则部署、调用、可验证执行  
\- 开发栈 — Foundry/Hardhat、前端 SDK、RPC 节点  
  
**笔记摘要：**  
\- AI×Web3 四层架构：AI 做建议和编排 → 钱包做授权确认 → 合约做可验证执行 → 监控记录结果  
\- 密码学原语是 Agent 签名授权和链上验证的底层基础  
\- Agent 场景下钱包的 Session Key、限额、时间范围是关键设计点  
\- 开发栈提供 Agent 调用链上状态的工具基础设施（RPC、索引、SDK）  
  
**明日计划：**  
\- 继续 Web3 基础：账户抽象 / DeFi / Oracle 等  
\- 目标进入 Bridge 层（Chain-aware Context、Agent Wallet）
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->

026-05-22 (Day 5) — Evaluation, Fine-tuning, Inference & PoW Pack  
  
**今日学习内容：**  
\- Handbook: Evaluation（评估）— 把主观感受变成可测量、可重复、可回归的方法  
\- Handbook: Fine-tuning（微调）— 先有 eval 再谈微调，先修数据再修模型  
\- Handbook: Inference（推理服务）— 模型能力只有被稳定、可控、可观测地调用，才算进入产品  
\- Week 1 Proof-of-Work Pack (40pts) — 已提交  
  
**笔记摘要：**  
\- Evaluation 核心链条：Harness(跑分框架) → Golden Set(测试样本) → LLM-as-Judge(模型评分) → Regression(防修A坏B) → Observability(线上追踪)。不能被重复测量的AI行为就不能被稳定改进  
\- Fine-tuning 不是第一步，要先排除prompt/context/RAG/eval的问题。SFT对数据质量极度敏感，LoRA降低实验成本但任务定义和质量仍决定效果。绝对不能用微调存实时知识  
\- Inference 三层选择：API Model(上手快但需处理限速/重试/成本)、Local Model(隐私优先但受显存和并发限制)、Quantization(FP16→INT4 取舍体积/速度/质量)  
\- 踩坑记录：Hermes默认用浏览器搜索，查房价时不断启动无头浏览器被验证码拦截。配置Tavily Search API为web.backend后解决  
  
**明日计划：**  
\- 快速过Web3基础9章（概念都会但补一遍）  
\- 完成后进入Bridge层（AI×Web3交叉概念）
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->


2026-05-21 (Day 4) — MCP & Vibe Coding 学习  
  
**今日学习内容：**  
  
\- Handbook: MCP (Model Context Protocol) — Agent 与工具的标准通信协议  
\- Handbook: Vibe Coding — 方向/约束/验收 由人负责，Agent 负责生成/修改/执行  
  
**笔记摘要：**  
  
\- MCP 三层架构：Host - Client - Server，支持文件系统、数据库、API 等工具调用  
\- Vibe Coding 要点：任务要小、上下文要准、验证要硬  
\- 已完成实践：用户意图 → AI 规划 → 工具执行 → 链上验证 (Solana Devnet SPL Token)  
  
**明日计划：**  
  
\- AI 可交互学习产物  
\- AI × Web3 最小交叉流程图  
\- 20:00 参加直播 | AI 下乡计划 | AI 在 Web3 的应用
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->



**2026-05-19 (Day 2) — RAG, Agent & Frameworks**

**Handbook 学习：**

\- **RAG**：检索增强生成，解决 LLM 知识截止和幻觉

\- **Agent**：LLM + Tool Use + 记忆 + 规划，ReAct 模式

\- **Frameworks**：Agent 框架概览，对比设计哲学

\- ✅ 完成 AI 基础全部核心章节（6章）

**晚间活动：**

\- 参加 AI Agent 入门：Hermes 从 0 到 1 讲座

\- 了解 Hermes 架构（Gateway → Agent Core → Tools → Skills）

**实践规划：**

\- 讨论了 RAG Agent CLI demo 方案，准备 Day 3 动手搭建

日期： 2026-05-20 (Day 3)

学习内容：

\- 读 Handbook：Vibe Coding（氛围编程）

\- 实践：Solana Devnet 创建 SPL Token

学习总结：

Vibe Coding 不是"把需求丢给 AI 等代码"，而是人负责方向/约束/验收，Agent 负责生成/修改/执行。关键：任务要小、上下文要准、验证要硬。

实践：

在 Solana Devnet 上创建了 SPL Token "qintuobang"（QINTUOBANG）：

\- Token Mint: CU1LRRpuWkhXpNP5dbBJHVpbVSpvnEJNsom2sZGWcPq3

\- 铸造 1,000,000 到账户

\- 完成完整链路：用户意图 → AI 规划 → 工具调用 → 链上执行 → 可验证记录

明日计划：

读 MCP，进入 AI × Web3 Bridge
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->





2026-05-18 (Day 1) — LLM, Prompt, Context & AI Tool Practice  
  
今日学习：  
  
Handbook: LLM 基础  
\- LLM 是概率模型，不是知识库  
\- Token 是基本单位，Context Window 限制模型一次能看的多少  
\- 知道什么时候该信 LLM、什么时候必须验证  
  
Handbook: Prompt 基础  
\- 好 Prompt = 明确任务目标 + 输出格式 + 边界条件  
\- 结构化 Prompt 比自然语言更稳定  
\- AI x Web3 中 Prompt 也可能是攻击面（Prompt Injection）  
  
Handbook: Context 基础  
\- 模型看到的全部信息 = System Prompt + 对话历史 + 检索结果  
\- 链上数据有过期时间，信息可信度需分层  
\- 可信度排序：工具返回 > 模型生成 > 用户提供  
  
实践：AI 工具调用  
\- 用 Hermes Agent 查询以太坊最新区块 -> Block #25,118,645  
\- 验证了 LLM + Tool Use 的完整链路  
\- 配置了 WCB Agent API Key，了解 Agent 如何调用平台 API  
  
明日计划：  
\- Handbook: RAG、Agent  
\- Web3 测试网交互
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
