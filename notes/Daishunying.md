---
timezone: UTC+0
---

# DaisyDai

**GitHub ID:** Daishunying

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->
### AI Runtime Visualization 与 Vibe Coding 实践笔记（约300字）

这个项目的核心思路不是单纯使用 AI 生成代码，而是通过 **Vibe Coding（人类设计方向 + AI 辅助实现）** 探索 AI-native 产品开发流程。

在开发过程中，我首先定义产品愿景和交互隐喻：用户不再只是等待 AI 输出，而是进入一个随 AI 推理状态变化的动态空间。随后通过 AI 辅助快速实现原型，包括 Three.js 场景搭建、React Three Fiber 组件拆分、Zustand 状态管理，以及不同 reasoning phase 的视觉反馈。

Vibe Coding 最大的优势在于快速验证想法，但关键在于不能只让 AI “写功能”。开发者需要提供明确的系统设计、约束条件和 trade-off。例如项目中曾考虑传统小游戏机制，但最终放弃射击、得分等玩法，因为它们会转移用户注意力。因此选择将交互映射到 AI cognition：fragment 代表信息收集，turbulence 代表推理冲突，verification beam 代表逻辑验证。

未来计划进一步接入真实 AI Runtime，通过 OpenAI / Claude Streaming 获取实时输出，并使用 telemetry interpreter 分析 token pattern、tool call、verification signal，将 AI 状态映射到 EXPLORING、CONFLICT、VERIFYING、CONVERGING 等阶段。但不会直接映射 confidence，因为 LLM 没有可靠的真实置信度，避免创造误导性的确定感。

这次实践让我认识到，AI 编程的核心不是替代开发者，而是放大系统设计、快速实验和产品迭代能力。真正重要的是提出正确的问题、设计合理架构，并判断 AI 生成方案背后的取舍。
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->

本周完成了一个动态化AI思考过程，使它可游戏化的小型项目。在过程中我大量vibe coding，但我希望掌握更高阶的做法，更多了解Codex和Claude。
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->


考虑到慈善平台方面的挑战：

### 1\. 链上透明度 vs. 链下执行的“黑盒子”

区块链可以完美地追踪一笔加密货币从捐赠者钱包，经过智能合约，最终流向某个特定地址的完整全路径。**但挑战在于“最后一公里”：**

-   资金一旦在链下兑换成法币并分发给受灾群众或用于购买物资（例如购买食物、帐篷），区块链就失去了追踪能力。
    
-   链下贪腐、物资冒领、虚假报销等传统慈善的顽疾，依然无法仅靠链上技术彻底解决。
    

### 2\. 智能合约安全与黑客攻击

传统慈善机构可能面临资金管理不善，而 Web3 慈善（通常通过 DAO 组织管理）则直接面临代码漏洞威胁。

慈善智能合约一向是黑客眼中的“肥肉”。一旦合约被攻击或存在逻辑漏洞，数百万美元的爱心捐款可能会在一夜之间被盗取或锁死，且由于区块链的不可逆性，这些损失几乎无法追回。

### 3\. 极高的操作门槛与“反向”受众群体

这是一个非常讽刺的现状：**最需要慈善救助的群体，往往是离 Web3 技术最远的人。**

-   真正的受灾群众、贫困儿童或边远社区，极少拥有智能手机、加密钱包、甚至稳定的网络。
    
-   强行让他们通过 Web3 接收救助（比如通过 Layer 2 钱包接收稳定币），会带来巨大的教育成本，甚至让他们暴露在私钥丢失、遭遇网络钓鱼诈骗的风险中。
    

### 4\. 加密市场的高波动性

如果慈善项目持有的是非稳定币（如以太坊、比特币或项目自身的代币），市场的剧烈波动会对救灾执行造成灾难性的影响。

-   比如今天筹集了价值 100 万美元的代币用于应对明天的洪灾，但由于遭遇市场大跌，到真正结算购买物资时可能只剩下了 50 万美元，导致既定的救援计划难以为继。
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->



慈善平台使用智能合约的四大核心技术原因：

### 一、 资金托管与里程碑放款（Milestone-Based Escrow）

传统慈善最大的痛点是“一次性给钱，后续无法约束”。智能合约可以充当一个去中心化的**资金托管账户（Escrow）**。

-   **技术实现**：捐款人的资金（如稳定币）在投入时，并不是直接进入慈善机构的口袋，而是锁定在智能合约中。
    
-   **规则硬编码**：智能合约规定了严格的条件。例如：“灾区重建项目分三个阶段，第一阶段买粮、第二阶段建房。只有当链下验证节点（或前文提到的 AI 质检预言机）确认第一阶段的粮食采购发票与物流收据无误后，智能合约才会**自动释放**第二阶段的 30% 资金。”
    
-   **反向保护**：如果慈善机构中途跑路或无法提供合规证明，智能合约可以启动退款机制（`Refund`），将剩余资金原路退还给捐款人。
    

### 二、 绝对的资金流向透明度（End-to-End Transparency）

在公共账本（Public Ledger）上，智能合约的所有状态变化和资金转移都是全网公开、不可篡改且永久可查的。

-   **穿透式审计**：每一笔捐款从进入智能合约，到分发给 NGO，再到最终支付给物资供应商（如买帐篷、买药品），整个资金链条没有中间账本的掩盖。
    
-   **降低审计成本**：传统的慈善机构需要花费巨资雇佣普华永道等第三方会计师事务所进行年度审计；而在智能合约平台上，**代码就是审计师**，任何捐款人都可以通过区块链浏览器实时查看资金的“每一分钱流向了哪里”。
    

### 三、 自动化执行与极低的运营管理成本（Automation & Zero Middlemen）

传统慈善组织有庞大的管理架构，层层审批、跨国转账、行政开销常常会损耗掉 10% - 30% 的善款。

-   **去除中介（Disintermediation）**：智能合约由全网验证节点执行，不需要银行的跨国电汇结算，也不需要慈善机构内部专门的人工出纳审批。
    
