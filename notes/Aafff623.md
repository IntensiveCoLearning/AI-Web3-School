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
