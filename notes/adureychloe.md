---
timezone: UTC+8
---

# adurey

**GitHub ID:** adureychloe

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-10
<!-- DAILY_CHECKIN_2026-06-10_START -->
## **完成事项**

### **1️⃣ Codex CLI 代码审查**

Codex 审查了全部 10 个 Python 文件，发现：

| # | 严重度 | 问题 | 发现方式 |
| --- | --- | --- | --- |
| 1 | 🔴 Bug | Web x402 自动购买返回 404 | 路由分析 — mount 吞掉了子路由 |
| 2 | 🔴 Bug | caw tx get --tx-hash 不存在 | 实际跑 CAW CLI 验证出来的 |
| 3 | 🟡 风险 | x402 付款证明可重放 | 代码审查 |
| 4 | 🟡 可改进 | recordDelivery() 不验证交易真实性 | 代码审查 |
| 5 | ⚪ 体验 | AI 匹配静默回退，用户不知道 | 代码审查 |

### **2️⃣ 修复详情**

**Fix 1: Web x402 404**

**根因**: `app.mount("/api/x402", x402_app)` 在 FastAPI 中优先于 `@app.post("/api/x402/buy")`，导致该路由被吞掉返回 404。

**修复**: 将路由改为 `/api/x402-buy`，前端 `x402Buy()` 函数直调此端点并处理长等待（400s timeout for CAW approval + transfer）。

文件: `web/app.py`, `web/index.html`

**Fix 2:** `--tx-hash` **不存在 ⚡ Codex 真实发现**

**根因**: `_verify_payment()` 中写了 `["caw", "tx", "get", "--tx-hash", tx_hash]`，但 CAW CLI **不支持** `--tx-hash` flag（只支持 `--tx-id` 和 `--request-id`）。如果 Production 走到这个分支会静默失败。

**修复**: 对于 0x 开头的链上 tx hash，改用 web3.py RPC 直连 Sepolia 查询交易收据，验证 `to` 地址和 `value`。

文件: `agent_commerce_sandbox/x402_server.py`

**Fix 3: 防重放保护**

新增 `_used_proofs: set[str]` 全局集合，记录已验证的 tx hash。同一笔交易二次请求时直接拒绝。

已知验：重复请求同一 tx\_hash → `"payment_invalid"` ✅

**Fix 4: 交易真实性验证**

在 `chain_client.py` 新增 `verify_tx_onchain(tx_hash, expected_to, expected_value_wei)` 方法，通过 RPC 查链上交易收据，确认 `status=1`、`to` 地址匹配、`value >= 预期金额`。

在 `engine.py` 中，第 5 步付款后、第 6 步记录 proof 之前，插入验证步骤：

```
[5/5] Verifying payment on-chain...
  ✅ On-chain payment verified! Tx: 0xbb39c2...
[6/6] Recording delivery proof on-chain via CAW...
```

**Fix 5: AI 匹配可观测性**

修改 `_ai_match()` 和 `match_and_rank()` 返回值从 `[(score, svc)]` → `([(score, svc)], source)`，其中 `source` 为 `"ai"` 或 `"local_fallback"`。

| 展示位置 | 效果 |
| --- | --- |
| CLI | 🤖 AI / 📊 Local fallback |
| Web API | match_source: "ai" 字段 |
| Web UI | 卡片显示 🤖 AI badge |

### **3️⃣ 离链服务注册表**

新增 `agent_commerce_sandbox/local_registry.py`：

-   `LocalServiceRegistry` 类，JSON 文件持久化
    
-   ID 从 100 开始以区分链上服务（1-99）
    
-   `register()` / `unregister()` / `update()` / `list_services()` / `query_by_tags()`
    
-   x402 服务器新增 `POST /register` 端点
    
-   任何 Agent 可自注册为服务提供商
    
-   查看离链服务：`GET /services?local=true`
    

### **4️⃣ 全流程回归测试 ✅**

```
Step 1:  status       ✅ CAW Healthy/Paired, 3 services, 2 proofs
Step 2:  discover     ✅ 3 on-chain services
Step 3:  AI match     ✅ "ETH市场分析" → score 9 (ai)
Step 4:  x402 serve   ✅ Server on :8888
Step 5:  register     ✅ #100 "AI Research Agent" 注册成功
Step 6:  request 402  ✅ 402 Payment Required
Step 7:  CAW 审批     ✅ 用户手机审批
Step 8:  transfer     ✅ 0.00005 SETH 链上确认
Step 9:  verify+deliver ✅ web3.py RPC 验证 → 内容交付
Step 10: revenue      ✅ 0.00005 SETH ($0.15)
Step 11: replay       ✅ 同一 tx_hash 被拒绝
```
<!-- DAILY_CHECKIN_2026-06-10_END -->

