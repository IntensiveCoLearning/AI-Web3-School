---
timezone: UTC+8
---

# liuxingzhi

**GitHub ID:** CyberAngel0226

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-10
<!-- DAILY_CHECKIN_2026-06-10_START -->
今天主要推进了 Issue 7 的 Python Agent 接入基础。

完成内容：

-   创建并切换到分支  
    `feat/Issue-7-Generate-Marke-Structure-Lens-recommendations`
    
-   重新分析远程 `dev` 合并后的代码，确认已存在 TS 侧 Market Structure adapter：
    
    -   `adaptMarketStructureDraft()`
        
    -   负责把 Python draft 包装成正式 `AgentRecommendation`
        
-   按 TDD 补了 Python Reader + TS subprocess bridge：
    
    -   新增 `agents/market_structure_lens.py`
        
    -   TS 可调用 Python 生成 `MarketStructureRecommendationDraft`
        
    -   TS 可继续包装成正式 `AgentRecommendation`
        
    -   支持弱市场结构输出 `HOLD`
        
-   新增 Python Reader 的 LLM request 产物：
    
    -   `--mode llm-request`
        
    -   可把 `EvidenceSnapshot` 转成后续 LLM 可消费的结构化输入
        
-   新增 fixture：
    
    -   `tests/fixtures/evidence-snapshot.market-structure.json`
        
    -   方便本地直接查看 Python Reader 产物
        
-   修复直接运行 Python 测试时报 `No module named 'agents'` 的问题。
    
-   更新测试：
    
    -   TS Market Structure Lens bridge 测试
        
    -   Python reader/CLI 测试
        
    -   `npm test` 已包含 Python 测试
        

验证结果：

```
npm test
```

已通过。

当前说明：

-   现在还没有真实调用 LLM。
    
-   当前默认 draft 是本地规则生成。
    
-   已预留真实 LLM 接入点：后续可以在 Python 中新增 `--mode llm-draft`，让 LLM 输出同样的 draft JSON，再交给 TS adapter 校验并包装。
<!-- DAILY_CHECKIN_2026-06-10_END -->

# 2026-06-09
<!-- DAILY_CHECKIN_2026-06-09_START -->

\# 今日日报｜2026-06-09

\## 项目

ColdRead：预测市场 Agent 审计决策系统

\## 今日完成

1\. 梳理并收敛了 ColdRead MVP 的核心定位：

使用 Polymarket 数据筛出一边倒预测盘口，用 Tavily 背景信息确认风险，再由多个 Analysis Agent 给出建议，Decision Scorer 选择最终决策，并将 Decision Dossier 锚定到测试网。

2\. 建立了项目领域词汇表：

已在 `CONTEXT.md` 中定义 Decision Run、Market Screener、Screened Market、Evidence Snapshot、Agent Recommendation、Final Decision、Audit Anchor、Decision Timeline 等核心概念。

3\. 明确了 MVP 范围边界：

MVP 使用真实 Polymarket 数据、Tavily 背景信息和测试网 Audit Anchor，但不做真实 Polymarket 下单，也不做无人值守自动下注。

4\. 记录了关键架构决策：

已创建 6 条 ADR，覆盖链下档案与链上锚点、先选择建议不合成、先跟随市场共识、不做反向下注、MVP 要求用户确认、测试网锚定、真实执行后置等决策。

5\. 生成了中文 PRD：

已完成 `docs/prd.md`，包含问题背景、解决方案、用户故事、实现决策、测试决策、范围边界和后续说明。

6\. 生成了 MVP 摘要文档：

已完成 `docs/mvp.md`，用于快速对齐产品目标、核心流程、Agent 设计、评分器、审计模型、执行边界和 V2 延后项。

7\. 拆分了 GitHub 多人协作 issues：

已完成 `docs/issues.md`，共拆成 14 个 issue，并按 milestone、依赖关系、AFK/HITL、验收标准组织。

\## 关键产出文件

\- `CONTEXT.md`

\- `docs/mvp.md`

\- `docs/prd.md`

\- `docs/issues.md`

\- `docs/adr/0001-0006`

\## 待确认事项

1\. GitHub 仓库的 issue tracker、labels、milestones 是否需要我继续初始化。

2\. 测试网 Audit Anchor 具体使用哪条测试网。

