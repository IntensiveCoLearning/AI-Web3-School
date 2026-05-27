---
timezone: UTC+6
---

# Qy

**GitHub ID:** pillowtalk-Qy

**Telegram:** @Qy_originshift

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->
今天完成了两份 2026-05-27 的学习整理。

第一份是共学讨论笔记，主题从 Markdown 知识库 Agent、黑客松 API / SDK 支持、Layer2、去中心化社区，一直延伸到贡献激励、DAO 运营和 Web2 用户低门槛进入 Web3。对我最实用的点是：知识库 Agent 不一定一开始就要搭完整 RAG，可以先从现有 Agent + Markdown 索引 + 限定提示词开始；而黑客松项目也应该提前确认 sponsor API、SDK、技术支持和哪些部分可以安全 mock。

第二份是 Why Privacy Matters for Builders & Neo Cyberpunk 主题课笔记。今天最大的理解转变是：privacy 不是工具选择，也不是产品上线后再补的功能，而是 AI x Web3 builder 从项目早期就要考虑的权力结构设计。AI Agent 会记录 prompt、tool calls、memory、payment、identity、reputation 和交易路径，如果没有隐私设计，它可能成为新的监控入口。

我也把自己的问题写进了笔记：当身份、信用、支付、托管、合规和服务准入逐渐从中心化机构转移到密码学、智能合约、DID、ZK 和协议时，个人是否真的更自主，还是权力只是转移到协议设计者、钱包提供商、基础设施运营方和标准制定者？我今天的理解是：密码学不会自动带来自由，关键是系统是否 open-source、auditable、privacy-preserving、permissionless、exit-friendly。

这也直接影响我的 AI Wallet Clear Intent Guard 方向。签名前 review 不应该只告诉用户“这笔交易做什么”，还应该告诉用户“这笔交易暴露什么”：地址、关系、权限历史、支付路径、identity / reputation 线索和 memory 敏感信息。下一步我会考虑给 demo 增加一个 Privacy Review 卡片，但仍然保持第一版范围很小，不碰真实私钥、真实资产、真实钱包地址或真实交易历史。

今日记录：

[**https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-05-27.md**](https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-05-27.md)

Today I completed two learning notes for 2026-05-27.

The first was a co-learning note about Markdown knowledge agents, hackathon API / SDK support, Layer2, decentralized communities, contribution incentives, DAO operations, and low-friction Web3 onboarding. The most practical point is that a Markdown knowledge agent does not need a full custom RAG stack at the beginning. It can start with existing agents, clean Markdown indexes, scoped prompts, and cited source files. For hackathon preparation, I also need to confirm sponsor APIs, SDKs, technical support, and which parts can be safely mocked.

The second was a class note on Why Privacy Matters for Builders & Neo Cyberpunk. My biggest shift today is that privacy is not just a tool choice or a late-stage product add-on. It is a power-structure design question for AI x Web3 builders. AI agents may record prompts, tool calls, memory, payments, identity, reputation, and transaction paths. Without privacy design, they can become a new surveillance surface.

I also added my own question into the note: if identity, credit, payments, custody, compliance, and service access move from institutions to cryptography, smart contracts, DID, ZK, and protocols, do individuals become more sovereign, or does power simply move to protocol designers, wallet providers, infrastructure operators, and standards bodies? My takeaway is that cryptography does not automatically create freedom. The system needs to be open-source, auditable, privacy-preserving, permissionless, and exit-friendly.

This connects directly to my AI Wallet Clear Intent Guard direction. Pre-signing review should not only explain what a transaction does. It should also explain what the transaction exposes: addresses, relationships, permission history, payment routes, identity / reputation links, and memory-sensitive context. My next step is to consider adding a Privacy Review card while keeping the first demo tightly scoped and away from real keys, real assets, real wallet addresses, or real transaction histories.
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->

今天正式进入 Week 2 的方向研究主线。我完成并提交了 AI × Web3 问题地图与主方向选择，把 7 个方向重新梳理了一遍，最后选择 Wallet / Permission / Safe Execution 作为接下来最值得深挖的主线。

这条线和我的黑客松方向 AI Wallet Clear Intent Guard 越来越接近：它不是要做一个完整钱包，也不是让 AI 自动签名，而是在签名前把用户意图、确定性的交易事实、权限策略、授权边界和支付路径放在同一个 review surface 里，让人能更清楚地决定是否继续。

