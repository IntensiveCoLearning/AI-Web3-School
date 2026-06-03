---
timezone: UTC+8
---

# vergissxie

**GitHub ID:** vergissxie

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->
````markdown
# Week 1 进阶主题：Agent Workflow、Web3 工程化、模型适配与链上执行

## 学习目标

这份笔记把 Week 1 的进阶内容分成 A-E 五个板块，目标是把 AI agent、Web3 工程化、模型适配、以太坊执行环境和最小交叉实验串起来。

一句话概括：

> AI × Web3 的关键不是“让 AI 帮你生成内容”，而是让 AI 在可观测、可回滚、可确认的边界内协助完成真实任务。

## 总览思维导图

```mermaid
mindmap
  root((Week 1 进阶 A-E))
    A Agent workflow 与 ETH skills
      Skills
      Tools
      State
      Logs
      Human confirmation
    B Web3 工程化与链上执行
      Hardhat
      Foundry
      viem
      wagmi
      OpenZeppelin
      Testnet feedback chain
    C AI 进阶
      Prompt
      Fine-tuning
      LoRA
      PEFT
      Unsloth
      Evaluation
    D Web3 进阶
      Blocks
      Consensus
      EVM
      Gas
      Protocol layer
      Execution layer
    E 最小交叉实验
      AI 生成
      人工复核
      钱包确认
      链上执行
      日志
      回滚策略
```

## A. Agent Workflow 与 ETH Skills

### 1. 核心理解

Agent 系统与 skills 的关系，可以理解为“执行系统”和“可复用作业手册”的关系。

单个 prompt 主要让模型回答问题；workflow 把步骤固定下来；agent 则可以围绕目标进行多轮组织、状态管理、工具调用和日志记录。skills 的价值在于把一类重复任务的步骤、边界、输出格式和安全规则固化下来，让 agent 不必每次从零理解任务。

对 ETH skills 来说，一个好 skill 不是“让 AI 自动转账”，而是让 AI 稳定完成某一类低风险、可检查的 Ethereum 任务，例如：

- 解释交易回执
- 分析钱包提示
- 生成测试网交互脚手架
- 检查合约 ABI 与前端调用是否匹配
- 总结某个地址的公开链上行为

### 2. Prompt、Workflow、Agent + Skills 对比

| 方式 | 决策方式 | 状态管理 | 工具调用 | 适合任务 | 风险 |
| --- | --- | --- | --- | --- | --- |
| 纯提示词 | 人决定，模型回答 | 无或很弱 | 通常没有 | 一次性解释、总结、改写 | 容易遗漏上下文 |
| AI coding 工具 / workflow | 流程预定义 | 有限 | 可调用文件、命令、测试 | 固定步骤开发、文档整理、demo 生成 | 流程错会重复地产生错结果 |
| Agent + skills | 模型参与规划，skills 限定套路 | 较强 | 动态调用 | 多轮任务、跨工具协作、长期维护 | 需要日志、权限和人工确认 |

### 3. 为什么越接近执行越需要 guardrails

从“回答问题”到“执行动作”，风险会快速上升。

| 层级 | 示例 | 需要的控制 |
| --- | --- | --- |
| 生成内容 | 总结一篇文档 | 人工阅读和事实核查 |
| 修改文件 | 生成 demo 或更新 README | git diff、测试、提交记录 |
| 调用工具 | 查询链上交易、运行脚本 | 工具参数检查、日志记录 |
| 发起链上动作 | 授权、转账、合约写入 | 钱包确认、限额、测试网优先 |
| 管理资金权限 | 多签、session key、自动化策略 | 多重审批、回滚计划、权限隔离 |

关键结论：

> 越接近资产、权限和不可逆操作，越不能只依赖模型判断。

### 4. ETH Skill 设计草案

```yaml
name: eth-transaction-reviewer
purpose: Help review Ethereum transaction details before human wallet confirmation.
inputs:
  - chain name
  - contract address
  - function name
  - calldata or ABI
  - estimated gas
  - wallet prompt screenshot or text
outputs:
  - action summary
  - risk checklist
  - human confirmation questions
  - explorer links after broadcast
boundaries:
  - never request private keys or seed phrases
  - never sign transactions
  - never auto-submit mainnet transactions
  - require human confirmation for approvals, transfers, and contract writes
reliable_for:
  - explaining transaction intent
  - checking visible parameters
  - producing a review checklist
not_reliable_for:
  - guaranteeing contract safety
  - proving absence of hidden risk
  - replacing wallet or hardware signer confirmation
```

### 5. 进阶挑战

同一个任务分别用三种方式完成，例如“解释一笔测试网交易并生成复盘”：

| 方式 | 做法 | 观察点 |
| --- | --- | --- |
| 纯提示词 | 粘贴交易信息，让模型解释 | 输出质量依赖输入完整度 |
| Workflow | 固定步骤：查 hash、读回执、提取字段、生成总结 | 可重复、可调试，但路径固定 |
| Agent + ETH skill | agent 根据 hash 调工具、读回执、按 skill 输出风险清单 | 更灵活，但必须限制工具和权限 |

