---
timezone: UTC+8
---

# juyixin98

**GitHub ID:** juyixin98

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->
📝 今日学习了 Settlement & Escrow 章节。核心理解：Machine Payment 解决了「怎么付」，Escrow 解决「付了之后怎么确认价值交换完成」。关键设计原则——Escrow 的状态机要先于资金代码（Created→Funded→Delivered→Accepted→Released→Refunded→Disputed），Delivery Proof 必须能和原始任务对应，AI evaluator 适合初审但高风险任务仍需人工复核+challenge window。

📎 仓库：[https://github.com/juyixin98/ai-web3-school-cohort-0](https://github.com/juyixin98/ai-web3-school-cohort-0)
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->

📝 今日完成两个模块： 1）**Machine Payment 章节**：核心理解——Agent 的支付能力必须有限制（Budget 先于执行），报价必须可验证（Quote + quote\_id），付款意图必须可追溯（Payment Intent ≠ 已结算），高频小额不适合每笔上链（需 L2/批量结算）。 2）**Agent 受限支付钱包设计**：实现了 5 步支付流程 + 4 种场景演示（正常自动/超预算拒绝/白名单外拦截/超额升级 HITL）。关键设计原则：Guard 是确定性代码不走 AI、三层决策（小额自动→大额 HITL→超限直接拒）、撤销比授权更重要。

📎 仓库：[https://github.com/juyixin98/ai-web3-school-cohort-0](https://github.com/juyixin98/ai-web3-school-cohort-0)
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->


📝 今日学习了 AI × Web3 Handbook 的 **Agent Workflow** 章节。核心理解：链上 Agent 不能简单地「模型直接调工具」——真实资产和不可逆操作要求 Agent 有明确的 Task Graph、State Machine 和 Human-in-the-loop 机制。特别关键的一点是风险分层：低风险操作可以自动授权，但高风险和资产变动操作必须在关键节点由人管控。另外链上 Retry 逻辑也不同于 Web2，写操作必须先判断是否已广播再决定是否重试。

📎 学习仓库：[https://github.com/juyixin98/ai-web3-school-cohort-0](https://github.com/juyixin98/ai-web3-school-cohort-0)
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->



📝 今日核心进展：完成了 RPC Agent 最小实验。使用公共以太坊 RPC 节点，通过 eth\_blockNumber / eth\_getBalance / eth\_gasPrice 三个方法，演示了 Agent 如何查询真实链上数据。关键理解：Agent 不直接「知道」链上状态，而是通过 JSON-RPC Tool Use 获取——这和 Web2 的 API tool 本质相同，区别在于数据格式（hex/Wei）和写操作的安全边界（需要私钥签名）。

📎 实验代码：[https://github.com/juyixin98/ai-web3-school-cohort-0/tree/main/experiments/001-rpc-agent](https://github.com/juyixin98/ai-web3-school-cohort-0/tree/main/experiments/001-rpc-agent)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->




📝 今日学习了 AI × Web3 Handbook 的 Agent 和 Chain-aware Context 章节，重点理解了：1）Agent 如何从「回答问题」进入「多步执行流程」；2）链上状态（区块、交易、合约事件）如何被组织成 Agent 可理解的上下文。下一步计划深入 Web3 Tool Use，尝试让 Agent 直接调用链上 RPC。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