# 2026-06-09
<!-- DAILY_CHECKIN_2026-06-09_START -->

## **今日完成事项**

### **1️⃣ AI 意图匹配（Procurement Agent 升级）**

之前：关键词硬匹配（`_CN_TAGS` + 单字分割）

现在：**DeepSeek V4 Flash 官方 API** 语义匹配 + 本地回退

```
用户输入 → DeepSeek API 分析 → JSON 匹配结果
                                   ↓
                    API 不可用时 → _local_score()
                                   语义组 + SequenceMatcher
```

| 查询 | 匹配结果 | 准确度 |
| --- | --- | --- |
| "ETH 市场深度分析" | Premium Market Analyzer ✅ | AI 4/4 |
| "帮写一个Web3调研报告" | Research Notes Generator ✅ | AI 4/4 |
| "查一下这个钱包地址" | On-chain Data Fetcher ✅ | AI 4/4 |
| "最新比特币链上数据" | On-chain Data Fetcher ✅ | AI 4/4 |
| "分析NFT市场的趋势报告" | Premium Market Analyzer ✅ | AI 3/3 |
| "找个代写笔记的服务" | Research Notes Generator ✅ | AI 3/3 |

**零错误，6/6 全部正确**（中英文混合查询通过）

关键设计：`_local_score()` 基于语义组（write/data/analyze）+ SequenceMatcher，保证 DeepSeek API 503 时服务不中断。

### **2️⃣ x402 协议 — Agent 当卖家 💰**

全新概念：**Agent 不止会花钱，还能赚钱。**

```
买方 Agent                卖方 Agent             链上
    │                        │                    │
    ├─── POST /api/x402/request ──►              │
    │                        │                    │
    │◄─── 402 Payment Required                   │
    │     X-Payment-Info:                        │
    │     chain=sepolia, token=SETH,             │
    │     amount=0.00006, addr=0x...             │
    │                        │                    │
    ├─── CAW Pact submit ──────►                  │
    ├─── CAW tx transfer ──────►                  │
    │◄─── content (delivery)                      │
```

新增文件：

-   `x402_server.py` — FastAPI server，接收请求 → 返回 402 头 → 验证付款 → 交付内容
    
-   `x402_client.py` — 自动检测 402 → 创建 Pact → 轮询审批 → 转账 → 重试 → 收货
    

### **3️⃣ Agent 当买家 — 自动支付 (x402 Client)**

```
x402_client.request(service_id, query)
  → POST /api/x402/request
  ← HTTP 402 + X-Payment-Info header
  → CAW Pact submit (后台 polling)
  → 用户在 CAW App 审批
  → CAW tx transfer (自动)
  → 重试 GET with X-Tx-Hash
  ← 200 OK + content
```

**关键修复**：Pact 提交后等待审批超时 → 改为 `background=True` + `notify_on_complete`，审批完成后自动继续付款流程。两轮测试通过：

| 轮次 | 模式 | 结果 |
| --- | --- | --- |
| 1st | 半自动（手动执行 transfer） | ✅ 成功付款 + 收货 |
| 2nd | 全自动（background polling） | ✅ 自动审批检测 + 自动付款 |

### **4️⃣ x402 CLI + Web UI**

**CLI 新增命令：**

| 命令 | 功能 |
| --- | --- |
| run.py serve | 启动 x402 卖家服务器 |
| run.py request <service_id> [query] | 买方请求（含自动支付） |
| run.py revenue | 查看总营收 |
| run.py list-services | 查看所有 x402 服务 |

**Web UI 新增 "x402 Market" 标签页：**

-   卖家服务卡片列表（名称 + 价格 + 描述）
    
-   买家输入表单（选服务 + 写需求 → 自动支付）
    
-   营收仪表盘（总 SETH + USD 估算）
    

### **5️⃣ 端到端 Demo 验证**

两轮完整双向 Demo：

```
Round 1: 手动流程
  Agent Commerce Hub (买方)
    → 发现卖方 x402 服务
    → HTTP 402 → CAW Pact → 用户审批 → Transfer → 收货
    
Round 2: 全自动流程
  Agent Commerce Hub (买方)
    → 请求服务 → HTTP 402 → CAW Pact (background)
    → notify_on_complete → 自动执行 transfer
    → 验证 tx_hash → 收货 ✅
```

