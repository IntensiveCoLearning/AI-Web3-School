---
timezone: UTC+8
---

# 0xEzekiel

**GitHub ID:** Ezekie363

**Telegram:** @Ezekiel363ul

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->
今日学习： Day 15 学习完成。AI × Web3 Bridge：结算与托管（Settlement & Escrow）——理解了「自动化交易必须有明确完成条件」的核心原则，学习了 Escrow、Receipt、Delivery Proof、Acceptance、Refund、Dispute、Evaluator、ERC-8183 八个知识节点，以及 Settlement & Escrow 作为 Machine Payment 后半段、把支付变成完整可验证流程的位置。

收获 / 思考： 今天最重要的认知是「先定义业务流程，再定义资金流」——先写付款代码会导致状态缺口（缺少交付中/验收中/争议中等中间态）、退款路径缺失、验收条件和付款没有绑定，合约部署后这些问题很难修补。Evaluator 需要被评估这点也很关键：误判「完成」让资金错误释放，误判「失败」让合格交付被退款，两种错误都会让服务方和付款方失去对系统的信任，所以 Handbook 推荐组合 Evaluator 而不是把所有判断压给一个模型。

明日计划： AI × Web3 Bridge → 智能体身份（Agent Identity）
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->

今日学习： Day 14 学习完成。AI × Web3 Bridge：机器支付（Machine Payment）——理解了「把付款意图和实际结算拆开、每一步都有凭证」的核心设计，学习了 Stablecoin Payment、Budget、Quote、Payment Intent、x402、MPP、Subscription、Micropayment 八个知识节点，以及 Machine Payment 作为 Agentic Commerce 基础的完整支付链路。

收获 / 思考： 今天最重要的认知是「聊天里的预算」和「Policy/账本里的预算」是完全不同的两件事——前者是给模型看的参考信息（软约束），后者是系统执行的约束条件（硬约束），被 context compact 截断或 Prompt Injection 覆盖后前者会失效，后者不会。Budget 多层设计的必要性也很清楚：只有总预算没有频率/服务方范围限制，攻击者可以通过小额高频调用或 Prompt Injection 诱导 Agent 把全部预算消耗在恶意服务上，每次单独看都「在预算内」。

明日计划： AI × Web3 Bridge → 结算与托管（Settlement & Escrow）
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->


今日学习： Day 13 学习完成。AI × Web3 Bridge：智能体钱包（Agent Wallet）——理解了 Agent Wallet 的第一性原理「控制权不能交给概率系统」，学习了 AA Wallet、Smart Account、Safe、Session Key、Policy、Guard、Simulation、Revocation、Human Check 九个知识节点，以及 Agent Wallet 在 AI × Web3 链路中「连接 AI 与钱包但不让模型越过用户控制权」的位置。

收获 / 思考： 今天最重要的认知是 Session Key 和「小号私钥」的本质差异——前者是经济约束（余额少，但能做任何事），后者是能力约束（规则硬编码在链上，超出就被协议层拒绝）。Guard 和 Policy 的分工也很清晰：Policy 是规则声明层（定义什么是允许的），Guard 是规则执行层（确定性代码在每笔交易前检查是否符合），两者缺一不可——Policy 单独存在只是文字，Guard 单独存在不知道边界在哪里。最小 Agentic Wallet 的核心是四件事串起来：Smart Account + Session Key/Policy + Simulation/Guard + Revocation/Log。

明日计划： AI × Web3 Bridge → 机器支付（Machine Payment）
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->



今日学习： Day 12 学习完成。AI × Web3 Bridge：Web3 工具调用（Web3 Tool Use）——理解了 Web3 工具调用的核心原则是读写分离、参数结构化、模拟确认和日志可审计，学习了 RPC Tool、Contract Read、Contract Write、Wallet Tool、Explorer Tool、DeFi Tool、Tool Permission、Tool Log 八个知识节点及各自的风险等级和关键要素；AI × Web3 Bridge：智能体工作流（Agent Workflow）——建立了「把概率模型放进确定性流程」的核心直觉，学习了 Task Graph、State Machine、Human-in-the-loop、Retry/Fallback、Trace、Evaluation Harness、Regression Set 七个知识节点，以及 Workflow 作为 Bridge 层流程骨架的位置。

收获 / 思考： 今天最重要的认知是读写分离不只是降低风险，而是**权限边界的系统层保证**——只读工具在代码层就没有签名和广播能力，即使模型产生幻觉也无法发出交易，这是硬约束而非参数检查的软约束。State Machine 的价值也是同一个逻辑：没有显式状态，Agent 重启后不知道交易已经 pending，可能重复提交同一笔交易造成双倍损失。Tool Permission 的分层设计本质上是「代价不对称」——过度宽松的代价是永久资产损失，过度严格的代价是用户体验差，两者不在同一量级。

