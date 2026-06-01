---
timezone: UTC+8
---

# helenediu-dotcom

**GitHub ID:** helenediu-dotcom

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->
**1.权限层和链上执行层的连接点**：Safe Guard 做前置拦截 `→` PimlicoClient 获取 gas 价格 + paymaster 赞助 `→` Smart Account 提交 UserOperation。三层之间的数据流和调用顺序是关键。

2\. **真实链上验证的意义**：本地测试全通过不代表代码没问题。链上执行遇到了 permissionless API 版本不匹配（`signerToSimpleSmartAccount` → `toSimpleSmartAccount`）、Pimlico v1/v2 API 差异（gas 必须预填充）、paymaster 赞助需要显式传参——这些坑在纯本地环境碰不到。
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->

**今日学习**： 两周阶段性总结。Week 2 后半段完成了 Wallet / Permission Track 的项目设计到代码落地——Safe Agent Wallet 的三层架构（Safe Guard + Session Key + Smart Account），实现了七维权限策略和 6 个测试场景。

**核心收获**： 这两周最大的认知变化：从"AI 是什么、Web3 是什么"到"AI 操作 Web3 时权限怎么控制"。Session Key 不是钱包私钥的复制品，而是一个受限的临时授权——有过期、有上限、有白名单。安全必须设计进系统结构里，不是后来加的功能。从零基础到能写出可运行的 Agent 权限校验代码，两周前没想到能做到。
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->


把项目设计文档里的概念变成了可运行的代码。核心产出三件事：

**1\. 七维权限策略是"写死的规则，不是 Prompt"**

PermissionPolicy 的七个维度（资产、金额、合约、函数、滑点、时间、频率）全部用结构化数据定义，`checkPermission()` 函数逐条校验。不通过就是 `{ allowed: false, reason: "..." }`——没有模糊空间，没有"模型你看着办"。

**2\. Session Key = 打了权限标签的临时密钥对**

私钥在内存中持有不落盘，绑定一个 PermissionPolicy，每次签名前 Safe Guard 先过一遍。过期/超额/撤销后自动失效。它不是一个"钱包"，它是一组"可限制、可审计、可撤销的能力"。

**3\. Safe Guard 两层设计**

硬约束（代码拦）：金额、频率、时间、白名单——不通过直接拒绝。灰区（升级到人）：零值合约调用、白名单为空——不拒绝但标记需人工确认。原则是"能在代码里拦住的就不要问人"。

6 个测试场景全部通过：合法交易放行、单笔超限拒绝、未授权函数拒绝、撤销后拒绝、频率超限拒绝。
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->




\### 核心理念

**Agent 不应该拥有"钱包"，它只应该拥有一组可限制、可审计、可撤销的能力。**

钱包、智能账户或权限模块来持有资产和执行权，Agent 只做三件事：提出意图 → 生成候选交易 → 请求有限权限并在规则允许时触发动作。

\### 七个核心知识点

\#### 1. AI Wallet UX

让用户知道 Agent 在做什么：

\- 正在执行的任务是什么

\- 会读取、生成、调用什么

\- 涉及哪些权限（资产、合约、函数、时间范围）

\- 确认后资产和状态的变化

\- 存在哪些风险

\- 如何撤销和停止

核心原则：\*\*用户不需要理解技术细节，但必须看到权限的边界和后果。\*\*

\#### 2. Permission Policy

写给系统执行层看的规则，必须能被程序检查（不是自然语言）：

| 维度 | 说明 |

|---|---|

| 资产范围 | 哪些 token 可以被操作 |

| 金额上限 | 单笔 + 累计 |

| 目标合约 | 白名单合约地址 |

| 函数范围 | 每个合约允许调哪些方法 |

| 价格和滑点 | 交易价格约束 |

| 时间窗口 | 有效期 |

| 频率限制 | 单位时间内操作次数上限 |

\#### 3. Session Key

给特定任务临时使用的受限 key，完整流程：

