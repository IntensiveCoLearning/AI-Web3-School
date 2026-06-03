---
timezone: UTC+8
---

# wodeche

**GitHub ID:** wodeche

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->
研究了Uniswap的机制，理解了AMM，流动性和 Swap的基础机制
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->

## MCP 协议

是 2024 年 11 月由 Anthropic 开源的、让 AI 安全标准化连接外部工具与数据的通用协议，被称为 “AI 的 USB‑C 接口”。

当 Agent 需要读取文件、查数据、查文档的时候需要链接外部工具。MCP的价值在于把这层连接抽象成协议。

### Schema

MCP 是协议（怎么通信），而 Schema 就是协议里的规则，规定数据长什么样，MCP 靠 Schema 定义每个工具的参数结构

### MCP Server

MCP Server 是实现这个协议的服务程序，作用是把外部系统（数据库、文件、API）灯包装成 MCP 工具。MCP server 的设计重点是边界。暴露：工具名+输入 schema + 输出结构+ 是否有副作用

接受 MCP 客户端请求-》调用真实系统-》返回结构化结果

### Tool Schema

Tool Schema 描述工具名字、用途、参数、返回值和约束。它是模型正确调用工具的关键。

### Permession

![MCP.jpeg](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/wodeche/images/2026-05-29-1780052426851-MCP.jpeg)

### Client

MCP Client 是链接模型和 MCP server 的一侧，Client 负责发现server 的能力

## Evaluation

AI 评估 = **用一套标准、流程、指标，量化 / 定性判断 AI 输出、行为、链路是否达标**

### [**LLM-as-Judge**](https://aiweb3.school/zh/handbook/ai/evaluation/#llm-as-judge)

LLM-as-Judge 是用模型来给模型输出评分。它适合评估开放式答案，比如摘要质量、是否回答完整、是否遵循格式、是否引用来源。
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->


## Vibe Coding

Vibe coding 不是AI帮你写代码，而是人和 AI Coding Agent 共同迭代软件的工作方式：人负责方向、约束和验收。Agent 负责生成、修改、搜索和执行一部分工程动作。

目前 Vibe coding 真正的问题是：人能否清楚描述任务、能不能审查结果，能不能控制改动范围，能不能验证

AI Agent 要安全的接入本地Repo
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->



## FrameWorks

Framework 解决哦你工程组织的问题：**框架是系统边界的表达，不是智能本身。先理解工作流，再决定用不用框架。**

### LangGraph

LangGraph 更偏向工作流和状态机。它把 Agent 或多步骤任务表示成 graph：节点负责执行动作，边负责控制流，state 负责记录过程。

**LangChaing**

LangChain 是最常见的 LLM 应用开发框架之一，覆盖模型接入、prompt、工具调用、retriever、agent、output parser 等模块。

**Hermes**

Hermes 在这里更适合作为“面向工具调用和结构化输出的模型 / agent 生态”来理解，而不是通用框架。

Frameworks 在 AI x Web3 里负责把模型能力接到产品流程里：读取上下文、调用工具、生成结构化动作、记录 trace、进入 eval。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->




RAG

**RAG** 的全称是 **Retrieval-Augmented Generation（检索增强生成）**。简单来说，它是一种结合了“信息检索”和“AI文本生成”的技术，专门用来解决大语言模型（LLM）胡说八道（幻觉）、知识陈旧以及无法访问私密数据的问题。

RAG 就像开卷考试，允许 AI 在回答问题前，先去翻阅指定的参考材料，再结合问题总结最终答案，RAG 让答案有来源有版本有边界。RAG 至少有三次判断，文档怎么切，查询什么内容，生成时如何引用。

Chunking

把长文档切成可检索片段，通过特定算法将片段转化成机器可以理解的”向量 embedding“，并存入向量数据库

Vector DB

存储 embedding ,并按先四度检索相关chunk。 vector DB 里还要存 metadata

Retriever

用户提出问题，系统也会将这个问题转化为向量，然后在 Vector DB里进行相似度搜索，快速匹配和提取最相关的原文材料

Rerank

初步检索后，对候选材料重新排序，把更相关、更可信的内容拍到前面

Citiation

把答案里关键结论链接回来源， 是验证答案的入口，比如这句话是来自文档哪部分，文档版本等

RAG 位于 Knowledge Base 和模型之间，帮助 Agent 查资料，引用证据。

Agent

Agent 是能围绕目标持续调用工具、读取状态、调整步骤的 AI 系统。

Tool Use  
是 Agent 的调用外部的能力，比如搜索、数据库、API等，这让 Agent 从会回答实现能做事。

工具需要明确 Schema、权限范围、调用前后如何记录，以及是否需要人工确认

Planning

是把目标拆解成步骤

State

