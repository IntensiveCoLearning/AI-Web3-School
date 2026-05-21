---
timezone: UTC+8
---

# berylinureye

**GitHub ID:** berylinureye

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->
Cohort Day 3 · 我第一次部署了自己的智能合约 + +60 分

【实操突破】

1️⃣ 调用了 Sepolia 上的 WETH9 合约 deposit()，把 0.0001 ETH wrap 成 0.0001 WETH

\- Tx: 0x72a6c0e85c15fb2067f6218337989a32285465cee7cb26e6519155b515fc7a68

\- 我今晚学的所有概念（ABI / storage / event / 广播 / EVM / gas）在这 12 秒里全部物理发生

2️⃣ 在 Sepolia 上部署了自己的第一个 Counter 智能合约

\- 合约地址: 0x736b9278e7fa24e49C5de9b2bC96A6eb6EF19c73

\- 源码已 verified（任何人都能查源码、调函数）

\- 这是过去 600 年人类历史从未有过的能力——付几美分 gas，往世界计算机上放任意逻辑，永久运行

【概念突破】

跟 Claude Code Learning Agent 用主动学习循环（自己读 → 自己总结 → Agent 纠偏）把以下概念彻底搞清楚：

\- 区块链解决的 600 年根问题

\- Bitcoin 的村庄账本游戏 + PoW + 哈希链

\- 哈希的"难做易验"非对称数学（这是 PoW 安全的全部基础）

\- nonce 不是计算次数而是输入参数；哈希答案不唯一是天文数字个

\- 21M 硬总量 ≠ 经济稀缺度（还要看持有分布）

\- EVM 是执行层 ≠ 区块链；哈希 ≠ 挖矿

\- ETH 不是为了发币而存在，是为了让世界计算机能运转

\- 图灵完备是 Ethereum 区别 Bitcoin 的根本能力

\- EIP-1559 销毁机制怎么让 ETH "用得越多越稀缺"

【WCB 战绩】

今晚 +60 分（#13 部署/调用合约 30 + #8 AI 概念卡片 10 + #37 信息流清单 20）

本周累计 11 task / 210 分 / 640 = 32.8%

3 天前我还不知道智能合约是什么。

【今晚最深的洞察】

"拥有"智能合约跟"拥有"房产完全不同——没有链外法律保护我，我的 Counter 部署后全球公开，任何人能调 increment()，只有我能 reset。"拥有"= 仅仅是"代码里写了哪些 admin 权限给我"。这就是 Web3 给 builder 的根本能力——任何人付几美分 gas 就能往公共计算机上放任意逻辑，永久运行。

