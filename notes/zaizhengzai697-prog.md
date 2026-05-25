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
# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->
今天学习打卡：我研读了Hermes Agent Docs，深入理解了agent、tool calling、skills、记忆和长期执行的核心概念；同时通过Zread.ai解读OpenClaw/Hermes相关内容，梳理并理解了agent进入执行层后带来的架构变化。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->

今天我系统学习了AI Agents相关的内容，通过Microsoft《AI Agents for Beginners》建立了对Agent的整体直觉，完成了从概念到代码的入门实践，接着学习OpenAI Agents SDK的介绍，理解了Agent框架如何组织模型、工具与执行流程，最后通过LangGraph Overview掌握了Agent的组织方式，完整走完了从理论认知到框架理解再到流程编排的学习链路，对AI智能体的开发逻辑有了更清晰的认识。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->


今天完成了AI开发相关的入门学习，内容覆盖官方API基础课程、Z.ai的GLM MaaS API开发者文档（包括OpenAI兼容接口的快速上手与5分钟跑通第一个请求）、Z.ai Coding Plan解锁GLM全系列模型调用、Claude Code 101的AI编程工具入门，以及AI Agent基础概念的视频课程。通过这些内容，我不仅掌握了大模型API调用的基础流程与OpenAI兼容接口的优势，还了解了AI编程工具的高效用法，初步建立了对AI Agent核心要素的认知，为后续的AI开发实践打下了扎实基础。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->



今天系统开启大语言模型入门学习，通过视频搭建起对LLM的基础认知与核心直觉，借助Hugging Face课程深入理解大模型的底层工作原理，同时上手实操练习LLM基础API调用，跟着官方课程完整学习Claude API的使用方法。从理论概念到实操落地，逐步掌握大模型基础逻辑与接口调用技能，夯实AI开发入门基础
<!-- DAILY_CHECKIN_2026-05-22_END -->

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
