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
