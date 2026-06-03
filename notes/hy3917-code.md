---
timezone: UTC+8
---

# yvette

**GitHub ID:** hy3917-code

**Telegram:** @yvette3917

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->
为啥我被淘汰了
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->

**ERC-8004（身份）** — 给 AI 代理颁发"身份证"，让其他代理能找到它、信任它

**ERC-8183（商业）** — 定义代理之间如何接任务、锁定资金、验收结算，相当于链上版 Upwork

**x402（支付）** — 代理之间的即时微支付通道
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->


OpenAI Agents SDK 是 OpenAI 官方推出的一个轻量级、功能强大的 Python 框架，专为构建单 Agent 或多 Agent

协作工作流而设计。它秉持“Python 优先”的理念，让开发者无需引入过度复杂的抽象框架，就能轻松实现工具调用、状态管理、Agent

协作以及沙盒执行等高级能力。

1\. 核心概念与组件

\- 代理 (Agent)： Agent 是应用程序的核心构建块。在 SDK 中，一个 Agent 本质上是一个被配置了指令

(instructions)、工具 (tools)、护栏 (guardrails) 以及交接规则 (handoffs) 的大语言模型。

\- 模型配置：当前 SDK 默认使用的模型通常是 gpt-5.4-mini（针对低延迟 Agent 工作流优化）。如果你有权限，官方推荐切换至

gpt-5.5 以获得更高质量的输出。

\- 运行器 (Runner & Agent Loop)： 区别于直接调用基础的 Responses API，Agents SDK 的核心在于

Runner。Runner 能够为你自动管理“Agent Loop”（自动化的工具调用循环）、安全护栏、多 Agent

交接以及会话状态。开发者不再需要手动编写死循环来解析模型的每一次工具调用。

\- 交接与编排 (Handoffs & Orchestration)： 当一个复杂的任务超出单个 Agent 的能力时，系统可以通过 Handoffs

将对话无缝委派（Delegate）给其他专精的 Agent（如数据分析 Agent 交接给代码编写 Agent）。

\- 安全护栏 (Guardrails)： 允许开发者设置并行的输入校验机制或使用小型的辅助 Agent

作为“门卫”。例如，如果用户提出了与系统无关或敏感的话题，护栏可以在触发核心流程前阻断或拒绝请求。

\- 沙盒代理 (Sandbox Agents)： 这是针对长时间跨度、复杂任务的杀手级功能。Sandbox Agent

允许模型在一个持久化、隔离的工作区（如 Unix 本地或 Docker

容器）内运行。模型可以直接读取文档目录、写入文件、执行 Python 脚本和系统命令。SDK

在底层自动为你处理了文件同步、快照生命周期等繁琐问题。

2\. 强大的工具系统 (Tools)

工具赋予了 Agent 与外部世界交互的能力。SDK 将工具分为五大类：

1\. OpenAI 托管工具 (Hosted OpenAI tools)：如网络搜索 (WebSearchTool)、文件检索

(FileSearchTool)、代码解释器 (CodeInterpreterTool) 和图像生成 (ImageGenerationTool)

等，这些都在 OpenAI 的服务器上运行。

2\. 函数工具 (Function tools)：支持使用简单的装饰器，将任意普通的 Python 函数直接封装成工具供 Agent 调用，SDK

会自动提取参数 Schema。

3\. 本地/运行时执行工具 (Local runtime tools)：包含计算机控制 (ComputerTool)

和能在你的本地机器或容器中直接执行命令的终端工具

(ShellTool)。

4\. Agent 作为工具 (Agents as tools)：在不需要彻底交接 (Handoff) 对话控制权的情况下，允许一个 Agent 把另一个

Agent 当作工具来调用。

5\. 实验性工具：例如 Codex tool，用于在工作区范围内运行代码补全任务。

3\. 会话管理与进阶功能

\- 会话记忆 (Sessions)：SDK 提供了开箱即用的会话内存机制，可自动维护多个 Agent 运行周期中的对话历史记录（支持

SQLAlchemy、SQLite 和加密 Session 等后端）。

\- 多模态与实时交互：不仅支持纯文本，库中还囊括了对 Realtime Agents 和 Voice Agents 的支持，包括音频输入处理、SIP

电话集成和播放打断跟踪。

\- 可观测性 (Tracing)：集成了强大的 Tracing 功能，用于可视化、监控和调试复杂的多步骤工作流和内部逻辑。

4\. 架构选择：何时应该使用它？

官方文档给出了明确的开发路径指南：

\- 只想要简单的文字回复：使用基础的 Responses API 或 Chat Completions API 即可，这由基础的 OpenAI Client

Libraries 提供。

