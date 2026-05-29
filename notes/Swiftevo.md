---
timezone: UTC+8
---

# Shift

**GitHub ID:** Swiftevo

**Telegram:** @swiftevo

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->
# Day 6 學習總結 — Agent Memory、Knowledge Infrastructure 與 Context Engineering

今天其實有兩條主線：

1.  **Long-term Memory（長期記憶）**
    
2.  **Context Engineering（上下文工程）**
    

而這兩條線其實正在回答同一個問題：

> AI 怎樣在長時間內保持一致、可靠和有用？

* * *

# 一、Long-term Memory

今天最大的認知突破：

# Memory ≠ Database

* * *

Database 記錄：

```text
發生過甚麼
```

例如：

-   GG23 proposal
    
-   GitHub activity
    
-   funding history
    

* * *

Memory 記錄：

```text
對歷史的理解
```

例如：

```text
CancerDAO 長期維持穩定交付
```

或：

```text
某 reviewer 特別重視 evidence
```

* * *

你也理解：

# Memory 本質上是抽象化（abstraction）

不是原始資料。

* * *

# 二、目前 Agent Memory 的四種主流做法

* * *

## 1\. Retrieval-based Memory

最主流。

做法：

```text
歷史資料
↓
Embedding
↓
Vector DB
↓
需要時 retrieve
```

本質：

```text
Memory = 特殊用途的 RAG
```

* * *

優點：

-   可擴充
    
-   可搜尋
    
-   容量大
    

缺點：

-   不一定一致
    
-   容易 drift
    

* * *

## 2\. Summary-based Memory

定期產生：

```text
長期摘要
```

例如：

```text
User prefers concise reviews.
```

* * *

優點：

-   token 低
    
-   穩定
    

缺點：

-   資訊遺失
    

* * *

## 3\. Knowledge Graph Memory

把記憶變成關係網。

例如：

```text
CancerDAO
→ participated_in → GG23
→ category → longevity
```

* * *

優點：

-   結構清晰
    
-   explainable
    

缺點：

-   維護困難
    

* * *

## 4\. Fine-tuned Identity

今天新學到。

* * *

# Fine-tuning 不是加入知識

而是：

# 改變模型行為傾向

* * *

例如：

讓模型：

-   更像 reviewer
    
-   更保守
    
-   更 evidence-first
    

* * *

你理解：

* * *

# RAG

管理：

```text
知識
```

* * *

# Fine-tuning

管理：

```text
行為
```

* * *

# 三、Obsidian 作為第二大腦

今天很重要的一部分。

* * *

你理解：

# Obsidian 不是 Memory Engine

而是：

# Human-readable Knowledge Store

* * *

本質：

```text
第二大腦
```

* * *

AI 可以：

```text
Obsidian
↓
Chunking
↓
Embedding
↓
Retrieval
```

* * *

優點：

-   Markdown
    
-   Backlinks
    
-   本地控制
    
-   適合研究工作
    

* * *

缺點：

-   AI 不會自動理解
    
-   Retrieval 仍要自己設計
    
-   容易變成資訊垃圾場
    

* * *

# 四、Notion 與 GitHub 的角色

今天這部分其實直接影響 Spark 架構。

* * *

# Notion

定位：

# Human Coordination Layer

* * *

用途：

-   round management
    
-   reviewer collaboration
    
-   dashboards
    

* * *

不是：

# Canonical Knowledge

* * *

# GitHub

定位：

# Canonical Archive

* * *

用途：

-   snapshots
    
-   version history
    
-   structured exports
    

* * *

是：

# Source of Truth

* * *

# 五、Agent 應該抓哪裡？

今天你得到很重要的架構觀念：

Agent 不應直接抓：

```text
Notion
```

* * *

而應：

```text
Notion
↓
Export
↓
GitHub Archive
↓
Chunking
↓
Embeddings
↓
Vector DB
↓
Agent Retrieval
```

* * *

也就是：

# Agent 最終抓的是 AI-ready retrieval layer

不是原始工具。

* * *

# 六、Context Engineering

今天第二大主線。

* * *

你理解：

# Retrieval 成功 ≠ Agent 成功

* * *

因為：

即使找到資料：

還有問題：

```text
AI 最終看到甚麼？
```

* * *

這就是：

# Context Assembly

* * *

# 七、Lost in the Middle

非常重要。

* * *

LLM：

通常：

```text
最重視開頭
次重視結尾
最容易忽略中間
```

* * *

所以：

長 context：

不一定比較好。

* * *

# 八、Top-K Problem

今天理解：

```text
retrieve 越多 ≠ 越好
```

* * *

因為：

會：

-   token 增加
    
-   attention 稀釋
    
-   relevance 降低
    

* * *

所以：

production system：

常做：

```text
Dynamic Top-K
```

* * *

# 九、Context Compression

今天超重要。

* * *

即：

retrieval 完後：

再做：

```text
summary
evidence extraction
structured compression
```

* * *

目的：

```text
用最少 token
保留最多推理價值
```

* * *

# 十、今天最重要的一句

如果昨天你學的是：

```text
AI 怎樣找到知識
```

那今天學的是：

```text
AI 怎樣使用知識
```

* * *

# 十一、Spark 的演化路線（目前理解）

你現在已經能描述：

```text
Notion
↓
Human Workspace

GitHub
↓
Canonical Archive

Chunking
↓
Embeddings

Vector DB
↓
Retrieval Layer

Memory Layer
↓
Long-term Understanding

Context Assembly
↓
Knowledge Selection

Agent
↓
Reasoning + Actions
```

* * *

# 十二、你目前學習地圖的位置

你已經完成：

✅ Prompt  
✅ Context  
✅ RAG  
✅ Chunking  
✅ Embeddings  
✅ Dense vs Sparse Retrieval  
✅ Metadata Filtering  
✅ Vector DB  
✅ Reranking  
✅ Memory Systems  
✅ Fine-tuning  
✅ Obsidian vs Notion vs GitHub  
✅ Context Engineering

