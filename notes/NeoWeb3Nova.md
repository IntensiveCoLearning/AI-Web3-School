---
timezone: UTC+8
---

# Neo.Yun

**GitHub ID:** NeoWeb3Nova

**Telegram:** @neo_web3_nova

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->
### 今日完成

1.  **Week 2 交付物整理**：全部 6 个模块（A/B/C/D/F/G）已完成，从问题地图到威胁建模到治理流程，覆盖 AI×Web3 交叉全链路。
    
2.  **Week 3 大纲锁定**：读完官方 Week 3 课程大纲，明确"课程线 + Hackathon 线"并行节奏。
    
3.  **Cobo 赛道锁定**：Agentic Economy × Cobo Agentic Wallet — 天然对齐已有 x402 + CAW + Pact + Threat Model 资产。
    
4.  **Hackathon Proposal 完成**：项目名 PactGuard，1 页完整 proposal（问题、方案、验证方式、Sprint Plan），含 3 句话电梯演讲 + 8 个 Demo 验证点。
    

### 今日收获

-   **赛道选择 = 方向减法**：从"支付流 + 安全层 + 治理"三个方向中，到最后锁定 Cobo 赛道是最快路径——因为代码资产最完整、威胁模型可直接展示、课程模块自然融合。
    
-   **Proposal 写作 = 范围绑定**：1 页 proposal 的核心不是"想做什么"而是"不做什么"——明确 fallback 方案、单人参赛、每天只做一个最小闭环。
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->

## 训练营状态

-   **阶段**：Week 2 收官 + Hackathon 方向锁定日
    
-   **今日主题**：模块 F — Agent Workflow Threat Model 与确认策略
    
-   **关键动作**：完成 STRIDE 六维威胁模型 + 攻击模拟验证 + 风险分层策略
    

* * *

## 今日完成

| 项目 | 状态 | 链接 |
| --- | --- | --- |
| 模块 F 交付：Agent Workflow Threat Model | ✅ 已完成 | [tasks/week2-module-f-agent-workflow-threat-model.md](tasks/week2-module-f-agent-workflow-threat-model.md) |
| STRIDE 六维威胁模型（资产/权限/数据/工具/依赖/后果） | ✅ 已完成 | 覆盖 8 种攻击场景 |
| 攻击模拟与拦截验证（v1 vs v2 Pact 对比） | ✅ 已完成 | experiments/x402-caw-agent-payment-loop/threat-model-simulator.py |
| 风险分层矩阵 + 人工确认触发器清单 | ✅ 已完成 | 7 维度 × 3 层级判定规则 |
| Hackathon 方向初步锁定 | 🟡 待最终确认 | 见下方「方向决策」 |

* * *

## Hackathon 方向决策

### 三个方向的当前准备度评估

| 维度 | 方向 A: Agentic Commerce | 方向 B: AI Security | 方向 C: 治理自动化 |
| --- | --- | --- | --- |
| 已有代码资产 | ⭐⭐⭐ 完整（x402+CAW 闭环、Pact v1/v2、威胁模拟器） | ⭐⭐ 中等（Threat Model 文档，缺可运行 Guard） | ⭐ 较低（模块 C 草图，无实验代码） |
| 可演示性 | ⭐⭐⭐ 高（Agent 自动购买内容并支付，有明确前后端） | ⭐⭐ 中（攻击模拟脚本可运行，但防御系统需额外实现） | ⭐⭐ 中（治理流程慢节奏，Agent 提效难即时量化） |
| 差异化 | ⭐⭐ 中（x402 已有一定知名度） | ⭐⭐⭐ 高（AI Agent 安全是基础设施级空白） | ⭐⭐ 中（治理自动化已有多个项目） |
| 与课程模块契合 | ⭐⭐⭐ Module A+B+D+F 全部自然融入 | ⭐⭐⭐ Module F 直接延伸，A/B 可融入 | ⭐⭐ Module C 延伸，但 A/B 需重新适配 |
| 技术深度 | ⭐⭐ 中（支付流程集成为主） | ⭐⭐⭐ 高（威胁建模、多层防御、反脆弱设计） | ⭐⭐ 中（治理规则适配为主） |
| 周末可推进度 | ⭐⭐⭐ 高（伪代码→可运行脚本，测试网实验） | ⭐⭐ 中（需实现 Guard/Policy 运行时） | ⭐ 低（需选定具体 DAO 协议并研究规则） |
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->


