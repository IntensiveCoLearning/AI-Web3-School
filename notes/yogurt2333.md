---
timezone: UTC+8
---

# yogurt2333

**GitHub ID:** yogurt2333

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-11
<!-- DAILY_CHECKIN_2026-06-11_START -->
**项目状态：** `M2: 筛选+证据 ✅ → M3: Agents+评分 🔄`

**✅ 今日合入 dev**

PR 内容

#46 **Issue 9A: TS Decision Scorer** — 评分入口 + 7种Veto降级

#48 **Issue 10: Dossier 审计哈希** — 确定性SHA-256分层hash

**📌 关掉的 Issue**

\- `#12` Issue 8（外部风险透镜）— 8A/8B 都合了，父 Issue 收掉

\- `#36` Issue 9A — 合入 dev 没自动关，手动关

**💡 产品决策**

\- v2 规划：用户自定义投资策略配置窗口（Veto开关、Lens权重、风险偏好）— 当前记录到 memory

**🚧 下一步**

\- **Issue 9B**（Python 评分引擎）— 你哥们的任务

\- **Blocked by:** 9B 完成后 TS 才能接 **Issue 11（链上锚定）**
<!-- DAILY_CHECKIN_2026-06-11_END -->

# 2026-06-10
<!-- DAILY_CHECKIN_2026-06-10_START -->

**项目：ColdRead — 可审计 AI 预测市场决策系统**

\> 早上是机器在跑，下午是人+机器双引擎

\### 上午（6 个 Issue + 8 个 PR）

\# 干了啥

#1 领域合约定义 ✅

#2 Topic 输入 + 空筛选路径 ✅

#3 Polymarket 盘口获取 ✅

#21 CandidateMarket 类型 + 拒绝原因枚举 ✅

#22 可注入 ID 生成 ✅

#23 架构边界：隔离 Polymarket 原始数据与领域对象 ✅

docs README + 企鹅 meme「你为啥直接 commit 到我的 master 分支啊」🐧

\### 下午（M2 完工 + M3 过半）

\# 干了啥

#4 Market Screener — 8 道 hard gate + 一边倒信号检测

#5 Tavily 背景确认 + majorCounterevidence 拦截

#6 证据快照冻结 + 决策档案草稿

#7A TS Market Structure Lens Adapter

#7B **Python 端 Market Structure 引擎**（PR #41）

#8A **TS External Risk Lens Adapter**（PR #42）

— 重构：全部剩余 Issue 拆成 TS(A) + Python(B) 协作对

\### 配置变更

\- **Codex + OpenCode 双引擎**起用 —— Codex 规划架构，OpenCode + DeepSeek V4 Pro 省额度搞实现

\- **Python 哥们入队** —— `agents/` 目录建好，跨语言 IPC 通过 stdin/stdout pipe 打通

\### 数据

