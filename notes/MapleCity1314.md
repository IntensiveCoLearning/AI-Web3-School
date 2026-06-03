---
timezone: UTC+8
---

# Presto

**GitHub ID:** MapleCity1314

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->
V7-Live 正式注册为独立版本，avoid-breadth-chase (reject breadth 0.7474-0.8193) 从 paper-shadow 提升为生产级入口过滤

\- Master Route Charter 建立，双线分离：Line A = 现金流保稳，Line B = 高风险冲刺

\- 硬约束 R1-R7 生效：禁止纯文档任务、禁止重开已耗尽alpha、WAIT后停止session

\- DD 双层结构：研究层硬线22%，实盘层 sleeve pause 15% / halt 20%

\- 资金范围：80-150u，3x杠杆，1.5%风险，19个固定标的

\- 下一步：优先解决Step 1阻塞（per-symbol滑点配置/FIO与LAB排除方案），然后推进Step 4实盘风控参数
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->

今天拉肚子了 休息一天T\_T
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->


今日推进了 V7 回测/实盘复刻路线：把 runner 补齐到能表达 score>=86、OI 8-16、price 5-10、breadth veto 等核心门控，并新增/规划 V7 Live 只读跑分诊断面板来暴露候选、过滤原因和 parity gaps。

同时明确了关键结论：实盘要尽量复刻回测收益，必须先在回测实验室重跑并校准策略口径，再用 live/paper-shadow 量化实时 ticker、pool context、滑点和成交差异。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->



今天的笔记（2026-05-19）记录了一次**非常理智、克制且防守至上**的研究闭环。

核心逻辑是：**全面冻结内部老代码的挖掘，锁死风险闸门，在外部宏观环境转弱时果断切入观察（WAIT）状态。**

以下是核心要点总结：

* * *

### 1\. 顶层路线：双轨隔离 (GOOD)

-   **明确了两条线**：**Line A**（V6R 现金流保命，核心逻辑冻结不修改）与 **Line B**（7月资金冲刺计划）在文档层面彻底剥离。
    
-   **效果**：后续任务不再允许反复套娃和无脑循环，保护了底层代码的稳定性。
    

### 2\. 外部探测：付费量化安全与宏观流 (WAIT)

-   **付费量化（Paid Quant）**：目前确认为 `current-safe`（暂无平台和钱包风险），但**严格保留了针对未来提现陷阱（如要求加充、预缴税、卡费等）的 STOP 闸门**。
    
-   **宏观流动性**：由于外部机构资金大幅净流出（美债飙升、地缘风险等导致失血），ETF 和稳定币流动性滤网均未触发。
    
-   **BTC/ETH**：由于找不到完美的低风险（`3u-5u` max-loss）失效边界，**拒绝盲目开仓**。
    

### 3\. 本地挖掘：工件证伪与果断转向 (PIVOT)

-   对旧的 V6A/V6B 历史工件进行了审计和提取。
    
-   **结果**：发现核心候选者 `v6b-weak-breadth-score88-oi5-top2` 未能通过多个硬性门控，历史资产的数据红利已阶段性耗尽。
    
-   **决策**：**果断放弃死磕老工件**，不再做无意义的回测。
<!-- DAILY_CHECKIN_2026-05-19_END -->
<!-- Content_END -->
