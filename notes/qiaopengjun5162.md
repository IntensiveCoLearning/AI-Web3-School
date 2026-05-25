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
# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->
2026-05-25 (Day 8) — Week 2 开篇：AI × Web3 Bridge

**今日学习内容：**  
\- Handbook Bridge — Chain-aware Context（链感知上下文）：链上状态如何进入 Agent 上下文  
\- Handbook Bridge — Web3 Tool Use（Web3 工具调用）：RPC、钱包、合约工具如何被 Agent 调用  
\- Handbook Bridge — Agent Workflow（智能体工作流）：哪些步骤适合自动化，哪些必须 human-in-the-loop

**笔记摘要：**  
\- 核心原则：模型可以选择工具，但工具必须用确定性边界限制模型。写操作必须受白名单合约、白名单方法和额度策略约束  
\- 写交易前检查清单：chain ID、合约地址、ABI method/args、value/token 预估、gas 估算、simulation、policy 检查、用户授权、交易追踪  
\- Agent Workflow 是把概率模型放进确定性流程里 — 只读分析自动执行，小额白名单按 session key 执行，高风险交易必须人工确认，超出 policy 直接拒绝  
\- 人工确认的关键不是"有没有确认"，而是人确认时能否看懂资产变化和风险  
\- Trace 调试框架：日志应回答模型看到了什么、调用了什么工具、工具返回了什么、系统有没有拦截、用户确认了什么  
\- 四层关系：Chain-aware Context 提供事实，Web3 Tool Use 提供能力，Agent Wallet 提供权限边界，Workflow 把它们组织成可执行但可控的路径

**明日计划：**  
\- 继续 AI × Web3 Bridge 剩余章节

**2026-05-25 (Day 8) 打卡总结：**  
  
📖 **Bridge 学习：**  
\- Chain-aware Context ✅  
\- Web3 Tool Use ✅  
\- Agent Workflow ✅  
  
🎯 **WCB 任务：+80pt**  
\- 社群自我介绍（10pt）  
\- Web3 概念卡片（10pt）  
\- EOA vs 智能账户 vs 多签（30pt）  
\- 合约部署证明（30pt）
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->


026-05-24 (Day 7) — Week 1 收尾：Web3 基础扫读，双基础通关  
  
**今日学习内容：**  
\- Handbook Web3 — Network（网络）：区块、共识机制、L2、RPC 与链上状态环境  
\- Handbook Web3 — Account Abstraction（账户抽象）：Smart Account 的 Session Key + Policy 权限模型  
\- Handbook Web3 — DeFi（去中心化金融）：AMM 常数积模型、借贷超额抵押、流动性挖矿  
\- Handbook Web3 — Oracle（预言机）：链外数据上链信任模型——AI 输出 + 来源记录 + 置信度 + 挑战机制  
\- Handbook Web3 — Indexing（索引）：链上事件/交易整理成 queryable 结构化数据层  
\- Handbook Web3 — Security（安全）：模型建议 → 工具返回事实 → policy 限制权限 → simulation 预演 → human check → monitoring 记录  
  
**笔记摘要：**  
\- 本周完成 AI 基础 11 章 + Web3 基础 10 章，双基础全部通关  
\- 核心框架：「AI 做建议和编排 → 钱包做授权确认 → 合约做可验证执行 → 监控记录结果」  
\- Oracle → AI 信任链路：AI 给出结果，系统记录来源和置信度，高风险引入 human-in-the-loop、挑战期、经济惩罚  
\- Security 流水线：模型可以建议，工具返回事实，policy 限制权限，simulation 预演结果，human check 确认高风险动作，monitoring 记录执行后果  
\- Account Abstraction 的灵活权限模型是 Agent Wallet 的核心基础设施  
  
**明日计划：**  
\- 进入 AI × Web3 Bridge 章节  
\- 整理 Week 1 学习总结
<!-- DAILY_CHECKIN_2026-05-24_END -->

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
