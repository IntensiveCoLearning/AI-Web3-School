---
timezone: UTC+0
---

# summer-dimples

**GitHub ID:** summer-dimples

**Telegram:** @Purple_cat10421

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-10
<!-- DAILY_CHECKIN_2026-06-10_START -->
今天核心是跑通 MVP 主流程真实链路，同步收集验证材料；完成「输入 → agent 处理 → Web3 执行 → 可验证结果」的最小闭环验证。
<!-- DAILY_CHECKIN_2026-06-10_END -->

# 2026-06-07
<!-- DAILY_CHECKIN_2026-06-07_START -->

今天准备ai产品经理面试，相辅相成，希望web3相关的也成为我的加分项
<!-- DAILY_CHECKIN_2026-06-07_END -->

# 2026-06-06
<!-- DAILY_CHECKIN_2026-06-06_START -->


占个坑，demo跑通一些web3元素考虑怎么加
<!-- DAILY_CHECKIN_2026-06-06_END -->

# 2026-06-05
<!-- DAILY_CHECKIN_2026-06-05_START -->



选择 AI × Web3 技术路径，今天学习理解 AI Agent 如何深度参与区块链应用开发。关于在 AI Agent 时代**重新判断区块链的技术价值**，**选择合适的链上/链下边界**（成本、信任、性能、可验证性），以及**把 AI Agent 引入区块链应用开发实战**，从工具调用到链上执行，把 AI Agent 从“会聊天”变成“能上链干活”。

我目前思考把之前做过的一些项目配合Web3wallet进行改造，还在跑demo中。
<!-- DAILY_CHECKIN_2026-06-05_END -->

# 2026-06-04
<!-- DAILY_CHECKIN_2026-06-04_START -->




占个坑，准备黑客松比赛
<!-- DAILY_CHECKIN_2026-06-04_END -->

# 2026-06-03
<!-- DAILY_CHECKIN_2026-06-03_START -->





打卡黑客松分享会，先看了下文档：CAW 提供了从 AI Agent → Skills → CLI → TSS 签名 → 后端 API → 移动端审批的完整链路，开发者可通过正式/测试环境快速接入，重点是 Pact 授权、TSS 签名和 App 人工确认的闭环。
<!-- DAILY_CHECKIN_2026-06-03_END -->

# 2026-06-02
<!-- DAILY_CHECKIN_2026-06-02_START -->






占个坑 参加了黑客松openday 但是感觉钱包已经很卷了，vibecoding/work flow基本又是和现实工作相关，还在纠结中
<!-- DAILY_CHECKIN_2026-06-02_END -->

# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->







主方向：**Wallet / Permission 为 AI agent 设计可控的链上执行边界**  
为什么选：Week 1 测试网交互暴露了「一旦 agent 被滥用，资金无保护」的痛点。Web3 的可编程权限（session key、预算上限、时间窗口）配合 AI 的意图识别，能形成「有限授权 + 自动执行 + 审计闭环」的安全模式。  
参加赛道：**Cobo Agentic Wallet 相关 challenge / 自主支付 + 权限控制**  
下一步：完成 x402 + CAW 最小闭环 demo，撰写完整 proposal memo。
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->








协议对比

| 协议 | 解决段落 | 核心机制 |
| --- | --- | --- |
| x402 | 支付（单次） | HTTP 402 状态码 + 稳定币支付，专为 agent 设计，零协议费 |
| ERC-8183 | 结算 + 仲裁 | Job 原语，Client/Provider/Evaluator 三方 escrow，资金锁定，evaluator 验证后释放 |

-   x402 专注“如何付款”，适合微支付、API 计费。
    
-   ERC-8183 专注“工作如何验收与结算”，适合外包任务、服务市场。
    

比如：agent 帮人做交易分析并收款

**场景**：agent 自动分析链上地址风险，输出报告后收费。

-   下单方：用户
    
-   执行方：agent
    
-   验收方：用户或自动 evaluator（如对比已知风险标签）
    
-   付款方：用户
    
-   仲裁方：若使用 ERC-8183，evaluator 或 DAO 投票  
    **Agent commerce 的真正挑战是把支付、权限、验收、争议串成闭环，而不仅仅是“让 agent 会付款”。Cobo CAW 解决授权与审计，x402 解决机器支付，ERC-8183 解决工作验收与结算——三者可组合使用。**
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->