今天也整理了 Cobo Agent Take Wallet 课程笔记。最大的收获是，Agent wallet safety 不能靠“模型听话”，而需要执行层的安全设计：MPC、scoped authority、policy check、completion condition、audit trail、recipe skill layer，以及必要时把控制权交还给人的恢复路径。

下午完成了 Payment / Commerce｜最小支付与商业流程拆解，用 AI Wallet Transaction Review Agent 作为场景，把 agent commerce 拆成报价、预算授权、执行审查、交付、验收、付款、退款、争议和 proof。这个任务让我意识到，agent payment 不是单纯“能不能付款”，而是一整条服务交付和风险确认链路。

今日记录：

[**https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-05-26.md**](https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-05-26.md)

Today I moved into the Week 2 direction-research track. I completed and submitted the AI x Web3 problem map and main direction selection, then chose Wallet / Permission / Safe Execution as my main line for deeper work.

This line is becoming closely connected to my Hackathon direction, AI Wallet Clear Intent Guard. The goal is not to build a full wallet or let AI sign automatically. The safer wedge is a pre-signing review layer that compares user intent, deterministic transaction facts, policy constraints, authority boundaries, and payment-route details before a human decides whether to continue.

I also organized the Cobo Agent Take Wallet class note. My main takeaway is that agent wallet safety cannot rely on the model being obedient. It needs execution-layer safety design: MPC, scoped authority, policy checks, completion conditions, audit trails, recipe skill layers, and a recovery path back to human control.

I also completed the Payment / Commerce minimal flow task using an AI Wallet Transaction Review Agent scenario. It helped me see that agent payment is not just about whether money can move. It is a full service flow: quote, budget authorization, review execution, delivery, acceptance, payment, refund, dispute, and proof.
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->


今天的学习主线是 Agent Memory 和 Agent wallet。

整理了 Long Term Memory for AI Agents 课程笔记。我最大的收获是：Agent Memory 不是简单的向量数据库，也不是把上下文无限拉长。更关键的问题是如何对内容进行高质量压缩，如何形成可触发的记忆节点，如何在正确任务里召回少量关键记忆，以及如何在召回后重新解释、更新和遗忘。

我也把自己的问题写进了笔记：人的记忆不是一个超长上下文，而是通过节点触发、联想和再解释来工作。Agent Memory 是否也应该朝这个方向设计？

下午整理了一个 0G 生态外部分享，主题是当 AI Agent 拥有钱包、资产和自我主权后会发生什么。其中 memory as an asset、Agent prediction market、Agent ID、隐私计算和链上审计轨迹，都和我的黑客松方向产生了连接。

今天对 AI Wallet Clear Intent Guard 的理解又推进了一步：它不应该只是交易解释器，而应该逐步考虑用户意图、确定性的交易事实、权限策略、memory source、permission history 和 payment route。第一版 demo 仍然要保持很小，不做完整钱包，不接触真实私钥，不自动签名。

今日记录：

[**https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-05-25.md**](https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-05-25.md)

Today I focused on Agent Memory and agent wallets.

The key insight from the Long Term Memory for AI Agents class is that memory is not just a vector database or a longer context window. The deeper questions are compression, triggering, retrieval, reinterpretation, update, and forgetting.

I also added my own question into the note: human memory does not work like an infinite context window. It works through triggered memory nodes, association, and reinterpretation. Agent Memory may need to be designed in a similar direction.

The 0G ecosystem meeting connected this memory topic with agent wallets, memory assets, AI prediction markets, Agent ID, privacy computing, and onchain audit trails.

My AI Wallet Clear Intent Guard direction moved one step forward: it should eventually compare user intent, transaction facts, policy constraints, memory source, permission history, and payment route before a human signs. The first MVP still needs to stay small and safe: no full wallet, no real private keys, and no automatic signing.
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->



今天我继续整理 AI x Web3 School 第一周后半段的学习成果，完成了 AI 基础概念卡片、Web3 基础概念卡片，并围绕自己的黑客松方向拆解了两个 AI 钱包相关项目：Cobo Agentic Wallet 和 Coinbase AgentKit / Agentic Wallet / x402。

