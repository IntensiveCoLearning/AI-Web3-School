---
timezone: UTC+8
---

# gaharietzhang

**GitHub ID:** gaharietzhang

**Telegram:** @gahariet

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->
🤖 **AI下乡计划实操笔记：用Mac mini搭建24小时AI工作流**

这份笔记基于周报中 Sunny 分享的理念，结合社区教程整理而成。

📌 **第一阶段：核心硬件与系统准备**

在动手前，先让你的 Mac mini 做好“7x24小时值守”的准备。

**硬件基础**

**设备**：Mac mini（Intel 或 Apple Silicon 均可，M1/M4 芯片能效比更佳）。

**内存 (RAM)**：**16GB 是起点**。仅调用云端 API（如Claude）足够；若未来想跑本地模型，64GB 更佳。

**存储 (ROM)**：256GB SSD 起步，用于存放系统和日志。

**系统设置 (将Mac mini“服务器化”)**

**关闭休眠**：在终端执行以下命令，禁止硬盘和系统休眠，仅允许显示器关闭：

**开启远程管理**：进入 **系统设置** → **通用** → **共享** → 开启 **远程登录(SSH)**。这样就能从主力电脑连过去操作了。

**网络连接**：建议使用**有线网络**，这是保障 24 小时在线的根基。

**电源**：如有条件可配备 UPS（不间断电源），防止意外断电。

🛠️ **第二阶段：核心软件安装 (保姆级命令行)**

打开 Mac mini 的“终端”应用，按顺序执行以下命令（建议直接复制粘贴）。

**安装 Homebrew (Mac的软件包管理器)**

**安装 Node.js (OpenClaw 的运行环境)**

**关键**：版本必须 **≥22.x**。

使用 Homebrew 安装并配置环境变量：

**一键安装 OpenClaw (前身为 Clawdbot)**

使用官方脚本（推荐），它会自动处理大部分依赖：

⚙️ **第三阶段：配置向导 (连接AI大脑与消息入口)**

安装完成后，在终端输入 **openclaw onboard --install-daemon** 启动配置向导。

**步骤 1：选择 AI 模型 (大脑)**

**仅使用云端API（推荐新手）**：选择 **Anthropic** (Claude) 或 **OpenAI** (GPT)，然后粘贴你的 API Key。周报中提到的 **Qwen (千问)** 也是性价比不错的选择。

**使用本地模型（进阶）**：选择 **Ollama**，需提前在 Mac 上装好 Ollama 并拉取模型（如 **qwen2.5:7b**）。

**步骤 2：连接消息平台 (交互入口)**

强烈推荐 **Telegram** 作为控制端，配置最稳定。

在 Telegram 里关注 **@BotFather**，创建机器人并拿到 **Token**，在向导中粘贴即可。

对飞书_/_钉钉有需求的，可参考搜索结果中的详细配置。

**步骤 3：完成配置**

向导会让 AI 进行自检，看到 **Verification successful** 就成功了。选择将 OpenClaw 安装为系统服务（**LaunchAgent**），实现开机自启。

🚀 **第四阶段：启动与远程访问**

