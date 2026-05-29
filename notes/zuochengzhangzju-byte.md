---
timezone: UTC+8
---

# zuochengzhangzju-byte

**GitHub ID:** zuochengzhangzju-byte

**Telegram:** @zuochengzhang

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->
I continued studying AI x Web3 foundations and recorded the daily learning workflow for 2026-05-28. The focus was on connecting wallet security, GitHub-based learning records, and WCB status synchronization into one verifiable process.

My main takeaway is that Web3 operations need explicit verification before execution: checking domains, contract addresses, approval scopes, transaction simulations, and human confirmation. This is especially important for AI agent workflows, because an agent should not blindly execute wallet actions without clear logs, safety checks, and a recoverable audit trail.
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->
I continued studying AI x Web3 foundations and recorded the daily learning workflow for 2026-05-26. The focus was on connecting wallet security, GitHub-based learning records, and WCB status synchronization into one verifiable process.

My main takeaway is that Web3 operations need explicit verification before execution: checking domains, contract addresses, approval scopes, transaction simulations, and human confirmation. This is especially important for AI agent workflows, because an agent should not blindly execute wallet actions without clear logs, safety checks, and a recoverable audit trail.
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->
I continued studying AI x Web3 foundations and recorded the daily learning workflow for 2026-05-25. The focus was on connecting wallet security, GitHub-based learning records, and WCB status synchronization into one verifiable process.

My main takeaway is that Web3 operations need explicit verification before execution: checking domains, contract addresses, approval scopes, transaction simulations, and human confirmation. This is especially important for AI agent workflows, because an agent should not blindly execute wallet actions without clear logs, safety checks, and a recoverable audit trail.
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->
I continued studying AI x Web3 foundations and recorded the daily learning workflow for 2026-05-24. The focus was on connecting wallet security, GitHub-based learning records, and WCB status synchronization into one verifiable process.

My main takeaway is that Web3 operations need explicit verification before execution: checking domains, contract addresses, approval scopes, transaction simulations, and human confirmation. This is especially important for AI agent workflows, because an agent should not blindly execute wallet actions without clear logs, safety checks, and a recoverable audit trail.
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->
I continued studying AI x Web3 foundations and recorded the daily learning workflow for 2026-05-23. The focus was on connecting wallet security, GitHub-based learning records, and WCB status synchronization into one verifiable process.

My main takeaway is that Web3 operations need explicit verification before execution: checking domains, contract addresses, approval scopes, transaction simulations, and human confirmation. This is especially important for AI agent workflows, because an agent should not blindly execute wallet actions without clear logs, safety checks, and a recoverable audit trail.
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->
## ZK 隐私基础设施 + Synthesis 黑客松获奖项目分析

### 核心收获

1. **MCP 一行接入模式**：`npm install -g @zkproofport-ai/mcp@latest` → Agent 一行调用获得 ZK 能力。暴露意图（prove identity），不暴露技术细节。做项目必须做到这个精简程度。

2. **Railgun ≠ 混合器**：四层隐私保护（UTXO 模型 + 交互噪声 + Broadcaster 代发 + 匿名集体量），不纯粹靠体量。混合器只有体量一面墙，Railgun 有四面墙。

3. **ZK 身份分层**：World ID（人格证明）→ Semaphore（群组成员证明）→ ZKProofport（属性证明）。Agent Payment 需要属性证明。

### ZK 隐私仓库速查

| 仓库 | 功能 | 成熟度 |
|------|------|--------|
| semaphore-protocol/semaphore | 通用 ZK 隐私层，匿名群组成员证明 | 生产级 |
| worldcoin/world-id-protocol | 全球级匿名人格证明 | 生产级 |
| ScopeLift/stealth-address-erc | ERC-5564 隐身地址 + ERC-6538 注册表 | EIP Final |
| zkproofport/proofport-ai | Agent 原生 ZK 证明（TEE + ERC-8004） | 早期 |
| Railgun | DeFi 隐私基础设施，0zk 地址 | 生产级 |

### 隐私支付架构模式

Stealth Address（断联收款人）→ Railgun 屏蔽池（断联发送人）→ ZK 忠诚度证明（断联消费习惯）

