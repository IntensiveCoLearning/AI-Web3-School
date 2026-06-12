---
timezone: UTC+8
---

# puppet25k

**GitHub ID:** puppet25k

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-13
<!-- DAILY_CHECKIN_2026-06-13_START -->
## **Handbook 学习 - Inference**

-   Inference 连接模型能力和产品交付——决定延迟、成本、上下文、稳定性
    
-   API Model：上手快、更新快，但速率限制、成本控制、版本变更仍要处理
    
-   Local Model：隐私可控、成本可预测，但显存、并发、量化质量都是约束
    
-   Quantization：FP16→INT8/INT4，在体积/速度/质量间取舍，需用自身任务测试
    
-   Serving：并发、队列、流式、缓存、监控、灰度——服务做不好，模型越强问题越难查
    
-   Handbook AI 篇全部学完：Prompt/Context/RAG/Agent/Frameworks/Vibe Coding/MCP/Evaluation/Fine-tuning/Inference ✅
    

## **随堂笔记**

> 推理服务的核心不是"跑出答案"，而是在约束条件下交付可用答案。

> API model 让你少管基础设施，本地模型让你多拿控制权。部署改变边界。

> Serving 做不好，模型越强，线上问题越难排查。
<!-- DAILY_CHECKIN_2026-06-13_END -->

# 2026-06-11
<!-- DAILY_CHECKIN_2026-06-11_START -->

## **收官分享会 -** [**Z.AI**](http://Z.AI) **Workshop：用 Agent Mode 发现本地商业机会**

-   Roman（Z.AI/GLM）演示 Agent Mode + one Master Prompt 自动完成商业计划全流程
    
-   核心：Chat Mode（一次回答）vs Agent Mode（多步骤目标执行）
    
-   Demo：Pattaya 空调维修服务——从调研到 Google Ads 全自动
    
-   关键工具：last30days skill（多源检索+品质验证）
    
-   Q&A 精华：proof of work/code 防幻觉、JSON 导出续会话、模型间 fallback
    
-   共学营正式收官
    

## **随堂笔记**

> Agent Mode 的转变：从"辅助"到"执行"（From chat assistance to autonomous execution）。给 Agent 一个目标，它帮你一步步走完。

> 要求 proof of work 和 proof of code，让 Agent 自我验证，很多时候它会发现"哦我忘了这个"然后自行修正。

> 长会话丢失上下文？把整个对话导出为 JSON，在新会话中导入，让 Agent 重理解进度。
<!-- DAILY_CHECKIN_2026-06-11_END -->

# 2026-06-10
<!-- DAILY_CHECKIN_2026-06-10_START -->



## **Handbook 学习 - Fine-tuning**

-   Fine-tuning 不是"效果不好就训练一下"，改的是行为分布而非系统边界
    
-   先问清楚：是 prompt 问题？上下文缺失？检索没拿到？输出格式没 schema？——往往不是微调能解决的
    
-   SFT：监督微调，适合固定格式/风格/术语/工具调用样式，对数据质量极度敏感
    
-   LoRA：参数高效微调，降低训练成本和显存需求，但不是魔法
    
-   PEFT：参数高效微调统称，适合大模型 + 明确任务 + 中等数据量场景
    
-   Dataset 是核心资产：训练/验证/测试/回归四组缺一不可
    
-   Overfitting：样本太少、风格单一、轮数太多都会导致真实用户一问就崩
    

## **随堂笔记**

> Fine-tuning 改的是模型行为分布，不是产品系统边界。先有 eval，再谈 fine-tuning；先修数据，再修模型。

> 别用微调存实时知识。实时状态、价格、文档更新和用户数据更适合放在检索或工具里。

> 不要把测试集拿去训练。这会让评估失去意义。
<!-- DAILY_CHECKIN_2026-06-10_END -->

# 2026-06-09
<!-- DAILY_CHECKIN_2026-06-09_START -->




## **Handbook 学习 - Evaluation**

-   Evaluation 是针对 AI 大模型特化的测试流程
    
-   概念和常规软件测试流程有一定相似性
    
-   但大模型输出有随机性，需要保证下限，因此特化了一系列手段：
    
    -   Golden Set：精心标注的测试样本（30-100 条高质量 > 一堆随便收集）
        
    -   LLM-as-Judge：用模型评模型（适合开放答案，但不能被神化）
        
    -   Regression：防止"修 A 坏 B"，每修一个 bug 就加一条 regression 样本
        
    -   Harness：可重复运行的评测框架
        
    -   Observability：线上观测，补充 golden set 覆盖不到的真实失败
        

## **随堂笔记**

