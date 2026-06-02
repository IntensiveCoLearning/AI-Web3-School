---
timezone: UTC+8
---

# ChiWon

**GitHub ID:** CHI-WON

**Telegram:** @FelixWang7

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-02
<!-- DAILY_CHECKIN_2026-06-02_START -->
# 2026-06-02

> 黑客松 Day 2：合约回归 + Cobo 赛道对齐 + CAW 集成启动

## 今日时间线

-   **早晨**：合约 + 测试回归（8/8 测试全过 + demo 跑通）；发现 pull payment refactor 未 commit
    
-   **下午**：抓 Casual Hackathon 官网 + llms.txt + Cobo 赛道要求，对齐项目
    
-   **晚间**：Cobo CAW v0.2.86 安装 + 配对 + SETH 0.01 测试币到账；探索 `caw tx call` 接口
    
-   **决策**：双 agent 配对（路 2）明天做；今天不写代码不 commit
    

## 今日产出

### 1\. 黑客松项目进度确认

-   合约：`AgentEscrow.sol`（Solidity 0.8.20，210 行）— 状态机 + C-E-I + pull payment + 计时器在 deposit 启动
    
-   测试：**8/8 全过**（happy path / refund x2 / dispute x2 / resolve x2 / getTask）
    
-   Demo：本地 hardhat 端到端跑通（Alice 付 0.001 ETH → Bob 翻译 → accept → withdraw）
    
-   状态：本地完成，**未部署测试网**
    

### 2\. 黑客松规则对齐

-   比赛时间：6/1–6/13（UTC+8）build，6/14 Demo Day，6/17 获奖公示
    
-   **Cobo 赛道硬性要求**：
    
    -   “Agent 的资金相关操作需通过 Cobo Agentic Wallet（CAW）完成” — 必须接 CAW
        
    -   必须可运行 Demo，不接受 PPT/Mockup
        
    -   提交需：GitHub Repo + README + 3-5 min Demo 视频 + CAW 关键代码 + **测试网地址 + Tx Hash + Agent Wallet 地址**
        
-   我项目匹配度：方向 02（Trustless Agent Work Agreements）天然契合 — A2A 托管 + 验收 + 结算
    

### 3\. Cobo CAW 集成进度

-   CLI：v0.2.86 装好（`/Users/Qichie/.local/bin/caw`）
    
-   Agent：`caw_agent_7c15264a6c585240`（active，prod env）
    
-   EVM 钱包：`0xc1cb5c1a6edf8cf42e5373539f02b7457c84cd05`（SETH + TBASE\_SETH + 多链）
    
-   测试币：SETH 0.01 到账 ✅
    
    -   tx: `0x22d7480a0f89f6ad86f9b86cd6b9e51b9814965fadbec4022c57f35e8e462b44`
        
-   关键接口发现：`caw tx call --contract ... --calldata ... --value ... --pact-id <uuid>` — **每次合约调用强制需要 pact-id**
<!-- DAILY_CHECKIN_2026-06-02_END -->

# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->

合约 review 落地 + Cobo 集成架构对齐

两个 workstream 并行推进：

