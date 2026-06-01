---
timezone: UTC+8
---

# Xi Cheng

**GitHub ID:** chxii

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->
### **Hackathon 方向 Brainstorm（**[**Z.AI**](http://Z.AI) **赛道）**

**市场调研（2026-05）**

> 来源：firecrawl 搜索

-   **Long-horizon Agent 现状**：模型能力已非瓶颈，真正的竞争壁垒在 orchestration、feedback loops、sandbox、tooling（EPAM 2026）。真正可用的模式是 bounded multi-step tasks + human-in-the-loop review，不是 fully autonomous。
    
-   **Web3 开发痛点**：写合约只是很小一部分，配置/测试/部署/跨链适配更费时间。Bridge/cross-chain 的信任假设和安全风险是真实问题。
    
-   **审计工具现状**：Slither/Mythril 单次静态扫描；AI 增强版 Cyfrin Aderyn、Olympix F1 > 80%，但都是**单次扫描**，无迭代修复。**多轮自主迭代修复**是空白。
    
-   **AI Agents in Web3**：Autonomous DeFi portfolio managers、AI agents with crypto wallets、Agentic commerce 是 2026 热门方向。
    
-   **GLM-5 能力**：Terminal-Bench 2.0 表现强，200K context，16K output，MIT license 可自部署，$18/月 coding plan。
    

* * *

### **三个方向对比**

|   | 方向A Dev Agent | 方向B Audit Agent | 方向C Publishing |
| --- | --- | --- | --- |
| 市场需求 | 真实但拥挤 | 真实痛点 | 需培育 |
| GLM-5 使用关键性 | 中 | 高 | 中 |
| 长程体现 | 强，但难超出 Claude Code | 最强：scan→interpret→fix→rescan→verify | 强但链上变现路径复杂 |
| Web3 真实集成 | 可部署到测试网 | 合约+链上数据+真实漏洞 | x402 早期 |
| 评委差异化 | 难（同类多） | 高（无竞品做迭代修复） | 中 |

* * *

### **选定方向：Multi-Round Smart Contract Audit Agent**

**不是新 Slither，是"会自己修的审计员"**

