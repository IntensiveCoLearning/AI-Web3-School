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
