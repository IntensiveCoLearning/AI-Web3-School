---
timezone: UTC+8
---

# QingQiuGeek

**GitHub ID:** QingQiuGeek

**Telegram:** @qingqiugeek

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->
\[参考\](https://github.com/ogalias/OGBC-Intern-Project/blob/master/stage1/stage1.md) ## Polymarket 的核心数据模型 > 数据模型：事件 (Event)、市场 (Market)、条件 (Condition)、集合 (Collection)、头寸 (Position 或 TokenId) 在 Polymarket 中，事件代表一个预测主题，例如"某次美联储利率决议"。一个事件下可以包含一个或多个市场。每个市场对应该事件下的一个具体预测问题。例如，对于事件"2024年美国大选"可以有多个市场："候选人 A 当选总统？"、"候选人 B 当选总统？"等，每个市场通常是一个二元预测（Yes/No）。 - Market（市场） 对应具体的 Yes/No 问题，是交易发生的基本单位。一些事件只有一个市场（例如简单的二元事件），而有些事件包含多个市场形成一个多结果事件，此时通常采用 Polymarket 的"负风险 (NegativeRisk)"机制来提高资金效率。 - NegativeRisk（负风险） 当一个事件包含多个互斥市场（即"赢家通吃"的多选一事件）时，Polymarket 引入 NegRiskAdapter 合约，将这些市场关联起来，提高流动性利用率。具体来说，\*\*在同一事件下，一个市场的 NO 头寸可以转换为该事件中所有其他市场的 YES 头寸\*\*。NegRiskAdapter 合约提供了 convert 功能，实现 NO → YES 的头寸转换。 🎯 场景设定：2024 美国总统大选 假设只有两个主要候选人： 市场 A：特朗普获胜，市场 B：哈里斯获胜。这是一个互斥事件，只有一方获胜。 > ❌ 没有 NegRiskAdapter 时： > > 1.用户小明 认为“特朗普不会赢”，去市场 A 买入 NO (特朗普输)。 > > 成本：假设 NO 价格是 $0.60。小明花 $60 买了 100 股 NO。 > > 结果：如果特朗普输了（哈里斯赢），小明赚 $40。 > > 2.用户小红 认为“哈里斯会赢”。去市场 B 买入 YES (哈里斯赢)。 > > 成本：假设 YES 价格是 $0.55。小红花 $55 买了 100 股 YES。 > > 结果：如果哈里斯赢了，小红赚 $45。 虽然小明的观点（特朗普输）和小红的观点（哈里斯赢）在逻辑上是完全等价的，\*\*但他们的资金被锁在两个不同的市场池子里\*\*，最后获利也不一样。 > ✅ 引入 NegRiskAdapter 后： > > Polymarket 将这两个市场通过 NegRiskAdapter 合约关联起来，形成一个事件组合。核心逻辑公式：在互斥事件中持有“市场 A 的 NO” = 持有“除了 A 以外所有结果的 YES”，即：NO(特朗普) ≡ YES(哈里斯)，此时交易如下： > > !\[\](image.png) > > !\[\](image-1.png) NegRiskAdapter机制优势： 1. 流动性合并 通过转换机制，同一事件所有市场的 NO 流动性都可以瞬间变成任意其他市场的 YES 流动性，让不同候选人市场里的资金形成了一个巨大的共享资金池。\*\*大户想进出大单，不会因为某个单一市场深度不够而滑点巨大。\*\* 2. 资本效率 做市商不需要为每个结果都单独准备资金，可以只在一个市场（比如最热门的那个）提供 NO 流动性，然后通过 convert 自动满足其他市场 YES 的买单需求。 3. 无摩擦套利 如果市场价格出现偏差，例如：Price(NO\_Trump) = $0.60，Price(YES\_Harris) = $0.70，套利者可以瞬间买入 NO\_Trump，通过 Adapter 转换成 YES\_Harris，然后卖出！ Polymarket 使用 Gnosis 开发的条件代币框架 (Conditional Token Framework, CTF) 来实现预测市场的头寸代币化。 ### Condition（条件） 每个市场在链上的"登记身份"。创建市场时，会调用 CTF 合约的 prepareCondition 方法注册一个条件。ConditionId 是通过keccak256计算得出的\*\*唯一标识\*\*： \`\`\`solidity /\*\* oracle 是预言机合约地址（Polymarket 目前使用 UMA Optimistic Oracle 作为预言机）。 questionId 是问题的标识符（通常由问题内容等信息哈希得到，或 UMA Oracle 的 ancillary data 哈希）。 outcomeSlotCount 是结果选项数量。对于二元市场，值为 2。 \* \*/ conditionId = keccak256(oracle, questionId, outcomeSlotCount) \`\`\` ### Position（头寸） 头寸指用户持有的某市场某结果的份额。Polymarket 将每个头寸实现为一个 ERC-1155 标准的可交易代币（又称 PositionId 或 TokenId）。每种结果对应一个不同的 TokenId，用于区分 YES 和 NO 两种头寸。 ### CollectionId（集合 ID） 在条件代币框架中，中间引入了集合的概念，用于表示特定条件下某个结果集合。计算方法为： \`\`\`solidity /\*\* parentCollectionId 对于独立的条件通常为 bytes32(0)（Polymarket 所有市场都是独立条件，没有嵌套条件，因此 parentCollectionId 一律为 0）。 indexSet 是一个二进制位掩码，表示选取哪些结果槽位。对于二元市场，有两个可能的 indexSet： YES 头寸的 indexSet = 1 (0b01，表示选取第一个结果槽)。 NO 头寸的 indexSet = 2 (0b10，表示选取第二个结果槽)。 \* \*/ collectionId = keccak256(parentCollectionId, conditionId, indexSet) \`\`\` ### TokenId（PositionId） 最后，用抵押品代币地址和集合 ID 一起计算得到 ERC-1155 的 Token ID： \`\`\`solidity tokenId = keccak256(collateralToken, collectionId) \`\`\` 在 Polymarket 中，对于每个市场，会产生两个 TokenId，一个对应 YES 份额，一个对应 NO 份额。这两个 TokenId 是在该市场上交易的标的资产，代表了对同一预测问题的两种相反结果的头寸。 ### Collateral（抵押品） Polymarket 市场的押注资金均以稳定币 USDC (Polygon 上为 USDC.e) 作为抵押品。\*\*每份 Outcome Token 背后对应 1 USDC 的抵押\*\*，当市场结算时兑现。 价格含义：比如价格 0.60 USDC 意味着花 0.60 USDC 可购买该市场 1 份 YES 代币。如果该结果最终发生，持有者可赎回 1 USDC（获得净盈利 0.40 USDC）；如果未发生，则该代币价值归零，损失全部本金 0.60 USDC。因此，二元期权代币价格可以理解为市场对该事件发生概率的定价。 ## Polymarket 链上日志在"市场创建 → 交易 → 结算"全过程中的作用 ## 链上日志解析
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->

* * *

* * *

[以太坊节点、客户端](https://ethereum.org/zh/developers/docs/nodes-and-clients/#execution-clients)

“节点”是指任何以太坊客户端软件的实例，它连接到其他也运行以太坊软件的计算机，形成一个网络。 **一个节点需要运行两种客户端软件：共识客户端和执行客户端**。

-   执行客户端（也称为执行引擎、EL 客户端或旧称“以太坊 1”客户端）侦听网络中广播的新交易，并在 EVM 中执行，并保存所有当前以太坊数据的最新状态和数据库。
    
-   共识客户端（也称为信标节点、CL 客户端或旧称“以太坊 2”客户端）**实现权益证明共识算法**，**使网络能够根据来自执行客户端的经验证数据达成一致**。 此外还有名为“验证者”的第三种软件，它们可被添加到共识客户端中，使节点能参与保护网络安全。节点分布可以看 [Etherscan 节点地图](https://etherscan.io/nodetracker) 、[以太坊节点](https://ethernodes.org/)
    

## 节点类型

客户端可以运行三种类型的节点：轻节点、全节点和归档节点。

### 轻节点

轻节点只下载区块头，不会下载每个区块。这些区块头包含区块内容的摘要信息。轻节点会向全节点请求其所需的任何其他信息。然后轻节点可以根据区块头中的状态根独自验证收到的数据。

轻节点可以让用户加入以太坊网络，无需运行全节点所需的功能强大的硬件或高带宽。**轻节点不参与共识（不能成为矿工/验证者）**，但可以访问功能和安全保障和全节点相同的以太坊区块链。

### 全节点

**全节点对区块链进行逐块验证**，包括下载和验证每个块的块体和状态数据。有些全节点从创世区块开始，验证区块链整个历史中的每一个区块（完全同步）。有些全节点则从更近期的区块开始验证（比如 Geth 的**快照同步**），而且它们信任这些区块是有效的。

但是全节点并不保存全部区块链数据，而是只保存相对较新的数据，那么又如何逐块验证呢？

全节点会同步历史数据。如上所说，如果从创世开始验证，那么**全节点会从创世区块开始**，逐块下载、执行并验证每一笔交易，从头构建完整的状态树，这是最彻底、最慢的方式，但能获得 100% 自验证的信任。

如果从近期区块开始验证，则会从某个最近的区块开始，逐块下载、执行并验证每一笔交易，这种方式显然更快，但是要 100%信任逐块下载的初始区块。

在逐块验证后，会进行**修剪**。区块链的“状态”是指所有账户余额、合约代码和存储变量的**当前值**。当执行交易时，会产生大量**中间状态**。修剪机制会安全地删除那些不再被最新区块引用的旧状态数据，只保留从创世状态推导出最新状态所必需的“状态树”路径上的关键节点。

### 归档节点

归档节点从创世块开始验证每个区块的全节点，存储全节点中保存的所有内容不删除任何下载的数据，并建立历史状态存档。

以归档以外的任何方式同步客户端将导致区块链数据被修剪。**这意味着不存在包含所有历史状态的归档，但全节点能够在需要时构建它们。**

## 信标链

信标链（Beacon Chain）是以太坊 2.0 的核心升级，它不处理日常交易，而是作为整个网络的“中央调度员”，负责管理验证者、分配共识任务，并协调未来的分片链。

## 同步模式

### 完全同步

完全同步会下载所有区块（包括区块头和区块体），并通过执行自创世块以来的每个区块，以增量方式重新生成区块链的状态。

### 快速同步

与完全同步一样，快速同步会下载所有区块（包括区块头、交易和收据）。 不过，快速同步并不重新处理历史交易，而是依赖**收据**，直至到达最近的头部时，再切换到导入和处理区块，以提供一个完整的节点。

收据（Receipt）是交易被成功打包进区块并执行完毕后生成的“官方凭证”，它记录了交易的交易哈希、执行结果、状态变化、消耗 Gas、状态跟等信息，是快速同步机制中信任历史交易的关键依据。

### 快照同步

快照同步从一个最近的已知为真实区块链一部分的受信任检查点开始。节点会定期保存检查点，同时删除早于某个时间的数据。这些快照被用于在需要时重新生成状态数据，而不是永久储存它。

### 轻量同步

轻客户端模式下载所有区块头和区块数据，并对其中一些进行随机验证。 仅从可信的检查点同步链的头部。

## 共识层同步模式

### 乐观同步

乐观同步是一种合并后同步策略，专为选择加入和向后兼容而设计，允许执行节点通过已确立的方法进行同步。

执行引擎可以**在不进行完全验证的情况下乐观地导入信标区块**，找到最新区块头，然后使用上述方法开始同步链。接着在执行客户端更新之后通知共识客户端信标链中交易的有效性。

### 检查点同步

检查点同步也称为**弱主观性同步”**，它基于弱主观性假设，从最近的弱主观性检查点而不是从创世块同步信标链。检查点同步可大幅加快初始同步速度，意味着节点会连接到远程服务，以下载最近的最终确定状态并从该点继续验证数据。**提供数据的第三方会受到信任，因此要谨慎选择。**

## 执行客户端

-   Go Ethereum：简称 Geth，Go 语言实现，以太坊协议的原始实现之一。 目前，它是使用最为广泛的客户端，拥有最大的用户群，为用户和开发者提供各种工具。
    
-   Erigon：Go 实现，以前称为 Turbo‐Geth，最初是 Go Ethereum 的一个分叉，注重速度和磁盘空间效率。
    
-   Nethermind：C#、.NET 实现。
    
-   Besu：Java 实现，企业级以太坊客户端，面向公共网络和许可网络。 它运行所有以太坊主网功能（从追踪到 GraphQL），可进行大范围监控。
    
-   Reth：Rust 实现，以太坊全节点。
    
-   EthereumJS：TypeScript 实现。
    

## 共识客户端

-   Lighthous：Rust
    
-   Grandine：Rust
    
-   Lodestar：TypeScript
    
-   Nimbus：Nim
    
-   Teku：Java
    
-   Prysm： Go
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->


Gas 是 EVM 执行操作的单位。每条指令消耗固定的 gas，具体可以看\[以太坊 操作码\](https://ethereum.org/zh/developers/docs/evm/opcodes/)，gas 优化目标是减少交易所需的总 gas，提高用户体验并降低成本。  
  
\*\*区块链数据存储位置有三种：storage（存储，也就是磁盘）、memory（内存，临时的）、calldata（只读数据）\*\*  
  
\## 常见优化技巧  
  
\### 减少对 storage 操作  
  
\- 首次读取 \`storage\` 需 2100 gas（后续是热读取需 100 gas），而读取 \`memory\` 仅 3 gas。推荐多次访问同一存储数据时，将其缓存到 \`memory\` 以减少 SLOAD 次数。  
  
\- 首次初始化写入 \`storage\` 的成本高达 20,000 gas，修改 \`storage\` 中已有的存储值成本是 2,900 - 5,000；\`storage\`成本远高于\`memory\`，所以能用 \`memory\` 就不要用 \`storage\`。  
  
!\[\](image.png)  
  
示例：  
  
\`\`\`c  
// 公共状态变量，存储在storage中  
uint256 public totalScore;  
  
// ❌ 非优化写法  
function updateScore(uint256\[\] memory scores) public {  
for (uint256 i = 0; i < scores.length; i++) {  
// 每一轮循环都在读写storage  
totalScore += scores\[i\];  
}  
}  
  
// ✅ 优化写法  
function updateScore(uint256\[\] memory scores) public {  
// 1. 仅读取一次storage到内存 (SLOAD)  
uint256 tempScore = totalScore;  
for (uint256 i = 0; i < scores.length; i++) {  
// 2. 在内存中操作 (MLOAD/MSTORE)，每次仅需 3 Gas  
tempScore += scores\[i\];  
}  
// 3. 将最终结果写回storage (SSTORE)，仅需一次写存储  
totalScore = tempScore;  
}  
\`\`\`  
  
\### 使用位压缩（Bit Packing）  
  
EVM 存储是以 32 字节（256 位）为基本单位的。定义一个 uint256 会占满一整个插槽；定义一个 uint8，它只需要 1 字节，但如果不进行压缩，剩下的 31 字节就会被浪费掉。位压缩的目的就是通过多个连续小尺寸变量，让它们在物理上存储在同一个插槽内。  
  
示例：  
  
\`\`\`c  
struct Packed {  
//占1字节  
uint8 a;  
//占3字节  
uint24 b;  
}  
\`\`\`  
  
\### 循环优化  
  
减少不必要的运算，如 \`array.length\` 缓存到变量中定义在循环外，而非每次都在循环中反复定义。  
  
示例：  
  
\`\`\`c  
// ❌ 非优化  
for (uint256 i = 0; i < arr.length; i++) {  
uint256 len = arr.length;  
...  
}  
// ✅ 优化  
uint256 len = arr.length;  
for (uint i = 0; i < len; ++i) {  
...  
}  
\`\`\`  
  
\### 函数可见性选择  
  
\`external\` 比 \`public\` 更节省 gas，适用于仅被外部调用的函数。  
  
由于 public 函数既可以被外部调用，也可以被合约内部函数调用。为了兼容内部调用，Solidity 编译器通常会将 calldata 中的参数\*\*拷贝到内存（Memory）\*\*中，这样就会消耗 gas。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->



打卡，今天投了简历
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->




\[x参考\](https://x.com/virtuals\_io/status/2031042423288426979)  
  
\## 核心观点  
  
\*\*如果想让 AI Agent 生态真正去中心化，就必须建立开放的商业体系（commerce）。\*\*  
  
原因：  
  
\- AI Agent 之间需要 \*\*买卖服务、合作、交易资金\*\*  
\- 如果这些交易依赖某个平台或公司，就会重新变成中心化  
  
因此必须有：\*\*开放、无需许可、无人控制的商业基础设施\*\*，而 \*\*区块链 + 智能合约\*\* 是实现这一点的方式。  
  
\## 为什么 Agent 经济需要去中心化商业  
  
AI Agent 未来会成为 \*\*经济参与者\*\*，例如：  
  
\- AI 生成图片  
\- AI 写代码  
\- AI 分析金融数据  
\- AI 管理投资组合  
\- AI 审查法律文件  
  
这些都是 \*\*有价值的服务\*\*。未来的经济模式可能变成\*\*Agent ↔ Agent 的自动交易网络\*\*。  
  
\## Agent 经济面临的核心问题：信任  
  
当两个 Agent 交易时如果：  
  
\- 客户先付钱 → 服务方可能不交付  
\- 服务方先交付 → 客户可能不付款  
  
传统互联网的解决方式是平台负责托管资金、规则执行、评价系统、争议处理，但问题是平台可以改规则、冻结资金、下架用户、关闭服务。这会导致 \*\*中心化控制\*\*。  
  
\## 区块链如何解决这个问题  
  
\*\*用智能合约作为“中立执行者”\*\*  
  
智能合约负责：托管资金、记录任务状态、执行支付或退款  
  
优点：公开透明、不可篡改、无需信任平台  
  
同时链上还能提供：\*\*可验证历史记录\*\*  
  
例如：  
  
\- 完成过哪些任务  
\- 谁评价过  
\- 交付内容的 hash  
  
这些记录可以构成：\*\*Agent 的信誉系统（Reputation）\*\*  
  
\## ERC-8183：Agent 商业标准  
  
核心概念：  
  
\*\*Job（任务）\*\*  
  
每个任务包含三方：  
  
| 角色 | 说明 |  
| --------- | ---------- |  
| Client | 客户 |  
| Provider | 服务提供者 |  
| Evaluator | 评估者 |  
  
三方都只是 \*\*钱包地址\*\*。  
  
\---  
  
\### Job 的工作流程  
  
具体流程：  
  
1️⃣ Client 创建任务并支付资金（托管）  
2️⃣ Provider 完成工作并提交结果  
3️⃣ Evaluator 评估结果  
  
结果：  
  
\- \*\*Complete\*\* → 钱给 Provider  
\- \*\*Reject\*\* → 钱退给 Client  
\- \*\*Expired\*\* → 自动退款  
  
整个流程 \*\*自动执行，不需要平台\*\*。  
  
\---  
  
\### Evaluator（评估者）  
  
评估者可以是：  
  
1️⃣ \*\*AI Agent\*\*  
  
\- 用 LLM 判断任务质量  
  
2️⃣ \*\*智能合约\*\*  
  
\- 验证 ZK proof  
\- 自动判断正确性  
  
3️⃣ \*\*DAO / 多签\*\*  
  
\- 用于高价值交易  
  
协议不限制评估方式。  
  
\## Hooks：可扩展模块  
  
ERC-8183 设计成 \*\*最小核心协议\*\*。复杂逻辑通过 \*\*Hooks（插件合约）\*\*实现，例如：  
  
1\. 资金管理任务  
  
\- DeFi 投资  
\- token swap  
  
2\. 竞价任务  
  
多个 provider 竞价  
  
3\. Reputation gating  
  
只允许高信誉 agent 接单  
  
4\. 隐私任务  
  
使用 ZK 或 TEE 保护数据  
  
5\. 风险管理  
  
需要抵押或担保  
  
\## 与 ERC-8004 的关系  
  
ERC-8004 是\*\*Agent 身份和信誉系统\*\*，和ERC-8183两个标准形成循环：  
  
\`\`\`  
ERC-8004 发现 Agent  
↓  
ERC-8183 进行交易  
↓  
交易产生信誉记录  
↓  
ERC-8004 更新信誉  
\`\`\`  
  
形成 \*\*Agent 自组织经济系统\*\*。  
  
\## ERC-8183 不只是支付协议  
  
作者强调：\*\*支付 ≠ 商业\*\*  
  
商业需要：  
  
\- 任务定义  
\- 资金托管  
\- 交付验证  
\- 评价记录  
\- 争议处理  
  
ERC-8183 试图把这些 \*\*全部做成链上标准\*\*。  
  
\## 为什么这个标准重要  
  
AI 时代会出现大量新“商家”：  
  
例如：  
  
\- AI 微服务  
\- 自动化工具  
\- API Agent  
\- 个人 AI  
  
这些参与者：  
  
\- 没公司  
\- 没网站  
\- 没历史记录  
  
传统支付系统 \*\*无法审核他们的风险\*\*。  
  
但 ERC-8183：  
  
\- 不需要审核  
\- 不需要许可  
\- 只需要钱包地址  
  
并通过链上记录逐渐建立信誉。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->





今天学习了solidity

  
\## error、revert、event  
  
\- error 用于自定义错误，然后由开发者抛出给客户端  
  
\- panic 表示“程序内部严重故障”，由 EVM 或编译器自动抛出，开发者无法自定义 Panic 消息  
  
!\[\](image-2.png)  
  
!\[\](image-3.png)  
  
\- revert 关键字类似 Java 的 throw，用于主动终止当前交易的执行，并回滚所有状态更改。它可以配合自定义错误（custom error） 使用，也可以单独使用。  
  
\- event 关键字用于定义事件，事件将被发送给客户端（区块链网络）  
  
\`\`\`c  
//定义一个名为Coin的智能合约  
contract Coin {  
  
/\*  
关键字 "public"会自动生成一个函数，使得该变量可以被其他合约访问。生成的函数大致如下：  
function minter() external view returns (address) { return minter; }  
\*/  
address public minter;  
  
//mapping可以被看作是被初始化的哈希表，每一个可能的键从一开始就存在，并被映射到一个值，其字节表示为全零的值。但是无法获得所有的键或所有的值  
mapping(address => uint) public balances;  
  
// 使用event关键字定义事件，允许客户端对声明的特定合约变化做出反应  
event Sent(address from, address to, uint amount);  
  
// 构造函数代码只有在合约第一次部署创建时运行，因此部署者将成为minter，才有权限铸币。  
constructor() {  
minter = msg.sender;  
}  
  
// 向一个地址发送一定数量的新创建的代币，但只能由合约创建者minter调用  
function mint(address receiver, uint amount) public {  
require(msg.sender == minter);  
balances\[receiver\] += amount;  
}  
  
// 使用 error 关键字自定义错误  
error InsufficientBalance(uint requested, uint available);  
  
// 从调用者那里发送一定数量的代币到一个地址也就是转账  
function send(address receiver, uint amount) public {  
if (amount > balances\[msg.sender\])  
// 使用 revert 抛出自定义的错误（类似 throw），终止并恢复所有变化  
revert InsufficientBalance({  
requested: amount,  
available: balances\[msg.sender\]  
});  
  
balances\[msg.sender\] -= amount;  
balances\[receiver\] += amount;  
  
//发送事件，以太坊客户端如网络应用，可以监听区块链上发出的这些事件，事件一旦发出，监听器就会被动收到参数 from， to 和 amount，这使得跟踪交易成为可能。  
emit Sent(msg.sender, receiver, amount);  
}  
}  
  
\`\`\`  
  
\## EVM 存储数据的三个区域  
  
\- 存储  
  
每个账户都有一个称为\`存储\`的数据区，持久化存储。存储是一个键值存储，将 256 位的字映射到 256 位的字。 无法枚举存储，读取的成本相对较高，初始化和修改存储的成本更高。  
  
\- 内存  
  
合约在每次消息调用时都会获得一个新清除的实例，内存是线性的，可以在字节级寻址，但读的宽度限制在 256 位，而写的宽度可以是 8 位或 256 位。  
  
\- 栈  
  
EVM 不是基于寄存器的，而是基于栈的，因此所有的计算都在一个被称为 栈（stack） 的区域执行。 栈最大有 1024 个元素，每个元素长度是一个字（256 位）。  
  
\## 委托调用和库  
  
存在一种特殊的消息调用，被称为委托调用（delegatecall），比如 msg.sender 和 msg.value。  
  
这意味着合约可以在\*\*运行时动态地\*\*从不同的地址加载代码。存储、当前地址、余额仍然指的是调用合约，只是代码取自被调用的地址。  
  
\## 创建、停用、自毁  
  
从区块链上删除代码的唯一方法是当该地址的合约执行 selfdestruct 操作。 存储在该地址的剩余以太币被发送到一个指定的目标，然后存储和代码被从状态中删除。如果有人向被删除的合约发送以太币，以太币就会永远丢失。  
  
\## 单位和全局可用变量  
  
\`\`\`  
1 wei == 1  
  
1 gwei == 1e9  
  
1 szabo == 1e12 (Solidity 0.7.0 版本中被正式弃用)  
  
1 finney == 1e15 wei (Solidity 0.7.0 版本中被正式弃用)  
  
1 ether == 1e18 == 1ETH  
  
由于 \`闰秒\` 会造成不是每一年都等于365天，甚至不是每一天都有24小时，而且因为闰秒是无法预测的，所以需要借助外部的预言机来对一个确定的日期代码库进行时间矫正！因此在 0.5.0 版本中删除了后缀 years  
  
1 == 1 seconds  
  
1 minutes == 60 seconds  
  
1 hours == 60 minutes  
  
1 days == 24 hours  
  
1 weeks == 7 days  
  
\`\`\`  
  
\## 全局变量  
  
\- blockhash(uint blockNumber) returns (bytes32)： 给某个区块生成哈希值 - 只对最近的 256 个区块有效。在 0.4.22 版本中被废弃，在 0.5.0 版本中被删除。  
  
\- blobhash(uint index) returns (bytes32)： 用于在智能合约中读取当前交易附带的 Blob 数据的哈希值，让合约能验证和引用链下或 L2 提交的“大块数据”（Blobs）而不暴露原始数据内容，而无需将这些数据全部存入昂贵的链上存储。 （ EIP-4844 ）。  
  
\- block.basefee (uint)： 当前区块的基本费用 （ EIP-3198 和 EIP-1559 ）  
  
\- block.blobbasefee (uint): 当前区块的 blob 基础费用（ EIP-7516 和 EIP-4844）  
  
\- block.chainid (uint)： 当前链的 ID  
  
\- block.coinbase (address payable)： 当前区块矿工的地址  
  
\- block.difficulty (uint)： 当前区块的难度值（ EVM < Paris ）。对于其他 EVM 版本，它是 block.prevrandao 的一个废弃的别名，将在下一个重大改变版本中被删除。  
  
\- block.gaslimit (uint)： 当前区块的燃料上限  
  
\- block.number (uint)： 当前区块的区块号  
  
\- block.prevrandao (uint)： 由信标链提供的随机数（ EVM >= Paris ）（见 EIP-4399 ）。  
  
\- block.timestamp (uint)： 当前区块的时间戳，自 Unix epoch 以来的秒数  
  
\- gasleft() returns (uint256)： 剩余燃料，前身是 msg.gas， 在 0.4.21 版本中被弃用，在 0.5.0 版本中被删除。  
  
\- msg.data (bytes)： 完整的调用数据  
  
\- msg.sender (address)： 消息发送方（当前调用）  
  
\- msg.sig (bytes4)： 调用数据的前四个字节（即函数标识符）。  
  
\- msg.value (uint)： 随消息发送的 wei 的数量  
  
\- tx.gasprice (uint)： 交易的燃料价格  
  
\- tx.origin (address)： 交易发送方（完整调用链上的原始发送方）  
  
\## 错误处理  
  
\- assert(bool condition) 用于测试，内部错误。如果条件不满足，会导致异常，状态回滚  
  
\- require(bool condition) 用于输入或外部组件的错误。如果条件不满足，状态回滚。  
  
\- require(bool condition, string memory message) 提供一个错误消息。  
  
\- revert() 终止运行并状态回滚。  
  
\- revert(string memory reason) 提供一个解释性的字符串。  
  
\## 密码函数  
  
\`\`\`c  
//计算 (x + y) % k，加法会在任意精度下执行，并且加法的结果即使超过 2\*\*256 也不会被截取。从 0.5.0 版本的编译器开始会加入对 k != 0 的校验（assert）。  
addmod(uint x, uint y, uint k) returns (uint)  
  
//计算 (x \* y) % k，乘法会在任意精度下执行，并且乘法的结果即使超过 2\*\*256 也不会被截取。从 0.5.0 版本的编译器开始会加入对 k != 0 的校验（assert）。  
mulmod(uint x, uint y, uint k) returns (uint)  
  
//计算输入的 Keccak-256 哈希值。  
keccak256(bytes memory) returns (bytes32)  
  
//计算输入的 SHA-256 哈希值。  
sha256(bytes memory) returns (bytes32)  
  
//计算输入的 RIPEMD-160 哈希值。  
ripemd160(bytes memory) returns (bytes20)  
  
//利用椭圆曲线签名恢复与公钥相关的地址，错误返回零值。  
ecrecover(bytes32 hash, uint8 v, bytes32 r, bytes32 s) returns (address)  
/\*\*函数参数对应于签名的 ECDSA 值  
r = 签名的前32字节  
s = 签名的第二个32字节  
v = 签名的最后1个字节  
ecrecover 返回一个 address，而不是 address payable。\*/  
\`\`\`  
  
\## address 类型的成员  
  
\`\`\`c  
//以 Wei 为单位的 地址类型 的余额。  
<address>.balance （ uint256 ）  
  
//在 地址类型 的代码（可以是空的）。  
<address>.code （ bytes memory ）  
  
//地址类型 的代码哈希值  
<address>.codehash （ bytes32 ）  
  
//向 地址类型 发送数量为 amount 的 Wei，失败时revert，自动回滚，发送2300燃料的矿工费，不可调节。  
<address payable>.transfer(uint256 amount)  
  
//向 地址类型 发送数量为 amount 的 Wei，失败时返回 false，不会自动revert，2300燃料的矿工费用，不可调节。  
<address payable>.send(uint256 amount) returns (bool)  
  
/\*\*  
在 EVM（以太坊虚拟机）中，所有合约交互最终都通过以下操作码实现：  
CALL → 普通调用  
DELEGATECALL → 代理调用  
STATICCALL → 只读调用  
  
Solidity 的 .call()、.delegatecall()、.staticcall() 就是对上述操作码的封装，这些函数都是低级别的函数，应该谨慎使用。因为任何未知的合约都可能是恶意的，调用未知合约就意味着把控制权交给了该合约，而该合约又可能回调到原合约中，所以要准备好在调用返回时改变您合约的状态变量。  
\*/  
  
//低级调用，向目标地址发起普通消息调用，执行其代码，使用目标合约的存储、余额和上下文，返回是否成功的结果和数据，发送所有可用燃料，燃料费可调节。应避免在执行另一个合约函数时使用 .call()，因为它绕过了类型检查、函数存在性检查和参数打包.  
<address>.call(bytes memory) returns (bool, bytes memory)  
  
//代理调用，在当前合约的上下文中，执行目标合约的代码，返回是否成功的结果和数据，发送所有可用燃料，燃料费可调节。  
<address>.delegatecall(bytes memory) returns (bool, bytes memory)  
  
//发起一次只读调用，禁止任何状态修改（包括发送 ETH、写 storage 等），返回是否成功的结果和数据，发送所有可用燃料，燃料费可调节。  
<address>.staticcall(bytes memory) returns (bool, bytes memory)  
  
\`\`\`  
  
!\[\](image-1.png)  
  
\## 合约相关  
  
\- this 指当前合约，可以显示转换为地址类型  
  
\- super 指上级合约  
  
\- selfdestruct(address payable recipient) 销毁当前合约，将其资金发送到给定的 地址类型 并结束执行。  
  
\- 每个合约定义后，其名称本身就是一个类型。  
  
\`\`\`c  
//如果 Child 继承自 Parent，那么 Child 实例可隐式转为 Parent 类型：  
Parent p = new Child();  
  
//任何合约实例都可以显式转为 address：  
MyToken token = new MyToken();  
address addr = address(token);  
  
\`\`\`  
  
\## 保留关键词  
  
!\[\](image.png)
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->






今天学了the graph。

\[官网\]([https://thegraph.com/docs/en/subgraphs/quick-start/](https://thegraph.com/docs/en/subgraphs/quick-start/))

\`\`\`bash

npm install -g @graphprotocol/graph-cli@latest

graph init

npm install

graph codegen

graph build

graph auth <DEPLOY\_KEY>

graph deploy <SUBGRAPH\_SLUG>

\`\`\`

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/QingQiuGeek/images/2026-05-19-1779196582805-image.png)

**\## 踩坑**

name中是下划线\\\_，但是在slug中则是-

![image-1.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/QingQiuGeek/images/2026-05-19-1779196568013-image-1.png)

  

本地graph init创建的name要和studio的一致，否则最后部署会出现

\`\`\`

× Failed to deploy to Graph node [https://api.studio.thegraph.com/deploy/](https://api.studio.thegraph.com/deploy/): Subgraph not found

\`\`\`

部署后  

![image-4.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/QingQiuGeek/images/2026-05-19-1779196542721-image-4.png)

deploy 后：自己已经可以查，也可以接应用做开发/演示

publish 后：别人也能把它当正式网络服务来用
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->







今天学了 foundry的模糊测试、不变量测试、差异测试

\## 模糊测试  
  
模糊测试让测试框架自动生成大量随机输入，反复运行测试函数，以发现边界条件下的 bug。  
  
\`\`\`solidity  
pragma solidity 0.8.10;  
  
import {Test} from "forge-std/Test.sol";  
  
contract Safe {  
receive() external payable {}  
  
function withdraw() external {  
payable(msg.sender).transfer(address(this).balance);  
}  
}  
  
contract SafeTest is Test {  
Safe safe;  
  
receive() external payable {}  
  
function setUp() public {  
safe = new Safe();  
}  
// 自动为 uint256 生成：0, 1, MAX\_UINT, 随机大数、小数等，任何一次运行 revert 或断言失败 → 整个测试失败，默认运行256次  
function testFuzz\_Withdraw(uint256 amount) public {  
payable(address(safe)).transfer(amount);  
uint256 preBalance = address(this).balance;  
safe.withdraw();  
uint256 postBalance = address(this).balance;  
assertEq(preBalance + amount, postBalance);  
}  
//testFuzz\_Withdraw测试结果是失败，因为测试合约的默认以太币数量是 2\*\*96 wei（在 DappTools 中），所以必须将 amount 类型限制为 uint96 ，以确保我们不会尝试发送超过uint96的值，如下：  
  
function testFuzz\_Withdraw(uint96 amount) public {  
payable(address(safe)).transfer(amount);  
uint256 preBalance = address(this).balance;  
safe.withdraw();  
uint256 postBalance = address(this).balance;  
assertEq(preBalance + amount, postBalance);  
}  
}  
  
\`\`\`  
  
\### 模糊测试固定  
  
当你想确保一组特定的值被用作模糊参数的输入时，可以定义模糊测试固定装置。这些固定装置可以在测试中被声明为：  
  
\- 以 fixture 为前缀的存储数组，后跟要进行模糊处理的参数名称。例如，要用于模糊处理 uint32 类型的参数 amount 的固定装置可以定义如下：  
  
\> uint32\[\] public fixtureAmount = \[1, 5, 555\];  
  
\- 以 fixture 为前缀命名的函数，后跟要进行模糊处理的参数名称。\*\*函数应返回一个（固定大小或动态的）数组\*\*，作为模糊处理所需的值。例如，要用于模糊处理名称为 owner 的 address 类型的参数的固定装置可以定义为具有以下签名的函数：  
\> function fixtureOwner() public returns (address\[\] memory)  
  
如果提供的固定值的类型与要进行模糊处理的命名参数的类型不一致，则会被拒绝并引发错误。  
  
\## 不变量测试  
  
无论系统如何变化（执行任意操作序列），某些“不变性质”必须始终成立。  
  
Foundry 会随机组合 transferToUser1, transferBetweenUsers, burnFromOwner 等操作（例如：先转 100，再 burn 50，再转 200...），每执行几步，就检查一次 invariant\_XXX 是否成立  
，如果任何一次不成立 → 测试失败，并输出导致失败的操作序列，如下:  
  
\`\`\`solidity  
// SPDX-License-Identifier: MIT  
pragma solidity ^0.8.13;  
  
import {Test} from "forge-std/Test.sol";  
import "./MyToken.sol"; // 假设这是 ERC20 合约  
  
contract TokenInvariantTest is Test {  
MyToken token;  
address owner = address(this);  
address user1 = makeAddr("user1");  
address user2 = makeAddr("user2");  
  
uint256 initialSupply = 10000 ether;  
  
function setUp() public {  
token = new MyToken("Test", "TST", initialSupply);  
vm.label(address(token), "Token");  
vm.label(user1, "User1");  
vm.label(user2, "User2");  
}  
  
// ===== 操作函数（Fork 的“动作”）=====  
function transferToUser1(uint256 amount) public {  
vm.assume(amount <= token.balanceOf(owner));  
token.transfer(user1, amount);  
}  
  
function transferBetweenUsers(uint256 amount) public {  
vm.assume(amount <= token.balanceOf(user1));  
vm.prank(user1);  
token.transfer(user2, amount);  
}  
  
function burnFromOwner(uint256 amount) public {  
vm.assume(amount <= token.balanceOf(owner));  
token.burn(amount);  
}  
  
// ===== 不变量断言（必须永远成立）=====  
  
// 不变量 1：总供应量 = 所有账户余额之和  
function invariant\_totalSupplyEqualsSumOfBalances() public {  
uint256 totalBalance = token.balanceOf(owner)  
\+ token.balanceOf(user1)  
\+ token.balanceOf(user2);  
assertEq(token.totalSupply(), totalBalance);  
}  
  
// 不变量 2：余额永不为负（Solidity 保证，但可显式检查）  
function invariant\_balancesNonNegative() public {  
assertGe(token.balanceOf(owner), 0);  
assertGe(token.balanceOf(user1), 0);  
assertGe(token.balanceOf(user2), 0);  
}  
}  
\`\`\`  
  
\## 差异测试  
  
对同一输入，两个不同实现（或不同环境）应产生相同输出。如果不一致，说明至少有一个实现有 bug。常用于：  
  
\- 验证新实现 vs 老实现  
  
\- 验证优化版 vs 原始版  
  
\- 验证 L2 合约 vs 主网行为  
  
Forge 用大量随机 x 值调用 testDifferential\_Sqrt，如果 MyMath.sqrt(100) = 10，但 Math.sqrt(100) = 9 → 立即失败  
  
\`\`\`solidity  
// SPDX-License-Identifier: MIT  
pragma solidity ^0.8.13;  
  
import {Test} from "forge-std/Test.sol";  
import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";  
  
// 自定义 sqrt 实现（可能有 bug）  
library MyMath {  
function sqrt(uint256 x) internal pure returns (uint256) {  
if (x == 0) return 0;  
uint256 z = (x + 1) / 2;  
uint256 y = x;  
while (z < y) {  
y = z;  
z = (x / z + z) / 2;  
}  
return y;  
}  
}  
  
contract DifferentialTest is Test {  
// 差异测试：比较 MyMath.sqrt 和 OpenZeppelin Math.sqrt  
function testDifferential\_Sqrt(uint256 x) public {  
// 限制输入范围（避免溢出或无效值）  
vm.assume(x <= type(uint128).max);  
  
uint256 result1 = MyMath.sqrt(x);  
uint256 result2 = Math.sqrt(x);  
  
// 关键：两者结果必须一致！  
assertEq(result1, result2, "sqrt implementations differ");  
}  
}  
\`\`\`
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