是 Agent 当前的任务状态。

Reflection

让 Agent 检查自己的中间结果

Multi-agent

多个 Agent 分工协作，但是容易放大协调问题
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->





Memory

memory 是跨请求保留的消息，比如用户偏好，历史任务等，是Agent 在多次交互中持久化存储的信息，可以跨对话保留，不受context window限制，可以无限大，但需要检索机制将其转化为 context，类似档案库

memory 的风险是可能会放松高风险行为的确认

Context

context 是单次交互中，直接给LLM的所有信息，包括用户提示词、系统提示词、工具输出，以及一部分Memory中的相关信息，类似当前的工作台面

Knowledge Base

s是系统可以检索的外部知识库，比如文档、论坛讨论、FAQ，适合解决模型知识过期的问题。是需要维护的，像一个专业化、结构化的外部记忆。Memory记录关于这用户/对话的事情、Knowledge base 记录关于这个世界/领域的客观事实。就像图书馆，存储公共知识。  
  
RAG 检索增强生成

RAG 的作用是：当用户提出问题时，系统先从知识库里找相关材料，再让模型基于这些材料回答。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->






Token:

Token 是模型处理文本的基本单位，和英文单词、汉字、符号没有直接关系，是 tokenizer 切分后的片段,OpenAI

文档里写，对于常见的英文文本，一个token大约四个字符，100个token大约是75个单词，对于中文，大约是两个中文字，有时候也是一个中文字  

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/wodeche/images/2026-05-23-1779540420223-image.png)

Embedding

Embedding 是把文本、代码或其他对象映射成向量，用来衡量语义上是否接近

Hallucination

指模型生成了看起来合理，但不真实或无法验证达到内容，也就是幻觉。处理幻觉需要把模型输出接到外部校验。

Prompt

告诉模型，任务是什么，哪些信息可以使用，应该输出什么格式

instruction

给模型的规则，包含任务目标、可用输入、禁止行为、输出格式和失败格式

prompt injection

攻击者通过用户输入网页、文档等内容，让模型忽略原始规则，泄露信息或者调用危险工具

最小实践

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/wodeche/images/2026-05-23-1779546265707-image.png)
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->







![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/wodeche/images/2026-05-21-1779376991528-image.png)

成功配置好Hermes 学习小助手
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->








观看了今日 Bruce 分享的 Web3 运行原理留下如下思考题

### 1\. 资产自托管：如何提高安全、降低私钥复杂度？

-   **AA 账户抽象与智能合约钱包**：摆脱传统助记词，支持手机号/邮箱登录，允许设置每日限额和白名单。
    
-   **社交恢复机制**：允许指定信任的亲友或 DAO 组织在丢失密钥时联合帮用户恢复账户。
    
-   **MPC（多方安全计算）**：将私钥分片化管理，消灭单点故障，利用 Passkey 和生物识别（FaceID）实现无感签名。
    

### 2\. 没有中心化机构/税收时，公共基础设施谁维护？如何分配？

-   **谁来维护**：通过 DAO 国库或**公共物品资助（如 Gitcoin 二次方资助、Optimism 追溯性资助）**，由社区投票或根据历史实际贡献发放奖励。
    
-   **如何分配**：通过智能合约将**协议手续费**进行编码分配
    

### 3\. 没有审查且隐私很强时，如何治理有害信息/黑产？

-   **分层治理（前端屏蔽）**：底层区块链保持中立和不可篡改，但上层应用（App 前端）根据法律和社区共识进行内容过滤和地址屏蔽。
    
-   **信誉惩罚**：引入链上信誉分（反女巫体系），作恶地址会被永久标记并剥夺协作权限，极大提高其作恶成本。
    

### 4\. 去中心化协作下，如何实现公平、可信的分配？

-   **去中心化评议（如 Coordinape，FairSharing）**：由团队成员根据实际付出互相打分，通过同行共识决定激励，避免单一主管的偏见。
    
-   **基于成果的链上悬赏（Bounty）**：任务拆解、标准明确，通过智能合约托管资金，一旦验收通过自动链上释放。
    
-   **信誉加权与流程透明**：分配权重挂钩“长期贡献值”而非单纯的“持币量”（防止巨鲸垄断）；财务与分配规则全链上公开，接受全员监督与乐观挑战。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->









今天参加了 Draken老师的分享，成功安装好了hermas agent，正式开启了 AI 之旅

![ScreenShot_2026-05-19_222001_156.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/wodeche/images/2026-05-19-1779200411348-ScreenShot_2026-05-19_222001_156.png)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->










参加 Day1 的分享会，AI 工具链如何改变开发流程，Web3 开发者需要补齐哪些架构能力，以及如何把这些能力转化为后续 PoW 和 Hackathon 项目准备
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
