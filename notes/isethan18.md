---
timezone: UTC+8
---

# Ethan

**GitHub ID:** isethan18

**Telegram:** @isethan18

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-02
<!-- DAILY_CHECKIN_2026-06-02_START -->
报名黑客松，并确定方向
<!-- DAILY_CHECKIN_2026-06-02_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->

### 沉淀 Multi-Agent 案例与学分打卡

-   **今日目标**：总结多智能体协同的得与失，提交 Week 2 成果。
    
-   **具体做什么**：
    
    1.  **复盘报告撰写**：重点记录你在多 Agent 协同中观察到的现象。例如：_“当把风控和执行剥离成两个 Agent 后，系统的幻觉率降低了 30%，但 Token 消耗增加了 1.5 倍。”_ 这种具有思辨性的思考是拿高分的关键。
        
    2.  **录制与提交**：录制一段多 Agent 在终端里互相对话、接力完成链上交易的精彩录屏（或截图）。
        
    3.  **打卡确认**：登录 WCB 平台 Week 2 学习面板，提交你的 GitHub 升级版仓库链接及运行报告，确认第二周学分到账。
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->


### Vibe Coding 效率复盘与系统健壮性优化

-   **今日目标**：借助 AI 优化整套系统的稳定度，解决多 Agent 协同中常见的“死循环”和“逻辑死锁”问题。
    
-   **具体做什么**：
    
    1.  **异常捕获（Error Handling）**：链上交互经常遇到超时或 RPC 节点崩溃。让 Cursor 批量为你生成的代码加上 `try-catch` 以及自动重试机制。
        
    2.  **状态追踪**：用 AI 辅助写一个简单的本地日志记录器（Logger），把每个 Agent 的 Thought 和 Action 记录下来，方便后续复盘。
        
    3.  **调优 Prompt**：如果发现 Agent 之间传参经常格式跑飞（比如把 String 传给了需要 Number 的地方），在 Prompt 里加入更强硬的几发少样本提示（Few-Shot Examples）。
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->



### 多智能体闭环联调——全自动链上协同（核心任务）

-   **今日目标**：完成 Week 2 的终极技术合体，实现“接收信号 -> 决策风控 -> 自动执行”的全链路闭环。
    
-   **具体做什么**：
    
    1.  **业务串联**：在本地主程序中，将 Day 3 的“监听 Agent”、Day 4 的“风控 Agent”与 Week 1 的“执行交易 Agent”串联起来。
        
    2.  **全链路运行**：发起一个模拟指令（例如模拟检测到某个链上机会）。
        
    3.  **日志监控**：紧盯终端。观察 Orchestrator 是如何把任务派发给侦察兵，侦察兵返回数据后，又是如何流转给风控员，最终交易员如何拿到签名授权并成功推送到 Sepolia 测试网上。
        
-   **参考材料**：
    
    -   课程官方 Week 2 的演练视频（重点看讲师在联调报错时是如何调整 Agent 之间的 Prompt 衔接的）。
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->




### 复杂链上决策逻辑与风控 Agent 构建

-   **今日目标**：构建核心的“思考/风控层”，让 AI 具备在复杂链上环境下说“不”的能力。
    
-   **要做什么**：
    
    1.  **Prompt 策略编写**：设计一个极其严格的“风控 Agent”。通过 System Prompt 限制它：_“如果 Gas 价格超过 X gwei，或者目标地址未通过合规验证，必须立刻终止任务，不予执行签名。”_
        
    2.  **工具集扩展**：为风控 Agent 接入第三方安全 API（例如调用区块链浏览器的 API 检查目标地址是否为恶意合约）。
        
    3.  **对抗测试**：故意给系统喂入一个高风险或恶意的链上请求，测试风控 Agent 是否能成功拦截并给出合理的拒绝理由。
        
-   **参考材料**：
    
    -   各大 Block Explorer (如 Etherscan) 的 API 文档（重点看 Account / Contract 校验相关接口）。
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->





### 5.17：链上数据衍生源（Data Feeds）与 Agent 监听器

-   **今日目标**：给你的 Multi-Agent 系统装上“眼睛”，使其能实时感知区块链世界的变化。
    