3\. Polymarket 粗筛阈值：价格极端、流动性、截止时间等具体数值。

4\. Tavily 搜索结果的摘要、引用和反证判断标准。

5\. 前端技术栈和项目脚手架选择。

\## 明日建议计划

1\. 初始化 GitHub milestones 和 labels。

2\. 将 `docs/issues.md` 中的 14 个 issue 发布到 GitHub。

3\. 启动 Issue 1：定义 ColdRead domain contracts 和 Decision Timeline states。

4\. 搭建最小项目骨架，为 Polymarket、Tavily、Agent、Scorer、Audit Anchor 预留接口。
<!-- DAILY_CHECKIN_2026-06-09_END -->

# 2026-06-08
<!-- DAILY_CHECKIN_2026-06-08_START -->


今天完成了一个较清晰的 AI × Web3 项目方向设计：  
**Agent 决策上链浏览器。**

这个项目基于 Polymarket 相关研究积累，但避开直接交易，转向更有差异化的“透明性”和“可审计性”。核心思路是将 Agent 每次决策、推理过程、置信度和签名进行链上存证，并通过前端浏览器展示 Agent 的决策时间线、推理树和可信度对比。

后续可以继续推进三个方向：

1.  设计前端 Demo 页面原型
    
2.  定义 Agent 决策数据结构
    
3.  搭建一次完整的链上存证流程
    

整体来看，这是一个比较适合 AI × Web3 学习阶段落地的项目，既能体现 Agent 能力，又能体现 Web3 的公开、可信、可验证特性。
<!-- DAILY_CHECKIN_2026-06-08_END -->

# 2026-06-07
<!-- DAILY_CHECKIN_2026-06-07_START -->



```
1. 在 Remix VM 中重新部署 ETHTransfer
2. 部署时确认 Value = 0，Gas limit = auto
3. 成功部署后调用 getBalance
4. 使用 deposit 给合约充值 0.001 ETH
5. 使用 sendETH 给 Account 2 转 0.0001 ETH
6. 查看合约余额变化
7. 切换到 Sepolia，用 MetaMask 真实部署测试网合约
8. 在 Sepolia Etherscan 查看部署交易、deposit 交易、sendETH 交易
9. 查看 Internal Txns 和 Events 日志
```
<!-- DAILY_CHECKIN_2026-06-07_END -->

# 2026-06-05
<!-- DAILY_CHECKIN_2026-06-05_START -->




今天最大的收获是：已经从“只看交易和钱包余额”，进入到“理解合约如何控制链上状态和资金流转”的阶段。

```
钱包转账和合约转账不一样
合约本身也有地址和余额
合约能不能收 ETH，取决于是否有 payable / receive
合约能不能转 ETH，取决于代码逻辑
部署合约、调用合约、转账合约都会产生不同类型的链上交易
Value、_amount、Gas limit 是三个不同概念
```
<!-- DAILY_CHECKIN_2026-06-05_END -->

# 2026-06-04
<!-- DAILY_CHECKIN_2026-06-04_START -->





今天的核心收获是：从“想做一个 AI-Agent 项目”推进到了“知道项目该怎么落地”的阶段。

尤其是明确了三个重要点：

1\. 本地模型服务是 Agent 的基础能力

Ollama 可以作为本地模型入口，为后续 Agent 提供基础推理能力。

2\. 跨机器调用需要服务监听和网络配置

单机运行不等于其他机器能访问，必须处理：

```
监听地址
局域网 IP
端口开放
防火墙
访问路径
```

3\. 安全访问不能直接裸露 Ollama

本地测试，可以局域网直连；但如果要更安全、更像正式项目，应该用：

```
Nginx 反向代理 + Basic Auth + 防火墙限制
```
<!-- DAILY_CHECKIN_2026-06-04_END -->

# 2026-06-02
<!-- DAILY_CHECKIN_2026-06-02_START -->







今天最大的收获是：**VC 视角看项目，重点不是技术有多复杂，而是商业逻辑是否清晰。**

一个好的 AI Agent × Web3 项目，需要同时具备以下几个特点：

1.  **痛点明确**：不是泛泛地说 AI 和 Web3 结合，而是指出 Agent 在支付、身份、权限、结算等方面的具体问题。
    
2.  **场景具体**：要找到一个可以落地的小场景，而不是一开始就做大平台。
    