> Evaluation 是针对 AI 大模型特化的测试流程，其中的概念和常规软件测试流程有一定的相似性。而因为大模型本身的输出的随机性，需要保证下限，所以需要特化一部分随机性问题，比如用 golden set 这种参照，还有一系列回顾和各种评估手段来确保这一点。

> 不能被重复测量的 AI 行为，就不能被稳定改进。

> LLM-as-Judge 是评估工具，不是最终真相。
<!-- DAILY_CHECKIN_2026-06-09_END -->

# 2026-06-08
<!-- DAILY_CHECKIN_2026-06-08_START -->





## **Handbook 学习 - MCP**

-   MCP 是给 AI Agent 使用的 API 标准协议
    
-   类似传统 API 的抽象层，但面向大模型工具调用
    
-   Server：暴露 resources / tools / prompts
    
-   Client：连接模型和 Server，负责发现能力、调用转发、权限提示
    
-   部分 MCP 就是从现有 API 封装而来
    
-   对整个 Skill 系统和 LLM 对接的效率有显著提升
    

## **随堂笔记**

> MCP 很类似 API，但是是给 AI Agent 使用的 API。目前有一部分 MCP 就是从 API 封装而来，对整个 Skill 系统和大模型对接的效率有显著提升。

> 模型不应该直接拥有世界；它应该通过明确协议访问被授权的上下文和工具。

> MCP 的关键不是"能接更多工具"，而是让工具接入变得可描述、可发现、可限制。
<!-- DAILY_CHECKIN_2026-06-08_END -->

# 2026-06-07
<!-- DAILY_CHECKIN_2026-06-07_START -->






## **Handbook 学习 - AI 基础篇（二）**

-   阅读 Agent / Frameworks / Vibe Coding 三个章节
    
-   Agent：Tool Use → Planning → State → Reflection → Multi-Agent 核心要素
    
-   Frameworks：LangChain / LangGraph / OpenAI Agents SDK / DSPy / Hermes / Learning Agent 对比
    
-   Vibe Coding：人负责方向和验收，Agent 负责生成和修改；Claude Code / Codex CLI 实践
    

## **随堂笔记**

> Agent 的核心不是让模型更像人，而是让执行循环有清楚边界。工具比回答更危险。

> 框架是系统边界的表达，不是智能本身。先理解工作流，再决定用不用框架。

> AI Coding 的核心不是自动生成代码，而是把工程反馈循环压短。没有测试、审查和版本控制，速度只会放大混乱。
<!-- DAILY_CHECKIN_2026-06-07_END -->

# 2026-06-06
<!-- DAILY_CHECKIN_2026-06-06_START -->







## **Handbook 学习 - AI 基础篇**

-   阅读 Prompt / Context / RAG 三个章节
    
-   Prompt：指令分层、结构化输出、Prompt Injection 防护
    
-   Context：上下文工程设计、Memory 与 Knowledge Base 的分层治理
    
-   RAG：Chunking → Vector DB → Retriever → Rerank → Citation 证据链
    

## **对 RAG 的理解**

-   Chunking 是 Vector DB 的前置处理，决定检索质量
    
-   Retriever 根据用户问题检索 Vector DB，取回候选材料
    
-   Rerank 对检索结果重新排序，把最相关/最可信的内容排前面
    
-   Citation 通过可信信息来源验证结论正确性
    

## **随堂笔记**

> Prompt 是软约束，不是安全边界。真正的边界必须由代码、权限、校验和审计来承担。

> 模型只能基于它看见的上下文行动；系统必须决定什么能进上下文、带着什么身份进去、过期后怎么退出。

> RAG 的可靠性取决于证据链，不取决于向量库这个名词。没有 citation 和 freshness 的 RAG，只是把幻觉从模型内部搬到了检索系统里。
<!-- DAILY_CHECKIN_2026-06-06_END -->

# 2026-06-05
<!-- DAILY_CHECKIN_2026-06-05_START -->








## **分享会 - AI Agent 时代，重新审视区块链这项技术选择 + Conflux 实战**

-   主讲人 FuSheng（树哥）
    
-   核心论点：AI Agent 正在移动 Web3 选型的临界点
    
    -   基础设施（L2、新 L1、Conflux 3.0）降低成本
        
    -   Agentic 场景产生更多跨系统/跨主体任务，增加区块链收益
        
-   用不用区块链 = 是否需要共享、可验证的状态和规则
    
-   复杂性分层：Agent 做附属复杂性，开发者保留判断（本质复杂性）
    

## **Conflux 链上投票 Demo 开发流程**

-   5 步流程：确认需求 → 实现 → 调试 → 部署 → 合约升级
    
-   需求阶段：Agent 辅助追问信任边界、投票规则、状态归属、异常路径
    
