---
timezone: UTC+8
---

# Adrian Elo

**GitHub ID:** adrianelo0107

**Telegram:** @Adrian_Elo_0107

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->
今天我学习/完成了：

-   阅读 AI x Web3 Bridge 的前三节：Chain-aware Context、Web3 Tool Use、Agent Workflow。
    
-   整理三节之间的关系：Chain-aware Context 提供链上事实，Web3 Tool Use 提供受限工具能力，Agent Workflow 提供可停止、可恢复、可审计的执行流程。
    
-   结合自己的 Hackathon / 产品研究方向，更新了 AI x Web3 Risk Research Agent 的 MVP 思路。
    
-   写了一份实践检查清单，用来约束 Agent 的上下文、工具权限、交易草稿、simulation、human confirmation 和 trace。
    

关键收获：

-   AI x Web3 的 Bridge 不是让模型直接“上链操作”，而是在自然语言意图和链上执行之间建立安全过渡层。
    
-   Agent 必须先看见正确链上事实，再通过受限工具行动，最后在状态机和 trace 约束下推进。
    
-   真正有价值的 Agent 不是“什么都能点”，而是能解释、准备、检查、模拟、记录，并在高风险处停下来。
    

遇到的问题或下一步：

-   下一步选一个测试网 swap 交易，按 Task Graph 拆解完整流程。
    
-   为 Risk Research Agent 写 10 条 regression set，覆盖错误链、未知合约、无限 approve、恶意文档、余额不足、oracle stale、用户拒签等场景。
    
-   把今天的 “低风险 swap 贯穿案例” 整理成 Handbook feedback candidate。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->

# **Web3 基础全章学习笔记**

日期：2026-05-21

来源：

