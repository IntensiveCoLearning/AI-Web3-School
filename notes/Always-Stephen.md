---
timezone: UTC+8
---

# Always-Stephen

**GitHub ID:** Always-Stephen

**Telegram:** @Stephenalys

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->
\# Week 2 Day 4 — Co-learning & 冲刺 Week 2 例会

**日期**: 2026-05-28

**主线方向**: Dev Tooling / Agent Workflow

**WCB 学习面板**: [https://web3career.build/zh/programs/AI-Web3-School#tab=learning](https://web3career.build/zh/programs/AI-Web3-School#tab=learning)

**课程参考**: \[Notion Week 2\]([https://ethpanda.notion.site/Week-2-AI-Web3-354bbd63be87818a83abdca6da1e50cf?pvs=74](https://ethpanda.notion.site/Week-2-AI-Web3-354bbd63be87818a83abdca6da1e50cf?pvs=74))

\---

\## 今日活动

| 时间 | 活动 | 状态 |

|------|------|------|

| 19:00 | Co-learning｜任务推进与答疑 | |

\### Co-learning 答疑

\- **Zoom**: [https://us06web.zoom.us/j/89182753424?pwd=MXUUjEdw7aUdt7yhZxmRfSXKuHeM3a.1](https://us06web.zoom.us/j/89182753424?pwd=MXUUjEdw7aUdt7yhZxmRfSXKuHeM3a.1)

\- 会议号: 891 8275 3424 / 密码: 815963

\- ⚠️ 无回放

\> 原定今晚 20:00 [Z.AI](http://Z.AI) 1st 已替换为明天 5/29 19:00 的 Women Builders in AI × Web3

\---

\## 学习笔记

\### 关联课程：模块 E — Agent DeFi Execution

\> Week 2 的新增模块，聚焦 agent 如何安全执行链上操作。跟你的 Smart Contract Analyzer 方向互补——分析完合约后，agent 可能还要执行。

**核心问题**（课程）：

\- agent 参与 DeFi 时，真正执行的是什么链上动作？

\- 如何限制 agent 的预算、协议、token、合约、时间窗口和最大损失？

\- swap/approve/deposit/borrow/withdraw/redeem 各自有什么风险？

\- 哪些动作可自动执行？哪些必须人工确认？

\- 执行完成后如何通过 tx record 和 audit log 进行验证？

**典型协议速览**（课程）：

| 协议 | 学习重点 |

|------|---------|

| Uniswap | DEX swap、slippage、allowance、MEV、交易前模拟 |

| Aave | 存款、借贷、健康因子、清算风险、oracle 风险 |

| Polymarket | 预测市场下注、赎回、合规边界 |

| Hyperliquid | 链上永续合约、订单类型、杠杆风险、授权边界 |

| Lido/Jito | 流动性质押、收益凭证、赎回延迟、脱锚风险 |

**安全材料**（课程推荐）：

\- \[OpenAI: 理解提示词注入攻击\]([https://openai.com/index/prompt-injections/](https://openai.com/index/prompt-injections/))

\- \[OWASP: 敏感信息披露\]([https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/](https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/))

\- \[OWASP: 代理过剩\]([https://genai.owasp.org/llmrisk/llm062025-excessive-agency/](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/))

\### 今日产出

\- **MCP Server 全部 4 个模块完成**`experiments/smart-contract-analyzer/`

\- `server.py` — MCP 主入口，4 个 Tool 全部实现

\- `etherscan_client.py` — Etherscan API 封装

\- `abi_parser.py` — ABI 解析（函数查找、分类、摘要）

\- `security_rules.py` — 8 条安全规则引擎

\- 已通过导入测试和安全规则逻辑验证

\### MCP Server 12 个文件的最终结构

\`\`\`

experiments/smart-contract-analyzer/

├── [server.py](http://server.py) # MCP Server 主入口 (stdio + HTTP调试)

├── etherscan\_[client.py](http://client.py) # Etherscan API 封装

├── abi\_[parser.py](http://parser.py) # ABI 解析工具集

├── security\_[rules.py](http://rules.py) # 8条安全审计规则

├── requirements.txt # mcp\[cli\] + requests

└── [README.md](http://README.md) # 项目文档

\`\`\`

**下一步**（配好 ETHERSCAN\_API\_KEY 后即可在 Hermes 中使用）：

\`\`\`yaml

\# ~/AppData/Local/hermes/config.yaml

mcp\_servers:

\- name: contract-analyzer

command: python

args: \["C:/Users/psxxc/ai-web3-school-cohort-0/experiments/smart-contract-analyzer/[server.py](http://server.py)"\]

\`\`\`

\---

\## Week 2 交付清单（明天 20:00 例会前）

对照课程「本周总交付」逐条检查：

| # | 交付物 | 状态 | 产出 |

|---|--------|:--:|------|

| 1 | AI × Web3 问题地图（≥5 方向） | ⬜ | |

| 2 | 方向选择说明（为什么不是纯 AI/纯 Web3） | ✅ | `proposals/week2-dev-tooling-proposal.md` |

| 3 | 问题拆解（参与方、流程、AI作用、Web3机制、自动化边界） | ✅ | proposal + `research/mcp-vs-a2a.md` |

| 4 | 项目初步 proposal | ✅ | `proposals/week2-dev-tooling-proposal.md` |

| 5 | 参考资料清单（≥5 条） | ⬜ | 分散在各 research 文档中，需汇总 |

| 6 | 主方向深挖包（流程图+场景+反例+风险+验证计划） | ⚠️ | proposal 有基础，需补充流程图和反例 |

| 7 | 方向 backlog（未选方向+不选原因） | ⬜ | |

\> 课程警告：「如果 Week 2 结束后，学员仍然只是在罗列热门名词，无法说明一个方向中的 AI 作用、Web3 机制、验证方式和风险边界，那么这一周还没有真正完成。」

\---

\## 明日预告 (5/29 — Week 2 最后一天)

| 时间 | 活动 | Zoom |

|------|------|------|

| 19:00 | Women Builders in AI × Web3 | \[Zoom\]([https://us06web.zoom.us/j/83554099273?pwd=mW8dOaJOhLplm8xFJc1rSIjtMrEg2x.1](https://us06web.zoom.us/j/83554099273?pwd=mW8dOaJOhLplm8xFJc1rSIjtMrEg2x.1)) 密码: 164100 |

| **20:00** | **Week 2 例会｜成果分享+Week 3 预告** | \[Zoom\]([https://us06web.zoom.us/j/87492556811?pwd=yCa7M68zCp1y1f1Q5J7aYa0e3PVHIx.1](https://us06web.zoom.us/j/87492556811?pwd=yCa7M68zCp1y1f1Q5J7aYa0e3PVHIx.1)) 密码: 033931 |

**X 直播/回放**:

\- Women Builders: [https://x.com/i/broadcasts/1mxPaLvzjOgKN](https://x.com/i/broadcasts/1mxPaLvzjOgKN)

\- Week 2 例会: [https://x.com/i/broadcasts/1dGYljZYLlZKX](https://x.com/i/broadcasts/1dGYljZYLlZKX)

\---

\## WCB 打卡草稿

\`\`\`

#AIWeb3School #Week2Day4

今天冲刺 Week 2 交付：

1\. 对照课程 7 条总交付逐条检查进度

2\. 学习了 Agent DeFi Execution 模块——Uniswap/Aave/Hyperliquid 等协议的安全执行

明天周五 20:00 是 Week 2 例会，准备分享内容中。

\`\`\`

\- 打卡链接: [https://web3career.build/zh/programs/AI-Web3-School#tab=learning](https://web3career.build/zh/programs/AI-Web3-School#tab=learning)

\- 提交状态: pending
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->

#AIWeb3School #Week2Day2

今天三件事：

1\. 深入对比了 MCP vs A2A，搞清楚了「Agent↔Tool」vs「Agent↔Agent」的区别

2\. 用 Hermes 分析了一个真实合约（Uniswap V2 Router），输出了完整的合约解读

3\. 完成了 Week 2 proposal 初稿：AI-Powered Smart Contract Analyzer (MCP Server)

链接：

\- MCP vs A2A: github.com/Always-Stephen/ai-web3-school-cohort-0/blob/master/research/mcp-vs-a2a.md

\- 合约分析: github.com/Always-Stephen/ai-web3-school-cohort-0/blob/master/research/uniswap-v2-router-analysis.md

\- Proposal: github.com/Always-Stephen/ai-web3-school-cohort-0/blob/master/proposals/week2-dev-tooling-proposal.md
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->


\# Week 2 Day 1 — AI × Web3 交叉研究方向选择

**日期**: 2026-05-25

**主线方向**: Dev Tooling / Agent Workflow

**WCB 学习面板**: [https://web3career.build/zh/programs/AI-Web3-School?tab=learning](https://web3career.build/zh/programs/AI-Web3-School?tab=learning)

\---

\## 任务 1：AI × Web3 问题地图

\> 六个方向速览：每个方向的 AI 作用、Web3 机制、为什么缺一不可。

\`\`\`

AI × Web3 问题空间地图

┌─────────────────────────────────────────────────────┐

│ │

│ ┌──────────┐ ┌──────────────┐ ┌───────────┐ │

│ │ Payment/ │ │ Identity/ │ │ Wallet/ │ │

│ │ Commerce │ │ Reputation │ │ Permission│ │

│ ├──────────┤ ├──────────────┤ ├───────────┤ │

│ │AI: 报价 │ │AI: 能力描述 │ │AI: 意图理解│ │

│ │ 谈判 │ │ 需求匹配 │ │ 风险判断 │ │

│ │ 验收 │ │ 信任评估 │ │ 策略生成 │ │

│ │Web3:支付 │ │Web3:链上身份 │ │Web3:签名 │ │

│ │ 结算 │ │ 可验证记录 │ │ 权限控制 │ │

│ │ 托管 │ │ 信誉stake │ │ 审计日志 │ │

│ └──────────┘ └──────────────┘ └───────────┘ │

│ │

│ ┌──────────┐ ┌──────────────┐ ┌───────────┐ │

│ │ Privacy/ │ │ Dev Tooling │ │Governance/│ │

│ │ Security │ │ ← 我的主线 │ │Coordination│ │

│ ├──────────┤ ├──────────────┤ ├───────────┤ │

│ │AI: 攻击 │ │AI: 代码生成 │ │AI: 提案 │ │

│ │ 检测 │ │ 合约解释 │ │ 总结 │ │

│ │ 异常发现 │ │ 测试编写 │ │ 行动项 │ │

│ │Web3:本地 │ │ 文档维护 │ │ 跟踪 │ │

│ │ 执行 │ │Web3:链上读 │ │Web3:链上 │ │

│ │ 可验证 │ │ 交易验证 │ │ 投票 │ │

│ │ 隐私 │ │ repo透明 │ │ 提案记录 │ │

│ └──────────┘ └──────────────┘ └───────────┘ │

│ │

└─────────────────────────────────────────────────────┘

\`\`\`

\### 六个方向一句话 + AI/Web3 角色

| # | 方向 | 核心问题 | AI 做什么 | Web3 提供什么 | 缺一不可？ |

|---|------|---------|----------|-------------|----------|

| 1 | **Payment/Commerce** | agent 怎么自动花钱/收钱？ | 报价、谈判、验收结果 | 支付、结算、托管、收据 | ✅ AI 判断交付质量，Web3 保证不可逆结算 |

| 2 | **Identity/Reputation** | 怎么知道 agent 能做什么/值不值得信？ | 能力描述、需求匹配、信任评估 | 链上身份、可验证记录、信誉 stake | ✅ AI 理解能力语义，Web3 防伪造 |

| 3 | **Wallet/Permission** | agent 碰钱包时怎么防出事？ | 意图理解、风险判断、策略生成 | 签名控制、权限分层、审计日志 | ✅ AI 做智能判断，Web3 做硬约束 |

| 4 | **Privacy/Security** | agent 执行时怎么防攻击/泄密/越权？ | 攻击检测、异常发现、输入过滤 | 本地执行、可验证隐私、抗审查 | ✅ AI 发现威胁，Web3 提供执行隔离 |

| 5 | **Dev Tooling** ← 我的主线 | AI 怎么帮 Web3 开发者？ | 代码生成、合约解释、测试编写、文档维护 | 链上可读数据、repo 透明、交易可验证 | ✅ AI 降低开发门槛，Web3 数据开放使 AI 可读 |

| 6 | **Governance/Coordination** | AI 怎么帮 DAO/社区做决策？ | 提案总结、行动项跟踪、意见聚合 | 链上投票、提案记录、透明执行 | ✅ AI 处理信息过载，Web3 保证投票不可篡改 |

\### 统一判断框架（Week 2 要求对每个方向回答 7 个问题）

以 Dev Tooling 为例：

1\. **没有 AI，问题是否成立？** → 成立但低效：开发者手动读合约/写测试，效率瓶颈明显

2\. **没有 Web3，问题是否成立？** → 不成立：Web3 的合约 ABI、交易、event log 是 AI 能读的开放数据

3\. **谁发起/执行/付款/验收/承担风险？** → 开发者发起和验收，AI 执行分析和生成，开发者承担代码风险

4\. **哪些可自动化，哪些必须人工？** → ✅ 自动化：合约解释、测试生成、文档维护；❌ 必须人工：架构决策、安全审计、部署确认

5\. **结果如何验证？** → 生成的代码跑测试、合约解释对照源码、文档对照 ABI

6\. **它更像什么层？** → 应用层体验 + 开发者工具

7\. **最可能失败在哪？** → AI 生成的代码有 bug（幻觉/推理错误），开发者过度信任不验证

\---

\## 任务 2：为什么 Dev Tooling 需要 AI + Web3 同时出现

\### 为什么不是纯 AI 问题？

纯 AI 可以帮你写代码，但：

\- 它读不到链上的合约 ABI、交易记录、event log（这些数据在链上，不在 AI 训练数据里）

\- 它不知道这个合约在主网上已经被黑过、被审计过、还是刚部署的

\- 它无法验证生成的代码在真实链上运行的结果

\### 为什么不是纯 Web3 问题？

纯 Web3 工具（Etherscan、Remix、Hardhat）已经存在，但：

\- 读一个陌生合约的逻辑需要手动翻源码

\- 写测试覆盖所有边界条件很费时间

\- 文档和代码同步维护几乎没人做到

\### 交叉点在哪？

**AI 的能力**（理解语义、生成代码、总结信息）× **Web3 的数据**（链上公开、ABI 结构化、交易可追溯）= Dev Tooling 的核心价值。

具体场景：

\- 给 agent 一个合约地址 → 自动读 ABI + 源码 → 解释这个合约做什么 → 生成测试 → 输出文档

\- 给 agent 一笔交易哈希 → 自动解析 input data → 解释这笔交易做了什么 → 标记异常

这就是 Hermes 正在做的事的延伸。

\---

\## 任务 3：Hermes Workflow 梳理 → 可复用文档

\### 当前 Workflow（as-is）

\`\`\`

每天学习流程：

14:00 提醒 → 打开 WCB Learning → 读 Handbook → 记笔记到 daily/[YYYY-MM-DD.md](http://YYYY-MM-DD.md) → git push

20:00 提醒 → 检查进度 → 生成打卡草稿 → WCB 提交状态

涉及工具：

\- terminal: git 操作、文件读写

\- file: 笔记创建/更新

\- session\_search: 回顾之前讨论

\- memory: 持久化偏好和常识

\- WCB API: 获取任务列表和提交状态

\`\`\`

\### 可复用 Skill（to-be）

\`\`\`yaml

Name: ai-web3-learning-session

描述: 执行一次完整的 AI×Web3 School 学习流程

步骤:

1\. 通过 WCB API 拉取当前周任务 (tasks.listForLearner)

2\. 读取 Handbook 对应章节

3\. 创建/更新 daily note

4\. 完成实践任务（代码/文档/图表）

5\. Git add + commit + push

6\. 更新 WCB 任务状态

\`\`\`

\---

\## 今日收获

\- \[x\] 完成 AI×Web3 六个方向速览

\- \[x\] 选定 Dev Tooling / Agent Workflow 为主线

\- \[x\] 用统一判断框架分析了 Dev Tooling 方向

\- \[x\] 写出了「为什么不是纯AI/纯Web3问题」的分析

\- \[x\] 梳理了 Hermes workflow 现状

\## 下一步（Week 2 Day 2）

\- \[ \] 深入 MCP vs A2A 的区别（读官方文档）

\- \[ \] 完成 Week 2 任务要求的 proposal 初稿

\- \[ \] 尝试让 Hermes 读一个合约地址并解释

\---

\## WCB 打卡草稿

**日期**: 2026-05-25

**本周**: Week 2 - 交叉研究与方向选择

**进度**: 完成方向速览、选定 Dev Tooling 主线、完成判断框架分析

**产出**:

\- daily/[2026-05-25.md](http://2026-05-25.md)（问题地图 + 方向分析 + workflow 梳理）

\- 选中 Dev Tooling / Agent Workflow 方向

**WCB 提交**: 待提交
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->



\# Daily Note — 2026-05-22

\## 今日学习：Web3 网络（Network）基础

\- **Handbook**: [https://aiweb3.school/zh/handbook/web3/network/](https://aiweb3.school/zh/handbook/web3/network/)

\- **时间**: ~2h

\- **状态**: ✅ 已完成

\## 核心收获

\### 第一性原理

区块链网络的核心不是"存数据"，而是让\*\*互不信任的参与者对状态变化达成一致\*\*。

| 传统应用 | 链上应用 |

|----------|----------|

| 服务器直接更新数据库 | 交易需节点传播→执行→打包→验证→确认 |

| 即时响应 | 按区块批量推进，有延迟和费用 |

| 信任服务器 | 信任共识机制 |

\### 知识链路

\#### Block（区块）⭐⭐ 初级

\- 区块 = 交易批量提交和排序的单位

\- 三个关键理解：交易有顺序、区块有 gas limit、链式可验证历史

\#### Consensus（共识）⭐⭐ 中级

\- 网络决定"哪段历史有效"的机制

\- 影响：交易需等 confirmation，区块可能重组，RPC 异常时状态延迟

\#### PoS（权益证明）⭐⭐ 中级

\- 用质押+惩罚机制替代 PoW，网络安全来自经济质押

\- 不免费——来自验证者质押 ETH 的真金白银

\#### Testnet（测试网）⭐⭐ 初级

\- 测流程 OK，不能替代主网安全审查

\- 项目记录：部署在哪条网、合约地址、RPC、chain id

\#### L2（二层网络）⭐⭐ 中级

\- 优势：费用低、确认快；代价：桥、提现等待、跨链复杂度

\- 产品设计必须明确当前网络和合约地址

\#### Rollup ⭐⭐⭐ 高级

\- Optimistic vs ZK Rollup：证明方式、提现延迟、数据可用性不同

\- 核心判断：降低单笔成本，但没消除链上系统复杂度

\### AI × Web3 视角

\> Agent 读链上状态时，不能靠模型"猜"。必须返回结构化信息：chain id、RPC、区块高度、确认数、explorer 链接。

\### 最小实践（待完成）

\- \[ \] 测试网领 ETH → 发转账

\- \[ \] 区块浏览器查交易状态、区块号、gas、logs

\- \[ \] 记录 pending→confirmed 耗时

\- \[ \] 切另一条网，观察同一地址差异

\- \[ \] 思考：AI Agent 辅助时，哪些字段必须由工具读取？

\## 产出的可交互产物

\- \[Web3 概念地图\](experiments/web3-concept-map.html) — 10 个概念 + AI × Web3 Bridge 交叉分析

\## 今日活动

\- 🔴 19:00 Co-learning 答疑（Zoom: 891 8275 3424 / 815963）

\- 🔴 20:00 **Week 1 例会**（Zoom: 858 2160 2823 / 330279）

\## Handbook 关联

\- \[\[Cryptography\]\] — 哈希和签名是交易底层基础

\- \[\[Wallet\]\] — 钱包是签名入口

\- \[\[Smart Contract\]\] — 合约是交易目标

\- \[\[Account Abstraction\]\] — Smart Account 与 L2 结合

\- \[\[Chain-aware Context\]\] — 链上状态如何进入 Agent 上下文

\## Check-in Draft

\`\`\`

#AIWeb3School #Day6

今日学习 Web3 Network 基础：

1\. 理解区块链第一性原理：让互不信任的参与方对状态变化达成一致

2\. 掌握 Block → Consensus → PoS → Testnet → L2 → Rollup 完整链路

3\. 关键洞察：AI Agent 读链上状态不能靠"猜"，必须返回结构化可验证信息

4\. 产出 Web3 概念地图交互页面（10 概念 + Bridge 交叉分析）

5\. 参加 Week 1 例会

下一步：完成测试网交易追踪最小实践

\`\`\`

\## WCB Submission

\- 打卡链接: [https://web3career.build/zh/programs/AI-Web3-School#tab=learning](https://web3career.build/zh/programs/AI-Web3-School#tab=learning)

\- 提交状态: pending
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->




\# Daily Note — 2026-05-21

\## 今日课程

🔴 **AI 下乡计划｜AI 在 Web3 的应用**（20:00 直播）

\- Zoom: 861 4916 2743 / 密码 856868

\- 回放: [https://x.com/i/broadcasts/1kJzDMjMVBwKv](https://x.com/i/broadcasts/1kJzDMjMVBwKv)

\- 状态: ✅ 已参加

\## 今日收获

\### AI 下乡计划 — 关键笔记

\-

\## 其他进展

\### Hermes Agent 深度配置

\- WebUI 成功迁移到 Windows 原生运行（8788 端口），与 CLI 共享同一 HERMES\_HOME

\- 微信 Gateway 正常运行，已配对

\- GitHub 学习仓库 + Gitee → 最终只保留 GitHub

\- Obsidian Vault 知识库接入，建立完整 ingest 工作流

\### 知识库建设

\- 摄入文章：「比龙虾更强？我是如何用 Hermes 打造 7x24 全职员工」

\- 提炼核心工作流契约：丢什么 → 干什么 → 留下什么 → 怎么复用

\- 创建 Skill`stephen-workflowgithub-demand-radar`

\### 学习工具链

\- WCB Agent API 连接成功（学号 #4209）

\- Learning Agent 完整初始化

\- 每日提醒：14:00 + 20:00

\## Handbook 关联

\- \[\[AI 下乡计划\]\] 涉及 AI 在真实场景中的落地应用

\- 关联 \[\[AI\_Security\]\]、\[\[Verifiable\_AI\]\]、\[\[Agent\_Workflow\]\]

\## Check-in Draft

\`\`\`

#AIWeb3School #Day5

今日完成：

1\. ✅ AI 下乡计划｜AI 在 Web3 的应用（直播）

2\. ✅ Hermes Agent 完整配置：WebUI + Gateway + Obsidian 知识库

3\. ✅ 建立 6 条工作流契约：链接/群聊/GitHub/文章/重复任务/定时任务

4\. ✅ WCB Agent API 连接，学习工具链打通

5\. ✅ 补完 Week 1 全部笔记（5/17-5/21）

明天预告：

\- 19:00 Co-learning 答疑（Zoom: 891 8275 3424 / 815963）

\- 20:00 Week 1 例会（Zoom: 858 2160 2823 / 330279）

\`\`\`

\## WCB Submission

\- 打卡链接: [https://web3career.build/zh/programs/AI-Web3-School#tab=learning](https://web3career.build/zh/programs/AI-Web3-School#tab=learning)

\- 提交状态: pending
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->





今天参加了Web3 运行原理的课程，补齐了账户、钱包、签名、交易、Gas、合约、区块浏览器和测试网验证如何组成一次完整链上操作等知识，并且继续学习hermes的进阶玩法
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->






今天配置好了hermes，并观看了18号8pm的**AI时代，Web3开发者需要具备的基础知识和架构能力**的回放视频，学习了钱包、gas、ai的一些基础概念
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->







今天观看了开学营的回放视频，参与了co-learning的会议，并打算开始自行配置Hermes
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
