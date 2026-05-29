---
timezone: UTC+8
---

# 棉棉

**GitHub ID:** heziwang

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->
[https://github.com/heziwang/ai-web3-school-cohort-wang/blob/main/daily/2026-05-29.md](https://github.com/heziwang/ai-web3-school-cohort-wang/blob/main/daily/2026-05-29.md)

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/heziwang/images/2026-05-29-1780022650589-image.png)
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->

今日学习分享心得：提醒 Builder，隐私是一种产品基础能力、一种社区伦理，也是一种可以从小工具、小选择、小设计开始实践的技术文化。Neo Cypherpunk 的重点，是把隐私从恐惧叙事带回到开放、互助、快乐和可建设的未来里。

co-learing学习心得：技术上能做，不代表组织上能跑通。黑客松阶段可以把项目讲成“Web2 友好的贡献记录与奖励分配协议/工具”，先解决一个小社群里的真实协作问题；不要一开始就承担完整 DAO、完整信用体系和大众教育三件大事。产品第一版应让用户明显感觉到：我的贡献被记录了、被看见了、能兑换权益了，而且不用先学会一堆 Web3 概念。

git笔记：[https://github.com/heziwang/ai-web3-school-cohort-wang/blob/main/daily/2026-05-27.md](https://github.com/heziwang/ai-web3-school-cohort-wang/blob/main/daily/2026-05-27.md)

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/heziwang/images/2026-05-27-1779888890155-image.png)
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->


[https://github.com/heziwang/ai-web3-school-cohort-wang/blob/main/daily/2026-05-26.md](https://github.com/heziwang/ai-web3-school-cohort-wang/blob/main/daily/2026-05-26.md)

今天我继续学习链上交易的细节，重点理解了 Nonce、失败交易为什么也可能扣 Gas、为什么很多合约操作 Value = 0 但仍然很重要，以及 Approve / Swap / Mint 在区块浏览器里分别应该看哪里。

我今天最大的收获是理解了 Nonce。Nonce 可以理解成同一个钱包地址发交易的顺序编号，就像钱包发交易的排队号码。第 1 笔交易是 nonce = 0，第 2 笔是 nonce = 1，第 3 笔是 nonce = 2。同一个地址的交易必须按顺序处理，所以如果前一笔交易一直 Pending，后面的交易可能也会被卡住。

我也理解了 Gas 是执行费，不是成功费。交易失败不代表网络没有干活。比如调用合约时，节点已经检查签名、读取数据、运行合约逻辑，即使最后因为余额不够、条件不满足、滑点太高或合约 revert 而失败，网络也已经消耗了计算资源，所以通常仍然会扣 Gas。

今天还学到，Value = 0 不代表这笔交易没有影响。Value 只表示这笔交易直接带了多少原生币，而很多重要的合约操作，比如 Approve、Swap、Mint、取消授权，真正的影响可能发生在 Token Transfers、NFT Transfers、Logs 或 Input Data 里。

最后我整理了三类常见交易的阅读方法：Approve 要看授权对象和额度，特别注意无限授权和陌生 Spender；Swap 要看 Token Transfers，判断付出了什么、收到了什么；Mint 要看 NFT Transfers 和 Token ID，确认是不是有新的 NFT 被铸造到自己的地址。

我接下来还想继续理解加速 / 取消交易与 Nonce 的关系、Revert 和 Failed 的区别、WETH 和 ETH 在 Swap 中的关系，以及如何安全管理无限授权。

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/heziwang/images/2026-05-26-1779806769729-image.png)
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->



学习笔记：[https://github.com/heziwang/ai-web3-school-cohort-wang/blob/main/daily/2026-05-25.md](https://github.com/heziwang/ai-web3-school-cohort-wang/blob/main/daily/2026-05-25.md)  

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/heziwang/images/2026-05-25-1779718908732-image.png)

明日计划：Nonce、交易失败为什么还扣 Gas、Approve / Swap / Mint 在区块浏览器里怎么看。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->




