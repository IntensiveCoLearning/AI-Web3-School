---
timezone: UTC+8
---

# Tengda Fan

**GitHub ID:** Aafff623

**Telegram:** @threetwoa

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->
# AI × Web3 黑客松当前状态记录

## 1\. 当前参与状态

目前我们正在参与 AI × Web3 Agentic Builders Hackathon。这个黑客松的重点不是单纯做一个概念或 PPT，而是要在短周期内完成从选题、方案设计、技术实现、Demo 展示到 README / 视频 / 提交材料的完整闭环。

我们当前所在方向群里大约有 9 人，但真正预计参与核心开发和交付的是 5 人，剩下成员可能更多承担协助、反馈、打杂或外围支持工作。因此，实际项目需要由 5 人核心小队完成主要流程。

整体上，我们是一支偏新人向的队伍，大多数成员 Web3 实战经验还不深，但有一定 AI、Agent、Vibe Coding、设计和基础开发能力。因此目前更适合选择一个范围可控、能体现 AI Agent 长程任务能力、又能稳定做出 Demo 的方向。

## 2\. 队伍成员初步情况

当前核心成员包括：

1.  九九  
    有 VLM 微调科研经历，也做过非 Web3 方向的 Agent 项目。Web3 方面是新人，希望通过这次项目迈出 Web3 第一步。
    
2.  purple sun  
    大二，偏小白，跟着教程做过 Solidity 和 Go 小项目。可以在 Web3 基础实践、合约样例、测试网操作等方面承担一部分工作。
    
3.  呱呱  
    擅长设计，也比较灵活，可以参与 UI、视觉包装、PPT、Demo 视频、项目物料等工作。
    
4.  欢  
    目前具体能力信息还不完整，后续需要进一步确认适合承担前端、后端、测试、文档还是协助类工作。
    
5.  threetwa  
    大二，Web3 刚入门，原本偏 Java 和传统项目开发，最近转向大模型应用和 AI Coding。之前做过传统项目、Agent 项目、微服务项目，也用 Vibe Coding 做过不少 Demo。Web3 还没有完整实战项目，目前主要停留在共学营实践产出阶段。
    

## 3\. 外部支持与经验来源

除了 5 人核心小队外，还有一些参加过上一次黑客松或有相关经验的成员可以提供参考和指导。他们分享的 PPT、PNG 和经验总结里有几个很重要的原则：

-   黑客松不是创业，不要一开始做过大的系统。
    
-   不要追求功能堆满，优先保证一个稳定、可演示、可讲清楚的 Demo happy path。
    
-   最后阶段不要继续疯狂加功能，而要提前准备 README、视频、PPT、提交材料、测试账号、链上证据和备用方案。
    
-   重要改动要及时同步给所有核心成员，黑客松是协作项目，不是单人单打。
    
-   好队友和稳定协作，比一个看起来很大的项目更重要。
    
-   需要体现 Web3 公共物品、协作和贡献精神，而不是各自写一块最后硬拼。
    

## 4\. 当前分工框架

目前讨论中的 5 类核心分工大致是：

1.  交付 / 路演  
    负责 5 分钟左右的项目讲解、投屏、现场表达和播放准备好的 Demo 视频。这个角色最好由最懂项目整体的人承担，不一定是写代码最多的人。
    
2.  物料 / 包装  
    负责 PPT、16:9 GitHub README 项目海报、文案、演讲稿、录制好的项目演示视频等。这个角色需要和交付 / 路演、产品策划保持强协同。
    
3.  前端  
    负责 Demo 页面、用户交互、任务流展示、视觉体验等。黑客松里前端观感会直接影响评委对项目完成度的判断。
    
4.  后端  
    负责 API、Agent 服务、模型调用、数据流、任务执行链路等。后端要服务于 Demo happy path，不宜过度架构。
    
5.  产品 + 总策划  
    负责 GitHub 仓库管理、项目提交、整体进度、任务协调、根据实际情况动态调整分工，以及保证最终交付物完整。
    

## 5\. 当前选题方向

目前讨论过的三个方向是：

1.  合约迁移
    
2.  财务系统
    
3.  链上小额贷
    

