---
timezone: UTC+8
---

# 林汐Sylvia

**GitHub ID:** RanX557

**Telegram:** @MCFLY771

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-08
<!-- DAILY_CHECKIN_2026-06-08_START -->
**Hermes Agent**：

-   ✅ BlockBeats MCP 修复后重新可用（gateway 重启 + config 修复）
    
-   ✅ 补生成 6月8日学习笔记（原22:00 cron因MCP不可达失败）
    
-   ✅ Odaily RSS 通道持续可用
    
-   待办：今晚22:00 cron继续自动运行
    

**数据源状态**：

-   BlockBeats MCP: ✅ 已恢复（18个工具全部在线）
    
-   Odaily REST API: ❌ DNS NXDOMAIN，不可用
    
-   Odaily RSS: ✅ 稳定可用（推荐首选）
<!-- DAILY_CHECKIN_2026-06-08_END -->

# 2026-06-07
<!-- DAILY_CHECKIN_2026-06-07_START -->

### **今日 Hermes Agent 任务**

-   **BlockBeats数据采集**：MCP server持续不可达（BLOCKBEATS\_API\_KEY环境变量问题），通过curl直接调REST API成功回退 ✅
    
-   **Odaily数据采集**：正常 ✅
    
-   双源验证机制持续运行，BlockBeats（curl fallback）+ Odaily 均正常响应
    
-   完成跨平台市场数据聚合（情绪指标、ETF、OI、稳定币、DXY、美债、链上净流入）
    

### **数据源状态**

| 数据源 | 状态 | 备注 |
| --- | --- | --- |
| BlockBeats MCP | ❌ 不可达 | MCP server unreachable（API key环境变量未传入MCP子进程），使用curl回退正常 |
| BlockBeats REST API | ✅ 正常 | curl + api-key header 工作良好 |
| Odaily REST API | ✅ 正常 | 无需API Key，公开可用 |
<!-- DAILY_CHECKIN_2026-06-07_END -->

# 2026-06-05
<!-- DAILY_CHECKIN_2026-06-05_START -->


### **今日协作记录**

-   完成了**三个模式协作框架**的确认：日常协作 / 哲学思辨 / 定时产出，无边界自由切换
    
-   更新了持久记忆（角色定位升级为「全天候思考伙伴」）
    
-   新增写作 workshop 模块（`07-writing-workshop/`）
    
-   新增 `paradigme-writing-style` skill（然然行文风格指南）
    

### **备忘**

-   🚨 **BlockBeats MCP 服务器已挂全天**，涉及：`get_sentiment_indicator`、`get_btc_etf_flow`、`get_contract_oi_data`、`get_daily_onchain_tx`、`get_stablecoin_marketcap`、`get_dxy_index`、`get_top10_netflow`、`get_us_treasury_yield`、`get_m2_supply`、`get_bitfinex_long_positions` 等所有 endpoint 均不可用。建议检查 MCP server 配置或重装后端服务
    
-   Odaily 上午 DNS 解析失败，晚上已恢复 —— 可能是 CDN/边缘节点临时问题
<!-- DAILY_CHECKIN_2026-06-05_END -->

# 2026-06-03
<!-- DAILY_CHECKIN_2026-06-03_START -->



今天的主要技术实践是**Hermes本地工具的维护优化**：

1.  **C盘空间清理**：通过Hermes自动化扫描C盘大文件和缓存目录，系统性地清理了临时文件、Windows更新缓存、Python/Node.js的包缓存等。方法论：
    
    -   用 `du` 或 `find` 定位大户目录
        
    -   Windows Temp、AppData/Local/Temp、pip cache、npm cache 是常见的沉默空间杀手
        
    -   不要手动删 System32 或 Program Files 里有用的东西
        
2.  **OCR扫描PDF**：处理了一份教育部关于AI教育案例征集的扫描件PDF。尝试了vision\_analyze（不支持PDF直接OCR）→ 读取PDF字节流（扫描件无文本层）→ 提示需要pymupdf/marker-pdf OCR流程。教训：扫描件PDF在Hermes里的处理链路还比较曲折，marker-pdf是比较成熟的方案但需要较重依赖。
<!-- DAILY_CHECKIN_2026-06-03_END -->

# 2026-06-02
<!-- DAILY_CHECKIN_2026-06-02_START -->




今天发现TG断连，要求重新连接。agent定位根因为GFW TLS SNI检测阻断api.telegram.org，修改了三处代码：

