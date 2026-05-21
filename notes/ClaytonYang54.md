---
timezone: UTC+8
---

# Clayton

**GitHub ID:** ClaytonYang54

**Telegram:** @clayk5

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
**AI：**

继续深化 Hermes 的使用，尝试在 GitHub 上配置相关 Skills，探索如何将 Hermes 与 AI Agent 结合，打造更完整的工作流。初步了解了 MCP（Model Context Protocol）的概念，理解其在 Agent 调用外部工具时的作用。

**Web3：**

复习了昨日 Bruce 老师课程内容，进一步巩固了私钥安全、钱包签名授权流程的理解。在 Etherscan 上查看了几笔真实交易记录，对 Gas Fee、交易状态、Input Data 字段有了更直观的认识。

**今日思考：**

AI 工具链（Coze / Hermes / Cursor）和 Web3 工具链（钱包 / 合约 / 链上记录）最终都指向同一个问题：谁在执行、谁在验证、执行的结果是否可信。这周的学习让我越来越感受到，AI × Web3 的核心不在于技术炫酷，而在于建立一套"可验证的信任机制"。

课程留给我们的四个问题，我也尝试思考了一下：

**1\. 资产自托管：如何提高安全性、降低管理私钥的复杂度？**

硬件钱包 + 助记词多地备份是现阶段最可靠的方案，但对普通用户门槛仍然很高。MPC（多方计算）钱包和社交恢复机制（如 ERC-4337 的 Account Abstraction）或许是未来方向——让用户不需要直接管理私钥，而是通过可信设备或关系来恢复账户权限。

**2\. 没有中心化机构 / 税收时，公共基础设施谁来维护？如果有税收，又如何分配？**

这是 Web3 最难解决的公共品问题。目前的尝试包括：协议层收取手续费并通过 DAO 分配给开发者和维护者（如 Uniswap、Gitcoin），但实际执行中往往还是被大持币者主导。真正去中心化的公共品激励，仍然是未解难题。

**3\. 没有审查且隐私很强时，如何界定并治理有害信息 / 黑产？**

这是 Web3 与现实世界最大的张力所在。完全无审查意味着链上黑产（洗钱、欺诈）难以被阻断。现阶段的思路是：链上行为虽然匿名，但可追溯——通过链上分析（Chainalysis 等）配合链下法律执行来威慑，而非在协议层审查。隐私与合规的平衡，可能需要零知识证明（ZKP）来实现"可验证但不泄露"的中间道路。

**4\. 去中心化协作下，如何实现公平、可信的分配？**

智能合约可以做到"代码即规则"，但规则本身是否公平还是取决于人的设计。DAO 投票容易被巨鲸操控，二次方投票（Quadratic Voting）是一种缓解方案。我认为真正的公平分配，需要结合声誉系统和贡献证明（Proof of Contribution），而不只是按持币量投票。

**明日计划：**

尝试用 Cursor 或 Windsurf 辅助编写一个简单的 Web3 小工具（例如地址余额查询脚本），把 AI Coding 工具真正用起来，走完"用 AI 写代码 → 在链上运行"这条最小路径。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

今日学习

AI：今天学习了安装Hermes，并且学习用agent去制造一个实际的应用去解决生活中的小问题，我运用coze做了一个图片压缩应用来解决日常图片文件过大的问题

Web3：听了Bruce老师的课，对web3支付风险有了新认识，应当保护好个人私钥

明日计划：学有余力的情况下，在github上面学习一些skills配备上Hermes，帮助我的web3×AI学习
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->


## 今日学习内容

### AI 基础

今天主要复习了 LLM（大语言模型）的基本概念，包括 Transformer 架构、Prompt 工程的核心思路，以及 AI Agent 与 Workflow 的区别。重点理解了 Tool Use 的工作原理：模型如何通过函数调用（Function Calling）与外部工具交互，完成超出纯语言推理范围的任务。

### Web3 基础

学习了钱包、地址、签名、交易、Gas 输入等 Web3 基础概念。在测试网（Testnet）上完成了一次小额转账操作，使用 Block Explorer 查看了交易哈希与确认状态。初步理解了智能合约的部署流程。

## 今日思考

AI Agent 与 Web3 的结合点让我印象最深：当一个模型可以自主发起钱包操作时，“谁来授权、谁来验证结果”就变得至关重要。Week 1 的核心任务就是把这条最小任务链走通：用户意图 → AI 规划 → 人工确认 → 钱包授权 → 链上执行 → 可验证记录。

## 明日计划

继续深入了解 AI Coding 工具的使用，尝试使用 AI 开发一个简单的 Web3 小工具，结合本周学习目标，找到一个 AI 与 Web3 真正需要彼此的具体应用方向。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->



完成 Learning Agent 初始化，建立個人 GitHub 學習倉庫：[https://github.com/ClaytonYang54/ai-web3-school-cohort-0](https://github.com/ClaytonYang54/ai-web3-school-cohort-0)

**確認學習方向**： 產品研究，Web3 優先補基礎。AI 背景：Claude 重度用戶，搭建了自己的工作流。每天 2–3 小時學習。

**明日計劃**：閱讀 Handbook Network 章節，去 Etherscan 查第一筆鏈上交易。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
