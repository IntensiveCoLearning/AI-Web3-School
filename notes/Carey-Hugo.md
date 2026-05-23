---
timezone: UTC+8
---

# Hugo

**GitHub ID:** Carey-Hugo

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->
Day 6/30 - AI x Web3 School

1\. W1 Task 3：Etherscan 区块链浏览器实战 ✅

\- 查了 USDT 合约地址

\- Total Supply：970亿 USDT

\- Holders：14,007,382

\- 理解 ERC-20 Token 标准（FT/NFT）

2\. W1 Task 4：Foundry v1.7.1 安装完成 ✅

\- forge --version 验证通过

\- 下一步：部署合约到 Sepolia 测试网

明日计划：

\- 部署合约到 Sepolia

\- 获取 Sepolia RPC
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->

天完成了 W1 前三节核心概念学习：1. 区块链浏览器 Etherscan - 理解了址/交易/区块结构，可查询任意公开地址余额和历史；2. 钱包与账户类型 - EOA（私钥控制）、智能合约账户（代码控制）、多签钱包（多人签名）三者的权限差异；3. 智能合约 - 部署在链上的程序，代码即规则，执行即清算，无私钥。明天计划：领取 Sepolia 测试币，部署最小合约，完成 W1 测试任务。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->


✅ 今天学了什么：  
1\. RAG 检索增强生成 — AI 先从知识库检索相关内容，再基于真实内容回答，  
解决大模型知识过时/不足/幻觉问题。四步：检索→合并→生成→输出。  
关键技术：Chunking切块 / Vector DB向量库 / Retriever检索 / Rerank重排序。  
  
2\. Web3 Dev Stack 开发栈 — 从想法到链上运行的完整工具链，六层：  
前端(React/WalletConnect) → SDK(viem/ethers) → 合约(Solidity/Foundry)  
→ 节点(Alchemy) → EVM → 共识层(PoS)。  
  
明天继续：Agent 入门 + W1 收尾
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->



今日学习内容

Web3 基础 — 密码学 / 钱包 / 智能合约

1\. 密码学

\- Hash：任意数据 → 固定长度指纹，用于验证数据完整性

\- 公钥 / 私钥：私钥控制资产，公钥推导钱包地址

\- 签名：用私钥证明"我同意这条消息"

\- Merkle Tree：大量数据的根哈希验证

\- 核心认知：Web3 没有密码找回，私钥丢失 = 资产永久无法恢复

2\. 钱包

\- EOA：由私钥直接控制的账户，最常见但权限难细分

\- 助记词：私钥的备份方式，任何人索要都不要给

\- Transaction：6种状态（等待确认 → 拒绝 → 广播中 → 成功 → 失败 → pending）

\- Gas：链上执行成本，必须告知用户费用明细

\- Explorer：链上事实窗口，用于验证交易状态

\- 核心认知：连接 ≠ 授权，签名 ≠ 无风险，三类动作要区分清楚

3\. 智能合约

\- Solidity：EVM 合约语言，storage/msg.sender/event 是核心概念

\- EVM：执行环境，决定 gas 费用和外部调用风险

\- ABI：合约接口说明，告诉工具能调用什么，不保证安全

\- Event：链上日志，索引器和前端历史记录的数据来源

\- Upgrade：可升级合约必须说清权限归属，否则安全审计不完整

\- 核心认知：AI 做辅助，钱包做授权确认，合约做可验证执行

明日计划

继续学习 Web3 基础剩余章节（网络 / 账户抽象）和补看直播回放，完成任务和打卡，跟上学习进度和节奏
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->




今天参加co-learning，Draken助教解答了大家关于Hermes与Codex、Claude Code等大模型在使用上的区别和顾虑，以及自己的学习经历和建议等。  
参加直播学习AI 时代的 Web3 架构能力，学习了区块链技术、智能合约、交易处理、安全性以及支付系统等多个方面。强调了在交易中“Instructions”的重要性，并分析了如何利用智能合约解决复杂的软件问题。讨论涉及EVM（以太坊虚拟机）的解析器和汇编语言的关联，指出了交易监听逻辑与区块确认的必要性，包括等待多个区块以确认交易，以避免链分叉的风险。此外，提及了交易模拟的必要性，以预防潜在风险，指出交易签名后进行模拟已无意义。讨论还涵盖了权限拆分、多签机制在确保钱包安全方面的作用，以及交易可视化和模拟对提升系统安全性的贡献。最后，转向讨论AI在区块链和支付系统中的应用，强调了AI作为工具的重要性，以及开发人员需具备扎实的基础知识，确保AI技术的安全和有效利用。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
