---
timezone: UTC+8
---

# nobodyhi

**GitHub ID:** nobodyhi

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->
\## 一、六个核心角色的定义

| 角色 | 核心问题 | 典型职责 |

|------|----------|----------|

| **任务发起方** | 谁想要这件事发生？ | 提出需求、设定目标、提供初始条件 |

| **执行方** | 谁动手去做？ | 完成具体操作、提供服务、交付成果 |

| **付款方** | 谁出钱？ | 承担直接资金成本、支付费用 |

| **验证方** | 谁证明“做对了”？ | 检查结果、提供证据、触发后续流程 |

| **风险承担方** | 如果失败，谁受损？ | 承担资金损失、信誉损失、法律责任 |

| **治理/仲裁方** | 谁定规则？谁解决纠纷？ | 制定参数、升级协议、裁决争议 |

\> **关键洞察**：同一个实体可以兼任多个角色，但\*\*风险承担方\*\*与\*\*治理方\*\*如果高度重合，容易出现利益冲突；\*\*验证方\*\*如果与\*\*执行方\*\*是同一人，则需要额外的防作弊机制。

\---

\## 二、拆解方法论（四步法）

\### 第一步：画出业务流程的“状态机”

把这件事从“开始”到“结束”分成几个关键阶段，标注每个阶段发生的核心动作。

\### 第二步：对每个动作，问“谁来做？”

列出所有涉及的实体（人、公司、智能合约、DAO、AI Agent等）。

\### 第三步：用六个角色标签对每个实体进行“多选”

一个实体可以承担多个角色。例如：发起方可能同时也是付款方。

\### 第四步：寻找“角色冲突”与“角色缺失”

\- **冲突**：执行方=验证方 → 需要引入第三方或密码学验证（如零知识证明）

\- **缺失**：没有明确的风险承担方 → 项目不可持续，或者风险隐性转移给用户

\- **模糊**：治理方不明确 → 升级困难，死锁风险

\---

\## 三、实战案例：去中心化跨境贸易结算 + 信用保险

**背景**：

A公司（中国卖家）要出口一批价值100万美元的汽车零件给B公司（巴西买家）。传统方式需要信用证、银行保函、货代单据等，周期长、费用高。

现采用一个\*\*智能合约平台 + 信用保险池\*\*的方案。

\### 第一步：业务流程（简化版）

1\. **发起**：B公司下订单，约定90天后付款。

2\. **保险**：B公司从保险池购买一份信用保险（如果B不付款，保险池赔付A）。

3\. **发货**：A公司发货，货运单据上链。

4\. **验证**：货代/海关节点确认货物已到港。

5\. **付款**：到期日，B公司支付USDC到智能合约。

6\. **结算**：合约将款项转给A公司，并给保险池支付保费分成。

7\. **异常**：如果B未付款 → 保险池触发赔付 → 仲裁委员会介入追偿。

\### 第二步：角色拆解表

| 实体 | 任务发起方 | 执行方 | 付款方 | 验证方 | 风险承担方 | 治理/仲裁方 |

|------|:---:|:---:|:---:|:---:|:---:|:---:|

| **B公司（买家）** | ✅ | | ✅ | | ✅（自己的付款能力风险） | |

| **A公司（卖家）** | | ✅（发货） | | | | |

| **智能合约** | | ✅（自动执行转账/赔付） | | | | |

| **货运节点（预言机）** | | | | ✅（确认到港） | | |

| **保险流动性池（LP）** | | | | | ✅（B不付款时赔付） | |

| **DAO治理委员会** | | | | | | ✅（升级参数、选择预言机） |

| **链上仲裁法庭** | | | | | | ✅（争议裁决，如货损责任） |

\### 第三步：关键洞察

**✅ 设计合理的地方**：

\- **验证方独立于执行方**：货运节点不是A或B，减少造假动机。

\- **风险承担方明确**：保险池的LP承担买方违约风险，获得保费作为补偿。

\- **治理与执行分离**：DAO改参数，智能合约执行，仲裁法庭解决个案。

**⚠️ 潜在风险与冲突**：

