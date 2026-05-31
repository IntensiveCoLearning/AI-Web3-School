---
timezone: UTC+8
---

# douwenquan

**GitHub ID:** douwenquan

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->
# Daily: 2026-05-31

> 完成 Week 2 全部模块 + 总交付 + Week 3 准备工作

* * *

## 今日完成

### Module D — Wallet / Permission（补完）

-   新增任务级授权与 Session Key 概念
    
-   新增完整 ASCII 执行流程图（标出自动/人工/紧急）
    

### Module E — DeFi Execution（新增）

-   回答核心问题：Agent 执行时链上真正发生了什么
    
-   Swap/Approve/Deposit/Borrow/Withdraw/Redeem 风险矩阵
    
-   5 个协议详解：Uniswap V3、Balancer、Hyperliquid、Lido、Gitcoin
    
-   5 步扩展路径（Uniswap → Lido → Balancer → Aave → Hyperliquid）
    
-   补充 3 个学习材料：Prompt Injection / 敏感信息披露 / 代理过剩
    

### Module F — Security/Privacy（重构成 Task + Learning 拆分）

-   Task 1：低风险自动执行 / 高风险人工确认策略 + 8 个触发条件 + 决策树
    
-   Task 2：8 种攻击模拟（6/8 被 Cobo CAW 拦截）
    
-   Workflow Threat Model：资产/权限/数据流/工具调用/外部依赖/失败后果
    

### Module G — Governance（新增）

-   5 阶段 DAO 治理流程拆解（提案→讨论→投票→执行→复盘）
    
-   Meeting-to-Action Workflow 草图（4 步）
    
-   AI vs 人工确认边界矩阵
    

### 总交付 — 方向深挖包与 Proposal（新增）

-   7 项要求全部覆盖
    
-   DCA Automation Agent 项目 Proposal（含 MVP、风险、赛道、Week 3 计划）
    
-   3 方向 Backlog
    

### 学习复盘

