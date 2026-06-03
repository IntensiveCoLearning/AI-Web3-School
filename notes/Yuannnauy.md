---
timezone: UTC+8
---

# yuannnn

**GitHub ID:** Yuannnauy

**Telegram:** @Yuan_022

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->
### **第一性原理**

-   普通后端 vs 合约：
    
    -   普通后端：权限隔离、网络隔离、人工回滚、数据库修复
        
    -   合约：代码公开、状态公开、资金公开、攻击者可反复模拟抢跑
        
-   三条铁律：
    
    1.  **权限最小化**：owner/admin/upgrade/pause/withdraw 边界清楚
        
    2.  **执行前模拟**：交易能不能成功、改什么资产、调哪些合约，提前看见
        
    3.  **上线后监控**：异常转账、参数变更、失败交易、价格波动持续观察
        

### **Reentrancy（重入攻击）**

-   合约在外部调用完成前被再次调用，状态被重复利用
    
-   经典模式：**先转账/外部调用，后更新内部余额** → 恶意合约在回调中再次进入，余额归零前重复提款
    
-   防护：
    
    -   **Checks-Effects-Interactions**：先检查 → 再更新状态 → 最后外部调用
        
    -   高风险函数用 reentrancy guard
        
    -   不在状态未更新前调用不可信合约
        
    -   测试多合约交互，不只测单个函数
        

### **Access Control（权限控制）**

-   决定谁能执行敏感动作（mint、burn、pause、upgrade、withdraw、setOracle、setFee、setRouter、changeOwner）
    
-   任何一个权限过宽 → 协议规则可能被管理员或攻击者改写
    
-   检查权限时不止问"有没有 onlyOwner"，要问：
    
    -   owner 是 EOA、多签还是治理合约？
        
    -   是否有 timelock？
        
    -   角色能否相互授予？
        
    -   权限变更是否发出 event？
        
    -   紧急暂停和恢复由谁控制？
        
    -   私钥泄漏时最坏结果是什么？
        

### **Audit（审计）**

-   审计是外部安全审查，不是安全保证书
    
-   审计可发现问题，但不能保证协议永远安全
    
-   审计范围、代码版本、依赖版本、部署参数、升级权限、上线后改动 → 都影响结论
    
-   读 audit report 至少看：
    
    -   覆盖了哪些 commit 和合约
        
    -   哪些问题已修复，哪些被项目方接受风险
        
    -   是否覆盖经济机制和外部依赖
        
    -   是否包含测试建议和部署注意事项
        
    -   上线代码是否和审计代码一致
        

### **Simulation（交易模拟）**

-   交易发出前的预演：调用哪个合约、转出哪些 token、会得到什么、gas 多少、是否 revert、是否触发授权变化
    
-   不能替代安全审计（真实链状态可能在交易打包前变化），但能挡住明显错误：
    
    -   链 ID 错
        
    -   合约地址错
        
    -   授权额度异常
        
    -   滑点过大
        
    -   余额不足
        
    -   调用方法不符合预期
        

### **Monitoring（监控）**

-   上线后的安全感知层，发现异常触发响应
    
-   链上监控关注点：
    
    -   大额转账或提款
        
    -   管理员权限变更
        
    -   合约升级
        
    -   预言机价格异常
        
    -   大量失败交易
        
    -   TVL 快速流出
        
    -   未预期的 event
        
    -   Agent 连续触发高风险工具
        
-   真正有效的是 **监控 + 响应**：谁收告警、谁能 pause、谁确认误报、恢复流程是什么
    

### **AI × Web3 安全**

-   AI 让安全边界更复杂：Agent 可解释合约、生成交易、调用工具、执行策略，但也可能读错上下文、被 prompt injection 影响、调用错误工具或生成危险交易
    
-   AI x Web3 安全设计原则：
    
    -   模型输出和链上执行分开
        
    -   模型可以建议，工具返回事实
        
    -   policy 限制权限
        
    -   simulation 预演结果
        
    -   human check 确认高风险动作
        
    -   monitoring 记录执行后果
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->

### **What is DeFi? (视频总结 — Whiteboard Crypto)**

DeFi 是以太坊上的去中心化金融服务，不用银行、券商、保险这些中间人。

-   用户自己保管资产（通过钱包），自己控制每一笔操作。
    
-   所有规则写在智能合约里，公开可查、自动执行。
    
-   任何人只要能上网、有钱包，就能使用 DeFi，不需要开户、KYC、等审批。
    

**DeFi 七大核心机制：**

**1\. Stablecoin（稳定币）**

链上的"数字美元"，价格锚定法币（通常是 1 USD）。三种类型：

-   **法币抵押型**：每发 1 个稳定币，背后有 1 美元存在银行。中心化风险（银行可能冻结）。例子：USDC、USDT
    
-   **加密货币抵押型**：用其他加密货币超额抵押来铸造。去中心化，但资本效率低。例子：DAI（抵押 ETH 生成）
    
-   **算法稳定型**：用算法和激励机制维持锚定，没有抵押品。风险最高，容易"脱锚死亡螺旋"。例子：（已崩溃的）UST/Luna
    

**2\. Lending & Borrowing（借贷）**

不用银行，智能合约充当"资金池管理员"。

-   **存款**：把币存入资金池，赚取利息。利率由供需算法自动调整（存的人少、借的人多 → 利率上升）
    
-   **借款**：必须**超额抵押**（借 $100 需要抵押 $150+ 的资产）。不需要信用评分、不需要填表
    
-   **清算**：如果抵押品价值跌破阈值（如借 $100，抵押品跌到 $120 以下），任何第三方都可以触发清算——还掉你的债务，拿走你的抵押品（通常会获得额外折扣奖励）。你的仓位突然没了，不是因为合约针对你，而是因为价格到了清算线
    

**3\. DEX（去中心化交易所）**

用 AMM（自动做市商）替代传统订单簿。

-   **流动性池**：LP（流动性提供者）把两种资产存入池子，交易者直接跟池子交易
    
-   **定价公式**：Uniswap 用 `x × y = k`，池子里两种资产数量乘积永远不变。买走一种 → 这种变少 → 价格变高
    
-   **滑点**：交易越大，实际成交价和预期差距越大
    
-   **无常损失**：LP 存入后，如果两种资产价格比例变了，你拿回来的总价值可能不如单纯持有
    
-   **任何人可当 LP**：不需要做市商牌照，不需要服务器，存币就赚手续费
    

**4\. Insurance（去中心化保险）**

链上保险不是保险公司在卖——是**用户组成的资金池**在承保。

-   有人想给某个协议买保险 → 交保费进池子
    
-   出事了 → 社区投票决定是否赔付
    
-   没出事 → 承保方（存钱进池子的人）分保费
    
-   例子：Nexus Mutual 承保智能合约被黑、稳定币脱锚等风险
    

**5\. Flash Loans（闪电贷）**

DeFi 独有的"无抵押借贷"——但必须在**同一笔交易内**还清。

-   原理：借 → 用 → 还，全部在一个区块内完成。如果最后没还，整笔交易自动回滚（就像什么都没发生）
    
-   用途（合法）：套利（A 池便宜买入，B 池高价卖出，还贷，赚差价）、清算（借闪电贷去清算别人坏账，赚清算奖励）、抵押品置换
    
-   风险：大量闪电贷攻击——黑客用闪电贷操纵价格、绕过治理投票、掏空协议。闪电贷本身是中性工具，攻击是因为协议有漏洞
    

**6\. Margin Trading（杠杆交易）**

用借来的钱放大交易规模。

-   链上杠杆交易用智能合约执行，不需要券商
    
-   抵押品不够 → 自动清算（和借贷类似，但杠杆放大后更敏感）
    
-   衍生品 DEX 如 dYdX 提供永续合约（没有到期日的期货），用资金费率机制让合约价格贴近现货
    

**7\. Oracle（预言机）**

DeFi 的"数据输入管道"——把链下数据（价格、利率、天气、比分等）传到链上。

-   智能合约自己不能上网查东西，必须有人/服务把数据"喂"给它
    
-   核心矛盾：链上合约是确定性的，链下数据是变化的。Oracle 要解决"谁提供数据、数据是否可信、更新是否及时"
    
