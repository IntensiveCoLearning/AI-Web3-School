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
# 2026-06-10
<!-- DAILY_CHECKIN_2026-06-10_START -->
今天继续推进 Vibe Coding 黑客松项目，把整个 Demo 的框架和技术语言基本设计完了。

目前项目还是围绕 AI Wallet Clear Intent Guard：一个给 AI wallet / Agent wallet 用的签名前意图审查层。它不做完整钱包，也不替用户自动签名，而是解决一个关键断点：用户说自己想做什么，Agent 准备执行什么，真实交易内容到底是什么，这三者是否一致。

今天把 Demo 路径进一步收成一条闭环：user intent -> agent proposal -> transaction / Packet facts -> Guard review -> risk state -> human confirmation -> audit proof。这个结构的重点是让用户在签名前看清楚事实、风险和意图是否匹配，而不是让 AI 更顺滑地替用户完成高风险动作。

今天也把技术语言整理了一遍。Demo 里最重要的一句话是：AI 可以帮助解释和对比，但不能越过用户直接完成签名边界。也就是 AI 可以作为 review assistant，但最终确认必须回到用户。

明天的计划是跑通所有核心逻辑，让 Demo 形成真正闭环。展示部分队员也在同步设计中，接下来要把技术 Demo 和展示叙事对齐成一个完整作品。

今日记录：

[**https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-06-10.md**](https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-06-10.md)

Today I continued working on the Vibe Coding hackathon project and finished the overall Demo framework and technical language.

The project is still AI Wallet Clear Intent Guard: a pre-signing intent review layer for AI wallets / Agent wallets. It is not a full wallet and does not sign automatically for users. It focuses on one key gap: what the user meant, what the agent proposed, and what the actual transaction contains.

The Demo path is now organized as a closed loop: user intent -> agent proposal -> transaction / Packet facts -> Guard review -> risk state -> human confirmation -> audit proof. The goal is to help users understand facts, risks, and intent alignment before signing, rather than making high-risk actions smoother for AI to execute.

I also refined the technical language. The core message is: AI can help explain and compare, but it should not silently cross the signing boundary. AI can be a review assistant, but final confirmation must stay with the user.

Tomorrow's plan is to run through all core logic and make the Demo a real closed loop. The presentation part is also being designed by teammates, so the next step is aligning the working Demo and the presentation story into one complete project.
<!-- DAILY_CHECKIN_2026-06-10_END -->

# 2026-06-09
<!-- DAILY_CHECKIN_2026-06-09_START -->

今天主要在 Vibe Coding 黑客松项目上推进，把前几天整理出来的 Demo flow、Agent 自主性、风险模型和隐私最小化思路，继续往实际项目形态里落。

目前项目方向仍然是 AI Wallet Clear Intent Guard：一个面向 AI wallet / Agent wallet 的签名前意图审查层。它不想替用户自动签名，也不想做完整钱包，而是解决用户自然语言意图和真实交易内容之间的断点。用户说“只授权一点 USDC”，但实际交易可能是无限授权；Agent 生成了操作，但用户仍然需要知道自己到底要签什么。

今天更明确了第一版 Demo 的主线：先做一个 pre-signing review surface。页面里重点展示 user intent、proposed action、source of facts、AI explanation、policy decision、risk state、human confirmation 和 mock audit proof。核心 UI 会是 review card，不只是一个警告框，而是一条完整审查路径。

我也把 Demo case 收束到三类：Looks consistent、Needs review、Do not sign。这样可以同时展示正常路径、灰色风险和明显不一致，而不用一开始就把项目做得过重。

今天对 Vibe Coding 也有更清楚的体感：AI 很适合帮助快速生成页面结构、交互草稿和 mock data，但安全产品的边界不能交给 AI 自动决定。尤其是钱包和签名前审查场景，AI 应该负责解释和对比，最终确认仍然必须回到用户。

下一步会继续把 review card、三条 mock scenario 和 Demo script 变成更具体的可执行版本。

今日记录：

[**https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-06-09.md**](https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-06-09.md)

Today I focused on the Vibe Coding hackathon project and turned the previous Demo flow, agent autonomy ideas, risk model, and data-minimization thinking into a more concrete product direction.

