---
timezone: UTC+8
---

# FuShengV5

**GitHub ID:** FuShengV5

**Telegram:** 

## Self-introduction

在职java工程师

## Notes

<!-- Content_START -->
# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->
## **Day 6 | AI × Web3 School**

### **今日完成**

-   参加纯英文分享会（现场跟听较吃力，计划后续看回放补上）
    
-   参加 LXDAO 202期周会（S16季度会议）
    

### **今日未安排新内容学习**

今日主要以参与社区活动为主，未进行 Handbook 技术内容的学习。计划明天继续学习 Handbook 的 AI 部分。

### **下一步**

-   观看英文分享会回放，补上遗漏内容
    
-   明天继续学习 Handbook 的 AI 部分
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->

Day 5 | AI × Web3 School

今日完成：

1.  学习 Embedding（文字→数学向量）和 Transformer（Attention 机制）原理
    
2.  深入理解 Context Window（硬件限制）vs Context Engineering（框架代码约束输入）的区别
    
3.  学习 RAG（检索增强生成）全流程概念与 Chunking 策略（按结构切+metadata+section\_path）
    
4.  理解向量库原理：文档与问题用同一 Embedding 模型转向量→余弦相似度搜索→Top-K
    
5.  理解 Handbook 最小实践三种类型（概念/框架/操作），以及它们不是写代码而是验证概念的设计意图
    
6.  学习 LLM 章节最小实践——"交易解释器"：Context Engineering + 引用校验 + Reflection 的综合运用
    
7.  学习 Agent 章节最小实践——"DAO 提案研究 Agent"：只读设计、来源标注、权限升级需 simulation
    
8.  TC 老师课程全部完成标注
    

感受：今天量比较大但收获很扎实。RAG 的 Chunking 细节比想象中多——不是简单切文档，每块都要带"身份证"（metadata），检索前先过滤版本再搜语义。最小实践的讲解让我明白了 Handbook 的设计意图：不是让你写代码跑起来，而是通过设计 Prompt 或方案来验证前面学的概念。Agent 的"只读优先"设计思路跟昨天学的 EVM 确定性有联系——Simulation 让 Agent 在签名前就能预判影响，这是安全的基石。

下一步：

-   晚上参加 Co-learning 和分享会
    
-   继续学习 Frameworks / MCP 等剩余章节
    
-   按需复习今晚分享会内容
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->


Day 4 | AI × Web3 School

今日完成：

1.  配置 WCB Agent Secret API Key，完成 Agent 对接环境准备
    
2.  学习 TC 老师课程关于 Web3 交易模拟（Simulate）与 EVM 确定性
    
    -   理解了 EVM 是确定性状态机：同一笔交易 + 同一状态 → 100% 相同输出
        
    -   理解了模拟（Simulate）的核心价值：在签名前预执行交易，防止 Gas 浪费、滑点、钓鱼
        
    -   理解了 EVM 算法的公开性与不可篡改性：黄皮书公开、可自行实现、可验证
        
    -   建立了 Web2 信任模型（"我相信银行不会骗我"）vs Web3 信任模型（"我知道数学不可能骗我"）的对比认知
        

感受：今天最大的收获是对 Web3 交易确定性的理解。以前觉得 Web2 和 Web3 就是"转账方式不同"，现在明白了本质差异——Web3 的 EVM 作为一个确定性状态机，让交易变得可预测、可模拟、可验证，这是 Web2 做不到的。这种"公开可验证的数学信任"很震撼。

下一步：

-   晚上 8 点参加 Elon 老师线上课《AI 在 Web3 的应用》
    
-   继续学习 RAG / Agent / MCP 等 AI 相关概念
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->



今日复习tc老师的web课程，并学习wsl2研究hermes具体的使用方法，有时间接着看handbook的ai部分知识。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->




今日将handbook中ai部分学完，然后开始web3部分的学习，并回顾昨晚tc老师的课
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->





今日准备了协作工具zoom，LLM准备了cc、codex、ds 4.0pro。web3刚开始接触，还在学习
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