-   Chainlink 是最大的去中心化预言机网络：多个节点独立抓取数据 → 聚合 → 上链
    
-   Oracle 出问题 = 整个 DeFi 协议跟着出问题（价格错误 → 错误清算 → 用户损失）
    

**CeFi vs DeFi 对比**

|   | CeFi（中心化金融） | DeFi（去中心化金融） |
| --- | --- | --- |
| 托管 | 银行/交易所替你保管资产 | 你自己保管（通过钱包） |
| 规则 | 公司内部决策，不透明 | 智能合约公开，可查可验证 |
| 准入 | KYC、开户、审批、工作时段 | 有钱包就能用，24/7 |
| 效率 | 人工流程，T+2 结算 | 自动执行，即时结算 |
| 风险 | 公司倒闭、冻结账户、内幕交易 | 合约 bug、预言机故障、私钥丢失 |

**DeFi 风险总结**

-   **智能合约风险**：代码有 bug → 钱被锁或被偷。公开可查不代表安全
    
-   **预言机风险**：价格数据错了 → 清算、套利、协议坏账连锁反应
    
-   **可组合性风险**：协议 A 依赖协议 B，B 出问题 → A 也出问题（像多米诺）
    
-   **私钥风险**：DeFi 里你保管自己的资产 → 私钥丢了 = 资产永远找不回来。没有"找回密码"按钮
    

### **Uniswap：AMM 的开创者**

-   核心机制：**恒定乘积公式 x × y = k**
    
    -   x = token A 池子余额，y = token B 池子余额
        
    -   池子里 x 和 y 的乘积永远不变
        
    -   用户用一种币买另一种 → 池子比例变了 → 价格自动调整
        
-   任何人都可以当流动性提供者（LP）：把两种币存进池子，赚手续费
    
-   **滑点**：交易越大，价格越差（因为乘积守恒，池子比例被大幅改变）
    
-   **无常损失**：LP 存币后，如果两种币的价格比例变了，你拿回来的价值可能不如单纯持有
    
-   Uniswap V3 引入了**集中流动性**：LP 可以只在某个价格区间内提供流动性，提高资金效率
    

### **Curve：稳定币交易的优化版**

-   核心机制：**优化稳定币/同类资产互换**（USDC ↔ USDT ↔ DAI 之类）
    
-   用不同的数学曲线（StableSwap），在 1:1 附近价格下**滑点极低**
    
-   适合：稳定币互换、ETH/stETH 等同类型资产互换
    
-   赚手续费 + 可能叠加 CRV 代币奖励
    
-   和 Uniswap 对比：Uniswap 是通用 AMM（任何币对都行），Curve 专门为价格相近的资产优化
    

### **Maverick：动态集中流动性**

-   核心机制：**自动移动流动性位置**，跟随价格变化调整
    
-   在 Uniswap V3 里，LP 需要手动调整流动性区间——价格跑出区间了，你的流动性就闲置了
    
-   Maverick 的 AMM 让 LP 可以选择自动跟随策略：价格涨了流动性就往上移，价格跌了就往下移
    
-   适合：LP 不想天天盯着价格调仓位的场景
    

### **三种 AMM 对比**

|   | Uniswap | Curve | Maverick |
| --- | --- | --- | --- |
| 最擅长 | 任意币对交易 | 稳定币/同类互换 | 动态跟随价格 |
| 公式 | x × y = k | StableSwap 曲线 | 集中 + 动态区间 |
| 滑点 | 交易量越大越高 | 1:1 附近极低 | 区间内低 |
| LP 管理 | V3 需手动调区间 | 存入即可 | 自动跟随 |

### **跟之前学的连接**

-   **DeFi 协议**（Day 8）的 AMM 部分讲到滑点/无常损失/流动性提供者，今天三个协议是具体落地
    
-   **智能合约**（Day 6）：Uniswap/Curve/Maverick 都是部署在链上的合约，规则公开可查
    
-   **Oracle**（Day 9）：这些 DEX 本身就是重要的价格来源
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->


### **racle：链上合约愿意信任的一套数据提交和验证机制。**

-   第一性原理：清楚数据源和数据处理、更新源；数据要及时更新；异常要有保护。
    
-   price feed: DeFi 协议会用价格 feed 计算抵押率、清算线、swap 限制、借款额度和资产净值。
    
-   data feed: 只包括价格，也可以包括储备证明、利率、宏观数据、体育结果或其他链外信息。
    
-   oracle risk: 链外数据进入链上执行时引入的系统性风险。
    
-   ai oracle: 把模型推理、评分、分类或生成结果提交给链上系统的设想和实践方向。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->



### **Account Abstraction：把账户控制权从单一私钥扩展成可编程规则。**

-   第一性原理：用户可以定制验证逻辑如多签、Passkey、社交恢复或模块规则；可以定制gas由什么（用户、应用、paymaster 或其他资产）承担；权限可以最小化：session key 可以只允许特定合约、额度、时间和方法。
    
-   ERC-4337：一种账户抽象标准。流程为：
    
    -   用户或应用生成 UserOperation。
        
    -   智能账户验证签名、nonce、余额或策略。
        
    -   Bundler 打包并提交操作。
        
    -   EntryPoint 调用账户执行目标动作。
        
    -   Paymaster 可选择赞助 gas。
        
-   smart account：由合约控制的账户，可以把权限、恢复、批量执行和策略写进账户逻辑。可以规定验证逻辑（多签，可恢复等），可以规定权限（小额交易自动通过，交易批量执行等）。风险是合约本身的bug，模块的权限等。
    
-   bundler：收集UserOperation，模拟验证并提交到 EntryPoint。需要判断操作是否有效、是否能支付 gas、是否会在执行中失败。
    
-   paymaster：允许第三方为用户操作支付 gas，或者让用户用非原生资产承担费用。注意：需要风控。
    
-   session key：给应用或 Agent 的临时权限:只在某段时间有效，只能调用某个合约，只能使用某些方法，只能花费某个额度，只能在特定链上执行。这样保证agent执行的操作是低风险的。
    

### **DeFi: 去中心化金融：把金融规则变成可组合、可验证、也可被攻击的链上协议。**

-   第一性原理：把余额、抵押、债务、流动性、交易和清算放进合约系统。资产的状态等都会影响协议行为；流动性决定可执行性，由于可组合，一个协议出问题会影响依赖它的多个协议。
    
-   token：DeFi的资产单位。
    
    -   看 token 时不要只看名称和图标，至少检查：
        
        -   合约地址是否正确。
            
        -   decimals 是多少。
            
        -   总供应量和发行权限。
            
        -   是否可暂停、冻结、增发或升级。
            
        -   是否有特殊转账税或黑名单逻辑。
            
-   AMM：用流动性池和定价公式替代传统订单簿，让用户可以直接和合约交易。
    
    -   举例：Uniswap：用户把两种资产存入池子，交易者用一种资产换另一种资产，价格由池子状态和公式决定。流动性越深，同样规模交易的价格冲击通常越小。
        
    -   滑点：预期价格和实际成交价格的差距。
        
    -   流动性提供者：向池子提供资产，赚取手续费，也承担无常损失。
        
    -   价格影响：大额交易会改变池子比例，导致成交价格变差。
        
    -   MEV 风险：交易排序可能被利用，例如 sandwich attack。
        
-   lending：存款、借款、抵押率、利率和清算规则写进合约。款能否维持，取决于抵押品价值、债务价值、清算阈值和预言机价格。
    
-   stablecoin：稳定币是 DeFi 里的计价和结算基础，但“稳定”来自不同机制，不是天然保证。
    
-   liquidity：流动性决定资产能不能以合理价格买入、卖出、借出、清算或退出。个 token 标价 1 美元，不代表你能以 1 美元卖出大量仓位。
    

## **Connection: Agent Memory (Day 7 lecture) × Account Abstraction (today)**

|   | Agent Memory | Account Abstraction |
| --- | --- | --- |
| Question | What does the Agent remember? | What is the Agent allowed to do? |
| Problem | Context loss across sessions | EOA = all-or-nothing permissions |
| Solution | Recall / Revise / Memory pipeline | Smart Account / Session Key / Policy |
| Risk | Stale memory, hidden assumptions | Over-permissioned Agent, no revocation |
| Together | Agent remembers YOU | Agent acts safely FOR you |

