---
timezone: UTC+8
---

# Bruce Xu

**GitHub ID:** brucexu-eth

**Telegram:** @brucexu_eth

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->
今天继续围绕 Private Agentic Checkout 做安全边界设计，重点思考 Agent 如何安全调用 crypto 能力，尤其是钱包签名、私钥管理、API key 和交易执行。

核心收获：

Secret Management 不是让系统完全不接触 secret，而是让 LLM、沙箱、浏览器、插件、日志、外部网页都接触不到 secret。真正读取 secret 的只能是模型外部的 trusted tool / broker，并且必须具备窄权限、policy check、audit log、human confirmation 和 revocation。

今天新增了一个项目想法：Crypto Capability Gateway。

它是 Agent 和 Crypto 能力之间的安全桥接层。Agent 不直接拿私钥、seed 或 API key，而是调用受限 capability，例如：

\- [wallet.read](http://wallet.read)\_balance

\- tx.draft\_and\_simulate

\- wallet.request\_signature

\- wallet.revoke\_permission

\- write\_audit\_receipt

桥接层负责 secret custody、policy/guard、simulation、human confirmation、签名/钱包交接、审计记录和撤销。

我的判断是：这不是普通 wallet adapter，而是 Agent 真正进入 Crypto 世界前必须有的一层安全控制面。否则 Agent 一旦能直接调用钱包，就可能因为模型错误、prompt injection、恶意网页或工具滥用造成资产损失和隐私泄露。

今日产出：

\- 明确了 Private Agentic Checkout 需要底层 crypto capability layer。

\- 创建了 Crypto Capability Gateway 项目想法。

\- 创建了后续任务：设计 Crypto Capability Gateway 安全桥接层 v0。

明日计划：

把这个方向整理成 v0 spec，重点定义 capability taxonomy、secret boundary、generic tool schema、policy/guard 和 audit receipt。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->

今日计划 / 进度：

今天主要把我要做的事情和后续学习计划明确了一下：项目方向先收敛到 Private Agentic Checkout，用 Hermes 帮用户准备一笔小额 ETH 购物 checkout，但不自动执行付款。

今天重点读了：

\- Web3 Tool Use

\- Agent Workflow

当前项目理解：

一个 checkout agent 需要的不只是 wallet 调用，而是一整套可审计、可限制权限的 Web3 tool use 流程。至少需要：Tool log、Tool permissions、余额查询、交易草稿、小额白名单支付、DeFi/swap/bridge、Explorer 验证、Wallet tool、Contract read / write。

风险边界：

最危险的是 Tool permissions、DeFi tool、Wallet tool、Contract write。原因是这些地方要么决定权限是否放行，要么会直接导致资产移动或链上状态变化。

Checkout flow 决策：

我倾向于把 swap / bridge / 支付路线的确认合并到最终付款确认里。也就是说，不一定需要在“生成意图执行前”单独确认一次；关键是最终付款前的 approval card 必须一次性讲清楚：买什么、付多少 ETH、是否 swap/bridge、哪条链、哪个 recipient、费用/滑点、披露了哪些隐私信息、钱包要签什么。

新的实现线索：

朋友推荐了 Bitrefill，可能可以作为 demo 的真实 checkout / gift card / invoice 路径。接下来要验证它是否适合 ETH 小额电子产品相关购买场景，以及会暴露哪些隐私数据。

对 Handbook 的反馈：

Web3 Tool Use 这一章可以增加更详细的例子，尤其是 Agentic Checkout 场景。最好能展示具体 tool set、每个 tool 的 read/write/permission 边界、哪些工具危险，以及一次从 quote → draft tx → user confirmation → explorer verification → audit receipt 的完整例子。

学习仓库：

[https://github.com/brucexu-eth/ai-web3-school-cohort-0](https://github.com/brucexu-eth/ai-web3-school-cohort-0)
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
