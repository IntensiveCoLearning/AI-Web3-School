---
timezone: UTC+8
---

# KUOLEYA

**GitHub ID:** KUOLEYA

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->
今天补一下AI背景的基础，主要是对课程的核心知识点进行一些总结，首先LLM 本质是基于上下文逐 token 做概率生成，擅长语言理解、代码生成和推理，但不擅长精确记忆、确定性计算与跨会话状态保持。控制它靠四层：上下文窗口是“工作内存”，系统指令设身份和边界，提示词传意图，工具调用让它从说变成做。调用 LLM 门槛很低，通过 MaaS 用 API Key 按量付费，核心入参就 model、messages、temperature 和 max\_tokens，跑通官方 Quick Start 即可。应用分为三种形态：Prompt 是模型回答、人决策；Workflow 是固定流程，模型只是节点；Agent 则自主规划、动态调工具、跨轮管状态，三者失控风险完全不同。AI Coding 工具能快速生成样板代码和原型，但代码审查、测试和架构决策仍依赖人。AI 输出必须验证，常见问题包括事实编造、假引用、推理漂移、越权操作和工具误用，需要用 guardrails、tracing 和人工介入防范。Agent 的核心组件涵盖状态管理、长期记忆、MCP、Skills、Tool Calling、Tracing、Guardrails、Handoff 和错误恢复。只有当目标开放、步骤无法预设、需多工具协作且中间结果决定策略时才需要 Agent；一次性问答用 Prompt，固定流程用脚本，高合规用人工审核，确定性数据直接查库，复杂度越高越要避免过度 agent 化
<!-- DAILY_CHECKIN_2026-05-19_END -->
<!-- Content_END -->