这次最大的收获是，AI 钱包方向不能简单理解成“让 AI 帮我操作钱包”。更安全、更适合黑客松的切口是签名前 review layer：先把用户自然语言意图、确定性的交易事实、权限策略和支付路径放在一起检查，再由人决定是否签名。

Cobo 给我的启发是 task-scoped、policy-enforced、reviewable、revocable；Coinbase 给我的启发是 agent wallet 和 x402 payment flow 会把安全问题从“交易解释”扩展到“支付路径和 facilitator 透明度”。

今日记录：

[**https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-05-24.md**](https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-05-24.md)

Today I continued organizing the later Week 1 learning outputs. I completed the AI basic concept cards, Web3 basic concept cards, and an advanced industry-observation task around two AI wallet-related references: Cobo Agentic Wallet and Coinbase AgentKit / Agentic Wallet / x402.

My main takeaway is that an AI wallet direction should not simply mean "let AI operate my wallet." A safer and more demo-able Hackathon wedge is a pre-signing review layer: compare user intent, deterministic transaction facts, policy constraints, and payment-route details before a human decides whether to sign.

Cobo taught me to think in terms of task-scoped, policy-enforced, reviewable, and revocable authority. Coinbase taught me that agent wallets and x402 payment flows extend the safety problem from transaction explanation into payment-route and facilitator transparency.
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->




今天是 Week 1 的集中收尾日。我把前几天分散完成的 AI、Web3、AI x Web3 综合任务整理成一组更完整的 public proof：测试网交易、只读智能合约调用、EOA / 智能账户 / 多签权限比较、AI x Web3 最小交叉流程图、Week 1 Proof-of-Work Pack，以及一个受限 Web3 助手 workflow。

这次最大的收获是，AI x Web3 的安全边界不能停留在一句“人工确认”。它需要被拆成具体流程：AI 可以解释和准备，工具可以验证公开事实，钱包负责展示待签名动作，人负责确认或拒绝，链上系统负责执行并留下可验证记录，public repo 负责保存脱敏后的 proof。

我也整理了 Sophia 关于 Open Agile Economy / AI Agent Economy 的嘉宾课笔记。课后我把自己的问题继续拆成三层：Agent identity / reputation 如何抗攻击，AI wallet 的最低安全模型应该是什么，x402 facilitator 如何避免变成新的中心化支付网关。这些问题会继续连接到我的黑客松方向 AI Wallet Clear Intent Guard。

今日记录：

[**https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-05-23.md**](https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-05-23.md)

Today was a concentrated Week 1 wrap-up day. I organized the AI, Web3, and integrated AI x Web3 tasks into a more complete public proof set: a testnet transaction, a read-only smart contract call, an EOA / smart account / multisig permission comparison, an AI x Web3 minimal crossover flowchart, a Week 1 Proof-of-Work Pack, and a restricted Web3 assistant workflow.

My main takeaway is that the AI x Web3 safety boundary cannot stop at saying "human confirmation." It needs to become a concrete workflow: AI prepares and explains, tools verify public facts, the wallet displays the action, the human confirms or rejects, the chain records the result, and the public repo stores a sanitized proof.

I also organized Sophia's guest talk on Open Agile Economy / AI Agent Economy. After the talk, I reframed my question into three layers: how Agent identity / reputation can resist attacks, what the minimum AI wallet safety model should be, and how x402 facilitators can avoid becoming new centralized payment gateways. These questions will continue feeding into my Hackathon direction, AI Wallet Clear Intent Guard.
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->





今天我完成了 Week 1 的一个关键 Web3 实践闭环：用 Sepolia 测试网完成一笔基础交易，通过区块浏览器和公开 RPC 验证交易状态、gas、区块高度和时间，并整理成 GitHub proof 提交到 WCB。

这次最大的收获是：链上实践不一定要复杂。对于“完成一笔测试网交易”这个任务，普通测试网转账比部署合约更安全，也更能聚焦交易生命周期本身。AI 可以帮助我读取任务、整理 proof、验证公开字段和准备提交文本，但钱包签名必须由我人工确认。

