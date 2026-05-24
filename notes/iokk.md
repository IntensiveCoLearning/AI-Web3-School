---
timezone: UTC+8
---

# iokk

**GitHub ID:** iokk

**Telegram:** @imioio

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->
今天通过AI了解相关的钱包概念：

测试钱包就是用 MetaMask 这类钱包创建一个地址，在测试网上使用。测试网的币没有真实价值，通常可以从水龙头领取，比如 Sepolia 测试 ETH。它主要用来练习转账、部署合约和调用合约，不会损失真钱。

测试网转账就是在 Sepolia 等测试网络上，把测试币从一个地址转到另一个地址。流程很简单：切换到测试网，领取测试币，输入对方地址和金额，确认交易，然后可以在区块浏览器查看交易记录。

合约部署就是把智能合约代码发布到区块链上，部署后会得到一个合约地址。合约调用就是和这个地址交互，比如读取数据、修改数据、转 Token、Mint NFT 等。新手一般用 Remix 写合约，连接 MetaMask，在测试网上部署和调用。  
  
我计划做三个最简单的 Web3 测试：

第一步，准备测试钱包和测试币。安装 MetaMask，创建钱包，然后添加或切换到 Sepolia 测试网。接着去 Sepolia 水龙头领取一点测试 ETH，这些币没有真实价值，只是用来支付测试网 Gas。

![iShot_2026-05-24_23.39.26.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/iokk/images/2026-05-24-1779637177784-iShot_2026-05-24_23.39.26.png)

第二步，做一次测试网转账。复制另一个钱包地址，或者让朋友给你一个 Sepolia 地址。在 MetaMask 里点击发送，输入对方地址和少量测试 ETH，确认交易。完成后，可以把交易哈希复制到 Sepolia 区块浏览器里查看是否成功。

![iShot_2026-05-24_23.39.59.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/iokk/images/2026-05-24-1779637208751-iShot_2026-05-24_23.39.59.png)

第三步，部署和调用一个简单合约。打开 Remix，写一个简单 Solidity 合约，比如存储一句话的合约。连接 MetaMask，选择 Sepolia 网络，点击部署。部署成功后，你会得到一个合约地址，然后在 Remix 里调用读取或修改函数，确认钱包弹窗并查看结果是否变化。（这部分还没做完）

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/iokk/images/2026-05-24-1779637469274-image.png)
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/iokk/images/2026-05-23-1779550761265-image.png)

**Agentic Economy** 的核心，是让 AI Agent 从“回答问题的工具”变成能参与经济活动的主体：它可以接任务、调用服务、自动付款/收款，并证明任务已完成。

其中关键基础设施包括：**身份、支付、授权、验证和声誉**。身份让别人知道 Agent 是谁；支付让 Agent 能进行机器支付；授权限制它能花多少钱、做什么事；验证证明结果真实可靠；声誉帮助市场判断哪个 Agent 值得信任。

ERC-8004 / ERC-8183 这类标准的意义，是尝试把 Agent、钱包、支付、身份和验证连接起来，让不同应用中的 Agent 可以互操作。

对 Builder 来说，重点不是追概念，而是找到真实场景：谁付钱？为什么需要链上支付？结果如何验证？能否做出可用产品？
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->


今天有参加会议，学习到一些优秀学员的作品，并且有做模块化的整理，并且有了解到目前在Web3的一些基础名词和概念。  
  
并且后续的任务有计划使用Hermes进行资料的复盘和个人项目沉淀。  
  

| Web3概念 | 类比 |
| --- | --- |
| 地址 | 银行卡号 / 收款地址 |
| 私钥 | 银行卡密码 + 身份证 + U盾权限 |
| 助记词 | 能恢复全部银行卡权限的总钥匙 |
| 钱包 | 银行 App / U盾工具 |
| 签名 | 你确认并授权某个操作 |
| 链上交易 | 真正提交到区块链上的操作 |

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/iokk/images/2026-05-22-1779464991762-image.png)
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->



今天有学习Hermes相关的安装，并且已经在本地部署，并且使用了对应的提醒文档，主要涉及到模型配置、消息渠道的设置以及常见问题点的处理。另外，还推荐了一些好用的工作流。

![iShot_2026-05-19_20.28.13.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/iokk/images/2026-05-19-1779205044574-iShot_2026-05-19_20.28.13.png)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->




昨天参加了开营仪式，有非常多有意思的小伙伴，并且还有同学小伙伴的的参加，今天课程主要讲支付相关的内容。

**内容重点在于Web2与Web3钱包支付区别**

Web2钱包像支付宝、微信这类，由平台帮你保管钱，你只管账号密码就行。交易由平台统一风控，出了问题可以找客服。

Web3钱包完全不同。私钥在你手里，链上交易谁也改不了。但问题是——私钥丢了就是丢了，没有客服能帮你找回来。

所以Web3不是去掉中心化就安全了，而是把安全责任从平台转移到了个人。实际落地时通常还要靠多签拆分、链上监听、Web2风控来兜底。

![iShot_2026-05-18_23.38.50.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/iokk/images/2026-05-18-1779118951657-iShot_2026-05-18_23.38.50.png)
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
