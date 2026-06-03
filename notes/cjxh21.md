---
timezone: UTC+8
---

# cjxh21

**GitHub ID:** cjxh21

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
Week1 done. MetaMask+Sepolia+HelloWeb3 deployed. Hermes workshop notes+SRT subtitles.
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->




````markdown
# Daily Note - 2026-05-20

## 今日计划

### Week 1 已全部完成 ✅ 今日 Week 2 预习

- [ ] **19:00 Co-learning**（周三答疑，UTC+8）
- [ ] 在 WCB 提交 Week 1 打卡
- [x] 阅读 Handbook - AI × Web3 Bridge：Chain-aware Context
- [x] 阅读 Handbook - AI × Web3 Bridge：Web3 Tool Use
- [ ] 打开 week1-quiz.html 自测一遍

---

## 📖 AI × Web3 Bridge 笔记

### 1. Chain-aware Context（链感知上下文）

**第一性原理：** 模型不能凭语言记忆判断链上事实，链上事实必须从工具和索引层读取。

**为什么重要：** AI x Web3 比普通 AI 多了一层——链上状态持续变化，且很多状态和资产、权限、交易执行直接相关。

**关键概念：**
| 概念 | 一句话 | 要点 |
|------|--------|------|
| On-chain Data | 链上可直接验证的数据 | 读时必须带 chain id、block number、contract address |
| Contract Docs | 合约设计意图和边界 | ABI 只能告诉函数签名，不能解释语义 |
| ABI / Event | 合约可调用能力和历史日志 | 能调用 ≠ 应该调用，写前需权限检查 |
| Transaction History | 用户或合约过去的行为 | 保留 tx hash、block、from/to 等可追溯字段 |
| Explorer Context | 区块浏览器的可视化证据 | 给 explorer 链接比只写"交易成功"更可靠 |
| Indexing Context | 链上事件整理成可查询数据 | 落后 500 个区块的索引不能被当事实 |
| Citation | 每条结论附链上来源 | 没有 citation 是观点，带 citation 才能追责 |

**Agent 的链感知上下文包应包含：** 用户目标 → chain id → 用户地址/余额 → 合约地址/ABI/文档 → 最近交易 → 数据更新时间 → citation

---

### 2. Web3 Tool Use（Web3 工具调用）

**第一性原理：** 模型可以选择工具，但工具必须用确定性边界限制模型。

**工具分层与风险：**

| 工具 | 风险 | 说明 |
|------|------|------|
| 📡 RPC Tool | 低（只读） | 查询余额、block number、合约 view 函数 |
| 📖 Contract Read | 低 | 调用 view/pure，不改变状态 |
| ✍️ Contract Write | 🔴 高 | 改变链上状态，需 simulation + policy + 人工确认 |
| 👛 Wallet Tool | 🔴 高 | 连接/签名/交易/授权 必须分开确认 |
| 🔍 Explorer Tool | 低 | 查询交易、合约源码、事件 |
| 🏦 DeFi Tool | 🔴 高 | 直接影响资产，需白名单+额度+滑点+模拟 |
| 🔒 Tool Permission | 核心 | 按工具/合约/方法/金额分层控制 |
| 📋 Tool Log | 审计基础 | 每次调用记录输入/输出/时间/来源/错误 |

**核心原则：**
- 读写分离——读取和发送交易必须是不同工具、不同权限
- 参数结构化——chain id、contract address、method 不能埋在自然语言里
- 写前至少检查：chain id → 合约地址 → ABI → value → gas → simulation → policy → 用户确认
- Agent 不应直接拥有"任意合约写入"能力——限制在白名单合约、白名单方法和额度策略里

---

## Check-in Draft

```
📅 2026-05-20 | Day 3 | AI × Web3 School - Week 1→2

✅ 已完成：
- Week 1 全部交付物提交
- 阅读 AI × Web3 Bridge：Chain-aware Context
- 阅读 AI × Web3 Bridge：Web3 Tool Use

📖 Bridge 核心认知：
- 链感知：模型不能猜链上状态，必须通过工具读取
- 工具分层：读写分离，越接近执行越需要 policy 和人工确认
- 关键区别：能调用 ≠ 应该调用；没有 citation 的解释只是观点

🔗 Repo: github.com/cjxh21/ai-web3-school-cohort-0
```