* * *

# 下一步（Day 7）

最適合進入：

# Agent Planning & Reasoning

也就是：

> Agent 怎樣決定下一步做甚麼？

你會開始接觸：

-   ReAct（Reason + Act）
    
-   Planning
    
-   Tool Selection
    
-   Reflection / Self-Critique
    
-   Multi-step Workflows
    
-   Multi-Agent Systems
    

這一步開始，AI 不再只是「查資料」，而是開始真正「執行任務」。
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->

Day 5 學習總結 — Context Engineering、Compression 與 Agent Cognition

今天你開始進入：

AI Agent 真正的「思考組裝層」

你今天學到的：

不是單純 retrieval。

而是：

Retrieval 後，AI 怎樣真正使用知識

這是 production Agent 最核心的部分之一。

\---

1\. Context Assembly

今天最核心概念之一：

AI 不會自動最好地閱讀 context

\---

所以：

retrieval 完後：

還需要：

Context Assembly

\---

即：

決定 AI 最終看到甚麼

\---

包括：

\---

哪些 chunks 放進去？

\---

順序怎樣排？

\---

哪些刪掉？

\---

哪些 summary？

\---

哪些 memory activate？

\---

這是：

Attention Engineering

不是單純 retrieval。

\---

2\. Lost in the Middle Problem

今天超重要。

你理解：

LLM 並不是平均注意所有 context

\---

通常：

\---

最注意：

開頭

\---

其次：

結尾

\---

最容易忽略：

中間

\---

所以：

context 很長時：

中間重要資訊容易消失

\---

這就是：

Lost in the Middle

\---

對 Spark 超重要

因為：

你的：

proposals

reviews

evidence

都可能很長。

\---

所以：

retrieval quality：

不只是：

找到甚麼

還包括：

怎樣排列 context

\---

3\. Top-K Problem

你理解：

Retrieve 越多 ≠ 越好

\---

因為：

更多 chunks：

可能：

token 爆炸

attention dilution

relevance blur

\---

所以 production systems：

常做：

Dynamic Top-K

\---

例如：

\---

簡單問題

retrieve 3 chunks。

\---

深度分析

retrieve 15 chunks。

\---

4\. Context Compression

今天另一大核心。

\---

Compression = Retrieval 後再壓縮 context

\---

因為：

retrieved chunks：

通常仍然太大。

\---

常見做法：

\---

Summarization

壓縮長內容。

\---

Evidence Extraction

只保留：

最 relevant evidence

\---

Structured Compression

例如：

Project

Key Evidence

Risk

Missing Evidence

\---

Recursive Compression

summary 再 summary。

\---

5\. Context Engineering（今天真正核心）

你開始理解：

Agent intelligence：

很多時來自：

怎樣組織 context

\---

不是：

單純模型大小

\---

真正問題：

其實是：

在有限 attention 中

放入最有推理價值的知識

\---

6\. Long Context vs Retrieval Debate

今天非常 frontier。

\---

一派認為：

超長 context window 會取代 RAG

例如：

直接塞：

100 萬 token

\---

另一派認為：

Retrieval + Compression 永遠重要

因為：

\---

Attention 有限

\---

長 context reasoning 不穩

\---

Noise 很高

\---

relevance organization 更重要

\---

現在 production AI：

大多仍偏：

Retrieval-first

\---

7\. Memory Activation

今天開始接近真正 Agent cognition。

\---

你理解：

Memory 不應全部 activate

\---

而應：

按 query 動態 activate relevant memory

\---

例如：

問：

Compare CancerDAO and VitaDAO

才 activate：

longevity-related memory

funding history

reviewer patterns

\---

不是：

全部 ecosystem memory。

\---

8\. 真正 Production Agent Pipeline（今天已經完整很多）

你現在已經開始看見：

production agent：

真正長這樣：

\---

Query Understanding

↓

Metadata Filtering

↓

Sparse Retrieval

↓

Dense Retrieval

↓

ANN Search

↓

Reranking

↓

Context Compression

↓

Memory Activation

↓

Context Assembly

↓

LLM Reasoning

↓

Action / Output

\---

9\. Spark 未來真正方向（今天更清晰）

你開始真正看到：

Spark 未來：

不是：

一個 chatbot

而是：

AI-native DeSci Intelligence Infrastructure

\---

包括：

\---

Canonical Archive

\---

Retrieval Layer

\---

Compression Layer

\---

Memory Layer

\---

Agent Layer

\---

Governance Layer

\---

10\. 今天最大的認知升級

你開始真正理解：

AI Agent 的核心：

不是：

模型知道多少

而是：

Agent 如何選擇、組織與優先化知識

\---

這已經開始接近：

AI Cognitive Architecture

\---

11\. 你現在所在的位置

你已經明顯離開：

AI beginner

開始進入：

AI Retrieval / Agent Architecture Builder

\---

你現在理解的：

其實已經非常接近：

production RAG

memory systems

retrieval engineering

AI-native knowledge infra

\---

下一步最適合學甚麼？

你下一步最適合：

Agent Planning & Reasoning

即：

\---

Agent 怎樣：

分解任務

多步推理

使用 tools

自主 workflow

做 decision making

\---

包括：

\---

ReAct

Reason + Act。

\---

Tool Planning

Agent 怎樣決定用哪些 tools。

\---

Multi-step Reasoning

多步 workflow。

\---

Reflection / Self-Critique

Agent 怎樣檢查自己。

\---

Multi-agent Systems

多 agents 協作。

\---

最後一句（今天真正核心）

Retrieval 找知識

Context Engineering 組織知識

而真正 Agent intelligence：

很多時來自：

怎樣讓 AI 在有限 attention 中做出最好的推理。
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->


# Day 4 學習總結 — Long-term Memory、Knowledge Infrastructure 與 AI-native Architecture

今天你開始真正進入：

# AI Agent 長期記憶與知識基礎設施

