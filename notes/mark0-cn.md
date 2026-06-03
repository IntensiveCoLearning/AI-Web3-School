---
timezone: UTC+8
---

# mark0

**GitHub ID:** mark0-cn

**Telegram:** @ZdnILYiwc3FUQrE

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->
[https://app.notion.com/p/Circom-36ee1810ba1780138606cc4e8dc47eb4](https://app.notion.com/p/Circom-36ee1810ba1780138606cc4e8dc47eb4)
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->

[https://app.notion.com/p/ZK-36fe1810ba17817caf8ce83075948e8d](https://app.notion.com/p/ZK-36fe1810ba17817caf8ce83075948e8d)
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->


[https://app.notion.com/p/P-vs-NP-36fe1810ba17812a86fbed1f5b260f65](https://app.notion.com/p/P-vs-NP-36fe1810ba17812a86fbed1f5b260f65)
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->



[https://app.notion.com/p/R1CS-36de1810ba178025a861c6afc61a870e](https://app.notion.com/p/R1CS-36de1810ba178025a861c6afc61a870e)
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->




[https://www.notion.so/R1CS-36de1810ba178069b2fdc089b8bbc946](https://www.notion.so/R1CS-36de1810ba178069b2fdc089b8bbc946)
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->





[https://www.notion.so/365e1810ba1780ceab6efaaa23dbdcf3](https://www.notion.so/365e1810ba1780ceab6efaaa23dbdcf3)
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->







[https://www.notion.so/MPT-366e1810ba17807fab44fa01df0410fa](https://www.notion.so/MPT-366e1810ba17807fab44fa01df0410fa)
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->








[https://www.notion.so/Session-365e1810ba17809d80f5f8f28f5ad05e](https://www.notion.so/Session-365e1810ba17809d80f5f8f28f5ad05e)
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->









[https://www.notion.so/Skill-Tool-Hermes-365e1810ba1780d08918ef2e0113bcf6](https://www.notion.so/Skill-Tool-Hermes-365e1810ba1780d08918ef2e0113bcf6)
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->












[https://www.notion.so/365e1810ba17800ab31fe6f4dee38d00](https://www.notion.so/365e1810ba17800ab31fe6f4dee38d00)
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->













[https://www.notion.so/Agent-365e1810ba17804797fac380a6bd82a9](https://www.notion.so/Agent-365e1810ba17804797fac380a6bd82a9)
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->















[https://www.notion.so/Hermes-Agent-Loop-365e1810ba1781b1a7c6d105eaf41d11](https://www.notion.so/Hermes-Agent-Loop-365e1810ba1781b1a7c6d105eaf41d11)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->
















为什么需要 RAG

\- LLM 训练知识会过期，context window 也装不下所有文档和历史

\- RAG 的作用：用户提问 → 先从知识库检索相关材料 → 模型基于材料回答

\- 核心不是让回答更长，而是让回答有来源、有版本、有边界

\- 没有 citation 和 freshness 的 RAG，只是"把幻觉从模型内部搬到检索系统里"

Chunking（切块）

把长文档切成可检索片段。切太小语义断裂，切太大噪声多、token 成本高。推荐按结构切——标题、API endpoint、函数说明、FAQ 问答、审计记录——每个 chunk 保留来源 URL、版本号和更新时间。

Vector DB（向量数据库）

存储 embedding 并按语义相似度检索 chunk。但向量相似 ≠ 答案正确：旧版文档可能高度匹配却早已失效。所以不应只存向量，还要存 metadata（来源、版本、可信等级、是否废弃），检索时先过滤再排序。

Retriever（检索器）

根据用户问题取回候选材料，可以是向量检索、关键词检索、混合检索或图检索。关键判断：如果用户问题里含有版本、时间、地址或具体对象，就不能只做纯向量搜索，必须加 metadata filter。

Rerank（重排序）

对初步检索结果二次排序，把更相关、更可信、更完整的材料排到前面。适用于候选结果多、相似度接近或混合检索的场景。会增加延迟和成本，面向资产风险或开发者文档的问答通常值得加，小型 FAQ 未必需要。

Citation（引用）

把答案里的关键结论连接回来源，是用户验证答案的入口。至少要说明：这句话来自哪份文档、来源是否官方、文档版本或更新时间、哪些结论只是模型归纳、哪些地方没有足够证据。没有 citation 的 RAG，用户无法判断答案来自文档还是模型自己补出来的。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
