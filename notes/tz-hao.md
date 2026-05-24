---
timezone: UTC+8
---

# milli

**GitHub ID:** tz-hao

**Telegram:** 

## Self-introduction

学习

## Notes

<!-- Content_START -->
# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->
今天学习了一下web3xai有一些大概的总结：从 Agent Workflow 的 human-in-the-loop，到 Escrow 的多签仲裁，到 Sovereignty 的一键 kill switch，到 Governance AI 的「AI 不替你做投票建议」——**自动化程度越高，撤回机制必须越强**。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->

上午听了一下直播，感觉还是有点蒙  
  
**学习了Machine Payment（机器支付）**  
**核心理解**

**普通支付**：人 → 打开钱包 → 填地址 → 输金额 → 签名 → 等确认。每笔都要人。

**机器支付**：

-   机器 A（Agent）需要调机器 B（API 服务）的接口
    
-   一次调用 0.005 USDC，一天可能调几百次
    
-   人不可能守在旁边每笔确认
    
-   必须有自动化支付通道
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->


**1\. Web3 Tool Use（学完）**  
\- 工具分层：只读（RPC/Contract Read）↔️ 写交易（Contract Write/Wallet）必须硬分离  
\- 写交易前 7 步检查链：chain id → 合约地址 → ABI → value → gas → simulation → policy+确认  
\- 核心认知：Web3 工具比普通 API 调用高一个风险量级，工具设计本质是「模型能力 vs 确定性边界」的权衡  
  
**2\. Agent Workflow（开篇）**  
\- Task Graph：把目标拆成节点+依赖，每步定义输入/输出/权限/失败处理  
\- State Machine：Agent 要知道自己在哪个状态，交易 pending 时不"失忆"  
\- Human-in-the-loop：只读自动、小额放行、高风险必确认、越权直接拒
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->



核心收获：  
1\. Web3 工具必须**读写分离**——读链和写链是不同工具、不同权限，不能混在一个"万能 RPC"里  
2\. 写交易前需要完整的 7 步检查链：chain id → 合约 → ABI → value → gas → simulation → policy  
3\. 工具权限应该分层：查询自动允许 → 小额 session key → 大额必须人工确认 → 任意调用默认禁止  
4\. 日志是 Agent 行为的可审计基础——每次调用都要记录"模型看到了什么、调用了什么、用户确认了什么"
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->




今天听了一下web3的课，这些概念都懂算是巩固一下基础了
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->





今天终于把hermes弄好，也学习了一些ai的知识
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->






今天去研究了一下codex，昨天也听了一下开营仪式，下了一下hermas使用还是有一点问题还在研究中
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
