---
timezone: UTC+8
---

# 张雪涛/erik.hahaha

**GitHub ID:** XuetaoZhang

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->
今日完成AI Security 部分和Agent Identity 部分的文档学习
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->

**\# AI × Web3 School - Day 8-10 学习打卡**

  

\> 日期：2026-05-29

\> Week 2 完成：AI × Web3 Bridge 核心实践

  

\---

  

**\## 📅 本周学习概览**

  

**\### Day 7: Chain-aware Context 实践**

\- ✅ 理解链上数据的 Context 管理

\- ✅ 实现手动 + 自动化交易数据收集

\- ✅ 设计标记系统（⛓️ 📚 💭）

  

**\### Day 8-9: Web3 Tool Use + Agent Workflow 综合实践 ⭐**

\- ✅ 实现 5 个 Web3 Tools（只读、模拟、权限检查）

\- ✅ 实现 7 步 Agent Workflow

\- ✅ 实现 Human-in-the-loop 机制

\- ✅ 完成 5 个测试用例（4 个完全通过）

\- ✅ 写完整实验报告

  

**\### Day 10: AI × Web3 进阶主题浏览**

\- ✅ 快速浏览 5 个进阶主题

\- 🔄 选做 AI Security 实践（进行中）

\- 🔄 Week 2 总结（进行中）

  

\---

  

**\## 🎯 Day 8-9 核心成果：Web3 Swap Agent**

  

**\### 项目简介**

  

实现了一个完整的 Web3 代币交换 Agent，包含：

\- **5 个 Web3 Tools**：余额查询、授权查询、calldata 生成、权限检查

\- **7 步工作流**：解析 → 查询 → 验证 → 计划 → 确认 → 执行 → 记录

\- **Human-in-the-loop**：用户确认 + 价格滑点检查

\- **5 个测试用例**：覆盖正常流程、错误链、滑点过大、余额不足、用户拒绝

  

**\### 项目结构**

  