這已經不是：

```text
「怎樣用 AI」
```

而是：

# 怎樣建立 AI-native knowledge systems

* * *

# 1\. Long-term Memory 問題

今天最大核心之一：

# LLM 本身沒有真正長期記憶

* * *

模型：

只有：

# context window

* * *

即：

只能看到：

```text
當前輸入
```

* * *

# 所以：

真正 Agent：

如果想：

-   長期一致
    
-   有 persistent identity
    
-   記得 ecosystem history
    
-   保持 reviewer continuity
    

就必須：

# 建立 external memory system

* * *

# 2\. 你理解了不同 Memory 類型

* * *

# Episodic Memory

記：

```text
發生過甚麼
```

例如：

-   reviewer outputs
    
-   user interactions
    
-   funding rounds
    

* * *

# Semantic Memory

記：

```text
長期理解
```

例如：

```text
某團隊長期 execution 穩定
```

* * *

# Procedural Memory

記：

```text
怎樣做 workflow
```

* * *

# Identity Memory

最難。

即：

```text
Agent 的風格、價值觀、一致性
```

* * *

# 3\. 現在 AI 世界主流 Memory 做法

你理解：

目前主流其實是：

# Retrieval-based Memory

* * *

即：

conversation / notes / summaries：

embedding 後：

存進 retrieval system。

* * *

需要時：

再 retrieve。

* * *

# 本質：

# Memory 其實也是 RAG

* * *

# 4\. Summary-based Memory

你也理解：

另一種做法：

# 定期壓縮歷史

例如：

```text
User prefers evidence-heavy reviews.
```

* * *

優點：

-   token 少
    
-   長期 continuity 較穩
    

* * *

缺點：

-   information loss
    
-   summary bias
    

* * *

# 5\. Knowledge Graph Memory

更高級做法：

# graph-based relationships

例如：

```text
CancerDAO
→ participated_in → GG23
```

* * *

優點：

-   structure 強
    
-   explainable
    

* * *

缺點：

-   schema 複雜
    
-   很難維護
    

* * *

# 6\. Obsidian + AI Agent

今天很重要部分。

你理解：

# Obsidian 本質：

# External Human-readable Memory Layer

* * *

它：

不是：

```text
真正 AI memory
```

而是：

# AI 可 retrieval 的第二大腦

* * *

# 優點

-   markdown-native
    
-   backlinks graph
    
-   local ownership
    
-   適合 research workflows
    

* * *

# 缺點

* * *

## Obsidian 不是真正 memory engine

AI：

仍需：

-   retrieval
    
-   reranking
    
-   summarization
    

* * *

## 容易 context explosion

knowledge 太多後：

retrieval quality 很難維持。

* * *

## Human notes ≠ AI-native retrieval structure

* * *

# 7\. Fine-tuning（今天重要新概念）

你理解：

# Fine-tuning = 再教育模型

* * *

不是：

# 給 AI 新 database

* * *

而是：

# 改變 AI 行為傾向

* * *

# Prompt

只是：

```text
臨時指令
```

* * *

# Fine-tuning

則：

# 改變模型內部權重

* * *

# 你也理解：

* * *

# RAG

適合：

```text
變動知識
```

例如：

-   funding history
    
-   GitHub activity
    
-   proposals
    

* * *

# Fine-tuning

適合：

```text
穩定 behaviour
```

例如：

-   reviewer style
    
-   formatting
    
-   tone
    
-   reasoning habit
    

* * *

# 8\. Notion vs GitHub（今天超重要）

你開始真正理解：

# Human Workspace

vs

# Canonical Archive

vs

# AI Retrieval Layer

* * *

# Notion

更像：

# Human Coordination Layer

適合：

-   editing
    
-   collaboration
    
-   dashboards
    
-   workflow
    

* * *

但：

不適合作：

# 長期 canonical AI memory source

* * *

# GitHub

更像：

# Canonical Structured Archive

* * *

優點：

-   version control
    
-   snapshots
    
-   auditability
    
-   structured exports
    

* * *

非常適合：

# AI retrieval indexing

* * *

# 9\. 真正 AI Retrieval Source 是甚麼？

今天超重要理解：

# Agent 不應直接 retrieval Notion

* * *

而應：

# Retrieval AI-ready exported knowledge layer

* * *

理想流程：

```text
Notion
↓
Structured Export
↓
GitHub Archive
↓
Chunking
↓
Embeddings
↓
Vector DB
↓
Agent Retrieval
```

* * *

# 10\. Spark 未來真正架構（今天逐漸清晰）

你開始看到：

Spark 未來：

其實可能是：

* * *

# Human Coordination Layer

Notion / Telegram。

* * *

# Canonical Archive Layer

GitHub snapshots。

* * *

# AI Retrieval Layer

chunking + vector DB。

* * *

# Memory Layer

persistent understanding。

* * *

# Agent Layer

reviewer / query / analysis agents。

* * *

# 11\. 今天最大的認知升級

你開始真正理解：

# AI Agent 不只是模型

而是：

# Information Infrastructure

* * *

真正關鍵：

很多時：

不是：

```text
模型有多強
```

而是：

-   memory architecture
    
-   retrieval pipeline
    
-   canonical knowledge design
    
-   governance structure
    
-   information persistence
    

* * *

# 12\. 現在你所在的位置

你其實已經開始：

# AI-native Institutional Memory Design

這跟：

```text
普通 chatbot project
```

已經完全不同。

* * *

# 下一步最適合學的

你下一步最適合：

# Context Assembly & Context Compression

即：

* * *

# AI 最終到底看到甚麼？

* * *

包括：

* * *

# 1\. Long Context Problem

context 太長怎辦？

* * *

# 2\. Lost in the Middle

LLM 會忽略中間資訊。

* * *

# 3\. Context Prioritization

哪些 retrieval chunks 最重要？

* * *

# 4\. Compression Layer

怎樣 summary retrieval 結果？

