---
timezone: UTC+8
---

# LastHopeOfGPNU

**GitHub ID:** LastHopeOfGPNU

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->
1.  完成 Week 1 Web3 实践：在 Sepolia 测试网通过 JSON-RPC eth\_call 调用了 Chainlink ETH/USD Price Feed 合约
    
2.  手动实现了 ABI 编码/解码（函数选择器、uint256、int256、string、tuple），零依赖
    
3.  掌握了 eth\_call（只读）与链上交易的区别
    
4.  参加 Co-learning 推进任务收尾 + VC 分享学习项目打磨方法论
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->

1\. 完成了 AI 6 大概念（LLM / Prompt / Context Window / Workflow / Agent / Tool Use）梳理

2\. 完成了 Web3 8 大概念（Account / Address / Wallet / Seed Phrase / Private Key / Signature / Transaction / Gas）梳理

3\. 产出了 1 个 AI×Web3 实验项目：AI Contract Reading Coach — 输入 Solidity 代码片段自动生成合约阅读卡

4\. 收获：AI 辅助合约阅读的核心是「提问 + 验证」，而非「替代判断」
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->


-   ✅ 完成：Week 2 Wallet / Permission — Agent 链上动作权限策略
    
-   ✅ 参加：Women Builders in AI × Web3（19:00）
    
-   ✅ 参加：Week 2 例会｜优秀笔记分享、答疑（20:00）
    
-   学习时长：~3h（任务设计 + 两场活动）
    
-   关键收获：Agent 权限策略 = Task-level Pact + ERC-4337 可编程账户 + Safe 多签控制 + Guard/Policy 交易级约束 + 可审计日志
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->



今日完成：

-   x402 Paywall + CAW Agent 自主支付闭环（9 文件 Node.js demo）
    
-   学习时长：~4h（上午编码 + 19:00 Co-learning）
    
-   关键收获：Agent Commerce = x402 协议 + Pact 策略层 + 链上 Settlement + 可审计日志
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->




今日完成：

\- \[x\] Week 2｜Agent Identity｜Agent Profile 与能力声明草图（Research Report Agent 完整 Profile）

\- \[x\] 19:00 Co-learning｜任务推进与答疑

\- \[x\] 20:00 Neo-Cypherpunk & the Cultural Layers of Privacy

\- \[x\] 关键收获记录
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->





今日参加了 AI × Web3 School 的学习：

-   Product manager of Cobo Agentic Wallet
    
-   完成的任务：1 项 — Week 2 Payment / Commerce 最小支付与商业流程拆解
    
-   输出了完整的 Agent Commerce Flow 设计文档（6 角色 × 8 流程 × 4 协议对比）
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->






