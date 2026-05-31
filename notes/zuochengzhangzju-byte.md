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
# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->
之前的打卡笔记在PR里，没成功更新到主打卡步骤。今天才发现agent代理有漏洞，在补齐优化系统。回看课程
<!-- DAILY_CHECKIN_2026-05-31_END -->

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
<!-- Content_END -->
