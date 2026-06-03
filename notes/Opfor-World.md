---
timezone: UTC+8
---

# Opfor-World

**GitHub ID:** Opfor-World

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->
今天没有学习任务，自己好奇了解了一下web4.0

1.web4.0定义

借助AI + 环境智能 + IoT + 可信区块链 + XR（扩展现实），让数字世界和物理世界全面融合，形成直观、沉浸、无缝的体验。

AI / 环境智能 → 系统的"大脑"（感知、推理、决策）

IoT → 系统的"神经末梢"（物理世界接入）

可信区块链 → 系统的"信任底座"（AI之间交互可验证）

XR / 虚拟世界 → 系统的"交互界面"（虚实边界消融）

2.symbiotic web

AI 不再是"网站上的一个功能"，而是网络的原生居民——有自己的数字身份（DID），能自主管理预算、与其他 AI 或人类签智能合约，从工具升格为行为者。

3\. 产业/加密叙事（2026年被引爆的讨论）

Sigil Wen 的 Web 4.0 宣言：瓶颈不是 AI 不够聪明，而是权限和支付机制不让它独立行动。Web 4.0 要解决的就是——让 AI Agent 能自主浏览、调用服务、发起交易、与其他 Agent 谈判协作。机器支付是它的经济基石。

机器支付之所以成为独立议题，正是因为 Web 4.0 需要 AI Agent 成为经济主体。 一个不能花钱的 Agent 永远只是个聊天框；只有配上支付能力 + 数字身份 + 信任机制，它才真正变成一个在网络里替人办事的独立行动者。

（机器支付的重要性）
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->

机器支付：

1.定义

也就是 M2M（Machine-to-Machine）支付：不是你掏出手机手动扫码，而是设备、程序或智能终端在一定条件下自动触发付款。

2.主要场景

无人零售/自助设备：自动售货机、自助咖啡机、智能货柜——你拿取商品→感应→机器自动结算扣款。

物联网/IoT 自动结算：例如新能源车充电桩按用量自动计费扣费；共享设备按使用时长自动续费。

企业侧自动化付款：RPA/后台任务根据规则（发货确认、对账结果等）自动触发银行/第三方打款。

3.本质

支付的发起方是机器或程序，人只做授权/设置，不逐笔手动点"确认"。

4.关键环节

身份/凭证（手机号、会员码、车牌、设备ID、Token…）

计量/触发条件（重量传感、用电度数、停车时长、订单状态）

扣款通道（微信/支付宝免密、预授权、企业对公接口等）

机器支付标准

1.MPP（Machine Payments Protocol，机器支付协议）

把 AI Agent、商家、支付服务商之间的交互变成标准化、可编程流程，解决互操作性

2.APOP（Agentic Payment Open Protocol，智能体支付开放协议框架）

四大支柱：智能体身份管理 → 意图管理 → 用户身份管理 → 支付授权管理；强调合规可控、安全为要、信任链 

3.ACP / UCP 等

不同路径的 Agent-to-Agent 或 Agent-to-Merchant 支付"沟通规则" 

支付通道必须 KYC（知道谁发起）+ AML（反洗钱）+ 交易可溯源，机器代付也不例外！
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->


\# Day 3: 提示词（Prompt）

\- **日期**: 2026-05-22

