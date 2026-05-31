---
timezone: UTC+8
---

# BBBINGW

**GitHub ID:** BBBINGW

**Telegram:** @hash0x666

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->
# 黑客松想法

保证agent核心配置上链，不会有恶意的注入

使用数据的记录上链，需要付钱。

效果：实现数据平权，能通过自己的数据获得稳定的收入
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->

# LLM

LLM 位在 AI x Web3 系统的理解和生成层。它负责把用户目标转成可讨论的计划，把复杂链上数据解释成人能读的语言，把文档和代码串成可执行思路。

真正的产品通常还需要这些层配合：

-   数据层：RPC、索引器、预言机、向量库、项目文档。
    
-   编排层：Prompt、Context、RAG、Agent workflow。
    
-   执行层：工具调用、钱包、Smart Account、合约交互。
    
-   安全层：Guard、simulation、权限策略、人工确认、日志。
    

LLM 越靠近执行层，系统越要把它的自然语言输出变成可验证对象。

# Token

Token 直接影响三件事：上下文能放多少、调用成本是多少、模型能不能完整看见关键信息。长文档、代码、JSON、日志和多轮对话都很容易把上下文塞满。你需要决定哪些信息原样放入，哪些先压缩，哪些交给检索系统按需取回。

**不要把“页面很短”误认为“token 很少”**。代码、JSON、长标识符、表格和混合语言文本经常比普通段落更吃 token。

# RAG

RAG 的核心不是让回答更长，而是让回答有来源、有版本、有边界。**没有 citation 和 freshness 的 RAG，只是把幻觉从模型内部搬到了检索系统里。**

一个 RAG 系统至少有三次判断：文档怎么切，查询时取哪些内容，生成时如何引用和拒答。
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->


保证agent核心配置上链，不会有恶意的注入

使用数据的记录上链，需要付钱。
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->



AI Agent 如果要读取链上状态或执行交易，必须知道自己在哪条网络上操作。主网和测试网、L1 和 L2、不同 chain id、不同合约地址，不能靠模型“猜”。

更稳妥的做法是让工具返回结构化网络信息：chain id、RPC 来源、区块高度、交易哈希、确认数、explorer 链接。Agent 的总结应该引用这些可验证信息，而不是只说“交易成功了”。

AI 负责推理，Web3 负责状态和结算

AI Agent 进入链上执行时，智能合约应该承担最终规则和约束，而不是把所有判断交给模型。模型可以帮用户理解 ABI、生成调用参数、解释交易结果、写测试用例，但合约负责执行边界。

一个稳妥的设计通常是：AI 做建议和编排，钱包做授权确认，合约做**可验证执行**，监控系统记录结果。这样即使 AI 输出不稳定，链上规则仍然有明确边界。

Chain-aware Context 是所有链上 Agent 的输入层。没有这层，Web3 Tool Use、Agent Workflow、Agent Wallet 都会建立在不可靠上下文上。

一个好的链感知上下文包应该像这样：

-   用户目标；
    
-   当前 chain id 和网络名称；
    
-   用户地址和余额；
    
-   相关合约地址、ABI、文档和风险提示；
    
-   最近交易和授权；
    
-   索引数据更新时间；
    
-   每条关键结论的 citation。
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->




## 智能合约

能合约是存储在区块链上的可执行代码，能够在满足预设条件时自动执行操作，无需人工干预。这一特性使得以太坊不仅是数字货币的载体，更是构建去中心化应用（Dapps）、去中心化金融（DeFi）、非同质化代币（NFT）等生态系统的基础设施。

先建立判断力：哪些规则适合上链，合约如何保存状态，调用如何改变状态，接口如何被其他应用组合，为什么测试和审计不能省

-   **权限必须显式**：谁能 mint、pause、upgrade、withdraw，不能靠默认信任。
    

学习 Solidity 时，不要只看语法。更重要的是理解 storage、msg.sender、modifier、event、external call、revert 和权限控制这些链上特有概念。

