---
timezone: UTC+8
---

# Renyi Cao

**GitHub ID:** reny1cao

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->
我今天整理了一下 workspace 里和 Web3 相关的项目，想找一个 Week 2 可以继续深入的方向。

最后比较有感觉的是 milestone escrow 这个场景。它不是一次性交付和付款，而是把任务拆成几个阶段，资金先进入链上托管，worker 接受任务、提交结果，再由 client 或 PM 审核后释放付款。我看了一下本地的 kite-milestone-escrow 项目，里面的 ProjectEscrow 大概就是这样的思路：任务从 Created、Assigned、Accepted、InProgress、Submitted 到 Paid，一步步往前走，中间还有未接受过期、提交后超时自动释放、PM fee 上限这些现实协作里会遇到的规则。

这让我把 ERC-8183 想得更具体了一点。所谓 Agentic Commerce，并不是简单让 AI agent 自动收付款，而是要把任务、验收、托管、超时、评价和结算这些环节设计成可执行、可验证的流程。AI 可以参与拆 milestone、整理验收标准、解释合约状态，甚至提醒风险；但真正涉及付款、审批、取消和释放资金时，还是需要明确权限、人工确认和链上记录。

接下来我想继续把 Week 1 的基础任务补扎实，包括概念卡片和测试网交易；同时把 milestone escrow 当作 Week 2 的观察方向，看看它和 ERC-8183 / Agentic Commerce 能不能对应起来。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->

今天补读了 5.23 的主题「Open Agentic Economy: From ERC-8004 / ERC-8183 to Builder Path」。这节内容让我把前几天学的 agent、钱包、交易和合约放到了一个更具体的场景里：如果未来很多 AI agent 真的要在链上协作、接任务、付款和交付结果，那么最缺的不是“让 AI 更会说话”，而是身份、信任、评价和结算这些基础设施。

我今天先抓住了两个标准的分工。ERC-8004 更像是 agent 的身份和信任层，关注 agent 如何注册、被发现、积累声誉、接受验证；ERC-8183 更像是 agent 之间做交易的任务和 escrow 层，关注一个 job 如何被创建、付款、提交、评价、完成或退款。这样看下来，Open Agentic Economy 不是一个单点产品，而是一组让 agent 可以跨平台协作的协议和约束。

这也让我重新理解了 AI x Web3 里的安全边界。agent 可以帮我生成任务计划、解释交易、写合约交互脚本，甚至在未来参与更自动化的协作流程；但只要涉及钱包、付款、授权、合约写入和链上结算，就必须有清楚的权限范围、评价机制、日志记录和人工确认点。真正可靠的 agent workflow，不是把所有动作都交给 AI，而是把每一步的责任边界设计清楚。

接下来我准备把 Week 1 的 proof-of-work 收尾：补齐 5.21 / 5.22 的回放任务，整理 AI 和 Web3 基础概念卡片，完成一次测试网交易，并把“AI 生成 -> 人工复核 -> 钱包确认 -> 链上执行 -> 区块浏览器验证”这条流程整理成可提交的学习证据。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->


今天没有来得及完整观看「AI 下乡计划｜AI 在 Web3 的应用」视频，所以先根据学习页和任务要求做了预习与框架整理。今天先建立一个核心判断：AI × Web3 不是简单给 Web3 产品加聊天框，而是把 AI 的理解、规划、生成能力接入到钱包、签名、交易、合约、链上验证和治理协作这些真实流程里。

我今天整理出的最小链路是：用户意图 → AI 理解任务并生成方案 → 人工复核 → 钱包确认或签名 → 链上执行 → 区块浏览器验证 → 记录到学习仓库。这里最重要的边界是，AI 可以辅助解释交易、生成合约交互说明、分析链上数据或整理治理提案，但不能直接接触助记词、私钥，也不能绕过人工确认去做转账、授权或合约写入。

下一步我准备补看 5.21 回放，并重点记录 3 类内容：一个具体应用案例，一个我可以动手实践的 workflow，以及一个关于权限控制的问题。当前最想继续追问的是：如果未来 AI agent 需要代表用户执行链上动作，应该如何用 session key、智能账户、多签、额度限制和时间限制来定义它的安全边界？
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->



今天学习了「Web3 运行原理」。这节课把钱包、私钥、助记词、交易、签名、Gas、RPC、mempool、builder / validator、出块和区块浏览器串成了一条完整链路。最重要的理解是：资产并不在钱包里，钱包主要负责保存或调用私钥、构造交易和发起签名；真正的账本状态在链上，任何人都可以通过区块浏览器验证。

今天我重点整理了两个安全边界：第一，助记词是整组账户的根备份，泄露后会影响所有派生账户；单个私钥泄露通常影响对应账户。第二，交易不是简单点击按钮，而是对某个链上动作的授权，签名前要检查 to、value、data、gas、nonce 和 network。

Proof-of-work 是把“创建钱包流程”做成了一个 HTML 学习页，并补了一张更清晰的 graph，把助记词、seed、派生路径、私钥、地址、签名和广播上链的关系放在一张图里。下一步会基于这份笔记准备测试网交易，并用区块浏览器记录 transaction hash、gas、状态和确认信息。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->




今天学习了「AI Agent 入门 —— Hermes 从 0 到 1」。这节课让我更清楚地区分了 chatbot、AI IDE、coding agent 和通用 agent 底座。Hermes 的重点不是单纯聊天或写代码，而是把模型、工具、消息平台、memory 和 skills 连接起来，让 agent 能围绕长期任务持续工作。

我今天最有收获的是 skills 和 memory 的概念：skills 可以理解为可复用的任务说明书，包含角色、流程、边界和输出格式；memory 则用于保存长期背景和偏好。它们共同解决的问题是：agent 不应该每次都从零开始，而应该逐渐沉淀工作方式。

安全上也有一个重要提醒：API key、cookie、secret 不能直接发到聊天或公开笔记里；dangerous command 要单次授权并看清楚；涉及钱包签名、转账、授权和合约写入的动作必须保留人工确认。今天的 proof-of-work 是把 Hermes 课程内容整理进 GitHub 学习仓库，并准备继续做 Agent、Tool Calling、MCP、Memory、Skill 概念卡。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->





今天参加并整理了「AI 时代 Web3 开发者需要具备的基础知识与架构能力」内容，同时补读了 Ethereum 官方交易文档。今天最大的收获是：AI 并没有降低系统复杂度，而是放大了开发者的基础知识、架构判断和验收能力；Web3 也不是脱离 Web2 的孤岛，真实项目里仍然需要支付系统、链上监听、风控、索引和回调等工程能力。

Web3 部分我重点整理了 wallet 和 transaction 的关键概念：钱包本质上不是钱袋，而是签名器；交易是一段由私钥授权的状态变化。gas 决定执行成本，nonce 决定账户交易顺序，data / call data 决定合约到底被调用了什么。后续做测试网交易前，我会先检查 network、to、value、data、gas、nonce，并坚持“未签名前先做交易模拟”。

今天的 proof-of-work 是把会议纪要和交易参数整理进 GitHub 学习仓库，形成后续 Week 1 概念卡、测试网交易和最小合约实验的基础材料。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
