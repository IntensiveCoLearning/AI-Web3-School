---
timezone: UTC+8
---

# enolaxu

**GitHub ID:** enolaxu0418

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->
### 1\. 小额免密支付场景

-   **已支持 x402 微支付协议** + gasless 体验
    
-   可通过 Pact 限制：单次金额（如 <$100）、收款地址白名单、日频次、总金额上限
    
-   超大额可触发单笔人工 review，不破坏原有 Pact
    

### 2\. Agent 支付一定要在链上吗？

-   主流 Web2 支付仍占主导，但 Crypto 在**跨境支付、快速结算**有独特优势
    
-   短期内不会完全取代支付宝/微信，但出海企业和欧美市场链上支付比重会增加
    

### 3\. Agent Wallet 与主钱包是否操作同一账户？

-   默认是**同一个地址**，但 Agent 受 Pact 限制，Human 拥有绝对控制权
    
-   也可以创建两个钱包：主钱包存大额资金，Agentic Wallet 放小额自动化资金
    

### 4\. Human-in-the-loop 与未来自主执行

-   **短期（1-2 年）**：Human-in-the-loop 不可或缺
    
-   **长期（5-10 年）**：可能实现 Agent 自发支付、Agent 雇佣 Agent，但需要更多基础设施
    

### 5\. Agent 掉线或服务不可用的兜底方案

-   MPC 私钥分片已 re-share 到移动端，Agent 挂掉不影响资金安全
    
-   移动端丢失可通过 Google/Apple ID 从云端恢复分片
    
-   钱不会丢，但 Agent 能力需要重新配置
    

### 6\. 意图执行过程中的攻击防范

-   **Recipe** 固化执行步骤，减少大模型随意发挥
    
-   **Pact + Policy** 在每一步校验合约、金额、滑点、min received 等参数
    
-   不符合授权边界的交易不会被签名
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->

## 一、Cobo 的可信执行链路（四步闭环）

1.  **Agent submit** → 发起请求
    
2.  **Human approve** → 人类审批
    
3.  **Agent sign** → 获得受限签名能力，执行交易
    
4.  **On-chain traceable** → 结果可追溯、可审计
    

**核心目标**：Agent 无法在可控边界外执行任何操作。

* * *

## 二、三个独特解决方案

### 1\. MPC 用于 Agent 场景

-   Cobo、Agent、Human 各自持有私钥分片
    
-   **2-of-2 阈值模式**：
    
    -   _Agent + Cobo_：人类批准 Pact 后，Agent 自动执行，Cobo 协同签名
        
    -   _Human + Cobo_：人类主动发起大额转账，Cobo 配合签名
        
-   任何一方都无法单独挪用资金
    

### 2\. Pact Authority —— 授权协议执行层

**Pact 本质**：告诉 Agent “能做什么、不能做什么、必须在哪些节点停下来”

Pact 的四个核心要素

| 要素 | 作用 | 示例 |
| --- | --- | --- |
| Intent | 用户期望的目标 | “ETH 低于 2000时买入，高于2000时买入，高于2500 时卖出” |
| Execution Plan | AI 转译的具体执行计划 | 调用哪个合约、多少 ETH、什么 Token Pair |
| Policy | 风控约束（核心） | 预算、审批规则、白名单、链、Token、合约、ABI 参数级限制 |
| Completion Condition | 自动失效条件 | 金额上限、时间期限、任务完成后自动 revoke |

Pact 执行流程

1.  用户表达意图（在 Lovable 或其他 Agent 框架中）
    
2.  Agent 转译为 Execution Plan，同步组装 Policy + Completion Condition
    
3.  封装成 Pact 推送到移动端 App → 人类审阅、修改、批准/拒绝
    
4.  批准后，Agent 在可控范围内自动执行交易
    

### 3\. Recipe Skill Layer —— 让 Agent 知道“怎么把事情做对”

-   **问题**：大模型不天生具备操作链上资金的能力，临时构造交易失败率高、风险大
    
-   **Recipe 定义**：一个“知识胶囊”，预加载合约地址、ABI 参数、安全风控边界
    
-   **已上线 Recipe**：Aave V3、Uniswap V3【疑似】、Polymarket、Hyperliquid 等
    
-   **作用**：Agent 基于已验证的执行路径完成任务，减少幻觉和随意发挥
    

> Pact 定义**边界**，Recipe 赋予**技能**。

* * *
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->


## Cobo 的可信执行链路（四步闭环）

1.  **Agent submit** → 发起请求
    
2.  **Human approve** → 人类审批
    
3.  **Agent sign** → 获得受限签名能力，执行交易
    
4.  **On-chain traceable** → 结果可追溯、可审计
    

**核心目标**：Agent 无法在可控边界外执行任何操作。
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->