明日计划： AI × Web3 Bridge → 智能体钱包（Agent Wallet）
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->




今日学习： Day 11 学习完成。AI 基础：推理服务（Inference）——理解了推理是 builder 在延迟、成本、上下文和部署边界上的综合选择，学习了 API Model、Local Model、Quantization、Serving 四个知识节点及各自的关键问题，梳理了推理层在 AI×Web3 里必须留下可审计记录的原因；AI × Web3 Bridge：链感知上下文（Chain-aware Context）——建立了「模型不能靠语言记忆判断链上事实」的基础直觉，学习了 On-chain Data、Contract Docs、ABI/Event、Transaction History、Explorer Context、Indexing Context、Citation 七个知识节点，理解了 Chain-aware Context 作为所有链上 Agent 输入层的位置。

收获 / 思考： 今天最重要的认知是 fallback 的设计逻辑——把推理层封装成统一接口，才能在不改业务逻辑的前提下做灰度、对比和降级，链上场景里这个封装尤其重要，因为推理失败不只是用户体验问题，而是可能触发不可撤回的链上后果。Chain-aware Context 章节让我意识到「事实和解释分开」的核心价值：模型的解释一旦被当成事实传入下一步，误差会在执行链路里逐步放大——地址猜错 → ABI 查错 → 交易参数错 → 链上损失。Citation 解决的也是同一个问题：有链上证据才能验证和追责，没有 citation 的 AI 建议出了问题连原因都找不到。

明日计划： AI × Web3 Bridge → Web3 工具调用（Web3 Tool Use）
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->





今日学习： Day 10 学习完成。AI 基础：微调（Fine-tuning）——理解了 fine-tuning 解决的是行为问题而非知识问题，学习了 SFT、LoRA、PEFT、Dataset、Overfitting 五个知识节点，以及微调前必须先有 eval 的正确顺序；Web3 基础：安全（Security）——建立了「链上系统默认暴露在公开对抗环境」的安全直觉，学习了 Reentrancy、Access Control、Audit、Simulation、Monitoring 五个核心概念，以及安全工程流程的分层设计。

收获 / 思考： 今天最重要的认知是 Fine-tuning 和 RAG 解决的是不同维度的问题——RAG 解决「模型不知道什么」，Fine-tuning 解决「模型怎么回答」，很多产品需要两者同时用。安全章节让我意识到「安全不属于某一个角色」这句话有多深——前端的无限 approve 按钮、Agent 的不受限工具、运营的 EOA 管理员私钥，每一层都是攻击入口，而不只是合约代码本身。

明日计划： AI 基础 → 推理服务（Inference）；Web3 基础 → （AI × Web3 Bridge 开始）
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->






今日学习： Day 9 学习完成。AI 基础：评估（Evaluation）——理解了 eval 是让系统可持续改进而非靠感觉迭代的方法，学习了 Harness、Golden Set、LLM-as-Judge、Regression、Observability 五个知识节点，梳理了 AI×Web3 场景下需要特别评估的六类高风险场景；Web3 基础：索引（Indexing）——建立了「链上是事实来源，索引层是可用数据层」的直觉，学习了 Event Indexing、Subgraph、RPC、Data Pipeline 四个核心概念，以及 RPC 和索引层的适用边界。

收获 / 思考： 今天最重要的认知是 Regression set 对 AI 应用比对普通软件更重要的原因——AI 的行为改变是概率性的，改一句 prompt 影响的是整个分布，静态分析无法覆盖，只有跑样本才能发现。这和链上索引的核心问题是同一个逻辑：都在解决「你以为数据/行为是对的，但实际上已经悄悄错了」。AI×Web3 里后果最严重的 eval 失败是风险提示漏报——链上不可撤回，静默放过危险操作就是永久资产损失。

明日计划： AI 基础 → 微调（Fine-tuning）；Web3 基础 → 安全（Security）
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->







今日学习： Day 8 学习完成。AI 基础：模型上下文协议（MCP）——理解了 MCP 解决的是工具连接标准化问题而非模型能力问题，学习了 Server、Client、Tool Schema、Permission 四个知识节点及各自的设计重点和风险点，梳理了 MCP 和 Web3 账户系统的分工边界；Web3 基础：预言机（Oracle）——建立了「外部数据进入链上就变成协议规则」的底层直觉，学习了 Price Feed、Data Feed、Oracle Risk、AI Oracle 四个核心概念，以及 AI Agent 使用 Oracle 的合理架构。

