---
timezone: UTC+8
---

# HanXiangQian

**GitHub ID:** Flygreenbaby

**Telegram:** @anrusi

## Self-introduction

在几年前，我曾经有一个大致的概念，网络中有一颗大树，以ai为土壤培养，其中的树枝树干，可以由世界任何一个地方访问，去做文件上传、备份等等都可以，很笼统的一个概念，我希望这次课程能够实现，也希望认同我这个想法的partner来组队。

## Notes

<!-- Content_START -->
# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->
```
# Day 14 打卡草稿

**日期**: 2026-05-31

---

## 今日学习内容

### Week 1 + Week 2 全面收官

- Week 1 AI基础 11/11 实践全部完成 ✅ 挑战全部完成 ✅
- Week 2 Web3基础 10/10 实践全部完成 ✅
- 核心感悟：AI 工程的本质是"边界控制"——MCP 的白名单、Inference 的 Fallback、Vibe Coding 的审查边界，安全与可控永远是第一位

---

## 今日产出

| 文件 | 说明 |
|------|------|
| daily/2026-05-31.md | Day 14 打卡草稿 |

---

*AI x Web3 School Day 14 课程完成 — 由 Hermes AI（模型：deepseek-v4-pro）在 2026-05-31 生成*
```
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->

```
# Day 13 打卡草稿

**日期**: 2026-05-30

---

## 今日学习内容

### 基础复习：Week 1 AI 基础 + Week 2 Web3 基础回顾

- **AI 基础回顾**：从 LLM 原理 → Prompt 设计 → Context/RAG → Agent → Frameworks → Evaluation → Fine-tuning → Inference，整条知识链路已形成闭环
- **Web3 基础回顾**：密码学 → 钱包 → 智能合约 → Dev Stack → Network → 账户抽象 → DeFi → 预言机 → 索引 → 安全，10 篇全部完成
- 重点巩固：RAG vs Context 的区别、AA（账户抽象）的核心设计、DeFi 组合性（Money Lego）、Oracle 的数据桥梁角色
- 发现薄弱点：索引层（Subgraph vs Pipeline）的实际调用差异，后续进入 Week 3 Bridge 时需结合 AI Agent 数据流加深理解

---

## 今日产出

| 文件 | 说明 |
|------|------|
| daily/2026-05-30.md | Day 13 打卡草稿（复习日） |

---

*AI x Web3 School Day 13 课程完成 — 由 Hermes AI（模型：qwen3.7-max-2026-05-17）在 2026-05-30 生成*
```
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->


```
# AI x Web3 School Day 12 打卡

🎉 **Week 1 AI 基础 11/11 实践圆满收官！**

今天一口气补全了 AI 基础部分最后的 5 个硬核实践，从理论彻底走向工程落地：
1️⃣ **Evaluation**：设计了包含注入攻击的测试集，给大模型做了一次"安全体检"。
2️⃣ **Fine-tuning**：通过 50 条样本的 Pre-eval 对比，验证了"Few-shot 就能解决 96% 格式问题，先别急着微调"的工程铁律。
3️⃣ **Inference**：对比了云端 API 与本地模型的延迟与隐私边界，设计了四级 Fallback 高可用路由架构。
4️⃣ **MCP**：构建只读 MCP Server 安全架构，用白名单防路径穿越，并设计了基于 Telegram 带外确认的权限升级方案。
5️⃣ **Vibe Coding**：与 AI 结对编程，严格划定"禁改文件"边界，体验了测试驱动的 Agent 协作流。

💡 **今日最大感悟**：
AI 工程不是"闭眼调 API"，而是"边界控制"与"兜底设计"。无论是 MCP 的白名单、Inference 的 Fallback，还是 Vibe Coding 的审查，**安全与可控永远是第一位的**。

🚀 **Next Step**：
Week 1 彻底通关！接下来继续深耕 Week 2 (Web3 基础)，向着最终的 AI x Web3 产品进发！🌳

#AIWeb3School #Web3 #AI #HermesAgent #学习打卡

---
*AI x Web3 School Day 12 课程完成 — 由 Hermes AI（模型：qwen3.7-max-preview）在 2026-05-29 生成*
```
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->



```
# Day 11 打卡草稿

**日期**: 2026-05-28

---

## 今日学习内容

### 索引（Indexing）：链上数据的"图书馆目录"

- 理解了 Indexing 的本质：链上数据公开 ≠ 好用，索引层把原始区块流转换为面向业务查询的数据模型
- 核心认知：产品关心的是"某地址仓位""协议 TVL""订单是否成交"，不是原始区块流
- 四种索引方式：Event Indexing（初级）→ Subgraph（中级，声明式+GraphQL）→ RPC（初级，节点接口）→ Data Pipeline（高级）
- RPC ≠ 数据库：频繁扫历史日志会触发限流，复杂查询需要独立索引层
- AI Agent 依赖索引层获取结构化、带来源、带时间戳、可回溯的链上上下文

### 安全（Security）：从设计到应急的全流程工程

- 理解了安全 ≠ 一次审计，而是设计→权限→模拟→监控→应急的完整闭环
- 核心认知：链上系统默认暴露在公开对抗环境，代码/状态/资金全公开，攻击者可反复模拟和抢跑
- 五大安全节点：Reentrancy（Checks-Effects-Interactions）→ Access Control（权限最小化）→ Audit（看范围和修复状态）→ Simulation（签名前预演）→ Monitoring（上线后感知+响应）
- AI x Web3 安全分层：model → tool → policy → simulation → human → monitoring，每层独立校验
- Simulation 是最后一道防线，能挡住 80% 明显错误（链错、地址错、金额错、滑点过大）

---

## 今日产出

| 文件 | 说明 |
|------|------|
| `notes/day11-indexing-security.md` | Indexing + Security 两篇合并笔记 |
| `experiments/week2-indexing-event-design.md` | 投票合约事件索引设计实践 |
| `experiments/week2-security-tx-checklist.md` | 交易安全检查表实践 |
| `logs/day11-indexing-security-qa.md` | 学习对话记录 |
| `prompts/day11-indexing-security-prompts.md` | Prompt 使用记录 |

---

## 进度

### Week 2 进度

| 篇目 | 笔记 | 实践 |
|------|:----:|:----:|
| ① Cryptography | ✅ | ✅ |
| ② Wallet | ✅ | ✅ |
| ③ Smart Contract | ✅ | ✅ |
| ④ Dev Stack | ✅ | ⏸️（Remix ✅，Hardhat 放弃） |
| ⑤ Network | ✅ | ✅ |
| ⑥ Account Abstraction | ✅ | ✅ |
| ⑦ DeFi | ✅ | ✅ |
| ⑧ Oracle | ✅ | ✅ |
| ⑨ Indexing | ✅ | ✅ |
| ⑩ Security | ✅ | ✅ |

Week 2：**10/10 全部完成** 🎉

---

## Week 2 总结

- 从密码学基础到安全实践，完整走完了 Web3 基础 10 篇内容
- 核心收获：理解了链上系统的特殊性（公开对抗环境、不可回滚、高错误成本）
- 实践覆盖：签名观察、钱包交互地图、合约阅读、Remix 部署、测试网交易追踪、Session Key 策略、DeFi 交易拆解、Price Feed 检查、事件索引设计、交易安全检查表
- 下一步：Week 3 — AI × Web3 Bridge（14 篇）

---

*AI x Web3 School Day 11 课程完成 — 由 Hermes AI（模型：qwen3.6-max-preview）在 2026-05-28 生成*
```
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->




```
# Day 10 打卡草稿

**日期**: 2026-05-27

---

## 今日学习内容

### 账户抽象（Account Abstraction）：从 EOA 到可编程账户

- 理解了 EOA 钱包的根本限制：一把私钥管一切，无法细粒度授权、无法代付 gas、无法自动化
- 学习了 ERC-4337 架构：UserOperation → Bundler → EntryPoint → 智能账户执行，Paymaster 可选代付 gas
- 核心认知：账户抽象的本质不是"免 gas"，而是把账户控制权从单一私钥扩展成可编程规则
- Session Key 是 AI Agent 上链执行的关键基础——临时、可限制、可过期、可撤销

### 去中心化金融（DeFi）：链上金融的风险与组合

- 理清了 DeFi 的核心：Token 是基础资产单位，AMM 用流动性池替代订单簿，借贷协议的风险是多因素联动的
- 关键概念：滑点（预期 vs 实际价格差）、无常损失（LP 承担）、流动性深度、MEV 风险
- 深刻理解了"流动性和可组合性放大系统性风险"——一个协议出问题可能影响整个依赖链
- DeFi 风险管理核心：没有流动性支撑的"价格"只是屏幕上的数字

### 预言机（Oracle）：链上世界的"眼睛"

- 理解了 Oracle 的本质是信任机制而非数据管道——合约只能按链上可见的数据执行
- Price Feed 读取时必须检查：decimals、更新时间（stale price）、返回值异常、roundId 有效性
- 延迟是核心风险：价格变化快时，旧数据可能导致错误清算或坏账
- AI Oracle 是未来方向，但比普通 Price Feed 复杂得多——涉及模型版本、输入追溯、争议机制

---

## 今日产出

| 文件 | 说明 |
|------|------|
| `notes/week2/day10-account-abstraction-defi-oracle.md` | 三篇合并笔记 |
| `experiments/week2-account-abstraction-session-key-strategy.md` | Session Key 策略设计 |
| `experiments/week2-defi-swap-analysis.md` | DeFi 交易拆解分析 |
| `experiments/week2-oracle-price-feed-check.md` | Price Feed 风险检查 |

---

## 进度

### Week 2 进度

| 篇目 | 笔记 | 实践 |
|------|:----:|:----:|
| ① Cryptography | ✅ | ✅ |
| ② Wallet | ✅ | ✅ |
| ③ Smart Contract | ✅ | ✅ |
| ④ Dev Stack | ✅ | ⏸️（Remix ✅，Hardhat 放弃） |
| ⑤ Network | ✅ | ✅ |
| ⑥ Account Abstraction | ✅ | ✅ |
| ⑦ DeFi | ✅ | ✅ |
| ⑧ Oracle | ✅ | ✅ |
| ⑨ Indexing | ⬜ | ⬜ |
| ⑩ Security | ⬜ | ⬜ |

Week 2：**8/10 完成**

---

*AI x Web3 School Day 10 课程完成 — 由 Hermes AI（模型：qwen3.7-max）在 2026-05-27 生成*
```
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->





```
# Day 9 打卡草稿

**日期**: 2026-05-26

---

## 今日学习内容

### 开发栈（Dev Stack）：从 Remix 到 Hardhat 的工程链路

- 搞清了 Web3 开发栈的六步链路：写合约 → 编译 → 部署 → 测试 → 前端调用 → 浏览器验证
- 在 Remix 成功部署了 Counter 合约（含 count()、increment()、CountChanged event）
- 尝试用 Hardhat 搭建本地工程，因 Node.js v25.4.0 版本过高导致依赖反复冲突，最终放弃
- 收获：Remix 适合快速实验，正式项目需要 Hardhat/Foundry + Git，但前提是 Node.js 要用 LTS 版本

### 网络（Network）：测试网交易追踪

- 通过 pk910 水龙头领取了 Sepolia 测试 ETH
- 用 MetaMask 给自己发了 0.001 ETH 交易
- 在 Sepolia Etherscan 追踪交易详情：Tx Hash、Status、Block、Gas Fee、Gas Price、Confirmations
- 切换到 Ethereum Mainnet 发现同一地址余额为 0 → 验证了多链隔离
- 理解了 AI Agent 操作链上时必须感知 chain id，否则读错链数据完全错误

---

## 今日产出

| 文件 | 说明 |
|------|------|
| `notes/week2/day9-dev-stack.md` | 开发栈学习笔记 |
| `notes/week2/day9-network.md` | 网络学习笔记 |
| `logs/day9-dev-stack-network-qa.md` | Day 9 学习对话记录 |
| `prompts/day9-dev-stack-network-prompts.md` | Day 9 Prompt 使用记录 |

---

## 进度

### Week 1 实践状态

| 篇目 | 笔记 | 实践 |
|------|:--:|:--:|
| ① LLM | ✅ | ✅ |
| ② Prompt | ✅ | ✅ |
| ③ Context | ✅ | ✅ |
| ④ RAG | ✅ | ✅ |
| ⑤ Agent | ✅ | ✅ |
| ⑥ Frameworks | ✅ | ✅ |
| ⑦ Vibe Coding | ✅ | ⏸️（缺 Node.js） |
| ⑧ MCP | ✅ | ⬜ |
| ⑨ Evaluation | ✅ | ⬜ |
| ⑩ Fine-tuning | ✅ | ⬜ |
| ⑪ Inference | ✅ | ⬜ |

Week 1 实践：**6/11 完成**

### Week 2 进度

| 篇目 | 笔记 | 实践 |
|------|:--:|:--:|
| ① Cryptography | ✅ | ✅ |
| ② Wallet | ✅ | ✅ |
| ③ Smart Contract | ✅ | ✅ |
| ④ Dev Stack | ✅ | ⏸️（Remix ✅，Hardhat 因 Node.js 版本放弃） |
| ⑤ Network | ✅ | ✅ |
| ⑥~⑩ | ⬜ | ⬜ |

Week 2：**5/10 完成**

---

*AI x Web3 School Day 9 课程完成 — 由 Hermes AI（模型：阿里百炼免费模型）在 2026-05-26 生成*
```
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->






```
# Day 8 打卡草稿

**日期**: 2026-05-25

---

## 今日学习内容

### 密码学：签名与私钥的边界

从 Remix IDE 签名登录入手，搞清楚了 Web3 密码学的五个核心概念：
- **私钥 = 控制权本身**，丢失永久失去资产，没有「找回密码」
- **签名 ≠ 登录**，是对具体消息的授权证明
- **哈希 = 单向指纹**，验证数据一致性，不能反向解密
- 完成签名观察实践：对比了「签名消息」和「发送交易」在 MetaMask 弹窗、gas 消耗、可撤销性上的区别

### 钱包：连接、签名、交易的三层权限

首次完整经历钱包交互全流程：
- 通过 Sepolia 水龙头领了 0.174 SepETH，发现 **收钱不弹 MetaMask**——因为自己是收款方
- 连接 Uniswap 时弹窗极简，验证了 MetaMask 权限分级：连接=绿灯，签名=黄灯，交易=红灯
- 完成钱包交互地图：记录连接→切换网络→签名→发交易→查 Explorer 的完整链路

### 智能合约：从 Remix 到 Etherscan 源码阅读

- 搞清了 Remix 的真正定位：浏览器里的合约工厂（写→编译→部署→交互）
- 在 Sepolia Etherscan 上读了一个 MintableERC20 合约源码
- 发现 `mint()` 没有 `onlyOwner`——测试网是 feature，主网是灾难
- 遇到代理合约（Proxy）时学会了区分可升级 vs 不可升级架构

---

## 今日产出

| 文件 | 说明 |
|------|------|
| `notes/week2/day8-cryptography.md` | 密码学学习笔记 |
| `notes/week2/day8-wallet.md` | 钱包学习笔记 |
| `notes/week2/day8-smart-contract.md` | 智能合约学习笔记 |
| `experiments/week2-cryptography-signature-practice.md` | 密码学：签名观察实践 |
| `experiments/week2-wallet-interaction-map.md` | 钱包：交互地图实践 |
| `experiments/week2-smart-contract-reading.md` | 智能合约：合约阅读实践 |

---

## 进度

### Week 1 实践状态

| 篇目 | 笔记 | 实践 |
|------|:--:|:--:|
| ① LLM | ✅ | ✅ |
| ② Prompt | ✅ | ✅ |
| ③ Context | ✅ | ✅ |
| ④ RAG | ✅ | ✅ |
| ⑤ Agent | ✅ | ✅ |
| ⑥ Frameworks | ✅ | ✅ |
| ⑦ Vibe Coding | ✅ | ⏸️（缺 Node.js） |
| ⑧ MCP | ✅ | ⬜ |
| ⑨ Evaluation | ✅ | ⬜ |
| ⑩ Fine-tuning | ✅ | ⬜ |
| ⑪ Inference | ✅ | ⬜ |

Week 1 实践：**6/11 完成**

### Week 2 进度

| 篇目 | 笔记 | 实践 |
|------|:--:|:--:|
| ① Cryptography | ✅ | ✅ |
| ② Wallet | ✅ | ✅ |
| ③ Smart Contract | ✅ | ✅ |
| ④~⑩ | ⬜ | ⬜ |

Week 2：**3/10 完成**

---

*AI x Web3 School Day 8 课程完成 — 由 Hermes AI（模型：deepseek-v4-pro）在 2026-05-25 生成*
```
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->







