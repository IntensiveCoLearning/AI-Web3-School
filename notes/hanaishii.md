---
timezone: UTC+8
---

# hanaishii

**GitHub ID:** hanaishii

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->
Workflow（AI 工作流）是一种预定义、线性化的自动化任务执行框架： 核心逻辑：将多个 AI 模型 / 工具调用按固定顺序串联，形成闭环流程 数据流转：上一步的输出结果，直接作为下一步的输入参数 灵活性：流程节点中可嵌入人工干预环节，适配复杂场景  

workflow vs agent  

| 对比维度 | Workflow（工作流） | Agent（智能体） |
| --- | --- | --- |
| 流程逻辑 | 预定义、写死的固定流程：每一步的动作、顺序提前配置完成，不可随意变更 | 动态、自主决策流程：可根据任务进展，自主判断下一步调用的工具 / 动作 |
| 适用场景 | 确定性强、规则明确的任务（如批量翻译、数据清洗、标准化文案生成） | 不确定性高、需要灵活决策的任务（如复杂问题拆解、多步骤推理、开放式对话） |
| 核心特点 | 流程透明、可控性强，适合标准化自动化 | 自主性强、适配性高，适合非标准化、探索性场景 |
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->

Agent = 能持续调用工具、读取状态、调整步骤的 AI 系统。  

| 概念 | 核心要点 |
| --- | --- |
| Tool Use（工具使用） | 让 Agent 从 “纯回答” 升级为 “能做事”，但工具会放大风险（读网页、写数据库、发交易的风险等级完全不同） |
| Planning（规划） | 把目标拆解为可执行步骤，需明确：每步用什么工具、是读 / 写操作、是否需要人工确认、失败后能否重试 |
| State（状态） | 任务状态必须外置可查，不能只藏在 prompt 对话历史中 |
| Reflection（反思） | 自我检查可提升结果质量，但不能替代外部验证 |
| Multi-Agent（多智能体） | 多 Agent 协作时，需警惕责任边界模糊、权限扩散的问题 |
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->


Few-shot（少样本提示）是一种 Prompt 工程方法，核心是在提示词中加入少量示例，引导模型模仿示例的判断逻辑、输出格式与风格，解决 “规则 / 边界难以用一句话明确” 的任务。 它主要适用于三类场景：交易解释（需同时呈现资产变化、风险提示等多维度信息，示例比纯文字更直观）、生成格式复杂的输出（如特定结构的 JSON、Markdown 报告）、内容审核（清晰展示合规 / 违规边界）。 关键注意事项：示例并非一次性素材，而是需随业务规则、评估用例迭代更新的测试资产；当业务规则或数据格式变更时，旧示例可能误导模型，必须同步维护。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->



Framework是把模型、工具、状态、检索、评估、部署组织成可维护的系统。框架解决的是工程组织问题。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->




![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/hanaishii/images/2026-05-19-1779205752836-image.png)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->






![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/hanaishii/images/2026-05-18-1779119674940-image.png)![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/hanaishii/images/2026-05-18-1779119851332-image.png)![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/hanaishii/images/2026-05-18-1779119869424-image.png)
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
