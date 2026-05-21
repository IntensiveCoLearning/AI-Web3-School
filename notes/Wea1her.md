---
timezone: UTC+8
---

# Weather

**GitHub ID:** Wea1her

**Telegram:** @jaycupup

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
-   **AI 与 Web3 结合方向**：
    
    -   **Web3 赋能 AI**：AI 模型算力和数据集中易受政策文化影响，Web3 可将其像区块链节点一样分散到世界各地，摆脱中心化限制。如 Btensor 项目，以算力质押代替金融质押，让个人或组织提供算力和服务，通过网关分流，由验证者节点打分并给予代币奖励，但目前分布式节点处理速度慢、效果差。
        
    -   **AI 赋能 Web3**：AI 可用于 Web3 钱包操作、链上数据分析、安全审计等。如 Coinbase agent Kit 让 agent 拥有链上钱包操作权利，Acumen 项目对链上数据进行行为分析，AI 能扫描识别交易对象和 code data 判断交易风险。
        
-   **AI 合约安全审计**：推荐 EVM bench 产品，可对模型审计能力进行测试，还分享了团队设计合约审计案例知识库进行模拟攻击得出安全审计报告的经验。
    
-   **AI 分析与传统量化模型**：两者可结合，不能互相替代，传统量化模型输出更稳定、反应更快，AI 分析可调整量化模型参数。
    
-   **AI 加钱包意图**：让 AI 拥有自主获取信息和支付能力，解决量化操作中获取信息按使用次数收费的问题，目前相关平台未出现颠覆性产品。
    
-   **稳定币与 AI 结合**：可尝试语义化操作将稳定币支付与 AI 结合，但目前效果不佳，还可考虑让中转站支持稳定币支付。
    
-   **独立开发者方向**：推荐开发 AI 钱包安全助手小应用，结合商业 agent 能力开发技能和工具。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

-   **Web3 运行原理概述**：
    
    -   **整体流程**：从点击钱包转账的 confirm 按钮开始，涉及身份认证、授权、传播、排序、执行、确认等过程，涵盖钱包私钥、个人主权、交易签名、区块链网络运行、智能合约及协议升级等内容。
        
    -   **核心问题**：要回答你是谁（涉及私钥、地址、签名）、你要做什么（交易内容）、大家为什么会相信结果（节点传播、验证、出块及合约状态变化）三个问题。
        
-   **钱包私钥与个人主权**：
    
    -   **私钥**：可理解为银行账号密码，能操作授权账号做各种操作，长度长且无法更改。
        
    -   **助记词**：是私钥的备份，通过派生路径可生成多个私钥，若助记词泄露，基于其创建的所有私钥都会丢失。
        
    -   **地址**：由私钥计算得出，相当于银行账号，用于接收转账。
        
    -   **个人主权**：创建钱包无需经过他人批准或提供身份信息，尤其适用于金融和身份体系不完善的地区。
        
    -   **安全性建议**：私钥助记词一旦泄露，钱包就不安全，需尽快转移资产，泄露方式包括被钓鱼、设备中木马、截图发网盘等。
        
-   **交易与签名**：
    
    -   **交易本质**：是授权网络执行某件事的数据，包括转账、投票、Mint NFT、调用合约方法等。
        
    -   **交易拆解**：可拆解为要做的事情、支付手续费、nonce（防止交易重放）、签名四个部分。
        
    -   **签名流程**：发送方用私钥结合交易信息生成哈希签名，通过 RPC 广播到区块链网络，接收方用 EC recover 算法验证签名和原始信息，确定是私钥拥有人签名的操作。
        
    -   **安全性挑战**：量子计算机等新技术可能攻破签名算法，导致区块链垮台。
        
    -   **gas 费**：即手续费，主要作用是挡掉垃圾交易、给出块者激励，让区块链运转起来，可在 etherscan 查看相关信息。
        
-   **区块链网络运行**：
    
    -   **RPC**：是传统 Web 与去中心化 Web 之间的网关，提供 HTTP 和 Websocket 服务，背后是去中心化网络中的节点，负责接收网络请求并放到区块链上。
        
    -   **内存池**：用于存放未被立刻打包的交易，交易在此排队等待。
        
    -   **builder 与 validator**：builder 负责将交易排序打包，validator 负责验证区块，确保区块无问题后接到链上。
        
    -   **共识机制**：主流的有 Pow 和 POS，Pow 通过做算法题解决哈希碰撞，谁先解出谁记账；POS 通过质押以太币成为节点，随机选出 proposer 记账，其他 validator 见证。Pow 耗电但去中心化更好，POS 节能但存在一定中心化问题。
        
    -   **区块确认**：以太坊共识机制下，新出的块在 12 分钟后基本安全，可确认转账已彻底执行。
        