Agent 经济活动的难点不是“能不能转账”，而是**报价、预算、授权、交付、验证、托管、争议、收据、结算如何连成可控链路**。单纯自动点击支付按钮不算 AI × Web3 强方向，必须同时具备预算控制、交付证明、可验证记录和争议处理机制。

从场景到协议的拆解路径：

1.  **场景层**：明确 agent 买的是什么——API 调用、数据查询、计算任务、人工服务、内容生成还是链上执行。不同商品决定验收方式。
    
2.  **流程层**：画出完整流程图  
    `发现服务 → 报价 → 授权预算 → 执行 → 交付 → 验收 → 付款/退款/争议`
    
3.  **验证层**：能否自动验证交付？不能则需指定验收方、标准和争议处理方式。
    
4.  **协议层**：判断需要 checkout / invoice / escrow / reputation / evaluator 还是完整的 marketplace / settlement layer。
    

Cobo Agentic Wallet（CAW）解决的是**预算控制、权限约束与审计**问题，而非完整 commerce。

-   **Pact 机制**：用户围绕具体任务批准预算、操作范围、时间窗口，agent 超出边界即被拒绝。
    
-   **审计记录**：留下授权内容、执行动作、链上交易、异常日志，实现可追责、可复盘。
    
-   **边界**：CAW 是钱包/执行安全层，仍需结合报价、验收、escrow、evaluator、reputation 和 dispute resolution 等协议。
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->










-   围绕自己真正感兴趣的垂直领域（如 DeFi、AI agent、钱包安全等）加入社区。
    
-   线上社区对无法频繁线下活动的人非常重要，能避免孤立感。
    
-   参加线下 meetup 往往带来意外机会（合作伙伴、朋友、工作）。
    

-   在 X、LinkedIn 上持续输出内容、分享学习过程与项目进展，会积累真实影响力。分享的每一份贡献都算数。先本地、再国际化。
    

-   善用 AI coding 工具和自己擅长的设计技能。
    
-   不需要成为传统后端专家，工程品味可以通过多看、多实践、多参考优秀开源项目来培养。
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->











今天了解到x402 是一个开放支付协议，由 Coinbase 和 Cloudflare 创建，将 HTTP 402 "Payment Required" 状态码转化为即时稳定币支付通道。客户端请求付费资源 → 服务器返回价格 → 客户端发送稳定币支付 → 服务器交付资源，无需账户、API Key 或信用卡。

**一些数据：**

**交易量**：截至 2026 年 3 月，x402 已在 Base 上处理超过 1.19 亿笔交易，Solana 上超过 3500 万笔，年化交易额约 6 亿美元，协议本身零费率。**治理**：2026 年 4 月 2 日，Coinbase 与 Linux Foundation 共同成立 X402 Foundation，创始联盟包括 Stripe、Cloudflare、AWS、Google、Microsoft、Visa、Mastercard。**生态扩展**：Stellar、Algorand 等链已支持 x402。Stripe 在其 Agentic Commerce Suite 中同时支持 MPP 和 x402

AI-First 设计是协议专为 AI agent 设计，agent 遇到 paywall 时可读取 x402 响应并通过预授权钱包直接结算，无需人工干预。
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->












今天看了week2 模块 B，我觉得核心问题是agent 经济活动的完整链路。

真正困难的不是“agent 能不能转账”，而是报价、预算、授权、交付、验证、托管、争议处理、收据和结算如何连成一个可控链路。也就是说，如果只是让 agent 帮用户点一个传统支付按钮，但没有预算控制、交付证明、可验证记录或争议处理，这更像普通自动化，不一定是 AI × Web3 的强方向。

链路中的关键角色很重要：谁下单、谁执行、谁验收、谁付款、谁仲裁。agent commerce 的关键不是“自动付款”，而是“在明确授权、预算控制和可审计记录下完成自动交易”。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->













**AI 承担什么能力？Web3 提供什么机制？两者是否同时不可替代？**

**主方向暂定**：Wallet / Permission

-   结构性需求：长期存在（安全与自动化冲突）。
    
-   验证可能性：可以用 session key + 预算上限做 demo。
    
-   最小切入点：本周内画出权限分层流程图 + mock 策略配置。
    
-   风险边界：涉及私钥和签名，必须保留人工确认节点。
    