收获 / 思考： 今天最有意思的收获是搞清楚了 MCP 和 Skill 的本质区别——MCP 是工具层（给模型「手」），Skill 是指令层（给模型「方法论」），两者在不同层级工作，可以组合使用。Oracle 这边则让我意识到「数据源是信任边界」有多深：一个被操纵的价格 feed 可以通过闪电贷攻击，让攻击者用虚高抵押品套走协议流动性，存款人承担损失——链上系统对外部数据的信任，和对合约代码的信任同等重要。

明日计划： AI 基础 → 评估（Evaluation）；Web3 基础 → 索引（Indexing）
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->








今日学习： Day 7 学习完成。AI 基础：氛围编程（Vibe Coding）——理解了 Vibe Coding 的本质是压短工程反馈循环而非替代工程判断，学习了 Vibe Coding、Claude Code/Codex CLI、Model/API Config、GitHub/gh、CLI/Script、Repo Workflow 六个知识节点，以及 AI Agent 在 repo workflow 中的正确参与方式；Web3 基础：去中心化金融（DeFi）——建立了 DeFi 协议管理资产状态的底层直觉，学习了 Token、AMM、Lending、Stablecoin、Liquidity 五个核心概念及各自的风险点。

收获 / 思考： 今天两个章节在同一个问题上汇合：自动化的边界。Vibe Coding 让我意识到「给 AI 正确的上下文」本身就是工程判断——你决定让 Agent 看哪些文件，就决定了它输出的质量上限。DeFi 章节加深了这个理解：Agent 执行 swap 不只要设置滑点上限防流动性不足，还要防 MEV 机器人的 sandwich attack——「能成交」和「以预期价格成交」是两件事。黑暗森林法则让链上代码的安全审查没有任何妥协空间，AI 生成的合约代码同样需要独立的人工审计。

明日计划： AI 基础 → 模型上下文协议（MCP）；Web3 基础 → 预言机（Oracle）
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->









今日学习： Day 6 学习完成。AI 基础：框架（Frameworks）——理解了框架是系统边界的表达而非智能本身，学习了 LangChain、LangGraph、OpenAI Agents SDK、DSPy、Hermes、Learning Agent 六个知识节点及其适用场景，梳理了 AI Framework / Web3 基础设施 / 产品层的三层分工；Web3 基础：账户抽象（Account Abstraction）——理解了 EOA 的局限性和账户抽象的核心思路，学习了 ERC-4337 执行流程及 Smart Account、Bundler、Paymaster、Session Key 五个核心概念，以及 Session Key 对 AI Agent 权限控制的意义。

收获 / 思考： 今天两个章节有一个共同主题：权限和边界。框架章节让我意识到 AI Framework 本质上是软件工程的关注点分离——把基础设施问题从业务逻辑里剥离出来，和后端框架解决的是同一类问题。账户抽象章节让我理解了 Session Key 不只是「过渡方案」，而是最小权限原则在链上的实现——给 Agent 的权限越精确，爆炸半径就越小，Prompt Injection 或上下文污染能造成的最坏损失就越有限。

明日计划： AI 基础 → 氛围编程（Vibe Coding）；Web3 基础 → 去中心化金融（DeFi）
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->










今日学习： Day 5 学习完成。AI 基础：智能体（Agent）——建立了「Agent 是被约束的执行循环」的第一性原理，学习了 Tool Use、Planning、State、Reflection、Multi-Agent 五个知识节点，梳理了工具设计的必备要素，以及 AI×Web3 Agent 的 8 步稳健架构；Web3 基础：网络（Network）——理解了 L1/L2/Rollup 的层级关系，以及 Optimistic 和 ZK 两种 Rollup 的核心区别，建立了选网络时看安全性、成本、生态三个维度的判断框架。  

收获 / 思考： 今天最重要的认知升级是「工具让错误从答错变成做错」。普通 LLM 说错了可以再问一遍，但 Agent 触发了一笔链上交易、写入了一条数据库记录，就没有撤回键。这让我重新理解了为什么 Handbook 花那么多篇幅讲停止条件和人工确认——Agent 的权力越大，边界设计就越不是可选项，而是前提条件。L2 的理解也纠正了一个误区：L2 不是「降低了安全性换取速度」，而是继承 L1 安全性的同时，用延迟（Optimistic 的 7 天挑战期）或计算成本（ZK 证明）换取更低的链上费用。

