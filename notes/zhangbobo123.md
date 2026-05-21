---
timezone: UTC+8
---

# zhangbobo123

**GitHub ID:** zhangbobo123

**Telegram:** @zhangbobo123

## Self-introduction

做一个ai与web3结合的项目，搞清楚链上交互机制，设计自己的产品。

## Notes

<!-- Content_START -->
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
\### 🔐 为什么私钥、助记词、签名、授权必须谨慎？

一句话总结：链上没有"撤销"和"客服"，权限一旦泄露就是终局。

泄露私钥/助记词

• 操作: 泄露私钥/助记词

• 风险: 资产秒转走

• 不可逆性: 链上交易无法撤回

盲签名

• 操作: 盲签名

• 风险: 授权恶意合约转走代币

• 不可逆性: approve 一旦执行，对方随时可转

钓鱼授权

• 操作: 钓鱼授权

• 风险: 无限 allowance 被滥用

• 不可逆性: 需手动 revoke，很多人不知道

误操作转账

• 操作: 误操作转账

• 风险: 发错链/发错地址

• 不可逆性: 除非对方自愿退回

核心逻辑：Web3 的"去中心化"意味着你自己就是银行——没有 FDIC 保险，没有 7 天撤回窗口，没有客服电话。你的私钥就是金库钥匙，你的签名就是法律授权。谨慎不是胆小，是生存本能。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

理解Web3底层原理：

成功安装Hermes：将任务和AIxWEB3学习网站发送了

\### 模型设置：

hermes setup model

hermes gateway
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->



[先安装wsl，安装好了之后会输入账号密码，打开wsl环境进行配置](https://hermes-agent.nousresearch.com/docs/zh-Hans/getting-started/installation)

具体网站Hermes：

[https://hermes-agent.nousresearch.com/docs/zh-Hans/getting-started/installation](https://hermes-agent.nousresearch.com/docs/zh-Hans/getting-started/installation)

在wsl的安装链接：curl -fsSL [https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh](https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh) | bash
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->




今天是ai与web3学习的第一天，继续在自由职业的道路上前进，创造属于自己的aiXweb3项目！

1.  先判断自己的已有基础：接触了web3实习计划和ai编程、机器学习课程等等，两边都刚入门，没做过项目。
    
2.  优先补短板：我的ai和web3基础都有，但不多，得从头实践，找项目入手。
    
3.  至少完成两个方向的最小实践：一个 AI 工具任务（这个应该用过），一个测试网 / 合约交互任务(做过测试网合约交互)。
    
4.  再做最小交叉实验，把 AI 输出、人工复核、钱包确认、链上执行和验证记录放到同一条流程里。这个应该比较重要，如何把ai输出-人工复核-钱包确认-链上执行、验证记录结合，我目前想到的只有ai龙虾打土狗，毕竟交易所的不算链上，这涉及到怎么让ai控制钱包，我觉得用龙虾很方便，cluade code必须要用国外模型，不然不如直接在网页问ai。
    
5.  最后整理一份概念说明（这个可以有）和过程记录（这个必须要有），为后续项目方向讨论提供材料（加油！）。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
