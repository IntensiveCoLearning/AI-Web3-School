---
timezone: UTC+8
---

# ShadowDogee

**GitHub ID:** gnihTehT

**Telegram:** @gnihTehT

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->
**笔记 | Web3 运行原理**

参加了布老师的直播

理解了账户、钱包、签名、交易、Gas、合约、测试网和区块浏览器如何构成一条链上操作链。

这次再听内容比第一次参加冬季实习计划的时候要熟悉多了，可以跟得上了！

通俗来说可以把一次完整的链上操作理解成：

“拿着钥匙（钱包），用身份（账户）签了一份命令（签名），支付邮费（Gas），把命令发到区块链网络（测试网/主网），由智能合约执行，最后所有记录被区块浏览器公开查看。”

**比如Mint NFT**

完整流程：

```
1. 打开 DApp

2. 钱包连接网站
   ↓
   Wallet 提供账户地址

3. 点击 Mint
   ↓
   DApp 调用合约 mint()

4. 钱包弹窗
   ↓
   显示 Gas 和交易内容

5. 点击 Confirm
   ↓
   钱包使用私钥签名

6. 交易发送到测试网/主网
   ↓
   节点验证签名

7. 智能合约执行 mint()

8. 区块链打包进区块

9. 区块浏览器显示交易记录

10. NFT 出现在账户
```
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->


**笔记 | AI Agent 入门：Hermes 从 0 到 1**

今天学习了Hermes，总体来说和我在用的openclaw差不多，打算还是和龙虾一样部署在旧手机上。

在此之前，先使用openclaw进行辅助学习，正好进行对比观察。

今天还额外学习了一下密码学的第一课，对称加密，是昨天上课的 TC 老师推荐的 Lyndell 老师的课，大致了解了流程，对key 的概念更具象化了一些。

![QQ_1779202281601.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/gnihTehT/images/2026-05-19-1779202324964-QQ_1779202281601.png)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->




### **笔记 | AI 时代，Web3 开发者需要具备的基础知识和架构能力**

### 一、与传统支付的区别

web3 中的支付就是将 banking institution换成了一个blockchain，由于 block chain 不能主动访问外部服务，所以要通关链上监听服务来进行监听和发展。

### 二、为什么可以信任 web3 ?

第一点，通过算法这些去保证数据不可篡改；

第二点，逻辑及代码，公开透明。

### 三、什么是钱包？

钱包主要就是用于输入private key产出signature。

### 四、钱包的分类

**按技术分类：**

-   EOA 钱包（Externally Owned Account）
    
-   合约钱包（Contract Wallet）
    
-   AA 钱包（Account Abstraction）
    

**按签名控制方式分类：**

-   单签钱包（Single Signature）
    
-   多签钱包（Multisig）
    
-   MPC 钱包（Multi-Party Computation）
    

**按托管方式分类：**

-   自托管钱包（Self-Custody）
    
-   全托管钱包（Custodial Wallet）
    
-   混合托管钱包（Hybrid Custody）
    

**按载体分类：**

-   软件钱包（Hot Wallet）
    
-   硬件钱包（Cold Wallet）
    

**特殊类型钱包：**

-   隐私钱包
    
-   分层确定性钱包（HD Wallet）
    

### 五、钱包的主要安全风险

钱包主要有两个安全风险：**私钥泄露**（最致命）和**签名钓鱼**（最常见）

因为普通用户看不懂交易内容，不能理解密码学签名，导致钱包因为签名变得十分危险。

**EIP-712**，可读签名标准，把数据变成用户可懂的语言。但是即使数据可视化了，但是大部分用户还是可能看不懂合约权限、approve、permit、delegatecall、spender。

因此，web3 的大部分安全问题，本质上是“认知安全问题”。

**eth\_sign** 的废弃原因：eth\_sign 可以对任意数据签名，用户无法知道自己签了什么，所以钱包废弃它。

**Approve** 风险，权限滥用风险是另一个巨大风险，所以应该定期 revoke 权限，使用小额热钱包，大额资产放冷钱包。

钱包安全中，链只会认数学签名，在链上所有的事情都是：

**签名→链相信这是你→状态被修改**

### 六、交易生命周期（链上交易怎么发生）

构造交易（Construct）👉用户签名（Sign）👉广播（Broadcast）
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