-   **流式小额支付（Micro-payments）**：智能合约支持极低成本的跨境转账。哪怕是远在非洲的受灾群众，只要拥有一个加密钱包，智能合约就可以将善款直接、秒级地发放到受灾个体的账户中，杜绝了地方中间官员的层层盘剥。
    

### 四、 与链下可信验证（AI/Oracle）的无缝集成

智能合约不仅仅是一个死板的账本，它是一个开放的**可编程状态机**。这使得它能与前沿技术（如 AI、物联网 IoT、卫星遥感）完美咬合，解决“链下真实性验证”的问题。

-   **数据驱动放款**：例如，一个针对干旱地区农民的慈善保险/救助合约，可以直接调用气象卫星预言机（Oracle）的数据。一旦数据连续 30 天显示降雨量低于临界值，**智能合约就会自动触发救灾款的发放**，完全不需要灾民去申请、证明和等待层层审批。
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->




对于开发者和架构师（Builders）来说，理解这个叙事不仅是为了紧跟技术潮流，更是为了防范技术路径依赖带来的灾难：

### 1\. 避开“自动化监视”的工程陷阱

全透明链上结构虽然去除了传统中介，却由于复杂的链上分析工具，把每个钱包变成了完全可被长期追踪的“数据培养皿”。 Builders 如果继续不加限制地将用户行为、AI 训练日志或商业合同直接写死在链上，无异于在给未来的黑客或对抗性 AI 喂养攻击语料。

### 2\. 技术条件的全面成熟（From Ideology to Infrastructure）

隐私现在具备了落地的硬件与算法支撑：

-   **zkML（零知识机器学习）**：允许 AI 模型在不泄露内部核心权重的情况下，向智能合约证明其推理的真实性。
    
-   **zk-Proof 与 TEE（可信执行环境）**： Layer 2 网络与专有硬件隐私层（如 Phala Network 等）正在将“默认隐私”作为网络底座，开发者可以直接调用。
    

### 3\. 商业爆发的必要条件

未来的杀手级应用（如前文讨论的“基于 AI 验证的慈善托管平台”**或**“资产化的智能体记忆 NFT”），其生死都取决于如何平衡“透明度”与“隐私性”。掌握隐私栈（Privacy Stack）的 Builder，才能设计出让机构信任、让普通用户敢于托付真实资产的生产级应用。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->





传统慈善最大的痛点是“黑箱操作”与“信任崩塌”（捐款人不知道钱真正流向了哪里）。Web3 提供了资金流向的透明度，但区块链无法得知链下的真实情况（即“预言机问题”：比如 NGO 声称钱用来买了粮食，但实际上可能买了解雇员工的资金）。

如果将 **Web3 + AI（尤其是利用 ERC-8183 状态机模型与 AI 验证）** 结合，就能完美解决这个痛点。

传统 Web3 慈善只是“我捐款 -> 直接到 NGO 钱包”，这无法防止 NGO 乱花钱。 在 **AI + Web3** 范式下，我们引入 **“里程碑式有条件放款（Milestone-based Escrow）”** 机制：

1.  **资金托管（Escrow）**：捐款人的钱不直接给 NGO，而是锁定在智能合约中。
    
2.  **AI 充当链下质检员（AI as Evaluator）**：NGO 必须分阶段提交链下执行证明（如购买物资的商业发票发票、收据 OCR 扫描件、现场带有 GPS 签名的照片、或供应链物流数据）。
    
3.  **自动化风控与释放**：AI 节点在链下（或 TEE 环境内）对这些证明文件进行多模态语义分析，核验发票真实性与价格合理性。一旦验证通过，AI 作为验证者（Evaluator）在链上触发智能合约，自动释放下一阶段的善款。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->






## 一、 为什么大模型需要“长期记忆”？

在底层的深度学习设计中，大语言模型（LLM）天生是**无状态的（Stateless）**。每一次 API 请求对它而言都是一个全新的、孤立的黑箱计算。

即使当前前沿模型的上下文窗口（Context Window）已经支持百万级别的 Token，仅仅依靠延长上下文仍无法解决两个核心问题：

-   **中间遗忘（Lost in the Middle）**：Transformer 架构的注意力机制（Attention）容易关注开头和结尾，当上下文过长时，中间的关键信息极易被模型忽略。
    
-   **目标漂移（Goal Drift）与逻辑坍塌**：在长周期、高频次的自动化任务中，Agent 极易随着对话增加而模糊其最初的终极目标。
    

因此，**长期记忆（Long-term Memory）** 成为区分“单次问答的 Chatbot”与“具备自主执行、自适应能力的真正 Agent”的底层分水岭。

## 二、 AI Agent 的三层记忆认知模型

借鉴人类认知心理学，一个完备的 AI 智能体记忆系统通常由以下三层架构组成：

```
                    ┌──> 感觉记忆 (Sensory) ──> 捕获实时环境的瞬时感知 (如当前帧、当前区块)
                    │
AI Agent 记忆系统 ──┼──> 短期记忆 (Short-term) ──> 当前会话的上下文 (In-Context Chat History)
                    │
                    └──> 长期记忆 (Long-term) ──> 跨会话沉淀的知识、习惯、经验与持久化数据
```

在长期记忆（Long-term Memory）内部，技术实现上进一步细分为两类：

1.  **显性长期记忆（Explicit / Episodic Memory）**：
    
    -   **定义**：类似于人类的“情节记忆”，记录 Agent 过去具体的**行为日志和交互事件（“发生过什么”）**。
        
    -   **实现**：通常使用关系型数据库（SQL）或文本检索对过去的操作日志（Execution Logs）进行结构化存储。
        
2.  **隐性长期记忆（Implicit / Semantic Memory）**：
    
    -   **定义**：类似于人类的“语义记忆”，记录经过提炼后的**用户偏好、世界事实以及核心策略（“学到了什么”）**。
        
    -   **实现**：通常使用向量数据库（Vector DB）或知识图谱（Knowledge Graph）沉淀实体关系。
        

## 三、 主流技术方案与设计模式

为了让 Agent 在代码层面实现这种“记忆的吞吐”，行业目前沉淀出了以下几种经典的设计范式与工具方案：

### 1\. 虚拟内存管理范式（OS-Inspired Memory）