-   **\* AA × DeFi 连接**：DeFi 协议里大量使用了 Smart Account（如 DeFi Saver 用 AA 做自动化清算保护）。Session Key 可以用来限制 Agent 在 DeFi 里的操作范围：比如「只允许调 Uniswap 的 swap，单笔不超过 0.01 ETH，每小时最多 1 次」——把自动化交易装进可撤销的安全边界。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->




### **Long-term Memory for AI Agents：如何让 Agent 拥有持续上下文与长期一致性**

-   价值：用户不需要一次次setup agent执行链路越长 记忆消耗越高
    
-   memory的生命周期管理：记忆的权重高低，记忆的冲突，修改，记忆的整合
    
-   技术栈：
    
    -   recall：只有解决了记忆召回问题，用户才能感受到agent记住了该用户。
        
    -   revise：agent要对记忆有更新。
        
    -   memory：最高层级
        
    -   解锁增强生成：数据处理管线
        
    -   向量模型：把自然语言表征成数学函数，存储到向量数据库
        
    -   agent memory分类：
        
        -   working memory & long time memory: 是否持久化
            
        -   语义记忆 & 事件/情景记忆 & 程序记忆：记住陈述中的事实 & memory记得用户在什么时候告诉了agent在什么时间干的事情 & 记住了agent的技能，怎么做，workflow等
            
-   上下文工程：更大的上下文窗口意味着模型能看到更多的结果和信息，memory决定着agent的能力调用和状态是否回到上下文窗口中
    
    -   memory当前生态：mem0， letta, everOS。
        
-   memory不是数据库，是三个学科的交叉:数据库，agent强化学习，上下文工程
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->





### **Wallet：用户意图进入链上执行之前的最后一道确认界面。**

钱包交互包括连接钱包，签名消息，发送交易。

-   第一性原理：钱包控制权来自私钥，应用连接不是授权资产。不是拥有用户账户。签名的目的用户必须知道，同一个地址在不同链上可能状态不同。
    
-   EOA：EOA（Externally Owned Account）是由私钥控制的账户。可以签名消息、发起交易、支付 gas、调用合约。
    
-   Mnemonic：助记词，用来恢复钱包的私钥。助记词不应随意泄露。
    
-   transaction：对链上状态的正式请求，包括转账，调用合约等。包含交易内容、链、合约地址、gas 和可能的资产变化。
    
-   gas: 进行交易时需要支付的费用，用来排队，支持网络执行和存储资源。**\* Gas 影响三件事：交易能不能进区块、进多快、失败后是否还消耗费用（会扣的，因为节点仍然执行了计算）。**
    
-   explorer：浏览器，用于查看链上的信息：址、交易、合约、事件、token 转移和执行状态。
    
    -   看一笔交易时，至少检查：
        
        -   Status：成功还是失败。
            
        -   From / To：谁发起，调用了哪个地址。
            
        -   Method：调用了哪个合约方法。
            
        -   Value：是否直接转了原生资产。
            
        -   Token Transfers：是否发生 token 转移。
            
        -   Logs：合约发出了哪些 event。
            
        -   Gas Used：实际消耗了多少 gas。
            
-   ai web3中：AI做理解和辅助，钱包负责确认和授权，策略合约或智能账户负责执行约束。
    

### **Smart Contract：把规则变成公共基础设施，也把 bug 变成公共风险。**

-   第一性原理：公开，任何人可检查规则、调用接口、验证状态变化。但调用有成本和顺序（gas），权限必须显式。
    
-   solidity：一种合约语言，合约状态会写入链上，函数调用可能消耗 gas，错误权限可能直接影响资产安全。
    
-   EVM：合约执行环境，合约语言会被编译成evm字节码，由链上的节点执行。
    
-   ABI：应用和合约的接口说明。前端 SDK、脚本、区块浏览器和 AI 工具都可以通过 ABI 理解如何编码调用数据、解码返回结果。
    
-   event：合约向外部系统留下的可索引日志。合让外部系统追踪发生过什么，例如转账、订单创建、参数更新、权限变更。
    
-   upgrade: 合约升级：有些合约部署后不可升级，有些通过 proxy、治理或多签保留升级能力。不可升级更接近”规则固定”，但 bug 修复困难；可升级更灵活，但也引入管理员权限、治理攻击和用户信任问题。
    
-   **\* 一个调用全链路（用户点投票按钮为例）**：
    
    1.  前端读取钱包地址和当前网络
        
    2.  前端根据 ABI 编码 `vote(proposalId)` 调用数据
        
    3.  钱包展示交易信息，让用户确认签名
        
    4.  交易被广播到 RPC 节点
        
    5.  验证者把交易打包进区块
        
    6.  EVM 执行合约逻辑：成功则更新状态 + 发 event，失败则 revert
        
    7.  前端监听交易回执，更新页面状态
        
    8.  索引器读取 event，更新历史记录或看板
        
    
    -   **\* 这也是为什么智能合约开发不能只看 Solidity——要同时理解钱包、RPC、区块浏览器、前端 SDK、event 和索引层。**
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->






### **开放代理经济：从 ERC-8004 / ERC-8183 到构建者之路**