**今日思考**  
最容易被忽略的不是技术，而是“谁承担失败成本”。如果 agent 被 prompt injection 误导转走资金，责任无法仅靠协议解决。因此 wallet/permission 方向必须把可撤销、预算隔离、审计日志作为与 AI 同样重要的模块。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->














新的一周，学习任务进入**问题空间**，判断哪些方向真的需要 AI 与 Web3 同时存在。

关键在于：AI 提供理解、生成、规划、工具调用等能力，Web3 提供支付、身份、权限、可验证记录等机制。一个方向是否成立，不看用了多少新词，而看两者是否同时不可替代。有价值的思考在“机器执行 + 经济交换 + 权限控制 + 可验证记录”的交界处。

通过统一判断框架（谁发起、谁执行、谁付款、谁验证、谁承担风险、哪些自动化、哪些人工确认），从 payment、identity、wallet、privacy、dev tooling、governance 六大方向中筛选主方向。早期 proposal 不需要完整实现，但必须说清目标用户、真实场景、最小功能、验证方式与风险边界。本周我的目标是建立一张可讨论的问题地图。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->















核心理解：Agent 系统通过 skills、工具调用与状态管理形成可复用能力，而 workflow 则强调多轮组织与可观测性。真实任务越接近链上执行，就越需要日志、回滚策略和人工确认，例如用纯提示词、AI coding 工具、agent+skills 三种方式对比，能直观感受差异。

在 Web3 工程化方面，基础链上交互只是入口，真正的难点在于权限设计、错误恢复与风险控制。通过 Hardhat/Foundry 完成合约开发部署，结合 viem/wagmi 做最小交互页，可以完整串起测试网、Gas、交易哈希与合约地址的反馈链。

微调（如 LoRA/PEFT）不是从零训练，而是在已有模型上做任务适配。数据质量与评估方式直接影响结果，本地模型与托管模型各有取舍。对比“只改 prompt”和“做模型适配”能更清晰地看到能力边界。

Web3底层方面，协议层、执行层、账户层、应用层各自解决不同问题，不能混为一谈。

我认为最小交叉实验强调将“AI 生成 → 人工复核 → 钱包确认 → 链上执行”拆分为可描述的 workflow，标注失败点与回滚策略，并比较纯人工、AI 辅助、自动化三种方式的风险差异。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->
















今天看了早上会议的回放。

AI 正从工具演变为经济参与者，而以太坊为它们提供了中立、去中心化的协调与支付基础设施。

核心在于 CROPS 原则（抗审查、开源自由、隐私、安全），使得可编程货币和可验证身份成为可能，例如 ERC-8004 为 AI 代理建立信誉，x402 支持机器间稳定币支付。真实案例中，以太坊基金会已用 AI 代理分配公共物品资金。未来支付将是 AI 应用的主战场，而 builder 比 trader 更能决定基础设施的开放与否。以太坊提供了一套“给 AI 用的基础设施”，比如让 AI 有自己的数字钱包、信誉分、支付规则，想花多少钱、跟谁交易都能编程控制，这样 AI 才能安全地替你做事。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->

















今天听了例会分享，准备周末构建知识库。同时意识到与其被AI浪潮裹挟焦虑，不如从自身熟悉的场景出发，用“拆解小任务→动手实验→输出理解”的闭环把学习变成可执行的流程，同时善用工具（如W3b平台Agent API、Cursor的/go模式）让自动化反哺效率，但始终保留独立思考的能力。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->


















哇今天真的好忙，不过把claude code和obsidian串起来了，改造了自己的知识库，还是很有意思的。

关于会议，听完有如下总结：

一、Web3 为 AI 赋能：去中心化算力与模型网络

-   **方向**：将算力、存储、模型分散到全球节点，形成去中心化 AI 服务。
    
-   **代表项目**：某链上 AI 市场（节点质押算力而非代币，按服务质量打分奖励）。
    
-   **现状**：效果不如中心化，速度慢、结果不稳定，但方向受认可。
    

二、AI 为 Web3 赋能：四大落地场景

1.  **AI 拥有钱包 + 自主操作**
    
    -   AI 可进行链上支付、量化交易、合约监控等（如“意图交易”）。
        
    -   应用：自动充值 API、执行交易策略。
        
2.  **链上数据分析与地址归因**
    
    -   AI 分析链上行为，识别地址归属、交易所资金流向，辅助量化决策。
        