```
# Day 7 打卡草稿

**日期**: 2026-05-24

---

## 今日学习内容

### Agent 实践：DAO 提案研究 Agent

设计了一个只读版 DAO 提案研究 Agent：
- 5 个只读工具（读提案、搜讨论、提取论点、检测风险、检查完整性）
- 用 Tool Use 6 问定义每个工具的输入/权限/副作用/重试策略
- 外置 State 记录 10 个字段，失败后可恢复
- 停止条件覆盖：提案不存在、讨论缺失、高危风险、信息不足、用户拒绝
- 输出结构化 JSON：来源 + 正反理由 + 证据强度 + 不确定性 + 风险 + 检查清单
- 权限升级版：用户授权 → simulation → 二次确认 → 生成交易草稿

### Frameworks 实践：Raw API vs DSPy 对比

同一「文档问答 + 工具调用」任务，两种方式实现并四维对比：
- Raw API 胜在"易读"和"易定位错误"
- DSPy 框架胜在"易加工具"和"易写回归测试"
- 框架的核心收益是测试纪律——自动跑了边界测试（提案 #999）
- 框架的代价是依赖膨胀（DSPy→LiteLLM→botocore）

另学到了 DSPy 的基本模式：Signature → Module → test_cases

---

## 今日产出

| 文件 | 说明 |
|------|------|
| `experiments/week1-agent-dao-research.md` | Agent 实践规格 |
| `experiments/week1-frameworks-compare.md` | Frameworks 对比报告 |
| `experiments/week1-frameworks/raw_api.py` | Raw API 版本 |
| `experiments/week1-frameworks/framework.py` | DSPy 版本 |
| `logs/day7-agent-frameworks-qa.md` | 学习日志 |
| `prompts/day7-agent-frameworks-prompts.md` | Prompt 记录 |

---

## 进度

| 篇目 | 实践 |
|------|:--:|
| ① LLM | ✅ |
| ② Prompt | ✅ |
| ③ Context | ✅ |
| ④ RAG | ✅ |
| ⑤ Agent | ✅ |
| ⑥ Frameworks | ✅ |
| ⑦~⑪ | ⬜ |

Week 1 实践：**6/11 完成**

---

*AI x Web3 School Day 7 课程完成 — 由 Hermes AI（模型：deepseek-v4-pro）在 2026-05-24 生成*
```
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->








\# Daily Note: 2026-05-23

\## 📋 今日计划

\### 最小路径

\- \[x\] LLM 实践：交易解释器（链上数据 → LLM 生成五维度解释）

\- \[x\] Prompt 实践：交易风险摘要（设计 + 三组测试验证）

\- \[x\] Context 实践：钱包授权检查 Context Spec（7 项上下文的 🔴🟡⚪ 分类）