-   `gateway/platforms/telegram.py` — 移除proxy排除条件
    
-   `gateway/platforms/telegram_network.py` — fallback IP连接自定义SSL
    
-   `tools/send_message_tool.py` — standalone发送改用fallback transport Gateway重启成功，TG恢复在线。
<!-- DAILY_CHECKIN_2026-06-02_END -->

# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->





## **今日工作记录**

### **对话主题**

1.  **代理迁移（12:21）**：从XiGuaCore代理（127.0.0.1:7892）切换到UniClash（127.0.0.1:7993）。agent协助完成了.env配置更新、系统代理启用、API\_SERVER绑定修复、Telegram Gateway重连。所有服务恢复正常：telegram + api\_server + cron三线在线。
    
2.  **Cron Job 重构（12:35）**：
    
    -   ❌ 移除"链上热点狙击+巨鲸尾盘"（每8h）
        
    -   ✅ 加密简报升级：新增ODAILY双源交叉验证（BlockBeats + ODAILY重要文章/深度分析并行采集）
        
    -   ✅ 学习笔记升级：从5段扩展到7段结构，新增"今日工作记录"和"然然的思考与总结"
        
    -   创建了`odaily_article_fetcher.py`脚本并部署到`~/.hermes/scripts/`
        
3.  **加密简报手动触发（16:50）**：手动触发每日简报。agent以"一只思考的老鼠"风格生成了完整简报，覆盖Nvidia GTC事件、MLCC电容器投资逻辑、中本聪诉讼案、BTC波动率和ETF资金流等主题。Telegram推送成功。
    
4.  **学习笔记触发（23:04）**：触发今日学习笔记生成。agent采集了9维市场数据并通过session\_search回顾了全天对话。
    

### **今日决策**

-   精简cron体系：从4个job减到3个，移除未产生足够价值的链上热点扫描
    
-   确立双源验证框架：加密简报现在同时拉BlockBeats和ODAILY
    
-   学习笔记引入元认知层：agent开始对自己的表现进行复盘
    

### **agent完成的任务**

-   ✅ 代理全链路迁移（.env + 系统代理 + Gateway + Telegram）
    
-   ✅ Cron job批量更新（删除+更新配置+更新prompt）
    
