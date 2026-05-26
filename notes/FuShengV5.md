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
# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->
Day 8 | AI × Web3 School

今日完成：

1.  学习 Frameworks 章节，理清 LLM / Agent / Framework 三层关系
    
2.  区分 Agent 产品（Claude Code/OpenCode）和 Agent 框架（LangChain/Spring AI/Hermes）
    
3.  理解 LangChain（线性链）vs LangGraph（带循环图）的核心区别
    
4.  理解循环的本质：Agent 自我检查→发现错误→回头修正
    
5.  理解 Spring AI 属于线性链，要实现循环需要手动写 Reflection + 重试
    
6.  对比 Spring AI vs LangChain4J 的定位
    

感受：今天的内容让我把之前自学 Spring AI 时接触到的"自主规划"概念和 HandBook 里的框架分类串起来了。最关键的认知是：多步调用（成绩环比）≠ 循环（写代码→编译→改）。前者 Spring AI 原生支持，后者需要 LangGraph 或手动写循环。这也解释了为什么 OpenCode 用起来比我写的 Spring AI Agent 更"聪明"——不是模型更强，是它内置了循环。

下一步：

-   继续学习 MCP（模型上下文协议）章节
    
-   可选：了解 LangChain4J，后续新起项目体验
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->

Day 8 | AI × Web3 School

今日完成：

1.  理解 Week 1 课程任务"最小可交互 AI 学习产物"的要求和可选形式
    
2.  将自己已有的 Spring AI Agent 改造成 Handbook 问答助手
    
3.  设计 System Prompt：严格基于 Handbook 回答，举例必须附带可查证 URL，禁止编造
    
4.  新增 HandbookQueryTools：getHandbookToc（查目录）+ getHandbookSection（按章节抓内容）
    
5.  验证问答效果：LLM、Instruction 等概念均能正确定位到 Handbook 章节，给出结构化解说
    
6.  完成 README 提交说明，上传至个人学习仓库
    

感受：这次任务的实践性很强，把前面学的 System Prompt 设计、Tool Use、Context Engineering 概念真正用起来了。比较满意的地方是 prompt 设计——跟 Hermes 讨论了好几轮才确定"禁止编造+引用必须可查证"这条红线。实际测试中两张截图也能清晰说明 Agent 的行为差异：宏观概念和章节内知识节点都能正确处理。

下一步：

-   继续推进 Phase 1 AI 基础剩余章节（Frameworks / MCP / Vibe Coding / Evaluation / Fine-tuning / Inference）
    
-   可选改进：增加本地缓存、Jsoup HTML 解析、Web UI
    
-   参加今晚的线上分享会
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->




Day 7 | AI × Web3 School

今日完成

· 观看周六英文分享会回放（嘉宾：以太坊 Sophia 老师）

· 主题：《以太坊在人工智能的未来中扮演着什么角色？》

分享会核心内容整理

一、AI Agent 的演变与问题

Sophia 老师首先回顾了 AI 的发展：从早期的问答助手，到如今能够编写代码、转移资金、做决策、协调软件、甚至使用其他 Agent 的存在。

她指出，之所以现在讨论 AI 与以太坊的结合而非去年或更早，是因为从去年开始 Agent 呈现指数级增长，同时也带来了一系列问题：

· AI Agent 无法使用人类的基础设施

· 无法安全使用密码

· 无法开设银行账户

· 无法等待数天的结算周期

· 无法依赖法院或法律合同

· 无法通过人类渠道建立信誉

核心问题在于：AI Agent 交易的基础设施将决定新经济的运作方式——谁可以参与、信任如何建立、价值流向哪里、竞争环境是否开放。这套基础设施正在被设计，而设计选择会随 AI 活动规模扩大而不断放大。

二、以太坊是什么

以太坊是一个公开、可编程的区块链，核心功能：

· 无需中介即可数字拥有物品

· 无需中心运营商即可与他人协调

· 在没有中心运营商的情况下转移价值并执行协议

三、以太坊的设计原则（CROPS）

Swen 助教特别请 Sophia 老师展开讲解了这四点：

· Censorship Resistance（抗审查）

· Open Source and Free（开源免费）

· Privacy（隐私）

· Security（安全）

四、为什么以太坊的设计适合 AI Agent

Agent 需要：身份、信誉、支付、可执行的协议、中立的基础设施。而这些恰好是以太坊围绕 CROPS 原则构建的。

核心论点：以太坊是机器经济中为机器提供的去中心化结算与协调中枢，而人类始终处于中心位置——一个机器可以大规模协调但人类保留能动性、所有权和控制权的中立层。

五、提到的技术方向

· EIP 8004：Agent 的身份与信任

· x402 支付

六、AI × 以太坊的实际项目

· AI 驱动的协议安全（active RFPs）

· ZK LM credits（与 PSE 团队联合）

· ZKML 研究

· 大学研究合作伙伴关系

案例：Deep Funding——以太坊基金会试点的一个机制，使用 AI Agent 来分配公共物品资助。

七、未来方向

· ERC-8004 验证注册表（基于 TEE 的验证）

· 扩展的私有支付基础设施

· 通过智能合约进行 Agent 间的自动协商

· 与 AI 框架和企业工具的更深整合

· 更深度的大学研究合作

八、核心结论

Ethereum for AI = Ethereum for humans

九、推荐学习网址

· [8004.org](http://8004.org)

· [AI.ethereum.foundation](http://AI.ethereum.foundation)

· [PSE.dev](http://PSE.dev)

十、答疑环节

Sophia 老师分享了 eth.skills 网站，并谈及自己对 AI 在即时支付领域的看法。

补充说明

分享会末尾 Swen 助教与 Sophia 老师的讨论环节在 B 站视频中未完整呈现，后续计划去推特查找完整内容。

下一步

· 继续学习 Handbook 的 AI 部分

· 查阅推特补全答疑讨论内容

· 浏览推荐的学习网址
<!-- DAILY_CHECKIN_2026-05-24_END -->

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