\`\`\`

experiments/web3-swap-agent/

├── tools/ # Web3 工具

│ ├── read\_[tools.py](http://tools.py) # 只读工具（余额、授权查询）

│ ├── simulate\_[tools.py](http://tools.py) # 模拟工具（生成 calldata）

│ └── permission\_[tools.py](http://tools.py) # 权限检查工具

├── workflow/ # Agent 工作流

│ ├── [agent.py](http://agent.py) # SwapAgent 主流程（7 步）

│ └── human\_in\_[loop.py](http://loop.py) # 用户确认界面

├── tests/ # 测试用例

│ ├── test\_case\_[1.py](http://1.py) # 正常流程 ✅

│ ├── test\_case\_[2.py](http://2.py) # 错误链 ⚠️

│ ├── test\_case\_[3.py](http://3.py) # 滑点过大 ✅

│ ├── test\_case\_[4.py](http://4.py) # 余额不足 ✅

│ └── test\_case\_[5.py](http://5.py) # 用户拒绝 ✅

├── [DESIGN.md](http://DESIGN.md) # 设计文档

├── EXPERIMENT\_[REPORT.md](http://REPORT.md) # 实验报告

└── IMPLEMENTATION\_[GUIDE.md](http://GUIDE.md) # 实现指南

\`\`\`

  

**\### 核心亮点**

  

**\#### 1. 工具分类设计 ⭐**

  

按风险级别分类，清晰的权限边界：

  

**只读工具（低风险）**：

\`\`\`python

get\_eth\_balance(address) # 查询 ETH 余额

get\_erc20\_balance(address, token) # 查询 ERC-20 余额

get\_erc20\_allowance(owner, spender, token) # 查询授权额度

\`\`\`

  

**模拟工具（中风险）**：

\`\`\`python

generate\_approve\_calldata(token, spender, amount) # 生成 approve calldata

\`\`\`

  

**权限检查工具（低风险）**：

\`\`\`python

check\_transaction\_permission(token, spender, amount) # 检查白名单

\`\`\`

  

**\#### 2. 7 步工作流设计 ⭐**

  

清晰的步骤拆解，职责单一：

  

\`\`\`

Step 1: 解析请求 → 提取 token、金额、地址

Step 2: 查询价格 → 获取当前价格，计算预期输出

Step 3: 检查余额和授权 → 验证用户是否有足够资金

Step 4: 生成交易计划 → 生成 approve + swap 步骤

Step 5: 用户确认 → Human-in-the-loop，价格滑点检查 ⭐

Step 6: 执行交易 → 发送交易（Mock）

Step 7: 记录结果 → 生成摘要，记录交易哈希

\`\`\`

  

**\#### 3. Human-in-the-loop 设计 ⭐⭐⭐**

  

**交互界面**：

\`\`\`

\============================================================

🔄 Swap Transaction Confirmation

\============================================================

  

📋 Transaction Details:

From: 100 USDC

To: ~0.05 ETH

Price: 1 USDC = 0.0005 ETH

  

⚠️ This transaction requires 2 step(s):

1\. Approve USDC to Uniswap Router

2\. Execute Swap

  

💰 Current Balance:

USDC: 200

  

⚠️ Price Check:

Previous price: 0.0005 ETH/USDC

Current price: 0.00046 ETH/USDC

Change: -8.0% ⚠️ (exceeds 5% tolerance)

  

⚠️ WARNING: Price has changed significantly!

New expected output: 0.046 ETH (was 0.05)

  

✅ Permission Check: Passed

  

\============================================================

Do you want to proceed? (y/n):

\`\`\`

  

**核心特性**：

\- ✅ 完整的交易信息展示

\- ✅ **价格滑点检查**（重新查询价格，对比变化）

\- ✅ 超过 5% 阈值显示警告

\- ✅ 权限检查结果展示

\- ✅ 测试模式支持（环境变量控制）

  

**\#### 4. 测试用例设计**

  

**Case 1: 正常流程** ✅

\- 余额充足（200 USDC）

\- 价格稳定（+2% < 5%）

\- 用户批准

\- 成功生成 approve + swap 交易

  

**Case 3: 滑点过大** ✅

\- 价格下跌 -8%（超过 5% 阈值）

\- 显示警告和新预期输出

\- Case 3a: 用户批准 → 成功

\- Case 3b: 用户拒绝 → 返回错误

  

**Case 4: 余额不足** ✅

\- Mock 地址余额只有 20 USDC

\- 请求 100 USDC

\- Step 3 检测到余额不足 → 返回错误

  

**Case 5: 用户拒绝** ✅

\- 所有检查通过

\- 用户在 Step 5 拒绝

\- 返回错误`User rejected`

  

**Case 2: 错误链** ⚠️

\- 测试框架完成

\- 链检查逻辑未实现（设计决策：专注核心流程）

  

**\### 测试结果**

  

\`\`\`bash

\# 运行所有测试

✅ Test Case 1 PASSED - 正常流程

✅ Test Case 3a PASSED - 滑点过大，用户批准

✅ Test Case 3b PASSED - 滑点过大，用户拒绝

✅ Test Case 4 PASSED - 余额不足

✅ Test Case 5 PASSED - 用户拒绝

⚠️ Test Case 2 COMPLETED - 错误链（框架完成，逻辑未实现）

  

测试覆盖率: 80%（4/5 完全通过）

\`\`\`

  

\---

  

**\## 💡 核心学习收获**

  

**\### 1. Web3 Tool Use 的核心是分类和权限控制**

  

**关键认知**：

\- 不是所有工具都需要用户确认

\- 只读工具可以自由调用，签名工具必须严格控制

\- 权限检查应该在生成交易计划时进行（Step 4），而不是执行时

  

**工具分类原则**：

\`\`\`

只读（低风险）→ 无需确认，可以频繁调用

模拟（中风险）→ 需要权限检查，但不需要用户确认

签名（高风险）→ 必须经过用户确认

\`\`\`

  

**\### 2. Agent Workflow 的核心是拆解和错误处理**

  

**关键认知**：

\- 复杂流程应该拆解为清晰的步骤

\- 每个步骤职责单一，易于测试和调试

\- 任何步骤失败，立即返回

  

**拆解原则**：

1\. **单一职责**：每个步骤只做一件事

2\. **依赖关系**：后面的步骤依赖前面的步骤

3\. **风险分层**：低风险在前，高风险在后

4\. **可验证性**：每个步骤的输出可验证

5\. **决策点**：在需要决策的地方设置边界

  

**\### 3. Human-in-the-loop 的核心是信息透明和用户控制**

  

**关键认知**：

\- 用户确认界面应该提供完整的信息

\- **价格滑点检查是必需的**（防止用户在价格剧烈波动时执行交易）

\- 测试模式支持是必需的（方便自动化测试）

  

**设计要点**：

\- 显示交易详情（From、To、Price）

\- 显示交易步骤（Approve + Swap）

\- 显示当前余额

\- **重新查询价格，对比变化**（核心创新）

\- 显示权限检查结果

  

**\### 4. 任务拆解能力的训练方法**

  

**5 个方法**：

1\. **刻意练习**：每天拆解 1 个任务，反复练习

2\. **学习经典案例**：研究优秀项目的拆解方式

3\. **反向工程**：看到复杂系统，尝试反推步骤

4\. **从失败中学习**：尝试不同方案，发现问题，反思改进

5\. **建立模式库**：记录常见模式，形成自己的设计模式库

  

**关键**：

\- 不是死记硬背（记住某个任务是 7 步）

\- 而是理解原则（为什么这样拆解）

\- 通过大量练习，形成直觉

  

**\### 5. AI 时代的人类价值**

  

**LLM 可以做到的**：

\- 生成初步的步骤列表

\- 识别依赖关系

\- 生成代码实现

  

**LLM 做不好的**：

\- 理解业务约束（安全性、合规性、成本）

\- 权衡 trade-off（性能 vs 可维护性）

\- 创新和突破（创造新模式）

\- 责任和决策（承担最终责任）

  

**未来的协作模式**：

\- LLM 生成方案（快速迭代）

\- 人类 review 和优化（质量保证）

\- LLM 实现细节（提高效率）

\- 人类验证和测试（最终把关）

  

**关键认知**：

\- 在 AI 时代，**\*\*判断力\*\***比**\*\*执行力\*\***更重要

\- 拆解能力是判断力的基础

\- 学会与 LLM 协作是未来的核心竞争力

  

\---

  

**\## 📊 项目统计**

  

| 指标 | 数值 |

|------|------|

| 实现时间 | ~3 小时 |

| 代码行数 | ~800 行 |

| 工具数量 | 5 个（3 只读 + 1 模拟 + 1 权限） |

| 工作流步骤 | 7 步 |

| 测试用例 | 5 个（4 完全通过 + 1 框架完成） |

| 测试覆盖率 | 80% |

| 文档完整度 | 100%（设计文档 + 实验报告 + 实现指南） |

  

\---

  

**\## 🎯 Day 10 学习内容**

  

**\### 快速浏览 5 个进阶主题**

  

已完成核心概念总结文档`notes/day10-advanced-topics-summary.md`

  

**1\. Agent Identity（Agent 身份）**

\- 3 种身份模式：共享钱包、独立钱包、Session Key

\- DID（去中心化身份）

\- 签名验证方法

  

**2\. Trust & Reputation（信任与声誉）**

\- 链上声誉系统

\- 声誉计算模型

\- 信任机制（质押、保险、多签）

  

**3\. AI Security（AI 安全）⭐ 重点**

\- Prompt Injection 攻击和防御

\- 数据投毒

\- 模型攻击

\- 权限提升

  

**4\. AI Privacy（AI 隐私）**

\- 隐私保护技术（ZKP、TEE、联邦学习）

\- 隐私与功能的权衡

  

**5\. Verifiable AI（可验证 AI）**

\- 验证方法（zkML、TEE、乐观验证）

\- 链上 AI 的挑战

  

**\### 选做实践（进行中）**

  

**选择**：AI Security - Prompt Injection 检测

  

**原因**：

\- 非常实用，所有 Agent 都需要防御 Prompt Injection

\- 难度适中，2 小时可以完成最小实践

\- 可以应用到未来的所有 Agent 项目

  

\---

  

**\## 📈 Week 2 学习成果总结**

  

**\### 核心能力提升**

  

**1\. AI × Web3 集成能力** ⭐⭐⭐⭐⭐

\- ✅ 理解 Web3 Tool Use 的核心原则

\- ✅ 掌握 Agent Workflow 的设计方法

\- ✅ 实现 Human-in-the-loop 机制

\- ✅ 理解 Chain-aware Context 的设计

  

**2\. 系统设计能力** ⭐⭐⭐⭐⭐

\- ✅ 任务拆解能力（7 步工作流）

\- ✅ 权限分级设计（只读、模拟、签名）

\- ✅ 错误处理策略（立即返回）

\- ✅ 测试驱动开发（5 个测试用例）

  

**3\. 安全意识** ⭐⭐⭐⭐

\- ✅ 理解 Prompt Injection 攻击

\- ✅ 设计权限检查机制

\- ✅ 实现用户确认流程

\- ✅ 价格滑点检查

  

**4\. 协作能力** ⭐⭐⭐⭐

\- ✅ 理解人类与 LLM 的协作模式

\- ✅ 学会设计、实现、review 的工作流

\- ✅ 培养判断力和决策能力

  

**\### 完成的实践项目**

  

1\. **Chain-aware Context 实践**（Day 7）

\- 手动收集交易数据

\- 自动化脚本实现

\- 标记系统设计

  

2\. **Web3 Swap Agent**（Day 8-9）⭐ 核心项目

\- 5 个 Web3 Tools

\- 7 步 Agent Workflow

\- Human-in-the-loop 机制

\- 5 个测试用例

\- 完整文档

  

3\. **进阶主题浏览**（Day 10）

\- 5 个主题核心概念总结

\- AI Security 实践（进行中）

  

**\### 产出的文档**

  

1\. **学习笔记**

\- `notes/frameworks-handbook-summary.md`

\- `notes/mcp-handbook-summary.md`

\- `notes/day10-advanced-topics-summary.md`

  

2\. **实践文档**

\- `experiments/chain-aware-context/README.md`

\- `experiments/web3-swap-agent/DESIGN.md`

\- `experiments/web3-swap-agent/EXPERIMENT_REPORT.md`

\- `experiments/web3-swap-agent/IMPLEMENTATION_GUIDE.md`

  

3\. **每日记录**

\- `daily/2026-05-22.md` (Day 5: Frameworks)

\- `daily/2026-05-27.md` (Day 6: MCP)

\- `daily/2026-05-28.md` (Day 7: Chain-aware Context)

  

\---

  

**\## 🚀 Week 3 规划**

  

**\### 学习重点**

  

**Phase 3: Advanced Topics & Projects**

  

根据 Week 2 的学习成果，Week 3 将重点关注：

  

1\. **深入 AI Security**

\- 完成 Prompt Injection 检测实践

\- 研究更多 AI 安全威胁

\- 设计安全的 Agent 架构

  

2\. **Agent Identity & Wallet**

\- 实现 Session Key 管理

\- 设计权限控制系统

\- 研究 ERC-4337 账户抽象

  

3\. **项目开发**

\- 选择一个赛道（Agentic Commerce / Wallet & Permission / AI Security）

\- 设计完整的项目架构

\- 开始实现 MVP

  

**\### 目标**

  

\- ✅ 完成至少 1 个中型项目

\- ✅ 掌握 AI × Web3 的核心技术栈

\- ✅ 准备 Hackathon 项目

\- ✅ 为开源社区贡献代码

  

\---

  

**\## 🔗 项目链接**

  

\- **GitHub 仓库**：[https://github.com/XuetaoZhang/ai-web3-school-cohort-0](https://github.com/XuetaoZhang/ai-web3-school-cohort-0)

\- **Web3 Swap Agent**`experiments/web3-swap-agent/`

\- **实验报告**`experiments/web3-swap-agent/EXPERIMENT_REPORT.md`

\- **测试用例**`experiments/web3-swap-agent/tests/`

  

\---

  

**\## 💭 个人感悟**

  

**\### 关于学习方式**

  

从 Day 5 开始，我调整了学习方式：

\- **之前**：AI 直接生成代码，我只是"旁观者"

\- **现在**：我自己设计、实现、测试，AI 提供指导和 review

  

**效果**：

\- 学习效果显著提升

\- 真正理解了设计原则

\- 培养了系统思维和判断力

  

**\### 关于任务拆解**

  

通过 Web3 Swap Agent 的实践，我深刻理解了任务拆解的重要性：

\- 不是死记硬背（记住某个任务是 7 步）

\- 而是理解原则（为什么这样拆解）

\- 通过大量练习，形成直觉

  

**拆解原则**：

1\. 单一职责

2\. 依赖关系

3\. 风险分层

4\. 可验证性

5\. 决策点

  

**\### 关于 AI 时代的人类价值**

  

与 AI 深入讨论后，我理解了：

\- LLM 会越来越强，但不会完全替代人类

\- 人类的价值在于：业务理解、权衡判断、创新能力、责任担当

\- 未来的工作方式是人类 + LLM 协作，而不是对抗

  

**关键认知**：

\- 在 AI 时代，**\*\*判断力\*\***比**\*\*执行力\*\***更重要

\- 拆解能力是判断力的基础

\- 学会与 LLM 协作是未来的核心竞争力

  

\---

  

**\## 📸 项目截图**

  

**\### 测试运行结果**

  

\`\`\`bash

\============================================================

Test Case 1: Normal Flow

\============================================================

  

\============================================================

🔄 Swap Transaction Confirmation

\============================================================

  

📋 Transaction Details:

From: 100 USDC

To: ~0.05 ETH

Price: 1 USDC = 0.0005 ETH

  

⚠️ This transaction requires 2 step(s):

1\. Approve USDC to Uniswap Router

2\. Execute Swap

  

💰 Current Balance:

USDC: 200.0

  

⚠️ Price Check:

Previous price: 0.0005 ETH/USDC

Current price: 0.00051 ETH/USDC

Change: +2.0% ✅ (within 5% tolerance)

  

✅ Permission Check: Passed

  

\============================================================

\[TEST MODE\] Auto decision: y

  

✅ Transaction approved by user

  

\============================================================

✅ Transaction Completed

\============================================================

  

Successfully swapped 100 USDC to 0.05 ETH

  

Transactions:

\- Approve: 0x354a7eb575919125ec92f13273bda3566fe4bd6de9ee9a4d923735b723c4515b

\- Swap: 0x8c408a3efdaa0f586519de0755129753fa412e563844218eb8b95d68557650c3

  

\============================================================

✅ Test Case 1 PASSED

\============================================================

\`\`\`

  

\---

  

**\## 🎯 下一步行动**

  

**\### 今天（Day 10）**

\- \[x\] 快速浏览 5 个进阶主题

\- \[ \] 完成 AI Security 实践（Prompt Injection 检测）

\- \[ \] 完成 Week 2 总结

\- \[ \] 提交到 GitHub

  

**\### 明天（Week 3 开始）**

\- \[ \] 深入 AI Security 研究

\- \[ \] 开始 Agent Identity & Wallet 实践

\- \[ \] 规划中型项目

  

\---

  

**学习心得**：Week 2 是一个质的飞跃。从理论学习到实践应用，从简单的工具调用到完整的 Agent 工作流，从被动接受到主动设计。最重要的是，我理解了任务拆解的原则，培养了系统思维和判断力。这些能力不仅适用于 AI × Web3，也适用于所有复杂系统的设计。

  

**感谢**：感谢 AI × Web3 School 提供的优质内容和学习平台，感谢 Claude 的耐心指导和深入讨论。

  

\---

  

#AIxWeb3School #Week2 #WebToolUse #AgentWorkflow #HumanInTheLoop #TaskDecomposition #AIxWeb3Bridge
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->


**\# Day 8 打卡 - Web3 Tool Use & Agent Workflow 实践（进行中）**

  

**\## 📚 今日学习**

  

**\### 理论学习**

\- ✅ 快速阅读 Vibe Coding（30 分钟）

\- ✅ 快速阅读 Evaluation（30 分钟）

\- ✅ 深入学习 Web3 Tool Use（1 小时）

\- ✅ 深入学习 Agent Workflow（1 小时）

  

**\### 核心理解**

  

**Web3 Tool Use**：

\- Web3 Tools 是给 Agent 封装的链上工具

\- 特异性：能够获取链上数据、改变链上数据、交易、签名

\- 核心挑战：比普通 Tools 风险更大，涉及资金安全

\- 工具分类：只读（低风险）、模拟（中风险）、签名（高风险）

  

**Agent Workflow**：

\- 核心：把完整操作拆解为一系列可验证的步骤

\- 关键设计点：

\- 每一步给予多少权限？

\- 哪些步骤需要 Human-in-the-loop？

\- 错误是否需要重试？

\- 需要记录什么信息？

\- Task Graph：清晰的步骤流程图

  

\---

  

**\## 🧪 实践项目**

  

**\### 项目选择：ERC-20 Swap Agent（综合实践）**

  

结合 Web3 Tool Use 和 Agent Workflow 两个 Handbook 实践，设计一个完整的 Swap Agent。

  

**目标**：

\- 设计一组 Web3 Tools（读、写、签名分离）

\- 设计完整的 Agent Workflow（包含 Human-in-the-loop）

\- 实现 5 个 Regression Cases（正常、错误链、滑点、余额不足、用户拒绝）

  

**\### 实践计划**

  

**Day 8 下午（2 小时）**：

\- ✅ 设计 4 个 Web3 Tools（30 分钟）

\- ✅ 设计 7 步 Task Graph（30 分钟）

\- 🔄 实现核心框架（1 小时）

  

**Day 9（2 小时）**：

\- 实现 5 个 Regression Cases（1 小时）

\- 写实验报告和总结（1 小时）

  

\---

  

**\## 💡 核心收获**

  

**\### 1. Web3 Tools 的设计原则**

  

**工具分类**（按风险等级）：

1\. **只读工具**（低风险）：

\- `get_eth_balance(address)` - 查询 ETH 余额

\- `get_erc20_allowance(owner, spender, token)` - 查询授权额度

\- 特点：不改变链上状态，可以频繁调用

  

2\. **模拟工具**（中风险）：

\- `generate_approve_calldata(token, spender, amount)` - 生成交易草稿

\- 特点：生成 calldata 但不发送交易，用于预览

  

3\. **权限检查工具**（低风险）：

\- `check_transaction_permission(token, spender, amount)` - 检查是否符合规则

\- 特点：基于白名单、限额等规则进行检查

  

**设计原则**：

\- **读写分离**：只读工具和写入工具严格分离

\- **权限分级**：不同工具有不同的权限级别

\- **明确输入输出**：每个工具的接口清晰定义

\- **错误处理**：明确的错误类型和处理方式

\- **日志审计**：记录所有工具调用

  

**\### 2. Agent Workflow 的设计原则**

  

**Task Graph 设计**：

\`\`\`

1\. 读取上下文 → 解析用户请求

2\. 查询价格 → 获取当前市场价格

3\. 生成计划 → 计算交易参数

4\. 模拟交易 → 生成 calldata

5\. 【Human-in-the-loop】用户确认 → 展示交易详情，等待用户决策

6\. 执行交易 → 发送交易（本次实践：只记录）

7\. 记录结果 → 完整的操作日志

\`\`\`

  

**Human-in-the-loop 设计**：

\- **触发条件**：涉及资金操作的步骤（Step 5）

\- **展示信息**：

\- 交易详情（token、amount、spender）

\- 风险提示（授权额度、合约地址）

\- 预估成本（Gas 费用）

\- **用户选项**：

\- 批准：继续执行

\- 拒绝：中止并记录原因

\- 修改：调整参数后重新确认

  

**失败处理**：

\- **可重试的错误**：RPC 超时、网络错误

\- **不可重试的错误**：余额不足、用户拒绝、无效参数

\- **错误记录**：所有错误都记录到日志

  

**\### 3. 与之前实践的对比**

  

**Day 5-6: Frameworks 实践**

\- 实现了简单的 `get_eth_balance` 工具

\- 没有权限分级

\- 没有 Human-in-the-loop

  

**Day 7: Chain-aware Context 实践**

\- 实现了链上数据的 Context 管理

\- 标注了数据来源（⛓️ 📚 💭）

\- 但没有涉及交易操作

  

**Day 8: Web3 Tool Use + Agent Workflow**

\- 完整的工具分类（读、写、签名）

\- 完整的 Workflow 设计（Task Graph）

\- Human-in-the-loop 机制

\- Regression Cases 验证

  

**进步**：

\- 从单个工具 → 工具体系

\- 从简单查询 → 完整交易流程

\- 从无权限控制 → 分级权限管理

\- 从无用户确认 → Human-in-the-loop

  

\---

  

**\## 🎯 设计要点**

  

**\### Web3 Tools 设计**

  

**Tool 1: get\_eth\_balance**

\- 分类：只读工具

\- 权限：低风险

\- 输入：address (string)

\- 输出：balance (float)

\- 错误处理：无效地址、RPC 失败

\- 日志：记录查询时间、地址、结果

  

**Tool 2: get\_erc20\_allowance**

\- 分类：只读工具

\- 权限：低风险

\- 输入：owner, spender, token (string)

\- 输出：allowance (float)

\- 错误处理：无效地址、合约不存在

\- 日志：记录查询参数和结果

  

**Tool 3: generate\_approve\_calldata**

\- 分类：模拟工具

\- 权限：中风险（生成 calldata，不发送）

\- 输入：token, spender, amount

\- 输出：calldata (hex string)

\- 错误处理：无效参数、编码失败

\- 日志：记录生成的 calldata

  

**Tool 4: check\_transaction\_permission**

\- 分类：权限检查工具

\- 权限：低风险

\- 输入：token, spender, amount

\- 输出：allowed (boolean), reason (string)

\- 规则：白名单 token、白名单 spender、最大额度

\- 日志：记录检查结果和原因

  

**\### Task Graph 设计**

  

**Step 1: 读取上下文**

\- 输入：用户请求

\- 输出：解析后的参数

\- 工具：无

\- 失败处理：无法解析 → 要求用户澄清

  

**Step 2: 查询价格**

\- 输入：token pair

\- 输出：当前价格

\- 工具：无（mock 数据）

\- 失败处理：价格查询失败 → 中止

  

**Step 3: 生成计划**

\- 输入：amount, price

\- 输出：交易计划

\- 工具：无

\- 失败处理：无

  

**Step 4: 模拟交易**

\- 输入：交易计划

\- 输出：calldata

\- 工具：generate\_approve\_calldata

\- 失败处理：生成失败 → 中止

  

**Step 5: 【Human-in-the-loop】用户确认**

\- 输入：交易计划 + calldata

\- 输出：用户决策

\- 工具：无

\- 失败处理：用户拒绝 → 中止并记录

  

**Step 6: 执行交易**

\- 输入：calldata + 用户批准

\- 输出：交易哈希（mock）

\- 工具：无（本次只记录）

\- 失败处理：无

  

**Step 7: 记录结果**

\- 输入：交易哈希

\- 输出：完整的操作日志

\- 工具：无

\- 失败处理：无

  

**\### Regression Cases 设计**

  

**Case 1: 正常流程**

\- 输入：合法的 Swap 请求（100 USDC → ETH）

\- 预期：成功生成交易草稿，用户批准，记录成功

  

**Case 2: 错误链**

\- 输入：请求在 BSC 上执行

\- 预期：Step 1 拒绝，提示只支持 Ethereum

  

**Case 3: 滑点过大**

\- 输入：价格变化超过 5%

\- 预期：Step 2 警告，要求用户重新确认

  

**Case 4: 余额不足**

\- 输入：用户余额不足

\- 预期：Step 3 拒绝，提示余额不足

  

**Case 5: 用户拒绝**

\- 输入：用户在 Step 5 选择拒绝

\- 预期：中止交易，记录用户拒绝原因

  

\---

  

**\## 📊 学习统计**

  

\- **学习时间**：6 小时（Day 7: 4h + Day 8: 2h）

\- **完成进度**：Day 8 / 42 天

\- **实践产出**：

\- Day 7: Chain-aware Context 实践（手动 + 自动）

\- Day 8: Web3 Tool Use + Agent Workflow 设计（进行中）

\- **GitHub 提交**：2 次 commit

\- **核心理解**：

\- Web3 Tools 的分类和权限管理

\- Agent Workflow 的 Task Graph 设计

\- Human-in-the-loop 的触发时机和交互设计

  

\---

  

**\## 🔗 相关链接**

  

\- **GitHub 仓库**：[https://github.com/XuetaoZhang/ai-web3-school-cohort-0](https://github.com/XuetaoZhang/ai-web3-school-cohort-0)

\- **今日实践**`experiments/web3-swap-agent/`

\- **Handbook 章节**：

\- [https://aiweb3.school/zh/handbook/bridge/web3-tool-use/](https://aiweb3.school/zh/handbook/bridge/web3-tool-use/)

\- [https://aiweb3.school/zh/handbook/bridge/agent-workflow/](https://aiweb3.school/zh/handbook/bridge/agent-workflow/)

  

\---

  

**\## 🚀 下一步计划**

  

**今天剩余时间（1.5 小时）**：

\- 实现 4 个 Web3 Tools（简化版）

\- 实现 Task Graph 主流程

\- 实现 Human-in-the-loop（命令行交互）

  

**明天（Day 9，2 小时）**：

\- 实现 5 个 Regression Cases

\- 写实验报告

\- 总结 Web3 Tools 和 Agent Workflow 的设计原则

  

\---

  

#AIxWeb3School #Day8 #Web3ToolUse #AgentWorkflow #HumanInTheLoop #ERC20Swap
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->



**\# Day 5-6 打卡 - Frameworks & MCP 实践**

  

**\## 📚 今日学习**

  

**\### 理论学习**

\- ✅ 完成 Handbook Frameworks 章节阅读

\- ✅ 理解 Frameworks 的核心价值：工程化工具，集成常用组件

\- ✅ 掌握 LangChain、LlamaIndex、AutoGPT 的核心概念和适用场景

\- ✅ 完成 Handbook MCP 章节阅读

\- ✅ 理解 MCP 的核心概念：Server、Client、Tools、标准化协议

\- ✅ 理解 MCP 与传统 Tool Calling 的区别

  

**\### 实践项目**

**Frameworks 实践**：

\- ✅ 实现项目1：不使用 Frameworks 的 Agent（手动实现 Function Calling）

\- ✅ 实现项目2：使用 LangGraph 的 Agent（一行代码搞定）

\- ✅ 对比两种方式的代码量、易用性、可维护性

\- ✅ 验证 Frameworks 的核心价值：减少样板代码，提高开发效率

  

**MCP 实践**：

\- ✅ 使用 MCP SDK 实现只读文档服务器

\- ✅ 实现 `search_docs` 工具（搜索本地项目文档）

\- ✅ 实现 `get_file` 工具（读取白名单目录文件）

\- ✅ 实现完整的安全机制（白名单、路径验证、错误处理、日志审计）

\- ✅ 编写测试客户端验证功能

\- ✅ 设计权限升级方案（写入工具的安全设计）

  

\---

  

**\## 🎯 核心收获**

  

**\### 1. Frameworks 的价值：减少样板代码**

  

**对比实验结果**：

\- **项目1（手写）**：120 行代码，10+ 个手动步骤

\- 手动创建 while 循环

\- 手动检查 `message.tool_calls`

\- 手动解析工具参数

\- 手动执行工具函数

\- 手动构造 tool result 消息

\- 手动判断是否继续循环

  

\- **项目2（LangGraph）**：50 行代码，2 行核心代码

\`\`\`python

agent\_executor = create\_react\_agent(llm, tools)

result = agent\_executor.invoke({"messages": \[("user", question)\]})

\`\`\`

  

**核心认知**：

\- Frameworks 帮你省掉了 Agent 循环的样板代码

\- 代码减少 60%，但功能完全一致

\- 适合快速开发，但抽象层较多，调试相对困难

  

\### 2. 先理解原理，再用 Frameworks

  

**关键验证**：

\- 先手写了完整的 Function Calling 流程（项目1）

\- 理解了 Agent 的工作原理（调用 LLM → 解析工具调用 → 执行工具 → 返回结果 → 循环）

\- 再用 LangGraph（项目2），才能理解 Framework 帮我做了什么

  

**如果直接用 Framework**：

\- 不理解底层逻辑

\- 遇到问题无法调试

\- 不知道 Framework 的价值在哪里

  

\### 3. MCP 是标准化的工具协议

  

**MCP 的核心价值**：

\- **标准化协议**：任何 MCP Client 都能调用你的 MCP Server

\- **跨应用复用**：一个 MCP Server 可以被多个 Agent 使用

\- **独立进程**：MCP Server 是独立进程，通过 stdio 通信

\- **安全隔离**：明确的权限边界，白名单控制

  

**MCP vs LangChain Tools**：

| 维度 | MCP | LangChain Tools |

|------|-----|-----------------|

| 协议标准 | 开放协议 | LangChain 专属 |

| 通信方式 | stdio（进程间通信） | 函数调用 |

| 跨语言 | 支持 | 不支持（Python only） |

| 复用性 | 高（独立进程） | 低（需要导入代码） |

  

\### 4. 安全设计的核心原则

  

**MCP Server 的安全实现**：

  

**1\. 路径白名单**：

\`\`\`python

ALLOWED\_DIRECTORIES = \[

BASE\_DIR / "daily",

\]

  

def is\_path\_allowed(path: Path) -> bool:

resolved\_path = path.resolve() # 防止符号链接攻击

return any(

resolved\_[path.is](http://path.is)\_relative\_to(allowed\_dir.resolve()) # 防止路径遍历

for allowed\_dir in ALLOWED\_DIRECTORIES

)

\`\`\`

  

**2\. 明确错误处理**：

\`\`\`python

if not is\_path\_allowed(file\_path):

allowed\_paths = '\\n'.join(f" - {d}" for d in ALLOWED\_DIRECTORIES)

raise PermissionError(

f"Access denied: Path '{path}' is not within allowed directories.\\n"

f"Allowed directories:\\n{allowed\_paths}"

)

\`\`\`

\- 错误消息清晰，包含上下文信息

\- 不会静默失败

\- 不会泄露敏感信息

  

**3\. 日志审计**：

\`\`\`json

{

"timestamp": "2026-05-27T22:53:18.341058",

"tool": "search\_docs",

"arguments": {"query": "Day"},

"success": true,

"result\_summary": {"type": "str", "length": 2279}

}

\`\`\`

\- 所有工具调用都记录到日志

\- 结构化日志（JSON 格式）

\- 便于审计和调试

  

\### 5. 权限升级的设计思路

  

**只读 → 写入的权限升级**：

  

**挑战**：

\- 什么时候需要用户确认？

\- 如何撤销授权？

\- 如何审计每次调用？

  

**设计方案**（已完成设计文档）：

1\. **权限分级**：只读（低风险）→ 写入（中风险）→ 删除（高风险）

2\. **用户确认**：写入/删除操作需要用户明确确认

3\. **授权管理**：支持临时授权、永久授权、撤销授权

4\. **审计日志**：记录所有写入操作，包含操作者、时间、内容

  

\---

  

\## 🧪 实践成果

  

\### Frameworks 实践

  

**项目结构**：

\`\`\`

experiments/frameworks-practice/

├── project1-no-framework/ # 手写版本（120 行）

│ └── [agent.py](http://agent.py)

└── project2-langchain/ # LangGraph 版本（50 行）

└── [agent.py](http://agent.py)

\`\`\`

  

**测试结果**：

\- ✅ 两个项目功能完全一致

\- ✅ 都能正确调用 `get_eth_balance` 工具

\- ✅ 都能返回正确的余额结果

\- ✅ LangGraph 版本代码减少 60%

  

\### MCP 实践

  

**项目结构**：

\`\`\`

experiments/mcp-practice/

├── src/

│ ├── [server.py](http://server.py) # MCP Server 实现

│ ├── [config.py](http://config.py) # 白名单配置

│ └── [logger.py](http://logger.py) # 日志系统

├── tests/

│ └── test\_[client.py](http://client.py) # 测试客户端

├── logs/

│ └── mcp\_server.log # 审计日志

└── PERMISSION\_[UPGRADE.md](http://UPGRADE.md) # 权限升级方案

\`\`\`

  

**测试结果**：

\- ✅ 搜索文档：成功搜索到 10 个包含 "Day" 的文档

\- ✅ 读取文件：成功读取白名单内的文件（8477 字符）

\- ✅ 拒绝非法访问：成功拒绝访问 `/etc/passwd`

\- ✅ 日志记录：所有操作都正确记录到日志文件

  

\---

  

\## 💭 深度思考

  

\### 思考题 1：何时使用 Frameworks？

  

**适合使用**：

\- 复杂的多步骤应用

\- 需要快速开发

\- 团队协作（统一架构）

\- 需要 Memory、Tools、Chains 等组件

  

**不适合使用**：

\- 简单的单次 API 调用

\- 需要极致性能优化

\- 需要完全控制底层逻辑（比如 Day 4 的 Context 分层）

\- 原型验证阶段

  

**结论**：先理解原理，再按需引入 Frameworks。

  

\### 思考题 2：MCP 的核心价值是什么？

  

**对比传统 Tool Calling**：

\- 传统方式：工具函数直接写在 Agent 代码里，难以复用

\- MCP 方式：工具函数放在独立的 MCP Server，可以跨 Agent 复用

  

**MCP 的价值**：

1\. **标准化**：统一的协议，任何 Client 都能用

2\. **复用性**：一个 MCP Server 可以被多个 Agent 使用

3\. **安全性**：明确的权限边界，白名单控制

4\. **可组合性**：多个 MCP Server 可以组合使用

  

\### 思考题 3：如何设计安全的 Agent 工具？

  

**核心原则**（从 MCP 实践中学到）：

1\. **最小权限**：只给必要的权限（只读 vs 写入 vs 删除）

2\. **白名单控制**：明确定义允许访问的资源

3\. **路径验证**：防止路径遍历攻击`../../../etc/passwd`）

4\. **明确错误**：错误消息清晰，不会静默失败

5\. **日志审计**：记录所有操作，便于追溯

6\. **用户确认**：高风险操作需要用户明确确认

  

\---

  

\## 📊 学习统计

  

\- **学习时间**：8 小时

\- **完成进度**：Day 5-6 / 42 天

\- **实践产出**：

\- Frameworks 对比实验（2 个项目）

\- MCP 只读服务器（完整实现）

\- 权限升级方案设计文档

\- 完整的测试和日志

\- **GitHub 提交**：6 次 commit

\- **核心理解**：

\- Frameworks 减少样板代码，但要先理解原理

\- MCP 是标准化的工具协议，支持跨应用复用

\- 安全设计的核心是最小权限 + 白名单 + 审计

  

\---

  

\## 🔗 相关链接

  

\- **GitHub 仓库**：[https://github.com/XuetaoZhang/ai-web3-school-cohort-0](https://github.com/XuetaoZhang/ai-web3-school-cohort-0)

\- **Frameworks 实践**`experiments/frameworks-practice/`

\- **MCP 实践**`experiments/mcp-practice/`

\- **Handbook 章节**：

\- [https://aiweb3.school/zh/handbook/ai/frameworks/](https://aiweb3.school/zh/handbook/ai/frameworks/)

\- [https://aiweb3.school/zh/handbook/ai/mcp/](https://aiweb3.school/zh/handbook/ai/mcp/)

  

\---

  

\## 🚀 下一步计划

  

**Week 1 完成情况**：

\- ✅ Day 1-2: LLM & Prompt

\- ✅ Day 3-4: Context & RAG

\- ✅ Day 5-6: Agent & Frameworks & MCP

  

**Week 2 计划**（Day 8-14）：

\- Day 8-10: Vibe Coding & Evaluation

\- Day 11-14: Fine-tuning & Inference（可选深入）

  

**Week 3 计划**（AI × Web3 Bridge）：

\- 开始学习 AI × Web3 集成

\- Chain-aware Context

\- Web3 Tool Use

\- Agent Workflow

  

\---

  

#AIxWeb3School #Day5 #Day6 #Frameworks #MCP #LangChain #ModelContextProtocol #AgentDevelopment
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->




今日有事，先打卡
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->





今日完成：

今天事情较多，先打卡
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->






今日完成：

1、优化了学习agent的思路和学习路径，不再完全依靠agent出代码和总结经验，而是只是在卡壳的时候提示，尽量自己学习问题；

2、ai在web3中的应用学习；

今日感想：

1、之前全部都是ai查看handbook生成方案，然后总结经验，连最后的结果测试都是ai出得，我学习到的东西比较少，及时替换掉
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->







**\# Day 4 打卡 - Context 管理实践**

  

**\## 📚 今日学习**

  

**\### 理论学习**

\- ✅ 完成 Handbook Context 章节阅读

\- ✅ 理解 Context 的第一性原理：信息治理问题

\- ✅ 掌握 Context Window、Context Engineering、Memory、Knowledge Base 四大核心概念

\- ✅ 理解 Web3 场景的 Context 挑战：链上事实 vs dApp 说明、实时查询 vs 缓存、安全边界

  

**\### 实践项目**

\- ✅ 设计钱包授权检查 Agent 的完整 Context Spec（6 层分层结构）

\- ✅ 实现完整的 Agent 代码（模拟数据源 + 工具函数 + 测试脚本）

\- ✅ 运行 4 个测试用例，验证 Context 分层的价值

\- ✅ 填写完整的实验报告（包含所有测试用例分析、价值分析、思考题）

  

\---

  

**\## 🎯 核心收获**

  

**\### 1. Context 是信息治理问题**

  

Context 不是简单的文本拼接，而是信息治理问题：

\- **分层标注**：不同来源的信息要分层（链上数据 vs dApp 说明）

\- **可信度隔离**：可信度不同的信息要隔离（事实 vs 声称）

\- **刷新策略**：过期的信息要及时刷新（实时查询 vs 缓存）

\- **安全边界**：明确定义哪些信息可以影响决策

  

**\### 2. 不可信输入必须隔离标注**

  

**关键验证**（测试用例 3）：

\- dApp 页面假冒 "Official Uniswap Router"

\- 但 Agent 没有被误导

\- 正确识别出这是已知诈骗合约（Fake Uniswap Router，曾导致 $2.3M 损失）

\- 不可信输入层成功隔离了钓鱼信息

\- **事实层（链上数据）优先级高于不可信输入层（dApp 说明）**

  

如果没有 Context 分层，LLM 会被 "Official Uniswap Router" 误导，认为这是真的 Uniswap。

  

**\### 3. 记忆层只做参考，不做决策**

  

**关键验证**（测试用例 4）：

\- 用户历史批准过 Uniswap

\- 但 Agent 没有自动批准

\- 记忆层只是提示用户历史操作

\- 必须重新检查当前状态（余额、授权额度、合约信息）

\- **Memory 不能替代实时授权**

  

**\### 4. Context 分层的核心原则**

  

1\. **分清来源**：链上数据 vs dApp 说明 vs 用户历史

2\. **标注可信度**：事实 vs 声称 vs 推测

3\. **定义优先级**：事实层 > 知识层 > 记忆层 > 不可信输入层

4\. **明确边界**：哪些信息可以影响决策，哪些只做参考

5\. **刷新策略**：实时查询（余额、授权状态）vs 缓存（合约信息、安全规则）

6\. **安全边界**：不可信输入必须隔离

  

\---

  

**\## 🧪 实践成果**

  

**\### Context Spec 设计**

  

设计了钱包授权检查 Agent 的完整 Context Spec：

  

**6 层分层结构**：

1\. **指令层（System Rules）**：Agent 的角色和边界、输出格式要求、安全原则

2\. **任务层（Task Context）**：用户意图、会话信息（session\_id, timestamp）

3\. **事实层（Facts）**：链上数据（余额、授权状态、合约信息）、模拟结果

4\. **知识层（Knowledge Base）**：安全规则、历史案例、诈骗合约黑名单

5\. **不可信输入层（Untrusted Input）**：dApp 页面说明（明确标注：来源不可信，只做参考）

6\. **记忆层（Memory）**：用户历史授权记录、用户偏好（原则：只做参考，不做决策）

  

**\### 测试结果**

  

| 测试用例 | 预期风险 | 实际风险 | 核心验证点 |

|---------|---------|---------|-----------|

| 1. Uniswap + 无限授权 | medium | medium ✅ | 识别无限授权风险，但认可 Spender 可信度 |

| 2. 未知合约 + 无限授权 | high | high ✅ | 识别未知合约风险，警惕高 APY 骗局 |

| 3. 已知诈骗合约 | high | high ✅ | **不被 dApp 假冒误导，正确识别诈骗** |

| 4. Uniswap + 有限授权 | low | low ✅ | 记忆层只做参考，不自动批准 |

  

所有测试用例的风险等级都符合预期！

  

\---

  

**\## 💭 深度思考**

  

**\### 1. 如果 dApp 页面说明和链上数据冲突，Agent 应该相信谁？**

  

**答案**：永远相信链上数据（事实层）。

  

**原因**：

\- 链上数据是可验证的事实（合约地址、余额、模拟结果）

\- dApp 页面说明是不可信输入（可以被钓鱼网站伪造）

\- 测试用例 3 证明了这一点：dApp 假冒 "Official Uniswap Router"，但链上数据显示这是诈骗合约

  

**\### 2. 用户历史偏好应该如何使用？**

  

**答案**：只做参考，不做决策。

  

**原因**：

\- 用户历史批准过 Uniswap，不代表所有 Uniswap 授权都安全

\- 授权额度、合约版本、用户余额都可能变化

\- Memory 不能替代实时授权

  

**\### 3. 如何设计刷新策略？**

  

**实时查询**（不能缓存）：

\- 用户余额（可能随时变化）

\- 授权状态（可能被其他交易修改）

\- 模拟结果（依赖当前链状态）

  

**可以缓存**（定期刷新）：

\- 合约信息（部署时间、审计报告、交易量）

\- 安全规则（无限授权风险、常见攻击模式）

\- 诈骗合约黑名单（每小时更新）

  

\---

  

**\## 📊 学习统计**

  

\- **学习时间**：6 小时

\- **完成进度**：Day 4 / 42 天

\- **实践产出**：

\- Context Spec 设计文档

\- 完整的 Agent 代码实现（6 个文件）

\- 4 个测试用例

\- 完整的实验报告（包含价值分析和思考题）

\- **GitHub 提交**：3 次 commit

\- **核心理解**：Context 是信息治理问题，不是简单的文本拼接

  

\---

  

**\## 🔗 相关链接**

  

\- **GitHub 仓库**：[https://github.com/XuetaoZhang/ai-web3-school-cohort-0](https://github.com/XuetaoZhang/ai-web3-school-cohort-0)

\- **今日笔记**`daily/2026-05-21.md`

\- **实践代码**`experiments/context-practice/`

\- **实验报告**`experiments/context-practice/EXPERIMENT-REPORT.md`

  

\---

  

**\## 🚀 下一步计划**

  

\- Day 5: Frameworks 学习（LangChain、LlamaIndex、AutoGPT）

\- 考虑重构之前的 Agent，应用 Context 分层设计

\- 继续深入理解 Agent 架构的进阶方向

  

\---

  

#AIxWeb3School #Day4 #Context #AgentDevelopment #Web3Security
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->








**\# Day 3 打卡 - Web3 基础复习 + Web3 AI Assistant**

  

**\## 📚 今日学习内容**

  

**\### 1. Web3 基础知识体系化复习**

\- ✅ 区块链核心概念（PoW/PoS、状态机、Gas 机制）

\- ✅ 智能合约和 Solidity（数据类型、存储模型、安全模式）

\- ✅ DeFi 生态（DEX、借贷、稳定币、流动性挖矿）

\- ✅ 安全问题（重入攻击、整数溢出、访问控制、前端运行）

\- ✅ AI × Web3 结合点思考

  

**\### 2. 实践项目：Web3 AI Assistant**

创建了一个智能合约助手 Agent，实现了 4 个核心工具：

  

**🔍 安全审计工具 (security\_check)**

\- 检测 6 类常见漏洞：重入攻击、tx.origin、未检查调用、访问控制、时间戳依赖、整数溢出

\- 提供详细的修复建议和代码示例

\- 测试结果：vulnerable\_contract.sol 发现 5 个问题，safe\_contract.sol 发现 2 个问题

  

**🔨 代码生成工具 (generate\_contract)**

\- 支持 4 种合约类型：ERC20、ERC721、多签钱包、简单合约

\- 使用 OpenZeppelin 标准库

\- 自动添加安全特性（Ownable、Pausable、ReentrancyGuard）

  

**📖 合约解释工具 (explain\_contract)**

\- 自动分析合约结构（状态变量、函数、事件、修饰符）

\- 识别设计模式（Ownable、ReentrancyGuard）

\- 提供清晰的 JSON 格式输出

  

**⚡ Gas 优化工具 (optimize\_gas)**

\- 检测 5 类优化机会（存储、循环、函数可见性、打包、常量）

\- 估算 Gas 节省量

\- 提供具体的优化建议

  

\---

  

**\## 💡 核心收获**

  

**\### 1. 从通用 Agent 到专业 Agent**

理解了专业 Agent 的关键要素：

\- **领域知识**：深入理解 Web3 安全问题和最佳实践

\- **专业工具**：针对性设计工具函数，而非通用工具

\- **实用价值**：聚焦最常见、最危险的问题

  

从 Day 1 的 Prompt Engineering，到 Day 2 的通用 Agent（计算器、天气查询），再到今天的 Web3 专业 Agent，我看到了一条清晰的学习路径：**\*\*从基础到应用，从通用到专业\*\***。

  

**\### 2. 智能合约安全的重要性**

复习 Web3 基础时，我重新认识了安全问题的严重性：

\- **The DAO 事件**：重入攻击导致 6000 万美元损失

\- **Parity 钱包**：访问控制漏洞导致 3000 万美元被冻结

\- **一个小错误可能导致巨大损失**

  

这让我理解了为什么需要 AI 辅助安全审计：

\- 快速发现常见漏洞

\- 提供修复建议

\- 但仍需人工审核和专业工具验证

  

**\### 3. 正则表达式的局限性**

当前实现使用正则表达式检测漏洞，存在局限：

\- ✅ 优点：快速、无需编译、易于理解

\- ❌ 缺点：只能检测简单模式，无法理解复杂逻辑

\- 💡 改进方向：结合 AST 分析或专业工具（Slither、MythX）

  

**\### 4. AI 辅助开发的定位**

AI 不是要替代开发者，而是**\*\*增强开发者的能力\*\***：

\- 安全审计：快速发现常见漏洞

\- 代码生成：减少重复工作

\- Gas 优化：提供优化建议

\- 文档生成：自动解释合约功能

  

但同时要认识到局限性：

\- 正则表达式只能检测简单模式

\- AI 生成的代码需要人工审核

\- 真正的安全审计需要专业工具

  

\---

  

**\## 🧪 测试结果**

  

创建了 `test_agent.py` 非交互式测试脚本，验证所有功能：

  

\`\`\`

\============================================================

🧪 Web3 AI Assistant 功能测试

\============================================================

  

✅ 测试 1: 安全审计

\- vulnerable\_contract.sol: 5 个问题

\- safe\_contract.sol: 2 个问题

  

✅ 测试 2: 代码生成

\- 成功生成 ERC20 合约（MyToken, MTK）

  

✅ 测试 3: 合约解释

\- 正确识别合约结构和设计模式

  

✅ 测试 4: Gas 优化

\- 检测到 2 个优化机会，估算节省 ~1000 gas

  

\============================================================

✅ 所有测试完成

\============================================================

\`\`\`

  

\---

  

**\## 📂 项目结构**

  

\`\`\`

experiments/web3-ai-assistant/

├── [README.md](http://README.md) # 项目介绍

├── [QUICKSTART.md](http://QUICKSTART.md) # 快速开始指南

├── [tools.py](http://tools.py) # 4 个工具实现（600+ 行）

├── [agent.py](http://agent.py) # AI Agent 主程序

├── test\_[agent.py](http://agent.py) # 测试脚本

├── test\_results.txt # 测试结果

└── examples/ # 示例合约

├── vulnerable\_contract.sol # 有漏洞的合约

└── safe\_contract.sol # 安全的合约

\`\`\`

  

\---

  

**\## 🤔 思考与问题**

  

**\### 已解决的问题**

1\. ✅ 如何设计实用的智能合约分析工具？

\- 参考专业工具（Slither、MythX）的检测项

\- 聚焦最常见、最危险的问题

  

2\. ✅ 如何检测常见的安全漏洞？

\- 重入攻击：检测外部调用和状态更新的顺序

\- 访问控制：检测是否有 onlyOwner 修饰符

\- tx.origin：直接搜索关键字

  

3\. ✅ 如何测试交互式程序？

\- 创建非交互式测试脚本

\- 直接调用工具函数验证功能

  

**\### 待探索的问题**

1\. **静态分析 vs AI 分析**：

\- 静态分析工具（Slither）更准确还是 AI 更准确？

\- 如何结合两者的优势？

  

2\. **链上 AI 的可行性**：

\- 如何在链上运行 AI 模型？

\- Gas 成本是否可接受？

  

3\. **RAG + Web3 的应用**：

\- 如何构建智能合约知识库？

\- 如何处理合约代码的版本问题？

  

\---

  

**\## 📊 学习统计**

  

\- **学习时间**：4 小时

\- Web3 基础复习：1.5 小时

\- Web3 AI Assistant 开发：2 小时

\- 测试和文档：0.5 小时

  

\- **代码量**：

\- [tools.py](http://tools.py): 600+ 行

\- [agent.py](http://agent.py): 100+ 行

\- test\_[agent.py](http://agent.py): 80+ 行

\- 示例合约: 200+ 行

  

\- **Git 提交**：2 次

\- Day 3: Web3 基础复习 + Web3 AI Assistant 项目

\- Day 3 完成：Web3 AI Assistant 测试验证

  

\---

  

**\## 🎯 明日计划**

  

1\. 继续学习 AI × Web3 的其他结合点

2\. 探索链上数据查询（Etherscan API）

3\. 思考 Hackathon 项目方向

4\. 可能的方向：

\- 智能合约知识库 + RAG

\- AI 驱动的 DeFi 策略

\- 链上数据分析 Agent

  

\---

  

**\## 🔗 相关链接**

  

\- **GitHub 仓库**: [https://github.com/XuetaoZhang/ai-web3-school-cohort-0](https://github.com/XuetaoZhang/ai-web3-school-cohort-0)

\- **项目目录**: experiments/web3-ai-assistant/

\- **学习笔记**: daily/[2026-05-20.md](http://2026-05-20.md)

\- **Web3 复习文档**: notes/[web3-basics-review.md](http://web3-basics-review.md)

  

\---

  

**总结**：今天是 AI × Web3 真正结合的一天。从理论到实践，从通用到专业，我不仅复习了 Web3 基础知识，还创建了一个实用的智能合约助手。最重要的是，我理解了 AI 辅助开发的定位：**\*\*增强而非替代开发者\*\***。

  

#AIWeb3School #Day3 #SmartContract #AIAgent #Web3Security
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->









**\# Day 2 打卡 - RAG 系统与 AI Agent 实践**

  

**\## 📅 基本信息**

  

\- **日期**: 2026-05-19

\- **Day**: 2/42

\- **阶段**: Phase 1 - AI 基础强化

  

\---

  

**\## 📚 今日学习内容**

  

**\### 1. RAG (Retrieval-Augmented Generation) 系统**

  

**核心概念**：

\- RAG = 检索（Retrieval）+ 增强（Augmented）+ 生成（Generation）

\- 通过检索外部知识库增强 LLM 的回答能力

\- 解决 LLM 的知识时效性和幻觉问题

  

**实践成果**：

\- ✅ 创建了 3 个版本的 RAG 系统：

1\. **关键词匹配版**：快速理解 RAG 流程

2\. **TF-IDF 向量版**：体验真正的向量检索（⭐ 推荐）

3\. **深度学习版**：生产级方案（需要 ChromaDB）

\- ✅ 构建了 7 个 AI × Web3 主题知识库

\- ✅ 实现了完整的检索→增强→生成流程

  

**技术栈**：

\- DeepSeek API（国内可直接访问）

\- scikit-learn（TF-IDF 向量化）

\- Python 虚拟环境

  

\---

  

**\### 2. AI Agent 与 Tool Use**

  

**核心概念**：

\- **Agent 公式**：Agent = LLM + Tools + Loop

\- **Tool Use 流程**：定义工具 → LLM 决策 → 执行工具 → 整合结果

\- **多步推理**：Agent 可以连续调用多个工具完成复杂任务

  

**实践成果**：

\- ✅ 实现了 4 个工具：

\- `calculator` - 数学计算

\- `get_current_time` - 时间查询

\- `get_weather` - 天气查询

\- `search_knowledge` - 知识库搜索

\- ✅ 创建了 3 个版本的 Agent：

\- **简单版**：演示单次工具调用

\- **多轮版**：支持连续调用多个工具

\- **交互式版**：实时对话体验

\- ✅ 测试通过，工具调用准确

  

\---

  

**\## 💡 关键洞察**

  

**\### 🔥 重要发现：TF-IDF 的局限性**

  

在测试向量检索时，我发现了一个重要问题：

  

**案例**：

\`\`\`

查询："Embedding 向量嵌入有什么用途？"

文档："Embedding 向量嵌入"

TF-IDF 相似度：0.3482（很低！）

\`\`\`

  

**更极端的案例**：

\`\`\`

"Embedding 是什么" vs "向量嵌入是什么"

TF-IDF 相似度：0.15（几乎不相关！）

实际含义：完全相同

\`\`\`

  

**原因分析**：

1\. **词袋模型**：TF-IDF 只看字符匹配，不理解语义

2\. **无法识别近义词**："用途" vs "作用"

3\. **无法识别翻译关系**："Embedding" vs "向量嵌入"

4\. **文档长度敏感**：长短文档相似度偏低

  

**解决方案**：

\- 生产环境需要深度学习 Embedding（如 sentence-transformers）

\- 深度学习模型可以理解语义，相似度可达 0.85+

  

**收获**：

\- 培养了批判性思维：不盲目接受结果，质疑"为什么"

\- 通过实验验证假设

\- 理解算法的工作原理和局限性

  

\---

  

**\### Agent 的工作原理**

  

**核心机制**：

\`\`\`

用户提问

↓

LLM 分析意图

↓

决定是否调用工具

↓

执行工具函数

↓

LLM 整合结果

↓

返回最终答案

\`\`\`

  

**关键点**：

1\. **必须提前告诉 Agent 有哪些工具**：LLM 无法主动发现工具

2\. **工具定义很重要**：清晰的描述决定 LLM 的决策准确性

3\. **多步推理**：通过循环机制实现连续工具调用

  

\---

  

**\## 🛠️ 技术实践**

  

**\### 项目结构**

  

\`\`\`

experiments/

├── [PRACTICE-GUIDE-DEEPSEEK.md](http://PRACTICE-GUIDE-DEEPSEEK.md) # DeepSeek 版本实践指南

├── rag-system-deepseek/ # RAG 系统

│ ├── knowledge\_[base.py](http://base.py) # 知识库定义

│ ├── rag\_[simple.py](http://simple.py) # 关键词匹配版

│ ├── rag\_[vector.py](http://vector.py) # TF-IDF 向量版 ⭐

│ ├── rag\_[system.py](http://system.py) # 深度学习版

│ ├── [QUICKSTART.md](http://QUICKSTART.md) # 快速开始

│ ├── [RETRIEVAL-COMPARISON.md](http://RETRIEVAL-COMPARISON.md) # 检索方式对比

│ └── tfidf\_limitation\_[simple.py](http://simple.py) # TF-IDF 局限性演示

└── ai-agent-deepseek/ # AI Agent 系统

├── [tools.py](http://tools.py) # 工具定义

├── agent\_[simple.py](http://simple.py) # 简单版 Agent

├── agent\_[multi.py](http://multi.py) # 多轮对话版

├── agent\_[interactive.py](http://interactive.py) # 交互式版

├── [QUICKSTART.md](http://QUICKSTART.md) # 快速开始

└── [README.md](http://README.md) # 实验报告

\`\`\`

  

**\### 代码亮点**

  

**1\. TF-IDF 向量检索实现**：

\`\`\`python

from sklearn.feature\_extraction.text import TfidfVectorizer

from sklearn.metrics.pairwise import cosine\_similarity

  

\# 向量化

vectorizer = TfidfVectorizer(analyzer='char', ngram\_range=(1,3))

doc\_vectors = [vectorizer.fit](http://vectorizer.fit)\_transform(documents)

  

\# 计算相似度

query\_vector = vectorizer.transform(\[query\])

similarities = cosine\_similarity(query\_vector, doc\_vectors)\[0\]

  

\# 排序检索

top\_indices = similarities.argsort()\[-top\_k:\]\[::-1\]

\`\`\`

  

**2\. Agent 多步推理实现**：

\`\`\`python

while True:

response = [client.chat](http://client.chat).completions.create(

model="deepseek-chat",

messages=messages,

tools=TOOL\_DEFINITIONS

)

if response.choices\[0\].message.tool\_calls:

\# 执行工具

for tool\_call in response.choices\[0\].message.tool\_calls:

result = execute\_tool(tool\_call)

messages.append(result)

continue # 继续循环

else:

return response.choices\[0\].message.content # 返回最终答案

\`\`\`

  

\---

  

**\## 🎯 完成情况**

  

\- \[x\] 构建 RAG 系统（3 个版本）

\- \[x\] 创建 AI Agent（3 个版本，4 个工具）

\- \[x\] 理解 Tool Use 工作流程

\- \[x\] 发现并分析 TF-IDF 局限性

\- \[x\] 测试 Agent 系统（工具调用准确）

\- \[x\] 更新学习笔记

\- \[x\] 提交代码到 GitHub

  

**代码统计**：

\- 创建文件：17 个

\- 代码行数：1500+ 行

\- Git 提交：4 次

  

\---

  

**\## 🤔 思考与问题**

  

**\### 已解决的问题**

  

1\. **向量检索 vs 关键词匹配**：

\- ✅ 通过实验发现 TF-IDF 无法识别近义词和翻译关系

\- ✅ 理解了深度学习 Embedding 的必要性

  

2\. **Agent 的工具发现机制**：

\- ✅ 必须提前告诉 Agent 有哪些工具

\- ✅ LLM 无法主动发现工具（安全性和可控性考虑）

  

**\### 待探索的问题**

  

1\. **Embedding 模型选择**：不同模型对检索质量的影响？

2\. **RAG 优化**：文档切片策略、Top-K 选择、重排序？

3\. **Agent 决策机制**：LLM 如何选择工具？工具描述的影响？

4\. **RAG + Agent**：如何结合使用？

  

\---

  

**\## 📈 学习收获**

  

**\### 技术能力**

  

1\. ✅ 掌握了 RAG 的完整工作流程

2\. ✅ 理解了向量检索的原理和局限性

3\. ✅ 掌握了 AI Agent 的核心机制

4\. ✅ 学会了 Tool Use (Function Calling)

5\. ✅ 熟悉了 DeepSeek API 的使用

  

**\### 思维方式**

  

1\. ✅ **批判性思维**：质疑不合理的结果，通过实验验证

2\. ✅ **问题解决能力**：遇到依赖冲突，用简化方案替代

3\. ✅ **渐进式学习**：从简单到复杂，逐步理解核心概念

4\. ✅ **实践优先**：不被工具阻塞，先实现核心功能

  

\---

  

**\## 🔗 相关资源**

  

\- **GitHub 仓库**: [https://github.com/XuetaoZhang/ai-web3-school-cohort-0](https://github.com/XuetaoZhang/ai-web3-school-cohort-0)

\- **学习笔记**: `daily/2026-05-19.md`

\- **RAG 快速开始**: `experiments/rag-system-deepseek/QUICKSTART.md`

\- **Agent 快速开始**: `experiments/ai-agent-deepseek/QUICKSTART.md`

\- **检索方式对比**: `experiments/rag-system-deepseek/RETRIEVAL-COMPARISON.md`

  

\---

  

**\## 💭 今日反思**

  

今天完成了两个重要的实践：RAG 系统和 AI Agent。

  

**最大的收获**是发现了 TF-IDF 的局限性。当我看到 "Embedding 向量嵌入有什么用途？" 和 "Embedding 向量嵌入" 的相似度只有 0.35 时，我的第一反应是"这不对"。通过深入分析和实验验证，我理解了 TF-IDF 作为词袋模型的本质局限：它只看字符匹配，不理解语义。这让我深刻体会到**\*\*批判性思维\*\***的重要性——不盲目接受结果，而是质疑、验证、理解。

  

**Agent 的实践**让我理解了 LLM 的能力边界。LLM 本身只能基于训练数据回答问题，但通过 Tool Use，它可以调用外部工具获取实时信息、执行计算、查询数据库。这种"LLM + Tools + Loop"的模式，让 AI 从"知识库"变成了"行动者"。

  

**技术选型的灵活性**也是重要的一课。遇到 ChromaDB 依赖冲突时，我没有死磕，而是用 TF-IDF 实现了向量检索的核心流程。虽然 TF-IDF 有局限性，但它帮助我理解了向量检索的本质：向量化 → 相似度计算 → 排序。理解原理后，再升级到深度学习方案就水到渠成了。

  

明天计划深入学习 Embedding 模型和 RAG 优化技术，同时开始思考如何将 RAG 和 Agent 结合起来，构建更强大的 AI 应用。

  

\---

  

**Time Spent / 时间投入**: 约 4 小时

\- RAG 系统：2 小时

\- AI Agent：1.5 小时

\- 文档整理：0.5 小时
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->










**\# Day 1 打卡 - AI × Web3 School**

  

**日期**: 2026-05-18

**学员**: XuetaoZhang

**阶段**: Phase 1 - AI 基础

  

\---

  

**\## 📚 今日学习内容**

  

**\### 理论学习**

\- ✅ 阅读 AI 基础章节

\- 大语言模型（LLM）

\- 提示词（Prompt）

\- 上下文（Context）

\- 检索增强生成（RAG）

\- 智能体（Agent）

  

**\### 动手实践**

\- ✅ 完成 Prompt Engineering 基础实践

\- 模糊 vs 清晰 Prompt 对比

\- Zero-shot vs Few-shot 学习

\- 角色设定实验

\- 约束条件控制

\- 结构化输出（JSON、Markdown）

  

\---

  

**\## 💡 关键收获**

  

**\### 1. Prompt Engineering 核心技巧**

  

**清晰度的重要性**

\- 模糊提示词让 LLM 只能输出训练数据中最常见的内容

\- 清晰的提示词能够精确引导 LLM 输出符合要求的结果

\- 实例：智能合约生成，清晰提示词能生成完整的 ERC20 合约

  

**Few-shot Learning 的威力**

\- Zero-shot 只能依赖训练数据中的分类

\- Few-shot 通过示例能显著提升分类准确性

\- 适用场景：交易分类、代码生成、数据标注

  

**约束条件的作用**

\- 明确的约束（如代码行数、输出格式）能减少发散

\- 结构化输出（JSON、Markdown）便于程序解析

\- 适合需要自动化处理的场景

  

**\### 2. 对 AI × Web3 的理解**

  

通过今天的学习，我认识到：

\- Prompt Engineering 是与 AI 有效沟通的基础

\- 在 Web3 场景中，清晰的提示词对于智能合约生成、安全审计等任务至关重要

\- Few-shot 学习特别适合链上交易分类、DeFi 协议分析等场景

  

\---

  

**\## 🛠️ 实践成果**

  

**\### 完成的实验**

1\. **基础 Prompt 对比**

\- 模糊 vs 清晰：效果差异显著

\- Zero-shot vs Few-shot：Few-shot 明显更准确

  

2\. **角色与约束**

\- 角色设定：定义了 Solidity 安全审计专家角色

\- 约束条件：限制代码行数和输出格式，减少发散

  

3\. **输出格式控制**

\- JSON 格式：适合程序解析

\- Markdown 表格：适合文档展示

  

**\### 代码仓库**

\- GitHub: [https://github.com/XuetaoZhang/ai-web3-school-cohort-0](https://github.com/XuetaoZhang/ai-web3-school-cohort-0)

\- 实践文件: `experiments/prompt-engineering-practice.md`

  

\---

  

**\## 🤔 遇到的问题与思考**

  

**\### 问题**

1\. 角色设定的效果不够明显，可能需要更多对比实验

2\. 如何在实际项目中系统化应用这些技巧？

  

**\### 思考**

1\. Prompt Engineering 不是一次性的，需要持续迭代优化

2\. 不同场景需要不同的提示词策略

3\. 结构化输出对于构建 AI × Web3 应用非常重要

  

\---

  

**\## 📝 明日计划**

  

**\### 学习目标**

\- 完成 RAG 系统实践

\- 完成 AI Agent 实践

\- 深入理解 Agent 工作流

  

**\### 实践任务**

\- 构建简单的 RAG 系统（检索增强生成）

\- 创建第一个 AI Agent（能调用工具）

\- 尝试将 RAG 和 Agent 结合

  

\---

  

**\## 📊 学习统计**

  

\- **学习时间**: 约 3 小时

\- 理论学习: 1.5 小时

\- 动手实践: 1.5 小时

\- **完成进度**: Day 1 / 42 天

\- **实践产出**: 1 个实验文档

  

\---

  

**\## 🎯 个人感悟**

  

今天是 AI × Web3 School 的第一天，通过系统学习 AI 基础和 Prompt Engineering 实践，我深刻体会到：

  

1\. **Prompt Engineering 是基础技能**：作为一个前端开发者，我已经在使用 AI 工具辅助开发，但今天的系统学习让我意识到，精心设计的提示词能让 AI 的输出质量提升数倍。

  

2\. **理论与实践结合**：光看理论不够，动手实验才能真正理解。通过对比实验，我清楚地看到了不同技巧的效果差异。

  

3\. **Web3 + AI 的潜力**：作为一个有 DeFi 开发经验的开发者，我看到了 AI 在智能合约生成、安全审计、交易分析等场景的巨大潜力。

  

期待明天的 RAG 和 Agent 实践，特别想看看如何让 AI Agent 与链上数据交互！

  

\---

  

**#AIWeb3School #Day1 #PromptEngineering #LearningInPublic**
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