\`\`\`

主钱包创建 Session Key

→ 设置权限范围（Policy）

→ Agent 使用 Session Key 发起符合规则的操作

→ 钱包 / Smart Account 校验 Policy

→ 权限到期 / 额度用完 / 用户手动撤销 → Session Key 失效

\`\`\`

\#### 4. Safe Guard

执行前判断交易是否符合规则的守卫层：

\- **确定性规则**：拦住不该发生的动作（硬约束，无例外）

\- **人工确认**：处理规则覆盖不了的灰区（软约束，需要人介入）

设计原则：能在代码里拦住的就不要问人，代码拦不住的才升级到人工。

\#### 5. ERC-4337 Workflow

简化流程：

\`\`\`

Agent 生成意图或调用候选

→ 前端/后端包装生成 UserOperation

→ Smart Account 校验签名、nonce、权限和执行逻辑

→ Bundler 把 UserOperation 打包提交给 EntryPoint

→ Paymaster 按规则代付 gas

→ 链上执行，记录结果和失败原因

\`\`\`

\#### 6. Pre-transaction Simulation

签名前必须模拟交易：

\- 模拟结果要翻译成人能理解的语言

\- **关键字段必须来自结构化解析和链上模拟**，不能只靠自然语言总结

\- 防止模型对模拟结果做自由发挥或掩盖风险

\#### 7. Recovery / Revocation

在给 Agent 权限的同时，必须设计恢复和撤销机制：

\- 用户可随时手动撤销 Session Key

\- Session Key 过期自动失效

\- 额度用完自动失效

\- 异常检测触发自动冻结
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->





阅读 Web3 Tool Use 章节，把 Day 6 到 Day 10 的分散学习——RPC 查询、合约交互、AA UserOp、Session Key——统一到"Agent 工具链"视角下重新理解。

Web3 Tool Use 不只是"让 Agent 调 API"，而是用工具定义画安全边界。每个工具的定义（调什么合约、传什么参数、需要什么权限）本身就是一层约束：没定义 transfer 工具，Agent 就不能转账；transfer 工具写死了金额上限，Agent 就突破不了。Prompt Injection 最多诱导 Agent"想"做坏事，但工具层不给它这个能力——安全不在 Prompt 里，在工具定义和权限模型里。

Chain-aware Context 是眼睛（读链上状态）→ Web3 Tool Use 是手（调用链上工具）→ Agent Wallet 管权限（Session Key 代替 EOA 私钥）→ AI Security 兜底（工具约束 + 权限最小化）。四个主题连起来就是一句话：让 Agent 在安全边界内自主操作链上。
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->






AI Agent 上链的关键不是“让它会签名”，而是“让它只能在可接受损失范围内签名”。

EOA 私钥的问题不是不能自动化，而是权限太大、不可细分、泄露后几乎等于账户失控；Session Key

的价值在于把权限拆成特定合约、特定方法、单笔/累计额度、有效期和撤销机制。这样即使 Agent 被 Prompt Injection

诱导，真正能落到链上的动作仍然被限制在一个很小的安全盒子里。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->







````markdown
## EOA 交易 vs UserOperation 对比
| 字段 | EOA Transaction | UserOperation (ERC-4337) |
|---|---|---|
| 发起者 | 用户| 用户或应用|
| 签名验证 | 协议层固定验证（ecrecover 从签名恢复地址，与 from 对比）| 智能账户的 validateUserOp() 函数（可编程，支持多签等自定义逻辑）|
| gas 支付 | 原生代币| 原生或非原生资产|
| 进入的 mempool | mempool| alt mempool|
| 执行路径 | 用户发起交易请求、交易经钱包确认、签名、广播、打包和执行，人工操作| 用户创建 UserOperation → Bundler 收集打包 → 提交到 EntryPoint 合约 → EntryPoint 调用智能账户 validateUserOp() 验证 → 验证通过后 EntryPoint 调用智能账户执行目标动作（Paymaster 可赞助 gas），可自动执行|
| 可编程性 | 较低| 较高|

---

## ERC-4337 数据流
```
用户/Agent 构造 UserOperation
  ↓
Bundler 收集 UserOp（通过 alt mempool）
  ↓  Bundler 链下模拟（simulation）预判是否能通过
  ↓
Bundler 将多个 UserOps 打包成一笔普通交易，提交到 EntryPoint 合约
  ↓
EntryPoint 调用 Smart Account 的 validateUserOp() —— 链上验证签名、nonce、策略
  ↓  （可选）EntryPoint 调用 Paymaster 的 validatePaymasterUserOp() 确认 gas 赞助
  ↓
验证通过 → EntryPoint 调用 Smart Account 执行目标操作（callData）


### 对比传统权限模型

