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

### 2026-05-18 (Day 1) — LLM, Prompt, Context & First AI Tool Practice

**今日学习内容：**
- Handbook: LLM 基础 — 概率模型 vs 知识库，Token & Context Window
- Handbook: Prompt 基础 — 结构化 Prompt，AI × Web3 安全风险
- Handbook: Context 基础 — 可信度分层，信息过期问题
- 实践：用 Hermes Agent 查询以太坊最新区块 (Block #25,118,645)

**笔记摘要：**
- LLM 不是数据库，输出需要验证 — 链上场景尤其重要
- 好的 Prompt = 任务目标 + 输出格式 + 边界条件
- Context 可信度：工具返回 > 模型生成 > 用户提供
- 完成最小链路：用户意图 → AI 规划 → 工具执行 → 验证结果

**明日计划：**
- Handbook: RAG, Agent
- Web3 测试网交互

### 2026-05-31 — Dev Tooling：AI 在 Web3 开发工作流里的真实价值

**今日学习内容：**
- AI 开发工具的核心价值是减少错误理解和不可逆操作，而不是生成更多代码
- Docs-to-Agent：把协议文档、SDK 文档、EIP、README、代码示例、changelog 转成 Agent 可查询知识库
- Contract Reading Assistant：不只会概括“合约用途”，还要解释权限、状态变量、关键函数、事件、外部调用与潜在风险
- Transaction Interpreter：把 calldata、事件日志、token transfer、approval、合约调用翻译成人类可读操作说明
- Test Generator：AI 补测的价值在边界、权限、失败路径和经济假设，不只是 happy path
- 部署清单：Web3 部署是最不该临场发挥的环节，AI 应该输出可执行 checklist，并核验 hash、地址、命令与负责人
- SDK Integration Assistant：辅助钱包、RPC、合约调用、事件监听和后端服务的集成

**笔记摘要：**
- Dev Tooling 是 AI x Web3 最容易产生真实生产力的方向之一
- 不需要创造新协议，也能显著降低开发、审计、部署和运维成本
- 强产品往往是把 AI 嵌入真实 workflow：读文档、查源码、跑测试、解释交易、生成部署清单、检查日志、给出可复核证据
- 要避开“聊天式代码生成”，关键是把 AI 放进可执行、可审计的工具链路里

<!-- Content_END -->