-   [Solidity Documentation](https://docs.soliditylang.org/)：官方语言文档，适合系统学习合约结构、类型、函数、事件、错误处理和安全注意事项。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->





## AI+基础设施

分布式计算机提供AI agent 服务。Bitensor

## AI+Agent钱包

用agent控制钱包，自动去帮你做限额的交易来套现  
coinbase Agentkit

## AI+链上分析工具

用AI去分析资金的流动、账户的关联性  
Arkham

## 智能钱包+安全助手

安全助手自动地去检测风险，辅助Agent钱包进行交易

Blockaid

## 交易所+DeFi智能风控

Chainanalysis
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->






\# Daily Note — 2026-05-24 (Sunday)

\## Week 1 — AI 基础概念卡片

\> 完成时间: 16:00

\> 任务: 用自己的话整理至少 6 个 AI 基础概念（逐概念对话 → AI 修正 → 归纳成卡片）

\---

\## ✅ 今日打卡内容

今天完成了 1 个训练营任务：\*\*整理 AI 基础概念卡片\*\*。

方式：先用自己的话回答每个概念 → 与 AI 逐概念对话修正 → 最后汇总成结构化的概念卡片。

\---

\## 🧠 10 张 AI 基础概念卡片（一句话 + 例子 + 误区）

\### 1️⃣ LLM（Large Language Model）

**一句话解释：**

基于海量文本训练的 next token prediction 模型，能生成各类文本内容而非"查数据库"。

**一个具体例子：**

问"帮我解释零知识证明"，LLM 生成看起来合理的解释 — 但它是根据训练数据中该词的上下文模式"猜"出最可能的回答，不是从知识库检索。

**常见误区/使用边界：**

LLM 不等于搜索引擎。遇到训练数据中没有的知识点会 hallucinate（幻觉）编造内容。\*\*关键输出必须自行验证。\*\*

\---

\### 2️⃣ Prompt

**一句话解释：**

给 LLM 的指令/输入，质量决定输出质量 — 核心在 **specificity（具体性）** 和 **structure（结构化）**。

**一个具体例子：**

❌ "帮我写段代码"

✅ "用 Python 写一个函数，输入 URL 返回页面 title，报错返回 None，写 docstring"

**常见误区/使用边界：**

以为 prompt 只是一段"话"。实际上有效 prompt engineering 包含三大技巧：\*\*Role（角色）\*\*、\*\*Few-shot（范例引导）\*\*、\*\*Chain-of-Thought（思维链）\*\*。

\---

\### 3️⃣ Context Window（上下文窗口）

**一句话解释：**

LLM 一次能"看到"的最大文本量（输入+输出），是\*\*短期记忆\*\*，对话一关就清空。

**一个具体例子：**

聊了 1 小时合约漏洞后问"前面那个合约地址是多少"— context window 满了被挤掉的话，LLM 会忘记或瞎编。

**常见误区/使用边界：**

❌ "Context window 越大越好"

✅ 研究发现 LLM 对窗口\*\*中间内容注意力下降\*\*（"lost in the middle"），重要放头尾。超出时的策略：\*\*RAG / Chunking / Summary\*\*。

\---

\### 4️⃣ Workflow（工作流）

**一句话解释：**

多步骤编排的预定义自动化流程 — 像地铁线路图，站点固定。

**一个具体例子：**

\`\`\`

步骤1: LLM 判断用户意图 → 步骤2: 如果是翻译则调用翻译 API → 步骤3: 格式化输出

\`\`\`

每一步写死，不会自己改路线。

**常见误区/使用边界：**

❌ "Workflow 就是让 AI 做事情"

✅ 技术语境下特指 **多步骤编排 + 数据传递 + 条件分支**。简单一问一答不算 workflow。

\---

\### 5️⃣ Agent（智能体）

**一句话解释：**

LLM 自主决定下一步做什么来达成目标 — 像打车，你给目的地，司机自己选路线。

**一个具体例子：**

"帮我找到今天以太坊的大额转账并整理成表" → Agent 自主：查 API → 数据太多 → 缩小范围 → 再查 → 生成表格 → 保存。全程不需要你指挥每一步。

**常见误区/使用边界：**

❌ "Agent = 高级 Workflow"

✅ **关键区别在谁做决策**：Workflow 路径固定（菜谱），Agent 动态决策（实习生）。Agent 强但不可预测，需 guardrails 配合。

\---

\### 6️⃣ Tool Use（工具调用）

**一句话解释：**

让"只说不做"的 LLM 拥有"手" — 通过调用外部工具（终端、文件系统、API）实际执行操作。

**一个具体例子：**

"把测试覆盖率提到 80%" → Agent 通过 `read_file` 读代码 → `terminal` 跑测试 → 实际修改文件 → 再次运行验证。每一步都是 tool call，不是"告诉你该怎么做"。

**常见误区/使用边界：**

Tool Use 赋予 Agent 真实执行能力，但也可能误用（无限循环、误改文件）。\*\*必须配合权限控制和调用次数限制使用。\*\*

\---

\### 7️⃣ AI Coding（AI 编程）

**一句话解释：**

AI 辅助或自主完成补充/生成/测试/调试代码，分三个层次。

**一个具体例子：**

\- 🟢 **补全**：写函数名后 AI 猜下几句

\- 🟡 **对话生成**：描述需求 AI 给出整段代码

\- 🔴 **自主 Agent**：给 issue，AI 自己改项目+跑测试+提 PR

**常见误区/使用边界：**

❌ "AI 写的代码可直接上线"

✅ AI 可能推荐过时 API、引入安全漏洞。\*\*AI 是 copilot，不是 autopilot\*\* — 所有 AI 代码必须人工 review。

\---

\### 8️⃣ Guardrails（护栏）

**一句话解释：**

在 AI 自由度和安全性之间设多层保护机制，防止失控或有害输出。

**一个具体例子：**

四层护栏：

\- 🛡️ **安全**：不让生成恶意内容

\- 🔐 **权限**：只能读不能删

\- 📐 **格式**：必须输出 JSON

\- 🔄 **行为**：最大调用限制、超时熔断

**常见误区/使用边界：**

❌ "Guardrails = 限制 AI，越少越厉害"

✅ 没有 guardrails 的 Agent 像没刹车跑车。\*\*Guardrails 决定了它能跑多远而不出事。\*\*

\---

\### 9️⃣ Tracing（追踪）

**一句话解释：**

像飞行记录仪一样完整记录 Agent 每一步的输入、输出、耗时、token 消耗 — 可回放、可审计。

**一个具体例子：**

Agent 跑 20 步后输出错误结果。Tracing 回放发现第 7 步传错参数 → 第 8 步基于错误数据推理 → 全跑偏。\*\*没有 tracing 只能重跑一次。\*\*

**常见误区/使用边界：**

❌ "Tracing = 出错退回上一步"

✅ **Tracing = 记录**，\*\*rollback = 回退\*\*，是不同机制。Tracing 价值在\*\*调试、成本分析、性能优化、审计合规\*\*。

\---

\### 🔟 Human-in-the-Loop（人在环）

**一句话解释：**

关键决策点需要人审批 — **最终责任归属的设计决策**，不是 AI 能力的妥协。

**一个具体例子：**

Agent 完成合约交互分析 → 生成操作建议 → **停下来等你审查** → 你批准 → Agent 才执行链上操作。不经你确认，它不动钱。

**常见误区/使用边界：**

❌ "HITL 是 AI 不够强的妥协，强了就不需要"

✅ 涉及资产转移、合同签署等高风险的场景，即使 AI 99.9% 准确，最终决策权需要留给人类。

\---

\> 📝 整理方式：先用自己的话回答 → 与 AI 逐概念对话修正 → 最后归纳成卡片

\---

\## ⏱️ 全天时间线

| 时间 | 任务 | 结果 |

|------|------|------|

| 15:30-16:00 | ① 整理 AI 基础概念卡片 | ✅ 10 张卡片完成 |

| 16:20-16:50 | ② 完成 Learning Agent Setup | ✅ 提交文档到 submissions/ |

| 16:55-17:10 | ③ 完成 AI 可交互学习产物 | ✅ CLI 概念测验工具 |

| 17:10-17:30 | ④ 完成一笔测试网交易 | ✅ Sepolia 0.01 ETH |

| 17:35-18:05 | ⑤ 部署最小智能合约 | ✅ HelloWeb3 到 Sepolia |

| 18:40-19:00 | ⑥ 整理 Web3 基础概念卡片 | ✅ 12 张卡片完成 |

| 19:00-19:15 | ⑦ 比较 EOA/智能账户/多签 | ✅ 权限差异对比文档 |

| 19:20-19:40 | ⑧ 画出 AI × Web3 交叉流程图 | ✅ Excalidraw 流程图 |

| 19:50-20:30 | ⑨ 设计受限 Web3 助手 | ✅ 钱包授权检查 Agent (CLI + 设计文档) |

| 20:40-21:10 | ⑩ 提交 Week 1 Proof-of-Work Pack | ✅ 总汇总文档 |

| 21:15-21:30 | ⑪ 发布 AI × Web3 学习总结 | ✅ README 首页更新 |

| 21:35-21:45 | ⑫ 拆解 AI × Web3 项目 | ✅ Modulus Labs 分析 |

\---

\## ✨ 今日亮点

\### 技术层面

\- 第一次发测试网交易 + 部署合约到 Sepolia

\- 理解了 MetaMask 网络切换的坑（默认在主网，需手动开启测试网）

\- 用 Excalidraw 画出了两张 AI × Web3 交叉流程图

\- 完整设计了一个 CLI 工具（钱包授权检查 Agent），包含源码扫描、额度建议、风险评级

\### 概念层面

\- **Workflow vs Agent**：关键区别在谁做路径决策（菜谱 vs 实习生）

\- **Tracing vs Rollback**：黑匣子记录不是回退机制

\- **钱包不是存钱的**：私钥存在本地，钱在链上

\- **HITL 不是 AI 能力的妥协**：是责任归属的架构设计

\### 遇到并解决的问题

1\. PoW 水龙头打币后 MetaMask 看不到余额 → 需要手动开启测试网络显示

2\. Alchemy Faucet 要求主网有 0.001 ETH → 改用 PoW 挖矿式水龙头

3\. 概念"W ordflow"最初理解太宽泛 → 逐概念对话修正后建立了精确概念边界

\---

\## 📊 仓库提交汇总（今日共 16 次 commit）

\`\`\`

daily/[2026-05-24.md](http://2026-05-24.md) # AI 基础概念卡片

daily/[2026-05-24-web3-concepts.md](http://2026-05-24-web3-concepts.md) # Web3 基础概念卡片

submissions/[learning-agent-setup.md](http://learning-agent-setup.md) # Learning Agent Setup

submissions/[interactive-learning-tool.md](http://interactive-learning-tool.md) # AI 可交互产物

submissions/[testnet-transaction.md](http://testnet-transaction.md) # 测试网交易

submissions/[deploy-smart-contract.md](http://deploy-smart-contract.md) # 合约部署

submissions/[eoa-vs-smart-account-vs-multisig.md](http://eoa-vs-smart-account-vs-multisig.md) # 账户对比

submissions/[ai-web3-cross-flow.md](http://ai-web3-cross-flow.md) # 交叉流程图

submissions/[restricted-web3-assistant.md](http://restricted-web3-assistant.md) # 受限助手设计

submissions/[week-1-proof-of-work-pack.md](http://week-1-proof-of-work-pack.md) # Week 1 汇总

submissions/[modulus-labs-analysis.md](http://modulus-labs-analysis.md) # 项目拆解

experiments/[concept-quiz.py](http://concept-quiz.py) # CLI 测验工具

experiments/[testnet-transaction.md](http://testnet-transaction.md) # 交易实验记录

experiments/ai-web3-cross-flow.excalidraw # 流程图

experiments/wallet-approval-agent.excalidraw # 助手 Workflow 图

experiments/[wallet-approval-checker.py](http://wallet-approval-checker.py) # 助手 CLI 工具

[README.md](http://README.md) # Week 1 学习总结

\`\`\`

\---

\## 💬 Check-in Draft

\`\`\`

🎓 AI × Web3 School — Week 1 Day 5: 全任务突击日

📖 今天从 15:30 到 21:45，连续完成了 Week 1 全部 12 项任务：

🧠 AI 向（3项）：

• 10 张 AI 基础概念卡片（逐概念对话修正）

• Learning Agent Setup（Hermes Agent 配置记录）

• AI 概念测验 CLI 工具（4 种出题模式）

⛓️ Web3 向（4项）：

• 12 张 Web3 基础概念卡片（含安全特别说明）

• Sepolia 测试网交易（0.01 ETH, tx: 0x52aa...670）

• 部署 HelloWeb3 合约（0x0802...20D）

• EOA / 智能账户 / 多签权限差异对比

🔀 交叉向（3项）：

• AI × Web3 最小交叉流程图（Excalidraw）

• 设计钱包授权检查 Agent（CLI 工具 + Workflow 图）

• 拆解 Modulus Labs（ZK × AI 推理验证项目）

📦 输出（2项）：

• Week 1 Proof-of-Work Pack 总汇总

• README 首页更新 Week 1 学习总结

🔑 几个关键认知更新：

\- Workflow ≠ Agent（差在谁做路径决策）

\- 钱包不存钱，钱在链上

\- HITL 不是妥协是架构设计

\- AI 可以建议但不能替我签名

#AIxWeb3School #Week1 #Foundation #Testnet #SmartContract #ZKML

\`\`\`

\---

\## Check-in Submission

\- \[ \] Submitted to WCB

\- Submission link:

\- Submitted time:
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->







**🔗 一、LLM × Cryptography 交叉疑问（6条）**  
这些是你的 PhD 视角独有的 crossover：  
**1**  
  
• #: 1  
  
• 问题: **能用 ZK proof 验证 LLM 无 hallucination 吗？**  
  
**2**  
  
• #: 2  
  
• 问题: **Session key / Agent wallet 怎么跟 tool calling 交互？** — 需不需要 prover layer？  
  
**3**  
  
• #: 3  
  
• 问题: 「Model output = verifiable objects」→ 能否用 **typed signature** 形式化？  
  
**4**  
  
• #: 4  
  
• 问题: **Hallucination ≈ Byzantine fault？** — 概念同构？  
  
**5**  
  
• #: 5  
  
• 问题: **Embedding similarity ≠ truth ≈ probabilistic verification ≠ proof？**  
  
**6**  
  
• #: 6  
  
• 问题: LLM audit trail 能否做成 **Merkle proof** 结构？  
  
**🛡️ 二、Prompt 作为接口 vs 安全边界（4条）**  
**7**  
  
• #: 7  
  
• 问题: 安全链 `Prompt→Context→Model→Code→Guard→Human` 各层责任边界在哪？  
  
**8**  
  
• #: 8  
  
• 问题: Few-shot 的维护成本怎么跟 eval 配合管理？  
  
**9**  
  
• #: 9  
  
• 问题: Instruction 四段式写法够用吗？  
  
**10**  
  
• #: 10  
  
• 问题: 「出事了人兜底」vs「每层可验证」的界限？  
  
**🧩 三、Context & Agent 结构追问（3条）**  
**11**  
  
• #: 11  
  
• 问题: **Agent 前必须先读 Context 吗？** → 是，你当时自己纠正了我 🙂  
  
**12**  
  
• #: 12  
  
• 问题: 钱包授权 Agent 的 **Context Spec 字段分类** — 实时/缓存/不可信  
  
**13**  
  
• #: 13  
  
• 问题: **可信数据源 vs 不可信外部内容** — 谁来做判断？
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->








# Context

Note

Context 是模型这一次能看到、能使用、能被影响的信息空间。真正难的不是把更多内容塞进去，而是把系统规则、用户目标、历史状态、工具结果和外部文档分清楚。

在实际产品里，context window 应该配合检索、摘要和结构化数据使用。关键状态直接给，长文档按需取，低可信内容隔离标注。

一个稳定的工具型 Agent 上下文，通常不只是“用户问题 + 一段 JSON”。它还应该包括：

-   当前任务状态
    
-   工具返回结果
    
-   相关日志或证据
    
-   可信数据来源
    
-   外部检查结果
    
-   用户原始意图
    
-   系统禁止事项和输出 schema
    

**Context Engineering 的目标不是塞满窗口，而是让模型在正确的信息层级里工作。**

Memory 不能替代实时授权。用户过去允许某个动作，不代表现在仍然允许。**所有涉及身份、权限、资产或外部副作用的记忆，都必须重新绑定当前会话和当前授权。**

一个靠谱的 Agent 上下文通常会分层：

-   指令层：系统规则、工具使用规则、禁止事项。
    
-   任务层：用户目标、本次会话参数。
    
-   事实层：链上状态、工具结果、simulation。
    
-   知识层：文档、标准、论坛、历史案例。
    
-   记忆层：用户偏好和项目配置。
    

层级越清楚，后续越容易做权限控制、prompt injection 防护和审计。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->









今天没有太多时间看东西，就查了一些名词。

# [RPC](https://aiweb3.school/zh/handbook/web3/indexing/#rpc)

RPC 是应用和节点交互的接口，用来读取链状态、查询日志、估算 gas 和发送交易。

```
你的钱包/MetaMask/dApp  ← →  RPC  ← →  区块链节点
                                    ↑
                              "帮我查一下这个地址的余额"
                              "帮我估算一下这笔 gas"
                              "帮我把这笔交易广播出去"
```

# Slashing

罚没

```
正常情况：
  你被选中做记录 → 好好记 → 其他人检查没问题 → 下周继续

被 Slashing 的情况：
  ❌ 你同一轮提议了两个不同的区块（搞分裂）
  ❌ 你明明没被选中，却假装被选中到处发假记录
  ❌ 你离线太久不工作（某些链会罚）

处罚：
  ⚔️ 系统砍掉你一部分质押金（最高砍到全部！）
  🚫 你可能被踢出验证者队伍
```

# MEV

MEV = **Maximal Extractable Value**（最大可提取价值）  
**MEV 就是：你能通过**重新排列交易顺序**赚到的额外钱。**  
**经典例子：三明治攻击**

```
你看到一个交易在 mempool 里：
  「小明的交易：用 100 USDC 买 1 ETH」

如果你有权力调整顺序，你可以这样做：
  
  ① 你先买（价格推高）     ← 你的交易
  ② 小明买（在高价买入）   ← 小明的交易（被坑）
  ③ 你再卖掉（赚差价）     ← 你的交易

  💰 你赚了小明多付的那部分差价
```

# L2

Layer 2 通常把大量交易放到主网之外执行，再把结果或证明提交回主网。对用户来说，L2 常见优势是费用更低、确认更快；但也多了桥、提现等待、排序器和跨链状态同步等复杂性。

产品设计时不能只写“支持 Ethereum”。

## 怎么写

如果支持多个 L2，需要清楚展示当前网络、资产在哪条链、桥接需要多久、合约地址是否不同。

## [Rollup](https://aiweb3.school/zh/handbook/web3/network/#rollup)

**难度：高级。** Rollup 是主流 L2 扩展路线，把执行搬到链下或 L2，再把数据和结果提交到 L1。

常见 rollup 类型包括 optimistic rollup 和 zero-knowledge rollup。它们在证明方式、提现延迟、数据可用性、开发体验和生态工具上都有差异。

对 builder 来说，先抓住一个判断：Rollup 降低了单笔交易成本，但没有消除链上系统复杂度。你仍然要处理跨链资产、RPC、浏览器、合约地址、桥接风险和用户确认。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->










🎓 AI × Web3 School — Phase 1 Day 3: Prompt

📖 读完了 Prompt 章节：

• Prompt = 接口设计，不是安全边界

• Instruction 分四段：目标、输入、禁止行为、输出格式

• Few-shot 好用但有维护成本

• Structured Output 让模型输出可被代码校验

🔧 完成最小实践：交易风险摘要 Prompt + 3组测试用例

🌐 听了 Web3 运行原理课

🎯 接下来：Web3 Network 章节 + 论文 Intro

#AIWeb3School #Cohort0 #Phase1 #Prompt
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->











🎓 AI × Web3 School — Phase 1 Day 3: Tool Workflow Insights

📖 Did not read Prompt chapter today (deferred) — instead explored practical AI tool workflows from the community:

🔧 Key findings:

• Cursor (CC) + CC Switch + Obsidian = powerful personal AI knowledge base

• Codex best for writing tight instructions; DeepSeek best for executing them

• Chinese models (DeepSeek) need very clear, detailed specs to avoid hallucination

• Avoid "new tech" — bleeding-edge APIs are often outside training data

💡 The "orchestrator vs executor" split maps directly to Agent design in Web3: write tight specs, then execute.

🎯 Next: Phase 1 — Prompt chapter (tomorrow)

#AIWeb3School #Cohort0 #Phase1 #ToolWorkflow
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->












# [一个链上 Agent 的基本工作流](https://aiweb3.school/zh/ai-agents/#%E4%B8%80%E4%B8%AA%E9%93%BE%E4%B8%8A-agent-%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%B7%A5%E4%BD%9C%E6%B5%81)

一个典型的链上 Agent，可以拆成下面几步：

1.  读取信息：钱包状态、链上数据、协议价格、用户目标
    
2.  理解上下文：判断当前条件、风险和机会
    
3.  生成计划：决定该执行什么动作
    
4.  调用工具：查询合约、生成交易、请求签名
    
5.  执行与记录：提交交易，并跟踪结果
    

这条链路里，真正复杂的地方通常不是“写一句 Prompt”，而是如何把判断、权限和执行安全地接起来。

## 权限

至少要先定义清楚：

-   哪些动作只允许建议
    
-   哪些动作必须二次确认
    
-   哪些动作可以自动执行
    
-   失败后如何停止或回退
    

没有这一层，Agent 越强，风险越大。

## 举例

如果用户说：“帮我把稳定币按低风险策略分配到几个协议里。”

一个链上 Agent 可能会：

-   读取用户当前钱包和授权状态
    
-   获取协议利率和风险指标
    
-   生成几种候选方案
    
-   根据用户设定的约束选择方案
    
-   请求用户确认
    
-   最后按预设规则执行交易
    

这里真正的产品能力，不在一句回答，而在整条“理解—规划—执行”链路。

# LLM

LLM 位在 AI x Web3 系统的理解和生成层。它负责把用户目标转成可讨论的计划，把复杂链上数据解释成人能读的语言，把文档和代码串成可执行思路。

真正的产品通常还需要这些层配合：

-   数据层：RPC、索引器、预言机、向量库、项目文档。
    
-   编排层：Prompt、Context、RAG、Agent workflow。
    
-   执行层：工具调用、钱包、Smart Account、合约交互。
    
-   安全层：Guard、simulation、权限策略、人工确认、日志。
    

LLM 越靠近执行层，系统越要把它的自然语言输出变成可验证对象。

# Token

Token 直接影响三件事：上下文能放多少、调用成本是多少、模型能不能完整看见关键信息。长文档、代码、JSON、日志和多轮对话都很容易把上下文塞满。你需要决定哪些信息原样放入，哪些先压缩，哪些交给检索系统按需取回。

**不要把“页面很短”误认为“token 很少”**。代码、JSON、长标识符、表格和混合语言文本经常比普通段落更吃 token。

# RAG

RAG 的核心不是让回答更长，而是让回答有来源、有版本、有边界。**没有 citation 和 freshness 的 RAG，只是把幻觉从模型内部搬到了检索系统里。**

一个 RAG 系统至少有三次判断：文档怎么切，查询时取哪些内容，生成时如何引用和拒答。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