* * *

# 5\. Memory Activation

甚麼 memory 應被 activate？

* * *

# 6\. Persistent Identity Problem

怎樣避免 Agent drift？

* * *

# 最後一句（今天真正核心）

# 未來 AI Agent 的核心競爭力：

很多時不是：

```text
模型本身
```

而是：

# 長期知識如何被組織、記憶、檢索與持續理解。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->



Day 4 學習總結 — Long-term Memory、Knowledge Infrastructure 與 AI-native Architecture

今天你開始真正進入：

AI Agent 長期記憶與知識基礎設施

這已經不是：

「怎樣用 AI」

而是：

怎樣建立 AI-native knowledge systems

\---

1\. Long-term Memory 問題

今天最大核心之一：

LLM 本身沒有真正長期記憶

\---

模型：

只有：

context window

\---

即：

只能看到：

當前輸入

\---

所以：

真正 Agent：

如果想：

長期一致

有 persistent identity

記得 ecosystem history

保持 reviewer continuity

就必須：

建立 external memory system

\---

2\. 你理解了不同 Memory 類型

\---

Episodic Memory

記：

發生過甚麼

例如：

reviewer outputs

user interactions

funding rounds

\---

Semantic Memory

記：

長期理解

例如：

某團隊長期 execution 穩定

\---

Procedural Memory

記：

怎樣做 workflow

\---

Identity Memory

最難。

即：

Agent 的風格、價值觀、一致性

\---

3\. 現在 AI 世界主流 Memory 做法

你理解：

目前主流其實是：

Retrieval-based Memory

\---

即：

conversation / notes / summaries：

embedding 後：

存進 retrieval system。

\---

需要時：

再 retrieve。

\---

本質：

Memory 其實也是 RAG

\---

4\. Summary-based Memory

你也理解：

另一種做法：

定期壓縮歷史

例如：

User prefers evidence-heavy reviews.

\---

優點：

token 少

長期 continuity 較穩

\---

缺點：

information loss

summary bias

\---

5\. Knowledge Graph Memory

更高級做法：

graph-based relationships

例如：

CancerDAO

→ participated\_in → GG23

\---

優點：

structure 強

explainable

\---

缺點：

schema 複雜

很難維護

\---

6\. Obsidian + AI Agent

今天很重要部分。

你理解：

Obsidian 本質：

External Human-readable Memory Layer

\---

它：

不是：

真正 AI memory

而是：

AI 可 retrieval 的第二大腦

\---

優點

markdown-native

backlinks graph

local ownership

適合 research workflows

\---

缺點

\---

Obsidian 不是真正 memory engine

AI：

仍需：

retrieval

reranking

summarization

\---

容易 context explosion

knowledge 太多後：

retrieval quality 很難維持。

\---

Human notes ≠ AI-native retrieval structure

\---

7\. Fine-tuning（今天重要新概念）

你理解：

Fine-tuning = 再教育模型

\---

不是：

給 AI 新 database

\---

而是：

改變 AI 行為傾向

\---

Prompt

只是：

臨時指令

\---

Fine-tuning

則：

改變模型內部權重

\---

你也理解：

\---

RAG

適合：

變動知識

例如：

funding history

GitHub activity

proposals

\---

Fine-tuning

適合：

穩定 behaviour

例如：

reviewer style

formatting

tone

reasoning habit

\---

8\. Notion vs GitHub（今天超重要）

你開始真正理解：

Human Workspace

vs

Canonical Archive

vs

AI Retrieval Layer

\---

Notion

更像：

Human Coordination Layer

適合：

editing

collaboration

dashboards

workflow

\---

但：

不適合作：

長期 canonical AI memory source

\---

GitHub

更像：

Canonical Structured Archive

\---

優點：

version control

snapshots

auditability

structured exports

\---

非常適合：

AI retrieval indexing

\---

9\. 真正 AI Retrieval Source 是甚麼？

今天超重要理解：

Agent 不應直接 retrieval Notion

\---

而應：

Retrieval AI-ready exported knowledge layer

\---

理想流程：

Notion

↓

Structured Export

↓

GitHub Archive

↓

Chunking

↓

Embeddings

↓

Vector DB

↓

Agent Retrieval

\---

10\. Spark 未來真正架構（今天逐漸清晰）

你開始看到：

Spark 未來：

其實可能是：

\---

Human Coordination Layer

Notion / Telegram。

\---

Canonical Archive Layer

GitHub snapshots。

\---

AI Retrieval Layer

chunking + vector DB。

\---

Memory Layer

persistent understanding。

\---

Agent Layer

reviewer / query / analysis agents。

\---

11\. 今天最大的認知升級

你開始真正理解：

AI Agent 不只是模型

而是：

Information Infrastructure

\---

真正關鍵：

很多時：

不是：

模型有多強

而是：

memory architecture

retrieval pipeline

canonical knowledge design

governance structure

information persistence

\---

12\. 現在你所在的位置

你其實已經開始：

AI-native Institutional Memory Design

這跟：

普通 chatbot project

已經完全不同。

\---

下一步最適合學的

你下一步最適合：

Context Assembly & Context Compression

即：

\---

AI 最終到底看到甚麼？

\---

包括：

\---

1\. Long Context Problem

context 太長怎辦？

\---

2\. Lost in the Middle

LLM 會忽略中間資訊。

\---

3\. Context Prioritization

哪些 retrieval chunks 最重要？

\---

4\. Compression Layer

怎樣 summary retrieval 結果？

\---

5\. Memory Activation

甚麼 memory 應被 activate？

\---

6\. Persistent Identity Problem

怎樣避免 Agent drift？

\---

最後一句（今天真正核心）

未來 AI Agent 的核心競爭力：

很多時不是：

模型本身

而是：

長期知識如何被組織、記憶、檢索與持續理解。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->




# Day 3 學習總結 — Retrieval Architecture 與 RAG Pipeline

今天你正式進入：

