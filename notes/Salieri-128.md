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