笔记： [https://github.com/heziwang/ai-web3-school-cohort-wang/blob/main/daily/2026-05-24.md](https://github.com/heziwang/ai-web3-school-cohort-wang/blob/main/daily/2026-05-24.md)  
学习了 Web3 网络的基本运行方式，理解了 Chain、Network、Node、Transaction 和 Wallet 之间的关系。  
Web3 可以先理解成一套“公开账本系统”，资产记录在链上，钱包并不存钱，而是负责管理私钥、签名和发起交易。一笔交易大致会经历“钱包签名 → 发到网络 → 节点验证 → 打包进区块 → 链上确认”的过程。

钱包负责签名，节点负责验证，区块负责记录，整个网络负责共同认账。

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/heziwang/images/2026-05-24-1779621052439-image.png)
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->





学习笔记：  
[https://github.com/heziwang/ai-web3-school-cohort-wang/blob/main/daily/2026-05-23.md](https://github.com/heziwang/ai-web3-school-cohort-wang/blob/main/daily/2026-05-23.md)  
  
钱包不是账号登录器，而是控制权入口。连接钱包只是让网站知道我是谁；签名是在表达同意；确认交易会真的发到链上；Approve Token 是授权未来花我的 Token，要特别小心。

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/heziwang/images/2026-05-23-1779539739488-image.png)
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->






[https://github.com/heziwang/ai-web3-school-cohort-wang/blob/main/daily/2026-05-22.md](https://github.com/heziwang/ai-web3-school-cohort-wang/blob/main/daily/2026-05-22.md)

今天学习了 Web3 Network 页面，今天课也上完了 一些比较厉害的同学分享了学习方法，感觉非常受益，我也学到了很多。

接下来，我会按照大神们的方式去学习，补充一下自己的内容。可以马上开始的是Obsidian + Hermes 搭建个人知识库。

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/heziwang/images/2026-05-22-1779462297504-image.png)
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->







[https://github.com/heziwang/ai-web3-school-cohort-wang](https://github.com/heziwang/ai-web3-school-cohort-wang)

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/heziwang/images/2026-05-21-1779372183332-image.png)

今天的 AI + Web3 课程让我重新理解了这两个概念的结合点。AI + Web3 的重点不是简单地把 AI 和发币放在一起，而是当 AI 从回答问题走向执行任务时，需要一套可授权、可支付、可验证、可追责的经济基础设施。Web3 提供钱包、链上身份、支付、验证和激励机制，AI 则提供理解、规划、分析和执行能力。

课程中把 AI + Web3 拆成了五个方向：去中心化 AI 基础设施、AI Agent + 钱包、AI 链上分析、智能钱包与安全助手、交易所 / DeFi 智能风控。我印象最深的是 AI Agent + 钱包和智能钱包安全助手。接入钱包后，agent 才能从「建议者」变成「执行者」，但钱包代表资产账户、身份和执行权，所以不能把权限完全交给模型，必须通过预算、白名单、单笔上限、交易模拟、操作日志、撤销机制和人工确认来限制风险。

自学部分我学习了 [Revoke.cash](http://Revoke.cash)。它不是钱包，也不是交易所，而是一个钱包权限体检工具，可以检查我过去给哪些合约做过 Token 或 NFT 授权，以及哪些授权仍然有效。今天我理解到，Disconnect 钱包连接不等于取消链上授权；真正要取消权限，需要发起 revoke 交易。这个知识点让我对 Approval 的长期风险有了更具体的认识。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->








[https://github.com/heziwang/ai-web3-school-cohort-wang](https://github.com/heziwang/ai-web3-school-cohort-wang)

内容包括：

  - 钱包点击 Confirm 后链上发生什么

  - 钱包、私钥、助记词、地址

  - 交易、签名、RPC、mempool

  - builder、validator、区块确认、共识机制

  - 智能合约如何改变链上状态

  - Gas 是什么

  - Token Approval 为什么有风险

  - 今日收获、卡点问题、打卡草稿

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/heziwang/images/2026-05-20-1779287116501-image.png)
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->









1.今日学习报告：[https://github.com/heziwang/ai-web3-school-cohort-wang/blob/main/daily/2026-05-19.md](https://github.com/heziwang/ai-web3-school-cohort-wang/blob/main/daily/2026-05-19.md)

2.已经安装好Hermes agent

3.明天按照Hermes 给的学习建议学习web3基础知识

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/heziwang/images/2026-05-19-1779201775721-image.png)
<!-- DAILY_CHECKIN_2026-05-19_END -->
<!-- Content_END -->
