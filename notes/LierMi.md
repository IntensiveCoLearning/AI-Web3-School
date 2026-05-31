---
timezone: UTC+2
---

# Riso

**GitHub ID:** LierMi

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->
AI x Web3 交叉领域继续学习

学习了解了web3中常见的几种编程语言，以及他们的异同

**Settlement & Escrow 结算与托管**

| 概念 | 作用 |
| --- | --- |
| Escrow | 托管资金 |
| Receipt | 记录付款和交付 |
| Delivery Proof | 证明服务方交付了结果 |
| Acceptance | 验收交付是否合格 |
| Refund | 失败退款 |
| Dispute | 争议处理 |
| Evaluator | 判断交付是否合格 |
| ERC-8183 | Agentic Commerce 的任务、支付、结算标准草案 |

**Agent Identity 智能体身份**

| 概念 | 作用 |
| --- | --- |
| Agent Profile | Agent 的公开说明文件 |
| Capability | Agent 能做什么 |
| Service Endpoint | 外部调用入口 |
| Registry | 身份注册与发现 |
| DID / VC | 去中心化身份与可验证凭证 |
| A2A | Agent 与 Agent 通信 |
| Ownership | 谁能更新身份、收款地址、服务入口 |

**Agent Trust & Reputation 智能体信任与声誉**

| 概念 | 作用 |
| --- | --- |
| Reputation | 历史表现信号 |
| Review | 用户或其他 Agent 的评价 |
| Attestation | 可验证声明 |
| Stake | 抵押，增加作恶成本 |
| Slashing | 失败或作恶后的惩罚 |
| Dispute History | 争议历史 |
| Verification | 能力验证 |

**AI Oracle AI 预言机**

| 概念 | 作用 |
| --- | --- |
| AI Output | 模型输出，例如标签、分数、JSON |
| Data Feed | 持续提供 AI 处理后的数据 |
| Model Result | 包含模型版本、prompt、输入引用、输出字段 |
| Input Hash | 记录输入 |
| Output Hash | 记录输出 |
| Challenge | 允许别人挑战 AI 结果 |
| Dispute | 争议处理 |
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->

## **AI x Web3交叉方向**

**AI 是概率系统，Web3 是资产和权限系统，所以不能让模型自由行动，必须有上下文、权限、验证、日志和人工确认。**

**\-Chain-aware Context 链感知上下文**

| 概念 | 作用 |
| --- | --- |
| On-chain Data | 链上余额、交易、日志、合约状态 |
| Contract Docs | 理解合约业务语义 |
| ABI / Event | 让 Agent 知道合约能调用什么、发生过什么 |
| Transaction History | 查看用户或合约过去做过什么 |
| Explorer Context | 用区块浏览器提供可验证证据 |
| Indexing Context | 把链上事件整理成可查询数据 |
| Citation | 每个关键判断要能追溯到交易哈希、区块号、合约地址或文档 |

AI 不能凭感觉说“你有余额”“交易成功”“合约安全”，它必须给出链上证据。

**\-Web3 Tool Use 工具调用**

| 工具 | 含义 |
| --- | --- |
| RPC Tool | 读取链状态、查区块、估算 gas、广播交易 |
| Contract Read | 调用 view / pure 函数，不改链上状态 |
| Contract Write | 改变链上状态，风险最高 |
| Wallet Tool | 连接账户、请求签名、生成交易 |
| Explorer Tool | 查询交易、合约源码、事件、地址历史 |
| DeFi Tool | 封装 swap、借贷、授权、仓位查询等 |
| Tool Permission | 限制 Agent 能调用什么工具 |
| Tool Log | 记录每次工具调用的输入、输出、错误和结果 |

Agent 可以选择工具，但工具必须限制 Agent。

**\-Agent Workflow 智能体工作流**

把 Agent 的执行流程拆成明确步骤：

用户目标 → 读取上下文 → 生成计划 → 调用工具 → 风险检查 → 执行 → 记录复盘

