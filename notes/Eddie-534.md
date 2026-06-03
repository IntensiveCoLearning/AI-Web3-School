---
timezone: UTC+8
---

# Eddie-534

**GitHub ID:** Eddie-534

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
今天已安装 hermes agent，正在学习使用中  

![屏幕截图 2026-05-21 235114.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Eddie-534/images/2026-05-21-1779378714146-_____2026-05-21_235114.png)
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

今天学习了 llm 和 agent 的一些核心知识点  
  
**1\. LLM 特性**

**擅长**：语言理解、代码生成、推理  
**不擅长**：精确事实记忆、确定性计算、跨会话状态保持

核心原理：基于上下文进行概率生成，预测最合理的下一个 token 序列。它不是“理解”，而是“猜得准”。

* * *

**2\. 四个控制层面**

**上下文窗口**：工作内存，控制模型能看到多少信息  
**系统指令**：设置身份、语气和行为边界  
**提示词**：传递当前任务的具体意图  
**工具调用**：让模型从“说话”变为“做事”

* * *

**3\. API 调用**

MaaS：无需 GPU，用 API Key 按 token 付费

核心入参：model（用哪个模型）、messages（对话历史）、temperature（随机程度）、max\_tokens（最大输出长度）

* * *

**4\. Prompt → Workflow → Agent 边界**

**Prompt**：决策在人，模型只回答，路径不固定  
**Workflow**：预定义固定流程，模型是其中一个节点  
**Agent**：模型自主规划、动态调用工具、跨轮管理状态

三者失控风险和可调试性完全不同：Prompt 最低，Workflow 中等，Agent 最高。

一句话：Prompt 是问一次，Workflow 是走流程，Agent 是派任务。

* * *

**5\. AI 输出必须验证的五类问题**

**事实错误**：自信编造不存在的信息，关键事实须外部核实  
**引用错误**：编造论文、链接、数据来源，不信任模型给的链接  
**推理漂移**：长上下文中逻辑链断裂，需分段验证  
**执行越权**：agent 做了超出授权范围的操作，须设置 guardrails 和人工确认  
**工具误用**：调用了错误的工具或参数，须用 tracing 监控

黄金法则：AI 的输出是建议，不是答案。

* * *

**6\. Agent 核心组件**

**状态管理**：多节点共享读写同一 State  
**长期记忆**：跨 session 存储与召回  
**MCP**：LLM 与外部工具的统一连接协议  
**Skills**：可复用的高层指令集  
**Tool Calling**：模型输出结构化请求，框架执行后回传结果  
**Tracing**：可视化 agent 执行链  
**Guardrails**：输入输出验证规则，不符合则中止  
**Handoff**：子任务完成后移交控制权  
**错误恢复**：执行失败时的重试、回退和人工介入

* * *

**7\. 什么时候需要 Agent？**

**适合用 Agent**：目标开放式、需要多工具协作、中间结果决定下一步策略、需跨会话记忆状态

**更适合简单方案**：一次性问答用 Prompt、流程固定用脚本、高合规要求用人工审核节点、数据确定性要求高用数据库查询

核心原则：复杂度和风险越高，越要警惕过度 agent 化。
<!-- DAILY_CHECKIN_2026-05-20_END -->
<!-- Content_END -->