今日核心动作：完成模块 C（Agent Identity）交付 + Week 2 三个模块全部收尾。

模块 C 交付：

-   以 Module C 的 ProposalGuard Agent 为对象，写了完整的 Agent Profile 草图
    
-   覆盖：身份声明、能力矩阵、Negative Capability、输入输出接口、协作对象、失败模式、调用方式、收费模型、验证机制
    
-   完成可选加分：MCP vs A2A 协议对比（接口标准化 vs 协作标准化）
    

Week 2 整体交付：

-   Module A: AI × Web3 问题地图（tasks/[week2-module-a-ai-web3-problem-map.md](http://week2-module-a-ai-web3-problem-map.md)）
    
-   Module B: Payment/Commerce/Settlement Flow + x402/CAW 原型（tasks/[week2-module-b-payment-commerce-flow.md](http://week2-module-b-payment-commerce-flow.md) + experiments/x402-caw-agent-payment-loop/）
    
-   Module C: Agent Identity 草图（submissions/[week2-module-c-agent-identity.md](http://week2-module-c-agent-identity.md)）
    

学习笔记：[https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-29.md](https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-29.md)

[#AIWeb3School](#AIWeb3School) [#Week2](#Week2) [#Day12](#Day12) [#AgentIdentity](#AgentIdentity) [#MCP](#MCP) [#A2A](#A2A) [#ProposalGuard](#ProposalGuard)
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->




> 今日核心动作：完成模块 B（Payment/Commerce/Settlement）交付 + 推进 Hackathon 原型。

> 模块 B 交付：

> -   设计了「Agent 帮商户生成社媒内容并收款」的完整 commerce flow
>     

> -   拆出 7 环节：报价 → 预算授权 → 执行 → 交付 → 验收 → 结算/退款/争议 → 记录证明
>     

> -   对比 x402（支付层）vs ERC-8183（Commerce/Escrow 层），明确四层 Stack 分工
>     

> **x402 + Cobo CAW Agent 自主支付闭环**  
> 项目简介  
> 这是 Week 2 Module B 的进阶任务——一个最小化的 **x402 paywall + Cobo CAW Agent 自主支付闭环**。  
> 核心目标不是"自动付款"，而是展示：在明确授权、预算控制和可审计记录下完成自动交易的全流程。  
> 场景

> ![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-28-1779970669921-image.png)
> 
> **Agent 帮商户生成社交媒体营销内容并自动付款**
> 
> -   商户 Alice 授权 Buyer Agent 在 $50 预算内购买营销文案生成服务
>     
> -   服务提供方 ContentGen Agent 提供 x402 保护的 AI 推理 API
>     
> -   CAW Pact 约束 Agent 的花钱范围、操作范围和时间窗口
>     
> -   交易完成后，链上留下可审计的结算记录
>     
> -   已提交[https://github.com/NeoWeb3Nova/x402-caw-agent-payment-loop](https://github.com/NeoWeb3Nova/x402-caw-agent-payment-loop)
>     

> 学习笔记：[https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-28.md](https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-28.md)

> [#AIWeb3School](#AIWeb3School) [#Week2](#Week2) [#Day11](#Day11) [#AgentCommerce](#AgentCommerce) [#x402](#x402) [#ERC8183](#ERC8183)
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->






> 今日是周三 Co-learning 日，核心动作是带着昨日方向决策和 5W 拆解去获取反馈，并迭代原型。

> 关键动作：

> 1.  **Co-learning 参加**：携带方向决策 + 5W 拆解 + 原型草稿，获取导师/同学反馈
>     

> 2.  **反馈记录与迭代**：将收到的关键评价转化为 [flow.md](http://flow.md) / [pseudo.py](http://pseudo.py) 的具体修改
>     

> 3.  **3 步 Demo 设计**：为选定方向设计一个最小可演示场景（3 步以内，链上或模拟）
>     

> 方向决策结论：（分析并确认了路线为payment(ERC-8004+x402) + wallet(cobo的agent wallet)）

## 主方向决策：Payment / Commerce / Settlement

> 建议选择 **方向 A: Payment / Commerce / Settlement**

**理由：**

1.  **已有资源优势**：你已有 x402 白皮书和相关材料在 LLM-Wiki，课程也把 x402+CAW 作为模块 B 核心任务给出完整链路。
    
2.  **任务集成度最高**：课程很明确地给出了“搭建 x402 paywall + CAW agent 自主支付闭环”的具体指引，后续深挖阻力最小。
    
3.  **安全可控**：全程可在测试网运行，不涉及真实资金。
    
4.  **Hackathon 对接**：Cobo 相关的 Hackathon/workshop 优先应用路径就是 Agent DeFi Execution，而它正是把 Payment + Wallet + Security 放到 DeFi 场景中检验，Payment 是最前置的起点。
    
5.  **性价比**：一周内可以做出有流程图、有测试网交易记录、有参考实现的闭环 demo，验证感最强。
    

**方向 C (Wallet) 放入 backlog：**

-   相关性很强，但最好在 Payment 闭环跑通后作为“权限控制层”深化，而不是单独开线。
    
-   理由：“agent 能不能自动付款”这个问题自然会带出“在什么权限范围内付款”，所以 Wallet 会被自然覆盖进去。
    

> 学习笔记：[https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-27.md](https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-27.md)

> [#AIWeb3School](#AIWeb3School) [#Week2](#Week2) [#Day10](#Day10) [#Colearning](#Colearning) [#HackathonPrep](#HackathonPrep)

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-27-1779894780843-image.png)
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->








> 今日核心任务是 Hackathon 方向最终决策与 5W 技术拆解。
> 
> 关键动作：
> 
> 1.  方向决策：Agentic Commerce
>     
> 2.  5W 拆解：把「谁发起/执行/付款/验证/承担风险」映射到具体技术组件
>     
> 
> 通过一个小项目来展示整个拆解流程[https://github.com/NeoWeb3Nova/ai-web3-assistant](https://github.com/NeoWeb3Nova/ai-web3-assistant)
> 
> ![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-26-1779804978300-image.png)

> 学习笔记：[https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-26.md](https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-26.md)
> 
> [#AIWeb3School](#AIWeb3School) [#Week2](#Week2) [#Day9](#Day9) [#HackathonPrep](#HackathonPrep)
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->









> 今日完成 Co-learning 线上共学，并深度阅读 Handbook 三章交叉内容：Agent Identity、Settlement & Escrow、Governance AI。

> 关键动作：

> 1.  **Agent Identity**：理解了 Agent Profile / Capability / Registry / Ownership 的五层结构，为 Hackathon 项目设计了最小 Agent Profile 草案（方向 C：治理自动化）
>     

> 2.  **Settlement & Escrow**：提取了 Escrow 6 状态机设计，为 Agentic Commerce 场景写了最小伪代码，明确「资金状态 + 交付证明 + 验收条件 + 争议路径」缺一不可
>     

> 3.  **Governance AI**：提取了 7 步提案摘要模板和 Source Traceability 底线原则，意识到治理场景里「来源可追溯」比「摘要漂亮」更重要
>     

> 方向思考：

> -   方向 C（治理自动化）与 Governance AI 章节高度契合，可以基于模块 C 原型快速迭代「治理提案摘要 + 风险标记 + 来源追溯」功能
>     

> -   方向 A（Agentic Commerce）则需要把 Escrow 状态机 + Agent Profile + Machine Payment 组合成完整 demo，工程量更大但 demo 效果更直观
>     

> -   今日 Co-learning 后将根据导师反馈做最终决策
>     

> 学习笔记：[https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-25.md](https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-25.md)

> [#AIWeb3School](#AIWeb3School) [#Week2](#Week2) [#Day8](#Day8) [#AgentIdentity](#AgentIdentity) [#SettlementEscrow](#SettlementEscrow) [#GovernanceAI](#GovernanceAI)
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->










> 今日完成 Week 1 遗留扫尾，推进模块 C 原型到可演示状态，并初筛 Week 2 方向。

> 关键动作：

> 1.  补齐/确认模块 B 合约部署计划
>     
> 2.  用「5W 风险框架」对比 Agentic Commerce vs AI Security 方向
>     
> 3.  模块 C 最小原型产出：流程图 + 伪代码 + README
>     

> 今天把handbook的AI和WEB3基础知识部分顺了一遍，发现很多知识点之前都遗漏了，还有一些是发现之前理解都是错误的。
> 
> 然后把这周的课程任务清理了一些，每个任务里都有详情提交，这里就不冗余了。
> 
> ![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-23-1779535778853-image.png)
> 
> 。

> 学习笔记：[https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-23.md](https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-23.md)

> [#AIWeb3School](#AIWeb3School) [#Week2Prep](#Week2Prep) [#Day6](#Day6) [#BuilderMode](#BuilderMode)

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-23-1779535827406-image.png)
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->











> 【AI × Web3 School 打卡 Day 5 | Week 1 收官】
> 
> 今日参加 Week 1 收官 Co-learning，同步模块 B/C 进度，完成 Week 1 整体复盘。
> 
> Week 1 关键收获：
> 
> 1.  建立了 AI × Web3 共同语言：从 buzzword 到可描述的任务链
>     
> 2.  完成了 Base Sepolia 测试网 USDC 转账，理解了 Gas、Faucet、区块浏览器
>     
> 3.  明确了 Agent 权限边界：提案权 vs 签名权分离是安全设计的底线
>     
> 4.  用 Hermes Agent 搭建了每日学习笔记 + 自动同步 GitHub 的工具链
>     
> 
> Week 1 遗留与下一步：
> 
> -   🔄 合约部署记录待补齐（模块 B）
>     
>     ![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-22-1779459544556-image.png)
> -   🔄 模块 C 最小交叉实验原型待转为可运行流程
>     
>     ![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-22-1779459776206-image.png)
> -   🎯 Week 2 方向初筛：Agentic Commerce / AI Security
>     
> 
> 学习笔记：[https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-22.md](https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-22.md)
> 
> #AIWeb3School #Web3Basics #Week1Done #Day5

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-22-1779459536428-image.png)![屏幕截图 2026-05-22 222250.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-22-1779459849668-_____2026-05-22_222250.png)
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->













> 今日推进模块 C 最小交叉实验原型，同时确认模块 B 链上实践完成度。

> 关键收获：

> 1.  把「AI 生成 → 人工复核 → 钱包确认 → 链上执行」从概念变成可描述流程
>     

> 2.  明确了 Agent 权限边界：提案权 vs 签名权分离
>     

> 3.  整理了 Week 1 前半程的概念地图和卡点清单，准备明日 Co-learning 同步
>     

> 今日进度：

> -   ✅ Learning Agent + GitHub repo 已就绪（Day 1–2 完成）
>     

> -   ✅ / 🔄 模块 B：测试网钱包、交易、合约部署（Day 3-4 完成）
>     

> -   🔄 模块 C：最小交叉实验原型推进中
>     

使用AI agent快速落地了一个交叉实现：  
❯ 以“用户点击投票按钮”为例，完整链路通常是：

前端读取钱包地址和当前网络。  
前端根据 ABI 编码 vote(proposalId) 调用数据。  
钱包展示交易信息，让用户确认签名。  
交易被广播到 RPC 节点。  
验证者把交易打包进区块。  
EVM 执行合约逻辑，成功则更新状态并发出 event，失败则 revert。  
前端监听交易回执，更新页面状态。  
索引器读取 event，更新历史记录或看板。  
根据上面的需求，开发一个webui页面来演示整个流程，要可以完全展示，比如需要钱包，需要在测试网上完整测试。

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-21-1779372404071-image.png)![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-21-1779372431929-image.png)![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-21-1779372447514-image.png)![屏幕截图 2026-05-21 220556.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-21-1779372749427-_____2026-05-21_220556.png)

> 学习笔记：[https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-21.md](https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-21.md)

![屏幕截图 2026-05-21 190312.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-21-1779379193774-_____2026-05-21_190312.png)
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->



















> 今日完成模块 B 收尾：测试钱包创建、测试网交易、合约部署与验证。
> 
> 关键收获：
> 
> 1.  完整跑通了「助记词 → 私钥 → 地址 → 签名 → 交易 → Gas → 确认 → 验证」链路
>     
> 2.  通过 Remix 完成最小合约部署，理解了读取调用与写入调用的 Gas 差异
>     
> 3.  启动模块 C 设计：AI 生成 → 人工复核 → 钱包确认 → 链上执行的最小流程
>     
> 
> 今日进度：
> 
> -   ✅ Learning Agent + GitHub repo 已就绪（Day 1–2 完成）  
>     
> -   ✅ 模块 B：测试网钱包、交易、合约部署已完成  
>     
> -   🔄 模块 C：最小交叉实验设计启动  
>     
>     ![屏幕截图 2026-05-20 225206.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-20-1779288788350-_____2026-05-20_225206.png)
> 
> 学习笔记：[https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-20.md](https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-20.md)
> 
> [#AIWeb3School](#AIWeb3School) [#Web3Basics](#Web3Basics) [#Day3](#Day3)
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->




















> 今日完成 Week 1 完整任务拆解，正式启动 Web3 测试网实践模块。
> 
> 关键收获：
> 
> 1.  打卡与任务提交并行，两者缺一不可；学分关联评优和后续资源
>     
> 2.  明确了模块 B 的链上操作链：助记词 → 私钥 → 地址 → 签名 → 交易 → Gas → 确认 → 验证
>     
> 3.  安全底线：AI Agent 不接触私钥，高风险操作必须人工确认
>     
> 
> 今日进度：
> 
> -   ✅ Learning Agent（Hermes）+ GitHub repo 已就绪
>     
> -   🔄 测试钱包创建与测试网交互
>     
>     1.  安装/配置钱包（MetaMask / Rabby / Frame）
>         
>         ![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-19-1779196168383-image.png)
>     2.  切换到测试网
>         
>     3.  从 Faucet 领取测试币, 领取了USDC ([https://faucet.circle.com/](https://faucet.circle.com/))
>         
>     4.  发送测试交易，使用x402支付协议完成了几笔USDC的交易。
>         
>         ![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-19-1779196185655-image.png)
>     5.  在区块浏览器验证 （使用 [https://sepolia.basescan.org](https://sepolia.basescan.org) 来查看交易详情）
>         
>         ![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-19-1779196193401-image.png)
> 
> 学习笔记：[https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-19.md](https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-19.md)

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-19-1779196334726-image.png)![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-19-1779196299378-image.png)![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-19-1779196415863-image.png)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->






















```
# 2026-05-18 学习笔记

## 今日课程

- **所属阶段**: Week 1 共学营 — AI 与 Web3 基础知识
- **今日主题**: 建立共同语言，初探 Handbook 知识地图
- **Handbook 入口**: https://aiweb3.school/zh/handbook/
- **WCB 学习面板**: https://web3career.build/zh/programs/AI-Web3-School#tab=learning
  > 注：WCB 学习面板需登录后查看具体今日任务，请手动确认。

## 学习路径

### 最小路径
> 今天必须完成的最小单元

- [x] 浏览 Handbook 总览页，理解四层知识地图（AI 基础 → Web3 基础 → Bridge → 前沿探索）
- [x] 阅读 [LLM 章节](https://aiweb3.school/zh/handbook/ai/llm/)：大模型能做什么，不能替代什么
- [x] 初始化个人学习仓库并完成第一次打卡草稿

### 推荐路径
> 正常进度应完成的内容

- [x] 阅读 [Prompt 章节](https://aiweb3.school/zh/handbook/ai/prompt/)：如何把任务目标、边界和输出格式写清晰
- [x] 阅读 [Context 章节](https://aiweb3.school/zh/handbook/ai/context/)：模型一次能看见什么，哪些信息会过期

### 挑战路径
> 有余力可尝试的扩展

- [x] 安装 Hermes Agent 或配置本地 AI Agent 环境，完成第一次 Vibe Coding 小实验
```

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-18-1779094649952-image.png)

````

- [x] 阅读 [Agent 章节](https://aiweb3.school/zh/handbook/ai/agent/)，尝试写一个简单的 tool-calling 脑图

## 笔记与思考

### 关键概念

1. **AI × Web3 不是拼接 buzzword**
   真实系统同时涉及模型能力、Agent 执行流、钱包权限、链上验证。只从 AI 侧看会低估资产风险，只从 Web3 侧看会忽略模型和工具编排的复杂度。

2. **Handbook 四层地图**
   - AI 基础：LLM → Prompt → Context → RAG → Agent → Frameworks → MCP → Evaluation
   - Web3 基础：Network → Cryptography → Wallet → Smart Contract → AA → DeFi → Oracle → Indexing → Security
   - Bridge：链上状态进入 Agent 上下文 → Web3 工具调用 → Agent 工作流 → Agent 钱包 → 机器支付 → 结算托管 → 身份 → 信任 → 可验证 AI → AI 安全 → AI 隐私 → 治理 AI
   - 前沿探索：Agentic Commerce / Wallet·Permission / AI Security / Governance

### 问题与卡点

- WCB 学习面板需登录才能看到今日具体任务和打卡入口，建议每天学习前先手动登录确认。
- 对于「有基础」的我来说，Week 1 的 AI 基础章节可以快速过，重点应放在 Agent、MCP、Frameworks 以及 Web3 侧的 Account Abstraction 和 Smart Contract 交互。

### 实验/代码片段

```bash
# 今日初始化了学习仓库
gh repo create neo-ai-web3-school-cohort-0 --public --description "Personal learning journal and proof-of-work for AI x Web3 School" --clone
# 仓库结构已创建并推送到 GitHub
```

## 打卡

- **打卡平台链接**: https://web3career.build/zh/programs/AI-Web3-School#tab=learning
- **提交时间**: 2026-05-18
- **打卡草稿**:

> 【AI × Web3 School 打卡 Day 1】
>
> 今天完成了学习仓库初始化，浏览了 Handbook 总览，理清了 AI × Web3 四层知识地图。
>
> 关键收获：AI × Web3 不是拼接概念，而是需要同时理解模型能力、Agent 执行、钱包权限和链上验证的真实系统。
>
> 今日学习笔记：https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-18.md
>
> #AIWeb3School #LearningAgent #Day1

## 明日计划

- [ ] 登录 WCB 学习面板，确认明日具体任务
- [ ] 深度阅读 Prompt 与 Context 章节
- [ ] 尝试本地 Hermes Agent 的一个简单任务（如 web_search 或 web_extract）
- [ ] 整理今日学习中的一条 Handbook 问题到 handbook-feedback/

## Handbook Feedback

- **相关页面**: https://aiweb3.school/zh/handbook/
- **问题/建议**: WCB 学习面板需登录后才能看到每日具体任务和打卡入口，是否可以在 Handbook 中增加一个“无登录状态下的每日任务预览”或“任务公开订阅源”，以便学员在未登录时也能快速了解今日学习内容？
````
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