The project is still AI Wallet Clear Intent Guard: a pre-signing intent review layer for AI wallets / Agent wallets. It does not try to sign for the user or become a full wallet. It focuses on the dangerous gap between natural-language user intent and the actual transaction content. A user may ask to approve a small amount of USDC, while the proposed transaction may contain an unlimited approval.

The first Demo direction is clearer now: build a pre-signing review surface. The page should show user intent, proposed action, source of facts, AI explanation, policy decision, risk state, human confirmation, and mock audit proof. The key UI will be the review card, not just a warning box. It should show the full review path.

I also narrowed the Demo cases to three states: Looks consistent, Needs review, and Do not sign. This can show the normal path, a gray-zone risk, and a clear mismatch without making version one too heavy.

Today's Vibe Coding takeaway is also clearer: AI is useful for quickly generating page structure, interaction drafts, and mock data, but the safety boundary cannot be delegated to AI. In wallet review, AI should explain and compare. Final confirmation must remain with the user.

The next step is to turn the review card, three mock scenarios, and Demo script into a more executable version.
<!-- DAILY_CHECKIN_2026-06-09_END -->

# 2026-06-08
<!-- DAILY_CHECKIN_2026-06-08_START -->


今天整理并部署了三篇 6 月 8 日笔记：以太坊中文周会、黑客松 co-learning Agent 项目与 Demo 答疑、以及以太坊密码学工程 / PSE / 零知识证明课堂。

今天课堂部分最有启发。PSE / ZK 分享先从最基础的“证明”讲起，把证明拆成 issuer、holder、verifier 三个角色，也就是谁出具证明、谁持有证明、谁负责验证。传统证明体系的问题不只是容易造假，还在于为了证明一个很小的条件，常常会暴露太多无关隐私。比如只需要证明年满 18 岁，却不得不展示完整身份证。

零知识证明最打动我的地方是：它不是单纯更复杂的密码学，而是在改变验证关系。它允许一个人证明“某件事是真的”，同时不把背后的秘密和额外信息交出去。课堂里用 Where's Waldo、交互式概率证明、色盲辨色、完整性、可靠性和 zero knowledge 这些例子，把这个概念讲得很清楚。

这节课还把 ZK 的应用展开到很多方向：ZKML 可以验证模型执行或保护输入 / 模型隐私；ZK identity 可以只证明年龄、国籍、资格等必要属性；ZK Rollup 用一份聚合证明帮助以太坊扩容；图片防伪和匿名支付则展示了 ZK 在真实性与隐私之间的张力。

今天最大的收获是，AI Wallet Clear Intent Guard 不应该只是一个风险解释器，而应该是一条可验证、可审查、可最小化披露的 review path。以太坊周会让我看到风险可以分成 transaction、asset、platform、signature、policy 等层；co-learning 让我更清楚 Demo 需要展示 Agent 的 hypothesis、tool selection、verification 和 adjustment；ZK 课堂则提醒我，验证不应该要求用户暴露超过必要范围的信息。

下一步要把这些理解落实到 Demo 前端：review card 需要显示事实来源、AI explanation、policy decision、risk label、user confirmation 和 proof，同时尽量避免暴露不必要的用户隐私。

今日记录：

[**https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-06-08.md**](https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-06-08.md)

Today I organized and deployed three June 8 notes: the Ethereum Chinese Weekly, a co-learning session on hackathon agent projects and Demo Q&A, and a class on Ethereum cryptographic engineering, PSE, and zero-knowledge proofs.

The class note was the most conceptually important part today. The PSE / ZK session started from the basic idea of proof and separated it into issuer, holder, and verifier: who issues evidence, who holds it, and who verifies it. The weakness of traditional proof systems is not only fraud. They also often reveal too much information for a narrow verification goal, such as showing a full ID card just to prove age.

The most powerful idea in zero-knowledge proof is that verification can change shape: I can prove that something is true without handing over the underlying secret or unrelated private information. The class made this concrete through Where's Waldo, interactive probabilistic proofs, the color-blind paper example, completeness, soundness, and zero knowledge.