# Production-grade Retrieval System Design

你學到的已經不只是：

```text
「甚麼是 RAG」
```

而是：

# RAG 真正怎樣運作

* * *

# 1\. Vector DB

你理解：

# Vector DB 不只是存 embeddings

而是：

# Semantic Index System

* * *

每個 chunk：

通常保存：

* * *

## 原文

```text
chunk text
```

* * *

## Embedding vector

```text
[0.182, -0.774, ...]
```

* * *

## Metadata

例如：

```text
round
category
chunk_type
project_name
```

* * *

# 2\. Embedding Search 的真正本質

你理解：

# Vector Retrieval = 意思距離搜尋

* * *

query：

也會變成 vector。

然後：

系統比較：

```text
query vector
vs
document vectors
```

* * *

# similarity：

通常用：

# cosine similarity

* * *

# 3\. ANN（Approximate Nearest Neighbor）

你理解：

production vector DB：

不會：

```text
暴力比較全部 vectors
```

因為太慢。

* * *

所以：

會用：

# ANN indexing

例如：

# HNSW

* * *

本質：

# 建立向量鄰居地圖

快速找：

```text
可能最近的 vectors
```

* * *

# 4\. SQL vs Vector Retrieval

你開始真正理解：

* * *

# SQL

重視：

# exact structure

例如：

```sql
WHERE round = 'GG23'
```

* * *

# Vector Retrieval

重視：

# semantic similarity

例如：

```text
aging science
≈ longevity research
```

* * *

# 真正 production system：

通常：

# SQL + Vector 一起

* * *

# 5\. Dense vs Sparse Retrieval

今天超重要核心之一。

* * *

# Sparse Retrieval

例如：

-   BM25
    
-   Elasticsearch
    

* * *

重視：

# keyword / exact terms

* * *

優點：

-   精準
    
-   explainable
    
-   deterministic
    

* * *

缺點：

-   不懂意思
    

* * *

# Dense Retrieval

embedding retrieval。

* * *

重視：

# semantic similarity

* * *

優點：

-   理解語意
    
-   適合自然語言
    

* * *

缺點：

-   fuzzy
    
-   semantic drift
    
-   有時不穩
    

* * *

# Production 共識：

# Hybrid Retrieval 最強

即：

# Sparse + Dense + Metadata

一起。

* * *

# 6\. Metadata Filtering（今天非常重要）

你開始理解：

# Metadata 不只是附加資訊

而是：

# Retrieval Boundary Control

* * *

例如：

```text
round = GG23
category = biology
```

* * *

作用：

# 縮小 retrieval search space

* * *

這對 Spark 特別重要。

因為：

你的資料：

本身高度 structured。

* * *

# 7\. Reranking（今天最大核心）

你理解：

# Retrieval 找：

```text
可能相關
```

* * *

# Reranker 判斷：

```text
真正 relevant
```

* * *

Dense retrieval：

像：

# 快速粗搜尋

* * *

Reranker：

像：

# 第二位仔細 reviewer

* * *

# Dense Retrieval：

query/document：

分開 encode。

* * *

# Reranker：

query + document：

一起閱讀。

* * *

然後：

輸出：

# relevance score

例如：

```text
0.94 relevant
```

* * *

# 8\. 為甚麼不直接用 reranker 做 retrieval？

你理解：

# 太慢。

* * *

因為：

reranker：

是真正：

# 深度 relevance 理解

* * *

所以 production systems：

通常：

* * *

# Fast Retrieval

↓

# Small Candidate Set

↓

# Reranking

* * *

# 即：

# Candidate Generation

# Final Selection

* * *

# 9\. 你今天真正開始理解的東西

其實是：

# Retrieval Pipeline Engineering

* * *

即：

production RAG：

不是：

```text
search → answer
```

而是：

# multi-stage retrieval pipeline

* * *

例如：

```text
Query
↓
Metadata Filter
↓
Sparse Retrieval
↓
Dense Retrieval
↓
ANN Search
↓
Reranking
↓
Context Assembly
↓
LLM
```

* * *

# 10\. 對 Spark 的真正啟發（超重要）

你開始看見：

Spark 未來：

不是：

```text
普通 project database
```

而是：

# AI-native retrieval infrastructure

* * *

因為：

你的資料：

天然適合：

-   metadata filtering
    
-   structured chunking
    
-   semantic retrieval
    
-   cross-round analysis
    
-   memory generation
    

* * *

# 11\. 今天最大的認知升級

你開始理解：

# AI systems 很多時不是模型問題

而是：

# Information Architecture 問題

* * *

真正 production RAG：

核心很多時是：

-   schema
    
-   metadata
    
-   retrieval design
    
-   reranking
    
-   chunk quality
    

不是：

```text
單純模型大小
```

* * *

# 下一步（你現在最適合學的）

你下一步最適合：

# Context Assembly 與 Context Compression

因為：

retrieval 完後：

還有一個超大問題：

# AI 最終到底看到甚麼？

* * *

包括：

* * *

# 1\. Top-K Problem

retrieve 幾多 chunks？

* * *

# 2\. Context Ordering

哪個 chunk 放前？

* * *

# 3\. Context Compression

retrieved chunks 太大怎辦？

* * *

# 4\. Lost in the Middle Problem

長 context 中間資訊容易被忽略。

* * *

# 5\. Long-context vs Retrieval Debate

超長 context window 是否取代 RAG？

這是現在 AI infra 最大爭論之一。

* * *

# 最後一句（今天真正核心）

# Retrieval 系統真正目標：

不是：

```text
找最多資料
```

而是：

# 在最少 token 下

# 給 AI 最 relevant knowledge。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->





Day 3 學習總結 — Retrieval Architecture 與 RAG Pipeline

今天你正式進入：

Production-grade Retrieval System Design

你學到的已經不只是：

「甚麼是 RAG」

而是：

RAG 真正怎樣運作

\---

1\. Vector DB

你理解：

Vector DB 不只是存 embeddings

