---
timezone: UTC+8
---

# huochewang-9331

**GitHub ID:** huochewang-9331

**Telegram:** @train

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->
今天虽然没有长时间做项目，但还是花了不少时间重新整理自己的 AI 工作流。

最近越来越能感觉到：

AI 真正厉害的地方， 不是“替代人”， 而是：

把很多重复、机械、低价值的步骤压缩掉。

今天主要在思考：

哪些事情值得自动化， 哪些事情其实手动更高效。

比如：

全自动浏览器控制虽然很酷

但稳定性并不一定高

反而： “AI生成 + 人工确认” 这种半自动模式， 目前更适合个人开发者。

另外也重新整理了：

AIOS 目录结构

作业流水线

内容生成流程

Agent 执行规则

越来越觉得：

未来最重要的能力， 可能不是单纯会写代码， 而是：

能不能设计出一套稳定的人机协作系统。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->

今天继续折腾 AI Agent 工作流。

原本以为：

“让 AI 自动完成任务”

只是写几个 prompt。

结果真正开始做之后才发现：

真正难的不是模型，

而是：

\- 状态管理

\- 环境稳定

\- 失败恢复

\- Workflow 设计

今天主要在调试：

WSL、CDP、Vision、Browser Agent 之间的协作。

过程中又一次遇到了 terminal 卡死和无限等待的问题。

但也慢慢意识到：

现在最适合我的路线，

不是追求“100% 全自动”，

而是：

AI 负责高重复劳动，

人负责关键确认。

另外还开始尝试搭建 Python 作业流水线：

识别题目 → 写代码 → 运行 → 截图 → 自动生成 Word。

越来越能感觉到：

未来真正重要的能力，

可能不是“会不会写代码”，

而是：

“能不能把 AI 组织成生产系统”。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->


今天完成了 AI 共学打卡系统的自动化流程调试。

主要进展：

1\. 学习并理解了 GitHub 仓库、项目、文件上传与 Vercel 部署的基础逻辑

2\. 成功创建并上传项目仓库，并完成网页部署

3\. 调试了 Edge + PowerShell 自动化方案，理解了 WSL、CDP 与浏览器控制之间的关系

4\. 发现当前问题主要出现在 WSL 直连 Edge CDP 不稳定，因此后续决定改用 Windows PowerShell 视觉执行流

5\. 明确了“AI 执行 + 人类监督 + 失败恢复”的协作模式

今天最大的收获：

以前我对代码、环境、部署几乎没有概念，但今天开始真正理解：

“AI 不是替代人，而是放大人的执行力。”

下一阶段目标：

继续完善自动化打卡系统，并尝试接入实时数据监控与 AI 决策流。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->



今天主要完成了：

\- AI Agent 与 Edge CDP 的连接

\- 页面按钮识别与稳定点击

\- 打卡编辑器检测逻辑

\- 页面状态等待机制

遇到的问题：

\- 坐标漂移导致按钮点击失败

\- 页面加载完成但按钮未正确识别

\- 自动工程化导致任务跑偏

解决方案：

\- 每次点击前重新截图定位

\- 固定执行路径

\- 禁止自动重构

\- 先观察再操作
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->




\# Web3 School - 学习日志

\## 2026-05-19 Hermes Agent 配置与打卡流程探索

\### 📖 今日学习总结

今天主要是在配置 Hermes Agent 的浏览器自动化和图片识别能力，目标是完成 Web3 School 的每日打卡任务。

整个-试错-调整」的循环，尝试了 headless Chrome、Windows Edge CDP、PowerShell WebSocket、Node.js CDP、端口转发等各种方案，最终用 Node.js 直连 Windows Edge CDP 成功操控浏览器。

关键教训：\*\*能看图就不要解析OM，能点坐标就不要研究底层协议。\*\*

\### ✅ 完成事项

\- 配置了 agent-browser + Chrome 浏览器自动化工具链

\- 搭建了 Windows Edge CDP 通信通道

\- 完成了打卡流程（导航 → 找入口 → 打开编辑器 → 写入 310 字）

\- 每一盲目提交

\### 🔧 遇到的问题

\- WSL ↔ Windows 网络不通（CDP 只绑 127.0.0.1）

\- PowerShell WebSocket 不稳定

\- Windows 无 Python 环境

\- Edge CDP 地址绑定参数无效

\- 编辑器定位困难（Mantptap 复杂 DOM）

\### ✅ 已安装/配置的工具

\- \*\*agent-browser\*\* — 浏览器自动化 CLI，支持截图、点击、填写

\- \*\*Google Chrome\*\*（WSL 内）— \`/usr/bin/google-chrome-stable\`，v148

\- \*\*s\*\*（Windows）— v24.14.1，用于 CDP 通信

\- \*\*Edge CDP\*\* — Windows Edge 远程调试端口 9222

\- \*\*Hermes Agent\*\* — AI 助手框架，工具调用能力

\### 🗺️ 下一步计划

\- \[ \] 完成打卡的「提交」操作 把流程固化为可重复脚本，以后自动打卡

\- \[ \] 持续填充学习笔记

\- \[
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->






_日期：_\* 2026年5月18日（星期一）

## 安装记录

今天安装了 **Hermes Agent**，由 Nous Research 开发的 AI 助手框架。

### 基本信息

-   **项目：** Hermes Agent（hermes-agent）
    
-   **位置：** `~/.hermes/hermes-agent/`
    
-   **运行环境：** WSL（Windows Subsystem for Linux）
    
-   **当前模型：** deepseek-v4-flash
    
-   **提供商：** deepseek
    
-   **连接平台：** 本地 + 微信（Weixin）
    

### 我的名字

-   火车王（用户）→ 火车头（Hermes Agent）
    

### 备注

> 车已开动！🚂
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
