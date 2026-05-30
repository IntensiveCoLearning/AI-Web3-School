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
