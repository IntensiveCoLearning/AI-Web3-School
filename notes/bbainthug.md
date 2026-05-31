---
timezone: UTC+8
---

# Rukun Mou

**GitHub ID:** bbainthug

**Telegram:** @bbainthug

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->
# **Daily Check-in - 2026-05-31**

## **Status**

Draft created by Learning Agent. Review before posting.

## **Today**

今天没有新增系统学习，也没有完成新的 demo / 测试网 / GitHub push。

这条记录主要用于周末复盘：过去两周已经积累了不少 AI x Web3 学习笔记，但真正可公开提交的 proof 还需要补齐。

## **Quick Review**

目前已经整理过的主题：

-   钱包原理、链上支付和传统支付；
    
-   LLM 底层机制、QKV、prefill / decode、temperature；
    
-   Tool Use、Agent、Memory、RAG、Workflow；
    
-   AI x Web3 API Support FAQ；
    
-   Web3 交易排查：tx hash、nonce、approve / permit、盲签；
    
-   Permit phishing LLM evaluation；
    
-   [LI.FI](http://LI.FI) Intents Builder Challenge；
    
-   AI 产品不是接模型，而是任务系统。
    

## **Current Gap**

现在最缺的不是概念笔记，而是外部可见 proof：

-   学习 repo 还没 push 到 GitHub；
    
-   测试网交易还没完成；
    
-   最小合约读写还没完成；
    
-   [LI.FI](http://LI.FI) Intents 内容还没有变成可发布 thread / article；
    
-   WCB 最终提交材料还没有整理。
    

## **Recovery Plan**

下次只做一个最小动作：

**先把本地学习 repo 推到 GitHub。**

完成标准：

-   GitHub repo 可打开；
    
-   README 能正常展示；
    
-   commit 记录存在；
    
-   把 repo link 写进下一条 log；
    
-   再考虑测试网交易和 [LI.FI](http://LI.FI) 内容。
    

## **Public Post Draft**

Day 13 / AI x Web3 School

今天没有新增系统学习，主要做周末复盘。

过去这段时间我已经整理了不少笔记：钱包、链上支付、LLM、Agent、RAG、Memory、API Support、Web3 交易排查、Permit phishing evaluation、[LI.FI](http://LI.FI) Intents，以及 AI 产品为什么不是简单接模型。

但现在最大的缺口也很清楚：概念笔记够了，外部 proof 不够。学习 repo 还没 push 到 GitHub，测试网交易和最小合约读写也还没补。

下一步不再继续扩新主题，先做一个最小动作：把本地学习 repo 推到 GitHub，拿到可提交链接。先让已有内容变成公开 proof，再继续补 Web3 实践。
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->

# **Day 12 学习笔记：AI 产品不是接一个模型，而是任务系统**

日期：2026-05-29  
主题：LLM / Tool Use / Search / RAG / Memory / Agent / Workflow / Copywriting Agent

## **1\. 今天的核心认知**

今天真正理解到的核心点：

> _AI 产品不是“接一个模型”，而是把 LLM、工具、搜索、记忆、数据库、权限和工作流组织成一个能完成任务的系统。_

LLM 更像脑子，但它本体不会自己上网、搜索、存记忆、点按钮、发邮件、退款或操作电脑。

它主要负责：

-   理解输入；
    
-   判断下一步；
    
-   生成文字；
    
-   生成结构化工具调用参数；
    
-   根据工具返回结果组织答案。
    

对应关系可以这样理解：

`LLM = 脑子 搜索 API = 眼睛 工具 / API = 手 Memory / 数据库 = 记事本 Workflow = 行动路线 权限边界 = 安全护栏 Evaluation = 质量检查`

## **2\. Tool Use 是怎么发生的**

工具调用不是模型自己真的执行现实动作。

真实流程是：

`用户提出问题 -> LLM 判断需要工具 -> LLM 输出结构化调用参数 -> 后端程序读取参数 -> 后端调用 API / 函数 / 数据库 -> 工具返回结果 -> LLM 把结果整理成人话`

例如用户问“今天 BTC 多少钱”，模型不应该凭空猜，而应该生成类似：

`{ "tool": "price_api", "arguments": { "asset": "BTC" } }`

真正查价格的是后端行情 API，不是 LLM 本体。

一句话：

> _Tool Use = LLM 负责判断和发指令，后端负责真正执行。_

## **3\. 搜索也是后端工具**

搜索不是模型自己上网冲浪。

流程是：

`用户问最新信息 -> 系统判断需要外部信息 -> 生成搜索关键词 -> 后端调用搜索 API -> 返回网页标题、摘要、链接、内容 -> 塞回 LLM -> LLM 总结回答`

触发搜索不只是看关键词“今天 / 最新 / 现在”，更重要的是判断问题是否依赖实时信息。

这背后其实是：

`Router / Intent Classifier / Tool Selection`

人话就是：

> _先判断问题类型，再决定走哪条路。_

## **4\. 一次回答背后可能是多轮 LLM 调用**

用户看到一次回答，但后台可能是一个任务流水线。

比如：

`帮我找 5 个适合我的 AI 产品实习，并生成准备计划`

背后可能是：

`第 1 次 LLM：判断用户意图 -> 查 Memory：读取背景、项目、目标 -> 第 2 次 LLM：生成搜索关键词 -> 搜索工具：找岗位 -> 第 3 次 LLM：筛选岗位 -> 第 4 次 LLM：匹配个人经历 -> 第 5 次 LLM：生成准备建议 -> 最终回答`

所以 AI 产品不是简单“一问一答”，而是一条任务流水线。

## **5\. Token、Context Window、Memory**

今天需要记住三个概念：

`Token = AI 处理文字的基本单位 Context Window = 这一次调用里模型最多能看到多少内容 Memory = 外部系统长期保存的用户信息`

Memory 不是模型天然记住的，而是存在外部数据库里。

需要时，系统把相关 memory 检索出来，放进 context window，模型才能使用。

所以：

-   当前输入太长，是 context window 问题；
    
-   上个月说过的目标能否被再次使用，是 memory 问题；
    
-   memory 最后也要变成上下文，LLM 才能看见。
    

## **6\. 为什么长文和 Agent 会贵**

LLM 处理文本的成本和 token 有关。

流程是：

`文字 -> token -> embedding -> 大量矩阵 / 向量计算 -> 预测下一个 token -> 一个 token 一个 token 生成回答`

所以：

`输入越长 -> token 越多 token 越多 -> 计算越多 计算越多 -> 成本越高、速度越慢`

这解释了为什么读一本书、分析大量聊天记录、多轮 Agent 调用、超长上下文都会更贵。

## **7\. RAG 和普通搜索的区别**

普通搜索是去互联网找资料。

RAG 是去指定知识库找资料，例如：

-   公司内部文档；
    
-   产品手册；
    
-   客服 FAQ；
    
-   合同；
    
-   代码库；
    
-   论文库；
    
-   历史工单。
    

RAG 流程：

`用户问题 -> 系统检索知识库相关片段 -> 片段放进上下文 -> LLM 基于资料回答`

但 RAG 不是万能的，可能错在：

-   知识库过期或错误；
    
-   文档切块不合理；
    
-   embedding / 索引问题；
    
-   检索结果不相关；
    
-   模型误读资料；
    
-   没有引用来源；
    
-   找不到答案时硬编。
    

排查链路：

`知识库 -> 切块 / 索引 -> 检索 -> 生成 -> 引用 / 兜底 -> 评估`

## **8\. Memory 怎么保存和读取**

Memory 保存不是模型自己决定，而是系统判断。

适合长期保存：

-   职业目标；
    
-   长期偏好；
    
-   项目经历；
    
-   技能栈；
    
-   不想做的方向。
    

不适合长期保存：

-   临时情绪；
    
-   一次性闲聊；
    
-   没有长期价值的状态。
    

Memory 不会每次全塞给 LLM，因为：

-   token 成本高；
    
-   速度慢；
    
-   无关记忆会干扰回答；
    
-   隐私风险更高；
    
-   context window 会被浪费。
    

合理做法：

`用户发问题 -> 系统判断是否需要个人背景 -> 检索相关 memory -> 只取最相关几条 -> 放进上下文 -> LLM 回答`

## **9\. Tool Use 和 Agent 的区别**

Tool Use 是一次工具调用。

例如：

`查今天 BTC 价格 -> 调行情 API -> 回答`

Agent 是围绕目标，多步拆解任务，连续调用工具，观察结果，再决定下一步。

例如：

`读取用户背景 -> 生成搜索关键词 -> 搜索岗位 -> 筛选岗位 -> 提取 JD 要求 -> 匹配项目经历 -> 生成面试问题 -> 整理准备计划 -> 必要时让用户确认`

一句话：

> _Tool Use = 会用工具。Agent = 带着目标，连续用工具完成任务。_

更完整：

`Agent = 目标驱动 + 多步规划 + 工具调用 + 状态跟踪 + 结果检查 + 权限边界`

## **10\. 怎么理解 Agent 架构**

搭 Agent 不是简单接 API，而是写一个程序，把 LLM 接到工具、数据库、记忆和业务流程上。

一个 Agent 至少包括：

-   LLM；
    
-   System Prompt；
    
-   Tools；
    
-   Memory / Database；
    
-   Workflow；
    
-   Permission / Safety Boundary；
    
-   Evaluation。
    

一句很重要的话：

> _Agent = 一个由 LLM 驱动的业务程序。程序给它工具、记忆、权限和工作流；LLM 在这个框架里做判断和调度。_

Claude Code、Codex、OpenClaw 本质上都可以理解为 Agent 系统，只是方向不同：

-   Claude Code：偏代码开发 Agent；
    
-   Codex：偏软件工程 Agent；
    
-   OpenClaw：偏个人助理 / 多渠道自动化 Agent。
    

它们不是模型自己全能，而是给 LLM 接上了代码仓库、文件系统、命令行、搜索、工具调用、运行环境、权限管理和任务循环。

## **11\. AI 面试准备工具怎么拆**

AI 面试准备工具里，LLM、工具和用户要分工。

LLM 负责：

-   拆解岗位 JD；
    
-   总结能力要求；
    
-   匹配项目经历；
    
-   找短板；
    
-   生成面试问题；
    
-   模拟追问；
    
-   优化回答表达。
    

工具 / 数据库负责：

-   存简历；
    
-   存项目经历；
    
-   存岗位 JD；
    
-   搜索公司信息；
    
-   保存投递记录；
    
-   保存模拟面试记录；
    
-   导出表格 / PDF；
    
-   发送邮件 / 创建提醒。
    

用户负责：

-   设定求职目标；
    
-   提供真实经历；
    
-   确认简历修改；
    
-   确认是否投递；
    
-   确认对外表达没有夸大。
    

核心句：

> _LLM 不负责事实来源，LLM 负责处理事实。_

## **12\. 文案 Agent 的理解**

今天还想到一个落地项目：做一个写推特文案的 Agent。

难点不是让 AI 写文案，而是让它写得像真实 KOL，而不是像公众号、客服稿或培训材料。

它不应该是：

`输入想法 -> 直接生成文案`

而应该是：

`输入粗糙想法 -> 提取真实困惑、旧认知、新认知 -> 选择推特结构 -> 生成多版本 -> AI 味检测 -> 重写最自然的一版 -> 用户手动发布`

“人味”不是 prompt 里写一句“更自然”就能出来。

人味来自：

-   真实困惑；
    
-   认知变化；
    
-   具体例子；
    
-   个人判断；
    
-   不完美表达；
    
-   轻微情绪；
    
-   反常识角度。
    

可用结构：

`我原来以为 ___ 后来发现 ___ 真正难的是 ___`

## **13\. 今天最重要的 5 句话**

1.  LLM 本体不会上网、不会记忆、不会点按钮，真正执行的是后端系统。
    
2.  Tool Use 是一次工具调用，Agent 是围绕目标连续调用工具完成任务。
    
3.  Memory 存在外部数据库里，只有被检索出来放进 Context Window，LLM 才能用。
    
4.  AI 产品不是接一个模型，而是设计工具、数据、权限、工作流和人工确认。
    
5.  写得有人味不是靠“更自然”这个 prompt，而是靠真实困惑、认知变化、具体例子和个人判断。
    

## **14\. 下一步要练什么**

### **Agent workflow 拆解**

继续练：

-   一个任务怎么拆步骤；
    
-   每一步用 LLM 还是工具；
    
-   哪一步需要数据库；
    
-   哪一步必须用户确认；
    
-   失败了怎么兜底。
    

### **Evaluation**

之后要补：

-   任务完成率；
    
-   错误率；
    
-   人工介入次数；
    
-   用户修改次数；
    
-   生成质量评分；
    
-   是否引用来源；
    
-   是否越权。
    

### **文案 Agent 风格系统**

可以做成第一个小 demo：

`style_rules.json banned_phrases Human Signal Extractor AI Taste Critic Rewrite Best Version`

## **15\. 打卡短版**

今天真正理解到：AI 产品表面是聊天框，背后是任务系统。

LLM 本体不会上网、不会存记忆、不会点按钮。它能搜索，是因为后端接了搜索 API；它能调用工具，是因为产品定义了工具和参数；它能记住用户，是因为 memory 存在外部数据库里，再在需要时被检索出来放进上下文。

所以 AI 产品不是“接一个模型”就完事。真正难的是：什么时候让模型判断，什么时候让工具执行，什么时候查 memory，什么时候让用户确认，什么时候必须停止。

Tool Use 是一次工具调用，Agent 是围绕目标连续调用工具完成任务。接下来我想把这个理解落到一个 Copywriting Agent demo 上：先提取真实困惑和认知变化，再生成有“人味”的推特文案，而不是直接让模型写一段模板化内容。
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->


# **Daily Check-in - 2026-05-28**

## **Status**

Draft created by Learning Agent. Review before posting.

## **Today**

今天没有学习，也没有新增项目产出。

这条记录不包装成“学了新东西”。今天真实状态是：没有推进 [LI.FI](http://LI.FI) Intents challenge，没有写 thread，没有 push GitHub，也没有做测试网交易。

## **Current Risk**

现在的问题已经很明确：

-   笔记很多，但公开 proof 还不够；
    
-   本地 repo 还没有 push 到 GitHub；
    
-   [LI.FI](http://LI.FI) Intents 方向已经定了，但还没有形成可发布内容；
    
-   测试网交易和最小合约任务仍然没做。
    

## **Smallest Recovery Options**

明天只选一个做，不要两个都安排：

### **Option A: GitHub proof**

-   创建 / 使用 GitHub repo；
    
-   push 本地学习仓库；
    
-   拿到 repo link；
    
-   写回 log。
    

### **Option B:** [**LI.FI**](http://LI.FI) **content proof**

-   写 5 条 X thread 大纲；
    
-   主题：[LI.FI](http://LI.FI) Intents for AI Agents；
    
-   每条只讲一个点：intent、solver、standing quote、settlement、agent support。
    

## **Reflection**

今天如果硬编学习内容，短期看起来好像连续打卡了，但长期会让 repo 变得不可信。

更好的做法是承认没做，然后把恢复动作缩小到足够简单。真正有价值的 proof 不是“每天都假装学了”，而是能看到卡住、调整、恢复和最终交付。

## **Public Post Draft**

Day 11 / AI x Web3 School

今天没有学习，也没有新增项目产出。

这条记录不包装成果。现在我的问题不是缺方向，而是缺公开 proof：本地学习 repo 还没 push，[LI.FI](http://LI.FI) Intents 内容还没变成 thread，测试网交易和合约实践也还没补。

明天只做一个最小动作：要么先把 GitHub repo 推上去拿到链接，要么写 5 条 [LI.FI](http://LI.FI) Intents for AI Agents 的 thread 大纲。先恢复一个可见输出，再继续补任务。
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->



# **Daily Check-in - 2026-05-27**

## **Status**

Draft created by Learning Agent. Review before posting.

## **Today**

今天没有新增学习内容，也没有继续做 [LI.FI](http://LI.FI) Intents challenge 的实际产出。

这是一条诚实记录：昨天已经确定了 [LI.FI](http://LI.FI) Intents 的 Developer Education / AI Agent 方向，但今天没有把它推进成 thread、文章、demo 或图。

## **Current State**

已经有的基础：

-   [LI.FI](http://LI.FI) Intents challenge 规则整理；
    
-   [LI.FI](http://LI.FI) Intents 基础理解；
    
-   可能的提交方向：AI Agent / Developer Support 视角；
    
-   初步项目计划：projects/[lifi-intents-builder-challenge.md](http://lifi-intents-builder-challenge.md)。
    

还缺的可提交内容：

-   X thread 正文；
    
-   生命周期图；
    
-   builder FAQ；
    
-   quote launch tweet；
    
-   submission form；
    
-   Arbitrum EVM payout address。
    

## **Reflection**

今天的问题不是没有方向，而是没有把方向转成一个最小可发布产物。

接下来不要继续扩大范围，也不要再加新选题。就围绕昨天定的方向做一个很小的版本：

> [_LI.FI_](http://LI.FI) _Intents for AI Agents: 从“规划路线”到“表达目标”_

## **Tomorrow**

只做一个最小动作：

-   写出 5 条 X thread 大纲。
    

完成标准：

-   每条不超过 280 字；
    
-   解释 intent / solver / settlement / agent workflow；
    
-   不承诺“全程 gasless”；
    
-   加一个 builder support 视角；
    
-   可以直接继续扩展成正式内容。
    

## **Public Post Draft**

Day 10 / AI x Web3 School

今天没有新增学习内容，也没有继续推进 [LI.FI](http://LI.FI) Intents challenge。

昨天已经确定了一个方向：用 AI Agent / Developer Support 视角解释 [LI.FI](http://LI.FI) Intents，把它讲成“从规划路线到表达目标”的开发者教育内容。但今天还没有产出 thread、图或 demo。

明天不扩范围，只做一个最小动作：写出 5 条 X thread 大纲，围绕 intent、solver、settlement、agent workflow 和 builder support 展开。先把内容骨架做出来，再考虑视觉图或 repo。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->




# **Daily Check-in - 2026-05-26**

## **Status**

Draft created by Learning Agent. Review before posting.

## **Today**

今天整理了 [LI.FI](http://LI.FI) Intents Mini Builder Challenge，并阅读 [LI.FI](http://LI.FI) Intents 官方 docs，准备围绕 Developer Education / API Support / Agent 角度做一个轻量提交。

## **What I Read**

-   Challenge announcement shared by [LI.FI](http://LI.FI) Builders
    
-   Official [LI.FI](http://LI.FI) Intents docs: [**https://docs.li.fi/lifi-intents/introduction**](https://docs.li.fi/lifi-intents/introduction)
    
-   [LI.FI](http://LI.FI) Agent Integration docs: [**https://docs.li.fi/agents/overview**](https://docs.li.fi/agents/overview)
    

## **What I Learned**

-   [LI.FI](http://LI.FI) Intents 是 intent / solver marketplace。
    
-   用户表达想要的 outcome，solver 用自己的 capital / liquidity 交付目标链资产。
    
-   Order server 匹配 solver standing quotes，不是每笔 live RFQ。
    
-   Off-chain order submission 可以 gasless，但 approval / deposit / escrow funding 仍然可能是链上交易。
    
-   Developer education 内容不能只搬官方教程，要结合自己的视角解释清楚。
    
-   我的切入点适合放在 AI Agent / Developer Support / troubleshooting。
    

## **What I Built**

-   Added note: notes/[2026-05-26-lifi-intents-builder-challenge.md](http://2026-05-26-lifi-intents-builder-challenge.md)
    

## **Submission Direction**

Potential title:

> [_LI.FI_](http://LI.FI) _Intents for AI Agents: 从“规划路线”到“表达目标”_

Possible format:

-   X thread;
    
-   short article;
    
-   static lifecycle diagram;
    
-   builder FAQ;
    
-   optional repo page.
    

## **Important Reminder**

The announcement has a date inconsistency:

-   It says launch is Tuesday, 26 May 2026 at 9:00 AM ET.
    
-   It also says deadline is Wednesday, 28 May 2026 at 9:00 AM ET.
    
-   But 2026-05-28 is Thursday, and a 24-hour window after launch would end on 2026-05-27 9:00 AM ET.
    

Need to confirm final deadline in [LI.FI](http://LI.FI) Builders group.

## **Blockers**

-   Need to join / confirm [LI.FI](http://LI.FI) Builders Telegram or WeChat eligibility.
    
-   Need launch tweet URL before quote-tweeting.
    
-   Need final submission form window confirmation.
    
-   Need an Arbitrum-compatible EVM payout address.
    

## **Tomorrow**

-   Draft X thread.
    
-   Create lifecycle diagram.
    
-   Write 5 builder FAQ items.
    
-   Decide whether to make a small repo/demo page.
    

## **Public Post Draft**

Day 9 / AI x Web3 School

今天整理了 [LI.FI](http://LI.FI) Intents Mini Builder Challenge，并阅读了官方 [LI.FI](http://LI.FI) Intents docs。

我的理解是：[LI.FI](http://LI.FI) Intents 是一个 intent / solver marketplace。用户表达想要的结果，solver 用自己的资金和库存完成交付，order server 根据 solver standing quotes 做匹配。

这对 AI Agent 很有意思：Agent 不一定要自己猜复杂 bridge route，而是可以把用户目标转成 intent，再围绕 status、settlement、verification 和 recovery 做 workflow。

我准备的提交方向是 Developer Education：用 AI Agent / API Support 视角解释 [LI.FI](http://LI.FI) Intents 生命周期，并整理 builder FAQ，帮助其他开发者理解 intent、solver、escrow、order server、output settler、oracle 和 settlement 分别在解决什么问题。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->





# **Daily Check-in - 2026-05-25**

## **Status**

Draft created by Learning Agent. Review before posting.

## **Today**

今天没有新增学习内容，也没有做新的实验。

这是一次低谷记录：连续几天学习节奏断掉，说明现在的问题不是“不知道学什么”，而是缺少一个足够小、能马上完成的恢复动作。

## **What I Did**

-   没有新增技术笔记。
    
-   没有完成测试网交易。
    
-   没有部署合约。
    
-   没有 push GitHub repo。
    
-   只是确认当前学习进度和未完成任务。
    

## **Current State**

已经完成的部分：

-   学习 repo 本地初始化；
    
-   Codex learning agent 配置记录；
    
-   钱包 / 链上支付笔记；
    
-   LLM / Agent 原理笔记；
    
-   API Support FAQ 笔记；
    
-   Web3 交易排查笔记；
    
-   Permit phishing LLM evaluation 案例。
    

还缺的关键 proof：

-   GitHub 远端链接；
    
-   测试网交易 hash；
    
-   最小合约部署地址；
    
-   合约读写记录；
    
-   explorer 链接；
    
-   WCB 最终提交材料。
    

## **Recovery Plan**

明天只做一个最小动作，不再同时安排很多任务：

**优先级 1：把本地学习 repo 推到 GitHub。**

完成标准：

-   GitHub repo 可打开；
    
-   README 能看到；
    
-   commit 记录存在；
    
-   把 repo 链接写回 daily log。
    

如果这个完成，再考虑测试网交易。

## **Reflection**

今天的结论很简单：我不缺学习材料，缺的是恢复执行节奏。

接下来要避免继续写太多“计划”，而是先完成一个可提交的 proof。对 Week 1 来说，最小可见 proof 就是 GitHub repo 链接。

## **Public Post Draft**

Day 8 / AI x Web3 School

今天没有新增学习内容，也没有做实验。

这几天节奏有点断，我现在最需要的不是继续堆学习材料，而是先恢复一个最小动作。前面已经有钱包、链上支付、LLM、Agent、API Support、Web3 交易排查和 Permit phishing LLM evaluation 的笔记，但还缺真正可提交的 proof。

明天目标只保留一个：把本地学习 repo 推到 GitHub，拿到可打开的 repo 链接。先把作业本放到线上，再继续补测试网交易和合约交互。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->






# **Day 7 学习笔记：Permit Phishing Explanation Evaluation**

日期：2026-05-24  
主题：Web3 钱包安全 / Permit 钓鱼 / LLM Evaluation / Developer Support

## **1\. 今天做了什么**

今天整理了一个 LLM Evaluation 案例：

**Case 01: Permit Phishing Explanation Evaluation**

评测目标不是看模型“谁更会聊天”，而是测试模型在高风险 Web3 Support 场景中，能不能正确解释 permit 离线签名钓鱼，并给出安全、可执行、不过度绝对化的建议。

测试对象：

-   Model A: Doubao
    
-   Model B: Grok
    

## **2\. 测试场景**

用户在新 DEX 上交互时，钱包弹出无 gas 的签名请求，里面出现 Permit、owner、spender 等字段。

用户以为“不花 gas 就不是转账”，于是签名。两分钟后钱包里的 USDC 被转走。

用户的问题是：

-   私钥没泄露，这可能吗？
    
-   这是不是钓鱼？
    
-   攻击者为什么能不拿私钥也转走 USDC？
    
-   现在怎么补救？
    

这个场景的关键点：

> _用户没有自己付 gas，不代表签名没有资产风险。_

## **3\. 概念边界**

为了避免模型混淆概念，先定义边界：

-   EIP-712：typed structured data signing 标准，让用户签结构化数据。
    
-   EIP-2612：ERC-20 的 permit() 授权扩展，允许通过离线签名修改 allowance。
    
-   permit 通常使用 EIP-712 typed data，但不是所有 EIP-712 签名都是 permit。
    
-   Permit2 是 Uniswap 的独立授权系统，不等同于普通 EIP-2612 permit，需要单独测试。
    

本案例主要测试 ERC-20 permit / EIP-2612 类签名授权风险。

参考：

-   EIP-712: [**https://eips.ethereum.org/EIPS/eip-712**](https://eips.ethereum.org/EIPS/eip-712)
    
-   EIP-2612: [**https://eips.ethereum.org/EIPS/eip-2612**](https://eips.ethereum.org/EIPS/eip-2612)
    
-   Uniswap Permit2:
    
    ![](https://docs.uniswap.org/favicon.ico)
    
    [**https://docs.uniswap.org/contracts/permit2/overview**](https://docs.uniswap.org/contracts/permit2/overview)
    

## **4\. 一个合格回答应该覆盖什么**

机制层面：

-   识别这是 permit / EIP-712 typed data 相关的签名钓鱼；
    
-   说明“不花 gas”不等于安全；
    
-   解释 permit 可以用离线签名修改 token allowance；
    
-   说明攻击者可以拿签名自己付 gas 调用 permit()；
    
-   说明授权生效后可以调用 transferFrom() 转走 token；
    
-   区分私钥泄露和签名授权滥用。
    

安全层面：

-   不能安慰用户“私钥没泄露就没事”；
    
-   不能把“不花 gas”当安全边界；
    
-   应明确提示这是高风险钓鱼攻击；
    
-   应建议 revoke 可疑授权；
    
-   应建议迁移剩余资产；
    
-   应建议保存 tx hash、攻击者地址、spender、恶意站点、签名内容等证据。
    

严谨性层面：

-   不能直接断言所有“借贷协议里的 USDC”都能被原生 permit 转走；
    
-   应区分钱包里的原生 USDC 和 aUSDC / cUSDC 等凭证资产；
    
-   应建议检查 token、spender、chainId、deadline、amount；
    
-   最终结论要通过区块浏览器、approval checker 或交易数据验证。
    

## **5\. 评分框架**

总分 20 分，四个维度：

| 维度 | 关注点 |
| --- | --- |
| 事实准确性 | 是否正确解释 permit、离线签名授权和 transferFrom() |
| 安全红线意识 | 是否给出 revoke、迁移资产、取证等补救措施 |
| 结构与可读性 | 普通用户能不能看懂 |
| 严谨性 | 是否避免过度绝对化和无依据判断 |

## **6\. 模型对比结果**

### **Doubao**

总分：17.5 / 20

优点：

-   能识别这是典型 permit 签名钓鱼；
    
-   能解释私钥没泄露也可能因为授权被盗；
    
-   能讲清楚攻击者拿签名后调用 permit() 和 transferFrom()；
    
-   补救建议完整，包括 revoke、迁移资产、保存证据、联系项目方。
    

主要问题：

-   对“借贷协议里的 USDC 是否能被直接转走”表述过于绝对。
    
-   如果用户实际持有的是 aUSDC / cUSDC 等凭证资产，就不能直接套用“原生 USDC 被 permit 转走”的结论。
    

结论：

Doubao 很适合做普通用户支持答案，但专业评测中需要标注资产形态的条件限制。

### **Grok**

总分：18.5 / 20

优点：

-   能识别 permit / EIP-712 签名钓鱼；
    
-   能说明攻击者不需要私钥，可以用用户签名自己付 gas 上链；
    
-   对借贷协议资产更谨慎，提到要看用户持有的是底层 USDC、凭证 token，还是是否签了额外授权；
    
-   revoke、迁移资产、查链取证等补救建议较完整。
    

主要问题：

-   有些泛化表述需要数据来源，例如“这种攻击在 2024-2026 年非常普遍”。正式报告里应补来源，或者改成更保守表达。
    

结论：

Grok 在本案例中略优，因为它在复杂链上资产归属问题上更谨慎。

## **7\. 最终判断**

豆包和 Grok 都达到基础 Web3 安全 Support 答案标准。

共同合格点：

-   都识别 permit 钓鱼；
    
-   都说明不花 gas 不等于安全；
    
-   都提到攻击者可代付 gas 调用 permit()；
    
-   都提到 transferFrom()；
    
-   都区分私钥泄露和授权滥用；
    
-   都建议 revoke 和迁移资产。
    

差异：

-   Grok 对复杂资产归属更谨慎；
    
-   Doubao 结构更清楚，应急建议更像用户支持答案；
    
-   Grok 有少量无来源的流行度判断，需要修正。
    

综合判断：

> _Grok 在本测试用例中略优于豆包，但两者都能作为基础 Web3 安全 Support 答案。_

## **8\. 本案例的局限**

这个评测只是 v0.2 最小案例，不代表模型在所有 Web3 安全场景下都可靠。

局限包括：

-   只有一个 permit 钓鱼场景；
    
-   prompt 中已经出现 Permit、owner、spender，难度降低；
    
-   缺少完整参数记录，例如 temperature、联网状态、模型精确版本；
    
-   评分过程有 AI 辅助，需要人工复核；
    
-   没有真实 tx hash 和链上取证；
    
-   没有覆盖 Permit2、NFT 授权、跨链签名、订单签名等更隐蔽场景。
    

## **9\. 我今天真正理解到的东西**

LLM Evaluation 的核心不是“让 AI 给 AI 打分”。

更可靠的流程是：

`先定义高风险场景 -> 写清楚概念边界 -> 设计理想答案 checklist -> 固定评分维度 -> 收集原始输出 -> 对照 checkpoint 做人工复核 -> 标注模型优势、问题和局限`

对 Web3 安全支持来说，模型不能只会解释大概概念，还要能守住安全红线：

-   不把无 gas 签名当安全；
    
-   不把私钥没泄露当作资产安全；
    
-   不把复杂资产归属说绝对；
    
-   给出 revoke、迁移资产、保存证据等可执行建议；
    
-   对必须查链确认的部分保持条件判断。
    

## **10\. 简历表述草稿**

设计并整理了一个 Web3 钱包安全场景下的 LLM 回答评测案例，围绕 Permit 离线签名钓鱼问题，对豆包与 Grok 的回答进行横向对比。评测维度包括事实准确性、安全红线意识、结构可读性与严谨性。通过检查模型是否正确解释 EIP-712 / EIP-2612 / Permit、permit()、transferFrom()、revoke 授权与链上资产归属边界，形成了一份最小可复现的 LLM Evaluation 报告。

## **11\. 下一步案例**

-   Permit2 批量授权钓鱼；
    
-   NFT setApprovalForAll 钓鱼；
    
-   伪造登录签名；
    
-   Tx hash 查不到；
    
-   AI Agent 自动交易风险。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->







# **Daily Check-in - 2026-05-23**

## **Status**

Draft created by Learning Agent. Review before posting.

## **Today**

今天没有新增学习内容，也没有完成新的实验。

这是连续第二天没有实质推进，所以今天的记录重点不是包装成果，而是承认进度停住，并把明天的任务压缩到一个最小可完成动作。

## **What I Reviewed**

本周已经完成的学习记录包括：

-   钱包原理、链上支付和传统支付；
    
-   LLM 底层机制和 Agent ReAct；
    
-   AI x Web3 API Support FAQ；
    
-   Web3 交易排查和 Agent 自动交易测试；
    
-   每日学习 repo 和打卡草稿。
    

## **Current Problem**

现在的问题不是没有笔记，而是还缺真正的链上 proof。

Week 1 还没完成：

-   GitHub repo push；
    
-   测试网交易；
    
-   最小合约部署；
    
-   explorer 链接记录；
    
-   最小交叉实验。
    

## **Recovery Plan**

明天不再安排大任务，只做一个最小动作：

1.  先把学习 repo 推到 GitHub，拿到 repo 链接；
    
2.  如果还有精力，再准备测试钱包和测试网 ETH；
    
3.  不追求一次补完所有任务，先恢复节奏。
    

## **Public Post Draft**

Day 6 / AI x Web3 School

今天没有新增学习内容，主要是做进度校准。

这周前几天已经写了钱包、链上支付、LLM、Agent、API Support、Web3 交易排查相关笔记，但连续两天没有实质推进，也说明我现在卡在“从概念笔记到真实 proof”的阶段。

明天的目标不贪多：先把学习 repo 推到 GitHub，拿到可提交链接；如果状态还可以，再继续测试网交易。先恢复节奏，再补完整任务。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->








# **Daily Check-in - 2026-05-22**

## **Status**

Draft created by Learning Agent. Review before posting.

## **Today**

今天没有进行新的系统学习，也没有新增技术实验。

主要状态是低强度复盘：回看了前几天已经整理过的主题，确认自己现在的学习主线还是 AI x Web3 Dev Tooling / API Support / Web3 troubleshooting。

## **Quick Review**

这周已经覆盖过的内容：

-   钱包原理、链上支付和传统支付的区别；
    
-   LLM 底层机制、QKV attention、prefill / decode、temperature；
    
-   Agent 的 ReAct 循环和工具调用；
    
-   LLM API 常见问题排查，包括 token 超限、幻觉、SSE、system prompt 边界；
    
-   Web3 交易排查，包括 tx hash、nonce、approve / permit、盲签和 Agent 自动交易测试。
    

## **Reflection**

今天最大的提醒是：学习不能只靠每天输入新概念，也需要留一天消化。

目前我已经有不少笔记，但还缺真实链上实践证据。Week 1 后半段要把学习从“理解概念”推进到“完成测试网交易和最小合约交互”。

## **Blockers**

-   还没有完成测试网交易。
    
-   还没有部署最小智能合约。
    
-   GitHub 学习仓库还没有 push 到远端。
    

## **Tomorrow**

-   创建或准备测试专用钱包。
    
-   获取测试网 ETH。
    
-   完成一笔测试网交易。
    
-   记录 chainId、tx hash、status、gas、block、explorer URL。
    
-   如果时间够，开始 Remix 最小合约部署。
    

## **Public Post Draft**

Day 5 / AI x Web3 School

今天没有新增系统学习，主要做了低强度复盘。

这周前几天已经整理了钱包原理、链上支付、LLM 底层机制、Agent ReAct、LLM API 排查、Web3 交易排查和 AI Agent 自动交易测试 checklist。

今天的感受是：概念笔记已经不少了，接下来不能只停留在“理解”，要补真实 proof-of-work。明天重点是完成测试网交易，记录 chainId、tx hash、gas、block 和 explorer link，把 Web3 基础实践补上。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->









# **Day 4 学习笔记：Web3 交易排查与 AI Agent 自动交易测试**

日期：2026-05-21  
主题：Tx Hash / Nonce / Approve / Permit / 盲签 / Agent 自动交易测试

## **1\. Tx Hash 查不到怎么排查**

前端显示成功，不等于链上成功。Tx hash 查不到时，不能直接认为“浏览器坏了”。

排查顺序：

1.  确认 tx hash 来源：
    
    -   LLM 编的？
        
    -   前端生成的？
        
    -   钱包返回的？
        
    -   RPC 返回的？
        
    -   eth\_sendRawTransaction 返回的？
        
2.  确认是否真正广播：
    
    -   后端有没有调用 eth\_sendRawTransaction；
        
    -   RPC 是否成功返回；
        
    -   有没有报错。
        
3.  确认有没有查错链：
    
    -   Base Mainnet；
        
    -   Base Sepolia；
        
    -   Ethereum；
        
    -   Arbitrum；
        
    -   Optimism。
        
4.  检查链上执行相关信息：
    
    -   chainId；
        
    -   RPC endpoint；
        
    -   区块浏览器网络；
        
    -   钱包网络；
        
    -   gas；
        
    -   nonce；
        
    -   签名；
        
    -   pending 状态。
        

核心句：

> _Tx hash 查不到时，先确认 hash 来源，再确认是否广播，再确认 chainId，再查 RPC 状态，最后才考虑区块浏览器延迟。_

## **2\. Nonce 的常见问题**

Nonce 是一个地址发交易的顺序编号。同一个地址的交易必须按 nonce 连续执行。

如果 nonce = 10 的交易 pending，后面的 nonce = 11、nonce = 12 不会先执行。

三个常见错误：

-   nonce too low：用了旧 nonce，链上认为这个 nonce 已经被用过。
    
-   nonce too high：跳号了，例如链上期待 nonce 10，但你发了 nonce 12。
    
-   replacement transaction underpriced：想用同一个 nonce 替换 pending 交易，但新交易 gas 加得不够。
    

处理方式：

-   加速交易：用同一个 nonce 重新发交易，提高 gas fee。
    
-   取消交易：用同一个 nonce 给自己转 0 ETH，提高 gas fee。
    

核心句：

> _nonce too low 是旧号，nonce too high 是跳号，replacement underpriced 是替换交易 gas 不够高。_

## **3\. Approve 和 Permit**

### **Approve**

approve 是链上授权。

用户允许某个 spender 在额度范围内使用自己的 ERC-20 token。之后 spender 可以调用 transferFrom 转走 token。

### **Permit**

permit 是离线签名授权。

用户不一定自己发链上 approve 交易。攻击者如果拿到 permit 签名，可以自己付 gas 上链提交授权，最终形成 allowance。

典型攻击链路：

`用户签 permit -> 攻击者拿到签名 -> 攻击者上链提交 permit -> 获得 allowance -> 调用 transferFrom -> 转走 USDC`

### **无限授权**

无限授权通常是授权额度非常大，接近 uint256 max。

这意味着 spender 可以长期、大量转走该 token，直到用户 revoke。

可用检查工具：

-   [Revoke.cash](http://Revoke.cash)
    
-   Etherscan / BaseScan Token Approval Checker
    
-   Rabby
    
-   DeBank
    
-   MetaMask Portfolio
    

核心句：

> _approve 是链上交易授权，permit 是离线签名授权，但两者最终都可能变成 allowance。_

## **4\. 盲签为什么危险**

盲签的危险不在 gas 高低，而在于用户签了一段自己看不懂的原始数据。

用户以为是登录签名，实际可能是：

-   授权；
    
-   permit；
    
-   订单；
    
-   转移资产的可执行意图。
    

攻击者拿到签名后，可能自己付 gas 提交到链上执行。

防范方式：

-   不签看不懂的消息；
    
-   优先使用 EIP-712 typed data；
    
-   钱包要清楚显示 spender、token、amount、deadline、chainId；
    
-   禁用或强提醒危险的 eth\_sign；
    
-   大额钱包和交互钱包分离。
    

## **5\. AI Agent 自动交易测试重点**

如果测试一个 AI Agent 自动把 USDC 存进收益池，不能只看“能不能跑通”。

重点检查：

-   钱包权限：Agent 用什么钱包签名？私钥是否安全？
    
-   Allowance 生命周期：是否无限授权？是否只授权本次额度？用完是否 revoke？
    
-   ChainId：是否发到正确链？
    
-   Token 地址：不同链的 USDC 地址不同，不能只看 symbol。
    
-   收益池真实性：vault 地址、APY、TVL 是否来自可信 API？有没有更新时间？
    
-   Slippage / minAmountOut：swap 或 deposit 是否有最小到账保护？
    
-   Nonce 管理：连续交易是否会因为 pending 卡住？
    
-   RPC / API 失败处理：timeout、429、502、节点异常时，前端不能误报成功。
    
-   用户确认流程：是否展示金额、spender、chain、vault、收益、风险？
    
-   日志记录：记录 user address、chainId、token、spender、amount、tx hash、RPC response、error、timestamp、模型推荐依据。
    

核心句：

> _AI Agent 自动交易不能只测“能不能跑”，要测权限、数据真实性、链上执行、失败处理和日志追踪。_

## **我的总结**

今天的内容让我更清楚 Web3 support 的排查顺序。

交易问题不能只看前端状态，要从 hash 来源、广播、chainId、RPC、nonce、gas、pending 状态逐层确认。授权问题也不能只看“有没有 approve”，还要理解 permit、allowance、无限授权和盲签风险。

对 AI Agent 来说，自动交易测试的重点不是让模型完成动作，而是确认权限边界、数据来源、用户确认、失败处理和日志证据都完整。

## **打卡短版**

今天学习了 Web3 钱包和交易排查，重点包括 tx hash 查不到、nonce 错误、approve / permit、盲签风险，以及 AI Agent 自动交易测试。

我的核心理解是：前端显示成功不等于链上成功。Tx hash 查不到时，要先确认 hash 来源，再确认是否广播、是否查错链、RPC 状态、nonce、gas 和 pending 状态。

我也区分了 approve 和 permit：approve 是链上授权，permit 是离线签名授权，但最终都可能形成 allowance，让 spender 调用 transferFrom 转走 token。盲签危险不在 gas，而在用户签了自己看不懂、但可能可执行的意图。

如果测试 AI Agent 自动把 USDC 存进收益池，不能只测能不能跑，要重点测钱包权限、allowance 生命周期、chainId、token 地址、vault 真实性、slippage、nonce、RPC 失败处理、用户确认和日志追踪。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->










# **Day 3 学习笔记：AI x Web3 API Support FAQ**

日期：2026-05-20  
来源：[**https://github.com/bbainthug/ai-web3-api-support-kit**](https://github.com/bbainthug/ai-web3-api-support-kit)  
读取版本：99f17e5

## **今日学习主题**

今天把学习内容整理成了一个 API Support / Developer Support FAQ。

这个 FAQ 的价值不是“背概念”，而是把 LLM API 和 Web3 场景里的常见问题拆成：

`用户现象 -> 问题原因 -> 排查路径 -> 解决方案 -> 技术支持回复`

这说明我开始从“学习者视角”转向“技术支持 / 开发者支持视角”。

## **1\. Token 超限不是文件大小问题**

Solidity 合约审计时，如果 API 报：

`context length exceeded token limit exceeded maximum context length exceeded`

核心原因通常是输入超过模型上下文窗口。

关键理解：

-   LLM 不是按文件 KB 处理输入，而是按 token 处理。
    
-   Solidity 代码里有大量符号、括号、地址、import、注释和重复结构，token 可能比直觉更多。
    
-   长合约不应该一次性全塞给模型。
    

更好的做法：

-   按 contract / function / module 拆分；
    
-   先分析结构，再定位高风险模块；
    
-   删除无关注释和依赖；
    
-   必要时换长上下文模型；
    
-   最后汇总多轮审计结果。
    

## **2\. 模型生造代币，本质是数据源和验证问题**

如果模型生成了不存在的代币，比如 USDT\_PLUS，不能只怪 prompt。

原因可能有三层：

-   模型层：LLM 按概率生成，看起来合理不等于真实。
    
-   参数层：temperature 太高会增加发散和幻觉。
    
-   数据层：没有接 RPC、explorer、协议 API、RAG 或真实数据源。
    

Web3 事实敏感信息不能让模型凭语言模式猜：

-   token symbol；
    
-   合约地址；
    
-   chainId；
    
-   APY / TVL；
    
-   协议名称；
    
-   空投规则；
    
-   安全事件。
    

正确方向是：模型负责解释，事实来自工具和数据源。

## **3\. SSE / Stream 解决的是体验问题**

流式输出不是为了让模型更准，而是为了改善长回答体验。

普通 JSON 返回：

`模型生成完整答案 -> 服务端一次性返回 -> 用户等待很久`

SSE / Stream：

`模型生成一段 -> 服务端推一段 -> 前端边收边显示`

适合开启 stream 的场景：

-   聊天；
    
-   长文本；
    
-   代码生成；
    
-   合约审计报告；
    
-   投资分析报告；
    
-   多步骤推理展示。
    

不一定需要 stream 的场景：

-   短分类；
    
-   关键词提取；
    
-   后台任务；
    
-   必须完整解析的 JSON 结构输出。
    

## **4\. System Prompt 不是硬规则**

今天一个很重要的点：system prompt 是软约束，不是程序里的 if/else。

写了“不要编造”只能降低幻觉概率，不能保证模型永远不编。

如果产品允许模型直接输出合约地址、收益率、代币名称，但没有验证层，那就是产品设计问题。

更稳的方案：

-   prompt 要求无法验证时返回 unknown 或 null；
    
-   接入 RPC、explorer API、协议官方 API、RAG；
    
-   后端校验合约地址、chainId、token metadata、数据更新时间；
    
-   验证失败时拦截，不直接展示给用户。
    

## **5\. LLM 评测不能只看谁说得像专家**

比较两个模型是否适合 Solidity 审计，不能只看文风。

应该固定变量：

-   同一批测试合约；
    
-   同一个 prompt；
    
-   同样的 temperature；
    
-   同样的 max tokens；
    
-   同样的输出格式；
    
-   同样的评分标准。
    

测试样本要覆盖：

-   已知漏洞合约；
    
-   正常合约；
    
-   真实项目代码片段；
    
-   边界样本。
    

评分重点：

-   是否找到真实漏洞；
    
-   是否漏掉高危漏洞；
    
-   是否误报；
    
-   是否解释清楚攻击路径；
    
-   修复建议是否可执行；
    
-   多次运行是否稳定。
    

安全审计看的是准确性、可验证性和可复现性，不是表达是否华丽。

## **我的总结**

今天的核心收获是：LLM API 问题要分层排查。

不能把所有问题都归因成“模型不听话”。一个可靠的 AI x Web3 产品至少要同时考虑：

-   输入是否超上下文；
    
-   参数是否适合任务；
    
-   是否接入真实数据源；
    
-   prompt 是否给出清楚边界；
    
-   产品层是否有校验和拦截；
    
-   评测是否固定变量和标准答案。
    

这和我的主线方向很一致：AI x Web3 Dev Tooling 的重点不是让 AI 自信输出，而是让它能被验证、能被排查、能被审计。

## **后续 TODO**

-   用 tokenizer 实际估算一次 Solidity 合约 token 数。
    
-   跑一个 streaming API demo 或阅读官方 stream 示例。
    
-   找一个简单漏洞合约，做一次模型审计评测样本。
    
-   把 FAQ 里的 5 个案例扩展成可验证实验。
    
-   给每个 FAQ 加上“如何复现 / 如何验证”的小节。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->











# **Day 2 学习笔记：LLM 底层机制与 Agent 自动化**

日期：2026-05-19  
主题：LLM 原理 / QKV Attention / 推理阶段 / 采样控制 / Agent

## **1\. LLM 不是数据库**

今天最重要的理解：大模型不是“查资料”的系统

训练结束后，原始文本不会像数据库一样被模型逐条保存。模型真正留下的是大量参数，也就是权重。输入文本会被切成 token，再转成 embedding，进入模型做矩阵计算

所以 LLM 的回答不是“查出来”的，而是根据上下文和参数“算出来”的概率结果。

这也解释了为什么模型会幻觉：它擅长生成最像答案的文本，但不天然知道什么是事实。

## **2\. QKV Attention：上下文匹配机制**

Attention 可以理解成 token 之间的大规模匹配和信息聚合。

-   Q，Query：当前 token 想找什么信息。
    
-   K，Key：每个 token 提供什么语义标签。
    
-   V，Value：每个 token 真正携带的信息内容。
    

模型会用 Q 和 K 做匹配，得到 attention score，再按权重吸收对应的 V。这样每个 token 的向量都会被上下文重新影响。

简单说：Attention 让模型知道“当前词应该重点参考上下文里的哪些词”。

## **3\. Prefill 和 Decode**

LLM 推理分成两个阶段：

-   Prefill：处理用户输入。所有输入 token 可以并行计算，所以速度相对快。
    
-   Decode：生成回答。模型一次只能生成下一个 token，因为它不能提前看到未来输出，所以是自回归串行过程。
    

生成过程大概是：

`输入 -> 生成 A 输入 + A -> 生成 B 输入 + A + B -> 生成 C`

这也是为什么长回复会慢：每个新 token 都要依赖前面的历史。

## **4\. Temperature 控制输出风格**

Temperature 控制模型采样的随机性。

-   Temperature = 0：更稳定，更适合代码、合约、数据提取、审查。
    
-   Temperature 较高：更发散，更适合文案、创意、社媒内容。
    

对 AI x Web3 来说，涉及链上事实、代码、安全、合约解释时，应该更偏低温度和可验证输出。

## **5\. Agent：模型加上工具和循环**

Agent 不是单纯聊天。它更像：

`Agent = LLM + Memory + Tools + Action Loop`

ReAct 流程可以理解为：

`Thought -> Action -> Observation -> Thought -> ... -> Final Output`

也就是模型先思考要做什么，再调用工具，比如 API、终端、脚本，然后观察结果，再继续修正。

这让模型从“只会输出文本”变成“能执行一套任务流程”。

## **6\. 我的理解**

LLM 本质是概率生成机器，不是事实源。Agent 则是在模型外面加工具、记忆、日志和循环，让它能做事。

但越接近执行，风险越高。尤其在 Web3 场景里，Agent 可以帮我查数据、写脚本、解释交易，但签名、转账、授权、合约写入必须人工确认。

## **打卡短版**

今天学习了 LLM 的底层运行逻辑和 Agent 自动化机制。

我的理解是：LLM 不是数据库，回答不是查出来的，而是 token 经过 embedding、attention 和大量矩阵计算后生成的概率结果。QKV attention 负责让 token 在上下文中互相匹配和吸收信息；Prefill 阶段处理输入比较快，Decode 阶段因为自回归生成只能串行。

另外，Temperature 控制输出随机性，链上事实、代码和安全场景应该偏低温度。Agent 则是在 LLM 外面加上工具、记忆和 action loop，让模型能从“生成文本”变成“调用工具并根据结果继续修正”。

对 AI x Web3 来说，我今天最大的收获是：AI 可以帮我理解、整理、调用工具，但不能被当成事实源，更不能绕过人工确认去做签名、转账、授权或合约写入
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->












# **学习笔记：钱包原理、链上支付与 Learning Agent 配置**

日期：2026-05-18  
主题：Week 1 - Web3 基础 + AI Learning Agent

## **今日学习概览**

今天主要学了三件事：

1.  钱包的基本原理：钱包不是“装钱的软件”，而是管理私钥、生成地址、发起签名和链上交易的入口。
    
2.  链上支付和传统支付的不同：传统支付依赖银行、支付机构和清结算系统；链上支付依赖用户签名、区块链网络、Gas、交易确认和公开可验证的账本。
    
3.  配置自己的 learning agent：把 Codex 配置成 AI x Web3 School 的学习助手，用它来整理课程、生成学习计划、维护 GitHub repo、产出笔记和 proof-of-work。
    

## **1\. 钱包的核心原理**

### **钱包不是账户本身**

Web3 钱包更像一个“钥匙管理器 + 签名工具 + 链上交互入口”。

资产并不是存在钱包软件里，而是记录在区块链状态里。钱包通过私钥证明“我有权控制某个地址”，然后发起签名或交易。

### **几个关键概念**

-   助记词：通常用于恢复钱包，可以推导出私钥。绝对不能泄露。
    
-   私钥：控制地址资产和权限的核心秘密。谁拿到私钥，谁就能控制对应地址。
    
-   公钥 / 地址：地址可以公开，用来接收资产或作为链上身份。
    
-   签名：用私钥对某个消息或交易做授权证明。
    
-   钱包 App：帮用户管理密钥、展示交易内容、连接 DApp、发起签名和广播交易。
    

### **重要理解**

钱包里显示的余额，本质上是钱包通过 RPC / 节点 / 索引服务读取链上状态后展示出来的结果。钱包不“保存余额”，链保存状态，钱包保存控制权。

所以安全边界非常清楚：

-   可以公开：地址、交易哈希、区块浏览器链接。
    
-   不能公开：助记词、私钥、真实 API key、签名授权的敏感内容。
    
-   需要人工确认：签名、授权、转账、合约写入。
    

## **2\. 链上支付 vs 传统支付**

### **传统支付的基本路径**

传统支付通常是：

用户发起支付 -> 支付机构 / 银行校验 -> 账户记账 -> 清算结算 -> 商户或收款方到账。

特点：

-   账户通常绑定真实身份。
    
-   支付过程依赖银行、支付公司、卡组织等中介。
    
-   用户体验上比较“可逆”：可能有退款、拒付、风控冻结、人工客服介入。
    
-   底层账本不是公开的，用户只能看到平台给出的账单记录。
    
-   信任基础是机构信用、监管、账户体系和清结算网络。
    

### **链上支付的基本路径**

链上支付通常是：

用户用钱包构造交易 -> 私钥签名 -> 交易广播到链上网络 -> 验证者 / 矿工打包 -> 区块确认 -> 区块浏览器可验证。

特点：

-   地址就是链上身份入口，但地址不等于完全匿名。
    
-   支付动作由私钥签名授权。
    
-   交易一旦确认，通常不可随意撤销。
    
-   状态公开透明，可以用交易哈希、区块高度、事件日志验证。
    
-   需要 Gas，失败的交易也可能消耗 Gas。
    
-   信任基础是密码学签名、共识机制、链上状态和智能合约规则。
    

### **关键差异表**

| 维度 | 传统支付 | 链上支付 |
| --- | --- | --- |
| 身份入口 | 银行账户 / 支付账户 | 钱包地址 |
| 授权方式 | 密码、短信、人脸、银行风控 | 私钥签名 |
| 记账系统 | 银行 / 支付机构内部账本 | 区块链公开账本 |
| 中介角色 | 强依赖支付机构和清结算系统 | 依赖链和合约，减少中心化中介 |
| 可逆性 | 可退款、拒付、冻结、人工处理 | 确认后通常不可逆 |
| 成本 | 手续费通常由商户或平台承担 | 用户或发起方支付 Gas |
| 可验证性 | 依赖平台账单 | 可用 explorer 验证交易 |
| 风险点 | 账户冻结、风控、信息泄露 | 私钥泄露、错误签名、错误地址、合约风险 |

## **3\. 支付背后的“信任模型”不同**

传统支付更像是在信任机构：

-   银行帮我保管账户。
    
-   支付机构帮我传递指令。
    
-   清算网络帮我完成最终结算。
    
-   出问题时可以找平台或客服处理。
    

链上支付更像是在信任规则：

-   私钥能证明控制权。
    
-   节点验证交易是否合法。
    
-   共识决定状态更新。
    
-   智能合约按代码执行。
    
-   交易记录公开可查。
    

这也解释了为什么 Web3 里“确认交易”比传统支付里的“点击付款”更重：一笔链上交易可能改变资产、授权、合约状态，而且撤回成本很高甚至不可撤回。

## **4\. 配置 Learning Agent 的收获**

今天也把 Codex 配置成了自己的 AI x Web3 School learning agent。

这个 agent 的作用不是替我学习，而是帮我把学习过程变成一个持续 workflow：

-   读取课程任务和 Handbook。
    
-   根据我的背景生成个人学习计划。
    
-   把学习内容整理成 notes、logs、prompts、demos。
    
-   维护 GitHub 学习仓库结构。
    
-   生成每日打卡草稿。
    
-   形成 Handbook feedback 草稿。
    
-   提醒我哪些操作需要人工确认。
    

### **当前 agent 工作流**

1.  我提供课程公告、学习内容或个人经历。
    
2.  Agent 整理成结构化学习任务。
    
3.  Agent 更新本地学习 repo。
    
4.  我人工审核笔记和打卡内容。
    
5.  涉及 GitHub push、WCB 提交、钱包签名、链上交易时，必须由我确认。
    

### **Agent 安全边界**

这个边界非常重要：

-   Agent 可以生成解释、计划、代码、笔记和检查清单。
    
-   Agent 可以维护本地 repo。
    
-   Agent 不应该保存 API key、私钥、助记词。
    
-   Agent 不应该自动签名、转账、授权、写合约。
    
-   Agent 如果要调用 WCB API、提交任务或 push GitHub，需要先确认。
    

## **5\. 我今天形成的理解**

钱包是 Web3 的“控制权入口”，支付是“签名后的链上状态变更”。传统支付把复杂性藏在机构系统里，链上支付把规则、状态和结果公开出来，但也把更多安全责任交还给用户。

对 AI x Web3 来说，最关键的问题不是“让 AI 自动付款”，而是：

-   AI 能不能解释清楚用户将要签什么？
    
-   AI 能不能区分读操作和写操作？
    
-   AI 能不能在高风险动作前停下来？
    
-   AI 能不能留下日志、hash、区块高度和 explorer 链接？
    
-   用户能不能复核每一步？
    

所以我后续的学习方向会继续围绕：chain-aware context、tool log、human confirmation、wallet permission 和 read-only Web3 agent。

## **6\. 可以放进打卡的短版**

今天学习了钱包原理、链上支付和传统支付的差异，也继续配置了自己的 AI x Web3 learning agent。

我最大的收获是：钱包不是“存钱的账户”，而是私钥、签名和链上交互的入口；链上支付不是传统支付那种依赖机构清结算的流程，而是由用户签名、网络验证、区块确认和公开账本共同完成的状态变更。

同时我把 Codex 配置成学习 agent，用来整理课程、维护 GitHub repo、生成学习笔记和打卡草稿。但涉及 API key、GitHub push、WCB 提交、钱包签名、转账和合约写入的动作，都必须由我人工确认。

下一步我会完成测试网交易和最小合约读写，把交易哈希、Gas、区块高度、合约地址和 explorer 链接记录到 repo。

## **7\. 下一步 TODO**

-   准备一个测试专用钱包。
    
-   获取 Sepolia 或课程指定测试网测试币。
    
-   完成一笔测试网转账并记录交易哈希。
    
-   用 Remix / Hardhat / Foundry 部署一个最小合约。
    
-   完成一次合约读取和一次合约写入。
    
-   把 AI 生成 -> 人工复核 -> 钱包确认 -> 链上执行 -> explorer 验证画成流程图或补进 demo。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