**赛道匹配**：[Z.AI](http://Z.AI) 要求"自主拆解、持续执行、迭代修复"——Audit 天然完整体现。

**MVP（Week 4，10天）**：

-   输入：ERC-20 合约地址或代码
    
-   GLM-5 全程驱动：读取代码 → 调用静态分析 → 解读漏洞 → 生成修复代码 → 重新扫描验证 → 输出结构化报告
    
-   全程记录 task decomposition、tool calls、iteration 过程（评委核心看这点）
    

**优势**：

-   评委直接看到 GLM-5 的长程规划+迭代纠错
    
-   已有真实漏洞的合约可作验证集
    
-   安全是真实痛点，审计报告可发布/交易
    

**风险**：Cyfrin Aderyn、Olympix 已有人在做，但都是单次扫描；聚焦"迭代修复"是新意所在

* * *

### **参与内容**

**1\. Co-learning session**

> 来源：课堂

**2.「从 VC 角度，如何更好打磨项目」课程**

VC 核心维度：问题是否真实/痛苦/足够大、方案是否可验证、团队执行能力、护城河。 对 Hackathon 启发：demo 不是炫技，是证明"这个问题确实存在，且我能解决"。
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->

### **任务产出**

Week 2 到期，综合整理 Week 2 所有产出，生成总交付文档。

### **交付物**

`tasks/Week2-Deep-Dive.md`（新生成）

7 个部分，均标注来源文件：

1.  **问题地图**（来源：Day 9 `tasks/Week2-Problem-Map-and-Direction.md`）
    
    -   6 个方向，每个方向 AI 作用 + Web3 机制 + 关键标准 + 未解决问题
        
    -   主方向：**Payment / Commerce**（Hackathon 扫描发现"操作可见性"方向空白）
        
2.  **方向说明**（来源：同上）
    
    -   为什么不是纯 AI 问题：信任/结算/验证需要 Web3
        
    -   为什么不是纯 Web3 问题：动态决策需要 AI
        
    -   为什么现在切入：33 个 ETHGlobal Hackathon 项目，几乎没人做"让人类看清 Agent 干了什么"
        
3.  **问题拆解**（来源：Day 10-12 多文件）
    
    -   参与方 / 流程 / AI 作用 / Web3 机制
        
    -   自动化边界 + 人工确认点（来源：`agent-wallet-permission-strategy.md`）
        
    -   验证方式 + 主要风险
        
4.  **Proposal 框架**（初步，待 Week 3 完善）
    
    -   目标用户：DeFi 仓位管理用户 / 小型 DAO / 开发者
        
    -   MVP：地址监控 + 自然语言日志 + 异常告警 + 分级响应
        
    -   可能赛道：ETHGlobal / Base 生态
        
5.  **参考资料清单**（7 条，均标注来源）
    
    -   x402 / ERC-8183 / ERC-8004 / Safe+EIP-7702 / Cobo CAW / ETHGlobal Hackathon / Threat Model
        
6.  **主方向深挖包**
    
    -   典型场景：Agent x402 支付 10 步完整流程
        
    -   反例：Prompt Injection 三层拦截
        
    -   风险组：6 项风险 + 防御手段
        
    -   验证计划：Hackathon Demo 5 步
        
7.  **方向 Backlog**
    
    -   Wallet / Identity / Privacy 三个未选方向及原因
        

`diagrams/week2-problem-map.excalidraw`（新生成） 6 方向色块图，Payment 用红框标出为主方向 Excalidraw 链接：[https://excalidraw.com/#json=zLfc1Csd0ZjlmnyMrvsjA,CnIBngfxUpdVD9rcUXcXxA](https://excalidraw.com/#json=zLfc1Csd0ZjlmnyMrvsjA,CnIBngfxUpdVD9rcUXcXxA)

`diagrams/week2-payment-flow.excalidraw`（新生成） Payment 方向典型场景：10 步流程图（用户→Pact→Agent→x402 Server→BudgetGuard→CAW→链上→审计日志） Excalidraw 链接：[https://excalidraw.com/#json=rrFimAYdOovEuhIGByyd3,IT9oE2VXwUR11EfJcfQ7ow](https://excalidraw.com/#json=rrFimAYdOovEuhIGByyd3,IT9oE2VXwUR11EfJcfQ7ow)
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->


## **LXDAO 治理流程 AI 辅助方案**

任务：选一个 DAO / 社区流程，拆出 AI 可以辅助的步骤，以及必须由人或治理流程确认的步骤。

选了 LXDAO，用 Firecrawl 实际采集数据（Forum / Snapshot / Notion / Fairsharing / LIP13 / Budget Framework）。

产出：[https://github.com/chxii/ai-web3-school-cohort-0/blob/master/tasks/LXDAO-Governance-AI-Assistant-Draft.md](https://github.com/chxii/ai-web3-school-cohort-0/blob/master/tasks/LXDAO-Governance-AI-Assistant-Draft.md)

5 个部分：

1.  核心治理架构 — 工具链 + Season 周期 + 组织结构
    
2.  提案生命周期 — 6 步（Pre-season → Ideation → Draft → Review → Vote → Execution），每步标 \[AI\] / \[HUMAN\]
    
3.  周会 → Action Items 工作流 — 会前/会中/会后 AI vs 人工分工
    
4.  贡献记录 & 激励执行 — Fairsharing 数据结构 + 月度 Budget Checklist
    
5.  关键治理边界 — 8 个场景，AI 能做 vs 不能做的
    

核心结论：AI 做整理/检测/提醒，所有批准/决策/不可逆动作必须人工或治理流程。
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->



## **ETHGlobal OpenAgents Hackathon 项目扫描**

来源：[https://ethglobal.com/showcase?events=openagents，共](https://ethglobal.com/showcase?events=openagents%EF%BC%8C%E5%85%B1) 33 个项目，按方向分类：

### **钱包 / 安全**

-   **AgentMandate** — "Bound the agent, not the keys." 链上信任层，限制 Agent 在 Uniswap 上的行为（绑定 Agent 而非限制私钥）
    
-   **Bunkermode** — AI 检测 DeFi 攻击，在瀑布发生前自动平仓
    
-   **GuardianKit** — 跨链钱包安全层，阻止恶意合约调用
    
-   **0G SkillGate** — Agent 技能安装前的安全门
    

### **Agent 身份 / 发现 / 信誉**

-   **AgentRadar** — ENS 原生身份层。ERC-8004 有 32000+ Agent，其中 17500 个 profile 为空。AgentRadar 用 PageRank 对 14249 个实体排名
    
-   **Sayben** — Agent 的身份、安全和交互图谱层
    

### **多 Agent 协作网络**

-   **Sibyl** — AI 交易策略通过 Gensyn AXL 网络传播，签名策略 + 运营者执行 + 利润 split（70/30）
    
-   **AI Treasury Council** — 5 个 AI Agent 辩论 DAO 财政决策，在 0G 上留审计痕迹
    
-   **RB Agent Protocol** — LLM 提议 + 确定性规则验证 + 适配器执行
    

### **隐私 / 暗池**

-   **Murmur** — Agent 暗池，在 Gensyn AXL 上私密报价，链上原子结算
    
-   **Charon** — TEE（可信执行环境）锁住秘密，满足条件才释放
    

### **资产自动化**

-   **DeadAgent** — 数字遗产协议，主人死后自动清算交接加密资产
    
-   **Rebalancer** — iNFT 拥有的 LP 再平衡器
    

### **工作流编排**

-   **AXL Hub** — Agent 创建和执行工作流图
    
-   **IntentMesh** — AI 端到端执行用户意图，带可验证链上证明
    
-   **Omikuji Hub** — AI 抽签预言机
    

### **游戏 / 虚拟世界**

-   **Clan World: Ælder** — 4 个 AI Agent 完整跑链上游戏（协作、谈判、背叛）
    
-   **ERC-7857 iNFT Arena** — NFT 繁殖 + 竞技场
    

### **AI / 内容创作**

-   **Mobile Twin** — 用手机录自己生成克隆
    
-   **Nyxie** — AI 会议助手
    
-   **Coding Agent (a1dv9)** — 多人格 Swarm 编码 Agent
    

### **基础设施**

-   **Gasless Cross-Chain AI** — 0G 上跨链 AI 计算，用 USDC 支付无需跨链桥
    
-   **Federated ML Marketplace** — Gensyn AXL 加密 P2P 网络上的去中心化 ML 训练市场
    

### **农业**

-   **Agrobase** — 非洲农民在 Base 链上的 Web3 小额贷款 + 天气保险
    

### **空白发现**

**Agent 操作可见性**方向几乎空白——大多数项目在"让 Agent 做事"，几乎没人做"让人类看清 Agent 干了什么"。只有 Bunkermode 稍微接近（被动防御），但不是主动的日志/审计/可视化。

* * *

## **x402 + Cobo CAW Agent 支付闭环**

详细分析见：`tasks/x402-Cobo-CAW-Agent-Payment-Demo.md`

### **现状**

| 组件 | 状态 |
| --- | --- |
| x402 Server（Flask） | ✅ 完整，402 响应 + proof 验证 + replay 保护 |
| Agent 主逻辑 | ✅ 完整，检测 402 → 支付 → 重试 |
| CAW Client（Mock） | ✅ 基础完整，ERC-20 transfer via web3.py |
| BudgetGuard | ❌ 缺失 |
| 审计日志 | ❌ 缺失 |
| 多端点展示 | ❌ 缺失 |

### **核心流程**

```
Agent GET /analyze → 402 (payment info)
  → CAW.transfer_usdc() 链上扣 USDC
    → tx_hash → 重试 GET + X-Payment-Proof
      → 200 (数据)
```

### **待补充**

1.  BudgetGuard（预算检查 + 地址白名单 + 时间窗口）
    
2.  审计日志持久化
    
3.  多端点（不同价格）
    
4.  真实 Cobo CAW SDK 集成
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->




### **任务 1：Agent Profile Design**

以 Web3 Analysis Agent 为例，设计完整 Agent Profile。

**核心内容**：

-   Identity：名称、能力描述、DID、托管方
    
-   Capability：读取链上数据 / 生成分析报告 / EAS 存证 / USDC 退款
    
-   输入：用户任务描述、钱包地址、Pact 配置
    
-   输出：分析报告、交易 hash、attestation URL
    
-   协作对象：用户（发起方）、EAS（存证）、Safe（签名）、LLM API（推理）
    
-   失败点：API 超时 / 预算耗尽 / 超出 Pact 范围 / 链上 revert
    

**Agent Profile 草图**：

| 字段 | 内容 |
| --- | --- |
| 名称 | Web3 Analysis Agent |
| 托管方 | Cobo / Safe / 自托管 |
| 核心能力 | 链上分析 + EAS 存证 |
| 调用方式 | Feishu Bot / API |
| 收费方式 | 每次任务 0.01 ETH 或订阅制 |
| 验证方式 | EAS attestation 记录每次交付 |
| 失败处理 | 预算退回 + 告警 |

**加分：MCP vs A2A 对比**：

-   MCP：Agent ↔ 工具（工具上下文注入，最适合 Agent 调用链上数据 API）
    
-   A2A：Agent ↔ Agent（多 Agent 协作协议，适合多角色分工）
    

**文件**：`tasks/agent-profile-design.md`

* * *

### **任务 2：Agent Wallet 权限策略设计**

以 Web3 Analysis Agent 为场景，设计完整的链上操作权限控制。

**核心内容**：

-   预算：0.05 ETH 单次 / 0.2 ETH 日上限 / 1 ETH 月上限，超出自动暂停
    
-   白名单合约：EAS AttestationStation / USDC / Agent Registry
    
-   禁止动作：approve 修改 / 合约部署 / 治理投票（永久禁止）
    
-   人工确认阈值：单笔 > 0.02 ETH / 白名单外 / 24h 同动作 > 10 次
    
-   四种撤销：即时撤销 / Pact 级 / 紧急暂停 / 降级回路
    
-   日志：链下加密 + 链上 Merkle root + EAS attestation
    
-   失败处理：6 种场景的完整处理方式
    

**ERC-4337 / Safe / Guard 机制解释**：

-   ERC-4337：Smart Account + Session Key → Agent 可受限签名，无需暴露主私钥
    
-   Safe：多签 → 任何单点失控（Agent 被劫持）不足以完成交易
    
-   Guard：执行前检查 → "有权签名，但签的内容必须符合规则"
    

**文件**：`tasks/agent-wallet-permission-strategy.md`

* * *

### **任务 3：Agent Workflow Threat Model**

为 Agent Workflow 设计威胁模型，覆盖 6 大风险维度。

**核心内容**：

-   资产清单：凭证（API Key / Session Key / RPC）/ 数据（DID / 任务历史）/ 权限（Pact）
    
-   攻击入口：Prompt Injection / Tool Abuse / 伪造工具返回 / 越权指令 / 会话劫持 / Calldata 伪装
    
-   低风险自动执行：链上读取 / 生成报告 / EAS 存证 / USDC 退款
    
-   高风险人工确认：单笔 > 0.02 ETH / 白名单外合约 / 24h 同动作 > 10 次 / calldata 与意图不符
    
-   触发条件：5 条确认触发条件 + 30 分钟超时
    
-   失败后果：6 种场景直接后果 + 止损手段
    

**攻击模拟与防御验证（5 种）**：

-   Prompt Injection → ✅ 被 Guard + Policy + 人工确认拦截
    
-   伪造工具返回 → ⚠️ 交叉验证有限，数据源同时污染则失效
    
-   越权指令 → ✅ 被 Policy + Session Key 权限限制拦截
    
-   Calldata 伪装 → ✅ 被 Calldata 预检 + 禁止列表拦截
    
-   降级回路失效 → ✅ 被链上超时 + 多签暂停拦截
    

**文件**：`tasks/agent-workflow-threat-model.md`
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->





## **今日完成：Agent Payment/Commerce Flow 设计**

### **任务产出**

-   设计"Agent 帮人完成任务并收款"的最小 commerce flow
    
-   完成 x402 vs ERC-8183 对比分析
    

* * *

## **场景：链上操作委托**

**角色**：Client（委托方）/ Provider Agent（执行方）/ Evaluator（验收方）/ Facilitator（支付中介）/ Arbiter（仲裁方）

### **完整流程（7步）**

```
报价(Quote) → 预算授权(Budget Auth) → 执行(Execution) → 
交付(Delivery) → 验收(Acceptance) → 付款/退款/争议 → 记录证明(Attestation)
```

**关键机制**：

-   **Escrow**：Client 将预算锁入 JobContract，Agent 完成后才能解锁
    
-   **Evaluator**：第三方验收方调用 `complete` 或 `reject` 决定资金走向
    
-   **Hook**：可插入仲裁合约（如 Kleros）处理争议
    
-   **Reputation**：完成后 Client 提交链上反馈，计入 Agent 声誉
    

* * *

## **x402 vs ERC-8183 对比**

| 维度 | x402 | ERC-8183 |
| --- | --- | --- |
| 解决的问题 | HTTP 层支付握手 | 整个 commerce flow 组织 |
| 核心概念 | 402 Payment Required + Facilitator | Job Escrow + Evaluator |
| 验收机制 | ❌ 无 | ✅ Evaluator 裁定 |
| 争议处理 | ❌ 无 | ⚠️ 通过 Hook 接入外部仲裁 |
| 适用场景 | API 付费、micropayments | 复杂任务外包、多方验收 |

**结论**：x402 + ERC-8004 + ERC-8183 组合是最小可行方案

-   ERC-8004：Agent 身份注册与发现
    
-   ERC-8183：Job 生命周期 + Escrow + 验收
    
-   x402：HTTP 层支付握手 + Facilitator 结算
    

详细文档：[https://github.com/chxii/ai-web3-school-cohort-0/blob/master/tasks/Agent-Payment-Commerce-Flow.md](https://github.com/chxii/ai-web3-school-cohort-0/blob/master/tasks/Agent-Payment-Commerce-Flow.md)
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->






## **今日完成：AI × Web3 问题地图**

### **任务产出**

-   画一张覆盖 6 个方向的 AI × Web3 问题地图
    
-   说明每个方向的 AI 作用与 Web3 机制
    
-   分析 Payment 和 Wallet 为什么不是纯 AI 问题 / 纯 Web3 问题
    

### **任务文件**

-   `tasks/Week2-Problem-Map-and-Direction.md` — 问题地图 + 方向分析
    

* * *

## **Hackathon 方向 Ideas（待打磨）**

### **Idea 1：AI Agent 操作监控与异常预警**

**方向**：Wallet / Permission

**痛点真实性**： 2026 年自主 DeFi 资产管理、合规监控、制裁筛查、风险评分等 Agent 用例已获最大市场牵引力。但企业级 Agent 钱包越来越需要人类可读的审计追踪——将 Agent 决策与链上操作关联——以及异常行为检测和紧急停止机制。

现状：大量团队用 AI Agent 执行链上操作，但"做了什么"几乎是黑盒。操作日志是十六进制，没有上下文，没有异常检测，出了问题才发现。

**真实用户**：

-   用 AI Agent 管理 DeFi 仓位的个人用户：不知道 Agent 昨晚做了什么
    
-   小型 DAO 或项目方：让 Agent 代为执行资金操作，需要审计报告
    
-   开发者：自己写的 Agent 跑了一段时间，想回溯行为
    

**MVP 核心功能**：监控指定钱包地址，持续读取链上操作，用 AI 生成自然语言"行为日志"，发现异常时告警。

**告警规则示例**（规则引擎，无需 ML）：

-   单笔金额超过历史均值 3 倍 → 高风险告警
    
-   首次交互从未见过的合约地址 → 未知合约警告
    
-   连续 5 分钟内超过 10 笔操作 → 异常频率告警
    
-   向黑名单地址转账 → 立即停止并告警
    

**输出示例**：

```
[2026-05-26 14:32] Agent 执行了 Uniswap V3 swap，将 500 USDC 换成 0.18 ETH，滑点 0.3%，正常。
[2026-05-26 14:35] ⚠️ 检测到异常：Agent 向一个从未交互过的合约（0x9f3B...）发起了 approve，金额无上限（MAX_UINT256）。建议人工确认。
```

**分级安全系统**（四档）：

-   INSTANT：小额交易立即执行
    
-   NOTIFY：中等金额触发通知
    
-   DELAY：较大金额延迟等待审查
    
-   APPROVAL：最大金额需要人工明确批准
    

**技术栈**：

```
Alchemy Webhook / Etherscan API ← 实时/定期获取钱包交易
↓
Python 规则引擎 ← 异常检测逻辑
↓
LLM API ← 把操作翻译成人类可读日志
↓
Telegram Bot ← 告警推送（最快，3小时搭好）
```

* * *

### **Idea 2：AI Safe Wallet**

**方向**：Wallet / Permission

**核心**：AI + Account Abstraction + Policy Engine

AI Agent 自动执行交易，但：

-   每笔交易有风险评分
    
-   用户可设置权限边界
    
-   链上可审计
    
-   支持 Intent-based 操作
    

* * *

## **下一步**

-   从以上两个 ideas 里选一个作为 Week 2 主线
    
-   确认技术栈，开始搭建最小 Demo
    
-   研究 Alchemy Webhook 或 Etherscan API 的实时交易监控能力
    

* * *

## **Reference**

-   Crypto APIs - The Agentic Blockchain Stack (2026)：[https://cryptoapis.io/blog/564-the-agentic-blockchain-stack-how-ai-agents-are-rewriting-on-chain-infrastructure-in-2026](https://cryptoapis.io/blog/564-the-agentic-blockchain-stack-how-ai-agents-are-rewriting-on-chain-infrastructure-in-2026)
    
-   Blockchain Council - AI in Blockchain：[https://www.blockchain-council.org/blockchain/ai-in-blockchain/](https://www.blockchain-council.org/blockchain/ai-in-blockchain/)
    
-   DEV Community - Python SDK for AI Agents：[https://dev.to/walletguy/python-sdk-for-ai-agents-async-wallet-control-with-zero-dependencies-e43](https://dev.to/walletguy/python-sdk-for-ai-agents-async-wallet-control-with-zero-dependencies-e43)
    
-   Safe：[https://safe.global/](https://safe.global/)
    
-   Alchemy：[https://www.alchemy.com/](https://www.alchemy.com/)
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->







### **1\. Payment / Commerce**

**AI 侧：** AI Agent 可以自动决策触发支付（买 API、买数据、买算力），无需人介入。

**Web3 侧：**

-   **x402**（生产级）：HTTP 402 状态码实现机器支付，成员包括 Stripe、Visa、MasterCard、Coinbase、Google Cloud、AWS 等 23 家（来源：[x402.org/ecosystem](https://www.x402.org/ecosystem)）
    
-   USDC 结算，Stripe USDC 收款已上线，Cloudflare Workers 原生支持
    
-   EIP-3009 支持 gasless transfer
    

**Reference：**

-   官网：[https://www.x402.org/](https://www.x402.org/)
    
-   文档：[https://docs.x402.org/](https://docs.x402.org/)
    
-   白皮书：[https://www.x402.org/x402-whitepaper.pdf](https://www.x402.org/x402-whitepaper.pdf)
    

* * *

### **2\. Identity + Capability**

**AI 侧：** AI Agent 需要动态发现彼此的能力、相互协商任务、执行多步骤协作。

**Web3 侧：**

-   **MCP（Model Context Protocol）**：Anthropic 出品，AI Agent 连接工具的标准，SDK 支持 Python/JS/Rust
    
    -   生态庞大：GitHub 搜索"MCP server"返回 **564 个仓库**（来源：GitHub API，2026-05）
        
    -   热门 MCP Servers：mcp-use (9994⭐)、awslabs/mcp (9122⭐)、armor-crypto-mcp (182⭐)、solana-mcp (159⭐)、alchemy-mcp-server (86⭐)
        
-   **A2A（Agent-to-Agent）**：Google 推进，Agent 之间互相发现和协作，与 MCP 互补
    
-   **ERC-8004**（⚠️ **Draft**）：链上 Agent 身份标准，ERC-721 NFT 形式，作者包括 MetaMask/Coinbase/Google；状态来源：[eips.ethereum.org](http://eips.ethereum.org)，badge 显示 "⚠️ Draft"
    
-   ERC-8004 专门留了 x402 支付证明槽位（两者天然互补）
    

**Reference：**

-   MCP 官网：[https://modelcontextprotocol.io/](https://modelcontextprotocol.io/)
    
-   A2A GitHub：[https://github.com/a2aproject/A2A](https://github.com/a2aproject/A2A)
    
-   ERC-8004：[https://eips.ethereum.org/EIPS/eip-8004](https://eips.ethereum.org/EIPS/eip-8004)
    
-   GitHub MCP Search：[https://github.com/search?q=MCP+server+modelcontextprotocol（564](https://github.com/search?q=MCP+server+modelcontextprotocol（564) repos, 2026-05）
    

* * *

### **3\. Wallet / Permission**

**AI 侧：** AI 钱包异常检测、误触转款预防、人工确认判断。

**Web3 侧：**

-   **Safe**（原 Gnosis Safe）：多签钱包龙头，支持 Smart Account + ERC-1271 合约签名
    
-   **Session Key**：Safe 正在探索给 AI Agent 授权的方案——有限权限、限时、自动撤销
    
-   **ERC-7732**（推进中）：Smart Contract Wallet 接口标准
    
-   **ERC-6900**：模块化账户抽象，插件系统
    
-   趋势：从 EOA 转向 Smart Account，权限表达从"私钥控制"转为"代码规则"
    

**AI Agent 安全事件（2025-2026）：**

-   Prompt Injection 是 AI 钱包最大威胁：攻击者通过在对话/数据中注入恶意指令，让 AI Agent 执行非预期的链上交易（来源：AI Security 研究，NIST AI Framework）
    
-   2025 年有多起实验性 AI Agent 被诱导转移资产的案例（主要是研究/实验性质，尚未有大额损失报告）
    
-   核心问题：AI Agent 的 prompt 或 tool call 被污染后，无法区分"用户真实意图"和"注入指令"
    

**Reference：**

-   Safe：[https://safe.global/](https://safe.global/)
    
-   ERC-7732：[https://eips.ethereum.org/EIPS/eip-7732](https://eips.ethereum.org/EIPS/eip-7732)
    
-   NIST AI Security Framework：[https://csrc.nist.gov/pubs/ai/100/2/final](https://csrc.nist.gov/pubs/ai/100/2/final)
    

* * *

### **4\. Privacy / Security**

**AI 侧：** AI 需要识别敏感信息、防御注入攻击、保护用户数据不被泄露。

**Web3 侧：**

-   链上数据天然公开，AI 处理时面临数据暴露风险
    
-   **ZK + AI**：零知识证明用于证明"模型确实执行了某段代码而不暴露权重"——热点方向
    
-   **TEE（可信执行环境）**：Intel SGX、ARM TrustZone 用于 AI 推理隐私计算，硬件依赖强
    
-   **Prompt Injection 防御工具**：Rebuff（protectai/rewind）等专门检测注入攻击
    

**Reference：**

-   NIST AI Security：[https://csrc.nist.gov/pubs/ai/100/2/final](https://csrc.nist.gov/pubs/ai/100/2/final)
    
-   Rebuff：[https://github.com/protectai/rewind](https://github.com/protectai/rewind)
    

* * *

### **5\. Governance / Coordination**

**AI 侧：** AI 总结提案、追踪行动项、检查预算，辅助人做决策。

**Web3 侧：**

-   **Snapshot + OpenZeppelin Defender**：DAO 常用工具，已支持部分自动化
    
-   **Llamafolio、DeepDAO**：链上治理数据分析，AI 整合程度有限
    
-   趋势：AI 在治理中承担辅助角色（整理工作），核心决策仍由人做
    

**Reference：**

-   Snapshot：[https://snapshot.org/](https://snapshot.org/)
    
-   OpenZeppelin Defender：[https://www.openzeppelin.com/defender](https://www.openzeppelin.com/defender)
    

* * *

### **6\. Dev Tooling / 开发者工具**

**AI 侧：** 自然语言查询链上数据、代码自动生成、合约安全分析。

**Web3 侧：**

-   **AI Coding Assistants**：Cursor AI、GitHub Copilot、ChainGPT 等已支持 Solidity
    
-   **Smart Contract Security**：Slither（Trail of Bits）、Mythril、Certora、CertiK 等 AI 增强安全工具
    
-   **On-chain Data Access**：The Graph（索引）、Blockscout（浏览器 API）、Alchemy（Web3 API）
    
-   **各链原生 AI 集成动态（2025-2026）：**
    
    -   **Solana**：推出 AI Agent 程序，生态内有多个 AI+MCP 集成（solana-mcp 159⭐）
        
    -   **Base**：Coinbase 官方在 2025 年积极推进 Base AI 开发者工具集成
        
    -   **NEAR**：near-mcp（30⭐）提供 AI 友好的链上数据接口
        
    -   趋势：主流 L1/L2 都在推出原生 AI SDK 或官方 MCP Server，降低开发者接入门槛
        

**Reference：**

-   The Graph：[https://thegraph.com/](https://thegraph.com/)
    
-   Alchemy：[https://www.alchemy.com/](https://www.alchemy.com/)
    
-   Slither：[https://github.com/crytic/slither](https://github.com/crytic/slither)
    
-   solana-mcp GitHub：[https://github.com/solana-developers/solana-mcp](https://github.com/solana-developers/solana-mcp)
    

* * *

## **各方向 Hackathon 项目方向**

> 每个项目都必须同时依赖 AI 能力和 Web3 机制，单独靠 AI 或单独靠 Web3 都做不了。

### **1\. Payment / Commerce**

| 项目 | AI 做什么 | Web3 做什么 |
| --- | --- | --- |
| x402 支付中间件 | 一行代码自动处理 402 | x402 协议 + USDC 结算 |
| AI Agent 钱包 Dashboard | 可视化余额和消耗 | 链上 USDC 记录 |
| API 付费墙 | 按调用量自动结算 | x402 + 合约记录 |
| 多链支付聚合 | 自动选最优支付路径 | 多链钱包 + 稳定币 |

### **2\. Identity + Capability**

| 项目 | AI 做什么 | Web3 做什么 |
| --- | --- | --- |
| MCP Server 聚合平台 | 按能力搜索/分类 | MCP 协议 + 链上注册 |
| 多 Agent 协作编排器 | 拆解复杂任务、协调多 Agent | A2A/MCP 协议 |
| Agent 信誉查询工具 | 聚合多维度评分 | ERC-8004 链上记录 |
| 垂直领域 Agent 市场 | 按调用量计费 | MCP + x402 支付 |

### **3\. Wallet / Permission**

| 项目 | AI 做什么 | Web3 做什么 |
| --- | --- | --- |
| AI 钱包权限管理器 | 可视化权限范围 | Safe + Session Key |
| 链上交易异常检测 | ML 检测可疑交易 | 链上监控 |
| 预算控制面板 | 实时显示消耗进度 | 合约执行 |
| 多签协作工作流 | AI 作为特殊签名人 | Safe 多签 |

### **4\. Privacy / Security**

| 项目 | AI 做什么 | Web3 做什么 |
| --- | --- | --- |
| Prompt Injection 检测 | 检测注入意图 | 链上行为分析 |
| 链上数据差分隐私 | 自动模糊化敏感信息 | 公开账本处理 |
| AI Agent 安全审计 | 评估攻击面 | 合约权限分析 |
| 敏感信息保险箱 | 强制多重确认 | 合约锁定 |

### **5\. Governance / Coordination**

| 项目 | AI 做什么 | Web3 做什么 |
| --- | --- | --- |
| DAO 提案摘要 Bot | 总结 + 投票建议 | Snapshot 提案读取 |
| 预算执行追踪仪表盘 | 实时监控花销 | 链上预算记录 |
| 治理参与激励系统 | 给投票者发奖励 | POAP/合约空投 |
| 会议行动项 AI 助手 | 提取行动项 | 提案 + 投票记录 |

### **6\. Dev Tooling / 开发者工具**

| 项目 | AI 做什么 | Web3 做什么 |
| --- | --- | --- |
| On-chain Copilot | 自然语言查链上数据 | MCP + LLM + 多链 API |
| 智能合约阅读器 | 分析合约功能和安全点 | 代码分析 |
| Gas 优化建议工具 | 分析最优 gas 策略 | 链上数据 |
| 多链区块浏览器 | 统一界面查询 | 多链 API 聚合 |

* * *

## **各方向未解决核心问题**

| 方向 | 未解决问题 | 为什么值得做 |
| --- | --- | --- |
| Payment | AI 钱包风险控制（授权额度、异常检测） | 支付是刚需，安全是采用瓶颈 |
| Identity + Capability | 多 Agent 协作编排框架；Agent 能力验证防虚假 | 信任+协作是复杂任务基础，当前没有成熟方案 |
| Wallet | AI 误触转款预防；Prompt Injection 实时防御 | 安全是 AI 钱包最大障碍 |
| Privacy | ZK+AI 实用化；AI 输出不泄露链上隐私 | ZK+AI 是 2025-2026 热点，潜力大 |
| Governance | 低成本提案验证（结果和提案是否一致） | 治理核心，未被解决 |
| Dev Tooling | 自然语言到合约调用仍不可靠；AI 安全审计缺标准 | 开发体验直接影响采用率 |

* * *

## **综合评估矩阵**

| 方向 | AI+Web3 同时需要？ | 成熟度 | 热点 | 一周 demo？ | Hackathon 推荐 |
| --- | --- | --- | --- | --- | --- |
| Payment | ✅ | 🟢 生产级 | 🔴 热 | ✅ x402 SDK | ✅ |
| Identity + Capability | ✅ | 🟡 MCP 生产 / ERC-8004 草稿 | 🔴 热 | ✅ MCP SDK | ✅ |
| Wallet | ✅ | 🟡 发展中 | 🟡 中 | ⚠️ Safe SDK | ✅ |
| Privacy | ✅ | 🟡 研究阶段 | 🟡 中 | ⚠️ 安全 demo 复杂 | ✅ |
| Governance | ✅ | 🔴 早期 | 🟢 低 | ✅ 纯软件 | ⚠️ 需社区 |
| Dev Tooling | ✅ | 🟢 MCP 生产 | 🔴 热 | ✅ SDK 丰富 | ✅ |
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->








## **学习内容**

### **文档阅读（Ethereum 官方）**

抓取并阅读：Intro to Ethereum / Blocks / Proof of Stake / EVM / Gas

**关键信息：**

-   **Blocks**：12s 一个 Slot，随机 Validator 提议区块，批量打包交易成链
    
-   **Proof of Stake**：Validator 质押 32 ETH 作押金，作恶则 slash；Casper-FFG 最终性（约 2 Epoch = 12.8min）；LMD-GHOST 分叉选择
    
-   **EVM**：状态机 Y(S,T)=S'，所有节点执行同一代码必须得到相同结果
    
-   **Gas**：计算资源计量单位；Base Fee burned，Priority Fee 付给 Validator；Gas Limit 防止无限计算
    

* * *

### **分层架构（简述）**

```
L5 应用层   dApps / 前端 UI   ← 用户交互入口
L4 账户层   EOA / Smart Account   ← 谁签名、谁付钱、权限控制
L3 执行层   EVM + Gas        ← 一致地执行合约 + 资源约束
L2 协议层   Blocks + Consensus ← 批量打包交易、决定谁来写、防止分叉
L1 网络层   P2P Gossip       ← 节点发现、广播、同步
```

* * *

### **进阶挑战 1：各组件解决什么问题**

| 组件 | 解决的问题 | 类比 |
| --- | --- | --- |
| Blocks | 交易量大无法逐条确认 → 批量打包给全网留出共识时间 | 快递攒够一波再发车 |
| Consensus（PoS） | 谁来写入 + 防止分叉/作恶 → 押金+随机抽签+slash惩罚 | 押金制度，抽签决定记账人 |
| EVM | 全网状态一致 → 所有节点跑同一代码得到相同结果 | 同一个 Excel 公式，所有人都算到同一结果 |
| Gas | 防止无限计算 + 资源定价 → 按 Opcode 成本收费 | 医院挂号费按复杂度收，防止占号不走 |

**四者关系：**

```
用户签名交易
  → 被 Validator 打包进 Block（协议层：批量确认顺序）
  → EVM 执行合约字节码（执行层：一致地改变状态）
  → Gas 计量本次执行的计算量（资源层：防止滥用 + 定价）
  → 状态变更被写回链上，全网同步
```

* * *

### **进阶挑战 2：链上执行 vs 普通后端调用**

本周测试网体验（部署合约、`eth_call`、Swap）让你亲身感受到差异：

| 维度 | 普通后端 | 链上执行 |
| --- | --- | --- |
| 数据所有权 | 你控制数据库，可随时修改 | 全网共识，无单点控制 |
| 修改权限 | 随时可改代码/回滚 | 合约部署后只能按原逻辑执行 |
| 故障恢复 | 回滚数据库、重发请求 | 无法回滚，只能发新交易修复 |
| 执行成本 | API 计费，固定或免费 | Gas，按计算量定价，可能超出预期 |
| 状态范围 | 私有状态 | 公开全局状态，所有人可读取 |

**链上执行 = 不可逆的全局状态写入 + 全网验证 + 资源付费，三者缺一不可。**

**为什么** `eth_call` **看起来像普通 API？** `eth_call` 是只读模拟执行，不写链、不付 Gas、不需要签名。但真实交易 `eth_sendTransaction` 需要钱包签名、付 Gas、等区块确认，且结果不可逆。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->









## **今日完成**

### **受限 Web3 助手设计**

新建 `tasks/DeFi-Swap-Assistant.md`：

-   **AI 能做：** 规划、报价查询、风险检查、生成交易说明、验证结果
    
-   **AI 不能做：** 接触私钥、自动签名、自动授权
    
-   **3 个人工确认点：** 钱包连接 → Approve 授权 → Swap 签名
    
-   **5 类风险：** 数据源污染、用户盲从签字、链上状态变化、AI 无法识别所有诈骗、敏感信息保存
    

### **项目拆解**

新建 `tasks/AIxWeb3-Project-Dissection.md`，拆解两个真实项目：

**x402（生产级）**

-   解决：AI Agent 怎么给 API 付钱
    
-   核心：HTTP 402 + USDC，75M 笔/月
    
-   成员：Stripe、Visa、Circle、Cloudflare、Coinbase 等 23 家
    

**ERC-8004（Draft）**

-   解决：AI Agent 怎么建立和传递信任
    
-   核心：ERC-721 身份 + Reputation Registry + Validation Registry
    
-   注意：Draft 状态，落地需核实
    

**两者关系：** ERC-8004 管信任，x402 管结算，合在一起是 AI Agent 经济的基础设施栈。

### **ethskills skill 保存**

从 [https://ethskills.com/SKILL.md](https://ethskills.com/SKILL.md) 下载并保存为 Hermes skill。

关键事实：

-   Gas < 1 gwei（主网 Swap 约 $0.04）
    
-   EIP-7702 已上线
    
-   Polygon zkEVM 即将关停
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->










### **主题 1：Vibe Coding（氛围编程）**

**一句话解释：** 人和 AI Coding Agent 共同迭代软件的工作方式，人负责方向、约束和验收，Agent 负责生成、修改、搜索和执行工程动作。不是"把需求丢给 AI 等代码"，而是更清楚地管理 repo、任务、上下文、测试和提交边界。

**核心理念：** AI Coding 的核心不是自动生成代码，而是把工程反馈循环压短。任务要小、上下文要准、验证要硬。

**Vibe Coding 适合：**

-   搭原型
    
-   修小 bug
    
-   补测试
    
-   写脚本
    
-   重构局部模块
    
-   解释陌生代码
    

**Vibe Coding 不适合：** 无边界地"重写整个项目"，任务范围太大 Agent 很容易改到不该改的地方。

**Claude Code / Codex CLI：** 把 AI Agent 放进本地开发环境，让它读文件、改文件、跑命令、理解测试输出。关键是明确：哪些文件可以改、哪些命令可以跑、是否允许安装依赖、什么时候必须停下来让人确认。

**Model / API Config：** AI Coding 不只看"哪个模型最强"，还要管理 API key 不泄漏到日志、上下文太长导致成本失控、工具权限是否合适。好的配置应该能被团队复用。

**GitHub / gh：** 让 Agent 多做局部 patch，少做不可追踪的大改动。每次改动后至少看：`git diff`、修改文件列表、测试结果、是否包含不该提交的密钥或日志。

**在 AI × Web3 中的位置：** 链上相关代码（合约、签名、权限、支付、迁移脚本）风险更高，不能只靠 Agent 生成后直接上线。Vibe Coding 可以帮你写测试、解释 ABI、生成脚本，但高风险动作必须经过审查、模拟和多方确认。

* * *

### **主题 2：Evaluation（评估）**

**一句话解释：** 把"感觉效果不错"变成"系统可持续改进"的方法。没有 eval，prompt、模型、RAG、Agent 和工具调用的变化都只能靠主观试用判断，迟早会被回归问题拖住。

**核心原则：** 不能被重复测量的 AI 行为，就不能被稳定改进。先测任务不只测模型，先保住关键失败场景，评估要贴近产品。

**Harness：** 运行 eval 的框架，负责喂样本、调用系统、收集输出、运行 grader、记录结果。可重复才能比较不同 prompt、不同模型、不同检索策略。

**Golden Set：** 一组认真挑选和标注的测试样本，不求大，早期 30-100 条高质量样本比一堆随便收集的问题更有用。包含：常见问题、边界问题、容易误判的问题、高风险问题、历史 bug、用户真实反馈样本。

**LLM-as-Judge：** 用模型给模型输出评分，适合评估开放式答案。但不能神化——Judge 模型也会偏、会漏。对可自动判断的字段用规则评分，对开放式质量用 LLM judge，对高风险样本保留人工抽检。

**Regression：** 防止旧问题复发。用户反馈一个错误 → 复现并记录输入 → 标注期望输出 → 加入 regression set → 之后每次发布前跑一次。"修 A 坏 B" 是 AI 应用的常见问题。

**Observability：** 线上观察系统行为。至少记录：输入类型和来源、检索结果、工具调用、模型输出、错误和重试、用户反馈、成本和延迟。没有 observability 就不知道真实用户在哪里失败。

**在 AI × Web3 中的位置：** 需要特别评估：交易解释是否准确、风险提示是否漏报、工具调用参数是否越界、是否能拒绝不确定请求、是否能识别 Prompt Injection、高风险动作是否要求 human check。

* * *

### **主题 3：Fine-tuning（微调）**

**一句话解释：** 让模型更稳定地学习某种格式、风格、领域任务或行为模式。不适合用来补实时知识、修权限边界或替代评估。

**核心原则：** Fine-tuning 改的是模型行为分布，不是产品系统边界。先有 eval，再谈 fine-tuning；先修数据，再修模型；别用微调存实时知识。

**什么时候才考虑微调：**

-   prompt 已经优化到极限
    
-   上下文已经塞不下更多示例
    
-   检索已经调到最优
    
-   eval 证明问题稳定存在
    

**SFT（Supervised Fine-Tuning）：** 使用输入和期望输出样本，让模型学习某类任务的回答方式。适合固定格式输出、特定语气或风格、特定任务流程、领域术语和回答习惯。对数据质量非常敏感——坏数据会把坏习惯训练得更稳定。

**LoRA（Low-Rank Adaptation）：** 不直接更新全部模型参数，而是训练较小的适配参数，降低训练成本和显存需求。适合资源有限、想快速试验特定任务的团队。是 PEFT 的一种。

**PEFT（Parameter-Efficient Fine-Tuning）：** 参数高效微调方法的统称，LoRA 是其中一种。不需要重新训练整个模型，通过较小参数调整让模型适配某个任务或领域。

**Dataset：** 微调的核心资产。不只是"很多问答对"，还要有清楚的任务定义、输入来源、输出标准、质量检查和切分方式。区分训练集、验证集、测试集、回归集，不要把测试集拿去训练。

**Overfitting：** 模型把训练数据记得太死，对新样本表现变差。微调时尤其容易出现：训练样本太少、样本风格太单一、训练轮数太多、目标格式过度僵化。结果是模型在准备的例子上看起来很好，但真实用户一问就崩。

**在 AI × Web3 中的位置：** 可用于：交易解释风格、治理摘要格式、风险标签输出、合约注释风格、工具调用样式。不适合替代：链上实时状态查询、合约安全审计、交易模拟、钱包权限控制、用户确认、外部事实引用。

* * *

### **主题 4：Inference（推理服务）**

**一句话解释：** 训练决定模型学到了什么，推理决定模型在真实产品里如何响应用户。Inference 不是云服务按钮，而是延迟、成本、上下文、稳定性和部署边界的综合选择。

**核心原则：** 推理服务的核心不是"跑出答案"，而是在约束条件下交付可用答案。质量有代价——更强模型通常意味着更高成本、更长延迟或更复杂部署；部署改变边界——API model 少管基础设施，本地模型多拿控制权；服务要可替换——把模型调用封装清楚，才有机会做 fallback、灰度和评估。

**API Model：** 通过云端服务调用模型（OpenAI、Claude 等），上手快、模型更新快、基础设施负担低。但要处理速率限制、超时、重试、日志脱敏、账单控制、版本变更和输出回归。Agent 场景一次用户请求可能触发多轮模型调用，成本和延迟会被放大。

**Local Model：** 在自有设备、服务器或私有环境中运行模型，适合隐私要求高、成本敏感、离线运行或需要深度定制的场景。限制：模型权重、显存、上下文窗口、并发能力、量化方式、推理框架都会影响效果。本地模型不是替代所有 API，而是承担特定任务：分类、抽取、代码补全、轻量 Agent、隐私数据处理或 fallback。

**Quantization（量化）：** 把模型权重或计算精度降低（FP16 → INT8/INT4），用更少显存和计算资源运行模型，让个人电脑、小 GPU 或边缘设备运行大模型成为可能。问题：可能降低输出质量，尤其是长推理、代码生成、多语言、数学和工具调用场景。判断量化模型是否可用，要用你自己的任务样本测试，不能只靠主观聊天体验。

**Serving：** 把模型部署成可被应用调用的服务，涉及模型加载、请求队列、批处理、GPU 利用率、token streaming、日志、指标、健康检查和扩缩容。一个成熟的推理服务要回答：请求失败时怎么重试或降级？模型版本怎么灰度？输入输出日志如何脱敏？长请求是否要进入队列？成本、延迟和错误率如何监控？

**在 AI × Web3 中的位置：** 链上动作不可逆，推理层就不能像普通聊天一样随意。如果模型要参与交易解释、合约分析、策略建议或 Agent 执行，推理服务必须留下可审计记录：用了哪个模型、输入来自哪里、输出是什么、是否触发工具、失败时如何处理。

* * *

### **任务：AI × Web3 综合任务｜画出 AI × Web3 最小交叉流程图**

在Hermes Agent的辅助下，完成这个任务。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->











### **主题 1：LLM 核心概念**

**Token — 模型的「词」**

LLM 不认识文字，只认识 Token（词元）。

**Token 规则（GPT-4o / cl100k\_base 编码器）：**

| 类型 | 示例 | Token 数 |
| --- | --- | --- |
| 英文单词 | hello | 1 |
| 英文句子 | hello world. how are you? | 7 |
| 中文单字 | 你好 | 2 |
| 中文句子 | 人工智能正在改变世界 | 11 |
| 代码 | function set(uint256 _n) public { number = _n; } | 15 |
| 钱包地址 | 0x85C6F429...（42字符） | 24 |

**实用公式：**

```
1 token ≈ 0.75 个英文单词
1 token ≈ 1-2 个汉字
1000 tokens ≈ 750 英文单词 ≈ 500-1000 汉字
```

**为什么重要：**

-   **计费**：API 按 token 收费，输入+输出总 token 数
    
-   **长度限制**：Context Window 按 token 算，不是字数
    

**Context Window — 模型的「内存」**

一次对话能塞进去的最大 token 数（包括输入+输出）。

**常见模型 Context Window：**

| 模型 | Context Window |
| --- | --- |
| GPT-4o / GPT-4o-mini | 128K tokens |
| Claude 3.5 Sonnet | 200K tokens |
| Qwen（通义千问） | 32K tokens |

**实际影响：**

-   超过的部分模型「看不到」
    
-   对话历史太长，早期内容会被「挤掉」
    
-   你的 SimpleStorage 合约（48 tokens）只占 GPT-4o Context 的 0.04%
    

**能力边界**

**能做：**

-   ✅ 续写文字（代码、文章、对话）
    
-   ✅ 理解上下文（分析、总结、翻译）
    
-   ✅ 推理（一步一步思考）
    
-   ✅ 调用工具（通过 Tool Use）
    

**不能做或做不好：**

-   ❌ 实时信息（知识有截止日期）
    
-   ❌ 精确计算（大数乘法可能出错）
    
-   ❌ 真正执行代码（只是模拟执行）
    
-   ❌ 长期记忆（每次对话独立）
    
-   ❌ 保证 100% 正确（会有幻觉 Hallucination）
    

**模型选择**

| 场景 | 推荐 | 原因 |
| --- | --- | --- |
| 日常对话 / 学习 | GPT-4o-mini / Claude 3.5 Haiku | 便宜、够用 |
| 代码生成 / 复杂推理 | GPT-4o / Claude 3.5 Sonnet | 能力强 |
| 长文本分析（>32K） | Claude 3.5 Sonnet | 200K context |
| 国内无法访问 OpenAI | 硅基流动 / 阿里通义 | 合规，可白嫖 |

* * *

### **主题 2：Prompt Engineering**

**核心原则：模型是「阅读理解」，不是「心灵感应」。Prompt 是唯一的沟通渠道。**

**1\. 结构化 Prompt — 四件套**

```
角色 + 任务 + 格式 + 约束
```

**示例：**

❌ 模糊：

```
写一个 ERC-20 合约
```

✅ 清晰：

```
角色：你是一个 Solidity 高级工程师。
任务：写一个 ERC-20 代币合约。
格式：完整可部署代码 + 注释。
约束：用 Solidity 0.8+，包含 mint、transfer、balanceOf。
```

**2\. Few-shot — 给例子**

模型很懂「照着例子做」，比抽象描述更有效。

**零样本（zero-shot）：**

```
把 'BTC' 分类到以下之一：货币 / 股票 / 商品
→ 输出可能不稳定
```

**少样本（few-shot）：**

```
ETH → 商品
AAPL → 股票
BTC → （模型学着前例的模式输出）
```

**3\. Chain-of-Thought (CoT) — 分步推理**

在 prompt 末尾加一句「请一步一步思考」，显著提升复杂推理准确率。

**不加 CoT：** 模型秒答，可能错。 **加 CoT：** 先想再答，更准。

**4\. Temperature — 创意 vs 确定性**

| 参数 | 0（低） | 0.7（中） | 1（高） |
| --- | --- | --- | --- |
| 风格 | 确定、一致 | 平衡 | 随机、创意 |
| 适合 | 代码翻译、factual 问答 | 写作、解释 | 头脑风暴、起名字 |

**5\. max\_tokens — 控制输出长度**

-   模型不知道自己该停在哪
    
-   `max_tokens` = 上限，不是目标
    
-   设太小会截断，设太大会浪费 token
    

* * *

### **主题 3：Context 与 RAG**

**手动 Context**

直接把内容放进 messages 里，简单但量大了超 Context。

```
context = """
ERC-20 是以太坊代币标准...
"""
response = client.chat.completions.create(
    messages=[
        {"role": "system", "content": "你是一个智能合约专家"},
        {"role": "user", "content": f"{context}\n\n问题：ERC-20 和 ERC-721 有什么区别？"}
    ]
)
```

**RAG — 检索增强生成**

**RAG = R**etrieval **A**ugmented **G**eneration

流程：

```
用户问题 → 检索（从知识库找相关片段）→ 把片段 + 问题一起发给 LLM → 生成答案
```

**核心概念：向量 Embedding**

-   把文字转成数字向量（Embedding）
    
-   意思相近的文字 → 向量也「近」
    
-   检索时：把问题也转成向量 → 找「距离最近」的知识片段
    

**RAG 工具链：**

| 组件 | 工具 | 说明 |
| --- | --- | --- |
| Embedding | OpenAI text-embedding-3 / Jina AI | 文字 -> 向量 |
| 向量数据库 | ChromaDB（轻量）、Pinecone（云） | 存向量 + 检索 |
| 框架 | LangChain、LlamaIndex | 封装好的 RAG 流程 |

**多轮对话 Context 管理方案：**

| 方案 | 说明 | 缺点 |
| --- | --- | --- |
| 滑动窗口 | 只保留最近 N 条 | 早期上下文永久丢失 |
| Summarization | 压缩历史成摘要 | 可能有信息损失 |
| RAG | 存入向量库，需要时检索 | 实现复杂 |
| Agent Memory | 自己决定存什么取什么 | Hermes Agent 就是这种 |

* * *

### **主题 4：Agent**

**Agent = LLM + 工具 + 循环控制**

```
用户问题 → LLM 判断用哪个工具 → 执行 → 拿到结果
    → LLM 判断结果够不够 → 继续循环 or 输出最终答案
```

**1\. Tool Use（Function Calling）**

让 LLM「调用函数」的能力。LLM 判断需要调用什么工具，输出函数名+参数，系统执行后返回结果。

```
response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "BTC 现在多少钱？"}],
    tools=[{
        "type": "function",
        "function": {
            "name": "get_crypto_price",
            "parameters": {
                "type": "object",
                "properties": {"symbol": {"type": "string"}},
                "required": ["symbol"]
            }
        }
    }]
)
```

**2\. ReAct = Reason + Act**

最经典的 Agent 循环模式。

```
用户：我的钱包够付这笔 Gas 吗？

Think: 需要查余额、Gas 费用，然后比较。
Act: get_balance() → 0.05 ETH
Act: get_gas_price() → 20 Gwei
Act: 估算 Gas = 21000 * 20 = 0.00042 ETH
Reason: 0.05 > 0.00042，够付
Output: 够付，预计手续费约 0.00042 ETH。
```

**3\. Multi-step Execution**

任务拆成多步，每步可调用不同工具。适合复杂任务如合约安全检查。

**4\. Agent vs 传统程序**

|   | 传统程序 | Agent |
| --- | --- | --- |
| 流程 | 预设、线性 | LLM 决定下一步 |
| 分支 | 人工写 if/else | LLM 推理判断 |
| 新情况 | 要改代码 | 自动适应 |
| 可靠性 | 确定 | 有幻觉风险 |

**Web3 + Agent 实际组合**

| 组合 | 工具 | 能力 |
| --- | --- | --- |
| 合约问答 | eth_getCode, eth_call | 读合约状态、解释逻辑 |
| 链上分析 | eth_getBlock, eth_getTransactionByHash | 分析钱包活动 |
| 交易执行 | eth_sendTransaction | 自动执行 swap（高风险！） |
| Smart Account 策略 | session key, policy check | 根据策略审批交易 |

* * *

### **主题 5：MCP — Model Context Protocol**

**MCP = 标准化方式让 AI 连接外部工具和数据源**

**类比：USB 接口**

-   以前每个工具各自实现接口 → 混乱
    
-   USB 统一后所有设备用同一协议 → 即插即用
    
-   MCP = AI 工具的「USB」
    

**MCP 架构**

```
MCP Host（Claude / Hermes / Cursor）
    ↓ MCP 协议
MCP Client（连接多个 Server）
    ↓
┌─────────────┬─────────────┬─────────────┐
│ File Server │ Web Server  │ ETH Server  │
└─────────────┴─────────────┴─────────────┘

每个 Server 暴露：
  - Resources（只读数据）
  - Tools（可执行操作）
  - Prompts（预定义模板）
```

**MCP 的核心价值**

| 对比项 | 传统 Tool Use | MCP |
| --- | --- | --- |
| 接入新工具 | 改 Prompt、加 adapter | 加一个 Server 配置行 |
| 工具描述 | 人工写在 Prompt 里 | Server 用 JSON Schema 自描述 |
| 工具更新 | 改 Prompt、改代码 | Server 更新，Client 自动同步 |
| 跨 Agent 复用 | 各 Agent 各自实现 | 任何 MCP Host 可用同一 Server |

**Web3 MCP Server 能做什么**

| Tool | 作用 |
| --- | --- |
| eth_getBalance | 查 ETH 余额 |
| eth_call | 调用合约只读函数 |
| eth_getCode | 查合约字节码 |
| eth_getLogs | 查 Events 日志 |
| eth_sendTransaction | 发送交易（慎用！） |
| eth_getTransactionReceipt | 查交易回执 |

**Hermes Agent 已内置 MCP Client**

`~/.hermes/config.yaml` 里有 `mcp.servers` 配置，这就是为什么 Hermes 能直接用 filesystem、terminal 等 skills。

* * *

### **主题 6：Frameworks 对比**

**三个框架定位**

**\[LangChain\]** — 全功能框架

-   优势：文档最全、生态最广、几乎所有 LLM/工具都有集成
    
-   劣势：偏重、版本迭代快、调试难
    
-   最适合：Hackathon 快速原型（文档多，踩坑有解）
    

**\[LangGraph\]** — DAG 工作流（基于 LangChain）

-   优势：流程可视化、多步骤/分支/循环、状态管理好
    
-   劣势：学习曲线比 LangChain 陡
    
-   最适合：复杂 Agent（多轮对话、有状态、循环）
    

**\[OpenAI Agents SDK\]** — 轻量官方 SDK

-   优势：轻量、OpenAI 亲儿子、简单场景很快
    
-   劣势：生态少（才出不久）、深度定制要自己写
    
-   最适合：简单 Agent / 学习阶段 / 不想被框架绑架
    

**按场景选框架**

| 场景 | 推荐 |
| --- | --- |
| Hackathon 快速原型（24-48h） | LangChain |
| 多步骤复杂 Agent（ReAct 循环） | LangGraph |
| 简单 Few-shot 工具调用 | OpenAI Agents SDK |
| 长期运行 / 状态持久化 | LangGraph + 外部 DB |
| 主要是 RAG + 问答 | LlamaIndex |
| 学习阶段 | Agents SDK 或直接 API |

**最小代码对比**

```
# 1. 直接 API（无框架）
from openai import OpenAI
client = OpenAI(api_key="sk-...")
resp = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "hi"}]
)

# 2. OpenAI Agents SDK
from agents import Agent
agent = Agent(instructions="你是助手", model="gpt-4o-mini", tools=[...])
result = agent.run("hi")

# 3. LangGraph
from langgraph.prebuilt import create_react_agent
agent = create_react_agent(model, tools=[...])
result = agent.invoke({"messages": [{"role": "user", "content": "hi"}]})
```
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->












## **学习内容**

### **主题 1：测试网交易任务**

**目标：** 在 Sepolia 测试网上完成一笔真实链上交易，并学会用区块浏览器验证。

**完成情况：**

-   Google Cloud Web3 Faucet 领取了 0.05 Sepolia ETH
    
-   MetaMask Account 1 转 0.001 ETH 到 Account 2
    
-   交易哈希：`0xf3ec5e31582bebc2acca8b2d0d1802bd25b53746801851c578fdf35f2bb5c74a`
    
-   区块浏览器：[https://sepolia.etherscan.io/tx/0xf3ec5e31582bebc2acca8b2d0d1802bd25b53746801851c578fdf35f2bb5c74a](https://sepolia.etherscan.io/tx/0xf3ec5e31582bebc2acca8b2d0d1802bd25b53746801851c578fdf35f2bb5c74a)
    

**知识点：**

1.  **交易从哪里发起** → MetaMask（钱包签名）
    
2.  **交易发送到哪里** → 接收方地址（EOA 或合约地址）
    
3.  **交易哈希** → 交易的唯一 ID，类似快递单号
    
4.  **区块浏览器** → 区块链的公开搜索引擎，可查状态、Gas、区块高度、时间
    
5.  **人工确认步骤** → 点 Send、输入地址、输入金额、点 Confirm（私钥从不触网）
    

### **主题 2：智能合约部署与调用**

**目标：** 在测试网部署一个最小合约，理解合约地址、Read/Write、交易确认。

**完成情况：**

-   部署 SimpleStorage 合约到 Sepolia
    
-   合约地址：`0x85C6F429c85e0083c1AEfe0feb2151D302720307`
    
-   部署交易：`0x0f0b2ae49defb052fd9b945ad09cd19f3b0a51ca8b0c382f0a791ad28c29b01d`
    
-   Read `number()` → 初始值 0
    
-   Write `set(42)` → 交易 `0x51d172a08915482a3603a0384e2e8270eda97b66289736f81b29d218b051bf12`
    
-   再次 Read `number()` → 返回 42，证明写入成功
    

**Read vs Write 区别：**

| 操作 | 钱包签名 | Gas 费用 | Remix 按钮颜色 |
| --- | --- | --- | --- |
| Read（读取） | ❌ 不需要 | 0 | 蓝色 |
| Write（写入） | ✅ 需要 | 需付 Gas | 橙色 |

**合约代码（SimpleStorage.sol）：**

```
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.34;

contract SimpleStorage {
    uint256 public number;
    function set(uint256 _number) public {
        number = _number;
    }
}
```

### **主题 3：Indexing（索引）**

**核心问题：** 区块链数据量巨大，直接遍历区块查询不现实。Indexing = 建立索引加速查询。

**Events 和 Logs：**

-   合约通过 `emit` 发出 Events，数据存在 Logs 区（比 Storage 便宜）
    
-   Etherscan 的 Events 标签可查，但需要合约主动 emit
    
-   SimpleStorage 没有写 emit，所以 Events 标签显示 "0 results"
    

**The Graph：**

-   去中心化索引协议，建立 Subgraph 用 GraphQL 查询
    
-   将链上 Events 建立成可查询的索引数据库
    
-   主流 dApp（Uniswap、ENS、Aave）都有公开 Subgraph
    

```
区块链 → Events/Logs（原始数据）
    ↓
The Graph → Subgraph 索引
    ↓
GraphQL 查询 → 快速返回
```

**实际应用场景：**

-   查询某地址所有 USDT 转账记录
    
-   查询 NFT 系列持有人列表
    
-   查询 DEX 所有交易对
    

### **主题 4：Security（安全）**

**四大经典漏洞：**

**1\. Reentrancy（重入攻击）**

-   原理：合约调用外部代码时，外部代码递归回调原合约
    
-   防御：`checks-effects-interactions` 模式（先清零再转账）
    

**2\. Integer Overflow / Underflow**

-   Solidity 0.8+ 自动检查溢出，0.8 之前需要 SafeMath 库
    

**3\. Access Control（访问控制）**

-   关键函数没有 `onlyOwner` 等权限修饰符
    
-   `tx.origin` 代替 `msg.sender` 容易被钓鱼
    
-   防御：用 `modifier` 限制权限，最小权限原则
    

**4\. Front-Running（抢先交易）**

-   原理：攻击者看到 pending 交易，提高 Gas 抢先执行
    
-   防御：Commit-Reveal 方案
    

**安全工具：**

| 工具 | 用途 |
| --- | --- |
| Slither | Trail of Bits 出品，自动检测常见漏洞 |
| Mythril | 符号执行检测漏洞 |
| OpenZeppelin Contracts | 经过审计的安全库 |
| echidna | 模糊测试 |

**SimpleStorage 安全评估：**

-   重入风险：✅ 无外部调用
    
-   溢出风险：✅ Solidity 0.8 自动检查
    
-   访问控制：⚠️ `set` 无权限控制，谁都能改（练习合约，无所谓）
    

### **主题 5：Dev Stack（开发工具链）**

**完整流程：**

```
写代码 → 编译 → 部署 → 测试 → 前端交互
```

**工具对比：**

| 类别 | 工具 |
| --- | --- |
| 语言 | Solidity（Vyper、Huff） |
| 编译器 | solc / solc-js |
| 部署框架 | Hardhat（JS/TS）/ Foundry（Rust，更快） |
| 前端交互 | ethers.js / viem |
| 节点服务 | Alchemy / Infura / QuickNode |
| 去中心化存储 | IPFS / Filecoin |

**ethers.js 示例（读取合约）：**

```
const provider = new ethers.JsonRpcProvider("https://sepolia...");
const contract = new ethers.Contract(
    "0x85C6F429...",
    ABI,
    provider
);
const number = await contract.number();  // Read，不花钱
```

**ethers.js 示例（写入合约）：**

```
const signer = await provider.getSigner();
const contractWithSigner = contract.connect(signer);
const tx = await contractWithSigner.set(42);  // Write，要 Gas
await tx.wait();  // 等链上确认
```

**Hardhat 项目结构：**

```
my-project/
├── contracts/       ← 合约代码
├── scripts/         ← 部署脚本
├── test/            ← 测试文件
├── hardhat.config.js
└── package.json
```

## **实践与实验**

-   ✅ Sepolia 测试网领取 faucet（Google Cloud Web3）
    
-   ✅ 完成一笔 ETH 转账，用区块浏览器验证
    
-   ✅ 部署 SimpleStorage 合约到 Sepolia
    
-   ✅ 在 Remix 中完成 Read 和 Write 操作
    
-   ✅ 验证 Write 交易在区块浏览器中的记录
    

## **问题与卡点**

**Q：所有 faucet 都要主网余额怎么办？** A：Google Cloud Web3 Faucet（[https://cloud.google.com/application/web3/faucet/ethereum/sepolia）只填地址不查主网余额，最容易。](https://cloud.google.com/application/web3/faucet/ethereum/sepolia）只填地址不查主网余额，最容易。)

**Q：合约没有 emit 语句，Events 标签是空的？** A：正常。Events 需要合约主动 `emit`，SimpleStorage 没有写，所以没有 Events 记录，但 Transactions 标签里还是有数据的。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->













````
## 一、Smart Contract（智能合约）

### 1.1 什么是智能合约

**通俗理解：** 链上的自动售货机
- 放钱进去（触发条件）
- 按按钮（调用函数）
- 东西掉出来（执行结果）

**特点：**
- 部署后任何人可调用
- 代码即法律，规则无法篡改
- 没有人能关掉它（去中心化）

### 1.2 部署（Deploy）

```
合约代码 → Solidity 编译 → 字节码 → 发送到链上
                                        ↓
                              获得合约地址（Contract Address）
```

**Remix JavaScript VM：** 本地模拟区块链，刷新后数据消失，适合练习。

### 1.3 调用（Call）

| 类型 | 关键词 | Gas | 说明 |
|------|--------|-----|------|
| 读取 | `view` / `pure` | 免费 | 只读，不修改链上状态 |
| 写入 | 普通函数 | 付费 | 修改状态，发交易 |

```solidity
function getGreeting() public view returns (string memory) {
    return greeting;  // 免费调用
}

function setGreeting(string memory newGreeting) public {
    greeting = newGreeting;  // 付费调用，消耗 Gas
}
```

### 1.4 状态（State）

状态变量存储在链上，持久化。

```solidity
contract HelloWorld {
    string public greeting = "Hello, Web3!";  // 状态变量，链上存储
    uint256 public counter = 0;  // 计数器
}
```

### 1.5 数据存储：memory vs storage

| 类型 | 含义 | 生命周期 |
|------|------|---------|
| `storage` | 永久存储（状态变量）| 链上持久化 |
| `memory` | 临时内存（局部变量）| 函数调用结束消失 |

```solidity
function getArray() public view returns (uint256[] memory) {
    uint256[] memory temp = myArray;  // 复制到 memory
    return temp;
}
```

### 1.6 函数可见性（Visibility）

```solidity
function foo() public { }      // 任何人都能调用
function foo() external { }    // 只能外部调用
function foo() internal { }   // 只能内部（合约自己 + 继承子合约）
function foo() private { }     // 只能本合约内部
```

**安全建议：** 状态变量不要轻易设 `public`，内部函数用 `internal` / `private`。

### 1.7 合约间调用

**方式 A：直接调用**

```solidity
OtherContract c = OtherContract(otherContract);
return c.getValue();
```

**方式 B：低层调用（更灵活）**

```solidity
(bool success, bytes memory data) = otherContract.call(
    abi.encodeWithSignature("getValue()")
);
```

### 1.8 事件（Events）

```solidity
event Transfer(address indexed from, address indexed to, uint256 value);

function transfer(address to, uint256 amount) public {
    emit Transfer(msg.sender, to, amount);  // 触发事件，写入日志
}
```

**为什么重要：**
- Event 写入 Gas 便宜（只是日志）
- 状态变量写入 Gas 贵
- DApp 前端监听 Event 更新界面

### 1.9 错误处理

```solidity
function withdraw(uint256 amount) public {
    require(balance >= amount, "Insufficient balance");  // 推荐
    if (amount > maxWithdrawal) {
        revert("Amount exceeds maximum");
    }
    assert(amount > 0);  // 检查不应该发生的情况
}
```

### 1.10 继承（Inheritance）

```solidity
contract Animal {
    function eat() public pure returns (string memory) {
        return "eating";
    }
}

contract Dog is Animal {
    function bark() public pure returns (string memory) {
        return "woof";
    }
}
```

---

## 二、Account Abstraction（账户抽象）

### 2.1 EOA 的限制

| 问题 | 影响 |
|------|------|
| 必须有 ETH 才能发交易 | 新用户无法入门 |
| 私钥丢失 = 资产全丢 | 无法恢复 |
| 权限无法细分 | 不能只授权"每天转 100U" |
| 所有操作都要签名 | AI Agent 执行 100 笔 = 点 100 次 |

### 2.2 Smart Account（智能账户）

Smart Account 是一个**部署在链上的合约**，替代 EOA：

```
EOA：私钥 → 直接控制账户 → 发交易

Smart Account：
  私钥 → 签名 → 发消息给合约 → 合约规则判断 → 执行
```

**合约规则可以定义：**
- 多签（3 人里 2 人签名）
- 社交恢复（换个私钥）
- 消费限额（每天最多 100U）
- 过期时间（30 天后自动锁定）
- Gas 代付（别人帮你付）

### 2.3 ERC-4337：账户抽象标准

ERC-4337 是以太坊官方 Smart Account 标准。

**核心流程：**

```
UserOperation（用户操作）
    ↓ Bundler 打包
EntryPoint（入口合约）
    ↓ 验证 + 执行
Smart Account（你的账户合约）
    ↓
执行实际操作
```

**关键组件：**

| 组件 | 作用 |
|------|------|
| Smart Account | 你的账户合约，存你的规则 |
| EntryPoint | 统一入口，验证 UserOp 然后执行 |
| Bundler | 把多个 UserOp 打包成一笔交易 |
| Paymaster | 替别人付 Gas |

### 2.4 Session Key（会话密钥）

Session Key = 给 AI Agent 发的"临时门禁卡"：

```
用户授权 AI Agent：
  - 30 天内有效
  - 每天最多 500U
  - 只能操作特定合约

→ AI Agent 用 Session Key 签名
→ 合约验证这个 Key 有权限
→ 执行交易
```

**优点：**
- AI Agent 不知道主私钥
- 权限受限，不会被盗刷
- 过期自动失效

### 2.5 架构图

```
┌─────────────────────────────────────────┐
│  用户主私钥（绝对保密）                  │
└─────────────────────────────────────────┘
              ↓ 授权
┌─────────────────────────────────────────┐
│  Smart Account（合约规则）               │
│  - 多签？  - 消费限额？  - 过期时间？   │
└─────────────────────────────────────────┘
              ↓ 验证
┌─────────────────────────────────────────┐
│  Session Key（给 AI Agent 的临时权限）   │
│  - 只能操作白名单合约                    │
│  - 每日额度限制                          │
│  - 30天过期                              │
└─────────────────────────────────────────┘
              ↓ 执行
┌─────────────────────────────────────────┐
│  区块链（实际执行）                      │
└─────────────────────────────────────────┘
```

---

## 三、Network（网络层）

### 3.1 区块（Block）

```
区块结构：
┌──────────────────────────────────┐
│ Block Number, Hash, Timestamp    │
│ Previous Hash（连接上一区块）     │
│ Transactions Root（Merkle 树）   │
│ State Root（状态树）             │
│ Gas Used / Gas Limit             │
└──────────────────────────────────┘
        ↓
   ~12秒出一个块（以太坊 PoS）
```

### 3.2 共识机制（Consensus）

| | PoW（工作量证明）| PoS（权益证明）|
|--|-----------------|----------------|
| 原理 | 矿工用算力竞争记账权 | 验证者质押 ETH 竞争记账权 |
| 代表 | 比特币、以太坊经典 | 以太坊（2022年后）|
| 优点 | 安全经过时间验证 | 省电、确认更快 |
| 缺点 | 耗电高 | 复杂度更高 |

### 3.3 L2（Layer 2）

L2 是建在 L1 之上的扩容方案，继承 L1 安全性。

| | Optimistic Rollup | ZK Rollup |
|--|-------------------|-----------|
| 代表 | Arbitrum、Optimism | zkSync、StarkNet |
| 提现时间 | 7 天挑战期 | 几小时 |
| 原理 | 欺诈证明 | 零知识证明 |

### 3.4 RPC（Remote Procedure Call）

RPC = 你和区块链通话的接口。

```javascript
eth_blockNumber           // 查区块高度
eth_getBalance            // 查余额
eth_call                  // 读合约（免费）
eth_sendTransaction       // 发交易（付 Gas）
eth_sendRawTransaction    // 发送已签名交易
```

### 3.5 链上状态（On-chain State）

- 所有账户的余额
- 所有合约的存储
- Nonce（账户发出的交易计数）
- World State = 所有账户状态的根哈希

---

## 四、DeFi & Oracle

### 4.1 DeFi 核心模块

- **DEX（去中心化交易所）** — AMM 自动做市
- **Lending（借贷）** — Compound / Aave
- **Stablecoin（稳定币）** — USDT、USDC、DAI
- **Derivative（衍生品）** — 期权、期货

### 4.2 AMM（自动做市商）

```
流动性池：ETH + USDC
公式：x × y = k（恒定乘积）

有人买 ETH → 池里 ETH 变少 → 价格自动上涨
```

Uniswap 是 AMM 的代表。

### 4.3 借贷（Compound / Aave）

```
存 ETH 到 Compound
  ↓ ETH 作为抵押品（Collateral）
借出 USDC（稳定币）

抵押率：75%（存 100 ETH 可借 75 USDC）
利率：市场决定
清算：抵押品跌到阈值会被强制清算
```

### 4.4 Oracle（预言机）

**问题：** 区块链是封闭的，不知道链外世界发生了什么。

Oracle = 把链外数据（价格、天气、比赛结果）传上链的中间件。

| | 中心化 Oracle | 去中心化 Oracle |
|--|--------------|-----------------|
| 代表 | 单个数据源 | Chainlink |
| 风险 | 单点故障，可能造假 | 多节点共识，更可信 |
| 用途 | 低风险场景 | 高价值合约必须用 |

### 4.5 数据源风险

| 风险类型 | 例子 | 后果 |
|---------|------|------|
| Oracle 操纵 | 攻击者交易前操纵价格 | 预言机价格被操纵，清算 |
| 合约漏洞 | 代码 bug | 资金被偷 |
| 流动性风险 | 池子太小，价格滑点大 | 成交价格差 |

---

## 五、还没学的章节（待补充）

- [ ] Indexing（索引）— The Graph、链上数据整理
- [ ] Security（安全）— 合约/权限/模拟/监控风险
- [ ] Dev Stack（开发栈）— Hardhat、Foundry、wagmi

---

## 六、常见问题

**Q：智能合约和普通程序有什么区别？**
A：普通程序随时可改；合约部署后代码锁死（除非预留升级机制）。

**Q：Gas 在合约调用中怎么计算？**
A：每一步操作（存数据、循环、计算）都消耗 Gas。读取免费，写入按步骤付费。

**Q：EOA 和 Smart Account 哪个更好？**
A：取决于场景。EOA 简单兼容性好；Smart Account 功能更丰富（多签、社交恢复、权限细分）。

**Q：L2 和 L1 哪个更安全？**
A：L1 更安全（共识更强）。L2 继承 L1 安全性，但提现有挑战期。

**Q：DeFi 合约被盗了怎么办？**
A：很难追回。所以审计（audit）和风险监控非常重要。
````
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->














\# 密码学 × 钱包：知识总结

\---

\## 一、密码学基础（Cryptography）

\### 1.1 哈希（Hash）— 数据的"数字指纹"

**通俗理解：**

哈希就像给一篇文章生成一个"指纹"。无论文章多长，生成的指纹长度固定。只要文章改一个字，指纹完全不同。

**技术要点：**

\- 输入任意长度 → 输出固定长度（以太坊用 Keccak-256，输出 256 bits）

\- 不可逆：知道指纹，推不出原文

\- 确定性：同样输入 = 同样输出

**在 Web3 中的用途：**

| 场景 | 例子 |

|------|------|

| 交易哈希（Transaction Hash）| 每笔交易有一个唯一哈希，如 `0xabc123...`，用来定位交易 |

| 区块哈希 | 每个区块有唯一哈希，链接成链 |

| 合约字节码哈希 | 验证链上部署的代码是否和源码一致 |

| 数据承诺 | 先公布哈希，之后再公开原文验证没被篡改 |

**代码示例（以太坊地址生成）：**

\`\`\`javascript

// 地址不是直接用公钥，而是公钥的哈希

address = Keccak256(publicKey).slice(-20 bytes)

\`\`\`

\---

\### 1.2 公私钥对（Key Pair）— 钥匙和锁的关系

**通俗理解：**

\- **私钥（Private Key）** = 保险柜的密码，绝对保密

\- **公钥（Public Key）** = 保险柜的号码牌，可以告诉任何人

有了锁（公钥），别人可以确认你确实有钥匙（私钥），但无法从锁反推密码。

**技术要点：**

\- 私钥是一个 256 位的随机数字（大约 10^77 种可能）

\- 公钥由私钥通过椭圆曲线加密生成，无法反向推导私钥

\- 以太坊的公私钥用的是 **secp256k1** 曲线

**在 Web3 中的用途：**

\- 私钥用来\*\*签名\*\*（证明"我是我"）

\- 公钥用来\*\*验证签名\*\*（让别人确认签名确实是你）

\- 地址是公钥的哈希处理后的短标识

\---

\### 1.3 数字签名（Signature）— 证明你同意了

**通俗理解：**

签名就像在合同上按手印。用私钥对一份消息进行"签名"，得到一串签名数据。任何有公钥的人都可以验证：

1\. 这个签名确实是用对应私钥签的

2\. 消息没有被篡改

**重要：** 签名不会暴露私钥。

**在 Web3 中的两种主要签名：**

\#### 类型 1：交易签名

\`\`\`javascript

// 一笔以太坊转账的本质

transaction = {

from: "0x你的地址",

to: "0x对方地址",

value: 1.0, // ETH 数量

gas: 21000,

nonce: 0,

...

}

signedTx = sign(transaction, privateKey) // 用私钥签名

// 签名后，这笔交易可以被广播到网络

\`\`\`

\#### 类型 2：消息签名（Sign Message）

\`\`\`javascript

// 不发交易，只是证明"我同意这条消息"

// 例如：登录 dApp、授权某个操作

message = "I agree to terms of service"

signedMessage = sign(message, privateKey)

// 合约或应用可以用你的公钥验证确实是你签的

\`\`\`

**签名最容易出错的地方：**

用户经常搞不清楚自己签了什么。产品应该展示：

\- 签名目的

\- 涉及哪个合约

\- 链 ID（Chain ID）

\- 授权额度

\- 过期时间

**作为 AI Agent 的警示：**

\- Agent 可以帮你\*\*解释\*\*签名在做什么

\- Agent **不能**替你保管私钥

\- Agent **不能**在你不知情时推动签名

\---

\### 1.4 Merkle Tree — 高效验证大量数据

**通俗理解：**

想象一个公司有很多员工。要证明"张三在公司"，不需要把全体员工名单给验证者看。Merkle Tree 的做法是：

1\. 把所有员工名字两两配对，生成哈希

2\. 再把哈希配对，生成上一级哈希

3\. 最终得到一个"根哈希"（Merkle Root）

4\. 验证者只需要有根哈希 + 张三的"路径"（Merkle Proof），就能高效验证

**在 Web3 中的用途：**

\- 区块头包含所有交易的 Merkle Root

\- 空投名单用 Merkle Proof 验证某地址是否在名单中

\- 轻客户端用 Merkle Proof 验证链上状态

\---

\## 二、钱包基础（Wallet）

\### 2.1 钱包不是什么

❌ 钱包 ≠ 用户名（地址不是用户名）

❌ 钱包 ≠ 账号系统（没有中心化数据库）

❌ 钱包 ≠ 登录按钮（签名不是登录确认）

❌ 钱包 ≠ 密码找回（没有客服能帮你恢复私钥）

\### 2.2 钱包是什么

✅ 钱包 = **私钥管理工具** + **签名入口** + **交易确认界面**

核心功能：

1\. 管理私钥（生成、存储、导出）

2\. 签名交易和消息

3\. 连接 DApp（通过 MetaMask 等）

4\. 切换网络（主网、L2、测试网）

5\. 展示余额、交易历史、Gas 费用

\---

\### 2.3 EOA vs Smart Account（两种账户类型）

\#### EOA（Externally Owned Account）

**通俗理解：**

EOA 是最原始的钱包账户，由私钥直接控制。

\`\`\`

私钥 → 直接控制 EOA

EOA 可以：签名交易、支付 Gas、调用合约

\`\`\`

**特点：**

\- 简单、通用、兼容性最好

\- 私钥丢失 = 完全丢失，无法恢复

\- 权限无法细分（要么全控，要么没有）

\#### Smart Account（智能账户 / Smart Contract Wallet）

**通俗理解：**

Smart Account 是一个\*\*部署在链上的合约\*\*，它定义了"谁可以控制它"的规则。不再是单纯靠私钥，而是靠代码规则。

\`\`\`

私钥 → 控制 Smart Account 合约规则 → 控制账户

\`\`\`

**特点：**

\- 支持多签（多人共同管理）

\- 支持社交恢复（换个私钥就能恢复）

\- 可以设置消费限额、过期时间

\- Gas 可以由其他人代付（Account Abstraction）

**例子：** Gnosis Safe（多签钱包）、Argent（社交恢复钱包）

\#### EOA vs Smart Account 对比

| | EOA | Smart Account |

|---|---|---|

| 控制方式 | 单一私钥 | 合约规则（可编程）|

| 私钥丢失 | 无法恢复 | 可社交恢复 |

| 多签 | 不支持 | 支持 |

| 权限细分 | 做不到 | 可以（限额、过期）|

| Gas 代付 | 不支持 | 支持 |

| 兼容性 | 100% 兼容 | 部分场景受限 |

\---

\### 2.4 助记词（Mnemonic / Seed Phrase）

**通俗理解：**

私钥是一串随机数字，很难记住。助记词是私钥的"人类友好版本"——12 或 24 个单词。

助记词可以\*\*重新推导出所有私钥\*\*，所以备份助记词 = 备份所有资产。

**为什么重要：**

\- 方便人类备份（写下来就行）

\- 可以恢复钱包到新设备

**为什么危险：**

\- 任何人拿到助记词，就拿到了所有私钥

\- 钓鱼攻击经常伪装成"输入助记词恢复账户"

**安全规则：**

\`\`\`

🚫 不要截图

🚫 不要上传云盘

🚫 不要粘贴给任何网页、客服、AI、代码仓库

🚫 不要用主钱包测试陌生 dApp

✅ 助记词手写在纸上，放安全的地方

✅ 考虑使用硬件钱包

\`\`\`

\---

\### 2.5 钱包交互的三类动作

**重要概念：** 钱包里的操作分三类，风险完全不同：

| 动作类型 | 风险 | 例子 | 产品展示 |

|---------|------|------|---------|

| **读取** | 无风险 | 查询余额、查看交易历史 | 静态展示 |

| **签名消息** | 中风险 | 登录 dApp、授权操作 | 明确说明签名内容 |

| **发送交易** | 高风险 | 转账、批准 Token、部署合约 | 清晰展示目标地址、金额、Gas |

**交易的生命周期：**

\`\`\`

用户点击按钮

↓

钱包弹出确认

↓ 用户确认

钱包用私钥签名

↓

交易广播到网络（进入 mempool）

↓

矿工/验证者打包进区块

↓

交易执行（可能成功/失败）

↓

前端更新状态

\`\`\`

**前端必须处理的状态：**

\- ⏳ 等待用户在钱包确认

\- ❌ 用户拒绝签名

\- 📡 交易已广播，等待确认

\- ✅ 交易成功

\- ❌ 交易失败（revert）

\- ⏰ 交易 pending 太久（需重试）

\---

\### 2.6 Gas — 链上操作的"手续费"

**通俗理解：**

Gas 是执行操作消耗的计算资源。就像开车需要烧油，发以太坊交易需要"烧" Gas。

**费用计算：**

\`\`\`

总费用 = Gas Used × Gas Price

\- Gas Used：实际消耗了多少 Gas（转账固定 21000）

\- Gas Price：每单位 Gas 的价格（动态，受网络拥堵影响）

\`\`\`

**常见问题：**

\- Gas 估算不准 → 交易失败，但仍可能扣部分 Gas

\- 网络拥堵 → Gas Price 飙升，费用很高

\- 余额不足 → 交易失败，不会执行

**产品设计建议：**

\- 不要只写"确认交易"

\- 要告诉用户：大概费用多少，用什么资产付，失败是否仍扣费

\---

\## 三、Cryptography × Wallet 的连接关系

这是最重要的部分！

\### 连接图

\`\`\`

密码学基础层

┌─────────────────────────────────────┐

│ │

│ 私钥 ←──────────────────────→ 公钥 │

│ │ │

│ │ 签名 │

│ ↓ │

│ 签名验证 │

│ │

└─────────────────────────────────────┘

↓

钱包应用层

┌─────────────────────────────────────┐

│ │

│ 私钥 + 签名 → EOA / Smart Account │

│ ↓ ↓ │

│ 签名交易 合约规则验证 │

│ │

└─────────────────────────────────────┘

↓

链上执行层

┌─────────────────────────────────────┐

│ │

│ 交易广播 → 区块打包 → 状态更新 │

│ 验证者用公钥验证签名 │

│ 智能合约检查签名是否有效 │

│ │

└─────────────────────────────────────┘

\`\`\`

\### 具体连接步骤

\#### 第一步：钱包生成密钥对

\`\`\`

随机数 → 私钥（256位）→ 公钥 → 地址

↑

钱包生成

\`\`\`

\#### 第二步：用户发起操作（比如转账 1 ETH）

\`\`\`

用户：我要转 1 ETH 给 0x456...

钱包：好，我来签名

\`\`\`

\#### 第三步：钱包用私钥签名交易

\`\`\`javascript

tx = {

from: "0x123...", // 你的地址（公钥哈希）

to: "0x456...", // 对方地址

value: 1 ether,

nonce: 0,

gasPrice: 20000000000,

gasLimit: 21000,

chainId: 1

}

signature = sign(tx, privateKey) // 用私钥签名

// 签名后，交易可以被任何人验证确实是你签的

\`\`\`

\#### 第四步：交易广播到网络

\`\`\`

钱包签署交易

↓

发送到以太坊节点（RPC）

↓

进入 mempool（待处理池）

↓

验证者收到交易，用你的公钥验证签名

↓ 签名有效

交易被打包进区块

↓

状态更新：你的余额 -1 ETH，对方 +1 ETH

\`\`\`

\#### 第五步：验证者如何验证签名

\`\`\`

验证者收到：交易内容 + 你的签名 + 你的地址

验证者知道：地址 = Hash(公钥)

验证过程：

1\. 从地址反推公钥（地址是怎么从公钥来的）

2\. 用公钥验证签名是否有效

3\. 确认交易内容没有被篡改

→ 签名有效 = 确认是"控制这个地址的人"发起的交易

\`\`\`

\### Smart Account 的不同之处

\`\`\`

EOA：私钥 → 直接签名交易 → 执行

Smart Account：

私钥 → 签名 → 发消息给合约

↓

合约代码检查：这条消息符合规则吗？

\- 签名数量够吗？（多签）

\- 在规定额度内吗？

\- 没有过期吗？

↓ 规则允许

合约执行实际操作

\`\`\`

\---

\## 四、AI Agent 与密码学/钱包的关系

\### Agent 能做什么

✅ 解释交易内容（"这笔交易要转 100 USDC 给 0x456..."）

✅ 准备交易参数

✅ 检查风险（"这个合约权限很大，建议小心"）

✅ 生成操作计划

✅ 记录操作历史

\### Agent 不能做什么

❌ 保管私钥

❌ 在用户不知情时触发签名

❌ 保证交易一定成功

❌ 替代用户做最终决策

\### 推荐的 AI + 钱包架构

\`\`\`

用户 ← 人工确认 ←→ AI（理解 & 辅助）

↓

钱包（签名 & 授权）

↓

策略合约（执行约束）

↓

区块链（执行）

\`\`\`

**核心原则：** AI 做理解和辅助，钱包负责确认，合约负责约束。

\---

\## 五、今日实践任务（Day 1）

\### 任务 1：观察一个钱包的生成过程

1\. 用 MetaMask 生成一个新钱包（测试用）

2\. 观察：助记词 → 私钥 → 公钥 → 地址 的生成过程

3\. 理解：地址是公钥的哈希，但不是公钥本身

\### 任务 2：区分两种签名

1\. 在测试网发送一笔普通转账（Transaction）

2\. 用钱包签一条消息（Sign Message）

3\. 在区块浏览器查看两者的区别

\### 任务 3：检查交易详情

在一笔交易中，找出：

\- From / To 地址

\- 交易哈希

\- Gas Used

\- Status

\- Logs（如果有）

\### 任务 4：理解 EOA vs Smart Account

1\. 你的 MetaMask 是 EOA 还是 Smart Account？（默认是 EOA）

2\. Gnosis Safe 这样的多签钱包和 MetaMask 有什么区别？

\---

\## 六、常见问题

**Q：私钥丢了怎么办？**

A：EOA 没法找回。Smart Account（智能账户）可以通过社交恢复等方式解决。

**Q：地址和公钥有什么区别？**

A：地址 = 公钥的哈希（再处理后的 20 字节）。地址可以公开，公钥本身一般不直接显示。

**Q：为什么转账需要 Gas？**

A：Gas 是网络资源费，防止有人发垃圾交易堵塞网络。矿工/验证者需要Gas来执行你的交易。

**Q：EOA 和 Smart Account 哪个更好？**

A：取决于场景。EOA 简单兼容性好；Smart Account 功能更丰富（多签、社交恢复、权限细分），但开发复杂度更高。

**Q：助记词和私钥是什么关系？**

A：助记词（12/24个单词）是私钥的人类友好表示，输入助记词可以推导出所有私钥。泄露助记词 = 泄露所有私钥。

\---

\## 七、明日预习

明天我们将学习 **Smart Contract（智能合约）**，它是：

\- 部署在链上的代码

\- 由交易触发执行

\- EOA 和 Smart Account 都会调用它

预习问题：

1\. 智能合约和普通程序有什么区别？

2\. 合约部署一次后还能修改吗？

3\. Gas 在合约调用中是怎么计算的？
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