## Links
- Chain-aware Context: https://aiweb3.school/zh/handbook/bridge/chain-aware-context/
- Web3 Tool Use: https://aiweb3.school/zh/handbook/bridge/web3-tool-use/
- Week 1 Quiz: experiments/week1-quiz.html
- WCB Learning: https://web3career.build/zh/programs/AI-Web3-School?tab=learning
````
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->





````markdown
# Daily Note - 2026-05-19

## 今日状态

> 昨天（05-18）已完成 Web3 实操全流程 + 打卡 ✅  
> 今日任务：整理实验记录 → 打卡 05-19

## 已完成工作汇总

### 🔗 链上信息（RPC 验证通过）
| 项目 | 内容 |
|------|------|
| 钱包地址 | `0xe1977cb25536a9af1434007d37847dbfb20866bc` |
| 网络 | Sepolia (chainId: 0xaa36a7) |
| 合约地址 | `0xd1707e2f46216d1ffc1e1ddc11af69f7695200a8` |
| 部署交易哈希 | `0x2e0add7dcd32b2052f713e8367f582b65560e9e8224616bc0d6d9fcc3d08934a` |
| 部署区块 | 10874891 |
| 部署时间 | 2026-05-18 16:23 UTC (北京时间 5/19 00:23) |
| Gas Used | 434,940 |
| 合约状态 | ✅ 链上代码验证通过 |
| 总交易数 | 3 笔（部署 + 写入操作） |

### 📝 合约内容
```solidity
contract HelloWeb3 {
    string private message;
    
    constructor() { message = "Hello Web3!"; }
    function getMessage() public view returns (string memory)   // 读，不花 Gas
    function setMessage(string memory _newMessage) public        // 写，花 Gas
}
```

### 💡 关键体会
- **Nonce = 0**：这是该钱包的第一笔交易（nonce 从 0 开始计数）
- **Contract creation**：交易 `to` 为空 = 合约部署，receipt 自动生成 contractAddress
- **读 vs 写**：`getMessage()` 通过 `eth_call` 不消耗 Gas；`setMessage()` 需要签名并支付 Gas
- **Agent 辅助角色**：合约代码由 AI 生成 → 人工复核 → MetaMask 确认 → 链上执行 → Explorer 验证

## Check-in Draft

```
📅 2026-05-19 | Day 2 | AI × Web3 School - Week 1

✅ 已完成实操：
- MetaMask (Edge) 创建测试钱包
- Sepolia 测试网领取测试 ETH
- 部署 HelloWeb3 合约，含读写操作
- 链上验证合约代码和执行结果

📊 链上数据：
- 钱包: 0xe1977...b20866bc
- 合约: 0xd1707e...95200a8 (Sepolia)
- 部署交易: 0x2e0add...8934a
- 区块: 10874891 | Gas: 434,940 | ✅ Success
- 共 3 笔交易（部署 + 写入操作）

📖 已读 Handbook：
- Network / Cryptography / Wallet（笔记在 daily/2026-05-18.md）

🔗 Repo: github.com/cjxh21/ai-web3-school-cohort-0
```

## Links
- 合约代码: https://github.com/cjxh21/ai-web3-school-cohort-0/experiments/HelloWeb3.sol
- 部署交易: https://sepolia.etherscan.io/tx/0x2e0add7dcd32b2052f713e8367f582b65560e9e8224616bc0d6d9fcc3d08934a
- 合约地址: https://sepolia.etherscan.io/address/0xd1707e2f46216d1ffc1e1ddc11af69f7695200a8
- WCB Learning: https://web3career.build/zh/programs/AI-Web3-School?tab=learning
````
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->






## 📖 Web3 基础 - 知识笔记

### 1\. Network（网络）

**第一性原理：** 区块链的核心不是"存数据"，而是让互不信任的参与者对状态变化达成一致。

**关键概念：**

