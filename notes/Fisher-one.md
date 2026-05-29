---
timezone: UTC+8
---

# Fisher-one

**GitHub ID:** Fisher-one

**Telegram:** @voidfisher

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->
**今天进行了最小支付流程拆解**

```
用户设 Budget + 授权
  → Agent 收 Quote，检查预算
    → Guard 校验交易（金额、接收地址）
      → Simulation 预演
        → Human Check 确认
          → 链上执行
            → Receipt 生成
              → 验收 / 退款 / 争议
```

今天工作有些忙碌，只看了这么多，周末会爆发一下，全部完成week2的任务
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->

今日学习的时间少点，所以看的不是很多，主要还是看看了方向问题。

今天仔细看了 Week 2「AI × Web3 交叉研究与方向选择」的几个方向描述，最终锁定：

**主方向：Wallet / Permission / Safe Execution**

关注 agent 接触钱包、签名、预算和链上动作时，如何做权限分层、自动化边界、人工确认、撤销与审计。适合对账户抽象、Safe、policy、guard、session key 感兴趣的学员。

**延伸方向：Payment / Commerce / Settlement**

关注机器或 agent 如何购买 API、数据、算力和服务，以及报价、验收、托管、争议处理和结算如何闭环。适合对商业闭环、支付、标准和协议感兴趣的学员。

### **为什么这两个放一起**

不是二选一。Wallet/Permission 管 Agent **能做什么**（权限边界），Payment/Commerce 管 Agent **能花多少**（资金边界）。之前读的 Agent Wallet 和 Machine Payment 两章正好对应这两条线，在 Guard 那里汇合——做了什么事、花了多少钱，最后都要对得上。

对应 Week 2 任务：

-   任务 2（Agent 链上权限策略，20 pts）← 主方向
    
-   任务 5（最小支付流程拆解，20 pts）← 延伸方向
    
-   这两个做完后自然过渡到任务 6（x402 + CAW 闭环，40 pts）和任务 7（Proposal，40 pts）
    

### **还没做**

-   问题地图（任务 1，20 pts）— 方向已定，但 5+ 方向的详细描述还没展开写
    
-   Agent Identity（任务 3）
    
-   Threat Model（任务 4）
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->


**今日学习总结**

**Stablecoin Payment** 最基础的稳定币支付，USDC/USDT 转账，没啥说的。

**Budget** 给 Agent 的钱包加额度上限——每天最多花多少、单笔上限、只能调哪些合约。不是「让 Agent 随便花」，是「在这个范围内随便花」。

**Quote** 不是 Agent 自己拼的价格，是服务方签过名的报价。Agent 拿到后验证签名确认没被篡改。类似后端拿到签过的 JWT 才放行，不能自己伪造 token。

**Payment Intent** 用户签过字的支付承诺。Quote 是卖家报价，Payment Intent 是买家说「好，我同意付」。链上合约看到 Intent 就知道这笔钱被授权了，直接执行不用再问用户。

**x402** 之前没搞懂，今天重新理解了。HTTP 402 是「这页要钱」，x402 是它的 Web3 实现。Agent 访问网页 → 对方返回 402 + 支付要求 → Agent 检查 Budget/Policy 判断能不能付 → 链上转账 → 拿收据 → 带收据重新请求 → 拿到内容。跟 Agent Wallet 接上：Budget 管能不能付，Policy 管付给谁。

**MPP（Machine Payment Protocol）** 两个自动化系统之间直接谈钱结算，中间没有人类点确认。类似后端 service-to-service gRPC 调用，不会每次调接口都弹个登录。

**Subscription** 就是自动续费，跟 Netflix 月费一个意思。不是存信用卡号，是链上合约按设定周期自动划钱，随时能取消。

**Micropayment** 极小额按次支付。0.001 USDC 调一次 API，传统支付系统手续费比金额还高所以做不到。L2 gas 低让这事变得可行。

* * *

**今天踩的坑**

读 Machine Payment 的时候 8 个节点当独立概念看，没串起来。Agent 帮我理了：Stablecoin → Budget → Quote → Payment Intent 是一条授权链，x402/MPP/Subscription/Micropayment 是四种支付场景的分叉。

x402 之前完全理解错了，Subscription 和 Micropayment 也搞混了。但 explain-back 让这些问题直接暴露出来，当场补上了。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->



**今日学习内容**

