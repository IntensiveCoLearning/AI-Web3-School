---
timezone: UTC+8
---

# Swen

**GitHub ID:** swen-chan

**Telegram:** @redemptionandy

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->
做了英文版的 《AI x Web3 School 入门指南》：[https://x.com/SwenChan/status/2058272289041609186?s=20](https://x.com/SwenChan/status/2058272289041609186?s=20)

和英文版的《大模型API key 接入入门指南》：[https://x.com/SwenChan/status/2058267141707854223?s=20](https://x.com/SwenChan/status/2058267141707854223?s=20)
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->

帮大家审批任务中！！
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->


今天参加sophia的分享，其实一些问题没有得到很好的解答hhh

晚上批了2700多份任务，麻了
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->



写了篇文章，用于整理最近很多新学员关于 API key的共同问题，快速入门 AI 开发：

[https://x.com/SwenChan/status/2057349592296075285?s=20](https://x.com/SwenChan/status/2057349592296075285?s=20)

还发现了一个无需插件的 chrome 内置实时翻译功能：  
[https://x.com/SwenChan/status/2057122568570863690?s=20](https://x.com/SwenChan/status/2057122568570863690?s=20)

AI基础概念小卡片：  
[https://x.com/SwenChan/status/2057052223516074206?s=20](https://x.com/SwenChan/status/2057052223516074206?s=20)

web3基础概念小卡片：[https://x.com/SwenChan/status/2057108610321363258?s=20](https://x.com/SwenChan/status/2057108610321363258?s=20)
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->





首先是基本概念界定

1.LLM 提供智能能力；

2.Prompt 定义任务；

3.Context Window 决定信息边界；

4.Workflow 组织稳定流程；

5.Tool Use 连接工具；

6.Agent 把这些能力组合起来面向目标行动；

7.Guardrails、Tracing 和 Human-in-the-loop 则让 Agent 更安全、更可调试、更适合真实项目。

然后是概念解析

1\. LLM 一句话：LLM 是现在很多 AI 应用背后的语言与推理核心，可以理解为系统的“大脑”。 例子：让它总结 AI x Web3 的课程。 边界：LLM 会过时，也会幻觉，所以重要内容需要资料、工具和人工复核。

2\. Prompt 一句话：Prompt 是我们给模型定义任务的方式，不是玄学，也不是咒语。 例子：不是只说“帮我总结”，而是说“请基于这篇文档，总结 5 个关键点，并给出适合新手的行动建议”。 边界：Prompt 不是越长越好，而是要清晰、具体、有上下文、有输出格式。

3\. Context Window 一句话：Context Window 是模型一次能看到和处理的信息范围。 例子：如果让 AI 读一个项目，它不可能一次理解整个代码仓库，通常需要先看结构，再看关键文件。 边界：上下文越长不一定越好。真正重要的是把相关信息放进去，而不是把所有信息都丢进去。

4\. Workflow 一句话：Workflow 是把一个复杂任务拆成一组稳定步骤。 例子：阅读材料 → 提炼知识点 → 写个人理解 → 生成打卡内容 → 提交到 GitHub。 边界：Workflow 不等于 Agent 自主决策。它的价值是稳定、可复用、可检查。

5\. Agent 一句话：Agent 是一个围绕目标行动的系统，可以结合模型、工具、记忆和工作流完成任务。 例子：一个学习 Agent 可以读 Handbook、生成学习计划、整理打卡内容。 边界：Agent 不是越自主越好。尤其在 Web3 场景里，只要涉及钱包、资产、签名和权限，就必须有人类确认和安全边界。

6\. Tool Use 一句话：Tool Use 是 AI 从“聊天”走向“做事”的关键。 例子：AI 调用 API 查实时价格、读 GitHub issue、跑代码、查询链上数据、生成日历事件。 边界：模型只是决定调用什么工具，真实数据和动作来自外部系统，所以工具权限必须被限制和记录。

7\. AI Coding 一句话：AI Coding 是用 AI 辅助写代码、读代码、改 bug、生成测试和理解工程结构。 例子：让 Codex / Claude 帮你理解一个 repo，定位报错原因，补一个小功能，再生成测试和提交。 边界：不要把 AI 生成的代码直接合并。至少要自己 review、跑测试、看权限和安全影响。

8\. Guardrails 一句话：Guardrails 是给 AI 系统设置行为边界和安全规则。或者说“保护栏” 例子：Agent 可以查询余额，但不能自动转账；可以生成交易建议，但必须等用户确认后才能执行。 边界：Guardrails 并非限制创新，而是为了让系统在真实环境里可控、可用、可追责。

9\. Tracing 一句话：Tracing 是记录 AI 系统每一步做了什么、调用了什么工具、得到了什么结果。 例子：一个 Agent 执行任务时，记录它为什么调用某个 API、API 返回了什么、下一步为什么这样判断。 边界：没有 tracing，就很难 debug，也很难判断错误是来自模型、工具、数据，还是流程设计。

10\. Human-in-the-loop 一句话：Human-in-the-loop 是在关键节点让人类参与判断和确认。 例子：AI 可以准备一笔链上操作，但真正签名、转账、授权前必须由人确认。 边界：不是所有事情都要人工介入，但高风险动作必须保留 human override。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->







今日开始学习，先发了一个prompt作为post，给大家需要用hermes agent来学习的同学

然后跟着做做任务 收集问题
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->









酷酷回答大家问题中，守住第一波沉淀学员  
  
自己的hermes其实还没部署，因为我一直在构想可以覆盖更多个人情景的agent

这次学习只是其中一块
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
