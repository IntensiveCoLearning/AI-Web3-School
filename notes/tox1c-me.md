---
timezone: UTC+8
---

# 0xHydro

**GitHub ID:** tox1c-me

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
今天学习了币圈的**pre-IPO**玩法，比如**SPCX**的**pre-IPO**，本质上是一种**现金结算的金融工具**，持有者**不拥有任何SpaceX的实际股权**（如投票权或分红权）。其核心目的是通过衍生品或份额映射的方式，反映SpaceX在非公开市场的估值变化。

参与这类产品有利有弊，核心在于你想提前布局，但必须清楚其中的风险。

**✅ 核心优势**：将顶级独角兽的早期投资机会从华尔街机构手中“民主化”到了链上散户。相比传统私募基金动辄数百万的门槛，你只需**100 USDT**甚至更少就能参与，且没有锁定期，可以随时交易。

**⚠️ 主要风险**：最核心的风险是**结构风险**——你买的是衍生品，不是股票。例如，此前Anthropic和OpenAI的代币化pre-IPO产品，就曾因公司宣布“禁止SPV转让”而导致价格**暴跌约50%** 。此外，由于缺乏历史数据，其定价模型也存在一定的不确定性。

**📅 关键时间线**：这些Web3产品都是围绕SpaceX的实际IPO进程展开的。根据公开信息，SpaceX已正式提交S-1文件，预计在**2026年6月12日**于纳斯达克上市，股票代码确认为**SPCX**，目标估值**1.75万亿至2万亿美元**。

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/tox1c-me/images/2026-05-21-1779378060875-image.png)
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

笔记：

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/tox1c-me/images/2026-05-20-1779281961312-image.png)

# 1\. 签名（Signature）

**数字签名** 用于证明某条消息（或数据）是由特定私钥持有者签署的，同时不泄露私钥本身。

-   **工作原理**：通常使用 ECDSA（如 `secp256k1` 曲线）。签名者对数据进行哈希，然后用私钥签名，生成 `(r, s, v)`。
    
-   **常见用途**：
    
    -   **身份验证**（签名一个随机数登录 dApp）
        
    -   **授权**（批准代币转账，如 ERC-2612 中的 permit 签名）
        
    -   **元交易**（中继者提交用户签名的消息）
        
-   **链上与链下**：签名可在链上通过 `ecrecover` 验证，也可在链下用于会话密钥等。
    

# 2\. 交易（Transaction）

**交易** 是一条经过加密签名的指令，用于改变区块链的状态。

-   **典型结构**（以太坊风格）： `{ nonce, to, value, gasPrice, gasLimit, data, v, r, s }`
    
-   **生命周期**：创建 → 私钥签名 → 广播 → 验证 → 打包进区块 → 状态更新。
    
-   **关键特性**：
    
    -   原子性（要么完全成功，要么完全失败）
        
    -   消耗 Gas（由发送者支付）
        
    -   Nonce 防止重放攻击
        
-   **类型**：转账、部署合约、调用合约。
    

### 两者关系

-   交易中 **包含签名**（`v, r, s` 字段），用于证明发送者已授权此操作。
    
-   并非所有签名都是交易——签名也可用于链下消息（如证明钱包所有权）。
    
-   简言之：**签名证明意图，交易在链上执行该意图。**
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->


今日学习笔记

今天通过参加直播课，了解到了如openclaw这种Agent与deepseek，chatgpt网页端的区别：前者是具有了读写文件，创建文件的权限，能“帮你做”，而后者则是主要提供文字的response，用前者来实现一些环境部署，代码修改，服务运行测试更加方便快捷，比后者纯文字指导要更加automated。同时学到了Hermes Agent的安装方法，（不过我openclaw还没捂热，准备过几天再装hermes）
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->



今天了解到了web3里的一些基础概念，包括钱包的公钥私钥，私钥不能泄露，公钥可以公开当作首款地址，链上交易，钱包会轮询发起查询请求看有没有新的交易记录，还有安全方面，泄露私钥就会导致财产损失，不可挽回，拥有私钥就拥有了钱包的所有权限，要保护好自己的私钥！

![838e1ba19f5693757c8a9ec9489f3c50.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/tox1c-me/images/2026-05-18-1779119066797-838e1ba19f5693757c8a9ec9489f3c50.png)![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/tox1c-me/images/2026-05-18-1779119305770-image.png)
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