### **6️⃣ CAW 扮演的角色（核心认知）**

```
私钥钱包 (EOA) = 老板 👑     CAW 钱包 = 店长 🧑‍💼
├── 部署合约                   ├── 日常付款
├── 合约 Owner                 ├── 调用合约 (tx call)
└── 管理员权限                 ├── 收钱进钱包
                               ├── 受 Pact Policy 约束
                               └── 每笔需用户 App 审批

关系：两个独立账户，私钥钱包是合约 Owner，CAW 是操作用户。
     CAW 解决了"Agent 没私钥怎么付钱"的核心矛盾。
```

CAW = **项目唯一的资金通路**。没有 CAW，Agent 无法自动完成任何链上操作。
<!-- DAILY_CHECKIN_2026-06-09_END -->

# 2026-06-08
<!-- DAILY_CHECKIN_2026-06-08_START -->


## **今日完成事项**

### **1️⃣ 代码清理**

| 操作 | 文件数 | 说明 |
| --- | --- | --- |
| 删除旧 Guard 层 Python | 9个 | guard_detector.py, attack_reporter.py, cobo_client.py 等 |
| 删除旧配置 | 2个 | policy.json, services.json |
| 删除旧场景/输出 | 15个 | scenarios/ + output/ |
| 修复 policy bug | 1处 | deny_if.amount_usd_gt: "0.01" → "5.00"（SETH $0.03 的交易不会被拒） |
| 删除 __pycache__ git 跟踪 | 7个 | git rm --cached |

### **2️⃣ Procurement Agent（CLI）**

新增 `agent_commerce_sandbox/procurement_agent.py`，核心函数 `procure()`：

```
run.py procure "需要ETH市场深度分析"
  → 发动链上合约查询
  → 中英文关键词匹配（含_CN_TAGS桥接标签）
  → 展示排名 Top 3
  → 用户选择服务
  → 余额检查 + 报价详情
  → 确认后跑 pact→Transfer→proof 全流程
  → 结果摘要
```

匹配准确度验证：

-   "ETH市场深度分析" → Premium Market Analyzer (score 3) ✅
    
-   "查钱包地址余额" → On-chain Data Fetcher (score 2) ✅
    
-   "写Web3项目研究报告" → Research Notes Generator (score 4) ✅
    

### **3️⃣ Web UI Backend 接入**

修复 `BrokenPipeError` 根因：`asyncio.to_thread` 中 `print()` 在 web 环境 stdout 关闭。

修复方案：`to_thread()` 函数改为捕获 stdout 到 `io.StringIO()`，防止 BrokenPipeError 传播。

所有 API 端点测试通过（全部 200 OK）：

-   `GET /` — HTML 页面
    
-   `GET /api/status` — 3 服务 / 1 存证 / 钱包健康已配对
    
-   `GET /api/services` — 3 个服务详情
    
-   `GET /api/proofs` — 1 笔交付存证
    
-   `POST /api/pay` — Pact → Transfer → Proof
    

新增 API 端点：

-   `POST /api/procure/match` — 自然语言匹配，返回排名+余额
    
-   `POST /api/procure` — 一键采购（匹配+支付全流程）
    

### **4️⃣ Web UI 前端改进**

| 功能 | 说明 |
| --- | --- |
| 搜索栏 | 输入需求，调用 /api/procure/match |
| 匹配排名展示 | 卡片按分数重排，带 match badge |
| Find & Pay 按钮 | 一键匹配+支付全流程 |
| 余额展示 | 选中服务后显示 SETH 余额 |
| 结果面板 | 支付后自动显示 ✅/⏳/❌ + Tx Hash（可点击 Sepolia Explorer）+ Pact ID + Proof |
| New Procurement 按钮 | 一键重置 |

### **5️⃣ Codex CLI 评审 & 修复**

Codex 发现的问题：

| 优先级 | 问题 | 修复 |
| --- | --- | --- |
| 🔴 P0 | Web API 泄露 CAW api_key | json_safe() 自动过滤 api_key 字段 |
| 🟡 P1 | README.md 过时 | 全面重写（架构图/用法/CAW集成/链上证据/安全边界） |
| 🟡 P1 | .env.example 旧变量 | 更新为 CAW 配置 |
| ⚪ P2 | 两个未使用 active Pact | 需要用户在 CAW App 手动撤销 |
<!-- DAILY_CHECKIN_2026-06-08_END -->