\- **章节**: \[提示词（Prompt）\]([https://aiweb3.school/zh/handbook/ai/prompt/](https://aiweb3.school/zh/handbook/ai/prompt/))

\- **学习时长**: ~30min

\- **状态**: ✅ 完成

\---

\## 📖 核心概念

\### 1. Prompt 的本质

\> **Prompt 是你和模型之间的接口设计。** 它不只是"怎么问 AI"，而是把任务目标、输入边界、输出格式、失败处理和安全规则写进一次可执行的\*\*沟通协议\*\*。

\- ❌ 误区：Prompt 越长、越像专家，效果就越好

\- ✅ 正确：Prompt 的价值在于把\*\*模糊任务\*\*变成模型可以\*\*稳定执行\*\*的工作说明

\- 关键：\*\*好的 prompt 不是让模型更自信，而是让模型在合适的时候停下来\*\*

\### 2. 第一性原理

\> **Prompt 是软约束，不是安全边界。** 真正的边界必须由代码、权限、校验和审计来承担。

三大原则：

| 原则 | 说明 |

|------|------|

| 🧩 指令分层 | 系统规则、开发者规则、用户目标、检索内容不能混在一起 |

| 🔧 输出可检验 | 关键结果用 JSON schema / 函数参数承载 |

| 🚫 高风险不靠 prompt | 写库、发消息、调工具、支付签名 → 必须有代码层校验 + human check |

\---

\## 🧠 知识节点

\### Instruction（指令）

Instruction 是给模型的任务规则，回答 4 个问题：

1\. **任务目标** — 你要完成什么

2\. **可用输入** — 你可以用哪些信息

3\. **禁止行为** — 你不能做什么

4\. **输出和失败格式** — 输出长什么样，失败时返回什么

\> 特别要区分\*\*"解释"vs"执行"\*\*：可以整理资料但不能假装结论已验证；可以生成 patch 但不能默认已通过测试。

\### Few-shot（少样本示例）

在 prompt 里放少量示例，让模型模仿判断方式和输出格式。

\- ✅ 适合：风格和边界难一句话说清的任务（如交易分析）

\- ⚠️ 维护成本：协议升级、字段变化后，旧示例可能误导模型

\- 💡 **示例不是一次写完的素材，是要跟 eval 一起维护的测试资产**

\### Structured Output（结构化输出）

让模型按固定结构返回结果（JSON object / 函数参数 / schema 约束）。

典型字段示例：

\`\`\`

action: explain\_transaction | prepare\_swap | reject

risk\_level: low | medium | high

requires\_human\_approval: true | false

uncertainties: \[不能验证的事实列表\]

\`\`\`

\> 结构化输出不是为了让输出"好看"，而是为了让后续代码能\*\*检查、拒绝、记录和回归测试\*\*。

\### Prompt Injection（提示注入）

攻击者通过用户输入、网页、文档、邮件或检索内容，让模型忽略原始规则。

⚠️ **Agent 场景尤其危险**：模型可能不只是回答问题，还能读私有上下文、调用工具

**应对方法（不是靠写"不要被注入"）：**

1\. 🔒 外部内容标记为不可信数据

2\. ✅ 工具调用前做参数校验

3\. 🛡️ 敏感动作走 allowlist + human approval

4\. 🔑 不把密钥和不可撤销动作交给模型

\---

\## 🔗 在 AI × Web3 中的位置

Prompt 处在\*\*用户目标\*\*和\*\*模型行为\*\*之间。安全的完整链路：

\`\`\`

Prompt → Context → Model → Code → Guard/Simulation → Human Check

定义任务 提供数据 生成响应 校验schema 检查链上影响 确认高风险

\`\`\`

\---

\## 🛠️ 最小实践：交易风险摘要

输入：交易地址、函数名、参数、资产变化、simulation 结果、用户意图

输出 JSON：

\`\`\`json

{

"summary": "交易摘要",

"asset\_changes": \["资产变化列表"\],

"permissions\_changed": \["权限变更"\],

"risk\_level": "low/medium/high",

"requires\_human\_approval": true/false,

"uncertainties": \["不确定信息"\],

"recommended\_user\_checks": \["建议用户检查项"\]

}

\`\`\`

测试用例：普通转账 → 无限授权 → 目标地址与意图不匹配

\---

\## 📚 扩展阅读

\- \[OpenAI Prompting Guide\]([https://platform.openai.com/docs/guides/prompting](https://platform.openai.com/docs/guides/prompting)) — prompt 管理、变量、版本

\- \[OpenAI Prompt Engineering Guide\]([https://platform.openai.com/docs/guides/prompt-engineering](https://platform.openai.com/docs/guides/prompt-engineering)) — 清晰指令、示例、输出格式

\- \[OpenAI Structured Outputs\]([https://platform.openai.com/docs/guides/structured-outputs](https://platform.openai.com/docs/guides/structured-outputs)) — schema 约束

\- \[OWASP Top 10 for LLM Applications\]([https://owasp.org/www-project-top-10-for-large-language-model-applications/](https://owasp.org/www-project-top-10-for-large-language-model-applications/)) — Prompt Injection 等安全风险
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->



Topic: 大语言模型（LLM）

Permalink: Topic: 大语言模型（LLM）

Key Concepts Learned:

• Token — 模型处理文本的基本单位。一个汉字≈1-2个token，英文单词≈1个token。Token数量直接影响上下文长度和成本。

• Embedding — 把文本映射成向量，用于语义搜索和相似度比较。适合找资料，不适合判断结论正确性。

• Transformer — 现代LLM的核心架构，靠attention机制在上下文中找模式。擅长任务：总结、写代码、生成计划；不擅长：当数据库、做事实校验。

• Hallucination（幻觉） — 模型生成看似合理但不可验证的内容。靠"写更好的prompt"不够，需要外部校验（来源引用、schema校验、人工确认）。

• Multimodal（多模态） — 模型可以处理文本+图片+音视频，能读懂截图、图表、界面，但关键判断仍需回到结构化数据。

Takeaway: LLM 是推理层，不是真相源。模型输出 = 候选结果 → 需要外部数据校验。

AI × Web3 中的位置:

数据层：RPC / 索引器 / 预言机

编排层：Prompt → Context → RAG → Agent Workflow

执行层：Tool calling → Wallet → Smart Contract

安全层：Guard → Simulation → 权限策略 → 人工确认

Copy code to clipboard

Questions / Blockers

Permalink: Questions / Blockers

• 还想了解更多关于 prompt 怎么写清楚的技巧

Check-in Status

Permalink: Check-in Status

Incomplete task

Submitted to WCB

Incomplete task

Submitted to check-in platform

• Link:

Next Steps

Permalink: Next Steps

• Tomorrow: Read Prompt 章节（提示词）

• Practice: 写一个简单的 prompt 试试

(已经同步到GitHub）
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->




![75289f364db872768eec8fbd1e584f5c.jpg](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Opfor-World/images/2026-05-18-1779117411735-75289f364db872768eec8fbd1e584f5c.jpg)

区块链 (Blockchain)

一个由全网共同维护的“超级公共账本”，一旦记上去就谁也无法篡改。它是 Web3 的地基。

DApp (Decentralized Application，去中心化应用)

运行在区块链上的应用程序。它没有中心服务器，所以不会轻易宕机或被封杀。

钱包 (Wallet)

不是用来存钱的，而是用来管理你数字身份的“钥匙串”。里面装着你的密码学密钥，有了它才能证明“你是你”。

NFT (Non-Fungible Token，非同质化代币)

一种独一无二的、不可分割的数字资产凭证。常用来代表图片、音乐、游戏道具甚至房产的所有权。

Token (代币)

Web3 生态里的“通用积分”或“股票”。既可以用来支付手续费，也可以作为奖励发给用户，甚至用来参与社区投票。

智能合约 (Smart Contract)

提前写死在区块链上的代码。一旦触发条件（比如到了某个日期），它就自动执行（比如打钱），没有任何人能干预。

DAO (Decentralized Autonomous Organization，去中心化自治组织)

一个没有老板、没有层级的公司。所有规则由智能合约制定，重大决策靠大家持票投票。

DeFi (Decentralized Finance，去中心化金融)

把银行搬到了区块链上。无需开户、无需身份证，只要有网，任何人都可以借贷

GameFi (Game + DeFi)

边玩边赚的游戏模式。你在游戏里打的装备、养的宠物，都是以 NFT 的形式真正属于你的资产，随时可以拿到市场卖掉变现。

元宇宙 (Metaverse)

一个持久在线、与现实平行的虚拟三维空间。Web3.0 的技术（如 NFT 确权、区块链经济系统）被认为是构建元宇宙的底层基础设施。

今天是第一次课，因为我对web3.0是一无所知，所以我今天主要是对课程的内容进行理解，并检索了一些web3.0常见的专有名词进行理解，初步了解web3.0到底是个什么东西以及它的发展方向
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