The applications also expanded the design space: ZKML can verify model execution or protect input/model privacy; ZK identity can prove only attributes such as age, nationality, or eligibility; ZK Rollup uses aggregated proofs for scaling; image authenticity and mixers show the tension between verifiability, privacy, and misuse risk.

The strongest takeaway is that AI Wallet Clear Intent Guard should not be only a risk explainer. It should become a verifiable, reviewable, data-minimizing review path. The Ethereum weekly note expanded the risk model into transaction, asset, platform, signature, and policy layers. The co-learning session clarified that a strong Demo should show agent hypothesis, tool selection, verification, and adjustment. The ZK class reminded me that verification should not require exposing more user data than necessary.

The next step is to turn this into frontend design: the review card should show source of facts, AI explanation, policy decision, risk label, user confirmation, and proof while avoiding unnecessary private data exposure.
<!-- DAILY_CHECKIN_2026-06-08_END -->

# 2026-06-07
<!-- DAILY_CHECKIN_2026-06-07_START -->



今天休息了一天，没有正式推进 Demo 开发。不过我看了一些其他黑客松赛事的夺冠项目，重点观察它们是怎么做前端页面和 Demo 展示的。

今天最大的收获是：Demo 展示本身就是产品能力的一部分。好的项目不是把所有功能都堆出来，而是让评委在很短时间内看懂用户是谁、问题是什么、页面怎么操作、结果是什么、技术亮点在哪里。

对 AI Wallet Clear Intent Guard 来说，后续前端不应该只是工具界面，而应该是一条清楚的 review path：用户 intent、Agent 提议、payment / Packet facts、Guard review、risk label、用户确认和 audit proof。明天继续推进时，要把今天的观察转成页面结构和 Demo script。

今日记录：

[**https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-06-07.md**](https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-06-07.md)

Today was a rest day without formal Demo development. I reviewed several winning projects from other hackathons, focusing on how they build frontend pages and present their Demo.

The strongest takeaway is that Demo presentation is part of product capability. Strong projects do not simply show every feature. They help judges quickly understand the user, the problem, the interaction path, the outcome, and the technical value.

For AI Wallet Clear Intent Guard, the frontend should not be only a tool surface. It should become a clear review path: user intent, agent proposal, payment / Packet facts, Guard review, risk label, user confirmation, and audit proof. The next step is to turn today's observation into page structure and Demo script.
<!-- DAILY_CHECKIN_2026-06-07_END -->

# 2026-06-06
<!-- DAILY_CHECKIN_2026-06-06_START -->




今天为团队黑客松规划整理了一张 Notion 表，并用 AI 辅助把任务、进度、协作方式和交付物拆得更清楚，已经可以作为团队协同合作的工作面板。

同时也把这次 Demo 的流程和实现技术大框架理了一轮：从用户任务和预算边界，到 Agent 提议、Guard review、风险判断、用户确认和 audit proof。明天会基于这张 Notion 表和团队再进行一轮同步，确认范围、分工和技术边界后，就可以开始正式 Demo 制作。

今天最重要的变化是：项目从学习笔记和想法收束，进入团队规划和 Demo 执行前夜。

今日记录：

[**https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-06-06.md**](https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-06-06.md)

Today I organized a Notion planning table for the team and used AI to make tasks, progress, collaboration structure, and deliverables clearer. It is now ready to serve as the team's shared collaboration board.

I also clarified the Demo flow and high-level implementation framework: from user task and budget boundary, to agent proposal, Guard review, risk judgment, user confirmation, and audit proof. Tomorrow the team will use the Notion table for another round of alignment. After confirming scope, ownership, and technical boundaries, we can start formal Demo production.

The most important change today is that the project has moved from learning notes and ideas into team planning and the night before Demo execution.
<!-- DAILY_CHECKIN_2026-06-06_END -->

# 2026-06-05
<!-- DAILY_CHECKIN_2026-06-05_START -->





今天主要整理并部署了两篇 6 月 5 日笔记：一篇是 AI Agent 时代重新审视区块链技术选型与链上应用开发实战，另一篇是第三周项目周会。