-   [https://aiweb3.school/zh/handbook/web3/cryptography/](https://aiweb3.school/zh/handbook/web3/cryptography/)
    
-   [https://aiweb3.school/zh/handbook/web3/wallet/](https://aiweb3.school/zh/handbook/web3/wallet/)
    
-   [https://aiweb3.school/zh/handbook/web3/smart-contract/](https://aiweb3.school/zh/handbook/web3/smart-contract/)
    
-   [https://aiweb3.school/zh/handbook/web3/dev-stack/](https://aiweb3.school/zh/handbook/web3/dev-stack/)
    
-   [https://aiweb3.school/zh/handbook/web3/network/](https://aiweb3.school/zh/handbook/web3/network/)
    
-   [https://aiweb3.school/zh/handbook/web3/account-abstraction/](https://aiweb3.school/zh/handbook/web3/account-abstraction/)
    
-   [https://aiweb3.school/zh/handbook/web3/defi/](https://aiweb3.school/zh/handbook/web3/defi/)
    
-   [https://aiweb3.school/zh/handbook/web3/oracle/](https://aiweb3.school/zh/handbook/web3/oracle/)
    
-   [https://aiweb3.school/zh/handbook/web3/indexing/](https://aiweb3.school/zh/handbook/web3/indexing/)
    
-   [https://aiweb3.school/zh/handbook/web3/security/](https://aiweb3.school/zh/handbook/web3/security/)
    

## **1\. 总结**

Web3 基础不是一组孤立概念，而是一条从“控制权”到“可验证执行”的系统链路：

-   **密码学** 定义身份、签名、哈希和证明的底层边界。
    
-   **钱包** 是用户意图进入链上执行前的确认入口。
    
-   **智能合约** 把规则、资产和状态放进公开可验证的执行环境。
    
-   **开发栈** 让合约开发、测试、部署、前端调用和链上验证可复现。
    
-   **网络** 决定交易如何传播、打包、确认，以及 L1/L2/测试网的环境差异。
    
-   **账户抽象** 把账户从单一私钥扩展成可编程权限系统。
    
-   **DeFi** 把 token、流动性、借贷、稳定币和价格机制组合成开放金融协议。
    
-   **预言机** 把链外数据带入链上，同时引入新的信任边界。
    
-   **索引** 把原始区块、交易和事件整理成产品与 AI Agent 可用的数据层。
    
-   **安全** 把权限、测试、模拟、监控和应急响应贯穿整个系统。
    

对 AI x Web3 来说，今天最重要的收获是：Agent 不能只“理解 Web3 概念”，它必须尊重 Web3 的执行边界。模型可以解释、检索、生成计划和辅助判断，但私钥、签名、资产转移、合约调用、授权、升级、清算、预言机依赖和高风险交易都必须由工具事实、策略约束、模拟结果和人工确认共同控制。

## **2\. 密码学：链上控制权的根**

密码学是 Web3 账户、地址、签名、所有权和证明的基础。这里不需要先成为密码学研究者，但必须理解几个产品边界：

-   **Hash** 是数据指纹和承诺，用来验证数据是否被改过。交易哈希、区块哈希、合约字节码哈希都属于这类可验证标识。Hash 不是加密，通常不能从哈希反推出原文。
    
-   **Public Key / Address** 可以公开，用来验证签名或定位账户，但地址本身不是“可信身份”。一个地址是否可信，取决于来源、验证信息和上下文。
    
-   **Private Key** 是账户控制权。泄漏私钥或助记词，不是“密码泄漏后改密码”的问题，而是资产和权限可能直接失控。
    
-   **Signature** 是对具体消息或交易内容的授权证明，不应该被产品包装成含糊的“登录确认”。
    
-   **Merkle Tree** 用哈希组织大量数据，让用户用少量 proof 证明某条数据属于某个集合。
    

我需要形成的习惯：看到签名弹窗时，先问它在证明身份、授权登录，还是在授权资产或改变链上状态。任何要求把私钥、助记词、签名原文或钱包控制材料交给网页、脚本、客服、AI 工具的流程，都应该默认视为高风险。

## **3\. 钱包：不是登录按钮，而是确认边界**

钱包管理的不是账号资料，而是链上控制权。Web3 产品里常见的动作需要明确拆开：

-   **连接钱包**：应用读取地址、网络、账户状态，不等于可以动用资产。
    
-   **签名消息**：用户证明自己控制某地址，可能用于登录、订单创建或授权。
    
-   **发送交易**：用户请求改变链上状态，可能涉及转账、approve、合约调用、gas 支付。
    

这三类动作的风险完全不同，UI、文案和确认提示也应该不同。钱包交互的基本要求是：用户应该知道自己在哪条链、调用哪个合约、授权什么资产、费用用什么支付、失败后是否可恢复。

关键概念：

-   **EOA** 是由私钥控制的外部账户，兼容性好但权限粗、恢复难、自动化弱。
    
-   **Mnemonic** 是恢复钱包的高风险秘密，不应被任何应用索要。
    
-   **Transaction** 是正式的链上状态变更请求，要经历钱包确认、签名、广播、打包、执行和确认。
    
-   **Gas** 是链上执行成本，用户需要知道大致费用、失败成本和重试路径。
    
-   **Explorer** 是查看链上事实的重要入口，应检查 status、from/to、method、value、token transfers、logs、gas used。
    

AI Agent 可以帮助解释交易、准备参数和检查风险，但签名和权限不能随意交给模型。更稳妥的设计是：AI 做理解和辅助，钱包做确认和授权，智能账户或策略合约做执行约束。

## **4\. 智能合约：公开可验证的规则系统**

智能合约不是“自动执行的法律合同”，而是部署在链上的程序。它把规则、资产和状态放到公开环境里，也把 bug、权限和升级风险暴露给所有人。

核心理解：

-   合约的价值来自可验证执行，不是代码看起来聪明。
    
-   状态公开可查，不能把链上 storage 当私有数据库。
    
-   调用有成本和顺序，受 gas、区块顺序和外部状态影响。
    
-   权限必须显式，mint、pause、upgrade、withdraw 等敏感动作不能依赖默认信任。
    

知识点：

-   **Solidity** 是 EVM 生态常见合约语言。学习重点不是语法，而是 storage、`msg.sender`、modifier、event、external call、revert、权限控制。
    
-   **EVM** 是合约执行环境，解释了 gas、storage 成本、外部调用风险和多链兼容。
    
-   **ABI** 是应用和合约沟通的接口说明，告诉工具能调用什么，但不保证调用安全。
    
-   **Event** 是合约向外部系统留下的可索引日志，前端、索引器和分析工具常依赖它构建历史记录。
    
-   **Upgrade** 是安全、治理和产品迭代之间的权衡。可升级合约更灵活，但引入管理员权限、治理攻击和信任问题。
    

一个链上调用不是“按钮点击”这么简单。完整链路通常包括：前端读取钱包和网络，按 ABI 编码调用数据，钱包确认签名，交易经 RPC 广播，验证者打包进区块，EVM 执行合约逻辑，event 被索引器读取，前端再更新状态。

AI x Web3 里的边界：模型可以解释 ABI、生成调用参数、解释交易结果、写测试用例；合约必须承担最终规则和约束。

## **5\. 开发栈：把不可逆执行前移到可验证流程**

Web3 开发栈不是收集工具名，而是让合约开发、测试、部署、前端调用和监控变成可重复系统。一个最小链路包括：

1.  写合约。
    
2.  编译合约，得到 bytecode 和 ABI。
    
3.  在本地链或测试网部署。
    
4.  写测试覆盖状态变化和权限边界。
    
5.  前端用地址和 ABI 读合约或发交易。
    
6.  在区块浏览器验证源码、交易和事件。
    

工具分层：

-   **Remix**：适合入门、教学、原型和观察合约调用流程，但不适合长期替代工程化 repo。
    
-   **Hardhat**：适合 JavaScript/TypeScript 项目，把合约开发接到测试、部署脚本、前端和 CI。
    
-   **Foundry**：偏命令行和 Solidity-native 测试，适合高强度合约开发、fuzz testing、fork testing 和快速反馈。
    
-   **OpenZeppelin**：提供 ERC 标准、Ownable、AccessControl、Pausable 等成熟组件，但不能替代业务逻辑审查。
    
-   **viem / wagmi**：解决前端与链交互，重点是钱包连接、网络、合约读写、交易状态和缓存。
    

我需要记住：链上开发不是普通代码生成。AI 可以提升效率，比如解释 ABI、生成部署脚本、补测试、排查交易失败，但 Agent 如果能运行 `forge test`、读取部署配置、调用 `cast` 或生成前端合约调用代码，就必须被 repo workflow、测试、权限和 secret 管理约束。

## **6\. 网络：链上状态的执行环境**

Network 不是背景，而是交易能否被打包、状态能否同步、费用如何产生、确认要多久、L2 和主网如何分工的基础环境。

关键点：

-   **Block** 是交易被批量提交和排序的单位。交易顺序会影响结果，区块 gas limit 限制吞吐，新区块引用前一区块形成历史。
    
-   **Consensus** 让节点在没有中心数据库的情况下，对区块顺序和状态变化达成一致。应用要考虑 confirmation、短暂重组和 RPC 延迟。
    
-   **PoS** 用质押和惩罚机制组织验证者，安全来自经济质押、客户端实现和节点参与。
    
-   **Testnet** 适合验证部署脚本、钱包连接、RPC 配置、合约调用和前端状态处理，但不能替代主网安全审查。
    
-   **L2 / Rollup** 在安全、成本、速度和复杂度之间做权衡。费用更低不代表复杂度消失，桥、提现等待、排序器、跨链状态同步都会影响产品体验。
    

AI Agent 读取或执行链上动作时，必须明确网络上下文：chain id、RPC 来源、区块高度、合约地址、交易哈希、确认数、explorer 链接。主网和测试网、L1 和 L2、不同 chain id 的状态不能由模型猜。

## **7\. 账户抽象：把权限变成可编程规则**

账户抽象试图把账户从“谁有私钥谁控制”扩展成“在什么条件下允许什么动作”。这对 AI x Web3 特别重要，因为 Agent 不应该拿用户主私钥，也不应该拥有无限交易权限。

核心概念：

-   **ERC-4337**：通过 `UserOperation`、Bundler、EntryPoint、Paymaster 等组件实现智能账户交易流程。
    
-   **Smart Account**：由合约控制的账户，可以支持多签、恢复、批量执行、额度限制、方法限制和策略模块。
    
-   **Bundler**：收集 `UserOperation`，模拟验证并提交到 EntryPoint。它是应用的基础设施依赖。
    
-   **Paymaster**：允许第三方赞助 gas 或让用户用非原生资产支付费用，但需要风控和额度限制。
    
-   **Session Key**：给应用或 Agent 的临时权限，可以限制时间、链、合约、方法、额度和次数。
    

账户抽象不是让 AI 更自由，而是把 AI 的自由包在规则里。一个合理的 Agent Session Key 策略应该写清楚允许调用的合约和方法、额度、过期时间、chain id、最大交易次数、必须回到用户钱包确认的动作、撤销方式和审计日志。

## **8\. DeFi：可组合金融，也会放大风险**

DeFi 把资产、交易、借贷、稳定币和流动性协议化。它的难点不是合约能不能运行，而是资产和机制如何相互影响。

关键概念：

-   **Token** 是资产单位。看 token 不能只看名称和图标，还要检查合约地址、decimals、供应量、发行权限、暂停/冻结/增发/升级、特殊转账税或黑名单逻辑。
    
-   **AMM** 用流动性池和公式替代订单簿。需要理解滑点、流动性提供者、价格影响、MEV 和 sandwich risk。
    
-   **Lending** 把抵押、债务、利率、清算写进合约。风险来自抵押品价格、预言机、流动性、参数和依赖资产。
    
-   **Stablecoin** 是计价和结算基础，但稳定来自不同机制，不是天然保证。要看储备、赎回、抵押品、监管、治理和流动性。
    
-   **Liquidity** 决定资产能否以合理成本买入、卖出、借出、清算或退出。没有流动性支撑的价格只是屏幕数字。
    

AI 进入 DeFi，适合先做信息整理和风险辅助：解释交易、总结仓位、监控清算、识别异常价格、生成策略草案。高风险动作包括 swap、借贷、加杠杆、授权、跨链和清算。如果 Agent 要执行，至少需要额度限制、协议白名单、滑点上限、模拟结果、预言机检查、人工确认和交易后审计记录。

## **9\. 预言机：链外数据进入链上的信任边界**

区块链不能天然知道链外世界发生了什么。Oracle 的作用是把价格、天气、比赛结果、储备证明、随机数或计算结果，以合约可用的形式带进链上。

关键理解：

-   预言机不是“真实世界 API”，而是链上合约愿意信任的一套数据提交和验证机制。
    
-   一旦外部数据进入链上，它就会变成协议规则的一部分。
    
-   数据源、更新频率、聚合方式、权限和异常处理都会影响用户资产安全。
    

知识点：

-   **Price Feed** 是常见形式。读取价格时要检查资产对、decimals、更新时间、异常值和当前链上的 feed 地址。
    
-   **Data Feed** 可以包括储备证明、利率、宏观数据、体育结果、灾害事件等。
    
-   **Oracle Risk** 包括数据源操纵、feed 延迟、节点离线、单位错误、低流动性资产价格攻击、stale price、升级权限不透明。
    
-   **AI Oracle** 把模型推理、评分、分类或生成结果提交给链上系统，会涉及模型版本、输入数据、prompt、评估标准、复核和争议处理。
    

我对 AI Oracle 的判断：不能让“模型说什么，合约就执行什么”。更合理的方式是记录输入、来源、模型版本、置信度和输出，给高风险结果设置 human-in-the-loop、挑战期、多人验证或经济惩罚。

## **10\. 索引：从链上事实到产品可用数据**

链上数据公开，不等于好用。Indexing 的作用是把区块、交易、事件和状态整理成产品、分析工具和 AI Agent 能快速查询的结构化数据。

关键理解：

-   链上是事实来源，索引层是可用数据层。
    
-   RPC 适合读取链状态和发送交易，不适合承载所有复杂历史查询。
    
-   产品需要面向问题的数据模型，例如地址仓位、协议 TVL、订单状态、Agent 执行历史，而不是原始区块流。
    
-   索引要能重放，以处理 reorg、bug 修复、合约升级和数据补偿。
    

知识点：

-   **Event Indexing**：监听合约日志，把 `Transfer`、`Deposit`、`VoteCast` 等事件转成查询记录。
    
-   **Subgraph**：声明要监听的合约和事件、事件到实体的 mapping，并通过 GraphQL 暴露查询。
    
-   **RPC**：可用 `eth_call`、`eth_getLogs`、`eth_sendRawTransaction` 等接口，但会遇到 rate limit、节点不同步、archive 数据不可用、多 RPC 不一致等问题。
    
-   **Data Pipeline**：把 RPC、event listener、ABI 解码、数据库、reorg 处理、API、GraphQL、vector store、dashboard 和 Agent context 组合起来。
    

AI Agent 需要上下文，而链上上下文通常来自索引层。好的索引层应该给 Agent 提供结构化、带来源、带时间戳、可回溯的数据。模型负责解释，索引层负责事实。

## **11\. 安全：从设计到执行后的完整流程**

Web3 安全不是上线前找人审一次代码，而是从合约设计、权限、测试、交易模拟、监控、应急暂停到权限撤销的一整套工程流程。

核心原则：

-   链上系统默认暴露在公开对抗环境里，任何可调用路径都要按攻击面看待。
    
-   权限必须最小化，owner、admin、upgrade、pause、withdraw 都要有清楚边界。
    
-   执行前要模拟，尽量提前看到资产变化、合约调用、revert 和异常授权。
    
-   上线后要监控，大额转账、权限变更、合约升级、预言机异常、失败交易、TVL 流出和 Agent 高风险调用都需要观察。
    

知识点：

-   **Reentrancy**：外部调用未完成前被再次调用，防护思路包括 Checks-Effects-Interactions、reentrancy guard、避免状态未更新前调用不可信合约。
    
-   **Access Control**：不要只问有没有 `onlyOwner`，还要问 owner 是谁、是否多签、是否 timelock、角色能否互授、权限变更是否有 event、私钥泄漏最坏结果是什么。
    
-   **Audit**：审计不是安全保证书。要看覆盖 commit、合约范围、已修复问题、接受风险、依赖版本、部署参数和上线代码是否一致。
    
-   **Simulation**：交易发出前的预演，可检查资产变化、revert、gas、授权、链 ID、滑点、余额和方法是否符合预期。
    
-   **Monitoring**：监控只有和响应流程结合才有效。谁收到告警，谁能 pause，谁确认误报，谁恢复系统，都要提前设计。
    

AI 会让安全边界更复杂。Agent 可以解释合约、生成交易、调用工具和执行策略，但也可能读错上下文、被 prompt injection 影响、调用错误工具或生成危险交易。因此 AI x Web3 的安全设计必须拆开：模型输出建议，工具返回事实，policy 限制权限，simulation 预演结果，human check 确认高风险动作，monitoring 记录执行后果。

## **12\. AI x Web3 Research Agent 的产品化启发**

结合前三天 AI 基础笔记，我可以把 Web3 基础接到一个更具体的 Hackathon / 产品研究方向：**只读优先的 AI x Web3 Risk Research Agent**。

MVP 能力：

1.  输入合约地址、交易哈希、协议名称或 DAO 提案链接。
    
2.  Agent 通过索引层、RPC、区块浏览器和文档 RAG 收集证据。
    
3.  输出结构化风险报告：网络、合约、钱包动作、权限、DeFi 暴露、预言机依赖、索引数据来源、安全检查。
    
4.  对所有高风险动作只生成 checklist，不直接执行。
    
5.  如果要进入执行阶段，需要智能账户/session key 策略、simulation 和 human confirmation。
    

需要的 Web3 数据字段：

-   chain id、network、block number、timestamp。
    
-   contract address、ABI、verified source、upgrade status。
    
-   wallet action type：connect / sign message / send transaction。
    
-   transaction hash、status、method、from/to、value、token transfers、logs、gas used。
    
-   event sources、indexer timestamp、reorg handling。
    
-   oracle feed address、decimals、latest update、stale check。
    
-   DeFi token decimals、liquidity、slippage、health factor、liquidation threshold。
    
-   security signals：admin、multisig、timelock、pause、upgrade、audit commit、monitoring events。
    

这类产品的价值不是替用户“自动上链”，而是让用户在签名前知道自己将要做什么、依据是什么、风险在哪里、哪些事实来自工具、哪些只是模型推断。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->


\# Evaluation / Fine-tuning / Inference 学习笔记

日期：2026-05-20

来源：

\- [https://aiweb3.school/zh/handbook/ai/evaluation/](https://aiweb3.school/zh/handbook/ai/evaluation/)

\- [https://aiweb3.school/zh/handbook/ai/fine-tuning/](https://aiweb3.school/zh/handbook/ai/fine-tuning/)

\- [https://aiweb3.school/zh/handbook/ai/inference/](https://aiweb3.school/zh/handbook/ai/inference/)

\## 1. 总结

今天读完 AI 基础部分剩下的三节：Evaluation、Fine-tuning、Inference。它们解决的是 AI 系统进入产品阶段后的三个核心问题：

\- **Evaluation**：怎么判断模型或 Agent 的输出是否真的好、是否稳定、是否安全。

\- **Fine-tuning**：什么时候需要改变模型行为，而不是继续堆 prompt、RAG 或工具。

\- **Inference**：模型真正运行时，如何在质量、成本、延迟、吞吐和安全之间做取舍。

如果把前两天的内容串起来，AI 应用从概念到产品大概是：

1\. 用 **Prompt** 定义任务接口。

2\. 用 **Context / RAG** 提供证据和边界。

3\. 用 **Agent / Tools / MCP** 连接外部能力。

4\. 用 **Frameworks** 管理状态、工作流和追踪。

5\. 用 **Vibe Coding** 快速构建和迭代。

6\. 用 **Evaluation** 判断是否真的有效。

7\. 必要时用 **Fine-tuning** 改变模型稳定行为。

8\. 最后用 **Inference** 控制线上质量、速度和成本。

对 AI x Web3 来说，Evaluation、Fine-tuning、Inference 尤其重要，因为 Web3 场景里经常涉及资产、权限、签名、合约、治理和链上不可逆操作。一个看起来“会说”的 Agent，如果没有评估、上线推理控制和安全边界，很容易从“解释错误”升级为“执行错误”。

\## 2. Evaluation：把感觉变成可复现判断

Evaluation 的核心是：不要只凭感觉判断模型效果。一个 AI 产品需要回答：

\- 它在哪些任务上表现好？

\- 哪些场景会失败？

\- 失败是否可复现？

\- 新 prompt、新模型、新 RAG pipeline、新工具 schema 是否真的让系统变好？

\- 是否引入了新的安全风险？

我理解 Evaluation 至少有几层：

\### 2.1 样本集

评估首先需要样本。样本可以来自真实用户问题、课程任务、历史失败案例、合约分析案例、治理提案、客服对话、代码审查任务等。

好的 eval set 不能只放“简单成功样本”，还要包含：

\- 模糊问题：用户没有提供足够上下文。

\- 冲突信息：不同来源给出不同版本。

\- 过期信息：文档和链上状态不一致。

\- 高风险请求：签名、转账、授权、部署、投票。

\- 恶意输入：prompt injection、伪造工具输出、诱导泄露密钥。

\- 边界案例：未知协议、未支持链、缺失 ABI、异常交易。

\### 2.2 指标

不同任务需要不同指标。不能只用“回答像不像人话”作为标准。

可用指标：

\- **准确性**：事实是否正确，链、地址、金额、合约接口是否匹配。

\- **完整性**：是否覆盖关键风险、限制条件和下一步。

\- **可追溯性**：关键结论是否有来源、链接或工具结果。

\- **一致性**：同类输入是否得到稳定输出。

\- **安全性**：是否拒绝危险请求，是否避免泄露敏感信息。

\- **可执行性**：建议是否能转化为明确行动。

\- **成本/延迟**：线上是否能在可接受时间和成本内完成。

Web3 场景里，我会额外加几个指标：

\- 是否区分“链上事实”“文档描述”“模型推断”。

\- 是否在涉及签名或资产动作时要求人工确认。

\- 是否在证据不足时拒答或要求补充信息。

\- 是否避免直接生成高风险交易执行指令。

\### 2.3 人工评估与自动评估

人工评估适合高风险、开放式、产品判断强的任务；自动评估适合可重复、格式稳定、标准明确的任务。

组合方式：

\- 先用人工标注建立小而可靠的黄金样本。

\- 用自动测试检查格式、字段、引用、拒答策略、敏感词、工具调用顺序。

\- 对开放式答案可以用 LLM-as-judge，但 judge prompt 本身也要评估。

\- 对关键任务保留人工复核，尤其是链上动作、合约部署和资产相关建议。

LLM-as-judge 有用，但不能盲信。它适合做初筛、排序、风格一致性检查，不适合作为唯一安全裁判。

\### 2.4 Regression Eval

每次改 prompt、换模型、改检索策略、加工具、改 framework，都应该跑回归评估。否则很容易出现局部优化：一个 demo 变好了，另一个重要场景变坏了。

我的最小流程：

1\. 收集 20-50 个代表性样本。

2\. 为每个样本写期望输出要点和不可接受行为。

3\. 每次系统改动后跑 eval。

4\. 记录分数变化、失败样本和原因。

  
\### 3.4 Fine-tuning 与 RAG / Agent 的关系

我的理解：

\- RAG 解决“知道什么资料”。

\- Agent 解决“能调用什么工具做什么事”。

\- Fine-tuning 解决“模型稳定地怎么说、怎么组织输出、怎么遵守任务风格”。

所以 fine-tuning 不应该替代 RAG，也不应该替代工具调用。对 AI x Web3 产品，稳妥路线通常是：

1\. 先用 prompt + RAG + tools 做出可评估原型。

2\. 收集真实输入和失败案例。

3\. 用 eval 判断失败类型。

4\. 如果失败主要来自格式、风格、任务习惯，再考虑 fine-tuning。

5\. fine-tune 后继续跑 regression eval。

\## 4. Inference：上线时的质量、成本和速度控制

Inference 是模型真正响应用户请求的过程。它不是“调用一下模型”这么简单，而是线上产品的成本、延迟、稳定性和用户体验核心。

\### 4.1 Decoding 参数

推理时的采样参数会影响输出稳定性。

\- **Temperature**：越高越随机，越低越稳定。风险分析、代码生成、合约解释应偏低；创意 brainstorming 可以更高。

\- **Top-p / Top-k**：控制候选 token 范围。适合调节多样性，但不应该用来掩盖任务定义不清。

\- **Max tokens**：控制输出长度和成本。太短会截断关键风险，太长会拖慢响应并增加噪声。

\- **Stop sequences / structured output**：可以帮助控制格式和结束边界。

AI x Web3 的建议：涉及风险、资产、合约、签名、授权时，推理参数应该更保守，优先稳定和可验证，而不是创造性。

\### 4.2 Latency 与 Throughput

用户体验不只看模型质量，还看等待时间。一个产品研究 Agent 如果每次都要检索、rerank、调用多个工具、再长文本生成，延迟会变高。

可优化点：

\- 缓存稳定资料和检索结果。

\- 把只读检索和工具调用并行化。

\- 对长任务分阶段返回：先给进度，再给最终报告。

\- 对简单任务使用小模型或短链路。

\- 对批量任务使用 batching。

但 Web3 高风险任务不能只为速度牺牲安全。交易模拟、权限检查、人工确认不应该被跳过。

\### 4.3 Cost 控制

成本来自输入 token、输出 token、模型选择、检索、rerank、工具调用、日志和重试。

我的成本策略：

\- 能用确定性代码解决的，不用模型。

\- 能用小模型解决的，不默认用大模型。

\- 能缓存的资料和中间结果要缓存。

\- RAG 只放必要上下文，不把整份文档塞进去。

\- 对高价值任务用强模型，对低风险重复任务用轻量模型。

\- 记录每类任务的平均 token 和失败重试成本。

\### 4.4 Reliability

线上推理需要处理失败：

\- 模型超时。

\- 工具调用失败。

\- 检索无结果。

\- 输出 JSON 格式错误。

\- 上下文过长。

\- 用户请求越权。

\- 结果不确定。

一个成熟系统需要 fallback：

\- 重试一次。

\- 降级到只读摘要。

\- 要求用户补充信息。

\- 返回“无法确认”，而不是编造。

\- 对高风险动作转人工确认。

\### 4.5 Observability

没有日志，就无法评估和改进。推理链路应该记录：

\- 用户任务类型。

\- 使用的模型和参数。

\- 检索到的 sources。

\- 工具调用及返回摘要。

\- 输出长度、延迟、成本。

\- 是否触发拒答、人工确认或错误。

\- 用户反馈和后续修正。

注意：日志不能记录 API key、私钥、助记词、cookie、未公开团队信息、敏感钱包数据。

\## 5. 对 AI x Web3 Research Agent 的落地设计

我可以把今天三节接到昨天的 AI x Web3 Research Agent MVP 上。

\### 5.1 Evaluation 设计

建立一个小型 eval set：

\- 10 个协议文档问答。

\- 10 个 DAO 提案摘要。

\- 10 个合约接口解释。

\- 10 个风险识别任务。

\- 10 个恶意或高风险请求。

每个样本标注：

\- 必须引用哪些来源。

\- 必须指出哪些不确定性。

\- 是否应该拒答。

\- 是否需要人工确认。

\- 输出是否符合固定结构。

\### 5.2 Fine-tuning 预留策略

先不 fine-tune。原因：

\- 当前阶段更需要 RAG、工具和 eval。

\- Web3 事实变化快，不适合靠 fine-tune 记忆。

\- 还没有足够高质量样本。

未来如果收集到足够多的高质量研究报告样本，可以考虑 fine-tune 一个“固定输出风格和结构”的小模型，用于初稿生成，但仍然让 RAG 和工具提供事实。

\### 5.3 Inference 策略

默认策略：

\- 风险分析 temperature 低。

\- 输出固定 JSON 或 Markdown 结构。

\- 检索结果限制在最相关来源。

\- 高风险动作输出 checklist，不输出直接执行步骤。

\- 记录 sources、工具调用、延迟和成本。

\- 失败时降级为“证据不足，需要补充资料”。

\## 6. 我的检查清单

以后做 AI x Web3 产品或 Hackathon 原型时，我会用这张检查清单：

\- \[ \] 是否有 eval set，而不是只靠 demo 感觉？

\- \[ \] 是否包含失败样本、恶意输入、高风险请求？

\- \[ \] 是否区分事实错误、格式错误、工具错误、权限错误？

\- \[ \] 是否先尝试 prompt/RAG/tools，再考虑 fine-tuning？

\- \[ \] Fine-tuning 数据是否经过清洗和版本标注？

\- \[ \] 推理参数是否符合任务风险等级？

\- \[ \] 是否记录成本、延迟、工具调用和用户反馈？

\- \[ \] 日志是否排除了密钥、私钥、cookie、钱包敏感数据？

\- \[ \] 高风险链上动作是否有人工确认和审计记录？

\## 7. Handbook Feedback Candidate

建议 AI 基础部分可以在 Evaluation / Fine-tuning / Inference 三节末尾加入一个统一案例：

\> 把一个 AI x Web3 Research Agent 从原型推进到可评估版本。

这个案例可以展示：

\- 如何从真实问题构建 eval set。

\- 如何判断一个失败应该用 prompt、RAG、tool、fine-tuning 还是产品流程解决。

\- 如何为不同风险等级设置 inference 参数。

\- 如何记录 trace、成本、延迟和人工确认。

这样可以帮助学习者理解：Evaluation、Fine-tuning、Inference 不是模型部署后的细节，而是 AI 产品能不能稳定进入真实用户场景的关键工程层。

\## 8. 今日行动项

\- \[x\] 阅读 Evaluation / Fine-tuning / Inference 三节。

\- \[x\] 完成 AI 基础部分剩余章节笔记。

\- \[x\] 将三节内容接到 AI x Web3 Research Agent 产品思路。

\- \[ \] 设计一个 50 条以内的最小 eval set。

\- \[ \] 从一个具体协议开始写 5 条评估样本。

\- \[ \] 把 Handbook feedback candidate 整理成可提交反馈。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->



# **RAG / Agent / Frameworks / Vibe Coding / MCP 学习笔记**

日期：2026-05-19

来源：

-   [https://aiweb3.school/zh/handbook/ai/rag/](https://aiweb3.school/zh/handbook/ai/rag/)
    
-   [https://aiweb3.school/zh/handbook/ai/agent/](https://aiweb3.school/zh/handbook/ai/agent/)
    
-   [https://aiweb3.school/zh/handbook/ai/frameworks/](https://aiweb3.school/zh/handbook/ai/frameworks/)
    
-   [https://aiweb3.school/zh/handbook/ai/vibe-coding/](https://aiweb3.school/zh/handbook/ai/vibe-coding/)
    
-   [https://aiweb3.school/zh/handbook/ai/mcp/](https://aiweb3.school/zh/handbook/ai/mcp/)
    

## **1\. 总结**

这五节可以串成一条从“知识”到“行动”的 AI 工程链路：

-   **RAG** 负责把外部知识变成可追溯、可引用、可拒答的证据链。
    
-   **Agent** 负责把用户目标拆成多步任务，并在工具、状态、权限和停止条件约束下推进。
    
-   **Frameworks** 负责把模型、工具、检索、状态、评估、追踪和部署组织成可维护系统。
    
-   **Vibe Coding** 负责把人和 AI Coding Agent 的开发反馈循环压短，但不替代工程判断。
    
-   **MCP** 负责把模型与外部资源、工具、prompts 的连接协议化，让工具可描述、可发现、可管理。
    

对 AI x Web3 来说，这条链路的核心不是“让 AI 更自主”，而是让 AI 在证据、权限、审计和人类确认的边界内变得更有用。

## **2\. RAG：证据链，而不是向量库本身**

RAG 的目标不是让模型回答得更长，而是让回答有来源、有版本、有边界。LLM 的训练知识会过期，context window 也不可能塞下全部协议文档、治理论坛、审计报告和 SDK 变更记录，所以需要在回答前先取回相关材料。

我需要记住的关键点：

-   **Chunking**：文档切分要尽量按结构，而不是只按固定字数。协议文档、API 参数、风险提示、版本变更经常跨段落出现，切得太碎会丢限制条件，切得太大又会引入噪声。
    
-   **Vector DB**：向量相似不等于事实正确。向量库里应该保存 metadata，例如来源、版本、chain、更新时间、可信等级、是否废弃。
    
-   **Retriever**：如果问题涉及版本、时间、链、地址、产品或环境，就不能只做纯向量搜索，要结合 metadata filter、关键词检索或混合检索。
    
-   **Rerank**：当候选结果多、相似度接近或来源质量不同，rerank 可以把更相关、更权威、更完整的材料排到前面。
    
-   **Citation**：引用不是装饰，而是用户验证答案的入口。关键判断需要能回到具体文档、段落、commit、治理帖子或链上记录。
    
-   **Refusal**：检索失败时允许拒答。没有证据时硬答，只是把幻觉从模型转移到了检索系统。
    

在 Web3 场景里，RAG 可以用于协议文档问答、合约接口解释、治理提案摘要、审计报告检索、SDK/API Copilot、交易背景解释。但 RAG 结果只说明“资料怎么说”，不能直接推出“用户应该签名”。只要输出可能影响链上动作，就还需要 simulation、policy check 和 human confirmation。

## **3\. Agent：被约束的执行循环**

Agent 不是“模型有了自主权”，而是模型围绕目标持续调用工具、读取状态、调整步骤的执行循环。它的价值是把建议推进到行动，风险也在这里：一旦 Agent 能写系统、提交请求、调用 API 或触发支付，错误就从“答错”变成“做错”。

可用 Agent 的基本组成：

-   **目标**：用户到底要完成什么，不只是闲聊意图。
    
-   **工具**：能搜索、读文件、查数据库、调用 API、跑代码或生成交易草稿。
    
-   **状态**：任务进度、工具返回、错误、预算、确认记录和最终输出必须外置、可查、可恢复。
    
-   **权限**：区分只读、写入、外部副作用、高风险动作。
    
-   **停止条件**：达到目标、预算超限、信息不足、风险越界、用户拒绝，都应该停下来。
    

我对几个知识节点的理解：

-   **Tool Use**：工具让 Agent 从“会回答”变成“能做事”，但工具权限越高，Prompt Injection 和误判后果越严重。每个工具都要有输入 schema、权限范围、副作用说明、日志和人工确认规则。
    
-   **Planning**：计划只是候选路线，不是授权。越接近写入、支付、签名、投票、部署，越需要系统规则拆开检查。
    
-   **State**：不能只把状态塞进聊天历史。生产系统需要回答：Agent 为什么调用这个工具、是否拿到确认、哪一步失败、能否恢复。
    
-   **Reflection**：自我检查可以提升质量，但不能承载安全。模型给自己的错误找理由并不罕见，外部验证更重要。
    
-   **Multi-Agent**：多个 Agent 适合复杂分工，但也会放大上下文传递、责任边界和权限扩散问题。
    

AI x Web3 Agent 的稳妥路径应该是：用户提出目标和约束，Agent 生成计划；系统把步骤拆成只读和候选写入；只读工具可自动执行，写入工具进入 policy/simulation；高风险动作由用户确认；钱包或 smart account 执行；全流程记录日志。

## **4\. Frameworks：系统边界，不是智能本身**

框架的作用不是“让模型更聪明”，而是把模型、工具、状态、检索、评估和部署组织成可维护系统。直接调用模型 API 可以完成简单任务；进入产品后，就会遇到 prompt 版本管理、工具 schema、Agent state、失败重试、用户反馈、线上 tracing 和 eval 等工程问题。

我的判断标准：

-   简单链路保持简单：一次模型调用、一次检索、一次格式化输出，不一定需要复杂框架。
    
-   长流程需要显式状态：多步工具调用、人工确认、失败恢复，应该有可查询 state。
    
-   框架要能退出：如果很难换模型、换向量库、换部署方式，长期成本会高。
    
-   先画清楚输入、状态、工具、输出、评估和失败路径，再决定要不要框架。
    

几个框架/方向的理解：

-   **LangChain**：更像组件库，覆盖模型接入、prompt、retriever、agent、output parser 等。适合快速组合能力，但不应该替代产品边界设计。
    
-   **LangGraph**：偏 workflow 和 state machine。只要任务关心“走到哪一步、失败后从哪里继续、是否需要人工确认”，graph/state machine 就有价值。
    
-   **OpenAI Agents SDK**：组织带工具、handoff、guardrails、tracing 的 Agent 应用。关键仍是定义哪些工具可用、哪些动作需要确认、什么输出算失败。
    
-   **DSPy**：把 prompt / LM pipeline 当成可优化程序。适合有数据集、指标和可重复任务的场景，不适合只靠感觉调 prompt。
    
-   **Learning Agent**：从失败样本、日志、用户反馈、评估结果中改进系统。稳妥流程是记录失败样本，标注原因，加入 eval/regression set，再修改 prompt、retriever、工具或模型配置，通过测试后上线。
    

在 AI x Web3 中，Frameworks 管理 prompt、tools、state、eval 和 trace；Web3 基础设施管理账户、签名、合约、交易和链上状态；产品层定义用户目标、权限边界、确认流程和失败处理。

## **5\. Vibe Coding：压短反馈循环，但不放弃工程判断**

Vibe Coding 不是把需求丢给 AI 等代码出现，而是人和 AI Coding Agent 共同迭代软件。人负责方向、边界和验收；Agent 负责搜索、生成、修改、执行一部分工程动作。

核心原则：

-   **任务要小**：越具体、边界越清楚，Agent 越容易产出可审查结果。
    
-   **上下文要准**：让 Agent 看到正确文件、设计约束、错误输出，比写长篇需求更重要。
    
-   **验证要硬**：测试、类型检查、构建、截图、日志，比“看起来对”可靠。
    
-   **版本控制是边界**：每次改动后至少看 `git diff`、文件列表、测试结果，以及是否包含密钥、日志、构建产物。
    

适用场景包括搭原型、修小 bug、补测试、写脚本、局部重构、解释陌生代码。不适合无边界重写整个项目。

对我当前目标的意义：Hackathon 阶段可以用 Vibe Coding 快速做原型、脚本和研究工具，但合约、签名、权限、支付、迁移脚本不能由 Agent 生成后直接上线。AI 可以写测试、解释 ABI、生成脚本草稿；上线前必须审查、模拟、多方确认。

## **6\. MCP：工具接口标准，不是安全边界本身**

MCP 试图把模型和外部工具、数据源、应用上下文之间的连接标准化。它解决的是“模型如何以可描述、可复用、可管理的方式使用外部能力”，而不是让模型本身更聪明。

我的理解：

-   **Server**：提供 resources、tools、prompts 的一侧。重点是暴露什么资源、哪些工具只读、哪些有副作用、schema 是否清楚、错误如何返回、是否需要授权、日志在哪里。
    
-   **Client**：连接模型和 server 的一侧，例如 IDE、Agent runtime、聊天客户端。它应该让用户知道当前连了哪些 server、模型能调用什么、调用前是否需要确认。
    
-   **Tool Schema**：工具名字、用途、参数、返回值、约束都要清楚。schema 模糊，模型就会自然语言猜参数。
    
-   **Permission**：MCP 让连接更方便，但方便不等于安全。读文档、查 issue、创建 PR、发支付、删文件是不同风险等级。
    

在 AI x Web3 中，MCP 可以作为 Agent 连接链上工具和开发工具的接口层，例如读取区块浏览器、查询合约文档、调用 RPC、生成交易草稿、读取项目 issue。但 MCP 不是钱包安全方案，不能替代账户权限、交易模拟、签名确认、session key 和审计日志。

## **7\. 我可以落地的 Hackathon / 产品研究方向**

可以把这五节组合成一个小型产品原型：**AI x Web3 Research Agent**。

MVP 设计：

1.  **RAG 知识库**：抓取一个协议的官方文档、SDK 文档、治理帖子、审计报告；chunk 按标题/API/风险提示切分；metadata 保存来源、版本、chain、更新时间、可信等级。
    
2.  **只读 Agent**：用户输入“帮我分析这个 DAO 提案/合约接口/项目风险”，Agent 只能读取资料、总结争议、列风险、标记证据不足。
    
3.  **Framework 最小化**：先用直接 API 调用 + 明确 JSON 输出；当出现多步状态、失败重试、trace、人工确认时，再引入 LangGraph 或 Agents SDK。
    
4.  **Vibe Coding 工作流**：每个功能从 issue 开始，Agent 做最小 patch，跑测试，生成 PR summary；人看 diff 和验证记录。
    
5.  **MCP 只读工具层**：先暴露 `search_docs(query)`、`get_doc(path)`、`get_proposal(id)`、`get_contract_metadata(address)` 等只读工具；写入、签名、投票、部署留到权限升级阶段。
    

安全边界：

-   RAG 输出必须带 sources 和 uncertainties。
    
-   Agent 输出的是研究结论和操作草稿，不直接执行链上动作。
    
-   Framework 记录 trace 和 state，便于复盘。
    
-   Vibe Coding 产出必须进入 git diff/test/review。
    
-   MCP 工具默认只读，写入工具必须单独授权、确认、审计。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->




# **LLM / Prompt / Context 学习笔记**

日期：2026-05-18  
来源：

-   [https://aiweb3.school/zh/handbook/ai/llm/](https://aiweb3.school/zh/handbook/ai/llm/)
    
-   [https://aiweb3.school/zh/handbook/ai/prompt/](https://aiweb3.school/zh/handbook/ai/prompt/)
    
-   [https://aiweb3.school/zh/handbook/ai/context/](https://aiweb3.school/zh/handbook/ai/context/)
    

## **1\. 总结**

这三节共同回答的是同一个问题：如何把 AI 当成可协作、可约束、可验证的系统组件，而不是把它当成一个“什么都知道”的黑箱。

-   **LLM** 是概率生成和推理层，擅长语言、结构化表达、模式迁移和工具协作，但不自带真实世界状态。
    
-   **Prompt** 是任务接口和行为约束层，能提高输出质量，但不是安全边界。
    
-   **Context** 是信息供给和状态管理层，决定模型“此刻能看见什么、应该依据什么、不能误用什么”。
    

对 AI x Web3 来说，这三者的组合尤其重要：Web3 场景里存在钱包、签名、资产、权限、链上记录和不可逆操作，因此 AI 输出不能只看起来合理，还必须被限定范围、保留证据、接受人类确认，并尽可能通过链上或工具结果验证。

## **2\. LLM：能力边界**

LLM 可以理解为一个根据上下文生成高概率后续内容的模型。它能做总结、解释、代码生成、推理草稿、任务拆解、格式转换，也能作为 Agent 工作流里的“决策与语言层”。

我需要记住的不是“LLM 很聪明”，而是：

1.  LLM 没有内置事实数据库。它的回答必须依赖训练中学到的模式、当前上下文、外部工具或检索结果。
    
2.  LLM 会把不完整的信息补成顺畅叙述，因此需要证据约束。
    
3.  LLM 输出不是执行结果。尤其在 Web3 里，生成“交易建议”与真正发起交易之间必须有权限、模拟、确认和审计。
    
4.  LLM 更适合作为协作层，而不是最终仲裁层。
    

### **对 Web3 的含义**

-   让 LLM 解释钱包、交易、合约、治理提案和风险是合理的。
    
-   让 LLM 直接决定是否签名、转账、授权或部署合约是不安全的。
    
-   AI Agent 进入 Web3 工作流时，必须把“模型建议”和“链上执行”分开。
    

## **3\. Prompt：任务接口，不是安全边界**

Prompt 是给模型的任务说明、角色设定、输入材料、约束和输出格式。好的 Prompt 能减少歧义，提高输出稳定性。

一个可执行的 Prompt 通常包括：

-   目标：要解决什么问题。
    
-   背景：用户是谁、场景是什么、已有材料是什么。
    
-   约束：不能做什么、必须检查什么。
    
-   输出格式：表格、JSON、步骤、摘要、代码、审查意见等。
    
-   评判标准：什么样的答案算好。
    

但 Prompt 的边界也很清楚：它是软约束。模型可能忽略、误解或被输入内容影响。因此 Prompt 不能替代权限系统、交易确认、合约限制、后端校验和审计日志。

### **我的 Prompt 模板**

```
你是一个 AI x Web3 产品研究助理。

目标：
请分析下面的项目/协议/任务，并输出可执行建议。

背景：
- 用户：
- 场景：
- Web3 操作是否涉及资产、权限、签名或链上记录：

输入材料：
<粘贴材料或链接摘要>

约束：
- 不要编造链上事实。
- 不要建议用户直接签名或授权高风险交易。
- 如果信息不足，列出需要补充的数据。
- 区分“模型推测”“资料证据”“需要链上验证”的内容。

输出格式：
1. 一句话结论
2. 关键证据
3. 风险点
4. 下一步验证
5. 是否需要人类确认
```

## **4\. Context：信息治理**

Context 不是简单地把更多内容塞给模型，而是决定模型在当前任务中应该使用哪些信息。上下文越长，越容易混入过期、无关或互相冲突的信息。

Context 管理的核心问题：

-   当前任务真正需要哪些事实？
    
-   哪些信息是用户提供的，哪些来自工具，哪些只是模型推测？
    
-   哪些内容已经过期？
    
-   哪些信息是敏感信息，不能进入公开仓库或打卡笔记？
    
-   哪些状态需要持久化，哪些只适合本轮对话使用？
    

### **对我当前学习仓库的含义**

我需要把不同类型的上下文放在不同位置：

-   `daily/`：每日学习事实、打卡草稿和提交状态。
    
-   `notes/`：稳定学习笔记。
    
-   `handbook-feedback/`：对 Handbook 的具体反馈。
    
-   `hackathon/`：项目假设、用户问题、Demo 路线。
    
-   `.local/`：API key、微信 recipient、任何不该公开的本地配置。
    

这能避免把敏感信息、临时上下文和长期学习资产混在一起。

## **5\. 三者之间的关系**

| 层 | 作用 | 风险 | 我的处理方式 |
| --- | --- | --- | --- |
| LLM | 生成、总结、推理、协作 | 幻觉、过度自信、缺少真实状态 | 用工具和证据校验 |
| Prompt | 任务说明和输出约束 | 软约束，不可靠安全边界 | 写清目标、约束、格式和验证要求 |
| Context | 给模型可用信息 | 过期、污染、敏感信息泄漏 | 分层存储，最小必要上下文 |

简单说：LLM 负责“想和写”，Prompt 负责“让它按任务做”，Context 负责“让它基于正确材料做”。

## **6\. AI x Web3 实践原则**

1.  模型输出必须和链上事实分开标注。
    
2.  涉及钱包、资产、签名、授权的步骤必须有人类确认。
    
3.  Agent 可以建议操作，但不应绕过权限系统执行高风险动作。
    
4.  Prompt 中要明确要求“不编造交易、余额、地址、合约状态”。
    
5.  Context 中不能放私钥、助记词、API key、cookie 或未公开团队信息。
    
6.  对每次关键操作保留日志、链接、交易哈希或截图证据。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
