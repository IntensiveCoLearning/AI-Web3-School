---
timezone: UTC+8
---

# ChiWon

**GitHub ID:** CHI-WON

**Telegram:** @FelixWang7

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
今日学习：Phase 1 AI 基础全通关 🎉

今天一口气完成了 Handbook AI 基础部分剩余的全部章节（9 章），加上之前两天完成的 LLM 和 Prompt，Phase 1 正式收官。

建立了从「模型怎么理解指令」到「推理服务怎么部署」的完整心智模型：

上午 — 核心 pipeline（Context + RAG + Agent）

\- Context 是信息治理不是文本拼接——每段信息必须分层标注信任级别

\- RAG 的可靠性取决于证据链（版本 metadata + filter + citation），不取决于向量库

\- Agent 是被约束的执行循环，最危险的设计 = 模糊目标 + 广泛工具 + 长期记忆 + 大额资产

下午 — 工程化（MCP + Frameworks + Vibe Coding）

\- MCP 把工具连接标准化，但权限和审计仍由系统实现

\- 框架先理解工作流再选，简单链路保持简单，框架要能退出

\- Vibe Coding 有效公式：任务要小 + 上下文要准 + 验证要硬

晚上 — 质量闭环（Evaluation + Fine-tuning + Inference）

\- 不能被测量的行为就不能被稳定改进——先有 eval 再谈优化

\- Fine-tuning 改行为分布不补实时知识——prompt 搞不定才微调

\- 推理是在延迟/成本/质量/隐私之间取平衡，链上动作必须可审计

贯穿全文的安全红线：AI 负责推理，Web3 负责结算，每一层都不能越界。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

今日学习：Context + RAG + Agent 三合一

今天把 Handbook AI 基础部分三个核心概念串联学习：上下文（Context）、检索增强生成（RAG）、智能体（Agent）。这三者是自然的 pipeline——Knowledge Base → RAG（检索+引用）→ Context（分层放置）→ Agent（读状态+调工具+验证）。

核心收获：

1\. Context 不是文本拼接，是信息治理。系统指令、链上事实、用户意图、外部网页必须分层标注信任级别，混在同一层就是灾难

2\. RAG 的核心不是向量库，是证据链。chunk 必须带版本元数据，retriever 不能只靠向量相似度，输出必须可追溯到具体文档段落

3\. Agent 是被约束的执行循环，不是自主权。模糊目标 + 广泛工具 + 长期记忆 + 大额资产 = 最危险的设计

4\. 三个安全红线：自我反思不能替代外部校验、Memory 不能替代实时授权、Planning 不是执行许可
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->


📖 今日学习：Handbook Prompt 章节（最小路径）

\> 学了 Instruction 四段写法（任务目标/可用输入/禁止行为/输出格式）和 Structured Output 的设计原则（输出变成可机器校验的字段，不做散文解析）。核心认知：Prompt 是软约束，真正的安全边界由 code 层的 schema 校验 + guard 规则 + human approval 承担。

\> 💻 实践：写了一个交易风险摘要 prompt，跑了 3 组测试（普通转账 → low risk / 无限授权 → high risk / 目标地址不匹配 → high risk），建立了 Prompt + Structured Output + Guard 三层配合的心智模型。

\> 📁 experiments/transaction\_risk\_[prompt.py](http://prompt.py)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->




📝 打卡草稿：

Day 1 | 2026-05-18 | Phase 1: 大语言模型（LLM）

学习内容：

通读了 Handbook LLM 全章，围绕"LLM 是推理入口，不是真相源"这一核心认知展开。分三个主题深入：

1\. Token & Embedding：用 tiktoken 实测了不同内容类型的 token 消耗（EVM 地址 42 字符 → 27 token，驼峰命名是 tokenizer 噩梦）。理解了 Embedding 的边界：向量相似 ≠ 事实正确，向量检索只是 RAG 的召回起点。

2\. Transformer & Hallucination：通过 attention 权重模拟理解了为什么硬约束不能依赖 prompt（模型会"忽略"余额限制而关注价格数字）。梳理了 Builder 视角下三种幻觉类型（编造参数、事实错误、过时信息）及对应防线。

3\. Multimodal：明确了多模态在 Web3 场景的真正价值（读懂审计报告、仪表盘、错误堆栈）和致命边界（截图可伪造，涉及资产判断必须回到链上数据）。

收获：

\- 建立了 AI × Web3 四层架构心智模型：编排层(LLM) → 数据层(RPC) → 执行层(合约交互) → 安全层(规则引擎+人工确认)

\- 清楚了 LLM 在系统中的正确位置：推理助理，不是数据源，不是法官

\- 理解了三个关键设计原则：硬约束放代码不放 prompt、Embedding 是起点不是终点、截图不能作为唯一证据
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