-   实现阶段：Ralph loop / Codex 目标模式，Agent 自主执行 + 交付前 self-review
    
-   底层链：Conflux Layer 1（树图共识，2020 年主网上线）
    

## **随堂笔记**

> 用不用区块链，是系统能力选择。重点不是谁更先进，而是场景是否需要共享、可验证的状态和规则。

> 高度依赖资深经验的部分，正在被工具化、流程化。开发者保留判断，Agent 帮助展开判断，把工程工作推进到可验证结果。

> AI Agent 正在移动 Web3 选型的临界点——过去算不过账的中间地带应用，现在有了新的 ROI。

## **下一步工作**

1.  结合 Cobo CAW + Conflux 思考黑客松方案
    
2.  继续 Handbook Web3 基础学习 — Account Abstraction（AA）
<!-- DAILY_CHECKIN_2026-06-05_END -->

# 2026-06-04
<!-- DAILY_CHECKIN_2026-06-04_START -->









## **分享会 - Harness Engineering for Financial Intelligence**

-   主讲人 Skyl，FluxA 的 AI 原生支付基础设施
    
    -   前阿里巴巴 & 蚂蚁集团高管创立
        
-   核心问题：Agent 需要钱包，但现有金融基础设施并未为 AI Agent 设计
    
-   **Financial Harness** = Intent-based Constraints + Spending Validation Loop
    
    -   Intent：用户授权的是任务本身，而非逐笔支付
        
    -   编程反馈闭环（Write→Build→Test→Fix）在金融领域因"结算后不可撤回"而失效
        
    -   Spending Validation 必须在结算前完成
        
-   规则过滤：黑名单类目、偏离授权范围、重复交易检测
    

## **FluxA - AI 原生支付基础设施**

-   四大场景：Agent-to-Agent / Agent-to-Merchant / Agent-to-Tool / Transfers & Tipping
    
-   与百度智能云合作 DAO（Daily Active Agents）经济
    
    -   90K+ Agent 钱包，10K+ 资源已货币化
        
    -   闭环管道：百度市场 → 资产发行 → FluxA 全球分发 & A2A 支付 → 交易 → 自动结算 → 跨境
        

## **随堂笔记**

> Intent = user-authorized task or goal that every downstream transaction must adhere to. The authorization object is the task itself, not any individual payment.

> In finance, the "mistake" may have already settled. A wire transfer cannot be rescinded. The financial harness needs validation that operates before settlement.

> AI agents as first-class economic citizens.
<!-- DAILY_CHECKIN_2026-06-04_END -->

# 2026-06-03
<!-- DAILY_CHECKIN_2026-06-03_START -->










# **2026-06-03 周三**

## **Co-Learning：**

