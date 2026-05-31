---
timezone: UTC+8
---

# Paxon Qiao 乔鹏军

**GitHub ID:** qiaopengjun5162

**Telegram:** @Qiao4812

## Self-introduction

Web3 开发者 Python Go  Rust  Solidity

## Notes

<!-- Content_START -->
# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->
**2026-05-30 (Day 13) — Agentic Commerce（智能体商业）**  
  
**今日学习：**  
\- Handbook Bridge Bonus — Agentic Commerce（智能体商业）  
\- Bridge 16/15（超纲读完 Bonus 章）✅  
  
**核心原则：责任分离**  
\- Agent 可以替用户发起商业动作，但不能替用户承担无限责任  
\- 商业自动化的核心不是让 Agent 随便花钱，而是把购买意图、预算、验收标准和争议规则变成结构化协议  
  
**购买三阶段：**  
\- 购买前要有 Intent：买什么、为什么买、最多花多少、接受什么结果  
\- 购买中要有约束：报价、有效期、服务条款、数据使用范围、退款条件  
\- 购买后要有证据：任务结果、收据、日志、验收记录、争议路径  
  
**Payment Intent**  
\- 用户授权 Agent 花钱之前的结构化表达：service\_capability、criteria、budget cap、acceptance rules、dispute timeout  
\- 把每一次 Agent 购买限制在 bounded risk envelope 内，就算模型跑偏或被 prompt injection，损失上限也已知  
\- 最关键的原子单元——把"用户想买"到"Agent 执行"之间的信任缺口用结构化协议填上  
  
**Budget Control**  
\- Agentic Commerce 的安全阀。Agent 是 constrained spender，不是 unlimited wallet  
\- Policy 层是唯一跟 AI 模型无关的组件——确定性代码可审计  
  
**Proof of Task Completion**  
\- 不是单一证明，而是一组证据。最务实路径：服务方签名 + 链上哈希验证（input hash、output hash、timestamp），成本低且事后争议有锚定  
  
**On-chain Receipt & Escrow**  
\- 链上收据只保存足够双方事后核对的证据  
\- Escrow Flow：锁定资金 → 服务交付 → 验收 → 释放。超时自动回滚是最后防线  
  
**项目切入方向分析：**  
\- 方向一：帮 Agent 购买 API/数据/推理（用户获取成本高）  
\- 方向二：帮服务方接受 Agent 支付并自动交付 — 最快 MVP，Agent Payment Gateway  
\- 方向三：帮用户管理预算、权限和消费审计 — 最强 defensibility  
\- 隐藏方向：Agent Commerce Discovery Layer — agent-oriented marketplace  
  
**今日收获：** Agentic Commerce 把 Agent、钱包、权限、支付、托管、声誉和验证串成一条商业闭环。核心设计原则是"替用户发起动作但不替用户承担无限责任"，所有架构都围绕 bounded risk envelope 展开。Bridge 进度 16/15。
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->

**2026-05-29**  
<!-- DAILY\_CHECKIN\_2026-05-29\_START -->  
**今日学习：3 章（AI 主权、治理 AI、去中心化 AI）— Bridge 完結 🎉**  
  
**AI 主权（AI Sovereignty）**  
核心是让用户保留退出、迁移、选择和验证的能力。越靠近用户决策和资产的 AI，越不能只依赖平台承诺。User Control 让用户能查看/修改/撤销 Agent 权限和数据使用。Data Portability 让偏好、记忆、任务历史和凭证可带走。Model Choice 支持按任务选模型。Local-first AI 优先本地处理敏感数据。Censorship Resistance 关注服务/模型/数据/身份是否会被单点封锁。d/acc = defensive accelerationism，加速防御性、去中心化和人类增强技术。CROPS 概括以太坊核心属性：Censorship resistance、Open source、Privacy、Security。Agent Wallet 让用户控制权限，Verifiable AI 让关键输出可证明，AI Privacy 让数据使用有边界，Agent Identity 让 Agent 跨平台存在。没有主权设计，AI×Web3 容易变成"用链上资产喂给更中心化的 AI 平台"。  
  