记录时要回答：

- 哪种方式最快？
- 哪种方式最稳定？
- 哪种方式最容易审计？
- 哪些步骤必须人工确认？
- 哪些错误能回滚，哪些不能？

## B. Web3 工程化与链上执行

### 1. 核心理解

基础链上交互只是入口。真正困难的是权限设计、错误恢复和风险控制。

当任务从“测试网读数据”升级到“主网写合约”“代币授权”“多签资产管理”时，执行边界会立刻升级。你需要把测试网、区块浏览器、钱包提示、交易哈希、Gas、合约地址和交易回执串成一条完整反馈链。

### 2. 链上反馈链

```mermaid
flowchart LR
    A["本地代码或前端交互"] --> B["钱包提示"]
    B --> C{"人工确认？"}
    C -->|否| D["中止并记录原因"]
    C -->|是| E["广播交易"]
    E --> F["交易哈希"]
    F --> G["区块浏览器"]
    G --> H["交易回执"]
    H --> I{"成功？"}
    I -->|是| J["记录合约地址、事件、Gas"]
    I -->|否| K["分析 revert / gas / 参数错误"]
    K --> L["修复后回到测试网"]
```

### 3. 工具选择

| 工具 | 适合什么 | 学习重点 |
| --- | --- | --- |
| Hardhat | 最小合约开发、测试、部署、调试 | 项目结构、脚本、测试、部署流程 |
| Foundry | 快速 Solidity 测试、脚本、链上查询 | `forge`、`cast`、`anvil` |
| viem | TypeScript 低层链上交互 | client、transport、read/write contract |
| wagmi | 前端钱包连接与 React hooks | wallet connect、账户状态、交易交互 |
| OpenZeppelin Contracts | 安全合约复用 | 权限、token、升级、安全组件 |

### 4. 工程化底线

- 私钥和 RPC key 不进仓库
- 先本地链，再测试网，再考虑主网
- 合约地址、交易 hash、测试记录必须写入 repo
- 钱包提示和交易回执要能互相对应
- 失败交易也要记录原因，因为失败本身是学习材料

### 5. 进阶挑战

选择 Hardhat 或 Foundry 完成一个最小合约：

1. 写一个最小合约，例如 `Counter` 或 `MessageBoard`
2. 编写测试
3. 部署到本地链
4. 部署到测试网
5. 记录合约地址、交易 hash、Gas、测试结果
6. 在 `demos/` 中写复盘

如果已有前端能力，再用 viem / wagmi 做一个最小交互页：

- 连接钱包
- 读取链上状态
- 发起一次测试网写入
- 明确标注哪些步骤必须人工确认

## C. AI 进阶：模型适配、微调与可控性

### 1. 核心理解

微调通常不是从零训练模型，而是在已有模型上做能力适配、风格调整或任务对齐。

如果 prompt 能解决问题，先不要微调。微调适合解决“模型反复需要以稳定风格或固定任务模式输出”的问题，不适合解决实时知识、权限控制、工具执行和事实核查问题。

### 2. Prompt 与模型适配的边界

| 方案 | 适合解决 | 不适合解决 |
| --- | --- | --- |
| 改 prompt | 输出格式、任务说明、少量样例、短期实验 | 模型底层能力不足、风格长期不稳定 |
| RAG | 需要引用外部资料、知识经常变化 | 需要改变模型行为习惯 |
| LoRA / PEFT | 特定风格、领域表达、任务模式适配 | 实时知识更新、强安全保证 |
| 全量微调 | 深度能力适配 | 小团队低成本快速试错 |

### 3. LoRA / PEFT 的意义

LoRA 和 PEFT 的重点是降低微调门槛。它们通常只训练少量额外参数，而不是更新整个模型，因此更省显存、更容易保存和切换。

但门槛降低不代表风险消失。微调最容易出问题的地方是：

- 数据质量差
- 训练集和真实任务不匹配
- 没有评估集
- 过拟合
- 只看主观效果，不做对照实验

### 4. 本地模型、微调模型、托管模型对比

| 类型 | 成本 | 可控性 | 效果 | 维护复杂度 |
| --- | --- | --- | --- | --- |
| 托管模型 | 按 API 付费 | 中等 | 通常强 | 低 |
| 本地模型 | 硬件成本 | 高 | 取决于模型和设备 | 中高 |
| 微调模型 | 数据和训练成本 | 高 | 对特定任务可能更稳 | 高 |

### 5. 进阶挑战

选择一个微调方法，例如 LoRA / PEFT，写一页说明：

- 它适合解决什么问题？
- 不适合解决什么问题？
- 需要什么数据？
- 如何评估？
- 如何判断“只改 prompt”已经不够？

再输出一个短对比：