**启动服务**：执行 **openclaw gateway**，看到 **Gateway running on** [**http://localhost:18789**](http://localhost:18789) 即表示运行成功。

**后台保活**：按 **Ctrl + C** 停止前台进程后，可用以下命令让它在后台静默运行：

**配置安全远程访问 (核心！)**

**禁止**直接将端口 **18789** 暴露到公网。

**最佳实践**：使用 **Tailscale** 搭建加密的虚拟局域网。

在 Mac mini 和你的常用电脑（或手机）上都安装 Tailscale。

登录后，两台设备会获得一个内网 IP（如 **100.x.x.x**）。

你随时随地都能通过 **http://\[Tailscale IP\]:18789** 安全地访问家里 Mac mini 的 AI 控制台。

💎 **总结与速查**

**一句话概括**：**OpenClaw + Mac mini + Telegram + Tailscale** = 你的专属私有 AI 管家。

**运维命令速查**（在 Mac mini 终端使用）：

**避坑提醒**：

Node.js **版本必须 ≥22.x**，否则会报错。

务必在 Mac mini **系统设置里禁用休眠**，否则睡觉后 AI 就下线了。

远程访问 **不要** 暴露端口，用 **Tailscale** 之类的 VPN 方案最稳妥。
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->

\### Long term Memory for AI Agents

\- **引言**

\- 主题：长期记忆在AI Agent中的重要性

\- 目标：探讨如何使AI Agent具备持续上下文和长期记忆能力

\- **Agent Memory概览**

\- 定义：跨越时间的意图和状态管理系统

\- 重要性：提升用户体验，确保任务连贯性

\- 应用场景：个人助理、编程助手、多模态交互等

\- **实践案例分析**

\- ChatGPT：跨会话连续性，记忆分层管理

\- 长期有效事实与偏好存储

\- 对话历史管理

\- Cloud Code：项目连续性，代码库管理

\- 长期运行支持

\- 代码库报告与约定

\- 小龙虾（开源项目）：移动办公潜力，记忆管理挑战

\- 执行链路长，失败率高

\- 扁平化记忆设计

\- **技术层面探讨**

\- Memory Engineering：操作系统级别的功能

\- 召回指标：确保记忆准确性

\- 数据管线处理：动态数据工厂

\- 分类学视角

\- Working Memory vs. Long-Term Memory

\- 语义记忆、事件记忆、程序性记忆

\- 交叉学科融合

\- 数据库技术

\- 上下文管理

\- 强化学习

\- **开发者面临的挑战与策略**

\- 短期记忆存储：摘要、压缩、直接丢弃

\- 长期记忆管理：优先级调整，冲突处理，整合优化

\- 数据管线优化：提升响应速度，避免信息丢失

\- **结论与未来展望**

\- 持续学习与进化：AI Agent的记忆能力是其核心竞争力

\- 跨领域合作：数据库、大模型、强化学习的融合创新

\- 社区交流：鼓励开发者分享经验，共同推进技术进步
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->


AI x Web3 School 例会 #1

\- **一、课程与活动安排**

\- 大学习与审核进度更新

\- Co-Learning活动调整至今日

\- 23号Coloring任务提醒

\- 无Co-Learning安排至明天

\- Canada任务时间调整

\- 马铃薯老师缺席，Baker披萨姐替代

\- 5月23日打卡任务提交提醒

\- 雪峰排行榜更新通知

\- 后两周课程安排：AI与Web3结合，黑客松启动

\- 每周五学员分享会，8点开始

\- **二、学习与打卡机制**

\- 双打卡入口：平台右侧与独立链接

\- 残酷供血平台介绍

\- 打卡失败不影响学习与任务参与

\- 学分激励与项目曝光机会

\- 打卡截图与信息提交要求

\- **三、技术与项目探讨**

\- Agent辅助学习与人工学习对比

\- Harmonization部署资料分享

\- Cobo Agency Wallet开发者助手文档

\- 智能体商业（Agency Commerce）项目介绍

\- Base链与智能体应用前沿

\- Virtues项目分析与市场现状

\- 推特插件Ex Hunt介绍

\- **四、社区与合作**

\- NCC数字游民社区小程序功能

\- OPC创客经济社区调研建议

\- 寻找标杆项目与聚合资源

\- AI与Web3结合的实践与创新

\- **五、学习方法与心得分享**

\- AI学习闭环构建：概念讲解、场景应用、任务拆解、动手实验、理解输出

\- Obsidian与Hermes协作搭建知识库

\- Web Coding技巧与CodeX使用经验

\- 跨学科应用：医学与Web3结合案例

\- **六、互动与支持**

\- 技术讨论与问题解答

\- 寻找队友与项目合作

\- 群内助教与运营支持

\- 未来分享会报名与资源获取

\- **七、会议总结与预告**

\- 本周排名与激励机制说明

\- 下周课程预告与时间调整

\- 社群动态与置顶消息查看

\- B站与X直播回放更新通知
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->



Web3 + AI 开发笔记：从 ERC-8004 / ERC-8183 到 Builder Path

这是一份面向 Web3 + AI 交叉领域开发者的系统性笔记，涵盖 Agent 经济的两大核心标准及其开发者成长路径。

\---

一、背景：Agent 经济时代的来临

AI Agent 正在从单纯的工具转变为独立的经济参与者。一个能生成专业级图像的 Agent 是一项值得付费的服务，一个能深度分析投资组合并执行交易的 Agent 正在管理真金白银。但当数十亿个自主 AI 代理相互交互时，一个根本性问题浮现：两个陌生的代理如何在链上确认对方可信？如何确保任务完成后再支付？如何建立可追溯的链上声誉？

ERC-8004 和 ERC-8183 正是以太坊对此的回答。

\---

二、ERC-8004：Agent 的链上身份与信任层

2.1 一句话定义

ERC-8004 不是 AI 模型，而是专为 AI 代理设计的链上「信任层」，或一个「去中心化的业务注册和登记系统」。

2026 年 1 月 29 日，以太坊正式在主网部署 ERC-8004，这套被命名为「Trustless Agents」的标准，为每个 AI 代理铸造链上身份 NFT，并建立可携带的信誉体系。

2.2 三大注册表架构

ERC-8004 的核心由三个去中心化注册表构成：

注册表 标准 功能 说明

身份注册表 ERC-721 (NFT) 为每个 Agent 分配唯一 AgentID 解决了代理跨平台迁移时身份重置的问题，AgentID 格式为 {namespace}:{chainId}:{identityRegistry}

信誉注册表 链上反馈记录 记录历史交互与评分 声誉与链上身份绑定，Agent 切换平台时过往记录仍可携带，类似「AI 代理的 FICO 信用分」

验证注册表 第三方背书 能力与合规性证明 允许 zkML 电路、TEE 环境或审计 DAO 为 Agent 的特定能力提供链上背书

关键洞察：身份注册表让 Agent 身份从标识符变为可拥有、可交易的「资本资产」——这正是「AgentFi」的开端。

2.3 核心机制

Agent 注册流程：

1\. 生成包含端点和规范的注册文件（JSON）

2\. 将文件托管在 IPFS 或 HTTP 上

3\. 调用身份注册合约在链上铸造 AgentID

支付与工作的绑定：ERC-8004 与 x402 支付标准集成，确保代理工作时，任务、评估和支付交易都位于同一层，验证 AI 代理的工作成果与支付报酬直接挂钩。

跨平台声誉可移植：Agent 的评价和评分可随其在网络上转移。声誉属于 Agent 本身而非平台，即使更换平台，过往记录也会随之转移并持续累积。

2.4 设计哲学：从资产级授权到行为级授权

ERC-8004 关注的不只是 AI Agent，而是任何可被授权、可独立执行行为的主体。它试图解决一个更根本的问题：授权能否被单独描述、独立校验，并在系统层面持续管理。

在传统 Web3 中，授权意味着一次私钥签名。但在 AI Agent 和自动化场景下，授权正在从一次性确认，演变为一种持续存在的执行能力。ERC-8004 试图为此建立清晰的权限模型，让授权本身成为可描述、可约束、可管理的对象。

2.5 部署现状

截至 2026 年 3 月，主网累计注册 Agent ID 已超过 2 万。身份注册表和信誉注册表已在约 30 条区块链网络上部署。初期采用呈现清晰的「主网验证 + L2 扩展」特征，身份铸造依赖主网安全性，信誉更新与验证查询则在 Layer 2 低成本执行。

\---

三、ERC-8183：Agent 的商业协议层

3.1 一句话定义

ERC-8183 是围绕「任务—交付—结算」全生命周期的链上商业基础设施规范。

由 Virtuals Protocol 与以太坊基金会 dAI 团队联合提出，旨在为 AI Agent 之间的商业交易提供链上基础设施。该标准通过 Job 原语、链上托管、任务提交与评估机制，构建了一个去中心化、可验证的 Agent Commerce 体系。

3.2 核心机制：Job 原语与三方角色

每个 Job 包含三个参与方：

角色 职责 可以是

Client 发布任务并提供资金 钱包地址

Provider 执行任务并提交结果 AI Agent / 合约

Evaluator 判断任务是否完成，决定资金结算 AI Agent / 智能合约 / DAO 多签

Job 生命周期状态机：

\`\`\`

Open → Funded → Submitted → Terminal

├── Completed：资金释放给 Provider

├── Rejected：资金退回 Client

└── Expired：任务过期自动退款

\`\`\`

3.3 与 ERC-8004 的协同

ERC-8004 与 ERC-8183 形成分层协同：

· ERC-8004 提供 Agent 的身份发现与信誉验证，回答「这个 Agent 是谁、值得信任吗？」

· ERC-8183 提供商业交易的协议框架，回答「如何安全地进行任务委托与结算？」

两者共同构成 CertiK 所描述的 Agent Economy 三大技术支柱中的两个：

层级 标准 职责

身份层 ERC-8004 Agent 的可识别性与可验证性

商业层 ERC-8183 任务委托、托管与结算协议

支付层 x402 自主微支付与价值交换

3.4 应用场景

ERC-8183 的最小化托管系统可应用于从小型任务（如图像生成）到大规模任务（如基金管理）的各种场景。支持的扩展功能包括里程碑付款、声誉门槛和零知识隐私证明等。

\---

四、从 ERC-8004 到 ERC-8183：协同构建 Agent Economy

两者的协同已在生态中得到验证。以 BNB Chain 的 BNBAgent SDK 为例：

框架以 ERC-8004 为基础，为代理发放去中心化身份（DID），并通过 8004scan 累积可验证的链上声誉记录，再叠加 ERC-8183 所定义的任务委托与协作机制，让代理之间可以在同一套标准下分派任务、协同执行、结算收入。

这种「先有身份与信誉，再做商业交易」的递进设计，为 Agent 经济建立了完整的信任闭环：规范约定 → 资金托管 → 交付 → 客观评估。

\---

五、Builder Path：开发者成长路线

5.1 2026 年 Web3+AI 的技术范式

2026 年，区块链 Web3 进入「生产力时代」，强调实用、合规与 AI 融合。核心洞察有三：

· 从「去中心化」到「智能化」：AI 代理正在成为 Web3 的核心基础设施

· 从「炒 Token」到「做应用」：RWA、DePIN 等真实资产上链场景崛起

· 从「单链开发」到「模块化组合」：垂直场景定制链爆发

以 Rust/Solidity 为根基，用 AI 解决 Web3 的「自动化」痛点，专注链上资产管理和 DeFi 智能化方向——这是 2026 年 ROI 最高的技术路径。

5.2 分阶段学习路线

阶段一：Web3 基础（1-2 个月）

概念学习（1 周）：区块链、去中心化、钱包、私钥/助记词、公链/侧链、Token、NFT、DeFi、DAO。

开发起步：

· 学习 Solidity：智能合约安全、Gas 优化、代理模式

· 学习 TypeScript：Ethers.js/Viem、Wagmi

· 用 Hardhat/Foundry 部署 3 个以上测试网 DApp（代币/NFT/投票）

阶段二：AI 基础（1-2 个月）

工具层面：熟练使用大模型（ChatGPT、Claude）、掌握提示词设计。

开发层面：

· 学习 Python：LangChain、向量数据库、LLM API 集成

· 了解机器学习基础：scikit-learn 完成鸢尾花分类、房价预测等项目

阶段三：ERC-8004 Agent 开发（核心专项）

脚手架工具：

\`\`\`bash

npx create-8004-agent

\`\`\`

该 CLI 工具引导创建完整 Agent 项目，包含注册、A2A 服务器、MCP 服务器和 x402 支付支持。

生成项目结构：

\`\`\`

my-agent/

├── src/

│ ├── register.ts # ERC-8004 链上注册

│ ├── agent.ts # LLM 代理逻辑

│ ├── a2a-server.ts # Agent-to-Agent 通信

│ └── mcp-server.ts # MCP 协议服务

├── registration.json # ERC-8004 元数据

└── .well-known/agent-card.json

\`\`\`

推荐上手链：ETH Sepolia 或 Base Sepolia 测试网，已在上述链部署身份注册合约。

演示项目：@nirholas/erc-8004-demo-agent 展示了完整的 ERC-8004 注册最佳实践，包括将 Agent 元数据上传至 IPFS、在 Sepolia 链上注册、输出 AgentID 和 8004scan 链接。

开发任务：

1\. 使用 create-8004-agent 脚手架创建项目

2\. 通过 Pinata 将 Agent 元数据上传至 IPFS

3\. 调用身份注册合约在测试网上铸造 AgentID

4\. 启动 A2A 服务器实现 Agent 间通信

5\. 集成 x402 实现 Agent 自主支付

阶段四：ERC-8183 商业集成（进阶专项）

核心开发任务：

1\. 理解 Job 原语的三方角色：Client、Provider、Evaluator

2\. 部署支持 ERC-8183 的托管合约

3\. 实现任务生命周期管理（Open → Funded → Submitted → Completed/Rejected）

4\. 集成去中心化争议解决机制（如 UMA 的 Optimistic Oracle）

参考实现：BNBAgent SDK 是 ERC-8183 的首个实时实现，提供完整的 Python 工具包，允许开发者使用熟悉的方式注册 Agent、管理任务流并与 ERC-8183 交互。

阶段五：深入生态与实战（持续）

技术栈整合——Web3+AI 的「三明治」模型：

\`\`\`

顶层（用户界面）：TypeScript + React

↓

中层（业务逻辑）：Solidity/Rust 智能合约

↓

底层（智能决策）：Python AI 模型 + zkML 验证

\`\`\`

实战方向：

· AI 驱动的链上资产管理（DeFi 风控、套利策略）

· AI Agent 间的任务委托与协作

· 链上数据分析与 AI 预测模型

· 智能合约安全审计 + AI 自动化

5.3 开发者工具箱速查

类别 推荐工具

智能合约开发 Hardhat, Foundry, Solidity, Rust (Solana/Anchor)

AI 框架 LangChain, PyTorch, scikit-learn

Web3 前端 Ethers.js/Viem, Wagmi, TypeScript, React

Agent 标准实现 create-8004-agent, @nirholas/erc-8004-demo-agent, BNBAgent SDK

链上交互 MetaMask, 测试网水龙头, 8004scan

存储 IPFS (Pinata)

ZK 验证 zkML, TEE 背书记录，链上验证注册表

5.4 避坑提醒

1\. 警惕伪需求：优先找有真实付费意愿的场景（如机构级链上资产管理），避免「为了 AI 而 AI」

2\. 安全红线：绝不泄露私钥/助记词，大额资产放冷钱包

3\. 基础设施成熟度：ZK 和模块化区块链仍在快速迭代，可能有「技术沉没成本」

4\. 合规预留：各国对 AI 生成内容上链、DeFi 监管政策仍在变化，技术方案需预留合规接口

\---

六、结语

2026 年，Web3 与 AI 的融合正从概念走向落地。ERC-8004 为 AI Agent 提供了链上的「身份证」与「征信报告」，ERC-8183 则为 Agent 间的商业协作构建了安全可验证的「合同框架」。两者共同构成了 Agent Economy 的信任基础设施。

对于开发者而言，同时掌握 Web3（Solidity/Rust/TypeScript）与 AI（Python/LangChain）的交叉技能，并深入理解这两大标准，将是在这一轮技术浪潮中建立核心竞争力的关键路径。

懂 Web3 又懂 AI 的工程师极度稀缺。交叉背景如果在链上 AI 代理方向做出开源成果，很容易成为稀缺人才。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->




**From ERC-8004 / ERC-8183 → Builder Path**

**Agentic Economy Builder Notes**

一份給 Web3 / AI Agent Builder 的實戰路徑筆記

從「AI Agent 身份層」到「Agent Commerce Layer」的完整理解。

**1\. 先理解這兩個 ERC 在解決什麼問題**

**ERC-8004 = Agent Identity Layer**

ERC-8004 是 AI Agent 的：

-   Identity（身份）
    
-   Reputation（聲譽）
    
-   Validation（驗證）
    

它讓 AI Agent 可以：

-   被發現（Discovery）
    
-   被驗證（Trust）
    
-   被記錄歷史（Reputation）
    
-   跨平台建立可信身份
    

可以理解為：

ERC-8004 = AI Agent Passport + Resume

核心概念：

| 模組 | 功能 |
| Identity Registry | Agent 身份註冊 |
| Reputation Registry | 工作歷史 / 評價 |
| Validation Registry | 驗證與 Proof |

**ERC-8183 = Agent Commerce Layer**

ERC-8183 是：

AI Agent 的工作協議（Job Protocol）

它定義：

-   如何建立工作
    
-   如何 escrow
    
-   如何提交結果
    
-   如何驗證
    
-   如何付款
    

核心角色：

| Role | 說明 |
| Client | 發需求 |
| Provider | 做工作 |
| Evaluator | 驗證結果 |

工作流程：

Create Job

→ Fund Escrow

→ Submit Deliverable

→ Evaluate

→ Release Payment / Refund

**2\. ERC-8004 + ERC-8183 的關係**

可以這樣理解：

ERC-8004 = 誰在工作

ERC-8183 = 工作如何進行

更完整：

8004 → Identity + Trust

8183 → Commerce + Settlement

兩者形成：

Agent Economy Stack

**3\. 更大的 Agent Stack**

目前 Agent Economy 正在形成一個完整協議層：

A2A / MCP

↓

ERC-8004

↓

ERC-8183

↓

x402 Payments

↓

Stablecoins / USDC

**各層含義**

| Layer | 功能 |
| A2A / MCP | Agent communication |
| ERC-8004 | Identity + Reputation |
| ERC-8183 | Job lifecycle |
| x402 | HTTP payment layer |
| USDC | Settlement |

**4\. Builder 應該如何切入？**

這是最重要部分。

**Path 1 — Agent Identity Builder**

適合：

-   Web3 Designer
    
-   Frontend
    
-   Social Product Builder
    

你可以做：

**① Agent Profile UI**

類似：

LinkedIn for AI Agents

功能：

-   Agent 卡片
    
-   Reputation dashboard
    
-   Verification badge
    
-   Skill graph
    

技術：

Next.js

wagmi

viem

Base / Ethereum

**② Agent Reputation Explorer**

類似：

Etherscan + GitHub profile

可視化：

-   Job history
    
-   Completion rate
    
-   Validator score
    
-   Stake level
    

**③ Agent Discovery Marketplace**

像：

Upwork for Agents

但：

Fully Onchain

**Path 2 — ERC-8183 Commerce Builder**

這條是目前最有機會的。

你可以做：

**① AI Agent Freelance Market**

例如：

Design Agent

Coding Agent

Research Agent

使用 ERC-8183：

createJob()

fund()

submit()

complete()

**② Autonomous Workflow System**

例如：

Agent A → Research

Agent B → Design

Agent C → Post to Social

全部：

Autonomous settlement

**③ AI Service Protocol**

例如：

Prompt marketplace

AI automation

Content generation

每個服務：

ERC-8183 Job

**5\. Builder 最應該學的技術**

**Core Stack**

Solidity

ERC Standards

EVM

**Frontend**

Next.js

TypeScript

Tailwind

wagmi

viem

**AI Layer**

LangChain

CrewAI

AutoGen

OpenAI API

Claude API

**Agent Framework**

目前最值得看：

| Framework | 原因 |
| CrewAI | 多 Agent workflow |
| AutoGen | Agent collaboration |
| ElizaOS | Web3 AI Agent |
| Virtuals | Agent token ecosystem |

**6\. 現在真正的機會在哪？**

目前真正缺的不是：

底層協議

而是：

Agent UX

**最大機會：**

**① Agent Interface**

現在 Agent UX 很爛。

誰能做：

Notion 級 Agent UI

誰就有機會。

**② Reputation Visualization**

Agent economy 最核心：

Trust

而 Trust 必須被：

可視化

**③ Agent Commerce UX**

現在大多數：

只有 contract

沒有：

Product experience

**7\. Web3 Designer 最適合切入點**

你目前做視覺 / UI：

非常適合切：

Agent Economy Design Layer

尤其：

-   Reputation UI
    
-   Agent Dashboard
    
-   Agent Marketplace
    
-   Job Flow UX
    
-   Agent Identity System
    

這些現在幾乎沒人做好。

**8\. 推薦 Builder Roadmap**

**Phase 1 — 理解協議**

先讀：

-   ERC-8004
    
-   ERC-8183
    
-   A2A
    
-   MCP
    

**Phase 2 — 做 UI Clone**

建議做：

**① Agent Profile**

Twitter + LinkedIn + ENS

**② Job Dashboard**

Upwork for AI Agents

**③ Reputation Explorer**

Etherscan for Agents

**Phase 3 — 接智能合約**

學：

viem

wagmi

ethers

**Phase 4 — 加入 AI Workflow**

接：

CrewAI

AutoGen

LangChain

**9\. 最值得關注的生態**

**值得追：**

-   Virtuals Protocol
    
-   Ethereum Foundation
    
-   Arc
    
-   Coinbase
    
-   Cloudflare
    

**10\. 一句話理解整個方向**

ERC-8004 解決：

“這個 Agent 是誰？”

ERC-8183 解決：

“這個 Agent 如何工作與收款？”

而未來真正的戰場：

是 Agent UX。

**11\. 建議你立即開始做的作品集**

如果你想進 Web3 / Agent Economy：

最推薦做：

**Portfolio Project**

**「Onchain Agent Marketplace」**

包含：

-   Agent profile
    
-   Reputation system
    
-   Job flow
    
-   Escrow status
    
-   Validator system
    
-   Payment settlement
    
-   AI workflow visualization
    

這會非常有未來感。

**延伸閱讀**

-   [ERC-8004 Official Site](https://8004.org/?utm_source=chatgpt.com)
    
-   [Arc Agentic Economy Docs](https://docs.arc.io/build/agentic-economy?utm_source=chatgpt.com)
    
-   [ERC-8183 Job Tutorial](https://docs.arc.network/arc/tutorials/create-your-first-erc-8183-job?utm_source=chatgpt.com)
    
-   [ACP / ERC-8183 Hook Implementation](https://www.ufxproject.com/acp?utm_source=chatgpt.com)
    

**Sources**
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->





\- **一、AI入门与课程介绍**

\- 课程目的：科普AI名词，帮助小白理解AI技术

\- 课程内容：AI工具生态图谱，AI核心运作机制，聊天型AI与开发工具介绍

\- 学习资源：视频上传至哔哩哔哩、YouTube，recap文章供学习

\- **二、AI工具与平台**

\- 聊天型AI：如Church GPT、DC、Code

\- AI开发工具：如Coastal、Windsor、Cherry、Pentagon Property

\- 模型平台：如Open Router，提供多种模型对接

\- 通用助手底座：如Hermes Agent，支持多模型接入与工具调用

\- **三、Hermes Agent与技能（Skills）**

\- Skills定义：模板化的工作流，定义agent角色、行为边界与能力

\- 配置与使用：通过环境变量设置API Key，支持微信、飞书等消息平台接入

\- 应用场景：日常提醒、学习计划生成、代码编写辅助等

\- **四、安装与配置流程**

\- 环境搭建：推荐使用WSL（Windows Subsystem for Linux），通过一键安装脚本配置环境

\- API Key设置：生成并配置环境变量，确保安全使用

\- 消息网关配置：如微信、Telegram，设置白名单与唤醒词

\- **五、问答环节**

\- API Key与安全性：避免在公共平台直接发送API Key，通过环境变量设置

\- 量化交易与AI：AI作为助手，记录复盘交易策略，不直接执行交易

\- 学习计划生成：通过AI评估学习者水平，生成针对性学习计划

\- **六、后续学习与支持**

\- 课程资源：官网提供学习手册与启动入口

\- 社区支持：群内助教解答问题，定期分享会与任务安排

分享会聚焦AI入门，特邀资深开发者分享AI基础、工具使用与配置，特别强调开放云Hermans与云服务的协同。杰克老师深入讲解了AI工具生态、核心机制、如AI进化、GPT发展、以及AI在代码解释、文章总结等任务的应用。他还介绍了健康代理等AI工具，作为通用助手连接大模型与本地工具，优化效率。讨论覆盖了ChatGPT等聊天AI作为开发助手的潜力，以及AI在学习计划安排、资源管理乃至个性化学习计划制定中的应用。特别强调了AI在量化交易中的辅助作用，提醒非完全依赖。分享中包含具体技术细节，如工具安装配置及手机应用，解答了网络错误，API密钥配置等问题，体现了AI工具在不同场景下的广泛适用性与实用价值。

AI入门科普与云技术差异解析

分享会旨在为AI新手科普市场上的AI名词，如云代码、反重力等、澄清概念混淆、介绍AI时代的技术应用。讲师通过个人开发经验，从后端到全栈再到基础设施，直至转向AI领域，分享了AI入门教程及云技术差异，包括开放云与云的对比使用，以及配置指导。会议中鼓励提问，并提供多平台学习资源，包括直播字幕，视频上传至哔哩哔哩和YouTube，以及学习文章回顾。

AI进化与新地图探索:从聊天助手到开发工具

对话探讨了AI从初期的智能化搜索引擎进化到能够执行实际任务的过程，重点介绍了AI在代码开发领域的应用，以及集成了AI功能的开发工具，如基于VSCode的二次开发平台，展示了AI在理解和执行用户指令方面的进步。

AI工具与平台概述:从开发到应用

对话介绍了AI开发工具，如COI和基于终端运行的码，以及AI生态中的五大阵营:聊天型AI、AI编程助手、模型平台等。模型平台如打开路由器汇集大模型供用户使用，展现了AI工具的多样性和应用场景。

AI助手赫尔墨斯代理及其超能力介绍

对话介绍了AI助手赫尔墨斯代理、它不仅是一个聊天机器人或代码编辑器、还能连接大模型和本地工具、优化记忆与消息平台、类似贾维斯。它支持多模型接入、工具调用、记忆优化和技能沉淀、能自动执行固定流程任务、特别适合新手通过微信或飞书等平台交互使用。

AI平台与技能工作流详解

对话深入探讨了AI平台的使用，包括模型平台、API中转机制及记忆持久化等特性。特别强调了技能工作流作为模板化流程的重要性，以及在AI开发中的应用。同时，讨论了在特定环境下使用工具的限制，如WSL中头盔对浏览器的访问问题，以及不推荐在健康环境中进行编程的原因。

在Windows环境下通过WCL安装Ubuntu子系统教程

讨论了在Windows系统中使用安装Ubuntu子系统的步骤的WCL，包括通过GitHub仓库的一键安装指令自动配置节点和python环境，以及处理管理员权限和外接硬盘IO能力的注意事项。同时提及了API使用成本和选择合适的模型提供商以避免额外连接需求的建议。

大模型配置与微信消息网关设置指导

对话围绕大模型配置展开、涉及选择模型提供者、配置山西网关及对接中转站等步骤。重点讨论了微信消息网关的配置问题、包括环境变量刷新和设备码输入等操作、旨在解决新手在快速设置过程中遇到的技术难题。

配置消息网关与选择开发工具

讨论了在不稳定中转站环境下使用播客和命令行工具进行开发的选择，推荐使用命令卡的代码进行开发。随后，重点转向配置消息网关，包括通过房屋模块切换模型，以及自动检验消息网关状态。最后，确认消息平台配置未开启，并计划继续解答相关问题。

手机与大模型结合:实现智能任务自动化

对话讨论了通过手机连接大模型进行任务自动化的方法、如定时获取文档、生成学习计划等。强调了设备需保持开机和网络连接、以及在使用过程中注意授权危险指令的安全性。

车载办公桌Pro部署与知识库配置讨论

讨论了车载桌面专业版在手机上的部署方式，包括使用模拟终端软件和配置环境的过程。提及了通过分组管理日常事务、量化学习、代码开发和新闻简报的实践。讨论了知识库存储需求，建议使用GitHub作为知识库，并可通过Docker或脚本进行部署。强调了不同任务的分组管理方法，以及解决网络错误和设备要求的问题。

配置隐私安全与系统优化指南

讨论了隐私安全配置，如避免API密钥泄露，以及系统优化，包括低配硬件运行，自动重试失败调用，蓝牙连接，白名单设置，唤醒词响应和消息处理选项，强调了提升系统稳定性和用户体验的重要性。

AI助手配置与学习计划安排

对话围绕AI助手的配置展开，包括不同群主角色的设定，量化工程师的角色，官网独立工具集的使用以及用户分组的重要性。提及了AI助手在演讲稿整理和PPT生成中的应用，强调了记忆不串的重要性及独立身份的设置。讨论了手机上配置AI助手的可行性与不便，以及如何通过设置避免误触。最后，提出了根据可用时间安排AI相关学习计划的建议，计划时长超过4小时。

AI学习助手配置与使用指南

对话围绕如何配置和使用AI学习助手展开、包括通过微信连接、生成API密钥、设置环境变量等步骤、以及如何让助手评估学习者水平并提供个性化学习计划。此外、讨论了会员权限的配置和使用注意事项、强调了安全性和平台规则遵守的重要性。

API密钥应用与AI在量化交易中的角色讨论

讨论了API密钥作为身份验证工具在访问资源中的作用，以及AI在量化交易中的辅助角色，强调AI用于记录复盘而非直接执行策略。同时，提及了学习打卡的重要性及后续课程安排。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->






### Web3 核心要点笔记

**1\. 核心演变：从“平台拥有”到“用户拥有”**

-   **Web1.0（只读）**：用户只能被动获取信息（如早期的门户网站）。
    
-   **Web2.0（读+写）**：用户可以创造内容（如发微博、朋友圈），但数据和账号归平台所有，平台可以随意删改或封禁。
    
-   **Web3.0（读+写+拥有）**：用户不仅能创造内容，还能真正拥有自己的数据、身份和数字资产（如加密货币、NFT），平台无法剥夺。
    

**2\. 运行原理：三大底层支柱**

-   **区块链（公共账本）**：Web3 的基础设施。它是一个去中心化的分布式数据库，数据由全球成千上万个节点共同维护，而不是存在某一家公司的服务器里。一旦数据上链，就不可篡改且公开透明。
    
-   **智能合约（自动执行的规则）**：Web3 的“后端代码”。它是部署在区块链上的程序，当满足预设条件时会自动触发执行（例如：买家付款后，数字商品自动转到买家名下）。规则透明，无需中介，代码即法律。
    
-   **密码学钱包（身份与资产钥匙）**：Web3 的“通行证”。用户通过私钥（类似一把绝密的数字钥匙）来控制自己的链上身份和资产。不需要注册手机号或邮箱，只要拥有私钥，就能在任何 Web3 应用中登录并操作。
    

**3\. Web2 与 Web3 的本质区别**

**表格**

| 维度 | Web2 (平台中心) | Web3 (用户中心) |
| --- | --- | --- |
| 数据存储 | 中心化服务器（平台说了算） | 区块链分布式账本（不可篡改） |
| 用户身份 | 账号+密码（平台可封禁） | 钱包地址+私钥（用户完全掌控） |
| 业务逻辑 | 封闭的后端代码（可随时修改） | 开源智能合约（部署后不可篡改） |
| 价值传输 | 依赖银行/支付平台等中介 | 点对点直接传输（如加密货币） |
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->







在AI时代，开发者需掌握的基础知识和架构能力尤为重要，即使借助AI，评估方案合理性及代码质量仍是开发者职责。以构建支付系统为例，AI参与设计、评估与代码验收，虽能提升效率与质量，最终决策需由人类把控。讨论了Web 3与Web 2的关系，强调两者非完全分离，许多Web 3项目融合了Web 2技术。安全设计与持续审计对所有项目至关重要，钱包技术分类与私钥管理被重点提及，确保交易安全。强调AI虽可放大开发者能力，最终设计与决策应由人类掌控，凸显AI在协作中的辅助角色及基础能力的重要性。

**AI 时代，Web3 开发者需要具备的基础知识和架构能力**

**\- AI时代开发者的核心技能**

**\- 基础知识与架构能力**

**\- 判断AI提供的方案是否合理**

**\- 验证AI编码的质量**

**\- AI协作边界**

**\- 与AI协作设计与评估方案**

**\- 验收AI生成的代码**

**\- AI自我验证**

**\- AI编码质量的关键**

**\- 驾驭AI而非被驱动**

**\- 基础知识扎实是前提**

**\- Web 3.0与安全**

**\- Web 3.0与Web 2.0的区别**

**\- Web 3.0更注重安全与信任**

**\- 结合Web 2.0能力**

**\- 支付系统案例**

**\- 资金流转与安全考量**

**\- 信任问题与解决方案**

**\- 钱包与私钥安全**

**\- 私钥的重要性**

**\- 钱包分类与安全性提升**

**\- 交易生命周期与关键参数**

**\- 交易安全与模拟**

**\- 交易可视化与模拟**

**\- 服务侧确保钱包安全**

**\- AI在Web 3.0中的角色**

**\- 加速学习与编码**

**\- 不改变系统复杂度**

**\- 强调人的决策与责任**

**\- 结论**

**\- AI时代架构师的能力模型**

**\- 架构能力**

**\- 调试能力**

**\- 基础知识**

**\- 驾驭AI的必要性**

**\- 基础知识是用好AI的前提**

**\- AI是工具，不是替代**
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->








关于 课程机制与任务提交规则

本次 **AI x Web3 School** 的核心机制设计旨在通过“输出倒逼输入”，帮助你在接下来的一个月里高效掌握知识。

\* **📅 时间节奏与考勤**

\* **总周期**：5月15日 - 5月31日（共约两周的Book Camp + 第三周的Hacks）。

\* **打卡规则**：\*\*“5天打卡，2天休息”\*\*。每周你需要完成5天的打卡任务，有2天的弹性休息时间。

\* **容错机制**：如果你连续\*\*2天\*\*没有打卡，将会被淘汰出积分机制（但仍可继续学习）。

\* **时间节点**：明天（5月19日）正式开始打卡。

\* **🏆 积分与榜单**

\* **多维榜单**：设有周榜、赛道总榜、学分累计榜等。

\* **隐藏福利**：上榜学员（周榜或总榜）将解锁后续的“隐藏福利”（具体未透露，是激励机制的一部分）。

\* **赛道切换**：任务分为通用任务、AI方向、Web3方向及综合任务。

\* **📤 任务提交规范**

\* **形式多样**：支持截图、文字、文件或链接形式提交。

\* **核心逻辑**：不仅仅是听课，需要提交Proof of Work（工作证明），例如配置Harmless、创建GitHub仓库、完成链上签名测试等。

\* **工具辅助**：你需要配置一个基于 **Harmless Agent** 的“学习助手”（名为“小黑”或自定义），它将协助你安排任务、记录学习日志并同步到你的GitHub仓库中。

为了让我在接下来的“内卷”中保持从容，可以采取以下行动：

1\. **配置你的“贴身管家” (Harmless Agent)**

\* **行动**：这是课程中最关键的工具。你需要从报名平台获取 **Agent Security API Key**，并配置到你的Harmless环境中（注意：不要通过聊天框暴露Key，需配置环境变量）。

\* **目的**：让它帮你规划每日学习、记录笔记、甚至帮你写代码。你可以直接对它说：“我今天想提前学习，帮我安排一个最小的学习方案。”

2\. **订阅日历与环境准备**

\* **行动**：将课程日历订阅到你的Google Calendar（或其他日历工具）。

\* **时间管理**：核心的Co-Learning时间是周一、周三、周五的晚上7:00-8:00（北京时间）。下周五（5月22日）因时差调整至周六，且有英文分享会，需提前留意。

\* **技术准备**：检查你的Git环境和GitHub账号，确保能正常登录和操作，因为你的学习成果将记录在GitHub仓库中。

3\. **制定“最小可行”策略**

\* **行动**：利用Harmless助手，根据你明天（周一）的空闲时间，生成一份“最小学习计划”。

\* **心态**：不要试图一口吃成胖子，先完成再完美。利用明天的开营热度，先完成第一个任务的提交。

\* **关于职业与生态**：

\* “除了课程内的积分榜，对于想要寻找Web3工作机会或创业的学员，社群是否有具体的内推渠道或项目孵化支持？”

\* **关于工具与资源**：

\* “ZAI模型在代码能力上很强，但在具体的Web3开发场景（如智能合约审计）中，是否有特定的Prompt（提示词）模版推荐？”
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
