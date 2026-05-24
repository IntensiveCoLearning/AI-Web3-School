---
timezone: UTC+5
---

# Eeeeye

**GitHub ID:** Eeeeye

**Telegram:** @Eeeeye

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->
[https://github.com/Eeeeye/ai-web3-school-cohort-0/tree/master/experiments/tx-lifecycle](https://github.com/Eeeeye/ai-web3-school-cohort-0/tree/master/experiments/tx-lifecycle)
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->

# AI 基础 — Handbook 速通笔记

> 来源：[https://aiweb3.school/zh/handbook/](https://aiweb3.school/zh/handbook/) · 共 11 节，按推荐阅读顺序排列

* * *

## 核心阅读顺序

```
Context → RAG → Agent → MCP → LLM → Prompt → Frameworks → Vibe Coding → Evaluation → Fine-tuning → Inference
```

* * *

## 1\. Context（上下文）⚠️ 精读

**一句话：** 模型只基于它能看到的东西行动。Context 就是它这一次能看到的全部。

**核心概念：**

-   **Context Window**：一次请求能放多少内容。大不等于好，模型可能"看见了但没抓住重点"
    
-   **Context Engineering**：上下文要有层级——系统规则、用户目标、链上状态、检索结果、工具返回要分区放
    
-   **Memory**：跨请求保存用户偏好、历史任务，但不能变成隐藏授权。过去的允许 ≠ 现在的允许
    
-   **Knowledge Base**：外部知识库（文档、SDK、FAQ），必须标注来源、版本、更新时间
    

**对 AI×Web3 的意义：** Context 决定模型看到的是链上事实还是用户幻想。分层：指令层 → 任务层 → 事实层 → 知识层 → 记忆层

→ 关联：[Chain-aware Context](https://aiweb3.school/zh/handbook/bridge/chain-aware-context/)

* * *

## 2\. RAG（检索增强生成）⚠️ 精读

**一句话：** 不是"给模型接个向量库"就完事了。是取回 → 筛选 → 引用 → 交给模型的证据链。

**核心概念：**

-   **Chunking**：长文档切块。技术文档按结构切（标题/函数/小节），不要按固定字数
    
-   **Vector DB**：存 embedding + metadata（来源、版本、可信等级），先过滤再排序
    
-   **Retriever**：不只是语义搜索，用户问版本/时间/地址时要加 metadata filter
    
-   **Rerank**：候选结果二次排序，把更可信的排前面
    
-   **Citation**：答案里关键结论要能追溯到原文。没有 citation 的 RAG = 幻觉搬家
    

**第一性原理：** RAG 可靠性取决于证据链，不取决于"用了向量库"这个名词。

* * *

## 3\. Agent（智能体）⚠️ 精读

**一句话：** Agent = 能持续调用工具、读取状态、调整步骤的 AI 系统。关键不在"像人"，在"有约束的执行循环"。

**核心概念：**

-   **Tool Use**：工具让 Agent 从"回答"变"做事"。但工具也放大风险——读网页 vs 写数据库 vs 发交易，风险完全不同
    
-   **Planning**：把目标拆步骤。要暴露：每步用啥工具、读还是写、是否需确认、失败能否重试
    
-   **State**：Agent 的任务状态要外置可查，不能只藏在 prompt 历史里
    
-   **Reflection**：自我检查可提升质量，但不能替代外部验证
    
-   **Multi-Agent**：多 Agent 协作，小心责任边界模糊和权限扩散
    

**第一性原理：** Agent 不是自主权本身，而是被约束的执行循环。目标、工具、状态、权限、停止条件缺一不可。

→ 关联：[Agent Workflow](https://aiweb3.school/zh/handbook/bridge/agent-workflow/)、[Web3 Tool Use](https://aiweb3.school/zh/handbook/bridge/web3-tool-use/)

* * *

## 4\. MCP（模型上下文协议）⚠️ 精读

**一句话：** 把模型和外部工具的连接标准化。不是让模型"更聪明"，而是让工具调用变得可描述、可复用、可管理。

**核心概念：**

-   **Server**：暴露资源/工具/提示。关键是有边界——暴露什么、只读还是写入、是否需要授权
    
-   **Client**：连接模型和 MCP server。要展示连接了哪些 server、能调用哪些工具、是否需要确认
    
-   **Tool Schema**：描述工具名字、参数、用途、约束。schema 模糊 → 模型用错误参数填空
    
-   **Permission**：读文档 vs 创建 PR vs 发支付 vs 删文件——风险完全不同，要区分只读/写入/确认/审计
    

**第一性原理：** 模型不应该直接拥有世界，应通过明确协议访问被授权的上下文和工具。

* * *

## 5\. LLM（大语言模型）🔁 速读

**一句话：** LLM 是把大量文本、代码压进参数的概率模型。它生成概率上合理的输出，不是天然可信的事实。

**核心概念：**

-   **Token**：模型处理文本的基本单位。代码/JSON/混合语言比普通文本更吃 token
    
-   **Embedding**：文本 → 向量，衡量语义相似度。适合搜索，不适合单独判断"结论是否正确"
    
-   **Transformer + Attention**：给了模型强大的模式组合能力，但没给它事实裁决权
    
-   **Hallucination**：幻觉不是"写更好的 prompt"，要靠外部校验：来源引用、schema 校验、人工确认
    
-   **Multimodal**：多模态让模型能读懂截图/图表/设计稿，但关键判断仍要回到结构化数据
    

**第一性原理：** 模型输出是候选结果，不是事实本身。越靠近真实动作，越需要外部校验。

* * *

## 6\. Prompt（提示词）🔁 速读

**一句话：** Prompt 是你和模型之间的接口设计。把任务目标、边界、输出格式、失败处理写成可执行的沟通协议。

**核心概念：**

-   **Instruction**：拆成四段——任务目标、可用输入、禁止行为、输出格式和失败格式
    
-   **Few-shot**：放示例让模型模仿。但协议升级后旧示例可能误导，要跟 eval 一起维护
    
-   **Structured Output**：让模型输出 JSON schema，后续代码才能检查、拒绝、记录
    
-   **Prompt Injection**：恶意内容让模型忽略规则或泄露信息。防御 = 外部内容标记为不可信 + 工具调用前校验 + 敏感动作强制 human approval
    

**第一性原理：** Prompt 是软约束，不是安全边界。真正的边界必须由代码、权限、校验和审计承担。

* * *

## 7\. Frameworks（框架）🔁 速读

**一句话：** 框架不是让你少写 API 调用，而是把模型/工具/状态/检索/评估组织成可维护系统。

| 框架 | 定位 | 适合场景 |
| --- | --- | --- |
| LangChain | 组件库，快速接模型+工具+检索 | 原型、学习 |
| LangGraph | 工作流/状态机，graph 编排 | 多步任务、重试、人工确认 |
| OpenAI Agents SDK | Agent 构建，handoff+guardrails+tracing | 多 Agent、工具调用 |
| DSPy | 把 prompt pipeline 写成可优化程序 | 有明确数据集和指标时 |
| Hermes | 面向工具调用和结构化输出的模型生态 | 需要稳定 JSON/tool calling |

**第一性原理：** 框架是系统边界的表达，不是智能本身。先理解工作流，再决定用不用框架。

* * *

## 8\. Vibe Coding（氛围编程）🔁 速读

**一句话：** 不是"凭感觉写代码"，而是人和 AI Coding Agent 协作：人管方向/约束/验收，Agent 管生成/修改/执行。

**核心概念：**

-   **Vibe Coding 模式**：描述目标 → Agent 生成方案 → 运行检查 → 追问迭代
    
-   适合：搭原型、修小 bug、补测试、重构局部、解释陌生代码
    
-   不适合：无边界"重写整个项目"
    
-   **关键工具**：Claude Code / Codex CLI — 能在 repo 里行动，所以要控制权限
    
-   **核心原则**：任务要小、上下文要准、验证要硬（测试/构建/截图 > "看起来对"）
    

→ 对你来说：已经在大量使用 Claude Code + Codex，这节快速过即可

* * *

## 9\. Evaluation（评估）🟢 了解

**一句话：** 把"感觉效果不错"变成可重复测量的改进方法。

**核心概念：**

-   **Harness**：跑 eval 的框架，喂样本 → 调系统 → 收集输出 → 评分
    
-   **Golden Set**：30-100 条高质量标注样本，覆盖正常/边界/高风险/历史 bug
    
-   **LLM-as-Judge**：用模型评分，但要定期人工抽检校准
    
-   **Regression**：每修一个 bug，就变成 regression 样本
    
-   **Observability**：线上监控输入、检索、工具调用、输出、错误
    

**第一性原理：** 不能被重复测量的 AI 行为，就不能被稳定改进。

* * *

## 10\. Fine-tuning（微调）🟢 了解

**一句话：** 微调改的是模型行为分布，不是系统边界。不合适补实时知识、修权限或替代评估。

**核心概念：**

-   **SFT**：监督微调，用输入→期望输出训练。对数据质量极敏感
    
-   **LoRA**：参数高效微调，降成本降显存，适合快速实验
    
-   **PEFT**：参数高效微调方法统称
    
-   **Dataset**：训练/验证/测试/回归四件套，不要拿测试集训练
    
-   **Overfitting**：训练数据太少或太单一 → 示例好看，真实场景崩
    

**判断流程：** 先问 prompt 清楚吗 → 上下文缺吗 → 检索准吗 → 格式有 schema 吗 → 有 eval 证明问题稳定存在吗 → 才能谈 fine-tuning

* * *

## 11\. Inference（推理服务）🟢 了解

**一句话：** 训练决定模型学了什么，推理决定模型在真实产品里如何响应。

**核心概念：**

-   **API Model**：云端调用，上手快但成本/延迟/速率限制要管住
    
-   **Local Model**：自建推理，更可控但吃硬件
    
-   **Quantization**：FP16 → INT8/INT4，省资源但可能降质量
    
-   **Serving**：并发、队列、缓存、流式输出、监控、灰度、降级
    

**对 AI×Web3：** 链上动作不可逆，推理层必须留下可审计记录——用了哪个模型、输入来自哪、输出是什么。

* * *

## 交叉关系图

```
LLM (能力底座)
  ├── Prompt (接口设计)
  ├── Context (信息治理) ←→ RAG (外部知识)
  ├── Agent (执行循环)
  │     ├── Frameworks (编排层)
  │     └── MCP (工具协议)
  ├── Vibe Coding (AI 编程实践)
  ├── Evaluation (质量保障)
  ├── Fine-tuning (模型定制)
  └── Inference (推理部署)
```

* * *

**完成状态：** ✅ 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->


+## Today's Focus

+

+AI × Web3 Bridge 入门：Chain-aware Context + Web3 Tool Use。理解 Agent 如何读取链上状态、调用 Web3 工具，并动手做一个最小交叉实验。

+

+---

+

+## Learning Log

+

+### AI × Web3 Bridge

+

+#### Chain-aware Context

+- 页面：[https://aiweb3.school/zh/handbook/bridge/chain-aware-context/](https://aiweb3.school/zh/handbook/bridge/chain-aware-context/)

+- 核心问题：链上状态如何进入 Agent 上下文

+- 笔记：

+

+#### Web3 Tool Use

+- 页面：[https://aiweb3.school/zh/handbook/bridge/web3-tool-use/](https://aiweb3.school/zh/handbook/bridge/web3-tool-use/)

+- 核心问题：RPC、钱包、合约工具如何被 Agent 调用

+- 笔记：

+

+#### Agent Workflow

+- 页面：[https://aiweb3.school/zh/handbook/bridge/agent-workflow/](https://aiweb3.school/zh/handbook/bridge/agent-workflow/)

+- 核心问题：哪些步骤适合自动化，哪些必须 human-in-the-loop

+- 笔记：

+

+---

+

+## Experiments & Practice

+

+### 最小交叉实验：AI 查询链上数据

+- \[ \] 用 Agent 生成 cast 命令查询 ETH 主网某地址余额

+- \[ \] 人工审核命令

+- \[ \] 执行并验证结果

+

+---

+

+## Problems & Blockers

+

+<!-- What confused you, what didn't work -->

+

+---

+

+## Handbook Feedback

+

+<!-- Any issues, suggestions, or corrections for the Handbook -->

+

+---

+

+## Next Session

+

+- 继续 Bridge 章节：Agent Wallet + Machine Payment
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->



# Web3 运行原理

> Bruce 老师主讲 · 底层架构与机制拆解

**核心认知**：Web3 的本质不仅是技术，而是密码学（保护所有权）、经济学（协调参与者）和社会学（共识决定规则）的交叉结合，重构了数字世界的控制权分配。

* * *

## 一、钱包与个人主权 (Wallet & Sovereignty)

| 概念 | 说明 |
| --- | --- |
| 私钥 (Private Key) | 一切的核心。极长的随机密码，控制链上资产的唯一钥匙 |
| 助记词 (Mnemonic) | 私钥的备份形式（单词组合），通过特定路径可派生出无数私钥，泄露 = 资产全部丢失 |
| 公钥/地址 (Public Key/Address) | 由私钥通过算法生成（截取哈希后 40 字符），相当于公开的银行账号 |
| 资产本质 | 钱不在"钱包 APP"里，而是记录在公开透明的区块链账本上。钱包只是保管私钥、发起签名和调用的工具 |
| 个人主权 | 创建钱包无需任何中心化机构审批（无 KYC），标志着个人主权在数字世界的起点 |

* * *

## 二、交易与数字签名 (Transaction & Signature)

一笔完整的链上交易必须包含四个核心要素：

1.  **具体操作 (Action)**：转账金额、接收地址或调用的合约代码
    
2.  **Gas 费（手续费）**：支付给网络的资源消耗费，防止垃圾交易攻击（增加作恶成本），作为激励分配给矿工/验证节点
    
    -   Base fee：销毁通缩
        
    -   Tip fee：作为奖励
        
3.  **Nonce（防重放序列号）**：记录该地址发出的交易序号，确保每笔交易只执行一次，防止黑客用历史签名重复扣款
    
4.  **数字签名 (Signature)**：验证交易是否由私钥持有人发出的唯一凭证
    
    -   **运行机制**：用私钥 + 交易信息生成哈希签名。节点通过 `ecrecover` 算法，利用"签名 + 原始信息"反推出发送者地址
        
    -   **安全亮点**：整个验证过程中，网络不需要知道你的私钥明文，就能确认交易确由你本人授权
        

* * *

## 三、链上网络运行机制 (Network Operation)

一笔交易从点击 "Confirm" 到最终上链的生命周期：

```
用户确认 → RPC（网关层）→ Mempool（内存池/候车室）→ Builder（打包者）→ Validator（验证者）→ Finalize（最终确认）
```

| 阶段 | 说明 |
| --- | --- |
| RPC（网关层） | Web2 浏览器与 Web3 去中心化节点之间的桥梁，接收用户交易请求并广播到网络 |
| Mempool（内存池） | 交易的"候车室"，所有待处理交易在此排队 |
| Builder（打包者） | 从内存池中挑选交易（优先 Gas 费高的），排序并打包成区块 |
| Validator（验证者） | 质押 ETH 的节点，共同见证和验证打包好的区块。作恶者会被没收质押资金（惩罚机制） |
| Finalize（最终确认） | 防止链分叉（Reorg），区块上链后需等待约 12 分钟（以太坊）才达到最终不可篡改状态 |

* * *

## 四、共识机制 (Consensus Mechanisms)

在没有中心化权威的陌生人网络中，决定"谁来记账"的规则：

| 机制 | 代表 | 原理 | 特点 |
| --- | --- | --- | --- |
| PoW（工作量证明） | 比特币 | 一起做极难的哈希碰撞数学题，谁先解出谁获得记账权和奖励 | 去中心化程度高，但极其耗电 |
| PoS（权益证明） | 以太坊 | 节点质押资产（如 32 ETH）获得资格，系统随机选出"课代表"出块，其余节点验证 | 更加节能 |

* * *

## 五、智能合约与可升级性 (Smart Contracts & Upgrades)

### Code is Law

智能合约是部署在 EVM 虚拟机上的代码。规则一旦上链，触发即必然执行，不依赖人类律师或政府做担保，极大消除了信任摩擦。

### 代理合约升级模式 (Proxy Upgrade)

-   部署上链的代码不可篡改，开发者采用"代理模式"实现升级
    
-   用户访问固定的**代理合约**（相当于指针），代理合约将逻辑指向具体的**逻辑合约**
    
-   升级时只需部署新逻辑合约，修改代理合约中的指针地址即可（用户无感）
    

### 协议层硬分叉 (Hard Fork)

-   区块链本身规则升级（如增加字段），需通过社区提案（EIPs）讨论定稿
    
-   全网节点必须更新客户端软件
    
-   如果社区共识不一致，会产生链条分裂（如 ETH 与 ETC）
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->




# AI Agent 核心概念

## 1\. AI Agent 的核心运作机制

与早期"问答式"聊天机器人不同，AI Agent 具备实际执行任务的能力。核心机制是一个闭环：

**理解用户目标 → 调用外部工具执行任务 → 观察执行结果 → 如有错误则进行自我纠正和修复**

* * *

## 2\. AI 工具生态的五大阵营

| 类别 | 代表产品 | 特点 |
| --- | --- | --- |
| 聊天型 AI | ChatGPT、Claude、Gemini | 网页端对话工具 |
| AI 编程助手（IDE 型） | Cursor、Copilot | 集成代码编辑器，针对开发者优化 |
| 终端型 AI | Aider、Claude Code | CLI 环境运行，适合有经验的开发者持续交互式编程 |
| 模型聚合平台 | OpenRouter | 汇集托管各种大语言模型，通过 API 统一提供 |
| 通用助手底座 | Hermes Agent | "调度师"角色，连接大模型、本地文件工具及消息平台，自动化处理任务 |

* * *

## 3\. Hermes Agent 的核心能力

-   **记忆持久化 (Memory)**：将重要信息写入本地并持久化保存，不会因对话轮次增加而遗忘关键上下文
    
-   **技能固化 (Skills)**：将固定任务沉淀并模板化为"技能"，后续按既定角色、行为边界和执行流程自动完成任务
    
-   **极低的交互门槛**：支持直接接入 Telegram 或微信等日常聊天软件，像聊天一样发消息即可让它读文件、写简报或安排学习计划
    

* * *

## 4\. 部署配置与安全避坑指南

### 安装环境

推荐在 Mac、Linux 或 Windows 的 WSL（Linux 子系统）下安装配置。

### 核心安全警告

在配置 Hermes 连接外部系统时（如设置 API 密钥或 Agent Security Key），**必须通过设置系统环境变量的方式进行**，绝对不要在聊天框里直接把私钥发给 Agent，以防敏感信息泄露。

### 使用场景建议

-   ✅ 适用：个人助理（每日定时获取新闻简报、制定学习方案、记录零碎的脑暴灵感等）
    
-   ❌ 不推荐：直接编写代码。如需自动化编程，组合使用 GLM/Claude 模型和专门的终端辅助工具（如 Cursor、Aider）效果更好。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->





因系统原因，补交打卡笔记内容，此条内容为系统自动触发。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->





**有效笔记一：课程的核心打卡机制与共学纪律** 本次共学营设有**严格的打卡纪律与积分榜单机制**。学员每周需要完成至少5天的打卡，仅有2天的容错期；如果**连续三天未打卡，将被直接淘汰出积分榜单**，失去争夺上榜“隐藏福利（Surprise）”的资格。并且，打卡提交的笔记必须保证质量，平台后台会进行筛选统计，像“已打卡”这种只有一两句话的敷衍内容会被判定为无效笔记。此外，每周一、三、五晚7点到8点的 **Co-learning（共学答疑）环节是纯直播形式，绝无回放**，必须按时参加以解决技术卡点。

**有效笔记二：我准备采取的行动（首周环境配置与任务冲刺）** 我接下来的首要行动是**配置 Hmers Agent 专属学习助手并拿下首批通用任务积分**。我将通过 Telegram 接入该智能体，使用官网提供的助记词模板进行初始化，配合授权检查本地 Git 环境并自动创建个人专属的 GitHub 仓库，用于同步打卡与脑暴记录。特别要注意的是，我会在官网底部生成 `Agent Security API` 密钥，并**严格通过环境变量进行配置**，绝对不在对话框中明文发给助手以防泄露。配置完成后，我将提交开营仪式的截图或文字链接，先把通用的25分拿到手。

**有效笔记三：我想要继续追问的问题（关于 Demo 商业化落地）** 开营仪式上，主办方特意强调要把黑客松的作品当作具有真实价值的商业产品来看待，要从 VC（风投）的视角思考如何接入支付和实现商业化。同时，最高允许5人组队参与黑客松。因此，我想在接下来的答疑环节向擅长 AI 商业智能体的 Swing 老师追问：**对于想要在黑客松期间（第三周）实现 AI Agent 链上支付功能的小白团队，目前生态中最推荐的轻量级托管和结算工具链是什么？我们应该优先攻克哪个技术难点，才能在最短时间内跑通“让别人为我的 Agent 付费”这一核心闭环？**
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