-   **做什么**：
    
    1.  **编写监听工具**：利用 Cursor，让 AI 帮你写一个基于 WebSockets 或 RPC 轮询的脚本，专门用来监听测试网（如 Sepolia）上某个特定代币合约的 `Transfer` 事件。
        
    2.  **封装为 Agent Tool**：把这个监听脚本封装成一个标准 Tool，交给你的“侦察兵 Agent”。
        
    3.  **联动测试**：手动触发一笔测试网交易，观察该 Agent 能否精准捕获该事件，并将其转化为结构化的 JSON 数据传递给下一个 Agent。
        
-   **参考材料**：
    
    -   _技术文档_：Viem 或 Ethers.js 关于 `contract.on("Event", ...)` 监听机制的文档。
        
    -   _基础设施_：Alchemy 或 Infura 的 Dashboard（获取稳定的 WSS/RPC 节点链接）。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->






### 5.25：多智能体（Multi-Agent）与编排框架理论

-   **今日目标**：理解为什么单 Agent 有上限，掌握多智能体协同（Routing & Orchestration）的设计模式。
    
-   **具体做什么**：
    
    1.  **理论学习**：搞懂 Multi-Agent 的核心架构。理解什么是**主管智能体（Orchestrator）与执行智能体（Worker）**，以及它们之间如何通过消息队列或 Prompt 进行通信。
        
    2.  **概念对齐**：思考 Web3 场景下的多智能体分工。例如：
        
        -   _Agent A（侦察兵）_：负责盯住某个智能合约的 Event 或者是特定的社交媒体信号。
            
        -   _Agent B（风控员）_：负责计算当前 Gas 费、滑点以及钱包余额是否安全。
            
        -   _Agent C（交易员）_：负责最终的签名与链上交互。
            
-   **材料**：
    
    -   _开源框架概念_：LangGraph（专注于图结构的多 Agent 协同）或 CrewAI / Autogen 的官方设计模式文档。
        
    -   _学习重点_：了解“状态共享（State Management）”在多智能体交互中扮演的角色。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->







### Day 6（5月24日）：智能合约的 AI 部署与调用

-   **今日目标**：让 AI 跨越到合约层，完成「AI 自动发币/部署合约」或「AI 读写智能合约」。
    
-   **具体做什么**：
    
    1.  **合约编写**：用 Cursor 配合 Remix 网页端，让 AI 帮你写一个最简单的 ERC20 代币合约或 Greeting 合约。
        
    2.  **Agent 升级**：尝试扩充你的 Hermes Agent。给它增加一个新的 Tool（工具），把“部署合约”或者“调用某个特定合约函数”的能力赋予它。
        
    3.  **测试反馈**：测试 Agent 能否通过一句“帮我查一下 A 合约里当前的最新状态”来自动完成调用。
        
