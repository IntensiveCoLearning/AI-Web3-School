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
# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->
I continued studying AI x Web3 foundations and recorded the daily learning workflow for 2026-05-22. The focus was on connecting wallet security, GitHub-based learning records, and WCB status synchronization into one verifiable process.

My main takeaway is that Web3 operations need explicit verification before execution: checking domains, contract addresses, approval scopes, transaction simulations, and human confirmation. This is especially important for AI agent workflows, because an agent should not blindly execute wallet actions without clear logs, safety checks, and a recoverable audit trail.
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
I continued studying AI x Web3 foundations and recorded the daily learning workflow for 2026-05-21. The focus was on connecting wallet security, GitHub-based learning records, and WCB status synchronization into one verifiable process.

My main takeaway is that Web3 operations need explicit verification before execution: checking domains, contract addresses, approval scopes, transaction simulations, and human confirmation. This is especially important for AI agent workflows, because an agent should not blindly execute wallet actions without clear logs, safety checks, and a recoverable audit trail.
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->
I studied Web3 wallet security, especially private key and seed phrase protection, phishing link detection, approval risks, and safer operational patterns such as hardware wallets, multisig accounts, and transaction simulation.

The most useful takeaway is that wallet safety is not only about storing the seed phrase securely. Before connecting a wallet, signing a message, or granting token approvals, I need to verify the domain, contract address, approval scope, token amount, and expected asset changes. I will also regularly review and revoke unnecessary approvals to reduce risk from malicious dApps or phishing pages.
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->

学习了如何用hermes控制管理github，体验感受了自动化流程
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->
## 今日学习：ZK 身份验证与 API 计费

### 1. Semaphore & Railgun 的 ZK 身份机制
- Semaphore 用身份承诺 + Merkle 树 + nullifier 实现匿名群组成员证明
- 核心流程：用户生成 ZK 证明"我是群组成员"→ 链上验证 → nullifier 防双花
- ZK 不是消除身份，而是把"服务器知道你是谁"变成"数学证明你有资格但没人知道你是谁"

### 2. ZK 认证下的余额/积分展示问题
- 链上数据（ERC20/721 余额）公开可读，无需签名即可查询
- Off-chain 私有数据（API 额度、算力 token）需要 nullifier 做伪匿名账户 ID
- 分层架构：ZK 验证一次 → 建立 web2 session → 日常 web2 体验 → 链上操作时再签名
- ZK 是门禁，不是整栋楼

### 3. ZK API Usage Credits（Vitalik + PSE 团队）
- 论文：ethresear.ch/t/zk-api-usage-credits-llms-and-beyond/24104
- 核心问题：存一次钱，匿名调用几千次 API，服务商保证收款防刷，用户保证请求不可关联
- 关键机制：
  - RLN（Rate-Limit Nullifier）绑定匿名与财务质押，双花暴露密钥并罚没
  - 退款票据累积：预扣 C_max，实际花费少则退款，ZK 电路验证退款总额
  - 同态加密升级：Pedersen Commitment / 格加密，电路复杂度恒定
  - Dual Staking：D（RLN 质押，数学罚没）+ S（策略质押，烧毁不归服务商），消除诬陷激励

### 4. Ethernaut — 以太坊安全闯关学习
- OpenZeppelin 开发的 Web3 wargame / CTF
- 网址：ethernaut.openzeppelin.com
- 每关一个智能合约漏洞，从攻击者角度学习安全
- 覆盖：重入攻击、整数溢出、delegatecall 注入、链上随机数问题等

### 5. Sepolia 测试网部署
- MetaMask 内置 Sepolia，需开启 Show test networks
- 水龙头：Alchemy / Infura / Google Cloud（免费注册即可）
- Hardhat 部署：配置 networks.sepolia + 私钥（.env 管理）
- Ethernaut 只需 MetaMask + 测试 ETH + 浏览器控制台即可开始
<!-- DAILY_CHECKIN_2026-05-23_END -->
<!-- Content_END -->