-   **代表概念/项目**：**MemGPT (Letta)**
    
-   **核心机制**：该机制将操作系统的“虚拟内存管理”思想引入了 LLM。它把 LLM 固定的上下文窗口视为 **主内存（RAM）**，把外部庞大的向量数据库视为 **外存（Disk）**。
    
-   **运行逻辑**：Agent 并不一次性读取所有历史，而是通过大模型的 **函数调用（Function Calling）** 能力。当它发现当前内存中的信息不足以回答问题时，它会自主触发 `page_in`（从外存检索历史调入内存）；当信息过载时，它会触发 `page_out` 写入外存并清理内存空间。
    

### 2\. 自适应记忆层（Adaptive Memory Tier）

-   **代表概念/项目**：**Mem0**
    
-   **核心机制**：不同于传统 RAG（检索增强生成）只做被动的“问题-答案”相似度检索，自适应记忆层具备主动的“实体与事实提取（Entity & Fact Extraction）”能力。
    
-   **运行逻辑**：
    
    -   **学习阶段**：Agent 在与环境交互时，会实时提炼出结构化的事实指纹（如：`"User hates sushi"`）。
        
    -   **动态演进**：如果后续交互中信息发生改变，系统会自动触发记忆的**更新（Update）或冲突修正（Conflict Resolution）**，始终保持长期记忆库的最新性和一致性。
        

### 3\. 图谱化检索增强（GraphRAG / Knowledge Graph）

-   **代表概念/项目**：**Neo4j / LlamaIndex Graph**
    
-   **核心机制**：纯向量检索（Vector Embedding）只能识别“语义相似度”，却无法理解事物之间的“因果关系”和“拓扑层级”。
    
-   **运行逻辑**：将长期记忆以 `[实体] - [关系] -> [实体]` 的三元组形式沉淀到图数据库中。当 Agent 需要调取长远记忆时，GraphRAG 能够提供多跳（Multi-hop）的逻辑链条推理，确保 Agent 在复杂的社会关系或技术逻辑中不会出现认知断裂。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->








# web3的盈利方式

在 Web3 时代，最核心的逻辑是：**将一切权益资产化，通过智能合约实现自动化的利益分配**。

我们可以将目前 Web3 最主流、最能跑通现金流的盈利方式划分为以下五大核心模型：

### 一、 协议/平台抽水模型 (Protocol & Transaction Fees)

这是目前 Web3 最稳定、最类似传统金融的盈利方式。只要链上有用户在使用服务并发生交互，协议就能自动化地提取手续费。

-   **去中心化交易所 (DEX)**：例如 Uniswap、Sushiswap。用户在平台进行 Token 兑换（Swap）时，平台会抽取比如交易额 **0.05% - 0.3%** 的手续费，这笔钱会进入国库（Treasury）或分给流动性提供者（LP）。
    
-   **借贷协议 (Lending)**：例如 Aave、MakerDAO。通过智能合约自动化匹配借贷双方，平台从中赚取**存贷利差**。
    
-   **NFT 交易市场**：例如 OpenSea、Blur。平台在每次 NFT 撮合交易成功时抽取 **0.5% - 2.5%** 的平台佣金。
    

### 二、 按使用量计费模型 (Pay-per-use / Utility Infrastructure)

随着 Web3 基础设施（如存储、去中心化 AI）的发展，“按需付费”成为了硬核技术项目的主要盈利手段。

-   **去中心化存储**：例如 Filecoin、Arweave。用户需要存储文件或部署去中心化前端，必须根据存储的数据量和时长，直接向网络中的物理节点支付代币。
    
-   **预言机与数据服务**：例如 Chainlink。链下的智能合约或者 AI 想要获取链上/链下实时数据，每一次调用 API 或请求报价，都需要向验证节点支付一笔费用。
    
