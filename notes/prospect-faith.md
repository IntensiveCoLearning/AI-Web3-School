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
# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->
今天我继续推进 GuardIntent，把昨天的“链上数据分析信号”进一步整理成第一版风险评分规则。这个项目的核心不是让 AI 自动替用户执行链上动作，而是让 AI 根据真实链上数据解释交易、识别风险，并给出是否需要人工确认的建议。

我把风险初步分成三档：低风险、需要复核、必须人工确认。低风险主要是只读、已知地址、无转账、无授权、无合约写入的场景；需要复核包括首次交互、未知合约、失败交易、Gas 异常、方法名不清楚或事件日志不符合预期；必须人工确认包括 token approval、资产转移、合约写入、钱包权限变化、高价值操作、无限授权、swap / bridge / borrow / deposit 等不可逆或高风险动作。

今天的 proof-of-work 是完成 GuardIntent Risk Rubric v0：把交易状态、目标地址、转账金额、调用方法、事件日志、Gas 和首次交互等链上信号映射成风险判断规则。下一步我会选择一笔 Sepolia 测试网交易，用这套规则手动生成第一份风险报告。
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->

今天阅读材料后决定了后续实践的方向：AI Agent 链上操作风险分析器，让 AI 结合真实链上数据判断：这个操作是否安全、是否异常、是否应该人工确认。

第一层：操作前分析  
在用户签名前，系统分析：

-   目标地址是不是合约
    
-   合约是否已验证
    
-   用户以前有没有和这个合约交互过
    
-   这次操作是 read、sign、approve、transfer 还是 contract write
    
-   是否涉及 token 授权
    
-   授权额度是否过大
    
-   Gas 是否异常
    
-   是否是第一次和陌生地址交互
    

第二层：操作后验证  
交易完成后，系统读取交易哈希，分析：

-   交易成功还是失败
    
-   实际消耗了多少 Gas
    
-   调用了哪个合约
    
-   产生了哪些事件
    
-   token 余额或授权状态有没有变化
    
-   实际结果是否符合用户原始意图
    

第三层：持续监控  
更进阶一点，可以监控钱包风险：

-   当前有哪些 token allowance
    
-   哪些授权长期未撤销
    
-   最近是否出现异常失败交易
    
-   钱包是否频繁和陌生合约交互
    
-   是否有高风险操作等待人工确认
    

整体流程：

1.  用户输入一个测试网交易哈希，或者输入一个链上操作意图。
    
2.  系统读取链上数据。
    
3.  AI 生成三份结果：
    
    -   人话解释：这笔交易做了什么
        
    -   风险分析：哪里需要注意
        
    -   权限建议：自动通过 / 需要人工确认 / 拒绝执行
        
4.  生成一份 audit report，保存到 GitHub 或页面里。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->


通过Qclaw 、codex 、hermes 都配置了学习助手，测试下来感觉codex更好用一些（问题支持直接点选，省去了打字的时间），且目前也支持移动端使用

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/prospect-faith/images/2026-05-25-1779677848583-image.png)![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/prospect-faith/images/2026-05-25-1779678986055-image.png)

今天完成了 AI x Web3 School 个人学习仓库初始化，明确了自己的学习画像：Hackathon 方向、每天 60-90 分钟。接下来会按“阅读 Handbook/WCB 任务 -> 完成一个小产出 -> 写打卡草稿 -> 记录 Handbook feedback”的节奏推进，虽然是小白，但是依旧选择hackathon方向是想在干中学，学中干。我觉得本次活动最想训练的是：自律的学习能力、信息搜集检索能力，以及在短时间内快速上手新东西的能力。后续我会让ai辅助我，将handbook里提供的学习链接帮我讲透
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->



# Day5：AI在web3的应用

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/prospect-faith/images/2026-05-24-1779634487689-image.png)

# 去中心化ai基础设施

质押算力，不上链的

# AI AGENT+钱包

直接让agent 持有链上钱包，agent持有一定金额的支付能力，拥有链上支付能力，当前这个场景引用比较少。更多的是做量化、小额交易

# AI驱动的链上分析工具

容易产生幻觉，不会完全替代人

