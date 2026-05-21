---
timezone: UTC+8
---

# Joea529

**GitHub ID:** Joea529

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
📚 AI × Web3 School Day 4 — 上下文（Context）

💡 3 个核心理解：

1.  Context 不是文本拼接，是信息治理——每类信息必须标注来源、时效、权限、可信度
    
2.  2\. Context Engineering 的目标不是塞满窗口，而是让模型在正确的信息层级里工作（指令/任务/事实/知识/记忆五层）
    
3.  3\. Memory 不能替代实时授权——用户过去允许某个动作，不代表现在仍然允许
    

🎯 最大收获：Context 决定模型看到的是可验证的链上事实，还是用户幻想和过期文档

❓ Memory 和 Knowledge Base 的边界在哪里？用户偏好存 Memory，那"上次分析的这个合约已审计通过"属于 Memory 还是 KB？

🔗 [https://github.com/Joea529/ai-web3-school-cohort-0](https://github.com/Joea529/ai-web3-school-cohort-0)

📖 https://aiweb3.school/zh/handbook/
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

📚 AI × Web3 School Day 2 — 提示词（Prompt）

💡 3 个核心理解：

1.  Prompt 是软约束，不是安全边界——真正的安全必须交给代码、权限、校验和审计
    
2.  2\. 指令分层要清楚：系统规则、开发者规则、用户目标、检索内容不能混在一起
    
3.  3\. Prompt Injection 在 Agent 场景尤其危险，应对方案是标记不可信数据 + 参数校验 + allowlist + human approval
    

🎯 最大收获：Prompt 的价值不是让模型更自信，而是让模型在合适的时候停下来

❓ instruction 的「禁止行为」和代码层权限校验如何划分边界？

🔗 [https://github.com/Joea529/ai-web3-school-cohort-0](https://github.com/Joea529/ai-web3-school-cohort-0)

📖 https://aiweb3.school/zh/handbook/
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->



📚 AI × Web3 School Day 2 — 提示词（Prompt）

💡 对照手册学完 4 个知识节点：

1\. Instruction — 把任务目标、可用输入、禁止行为、输出格式拆成四段式指令

2\. Few-shot — 用示例教模型处理"边界难描述"的任务，但要当测试用例维护

3\. Structured Output — JSON schema 让输出能被代码校验，不只是散文

4\. Prompt Injection — 外部输入不可信，安全边界不能靠 prompt 单扛

🎯 最大收获：Prompt 是软约束不是安全边界。真实产品的安全要靠代码层校验 + allowlist + human approval，不能指望一句"不要被注入"。Instruction 四段式写法（目标→输入→禁止→格式）比散装 prompt 可维护得多。

❓ 在 AI × Web3 场景里，交易风险摘要 prompt 怎么平衡"标记足够多风险"和"不让用户对正常操作过度紧张"？

🔗 https://aiweb3.school/zh/handbook/ai/prompt/

📖 https://github.com/Joea529/ai-web3-school-cohort-0
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->




📚 AI × Web3 School Day 1 — 大语言模型（LLM）

💡 对照手册学完 5 个知识节点：1. Token — 不只是"字"，是成本和容量的基础单位2. Embedding — 语义向量 ≠ 事实真相3. Transformer — 模式组合器，不是数据库4. Hallucination — 不靠 prompt 修补，靠 schema + 来源 + 审计5. Multimodal — 让模型"看见"界面，但判断要回到结构化数据🎯 最大收获：「把模型当推理层，不当真相源」这句话对产品设计太关键了——LLM 输出不是终点，是要被验证的候选结果。❓ RAG 刷新频率：金融/产品文档/学术论文怎么定？🔗 [https://github.com/Joea529/ai-web3-school-cohort-0📖](https://github.com/Joea529/ai-web3-school-cohort-0%F0%9F%93%96) [https://aiweb3.school/zh/handbook/llm/](https://aiweb3.school/zh/handbook/llm/)
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