| | 传统 API Key | EOA 私钥 | Session Key |
|---|---|---|---|
| 权限粒度 | 可精细控制（如只读、限具体接口、绑定 IP）| 全权控制（拥有账户所有资产的完全控制权，无法细分）| 可精细控制（限定特定操作、合约、时间窗口、额度等）|
| 撤销方式 | 服务端随时删除或禁用，即时生效| 无法撤销（一旦泄露只能将资产转移到新账户，原私钥永久有效）| 可主动撤销（链上或链下会话失效、过期自动作废、或由授权者吊销）|
| 泄露后果 | 攻击者只能获得该 Key 被授予的有限操作权限，服务端可快速封禁| 账户完全失控，资产可被瞬间全部转走，无法追回| 仅泄露该会话允许的有限操作范围，且可提前撤销或等待自动过期|
| 适合 AI Agent？ | 较适合（服务端可控制权限、定期轮换 Key）| 极不适合（权限过大，泄露风险极高，AI 难以承担）| 非常适合（临时、精细授权，可自动过期，符合 AI 自主操作的安全要求）|
````
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->








````markdown
## 今日完成

✅ 回顾 Day 7 笔记中 Indexing 的概念卡片  
✅ 写了一个 70 行的最小 indexer（Node.js + eth_getLogs）  
✅ 在 Sepolia 上跑通：扫描 USDC 测试币最近 200 个区块，捕获 864 个 Transfer 事件  
✅ 解码 topics + data → 输出结构化 JSON（from / to / value / blockNumber / txHash）  
✅ 理解了「哪些字段该进 AI Context，哪些不该」  

---

## 核心收获

### 1. Indexing 的本质

**链上**：合约 `emit Transfer(from, to, value)` → 写入 `receipt.logs[]` → 永久存在，但只能按区块/交易查  
**索引层**：`eth_getLogs` 批量拉 → ABI 解码 → 写 DB（按 from/to/value 建索引）→ 前端/AI 可查「某地址的所有转账历史」

### 2. eth_getLogs 的三个关键参数

```javascript
eth_getLogs({
  address: '0x1c7D...7238',  // 合约地址（不填会扫所有合约，超时）
  topics: ['0xddf252ad...'], // Transfer 事件签名（keccak256 hash）
  fromBlock: 10919546,        // 起始区块
  toBlock: 10919746           // 结束区块（公共 RPC 通常限 ≤10000 块）
})
```

### 3. Event Log 的解码规则

```solidity
event Transfer(address indexed from, address indexed to, uint256 value);
```

- `topics[0]` = 事件签名 hash（所有 ERC-20 都是 `0xddf252ad...`）
- `topics[1]` = from 地址（32 字节，前 12 字节补零 → 取后 40 个 hex 字符）
- `topics[2]` = to 地址（同上）
- `data` = value（uint256 hex → BigInt → 除以 10^decimals → 人类可读）

### 4. 哪些字段该进 AI Context

✅ **该进**：`from`, `to`, `value`（"16.200805 USDC"）, `blockNumber`, `txHash`  
❌ **不该进**：`topics` 原始 hex, `data` 原始 hex

**原因**：`0x00000...0f6f85` 占 66 字符但信息为零，`"16.200805 USDC"` 只占 14 字符但语义完整。LLM 的推理质量取决于输入的「信息密度」。

---

## 实践数据

**扫描范围**：Sepolia 区块 10,919,546 → 10,919,746（200 个区块）  
**目标合约**：USDC 测试币 `0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238`  
**捕获事件**：864 个 Transfer 事件  
**输出文件**：`experiments/indexing/01-output.json`（7791 行，包含 meta + 所有事件）

**关键发现**：
- 平均每区块 4+ 个 Transfer（Sepolia USDC 很活跃）
- 同一 txHash 可能有多个 Transfer（合约内部调用链，如 swap 路由）
- 金额范围：0.000001 USDC（测试粉尘）→ 16+ USDC（真实转账）

---

## Day 6 vs Day 8 的对比

| | Day 6 | Day 8 |
|---|---|---|
| RPC 方法 | `eth_getTransactionByHash` | `eth_getLogs` |
| 查询模式 | 单笔精确查询（需要知道 hash） | 批量扫描 + 过滤 |
| 适用场景 | 用户点击「查看交易详情」 | 构建「地址历史」/「代币流向」 |
| 是否是 Indexing | ❌ 不是 | ✅ 是 |
| AI Agent 用途 | 解释单笔交易 | 提供历史上下文（"你上周转了多少 USDC"） |
````
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->