1\. **验证方作恶风险**：货运节点被贿赂，虚假确认到港。→ 需要多个独立预言机+质押惩罚机制。

2\. **治理方权力过大**：DAO如果被攻击，可以更改合约地址卷款跑路。→ 需要时间锁+多重签名+紧急暂停。

3\. **仲裁方执行难**：链上仲裁裁决后，如果B公司链下没有资产，追偿困难。→ 需要B超额质押保证金或与现实世界法警系统对接（目前很难）。

**💡 角色缺失**：

\- 没有明确 **“保险池的资本提供方”的退出机制**：如果LP想撤资，谁来批准？流动性如何保障？

\- 没有 **“预言机出错”的风险承担方**：如果货运节点被黑客攻击导致错误确认，谁赔钱？

\---

\## 四、这套框架的实战价值

| 场景 | 用这个框架可以问出的关键问题 |

|------|----------------------------|

| **设计一个DeFi协议** | 流动性提供者是风险承担方，但治理权是否在他们手里？清算人是执行方，谁来验证他们的行为是否合规？ |

| **构建DAO** | 发起提案的是发起方，执行提案的是多签执行人，但谁来验证执行结果？如果执行出错，谁仲裁？ |

| **开发AI Agent协作网络** | Agent A发起任务，Agent B执行，用代币支付，Agent C验证结果，如果B欺骗，谁来质押保证金？仲裁者是另一个Agent还是人类？ |

| **供应链金融** | 核心企业是发起方，供应商是执行方，银行是付款方（融资），第三方质检是验证方，谁承担货物灭失风险？（往往没人明确，导致保险缺位） |

\---

\## 五、一个可复用的思考模板

当你面对任何一个交叉方向的协作系统时，可以打印或默写这个表格：

