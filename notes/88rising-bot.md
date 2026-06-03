---
timezone: UTC+8
---

# Francisco

**GitHub ID:** 88rising-bot

**Telegram:** @Franciscowen

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->
**核心要义：** 把概率模型放进确定性流程。AI x Web3 的难点不是让模型说"我可以帮你操作"，而是把操作拆成可验证、可回溯、有停止条件的步骤。

**7 个知识节点：**

**🔷 Task Graph**

• 节点: 🔷 Task Graph

• 等级: 中级

• 一句话: 目标拆成节点+依赖，每步有输入/输出/权限/停止条件

**🔷 State Machine**

• 节点: 🔷 State Machine

• 等级: 高级

• 一句话: 链上状态不能忘：draft→confirmed→reverted

**🔷 Human-in-the-loop**

• 节点: 🔷 Human-in-the-loop

• 等级: 中级

• 一句话: 人只在关键风险点确认（不是每一步）

**🔷 Retry/Fallback**

• 节点: 🔷 Retry/Fallback

• 等级: 中级

• 一句话: 发送交易失败先查是否已广播，不能盲目重试

**🔷 Trace**

• 节点: 🔷 Trace

• 等级: 初级

• 一句话: 没有 trace 只能看聊天记录

**🔷 Evaluation Harness**

• 节点: 🔷 Evaluation Harness

• 等级: 高级

• 一句话: 测 Agent 能否正确拒绝越权请求

**🔷 Regression Set**

• 节点: 🔷 Regression Set

• 等级: 中级

• 一句话: 5 个固定用例防止更新后安全退化
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->

在 Agent 模式下，**绝对不要**将真实主网钱包的私钥硬编码在代码中或直接提交给 AI。

**核心原则：** 最小权限与物理隔离。

1.  **首选环境：** 永远在测试网（Testnet）开发和测试 Agent，使用无价值的测试币。
    
2.  **环境变量注入：** 如果必须使用，将私钥存放在 `.env` 文件中，并通过代码读取（如 `process.env.PRIVATE_KEY`），并在 `.gitignore` 中严格排除 `.env` 文件。
    
3.  **专用隔离钱包：** 如果进行主网交互，务必创建一个全新的、仅充值少量用于支付 Gas 费的**独立钱包**，专门授权给 Agent 使用。绝对不要使用包含你主要资产的日常冷/热钱包。
    
4.  **限制授权：** 在智能合约层面，限制 Agent 地址的交易额度或特定操作权限。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->


今天学习了 AI Frameworks（框架）——它解决的不是「跑不起来」的问题，而是「调不动、测不了、换不掉」的问题。先理解工作流再选框架，比先选框架再迁就产品逻辑重要得多。

关键概念：LangChain（组件库适合快速连接）、LangGraph（状态机适合多步任务）、DSPy（数据驱动优化取代手工调 prompt）、Learning Agent（反馈闭环要先进 eval 再进生产）。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->



今日专题：检索增强生成（RAG）— 证据链

核心学到了 RAG 五层流程：

**Chunking**

• 层: Chunking

• 要点: 按结构切片，保留 metadata，不能按固定字数硬切

**Vector DB**

• 层: Vector DB

• 要点: 语义相似度 + metadata 过滤，向量相似 ≠ 答案正确

**Retriever**

• 层: Retriever

• 要点: 混合检索，含版本/时间/地址判断

**Rerank**

• 层: Rerank

• 要点: 按场景决定是否加延迟成本

**Citation**

• 层: Citation

• 要点: 让答案可验证，没有引用=换了个地方幻觉
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->




📚 **Day 3 — 5/21 笔记：Prompt Engineering**

**今日主题：** 提示词（Prompt）— 你与模型之间的接口设计

**4个核心概念：**

\- **Instruction** — 四段式：任务目标→可用输入→禁止行为→输出格式

\- **Few-shot** — 放少量示例让模型模仿判断方式

\- **Structured Output** — 让模型输出固定 JSON/schema，被下游代码消费

\- **Prompt Injection** — Agent 场景高危，需标记不可信输入+参数校验+人工审核

\*\*B
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->





Day 2 — LLM Basics

今天学习了 LLM 的第一性原理：它的核心是 next-token prediction，不是数据库。关键概念：Token（处理单位）、Embedding（语义向量）、Hallucination（幻觉风险）。

LLM 擅长总结和生成，但不能替代事实校验 — 这对 BD 工作来说很重要：AI 可以帮你快速扫描信息，但链上数据和官方文档仍然需要人工验证。

下一步：学习 Prompt 工程，尝试用结构化 Prompt 做竞品分析实验。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->






-   **准备服务器**：搞一台云服务器，装好基础的 Python 和 Git 环境。
    
-   **拉取代码**：把 GitHub 上的代码克隆到服务器，装好需要的依赖包。
    
-   **配置“大脑”**：修改配置文件（`.env`），填入你的大模型 API 密钥和链上数据节点地址。
    
-   **接通“嘴巴”**：在配置文件里加上你的 Telegram 机器人 Token 或者微信网关地址，让 Agent 能跟你说话。
    
-   **后台挂机**：用 `screen` 或类似的工具把程序跑起来，关掉电脑它也会在云端 24 小时自动运行。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->







# 5.18共学笔记

**前言**

web3世界于web2世界的核心不同就在于去中心化，人们开始意识到‘’权威‘’本质上是人的选择的凝结，但在web2世界权威并不可靠，在经历过法币贬值以及超发，国家信用坍塌后，越来越多的人开始转投于web3世界，一个去中心化的世界。

除了钱包、私钥、cex、dex等等基础概念外，还学习到了有关支付的知识。

**钱包**

钱包分为冷钱包、热钱包和温钱包（根据资产分流划分）。我突然想起一句话，Not your keys, not your coins，这句话很直接的点出了托管和自托管钱包的分别，托管钱包在本质上还是将‘’生杀大权‘’交给了交易所，根据以往的经验（ftx的暴雷等等），大额资金储存于安全的自托管钱包是很有必要的。再按技术划分又分为EOA 、智能合约 、MPC钱包。

**支付**

签名发起：用户决定转账，用私钥签名锁定交易内容。 全网广播：交易发送到区块链网络，进入内存池（Mempool）排队。 打包上链：验证节点（矿工）抢单，将交易打包进新区块。 确认到账：区块链接入主链，全网账本同步，资金完成结算。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
