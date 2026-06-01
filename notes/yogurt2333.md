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
