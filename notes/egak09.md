---
timezone: UTC+8
---

# Alley

**GitHub ID:** egak09

**Telegram:** @parad0614

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->
[**https://github.com/egak09/hermes-skills/blob/master/AI-Web3-School/daily-notes/2026-05-25.md**](https://github.com/egak09/hermes-skills/blob/master/AI-Web3-School/daily-notes/2026-05-25.md)  
  
今天的学习笔记主要包括6个板块：

**1.市场画像**

• 内容: 美伊协议过山车、加息概率 67%、恐慌指数 25、HYPE $63 ATH

**2.技术学习**

• 内容: TG 聚合频道原理 — Bot API vs MTProto、去重策略、对 Hermes 的启示

**3.AI×Web3**

• 内容: Keyrock 报告（1.76 亿笔 Agent 交易）、[waifu.fun](http://waifu.fun)、MoonPay in ChatGPT

**4.深度思考**

• 内容: 三条线交汇 — Vitalik EF 改革 × AI Agent 经济 × 自动化悖论

**5.行动产出**

• 内容: 今日完成的 4 项产出清单

**6.待探索**

• 内容: 4 个后续深究方向
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->

**日期**：2026-05-23  
**标签**：#hermes #cron #windows #disk-cleanup

* * *

## **一、Cron Job 静默失败排查**

### **现象**

每日加密简报 cron（12:00 HKT）调度器显示 `status: ok`，但 Telegram 收不到推送，session 数据库也无记录。

### **排查路径**

1.  `cronjob list` → 确认 job 触发时间、状态均为正常
    
2.  `session_search` → 目标 session 不存在（不是没推送，是根本没生成）
    
3.  手动跑 `article_fetcher.py` → 输出 **56KB+** 完整 HTML 正文
    

### **根因**

脚本输出过于庞大（5篇重要文章+5篇原创+24h全部文章，每篇完整 HTML），注入 LLM 上下文后直接撑爆 token 上限 → Agent 崩溃 → 无 session → 无推送。

调度器层面只关心"脚本是否正常退出"，脚本确实正常退出 → `status: ok`。但 Agent 还没来得及生成回复就挂了。

### **修复**

```
# article_fetcher.py 改动三处：
# 1. 去掉 content 字段，只保留 title/description/link/time
# 2. 文章数：5+5+50 → 3+3+10
# 3. 新增 strip_articles() 递归清洗函数

def strip_articles(data):
    if isinstance(data, dict) and "data" in data:
        data["data"] = [strip_articles(item) for item in data["data"]]
        return data
    if isinstance(data, dict):
        return {k: v for k, v in data.items() if k not in ("content", "is_original")}
    return data
```

> 效果：56KB → 6.5KB（压缩 88%）

### **教训**

-   Cron 脚本输出要精打细算——每多 1KB 都是和 token 预算抢空间
    
-   `last_status: ok` ≠ "成功推送"。脚本 exit code 和 Agent 输出是两个独立环节
    
-   脚本层面做数据瘦身，比靠 LLM prompt 控制更可靠
    

* * *

## **二、Windows C盘深度瘦身**

### **工具链**

-   `windows-disk-cleanup` skill：scan.py + clean.py
    
-   核心思路：先扫描 → 排名 → 确认 → 清理，不留后患
    

### **清理节奏（四轮）**

| 轮次 | 目标 | 大小 | 备注 |
| --- | --- | --- | --- |
| 1 | Temp + Chrome/Edge缓存 + 缩略图 | 1.9 GB | 安全项，一键清 |
| 2 | Lark（飞书国际版） | ~3.5 GB | 和 Feishu 重复安装，双飞书吃了 6.7G |
| 3 | WSL Ubuntu | ~1.5 GB | Hermes 不用 WSL（backend: local） |
| 4 | Minecraft + Isaac | ~6.5 GB | 游戏在 AppData 里，不在 Steam 目录 |
| 🔒 | 8项 Program Files 顽固 | ~3.4 GB | 需管理员权限 |

### **收益**

```
132.2 GB → 114.0 GB  （91% → 78.4%）
释放 18.2 GB，剩余 31.4 GB
```

### **技巧总结**

1.  **Python 扫描比 bash** `du` **快得多**——Windows 上 `du -sh` 对大目录直接超时
    
2.  **AppData 是隐形大户**：Local 9.5G + Roaming 6G = 15.5G
    
3.  **双飞书（Lark + Feishu）** 是最蠢的空间浪费——同款软件两个版本吃 6.7G
    
4.  **Program Files 清理需要 admin**：`rm -rf` → Permission denied，PowerShell `Remove-Item` 一样
    
5.  **进程锁文件**：Lark 后台进程锁着 400MB 数据库，需要先 `taskkill` 再 `rm`
    

### **常见垃圾位置速查**

-   `%LOCALAPPDATA%\Temp` — 2GB 级
    
-   `%APPDATA%\.minecraft` — 6GB 级
    
-   `%LOCALAPPDATA%\Lark` / `Feishu` — 3GB 级
    
-   `%LOCALAPPDATA%\wsl` — 1.5GB 级
    
-   `C:\Program Files\NVIDIA Corporation` — 驱动残留
    

* * *

## **三、今日一句话**

> Cron 脚本的输出不是给人类看的，是给 LLM 吃的。每多 1KB 都是在赌 token 天花板不会砸下来。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->


将目前为止关于agent的所有工作汇合成了笔记，并上传到了GitHub

## **🗺️ 课程路线图**

```
01 AI Agents     ─→  02 Crypto Trading  ─→  03 Web3 Data
       │                      │                      │
       └──────────────────────┼──────────────────────┘
                              │
              04 DevOps & Infra  ←→  05 Systems Thinking
                              │
                        06 Esoteric × Trading
```

## **📚 六大模块**

| # | 模块 | 核心内容 | 关键词 |
| --- | --- | --- | --- |
| 01 | AI Agents | Hermes Agent 框架深度解析 | Skills, Cron, Delegation, Prompts |
| 02 | Crypto Trading | 妖币合约策略 v2.2 + 风控 | K线形态, 凯利公式, OI/Vol, 回测 |
| 03 | Web3 Data | BlockBeats API · 链上数据 · 内容自动化 | 情绪指标, 宏观, 热点狙击 |
| 04 | DevOps & Infra | Windows 下 AI Agent 运维实战 | Junction, Proxy, Python环境分裂 |
| 05 | Systems Thinking | 工程控制论 × AI Agent 设计模式 | 闭环验证, 冗余, 意图重建 |
| 06 | Esoteric × Trading | 八字+紫微+星盘三合一交易辅助 | 己土日主, 周期能量 |

## **🛠️ 技术栈**

-   **Agent**: Hermes Agent (Nous Research) · DeepSeek V4
    
-   **Trading**: Binance Futures · CCXT · Kelly Formula
    
-   **Data**: BlockBeats API · On-chain Netflow
    
-   **Infra**: Windows 10 · Git · Telegram Gateway
    
-   **Systems**: 钱学森工程控制论 · 闭环反馈 · 冗余验证
    

## **📖 使用方式**

每篇笔记都是 **自我完足的独立文章**，可以按任意顺序阅读。推荐按模块编号顺序，因为它们之间有递进关系。

* * *

# **01 · AI Agents — 自主智能体框架**

> 从零到一构建和运作 AI Agent 系统的完整实操笔记

* * *

## **📋 本模块文章**

| # | 标题 | 核心内容 |
| --- | --- | --- |
| 1 | Hermes Agent 核心架构 | Agent Loop、Tool Calling、Context Management |
| 2 | Skills 系统：Agent 的过程记忆 | SKILL.md 格式、自动加载、curator 生命周期 |
| 3 | Cron 自动化 | 定时任务、脚本链、内容引擎 |
| 4 | 多 Agent 协作 | delegate_task、子进程、tmux 编排 |

## **🎯 学完你能**

-   理解 AI Agent 的核心运行循环（LLM → Tool Call → Result → loop）
    
-   用 Skills 系统让 Agent 积累领域知识
    
-   搭建定时自动化管线（数据采集 → LLM 加工 → 推送）
    
-   并行多个 Agent 协同完成复杂任务
    

* * *

### **我的真实环境**

-   **Agent 框架**: Hermes Agent (Nous Research 开源)
    
-   **模型**: DeepSeek V4 Pro
    
-   **平台**: Telegram Gateway（实时响应 + cron 推送）
    
-   **OS**: Windows 10 + Git Bash (MSYS2)
    
-   **工作目录**: `D:\Hermes file\`
    

> 所有代码和命令均在此环境中验证通过 ✅

_最后更新: 2026-05-22_  
_作者: Paradigme × Hermes_

# **02 · Crypto Trading — 量化交易系统**

> 从策略研究到实盘执行的全栈量化交易笔记

* * *

## **📋 本模块文章**

| # | 标题 | 核心内容 |
| --- | --- | --- |
| 1 | 妖币策略 v2.2 完整解析 | 4种K线形态 + OI/Vol组合 + 1K线确认 |
| 2 | 凯利公式仓位管理 | Half-Kelly、风险预算、胜率约束 |
| 3 | 风控体系 | 日亏上限、冷却期、持仓限制 |

## **🎯 学完你能**

-   识别妖币（极小市值 + 高波动）的入场信号
    
-   用 K 线确认机制过滤假信号
    
-   用凯利公式科学计算仓位
    
-   搭建完整的风控体系
    

* * *

### **环境**

-   **交易所**: Binance Futures（合约）
    
-   **库**: CCXT · NumPy · Pandas · TA-Lib
    
-   **代理**: 127.0.0.1:1081（SOCKS5）
    
-   **代理出口 IP**: 172.235.214.193（已加白名单）
    
-   **回测**: 8妖币 × 30天 × 5分钟 K线
    

# **03 · Web3 Data — 数据基础设施**

> 加密市场的数据获取、分析和自动化推送系统

* * *

## **📋 本模块文章**

| # | 标题 | 核心内容 |
| --- | --- | --- |
| 1 | BlockBeats API 完全指南 | 1500+数据源 · 7大场景 · 端点速查 |
| 2 | 内容自动化流水线 | 数据采集 → LLM加工 → 推送 |

## **🎯 学完你能**

-   用 BlockBeats API 获取市场情绪、链上资金流、宏观指标
    
-   搭建从数据到内容的自动化流水线
    
-   设计适合自己的加密数据仪表盘
    

* * *

### **数据栈**

-   **API**: BlockBeats Pro（1500+ 信息源）
    
-   **链上**: Solana / Base / Ethereum Netflow
    
-   **宏观**: M2 · DXY · 美债 · ETF 资金流
    
-   **衍生品**: 合约 OI · Bitfinex 多头 · 交易所排名
    

# **04 · DevOps & Infra — 运维实战**

> Windows 环境下 AI Agent 的运维操作笔记 磁盘迁移 · 代理配置 · Python 环境

* * *

## **📋 本模块文章**

| # | 标题 | 核心内容 |
| --- | --- | --- |
| 1 | Windows 下 Hermes 运维 | Junction 磁盘迁移 · 目录结构 · Gateway 恢复 |
| 2 | Python 环境与代理 | 双 Python 问题 · 代理传透 · 依赖管理 |

* * *

### **我的环境**

-   **OS**: Windows 10
    
-   **Shell**: Git Bash (MSYS2) — 不是 PowerShell
    
-   **Python**: CPython 3.14（用户目录）vs MSYS2 Python（无 pip）
    
-   **代理**: SOCKS5/HTTP 127.0.0.1:1081
    
-   **工作磁盘**: D:\\Hermes file\\（主存储，C 盘减压）
    

# **05 · Systems Thinking — 工程控制论 × AI Agent**

> 钱学森《工程控制论》的核心概念，应用到 AI Agent 设计

* * *

## **📋 本模块文章**

| # | 标题 | 灵感来源 |
| --- | --- | --- |
| 1 | 闭环验证 | Ch7 反馈控制系统 |
| 2 | 冗余验证 + 意图重建 + 上下文保鲜 | Ch17 可靠性 · Ch11+14 滤波 · Ch9 采样 |

* * *

## **核心理念**

AI Agent 不是聊天机器人——它是一个**控制系统**：

-   输入: 用户指令
    
-   控制器: LLM + Tool Calling
    
-   执行器: 工具（终端/文件/网络）
    
-   反馈: 工具返回结果
    
-   **闭环验证**: 对比输出和预期，修正偏差
    

# **06 · Esoteric × Trading — 玄学决策辅助系统**

> 八字 + 紫微斗数 + 西方星盘 三合一引擎的工程实现 不暴露任何个人命盘数据，只展示原理与架构

* * *

## **📋 本模块文章**

| # | 标题 | 核心内容 |
| --- | --- | --- |
| 1 | 三系统推演引擎 | 算法原理 · 架构设计 · cron 自动化 |

* * *

## **设计原则**

-   **个人数据本地化**: 出生数据存 `birth_data.json`（gitignore），永不上传 GitHub
    
-   **纯 Python 实现**: 八字/紫微用标准库，星盘可选 skyfield
    
-   **解耦设计**: 三个系统独立计算 → `daily_synthesis.py` 聚合输出
    
-   **Cron 自动化**: 每天 10:00 HKT 生成结构化行动指南
    

* * *

## **免责声明**

玄学是**决策辅助工具**，不是预测。最终决策永远在自己。 系统定位为"提供多维度视角"，类似多因子模型中的非量化维度。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->




**✅ 已完成事项**  
• 事项: **BlockBeats API 验证**  
• 详情: 确认 API Key 有效，18 个数据端点全部就绪，成功拉取 AI 赛道快讯 15 条并完成结构化输出

• 事项: **内容策略设计**  
• 详情: 基于你的 Twitter 人设（反理中客/情绪叙事派），确定「BlockBeats 采集 → 然然过滤推送 → 你手动润色发推」的三段式内容流水线；自动发推环节砍掉，保留你的人味

• 事项: **数据采集脚本开发**  
• 详情: 编写 `daily_briefing.py`（7 端点 + 情绪/AI/ETF/链上/稳定币）和 `hotspot_sniper.py`（3 链 Top10 净流入），部署至 `~/.hermes/scripts/`，C 盘占用 < 4KB

• 事项: **每日加密简报上线**  
• 详情: Cron job `855b1caf6635`，每天 12:00 推送：市场情绪 + 重要快讯 + ETF + 链上 + AI + Solana 热点 + 交易灵感，明日首跑

• 事项: **链上热点狙击上线**  
• 详情: Cron job `910146663cb8`，每 4 小时推送：Solana/Base/Ethereum 三链净流入 Top3，今日 16:00 首跑

**📊 当前定时任务总览**

**10:00 每日**  
• 时间: 10:00 每日  
• 任务: 🔮 玄学日报  
• 状态: ✅ 运行中

**12:00 每日**  
• 时间: 12:00 每日  
• 任务: 📊 加密市场简报  
• 状态: 🆕 明日首跑

**每 4 小时**  
• 时间: 每 4 小时  
• 任务: 🔍 链上热点狙击  
• 状态: 🆕 今日 16:00 首跑

**🎯 核心产出**

> **BlockBeats 全面接入，形成「数据采集 → 智能过滤 → 定时推送 → 手动润色发推」的内容生产流水线，三条 cron 共同构成 推特 的每日信息基础设施**
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->





今天从零到一：把 Telegram 接上了（踩了 SOCKS5→HTTP 代理的坑），装好了 gh CLI 并完成 GitHub 认证，给 Hermes 做了 C 盘大瘦身（sessions/caches/skills 全迁 D 盘），存储器从内置升级到 scope-recall（SQLite + LanceDB 双层架构），构建了三套完整的交易基础设施——币安交易模块（含凯利仓位）、妖币合约策略 v2.2（68 分 + 1K 线确认）并完成 8 妖币回测验证、实盘扫描 16 币（市场安静无信号属正常），还把玄学三合一每日推送设成了 cron。

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/egak09/images/2026-05-20-1779291544684-image.png)
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->






今天主要讲进行了hermes的部署，现在还在学习怎么使用和自己编译skills
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->







**自我评估：**  
**对于ai的理解：**  
对LLM、Prompt、Workflow、Agent、Tool Use、AI Coding 概念都有理解，但实践不足  
**关于Web3基础：**  
深度使用钱包，对于签名、交易、Gas、合约、测试网和区块浏览器如何构成一条链上操作链有较为深刻的了解，有实际使用或查询经验  
**本周最优策略是：**  
快速复习概念 → 大量补 AI 实践 → 重点完成高质量的 AI×Web3 最小交叉实验。

**当前短板：**

-   AI 实践经验不足，尤其是 Agent + Tool Use + Workflow 的真实落地。
    
-   缺乏把 AI 输出直接转化为链上操作的完整闭环经验。
    

**Week 1 个人目标调整：**

-   AI 部分：至少完成 2-3 个高质量实践（而非 1 个）
    
-   Web3 部分：快速验证，不需要从零学
    
-   交叉实验：做 1-2 个有一定复杂度的实验，体现「AI 决策 + 人工确认 + 链上执行」
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