**AA Wallet / Smart Account**（基础层） 之前 Week 1 读 AA 的时候只觉得「很厉害」，现在理解了它的具体价值：传统 EOA 是一把私钥控制一切，AA 让账户本身能写规则——谁能操作、能操作什么、什么时候失效。Smart Account 就是带规则的钱包账户。对 Agent 来说，AA 的关键不是「钱包更高级」，而是账户终于能表达规则了。

**Safe** Safe 是多签和智能账户的基础设施，团队金库和 DAO 都在用。放到 Agent 场景里，它的价值是天然适合把执行权拆开——Agent 可以生成交易草稿，但真正转账时仍需要多签成员确认。Agent 参与的是流程，不是独占最终控制权。

**Session Key** 之前以为是「一个有各种限制的私钥」，Agent 纠正了——Session Key 不是小号私钥，是一组受限能力。更像带过期时间和权限范围的临时 API token。限制维度包括：有效时间、可调用的合约或方法、单笔金额和总额度、可操作的资产类型、是否允许转出、用户能否随时撤销。

**Policy** 规则引擎。不是给人看的条款，是代码能判定的条件：每天最多 10 USDC、只能调白名单合约、swap 滑点超过 1% 就停、NFT 转出必须人工确认。Policy 越清楚，Agent 的执行空间越可控。

**Guard** 后端拦截器。Agent 生成交易后，Guard 用确定性规则再检查一次——目标地址在白名单里吗？金额超限了吗？授权额度异常吗？注意分工：Agent 负责生成候选动作，Guard 负责拒绝越界动作。Agent 因为模型误判或 Prompt Injection 生成了一笔不该发的交易，Guard 在交易真正出去之前拦住。

**Simulation** 不是真实交易，是本地预演。类似数据库的 EXPLAIN——先跑一遍看执行计划，确认没问题再真正执行。不上链、不花 gas、不改变状态。在 Agent 场景里，它的价值不只是技术检查，而是把结果翻译成人话：你将支付多少、会收到什么、哪些授权会改变。这比 MetaMask 弹窗里的一串 hex 强多了。

**Revocation** 权限收回。文章反复强调：「怎么收回」比「怎么授权」更重要。不只是用户主动关，系统也要在以下情况自动收紧：session key 到期、额度用完、多次交易失败、检测到异常地址、Agent 行为偏离原始任务、用户长时间没确认。所有自动化权限，都要有一个用户看得见的关闭按钮。

我之前理解成「类似 goroutine 一直在后台监控」，Agent 纠正了——Revocation 不是持续轮询，是状态标记 + 检查点。每次 Guard 拦截交易时顺便检查条件，满足就拒绝并标记失效。类似请求进来时校验 token 有没有过期，不是起定时任务扫过期 token。

**Human Check** 分层确认，不是所有操作都手动签。小额自动执行、中额模拟后确认、高风险展示影响后确认、超出 policy 直接拒绝。要确认的不是「你要不要签名」，而是这笔动作会改变什么、风险在哪里、为什么现在需要你确认。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->




今日完成了一个任务；设计一个受限 Web3 助手 workflow（40 pts）— 以「用稳定币订阅 X Premium」为场景，设计了基于智能账户（Smart Account）+ Session Key 的受限支付助手。核心设计：Session Key 四维限制（金额 ≤10U、每日 ≤3 笔、收款地址白名单、30 天有效期），规则由人来定、执行交给 Agent。重点搞清楚了白名单地址为什么必须人工核实（Agent 可能获取被篡改的地址），以及 Session Key 和 EOA 体验差异的本质——不是「不需要确认」，而是「授权范围内提前确认过了」。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->





今天主要是做任务

1.**AI × Web3 最小交叉流程图：**用 Excalidraw 画了从「用户自然语言输入」到「链上执行验证」的完整流程图，把 Week 1 学的 LLM、Prompt、Context、RAG、Agent、钱包、合约串成一条链路。

这个过程中有几个风险点：LLM 幻觉 / RAG 检索不准 / 人工复核形同虚设 / 交易不可逆 / 私钥泄露+盲签

**总结：AI 负责推理和生成，人负责决策和签名，链负责执行和记录——三方各守边界，才是可信的 AI × Web3 系统。**

**2.建立 AI × Web3 行业信息流关注清单：**

然后后续想观察的问题：

-   Agent Wallet 权限边界怎么设计
    
-   Go 后端开发者如何切入 AI × Web3——Grant 路径和就业路径有什么实质区别
    

**3.部署了一个最小的智能合约：**

