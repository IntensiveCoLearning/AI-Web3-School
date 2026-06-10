---
timezone: UTC+8
---

# douwenquan

**GitHub ID:** douwenquan

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-10
<!-- DAILY_CHECKIN_2026-06-10_START -->
# Daily: 2026-06-10

> Week 4 Sprint Day 3 — 核心代码编写完成 💻

* * *

## 今日学习内容

### DCA Agent 核心代码实现

完成了 DCA Automation Agent 的全部代码编写：

**Source 模块**

| 模块 | 文件 | 功能 |
| --- | --- | --- |
| Agent | src/agent/dca_plan.py | NL → 结构化参数解析 |
| Agent | src/agent/pact_builder.py | Pact 构造与提交 |
| Cobo | src/cobo/client.py | Cobo API 客户端封装 |
| Cobo | src/cobo/pact_api.py | Pact CRUD API |
| Uniswap | src/uniswap/quoter.py | V3 报价 |
| Uniswap | src/uniswap/router.py | swap 交易构造 |
| 数据模型 | src/models.py | 结构化数据定义 |
| 存储 | src/storage.py | 本地日志存储 |

**测试覆盖（6 个测试文件）**

| 测试 | 覆盖内容 |
| --- | --- |
| test_dca_plan.py | NL 意图解析正确性 |
| test_pact_builder.py | Pact 参数构造 |
| test_cobo_client.py | Cobo API 调用 |
| test_quoter.py | Uniswap 报价 |
| test_router.py | swap 交易构造 |
| test_storage.py | 存储读写 |
| test_models.py | 数据模型验证 |

* * *

## Week 4 Sprint 进度

| 日期 | 目标 | 状态 |
| --- | --- | --- |
| 6/8（一） | Claude Code 架构设计 | ✅ |
| 6/9（二） | 架构文档完善 | ✅ |
| 6/10（三） | 🔴 核心代码编写 | ✅ 完成 |
| 6/11（四） | 🔜 测试 + 端到端联调 | ⬜ |
| 6/12（五） | Demo 准备 + 提交材料 | ⬜ |

* * *

## 明日计划

开始测试与联调：

1.  运行 pytest，修复失败的测试用例
    
2.  Cobo Sandbox 环境测试
    
3.  Uniswap V3 Quoter 真实调用验证
    
4.  端到端流程走通
    

* * *

## 学习时间

| 项目 | 时长 |
| --- | --- |
| 核心代码编写 | ~3h |
<!-- DAILY_CHECKIN_2026-06-10_END -->

# 2026-06-09
<!-- DAILY_CHECKIN_2026-06-09_START -->

# Daily: 2026-06-09

> Week 4 Sprint Day 2 — 架构技术文档完善

* * *

## 今日学习内容

### 架构技术文档完善

进一步完善了 DCA Automation Agent 的架构技术文档：

-   梳理了核心模块之间的接口定义和数据流
    
-   明确了各模块的输入/输出规范和错误处理边界
    
-   整理了 Cobo API 集成方案的技术细节
    
-   完善了 Uniswap V3 交互部分的文档
    

### 明日计划

明天（6/10）正式开始开发：

-   dca.plan NL 解析模块编码
    
-   Pact 构造与提交逻辑
    
-   Uniswap V3 Quoter + swap 集成
    

* * *

## Week 4 Sprint 进度

| 日期 | 目标 | 状态 |
| --- | --- | --- |
| 6/8（一） | Claude Code 架构设计 | ✅ |
| 6/9（二） | 架构文档完善 | ✅ |
| 6/10（三） | 🔜 正式开始开发 | ⬜ |
| 6/11（四） | 端到端联调 + 安全测试 | ⬜ |
| 6/12（五） | Demo 准备 + 提交材料 | ⬜ |

* * *

## 学习时间

| 项目 | 时长 |
| --- | --- |
| 架构技术文档 | ~1.5h |
<!-- DAILY_CHECKIN_2026-06-09_END -->

# 2026-06-08
<!-- DAILY_CHECKIN_2026-06-08_START -->


# Daily: 2026-06-07

* * *

## 今日学习内容

### 1\. 项目架构设计 — Claude Code

通过 Claude Code 完成了 DCA Automation Agent 的架构设计：

-   **项目初始化**：在 Cobo-Agentic-Hackathon 目录下搭建了完整的项目骨架
    
-   **核心模块**：
    
    -   `dca_plan.py` — NL → 结构化参数解析
        
    -   `pact.py` — Pact 构造与提交
        
    -   `swap.py` — swap 执行与重试逻辑
        
    -   `analysis.py` — 投资回看分析
        
    -   `cobo/` — Cobo API 客户端封装
        
    -   `uniswap/` — Uniswap V3 Quoter & Router 交互
        
-   **测试用例**：为 dca\_plan 和 pact 模块编写了 pytest 测试
    