而是：

Semantic Index System

\---

每個 chunk：

通常保存：

\---

原文

chunk text

\---

Embedding vector

\[0.182, -0.774, ...\]

\---

Metadata

例如：

round

category

chunk\_type

project\_name

\---

2\. Embedding Search 的真正本質

你理解：

Vector Retrieval = 意思距離搜尋

\---

query：

也會變成 vector。

然後：

系統比較：

query vector

vs

document vectors

\---

similarity：

通常用：

cosine similarity

\---

3\. ANN（Approximate Nearest Neighbor）

你理解：

production vector DB：

不會：

暴力比較全部 vectors

因為太慢。

\---

所以：

會用：

ANN indexing

例如：

HNSW

\---

本質：

建立向量鄰居地圖

快速找：

可能最近的 vectors

\---

4\. SQL vs Vector Retrieval

你開始真正理解：

\---

SQL

重視：

exact structure

例如：

WHERE round = 'GG23'

\---

Vector Retrieval

重視：

semantic similarity

例如：

aging science

≈ longevity research

\---

真正 production system：

通常：

SQL + Vector 一起

\---

5\. Dense vs Sparse Retrieval

今天超重要核心之一。

\---

Sparse Retrieval

例如：

BM25

Elasticsearch

\---

重視：

keyword / exact terms

\---

優點：

精準

explainable

deterministic

\---

缺點：

不懂意思

\---

Dense Retrieval

embedding retrieval。

\---

重視：

semantic similarity

\---

優點：

理解語意

適合自然語言

\---

缺點：

fuzzy

semantic drift

有時不穩

\---

Production 共識：

Hybrid Retrieval 最強

即：

Sparse + Dense + Metadata

一起。

\---

6\. Metadata Filtering（今天非常重要）

你開始理解：

Metadata 不只是附加資訊

而是：

Retrieval Boundary Control

\---

例如：

round = GG23

category = biology

\---

作用：

縮小 retrieval search space

\---

這對 Spark 特別重要。

因為：

你的資料：

本身高度 structured。

\---

7\. Reranking（今天最大核心）

你理解：

Retrieval 找：

可能相關

\---

Reranker 判斷：

真正 relevant

\---

Dense retrieval：

像：

快速粗搜尋

\---

Reranker：

像：

第二位仔細 reviewer

\---

Dense Retrieval：

query/document：

分開 encode。

\---

Reranker：

query + document：

一起閱讀。

\---

然後：

輸出：

relevance score

例如：

0.94 relevant

\---

8\. 為甚麼不直接用 reranker 做 retrieval？

你理解：

太慢。

\---

因為：

reranker：

是真正：

深度 relevance 理解

\---

所以 production systems：

通常：

\---

Fast Retrieval

↓

Small Candidate Set

↓

Reranking

\---

即：

Candidate Generation

Final Selection

\---

9\. 你今天真正開始理解的東西

其實是：

Retrieval Pipeline Engineering

\---

即：

production RAG：

不是：

search → answer

而是：

multi-stage retrieval pipeline

\---

例如：

Query

↓

Metadata Filter

↓

Sparse Retrieval

↓

Dense Retrieval

↓

ANN Search

↓

Reranking

↓

Context Assembly

↓

LLM

\---

10\. 對 Spark 的真正啟發（超重要）

你開始看見：

Spark 未來：

不是：

普通 project database

而是：

AI-native retrieval infrastructure

\---

因為：

你的資料：

天然適合：

metadata filtering

structured chunking

semantic retrieval

cross-round analysis

memory generation

\---

11\. 今天最大的認知升級

你開始理解：

AI systems 很多時不是模型問題

而是：

Information Architecture 問題

\---

真正 production RAG：

核心很多時是：

schema

metadata

retrieval design

reranking

chunk quality

不是：

單純模型大小

\---

下一步（你現在最適合學的）

你下一步最適合：

Context Assembly 與 Context Compression

因為：

retrieval 完後：

還有一個超大問題：

AI 最終到底看到甚麼？

\---

包括：

\---

1\. Top-K Problem

retrieve 幾多 chunks？

\---

2\. Context Ordering

哪個 chunk 放前？

\---

3\. Context Compression

retrieved chunks 太大怎辦？

\---

4\. Lost in the Middle Problem

長 context 中間資訊容易被忽略。

\---

5\. Long-context vs Retrieval Debate

超長 context window 是否取代 RAG？

這是現在 AI infra 最大爭論之一。

\---

最後一句（今天真正核心）

Retrieval 系統真正目標：

不是：

找最多資料

而是：

在最少 token 下

給 AI 最 relevant knowledge。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->






學習總結 — Retrieval 與 RAG Architecture

今天你已經正式進入：

AI Retrieval Systems

這是整個 Agent / RAG / AI-native database 的核心。

你今天其實學到的不是單一技術。

而是：

AI 怎樣「找到」知識

\---

1\. Chunking

你理解：

Chunking = 把大型資料切成可 retrieval 的語意單位

不是：

人工剪貼文字

而是：

為 semantic retrieval 準備資料單位

\---

你也理解：

對 Spark 來說：

Structured Chunking 最適合

例如：

summary

evidence

funding

reviewer notes

分開。

\---

超重要理解：

好 schema = 好 chunking

而：

好 chunking = 好 retrieval

\---

2\. Embeddings

你理解：

Embedding = 把語意轉成向量位置

不是：

字面 matching

而是：

meaning representation

\---

你也理解：

意思接近：

會在 vector space 靠近。

例如：

aging research

與：

longevity science

\---

超重要理解：

Embedding 不是 AI 真正理解

而是：

statistical semantic compression

\---

3\. Dense vs Sparse Retrieval

這是今天最大核心之一。

\---

Sparse Retrieval

重視：

keyword / exact terms

例如：

BM25

Elasticsearch

SQL search

\---

優點：

精準

可解釋

成本低

缺點：

不懂語意

\---

