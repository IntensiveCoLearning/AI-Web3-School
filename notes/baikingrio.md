---
timezone: UTC+8
---

# Quinn

**GitHub ID:** baikingrio

**Telegram:** @QuinniuQ

## Self-introduction

很高兴加入 AI x Web3 School 🚀

我是一个长期从事全栈 / Web3 开发的开发者，目前主要在做加密货币钱包、DApp，以及 AI + Web3 方向的一些产品探索。

这次参加 AI x Web3 School，最想深入研究的是：
AI Agent 如何真正与链上协议、钱包、DeFi 结合，成为普通用户也能使用的产品。

我希望在这次共学中，能够完成一个 AI × Web3 的小 Demo，比如：
让 AI 理解用户意图，并辅助完成链上交互、资产管理或 DeFi 操作。

也期待认识更多一起做 AI × Web3 的朋友，一起学习、交流、做项目 🙌

## Notes

<!-- Content_START -->
# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->
今天我主要进入 Week 3 的节奏，把本周学习计划和 Hackathon 方向重新整理了一遍。

我先根据 Week 3 课程安排做了一份执行清单，把每天 2–3 小时的学习时间拆成课程参与、笔记沉淀、WCB proof 和项目推进四个部分。这样本周就不是单纯听课，而是每场活动都要产出一个和 AgentScoope Wallet 有关的小结果。

项目上，我把 AgentScoope Wallet 进一步对齐到 Cobo 赛道。现在的理解是：这个项目不是让 AI Agent 直接控制钱包，而是让 Agent 在预算、白名单、时间窗口和 policy hard-check 的边界内完成小额支付或资源采购。Agent 只负责提出建议，Policy 决定是否允许，Cobo CAW 或 fallback 钱包执行层只执行被允许的动作。

今天最大的收获是，我对 Hackathon MVP 的范围更清楚了。Week 4 不应该做太大的 marketplace 或复杂 DeFi 功能，而是优先证明四条路径：额度内成功、超额拒绝、非白名单拒绝、撤销后失败。这样 Demo 更小，但安全边界更明确，也更容易让评委理解这个项目的价值。
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->

今天我继续推进 Hackathon 项目 AgentScoope Wallet 的方向整理，重点分析了如何把本次赞助商 Cobo 和 Z.AI 的能力自然地放进项目里。

我今天的理解是：Z.AI 更适合做 Agent 的“理解和建议层”，比如读取 bounty 任务、分析完成证据、生成付款建议和解释风险；Cobo 更适合做“受限钱包执行层”，比如通过 Agentic Wallet / Pact / policy / audit log 来限制 Agent 的实际链上操作权限。

这让我进一步明确了一个原则：AI 的建议不能等于最终付款决定。即使 Z.AI 建议付款，也必须经过白名单、金额上限、每日预算、人工确认阈值和 owner 权限等硬性检查。只有检查通过，钱包层才可以执行；如果收款人不在白名单或金额超限，就应该拒绝或进入 owner approval。

今天的收获是把 AgentScoope Wallet 从“AI 钱包 demo”继续收敛成一个更安全的三层结构：Z.AI 负责理解任务和建议，Policy 负责裁决，Cobo / Wallet 层负责受限执行和审计。这个方向也更符合 AI × Web3 的核心问题：不是让 AI 拿到无限权限，而是让 AI 在明确边界内安全地执行。
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->