明日计划： AI 基础 → 框架（Frameworks）；Web3 基础 → 账户抽象（Account Abstraction）
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->











今日学习： Day 4 学习完成。AI 基础：检索增强生成（RAG）——理解了 RAG 解决 LLM 知识截止和上下文成本问题的思路，学习了 Embedding、向量数据库、Chunk、相关性分数四个核心概念，梳理了离线建库和在线检索的完整流程，以及 RAG Poisoning 这一新攻击面；Web3 基础：开发栈（Dev Stack）——建立了 Solidity → Foundry/Hardhat → Anvil → ethers.js 四层工具链的整体印象，理解了本地链和测试网在开发工作流中的不同定位。

收获 / 思考： 今天最大的认知升级是理解了 RAG 的本质：它不是「把更多东西塞进去」，而是把知识管理和语言生成分开——知识库是 Agent 的外部长期记忆，Context Window 是工作记忆，每次只按需取用相关片段。这也让我意识到 RAG Poisoning 的危险之处：攻击者不需要直接攻击 Prompt，只要在知识库里植入一块恶意文档，等它被检索进上下文就能影响 Agent 行为。Web3 这边建立了一个直觉：本地链是可以随意折腾的沙盒，合约有 Bug 直接重置重来；而测试网和主网一样受不可变性约束，部署前必须在本地把所有边界情况测透。

明日计划： AI 基础 → 智能体（Agent）；Web3 基础 → 网络（Network）
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->












今日学习： Day 3 学习完成。AI 基础：上下文（Context）——理解了上下文窗口的本质与上限，学习了 Context Window、Token、Context Poisoning、Lost in the Middle 四个核心概念，以及摘要压缩、RAG、信任分层三种管理策略，并梳理了上下文在 AI×Web3 Agent 中的安全含义；Web3 基础：智能合约（Smart Contract）——建立了「链上代码自动执行、部署后几乎不可撤回」的直觉，理解了 ABI、部署、不可变性、事件等基础概念，以及重入攻击、权限控制缺失、整数溢出三类常见风险。  

收获 / 思考： 今天最深的收获是重新认识了 Context Poisoning 的危险等级。之前以为它只是「影响输出质量」的普通问题，但实际上它是 Prompt Injection 的超集，危害更大——攻击者可以通过 RAG 检索、工具调用、网页抓取等任意渠道悄悄污染上下文，Agent 会在用户完全不知情的情况下执行恶意操作。在 AI×Web3 场景里，这意味着一笔伪造的上下文就可能让 Agent 自动签署一笔恶意转账，防御必须下沉到代码校验层。智能合约的不可变性也给我一个同样的感受：链上世界的「代码即法律」，写错了就是真实代价。

明日计划： AI 基础 → 检索增强生成（RAG）；Web3 基础 → 开发栈（Dev Stack）
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->













今日学习： Day 2 学习完成。AI 基础：提示词（Prompt）——理解了 Prompt 是软约束而非安全边界，学习了 Instruction/Few-shot/Structured Output/Prompt Injection 四个核心概念，以及完整的 AI×Web3 安全链路；Web3 基础：钱包（Wallet）——建立了连接钱包/签名/发送交易三类操作的风险直觉，理解了 EOA、助记词、Gas 等基础概念。

收获 / 思考： 今天最大的收获是理解了 Prompt 的本质边界——它只是软约束，不是安全护栏，真正的拦截要靠代码层和人工确认。Prompt Injection 的 DeepSeek think 注入案例让我意识到，只要模型能执行动作，恶意输入就可能绕过规则产生真实危害。钱包部分建立了一个重要直觉：连接钱包只是「亮身份证」，发送交易才是「动用资产」，两者风险天差地别。

明日计划： AI 基础 → 上下文（Context）；Web3 基础 → 智能合约（Smart Contract）
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->














**今日学习：** 完成了 AI × Web3 School 第一天正式学习。AI 基础：大语言模型（LLM）——理解了 LLM 是概率模型而非事实来源，学习了 Token、Embedding、Transformer、Hallucination 四个核心概念；Web3 基础：密码学入门——建立了哈希、公钥/私钥、签名的基础直觉。

**收获 / 思考：** 今天最大的收获是理解了 LLM 的本质——它输出的是「概率上合理的内容」而不是事实，这意味着在任何严肃系统里都需要外部校验来兜底。密码学部分建立了一个关键直觉：Web3 里的身份和控制权完全由私钥决定，没有中心化机构托底，所以私钥安全是一切的前提。

**明日计划：** AI 基础 → 提示词（Prompt）；Web3 基础 → 钱包（Wallet）
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