### Synthesis 黑客松获奖项目（与 Agentic Commerce 相关）

- **Maiat Protocol**：Agent 信用局，ERC-8004 + ERC-8183 + Wadjet ML
- **Nastar Protocol**：链上 Agent 雇佣市场，16 稳定币托管 + AI 仲裁
- **SynthPact**：机器间自主签约，Uniswap V3 + ERC-8004
- **Agora**：Agent 隐私支付，Stealth Address + Railgun + ZK 忠诚度
- **Inchy**：自给自足 Agent 经济，闭环 swap fee → LLM → 更好推荐
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
I continued studying AI x Web3 foundations and recorded the daily learning workflow for 2026-05-21. The focus was on connecting wallet security, GitHub-based learning records, and WCB status synchronization into one verifiable process.

My main takeaway is that Web3 operations need explicit verification before execution: checking domains, contract addresses, approval scopes, transaction simulations, and human confirmation. This is especially important for AI agent workflows, because an agent should not blindly execute wallet actions without clear logs, safety checks, and a recoverable audit trail.
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->
## Web3 钱包签名安全

- EIP-712：将「盲签」升级为「结构化可读签名」，钱包能展示类型化域名和字段，用户能看清签了啥
- eth_sign 被禁用：原始签名只签哈希，钱包无法解析 → 钓鱼重灾区
- EIP-712 局限：可视化≠可理解，用户仍可能看不懂字段含义
- Simulation as Safe Layer：交易确认前先模拟执行，预览资产变化，比依赖用户读懂签名更可靠
- 对 AI Agent 意义：程序化解析 simulation 结果，自动判断风险，不盲目执行
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->
学习了如何用hermes控制管理github，体验感受了自动化流程
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-27

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->
## 5/27 打卡：ERC-8004 Agent 身份与链上声誉 + 马铃薯 Railgun/Kohaku 详解

### ETHPanda Space 笔记（嘉宾：@0xMalingshu，DevRel @ ETHPanda）

**主题：Agent 有了链上身份后，谁来保证它说的是真的？**

核心议题：
1. **ERC-8004 的本质**：Agent 身份协议——把"谁在链上操作"从地址层面抽到 Agent 层面
2. **声誉灌水问题**：链上身份可以被 Sybil 攻击，ERC-8004 无法独立解决，需要结合 ZK（World ID / Semaphore）
3. **跨链一致性挑战**：同一个 Agent 在多链上是否保持同一身份？
4. **协议宪法论**：David 说"协议即 Agent 经济的宪法"
5. **Agent 间通信语言**：私钥签名 + ZK 证明作为唯一通信格式

### 核心洞察

**意图中心协议（Intent-centric）**
- 用户只说"我要什么"，不指定"怎么做"
- 对 AI Agent 的意义：Agent 作为用户的代理，只需要理解意图，不需要理解链上执行细节

**协议即宪法的问题**
- 宪法需要解释权。协议即宪法 = 谁解释协议，谁就是实际立法者
- 去中心化不等于无权威

---

### 📖 马铃薯 @0xMalingshu X 长文：Kohaku + Railgun 白话详解

> 来源：https://x.com/0xMalingshu/status/2016137832465682514（2026-01-27）
> 马铃薯：Co-CTO @Zzyzx_labs | Board member @bermudao_ch | DevRel @ETHPanda_Org

**TL;DR**
- Kohaku：让隐私交易变简单的工具箱
- Railgun：EVM 上的隐形斗篷，利用 ZK 技术保护资产与互动隐私
- 亮点：支持 DeFi 互动、有防洗钱机制（PPOI）、可隐藏 IP

---

#### 一、为什么链上需要隐私？

**三大痛点：**

1. **交易透明**：链上所有交互公开可见，所有人都能看见你和谁交互、交互了多久、怎么交互——我们其实都在"裸奔"

2. **中心化 + 关联风险**：默认 RPC 会知道你的 IP 和钱包地址，变相 KYC。AWS 挂了，钱包也跟着不能用

3. **代币发现暴露隐私**：MetaMask Import NFT 时会发送资料和 IP 到中心化服务器