-   **依赖管理**：配置了 pyproject.toml（[web3.py](http://web3.py), httpx, pytest
<!-- DAILY_CHECKIN_2026-06-08_END -->

# 2026-06-07
<!-- DAILY_CHECKIN_2026-06-07_START -->



# Daily: 2026-06-07

> Week 3 收官日 — 加分挑战全部完成

* * *

## 今日学习内容

### 1\. Week 3 加分挑战冲刺

今天完成了所有剩余的 Week 3 加分任务：

**Week 4 Ready Pack** 将所有已完成的文档（Direction Card、Proposal、Repo Skeleton、Sprint Plan、Risk Memo、Sponsor 问题、Cobo 集成方案）整理为一份总览包，含 6/8 周一启动 Checklist。

**Project Flow Diagram** 用 Mermaid 绘制了 DCA Automation Agent 的完整流程图，覆盖：

-   主流程：用户输入 → NL 解析 → Pact 构造 → Cobo App 审核 → Quoter 报价 → Agent 校验 → Policy Engine → MPC 签名 → 链上 swap → 交易验证 → 循环/结束
    
-   用户查询流程：历史交易 → 投资指标计算 → 结构化报告
    
-   安全层：8 种攻击场景 → Policy Engine 拦截
    
-   各环节角色矩阵（人工 vs 自动）
    

**Technical Validation Plan** 制定了 14 个技术验证点，分 6 个域：

-   P0（8 项）：Cobo API 集成 / 链上交互 / Agent 逻辑 / 安全攻击测试
    
-   P1（6 项）：投资分析 / 性能与边界
    
-   每个验证点包含验证方法、通过标准、失败 Fallback
    

**Deep Research Pack** 围绕项目方向写了 3 份阅读摘要：

1.  Cobo Pact & Policy Engine — 任务级授权机制
    
2.  Uniswap V3 Quoter & Router — 链上报价与交易执行
    
3.  ERC-4337 Account Abstraction — Cobo CAW 的底层架构理解
    

* * *

## 今日完成 WCB 任务

| # | 任务 | 积分 | 分类 |
| --- | --- | --- | --- |
| 1 | Week 4 Ready Pack | 40 | ⚡ 加分挑战 |
| 2 | Project Flow Diagram | 30 | ⚡ 加分挑战 |
| 3 | Technical Validation Plan | 30 | ⚡ 加分挑战 |
| 4 | Deep Research Pack | 30 | ⚡ 加分挑战 |
|   | 今日小计 | 130分 |   |

* * *

## Week 3 最终成绩

| 分类 | 任务数 | 得分 | 完成度 |
| --- | --- | --- | --- |
| 🎯 线上活动（实时） | 6 | 120分 | ✅ 100% |
| 🛡️ 最低完成路径 | 7 | 110分 | ✅ 100% |
| 📘 推荐完成 | 5 | 90分 | ✅ 100% |
| 🏗️ Sponsor Workshop | 4 | 85分 | ✅ 100% |
| ⚡ 加分挑战 | 4 | 130分 | ✅ 100% |
| 总计 | 26 | ~535分 | 🔥 |

* * *

## 复盘

-   **WCB 提交方式修正**：之前只投 GitHub 链接 → 改为内容摘要 + 链接
    
-   **Commit 流程修正**：之前直接 push → 改为草稿 → 审阅 → 确认 → 提交
    
-   Week 3 所有可做任务已全部完成 ✅
    

* * *

## 明日计划

**Week 4 Sprint Day 1 🚀**

| 优先级 | 事项 |
| --- | --- |
| 🔴 1 | 确认 Cobo Sandbox 开通 + API Key 权限 |
| 🔴 2 | 安装 Python 依赖（web3.py, httpx） |
| 🔴 3 | 编写 cobo_client.py 骨架 |
| 🔴 4 | 测试 Uniswap V3 Quoter 调用（Base Sepolia） |
| 🟡 5 | 确认 Base Sepolia 水龙头可用 |
<!-- DAILY_CHECKIN_2026-06-07_END -->

# 2026-06-06
<!-- DAILY_CHECKIN_2026-06-06_START -->




# Daily: 2026-06-06

> Week 3 周末冲刺 — Sponsor Workshop 任务全部完成

* * *

## 今日学习内容

### 1\. Cobo Agentic Wallet × DCA Automation Agent

从 Sponsor Workshop 和 API 文档学习中，深入理解了 Cobo Agentic Wallet 的核心机制：

**钱包持有与权限**

-   Agent 不自持私钥 → 全部通过 Cobo MPC 签名
    
-   Pact 定义三种边界：budget（金额上限）、scope（合约白名单）、time window（有效时段+频率）
    
-   可撤销：Pact 到期自动撤销 / 用户 Cobo App 一键 Revoke
    

**预算管理三层控制**

-   Level 1: Pact budget — 硬上限
    
-   Level 2: Policy Engine — 策略强制
    
-   Level 3: Agent 自检 — 报价偏差/连续失败/余额检查
    

**交易执行闭环**

-   NL 意图 → 结构化参数 → Pact 构造 → 用户审核 → Quoter 报价 → Policy Engine 校验 → contract\_call → MPC 签名 → 链上执行 → 交易验证 → 投资分析
    

### 2\. Week 4 Sprint 技术准备

-   明确了需要接入的 Cobo API 清单（6 个）
    
-   预估了 Week 4 工时：~10.5h（每天 2-3h）
    
-   制定了每个组件的独立 Fallback 方案
    
-   列出了 6/8 前可提前做的预研项（Cobo API 文档、Python 依赖、代码骨架）
    

### 3\. Risk Management

-   项目成立的关键前提：Cobo API Sandbox 可用（6/8 Day 1 验证）
    
-   Top 3 失败模式：Cobo 权限问题 / Pact 行为不一致 / 时间不足
    
-   Fallback A（Mock）→ Fallback B（Code Demo）→ Fallback C（Screenshot Demo）
    

* * *

## 今日完成 WCB 任务

| # | 任务 | 积分 | 分类 |
| --- | --- | --- | --- |
| 1 | Cobo Track Alignment | 30 | 🏗️ Sponsor Workshop |
| 2 | Cobo SDK / API Integration Plan | 30 | 🏗️ Sponsor Workshop |
| 3 | Sponsor Workshop Notes | 20 | 🏗️ Sponsor Workshop |
|   | 今日小计 | 80分 |   |

**Week 3 累计：线上活动 120分 + 文档任务 150分 = 270分**

* * *

## Week 3 整体进度

| 分类 | 进度 |
| --- | --- |
| 🎯 线上活动（实时） | 5/5 ✅ 全部完成（+Co-learning 3场） |
| 🛡️ 最低完成路径（7项） | 7/7 ✅ 全部完成 |
| 📘 推荐完成（5项） | 5/5 ✅ 全部完成 |
| 🏗️ Sponsor Workshop（3项+1项已提前） | 4/4 ✅ 全部完成 |
| ⚡ 加分挑战 | 0/4 ⬜ 选做 |
| 📝 其他 | 1/2 ⬜ |

* * *

## 明日计划（周日）

自由安排。如果 Week 4 前想预热，可以：

1.  读 Cobo API 文档，熟悉 Sandbox 开通流程
    
2.  安装 Python 依赖（[web3.py](http://web3.py), httpx）
    
3.  编写 cobo\_client.py 基础骨架
<!-- DAILY_CHECKIN_2026-06-06_END -->

# 2026-06-05
<!-- DAILY_CHECKIN_2026-06-05_START -->





# Daily: 2026-06-05

> Week 3 收尾冲刺日 — AI Agent × Blockchain + WCB 任务冲刺

* * *

## 今日学习

### 1\. 🔴 AI Agent 时代，重新审视区块链这项技术选择

**关键信息：**

-   AI Agent 嵌入开发全流程：从自然语言意图解析到代码生成到链上执行
    
-   AI 在开发中的提效方式：Agent 自动拆解任务 → 调用工具 → 迭代修复
    
-   区块链性能与隐私进展：L2、zk、并行 EVM 如何改变 AI × Web3 的可行性
    
-   AI Agent 对区块链成本的影响：Agent 驱动的高频小额交易需要更便宜的 gas
    
-   AI Agent 对区块链收益的影响：Agent 作为链上经济参与者的新商业模式
    
-   Conflux 公链：架构特点和生态定位
    

### 2\. 🔴 Week 3 例会

**关键信息：**

-   黑客松赛程安排：Week 4 Sprint 时间线确认
    
-   各赛道评分标准详解
    
-   项目提交要求和 Demo 展示流程
    

* * *

## 今日完成 WCB 任务

| 分类 | 任务 | 积分 | 状态 |
| --- | --- | --- | --- |
| 📘 推荐完成 | Scope Review | 20 | ✅ |
| 📘 推荐完成 | Risk / Assumption Memo | 20 | ✅ |
| 📘 推荐完成 | Sponsor / Mentor 问题清单 | 20 | ✅ |
| 🎯 线上活动 | AI Agent 时代 x 区块链选择 | 20 | ✅ 你已提交 |
| 🎯 线上活动 | Week 3 例会 | 20 | ✅ 你已提交 |
|   | 今日小计 | 100分 |   |

### 文档列表

| 文件名 | 说明 |
| --- | --- |
| hackathon/scope-review.md | P0/P1/P2 范围矩阵，明确不做什么 |
| hackathon/risk-assumption-memo.md | Cobo API 依赖假设 + Fallback A/B/C 决策树 |
| hackathon/sponsor-mentor-questions.md | 3 个 Cobo 实现问题：Pact 预算、Policy Engine、Gas 重试 |

* * *

## 今日卡点 & 复盘

-   **反馈修正**：直接 commit/push 没先给你审 → 已明确后续流程：**草稿 → 审阅 → 确认 → 提交**
    
-   **WCB 提交方式修正**：文档内容直接提交，不投 GitHub 链接
    
-   **Week 4 关键前提**：6/8(Day1) 需确认 Cobo Agentic Wallet API 沙箱可用性
    

* * *

## 明日计划

周六，建议：

1.  **Repo Skeleton**（20分）— 完善已有草稿
    
2.  **Week 4 Sprint Plan**（20分）— 整理成正式文档
    
3.  或直接开始研究 Cobo API 文档，为 6/8 Sprint 做准备
    

* * *

## 学习时间

| 项目 | 时长 |
| --- | --- |
| AI Agent × Blockchain 会议 | 1h |
| Week 3 例会 | 1h |
| WCB 任务（Scope Review / Risk Memo / Sponsor Questions） | ~1.5h |
| 总计 | ~3.5h |
<!-- DAILY_CHECKIN_2026-06-05_END -->

# 2026-06-04
<!-- DAILY_CHECKIN_2026-06-04_START -->






# Daily: 2026-06-04

> 支付场景的探索和思考 + Co-learning

* * *

## 今日活动

### 1\. Co-learning

### 2\. 🔴 支付场景的探索和思考

了解了从真实支付场景出发识别用户需求、约束条件、风控边界和可落地 MVP 的方法，以及当前支付场景与 Agent 和 Web3 结合的整体流程和开发注意事项。

* * *

## 今日完成

| 任务 | 积分 | 状态 |
| --- | --- | --- |
| Week 3｜线上活动｜实时参加 6.04｜支付场景的探索和思考 | 20 | ✅ 已提交 |
| 今日小计 | 20 |   |

* * *

## 明日计划（6/5）

⚠️ **重头戏日**

| 时间 | 任务 | 积分 |
| --- | --- | --- |
| 11:00 | 🔴 AI Agent 时代，重新审视区块链 | 20 |
| 12:00 | 🔴 Week 3 例会 + 上麦分享 ⭐（5分） | 20+5 |
| 会后 | Week 1-2 缺口诊断 | 10 |
| 会后 | Proposal Memo | 20 |
| 会后 | Scope Review | 20 |
<!-- DAILY_CHECKIN_2026-06-04_END -->

# 2026-06-03
<!-- DAILY_CHECKIN_2026-06-03_START -->







# Daily: 2026-06-03

> 黑客松赛道实战 + Co-learning + Repo Skeleton

* * *

## 今日活动

### 1\. Co-learning — 赛道选择交流

了解了大家当前的赛道选择情况和 idea 创意。

### 2\. 🔴 黑客松赛道实战 — Cobo 专场

Cobo 老师讲了 Cobo 的使用方法、注意事项以及 API 调用方式。

* * *

## 今日完成

| 任务 | 积分 | 状态 |
| --- | --- | --- |
| Week 3｜线上活动｜实时参加 6.03｜黑客松赛道实战 | 20 | ✅ 已提交 |
| 🛡️ Repo Skeleton（DCA Agent 项目仓库） | 20 | ✅ 已提交 |
| 🛡️ Week 4 Sprint Plan | 20 | ✅ 已提交 |
| 🛡️ 项目一句话说明 | 10 | ✅ 已提交 |
| 今日小计 | 70 |   |

## 本地产出

| 文件 | 说明 |
| --- | --- |
| daily/2026-06-03.md | 今日学习记录 |
| hackathon/repo-skeleton-draft.md | Repo Skeleton 草稿 |
| ~/DCA Agent/ | 实际项目仓库（已 push 到 GitHub） |

* * *

## 明日计划（6/4）

| 时间 | 任务 | 积分 |
| --- | --- | --- |
| 12:00 | 🔴 支付场景的探索和思考 | 20 |
| 会后 | 项目架构设计 |   |
|   |   |   |
<!-- DAILY_CHECKIN_2026-06-03_END -->

# 2026-06-02
<!-- DAILY_CHECKIN_2026-06-02_START -->








# Daily: 2026-06-02

> Hackathon OpenDay + Week 3 项目启动

* * *

## 今日完成

### 🎯 线上活动

| 活动 | 收获 | 状态 |
| --- | --- | --- |
| Hackathon OpenDay | 了解 Cobo 和 Z.AI 赛道主办方的选择偏好，以及后续赛事赛程安排 | ✅ 已提交 WCB |

### 🛡️ 最低完成路径

| 任务 | 积分 | 状态 |
| --- | --- | --- |
| Hackathon Direction Card | 20 | ✅ 已提交 WCB |
| 赛道选择说明 | 10 | ✅ 已提交 WCB |
| 组队 / 单人参赛状态确认 | 20 | ✅ 已提交 WCB |

* * *

## 产出文件

| 文件 | 说明 |
| --- | --- |
| hackathon/direction-card.md | Direction Card（含投资回看分析功能 + 现有方案缺陷占位） |
| hackathon/track-selection.md | 赛道选择说明（Cobo 赛道对齐检查 + 用户更新） |
| hackathon/team-confirmation.md | 组队确认：Solo 单人，负责全部 7 个模块 |
| tasks/week3-task-list.md | WCB 全部 36 个 Week 3 任务完整清单（含 API 原文描述） |
| tasks/week3-plan.md | 基于真实 WCB 任务的每日执行计划 |

* * *

## 明日计划（6/3）

| 时间 | 任务 | 积分 |
| --- | --- | --- |
| 12:00 | 🔴 黑客松赛道实战 实时参加 | 20 |
| 会后 | Repo Skeleton | 20 |
| 会后 | Week 4 Sprint Plan | 20 |

* * *

## 学习时间

-   项目任务：~2h
    
-   OpenDay：1h
    
-   总计：~3h
<!-- DAILY_CHECKIN_2026-06-02_END -->

# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->









# Daily: 2026-06-01

> 参加 Co-learning + VC 视角分享会

* * *

## 今日活动

### 1\. Co-learning — AI 本地部署讨论

**主要内容：** 大家聊了 AI 本地部署的相关知识，包括：

| 话题 | 要点 |
| --- | --- |
| 本地部署的常见问题 | 模型下载、环境配置、依赖冲突、兼容性问题 |
| 算力需求 | 本地跑模型对 GPU/显存的要求，消费级显卡（4090/5090）的极限在哪 |
| 开源模型选择 | Qwen、DeepSeek 等本地可跑模型的对比 |
| 与云端 API 的权衡 | 本地部署的隐私优势 vs 云端 API 的算力优势 |

**我的收获：** 了解了当前本地部署 AI 的实际门槛。对于我们 DCA Agent，如果未来需要本地执行 Agent 逻辑，模型的推理速度和显存占用是需要考虑的因素。

### 2\. VC 视角分享会 — 更好打磨项目

**主要内容：** 投资人是如何看待一个项目的。

| 观点 | 说明 |
| --- | --- |
| 投资人看什么 | 投资人（Founder）和团队背景 > 项目概念 > 市场时机 |
| PPT 项目时代已过 | 以前靠一份白皮书就能拿融资，现在投资人更看重实际回报率 |
| 一人公司成为主流 | AI 降低了创业门槛——一个顶级架构师 + AI 可以超过 10 个普通员工 |
| 估值逻辑变了 | 不再是"讲一个多大的故事"，而是"这个东西能不能赚钱、什么时候赚钱" |

**我的收获：** 对我们的 DCA Agent 项目的启示——项目方向没问题（Payment/Commerce 是实际需求），但 Hackathon 期间需要做出**可演示的原型**，而不是停留在设计文档阶段。

* * *

## 学习笔记

### AI 本地部署的关键考量

| 维度 | 说明 |
| --- | --- |
| 硬件要求 | 7B 模型约需 6-8GB VRAM, 70B 模型需 40GB+ |
| 量化 | GPTQ/AWQ/GGUF 等量化方案降低显存需求 |
| 推理速度 | 本地推理通常比云端 API 慢 2-5 倍 |
| 隐私优势 | 数据不出本机，适合敏感场景 |

### VC 视角的项目打磨要点

1.  **团队 > 想法** — 投资人的核心判断是"这个人能不能做成"
    
2.  **回报率 > 故事** — 不再为"宏大叙事"买单，只看实际数据
    
3.  **AI 放大个人能力** — 一人 + AI 的边际产出远超传统团队
    
4.  **Demo > PPT** — 一个跑通的原型比 50 页 PPT 有效
    

* * *

## 明日计划

-   开始 Week 3 任务
    
-   Hackathon Direction Card
    
-   赛道选择说明（Cobo）
    
-   Repo Skeleton
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->










# Daily: 2026-05-31

> 完成 Week 2 全部模块 + 总交付 + Week 3 准备工作

* * *

## 今日完成

### Module D — Wallet / Permission（补完）

-   新增任务级授权与 Session Key 概念
    
-   新增完整 ASCII 执行流程图（标出自动/人工/紧急）
    

### Module E — DeFi Execution（新增）

-   回答核心问题：Agent 执行时链上真正发生了什么
    
-   Swap/Approve/Deposit/Borrow/Withdraw/Redeem 风险矩阵
    
-   5 个协议详解：Uniswap V3、Balancer、Hyperliquid、Lido、Gitcoin
    
-   5 步扩展路径（Uniswap → Lido → Balancer → Aave → Hyperliquid）
    
-   补充 3 个学习材料：Prompt Injection / 敏感信息披露 / 代理过剩
    

### Module F — Security/Privacy（重构成 Task + Learning 拆分）

-   Task 1：低风险自动执行 / 高风险人工确认策略 + 8 个触发条件 + 决策树
    
-   Task 2：8 种攻击模拟（6/8 被 Cobo CAW 拦截）
    
-   Workflow Threat Model：资产/权限/数据流/工具调用/外部依赖/失败后果
    

### Module G — Governance（新增）

-   5 阶段 DAO 治理流程拆解（提案→讨论→投票→执行→复盘）
    
-   Meeting-to-Action Workflow 草图（4 步）
    
-   AI vs 人工确认边界矩阵
    

### 总交付 — 方向深挖包与 Proposal（新增）

-   7 项要求全部覆盖
    
-   DCA Automation Agent 项目 Proposal（含 MVP、风险、赛道、Week 3 计划）
    
-   3 方向 Backlog
    

### 学习复盘

-   生成 Week 1+2 学习总结 [review-week1-week2.md](http://review-week1-week2.md)
    
-   口头复盘 MPC / Uniswap V3 / ERC-8004 / ERC-8183
    

## 明天计划

-   开始 Week 3 任务（Hackathon 准备周）
    
-   最低完成路径：Hackathon Direction Card / 赛道选择 / Repo Skeleton / Sprint Plan
    

* * *

## 学习笔记

### MPC 三句话

1.  私钥拆成多个碎片，分别存在不同地方
    
2.  签名需要多方协同计算，完整私钥从不出现
    
3.  DCA Agent 不持私钥——Agent 只有 API Key，Cobo MPC 执行签名
    

### Uniswap V3 三句话

1.  集中流动性——资金集中在当前价格区间，效率比 V2 高 4000 倍
    
2.  Quoter（只读报价）+ Router（执行 swap）
    
3.  Slippage 保护 = amountOutMinimum 参数
    

### ERC-8004 三句话

1.  Agent 身份 = ERC-721 NFT，URI 指向注册文件
    
2.  声誉 = 链上评分（成功率/交易量/可用率）
    
3.  验证 = 可插拔（质押重执行 / zkML / TEE）
    

### ERC-8183 三句话

1.  Client 锁钱 → Provider 干活 → Evaluator 验收
    
2.  资金在合约里托管，只有 Evaluator 能放行
    
3.  超时自动退款，拒绝就是终局
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->











# 2026-05-30 每日学习笔记

## 学习内容

### 竞品分析（方向一）

三类竞品深度讨论：

**第一类（DeBank/Zapper/Zerion）：** 投资组合追踪器，做资产追踪但无人做行为诊断和分析

-   DeBank：数据最全最快，主打分析功能，但管理和买卖不做
    
-   Zapper：一站式资产管理，想做超级应用但新协议支持慢、数据分析表面
    
-   Zerion：移动钱包体验好，内置智能钱包，但投研功能弱
    

**第二类（Dune/Nansen/Arkham）：** 链上数据分析平台

-   Dune：SQL 查询门槛高，适合高级用户
    
-   Nansen：追踪聪明钱，不分析用户自身行为
    
-   Arkham：地址反匿名化，面向调查/合规
    

**第三类（Chainalysis/Elliptic/TRM）：** 全部 B 端工具，面向政府和交易所

**结论：** 方向一的核心切入点是"行为分析 + 诊断 + 建议"，现有竞品都在数钱/盯人/查合规，没有人做行为画像

### Module B 任务一：最小支付与商业流程拆解

-   场景：Cobo Agentic Wallet + DCA 定投 Agent
    
-   拆解了 Pact 四要素（Intent / Execution Plan / Policies / Completion Conditions）
    
-   完整流程：9 步，覆盖下单→授权→执行→验收→终止
    
-   设计了 5 个 Phase（报价/执行/验收/失败处理/记录证明）
    
-   输出文档：`tasks/2026-05-29-payment-commerce-breakdown.md`
    

### Module B 任务二：x402 + CAW 自主支付闭环设计

-   学习了 x402 协议：HTTP 402 标准、三种支付方案（exact/upto/batch-settlement）、Facilitator 机制
    
-   设计了完整 6 Phase 交互流程（准备→请求→支付决策→支付→验证→完成）
    
-   包含架构图、交互流程、关键接口说明、风险边界
    
-   延续 Week 1 三条铁律（永不接触密钥、永不自动签名、永不绕过确认）
    
-   输出文档：`tasks/2026-05-29-x402-caw-payment-design.md`
    

## 明日计划

1.  确定 Week 2 主方向
    
2.  继续跟进剩余模块任务
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->












# 2026-05-29 每日学习笔记

## 学习内容

### Women Builders in AI × Web3

-   了解女性在 AI + Web3 社区的发展前景和现状
    
-   全球视角下的 AI × Web3 共建机会
    

### Week 2 例会

-   了解大家当前的学习进展
    
-   阅读优秀笔记，参考不同学员的学习方法和思考角度
    

## 明日计划

1.  确定 Week 2 主方向，开始画 AI × Web3 问题地图
    
2.  分析竞品优缺点，完成方向选择说明
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->













# 2026-05-28 每日学习笔记

## 学习内容

### 晚间完成事项

-   修正 PoW Pack：移除混入的 Week 2 会议内容，删除所有文件中泄露的任务 ID
    
-   提交 Week 1 PoW Pack 到 WCB ✅（submitId: cmpo8bb0h7mkwpo01cdma2gel）
    
-   设计 DeFi Swap 受限助手工作流文档 v1.1：新增 Pre-flight Simulation + Permit2 集成
    
-   撰写 Week 1 理解总结：AI Agent Workflow & Tool Use、钱包与签名、Agent 支付边界
    

### DeFi Swap 受限助手设计核心

-   三条铁律：永不接触密钥、永不自动签名、永不绕过确认
    
-   三堵确认墙：合约地址核对 → 授权参数核对 → Swap 参数核对
    
-   Pre-flight Simulation：用 eth\_call 模拟交易，签名前发现授权不足、滑点过低等问题
    
-   Permit2 优先路径：链下签名授权，消除 Approve→Swap 间的 MEV 窗口
    

### Week 2 方向调研

两个候选方向：

**方向一：链上财务教练**

-   分析用户链上交易行为，生成个人画像，结合盈亏给出交易风格诊断和建议
    
-   现有工具（DeBank/Zapper/Nansen）做资产追踪，无人做行为分析和诊断
    
-   AI 三层角色：描述→诊断→建议
    

**方向二：AI 治理助手**

-   自动总结 DAO 提案、分析论坛讨论、评估投票影响，降低参与门槛
    
-   DAO 参与率仅 5%，核心障碍是信息过载
    
-   AI 做总结+分析+提醒，Web3 提供链上治理数据
    

### 竞品调研（记录 18 个项目）

方向一：DeBank、Zapper、Zerion、Nansen、Arkham、Dune Analytics、Rotkiapp、Crypto Analyzer、Chainalysis、Elliptic、TRM Labs

方向二：DeepDAO、Snapshot、Tally、Agora、Karma、Boardroom、Sybil、DAO-Analyzer

详见 `tasks/2026-05-27-week2-direction-analysis.md`

## 明日计划

1.  确定 Week 2 主方向，开始画 AI × Web3 问题地图
    
2.  分析竞品优缺点，完成方向选择说明
    
3.  参加 5/29 Women Builders + Week 2 例会
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->














**第一部分：学习总结**

> 今天完成了 AI × Web3 Bridge 剩余 8 个章节的全面速览：
> 
> ① **Agent Wallet** — 钱包是权限系统不是签名按钮，Session Key（临时钥匙）+ Policy（规则层）+ Guard（拦截层）+ Simulation（预演）构建安全体系。
> 
> ② **Machine Payment & Settlement** — X402（HTTP 原生支付）、MPP（机器间支付协议）、Micro Payment（小额高频）、ERC-8183 任务支付与交付标准。
> 
> ③ **Agent Identity & Trust** — Agent Profile 能力声明、Service Endpoint、DID+VC；ERC-8004 身份声誉验证 Registry；质押和综合评估机制。
> 
> ④ **AI Security（重点）** — 模型放在隔离层，可以建议不能绕过权限；Key Safety、Permission Isolation、Sandbox 三防；防范 Prompt Injection、上下文注入与误导数据。
> 
> ⑤ **Governance AI** — AI 辅助 DAO 治理：长提案摘要、会议行动项、贡献追踪。
> 
> **至此 AI × Web3 Bridge 12 个章节全部完成 ✅，Phase 2 学习完毕。**

**第二部分：今日会议**

> ① **Co-learning** — 了解 AI+Web3 产品想法和 Layer 2 现状问题。
> 
> ② **Neo-Cypherpunk & Privacy** — 新赛博朋克：隐私是公共品，渐进式隐私保护，AI 隐私 Agent 是重要方向。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->















**第一部分：今日学习总结**

> 今天重点完成了 Week 1 收尾任务和 Week 2 预热：
> 
> ① **WCB 任务全量审计** — 通过 Agent API 获取了 62 个完整任务列表，理清了所有任务的 APPROVED/SUBMITTED/NOT\_STARTED 状态。
> 
> ② **拆解 INFINIT 项目** — 分析了 AI 驱动 DeFi 执行层 INFINIT 的项目全貌，覆盖 Agent Swarm（35+ 专业代理）、三层安全体系（确定性代码编译 + 内部验证 + 模拟审批）、代币经济学和竞品对比。拆解笔记已提交 WCB ✅
> 
> ③ **Agent 记忆系统调研规划** — 参考同学笔记，列出了 MemGPT/Letta、Mem0、Zep、LangChain Memory 四种产品的待研究任务清单。

**第二部分：今日会议**

> **Cobo Agentic Wallet** — 围绕 AI Agent 链上资产安全展开：当前 Agent 经济规模庞大但存在权限失控、隐私泄露等风险。Cobo 通过 MPC 私钥分片、Pack 授权规范、Recipe 技能层构建安全可控体系，涵盖小额免密、极端兜底等风控方案及人机协作平衡思路。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->
















**第一部分：Web3 基础学习总结**

> 今天完成了 Web3 基础 Phase 1 的全部剩余 6 个章节学习：Network（区块/共识/PoS/L2/Rollup）、Account Abstraction（ERC-4337/Smart Account/Bundler/Paymaster/Session Key）、DeFi（Token/AMM/滑点/无常损失/Lending/Stablecoin/Liquidity）、Oracle（Price Feed/Oracle Risk/AI Oracle）、Indexing（Event Indexing/Subgraph/Data Pipeline）、Security（Reentrancy/Access Control/Audit/Simulation/Monitoring）。共产出 7 份结构化学习笔记沉淀到 GitHub 仓库。

**第二部分：今日会议**

> ① **Co-learning** — 马铃薯老师答疑：了解了当前 Web3 火热的发展方向和前景项目，对后续学习和项目方向选择有了更清晰的认识。
> 
> ② **Long-Term Memory of AI Agents** — 学习如何让 Agent 拥有持续上下文与长期一致性，了解了 CoCa、CoAx 等大公司在 Agent 长期记忆方向的落地实践。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->

















今天主要学习和了解web3的相关文档和知识。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->


















今日学习总结：  
  
今天参加了两场活动：  
  
一、Open Agentic Economy 分享会  

-   了解了 Agentic Economy 机器支付协议标准
    

-   学习了 ERC-8004（服务发现与协商）和 ERC-8183（机器支付与结算）
    

-   理解了 Agent 经济系统的完整路径：服务发现 → 任务协商 → 支付结算 → 凭证记录
    

-   了解了相关开源项目和实现路径
    

二、LXDAO 周会  

-   了解了 LXDAO 的治理结构和运作机制
    

-   观察到社区发展方向存在困惑
    

-   发现活动运营方面存在一些问题
    

关键认识：  

-   Agentic Economy 是 AI × Web3 的重要落地场景
    

-   协议标准化是 Agent 之间互操作的基础
    

-   支付 + 身份 + 验证是 Agent 经济的三大支柱
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->



















今天完成了两部分学习：  
  
一、AI 基础概念深化  

-   系统学习了 Agent 架构（Plan + Reflection + Multi-Agent）
    

-   了解了主流框架生态（LangChain、LangGraph、OpenAI Agents SDK 等）
    

-   记录了 MCP 协议的核心机制（Tool Schema、Permission）
    

-   理解了 Fine-tuning 和 Inference 的基本概念
    

二、Co-learning：Agent Wallet  

-   学习了 Cobo Agentic Wallet 的产品定位和技术架构
    

-   理解了 Agent Wallet 解决的核心问题：权限控制、安全隔离、人工确认
    

-   收藏了开发文档：
    
    [https://www.cobo.com/products/agentic-wallet/manual/developer/quickstart-overview](https://www.cobo.com/products/agentic-wallet/manual/developer/quickstart-overview)
    

关键认识：  

-   Agent = 模型 + 工具 + 编排，是能自主执行任务的系统
    

-   Agent Wallet 是 AI × Web3 的关键基础设施，让 Agent 能安全地管理资产和交易
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->




















# 2026-05-21 每日学习笔记

## 今日目标

-   ✅ 参加 AI + Web3 技术方向直播课
    
-   ✅ 记录核心观点和学习收获
    

## 学习内容

### 主要收获

今天的课程核心观点：**AI + Web3 的价值不是给 AI 套 token，而是让软件主体进入可授权、可结算、可审计的经济系统。**

这是 AI × Web3 的本质：不是简单地把两个概念拼在一起，而是建立一个让 AI Agent 能够自主参与经济活动、承担责任、留下可验证记录的新系统。

### 五个技术方向

| 方向 | 核心内容 | 关键词 |
| --- | --- | --- |
| 1. 去中心化 AI 基础设施 | 去中心化的算力、模型、数据市场，降低 AI 开发和运行的中心化风险 | DeAI、算力市场、模型市场 |
| 2. AI Agent + 钱包 | 让 AI Agent 拥有钱包能力，可以自主完成支付、收款、资产管理 | Agent Wallet、自主支付、机器经济 |
| 3. AI 链上分析工具 | 利用 AI 分析链上数据、交易模式、项目风险，辅助决策 | 链上分析、风险识别、智能投研 |
| 4. 智能钱包和安全助手 | AI 辅助的钱包安全、交易验证、权限管理、防钓鱼 | 智能钱包、安全助手、权限管理 |
| 5. 交易所和 DeFi 智能风控 | AI 实时监控交易异常、识别攻击模式、保护用户资产 | 智能风控、异常检测、MEV 保护 |

### 关键认识

-   **可授权**：AI Agent 可以被授权执行特定操作，权限可定义、可限制、可撤销
    
-   **可结算**：AI Agent 之间的服务交换可以通过区块链自动完成支付和清算
    
-   **可审计**：所有 AI 的操作和决策都留在链上，可供事后审查和验证
    

## 实践记录

-   实时参加了 5/21 AI 下乡计划直播
    
-   记录了五个方向的框架
    

## 问题与卡点

-   需要深入了解每个方向的具体实现案例
    
-   Agent + 钱包的安全边界需要进一步研究
    

## 明日计划

1.  参加 5/22 [Z.AI](http://Z.AI) 直播
    
2.  深入研究 1-2 个感兴趣的方向
    
3.  开始准备 Week 1 PoW Pack
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->






















# 2026-05-20 每日学习笔记

## 今日目标

-   ✅ 阅读 Web3 基础文章
    
-   ✅ 学习密码学文档
    
-   ✅ 参加 Web3 运行原理直播课
    
-   ✅ 实操编写智能合约
    

## 学习内容

### 主要收获

今天系统学习了 Web3 基础内容，并与直播课程做了串联：

**密码学基础：**

-   **哈希（Hash）**：单向函数，用于数据完整性验证
    
-   **公钥/私钥（Public/Private Key）**：非对称加密的基础，私钥签名、公钥验证
    
-   **签名（Signature）**：证明身份和授权动作，不可伪造
    
-   **Merkle Tree**：高效验证大量数据完整性的树形结构
    

**钱包：**

-   已有 MetaMask 使用经验
    
-   理解了钱包作为身份和签名入口的角色
    
-   掌握了地址、助记词、私钥的关系和安全边界
    

**智能合约：**

-   **Solidity**：合约编程语言，之前有过学习基础
    
-   **EVM（以太坊虚拟机）**：合约执行环境
    
-   **ABI（应用二进制接口）**：合约与外部交互的接口定义
    
-   **Event（事件）**：链上日志记录机制
    
-   **OpenZeppelin**：安全合约库，今天了解了基本使用
    

### 关键概念

-   Web3 是分布式系统，操作不可逆，需要更强的安全意识和架构能力
    
-   私钥、助记词、签名和授权必须谨慎处理，这是 Web3 安全的核心
    
-   智能合约一旦部署不可修改，需要充分测试和审计
    

## 实践记录

**合约编写练习：**

-   编写最小 Mint 功能合约
    
-   实现获取账户余额功能
    
-   了解 OpenZeppelin 库的使用方法
    

**学习路径串联：**

-   将文档学习与直播课程内容结合
    
-   对 Web3 整体概念有了更清晰的认识
    

## 问题与卡点

-   合约复杂功能还需要更多练习
    
-   OpenZeppelin 各模块的具体使用场景需要深入了解
    

## 明日计划

1.  继续智能合约实践，尝试更复杂功能
    
2.  完成测试网交易任务
    
3.  阅读 Account Abstraction 文档
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->























今日学习总结：  
今天系统阅读了 AI 基础文档，对已有知识进行了梳理和补充：  
已熟悉的概念（复习巩固）：

-   LLM、Prompt、Context、Agent、Frameworks、MCP、Evaluation
    

新补充的知识：

-   微调（Fine-tuning）：模型参数调整
    

-   推理服务（Inference Services）：部署与 API 调用
    

明日计划：

开始学习 Web3 基础（Network 章节）

阅读 AI × Web3 Bridge 文档

深入复习今天的 AI 基础内容
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->
























\# 每日学习打卡

\> 📅 2026-05-18

\---

\## 今日学习内容概览

今天主要听了两场分享会/活动，记录如下：

| 场次 | 主题 | 收获程度 |

|------|------|---------|

| 第一场 | Corporation | ⭐⭐⭐ 一般 |

| 第二场 | 老师的 Web3 技术分享会 | ⭐⭐⭐⭐⭐ 很大 |

\---

\## 第一场：Corporation

\### 学习情况

\- 由于之前已有一定的相关基础，且\*\*Open Cloud、Hermes、Cloud Code\*\*等工具已经在本地安装并深入使用，所以本场内容以巩固为主，新知识点不多。

\- 整体属于\*\*复习和确认已有认知\*\*的环节。

\---

\## 第二场：老师的技术分享会 ⭐

\### 核心收获

本场分享会学到的东西比较多，主要包括以下几个方向：

\#### 1. Web3 安全

\- 老师分享了 **Web3 安全** 领域的相关知识

\- 这是目前非常热门且重要的方向，后续需要持续跟进

\#### 2. 技术栈与架构

\- 了解到了当前的一些\*\*技术栈\*\*

\- 学习了相关的\*\*架构设计\*\*思路

\#### 3. 开源资源与素材

\- 在 **GitHub** 上发现了一些 **Web3 相关的开源库**

\- 这些可以作为后续深入学习的素材

\- 伙伴们还分享了很多\*\*开源的学习资料\*\*

\---

\## 后续学习计划

\- \[ \] 整理今天分享会提到的 Web3 安全知识点

\- \[ \] 梳理老师分享的技术栈和架构笔记

\- \[ \] 深入调研 GitHub 上发现的相关开源库

\- \[ \] 整理伙伴们推荐的开源学习资料清单

\- \[ \] 择期回顾 Corporation 相关内容，查漏补缺

\---

\## 总结

今天的两场活动以第二场收获最大。老师的 Web3 技术分享会不仅拓宽了技术视野，还提供了大量后续可以深入挖掘的\*\*开源素材和学习资源\*\*。后续重点会放在 Web3 安全、相关技术栈的落地实践，以及开源项目的深入研究上。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
