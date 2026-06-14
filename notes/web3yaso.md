---
timezone: UTC+8
---

# Web3yaso

**GitHub ID:** web3yaso

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-14
<!-- DAILY_CHECKIN_2026-06-14_START -->
今日任务

-   准备Demoday PPT
    
-   准备技术问题
    
-   彩排
<!-- DAILY_CHECKIN_2026-06-14_END -->

# 2026-06-12
<!-- DAILY_CHECKIN_2026-06-12_START -->

今日任务

-   冻结代码
    
-   上传Demo
    
-   准备PPT
<!-- DAILY_CHECKIN_2026-06-12_END -->

# 2026-06-11
<!-- DAILY_CHECKIN_2026-06-11_START -->


今日任务

-   准备黑客松项目最终任务包
    
-   准备测试网证明材料 [https://github.com/web3yaso/Citely/blob/dev/docs/Submission.md](https://github.com/web3yaso/Citely/blob/dev/docs/Submission.md)
<!-- DAILY_CHECKIN_2026-06-11_END -->

# 2026-06-10
<!-- DAILY_CHECKIN_2026-06-10_START -->



今日总结

-   研究分布式存储解决方案
    
-   录制视频
<!-- DAILY_CHECKIN_2026-06-10_END -->

# 2026-06-09
<!-- DAILY_CHECKIN_2026-06-09_START -->




今日总结

-   观看ZK分享会[https://x.com/AgentEconCN/status/2064185832144298351](https://x.com/AgentEconCN/status/2064185832144298351)
    
-   上传agnet代码库，[https://github.com/web3yaso/cobo-agent-wallet](https://github.com/web3yaso/cobo-agent-wallet)
    
-   准备PPT
<!-- DAILY_CHECKIN_2026-06-09_END -->

# 2026-06-08
<!-- DAILY_CHECKIN_2026-06-08_START -->





今日总结

-   完成了reading agent的第一版本 [https://github.com/web3yaso/cobo-agent-wallet](https://github.com/web3yaso/cobo-agent-wallet)
    
-   将Citely部署到Vercel [citely-nine.vercel.app](http://citely-nine.vercel.app)
<!-- DAILY_CHECKIN_2026-06-08_END -->

# 2026-06-06
<!-- DAILY_CHECKIN_2026-06-06_START -->






今日总结

-   今天主要补齐了week3剩余任务
    
-   继续黑客松项目开发，开始集成Solana网络
<!-- DAILY_CHECKIN_2026-06-06_END -->

# 2026-06-05
<!-- DAILY_CHECKIN_2026-06-05_START -->







今日总结

-   完成黑客松项目组队和任务分配
    
-   开始编码
    
-   整理技术文档
<!-- DAILY_CHECKIN_2026-06-05_END -->

# 2026-06-04
<!-- DAILY_CHECKIN_2026-06-04_START -->








今日总结

-   回看了Cobo wallet的技术分享
    
    -   了老师三个关于 Pact 的问题,
        
        1\. 动态 payTo / 收款人能不能不写死
        
        老师确认：policy 默认只校验 target\_in 命中的合约，不会自动约束 calldata 里的 payTo。也就是说我们把固定结算合约放进白名单就行，每笔实际收款人动态变、不用在 policy 里枚举。我们这套"按内容动态分账给作者"的设计在 Pact 上是跑得通的。
        
        附带一个有用信息：如果反过来我们想限制收款人（比如只许付给白名单作者），有个 params\_match 字段可以传 ABI、约束 calldata 里的具体参数。但老师提醒这功能还不完善，复杂的数组/结构体 ABI 解析支持得不好，单层简单参数才稳。所以我们 demo 先走不限制收款人的默认路径最稳。
        
    -   2\. 月度订阅
        
        老师明确：Pact 只约束合约/转账层面（能不能付、付给谁、多少钱、几笔）订阅状态、到期失效、访问控制 Pact 一概不负责,那是平台后端/订阅合约的事。他原话是平台方没办法判断这笔转账是不是给某个订阅方的。
        
        关于自动续费：老师推荐设一个带金额+时间限制的长期 Pact（比如每月可向某地址转一笔、金额上限多少）而不是每月重新批一次。原因是每次新建 Pact 都要人在手机上审批，续费场景反复审批体验很差。Pact 创建后不可修改，要改只能作废旧的、建新的。
        
        3\. 累计金额预算上限 —— 转账支持,合约调用还不行
        
        usage\_limits 的 rolling window(24h/7d/30d)支持按累计金额设上限——但只对普通转账(transfer)成熟。对合约调用(contract\_call)目前做不到:因为合约调用的真实金额从 calldata 和目标地址上看不出来,得做一次模拟执行才知道,这块 Cobo 还没做。
        
        这条对我们影响最大,得讨论: 如果我们的 x402 付费是走合约调用形态,那"给 agent 设累计 USDC 预算上限"这个安全边界暂时落不了地。
        
-   基于Cobo SDK和Vercel吗开发了自己的Agent
<!-- DAILY_CHECKIN_2026-06-04_END -->

# 2026-06-03
<!-- DAILY_CHECKIN_2026-06-03_START -->









今日任务总结

-   完成了week2遗留任务，设计了agent的安全地区；复盘了AI如何帮助AAVE DAO更好的应对生存危机
    
-   整理了项目实现技术文档 [https://github.com/web3yaso/x402write/tree/dev](https://github.com/web3yaso/x402write/tree/dev)
<!-- DAILY_CHECKIN_2026-06-03_END -->

# 2026-06-02
<!-- DAILY_CHECKIN_2026-06-02_START -->










-   确定了黑客松主题和框架 [https://web3yaso.github.io/x402write/](https://web3yaso.github.io/x402write/)
    
-   完成了week2的遗留任务： agent access control研究
<!-- DAILY_CHECKIN_2026-06-02_END -->

# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->











今日工作

-   初步实现了：x402 Paywall + CAW Agent 自主支付闭环，明天会继续测试
    
-   确定了黑客松的选题和设计
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->












今日完成

-   Agent支付商业流程拆解
    
-   Agent profile分析
    
-   Agent设计
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->













## **今日完成**

-   参加线上活动｜观看回放 5.29｜Women Builders in AI × Web3: Learning Paths, Collaboration Networks & Global Opportunities。
    
-   参加线上活动｜观看回放 5.29｜Week 2 例会，并补充回放观看截图说明。
    
-   完成 WCB 任务提交：AI × Web3 问题地图与主方向选择。
    
-   梳理了 AI x Web3 的 6 个基础方向：
    
    -   Payment / Commerce / Settlement
        
    -   Identity / Reputation / Capability / Interoperability
        
    -   Wallet / Permission / Safe Execution
        
    -   Privacy / Security / Sovereignty
        
    -   Dev Tooling / Agent Workflow
        
    -   Governance / Coordination / Public Goods
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->














今天完成了 AI × Web3 School 的两项补充任务，主要围绕 Week 1 学习总结和行业案例拆解做复盘。

1.  发布了一份 AI × Web3 学习总结，整理了这一阶段对 agent memory、长期上下文、AI 工具协作、Web3 权限边界和可验证记录的理解。  
    证明链接：  
    [**https://github.com/web3yaso/ai-web3-school-cohort-0/blob/main/submissions/2026-05-29-agent-memory-learning-summary.md**](https://github.com/web3yaso/ai-web3-school-cohort-0/blob/main/submissions/2026-05-29-agent-memory-learning-summary.md)
    
2.  拆解了 Virtuals Protocol 与 agent economy 方向，重点分析它如何把 AI agent、代币化、社区参与、收益分配和链上资产机制结合起来。我也记录了这个方向的潜力与风险：真正有价值的 agent economy 不能只停留在发币或 persona，而要能解释任务、交付、收益、责任和验证机制。  
    证明链接：  
    [**https://github.com/web3yaso/ai-web3-school-cohort-0/blob/main/tasks/2026-05-29-virtuals-protocol-agent-economy.md**](https://github.com/web3yaso/ai-web3-school-cohort-0/blob/main/tasks/2026-05-29-virtuals-protocol-agent-economy.md)
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->















-   完成了week 1 的任务：设计AI & Web3的最小边界
    
-   观看了Neo-Cypherpunk / Privacy分享的回放
    
-   研究了如何自动打卡
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->
















-   观看 Agent Wallet 直播分享。
    
-   复习 EOA、智能账户、多签账户和 Agent Wallet 的权限差异。
    
-   整理 Agent Wallet 的关键点：身份、权限、限额、人工确认、撤销和审计。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->

















回看《**Long-term Memory for AI Agents：如何让 Agent 拥有持续上下文与长期一致性**》
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->


















今天主要集中完成 Week1的任务。  

-   补齐了前置任务
    
-   完成Week1 AI方向任务
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->



















观看了英文分享：这次分享的主题围绕 Open Agentic Economy，也就是在 AI Agent 逐渐成为互联网新参与者之后，Ethereum 如何为人类和 Agent 共同参与的开放经济提供基础设施。

[https://x.com/i/broadcasts/1qxvvkQkVXQxB](https://x.com/i/broadcasts/1qxvvkQkVXQxB)
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->




















观看老师的分享：**AI 下乡计划｜AI 在 Web3 的应用**

[https://x.com/AgentEconCN/status/2057711778466083149](https://x.com/AgentEconCN/status/2057711778466083149)
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->





















今日完成：

✅ 复习 Web3 基础（Network、Cryptography、Wallet、Smart Contract）

✅ 阅读 AI×Web3 Bridge（Agent Wallet、Machine Payment、Settlement & Escrow、Web3 Tool Use）
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->






















今天主要观看了Hermes Agent分享，收获满满
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->























```
今日完成：
✅ 复习 Web3 基础（Network、Cryptography、Wallet、Smart Contract）
✅ 阅读 AI×Web3 Bridge（Agent Wallet、Machine Payment、Settlement & Escrow、Web3 Tool Use）

核心收获：
- 一笔交易从签名到链上可见：钱包→RPC→mempool→区块→共识→执行→确认→索引→浏览器
- 私钥 = 控制权，签名 = 授权证明，助记词 = 高风险秘密
- Agent Wallet 核心：控制权不交给概率系统，Agent 只有可验证、可限制、可撤销的行动空间
- Machine Payment：把付款意图和实际结算分离
- Escrow 先定义状态机，再写付款代码
- Web3 工具：读写分离，工具用确定性边界限制模型
```
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->
























今天观看了开营仪式的视频
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
