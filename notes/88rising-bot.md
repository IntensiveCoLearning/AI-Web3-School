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
