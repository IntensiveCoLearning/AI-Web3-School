---
timezone: UTC+8
---

# Yu An

**GitHub ID:** YuAnReL

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->
## **Today’s Goal**

-   学习链感知上下文（chain-aware context）的组成。
    
-   理解 On-chain Data、Contract Docs、ABI / Event、Transaction History、Explorer Context、Indexing Context、Citation 等知识节点。
    
-   梳理这些上下文在 AI Agent 链上交互中的作用和边界。
    

## **Learning Materials**

-   Handbook:
    
-   WCB Learning:
    
-   Topic: Chain-aware context for AI Agent and Web3 interaction
    

## **Notes**

### **Chain-Aware Context Overview**

-   今天学习的主题是链感知上下文。
    
-   对 AI Agent 来说，链上交互不能只依赖自然语言描述，而需要把链上数据、合约语义、交易历史、索引结果和可验证引用一起放进上下文。
    
-   链感知上下文的核心目标是：让 Agent 在理解和执行链上任务时，知道数据来自哪条链、哪个区块、哪个合约、哪个方法，以及这些信息是否可验证。
    
-   如果缺少这些上下文，模型很容易把不同链、不同时间、不同合约和不同版本的数据混在一起。
    

### **Knowledge Node: On-chain Data**

-   难度：初级。
    
-   On-chain Data 是链上可直接验证的数据，例如：
    
    -   账户余额。
        
    -   交易。
        
    -   日志。
        
    -   合约状态。
        
    -   区块信息。
        
-   常见来源包括：
    
    -   RPC。
        
    -   区块浏览器。
        
    -   索引器。
        
    -   协议 API。
        
-   对 Agent 来说，读取 on-chain data 时至少要带上：
    
    -   chain id
        
    -   block number
        
    -   contract address
        
    -   method
        
    -   返回值
        
    -   读取时间
        
-   这些字段的价值在于给链上事实加坐标。没有坐标的数据很容易被误用，例如把主网数据和测试网数据混在一起，或者把旧区块的数据当成当前状态。
    

### **Knowledge Node: Contract Docs**

-   难度：初级。
    
-   Contract Docs 帮助模型理解合约的：
    
    -   设计意图。
        
    -   参数含义。
        
    -   权限边界。
        
    -   使用方式。
        
-   ABI 只能告诉工具函数签名，不能解释业务语义。
    
-   例如 execute(bytes calldata data) 这个函数名和参数本身并不能说明它到底是普通执行入口，还是高权限入口。
    
-   文档、NatSpec、README、审计报告和部署说明可以补足 ABI 缺失的语义。
    
-   但文档也可能过期。Agent 读取文档后，仍要用链上数据验证：
    
    -   合约地址是否匹配。
        
    -   合约版本是否匹配。
        
    -   owner 是否一致。
        
    -   proxy implementation 是否一致。
        
    -   事件和最近交易是否符合文档描述。
        
-   所以 Contract Docs 更像“语义解释层”，不能替代链上事实验证。
    

### **Knowledge Node: ABI / Event**

-   难度：中级。
    
-   ABI 和 Event 是 Agent 理解合约可调用能力和历史行为的核心结构。
    
-   ABI 的作用：
    
    -   编码函数调用。
        
    -   解码返回值。
        
    -   解析错误。
        
    -   让工具知道合约有哪些可调用方法。
        
-   Event 的作用：
    
    -   合约向外部系统留下业务日志。
        
    -   让 indexer、前端、数据服务和 Agent 理解过去发生过什么。
        
-   常见事件包括：
    
    -   Transfer
        
    -   Swap
        
    -   Deposit
        
    -   VoteCast
        
-   使用 ABI 时要注意：能调用不等于应该调用。
    
-   写交易前还需要检查：
    
    -   权限。
        
    -   余额。
        
    -   allowance。
        
    -   slippage。
        
    -   simulation。
        
    -   policy。
        
-   相关 topic：
    
    -   智能合约（Smart Contract）：理解 ABI 和 event 在合约交互中的位置。
        
    -   索引（Indexing）：继续看 event 如何进入索引层。
        

### **Knowledge Node: Transaction History**

-   难度：中级。
    
-   Transaction History 帮助 Agent 理解用户或合约过去做过什么。
    
-   交易历史可以用于判断：
    
    -   用户是否已经授权。
        
    -   某个策略是否执行过。
        
    -   某个地址是否和高风险合约交互过。
        
    -   某个合约最近是否升级过。
        
-   交易历史不能只看自然语言总结。
    
-   至少要保留：
    
    -   transaction hash
        
    -   block number
        
    -   from
        
    -   to
        
    -   method
        
    -   value
        
    -   token transfers
        
    -   logs
        
-   模型可以总结交易历史，但证据必须能回到链上。
    
-   对 Agent 来说，交易历史既是记忆，也是风控证据。
    

### **Knowledge Node: Explorer Context**

-   难度：初级。
    
-   Explorer Context 是区块浏览器提供的可视化链上证据。
    
-   区块浏览器适合给用户和 Agent 提供可检查入口，例如：
    
    -   交易是否成功。
        
    -   合约是否验证。
        
    -   源码是否公开。
        
    -   事件是否发出。
        
    -   token transfer 是否发生。
        
-   在 AI 产品里，给出 explorer link 比只给一句“交易成功”更可靠。
    
-   用户可以自己打开链接核验，开发者也能根据链接排查错误。
    
-   Explorer Context 的价值是把 Agent 的回答和可检查证据连接起来。
    

### **Knowledge Node: Indexing Context**

-   难度：中级。
    
-   Indexing Context 是把链上事件整理成面向产品查询的数据。
    
-   Agent 需要的问题通常不是“某个区块里有什么”，而是：
    
    -   用户最近 30 天有哪些 DeFi 操作？
        
    -   这个池子的 TVL 变化如何？
        
    -   这个 Agent 做过哪些支付？
        
    -   某个地址是否经常和高风险合约交互？
        
-   这类查询通常需要索引层。
    
-   索引上下文必须带：
    
    -   时间戳。
        
    -   同步状态。
        
    -   数据来源。
        
    -   最后同步区块。
        
-   一个落后 500 个区块的索引结果，不应该被 Agent 当成当前事实。
    
-   所以 indexed data 很适合做历史查询、聚合分析和产品展示，但涉及资金操作前仍要用实时链上数据或 RPC 再确认。
    

### **Knowledge Node: Citation**

-   难度：初级。
    
-   Citation 是让模型回答能回到具体链上证据或文档来源。
    
-   链上场景里的引用可以是：
    
    -   交易哈希。
        
    -   区块号。
        
    -   合约地址。
        
    -   event log。
        
    -   explorer 链接。
        
    -   文档 URL。
        
    -   审计报告章节。
        
-   Citation 的价值是让用户和系统知道：这句话基于什么事实。
    
-   没有 citation 的链上解释，只能算观点。
    
-   带 citation 的解释，才有机会被验证和追责。
    

### **How These Contexts Work Together**

-   On-chain Data 提供可验证事实。
    
-   Contract Docs 提供业务语义。
    
-   ABI / Event 提供可调用能力和历史事件结构。
    
-   Transaction History 提供过去行为和风控线索。
    
-   Explorer Context 提供可视化核验入口。
    
-   Indexing Context 提供可查询、可聚合、面向产品的数据层。
    
-   Citation 把 Agent 的结论连接回具体证据。
    
-   对 AI Agent 来说，这些上下文不是孤立的，而是一套链上事实校验系统。
    

### **Main Takeaways**

-   链感知上下文的重点不是“给模型更多文本”，而是给模型更可靠、更可验证、更有坐标的链上证据。
    
-   Agent 读取链上数据时，至少要知道 chain id、block number、contract address、method、返回值和读取时间。
    
-   ABI 能告诉 Agent 怎么调用合约，但不能告诉 Agent 业务上是否应该调用。
    
-   文档能解释语义，但文档可能过期，所以需要链上验证。
    
-   Indexing 适合历史查询和聚合，但不能无条件当成当前事实。
    
-   Citation 是链上 AI 产品里非常重要的可信度机制。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->

\## Today’s Goal

\- 学习 Web3 中 Indexing 的作用。

