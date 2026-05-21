---
timezone: UTC+8
---

# Zz

**GitHub ID:** zaizhengzai697-prog

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
理清Prompt、Workflow、Agent的边界：Prompt由人决策，仅单次问答；Workflow是固定预设流程，模型为流程节点；Agent可自主规划、动态调用工具、管理状态，三者失控风险与可调试性差异明显。

了解AI Coding工具价值与局限：Claude Code、Codex CLI、Cursor可快速生成样板代码、解析陌生库、搭建原型，但代码审查、测试设计、架构决策无法被替代。

明确AI输出必须验证的原因：存在事实编造、引用造假、推理漂移、执行越权问题，关键信息需外部核实、分段校验。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

今日学习了LLM大模型基础核心知识点，梳理总结如下：

1. LLM基本工作原理

大语言模型基于上下文做概率生成，根据已有文本预测下一个最合理的token序列。优势是擅长语言理解、代码生成、逻辑推理；短板在于难以精准记忆事实、完成确定性计算，也很难稳定保持跨对话的状态。

​

2. 四大控制层面作用

\- 上下文窗口：相当于模型的“工作内存”，决定模型可读取的信息范围

​

\- 系统指令：设定模型身份、输出语气与行为边界

​

\- 提示词：明确传递当前需要完成的任务意图

​

\- 工具调用：让模型从单纯输出文字，升级为可执行实际操作

3. LLM API调用实操要点

通过MaaS模式无需自备GPU，仅用API Key按token计费即可调用主流大模型。核心入参包含 model 、 messages 、 temperature 、 max\_tokens ；可从OpenAI、Anthropic、GLM官方快速入门文档入手，跑通首个接口请求。
<!-- DAILY_CHECKIN_2026-05-20_END -->
<!-- Content_END -->
