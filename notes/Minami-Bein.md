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
# 🏷️ 第3天｜Chrome 启动"离家出走"？一行代码让它乖乖就范！

## 💡 今日硬核充能 · 知识卡片

* **沙箱 (Sandbox)** ｜ 📌 大白话翻译：（就像给 Chrome 找个专属"隔离屋"，防止它搞破坏波及系统核心）
* **Zygote 进程** ｜ 📌 大白话翻译：（Chrome 的"备孕模式"，预先准备好一堆资源，等网页一加载就能秒开）
* **cpufreq / scaling_cur_freq** ｜ 📌 大白话翻译：（CPU 的"调速器"，记录当前跑多快，Chrome 跑崩溃了当然读不到）
* **DevToolsActivePort** ｜ 📌 大白话翻译：（Selenium 的"门禁卡"，没有它 Selenium 根本找不到 Chrome 的控制台在哪）

---

## 🗺️ 一图流人肉拆解 · 丝滑流转路径

* 🟢 **第一步｜搞事情**：Selenium 信心满满地发起了 "启动 Chrome" 请求
* 🟡 **第二步｜过安检**：Chrome 启动时检查"沙箱权限" → 发现自己被 AppArmor 禁止玩沙箱 → 心态爆炸直接退出
* 🟠 **第三步｜盖章确认**：系统报错 "No usable sandbox!" + 提示用 --no-sandbox
* 🔴 **最终状态**：Chrome 进程原地蒸发，Selenium 拿着空号一脸懵

---

## ✍️ 搞钱/搞事新灵感 · 深度输出

### 📄 正在憋的大招/爆款草稿：

* **暂定 Title**：《为什么你的爬虫总在 Docker 里翻车？80% 的人死在这一步》
* **核心内容剧透**：
  * **痛点**：以前大家都在卷"怎么写爬虫逻辑"，结果在服务器上一跑 Chrome 直接蓝屏报错，代码再优美也是白搭！
  * **解法**：其实只要在 ChromeOptions 里加一句 `--no-sandbox --disable-dev-shm-usage`，就能让 Selenium 在 Docker 里闭眼起飞！

---

## 🛠️ 避坑指南 · Handbook 纠错本

* ⚠️ **吐槽/优化点**：Chrome 官方报错信息写了一堆 Linux 内核知识，看得人头皮发麻，但就是不直接告诉你在 Docker 里怎么跑！
* 🔄 **我的更正版**：下次遇到 "No usable sandbox"，直接上这个配置，已加入我的个人知识库：

```python
options = webdriver.ChromeOptions()
options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')
options.add_argument('--headless')
driver = webdriver.Chrome(options=options)
```

或者一行流：

```bash
chrome --no-sandbox
```

#笔记灵感 #搞钱思路 #独立开发 #AI设计 #干货分享 #程序员的日常 #Selenium #Docker #爬虫避坑
<!-- DAILY_CHECKIN_2026-05-21_END -->
<!-- Content_END -->
