---
timezone: UTC+8
---

# Quinn

**GitHub ID:** baikingrio

**Telegram:** @QuinniuQ

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->
今天参加了 **Open Agentic Economy: From ERC-8004 / ERC-8183 to Builder Path** 直播分享。因为英文听力压力比较大，会后我补充查阅了 ERC-8004、ERC-8183 相关资料，重点理解 Agent 在开放经济中的身份、信任、任务执行和结算机制。

今天的主要收获是：  

ERC-8004 更偏向解决 **Trustless Agents** 的发现、声誉和验证问题；ERC-8183 更偏向 **Agentic Commerce**，通过任务托管、评估者证明和结算机制，让 Agent 之间或人与 Agent 之间的商业协作更可验证。

结合 Hackathon 项目，我完成并同步了 **AgentScoope Wallet v0.3**：从早期应用层限制，推进到基于 **Sepolia Safe + Zodiac Roles Modifier** 的受限执行钱包实验。当前版本已经可以演示：

\- Safe Owner 不把主私钥交给 Agent

\- Agent 只作为受限 role member 执行

\- 仅允许白名单 USDC transfer

\- 支持额度内执行

\- 支持超额拒绝

\- 支持非白名单拒绝

\- 支持撤销角色后拒绝

\- 每次执行/拒绝都生成结构化审计日志
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->

今天我参加了 Week 1 例会，听取了同学们的学习方法分享和主持人推荐的优秀笔记示例。最大的感受是，公开记录学习过程、持续输出 Proof-of-Work，是 AI × Web3 School 中非常重要的一部分。

白天我继续研究 Hackathon 项目 AgentScoope Wallet，重点探索 Safe Wallet 的模块机制和合约实现。在尝试把项目中的白名单 Policy 迁移到 Safe Module Guard 时，发现 Sepolia 测试网上的 Safe 版本仍是 1.4.1，而 setModuleGuard 是 Safe 1.5.0 才支持的功能，因此当前无法直接使用 Module Guard 实现这部分逻辑。

这个问题让我意识到，Web3 项目设计不仅要理解协议文档和架构思路，还要确认目标网络上实际部署的合约版本和可用接口。下一步我会调整 AgentScoope Wallet 的实现路径，优先探索在自定义 Safe Module 内部完成白名单和额度限制校验，先做出一个可验证的最小 Demo。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->


今天参加了「AI 下乡计划｜AI 在 Web3 的应用」的视频课程。

我的关键收获是：

\- **AI Agent + 钱包**：让 Agent 不只是“建议”，而是能在受控权限下执行链上操作。

\- **AI 链上分析工具**：用于地址画像、资金流追踪、风险识别、项目分析等。

\- **智能钱包和安全助手**：帮助用户识别钓鱼、恶意授权、异常交易，提高 Web3 使用安全性。

\- **交易所和 DeFi 智能风控**：用于监控异常交易、清算风险、合约风险、套利行为等。

这些方向和后续的 Hackathon 项目其实非常相关，尤其是 **AI Agent + 钱包 / 智能钱包安全助手** 这一类，非常适合作为可落地的产品原型。这次课程也让我对AI Agent的应用场景有了大致的方向，这为我后续的开发打开了思路，我逐渐开始理解 AI Agent 在 Web3 中不只是聊天助手，而是可以成为链上操作、安全分析、资产管理和风控决策的智能执行层。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->



今天观看了「Web3 运行原理」X 直播课程，重新温故了一遍 Web3 的基础概念和运行原理，也有了新的理解。布老师提到 Web3 是密码学、经济学、社会学三门学科的交集：密码学提供可验证的账户、签名和共识基础；经济学解释 Token、Gas 和激励机制；社会学对应协作、治理和信任关系的重构。

这和我的 Hackathon 项目 AgentScoope Wallet 也有关：Agent 要参与链上执行，不能只关注技术调用，还要同时考虑权限、激励、风险、治理和用户信任边界。

今天完成 / 推进的是：

1.  观看「Web3 运行原理」X 直播课程，补齐 Web3 运行模型理解。
    
2.  复习 Agent Wallet 与 Agent Workflow，关注 Agent 链上权限边界、Policy / Guard、Simulation 和撤销机制。
    
3.  推进 Hackathon 项目 AgentScoope Wallet，已建立 `experiments/agent-wallet/` 实验目录，并写出 README / config 示例 / demo 路径。
    

今天的目标产出是：

-   一份每日学习计划：`daily/2026-05-20.md`
    
-   一个 Hackathon 实验目录草稿：`experiments/agent-wallet/`
    
-   为后续 Sepolia Safe + 受限权限模块实验打基础。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->




今天我回看了「AI Agent 入门 —— Hermes 从 0 到 1」。

1\. 从视频中了解到配置微信作为 Hermes 消息网关的步骤和方法；之前自己安装 Hermes 时主要使用的是 Telegram。

2\. 多消息网关的意义不只是多一个聊天入口，而是可以让 Hermes 更自然地进入日常学习、任务提醒和路径管理流程。

3\. Hermes 可以作为 AI × Web3 学习路径 / Hackathon 项目的长期辅助学习助手，用来帮助拆解任务、整理资料、记录复盘和推进项目。

我的下一步行动是：

\- 充分利用 Hermes 作为辅助学习助手，多尝试每日复盘、任务拆解、定时提醒、资料整理和学习仓库维护等功能。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->





今天我完成了 AI × Web3 School 第一天的学习记录与 Week 1「搭建 learning agent」的起步。学习画像：AI 有基础、Web3 熟悉、能独立开发，目标方向是 Hackathon 项目，每天投入约 1-2 小时。

今天主要完成了：

1.  **学习仓库**：创建并初始化公开 repo（`ai-web3-school-note`），用于沉淀 proof-of-work、daily notes、experiments、handbook feedback 和 Hackathon 记录。仓库：[https://github.com/baikingrio/ai-web3-school-note](https://github.com/baikingrio/ai-web3-school-note)
    
2.  **Hermes Agent 搭建**（Week 1 主 learning agent）：
    
    -   按 [Hermes Agent 文档](https://hermes-agent.nousresearch.com/docs/) 完成安装与基础配置（API / 登录）。
        
    -   将本课程学习仓库与 [Learning Agent 启动 Prompt](https://aiweb3.school/learning-agent.zh.txt) 接入 workflow，用于整理每日任务、笔记与打卡草稿。
        
    -   跑通至少一次真实学习任务：协助生成/维护今日 `daily/2026-05-18.md`，并参与 Hackathon brief 起草。
        
3.  **Handbook**：阅读首页与 AI × Web3 Bridge 结构，后续重点放在 Agent Wallet / Agent Workflow 等章节。
    
4.  **Hackathon 方向**：选定 **钱包与权限（Agent Wallet）** 为切入点。
    

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/baikingrio/images/2026-05-18-1779109063386-image.png)
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