**Workstream 1 — 合约 review（Claude Code 完成，commit 11be036）** 让 Claude Code 改 `AgentEscrow.sol`，4 项关键改动：1) 加 arbitrator 角色 + resolveDispute 仲裁层；2) 计时器从 createTask 挪到 deposit（消除"等太久才充值"漏洞）；3) C-E-I 注释合规化；4) getTask view + TaskResolved event。配套 7 测试全过 + [CLAUDE.md](http://CLAUDE.md) 沉淀 Hardhat 3 踩坑（provider cache、ContractFactory API、test runner 不可用等）。

**Workstream 2 — Cobo 集成调研（明天实操）** 今天没跑通端到端（硬卡在 owner pairing 需要手机 App 扫码），但路线 A 决策 + SDK v0.1.7 实物确认 + 文档吃透全做完。关键概念校准：拦截在 CAW 服务端，链上根本到不了；denial 是 HTTP 403 + 结构化 JSON——这决定了 demo 视频该拍 denial 那一帧而不是链上 revert。

明天的执行顺序：caw onboard → faucet → Sepolia 部署 → cobo-demo.ts → denial-demo.ts。预计 2.5h 内端到端跑通。
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->


````markdown
# 2026-05-31 (Sat) — Hackathon Dev Kickoff

## Week 3 目标
实践深化 + Hackathon 启动 → 跑通第一条 escrow 交易

## WCB 日程
- 下周 6/5 Week 3 例会（唯一活动）

---

## A 路径：Hackathon 开发

### 环境搭建
- Hardhat 3 + TypeScript + ethers v6
- 踩坑：Hardhat 3 不能 `import { ethers } from "hardhat"`，需要 `@nomicfoundation/hardhat-ethers` 插件 + `NonceManager` 管理 nonce
- 最终方案：直接用 ethers 的 `JsonRpcProvider` + `NonceManager(Wallet)`，从 `hardhat.artifacts` 读 ABI/bytecode

### Escrow 合约
- `contracts/AgentEscrow.sol`：编译通过（solc 0.8.20）
- 6 函数 + 完整状态机：createTask → deposit → deliver → accept/refund/dispute
- C-E-I 模式防重入
- Access Control（onlyPayer / onlyProvider）
- Event 日志（TaskCreated, TaskFunded, TaskDelivered, TaskAccepted, TaskRefunded, TaskDisputed）

### 端到端 Demo
- `scripts/demo.ts`：一步跑完整个交易流程
- 本地 Hardhat 节点运行成功：

```
Alice: 0xf39F...2266
Bob:   0x7099...79C8
Escrow: 0x5FbD...0aa3

1. createTask  → Created
2. deposit     → Funded (0.001 ETH locked)
3. deliver     → Delivered (Bob submits translation)
4. evaluate    → Pass (proof non-empty, language check passed)
5. accept      → Accepted (funds released to Bob)
```

### Cobo Agentic Wallet 调研
- Pact = Policy + Session Key 工业级实现
- 直接可调：钱包创建（MPC）、Pact 规则引擎、超限暂停+owner确认、自动撤销、审计日志
- 自己做：Escrow 合约（今天已部署）、Quote 协议、Evaluator、Marketplace 发现层

---

## 打卡草稿

> 🚀 今日学习：Hackathon 开发启动！从零搭建 Hardhat 3 + TS 环境，写 AgentEscrow 合约 + 端到端 demo 脚本
>
> 核心收获：
> 1. Hardhat 3 的 ethers 要用 `@nomicfoundation/hardhat-ethers` 插件 + ethers 原生包配合，不能直接 `import { ethers } from "hardhat"`
> 2. 合约从伪代码到编译通过只改了三处：modifier 替换 require、NonceManager 管理 nonce、remove unused import
> 3. 端到端 demo 一步跑通：createTask → deposit → deliver → evaluate → accept，状态转换全部正确
> 4. Cobo Agentic Wallet 可以做 proposal 的钱包层：Pact = 我们的 Policy + Session Key，Escrow 合约我们自己写
>
> 下一步：部署到 Base Sepolia 测试网 + Cobo SDK 集成

## 下一步
- [ ] 部署到 Base Sepolia 测试网
- [ ] Cobo Agent Wallet SDK 集成
- [ ] .gitignore node_modules
- [ ] 写合约单元测试
````
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->



📚 今日学习：Web3 基础三章 + 应用到 Proposal

核心收获：

1\. 智能合约的本质是"可验证执行"——链上状态 + Event + ABI + 完整调用链（前端→钱包→RPC→EVM→索引器），不是只写 Solidity

2\. 重入攻击是 escrow 合约最经典的坑——修复用 Checks-Effects-Interactions：先改状态再转账，所有外部调用放最后

3\. Account Abstraction 是 Agent 权限的底座——把"单次 ≤5 USDC / 每天 ≤20 USDC"从一句话变成系统可检查的规则（Session Key + Paymaster）

4\. 学完直接动手：写了 Escrow 合约伪代码（Solidity）+ 完整状态机流程图（Created→Funded→Delivered→Accepted/Refunded/Disputed）+ 四个异常路径

Proposal 进展： Bridge 六章 + Web3 三章全部映射到 Escrow 合约设计，支付闭环有代码了

明日： proposal 最终润色 + Hackathon 开发环境搭建
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->




📚 今日：Bridge ch5 Machine Payment + ch6 Settlement & Escrow + Proposal 初稿

核心收获：

1\. 机器支付的关键是报价→授权→收据→预算控制的全链路，不是转账本身

2\. Escrow 先定义状态机再写合约——Created→Funded→Delivered→Accepted/Refunded

3\. Evaluator 不能只靠 AI——脚本+测试+AI+人类组合

4\. 小额 dispute 保证金不能高于争议金额，否则维权通道形同虚设

Bridge 六章全通：预算→quote→escrow→交付proof→验收→结算→receipt

Proposal 初稿产出：Agent Service Marketplace，翻译场景
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->





📚 今日学习：Bridge 前四章（Chain-aware Context → Web3 Tool Use → Agent Workflow → Agent Wallet）

核心收获：

1\. Agent 的链上感知必须从工具读取，不能靠记忆——每条数据都要带 chain id + 时间 + citation

2\. 读写分离是工具设计第一原则——万能 RPC 工具等于没有权限控制

3\. 状态机 + Human-in-the-loop 分层是 Agent 安全执行的基础——不是每一步都确认，而是关键风险点介入

4\. Agent Wallet 的核心不是"给私钥"，而是 Session Key + Policy + Guard + Revocation 四件套

四章学完建立了 Bridge 的完整骨架：输入层 → 能力层 → 流程层 → 权限层。这些直接服务于我选的 Hackathon B 方向（Agent Payment/Commerce）

明日：Machine Payment + Settlement & Escrow（B 方向核心章）→ proposal 初稿
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->






今日学习内容

本周进入 Week 2 核心任务：AI × Web3 交叉方向研究。阅读了 Notion 课程页面（模块 A-G 全览），重点消化了「统一判断框架」——每个方向用 7 个问题审视（AI 承担什么、Web3 提供什么、谁发起/执行/付款/验收/仲裁、验证成本、失败模式等）。

今日产出

通过四步法完成了 Week 2 主方向选择：

1\. 从 6 个方向中选定 Payment/Commerce 和 Identity/Capability 两个

2\. 用"没有 AI 还成立吗？没有 Web3 还成立吗？"检验两个方向

3\. 判断：Payment 适合做产品，Identity 适合做协议

4\. 最终选定 Agent Payment/Commerce（产品） 作为 Week 2 主方向

关键洞察：agent 消费模型是 pay-per-use + budget cap，不是 human 的 subscription。Web3 价值在于"无共同第三方下的链上结算 + 可验证交付证明"。ERC-8004 ≠ 身份层，身份声明靠 ENS+EAS。

明日计划

画 AI × Web3 问题地图 → B 方向深挖（场景/流程图/风险） → proposal 初稿 → 补本周活动打卡。目标：5/29 截止前交 proposal。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->







今日学习：Security 验证 + DeFi 地基 + Oracle/Indexing 🔐

Week 2 第一天，今天三件事：

1\. Security quiz 验证（昨天重建的 Web3 安全地基）

过了 4 道场景题覆盖核心盲区：

\- Reentrancy：为什么 balances\[msg.sender\] = 0 必须在 call 之前（Checks-Effects-Interactions）

\- tx.origin ≠ msg.sender：tx.origin 是最外层 EOA，msg.sender 是当前调用者——钓鱼攻击利用的就是这个差

\- Flash Loan + MEV Sandwich：闪电贷借→推高 AMM 价格→用户成交在更差价格→卖回还贷——整套在一笔交易内完成，因为区块链交易是原子的。滑点保护部分有效但不是根治方案

\- Agent 私钥五层安全：建议层→事实层→Policy→Simulation→人工确认。签名权永远是最后防线

2\. DeFi 五积木串联

Token → AMM → Lending → Stablecoin → Liquidity，五块积木的依赖关系。核心认知：

\- DeFi 不是"去掉中介"，是把金融规则写成可组合、可验证、也可被攻击的链上协议

\- Lending 清算靠 Oracle 喂价触发——预言机延迟/操纵直接导致坏账或错误清算

\- Flash Loan 不只用于 Sandwich，清算攻击（砸盘→触发清算→拿折扣抵押品）是另一个经典场景

\- Stablecoin 的"稳定"靠机制维持——法币抵押型（USDC）怕监管冻结，加密超额抵押型（DAI）怕抵押品暴跌连锁清算

AI 在 DeFi 的边界：做信息整理和风险辅助（解释交易、监控仓位），不做自动执行（swap/借贷/加杠杆）。

3\. Oracle + Indexing：数据进和出

\- Oracle：外部数据进链上——Price Feed 喂价格、Data Feed 喂事件结果、AI Oracle 喂模型判断。数据源就是信任边界

\- Indexing：链上数据拉出来——Event Indexing → Subgraph → Data Pipeline，三层从监听合约日志到给 Agent 提供结构化上下文

\- AI Oracle 特殊问题：模型判断不是客观事实，必须有输入可追溯、输出可复核、允许挑战、错误有惩罚
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->








今日学习：Web3 安全地基重建 🏗️

串联了密码学 → 钱包 → 网络 → Smart Contract → Security 五章，建立了从「私钥签名」到「mempool 抢跑」到「合约重入」的完整攻击面地图。核心收获：

1\. Web3 安全必须从底层理解——每一层都是攻击面，不能孤立看 Security 章节

2\. mempool 公开 + 交易有序 + gas 竞价 = MEV 的物理基础，不是 bug 是透明性的代价

3\. tx.origin ≠ msg.sender、审计 ≠ 安全保证书、Simulation 挡不住 mempool 变化

4\. Agent 不应直接持有私钥——五层安全分层：建议 → 事实 → policy → simulation → human check

明天计划：Security quiz 验证 + 推进 DeFi / 预言机 / 索引章节。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->









今日学习：Phase 1 AI 基础全通关 🎉

今天一口气完成了 Handbook AI 基础部分全部剩余 9 章（Context / RAG / Agent / MCP / Frameworks / Vibe Coding / Evaluation / Fine-tuning / Inference），加上前两天完成的 LLM 和 Prompt，Phase 1 正式收官。

上午 — 核心 pipeline 三章

\- Context 是信息治理不是文本拼接——每段信息必须分层标注信任级别

\- RAG 的可靠性取决于证据链（版本 metadata + filter + citation），不取决于向量库

\- Agent 是被约束的执行循环，三个安全红线：自我反思≠安全校验、Memory≠授权、Planning≠执行许可

下午 — 工程化三章

\- MCP：工具接入标准化，但权限和审计仍由系统实现

\- Frameworks：先理解工作流再选框架，简单链路保持简单，框架要能退出

\- Vibe Coding：任务要小 + 上下文要准 + 验证要硬

晚上 — 质量闭环三章

\- Eval：不能被测量的行为就不能被稳定改进，先保关键失败场景

\- Fine-tuning：先有 eval 再修数据，prompt 搞不定才微调，不用微调存实时知识

\- Inference：在延迟/成本/质量/隐私间取平衡，链上动作必须可审计

贯穿全文的安全原则：AI 负责推理，Web3 负责结算，每一层都不能越界。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->










今日学习：Phase 1 AI 基础全通关 🎉

今天一口气完成了 Handbook AI 基础部分剩余的全部章节（9 章），加上之前两天完成的 LLM 和 Prompt，Phase 1 正式收官。

建立了从「模型怎么理解指令」到「推理服务怎么部署」的完整心智模型：

上午 — 核心 pipeline（Context + RAG + Agent）

\- Context 是信息治理不是文本拼接——每段信息必须分层标注信任级别

\- RAG 的可靠性取决于证据链（版本 metadata + filter + citation），不取决于向量库

\- Agent 是被约束的执行循环，最危险的设计 = 模糊目标 + 广泛工具 + 长期记忆 + 大额资产

下午 — 工程化（MCP + Frameworks + Vibe Coding）

\- MCP 把工具连接标准化，但权限和审计仍由系统实现

\- 框架先理解工作流再选，简单链路保持简单，框架要能退出

\- Vibe Coding 有效公式：任务要小 + 上下文要准 + 验证要硬

晚上 — 质量闭环（Evaluation + Fine-tuning + Inference）

\- 不能被测量的行为就不能被稳定改进——先有 eval 再谈优化

\- Fine-tuning 改行为分布不补实时知识——prompt 搞不定才微调

\- 推理是在延迟/成本/质量/隐私之间取平衡，链上动作必须可审计

贯穿全文的安全红线：AI 负责推理，Web3 负责结算，每一层都不能越界。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->











今日学习：Context + RAG + Agent 三合一

今天把 Handbook AI 基础部分三个核心概念串联学习：上下文（Context）、检索增强生成（RAG）、智能体（Agent）。这三者是自然的 pipeline——Knowledge Base → RAG（检索+引用）→ Context（分层放置）→ Agent（读状态+调工具+验证）。

核心收获：

1\. Context 不是文本拼接，是信息治理。系统指令、链上事实、用户意图、外部网页必须分层标注信任级别，混在同一层就是灾难

2\. RAG 的核心不是向量库，是证据链。chunk 必须带版本元数据，retriever 不能只靠向量相似度，输出必须可追溯到具体文档段落

3\. Agent 是被约束的执行循环，不是自主权。模糊目标 + 广泛工具 + 长期记忆 + 大额资产 = 最危险的设计

4\. 三个安全红线：自我反思不能替代外部校验、Memory 不能替代实时授权、Planning 不是执行许可
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->












📖 今日学习：Handbook Prompt 章节（最小路径）

\> 学了 Instruction 四段写法（任务目标/可用输入/禁止行为/输出格式）和 Structured Output 的设计原则（输出变成可机器校验的字段，不做散文解析）。核心认知：Prompt 是软约束，真正的安全边界由 code 层的 schema 校验 + guard 规则 + human approval 承担。

\> 💻 实践：写了一个交易风险摘要 prompt，跑了 3 组测试（普通转账 → low risk / 无限授权 → high risk / 目标地址不匹配 → high risk），建立了 Prompt + Structured Output + Guard 三层配合的心智模型。

\> 📁 experiments/transaction\_risk\_[prompt.py](http://prompt.py)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->














📝 打卡草稿：

Day 1 | 2026-05-18 | Phase 1: 大语言模型（LLM）

学习内容：

通读了 Handbook LLM 全章，围绕"LLM 是推理入口，不是真相源"这一核心认知展开。分三个主题深入：

1\. Token & Embedding：用 tiktoken 实测了不同内容类型的 token 消耗（EVM 地址 42 字符 → 27 token，驼峰命名是 tokenizer 噩梦）。理解了 Embedding 的边界：向量相似 ≠ 事实正确，向量检索只是 RAG 的召回起点。

2\. Transformer & Hallucination：通过 attention 权重模拟理解了为什么硬约束不能依赖 prompt（模型会"忽略"余额限制而关注价格数字）。梳理了 Builder 视角下三种幻觉类型（编造参数、事实错误、过时信息）及对应防线。

3\. Multimodal：明确了多模态在 Web3 场景的真正价值（读懂审计报告、仪表盘、错误堆栈）和致命边界（截图可伪造，涉及资产判断必须回到链上数据）。

收获：

\- 建立了 AI × Web3 四层架构心智模型：编排层(LLM) → 数据层(RPC) → 执行层(合约交互) → 安全层(规则引擎+人工确认)

\- 清楚了 LLM 在系统中的正确位置：推理助理，不是数据源，不是法官

\- 理解了三个关键设计原则：硬约束放代码不放 prompt、Embedding 是起点不是终点、截图不能作为唯一证据
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