-   **智能合约**：
    
    -   **本质**：是一段写在链上被交易触发的代码，用 bytecode 方式存储，在 EVM 虚拟机中运行，执行历史会写入区块，可查询。
        
    -   **社会学意义**：规则直接写在链上，不可篡改，改变了信任对象，降低了交易成本，使交易更频繁，具有跨国交易能力。
        
-   **区块链协议升级**：
    
    -   **升级流程**：先在 Ethereum magicians 论坛讨论，再通过 EF 组织的会议探讨，形成文档后发给各个客户端实现，在特定时间开启功能进行主网升级，每次升级都是硬分叉。
        
    -   **客户端软件**：包括执行层客户端和共识层客户端，用多种语言编写，可避免单一软件产生 bug 导致硬分叉。
        
    -   **升级优缺点**：优点是去中心化，不是一家公司拍板；缺点是涉及利益方多，升级频率不高，沟通成本大。
        
-   **Web3 关键特性**：
    
    -   **去中心化**：钱包创建和使用去中心化，但 RPC 存在中心化问题。
        
    -   **无许可**：任何人都可使用和读写，但需交手续费防止垃圾信息。
        
    -   **抗审查**：节点全球分布，软件多样，可抵御部分审查。
        
    -   **开源开放可验证**：客户端软件开源，交易可清晰查看和验证，降低信任成本，提高效率。
        
    -   **隐私**：虽交易信息公开，但难以确定地址对应的人，隐私性比传统金融好。
        
    -   **可组合性**：智能合约在链上可相互调用、串联。
        
-   **Web3 学科交叉与思考**：
    
    -   **学科交叉**：涉及密码学（签名算法、哈希等）、经济学（gas 费设置、POS 共识机制等）、社会学（去中心化治理、财产管理意识等）。
        
    -   **思考问题**：包括提高钱包安全性和降低私钥管理复杂度、网络维护和基础设施软件开发的承担者、税收分配、有害信息治理、去中心化协作下的公平可信分配等。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->


今天完成了 Week 1 Web3 向任务：整理 Web3 基础概念卡片。

Proof-of-Work:

\- Web3 概念卡片: [https://github.com/Wea1her/ai-web3-school-cohort-0/blob/main/tasks/week-1-web3-concept-cards.md](https://github.com/Wea1her/ai-web3-school-cohort-0/blob/main/tasks/week-1-web3-concept-cards.md)

\- Daily note: [https://github.com/Wea1her/ai-web3-school-cohort-0/blob/main/daily/2026-05-19.md](https://github.com/Wea1her/ai-web3-school-cohort-0/blob/main/daily/2026-05-19.md)

本次整理覆盖 blockchain、network、RPC、transaction、gas、account/address、private key、signature、wallet、smart contract、ABI、approve、block explorer、L1/L2、account abstraction 等基础概念，

并补充了我对 Transaction、Private Key、Wallet、Smart Contract、Approve 和 Account Abstraction 的理解。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->



今天完成了 AI Web3 School 个人 learning agent 初始化并配置好了Hermes agnet：确认了我的画像是 AI 新手、Web3 有基础、会 vibe coding，目标是在 Hackathon 中做出 AI + Web3 全栈 demo。我已经建立了本地学习仓库结构，包括 profile、learning plan、daily notes、tasks、experiments、handbook-feedback、hackathon 和 submissions。  

今天的重点是把学习路线对齐到 Week 1：先补 LLM、Prompt、Context、Agent、Tool Use 等 AI 基础，再结合已有 Web3 基础完成测试网/合约实践，最后做一个“AI 输出 -> 人工复核 -> 钱包确认 -> 链上执行 -> 区块浏览器验证”的最小交叉实验。

下一步我会打开 WCB Learning 确认今日课程和任务入口，并阅读 Handbook 的 LLM、Prompt、Context、Agent 章节，记录 5 条概念笔记。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
