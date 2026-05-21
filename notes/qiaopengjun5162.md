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
