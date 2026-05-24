---
timezone: UTC+8
---

# Jia Xu

**GitHub ID:** Salieri-128

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->
今天依旧学习security review，知道了弄finding啊什么的格式
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->

今天依旧在学cyfrin updraft的课，今天学了Tincho review的方式
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->


今天没学这边的，今天在看cyfrin的security course
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->



今天系统学习了 Handbook 中的 Vibe Coding、MCP、Evaluation、Fine-tuning 和 Inference 五个章节。最大的收获是，我开始从工程化视角理解 AI：不仅关注模型能力本身，也开始理解 AI 如何协作开发、连接工具、被评估、被微调，以及如何在真实产品里稳定运行。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->




今天我继续系统学习了 AI 相关内容，重点梳理了 LLM、Prompt、Context、RAG、Workflow、Agent、Tool Use、Framework 这些核心概念之间的关系。相比之前只会单独记术语，今天更大的进步是开始把它们理解成一个完整系统：LLM 负责生成，Prompt 定义任务，Context 决定可见信息，RAG 提供外部知识，Tool Use 连接外部能力，Workflow 约束执行流程，Agent 负责围绕目标进行多步行动，而 Framework 则把这些模块组织起来。

今天我还完成了两个任务：一个是解释 AI 概念的内容，另一个是 AI 可交互 demo 的任务。在这个过程中，我让 AI 生成了一个解释 RAG 过程的 demo，并借此初步了解了 Streamlit 这个工具。这个实践让我对 RAG 的理解不再只是“先检索再生成”的定义，而是开始真正理解它为什么重要，以及它在实际产品里的作用。

我今天最大的收获是：AI 不只是一个会回答问题的模型，而是一套可以被工程化组织起来的系统。接下来的下一步，我想继续把 RAG 从概念理解推进到更贴近真实数据和真实场景的小型原型。

如果你要更短一点，也可以用这个短版：

今天系统学习了 LLM、Prompt、Context、RAG、Workflow、Agent、Tool Use、Framework 等 AI 核心概念，并开始把它们串成一条完整主线来理解。除了概念学习，我还完成了一个解释 RAG 过程的交互 demo，并借此初步了解了 Streamlit。今天最大的收获是，我开始把 AI 看成一个可工程化组织的系统，而不只是一个单纯的问答模型。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->





今天我完成了 AI × Web3 School 里一次很关键的“从会用 Agent 到会调 Agent”的练习。内容上，我阅读了 Handbook 的 `LLMPromptContextAgent` 四个部分，也参加了 `AI Agent 入门 —— Hermes 从 0 到 1` 直播，把理论和实际工具使用串了起来。

今天最重要的实践是把微信里的 Hermes Agent 调通，并继续排查它在 WCB 学习任务读取上的问题。我发现它虽然拿到了 WCB 的 API key，但不能稳定读出任务，最后定位并验证了对我这个账号更可靠的读取路径`users.getProfile -> events.listForLearner -> tasks.listForLearnerByIds`，然后把这条路径存进了 memory。

另一个重要动作是我重新审视了 AI × Web3 School 的 starter prompt，发现只记住 prompt URL 还不够，所以我进一步把它转化成了本地 skill，让 Agent 后续在处理 WCB、Handbook、repo 和 daily planning 时能更稳定地遵循这个 workflow。

我今天最大的收获是：Agent 不只是“拿来用”的工具，也可以被持续调试和改进。通过修正任务读取路径和 skill 化 starter prompt，我对 agent 的理解从“会调用”推进到了“会优化工作流与状态管理”。

我接下来的下一步是：补读 `RAG`，并继续把 Hermes 工作流沉淀到 repo 里，让它更稳定地支持后续的 AI × Web3 学习和 Hackathon 准备。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->






今天主要完成了 Hermes Agent 的配置：接入了 Codex，测试后决定先使用更稳定的 `gpt-5.4` 作为当前模型，同时把 Hermes 接入了微信，方便后续直接在微信里继续学习和记录。除此之外，我也开始阅读 Handbook 的 `LLM` 部分，初步建立对大模型能力边界的认识。今天最大的收获是，先把 Agent 工作流搭好，本身就是学习基础设施的一部分。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