用 Remix 在测试网部署了一个简单的合约 ，跑通了部署-》读取->写入的流程

链上记录：

-   部署交易：[https://sepolia.etherscan.io/tx/0x2abf89c26601a8a450ea3e484c3ee9488dc77185aaf051b5e69a2479e90e7bf1](https://sepolia.etherscan.io/tx/0x2abf89c26601a8a450ea3e484c3ee9488dc77185aaf051b5e69a2479e90e7bf1)
    
-   方法调用：[https://sepolia.etherscan.io/tx/0xf7617b43ce5fc65f50b9e65120f0eb216a73b4eaef6e53449d1d96697b08551f](https://sepolia.etherscan.io/tx/0xf7617b43ce5fc65f50b9e65120f0eb216a73b4eaef6e53449d1d96697b08551f)
    
-   合约地址：[https://sepolia.etherscan.io/address/0x2cbdfd05c0c05260e0950ed312476b65d7fd0e8d](https://sepolia.etherscan.io/address/0x2cbdfd05c0c05260e0950ed312476b65d7fd0e8d)
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->






今日学习

用 Excalidraw 画了一张从 用户发起任务 到 链上执行验证 的完整流程图，把 Week 1 学的 LLM、Prompt、Context、RAG、Agent、钱包、合约串成了一条链路。

**完整流程：**  
用户自然语言输入 →

Prompt 组装（需求 + 格式 + 边界约束）→

LLM 推理/判断 → 按需 RAG 检索 Knowledge Base（结果回流 LLM）→

Evaluation 自检 →

输出执行方案 →

🔴 人工复核（红线①）→ 🔴 钱包签名 MetaMask（红线②）→

RPC 广播 → mempool →

验证者打包上链 → EVM 执行 → 区块浏览器验证
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->







Day 5 打卡｜概念卡片整理：AI 6 个 + Web3 8 个  
  
前两天把 Handbook 四章读完了，今天没读新东西，把读过的概念用自己的话整理成了卡片，方便以后翻。  
  
AI 侧 — 概念之间的关系更清楚了  
  
之前知道 Context 是什么但没想通为什么要有它。现在理解了：LLM 每次都是无状态的，Context 就是临时记忆，prompt + context 组合起来才能跑完整的逻辑。像函数调用的参数 + 全局状态。  
  
RAG 之前觉得就是"让 LLM 能查资料"，现在明白了它的设计目的：解决 LLM 瞎编的问题——回答有来源可查，也能查到训练数据之后的新信息。  
  
Web3 侧 — 几个之前模糊的点通了  
  
AA（账户抽象）终于有画面了：不是替代钱包，是在钱包上面加一层中间件。所有操作都过这层，可以在里面写规则——限额、多签、恢复。之前看 AA 只觉得"很厉害"，现在能把它对应到具体场景了。  
  
智能合约的交互流程之前只是大概知道，这次把 8 步调用流程从前端编码到 EVM 执行到索引器读 event 完整过了一遍，心里有数了。  
  
ERC-4337 是新东西，看了 UserOperation → Bundler → EntryPoint → Paymaster 这套流程，目前只限于"知道有这个标准"，真用上可能得等后面做 Agent Wallet。  
  
还没搞懂的：Context window 爆了怎么处理、Retriever 和向量库的具体交互、合约升级的几种方案——后续动手补。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->








# **今日学习的内容**

### **RAG（检索增强生成）**

**为什么需要 RAG**：LLM 自己会瞎编（幻觉），RAG 让它回答有来源可查、有有效期的信息。

**Chunk（文本切片）**： 把大文档切成小块，但切法有讲究 — 切太大语义模糊，切太小上下文断。稳的做法是按结构切：title → description → content，每个 chunk 记录来源、时间、版本。

**Embedding（嵌入模型）**： 谁把文本转成向量的？Embedding 模型（比如 OpenAI text-embedding-3）。用户问题也得先走 embedding 才能在向量库里搜。不同模型算出的向量不能混用。

**Vector DB（向量数据库）**： 存这些 chunk 的地方。不是普通数据库，是把文本转成向量后存，方便语义检索 — "怎么部署合约"能找到听起来像的 chunk，不是关键词匹配。

**Retriever（检索器）**： 从向量库里根据用户问题拿相关 chunk。暂时还没完全搞懂它和 Vector DB 的具体交互细节，后续动手用一下再补。

**Rerank（重排序）**： 对检索结果再做一次筛选排序，兜底检查。但加了会增加延迟，看场景决定要不要用。

**Citation（引用）**： 回复里标注信息来源 — "这段话来自 Handbook 第三章"，用户能追溯。

**完整 RAG 链路（Agent 补充）**： 用户问题 → embedding 模型转向量 → 向量库检索 top-k chunk →（可选 rerank）→ 把 chunk 塞进 prompt → LLM 生成答案 → 标注 citation。关键：LLM 回答里不含原文 chunk，citation 是后加的。

* * *

### **Agent（智能体）**

**LLM vs Agent**：LLM 是会说话的底座，Agent 是会干活的人。Agent 能拆解任务、调工具、写代码、改配置、发请求。

**ReAct 模式（Agent 补充）**：大部分 agent 框架底层都这套 — Think（推理下一步）→ Act（调工具）→ Observe（看结果）→ 循环。Planning / Tool Use / Reflection 不是三件事，是同一个循环里的不同环节。

**Tool Use（工具调用）**： 本质调 API 再封装。比如"查天气"工具，Agent 调的是天气 API。做过后端天天写这个，能理解。

**Planning（任务规划）**： 把模糊需求拆成可执行步骤。没用过，但感觉得设规则 — 某步失败怎么办，要不要回退，用户没确认前别替我执行。

**State（状态管理）**： 任务执行中的各种状态 — 调用中、成功、失败、超时，类似后台任务状态机。

**Reflection（自我检查）**： 中间件，让 Agent 执行完自己检查一遍结果。没用过，待验证。

**Multi-Agent（多智能体）**： 多个 Agent 各管一块。好处是专注，问题是出错链式放大 — A 给了错结果，B 可能把错的当真需求往下做。

**Memory 分层（Agent 补充）**： Agent 不是每次都从零开始。短期记忆 = 当前对话上下文，长期记忆 = 用向量库存历史交互。不然重启一次对话全忘了。

**Context window 天花板（Agent 补充）**： Agent 每次调工具、读结果，context 越塞越多，会爆。实操里这是最大的坑，不是概念问题。

**Agent 使用边界（我自己的判断）**： Agent 能写能读能改配置能发请求，不能完全依赖。得画红线：

-   不确定的事直接说不知道，别编
    
-   涉及钱/权限的操作必须确认
    
-   不要替我决定
    

* * *

### **Smart Contract（智能合约）**

**定义**：链上交易可以通过代码自动执行。用 Solidity 写，主要跑在 EVM（以太坊虚拟机）上。

**ABI**：合约结构说明书，类似 API 文档给前端看的 — 有哪些方法、参数什么类型。

**Event**：链上日志。比如转账成功 emit Transfer 事件，前端/索引器能监听。

**Gas 机制（Agent 补充）**： 代码在 EVM 上跑，每一步都要付 gas。循环、存储写入贵，读便宜。写合约不光是功能对，还得省 gas。

**Storage vs Memory（Agent 补充）**： Solidity 里变量存 storage（永久，贵）还是 memory（临时，便宜），搞错一个是 bug 也是浪费 gas。

**安全基础（Agent 补充）**： 写合约之前至少知道重入攻击、整数溢出。跟后面「部署或调用最小合约」任务直接相关。

**合约升级**：几种方案还没做过，需要补。

**一笔合约调用的完整流程（抄文档，备查）**：

1.  前端读钱包地址和当前网络
    
2.  前端根据 ABI 编码调用数据（比如 vote(proposalId)）
    
3.  钱包展示交易信息，用户确认签名
    
4.  交易广播到 RPC 节点
    
5.  验证者打包进区块
    
6.  EVM 执行合约逻辑，成功 → 更新状态 + emit event，失败 → revert
    
7.  前端监听交易回执，更新页面
    
8.  索引器读 event，更新历史记录/看板
    

* * *

### **Account Abstraction（账户抽象）**

**传统钱包的问题**（用后端经验类比）：

EOA（外部账户）= 裸数据库连接，私钥就是连接串，丢了全完。每次操作都得手动签名 = 每次数据库操作弹确认框。

**AA 解决的问题**：

-   智能账户 = 给钱包加个中间件层
    
-   可以写规则："每天转账上限 0.1 ETH，超过拒绝"
    
-   可以多签："超过 500U 需要两个人确认"
    
-   可以用 USDC 付 gas，不用非得有 ETH
    
-   私钥丢了能通过守护者恢复
    

**ERC-4337 骨架（不展开细节）**：

-   不修改以太坊底层协议，加了一层 UserOperation
    
-   EntryPoint 合约统一处理所有智能账户的交易
    
-   Paymaster 合约可以帮用户付 gas（或让用户用其他代币付）
    
-   流程：用户发起操作 → 打包成 UserOperation → 发给 Bundler → Bundler 调 EntryPoint → EntryPoint 调你的智能账户
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->









## 单笔交易流转流程

钱包签名→节点网络传播→内存池排队→构建者排序→验证者打包出块→区块上链可查询

简化：身份认证→交易授权→全网传播→排序→执行→区块确认

## 私钥 / 助记词 / 地址三者关系

1.  **私钥**：账户最高控制权，持有即可操控账户资产
    
2.  **助记词**：私钥便捷备份，可衍生多个链上账户
    
3.  **地址**：公钥换算而来，公开收款地址，可被链上溯源分析
    

## 钱包真实作用

1.  资产不在钱包内，全部存于**链上账本**
    
2.  钱包仅保管密钥、构建交易、完成签名
    
3.  区块浏览器：查询链上余额、交易、合约数据
    

## 私钥 = 个人数字主权

1.  无需平台注册，随机生成密钥即拥有链上账户
    
2.  脱离传统金融身份绑定、机构管控限制
    
3.  自主掌控资产收发与管理权限
    

## 私钥安全守则

1.  私钥丢失无法找回重置，泄露直接丢失资产
    
2.  区块链只认签名，不认实名身份
    
3.  被盗主流原因：助记词泄露、钓鱼授权、设备中毒
    
4.  严禁截图、网盘保存、转发私钥 / 助记词，慎用剪贴板
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->










今日的学习笔记作结

```markdown
### Prompt 阅读笔记

- **不是越多越好**：Prompt 要写清晰，而不是写长
- **角色定义**：明确告诉模型它是什么身份、需要做什么
- **边界设定**：遇到不确定的情况，不要替用户做决定，要先询问
- **结构化输出**：用模板约束返回格式，让输出可预期、可解析
- **不确定信息的处理**：明确告知模型遇到不确定内容时如何降级响应
- **明确限制边界**：具体限制要写清楚，必要时配合代码层校验
- **安全验证**：对用户输入做验证，防止敏感信息泄漏或 Prompt Injection
- **实践连接**：`learning-agent.zh.txt` 本质上就是一个 System Prompt，定义了 Agent 的角色、规则和边界

### Context 阅读笔记

- **上下文混乱的根源**：把旧文档当最新、把用户愿望当事实、找不到真实结果就猜测，导致回答混乱甚至越权
- **四个标记维度**：数据来源、可信度、权限、时效性
- **Context Window 限制**：模型每次只能看见有限 token，超出会截断遗忘，所以要精心筛选放什么进去
- **上下文太大的问题**：模型找不到重点，浪费资源，需要结合摘要、检索、结构体来管理
- **RAG 的价值**：按需检索比塞满上下文更高效，是解决 context 限制的核心方案
- **多轮对话管理**：长对话需要主动做"记忆压缩"，把历史摘要化而不是原样保留
- **实践连接**：`profile.md` 和每日 `daily note` 本质上就是 Agent 的上下文管理机制
- **Memory**：跨请求保留的信息（用户偏好、历史任务、常用地址等），但不能替代实时授权——用户过去允许某个操作，不代表现在仍然允许，涉及权限和资产的记忆必须重新绑定当前会话
- **Knowledge Base**：系统可检索的外部文档库（SDK 文档、合约说明、FAQ 等），解决模型训练数据过期问题；但知识库不维护好，RAG 只会把旧错误更稳定地送进模型——每条知识需标注来源、更新时间、适用版本、是否官方
```

这两天学习总结：AI 系统的核心逻辑越来越清晰：模型是推理层，上下文是信息治理，安全和可信需要贯穿每一层。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->











今天完成了 AI × Web3 School 的个人 Learning Agent 搭建。

由于 Mac 配置较低内存有限，放弃了 Hermes，直接使用 Claude Code 完成了全部初始化流程：

-   安装并登录 GitHub CLI
    
-   创建公开学习仓库 ai-web3-school-cohort-0
    
-   初始化目录结构（daily / tasks / experiments / handbook-feedback 等）
    
-   配置每日学习和任务笔记模板
    

工具不是最重要的，重要的是开始行动。会坚持每天打卡，期待学完后加入 Web3 开发行业。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
