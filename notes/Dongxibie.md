---
timezone: UTC+8
---

# 李泽龙

**GitHub ID:** Dongxibie

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->
[https://github.com/Dongxibie/ai-web3-study-track/blob/main/%E7%AC%AC%E4%B8%80%E5%91%A8%E5%AD%A6%E4%B9%A0%E4%BB%BB%E5%8A%A1%E6%8F%90%E4%BA%A4/README.md](https://github.com/Dongxibie/ai-web3-study-track/blob/main/%E7%AC%AC%E4%B8%80%E5%91%A8%E5%AD%A6%E4%B9%A0%E4%BB%BB%E5%8A%A1%E6%8F%90%E4%BA%A4/README.md)  
（主要是解决了昨天晚上的截图问题和主页面问题。现在已经成功截图，并完成了第一周 Agent 的主要任务和活动）
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->

[https://raw.githack.com/Dongxibie/ai-web3-study-track/main/demos/week1-interactive/index.html](https://raw.githack.com/Dongxibie/ai-web3-study-track/main/demos/week1-interactive/index.html)（现在不知道为什么，我的截图生成不出，明天会着重去修复这个 bug 的问题）  
[ai-web3-study-track/daily-notes/](https://github.com/Dongxibie/ai-web3-study-track/blob/main/daily-notes/2026-05-22.md)[2026-05-22.md](http://2026-05-22.md) [at main · Dongxibie/ai-web3-study-track](https://github.com/Dongxibie/ai-web3-study-track/blob/main/daily-notes/2026-05-22.md)（这个是昨日的笔记，今天主要整理他之前的联系。

其次就是顺着他这一周推荐部分的作业，但问题是现在有点大。）
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->



# AI × Web3 学习日志｜Day 3

今天主要学习了 Web3 钱包、链上交易以及区块链网络运行机制相关内容。

首先整理并理解了一笔链上交易的完整生命周期，包括：

-   Wallet 签名
    
-   RPC 广播
    
-   Mempool 排队
    
-   Builder 排序
    
-   Validator 验证
    
-   Block 上链确认
    

同时开始理解为什么区块链交易不会立即完成，而是需要等待多个区块确认，以及 Finality（最终确认）在 Ethereum PoS 中的作用。

今天也重点学习了：

-   Gas Fee
    
-   Nonce
    
-   Signature
    

三个交易核心概念。

理解了：

Gas 本质上是在为区块链网络资源付费；

Nonce 用于保证交易顺序、防止重复执行；

Signature 则是区块链中的密码学授权机制。

除此之外，还系统学习了：

-   PoW（工作量证明）
    
-   PoS（权益证明）
    

两种共识机制的区别。

开始理解：

Bitcoin 为什么依赖算力竞争，

以及 Ethereum 为什么转向质押验证。

今天还重点学习了：

钱包、私钥、助记词与地址之间的关系。

逐渐理解：

钱包真正管理的并不是资产，

而是：

“私钥与签名能力”。

链上资产实际上始终保存在区块链账本中。

同时也学习了：

-   私钥泄露风险
    
-   助记词安全
    
-   授权钓鱼
    
-   剪贴板攻击
    

等 Web3 常见安全问题。

后面继续学习了：

钱包、RPC、节点与区块链网络之间的关系。

理解了：

普通钱包其实并不会直接连接整个区块链，

而是通过 RPC 服务访问节点网络。

同时也了解到：

虽然 Ethereum 共识层本身是去中心化的，

但 RPC 服务入口层依然可能存在中心化风险。

最后还学习了：

智能合约（Smart Contract）的基本概念。

理解了：

智能合约本质上只是：

“运行在区块链上的自动执行代码”。

它本身并不真正“智能”，

只是严格按照预设规则运行。

同时也开始理解：

区块链中的“信任”，

正在从：

“相信机构”

逐渐转向：

“检查代码 + 共识机制 + 审计治理”。

今天整体上对：

Web3 底层运行逻辑、

交易机制、

钱包安全、

智能合约、

以及区块链网络结构

有了更完整的基础理解。  
（今日 GitHub 每日学习链接 [https://github.com/Dongxibie/ai-web3-study-track/blob/main/daily-notes/2026-05-21.md](https://github.com/Dongxibie/ai-web3-study-track/blob/main/daily-notes/2026-05-21.md)

主要也是对昨天课程整理和知识点的补充。

最近在进行长期任务当中的 Web3 板块，但仍然出现软件问题）
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->





[https://github.com/Dongxibie/ai-web3-study-track/blob/main/daily-notes/2026-05-20.md（昨日课程笔记以及更新照片）](https://github.com/Dongxibie/ai-web3-study-track/blob/main/daily-notes/2026-05-20.md)

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Dongxibie/images/2026-05-20-1779284668766-image.png)

  
主要是整理昨日笔记以及完成一些兼容问题。

Web3 当中已经开始了第一步的 MetaMask 来测试它的钱包功能，但还是出现了以下问题：

1\. 兼容性问题

2\. 插件打不开（可能是梯子和不够流畅的问题）  
3\. 在 Telegram 的 Hermes Agent 发现了我发布的消息，但它并没有回应。初步猜测可能是模型的问题，明天想尝试切换另外一个模型，换种方式试试。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->






[https://github.com/Dongxibie/ai-web3-study-track/blob/main/daily-notes/2026-05-19.md](https://github.com/Dongxibie/ai-web3-study-track/blob/main/daily-notes/2026-05-19.md)  
主要是把昨日 5 月 18 号的那份笔记总结了一下，并且尝试性安装了 harmes 和 Agent，然后准备去将他的部分不兼容问题解决掉。明天主要是去整理 5 月 19 号的上课笔记，并继续去补充基础的 AI 与 Web3 知识，使其更加清晰。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->







# AI × Web3 学习日志｜Day 1  
GitHub 链接: [https://github.com/Dongxibie/ai-web3-study-track/blob/main/daily-notes/2026-05-18.md](https://github.com/Dongxibie/ai-web3-study-track/blob/main/daily-notes/2026-05-18.md)

* * *

# 一、今日完成

## 1\. 整理训练营开营内容

今天对训练营整体学习流程进行了整理与总结，包括：

-   每日打卡机制
    
-   学分规则
    
-   Co-learning 学习节奏
    
-   Week 1 学习目标
    
-   后续学习方向划分
    

同时对训练营整体学习路径有了更清晰的认识。

* * *

## 2\. 预习 Web3 基础知识

今天预习并接触了约 11 个此前没有系统了解过的 Web3 基础知识点，包括：

-   Wallet
    
-   EOA
    
-   Private Key
    
-   Mnemonic
    
-   Transaction
    
-   Gas
    
-   Explorer
    
-   Signature
    
-   Contract
    
-   Network
    
-   Token Approval
    

开始逐渐建立：

“权限、签名、账户控制权”

这一套 Web3 底层逻辑。

* * *

## 3\. 学习基础密码学内容

今天还初步学习了一部分基础密码学知识，包括：

-   私钥
    
-   签名
    
-   地址控制权
    

并开始理解：

Web3 的安全模型本质上建立在密码学基础之上。

相比传统互联网：

Web3 更强调：

“谁拥有私钥，谁就拥有账户控制权”。

* * *

## 4\. 部署 Hermes Agent

今天完成了 Hermes Agent 的部署，并成功与 Telegram 进行了关联。

目前主要是：

-   完成运行环境搭建
    
-   初步体验 Agent 工作方式
    
-   对 AI Agent 的执行逻辑有了基础认识
    

同时简单了解了：

-   Codex
    
-   Claude Code
    
-   Hermes Agent
    

这几类工具之间的区别。

当前的初步理解：

### Claude Code

更偏向：

-   长上下文工程协作
    
-   项目级代码工作流
    
-   AI 辅助开发流程
    

* * *

### Codex

更偏向：

-   代码生成
    
-   代码补全
    
-   单任务执行
    

* * *

### Hermes Agent

更偏向：

-   Agent 工作流
    
-   工具调用
    
-   自动化执行链路
    

目前仍然只是初步接触阶段，暂时还没有深入研究其内部实现。

* * *

# 二、今日预习内容

## Web3 钱包与权限系统

今天重点预习了：

钱包并不仅仅是“登录工具”。

而是：

“链上控制权与风险确认边界”。

* * *

## 1\. 连接钱包 ≠ 获得资产权限

应用读取地址：

并不代表：

应用可以直接操作用户资产。

连接行为与资产授权属于完全不同的权限层级。

* * *

## 2\. 签名必须可解释

用户需要明确知道：

-   为什么签名
    
-   签名会产生什么结果
    
-   当前正在授权什么内容
    

而不应该只看到十六进制数据。

* * *

## 3\. 发送交易才是真正改变链上状态

交易可能包括：

-   转账
    
-   Token 授权
    
-   合约调用
    
-   Gas 支付
    

属于真正具有风险的链上行为。

* * *

## 4\. 私钥代表账户控制权

今天开始真正理解：

私钥并不是普通密码。

而是：

账户控制权本身。

因此：

-   钱包
    
-   助记词
    
-   硬件钱包
    
-   多签
    
-   账户抽象
    

本质上都在解决：

“如何更安全地管理密钥控制权”。

* * *

# 三、明日准备

## 明日主攻方向：Web3 基础体系

因为目前对于 Web3 的整体理解仍然偏基础阶段，所以明天计划重点系统化补充：

-   区块链基础结构
    
-   钱包体系
    
-   Gas 机制
    
-   签名与交易流程
    
-   智能合约
    
-   测试网
    
-   Explorer
    
-   Token 与授权机制
    

希望逐步建立完整的 Web3 基础认知。

* * *

## 1\. 补充链上账户体系理解

重点继续学习：

-   EOA
    
-   Smart Account
    
-   Transaction 生命周期
    
-   RPC 与节点
    
-   Contract 调用逻辑
    

* * *

## 2\. 加强钱包安全与权限边界认知

重点学习：

-   Private Key
    
-   Mnemonic
    
-   Token Approval
    
-   多签
    
-   风险交易识别
    

建立更完整的安全意识。

* * *

## 3\. 继续理解 AI × Web3 的结合方式

继续思考：

AI Agent 在链上系统中的合理权限边界。

包括：

-   哪些操作必须人工确认
    
-   AI 是否应该拥有签名权限
    
-   AI 如何辅助用户理解链上风险
    

* * *

# 今日阶段总结

今天正式开始进入 AI × Web3 的系统化学习阶段。

相比单纯了解概念，

今天更重要的是开始逐渐建立：

-   权限意识
    
-   链上执行逻辑
    
-   密钥控制认知
    
-   Agent 工作流理解
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
