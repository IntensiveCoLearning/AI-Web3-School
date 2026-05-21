---
timezone: UTC+8
---

# Yuwen Yang

**GitHub ID:** yangyuwen-bri

**Telegram:** @fraps05

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
今天完成了两个方向的学习和产出。

第一，我把 Week 1 的 AI 可交互学习产物重新定位为 AI Concept Coach，不是做一个普通聊天框，而是做一个 AI 概念复述训练器。它的流程是：用户输入一个 AI 概念困惑，工具调用 glm-5.1 生成结构化解释、自测问题和笔记草稿；然后用户必须用自己的话复述，工具再对复述进行评分和反馈，帮助学习者从“看懂”走到“能讲清楚”。这个工具已经通过本地 Node 后端接入阿里云百炼 / DashScope 的 glm-5.1，API key 不进入前端或公开仓库。

第二，今天参加 / 跟进了「AI 下乡计划｜AI 在 Web3 的应用」分享。我对今天内容的核心理解是：AI + Web3 的重点不只是发币，而是经济基础设施。当 AI agent 从回答问题走向执行任务，它会需要账户、支付、权限、验证和风险控制。安全在 Web3 里不是附加功能，而是基础设施的一部分。

我尤其关注「智能钱包和安全助手」这个方向。现在的钱包、安全扫描、交易模拟、风险标签等工具可以降低一部分风险，但还不能完全解决用户安全问题。因为很多风险发生在具体上下文里：用户是否真的理解签名内容、授权是否过大、dApp 是否可疑、交易是否符合用户真实意图。AI 在这里可能有很大空间：帮助解释交易意图、识别异常模式、生成签名前问题、提示风险和辅助用户复盘。但边界也很清楚：AI 可以解释、比较、预警和提问，不能替用户完成签名、转账、授权或合约写入。

今日产出：

-   demos/ai-concept-coach/
    
-   submissions/[2026-05-21-ai-concept-coach.md](http://2026-05-21-ai-concept-coach.md)
    
-   notes/[2026-05-21-ai-web3-applications-and-security.md](http://2026-05-21-ai-web3-applications-and-security.md)
    
-   hackathon/[ideas.md](http://ideas.md)
    

Repo:  
[https://github.com/yangyuwen-bri/aiweb3-learning-journal](https://github.com/yangyuwen-bri/aiweb3-learning-journal)
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

今天参加 / 跟进了 Week 1 的「Web3 运行原理」分享，并完成了 Sepolia 测试网实操。

课程部分主要复习了钱包、私钥和个人主权、交易与签名、区块链网络运行、智能合约、协议升级和 Web3 边界。我目前的理解是：Web3 运行原理不是单独理解钱包或合约，而是要把「私钥控制账户 -> 签名表达意图 -> 交易广播到网络 -> 节点验证和共识 -> 区块浏览器验证结果」串成一条完整链路。

实操部分：

1\. 切换 / 使用 Ethereum Sepolia testnet。

2\. 通过 Google Cloud Web3 Faucet 领取 0.05 Sepolia ETH。

3\. 在 Sepolia 区块浏览器确认 faucet 入账交易成功。

4\. 从 MetaMask 的 Account 1 主动发送 0.005 Sepolia ETH 到另一个测试账号 testTWO。

5\. 在区块浏览器中找到主动发送交易结果，并记录 transaction hash、status、block、Gas 和交易费用。

主动发送交易记录：

Transaction hash: 0xa9974b63b7bc3299545cfdd60e3282aff0deaa37e1a0cd7fac2c62ce6576655a

Status: Success

Block: 10886306

Value: 0.005 ETH

Transaction fee: 0.00005251673091 ETH

Gas price: 2.50079671 Gwei

通过这次练习，我完成了「切换到指定测试网 / 领取测试币 / 主动发送一笔测试交易 / 在区块浏览器中找到交易结果 / 记录交易哈希、状态、Gas、区块高度」这一组任务。本次操作仅发生在 Sepolia testnet，不涉及真实主网资金。

Repo:

[https://github.com/yangyuwen-bri/aiweb3-learning-journal](https://github.com/yangyuwen-bri/aiweb3-learning-journal)
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->


今天围绕 Week 1 的 AI Agent / Hermes 主题，整理了自己对 prompt、workflow 和 agent 的初步理解，并把它和我的 AI x Web3 School 学习仓库连接起来。

今日完成：

-   复习了自己的 Learning Agent 配置说明
    
-   明确了 Learning Agent 在学习中的作用：拆解任务、维护 repo、整理笔记、生成打卡草稿、沉淀 proof-of-work
    
-   梳理了 AI Agent 必须暂停的边界：GitHub push、WCB 提交、钱包签名、转账、授权、合约写入、任何 secret / 私钥 / 助记词相关操作
    
-   准备了 notes/[2026-05-19-agent-workflow-basics.md](http://2026-05-19-agent-workflow-basics.md) 作为今天的学习笔记入口
    
-   在昨天 PPT 学习笔记的基础上，做了一个交互式 HTML demo：AI x Web3 基础能力地图
    
-   Demo 路径：demos/foundations-map/index.html
    

当前理解：

Prompt 更像一次性指令，Workflow 是可重复执行的流程，Agent 则是在流程中使用工具、维护上下文、持续推进任务的协作者。对我来说，Learning Agent 的价值不是替我学习，而是帮我把每天的学习过程变成可追踪、可复盘、可公开的 proof-of-work。

另外，我把昨天课程 PPT 的 Markdown 笔记进一步产品化成了一个可交互学习工具。它把课程核心内容拆成 7 个可点击知识节点：AI 协作边界、Web3 工程系统、区块链状态机、钱包与账户控制、钱包安全风险、Web3 交易参数、架构师能力模型。这个 demo 的目标不是做展示页，而是把笔记变成可复习、可自测、可持续扩展的学习界面。

下一步：

听完 / 回看 Hermes Agent 课程后，补充 Agent 工作流笔记，并继续把每日学习记录和交互式 demo 同步到 GitHub repo。

Repo:  
[https://github.com/yangyuwen-bri/aiweb3-learning-journal](https://github.com/yangyuwen-bri/aiweb3-learning-journal)

Demo:  
[https://github.com/yangyuwen-bri/aiweb3-learning-journal/tree/main/demos/foundations-map](https://github.com/yangyuwen-bri/aiweb3-learning-journal/tree/main/demos/foundations-map)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->




今天完成了 Week 1 任务 2：创建个人 GitHub repo 作为 AI × Web3 School 学习工作区。

Repo:

[https://github.com/yangyuwen-bri/aiweb3-learning-journal](https://github.com/yangyuwen-bri/aiweb3-learning-journal)

已完成内容：

\- 创建公开 GitHub repo

\- 初始化 [README.md](http://README.md)

\- 创建 notes/、prompts/、demos/、logs/、[resources.md](http://resources.md)

\- 记录 learning agent 配置说明

\- 记录一次 agent 协助初始化学习仓库的日志

本次理解：

这个 repo 会作为后续课程实验、学习笔记、demo、prompt、agent 配置和复盘记录的统一入口，不再把学习记录散落在聊天记录里。

下一步：

继续补充 Week 1 的 AI / Web3 基础学习笔记，并完成一次 agent 协助学习或编码的小产出。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
