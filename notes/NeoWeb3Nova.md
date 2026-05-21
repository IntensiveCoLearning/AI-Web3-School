---
timezone: UTC+8
---

# Neo.Yun

**GitHub ID:** NeoWeb3Nova

**Telegram:** @neo_web3_nova

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
> 今日推进模块 C 最小交叉实验原型，同时确认模块 B 链上实践完成度。

> 关键收获：

> 1.  把「AI 生成 → 人工复核 → 钱包确认 → 链上执行」从概念变成可描述流程
>     

> 2.  明确了 Agent 权限边界：提案权 vs 签名权分离
>     

> 3.  整理了 Week 1 前半程的概念地图和卡点清单，准备明日 Co-learning 同步
>     

> 今日进度：

> -   ✅ Learning Agent + GitHub repo 已就绪（Day 1–2 完成）
>     

> -   ✅ / 🔄 模块 B：测试网钱包、交易、合约部署（Day 3-4 完成）
>     

> -   🔄 模块 C：最小交叉实验原型推进中
>     

使用AI agent快速落地了一个交叉实现：  
❯ 以“用户点击投票按钮”为例，完整链路通常是：

前端读取钱包地址和当前网络。  
前端根据 ABI 编码 vote(proposalId) 调用数据。  
钱包展示交易信息，让用户确认签名。  
交易被广播到 RPC 节点。  
验证者把交易打包进区块。  
EVM 执行合约逻辑，成功则更新状态并发出 event，失败则 revert。  
前端监听交易回执，更新页面状态。  
索引器读取 event，更新历史记录或看板。  
根据上面的需求，开发一个webui页面来演示整个流程，要可以完全展示，比如需要钱包，需要在测试网上完整测试。

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-21-1779372404071-image.png)![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-21-1779372431929-image.png)![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-21-1779372447514-image.png)![屏幕截图 2026-05-21 220556.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-21-1779372749427-_____2026-05-21_220556.png)

> 学习笔记：[https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-21.md](https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-21.md)
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->





