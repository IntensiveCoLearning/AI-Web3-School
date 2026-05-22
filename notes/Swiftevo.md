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
