---
timezone: UTC+8
---

# sangelege

**GitHub ID:** sangelege

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->
私钥、助记词、地址:三者关系

私钥(Private Key)能直接授权账户操作。谁能用对应私钥签名，谁就能控制账户，

助记词(Seed Phrase)私钥体系的可读备份;通过派生路径可生成多个账户，

地址(Address)由公钥计算得到的公开账户标识，可以理解为收款地址;公开但会被关联分析。

助记词可以分出多个私钥账户

私钥一定不能泄露，泄露了什么都没了

区块链发送方流程：首先自己要先创建钱包，有了钱包就有了私钥，也有钱包地址。然后就可以自己弄准备的交易信息。在把通过地址 交易信息和私钥进行数字签名。接着就可以把地址+消息和签名发送到区块链网络上。

接收方RPC节点的接收流程：收到原始交易信息的消息 还有 声称的发送地址 ，还有携带的签名。然后RPC接收方节点就通过算法和接收到的信息 计算出签署者是谁。计算出的地址和发送方地址完全匹配，通过了密码学的校验。可以写入区块。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/sangelege/images/2026-05-19-1779201560215-image.png)

认真做 agent，但不是从「调 prompt」或「接 API」这个角度入手 — 而是从 harness engineering 这个 lens：  
把一个 agent 拆成六个核心模组： · Agent loop — 决策循环怎么跑、什么时候停 · Tool calling — 工具怎么被调用、失败怎么处理 · State persistence — agent 跨 session 怎么记住事情 · HITL — 人类什么时候介入、用什么界面介入 。

Observability — 我怎么知道 agent 真的在做我要的事 · Context management — 有限 context window 下怎么分配注意力 这六个模组其实在 AI 圈里散落各处都有人讨论，但放在一起当成一个完整的框架来设计 agent 的人不多。我在做的 Harness 就是把这六块逐个实作出来 — 目前完成前三个。

附带一个 agent identity protocol AIP 部署在 0G 主网。 为什么报 AI x Web3 School？ 一个人摸 harness engineering 半年，到了一个卡点：每个模组单独看都说得通，但接到 web3 场景之后，很多设计假设会被重写。我现在还说不清楚到底会怎么重写，这就是想在 cohort 里探索的问题。
<!-- DAILY_CHECKIN_2026-05-19_END -->
<!-- Content_END -->