> 今日完成模块 B 收尾：测试钱包创建、测试网交易、合约部署与验证。
> 
> 关键收获：
> 
> 1.  完整跑通了「助记词 → 私钥 → 地址 → 签名 → 交易 → Gas → 确认 → 验证」链路
>     
> 2.  通过 Remix 完成最小合约部署，理解了读取调用与写入调用的 Gas 差异
>     
> 3.  启动模块 C 设计：AI 生成 → 人工复核 → 钱包确认 → 链上执行的最小流程
>     
> 
> 今日进度：
> 
> -   ✅ Learning Agent + GitHub repo 已就绪（Day 1–2 完成）  
>     
> -   ✅ 模块 B：测试网钱包、交易、合约部署已完成  
>     
> -   🔄 模块 C：最小交叉实验设计启动  
>     
>     ![屏幕截图 2026-05-20 225206.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-20-1779288788350-_____2026-05-20_225206.png)
> 
> 学习笔记：[https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-20.md](https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-20.md)
> 
> [#AIWeb3School](#AIWeb3School) [#Web3Basics](#Web3Basics) [#Day3](#Day3)
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->






> 今日完成 Week 1 完整任务拆解，正式启动 Web3 测试网实践模块。
> 
> 关键收获：
> 
> 1.  打卡与任务提交并行，两者缺一不可；学分关联评优和后续资源
>     
> 2.  明确了模块 B 的链上操作链：助记词 → 私钥 → 地址 → 签名 → 交易 → Gas → 确认 → 验证
>     
> 3.  安全底线：AI Agent 不接触私钥，高风险操作必须人工确认
>     
> 
> 今日进度：
> 
> -   ✅ Learning Agent（Hermes）+ GitHub repo 已就绪
>     
> -   🔄 测试钱包创建与测试网交互
>     
>     1.  安装/配置钱包（MetaMask / Rabby / Frame）
>         
>         ![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-19-1779196168383-image.png)
>     2.  切换到测试网
>         
>     3.  从 Faucet 领取测试币, 领取了USDC ([https://faucet.circle.com/](https://faucet.circle.com/))
>         
>     4.  发送测试交易，使用x402支付协议完成了几笔USDC的交易。
>         
>         ![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-19-1779196185655-image.png)
>     5.  在区块浏览器验证 （使用 [https://sepolia.basescan.org](https://sepolia.basescan.org) 来查看交易详情）
>         
>         ![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-19-1779196193401-image.png)
> 
> 学习笔记：[https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-19.md](https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-19.md)

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-19-1779196334726-image.png)![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-19-1779196299378-image.png)![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-19-1779196415863-image.png)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->








```
# 2026-05-18 学习笔记

## 今日课程

- **所属阶段**: Week 1 共学营 — AI 与 Web3 基础知识
- **今日主题**: 建立共同语言，初探 Handbook 知识地图
- **Handbook 入口**: https://aiweb3.school/zh/handbook/
- **WCB 学习面板**: https://web3career.build/zh/programs/AI-Web3-School#tab=learning
  > 注：WCB 学习面板需登录后查看具体今日任务，请手动确认。

## 学习路径

### 最小路径
> 今天必须完成的最小单元

- [x] 浏览 Handbook 总览页，理解四层知识地图（AI 基础 → Web3 基础 → Bridge → 前沿探索）
- [x] 阅读 [LLM 章节](https://aiweb3.school/zh/handbook/ai/llm/)：大模型能做什么，不能替代什么
- [x] 初始化个人学习仓库并完成第一次打卡草稿

### 推荐路径
> 正常进度应完成的内容

- [x] 阅读 [Prompt 章节](https://aiweb3.school/zh/handbook/ai/prompt/)：如何把任务目标、边界和输出格式写清晰
- [x] 阅读 [Context 章节](https://aiweb3.school/zh/handbook/ai/context/)：模型一次能看见什么，哪些信息会过期

### 挑战路径
> 有余力可尝试的扩展

- [x] 安装 Hermes Agent 或配置本地 AI Agent 环境，完成第一次 Vibe Coding 小实验
```

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/NeoWeb3Nova/images/2026-05-18-1779094649952-image.png)

````

- [x] 阅读 [Agent 章节](https://aiweb3.school/zh/handbook/ai/agent/)，尝试写一个简单的 tool-calling 脑图

## 笔记与思考

### 关键概念

1. **AI × Web3 不是拼接 buzzword**
   真实系统同时涉及模型能力、Agent 执行流、钱包权限、链上验证。只从 AI 侧看会低估资产风险，只从 Web3 侧看会忽略模型和工具编排的复杂度。

2. **Handbook 四层地图**
   - AI 基础：LLM → Prompt → Context → RAG → Agent → Frameworks → MCP → Evaluation
   - Web3 基础：Network → Cryptography → Wallet → Smart Contract → AA → DeFi → Oracle → Indexing → Security
   - Bridge：链上状态进入 Agent 上下文 → Web3 工具调用 → Agent 工作流 → Agent 钱包 → 机器支付 → 结算托管 → 身份 → 信任 → 可验证 AI → AI 安全 → AI 隐私 → 治理 AI
   - 前沿探索：Agentic Commerce / Wallet·Permission / AI Security / Governance

### 问题与卡点

- WCB 学习面板需登录才能看到今日具体任务和打卡入口，建议每天学习前先手动登录确认。
- 对于「有基础」的我来说，Week 1 的 AI 基础章节可以快速过，重点应放在 Agent、MCP、Frameworks 以及 Web3 侧的 Account Abstraction 和 Smart Contract 交互。

### 实验/代码片段

```bash
# 今日初始化了学习仓库
gh repo create neo-ai-web3-school-cohort-0 --public --description "Personal learning journal and proof-of-work for AI x Web3 School" --clone
# 仓库结构已创建并推送到 GitHub
```

## 打卡

- **打卡平台链接**: https://web3career.build/zh/programs/AI-Web3-School#tab=learning
- **提交时间**: 2026-05-18
- **打卡草稿**:

> 【AI × Web3 School 打卡 Day 1】
>
> 今天完成了学习仓库初始化，浏览了 Handbook 总览，理清了 AI × Web3 四层知识地图。
>
> 关键收获：AI × Web3 不是拼接概念，而是需要同时理解模型能力、Agent 执行、钱包权限和链上验证的真实系统。
>
> 今日学习笔记：https://github.com/NeoWeb3Nova/neo-ai-web3-school-cohort-0/blob/main/daily/2026-05-18.md
>
> #AIWeb3School #LearningAgent #Day1

## 明日计划

- [ ] 登录 WCB 学习面板，确认明日具体任务
- [ ] 深度阅读 Prompt 与 Context 章节
- [ ] 尝试本地 Hermes Agent 的一个简单任务（如 web_search 或 web_extract）
- [ ] 整理今日学习中的一条 Handbook 问题到 handbook-feedback/

## Handbook Feedback

- **相关页面**: https://aiweb3.school/zh/handbook/
- **问题/建议**: WCB 学习面板需登录后才能看到每日具体任务和打卡入口，是否可以在 Handbook 中增加一个“无登录状态下的每日任务预览”或“任务公开订阅源”，以便学员在未登录时也能快速了解今日学习内容？
````
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