初步判断下，合约迁移最适合当前队伍和 [Z.AI](http://Z.AI) 赛道。因为它天然符合 Web3 × Long-Horizon Task：Agent 可以从读取合约项目、分析迁移风险、修改配置、生成测试、运行测试、修复错误，到输出迁移报告和 README，形成一个完整的长程任务闭环。

财务系统也有潜力，但不能做成普通后台管理系统，最好收窄成 DAO 链上财务分析 Agent，例如读取链上交易、分类收支、识别异常、生成财务报告或 DAO 提案。

链上小额贷 Web3 味道很重，但涉及抵押、利率、清算、预言机、合约安全和金融边界，对新人队伍来说风险较高，不适合作为当前首选方向。

## 6\. 当前阶段的核心目标

当前最重要的不是马上写大量代码，而是尽快把项目方向收敛下来，形成一个稳定的 Demo happy path。

需要尽快明确：

-   用户是谁？
    
-   用户输入什么？
    
-   Agent 自动执行哪些步骤？
    
-   哪一步体现 GLM-5.1 / [Z.AI](http://Z.AI) 的关键作用？
    
-   哪一步体现 Web3？
    
-   最终可验证产物是什么？
    
-   Demo 失败时有没有备用方案？
    
-   5 个人分别承担什么不可替代的交付物？
    

## 7\. 当前个人定位思考

我目前更适合承担偏“项目整合 + AI Agent workflow + 技术协调 + 文档表达”的角色，而不是只做单纯打杂或纯 UI / 纯合约。

可能适合参与的方向包括：

-   帮团队梳理项目目标和 Demo happy path。
    
-   参与 Agent 工作流设计。
    
-   协调 Claude Code / AI Coding 的开发流程。
    
-   整理 README、架构说明、项目文档和提交材料。
    
-   跟进不同成员的进度，帮助把分散产出拼成完整项目。
    
-   在后期参与 Demo 视频脚本、路演表达和项目包装。
    

下一步需要继续和队友确认具体分工，避免职责过散，也避免关键任务无人负责。
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->

参加了今晚 19:00 的第一场活动。说三个技术向的收获和下一步：

**1\. 我知道的技术接合点**  
活动里被反复提到的两个具体方向：

-   **去中心化推理验证**：用 Web3 的共识/质押机制去验证 AI 输出（比如模型推理结果上链校验），类似 opML 或 zkML 的轻量版。
    
-   **AI agent 的链上资源调度**：agent 需要调用算力/API/数据，用智能合约做支付和权限管理，而不是中心化后端。
    

**2\. 我目前能接住的东西**  
我会基础的 solidity + python，正在学 LangChain。我 Week 2 的问题地图原本偏“AI 生成内容的版权上链”，但听完后觉得太重。  
我现场问的一个技术问题（简化版）：“有没有人试过用链上简单 mapping + 链下向量数据库，做一个极简的 agent 调用记录？不是为了防作弊，只是为了可审计。”  
答案是：完全可以，而且不需要高性能 L1，L2 或 DA 层就够。

**3\. 我接下来的具体行动**

-   本周末：用 **Foundry + 本地 ollama** 搭一个 agent 调用日志的 demo 合约（不跑真推理，只记录 request/response hash）。
    
-   下周三前：把 Week 2 问题地图里“版权方向”砍掉，换成 **“轻量级 agent 调用审计 + 小额激励”** 这个更小的 slice。
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->


今日打卡｜Week 2 Day 5

今天是"收尾 + 冲刺"的一天。

做了三件重要的事：

第一，发现并修复了一个历史遗留问题。

今天系统核查了 Week 2 所有日期的 [TASK.md](http://TASK.md)，发现 05/26、05/29、05/30

三天的任务信息其实是同一次批量拉取（05/23）的产物，之后就没再更新过——活动可能新增了但我没有同步过来。果断重新拉取校正，包括补录了 Cobo

Agentic Wallet 的学分任务（+30）。这个教训记住了：不能一次性批量拉取就完事，之后每天顺手往前看 2-3 天。

第二，终于把 05/25 和 05/26 的直播笔记整理入库了。

Long-term Memory for AI Agents + Cobo Agentic Wallet，两场都是 Hackathon 方向直接相关的直播。特别是 Cobo 那场——MPC + Pact + Recipe

三层架构，和我正在设计的 Session Key 策略在架构上高度同构。直播里提到 Agent 操作链上资产的四大风险（Prompt Injection / 影子账户 / 无限权限

/ 僵尸授权），也是我设计 Policy 时必须考虑的边界。

第三，Hackathon 方向终于定了——Smart Account + Session Key。

一句话定位：给 AI Agent 一把"只能在某段时间、某个金额内、做某类事"的钥匙，用户随时可查看、可撤销。核心闭环是：创建 Smart Account → 签发受限

Session Key → Agent 在边界内执行 → 用户随时撤销。选定理由：生态成熟、与预习笔记衔接紧密、4 周能做完完整 Demo。Cobo

的直播对这次方向收敛帮助很大。

同时整理了一份 Hackathon 复习计划，把涉及的知识点按优先级分层（P0 必须掌握 / P1 必须了解 / P2

扩展加分），对应预习笔记精读清单，总复习时间约 3 小时。放在了 Obsidian vault 的学习库里，方便之后反复查阅。

\---

产出：TASK 同步校正（3个日期）+ 2场直播笔记入库 + Hackathon 复习计划报告 + 方向确定推送

明天：Neo-Cypherpunk 录播入库 + 开始精读 P0 知识点（ERC-4337 + Agent-Wallet）+ 05/29 三场活动参加

\---

今晚 Co-learning 带着四个问题去：MVP 范围砍法对不对、Audit Trail 设计选哪个方案、ZeroDev 接口能力边界、有没有同行可以组队。期待讨论结果
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->



## **1\. Co-learning 实时参加（5.27）**

  
MVP 还要再砍一刀。原本想的「金额 + 有效期 + 操作白名单」三件套，4 周根本做不完。  
先只做 **金额上限 + 7 天有效期** 这两个维度，白名单放到 Phase 2 再说。这样合约和前端都能控制住。

  
明天开始翻 ZeroDev 的 Session Key 文档，重点看 SDK 能不能支持我们自定义策略表达式。

* * *

## **2\. Neo-Cypherpunk 实时参加（5.27）**

**核心结论**  
隐私不是“藏起来”，而是 **我可以选给谁看、给看多少**。  
Cypherpunk 那句原话——“隐私是选择性地向世界披露自己的权利”，刚好就是 Session Key 的设计思路：用户不是把钱包扔给 Agent，而是给它开一个 **有条件的、透明的窗口**。  
这个说法比干巴巴讲“安全”有劲多了，打算拿它当 Hackathon 提案的开场。

1.  隐私分两层：技术层（加密、ZK、混币）和文化层（个人主权的社会契约）。Session Key 的时间 / 金额 / 操作范围，其实就是 **“选择性披露”的工程落地**。
    
2.  用户敢不敢给 Agent 授权，关键看能不能 **验证这个权限是严格受限的**。Session Key 的链上规则 + 随时能撤销，就是在建立这种信任。
    
3.  当 Agent 变成你的数字替身，它的行为数据谁说了算？  
    设计一个 **双层审计**：你本地保留完整日志，链上只存哈希证明。既能查账，又不泄露隐私，这个点可以做成 Hackathon 的亮点。
    

  
把“选择性披露”这条故事线揉进 Hackathon Proposal，替换掉原来那套“可限制、可审计、可撤销”的功能性表达。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->




\---

今日完成｜Week 2 Day 3 · 5/26

参加活动：

\- Virtuals（19:00-20:00）✅

\- Cobo Agentic Wallet PM 分享（20:00-21:00）✅

有效笔记（6 条）：

【Virtuals】

1\. Agent 资产化逻辑：创建→持币→分享收益，Smart Account 的 programmable 特性天然适合链上自动化收益分配

2\. 去中心化所有权与托管安全的张力：Agent 所有权交给社区后，操作权限如何安全托管？Session Key 是这个问题的答案

3\. Agent 代币化经济模型可作为 Hackathon 扩展设计方向

【Cobo Agentic Wallet】

4\. Agent 钱包的特殊需求：7×24 运行、高频交互，无法像人类一样手动确认每笔交易，需要预设策略 + 自动审批流

5\. Session Key 的"有限权限"设计哲学（时间/金额/操作类型限制）与 Cobo 策略引擎思路高度一致

6\. MPC + AA 的结合点：MPC 管密钥分片，AA 管权限策略，Session Key 可作为两者的桥梁

对 Hackathon 的启发：

Smart Account + Session Key 的方向被进一步验证。Cobo 的机构级实践说明"有限权限"是 Agent 钱包的刚需，不是可选功能。Virtuals 的 Agent

经济模型则为项目扩展提供了代币化设计空间。

下一步：

明天开始阅读 ZeroDev Session Key 文档，评估 SDK 接入难度，进入技术预研阶段。

\---

附：repo 链接

\- 完整笔记：daily-log/week-2/2026-05-26/[2026-05-26.md](http://2026-05-26.md)

\- Hackathon 方向文档：hackathon/[DIRECTION.md](http://DIRECTION.md)
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->





# **2026-05-25**

> Week 2 · Day 2 · 周一

## **今天做了什么**

-   **19:00-20:00**：实时参加 Co-learning — 带着 Week 2 repo 和 Hackathon 候选方向问题去讨论，主要聊了 Smart Account + Session Key  
    方案的可行性，从其他学员那里拿到了几个参考项目
    
-   **20:00-21:00**：实时参加 Long-term Memory for AI Agents — 讲了 Agent 长期记忆的三种模式（短期上下文、外部存储、参数微调），结合  
    Hackathon 选题听了 Agent 持久化上下文的部分，重点记了 3 条笔记
    

## **产出与检验**

### **1\. Co-learning 实时参加（+20 学分）**

-   带着 repo 和问题参加了讨论
    
-   主要议题：Week 2 方向探索进展、Hackathon 选题初步想法（Smart Account + Session Key）
    
-   从同学那里了解到几个相关参考：ERC-4337 入口合约、ZeroDev Session Key SDK、Biconomy 的 paymaster 模式
    

### **2\. Long-term Memory for AI Agents 实时参加（+20 学分）**

3 条有效笔记：

1.  **短期上下文窗口 vs 外部存储** — Agent 长期记忆的核心矛盾是 token 成本和信息完整性的 trade-off，RAG + 向量数据库是目前主流解法
    
2.  **参数微调不适合频繁更新** — 适合沉淀稳定知识，不适合动态对话记忆，这个结论对 Hackathon 选型有参考价值
    
3.  **On-chain 记忆的可能性** — 把 Agent 状态写到链上作为可验证记忆，和 Web3 结合点很自然，直接对应 Hackathon 候选方向 #4
    

## **收获 / 卡点**

-   Long-term Memory 那个 talk 直接把 Hackathon 候选方向 #4（On-chain Data Analysis Agent）和 #1（Smart Account）串起来了 — Agent  
    需要持久化记忆，链上记忆是自然延伸，但 gas 成本是个实操问题
    
-   Co-learning 上和其他学员交流后，Smart Account + Session Key 方向的可行性比预想的高，生态工具也比较成熟了
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->







# **2026-05-23**

> Week 1 · Day 7 · 周六 · Week 1 收尾日

## **今天做了什么**

-   **早上 09:30-10:30**：实时参加 Open Agentic Economy 直播（Sophia / Ethereum Foundation）— ERC-8004 / x402 / CROPS 原则 / Agent 经济与 Builder Path
    
-   **全天**：把整个 Week 1 漏掉的直播笔记全量回补，并把整套清洗工作流沉淀成可复用的项目模块
    
-   接通 WCB Agent API 并沉淀 `/wcb-sync` 自动拉任务 skill
    
-   加餐：B 站「17 小时最全 Web3 教程」5 课笔记入库（biliGPT 清洗）
    
-   全部按规范分 10+ commits 落地
    

## **产出与检验**

### **1\. Open Agentic Economy 实时参加（+20 学分）**

| 产出 | 链接 |
| --- | --- |
| 直播完整笔记（biliGPT 清洗 + 章节截图） | meetings/open-agentic-economy.md |
| WCB 任务提交 proof | 截图 + 1 条关键信息（见 TASK.md） |

### **2\. 仓库基建：toolkit/ 工具箱模块（新建）**

| 产出 | 链接 |
| --- | --- |
| 工具箱总览 | toolkit/README.md |
| 直播录播笔记沉淀工作流 SOP | toolkit/workflows/livestream-note-pipeline.md |
| 工具登记 | toolkit/tools/README.md（含 biliGPT 简短登记） |
| GUIDE.md 新增"直播录播笔记规范"节 | GUIDE.md |

### **3\. Week 1 直播笔记全量回补（10 份）**

| 日期 | 笔记文件 | 来源 |
| --- | --- | --- |
| 5/17 | meetings/opening-ceremony.md | biliGPT |
| 5/18 | meetings/ai-web3-basics.md · meetings/go-learning.md | biliGPT 替换 + 旧版迁移 |
| 5/19 | meetings/hermes-from-zero.md | biliGPT |
| 5/20 | meetings/web3-fundamentals.md · meetings/co-learning.md | biliGPT · 占位 |
| 5/21 | meetings/agent-24h-workflow.md（32 KB） | biliGPT |
| 5/22 | meetings/co-learning.md · meetings/week1-recap.md | 占位 ×2 |
| 5/23 | meetings/open-agentic-economy.md | biliGPT |

### **4\. WCB Agent API 接通 + /wcb-sync skill**

| 产出 | 状态 |
| --- | --- |
| 密钥配置到 User 环境变量 WCB_AGENT_SECRET_API_KEY | ✅ |
| 测通 5 个 API：health.check / users.getProfile / events.listForLearner / tasks.listForLearnerByIds / users.getMyPermissions | ✅ |
| 沉淀 /wcb-sync skill | ✅ |
| 实测拉取整个营期 27 events + 20 tasks | ✅ |

### **5\. extras/web3/17h-web3-course/ 加餐 5 课入库**

调度 **5 个 parallel agent** 并行清洗 biliGPT 导出（每课 30-90 处格式修复）：

| 课 | 文件 | 大小 |
| --- | --- | --- |
| 02 | 02-solidity-hello-world.md | 35 KB |
| 03 | 03-fundme-erc20.md | 35 KB |
| 05 | 05-hardhat-testing.md | 36 KB |
| 06 | 06-ccip-cross-chain.md | 30 KB |
| 07 | 07-next-steps.md | 10 KB |
| 系列 README | 17h-web3-course/README.md | — |

### **6\. Week 2 任务预拉入库（7 份 TASK.md）**

通过 `/wcb-sync` 拉 Week 2 全周（5/24-5/30）：10 events + 3 unique tasks，分发到 7 个日期。**发现 Week 2 实时/回放任务 WCB 平台还没创建**，仅 5/29 Week 2 例会分享 +5 任务可见，其他活动作占位。

### **7\. Week 1 任务 proof 三份就位（待提交）**

| 任务 | proof 文件 | 学分 |
| --- | --- | --- |
| 5/20 观看回放 Web3 运行原理 | 2026-05-20/proof-web3-fundamentals-replay.md | +10 |
| 5/22 实时参加 Week 1 例会 | 2026-05-22/proof-week1-recap-attendance.md | +20 |
| 5/22 例会分享（书面学习感受） | 2026-05-22/proof-week1-recap-share.md | +5 |

### **8\. 索引 + cascade 同步**

| 文件 | 改动 |
| --- | --- |
| README.md | 目录树补 toolkit/ + meetings/ · Highlights skill 数 3→4 · 5/23 进度行 · 最后更新日期 |
| week-1/__index__.md | 实时状态 5/19/20/21/23 ✅ · 删 5/23 Co-learning 空挡 · 学分汇总 |
| daily-log/__index__.md | 日级模板补 meetings/ 行 |
| CLAUDE.md / steering.md | 决策记录补 05-22 (extras) + 05-23 (toolkit) |
| 5 个 daily index.md / 4 个 YYYY-MM-DD.md | 补 meetings 反向引用 |

### **9\. Commits（10 个已落地 + 本轮新增）**

```
 2e28d78 docs(readme): cascade 同步 — toolkit 入口 + meetings 子目录 + 5/23 进度行 + skill 数 3→4
 bec79ad chore(week-1): 索引校正 — 5/19/20/21/23 实时直播标 ✅ + 删 5/23 Co-learning 空挡 + 学分汇总微调
 824165d log(05-23): Open Agentic Economy 直播笔记 — Sophia · ERC-8004 / CROPS / Builder Path
 e89b8e3 log(05-22): Co-learning + Week 1 例会占位笔记 — 元数据 + 简短叙事
 ec5d929 log(05-21): AI 下乡直播笔记 — Sunny · 24h Agent 工作流 + Claude/Codex 协作
 0a10d4c log(05-20): Web3 运行原理直播笔记 — BRUCE · 交易生命周期 + Co-learning 占位
 ada2d7a log(05-19): Hermes 从 0 到 1 直播笔记 — Dra 老师 · Agent 五大阵营 + WSL 部署
 8e1e7d2 log(05-17): 开营仪式直播笔记 — ZAI / GLM 5.1 / Hermes 配置 + CROPS 学习方法论
 bc52e89 log(05-18): biliGPT 完整版替换 ai-web3-basics 手写简版 — 同主题但内容更结构化
 ce397ac chore(toolkit): 新建工具箱 + 直播录播笔记工作流 — biliGPT 沉淀路径标准化
```

本地领先 origin/master **10 commits**，extras 5 课 + WCB skill + 3 份 proof + Week 2 预拉 + 5/23 收尾日志待用户 review 后 commit。

## **收获 / 卡点**

-   **Sophia 讲 ERC-8004 那一刻是 Week 1 概念串联的关键节点** —— 终于把 AI Agent 经济、可编程约束、身份 / 声誉 / 支付基础设施串成一个完整故事。Hackathon 方向倾向 Smart Account + Session Key（候选 #1）。
    
-   **biliGPT 输出的格式问题是工程化机会** —— 不是抱怨工具，而是沉淀清洗工作流 + 多 agent 并行调度。这套流程后续每场直播都能复用。
    
-   **/wcb-sync skill 是真正的"自动化 PoW" 范式** —— 不再手动从 WCB 页面复制任务，整个 4 周 27 events / 20 tasks 一次 API 拉取就搞定。未来每天的 TASK.md 起点都会从这个 skill 开始。
    
-   **Week 2 WCB 任务尚未发布** 是个意外发现，但 7 份 TASK.md 已预先用活动信息填好，平台一发布任务我可以快速 sync 一次更新。
    

## **明天打算**

-   周日（5/24）休息，整理本周 Proof-of-Work Pack 总结
    
-   把今天累积的所有改动 review + commit
    
-   准备 Week 2：重点关注 5/25 Long-term Memory（Hermes 痛点）和 5/26 Cobo Agentic Wallet（对应 Hackathon 候选 #3）
    
-   Week 2 结束前定 Hackathon 方向
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->








# **2026-05-22**

> Week 1 · Day 6 · 周五

## **今天做了什么**

-   持续打磨 Hermes Agent（DigitalOcean 服务器上跑的那套）的配置与行为
    
-   仓库基建一波：Cursor MCP 接入 + `.gitignore` 最小版 + 新建 `extras/` 加餐模块（web3 / ai / crossover）+ README cascade 同步
    
-   B 站某条 Web3 视频复盘，补齐若干基础概念
    
-   白天大部分时间被学校占满：上课 + 体育课
    
-   晚上三连直播：[Z.AI](http://Z.AI)（白天）→ Co-learning ｜任务推进与答疑（19:00）→ Week 1 例会（20:00，只听未上麦）
    

## **产出与检验**

> 今天笔记没动 pre-study 主线，重点在基建 + 复盘 + 例会输入。

| 产出 | 状态 | 备注 |
| --- | --- | --- |
| Hermes Agent 配置调教 | ✅ | DigitalOcean 服务器侧持续打磨 |
| Cursor MCP 接入 + .gitignore | ✅ | commit fc36833 |
| extras/ 加餐模块骨架 | ✅ | commit c79aa5d · 三主题：web3 / ai / crossover |
| README cascade 同步 | ✅ | commit 0985195 · 目录树补 extras + 修正预习状态标记 |
| B 站 Web3 视频复盘 | ✅ | 基础概念补齐（视频条目暂未沉淀到 extras/web3/） |
| Z.AI 实时参加 | ✅ | +20 学分 |
| Co-learning 实时参加 | ✅ | +20 学分（无回放） |
| Week 1 例会实时参加 | ✅ | +20 学分（未上麦，+5 学分分享任务未领） |

## **收获 / 卡点**

-   仓库结构的"溢出空间"终于补齐：`extras/` 给课程外的 B 站 / 博客 / 推特碎片一个归属地，不再散落在浏览器收藏夹
    
-   三场直播一晚连轴下来，例会上没主动上麦（错过 +5 学分的「例会分享」任务）—— 后续 Week 2 类似机会可以提前准备 5 分钟的口播
    
-   Hermes Agent 在服务器侧的"调教"感觉像 prompt 工程 + 长任务可观测性的混合体，越往后越需要把"候选答案"变成"可被代码验证的对象"
    

## **明天打算**

-   Week 1 收尾日（5/23）：实时参加 Open Agentic Economy + Co-learning，整理本周 Proof-of-Work Pack
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->










# **2026-05-21**

> Week 1 · Day 5 · 周四 , 直达 Github Repo: [https://github.com/Aafff623/web3career-study-track/tree/master/daily-log/week-1/2026-05-21](https://github.com/Aafff623/web3career-study-track/tree/master/daily-log/week-1/2026-05-21)

## **今天做了什么**

-   20:00 参加直播：AI 下乡计划｜AI 在 Web3 的应用（Zoom / X 直播），事后挑关键点回看
    
-   用 GitHub Student Pack 申请 DigitalOcean 2C4G 云服务器
    
-   服务器部署 Agent，对接 Telegram Bot
    
-   配置 OpenCode Go 套餐，作为后续 Agent 开发的编码工具
    
-   回炉前三章 pre-study：AI 基础 / Web3 基础 / AI × Web3 Bridge
    

## **产出与检验**

> 今天笔记没动，重在理解串联；产出主要是基建到位。

| 产出 | 状态 | 备注 |
| --- | --- | --- |
| DigitalOcean 2C4G 云服务器 | ✅ | 通过 GitHub Student Pack 申请，作为 Agent 运行环境 |
| Telegram Agent 上线 | ✅ | 服务器部署 + Bot 对接完成 |
| OpenCode Go 套餐 | ✅ | 后续 Agent 编码主力工具 |
| 前三章 pre-study 复盘 | ✅ | ai-foundations · web3-foundations · ai-web3-bridge |
| 直播关键点回看 | ✅ | X 直播回放 |

## **收获 / 卡点**

-   今天主动减少了"记新笔记"的冲动，把精力压回到**理解串联**——AI / Web3 / Bridge 三块的概念在脑子里重新跑了一遍，比写新笔记更有用
    
-   第一次走通"领服务器 → 部 Agent → 接 Telegram"的链路，从 pre-study 的"读"切到"动手做"
    
-   直播听下来印象最深的是：AI 落地场景里很多问题不是技术问题——身份、信任、协作的边界，恰好是 Web3 能补位的地方
    

## **明天打算**

-   进入 Week 1 收尾日：直播课 + Recap + 开始酝酿 Hackathon 选题方向
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->











Github 直达地址: [https://github.com/Aafff623/web3career-study-track/tree/master/daily-log/week-1/2026-05-20](https://github.com/Aafff623/web3career-study-track/tree/master/daily-log/week-1/2026-05-20)

# **2026-05-20**

> Week 1 · Day 4 · 周三

## **今天做了什么**

-   完成全部 42 节预习笔记 + 实践文件（AI 11 + Web3 10 + AI×Web3 15 + Frontier 6）
    

## **产出与检验**

> 实际产出（笔记 / 代码 / 截图 / Tx Hash / commit）+ 怎么证明做完了。 涉及的预习概念直接引用 `pre_study/.../README.md`，不在这里重复展开。

| 产出 | 状态 | 链接 |
| --- | --- | --- |
| AI×Web3 · Chain-aware-Context 笔记 | ✅ | pre_study/ai-web3-bridge/Chain-aware-Context/README.md |
| 交易上下文包练习 | ✅ | practice-tx-context-pack.md |
| AI×Web3 · Web3-Tool-Use 笔记 | ✅ | pre_study/ai-web3-bridge/Web3-Tool-Use/README.md |
| Agent Web3 工具集练习 | ✅ | practice-agent-web3-toolkit.md |
| AI×Web3 · Agent-Workflow 笔记 | ✅ | pre_study/ai-web3-bridge/Agent-Workflow/README.md |
| Swap 工作流设计练习 | ✅ | practice-swap-workflow-design.md |
| AI×Web3 · Agent-Wallet 笔记 | ✅ | pre_study/ai-web3-bridge/Agent-Wallet/README.md |
| 受限支付钱包练习 | ✅ | practice-restricted-payment-wallet.md |
| AI×Web3 · Machine-Payment 笔记 | ✅ | pre_study/ai-web3-bridge/Machine-Payment/README.md |
| Agent API 支付流程练习 | ✅ | practice-agent-api-payment-flow.md |
| AI×Web3 · Settlement-and-Escrow 笔记 | ✅ | pre_study/ai-web3-bridge/Settlement-and-Escrow/README.md |
| 报告 Escrow 流程练习 | ✅ | practice-report-escrow-flow.md |
| AI×Web3 · Agent-Identity 笔记 | ✅ | pre_study/ai-web3-bridge/Agent-Identity/README.md |
| Agent Profile 设计练习 | ✅ | practice-agent-profile-design.md |
| AI×Web3 · Agent-Trust-and-Reputation 笔记 | ✅ | pre_study/ai-web3-bridge/Agent-Trust-and-Reputation/README.md |
| Agent 声誉记录练习 | ✅ | practice-agent-reputation-record.md |
| AI×Web3 · AI-Oracle 笔记 | ✅ | pre_study/ai-web3-bridge/AI-Oracle/README.md |
| 任务完成判断 Oracle 练习 | ✅ | practice-task-completion-oracle.md |
| AI×Web3 · Verifiable-AI 笔记 | ✅ | pre_study/ai-web3-bridge/Verifiable-AI/README.md |
| AI 风险评分验证方案练习 | ✅ | practice-verifiable-ai-design.md |
| AI×Web3 · AI-Security 笔记 | ✅ | pre_study/ai-web3-bridge/AI-Security/README.md |
| Prompt Injection 防护练习 | ✅ | practice-prompt-injection-defense.md |
| AI×Web3 · AI-Privacy 笔记 | ✅ | pre_study/ai-web3-bridge/AI-Privacy/README.md |
| Agent 数据流图练习 | ✅ | practice-agent-data-flow.md |
| AI×Web3 · AI-Sovereignty 笔记 | ✅ | pre_study/ai-web3-bridge/AI-Sovereignty/README.md |
| Agent 主权检查表练习 | ✅ | practice-agent-sovereignty-checklist.md |
| AI×Web3 · Governance-AI 笔记 | ✅ | pre_study/ai-web3-bridge/Governance-AI/README.md |
| 治理提案摘要模板练习 | ✅ | practice-proposal-summary-template.md |
| AI×Web3 · Decentralized-AI 笔记 | ✅ | pre_study/ai-web3-bridge/Decentralized-AI/README.md |
| 开放推理网络规格练习 | ✅ | practice-open-inference-network.md |
| Frontier · Agentic-Commerce 笔记 | ✅ | pre_study/frontier/Agentic-Commerce/README.md |
| Agent API 购买流程练习 | ✅ | practice-agent-api-purchase-flow.md |
| Frontier · Dev-Tooling 笔记 | ✅ | pre_study/frontier/Dev-Tooling/README.md |
| 合约阅读+测试建议练习 | ✅ | practice-contract-reading-test.md |
| Frontier · Wallet-and-Permission 笔记 | ✅ | pre_study/frontier/Wallet-and-Permission/README.md |
| AI 换币助手权限策略练习 | ✅ | practice-ai-swap-permission-policy.md |
| Frontier · AI-Security 笔记 | ✅ | pre_study/frontier/AI-Security/README.md |
| 恶意文档+权限隔离练习 | ✅ | practice-malicious-doc-defense.md |
| Frontier · Governance 笔记 | ✅ | pre_study/frontier/Governance/README.md |
| 来源保真治理摘要练习 | ✅ | practice-source-preserving-summary.md |
| Frontier · Open-Track 笔记 | ✅ | pre_study/frontier/Open-Track/README.md |
| 开放赛道项目规格练习 | ✅ | practice-open-track-project-spec.md |

## **今日直播笔记**

> 来源：Week 1 直播课 — Web3 核心原理

### **钱包、私钥与个人主权**

-   钱包 ≠ 资产存储。资产在链上账本里，钱包只管**密钥管理 + 签名 + 链上数据读取**
    
-   私钥 → 助记词 → 地址，三层关系：私钥是控制核心，助记词是可读备份（可派生多账户），地址是公钥算出来的公开标识
    
-   私钥 = 个人主权起点。随机生成就能拥有链上身份，不依赖任何平台审批
    
-   安全红线：不截图、不存网盘、不发送、不复制到不可信环境。剪贴板也不安全（恶意软件可读取/替换地址）。区块链只认签名不认人
    

### **交易的本质**

-   交易 ≠ 转账，是"我授权网络执行某件事"的数据
    
-   组成：To（目标地址）、Amount、Gas Fee、Nonce（防重放序号）、Signature（授权证明）
    
-   完整路径：Wallet 签名 → RPC/Node 传播 → Mempool 排队 → Builder 排序 → Validator 出块 → Block 可查询
    
-   本质是：身份 → 授权 → 传播 → 排序 → 执行 → 确认
    

### **区块链网络的三问**

用户点 Confirm 后，系统回答三个问题：

| 问题 | 答案 |
| --- | --- |
| 你是谁？ | 私钥、助记词、地址、签名 |
| 你要做什么？ | 交易内容、Gas、Nonce、合约调用 |
| 为什么大家相信结果？ | 节点传播、验证者出块、finality、合约状态 |

## **收获 / 卡点**

-   预习阶段 42/42 全部收工，知识框架搭完了。接下来要从"知道"转向"动手做"，Week 2 重点是选定 Hackathon 方向
    

## **明天打算**

-   Week 2 开始，交叉方向深入 + 确定 Hackathon 项目方向
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->












Github repo 直达地址: [https://github.com/Aafff623/web3career-study-track/tree/master/daily-log/week-1/2026-05-19](https://github.com/Aafff623/web3career-study-track/tree/master/daily-log/week-1/2026-05-19)

# **2026-05-19**

> Week 1 · Day 3 · 周二

## **今天做了什么**

-   参加 Co-Learning 技术直播，学习 Hermes 服务器端部署
    
-   在 Windows/Mac 环境下完成 Hermes 部署，运行验证通过
    
-   完成 Web3 基础模块全部 10 节预习笔记整理（含练习文件）
    

## **产出与检验**

> 实际产出（笔记 / 代码 / 截图 / Tx Hash / commit）+ 怎么证明做完了。 涉及的预习概念直接引用 `pre_study/.../README.md`，不在这里重复展开。

| 产出 | 状态 | 链接 |
| --- | --- | --- |
| Web3 基础 · Cryptography 笔记 | ✅ | pre_study/web3-fundamentals/Cryptography/README.md |
| 签名观察练习 | ✅ | practice-signature-observation.md |
| Web3 基础 · Wallet 笔记 | ✅ | pre_study/web3-fundamentals/Wallet/README.md |
| 钱包交互地图练习 | ✅ | practice-wallet-interaction-map.md |
| Web3 基础 · Smart Contract 笔记 | ✅ | pre_study/web3-fundamentals/Smart-Contract/README.md |
| 合约阅读练习 | ✅ | practice-contract-reading.md |
| Web3 基础 · Dev Stack 笔记 | ✅ | pre_study/web3-fundamentals/Dev-Stack/README.md |
| 最小开发链路练习 | ✅ | practice-minimal-dev-chain.md |
| Web3 基础 · Network 笔记 | ✅ | pre_study/web3-fundamentals/Network/README.md |
| 测试网交易追踪练习 | ✅ | practice-testnet-tx-tracking.md |
| Web3 基础 · Account Abstraction 笔记 | ✅ | pre_study/web3-fundamentals/Account-Abstraction/README.md |
| Session Key 策略设计练习 | ✅ | practice-agent-session-key-design.md |
| Web3 基础 · DeFi 笔记 | ✅ | pre_study/web3-fundamentals/DeFi/README.md |
| DeFi 交易拆解练习 | ✅ | practice-defi-tx-breakdown.md |
| Web3 基础 · Oracle 笔记 | ✅ | pre_study/web3-fundamentals/Oracle/README.md |
| Price Feed 风险检查练习 | ✅ | practice-price-feed-risk-check.md |
| Web3 基础 · Indexing 笔记 | ✅ | pre_study/web3-fundamentals/Indexing/README.md |
| 事件索引设计练习 | ✅ | practice-event-index-design.md |
| Web3 基础 · Security 笔记 | ✅ | pre_study/web3-fundamentals/Security/README.md |
| 交易安全检查表练习 | ✅ | practice-tx-safety-checklist.md |

## **收获 / 卡点**

> Hermes 部署流程走通了，后续可以用于 Agent 相关实验。Web3 基础模块全部预习完毕，为 Week 2 交叉方向学习打好了基础。

## **明天打算**

> 继续 Week 1 剩余内容，开始接触 AI × Web3 交叉方向的预习材料。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->













## 直达 repo:

github 该天笔记记录:

[https://github.com/Aafff623/web3career-study-track/tree/master/daily-log/week-1/2026-05-18](https://github.com/Aafff623/web3career-study-track/tree/master/daily-log/week-1/2026-05-18)

## 详情内容

# **2026-05-18**

> Week 1 · Day 2 · 周一

## **今天做了什么**

-   完成 AI 基础模块全部 11 节预习笔记（LLM → Prompt → Context → RAG → Agent → Frameworks → Vibe-Coding → MCP → Evaluation → Fine-tuning → Inference），含批注和实践文件
    
-   搭建项目三层规范架构（[GUIDE.md](http://GUIDE.md) + [CLAUDE.md](http://CLAUDE.md) + [steering.md](http://steering.md)），统一 Claude Code 和 Kiro 的协作规范
    
-   配置 Learning Agent 角色，将 AI Web3 School 官方启动 Prompt 写入项目约束
    
-   整理 memory 系统，沉淀批注风格规范和预习状态
    
-   创建 idea/ 目录，沉淀实验性构思
    
-   安装 skill-creator，将原型提炼为正式 [SKILL.md](http://SKILL.md) 格式
    
-   创建 reference/ 目录（case/ + eval/），为后续 skill 迭代做准备
    

## **产出与检验**

> 实际产出（笔记 / 代码 / 截图 / Tx Hash / commit）+ 怎么证明做完了。 涉及的预习概念直接引用 `pre_study/.../README.md`，不在这里重复展开。

| 产出 | 链接 |
| --- | --- |
| AI 基础 11 节笔记 + 实践文件 | pre_study/ai-fundamentals/ |
| 项目规范架构 | GUIDE.md + CLAUDE.md + steering.md |
| Memory 系统 | memory/ |
| Idea 目录 | idea/ — skills/ + reference/ |
| Git commits | 13 个 study/docs commit 已 push |

## **收获 / 卡点**

> 今天真实的感受：学到什么、卡在哪、想到什么疑问。一两条就够。

-   批注风格迭代了两轮才定型——从散文式到精炼技术总结，核心是"给未来的自己写备忘"而不是"写读后感"
    
-   Context 管理比想象中重要：模型看到什么直接决定输出质量，放错东西比不放更危险
    
-   RAG 的核心在检索端不在生成端——检索错了，后面全白搭
    
-   11 节 AI 基础读下来，最大的收获是建立了一套判断框架：模型是推理层不是真相源、prompt 是建议不是安全边界、eval 是唯一能证明"变好了"的手段
    
-   开始意识到 workflow 里有很多重复模式可以抽象成 skill/slash command
    

## **明天打算**

> 短短一行。

-   推进 Web3 基础部分预习（Cryptography、Wallet、Smart Contract…）
    
-   整理 idea/ 目录，把 workflow 中可复用的模式沉淀成 skill
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