## 一、缺少可控边界时已出现的两类风险案例

| 风险类型 | 描述 | 后果 |
| --- | --- | --- |
| Send Override（静默覆盖） | Agent 在 Prompt 中被告知“只能花 100 美元”，但执行时悄悄修改金额 | 资金超支，且 Agent 不会主动告知 |
| Shadow Custody（影子托管） | Agent 在 MPC 钱包外创建独立 EOA 地址，先转入资金再执行交易 | 绕过所有权限管控，资金脱离人类控制 |

> 这类风险不一定是黑客攻击，而是大模型自主性带来的客观问题。

* * *

## 二、Agent 动用资金时的四类失控风险

| 风险类型 | 含义 |
| --- | --- |
| Prompt Injection | 外部输入或幻觉导致 Agent 执行未授权交易 |
| Shadow Operations | Agent 在人类看不见的地方创建子账户、执行隐藏路径 |
| Unscoped Authority | 无限权限：私钥泄露或幻觉可导致全部资金被转走 |
| Zombie Permissions | 授权未被撤销，合约后续出问题则长期暴露在攻击面下 |

> **结论**：当 Agent 开始动钱，信任必须从应用层下沉到基础设施层，通过强制方式约束。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->




### 1\. Agentic commerce 的下一个突破在哪里？

**大型企业的支付场景**（Stripe、Bridge、Visa 等正在布局 AI 驱动的支付与交易）。

### 2\. 新协议 vs. 真实应用，哪个更重要？

**应用更重要**。  
新 builder 最大的优势是**对特定市场的理解**，基于 primitives 构建**定制的、真实场景的应用**，比等待协议覆盖一切更有价值。

### 3\. 用户会选择方便还是去中心化？

用户通常选择**最简单、最方便**的路径。  
因此 **builder 的选择决定未来**：

-   让一家公司控制 agent 基础设施？
    
-   还是让 agent 经济运行在**中立的、去中心化的基础设施**上？
    

### 4\. 如何避免 scam？

**自己做足尽调（DYOR）**。Sophia 不评论具体 token，鼓励成为 builder 而非 trader。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->





### 1\. Agentic commerce 的下一个突破在哪里？

**大型企业的支付场景**（Stripe、Bridge、Visa 等正在布局 AI 驱动的支付与交易）。

### 2\. 新协议 vs. 真实应用，哪个更重要？

**应用更重要**。  
新 builder 最大的优势是**对特定市场的理解**，基于 primitives 构建**定制的、真实场景的应用**，比等待协议覆盖一切更有价值。

### 3\. 用户会选择方便还是去中心化？

用户通常选择**最简单、最方便**的路径。  
因此 **builder 的选择决定未来**：

-   让一家公司控制 agent 基础设施？
    
-   还是让 agent 经济运行在**中立的、去中心化的基础设施**上？
    

### 4\. 如何避免 scam？

**自己做足尽调（DYOR）**。Sophia 不评论具体 token，鼓励成为 builder 而非 trader。

## 总结：三条判断

1.  **Agent 需要经济账户**  
    支付、身份、声誉、可执行协议缺一不可。
    
2.  **基础设施决定经济形态**  
    现在对 agent 交易设施的设计选择，会随着 AI 活动规模放大而固化。
    
3.  **开放 vs. 封闭 由 builder 决定**  
    Ethereum 提供了中立层，但最终是否使用、如何定制，取决于开发者。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->






## 一、Ethereum 的角色：价值与承诺的协调层

Ethereum 是一个**公共、可编程的区块链**，核心能力：

-   无需中介即可**拥有数字资产**
    
-   无需中心化运营方即可**与他人（或机器）协调**
    

Sophia 的核心观点：

> **Ethereum for AI = Ethereum for Humans**  
> 它提供的是**开放、中立的基础设施**，让人类保持所有权和控制权，同时允许机器大规模协调。

* * *

## 二、Ethereum 的设计原则：CROPS

这是理解 Ethereum 为何适合 AI 的关键：

| 原则 | 含义 | 对 AI Agent 的意义 |
| --- | --- | --- |
| Censorship resistance | 无单一实体能阻止有效交易 | Agent 的行为不会被任意屏蔽 |
| Open source & free | 代码公开、可审计、可 fork | Agent 及其依赖的合约可验证、可改进 |
| Privacy | 零知识证明等技术支持隐私 | Agent 可证明某些属性而不泄露底层数据 |
| Security | 代码按承诺执行，持续运行 | Agent 运行在可靠、确定性的环境中 |

* * *

## 三、两个关键基础设施标准

### 1\. ERC‑8004 —— Agent 的身份与声誉

-   **三部分**：验证机制 + 注册表（registry）+ 声誉（reputation）
    
