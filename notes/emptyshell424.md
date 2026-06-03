---
timezone: UTC+8
---

# shell

**GitHub ID:** emptyshell424

**Telegram:** @shell424

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->
### 该如何去用RAG  
  
第一阶段：高质量的数据摄入 (The Pipeline)

数据质量决定了系统的天花板。不要直接把文件丢进去。

1.  **解析 (Parsing)：** 使用 `Unstructured` 或 `LlamaIndex` 的数据加载器，将 PDF、HTML、Markdown 转化为纯文本。
    
2.  **语义切分 (Chunking)：**
    
    -   **原则：** 不要按固定字符数（如 500 字）强行切割，这会破坏语义完整性。
        
    -   **解法：** 使用 `RecursiveCharacterTextSplitter`（基于段落、句子、甚至代码块结构递归切分）。
        
    -   **策略：** 设置 `chunk_overlap`（重叠部分，如 10%-20%），确保两个切片之间有上下文连贯性。
        
3.  **向量化 (Embedding)：** 将切片转换为向量存入 Vector Database（推荐 **Milvus** 或 **Chroma**）。_切记：在存入时，必须同时存入 Metadata（文件名、页码、标题），这对于后续的溯源至关重要。_
    

### 第二阶段：检索与增强 (The Brain)

这是 RAG 最关键的“决策”环节，必须构建混合机制。

1.  **混合检索 (Hybrid Search)：**
    
    -   **向量搜索 (Dense Retrieval)：** 捕捉语义。
        
    -   **关键字搜索 (Sparse Retrieval/BM25)：** 捕捉专有名词、错误代码或特定 ID。
        
    -   **融合 (Reciprocal Rank Fusion, RRF)：** 将两者的结果加权合并，这能显著提升召回的覆盖率。
        
2.  **重排序 (Re-ranking)：**
    
    -   **痛点：** 向量搜索回来的前 K 条里，往往夹杂着无关内容（噪声）。
        
    -   **解法：** 使用 `BGE-Reranker` 等交叉编码模型。它会对比“问题”与“每个片段”的相关度并重新打分。**这是过滤噪声最直接的手段。**
        

### 第三阶段：生成与闭环 (The Action)

1.  **Prompt 结构化：** 不要让模型自由发挥，必须强制其“引用”。
    
    Plaintext
    
    ```
    Role: 你是一个严谨的助手。
    Context: {reranked_chunks}
    Constraint: 
    1. 只能根据上述参考资料回答。
    2. 如果资料缺失，明确告知无法回答。
    3. 在回答的每一句后面标注引用的 chunk_id。
    Question: {user_query}
    ```
    
2.  **评估与反馈 (Evaluation)：**
    
    -   引入 `RAGAS` 框架，自动评估你的检索效果（是否召回了对的内容）和生成效果（模型是否胡说八道）。
        
    -   构建 **Feedback Loop**：如果系统回答错误，将该 Question-Chunk 组合记录在案，作为后续微调模型的语料。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->

越学ai越对底层原理疑惑，还是要学好概率论和线性代数  
  
**Embedding 是什么**  
  
一句话：**把「非数字的东西」变成「数字向量」**。  
  
文字、图片、音频这些东西模型没法直接算，embedding 把它们映射到一个高维向量空间（比如 768 维、1536 维）。在这个空间里：  
\- **语义相近的东西 → 距离近**  
\- **语义无关的东西 → 距离远**  
  
比如 "猫" 和 "狗" 的向量距离近，"猫" 和 "微积分" 的距离远。  
  
  
**三个核心特性**  
  
1\. **语义编码** — 不是词袋模型那种 one-hot，而是带上下文语义的稠密向量  
2\. **固定维度** — 不管输入多长，输出都是固定长度的向量  
3\. **可比较** — 用余弦相似度或点积算距离，就能做语义搜索
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->


今天学了hello-agent，ReAct智能范式部分。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->



### day4 浑浑噩噩的一天，明天恢复
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->




```
**Day 3** · 2026.5.20
**Plan**
- 上手新版 Antigravity（反重力）
- 学习 Handbook
- 做 AI idea / 做 portfolio
- 配置更聪明的 Hermes，优化设置
- 将时区修复指南发到同学群
- 17:00 Web3 运行原理讲座
- 19:00 Co-learning｜任务推进与答疑

*Step by step.*
```
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->





**Day 2** · 2026.5.19

**Plan**

\- 学习 Handbook  
\- 20:00 Hermes 从 0 到 1 讲座  
\- 看 AI 下乡回放  
\- 做 AI idea / 做 portfolio

* * *

我发现Hermes还是不太好用，也可能我没设置好，它没我想象的那样流畅，比如：我问它今天应该学什么，我期待他能根据课程大纲回答我，它返回的却是今天晚上八点有一个分享会，xxxx，sadge...

_Step by step._
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->











**Day 1** · 2026.5.18  
  
开营仪式、Co-learning、晚间讲座，久违的共学氛围。  
  
**Done**  
  
\- GitHub CLI 与 WCB API Key 配置  
\- 个人学习仓库 `ai-web3-school-cohort-0` 初始化  
\- Hermes + gh + WCB 工作流打通  
  
**Next**  
  
\- AI 下乡计划回放  
\- Handbook Web3 基础  
  

> WCB 配套 API 能识别个人任务，从 WCB 反哺 Agent 的体验是今天最大的惊喜。

  
_Step by step._
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
