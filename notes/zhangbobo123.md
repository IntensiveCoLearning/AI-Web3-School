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
# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->
1
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->

1
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->


528 → 529 Bot v12 迭代

\- 修复 play\_loss\_sound 未定义 → WAV文件播放

\- 修复 int(qty) 截断小数量为0 → 4处改为qty原值

\- 修复 int(amt) 重启清仓截断 → 改abs(amt)

\- 修复 RATE\_MAX=0.1(10%)形同虚设 → 改0.0008(0.08%)

\- 修复 SSL断连崩溃 → get\_rates()加try-catch

\- 修复补单检查删TP LIMIT只重挂SL → 同时重挂TP LIMIT+SL

\- 修复开仓1秒后立即触发补单 → 开仓设last\_recheck=time.time()

\- 固定TP2.0%替代追踪止盈 → 夏普从225提到298

\- 正式命名为529-Bot v12，创建对应Skill

回测验证

\- TP/SL参数扫描：固定TP2%夏普最高(298)

\- NO\_REPEAT\_COIN：收益腰斩(+61% vs +114%)，不加

\- 费率上限0.08%最优

\- 6h持仓上限回测+136%

实盘相关

\- 当前持仓HOMEUSDT多仓

\- 补单修复代码已保存待重启生效
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->




1
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->





\- 实战期货bot方向判断指标优化：对比了多个链上/情绪指标，最终选定Taker买卖比作为方向判断，胜率从27%提到53%+  
\- 参数网格搜索：止盈止损、追踪、费率退出等参数多轮回测对比，找到当前最优组合  
\- 扩大币种池验证：30币→77币回测，验证策略泛化能力  
\- 期货bot实盘参数更新并重启  
\- BSC打狗bot修复多个bug（函数名、挂单参数、补仓逻辑），重启运行
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->







1
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->








最低要求： 1. 比较 EOA、智能账户、多签账户三类账户。 2. 至少包含 4 个比较维度。 3. 每类账户至少给出一个适用场景和一个风险点。 4. 说明哪些操作必须人工确认。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->











1
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->












1
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->













```
链上数据存在哪？全球几万个全节点硬盘里，Etherscan只是索引层。数据越来越大怎么办：状态过期、无状态客户端、历史数据修剪、数据可用性采样、Layer 2 + 数据压缩、专门存储链。核心思路不是让每个节点存所有，而是分工。
```
<!-- DAILY_CHECKIN_2026-05-22_END -->

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