-   生成 Week 1+2 学习总结 [review-week1-week2.md](http://review-week1-week2.md)
    
-   口头复盘 MPC / Uniswap V3 / ERC-8004 / ERC-8183
    

## 明天计划

-   开始 Week 3 任务（Hackathon 准备周）
    
-   最低完成路径：Hackathon Direction Card / 赛道选择 / Repo Skeleton / Sprint Plan
    

* * *

## 学习笔记

### MPC 三句话

1.  私钥拆成多个碎片，分别存在不同地方
    
2.  签名需要多方协同计算，完整私钥从不出现
    
3.  DCA Agent 不持私钥——Agent 只有 API Key，Cobo MPC 执行签名
    

### Uniswap V3 三句话

1.  集中流动性——资金集中在当前价格区间，效率比 V2 高 4000 倍
    
2.  Quoter（只读报价）+ Router（执行 swap）
    
3.  Slippage 保护 = amountOutMinimum 参数
    

### ERC-8004 三句话

1.  Agent 身份 = ERC-721 NFT，URI 指向注册文件
    
2.  声誉 = 链上评分（成功率/交易量/可用率）
    
3.  验证 = 可插拔（质押重执行 / zkML / TEE）
    

### ERC-8183 三句话

1.  Client 锁钱 → Provider 干活 → Evaluator 验收
    
2.  资金在合约里托管，只有 Evaluator 能放行
    
3.  超时自动退款，拒绝就是终局
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->

# 2026-05-30 每日学习笔记

## 学习内容

### 竞品分析（方向一）

三类竞品深度讨论：

**第一类（DeBank/Zapper/Zerion）：** 投资组合追踪器，做资产追踪但无人做行为诊断和分析

-   DeBank：数据最全最快，主打分析功能，但管理和买卖不做
    
-   Zapper：一站式资产管理，想做超级应用但新协议支持慢、数据分析表面
    
-   Zerion：移动钱包体验好，内置智能钱包，但投研功能弱
    

**第二类（Dune/Nansen/Arkham）：** 链上数据分析平台

-   Dune：SQL 查询门槛高，适合高级用户
    
-   Nansen：追踪聪明钱，不分析用户自身行为
    
-   Arkham：地址反匿名化，面向调查/合规
    

**第三类（Chainalysis/Elliptic/TRM）：** 全部 B 端工具，面向政府和交易所

**结论：** 方向一的核心切入点是"行为分析 + 诊断 + 建议"，现有竞品都在数钱/盯人/查合规，没有人做行为画像

### Module B 任务一：最小支付与商业流程拆解

-   场景：Cobo Agentic Wallet + DCA 定投 Agent
    
-   拆解了 Pact 四要素（Intent / Execution Plan / Policies / Completion Conditions）
    
-   完整流程：9 步，覆盖下单→授权→执行→验收→终止
    
-   设计了 5 个 Phase（报价/执行/验收/失败处理/记录证明）
    
-   输出文档：`tasks/2026-05-29-payment-commerce-breakdown.md`
    

### Module B 任务二：x402 + CAW 自主支付闭环设计

-   学习了 x402 协议：HTTP 402 标准、三种支付方案（exact/upto/batch-settlement）、Facilitator 机制
    
-   设计了完整 6 Phase 交互流程（准备→请求→支付决策→支付→验证→完成）
    
-   包含架构图、交互流程、关键接口说明、风险边界
    
-   延续 Week 1 三条铁律（永不接触密钥、永不自动签名、永不绕过确认）
    
-   输出文档：`tasks/2026-05-29-x402-caw-payment-design.md`
    

## 明日计划

1.  确定 Week 2 主方向
    
2.  继续跟进剩余模块任务
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->


# 2026-05-29 每日学习笔记

## 学习内容

### Women Builders in AI × Web3

-   了解女性在 AI + Web3 社区的发展前景和现状
    
-   全球视角下的 AI × Web3 共建机会
    

### Week 2 例会

-   了解大家当前的学习进展
    
-   阅读优秀笔记，参考不同学员的学习方法和思考角度
    

## 明日计划

1.  确定 Week 2 主方向，开始画 AI × Web3 问题地图
    
2.  分析竞品优缺点，完成方向选择说明
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->



# 2026-05-28 每日学习笔记

## 学习内容

### 晚间完成事项

-   修正 PoW Pack：移除混入的 Week 2 会议内容，删除所有文件中泄露的任务 ID
    
-   提交 Week 1 PoW Pack 到 WCB ✅（submitId: cmpo8bb0h7mkwpo01cdma2gel）
    
-   设计 DeFi Swap 受限助手工作流文档 v1.1：新增 Pre-flight Simulation + Permit2 集成
    
-   撰写 Week 1 理解总结：AI Agent Workflow & Tool Use、钱包与签名、Agent 支付边界
    

### DeFi Swap 受限助手设计核心

-   三条铁律：永不接触密钥、永不自动签名、永不绕过确认
    
-   三堵确认墙：合约地址核对 → 授权参数核对 → Swap 参数核对
    
-   Pre-flight Simulation：用 eth\_call 模拟交易，签名前发现授权不足、滑点过低等问题
    
-   Permit2 优先路径：链下签名授权，消除 Approve→Swap 间的 MEV 窗口
    

### Week 2 方向调研

两个候选方向：

**方向一：链上财务教练**

-   分析用户链上交易行为，生成个人画像，结合盈亏给出交易风格诊断和建议
    
-   现有工具（DeBank/Zapper/Nansen）做资产追踪，无人做行为分析和诊断
    
-   AI 三层角色：描述→诊断→建议
    

**方向二：AI 治理助手**

-   自动总结 DAO 提案、分析论坛讨论、评估投票影响，降低参与门槛
    
-   DAO 参与率仅 5%，核心障碍是信息过载
    
-   AI 做总结+分析+提醒，Web3 提供链上治理数据
    

### 竞品调研（记录 18 个项目）

方向一：DeBank、Zapper、Zerion、Nansen、Arkham、Dune Analytics、Rotkiapp、Crypto Analyzer、Chainalysis、Elliptic、TRM Labs

方向二：DeepDAO、Snapshot、Tally、Agora、Karma、Boardroom、Sybil、DAO-Analyzer

详见 `tasks/2026-05-27-week2-direction-analysis.md`

## 明日计划

1.  确定 Week 2 主方向，开始画 AI × Web3 问题地图
    
2.  分析竞品优缺点，完成方向选择说明
    
3.  参加 5/29 Women Builders + Week 2 例会
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->




**第一部分：学习总结**

> 今天完成了 AI × Web3 Bridge 剩余 8 个章节的全面速览：
> 
> ① **Agent Wallet** — 钱包是权限系统不是签名按钮，Session Key（临时钥匙）+ Policy（规则层）+ Guard（拦截层）+ Simulation（预演）构建安全体系。
> 
> ② **Machine Payment & Settlement** — X402（HTTP 原生支付）、MPP（机器间支付协议）、Micro Payment（小额高频）、ERC-8183 任务支付与交付标准。
> 
> ③ **Agent Identity & Trust** — Agent Profile 能力声明、Service Endpoint、DID+VC；ERC-8004 身份声誉验证 Registry；质押和综合评估机制。
> 
> ④ **AI Security（重点）** — 模型放在隔离层，可以建议不能绕过权限；Key Safety、Permission Isolation、Sandbox 三防；防范 Prompt Injection、上下文注入与误导数据。
> 
> ⑤ **Governance AI** — AI 辅助 DAO 治理：长提案摘要、会议行动项、贡献追踪。
> 
> **至此 AI × Web3 Bridge 12 个章节全部完成 ✅，Phase 2 学习完毕。**

**第二部分：今日会议**

> ① **Co-learning** — 了解 AI+Web3 产品想法和 Layer 2 现状问题。
> 
> ② **Neo-Cypherpunk & Privacy** — 新赛博朋克：隐私是公共品，渐进式隐私保护，AI 隐私 Agent 是重要方向。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->





**第一部分：今日学习总结**

> 今天重点完成了 Week 1 收尾任务和 Week 2 预热：
> 
> ① **WCB 任务全量审计** — 通过 Agent API 获取了 62 个完整任务列表，理清了所有任务的 APPROVED/SUBMITTED/NOT\_STARTED 状态。
> 
> ② **拆解 INFINIT 项目** — 分析了 AI 驱动 DeFi 执行层 INFINIT 的项目全貌，覆盖 Agent Swarm（35+ 专业代理）、三层安全体系（确定性代码编译 + 内部验证 + 模拟审批）、代币经济学和竞品对比。拆解笔记已提交 WCB ✅
> 
> ③ **Agent 记忆系统调研规划** — 参考同学笔记，列出了 MemGPT/Letta、Mem0、Zep、LangChain Memory 四种产品的待研究任务清单。

**第二部分：今日会议**

> **Cobo Agentic Wallet** — 围绕 AI Agent 链上资产安全展开：当前 Agent 经济规模庞大但存在权限失控、隐私泄露等风险。Cobo 通过 MPC 私钥分片、Pack 授权规范、Recipe 技能层构建安全可控体系，涵盖小额免密、极端兜底等风控方案及人机协作平衡思路。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->






**第一部分：Web3 基础学习总结**

> 今天完成了 Web3 基础 Phase 1 的全部剩余 6 个章节学习：Network（区块/共识/PoS/L2/Rollup）、Account Abstraction（ERC-4337/Smart Account/Bundler/Paymaster/Session Key）、DeFi（Token/AMM/滑点/无常损失/Lending/Stablecoin/Liquidity）、Oracle（Price Feed/Oracle Risk/AI Oracle）、Indexing（Event Indexing/Subgraph/Data Pipeline）、Security（Reentrancy/Access Control/Audit/Simulation/Monitoring）。共产出 7 份结构化学习笔记沉淀到 GitHub 仓库。

**第二部分：今日会议**

> ① **Co-learning** — 马铃薯老师答疑：了解了当前 Web3 火热的发展方向和前景项目，对后续学习和项目方向选择有了更清晰的认识。
> 
> ② **Long-Term Memory of AI Agents** — 学习如何让 Agent 拥有持续上下文与长期一致性，了解了 CoCa、CoAx 等大公司在 Agent 长期记忆方向的落地实践。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->







今天主要学习和了解web3的相关文档和知识。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->








今日学习总结：  
  
今天参加了两场活动：  
  
一、Open Agentic Economy 分享会  

-   了解了 Agentic Economy 机器支付协议标准
    

-   学习了 ERC-8004（服务发现与协商）和 ERC-8183（机器支付与结算）
    

-   理解了 Agent 经济系统的完整路径：服务发现 → 任务协商 → 支付结算 → 凭证记录
    

-   了解了相关开源项目和实现路径
    

二、LXDAO 周会  

-   了解了 LXDAO 的治理结构和运作机制
    

-   观察到社区发展方向存在困惑
    

-   发现活动运营方面存在一些问题
    

关键认识：  

-   Agentic Economy 是 AI × Web3 的重要落地场景
    

-   协议标准化是 Agent 之间互操作的基础
    

-   支付 + 身份 + 验证是 Agent 经济的三大支柱
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->









今天完成了两部分学习：  
  
一、AI 基础概念深化  

-   系统学习了 Agent 架构（Plan + Reflection + Multi-Agent）
    

-   了解了主流框架生态（LangChain、LangGraph、OpenAI Agents SDK 等）
    

-   记录了 MCP 协议的核心机制（Tool Schema、Permission）
    

-   理解了 Fine-tuning 和 Inference 的基本概念
    

二、Co-learning：Agent Wallet  

-   学习了 Cobo Agentic Wallet 的产品定位和技术架构
    

-   理解了 Agent Wallet 解决的核心问题：权限控制、安全隔离、人工确认
    

-   收藏了开发文档：
    
    [https://www.cobo.com/products/agentic-wallet/manual/developer/quickstart-overview](https://www.cobo.com/products/agentic-wallet/manual/developer/quickstart-overview)
    

关键认识：  

-   Agent = 模型 + 工具 + 编排，是能自主执行任务的系统
    

-   Agent Wallet 是 AI × Web3 的关键基础设施，让 Agent 能安全地管理资产和交易
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->










# 2026-05-21 每日学习笔记

## 今日目标

-   ✅ 参加 AI + Web3 技术方向直播课
    
-   ✅ 记录核心观点和学习收获
    

## 学习内容

### 主要收获

今天的课程核心观点：**AI + Web3 的价值不是给 AI 套 token，而是让软件主体进入可授权、可结算、可审计的经济系统。**

这是 AI × Web3 的本质：不是简单地把两个概念拼在一起，而是建立一个让 AI Agent 能够自主参与经济活动、承担责任、留下可验证记录的新系统。

### 五个技术方向

| 方向 | 核心内容 | 关键词 |
| --- | --- | --- |
| 1. 去中心化 AI 基础设施 | 去中心化的算力、模型、数据市场，降低 AI 开发和运行的中心化风险 | DeAI、算力市场、模型市场 |
| 2. AI Agent + 钱包 | 让 AI Agent 拥有钱包能力，可以自主完成支付、收款、资产管理 | Agent Wallet、自主支付、机器经济 |
| 3. AI 链上分析工具 | 利用 AI 分析链上数据、交易模式、项目风险，辅助决策 | 链上分析、风险识别、智能投研 |
| 4. 智能钱包和安全助手 | AI 辅助的钱包安全、交易验证、权限管理、防钓鱼 | 智能钱包、安全助手、权限管理 |
| 5. 交易所和 DeFi 智能风控 | AI 实时监控交易异常、识别攻击模式、保护用户资产 | 智能风控、异常检测、MEV 保护 |

### 关键认识

-   **可授权**：AI Agent 可以被授权执行特定操作，权限可定义、可限制、可撤销
    
-   **可结算**：AI Agent 之间的服务交换可以通过区块链自动完成支付和清算
    
-   **可审计**：所有 AI 的操作和决策都留在链上，可供事后审查和验证
    

## 实践记录

-   实时参加了 5/21 AI 下乡计划直播
    
-   记录了五个方向的框架
    

## 问题与卡点

-   需要深入了解每个方向的具体实现案例
    
-   Agent + 钱包的安全边界需要进一步研究
    

## 明日计划

1.  参加 5/22 [Z.AI](http://Z.AI) 直播
    
2.  深入研究 1-2 个感兴趣的方向
    
3.  开始准备 Week 1 PoW Pack
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->












# 2026-05-20 每日学习笔记

## 今日目标

-   ✅ 阅读 Web3 基础文章
    
-   ✅ 学习密码学文档
    
-   ✅ 参加 Web3 运行原理直播课
    
-   ✅ 实操编写智能合约
    

## 学习内容

### 主要收获

今天系统学习了 Web3 基础内容，并与直播课程做了串联：

**密码学基础：**

-   **哈希（Hash）**：单向函数，用于数据完整性验证
    
-   **公钥/私钥（Public/Private Key）**：非对称加密的基础，私钥签名、公钥验证
    
-   **签名（Signature）**：证明身份和授权动作，不可伪造
    
-   **Merkle Tree**：高效验证大量数据完整性的树形结构
    

**钱包：**

-   已有 MetaMask 使用经验
    
-   理解了钱包作为身份和签名入口的角色
    
-   掌握了地址、助记词、私钥的关系和安全边界
    

**智能合约：**

-   **Solidity**：合约编程语言，之前有过学习基础
    
-   **EVM（以太坊虚拟机）**：合约执行环境
    
-   **ABI（应用二进制接口）**：合约与外部交互的接口定义
    
-   **Event（事件）**：链上日志记录机制
    
-   **OpenZeppelin**：安全合约库，今天了解了基本使用
    

### 关键概念

-   Web3 是分布式系统，操作不可逆，需要更强的安全意识和架构能力
    
-   私钥、助记词、签名和授权必须谨慎处理，这是 Web3 安全的核心
    
-   智能合约一旦部署不可修改，需要充分测试和审计
    

## 实践记录

**合约编写练习：**

-   编写最小 Mint 功能合约
    
-   实现获取账户余额功能
    
-   了解 OpenZeppelin 库的使用方法
    

**学习路径串联：**

-   将文档学习与直播课程内容结合
    
-   对 Web3 整体概念有了更清晰的认识
    

## 问题与卡点

-   合约复杂功能还需要更多练习
    
-   OpenZeppelin 各模块的具体使用场景需要深入了解
    

## 明日计划

1.  继续智能合约实践，尝试更复杂功能
    
2.  完成测试网交易任务
    
3.  阅读 Account Abstraction 文档
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->













今日学习总结：  
今天系统阅读了 AI 基础文档，对已有知识进行了梳理和补充：  
已熟悉的概念（复习巩固）：

-   LLM、Prompt、Context、Agent、Frameworks、MCP、Evaluation
    

新补充的知识：

-   微调（Fine-tuning）：模型参数调整
    

-   推理服务（Inference Services）：部署与 API 调用
    

明日计划：

开始学习 Web3 基础（Network 章节）

阅读 AI × Web3 Bridge 文档

深入复习今天的 AI 基础内容
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->














\# 每日学习打卡

\> 📅 2026-05-18

\---

\## 今日学习内容概览

今天主要听了两场分享会/活动，记录如下：

| 场次 | 主题 | 收获程度 |

|------|------|---------|

| 第一场 | Corporation | ⭐⭐⭐ 一般 |

| 第二场 | 老师的 Web3 技术分享会 | ⭐⭐⭐⭐⭐ 很大 |

\---

\## 第一场：Corporation

\### 学习情况

\- 由于之前已有一定的相关基础，且\*\*Open Cloud、Hermes、Cloud Code\*\*等工具已经在本地安装并深入使用，所以本场内容以巩固为主，新知识点不多。

\- 整体属于\*\*复习和确认已有认知\*\*的环节。

\---

\## 第二场：老师的技术分享会 ⭐

\### 核心收获

本场分享会学到的东西比较多，主要包括以下几个方向：

\#### 1. Web3 安全

\- 老师分享了 **Web3 安全** 领域的相关知识

\- 这是目前非常热门且重要的方向，后续需要持续跟进

\#### 2. 技术栈与架构

\- 了解到了当前的一些\*\*技术栈\*\*

\- 学习了相关的\*\*架构设计\*\*思路

\#### 3. 开源资源与素材

\- 在 **GitHub** 上发现了一些 **Web3 相关的开源库**

\- 这些可以作为后续深入学习的素材

\- 伙伴们还分享了很多\*\*开源的学习资料\*\*

\---

\## 后续学习计划

\- \[ \] 整理今天分享会提到的 Web3 安全知识点

\- \[ \] 梳理老师分享的技术栈和架构笔记

\- \[ \] 深入调研 GitHub 上发现的相关开源库

\- \[ \] 整理伙伴们推荐的开源学习资料清单

\- \[ \] 择期回顾 Corporation 相关内容，查漏补缺

\---

\## 总结

今天的两场活动以第二场收获最大。老师的 Web3 技术分享会不仅拓宽了技术视野，还提供了大量后续可以深入挖掘的\*\*开源素材和学习资源\*\*。后续重点会放在 Web3 安全、相关技术栈的落地实践，以及开源项目的深入研究上。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
