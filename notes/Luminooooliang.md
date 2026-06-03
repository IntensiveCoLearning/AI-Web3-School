---
timezone: UTC-7
---

# Lumino

**GitHub ID:** Luminooooliang

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->
token是同质化代币，如每块硬币单位价值相同；NFT是非同质化代币，目前集中于艺术品和web3头像领域。

token基于ERC20协议发行，NFT通常基于ERC721、ERC1155发行。

NFT的应用极广泛，是未来Web3的重要基础设施。

NFT交易平台：

Opensea:[https://opensea.io/](https://opensea.io/) （交易量最大）

NFT热门项目：（我个人比较关注的）

加密朋克（crypto punk）

无聊猿（Bored Ape Yacht Club）

Doodles

Cool cats

Azuki

crypto coven
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->

1.  **LLM 的基本工作方式**：基于上下文进行概率生成，给定文本，预测最合理的下一个 token 序列。擅长语言理解、代码生成、推理；不擅长精确事实记忆、确定性计算、跨会话状态保持。
    
2.  **四个控制层面各管什么**：上下文窗口是"工作内存"，控制模型能看到多少信息；系统指令设置身份、语气和边界；提示词传递当前任务意图；工具调用让模型从"说话"变为"做事"。
    
3.  **动手调用 LLM API**：MaaS 让你无需 GPU，只用 API Key 按 token 付费调用顶级模型。核心入参：`model`、`messages`、`temperature`、`max_tokens`。推荐从 OpenAI、Anthropic 或 GLM 官方文档的 Quick Start 开始，跑通第一个请求。
    
4.  **Prompt → Workflow → Agent 的边界**：Prompt 是让模型回答，决策在人；Workflow 是预定义任务流程，模型是其中一个节点，路径固定；Agent 是模型自主规划、动态调用工具、跨轮管理状态。三者失控风险和可调试性完全不同。
    
5.  **AI Coding 工具的价值与限制**：Claude Code、Codex CLI、Cursor 能快速生成样板代码、解释陌生库、加速原型。但代码审查、测试设计、架构决策无法被替代。
    
6.  **AI 输出为什么必须验证**：1. 事实错误：自信编造不存在的信息，关键事实须外部核实；2. 引用错误：编造论文、链接、数据来源，不信任模型给的链接；3. 推理漂移：长上下文中逻辑链断裂，结论偏离前提，需分段验证；4. 执行越权：agent 做了超出授权范围的操作，须设置 guardrails 和 human-in-the-loop；5. 工具误用：调用了错误的工具或参数，须用 tracing 监控。
    
7.  **Agent 核心技术组件**：状态管理，多节点共享读写同一 State；长期记忆，跨 session 存储与召回；MCP，LLM 与外部工具的统一连接协议；Skills，可复用的高层指令集，支持自动发现和动态生成；Tool Calling，模型输出结构化请求，框架执行后回传结果；Tracing，可视化 agent 执行链；Guardrails，输入输出验证规则，不符合则中止；Handoff，子任务完成后移交控制权；错误恢复，执行失败时的重试、回退和人工介入。
    
8.  **什么时候需要 agent？** 目标开放式、无法提前写死步骤；需要多工具协作；中间结果决定下一步策略；需跨会话记忆状态。更适合用简单方案的信号：一次性问答用 Prompt；流程固定用脚本；高合规要求用人工审核节点；数据确定性要求高用数据库查询。复杂度和风险越高，越要警惕过度 agent 化
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->


Machine Payment 讨论的是 Agent、API、服务和钱包之间如何自动完成报价、授权、付款、收据和预算控制。重点不是“AI 会花钱”，而是让机器之间的支付可限制、可验证、可追踪。机器支付的核心，是把“付款意图”和“实际结算”拆开，并让每一步都有凭证。

结算与托管（Settlement & Escrow）Agent 可以购买 API、委托另一个 Agent 写代码、让服务商跑一个模型、或者完成一段链上操作。但付款和交付之间有时间差：先付钱可能被服务方骗，先交付可能收不到钱。

Escrow 提供一个中间层：资金先被锁定，服务完成并被接受后释放，失败或争议时按规则退款或仲裁。结算的核心不是“把钱打过去”，而是把任务、交付、验收和付款绑定成可验证流程。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->



知识概念学习：认识ai的分类，agent = LLM + harness engineering，hermes的核心能力了解，新手友好gateway接入，Skill就是把你经常干的固定工组习惯和偏好总结起来，再下次agent发现你又要这么做的时候，就会去调用skiil，一種自動化流程类似于超详细提示词，API就是驱动

Memory是機器人主動把對話內容寫到一個地方 讓他每次載入的時候都會讀取 不然你開新的對話 機器人會忘記上一個對話內容

在老师的指导下学会了安装hermes并添加了很多API，学会了切换
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->







Co-learning：了解了我自己的一些疑问，开始没什么方向学习话，平时自学就是慢慢把1️⃣handbook里的概念文章和每周任务里的推荐材料 / 参考入口全部看完理解2️⃣在交流群和每周colearning里提问3️⃣自己调研，把最小实践里的任务尽量完成

正式课程：

1️⃣基础知识和架构能力决定ai最终质量，ai一直是工具，协同提升效率

2️⃣不同领域的web3里web2需求能力很大

3️⃣web3里项目安全很重要，审计≠安全，做的越多架构能力越强保障越大，安全理解力🟰资产保护力

4️⃣和web2不同要问题是解决信任问题，本质是密码学的数字签名和单向函数

5️⃣大致钱包分类：实现原理分类，多签钱包，托管方式分类

6️⃣钱包安全隐患：私钥泄露，签名欺骗，权限滥用

7️⃣在签名之前交易模拟，可以ai介入
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