\- 需要自主规划、操作文件、跨角色协作：当你需要应用程序掌管编排、执行工具调用、管理状态（State）时，选择 Agents SDK。

\- 需要无代码/低代码体验：直接使用平台托管的 Agent Builder 界面。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->



[https://z168r49nf7s0-d.space-z.ai/](https://z168r49nf7s0-d.space-z.ai/)

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/hy3917-code/images/2026-05-20-1779274011029-image.png)

### **交互式概念测验网页**

**运行方式**: 直接访问当前页面预览

-   **19道选择题**覆盖 5 大知识领域
    
-   专业暗色主题 + 青色强调色
    
-   3屏流程：欢迎页 → 答题 → 结果仪表盘
    
-   实时进度条 + 分数追踪
    
-   每题答后显示详细解析
    
-   结果页：环形得分图 + 各领域得分条 + 错题回顾
    
-   高分(≥80%)时彩带庆祝动画
    
-   题目随机打乱，支持无限重试
    

![week1-mindmap.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/hy3917-code/images/2026-05-20-1779273975048-week1-mindmap.png)
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->




《大语言模型 (LLMs) 指南》学习笔记

1\. 核心概念：什么是大语言模型？

\- 本质： LLM 本质上是一个非常复杂的数学函数。

\- 基本原理（文字接龙）： 它的核心工作是“预测下一个词”。就像补全一张撕破的电影剧本，模型会根据已有的上下文，推测接下来最可能出现的字词。

\- 概率输出：

模型并不会给出一个百分百确定的唯一答案，而是会为所有可能的“下一个词”分配一个概率。系统通常会根据这些概率随机选取，这就是为什么每次问聊天机器人同一个问题，得到的回答可能都不一样。

2\. 惊人的训练规模

\- 数据量： 模型通过处理互联网上海量的文本数据来学习语言规律。如果一个人24小时不休不眠地阅读，仅读完训练 GPT-3 所用的数据就需要耗费

2600年以上。

\- 参数（Parameters / Weights）：

控制模型行为的核心是一系列连续的数值，称为“参数”或“权重”，你可以把它们想象成机器上数以千亿计的调节旋钮。“大”语言模型之所以大，是因为它们通常包含数千亿个这样的参数。

3\. 模型的训练过程

训练主要分为两个关键阶段：

\- 阶段一：预训练（Pre-training）

\- 初始状态： 参数最初是完全随机设置的，模型只会输出乱码。

\- 学习过程： 给模型输入一段文本的开头，让它预测下一个词，然后将预测结果与真实文本对比。

\- 反向传播（Backpropagation）：

系统使用一种叫反向传播的算法，轻微调整这千亿个参数，让模型下次预测正确的概率变大。经过几万亿次文本示例的重复训练，模型逐渐掌握了语言规律。

\- 阶段二：人类反馈强化学习（RLHF - Reinforcement Learning with Human Feedback）

\- 预训练只让模型学会了“续写互联网上的随机文本”。

\- 为了让它变成一个有用的问答助手，人类测试员会给它的回答打分、纠错。这些反馈会进一步微调参数，引导模型输出更符合人类期望、更有帮助的回答。

4\. 算力与核心架构：Transformer

要完成如此庞大的计算，普通的串行计算是不可能完成的（视频中举例，即使每秒计算10亿次也需要超过1亿年），所以必须使用针对并行计算优化的 GPU。

除此之外，2017年 Google 研究人员提出的 Transformer 架构彻底改变了游戏规则：

\- 突破瓶颈： 2017年之前的旧模型只能逐词（串行）阅读文本；Transformer 可以一次性将整段文字吃透，进行并行处理。

\- 词义数字化： 计算机不认识字，所以 Transformer 的第一步是将每个词转换成一长串数字（向量），用数字来编码词义。

\- 注意力机制（Attention）： 这是 Transformer 的灵魂。它允许句子中的词语互相“交流”。例如，遇到单词

"bank"，注意力机制会查看周围的词是 "river"（河岸）还是

"deposit"（银行），从而通过修改代表该词的数字列表，动态地明确这个词在特定语境下的准确含义。

\- 前馈网络（Feedforward）： 搭配注意力机制，用来存储模型在训练中学到的海量语言模式。

\- 数据会在“注意力层”和“前馈层”中循环迭代数十次，不断丰富对这段文本的理解，最终输出下一个词的概率预测。

5\. 总结：涌现能力（Emergent Behavior）

虽然人类设计了 Transformer

的数学架构和训练方法，但模型最终表现出的高智商、流畅对话能力是一种\*\*“涌现现象”\*\*。它是数千亿个参数在海量数据碰撞后自然产生的结果。因此，对于模型具体为什么会预测出某一个特定的词，连研究人员也很难做到完全透明的“黑盒”逆向解释。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
