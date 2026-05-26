---
timezone: UTC+8
---

# peanuut98

**GitHub ID:** peanuut98

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->
# **Day 9 打卡**

> 2026-05-26 (Tuesday) · Week 2 / Day 9 · 主题：**把方向从「消费者订阅」切到「Agent 服务采购与结算」B2B 闭环**

## **今日主题**

**Agent Service Payment & Settlement Workflow — 给 AI Agent / AI 应用开发者用的「API / 数据 / 算力 / MCP 服务」采购验收结算工具**

我最初的方向想法是「消费端订阅管理」（受限金库 + 帮我管 SaaS 订阅）。今天把 Handbook 的 Agentic Commerce track 完整读完之后，发现这个方向虽然合理，但**产品厚度太薄** — 一个个人订阅管理工具，要么走 Web2 替代品、要么变成「稳定币付款按钮」demo，都不是 Web3 真正补位的地方。

调整后的方向：**面向 AI Agent / AI 应用开发者的服务采购结算闭环**。Agent 在执行任务时需要买 API / 数据 / 推理 / MCP server 服务，这条采购链当前是「开发者预先注册 + 充值 + 复制 key 给 Agent」 — 摩擦大、预算控制差、无法跨平台对账。我要做的是把整条采购流变成结构化的 workflow：发现 → 比价 → 采购任务 → 预算授权 → 托管付款 → 验收 → 争议 → 结算记录。

## **今日目标**

-   读完 Handbook 的 Agentic Commerce track + Machine Payment bridge，把六个知识节点（Agents Purchasing APIs / Payment Intent / Budget Control / Proof of Task Completion / On-chain Receipt / Escrow Flow）内化。
    
-   把最初的消费端订阅想法修正为 **B2B 闭环工具**，写清楚为什么不能停在「消费者订阅」或「单纯支付协议」。
    
-   用 Handbook 概念给闭环 7 个环节逐个定位，每一步标清「AI 能做什么 / Web3 在哪 / 人工边界」。
    
-   列出 Day 10 / Day 11 / Day 12 要验证的 3 个具体问题，避免方向停在「想法」阶段。
    

## **Week 2 任务理解（基于 Handbook 实际章节结构）**

读完 Handbook 之后我对 Week 2 的任务有了更明确的定位。「前沿探索」一栏列了 6 个 track（Agentic Commerce / Dev Tooling / Wallet & Permission / AI Security / Governance / Open Track），每个 track 都按同一个模板组织：**为什么要探索 → 第一性原理 → 知识节点 → 在 AI×Web3 中的位置 → 最小实践 → 扩展阅读**。

也就是说 Week 2 的产出物就是一份「最小实践」级别的 brief — 不是写代码，是把一个具体方向用第一性原理 + 知识节点 + 闭环图说清楚，能让别人接着做下去。

## **方向调整：为什么从「消费者订阅」转到「B2B Agent 服务采购」**

最初的方向选择是直觉驱动的（我自己有跨境订阅这个痛点），但今天读完 Handbook 的第一性原理之后，发现这个方向有两个问题：

> Handbook 的核心句：**「Agent 可以替用户发起商业动作，但不能替用户承担无限责任。」**

把这句话当检查器套到「消费端订阅」想法上：

-   如果坚持「每笔订阅扣款都要用户 Confirm」 → Agent 价值退化成「对账提醒」 → Web2 工具就能做，Web3 是冗余的。
    
-   如果允许「在预算内自动扣款」 → 又会担心 Agent 被攻破后在边界内乱花钱 → 但消费端用户的预算太小，做这套合约级别的护栏 ROI 太低。
    

而**面向开发者 / AI 应用的服务采购**则刚好相反：

-   Agent 在任务执行时**频繁、动态**地买服务（一次任务可能调 5 个 API、用 3 份数据、付 1 次推理），人工 Confirm 完全跑不动。
    
-   单笔金额小但累积金额大，预算 / 分层控制 / 审计的价值非常实在。
    
-   服务方（API / 数据 / MCP 服务方）也在找新的变现模式，**他们有动力接入新的支付协议**。
    
-   B2B 客户更愿意为「能跨服务商对账 + 链上可审计」付费。
    