# 2026-06-07
<!-- DAILY_CHECKIN_2026-06-07_START -->



看了下参赛页面，发现之前想的比赛项目方向有点偏了，还是做回Agent-Native Payments这个方向吧，Agent 通过 CAW 持有资金，HTTP 402 自动完成支付，不依赖 API Key 和人工预注册。

场景： 用户说 "帮我买一份跨链市场分析报告" =》Agent 调用 Cobo API =》 CAW 创建 Pact =》 支付 USDC =》拿到报告 =》 返回给用户

但是下周很忙，估计做不完这个项目，还得学合约，下周笔记就记一下学习过程吧，项目慢慢完善。
<!-- DAILY_CHECKIN_2026-06-07_END -->

# 2026-06-05
<!-- DAILY_CHECKIN_2026-06-05_START -->




Phase 1 开发启动 — Guard 层 + Cobo API 集成

按照更新后的开发文档 (`tasks/phase1-dev-doc.md`)，计划如下模块：

### **完成模块**

| 模块 | 说明 |
| --- | --- |
| Cobo API 客户端 | 双模式：真实 Cobo API + 模拟模式 |
| Guard 检测层 | 3 项本地检测（注入/定价篡改/意图一致） |
| 攻击报告 | JSON + Markdown 双格式 |
| 引擎集成 | Guard + Cobo 双模式 |
| CLI | 6 个新命令 + --cobo 标志 |
| proof_logger | guard_evidence + cobo_result 字段 |
| services.json | 每个 service 增加 payment_address |
| .env.example | COBO_API_KEY 等 |

## **关键决策**

1.  **Guard 不做 Cobo 能做的事** — 地址白名单、金额限制、频率限制全由 Cobo Pact policy 处理
    
2.  **cobo\_client 双模式** — 有 COBO\_API\_KEY 走真实 API，无 Key 返回结构一致的 mock
    
3.  **intent\_consistency 只告警不阻断** — MEDIUM 等级，防止误杀
<!-- DAILY_CHECKIN_2026-06-05_END -->

# 2026-06-04
<!-- DAILY_CHECKIN_2026-06-04_START -->





### **Guard 检测层的设计思路**

Guard 作为独立于 policy\_checker 的安全层，其核心价值在于拦截**针对 AI Agent 支付流**的特定攻击：

| 检测项 | 攻击场景 | 检测原理 |
| --- | --- | --- |
| 金额异常 | Prompt injection 篡改报价 | 报价 vs 预期定价 ±20% |
| 地址异常 | 攻击者替换收款地址 | allowlist + 会话一致性 |
| 频率异常 | 高速耗尽 budget | session 内 >3次/分钟 |
| 上下文注入 | 注入指令让 Agent 转错账 | 指令模式匹配 + prompt signature |
| 定价篡改 | 攻击者直接改 services.json | 服务注册表 hash 比对 |

### **与现有架构的关系**

```
discovery → quote → policy_check
                      → [NEW] guard_detector.check()
                          → PASS → payment → delivery
                          → BLOCK → attack_reporter → stop
                          → REVIEW → flag for human
```

Guard 不重复 policy 的授权判断（"能不能付"），而是回答另一个问题：**"这个支付请求是恶意的吗？"**
<!-- DAILY_CHECKIN_2026-06-04_END -->

# 2026-06-03
<!-- DAILY_CHECKIN_2026-06-03_START -->






今天重新思考了一下黑客松的方向，原来的缺少新意，决定改成：

**"Secure Agent Commerce"**

-   Agent 经营付费 endpoint
    
-   内置 prompt injection 支付防护
    
-   Demo 3 幕故事：正常赚钱 → 被攻击拦截 → 生成攻击报告上链
    

完整的实现计划（`tasks/merge-merge-plan.md`）
<!-- DAILY_CHECKIN_2026-06-03_END -->

# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->







今天做了项目的骨架：  
创建了 `agent-commerce-sandbox/` 完整目录结构

-   `services.json` — 5 个模拟服务（3 allowlist + 2 non-allowlist）
    
-   `policy.json` — session 预算、单笔限额、allowlist、高风险动作规则
    
-   `agent_commerce_sandbox/` — Python 核心模块（engine, policy\_checker, payment\_simulator, mock\_services, proof\_logger）
    
-   `scenarios/` — 3 个可运行场景脚本
    
-   `run.py` — CLI 入口，支持 `normal` / `over_budget` / `unknown_service` / `all` / `check` / `list`
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->