-   助教分享Joye Huang的Agent Engineer 成长路径（墨尔本大学/Tezign AIGC/[atypica.ai](http://atypica.ai)）
    
    -   Agent 入行重项目深度 > 八股文
        

## **黑客松赛道实战-Cobo**

-   Moon Cobo Agentic Wallet 开发者教程（Skills/CLI/API/Pact 权限系统）：
    
    -   CAW 是黑客松 Cobo 赛道基础设施（3500U）。
        
    -   Pact 系统让 Agent 在规则内自主交易 + 人类审批兜底。
        
        -   参考资料：minimind-notes（⭐122）、Learn-Open-Harness、cobo-agentic-wallet-dev Skills。
            

## **随堂笔记**

> Agent 面试考察优先级：个人项目深度 > 系统理解（Agent Loop/Tool Registry/Permission）> 基础知识（RAG/Prompt Engineering）> 八股文背诵。

> Harness = Tools + Knowledge + Observation + Action + Permissions。从 OpenHarness 12 章足以理解 Claude Code / Cursor 架构。

> CAW 四层接入：Skills（推荐）→ MCP → CLI → API。Pact 策略 = 链白名单 + 合约白名单 + 频率限制 + always\_review。每个 Pact 独立 API Key，最小权限原则。

## **下一步工作**

1.  继续 Handbook Web3 基础学习 — 下一站 Account Abstraction（AA）
    
2.  头脑风暴黑客松赛道2的选题
<!-- DAILY_CHECKIN_2026-06-03_END -->

# 2026-06-02
<!-- DAILY_CHECKIN_2026-06-02_START -->











### **Week 3 分享会 —** [**Z.ai**](http://Z.ai) **GLM-5.1: 8 Hour Autonomy**

1.  参加了 [Z.ai](http://Z.ai)（智谱 AI）Cara 的分享会
    
2.  了解了 [Z.ai](http://Z.ai) 生态演进：GLM-130B → ChatGLM → GLM-4 → GLM-5 → GLM-5.1（MIT 开源权重）
    
3.  理解了 **8 Hour Autonomy 的核心概念**：不是时长，而是深度（Depth）— 进入实验循环、数百轮迭代、数千次工具调用
    
4.  学习了 Demo：8 小时 Linux 桌面构建，1200 步自主完成
    
5.  掌握了 GLM 的技术路线：交错思考、DSA 注意力分配、保留思考
    
6.  理解了深度的取舍：1M token 召回从 78%→32%，但 Agentic Coding 显著提升
    
7.  关注到定价优势：$3/MTok vs Claude Opus $25/MTok（8.3×）
    
8.  记住了 Hackathon 实用建议：目标漂移 / 错误累积 / 策略僵化的对策
    

### **Hackathon Openday**

1.  参加了 20:00 的 Hackathon Openday（LXDAO / ETHPanda 主办）
    
2.  了解了两个赛道细则：
    
    -   **Cobo 赛道（3500U）**：Agentic Economy × Cobo Agentic Wallet
        
    -   [**Z.AI**](http://Z.AI) **赛道（3500U）**：Web3 × Long-Horizon Task（GLM-5.1 驱动）
        
3.  掌握了评分五维度：创新性 / 技术实现 / 用户体验 / 生态影响 / 演示质量（各10分）
    
4.  了解了 [Z.AI](http://Z.AI) API 报销政策：Lite Plan $18/月赛后实报实销
    
5.  记住了提交方式：6月13日12:00前通过 GitHub Issues 提交，项目必须开源
    
6.  关注到 Cobo Discord 答疑：[https://discord.gg/hJ6wPunpQ](https://discord.gg/hJ6wPunpQ)
    

### **随堂笔记**

> 8 Hours = Depth, not time length. — 进入实验循环，而不是往前冲。

> 三个习惯会让所有模型在长任务上更好：明确检查清单、要求自测、卡住时打断转向。

### **下一步工作**

1.  继续 Handbook Web3 基础学习 — 下一站 **Account Abstraction（AA）**
    
2.  关注 GLM-5.1 的本地部署可能性（MIT 权重 + 低成本）
<!-- DAILY_CHECKIN_2026-06-02_END -->

# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->












### **Co-Learning | 任务推进与答疑**

1.  参加了 19:00 的 Co-Learning 答疑交流
    

### **Week 3 分享会 — 从 VC 角度如何更好打磨项目**

1.  参加了 Tracy Shi（Waterdrip Capital Managing Partner）的分享会
    
2.  理解了当前 VC 投资趋势：AI 创业进入第二阶段，从"讲故事"进入"看落地"
    
3.  资本更加关注 PMF、留存、CAC、商业化
    
4.  掌握了 VC 核心四问：增长潜力、盈利能力、护城河、回报
    
5.  学习了 VC 融资前必须回答的四个问题：落地、用户数、商业闭环、获客
    
6.  理解了加分项：创始人连接能力、个人魅力和行业影响力
    
7.  了解了创始人的普遍迷思
    

### **随堂笔记**

> AI 创业进入第二阶段：从讲故事进入看落地。VC 不再为故事买单。

### **下一步工作**

1.  继续 Handbook Web3 基础学习 — 下一站 **Account Abstraction（AA）**
    
2.  结合 VC 视角审视 Hackathon 项目方向
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->













### **Handbook — 开发栈（Dev Stack）**

1.  自学了 Handbook「开发栈（Dev Stack）」章节
    
2.  理解了 Web3 开发栈是一条完整工程链路：写合约 → 编译 → 测试 → 前端调用 → 部署 → 验证
    
3.  掌握了五大核心工具定位：
    
    -   **Remix** — 合约实验台，浏览器 IDE，适合原型验证
        
    -   **Hardhat** — JS/TS 合约工程框架，适合与前端/CI 协作
        
    -   **Foundry** — Solidity-native 测试工具，速度快、支持 fuzz/fork test
        
    -   **OpenZeppelin** — 安全库，但"用了库就安全"是错觉
        
    -   **Viem & Wagmi** — 前端链交互，TypeScript 类型安全
        
4.  理解了前端接链四类状态分离：连接状态 / 读取状态 / 写交易状态 / 错误状态
    
5.  学习了最小投票合约的完整实践流程
    
6.  理解了 AI 在开发栈中的角色：可解释 ABI、生成脚本、补测试，但高风险命令需人工确认
    

### **随堂笔记**

> Web3 工具链的核心是把不可逆执行前移到可测试、可模拟、可审查的流程里。

> 项目真正耗时间的地方不是写第一版，而是上线后发现合约地址错了、ABI 不匹配、权限没测、交易状态没处理。

### **下一步工作**

1.  继续 Handbook Web3 基础学习 — 下一站 **Account Abstraction（AA）**
    
2.  实践最小开发链路：用 Remix 部署计数合约 + Hardhat 测试 + Viem 前端
    
3.  练习 Foundry 的 forge test 和 fuzz testing
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->














### **Handbook — 智能合约（Smart Contract）**

1.  自学了 Handbook「智能合约（Smart Contract）」章节
    
2.  用对照学习法理解核心概念：
    
    -   **Contract ≈ 会话 + Java Class**：状态公开 vs 封装、调用需 gas vs 无成本、部署后不可变 vs 可随意修改
        
    -   **Gas ≈ 内存/CPU 开销**：每条指令要花钱，storage 贵 memory 便宜
        
    -   **ABI ≈ API**：机器可读接口，但不是安全说明书
        
    -   **Event ≈ Log**：合约不可读 event，但外部可索引；成本低于 storage
        
3.  理解了合约的公开性带来可组合性也带来攻击面
    
4.  学习了 EVM 执行环境、Solidity 特有概念和合约升级风险
    
5.  掌握了完整调用链路：用户→钱包确认→EVM 执行→event→前端→索引器
    
6.  理解了 AI x Web3 中的分层设计：AI 做建议，钱包做授权，合约做执行
    
7.  学习计划进度更新：智能合约 ✅ → 下一站 **Account Abstraction（AA）** 🎯
    

### **随堂笔记**

> 合约的公开性带来了可组合性，也带来了攻击面。你写的不是普通函数，而是会管理真实资产和公共状态的程序。

> ABI 是机器可读接口，不是安全说明书。

### **下一步工作**

1.  继续 Handbook Web3 基础学习 — 下一站 **Account Abstraction（AA）**
    
2.  在区块浏览器里找一个简单 ERC-20 合约，实践查看源码、ABI 和事件
    
3.  学习 Solidity 基础语法
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->















2026-05-29

Dev3pack Builder 成长路径分享

参加了 Dev3pack 分享会 — 关于如何进入 Web3 生态的 Builder 成长路径

核心认知："Learning and building is not enough. Network is everything."

学习了 Builder Journey 五阶段：Learner → Contributor → Builder → Founder → Senior

掌握了 12 条实操建议：学英语、运营 X、融入社区、开源贡献、成为 Speaker、回馈社区等

了解了 Dev3pack（Global AI & Web3 Fellowship）的四步流程：Learn → Build → Accelerate → Connect

随堂笔记

We bet on people first, not on projects.

Learning + Building + Network + Giving Back = Web3 Builder 的完整闭环。

下一步工作

继续 Handbook Web3 基础学习 — 下一站 智能合约（Smart Contract）

实践 Dev3pack 建议：优化 X 账号、参与开源贡献

关注 Dev3pack 的 Fellowship 和 Hackathon 机会
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->
















### **Handbook — 钱包（Wallet）**

1.  自学了 Handbook「钱包（Wallet）」章节
    
2.  理解了钱包不是"登录按钮"，而是用户意图进入链上执行前的最后一道确认界面
    
3.  掌握三类钱包动作：连接钱包（低风险）→ 签名消息（中风险）→ 发送交易（高风险）
    
4.  学习了 EOA（私钥控制账户）vs 智能账户的区别和优劣势
    
5.  理解了助记词的安全铁律：任何网页/AI 要求输入助记词应视为危险
    
6.  掌握了交易六阶段状态管理和 Explorer 查看方法
    
7.  理解了 Gas 费用机制和 AI × Web3 中的钱包边界设计
    
8.  学习计划进度更新：钱包 ✅ → 下一站 **智能合约（Smart Contract）** 🎯
    

### **随堂笔记**

> 钱包不是登录按钮，是用户意图进入链上执行前的最后一道确认界面。 连接 ≠ 授权资产。签名必须可解释。网络是上下文。

### **下一步工作**

1.  继续 Handbook Web3 基础学习 — 下一站 **智能合约（Smart Contract）**
    
2.  用测试钱包连接测试网 dApp，做实操作
    
3.  思考 AI Agent 进入链上时的钱包边界设计
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->

















### **Co-Learning — 021 学习以太坊**

1.  参加了 Ethane（XiaoHai67890）的《021学习以太坊》分享
    
2.  理解了 L1 基础层（最终结算与安全）vs L2 扩容层（Rollups/State Channels/Sidechains）
    
3.  学习了 Blob 数据（Dencun 升级）：挂车比喻，L2 成本下降 90-99%
    
4.  区分了 Optimistic Rollup（欺诈证明）vs ZK Rollup（零知识证明）
    
5.  了解了 EIP-1559 Gas 销毁机制和轻节点概念
    

### **分享会 — Neo-Cypherpunk & Privacy**

1.  参加了 Peter Farbey（@0xfar, Web3Privacy Now）的 Neo-Cypherpunk 分享
    
2.  理解了 Neo-Cypherpunk = privacy × empathy × collaboration
    
3.  学习了 Cypherpunk 历史脉络：1993 宣言 → 2024 Ethereum Cypherpunk Turn
    
4.  掌握了个人隐私实践栈：Signal / VPN / GrapheneOS / Firefox / Railgun 等
    
5.  区分了 Old School（专家/阴郁）vs Neo（人人参与/积极正向）
    

### **随堂笔记**

> Transparency for the powerful, anonymity for the powerless. — 1993 Cypherpunk Manifesto

> Neo = privacy + play + care + community. Privacy isn't isolation.

### **下一步工作**

1.  继续 Handbook Web3 基础学习 — 下一站 **钱包（Wallet）**
    
2.  尝试部署个人隐私工具栈（Signal + 浏览器替换 + VPN）
    
3.  探索 Railgun 等隐私工具
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->


















### **Cobo Agentic Wallet 分享**

1.  参加了 Cobo Agentic Wallet 分享会 — AI Agent 链上安全架构
    
2.  理解了当前 Agent 管钱的三大风险：静默篡改、越界创建钱包、无终止开关
    
3.  学习了范式转变：从 Copilot（AI建议+人类批准）到 Agent（结构化授权+执行绑定）
    
4.  掌握了 Cobo Agentic Wallet 三大首创：
    
    -   MPC for AI Agents：私钥拆分（用户+Agent+Cobo三方，2/2门限签名）
        
    -   Pact 授权协议：Intent → Plan → Guardrails → Expiry 四要素
        
    -   Recipe 技能层：预定义验证工作流（Uniswap V3 Swap、X402 Payment 等）
        
5.  核心认知：语言无法强制权限，信任应从软件承诺转移到密码学保证
    
6.  理解了"Don't give agents wallets. Give agents scoped authorization."
    

### **随堂笔记**

> 不要把钱包给 Agent，要给 Agent 受约束的授权，并且让执行绑定在授权上。

### **下一步工作**

1.  继续 Handbook Web3 基础学习 — 下一站 **钱包（Wallet）**
    
2.  跟进 Week 2 AI×Web3 交叉实践课程
    
3.  开始动手实操钱包和链上交互
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->



















### **Co-Learning — Railgun & Kohaku 隐私系统详解**

1.  参加了 @0xMalingshu 的 Co-Learning 分享（冬天の馬鈴薯🥔，Co-CTO @Zzyzx\_labs）
    
2.  理解了以太坊三大隐私痛点：交易透明、RPC 中心化暴露 IP、代币发现泄露数据
    
3.  学习了 **Kohaku** — 隐私工具箱，把 Railgun 4 步流程封装成一行 `transfer`
    
4.  学习了 **Railgun** 的核心运作机制：
    
    -   UTXO 模型替代 Account 模型实现完全匿名
        
    -   0zk 地址 = Spending Key（控制权）+ Viewing Key（观察权）
        
    -   Broadcaster + Waku 隐藏 IP 地址（P2P 路由类似 Tor）
        
5.  掌握了 **PPOI（清白证明）** — ZK 证明资金来源干净，1 小时观察期 + 证明随币流动
    
6.  了解了 RAIL 治理代币的质押收益和治理流程
    
7.  理解了 Railgun vs Tornado Cash 的关键差异：完全匿名 vs 断地址关联、任意金额 vs 固定面额
    

### **Agent Memory Deck 分享**

1.  参加了 Agent Memory Deck 分享会 — Agent 记忆系统架构设计
    
2.  理解了记忆问题的两个视角：Product View（用户连续性）vs Engineering View（生命周期管理）
    
3.  掌握了三层架构：Context（模型看到什么）→ Prompt（如何提问）→ Harness（循环、工具与控制）
    
4.  学习了记忆分类双轴：时间轴（当前上下文 vs 持久记忆）× 内容轴（情景/语义/程序记忆）
    
5.  理解了记忆三操作：Write（写入）→ Retrieve（检索，关键是选择问题）→ Revise（新证据更新旧信息）
    
6.  了解了记忆演变路径：便利性 → 控制层 → 基础设施（Agency 越高记忆越重要）
    
7.  案例对比：ChatGPT 双层记忆（Saved Memory + Chat History）vs Claude Code 项目连续性
    
8.  行业趋势：记忆正从孤立功能变成可复用的系统层
    

### **随堂笔记**

> Railgun 让我们在区块链上把「衣服」穿回去，拿回自由和权利。 PPOI 告诉世界：合规与隐私并不冲突。

### **下一步工作**

1.  继续 Handbook Web3 基础学习 — 下一站 **钱包（Wallet）**
    
2.  跟进 Week 2 AI×Web3 交叉实践课程
    
3.  开始动手实操钱包和链上交互
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->




















### **密码学（Cryptography）**

1.  深入学习 Handbook 密码学章节，掌握了 5 个核心概念
    
2.  **私钥（Private Key）** — 账户控制权本身，绝不截图/上传/粘贴/发给 AI
    
3.  **公钥（Public Key）** — 可公开分享，用于验证签名但不能反推私钥
    
4.  **地址（Address）** — 不是身份，只是一个可验证控制关系的标识
    
5.  **签名（Signature）** — 不是登录弹窗，是对消息/交易的授权证明
    
6.  **哈希（Hash）** — 固定长度指纹，用于验证数据一致性，不可逆
    
7.  理解了从密码学到区块链的逻辑链路：私钥→公钥→地址→签名→交易→区块→区块链
    
8.  建立了密码学的产品直觉：私钥=控制权，公钥=可验证，签名=授权行为
    
9.  学习计划进度更新：密码学 ✅ → 下一站 **钱包（Wallet）** 🎯
    

### **第一周学习总结（5/18 - 5/24）**

**Web3 基础：**

-   Week 1 完成了 **Web3 运行原理 + 密码学** 两大基础模块
    
-   Web3 核心框架：密码学 + 经济学 + 社会学三角认知
    
-   从交易到出块链路：Wallet → RPC → Mempool → Builder → Validator → Block
    
-   密码学 5 大核心概念：私钥、公钥、地址、签名、哈希
    
-   密码学建立了「不信任人，信任数学」的 Web3 信任模型
    

**AI Agent：**

-   AI Agent 核心运行机制：理解目标 → 调用工具 → 检查结果 → 修正执行
    
-   聊天机器人 vs AI Agent 的本质区别：回答 vs 做事
    
-   AI Agent 一旦开始做事，就会引出账户、支付、授权和追责问题
    

**AI × Web3 Bridge：**

-   AI + Web3 的核心价值：不是给 AI 套 token，而是让软件主体进入可授权、可结算、可审计的经济系统
    
-   ERC-8004：Agent 可验证身份与信誉（Identity / Reputation / Validation 三大注册表）
    
-   X402：机器对机器支付，复兴 HTTP 402 状态码
    
-   Deep Funding：AI Agent 参与公共物品资金分配
    
-   AI 链上分析工具（Nansen）— 从「写查询」变成「提问题」
    

**工具与基建：**

-   Obsidian 本地知识库搭建 —— 个人素材+方法论+经历喂给 AI，输出才是自己的
    
-   笔记结构化整理法：索引+分层重构，强调可检索性和可复用性
    
-   Hermes Agent 从部署到稳定运行，飞书连接和日历定时通知配置完成
    

**下周目标：**

1.  继续 Handbook Web3 基础学习 — 下一站 **钱包（Wallet）**
    
2.  5/25 Co-Learning + Week 2 AI×Web3 交叉实践课
    
3.  了解 MCP、RAG 等进阶概念
    
4.  了解 Ethereum 生态的更多应用场景
    
5.  了解资产自托管和私钥管理实践
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->





















### **Open Agentic Economy**

1.  参加了 Sophia ([Z.AI](http://Z.AI)) 的 "Open Agentic Economy" 分享会
    
2.  核心论点：以太坊是机器经济中人类为中心的分布式结算与协调中枢
    
3.  ERC-8004：Agent 可验证身份与信誉（三大注册表：Identity / Reputation / Validation）
    
4.  X402：机器对机器支付，复兴 HTTP 402 状态码
    
5.  Deep Funding：AI Agent 参与公共物品资金分配
    
6.  以太坊设计原则 CROPS：审查抵制、开源、隐私、安全
    

### **随堂笔记**

> The infrastructure that AI agents transact on will shape how this new economy works. Who can participate, how trust gets established, where value flows, whether the playing field is open. That infrastructure is being designed right now. And the design choices being made will compound as AI activity scales. Ethereum is the neutral layer where agents can settle value and make commitments.
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->






















\### Co-Learning

1\. 参加了 Swen Chan 主持的 Co-Learning 指南会

2\. 了解了 WCB 平台使用方法和常见 FAQ

3\. 记录了 Hackathon 时间、赛道方向、组队方式等信息

4\. 5/25 下一期 Co-Learning

\### 分享会 — Week 1 例会

1\. **tree tree — 优秀笔记分享**: 索引 + 分层重构的结构化整理法，强调笔记的可检索性和可复用性

2\. [**Z.AI**](http://Z.AI) **Sophia — Open Agentic Economy**: ERC-8004/ERC-8183 Agent 经济协议标准，Agent 之间的经济协作、支付和结算

3\. **li9292 / Evermind — Agent Long-term Memory**: 如何让 Agent 拥有持续上下文与长期一致性，解决跨会话上下文连续性问题

4\. **Miratisu / Cobo — Agentic Wallet**: Agent 钱包的权限、签名执行与安全边界 — 如何让 AI Agent 在边界内安全操作链上资产

5\. **Obsidian 知识库**: 每个人都该拥有自己的本地知识库 — 把个人素材、方法论、经历喂给 AI，输出才是自己的

6\. 下周课程预告：5/25 Co-Learning + Week 2 AI×Web3 交叉实践

7\. Q&A: 讨论涉及 Agentic Commerce、AI Security、Privacy、Chainlink、DePIN、Tokenomics 等方向

\### 随堂笔记

\> AI 没有立场、没有经历、没有审美。你需要把自己的素材、方法论、经历、判断喂给它，输出的才是带你自己印记的东西。

\### 下一步工作

1\. 准备 5/23 的 Open Agentic Economy 深入场

2\. 整理 Week 1 学习总结

3\. 继续 Handbook Web3 基础学习
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
























1\. 参加了 "AI 下乡计划｜在 Web3 的应用" 分享会（ELON）

2\. 理解了 AI + Web3 的核心框架：AI 负责理解与决策，Web3 负责身份、支付、结算和审计

3\. 了解了去中心化 AI 基础设施生态：Bittensor (TAO)、Render Network、Akash

4\. 学习了 Coinbase AgentKit / MoonPay Agents / Privy Agentic Wallets 等 Agent 钱包方案

5\. 了解了 AI 链上分析工具（Nansen）—— 从"写查询"变成"提问题"

6\. 核心认知：AI + Web3 的价值不是给 AI 套 token，而是让软件主体进入可授权、可结算、可审计的经济系统
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

























\### 目前的状态

1\. 成功将 Hermes Agent 和 OpenClaw 部署在云服务器并稳定运行

2\. 已完成飞书连接和日历定时提醒配置

3\. 正在参与 AI x Web3 School 共学营，跟进课程内容

\### 今日内容

1\. 参加了 "AI Agent 入门 — Hermes 从 0 到 1" 分享会（Draken/Rico）

2\. 学习了 AI 工具生态五大阵营：聊天型AI、AI编程助手、终端型AI、模型提供商、Agent框架

3\. 理解了聊天机器人 vs AI Agent 的本质区别（回答 vs 做事）

4\. 掌握了 AI Agent 核心运行机制：理解目标 → 调用工具 → 检查结果 → 修正执行

5\. 整理了分享会笔记并提交至 GitHub

6\. 参加了 "Web3 运行原理" 分享会（Bruce / @brucexu\_eth）

7\. 学习了交易到出块的完整链路：Wallet → RPC → Mempool → Builder → Validator → Block

8\. 理解了 PoW vs PoS 的区别，以及 Ethereum PoS 的 Finality 机制（约 12.8 分钟）

9\. 掌握了智能合约的本质（链上代码 + EVM 执行）和代理合约升级模式

10\. 了解了以太坊升级流程：EIP 讨论 → 多客户端实现 → 测试网 → Hard Fork

11\. 理解了 Web3 密码学 + 经济学 + 社会学的三角框架

\### 下一步工作

1\. 继续学习 AI x Web3 School 指导文档内容

2\. 深入学习 AI 和 Web3 基础知识

3\. 学习如何进行资产自托管和管理私钥

4\. 完善 Hermes Agent 的自动化和工具配置

5\. 完成飞书日历同步（需开放平台加 calendar 权限）

6\. 了解 MCP、RAG 等进阶概念

7\. 了解 Ethereum 生态的更多应用场景

8\. 参与后续共学营课程
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->


























我今天在分享会过程中，把hermes和openclaw迁移到云服务器并且成功使用，也把和飞书的连接，以及日历的每日提醒完成了，明天会继续学习ai x web3指导文档中的内容。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->



























\# 2026.5.18

\## 目前的状态

1\. AI：相关的技术了解一点皮毛，和AI相关的从业者聊过行业现状。

2\. Web3：用AI查过一些大概的概念和发展历程。

\## 今日内容

1\. 调试hermes agent，想挂载到远程服务器上，在找方法配置服务器以及安装hermes远程调用

2\. 学习大模型相关的概念。

\## 下一步工作：

1\. 完成hermes的调试，使其能够正常使用，辅助学习。

2\. 将目前本地部署的openclaw转移到远程服务器。

3\. 学习AI和Web3的基础知识。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
