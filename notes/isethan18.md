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