\`\`\`markdown

\## 角色拆解表： \[系统名称\]

| 角色 | 具体实体 | 权力/责任 | 激励机制 | 惩罚机制 |

|------|---------|----------|----------|----------|

| 任务发起方 | | | | |

| 执行方 | | | | |

| 付款方 | | | | |

| 验证方 | | | | |

| 风险承担方 | | | | |

| 治理/仲裁方 | | | | |

\`\`\`

**最后一行“治理/仲裁方”尤其重要**——因为其他五个角色都可能出错，所以必须有一个具备\*\*最终解释权\*\*的实体，而这个实体的权力边界和问责机制，往往是一个系统最难设计但也最容易被忽视的部分。
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->

\### 1. 支付 / 商务 (Payment / Commerce)

**核心解决问题：价值交换的效率与信任**

在没有现代支付体系时，物物交换或基于信任的赊账效率极低，且风险高。这个方向要解决：

\- **价值转移的真实性**：如何确保我付的钱是真的（防双花、防伪钞），且交易不可逆或具有最终性。

\- **交易摩擦**：如何降低跨境、跨平台、小额支付的手续费和时间成本。

\- **商务逻辑的自动化**：如何让“一手交钱、一手交货”在数字世界里无需中间人担保自动执行（如智能合约下的条件支付）。

\- **典型案例**：支付宝解决的是买卖双方信任问题；加密货币解决的是摆脱中心化机构的控制问题。

\### 2. 身份 / 声誉 (Identity / Reputation)

**核心解决问题：我是谁，以及别人凭什么信任我**

互联网早期是匿名且无状态的——每次登录一个新网站，你都是一个“新人”。这个方向要解决：

\- **身份的所有权与控制权**：我的身份信息（姓名、证件号）是由我自己管理，还是存储在中心化数据库里（容易被盗或滥用）？

\- **身份的可验证性**：如何在不泄露出生日期的情况下证明我已成年？如何在不透露身份证号的情况下证明我是合法公民？（即零知识证明）

\- **声誉的可移植性**：我在淘宝的良好信用，为什么不能用于滴滴打车或Airbnb？如何建立一个人人共享、不可篡改的声誉评分，防止刷单和欺诈。

\- **典型问题**：解决“女巫攻击”（一个人伪造无数身份）和“信任孤岛”（每个平台自成一体）。

\### 3. 能力 / 互操作性 (Capability / Interoperability)

**核心解决问题：打破数据与功能的孤岛，实现跨系统协作**

目前互联网是“围墙花园”——微信不能直接给钉钉发消息，苹果的充值不能用于安卓。这个方向要解决：

\- **跨链/跨平台通信**：A链上的资产如何安全地在B链上使用？不同区块链（或数据库）之间如何“对话”？

\- **能力的模块化与复用**：我写了一个很棒的AI图像识别程序，其他应用能否直接调用我的这个能力（API化），而不需要重复造轮子？

\- **标准协议**：就像电子邮件都遵循SMTP协议一样，数字资产、身份凭证、智能合约需要统一的底层标准，才能互联互通。

\- **典型问题**：解决“供应商锁定”（用了亚马逊就不能用谷歌）和“数据屎山”（各系统数据格式不统一无法整合）。

\### 4. 钱包 / 权限 (Wallet / Permission)

**核心解决问题：资源的控制入口与授权管理**

注意，这里的“钱包”已不只是装钱，而是\*\*个人数字主权的中枢\*\*。这个方向要解决：

\- **私钥管理**：谁掌握私钥，谁才真正拥有资产和数据。如何解决私钥丢失（资产永久冻结）或被盗的问题？

\- **细粒度授权**：我允许某个应用看我的运动步数，但不允许它看我的位置；允许它本季度使用我的数据，到期自动失效。如何实现像手机权限管理一样精细的链上授权？

\- **支出上限与多签**：公司资金需要5个董事中3人同意才能动用；我给孩子一个子钱包，只能每月消费不超过500元。如何通过智能合约实现这些权限规则？

\- **典型问题**：解决“拿着我的数据随便用”和“一旦授权就无法撤回”的现状。

\### 5. 隐私 / 安全 (Privacy / Security)

**核心解决问题：在开放透明的系统中保护秘密，同时防止作恶**

这组是最具张力的一对——区块链天然要求透明（所有人可查账本），但人类需要隐私（不想让所有人知道我的工资）。这个方向要解决：

\- **数据机密性**：如何加密存储数据，使得网络节点负责记账但看不懂内容？（如全同态加密、可信执行环境）

\- **选择性披露**：如何证明我月收入超过1万（以满足贷款条件），但不告诉对方具体是1万还是10万？

\- **抗攻击能力**：如何防止51%攻击、DDoS攻击、钓鱼攻击导致智能合约被黑或资产被盗？

\- **合规隐私**：如何在满足反洗钱（AML）监管要求下，做到交易双方的身份和金额对公众不可见？

\- **典型问题**：解决“透明账本=完全透明=没有隐私”和“安全=极其繁琐=可用性差”的矛盾。

\### 总结关系图（帮你记忆）

可以把这五个方向想象成\*\*盖一座数字城市\*\*：

\- **支付/商务** = **经济活动**（城里人怎么买卖东西）

\- **身份/声誉** = **户口本与信用分**（证明你是谁，你是否可信）

\- **能力/互操作性** = **公路与通用插头**（不同城区怎么连通，不同电器怎么共用）

\- **钱包/权限** = **你的家门钥匙与授权书**（什么东西归你管，你能让谁进你的家）

\- **隐私/安全** = **窗帘、保险柜与警察**（如何不让外人偷看你的生活，同时防止抢劫）

**现实的演进方向**：早期的比特币解决了支付，以太坊引入了可编程能力，而当前（2025年左右）行业正在攻坚的是\*\*身份、隐私和互操作性\*\*——因为只有这些全部解决，Web3才能真正从“投机工具”变成“普通人日常可用的基础设施”。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->


\# AI × Web3 问题空间地图

\## 地图总览

AI与Web3的结合，可以从5个核心维度来理解。这五个维度涵盖了从输入（数据/算力）到处理（模型/Agent）再到输出（治理/对齐）的全链路。

| 维度 | 核心问题 |

|------|----------|

| 维度一：数据产权 | AI需要数据，Web3给所有权 |

| 维度二：算力市场 | AI需要算力，Web3建市场 |

| 维度三：模型推理 | AI需要验证，Web3给可信 |

| 维度四：Agent经济 | AI需要自主，Web3给账户+支付 |

| 维度五：治理对齐 | AI需要控制，Web3给去中心化 |

\---

\## 维度一：数据产权

\### 核心问题

训练AI需要海量数据，但数据产生者（用户/创作者）无法控制数据如何被使用，也无法分享AI创造的价值。

\### 关键子问题

\- 数据溯源：如何证明某份数据被用于训练了哪个模型？

\- 使用权控制：如何让数据"只能用于训练，不能被复制或转售"？

\- 收益分配：当模型产生收入时，如何自动向数据贡献者分配收益？

\- 隐私保护：如何在贡献数据的同时，不暴露原始敏感信息？

\### 已有方案代表

Ocean Protocol

数据代币化 + 隐私计算市场。局限：用户门槛高，流动性不足。

Bagel

联合学习 + 数据DAOs。局限：尚处早期，无大规模验证。

Grass

利用闲置带宽抓取公开数据，用户得积分。局限：只限公开数据，收益模型脆弱。

Vana

用户聚合数据池，联合训练"数据DAO"模型。局限：技术复杂，需要协调大量用户。

\### 关键空白（值得探索）

\- 如何让"数据贡献的价值"被实时计算，而非事后估算？

\- 是否存在轻量级的数据溯源协议，不需要每个节点跑全量验证？

\- 大模型时代数据价值是边际递减的（更多数据未必更好），这个经济学事实如何与代币激励兼容？

\---

\## 维度二：算力市场

\### 核心问题

训练和推理需要大量GPU，但算力资源分布不均（大厂闲置率高、小团队买不到）。能否像Airbnb一样共享闲置算力？

\### 关键子问题

\- 任务调度：如何把AI训练任务切分后，分配到全球异构的算力节点？

\- 工作验证：如何验证某个节点确实完成了计算，而不是伪造结果？

\- 成本优势：去中心化算力真的比中心化云便宜吗？差价来自哪里？

\- 数据安全：把模型或数据发到别人的GPU上跑，如何防止被窃取？

\### 已有方案代表

Gensyn

通用计算市场的Layer1协议。局限：主网上线不久，验证机制复杂。

Akash Network

容器化的算力市场（偏传统计算）。局限：对AI负载的适配不够原生。

[io.net](http://io.net)

Solana上的GPU聚合层。局限：依赖Solana，生态单一。

[Together.ai](http://Together.ai)

中心化但便宜（靠的是补贴）。局限：不是真正的去中心化。

\### 关键空白（值得探索）

\- 如何设计可验证计算的轻量化方案？（当前ZK和TEE都太重）

\- 推理任务比训练任务更适合作算力市场？为什么？

\- 算力供给端的"闲置资源"真的存在吗？（矿工的卡永远在跑）

\---

\## 维度三：模型推理的可信验证

\### 核心问题

当你用AI辅助做金融决策、合同审查甚至医疗建议时，如何验证AI的推理过程是诚实的、没有被人为操控？

\### 关键子问题

\- 推理可验证：如何证明某个输出确实来自某个模型，而非伪造？

\- 模型指纹：如何给模型一个不可篡改的"身份ID"？

\- 输入输出不可抵赖：用户和AI之间的交互可以被第三方验证吗？

\- 去偏见验证：如何证明模型的输出没有受运营方恶意引导？

\### 已有方案代表

EZKL（zkML）

用ZK证明验证ML推理。局限：证明开销极大，只适合极小模型。

Modulus Labs

各类zkML方案的评测和研究。局限：理论成果多，生产级应用少。

ORA Protocol

OPML（乐观验证+争议挑战）。局限：延迟高，用户需等待挑战期。

Ritual

链上推理 + 验证网络。局限：主网刚上线，生态未成形。

\### 关键空白（值得探索）

\- 能否设计混合验证机制：大部分时间乐观验证，有争议时用ZK？

\- 大模型（7B+）的zkML在什么硬件条件下可达实用水平？

\- 可信推理的刚需场景是什么？（高频交易？DAO治理？）

\---

\## 维度四：Agent经济

\### 核心问题

当AI Agent能够自主行动（调用工具、支付、签合同），它需要Web3提供的身份、账户和支付基础设施。但当前AI缺乏法律主体资格，如何让Agent"合法"地拥有资产并承担责任？

\### 关键子问题

\- Agent身份：如何给Agent一个永久的、可验证的链上身份？

\- Agent账户：Agent如何拥有自己的私钥和资产？

\- Agent支付：Agent如何在无人干预下完成支付（且不可逆）？

\- Agent责任：当Agent犯错/作恶，如何追责？谁来承担损失？

\### 已有方案代表

Wayfinder

Agent链上执行环境 + 跨链协议。局限：白皮书阶段。

Autonome

Agent工作流平台 + 积分激励。局限：重度依赖Base生态。

Virtuals Protocol

Agent代币化 + 联合曲线。局限：存在meme化倾向，实用性存疑。

[Fetch.ai](http://Fetch.ai)

经济Agent框架（偏物联网/自动化）。局限：AI能力较弱，Agent不够"智能"。

\### 关键空白（值得探索）

\- 如何让Agent的私钥在不依赖中心化服务器的前提下保持安全？

\- Agent之间的交互是否需要"Agent法律"（一种新的协议层规则）？

\- AI API调用和Agent执行之间，差的是哪一层的抽象？

\---

\## 维度五：治理与对齐

\### 核心问题

谁来决定AI的"价值观"？如何避免单一实体控制AI的演化方向？Web3的去中心化治理能否解决AI对齐问题？

\### 关键子问题

\- 模型更新治理：谁有权决定模型的新版本？如何防止恶意更新？

\- 价值观投票：当模型面临"该不该回答这个敏感问题"时，如何决定？

\- 红队激励：如何激励社区发现模型的漏洞/偏见？

\- 紧急熔断：如果模型开始作恶，谁能按下停止键？

\### 已有方案代表

SingularityNET

AI服务市场 + 治理代币AGIX。局限：实际治理参与度低。

Bittensor

AI模型的竞争市场 + 矿工/验证者机制。局限：矿工的"好模型"定义有争议。

Olas（Autonolas）

开源Agent的治理框架。局限：过于技术化，不适合非开发者的价值对齐。

\### 关键空白（值得探索）

\- AI对齐和DAO治理之间，如何衔接？

\- 能否设计一种AI对齐的联邦模式：不同社区运行不同价值观的AI，用户自己选择订阅哪一种？

\- 去中心化治理的现实问题：投票率低 + 巨鲸主导，如何避免AI的价值观被少数人绑架？

\---

\## 跨维度关系图

\`\`\`

数据 ──────→ 训练 ──────→ 模型 ──────→ 推理 ──────→ Agent

│ │ │ │ │

↓ ↓ ↓ ↓ ↓

产权维度 算力维度 对齐维度 可信维度 经济维度

\`\`\`

关键观察：

\- 越靠近"数据"端的问题，Web3相对成熟（有现成的代币经济）

\- 越靠近"Agent"端的问题，空白越大，也是AI API类产品的机会

\- 可信推理（维度三）可能是其他所有维度的技术前提——没有可信推理，Agent的链上资产就是脆弱的
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->



\# GLM MaaS API 入门：5分钟跑通第一个请求

GLM 系列模型（如 GLM-5.1）提供 OpenAI 兼容接口，只需换一个 `base_url` 和 `api_key`。

\---

\## 第一步：获取 API Key

首先需要一个智谱 BigModel 平台的 API Key：

1\. 访问 \[智谱AI开放平台\]([https://open.bigmodel.cn/](https://open.bigmodel.cn/)) 注册账号

2\. 登录后进入控制台，找到「API Keys」页面

3\. 点击「创建 API Key」，生成形如 `xxxxxxxx.xxxxxxxxxxxxxxxx` 的密钥

\> 💡 **安全提醒**：不要将 API Key 硬编码在代码中，建议使用环境变量。

\---

\## 第二步：环境准备

确保你的 Python 版本 ≥ 3.8，然后安装 OpenAI SDK（推荐方式）：

\`\`\`bash

pip install --upgrade openai>=1.0

\`\`\`

\---

\## 第三步：发起第一个请求

\### 方式一：使用 OpenAI SDK（推荐）

由于 GLM API 完全兼容 OpenAI 接口格式，直接用 OpenAI SDK 改一下 `base_url` 即可：

\`\`\`python

import os

from openai import OpenAI

\# 初始化客户端，指向智谱的 API 地址

client = OpenAI(

api\_key=os.environ.get("BIGMODEL\_API\_KEY"), # 替换为你的 API Key

base\_url="[https://open.bigmodel.cn/api/paas/v4/](https://open.bigmodel.cn/api/paas/v4/)"

)

\# 发起对话请求

response = [client.chat](http://client.chat).completions.create(

model="glm-5.1", # 模型名称

messages=\[

{"role": "user", "content": "用一句话解释什么是量子计算"}

\],

max\_tokens=1024,

temperature=0.7

)

\# 打印模型回复

print(response.choices\[0\].message.content)

\`\`\`

**预期输出示例**（模型实际生成内容可能略有不同）：

\`\`\`

量子计算是利用量子力学原理（如叠加和纠缠）进行信息处理的计算方式，能够在特定问题上远超经典计算机的计算能力。

\`\`\`

\### 方式二：使用 curl（无编程环境）

\`\`\`bash

curl [https://open.bigmodel.cn/api/paas/v4/chat/completions](https://open.bigmodel.cn/api/paas/v4/chat/completions) \\

\-H "Authorization: Bearer $BIGMODEL\_API\_KEY" \\

\-H "Content-Type: application/json" \\

\-d '{

"model": "glm-5.1",

"messages": \[{"role": "user", "content": "用一句话解释什么是量子计算"}\],

"max\_tokens": 1024

}'

\`\`\`

\---

\## 响应格式解析

返回的 JSON 结构与 OpenAI 完全一致：

\`\`\`json

{

"id": "chatcmpl-abc123",

"object": "chat.completion",

"created": 1744000000,

"model": "glm-5.1",

"choices": \[

{

"index": 0,

"message": {

"role": "assistant",

"content": "量子计算是利用量子力学原理..."

},

"finish\_reason": "stop"

}

\],

"usage": {

"prompt\_tokens": 18,

"completion\_tokens": 35,

"total\_tokens": 53

}

}

\`\`\`

\- `choices[0].message.content`：模型生成的回复内容

\- `usage`：本次请求消耗的 Token 数量，可用于监控配额

\---

\## 常见问题

\### Q1：API Key 格式和 OpenAI 不一样能用吗？

可以。智谱的 API Key 是 `xxx.xxx` 格式（而非 OpenAI 的 `sk-xxx`），但放在 `Authorization: Bearer` 头中完全兼容，SDK 会自动处理。

\### Q2：想看模型边想边输出怎么办？

设置 `stream=True`，可以逐字接收响应，适合需要实时展示的场景：

\`\`\`python

stream = [client.chat](http://client.chat).completions.create(

model="glm-5.1",

messages=\[{"role": "user", "content": "写一首关于夏天的短诗"}\],

stream=True

)

for chunk in stream:

if chunk.choices\[0\].delta.content:

print(chunk.choices\[0\].delta.content, end="", flush=True)

\`\`\`

\### Q3：GLM-5.1 和 GLM-4 有什么区别？

GLM-5.1 是智谱2026年4月发布的旗舰模型，在代码能力和长任务执行上显著增强，适合 Agent 场景（工具调用、多步规划等）。如果是简单对话，GLM-4 系列也完全够用。

\---

\## 总结

三步搞定：

1\. **注册** → 获取 API Key

2\. **安装** → `pip install openai`

3\. **运行** → 替换 `base_url` 和 `api_key`，其他和 OpenAI 一模一样

如果你想进一步了解流式输出、工具调用（Function Calling）等进阶用法，随时可以问我！
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->




\## Getting Started with the Claude API

\### 1. **Installation & Setup**

\`\`\`bash

pip install anthropic

\`\`\`

Set your API key:

\`\`\`python

import anthropic

import os

client = anthropic.Anthropic(

api\_key=os.environ.get("ANTHROPIC\_API\_KEY") # Or set directly

)

\`\`\`

\### 2. **Basic Message Creation**

\`\`\`python

response = client.messages.create(

model="claude-3-5-sonnet-20241022",

max\_tokens=1024,

messages=\[

{"role": "user", "content": "Hello, Claude! Explain quantum computing briefly."}

\]

)

print(response.content\[0\].text)

\`\`\`

\### 3. **System Prompts**

\`\`\`python

response = client.messages.create(

model="claude-3-5-sonnet-20241022",

max\_tokens=1024,

system="You are a physics professor who explains concepts with simple analogies.",

messages=\[

{"role": "user", "content": "Explain quantum computing briefly."}

\]

)

\`\`\`

\### 4. **Multi-turn Conversations**

\`\`\`python

messages = \[

{"role": "user", "content": "What's the capital of France?"},

{"role": "assistant", "content": "The capital of France is Paris."},

{"role": "user", "content": "What's its population?"}

\]

response = client.messages.create(

model="claude-3-5-sonnet-20241022",

max\_tokens=1024,

messages=messages

)

\`\`\`

\### 5. **Streaming Responses**

\`\`\`python

with [client.messages.stream](http://client.messages.stream)(

model="claude-3-5-sonnet-20241022",

max\_tokens=1024,

messages=\[{"role": "user", "content": "Write a short poem about AI"}\]

) as stream:

for text in stream.text\_stream:

print(text, end="", flush=True)

\`\`\`

\## Advanced Features

\### Vision Capabilities

\`\`\`python

import base64

with open("image.jpg", "rb") as img\_file:

image\_data = base64.b64encode(img\_[file.read](http://file.read)()).decode("utf-8")

response = client.messages.create(

model="claude-3-5-sonnet-20241022",

max\_tokens=1024,

messages=\[{

"role": "user",

"content": \[

{

"type": "image",

"source": {

"type": "base64",

"media\_type": "image/jpeg",

"data": image\_data

}

},

{

"type": "text",

"text": "Describe this image in detail."

}

\]

}\]

)

\`\`\`

\### Tool Use (Function Calling)

\`\`\`python

tools = \[

{

"name": "get\_weather",

"description": "Get weather for a location",

"input\_schema": {

"type": "object",

"properties": {

"location": {"type": "string", "description": "City and state"},

"unit": {"type": "string", "enum": \["celsius", "fahrenheit"\]}

},

"required": \["location"\]

}

}

\]

response = client.messages.create(

model="claude-3-5-sonnet-20241022",

max\_tokens=1024,

tools=tools,

messages=\[{"role": "user", "content": "What's the weather in San Francisco?"}\]

)

\`\`\`

\## Best Practices

1\. **Error Handling**

\`\`\`python

from anthropic import APIError, RateLimitError

try:

response = client.messages.create(...)

except RateLimitError:

\# Implement exponential backoff

pass

except APIError as e:

print(f"API error: {e}")

\`\`\`

2\. **Token Management** - Monitor `response.usage.input_tokens` and `output_tokens`

3\. **Model Selection** - Choose based on needs:

\- Claude 3.5 Sonnet: Best balance of speed/capability

\- Claude 3 Opus: Most capable for complex tasks

\- Claude 3 Haiku: Fastest, most cost-effective
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->





web3
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->






## **1\. Getting Started with the OpenAI API**

Start by getting your API key from the [OpenAI Platform](https://platform.openai.com/). Add a spending limit in your account settings (e.g., $10–20) while learning to avoid unexpected costs.

python

```
import os
from openai import OpenAI

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))
```

✨ **Model Selection (2026)**

| Model | Best For | Approx. Input Cost |
| --- | --- | --- |
| GPT-4o | Complex reasoning, multimodal tasks, highest quality | $2.50 / 1M tokens |
| GPT-4o-mini | Most production apps – fast, cheap, capable | $0.15 / 1M tokens |
| o3 / o3-mini | Math, science, logic with deep reasoning | Premium |
| text-embedding-3-small | RAG and semantic search | $0.02 / 1M tokens |

* * *

## **💬 2. Chat Completions API & Streaming**

Chat Completions API is the core of most OpenAI apps. Messages include system, user, and assistant roles.

python

```
response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "What is the capital of France?"}
    ],
    temperature=0.7,
    max_tokens=1000
)
```

For real-time UX, use **streaming**:

python

```
stream = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Tell me a story"}],
    stream=True
)
for chunk in stream:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="")
```

* * *

## **3\. Prompt Engineering: The Six Core Principles**

Based on OpenAI's official 2026 guidelines, effective prompt engineering now emphasizes **clarity, structured instructions, and reasoning**.

| Principle | Example Application |
| --- | --- |
| Write Clear Instructions | "Summarize AI in healthcare (200 words) with 3 cases." vs. vague "Talk about AI." |
| Provide Reference Text | Inject external context (RAG) to reduce hallucinations and ground responses in facts. |
| Split Complex Tasks | Break into intent classification → summarization → analysis → conclusion pipeline. |
| Give the Model Time to Think | Use Chain-of-Thought: "Let's think step by step" → dramatically improves logic and math. |
| Leverage External Tools | Offload precise calculations to code execution; use function calling for real-time data. |
| Iterative Development | A/B test different phrasing; analyze failures and iterate systematically. |

💡 **Key Insight for 2026**: Shorter, results-oriented prompts are often more effective than lengthy, over‑specified ones—a shift noted in OpenAI's latest guidance.

* * *

## **4\. Function Calling (Tool Use)**

Function calling is the primary way to connect AI models to external APIs and actions. The model returns a structured JSON tool call rather than raw text, which you then execute.

### **Define a function schema (JSON)**

python

```
tools = [{
    "type": "function",
    "function": {
        "name": "get_weather",
        "description": "Get current temperature for a location",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {"type": "string", "description": "City and state, e.g., San Francisco, CA"},
                "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]}
            },
            "required": ["location"]
        }
    }
}]
```

### **Let the model choose a tool**

python

```
response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "What's the weather in Tokyo?"}],
    tools=tools,
    tool_choice="auto"          # model decides when to call
)
```

### **Handle the tool call**

python

```
tool_call = response.choices[0].message.tool_calls[0]
arguments = json.loads(tool_call.function.arguments)
# Execute actual weather API call, then return result to model
```

For **multi‑step workflows**, you can chain multiple function calls—the model sees previous outputs before deciding the next action, enabling powerful agents that search, fetch, then process.

* * *

## **5\. Embeddings & RAG (Retrieval-Augmented Generation)**

Embeddings convert text into dense **vectors** (e.g., 1,536 floats for `text-embedding-3-small`) that capture semantic meaning.

python

```
response = client.embeddings.create(
    model="text-embedding-3-small",
    input="Your text here"
)
vector = response.data[0].embedding
```
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->







While LLMs are an impressive achievement, their output is only statistically plausible and not the result of a reasoning process.  
  
**Understanding NLP and LLMs**

While this course was originally focused on NLP (Natural Language Processing), it has evolved to emphasize Large Language Models (LLMs), which represent the latest advancement in the field.

**What’s the difference?**

-   **NLP (Natural Language Processing)** is the broader field focused on enabling computers to understand, interpret, and generate human language. NLP encompasses many techniques and tasks such as sentiment analysis, named entity recognition, and machine translation.
    
-   **LLMs (Large Language Models)** are a powerful subset of NLP models characterized by their massive size, extensive training data, and ability to perform a wide range of language tasks with minimal task-specific training. Models like the Llama, GPT, and Claude series are examples of LLMs that have revolutionized what’s possible in NLP.
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