# 智能钱包和安全助手

模拟交易，保证链上资金的安全，blockaid

openai出了一个合约审查，用ai来审查合约的问题
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->




# 二、AI Agent 入门 Hermes 从0-1

ai agent的核心运行机制：理解目标、调用工具、观察执行、修正执行

hermes agent：通用ai助手底座，小型贾维斯，类似openclaw

-   开源
    
-   跨平台
    
-   终端运行
    
-   消息网关
    

## 2.1 Hermes agent 配置教程

-   github上找到 hermes 的home，根据自己的环境复制安装链接到终端
    
-   选择要用的模型
    
-   配置消息网关：跟hermes说需要为微信配置消息平台，应该怎么做
    
-   配置好后，在微信telegram 让他去帮忙制定学习计划等任务
    
-   可以在[AI × Web3 开源学习平台 | zh | AI x Web3 School](https://aiweb3.school/zh/handbook/)
    

的开始学习中，复制请作为我的 AI × Web3 School Learning Agent，先阅读启动 Prompt：[https://aiweb3.school/learning-agent.zh.txt，并结合](https://aiweb3.school/learning-agent.zh.txt，并结合) Handbook：[https://aiweb3.school/zh/handbook/，帮我初始化个人学习计划、GitHub](https://aiweb3.school/zh/handbook/，帮我初始化个人学习计划、GitHub) 学习仓库、每日打卡草稿和 Handbook feedback 流程。给到自己使用的agent，来辅助制定学习计划，帮助自己更快的学习
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->





# 二、AI时代Web3开发者**需要具备更扎实的基础知识和架构能力**

## 2.1 粉丝提问

Q: AI发展如此之快，还需要学习基础知识吗

A：一定要的，要搞懂人和ai的协作边界，我们要设计方案、评估合理性、验收代码执行结果，AI是细化方案，**AI自测验证**

Q: “安全” 可以后续再考虑吗？

A: web3的世界中，直接和资金交互的特性，**安全不是一个可以随时添加的组件，而是源于设计的核心属性。需要基础足够扎实、架构能力足够扎实，才能谈安全。安全源于设计，贯穿产品的整个知识周期**

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/prospect-faith/images/2026-05-22-1779457435628-image.png)

## 2.2 Web3常见概念一览-以简单的支付系统为例

-   把web2的bank institution 替换成了 web3 的 block chain
    
-   钱包不仅是一个app，是身份和资产的双重验证
    
-   private key 可以产生签名 去和第三方交互（密码学博士）
    
-   钱包问题：私钥泄露、签名欺骗、权限滥用
    
-   web3交易生命周期：构造、签名、广播
    
-   web3交易关键参数：
    
    -   gas：系统的动力源，让交易更快上线
        
    -   nonce：顺序，幂等
        
    -   calldata：链上交易的灵魂，类似汇编
        
-   web3 交易模拟，交易前先去模拟，看结果的到底是怎么样。在没有签名前做模拟，签名后做模拟是没有意义的。
    
-   web3 server侧钱包安全
    
    -   权限拆分：多签、资金拆分、mpc
        
-   核心结论：web3世界对安全的要求很残酷
    

## 2.3 AI时代的变与不变

变：

-   coding 更快
    
-   学习更容易
    
-   基础的自动化能力
    

没变：

-   系统复杂度
    
-   错误成本
    
-   安全边界
    

核心结论：人的价值，在于驾驭ai

## 2.4 架构师能力模型

-   架构能力
    
-   debug能力
    
-   基础能力
    

本节课总结:

老师虽然是安全出身，但是本节课能感觉到，老师对于ai的认知是很深刻的，方向也给的很清楚，即：

-   基础能力要扎实：理解协议、共识、安全边界
    
-   web3是系统工程：它不仅是合约编写，更是对一致性、 安全性与分布式写作的极致追求
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->






今天补了Day1的共学营，同时又规划了下后面的学习计划，还有知道了任务怎么提交。后面还要再根据前面基础课，拓展多了解一些具体代码层面的实现，更深刻的理解概念。
<!-- DAILY_CHECKIN_2026-05-21_END -->

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