| 概念 | 作用 |
| --- | --- |
| Task Graph | 把任务拆成节点和依赖 |
| State Machine | 明确当前状态，例如 draft、submitted、confirmed、reverted |
| Human-in-the-loop | 高风险步骤必须人工确认 |
| Retry / Fallback | 失败时不能盲目重试 |
| Trace | 记录每一步输入、判断、工具调用和结果 |
| Evaluation | 测试 Agent 是否稳定、安全、可回放 |

高风险 Agent 不能只有“下一步推理”，必须有状态、边界和停止条件。

**\-Agent Wallet 智能体钱包**

| 概念 | 作用 |
| --- | --- |
| AA Wallet | 账户抽象钱包，可表达复杂规则 |
| Smart Account | 带规则的钱包账户 |
| Session Key | 临时授权，适合低风险自动化 |
| Spending Limit | 限制金额 |
| Policy | 限制合约、方法、时间、对象 |
| Revocation | 用户随时撤销权限 |
| Emergency Stop | 出现异常时暂停 Agent |

控制权不能交给概率模型，Agent 只能拿到有限行动空间。

**\-Machine Payment 机器支付**

| 概念 | 作用 |
| --- | --- |
| Stablecoin Payment | 用稳定币支付，减少价格波动 |
| Budget | 用户授权给 Agent 的支出上限 |
| Quote | 服务方给出的报价 |
| Payment Intent | 付款意图，不等于立即付款 |
| Receipt | 付款和交付后的凭证 |
| Refund | 失败或超时退款 |
| Rate Limit | 防止 Agent 被诱导反复消费 |

Agent 不应该有无限支付能力，只能在具体任务、预算和收款方范围内付款。
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->


探索AI x Web3交叉方向课题  

看了一些黑客松&各种有趣的项目找灵感
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->



## RAG 检索增强生成

**RAG 是“先找证据，再让模型回答”。**

RAG 用来解决模型知识过期和上下文放不下所有材料的问题。系统先从知识库检索相关内容，再让模型基于这些材料回答。可靠的 RAG 要有来源、版本、引用和边界。

**Chunking 文档切块**  
把长文档切成可检索片段。切太小会丢语义，切太大会带来噪声和 token 成本。技术文档最好按标题、API、函数说明、FAQ、版本记录等结构切。

**Vector DB 向量数据库**  
存储 embedding，并根据语义相似度检索相关片段。但相似不等于正确，所以还要存 metadata，比如来源、版本、更新时间、可信等级、是否废弃。

**Retriever 检索器**  
根据用户问题取回候选材料。可以是向量检索、关键词检索、混合检索、图检索，也可以加 metadata filter。

**Rerank 重排序**  
初步检索后，对候选材料重新排序，把更相关、更可信、更完整的内容排到前面。适合技术文档问答、治理讨论、资产风险分析等场景。

**RAG 的重点不是接向量库，而是建立可追溯的证据链。**

* * *

## Agent 智能体

**Agent 是能围绕目标持续调用工具、读取状态、调整步骤的 AI 系统。**

普通 LLM 多数是一次性回答；Agent 可以拆任务、查资料、调用 API、写代码、生成操作草稿、等待反馈再继续。但 Agent 一旦能调用工具或执行动作，错误就会从“答错”变成“做错”。

**Tool Use 工具调用**  
Agent 调用外部能力，比如搜索、数据库、API、代码执行、邮件、支付接口。工具需要明确输入 schema、权限范围、是否只读、是否有副作用、是否需要人工确认。

**Planning 规划**  
把目标拆成步骤。比如分析 DAO 提案，可以拆成读取提案、检索历史讨论、总结争议、检查投票机制、生成风险清单。计划只是候选路线，不是授权。

**State 状态**  
Agent 当前任务的状态，包括用户目标、已完成步骤、工具返回、错误、预算、确认记录和最终输出。生产系统中的 state 应该可查询、可恢复、可审计。

**Agent 不是“自主智能”，而是被约束的执行循环：目标、工具、状态、权限、停止条件缺一不可。**
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->




## 预言机 Oracle

  
预言机是把链外数据带到链上的机制，比如价格、天气、比赛结果、储备证明、随机数、AI 判断结果等。区块链自己不能直接知道链外世界发生了什么。

1.  **合约只认链上数据**  
    如果 DeFi 借贷协议要判断 ETH 价格，就必须依赖价格预言机。
    