我还整理了第一周复盘例会和 co-learning / 黑客松说明笔记。它们让我更清楚地看到：AI x Web3 学习不是只追工具，而是要把学习、任务、proof、项目方向、组队和安全边界连成一条可持续的路径。

另外，我今天也向平台反馈了一个任务审核机制问题：Web3 原理任务中提到“钱包、私钥、助记词”等概念时，AI 审核可能把安全概念说明误判为信息泄露，导致任务被驳回；而互斥任务、过期时间和人工补分之间又出现了状态不一致。我的建议是，驳回后应保留补交窗口，AI 审核应区分概念学习与真实敏感信息泄露，并为工作人员预留可控的人工调整空间。

今日记录：

[**https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-05-23.md**](https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-05-23.md)

Today I completed a key Week 1 Web3 practice loop: I made a basic Sepolia testnet transaction, verified its status, gas, block number, and timestamp through a block explorer and public RPC, organized it into a GitHub proof, and submitted it to WCB.

My main takeaway is that onchain practice does not need to be complex. For the "complete one testnet transaction" task, a plain testnet transfer is safer than deploying a contract and keeps the focus on the transaction lifecycle. AI can help read the task, organize proof, verify public fields, and prepare submission text, but wallet signing must remain human-confirmed.

I also organized the Week 1 review meeting note and the co-learning / hackathon briefing note. Together, they made the learning path clearer: AI x Web3 learning is not just about chasing tools. It is about connecting learning, tasks, proof, project direction, team formation, and safety boundaries into a sustainable workflow.

I also reported a platform-review issue today. In a Web3 operating-principles task, educational mentions of wallet, private key, and seed phrase may have been treated by AI review as sensitive-information leakage. The task was rejected, the original live-attendance task expired, and the mutually exclusive replay task became available, while staff later restored the 20 points manually. My suggestion is to keep a resubmission window after rejection, distinguish conceptual safety discussion from real secret leakage, and give staff a controlled manual adjustment path.
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->






今天我整理了 2026-05-21 AI 与 Web3 结合方向分享会笔记。最大的收获是，AI x Web3 不是单向叠加，而是双向关系：Web3 可以为 AI 提供更开放的算力、数据和激励网络，AI 也可以帮助 Web3 在钱包安全、链上数据理解和语义化交互上变得更可用。

另外，我也记录了一个自己主动寻找和分析外部参考后形成的黑客松候选方向：围绕 AI 钱包签名安全，探索 AI 如何在用户确认前帮助理解风险。这个方向和课程主题有关联，但不是课程直接给出的题目。考虑到 idea 还在早期，我只保留低信息量公开版本，不展开具体产品细节。public repo 是学习证明，不等于把所有想法都公开。

今日笔记：

[**https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-05-21.md**](https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-05-21.md)

Today I organized the 2026-05-21 class note on AI and Web3 mutual enablement. My main takeaway is that AI x Web3 is not a one-way combination. Web3 can provide more open compute, data, and incentive networks for AI, while AI can make Web3 more usable through wallet safety, onchain data understanding, and semantic interaction.

I also recorded a Hackathon candidate direction formed through my own external reference search and analysis: AI wallet signing safety, or how AI can help users understand risk before approval. This direction is related to the class themes, but it was not directly assigned by the class. Since the idea is still early, the public version stays low-detail and does not expose concrete product details. A public repo is proof of learning, not a place to expose every idea.
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->







今天我整理了 2026-05-20 Web3 运行原理分享会笔记，从第一性原理复盘了一笔交易如何从钱包签名开始，经过 RPC、mempool、builder、validator、出块和确认，最终成为链上状态。

最大的收获是：Web3 不是几个孤立概念，而是一条从私钥到 finality 的完整系统链路。钱包负责控制签名，交易表达用户意图，gas 定价链上资源，RPC 连接用户和网络，智能合约承载公开规则，协议升级则依赖技术实现和社会共识共同完成。

今日笔记：

[**https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/notes/classes/2026-05-20-web3-operating-principles-sharing.md**](https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/notes/classes/2026-05-20-web3-operating-principles-sharing.md)  
  
Today I organized the 2026-05-20 Web3 operating principles sharing note. The session reviewed how a transaction starts from wallet signing, moves through RPC, mempools, builders, validators, block production, and confirmation, and finally becomes onchain state.