完成了**AI × Web3 问题地图与主方向选择**  
[ai-web3-school-cohort-0/tasks/week\_2/ai\_web3\_](https://github.com/LastHopeOfGPNU/ai-web3-school-cohort-0/blob/master/tasks/week_2/ai_web3_map.md)[map.md](http://map.md) [at master · LastHopeOfGPNU/ai-web3-school-cohort-0](https://github.com/LastHopeOfGPNU/ai-web3-school-cohort-0/blob/master/tasks/week_2/ai_web3_map.md)
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->







## Safe 学习笔记

### 1\. Safe 是什么？

**Safe 是一套面向智能账户（Smart Account）的基础设施，核心目标是让数字资产、身份、数据的所有权从传统私钥账户，升级为更灵活、更安全、可编程的账户体系。**

Safe 官方文档里强调，传统 EOA 账户依赖私钥和助记词，安全性和可用性都有限，尤其不利于普通用户进入 Web3。Safe 的方向是通过开放的合约标准和模块化智能账户基础设施，让开发者可以构建钱包、应用和账户抽象相关产品。

> **Safe 是以智能合约账户为核心的数字资产托管与账户抽象基础设施。**

## 2\. 为什么需要 Safe？

### 传统 EOA 的问题

EOA，即 Externally-Owned Account，是以太坊中由私钥控制的账户。它没有代码逻辑，只能通过私钥签名发起交易。

这带来几个明显问题：

| 问题 | 说明 |
| --- | --- |
| 单点风险 | 私钥丢失或泄露，资产可能永久损失 |
| 用户体验差 | 助记词管理门槛高 |
| 功能有限 | 原生不支持多签、恢复、批量交易、权限控制 |
| 不适合组织 | DAO、公司、团队资金管理需要多人审批 |

Safe 的价值，就是把账户从“一个私钥控制一个地址”升级为“一个智能合约账户承载资产和权限逻辑”。

## 3\. 核心概念：Smart Account

**Smart Account，也叫智能合约账户，是由智能合约逻辑控制的账户。**

它可以被一个或多个 EOA 控制，也可以被其他智能账户控制。相比普通 EOA，它可以支持：

-   多签审批
    
-   交易批处理
    
-   账户恢复
    
-   Gasless Transaction
    
-   权限模块
    
-   自动化执行
    
-   更复杂的安全策略
    

Safe 文档把 Safe 定位为智能账户的一种可信实现。

## 4\. Safe 的核心能力：多签账户

Safe 最经典的使用场景是 **Multi-signature Account，多签账户**。

多签账户允许一个账户配置多个 Owner，并设置 Threshold，也就是执行交易需要多少个 Owner 批准。

### 常见配置

| 配置 | 含义 | 适用场景 |
| --- | --- | --- |
| 1/1 Safe | 一个 Owner，单人控制 | 个人智能账户 |
| N/N Safe | 所有 Owner 都必须签名 | 极高安全要求 |
| N/M Safe | M 个 Owner 中 N 个签名即可 | 团队、DAO、公司金库 |
| 0/0 Safe | 无 Owner，完全由模块控制 | 自动化协议、条件执行 |

例如，一个团队可以设置 2/3 Safe：

> 三个人都是 Owner，但任意两个人批准后，交易才可以执行。

这能减少单点失误，也能避免单个成员私钥泄露后直接导致资金被转走。

## 5\. Safe 多签是怎样工作的？

Safe 的多签能力是智能合约原生支持的。

大致流程：

1.  Safe 合约存储 Owner 地址列表和 Threshold。
    
2.  用户准备一笔 Safe Transaction。
    
3.  多个 Owner 对这笔交易进行签名。
    
4.  Safe 合约验证签名是否来自合法 Owner。
    
5.  签名数量达到 Threshold 后，交易可以被执行。
    

文档中提到，Safe 账户会遍历签名，验证 payload 是否被正确签署、签名者是否是正确 Owner。

* * *

## 6\. Safe Infrastructure 的组成

Safe Infrastructure 是 Safe 面向开发者的开放、模块化账户抽象技术栈。官方文档将其分成三个主要部分：

| 组成 | 作用 |
| --- | --- |
| Safe SDK | 帮开发者抽象智能合约账户操作复杂度，集成 Safe 和外部服务 |
| Safe API | 提供 Safe 账户相关信息服务，例如 Transaction Service、Events Service |
| Safe Smart Account | Safe 的模块化、可扩展智能合约账户核心 |

可以理解为：

> **Safe Smart Account 是账户合约本体，Safe API 是数据与索引服务，Safe SDK 是开发者集成工具。**

## 7\. Safe 与账户抽象 AA 的关系

Account Abstraction，账户抽象，是一种通过智能账户改善区块链用户体验的范式。Safe 文档列出的账户抽象能力包括：减少对助记词的依赖、多链交互、账户恢复、Gasless Transaction、交易批处理等。

Safe 可以被看作账户抽象生态里的核心智能账户实现之一。

它和 ERC-4337 的关系可以这样理解：

| 概念 | 作用 |
| --- | --- |
| Safe | 智能账户合约与账户基础设施 |
| ERC-4337 | 一套不改共识层的账户抽象交易流程 |
| UserOperation | ERC-4337 中用户提交的伪交易对象 |
| Bundler | 打包 UserOperation 并提交上链的节点 |
| EntryPoint | 处理 UserOperation 的核心合约 |
| Paymaster | 替用户支付 Gas 或允许其他方式支付 Gas |

ERC-4337 中，用户发送的是 UserOperation，Bundler 将其打包成交易并调用 EntryPoint 处理。

## 8\. Gasless Transaction 是什么？

Gasless Transaction，也叫 Meta-Transaction，指用户不直接支付链上 Gas，而是由 Relayer 等第三方替用户提交交易并支付 Gas。用户通常签署的是一段消息，而非直接签署链上交易。

它的意义是：

**用户可以在账户里没有原生 Gas Token 的情况下使用区块链应用。**

这对新用户 onboarding 很关键。例如用户没有 ETH，也可以先完成某些链上操作，由项目方、Paymaster 或 Relayer 代付 Gas。

## 9\. Safe Module 与 Safe Guard

Safe 的可扩展性主要来自 Module 和 Guard。

### Safe Module

**Safe Module 是给 Safe 增加额外功能的智能合约模块。**

它可以把模块逻辑和 Safe 核心合约解耦。

适合的场景包括：

-   自动化交易
    
-   定期支付
    
-   条件执行
    
-   Agent 操作钱包
    
-   协议级权限控制
    

### Safe Guard

**Safe Guard 是在 Safe 原有多签机制之上增加额外限制的合约。**

它可以在交易执行前后做检查。

例如：

-   限制只能和某些合约交互
    
-   限制单笔转账金额
    
-   禁止调用高风险函数
    
-   对交易进行策略检查
    

* * *

## 10\. Safe Wallet 和 Safe Infrastructure 的区别

文档明确区分了两个概念：

| 名称 | 面向对象 | 作用 |
| --- | --- | --- |
| Safe Wallet | 普通用户、组织、DAO | 官方资产管理界面 |
| Safe Infrastructure | 开发者 | 集成 Safe 智能账户、账户抽象能力的技术栈 |

Safe Wallet 是官方用户界面，用来管理 Safe 账户。  
而 [docs.safe.global](http://docs.safe.global) 这套文档主要聚焦 Safe Infrastructure，即开发者如何把 Safe 集成进自己的产品。

* * *

## 11\. Safe 适合哪些场景？

### 资产托管

DAO 金库、项目方金库、团队钱包、投资基金钱包。

### 组织协作

多人共同管理资产，所有支出都需要按规则审批。

### Web3 产品账户系统

把 Safe 集成到钱包、DeFi、游戏、社交、Agent 产品里。

### AI Agent 钱包

Safe 文档导航里已经有 Agent 相关 Quickstart，包括：

-   为 Agent 设置 Safe 账户
    
-   Agent 操作需要人类审批
    
-   多 Agent 设置
    
-   Agent 支出限额
    

这说明 Safe 正在把智能账户能力扩展到 AI Agent 操作资产的场景。

## 12\. 优势与风险

### 优势

| 优势 | 说明 |
| --- | --- |
| 安全性更高 | 多签降低单点私钥风险 |
| 可编程 | 能加入模块、Guard、自动化逻辑 |
| 适合组织 | 支持多人审批、权限分配、审计 |
| 开发者生态成熟 | 有 SDK、API、合约基础设施 |
| 账户抽象友好 | 支持恢复、批量交易、Gas 抽象等能力 |

Safe 官方文档称其自 2018 年以来经过审计和测试，并已有大量项目在其上构建。

### 风险

| 风险 | 说明 |
| --- | --- |
| 配置错误风险 | Threshold、Owner、Module 配错可能导致资产风险 |
| 私钥仍然重要 | 多签降低风险，但 Owner 私钥泄露仍可能造成问题 |
| N/N 配置锁死风险 | 如果任一 Owner 丢失私钥，账户可能无法执行交易 |
| Module 风险 | 恶意或有漏洞的 Module 可能绕过正常流程 |
| 复杂度提高 | 相比 EOA，理解和维护成本更高 |

特别要注意：Safe 的安全性不只取决于合约本身，也取决于 **Owner 管理、Threshold 配置、Module 权限、Guard 策略和运营流程**。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->








# ERC-4337 文档学习

ERC-4337 是一套不改以太坊共识层的账户抽象方案：用户不再直接发普通交易，而是提交 `UserOperation`，由 Bundler 打包后调用链上的 `EntryPoint`，最终让智能合约钱包完成验证、执行、Gas 支付与扩展逻辑。

## 1\. ERC-4337 要解决什么问题？

传统 EOA 钱包有几个核心限制：

| 问题 | EOA 模式 | ERC-4337 / Smart Account 模式 |
| --- | --- | --- |
| 身份验证 | 固定私钥 + ECDSA | 可自定义签名逻辑，如 Passkey、多签、社交恢复 |
| Gas 支付 | 用户必须持有 ETH | 可由 Paymaster 代付，或用 ERC-20 间接支付 |
| 多步操作 | 多笔交易、多次签名 | 可批量调用，一次完成 |
| 钱包恢复 | 私钥丢失通常不可恢复 | 可做社交恢复、模块化恢复 |
| 钱包创建 | 通常先有 EOA | 可通过 initCode 和 Factory 延迟部署智能账户 |

文档强调，ERC-4337 的关键价值是：**在不修改以太坊底层协议的前提下，引入** `UserOperation`**、alt mempool 和** `EntryPoint`**，实现账户抽象。**

## 2\. 核心架构

ERC-4337 可以理解为 6 个主要角色：

| 组件 | 作用 |
| --- | --- |
| Smart Account | 用户的钱包合约，负责验证签名、权限、nonce、执行调用 |
| UserOperation | 用户意图对象，类似“我要做什么”的交易请求 |
| Bundler | 收集、模拟、打包 UserOperation，并提交到链上 |
| EntryPoint | 链上统一入口，负责验证、执行、计费、结算 |
| Paymaster | 代用户支付 Gas，支持 Gasless UX 或 ERC-20 付费体验 |
| Factory | 用 CREATE2 等方式确定性部署智能账户 |

其中，Smart Account 是账户抽象的基础。它本质上是一个智能合约钱包，可以把认证、授权、Gas 支付、nonce 管理和执行逻辑放到合约里。

## 3\. UserOperation 的生命周期

可以按以下流程理解：

1.  用户在钱包或 dApp 中发起操作。
    
2.  钱包生成一个 `UserOperation`。
    
3.  `UserOperation` 通过 `eth_sendUserOperation` 提交给 Bundler 或 RPC Relayer。
    
4.  Bundler 在本地 mempool 中保存该操作。
    
5.  Bundler 调用 `EntryPoint.simulateValidation()` 做链下模拟。
    
6.  模拟通过后，Bundler 把多个 UserOperation 打包。
    
7.  Bundler 调用 `EntryPoint.handleOps()` 提交到链上。
    
8.  EntryPoint 调用 Smart Account 的 `validateUserOp()` 验证。
    
9.  验证通过后，执行实际调用。
    
10.  EntryPoint 结算 Gas，并把费用补偿给 Bundler。
     

文档中明确提到，用户提交路径走的是 `eth_sendUserOperation`，Bundler 会维护本地 UserOperation mempool，并在接收时进行模拟验证。

## 4\. EntryPoint：整个系统的链上中枢

**EntryPoint 是 ERC-4337 的核心合约。**

它负责：

| 函数 | 作用 |
| --- | --- |
| handleOps(UserOperation[] ops, address beneficiary) | Bundler 的主入口，批量验证并执行 UserOperation |
| simulateValidation(UserOperation op) | Bundler 链下模拟验证使用 |
| depositTo(address target) / balanceOf(address) | 管理账户或 Paymaster 的 Gas 存款 |
| addStake() / unlockStake() / withdrawStake() | 管理 Paymaster 等实体的质押，降低 griefing 攻击风险 |

`handleOps()` 会遍历每个 UserOperation，调用钱包的 `validateUserOp()`，验证成功后执行调用，并把 Gas 成本结算给 Bundler。

一个重要细节：`simulateValidation()` **预期会 revert。** 这个 revert 不是失败，而是设计如此，用来携带验证状态、Aggregator 或 Paymaster 等信息，Bundler 通过 `eth_call` 或 `debug_traceCall` 解读这些结果。

## 5\. Bundler：智能钱包交易的“打包者”

Bundler 的职责是：

1.  监听 alt mempool。
    
2.  收集 UserOperation。
    
3.  使用 `simulateValidation()` 进行预验证。
    
4.  把有效 UserOperation 组合成 bundle。
    
5.  调用 `EntryPoint.handleOps()` 上链。
    
6.  先垫付 Gas，再从账户或 Paymaster 获得补偿。
    

文档把 Bundler 描述为 ERC-4337 的 relayer，它们让账户抽象可以在不改共识层的情况下工作。

### Bundler 的风险点

| 风险 | 说明 |
| --- | --- |
| 模拟失败 | 如果收录失败的 UserOperation，可能导致 bundle 失败 |
| DoS / griefing | 恶意用户可能提交高消耗验证逻辑 |
| Mempool 碎片化 | 每个 Bundler 维护自己的 mempool，可能导致可用性和抗审查问题 |
| 兼容性问题 | EntryPoint 版本、UserOperation 格式、Paymaster 逻辑都可能影响兼容性 |

文档提到，Bundler 必须避免包含模拟失败的 UserOp，并应执行 ERC-7562 对验证逻辑的约束。

## 6\. Alt Mempool：ERC-4337 的替代交易池

ERC-4337 不使用以太坊原生交易池来传播 UserOperation，而是引入 application-layer 的 alt mempool。

| 对比项 | 原生交易池 | ERC-4337 alt mempool |
| --- | --- | --- |
| 对象 | 普通交易 | UserOperation |
| 发送方式 | eth_sendTransaction | eth_sendUserOperation |
| 发送者 | EOA | 智能合约账户 |
| 费用模型 | 原生 Gas | 可结合 Paymaster、自定义逻辑 |
| 传播方式 | 共识层集成 | Bundler / Shared Mempool 层 |

文档指出，历史上每个 Bundler 运行自己的隔离 mempool，这带来了审查和冗余问题；后来 Shared Mempool 通过 Bundler 之间 gossip UserOperation 来改善去中心化和可用性。

## 7\. Paymaster：Gas 抽象的关键

**Paymaster 是可以替用户支付 Gas 的智能合约。**

它支持几类常见场景：

| 场景 | 说明 |
| --- | --- |
| Gasless onboarding | 新用户没有 ETH，也能完成首次操作 |
| ERC-20 支付 Gas | 用户用 USDC 等代币间接承担费用 |
| dApp 补贴 | 项目方为特定用户行为补贴 Gas |
| 业务条件控制 | 例如订阅用户、白名单用户、广告观看后可免 Gas |

当 `UserOperation.paymasterAndData` 非空时，EntryPoint 会调用 Paymaster 的 `validatePaymasterUserOp()` 判断是否愿意赞助；操作之后还可能调用 `postOp()` 完成结算或后处理。

### Paymaster 的主要风险

| 风险 | 说明 |
| --- | --- |
| Gas griefing | 攻击者构造高成本操作消耗 Paymaster 资金 |
| Replay abuse | 同一授权被重复使用 |
| 白名单绕过 | 签名或前置条件校验不严 |
| Stake draining | Paymaster 的 stake / deposit 被恶意消耗 |
| 业务规则绕过 | off-chain 条件和 on-chain 校验不一致 |

文档明确提醒：如果赞助的操作验证或执行失败，Paymaster 仍可能承担 Gas，因此必须做好模拟和严格校验。

## 8\. ERC-7562：为什么验证阶段要受限制？

ERC-7562 是 ERC-4337 生态中的重要安全标准，主要规定 **UserOperation 验证阶段** 应该遵守什么规则。

原因是：Smart Account 的验证逻辑是 EVM 代码，可能包含复杂签名、多签、Paymaster 规则等。如果没有限制，恶意用户可以提交昂贵、非确定性或依赖共享状态的验证逻辑，消耗 Bundler 资源。

ERC-7562 的限制包括：

| 类型 | 示例 |
| --- | --- |
| 禁止非确定性 opcode | 如 BLOCKHASH、TIMESTAMP、NUMBER |
| 禁止状态修改 | 如验证阶段使用 SSTORE、SELFDESTRUCT |
| 限制存储访问 | 避免无界迭代和复杂状态依赖 |
| 限制外部调用 | 验证阶段不应依赖任意外部合约 |
| 限制 Gas / 栈深度 | 防止验证逻辑消耗过多资源 |
| 限制共享可变状态 | 防止一个 UserOp 影响大量其他 UserOp |

这些规则主要由 Bundler 在链下执行；EntryPoint 负责链上正确性，但不会执行所有模拟规则。

## 9\. Session Key 与 Delegation

Session Key 可以理解为“临时授权密钥”。

它的作用是：**让智能账户在不暴露主密钥的情况下，临时授权某些操作。**

常见模式：

| 模式 | 说明 |
| --- | --- |
| Static Delegation | 给某个 key 长期权限，需要主动撤销 |
| Dynamic Delegation | 签一个带约束的 session token，例如 validUntil、targetContract |
| Plugin / Module | 通过 ERC-6900、ERC-7579 等模块化方式实现 |

文档也提醒，Session Key 和 Delegation 当前并非 ERC-4337 原生标准能力，更多是由具体钱包通过 `validateUserOp()`、插件或授权模块实现。

## 10\. 对开发者最重要的理解

### 10.1 ERC-4337 改变的是“账户模型”，不是单个钱包功能

它的核心不是“免 Gas”这么简单，而是让账户变成可编程合约。

因此，开发者可以实现：

-   Passkey 登录
    
-   社交恢复
    
-   多签权限
    
-   子账户 / 限额账户
    
-   订阅式授权
    
-   批量交易
    
-   dApp 代付 Gas
    
-   自动化交易策略
    
-   企业级权限控制
    

### 10.2 复杂度从用户侧转移到基础设施侧

用户体验变简单，但系统复杂度转移到了：

-   Smart Account 合约安全
    
-   Bundler 稳定性
    
-   Paymaster 风控
    
-   EntryPoint 版本兼容
    
-   UserOperation Gas 估算
    
-   链下模拟一致性
    
-   Mempool 可用性
    
-   模块升级治理
    

### 10.3 Paymaster 是商业化入口，也是最大风险点之一

如果你做 Web3 应用，Paymaster 很适合做：

-   新用户冷启动补贴
    
-   交易所 / 钱包拉新
    
-   游戏链上操作免 Gas
    
-   B2B SaaS 钱包抽象
    
-   订阅用户链上操作补贴
    
-   用稳定币支付 Gas 的体验
    

但它同时是攻击面，需要严格做：

-   签名有效期
    
-   nonce / replay 防护
    
-   白名单校验
    
-   单用户限额
    
-   单时间窗口限额
    
-   操作类型限制
    
-   Gas 成本监控
    
-   异常自动暂停
    

## 11\. 优势与劣势

### 优势

| 优势 | 说明 |
| --- | --- |
| 用户体验显著改善 | 可隐藏 ETH、Gas、私钥管理等复杂概念 |
| 兼容现有 EVM | 不需要修改以太坊共识层 |
| 账户逻辑可编程 | 支持多签、Passkey、社交恢复、限额、模块化权限 |
| 适合大规模应用 onboarding | Paymaster 可以降低首次使用门槛 |
| 有利于钱包产品差异化 | 钱包可以通过账户逻辑做功能创新 |

### 劣势 / 风险

| 风险 | 说明 |
| --- | --- |
| 基础设施依赖更重 | 需要 Bundler、Paymaster、RPC、EntryPoint 版本协同 |
| 合约安全要求更高 | 钱包逻辑、升级逻辑、模块系统都可能引入漏洞 |
| Gas 估算更复杂 | preVerificationGas、验证 Gas、执行 Gas、Paymaster 成本都要考虑 |
| Paymaster 容易被攻击 | 补贴逻辑如果不严，可能被刷爆 |
| 兼容性碎片化 | 不同钱包、Bundler、EntryPoint 版本可能有差异 |
| 调试门槛高 | 很多失败发生在链下模拟或 revert 编码结果中 |

## 12\. 和 EIP-7702 / RIP-7560 的关系

文档把 ERC-4337 放在更大的账户抽象路线中：

| 标准 | 方向 |
| --- | --- |
| ERC-4337 | 不改协议，通过 EntryPoint + UserOperation 实现账户抽象 |
| ERC-7562 | 约束账户抽象验证阶段，保护 Bundler 和 mempool |
| EIP-7702 | 让现有 EOA 临时具备类似智能账户能力 |
| RIP-7560 | 更偏 L2 原生账户抽象方向 |

从工程角度看：**ERC-4337 是当前应用层最实用的账户抽象标准；EIP-7702 更像是把现有 EOA 用户迁移进账户抽象体验的桥梁；RIP-7560 则更适合 L2 层面做原生 AA。**
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->









## OpenZeppelin Contracts 学习笔记

## 1\. 它是什么

**OpenZeppelin Contracts 是一套面向 Ethereum / EVM 的 Solidity 智能合约标准库**，核心价值是提供经过社区验证、可复用、安全性较高的合约组件。官方定位是“secure smart contract development”的基础库，常见能力包括 ERC20、ERC721 等标准实现，权限控制，以及可组合的 Solidity 工具组件。

从第一性原理看，它解决的是智能合约开发里的三个基本问题：

| 问题 | OpenZeppelin 的解决方式 |
| --- | --- |
| 标准协议容易写错 | 提供 ERC20、ERC721、ERC1155、ERC4626 等标准实现 |
| 权限和治理复杂 | 提供 Ownable、AccessControl、Governor 等模块 |
| 安全边界难把握 | 提供经过审计、版本化、文档化的基础组件 |

## 2\. 安装与使用方式

Hardhat / npm 项目中通常直接安装：

```
npm install @openzeppelin/contracts
```

官方说明中，默认安装的是 `latest`，即稳定且审计过的版本；`dev` 标签表示功能完成但尚未审计。

Foundry 项目可以通过 git 安装，但官方提醒不要直接依赖 `master` 分支，因为 `master` 是开发分支，不具备正式发布版本的安全保障。

典型使用方式是通过 import 继承已有合约：

```
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721 {
    constructor() ERC721("MyNFT", "MNFT") {}
}
```

一个重要原则是：**不要从网页复制粘贴源码，也不要随意改 OpenZeppelin 源码本身**。应当通过包管理器安装，并在自己的合约中继承、组合、扩展。官方也说明，库只会部署你实际用到的合约和函数，因此不用担心整个库被完整部署导致 gas 浪费。

## 3\. Token 模块：资产标准的基础设施

Token 是区块链里最常见的抽象。OpenZeppelin 文档强调，所谓“发送 token”，本质上是调用某个 token 合约的方法；token 合约通常维护地址到余额的映射，再通过方法增减这些余额。

主要标准：

| 标准 | 适用场景 | 特点 |
| --- | --- | --- |
| ERC20 | 同质化资产 | 代币、积分、治理票据、稳定币等 |
| ERC721 | 非同质化资产 | NFT、唯一资产、收藏品、游戏道具 |
| ERC1155 | 多资产标准 | 一个合约管理多种同质化/非同质化资产，支持批量操作 |
| ERC4626 | Tokenized Vault | 收益型资产、金库、DeFi vault |
| ERC6909 | 多 token 轻量标准 | 适合更轻量的多资产场景 |

关键理解：**Token 标准不是“资产本身”，而是资产交互接口的约定**。标准化的好处是钱包、交易所、DeFi 协议、区块浏览器可以统一识别和交互。OpenZeppelin 的价值在于把这些接口和常见扩展做成可靠组件。

## 4\. 权限控制：Ownable 与 AccessControl

智能合约里的权限问题非常关键，因为权限通常决定谁可以 mint token、冻结转账、修改参数、执行治理操作等。官方明确指出，如果权限控制实现不当，可能导致整个系统被攻击者接管。

### Ownable

`Ownable` 是最简单的权限模型：合约有一个 `owner`，只有 owner 可以执行 `onlyOwner` 修饰的管理操作。它适合：

-   单管理员项目
    
-   MVP / 原型阶段
    
-   管理权限非常简单的合约
    

但它的风险也很直接：如果 owner 转错地址，或者转给一个无法交互的合约，管理权限可能永久丢失。官方建议可以考虑 `Ownable2Step`，让新 owner 显式调用 `acceptOwnership` 接受所有权，降低误转风险。

### AccessControl

当系统需要多角色权限时，应该使用 `AccessControl`。它基于 RBAC，即 Role-Based Access Control。比如：

-   `MINTER_ROLE`：允许 mint
    
-   `BURNER_ROLE`：允许 burn
    
-   `PAUSER_ROLE`：允许暂停系统
    
-   `DEFAULT_ADMIN_ROLE`：允许管理其他角色
    

它的核心思想是**最小权限原则**：每个账户只拿到它完成任务所需的权限，不把所有能力集中在一个 owner 身上。OpenZeppelin 文档也说明，`AccessControl` 的优势在于可以实现更细粒度的权限拆分。

## 5\. Governance：链上治理模块

OpenZeppelin 的 Governance 模块主要围绕 `Governor` 合约展开，用来搭建链上治理系统。链上治理常用于：

-   修改协议参数
    
-   升级合约
    
-   管理 treasury
    
-   发放 grant
    
-   与其他协议集成
    

文档指出，很多去中心化协议在早期由核心团队控制，但最终会逐步把决策权交给社区。这个过程通常由 Governor 合约实现。OpenZeppelin 的设计目标是模块化 Governor，减少项目 fork Compound GovernorAlpha / GovernorBravo 代码带来的安全风险。

一个 Governor 系统通常需要配置：

| 维度 | 含义 |
| --- | --- |
| voting power | 如何计算投票权，例如基于 ERC20Votes |
| quorum | 通过提案所需最低参与度 |
| voting options | For / Against / Abstain 等投票选项 |
| voting delay | 提案创建后多久开始投票 |
| voting period | 投票持续多久 |
| proposal threshold | 发起提案需要多少投票权 |

OpenZeppelin 示例中提到常见 quorum 可以设置为总供应量的 4%，并可通过 `GovernorVotesQuorumFraction` 实现。

## 6\. Utilities：常用安全工具库

Utilities 是 OpenZeppelin 中非常实用的一类模块，覆盖签名验证、加密、数学、地址处理、支付等常见底层需求。官方文档特别强调，签名验证并不简单，需要认真阅读 `MessageHashUtils` 和 `ECDSA` 文档。

常见工具包括：

| 工具 | 用途 |
| --- | --- |
| ECDSA | 恢复和验证 Ethereum ECDSA 签名 |
| MessageHashUtils | 处理 Ethereum Signed Message 等消息哈希格式 |
| P256 | 支持 secp256r1 / P256 签名 |
| RSA | 支持 RSA 签名验证 |
| SignatureChecker | 同时支持 EOA、ERC1271 合约钱包、ERC7913 等签名来源 |

尤其是 `SignatureChecker`，它提供统一接口，可以同时支持普通 EOA 签名和 Safe 等智能合约钱包的 ERC1271 签名。对于做智能钱包、授权登录、链下签名授权、账户抽象相关系统很实用。

## 7\. Account Abstraction：账户抽象模块

OpenZeppelin Contracts 也包含 ERC-4337 相关的账户抽象组件。账户抽象的核心是让智能合约账户具备比 EOA 更灵活的认证和执行能力，例如：

-   批量交易
    
-   gas 代付
    
-   embedded wallet
    
-   社交恢复
    
-   更复杂的权限配置
    

ERC-4337 不修改以太坊协议层，而是通过 `UserOperation`、`EntryPoint`、Bundler、Account Contract、Factory、Paymaster 等组件实现替代交易流。

核心组件理解：

| 组件 | 作用 |
| --- | --- |
| UserOperation | 用户意图对象，类似“伪交易” |
| EntryPoint | 统一执行 UserOperation 的入口合约 |
| Bundler | 链下基础设施，打包 UserOperation 并提交上链 |
| Account Contract | 智能账户，负责验证和执行操作 |
| Factory | 创建智能账户 |
| Paymaster | 代付 gas 或允许用 ERC20 支付 gas |

风险点：文档提到 ERC-7562 对验证阶段的 EVM 代码提出限制，违反规则的账户可能只能通过私有 bundler 处理，这会带来中心化取舍。

## 8\. Upgradeable Contracts：可升级合约

如果合约要通过代理模式升级，需要使用单独的包：

```
npm install @openzeppelin/contracts-upgradeable @openzeppelin/contracts
```

Upgradeable 版本的包结构与普通包类似，但合约名一般带 `Upgradeable` 后缀，例如：

```
import {ERC721Upgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
```

可升级合约有几个关键规则：

1.  **不能依赖 constructor 初始化状态**
    
2.  使用 `initialize()` 替代 constructor
    
3.  父合约初始化函数通常是 `__ContractName_init`
    
4.  多继承时要特别注意重复初始化
    
5.  必须关注 storage layout 兼容性
    

OpenZeppelin v5 的 Upgradeable 包使用 ERC-7201 namespaced storage pattern，把不同合约的状态变量放在独立 namespace 中，以降低继承顺序变化和新增变量导致存储冲突的风险。

## 9\. 版本兼容性：必须严肃对待

OpenZeppelin 使用语义化版本来表达 API 和 storage layout 的兼容性。文档明确说明：**major 版本应假定与前一版本不兼容，尤其是可升级合约的 storage layout 不兼容**。例如，不能安全地把一个 live upgradeable contract 从 4.x 直接升级到 5.x。

兼容性重点：

| 版本变化 | 一般含义 |
| --- | --- |
| patch / minor | 通常保持 API 和 storage layout 兼容 |
| major | 应假定不兼容 |
| draft-* | 草案 ERC 实现，不保证兼容 |
| virtual override | 不建议随意 override 非设计给外部覆盖的函数 |
| struct underscore 字段 | 应视为 private，不应直接依赖 |

官方也建议使用 OpenZeppelin Upgrades Plugins 或 CLI 检查 storage layout 安全性。

## 10\. Contracts Wizard：快速生成合约骨架

Contracts Wizard 是一个交互式合约生成器。它适合在不知道从哪里开始时快速生成 ERC20、ERC721、Governor 等合约模板，并通过勾选功能学习不同组件如何组合。生成后的合约可以放进 `contracts` 或 `src` 目录，然后用 Hardhat / Foundry 编译。

实践建议：**Wizard 适合生成初始骨架，不适合替代安全审计和业务建模**。生成后仍然要逐行理解权限、mint 逻辑、升级逻辑、治理参数和外部调用边界。

## 11\. 优势与风险

| 维度 | 优势 | 风险 / 注意点 |
| --- | --- | --- |
| 安全性 | 社区验证、广泛使用、审计版本明确 | 使用方式错误仍然会出漏洞 |
| 开发效率 | 标准合约可直接继承 | 过度继承可能导致合约复杂度上升 |
| 标准兼容 | ERC20/ERC721/ERC1155 等生态兼容性好 | draft ERC 或新标准可能有兼容性变动 |
| 权限控制 | Ownable / AccessControl / Governor 覆盖多种治理模型 | 权限设计错误比代码错误更危险 |
| 可升级 | 提供 upgradeable 包和 storage layout 安全机制 | 代理模式本身复杂，初始化和存储布局容易踩坑 |
| 账户抽象 | 支持 ERC-4337 相关组件 | bundler、paymaster、验证规则涉及链下基础设施和中心化取舍 |
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->










### 今日完成

-   \[x\] 参与活动 — AI 下乡计划 | AI 在 Web 3 的应用
    
-   \[x\] 整理笔记 — 五大 AI×Web3 结合方向已归档
    
-   \[x\] 确定下一步实验方向 — AI 审核交易工具
    

### 学习笔记

今天「AI 下乡计划」系统梳理了 AI 和 Web3 结合的五大方向：

**1\. 基础设施 — 分布式推理**：Bittensor 等网络让节点以去中心化方式提供 AI 推理服务，用代币激励替代中心化算力调度。

**2\. Agent + 钱包**：让 AI Agent 直接支配钱包做代理支付，核心是权限控制和安全边界设计。

**3\. 链上数据分析**：从公开链上数据中反推地址身份、分析行为模式、预测影响 — 这是 AI 最天然的 Web3 切入点。

**4\. 智能钱包 & 安全助手**：在真实执行前模拟交易，AI 帮你预判风险和结果，降低操作门槛。

**5\. DeFi 智能风控**：AI 模型替代规则引擎，捕捉非线性异常，实时预警可疑交易。

> AI 是 Web3 的"认知层"，帮你从海量链上信息和复杂合约逻辑中，快速看到关键信号。

### 下一步

-   🎯 动手实验：做一个 **AI 审核交易** 工具 — 输入交易数据 → AI 分析风险 → 输出评估报告
    
-   可选方向：地址风险评估 / 合约交互安全性分析 / 交易模拟结果解读
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->











今天参加了 Web3 运行原理课，对于课后提出的四个思考问题：

**1\. 资产自托管的安全 vs 易用** 打破「越安全越难用」的权衡，关键在策略组合：TSS/MPC 分布式存密钥片段 + Social Recovery 信任链恢复 + 抽象 UX（用身份/口令替代裸私钥）。

**2\. 公共基础设施谁出钱维护** 本质是激励机制设计。无税收时靠协议奖励（出块激励）+ 手续费 + 社区声誉驱动；有税收时通过治理代币投票 + KPI 贡献值 + 透明账本分配，原则是「激励与贡献挂钩」。

**3\. 无审查下的有害行为治理** 不靠中心化审查，而靠「行为可证据化」：链上行为模式识别 + DID 信誉系统 + 社区经济激励标注 + 智能合约约束 + 链下实体合规兜底。审查权分散到社区 + 规则预编码。

**4\. 去中心化协作的公平分配** Reward = BaseStake×α + ContributionScore×β + ReputationScore×γ，权重由治理投票决定。核心要素：贡献透明 → 可量化 → 可审计 → 可仲裁。

> Web3 不消灭信任问题，而是把信任从「相信人/机构」转移到「相信代码/共识/激励机制」。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->












学习内容: Web3 运行原理 —— 钱包、交易、Gas、区块浏览器

## 收获:

-   理清了助记词 → 私钥 → 公钥 → 地址的生成链路和每个环节的安全边界。Web3 的"账户控制"靠密码学而非中心化认证，丢了就是丢了，没有找回按钮。
    
-   在 Sepolia 测试网完整走了一遍"创建钱包 → faucet 领水 → 发送 0.01 ETH → 在 etherscan 查交易哈希/Gas/区块高度"的闭环，对交易的 mempool → 打包 → 确认流程有了直观感受。
    
-   理解了 Gas 不只是"手续费"——它是链上计算的定价机制，也是网络安全和反垃圾的第一道防线。Gas Limit、Gas Price、实际消耗和退还是四个不同的概念。
    

## 问题:

1.  合约交易和普通转账在 Gas 消耗上的差异有多大？准备用 Remix 部署一个简单合约来实际对比。
    
2.  Nonce 的具体管理逻辑——如果同时发两笔交易，第二笔必须等第一笔确认，还是有其他机制？计划明天问 Co-learning。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->













\### 📘 Handbook 学习笔记：钱包（Wallet）

**核心认知：** 钱包不是 Web3 的「登录按钮」—— 它管理的是链上控制权，不是账号资料。

**三类钱包动作：**

| 动作 | 说明 | 风险 |

|------|------|------|

| 连接钱包 | 应用读取地址和网络，不涉及资产 | 低 |

| 签名消息 | 用户证明控制某个地址 | 中 |

| 发送交易 | 改变链上状态（转账/授权/合约调用） | 高 |

**关键知识节点：**

\- **EOA**：由私钥控制的外部账户，最常见但权限粗、私钥丢失难恢复

\- **Mnemonic（助记词）**：恢复钱包的高风险秘密，任何应用/客服都不该索要

\- **Transaction（交易）**：对链上状态的正式请求，确认后不可撤回。前端需展示 6 种状态（等待确认/拒绝/已广播/成功/失败/pending）

\- **Gas**：链上执行成本，需让用户知道费用、支付资产、失败是否仍消耗

\- **Explorer（区块浏览器）**：查看链上事实的窗口，检查 Status/From/To/Method/Value/Token Transfers/Logs/Gas Used

**第一性原理：**

1\. 连接 ≠ 授权资产

2\. 签名必须可解释（用户需知道签的是什么）

3\. 网络是上下文（同一地址在不同链上资产不同）

**AI × Web3 关联思考：**

AI Agent 进链上的合理分工 —— AI 做理解和辅助（解释交易、检查风险、生成操作计划），钱包负责确认和授权，策略合约/智能账户负责执行约束。签名和权限不能被随意交给模型。

\#### 🧪 实践任务：钱包交互地图

\> 环境：MetaMask + Sepolia 测试网 + Uniswap ([app.uniswap.org](http://app.uniswap.org))

\> 目标：走完连接→签名→交易→explorer 完整链路，标注每一步的读写边界和 AI Agent 替代可行性

| 步骤 | 操作 | 读写类型 | 用户应看到的关键信息 | AI Agent 替代？ |

|------|------|----------|---------------------|:--:|

| **1\. 连接钱包** | 点击「Connect Wallet」→ 选择 MetaMask → 确认连接 | 🔵 只读 | 请求的地址权限列表、当前网络名称、dApp 来源 URL | ⚠️ 可辅助（解释连接≠授权） |

| **2\. 切换网络** | MetaMask 弹窗提示切换到 Sepolia → 确认 | 🔵 只读 | 目标网络名、Chain ID `11155111`)、RPC 地址 | 🔓 AI 可自动切换 |

| **3\. 签名消息** | dApp 请求 `personal_sign` → MetaMask 显示签名内容 → 确认 | 🔴 状态变更 | **签名原文（非十六进制）**、签名目的、过期时间、是否涉及资产 | 🚫 **必须人工确认** |

| **4\. 发送交易** | 发起一笔 0.001 SepoliaETH 转账 → MetaMask 弹窗显示详情 | 🔴 状态变更 | 接收地址（前6后4位）、金额+资产符号、预估 Gas Fee、合约地址（如是合约调用）、网络名 | 🚫 **绝对禁止 AI 代签** |

| **5\. 等待确认** | 交易广播后等待区块打包 | 🔵 只读 | 交易哈希 `tx hash`)、当前确认数 / 目标确认数、预计时间 | 🔓 AI 可监控并通知 |

| **6\. 查看 Explorer** | 在 Etherscan Sepolia 打开交易哈希 | 🔵 只读 | Status (✅ Success / ❌ Failed)、From / To、Value、Gas Used、Token Transfers、Logs | 🔓 AI 可解析并总结 |

**状态分支（前端必须覆盖）：**

\`\`\`

点击按钮 → 弹出钱包 → ┬→ 用户确认 → 广播交易 → ┬→ 成功上链 ✅

│ ├→ Revert ❌（Gas 仍消耗）

│ └→ Pending ⏳（超时提示刷新）

└→ 用户拒绝 ❌ → 停止

\`\`\`

**AI Agent 边界总结：**

| AI 可以做 | AI 绝不能做 |

|-----------|-------------|

| 解释交易内容（转给谁、调用哪个方法、消耗多少 Gas） | 代替用户点击「确认」或输入密码 |

| 预估 Gas 并建议最优费率 | 访问或存储私钥/助记词 |

| 监控交易状态并通知（已广播/成功/失败） | 在用户不知情时发起任何链上操作 |

| 生成可读的签名原文解释 | 将签名用于与用户意图不符的目的 |

| 在 Explorer 中定位交易并总结 | 声称「交易绝对安全，放心签」
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