3.  **钱包安全助手**
    
    -   AI 模拟交易、检测恶意合约、风险签名提醒（目前缺少成熟产品）。
        
4.  **合约审计与风控**
    
    -   AI 基于历史漏洞库模拟攻击，生成审计报告（效果超部分人工审计）。
        

三、Q&A 可学习借鉴点

-   **稳定币采用**：自然语言转账、Telegram 机器人可降低使用门槛，但需信任背书。
    
-   **个人开发者方向**：推荐做 AI 安全插件（交易意图识别、风险评分），门槛低、实用性强。
    
-   **非技术岗切入**：可先做社区运营、产品，理解链上逻辑后再转技术。
    
-   **AI 焦虑**：大家多多少少都有，不必追逐每个新概念。
    
-   **一人公司 vs 团队**：技术强可做 MVP，但运营推广仍需合作。
    

四、现存瓶颈与未来展望

-   **瓶颈**：分布式节点算力难以统一，响应慢、上下文割裂。
    
-   **展望**：若实现全球算力集群，将诞生“属于世界的 Agent”。
    
-   尝试 **AI + 钱包安全** 或 **意图交易** 方向，可能是下一个爆款。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->



















今日最大收获：AI × Web3 概念对照

| AI 概念 | Web3 对应 | 关键差异 |

| API Key | 私钥 | 私钥泄露不可重置，资产永久丢失 |

| RAG 向量检索 | The Graph | 都是给系统注入外部信息的索引机制 |

| MCP 协议 | RPC 协议 | 都是"系统↔工具"的标准通信接口 |

| Guardrails | 访问控制 | 都是限制系统行为的边界机制 |

| AI 幻觉 | 合约 Bug | 都必须验证，不能盲目信任 |

\---

\## 实操任务

\- 测试钱包创建（MetaMask + Sepolia）

\- Sepolia 测试交易

\- SimpleStorage 合约部署（Remix）
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->




















阅读 Handbook AI 板块 8 个章节，系统建立 AI 基础认知框架。

**核心收获：**

1.  **LLM**：自回归生成，概率预测，擅长语言/代码，不擅长精确事实和跨会话记忆
    
2.  **Prompt**：System Prompt 设身份，用户消息传意图，Few-shot + CoT 是核心技巧
    
3.  **Context**：上下文 = 模型的工作内存；关键信息放开头/结尾，避免"Lost in the Middle"
    
4.  **RAG**：检索增强解决知识截止和幻觉问题；向量数据库 + Embedding 是核心组件
    
5.  **Agent**：ReAct Loop 是基础；AI × Web3 中签名/转账/合约写入必须保留人工确认节点
    
6.  **Frameworks**：Hermes（已配置）适合长期运行，LangGraph 适合有状态复杂 workflow
    
7.  **Vibe Coding**：工作重心从写代码转向描述意图+审查；安全审查和架构决策不可外包给 AI
    
8.  **MCP**：Anthropic 开放标准；只读操作可自动，写入操作必须人工确认
    

**产出：** 8 份结构化学习笔记存入 GitHub repo
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->





















今天从零完成 Hermes Agent 完整部署，Hermes Agent → GLM/[Z.ai](http://Z.ai) API → Telegram + 微信。

**完成内容：**

-   安装配置 Hermes Agent v0.14.0，接入 GLM-5.1
    
-   配置 Telegram Bot + 微信 ClawBot
    
-   创建 GitHub 学习仓库，提交首次打卡
    
-   让 Hermes 执行一次完整的"写文件+推送GitHub"任务
    

**今日资源发现：**

-   AI 学习文档：[https://wooded-yellowhorn-1cd.notion.site/AI-docs-10b1a400ef9483e7822981942213be94](https://wooded-yellowhorn-1cd.notion.site/AI-docs-10b1a400ef9483e7822981942213be94)
    
-   Web3 系统课程：[https://updraft.cyfrin.io/career-tracks](https://updraft.cyfrin.io/career-tracks)
    

**学习方法思考：** 对于 LLM、Agent、钱包、签名这些新概念，单纯正向学习容易停留在表面。计划采用**反推式学习**——从实际运行结果倒推原理，先跑通再理解为什么，用具体报错和现象重建概念框架，而不是死记名词定义。

**今日最大收获：** 第一次感受到 Agent 真正"做事"——一条指令完成多步操作，理解了 Prompt/Workflow/Agent 三者的边界差异。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