2.  **Price Feed 最常见**  
    常用于计算抵押率、清算线、借款额度、资产净值等。读取时要检查：资产对、decimals、更新时间、异常值、feed 地址是否正确。
    
3.  **预言机风险很大**  
    如果价格延迟、数据源被操纵、节点离线、单位搞错，可能导致错误清算、坏账、套利或资产池损失。
    
4.  **AI Oracle 更复杂**  
    如果把 AI 的评分、分类、判断结果提交上链，就要记录输入数据、模型版本、prompt、输出结果和争议处理机制。
    

* * *

## 索引 Indexing

  
索引是把区块、交易、事件、合约状态整理成可查询的数据，方便前端、分析工具和 AI Agent 使用。链上数据公开，但原始数据不好直接用。

1.  **链上是事实来源，索引层是可用数据层**  
    区块链记录事实，但产品真正关心的是：某个地址的仓位、某个协议的 TVL、某个订单是否成交、某个用户历史操作等。
    
2.  **Event Indexing 很重要**  
    合约发出的 `Transfer`、`Deposit`、`Withdraw`、`VoteCast` 等事件，可以被索引器整理成数据库表。
    
3.  **RPC 不是数据库**  
    RPC 可以读当前状态、查日志、发交易，但不适合频繁扫描大量历史数据，容易遇到 rate limit、节点不同步、查询范围太大等问题。
    
4.  **Subgraph / Data Pipeline**  
    The Graph 的 subgraph 可以把合约事件映射成 GraphQL 查询接口。更复杂的项目还会有 event listener、ABI 解码、数据库、API、dashboard、alert、Agent context。
    

* * *

## 安全 Security

  
Web3 安全不是上线前审一次代码，而是从合约设计、权限控制、测试、交易模拟、监控、暂停机制到权限撤销的一整套流程。

1.  **链上错误成本很高**  
    合约部署后，资金已经在链上，攻击者可以直接调用公开接口，很多交易结果不能随便回滚。
    
2.  **权限要最小化**  
    `owner`、`admin`、`upgrade`、`pause`、`withdraw`、`setOracle` 等权限都要清楚控制。不要只看有没有 `onlyOwner`，还要看 owner 是 EOA、多签还是治理合约，有没有 timelock。
    
3.  **常见漏洞：Reentrancy 重入攻击**  
    如果合约先转账，再更新余额，恶意合约可能反复调用提款函数。防护方式包括 Checks-Effects-Interactions、reentrancy guard、避免先调用不可信合约。
    
4.  **交易前要 Simulation**  
    在用户或 AI Agent 签名前，先模拟交易，看会调用哪个合约、转出哪些 token、是否改变授权、是否滑点过大、是否会失败。
    
5.  **上线后要 Monitoring**  
    需要监控大额转账、管理员权限变化、合约升级、预言机价格异常、TVL 快速流出、大量失败交易、Agent 高频高风险操作等。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->





## 账户抽象 Account Abstraction

  
账户抽象就是把钱包从“一个私钥控制一切”升级成“可以写规则的智能账户”。

传统 EOA 钱包有几个问题：用户必须自己保管私钥、必须用原生代币付 gas、每次操作都要签名，权限也很粗糙。账户抽象希望把账户变成智能合约，让账户自己定义验证方式、支付方式和权限规则。

1.  **Smart Account 智能账户**  
    钱包本身变成合约，可以设置多签、社交恢复、交易限额、批量交易等规则。
    
2.  **ERC-4337**  
    用户不再直接发普通交易，而是生成 `UserOperation`。Bundler 收集这些操作，再提交给 EntryPoint 合约执行。
    
3.  **Paymaster**  
    可以让第三方或应用帮用户付 gas，或者让用户用非 ETH 的资产支付手续费。
    
4.  **Session Key**  
    给应用或 AI Agent 一个临时、受限、可撤销的权限，比如只能在某段时间内、调用某个合约、花费一定额度。
    

  
账户抽象不是简单的“免 gas”，而是让钱包权限变得更细、更安全、更适合自动化。尤其在 AI Agent 场景里，不能直接把主私钥交给 AI，而是应该给它有限权限。

* * *

