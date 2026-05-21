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
