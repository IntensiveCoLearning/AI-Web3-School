---
timezone: UTC+8
---

# Tiya丶Degurechaff

**GitHub ID:** tiyadegure

**Telegram:** @tiyadegure

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->
[https://github.com/tiyadegure/ai-web3-school-cohort-0/blob/master/daily/2026-05-25.md](https://github.com/tiyadegure/ai-web3-school-cohort-0/blob/master/daily/2026-05-25.md)
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->

[https://github.com/tiyadegure/ai-web3-school-cohort-0/blob/master/daily/2026-05-24.md](https://github.com/tiyadegure/ai-web3-school-cohort-0/blob/master/daily/2026-05-24.md)
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->


[https://github.com/tiyadegure/ai-web3-school-cohort-0/blob/master/daily/2026-05-23.md](https://github.com/tiyadegure/ai-web3-school-cohort-0/blob/master/daily/2026-05-23.md)
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->



[https://github.com/tiyadegure/ai-web3-school-cohort-0/blob/master/daily/2026-05-22.md](https://github.com/tiyadegure/ai-web3-school-cohort-0/blob/master/daily/2026-05-22.md)
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->




# Daily Note — 2026-05-21

## Today’s Focus

Day 4 — AI × Web3 Bridge 阶段，Chain-aware Context 深度学习。

## Handbook Reading

-   **Chapter**: [Chain-aware Context](https://aiweb3.school/zh/handbook/bridge/chain-aware-context/)
    
-   **Key Takeaways**:
    

### 一句话定义

让 AI 在回答或行动前，能看见正确的链、地址、合约、交易、事件、余额、授权和数据来源，而不是只靠用户一句话猜测链上状态。

### 为什么重要？

普通 AI 的上下文来自文档、聊天、数据库。AI × Web3 多了一层：链上状态持续变化，且直接关联资产、权限和交易执行。Agent 不知道 chain id、合约地址、用户授权、交易历史，就可能给出错误建议，甚至生成危险交易。

### 4 条第一性原理

1.  模型不能凭记忆判断链上事实 — 必须从工具和索引层读取
    
2.  链上状态有时间性 — 余额、授权、仓位随区块变化，上下文必须带时间戳
    
3.  上下文要带来源 — 合约地址、区块号、交易哈希、explorer 链接都要可追溯
    
4.  区分事实和解释 — 工具返回事实，模型负责解释，不要把猜测当事实
    

### 知识节点（7 个）

**On-chain Data**（初级） 余额、交易、日志、合约状态。至少带 chain id、block number、contract address、method、返回值、读取时间。

**Contract Docs**（初级） ABI 只有函数签名，没有业务语义。需要文档、NatSpec、审计报告补足。文档可能过期，仍需链上验证。

**ABI / Event**（中级） ABI 让工具编码调用、解码返回值。Event 是合约留下的业务日志（Transfer、Swap、VoteCast）。能调用 ≠ 应该调用。

**Transaction History**（中级） 判断用户是否授权、策略是否执行、地址是否高风险。至少保留 tx hash、block number、from、to、method、value、token transfers、logs。

**Explorer Context**（初级） 区块浏览器提供可检查入口。给 explorer link 比只说"交易成功"更可靠。

**Indexing Context**（中级） 把事件整理成产品查询层（“用户最近 30 天 DeFi 操作”）。必须带时间戳和同步状态，落后 500 区块的数据不能当当前事实。

**Citation**（初级） 让回答能回到链上证据。没有 citation 的链上解释只能算观点。

### 在 AI × Web3 中的位置

Chain-aware Context 是所有链上 Agent 的输入层。没有这层，Web3 Tool Use、Agent Workflow、Agent Wallet 都建立在不可靠上下文上。

## Tasks & Progress

-   \[x\] 深入阅读 Chain-aware Context 章节
    
-   \[x\] 整理结构化学习笔记
    
-   \[x\] 完成最小实践：给一笔交易做上下文包
    
-   \[x\] 产品研究视角思考：调研 10 个 AI × Web3 产品的 chain-aware context 做法
    
-   \[x\] 参加 5.21「AI 下乡计划｜AI 在 Web3 的应用」线上活动 → submission `cmpfjmn0y5j36mu01qvlwjpq6`
    

## Online Events (5.21)

-   **AI 下乡计划｜AI 在 Web3 的应用** — 20:00-21:00 (北京时间)
    
    -   主题：AI 在真实场景中的使用方式，Web3 如何提供身份、协作、支付或验证能力
        
    -   课前准备：准备一个你关心的 AI × Web3 应用场景或问题
        
    -   Zoom：[https://us06web.zoom.us/j/86149162743?pwd=xAlaafMqGuFKmSrTn1HENJaayvos4D.1](https://us06web.zoom.us/j/86149162743?pwd=xAlaafMqGuFKmSrTn1HENJaayvos4D.1)
        
    -   X 直播：[https://x.com/i/broadcasts/1kJzDMjMVBwKv](https://x.com/i/broadcasts/1kJzDMjMVBwKv)
        
    -   关联任务 ID：cmp9vkvbo0p1emw01adwug86i、cmp9vkvhj0p1hmw01g71iunsq
        

## Questions & Observations

-   产品研究视角：现有 AI × Web3 产品如何构建 chain-aware context？Citation 机制做得好不好？
    
-   索引层实时性如何保证？落后多少区块算"可接受"？
    
-   ABI 能调用 ≠ 应该调用 — 权限、余额、allowance、slippage、simulation、policy 检查缺一不可
    

## Handbook Feedback

4 条已提交到 handbook-feedback/ 目录（详见 git 记录）。

## 活动笔记：AI 下乡计划｜AI 在 Web3 的应用

> 主讲：C ELON · 158 人参加 · Zoom + X 直播

### Agent 经济栈五层框架

| 层级 | 解决的问题 | 代表项目 |
| --- | --- | --- |
| 底层资源 | AI 服务从哪里来 | Bittensor、Render、Akash |
| 经济账户 | Agent 怎么执行 | Coinbase AgentKit、MoonPay |
| 认知工具 | 链上数据怎么看懂 | Arkham、Nansen、Dune |
| 安全防线 | 用户怎么不被骗 | Blockaid、Rabby、Safe |
| 系统风控 | 机构怎么监控风险 | Chainalysis、Forta、Chaos Labs |

**核心判断：** AI 负责理解与决策，Web3 负责身份、支付、结算和审计。

### 与 Chain-aware Context 的关联

-   Chain-aware Context = 认知工具层（Arkham、Nansen、Dune 的核心能力）
    
-   ABI/Event/Transaction History = 认知工具层的底层数据结构
    
-   Citation 机制 = 安全防线层的信任基础
    
-   事实 vs 解释分层 = 系统风控层的合规要求
    

### 关键洞察

1.  Agent 需要经济账户 — 没有钱包只能推荐，有钱包才能支付/交易/收款
    
2.  链上数据公开 ≠ 可理解 — AI 的价值在清洗/标签/解释
    
3.  安全能力会成为钱包默认基础设施
    
4.  Token 不是价值本身 — 价值在于可授权、可结算、可审计的经济系统
    

### 风险边界

-   模型 ≠ 执行权（prompt injection → 资金损失）
    
-   链上标签 ≠ 法律事实（概率判断，需人工复核）
    
-   去中心化资源要验证质量
    
-   钱包体验不能牺牲安全
    

## Check-in Draft

**今日学习内容**: 进入 AI × Web3 Bridge 阶段，深度阅读 Chain-aware Context 章节。理解链上状态如何进入 Agent 上下文，掌握 7 个知识节点：On-chain Data、Contract Docs、ABI/Event、Transaction History、Explorer Context、Indexing Context、Citation。

**收获与思考**: Chain-aware Context 是所有链上 Agent 的输入层。核心原则：模型不能凭记忆判断链上事实，必须从工具层读取；链上状态有时间性，上下文必须带时间戳和来源；区分事实和解释，工具返回事实，模型负责解释。对产品研究的启示：Citation 机制是衡量 AI × Web3 产品质量的关键指标。

**明日计划**: 阅读 Web3 Tool Use 章节，理解 RPC、钱包、合约工具如何被 Agent 调用。

* * *

-   WCB Learning: [https://web3career.build/zh/programs/AI-Web3-School#tab=learning](https://web3career.build/zh/programs/AI-Web3-School#tab=learning)
    
-   Handbook: [https://aiweb3.school/zh/handbook/](https://aiweb3.school/zh/handbook/)
    
-   Chapter: [https://aiweb3.school/zh/handbook/bridge/chain-aware-context/](https://aiweb3.school/zh/handbook/bridge/chain-aware-context/)
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->





# Daily Note – 2026-05-20

## Today’s Focus

Day 3 – Web3 practical tasks (testnet transaction, smart contract deployment), online events.

## Handbook Reading

-   **Chapters**: Web3 实操相关章节复习
    
-   **Key Takeaways**:
    
    -   EOA vs Smart Account vs Multisig 权限模型差异
        
    -   测试网交易流程：钱包签名 → RPC广播 → 验证者打包 → 确认
        
    -   智能合约生命周期：编写 → 编译 → 部署 → 交互
        

## Tasks & Progress

-   \[ \] 完成一笔测试网交易 (20pts) → submission pending
    
-   \[ \] 部署或调用一个最小智能合约 (30pts) → submission pending
    
-   \[ \] 比较 EOA/智能账户/多签权限差异 (30pts) → submission pending
    
-   \[ \] 画出 AI×Web3 最小交叉流程图 (30pts) → submission pending
    
-   \[ \] 参加 5.20 线上活动 → submission pending
    

## Online Events (5.20)

-   **Web3 运行原理** (17:00-18:00, Zoom: 86334195288)
    
-   **Co-learning 任务推进与答疑** (19:00-20:00, Zoom: 89182753424)
    

## Testnet Preparation

### MetaMask Setup Checklist

-   \[ \] Install MetaMask Chrome extension
    
-   \[ \] Create wallet and save recovery phrase
    
-   \[ \] Add Sepolia testnet (Chain ID: 11155111)
    
-   \[ \] Get test ETH from faucet ([sepoliafaucet.com](http://sepoliafaucet.com))
    
-   \[ \] Export private key to .env file
    

### Task Files Created

-   `tasks/week1-testnet-setup.md` – MetaMask + Sepolia configuration guide
    
-   `tasks/week1-testnet-tx.md` – Testnet transaction task guide
    
-   `tasks/week1-smart-contract.md` – Smart contract deployment guide
    
-   `tasks/week1-eoa-comparison.md` – EOA vs Smart Account vs Multisig comparison
    
-   `tasks/week1-cross-flow.md` – AI x Web3 cross-flow diagram guide
    

## Questions & Observations

-   测试网交易需要 Sepolia ETH，Binance Wallet 不支持测试网
    
-   MetaMask 是最可靠的选择，支持自定义网络
    
-   智能合约部署需要 0.002-0.01 ETH gas 费
    
-   EOA vs Smart Account vs Multisig 的关键区别在于权限控制模型
    

## Check-in Draft (残酷共学打卡)

**今日学习内容**: 完成 Web3 实操环境搭建：安装 MetaMask 钱包、配置 Sepolia 测试网、通过 PoW 水龙头领取 0.062 ETH 测试币。完成第一笔测试网交易（发送 0.001 ETH 给自己），交易在 Sepolia 网络上确认成功。参加两场线上活动：「Web3 运行原理」和「Co-learning 任务推进与答疑」。整理了 EOA/智能账户/多签对比分析、AI×Web3 交叉流程图等任务文档。

**收获与思考**: 测试网交易流程与主网完全一致：钱包签名 → RPC 广播 → 验证者打包 → 链上确认。区别在于测试 ETH 免费且无真实价值，适合学习和调试。MetaMask 是最主流的浏览器钱包，支持自定义网络添加。水龙头有多种类型：Alchemy 需要主网余额，PoW 水龙头通过浏览器挖矿免费获取，适合没有主网 ETH 的新手。

**明日计划**: 完成智能合约部署（SimpleStorage）、EOA/智能账户/多签权限对比分析、AI×Web3 交叉流程图绘制。继续参加线上活动。

* * *

-   WCB Learning: [https://web3career.build/zh/programs/AI-Web3-School#tab=learning](https://web3career.build/zh/programs/AI-Web3-School#tab=learning)
    
-   Handbook: [https://aiweb3.school/zh/handbook/](https://aiweb3.school/zh/handbook/)
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->






# Daily Note — 2026-05-19

## Today’s Focus

Day 2 — AI/Web3 concept cards, interactive demo, Hermes event.

## Handbook Reading

-   **Chapters**: AI 基础概念卡片 (8 chapters) + Web3 基础概念卡片 (10 chapters)
    
-   **Key Takeaways**:
    
    -   AI Agent 核心机制是四步循环：理解目标→调用工具→观察结果→修正执行
        
    -   MCP 是 AI × Web3 的缺失管道层，标准化模型与链上工具的连接
        
    -   Account Abstraction 让账户规则可编程，超越单一私钥控制
        

## Tasks & Progress

-   \[x\] AI 基础概念卡片 (8 chapters) → submission `cmpcj8rn82yzxtl017srs3pmm`
    
-   \[x\] Web3 基础概念卡片 (10 chapters) → submission `cmpck4b9h31y2tl01uo50txay`
    
-   \[x\] AI 可交互学习产物 (Transaction Explainer demo) → submission `cmpckvf0834actl01bnv0qqjk`
    
-   \[x\] 参加 5.19 Hermes 活动 → submission `cmpco766i3ps9tl012pizjatm`
    

## Online Events (5.19)

-   **AI Agent 入门 — Hermes 从 0 到 1** (20:00-21:00)
    
    -   AI Agent 核心运行机制：理解目标→调用工具→观察结果→修正执行
        
    -   这是一个 constrained execution loop，不是一次性回答问题
        
    -   与 Handbook Agent 章节完全吻合
        

## Questions & Observations

-   Agent 不是"更聪明的聊天机器人"，而是一个持续执行和自我调整的系统
    
-   Hermes 的使用路径：学习计划→repo→每日记录→任务提交→反馈，全部由 Agent 串联
    
-   测试网交易和合约部署是下周重点，需要提前准备钱包和环境
    

## Check-in Draft

**今日学习内容**: 整理 AI 基础概念卡片（8 章节：LLM、Prompt、Context、RAG、Agent、Frameworks、MCP、Evaluation）和 Web3 基础概念卡片（10 章节：Cryptography、Wallet、Smart Contract、Dev Stack、Network、Account Abstraction、DeFi、Oracle、Indexing、Security）。完成 AI 可交互学习产物 Transaction Explainer demo（连接 Sepolia 测试网，将原始交易数据翻译成人话）。参加「AI Agent 入门：Hermes 从 0 到 1」线上活动。

**收获与思考**: AI Agent 核心机制是四步循环：理解目标→调用工具→观察结果→修正执行，这是一个 constrained execution loop，不是一次性回答问题。MCP 是 AI × Web3 的缺失管道层，标准化了模型与链上数据/工具的连接方式，让任何 MCP 兼容的 AI agent 都能与区块链基础设施交互。

**明日计划**: 完成测试网交易和智能合约部署，画 AI × Web3 交叉流程图。

* * *

-   WCB Learning: [https://web3career.build/zh/programs/AI-Web3-School#tab=learning](https://web3career.build/zh/programs/AI-Web3-School#tab=learning)
    
-   Handbook: [https://aiweb3.school/zh/handbook/](https://aiweb3.school/zh/handbook/)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->







# Daily Note — 2026-05-18

## Today’s Focus

![屏幕截图 2026-05-18 213034.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/tiyadegure/images/2026-05-18-1779111656786-_____2026-05-18_213034.png)

Learning Agent 初始化 — 搭建学习仓库、制定学习计划。

## Handbook Reading

-   **Chapter**: [Handbook 首页](https://aiweb3.school/zh/handbook/)
    
-   **Key Takeaways**:
    
    -   Handbook 分四层：AI 基础 → Web3 基础 → AI × Web3 Bridge → 前沿探索
        
    -   不需要线性阅读，按自己的知识缺口选择路径
        
    -   产品研究方向：重点看 Agent Workflow、Agent Wallet、Chain-aware Context
        

## Tasks & Progress

-   \[x\] GitHub CLI 登录确认
    
-   \[x\] 创建学习仓库 `ai-web3-school-cohort-0`
    
-   \[x\] 初始化仓库结构（README, profile, plan, templates）
    
-   \[x\] 制定三阶段学习计划
    
-   \[x\] 配置 WCB Agent API
    
-   \[x\] 提交任务「创建课程 GitHub repo」→ submission `cmpb8bxos1oiemj013e6its0z`
    
-   \[x\] 提交任务「完成 Learning Agent Setup」→ submission `cmpb8bz321oigmj01m3xxecgy`
    
-   \[x\] 提交任务「完成课程工具准备」→ submission `cmpb8hbj71pmpmj018mvdc3ji`
    
-   \[x\] 提交任务「完成 Proof-of-Work 提交测试」→ submission `cmpb8kleq1qafmj01z4xcw3ft`
    
-   \[x\] 提交任务「建立 AI × Web3 行业信息流关注清单」→ submission `cmpb8kmva1qaqmj01596x1cs6`
    
-   \[x\] 提交任务「在 X 发布起点」→ submission `cmpb8wwqo01fztl016pv6k1sl`
    
-   \[x\] 提交任务「加入社群并完成自我介绍」→ submission `cmpb8wy8e01g5tl01kavt5iku`
    
-   \[x\] 提交任务「参加开营仪式」→ submission `cmpb8xcg001i5tl01aujvl69c`
    
-   \[x\] 提交任务「参加 5.18 AI 时代的 Web3 架构能力」→ submission `cmpb8wzih01gdtl01jgz3dmt9`
    
-   \[x\] 提交任务「参加 5.18 Co-learning」→ submission `cmpb8xjnb01ixtl01r21y3fek`
    

## Online Events (5.18)

-   **AI 时代的 Web3 架构能力** — 173 人参加，讨论跨链基础设施（Wormhole、Chainlink、Circle 在做去中心化跨链），LiFi、KelpDAO 等项目
    
-   **Co-learning** — 任务推进与答疑
    

## Questions & Observations

-   Handbook 内容很全面，需要先快速过一遍 AI 基础再深入 Web3 Bridge
    
-   Vibe Coding 和 MCP 这两个概念比较新，需要重点关注
    
-   跨链基础设施是热点方向，Wormhole/Chainlink/Circle 都在布局
    

## Check-in Draft

**今日学习内容**: 初始化 AI × Web3 School 学习环境，创建 GitHub 学习仓库，制定三阶段学习计划（Foundation → Bridge → Frontier），确认 Handbook 学习路径。

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/tiyadegure/images/2026-05-18-1779112529763-image.png)

**收获与思考**: Handbook 的四层结构很清晰，AI × Web3 Bridge 是核心交叉区域。作为产品研究方向，需要重点理解 Agent 如何与链上系统交互。

**明日计划**: 开始阅读 Handbook AI 基础第一章 — LLM（大语言模型）。

* * *

-   WCB Learning: [https://web3career.build/zh/programs/AI-Web3-School#tab=learning](https://web3career.build/zh/programs/AI-Web3-School#tab=learning)
    
-   Handbook: [https://aiweb3.school/zh/handbook/](https://aiweb3.school/zh/handbook/)
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