## DeFi 去中心化金融

  
DeFi 是把交易、借贷、稳定币、流动性等金融规则写进智能合约里的开放金融系统。

DeFi 不只是“没有银行中介”，更重要的是金融规则变成了链上协议，可以组合、验证，也可能被攻击。一个简单的 swap 背后可能涉及 AMM、滑点、流动性、手续费、MEV 和预言机。

1.  **Token**  
    DeFi 的资产单位。不能只看名字和图标，要看合约地址、decimals、供应量、是否可增发、是否有黑名单或转账税。
    
2.  **AMM 自动做市商**  
    用流动性池和公式定价，不需要传统订单簿。流动性越深，大额交易造成的价格冲击通常越小。
    
3.  **Lending 借贷协议**  
    用户可以存入资产赚利息，也可以抵押资产借出其他资产。风险来自抵押品下跌、预言机异常、流动性不足和清算失败。
    
4.  **Stablecoin 稳定币**  
    是 DeFi 中常用的计价和结算工具，但“稳定”不是天然保证，要看储备、抵押品、赎回机制和流动性。
    
5.  **Liquidity 流动性**  
    有价格不等于能顺利成交。流动性不足会导致滑点大、清算困难、价格容易被操纵。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->






**开发栈（Dev Stack）**

可以先把一条最小开发链路拆成六步：

在本地或浏览器 IDE 写出合约。

编译合约，得到 bytecode 和 ABI。

在本地链或测试网部署合约。

写测试覆盖核心状态变化和权限边界。

前端用合约地址和 ABI 读取或发送交易。

在区块浏览器验证源码、交易和事件。

\-Remix

Remix 是浏览器里的 Solidity IDE，它可以编写、编译、部署和调试合约，适合入门、教学、原型和快速验证

合约实验台

\-Hardhat

适合 JavaScript/TypeScript 项目，把合约开发接进测试、脚本和前端工程理解本地链、测试网、部署脚本、合约验证和环境变量如何组成完整开发流程

合约工程框架

contracts/：Solidity 合约源码。

test/：TypeScript 或 Solidity 测试。

ignition/ 或 scripts/：部署模块和脚本。

hardhat.config.ts：网络、编译器、插件和变量配置。

artifacts/：编译生成的 ABI、bytecode 和 metadata。

\-Foundry

更偏命令行和 Solidity-native 测试，适合高强度合约开发和快速反馈

forge、cast、anvil

forge test：运行合约测试。

forge build：编译合约。

anvil：启动本地测试链。

cast call：读取链上合约。

cast send：发送交易调用合约。

\- OpenZeppelin

提供常用合约标准和安全组件，但不能替代对业务逻辑的审查

包含 ERC-20、ERC-721、AccessControl、Ownable、Pausable 等常见模块。使用成熟库可以减少重复造轮子，也能避免很多基础实现错误产品决策要自己做

\-viem / wagmi

主要解决前端与链交互的问题：读合约、写合约、管理账户、处理网络和缓存

viem 是 TypeScript 以太坊接口库，强调类型安全和底层调用能力

wagmi 则面向 React 应用，提供钱包连接、账户状态、合约读写和 hooks

**网络（Network）**

理解 Network，是为了知道一笔交易从钱包签名到最终被用户看到，中间经过了哪些层：钱包、RPC、mempool、区块、共识、执行、确认、索引和浏览器

链上应用不是直接写数据库，而是在一个公开、按区块推进、由网络共识维护的状态机上提交请求

\-Block

区块是交易被批量提交和排序的单位

一个区块通常包含交易列表、前一个区块的引用、状态根、时间戳、gas 使用情况和共识相关信息。交易进入区块后，节点会执行这些交易并更新全局状态

\-Consensus

Consensus 让这些节点在没有中心数据库的情况下，对区块顺序和状态变化形成一致看法

\-PoS

PoS 用质押和惩罚机制组织验证者，替代 PoW 挖矿来维护网络安全

网络安全不是“免费”的，它来自经济质押、客户端实现和节点参与

\-Testnet

测试网用于在接近真实链的环境里测试合约、前端和交易流程

Testnet 的资产没有真实经济价值

\-L2