-   Ethereum（以太坊） **gemini回答版：** 是一台去中心化的“世界计算机”。
    
    -   用一个最直观的对比来理解它： 比特币 (Bitcoin)： 就像是一个“去中心化的账本”。它功能很单一，只做一件事——记录资金的转账（类似一个只能记账的计算器）。 以太坊 (Ethereum)： 就像是一部“去中心化的智能手机”。它不仅能记账，最厉害的是允许全世界的程序员在它的网络上安装和运行各种应用程序。
        
    -   以太坊的核心基石
        
        -   智能合约 (Smart Contracts) 这是以太坊的灵魂。你可以把它理解为一台“绝对不会违约的自动售货机”。程序员把交易规则写成一段代码存入以太坊（比如：如果航班延误两小时，自动向该地址赔付 500 元）。一旦条件触发，代码就会自动、强制执行。没有任何中间人（比如银行、保险公司或平台老板）能够拦截、篡改或反悔。这正是实现 Web3 “去信任化”的关键。
            
        -   去中心化应用 (DApps) 既然以太坊是智能手机，上面跑的程序就叫 DApps。现在的去中心化金融（DeFi，比如不用银行就能完成的抵押借贷）、NFT（数字艺术品产权）、甚至某些去中心化游戏，绝大多数都是直接搭建在以太坊网络上的。
            
        -   以太币 (ETH / Ether) 如果你想让以太坊这台“世界计算机”帮你运行智能合约、处理交易或存储数据，你不能白嫖全球矿工/验证者的算力，必须支付一笔“燃料费”（术语叫 Gas Fee）。用来支付这种费用的专属货币，就是以太币（ETH）。所以，ETH 既是一种资产，更是维持整个网络运转的“汽油”。
            
        -   Ethereum 不仅仅是一种加密货币，它真正伟大的地方在于提供了一个任何人都可以使用、但没有任何人可以独占或关闭的公开代码执行平台。它把区块链的用途从单纯的“货币”扩展到了“程序”层面。  
            **分享会讲解：**  
            AI and Etheruem:  
            Because AI agents are different from human, there are many things that human can do but agents cannot, they cannot use human infrastructure,
            
    
    ![image](https://private-user-images.githubusercontent.com/253259717/597142555-f4fc6015-0ee3-42f3-86e2-c56c204d41ab.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzk1NDkyMjQsIm5iZiI6MTc3OTU0ODkyNCwicGF0aCI6Ii8yNTMyNTk3MTcvNTk3MTQyNTU1LWY0ZmM2MDE1LTBlZTMtNDJmMy04NmUyLWM1NmMyMDRkNDFhYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyM1QxNTA4NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lMDhhMTEwMmU2YmU5ODIxZGUzOTg3YzkxOGQ5ZTg1YWUyOGFmOTJhYWIxOGQxMjNkM2I4N2ZhOGYyMDVmMTJmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.dp4Gle_Js-sRmfCW7KO5Pfb_bXJrQfIYVvjvxcPZ3ws)
    
    so we need infrastructure for agents， this raise some questions:
    
    ![image](https://private-user-images.githubusercontent.com/253259717/597141901-99dbe4e3-5db1-483b-b1a3-64a8832e8ac5.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzk1NDkyMjQsIm5iZiI6MTc3OTU0ODkyNCwicGF0aCI6Ii8yNTMyNTk3MTcvNTk3MTQxOTAxLTk5ZGJlNGUzLTVkYjEtNDgzYi1iMWEzLTY0YTg4MzJlOGFjNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyM1QxNTA4NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04Y2NmOGE0MmNkMzIzMjgzNjQ1NTE0YmZiMGM4MGNhMTBhZWNkYzRjZTU2NGZiMWQxMjk4ZWY1N2JkMjcwZTJjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.k9QTJ4FEOqh4XRXBkMfeuygciPjPB7swlo_Ug5sgjF8)
    -   Ethereum for AI is Ethereum for human.
        
        -   Ethereum:
            
            ![image](https://private-user-images.githubusercontent.com/253259717/597143628-04df48f7-082d-420a-8f18-c5bd214815d6.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzk1NDkyMjQsIm5iZiI6MTc3OTU0ODkyNCwicGF0aCI6Ii8yNTMyNTk3MTcvNTk3MTQzNjI4LTA0ZGY0OGY3LTA4MmQtNDIwYS04ZjE4LWM1YmQyMTQ4MTVkNi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyM1QxNTA4NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYjllN2I1OWIyZjEwYzhhN2E5NGZjM2VhZjA1MTRhYjFhZWI5MzFjNzk3ZDc1MTU0NzgwNTE0NzIxM2Y2MTBiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.mGOFaBi0Onpn0Nd1v8hwTObDQ1fQ_qnty1TY55WL2Q8)
            
            Etheruem's design principles: (CROPs)
            
            ![image](https://private-user-images.githubusercontent.com/253259717/597144475-69959740-d420-4b4c-a7d9-d3e5b2cc04b9.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzk1NDkyMjQsIm5iZiI6MTc3OTU0ODkyNCwicGF0aCI6Ii8yNTMyNTk3MTcvNTk3MTQ0NDc1LTY5OTU5NzQwLWQ0MjAtNGI0Yy1hN2Q5LWQzZTViMmNjMDRiOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyM1QxNTA4NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mNGRhNzM2ZDQ2ZDRiMjMwYWNlOTRjYjVhMDk3OTFlYWJjODQxMzZkYWY3MTBjZDhhZTI5MGYwMGM5NWY0MzRlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.e_x3s2bb4lLM-qRYBxLVwyyMUGcRr-JHiCxgV0yKko8)
            -   cencorship resistance: no single actor being able to block valid transactions or valid activity on the network. eg: smart contract
                
            -   open source and free: actual blockchain infrastructure and the code is open and free, anyone can copy and edit it.
                
            -   privacy: can prove sth is true without revealing underlying data.
                
            -   security: actually having the code and the blockchain do what it says to do, continue to do no matter what.
                
        -   why Ethereum's design fits AI agents?
            
            ![image](https://private-user-images.githubusercontent.com/253259717/597147371-f1b9cf5a-2c11-4a61-ab73-8c406cc0bd46.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzk1NDkyMjQsIm5iZiI6MTc3OTU0ODkyNCwicGF0aCI6Ii8yNTMyNTk3MTcvNTk3MTQ3MzcxLWYxYjljZjVhLTJjMTEtNGE2MS1hYjczLThjNDA2Y2MwYmQ0Ni5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyM1QxNTA4NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mNGU4OTc1ZWU1NGI0ZThhMGJmNTdmNTkxYjQwZjdhNjQ2YTU2ODYwZTY4YTNmMzg1NmJhZTc5N2U2ZGRhZDM0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.lkYP4w4CjP5ML4V21uDq8Tg0R6cOqes0YM1H0DNYu6k)
        -   EIP 8004: to set a standard that gives AI agents verifiable identity.
            
            ![image](https://private-user-images.githubusercontent.com/253259717/597147528-b2e9be1d-8a6e-4199-990f-2611176785d8.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzk1NDkyMjQsIm5iZiI6MTc3OTU0ODkyNCwicGF0aCI6Ii8yNTMyNTk3MTcvNTk3MTQ3NTI4LWIyZTliZTFkLThhNmUtNDE5OS05OTBmLTI2MTExNzY3ODVkOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyM1QxNTA4NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zYzE1M2QzY2Q4MmFmOTFhYWY5MzJjYmE3MzIyZDc4NTQ4MTc4ZWZhMjA4MTc0NzllZWRiMTk2OWNlZGFiZGE5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.ZQxLNSbqtH5SZAzLB8UJ6rgVoDRQ4vyr_cNMjQ50tCk)
            
            three parts: verify, registry, reputation
            
        -   x402: machine to machine payments
            
            ![image](https://private-user-images.githubusercontent.com/253259717/597148814-e4372b61-8518-4cdc-afc5-f3a5ea0f7b3e.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzk1NDkyMjQsIm5iZiI6MTc3OTU0ODkyNCwicGF0aCI6Ii8yNTMyNTk3MTcvNTk3MTQ4ODE0LWU0MzcyYjYxLTg1MTgtNGNkYy1hZmM1LWYzYTVlYTBmN2IzZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyM1QxNTA4NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mY2EzNjQ1YWRhZGNiNGZkZWUwOTk2ZjYzZjdmYzM1YjZkZTQ4MTUwYTNiOTQ0YzhkMGM2ZWExMzAyMjNjOTAyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.3PRFpq0VUQofleHkst1tCGIEEvDb5ZWK1sk2lwJhpm0)
            
            pay with stablecoins, dont need credit card or API keys.
            
            ![image](https://private-user-images.githubusercontent.com/253259717/597149240-b1c11ffa-497d-43da-93a3-7376ef6d6d8e.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzk1NDkyMjQsIm5iZiI6MTc3OTU0ODkyNCwicGF0aCI6Ii8yNTMyNTk3MTcvNTk3MTQ5MjQwLWIxYzExZmZhLTQ5N2QtNDNkYS05M2EzLTczNzZlZjZkNmQ4ZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyM1QxNTA4NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mYzE4ZDA5ODFkZjcyMGNiM2Y3NzJmMTNmM2NhZjk0NGE3ZDVjMDg5MDk3MDg4YTY4NzAzMjNmODZkZjM2NTA1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.LzGpVUaXKfOovT56r-yESlrWb76JBf9AxF3CnTYLGyI)

### **Network：链上应用不是直接写数据库，而是在一个公开、按区块推进、由网络共识维护的状态机上提交请求。**

-   第一性原理：区块链不是存数据，而是由节点公开，可验证的执行交易的每个步骤。因此会造成延迟、费用等。
    
    -   以区块为节奏：状态不是实时更新而是按区块批量推进。
        
    -   共识是信任来源：因为由达成一致的网络规则。
        
    -   网络选择会改变体验：主网、测试网、L2 的费用、速度、安全假设和工具支持都不同。（？不是很懂：\*比如：主网花真钱但安全，测试网免费但不安全，L2 便宜但多了桥接和等待时间。：
        
-   block：交易被批量提交和排序的单位。很多比交易被打包进一个区块，节点执行这些交易。要注意交易有顺序，有gas fee，区块有gas limit, 新区块会引用前区块。
    
    -   gas limit:计算量的最高上限。
        
        1.  针对个人的：交易的 Gas Limit (Transaction Gas Limit) 这是你作为用户，在发起一笔转账或运行智能合约时，需要自己设定的一个上限。 通俗理解： 就像你打车去一个不熟悉的地方，为了防止被司机绕路坑钱，你提前定了个规矩：“这趟车我最多只出 50 块钱的油费（Gas Limit）。如果 50 块钱烧完了还没到目的地，你就立刻停车结束订单。” 核心作用： 保护你的钱包。防止网络拥堵或者某个写得有 Bug 的死循环合约，把你的余额（ETH）无休止地扣光。
            
    
    2.  针对整个网络的：区块的 Gas Limit (Block Gas Limit) —— 你提到的核心 这指的是以太坊网络每十几秒打包产生的一个“区块”里，所有交易加起来能消耗的总计算量上限。 通俗理解： 把区块想象成一辆公交车。这辆车的限制标准不是“座位数”，而是“总载重量”（比如总上限 3000 万 Gas）。 如果都是普通转账（体积小、重量轻），一辆车可能装下 1000 笔。 但如果上来了一个极其复杂的 DeFi 智能合约结算（超级大胖子，一个人就消耗 1500 万 Gas），那这辆车可能装几个乘客就超重满载了，剩下的交易只能在车站排队，等下一个区块。
        
    
    -   为什么区块一定要强制设定这个上限？ 防止网络瘫痪（防 DoS 攻击）： 如果区块的计算量没有上限，黑客只需要花一点钱，发送一个极度庞大或无限死循环的恶意代码，全世界负责记账的节点就会瞬间卡死在计算这行代码上，整个以太坊大动脉就会直接宕机。 维护“去中心化”的基石： 如果区块可以无限大，每天产生的数据量就会极其恐怖。最终会导致只有那些拥有超级计算机和超大服务器的大机构才能跑得动以太坊节点，普通人根本无法参与验证。设定合理的 Gas Limit，就是为了确保普通的设备也能跟上网络的同步速度。
        
    -   为什么新区块会引用前一区块：引用前区块”就是给数据盖上一个前后相连的“数字骑缝章”。 可以把每个区块想象成账本上的一页纸。 当第 1 页写满交易记录后，系统会通过复杂的数学公式，为这整页纸的内容计算出一个独一无二的“数字指纹”（术语叫哈希值/Hash）。 当大家开始写第 2 页时，系统强制要求：第 2 页的第一行，必须抄写上第 1 页的那个“数字指纹”。 以此类推，第 3 页的第一行必须写第 2 页的指纹。这就叫“引用前区块”。 这样做起到了什么绝对关键的作用？ 它的核心作用只有一个：实现极其变态的“防篡改”能力（牵一发而动全身）。 改一个字，指纹全变： 只要第一页里的哪怕一条交易金额被黑客偷偷改了一个数字，根据数学规律，第一页原本的“数字指纹”就会瞬间变成一串完全不同的乱码。 多米诺骨牌效应： 因为第一页的指纹变了，而第二页第一行抄写的还是“旧指纹”，这时候第二页和第一页的接口就“对不上”了。 全网报警： 网络里的所有人瞬间就能发现账本被人动过手脚。黑客如果想掩盖罪行，他不仅要改第一页，还要被迫重新计算第二页、第三页……直到最新的一页。在现实中，这需要耗费极其庞大的算力，根本不可能完成。
        
-   consensus：让节点再没有中心数据库的情况下，对区块的变化形成一致的看法。
    
-   PoS：质押ETH (交钱) 参与区块提议和证明，行为错误会被惩罚。为网络安全付费。
    
-   Testnet：用于模拟测试合约、前端和交易流程。有真实经济价值，但它能帮助你验证部署脚本、钱包连接、RPC 配置、合约调用、区块浏览器验证和前端状态处理。但不能代替主网安全审查。
    
-   L2：大量交易在主网之外执行，再把结果或证明提交回主网。对用户来说，L2 常见优势是费用更低、确认更快；但也多了桥、提现等待、排序器和跨链状态同步等复杂性。
    
-   Rollup: 流 L2 扩展路线，把执行搬到链下或 L2，再把数据和结果提交到 L1。Rollup 降低了单笔交易成本，但没有消除链上系统复杂度。你仍然要处理跨链资产、RPC、浏览器、合约地址、桥接风险和用户确认。
    
-   AI web3：使用agent时必须要知道在哪条网络上，什么chain id， 什么地址等。
    

### **Cryptography：私钥控制资产，签名表达授权，哈希固定数据，Merkle Tree 让大量数据可以被高效验证。**

-   第一性原理：私钥：控制资产；签名：授权动作；哈希：验证数据是否被改
    
-   hash：一种函数，把数据映射成固定长度后输出。哪怕输入只改一个字符，输出也会完全不同，因此链上常用哈希来标识交易、区块、数据承诺和合约字节码，用于验证同一性和完整性。
    
-   public key：用于推导地址（从公钥进一步处理得到的短标识），验证签名是否来自对应私钥，但无法推出私钥。
    
-   private key：账户的控制权，用于生成签名，证明权限。但一旦忘记，很难找回或重置，因此不能泄露。
    
-   signature：由私钥生成，可被公钥和地址检查，是对某一消息或交易的授权证明。
    
-   merkle tree: 把很多数据逐层哈希，最后得到一个 root。只要 root 被可信记录下来，某个用户就可以用 Merkle proof 证明“我的数据在这批数据里”，而不用下载全部数据。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->







### **RAG：让回答有来源、有版本、有边界**

-   第一性原理：要知道检索结果不是事实，要做到回答的东西关键点可在原文追溯，找不到答案要能让模型说不确定，而不是产生幻觉。
    
-   chunking：将文档切分成合理长度，做到语义完整，节省token。 比较稳的做法是按结构切：标题、API endpoint、函数说明、标准小节、FAQ 问答、审计或变更记录。每个 chunk 保留来源 URL、标题路径、更新时间和版本。
    
-   vector DB：存储embedding，按相似度检索相关段落，可以快速找到语义相近的内容。 注：语义相似不一定就正确，可能会有旧版本，或是很像官方的民间产物都语义相似。因此vector DB要存储源、版本、chain、更新时间、可信等级、是否废弃。检索时先过滤，再排序。
    
    -   复习：embedding：模型通过embedding把得到的信息（文本、代码或其他对象）映射成向量，这样就能衡量语义是否接近（距离）。
        
-   retriever：根据用户问题选择的检索方式的组件。如：向量检索、关键词检索、混合检索、图检索，也可以加上 metadata filter。不止要看语义相似度，理想情况是能明白用户问的时间、版本、检索区域等（不是单纯的向量检索）
    
    1.  关键词检索（Keyword Search / Sparse Retrieval） 就像在图书馆系统里搜“番茄”，系统就只把书名、正文里包含“番茄”这两个字的书找出来。如果有一本书通篇写的是“西红柿”，但一个字都没提“番茄”，那它就绝对搜不出来。  
        **在 AI 里**：它是最传统的检索方式，AI 领域常用 BM25 算法（一种基于词频和逆文档频率的打分机制）。  
        **优点**：极其精准。如果搜特定型号（如“iPhone 15 Pro”）、专有名词或特定代码，它能一击必中。  
        **缺点**：不懂人话，无法理解同义词、近义词和背后的语境。
        
    
    2.  向量检索（Vector Search / Dense Retrieval） 搜“番茄的种植方法”，AI 懂意思，不仅能帮你把包含“西红柿”的书找出来，甚至能把“草本植物栽培指南”也找出来。因为它不看字面，看的是意思（语义）。  
        **在 AI 里**：AI（Embedding 模型）会把每一个词、每一句话甚至每一张图片，转化成一串长长的数字（这就叫高维向量，比如一个 1536 维的数组）。  
        在这个由数字构成的虚拟多维空间里，“番茄”和“西红柿”因为意思相近，它们对应的向量距离就会非常非常近。检索时，把你提的问题也变成向量，然后去数据库里找距离最近（比如用余弦相似度 Cosine Similarity 计算）的文档。它属于稠密向量检索，能够跨越字面限制，实现语义理解和概念匹配，是当前 RAG（检索增强生成）系统的基石。
        
    
    3.  混合检索（Hybrid Search） 向量检索虽然聪明，但有时候会“想太多”导致跑偏。比如你搜特定的系统报错代码“ERR\_CONNECTION\_TIMED\_OUT”，向量检索可能会把它理解为“网络连接不好”，然后给你找一堆网络修理指南，偏偏漏掉了这行一模一样的报错解决方案。关键词检索 + 向量检索 = 混合检索。  
        **它是怎么工作的：**  
        你提一个问题，系统同时派两个小兵出去：一个用关键词检索死磕字面，一个用向量检索去捕捉语义。  
        两个小兵各自带回一堆结果，最后通过一个叫 RRF（倒数排名融合） 的算法或者专门的 Rerank（重排模型），把两份名单科学地合并、打分，筛选出最完美的答案。  
        混合检索将关键词检索（稀疏检索）的高精准度与向量检索（稠密检索）的语义泛化能力相结合。通常在两路检索出各自的候选集后，利用倒数排名融合（RRF）或交叉重排模型（Rerank）进行分数归一化和二次排序。它克服了单一检索方式的短板，是目前大模型工业级应用中最常用的方案。
        
    
    4.  图检索（Graph Search / Knowledge Graph Search） 无论是关键词还是向量，它们找资料都是“单点式”的。但如果你问 AI：“乔布斯创立的公司的现任 CEO 的母校是哪所？”传统的向量检索可能会懵掉，因为它需要跨越好几层人物关系。而图检索手里有一张“知识图谱（Knowledge Graph）”，里面全是：【乔布斯】—(创立)—>【苹果公司】—(现任CEO)—>【蒂姆·库克】—(母校)—>【奥本大学】。AI 只要沿着线“顺藤摸瓜”连连看，就能精准找到答案。  
        在 AI 里是怎么用的？  
        它是把数据做成由“节点（实体）”和“边（关系）”组成的网状结构。现在最前沿的技术叫 GraphRAG（图增强检索），把图检索和向量检索结合起来，让 AI 拥有极强的全局推理和关联思考能力。  
        图检索基于知识图谱（Knowledge Graph）或图数据库。它将信息组织为实体（Nodes）和关系（Edges）的拓扑结构。在 AI 应用中，图检索通过图遍历或图神经网络（GNN）在网状多跳（Multi-hop）关联中抽取结构化知识，擅长处理复杂的实体关系推理、全局摘要以及跨领域的复杂关联查询。
        
-   rerank：初步检索后根据候选材料的好坏（完整度、可信度等）进行排序。常用于候选结果很多、相似度接近或混合检索的场景。Rerank 会增加延迟和成本，所以要根据实际判断是否使用。
    
-   citation：让答案的关键结论可以找到来源。**\* Citation 不是装饰，是用户验证答案的入口。每句话应能追溯到：出自哪份文档/链上记录、来源是否官方、文档版本或更新时间、哪些结论只是模型归纳、哪些地方没有足够证据。**
    
-   **\* 在 AI×Web3 中的位置**：RAG 位在 Knowledge Base 和模型之间，帮 Agent 查资料、补上下文、引用证据，但不负责最终执行。具体场景：
    
    -   协议文档问答（用户问"这个函数怎么用" → RAG 从 SDK 文档检索 → 带引用回答）
        
    -   合约接口解释（检索 ABI 和 NatSpec 注释）
        
    -   治理提案和论坛摘要
        
    -   审计报告检索
        
    -   SDK / API Copilot
        
    -   交易解释时补充项目背景
        
    -   **\* 关键原则：当 RAG 结果要影响链上动作时，还需要接 simulation、policy 和 human check。文档说某函数"可以调用"，不等于当前用户"应该签名"。**
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->








### **今日课程：web 3 运行原理**

-   一笔交易怎么走：签名 传播 排队 排序 出块/证明 可查询
    
    -   私钥：类似银行账号的密码，授权各种操作（注：私钥无法更改）
        
        ![image](https://private-user-images.githubusercontent.com/253259717/595360175-3ccf8a18-3c9a-4bc2-a658-88da0e41d9d3.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyNzc3MDUsIm5iZiI6MTc3OTI3NzQwNSwicGF0aCI6Ii8yNTMyNTk3MTcvNTk1MzYwMTc1LTNjY2Y4YTE4LTNjOWEtNGJjMi1hNjU4LTg4ZGEwZTQxZDlkMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyMFQxMTQzMjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05ZTkzNTM0MThmNjVjNmE1ZmI5YjcxZTQ0ZWY3MDQ1ZjMwMmIzNGM0MDUxOWE4MjU3Yzg5MWU2NGM5NWY1MDUzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.2kdMZmegKtTpVnt_68PuyW1qkgrmrVZstjg8kZ5UVjM)
    -   助记词：一对多派生，帮助备份私钥
        
    -   地址：由私钥产生，类似银行账号
        
        ![image](https://private-user-images.githubusercontent.com/253259717/595358908-2df6487a-6808-40a6-a732-7f7261cc5493.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyNzc3MDUsIm5iZiI6MTc3OTI3NzQwNSwicGF0aCI6Ii8yNTMyNTk3MTcvNTk1MzU4OTA4LTJkZjY0ODdhLTY4MDgtNDBhNi1hNzMyLTdmNzI2MWNjNTQ5My5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyMFQxMTQzMjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wNDVkNDhlMjA4NTBhZjkzMDRkZGViMDlmZmJiNDMzZDU2MGU0MjJkYTNkMDYwMzY0YmU3NTYyYTRlNzA3NTRlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.Gnceg8ZBKIrypMApI2i8rbRcfvt73neWb3JDNVAATrI)

资产不在钱包里，而是在网上，区块链里。因此一个银行账号不能跨行管理其他银行的资产，但web3可以，只要有私钥。

-   交易与签名
    
    -   交易：
        
        ![image](https://private-user-images.githubusercontent.com/253259717/595360997-a60c743a-1223-4042-ba03-0fb6af0cdd0f.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyNzc3MDUsIm5iZiI6MTc3OTI3NzQwNSwicGF0aCI6Ii8yNTMyNTk3MTcvNTk1MzYwOTk3LWE2MGM3NDNhLTEyMjMtNDA0Mi1iYTAzLTBmYjZhZjBjZGQwZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyMFQxMTQzMjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00N2JhZTg3NTZlY2Y0ZTIxMzVkMDRiODBjMzhjYWVjYjM5NDQ0MTE2Mzc0Y2Y3Y2JiOTNkOTdmNzdhNjVjMWE4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.0ULo9AfZOrB33qv1-rWcXfOaYXtkswUKdvsOSL5ipxA)![image](https://private-user-images.githubusercontent.com/253259717/595367634-56571f6a-9b29-49de-a16c-1a10d32a9834.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyNzc3MDUsIm5iZiI6MTc3OTI3NzQwNSwicGF0aCI6Ii8yNTMyNTk3MTcvNTk1MzY3NjM0LTU2NTcxZjZhLTliMjktNDlkZS1hMTZjLTFhMTBkMzJhOTgzNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyMFQxMTQzMjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02YjZiZTFlYjU2NjhjZjk5YTJkMjI3MTE3YWQ2NDdmNTg4OWFlMDc1OGZjZDczMGQxMzYxMTZjYmJiNTNiOTQ4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.Ab5NqUn0KN3-ap3-3miCGEaZbD2B9F1q78-qyierWuU)
        
        由私钥生成签名、广播，告知所有人交易执行(调用RPC，许多接收方会接收到请求：1.原始信息 2.生成的地址（谁发的信息） 3.由信息生成的签名；接收方会反推谁签的，验证地址是否相同，确定是私钥拥有人操作的）)
        
        -   gas fee(手续费)：
            
            ![image](https://private-user-images.githubusercontent.com/253259717/595371225-ddf1be7a-dfe7-4503-8f30-5591374d13c0.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyNzc3MDUsIm5iZiI6MTc3OTI3NzQwNSwicGF0aCI6Ii8yNTMyNTk3MTcvNTk1MzcxMjI1LWRkZjFiZTdhLWRmZTctNDUwMy04ZjMwLTU1OTEzNzRkMTNjMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyMFQxMTQzMjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zZDRlOWJkZTJmM2E1N2JmZDI1OGZjNzg2YzYyNTgzZDQyM2YxMGEzNDBjMDkzMzBkYjhmZDUzN2QzYWEyMjdmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.rpVDLtb39L2-IEkT37ap7bZ4T8k9wVFkvhn95d-pH_U)
-   区块链怎么运行
    
    ![image](https://private-user-images.githubusercontent.com/253259717/595373465-407f7ed7-7390-4e78-8fa6-3ea5ded65b35.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyNzc3MDUsIm5iZiI6MTc3OTI3NzQwNSwicGF0aCI6Ii8yNTMyNTk3MTcvNTk1MzczNDY1LTQwN2Y3ZWQ3LTczOTAtNGU3OC04ZmE2LTNlYTVkZWQ2NWIzNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyMFQxMTQzMjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hN2ZiMDViMjFlMjNlMThkZjJlZDUxNTNkMmI5ZDlmODQ4NjczZTJmMWQ3YTFiZDIyYjllYTQ5MzVhYmZkMDhkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.jJ6eznAhnNwA_FKQ5aJ_PUr1mIegPDHAlQ3jviOoOx8)
    -   builder排序：对交易进行排序，钱多，小费多的靠前。
        
    -   validator：鉴证这个块是真实的 没有伪造 \*刚出的块会引用上一个块，刚出容易被攻击，不一定会很稳定，需要大约12min，确认块安全稳定，代表交易被执行。
        
        ![image](https://private-user-images.githubusercontent.com/253259717/595378595-72843ddf-0a31-47f4-a09c-b60ad94153bd.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyNzc3MDUsIm5iZiI6MTc3OTI3NzQwNSwicGF0aCI6Ii8yNTMyNTk3MTcvNTk1Mzc4NTk1LTcyODQzZGRmLTBhMzEtNDdmNC1hMDljLWI2MGFkOTQxNTNiZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyMFQxMTQzMjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05NTU5ZDJkYmRlYjFiMDVlZGY0ZDk2YmE0ZWU4N2JkYTI2Y2YzYzRkMDVlOGNkOWYwMjk3MDNiYThjM2NlZjBjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.IzzEkkZ1QO_ZzfY78eEUzVD0rnOWEu6-TSbNMZ9aZaA)
-   钱包、RPC、节点、网络：如何链接
    
    ![image](https://private-user-images.githubusercontent.com/253259717/595381591-372a4502-f799-498b-a0fa-319623036f6b.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyNzc3MDUsIm5iZiI6MTc3OTI3NzQwNSwicGF0aCI6Ii8yNTMyNTk3MTcvNTk1MzgxNTkxLTM3MmE0NTAyLWY3OTktNDk4Yi1hMGZhLTMxOTYyMzAzNmY2Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyMFQxMTQzMjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mMWI0ZmMwOGUzZWEwYWM2ODAxNzI1MDc2ODk4MmRhMjVlMDJkZDdjNGM4ZTBjOTllYWIxN2ZmZjdiMzNkY2ExJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.VqwlF8cDBk72Qr6Qkk1VglrrBYT405QqJsMTcoASoDE)

![image](https://private-user-images.githubusercontent.com/253259717/595387481-76c3b620-4073-4359-a4bb-de76fa711702.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyNzc3MDUsIm5iZiI6MTc3OTI3NzQwNSwicGF0aCI6Ii8yNTMyNTk3MTcvNTk1Mzg3NDgxLTc2YzNiNjIwLTQwNzMtNDM1OS1hNGJiLWRlNzZmYTcxMTcwMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyMFQxMTQzMjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jMTc2MDMxNDAwZTU5ODIyMmQ1OGIzNGE0ZjhkZmFjOGQwMjdjNjQ1MmM2ZGJhMDdlMWY3ZGVmYzgwNTIxMjFhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.SHS-6fb4altpfWWUYu1_1t-uenfzN-kVlM01wd85ylk)![image](https://private-user-images.githubusercontent.com/253259717/595388427-615218c1-b9b0-4316-ae91-7a1f99b37683.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyNzc3MDUsIm5iZiI6MTc3OTI3NzQwNSwicGF0aCI6Ii8yNTMyNTk3MTcvNTk1Mzg4NDI3LTYxNTIxOGMxLWI5YjAtNDMxNi1hZTkxLTdhMWY5OWIzNzY4My5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyMFQxMTQzMjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yM2IwMDIxMzZkYjhlNTQ3YjBjY2Q0MzQzYTdmNzBjNmJlZGQyNWI0NTA2MzdiZTI0NDRkZjc3MzljNTRiMzcyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.Rd97ylRvTkhtLnJkrSC63t7g8eNYhgv-h5MKoaWrlJ8)

-   **_连接：Web3 讲课 × Context 章节_**_：今天其实学的是同一件事的两面——讲课讲了「交易怎么在链上跑」（签名 → 广播 → 排序 → 出块 → 确认），Context 讲的是「模型做判断前需要看到什么」。如果未来要做一个 AI Agent 帮你判断「这笔交易能不能签」，它需要的 Context 恰好就是交易流程里的每一个环节：chain ID、from、to、value、data、gas、当前区块高度、simulation 结果。Context 章节教的是怎么把这些信息分层喂给模型（哪些是事实层、哪些是外部参考、哪些必须实时查），Web3 讲课教的是这些信息在链上是怎么产生和传播的。_
    

### **Context：模型的上下文**

**第一性原理：为了提高模型提取信息的真实性，要：**

-   可信来源要显式标注：系统状态、用户输入、检索文档、工具结果要分区放置。
    
-   上下文要可刷新：状态、配置、权限、价格、版本和任务进度不能长期缓存后继续使用。
    
-   记忆要可撤销：用户偏好和历史任务可以提升体验，但不能变成隐藏权限或永久身份假设。
    
-   context window：模型一次请求能处理的最大上下文范围，越长的上下文越容易让ai抓不住重点无法精准提取关键有用信息，因此要这样：“在实际产品里，context window 应该配合检索、摘要和结构化数据使用。关键状态直接给，长文档按需取，低可信内容隔离标注。”
    
    结构化数据： 这里就用到JSON 等格式。把散乱的信息变成规范的结构，AI 读起来才不容易抓错重点。
    
    摘要： 如果上下文实在太长，系统会在后台先调动一个小模型，把次要内容总结成几句话，再喂给主模型。
    
    关键状态直接给：有些信息是决定整个对话走向的“绝对前提”。比如当前对话的时间、软件当前处于什么界面、用户的核心操作指令等。这些信息字数不多，但极其重要，所以必须作为最高优先级的系统信息，直接放进窗口里，确保 AI 随时带着这些前提在工作。
    
    长文档按需取：如果面对一本 500 页的说明书，系统会先把它切成几百个小块存起来。当用户提问时，系统先用传统的搜索技术找出最相关的两三块，然后只把这“按需取”出来的部分扔进 Context Window 让 AI 去读。这就是现在非常火的 RAG（检索增强生成）技术。
    
    低可信内容隔离标注：为了防“幻觉”和安全问题。就例如Transformer 擅长组合解释，但没有事实裁决权。如果输入给 AI 的数据里，有一部分是网上的匿名帖子或者不可靠的搜索结果。可以要求在代码层面，用明确的标签把这段内容包起来（比如 这里是网友评论），并告诉 AI：“这部分内容仅供参考，不要盲目相信”。这样能防止 AI 被错误信息带偏。
    
-   context engineering: 设计上下文，尽量让交给模型的文本信息最高效的能由ai处理，规定哪些是可信数据源，哪些是外部信息，上一次结果如何等。
    
-   memory：跨请求保留的信息，可提前设置，方便每次使用，但隐患是可能现在需求与memory冲突，会造成问题。因此”所有涉及身份、权限、资产或外部副作用的记忆，都必须重新绑定当前会话和当前授权。”
    
    -   **\* Web3 场景**：如果 Agent 记住了我的私钥/常用地址/高 gas 偏好，下次自动用了——这就是 Memory 越界变成安全漏洞。所有涉及身份和资产的 Memory 每次都得重新确认，不能靠”上次你同意了”就跳过。
        
-   knowledge base：模型可检索的外部知识库，需要维护来保证正确，知识的新鲜。
    
    -   **\* Knowledge Base vs Memory 的区别**：Memory 存的是「用户偏好/历史行为」（比如我的常用地址、偏好语言），可撤销；Knowledge Base 存的是「外部文档/协议规范」（比如以太坊黄皮书、Solidity 文档），需要维护版本号和更新时间。两者都会进入 Context，但来源和治理方式不同——前者是"你上次怎么用的"，后者是"官方怎么规定的"。
        

**在AI web3中的位置**

context 决定模型看到的是用户幻想、过期文档，还是可验证的链上事实。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->












**首先记录一下经过乱七八糟error终于成功接入tg的claude code:**

1.vscode或者cursor安装cc 感觉vscode更方便界面更清晰一些，还有node和git，最好这些东西都塞进c盘（并不知道对不对）  
[2.cc](http://2.cc) switch 配置cc 用的ds v4 pro 由于不是原生 导致用cc自带的接入tg方法大失败 发送消息后能看到tg bot在打字但是没有回复 问cc后它说它可以收到消息 也能主动给我发送（测试成功） 但是种种原因 最重要的就是接入的不是cc的ai而是ds导致的 它没法自动回复我  
3.调查后选择尝试用cc connect，交给cc自动配置 终于成功接入并对话  
4.将prompt发给tg bot后有的网站它无法读取，可能是cc的安全配置原因 请教大家后 下载官方读网站的mcp（好像依旧不太行） 用curl绕过限制终于成功抓取！

**LLM**

-   第一性原理：llm并不是百分百正确的事实，是执行工具，越是需要准确真实知识或信息的动作越需要自主校验
    
-   token：处理文本的基本单位。代码、JSON、长标识符、表格和混合语言文本经常比普通段落更吃token。
    
-   embedding：把文字/代码转成数字向量，让计算机比较「含义是否接近」。
    
    -   简单例子：
        
        -   知识库有 3 句话：A "MetaMask 是以太坊钱包" / B "比特币是加密货币" / C "今天天气很热"
            
        -   用户问 "怎么用以太坊钱包" → 系统把这句话也转成向量 → 跟 A 最接近，跟 C 最远
            
        -   RAG 系统先把 A 抓出来喂给 LLM 做参考
            
    -   关键认知：Embedding 负责匹配「意思接近」，不是判断「是否正确」。
        
    -   RAG: 用来让回答更准确 真实（当用户提出问题时，系统先从知识库里找相关材料，再让模型基于这些材料回答。）
        
        -   chunking：用合理的方法把长文本切分，可以有效节省token，方便ai检索。 方法： 比较稳的做法是按结构切：标题、API endpoint、函数说明、标准小节、FAQ 问答、审计或变更记录。每个 chunk 保留来源 URL、标题路径、更新时间和版本。
            
-   transformer:核心是：
    
    -   Attention（注意力机制） 在 Transformer 诞生之前，旧的 AI 读书就像是“狗熊掰棒子”，读到第 100 个字时，前面的第 1 个字 差不多就忘光了，或者很难把它们联系起来。而 Attention（注意力机制） 彻底改变了这一点。现在 AI 读一段话，就像人类拿了一把高光荧光笔。 当它读到“他”这个字时，它会立刻用荧光笔把前文的“张三”划上重点； 当它读到“bank”这个字时，它会同时注意到上下文里出现的“河岸”还是“贷款”，从而瞬间判断出这里的 “bank”是指地理名词还是金融机构。 这就是它能极其丝滑、毫无违和感地和你对话，并且看懂上万字复杂长文的原因。它能同时兼顾上下文里所 有的细节和它们之间的微妙关系。 但这只是联系上下文，没有真实的数据库，不能保证完全正确。
        
-   Hallucination：（想要避免的）生成的结果不真实或无法验证。或在执行时用了错误的参数，权限解释等
    
-   Multimodal：多模态，让ai可以处理多种类型的文件，这样可以读懂更多真实的工作界面。
    
-   **LLM 在 AI×Web3 全栈中的位置：理解层（Understanding Layer）**
    
    -   负责：把用户目标转成可讨论的计划，把复杂链上数据解释成人能读的语言，把文档和代码串成可执行思路
        
    -   配套需要的层：
        
        1.  数据层：RPC、索引器、预言机、向量库、项目文档
            
        2.  编排层：Prompt、Context、RAG、Agent workflow
            
        3.  执行层：工具调用、钱包、Smart Account、合约交互
            
        4.  安全层：Guard、simulation、权限策略、人工确认、日志
            
    -   **关键原则：LLM 越靠近执行层，越要把它的自然语言输出变成可验证对象。**
        

**Prompt：给模型指令让它来工作**

-   第一性原理：
    
    -   指令分层要清楚：系统规则、开发者规则、用户目标、检索内容不能混在一起。
        
    -   输出格式要机器可检验：关键结果尽量用 JSON schema、函数参数或明确字段承载。
        
    -   高风险动作不能只靠 prompt 拦截：写入数据库、发送消息、调用外部工具、执行支付或签名类动作，都必 须再经过代码层校验和 human check。
        
-   instruction: 给模型建立规则，要做什么不能做什么，输出什么。
    
    -   实用写法
        
        -   任务目标
            
        -   可用输入
            
        -   禁止行为
            
        -   输出格式和失败格式
            
-   few-shot: 当无法完全文字说清时，直接给模型一些示例进行模仿。（弊端：维护成本增高，当真实操作更新后示例可能会落后而误导模型）
    
-   structured output: 结构化输出，规定模型返回结果的结构，方便后续检查测试等
    
-   prompt injection：外界注入新的prompt引导模型做事，如泄露信息，调用危险工具等。
    
    -   应对方法：
        
        -   把外部内容标记为不可信数据
            
        -   工具调用前做参数校验
            
        -   敏感动作强制走 allowlist 和 human approval
            
        -   不把密钥、主权限和不可撤销动作交给模型
            
-   **Prompt 在 AI×Web3 全栈中的位置：接口层（Interface Layer）**
    
    -   Prompt 处在用户目标和模型行为之间——把「帮我看看这笔交易」变成模型可执行的任务：读哪些字段、怎么解释资产变化、哪些风险要标记、什么时候必须说不知道
        
    -   更稳的 6 层安全链路：
        
        1.  Prompt → 定义任务和输出格式
            
        2.  Context → 提供可信数据和来源边界
            
        3.  Model → 生成解释或候选动作
            
        4.  Code → 校验 schema 和业务规则
            
        5.  Guard / Simulation → 检查链上影响
            
        6.  Human check → 确认高风险动作
            
    -   **关键原则：Prompt 是软约束，不是安全边界。真正的边界必须由代码、权限、校验和审计来承担。**
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->













[https://www.notion.so/AI-web3-3647977eeab480d1b0e5fbf128bfa11e?source=copy\_link](https://www.notion.so/AI-web3-3647977eeab480d1b0e5fbf128bfa11e?source=copy_link)

![image.png](attachment:7fe443bc-87ea-4891-9177-67061b082049:image.png)

Web 2很多环节是基于信任进行（上图，信任bank institution不造假），web3想要解决这些：将bank institution换成block chain（支付流程）。原因：钱包：解决用户如何控制自己的资产。

![image.png](attachment:87101c2a-1de3-495a-97b7-101fbc6d3bf5:image.png)

-   钱包：解决用户如何控制自己的资产。
    

private key保密，一串随机数，和消息结合，通过算法在不泄露private key的基础上产出signature进行交易。（b站：lindell）

![image.png](attachment:10c169b1-330e-4443-a0f8-dd0cfa5cd650:image.png)

![image.png](attachment:77457cf7-2331-4fe6-a5f8-05702434de8e:image.png)

钱包分类：

![image.png](attachment:f2071935-b8b7-4f4d-9aea-a9a0534129d9:image.png)

-   交易的关键参数：
    

Gas让交易更快上链（多少钱给矿工）

nounce：保证交易顺序，确保交易不会重复提交

calldata：evm（python）的解析器，让交易多样

-   如何确定交易成功：
    

![image.png](attachment:d180c87b-7dca-4046-93bb-6784888b2d7a:image.png)

kya/kyt：合规检测是否有效

-   交易模拟：
    

签名前，不用签名模拟交易，看看此交易会对哪些相关方产生影响，减少风险。

tee 1, tee 2: 多签系统，非常安全的签名环境，保证key不泄露

![image.png](attachment:4511a729-3b8e-4110-9d5d-c70ce29fb310:image.png)

由于web3交易不可逆，因此对安全要求极高

![image.png](attachment:decc5914-6f81-413b-babf-35f1cf7c5307:image.png)

[https://updraft.cyfrin.io/career-tracks](https://updraft.cyfrin.io/career-tracks) 这里有web3各种职位的相应的学习路径和教程
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