今天最大的收获是，AI Wallet Clear Intent Guard 的 Why Web3 更清楚了。Web3 不是为了贴标签，而是当多个 Agent、用户、服务和支付路径需要共享可验证状态时，才真正有必要。AI 可以降低用户理解链上操作的成本，也能降低开发侧写合约、测试、部署、调试的成本；同时，Agent economy 又会增加跨主体协作、权限和审计的需求。

周会则提醒我，笔记不能只停留在笔记。现在要把 Cobo Packet、Financial Mandate、x402 payment、Why Web3 和评审规则收成一个真正可以报名、可以录屏、可以提交的项目。

接下来最重要的不是继续扩展方向，而是定第一版 MVP surface，写 README，准备 3 到 5 分钟 demo script，并整理 sponsor question list。

今日记录：

[**https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-06-05.md**](https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-06-05.md)

Today I organized and deployed two June 5 notes: one on blockchain selection in the AI Agent era and one on the Week 3 project meeting.

The strongest takeaway is that AI Wallet Clear Intent Guard now has a clearer Why Web3. Web3 is not just a label. It matters when agents, users, services, and payment rails need shared verifiable state. AI can lower the cost of blockchain UX and development, while agent economy increases the need for cross-party permissions and audit proof.

The project meeting also made the next step clear: notes are no longer enough. Cobo Packet, Financial Mandate, x402 payment, Why Web3, and judging rules need to become a project that can be registered, recorded, and submitted.

The next priority is choosing the first MVP surface, writing the README, preparing a 3 to 5 minute demo script, and organizing sponsor questions.
<!-- DAILY_CHECKIN_2026-06-05_END -->

# 2026-06-04
<!-- DAILY_CHECKIN_2026-06-04_START -->






今天主要整理并部署了两篇 6 月 4 日笔记：一篇是黑客松进度沟通，另一篇是 AI Agent + Web3 Payment / financial harness 分享。

今天最重要的收获是，AI Wallet Clear Intent Guard 的结构又清楚了一层。之前我主要在看 Cobo 的 Packet，也就是 Agent 执行前的权限包；今天 financial harness 分享补上了 Mandate 这一层，也就是用户原始任务意图和预算授权。

现在我更倾向于用三层结构理解 demo：

`Mandate = task-level intent and budget Packet = execution permission package Payment = concrete payment or API call`

这让我意识到，第一版 demo 不应该只是“解释这笔交易会做什么”，还应该问：这笔支付属于哪个任务？是否在预算内？是否在商户 / API 范围内？是否符合用户原始意图？是否需要人工确认？执行后如何留下审计 proof？

黑客松进度沟通也提醒我：已经有人提交项目了，但现在最重要的不是和别人比速度，而是把自己的 MVP 做小、做清楚、做完整。

今日记录：

[**https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-06-04.md**](https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-06-04.md)

Today I organized and deployed two June 4 notes: one hackathon progress check-in and one AI Agent + Web3 Payment / financial harness sharing.

The strongest takeaway is that AI Wallet Clear Intent Guard now has a clearer three-layer structure. Cobo's Packet gives an execution permission layer, while today's financial harness sharing added Mandate as a task-level intent and budget layer.

I now understand the demo through:

`Mandate = task-level intent and budget Packet = execution permission package Payment = concrete payment or API call`

This means the first demo should not only explain what a transaction will do. It should ask whether the payment belongs to the right task, stays inside budget, matches the allowed merchant/API scope, aligns with user intent, requires human review, and leaves audit proof.

The progress check-in also reminded me not to compare anxiously with faster teams. The right move is to build a small, clear, complete MVP.
<!-- DAILY_CHECKIN_2026-06-04_END -->

# 2026-06-03
<!-- DAILY_CHECKIN_2026-06-03_START -->







今天主要整理并部署了两篇 6 月 3 日课程笔记：一篇是 co-learning 黑客松讨论，另一篇是 Cobo Wallet / Agent Wallet 实战分享。

今天最关键的收获是，AI Wallet Clear Intent Guard 开始从抽象概念碰到真实的钱包产品结构了。Cobo 的 Packet 机制很像一个可审批的权限包：Agent 先提出权限申请，用户在手机端审批，之后 Agent 只能在 Packet 约定的边界内执行。