今天的学习笔记我提交在公开仓库中：[https://github.com/baikingrio/ai-web3-school-note/blob/main/notes/20260530.md](https://github.com/baikingrio/ai-web3-school-note/blob/main/notes/20260530.md)
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->



今天的学习主线是完成 Week 1「AI × Web3 最小交叉流程图」任务。我选择的场景是：用户让 AI Agent 在测试网上执行一笔小额、受限的链上支付。

这次练习让我更清楚地看到 AI 和 Web3 的分工：AI 负责理解用户目标、生成计划和调用工具；Web3 负责账户、权限、签名、链上执行和公开验证。真正重要的不是“让 AI 发交易”，而是让 AI 只能在预算、白名单、风险分级、人工确认和审计日志这些边界里执行。

这也和我的 AgentScoope Wallet 项目直接相关：Agent 不应该拿到主私钥或无限权限，而应该只是一个受限操作者。额度内、白名单内、模拟通过的小额动作可以自动执行；超额、改授权、未知合约等高风险动作必须人工确认或直接拒绝。

今日 proof： [https://github.com/baikingrio/ai-web3-school-note/blob/main/submissions/week1-ai-web3-minimal-intersection-flow.md](https://github.com/baikingrio/ai-web3-school-note/blob/main/submissions/week1-ai-web3-minimal-intersection-flow.md)
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->




今天读完 Safe 相关材料后，我对 Agent Wallet 的理解更清楚了：

1.  **Safe 不是被替代的 UI，而是底层安全层。**  
    即使未来用户不直接打开 Safe 界面，Safe 仍然可以作为资产托管和权限控制基础。
    
2.  **Agent 的自主性应该来自“受限执行”，不是来自“拿到私钥”。**  
    真正可用的 Agent Wallet 应该给 Agent 明确预算和动作范围，而不是信任模型永远正确。
    
3.  **Guard / Policy 的意义是把安全边界固化下来。**  
    自然语言层可以解释和规划，但最终是否能执行，要由确定性的规则决定。
    
4.  **拒绝路径是产品亮点。**  
    一个能拒绝越权交易的 Agent Wallet，比一个什么都敢执行的 Agent Wallet 更接近真实需求。
    

## 和黑客松项目的关系

这部分学习可以直接支持 AgentScoope Wallet 的黑客松方向：

-   产品上：可以做成用户友好的 Agent Wallet / bounty payment 应用；
    
-   技术上：底层继续使用 Safe + Zodiac Roles / Policy；
    
-   安全上：强调 Agent 不持有 owner 私钥，只能在限制内执行；
    
-   Demo 上：展示“额度内成功、需要确认、非白名单拒绝、超额拒绝、审计记录”。
    

## 后续行动

-   把现有 `get-policy`、`simulate`、`pay` 能力和今天的权限策略笔记对齐。
    
-   准备一个更清楚的 L0 / L1 / L2 / L3 风险分层说明。
    
-   在 demo 中保留 Safe 作为底层安全层，但前端尽量用业务语言展示：任务、贡献者、金额、风险等级、拒绝原因、tx hash。
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->





今天的学习主线是继续打磨 Week 2 总交付和 Hackathon Proposal。我参加了 5.27 Co-learning 和 Privacy 主题直播，重点把 AgentScoope Wallet 的安全边界从“权限控制”继续往 privacy、context boundary、consent、revocation 和 auditability 这些方向扩展。  
  
我的项目方向是 AgentScoope Wallet，也就是一个 Agent 受限执行钱包。它不是让 AI 直接控制钱包，而是让 Agent 只能在用户预先定义的预算、白名单、合约方法、人工确认和审计日志边界内执行链上动作。  
  
Privacy 主题活动让我进一步意识到：Agent Wallet 的 privacy 和 security 不应该只理解成“不泄露私钥 / API Key”。它还包括用户是否知道 Agent 记住了什么、被授权做什么、什么时候会自动执行、什么时候必须停下来确认，以及用户如何撤销授权。  
  
这也让我准备把 AgentScoope Wallet 的边界从单纯的 permission boundary 扩展成：  
  
\`\`\`text  
Agent 受限执行  
\= permission boundary  
\+ context boundary  
\+ consent boundary  
\+ revocation  
\+ auditability  
\`\`\`  
  
今天整理出的 3 条观察：  
  
1\. Privacy 不只是隐藏信息。对 builder 来说，privacy 还包括用户是否拥有控制权、知情权和撤销权。放在 Agent Wallet 里，就是用户要知道 Agent 被授权了什么、记住了什么、什么时候会自动执行、什么时候必须停下来确认。  
2\. Agentic 产品里的 privacy 和安全边界会互相影响。如果 Agent 把一次临时授权误当成长期授权，或者把 working context 里的信息写进长期记忆，就可能产生风险。所以 AgentScoope Wallet 需要区分长期偏好、临时授权、执行计划和审计日志。  
3\. Audit log 本身也要考虑 privacy。公开 proof 可以展示执行结果、拒绝原因和测试网 tx，但不应该暴露私钥、API Key、敏感收款方、内部会议链接或过细的个人信息。对外 proof 和本地审计记录应该分层。  
  
我的阶段性结论：  
  
\> Agent Wallet 的核心不是让 AI 更自由地花钱，而是把 AI 的执行能力限制在可授权、可撤销、可确认、可审计的边界里。Privacy 对 Agent Wallet 来说，不只是数据隐藏问题，也是用户是否保留控制权、知情权、撤销权和解释权的问题。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->






今天继续推进我的 AI × Web3 Hackathon 项目 AgentScoope Wallet，并完成了 Hermes Agent 集成测试。

今日主要完成了 3 件事：

1\. 将 AgentScoope Wallet 安装为 Hermes Skill

我把 agent-wallet 的使用流程整理成 Hermes 本地 skill`agentscoope-wallet`。

这个 skill 约束了 Agent 执行链上操作的安全流程：不能读取或暴露私钥，不能绕过 policy，所有支付都必须先读取 policy、查询 24h spending status、simulate，再根据风险等级决定是否需要人工确认或拒绝执行。

2\. 完成 [demo-prompts.md](https://github.com/baikingrio/ai-web3-school-note/blob/main/experiments/agent-wallet/hermes/demo-prompts.md) 的五组测试

我按 `hermes/demo-prompts.md` 跑完了 Prompt A–E：

\- Prompt B：向非白名单地址转账，正确被拒绝，原因 `transfer_to_unlisted_address`

\- Prompt E：尝试 6 USDC 大额转账，被 app policy 拒绝，humanCheckLevel 为 L2

\- Prompt D：测试 daily budget / 单笔额度限制，3 USDC 因超过 `maxPerTx = 1.0` 被拒绝

\- Prompt A：L0 小额白名单转账成功，0.5 USDC 已在 Sepolia 执行

\- Prompt C：L1 human confirm 流程成功，0.9 USDC 未确认时被拒绝，用户确认后通过 `pay --confirm` 执行

3\. 验证了 Agent Wallet 的受限执行闭环

今天的测试验证了这个项目的核心假设：AI Agent 可以执行链上支付，但它不能任意花钱，而是被 Safe、Zodiac Roles、app policy、额度限制、白名单、simulate、human confirm、audit log 多层约束。

测试中产生的两笔 Sepolia 执行交易：

\- L0 success，0.5 USDC:

[https://sepolia.etherscan.io/tx/0x52976020a98f3558ea0e384291c8f42ff2a81e6218e335db73124f395aa37fbb](https://sepolia.etherscan.io/tx/0x52976020a98f3558ea0e384291c8f42ff2a81e6218e335db73124f395aa37fbb)

\- L1 human confirm，0.9 USDC:

[https://sepolia.etherscan.io/tx/0xc5b63cb5ac78ede8ed17f337e7305b11d8d8e46cfc2a6196b652c56491e8682f](https://sepolia.etherscan.io/tx/0xc5b63cb5ac78ede8ed17f337e7305b11d8d8e46cfc2a6196b652c56491e8682f)

执行后的状态也符合预期：

\- Prompt A 后 24h used 从 0 变为 0.5 USDC

\- Prompt C 后 24h used 从 0.5 变为 1.4 USDC

\- Safe USDC 余额从 3.5 变为 2.1

\- audit log 中记录了 simulate、rejected、executed、txHash 等完整过程

今天的收获是：AgentScoope Wallet 已经从“概念”推进到了“可被 Agent 调用并真实执行测试网交易”的 demo 阶段。下一步会整理 demo report，并优化 Prompt D / E 的预期说明，让文档更清楚地区分“安全拦截成功”和“具体拒绝原因”。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->







今天我完成了：

1.  阅读并梳理 Week 2｜AI × Web3 交叉研究与方向选择的任务要求，明确本周重点是建立问题地图和选择主方向，而不是继续堆工具。
    
2.  完成 `tasks/week2-ai-web3-problem-map.md`，覆盖 Payment / Commerce、Identity / Reputation、Wallet / Permission、Privacy / Security、Dev Tooling、Governance 等 6 个方向，并分析每个方向中的 AI 作用和 Web3 机制。
    
3.  选择 `Wallet / Permission / Safe Execution` 作为 Week 2 主线，并把它和我的 Hackathon 项目 AgentScoope Wallet 对齐。
    
4.  额外起草了 Agent Wallet 权限策略和 threat model，为后续 Week 2 总交付做准备。
    

我的收获：

-   AI × Web3 方向判断不能只看是否用了 AI 和链上组件，而要看 AI 能力和 Web3 机制是否同时不可替代。
    
-   对 AgentScoope Wallet 来说，重点不是“让 AI 自动花钱”，而是设计预算、白名单、方法限制、人工确认、撤销和审计。
    
-   Week 2 的主线可以自然承接 Week 1 v0.3，并为 Week 3 / Hackathon 的 v0.4 Agent Tool Calling Flow 做准备。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->








今天完成 Week 1 收尾，整理并发布了 Week 1 学习总结：

[https://github.com/baikingrio/ai-web3-school-note/blob/main/tasks/week1-learning-summary.md](https://github.com/baikingrio/ai-web3-school-note/blob/main/tasks/week1-learning-summary.md)

今天主要复盘了本周对 AI × Web3 的理解：Agent 的价值不是“替人做一切”，而是在明确权限和约束下，把复杂任务拆成可检查、可验证、可拒绝的执行步骤。

结合 Hackathon 项目 AgentScoope Wallet，我进一步明确了项目方向：不是做“AI 自动转账钱包”，而是做“Agent 受限执行钱包”。也就是让 AI Agent 只能在用户预先定义的链上权限边界内执行小额、可审计、可撤销的操作；超出边界时由 Policy / Safe / Zodiac Roles 明确拒绝。

今日 Proof-of-Work：

\- Week 1 学习总结：

[https://github.com/baikingrio/ai-web3-school-note/blob/main/tasks/week1-learning-summary.md](https://github.com/baikingrio/ai-web3-school-note/blob/main/tasks/week1-learning-summary.md)

\- AgentScoope Wallet 项目目录：

[https://github.com/baikingrio/ai-web3-school-note/tree/main/experiments/agent-wallet](https://github.com/baikingrio/ai-web3-school-note/tree/main/experiments/agent-wallet)

\- Sepolia 链上执行证明：

[https://sepolia.etherscan.io/tx/0x70583881b975348b89609459dba6e2ab7c5c21a59c647291a541cc36646914b5](https://sepolia.etherscan.io/tx/0x70583881b975348b89609459dba6e2ab7c5c21a59c647291a541cc36646914b5)

下一步进入 Week 2，继续把 AgentScoope Wallet 从脚本 demo 扩展成完整的 Agent Tool Calling flow：用户目标 → Agent 生成计划 → policy 检查 → simulation → Safe / Zodiac Roles 执行或拒绝 → 审计日志。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->









今天参加了 **Open Agentic Economy: From ERC-8004 / ERC-8183 to Builder Path** 直播分享。因为英文听力压力比较大，会后我补充查阅了 ERC-8004、ERC-8183 相关资料，重点理解 Agent 在开放经济中的身份、信任、任务执行和结算机制。

今天的主要收获是：  

ERC-8004 更偏向解决 **Trustless Agents** 的发现、声誉和验证问题；ERC-8183 更偏向 **Agentic Commerce**，通过任务托管、评估者证明和结算机制，让 Agent 之间或人与 Agent 之间的商业协作更可验证。

结合 Hackathon 项目，我完成并同步了 **AgentScoope Wallet v0.3**：从早期应用层限制，推进到基于 **Sepolia Safe + Zodiac Roles Modifier** 的受限执行钱包实验。当前版本已经可以演示：

\- Safe Owner 不把主私钥交给 Agent

\- Agent 只作为受限 role member 执行

\- 仅允许白名单 USDC transfer

\- 支持额度内执行

\- 支持超额拒绝

\- 支持非白名单拒绝

\- 支持撤销角色后拒绝

\- 每次执行/拒绝都生成结构化审计日志
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->










今天我参加了 Week 1 例会，听取了同学们的学习方法分享和主持人推荐的优秀笔记示例。最大的感受是，公开记录学习过程、持续输出 Proof-of-Work，是 AI × Web3 School 中非常重要的一部分。

白天我继续研究 Hackathon 项目 AgentScoope Wallet，重点探索 Safe Wallet 的模块机制和合约实现。在尝试把项目中的白名单 Policy 迁移到 Safe Module Guard 时，发现 Sepolia 测试网上的 Safe 版本仍是 1.4.1，而 setModuleGuard 是 Safe 1.5.0 才支持的功能，因此当前无法直接使用 Module Guard 实现这部分逻辑。

这个问题让我意识到，Web3 项目设计不仅要理解协议文档和架构思路，还要确认目标网络上实际部署的合约版本和可用接口。下一步我会调整 AgentScoope Wallet 的实现路径，优先探索在自定义 Safe Module 内部完成白名单和额度限制校验，先做出一个可验证的最小 Demo。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->











今天参加了「AI 下乡计划｜AI 在 Web3 的应用」的视频课程。

我的关键收获是：

\- **AI Agent + 钱包**：让 Agent 不只是“建议”，而是能在受控权限下执行链上操作。

\- **AI 链上分析工具**：用于地址画像、资金流追踪、风险识别、项目分析等。

\- **智能钱包和安全助手**：帮助用户识别钓鱼、恶意授权、异常交易，提高 Web3 使用安全性。

\- **交易所和 DeFi 智能风控**：用于监控异常交易、清算风险、合约风险、套利行为等。

这些方向和后续的 Hackathon 项目其实非常相关，尤其是 **AI Agent + 钱包 / 智能钱包安全助手** 这一类，非常适合作为可落地的产品原型。这次课程也让我对AI Agent的应用场景有了大致的方向，这为我后续的开发打开了思路，我逐渐开始理解 AI Agent 在 Web3 中不只是聊天助手，而是可以成为链上操作、安全分析、资产管理和风控决策的智能执行层。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->












今天观看了「Web3 运行原理」X 直播课程，重新温故了一遍 Web3 的基础概念和运行原理，也有了新的理解。布老师提到 Web3 是密码学、经济学、社会学三门学科的交集：密码学提供可验证的账户、签名和共识基础；经济学解释 Token、Gas 和激励机制；社会学对应协作、治理和信任关系的重构。

这和我的 Hackathon 项目 AgentScoope Wallet 也有关：Agent 要参与链上执行，不能只关注技术调用，还要同时考虑权限、激励、风险、治理和用户信任边界。

今天完成 / 推进的是：

1.  观看「Web3 运行原理」X 直播课程，补齐 Web3 运行模型理解。
    
2.  复习 Agent Wallet 与 Agent Workflow，关注 Agent 链上权限边界、Policy / Guard、Simulation 和撤销机制。
    
3.  推进 Hackathon 项目 AgentScoope Wallet，已建立 `experiments/agent-wallet/` 实验目录，并写出 README / config 示例 / demo 路径。
    

今天的目标产出是：

-   一份每日学习计划：`daily/2026-05-20.md`
    
-   一个 Hackathon 实验目录草稿：`experiments/agent-wallet/`
    
-   为后续 Sepolia Safe + 受限权限模块实验打基础。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->













今天我回看了「AI Agent 入门 —— Hermes 从 0 到 1」。

1\. 从视频中了解到配置微信作为 Hermes 消息网关的步骤和方法；之前自己安装 Hermes 时主要使用的是 Telegram。

2\. 多消息网关的意义不只是多一个聊天入口，而是可以让 Hermes 更自然地进入日常学习、任务提醒和路径管理流程。

3\. Hermes 可以作为 AI × Web3 学习路径 / Hackathon 项目的长期辅助学习助手，用来帮助拆解任务、整理资料、记录复盘和推进项目。

我的下一步行动是：

\- 充分利用 Hermes 作为辅助学习助手，多尝试每日复盘、任务拆解、定时提醒、资料整理和学习仓库维护等功能。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->














今天我完成了 AI × Web3 School 第一天的学习记录与 Week 1「搭建 learning agent」的起步。学习画像：AI 有基础、Web3 熟悉、能独立开发，目标方向是 Hackathon 项目，每天投入约 1-2 小时。

今天主要完成了：

1.  **学习仓库**：创建并初始化公开 repo（`ai-web3-school-note`），用于沉淀 proof-of-work、daily notes、experiments、handbook feedback 和 Hackathon 记录。仓库：[https://github.com/baikingrio/ai-web3-school-note](https://github.com/baikingrio/ai-web3-school-note)
    
2.  **Hermes Agent 搭建**（Week 1 主 learning agent）：
    
    -   按 [Hermes Agent 文档](https://hermes-agent.nousresearch.com/docs/) 完成安装与基础配置（API / 登录）。
        
    -   将本课程学习仓库与 [Learning Agent 启动 Prompt](https://aiweb3.school/learning-agent.zh.txt) 接入 workflow，用于整理每日任务、笔记与打卡草稿。
        
    -   跑通至少一次真实学习任务：协助生成/维护今日 `daily/2026-05-18.md`，并参与 Hackathon brief 起草。
        
3.  **Handbook**：阅读首页与 AI × Web3 Bridge 结构，后续重点放在 Agent Wallet / Agent Workflow 等章节。
    
4.  **Hackathon 方向**：选定 **钱包与权限（Agent Wallet）** 为切入点。
    

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/baikingrio/images/2026-05-18-1779109063386-image.png)
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
