---
timezone: UTC+8
---

# hansen

**GitHub ID:** nocb

**Telegram:** 

## Self-introduction

在虚拟世界重构一个新的我

## Notes

<!-- Content_START -->
# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->
## 链感知上下文（Chain-aware Context）

核心是把链上事实变成模型可读、可引用、可验证的上下文

核心原则：

-   链上状态有时间性，同一地址的余额会随区块变化；
    
-   上下文必须带来源（合约地址、区块号、交易哈希等），确保可追溯；
    
-   必须区分“事实”和“解释”——工具负责返回事实，模型负责解释，不应把模型猜测当作事实。
    

1\. On-chain Data（链上数据）

2\. Contract Docs（合约文档）

3\. ABI / Event

4\. Transaction History（交易历史）

5\. Explorer Context（浏览器上下文）

6\. Indexing Context（索引上下文）
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->

看了一下 《**AI模型与预言机的交汇》，还有** [**The Convergence of Blockchain and AI**](https://chain.link/article/blockchain-and-ai)

感觉chainlink 想做的事情：

1\. 是可验证的AI

2\. 可隐私证明的AI DECO

3\. 支持跨链的AI agent

AI 负责智能 Blockchain 负责信任与价值结算
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->


**AI Oracle** 这个是我比较感兴趣的方向，

我理想的去中心化、去中介系统，就是由 **安全的区块链** \+ **智能、公正的AI** 组合的系统。

学习和回顾了web3的一些知识点。

## 抽象账号

-   ERC-4337 账户抽象标准之一
    
-   Smart Account 是由合约控制的账户
    
-   Paymaster 允许第三方为用户操作支付 gas，或者让用户用非原生资产承担费用。
    
-   Session Key 是给应用或 Agent 的临时权限
    

## Defi

-   AMM 用流动性池和定价公式替代传统订单簿，让用户可以直接和合约交易
    

## Oracle

-   预言机不是“真实世界 API”，而是链上合约愿意信任的一套数据提交和验证机制。
    
-   Price Feed 是最常见的预言机形式，为合约提供资产价格
    
-   Oracle Risk 是链外数据进入链上执行时引入的系统性风险
    
-   AI Oracle 是把模型推理、评分、分类或生成结果提交给链上系统的设想和实践方向
    

## 索引

-   Subgraph 是用声明式方式描述如何索引合约事件，并通过 GraphQL 暴露查询接口
    

## 安全

原因与web2不同， 合约：代码公开，状态公开，资金公开，攻击者可以反复模拟和抢跑。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->



AI基础过了一遍 ，自己比较缺的部分 评估：

## 评估（Evaluation）

-   自己的agent 不稳定，很容易出现“修 A 坏 B”
    

要制定 Regression set 就是把历史问题固定下来，每次改动都重新跑

-   Harness 是运行 eval 的框架
    
-   LLM-as-Judge
    

用模型来给模型输出评分
<!-- DAILY_CHECKIN_2026-05-19_END -->
<!-- Content_END -->
