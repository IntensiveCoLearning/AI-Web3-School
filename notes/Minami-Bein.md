---
timezone: UTC+8
---

# Bein

**GitHub ID:** Minami-Bein

**Telegram:** 

## Self-introduction

I am‘s Bein.

## Notes

<!-- Content_START -->
# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->
今天深度的学会了 **Hermes 从 0 到 1** 完成构建
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->

Mythos
<!-- DAILY_CHECKIN_2026-05-18_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->
第三天的打卡
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
# 🏷️ Day X ｜ 标题：用大白话搞懂 Chrome 在 Linux 里「耍脾气」的底层逻辑

## 💡 今日知识卡片
拒绝死记硬背，用一句话和生活场景把底层逻辑说明白。

沙盒（Sandbox）
- 💡 大白话解释：Chrome 是个熊孩子，系统怕它闯祸，就把它关进一个带围栏的沙盒里玩。问题是某些 Linux 系统把这个围栏拆了，Chrome 觉得不安全，直接撂挑子不干了。
- 🎯 生活类比：就像幼儿园不让孩子出教室玩，但教室门又锁着，孩子只能原地哭。

无特权用户命名空间（Unprivileged User Namespaces）
- 💡 大白话解释：Linux 系统为了安全，关闭了「普通用户创建独立小世界」的功能。但 Chrome 的沙盒需要这个能力才能正常启动。
- 🎯 生活类比：就像物业规定每家只能在自己房间里活动，不许去公共区域溜达，结果快递员连小区门都进不来了。

## 🗺️ 丝滑流转路径
把复杂的系统运行和数据流转，拆成极简的流水线步骤。

- 第一步（触发）：Selenium/WebDriver 兴冲冲地召唤 Chrome 浏览器：「兄弟，起来干活了！」
- 第二步（验证）：Chrome 检查沙盒环境，发现 Ubuntu 23.10+ 的安全限制让它无法正常启动，输出 FATAL 错误：「没有可用的沙盒，我罢工！」
- 第三步（确认）：Chrome 进程直接退出，留下 exit code: unknown 和一堆让人头秃的错误日志
- 最终状态：自动化测试卡在半路，爬虫脚本白跑一趟，DevTools 完全连不上

## ✍️ 搞事新灵感 · 深度输出
知识不落地等于零。结合时下最火的 AI Agent 或自动化视角，输出极客思路。

正在憋的大招草稿：
- 暂定标题：《Agent 帮你自动化办公，结果卡在「沙盒」上？3分钟搞定 Chrome 在容器里的启动难题》
- 核心剧透：以前大家都在卷 AI Agent 技能树，结果部署到服务器上一跑就崩？其实只要在启动 Chrome 时加一行 --no-sandbox 参数，就能让 Agent 稳定运行在 Docker 或云服务器上，效率直接翻倍。

## 🛠️ 避坑指南 · 知识库纠错
记录今天学习时踩的坑，或者官方文档写得不够说人话的地方。

- 优化点：Chrome 报错日志里写的 zygote_host_impl_linux.cc 根本没人看得懂，这是给 Chromium 源码开发者看的，不是给使用者看的。
- 我的更正版：下次遇到 No usable sandbox! 直接执行两件事：1) 浏览器选项里加 '--no-sandbox'；2) 如果是 Docker 环境，确保容器以 --privileged 或添加 --cap-add=SYS_ADMIN 运行。已加入个人知识库。

#笔记灵感 #搞钱思路 #独立开发 #AI设计 #干货分享 #程序员的日常
<!-- DAILY_CHECKIN_2026-05-21_END -->
<!-- Content_END -->