这让我重新看 demo 的第一版入口。现在最值得比较的是两个方向：一个是 Packet / authority package review，另一个是 x402 payment review。我也针对 x402 问了一个更具体的问题：在真正签名或执行前，是否可以通过 SDK、API 或 caw fetch 拿到 draft execution facts，比如 chain、token、amount、recipient、operation type 和 policy decision。

如果 x402 能在签名前给出这些事实，它仍然很适合做支付审查 demo；如果不能，Packet review 可能更适合作为第一版 MVP。今天的重点不是多学了一个工具，而是把 demo 方向变成了可以验证的接口问题。

今日记录：

[**https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-06-03.md**](https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-06-03.md)

Today I organized and deployed two June 3 notes: one co-learning hackathon discussion and one Cobo Wallet / Agent Wallet practice note.

The most important gain is that AI Wallet Clear Intent Guard now has a concrete wallet product reference. Cobo's Packet mechanism behaves like an approvable authority package: the agent requests bounded permission, the user approves it, and the agent can only execute inside that boundary.

This changed how I evaluate the first demo surface. The strongest candidates are now Packet / authority package review and x402 payment review. I also asked a concrete x402 question: can CAW expose draft execution facts before signing or execution, such as chain, token, amount, recipient, operation type, and policy decision?

If x402 can expose those facts before signing, it remains a strong payment review demo. If not, Packet review may be the safer first MVP. Today's progress was turning the demo direction into a concrete API and product-structure question.
<!-- DAILY_CHECKIN_2026-06-03_END -->

# 2026-06-02
<!-- DAILY_CHECKIN_2026-06-02_START -->








今天主要完成了本周黑客松计划表，并把它整理到了 Notion 里。

这张表不是简单的待办清单，而是团队接下来几天的协作入口。队友可以在 Notion 里查看当前进度、任务安排、优先级和后续要推进的内容，这样项目就不会只依赖聊天记录同步。

我今天更清楚地感觉到，黑客松项目需要两层结构：公开仓库用来沉淀学习记录、规则笔记和 proof；Notion 用来承载团队内部的执行计划和进度管理。一个负责复盘，一个负责推进。

对 AI Wallet Clear Intent Guard 来说，今天的进展不是新增概念，而是把本周怎么做、怎么同步、怎么推进整理清楚。接下来要把这份计划尽快转成 demo 产出。

今日记录：

[**https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-06-02.md**](https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-06-02.md)

Today I mainly completed the weekly hackathon planning table in Notion.

The table is not just a to-do list. It is the team's coordination surface for progress, tasks, priorities, and next actions. Teammates can use it to understand where the project currently stands without relying only on chat history.

I now see the project as having two layers: GitHub for public learning records, rule notes, and proof; Notion for private team execution and progress management. One supports reflection, the other supports action.

For AI Wallet Clear Intent Guard, today's progress was not adding more concepts. It was making this week's work visible and executable for the team.
<!-- DAILY_CHECKIN_2026-06-02_END -->

# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->









今天我把 6 月 1 日的三篇笔记都整理并部署到了 GitHub：一篇是 Hermes / 黑客松策略 / 本地模型共学，一篇是 VC 视角下的项目打磨与融资分享，还有一篇是以太坊中文周会。

这三篇内容看起来分散，但它们都在帮我回答同一个问题：AI Wallet Clear Intent Guard 到底该怎么做成一个有边界、可解释、可验证的 demo。共学部分提醒我 AI 应该放在哪一层，VC 分享提醒我项目必须有真实用户、真实问题和最小闭环，Base MCP 则提供了一个现实参考：AI 可以参与流程，但用户仍然保留最终签名和批准。

今天最大的收获不是又学了很多新名词，而是这些信息开始共同收缩到一个更清楚的 demo 方向上。

今日记录：

[**https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-06-02.md**](https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-06-02.md)

Today I organized and deployed three June 1 notes to GitHub: the Hermes / hackathon / local-model co-learning note, the VC perspective note on project refinement and fundraising, and the Ethereum Chinese Weekly note.