Dense Retrieval

重視：

semantic similarity

即：

embeddings

vector search

\---

優點：

理解意思

適合自然語言 retrieval

缺點：

有時太 semantic

不穩定

可能 drift

\---

真正 production system：

通常：

Hybrid Retrieval

即：

Sparse + Dense + Metadata

一起。

\---

4\. Metadata 的重要性

你開始理解：

真正 production retrieval：

不是：

純 vector search

而是：

metadata-rich retrieval

例如：

round

category

evidence type

GitHub presence

funding history

\---

這對 Spark 特別重要。

因為：

你的資料：

本身非常 structured。

\---

5\. Retrieval 真正本質

今天最重要理解之一：

RAG 不是 AI 記住 database

而是：

AI 動態 retrieval database

\---

即：

query

→ retrieve chunks

→ inject context

→ generate answer

\---

6\. Spark System 的真正演化方向

你現在已經開始看見：

未來 Spark：

不是：

普通 database

而是：

AI-native knowledge infrastructure

\---

可能包括：

\---

Canonical Archive

raw history。

\---

Chunk Layer

semantic units。

\---

Embedding Layer

meaning representation。

\---

Retrieval Layer

semantic search。

\---

Analysis Layer

reviewer outputs。

\---

Memory Layer

persistent understanding。

\---

Agent Layer

workflow + tools + actions。

\---

7\. 你今天真正進步的地方

你開始：

用 retrieval 視角看 database

這非常重要。

因為：

未來 AI systems：

很多時：

模型不是核心

而是：

retrieval quality

\---

你已經開始從：

「如何問 AI」

進入：

「如何讓 AI 找到正確知識」

這是完全不同層次。

\---

下一步（你下一個最適合學的）

你現在最適合下一步：

Retrieval Theory & Retrieval Architecture

即：

\---

1\. Retrieval 到底怎樣判斷「相關」？

例如：

cosine similarity

nearest neighbor search

reranking

relevance scoring

\---

2\. Retrieval Pipeline

真正 retrieval：

不是：

search → answer

而是：

query understanding

→ metadata filtering

→ sparse retrieval

→ dense retrieval

→ reranking

→ context assembly

→ answer

\---

3\. Reranking 是甚麼？

這是 production RAG 核心之一。

因為：

retrieval 第一次找的結果：

通常不夠準。

所以：

需要第二層：

relevance judge

\---

4\. Top-K Problem

例如：

retrieve top 5?

top 20?

top 50?

太少：

miss context。

太多：

token explosion。

\---

5\. Long Context vs Retrieval

現在 AI 世界最大爭論之一。

\---

一派認為：

超長 context window 就夠。

不需要複雜 RAG。

\---

另一派認為：

retrieval 永遠重要。

因為：

context 太貴

long context attention 不穩

memory organization 更重要

\---

6\. Hallucination 與 Retrieval

retrieval：

真的能降低 hallucination？

還是：

只會 retrieval hallucination？

這也是重要爭論。

\---

7\. AI-native Database Design

你之後會開始理解：

未來 database：

不只是：

storage

而是：

retrieval-oriented architecture

這跟傳統 database mindset 完全不同。

\---

最後一句（今天真正核心）

傳統 database：

保存資料

\---

AI-native database：

讓 AI 能找到、理解、重組知識

這是你現在真正開始進入的世界。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->







今天聽了Elon 老師的 AI x web3 課，感覺目前很多的例子都是大集團或者大公司的成功案例。暫時很少看到有個人開發者的應用例子。目前最集中的都是在 AI 如何協助 web3 錢包安全或者交易上的分析。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->








# 學習總結 — AI × Web3 Learning Journey

昨天你其實已經跨過了一個很重要的階段：

> 從「AI 使用者」開始進入「AI-native system builder」的思維。

你學的不是單一技術。

而是：

```text
AI Agent Architecture 的核心世界觀
```

* * *

# 1\. Prompt

你理解了：

# Prompt 不只是問題

而是：

```text
控制 AI 行為的方法
```

好的 prompt 會定義：

-   role
    
-   task
    
-   format
    
-   constraints
    
-   evaluation angle
    

你也開始理解：

```text
Spark reviewer system 本質上是 prompt system
```

* * *

# 2\. Context

你理解了：

# LLM 本身不知道你的世界

所以：

```text
Context = AI 當下能看到的世界
```

包括：

-   retrieved documents
    
-   database content
    
-   conversation history
    
-   user profile
    
-   memory
    

你也理解：

```text
Prompt 決定方向
Context 決定品質
```

* * *

# 3\. RAG

你學到：

# RAG = Retrieval-Augmented Generation

本質：

```text
先找資料
再生成回答
```

而且：

RAG 的真正核心不是 vector DB。

而是：

# Dynamic Context Injection

即：

```text
按問題動態給 AI 最相關資料
```

你也理解：

```text
Spark Database 很適合 RAG architecture
```

因為：

-   proposals 很多
    
-   history 很多
    
-   evidence 很多
    
-   constantly changing
    

* * *

# 4\. Embeddings

你開始理解：

# Embedding = 意思座標

不是 keyword matching。

而是：

# semantic similarity

意思接近的內容：

在 vector space 裡會靠近。

這是：

RAG semantic search 的核心。

* * *

# 5\. Agent

昨天最大突破之一：

# LLM ≠ Agent

你理解：

# Agent = LLM + Context + Memory + Tools + Actions

真正 Agent：

不是 chatbot。

而是：

# AI-native workflow system

* * *

# 6\. Database vs Memory

這是昨天最重要的理解之一。

你開始清楚：

* * *

# Database

保存：

```text
raw history
```

例如：

-   proposals
    
-   GitHub exports
    
-   funding records
    

* * *

# Memory

保存：

```text
long-term understanding
```

例如：

```text
這個團隊長期 execution 穩定
```

* * *

你也理解：

# 沒有 history，就沒有 memory

所以：

目前 priority 應該是：