Layer 2 通常把大量交易放到主网之外执行，再把结果或证明提交回主网

费用更低、确认更快

\-Rollup

是主流 L2 扩展路线

常见 rollup 类型包括 optimistic rollup 和 zero-knowledge rollup
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->







观看回放 Web3运行原理

助记词-私钥-公钥-钱包地址

资产不在钱包里，账本数据都在链上-可以通过区块浏览器读取

转账：12min 安全线 finalized

智能合约可变但不可篡改，装一个新合约进去

DEFI协议 7天时间锁-给反应时间

以太坊升级 - Ethereum Magicians论坛讨论 - 会议 - 文档 - 确定的改动

Web3是三门学科的交叉——密码学，经济学，社会学

**Web3知识图谱**

**密码学** 

\-Hash

\-Public Key

\-Private Key 

用来生成签名，不同于密码，无法重置/找回

私钥是控制权，不能泄露\*\*

\-Signature

签名是授权证据

是对某段具体消息或交易内容的授权证明，由私钥对消息生成对 Agent 来说，签名更要有权限边界，不能让模型随意触发高风险授权

钱包、助记词、硬件钱包、多签和账户抽象，本质上都在解决同一个问题：如何让密钥控制权更安全、更可恢复、更适合真实用户

\-Merkle Tree常见于空投名单、轻客户端、状态证明和可验证数据结构区块链可以把大量状态组织成可验证结构

**钱包（Wallet）**

钱包是用户意图进入链上执行之前的最后一道确认界面

钱包管理的是链上控制权

\-EOA Externally Owned Account

它可以签名消息、发起交易、支付 gas、调用合约

\-Mnemonic 助记词

任何网页、客服、AI Agent、表单或脚本要求你输入助记词，都应该默认视为危险

\-Transaction

要经过钱包确认、签名、广播、打包和执行

\-Gas

\-Explorer 区块浏览器

是用户和开发者查看链上事实的窗口，但它不是链本身

**智能合约（Smart Contract）**

智能合约把规则变成公共基础设施，也把 bug 变成公共风险

\-Solidity

最主流的智能合约开发语言合约状态会写入链上，函数调用可能消耗 gas，错误权限可能直接影响资产安全

理解 storage、msg.sender、modifier、event、external call、revert 和权限控制这些链上特有概念\*count 是链上状态

\*increment() 是会改变状态的写操作

\*event 是外部系统可以索引的日志

\*count() 不需要用户签名

\*increment() 通常需要钱包签名并支付 gas

\-EVM（Ethereum Virtual Machine）

是合约执行环境，运行智能合约的虚拟机

Solidity 代码会被编译成 EVM 字节码，部署到链上后由节点执行

\-ABI（Application Binary Interface）

是应用和合约沟通的接口说明，是 Agent 理解合约能力的重要上下文

\-Event

合约向外部系统留下的可索引日志

\-Upgrade
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->








赶不上直播  
观看回放 _AI 时代，Web3 开发者需要具备的基础知识和架构能力_  
  
Web3其实和Web2在很多方面逻辑都是相通的，Web2的能力在Web3也适用，有很大重合的部分，他们本质上是方向不一样，刚开始在面对Web3纷杂的名词时可能会觉得无从下手，但在搞清楚这些之后，Web2的技术能力也同样可以用到Web3上  
  
在支付链条中 web3 block chain = web2 Bank Institution，且方式不一样，Web3不需要回调  
  
安全问题很重要\*\*否则项目上线=结束，资产归零，注意私钥不能泄漏，要从一开始就培养严格的安全意识  
  
消息——私钥——签名 通过这种方式来验证身份，所以私钥泄露=身份盗用，在交易过程中不认人只认签名  
  
Web3基础知识继续充电中……
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->









学习以太坊的基础基础概念、生态系统  
  
智能合约、dApps、Gas手续费、NFT  
  
以及历史发展和变革，对比理解web2和web3的异同
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->










查看了**AI x Web3 School 2026 开营仪式 的回放**  
  
**学习配置Hermes小助手**  
  
**学习了web3的基础知识，对这个领域有了一个初步的认识**
<!-- DAILY_CHECKIN_2026-05-19_END -->
<!-- Content_END -->