3.  **闭环清楚**：用户、Agent、服务方、支付和验证之间要能形成完整链路。
    
4.  **时机合理**：AI Agent 的发展正在带来新的自动化交互需求，而 Web3 可以提供开放支付、身份和结算能力。
    
5.  **壁垒可建立**：未来可以通过协议标准、数据积累、信誉系统、开发者生态和交易网络形成护城河。
<!-- DAILY_CHECKIN_2026-06-02_END -->

# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->









今天梳理了 VC 在看项目时最关注的几个核心问题：项目定位是否清晰、痛点是否真实、市场空间是否足够大、为什么现在是合适时机、团队为什么适合做这件事，以及未来是否能够形成壁垒。

在 AI Agent × Web3 方向上，进一步明确了项目不能只停留在概念层面，而应该围绕具体场景展开，例如 Agent 支付、身份验证、服务发现、钱包权限管理、安全执行和链上结算等。相比泛泛地说“AI 和 Web3 结合”，更重要的是找到一个可以被验证的闭环场景。

今天还重点思考了 MVP 的设计方式。一个好的早期项目不一定要功能完整，但要能展示关键价值。比如让一个 AI Agent 完成从发现服务、请求报价、支付、调用 API、验证结果到结算的完整流程，这样更容易让投资人理解项目的实际价值。
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->











今天主要完成了 AI × Web3 方向的整体学习梳理，重点了解了 AI Agent 与 Web3 结合后的几个核心应用方向，包括机器支付、Agent 身份、能力声明、互操作协议、钱包权限管理和安全执行等内容。

在学习过程中，我对 AI Agent 未来如何进入 Web3 体系有了更清晰的认识。Agent 不只是一个对话工具，它未来可能会成为能够调用 API、购买服务、持有身份、完成支付、执行链上操作的独立执行单元。因此，Web3 可以为 Agent 提供身份、资产、权限、结算和可信验证等基础设施。

今天重点梳理了三个方向：第一是 Payment / Commerce / Settlement，主要关注 Agent 如何完成支付、结算和商业闭环；第二是 Identity / Reputation / Capability / Interoperability，主要关注 Agent 如何被发现、调用、验证和协作；第三是 Wallet / Permission / Safe Execution，主要关注 Agent 在接触钱包和链上操作时如何保证安全、可控和可审计。

通过今天的学习，我初步明确了后续可以重点关注的主线：Agent 身份与能力声明、Agent 机器支付、Agent 钱包权限和安全执行。这些方向既有协议层价值，也有产品和工具层的落地空间，适合作为后续 AI × Web3 学习和项目实践的重点。
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->












AI × Web3 并不是单一方向，而是可以分为支付、身份、钱包权限、安全隐私、开发工具、治理协作和 DeFi 执行等多个模块。

同时也明确了自己当前不应该一开始就选择过于复杂的 DeFi 执行或钱包权限方向，而是应该先从 **Web3 开发者工具 Agent** 入手，通过实际项目逐步积累对 Web3 协议、合约、链上数据和 Agent 工作流的理解。  
  
明天计划围绕 **Dev Tooling / Agent Workflow** 开始做更具体的拆解：

1.  梳理一个 Web3 Builder 在学习和开发中的完整流程；
    
2.  找出其中最适合 AI Agent 介入的 3 个场景；
    
3.  设计一个最小可行 Demo，例如“Web3 文档总结 Agent”；
    
