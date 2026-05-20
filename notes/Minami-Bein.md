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
# 🏷️ Day12｜Chrome启动翻车急救实录：Sandbox这货到底是个啥？

## 💡 今日硬核充能 · 知识卡片

* **沙盒（Sandbox）** ｜ 📌 一句话大白话翻译：就像给浏览器找个"隔离单间"，防止它搞破坏殃及整个系统。（就好比你让熊孩子在一个铺满泡沫垫的房间里玩，就算拆家也拆不坏地板）

* **Zygote进程** ｜ 📌 一句话大白话翻译：Chrome的"超级克隆母体"，启动时先把这个孵化出来，后面每个Tab都是从它复制出来的分身。（想象成一个生孩子的机器人，每个新页面都是克隆出来的娃）

* **DevTools协议** ｜ 📌 一句话大白话翻译：浏览器和调试工具之间的"暗号本"，帮你远程操控浏览器做自动化测试。

---

## 🗺️ 一图流人肉拆解 · 丝滑流转路径

* 🟢 **第一步｜搞事情**：用户点击启动Chrome，想要打开浏览器

* 🟡 **第二步｜过安检**：系统启动Zygote进程，准备开启沙盒模式保护

* 🟠 **第三步｜盖章确认**：Boom💥 直接炸了——Linux内核说"你这沙盒我不认"，系统权限不够直接拒绝服务

* 🔴 **最终状态**：浏览器进程原地去世，DevTools URL压根没生成出来，自动化脚本（比如Selenium/Playwright）全部瘫痪

---

## ✍️ 搞钱/搞事新灵感 · 深度输出

### 📄 正在憋的大招/爆款草稿

* **暂定 Title**：《程序员深夜崩溃实录：为什么我的AI爬虫总在"Chrome刚睁眼就挂了"？》

* **核心内容剧透**：
  * **痛点**：以前大家都在卷"多线程爬虫"、"异步请求"，结果AI Agent跑Selenium时每次都栽在Chrome启动这关，错误信息看得人一脸懵
  * **解法**：其实只要搞懂Sandbox的底层逻辑，加一行`--no-sandbox`参数，或者给容器配置`--cap-add=SYS_ADMIN`，你的AI自动化脚本就能原地复活！

---

## 🛠️ 避坑指南 · Handbook 纠错本

* ⚠️ **吐槽/优化点**：Chrome报错信息写的太装了！什么"zygote_host_impl_linux.cc:128"，普通程序员看到这串字符直接大脑宕机，殊不知人家就想知道"这玩意儿咋启动失败了啊"

* 🔄 **我的更正版**：下次遇到这个，直接记住这个万能公式——**Docker/VM跑Chrome加 `--no-sandbox`**。具体命令：`chrome_options.add_argument('--no-sandbox')`，已加入我的个人知识库，下次翻车直接抄！

#笔记灵感 #搞钱思路 #独立开发 #AI设计 #干货分享 #程序员的日常
<!-- DAILY_CHECKIN_2026-05-21_END -->
<!-- Content_END -->