```text
擴大 canonical database
```

尤其：

加入 GG23 DeSci projects。

* * *

# 7\. RAG vs Memory

你學到：

* * *

# RAG

解決：

```text
AI 不知道資料在哪
```

本質：

```text
retrieval
```

* * *

# Memory

解決：

```text
AI 不知道甚麼重要
```

本質：

```text
persistent understanding
```

* * *

超重要一句：

# RAG 提供知識

# Memory 提供判斷

* * *

# 8\. Tool Use（昨天後半最重要）

你開始理解：

# AI 真正變成 Agent

是從：

```text
能使用工具
```

開始。

* * *

你理解：

# Tool = AI 可調用的能力

例如：

-   GitHub search
    
-   database lookup
    
-   wallet verification
    
-   report generation
    

* * *

你也理解：

真正 Agent：

不是：

```text
單次回答
```

而是：

# multi-step workflow

例如：

```text
question
→ retrieval
→ verification
→ analysis
→ memory
→ report
```

* * *

# 9\. Spark System 的真正定位（超重要）

昨天你其實已經慢慢開始看見：

# Spark 不只是 database

而是：

# AI-native DeSci Infrastructure

未來可能包括：

* * *

## Canonical Archive

保存 raw reality。

* * *

## RAG Layer

動態 retrieval。

* * *

## Analysis Layer

review / risk / summaries。

* * *

## Memory Layer

長期 ecosystem understanding。

* * *

## Agent Layer

workflow + tools + actions。

* * *

# 10\. 你昨天真正建立的能力

你其實開始建立的是：

# AI System Thinking

不是：

```text
怎樣問 ChatGPT
```

而是：

```text
怎樣設計 AI-native knowledge systems
```

這是完全不同層次。

* * *
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->









# **Daily Note: 2026-05-19**

## **Today**

-   Date: 2026-05-19
    
-   Focus: 完成 Codex 與 GitHub 的連結，開始理解 chatbot 與 AI agent 的差別。
    
-   Handbook page:
    
    ![](https://aiweb3.school/favicon.ico)
    
    [**https://aiweb3.school/zh/handbook/**](https://aiweb3.school/zh/handbook/)
    
-   WCB Learning item: Week 1｜前置準備｜完成 Proof-of-Work 提交測試
    

## **Minimum Path**

-   確認 GitHub CLI 已登入 Swiftevo。
    
-   確認本地學習 repo 已成功 push 到 GitHub。
    
-   使用 GitHub repo 作為最小 Proof-of-Work 測試提交連結。
    
-   寫下 chatbot 與 AI agent 的初步差別。
    

## **Notes**

-   今天完成 Codex / GitHub / GitHub CLI 的連結流程，並成功把個人學習 repo 推到 GitHub。
    
-   我的 Proof-of-Work 類型暫定為 GitHub public repo。
    
-   審核者應該能看到：repo 是公開的、README 說明學習用途、daily note 記錄每日學習、learning plan 顯示後續路線。
    

## **Chatbot vs AI Agent**

-   Chatbot 主要回應使用者的輸入，重點在對話、解釋、問答和生成內容。
    
-   AI agent 不只回應，還能根據目標拆解任務、使用工具、讀寫檔案、檢查狀態、執行步驟，並在需要時要求人類確認。
    
-   對 AI x Web3 來說，AI agent 的關鍵不是「更會聊天」，而是能在安全邊界內與 wallet、鏈上資料、API、repo、任務平台等外部系統互動。
    
-   所以 agent workflow 需要特別注意：權限、確認點、審計紀錄、secret 保護、以及哪些操作不能自動執行。
    

## **Sources**

-   Learning repo: [**https://github.com/Swiftevo/ai-web3-school-cohort-0**](https://github.com/Swiftevo/ai-web3-school-cohort-0)
    
-   Handbook:
    
    ![](https://aiweb3.school/favicon.ico)
    
    [**https://aiweb3.school/zh/handbook/**](https://aiweb3.school/zh/handbook/)
    
-   WCB Learning:
    
    ![](https://web3career.build/favicon.ico)
    
    [**https://web3career.build/zh/programs/AI-Web3-School#tab=learning**](https://web3career.build/zh/programs/AI-Web3-School#tab=learning)
    

## **Check-in Draft**

今天完成了 Codex 與 GitHub 的連結，並成功把 AI x Web3 School 個人學習 repo 推到 GitHub，作為後續每日筆記、任務 Proof-of-Work、實驗和 Hackathon idea 的公開記錄空間。

我也開始理解 chatbot 與 AI agent 的差別：chatbot 偏向回應與生成內容，而 AI agent 更像是能圍繞目標拆解任務、使用工具、讀寫資料、檢查狀態並在必要時要求人類確認的工作流執行者。放到 Web3 情境裡，agent 的重點會包含 wallet 權限、鏈上資料、交易確認、安全邊界和可審計紀錄。

本次 Proof-of-Work 類型：GitHub public repo  
Proof link: [**https://github.com/Swiftevo/ai-web3-school-cohort-0**](https://github.com/Swiftevo/ai-web3-school-cohort-0)

## **Submission Record**

-   Check-in platform link: 待確認
    
-   Submitted check-in link: 待提交
    
-   Related task link: Week 1｜前置準備｜完成 Proof-of-Work 提交測試
    

## **Reflection**

-   Learned: Codex 可以協助維護 repo，但 GitHub CLI / git 仍是本地同步與提交的重要基礎工具。
    
-   Confusing: chatbot 和 agent 的界線不是模型本身，而是是否能圍繞目標使用工具並管理狀態。
    
-   Next buildable thing: 把 GitHub repo 作為最小 Proof-of-Work 提交到 WCB。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->










今天聽了第一堂，補全了對錢包的認識、AA抽象錢包以及底層錢包的基礎知識點。tc 老師的講解很清楚。

同時與 codex 互動，設置如何可以授權 codex 連動到我自己的 github
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