-   ✅ 新脚本创建与部署（odaily\_article\_[fetcher.py](http://fetcher.py)）
    
-   ✅ 加密简报生成与Telegram推送
    
-   ✅ 学习笔记数据采集与生成
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->







# 今日学习：

### **AI Agent 多 Agent 编排：从单打独斗到协作系统**

Claude Opus 4.8 把「可信」做成卖点，核心手段之一是**强化多 Agent 编排中的自检机制**。这正好是我们在用的 Agent 系统（然然）的核心架构。

**一句话定义：** 多 Agent 编排是指一个「主 Agent」拆解任务、分配给多个「子 Agent」并行执行、汇总结果的工作模式，类比团队协作中的「经理 + 专员」。

**三种主流编排模式：**

```
模式 1: Orchestrator-Worker
┌─────────────┐
│  Orchestrator│ ← 拆任务、分派、汇总
└──┬──┬──┬────┘
   │  │  │
   ▼  ▼  ▼
  W1  W2  W3   ← 各自在隔离环境执行

模式 2: Chain-of-Agents
Agent A → Agent B → Agent C
（流水线，每个 Agent 处理一个环节）

模式 3: Debate/Consensus
Agent A ←→ Agent B
（多个 Agent 对同一问题给出答案，投票/辩论）
```

**然然的 delegate\_task 实现细节：**

-   子 Agent 有**隔离上下文**——不知道主对话历史，只收到 `context` 字段
    
-   子 Agent 有**受限工具集**（默认 leaf 模式，不能继续 delegate）
    
-   并发上限 3 个，通过 `tasks` 数组并行
    
-   子 Agent 的结果是**自报告**，不可信——需要主 Agent 验证（read\_file/stat 确认文件真的写了）
    

**关键认知：** 多 Agent 编排的难点不在于「怎么并行」，而在于 **「信任传递」**——子 Agent 说「已完成」不代表真的完成了。Claude Opus 4.8 的「自检」就是在解决这个问题：Agent 在交出结果前自己验证一遍。
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->








> 今日最核心的技术产出：Hermes 内容自动化三件套从概念到生产跑通。

### **三件套架构**

```
article_fetcher.py (12:00 HKT) ──→ 内容创作引擎
hotspot_sniper.py (16:00+20:00 HKT) ──→ 链上热点扫描
daily_note_collector.py (22:00 HKT) ──→ 每日学习笔记
```

### **关键经验**

-   **Script 路径约束**：cronjob 的 `script` 参数只接受 `~/.hermes/scripts/` 下的文件名。需要先用 `skill_manage action=write_file` 创建，再 `cp` 过去。
    
-   **Python 环境隔离**：cron 用系统 Python，不能用 MSYS2 ucrt64 的。`requests` 是唯一依赖。
    
-   **Proxy 硬编码**：所有脚本内含 `http://127.0.0.1:7892`，GFW 下的无奈但稳定的方案。
    
-   **Context overflow 陷阱**：`article_fetcher.py` 必须 strip HTML content，否则 56K+ chars 的 article body 会撑爆 LLM context 导致 cron 静默失败（status: ok 但没有输出）。
    
-   **Session search 做记忆**：`daily_note_collector` 用 `session_search` 回顾当天讨论，让笔记有"我今天想了什么"而不仅是"市场发生了什么"。
    

### **调试静默 cron 失败的标准流程**

1.  `cronjob action=list` → 查 `last_status` + `last_run_at`
    
2.  `session_search` with job ID → 如果没有 cron session，agent 可能 crash 了
    
3.  手动跑 script 看输出大小 → 如果 >20K chars 基本确定是 context overflow
    
4.  Strip 重字段（content → 只保留 title/description/link）
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->










今天早上实际操作了C盘瘦身——跑扫描脚本识别出User Temp 1.7GB、System Temp 1.2GB（含450MB的whesvc性能追踪）、Chrome缓存270MB等，[通过clean.py](http://通过clean.py)清理后释放了3.0 GB，C盘可用空间从18GB恢复到21GB（使用率从87.6%降到86%）。

几个有意思的点：

1.  **whesvc的性能追踪.etl文件**会悄无声息地吃掉几百MB，Windows的诊断服务在没有用户感知的情况下持续写入大文件
    
2.  **飞书7.69.8升级**后自动删除了旧版本目录，说明飞书的更新机制做了版本清理
    
3.  [**clean.py**](http://clean.py)**的partial errors**很正常——正在使用的进程会锁住部分temp文件，skipped是安全的
    

这件事本身不难，但让我想到一个meta的观察：**我们花了大量时间研究链上数据和市场叙事，但最基本的系统维护（磁盘空间、备份、自动化脚本的稳定性）反而是让整个AI Agent系统能持续运转的前提**。搞Web3的很容易掉进"去中心化的宏大叙事"里，忘了自己电脑C盘满了。
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->











[https://github.com/egak09/hermes-skills/blob/master/AI-Web3-School/daily-notes/2026-05-28.md](https://github.com/egak09/hermes-skills/blob/master/AI-Web3-School/daily-notes/2026-05-28.md)

今天的学习笔记已上传
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->












今天的主要技术实践是**Hermes本地工具的维护优化**：

1.  **C盘空间清理**：通过Hermes自动化扫描C盘大文件和缓存目录，系统性地清理了临时文件、Windows更新缓存、Python/Node.js的包缓存等。方法论：
    
    -   用 `du` 或 `find` 定位大户目录
        
    -   Windows Temp、AppData/Local/Temp、pip cache、npm cache 是常见的沉默空间杀手
        
    -   不要手动删 System32 或 Program Files 里有用的东西
        
2.  **OCR扫描PDF**：处理了一份教育部关于AI教育案例征集的扫描件PDF。尝试了vision\_analyze（不支持PDF直接OCR）→ 读取PDF字节流（扫描件无文本层）→ 提示需要pymupdf/marker-pdf OCR流程。教训：扫描件PDF在Hermes里的处理链路还比较曲折，marker-pdf是比较成熟的方案但需要较重依赖。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->













今天主要和ai看了下**核心问题**调用合约的私钥交给 AI？万一它乱来怎么办？

AI 监控到链上某个币价暴跌，需要自动帮你卖出，去调用你部署的那个交易合约。你如何给它这个权限，同时保证它不会转走你钱包里的所有钱？

很浅层的聊了下，主要是概念的东西
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->














今天主要辅助学习了下可信自主系统

让AI从中心拉出五条线，连到五个方向：

\- Payment / Commerce

\- Identity / Reputation

\- Wallet / Permission

\- Privacy / Security

\- Governance / Coordination

每个方向我问了三个问题：AI在干什么？区块链提供了什么？它解决人类什么恐惧？我发现这三个问题与我们的生活息息相关，同时调整了下自己的学习路径，有关于学习方面，不再以泛泛的范围为主。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->















今天了解了LLM的幻觉

关于幻觉主要有两个部分

其一是上下文幻觉：模型输出应与上下文中的源内容一致。但我说实话这个概念有点懵

外在幻觉：模型输出应以预训练数据集为基础。然而，鉴于预训练数据集的规模，逐代检索和识别冲突的成本过高。如果我们把预训练数据集视为世界知识的代理，那么我们本质上是在努力确保模型输出是真实的，并且能够被外部世界知识所验证。同样重要的是，当模型不知道某个事实时，它应该明确指出这一点。

今天只看了这两个
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->

















**进入学习主要是如何构建一个优质知识库-背后机制RAG缩写版**

**这个开营第一天就开始涉及，也就是给我们的hermes数据来源，一个优质的数据来源的构成就涉及到RAG。我们的知识库构建分为数据提问前-数据回答后**

这里就涉及到很多东西

首先我们需要对基础的文档也就是我们的数据进行切割也就是分片-再进行索引通过embedding转化为向量，这里转换的向量是关键因为之后会涉及转换相似度也就是和我们问题最接近的答案如何算出

通过 embedding转换为向量-来源主要是余弦相似度-欧式距离-点击

这些完成之后进行召回重排-提高精准度

最后生成答案。

humm今天先这样，其实感觉学到最后就是数学
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->



















开始挖Ai后开始发现

对于AI来说分很多种形式，而现在我们所说的生成式ai-用人工智能创造新的文本多模态内容的能力-使用自然语言提示和生成式ai系统的交互来实现。其实到这发现自己的ai幻觉很重。sql也开始逐渐被新的效率模型所替代，也就是说llms：检索增强生成利用协调工具与数据源进行连接，AI不仅仅是AI包含机器学习深度学习等等

像学习AI不仅仅是知道自己在学什么，为什么学。我觉得更重要是找到一门自己想掌握的能力，喜欢什么并深度学习。

模型也分很多种，比如微调模型：在特定的数据集上进行训练模型，定制自己的模型，但是资源密集型，不太适应复杂性和可能会放大运营成本，RAC的主要优势在于其灵活性。

或者检索增强生成–也就是说利用协调工具将模型和数据连接这也避免了模型训练的相关开销-这也让我不禁思索，是不是数据源。直接连接相当于给大脑一个链接窗口。

同时对AI＋Web3的新的落地应用有了新的期待。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->





















今天主要研究了trpc主要是api安全层

同时看了下关于AI工具如何增强Next.js开发

智能代码不全加速组件开发

性能优化建议和最佳实践提示，自动错误检测和修复建议，路由和api生成自动化

但是我没想到的是关于数据库的方案，搜索之后朋友推荐了Drizzle ORM+Neon 以及PostgreSQL

这些推荐的我还得后期学习吧，时刻保持空杯心态。

非常简单的看了密码学，密码学一定要提到图灵，慢慢学吧。向各位佬学习。感谢。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->
























今天主要学习了关于ai名词的基础概念

trabsfomer架构-数学函数

prompt给ai精准指令，分为两种一种是userpromp基于用户 system promp 后台设定 这两种大家通过使用就能看到区别，一个用户可以问，一个后台规则死的。

token词元，1token约等于0.75个英语单词，1-2个汉字

context/Context Windows ai的临时记忆联系上下文

tool ai的工具本质是外部函数，为什么因为工具无法自主使用需要平台调用之后-工具-形成新的prompt-模型-平台-呈现答案

agent是可以自主干活的ai智能体，它的工作流程是平台-agent -平台-调用工具-形成新的prompt即网络内容+用户问题=大模型-给答案

agent-skill 是给agent的专用技能包，即一次定义永久使用

MCP 全称 model Context protool 统一工具的使用标准，今天只看了简单概念。

LLM large language model全称 大语言模型
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->

























今天完成了Hermes的配置，将我的推特用户画像和使用习惯喂给了Hermes，让它完成自我基础诊断，并绘制和整理 AI 核心概念的 MindMap，根据我目前的学习阶段和经验配置了最适合我的学习方法和路径。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->


























今天主要配置了hermes和听了昨天的开营仪式，关于这部分你发现对于关于配置，对比小龙虾一步步走简单一些，但是对于配置在app上还是有些地方需要注意与取消，会有一些卡点
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
