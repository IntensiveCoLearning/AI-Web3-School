# Week 1 前置准备：Proof-of-Work 提交测试

> 提交人：2758star | 日期：2026-05-18

## 我理解的 WCB 提交流程

1. **在哪提交**：通过 WCB API（`tasks.submitEvidence`）或 WCB 网页端任务面板提交
2. **Proof 类型**：GitHub 公开链接（repo / 文件 / PR）、X 帖子链接、公开笔记、截图
3. **Proof 必须指向公开可访问内容**：我的 proof 统一用 `2758star/AI-Web3-School` 公开 fork 的文件链接
4. **审核者需要看到什么**：对照任务的 proofPrompt 逐项检查——截图、文字说明、链接等都要有
5. **不能提交的**：私钥、助记词、API Key、token、.env 文件、密码、手机号

## 当前提交方式

我用 Claude Code 作为学习代理，通过 WCB API 提交任务 proof。每个 proof URL 指向 `https://github.com/2758star/AI-Web3-School/blob/main/submissions/` 下的对应文档。

提交前会确认：
- proof 文件已 push 到公开 fork
- 对照任务 proofPrompt 逐项检查
- 不包含任何敏感信息