\- \[x\] RAG 实践：协议文档 RAG 问答（[zh.javascript.info](http://zh.javascript.info)，15 篇文档 → TF-IDF 检索 → 三组测试）

\### 推荐路径

\- \[ \] Prompt 三组测试未在 DeepSeek 重跑（已通过第一轮）

\- \[ \] RAG 脚本可升级为 embedding 模型（sentence-transformers）

\---

\## 📚 学习摘要

\### 核心概念

| 主题 | 要点 |

|------|------|

| LLM + 交易解释 | 链上数据只能告诉你"谁转了多少给谁"，"为什么"和"接收方是谁"全部需要人类判断 |

| Prompt 设计 | Prompt 不是写咒语，是写可机器校验的任务说明书；四段式结构 + 字段约束 + 失败兜底 |

| Context 分层 | 每条信息进上下文必须带"身份标签"：🔴 实时查询 / 🟡 缓存可复用 / ⚪ 不可当事实 |

| RAG 证据链 | TF-IDF 只做词频匹配，无语义理解——这正是 RAG 的核心课：检索结果不是事实，是候选证据 |

\### 代码/实验

\- `experiments/week1-llm-transaction-interpreter.md`

\- `experiments/week1-prompt-risk-analyzer.md`

\- `experiments/week1-context-context-spec.md`

\- `experiments/week1-rag-qa.md`

\- `experiments/week1-rag-qa/rag_demo.py`

\### 疑问

\- TF-IDF 在测试 1 没能把真正相关的"交互：alert、prompt 和 confirm"排进前三——升级为 embedding 模型后效果差距多大？

\- RAG 脚本的 uncertainties 逻辑有缺陷（当检索不够精准时不会自动标注），如何改？

\---

\## ✅ 打卡草稿

**今日进度**：

\- 已完成：LLM / Prompt / Context / RAG 四篇配套实践（4/11）

\- 进行中：AI 基础实践——剩余 7 篇（Agent → Inference）

\- 阻塞项：无

**关键收获**（2-3 句）：

\> 今天把"学"变成了"做"：从 LLM 的交易解释器到 RAG 的最小可运行系统，每个实践都暴露了理论课上没说的问题——TF-IDF 没有语义理解、Context 分类容易搞反、Prompt 不是越长越好。AI 这篇反复强调的"模型输出是候选结果，不是事实本身"，在四个实践中被反复验证。

**打卡链接**：\[[https://github.com/Flygreenbaby/ai-web3-learning/blob/main/daily/2026-05-23.md](https://github.com/Flygreenbaby/ai-web3-learning/blob/main/daily/2026-05-23.md)\]

\---

\## 🔗 参考资料

\- Handbook LLM: [https://aiweb3.school/zh/handbook/ai/llm/](https://aiweb3.school/zh/handbook/ai/llm/)

\- Handbook Prompt: [https://aiweb3.school/zh/handbook/ai/prompt/](https://aiweb3.school/zh/handbook/ai/prompt/)

\- Handbook Context: [https://aiweb3.school/zh/handbook/ai/context/](https://aiweb3.school/zh/handbook/ai/context/)

\- Handbook RAG: [https://aiweb3.school/zh/handbook/ai/rag/](https://aiweb3.school/zh/handbook/ai/rag/)

\- 实验文件: experiments/week1-\*.md

\---

\## 📝 明日备忘

\- 继续 AI 基础实践：Agent / Frameworks / Vibe Coding / MCP 篇

\- RAG venv 保留（后续实践复用）

\---

_AI x Web3 School Day 6 课程完成 — 由 Hermes AI（模型：deepseek-v4-pro）在 2026-05-23 生成_
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->









\# Daily Note: 2026-05-22

\## 📋 今日计划

\### 最小路径

\- \[x\] 仓库结构初始化（profile / learning-plan / templates / 4个新目录）

\- \[x\] README 更新（重要链接 + 隐私提醒 + 目录说明）

\- \[x\] AI 基础收官：Evaluation 评估

\- \[x\] AI 基础收官：Fine-tuning 微调

\- \[x\] AI 基础收官：Inference 推理服务

\- \[x\] 新建 Prompt ⑥（每日打卡草稿生成）

\### 推荐路径

\- \[x\] Prompt ②~④ 执行（logs / prompts / README）

\- \[x\] WCB 平台活动日历拉取

\---

\## 📚 学习摘要

\### 核心概念

| 主题 | 要点 |

|------|------|

| Evaluation | Harness + Golden Set + Regression 三件套让 AI 行为可重复测量、可持续改进 |

| Fine-tuning | 不是第一步——先穷尽 prompt/eval，确认问题稳定后再用高质量数据训练 |

| Inference | API/Local/量化/Serving 四层权衡；链上动作不可逆必须留审计记录 |

\### 疑问

\- LLM-as-Judge 的跨模型偏见如何检测？

\- 量化模型在 Agent tool calling 场景的退化有多大？

\- 链上场景推理审计记录应该到什么粒度？

\---

\## ✅ 打卡草稿

**今日进度**：

\- 已完成：仓库初始化（4目录+5文件）、Evaluation、Fine-tuning、Inference 三篇学习笔记、Prompt ⑥ 新建

\- 进行中：打卡流程收尾（④ README ⑤ push）

\- 阻塞项：无

**关键收获**：

\> Week 1 AI 基础 11 篇全部完成。最大收获是建立了"先 eval 再改、先 prompt 再 FT、先约束再部署"的工程思维链。同时补齐了学习仓库结构，六个 Prompt 覆盖完整学习闭环。

**打卡链接**：\[提交后填入\]

\---

\## 🔗 参考资料

\- Handbook：Evaluation / Fine-tuning / Inference

\- WCB 活动：Week 1 例会（今日）

\- 笔记：notes/week1/[day5-evaluation.md](http://day5-evaluation.md) / [day5-fine-tuning.md](http://day5-fine-tuning.md) / [day5-inference.md](http://day5-inference.md)

\- 日志：logs/[day5-evaluation-fine-tuning-inference-qa.md](http://day5-evaluation-fine-tuning-inference-qa.md)

\---

\## 📝 明日备忘

\- Week 2 启动：Web3 基础第 1 篇 Network

\- WCB 讲座：Open Agentic Economy (5/23)

\---

_AI x Web3 School Day 5 课程完成 — 由 Hermes AI（模型：deepseek-v4-pro）在 2026-05-22 生成_
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->










\# Day 4: rag + agent + frameworks + vibe-coding + mcp — AI 基础学习笔记

**生成日期**: 2026-05-21

\---

\## 目录

1\. \[rag\](#rag)

1\. \[agent\](#agent)

1\. \[frameworks\](#frameworks)

1\. \[vibe-coding\](#vibe-coding)

1\. \[mcp\](#mcp)

6\. \[🛠️ 最小实践汇总\](#🛠️-最小实践汇总)

7\. \[🏆 挑战汇总\](#🏆-挑战汇总)

8\. \[📊 各章节生成信息\](#📊-各章节生成信息)

\---

\## rag

\### Summary

RAG 不是"接向量库"——是一条取回→筛选→引用→交付的证据链，让回答有来源、有版本、有边界。

\---

\## Key Points

1\. **RAG 的核心是证据链，不是向量库** —— 文档怎么切、取哪些内容、如何引用和拒答，三层任何一层出错，模型都会拿着错误材料说得很顺

2\. **Citation 和 Freshness 是 RAG 的底线** —— 没有来源标注和时效信息的 RAG，只是把幻觉从模型内部搬到了检索系统

3\. **检索结果 ≠ 事实** —— 它只是候选证据，仍然要看来源、时间、版本、适用范围

4\. **检索失败要允许拒答** —— 找不到证据时说"不确定"，而不是让模型补全

5\. **Chunking 要按结构切，不能按固定字数** —— 技术文档的函数说明、参数表、风险提示常跨段落，按标题/API endpoint/小节切更稳

\---

\## Questions

1\. RAG 和之前学的 Context Engineering 有什么区别？Context 是"整理好桌面"，RAG 是"从档案馆取文件放在桌面上"——二者如何配合？

2\. Rerank 什么时候加？如果一次检索返回 50 条候选，Rerank 的加不加判断标准是什么？成本 vs 效果如何取舍？

3\. 在 Web3 场景中，RAG 取回的"旧版本文档"可能导致用户执行已废弃的合约接口——Citation 的版本标注能否堵住这个风险？还需要什么辅助机制？

\---

\## Analogy

\> RAG 就像给 AI 配了一个\*\*带索引的档案馆\*\*：

\> - 查到了 → 把文件编号、段落、版本一起交给 AI 参考

\> - 查不到 → AI 说"档案里没有，我不能编"

\> - 查到但版本旧了 → AI 提示"这是 2023 年的文档，建议核对最新版"

\---

\## Templates

\### 1️⃣ Chunking 切分规则

\`\`\`markdown

【切分原则】

\- 按文档结构切：标题 > 小节 > 段落，不按固定字数

\- 每个 chunk 附带 metadata：来源 URL、更新时间、版本号

【示例】

文档: [solidity-by-example.md](http://solidity-by-example.md)

├── chunk\_001: "## 合约结构" → metadata: {source: "[solidity-by-example.md](http://solidity-by-example.md)", section: "合约结构", version: "0.8.20"}

├── chunk\_002: "## 状态变量" → metadata: {source: "[solidity-by-example.md](http://solidity-by-example.md)", section: "状态变量", version: "0.8.20"}

└── chunk\_003: "## 函数" → metadata: {source: "[solidity-by-example.md](http://solidity-by-example.md)", section: "函数", version: "0.8.20"}

\`\`\`

\### 2️⃣ Vector DB 存储规范

\`\`\`json

{

"id": "chunk\_uuid",

"embedding": \[0.123, -0.456, ...\],

"metadata": {

"source\_url": "[https://docs.example.com/api/v2](https://docs.example.com/api/v2)",

"source\_type": "official\_doc",

"last\_updated": "2025-03-15",

"version": "v2.1.0",

"section": "POST /users",

"chunk\_index": 3,

"total\_chunks": 12

},

"content": "POST /users 接口的完整说明文本..."

}

\`\`\`

**检索流程**：先 `metadata filter`（只搜 official\_doc + 近 6 个月），再 `vector similarity rank`。

\### 3️⃣ Citation 引用格式

\`\`\`json

{

"answer": "该接口需要 x-api-key 头部...",

"citations": \[

{

"source\_url": "[https://docs.example.com/api/v2](https://docs.example.com/api/v2)",

"source\_type": "official",

"version": "v2.1.0",

"section": "Authentication",

"quote\_snippet": "...x-api-key 用于验证请求来源..."

}

\],

"unsupported\_claims": \[

"旧版本文档中提到的 api-key（v1 格式）已废弃，未在 v2.1.0 中找到对应说明"

\],

"needs\_human\_verification": false

}

\`\`\`

**规则**：每个关键结论必须有 citation 支撑；没有 citation 的声明归入 `unsupported_claims`。

\### 4️⃣ 最小实践输出结构

\`\`\`json

{

"query": "用户原始问题",

"answers": \[

{

"claim": "具体回答",

"citations": \[{ "source\_url": "...", "section": "...", "version": "..." }\]

}

\],

"sources": \[

{ "url": "...", "type": "official\_doc", "version": "v2.1.0", "relevance": "high" }

\],

"uncertainties": \["v2.0 和 v2.1 的参数名不一致，建议核对"\],

"needs\_version\_check": true,

"refused": false

}

\`\`\`

\---

\### Key Points

1\. **RAG 的核心是证据链，不是向量库** —— 文档怎么切、取哪些内容、如何引用和拒答，三层任何一层出错，模型都会拿着错误材料说得很顺

2\. **Citation 和 Freshness 是 RAG 的底线** —— 没有来源标注和时效信息的 RAG，只是把幻觉从模型内部搬到了检索系统

3\. **检索结果 ≠ 事实** —— 它只是候选证据，仍然要看来源、时间、版本、适用范围

4\. **检索失败要允许拒答** —— 找不到证据时说"不确定"，而不是让模型补全

5\. **Chunking 要按结构切，不能按固定字数** —— 技术文档的函数说明、参数表、风险提示常跨段落，按标题/API endpoint/小节切更稳

\---

\## Questions

1\. RAG 和之前学的 Context Engineering 有什么区别？Context 是"整理好桌面"，RAG 是"从档案馆取文件放在桌面上"——二者如何配合？

2\. Rerank 什么时候加？如果一次检索返回 50 条候选，Rerank 的加不加判断标准是什么？成本 vs 效果如何取舍？

3\. 在 Web3 场景中，RAG 取回的"旧版本文档"可能导致用户执行已废弃的合约接口——Citation 的版本标注能否堵住这个风险？还需要什么辅助机制？

\---

\## Analogy

\> RAG 就像给 AI 配了一个\*\*带索引的档案馆\*\*：

\> - 查到了 → 把文件编号、段落、版本一起交给 AI 参考

\> - 查不到 → AI 说"档案里没有，我不能编"

\> - 查到但版本旧了 → AI 提示"这是 2023 年的文档，建议核对最新版"

\---

\## Templates

\### 1️⃣ Chunking 切分规则

\`\`\`markdown

【切分原则】

\- 按文档结构切：标题 > 小节 > 段落，不按固定字数

\- 每个 chunk 附带 metadata：来源 URL、更新时间、版本号

【示例】

文档: [solidity-by-example.md](http://solidity-by-example.md)

├── chunk\_001: "## 合约结构" → metadata: {source: "[solidity-by-example.md](http://solidity-by-example.md)", section: "合约结构", version: "0.8.20"}

├── chunk\_002: "## 状态变量" → metadata: {source: "[solidity-by-example.md](http://solidity-by-example.md)", section: "状态变量", version: "0.8.20"}

└── chunk\_003: "## 函数" → metadata: {source: "[solidity-by-example.md](http://solidity-by-example.md)", section: "函数", version: "0.8.20"}

\`\`\`

\### 2️⃣ Vector DB 存储规范

\`\`\`json

{

"id": "chunk\_uuid",

"embedding": \[0.123, -0.456, ...\],

"metadata": {

"source\_url": "[https://docs.example.com/api/v2](https://docs.example.com/api/v2)",

"source\_type": "official\_doc",

"last\_updated": "2025-03-15",

"version": "v2.1.0",

"section": "POST /users",

"chunk\_index": 3,

"total\_chunks": 12

},

"content": "POST /users 接口的完整说明文本..."

}

\`\`\`

**检索流程**：先 `metadata filter`（只搜 official\_doc + 近 6 个月），再 `vector similarity rank`。

\### 3️⃣ Citation 引用格式

\`\`\`json

{

"answer": "该接口需要 x-api-key 头部...",

"citations": \[

{

"source\_url": "[https://docs.example.com/api/v2](https://docs.example.com/api/v2)",

"source\_type": "official",

"version": "v2.1.0",

"section": "Authentication",

"quote\_snippet": "...x-api-key 用于验证请求来源..."

}

\],

"unsupported\_claims": \[

"旧版本文档中提到的 api-key（v1 格式）已废弃，未在 v2.1.0 中找到对应说明"

\],

"needs\_human\_verification": false

}

\`\`\`

**规则**：每个关键结论必须有 citation 支撑；没有 citation 的声明归入 `unsupported_claims`。

\### 4️⃣ 最小实践输出结构

\`\`\`json

{

"query": "用户原始问题",

"answers": \[

{

"claim": "具体回答",

"citations": \[{ "source\_url": "...", "section": "...", "version": "..." }\]

}

\],

"sources": \[

{ "url": "...", "type": "official\_doc", "version": "v2.1.0", "relevance": "high" }

\],

"uncertainties": \["v2.0 和 v2.1 的参数名不一致，建议核对"\],

"needs\_version\_check": true,

"refused": false

}

\`\`\`

\---

\### Questions

1\. RAG 和之前学的 Context Engineering 有什么区别？Context 是"整理好桌面"，RAG 是"从档案馆取文件放在桌面上"——二者如何配合？

2\. Rerank 什么时候加？如果一次检索返回 50 条候选，Rerank 的加不加判断标准是什么？成本 vs 效果如何取舍？

3\. 在 Web3 场景中，RAG 取回的"旧版本文档"可能导致用户执行已废弃的合约接口——Citation 的版本标注能否堵住这个风险？还需要什么辅助机制？

\---

\## Analogy

\> RAG 就像给 AI 配了一个\*\*带索引的档案馆\*\*：

\> - 查到了 → 把文件编号、段落、版本一起交给 AI 参考

\> - 查不到 → AI 说"档案里没有，我不能编"

\> - 查到但版本旧了 → AI 提示"这是 2023 年的文档，建议核对最新版"

\---

\## Templates

\### 1️⃣ Chunking 切分规则

\`\`\`markdown

【切分原则】

\- 按文档结构切：标题 > 小节 > 段落，不按固定字数

\- 每个 chunk 附带 metadata：来源 URL、更新时间、版本号

【示例】

文档: [solidity-by-example.md](http://solidity-by-example.md)

├── chunk\_001: "## 合约结构" → metadata: {source: "[solidity-by-example.md](http://solidity-by-example.md)", section: "合约结构", version: "0.8.20"}

├── chunk\_002: "## 状态变量" → metadata: {source: "[solidity-by-example.md](http://solidity-by-example.md)", section: "状态变量", version: "0.8.20"}

└── chunk\_003: "## 函数" → metadata: {source: "[solidity-by-example.md](http://solidity-by-example.md)", section: "函数", version: "0.8.20"}

\`\`\`

\### 2️⃣ Vector DB 存储规范

\`\`\`json

{

"id": "chunk\_uuid",

"embedding": \[0.123, -0.456, ...\],

"metadata": {

"source\_url": "[https://docs.example.com/api/v2](https://docs.example.com/api/v2)",

"source\_type": "official\_doc",

"last\_updated": "2025-03-15",

"version": "v2.1.0",

"section": "POST /users",

"chunk\_index": 3,

"total\_chunks": 12

},

"content": "POST /users 接口的完整说明文本..."

}

\`\`\`

**检索流程**：先 `metadata filter`（只搜 official\_doc + 近 6 个月），再 `vector similarity rank`。

\### 3️⃣ Citation 引用格式

\`\`\`json

{

"answer": "该接口需要 x-api-key 头部...",

"citations": \[

{

"source\_url": "[https://docs.example.com/api/v2](https://docs.example.com/api/v2)",

"source\_type": "official",

"version": "v2.1.0",

"section": "Authentication",

"quote\_snippet": "...x-api-key 用于验证请求来源..."

}

\],

"unsupported\_claims": \[

"旧版本文档中提到的 api-key（v1 格式）已废弃，未在 v2.1.0 中找到对应说明"

\],

"needs\_human\_verification": false

}

\`\`\`

**规则**：每个关键结论必须有 citation 支撑；没有 citation 的声明归入 `unsupported_claims`。

\### 4️⃣ 最小实践输出结构

\`\`\`json

{

"query": "用户原始问题",

"answers": \[

{

"claim": "具体回答",

"citations": \[{ "source\_url": "...", "section": "...", "version": "..." }\]

}

\],

"sources": \[

{ "url": "...", "type": "official\_doc", "version": "v2.1.0", "relevance": "high" }

\],

"uncertainties": \["v2.0 和 v2.1 的参数名不一致，建议核对"\],

"needs\_version\_check": true,

"refused": false

}

\`\`\`

\---

\### Analogy

\> RAG 就像给 AI 配了一个\*\*带索引的档案馆\*\*：

\> - 查到了 → 把文件编号、段落、版本一起交给 AI 参考

\> - 查不到 → AI 说"档案里没有，我不能编"

\> - 查到但版本旧了 → AI 提示"这是 2023 年的文档，建议核对最新版"

\---

\## Templates

\### 1️⃣ Chunking 切分规则

\`\`\`markdown

【切分原则】

\- 按文档结构切：标题 > 小节 > 段落，不按固定字数

\- 每个 chunk 附带 metadata：来源 URL、更新时间、版本号

【示例】

文档: [solidity-by-example.md](http://solidity-by-example.md)

├── chunk\_001: "## 合约结构" → metadata: {source: "[solidity-by-example.md](http://solidity-by-example.md)", section: "合约结构", version: "0.8.20"}

├── chunk\_002: "## 状态变量" → metadata: {source: "[solidity-by-example.md](http://solidity-by-example.md)", section: "状态变量", version: "0.8.20"}

└── chunk\_003: "## 函数" → metadata: {source: "[solidity-by-example.md](http://solidity-by-example.md)", section: "函数", version: "0.8.20"}

\`\`\`

\### 2️⃣ Vector DB 存储规范

\`\`\`json

{

"id": "chunk\_uuid",

"embedding": \[0.123, -0.456, ...\],

"metadata": {

"source\_url": "[https://docs.example.com/api/v2](https://docs.example.com/api/v2)",

"source\_type": "official\_doc",

"last\_updated": "2025-03-15",

"version": "v2.1.0",

"section": "POST /users",

"chunk\_index": 3,

"total\_chunks": 12

},

"content": "POST /users 接口的完整说明文本..."

}

\`\`\`

**检索流程**：先 `metadata filter`（只搜 official\_doc + 近 6 个月），再 `vector similarity rank`。

\### 3️⃣ Citation 引用格式

\`\`\`json

{

"answer": "该接口需要 x-api-key 头部...",

"citations": \[

{

"source\_url": "[https://docs.example.com/api/v2](https://docs.example.com/api/v2)",

"source\_type": "official",

"version": "v2.1.0",

"section": "Authentication",

"quote\_snippet": "...x-api-key 用于验证请求来源..."

}

\],

"unsupported\_claims": \[

"旧版本文档中提到的 api-key（v1 格式）已废弃，未在 v2.1.0 中找到对应说明"

\],

"needs\_human\_verification": false

}

\`\`\`

**规则**：每个关键结论必须有 citation 支撑；没有 citation 的声明归入 `unsupported_claims`。

\### 4️⃣ 最小实践输出结构

\`\`\`json

{

"query": "用户原始问题",

"answers": \[

{

"claim": "具体回答",

"citations": \[{ "source\_url": "...", "section": "...", "version": "..." }\]

}

\],

"sources": \[

{ "url": "...", "type": "official\_doc", "version": "v2.1.0", "relevance": "high" }

\],

"uncertainties": \["v2.0 和 v2.1 的参数名不一致，建议核对"\],

"needs\_version\_check": true,

"refused": false

}

\`\`\`

\---

\### Templates

\### 1️⃣ Chunking 切分规则

\`\`\`markdown

【切分原则】

\- 按文档结构切：标题 > 小节 > 段落，不按固定字数

\- 每个 chunk 附带 metadata：来源 URL、更新时间、版本号

【示例】

文档: [solidity-by-example.md](http://solidity-by-example.md)

├── chunk\_001: "## 合约结构" → metadata: {source: "[solidity-by-example.md](http://solidity-by-example.md)", section: "合约结构", version: "0.8.20"}

├── chunk\_002: "## 状态变量" → metadata: {source: "[solidity-by-example.md](http://solidity-by-example.md)", section: "状态变量", version: "0.8.20"}

└── chunk\_003: "## 函数" → metadata: {source: "[solidity-by-example.md](http://solidity-by-example.md)", section: "函数", version: "0.8.20"}

\`\`\`

\### 2️⃣ Vector DB 存储规范

\`\`\`json

{

"id": "chunk\_uuid",

"embedding": \[0.123, -0.456, ...\],

"metadata": {

"source\_url": "[https://docs.example.com/api/v2](https://docs.example.com/api/v2)",

"source\_type": "official\_doc",

"last\_updated": "2025-03-15",

"version": "v2.1.0",

"section": "POST /users",

"chunk\_index": 3,

"total\_chunks": 12

},

"content": "POST /users 接口的完整说明文本..."

}

\`\`\`

**检索流程**：先 `metadata filter`（只搜 official\_doc + 近 6 个月），再 `vector similarity rank`。

\### 3️⃣ Citation 引用格式

\`\`\`json

{

"answer": "该接口需要 x-api-key 头部...",

"citations": \[

{

"source\_url": "[https://docs.example.com/api/v2](https://docs.example.com/api/v2)",

"source\_type": "official",

"version": "v2.1.0",

"section": "Authentication",

"quote\_snippet": "...x-api-key 用于验证请求来源..."

}

\],

"unsupported\_claims": \[

"旧版本文档中提到的 api-key（v1 格式）已废弃，未在 v2.1.0 中找到对应说明"

\],

"needs\_human\_verification": false

}

\`\`\`

**规则**：每个关键结论必须有 citation 支撑；没有 citation 的声明归入 `unsupported_claims`。

\### 4️⃣ 最小实践输出结构

\`\`\`json

{

"query": "用户原始问题",

"answers": \[

{

"claim": "具体回答",

"citations": \[{ "source\_url": "...", "section": "...", "version": "..." }\]

}

\],

"sources": \[

{ "url": "...", "type": "official\_doc", "version": "v2.1.0", "relevance": "high" }

\],

"uncertainties": \["v2.0 和 v2.1 的参数名不一致，建议核对"\],

"needs\_version\_check": true,

"refused": false

}

\`\`\`

\---

\---

\## agent

\### Summary

Agent 不是"自主 AI"，而是被目标/工具/状态/权限/停止条件五要素约束的执行循环。

\---

\## Key Points

1\. **Agent = 模型提议 + 系统约束 + 用户审批** — 模型只负责提出候选行动，系统限制行动空间，用户批准高风险边界

2\. **工具比回答更危险** — 读数据、写数据库、发请求、改配置不是同一风险等级，每个工具必须定义输入 schema、权限范围、是否只读、是否产生副作用

3\. **State 必须外置可查** — 任务进度、工具结果、失败原因、用户确认都不能只藏在模型上下文里，生产系统需要可查询、可恢复、可审计

4\. **Reflection 只是辅助，不是安全边界** — 模型自我检查可以提高质量，但不能替代确定性检查；写入/授权/支付必须外部验证

5\. **Multi-Agent 先问必要性** — 多个 Agent 放大了上下文丢失、责任模糊、错误传播、权限扩散问题，把不清楚的流程拆成多个不清楚的角色只会更难调试

\---

\## Questions

1\. Agent 的"停止条件"如何设计才能同时覆盖"任务完成""预算耗尽""信息不足""风险越界"这四种情况？有没有可复用的 Stop Policy 模式？

2\. Tool Use 的权限分级（只读/写入/支付）在代码层如何落地？和 Prompt 层的禁止声明如何配合？

3\. 在 AI × Web3 场景中，Simulation（链上影响模拟）应该做到什么粒度才足够让用户做出知情确认？

\---

\## Analogy

\> Agent 就像一个\*\*被严格管理的实习生\*\*：

\> - 老板（用户）给目标，但不会把公章直接交给他

\> - 他可以在指定文件夹里查资料、写草稿（只读工具）

\> - 涉及盖章、转账的操作（写入/支付工具），必须先给老板过目

\> - 每一步操作都要记在工作日志里（外置 State）

\> - 发现搞不定时主动说"我需要帮助"而不是硬编（停止条件）

\---

\## Templates

\### 1️⃣ Agent 执行循环五要素

\`\`\`markdown

┌─────────────────────────────────────────────────┐

│ Agent 执行循环 │

├──────────┬──────────────────────────────────────┤

│ 目标 │ 用户想达成什么（清晰、可验证） │

│ Goal │ │

├──────────┼──────────────────────────────────────┤

│ 工具 │ 每项标注： │

│ Tools │ • 输入 schema │

│ │ • 权限范围（只读 / 写入 / 支付） │

│ │ • 是否产生外部副作用 │

│ │ • 调用前后如何记录 │

│ │ • 哪些调用需人工确认 │

├──────────┼──────────────────────────────────────┤

│ 状态 │ 外置存储，记录： │

│ State │ • 已完成步骤 │

│ │ • 工具返回结果 │

│ │ • 错误与失败原因 │

│ │ • 用户确认记录 │

├──────────┼──────────────────────────────────────┤

│ 权限 │ 每一步标： │

│ Permission│ • 自动执行 │

│ │ • 需用户确认 │

├──────────┼──────────────────────────────────────┤

│ 停止条件 │ 任一触发即停： │

│ Stop │ • 目标达成 │

│ │ • 预算/时间耗尽 │

│ │ • 信息不足无法继续 │

│ │ • 风险超出阈值 │

│ │ • 用户主动拒绝 │

└──────────┴──────────────────────────────────────┘

\`\`\`

\### 2️⃣ Tool Use 设计问卷

每接入一个新工具，必须回答以下 6 个问题：

\`\`\`

Q1. 输入 schema 是什么？

→ 参数名、类型、必填/可选、默认值

Q2. 权限范围？

→ 只读 / 写入（改状态但无资产变动） / 支付（涉及资产）

Q3. 是否会产生外部副作用？

→ 会 → 列出（发送交易 / 修改链上状态 / 发送通知 …）

→ 不会

Q4. 调用前后如何记录？

→ 调用前：记录时间、参数、触发原因

→ 调用后：记录返回值、成功/失败、耗时

Q5. 哪些调用需要人工确认？

→ 全部写入操作

→ 支付类操作（不论金额大小）

→ 修改系统配置的操作

Q6. 失败重试策略？

→ 可重试：网络超时、临时错误

→ 不可重试：权限拒绝、参数校验失败、余额不足

\`\`\`

\### 3️⃣ AI × Web3 Agent 链路（8 步）

\`\`\`markdown

Step 1 用户提出目标 + 约束

例："帮我分析 DAO 提案 #42，但不要替我投票"

↓

Step 2 Agent 读取上下文 → 生成执行计划

列出每一步：读什么、为什么、预期输出

↓

Step 3 系统把计划拆成 只读步骤 和 候选写入步骤

只读：查提案、检索讨论、总结风险

写入：提交投票（候选，不执行）

↓

Step 4 只读工具自动执行

↓

Step 5 写入工具进入 policy 检查

检查：权限、预算、风险等级、是否在白名单

↓

Step 6 Simulation 展示链上影响

例："该投票将消耗 ~0.002 ETH gas，投票权 100 veTOKEN"

↓

Step 7 用户确认高风险动作

用户看到 simulation 后点"确认"或"拒绝"

↓

Step 8 Wallet / Smart Account 执行 + 全链路日志

记录：每步时间、参数、结果、确认人、tx hash

\`\`\`

\---

\### Key Points

1\. **Agent = 模型提议 + 系统约束 + 用户审批** — 模型只负责提出候选行动，系统限制行动空间，用户批准高风险边界

2\. **工具比回答更危险** — 读数据、写数据库、发请求、改配置不是同一风险等级，每个工具必须定义输入 schema、权限范围、是否只读、是否产生副作用

3\. **State 必须外置可查** — 任务进度、工具结果、失败原因、用户确认都不能只藏在模型上下文里，生产系统需要可查询、可恢复、可审计

4\. **Reflection 只是辅助，不是安全边界** — 模型自我检查可以提高质量，但不能替代确定性检查；写入/授权/支付必须外部验证

5\. **Multi-Agent 先问必要性** — 多个 Agent 放大了上下文丢失、责任模糊、错误传播、权限扩散问题，把不清楚的流程拆成多个不清楚的角色只会更难调试

\---

\## Questions

1\. Agent 的"停止条件"如何设计才能同时覆盖"任务完成""预算耗尽""信息不足""风险越界"这四种情况？有没有可复用的 Stop Policy 模式？

2\. Tool Use 的权限分级（只读/写入/支付）在代码层如何落地？和 Prompt 层的禁止声明如何配合？

3\. 在 AI × Web3 场景中，Simulation（链上影响模拟）应该做到什么粒度才足够让用户做出知情确认？

\---

\## Analogy

\> Agent 就像一个\*\*被严格管理的实习生\*\*：

\> - 老板（用户）给目标，但不会把公章直接交给他

\> - 他可以在指定文件夹里查资料、写草稿（只读工具）

\> - 涉及盖章、转账的操作（写入/支付工具），必须先给老板过目

\> - 每一步操作都要记在工作日志里（外置 State）

\> - 发现搞不定时主动说"我需要帮助"而不是硬编（停止条件）

\---

\## Templates

\### 1️⃣ Agent 执行循环五要素

\`\`\`markdown

┌─────────────────────────────────────────────────┐

│ Agent 执行循环 │

├──────────┬──────────────────────────────────────┤

│ 目标 │ 用户想达成什么（清晰、可验证） │

│ Goal │ │

├──────────┼──────────────────────────────────────┤

│ 工具 │ 每项标注： │

│ Tools │ • 输入 schema │

│ │ • 权限范围（只读 / 写入 / 支付） │

│ │ • 是否产生外部副作用 │

│ │ • 调用前后如何记录 │

│ │ • 哪些调用需人工确认 │

├──────────┼──────────────────────────────────────┤

│ 状态 │ 外置存储，记录： │

│ State │ • 已完成步骤 │

│ │ • 工具返回结果 │

│ │ • 错误与失败原因 │

│ │ • 用户确认记录 │

├──────────┼──────────────────────────────────────┤

│ 权限 │ 每一步标： │

│ Permission│ • 自动执行 │

│ │ • 需用户确认 │

├──────────┼──────────────────────────────────────┤

│ 停止条件 │ 任一触发即停： │

│ Stop │ • 目标达成 │

│ │ • 预算/时间耗尽 │

│ │ • 信息不足无法继续 │

│ │ • 风险超出阈值 │

│ │ • 用户主动拒绝 │

└──────────┴──────────────────────────────────────┘

\`\`\`

\### 2️⃣ Tool Use 设计问卷

每接入一个新工具，必须回答以下 6 个问题：

\`\`\`

Q1. 输入 schema 是什么？

→ 参数名、类型、必填/可选、默认值

Q2. 权限范围？

→ 只读 / 写入（改状态但无资产变动） / 支付（涉及资产）

Q3. 是否会产生外部副作用？

→ 会 → 列出（发送交易 / 修改链上状态 / 发送通知 …）

→ 不会

Q4. 调用前后如何记录？

→ 调用前：记录时间、参数、触发原因

→ 调用后：记录返回值、成功/失败、耗时

Q5. 哪些调用需要人工确认？

→ 全部写入操作

→ 支付类操作（不论金额大小）

→ 修改系统配置的操作

Q6. 失败重试策略？

→ 可重试：网络超时、临时错误

→ 不可重试：权限拒绝、参数校验失败、余额不足

\`\`\`

\### 3️⃣ AI × Web3 Agent 链路（8 步）

\`\`\`markdown

Step 1 用户提出目标 + 约束

例："帮我分析 DAO 提案 #42，但不要替我投票"

↓

Step 2 Agent 读取上下文 → 生成执行计划

列出每一步：读什么、为什么、预期输出

↓

Step 3 系统把计划拆成 只读步骤 和 候选写入步骤

只读：查提案、检索讨论、总结风险

写入：提交投票（候选，不执行）

↓

Step 4 只读工具自动执行

↓

Step 5 写入工具进入 policy 检查

检查：权限、预算、风险等级、是否在白名单

↓

Step 6 Simulation 展示链上影响

例："该投票将消耗 ~0.002 ETH gas，投票权 100 veTOKEN"

↓

Step 7 用户确认高风险动作

用户看到 simulation 后点"确认"或"拒绝"

↓

Step 8 Wallet / Smart Account 执行 + 全链路日志

记录：每步时间、参数、结果、确认人、tx hash

\`\`\`

\---

\### Questions

1\. Agent 的"停止条件"如何设计才能同时覆盖"任务完成""预算耗尽""信息不足""风险越界"这四种情况？有没有可复用的 Stop Policy 模式？

2\. Tool Use 的权限分级（只读/写入/支付）在代码层如何落地？和 Prompt 层的禁止声明如何配合？

3\. 在 AI × Web3 场景中，Simulation（链上影响模拟）应该做到什么粒度才足够让用户做出知情确认？

\---

\## Analogy

\> Agent 就像一个\*\*被严格管理的实习生\*\*：

\> - 老板（用户）给目标，但不会把公章直接交给他

\> - 他可以在指定文件夹里查资料、写草稿（只读工具）

\> - 涉及盖章、转账的操作（写入/支付工具），必须先给老板过目

\> - 每一步操作都要记在工作日志里（外置 State）

\> - 发现搞不定时主动说"我需要帮助"而不是硬编（停止条件）

\---

\## Templates

\### 1️⃣ Agent 执行循环五要素

\`\`\`markdown

┌─────────────────────────────────────────────────┐

│ Agent 执行循环 │

├──────────┬──────────────────────────────────────┤

│ 目标 │ 用户想达成什么（清晰、可验证） │

│ Goal │ │

├──────────┼──────────────────────────────────────┤

│ 工具 │ 每项标注： │

│ Tools │ • 输入 schema │

│ │ • 权限范围（只读 / 写入 / 支付） │

│ │ • 是否产生外部副作用 │

│ │ • 调用前后如何记录 │

│ │ • 哪些调用需人工确认 │

├──────────┼──────────────────────────────────────┤

│ 状态 │ 外置存储，记录： │

│ State │ • 已完成步骤 │

│ │ • 工具返回结果 │

│ │ • 错误与失败原因 │

│ │ • 用户确认记录 │

├──────────┼──────────────────────────────────────┤

│ 权限 │ 每一步标： │

│ Permission│ • 自动执行 │

│ │ • 需用户确认 │

├──────────┼──────────────────────────────────────┤

│ 停止条件 │ 任一触发即停： │

│ Stop │ • 目标达成 │

│ │ • 预算/时间耗尽 │

│ │ • 信息不足无法继续 │

│ │ • 风险超出阈值 │

│ │ • 用户主动拒绝 │

└──────────┴──────────────────────────────────────┘

\`\`\`

\### 2️⃣ Tool Use 设计问卷

每接入一个新工具，必须回答以下 6 个问题：

\`\`\`

Q1. 输入 schema 是什么？

→ 参数名、类型、必填/可选、默认值

Q2. 权限范围？

→ 只读 / 写入（改状态但无资产变动） / 支付（涉及资产）

Q3. 是否会产生外部副作用？

→ 会 → 列出（发送交易 / 修改链上状态 / 发送通知 …）

→ 不会

Q4. 调用前后如何记录？

→ 调用前：记录时间、参数、触发原因

→ 调用后：记录返回值、成功/失败、耗时

Q5. 哪些调用需要人工确认？

→ 全部写入操作

→ 支付类操作（不论金额大小）

→ 修改系统配置的操作

Q6. 失败重试策略？

→ 可重试：网络超时、临时错误

→ 不可重试：权限拒绝、参数校验失败、余额不足

\`\`\`

\### 3️⃣ AI × Web3 Agent 链路（8 步）

\`\`\`markdown

Step 1 用户提出目标 + 约束

例："帮我分析 DAO 提案 #42，但不要替我投票"

↓

Step 2 Agent 读取上下文 → 生成执行计划

列出每一步：读什么、为什么、预期输出

↓

Step 3 系统把计划拆成 只读步骤 和 候选写入步骤

只读：查提案、检索讨论、总结风险

写入：提交投票（候选，不执行）

↓

Step 4 只读工具自动执行

↓

Step 5 写入工具进入 policy 检查

检查：权限、预算、风险等级、是否在白名单

↓

Step 6 Simulation 展示链上影响

例："该投票将消耗 ~0.002 ETH gas，投票权 100 veTOKEN"

↓

Step 7 用户确认高风险动作

用户看到 simulation 后点"确认"或"拒绝"

↓

Step 8 Wallet / Smart Account 执行 + 全链路日志

记录：每步时间、参数、结果、确认人、tx hash

\`\`\`

\---

\### Analogy

\> Agent 就像一个\*\*被严格管理的实习生\*\*：

\> - 老板（用户）给目标，但不会把公章直接交给他

\> - 他可以在指定文件夹里查资料、写草稿（只读工具）

\> - 涉及盖章、转账的操作（写入/支付工具），必须先给老板过目

\> - 每一步操作都要记在工作日志里（外置 State）

\> - 发现搞不定时主动说"我需要帮助"而不是硬编（停止条件）

\---

\## Templates

\### 1️⃣ Agent 执行循环五要素

\`\`\`markdown

┌─────────────────────────────────────────────────┐

│ Agent 执行循环 │

├──────────┬──────────────────────────────────────┤

│ 目标 │ 用户想达成什么（清晰、可验证） │

│ Goal │ │

├──────────┼──────────────────────────────────────┤

│ 工具 │ 每项标注： │

│ Tools │ • 输入 schema │

│ │ • 权限范围（只读 / 写入 / 支付） │

│ │ • 是否产生外部副作用 │

│ │ • 调用前后如何记录 │

│ │ • 哪些调用需人工确认 │

├──────────┼──────────────────────────────────────┤

│ 状态 │ 外置存储，记录： │

│ State │ • 已完成步骤 │

│ │ • 工具返回结果 │

│ │ • 错误与失败原因 │

│ │ • 用户确认记录 │

├──────────┼──────────────────────────────────────┤

│ 权限 │ 每一步标： │

│ Permission│ • 自动执行 │

│ │ • 需用户确认 │

├──────────┼──────────────────────────────────────┤

│ 停止条件 │ 任一触发即停： │

│ Stop │ • 目标达成 │

│ │ • 预算/时间耗尽 │

│ │ • 信息不足无法继续 │

│ │ • 风险超出阈值 │

│ │ • 用户主动拒绝 │

└──────────┴──────────────────────────────────────┘

\`\`\`

\### 2️⃣ Tool Use 设计问卷

每接入一个新工具，必须回答以下 6 个问题：

\`\`\`

Q1. 输入 schema 是什么？

→ 参数名、类型、必填/可选、默认值

Q2. 权限范围？

→ 只读 / 写入（改状态但无资产变动） / 支付（涉及资产）

Q3. 是否会产生外部副作用？

→ 会 → 列出（发送交易 / 修改链上状态 / 发送通知 …）

→ 不会

Q4. 调用前后如何记录？

→ 调用前：记录时间、参数、触发原因

→ 调用后：记录返回值、成功/失败、耗时

Q5. 哪些调用需要人工确认？

→ 全部写入操作

→ 支付类操作（不论金额大小）

→ 修改系统配置的操作

Q6. 失败重试策略？

→ 可重试：网络超时、临时错误

→ 不可重试：权限拒绝、参数校验失败、余额不足

\`\`\`

\### 3️⃣ AI × Web3 Agent 链路（8 步）

\`\`\`markdown

Step 1 用户提出目标 + 约束

例："帮我分析 DAO 提案 #42，但不要替我投票"

↓

Step 2 Agent 读取上下文 → 生成执行计划

列出每一步：读什么、为什么、预期输出

↓

Step 3 系统把计划拆成 只读步骤 和 候选写入步骤

只读：查提案、检索讨论、总结风险

写入：提交投票（候选，不执行）

↓

Step 4 只读工具自动执行

↓

Step 5 写入工具进入 policy 检查

检查：权限、预算、风险等级、是否在白名单

↓

Step 6 Simulation 展示链上影响

例："该投票将消耗 ~0.002 ETH gas，投票权 100 veTOKEN"

↓

Step 7 用户确认高风险动作

用户看到 simulation 后点"确认"或"拒绝"

↓

Step 8 Wallet / Smart Account 执行 + 全链路日志

记录：每步时间、参数、结果、确认人、tx hash

\`\`\`

\---

\### Templates

\### 1️⃣ Agent 执行循环五要素

\`\`\`markdown

┌─────────────────────────────────────────────────┐

│ Agent 执行循环 │

├──────────┬──────────────────────────────────────┤

│ 目标 │ 用户想达成什么（清晰、可验证） │

│ Goal │ │

├──────────┼──────────────────────────────────────┤

│ 工具 │ 每项标注： │

│ Tools │ • 输入 schema │

│ │ • 权限范围（只读 / 写入 / 支付） │

│ │ • 是否产生外部副作用 │

│ │ • 调用前后如何记录 │

│ │ • 哪些调用需人工确认 │

├──────────┼──────────────────────────────────────┤

│ 状态 │ 外置存储，记录： │

│ State │ • 已完成步骤 │

│ │ • 工具返回结果 │

│ │ • 错误与失败原因 │

│ │ • 用户确认记录 │

├──────────┼──────────────────────────────────────┤

│ 权限 │ 每一步标： │

│ Permission│ • 自动执行 │

│ │ • 需用户确认 │

├──────────┼──────────────────────────────────────┤

│ 停止条件 │ 任一触发即停： │

│ Stop │ • 目标达成 │

│ │ • 预算/时间耗尽 │

│ │ • 信息不足无法继续 │

│ │ • 风险超出阈值 │

│ │ • 用户主动拒绝 │

└──────────┴──────────────────────────────────────┘

\`\`\`

\### 2️⃣ Tool Use 设计问卷

每接入一个新工具，必须回答以下 6 个问题：

\`\`\`

Q1. 输入 schema 是什么？

→ 参数名、类型、必填/可选、默认值

Q2. 权限范围？

→ 只读 / 写入（改状态但无资产变动） / 支付（涉及资产）

Q3. 是否会产生外部副作用？

→ 会 → 列出（发送交易 / 修改链上状态 / 发送通知 …）

→ 不会

Q4. 调用前后如何记录？

→ 调用前：记录时间、参数、触发原因

→ 调用后：记录返回值、成功/失败、耗时

Q5. 哪些调用需要人工确认？

→ 全部写入操作

→ 支付类操作（不论金额大小）

→ 修改系统配置的操作

Q6. 失败重试策略？

→ 可重试：网络超时、临时错误

→ 不可重试：权限拒绝、参数校验失败、余额不足

\`\`\`

\### 3️⃣ AI × Web3 Agent 链路（8 步）

\`\`\`markdown

Step 1 用户提出目标 + 约束

例："帮我分析 DAO 提案 #42，但不要替我投票"

↓

Step 2 Agent 读取上下文 → 生成执行计划

列出每一步：读什么、为什么、预期输出

↓

Step 3 系统把计划拆成 只读步骤 和 候选写入步骤

只读：查提案、检索讨论、总结风险

写入：提交投票（候选，不执行）

↓

Step 4 只读工具自动执行

↓

Step 5 写入工具进入 policy 检查

检查：权限、预算、风险等级、是否在白名单

↓

Step 6 Simulation 展示链上影响

例："该投票将消耗 ~0.002 ETH gas，投票权 100 veTOKEN"

↓

Step 7 用户确认高风险动作

用户看到 simulation 后点"确认"或"拒绝"

↓

Step 8 Wallet / Smart Account 执行 + 全链路日志

记录：每步时间、参数、结果、确认人、tx hash

\`\`\`

\---

\---

\## frameworks

\### Summary

选框架不是选最流行的，而是搞清楚它帮你管了哪一层复杂度，又把哪些复杂度藏起来了。

\---

\## Key Points

1\. **框架是系统边界的表达，不是智能本身** — 它不替你定义产品价值，也不保证模型输出正确，只是把复杂系统拆成更清楚的模块

2\. **先画工作流，再选框架** — 失败的项目不是没框架，而是先引入框架再让产品逻辑迁就框架；更稳的是先画出 输入→状态→工具→输出→评估→失败路径，再看哪些值得交给框架

3\. **LangChain = 组件库，不是架构** — 适合快速拼接和初学，但一旦引入一堆 chain 和 agent 而工作流还不清楚，排查问题就会变难

4\. **状态机判断标准** — 只要你开始关心"任务走到哪步、能否恢复、失败从哪里继续"，就应该考虑 LangGraph / state machine

5\. **学习能力先进入评估闭环，再进入生产** — 把线上反馈直接变成行为变化 = 数据污染 + 越权学习；正确流程是 反馈采集→离线评估→确认改进→再上线

\---

\## Questions

1\. LangGraph 的状态图 vs MCP 的协议层 —— 两者分别管了什么？能否组合？

2\. DSPy 的 optimizer 本质上是自动调 prompt，但当任务边界模糊时，optimizer 怎么知道它"改对了"还是"改歪了"？

3\. 在 AI × Web3 场景中，框架的 guardrail 和链上权限检查的分工线到底画在哪里？

\---

\## Analogy

\> 框架就像\*\*厨房的操作台和工具架\*\*：

\> - 它帮你把锅碗瓢盆（模型/工具/检索/状态）分好位置

\> - 但菜谱（产品逻辑）是你自己的，味道（输出正确性）也要你自己尝

\> - 最怕的是还没想好做什么菜，就先把整个厨房装满了设备

\---

\## Templates

\### 1️⃣ 框架选型前置检查清单

\`\`\`

在选框架之前，先回答以下 6 个问题：

1\. 输入是什么？（文本/结构化/链上数据/多模态）

2\. 工具调用是单轮还是多轮？需要分支和重试吗？

3\. 状态需要外置存储吗？需要可恢复吗？

4\. 输出格式是否有 schema 约束？（JSON / 结构化 / 自由文本）

5\. 如何验证结果正确？（人工 / 自动评估 / 链上验证）

6\. 失败路径是什么？（重试 / 降级 / 人工介入 / 停止）

回答完这 6 个问题后，再决定框架应该接管哪部分。

\`\`\`

\### 2️⃣ 五大框架定位速查

\`\`\`

┌────────────────┬─────────────────────────────┬──────────────────────┐

│ 框架 │ 核心定位 │ 何时用 │

├────────────────┼─────────────────────────────┼──────────────────────┤

│ LangChain │ 组件库：拼模型+工具+retriever │ 快速原型、学习组件 │

│ LangGraph │ 状态图：graph 控制流 │ 多步重试分支需恢复 │

│ OpenAI Agents │ Agent SDK：handoff+guardrail │ 需要 tracing+guard │

│ DSPy │ 可优化 pipeline │ 有数据集+指标可评估 │

│ Hermes │ 工具调用+结构化输出生态 │ 依赖稳定 tool calling │

└────────────────┴─────────────────────────────┴──────────────────────┘

\`\`\`

\### 3️⃣ Learning Agent 安全改进闭环

\`\`\`

反馈采集 离线评估 确认改进 上线

│ │ │ │

用户报告错误 → 加入测试集 → pass 评估 → 部署更新

API 调用日志 → 对比指标 → 人工复核 → 控制灰度

工具失败记录 → 回放测试 → 记录版本 → 可回滚

关键原则：线上反馈 ≠ 行为变化。中间必须经过评估闭环。

\`\`\`

\---

\### Key Points

1\. **框架是系统边界的表达，不是智能本身** — 它不替你定义产品价值，也不保证模型输出正确，只是把复杂系统拆成更清楚的模块

2\. **先画工作流，再选框架** — 失败的项目不是没框架，而是先引入框架再让产品逻辑迁就框架；更稳的是先画出 输入→状态→工具→输出→评估→失败路径，再看哪些值得交给框架

3\. **LangChain = 组件库，不是架构** — 适合快速拼接和初学，但一旦引入一堆 chain 和 agent 而工作流还不清楚，排查问题就会变难

4\. **状态机判断标准** — 只要你开始关心"任务走到哪步、能否恢复、失败从哪里继续"，就应该考虑 LangGraph / state machine

5\. **学习能力先进入评估闭环，再进入生产** — 把线上反馈直接变成行为变化 = 数据污染 + 越权学习；正确流程是 反馈采集→离线评估→确认改进→再上线

\---

\## Questions

1\. LangGraph 的状态图 vs MCP 的协议层 —— 两者分别管了什么？能否组合？

2\. DSPy 的 optimizer 本质上是自动调 prompt，但当任务边界模糊时，optimizer 怎么知道它"改对了"还是"改歪了"？

3\. 在 AI × Web3 场景中，框架的 guardrail 和链上权限检查的分工线到底画在哪里？

\---

\## Analogy

\> 框架就像\*\*厨房的操作台和工具架\*\*：

\> - 它帮你把锅碗瓢盆（模型/工具/检索/状态）分好位置

\> - 但菜谱（产品逻辑）是你自己的，味道（输出正确性）也要你自己尝

\> - 最怕的是还没想好做什么菜，就先把整个厨房装满了设备

\---

\## Templates

\### 1️⃣ 框架选型前置检查清单

\`\`\`

在选框架之前，先回答以下 6 个问题：

1\. 输入是什么？（文本/结构化/链上数据/多模态）

2\. 工具调用是单轮还是多轮？需要分支和重试吗？

3\. 状态需要外置存储吗？需要可恢复吗？

4\. 输出格式是否有 schema 约束？（JSON / 结构化 / 自由文本）

5\. 如何验证结果正确？（人工 / 自动评估 / 链上验证）

6\. 失败路径是什么？（重试 / 降级 / 人工介入 / 停止）

回答完这 6 个问题后，再决定框架应该接管哪部分。

\`\`\`

\### 2️⃣ 五大框架定位速查

\`\`\`

┌────────────────┬─────────────────────────────┬──────────────────────┐

│ 框架 │ 核心定位 │ 何时用 │

├────────────────┼─────────────────────────────┼──────────────────────┤

│ LangChain │ 组件库：拼模型+工具+retriever │ 快速原型、学习组件 │

│ LangGraph │ 状态图：graph 控制流 │ 多步重试分支需恢复 │

│ OpenAI Agents │ Agent SDK：handoff+guardrail │ 需要 tracing+guard │

│ DSPy │ 可优化 pipeline │ 有数据集+指标可评估 │

│ Hermes │ 工具调用+结构化输出生态 │ 依赖稳定 tool calling │

└────────────────┴─────────────────────────────┴──────────────────────┘

\`\`\`

\### 3️⃣ Learning Agent 安全改进闭环

\`\`\`

反馈采集 离线评估 确认改进 上线

│ │ │ │

用户报告错误 → 加入测试集 → pass 评估 → 部署更新

API 调用日志 → 对比指标 → 人工复核 → 控制灰度

工具失败记录 → 回放测试 → 记录版本 → 可回滚

关键原则：线上反馈 ≠ 行为变化。中间必须经过评估闭环。

\`\`\`

\---

\### Questions

1\. LangGraph 的状态图 vs MCP 的协议层 —— 两者分别管了什么？能否组合？

2\. DSPy 的 optimizer 本质上是自动调 prompt，但当任务边界模糊时，optimizer 怎么知道它"改对了"还是"改歪了"？

3\. 在 AI × Web3 场景中，框架的 guardrail 和链上权限检查的分工线到底画在哪里？

\---

\## Analogy

\> 框架就像\*\*厨房的操作台和工具架\*\*：

\> - 它帮你把锅碗瓢盆（模型/工具/检索/状态）分好位置

\> - 但菜谱（产品逻辑）是你自己的，味道（输出正确性）也要你自己尝

\> - 最怕的是还没想好做什么菜，就先把整个厨房装满了设备

\---

\## Templates

\### 1️⃣ 框架选型前置检查清单

\`\`\`

在选框架之前，先回答以下 6 个问题：

1\. 输入是什么？（文本/结构化/链上数据/多模态）

2\. 工具调用是单轮还是多轮？需要分支和重试吗？

3\. 状态需要外置存储吗？需要可恢复吗？

4\. 输出格式是否有 schema 约束？（JSON / 结构化 / 自由文本）

5\. 如何验证结果正确？（人工 / 自动评估 / 链上验证）

6\. 失败路径是什么？（重试 / 降级 / 人工介入 / 停止）

回答完这 6 个问题后，再决定框架应该接管哪部分。

\`\`\`

\### 2️⃣ 五大框架定位速查

\`\`\`

┌────────────────┬─────────────────────────────┬──────────────────────┐

│ 框架 │ 核心定位 │ 何时用 │

├────────────────┼─────────────────────────────┼──────────────────────┤

│ LangChain │ 组件库：拼模型+工具+retriever │ 快速原型、学习组件 │

│ LangGraph │ 状态图：graph 控制流 │ 多步重试分支需恢复 │

│ OpenAI Agents │ Agent SDK：handoff+guardrail │ 需要 tracing+guard │

│ DSPy │ 可优化 pipeline │ 有数据集+指标可评估 │

│ Hermes │ 工具调用+结构化输出生态 │ 依赖稳定 tool calling │

└────────────────┴─────────────────────────────┴──────────────────────┘

\`\`\`

\### 3️⃣ Learning Agent 安全改进闭环

\`\`\`

反馈采集 离线评估 确认改进 上线

│ │ │ │

用户报告错误 → 加入测试集 → pass 评估 → 部署更新

API 调用日志 → 对比指标 → 人工复核 → 控制灰度

工具失败记录 → 回放测试 → 记录版本 → 可回滚

关键原则：线上反馈 ≠ 行为变化。中间必须经过评估闭环。

\`\`\`

\---

\### Analogy

\> 框架就像\*\*厨房的操作台和工具架\*\*：

\> - 它帮你把锅碗瓢盆（模型/工具/检索/状态）分好位置

\> - 但菜谱（产品逻辑）是你自己的，味道（输出正确性）也要你自己尝

\> - 最怕的是还没想好做什么菜，就先把整个厨房装满了设备

\---

\## Templates

\### 1️⃣ 框架选型前置检查清单

\`\`\`

在选框架之前，先回答以下 6 个问题：

1\. 输入是什么？（文本/结构化/链上数据/多模态）

2\. 工具调用是单轮还是多轮？需要分支和重试吗？

3\. 状态需要外置存储吗？需要可恢复吗？

4\. 输出格式是否有 schema 约束？（JSON / 结构化 / 自由文本）

5\. 如何验证结果正确？（人工 / 自动评估 / 链上验证）

6\. 失败路径是什么？（重试 / 降级 / 人工介入 / 停止）

回答完这 6 个问题后，再决定框架应该接管哪部分。

\`\`\`

\### 2️⃣ 五大框架定位速查

\`\`\`

┌────────────────┬─────────────────────────────┬──────────────────────┐

│ 框架 │ 核心定位 │ 何时用 │

├────────────────┼─────────────────────────────┼──────────────────────┤

│ LangChain │ 组件库：拼模型+工具+retriever │ 快速原型、学习组件 │

│ LangGraph │ 状态图：graph 控制流 │ 多步重试分支需恢复 │

│ OpenAI Agents │ Agent SDK：handoff+guardrail │ 需要 tracing+guard │

│ DSPy │ 可优化 pipeline │ 有数据集+指标可评估 │

│ Hermes │ 工具调用+结构化输出生态 │ 依赖稳定 tool calling │

└────────────────┴─────────────────────────────┴──────────────────────┘

\`\`\`

\### 3️⃣ Learning Agent 安全改进闭环

\`\`\`

反馈采集 离线评估 确认改进 上线

│ │ │ │

用户报告错误 → 加入测试集 → pass 评估 → 部署更新

API 调用日志 → 对比指标 → 人工复核 → 控制灰度

工具失败记录 → 回放测试 → 记录版本 → 可回滚

关键原则：线上反馈 ≠ 行为变化。中间必须经过评估闭环。

\`\`\`

\---

\### Templates

\### 1️⃣ 框架选型前置检查清单

\`\`\`

在选框架之前，先回答以下 6 个问题：

1\. 输入是什么？（文本/结构化/链上数据/多模态）

2\. 工具调用是单轮还是多轮？需要分支和重试吗？

3\. 状态需要外置存储吗？需要可恢复吗？

4\. 输出格式是否有 schema 约束？（JSON / 结构化 / 自由文本）

5\. 如何验证结果正确？（人工 / 自动评估 / 链上验证）

6\. 失败路径是什么？（重试 / 降级 / 人工介入 / 停止）

回答完这 6 个问题后，再决定框架应该接管哪部分。

\`\`\`

\### 2️⃣ 五大框架定位速查

\`\`\`

┌────────────────┬─────────────────────────────┬──────────────────────┐

│ 框架 │ 核心定位 │ 何时用 │

├────────────────┼─────────────────────────────┼──────────────────────┤

│ LangChain │ 组件库：拼模型+工具+retriever │ 快速原型、学习组件 │

│ LangGraph │ 状态图：graph 控制流 │ 多步重试分支需恢复 │

│ OpenAI Agents │ Agent SDK：handoff+guardrail │ 需要 tracing+guard │

│ DSPy │ 可优化 pipeline │ 有数据集+指标可评估 │

│ Hermes │ 工具调用+结构化输出生态 │ 依赖稳定 tool calling │

└────────────────┴─────────────────────────────┴──────────────────────┘

\`\`\`

\### 3️⃣ Learning Agent 安全改进闭环

\`\`\`

反馈采集 离线评估 确认改进 上线

│ │ │ │

用户报告错误 → 加入测试集 → pass 评估 → 部署更新

API 调用日志 → 对比指标 → 人工复核 → 控制灰度

工具失败记录 → 回放测试 → 记录版本 → 可回滚

关键原则：线上反馈 ≠ 行为变化。中间必须经过评估闭环。

\`\`\`

\---

\---

\## vibe-coding

\### Summary

Vibe Coding 不是把需求丢给 AI——是人定方向/约束/验收，Agent 搜/改/测，共同迭代的工程协作方式。

\---

\## Key Points

1\. **人定边界，Agent 执行** — 人负责目标、约束和验收，Agent 负责搜索、生成、修改和跑测试

2\. **速度快 ≠ 质量高** — 没有测试、审查和版本控制的反馈循环，速度只会放大混乱

3\. **任务要小、上下文要准、验证要硬** — 越具体越可审查；让 Agent 看对文件比写长篇需求更重要；运行测试比"看起来对"可靠

4\. **分级管理工具权限** — Claude Code/Codex CLI 能改文件跑命令，必须明确：哪些文件可改、哪些命令可跑、何时必须让人确认

5\. **AI Coding 要接入工程流程，不能绕过** — issue → branch → commit → test → review → merge，AI 参与但不能替代 human review

\---

\## Questions

1\. Vibe Coding 强调"任务要小"——多小算小？有没有可量化的边界标准（如改 3 个文件以内、不跨模块）？

2\. 合约、签名、支付这类高风险代码，AI 生成的 patch 除了人工 review 还需要什么额外验证层？

3\. Repo Workflow 中"什么时候该让 Agent 继续，什么时候必须让人停下"——这个决策标准如何固化到 CI/CD 流程中？

\---

\## Analogy

\> Vibe Coding 就像\*\*副驾驶开车的模式\*\*：

\> - 你（人）握着方向盘，定目的地、看路况、踩刹车

\> - 副驾驶（AI Agent）帮你查地图、调空调、提醒你超速、帮你变道时看盲区

\> - 但你不会让副驾驶替你踩油门——因为出事故是驾驶者的责任

\>

\> 代码质量的责任永远在你，不在 AI。

\---

\## Templates

\### 1️⃣ 任务拆解模板

\`\`\`markdown

任务：修复用户登录页面的密码重置逻辑

✅ 允许修改：src/auth/reset-password.ts, src/auth/\_\_tests\_\_/reset-password.test.ts

❌ 禁止修改：src/auth/login.ts, src/db/\*, package.json

✅ 允许运行：npm test -- --testPathPattern=reset-password

❌ 禁止运行：npm run deploy, npm run db:migrate

停止条件：改动超过 2 个文件、测试失败超过 1 次、需要改 package.json 的依赖

\`\`\`

\### 2️⃣ Claude Code / Codex CLI 权限分层

| 层级 | 能力 | 风险 | 何时需确认 |

|------|------|------|-----------|

| 只读 | 读文件、搜索、解释代码 | 低 | 无需确认 |

| 局部写入 | 编辑 1-2 个文件、补测试 | 中 | 改后看 diff |

| 批量操作 | 改 3+ 文件、跑脚本 | 高 | 每步确认 |

| 外部访问 | 调 API、发请求、装依赖 | 极高 | 必须审批 |

\### 3️⃣ Repo Workflow 集成清单

\`\`\`

\[ \] issue 写清任务边界和不可改的文件

\[ \] Agent 搜索相关代码并给出最小 patch 计划

\[ \] Agent 生成 patch → 跑测试 → 解释失败

\[ \] 人工查看 git diff，逐一审查

\[ \] 检查是否包含密钥/日志/构建产物

\[ \] Agent 写 PR summary + 验证说明

\[ \] CI 通过 → 人工 merge

\`\`\`

\---

\### Key Points

1\. **人定边界，Agent 执行** — 人负责目标、约束和验收，Agent 负责搜索、生成、修改和跑测试

2\. **速度快 ≠ 质量高** — 没有测试、审查和版本控制的反馈循环，速度只会放大混乱

3\. **任务要小、上下文要准、验证要硬** — 越具体越可审查；让 Agent 看对文件比写长篇需求更重要；运行测试比"看起来对"可靠

4\. **分级管理工具权限** — Claude Code/Codex CLI 能改文件跑命令，必须明确：哪些文件可改、哪些命令可跑、何时必须让人确认

5\. **AI Coding 要接入工程流程，不能绕过** — issue → branch → commit → test → review → merge，AI 参与但不能替代 human review

\---

\## Questions

1\. Vibe Coding 强调"任务要小"——多小算小？有没有可量化的边界标准（如改 3 个文件以内、不跨模块）？

2\. 合约、签名、支付这类高风险代码，AI 生成的 patch 除了人工 review 还需要什么额外验证层？

3\. Repo Workflow 中"什么时候该让 Agent 继续，什么时候必须让人停下"——这个决策标准如何固化到 CI/CD 流程中？

\---

\## Analogy

\> Vibe Coding 就像\*\*副驾驶开车的模式\*\*：

\> - 你（人）握着方向盘，定目的地、看路况、踩刹车

\> - 副驾驶（AI Agent）帮你查地图、调空调、提醒你超速、帮你变道时看盲区

\> - 但你不会让副驾驶替你踩油门——因为出事故是驾驶者的责任

\>

\> 代码质量的责任永远在你，不在 AI。

\---

\## Templates

\### 1️⃣ 任务拆解模板

\`\`\`markdown

任务：修复用户登录页面的密码重置逻辑

✅ 允许修改：src/auth/reset-password.ts, src/auth/\_\_tests\_\_/reset-password.test.ts

❌ 禁止修改：src/auth/login.ts, src/db/\*, package.json

✅ 允许运行：npm test -- --testPathPattern=reset-password

❌ 禁止运行：npm run deploy, npm run db:migrate

停止条件：改动超过 2 个文件、测试失败超过 1 次、需要改 package.json 的依赖

\`\`\`

\### 2️⃣ Claude Code / Codex CLI 权限分层

| 层级 | 能力 | 风险 | 何时需确认 |

|------|------|------|-----------|

| 只读 | 读文件、搜索、解释代码 | 低 | 无需确认 |

| 局部写入 | 编辑 1-2 个文件、补测试 | 中 | 改后看 diff |

| 批量操作 | 改 3+ 文件、跑脚本 | 高 | 每步确认 |

| 外部访问 | 调 API、发请求、装依赖 | 极高 | 必须审批 |

\### 3️⃣ Repo Workflow 集成清单

\`\`\`

\[ \] issue 写清任务边界和不可改的文件

\[ \] Agent 搜索相关代码并给出最小 patch 计划

\[ \] Agent 生成 patch → 跑测试 → 解释失败

\[ \] 人工查看 git diff，逐一审查

\[ \] 检查是否包含密钥/日志/构建产物

\[ \] Agent 写 PR summary + 验证说明

\[ \] CI 通过 → 人工 merge

\`\`\`

\---

\### Questions

1\. Vibe Coding 强调"任务要小"——多小算小？有没有可量化的边界标准（如改 3 个文件以内、不跨模块）？

2\. 合约、签名、支付这类高风险代码，AI 生成的 patch 除了人工 review 还需要什么额外验证层？

3\. Repo Workflow 中"什么时候该让 Agent 继续，什么时候必须让人停下"——这个决策标准如何固化到 CI/CD 流程中？

\---

\## Analogy

\> Vibe Coding 就像\*\*副驾驶开车的模式\*\*：

\> - 你（人）握着方向盘，定目的地、看路况、踩刹车

\> - 副驾驶（AI Agent）帮你查地图、调空调、提醒你超速、帮你变道时看盲区

\> - 但你不会让副驾驶替你踩油门——因为出事故是驾驶者的责任

\>

\> 代码质量的责任永远在你，不在 AI。

\---

\## Templates

\### 1️⃣ 任务拆解模板

\`\`\`markdown

任务：修复用户登录页面的密码重置逻辑

✅ 允许修改：src/auth/reset-password.ts, src/auth/\_\_tests\_\_/reset-password.test.ts

❌ 禁止修改：src/auth/login.ts, src/db/\*, package.json

✅ 允许运行：npm test -- --testPathPattern=reset-password

❌ 禁止运行：npm run deploy, npm run db:migrate

停止条件：改动超过 2 个文件、测试失败超过 1 次、需要改 package.json 的依赖

\`\`\`

\### 2️⃣ Claude Code / Codex CLI 权限分层

| 层级 | 能力 | 风险 | 何时需确认 |

|------|------|------|-----------|

| 只读 | 读文件、搜索、解释代码 | 低 | 无需确认 |

| 局部写入 | 编辑 1-2 个文件、补测试 | 中 | 改后看 diff |

| 批量操作 | 改 3+ 文件、跑脚本 | 高 | 每步确认 |

| 外部访问 | 调 API、发请求、装依赖 | 极高 | 必须审批 |

\### 3️⃣ Repo Workflow 集成清单

\`\`\`

\[ \] issue 写清任务边界和不可改的文件

\[ \] Agent 搜索相关代码并给出最小 patch 计划

\[ \] Agent 生成 patch → 跑测试 → 解释失败

\[ \] 人工查看 git diff，逐一审查

\[ \] 检查是否包含密钥/日志/构建产物

\[ \] Agent 写 PR summary + 验证说明

\[ \] CI 通过 → 人工 merge

\`\`\`

\---

\### Analogy

\> Vibe Coding 就像\*\*副驾驶开车的模式\*\*：

\> - 你（人）握着方向盘，定目的地、看路况、踩刹车

\> - 副驾驶（AI Agent）帮你查地图、调空调、提醒你超速、帮你变道时看盲区

\> - 但你不会让副驾驶替你踩油门——因为出事故是驾驶者的责任

\>

\> 代码质量的责任永远在你，不在 AI。

\---

\## Templates

\### 1️⃣ 任务拆解模板

\`\`\`markdown

任务：修复用户登录页面的密码重置逻辑

✅ 允许修改：src/auth/reset-password.ts, src/auth/\_\_tests\_\_/reset-password.test.ts

❌ 禁止修改：src/auth/login.ts, src/db/\*, package.json

✅ 允许运行：npm test -- --testPathPattern=reset-password

❌ 禁止运行：npm run deploy, npm run db:migrate

停止条件：改动超过 2 个文件、测试失败超过 1 次、需要改 package.json 的依赖

\`\`\`

\### 2️⃣ Claude Code / Codex CLI 权限分层

| 层级 | 能力 | 风险 | 何时需确认 |

|------|------|------|-----------|

| 只读 | 读文件、搜索、解释代码 | 低 | 无需确认 |

| 局部写入 | 编辑 1-2 个文件、补测试 | 中 | 改后看 diff |

| 批量操作 | 改 3+ 文件、跑脚本 | 高 | 每步确认 |

| 外部访问 | 调 API、发请求、装依赖 | 极高 | 必须审批 |

\### 3️⃣ Repo Workflow 集成清单

\`\`\`

\[ \] issue 写清任务边界和不可改的文件

\[ \] Agent 搜索相关代码并给出最小 patch 计划

\[ \] Agent 生成 patch → 跑测试 → 解释失败

\[ \] 人工查看 git diff，逐一审查

\[ \] 检查是否包含密钥/日志/构建产物

\[ \] Agent 写 PR summary + 验证说明

\[ \] CI 通过 → 人工 merge

\`\`\`

\---

\### Templates

\### 1️⃣ 任务拆解模板

\`\`\`markdown

任务：修复用户登录页面的密码重置逻辑

✅ 允许修改：src/auth/reset-password.ts, src/auth/\_\_tests\_\_/reset-password.test.ts

❌ 禁止修改：src/auth/login.ts, src/db/\*, package.json

✅ 允许运行：npm test -- --testPathPattern=reset-password

❌ 禁止运行：npm run deploy, npm run db:migrate

停止条件：改动超过 2 个文件、测试失败超过 1 次、需要改 package.json 的依赖

\`\`\`

\### 2️⃣ Claude Code / Codex CLI 权限分层

| 层级 | 能力 | 风险 | 何时需确认 |

|------|------|------|-----------|

| 只读 | 读文件、搜索、解释代码 | 低 | 无需确认 |

| 局部写入 | 编辑 1-2 个文件、补测试 | 中 | 改后看 diff |

| 批量操作 | 改 3+ 文件、跑脚本 | 高 | 每步确认 |

| 外部访问 | 调 API、发请求、装依赖 | 极高 | 必须审批 |

\### 3️⃣ Repo Workflow 集成清单

\`\`\`

\[ \] issue 写清任务边界和不可改的文件

\[ \] Agent 搜索相关代码并给出最小 patch 计划

\[ \] Agent 生成 patch → 跑测试 → 解释失败

\[ \] 人工查看 git diff，逐一审查

\[ \] 检查是否包含密钥/日志/构建产物

\[ \] Agent 写 PR summary + 验证说明

\[ \] CI 通过 → 人工 merge

\`\`\`

\---

\---

\## mcp

\### Summary

MCP 不是让模型变聪明——是把工具接入标准化，让模型以可描述、可复用、可管理的方式调用外部能力。

\---

\## Key Points

1\. **MCP 是 AI 的"工具接口标准"** — 客户端负责和模型交互，Server 暴露资源/工具/prompts，统一 schema、权限、错误处理

2\. **Server 的设计核心是边界** — 暴露哪些资源、工具只读还是写入、参数 schema 是否清楚、权限和审计在哪里

3\. **Client 要透明** — 让用户知道连接了哪些 Server、模型能调哪些工具、调用前是否需要确认

4\. **Tool Schema 写得模糊，模型就用错误参数填空** — 好 schema 不仅字段类型，还说明用途、必填性、副作用和失败返回

5\. **Permission 是 MCP 最被低估的问题** — 只读/写入、当前会话授权/长期授权、是否需用户确认、是否可撤销和审计，必须在 Server 暴露能力前定义

\---

\## Questions

1\. MCP 的 Permission 模型和 Agent 篇的 Tool Use 权限分级如何配合？MCP Server 自己定义权限 vs 外部系统强制执行，分界线在哪里？

2\. 一个 MCP Server 暴露了读写混合的工具后，如何确保模型不会在"信息不足"时执行写入操作？Client 端的 guardrails 应该做什么？

3\. 在 Web3 场景中，MCP 标准化工具入口后，交易模拟和签名确认这两步应该放在 MCP 层还是放在调用方？

\---

\## Analogy

\> MCP 就像\*\*USB 接口标准\*\*：

\> - 以前每个设备（工具）用自己的一根线（适配层），换了设备就得换线

\> - MCP 统一了插口形状和电压规范（schema + 协议），任何符合标准的设备插上就能用

\> - 但 USB 只管接口，不管这个设备是键盘还是移动硬盘——权限和安全性由操作系统（应用层）管

\>

\> 方便不等于安全。

\---

\## Templates

\### 1️⃣ MCP Server 设计检查清单

| 维度 | 问题 |

|------|------|

| 资源暴露 | 暴露了哪些 resources？白名单还是全开放？ |

| 工具权限 | 每个工具是只读还是写入？是否标注了副作用？ |

| 参数 Schema | 每个参数有类型、必填/可选、用途说明吗？ |

| 错误返回 | 失败、超时、权限不足是否返回明确错误码？ |

| 用户授权 | 哪些工具需要当前会话确认？哪些可长期授权？ |

| 审计日志 | 每次工具调用是否记录时间、参数、结果、调用方？ |

| 路径隔离 | 文件读取是否限制在白名单目录？ |

\### 2️⃣ Tool Schema 模板

\`\`\`json

{

"name": "search\_docs",

"description": "搜索本地项目文档，返回匹配的章节和路径。仅在用户需要查找项目相关文档时使用。",

"inputSchema": {

"type": "object",

"properties": {

"query": {

"type": "string",

"description": "搜索关键词或自然语言查询"

}

},

"required": \["query"\]

},

"side\_effects": false,

"requires\_approval": false,

"on\_failure": {

"no\_results": { "message": "未找到匹配文档", "suggestion": "尝试更短的关键词" },

"timeout": { "message": "搜索超时", "suggestion": "缩小搜索范围后重试" }

}

}

\`\`\`

\### 3️⃣ MCP Permission 分级

| 级别 | 能力 | 授权方式 | 示例 |

|------|------|----------|------|

| 🔍 只读 | 读文件、搜索、查询 | 当前会话授权 | search\_docs, get\_file |

| ✏️ 写入 | 创建/修改文件、发 PR | 每步确认 | create\_pr, edit\_file |

| 💰 支付 | 签名交易、转移资产 | 必须人工审批 | transfer, swap |

| ⚙️ 系统 | 改配置、装依赖 | 禁止或极严格审批 | install\_package |

\---

\### Key Points

1\. **MCP 是 AI 的"工具接口标准"** — 客户端负责和模型交互，Server 暴露资源/工具/prompts，统一 schema、权限、错误处理

2\. **Server 的设计核心是边界** — 暴露哪些资源、工具只读还是写入、参数 schema 是否清楚、权限和审计在哪里

3\. **Client 要透明** — 让用户知道连接了哪些 Server、模型能调哪些工具、调用前是否需要确认

4\. **Tool Schema 写得模糊，模型就用错误参数填空** — 好 schema 不仅字段类型，还说明用途、必填性、副作用和失败返回

5\. **Permission 是 MCP 最被低估的问题** — 只读/写入、当前会话授权/长期授权、是否需用户确认、是否可撤销和审计，必须在 Server 暴露能力前定义

\---

\## Questions

1\. MCP 的 Permission 模型和 Agent 篇的 Tool Use 权限分级如何配合？MCP Server 自己定义权限 vs 外部系统强制执行，分界线在哪里？

2\. 一个 MCP Server 暴露了读写混合的工具后，如何确保模型不会在"信息不足"时执行写入操作？Client 端的 guardrails 应该做什么？

3\. 在 Web3 场景中，MCP 标准化工具入口后，交易模拟和签名确认这两步应该放在 MCP 层还是放在调用方？

\---

\## Analogy

\> MCP 就像\*\*USB 接口标准\*\*：

\> - 以前每个设备（工具）用自己的一根线（适配层），换了设备就得换线

\> - MCP 统一了插口形状和电压规范（schema + 协议），任何符合标准的设备插上就能用

\> - 但 USB 只管接口，不管这个设备是键盘还是移动硬盘——权限和安全性由操作系统（应用层）管

\>

\> 方便不等于安全。

\---

\## Templates

\### 1️⃣ MCP Server 设计检查清单

| 维度 | 问题 |

|------|------|

| 资源暴露 | 暴露了哪些 resources？白名单还是全开放？ |

| 工具权限 | 每个工具是只读还是写入？是否标注了副作用？ |

| 参数 Schema | 每个参数有类型、必填/可选、用途说明吗？ |

| 错误返回 | 失败、超时、权限不足是否返回明确错误码？ |

| 用户授权 | 哪些工具需要当前会话确认？哪些可长期授权？ |

| 审计日志 | 每次工具调用是否记录时间、参数、结果、调用方？ |

| 路径隔离 | 文件读取是否限制在白名单目录？ |

\### 2️⃣ Tool Schema 模板

\`\`\`json

{

"name": "search\_docs",

"description": "搜索本地项目文档，返回匹配的章节和路径。仅在用户需要查找项目相关文档时使用。",

"inputSchema": {

"type": "object",

"properties": {

"query": {

"type": "string",

"description": "搜索关键词或自然语言查询"

}

},

"required": \["query"\]

},

"side\_effects": false,

"requires\_approval": false,

"on\_failure": {

"no\_results": { "message": "未找到匹配文档", "suggestion": "尝试更短的关键词" },

"timeout": { "message": "搜索超时", "suggestion": "缩小搜索范围后重试" }

}

}

\`\`\`

\### 3️⃣ MCP Permission 分级

| 级别 | 能力 | 授权方式 | 示例 |

|------|------|----------|------|

| 🔍 只读 | 读文件、搜索、查询 | 当前会话授权 | search\_docs, get\_file |

| ✏️ 写入 | 创建/修改文件、发 PR | 每步确认 | create\_pr, edit\_file |

| 💰 支付 | 签名交易、转移资产 | 必须人工审批 | transfer, swap |

| ⚙️ 系统 | 改配置、装依赖 | 禁止或极严格审批 | install\_package |

\---

\### Questions

1\. MCP 的 Permission 模型和 Agent 篇的 Tool Use 权限分级如何配合？MCP Server 自己定义权限 vs 外部系统强制执行，分界线在哪里？

2\. 一个 MCP Server 暴露了读写混合的工具后，如何确保模型不会在"信息不足"时执行写入操作？Client 端的 guardrails 应该做什么？

3\. 在 Web3 场景中，MCP 标准化工具入口后，交易模拟和签名确认这两步应该放在 MCP 层还是放在调用方？

\---

\## Analogy

\> MCP 就像\*\*USB 接口标准\*\*：

\> - 以前每个设备（工具）用自己的一根线（适配层），换了设备就得换线

\> - MCP 统一了插口形状和电压规范（schema + 协议），任何符合标准的设备插上就能用

\> - 但 USB 只管接口，不管这个设备是键盘还是移动硬盘——权限和安全性由操作系统（应用层）管

\>

\> 方便不等于安全。

\---

\## Templates

\### 1️⃣ MCP Server 设计检查清单

| 维度 | 问题 |

|------|------|

| 资源暴露 | 暴露了哪些 resources？白名单还是全开放？ |

| 工具权限 | 每个工具是只读还是写入？是否标注了副作用？ |

| 参数 Schema | 每个参数有类型、必填/可选、用途说明吗？ |

| 错误返回 | 失败、超时、权限不足是否返回明确错误码？ |

| 用户授权 | 哪些工具需要当前会话确认？哪些可长期授权？ |

| 审计日志 | 每次工具调用是否记录时间、参数、结果、调用方？ |

| 路径隔离 | 文件读取是否限制在白名单目录？ |

\### 2️⃣ Tool Schema 模板

\`\`\`json

{

"name": "search\_docs",

"description": "搜索本地项目文档，返回匹配的章节和路径。仅在用户需要查找项目相关文档时使用。",

"inputSchema": {

"type": "object",

"properties": {

"query": {

"type": "string",

"description": "搜索关键词或自然语言查询"

}

},

"required": \["query"\]

},

"side\_effects": false,

"requires\_approval": false,

"on\_failure": {

"no\_results": { "message": "未找到匹配文档", "suggestion": "尝试更短的关键词" },

"timeout": { "message": "搜索超时", "suggestion": "缩小搜索范围后重试" }

}

}

\`\`\`

\### 3️⃣ MCP Permission 分级

| 级别 | 能力 | 授权方式 | 示例 |

|------|------|----------|------|

| 🔍 只读 | 读文件、搜索、查询 | 当前会话授权 | search\_docs, get\_file |

| ✏️ 写入 | 创建/修改文件、发 PR | 每步确认 | create\_pr, edit\_file |

| 💰 支付 | 签名交易、转移资产 | 必须人工审批 | transfer, swap |

| ⚙️ 系统 | 改配置、装依赖 | 禁止或极严格审批 | install\_package |

\---

\### Analogy

\> MCP 就像\*\*USB 接口标准\*\*：

\> - 以前每个设备（工具）用自己的一根线（适配层），换了设备就得换线

\> - MCP 统一了插口形状和电压规范（schema + 协议），任何符合标准的设备插上就能用

\> - 但 USB 只管接口，不管这个设备是键盘还是移动硬盘——权限和安全性由操作系统（应用层）管

\>

\> 方便不等于安全。

\---

\## Templates

\### 1️⃣ MCP Server 设计检查清单

| 维度 | 问题 |

|------|------|

| 资源暴露 | 暴露了哪些 resources？白名单还是全开放？ |

| 工具权限 | 每个工具是只读还是写入？是否标注了副作用？ |

| 参数 Schema | 每个参数有类型、必填/可选、用途说明吗？ |

| 错误返回 | 失败、超时、权限不足是否返回明确错误码？ |

| 用户授权 | 哪些工具需要当前会话确认？哪些可长期授权？ |

| 审计日志 | 每次工具调用是否记录时间、参数、结果、调用方？ |

| 路径隔离 | 文件读取是否限制在白名单目录？ |

\### 2️⃣ Tool Schema 模板

\`\`\`json

{

"name": "search\_docs",

"description": "搜索本地项目文档，返回匹配的章节和路径。仅在用户需要查找项目相关文档时使用。",

"inputSchema": {

"type": "object",

"properties": {

"query": {

"type": "string",

"description": "搜索关键词或自然语言查询"

}

},

"required": \["query"\]

},

"side\_effects": false,

"requires\_approval": false,

"on\_failure": {

"no\_results": { "message": "未找到匹配文档", "suggestion": "尝试更短的关键词" },

"timeout": { "message": "搜索超时", "suggestion": "缩小搜索范围后重试" }

}

}

\`\`\`

\### 3️⃣ MCP Permission 分级

| 级别 | 能力 | 授权方式 | 示例 |

|------|------|----------|------|

| 🔍 只读 | 读文件、搜索、查询 | 当前会话授权 | search\_docs, get\_file |

| ✏️ 写入 | 创建/修改文件、发 PR | 每步确认 | create\_pr, edit\_file |

| 💰 支付 | 签名交易、转移资产 | 必须人工审批 | transfer, swap |

| ⚙️ 系统 | 改配置、装依赖 | 禁止或极严格审批 | install\_package |

\---

\### Templates

\### 1️⃣ MCP Server 设计检查清单

| 维度 | 问题 |

|------|------|

| 资源暴露 | 暴露了哪些 resources？白名单还是全开放？ |

| 工具权限 | 每个工具是只读还是写入？是否标注了副作用？ |

| 参数 Schema | 每个参数有类型、必填/可选、用途说明吗？ |

| 错误返回 | 失败、超时、权限不足是否返回明确错误码？ |

| 用户授权 | 哪些工具需要当前会话确认？哪些可长期授权？ |

| 审计日志 | 每次工具调用是否记录时间、参数、结果、调用方？ |

| 路径隔离 | 文件读取是否限制在白名单目录？ |

\### 2️⃣ Tool Schema 模板

\`\`\`json

{

"name": "search\_docs",

"description": "搜索本地项目文档，返回匹配的章节和路径。仅在用户需要查找项目相关文档时使用。",

"inputSchema": {

"type": "object",

"properties": {

"query": {

"type": "string",

"description": "搜索关键词或自然语言查询"

}

},

"required": \["query"\]

},

"side\_effects": false,

"requires\_approval": false,

"on\_failure": {

"no\_results": { "message": "未找到匹配文档", "suggestion": "尝试更短的关键词" },

"timeout": { "message": "搜索超时", "suggestion": "缩小搜索范围后重试" }

}

}

\`\`\`

\### 3️⃣ MCP Permission 分级

| 级别 | 能力 | 授权方式 | 示例 |

|------|------|----------|------|

| 🔍 只读 | 读文件、搜索、查询 | 当前会话授权 | search\_docs, get\_file |

| ✏️ 写入 | 创建/修改文件、发 PR | 每步确认 | create\_pr, edit\_file |

| 💰 支付 | 签名交易、转移资产 | 必须人工审批 | transfer, swap |

| ⚙️ 系统 | 改配置、装依赖 | 禁止或极严格审批 | install\_package |

\---

\---

\## 🛠️ 最小实践汇总

**vibe-coding**:

\`\`\`

目标：选择一个小功能，让 AI Coding Agent 完成一轮完整工程闭环。

步骤：

1\. 选定一个小功能（如加一个工具函数、补一段测试、修一个已知 bug）

2\. 写清楚任务边界：

\- 哪些文件可以改

\- 哪些文件绝对不能动

\- 哪些命令允许运行

\- 停止条件是什么

3\. 让 Agent 搜索相关代码并给出计划

4\. 让 Agent 做最小 patch（改最少的文件完成目标）

5\. 运行测试或构建验证

6\. 用 git diff 逐行审查 Agent 的改动

7\. 要求 Agent 写一段 PR summary 和验证说明

完成后记录：

• 哪些信息给少了导致 Agent 跑偏？

• 哪些测试缺失导致 Agent 的改动没被验证到？

• 哪些改动需要人类判断而不是 Agent 自己做决定？

\`\`\`

\> 📂 Demo 地址：\[待补充\]()

**mcp**:

\`\`\`

目标：做一个只读 MCP Server。

工具清单（仅 2 个只读工具）：

1\. search\_docs(query) — 搜索本地项目文档

2\. get\_file(path) — 读取白名单目录里的文件

硬性要求：

• 不能读取白名单外路径（路径必须在注册的白名单目录内）

• 返回结果必须带来源路径（让调用方知道结果从哪来）

• 每次工具调用写日志（时间、参数、结果、耗时）

• 错误明确返回，不静默失败（文件不存在 → "文件未找到: /path"）

• 白名单目录可配置（不写死在代码里）

完成后验证：

1\. 搜索一个确实存在的关键词 → 返回带路径的结果

2\. 尝试读取白名单外的路径 → 返回权限拒绝

3\. 读取不存在的文件 → 返回文件未找到

4\. 检查日志文件是否有调用记录

升级任务（权限升级方案设计）：

加一个"写入工具"（如 create\_pr），设计：

• 何时需要用户确认？

• 如何撤销已授权的工具？

• 如何审计每次写入调用？

\`\`\`

\> 📂 Demo 地址：\[待补充\]()

\---

\## 🏆 挑战汇总

**vibe-coding**:

\`\`\`

在自己的电脑上安装并配置至少一个 Vibe Coding 工具（Claude Code / Codex CLI / OpenCLI），

并在一个测试 repo 中完成验证。

完成标准：

1\. 能启动工具并读取当前项目

2\. 已配置必要的模型、API key、浏览器桥接或本地工具权限

3\. 能让工具完成一个只读任务（解释目录结构 / 搜索相关文件 / 总结某段代码）

4\. 能让工具完成一个低风险小改动（补注释 / 生成脚本 / 修改一处测试）

5\. 保留验证记录：工具版本、配置方式、执行命令、关键输出或截图

\`\`\`

\> 📂 Demo 地址：\[待补充\]()

\---

\## 📊 各章节生成信息

| 章节 | 模型 | 生成时间 |

|------|------|----------|

| rag | deepseek-v4-pro | 2026-05-21 |

| agent | deepseek-v4-pro | 2026-05-21 |

| frameworks | deepseek-v4-pro | 2026-05-21 |

| vibe-coding | deepseek-v4-pro | 2026-05-21 |

| mcp | deepseek-v4-pro | 2026-05-21 |

\---

_AI x Web3 School Day 4 课程完成 — 由 Hermes AI（模型：deepseek-v4-pro）在 2026-05-21 生成_
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->












📝 今日学习笔记预览 (Day 3)

\# Day 3 学习笔记：Prompt Engineering & Context Engineering

**日期**: 2026-05-20

**学习时长**: 约 2 小时

**学习主题**: Prompt 工程与 Context 工程

\---

\## 一、Prompt Engineering 核心要点

\### 1.1 核心理念

\- **Prompt 是软约束**，不是安全边界

\- 真正的安全必须由代码、权限、校验和审计保障

\- 高风险动作不能仅靠 Prompt 拦截

\### 1.2 四段式 Instruction 结构

\[任务目标\]

\[可用输入\]

\[禁止行为\]

\[输出格式 & 失败格式\]

\### 1.3 Few-shot vs Structured Output

| 特性 | Few-shot | Structured Output |

|------|----------|-------------------|

| 用途 | 风格模仿、边界模糊场景 | 固定格式供代码处理 |

| 输出 | 自由文本 | JSON/schema 约束 |

| 适用场景 | 难以一句话说清的任务 | 必须固定字段的任务 |

\### 1.4 Prompt Injection 风险

\- 外部输入可能覆盖原始规则

\- 需代码层校验 + 人工审批

\- 敏感动作通过白名单 + 人工确认

\---

\## 二、Context Engineering 核心要点

\### 2.1 核心理念

\- **Context ≠ 简单拼接**

\- 必须把系统规则、用户目标、历史状态、工具结果和外部文档分清楚

\- 每类信息要标注来源、时效、权限和可信度

\### 2.2 Context 信息来源分级

| 类型 | 可信度 | 处理方式 |

|------|--------|----------|

| 系统状态/配置 | ✅ 高可信 | 直接放入 Context 顶层 |

| 用户输入 | ⚠️ 中可信 | 需要参数校验后再使用 |

| 检索文档 | ⚠️ 中可信 | 标注来源和获取时间 |

| 工具结果 | ⚠️ 需验证 | 检查返回 schema 完整性 |

| 外部网页 | ❌ 低可信 | 隔离层处理，不可直接信任 |

\### 2.3 Memory 风险检查清单

\- ✅ 所有 Memory 条目都有明确的过期时间或撤销方式

\- ✅ 涉及钱包地址的交易记录需每次重新确认

\- ✅ 记住"用户偏好"不等同于记住"用户授权"

\- ✅ 跨会话的记忆不包含敏感凭证

\- ❌ 禁止：根据历史行为自动推断用户风险偏好

\- ❌ 禁止：长期缓存用户资产余额用于决策

\- ❌ 禁止：默认上次任务的上下文延续到下次任务

\---

\## 三、Prompt vs Context 对比

| 维度 | Prompt | Context |

|------|--------|---------|

| 核心作用 | 定义任务目标和输出格式 | 提供可信信息和边界 |

| 设计重点 | 指令清晰、格式可校验 | 来源标注、权限隔离 |

| 安全层级 | 软约束（可被覆盖） | 信息治理（分级管理） |

| 常见风险 | Prompt Injection | 信息过载、权限越界 |

| 最佳实践 | 四段式结构 + Few-shot + Structured Output | 来源分级 + 可撤销记忆 + 刷新机制 |

\---

\## 四、实践练习

\### 4.1 构建"交易风险摘要" Prompt

\- 输入：交易目标地址、函数名、参数、资产变化、模拟结果、用户原始意图

\- 输出：JSON 格式的风险分析报告

\- 测试用例：普通转账、无限授权、地址不匹配

\---

\## 五、学习收获

1\. **理解了 Prompt 的本质**：不是"怎么问"，而是可执行的通信协议

2\. **掌握了 Context 治理**：信息分级、权限隔离、可撤销记忆

3\. **识别了安全风险**：Prompt Injection、信息过载、权限越界

4\. **学会了最佳实践**：四段式结构、结构化输出、来源标注

\---

\## 六、待深入学习的问题

1\. 如何设计一个"防注入"的 Prompt 结构？

2\. 在 Agent 场景中，如何设计"上下文刷新机制"？

3\. 当 Context Window 接近上限时，优先级排序策略是什么？

\---

_学习笔记结束_

\---
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->













**目录**

[前言](#%E5%89%8D%E8%A8%80)

[创建AI + Web3 学习仓库](#%E5%88%9B%E5%BB%BAAI%20+%20Web3%20%E5%AD%A6%E4%B9%A0%E4%BB%93%E5%BA%93)

[git两种工作流](#git%E4%B8%A4%E7%A7%8D%E5%B7%A5%E4%BD%9C%E6%B5%81)

[先有本地项目](#%E5%85%88%E6%9C%89%E6%9C%AC%E5%9C%B0%E9%A1%B9%E7%9B%AE)

[先有远程仓库](#%E5%85%88%E6%9C%89%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93)

[LLM 基础概念](#LLM%20%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5)

[🎯 核心问题](#%F0%9F%8E%AF%20%E6%A0%B8%E5%BF%83%E9%97%AE%E9%A2%98)

[✅ 今天学到的关键理解](#%E2%9C%85%20%E4%BB%8A%E5%A4%A9%E5%AD%A6%E5%88%B0%E7%9A%84%E5%85%B3%E9%94%AE%E7%90%86%E8%A7%A3)

[1\. LLM 的运作机制](#1.%20LLM%20%E7%9A%84%E8%BF%90%E4%BD%9C%E6%9C%BA%E5%88%B6)

[2\. Control Layers 层级体系](#2.%20Control%20Layers%20%E5%B1%82%E7%BA%A7%E4%BD%93%E7%B3%BB)

[3\. Tokenizer 分词机制](#3.%20Tokenizer%20%E5%88%86%E8%AF%8D%E6%9C%BA%E5%88%B6)

[4\. Multimodal 现状](#4.%20Multimodal%20%E7%8E%B0%E7%8A%B6)

[5\. Hallucination 幻觉的本质](#5.%20Hallucination%20%E5%B9%BB%E8%A7%89%E7%9A%84%E6%9C%AC%E8%B4%A8)

[6\. Schema Validation 校验机制](#6.%20Schema%20Validation%20%E6%A0%A1%E9%AA%8C%E6%9C%BA%E5%88%B6)

[初学问题](#%E5%88%9D%E5%AD%A6%E9%97%AE%E9%A2%98)

[learning agent答案](#learning%20agent%E7%AD%94%E6%A1%88)

[第一个问题](#%E7%AC%AC%E4%B8%80%E4%B8%AA%E9%97%AE%E9%A2%98)

[第二个问题](#%E7%AC%AC%E4%BA%8C%E4%B8%AA%E9%97%AE%E9%A2%98)

[第三个问题](#%E7%AC%AC%E4%B8%89%E4%B8%AA%E9%97%AE%E9%A2%98)

[第四个问题](#%E7%AC%AC%E5%9B%9B%E4%B8%AA%E9%97%AE%E9%A2%98)

[第五个问题](#%E7%AC%AC%E4%BA%94%E4%B8%AA%E9%97%AE%E9%A2%98)

[第六个问题](#%E7%AC%AC%E5%85%AD%E4%B8%AA%E9%97%AE%E9%A2%98)

[额外提升](#%E9%A2%9D%E5%A4%96%E6%8F%90%E5%8D%87)

[结语](#%E7%BB%93%E8%AF%AD)

**前言**

经过第一天的learning agent部署，以及当晚的co-learning，我了解到许多新颖的知识，并且我认识到我所部署的hermes只是初级阶段，还能进一步提升，我决心加快基础学习，尽快享受其高阶玩法！

今天主要是根据learning agent提示的学习仓库创建（锻炼git的操作流程）、并加以整理，以及AI基础的LLM和Prompt

## **创建AI + Web3 学习仓库**

> 此步骤不再过多赘述，只记录几点新知识:

NaN.  License和.gitignore部分的作用
      
NaN.  以及github远程仓库的操作能由终端直接完全代替（这是高阶玩法）
      

## **git两种工作流**

> 理解并掌握这两种方式，几乎可以应对大部分场景了！！！

**先有本地项目**

创建项目文件夹

NaN.  初始化仓库 git init
      
NaN.  连接远程仓库 git remote add origin <repository\_url>
      
NaN.  切换并命名分支 git branch -M main
      
NaN.  添加提交文件 git add .（作用只限于当前目录，这个可以涵盖整个仓库的改变git add -A）
      
NaN.  提交说明 git commit -m 'Your commit message here!'
      
NaN.  首次推送 git push -u origin main（后面只需要 git push）
      

**先有远程仓库**

流程：远程 → 下载到本地 → 修改 → 推送

```
git clone 仓库地址
# 后续就是同样的操作了
git add .
git commit -m "说明"
git push
```

## **LLM 基础概念**

> LLM = Large Language Model （大语言模型）

**🎯 核心问题**

> 核心问题、今天学到的关键理解是由我的learning agent总结的（非常全面）

LLM 的本质是什么？它能做什么？不能做什么？

**✅ 今天学到的关键理解**

**1\. LLM 的运作机制**

-   不是"理解意图"，而是"概率性续写"
    
-   Token 序列预测下一个 Token，重复直到结束
    
-   Context Window = 工作内存（Qwen3.5 = 128K tokens）
    
-   Temperature = 随机性控制杆（0=确定，1+发散）
    

**2\. Control Layers 层级体系**

-   **Prompt**：人类全控，适合一次性问答
    
-   **Workflow**：预定义流程，中间可插人工审核
    
-   **Agent**：模型自主决策，需要人类验证输出
    

**3\. Tokenizer 分词机制**

-   不是按输入顺序编号，是预训练的词表
    
-   中文常见字 ≈ 1 token，生僻字可能切更细
    
-   代码/JSON/长标识符吃 token 是因为未针对编程优化
    
-   词汇表约 50k-100k 项
    

**4\. Multimodal 现状**

-   早期：多模态输入被编码成文本代理
    
-   现在：原生多模态模型（像素/音波直接进入统一空间）
    
-   本质不变：最终都是 Token 序列，预测下一个 Token
    

**5\. Hallucination 幻觉的本质**

-   不是道德欺骗，是训练目标 ≠ 追求真相
    
-   必须输出一个答案时选最可能的模式
    
-   解决方案：显式降级（承认不知道）
    

**6\. Schema Validation 校验机制**

-   JSON Schema / Pydantic 校验结构
    
-   Function Calling 参数合法性检查
    
-   不校验直接运行 = 高风险！
    

* * *

> 初学问题是第一遍都文档学习所疑惑的地方；

**初学问题**

> 我认为应该记忆的内容，不过我目前大脑比较混乱疲惫，故留下后续记忆。我觉得LLM的概念非常好，但我更好奇是如何实现的，把超多的文本、代码等数据和多模态信号压进概率模型，听起来像是把一个个相似的东西在一条线上放置，看谁离这条线近。我也不确定我的理解对不对。

NaN.  模型负责理解用户意图，还是生成内容？它只是在回答问题，还是能调用工具？它的错误会停留在文本里，还是会进入真实工作流？
      
NaN.  把输出变成可检查对象
      
NaN.  把不确定性前移暴露中：让系统显式降级
      
NaN.  什么是tokenizer(分词器)？
      
NaN.  代码、JSON、长标识符、表格和混合语言文本经常比普通段落更吃 token是因为模型参数问题吗？
      
NaN.  Multimodal其实还是依据文本内容进行分析的吗？（各种形式的输入）
      

**learning agent答案**

> 看到其回答，我是彻底接受了LLM是概率模型，不是事实！！！

**第一个问题**

> 模型负责理解用户意图，还是生成内容？它只是在回答问题，还是能调用工具？它的错误会停留在文本里，还是会进入真实工作流？

我一开始有疑惑，是因为我停留在LLM是概率模型的问题中，并未认识到有数据层、编排层、执行层、安全层。

总之一个公式解释LLM的本质：

给定已有序列（上下文窗口里的所有 Token） → 预测下一个最可能的 Token → 把新 Token 拼到序列末尾 → 重复直到结束

Hermes提到：**其既不"理解意图"，也不"生成内容"——它只是在做概率性的序列续写。**

其中让我真的接受其是概率模型的是它给出的一个例子：

```
打个比方：
你以为它在：
  "用户想了解 Token → 我理解了这个需求 → 我解释 Token"
​
实际上它在：
  "用户说了'什么是Token' → 我最常接的模式是解释 Token 的文章开头 → 
   输出 'Token是模型的最小文本单位...' → 接下来最可能接什么..."
```

最常接的模式？？？什么是最常接？ 不应该是最直接嘛！！！

而且对于真实工作流，我联想到day 1 的co-learning中老师提到的一些安全问题，恰如模型调用工具时输出的参数错误，未成功校验便被当作参数传入工具，传回的数据必然不可信，再进入真实工作流必然会出现安全问题。

**第二个问题**

> 把输出变成可检查对象

首先我对于可检查/校验是十分清楚的，我疑惑的地方是：模型输出如何去校验？像JS中数据类型给schema校验？

Hermes给出的解释是举例：

```
不好的用法：               好的用法：
"帮我解释Token"           "帮我解释 Token，输出 JSON 格式：
→ 自然语言段落展示          {concept: "...", mechanism: "...", 
  ✓ 但不可检查               analogy: "..."}
                            → 可以程序化检查每个字段是否合理"
```

确实，按照概率模型来讲没办法保真，只是靠近更接近，输出又不是一对一定义格式的让你校验！

疑问终结：说对了，还真就是1v1定义格式校验，只不过分的更大，规格更多。不过我对此保持观望，因为模型最后的校验必须包含很多安全问题。

**第三个问题**

> 把不确定性前移暴露中：让系统显式降级

这个问题能解决，只不过有一些特殊的疑惑，先看Hermes给出的答案：

```
# 伪代码
def agent_respond(query):
    confidence = model.evaluate_confidence(query)
    if confidence > 0.9:
        return model.generate_answer(query)
    elif confidence > 0.5:
        return model.generate_answer(query) + "\n⚠️ 建议验证以下来源..."
    else:
        return "我不确定这个问题，建议你参考官方文档..."
```

首先我能理解，就是看概率模型参数了，概率高就是你了，概率低自然而然是可信度更低的数据，直接强制输出后三行类似即可！

但是我的特殊疑惑：

NaN.  如果没有显式降级，为什么模型会给出虚假、甚至欺骗的回答（或者说输出参数）？
      

疑问终结：模型问题，因为用户输入必须要回应，如果没有相关的数据，也会按照最接近的数据输出，导 致出现错误，犯错多了，总结最后发现是其出现类似幻觉/欺骗，并不是真的幻觉/欺骗！

2.  难道模型参数概率低到一定程度必然会出现这种情况？（想必是设定了）
    

疑问终结：概率模型，要深刻理解其本质（输出必须相关，没有最最低，只有最高，即便是0.0001%）

**第四个问题**

> 什么是tokenizer(分词器)？（主要是为了理解什么是token）

显而易见，就是把输入参数分开。

Hermes的答案：

```
原始文本："我是一个AI助手"
                  ↓
Tokenizer（分词器）
                  ↓
Token序列：[我] [是] [一] [个] [AI] [助] [手]
           (3 tokens)      (2 tokens)   (2 tokens)
                  ↓
每个 Token 对应一个数字 ID
                  ↓
模型看到的是：[1123] [4567] [8901] [2345] [6789] [9876] [5432]
```

这一点我能理解，但是最后一行，如何排列？还是一定参数模型先排列吗？从第一个输入参数到最后一个输入参数，依次分配数字ID吗？

疑问终结：不是如何排列、也不是依次分配ID；要明白其是概率模型，即已经设定好了 “词表” ，输入数据会被tokenizer切分后自动按照对应 “词表” 相应数字ID，然后再去进行选择！

**第五个问题**

> 代码、JSON、长标识符、表格和混合语言文本经常比普通段落更吃 token是因为模型参数问题吗？

Hermes答案：

因为代码里有大量的标识符、特殊符号、空格缩进，Tokenizer 没有为这些优化，所以它们比自然语言"密"很多。

```
模型上下文窗口 = 128K tokens
自然语言 = 可以放 ~10 万字的书
代码 = 可能只能放几千行
混合语言 = 中间地带
```

所以这就是为什么大家疯狂使用编程模型消耗token大的原因了(0.0怪不得要花这么多钱才能体会更高的代码体验)

依旧又产生新的疑问：为什么不对编程方面进行调整，譬如说：自然语言先行处理，输出的参数直接校验转换提供给实际编程模型，再对编程模型进行tokenizer优化，那岂不是0.0（而且开源代码这么多，你懂的(～￣▽￣)～）

疑惑终结：

-   Tokenizer 对编程语言的优化不足？→ Code-specific Tokenizer 已有项目尝试
    
-   为什么不分离自然语言和编程处理？→ Plan-Execute 架构正在探索中
    

**第六个问题**

> Multimodal其实还是依据文本内容进行分析的吗？（各种形式的输入）

这个问题我彻底明白了

无论是文本还是图片、视频等，从自然语言、代码等到图片视频类的编码，不再是单一的参数比对输出。

```
Qwen3.5 / GPT-4o 等模型：
  ┌──────────────────────┐
  │ 文本 Token → 统一     │
  │ 图片 Token → 编码空间 │
  │ 语音 Token →          │
  └──────────────────────┘
           ↓
     放在一起做自回归预测
​
模型真正在看"像素"和"音波"了
```

**额外提升**

这里给出一个额外问题和答案：

问：模型怎么实现的？

答：(新词：表征学习)

```
是一个几百到几千维的"超大空间"
​
每个概念（Token、词、句子）在这个空间里有一个位置
​
相似的概念距离近：  "猫" 🐱 ──── "狗" 🐶 （近）
不相似的概念距离远：  "猫" ────────────────── "量子力学" （远）
​
"国王 - 男人 + 女人 ≈ 女王" 这个经典例子就是空间向量运算
```

## **结语**

> **LLM 生成的是概率上合理的输出，而不是天然可信的事实。**（这句话真棒！！！）

**📝 LLM收获汇总**

NaN.  ✅ 模型不关心真假，只是预测下一个 token
      
NaN.  ✅ 显式降级是为了让模型承认"我不知道"而不是瞎编
      
NaN.  ✅ Tokenizer 是预训练的词表，不是按输入顺序编号
      
NaN.  ✅ 代码吃 token 多是因为没有为代码优化的 Tokenizer
      
NaN.  ✅ 解决方案已经存在（Code-specific Tokenizer、Plan-Execute 架构）
      
NaN.  ✅ 校验靠 Schema（JSON Schema、Pydantic 等）
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->














## **目录**

[前言](#%E5%89%8D%E8%A8%80)

[部署爱马仕(Hermes)](#%E9%83%A8%E7%BD%B2%E7%88%B1%E9%A9%AC%E4%BB%95\(Hermes\))

[首先服务器推荐选择：](#%E9%A6%96%E5%85%88%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%8E%A8%E8%8D%90%E9%80%89%E6%8B%A9%EF%BC%9A)

[安装docker](#%E5%AE%89%E8%A3%85docker)

[配置镜像源](#%E9%85%8D%E7%BD%AE%E9%95%9C%E5%83%8F%E6%BA%90)

[安装爱马仕(Hermes)](#%E5%AE%89%E8%A3%85%E7%88%B1%E9%A9%AC%E4%BB%95\(Hermes\))

[出现的问题](#%E5%87%BA%E7%8E%B0%E7%9A%84%E9%97%AE%E9%A2%98)

[无法连接tg](#%E6%97%A0%E6%B3%95%E8%BF%9E%E6%8E%A5tg)

[模型的配置](#%E6%A8%A1%E5%9E%8B%E7%9A%84%E9%85%8D%E7%BD%AE)

[结语](#%E7%BB%93%E8%AF%AD)

## **前言**

我是20年考入大学的，虽说是本科，我也在26年，也就是今年才毕业，具体原因是由于在校期间学习态度过于恶劣，导致挂了许多学分（超恐怖的数量），于是花了两年左右压缩着自己赶完课业，，目前在家躺平中。

在此之前，我已经几个月没有深度的使用AI了，它的发展太快了，快到我几乎绝望；我是一个比较懒散、拖延的人，我在博客的必须技能html、css、js上迂回了好几次，本来想着再次深入学习js，顺便把ts、vue学一学。

上周碰巧在X上看到了大神 [DIYGOD](https://x.com/DIYgod) 的分享的推文，也就是本次学习课程，我选择了报名，因为AI再恐怖，我也必须拥抱它。

昨天的开营仪式很精彩，在大学时我也参加过字节跳动举办的类似夏令营/冬令营活动，但毕竟我不是专业出身，又较为懒散，也无成就可言，本来想发言，可是奈何过于羞愧，便撰写自我介绍发在了tg群组里。

今天主要部署了hermes，并打通了与tg的连接（毕竟我的服务器在大陆），就是有一点，模型的配置让我苦恼了几个小时，不过也都解决了（毕竟是免费的模型），下面记录一下我使用 docker部署learning agent> 的过程与问题：

> 注意：除了服务器，咱对于模型主打的就是一个字：白嫖！！！

## **部署爱马仕(Hermes)**

> 对于learning agent来说，无论是Hermes还是openclaw亦或者是课程中提到的其他，自行选择即可。

**首先服务器推荐选择：**

> 这是官方文档中给出的规格 详见 [Hermes](https://hermes-agent.nousresearch.com/docs/)

| 资源 | 最低限度 | 受到推崇的 |
| --- | --- | --- |
| 记忆 | 1 GB | 2–4 GB |
| 中央处理器 | 1 个核心 | 2个核心 |
| 磁盘（数据卷） | 500 MB | 2GB以上（随会话/技能提升而增长） |

我的阿里云服务器规格是：

```
CPU&内存:2H2G
带宽:3M
系统：Alibaba Cloud Linux 3.2104 LTS 64位
```

部署过程流畅，在tg上对话速度稍慢

**安装docker**

> 我是在购买服务器时便选择docker了
> 
> 问题：由于缺少相关知识，对于docker的安装我有疑问，但能解决。后面会重新整理关于docker的知识！

不过我找了一个一键脚本安装：

```
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

**配置镜像源**

> 由于我的服务器在大陆所以部署Hermes时会超时，找个合适的镜像源比较好

终端切换目录找到`daemon.json`文件并打开编辑

```
cd /etc/docker # 一般安装后都在这里
ls # 会输出daemon.json
vim daemon.json # 可以使用你喜欢的编辑方式，vim操作不多赘述，浏览器自行搜索
​
# 将其中内容改成下列
​
{
  "registry-mirrors": [
                        "https://mirror.ccs.tencentyun.com",
                        "https://docker.1ms.run",
                        "https://hub.rat.dev",
                        "https://dockerpull.org"
  ]
}
​
# 记得重启生效
sudo systemctl reload docker
sudo systemctl restart docker
```

查看已经配置的镜像源：

```
docker info | grep -A 5 "Registry Mirrors"
```

**安装爱马仕(Hermes)**

> 详细依旧在 [Hermes](https://hermes-agent.nousresearch.com/docs/)

我们的项目树如下：

```
hermes/
├── data/
│   ├── config.yaml
│   ├── skills/
│   └── ...
├── docker-compose.yml
└── .env(省略)
```

提前创建目录以保持整洁

```
mkdir -p hermes/data
mkdir docker-compose.yml
```

使用vim编辑docker-compose.yml，保存退出即可

```
services:
  hermes:
    image: nousresearch/hermes-agent:latest
    container_name: hermes
    restart: unless-stopped
    command: gateway run
    ports:
      - "8642:8642"   # gateway API
      - "9119:9119"   # dashboard (only reached when HERMES_DASHBOARD=1)
    volumes:
      - ./data:/opt/data  # 如果你设置的不一样，这里也要改
    environment:
      - TZ=Asia/Shanghai  # 时区，加不加都可以，自己时区网上搜索
​
      - HERMES_DASHBOARD=1 # 面板建议开启
​
      - GATEWAY_ALLOW_ALL_USERS=true # 谁能访问面板0.0
      
      #你的tg_id
      - TELEGRAM_ALLOWED_USERS=${TELEGRAM_ALLOWED_USERS}
      
      # 下面两个无所谓，后面直接更改data/config.yaml文件设置模型
      - OPENAI_BASE_URL=${OPENAI_BASE_URL}
      - OPENAI_API_KEY=${OPENAI_API_KEY}
      
      # 根据官方文档获取输入tg_bot token将下面内容直接替换即可
      - TELEGRAM_BOT_TOKEN=${TELEGRAM_BOT_TOKEN}
​
# 下面五行代码后续问题中会提到，先别使用
     # - HTTP_PROXY=http://host.docker.internal:7890
     # - HTTPS_PROXY=http://host.docker.internal:7890
     # - ALL_PROXY=socks5://host.docker.internal:7890
​
    #extra_hosts:
     # - "host.docker.internal:host-gateway"
​
networks:
  default:
    driver: bridge
```

执行 `docker compose up -d` 启动

访问 `http://IP:9119` 便可看到面板了，那么恭喜你，成功部署Hermes，这位还可以的learning agent

模型配置这里就不多赘述！请看下面 ↓

## **出现的问题**

在部署过程中出现了各种各样的问题，毕竟我是零基础，且环境不一样啊，只能遇到问题解决问题，这里总结一下比较困难的问题。

> 自建节点可以看一下我之前的博客 [ahyun的爱孤岛](https://ahyun.org.cn/projects/self-built-node-record/)

**无法连接tg**

由于服务器在大陆所以爱马仕即便部署成功，也很难访问到tg

不信你可以执行一下下面的命令：

```
curl https://api.telegram.org
```

你看看有没有反应0.0(～￣▽￣)～

接下来就是给服务器走一个代理（切莫自建节点违规使用，本文档只做学习记录）

我选择的是docker部署一个singbox来让Hermes独享我自建的节点

同样：

```
# 创建目录
mkdir -p ~/proxy-singbox
cd ~/proxy-singbox
# 配置，这部分不多赘述（你会自建节点就会这部分），可以自行ai学习
vim config.json
# 配置镜像 将下面复制进去
vim docker-compose.yml
​
services:
  sing-box:
    image: ghcr.io/sagernet/sing-box:latest
    container_name: sing-box
    restart: unless-stopped
​
    volumes:
      - ./config.json:/etc/sing-box/config.json
​
    command: run -c /etc/sing-box/config.json
​
    ports:
      - "7890:7890"
      
      
# 最后点火启动
docker compose up -d
```

再把上面注释掉的部分启用配合使用

不用测试，去面板刷新就能看到tg连接成功了。

**模型的配置**

这部分我是使用阿里百炼提供的几十个模型（每个都有100万token），配置了一下午，最后也搞定了，也很方便切换。对于这方面我很是疑惑，无论是之前的龙虾，还是其他的工具，对于模型的调用究竟是如何运作的，我想这一点明白后，大概率没有这个问题了。

先说我的方案：

阿里百炼获取key → vim编辑data/config.yaml文件 →

更改其部分内容：(注释很多，在其中找对应输入即可)

```
model:
  default: qwen3.5-flash # 你想先使用的模型 比如 qwen3.5-flash
  provider: custom
  api_key: your-key
  base_url: https://dashscope.aliyuncs.com/compatible-mode/v1
```

在tg中如果遇到模型token使用完，可以输入 `/model 模型` 来直接更改（就能继续白嫖了0.0），再输入对话即可！

其中在课程网站 → 个人资料页 最下方的key，到现在我不知道这个是干啥用的0.0超疑惑！！！

## **结语**

今天学习任务其实很少，因为我没有仔细的去阅读学习页面，不过嘛，些许知识的翻涌罢了，大家肯定能跟我一样速度灌输近脑海的。

对了，记得给你的 learning agent 加上课程专属 skill (在对话框直接输入)

```
请作为我的 AI × Web3 School Learning Agent，先阅读启动 Prompt：https://aiweb3.school/learning-agent.zh.txt，并结合 Handbook：https://aiweb3.school/zh/handbook/，帮我初始化个人学习计划、GitHub 学习仓库、每日打卡草稿和 Handbook feedback 流程。
```
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