所以 Day 9 修正：方向是 B2B，不是消费端。**「让 AI 应用 / Agent 开发者像点云服务一样点 API、数据、推理服务，全程有结构化的 Intent、托管付款、验收记录。」**

## **关键概念笔记（Handbook · Agentic Commerce track）**

来源：[Handbook · 智能体商业](https://aiweb3.school/zh/handbook/tracks/agentic-commerce/)

第一性原理：

> Agent 可以替用户发起商业动作，但**不能替用户承担无限责任**。

拆解为三段：购买前要有 **intent**（买什么、为什么买、最多花多少、接受什么结果）/ 购买中要有 **约束**（报价、有效期、服务条款、退款条件）/ 购买后要有 **证据**（任务结果、收据、日志、争议路径）。

六个知识节点（每个一句话能讲清）：

| 节点 | 一句话 | 我项目里对应什么 |
| --- | --- | --- |
| Agents Purchasing APIs | Agent 在任务过程中动态发现外部服务并完成调用，重点不在「自动付款」而在服务发现 / 价格透明 / 权限限制 / 调用日志 | 闭环第 1 步「发现服务」 |
| Payment Intent | 用户授权前的结构化表达：任务 / 预算 / 资产 / 白名单 / 质量要求 / 退款条件 / 有效期 | 闭环第 3 步「采购任务」 |
| Budget Control | 安全阀 — 分层（任务预算 / 服务预算 / 时间预算 / 风险预算 / 失败预算）；界面要让人读得懂 | 闭环第 4 步「预算授权」 |
| Proof of Task Completion | 服务方拿钱前要有证据；不同服务证据形态不同（API 靠请求 ID + 响应；推理靠模型版本 + IO hash；执行靠 tx hash + event log） | 闭环第 6 步「验收」 |
| On-chain Receipt | 上链的是「事后能对账的最小集合」 — payer / provider / agent / task id / 金额 / tx hash / 输出 hash / 验收状态。敏感数据只存 hash 或加密引用 | 闭环第 8 步「结算记录」 |
| Escrow Flow | 托管状态机：建任务 → 资金进托管 → 交付 → 验收 → 通过则放款，失败则退款 / 进争议。自动验收边界要警惕：高价值或主观结果不能只靠模型自动放款 | 闭环第 5、6、7 步 |

辅助章节（Bridge · Machine Payment 的子节）：Stablecoin Payment / Budget / Quote / Payment Intent / **x402** / **MPP** / Subscription / Micropayment。x402 / MPP / AP2 是把「机器之间的支付」协议化的尝试 — 我做的工具应该兼容其中至少一个，这样冷启动时能接入已经实现该协议的服务方。

## **Agent 服务采购与结算闭环（按 Handbook 概念定位）**

整个闭环 8 个环节。每一步标清楚：**AI / Agent 做什么** | **Web3 在哪** | **人工边界**。

```
开发者描述任务
        ↓
[1] 发现服务 ── Agent 拉取服务目录 + 元数据
        ↓
[2] 比价 ────── Agent 在候选集里按预算 / 质量打分
        ↓
[3] 生成采购任务（Payment Intent）── 结构化 brief
        ↓
[4] 预算授权 ── 用户在钱包签 Intent，资金进托管
        ↓
[5] 托管付款 ── Agent 在 Intent 边界内调用服务
        ↓
[6] 服务验收 ── 收集 Proof of Task Completion
        ↓
[7] 争议处理 ── 不通过验收 → 退款 / 仲裁通道
        ↓
[8] 结算记录 ── On-chain Receipt + 链下日志
```

### **\[1\] 发现服务**

-   **AI 做**：从我们维护的服务目录（自家索引 + 接入的 x402 / MPP 服务方）拉取候选；按 task brief 打 embedding，排出候选清单。
    
-   **Web3 在哪**：服务方的链上 metadata（地址、报价、声誉指标）。第一版**只用链下目录 + 链上地址校验**，不强依赖去中心化注册表。
    
-   **人工边界**：用户能看到候选清单，但不必对每个服务点确认 — 这是搜索结果级动作。
    

### **\[2\] 比价**

-   **AI 做**：基于候选清单生成对比表（价格 / 延迟 / 质量评分 / 历史成功率 / 用户配额）。质量评分要可解释，不只是一个总分。
    
-   **Web3 在哪**：服务方的历史 On-chain Receipt 反向喂给「成功率」指标 — 这是 Web2 比价工具做不到的。
    
-   **人工边界**：候选 ≥ 3 时，**默认让 Agent 选**；候选 < 3 或单价 ≥ 风险阈值，弹给用户选。这是 Budget Control 的「风险预算」分层。
    

### **\[3\] 生成采购任务（Payment Intent）**

-   **AI 做**：把任务自然语言描述转换成 **Payment Intent 草稿**（任务目标 / 预算 / 资产 / 白名单 / 质量要求 / 退款条件 / 有效期）。
    
-   **Web3 在哪**：Payment Intent 是要上链 / 进合约的结构化对象，不是 prompt。
    
-   **人工边界**：✋ Intent 草稿生成后**必须用户签名提交**。这是我最初放错位置的边界 — 不是每笔 Confirm，是 Intent 设定 / 修改 / 撤销时 Confirm。
    

### **\[4\] 预算授权**

-   **AI 做**：把 Intent 拆成多层预算并生成可读说明（"这次任务最多花 $5，单个 API 上限 $1，连续失败 2 次自动停"）。
    
-   **Web3 在哪**：用户在钱包里把对应金额（USDC）转入托管合约，授权该 Intent 在边界内调用。技术路径备选 — Smart Account session key（ERC-4337）/ Safe Roles Modifier / 自写 escrow，下一步要选定。
    
-   **人工边界**：✋ 充值 + 授权那一签，必须用户钱包弹窗确认。
    

### **\[5\] 托管付款（执行调用）**

-   **AI 做**：在 Intent 边界内调用服务（HTTP 调 API / RPC 调合约 / MCP 调工具），把支付凭证（x402 / MPP / AP2）随调用一起发。每次调用前再次校验是否仍在 Intent 边界内（剩余预算 / 白名单 / 有效期）。
    
-   **Web3 在哪**：每次调用产生一笔托管合约扣减，对应一个 pending receipt。
    
-   **人工边界**：单笔金额 ≥ 风险阈值或调用未在白名单，必须用户额外 Confirm。其余在 Intent 边界内的调用**不再每笔人工** — 这是 B2B 场景能成立的关键。
    

### **\[6\] 服务验收**

-   **AI 做**：根据服务类型收集证据：API 服务收集请求 ID + 响应状态 + 响应大小；推理服务收集模型版本 + 输入 hash + 输出 hash；数据服务收集数据 hash + 字段说明 + 授权记录。把证据标准化成统一格式。
    
-   **Web3 在哪**：证据可以哈希后写进 receipt；高价值任务可以触发链上事件 / 第三方评测。
    
-   **人工边界**：低价值（单笔 < 阈值）默认自动验收；中等价值用户事后异议窗口（24h）内可以申诉；高价值默认要用户主动验收，不自动放款。这是 Escrow Flow 强调的「自动验收边界」。
    

### **\[7\] 争议处理**

-   **AI 做**：当验收失败 / 用户申诉时，AI 整理证据包（任务 brief / Intent / 调用日志 / 响应内容 / Proof）发给争议通道。
    
-   **Web3 在哪**：第一版**只用「申诉 → 服务方响应 / 退款」状态机**，不接第三方仲裁；高价值场景预留接 Kleros / 类似争议 DAO 的接口。
    
-   **人工边界**：✋ 用户决定是否申诉、是否接受退款、是否升级仲裁。AI 只做证据整理 + 建议，不做裁决。
    

### **\[8\] 结算记录（On-chain Receipt + 报表）**

-   **AI 做**：把每笔调用整理成可读账单（按服务 / 任务 / 时间分组）；月底自动出对账报表；配合 Stripe / 内部财务对接。
    
-   **Web3 在哪**：每笔 receipt 上链 — payer / provider / agent / task id / 金额 / tx hash / 输出 hash / 验收状态。**敏感字段（任务详情 / 输入输出）只存 hash，不直接上链。**
    
-   **人工边界**：用户能随时导出 CSV / 区块浏览器对照。AI 不持有「修改账单」的能力。
    

## **这条闭环为什么不能只用 Web2 解决**

这是我在初稿里没回答完、今天补上的核心问题：

| 维度 | 纯 Web2（Stripe + Vercel + Postgres）能不能做 | Web3 真正补的位 |
| --- | --- | --- |
| 服务发现 | ✅ 维护一个目录就行 | 服务方的链上声誉 / receipt 历史能交叉引用，跨平台不依赖某家中心化目录 |
| 比价 | ✅ 表格对比 | 历史 On-chain Receipt 是公开账本，比 Stripe 内部数据更可信 |
| Intent 表达 | ⚠️ 可以用数据库存 | Intent 是合约里能 enforce 的对象，不是平台承诺 |
| 预算授权 | ⚠️ Stripe 有 spending limit | 但 limit 在 Stripe 内部，跨服务商失效；金库合约的 limit 是协议级的 |
| 托管付款 | ⚠️ Stripe Connect / Escrow 都有 | 但只在 Stripe 生态；Agent 跨多家服务商时摩擦极大 |
| 验收 / Proof | ❌ Web2 没有标准 Proof 形态 | 链上事件 + 哈希引用是天然的可审计证据 |
| 跨平台对账 | ❌ 每家平台一份账单，开发者地狱 | 链上 Receipt 跨平台统一格式，一份账本看全 |
| 争议跨主体 | ❌ Stripe 内仲裁 / 跨平台找不到对手方 | 链上 task id + receipt 形成可追踪的多方证据 |

不是「Web3 全都更好」，是闭环的**后半段**（Proof / Receipt / 跨平台对账 / 跨主体争议）Web2 真做不动。前半段（发现 / 比价 / Intent UI）Web2 完全够用 — 所以这是一个**链上后端 + Web2 体验前端**的产品。

## **今日产出**

-   ✅ Handbook 关键概念笔记（六个知识节点，每个一句话能讲清）
    
-   ✅ 方向调整说明：从消费端订阅转向 B2B Agent 服务采购，理由清楚
    
-   ✅ 闭环 8 个环节的逐步设计，每一步标清楚 AI / Web3 / 人工边界三方分工
    
-   ✅ 「不能只用 Web2」的论证表，回答了初稿没回答完的核心问题
    
-   ✅ 项目暂定名：**Loom**（一个 Agent 织入服务、收据、结算的工作流；可改）
    

## **下一步要验证的 3 个具体问题（Day 10 / 11 / 12）**

1.  **协议层选型**：x402 / MPP / AP2 三个里哪一个最适合「Agent 调 API + 受限托管」场景？读各自的最小 demo，对照「单调用付款 + 预算限制 + 收据回写」是否原生支持。
    
2.  **金库实现路径**：Smart Account session key（ERC-4337）/ Safe Roles Modifier / 自写 escrow — 第一版用哪个最快能跑出 MVP？三种路径在「Agent 拥有有限调用权」上的安全模型差别在哪？
    
3.  **真实服务方接入**：列 5 个 AI 应用真在用的 API 服务（OpenRouter / Replicate / Pinata / The Graph / 一个 MCP server），逐个查它们当前接受什么支付方式 / 是否实现过 x402 类协议 / 接入门槛多高。这决定 MVP 是从「只支持 1 家」起步还是能直接覆盖 5 家。
    

## **今日反思**

今天最大的认知更新是 — **方向的「厚度」不是来自概念叠加，是来自闭环完整**。我最初想的「受限金库 + 月度预算 + 每笔签名」其实只是闭环里的第 4、5 步，没有 1（发现）、2（比价）、6（验收）、7（争议）、8（记录），所以它不能成为一个产品，只能成为一个支付按钮。读完 Handbook 我才看到完整闭环长什么样。

第二个收获：**B2B 场景比消费端更适合 Web3**。消费端用户对「合约级别的预算护栏」感受不深 — 他们就是觉得「Stripe 也能做」。但 Agent / AI 应用开发者对「跨平台对账」和「链上可审计」的需求是真实的、能付费的，因为他们的 Agent 一天可能调几千次外部服务，没有对账工具就是地狱。

第三个收获：Handbook 那句\*\*「Agent 不能替用户承担无限责任」\*\* 是个能反复用的检查器。今天用它检查我最初的方向 — 在「每笔都人工 Confirm」和「无限制自动扣款」中间，正确的位置是「**Intent 层人工，Intent 边界内自动**」。这条边界换到任何 Agent 类项目都成立，是这周最值得带走的一句话。

下一步不再扩方向，而是把这三个验证问题挨个回答。Day 10 准备读 x402 的 docs。

* * *

**Sources（今日实际读的页面）：**

-   [Handbook · 智能体商业（Agentic Commerce）](https://aiweb3.school/zh/handbook/tracks/agentic-commerce/)
    
-   [Handbook · 机器支付（Machine Payment）](https://aiweb3.school/zh/handbook/bridge/machine-payment/)
    
-   [Handbook · 智能体钱包（Agent Wallet）](https://aiweb3.school/zh/handbook/bridge/agent-wallet/)
    
-   [Handbook · 智能体身份（Agent Identity）](https://aiweb3.school/zh/handbook/bridge/agent-identity/)
    
-   [x402 Protocol](https://www.x402.org/)
    
-   [Agent Payments Protocol（AP2）](https://ap2-protocol.org/)
    
-   [Machine Payment Protocol](https://mpp.dev/)
    
-   [ERC-8183（Agent task & payment 草案）](https://eips.ethereum.org/EIPS/eip-8183)
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->

Day 7 · 2026-05-24 · @peanuut98

今日学习：

\- 复盘了在 Rabby + Base Sepolia 上发的那笔测试网转账（一个测试地址 → 另一个测试地址，全程测试网，无主网资产）。

\- 在 BaseScan 上把 Tx Hash / Status / Block / Timestamp / From / To / Value / Txn Fee 这 7 个字段重新读了一遍，对照 Day 1–Day 3 学的概念，每个字段都能用自己的话解释。

\- 整理了一份「链上验证清单」：钱包说成功不算数，必须 Tx Hash 在 BaseScan 上能搜到才算真的上链；From 余额扣减 = Value + Txn Fee。

\- 划清楚了哪些步骤钱包能帮我做（签名 / 估 Gas / 广播），哪些必须人工确认（网络选择 / 地址核对 / 金额位数 / Gas 量级 / 签名内容）。

最大的认知变化：

\- 区块浏览器不是「一个看交易的网站」，是链上事实的唯一二次验证渠道 — 这是「钱包侧成功」和「链上侧成功」的分界线。

卡点：

\- 还没真正接触合约调用 / ERC-20 转账，BaseScan 的 Token Transfers 和 Input Data 怎么读，下周再补。

明日 / 下周：

\- Day 8：写 Week 1 weekly note，把这一周整理成一份复习材料。

\- Week 2：开始读 Transaction 的细节（mempool、确认数、ERC-20、第一次 Read Contract）。

🔗 [https://github.com/peanuut98/ai-web3-school-cohort-0/blob/main/daily/2026-05-24.md](https://github.com/peanuut98/ai-web3-school-cohort-0/blob/main/daily/2026-05-24.md)
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->


Day 6 · 2026-05-23 · @peanuut98

诚实记录：Day 4 (05-21) 和 Day 5 (05-22) 我没打卡，也没真的学。今天 Day 6 不补假打卡，而是回到主线把 Wallet 这一章稳住。

今日学习：

\- 复习 Day 1–Day 3：把「区块 / 公私钥 / 钱包」这条主线自己复述了一遍，发现 Day 3 关键概念（助记词、派生路径、冷热钱包）当时填得不够实，今天补回来。

\- Handbook: Wallet — 重新读了一次，搞清楚助记词背后是 BIP39，派生路径 m/44'/60'/0'/0/0 里 60' 对应 EVM 链。

\- 链上练习：在 Sepolia Etherscan 上找回 Day 3 自己那笔自转账，把 6 个字段重新读了一遍；又随便点了一笔别人的 tx 做对照。

最大的收获：

\- 「学过」≠「记住」。Day 3 当时以为搞懂了 Wallet，今天复述才知道还有缺口 — daily note 是写给未来的自己的复习材料。

卡点：

\- Keystore 和助记词到底是不是同一份私钥的两种存储格式，没读懂。

\- 别人交易里 Input Data 那串 0x... 现阶段完全读不懂，记下来等讲合约调用时回头看。

明日：

\- 把 Day 4 / Day 5 原计划的 Wallet 后半 + Transaction 开头压成一天读完。

\- 周日晚上做一次 Week 1 小结。

🔗 [https://github.com/peanuut98/ai-web3-school-cohort-0/blob/main/daily/2026-05-23.md](https://github.com/peanuut98/ai-web3-school-cohort-0/blob/main/daily/2026-05-23.md)
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->



Day 3 · 2026-05-20 · @peanuut98

今日学习：

\- Handbook: Wallet — 终于把「钱包不是装币的口袋，而是私钥管理工具 + 签名入口」这句话读懂了。地址、助记词、派生路径之间的关系也串起来了一点。

\- 实操：装了 MetaMask，创建了一个全新钱包（助记词抄在纸上、没存电子设备），切到 Sepolia 测试网，领了一点测试 ETH，发了一笔自转账，再到 Sepolia Etherscan 上把昨天学的 6 个字段重新读了一遍 — 概念第一次有了「手感」。

\- 产出：daily/[2026-05-20.md](http://2026-05-20.md) 已 commit 到学习仓库。

最大的认知变化：

\- 钱包 ≠ 账户。一组助记词可以派生出无数个地址，MetaMask 只是这条派生链路的 UI。

卡点：

\- 派生路径（m/44'/60'/0'/0/0 这种）每一段到底代表什么，还需要再读一遍。

明日：

\- Wallet 续 — Seed phrase / Keystore / 派生路径的细节。

\- 想搞清楚：为什么同一组助记词，在 MetaMask 和 Rabby 里能恢复出同一组地址（背后是 BIP39 + BIP44 这套标准在起作用）。

🔗 [https://github.com/peanuut98/ai-web3-school-cohort-0/blob/main/daily/2026-05-20.md](https://github.com/peanuut98/ai-web3-school-cohort-0/blob/main/daily/2026-05-20.md)

\`\`\`
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->




Day 2 · 2026-05-19 · @peanuut98

今日学习：

\- Handbook: Cryptography — 第一次把「私钥签名、公钥验证、地址是公钥的一段 hash」这条链路串起来。

\- 实验：用 SHA-256 工具算了 hello / Hello / hello(带空格) 三个字符串，直观感受到 1bit 输入差异 → 完全不同的 hash（雪崩效应）。

\- 产出：daily/[2026-05-19.md](http://2026-05-19.md) 已 commit 到学习仓库。

卡点：

\- 还不太清楚「签名」在链上到底是怎么被验证的（节点拿到 tx 后具体做了哪几步）。

明日：

\- 读 Wallet 章节，搞清楚钱包 ≠ 私钥本身，而是私钥的管理工具。

🔗 [https://github.com/peanuut98/ai-web3-school-cohort-0/blob/main/daily/2026-05-19.md](https://github.com/peanuut98/ai-web3-school-cohort-0/blob/main/daily/2026-05-19.md)

![截屏2026-05-19 23.12.25.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/peanuut98/images/2026-05-19-1779203675061-__2026-05-19_23.12.25.png)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->






Day 1 · 2026-05-18 · @peanuut98

今日学习：

\- Handbook: Network — 第一次系统理解 block / consensus / L2 / RPC，最有共鸣的是 RPC 就是「与链对话的入口」。

\- 实验：在 Etherscan 翻了一笔交易，认出了 Block#/Timestamp/From/To/Value/Gas Used 这些字段。

\- 产出：daily/[2026-05-18.md](http://2026-05-18.md) 已 commit 到学习仓库。

卡点：

\- 还没完全分清 L1 finality 和 L2 finality 的差异，先记着。

明日：

\- 读 Cryptography 章节（公私钥），自己跑一遍 SHA-256 直觉实验。

🔗 [https://github.com/peanuut98/ai-web3-school-cohort-0/blob/main/daily/2026-05-18.md](https://github.com/peanuut98/ai-web3-school-cohort-0/blob/main/daily/2026-05-18.md)
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