The biggest takeaway is that Web3 is not a set of isolated concepts. It is a full system path from private key to finality. Wallets control signatures, transactions express user intent, gas prices shared resources, RPC connects users to the network, smart contracts carry public rules, and protocol upgrades depend on both technical implementation and social consensus.
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->









今天我继续维护 AI x Web3 School Cohort 0 学习仓库，并整理部署了两份学习资料：ZK trading system fireside chat 笔记，以及 2026-05-19 晚间课程《AI 工具科普 + Hermes Agent 安装与配置分享会》的课程笔记。

ZK 笔记让我看到，zk 交易系统的难点不只是证明速度，而是证明生成、见证数据传输、排序、预言机、数据可用性、成本结构和用户生态之间的系统协同。

这次笔记帮助我把 AI 工具生态重新分层：聊天型 AI、AI 编程助手、终端型 Agent、模型平台和通用助手底座。Hermes Agent 更适合被理解为长期在线的受控个人助手，而不是替代专业 IDE 或终端开发工具。

今天另一个重要收获是 Qy Knowledge Hub 的方向更加清晰：它会作为本地优先、安全优先的个人知识处理中枢，把外部信息先做整理、分类、风险过滤和人工审核，再沉淀为可信知识、内容素材或行动队列。Hermes 在其中是受控协作助手，而不是让外部平台反向控制系统。

今日总结文档：

[https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-05-19.md](https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-05-19.md)

Today I continued maintaining my AI x Web3 School Cohort 0 learning repo and deployed two learning notes: the ZK trading system fireside chat note and the class note for the 2026-05-19 evening session on AI tools and Hermes Agent setup.

The ZK note reminded me that a zk trading system is not only about proof speed. It depends on system coordination across proof generation, witness-data transfer, sequencing, oracles, data availability, cost structure, and user ecosystem.

This note helped me rebuild the AI tool landscape into layers: chat-style AI, AI coding assistants, terminal agents, model platforms, and general assistant bases. Hermes Agent is better understood as a long-running controlled personal assistant, not as a replacement for professional IDEs or terminal developer tools.

Another important takeaway is that the direction of Qy Knowledge Hub became clearer. It will be a local-first, safety-first personal knowledge-processing hub that organizes, classifies, risk-filters, and manually reviews external information before turning it into trusted knowledge, content material, or action queues. Hermes acts as a controlled collaborator inside this system, not as a way for external platforms to control it.
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->











今天我初始化了 AI x Web3 School Cohort 0 学习仓库，并把它搭成了一个结构化学习系统。

我完成了 public GitHub repo、学习计划、隐私边界、Agent 规则、任务证明结构、外部资料库，并整理了两份今天的 Ethereum/Web3 学习资料。

今天收集的资料主要包括：以太坊中文周会纪要，以及 Week 1 线上课《AI 时代 Web3 开发者必备基础与架构能力》。前者帮助我观察以太坊生态、监管、稳定币和扩容动态；后者帮助我复盘钱包、签名、交易生命周期、安全设计和 AI 时代开发者能力模型。

关键收获：AI 可以帮助我组织和加速学习，但 public publishing、钱包安全和任务提交仍然需要人工审核和清晰边界。

明天计划：先跟着平台完成任务，再让 Agent 围绕 LLM/workflow/agent、钱包/签名/交易、Gas/合约执行生成一个小型可交互产物，并比较 Codex 与 Hermes 的协作体验。

Today I initialized my AI x Web3 School Cohort 0 learning repo and turned it into a structured learning system.

I set up a public GitHub repo with a learning plan, privacy boundary, Agent rules, task proof structure, external notes library, and two collected notes from today's Ethereum/Web3 learning sessions.

Today's collected materials include the Ethereum Chinese weekly meeting note and the Week 1 live class on Web3 architecture capabilities in the AI era. They helped me review Ethereum ecosystem updates, regulation, stablecoins, scaling, wallets, signatures, transaction lifecycle, security design, and the AI-era developer capability model.

Key takeaway: AI can help me organize and accelerate learning, but public publishing, wallet security, and task submission still need human review and clear boundaries.

Next step: follow the platform tasks and ask agents to turn key AI x Web3 concepts into an interactive learning artifact, while comparing Codex and Hermes on the same learning task.
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