今天整理了一下hackthon的参赛说明：

-   `tasks/week3-hackathon-direction-card.md` — 项目方向卡
    

-   `tasks/week3-track-selection.md` — 赛道对齐说明
    
-   `tasks/week3-one-line-pitch.md` — 一句话说明
    
-   `tasks/week3-team-status.md` — 单人参赛确认
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->









今天做一个知识扩展，对除了主方向以外的Week 2 其他模块学习：Agent Identity、Security / Privacy、Governance / Coordination。

## **1\. Agent Identity / Profile**

### **核心认知**

-   Agent 不只是"会执行的程序"，还需要**可发现、可描述、可验证、可协作**的能力层
    
-   identity 解决"你是谁"，capability 解决"你能做什么"，reputation 解决"别人为什么信你"
    
-   真正有价值的方向不是给 agent 发一个 DID 名字，而是让发现、协作、调用、验证形成完整链路
    

### **我学到了什么**

-   为 Commerce Agent 设计了 Capability Manifest：从 parse\_intent → discover\_service → request\_quote → check\_policy → confirm\_with\_user → execute\_payment → verify\_delivery → log\_receipt → handle\_dispute
    
-   理解了为什么 MCP、A2A、ERC-8004、MPP/x402 不冲突——它们在 agent commerce 的不同层级发挥作用
    
-   失败的 agent 应该定义好失败处理方式（找不到服务怎么办、超预算怎么办、交付不符怎么办），而不是让用户面对一个黑盒
    