**治理 AI（Governance AI）**  
核心是提高公共决策的信息质量，不是替代人的政治判断。AI 输出必须保留来源和不确定性。Proposal Summary 把长提案整理成目标/背景/预算/执行计划/风险。Meeting Action 把会议讨论转成可执行事项。Contribution Graph 帮助社区看到谁在做什么、哪些工作被低估。Budget Check 审查资金申请的清晰度和可追踪性。Source Traceability 是治理 AI 的底线。Deep Funding 关注公共物品的复杂资金分配。Plurality 强调保留差异、协调合作而非平均意见。Governance AI 连接 AI 总结能力和 Web3 公共决策，读取链上投票、论坛讨论、预算流向和贡献记录。但 AI 辅助工具必须透明、可质疑、可复核，不能悄悄替用户投票或隐藏反对意见。  
  
**去中心化 AI（Decentralized AI）**  
核心不是"中心化一定不好"——而是开放网络在哪些环节能提供更好的可验证性、可组合性和抗单点控制。真正需要去中心化的是关键资源和关键决策的控制权，不一定是模型本身。Model Market 让模型像服务一样被发现/比较/调用/付费，路由层决定便宜/可靠/拒绝的策略。Data Market 处理数据授权、定价、验证和复用。Compute Market 把 GPU/CPU/存储/带宽变成可购买资源。Inference Network 拆分模型推理为网络服务。Model Routing 是 AI 应用的调度器。Quality Benchmark 回答模型/节点/数据源是否可靠。Settlement 是走向可持续网络的关键。判断去中心化 AI 项目的四个问题：去中心化什么？链上负责什么？比中心化改善了具体什么？质量波动和治理成本是否值得？  
  
**今日收获：** Sovereignty（价值层）、Governance（应用层）、Decentralized（基础设施层）三层递进，构成 AI×Web3 完整架构视角。Bridge 15 章全部完成 ✅  
<!-- DAILY\_CHECKIN\_2026-05-29\_END -->
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->

### 2026-05-18 (Day 1) — LLM, Prompt, Context & First AI Tool Practice