\- 理解 Event Indexing、Subgraph、RPC、Data Pipeline 等概念。

\- 梳理 Indexing 在 AI Agent 链上交互中的位置。

\- 回答一个问题：Indexing 是每个用户自己做，还是会有统一供应商？

\## Learning Materials

\- The Graph Indexing Overview: [https://thegraph.com/docs/en/indexing/overview/](https://thegraph.com/docs/en/indexing/overview/)

\- The Graph Graph Node: [https://thegraph.com/docs/en/indexing/tooling/graph-node/](https://thegraph.com/docs/en/indexing/tooling/graph-node/)

\- Alchemy API Overview: [https://www.alchemy.com/docs/get-started](https://www.alchemy.com/docs/get-started)

\- Goldsky Docs: [https://docs.goldsky.com/introduction](https://docs.goldsky.com/introduction)

\## Notes

\### Why Indexing Is Needed

\- 今天主要学习了 Web3 中 indexing 相关的知识，明白了为什么需要 indexing。

\- 区块链本身是按区块和交易顺序组织的数据结构，适合验证状态和执行交易，但不适合直接做复杂查询。

\- 如果只用 RPC 直接查链，很多问题会很麻烦：

\- 查询某个地址过去所有交易。

\- 查询某个合约所有历史事件。

\- 统计某个协议的 TVL、用户数、成交量。

\- 查询某个用户在多个协议里的资产、仓位和收益。

\- 给前端页面提供快速、结构化的数据。

\- Indexing 的作用是把原始链上数据解析、整理、存储成更容易查询的数据结构。

\- 可以简单理解为：链负责产生和验证事实，indexer 负责把这些事实整理成应用可用的数据。

\### RPC

\- 这里的 `RPC` 是 Remote Procedure Call，不是 `PRC`。

\- 在 Web3 里，RPC 通常指应用和区块链节点交互的接口。

\- 通过 RPC 可以：

\- 查询区块。

\- 查询交易。

\- 查询账户或合约状态。

\- 查询 logs / events。

\- 发送交易。

\- RPC 是链上交互的底层入口，但它通常不是面向复杂业务查询的最佳接口。

\- 例如，“查某个地址过去两年所有 ERC-20 转账，并按 Token 分类汇总”这类问题，用原始 RPC 做会很重；更适合使用已经 indexed 的数据 API 或自建 indexer。

\### Event Indexing

\- Event Indexing 是 indexing 中非常重要的一类。

\- 智能合约可以 emit events，例如 ERC-20 的 `TransferApproval`。

\- 这些 events 会进入交易 receipt logs，方便链下系统读取。

\- Event Indexing 的流程通常是：

\- 从某个起始区块开始扫描。

\- 通过 RPC 或节点数据流读取区块和 logs。

\- 根据合约地址、event signature、topics 过滤目标事件。

\- 解码 event 参数。

\- 把事件转换成数据库里的结构化记录。

\- 处理链重组、重复数据、断点续扫和回填。

\- Event Indexing 很适合处理：

\- Token 转账记录。

\- NFT mint / transfer。

\- DEX swap。

\- Lending deposit / borrow / repay / liquidation。

\- DAO vote。

\### Subgraph

\- Subgraph 是 The Graph 生态中的一种 indexing 方式。

\- 一个 Subgraph 通常定义：

\- 要监听哪些合约。

\- 要处理哪些 events 或 calls。

\- 数据 schema 长什么样。

\- 事件发生时如何把链上数据映射成实体。

\- Subgraph 的结果通常通过 GraphQL API 查询。

\- The Graph 的 Graph Node 会连接区块链节点，按 Subgraph 定义抓取、处理并存储数据，然后提供查询接口。

\- Subgraph 的价值是让开发者不用从零写完整 indexer，而是用声明式配置和 mapping 代码构建一个面向应用的数据 API。

\### Data Pipeline

\- Data Pipeline 是更通用的数据处理流程，不限于 The Graph。

\- 一个链上数据 pipeline 通常包括：

\- Ingestion：从 RPC、节点、Firehose、WebSocket 或第三方 API 获取数据。

\- Decode：解析交易、events、ABI、内部调用等。

\- Transform：把原始数据转换成业务实体，例如用户仓位、Token 余额、交易记录。

\- Store：写入 Postgres、ClickHouse、Elasticsearch、Redis、数据湖或向量数据库。

\- Serve：通过 REST、GraphQL、SQL、Webhook 或内部服务提供查询。

\- Monitor：监控延迟、漏块、重组、失败任务和数据一致性。

\- 对生产系统来说，pipeline 还需要处理：

\- Reorg：链重组导致某些区块或事件需要回滚。

\- Backfill：从历史区块补数据。

\- Checkpoint：记录处理到哪个区块，失败后可以恢复。

\- Idempotency：重复处理同一事件时不能重复写入错误结果。

\- Freshness：数据延迟是否满足业务需求。

\### Indexing and AI Agent

\- 今天也理解了 indexing 在 AI Agent 链上交互中处在什么位置。

\- AI Agent 如果要和链上世界交互，通常需要几个层次：

\- Wallet / Signing：负责身份、签名和交易授权。

\- RPC / Node：负责读取链上实时状态、模拟交易、发送交易。

\- Indexing / Data Layer：负责读取历史数据、事件、仓位、余额变化、协议状态和复杂查询。

\- Reasoning / Planning：AI Agent 根据数据理解当前情况，生成计划。

\- Execution：Agent 通过钱包和 RPC 发起链上操作。

\- Indexing 更像 AI Agent 的“链上记忆和检索层”。

\- 没有 indexing，Agent 只能零散地查当前状态或单个交易，很难理解历史行为、用户资产变化、协议风险和长期趋势。

\- 有了 indexing，Agent 可以更容易回答：

\- 用户过去做过哪些链上操作？

\- 某个仓位是否接近清算？

\- 某个 Token 的历史流动性如何？

\- 某个协议最近是否出现异常事件？

\- 某个地址是否和风险地址交互过？

\## Questions and Answers

\### Q1: Indexing 是每个用户自己做吗？还是会有一个统一的供应商？

\- 简短答案：普通用户通常不自己做 indexing；也没有唯一统一供应商。

\- 更准确地说，indexing 是一个分层市场：

\- 普通用户：通常通过钱包、dApp、区块浏览器或 AI Agent 间接使用 indexed data，不会自己跑 indexer。

\- dApp / 协议团队：会根据需求选择第三方 indexing 服务、部署 Subgraph、自建 indexer，或混合使用。

\- 基础设施供应商：提供 RPC、indexed API、Subgraph hosting、data pipeline、webhook、streaming 等能力。

\- 去中心化 indexing 网络：例如 The Graph 中有不同 Indexers 提供 indexing 和 query 服务，不是单一公司或单一节点。

\- 所以不是“每个用户自己做”，也不是“全行业只有一个供应商做”。

\- 实践中常见选择有几种：

\- 直接用第三方 Data API：适合钱包、dashboard、NFT、portfolio、transfer history 等常见场景。

\- 用 Subgraph：适合协议级数据、事件驱动的数据模型、GraphQL 查询。

\- 自建 indexer：适合需要高度定制、低延迟、强控制、合规要求或成本可控的大型应用。

\- 混合方案：关键数据自建，通用数据用供应商，冷数据或分析数据进入 data warehouse。

\- 是否自建，主要取决于：

\- 数据是否足够通用。

\- 查询是否复杂。

\- 延迟要求高不高。

\- 成本是否可接受。

\- 是否需要跨链。

\- 是否需要对数据正确性和可用性有更强控制。

\- 是否能接受供应商锁定。

\### Q2: RPC 和 Indexing 的关系是什么？

\- RPC 是读取链和发送交易的底层接口。

\- Indexing 通常会用 RPC 或节点数据流作为数据来源之一。

\- RPC 更像“直接问节点一个具体问题”，indexing 更像“长期把链上数据整理成数据库”。

\- 对实时关键状态，应用可能直接读 RPC。

\- 对历史、聚合、搜索、复杂列表和 analytics，应用通常读 indexed data。

\### Q3: AI Agent 应该直接查链，还是查 indexed data？

\- 两者都需要。

\- AI Agent 需要 indexed data 来理解历史和上下文，例如用户仓位、资产变化、协议事件。

\- AI Agent 也需要 RPC 来读取最新状态、模拟交易、估算 gas、发送交易。

\- 一个更稳妥的模式是：

\- 用 indexed data 做观察、检索和分析。

\- 用 RPC 做最终状态确认和交易执行前检查。

\- 用钱包做签名和权限边界。

\- 对涉及资金的操作，不能只依赖旧的 indexed data；执行前应该用 RPC 或可信实时数据再确认一次。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->


\## Today’s Goal

\- 学习 Web3 中预言机（Oracle）的作用。

\- 理解 Price Feed、Data Feed 等基础概念。

\- 梳理预言机在 DeFi、智能合约和链下数据接入中的意义。

\## Learning Materials

\- Handbook:

\- WCB Learning:

\- Topic: Web3 oracle, price feed, data feed

\## Notes

\### Oracle Overview

\- 今天主要学习了 Web3 中预言机的作用。

\- 区块链本身只能可靠地读取链上状态，但很多智能合约需要使用链下数据，例如资产价格、汇率、天气、比赛结果、储备证明等。

\- 预言机的作用就是把链下数据带到链上，让智能合约可以基于外部世界的信息执行逻辑。

\- 可以把预言机理解为链上世界和链下世界之间的数据桥梁。

\- 预言机不是“预测未来”的工具，而是负责把外部数据以可信、可验证、可用的方式提供给智能合约。

\### Why Oracles Matter

\- 智能合约是确定性的：同样输入应该得到同样输出。

\- 如果每个节点都直接访问互联网 API，可能会因为时间、网络、接口返回差异导致结果不一致。

\- 因此链上合约通常不能随意直接请求链下数据，而需要通过预言机把数据提交到链上。

\- 对 DeFi 来说，预言机尤其重要，因为很多协议需要实时或准实时价格：

\- Lending 需要价格判断抵押品价值和清算条件。

\- Stablecoin 需要价格判断抵押率和锚定情况。

\- Perpetual / Derivatives 需要价格计算盈亏、保证金和清算。

\- AMM 或聚合器可能会参考外部价格做保护或路由判断。

\### Price Feed

\- Price Feed 是最常见的预言机数据类型之一。

\- 它提供某个资产或交易对的价格，例如 ETH/USD、BTC/USD、USDC/USD。

\- 在 DeFi Lending 中，Price Feed 会直接影响：

\- 抵押品估值。

\- 可借额度。

\- Health factor / 抵押率。

\- 是否进入清算状态。

\- 在衍生品协议中，Price Feed 会影响：

\- 仓位盈亏。

\- 保证金比例。

\- 清算价格。

\- 结算价格。

\- Price Feed 的关键要求：

\- 准确：价格不能长期偏离真实市场。

\- 及时：价格更新不能太慢。

\- 抗操纵：不能被单一交易所、浅池或短时间攻击轻易影响。

\- 可用：关键时刻不能长时间停止更新。

\### Data Feed

\- Data Feed 是更泛化的数据输入，不只限于资产价格。

\- 它可以包括：

\- 外汇汇率。

\- 利率。

\- 储备证明。

\- 商品价格。

\- 天气数据。

\- 体育比赛结果。

\- 随机数或其他外部事件数据。

\- Price Feed 可以看作 Data Feed 的一种特殊形式，专门提供价格数据。

\- Data Feed 的价值在于扩展智能合约的使用场景，让合约不仅能处理链上资产，还能响应链下事件。

\### Oracle in DeFi

\- 结合前几天学习的 Lending 和清算，预言机的作用更加关键。

\- 借贷协议通常需要知道抵押品的市场价格，才能判断借款人是否安全。

\- 如果预言机价格异常，可能导致两类问题：

\- 价格被高估：用户可能借出过多资产，协议承担坏账风险。

\- 价格被低估：用户可能被错误清算，损失抵押品。

\- 因此 DeFi 协议通常会关注：

\- 使用多个数据源。

\- 使用聚合价格。

\- 设置价格更新时间和异常检测。

\- 对低流动性资产设置更保守的风险参数。

\- 预言机在 DeFi 中不是辅助组件，而是协议安全模型的重要组成部分。

\### Oracle Risks

\- 预言机风险主要包括：

\- 数据源风险：原始数据来源错误、延迟或被操纵。

\- 聚合风险：数据聚合方式不合理，导致异常价格进入链上。

\- 更新延迟：市场价格变化很快，但链上价格还没更新。

\- 可用性风险：预言机服务故障，协议无法获得新数据。

\- 依赖风险：协议过度依赖单一预言机或单一数据源。

\- 对开发者来说，使用预言机时不能只问“价格是多少”，还要问：

\- 这个价格来自哪里？

\- 多久更新一次？

\- 是否有异常值保护？

\- 数据是否足够新？

\- 如果预言机停止更新，合约应该怎么处理？

\### Main Takeaways

\- 预言机解决的是链上智能合约如何获取链下数据的问题。

\- Price Feed 是最常见的数据类型，尤其重要于 DeFi 的借贷、清算、衍生品和稳定币。

\- Data Feed 是更广义的数据输入，价格只是其中一种。

\- 预言机本身也是信任和安全边界，不能简单假设它永远准确、及时和可用。

\- 对 DeFi 协议来说，预言机质量会直接影响资产估值、清算、安全性和坏账风险。

\## Questions / Blockers

\- 还需要继续理解不同预言机方案的差异，例如 Chainlink、Pyth、API3 等。

\- 还需要结合具体协议理解：如果预言机价格延迟或异常，协议会如何暂停、保护或恢复。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->



今日摸鱼
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->




## **Today’s Goal**

-   学习 DeFi 的基础概念：Token、AMM、Lending、Stablecoin、Liquidity。
    
-   理解 AMM 定价公式在极端流动性情况下会发生什么。
    
-   理解 DeFi Lending 如何让存款人获得利息，以及借款人无法还款时协议如何处理。
    

## **Learning Materials**

-   Uniswap AMM docs:
    
    ![](https://developers.uniswap.org/favicon.ico)
    
    [**https://developers.uniswap.org/docs/get-started/concepts/how-uniswap-works**](https://developers.uniswap.org/docs/get-started/concepts/how-uniswap-works)
    
-   Uniswap v2 pricing docs:
    
    ![](https://developers.uniswap.org/favicon.ico)
    
    [**https://developers.uniswap.org/docs/protocols/v2/concepts/pricing**](https://developers.uniswap.org/docs/protocols/v2/concepts/pricing)
    
-   Aave liquidations: [**https://aave.com/help/borrowing/liquidations**](https://aave.com/help/borrowing/liquidations)
    
-   Compound III liquidations and reserves: [**https://docs.compound.finance/liquidation/**](https://docs.compound.finance/liquidation/)
    
-   Maker liquidation auctions: [**https://docs.makerdao.com/keepers/the-auctions-of-the-maker-protocol**](https://docs.makerdao.com/keepers/the-auctions-of-the-maker-protocol)
    
-   Ethereum ERC-20 docs:
    
    ![](https://ethereum.org/favicon.ico)
    
    [**https://ethereum.org/developers/docs/standards/tokens/erc-20/**](https://ethereum.org/developers/docs/standards/tokens/erc-20/)
    
-   Ethereum stablecoins:
    
    ![](https://ethereum.org/favicon.ico)
    
    [**https://ethereum.org/stablecoins**](https://ethereum.org/stablecoins)
    

## **Notes**

### **DeFi Overview**

-   今天主要了解了 DeFi 的相关内容，包括 Token、AMM、Lending、Stablecoin 和流动性这些基础概念。
    
-   DeFi 可以理解为用智能合约实现的金融协议集合，常见功能包括交易、借贷、稳定币、收益、质押和衍生品等。
    
-   和传统金融相比，DeFi 更强调：
    
    -   规则由智能合约执行。
        
    -   资产和状态在链上可验证。
        
    -   用户可以直接和协议交互，不一定需要中心化中介。
        
    -   风险也更多由用户自己承担，例如合约风险、价格波动、清算风险和流动性风险。
        

### **Token**

-   Token 是链上资产的表示方式，可以代表货币、治理权、积分、凭证、LP 份额或现实资产映射。
    
-   在以太坊生态里，ERC-20 是最常见的同质化 Token 标准。
    
-   ERC-20 的关键能力包括：
    
    -   查询余额：balanceOf
        
    -   转账：transfer
        
    -   授权：approve
        
    -   代扣转账：transferFrom
        
    -   查询授权额度：allowance
        
-   DeFi 协议之所以能组合起来，很大程度上依赖 Token 标准化。只要资产遵循相同接口，就更容易被 DEX、借贷协议、钱包和其他合约集成。
    

### **AMM**

-   AMM 是 Automated Market Maker，自动做市商。
    
-   它不依赖传统订单簿，而是让用户和流动性池交易。
    
-   以 Uniswap v2 这类 constant product AMM 为例，核心公式是：
    

`x * y = k`

-   x 和 y 是池子里两种资产的储备量，k 是需要维持的乘积。
    
-   用户买走一种资产时，必须放入另一种资产，使池子的储备变化后仍然满足公式。
    
-   AMM 的价格来自池子中两种资产的比例，而不是来自中心化撮合订单。
    
-   交易越大、池子越浅，价格影响越明显；交易越小、池子越深，成交价格越接近当前池内价格。
    

### **Liquidity**

-   流动性可以理解为池子里可供交易的资产深度。
    
-   流动性越深，大额交易造成的价格影响越小。
    
-   流动性越浅，同样大小的交易就会造成更大的 price impact 和 slippage。
    
-   流动性提供者（LP）把两种资产存入池子，换取 LP 份额，并从交易手续费中获得收益。
    
-   LP 的风险包括：
    
    -   无常损失：两种资产相对价格变化时，LP 持有池子份额的结果可能不如单独持有原资产。
        
    -   价格被操纵：浅池更容易被大额交易推动价格。
        
    -   合约风险：池子或相关协议出现漏洞。
        

### **Stablecoin**

-   Stablecoin 是目标价格相对稳定的 Token，常见目标是锚定 1 美元。
    
-   常见类型包括：
    
    -   法币储备型：例如由银行存款、短债等资产支持的稳定币。
        
    -   加密资产超额抵押型：例如用 ETH 或其他资产超额抵押生成稳定币。
        
    -   算法型或部分算法型：依靠供需调节、激励机制或其他设计维持价格，风险通常更高。
        
-   Stablecoin 在 DeFi 中非常重要，因为它提供了相对稳定的计价单位和交易媒介。
    
-   DeFi Lending、AMM 交易对、收益策略、支付和结算都会大量使用稳定币。
    

### **Lending**

-   DeFi Lending 是链上借贷协议。
    
-   存款人把资产存入协议，成为资金供给方。
    
-   借款人提供抵押品，再从协议中借出其他资产。
    
-   借款人支付利息，存款人获得利息；协议通常会保留一部分作为储备或风险缓冲。
    
-   利率通常不是固定的，而是根据资金利用率动态变化：
    
    -   借出资产越多，池子剩余流动性越少，利率通常越高。
        
    -   借出资产较少，资金利用率低，利率通常较低。
        
-   DeFi 借贷通常是超额抵押：借款人需要存入价值高于借款价值的抵押品。
    
-   这样做是为了在抵押品价格下跌时，协议还有时间通过清算回收债务。
    

## **Questions and Answers**

### **Q1: AMM 里如果一种资产非常少，它的价格会不会趋近无限大？**

-   直觉是对的：在 x \* y = k 这种 constant product AMM 里，如果池子中某一种资产的储备量趋近于 0，那么继续买走这种资产所需支付的另一种资产会急剧增加。
    
-   从数学极限看，想把某一种资产完全买空，需要无限大的另一种资产输入；也就是说，价格会在极端情况下趋向无限大。
    
-   但实践中一般不会真的出现“用有限交易把池子买到 0”的情况，原因包括：
    
    -   Constant product 曲线本身是渐近的：越接近耗尽某种资产，价格越陡，买到最后一小部分资产会越来越贵。
        
    -   交易界面通常会设置 slippage tolerance 和 minimum amount out，如果成交价格太差，交易会 revert。
        
    -   Uniswap 等前端会提示 price impact，避免用户在极端价格下误交易。
        
    -   套利者会在池内价格偏离外部市场价格时交易，把价格推回更合理的区间。
        
    -   大额交易通常会被拆分到多个池子、多个路径或聚合器中，而不是只打一个浅池。
        
    -   流动性太浅的池子本身就不适合大额交易，市场会把它视为高滑点、高操纵风险的交易场所。
        
-   所以结论是：数学上价格可以趋近无限大；工程和市场实践中，会通过滑点保护、前端提示、套利、聚合路由和更深流动性来降低用户真的用极端价格成交的概率。
    
-   但这不是说风险不存在。浅池、长尾 Token、低流动性交易对仍然可能出现非常夸张的价格影响，甚至被操纵。
    

### **Q2: DeFi Lending 怎么保证借款人能还钱？**

-   DeFi Lending 通常不是靠“相信借款人会还钱”，而是靠超额抵押和自动清算机制。
    
-   典型流程是：
    
    -   用户先存入抵押品，例如 ETH、wBTC、稳定币等。
        
    -   协议根据抵押品价值和风险参数，允许用户借出一定比例的资产。
        
    -   抵押品价值由预言机价格、协议参数和风险模型决定。
        
    -   如果抵押品价值下降，或者债务增长，账户健康度会下降。
        
    -   当健康度低于阈值时，任何清算人都可以帮助偿还部分或全部债务，并获得借款人的一部分抵押品作为奖励。
        
-   也就是说，协议并不等借款人主动还款才安全，而是在抵押品不足前通过清算把风险处理掉。
    
-   以 Aave 为例，health factor 低于 1 时，借款位置会进入可清算状态；清算人偿还债务，并获得对应抵押品加清算奖励。
    
-   以 Maker 为例，如果 Vault 低于要求的抵押率，系统会拍卖抵押品来覆盖债务和罚金。
    

### **Q2.5: 清算者到底是什么角色？**

-   清算者（liquidator / keeper）不是协议的管理员，也不是借款人的对手方，而是一个外部参与者。
    
-   它可以是任何用户、机器人、专业做市团队或自动化脚本。只要某个借款人的仓位满足清算条件，清算者就可以调用协议的清算函数。
    
-   清算者做的事情可以理解为：
    
    -   发现某个借款人的抵押率太低，已经进入危险状态。
        
    -   替这个借款人偿还一部分或全部债务。
        
    -   从借款人的抵押品里拿走等值资产，并额外获得一部分清算奖励或折扣。
        
-   清算者为什么愿意做这件事？
    
    -   因为有利润。例如清算者偿还 100 USDC 的债务，可能拿到价值 105 USDC 的抵押品，中间的 5 USDC 就是清算激励。
        
    -   这笔利润不是白送的，它是协议为了鼓励外部人及时处理风险仓位而设计的激励。
        
-   清算者对协议的作用：
    
    -   帮协议把危险债务提前处理掉。
        
    -   帮存款人降低坏账风险。
        
    -   帮系统维持抵押品价值大于债务价值的状态。
        
-   清算者对借款人的影响：
    
    -   借款人的部分债务会被偿还。
        
    -   借款人的一部分抵押品会被卖掉或转给清算者。
        
    -   借款人通常还会承担清算罚金或奖励成本。
        
-   一个简化例子：
    
    -   用户抵押了价值 150 美元的 ETH，借出 100 USDC。
        
    -   ETH 下跌后，抵押品只值 115 美元，低于协议要求的安全线。
        
    -   清算者发现这个仓位可以被清算，于是替用户还掉 50 USDC 债务。
        
    -   协议把用户的一部分 ETH 抵押品转给清算者，价值可能略高于 50 USDC，比如 52.5 USDC。
        
    -   结果是：协议减少了坏账风险，清算者赚取清算奖励，借款人损失一部分抵押品但债务也减少。
        
-   所以清算者本质上是 DeFi 借贷系统里的风险处理者。协议不靠中心化催收，也不靠借款人承诺还款，而是用清算奖励吸引市场参与者主动处理危险仓位。
    
-   这和合约交易里的保证金机制有相似之处：
    
    -   借款人的抵押品可以类比为保证金。
        
    -   借款人的债务可以类比为仓位风险。
        
    -   当抵押品价值低于协议要求的安全线时，就会触发清算。
        
    -   清算者执行清算并获得奖励，类似有人接手处理风险仓位并获得补偿。
        
-   但也要注意差异：DeFi Lending 里用户通常是在借出某种资产，不一定是在做杠杆合约交易；清算的核心目的也不是惩罚用户，而是保护协议和存款人，避免抵押品价值不足以覆盖债务。
    

### **Q3: DeFi Lending 是否会有坏账？**

-   会有。DeFi Lending 通过超额抵押、清算、风险参数和储备金降低坏账概率，但不能保证永远没有坏账。
    
-   坏账可能来自：
    
    -   抵押品价格快速暴跌，清算来不及完成。
        
    -   抵押品流动性不足，清算时卖不出足够价值。
        
    -   预言机价格延迟、错误或被操纵。
        
    -   网络拥堵导致清算交易无法及时执行。
        
    -   清算激励不足，清算人不愿意接盘。
        
    -   协议参数设置过于激进，例如 LTV 太高、抵押品质量太差。
        
    -   智能合约漏洞或外部依赖风险。
        
-   不同协议会用不同方式吸收或处理坏账：
    
    -   Compound 文档中提到 reserves 可以保护用户免受坏账影响，储备来自利差和清算过程。
        
    -   Maker 中如果抵押品拍卖无法覆盖债务，系统可以通过 debt auction 处理未覆盖债务。
        
    -   一些协议还会使用 safety module、保险基金、风险隔离、借款上限、供应上限等方式控制风险。
        
-   所以 DeFi Lending 的核心不是“保证借款人一定还钱”，而是设计一套机制，让借款人不还钱或抵押品下跌时，协议可以尽快用抵押品、清算和储备来覆盖债务。
    

### **Q4: 为什么存款人能赚利息？**

-   存款人的利息来自借款人支付的利息。
    
-   当市场上借某种资产的人很多，资金利用率上升，借款利率通常会上升，存款利率也会上升。
    
-   协议通常会把借款人支付的利息分配给存款人，同时保留一部分作为协议储备。
    
-   这和传统银行的“存款人供给资金、借款人支付利息”有相似处，但 DeFi 的借贷规则、抵押、清算、利率和资金流都由智能合约执行。
    

## **Main Takeaways**

-   Token 是 DeFi 的资产表达方式，ERC-20 让同质化资产可以被不同协议组合使用。
    
-   AMM 用流动性池和定价公式替代订单簿，价格由池内资产比例决定。
    
-   AMM 极端价格问题在数学上成立，但实践中会被曲线成本、滑点保护、套利和流动性深度缓解。
    
-   Lending 的安全基础不是信用，而是超额抵押、预言机、清算人、风险参数和协议储备。
    
-   DeFi Lending 仍然可能出现坏账，特别是在价格剧烈波动、流动性不足、预言机异常或清算失败时。
    
-   Stablecoin 是 DeFi 中重要的计价和结算资产，但不同稳定币的抵押方式和风险来源不一样。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->





\## Today’s Goal

\- 学习账户抽象（Account Abstraction, AA）的基本概念。

\- 理解 ERC-4337 如何在不修改以太坊共识层的前提下实现账户抽象。

\- 梳理账户抽象对钱包体验、权限控制和交易流程的影响。

\## Learning Materials

\- Handbook:

\- WCB Learning:

\- EIP-4337: [https://eips.ethereum.org/EIPS/eip-4337](https://eips.ethereum.org/EIPS/eip-4337)

\- Ethereum Account Abstraction: [https://ethereum.org/roadmap/account-abstraction/](https://ethereum.org/roadmap/account-abstraction/)

\## Notes

\### Account Abstraction

\- 今天的主要进展是了解了账户抽象这个概念，包括 ERC-4337。

\- 账户抽象的核心目标，是让账户本身拥有更灵活的验证和执行逻辑，而不是只能依赖传统 EOA 的固定规则。

\- 传统 EOA 的限制包括：

\- 账户由私钥直接控制，签名规则比较固定。

\- 用户通常必须持有原生 ETH 才能支付 Gas。

\- 多签、社交恢复、批量交易、限额控制等高级能力需要额外钱包或合约支持。

\- 账户抽象希望把账户变成更可编程的智能账户（Smart Contract Account），让“账户如何验证一笔操作”可以由合约代码定义。

\- 从用户体验看，账户抽象可以支持更接近 Web2 的体验，例如：

\- 社交恢复或多设备恢复。

\- 批量执行多个操作。

\- 使用 ERC-20 或由第三方代付 Gas。

\- 设置每日限额、白名单、会话密钥等权限规则。

\### EOA vs Smart Contract Account

\- EOA（Externally Owned Account）：

\- 由私钥控制。

\- 可以主动发起交易。

\- 验证逻辑由协议规则固定，主要是检查签名、nonce、余额和 Gas。

\- Smart Contract Account：

\- 由合约代码控制。

\- 可以自定义验证逻辑，例如多签、社交恢复、不同签名算法、权限分级。

\- 不能像 EOA 一样天然发起底层交易，通常需要一套额外机制来触发执行。

\- 账户抽象要解决的问题，就是让智能合约账户也能成为用户的主要账户，而不是只作为 EOA 背后的附属工具。

\### ERC-4337 Mental Model

\- ERC-4337 的重要特点是：不需要修改以太坊共识层协议。

\- 它没有直接新增一种底层交易类型，而是在协议之上引入一套新的交易处理流程。

\- ERC-4337 中，用户不直接发送普通交易，而是创建一个 `UserOperation`。

\- `UserOperation` 可以理解为“用户希望智能账户执行的操作描述”，它不是以太坊底层交易，但会被打包进一笔真实链上交易里执行。

\- 整体流程可以简单理解为：

\- 用户的钱包生成 `UserOperation`。

\- `UserOperation` 被发送到专门的 mempool。

\- Bundler 收集多个 `UserOperation`。

\- Bundler 调用 EntryPoint 合约的 `handleOps`。

\- EntryPoint 调用各个智能账户进行验证和执行。

\- 成功后，智能账户状态或链上资产发生变化。

\### ERC-4337 Core Components

\- UserOperation：

\- 描述用户想让智能账户执行什么操作。

\- 包含 sender、nonce、callData、gas 相关字段、signature 等信息。

\- 它的签名如何验证，不由协议固定，而由智能账户合约逻辑定义。

\- Bundler：

\- 负责收集 UserOperations，并把它们打包成普通以太坊交易提交到链上。

\- 可以理解为 ERC-4337 流程里的打包者。

\- EntryPoint：

\- ERC-4337 的核心入口合约。

\- 负责统一处理 UserOperations，包括验证、执行、费用处理等流程。

\- 智能账户通常需要信任特定 EntryPoint，并检查调用者是否为可信 EntryPoint。

\- Smart Contract Account：

\- 用户真正使用的智能账户。

\- 需要实现验证逻辑，例如检查签名、nonce、权限和资金。

\- 可以把账户规则写成代码，而不是依赖固定 EOA 行为。

\- Paymaster：

\- 可以代替用户支付 Gas。

\- 这让“用户没有 ETH 也能发起操作”成为可能，例如由 dApp、项目方或第三方服务赞助 Gas。

\- Factory：

\- 用于创建新的智能账户。

\- 可以支持用户第一次使用时再部署账户，实现更顺滑的 onboarding。

\### Common AA Methods and Capabilities

\- Smart Account：

\- Smart Account 是账户抽象里用户真正使用的账户形态，通常由智能合约实现。

\- 它把传统 EOA 的固定验证规则，替换成可编程的验证逻辑。

\- 例如一个 Smart Account 可以规定：大额转账必须多签，小额操作可以单签，某些 dApp 只能在指定额度内调用。

\- 它解决的核心问题是：账户不再只是“一个私钥”，而是可以承载权限、恢复、安全策略和执行规则的合约账户。

\- Bundler：

\- Bundler 负责收集 UserOperations，并把它们打包成一笔普通链上交易提交给 EntryPoint。

\- 它类似 ERC-4337 流程里的交易中继和打包角色，但不应该被理解成用户必须信任的托管方。

\- Bundler 需要先模拟和检查 UserOperation，确认它有机会成功执行并支付费用，再提交到链上。

\- 它解决的核心问题是：智能账户不能像 EOA 一样直接发起底层交易，所以需要有人把 UserOperation 包装成真实交易。

\- Paymaster：

\- Paymaster 是 ERC-4337 里负责 Gas 抽象的重要角色。

\- 它可以替用户支付 Gas，也可以要求用户用 ERC-20、积分、订阅或其他业务规则间接覆盖费用。

\- 对用户来说，Paymaster 可以降低新用户使用门槛，不必一开始就持有 ETH。

\- 对 dApp 来说，Paymaster 可以实现 sponsored transaction，例如项目方为 onboarding、签到、低成本交互补贴 Gas。

\- 风险在于：Paymaster 本身有资金和规则，需要控制滥用、刷交易、恶意调用和业务亏损。

\- Session Key：

\- Session Key 是账户抽象中常见的权限设计方法，不是 ERC-4337 的核心合约组件。

\- 它的思路是：用户用主账户授权一个临时 key，让这个 key 在限定时间、限定范围、限定额度内代替用户执行操作。

\- 例如游戏、交易、社交应用里，用户可以授权一个 session key 在 1 小时内执行某些低风险操作，不必每一步都弹钱包签名。

\- Session Key 的关键是权限边界必须清楚：能调用哪些合约、能执行哪些方法、额度是多少、什么时候过期、能否撤销。

\- 它解决的核心问题是：减少频繁签名带来的体验摩擦，同时不把主私钥或完整账户权限暴露给应用。

\### Why ERC-4337 Matters

\- ERC-4337 把验证和执行拆开，使智能账户能够先验证 UserOperation 是否有效，再执行真实操作。

\- 它让账户权限逻辑可以更灵活，例如：

\- 多签验证。

\- 社交恢复。

\- 会话密钥。

\- 交易限额。

\- 白名单应用。

\- 自定义签名算法。

\- 它也把 Gas 支付抽象出来，让用户不一定必须直接持有 ETH 才能完成链上交互。

\- 从钱包角度看，ERC-4337 可以把钱包从“私钥签名工具”推进到“可编程账户系统”。

\- 从开发者角度看，ERC-4337 让账户本身变成业务逻辑和权限设计的一部分。

\### Security and Permission Notes

\- 账户抽象提高了灵活性，但也让账户逻辑更复杂。

\- 智能账户必须正确验证：

\- 调用者是否是可信 EntryPoint。

\- UserOperation 的签名是否有效。

\- nonce 是否正确，避免重放。

\- 执行的 callData 是否符合账户权限规则。

\- Paymaster 或第三方代付是否引入额外信任边界。

\- AA 钱包的安全重点不只是保护私钥，还包括保护账户合约逻辑、恢复机制、权限配置和代付规则。

\- 账户抽象不是“消除安全问题”，而是把安全边界从单一私钥扩展到一套可编程权限系统。

\### Questions and Initial Answers

\- Q：账户抽象是不是等于智能合约钱包？

\- A：不完全等同。智能合约钱包是实现账户抽象的重要载体；账户抽象是更大的目标，即让账户验证、权限和执行逻辑可编程。

\- Q：ERC-4337 是否修改了以太坊底层共识？

\- A：不修改。ERC-4337 通过 UserOperation、Bundler、EntryPoint 等高层机制实现账户抽象，底层仍然通过普通以太坊交易上链。

\- Q：Paymaster 的意义是什么？

\- A：Paymaster 可以替用户支付 Gas，支持 Gas sponsorship、用其他资产支付费用或由 dApp 赞助新用户操作。

\- Q：账户抽象和昨天学习的权限有什么关系？

\- A：账户抽象把权限控制进一步前移到账户层。传统 EOA 主要依赖私钥控制，而智能账户可以把多签、限额、白名单、恢复机制等规则直接写进账户逻辑里。

\### Main Takeaways

\- 今天主要理解了账户抽象的方向：让账户从固定私钥控制模型，升级为可编程的智能账户模型。

\- ERC-4337 是实现账户抽象的重要方案，它通过 UserOperation、Bundler、EntryPoint、Paymaster 等组件，在不修改共识层的情况下实现更灵活的钱包和账户体验。

\- AA 的价值不只是“免 Gas”或“社交恢复”，更核心的是让账户权限、验证和执行规则可以被代码定义。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->






## **Today’s Goal**

-   学习以太坊开发相关工具链：Remix、Hardhat、Foundry、OpenZeppelin、viem。
    
-   理解以太坊网络中的区块、交易、共识等基础概念。
    
-   区分 L2 和 rollup 的关系。
    

## **Learning Materials**

-   Handbook:
    
-   WCB Learning:
    
-   Topic: Ethereum dev tools, Ethereum network, L2 and rollups
    

## **Notes**

### **Ethereum Dev Tools**

-   今天学习了以太坊生态里常见的开发工具，并掌握了它们之间的主要功能差异。
    
-   Remix：
    
    -   浏览器里的 Solidity IDE，适合快速写合约、编译、部署和调试。
        
    -   适合学习阶段、原型验证、小合约实验，不需要本地复杂环境。
        
    -   可以直接连接测试网络或本地环境，快速观察合约部署和调用过程。
        
-   Hardhat：
    
    -   JavaScript / TypeScript 生态里的以太坊开发框架。
        
    -   主要用于本地开发、编译合约、写测试、跑本地网络、编写部署脚本。
        
    -   适合和前端、Node.js、CI 流程结合，插件生态也比较丰富。
        
-   Foundry：
    
    -   偏 Solidity-native 的开发工具链，核心工具包括 forge、cast、anvil。
        
    -   forge 用于编译和测试，cast 用于命令行调用链上数据或合约，anvil 用于启动本地测试链。
        
    -   特点是速度快、测试体验好，适合写 Solidity 测试、fuzz test 和更工程化的合约开发。
        
-   OpenZeppelin：
    
    -   常用的智能合约库和安全组件集合，不是传统意义上的 IDE。
        
    -   提供 ERC-20、ERC-721、AccessControl、Ownable、Pausable、Upgradeable 等常用合约模块。
        
    -   价值在于复用经过广泛使用和审计的基础实现，减少从零手写合约带来的安全风险。
        
-   viem：
    
    -   TypeScript 里的 EVM 交互库，用于和以太坊或 EVM 兼容链交互。
        
    -   可以做读合约、写合约、发送交易、查询区块和交易、处理 ABI 类型等。
        
    -   更偏应用层和前端 / 后端脚本侧，用来把 dApp 和链上合约连接起来。
        

### **Toolchain Mental Model**

-   这些工具可以按开发流程理解：
    
    -   Remix：快速学习和原型实验。
        
    -   Hardhat / Foundry：本地工程化开发、测试、部署。
        
    -   OpenZeppelin：复用安全合约组件。
        
    -   viem：让应用代码和链上合约交互。
        
-   一个典型 ETH 合约开发流程可以是：
    
    -   用 OpenZeppelin 选择基础合约能力。
        
    -   用 Hardhat 或 Foundry 编写、编译、测试和部署合约。
        
    -   用 viem 在前端或脚本里调用合约。
        
    -   用 Remix 做快速实验或教学演示。
        

### **Ethereum Network Concepts**

-   区块：
    
    -   区块可以理解为一批交易的集合。
        
    -   每个区块会引用前一个区块，从而形成链式结构。
        
    -   区块中不仅有交易，还包含区块头、状态相关摘要、时间、出块者等信息。
        
-   交易：
    
    -   交易是用户或合约触发状态变化的入口。
        
    -   普通转账、合约部署、合约调用，本质上都可以通过交易推动链上 state DB 更新。
        
    -   交易执行需要消耗 Gas，Gas 反映执行计算、存储等资源的成本。
        
-   状态：
    
    -   以太坊维护的是全局状态，包括账户余额、合约代码、合约存储等。
        
    -   区块中的交易按顺序执行后，会把旧状态推进到新状态。
        
-   共识：
    
    -   共识机制负责让网络中的参与者对区块顺序和链上状态达成一致。
        
    -   以太坊当前使用 Proof of Stake，验证者参与区块提议和验证。
        
    -   共识的意义不是让交易“更快”，而是让去中心化网络在没有单一权威的情况下确认同一份账本状态。
        
-   确认与最终性：
    
    -   交易进入区块后可以被认为获得初步确认。
        
    -   随着后续区块和共识过程推进，交易结果会变得更稳定。
        
    -   对涉及资产或重要状态的操作，需要关注交易是否真的被确认，而不是只看前端是否发出了交易。
        

### **L2 and Rollup**

-   L2 是 Layer 2 的简称，表示建立在以太坊 L1 之上的扩展层。
    
-   L2 的目标通常是提高吞吐、降低交易成本，同时尽量继承 L1 的安全性和结算能力。
    
-   Rollup 是 L2 的一种具体实现路线，不等于所有 L2。
    
-   Rollup 的核心思路是：
    
    -   把大量交易的执行放到 L2。
        
    -   把交易数据、状态结果或证明提交到 L1。
        
    -   让 L1 作为结算层和安全锚点。
        
-   常见 rollup 类型：
    
    -   Optimistic Rollup：默认提交的状态是正确的，在挑战期内允许别人提交 fraud proof。
        
    -   ZK Rollup：通过 validity proof / zero-knowledge proof 证明状态转换正确。
        
-   L2 和 rollup 的关系可以简单理解为：
    
    -   L2 是扩容层这个大类。
        
    -   Rollup 是 L2 里最重要的一类技术方案。
        
    -   所有 rollup 都属于 L2，但不是所有被称为 L2 或扩容方案的系统都是 rollup。
        
-   Rollup 关注的不只是“更便宜”，还包括数据可用性、证明机制、提现延迟、排序器、最终结算位置等问题。
    

### **Main Takeaways**

-   今天对以太坊开发工具链有了更清晰的分工认识：Remix 适合快速实验，Hardhat 和 Foundry 适合工程化开发，OpenZeppelin 提供安全合约组件，viem 负责应用和链上交互。
    
-   对以太坊网络的理解也更完整：交易推动状态变化，区块打包交易，共识让网络确认区块和状态。
    
-   L2 和 rollup 不是同一个概念。L2 是扩容层，rollup 是其中一种重要实现方式。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->







\## Today’s Goal

\- 学习 Web3 相关的密码学、钱包、智能合约和 ETH 合约基础知识。

\- 重点理解智能合约里的权限边界，以及为什么不能依赖默认信任。

\## Learning Materials

\- Handbook:

\- WCB Learning:

\- Topic: Web3 cryptography, wallet, smart contract, ETH contract basics

\## Notes

\### Web3 Cryptography Notes

\- 今天看了 Web3 相关的密码学知识。密码学是 Web3 账户、钱包、签名和链上验证的基础。

\- 公钥 / 私钥是钱包体系的核心：私钥用于签名，公钥或由公钥派生出的地址用于识别账户。

\- 签名的作用不是“加密消息”，而是证明某个操作确实由掌握私钥的一方授权。

\- 哈希函数常用于生成摘要、构造地址、校验数据完整性，也支撑区块链里“状态和历史可以被验证”的能力。

\- 对 Web3 来说，密码学的意义不只是安全工具，而是把“谁有权操作”转化成可以被代码和网络验证的事实。

\### Wallet Notes

\- 钱包是用户和链交互的入口，不只是资产展示工具。

\- 钱包负责管理账户控制权，完成签名，并把用户授权后的交易提交给链。

\- 从安全边界看，钱包最重要的是保护私钥 / 助记词，以及让用户看清楚自己正在签什么。

\- 钱包和 dApp 交互时，用户需要区分几类动作：

\- 连接钱包：通常只是让 dApp 读取地址。

\- 签名登录：证明用户控制某个地址，不一定改变链上状态。

\- 交易签名：会提交链上交易，可能消耗 Gas，也可能改变资产或合约状态。

\- 授权签名：可能允许合约在一定范围内操作资产，风险通常更高。

\### Smart Contract Notes

\- 智能合约可以理解为部署在链上的程序，用代码定义状态、权限和状态变化规则。

\- 合约的关键不是“自动执行”这四个字，而是：规则一旦部署到链上，就会按照代码逻辑被公开验证和执行。

\- 智能合约里的状态变化通常需要通过交易触发，交易执行成功后，链上 state DB 会发生相应更新。

\- 合约代码会直接管理资产、权限或业务状态，因此错误的权限判断可能导致非常严重的后果。

\- 写合约时不能默认相信调用者、前端、参数或外部合约；每一个关键操作都应该在合约内部验证权限和条件。

\### ETH Contract Notes

\- ETH 合约运行在 EVM 上，合约账户可以保存状态、接收调用，并根据代码逻辑执行状态变更。

\- `msg.sender` 是理解 ETH 合约权限的重要入口：它表示当前直接调用合约的地址，权限判断通常围绕它展开。

\- 常见的权限控制方式包括：

\- `onlyOwner`：只有合约 owner 可以执行某些管理操作。

\- Role-Based Access Control：不同角色拥有不同权限，例如 admin、minter、pauser。

\- allowlist / denylist：显式允许或拒绝某些地址执行操作。

\- 多签或 DAO 治理：把高权限操作交给多方确认，而不是单一私钥。

\- 合约中常见的权限检查方式是 `require(...)`，不满足条件时直接 revert，避免错误状态被写入链上。

\- 需要谨慎区分 `msg.sender` 和 `tx.origin`。权限判断通常不应该依赖 `tx.origin`，因为它更容易在合约间调用场景里造成安全问题。

\- ERC-20 的 `approve / allowance` 也是权限的一种：用户不是直接转账，而是授权某个 spender 可以在额度内移动资产。

\### Main Insight: Permission Must Be Enforced

\- 今天最重要的 insight 是权限相关的启发：不能靠默认信任，要用代码和权限落实。

\- 在 Web2 里，很多信任关系可以依赖平台、后端服务、人工审核或内部流程兜底；但在 Web3 里，链上资产和状态变化通常需要直接由代码约束。

\- 如果一个合约函数会改变重要状态或移动资产，就必须明确回答：

\- 谁可以调用？

\- 调用前必须满足什么条件？

\- 调用后状态应该如何变化？

\- 是否存在重复调用、越权调用或绕过前端直接调用的问题？

\- 权限设计应该遵循最小权限原则：只给调用者完成任务所必需的权限，不把高权限默认开放给所有人。

\- 更可靠的设计不是“默认大家不会作恶”，而是即使有人直接调用合约、传入恶意参数、绕过前端，代码仍然能拒绝非法操作。

\- 对智能合约来说，权限不是产品说明里的约定，而是必须落实到代码里的检查、状态和可验证规则。

\## Questions / Blockers

\- ETH 合约中不同权限控制模式的适用场景还需要继续通过代码例子理解。

\- `approve / allowance` 这种授权模式的风险需要结合真实案例继续学习。

\## Proof of Work

\- 整理 Web3 密码学、钱包、智能合约和 ETH 合约基础笔记。

\- 总结今日关键 insight：不能靠默认信任，要用代码和权限落实。

\- 补充 ETH 合约里的 `msg.senderrequire`、owner、role、allowance 等权限相关知识点。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->








\#### 1. 区块链和交易

\- 今天最重要的收获，是更生动地理解了 Web3 区块链对“交易”的意义。

\- 在 Web2 体系里，用户之间的交易和资产记录通常依赖银行、机构或平台来维护账本；这些机构提供可信记录、清结算、账户管理和纠纷处理。

\- 区块链尝试把“可信账本”这件事从单一机构手里拆出来，交给公开、可验证、不可随意篡改的网络来共同维护。

\- 所以区块链不只是“币的转账系统”，更像一个持续更新的 state DB：每笔交易都会推动全网共同认可的状态发生变化。

\- 用 state DB 的角度理解区块链很有启发：账户余额、合约数据、资产归属等都可以看作链上状态；交易则是触发状态变更的操作。

\- 一笔链上交易通常可以理解为：用户发起操作，钱包签名授权，交易被广播到网络，节点验证其合法性，最终被打包进区块并更新状态。

\- “交易成功”不只是钱从 A 到 B，而是全网状态从旧状态迁移到新状态，例如余额减少、余额增加、合约变量更新或 NFT 所有权变化。

\#### 2. State DB 视角

\- 从 state DB 的角度看，区块链既保存交易历史，也维护由这些交易共同推导出的当前状态。

\- 区块可以看作一批交易的集合，链上的状态则是从创世状态开始，按顺序执行所有有效交易之后得到的结果。

\- 这和传统数据库的区别在于，区块链的状态变化需要满足共识规则，不是某个中心化服务直接写入数据库。

\- 对开发者来说，智能合约可以理解为链上状态变化的程序逻辑：它规定什么人、在什么条件下、可以怎样修改某些状态。

\- 这也解释了为什么 Web3 开发会特别强调可验证性、不可篡改性和权限边界，因为代码和状态一旦上链，就会直接影响资产和账户。

\#### 3. 钱包类型

\- 钱包不只是“存币工具”，它更像用户进入 Web3 的身份、账户和签名入口。

\- 钱包里真正关键的不是资产本身，而是控制账户的私钥、助记词或等价的授权能力；资产记录在链上，钱包负责证明“我有权操作这个地址”。

\- 今天学习了几类钱包形态：

  - 托管钱包：私钥或账户控制权主要由平台托管，使用门槛低，适合新用户上手，但信任依赖更强，平台风险也更高。

  - 自托管钱包：用户自己掌握私钥或助记词，资产控制权更强，但也需要自己承担备份、丢失、钓鱼和误签名等安全责任。

  - 混合钱包：在用户体验和自主管理之间做折中，可能结合托管恢复、社交恢复、多签或分层权限等机制。

  - AA 钱包：账户抽象钱包仍在发展中，目标是改善传统钱包的使用体验和权限管理方式，例如更灵活的账户逻辑、批量交易、Gas 代付、社交恢复等。

\- 对用户体验来说，钱包是 Web3 的入口；对安全来说，钱包是资产控制权的边界；对开发者来说，钱包是应用和链上账户交互的桥梁。

\#### 4. 签名与安全

\- 签名是钱包的关键能力之一：用户通过签名证明“这笔操作确实由我授权”。

\- 签名本身不应该被简单理解为登录按钮，而是链上权限和资产安全的重要边界。

\- 签名可以分为不同场景：有些签名只是证明地址所有权，比如登录 dApp；有些签名会发起链上交易，可能消耗 Gas 或转移资产；还有些签名可能授权合约在未来移动资产。

\- 因此看懂签名内容很重要，尤其是授权额度、目标合约、操作类型和有效期限。

\- 钱包安全的核心不是“不要使用钱包”，而是理解自己正在授权什么：签名对象是谁、授权范围多大、这次操作会不会改变链上状态。

\#### 5. 延伸概念

\- Gas：链上交易需要消耗计算和存储资源，Gas 可以理解为为这些资源付费的机制，也能防止网络被无限制滥用。

\- 地址：地址通常是公钥或账户标识的派生结果，是链上识别账户的方式；但知道地址不等于拥有控制权。

\- 私钥 / 助记词：它们代表账户控制权，丢失可能无法找回，泄露则意味着别人可以替你签名。

\- 区块确认：交易被打包进区块后并不是传统意义上的“数据库立即写入”，还需要根据链的共识机制获得一定确认，确认越多通常越稳定。

\- 智能合约：可以理解为部署在链上的程序，负责定义资产、权限、交易规则和状态变化逻辑。

\- dApp：去中心化应用通常由前端界面、钱包连接、智能合约和链上状态组成，用户通过钱包签名与合约交互。

\#### 6. 交易模型与幂等

\- 幂等的核心含义是：同一个操作重复执行多次，最终效果和执行一次一致。这个概念可以从不同链的交易模型里延伸出来理解。

\- 在区块链里，幂等可以分成两层：

  - 链层面的防重复执行：同一笔交易或同一份可花费资源不能被重复执行。

  - 应用 / 合约层面的幂等设计：开发者需要用 request id、状态标记、nonce、唯一账户地址等方式，避免同一个业务动作被重复处理。

\- BTC：

  - Bitcoin 使用 UTXO 模型。每个输入都引用某个尚未花费的输出，也就是 `txid + output index`。

  - 一个 UTXO 在链上只能被花费一次；如果再次引用同一个 UTXO，就会构成 double spend，最终只能有一笔有效交易进入主链状态。

  - 从幂等角度看，UTXO 像一次性资源：消费成功后就不存在了，因此重复消费不会再次产生同样的状态变化。

  - 未确认交易阶段可能出现 RBF 或冲突交易，但最终确认后的账本状态只会承认其中一个有效花费。

\- ETH：

  - Ethereum 使用账户模型，每个外部账户有递增的 `nonce`。

  - 同一个账户的每笔交易都必须使用对应顺序的 nonce；某个 nonce 一旦被链上交易消耗，后续相同 nonce 的交易就不能再次执行。

  - 重复广播同一笔已签名交易，不会让它执行多次；在交易未确认前，同一 nonce 的新交易可能用于替换 pending 交易，但确认后该 nonce 就被占用。

  - 对智能合约来说，链层 nonce 只能保证交易序列不重复；具体业务是否幂等，还要合约自己设计，例如记录 `processed[id]`、限制重复 mint、重复 claim 或重复提交。

\- SOL：

  - Solana 的交易消息里包含 recent blockhash，签名覆盖交易消息；相同签名 / 相同交易不会被执行多次。

  - recent blockhash 也承担“交易新鲜度”和“区分重复交易”的作用；如果想重新发送一笔逻辑相同但新的交易，通常需要新的 blockhash 并重新签名。

  - 这意味着：完全相同的 Solana 交易具备防重复执行效果；但如果换了 blockhash 重新签名，它在链上就是一笔新的交易，可能再次改变状态。

  - Solana 也有指令层面的幂等设计，例如 Associated Token Account 的 `create_idempotent`：账户不存在时创建，账户已存在且符合预期时不会因为重复创建而失败成业务错误。

  - 因此 Solana 上既要理解交易级去重，也要在程序或客户端层设计业务幂等，避免因为重签名、重试或前端重复点击导致重复转账或重复状态变更。

\#### 7. 问题与初步答案

\- Q：如果区块链是 state DB，那么不同链的状态模型有什么区别？比如以太坊的账户模型和比特币的 UTXO 模型差异是什么？

  - A：比特币更接近 UTXO 模型，关注“未花费的交易输出”，一笔交易会消耗旧的 UTXO 并生成新的 UTXO；以太坊更接近账户模型，账户有余额、nonce，合约账户还会有代码和存储。直观理解是：UTXO 更像不断拆分和合并的票据，账户模型更像账户余额和合约状态的更新。

\- Q：AA 钱包实际解决了哪些具体体验问题？它会不会带来新的安全风险？

  - A：AA 钱包主要想改善传统钱包的使用体验，例如社交恢复、批量操作、Gas 代付、权限分级和更灵活的账户规则。它也会带来新的风险，例如账户逻辑更复杂、恢复机制可能被攻击、第三方代付或中继服务可能引入新的信任边界。

\- Q：签名登录、交易签名和授权签名在钱包界面上应该如何区分？

  - A：签名登录通常用于证明“我控制这个地址”，不一定改变链上状态；交易签名会提交链上交易，通常会消耗 Gas，并可能改变资产或合约状态；授权签名可能允许某个合约在一定范围内操作资产，风险重点在授权对象、额度、期限和可撤销性。

\- Q：开发 dApp 时，哪些状态应该放链上，哪些状态仍然适合放在传统后端或数据库里？

  - A：需要公开验证、涉及资产归属、权限规则、结算结果和不可随意篡改的核心状态更适合放链上；频繁变化、成本敏感、不需要全网共识、涉及隐私或只是前端体验的数据，更适合放在传统后端或数据库里。一个实用判断是：只有必须被公开验证和共同结算的状态，才值得承担上链成本。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