They may look like separate topics, but together they all help answer the same question: how should AI Wallet Clear Intent Guard become a bounded, explainable, and verifiable demo? The co-learning note clarifies where AI should sit, the VC note clarifies the need for real users and a minimal loop, and the Base MCP discussion offers a practical reference for keeping final approval in the user's hands.

The biggest gain today was not collecting more buzzwords. It was seeing several streams of information converge into a sharper demo direction.
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->










今天主要在做黑客松材料整理和 demo 核心规划。

我把和 Hackathon 相关的材料重新收拢了一次，重点是把任务、例会笔记和本地方向草稿拼成一套可执行的 demo 输入。今天的判断还是一样：`AI Wallet Clear Intent Guard` 最适合做成 pre-signing review layer，而不是完整钱包。真正要做透的不是系统规模，而是一个 review surface 的 story、边界和判断。

这一周我会先把 demo 的核心做清楚，再决定是从 `x402 payment request review`、`ERC-20 approve mismatch` 还是 `authority package review` 切入。无论选哪一个，demo 都要能讲明白用户意图、确定性事实、钱包策略和人工确认点。

今日记录：

[https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-05-31.md](https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-05-31.md)

Today I spent most of the day organizing hackathon materials and planning the demo core for the week.

I pulled the hackathon-related materials back into one line and treated them as input for a single demo story. My current judgment is still the same: `AI Wallet Clear Intent Guard` fits best as a pre-signing review layer, not a full wallet. What matters now is not system size, but the clarity of one review surface: the story, the boundary, and the decision.

This week I will first make the demo core concrete, then decide whether the entry point should be `x402 payment request review`, `ERC-20 approve mismatch`, or `authority package review`. Whatever I choose, the demo needs to explain user intent, deterministic facts, wallet policy, and the human-confirmation point.
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->











今天主要完成了昨天课程和例会内容的整理与部署。

我把 2026-05-29 的 Women Builders in AI x Web3 活动笔记整理成公开笔记，重点记录 open source、GitHub proof of work、community building、personal branding 和 AI + Web3 职业路径。它提醒我，Web3 builder 的成长不只是学概念，而是通过持续贡献、公开记录和帮助别人来建立信任。

我也整理并部署了 2026-05-29 的 AI x Web3 School weekly meeting 笔记。例会里最重要的部分是 Harness engineering、优秀笔记点评和 Hackathon 预告。它让我更清楚地看到：Agent 能力不是一句 prompt，而是工具、环境、权限、fallback path 和 human review 共同组成的系统。

黑客松方向上，我继续把 AI Wallet Clear Intent Guard 控制在一个小范围：签名前审查一个 wallet action 或 payment request，对比用户意图、确定性事实和 wallet policy，在不清楚或高风险时要求人工确认，并留下 audit proof。下一步等 2026-06-01 正式赛道规则出来后，再做 Cobo Agentic Wallet / agent economic 赛道对齐。

今日记录：

[**https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-05-30.md**](https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-05-30.md)

Today I mainly organized and deployed yesterday's class and weekly-meeting notes.

I turned the 2026-05-29 Women Builders in AI x Web3 event into a public note, focusing on open source, GitHub proof of work, community building, personal branding, and AI + Web3 career paths. The strongest reminder for me is that Web3 builder growth is not only about learning concepts. It is also about building trust through visible contribution, public records, and helping others.

I also organized and deployed the 2026-05-29 AI x Web3 School weekly meeting note. The most useful parts for me were Harness engineering, excellent-note review, and the hackathon preview. They made the agent boundary clearer: agent capability is not just a prompt. It is a system made of tools, environment, permissions, fallback paths, and human review.

For the hackathon direction, I kept AI Wallet Clear Intent Guard small: review one wallet action or payment request before signing, compare user intent with deterministic facts and wallet policy, require human confirmation when the action is unclear or high risk, and leave an audit proof. The next step is to wait for the official 2026-06-01 track rules, then check whether the Cobo Agentic Wallet / agent economic track is the best fit.
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->












今天我把 Week 2 的最后一段收束完成了。

