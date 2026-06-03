---
timezone: UTC+8
---

# qiubeccc

**GitHub ID:** qiubeccc

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->
今天读了 Handbook 的 RAG 章节。之前我就了解过RAG的工作流程，以前对 RAG 的理解就是"接个向量库让模型查资料"，但是对每个步骤的详细工作都不太了解，比如embedding如何操作等等。今天主要对这些内容比较深刻：

\- Chunking 不能按固定字数切，要按结构切（标题、API、函数说明），

不然模型拿到函数名却拿不到限制条件

\- Vector DB 不光存向量，还要存元数据（版本、来源、可信等级），

不然旧文档和第三方博客会混进来

\- Citation 不是装饰，是答案能不能被验证的底线。

没有来源的 RAG ≈ 换了个包装的幻觉
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->


今日学习内容：

1.  阅读 Handbook Context 章节 — 学习模型上下文的核心原理（Context Window、Context Engineering、Memory、Knowledge Base）
    
2.  理解 AI x Web3 场景下 context 分层设计（指令层→任务层→事实层→知识层→记忆层）
    

心得：

1.  Context 不是简单的长文本拼接，而是一套信息治理问题——要区分来源、时效、权限和可信度
    
2.  Memory 不能替代实时授权，用户过去允许的动作不代表现在仍然允许
    
3.  好的 context 设计是让模型在正确的信息层级里工作，而不是塞满 context window
    

明日计划：

1.  继续 Handbook 下一章节
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->



今日学习内容：

1.  阅读 Handbook Prompt 章节 — 系统学习了 Prompt 工程核心原则（结构化、CoT、Few-shot、鲁棒性）
    
2.  多模型实操对比 — 在豆包、DeepSeek、Kimi、ChatGPT、Gemini 上测试同一 prompt 任务的表现差异
    

心得：

1.  Prompt 本质是"帮模型缩小可能性空间"，结构化的角色+任务+格式+约束框架在各模型上通用度高
    
2.  没有"最好的模型"——不同模型对不同 prompt 策略的敏感度差异显著，需要按场景针对性调整
    
3.  Chain-of-Thought 在复杂推理任务上效果显著，DeepSeek 和 ChatGPT 表现最突出
    

明日计划：

1.  继续 Handbook 下一章：Context（了解模型"看到"上下文的机制）
    
2.  回顾并提交今日打卡链接 \`
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->






今日学习内容：

1\. 完成了个人学习仓库的初始化（GitHub repo + 仓库结构 + 学习计划）

2\. 阅读了 Handbook LLM 章节，理解了：

\- LLM 是概率模型，不是事实来源

\- Token / Embedding / Transformer 等核心概念

\- LLM 幻觉如何影响执行链

\- LLM 在 AI×Web3 中的定位：理解和生成层

心得：

1\. 最大的收获是 "模型输出是候选结果，不是事实本身" — 这个认知对后续做安全、权限相关的开发很关键

2\. 作为新手，从第一性原理理解 LLM 比直接学框架更重要

3\. 之前有了解过这些AI相关的术语，但是不太深入，今天通过查看handbook和b站课程认真学习了一下，对自己非常有帮助

4\. 通过参加这次训练营，认识到了很多年轻的大佬，彷佛看到了不一样的世界，确实是一次非常有意义的经历和体验

明日计划：

1\. 继续 AI 基础路线：阅读 Handbook Prompt 章节

2\. 尝试用 ChatGPT / API 做一个最简单的 prompt 练习
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