| 对比项 | 只改 prompt | 模型适配 |
| --- | --- | --- |
| 启动成本 | 低 | 中高 |
| 迭代速度 | 快 | 慢 |
| 稳定风格 | 一般 | 更强 |
| 新知识接入 | 需要上下文或 RAG | 不适合频繁更新 |
| 风险 | 提示词脆弱 | 数据污染和过拟合 |

## D. Web3 进阶：区块链底层、协议与执行环境

### 1. 核心理解

区块链不是一个普通数据库，EVM 也不是普通后端运行时。

要把协议层、执行层、账户层和应用层分开看：

| 层级 | 解决什么问题 | 例子 |
| --- | --- | --- |
| 协议层 | 网络规则、共识、安全假设 | PoS、区块、最终性 |
| 执行层 | 如何执行交易并改变状态 | EVM、Gas、交易回执 |
| 账户层 | 谁能发起动作，权限如何表达 | EOA、智能账户、多签 |
| 应用层 | 用户实际交互和业务逻辑 | dApp、钱包、前端 |

把这些层混成一个平面，就容易误以为“链上调用 = 普通 API 请求”。这是危险的。

### 2. 区块、共识、EVM、Gas 分别解决什么

| 概念 | 解决的问题 |
| --- | --- |
| 区块 | 把一批交易打包成可验证的状态更新单位 |
| 共识 | 决定谁来确认状态，如何降低分叉和作恶风险 |
| EVM | 为智能合约提供统一、确定性的执行环境 |
| Gas | 给计算和存储定价，同时限制无成本滥用 |

### 3. 链上执行不是普通后端调用

| 对比 | 普通后端 | 链上执行 |
| --- | --- | --- |
| 状态可见性 | 通常由服务端控制 | 公开可验证 |
| 执行成本 | 基础设施成本由服务方承担 | 用户或调用方支付 Gas |
| 失败处理 | 可重试、可补偿、可改库 | 失败也可能消耗 Gas |
| 权限控制 | 服务端鉴权 | 私钥签名、合约权限、多签 |
| 升级方式 | 服务器发版 | 合约升级受权限和架构限制 |

### 4. 进阶挑战

写一段说明，解释：

- 区块如何承载交易
- 共识如何确认状态
- EVM 如何执行合约
- Gas 为什么既是费用也是执行约束

再结合测试网体验，说明为什么链上执行不能简单理解成“普通后端调用”。

## E. 最小交叉实验升级

### 1. 核心 workflow

```mermaid
flowchart TD
    A["用户提出目标"] --> B["AI 生成方案或代码"]
    B --> C["人工复核"]
    C --> D{"通过复核？"}
    D -->|否| E["修改 prompt / 代码 / 参数"]
    E --> B
    D -->|是| F["测试网执行"]
    F --> G["记录日志：输入、输出、hash、错误"]
    G --> H{"测试网结果通过？"}
    H -->|否| I["定位失败点并回滚到安全状态"]
    I --> B
    H -->|是| J["钱包提示"]
    J --> K{"人工确认签名？"}
    K -->|否| L["中止，不广播交易"]
    K -->|是| M["链上执行"]
    M --> N["交易回执和区块浏览器复核"]
    N --> O["写入 repo 复盘"]
```

### 2. 失败点与回滚策略

| 阶段 | 失败点 | 回滚或处理 |
| --- | --- | --- |
| AI 生成 | 代码错误、参数错、误解目标 | 人工复核、测试、重新生成 |
| 测试网执行 | 合约 revert、Gas 不足、网络错误 | 保留日志，修复后重跑 |
| 钱包确认 | 用户看不懂提示、授权范围过大 | 中止交易，解释风险 |
| 链上执行 | 已广播但失败 | 记录回执和失败原因 |
| 主网动作 | 不可逆、资金风险 | 事前限额、多签、人工确认 |

### 3. 纯人工、AI 辅助、更自动化流程对比

| 方式 | 优点 | 风险 | 适合阶段 |
| --- | --- | --- | --- |
| 纯人工 | 控制感强，风险可理解 | 慢，容易漏记录 | 初学概念、关键资金操作 |
| AI 辅助 | 快速生成解释、代码和复盘 | 需要人工审查 | 学习、demo、测试网 |
| 更自动化流程 | 可重复、可规模化 | 需要强 guardrails | 低风险固定任务 |

### 4. 受限 Web3 助手设计

可以做的事情：

- 文档问答
- 交易解释
- 合约 ABI 说明
- 测试网交互脚手架
- 交易回执复盘
- 风险检查清单

不能自动执行的高风险动作：

- 读取、保存或要求用户提供私钥 / 助记词
- 自动签名
- 自动主网转账
- 自动无限授权
- 自动部署高权限合约
- 自动绕过钱包确认

### 5. AI × Web3 安全执行序列