**隐私是基本权利**（引自 Ethereum Foundation 2025 隐私承诺）：
> "Privacy is the freedom to choose what you share, when you share it, and who you share it with."

---

#### 二、Railgun 核心机制

**完全匿名**：隐藏交易金额、发送者与接收者，资金和交易完全隐形

**技术架构（UTXO vs Account）：**

| | Account 模型 | UTXO 模型 |
|--|-------------|-----------|
| 隐私 | 同账户余额更新透明 | 没有总和，只有"钞票"，Note 可加密 |
| 并发 | 并发交易会导致状态冲突，ZK Proof 失败 | 每笔 UTXO 独立，互不干扰 |
| ZK 证明稳定性 | 低 | 高（Railgun 选用原因）|

**0zk 地址 = Spending Key + Viewing Key**

- `Spending Key`（BabyJubJub 算法）：用来签署交易，拥有它就拥有资产
- `Viewing Key`（Ed25519 算法）：用来查看交易，可给审计机构审计，但不能交易
- **核心设计：权利拆分**——观察权和消费权分离

**ZK 在 Railgun 里的作用**（数学证明，但不透露任何具体信息）：
- 存在性："我的这张存根确实在 Merkle Tree 中"
- 所有权："我拥有解开这张存根的私钥"（但不秀出私钥）
- 未花销："这张存根还没被花掉"

**隐私保护四层（缺一不可）：**
1. UTXO 模型切断资金链
2. ZK 证明隐藏身份
3. **Broadcaster** 代发交易（链上看不到真实发起方）
4. **Waku**（P2P 协议，类似 Tor）隐藏 IP——与 Broadcaster 沟通时不暴露 IP

**Shield / Unshield：**
- Shield（入金）：0x 地址 → 0zk 地址，**不需要 ZK，不走 Broadcaster**
- Unshield（出金）：走完全套流程（Gas 估算 → Broadcaster 费用计算 → ZK Proof → 打包交易），**必须走 Broadcaster**

---

#### 三、PPOI（Private Proofs of Innocence）—— 合规与隐私不冲突

**目的**：防止 Railgun 被用于洗钱

**机制**：
- Shield 入金后进入 1 小时"观察期"，只能原路返回
- 1 小时后自动生成 ZK 证明："这笔资金不在黑名单中"（黑客/制裁名单）
- 证明随币流动（Alice → Bob → Carl，证明持续传递）

**名单提供者**：Elliptic、ScamSniffer、PurFi、SlowMist、Chainalysis Sanctions Oracle

---

#### 四、Tornado Cash vs Railgun

| | Tornado Cash | Railgun |
|--|-------------|---------|
| 匿名级别 | 切断地址关联 | 完全匿名（隐藏金额、发送者、接收者）|
| DeFi 互动 | 不支持 | 支持（隐私跨合约互动）|
| 金额固定性 | 固定池（0.1/1/10 ETH） | 任意金额 |
| 复杂度 | 简单 | 复杂但完整 |

---

#### 五、对 AI Agent 的启发

**Agent Payment 的隐私架构：**
```
Stealth Address（断联收款人）→ Railgun 屏蔽池（断联发送人）→ ZK 忠诚度证明（断联消费习惯）
```

**Kohaku 的设计哲学**：MCP 一行接入 —— 暴露意图层，隐藏技术实现层。Agent 项目封装的标杆。

**0zk 地址的双 Key 设计**对 Agent 启发：
- Viewing Key = Agent 的"可验证透明度"（第三方可以验证 Agent 的操作，但不暴露私钥）
- Spending Key = Agent 的"消费权限"（必须严密保护）

---

### 待深挖
- ERC-8004 的具体实现：身份注册在链上还是链下？
- Agent 的 viewing key / spending key 分离机制
- 与 ZKProofport (ERC-8004 + TEE) 的关系

Tags: #ai-web3-school #day-10 #erc8004 #agent-identity #intent-centric #etphanda #railgun #kohaku #privacy #ppol
<!-- DAILY_CHECKIN_2026-05-27_END -->
<!-- Content_END -->