阅读 Handbook 章节：Dev Stack / Network / Account Abstraction / DeFi / Oracle / Indexing / Security，这 7 个主题不是 7 节并列的课，而是「一条主线 + 两类支撑 + 一层横切」：Dev Stack→Network→合约→AA→DeFi 是主线；Oracle 把链外数据带进来、Indexing 把链上数据吐出去；Security 横跨全部。在 AI×Web3 里两个最关键的交叉点：\*\*Account Abstraction 的 Session Key 是 Agent Wallet 的真正底座\*\*（让 AI 在受限范围内自动执行），\*\*AI Oracle 把模型推理上链\*\*（但必须配输入可追溯 + 版本记录 + 挑战机制）。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->










链上原始数据全是 hex，本身不是 Agent 能用的 Context。真正有用的是「解码 + 语义化」之后的字段——例如 `input=0x` + `logs=[]` + `gasUsed=21000` 三者合起来就是一个强语义信号：「这是纯 ETH 转账，没有合约交互」。Chain-aware Context 的核心不是把链上数据塞给 LLM，而是先建一个解码/语义化层，再决定哪些字段进 Context。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->











**概念部分**：完成了 Smart Contract 章节。理解了合约调用的完整链路：用户发起交易 → 钱包签名 → EVM 执行 → 状态写链上。记住了几个关键组件：

-   **Solidity**：合约开发语言，编译成字节码后部署
    
-   **EVM**：所有节点跑同一套虚拟机，保证执行结果一致
    
-   **ABI**：合约接口说明书，外部调用的"翻译层"
    
-   **Event**：合约向外部世界发信号的方式，不改状态但可监听
    
-   **Proxy Pattern**：合约不可修改，但可以通过代理模式实现升级
    

最有收获的是 AI × Web3 的分层设计思路：AI 做编排，钱包做授权，合约做执行，监控记录结果——AI 不直接持有执行权，每层都有人类或可验证机制兜底。

**实践部分**：完成了 MetaMask 全流程

1.  安装 MetaMask，创建钱包，备份助记词
    
2.  切换到 Sepolia 测试网
    
3.  用 Google Cloud Faucet 领取了 0.05 SepoliaETH
    
4.  发了一笔自转（0.001 ETH），在 Etherscan 上确认交易成功
    

Etherscan 上看到的信息让概念变得具体：Gas Fee 是真实存在的计算成本，7 个 block confirmations 对应"越多区块叠上去越不可逆"的描述，EIP-1559 是以太坊 2021 年升级后的交易格式。

## 遇到的卡点

领测试币时遇到了"需要主网 0.001 ETH"的要求，换了 Google Cloud Faucet 解决。提示：直接用 [https://cloud.google.com/application/web3/faucet/ethereum/sepolia，Gmail](https://cloud.google.com/application/web3/faucet/ethereum/sepolia%EF%BC%8CGmail) 登录即可，不需要主网余额。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->












\> 今天最大的理解：\*\*钱包不存钱，它存的是私钥\*\*。

区块链上的资产其实永远在链上，从未「在」某个钱包里。钱包只是保管私钥的工具——私钥能生成公钥，公钥能生成地址，地址才是链上资产的归属位置。所以钱包 App 删了、手机丢了，只要助记词还在，资产就还在。助记词是私钥的人类可读版本，两者本质等价，都要像真实的密码一样保护。

密码学这块让我意外的是：\*\*签名验证不需要私钥\*\*。任何人拿到公钥都能验证一条消息是不是你签的，但无法伪造你的签名——这个非对称性是整个 Web3 信任机制的核心。转账本质上就是：用私钥签一条「我要把 X 转给 Y」的消息，广播到网络，节点验证签名有效后记录上链。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->














今日学习：完成 AI 基础全部 11 个章节（LLM、Prompt、Context、RAG、Agent、Frameworks、Vibe Coding、MCP、Evaluation、Fine-tuning、Inference）

核心收获：这 11 个概念不是孤立的，而是一条完整链路——Prompt 定义任务，Context 提供信息，LLM 负责推理，RAG 补充外部知识，Agent 推进执行，Frameworks 组织工程，MCP 标准化工具接口，Evaluation 保证质量，Fine-tuning 调整行为，Inference 决定部署方式，Vibe Coding 是贯穿整个开发过程的工作方式。最重要的一个判断：模型输出是候选结果，不是事实本身；越靠近真实执行，越需要外部校验和人工确认。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->















参与了AI Agent入门——Hermes从0到1的直播分享，尝试进行用Claude code配置Learning Agent。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->
















今日只简单学习了大语言模型，它不是真滴会聊天或知道答案，而是一个概率模型，其输出的结果并不是事实本身，需要我们去验证。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