```mermaid
sequenceDiagram
  participant U as User
  participant A as AI Agent
  participant R as Repo
  participant T as Testnet
  participant W as Wallet
  participant E as Explorer

  U->>A: Provide goal and constraints
  A->>R: Generate notes, code, or scripts
  U->>R: Review diff and tests
  R->>T: Run testnet interaction
  T-->>R: Return tx hash and receipt
  A->>U: Explain result and risks
  U->>W: Confirm only after review
  W->>T: Broadcast signed transaction
  T-->>E: Publish transaction data
  E-->>R: Evidence for logs and review
```

## 参考资料

- [OpenClaw repository](https://github.com/openclaw/openclaw)
- [OpenClaw Skills docs](https://openclawcn.com/en/docs/agent/skills/)
- [Hermes Agent docs](https://hermes-agent.app/en/docs)
- [Hermes Agent repository](https://github.com/nousresearch/hermes-agent)
- [OpenAI Agents SDK: Agents](https://openai.github.io/openai-agents-python/agents/)
- [OpenAI Agents SDK: Handoffs](https://openai.github.io/openai-agents-python/handoffs/)
- [OpenAI Agents SDK: Tracing](https://openai.github.io/openai-agents-python/tracing/)
- [Hardhat](https://hardhat.org/)
- [Foundry Getting Started](https://getfoundry.sh/introduction/getting-started/)
- [viem Getting Started](https://viem.sh/docs/getting-started)
- [wagmi docs](https://docs.wagmi.com/wagmi)
- [OpenZeppelin Docs](https://docs.openzeppelin.com/)
- [Hugging Face Transformers Fine-tuning](https://huggingface.co/docs/transformers/training)
- [Hugging Face PEFT LoRA](https://huggingface.co/docs/peft/developer_guides/lora)
- [Unsloth Docs](https://docs.unsloth.ai/)
- [Ethereum Blocks](https://ethereum.org/en/developers/docs/blocks/)
- [Ethereum Proof of Stake](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/)
- [Ethereum EVM](https://ethereum.org/en/developers/docs/evm/)
- [Ethereum Gas and Fees](https://ethereum.org/en/developers/docs/gas/)
````
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->

````markdown
# Week 1 模块 B：Web3 基础，账户、钱包、签名与链上执行

## 学习目标

本模块要建立一条链路：

从“钱包是什么”出发，理解账户、地址、助记词、私钥、签名、交易、Gas、合约、主网与测试网之间的关系，并明确 AI × Web3 构建者必须遵守的安全边界。

一句话概括：

> 钱包是链上动作入口，不是普通登录账号；签名是在授权具体动作；链上执行公开、可验证、但有成本和风险。

## 思维导图

```mermaid
mindmap
  root((Web3 基础))
    账户与钱包
      钱包不是普通账号
      私钥
      安全责任
      链上动作入口
      地址
      账户
    核心密钥
      助记词
      私钥
      地址
      不可泄露
    安全边界
      地址不等于匿名
      签名不等于普通登录
      授权不等于转账
      AI 不能直接接触私钥
      人工确认
    签名与交易
      签名是授权具体动作
      交易提交链上
      交易回执
      区块浏览器
    Gas 与执行
      成本
      失败
      等待确认
      L1
      L2
    合约与后端
      状态公开
      执行公开
      升级权限可检查
      部分合约不可更改
    主网与测试网
      学习先测试网
      再上主网
    进阶基础设施
      账户抽象
      智能账户
      多签
      Safe
      ERC-4337
      OpenZeppelin
    AI-native Account
      恢复
      授权
      Session Key
      权限限额
      社交恢复
      邮件恢复
      人工确认
```

## 1. 账户、地址和钱包的关系

这三个词经常被混用，但它们不是一回事。

| 概念 | 更准确的理解 | 常见误解 |
| --- | --- | --- |
| 账户 | 链上主体，可以持有资产和状态 | 以为只是一个用户名 |
| 地址 | 账户的公开标识，别人用它转账或交互 | 以为地址本身就是“身份” |
| 钱包 | 管理私钥并发起链上动作的工具 | 以为钱包只是一个登录页 |

钱包不是普通账号。它背后对应的是私钥、安全责任和链上动作入口。

你可以把它理解为：

- 账号是“谁”
- 地址是“公开可用的收款/交互标识”
- 钱包是“拿着钥匙去执行动作的工具”

## 2. 助记词、私钥、地址分别是什么

| 项目 | 作用 | 风险等级 |
| --- | --- | --- |
| 助记词 | 生成和恢复私钥的高敏感备份 | 极高 |
| 私钥 | 用来签名和控制账户的核心秘密 | 极高 |
| 地址 | 对外公开的链上标识 | 低，但可被追踪 |

### 为什么不能泄露

- 泄露助记词或私钥，就可能直接失去资产控制权
- 一旦私钥暴露，攻击者可以代你签名、授权、转账、调用合约
- 区块链交易通常不可逆，出事后很难像普通账号那样“找回密码”

结论很简单：

> 助记词和私钥都不能发给任何人，也不能交给 AI agent 代管。

## 3. 面向 AI × Web3 构建者的安全底线

### 三个最容易混淆的判断

| 判断 | 正确理解 |
| --- | --- |
| 地址并不等于匿名 | 地址可被链上行为、关联地址、交易模式追踪 |
| 签名并不等于普通登录 | 签名是在授权某个具体动作，不是简单“进系统” |
| 授权并不等于转账 | 授权通常是允许合约花费代币，不是直接转出资产 |

### AI Agent 的安全红线

- AI agent 不应直接接触私钥或助记词
- 涉及签名、授权、转账、合约写入的动作必须保留人工确认
- 自动化只能覆盖低风险、可回滚、可审计的步骤
- 关键操作前要让用户看懂“做什么、花多少钱、影响什么”

可以把 AI agent 看成“副驾驶”，不是“全权司机”。

## 4. 签名与交易的关系

签名不是“点一下确认”这么简单，它是在对某个具体动作进行授权。

常见链上动作包括：

- 转账
- 代币授权
- 合约调用
- NFT 铸造
- 多签确认

流程上通常是：

1. 钱包构造待签名消息或交易
2. 用户确认
3. 私钥生成签名
4. 交易被广播到网络
5. 节点和验证者处理
6. 出现交易回执和最终状态

## 5. Gas、失败和等待确认

Gas 是链上执行的成本单位。只要你在链上做事，就通常要为计算、存储和执行资源付费。

### 为什么会有成本

- 链上计算需要全网验证
- 存储状态需要长期保留
- 资源有限，所以需要成本机制来约束滥用

### 为什么会失败

- 余额不足
- Gas 估算不足
- 合约逻辑 revert
- 交易参数不合法
- 网络拥堵或链上状态变化

### 为什么要等待确认

交易广播后，不代表立刻最终成功。通常要等区块打包和确认，才能更稳定地把它看作已执行。

## 6. L1 / L2 与执行成本

| 层级 | 特点 | 适用理解 |
| --- | --- | --- |
| L1 | 安全性高、基础结算层、通常更贵 | 适合最终结算和高信任场景 |
| L2 | 通过扩展方案降低成本并提升吞吐 | 适合高频交互和更低成本实验 |

简单记忆：

- L1 更像“底层法庭”
- L2 更像“更便宜的执行层”

对构建者来说，选择哪一层会直接影响成本、确认速度、用户体验和开发策略。

## 7. 智能合约与普通后端逻辑的差异

智能合约不是普通后端。

| 维度 | 普通后端 | 智能合约 |
| --- | --- | --- |
| 状态 | 私有或服务端可控 | 公开可见、链上可验证 |
| 执行 | 服务端内部执行 | 链上公开执行 |
| 升级 | 比较灵活 | 取决于设计和权限 |
| 可更改性 | 通常更容易改 | 部分合约部署后不可更改 |
| 责任边界 | 运维和应用逻辑 | 代码即规则，影响资产安全 |

这意味着 Web3 代码要更重视：

- 安全
- 可审计性
- 权限设计
- 升级策略
- 失败回滚思路

## 8. 主网与测试网

主网是真实资产环境，测试网是学习和实验环境。

### 学习原则

1. 先在测试网完成交互、调试和流程验证
2. 确认签名、Gas、合约调用、钱包提示都理解了，再碰主网
3. 主网实验要非常克制，关键动作尽量人工确认

一句话：

> 不要拿主网当练习场。

## 9. 区块浏览器、钱包提示和交易回执

这些工具是理解链上行为的窗口。

| 工具 | 能帮助你看什么 |
| --- | --- |
| 区块浏览器 | 交易状态、哈希、区块、合约、事件、地址关联 |
| 钱包提示 | 你到底在签什么、授权什么、花多少 gas |
| 交易回执 | 这笔交易是否成功、消耗了多少 gas、发生了什么日志 |

构建者应养成的习惯：

- 签名前看清楚交易内容
- 发出去后查看回执
- 出问题时去浏览器查状态和事件

## 10. 高级延展：为什么这些基础设施很关键

这些关键词在 AI × Web3 里很重要，因为它们都在解决“如何安全地把自动化能力接到资产和权限上”。

| 关键词 | 作用 |
| --- | --- |
| 账户抽象 | 让账户更像可编程主体 |
| 智能账户 | 将权限和行为封装进账户逻辑 |
| 多签 | 用多个签名共同控制风险 |
| Safe | 常见的多签和资产管理方案 |
| ERC-4337 | 账户抽象的重要实现方向 |
| OpenZeppelin Contracts | 常用的合约安全与标准基础设施 |

这些组件的重要性在于，它们把“账户”从单一私钥控制，逐步升级成“可恢复、可分权、可审计、可限制”的系统。

## 11. 从钱包到 AI-native Account

AI-native Account 的核心不是“让 AI 拿到钥匙”，而是“让 AI 在严格边界内协助执行”。

### 典型能力

- 恢复
- 授权
- Session Key
- 权限限额
- 社交恢复
- 邮件恢复
- 人工确认

### 正确方向

- 让 AI 帮忙准备交易内容、检查风险、解释影响
- 让人类保留最终签名和高风险动作确认
- 用权限限额和 session key 缩小自动化暴露面

### 错误方向

- 把助记词直接交给 agent
- 让 agent 无审查地自动转账
- 让 agent 在主网做不可逆的大额动作

## 12. 常见问题

### Q1：地址公开是不是等于匿名？

不是。地址虽然不直接暴露真实姓名，但链上行为是可追踪的，地址之间也可能被关联。

### Q2：签名是不是等于登录？

不完全是。某些 Web3 场景把签名用于登录，但本质上它仍是在授权某个动作或证明控制权。

### Q3：授权和转账有什么区别？

授权通常是允许某个合约花费你的代币，转账是直接把资产转给别人。两者风险不一样。

### Q4：为什么 AI agent 不能拿私钥？

因为私钥一旦被系统完整接触，就扩大了攻击面，也放大了误操作和泄露风险。

### Q5：测试网和主网差在哪？

测试网一般用来学习和调试，不涉及真实价值；主网涉及真实资产，风险更高。

### Q6：为什么链上操作总在强调确认？

因为链上执行成本高、不可逆性强、权限影响大。确认是人为最后一道安全阀。

## 13. 本模块学习产出建议

建议把模块 B 的学习成果沉淀为：

- `notes/week1-module-b-web3-basics.md`
- `prompts/week1-module-b-note-prompt.md`
- `logs/YYYY-MM-DD-week1-module-b-agent-log.md`
- `demos/` 中的一个小型钱包或测试网 demo
- `resources.md` 中的 Web3 安全与账户抽象资料

## 参考资料

- [OpenZeppelin Docs](https://docs.openzeppelin.com/)
- [ERC-4337 overview](https://eips.ethereum.org/EIPS/eip-4337)
- [Safe Docs](https://docs.safe.global/)
- [Ethereum.org accounts](https://ethereum.org/en/developers/docs/accounts/)
- [Ethereum.org transactions](https://ethereum.org/en/developers/docs/transactions/)
````
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->


````markdown
# Week 1 模块 A：AI 基础，从 LLM 到 Agent Workflow

## 学习目标

本模块的目标是建立一条完整认知链路：

从理解“大模型是什么”，到知道“如何调用 LLM API”，再到分清 “Prompt、Workflow、Agent” 的边界，最后能判断什么时候该用 agent，什么时候不该过度 agent 化。

一句话概括：

> LLM 本身负责基于上下文生成内容；workflow 负责把任务流程固定下来；agent 则让模型在目标约束下动态规划、调用工具、管理状态。

## 思维导图

```mermaid
mindmap
  root((AI 基础：LLM 到 Agent Workflow))
    LLM 基本原理
      上下文概率生成
      预测下一个 token
      擅长语言理解
      擅长代码生成
      擅长一定程度推理
      不擅长精确事实记忆
      不擅长确定性计算
      不保留跨会话状态
    四个控制层
      上下文窗口
        工作内存
        决定模型能看到什么
      系统指令
        身份
        语气
        边界
      提示词
        当前任务意图
        输出要求
      工具调用
        从说话变为做事
        连接外部系统
    LLM API
      MaaS
      API Key
      按 token 计费
      model
      messages
      temperature
      max_tokens
    Prompt Workflow Agent
      Prompt
        人决策
        模型回答
      Workflow
        固定流程
        模型是节点
      Agent
        自主规划
        动态工具调用
        跨轮状态
    验证与风险
      事实错误
      引用错误
      推理漂移
      执行越权
      工具误用
    Agent 组件
      State
      Memory
      MCP
      Skills
      Tool Calling
      Tracing
      Guardrails
      Handoff
      Recovery
```

## 1. LLM 是什么

LLM，全称 Large Language Model，大语言模型。它的核心能力不是“查数据库”，也不是“真正理解世界”，而是：

> 在给定上下文中，预测最合理的下一个 token 序列。

这里的 token 可以粗略理解为文本片段。模型看见前面的内容后，会根据训练中学到的统计模式、语义关系和推理模式，生成后续内容。

### LLM 擅长什么

| 能力 | 解释 |
| --- | --- |
| 语言理解 | 能总结、改写、翻译、分类、提取关键信息 |
| 代码生成 | 能根据上下文写样板代码、解释库用法、辅助调试 |
| 模式迁移 | 能把一个例子中的结构迁移到新任务里 |
| 初步推理 | 能完成多步骤分析，但需要拆解和验证 |

### LLM 不擅长什么

| 短板 | 原因 |
| --- | --- |
| 精确事实记忆 | 模型参数不是实时数据库，知识可能过期或混淆 |
| 确定性计算 | 生成式模型会“估算式输出”，复杂计算应交给工具 |
| 引用可靠性 | 可能编造论文、链接、作者或数据来源 |
| 跨会话状态 | 模型默认不记得上次对话，除非系统提供记忆机制 |

## 2. 四个控制层面

使用 LLM 时，可以把控制方式分成四层。

| 控制层 | 负责什么 | 类比 |
| --- | --- | --- |
| 上下文窗口 | 模型当前能看到多少信息 | 工作内存 |
| 系统指令 | 设置身份、语气、边界和规则 | 角色设定与行为规范 |
| 提示词 | 表达当前任务、输入材料和输出格式 | 当前任务单 |
| 工具调用 | 让模型调用外部能力并获得结果 | 手、眼睛和仪表盘 |

关键理解：

上下文窗口不是长期记忆。它只是本轮能看到的材料。如果重要信息没有放进上下文，模型就无法稳定使用它。

系统指令比普通提示词更像“运行规则”。它通常用来定义 agent 的身份、禁止事项、工具边界、输出风格和安全规则。

提示词是任务级输入。它决定这一次要做什么、材料是什么、输出成什么格式。

工具调用把模型从“只会说话”变成“可以行动”。例如读文件、查网页、跑测试、访问数据库、调用 API。

## 3. 动手调用 LLM API

MaaS，即 Model as a Service，意思是把大模型作为云服务调用。你不需要自己买 GPU、部署模型，只需要使用 API Key，按 token 计费。

一次最小调用通常包含：

| 参数 | 作用 |
| --- | --- |
| `model` | 选择要调用的模型 |
| `messages` | 提供系统指令、用户输入和历史上下文 |
| `temperature` | 控制随机性，越低越稳定，越高越发散 |
| `max_tokens` | 控制最多生成多少 token |

建议学习路径：

1. 先从 OpenAI、Anthropic 或 GLM 的官方 Quick Start 跑通第一个请求。
2. 只改一个变量，例如先固定 `model` 和 `messages`，再比较不同 `temperature` 的输出差异。
3. 把一次 API 请求记录到 `demos/` 或 `logs/` 中，包括输入、输出、问题和改进。
4. 不要把 API Key 写进仓库。使用环境变量或本地配置文件。

## 4. Prompt、Workflow、Agent 的边界

这是本模块最重要的概念分界。

| 类型 | 决策者 | 路径是否固定 | 模型角色 | 适合场景 | 风险 |
| --- | --- | --- | --- | --- | --- |
| Prompt | 人 | 不涉及流程 | 回答者 | 一次性问答、总结、改写 | 输出可能错，但影响范围小 |
| Workflow | 人或系统设计者 | 固定 | 流程中的一个节点 | 固定步骤的批处理、审核流、报告生成 | 流程错会稳定地产生错结果 |
| Agent | 模型参与决策 | 动态 | 规划者和执行者 | 开放目标、多工具协作、迭代探索 | 行为更难预测，需要 guardrails |

### 从 Prompt 到 Agent 的流程图

```mermaid
flowchart TD
    A["用户目标"] --> B{"任务步骤能否提前写死？"}
    B -->|能| C["Workflow：固定流程"]
    B -->|不能| D{"是否需要多工具协作？"}
    D -->|不需要| E["Prompt：直接问答或生成"]
    D -->|需要| F{"中间结果是否会改变下一步？"}
    F -->|不会| C
    F -->|会| G["Agent：动态规划与执行"]
    G --> H["工具调用"]
    G --> I["状态管理"]
    G --> J["Tracing 与 Guardrails"]
```

## 5. AI Coding 工具的价值与限制

Claude Code、Codex CLI、Cursor 等工具的核心价值是把 LLM 放进真实开发环境里，让模型能读取代码、编辑文件、运行命令、解释错误。

### 能显著加速的事情

- 生成项目骨架和样板代码
- 解释陌生库、陌生框架和报错信息
- 快速写 demo 或 prototype
- 补充测试用例
- 整理文档、README、复盘记录
- 在已有代码风格下做小范围修改

### 不能完全替代的事情

- 架构取舍
- 安全边界设计
- 测试策略设计
- 代码审查责任
- 产品需求判断
- 对业务数据和真实用户影响的负责

更准确的心态是：

> AI coding 工具是能力放大器，不是责任转移器。

## 6. 为什么 AI 输出必须验证

AI 输出看起来流畅，不等于正确。越像“专业答案”，越要保持验证习惯。

| 风险 | 表现 | 应对方式 |
| --- | --- | --- |
| 事实错误 | 自信编造不存在的信息 | 关键事实外部核实 |
| 引用错误 | 编造论文、链接、数据来源 | 不直接信任模型给的引用 |
| 推理漂移 | 长上下文中结论偏离前提 | 分段验证、让模型列假设 |
| 执行越权 | agent 做了超出授权范围的操作 | 设置权限边界和人工确认 |
| 工具误用 | 调错工具或参数 | 使用 tracing 观察执行链 |

验证不是“怀疑 AI 没用”，而是把 AI 放进可靠工作流的一部分。

## 7. Agent 核心技术组件

Agent 不是单个 prompt。它通常是一组组件协作出来的系统。

| 组件 | 作用 | 简单理解 |
| --- | --- | --- |
| State 状态管理 | 多节点共享读写当前任务状态 | 当前任务的白板 |
| Long-term Memory 长期记忆 | 跨 session 存储与召回信息 | 笔记本或档案柜 |
| MCP | 统一连接外部工具和数据源 | 工具插座协议 |
| Skills | 可复用的高层指令和流程 | 标准作业手册 |
| Tool Calling | 模型输出结构化调用请求 | 让模型调用函数 |
| Tracing | 记录并可视化执行链 | 行动录像 |
| Guardrails | 输入输出校验与安全约束 | 护栏和红线 |
| Handoff | 子任务完成后移交控制权 | 交接单 |
| Error Recovery | 失败后的重试、回退、人工介入 | 故障恢复机制 |

### Agent 运行流程图

```mermaid
flowchart LR
    A["目标输入"] --> B["读取上下文和状态"]
    B --> C["规划下一步"]
    C --> D{"需要工具吗？"}
    D -->|否| E["生成回答或阶段结论"]
    D -->|是| F["Tool Calling"]
    F --> G["执行工具"]
    G --> H["回传结果"]
    H --> I["更新 State / Memory"]
    I --> J{"是否完成目标？"}
    J -->|否| C
    J -->|是| K["输出结果"]
    C --> L["Guardrails 检查"]
    G --> M["Tracing 记录"]
    H --> M
```

## 8. 什么时候需要 Agent

适合 agent 的信号：

- 目标开放，无法提前写死所有步骤
- 需要多工具协作，例如搜索、读文件、写代码、跑测试
- 中间结果会决定下一步策略
- 需要跨轮保存状态或长期积累资料
- 任务需要探索、试错、回退和迭代

不适合 agent，或应使用更简单方案的信号：

- 一次性问答：用 Prompt
- 流程固定：用脚本或 Workflow
- 强合规场景：加人工审核节点
- 数据确定性要求高：直接查数据库或调用确定性服务
- 风险高但收益低：不要为了“显得智能”而 agent 化

判断口诀：

> 步骤固定就 workflow，答案一次性就 prompt，路径会变且要用工具才考虑 agent。

## 9. 常见问题解释

### Q1：LLM 为什么会“幻觉”？

因为它的核心机制是生成最合理的文本序列，而不是从事实数据库中逐条检索。只要上下文不足、训练记忆混淆或任务要求过强，模型就可能生成看似可信但实际不存在的信息。

### Q2：上下文窗口越大，模型就越聪明吗？

不一定。大上下文能让模型看到更多材料，但不保证它会正确关注重点。长上下文还可能带来信息干扰和推理漂移，所以长材料要分段处理、结构化摘要、逐步验证。

### Q3：temperature 应该怎么设？

如果任务要求稳定、准确、格式一致，使用较低 temperature。如果任务要求创意、发散、头脑风暴，可以提高 temperature。学习和编码场景通常优先稳定。

### Q4：Tool Calling 和 Agent 是一回事吗？

不是。Tool Calling 是一种能力：模型可以请求调用工具。Agent 是一种系统形态：模型会围绕目标进行规划、选择工具、读取结果、更新状态并继续下一步。Agent 通常使用 Tool Calling，但 Tool Calling 本身不等于 Agent。

### Q5：为什么 coding agent 写完代码还要人审？

因为 agent 可能误解需求、漏掉边界条件、写出看似通过但不可维护的代码，或者没有覆盖真实业务风险。人仍然要负责架构判断、测试设计、安全边界和最终合并。

### Q6：如何降低 agent 失控风险？

关键是把权限、状态和验证机制设计清楚：限制可用工具，明确禁止事项，关键操作要求人工确认，记录 tracing，输出前跑测试或做格式校验。

## 10. 本模块学习产出建议

建议把 Week 1 模块 A 的学习成果沉淀成四类文件：

- `notes/week1-module-a-ai-basics.md`：本笔记
- `prompts/week1-module-a-note-prompt.md`：把课程材料整理成结构化笔记的 prompt
- `logs/YYYY-MM-DD-week1-module-a-agent-log.md`：一次 agent 协作日志
- `resources.md`：补充 Mermaid、LLM API、agent 工具相关资料

## 参考资料

- [GitHub Docs: Creating diagrams](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams)
- [Mermaid Docs: Mindmap](https://mermaid.js.org/syntax/mindmap.html)
- [Agents365-ai/mermaid-skill](https://github.com/Agents365-ai/mermaid-skill)
````
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
