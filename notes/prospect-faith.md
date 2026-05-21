---
timezone: UTC+8
---

# prospect-faith

**GitHub ID:** prospect-faith

**Telegram:** 

## Self-introduction

背景：产品运营、数据分析、用户运营
学习目标：希望通过 AI × Web3 School 系统补齐 Web3 基础知识，理解 AI Agent 与链上应用结合的真实场景，并在训练营中做出一个小型可展示项目，例如围绕链上数据分析、AI Agent 辅助用户决策、Web3 用户增长分析或 Agent Commerce 的原型。我也希望认识更多同样在探索 AI × Web3 的学习者和 Builder，找到一个未来可以长期深耕的职业方向。

## Notes

<!-- Content_START -->
# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->
# 三、Web3运行原理

bg：昨天才发现开课啦，赶在最后一天的尾巴报了名，今天跟了“web3运行原理”，大学的时候学过一阵一个北大老师讲的区块链，至今印象还是比较深刻的，今天又听布老师讲了web3的基础知识，感觉有时间还是要再过下之前的区块链细节内容。

## 3.1 web2 和 web3的区别对比总结

| Web2 | Web3 |
| --- | --- |
| 数据在公司服务器 | 数据在区块链 |
| 相信公司 | 相信代码 + 共识 |
| 公司能改规则 | 规则提前写进合约 |
| 账号由平台控制 | 账户由私钥控制 |

## 3.2 基础概念介绍

### 3.2.1 账户（Account）

账户是我在链上的身份，在web3世界，账户可能是0x1234abcd…这就是一个链上地址。

类似于银行账户

### 3.2.2 钱包（Wallet）

资产永远在区块链上，钱包的本质是管理私钥的工具。

钱包主要负责：

-   保存私钥
    
-   帮你签名
    
-   发交易
    
-   展示余额
    
-   管理多个账户
    

### 3.2.3 地址（Adress）

公开账号，类似于银行卡卡号

### 3.2.4 私钥（Private Key）

私钥相当于银行卡密码

### 3.2.5. 助记词（Mnemonic）

助记词是：私钥的人类可读版本，例如：apple cat moon river

## 3.3 钱包到底怎么连接区块链？

钱包 → RPC → 节点 → Ethereum 网络

### 3.3.1. RPC 是什么？

RPC 可以理解成：区块链入口服务器

钱包通过 RPC：

-   查询余额
    
-   广播交易
    
-   查询区块
    

### 3.3.2 节点（Node）

节点就是：运行区块链软件的电脑

它负责：

-   保存区块链数据
    
-   验证交易
    
-   同步新区块
    

* * *

## 3.4 一笔交易是怎么完成的？

完整流程：

```text
Wallet
↓
RPC
↓
Mempool
↓
Builder
↓
Validator
↓
Block
```

* * *

### 3.4.1 Wallet 签名

钱包会：用私钥本地签名

### 3.4.2 RPC 广播

钱包把：交易+签名发给RPC RPC再广播到整个网络

### 3.4.3 Mempool 排队

Mempool：待打包交易

### 3.4.4 Builder 排序

Builder 会：

-   挑选交易
    
-   按 Gas 排序
    
-   组装区块
    

### 3.4.5. Validator 出块

Validator（验证者）负责：验证区块

### 3.4.6. Block 上链

交易进入区块后：大家都能查到

### 3.4.7 Gas Fee

Gas Fee：区块链手续费

在链上做操作：

-   转账
    
-   swap
    
-   mint NFT
    
-   调用合约
    

都需要 Gas。

1\. 防垃圾交易

如果免费：坏人会疯狂刷交易  

2\. 激励验证者

Validator 帮你处理交易：需要奖励  

3\. 让资源有价格

链上的：

-   计算
    
-   存储
    
-   区块空间
    

都是有限资源。  

## 3.5 PoW vs PoS

这是两种共识机制。

### 3.5.1 PoW（BTC）

Bitcoin 使用

核心：拼算力

矿工疯狂算数学题。

谁先算出来：谁获得记账权

特点：

-   很安全
    
-   很耗电
    

### 3.5.2 PoS（ETH）

Ethereum 现在使用。

核心：拼质押  

Validator 质押 ETH。

系统随机选择谁出块。

如果作恶：会被罚没 ETH（Slash）  
  
智能合约特点

| 特点 | 意思 |
| --- | --- |
| 规则公开 | 代码能看 |
| 自动执行 | 满足条件就执行 |
| 难篡改 | 上链后很难改 |
| 全网可查 | 执行历史公开 |

# 附录

测试网站：sepolia holesky

查看交易记录：etherscan

chainlist官网：[https://chainlist.org](https://chainlist.org)

作用：帮钱包快速添加网络RPC
<!-- DAILY_CHECKIN_2026-05-20_END -->
<!-- Content_END -->
