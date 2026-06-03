---
timezone: UTC+0
---

# lllllbbbbbxxx

**GitHub ID:** lllllbbbbbxxx

**Telegram:** @JuneZhou

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->
补课

agent memory 是一个跨时间管理意图与状态的系统。它不是简单的数据库，也不是把聊天记录全部塞进上下文，而是决定哪些信息应该被记录、检索、修正、压缩，并在合适的时刻重新回到 agent 的上下文窗口。

不同产品对memory的要求不同，对话类产品更偏向记住长期事实和偏好，coding工具类更偏向记住项目相关的偏好，减少重复错误。

recall是用户能否感受到“被记住”的重要一环，当用户再次提问时，ai如何召回正确记忆。

对短期记忆的处理：持久化，压缩，不重要的内容直接清除。

不同场景对memory的要求不同，所以很难做到一个all-in-one的通用memory，对此需保持谨慎。
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->

补课

Neo-Cypherpunk：关注隐私、自由、边界，同时更强调社区和集体行动

隐私应在产品构思、系统架构和用户体验设计阶段就进入讨论，在产品初始就考虑数据收集最小化，需要让用户知道自己的数据哪些被获取了，用于何处

如何平衡ai agent的权限和隐私保护，是之后值得关注的问题，尽量减少暴露不必要的数据给ai
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->


想做一套 AI 工具把这些步骤压缩成一句话——输入 tx hash AI 解释交易，给个合约地址 AI 生成调用脚本。让 AI 做"读+整理+生成"，用户只做"检查+签名"。
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->



**自动层**  
查余额、查交易状态、合约只读函数、查交易历史、查区块浏览器信息  
  
**确认层**  
测试网转账、合约写入/部署、交互脚本生成、交易解释  
  
**禁止层**  
私钥管理、自动签名、自动真金交易、自动部署未审核合约、无限额度 approve、自动切换网络
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->




1\. Payment / Commerce / Settlement

ai提供报价，验收，结算；web3负责钱包，支付，链上记录；资产在web3中，而ai可以准备好前期工作  

2\. Identity / Reputation / Capability

ai负责协作；web3负责身份验证，信誉  

3\. Wallet / Permission / Safe Execution

ai负责自动规划，自动调用工具；web3控制权限，交易记录，签名等  

4\. Privacy / Security / Sovereignty

ai做本地推理，web3做可验证执行  

5\. Dev Tooling / Agent Workflow

ai做自动理解和生成开发流程；web3提供合约和可执行环境  

6\. Governance / Coordination / Public Goods

ai总结，协调；web3投票，透明记录
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->





回顾Web3 运行原理和AI 在 Web3 的应用

钱包不存资产，链上记录状态；签名表达意图，共识确认结果。

Bittensor：把AI 能力变成一种链上市场，去中心化AI网络；但是由于复杂度很高，参与用户没有那么多，而且如何客观评价AI的价值？但是依然有很大潜力，因为与AI Infra相关
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->






智能合约部署实践

尝试用remix部署了一个简单合约，并结合sepolia和测试钱包完成了读取和写入

部署交易结果：

-   部署 tx：0xf5a20e18d1f6df0ca68ca22a5967e95338d850e58a025c899ccbaf03cc1b63e7
    
-   创建的合约地址：0x4CfBc606D914bd099921b8c18E044425b1537992
    
-   状态：success
    
-   区块：10900495
    
-   部署 Gas：519172
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->







看了智能合约部分的内容，了解了基础知识，明天将尝试部署一个最小合约

账号抽象：现在的传统钱包用户体验不友好，在ai agent的帮助下，很可能能做到让钱包像普通app一样易于操作，当然中间的安全性还是要严格控制
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->








今日计划：

### 1.把 Hermes Agent 接入 Telegram

在telegram里搜索botfather和user info，获得token和ID，存入Hermes的.env中，打开和bot的聊天，随便发一句进行测试，发现需要设置/sethome，设置完后可成功运行

### 2.创建测试钱包并试用

下载了metamask，创建了测试钱包，用纸笔记录了助记词和密钥；

用 Sepolia faucet领取了一笔测试币，成功接收，交易细节写入logs/[test-wallet.md](http://test-wallet.md)，没有写上助记词等敏感信息；

在metamask上自己给自己做了一笔测试网转账并记录了交易哈希
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->









今天学习了 Web3 的账户和钱包基础，重点理解了 Account、Address、Wallet、Private Key、Seed Phrase 和 Signature。

了解了为什么区块链能在不依赖单一中心化担保方，通过通过密码学和和公开可验证的账本，让参与者可以验证状态和交易的真实性。

通过哈希验证数据完整性，Merkle Tree可以快速验证大规模数据；

钱包负责保存私钥、本地加密、本地签名、广播交易；

web3的UX比起web2有很多需要格外注意到地方，因为用户需要理解一些复杂的概念，而当前的UX很大程度上把复杂的理解成本转接给用户。

接下来准备创建一个测试钱包，发送一笔转账，了解web3交易流程
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->










创建了个人GitHub repo作为学习区[https://github.com/lllllbbbbbxxx/web3-ai-learning](https://github.com/lllllbbbbbxxx/web3-ai-learning)

配置了Hermes Agent，生成了个人学习计划
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
