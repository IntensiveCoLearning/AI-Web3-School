---
timezone: UTC+1
---

# boboinRL

**GitHub ID:** boboinRL

**Telegram:** @duoduoinweb3

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->
Claude code更加注重how the project works，not who the user is.

Claude code的项目都是为了长时间运行并且不出现代码漂移的情况。

hermes的向量模型不好用，向量模型是基于English来的，没有考虑到中文的适配

memory engineering是哈尼斯工程很重要的一环

harness engineering： 如果把 AI 模型或 Web3 协议比作一匹野马，那么 Harness 工程就是为了让它们能够安全、可控、高效地被企业或用户使用的“驯马技术”。

-   **Prompt Engineering 的进阶：** 不仅仅是编写提示词，而是构建一套复杂的“提示词工程流”，包括思维链（CoT）、少样本提示（Few-shot）和结构化输出约束（JSON Mode）。
    
-   **Guardrails（护栏）工程：** 利用工具（如 NVIDIA NeMo Guardrails 或自定义逻辑）来限制 AI 的输出，防止其产生幻觉、偏见、不合规信息或泄露隐私。
    
-   **Alignment（对齐）工程：** 通过 RAG（检索增强生成）或微调（Fine-tuning），将模型“约束”在特定领域的知识库中，使其回答符合行业标准。
    
-   **Agentic Orchestration：** 设计 AI 智能体的行为逻辑，确定它在何时调用 API、何时进行计算、何时请求人工干预。
    

**AI & Web3 专家视点：** 目前，这一领域的最高境界是“AI Agent + Web3 协议的深度融合”。即通过 AI 的思维逻辑（Harnessing AI），去自动化调用和执行链上的交易与逻辑（Harnessing Web3）。

memory 是最高的一个层级：解锁，生成

![Screenshot 2026-05-25 140156.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/boboinRL/images/2026-05-25-1779748220265-Screenshot_2026-05-25_140156.png)
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->

![Screenshot 2026-05-24 232707.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/boboinRL/images/2026-05-24-1779663334977-Screenshot_2026-05-24_232707.png)![](https://cdn.nlark.com/yuque/0/2026/png/35005522/1779661635987-c60ac7d3-6d78-4bae-8235-314922eeb0b0.png)

why used Ethereum foundation?

痛点在于： ”公共物品（Public Goods）”的分赃

而Ethereum foundation能够实现：

Trustlessness: 实现链上验证（On-chain Verification）**或通过**零知识证明（ZK-proofs）来确保：AI 计算的每一步、依赖图的每一个权重、以及最终的资金拨付，都是完全公开、透明、不可篡改且可追溯的。 避免了在某个服务器上被暗箱操作。

抗审查与自动化执行（Smart Contracts）：

常规的 AI 分配方案算完之后，还需要人工去走财务流程打款。而在以太坊的语境下，AI 算出的边权重和最终得分，可以直接对接**智能合约（Smart Contracts）**。 一旦算法收敛、评审团（Jury）抽检通过，资金会自动、直接、无许可（Permissionless）地打入贡献者的钱包，没有任何中心化机构可以拦截、冻结或审批这笔钱。

评审团（Jury）的去中心化博弈:

这里的 **Jury（评审团）** 往往不是几个人坐在办公室里开会，而是通过加密经济学设计（Crypto-economics）招募的链上节点或代币持有者。利用区块链的随机数生成器（如 Chainlink VRF 或以太坊自身的 RANDAO）随机抽取评审，并通过代币质押和奖惩机制，确保评审们为了自身利益而倾向于给出最诚实的答案。

**如何确保分配规则不被操纵、评审过程随机公正、资金能100%不折不扣地送到开发者手里”**，才是以太坊基金会试图用区块链技术去解决的核心痛点。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->


想要尝试听录播课，但是录播应该有点问题，听不见声音。只有看老师的文档了。我没有意识到AI _Web3能够有这么多方向。特别是AI agent_ 钱包，有了AI agent帮我管理钱包，那岂不是我可以赚更多的钱。以及智能钱包，我认为拥有像Coinbase Smart Wallet这种新手友好的钱包特别重要，感觉设计的就跟一般的数字银行app一样，才有普及大众的意义。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->




5.20 学习

钱包：

助记词一对多私钥，私钥一对一公钥

钱包管理钥匙和签名；余额，NFT和合约状态都在链上

私钥不能被重置，也不能泄露

交易：要做的事；gas fee; nonce (顺序)；签名 （signature）

数字签名：主要是验证是否为私钥拥有者签署的名字；

gas fee: 挡住垃圾交易；给出块者激励；

Etherscan可以查看交易

区块链网络：

智能合约：

链上可交易的代码，能够在EVM上面运行；执行历史很难篡改。

智能合约（代码）写到链上，不可改。但是合约可以被升级/代理到另外一个合约。

用密码学保障所有权，用经济激励协调参与者，用社会共识决定规则。

资金分配：

二次方资助（Quadratic Funding, QF）

追溯性公共物品资助（Retroactive Public Goods Funding, RPGF）

打击黑产：

前端合规风控 + 零知识证明合规

节点是怎么找到对方的？

底层有些初始化节点：每个新节点通过读初始化节点，然后广播来进行加入。

代理合约可以指向不同合约？

用户调用的合约是不变的，但是调用的合约背后可以指向不用合约。

语雀link：

[https://www.yuque.com/g/u33511068/wg9wgb/ee5wx71gyunrqfau/collaborator/join?token=R7iE7gL397JLmIb7&source=doc\_collaborator#](https://www.yuque.com/g/u33511068/wg9wgb/ee5wx71gyunrqfau/collaborator/join?token=R7iE7gL397JLmIb7&source=doc_collaborator#) 《AI \* Web3》

![Screenshot 2026-05-20 222722.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/boboinRL/images/2026-05-20-1779316365362-Screenshot_2026-05-20_222722.png)![Screenshot 2026-05-20 225449.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/boboinRL/images/2026-05-20-1779316383262-Screenshot_2026-05-20_225449.png)
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->





今天学习任务完成！成功在微信和电报里面安装了hermes！可以开始叫hermes给我当小助手了！

![Screenshot 2026-05-19 234457.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/boboinRL/images/2026-05-19-1779230809293-Screenshot_2026-05-19_234457.png)![5a93954c-d582-466d-9026-184db935e305.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/boboinRL/images/2026-05-19-1779230821562-5a93954c-d582-466d-9026-184db935e305.png)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->






[https://www.yuque.com/g/u33511068/wg9wgb/ee5wx71gyunrqfau/collaborator/join?token=R7iE7gL397JLmIb7&source=doc\_collaborator#](https://www.yuque.com/g/u33511068/wg9wgb/ee5wx71gyunrqfau/collaborator/join?token=R7iE7gL397JLmIb7&source=doc_collaborator#) 《AI \* Web3》 我5.18的学习笔记已记放在语雀了。请查收，我也附上了相关截图

![Screenshot 2026-05-18 135318.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/boboinRL/images/2026-05-18-1779144970692-Screenshot_2026-05-18_135318.png)![Screenshot 2026-05-18 235415.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/boboinRL/images/2026-05-18-1779144932847-Screenshot_2026-05-18_235415.png)
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