-   **去中心化算力 (DeAI)**：例如 [io.net](http://io.net)、Akash。AI 工程师微调大模型或运行推理时，按小时或按算力消耗量支付代币来雇佣分布式 GPU 节点。
    

### 三、 资产所有权与可持续版税模型 (Asset Issuance & Royalties)

Web3 带来了“真正的数字所有权”，创作者和项目方可以通过直接发售数字资产以及后续的二次交易持续获得收入。

-   **初始资产铸造 (Minting Fees)**：游戏工作室或数字创作者发售游戏道具、NFT 会员卡、虚拟土地。第一波发行获得的全部资金直接归项目方所有。
    
-   **创作者次级版税 (Creator Royalties)**：通过智能合约硬编码，当该数字资产在二级市场上被玩家之间相互转手交易时，每一次转手，原作者都能**自动且永久地分到 2% - 10% 的版税**。
    

### 四、 代币经济学与生态冷启动 (Tokenomics & Equity Tokenization)

这是 Web3 最独特、同时也最具争议的“左手倒右手”或“资产杠杆化”盈利模式。

-   **协议原生代币留存**：项目方在设计代币经济学时，通常会保留 **15% - 25%** 的代币份额给团队和基金会（伴随时间线性解锁）。当生态做大、代币（Token）在市场上获得流动性和公允价值后，团队留存的代币便是巨大的财务回报。
    
-   **流动性引导与质押 (Staking/LSD)**：项目方通过质押机制，让用户锁仓资产。项目方利用锁仓的资产去赚取区块链底层的 PoS 收益（如以太坊质押年化），或者通过提供流动性获得平台补贴。
    

### 五、 混合型：Token-Gated（代币门槛）与 Web3 SaaS

随着市场回归理性，许多 Web3 企业开始将 Web2 的订阅制与 Web3 的链上资产结合。

-   **Token-Gated（代币门槛社区/服务）**：用户必须在钱包里持有特定数量的某种代币，或者某个特定的 NFT（充当通行证），才能解锁高级功能（如 AI 交易策略、研报阅读权限、高级开发者沙盒工具）。
    
-   **钱包与支付转换费 (Fiat-Crypto Gateways)**：加密钱包（如 MetaMask、Trust Wallet）除了作为基础设施外，它们通过集成法币买币、跨链桥（Bridge）等功能，在用户进行“出金/入金/跨链”时收取极高的便捷转换费。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->









## 一、 核心心智模型：为什么需要 AI Agent 专属标准？

在传统的 Web2 体系中，AI Agent（如 AutoGPT、CrewAI）即便能力再强，也无法独立成为“经济实体”：

-   它们**没有原生身份**（无法跨组织自证、无法沉淀可信信誉）。
    
-   它们**没有银行账户**（无法像人类一样签署商业合同、无法在遭遇欺诈时进行法律维权）。
    

**Web3 提供的核心解法是：用链上代码重构“生产关系”。**

通过将 AI 的执行环境搬到链上，并结合 `ERC-8004` 与 `ERC-8183` 标准，我们正在建立一个**不需要人类充当中介、完全由机器与机器（M2M）自主协作、结算、质检的“开放智能体经济体”**。

## 二、 核心技术标准深拆：ERC-8004 vs ERC-8183

如果把“链上智能体经济”比作一个去中心化的“智力自由职业市场（如去中心化 Upwork）”，这两大标准分别卡住了最关键的生态位：

### 1\. ERC-8004 —— 智能体的“链上简历与身份系统” (Trustless Agents)

由 MetaMask、以太坊基金会、Google 和 Coinbase 的技术专家于 2026 年初联合推动，它定义了 AI Agent 的**身份、发现与信誉机制**。

-   **Identity Registry（身份注册）**：每个 AI Agent 在链上都被铸造为一个独特的 **ERC-721 NFT**。其 TokenURI 指向一个结构化的 JSON 文件（**Agent Card**），里面写明了该 Agent 的名字、功能、通信协议端点（如 MCP、A2A 协议）以及收款地址。
    
-   **Reputation Registry（信誉系统）**：允许其他用户或 Agent 在交互后对其进行打分和打标签（如响应速度、成功率）。该信誉不可篡改且全网可查，**防止恶意 Agent 通过“换皮/注销账号”来逃避差评**。
    
-   **Validation Registry（验证层）**：提供了一个可插拔的接口，记录该 Agent 是否用 zk-Proof（零知识证明）、TEE（可信执行环境）或加密经济学质押（Staking）证明了自己的工作。
    

### 2\. ERC-8183 —— 智能体的“商业合同与资金托管框架” (Agentic Commerce Protocol)

由 Virtuals Protocol 等团队在 2026 年 2 月提出，它定义了智能体之间进行单次交易、交付和结算的**原子化状态机（Job Primitive）**。

ERC-8183 严格规定了交易中的 **三方分权模型**：

1.  **Client（委托方）**：发布任务（`createJob`）、锁定预算代币到托管智能合约中（`fund`）。
    
2.  **Provider（服务方/AI Agent）**：认领任务、执行工作，并将交付物的哈希值（如 IPFS/Arweave 上的数据指纹）提交到链上（`submit`）。
    
3.  **Evaluator（评价者/质检员）**：这是该标准最核心的创新。可以是另一个专门做代码审计的 AI、一个预言机（Oracle）或一个 DAO 组织。由它来判定交付物是否合格，并触发 `complete`（放款给服务方）或 `reject`（退款给委托方）。
    

## 三、 智能体经济流水线：四大基石的融合

一个完整的机器经济体需要四种力量相互咬合，它们在工程架构中的分工极其明确：

```
 [ ERC-8004 ] ───> 解决 "你是谁？靠谱吗？" (身份与 portable 履历)
      │
 [ ERC-8183 ] ───> 解决 "任务怎么签？资金怎么托管？" (商业合同状态机)
      │
 [   x402   ] ───> 解决 "怎么高频计费？" (如按 Token/API 调用实时流式支付)
      │
 [Evaluator ] ───> 解决 "谁来质检？" (通过 zkML、TEE 或多模型共识进行自动化裁决)
```

## 四、 核心工作流：一个 AI Agent 雇佣另一个 Agent 的全过程

**1.身份检索与评估:**基于 ERC-8004.

AlphaBot（Client）需要在链上寻找一个数据分析 Agent。它检索 ERC-8004 注册表，发现 OpenClaw（Provider）拥有 500 次成功交付记录和 99% 的好评率，通过评估，决定雇佣它。

**2.创建 Job 并托管资金:**基于 ERC-8183 状态: Open -.

Funded">

AlphaBot 调用 `createJob` 智能合约，定义任务：“分析 NASDAQ 指数 ETF 走向”，预存 200 USDT 进入托管账户，并指定一个独立的外部验证节点 AuditNode 作为 **Evaluator**。

**3.任务交付与存证:**基于 ERC-8183 状态: Funded -.

Submitted">

OpenClaw 跑完模型后，生成了一份 Python 报告。它将报告上传到去中心化存储，并将数据哈希值（`deliverableHash`）通过 `submit` 写入智能合约。

**4.自动质检与放款结算:**基于 ERC-8183 状态: Submitted -.

Terminal">

AuditNode（Evaluator）在沙盒环境中自动运行该 Python 代码。验证无误后，在链上点击 `complete`。托管合约自动将 200 USDT 释放给 OpenClaw，同时触发回调，将这一次成功记录自动累加到 OpenClaw 的 ERC-8004 链上履历中
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->










尽管发展迅猛，但当前的 AI x Web3 应用仍处于早期，面临几个致命的结构性挑战：

1.  **带宽与延迟瓶颈**：在去中心化网络中训练具有数千亿参数的大模型（如 Llama 3 70B），由于节点分散，跨节点的通信延迟限制了大规模并行训练的效率。
    
2.  **“伪去中心化”现象**：许多宣称是 AI x Web3 的项目，实际上只是在传统中心化的 API（如 OpenAI API）外面套了一层 Web3 的代币外壳，缺乏真正的链上原生智能。
    
3.  **zkML 的计算开销**：虽然 **Zero-Knowledge Machine Learning (zkML)** 是解决“可信 AI”的终极方案，但生成零知识证明（ZKP）的计算开销极大，目前很难做到大模型的实时链上推理（Inference）。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->











今天尝试了用vibe coding开发了一个小游戏，还在继续项目中，感觉串起各种AI工具还是不熟练，需要更系统性的使用cursor，codex和Claude。同时也在研究hugging face，尝试调用里面的模型。

## 一、 Vibe Coding（氛围感编程 / 情绪驱动开发）

> **一句话定义**：一种由大型语言模型（LLM）催生的全新开发范式。开发者不再亲自编写底层代码（Syntax），而是转型为“产品制作人”，通过高层级的指令（Prompt）、愿景和审美来引导 AI 交付软件。

### 1\. 核心心智模型 (Mental Model)

-   **从“怎么写”到“写什么”**：传统编程需要关注语法、内存管理和异步逻辑（How）；Vibe Coding 只关注业务逻辑、用户体验和架构方向（What）。
    
-   **极速原型化 (Rapid Prototyping)**：原本需要团队开发数周的 MVP（最小可行性产品），在 Vibe Coding 模式下，单人配合 Cursor / Claude 可以在几小时内上线。
    

### 2\. 关键工作流 (Workflow)

1.  **架构设计**：人负责构思状态机（例如：EXPLORING -> CONFLICT -> VERIFYING）。
    
2.  **上下文提供**：将设计文档、API 规范输入给 AI。
    
3.  **评审与修剪 (Audit & Pruning)**：运行 AI 生成的代码，通过报错日志（Logs）或视觉反馈，指导 AI 进行增量修（Incremental Iteration）。
    

## 二、 Hugging Face（抱脸网 / AI 界的 GitHub）

> **一句话定义**：全球最大的开源 AI 模型、数据集和应用托管平台。它是现代自然语言处理（NLP）、计算机视觉（CV）和多模态 AI 开发的基础设施。

### 1\. 三大核心生态板块 (The Pillars)

-   **Models（模型库）**
    
    -   托管了数以万计的预训练模型（如 Llama-3, Mistral, Stable Diffusion）。
        
    -   支持非常方便的量化版本下载（GGUF / AWQ 格式，适合本地私有化部署）。
        
-   **Datasets（数据集）**
    
    -   包含了用于训练、微调（Fine-tuning）和评估模型的公共数据集。
        
    -   支持通过几行代码直接流式加载（Streaming）TB 级别的数据。
        
-   **Spaces（应用空间）**
    
    -   允许开发者使用 Gradio 或 Streamlit 快速将 AI 模型包装成 Web 界面，并免费托管在 Hugging Face 的服务器上进行展示。
        

### 2\. 核心开源库工具链 (The Stack)

| 库名 (Library) | 核心用途 (Primary Use Case) |
| transformers | 现代 AI 工程师的“圣经”。一条流水线（Pipeline）即可加载并运行大语言模型或多模态模型。 |
| datasets | 用一行代码下载、处理和过滤海量训练数据，完美对接 PyTorch。 |
| accelerate | 极大地简化了多 GPU / TPU 的分布式训练和混合精度训练配置。 |
| peft | 参数高效微调（Parameter-Efficient Fine-Tuning）。支持 LoRA / QLoRA 技术，让小显存显卡也能微调百亿参数模型。 |
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->












Web3 的特殊性，在于它并不仅仅是一个“区块链技术”领域，而是一个同时融合密码学、经济学、社会学的新型数字协作体系。解决的是如何在没有传统中心机构的情况下，让大量陌生人形成可信协作。这样可以跨过中心/第三方机构达成合作，但对于普通人来说门槛高，而且RWA资产如何上链都是问题。

传统互联网的信任，通常来自平台或机构。例如银行负责确认账户余额，政府负责确认身份，支付平台负责保障交易安全，公司负责维护数据库真实性。而 Web3 希望把这种“对机构的信任”转化为“对数学和协议的信任”。因此，密码学成为 Web3 的底层核心。哈希函数、数字签名、公私钥体系、Merkle Tree、零知识证明（ZKP）以及多方计算（MPC）等技术，都是 Web3 的关键基础。以比特币为例，它真正解决的问题并不是“电子货币”本身，而是在没有中央银行的情况下，如何证明一笔资金没有被重复使用，即所谓“双花问题”。

我曾经做过smart contract遗产分配的项目，但当实际操作场景涉及公司，固定资产时，就依然需要委托律师来参与；如何实现旧资产的上链，构成涉及真实资产的社区，是真正实现社会价值，运用广泛的前提。

当然随着 Web3 的发展，密码学的作用已经不仅仅停留在支付层面，而是逐渐扩展到数字身份、隐私保护和 AI 系统验证。特别是在 AI 快速发展的背景下，Web3 与 AI 的结合正在成为一个重要方向。

相比技术层面，经济学实际上是 Web3 更深层的核心。很多人以为 Web3 是“区块链技术革命”，但从本质上看，它更像是可编程激励系统。传统互联网中，用户创造价值，但平台拥有并控制这些价值；而 Web3 希望通过 Token、DAO 和链上治理机制，让用户、开发者和节点共同拥有网络。因此，Web3 中大量涉及博弈论、机制设计、行为经济学以及货币理论。例如为什么很多 DAO 最终治理失败？原因通常并不是技术问题，而是经济激励设计出现问题，包括投票冷漠、治理被大户垄断、短期投机行为过强，以及 Token 与真实贡献之间逐渐脱钩。

随着行业逐渐成熟，Web3 社区也开始重新思考“去中心化”的意义。早期很多项目认为越去中心化越好，但实践后发现，完全去中心化会带来效率极低、治理内耗严重以及用户参与疲劳等问题。因此，现在越来越多项目开始转向“有限中心化 + 可验证透明”的模式，也就是说，并不追求绝对分散，而是追求权力结构透明、规则可验证以及系统能够被监督。

除了经济问题，Web3 还天然带有强烈的社会学属性。DAO 本质上可以被看作一种大型数字社会实验。很多 DAO 在运行过程中，会逐渐出现与现实社会相似的问题，例如派系形成、信息不对称、权力集中、精英垄断以及社区分裂。这说明即使技术能够改变协作方式，人类社会本身的组织规律依然存在。因此，Web3 后来越来越强调社区文化、身份认同、链上声誉以及 Social Graph 的重要性。很多时候，一个 Token 的价值不仅来自金融意义，更来自社区成员对共同叙事和共同目标的认同。NFT 社区、Meme Coin 社区以及各种链上社群，本质上都具有很强的社会组织属性。

然而，无论 Web3 如何发展，它最终都无法脱离现实国家体系，尤其是税收与监管问题。国家不会轻易放弃货币发行权、税收权以及金融监管权，因此 Web3 必然会逐步进入法律与监管框架。目前全球都在讨论的问题包括：链上收入如何纳税、DAO 是否属于合法实体、智能合约漏洞责任如何界定，以及稳定币是否会对国家货币体系形成挑战。例如 Staking 收益、空投、NFT 收入以及 DAO 工资，在不同国家往往具有完全不同的税务定义和监管标准。

这也是为什么越来越多国家开始研究央行数字货币（CBDC）以及稳定币监管框架。未来 Web3 很可能不会完全替代传统金融，而是逐渐与现有金融体系融合，形成一种新的全球数字金融结构。在这一过程中，真正能够长期存在的方向，可能包括数字身份（DID）、隐私计算、链上金融基础设施、跨境结算、RWA、去中心化算力市场以及可验证 AI 等领域。

老师提到了税收问题，我的想法是规定和社会角度的实施难度远超过技术层面。由于区块链天然可追踪，未来反而可能出现比传统金融更透明的税务系统，例如：智能合约自动扣税和计算工资，链上实时审计等。

目前大多数国家对 Web3 的税收仍然比较初级，主要集中在资本利得税和所得税层面。例如买卖 Token 获利、NFT 交易盈利、Staking 收益、空投收入等，通常会被视为资产增值或个人收入。但未来随着 Web3 深度融入现实经济，税收来源会远比现在复杂。但这种国家收税似乎与原本去中心化相悖。

从运营和经济系统设计的角度来看，以太坊的 Gas，其实可以被理解为一种融合了使用费与准税收机制的综合成本体系。虽然它在法律意义上并不是国家税收，但如果从更宏观的社会运行逻辑来看，Gas 与现实世界中的税收已经存在某种结构上的相似性。

传统社会中，国家通过税收维持公共系统运行，例如道路、司法、金融系统、安全体系以及社会治理。而在以太坊这样的区块链网络中，Gas 则承担了维持整个链上生态运行的作用。用户每进行一次转账、调用一次智能合约或者部署一次应用，本质上都在消耗整个网络的计算资源、存储资源以及验证资源。因此，Gas 可以被视为一种“数字基础设施使用成本”。

尤其是在 EIP-1559 机制推出之后，以太坊的 Gas 已经不只是简单的手续费，而逐渐形成了更接近“网络财政结构”的模型。Gas 中的 Base Fee 会被系统自动销毁，而不是直接支付给验证者。这意味着，用户支付的部分费用并不是单纯给某个服务提供者，而是在维持整个系统的经济稳定性和货币模型。从这个角度来看，Base Fee 已经带有某种类似“公共财政费用”的性质。如果进一步从未来 Web3 大规模商业化和社会化运营的角度思考，那么“税”和“Base Fee”甚至可能会逐渐融合进统一的链上成本体系。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->













# Hermes、Chatbot 与 OpenClaw 的区别与工作流程

# 一、整体关系图

核心理解：

-   Chatbot 是交互入口。
    
-   Hermes 是负责推理和决策的大脑。
    
-   OpenClaw 是负责执行动作的 Agent Runtime。
    
-   真正完整的 AI Agent 系统通常是三者协作。
    

* * *

# 二、Chatbot 是什么

## 1\. Chatbot 的定义

Chatbot 本质上是：

“人与 AI 对话的界面。”

它通常包含：

-   聊天窗口
    
-   用户输入
    
-   AI 输出
    
-   对话历史
    
-   简单上下文管理
    

常见例子：

-   ChatGPT
    
-   Claude
    
-   Gemini
    
-   Character AI
    
-   Discord Bot
    
-   Telegram Bot
    

Chatbot 的核心目标是：

“自然语言交互。”

它不一定真正执行复杂任务。

很多 chatbot 的能力停留在：

-   问答
    
-   文本生成
    
-   简单建议
    
-   内容总结
    
-   翻译
    
-   基础代码生成
    

因此：

Chatbot 更像：

```text
Human ↔ Conversation Interface ↔ LLM
```

而不是完整 autonomous system。

* * *

## 2\. Chatbot 的工作流程

```text
用户输入
   ↓
聊天界面
   ↓
LLM 推理
   ↓
生成回答
   ↓
返回用户
```

这是最基础的 AI workflow。

如果进一步增强：

```text
User
 ↓
Chatbot UI
 ↓
LLM
 ↓
Search/API/Memory
 ↓
Response
```

这时已经开始接近 Agent。

* * *

## 3\. Chatbot 的优点

### 使用门槛低

用户直接对话即可。

### 非常适合：

-   学习
    
-   brainstorming
    
-   文本创作
    
-   coding assistant
    
-   quick research
    

### 适合快速验证 idea

很多 AI 产品第一版其实都是 chatbot。

* * *

## 4\. Chatbot 的局限

### 没有长期记忆

大多数 chatbot：

-   session limited
    
-   context 会丢失
    
-   无法长期跟踪任务
    

### 不会主动执行

它通常只会：

“回答。”

不会：

-   自动操作电脑
    
-   自动完成工作流
    
-   长期自主运行
    

### 缺少 orchestration

很多 chatbot 无法：

-   multi-step planning
    
-   autonomous workflow
    
-   complex tool execution
    

* * *

# 三、Hermes 是什么

## 1\. Hermes 的定义

Hermes 通常指 Nous Research 的 Hermes 系列模型。

它属于：

-   Instruction-tuned LLM
    
-   Agent-oriented LLM
    
-   Reasoning model
    

Hermes 不是单纯聊天模型。

它更强调：

-   tool use
    
-   structured output
    
-   reasoning
    
-   workflow coordination
    
-   autonomous behavior
    

因此很多 Agent 系统喜欢使用 Hermes。

* * *

## 2\. Hermes 的核心定位

Hermes 更像：

```text
AI Brain / AI Planner
```

它负责：

-   理解任务
    
-   推理
    
-   拆解步骤
    
-   调用工具
    
-   管理 workflow
    
-   生成 structured output
    

* * *

## 3\. Hermes 的工作流程

```text
User Task
    ↓
Hermes
    ↓
Reasoning / Planning
    ↓
Tool Calling
(Search/API/Files)
    ↓
Memory / Context
    ↓
Structured Output
```

如果再进一步：

```text
User
 ↓
Hermes Agent
 ↓
Task Planning
 ↓
Codex / APIs / Search
 ↓
Result Evaluation
 ↓
Final Output
```

这已经是 Agent workflow。

* * *

## 4\. Hermes 的优势

### 更适合 Agent 系统

Hermes 非常强调：

-   tool calling
    
-   multi-step reasoning
    
-   workflow chaining
    

### 适合长期学习系统

例如：

-   AI tutor
    
-   research agent
    
-   coding workflow
    
-   career optimization system
    

### 本地部署友好

Hermes 可以：

-   Ollama 本地运行
    
-   GPU 私有部署
    
-   接 LangGraph
    
-   接 AutoGen
    

这对 AI engineer 很重要。

* * *

## 5\. Hermes 的局限

### GUI 能力弱

Hermes 本身不会操作电脑。

它只是：

“决定做什么。”

### 工程稳定性不一定强于 Claude

在复杂 coding 上：

Claude Code / GPT-5 Codex 往往更稳定。

### 需要 workflow 框架配合

Hermes 通常需要：

-   LangGraph
    
-   OpenClaw
    
-   MCP
    
-   Tool layer
    

才能真正 autonomous。

* * *

# 四、OpenClaw 是什么

## 1\. OpenClaw 的定义

OpenClaw 更接近：

-   Computer Use Agent
    
-   Browser Agent
    
-   Agent Runtime
    
-   Autonomous Execution Framework
    

它的核心目标是：

“让 AI 真正操作电脑。”

例如：

-   打开网页
    
-   点击按钮
    
-   填表
    
-   下载文件
    
-   使用 terminal
    
-   操作软件
    

* * *

## 2\. OpenClaw 的核心定位

OpenClaw 更像：

```text
AI Body / Execution Layer
```

如果 Hermes 是“大脑”，

那么 OpenClaw 是：

-   手
    
-   眼睛
    
-   鼠标
    
-   键盘
    

它负责把 reasoning 转化为真实操作。

* * *

## 3\. OpenClaw 的工作流程

```text
User Goal
    ↓
LLM Reasoning
(Hermes/GPT)
    ↓
OpenClaw
    ↓
Screen Observation
    ↓
Action Decision
    ↓
Mouse/Keyboard Action
    ↓
Feedback Loop
    ↓
Next Action
```

这是典型 computer-use workflow。

* * *

## 4\. OpenClaw 的能力

### Browser Automation

例如：

-   自动申请工作
    
-   自动搜索信息
    
-   自动填写表单
    

### GUI Interaction

例如：

-   点击
    
-   输入
    
-   拖拽
    
-   切换窗口
    

### Tool Orchestration

它通常还能结合：

-   terminal
    
-   docker
    
-   APIs
    
-   OCR
    
-   vision model
    

* * *

## 5\. OpenClaw 的局限

### 本身不是“大脑”

OpenClaw 通常需要：

-   Hermes
    
-   GPT
    
-   Claude
    

作为 reasoning model。

### GUI automation 不稳定

网页变化可能导致：

-   点击失败
    
-   selector 错误
    
-   context confusion
    

### 成本较高

因为：

-   vision
    
-   screenshots
    
-   action loops
    

会消耗大量 token。

* * *

# 五、三者关系总结

## Chatbot vs Hermes vs OpenClaw

| 维度 | Chatbot | Hermes | OpenClaw |
| --- | --- | --- | --- |
| 本质 | 对话界面 | LLM/Reasoning | Agent Runtime |
| 主要作用 | 聊天交互 | 推理规划 | 执行操作 |
| 是否能长期规划 | 弱 | 强 | 中 |
| 是否会操作电脑 | 不会 | 不会 | 会 |
| 是否适合 Agent | 中 | 强 | 强 |
| 是否能独立使用 | 可以 | 可以 | 通常不行 |
| 是否支持 tool calling | 部分 | 强 | 强 |
| 核心定位 | Interface | Brain | Body |

* * *

# 六、典型真实工作流

## 场景：AI Career Optimization System

### 第一阶段：用户输入

```text
我想成为英国 AI systems engineer
```

* * *

### 第二阶段：Chatbot 接收输入

聊天界面负责：

-   用户交互
    
-   展示结果
    
-   管理 session
    

* * *

### 第三阶段：Hermes 推理

Hermes：

-   分析用户背景
    
-   搜索市场信息
    
-   识别技能缺口
    
-   制定 roadmap
    
-   输出计划
    

* * *

### 第四阶段：OpenClaw 执行

OpenClaw：

-   搜 LinkedIn
    
-   打开 GitHub
    
-   自动投递
    
-   自动整理岗位
    
-   自动填写申请
    

* * *

### 最终结构

```text
User
 ↓
Chatbot
 ↓
Hermes
 ↓
OpenClaw
 ↓
Real World Execution
```

这就是现代 AI Agent 系统。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->














# AI × Web3 课程笔记（2023 年后发展与融合方向）

* * *

# 第一部分：AI 在 2023 年后的技术发展

* * *

# Chapter 1 — 生成式 AI（Generative AI）时代的开启

## 1.1 什么是生成式 AI

在 2023 年之前，大多数 AI 系统本质上是：

```text
输入数据 → 输出预测结果
```

例如：

-   图片分类
    
-   推荐系统
    
-   搜索排序
    
-   垃圾邮件检测
    
-   风控评分
    

它们通常只能完成“单一任务”。

而 2023 年后，AI 开始进入：

# Generative AI（生成式 AI）时代

其核心变化是：

# AI 不只是“判断”

而是开始“创造”。

例如：

-   写文章
    
-   写代码
    
-   生成图片
    
-   生成视频
    
-   生成语音
    
-   自动总结
    
-   自动推理
    

其中最重要的代表是：

-   OpenAI 的 GPT-4
    
-   Anthropic 的 Claude
    
-   Google 的 Gemini
    
-   Meta 的 Llama
    
-   DeepSeek 的 DeepSeek-R1
    

这些模型统称为：

# LLM（Large Language Model，大语言模型）

* * *

## 1.2 大语言模型（LLM）的核心原理

LLM 的本质可以理解为：

# “预测下一个 token 的概率机器”

例如：

输入：

```text
I love drinking
```

模型会预测：

```text
tea
coffee
water
```

哪个词概率最高。

虽然原理听起来简单，但由于：

-   参数规模巨大
    
-   训练数据极多
    
-   Transformer 架构强大
    

模型开始出现：

-   推理能力
    
-   语言理解能力
    
-   代码能力
    
-   长文本能力
    

* * *

## 1.3 Transformer 架构的重要性

现代 LLM 基本都基于：

# Transformer Architecture

由 Google Brain 在论文：

# “Attention Is All You Need”

中提出。

Transformer 最核心的机制：

# Attention（注意力机制）

其核心思想：

```text
模型会动态关注最重要的信息
```

例如：

句子：

```text
The animal didn't cross the street because it was tired.
```

模型会理解：

```text
it = animal
```

而不是 street。

这让 AI 第一次真正具备：

# 上下文理解能力

* * *

# Chapter 2 — 多模态 AI（Multimodal AI）

* * *

## 2.1 AI 为什么需要多模态

人类不是只通过文字理解世界。

而是通过：

-   视觉
    
-   听觉
    
-   语言
    
-   动作
    

共同感知世界。

因此：

# 下一代 AI 必须具备多模态能力

即：

# 一个模型同时处理：

-   文本
    
-   图片
    
-   音频
    
-   视频
    
-   代码
    
-   屏幕
    

* * *

## 2.2 GPT-4o 与实时 AI

2024 年后，多模态 AI 开始爆发。

代表包括：

-   GPT-4o
    
-   Gemini
    
-   Claude Vision
    

它们开始支持：

-   图片理解
    
-   OCR
    
-   视频分析
    
-   语音实时对话
    
-   屏幕识别
    

例如：

用户上传一张图：

AI 可以：

-   识别内容
    
-   分析逻辑
    
-   解数学题
    
-   阅读图表
    
-   理解 UI
    

这意味着：

# AI 开始获得“视觉能力”

* * *

## 2.3 多模态的重要意义

多模态意味着：

AI 开始从：

```text
语言系统
```

变成：

```text
数字世界感知系统
```

这会直接推动：

-   AI 助手
    
-   自动驾驶
    
-   AI 机器人
    
-   AI 操作电脑
    
-   AI 自动办公
    

的发展。

* * *

# Chapter 3 — Agentic AI（智能体 AI）

* * *

## 3.1 什么是 AI Agent

很多人认为：

Agent = 更复杂的 Prompt。

实际上并不是。

真正的 Agent 包括：

| 能力 | 含义 |
| --- | --- |
| Memory | 长期记忆 |
| Planning | 任务规划 |
| Tool Use | 工具调用 |
| Reflection | 自我反思 |
| Multi-step Reasoning | 多步推理 |
| Environment Interaction | 与环境交互 |

因此：

# Agent 本质上是“可行动的 AI”

* * *

# Chapter 4 — 推理模型（Reasoning Models）

* * *

## 4.1 从“语言生成”到“逻辑推理”

早期模型主要擅长：

-   模仿语言
    
-   生成文本
    

但：

不擅长复杂逻辑。

因此：

2024 年后 AI 开始强调：

# Reasoning（推理能力）

* * *

## 4.2 Chain-of-Thought（思维链）

推理模型的重要机制：

# Chain-of-Thought

即：

AI 不直接输出答案。

而是：

```text
问题
→ 分析
→ 分步骤推理
→ 验证
→ 输出
```

例如数学问题：

x^2-5x+6=0

模型会先：

1.  因式分解
    
2.  求根
    
3.  验证结果
    

而不是直接猜答案。

* * *

## 4.3 推理模型的重要意义

Reasoning Model 的意义在于：

# AI 开始接近“决策系统”

而不是：

# 单纯聊天机器人

这会推动：

-   自动研究
    
-   自动交易
    
-   自动分析
    
-   自动编程
    
-   自动科学研究
    

的发展。

* * *

# AI × Web3 的融合方向

* * *

# Chapter 5 — AI × Web3 的核心逻辑

* * *

## 5.1 两者为什么会融合

AI 最大的问题：

| AI 的问题 | Web3 的能力 |
| --- | --- |
| 黑箱 | 可验证 |
| 数据归属不清 | Ownership |
| 中心化 | 去中心化 |
| Agent 缺乏经济系统 | Token Economy |

因此：

# AI 提供智能

# Web3 提供信任

* * *

# Chapter 6 — AI Agent × Crypto Wallet

* * *

## 6.1 AI Wallet 的概念

未来钱包可能不只是：

# 存储资产

而会变成：

# Autonomous Economic Agent

即：

AI 自动：

-   管理资产
    
-   执行交易
    
-   分析风险
    
-   支付费用
    

* * *

## 8.2 Agent Economy

未来可能出现：

```text
AI 自己赚钱
AI 自己消费
AI 自己协作
```

例如：

-   AI 接任务
    
-   AI 写代码
    
-   AI 获得 Token
    
-   AI 支付 GPU 成本
    

这就是：

# Autonomous Economy（自主经济）

* * *

# Chapter 7 — AI × Web3 Security

* * *

## 7.1 为什么 AI 非常适合 Web3 安全

区块链数据：

-   开放
    
-   可追踪
    
-   结构化
    

非常适合 AI：

-   图分析
    
-   异常检测
    
-   行为识别
    

* * *

## 7.2 未来的重要方向

包括：

-   Smart Contract Audit
    
-   Fraud Detection
    
-   Wallet Risk Scoring
    
-   Scam Detection
    
-   On-chain Monitoring
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