**今日学习内容：**
- Handbook: LLM 基础 — 概率模型 vs 知识库，Token & Context Window
- Handbook: Prompt 基础 — 结构化 Prompt，AI × Web3 安全风险
- Handbook: Context 基础 — 可信度分层，信息过期问题
- 实践：用 Hermes Agent 查询以太坊最新区块 (Block #25,118,645)

**笔记摘要：**
- LLM 不是数据库，输出需要验证 — 链上场景尤其重要
- 好的 Prompt = 任务目标 + 输出格式 + 边界条件
- Context 可信度：工具返回 > 模型生成 > 用户提供
- 完成最小链路：用户意图 → AI 规划 → 工具执行 → 验证结果

**明日计划：**
- Handbook: RAG, Agent
- Web3 测试网交互

### 2026-05-31 — Dev Tooling：AI 在 Web3 开发工作流里的真实价值

**今日学习内容：**
- AI 开发工具的核心价值是减少错误理解和不可逆操作，而不是生成更多代码
- Docs-to-Agent：把协议文档、SDK 文档、EIP、README、代码示例、changelog 转成 Agent 可查询知识库
- Contract Reading Assistant：不只会概括“合约用途”，还要解释权限、状态变量、关键函数、事件、外部调用与潜在风险
- Transaction Interpreter：把 calldata、事件日志、token transfer、approval、合约调用翻译成人类可读操作说明
- Test Generator：AI 补测的价值在边界、权限、失败路径和经济假设，不只是 happy path
- 部署清单：Web3 部署是最不该临场发挥的环节，AI 应该输出可执行 checklist，并核验 hash、地址、命令与负责人
- SDK Integration Assistant：辅助钱包、RPC、合约调用、事件监听和后端服务的集成

**笔记摘要：**
- Dev Tooling 是 AI x Web3 最容易产生真实生产力的方向之一
- 不需要创造新协议，也能显著降低开发、审计、部署和运维成本
- 强产品往往是把 AI 嵌入真实 workflow：读文档、查源码、跑测试、解释交易、生成部署清单、检查日志、给出可复核证据
- 要避开“聊天式代码生成”，关键是把 AI 放进可执行、可审计的工具链路里

**今日学习：3 章（可验证 AI、AI 安全、AI 隐私）**  
  
**可验证 AI（Verifiable AI）**  
核心是让"相信模型"变成"验证证据和约束"。验证成本必须和输出影响力匹配。TEE 用可信执行环境隔离代码和数据，通过 attestation 证明程序在特定环境中运行。ZK 允许证明计算满足条件而不泄露全部输入或重新执行完整计算。zkML 是把机器学习推理转成可证明计算的方向。Proof of Inference 证明某个输出确实来自某个模型、输入和执行环境。Verifiable Compute 关注链下计算结果能被链上或第三方验证。Benchmark 不能替代任务级验证，AI×Web3 benchmark 应包含正常样本、边界样本和攻击样本。Audit Trail 是最基础最实用的可验证层，日志要避免泄漏隐私和 secret，敏感原文加密保存，公开层只放 hash 和摘要。成熟系统混合使用：日志用于复盘，attestation 用于服务证明，ZK/TEE 用于高风险场景，challenge 用于处理争议。  
  
**AI 安全（AI Security）**  
重点是把模型放在隔离层里：它可以建议但不能绕过权限，可以读取上下文但不能相信所有上下文，可以调用工具但工具要有 policy 和日志。AI x Web3 安全核心是让不可信输入无法直接变成不受限执行。Prompt Injection 是恶意内容试图改变模型原始任务或安全规则。Tool Abuse 是模型或攻击者诱导系统滥用工具能力。Malicious Context 是看似普通的上下文里包含攻击指令或误导数据。链上事实应优先从 RPC、explorer、verified source 和索引层读取。Key Safety 要确保私钥、API key 等不会进入模型上下文或日志，Agent 需要代表用户操作时应优先使用 Smart Account policy 或 session key。系统设计目标不是让模型永不犯错，而是让模型犯错时无法直接造成不可接受损失。  
  
**AI 隐私（AI Privacy）**  
AI x Web3 的隐私问题不是单点数据泄漏，而是链上公开身份和 AI 私有上下文被拼接。模型只应该看到完成任务所需的最小数据。Local AI 把部分推理放在用户设备减少敏感数据外发。Secret Management 处理私钥、API key、wallet credentials 等。Minimal Disclosure 只暴露完成任务所需的最少信息。Encrypted Data 可以保护存储和传输中的隐私但不能自动解决模型使用时的泄漏。尤其要注意链上公开数据和私有数据的组合风险，单看某个地址可能只是公开信息，但和聊天记录、邮箱、地理位置、社群身份结合后就可能变成真实身份画像。  
  
**今日收获：** Verifiable AI、AI Security、AI Privacy 三者构成 Agent 可信运行的基础三角——验证、安全、隐私。系统设计的核心思路是"不追求永不犯错，而是让犯错时损失可控"。
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->



**Day 10（5/27）— AI × Web3 Bridge 三章**  
  
**① Agent Identity（智能体身份）**  
Agent 身份是把 Agent 从临时会话变成可发现、可验证、可追责的经济参与者。核心要素：  
\- Agent Profile — 公开说明文件  
\- Capability — 能完成什么任务、需要哪些输入和权限  
\- Service Endpoint — 外部系统调用 Agent 的入口  
\- Registry — 登记、发现和更新 Agent 身份  
\- DID + Verifiable Credential — 去中心化身份和可验证声明  
\- A2A — Agent 之间如何发现、通信、协商和交换结果  
\- Ownership — 谁能更新 profile、收款地址、endpoint  
  
Agent Identity 是 Trust、Machine Payment 和 Agentic Commerce 的前置条件。但身份不等于可信，它只是信任系统的第一层。  
  
**② Agent Trust & Reputation（信任与声誉）**  
可信度来自可验证行为，不是自我声明。系统组件：  
\- Reputation / Review / Attestation / Stake / Slashing / Validation / ERC-8004  
\- Stake 设计需明确：抵押什么资产、锁多久、释放/罚没条件  
\- 连接 Agent Identity、Settlement & Escrow 和 Machine Payment  
\- 不要过度相信声誉分数，应同时看身份、历史、评价者、证明、stake、争议记录  
  
**③ AI Oracle（AI 预言机）**  
不是让模型替合约做判断，而是把模型判断变成可记录、可验证、可挑战的链上输入。核心：Model Result 需包含模型版本、prompt 模板、输入引用。风险包括模型错误、输入污染、prompt injection、经济攻击。争议窗口按价值分层：小额短窗口，高价值长窗口，高争议人工评估。  
  
**Bridge 进度：8/15 ✅**
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->




**Day 9 (5/26) — AI × Web3 Bridge：Agent Wallet / Machine Payment / Settlement & Escrow**  
  
**今日阅读**  
Handbook Bridge 三章：  
\- Agent Wallet（智能体钱包）  
\- Machine Payment（机器支付）  
\- Settlement & Escrow（结算与托管）  
  
**Agent Wallet 核心**  
Session Key 是时间绑定的能力令牌——允许 Agent 在指定时段和范围内自动执行。Agent 生成候选动作，Guard 拒绝越界动作。Guard 分两层：链上（合约规则检查 calldata/target）和链下（单笔/日累计限额）。所有自动化权限必须有用户可见的关闭入口。AI ↔️ Wallet 的接口必须是结构化 Action Schema，不是自然语言。  
  
**Machine Payment 核心**  
把"付款意图"和"实际结算"拆开，每一步都有凭证。意图 → Policy Check → Quote Lock（服务方绑定承诺，不能改价）→ Escrow Hold → 服务交付 → 结算释放。Policy 层是唯一跟 AI 模型无关的组件——确定性代码可审计可形式化验证。  
  
**Settlement & Escrow 核心**  
结算不是"打钱"，而是把任务/交付/验收/付款绑定成可验证流程。ERC-8004（Agent 身份/声誉）提供"这个人是谁"；ERC-8183（任务/支付/交付）定义"要做什么、怎么付、怎么验收"。两者互补。Escrow 锁资金直到条件满足，超时自动回滚是 Agent 的最后防线。  
  
**三章联系**  
递进权限粒度：Agent Wallet（身份+权限，Session Key 限制）→ Machine Payment（意图+结算，Policy 限制）→ Settlement & Escrow（交付+验收，Escrow 保证）  
  
**Bridge 进度**  
9/12 ✅（Chain-aware Context, Web3 Tool Use, Agent Workflow, Agent Wallet, Machine Payment, Settlement & Escrow 已完成）  
剩余：Agent Identity, Trust & Reputation, Verifiable AI, AI Security, AI Privacy, Governance AI
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->





2026-05-25 (Day 8) — Week 2 开篇：AI × Web3 Bridge

**今日学习内容：**  
\- Handbook Bridge — Chain-aware Context（链感知上下文）：链上状态如何进入 Agent 上下文  
\- Handbook Bridge — Web3 Tool Use（Web3 工具调用）：RPC、钱包、合约工具如何被 Agent 调用  
\- Handbook Bridge — Agent Workflow（智能体工作流）：哪些步骤适合自动化，哪些必须 human-in-the-loop

**笔记摘要：**  
\- 核心原则：模型可以选择工具，但工具必须用确定性边界限制模型。写操作必须受白名单合约、白名单方法和额度策略约束  
\- 写交易前检查清单：chain ID、合约地址、ABI method/args、value/token 预估、gas 估算、simulation、policy 检查、用户授权、交易追踪  
\- Agent Workflow 是把概率模型放进确定性流程里 — 只读分析自动执行，小额白名单按 session key 执行，高风险交易必须人工确认，超出 policy 直接拒绝  
\- 人工确认的关键不是"有没有确认"，而是人确认时能否看懂资产变化和风险  
\- Trace 调试框架：日志应回答模型看到了什么、调用了什么工具、工具返回了什么、系统有没有拦截、用户确认了什么  
\- 四层关系：Chain-aware Context 提供事实，Web3 Tool Use 提供能力，Agent Wallet 提供权限边界，Workflow 把它们组织成可执行但可控的路径

**明日计划：**  
\- 继续 AI × Web3 Bridge 剩余章节

**2026-05-25 (Day 8) 打卡总结：**  
  
📖 **Bridge 学习：**  
\- Chain-aware Context ✅  
\- Web3 Tool Use ✅  
\- Agent Workflow ✅  
  
🎯 **WCB 任务：+80pt**  
\- 社群自我介绍（10pt）  
\- Web3 概念卡片（10pt）  
\- EOA vs 智能账户 vs 多签（30pt）  
\- 合约部署证明（30pt）
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->







026-05-24 (Day 7) — Week 1 收尾：Web3 基础扫读，双基础通关  
  
**今日学习内容：**  
\- Handbook Web3 — Network（网络）：区块、共识机制、L2、RPC 与链上状态环境  
\- Handbook Web3 — Account Abstraction（账户抽象）：Smart Account 的 Session Key + Policy 权限模型  
\- Handbook Web3 — DeFi（去中心化金融）：AMM 常数积模型、借贷超额抵押、流动性挖矿  
\- Handbook Web3 — Oracle（预言机）：链外数据上链信任模型——AI 输出 + 来源记录 + 置信度 + 挑战机制  
\- Handbook Web3 — Indexing（索引）：链上事件/交易整理成 queryable 结构化数据层  
\- Handbook Web3 — Security（安全）：模型建议 → 工具返回事实 → policy 限制权限 → simulation 预演 → human check → monitoring 记录  
  
**笔记摘要：**  
\- 本周完成 AI 基础 11 章 + Web3 基础 10 章，双基础全部通关  
\- 核心框架：「AI 做建议和编排 → 钱包做授权确认 → 合约做可验证执行 → 监控记录结果」  
\- Oracle → AI 信任链路：AI 给出结果，系统记录来源和置信度，高风险引入 human-in-the-loop、挑战期、经济惩罚  
\- Security 流水线：模型可以建议，工具返回事实，policy 限制权限，simulation 预演结果，human check 确认高风险动作，monitoring 记录执行后果  
\- Account Abstraction 的灵活权限模型是 Agent Wallet 的核心基础设施  
  
**明日计划：**  
\- 进入 AI × Web3 Bridge 章节  
\- 整理 Week 1 学习总结
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->








2026-05-23 (Day 6) — Web3 基础：密码学 → 钱包 → 智能合约 → 开发栈  
  
**今日学习内容：**  
\- AI 基础 11 章全部完成，今天扫 Web3 基础  
\- 密码学 — 哈希函数、非对称加密、数字签名  
\- 钱包 — 身份与签名入口，授权确认机制  
\- 智能合约 — 链上规则部署、调用、可验证执行  
\- 开发栈 — Foundry/Hardhat、前端 SDK、RPC 节点  
  
**笔记摘要：**  
\- AI×Web3 四层架构：AI 做建议和编排 → 钱包做授权确认 → 合约做可验证执行 → 监控记录结果  
\- 密码学原语是 Agent 签名授权和链上验证的底层基础  
\- Agent 场景下钱包的 Session Key、限额、时间范围是关键设计点  
\- 开发栈提供 Agent 调用链上状态的工具基础设施（RPC、索引、SDK）  
  
**明日计划：**  
\- 继续 Web3 基础：账户抽象 / DeFi / Oracle 等  
\- 目标进入 Bridge 层（Chain-aware Context、Agent Wallet）
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->









026-05-22 (Day 5) — Evaluation, Fine-tuning, Inference & PoW Pack  
  
**今日学习内容：**  
\- Handbook: Evaluation（评估）— 把主观感受变成可测量、可重复、可回归的方法  
\- Handbook: Fine-tuning（微调）— 先有 eval 再谈微调，先修数据再修模型  
\- Handbook: Inference（推理服务）— 模型能力只有被稳定、可控、可观测地调用，才算进入产品  
\- Week 1 Proof-of-Work Pack (40pts) — 已提交  
  
**笔记摘要：**  
\- Evaluation 核心链条：Harness(跑分框架) → Golden Set(测试样本) → LLM-as-Judge(模型评分) → Regression(防修A坏B) → Observability(线上追踪)。不能被重复测量的AI行为就不能被稳定改进  
\- Fine-tuning 不是第一步，要先排除prompt/context/RAG/eval的问题。SFT对数据质量极度敏感，LoRA降低实验成本但任务定义和质量仍决定效果。绝对不能用微调存实时知识  
\- Inference 三层选择：API Model(上手快但需处理限速/重试/成本)、Local Model(隐私优先但受显存和并发限制)、Quantization(FP16→INT4 取舍体积/速度/质量)  
\- 踩坑记录：Hermes默认用浏览器搜索，查房价时不断启动无头浏览器被验证码拦截。配置Tavily Search API为web.backend后解决  
  
**明日计划：**  
\- 快速过Web3基础9章（概念都会但补一遍）  
\- 完成后进入Bridge层（AI×Web3交叉概念）
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->










2026-05-21 (Day 4) — MCP & Vibe Coding 学习  
  
**今日学习内容：**  
  
\- Handbook: MCP (Model Context Protocol) — Agent 与工具的标准通信协议  
\- Handbook: Vibe Coding — 方向/约束/验收 由人负责，Agent 负责生成/修改/执行  
  
**笔记摘要：**  
  
\- MCP 三层架构：Host - Client - Server，支持文件系统、数据库、API 等工具调用  
\- Vibe Coding 要点：任务要小、上下文要准、验证要硬  
\- 已完成实践：用户意图 → AI 规划 → 工具执行 → 链上验证 (Solana Devnet SPL Token)  
  
**明日计划：**  
  
\- AI 可交互学习产物  
\- AI × Web3 最小交叉流程图  
\- 20:00 参加直播 | AI 下乡计划 | AI 在 Web3 的应用
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->











**2026-05-19 (Day 2) — RAG, Agent & Frameworks**

**Handbook 学习：**

\- **RAG**：检索增强生成，解决 LLM 知识截止和幻觉

\- **Agent**：LLM + Tool Use + 记忆 + 规划，ReAct 模式

\- **Frameworks**：Agent 框架概览，对比设计哲学

\- ✅ 完成 AI 基础全部核心章节（6章）

**晚间活动：**

\- 参加 AI Agent 入门：Hermes 从 0 到 1 讲座

\- 了解 Hermes 架构（Gateway → Agent Core → Tools → Skills）

**实践规划：**

\- 讨论了 RAG Agent CLI demo 方案，准备 Day 3 动手搭建

日期： 2026-05-20 (Day 3)

学习内容：

\- 读 Handbook：Vibe Coding（氛围编程）

\- 实践：Solana Devnet 创建 SPL Token

学习总结：

Vibe Coding 不是"把需求丢给 AI 等代码"，而是人负责方向/约束/验收，Agent 负责生成/修改/执行。关键：任务要小、上下文要准、验证要硬。

实践：

在 Solana Devnet 上创建了 SPL Token "qintuobang"（QINTUOBANG）：

\- Token Mint: CU1LRRpuWkhXpNP5dbBJHVpbVSpvnEJNsom2sZGWcPq3

\- 铸造 1,000,000 到账户

\- 完成完整链路：用户意图 → AI 规划 → 工具调用 → 链上执行 → 可验证记录

明日计划：

读 MCP，进入 AI × Web3 Bridge
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->













2026-05-18 (Day 1) — LLM, Prompt, Context & AI Tool Practice  
  
今日学习：  
  
Handbook: LLM 基础  
\- LLM 是概率模型，不是知识库  
\- Token 是基本单位，Context Window 限制模型一次能看的多少  
\- 知道什么时候该信 LLM、什么时候必须验证  
  
Handbook: Prompt 基础  
\- 好 Prompt = 明确任务目标 + 输出格式 + 边界条件  
\- 结构化 Prompt 比自然语言更稳定  
\- AI x Web3 中 Prompt 也可能是攻击面（Prompt Injection）  
  
Handbook: Context 基础  
\- 模型看到的全部信息 = System Prompt + 对话历史 + 检索结果  
\- 链上数据有过期时间，信息可信度需分层  
\- 可信度排序：工具返回 > 模型生成 > 用户提供  
  
实践：AI 工具调用  
\- 用 Hermes Agent 查询以太坊最新区块 -> Block #25,118,645  
\- 验证了 LLM + Tool Use 的完整链路  
\- 配置了 WCB Agent API Key，了解 Agent 如何调用平台 API  
  
明日计划：  
\- Handbook: RAG、Agent  
\- Web3 测试网交互
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
