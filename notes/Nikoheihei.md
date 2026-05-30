---
timezone: UTC+8
---

# Jing Xia

**GitHub ID:** Nikoheihei

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->
当agent在进行交易时，信任不止基于应用层，需要执行层。

agent钱包执行思路：agent请求-用户approve-agent得到签名的能力-完成

mpc，pact实现执行层的规范，recipe skill layer。

mpc：两方签名交易才能完成。

pact（边界）：1.intent 2.执行计划 3.风控（策略引擎强制每次执行进行校验）4.completion condition（ttl）。pack推送给用户，用户可修改。为了防止用户看不懂加了ai进行风险解读。（实际上还是挺有门槛的）

recipe（扩展）：已验证的执行路径。实际上避免了一定程度大模型胡言乱语。但是对于新协议需要用户手动维护。

hint：链上支付在跨国支付的应用较好，传统行业一般。未来web2和web3可能是半壁江山。

不知道跨国支付用户画像和龙虾使用者用户画像的重合度，感觉这个产品门槛挺高的。
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->

task完成链接：[https://github.com/Nikoheihei/ai-agent-learning/tree/main/demos/x402-caw-demo](https://github.com/Nikoheihei/ai-agent-learning/tree/main/demos/x402-caw-demo)

协议比较：x402 vs ERC-8183

| 维度 | x402 | ERC-8183 |
| --- | --- | --- |
| 核心问题 | “访问这个 HTTP 资源前，怎么让机器自动付款？” | “一个 Agent 雇另一个 Agent 做任务时，怎么锁款、交付、验收、放款或退款？” |
| 支付 | 强。通过 HTTP 402 Payment Required 返回付款要求，客户端付款后重试请求。 | 中。使用 ERC-20 托管付款，不是单次 API 支付协议。 |
| 验证 | 主要验证付款是否完成，不验证任务质量。 | 强。由 evaluator 对交付物进行 complete / reject。 |
| 身份 | 不解决。通常需要钱包地址、API key、CAW policy 或 ERC-8004 等补充。 | 不重点解决身份，但可与 ERC-8004 reputation / identity 组合。 |
| 结算 | 强。适合 API、数据、内容、推理服务的即时结算。 | 强。适合有交付周期的任务型结算，支持放款或退款。 |
| 仲裁 | 基本不解决。它默认“付费后拿资源”。 | 部分解决。evaluator 是内置裁决角色，但更复杂争议仍可接第三方仲裁。 |
| 最适合场景 | 付费 API、AI 推理接口、数据接口、按次访问内容。 | Agent 外包任务、报告生成、代码修复、数据标注、带验收的工作流。 |
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->


1\. Payment / Commerce / Settlement

    这个方向关注的是，agent 如何购买 API、数据、算力和服务，以及报价、验收、托管、争议处理和结算怎么形成闭环。

    AI 主要负责理解需求、筛选服务、自动比价、发起采购、调用服务，以及对交付结果做初步验收；在出现争议时，还可以生成解释和证据。  

    Web3 主要负责把交易真正落到可信机制上，比如稳定币支付、escrow 托管、里程碑付款、可编程结算，以及链上记录和仲裁。

    2. Identity / Reputation / Capability / Interoperability

    这个方向关注的是，agent 如何被发现、被描述、被调用、被验证，以及如何和其他 agent 协作。

    AI 的作用更偏向理解和编排，比如理解任务需要什么能力、自动选择合适的 agent 或 service、把复杂任务拆给多个角色、读懂别人的 capability schema。  

    Web3 和协议层补的是可信身份和开放协作的基础设施，包括去中心化身份、agent profile、registry、reputation、verifiable credentials，以及 MCP、A2A、ERC-8004 这类互操作标准。

    3. Wallet / Permission / Safe Execution

    这个方向关注的是，当 agent 接触钱包、签名和链上动作时，如何做权限分层和安全执行。

    AI 更像策略层，负责理解用户意图、规划链上动作、解释交易内容、做风险提示，并判断哪些动作可以自动执行、哪些动作必须人工确认。  

    Web3 提供的是权限和执行边界，比如钱包与账户抽象、Safe / 多签、spending limit、policy engine / guard、session key，以及撤销机制和审计日志。    

    4. Privacy / Security / Sovereignty

    这个方向关注的是，agent 一旦能调用工具、读取数据、接触密钥，风险会如何放大，以及如何控制。

    AI 可以参与安全治理，比如检测异常请求、识别 prompt injection、做敏感信息分类、发现越权行为、总结风险日志。  

    Web3 和更广义的安全机制则负责提供主权和可验证性，包括自托管身份和资产、本地执行、最小权限、可验证和可审计，以及减少对中心化平台的依赖。

    5. Dev Tooling / Agent Workflow

    这个方向关注的是，AI 能不能真正改善 Web3 builder 的日常工作流，而不只是做总结。

    AI 在这里最偏生产力工具，能够读文档并变成助手、读合约并总结逻辑、解释交易和事件、生成测试和脚本、辅助部署以及做 repo 维护。  

    Web3 提供的基础则比较结构化，包括 ABI、合约源码、事件日志、测试网 / fork、可验证合约，以及 indexer / explorer 数据。

    为什么 Payment 不是纯 AI 问题

    Payment 不是纯 AI 问题，因为 AI 最多只能让交易更自动，却不能天然让交易更可信。它可以帮助理解需求、寻找供应商、比较报价、判断结果大致是否合格，但它解决不了什么时候付款、由谁托管、交付不好怎么办、争议由谁裁定。这些都属于交易制度和结算机制问题。

    而且在开放网络里，agent 面对陌生服务商时，还会遇到收钱不交付、交付后拒付、质量不稳定、身份伪造、声誉作假等问题，所以还需要 escrow、reputation、仲裁、日志和可追责结算。换句话说，AI 负责的是采购自动化，真正难的是商业闭环可信化。

    为什么 Payment 也不是纯 Web3 问题

    反过来，Payment 也不是“加上稳定币支付”就结束了。Web3 很擅长做付款、托管、分账和清算，但它不会理解用户到底要什么，也不会自动去发现服务、比较供给、评估质量。

    尤其很多服务交付不是简单的 yes/no，而是语义性的验收，比如报告写得够不够好、数据清洗质量够不够、模型输出是不是符合要求。这类问题更适合 AI 参与。所以 Payment 真正成立，必须是 AI 负责需求理解、交易决策和语义验收，Web3 负责支付、约束、托管、争议和结算。

    为什么 Wallet 不是纯 AI 问题

    Wallet 不是纯 AI 问题，因为关键不在于“AI 会不会用钱包”，而在于“AI 拿到钱包能力之后会不会失控”。AI 可以理解意图、规划路径、解释风险，但它本质上不是一个强约束系统，可能受到 prompt injection、恶意前端、模糊授权描述和上下文污染的影响。

    真正重要的是硬边界：单笔额度、总预算、协议白名单、是否允许 approve、是否允许转出主资产、超额是否强制人工确认，以及权限是否可以撤销、会不会自动过期。这些都必须靠外部权限机制来保证，而不是靠模型“自己懂事”。所以 Wallet 的核心不是智能执行，而是受控执行。

    为什么 Wallet 也不是纯 Web3 问题

    但 Wallet 也不只是钱包架构、AA、Safe 这些机制本身。Web3 很擅长提供权限原语，比如钱包、多签、guard、session key、policy，但它不理解用户目标。

    比如用户说“帮我做一个低风险、不要跨链、收益还可以的策略”，难点不是能不能签名，而是该选哪个协议、当前条件下该不该执行、收益和风险怎么平衡、哪些步骤值得自动化。这些都需要 AI 来做语义理解和动态规划。

    另外，普通用户通常也看不懂底层交易，AI 的现实价值就在于把复杂交易翻译成人能理解的话，把“能签”变成“看懂了再签”。所以 Wallet 本质上也是 AI 和 Web3 的结合：Web3 负责权限和边界，AI 负责理解、规划和解释。

（没招了，最近在准备期末考，打卡只能以知识点为主，没有实践）
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->



ETH的特性决定它适配成为AI的基础网络。审查抗性：如智能合约，第三方试图中止交易这种尝试会失败。

![截屏2026-05-25 21.18.07.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Nikoheihei/images/2026-05-25-1779715813667-__2026-05-25_21.18.07.png)

eth更加中立，而中心化的机构会导致不同公司掌握不同agent的结果。（之前和朋友聊到未来不会我们的数据都不属于我们而是属于不同大厂吧这个话题，这样看来确实eth很中立）

eth向agent economy infra转型的优势是可编程货币。天然适配agent。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->




GG18协议整个生命周期主要分为两个阶段，分布式密钥生成阶段和分布式签名阶段。分布式密钥生成阶段：各个参与方在本地生成一个秘密随机数，通过同态加密和零知识证明，在不公开随机数的同时，共同推导出全局的公钥。每个参与方获得自己的私钥分片。没有任何一个人知道完整的私钥。分布式签名阶段（共 9 轮交互）：当需要发起交易时，选定 ‭M个在线节点。为了在不拼接私钥的情况下算出 ECDSA 签名（涉及求逆元等复杂操作），这 ‭M个节点需要进行复杂的数学运算。  

GG18 的缺陷：在 GG18 的多轮签名计算中，如果突然有一个节点作恶，系统虽然能发现签名失败，但无法揪出到底是哪个节点在使坏。这就导致攻击者可以通过不断捣乱来实施拒绝服务攻击。GG20 的改进：利用更高级的零知识证明，确保一旦签名过程中断或出错，系统可以精准锁定作恶或断线的节点 ID，方便系统将其踢出或惩罚。

其他优化：

离线预计算：GG20 引入了预计算机制。节点可以在没有实际交易时，提前把最消耗时间的那些乘法同态加密步骤做完。

在线 1 轮通信：当真实的交易和哈希值到来时，节点只需要进行1轮消息交互，就能瞬间吐出最终的签名。计算公式只含乘法和加法。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->





完成任务 3：用 agent 生成可交互学习产物

![截屏2026-05-21 21.54.53.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Nikoheihei/images/2026-05-21-1779372622598-__2026-05-21_21.54.53.png)![截屏2026-05-21 22.05.17.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Nikoheihei/images/2026-05-21-1779372632713-__2026-05-21_22.05.17.png)![截屏2026-05-21 22.08.33.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Nikoheihei/images/2026-05-21-1779372669880-__2026-05-21_22.08.33.png)
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->






配置hermes成功，同时接入飞书成功

![截屏2026-05-20 21.23.52.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Nikoheihei/images/2026-05-20-1779286284329-__2026-05-20_21.23.52.png)
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->







我的learning agent 为codebuddy，后续可能会优化为hermes，今日实现了AI 生成命令&合约 → 人工复核 → 链上执行 → Etherscan 验证。遇到的问题：infuria登陆帐号反复闪退，原因未知，更换为alchemy。

![截屏2026-05-19 21.39.17.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Nikoheihei/images/2026-05-19-1779198183008-__2026-05-19_21.39.17.png)![截屏2026-05-19 22.39.49.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Nikoheihei/images/2026-05-19-1779201734553-__2026-05-19_22.39.49.png)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->








在web3，安全和信任非常重要。审计只是保底手段，但是安全要融入到程序内。

![截屏2026-05-18 20.20.27.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Nikoheihei/images/2026-05-18-1779110274915-__2026-05-18_20.20.27.png)
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