[https://github.com/adureychloe/ai-web3-school-cohort-0/blob/master/tasks/week2-agent-identity-profile.md](https://github.com/adureychloe/ai-web3-school-cohort-0/blob/master/tasks/week2-agent-identity-profile.md)

* * *

## **2\. Security / Privacy Threat Model**

### **核心认知**

-   一旦 agent 持有上下文、凭证、API Key 或预算，安全问题就不是边角料，而是系统前提
    
-   Security 不是最后一层加个检查，而是从设计开始就区分"什么可以自动、什么必须暂停"
    
-   没有人工确认机制的 agent commerce 不是效率提升，是安全风险
    

### **我学到了什么**

-   资产清单思维：列出系统持有什么——私钥、API Key、session token、用户数据、交易权限、预算
    
-   6 种攻击入口分析：Prompt Injection、伪造服务返回、越权指令、超预算执行、数据泄露、无限循环
    
-   自动执行 vs 人工确认的阈值策略：低风险（预算 < $1、白名单服务、只读操作）自动，高风险（新合约、新域名、敏感指令、即将超限）暂停
    
-   Policy 设计模板：per\_task\_max + daily\_max + allowlist + human\_in\_loop thresholds + audit config
    
-   Cobo CAW Pact 的任务级授权是非常务实的设计——授权围绕一次具体任务生成，任务结束权限失效
    

[https://github.com/adureychloe/ai-web3-school-cohort-0/blob/master/tasks/week2-security-privacy-threat-model.md](https://github.com/adureychloe/ai-web3-school-cohort-0/blob/master/tasks/week2-security-privacy-threat-model.md)

* * *

## **3\. Governance / Coordination**

### **核心认知**

-   AI 可以辅助：提案总结、讨论脉络整理、会议转行动项、贡献记录、预算执行 checklist
    
-   AI 不能做：价值判断、预算批准、惩罚/激励决策、代表社区发起不可逆动作
    
-   Web3 提供的不是"更热闹的社区工具"，而是公开记录、可验证贡献、透明预算和开放协作的机制
    

### **我学到了什么**

-   以 AI × Web3 School 为例，拆了"提议 workshop"的完整 8 步流程：AI 帮 7 步（从草稿到总结），但治理权力和最终判断永远不能交给 AI
    
-   Proposal Summarizer 工具构思：输入讨论串 → 输出摘要 + 共识/分歧 + 风险标记
    
-   重要原则：AI 标记必须清晰标记为 AI 生成，不能冒充权威结论
    
-   治理不是"AI 替社区做决定"，而是"AI 帮社区把信息整理好，让人花时间在真正重要的判断上"
    

[https://github.com/adureychloe/ai-web3-school-cohort-0/blob/master/tasks/week2-governance-coordination-sketch.md](https://github.com/adureychloe/ai-web3-school-cohort-0/blob/master/tasks/week2-governance-coordination-sketch.md)
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->










今天继续 Week 2 主线，并把前几天的学习收敛成总交付：

-   5/25：AI × Web3 问题地图，选择 Payment / Commerce / Settlement 作为主方向。
    
-   5/26：Agent Wallet / Permission 策略，明确 agent 不能拥有无限钱包控制权。
    
-   5/28：Payment / Commerce 最小流程，拆出 intent、quote、policy、payment、delivery、acceptance、proof。
    
-   5/29：把这些内容合并成方向深挖包和项目初步 proposal。
    

今天的产出文件：

-   `https://github.com/adureychloe/ai-web3-school-cohort-0/blob/master/tasks/week2-final-proposal.md`
    

今天最重要的理解是：

> Agent commerce 的核心不是“让 agent 自动花钱”，而是让 agent 的商业动作变成可授权、可限制、可解释、可撤销、可审计的流程。

我现在把它拆成 8 步：

```
intent → quote → policy → confirmation → payment → delivery → acceptance → proof
```

其中：

-   AI 负责理解目标、拆任务、发现服务、比较报价、解释结果。
    
-   Web3 负责授权、付款、结算、receipt、权限撤销和可验证记录。
    
-   Human-in-the-loop 负责预算设置、新服务首次付款、高风险动作和最终验收。
    

下一步可以做一个很小的 demo：

1.  `services.json`：mock 2–3 个付费服务。
    
2.  `policy.json`：budget、allowlist、single payment limit、allowed token、allowed network。
    
3.  CLI / web 页面：用户输入 intent。
    
4.  Agent 选择 quote。
    
5.  Policy engine 输出 allow / deny / require human confirmation。
    
6.  模拟 x402 payment required 和 receipt。
    
7.  导出 `receipt.json` 和 `proof.md`。
    
8.  加入攻击用例：超预算、未知服务、prompt injection。
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->











今天继续 Week 2 主线：Payment / Commerce / Settlement。

前两次已经完成：

1.  AI × Web3 问题地图，并选择 Payment / Commerce / Settlement 作为主方向。
    
2.  Agent Wallet / Permission 策略，明确 agent 发起链上动作时必须有预算、allowlist、人工确认阈值和日志。
    

今天把它们合成一个更完整的商业流程：

> 一个 research / learning agent 如何在用户预算内购买小额付费服务，并留下可审计 proof？

今天完成了一份任务笔记：

-   `https://github.com/adureychloe/ai-web3-school-cohort-0/blob/master/tasks/week2-payment-commerce-flow.md`
    

覆盖内容：

-   谁下单、谁执行、谁验收、谁付款、谁仲裁。
    
-   最小 payment / commerce flow：intent、plan、discovery、quote、policy check、human review、execute、deliver、acceptance、payment / refund / dispute、proof。
    
-   报价、预算授权、执行、交付、验收、付款、退款、记录证明分别怎么实现。
    
-   x402、EIP-3009、ERC-8004、wallet policy 分别解决哪一段。
    
-   一个最小 JSON proof log 格式。
    
-   失败和争议处理策略。
    

今天最重要的理解是：

> Agent commerce 的最小闭环不是“agent 自动付款”，而是“intent → quote → policy → payment → delivery → acceptance → proof”。

几个具体结论：

1.  x402 适合做付费 API / agent endpoint 的小额支付入口，但它只解决付款协议，不解决全部信任和验收问题。
    
2.  EIP-3009 可以让付款像“签一次受限授权”，但仍然必须被金额、deadline、nonce、token、收款方和 policy 限制。
    
3.  ERC-8004 可以帮助 agent 发现服务、检查身份和 reputation，但不能替代用户判断。
    
4.  Wallet policy / guard 是安全边界：它决定哪些付款可以自动执行，哪些必须人工确认。
    
5.  Proof log 很关键，因为 agent commerce 需要向用户解释：为什么付款、付给谁、拿到了什么、是否符合预算。
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->












昨天我选择的 Week 2 主线是 Payment / Commerce / Settlement，也就是：Agent 如何帮助用户购买服务、完成交付、验收结果，并留下可审计的付款记录。

今天我把问题推进到更底层的钱包和权限问题。我的当前理解是：

-   Payment 不只是“把钱转出去”，还包括授权、限额、证明、退款路径和失败处理。
    
-   AI agent 不应该拿到无限制的钱包控制权。
    
-   钱包层应该把用户的自然语言目标，转换成有边界、可执行、可撤销的权限。
    
-   最安全的默认策略是：低风险步骤可以自动化，高风险动作必须由人确认。
    

由此我设计了一个 agent wallet 场景，画出从用户授权、agent 计划、policy 检查、付款、服务返回、日志记录到用户复核的执行流程。整理了一份权限策略，覆盖预算、可调用合约、可执行动作、人工确认阈值、撤销方式、日志记录和失败处理。具体：[https://github.com/adureychloe/ai-web3-school-cohort-0/blob/master/tasks/week2-agent-wallet-permission-strategy.md](https://github.com/adureychloe/ai-web3-school-cohort-0/blob/master/tasks/week2-agent-wallet-permission-strategy.md)
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->













今天进入 Week 2，我做了一张 AI × Web3 问题地图，覆盖 Payment、Identity、Wallet/Permission、Privacy/Security、Dev Tooling、Governance 六个方向。我的主线选择改为 Payment / Commerce / Settlement，因为它最直接地回答：Agent 如何在用户授权预算内购买服务、完成交付、验收结果，并留下可验证付款和收据。具体的笔记内容在：[https://github.com/adureychloe/ai-web3-school-cohort-0/blob/master/tasks/week2-ai-web3-problem-map.md](https://github.com/adureychloe/ai-web3-school-cohort-0/blob/master/tasks/week2-ai-web3-problem-map.md)

今天的关键收获：AI 负责理解任务、比较服务和判断交付是否达标；Web3 负责把报价、预算、付款、退款、收据和验证变成可检查机制。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->














## **开放 Agent 经济 (Open Agentic Economy)**

### **1\. AI 角色转变：从工具到“经济参与者”**

-   **演进过程**：在过去 18 个月中，大语言模型（LLM）已从简单的聊天机器人演变为能够编写代码、转移资金、做出决策、甚至聘用其他 Agent 的 **AI Agents**。
    
-   **新需求**：作为经济参与者，Agent 需要一套运行基础设施，用于支付、构建和达成承诺（Commitments）。
    
-   **挑战**：现有的人类互联网基础设施（如密码、银行账户）并不适合 Agent，因为 Agent 难以像人类一样保守秘密或建立法律契约。
    

* * *

### **2\. 为什么选择以太坊？（CROPS 设计原则）**

以太坊被视为 Agent 经济的中立基础设施，其核心优势源于 **CROPS** 设计原则：

| 缩写 | 原则 | 含义 |
| --- | --- | --- |
| C | Censorship Resistance (抗审查) | 没有任何单一实体可以拦截合法的交易或代码执行。 |
| R | Open Source & Free (开源且免费) | 代码公开可审计，任何人都可以像搭积木一样分叉和构建。 |
| O | Privacy (隐私) | 通过 ZK 等技术在不泄露底层数据的情况下证明真实性。 |
| P | Security (安全) | 确保区块链始终按照既定代码逻辑运行。 |
| S | Security (安全) | 系统的稳健性。 |

* * *

### **3\. 关键技术标准与原语**

-   **ERC-8004：Agent 身份与信誉**
    
    -   为 AI Agent 提供可验证的身份（Identity）和信誉（Reputation）标准。
        
    -   包含注册表和信誉评分系统，帮助用户或其它 Agent 判断某个软件是否可信。
        
-   **ERC-8183：机器间支付**
    
    -   实现“支付请求”状态码，支持机器与机器之间使用稳定币进行直接支付。
        
    -   无需信用卡、API 密钥或复杂的开票流程。
        

* * *

### **4\. 实际应用案例与未来路线图**

-   **公共物品资助（EF 试点）**：以太坊基金会试点让 AI Agent 协助分配资助。人类设定价值偏好，由 Agent 在数以百计的 GitHub 仓库中进行大规模的判断和资金分配。
    
-   **可编程货币的优势**：通过智能合约设定规则（例如：Agent 钱包仅限支付 10 美元且只能向特定供应商支付），确保 Agent 的行为符合人类预期。
    
-   **路线图规划**：
    
    -   基于 TEE 的 ERC-8004 验证。
        
    -   自动化的 Agent 与智能合约谈判。
        
    -   与 AI 框架和企业工具更深度的集成。
        

* * *

### **5\. 开发者资源**

-   **ETH Skills**：提供给 Agent 的技能文件，包含以太坊构建知识及如何使用 ERC-8004 协议。
    
-   **官方网站**：
    
    -   [ai.ethereum.foundation](http://ai.ethereum.foundation)
        
    -   [8004.org](http://8004.org)
        

> **总结**：以太坊通过去中心化的结算和协调层，让机器经济在保持人类主权、所有权和控制权的前提下实现大规模协作
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->















今天继续 AI × Web3 School 学习，完成了 EOA、智能账户、多签账户的权限差异比较。我的核心理解是：这三者不是简单的钱包形态差异，而是三种不同的权限模型。EOA 简单直接，但控制权高度集中在一把私钥上；智能账户把账户规则变成可编程逻辑，可以支持 session key、限额、过期、恢复和撤销，更适合受限 Agent workflow；多签则把高风险操作拆成多人确认，适合团队资金、DAO treasury 或协议管理。对 AI × Web3 来说，关键不是让 Agent “更自由地控制钱包”，而是让账户边界更明确：Agent 可以读、解释、准备、检查和验证，但涉及签名、转账、授权、合约写入时，必须有清晰的权限限制和人工/多方确认。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->
















今天继续 AI × Web3 School 学习，重点从 Web3 基础概念推进到 AI × Web3 的连接层：chain-aware context、Web3 tool use、agent workflow、agent wallet 和 account abstraction。我的核心收获是：Agent 进入 Web3 后，最关键的问题不是“能不能执行”，而是“在什么边界内执行、谁授权、怎么验证、出错后如何撤销”。我现在更清楚地理解到，AI 可以帮助读取链上上下文、解释合约、生成交易草稿、做风险提示和记录 proof，但不能直接接触用户主私钥，也不能拥有无限交易权限。更合理的方向是把 Agent 的能力放进可限制、可过期、可撤销、可审计的钱包/账户规则里。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->

















今天继续 AI × Web3 School 的学习，重点从 AI Agent 的安全边界转到 Web3 基础概念：Wallet、Network、Transaction、Gas、Smart Contract、Testnet 和 Block Explorer。我的核心收获是：钱包不是一个简单的登录按钮，而是用户账户控制权、签名、交易和风险确认的边界；网络也不是背景环境，而是交易能否被传播、打包、执行和验证的基础。把这两点和 AI Agent 放在一起看，我更清楚地意识到：Agent 可以帮助读文档、整理 ABI、解释交易、生成操作清单和检查风险，但不能接触助记词/私钥，也不能替用户自动签名、授权或发送交易（要实现自动交易Agent应该给Agent一个单独的钱包）。下一步准备做一次测试网交易，把钱包确认、gas、tx hash 和区块浏览器验证串起来。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->


















今天继续学习 AI × Web3 School，重点是 AI/Context 和 AI/Agent。我现在的理解是：Context 不是简单地“塞很多信息”，而是把目标、约束、历史和任务状态组织成模型当前真正需要的工作环境；Agent 则是在这个基础上加入工具和执行循环，让模型从“会回答”变成“能完成任务”。放到 Web3 场景里，这种差别特别重要，因为链上操作涉及网络选择、地址确认、费用、权限和不可逆风险，所以任何真正的 Agent 都应该先分析，再等待用户确认，最后才执行。今天的收获是，我开始把 AI Agent 当成一个“有边界的执行体”来理解，而不是一个更会聊天的模型。下一步会继续读 Web3/Wallet 和 Web3/Network，把这些概念和链上环境连起来。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->



















今天推进 AI × Web3 School 的基础学习，重点看 LLM 和 Prompt。我的理解是，LLM 本身更像是语言和推理引擎，而 Prompt 是把任务、上下文、约束和输出格式组织起来的接口。放到 Web3 场景里，Prompt 不能只是“帮我操作钱包”这种模糊指令，而必须明确网络、权限、资金风险、是否需要用户确认、以及 proof-of-work 记录。今天最大的收获是：AI Agent 的能力边界，很大程度上取决于我们如何设计上下文、工具权限和确认流程。下一步会继续学习 Context 和 Agent，把它们和链上状态、钱包权限连接起来。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->




















今天观看了开营回放，创建好了hermes agent课程助手，并新建了私人学习仓库

![屏幕截图 2026-05-18 224107.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/adureychloe/images/2026-05-18-1779116602566-_____2026-05-18_224107.png)![屏幕截图 2026-05-18 223951.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/adureychloe/images/2026-05-18-1779116614122-_____2026-05-18_223951.png)![屏幕截图 2026-05-18 224128.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/adureychloe/images/2026-05-18-1779116622183-_____2026-05-18_224128.png)![屏幕截图 2026-05-18 230117.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/adureychloe/images/2026-05-18-1779116629199-_____2026-05-18_230117.png)
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
