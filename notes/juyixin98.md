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
# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->
📝 今日学习了 AI Sovereignty 章节。核心理解：AI 主权不是一句口号，而是让用户保留退出、迁移、选择、验证四种能力的架构设计。越靠近用户决策和资产的 AI，越不能只依赖平台承诺。关键框架——CROPS（抗审查+开源+隐私+安全）是产品价值检查表，d/acc 要求不只做更强自动代理还要做更好防御工具，Data Portability 要分层导出且给机器可读格式，Model Choice 是策略化选择不是每次手动切换。本章把前面 12 章的分散设计整合到一个主权框架下。

📎 仓库：[https://github.com/juyixin98/ai-web3-school-cohort-0](https://github.com/juyixin98/ai-web3-school-cohort-0)
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->

📝 今日学习了 AI Privacy 章节。核心原则：模型只应该看到完成任务所需的最小数据——不要因为"可能有帮助"就把一切塞进上下文。关键理解——隐私问题的本质不是单点泄漏，是链上公开身份和 AI 私有上下文被拼接。Data Boundary 按工具划分不按系统划分，Secret Management 与前一天 Security 的 Key Safety 完全对齐（Smart Account + Session Key 就是实现），Local AI 务实定位是隐私网关而非主力推理，Minimal Disclosure 最实用方案是"摘要代替原始数据"。

📎 仓库：[https://github.com/juyixin98/ai-web3-school-cohort-0](https://github.com/juyixin98/ai-web3-school-cohort-0)
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->


📝 今日学习了 Verifiable AI 章节。核心原则：验证成本必须和输出影响力匹配——总结新闻记日志就够，释放 escrow 需要 TEE/ZK + challenge。关键理解：LLM 完整 ZK 证明目前不现实，实用方案是混合——关键步骤 ZK/TEE，日常 Audit Trail + 签名日志。Audit Trail 是最基础但最容易被跳过的可验证层：记录输入/输出/模型版本/工具调用/时间/确认/交易哈希，即使没有密码学证明也能支持复盘和争议。

📎 仓库：[https://github.com/juyixin98/ai-web3-school-cohort-0](https://github.com/juyixin98/ai-web3-school-cohort-0)
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->



📝 今日学习了 AI Oracle 章节。核心理解：AI 的判断要安全进入链上世界，关键是三层设计——1）输出结构化，机器字段进合约不消费自然语言；2）风险按影响分层（低风险展示/中风险复核/高风险challenge），不按技术分层；3）必须有 challenge 机制，不能把模型错误硬写进链上状态。Model Result 必须保存完整生成条件（版本/prompt/输入hash/schema），否则无法复核。

📎 仓库：[https://github.com/juyixin98/ai-web3-school-cohort-0](https://github.com/juyixin98/ai-web3-school-cohort-0)
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->




📝 今日学习了 Agent Trust & Reputation 章节。核心理解：信任不是一个分数，而是一组可追溯、可比较、可解释的证据（Reputation + Review + Attestation + Stake + Slashing + Validation）。关键设计原则——声誉按任务类型拆开不要压成黑盒，stake 不等于能力（资本多≠质量高），slashing 对主观任务必须先走 dispute 不能自动罚没，历史表现需要时间衰减。

📎 仓库：[https://github.com/juyixin98/ai-web3-school-cohort-0](https://github.com/juyixin98/ai-web3-school-cohort-0)
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->





📝 今日学习了 Agent Identity 章节。核心理解：Agent Identity 不是起名字，而是让 Agent 从临时会话变成可发现、可验证、可追责的经济参与者。一个可用身份至少要回答——谁拥有它、能做什么、入口在哪、历史能不能追溯。关键设计原则：Profile 更新不能静默发生（变模型/变地址/增能力都是信任信号），Registry 提供身份锚点但不等于信任层，operator 和 owner 应该可以分离。

📎 仓库：[https://github.com/juyixin98/ai-web3-school-cohort-0](https://github.com/juyixin98/ai-web3-school-cohort-0)
<!-- DAILY_CHECKIN_2026-05-24_END -->

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
