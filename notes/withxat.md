---
timezone: UTC+8
---

# Xat

**GitHub ID:** withxat

**Telegram:** @withxat

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->
区块链本质不是数据库，而是一个让互不信任的人对共享状态达成一致的系统。可以粗暴理解成 append-only 的不可变事件日志，当前状态是把所有交易执行后的结果，不是直接存一张随时 update 的表。

交易流程大概是：钱包签名 → 广播到网络 → 进 mempool（候选池）→ validator 挑交易打包 → 其他节点验证 → 共识确认。

链不是实时更新，更像 tick 制（虽然不同链不完全一样），交易先在 mempool 里等，到某个 block/slot 被打包，所以会有 pending 状态。

block 本身大概包含：交易内容 + 自己的元信息（时间戳、state root 之类）+ 上一个 block 的引用，所以才能形成链。

如果多个 validator 同时基于同一个 block 出新块，会暂时 fork，但最终只认一条 canonical chain。输掉的 block 不会 merge，里面合法的交易通常重新回 mempool 等下一轮。

PoS（Proof of Stake）本质是“押钱换共识资格”。Web3 默认假设所有参与者都是理性逐利的，不值得天然信任，所以靠经济惩罚约束行为。validator 作恶（双签/假 block）会被 slash（罚没资产），所以 trust 来自机制，不是人格。

network 可以理解成独立链环境，比如 Ethereum / Base / Arbitrum / Sepolia。每条链状态独立，所以同名资产在不同链上其实不是同一个实例。

testnet 就像 staging 环境，用来测试链交互。测试币没真实价值，可以 faucet 免费领。也确实需要节点维护，只是因为没经济价值，所以安全要求低很多，通常由社区 / 基金会 / infra 提供方维护。

L2 本质是 Ethereum 太贵太慢，于是把大量交易搬出去处理，再把结果交回主链。核心目标就是降成本提速度，但会带来 bridge、跨链状态、不同合约地址这些复杂度。

Rollup 是主流 L2 方案，本质就是 batch。很多交易先在 L2 执行，再统一提交到 L1 结算。

Optimistic Rollup = 先信，后挑战（提现慢）  
ZK Rollup = 先证明，再接受（更复杂但 finality 快）
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->

提交一些已完成的任务，准备设置正式开始的学习环境。

Hermes 之前已经有搭建起来，准备接入提供的 prompt

GitHub 仓库已建立，下一步是根据要求完成项目结构

晚上准备好好了解补一下 Web3 基础知识

有 Binance 账号，可能还是用 MetaMask 钱包比较好？之前有使用过

目前有 Codex，Claude Code 以及 Cursor 账号，应该能覆盖课程大多数内容

AI 侧应该没什么问题，更多注重在 Web3 这边吧

看能不能落地什么产品
<!-- DAILY_CHECKIN_2026-05-19_END -->
<!-- Content_END -->