Task 018 把 wallet permission 变成了明确策略：预算、allowlist、人工确认阈值、撤销和审计都必须写出来。Task 019 把安全边界从钱包扩展到 workflow，确认 prompt 不是边界，系统才是边界。Task 020 把 AI 和治理的角色分开，AI 负责整理信息，治理负责最终判断。Task 021 则把整个 Week 2 方向收成一份完整 proposal，明确 AI Wallet Clear Intent Guard 是一个 pre-signing review layer，不是一个自动签名器。

今天最大的变化不是又多了一个想法，而是这个想法终于变得足够小、足够清楚、足够能做 demo 了。

今日记录：

[**https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-05-29.md**](https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-05-29.md)

Today I finished the last stretch of Week 2.

Task 018 turned wallet permission into an explicit policy. Task 019 extended security from the wallet to the workflow. Task 020 separated AI summaries from governance decisions. Task 021 consolidated the whole week into a final proposal and made AI Wallet Clear Intent Guard feel like a real pre-signing review layer instead of a vague idea.

The biggest change today was not adding another idea. It was making the idea small enough and clear enough to build.
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->













今天完成了三条主线的整理和提交。

第一条是 `x402 Paywall + CAW Agent 自主支付闭环`。我把 autonomous payment 理解成一个受限付款流程，而不是“AI 想付就付”。Agent 可以发起请求、识别 `402 Payment Required`、读取付款要求，但是否能付款，必须由 CAW / Pact-like policy 检查预算、收款方、资源、token、网络和时间窗口。这个任务让我把 payment / commerce 从流程图推进到更接近工程系统的结构：payment requirement、policy check、settlement、delivery、audit log 和 fallback path。

第二条是 `Agent Profile 与能力声明草图`。我为 `Clear Intent Payment Review Agent` 写了一份 profile，说明它是谁、谁维护、能做什么、不能做什么、输入输出是什么、如何被验证、失败后怎么处理。今天的核心理解是：如果一个 Agent 会审查或影响付款，用户不能只知道“它能分析”，还必须知道它不签名、不绕过 wallet policy、不保证服务诚实，也不能替代人工最终判断。

第三条是 2026-05-28 co-learning 笔记。共学里最重要的提醒是：黑客松项目要先找真实场景，再匹配技术。多 agent 风险审查、AA / A2A、Agent reputation、x402、escrow、AI + rule 双模评估这些都可以成为项目材料，但第一版 demo 必须有清楚用户、清楚问题、清楚流程和清楚边界。mock flow 是可以接受的，尤其是在钱包、支付和权限场景里，mock 也是一种安全选择。

这些内容都继续推着我的 AI Wallet Clear Intent Guard 往更清楚的方向收敛：第一版 demo 不做完整钱包，不碰真实资产，而是展示一个 mock payment request + wallet policy + AI review + human confirmation + audit proof 的最小闭环。

今日记录：

[https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-05-28.md](https://github.com/pillowtalk-Qy/ai-web3-school-cohort-0/blob/main/daily/2026-05-28.md)

Today I completed three connected workstreams.

First, I completed the `x402 Paywall + CAW Agent autonomous payment loop` task. I now understand autonomous payment as a bounded payment workflow, not "AI pays whenever it wants." The agent may initiate a request, detect `402 Payment Required`, and read the payment requirement, but payment must still be constrained by CAW / Pact-like policy: budget, payee, resource, token, network, and time window.

Second, I completed the `Agent Profile and Capability Claim Sketch` task. I wrote a profile for the `Clear Intent Payment Review Agent`, including identity, maintainer, capabilities, non-capabilities, input/output schema, verification model, collaboration objects, and failure handling. The key point is that if an agent can review or influence payment, users need to know not only what it can do, but also what it cannot do.

Third, I organized the 2026-05-28 co-learning note. The most important advice was to start from a real scenario before choosing the technology stack. Multi-agent risk review, AA / A2A, agent reputation, x402, escrow, and AI-plus-rule evaluation can all be useful, but the first hackathon demo needs a clear user, clear problem, clear flow, and clear boundaries.

Together, these pushed my AI Wallet Clear Intent Guard direction toward a smaller first demo: mock payment request, wallet policy, AI review, human confirmation, and audit proof, without touching real keys, real assets, or real wallet execution.
<!-- DAILY_CHECKIN_2026-05-28_END -->

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