-   **参考材料**：
    
    -   _开发工具_：Remix IDE ([remix.ethereum.org](http://remix.ethereum.org)) —— 最适合配合 AI 进行快速合约测试的工具。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->








Day 5（5月23日）：链上智能体交互实践（核心打卡点）

• 今日目标：让 AI Agent 真正帮你去链上搞事情。

• 具体要做什么：

1\. 下达指令：对着你的 Hermes Agent 发送指令，例如：“帮我把 0.01 个测试币转账给地址 XXXXX，并在转账成功后告诉我交易哈希。”

2\. 监控过程：不要只看结果，紧盯着终端（Terminal）输出的 Logs。看 AI 是怎么一步步思考的：思考 (Thought) -> 调用工具 (Call Tool) -> 得到链上返回 (Observation) -> 最终回复。

3\. Debug 与调整：如果 AI 报错（比如 Gas 不够、RPC 报错、Prompt 理解错误），用 AI 辅助报错信息提示进行修正。

• 参考材料：

• 链上浏览器：Etherscan (Sepolia)，用于把 AI 给你的交易哈希放进去验证，看看链上是否真的执行成功。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->









**Day 4（5月22日）：Hermes Agent 与智能体框架拆解**

• **今日目标**：攻克课程的核心主角——Hermes Agent（或相关的 AI Agent 框架）。

• **具体做什么**：

1\. **代码通读**：登录课程平台，下载 Week 1 对应的 **Hermes Agent 示例代码或 GitHub 仓库**。

2\. **架构拆解**：让 Cursor 帮你解释这个 Agent 的核心逻辑：它是如何接收自然语言指令的？它的 tools 文件夹里定义了哪些功能（比如是不是有 transfer\_token、get\_balance）？

3\. **本地运行**：配置好 .env 环境变量（填入你的测试网私钥和 RPC 节点链接），在本地把这个 Agent 跑起来。

• **参考材料**：

• 官方材料：WCB 学习面板中 Week 1 的配套 GitHub Readme 和讲解视频。

• 进阶概念：LangChain 或 LangGraph 中关于 “ReAct (Reasoning and Acting) 模式” 的概念介绍。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->










### Day 3（5月21日）：AI Coding 与环境初始化（Cursor / Windsurf）

-   **今日目标**：搭建好你的 Vibe Coding 环境，让 AI 成为你的主力副驾驶。
    
-   **具体做什么**：
    
    1.  **工具配置**：下载并配置 **Cursor** 或 **Windsurf** 编译器。将你前两天准备好的 AI API Key（或直接使用内置 AI）配置好。
        
    2.  **环境初始化**：使用 AI 引导，在本地初始化一个基本的开发环境（Node.js 或 Python），安装 Web3 交互的基础库（如 `ethers.js`、`viem` 或 `web3.py`）。
        
    3.  **初试 Vibe Coding**：用纯自然语言命令 AI：“帮我写一个脚本，连接到 Sepolia 测试网，并打印出我 Day 2 钱包的测试币余额。” 观察它写出的代码并运行。
        
-   **参考材料**：
    
    -   _工具文档_：Cursor 官方文档中的 `@symbols` 和 `Composer` 功能使用指南。
        
    -   _库文档_：`ethers.js` 或 `viem` 的 Quick Start 极简入门。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->











### **Day 3（2026-05-21）：AI Coding 与环境初始化（Cursor / Windsurf）**

**今日目标**：搭建 Vibe Coding 环境，让 AI 成为主力副驾驶。

**具体做什么**

-   工具配置：下载并配置 Cursor 或 Windsurf。配置好 AI API Key（或使用内置 AI）。
    
-   环境初始化：使用 AI 引导，在本地初始化基本开发环境（Node.js 或 Python），安装 Web3 交互基础库（如 ethers.js、viem 或 [web3.py](http://web3.py)）。
    
-   初试 Vibe Coding：用自然语言命令 AI：“帮我写一个脚本，连接到 Sepolia 测试网，并打印出我 Day 2 钱包的测试币余额。” 观察代码并运行。
    

**参考材料**

-   工具文档：Cursor 官方文档中的 @symbols 和 Composer 功能指南。
    
-   库文档：ethers.js 或 viem 的 Quick Start 极简入门。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->












### Day 2（5月20日）：Web3 基础设施与测试网通关

-   **今日目标**：把 Web3 的链上概念吃透，为 AI 代理（Agent）准备好“手和脚”。
    
-   **具体做什么**：
    
    1.  **理论学习**：弄清 EOA 钱包（如 MetaMask）、私钥、公钥、签名（Signature）的本质。理解为什么 AI 自动交易需要签名，以及 Gas 费的构成。
        
    2.  **动手实践**：生成一个**专门用于测试的全新钱包**（切勿使用存有资产的私钥！）。配置好测试网（如 Sepolia 或 Arbitrum Sepolia），去寻找 Faucet（水龙头）领取测试币，并手动完成一笔转账。
        
-   **参考材料**：
    
    -   _基础概念_：《Mastering Ethereum》（以太坊 master 教程）关于账户和交易的章节。
        
    -   _实用工具_：Chainlist (用于添加测试网)、Google 搜索 `Sepolia Faucet` 领水指南。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->













* * *

### Day 1（5月19日）：AI 核心概念与 Prompts 高阶实战

-   **今日目标**：理解 LLM 的能力边界，掌握能够让 AI 稳定输出符合预期代码的提示词技巧。
    
-   **具体做什么**：
    
    1.  **理论学习**：搞懂 LLM 为什么会幻觉，以及什么是 **Tool Use (Function Calling)**—这是 AI 能跟 Web3 钱包/合约交互的核心。
        
    2.  **动手实践**：在 ChatGPT/Claude 或 Cursor 中测试系统级 Prompt。尝试让 AI 扮演一个“严格输出 JSON 格式的 Web3 链上数据解析器”。
        
-   **参考材料**：
    
    -   _OpenAI / Anthropic 官方文档_：《Prompt Engineering Guide》（重点看 System Prompts 和 Structured Outputs 部分）。
        
    -   _学习主题_：LLM Function Calling 机制原理（理解 AI 是如何决定何时调用外部 API 的）。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