| 概念 | 一句话 | 为什么重要 |
| --- | --- | --- |
| Block（区块） | 交易批量提交和排序的单位 | 状态不是连续更新，是按区块推进的 |
| Consensus（共识） | 网络决定"哪段历史有效"的机制 | 等几个 confirmation 才算安全，区块可能重组 |
| PoS（权益证明） | 用质押 ETH 替代挖矿维护安全 | 存在惩罚（slashing），安全来自经济质押 |
| Testnet（测试网） | 接近真实链的测试环境 | 资产无价值，适合练手但不等同主网安全 |
| L2 / Rollup | 主网之外的扩展层 | 费用更低、确认更快，但有桥和提现等待的复杂度 |

**Agent 视角：** AI Agent 必须知道自己在哪条链上操作，不能靠模型"猜"。chain id、RPC 来源、区块高度、交易哈希、确认数、explorer 链接都应该由工具返回结构化数据。

**最小实践：** 领测试币 → 发一笔交易 → 在区块浏览器看状态/区块号/Gas → 切换到另一条网络看差别。

* * *

### 2\. Cryptography（密码学）

**第一性原理：** 链上身份不是平台发给你的，而是由你能否证明自己控制某个私钥决定的。

**关键概念：**

| 概念 | 一句话 | ⚠️ 危险边界 |
| --- | --- | --- |
| Hash（哈希） | 任意数据 → 固定长度指纹，不能"解密"回原文 | 不是加密！用来验证一致性 |
| Public Key（公钥） | 可公开，用来推导地址或验证签名 | 公开没问题，但不是登录密码 |
| Private Key（私钥） | 账户控制权本身 | 🔴 绝不截图/上传/粘贴/发AI/放代码库 |
| Signature（签名） | 对特定消息/交易的授权证明 | ⚠️ 用户看不懂签了什么就是最大风险 |
| Merkle Tree（默克尔树） | 用哈希组织大量数据，少量证明即可验证 | 常见于空投名单和状态证明 |

**私钥管理铁律：**

-   不截图 ❌ 不上传云盘 ❌ 不粘贴给网页 ❌
    
-   不发给 AI 工具或客服 ❌ 不放进代码仓库 ❌
    
-   不用主钱包测试陌生 dApp ❌
    

**Agent 视角：** Agent 可以解释交易和授权，但不能替用户保管私钥。模型可以解释"这笔授权在批准什么"，但不能推动用户在不理解时签名。

**最小实践：** 创建测试钱包 → 发转账/签名 → 观察地址、哈希、签名提示 → 区分"签名消息"和"发送交易"。

* * *

### 3\. Wallet（钱包）

**第一性原理：** 钱包管理的是链上控制权，不是"账号资料"。

**三种动作 & 风险级别：**

| 动作 | 含义 | 风险 |
| --- | --- | --- |
| 🔗 连接钱包 | 应用读取地址和网络 | 低 — 不能动用资产 |
| ✍️ 签名消息 | 证明你控制某地址 | 中 — 可能授权操作 |
| 💸 发送交易 | 请求改变链上状态 | 🔴 高 — 可能转账/调用合约 |

**关键概念：**

| 概念 | 一句话 |
| --- | --- |
| EOA（外部账户） | 最常见钱包账户，私钥控制，简单但私钥丢失难恢复 |
| Mnemonic（助记词） | 恢复钱包的高风险秘密，任何网页/AI索要都视为危险 |
| Transaction（交易） | 链上状态变更请求，按钮≠交易本身，经过钱包确认→签名→广播→打包→执行 |
| Gas（燃料费） | 链上执行成本，余额不足会失败，失败也可能扣费 |
| Explorer（区块浏览器） | 查看链上事实的窗口，但引用时给链接让用户自己验证 |

**交易状态链：** 等待确认 ⏳ → 已拒绝 ❌ → 已广播 📡 → 已确认 ✅ → 失败/Revert 🔴 → Pending 太久需重试 🔄

**Agent 视角：** Agent 可以解释交易、准备参数、检查风险、生成操作计划。**签名和权限不能被随意交给模型。** 合理设计：AI 做理解和辅助 → 钱包负责确认和授权 → 智能账户负责执行约束。

**最小实践：** 钱包交互地图 — 连接 → 切换网络 → 签名消息 → 发送交易 → 查看 explorer，标出哪些只读、哪些改状态。

* * *
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
