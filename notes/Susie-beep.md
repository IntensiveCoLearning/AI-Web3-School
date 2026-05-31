---
timezone: UTC+8
---

# Susie-beep

**GitHub ID:** Susie-beep

**Telegram:** @susiestory

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->
**LangChain** 分层的"乐高"式架构：

```
Application Layer
    ↓
Chains / Agents / LCEL (表达式语言)
    ↓
Memory | Tools | Retrievers | Callbacks
    ↓
LLM / ChatModel (抽象接口，支持任何模型)
    ↓
Document Loaders / Vector Stores
```

**Qwen Agent** 以模型为中心的扁平架构：

```
Agent (BaseChatEngine)
    ↓
LLM (Qwen 模型，function call 原生支持)
    ↓
Tool Manager ←→ Memory Manager
    ↓
Tool Registry (内置工具 + 自定义工具)
```

适用场景

| 场景 | 推荐 |
| --- | --- |
| 多模型切换、厂商无关 | LangChain |
| 复杂 RAG Pipeline | LangChain |
| 快速构建 Qwen 原生 Agent | Qwen Agent |
| 依赖 function call 的工具密集型任务 | Qwen Agent |
| 生产级多 Agent 协作 | LangChain (LangGraph) |
| 轻量部署、低学习成本 | Qwen Agent |
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->

金融机构少用 MCP 的核心原因按优先级排：

一是数据安全边界，协议层暴露面太大

二是已有成熟内部 API，标准化收益不明显

三是换模型成本高（合规流程），跨模型复用工具的需求本来就少
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->


Agent架构拆解

1、subagent：主要作用上下文隔离

2、planning:task decomposition-reasoning loop（ReAct）-Reflection

3、ReAct：推理→行动→观察→再推理

4、Memory：短期context，长期值得存的偏好等存在外部存储（向量库、DB等）

5、tool：Function call是agent和大模型约定工具调用约定的对话格式（模型可以自主判断调用什么工具而不是预定规则），MCP是agent和外部工具的通信标准

6、上下文工程：决定哪些信息、以什么顺序、用什么信息密度出现在大模型面前

7、routing：模型判断是否需要调用工具用什么工具，可以用规则模型或者小模型判断

8、效果评估：人工标注数据集、更强的模型评分、RAGAs
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->



AI产品架构

│

├── 输入层

│ ├── user query

│ ├── system prompt

│ └── history

│

├── orchestration（编排层）

│ ├── query rewrite

│ ├── planner

│ ├── workflow

│ └── routing

│

├── capability layer（能力层）

│ ├── RAG

│ ├── tools

│ ├── MCP

│ └── function calling

│

├── memory layer

│ ├── short-term memory

│ └── long-term memory

│

├── model layer

│ └── LLM

│

└── guardrail

├── 合规

├── hallucination

└── 权限控制
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->




Skill（技能/工具） 是一个函数——给定输入，执行特定操作，返回结果。它本身不决定"什么时候调用自己"，没有目标感，没有循环，执行完就结束。比如"查股价"、"计算DCF"、"生成图表"都是 Skill。

Agent（智能体） 是一个有目标的执行循环——它感知环境，决定下一步用哪个 Skill，执行，观察结果，再决定下一步，直到目标完成。它是 Skill 的调用者和编排者。

核心差异一句话：Skill 是被动的能力，Agent 是主动的决策者。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->





是否引入大模型开发框架，例如langchain：

引入框架的触发条件：

-   流程 > 5 步、多分支
    
-   需要高级 RAG（重排序、混合检索）
    
-   需要 Agent 式决策
    
-   团队协作、生产部署
    

当固定流水线 → 纯 Python 脚本。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->






【日期】2026-05-23 【今日完成】

-   法规文档自动化解析需求的思考：技术选型与架构决策笔记（daily/2026-05-23.md）
    
-   核心：混合架构（确定性遍历 + 按需 RAG）、平台 vs 本地、agent skill、langchain等
    

【仓库链接】[ai-web3-school-cohort-0/daily/](https://github.com/Susie-beep/ai-web3-school-cohort-0/blob/master/daily/2026-05-23.md)[2026-05-23.md](http://2026-05-23.md) [at master · Susie-beep/ai-web3-school-cohort-0](https://github.com/Susie-beep/ai-web3-school-cohort-0/blob/master/daily/2026-05-23.md)
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->







研究了下Agent API，为什么只能查任务不能替我打卡
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->








【日期】2026-05-19 【今日完成】

-   AI：Agent Workflow + 上下文/工具调用笔记（主赛道）
    
-   Web3 补齐：EOA vs 合约、交易生命周期（experiment Web3 小节）
    
-   experiments/2026-05-19-eoa-vs-contract.md · daily/2026-05-19.md
    

【明日计划】

-   AI：Web3 Tool Use 与 LangChain 工具编排
    
-   Web3：Agent Wallet 权限/额度（约 30min）
    
-   WCB Learning 当日任务
    

【仓库链接】[https://github.com/Susie-beep/ai-web3-school-cohort-0](https://github.com/Susie-beep/ai-web3-school-cohort-0) 【Handbook 章节】Agent Workflow（主）· Web3 基础账户/交易（补齐）
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->









【日期】2026-05-18 【今日完成】

-   初始化 AI × Web3 School 个人学习仓库（本地结构 + README / 计划 / 模板）
    
-   阅读 Handbook 首页，理解四层学习地图
    
-   与 Learning Agent 完成画像与基础能力诊断（AI/Web3 有基础，编程会基础脚本）
    
-   学习仓库：[https://github.com/Susie-beep/ai-web3-school-cohort-0](https://github.com/Susie-beep/ai-web3-school-cohort-0)
    

【明日计划】

-   Web3 账户模型 + 交易生命周期（见 daily/2026-05-19.md）
    
-   experiments/2026-05-19-eoa-vs-contract.md
    

【仓库链接】[https://github.com/Susie-beep/ai-web3-school-cohort-0](https://github.com/Susie-beep/ai-web3-school-cohort-0) 【Handbook 章节】[https://aiweb3.school/zh/handbook/](https://aiweb3.school/zh/handbook/)
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