\`\`\`

代码量：+2600 行（TS + Python）

测试：双语言全覆盖，npm run test 全绿

PR：8 个合入 + 2 个待审

总 Issue 进度：7/14 done + 2 pending review = 9/14

\`\`\`
<!-- DAILY_CHECKIN_2026-06-10_END -->

# 2026-06-09
<!-- DAILY_CHECKIN_2026-06-09_START -->


\*\*创建了 `cold_read` 仓库 — 可审计 AI 预测市场决策系统\*\*

\*\*产出物：\*\*

文件 内容

\*\*📄 [CONTEXT.md](http://CONTEXT.md)\*\* 22 个核心术语中英双语定义（含避坑对照词表），完整架构/流程说明

\*\*📋 ADR 0001\*\* 决策档案上链锚定 — 链下存全量数据，链上存 Hash

\*\*📋 ADR 0002\*\* 选 Agent 推荐而非合成 — Scorer 从推荐中选，不自己编新方案

\*\*📋 ADR 0003\*\* MVP 只跟共识方向走 — 不做逆向押注

\### 🧠 今天定下的关键架构决策

1\. \*\*选择制\*\*：最终决策从多个 Agent 推荐里\*\*挑一个\*\*，而不是缝合出一个新决定。Scorer 只做选择 + 否决（→ HOLD）

2\. \*\*审计优先\*\*：每轮决策的证据快照、Agent 推理、最终决定都锚上 testnet，可回溯

3\. \*\*保守走法\*\*：MVP 只做 \*\*一边倒信号 + 小仓位跟随\*\*，不 contrarian、不对冲

4\. \*\*双维度分析\*\*：市场结构 Agent（看价格/流动性/结算） + 外部风险 Agent（看新闻/争议）

\### 🔄 流程闭环

\`\`\`

决策主题 → 盘口筛选器 → 证据快照固定 → 多Agent分析

→ 评分器选出/否决 → HOLD或上链执行 → 审计锚定 ✅

\`\`\`
<!-- DAILY_CHECKIN_2026-06-09_END -->

# 2026-06-08
<!-- DAILY_CHECKIN_2026-06-08_START -->



## **当前进展**

已实现 V1 的 01-04 号问题。

## **01\. Electron 应用外壳**

构建了基于 Electron + TypeScript + React 的桌面应用初始版本。

已实现：

-   Electron 主进程、预加载脚本、渲染进程以及共享的 TypeScript 结构。
    
-   设置窗口占位符。
    
-   可拖拽的透明 HUD 窗口。
    
-   系统托盘菜单占位符。
    
-   系统桥接接口占位符。
    
-   `npm run dev`、`npm run smoke` 和 `npm run build` 脚本。
    
-   Prettier 代码格式化以及 Vitest 测试运行器。
    

## **02\. 语义动作运行时**

构建了用于控制器驱动的代理工作流的内部动作模型。

已实现：

-   类型化的语义动作 ID。
    
-   Codex CLI、Claude Code 和终端模式配置文件。
    
-   默认控制器绑定。
    
-   控制器输入到语义动作的解析器。
    
-   回退到终端模式的配置文件策略。
    
-   针对动作解析和回退行为的单元测试。
    

## **03\. 设置存储及基础设置界面**

构建了第一个真正的设置页面和持久化设置层。

已实现：

-   存储在 Electron `userData` 中的持久化应用设置。
    
-   通过 Electron `safeStorage` 实现的 API 密钥安全存储。
    
-   转录提供商设置。
    
-   兼容 OpenAI 的基础 URL 和模型设置。
    
-   API 密钥的保存/删除及按下显示行为。
    
-   基础 URL 验证。
    
-   必填模型验证。
    
-   目标窗口白名单编辑器。
    
-   默认配置文件选择器。
    
-   HUD 位置选择器。
    
-   开机自启动和后台控制器开关。
    
-   用于检查控制器输入解析结果的动作调试器。
    

## **04\. HUD 状态栏及事件扩展**

将 HUD 从静态占位符升级为状态反馈层。

已实现：

-   透明的、始终置顶的 HUD 窗口。
    
-   开发模式下可拖拽的 HUD。
    
-   空闲状态。
    
-   录音状态。
    
-   待处理转录文本状态。
    
-   已绑定目标窗口状态。
    
-   无目标窗口状态。
    
-   错误状态。
    
-   基于设置项的 HUD 位置。
    
-   设置页面中的 HUD 预览控件，用于手动验证。
    

拖拽穿透功能目前有意暂留为桩代码，以便在开发期间 HUD 仍然可以拖拽。

## **验证**

当前的验证命令：

powershell

```
npm run smoke
npm run build
```

两项均通过。

## **备注**

-   应用仍处于早期脚手架/MVP 模式。
    
-   尚未接入真实的控制器输入。
    
-   尚未接入真实的窗口定位功能。
    
-   尚未接入真实的键盘注入功能。
    
-   尚未接入真实的语音转录功能。
    
-   HUD 预览按钮通过模拟状态来进行产品验证。
    

## **下一个问题**

计划中的下一个问题：

`05-implement-window-target-detection-and-manual-binding.md`
<!-- DAILY_CHECKIN_2026-06-08_END -->

# 2026-06-05
<!-- DAILY_CHECKIN_2026-06-05_START -->




\## 🎯 核心论点：AI Agent 正在移动 Web3 选型的临界点

分享者提出了一套 **「成本-收益天平」** 框架：

\### ❌ 过去用区块链的 4 大代价

代价 说明

**性能 & 费用** 延迟高、有 gas 费

**隐私** 数据公开是双刃剑

**用户教育成本** 助记词/私钥/签名…普通用户上手难

**开发成本** 像 Rust 一样，学习曲线陡，工程师难招

\### ✅ AI Agent 带来的变化

**成本侧变轻：**

\- L2/ZK-rollup 改善了性能费用问题

\- ZK 证明等技术让隐私场景可上链

\- **Agent 可以作为人与区块链的交互接口**（自然语言交互）

\- **Agent 本身可以成为区块链用户**（链上交互 ≈ 调 API）

\- AI 辅助编程大幅降低 Solidity/区块链开发门槛（类比 Rust + AI coding assistant）

**收益更容易兑现：**

\- Agent 之间需要跨系统协作 → 区块链作为\*\*中立协调层\*\*天然匹配

\- 两个不互信的 Agent 交互 → 链上状态就是共同认可的信息源

\> 以前问「为什么要用区块链？」 **一两年后可能会问「为什么不采用区块链？」**

\## 🔧 实战工作流：5 步闭环

分享者用 **Codex CLI**（Codex 的 `/go` 模式）演示了完整流程：

1\. **确认需求**（本质复杂性）→ 用 grill-me / challenge 技能让 Agent 盘问设计决策，产出 PRD + issue plan

2\. **实现**（附属复杂性）→ 拆成垂直切片，「rough loop」模式（每子任务新上下文）

3\. **调试** → Computer Use 控制浏览器 + 钱包做端到端验证

4\. **部署** → 给 Agent 合适的工具（部署脚本、区块浏览器 API）

5\. **合约升级** → 复用同个流程，旧合约 freeze 测试兼容性

**关键技术点：**

\- **本质复杂性 vs 附属复杂性**（引自《人月神话》Brooks 的"没有银弹"论文）

\- 本质复杂性（要解决什么问题）→ 留给人+Agent对话澄清

\- 附属复杂性（怎么实现）→ 尽量交给 Agent

\- implementation notes 工具记录 Agent 执行过程中的额外决策

\## 🌐 Conflux 树图定位

\- 首席科学家：\*\*姚期智院士\*\*（图灵奖得主）

\- 核心团队出自 **姚班**

\- **国内唯一合规公链**（有屏蔽 token 的合规空间）

\- 海外有 **EVM 全兼容的 E-space**

\- 香港方向有深入布局
<!-- DAILY_CHECKIN_2026-06-05_END -->

# 2026-06-04
<!-- DAILY_CHECKIN_2026-06-04_START -->





**今日完成：**

**1\. 深度调研 Cobo CAW + 方向复盘**

\- 详读 Cobo Agentic Wallet 架构（MPC+TSS+Pact+Skills+CLI+80条链）

\- 关键认知：AGW 方向与 Cobo CAW 高度重叠 → 决定不做重复造轮子，转做上层创意应用

\- 对比了 CAW Pact（密码学硬约束）vs Aflex Mandate（语义软约束）的设计差异

**2\. 参与 5050 Workshop / Aflex Financial Harness**

\- 三层风控体系：规则过滤 → 意图匹配 → 模型评估

\- Mandate 机制：一次批任务，Agent 在沙箱内自由执行

\- 产品已集成百度千帆，11K+ 活跃 Agent

**3\. 多方向脑暴 + 选题整理**

\- 方向一：\*\*Agent × Polymarket\*\* — Agent 做社会学判断，在预测市场找定价偏差

\- 方向二：\*\*倒反天罡 — Agent 雇人\*\* — Agent 发任务 → 真人接单 → 验收打款

\- 方向三：\*\*Aflex 调度上层应用\*\* — 订阅管理 / 零花钱管家 / 拼单

\- 方向四：\*\*CAW 上层创意应用\*\* — Agent 社交钱包 / 交易 TV 秀

\- 生成了 9 页选题会 PPT（横向对比表 + 推荐方向 + 对齐问题清单）

**4\. 知识库整理**

\- 同步 ai-web3-school-cohort-0 笔记到 GitHub（10 files, 3029 lines）

\- 同步 compiler-notes（Obsidian）到 GitHub — 新增 Polymarket 概念页 + 视频摘要

**问题 / Blocker：** 选题方向待今晚和哥们对齐后最终确定

**明日计划：** 选题会锁定方向 → 砍 72h 复杂度 → 拆 MVP 任务清单

**学习时间：** ~5h（视频学习 + 架构调研 + Workshop + 方向脑暴 + PPT 产出）
<!-- DAILY_CHECKIN_2026-06-04_END -->

# 2026-06-03
<!-- DAILY_CHECKIN_2026-06-03_START -->






\### ✅ 今天做了什么

**1\. 参加 Cobo Agentic Wallet 专项 Workshop** 🎯

\- 昨天 kickoff 提到的那场（6/3 晚 8 点），5050/Mu 老师主讲

\- 逐字稿已分析，MPC 钱包原理、Pact 审批流程、CLI/API/SDK 全套

\- 关键收获：\*\*Pact 机制\*\*是 Cobo 赛道评审最看重的亮点

**2\. 复试 Hackathon 启动会信息**

\- 看过昨天的逐字稿后确认：AGW 天然对齐 Cobo 赛道

\- Demo Day 要求（5min MVP 演示，纯 PPT 不行）

\- 提交截止 6/13 中午 12:00

**3\. AGW 项目全量体检 + 会议准备**

\- 三层代码全读了（Vue3 / Spring Boot / FastAPI）

\- Mock 闭环已完整可跑，状态机全通

\- 整理出 [**agw-meeting-prep.md**](http://agw-meeting-prep.md)（已有）

\- 明确下一层业务代码就 3 件事：OpenAI parse / RPC 余额 / Cobo 执行

\### 📝 还没做的（打卡流程下一步）

1\. **写 daily/**[**2026-06-03.md**](http://2026-06-03.md)（上面这些内容往里填就行）

2\. **Commit & push** 到 GitHub repo

3\. **WCB 平台打卡**
<!-- DAILY_CHECKIN_2026-06-03_END -->

# 2026-06-02
<!-- DAILY_CHECKIN_2026-06-02_START -->







**Today's Focus**

\- \[x\] 参加 AI Web3 Agentic Builders Hackathon 启动会 ✅

\- \[x\] Codex 生成的 AGW 代码同步到 GitHub ✅

\- \[x\] 写项目 README ✅

**1\. 🏁 Hackathon 启动会**

参加了 AI Web3 Agentic Builders Hackathon 的 kickoff，关键信息：

**两个赛道：**

\- **Combo（Agentic Economy）** — Agent 安全管理链上资产，权限风控。AGW 完美对齐

\- **ZAI（Long Horizon Task）** — Agent 自主完成复杂 Web3 任务

**时间线：**

\- 6/2 启动 → 6/13 提交 → 6/14 Demo Day → 6/17 公布结果

\- 总奖池 7000 USDT（各赛道 3500）

**Submit 要求：** 必须可演示的 MVP，5min Demo，纯 PPT 不行。 **学习支持：** Workshop + Office Hour，Combo 赛道 6/3 晚 8 点有专项 Workshop。

**2\. 🥇 AGW 代码上链**

Codex 生成的 AGW MVP 代码推到了 GitHub： 👉 [https://github.com/yogurt2333/agw-wallet](https://github.com/yogurt2333/agw-wallet)

**当前状态：**

\- 三端骨架完整：Vue 3 前端 + Spring Boot 后端 + FastAPI Agent

\- Mock Mode 可跑通完整流转闭环

\- 写了 README，项目介绍、架构图、快速开始都有了

**下一步：**

\- 接 OpenAI function calling（替换当前 regex parse）

\- 接真实 Sepolia RPC 余额

\- 目标：黑客松提交前跑通真实转账

**3\. 🥈 关于"粘合剂"的思考**

跟 Hermes 聊了一轮"一直在写胶水代码怎么破"——结论是 AI 时代的产品本质就是胶水工程，破局点不是不写 glue，而是升级 glue 的层次：从粘 API 变成粘产品认知。AGW 的"Agent 是提议者不是决策者"这个定位本身就是价值，比代码值钱。

**Key Takeaways**

1\. AGW 天然对齐 Combo 赛道，不需要 pivot

2\. MVP 先跑 Mock 闭环是对的 — 我们已领先大部分参赛者

3\. Cobo CAW 的 Pact 机制是 Combo 赛道的标准答案

4\. 11 天时间接 OpenAI + RPC，Demo 日稳

**Next Steps**

\- \[ \] 6/3 晚 8 点参加 Combo 赛道专项 Workshop

\- \[ \] 接 OpenAI function calling

\- \[ \] 接 Sepolia RPC 真实余额

\- \[ \] 准备 5min Demo 演讲稿

**Check-in Stats**

\- 学习时间：~2h
<!-- DAILY_CHECKIN_2026-06-02_END -->

# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->








**今日完成：**

**1\. AGW MVP 技术规格书（609行）✅**

\- 完整架构设计：Vue3 前端 → Spring Boot 后端 → Python Agent（OpenAI FC）→ Cobo CAW

\- 15+ API 接口定义（request/response 完整示例）

\- 数据模型（SQL + Pydantic）、前端组件树、Vue 组件树

\- 分 Phase 1-3 实现优先级

**2\. MVP 已实现 ✅（本机 Codex 已完成）**

\- 还没传 GitHub，待提交

**3\. VC 讲座学习 ✅**

\- 听 Tracy 讲 VC 视角：更看重落地和驱动力 > 宏大叙事

\- 反思 AGW 定位：工程型项目适合小奖，大奖需要更"哇塞"的方向

\- 后续 AdventureX 考虑 pivot 到更激进的方向（AI × Funkot / 游戏自动化 / 开发者工具）

**4\. VSCode Remote SSH 排错**

\- 确认是网络层问题（安全组/本地 22 端口封锁），非服务端问题

**问题 / Blocker**

\- 上传代码到 GitHub（待办）

**明日计划**

\- push GitHub

\- Phase 2-3 继续推进（风险分析 + Cobo 执行）
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->









**1\. Week 3 开发排期确认 ✅**

\- 完整 7 天开发排期已落地`hackathon/week3-dev-plan.md`）

\- 明天 5/31 正式启动 Day 1：脚手架搭建 + NL 输入框

\- 三人分工已对齐：我（前端/产品）、哥们 A（Agent/Cobo SDK）、哥们 B（后端/运维）

**2\. 深度对话 + 认知回吹 ✅**

\- 和朋友聊了他在北京 AI 初创的体验——全员 vibe coding、2 周搓出移动护理（人工一年）

\- 带回来的核心拷问：\*\*人和 AI 都没办法解决问题的时候，怎么办？\*\*

\- 我的回答：测试锚点 + 模块边界 + 别让 AI 加速堆屎山的速度

\- 和朋友公司的情况对比，更清楚地看到 AGW 的定位——不是拼功能速度，而是拼安全性 + 可解释性

**3\. 等两位同学的选题反馈 🕐**

\- 两个同学在出另一份选题，没问题就按 AGW 方向走

\- 今天等结果中，暂不冒进搭项目

**问题 / Blocker**

\- 无，等同学选题确认后明日准时开工

**明日计划**

\- **Week 3 Day 1 正式启动！**

\- 初始化 Vue 3 + Vite 项目

\- 搭 NL 输入框 + 发送按钮

\- 和哥们 A/B 对齐 API 接口规范
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->










\# Project Proposal: AI Guard Wallet (AGW)

\> **Week 2 核心产出** | 方向：Wallet / Permission / Safe Execution 状态：🥇 初步提案

\## 1. 一句话描述

一个\*\*不只帮你做、还能跟你说清楚\*\*的 AI Agent 钱包——让非技术用户在理解中参与决策，而不是在恐慌中点确认。AI 当翻译 + 安全助理，Cobo CAW / ERC-4337 当执行层，用 Pact 机制限死 Agent 的权限边界。

\## 2. 目标用户与真实场景

\### 目标用户画像

\> **"长期持有 BTC/ETH，认可加密资产的价值，但不信任自己操作区块链的能力。"**

典型人物：小张，30 岁，互联网运营，2021 年买了 ETH 一直放着。转账要翻出助记词 → 打开 MetaMask → 复制地址 → 反复核对 → Gas 选多少？→ 等多久？→ 每一步都怕错。最后决定"还是放着吧"。

\### 场景 A：安全转账（核心场景）

\`\`\`

"帮我把 0.1 ETH 转给 0xED38...5a51"

\`\`\`

Agent 要做的事：

1\. ✅ 身份校验（人脸 / 密码）

2\. ✅ 翻译意图 → 构造交易（0.1 ETH = ~$300，地址首次转账，Gas 当前低位）

3\. ✅ 风险分析（地址已标记安全、余额充足、金额未超日限额）

4\. ✅ 用户确认 → Cobo Pact 内执行的自动上链

5\. ✅ 结果反馈（"已转出，预计 30s 确认，TX: 0xabc..."）

\### 场景 B：定投策略（进阶场景）

\`\`\`

"每周一拿 50 USDC 买 ETH，跑一个月"

\`\`\`

Agent 做的事：

1\. ✅ 提交 Pact：意图（DCA）、执行计划（每周一 9am）、策略（USDC→ETH）、限制（$200/月）

2\. ✅ 用户审批 Pact → 自动执行

3\. ✅ 风险探针：遇到 Gas 异常高 → 暂停等待审批

4\. ✅ 完成条件（$800 累计或 30 天期满）→ 自动撤销权限

\### 场景 C：紧急冻结（安全场景）

\`\`\`

"停！我的钱包是不是有异常？"

\`\`\`

Agent 做的事：

1\. ✅ 展示最新 5 笔操作

2\. ✅ 标记可疑交易

3\. ✅ 一键冻结 Agent 权限（Cobo freeze）

4\. ✅ 导出审计日志供事后分析

\## 3. 核心流程（7 步安全弧）

\`\`\`

用户意图

│

▼

① 身份校验 ─────→ 失败 → 拒绝 + 记录

│ 通过

▼

② AI 翻译 + 解释（金额估值 / 地址分析 / Gas 说明）

│

▼

③ 风险探针 ─────→ 高危（钓鱼地址 / 超额 / 异常时段）→ 暂停 + 人工仲裁

│ 中低风险

▼

④ 用户确认执行 ──→ 拒绝 → 记录意图但不执行

│ 批准

▼

⑤ 钱包层执行（Cobo Pact / ERC-4337 UserOp / 签名）

│

▼

⑥ 链上确认 ─────→ 失败 → Agent 解释原因 + 推荐补救

│ 成功

▼

⑦ 结果反馈（TX 链接 / 余额更新 / 日志记录）

\`\`\`

\### 自动化 vs 人工边界

自动 人工确认

风险分析、交易构造、Gas 估算 身份校验（人脸/密码）

余额查询、地址分析 最终签名确认

结果解释、日志整理 重试决定

限额内自动执行 超限暂停审批

定时任务（DCA 等） 紧急冻结

\## 4. 技术方案（初步）

\`\`\`

┌─────────────────────────────────────────────────┐

│ 用户层 │

│ 自然语言输入 + 身份验证（人脸 / 密码） │

└─────────────────────┬──────────────────────────┘

│

┌─────────────────────▼──────────────────────────┐

│ Agent 层 │

│ - NL → 链上意图翻译 │

│ - 风险分析引擎（地址 / 金额 / 行为模式） │

│ - 交易构造（calldata / value） │

│ - Pact 策略生成 / 提交 │

└─────────────────────┬──────────────────────────┘

│

┌─────────────────────▼──────────────────────────┐

│ 钱包执行层 │

│ - Cobo CAW：Pact 管理 + MPC 签名 + 策略引擎 │

│ - ERC-4337：EntryPoint + UserOperation + │

│ Bundler（如果需要 AA 而非 Cobo 原生机制） │

│ - Safe（如果需要多签/Guard 扩展） │

└─────────────────────┬──────────────────────────┘

│

┌─────────────────────▼──────────────────────────┐

│ 链底层 │

│ Sepolia（dev）→ Base / Ethereum（prod） │

│ Alchemy / Infura RPC │

└─────────────────────────────────────────────────┘

\`\`\`

\### 组件关键决策

| 组件 | 选项 | 暂定 | 理由 |

|------|------|------|------|

| Agent 框架 | OpenAI SDK / LangChain / Agno | **Cobo SDK + OpenAI** | Cobo 官方有 OpenAI SDK 集成示例，Agno 也有 5min quickstart |

| 钱包层 | Cobo CAW / 自建 AA / Safe | **Cobo CAW** | Pact 机制直接解决"权限边界"这个核心问题，不用自己造轮子 |

| AA 协议 | ERC-4337 / Cobo 原生 | **Cobo 原生 MPC** | Cobo 的核心是 MPC 而非传统 AA，但只要能用 Pact 授权即可 |

| 链选择 | Sepolia → Base | **Sepolia 测试 → Base 主网** | 低 Gas + 演进性 |

\---

\## 5. 最小功能集（MVP）

\- \[ \] Agent 接收 NL 指令 → 解析为转账操作

\- \[ \] 身份校验环节（简单密码 + 钱包签名验证）

\- \[ \] 风险分析（地址是否首次转账、金额 vs 余额、Gas 状态）

\- \[ \] 用户确认 UI（金额 / 地址 / Gas / 风险等级）+ **确认界面可追问**（地址来源 / Gas 说明 / 估值换算）

\- \[ \] Cobo Pact 提交 + 转账执行

\- \[ \] 结果反馈（TX hash / 区块浏览器链接）

\- \[ \] 审计日志（谁什么时候做了什么）

\### 排除（本次不做）

\- DCA / 定时任务 → Week 3 扩展

\- 多链支持 → 先 single chain

\- 社交恢复 / 多签 → 先单用户

\- Telegram Bot 前端 → 先 CLI / Web UI

\---

\## 6. 验证方式

验证维度 方法 指标

功能正确 测试网真实转账 + 区块浏览器验证 TX confirmed

安全边界 尝试越权操作（超限额 / 黑名单地址） Pact 正确拒绝

用户体验 找 LXDAO 群友非技术用户测试 完成一次全流程 < 2min

风险覆盖 故意给钓鱼地址 / 超 Gas Agent 正确标记风险

\## 7. 风险边界（Agent 绝对不能做的事）

🔴 绝对禁止 绿灯操作

持有或触碰私钥 通过 Cobo SDK 提交有 Pact 约束的交易

用户不确认就执行转账 限额内自动执行 + 超限暂停审批

修改自己的 Pact 策略 Pact 策略由用户审批，Agent 不可修改

导出私钥 / 助记词 仅审计日志导出

代表用户签名智能合约（无审查） 合约调用必须有白名单 + 用户确认

\## 8. 与 Week 3 黑客松的关系

这份 Proposal 是 **Bootcamp 附属黑客松（6 月中）** 的项目种子。

阶段 内容

Week 2（本周） ✅ 出 Proposal → ✅ 补读 Cobo CAW + ERC-4337 → ✅ 画流程图

Week 3（5.31-6.6） MVP 开发：NL → 转账流程跑通

附属黑客松（6.14） 可演示 Demo：用户说"转 0.1 ETH"→ 完成

有余力 扩展到多链 / DCA / 多用户 / Telegram Bot 前端

\## 9. 未解决的问题（blocker）

\- \[ \] Cobo CAW 的免费额度 / 测试模式 → 需要确认开发阶段是否免费

\- \[ \] 身份校验的具体实现（传统密码 vs 钱包签名 vs 生物识别）

\- \[ \] Agent 如何获取链上数据做风险分析（自有 RPC / Cobo 内置查询）

\- \[ \] MPC 与 ERC-4337 的边界——Cobo 的 MPC + Pact 是否足够，还是需要额外 AA 层？
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->











## 今日完成

### 1\. 项目初步 Proposal ✅

-   完成 AI Guard Wallet 项目提案（`hackathon/project-proposal.md`）
    
-   三个场景：安全转账（MVP）/ DCA 定投（扩展）/ 紧急冻结（安全）
    
-   一句话定位：不只帮你做、还能跟你说清楚——让非技术用户在理解中参与决策
    

### 2\. 补读 Cobo CAW + ERC-4337 ✅

-   Cobo CAW：Pact 机制（Intent/Plan/Policies/Completion）、MPC 签名、3 阶段策略引擎
    
-   ERC-4337：UserOperation / EntryPoint / Bundler / Paymaster / Factory 概念
    
-   **决策：** MVP 阶段用 Cobo CAW MPC + Pact 即可，ERC-4337 后续扩展
    

### 3\. 流程图 ✅

-   Excalidraw 7 步安全弧流程图（已上传可分享）
    

### 4\. 确认了三个关键认知

-   **风险边界：** Agent 是提议者+执行者，永远不是决策者
    
-   **知情同意：** 确认界面不是死板的信息展示，可以追问
    
-   **MVP 原则：** 宁可让用户多点一次确认，也不让 Agent 越权
    

## 问题 / Blocker

-   暂无，今晚三人开会对齐后进入 Week 3 开发排期
    

## 明日计划

-   三人同步会，对齐方向和分工
    
-   确认 Cobo CAW 开发者注册
    
-   Week 3 开发排期
    

## 学习时间

~3h（提案构思 + 文档阅读 + 流程图 + 材料整理）
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->












**问题地图** 扫了全部 6 个方向

**主方向选择** Wallet / Permission，写了为什么不是纯 AI / 不是纯 Web3

**真实用户** 持币但不懂技术的普通人

**问题拆解** 7 步流程图 + 参与方 + AI vs Web3 分工 + 自动化边界 + 风险对策

**Next Steps** 明天出 proposal + 补 Cobo CAW + ERC-4337
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->













**1.Obsidian = RAG** 的顿悟 — 自己的笔记系统本质上就是检索+生成，打算做个 Obsidian Agentic RAG

**2.🚀 部署并验证了首个 Solidity 合约到 Sepolia**

\- 合约: `HelloWorld` — 存储+修改消息

\- 地址: `0x11eA5B31C313aE5DA3C224EfAff57CdE6B1aDF18`\]([https://sepolia.etherscan.io/address/0x11eA5B31C313aE5DA3C224EfAff57CdE6B1aDF18](https://sepolia.etherscan.io/address/0x11eA5B31C313aE5DA3C224EfAff57CdE6B1aDF18))

\- 状态: ✅ 编译 ✅ 部署 ✅ Etherscan 验证通过

\- 踩坑: Hardhat v2 vs v3、Node.js 版本兼容、PowerShell 语法、Etherscan 验证字节码匹配

3\. **调研了 Cobo Agentic Wallet** — MPC 非托管 + Pact 协议 + Recipe 技能层的 AI Agent 钱包，跟我的 AdventureX 方向直接相关
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->














\### ✅ 完成：Vibe Coding 架构设计

今天凌晨我们把 vibe coding 的分层架构落地成文档了，存在 `plans/vibe-coding-architecture.md`。

**核心架构（三层）：**

层 谁 模型 干啥

**调度层** Hermes（我） DeepSeek v4（便宜） 规划、答疑、启动 agent、总结

**执行层** OpenCode DeepSeek v4 Pro（强） 写代码、改文件、跑命令

**展示层** VSCode + tmux 无 你 SSH attach 看一手输出

**关键决策已落地：**

\- ✅ Code Agent 选 **OpenCode + DeepSeek v4 Pro**（零摩擦起步，后续无缝切 Claude）

\- ✅ 代码同步用 **VSCode Remote SSH**（零推拉，就像本地文件）

\- ✅ 信息流模式：我不当传话筒 → 规划阶段我介入，执行阶段你直接跟 agent 对话

\- ✅ 成本估算：按 vibe coding 强度月费 ≈ **¥10-30**

**待完成（还没实施的）：**

\- ⬜ 服务器装 tmux

\- ⬜ 安装 OpenCode CLI

\- ⬜ 配置 DeepSeek API Key

\- ⬜ 试跑一次端到端
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->















\### Web3 基础 — 过了一遍

章节 核心收获

🌐 **Network** 区块是批量提交，共识决定历史有效性，L2 更便宜但也更复杂

🔐 **Cryptography** 哈希防篡改、私钥=控制权、签名≠登录、Merkle Tree 高效验证

👛 **Wallet** EOA 限制多、三类动作风险不同、gas 要讲清楚、explorer 可自证

📜 **Smart Contract** 链上程序、EVM 执行环境、ABI 是接口说明书、Event 可索引日志

🏗️ **Account Abstraction** 权限从"有私钥/没私钥"变成"什么条件下允许什么动作"，Session Key 是 Agent Wallet 的核心

\### 穿插知识点

\- **Harness Engineering** — The harness beats the model（记到 Obsidian 了）

\- **MCP vs Function Calling** — FC 是"格式"，MCP 是"完整协议"，互补不互替

\- **游戏自动化** — Cradle / UI-TARS 两条路线
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
















🧭 2026 核心趋势 Agents with Wallets — Agent 自己管钱自己花

📦 项目全景表 基础设施层 / 钱包支付层 / 应用层，每个都有简介

🔥 Base 链生态 目前 Agent 项目最活跃的 L2

🎯 AdventureX 方向建议 3 个具体方向，标明了你和哥们的分工

⚠️ 冷水/批判 安全风险、Agent 智能本质、入口依赖 Web2 等问题

🔗 参考链接 今天提到的文章/视频链接全汇总

🐸 今天吃了好吃的牛蛙 是第一次吃
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

















Web3 底层原理

**交易生命周期：** 本机签名 → RPC 广播 → 内存池排队（gas高优先）→ Builder打包 → 验证者共识 → 上链 → 12min Safe → 18min Finalized

**密钥体系：** 私钥=资产控制权，签名在本地，不出门。公钥截后40位=地址。改了签名内容→ec\_recover对不上→节点拒绝

**Gas费：** 基础费🔥销毁（通缩）+ 小费💰给验证者（插队用）

**EVM：** 不跑在某个服务器，跑在每个全节点自己的电脑上。像浏览器各自跑JS渲染 → 所有节点各自跑EVM，结果一致才共识

**智能合约：** 代码部署到链上自动执行，不可篡改。条件不满足→revert回滚

**L2：** L1太慢太贵→L2在链下处理，只交结果到L1。Optimistic（等7天挑战）vs ZK（数学证明立刻确认）

**公链 vs 私链：** 公链任何人可读写，私链授权用户。跨链=连接不同链的桥

**DApp架构：** Vue/React + ethers.js调合约 = 把调API换成调链上函数

**为什么谈Web3必须谈经济：** 区块链信任不靠代码，靠经济博弈。验证者押32ETH ≈ 作恶成本>收益
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->


















\## 📋 5月19日学习总结

\### ✅ 已完成

\# 事项 备注

1️⃣ **安装 MetaMask** 手机/浏览器装好，搞定地址 0xED38…a5

2️⃣ **切换到 Sepolia 测试网** 找到了测试网络切过去

3️⃣ **领到测试币** 各 faucet 都挡了（要主网余额），找社群老哥薅到了 🧑‍🤝‍🧑

4️⃣ **🔑 发人生第一笔链上交易** 转了 0.1 ETH 给小伙伴，nonce=0（第一笔处女秀）

5️⃣ **用 RPC 查交易** 拿到了完整的交易原始数据

6️⃣ **学了一堆概念** TxHash / Nonce / Gas / EIP-1559 / Base Fee vs Tip / Burn
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->



















📅 今天（Day 1）我干了什么

时间段 做的事 状态

🛠️ 下午 初始化 learning agent、装 gh、建 GitHub repo ✅

📚 下午 获取 Week1 完整课程大纲、更新学习计划 ✅

🏦 下午-晚上 学 Web2 vs Web3 支付区别 ✅

🗣️ 晚上 参加 tc 老师分析会、消化 Web3 术语（EVM/多签/AA/Nonce/Gas/TEE） ✅

🔧 晚上 修好本机 Obsidian Git 插件同步 ✅

累计投入

⏱️ 约 **95 分钟**

其实已经在bootcomp之前部署过Hermes agent了 今天补足一些开发环境部分 明天的任务是装 MetaMask + 测试网交互
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