🔗 我的 Counter 合约: [https://eth-sepolia.blockscout.com/address/0x736b9278e7fa24e49C5de9b2bC96A6eb6EF19c73](https://eth-sepolia.blockscout.com/address/0x736b9278e7fa24e49C5de9b2bC96A6eb6EF19c73)

🔗 当日笔记: [https://github.com/berylinureye/ai-web3-school-cohort-0/blob/main/daily/2026-05-20.md](https://github.com/berylinureye/ai-web3-school-cohort-0/blob/main/daily/2026-05-20.md)

🔗 部署 proof: [https://github.com/berylinureye/ai-web3-school-cohort-0/blob/main/tasks/week1-deploy-or-call-contract.md](https://github.com/berylinureye/ai-web3-school-cohort-0/blob/main/tasks/week1-deploy-or-call-contract.md)
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->


Day 2 (Cohort) · 概念扎根 + WCB 批量补交

今晚通过 Claude Code 跟 Learning Agent 走了 4 轮 Q&A，修了 3 个智能合约领域的关键认知错误：

1\. "EVM 基于智能合约" 是反的——智能合约跑在 EVM 上，EVM 是执行环境

2\. EOA vs EVM 是比错对象（一个账户类型 vs 一个虚拟机），正确对比是 EOA vs 合约账户

3\. "合约账户没私钥所以不安全" 拆开看：作为应用 vs 作为智能钱包，后者反而比 EOA 弹性更好

意外收获：今晚 Q&A 直接命中了 Week 1 进阶任务 #14（30 分），加上前面 0518 钱包实操和今天 setup 工作，一晚上批量补交了 5 个 task / 90 分。本周累计 8 task / 150 分。

工程层面：把 WCB Agent API 接进了 Learning Agent，以后每晚自动拉真实任务列表对齐计划，不再凭 Handbook 拍脑袋排进度。也踩了一次 API key 泄漏的真实坑——Agent 拒绝使用聊天里的 key，引导我走 revoke + env var 流程，这成了 #9 Learning Agent Setup 任务里 human-in-loop 案例的素材。

明天 Day 3：5.20 Web3 运行原理 live + 部署一个最小智能合约（#13, 30 分）。

🔗 笔记 [https://github.com/berylinureye/ai-web3-school-cohort-0/blob/main/daily/2026-05-19.md](https://github.com/berylinureye/ai-web3-school-cohort-0/blob/main/daily/2026-05-19.md)

🔗 EOA/智能账户/多签 对比 [https://github.com/berylinureye/ai-web3-school-cohort-0/blob/main/tasks/week1-account-permissions-comparison.md](https://github.com/berylinureye/ai-web3-school-cohort-0/blob/main/tasks/week1-account-permissions-comparison.md)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->



## 今天做了什么

-   整理并上传了桌面的 Web3 学习笔记到 GitHub 仓库 `ai-web3-school-cohort-0`
    
-   把学习笔记整理到 `notes/web3/` 目录，并补充仓库索引与微信同步说明
    
-   复盘了密码学、钱包、EOA、交易、Gas 与智能合约
    
-   重新思考了为什么要研究 Web3，以及 Web2 支付和 Web3 支付的差异
    
-   从 0 装好 MetaMask、纸抄助记词、切到 Sepolia 测试网
    
-   从 Google Cloud Sepolia Faucet 领到 0.05 SepoliaETH，地址第一次在链上"存在"
    
-   在 metamask.github.io/test-dapp/ 完成首次 Connect + Personal Sign，并用 VERIFY 反推签名地址，理解链下密码学的闭环
    
-   在 MetaMask 里创建 Account 2，把 0.01 SepoliaETH 从 Account 1 转给它，跑通了一笔真正改变链上状态的交易
    
-   在 Blockscout（备用 Explorer，国内访问比 Etherscan 稳）查到了这笔 tx：Status Success / 23 Block confirmations / Burnt fees 0.00000494 ETH
    
-   把整个流程整理成 `tasks/web3-minimum-practice.md` 钱包交互地图并提交
    

## 关键收获

-   钱包不是“存币”的地方，而是管理私钥的工具
    
-   私钥决定资产控制权，助记词用于备份和恢复
    
-   交易要签名并支付 Gas，才能被网络执行
    
-   Web3 不是为了替代 Web2 支付，而是补足开放、可编程、跨境和无需许可的场景
    
-   Web2 支付更成熟、更适合日常消费；Web3 支付更适合开放式金融和链上协议场景
    
-   测试网不是模拟盘，是一条真正运行的独立区块链，只是币没价值；在 Sepolia 学到的操作 1:1 适用主网
    
-   dApp 跟钱包是两个独立主体：dApp 永远拿不到我的私钥，它只能向我请求签名或提交交易，最终决定权一直在我手里（这就是"用户主权"的实际含义）
    
-   签名是链下密码学操作，不上链、不花 gas，但 EIP-712 / Permit / SeaPort 类签名可以授权对方未来转走我的资产，比直接发交易更隐蔽
    
-   公开链 ≠ 隐私泄露：地址公开、历史公开是协议设计如此，唯一私密的是私钥
    
-   币安等 CEX 本质是"用区块链做后端的银行"，跟自托管钱包是两种完全不同的安全模型：前者防我自己出错，后者防第三方背叛
    
-   AI Agent 红线：消耗 gas 的交易、任何签名请求、钱包连接到新域名都必须人工二次确认
    

## 今天的总结

上半天整理理论笔记，下半天从 0 装钱包亲手在 Sepolia 上跑了一遍最小实践 —— 连接、签名、发交易、查 Explorer 全套。理论 + 实操结合后，”钱包是私钥的 UI”、”签名 ≠ 上链但可以等价授权”、”CeFi vs Self-custody 是两套安全模型”这些抽象概念有了真实手感。 也踩了真实的坑：MetaMask 网络切换 UI 入口混乱、Etherscan 国内访问失败、签名工具在侧边栏模式下点不动 —— 这些”接入层摩擦”恰恰是去中心化协议层之外的真实代价。Web3 的”去中心化”是协议层的，接入层依然是中心化基础设施。 Web2 支付的价值在于成熟和方便，Web3 的价值在于开放、可编程、无需许可。两者解决的是不同问题，不是替代关系。

## 下一步

-   改写 `tasks/web3-minimum-practice.md` 里 5 条 Learnings 草稿，换成自己的话
    
-   把今天的踩坑（侧边栏点不动、网络切换迷路、Etherscan 国内访问失败）整理到 `handbook-feedback/`，给手册作者反馈
    
-   按 Handbook 继续补充章节笔记，重点深入"签名分类"（personal\_sign / EIP-712 / Permit）和它们各自的钓鱼风险
    
-   给这个练习钱包设个明确边界：只做测试网练手用，永远不打主网真币
    
-   每天沉淀一篇可提交的学习记录
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
