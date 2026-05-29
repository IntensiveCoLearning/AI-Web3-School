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
# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->
📚 AI × Web3 School Day 8 — 氛围编程（Vibe Coding）

💡 3 个核心理解：

1.  Vibe Coding 是把认知资源从"怎么写"迁移到"做什么"和"怎么验证"——人的角色从打字员变成导演，迭代速度决定效率上限。
    
2.  2\. 它不是独立技能，而是前面七章的汇聚点：LLM 提供能力、Prompt 提供精度、Context 提供背景、Agent 提供工具、Framework 提供结构——Vibe Coding 是所有这些的"用户体验层"。
    
3.  3\. 最大陷阱不是 AI 写错代码，是人不验证就接受。Web3 场景尤其危险——AI 生成的合约代码必须经过审查，Vibe Coding 加速"生成"和"测试"，但不替代"审查"。
    

🎯 最大收获：Vibe Coding 这个词最妙的地方在"vibe"——它不是偷懒，是进入一种更高效的认知状态。每一层自动化都释放一层认知负担，让你思考更高维度的问题。

❓ 如果 Vibe Coding 的终局是"所有人都能写软件"，那开发者的核心价值会迁移到哪里？我猜是三个方向：系统设计（知道做什么）、验证判断（知道对不对）、领域知识（知道为什么）。

🔗 [https://github.com/Joea529/ai-web3-school-cohort-0](https://github.com/Joea529/ai-web3-school-cohort-0)

📖 https://aiweb3.school/zh/handbook/
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->


📚 AI × Web3 School Day 8 — 氛围编程（Vibe Coding）

💡 3 个核心理解：

1.  Vibe Coding 是把认知资源从"怎么写"迁移到"做什么"和"怎么验证"——人的角色从打字员变成导演，迭代速度决定效率上限
    
2.  2\. 它不是独立技能，而是前面七章的汇聚点：LLM 提供能力、Prompt 提供精度、Context 提供背景、Agent 提供工具、Framework 提供结构——Vibe Coding 是所有这些的"用户体验层"
    
3.  3\. 最大陷阱不是 AI 写错代码，是人不验证就接受。Web3 场景尤其危险——AI 生成的合约代码必须经过审查，Vibe Coding 加速"生成"和"测试"，但不替代"审查"
    

🎯 最大收获：Vibe Coding 最妙的地方在"vibe"——不是偷懒，是一种更高效的认知状态。每一层自动化释放一层认知负担，让你思考更高维度的问题。前六章不是孤立的——它们就是 vibe coding 的认知基础设施。

❓ 如果 Vibe Coding 的终局是"所有人都能写软件"，开发者的核心价值会迁移到三个方向：系统设计、验证判断、领域知识。代码生成会变成 commodity。

🔗 [https://github.com/Joea529/ai-web3-school-cohort-0](https://github.com/Joea529/ai-web3-school-cohort-0)

📖 https://aiweb3.school/zh/handbook/
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->



📚 AI × Web3 School Day 7 — 框架（Frameworks）

💡 3 个核心理解：

1.  框架是系统边界的表达，不是智能本身——先画清楚工作流再决定用不用框架，别让产品逻辑迁就框架
    
2.  2\. 简单链路不要上框架（一次调用+检索+输出足够），长流程才需要显式 state（多步、确认、恢复）
    
3.  3\. 框架要能退出——如果很难换模型、换向量库、换部署方式，长期维护成本会吞噬初期便利
    

🎯 最大收获：六种框架/工具（LangChain、LangGraph、OpenAI SDK、DSPy、Hermes、Learning Agent）解决的是不同层的问题。最有价值的判断不是"哪个最流行"，而是它帮你管理了哪一层复杂度，又把哪些藏起来了。

❓ 我现在用的 Hermes Agent 本身就是框架的产物——它的 tool calling、state management、skills、memory 分别对应了 Handbook 里的哪些设计选择？如果要求我画 Hermes 的"先画工作流再选框架"图，关键节点应该有哪些？

🔗 [https://github.com/Joea529/ai-web3-school-cohort-0](https://github.com/Joea529/ai-web3-school-cohort-0)

📖 https://aiweb3.school/zh/handbook/
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->




📚 AI × Web3 School Day 6 — 智能体（Agent）

💡 3 个核心理解：

1.  Agent 不是自主权，是被约束的执行循环——目标、工具、状态、权限、停止条件缺一不可
    
2.  2\. 工具让 Agent 从「会回答」到「能做事」，但每类工具的风险等级不同：读 < 写 < 授权 < 支付
    
3.  3\. Self-reflection 可以提高质量，但确定性检查才能承载风险——写入、授权、支付不能只靠模型自我审查
    

🎯 最大收获：Agent 的核心不是让模型更像人，而是让执行循环有清楚边界。最危险的设计是模糊目标 + 广泛工具 + 长期记忆 + 大额资产权限同时存在。

❓ 我现在每天用的 Hermes Agent 就是一个典型的 Agent 系统。它的 tool use、state management、planning 和 stop 条件是怎么设计的？和 Handbook 里画的理想架构有多大差距？

🔗 [https://github.com/Joea529/ai-web3-school-cohort-0](https://github.com/Joea529/ai-web3-school-cohort-0)

📖 https://aiweb3.school/zh/handbook/agent/
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->





📚 AI × Web3 School Day 5 — 检索增强生成（RAG）

💡 3 个核心理解：

1.  RAG 的可靠性取决于证据链而非向量库——检索结果只是候选证据，需要看来源、版本、时效和适用范围
    
2.  2\. Chunking 不能按固定字数切，技术文档应按标题/API/函数/审计记录的结构切分，并保留 metadata
    
3.  3\. Citation 不是装饰——答案里的关键判断必须能追溯到具体文档段落，找不到证据就该拒答而非补全
    

🎯 最大收获：RAG 的核心不是让回答更长，而是让回答有来源、有版本、有边界。没有 citation 的 RAG 只是把幻觉从模型内部搬到了检索系统里。

❓ 链上数据（区块、交易、事件）怎么变成可检索的 chunk？索引层元数据该存哪些字段来支持 metadata filter？

🔗 [https://github.com/Joea529/ai-web3-school-cohort-0](https://github.com/Joea529/ai-web3-school-cohort-0)

📖 https://aiweb3.school/zh/handbook/
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->






+📚 AI × Web3 School Day 5 — 检索增强生成（RAG）

+

+💡 3 个核心理解：

+1. RAG 的可靠性取决于证据链而非向量库——检索结果只是候选证据，需要看来源、版本、时效和适用范围

+2. Chunking 不能按固定字数切，技术文档应按标题/API/函数/审计记录的结构切分，并保留 metadata

+3. Citation 不是装饰——答案里的关键判断必须能追溯到具体文档段落，找不到证据就该拒答而非补全

+

+🎯 最大收获：RAG 的核心不是让回答更长，而是让回答有来源、有版本、有边界。没有 citation 的 RAG 只是把幻觉从模型内部搬到了检索系统里。

+

+❓ 链上数据（区块、交易、事件）怎么变成可检索的 chunk？索引层元数据该存哪些字段来支持 metadata filter？

+

+🔗 [https://github.com/Joea529/ai-web3-school-cohort-0](https://github.com/Joea529/ai-web3-school-cohort-0)

+📖 [https://aiweb3.school/zh/handbook/](https://aiweb3.school/zh/handbook/)
<!-- DAILY_CHECKIN_2026-05-22_END -->

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