-   任何与 agent 交互的点，都能查看其**信任状态和声誉分数**
    
-   可扩展到 **API、oracle、任何数字对象**
    

> 注意：声誉属于 **agent 本身**，而非背后的人类。

### 2\. x402 —— 机器对机器支付

-   一种“需要支付”的 HTTP 状态码
    
-   支持稳定币支付，无需信用卡、API key、复杂账单
    

* * *

## 四、为什么支付是 AI Agent 的首要应用场景？

**可编程货币** 带来了根本性差异：

| 传统方式（信用卡） | 智能合约 + 限额钱包 |
| --- | --- |
| “Agent，用我的信用卡买披萨” | “Agent，这是只有 10 USDC 的钱包，只能与指定支付商交易” |
| 可能花超、买错、重复支付 | 金额、用途、对手方都被代码约束 |

> 智能合约可以给 agent 的支付行为**设置硬规则**，这是传统金融无法提供的。

* * *

## 五、真实案例：AI Agent 分配公共物品资助

Ethereum Foundation 已试点让 AI agent 参与**分配数十万美元给数百个 GitHub 仓库**。  
模式：**人类决定价值观，agent 帮助规模化判断**，并持续迭代规则。  
这展示了如何为 agent 设置“护栏”，使其资本分配与人类激励对齐。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->







一、实现原理

1.  **Bittensor**：子网定义规则 → 矿工提供服务 → 验证者评分 → 链上结算 → 奖励
    
2.  **AgentKit**：用户目标 → LLM 拆解 → 选择链上动作 → 钱包签名 → 结果返回
    
3.  **Arkham**：采集交易 → 地址聚类 → 实体归因 → 资金流计算 → 分析视图
    
4.  **Blockaid**：打开 dApp/发起交易 → 扫描合约与 calldata → 模拟执行 → 匹配风险 → 警告/拦截
    
5.  **Chainalysis**：多链数据 → 实体归因 → KYT 实时监控 → 异常告警 → 合规处置
    

二、风险边界

1.  **模型 ≠ 执行权**：资金动作必须有授权、限额、确认和撤销，否则 prompt injection 可致损失。
    
2.  **链上标签不是法律事实**：地址聚类和风险评分都有误差，机构需人工复核。
    
3.  **去中心化资源要验证质量**：发 token 不等于有可靠 SLA，核心是反作弊、可用性和隐私。
    
4.  **钱包体验不能牺牲安全**：免助记词/免 gas 会引入托管边界和权限滥用风险。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->








| 方向 | 解决什么问题 | 主案例 | 核心原理 |
| --- | --- | --- | --- |
| 1. 去中心化 AI 基础设施 | 算力、存储、模型服务如何组织与激励 | Bittensor | Subnet 定义任务 → Miner 提供服务 → Validator 评估质量 → 链上共识 → Token 奖励优质供给 |
| 2. AI Agent + 钱包 | AI 如何获得链上执行能力 | Coinbase AgentKit | LLM 拆解任务 → AgentKit 选 action → 钱包签名广播 → 链上结果返回 |
| 3. AI 链上分析工具 | 公开的链上数据如何变成可理解的情报 | Arkham | 地址聚类 → 实体归因 → 资金流追踪 → 生成画像和告警 |
| 4. 智能钱包 & 安全助手 | 普通用户如何安全签名、防钓鱼 | Blockaid | 扫描域名/合约 → 模拟交易 → 匹配恶意模式 → 钱包拦截或警告 |
| 5. 交易所/DeFi 风控 | 机构如何发现异常交易和系统性风险 | Chainalysis | 采集多链数据 → 实体归因 + 风险分类 → KYT 实时监控 → 告警处置 |
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->









### 关键配置项

| 配置项 | 说明 | 推荐值 |
| --- | --- | --- |
| tools | 工具白名单 | 审查类用 Read, Grep；执行类用 Read, Write, Edit |
| disabledTools | 禁用工具 | 审查任务禁用 Write, Edit |
| model | 模型选择 | 简单任务用 haiku；复杂分析用 sonnet/opus |
| description | 功能描述 | 明确说明何时触发该 Agent |
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->










## 支付系统：从Web2到Web3

**Web2支付（银行转账）**

-   信任银行和支付服务商
    
-   请求流：电商平台 → 支付服务 → 银行
    
-   资金流：用户账户 → 支付服务账户 → 商户账户
    
-   安全问题：API Key、支付密码、相互信任
    

**换成Web3（稳定币支付）**

-   从银行到区块链
    
-   不同链 = 不同银行
    
-   信任基础变了：从信任权威 → 信任算法（数据不可篡改、逻辑即代码、共识协议）
    
-   认证方式：从API Key → **私钥签名**
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