4.  确定需要学习的技术栈：Python、LLM API、Agent 框架、[Web3.py](http://Web3.py)、区块链浏览器 API、飞书/GitHub 集成；
    
5.  输出一个项目 Roadmap，为后续 Hackathon 或作品集做准备。
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->













-   明确了 AI Agent 的核心价值：从“被动回答”转向“主动执行任务”。
    
-   理解了 Agent 的基本运行流程：理解目标、拆解任务、调用工具、执行任务、反馈优化。
    
-   认识到工具调用和记忆系统是 Agent 能够完成复杂任务的关键。
    
-   初步了解了 AI Agent 与 Web3 的结合方向，包括链上数据分析、钱包交互、智能合约辅助和机器支付等。
    
-   明确了后续学习方向：先理解 Agent 架构，再进行本地部署和实际项目实践。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->














今天的学习重点是对 Open Agentic Economy 后续学习路径进行系统梳理。

通过今天的学习，我明确了 AI × Web3 的核心机会不是简单地让 AI 调用区块链，而是让 Agent 拥有身份、信用、支付、验证和协作能力。

ERC-8004 和 ERC-8183 分别从 **信任层** 和 **交易层** 支撑 Agentic Economy：

-   ERC-8004 解决 Agent 是谁、是否可信、如何被验证的问题。
    
-   ERC-8183 解决 Agent 如何接任务、交付、验收和结算的问题。
    

后续学习需要从理论理解逐步进入实际 Builder 路径，重点完成一个简化版 **Agent Task Escrow Demo**，通过实践理解 AI Agent 与 Web3 协议标准结合的完整流程。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->















今天完成了 Open Agentic Economy 后续学习计划的整理，明确了从概念学习到项目实践的路径。

后续学习将按照：

```
Agentic Economy 基础
↓
ERC-8004 身份与声誉
↓
ERC-8183 任务与结算
↓
机器支付
↓
Demo 产品设计
↓
Solidity 合约实践
↓
AI Agent 与链上任务结合
```

这个路线逐步推进。

整体来看，AI × Web3 的核心机会不只是让 AI 调用链上功能，而是让 Agent 具备身份、信用、支付、验证和协作能力。后续需要继续围绕这一方向深入学习，并尝试完成一个可以展示的 Agent Task Escrow Demo。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->
















今天学习了 Open Agentic Economy 相关课程，重点了解了 AI Agent 与 Web3 协议标准结合后的发展方向，尤其是 ERC-8004 和 ERC-8183 在 Agent 经济中的作用。

ERC-8004 主要解决 Agent 的身份、声誉、发现和验证问题。它可以让不同平台、不同组织开发的 Agent 拥有统一的链上身份，并通过声誉和验证机制建立可信交互基础。其核心价值在于为开放 Agent 经济提供一个去中心化的信任层。

ERC-8183 主要解决 Agent 之间的商业交易流程问题。它通过 Job、Escrow、Client、Provider、Evaluator 等角色和机制，把任务发布、资金托管、结果提交、验收判断、支付结算等流程标准化。相比单纯的链上支付，ERC-8183 更像是 Agent 之间完成商业协作的任务协议。

通过本次学习，我理解到 AI × Web3 的关键并不只是“让 Agent 拥有钱包”，而是要让 Agent 具备完整的经济行为能力，包括身份、任务、支付、验证、声誉和结算。ERC-8004 和 ERC-8183 分别从信任层和交易层补足了 Agent 经济的重要基础设施。

## 今日核心收获

1.  **Agentic Economy 的本质**
    
    Agentic Economy 是让 AI Agent 能够像独立经济主体一样，进行任务协作、服务购买、结果交付和收益结算。
    
2.  **ERC-8004 的作用**
    
    ERC-8004 更偏向 Agent 的身份和信任层，解决“这个 Agent 是谁、是否可信、过去表现如何、输出是否可以验证”的问题。
    
3.  **ERC-8183 的作用**
    
    ERC-8183 更偏向 Agent 的交易和结算层，解决“Agent 如何接任务、如何托管资金、如何提交结果、如何验收、如何付款或退款”的问题。
    
4.  **两者结合的意义**
    
    ERC-8004 + ERC-8183 可以形成一个较完整的 Agent 商业闭环：  
    先通过 ERC-8004 识别和评估 Agent，再通过 ERC-8183 完成任务协作和支付结算。
    
5.  **对 Builder 的启发**
    
    后续可以尝试构建一个 Agent 任务市场 Demo，让用户发布任务、托管测试币，Agent 完成任务后提交结果，再由 Evaluator 验证并完成结算。
    

## 今日思考

过去我理解的 AI Agent 更多是“自动执行任务的工具”，但今天学习后发现，Web3 可以进一步让 Agent 变成“可交易、可验证、可积累信用的经济主体”。

如果未来 Agent 能拥有身份、钱包、信用记录和任务履约能力，那么很多场景都可以被重构，例如自动数据分析、链上风控、智能合约审计、信息检索、自动交易、API 调用付费、模型服务市场等。

不过，当前仍然存在一些问题需要继续研究：

-   Agent 的声誉如何防止刷分？
    
-   Evaluator 如果作恶怎么办？
    
-   复杂任务的完成质量如何自动判断？
    
-   小额高频支付的成本如何降低？
    
-   Agent 身份和现实开发者责任如何绑定？
    
-   多个 Agent 协作时，失败责任如何划分？
    

## 后续学习计划

明天可以继续围绕以下方向学习：

1.  深入阅读 ERC-8004 的具体结构，重点理解 Identity、Reputation、Validation 三个模块。
    
2.  学习 ERC-8183 的 Job 状态机和 Escrow 合约逻辑。
    
3.  研究 x402、Agent 支付、机器支付和 ERC-8183 之间的关系。
    
4.  尝试设计一个最小可行 Demo：用户发布任务 → Agent 接单 → 提交结果 → 验证 → 自动结算。
    
5.  结合 Sepolia 测试网和 MetaMask，尝试用 Solidity 写一个简化版 Agent Escrow 合约。
    

## 今日总结

今天的学习让我对 AI Agent 和 Web3 结合的路径有了更清晰的认识。ERC-8004 解决 Agent 的身份与信任问题，ERC-8183 解决 Agent 的任务交易与支付结算问题。二者结合后，可以支撑一个开放的 Agentic Economy。

对我来说，后续学习重点应该从“理解概念”逐步转向“动手构建”。最适合的实践方向是做一个简化版 Agent 任务市场，通过 Demo 理解 Agent 身份、任务发布、资金托管、结果验证和自动结算的完整流程。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->

















今天完成了对 AI-Agent 和 Web3 结合方向的系统分析。整体来看，AI-Agent 解决的是“自动理解和执行任务”的问题，Web3 解决的是“资产、身份、支付和可信记录”的问题。两者未来最可能在钱包助手、链上支付、DeFi 自动化、智能合约交互和链上数据分析等方向融合。  
  
AI-Agent 和 Web3 的结合不是简单地“AI + 区块链”概念叠加，而是存在明确的互补关系：

-   AI-Agent 提供自动决策和任务执行能力；
    
-   Web3 提供钱包、资产、支付、身份和可验证执行环境；
    
-   两者结合后，可能形成“可自主执行、可支付、可验证”的数字代理。
    

未来真正有价值的 Web3 Agent，不应该只是会回答问题，而应该能够安全地完成链上查询、交易构造、风险判断、合约调用和结果追踪。  
  
AI-Agent 操作 Web3 时存在明显风险，尤其是：

-   私钥泄露风险；
    
-   Agent 理解错误导致错误交易；
    
-   智能合约交互不可逆；
    
-   DeFi 自动化策略可能造成资产损失；
    
-   合规和监管问题尚不明确。
    

因此，后续学习和开发时应优先使用测试网，并设计人工确认、权限限制、交易模拟和风险提示机制。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->


















今天主要围绕 Web3 的基础运行原理进行了系统学习，并结合实际操作完成了测试网环境的体验与理解。

### 1\. Web3 整体运行原理梳理

对 Web3 的核心架构进行了系统总结，主要包括：

-   区块链本质：
    
    -   区块按时间顺序组成链式结构
        
    -   每个区块保存交易数据
        
    -   通过哈希保证不可篡改
        
-   去中心化网络：
    
    -   不依赖单一服务器
        
    -   由大量节点共同维护账本
        
    -   节点之间通过共识机制同步数据
        
-   钱包机制：
    
    -   学习了公钥、私钥、地址之间的关系
        
    -   理解钱包本质是“私钥管理工具”
        
    -   MetaMask 实际不保存资产，资产始终记录在链上
        
-   Gas 与链上交易：
    
    -   每次链上操作都需要支付 Gas Fee
        
    -   Gas 用于支付节点计算与打包成本
        
    -   交易需要经过广播、验证、打包、确认等流程
        
-   智能合约：
    
    -   智能合约本质是部署在区块链上的程序
        
    -   用户通过交易调用合约函数
        
    -   合约执行结果由全网节点共同验证
        

* * *

### 2\. 测试网与 Faucet 实践

实际体验了 Ethereum Sepolia 测试网环境：

-   使用 Faucet 领取测试 ETH
    
-   学习测试网与主网区别
    
-   理解：
    
    -   Faucet 发放的是测试资产
        
    -   测试资产需要对应网络才能显示
        
    -   区块浏览器已确认到账 ≠ 钱包一定立即显示
        

同时排查了 MetaMask 中余额未同步的问题，包括：

-   RPC 网络配置
    
-   链切换
    
-   区块确认
    
-   钱包同步机制
    

* * *

### 3\. Web3 转账流程理解

重点理解了一笔链上转账的完整流程：

1.  钱包使用私钥签名交易
    
2.  交易广播到区块链网络
    
3.  节点验证签名合法性
    
4.  矿工/验证者打包交易
    
5.  区块确认后资产状态更新
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->



















## 今日完成内容

### 1\. Web3 开发基础环境搭建

-   完成 MetaMask 钱包创建与基础配置
    
-   开启测试网络环境（Sepolia）
    
-   学习并理解测试网与主网的区别
    
-   理解不同链之间资产不互通的概念（Ethereum Sepolia / Base Sepolia 等）
    

* * *

### 2\. 测试网 Faucet 领取测试 ETH

-   尝试多个 Faucet：
    
    -   Google Cloud Web3 Faucet
        
    -   Alchemy Faucet
        
    -   QuickNode Faucet
        
-   学习 Faucet 风控机制：
    
    -   主网余额校验
        
    -   防机器人限制
        
    -   测试 ETH 发放限制
        

* * *

### 3\. 链上交易与区块浏览器验证

-   成功完成测试 ETH 的链上领取
    
-   学习通过区块浏览器验证交易状态
    
-   理解：
    
    -   Tx Hash
        
    -   区块高度
        
    -   Gas Fee
        
    -   链上状态
        
-   认识到：
    
    -   区块浏览器数据才是真实链上状态
        
    -   MetaMask 只是 RPC/UI 客户端
        

* * *

### 4\. MetaMask 与 RPC 原理学习

-   排查 MetaMask 不显示余额问题
    
-   学习 RPC 节点与钱包同步机制
    
-   理解：
    
    -   钱包不存储余额
        
    -   余额实际存储在链上
        
    -   RPC 负责读取链上状态
        
-   尝试切换 RPC 节点解决同步问题
    

* * *

### 5\. Web3 开发代码学习

-   学习使用 ethers.js 读取链上余额
    
-   搭建 Node.js Web3 开发环境
    
-   理解：
    
    -   provider
        
    -   signer
        
    -   sendTransaction
        
    -   getBalance
        
-   初步进入 DApp 开发阶段
    

* * *

## 今日收获

-   理解 Web3 与传统 Web2 最大区别：
    
    -   数据不在客户端
        
    -   链上状态才是真实数据
        
-   初步掌握：
    
    -   钱包
        
    -   测试网
        
    -   RPC
        
    -   链上交易
        
    -   区块浏览器
        
-   完成 Web3 开发最基础闭环：
    
    -   创建钱包
        
    -   获取测试币
        
    -   查询链上交易
        
    -   读取链上余额
        

* * *

## 后续计划

-   使用 ethers.js 完成第一次代码转账
    
-   学习 Solidity 智能合约开发
    
-   使用 Foundry/Anvil 搭建本地链开发环境
    
-   尝试开发简单 Web3 DApp
    
-   探索 AI Agent + Web3 结合方向
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->




















### 今日完成：

1.  完成 Hermes 本地 AI Agent 的部署与环境配置
    
    -   在 MacOS 完成 Hermes 本地化运行环境搭建
        
    -   验证 Agent 服务运行状态与基础功能可用性
        
    -   对接本地模型与相关配置参数，完成基础调试
        
2.  完成 Hermes 与飞书账号的联通测试
    
    -   成功连接个人飞书账号
        
    -   完成 AI Agent 与飞书的消息收发验证
        
    -   实现基础对话能力测试，验证整体链路稳定性
        
3.  完成 Web3 相关知识整理与总结
    
    -   梳理 Web3 基础概念与核心架构
        
    -   总结区块链、钱包、智能合约等关键知识点
        
    -   对 AI Agent 与 Web3 结合方向进行了初步调研与思考
        

### 明日计划

-   继续优化 Hermes 本地部署结构与配置管理
    
-   尝试接入更多工具链与插件能力
    
-   深入研究 AI Agent 与 Web3 场景结合方案
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
