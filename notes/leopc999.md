---
timezone: UTC+8
---

# Leot (leopc999)

**GitHub ID:** leopc999

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->
## **📖 AI Security — AI 安全**

> 来源：[https://aiweb3.school/zh/handbook/bridge/ai-security/](https://aiweb3.school/zh/handbook/bridge/ai-security/)

### **核心定位**

AI Security 在 AI x Web3 里不是"防止模型说错话"，而是**防止模型错误、恶意上下文和工具滥用变成真实资产、权限或治理事故**。

Agent 一旦能读链、调工具、生成交易、管理 session key，就不再只是聊天机器人。攻击面从"聊天窗口"扩展到合约文档、网页内容、交易 memo、API 返回值、token metadata 等一切可进入模型上下文的信息源。

### **第一性原则**

**所有进入模型的内容都可能是攻击面，所有离开模型的动作都必须被约束。**

1.  **上下文 ≠ 指令**：网页、合约文档、API 返回值不能覆盖系统规则
    
2.  **工具权限要隔离**：读工具和写工具分开，普通任务和高风险任务分开
    
3.  **日志要可审计**：出了问题要能看到模型读了什么、做了什么
    

### **知识节点**

**Prompt Injection**

-   恶意内容试图改变模型原始任务或安全规则
    
-   在 Web3 里可能藏在：合约 README、网页内容、治理提案、token metadata、交易备注、外部 API 返回
    
-   **防护第一步**：分层标注上下文可信级别（用户指令 > 系统规则 > 工具结果 > 网页/合约文档）
    
-   **防护第二步**：高风险工具不直接听模型一句话，wallet tool / policy / human check 应拦住
    

**Tool Abuse**

-   模型或攻击者诱导系统滥用工具能力：反复调用付费 API、查询敏感数据、生成无限授权交易
    
-   **防护靠**：tool permission、rate limit、budget、simulation、human check
    
-   特征：不是一次大动作，而是很多小动作累积（高频调用、重复付款、参数偏离目标、请求访问 secret）
    
-   **工具层应有独立异常检测**
    

**Malicious Context**

-   看似普通的上下文里包含攻击指令或误导数据
    
-   包括错误事实：假合约地址、伪造审计报告、过期价格数据、被污染的 token metadata
    
-   **链上事实应优先从 RPC、explorer、verified source 和索引层读取**；网页说明只能作为辅助解释
    

**Key Safety**

-   私钥、API key、session key、JWT、支付凭证**不应进入模型上下文或日志**
    
-   Agent 需要执行时，应通过钱包工具、smart account、session key 或后端签名服务间接完成
    
-   底线：secret 不进 prompt、不进模型输出、不进普通日志、不进 analytics
    
-   **优先使用 Smart Account policy 或 session key，而非把 EOA 私钥放进自动化 runtime**
    

**Permission Isolation**

-   把不同风险等级的工具、数据和动作隔离开
    
-   只读查询 vs 交易草稿 vs 发送交易 vs 撤销授权 vs 大额支付 — 不同能力
    
-   **不要给 Agent 一个"万能 Web3 工具"**
    
-   环境隔离：浏览器环境 ≠ 钱包签名权限；sandbox ≠ 生产数据库
    
-   **最安全的工具不是功能最多，而是刚好能完成任务且无法越界**
    

**Sandbox**

-   隔离环境运行代码、浏览网页、处理文件
    
-   默认禁止访问：.env、ssh key、wallet seed、浏览器 cookie、生产数据库凭证
    
-   对 Web3 Agent：浏览器 sandbox 和钱包签名权限不能无边界连在一起
    

**Audit Log**

-   记录完整链路：模型看到了哪段上下文 → 为什么选择某工具 → 工具返回什么 → policy 是否通过 → 用户是否确认
    
-   不能只记"最终回答"
    
-   高价值系统可把日志 hash 锚定到链上
    

**Alert**

-   监控信号：异常工具频率、预算快速消耗、非白名单地址、连续失败交易、session key 越界
    
-   **告警必须连接响应动作**：暂停 Agent / 撤销 session key / 冻结 escrow / 通知用户 / 人工审核
    
-   低风险进后台队列，高风险立即打断
    

### **AI Security 在 AI × Web3 中的位置**

贯穿所有桥接层：Chain-aware Context 防恶意上下文 → Web3 Tool Use 防工具滥用 → Agent Wallet 防权限扩大 → Governance AI 防信息操纵

**系统设计目标不是让模型永不犯错，而是让模型犯错时无法直接造成不可接受损失。**

* * *

## **📖 Security（Web3）— Web3 安全**

> 来源：[https://aiweb3.school/zh/handbook/web3/security/](https://aiweb3.school/zh/handbook/web3/security/)

### **核心定位**

Web3 安全不是上线前找人审一次代码，而是**从合约设计、权限、测试、交易模拟、监控、应急暂停到权限撤销的一整套工程流程**。

链上系统的错误成本比普通应用高：合约一旦部署，资产已进入协议，攻击者可直接和公开接口交互，交易结果通常不能随意回滚。

**Web3 安全的核心不是"没有 bug"，而是把可预见风险尽量挡在执行前，并在执行后能快速发现和止损。**

### **第一性原则**

链上系统默认暴露在公开对抗环境里，任何可调用路径都要按攻击面看待。

1.  **权限必须最小化**：owner、admin、upgrade、pause、withdraw 都要有清楚边界
    
2.  **执行前要模拟**：交易能不能成功、会改什么资产、会调用哪些合约
    
3.  **上线后要监控**：异常转账、参数变更、失败交易、价格波动持续观察
    

### **知识节点**

**Reentrancy**

-   合约在外部调用未完成前被再次调用，导致状态被重复利用
    
-   经典模式：先转账 → 再更新余额 → 恶意合约在回调中重复提款
    
-   防护：
    
    -   Checks-Effects-Interactions 模式
        
    -   reentrancy guard
        
    -   避免状态未更新前调用不可信合约
        
    -   测试多合约交互，不只测单函数
        

**Access Control**

-   决定谁能执行敏感动作，最常见也最容易被低估
    
-   检查权限时不要只问"有没有 onlyOwner"，更要问：
    
    -   owner 是 EOA、多签还是治理合约？
        
    -   是否有 timelock？
        
    -   角色能否相互授予？
        
    -   私钥泄漏时最坏结果是什么？
        

**Audit**

-   **外部安全审查，不是安全保证书**
    
-   阅读 audit report 至少看：覆盖了哪些 commit/合约、哪些问题已修复/接受风险、是否覆盖经济机制和外部依赖、上线代码是否和审计代码一致
    

**Simulation**

-   交易发出前的预演：调用哪个合约、转出哪些 token、gas 大概多少、是否 revert
    
-   不能替代审计，但能挡住明显错误：链 ID 错、合约地址错、授权额度异常、滑点过大
    

**Monitoring**

-   上线后的安全感知层：大额转账、管理员权限变更、合约升级、预言机价格异常、TVL 快速流出
    
-   **监控 + 响应**：谁收到告警、谁能 pause、谁确认误报、恢复流程是什么
    

### **AI × Web3 安全交叉**

AI 会让安全边界更复杂。Agent 可以解释合约、生成交易、调用工具，但也可能读错上下文、被 prompt injection 影响、调用错误工具。

**安全设计要把模型输出和链上执行分开**：模型可以建议 → 工具返回事实 → policy 限制权限 → simulation 预演结果 → human check 确认高风险动作 → monitoring 记录执行后果

* * *

## **🔗 AI Security × Web3 Security 交叉感悟**

### **双层防线：输入层 vs 执行层**

今天读的两个安全章节恰好构成一个**纵深防御体系**：

| 防线 | AI Security | Web3 Security |
| --- | --- | --- |
| 输入层 | Prompt Injection / Malicious Context | — |
| 处理层 | Tool Abuse / Permission Isolation / Sandbox | Access Control / Reentrancy |
| 输出层 | Key Safety / Audit Log | Simulation |
| 运行层 | Alert / Audit Log | Monitoring |

AI Security 解决"不可信输入 → 模型"这一环，Web3 Security 解决"模型/代码 → 链上执行"这一环。两者缺一不可——光有 AI 防护没有链上模拟，模型输出了危险交易照样会执行；光有链上防护没有输入层防御，恶意上下文会不断诱导模型生成危险请求直到找到漏洞。

### **最小权限原则的两个面**

-   AI 侧："不要给 Agent 一个万能 Web3 工具"
    
-   Web3 侧："owner/admin/upgrade/pause 都要有清楚边界"
    

本质相同：**能力要和任务精确匹配，多余的能力就是攻击面**。这让我想到 Unix 的最小权限原则和零信任架构的核心思想——在 AI × Web3 里，这个原则必须同时在模型层和合约层实施。

### **审计/日志的一致性**

-   AI Security 的 Audit Log：模型看到了什么上下文 → 为什么选择某工具 → 结果是什么 → policy 判断
    
-   Web3 Security 的 Monitoring：谁调了什么合约 → 资产变化 → 权限变更 → 异常信号
    

两者都需要**完整链路记录**，而且可以打通：当 Agent 发起一笔链上交易，从 AI 侧的上下文/决策记录到 Web3 侧的交易 trace/asset change，应该能串联成一条完整的审计链路。

### **踩坑思考**

1.  **Prompt Injection ≠ "让模型说奇怪的话"**：之前我低估了这个问题。在 Agent 场景里，恶意合约文档可能诱导模型生成转账请求——这不是"说错话"，是"做错事"
    
2.  **Malicious Context 包含错误事实**：不只是恶意指令，假的合约地址、过期价格也是攻击。这让我想到 Hermes Agent 自己的工具调用——如果 API 返回被篡改的数据，模型也会做出错误判断
    
3.  **Simulation 是最后一道自动防线**：在 human check 之前，simulation 能挡住大量"明显错误"。之后做实践时应该优先尝试 Tenderly 或类似工具
    
4.  **Session Key 是 Key Safety 的关键工具**：不给 Agent EOA 私钥，用 session key 限制额度/时间/目标/方法——这正好对应了前几天学的 Account Abstraction
    

### **对 Hermes Agent 的安全反思**

用 Hermes Agent 辅助学习这几周，现在回顾它的工具权限设计：

-   ✅ 有 terminal / file / browser / web 等工具分类
    
-   ✅ 有 delegate\_task 子代理隔离
    
-   ⚠️ 但目前没有显式的"上下文可信级别标注"——如果 curl 请求返回恶意内容，模型会直接当事实用
    
-   ⚠️ 没有 tool rate limit 或 budget 机制（至少用户层面看不到）
    

这是 AI Security 章节提到的两个关键防护，Hermes 作为 Learning Agent 可能不需要，但如果是处理链上资产的 Agent 就必须有。
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->

## **🔧 Dev Tooling — 开发工具赛道**

> 来源：[https://aiweb3.school/zh/handbook/tracks/dev-tooling/](https://aiweb3.school/zh/handbook/tracks/dev-tooling/)

### **核心定位**

Dev Tooling 赛道的核心命题：AI 不只是"帮我写合约"，而是帮开发者**理解协议、解释交易、生成测试、检查部署风险**，把复杂工具链串成更可靠的工作流。

### **第一性原理**

> AI 开发工具的价值不是生成更多代码，而是减少错误理解和不可逆操作。

Web3 里错误代码 = 真实资金损失，所以 AI 工具要优先帮开发者看清上下文、约束和风险，而不是追求"自动完成一切"。

三条原则：

1.  **文档要变成可检索上下文** — 回答必须能回到官方文档、源码或 EIP
    
2.  **交易要变成可解释对象** — 用户需要看到函数、参数、资产变化和风险
    
3.  **部署要变成检查流程** — AI 可以生成 checklist，但关键步骤必须可复核
    

### **六个知识节点**

**1\. Docs-to-Agent**

-   把协议文档、SDK 文档、EIP、README、代码示例和 changelog 变成 Agent 可查询的知识库
    
-   不是简单丢进向量数据库，实用系统需要处理：
    
    -   **文档版本**：回答必须对应当前 SDK/合约版本
        
    -   **来源优先级**：官方文档和源码 > 博客摘要
        
    -   **代码片段可运行性**：示例是否过期、依赖版本是否匹配
        
    -   **引用追踪**：回答里关键步骤要能回到原文
        
    -   **更新机制**：文档更新后索引要同步
        
-   关联：RAG（检索增强）、MCP（标准化工具读取）
    

**2\. Contract Reading Assistant**

-   帮开发者读合约，不只是总结"做什么"，还要解释权限、状态变量、关键函数、事件、外部调用和潜在风险
    
-   应该输出：
    
    -   合约职责和依赖关系
        
    -   谁可以调用管理函数
        
    -   哪些函数会移动资产
        
    -   哪些地方依赖 oracle / owner / proxy / 外部合约
        
    -   是否存在 upgrade、pause、fee、黑名单或紧急权限
        
    -   关键事件如何对应状态变化
        
-   ⚠️ 安全结论不能只靠模型 — 高风险判断应结合 Slither、Foundry 测试、静态分析、审计报告和人工复核
    

**3\. Transaction Interpreter**

-   把 calldata、事件日志、token transfer、approval 和合约调用翻译成人能理解的操作说明
    
-   应该回答：
    
    -   调用了哪个合约和函数
        
    -   参数分别代表什么
        
    -   哪些资产会转出、转入或被授权
        
    -   是否存在无限授权、代理调用或多跳 swap
        
    -   交易失败可能的原因
        
    -   交易和用户原始意图是否一致
        
-   对 Agent 钱包来说，这是**签名前确认**的重要组成部分
    

**4\. Test Generator**

-   AI 帮补测试，不能只生成 happy path — Web3 测试最重要的是边界、权限、失败路径和经济假设
    
-   应覆盖：
    
    -   权限测试：非 owner / admin 能否调用
        
    -   状态转换：每个状态是否只能按规则前进
        
    -   数值边界：0、最大值、精度、舍入和溢出
        
    -   资产安全：余额变化、重复提款、重入、授权边界
        
    -   Oracle 和外部依赖：价格异常、延迟、返回错误
        
    -   升级和迁移：proxy storage layout 是否安全
        
-   ⚠️ 开发者要检查测试是否真的验证了业务不变量
    

**5\. Deployment Checklist**

-   部署是 Web3 开发里最不该临场发挥的环节
    
-   典型 checklist：
    
    -   合约地址、chain id、RPC、deployer 是否正确
        
    -   环境变量和私钥是否隔离
        
    -   编译器版本、optimizer、constructor 参数是否确认
        
    -   proxy admin、owner、多签和 timelock 是否设置正确
        
    -   初始权限、fee、oracle、token 地址是否核对
        
    -   部署后是否验证源码、保存 ABI、写入前端配置
        
    -   监控、告警、pause 权限和回滚方案是否准备好
        
-   AI 输出应该是**可执行清单**，不是一句"部署成功"
    

**6\. SDK Integration Assistant**

-   帮开发者把钱包、RPC、合约调用、事件监听和后端服务接起来
    
-   真正有价值的是减少版本和边界错误：
    
    -   前端框架和包管理器版本兼容性
        
    -   viem / ethers / wagmi / RainbowKit 版本兼容
        
    -   合约 ABI 和地址是否对应目标链
        
    -   read / write / simulate / waitForReceipt 调用顺序
        
    -   错误处理是否区分用户拒签、RPC 失败、链不匹配和交易 revert
        
-   如果能读取本地代码库，可以直接指出应该改哪个文件
    

### **最小实践**

-   选择一个开源 Solidity 合约，输出：
    
    -   合约职责和关键权限
        
    -   会移动资产的函数列表
        
    -   3 个最值得测试的不变量
        
    -   5 条测试用例建议
        
    -   需要人工复核的安全问题
        
    -   使用到的官方文档、源码或工具链接
        

* * *

## **🔌 MCP — 模型上下文协议（复习 + Dev Tooling 对照）**

> 来源：[https://aiweb3.school/zh/handbook/ai/mcp/](https://aiweb3.school/zh/handbook/ai/mcp/)

### **核心定位**

MCP 把模型和外部工具、数据源、应用上下文之间的连接**标准化**。解决的不是"模型会不会更聪明"，而是"模型如何以可描述、可复用、可管理的方式使用外部能力"。

### **与 Dev Tooling 的交叉**

Dev Tooling 里的 Docs-to-Agent 节点直接依赖 MCP：

-   MCP **Server** 暴露文档检索能力 → 对应 Docs-to-Agent 的知识库接口
    
-   MCP **Tool Schema** 定义 search\_docs(query)、get\_file(path) 等工具 → 确保模型调用有结构化输入
    
-   MCP **Permission** 决定哪些路径可读、哪些动作需授权 → 对应 Dev Tooling 的"可检索但可追踪"原则
    

**踩坑点**：一个不加限制的 MCP server，很容易把本地文件、内部 API 或高风险动作暴露给模型。在 Dev Tooling 场景下，这意味着合约源码读取是低风险的，但如果工具暴露了"部署合约"能力，就进入 Contract Write 的权限域。

### **关键节点速记**

| 节点 | 核心要点 | Dev Tooling 对照 |
| --- | --- | --- |
| Server | 暴露 resources/tools/prompts，设计重点是边界 | Docs-to-Agent 的知识库 server |
| Client | 发现 server 能力，展示给用户哪些工具可用 | SDK Integration Assistant 的客户端侧 |
| Tool Schema | 工具名、参数、返回值、约束 — schema 模糊 = 模型猜参数 | Contract Read/Write 必须有清晰 ABI schema |
| Permission | 只读/写入、会话/长期授权、用户确认、副作用、可撤销 | Tool Permission 的分层模型 |

* * *

## **🛠️ Web3 Tool Use — Web3 工具调用（复习 + Dev Tooling 对照）**

> 来源：[https://aiweb3.school/zh/handbook/bridge/web3-tool-use/](https://aiweb3.school/zh/handbook/bridge/web3-tool-use/)

### **核心定位**

Web3 Tool Use 把 RPC、合约读取、交易生成、钱包确认、区块浏览器和 DeFi 操作变成 Agent 可调用工具。真正难的不是"能调用"，而是**权限、参数、模拟和日志**。

### **与 Dev Tooling 的交叉**

Dev Tooling 的六个节点几乎都有 Web3 Tool Use 的影子：

| Dev Tooling 节点 | 对应 Web3 Tool Use 能力 | 风险等级 |
| --- | --- | --- |
| Contract Reading Assistant | Contract Read（view/pure） | 初级（只读） |
| Transaction Interpreter | Explorer Tool + Contract Read | 初级（只读） |
| Test Generator | Contract Read + 模拟 | 初级-中级 |
| Deployment Checklist | Contract Write + Wallet Tool | 高级（写链） |
| SDK Integration Assistant | 全工具链组合 | 中级-高级 |
| Docs-to-Agent | MCP + RPC Tool | 初级（只读） |

### **第一性原理重读**

> 模型可以选择工具，但工具必须用确定性边界限制模型。

三条约束：

1.  **读写分离** — 读取链上状态和发送交易必须是不同工具、不同权限
    
2.  **参数结构化** — chain id、contract address、method、args、value、slippage 不能埋在自然语言里
    
3.  **日志不可省** — 每次工具调用都要记录输入、输出、时间、来源和错误
    

### **工具分级速记**

-   **RPC Tool**（初级）：读链状态、估算 gas → 只读可开放更宽，写入要拆出
    
-   **Contract Read**（初级）：view/pure 函数 → 最常用、相对低风险，但读错网络/ABI 也会误导
    
-   **Contract Write**（高级）：改变链上状态 → 必须：chain id + ABI + 模拟 + policy + 用户授权
    
-   **Wallet Tool**（高级）：连接/签名/交易/授权 → 最敏感边界，高风险必须回用户确认
    
-   **Explorer Tool**（初级）：查交易/源码/事件 → 提供可验证证据
    
-   **DeFi Tool**（高级）：swap/借贷/授权 → 协议白名单 + 最大额度 + 滑点 + simulation + 人工确认
    
-   **Tool Permission**（高级）：按工具/合约/方法/金额/时间/频率分层
    
-   **Tool Log**（中级）：每次调用记录用户目标/工具名/输入/输出/错误/链ID/区块号/交易哈希
    

* * *

## **🔄 Agent Workflow — 智能体工作流（复习 + Dev Tooling 对照）**

> 来源：[https://aiweb3.school/zh/handbook/bridge/agent-workflow/](https://aiweb3.school/zh/handbook/bridge/agent-workflow/)

### **核心定位**

把"用户目标 → 上下文读取 → 计划生成 → 工具调用 → 风险检查 → 执行 → 记录和复盘"组织成可控流程。核心是**把概率模型放进确定性流程里**。

### **与 Dev Tooling 的交叉**

Dev Tooling 的工具链本质就是一个 Agent Workflow：

```
用户请求 → Docs-to-Agent(查找文档) → Contract Read(读取合约) → 
Transaction Interpreter(解释交易) → Test Generator(补测试) → 
Deployment Checklist(检查部署) → SDK Assistant(接入工具) → 记录 Trace
```

每一步都对应 Workflow 的节点：

| Workflow 节点 | Dev Tooling 对应 |
| --- | --- |
| Task Graph | Dev Tooling 工具链本身就是任务图 — 6 个节点有依赖关系 |
| State Machine | 部署流程的状态：draft → configured → simulated → confirmed → deployed → verified |
| Human-in-the-loop | Contract Write 前必须确认；Deployment Checklist 关键步骤需复核 |
| Retry / Fallback | Contract Read 失败可重试；交易 pending 不能简单再发一笔 |
| Trace | Dev Tooling 每一步都应该有 log — 文档来源、合约分析结果、测试覆盖、部署 hash |
| Evaluation Harness | 测试 Generator 生成的测试是否真的验证了不变量 |
| Regression Set | 5 条 regression：正常/错误链/滑点过大/余额不足/用户拒绝 |

### **第一性原理重读**

> 高风险 Agent 不能只有"下一步推理"，必须有状态、边界和停止条件。

三条约束：

1.  **流程要显式** — 不要把完整执行链路藏在一段长 prompt 里
    
2.  **状态要可恢复** — 工具失败、用户拒绝、交易 pending 时，系统要知道如何继续或停止
    
3.  **评估要可回放** — 没有 trace 和 regression set，就很难知道改模型后是否更安全
    

* * *

## **🧠 交叉洞察**

### **1\. Dev Tooling 是 AI×Web3 的"纵向赛道"，MCP/Web3 Tool Use/Workflow 是"横向基础设施"**

Dev Tooling 赛道的每个节点，都可以向下拆解到 MCP（工具接口）、Web3 Tool Use（链上能力）、Agent Workflow（流程控制）三层。理解赛道不是另起炉灶，而是把 Bridge 层的概念组装成面向开发者的产品。

### **2\. "读"的安全、"写"的严格 — 三章的共识**

-   MCP: "只读工具可开放更宽，写入要拆出去"
    
-   Web3 Tool Use: "读写分离，参数结构化，日志不可省"
    
-   Agent Workflow: "只读分析自动执行，高风险交易必须人工确认"
    
-   Dev Tooling: "AI 帮开发者看清上下文和风险，而不是追求自动完成一切"
    

**四章说了同一件事：在 Web3 里，AI 的价值是降低认知负担，不是替代判断。**

### **3\. Dev Tooling 最小实践的实操路径**

我可以直接用 Hermes Agent 作为 Dev Tooling 的实践平台：

-   **Contract Reading Assistant**：让 Hermes 读一个开源合约（如 OpenZeppelin ERC20），输出职责/权限/资产函数/风险
    
-   **Transaction Interpreter**：让 Hermes 解释一笔测试网交易
    
-   **Test Generator**：让 Hermes 为合约生成边界测试用例
    
-   **Deployment Checklist**：用 Hermes 的 MCP server 管理部署流程
    

这恰好也是 Week 2 交付（选定方向 + 小型实战）的切入点。

### **4\. 踩坑/失败预判**

-   **Docs-to-Agent 的幻觉风险**：MCP server 返回的文档片段如果没有版本标注，模型可能基于过时文档生成错误建议 → 解决方案：Tool Schema 强制返回 chain\_id + doc\_version
    
-   **Contract Read 误导链**：读错网络/ABI → 模型基于错误事实建议写交易 → 双重错误 → 解决方案：Contract Read 结果必须带 chain\_id + block\_number + contract\_verified 状态
    
-   **Deployment Checklist 的"假安全感"**：AI 生成了看起来完整的清单 ≠ 开发者真的逐条检查 → 解决方案：checklist 每项需要手动标记"已确认"，而不是 AI 自己打勾
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->


## **📖 Agentic Commerce — 智能体商业**

> 来源：[https://aiweb3.school/zh/handbook/tracks/agentic-commerce/](https://aiweb3.school/zh/handbook/tracks/agentic-commerce/)

### **核心定位**

Agentic Commerce 讨论的是：当 Agent 能代表用户发现商品、调用 API、比较报价、发起付款和验收结果时，商业流程应该如何被重新设计。

这不是"AI 自动买东西"这么简单——真正的难点在交易边界。

### **为什么要探索这个**

传统电商和 SaaS 订阅都是人来点按钮、填表单、确认付款。Agentic Commerce 的变化在于，很多购买行为会变成**机器之间的协作**：Agent 发现服务 → 询价 → 确认预算 → 付款 → 拿结果 → 交回用户。

五个核心问题：

1.  **判断力** — Agent 是否能判断这个服务值得买？
    
2.  **预算表达** — 用户预算如何变成机器可执行的限制？
    
3.  **完成证明** — 服务方如何证明任务完成？
    
4.  **争议处理** — 结果不满意时如何退款或仲裁？
    
5.  **小额高频** — 小额、高频、跨平台的机器支付怎么做？
    

### **第一性原则**

> Agent 可以替用户发起商业动作，但不能替用户承担无限责任。

商业自动化的核心不是让 Agent 随便花钱，而是把购买意图、预算、验收标准和争议规则变成**结构化协议**。

三条原则：

1.  **购买前要有 intent** — 买什么、为什么买、最多花多少、接受什么结果
    
2.  **购买中要有约束** — 报价、有效期、服务条款、数据使用范围和退款条件
    
3.  **购买后要有证据** — 任务结果、收据、日志、验收记录和争议路径
    

### **知识节点**

**Agents Purchasing APIs**

Agent 直接购买 API、数据、推理、存储、检索、执行服务的能力。不是人类开发者提前注册账号、复制 key、充值套餐，而是 Agent 在任务过程中**动态发现服务并完成调用**。

最小流程：

1.  Agent 识别当前任务需要外部服务
    
2.  查询可用服务、价格、能力和限制
    
3.  生成购买请求和预算约束
    
4.  服务方返回报价和调用方式
    
5.  Agent 在用户授权范围内付款并调用
    
6.  系统记录结果、费用和失败原因
    

⚠️ 最重要的不是"自动付款"，而是**服务发现、价格透明、权限限制和调用日志**。

> 相关：Machine Payment（Agent 如何为服务付款）、x402（基于 HTTP 402 的机器支付协议）

**Payment Intent**

用户授权 Agent 花钱之前的结构化表达。比"帮我买最合适的服务"更具体。

一个 Payment Intent 包含：

-   **任务目标**：要完成什么
    
-   **预算**：单次、每日或总额度
    
-   **支付资产**：稳定币、平台余额或其他 token
    
-   **可接受服务方**：白名单、黑名单或最低声誉
    
-   **质量要求**：输出格式、响应时间、准确性或验收标准
    
-   **退款条件**：超时、失败、格式错误、结果不可用
    
-   **有效期**：这次授权持续多久
    

Payment Intent 把用户意愿变成**机器能检查的边界**。Agent 可以在边界内决策，但不能把边界解释得越来越宽。

**Budget Control**

预算控制是 Agentic Commerce 的安全阀。没有预算控制，Agent 的一次循环错误就可能不断购买服务、重复调用 API 或发起无意义交易。

预算应该**分层**：

1.  **任务预算**：完成某个任务最多花多少
    
2.  **服务预算**：单个 API 或 provider 的上限
    
3.  **时间预算**：每小时、每天、每周的总额度
    
4.  **风险预算**：高风险服务必须人工确认
    
5.  **失败预算**：连续失败几次后停止
    

对用户来说，预算界面要可理解：不是一堆抽象参数，而是"这个 Agent 最多能花多少钱、花在哪些服务上、什么时候自动停止"。

**Proof of Task Completion**

服务方拿到钱之前，系统需要判断任务是否完成。Proof 不是单一证明，而是**一组证据**。

不同服务的证据类型：

-   **API 服务**：请求 ID、响应状态、结构化输出、时间戳
    
-   **数据服务**：数据哈希、版本、字段说明、授权记录
    
-   **推理服务**：模型版本、输入摘要、输出哈希、评测结果
    
-   **执行服务**：交易哈希、事件日志、状态变化
    
-   **人工服务**：交付物、验收记录、争议窗口
    

低价值场景 → 日志和回调可能够了；高价值场景 → 需要签名回执、链上事件、第三方评测或托管仲裁。

> 相关：Settlement & Escrow（验收/退款/争议的状态机）、ERC-8183（Agent 任务与支付结算标准化）

**On-chain Receipt**

把关键交易结果记录到链上。不一定保存完整内容，而是保存足够让双方事后核对的**证据**。

一个 receipt 包含：

-   payer、provider、agent 或 task id
    
-   支付金额、资产、链和交易哈希
    
-   服务类型和报价 id
    
-   输出哈希或交付物引用
    
-   完成时间、验收状态和争议状态
    

链上 receipt 的价值：**跨平台结算更容易对账，Agent 商业行为更可追踪**。

⚠️ 不要把所有敏感输入和输出都直接上链，隐私数据只保存哈希或加密引用。

**Escrow Flow**

用托管状态机降低交易双方的不信任。用户不想先付款后拿不到服务，服务方也不想先交付后收不到钱。

基础 escrow 流程：

1.  用户或 Agent 创建任务和预算
    
2.  资金进入托管合约或受控账户
    
3.  服务方接受任务并交付结果
    
4.  系统按验收标准检查结果
    
5.  验收通过则放款
    
6.  验收失败则退款或进入争议
    

⚠️ Agentic Commerce 里的 escrow 要特别注意**自动验收边界**。模型可以帮助判断结果是否合格，但高价值或主观结果不应该只靠模型自动放款。

### **在 AI × Web3 中的位置**

Agentic Commerce 把 Agent、钱包、权限、支付、托管、声誉和验证连在一起。它不是单个功能，而是一条**商业闭环**。

三个切入方向：

1.  帮 Agent 购买 API、数据或推理服务
    
2.  帮服务方接受 Agent 支付并自动交付
    
3.  帮用户管理预算、权限和消费审计
    

### **最小实践：设计"Agent 购买链上数据分析 API"流程**

需要写清楚：

-   用户目标和预算
    
-   Agent 如何发现 API 服务
    
-   服务方报价包含哪些字段
    
-   Payment Intent 如何限制金额、次数和服务范围
    
-   API 如何证明已经完成分析
    
-   收据和日志如何保存
    
-   失败、超时和结果不满意时如何退款
    

* * *

## **💡 个人收获**

### **与 Week 1 Bridge 概念的串联**

Agentic Commerce 是前 5 个 Bridge 概念的**自然收束**：

| Bridge 概念 | Agentic Commerce 中的角色 |
| --- | --- |
| Chain-aware Context | Agent 读取链上价格/流动性/状态来决策是否购买 |
| Web3 Tool Use | Agent 调用链上工具完成支付、查询、交互 |
| Agent Workflow | 从发现 → 询价 → 授权 → 支付 → 验收的完整编排 |
| Agent Wallet | Agent 需要独立钱包来执行付款（受用户预算约束） |
| Machine Payment | x402 协议实现 Agent 之间的 HTTP 402 微支付 |

**关键洞察**：前 5 个 Bridge 概念各自解决一个能力层的问题，Agentic Commerce 则需要**所有能力层同时工作**才能形成闭环。缺任何一层——没有钱包就无法付款，没有预算控制就无法约束，没有验收就无法放款——商业流程就断了。

### **第一性原则的深度**

"Agent 可以替用户发起商业动作，但不能替用户承担无限责任" — 这句话和 Week 1 学的 Agent 第一性原则（"Agent 不是自主权本身，而是被约束的执行循环"）形成了**递进关系**：

-   Week 1 Agent 原则：约束的是**执行过程**（工具、状态、停止条件）
    
-   Agentic Commerce 原则：约束的是**商业责任**（意图、预算、验收、争议）
    

本质上是同一个思想在不同层面的展开：**信任不能被代理，只能被结构化**。

### **Payment Intent 的设计哲学**

Payment Intent 让我想到了合约的 modifier 和 Agent 的 tool 权限分级——三种不同场景下的同一个问题：**如何把人的意图翻译成机器可检查的边界**。

-   合约用 modifier：`onlyOwner`, `whenNotPaused` — 函数级别的权限检查
    
-   Agent 用 tool 分级：只读/写入/需确认 — 工具级别的执行约束
    
-   Agentic Commerce 用 Payment Intent：预算/白名单/有效期/退款条件 — 商业级别的授权边界
    

一层比一层更抽象，但底层逻辑相同：**边界必须可计算，不能靠 Agent "理解"**。

### **Escrow 与自动验收边界**

"模型可以帮助判断结果是否合格，但高价值或主观结果不应该只靠模型自动放款" — 这和 Week 1 的 "Reflection 不能替代外部验证" 完全一致。

这其实是 AI × Web3 的核心设计模式：

-   **低价值/客观标准** → 自动化（Agent 自检 + 合约自动放款）
    
-   **高价值/主观标准** → 人工介入（用户确认 + 争议仲裁窗口）
    

价值高低不是绝对的，而是根据具体场景设定阈值。

### **踩坑预感**

1.  **Payment Intent 边界漂移** — Agent 可能会找到 creative 的方式"解释"用户意图，在边界内做用户没想过的操作。Intent 设计必须考虑"被创造性解读"的情况
    
2.  **Budget Control 的 granularity** — 分 5 层预算看起来很完备，但实际配置体验可能很糟糕。用户需要"简单到能理解"的界面，同时系统需要"精确到能约束"的参数——这两个需求天然矛盾
    
3.  **Escrow 流动性锁定** — 资金在托管期间无法使用，如果服务方交付慢或争议拖长，用户体验很差。需要设计合理的超时机制
    
4.  **On-chain Receipt 的隐私问题** — 哪些信息上链、哪些只存哈希，这个决策比看起来复杂得多。过多信息上链可能暴露 Agent 的商业策略
    

## **❓ 待深入**

-   x402 协议的具体实现（HTTP 402 状态码如何变成完整的支付协商协议）
    
-   ERC-8183 的提案内容（Agent 任务支付的标准化尝试）
    
-   Payment Intent 的具体 schema 设计（如何平衡可表达性和可验证性）
    
-   Escrow 合约的验收状态机设计（自动/半自动/人工验收的切换逻辑）
    
-   Agent Trust & Reputation 如何和 Agentic Commerce 配合（声誉系统是支付决策的重要输入）
    

## ⚠️ **AI Agent 动钱的痛点与风险**

### **资金管理痛点**

-   链上资金管理存在**资金归属安全**和**确定性**问题
    
-   基础设施是否到位也影响 Agent 代币消费
    

### **四类失控风险**

| 风险类型 | 说明 |
| --- | --- |
| Prompt Injection | 因 prompt 受影响或模型幻觉导致执行未经授权交易 |
| Shadow Operations | Agent 在人类看不见的地方创建子账户和执行潜在路径 |
| Unscoped Authority | Agent 对链上资金有无限掌控能力 |
| Zombie Permissions | 授权未撤销导致交易处于系统性风险 |

* * *

## **🛡️ Cobo 的解决方案**

### **1\. MPC 钱包方案**

采用 MPC 解决钱包底层安全性问题：

-   **三方分片**：Cobo、Agent 和 Human 各自持有私钥分片
    
-   **任意一方无独立掌控资金转移权限**
    
-   **开放私钥导出功能**
    
-   **2-2 threshold 模式**：
    
    -   Agent + Cobo 共管（Agent 日常操作）
        
    -   Human + Cobo 配合（人类审批操作）
        

### **2\. Pact 授权协议**

Pact 是一份结构化授权协议，包含四个核心组件：

| 组件 | 作用 |
| --- | --- |
| Intent | 期待 Agent 完成的具体任务或目标 |
| Execution Plan | AI 将 intent 转译成的具体执行计划 |
| Policy | 风控约束：预算审批、白名单链/TOKEN/合约限制等 |
| Completion Condition | 避免 Zombie permission：设定交易时效和数量上限 |

执行流程：

1.  用户表达意图
    
2.  Agent 转译信息，封装成 Pact 推到 APP
    
3.  人类审阅批准
    
4.  Agent 在可控范围内完成交易
    

### **3\. Recipe 知识胶囊**

解决「Agent 如何把事情做对」的问题：

-   预加载知识库，封装合约授权、特殊接口调用等知识
    
-   已上线 AaveV3、UniswapV3 等主流 Recipe
    
-   帮助 Agent 更好完成链上动作
    

* * *

## **🏦 产品应用与讨论**

### **多 Agent 共管资产**

-   单个用户可创建多个钱包，委托多个 Agent 管理理财资产
    
-   不同 Agent 资金彼此独立，更细颗粒度管理资金安全
    

### **小额免密支付**

-   支持 X402 微支付协议
    
-   计划支持 Gasless 场景
    
-   可实现小额免密支付
    
-   在 Pact 体系下将转账行为限制在小风险敞口内
    

### **支付场景分析**

-   主流支付场景目前偏向 Web2
    
-   Agent Economy 未来更多基于链上自主、可追溯的交易形式
    
-   链上支付有快速、高效结算优势
    
-   短期内不会完全颠覆 Web2 支付
    
-   国内链上支付可能有联盟链或企业内部区块链基础设施场景
    

* * *

## **💬 Q&A 精华**

| 问题 | 回答要点 |
| --- | --- |
| 首次执行 vs 重复操作 | 首次需授权，后续相同操作在条件不变时可自动执行 |
| Agent Wallet 与主钱包 | 操作同一账户，但 Agent 操作需人类审批且有资金上限 |
| Human-in-the-loop 趋势 | 短期是主流，未来 agent 足够智能时可能自发完成意图决策和支付 |
| Agent 掉线兜底 | MPC 钱包创建恢复有冗余设计 |
| 防范意图传递攻击 | 通过 Recipe 和 AI 助手审计 Pact |
| 高风险合约 | 需用户自行管理或提交需求添加约束条件 |
| 多跳风控 | 从合约地址、代币数量等参数层面进行风控管理 |

* * *

## **💡 个人收获**

### **与 Week 1-2 学习的串联**

1.  **Agent 发展阶段的递进** — 从问答→建议→Agent→自主探索，和 Week 1 学的 Agent 第一性原则（"Agent 是被约束的执行循环"）形成了张力：越自主，约束越重要
    
2.  **四类风险与 Bridge 概念对照**：
    
    -   Prompt Injection → Week 1 Agent 章节的"幻觉"问题
        
    -   Shadow Operations → Agent Workflow 的可观测性需求
        
    -   Unscoped Authority → Agent Wallet 的权限分层
        
    -   Zombie Permissions → Machine Payment 的时效性
        
3.  **Pact = Payment Intent 的工程实现** — 昨天（05-25）学的 Payment Intent 是理论框架，Cobo 的 Pact 就是它的产品级实现！
    
    -   Intent → Pact.intent
        
    -   Budget Control → Pact.policy（预算审批、白名单）
        
    -   Completion Condition → Pact.completion condition（时效+数量上限）
        
4.  **Recipe = Web3 Tool Use 的知识封装** — Recipe 本质上就是把"如何调用 AaveV3/UniswapV3"这类链上操作知识，打包成 Agent 可直接使用的工具描述——这就是 Week 2 学的 Web3 Tool Use 概念在产品层的落地
    
5.  **MPC 2-2 模式与 Account Abstraction 的关系** — MPC 分片替代了单私钥风险，2-2 threshold 相当于一种"双签"机制。这和 Week 1 概念卡片中的多签、智能账户形成了对照
    

### **踩坑预感**

1.  **Pact 的表达能力边界** — Policy 越细致，用户体验越复杂。和昨天分析的 Budget Control granularity 问题一致
    
2.  **Recipe 的覆盖度** — 只覆盖主流协议（AaveV3、UniswapV3），长尾 DeFi 协议怎么办？Agent 能不能自己"学会"新协议？
    
3.  **Human-in-the-loop 的体验瓶颈** — 如果每笔交易都要人批准，效率比手动操作还低。关键在于"条件不变时自动执行"的规则设计
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->



## **一、Chain-aware Context（链感知上下文）**

**一句话**：让 AI 在行动前看到正确的链、地址、合约、交易、余额——而不是只靠用户一句话猜链上状态。

### **核心要点**

-   **链上状态有时间性**：同一地址余额、授权随区块变化
    
-   **上下文要带来源**：合约地址、区块号、交易哈希、explorer 链接都必须可追溯
    
-   **事实 vs 解释分离**：工具返回事实，模型负责解释，不要把模型猜测当事实
    

### **知识节点速记**

| 节点 | 难度 | 关键记忆点 |
| --- | --- | --- |
| On-chain Data | 初级 | 读取至少带 chain id、block number、contract address、method、返回值、读取时间 |
| Contract Docs | 初级 | ABI 只给签名不解释语义，文档可能过期，仍需链上验证 |
| ABI / Event | 中级 | 能调用 ≠ 应该调用，写交易前还需权限/余额/allowance/simulation/policy 检查 |
| Transaction History | 中级 | 至少保留 hash、block、from/to、method、value、token transfers、logs |
| Explorer Context | 初级 | 给 explorer link 比只说"交易成功"更可靠 |
| Indexing Context | 中级 | 索引必须带时间戳和同步状态，落后 500 区块的结果不是当前事实 |
| Citation | 初级 | 无 citation 的链上解释=观点，有 citation=可验证 |

### **最小实践**

给一笔交易做上下文包：找公开交易哈希 → 收集 chain id、block、from/to、method、value、transfers、logs → 找 ABI/verified source → 写模型可读上下文（每条结论附 citation）→ 标出事实 vs 解释。

### **💡 交叉感悟**

Hermes Agent 的工具调用就有类似的"上下文可信度"问题。比如我调用 `terminal` 执行 `curl` 获取链上数据，返回的是事实；但如果 AI 直接根据记忆说"Uniswap 在 Sepolia 上地址是 0x..."，这可能是过时或错误的。**所有链上事实都应该通过工具读取，不应该靠模型记忆。**

* * *

## **二、Web3 Tool Use（Web3 工具调用）**

**一句话**：把 RPC、合约读写、钱包、Explorer、DeFi 操作变成 Agent 可调用工具——真正难的不是"能调用"，而是权限、参数、模拟和日志。

### **第一性原理**

> 模型可以选择工具，但工具必须用确定性边界限制模型。

### **知识节点速记**

| 节点 | 难度 | 关键记忆点 |
| --- | --- | --- |
| RPC Tool | 初级 | 读写分离；返回含 chain id、provider、block number、method、result |
| Contract Read | 初级 | 最常用低风险，但可能误导（读错网络/合约、ABI 不匹配、数据滞后） |
| Contract Write | 高级 | 需 chain id、ABI method、value 预估、gas 估算、simulation、policy、用户授权 |
| Wallet Tool | 高级 | 最敏感边界——连接/签名/发送/授权/撤销必须分成不同动作 |
| Explorer Tool | 初级 | 提供可验证证据：交易状态、合约验证、事件、token transfer |
| DeFi Tool | 高级 | 必须有协议白名单、最大交易额、最大滑点、价格来源、simulation |
| Tool Permission | 高级 | 按工具/合约/方法/金额/时间/频率/确认级别分层 |
| Tool Log | 中级 | 每次调用至少记录：目标、工具名、输入、输出、错误、时间、chain ID、tx hash |

### **读-写分离原则**

-   只读链上查询 → 自动允许
    
-   交易草稿生成 → 自动允许
    
-   小额白名单支付 → session key 允许
    
-   大额转账/授权 → 必须人工确认
    
-   任意合约调用 → 默认禁止
    

### **💡 交叉感悟**

Hermes Agent 的 `terminal`、`browser`、`file` 等工具本质就是 Tool Use，但目前没有按"读写分离"做权限分级。terminal 既能 `ls` 也能 `rm -rf`，browser 既能读页面也能填表单提交。Web3 场景下这种"万能工具"设计是危险的——对照学习后更理解为什么 Contract Write 和 Wallet Tool 必须独立于 Contract Read。

* * *

## **三、Agent Workflow（智能体工作流）**

**一句话**：把"用户目标 → 上下文 → 计划 → 工具 → 风险检查 → 执行 → 记录"组织成可控流程，而不是让模型自由发挥。

### **第一性原理**

> 高风险 Agent 不能只有"下一步推理"，必须有状态、边界和停止条件。

### **知识节点速记**

| 节点 | 难度 | 关键记忆点 |
| --- | --- | --- |
| Task Graph | 中级 | 目标拆成节点和依赖，每步设输入/输出/权限/停止条件 |
| State Machine | 高级 | 状态：draft → context_loaded → plan_ready → waiting_confirmation → submitted → confirmed/reverted |
| Human-in-the-loop | 中级 | 分层：只读自动/草稿自动/小额session key/高风险人工确认/超policy拒绝 |
| Retry / Fallback | 中级 | 读失败可重试；交易失败先判断是否已广播；pending 不重发；模型不可用降级只读 |
| Trace | 初级 | 记录：目标、模型版本、上下文来源、工具输入输出、policy判断、simulation、确认、tx hash |
| Evaluation Harness | 高级 | 测：是否拒绝越权、是否识别错误链/合约、是否在缺数据时停止、是否要求 human check |
| Regression Set | 中级 | 固定用例防退化：正常请求/错误链/无限approve/恶意文档/余额不足/用户拒绝 |

### **💡 交叉感悟**

Hermes Agent 的 `execute_code` + `terminal` + `delegate_task` 其实就是简化的 workflow，但缺少显式的状态机和 Task Graph。比如 `delegate_task` 的 subagent 完成后只返回摘要，没有 trace 链路可回放。如果要做一个 Web3 Agent，这些"骨架"必须补上。

**Regression Set 的概念特别有用**：每次改 prompt 或换模型后，跑一遍"无限 approve 请求"的测试用例，确认 Agent 没退化成"更顺但更危险"。

* * *

## **四、Agent Wallet（智能体钱包）**

**一句话**：Agent Wallet 不是"给 AI 一个私钥"，而是让用户把一小部分可撤销、可审计的权限交给 Agent。

### **第一性原理**

> 控制权不能交给概率系统。Agent 只能拿到可验证、可限制、可撤销的行动空间。

### **知识节点速记**

| 节点 | 难度 | 关键记忆点 |
| --- | --- | --- |
| AA Wallet | 中级 | Account Abstraction 让账户表达规则：谁能操作、能操作什么、何时失效 |
| Smart Account | 中级 | 带规则的钱包账户：谁可发起/哪些需确认/每天限额/权限失效/异常暂停 |
| Safe | 中级 | 多签+模块分散执行权；Agent 参与流程但不独占控制权 |
| Session Key | 高级 | 临时有限权限小钥匙——限时间/合约/方法/金额/资产/转出/可撤销 |
| Policy | 高级 | 写成系统可检查的规则：每日限额/白名单合约/只swap不approve/滑点超1%停止 |
| Guard | 高级 | 确定性拦截层——Agent 生成候选动作，Guard 拒绝越界动作 |
| Simulation | 中级 | 签名前预演：你付多少/收什么/授权变化/失败风险——回答"你会失去什么" |
| Revocation | 中级 | 所有自动化权限都应有用户可见的关闭入口；系统也可自动收紧 |
| Human Check | 初级 | 不是全手动确认，而是关键风险点让用户看懂并决定 |

### **典型链路**

用户目标 → Agent 读上下文+生成计划 → 系统转受限交易 → Guard+simulation 检查 → 用户确认 → Smart Account/Safe 执行 → 日志记录

### **💡 交叉感悟**

对照 Hermes Agent 的 `terminal` 工具——目前它基本上就是"万能 EOA"，没有 Guard、没有 Policy、没有 Session Key 的概念。如果我要做一个链上 Agent，第一步不是"连钱包"，而是"设计权限边界"。从 Smart Account + Session Key 的思路出发比直接用 EOA 私钥安全得多。

**Simulation 的翻译思路特别好**：不是问"交易能不能发"，而是"这笔交易会让用户失去什么、得到什么、承担什么风险"。这才是用户确认时真正需要理解的信息。

* * *

## **五、Machine Payment（机器支付）**

**一句话**：Machine Payment 不是"AI 会花钱"，而是让机器之间的支付可限制、可验证、可追踪。

### **第一性原理**

> Agent 不应该拥有无限支付能力，只应该拿到具体任务、预算和收款方范围内的支付权限。

### **知识节点速记**

| 节点 | 难度 | 关键记忆点 |
| --- | --- | --- |
| Stablecoin Payment | 初级 | 稳定币=计价单位；仍需处理 chain id/token address/decimals/allowance/gas；approve 是高风险动作 |
| Budget | 初级 | 多层预算：全局/任务/单次上限/服务方上限/紧急停止；设频率和范围，不设总额度 |
| Quote | 中级 | 合格 quote 含：服务内容/价格/币种/收款地址/有效期/退款条件/quote id；过期不可用 |
| Payment Intent | 中级 | "用户授权这类付款"≠"交易已发生"；绑定目标/金额/收款方/有效期/quote引用 |
| x402 | 中级 | HTTP 402 → 互联网原生支付：请求→付款要求→付款→重放；只解决付款协议部分 |
| MPP | 中级 | 机器对机器：发现/报价/授权/结算/收据；链下协商+链上结算 |
| Subscription | 中级 | 订阅+智能账户 policy：月上限/白名单/扣款窗口/异常告警；避免静默续费 |
| Micropayment | 高级 | 先算经济账：单次价值 vs 链上手续费；适合批量结算/L2/payment channel |

### **💡 交叉感悟**

x402 的设计特别优雅——把"付费才能访问资源"放回 HTTP 语义里，Agent 处理 402 就像处理 401（登录）一样自然。不过文中也点出了它的局限：不解决服务质量、退款、交付争议。

MPP 的"机器之间怎么谈生意"是个很有意思的框架：发现→报价→授权→结算→收据。如果把这个协议化，Agent 就不用每次临时拼流程了。

* * *

## **六、AI Security（AI 安全）—— 前沿探索章节**

**一句话**：AI x Web3 的安全核心，是让不可信输入无法直接变成不受限执行。

### **知识节点速记**

| 节点 | 难度 | 关键记忆点 |
| --- | --- | --- |
| Prompt Injection | 中级 | 可能藏在合约README/网页/token metadata/API返回中；分层标注上下文可信级别 |
| Tool Abuse | 高级 | 反复调用付费API/生成无限授权/循环消耗预算——靠 permission/rate limit/budget/human check |
| Malicious Context | 中级 | 错误事实也是攻击：假合约地址/伪造审计/过期价格/被污染 metadata |
| Key Safety | 高级 | secret 不进 prompt、不进输出、不进日志、不进 analytics |
| Permission Isolation | 高级 | 越靠近资产工具接口越窄；最安全工具=刚好完成任务且无法越界 |
| Sandbox | 中级 | 默认禁止访问 .env/ssh key/wallet seed/cookie；浏览器 sandbox ≠ 钱包签名权限 |
| Audit Log | 初级 | 完整链路：模型看什么→为什么选某工具→工具返回什么→policy→用户确认 |
| Alert | 中级 | 异常→响应动作：暂停Agent/撤销session key/冻结escrow/通知用户 |

* * *

## **🧩 Bridge 层整体框架**

读完全部 5 个核心章节后，Bridge 层的关系变得清晰：

```
Chain-aware Context（输入层）
       ↓ 提供"链上事实"
Web3 Tool Use（能力层）
       ↓ 提供"读写工具"
Agent Workflow（流程层）
       ↓ 组织成"可控步骤"
Agent Wallet（权限层）
       ↓ 定义"行动边界"
Machine Payment（支付层）
       ↓ 实现"机器结算"
```

每一层的安全设计原则一致：**概率模型放确定边界里，不可信输入不能变成不受限执行**。

* * *

## **🤔 今日踩坑 & 思考**

### **踩坑**

1.  [**aiweb3.school**](http://aiweb3.school) **连接不稳定**：`/bridge/machine-payment/` 用 curl 反复超时（exit code 28），换浏览器才成功。`/bridge/ai-security/` 在 Bridge 目录下 404，实际在前沿探索下。网站结构有 inconsistency。
    
2.  **Bridge 目录结构 vs 学习计划**：[learning-plan.md](http://learning-plan.md) 里 Week 2 列了 5 个 Bridge 核心 + 方向选择。但实际 Bridge 目录有更多章节（Settlement & Escrow、Agent Identity、Agent Trust & Reputation、AI Oracle、Verifiable AI 等），这些是 Week 3 深化内容。
    

### **关键思考**

1.  **"能调用 ≠ 应该调用"**——这是整个 Bridge 层反复出现的主题。从 Tool Use 到 Wallet 到 Payment，都在强调：能力必须被约束。
    
2.  **Hermes Agent 作为实践对照**：Hermes 目前的工具设计（terminal/browser/file）本质上是"万能工具"，没有按 Web3 的读写分离/Policy/Guard 模式做权限分级。如果要把它改造成链上 Agent，需要：
    
    -   terminal 拆分为 read-only（ls/cat/curl）和 write（rm/mv/write）
        
    -   新增 wallet tool + guard + simulation
        
    -   新增 session key + budget policy
        
3.  **Regression Set 的价值被低估**：不只是测试"能不能做"，更关键是测"会不会在不该做的时候做了"。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->




## **📖 Vibe Coding — 氛围编程**

> 来源：[https://aiweb3.school/zh/handbook/ai/vibe-coding/](https://aiweb3.school/zh/handbook/ai/vibe-coding/)

### **核心定位**

Vibe Coding 不是"把需求丢给 AI 然后等代码出现"。更准确地说，它是一种**人和 AI Coding Agent 共同迭代软件的工作方式**：人负责方向、约束和验收，Agent 负责生成、修改、搜索和执行一部分工程动作。

### **为什么要学这个**

AI Coding Agent 已经能读代码、改文件、跑测试、解释错误、生成 PR。速度变快之后，真正的问题变成：

-   你能不能**清楚描述任务**？
    
-   你能不能**审查结果**？
    
-   你能不能**控制改动范围**？
    
-   你能不能**验证没有引入新 bug**？
    

Vibe Coding 最容易被误解成"凭感觉写代码"。实际可用的做法正好相反：**你要更清楚地管理 repo、任务、上下文、测试和提交边界。**

> AI 能帮你写更多代码，但不能替你承担工程判断。

### **第一性原理**

AI Coding 的核心不是自动生成代码，而是**把工程反馈循环压短**。

过去：自己搜索文件 → 理解模块 → 改代码 → 跑测试 → 看错误 → 再修改。现在 Agent 可以并行承担很多步骤。但如果反馈循环里没有测试、审查和版本控制，速度只会放大混乱。

三条原则：

1.  **任务要小** — 越具体、越有边界，Agent 越容易产出可审查结果
    
2.  **上下文要准** — 让 Agent 看对文件、设计约束和错误输出，比写长篇需求更重要
    
3.  **验证要硬** — 运行测试、类型检查、构建、截图或日志，比"看起来对"可靠
    

### **知识节点**

**1\. Vibe Coding（难度：初级）**

人和 AI Coding Agent 的分工：

-   **人负责**：目标、边界和验收
    
-   **Agent 负责**：搜索、生成、修改和执行
    

Vibe Coding 是一种快速和 AI 共同探索代码的方式。先描述目标 → Agent 生成方案或 patch → 运行、检查、追问、迭代收敛。

适合场景：

-   搭原型
    
-   修小 bug
    
-   补测试
    
-   写脚本
    
-   重构局部模块
    
-   解释陌生代码
    

**不适合**无边界地"重写整个项目"——如果任务范围太大，Agent 很容易改到不该改的地方，或引入看似合理但不符合项目约束的抽象。

**2\. Claude Code / Codex CLI（难度：初级）**

重点不是背命令，而是学会**把 AI Agent 安全地接入本地 repo、终端和测试流程**。

这类工具的关键价值不是"聊天"，而是能在 repo 里行动。正因为它能行动，你需要明确：

-   哪些文件可以改
    
-   哪些命令可以跑
    
-   是否允许安装依赖
    
-   是否允许访问网络
    
-   什么时候必须停下来让人确认
    

相关工具：

-   Claude Code Docs：了解 Claude Code 的本地开发工作流
    
-   OpenAI Codex CLI Help：了解 Codex CLI 的基础使用方式
    

**3\. Model / API Config（难度：中级）**

这一层要处理模型选择、API key、工具权限、上下文、成本和日志，不只是"能不能调用成功"。

常见问题：

-   本地和 CI 用的模型不一致
    
-   API key 泄漏到日志或提交里
    
-   上下文太长导致成本失控
    
-   Agent 使用了不合适的工具权限
    
-   输出风格和项目规范不一致
    

好的配置应该能被团队复用，而不是每个人在本机随手调。

**OpenCLI** 值得关注：把网站、浏览器会话、Electron 应用和本地二进制工具统一成可被命令行调用的接口，让 AI Agent 可以通过更稳定的命令去发现、学习和执行工具。它还可以复用本地浏览器登录态，并把 gh、docker 等本地 CLI 暴露到同一个工具入口里。

这类工具的价值不在于"又多一个 AI 编程产品"，而在于把 Agent 可调用的外部能力变得更清楚：有哪些命令、需要什么权限、输出格式是什么、失败时怎么诊断。

**4\. GitHub / gh（难度：中级）**

你需要把 AI 生成的改动放回版本控制、issue、PR 和 review 流程里，而不是只看一次聊天输出。

实用原则：**让 Agent 多做局部 patch，少做不可追踪的大改动。**

每次改动后至少看：

-   `git diff`
    
-   修改文件列表
    
-   测试结果
    
-   是否包含不该提交的密钥、日志、构建产物
    

**5\. CLI / Script（难度：中级）**

这一层开始把 Agent 输出变成真实命令和脚本，所以要特别关注**读写范围、dry run 和外部副作用**。

很多开发任务不需要完整应用界面，先写 CLI 或脚本更快。Agent 很适合帮你生成一次性脚本、数据迁移脚本、检查脚本和批量修改脚本。

脚本的两个边界：

1.  读写文件前要确认范围
    
2.  会修改外部状态的脚本要先 dry run
    

如果脚本会删文件、发请求、改数据库、提交交易或调用生产 API，就不能只靠 Agent 判断。

**6\. Repo Workflow（难度：高级）**

你要把 AI Coding 接进完整工程流程，并能判断**什么时候应该让 Agent 继续，什么时候必须由人停下来审查**。

Repo Workflow 是把 AI Coding 放进正常工程流程：issue → branch → commit → test → review → merge → release。

不要让 AI 绕过这些流程。更好的方式是让它参与这些流程：

-   从 issue 提炼任务边界
    
-   搜索相关文件
    
-   生成最小 patch
    
-   跑测试并解释失败
    
-   补充 changelog 或文档
    
-   写 PR summary 和验证说明
    

> AI Coding 的质量，最终还是要落到 repo workflow 里。

### **在 AI × Web3 中的位置**

AI × Web3 项目通常同时有前端、合约、脚本、索引器、Agent 后端和文档。Vibe Coding 可以显著加快探索速度，尤其适合 hackathon 和早期原型。

但**链上相关代码的风险更高**。合约、签名、权限、支付、迁移脚本不能只靠 Agent 生成后直接上线。AI Coding 可以帮你写测试、解释 ABI、生成脚本，但高风险动作必须经过审查、模拟和多方确认。

### **最小实践**

选择一个小功能，让 AI Coding Agent 完成一轮完整工程闭环：

1.  写清楚任务边界和不能改的文件
    
2.  让 Agent 搜索相关代码并给出计划
    
3.  让 Agent 做最小 patch
    
4.  运行测试或构建
    
5.  查看 git diff，手动审查结果
    
6.  要求 Agent 写一段 PR summary 和验证说明
    

完成后记录：哪些信息给少了，哪些测试缺失，哪些改动需要人类判断。

### **挑战**

在自己的电脑上安装并配置至少一个 Vibe Coding 工具（例如 Claude Code、Codex CLI 或 OpenCLI），并确认它能在一个测试 repo 中正常使用。

完成标准：

-   能启动工具并读取当前项目
    
-   已配置必要的模型、API key、浏览器桥接或本地工具权限
    
-   能让工具完成一个只读任务（解释目录结构、搜索相关文件、总结某段代码）
    
-   能让工具完成一个低风险小改动（补一段注释、生成一个脚本、修改一处测试）
    
-   保留验证记录：工具版本、配置方式、执行命令、关键输出或截图
    

* * *

## **💡 个人思考**

### **与 Hermes Agent 的对照**

自己正在使用的 Hermes Agent 就是 Vibe Coding 的一种实践：

-   **人负责方向和验收** — 我指定学习目标和提交任务，Agent 执行具体步骤
    
-   **Agent 负责搜索和生成** — 抓取网页、解析内容、写入笔记、调用 API
    
-   **验证要硬** — 每次都 git diff + push，API 结果写文件再解析
    
-   **任务要小** — 一次一个章节学习，而非"一次搞定所有"
    

### **Vibe Coding 的"反直觉"点**

1.  **Vibe Coding 不凭感觉** — 越是"氛围"，越需要明确的边界
    
2.  **速度加快后，审查更重要** — 不是省掉审查，而是审查频率要跟上速度
    
3.  **Agent 不是替代判断，而是放大判断** — 好的判断被放大为好的代码，草率的判断被放大为草率的代码
    

### **Web3 场景的特殊风险**

合约、签名、支付相关代码 — Agent 可以辅助生成，但必须：

-   在测试网先验证
    
-   经过多方 review
    
-   模拟边界情况
    
-   不能"看起来对"就上线
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->





## **📖 MCP — 模型上下文协议**

> 来源：[https://aiweb3.school/zh/handbook/ai/mcp/](https://aiweb3.school/zh/handbook/ai/mcp/)

### **核心定位**

MCP 试图把模型和外部工具、数据源、应用上下文之间的连接标准化。它解决的不是"模型会不会更聪明"，而是"模型如何以可描述、可复用、可管理的方式使用外部能力"。

可以理解为 AI 应用的"工具接口标准"：客户端负责和模型交互，server 负责暴露资源、工具和 prompts。

### **第一性原则**

模型不应该直接拥有世界；它应该通过明确协议访问被授权的上下文和工具。

MCP 的关键不是"能接更多工具"，而是让工具接入变得**可描述、可发现、可限制**。

三条原则：

1.  **工具要有 schema** — 没有 schema，模型调用工具就会变成自然语言猜参数
    
2.  **权限要在协议外也成立** — 协议能描述能力，但真正的授权、审计和隔离仍要由系统实现
    
3.  **错误要可传递** — 工具失败、超时、权限不足，必须明确返回，而不是让模型猜
    

### **知识节点**

**Server**

-   MCP Server 是提供能力的一侧，暴露 resources、tools、prompts
    
-   设计重点是**边界**：
    
    -   暴露哪些资源
        
    -   哪些工具只读，哪些有副作用
        
    -   参数 schema 是否清楚
        
    -   错误如何返回
        
    -   是否需要用户授权
        
    -   日志和审计在哪里记录
        
-   一个不加限制的 MCP server，很容易把本地文件、内部 API 或高风险动作暴露给模型
    

**Client**

-   MCP Client 连接模型和 server（桌面应用、IDE、Agent runtime、聊天客户端）
    
-   负责发现 server 能力、把工具信息交给模型、把模型调用请求转回协议消息
    
-   也应负责用户确认、权限提示、会话隔离和工具调用展示
    
-   判断 client 靠不靠谱：是否让用户知道连接了哪些 server、模型能调用哪些工具、调用前是否需要确认
    

**Tool Schema**

-   描述工具名字、用途、参数、返回值和约束
    
-   好的 schema 不只是字段类型，还要说明：
    
    -   这个工具什么时候用
        
    -   参数代表什么
        
    -   哪些字段必填
        
    -   是否会修改外部状态
        
    -   失败时返回什么
        
-   Schema 写得模糊，模型就会用错误参数填空
    
-   **关联**：工具描述本质上也是 prompt 的一部分；Agent 的工具调用能力必须和状态、权限、停止条件一起设计
    

**Permission**

-   MCP 真正进入产品时最容易被低估的问题
    
-   方便 ≠ 安全。读文档、查 issue、创建 PR、发支付、删文件，风险完全不同
    
-   Permission 至少要区分：
    
    -   只读还是写入
        
    -   当前会话授权还是长期授权
        
    -   是否需要用户确认
        
    -   是否能访问敏感信息
        
    -   是否会产生外部副作用
        
    -   是否可撤销和审计
        
-   **Server 暴露能力之前，应该先定义权限模型**
    

### **在 AI × Web3 中的位置**

MCP 可以作为 Agent 连接链上工具和开发工具的接口层：

-   读取区块浏览器、查询合约文档、调用 RPC、生成交易草稿、读取项目 issue
    

但 MCP 本身**不是钱包安全方案**。它可以标准化工具入口，不能替代账户权限、交易模拟、签名确认、session key 和审计日志。

**比较稳的设计**：MCP 负责工具发现和调用格式；Web3 账户系统负责最终权限和执行边界。

### **最小实践**

做一个只读 MCP server，暴露两个工具：

1.  `search_docs(query)` — 搜索本地项目文档
    
2.  `get_file(path)` — 读取白名单目录里的文件
    

要求：

-   不能读取白名单外路径
    
-   返回结果必须带来源路径
    
-   工具调用要写日志
    
-   错误要明确返回
    

完成后，再设计"写入工具"的权限升级方案：什么时候需要用户确认、如何撤销授权、如何审计。

### **💭 个人思考**

-   MCP 本质是 AI 世界的"API 标准化"，类似 Web3 里 ERC 标准化合约接口的思路。一边是让工具可组合，一边是让合约可组合，背后都是**可描述、可发现、可限制**
    
-   Permission 部分让我想到 Agent 章节里的"工具比回答更危险"。MCP 让接入更方便，但方便的接入如果没有权限模型，反而放大了风险
    
-   **实际体验关联**：我正在用的 Hermes Agent 就内置了 native MCP client（在 skills 里看到 `native-mcp` skill）。它通过 MCP 协议连接外部服务器，自动发现工具，用户在 config.yaml 里配置服务器。这恰好就是 Client 端的实现——连接 server、发现能力、把工具交给模型
    
-   MCP + Web3 的关键洞见：MCP 管"发现和调用格式"，Web3 账户系统管"最终权限和执行边界"。两层分离，不要让 MCP 管钱
    

* * *

## **📖 Network — 网络**

> 来源：[https://aiweb3.school/zh/handbook/web3/network/](https://aiweb3.school/zh/handbook/web3/network/)

### **核心定位**

Web3 里的"网络"不是抽象背景，而是交易能否被打包、状态能否被同步、费用如何产生、确认需要多久、L2 和主网如何分工的**基础环境**。

链上应用不是直接写数据库，而是在一个公开、按区块推进、由网络共识维护的状态机上提交请求。

### **第一性原则**

区块链网络的核心不是"存数据"，而是让互不信任的参与者对状态变化达成一致。

普通应用里服务器可以直接更新数据库；链上系统里，交易要被节点传播、执行、打包、验证和确认。这个过程带来公开可验证性，也带来延迟、费用和最终性问题。

三条原则：

1.  **区块是同步节奏** — 状态不是每毫秒连续更新，而是按区块批量推进
    
2.  **共识是信任来源** — 用户相信状态不是因为某家公司说了算，而是因为网络按规则达成一致
    
3.  **网络选择会改变体验** — 主网、测试网、L2 的费用、速度、安全假设和工具支持都不同
    

### **知识节点**

**Block（初级）**

-   区块是交易被批量提交和排序的单位
    
-   包含：交易列表、前一区块引用、状态根、时间戳、gas 使用情况、共识相关信息
    
-   重点关注三件事：
    
    1.  交易有顺序，顺序会影响结果
        
    2.  区块有 gas limit，网络吞吐不是无限的
        
    3.  新区块引用前一区块，形成可验证历史
        

**Consensus（中级）**

-   共识是网络决定"哪段历史有效"的机制
    
-   对应用开发者的影响：
    
    1.  交易需要等几个 confirmation 才算安全
        
    2.  区块可能短暂重组，前端不能过早假设最终结果
        
    3.  节点故障或 RPC 异常时，状态读取可能延迟
        

**PoS（中级）**

-   以太坊当前使用 Proof of Stake
    
-   验证者质押 ETH 参与区块提议和证明，行为错误被惩罚（slashing）
    
-   网络安全来自经济质押、客户端实现和节点参与
    
-   解释了区块时间、最终性、验证者、质押、slashing 这些概念
    

**Testnet（初级）**

-   测试网用于在接近真实链的环境里测试合约、前端和交易流程
    
-   Testnet 资产没有真实经济价值，但能验证部署脚本、钱包连接、RPC 配置等
    
-   **测试网不能替代主网安全审查**：流动性、MEV、攻击动机、资产规模和用户行为都不同
    
-   做项目时至少记录：
    
    1.  部署在哪条测试网
        
    2.  合约地址和部署交易
        
    3.  使用哪个 RPC
        
    4.  前端如何切换 chain id
        
    5.  测试资产从哪里获取
        

**L2（中级）**

-   在主网安全和更低成本之间做扩展的网络层
    
-   大量交易放到主网之外执行，结果/证明提交回主网
    
-   优势：费用更低、确认更快
    
-   复杂性：桥、提现等待、排序器、跨链状态同步
    
-   **产品设计不能只写"支持 Ethereum"**：要清楚展示当前网络、资产在哪条链、桥接需要多久、合约地址是否不同
    

**Rollup（高级）**

-   主流 L2 扩展路线，执行搬到链下/L2，数据和结果提交到 L1
    
-   两种类型：Optimistic Rollup（欺诈证明）和 ZK Rollup（零知识证明）
    
-   差异：证明方式、提现延迟、数据可用性、开发体验、生态工具
    
-   **关键判断**：Rollup 降低了单笔交易成本，但没有消除链上系统复杂度。跨链资产、RPC、浏览器、合约地址、桥接风险和用户确认，仍然要处理
    

### **在 AI × Web3 中的位置**

AI Agent 读取链上状态或执行交易时，**必须知道自己在哪条网络上操作**。主网和测试网、L1 和 L2、不同 chain id、不同合约地址，不能靠模型"猜"。

更稳妥的做法：让工具返回**结构化网络信息**——chain id、RPC 来源、区块高度、交易哈希、确认数、explorer 链接。Agent 的总结应该引用这些可验证信息，而不是只说"交易成功了"。

### **最小实践**

做一笔测试网交易追踪：

1.  在测试网领取少量测试 ETH
    
2.  用测试钱包发送一笔转账或调用一个简单合约
    
3.  在区块浏览器里查看交易状态、区块号、gas used、from、to 和 logs
    
4.  记录交易从 pending 到 confirmed 用了多久
    
5.  切换到另一条网络，观察同一个地址的余额和交易历史是否不同
    

完成后写下：如果这个流程由 AI Agent 辅助，哪些字段必须由工具读取，哪些描述可以由模型生成。

### **💭 个人思考**

-   Network 章节把"链上应用不是直接写数据库"这个本质讲得非常清楚。交易签名 → RPC → mempool → 区块 → 共识 → 执行 → 确认 → 索引 → 浏览器，这条链路对理解 Web3 所有上层问题都至关重要
    
-   **和前几天的知识串联**：
    
    -   Wallet 章节的"签名入口"，在这里变成了交易链路的起点
        
    -   Transaction & Gas 章节的"gas 机制"，在这里变成了区块 gas limit 的约束
        
    -   Smart Contract 章节的"合约执行"，在这里变成了区块内交易按序执行后的状态更新
        
-   Testnet 不能替代主网安全审查这个观点很重要。测试网验证的是**流程正确性**，不是**经济安全性**
    
-   AI Agent 必须知道自己在哪条网络——这和 MCP 章节的"Tool Schema 必须明确"直接呼应。网络信息就是 Agent 调用链上工具时最关键的 schema 字段之一
    
-   L2/Rollup 的复杂性让我意识到：AI Agent 如果要支持多链操作，不能只是"切换 network"，还要理解桥接时间、排序器风险、提现延迟等差异。这些信息必须通过工具结构化返回，不能靠模型"猜"
    

* * *

## **🔗 交叉感悟：MCP × Network**

今天的两个章节有一个非常自然的交叉点：

**MCP 定义了"工具怎么被描述和调用"，Network 定义了"链上工具必须区分哪些网络环境"。**

结合起来就是：

-   MCP 的 Tool Schema 应该包含网络信息字段（chain id、RPC 来源等）
    
-   MCP 的 Permission 模型需要区分主网 vs 测试网的授权级别
    
-   Agent 通过 MCP 调用链上工具时，返回的结果应该是结构化的网络信息，而不是模糊的文字描述
    

这正是 handbook 反复强调的思路：**MCP 管工具发现和调用格式，Web3 账户系统管最终权限和执行边界**。网络信息是两者之间的桥梁。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->






## **📖 Agent — 智能体**

> 来源：[https://aiweb3.school/zh/handbook/ai/agent/](https://aiweb3.school/zh/handbook/ai/agent/)

### **核心定位**

Agent 是能围绕目标持续调用工具、读取状态、调整步骤的 AI 系统。关键不在"像人"，而在于能不能在明确权限和可审计流程里，把建议推进到行动。

### **第一性原则**

Agent 不是自主权本身，而是被约束的执行循环。目标、工具、状态、权限和停止条件缺一不可。

三条原则：

1.  **工具比回答更危险** — 读数据、写数据库、发送请求、改配置不是同一风险等级
    
2.  **状态必须外置和可查** — 任务进度、工具结果、失败原因、用户确认都要记录，不应只藏在模型上下文里
    
3.  **停止条件要明确** — 达到目标、超出预算、信息不足、风险越界、用户拒绝，都应该让 Agent 停下来
    

### **知识节点**

**Tool Use**

-   Agent 调用外部能力：搜索、数据库、API、代码执行、邮件、支付接口等
    
-   工具让 Agent 从"会回答"变成"能做事"，但也让 Prompt Injection 和误判更危险
    
-   一个能读网页的 Agent 被恶意网页影响 vs 一个能写入系统的 Agent 被恶意网页影响 — 后果完全不同
    
-   工具设计要明确：输入 schema、权限范围、是否只读、是否产生外部副作用、调用前后如何记录、哪些需要人工确认
    

**Planning**

-   把目标拆成步骤，计划是候选路线，不是授权
    
-   越靠近高风险动作，计划越需要被系统规则拆开检查
    
-   好的 Agent plan 应暴露：每步需要什么工具、读还是写、哪些可自动执行、哪些需确认、失败可否重试、如何验证完成
    

**State**

-   Agent 当前任务状态：用户目标、已完成步骤、工具返回、错误、预算、确认记录和最终输出
    
-   ⚠️ 很多 Demo 把 state 只放在 prompt 历史里，这不够 — 生产系统需要可查询、可恢复、可审计的 state
    
-   否则很难回答：Agent 为什么调用了这个工具？是否拿到用户确认？哪一步开始偏离目标？
    

**Reflection**

-   Agent 检查自己的中间结果并修正下一步
    
-   适合提升复杂任务质量，但**不能替代外部验证**
    
-   模型可能给自己的错误找理由 — 写入/授权/支付动作，reflection 只能辅助诊断，不能做最终安全判断
    
-   自我检查可以提高质量，确定性检查才能承载风险
    

**Multi-Agent**

-   多个 Agent 分工协作：研究 Agent 读资料，开发 Agent 写代码，安全 Agent 做审查，执行 Agent 调用工具
    
-   ⚠️ 会放大协调问题：上下文传递丢失、责任边界模糊、一个 Agent 的错误被另一个 Agent 当成事实、工具权限扩散
    
-   先问朴素问题：多个 Agent 是否真的减少复杂度？如果只是把不清楚的流程拆成多个不清楚的角色，系统更难调试
    

### **Agent 在 AI × Web3 中的位置**

Agent 位在模型能力和链上执行之间，可以把用户目标推进成多步流程，但不能绕过账户、权限和结算规则。

一个相对稳的 AI × Web3 Agent 架构：

1.  用户提出目标和约束
    
2.  Agent 读取上下文并生成计划
    
3.  系统把计划拆成只读步骤和候选写入步骤
    
4.  只读工具自动执行，写入工具进入 policy 检查
    
5.  Simulation 展示链上影响
    
6.  用户确认高风险动作
    
7.  Wallet / Smart Account 执行
    
8.  日志记录每一步和最终状态
    

> 最危险的设计：让 Agent 同时拥有模糊目标、广泛工具、长期记忆和大额资产权限。

### **最小实践：DAO 提案研究 Agent（只读版）**

它只能执行只读动作：

-   读取提案正文
    
-   检索论坛讨论
    
-   总结支持和反对理由
    
-   标记缺失信息
    
-   输出投票前检查清单
    

不要让它直接投票。输出里明确：用了哪些来源、哪些结论证据不足、是否发现治理或资金风险、如果要投票还需人工检查什么。

权限升级版：只有当用户明确授权，并经过投票交易 simulation 后，系统才允许生成投票交易草稿。

* * *

## **💡 个人收获（Agent）**

-   Agent 的本质是"被约束的执行循环"——这个定义比"自主决策系统"更精准，也更有工程价值
    
-   State 外置化和可审计是关键——Hermes Agent 的 memory/skill/context 三层结构其实就是一种 state 分层：memory 是跨会话持久状态，skill 是过程知识，context 是当前任务状态
    
-   Reflection 不能替代外部验证——"自我检查提高质量，确定性检查承载风险"这句话很到位，对应到 Web3 就是 simulation 不能替代多签确认
    
-   Multi-Agent 的"朴素问题"值得反复问——我日常用 Hermes 的 delegate\_task 就是一种 Multi-Agent，确实遇到过上下文传递丢失的问题
    

## **❓ 待深入**

-   Agent 的 Planning 在实际项目中的拆解策略（和 Hermes 的 plan skill 对比）
    
-   Tool Use 的权限分层具体实现方案（只读/写入/需确认三级）
    
-   Multi-Agent 之间的上下文传递最佳实践
    

* * *

## **📖 Smart Contract — 智能合约**

> 来源：[https://aiweb3.school/zh/handbook/web3/smart-contract/](https://aiweb3.school/zh/handbook/web3/smart-contract/)

### **核心定位**

智能合约不是"自动执行的法律合同"，而是部署在链上的程序。它把规则、资产和状态放到公开可验证的执行环境里，也把错误、权限和升级风险暴露给所有人。

### **第一性原则**

合约的价值来自可验证执行，不来自"代码看起来很聪明"。

三条原则：

1.  **状态公开可查** — 链上状态不是私有数据库字段，很多信息会被所有人看到
    
2.  **调用有成本和顺序** — 每次执行都受 gas、区块顺序和外部状态影响
    
3.  **权限必须显式** — 谁能 mint、pause、upgrade、withdraw，不能靠默认信任
    

### **知识节点**

**Solidity**

-   EVM 生态最常见的合约语言
    
-   关键不是语法，而是 storage、msg.sender、modifier、event、external call、revert 和权限控制这些链上特有概念
    
-   最小合约示例：Counter 合约 — count 是链上状态，increment() 是写操作需签名+gas，event 是外部可索引日志
    
-   前端读取 count() 不需要签名，调用 increment() 需要钱包签名并支付 gas
    

**EVM**

-   合约执行环境，决定代码如何部署、调用、计费和隔离
    
-   Solidity 编译成 EVM 字节码，部署到链上由节点执行
    
-   解释了：为什么要 gas、为什么 storage 贵、为什么外部调用有风险、为什么合约能部署到多条 EVM 链
    

**ABI**

-   合约的机器可读接口说明：有哪些函数、参数、返回值和事件
    
-   前端 SDK、脚本、区块浏览器和 AI 工具都通过 ABI 理解如何编码调用数据、解码返回结果
    
-   ⚠️ ABI 是 Agent 理解合约能力的重要上下文，但只告诉"能调用什么"，不保证"调用是否安全"
    
-   ABI 不会告诉你：to 是否恶意、amount 单位是否正确、是否触发外部合约、余额是否足够、函数是否被暂停
    

**Event**

-   合约向外部系统留下的可索引日志
    
-   事件不会成为合约可读取状态，但适合让外部系统追踪"发生过什么"
    
-   前端订单列表、用户历史、数据看板往往通过索引事件构建，不是逐条读 storage
    
-   例：NFT marketplace 发出 OrderCreated / OrderCancelled / OrderFilled
    

**Upgrade**

-   合约升级是安全、治理和产品迭代之间的权衡
    
-   不可升级更接近"规则固定"，但 bug 修复困难；可升级更灵活，但引入管理员权限、治理攻击和用户信任问题
    
-   判断升级风险四问：
    
    1.  升级权限在谁手里（单签/多签/DAO/timelock）？
        
    2.  用户能否提前看到升级提案和新实现地址？
        
    3.  升级能否改变资产转移、提款、暂停或权限逻辑？
        
    4.  管理员密钥泄漏最坏结果是什么？
        
-   ⚠️ "合约已审计"但不说明升级权限 — 安全说明仍然不完整
    

### **一个调用流程怎么发生**

以"用户点击投票按钮"为例：

1.  前端读取钱包地址和当前网络
    
2.  根据 ABI 编码 vote(proposalId) 调用数据
    
3.  钱包展示交易信息，用户确认签名
    
4.  交易广播到 RPC 节点
    
5.  验证者把交易打包进区块
    
6.  EVM 执行合约逻辑 — 成功则更新状态并发出 event，失败则 revert
    
7.  前端监听交易回执，更新页面状态
    
8.  索引器读取 event，更新历史记录或看板
    

> 合约开发不能只看 Solidity 文件 — 要同时理解钱包、RPC、区块浏览器、前端 SDK、event 和索引层。

### **常见错误**

-   把 view 函数和写交易混在一起：读取不需要签名，改变状态需要交易
    
-   没有处理 decimals：token amount 不是人类看到的"1.5"，而是按 decimals 放大的整数
    
-   只测成功路径：权限失败、余额不足、重复调用、过期时间、暂停状态都要测
    
-   把 owner 当成永远可信：owner 权限太大时，用户实际是在信任管理员
    
-   忽略事件设计：没有事件，后续做前端历史、索引和审计会困难很多
    

### **Smart Contract 在 AI × Web3 中的位置**

智能合约应承担最终规则和约束，而不是把所有判断交给模型。

稳架构：**AI 做建议和编排，钱包做授权确认，合约做可验证执行，监控系统记录结果。**

即使 AI 输出不稳定，链上规则仍然有明确边界。

### **最小实践：合约阅读练习**

找一个已验证源码的简单 ERC-20 或 NFT 合约：

1.  在区块浏览器查看源码、ABI、事件和最近交易
    
2.  找出哪些函数改变状态，哪些只是读取
    
3.  找出权限函数（owner、admin、pause、mint、burn、upgrade）
    
4.  找出最重要的 event，解释它对应哪类用户动作
    
5.  用一句话解释：这个合约最重要的风险边界是什么
    

* * *

## **💡 今日收获汇总**

**AI 侧（Agent）**：Agent = 被约束的执行循环。State 必须外置可审计，Reflection 不能替代外部验证，Planning 是候选路线不是授权。最危险的设计是模糊目标 + 广泛工具 + 长期记忆 + 大额资产权限。

**Web3 侧（Smart Contract）**：合约 = 部署在链上的程序。价值来自可验证执行，不是代码聪明。ABI 是机器接口不是安全说明书，Upgrade 四问不能省，前端状态往往来自 event 索引而非直接读 storage。

**交叉感悟**：Agent 和 Smart Contract 在 AI × Web3 中是**互补的执行层** — Agent 负责灵活推理和编排，合约负责固定规则和可验证边界。两者共同的原则是：

-   **权限必须显式** — Agent 的 tool use 需要权限分级（只读/写入/需确认），合约的函数需要 modifier 和 access control，本质一样
    
-   **State 必须可查** — Agent 的 state 不应只藏在 prompt 里，合约的 state 天然公开可查——链上状态其实是"state 外置化"的终极形态
    
-   **执行需要审计** — Agent 的日志记录每一步，合约的 event 记录每次状态变化——两种审计机制对应不同层级的可信度需求
    

一句话：**Agent 是"会思考但必须被管住"的执行者，合约是"不会思考但规则透明"的执行者。AI × Web3 的关键设计就是把两者放在正确的位置上** — 让 Agent 处理需要灵活性的部分，让合约守住不能出错的边界。

## **❓ 待深入**

-   Agent Planning 的实际拆解策略（对比 Hermes plan skill）
    
-   Tool Use 权限分层具体实现（只读/写入/需确认三级）
    
-   找一个已验证合约做最小实践（合约阅读练习）
    
-   Upgrade proxy 模式的具体技术实现（proxy vs implementation 合约）
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->







## **📖 Context — 上下文**

> 来源：[https://aiweb3.school/zh/handbook/ai/context/](https://aiweb3.school/zh/handbook/ai/context/)

### **核心定位**

Context 是模型这一次能看到、能使用、能被影响的信息空间。真正难的不是把更多内容塞进去，而是把系统规则、用户目标、历史状态、工具结果和外部文档分清楚。

### **第一性原则**

模型只能基于它看见的上下文行动；系统必须决定什么能进上下文、带着什么身份进去、过期后怎么退出。

三条原则：

1.  **可信来源要显式标注** — 系统状态、用户输入、检索文档、工具结果要分区放置
    
2.  **上下文要可刷新** — 状态、配置、权限、价格、版本和任务进度不能长期缓存后继续使用
    
3.  **记忆要可撤销** — 用户偏好和历史任务可以提升体验，但不能变成隐藏权限或永久身份假设
    

### **知识节点**

**Context Window**

-   模型一次请求能处理的最大上下文范围
    
-   窗口越大 ≠ 模型会完美使用每个细节
    
-   ⚠️ 长上下文常见问题：看见了但没抓住重点，被无关内容分散注意力，引用过期段落
    
-   正确用法：关键状态直接给，长文档按需取，低可信内容隔离标注
    

**Context Engineering**

-   设计上下文进入模型的方式：选择数据源、排序、裁剪、标注来源、隔离不可信内容、决定哪些必须每次重新查询
    
-   一个稳定的工具型 Agent 上下文应包括：
    
    1.  当前任务状态
        
    2.  工具返回结果
        
    3.  相关日志或证据
        
    4.  可信数据来源
        
    5.  外部检查结果
        
    6.  用户原始意图
        
    7.  系统禁止事项和输出 schema
        
-   **目标不是塞满窗口，而是让模型在正确的信息层级里工作**
    

**Memory**

-   跨请求保留的信息：用户偏好、历史任务、常用钱包、项目配置
    
-   ⚠️ 隐性风险：记住"用户常用 0xabc 地址"→ 下次默认是收款地址；记住"用户风险偏好较高"→ 放松高风险交易确认
    
-   **Memory 不能替代实时授权** — 过去允许 ≠ 现在仍然允许，涉及身份/权限/资产的记忆必须重新绑定当前会话
    

**Knowledge Base**

-   系统可检索的外部知识库：产品文档、SDK 文档、代码说明、FAQ
    
-   解决知识过期问题，但不自动保证正确
    
-   知识库至少要记录：
    
    -   文档来源和 URL
        
    -   最后更新时间
        
    -   适用协议版本
        
    -   适用版本或运行环境
        
    -   是否来自官方或第三方
        
    -   是否需要人工复核
        

### **Context 在 AI × Web3 中的位置**

Context 是连接模型和现实系统的入口。AI 负责推理，Web3 负责状态和结算；context 决定模型看到的是用户幻想、过期文档，还是可验证的链上事实。

靠谱的 Agent 上下文分层：

-   **指令层**：系统规则、工具使用规则、禁止事项
    
-   **任务层**：用户目标、本次会话参数
    
-   **事实层**：链上状态、工具结果、simulation
    
-   **知识层**：文档、标准、论坛、历史案例
    
-   **记忆层**：用户偏好和项目配置
    

> 层级越清楚，后续越容易做权限控制、prompt injection 防护和审计。

### **最小实践：钱包授权检查 Agent 的 context spec**

场景：用户问"这个 dApp 要我 approve，可以签吗？"模型回答前必须拿到的上下文：

1.  chain id 和当前区块
    
2.  token 合约、spender 地址、approve 数量
    
3.  用户当前 allowance 和余额
    
4.  spender 是否在可信列表
    
5.  simulation 或静态检查结果
    
6.  dApp 页面提供的说明（标记为不可信外部内容）
    
7.  用户本次意图
    

字段分类：

-   **必须实时查询**：chain id、当前区块、allowance、余额、simulation 结果
    
-   **可以缓存**：token 合约元数据（name/decimals）、可信列表
    
-   **不能被模型当成事实**：dApp 页面说明、用户意图（需交叉验证）
    

* * *

## **💡 个人收获（Context）**

-   Context Engineering 是信息治理问题，不是简单的"多塞点资料"——给模型错误信息比缺信息更危险
    
-   Memory 的隐性风险很值得警惕：在 Web3 场景中，"记住上次授权"可能直接导致资产损失
    
-   上下文分层模型（指令/任务/事实/知识/记忆）和 LLM 的"推理层而非真相源"原则一脉相承：每层都有自己的可信度边界
    

## **❓ 待深入**

-   RAG 中的具体检索策略和引用机制（明天学 RAG 章节）
    
-   prompt injection 防护的具体技术手段
    
-   Context Engineering 在 Hermes Agent 中的实际应用（memory vs skill vs context）
    

* * *

## **📖 Network — 网络**

> 来源：[https://aiweb3.school/zh/handbook/web3/network/](https://aiweb3.school/zh/handbook/web3/network/)

### **核心定位**

Web3 里的"网络"不是抽象背景，而是交易能否被打包、状态能否被同步、费用如何产生、确认需要多久、L2 和主网如何分工的基础环境。

### **第一性原则**

区块链网络的核心不是"存数据"，而是让互不信任的参与者对状态变化达成一致。

三条原则：

1.  **区块是同步节奏** — 状态不是每毫秒连续更新，而是按区块批量推进
    
2.  **共识是信任来源** — 用户相信状态不是因为某家公司说了算，而是网络按规则达成一致
    
3.  **网络选择会改变体验** — 主网、测试网、L2 的费用、速度、安全假设和工具支持都不同
    

### **知识节点**

**Block**

-   交易被批量提交和排序的单位
    
-   包含：交易列表、前一区块引用、状态根、时间戳、gas 使用、共识信息
    
-   理解重点：
    
    1.  交易有顺序，顺序影响结果
        
    2.  区块有 gas limit，网络吞吐不是无限的
        
    3.  新区块引用前一区块，形成可验证历史
        

**Consensus**

-   网络决定"哪段历史有效"的机制
    
-   对应用开发者的具体影响：
    
    1.  交易需要等几个 confirmation 才算安全
        
    2.  区块可能短暂重组，前端不能过早假设最终结果
        
    3.  节点故障或 RPC 异常时，状态读取可能延迟
        

**PoS（Proof of Stake）**

-   用质押和惩罚机制组织验证者，替代 PoW 挖矿
    
-   以太坊当前使用 PoS，验证者质押 ETH 参与区块提议和证明
    
-   网络安全来自经济质押、客户端实现和节点参与，不是"免费"的
    

**Testnet**

-   接近真实链的环境测试合约、前端和交易流程
    
-   ⚠️ 测试网不能替代主网安全审查 — 流动性、MEV、攻击动机、资产规模都不同
    
-   做项目至少要记录：部署在哪条测试网、合约地址、RPC、chain id 切换、测试资产来源
    

**L2**

-   在主网安全和更低成本之间做扩展
    
-   优势：费用更低、确认更快
    
-   新增复杂度：桥、提现等待、排序器、跨链状态同步
    
-   ⚠️ 产品设计不能只写"支持 Ethereum"，要清楚展示当前网络、资产在哪条链、桥接时间、合约地址
    

**Rollup**

-   主流 L2 扩展路线，执行搬到链下，数据和结果提交到 L1
    
-   Optimistic rollup vs ZK rollup：证明方式、提现延迟、数据可用性、开发体验各有差异
    
-   **降低单笔交易成本，但没有消除链上系统复杂度**
    

### **Network 在 AI × Web3 中的位置**

AI Agent 要读取链上状态或执行交易，**必须知道自己在哪条网络上操作**。主网/测试网、L1/L2、不同 chain id、不同合约地址，不能靠模型"猜"。

更稳妥的做法：让工具返回结构化网络信息（chain id、RPC 来源、区块高度、交易哈希、确认数、explorer 链接）。Agent 总结应引用可验证信息，而不是只说"交易成功了"。

### **最小实践：测试网交易追踪**

1.  在测试网领取少量测试 ETH
    
2.  用测试钱包发送一笔转账或调用简单合约
    
3.  在区块浏览器查看：交易状态、区块号、gas used、from、to、logs
    
4.  记录 pending → confirmed 用了多久
    
5.  切换另一条网络，观察同地址余额和交易历史
    

**AI Agent 辅助时的分工**：

-   必须由工具读取：chain id、区块高度、交易状态、gas used、确认数
    
-   可以由模型生成：交易摘要、风险提示、下一步建议
    

* * *

## **💡 今日收获汇总**

**AI 侧（Context）**：上下文 = 信息治理，不是长文本拼接。Memory 带隐性风险，Knowledge Base 要维护来源和时效。

**Web3 侧（Network）**：网络是交易生命周期的基础环境。从签名到确认经过钱包→RPC→mempool→区块→共识→执行→确认→索引→浏览器，每一层都可能出问题。

**交叉感悟**：Context 的"信息分层治理"和 Network 的"交易经过多层才能确认"是对应关系 — Context 管信息如何**进入**模型，Network 管交易如何**通过**链上系统。两者都在说同一件事：**中间过程的每一层都可能有错，不能假设"进去了就对了"**。

Context 的 fact 层如果包含了正确的 chain id 和区块高度，就是 Chain-aware Context 的基础 — 这正好是下周 Bridge 章节要深入的内容。

## **❓ 待深入**

-   RAG 的检索和引用机制（Context → RAG 是自然递进）
    
-   prompt injection 防护的具体技术手段
    
-   测试网交易追踪实操（验证 Network 的多层概念）
    
-   Optimistic vs ZK Rollup 的具体技术差异
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->








## **📖 LLM — 大语言模型**

> 来源：[https://aiweb3.school/zh/handbook/ai/llm/](https://aiweb3.school/zh/handbook/ai/llm/)

### **核心定位**

LLM 不是会聊天的黑盒，而是把大量文本、代码和多模态信号压进参数里的**概率模型**。

**关键判断：**

-   模型输出是**候选结果**，不是事实本身
    
-   模型能力是**推理入口**，不是最终验证
    

### **第一性原则**

LLM 生成的是**概率上合理的输出**，而不是天然可信的事实。

三条原则：

1.  **把模型当推理层，不当真相源** — 关键事实必须来自数据库、API、日志、文档源或其他可信系统
    
2.  **把输出变成可检查对象** — 摘要、分类、计划应落成 schema、参数、引用或日志，而非只停留在自然语言
    
3.  **把不确定性前移暴露** — 模型不知道、资料过期、上下文不足时，要显式降级，而不是编一个顺滑答案
    

### **知识节点**

**Token**

-   模型处理文本的基本单位，tokenizer 切分后的片段
    
-   直接影响：上下文容量、调用成本、模型能否看见关键信息
    
-   ⚠️ 不要把"页面很短"误认为"token 很少" — 代码、JSON、长标识符、表格更吃 token
    

**Embedding**

-   把文本/代码映射成向量，衡量"语义是否接近"
    
-   用途：搜索、聚类、推荐、异常检测、RAG
    
-   ⚠️ 向量相似度 ≠ 结论正确，不能替代来源校验和规则检查
    

**Transformer**

-   现代 LLM 的核心架构，关键能力来自 **attention** 机制
    
-   擅长在上下文里找模式，但不等于拥有稳定数据库
    
-   ⚠️ 给了强大的模式组合能力，但没有给事实最终裁决权
    

**Hallucination（幻觉）**

-   模型生成看起来合理但不真实/无法验证的内容
    
-   在带执行能力的系统里 → 幻觉变成**流程风险**
    
-   处理方式不只是"更好的 prompt"，更要：来源引用、schema 校验、规则检查、人工确认、审计日志
    

**Multimodal（多模态）**

-   可处理文本、图片、音频、视频、截图
    
-   价值不是"更炫"，而是让模型读懂更多真实工作界面
    
-   ⚠️ 截图文字可能遮挡、图表可能缺坐标、页面可能被伪造 — 关键判断仍要回到结构化数据
    

### **LLM 在 AI × Web3 中的位置**

LLM 位于**理解和生成层**，需要四层配合：

| 层 | 内容 |
| --- | --- |
| 数据层 | RPC、索引器、预言机、向量库、项目文档 |
| 编排层 | Prompt、Context、RAG、Agent workflow |
| 执行层 | 工具调用、钱包、Smart Account、合约交互 |
| 安全层 | Guard、simulation、权限策略、人工确认、日志 |

> **LLM 越靠近执行层，系统越要把自然语言输出变成可验证对象。**

### **最小实践：交易解释器**

输入一笔交易哈希 → 读取交易详情、事件日志、合约 ABI → LLM 生成解释，包含：

1.  用户发起了什么动作
    
2.  涉及哪些资产和地址
    
3.  哪些信息来自链上数据，哪些是模型推断
    
4.  模型不确定的地方
    
5.  如果要签类似交易，用户应该检查什么
    

**练习重点**：把「模型生成 / 链上事实 / 来源边界 / 不确定性」分开。

* * *

## **💡 个人收获**

-   LLM 是推理层不是真相源，这个定位在 Web3 场景特别重要（因为链上操作不可逆）
    
-   幻觉不只是"答错"，在自动化流程中是真正的风险入口
    
-   交易解释器是个好起点：小但完整，能体验模型输出与链上事实的边界
    

## **❓ 待深入**

-   Token 计算的实际体验（不同类型文本的 token 消耗差异）
    
-   Embedding 在 RAG 中的具体用法
    

* * *

## **📖 Wallet — 钱包**

> 来源：[https://aiweb3.school/zh/handbook/web3/wallet/](https://aiweb3.school/zh/handbook/web3/wallet/)

### **核心定位**

钱包不是 Web3 的"登录按钮"，而是**用户管理账户、签名授权、发送交易、切换网络和确认风险的入口**。

### **第一性原则**

钱包管理的不是"账号资料"，而是**链上控制权**。

三条原则：

1.  **连接 ≠ 授权资产** — 读取地址和发起交易是完全不同的权限
    
2.  **签名必须可解释** — 用户需要知道签名目的，而不是只看到十六进制数据
    
3.  **网络是上下文** — 同一个地址在不同链上可能有不同资产和状态
    

### **钱包交互三类动作（风险递增）**

| 动作 | 说明 | 风险 |
| --- | --- | --- |
| 连接钱包 | 应用读取地址和网络 | 低 — 不等于可以动用资产 |
| 签名消息 | 用户证明控制某个地址 | 中 — 可能用于登录、授权或创建订单 |
| 发送交易 | 请求改变链上状态 | 高 — 转账、授权 token、调用合约、支付 gas |

### **知识节点**

**EOA（外部账户）**

-   由私钥控制的账户，可签名消息、发起交易、支付 gas、调用合约
    
-   大多数浏览器/移动钱包默认创建的都是 EOA
    
-   ⚠️ 限制：私钥丢失难恢复、权限难细分、自动化能力弱
    

**Mnemonic（助记词）**

-   一组单词，用来恢复钱包私钥
    
-   ⚠️ **任何网页、客服、AI Agent 要求输入助记词 = 危险**
    
-   正确做法：用户在钱包应用内恢复账户，dApp 只请求连接
    

**Transaction（交易）**

-   对链上状态的正式请求，上链后通常不可撤回
    
-   常见误区："点击按钮" ≠ 交易本身，还要经过钱包确认→签名→广播→打包→执行
    
-   前端至少要展示的状态：等待确认 / 用户拒绝 / 已广播等待 / 成功 / 失败 revert / 长时间 pending
    

**Gas**

-   链上执行成本，影响用户付费和交易是否被及时处理
    
-   产品至少要让用户知道：大概费用、用什么资产支付、失败是否仍消耗费用、能否重试
    

**Explorer（区块浏览器）**

-   查看链上事实的窗口，但**不是链本身**
    
-   看一笔交易至少检查：Status / From·To / Method / Value / Token Transfers / Logs / Gas Used
    
-   AI 产品引用链上信息时应给出 explorer 链接或交易哈希，让用户可自行验证
    

### **Wallet 在 AI × Web3 中的位置**

AI Agent 想进入链上执行，最终碰到钱包边界。合理设计：

**AI 做理解和辅助 → 钱包负责确认和授权 → 策略合约/智能账户负责执行约束**

用户既得到 AI 的效率，也保留对资产和权限的控制。

### **最小实践：钱包交互地图**

用测试钱包连接测试网 dApp，记录完整流程：

1.  连接钱包、切换网络
    
2.  签名消息、发送交易
    
3.  标出哪些只是读取信息，哪些改变链上状态
    
4.  写出每步用户应看到的关键信息
    
5.  思考如果由 AI Agent 辅助，哪些必须保留人工确认
    

* * *

## **💡 今日收获汇总**

**AI 侧（LLM）**：模型 = 推理层 ≠ 真相源，幻觉在自动化链路中是流程风险

**Web3 侧（Wallet）**：钱包 = 链上控制权入口，连接/签名/交易风险递增，助记词不可交出

**交叉感悟**：LLM 的"推理层而非真相源"和钱包的"确认界面而非登录按钮"是对应关系 — 一个是 AI 输出的边界，一个是链上执行的边界，两条边界必须对接

## **❓ 待深入**

-   Token 计算的实际体验
    
-   Embedding 在 RAG 中的具体用法
    
-   EOA vs Smart Account 的实际区别（Account Abstraction 章节）
    
-   用测试钱包走一遍钱包交互地图
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->









# AI Agent 学习笔记

今天参加了 Draken 老师关于 AI Agent 的学习分享，对 Agent 的发展逻辑、工具生态以及 Hermes Agent 的实际使用方式有了更系统的理解。

过去我对 AI 的认知更多停留在“聊天机器人”阶段，例如 ChatGPT、Gemini、DeepSeek 这类产品，本质上还是以问答交互为核心。但这次学习让我意识到，AI 正在从“回答问题”转向“执行任务”。

Agent 的核心并不只是会聊天，而是具备：

1.  理解任务目标
    
2.  调用外部工具
    
3.  观察执行结果
    
4.  自动修复与继续执行
    

这一整套闭环能力。

例如，一个 Agent 在收到“帮我完成开发任务”的指令后，不只是生成代码，而是会进一步调用终端、文件系统、API、浏览器等工具，真正参与任务执行。这和传统 Chatbot 已经有明显区别。

这次还系统了解了当前 AI Agent 的工具生态，大致可以分为：

-   聊天型 AI（ChatGPT、Gemini、DeepSeek）
    
-   AI 编程助手（Cursor、GitHub Copilot、Antigravity）
    
-   终端型 Agent（Codex CLI、Claude Code）
    
-   模型聚合平台（OpenRouter、ModelScope）
    
-   通用 Agent 底座（Hermes Agent、OpenClaw）
    

其中我比较感兴趣的是 Hermes Agent 这一类“通用 Agent 框架”。

它的特点包括：

-   支持多模型接入
    
-   支持工具调用
    
-   支持长期记忆
    
-   支持技能（Skill）沉淀
    
-   可接入微信、Telegram、飞书等消息平台
    

我感觉它更像一个“AI 操作系统”，而不仅仅是聊天工具。

另外一个比较有启发的点，是关于“Skill 沉淀”的概念。

如果一个任务经常重复执行，Agent 可以把流程固化为技能，之后自动复用。这其实已经有点接近“个人自动化工作流”的方向了。

技术实践方面，也学习了 Hermes Agent 的部署思路：

-   Windows 推荐使用 WSL
    
-   使用 Quick Setup 完成初始化
    
-   配置模型 Provider、API Key、消息网关
    
-   对接微信 / Telegram 等平台
    

同时也了解到：

-   命令行开发更适合使用 Codex CLI、Claude Code
    
-   高度定制化 Agent 框架对新手有一定门槛
    
-   Agent 权限控制非常重要，危险命令最好单次授权
    

目前我对 AI Agent 的理解，已经从“AI 会聊天”，逐渐转向：

> AI 是一种可调用工具、可执行任务、可沉淀工作流的新型操作层。

后续希望继续深入学习：

-   Agent Workflow
    
-   Tool Calling
    
-   MCP
    
-   Memory System
    
-   Multi-Agent 协作
    
-   AI IDE / Terminal Agent
    
-   本地模型接入
    
-   自动化工作流编排
    

接下来计划尝试：

1.  在 WSL 环境部署 Hermes Agent
    
2.  配置 Model API 与消息平台
    
3.  尝试构建自己的第一个自动化 Agent 工作流
    

整体来说，这次学习让我对 AI Agent 的整体生态有了比较清晰的认知，也开始真正理解“AI 帮人做事”意味着什么。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->










# AI 时代 Web3 开发研讨会记录

AI 时代 Web3 开发者需要具备的基础知识和架构能力，用Web3支付系统举例说明，穿插安全设计考量，最后分享开发者核心技能。

## **常见问题**

**AI与基础知识**：有了AI更应学习基础知识和架构能力，人负责设计方案、评估合理性、验收代码结果和分析问题，AI协助设计方案、细化分析和按计划编码，AI自我验证是决定编码质量的关键。

**Web3与Web2关系**：Web3并非完全独立于Web2，多数Web3项目中Web2能力占比较高，如币安、Polymarket、Defi等项目都需要Web2的支持。

**Web3安全问题**：Web3中资金交互特性决定安全源于设计，应贯穿项目生命周期，审计只是锦上添花，安全需扎实的基础知识和架构能力作支撑。

## **支付系统案例分析**

**Web2支付模型**：以电商购物支付为例，用户下单后，支付服务从银行获取支付单信息展示给用户，用户支付法币，银行收到钱后回调，电商平台流转订单状态。该模型存在服务间身份验证、用户支付安全和信任等问题。

**引入Web3支付**：将银行机构替换为区块链，用户向电商平台生成的地址转账，链上监听服务记录交易并通知支付服务，资金流从用户账户到支付服务账户再到商户账户。Web3通过算法保证数据不可篡改、逻辑和代码公开透明、私钥签名校验等方式解决信任问题。

## **钱包相关知识**

**钱包概念与作用**：钱包解决用户控制资产问题，输入私钥，通过算法产出交易签名和消息签名，实现身份和资产的双重认证。

**钱包分类**：按技术分为EOA钱包（私钥钱包）、合约钱包和AA钱包；按多签分为MPC多签钱包等；按托管方式分为自托管钱包、全托管钱包和混合托管钱包；还有硬件钱包、隐私钱包和分层钱包等。

**钱包安全问题**：私钥泄露和签名欺骗是主要风险，业界有EIP712签名可视化等措施，但仍存在门槛。

## **交易相关知识**

**交易生命周期**：用户支付构造交易，用私钥签名后广播，链上处理达成节点共识，记录交易状态。

**交易关键参数**：包括gas（gas count和gas price）、nonce（确保交易幂等）和instructions（链上应用交互的灵魂）。

**交易监听与确认**：链上服务监听区块，检测到交易后等待一定数量的区块确认，避免链分叉，再进行合规筛查，确认无误后回调支付服务。

**交易模拟**：在未签名前模拟交易执行结果，避免签署有风险的交易，签名后模拟无意义。

**服务器侧钱包安全**：采用权限拆分和多签方案，通过交易可视化、审核、模拟和可信执行环境（Tee）签名等方式确保安全。

## **AI对开发者的影响**

**改变之处**：提高编码速度，减少精力消耗，学习更易。

**未变之处**：系统复杂度未变，开发者仍需具备判断系统架构和复杂度的能力，对AI生成的代码需进行审核和负责。

**AI时代架构师能力**：包括架构能力、debug能力和扎实的基础知识。

## **QA环节答疑**

**安全学习路径**：先扎实掌握开发基础知识，可参考招聘要求，让AI反推所需能力进行针对性学习。

**钱包私钥管理**：浏览器插件钱包私钥在本地，交易所钱包私钥由平台托管，充值地址由平台创建，资金会归集到热钱包。

**AI在Web3安全应用**：可用于分析未验证的合约代码，如去年很多老合约被爆破时用AI处理；claude code推出的Mythos是AI帮忙做安全的工具。

**数据集成与量化**：量化相关策略多为内部知识，大数据在Web3中的应用机会相对较少，价值需通过市场反馈。

**链上小额免密支付**：存在信任问题，可从账号权限拆分侧解决，如设置风控规则。

**钱包监听交易**：可通过轮询或Websocket监听，开源项目Epusdt可参考。

**AA钱包发展**：会越来越成熟，以太坊准备融合不同账号类型采用AA方案，但不同链的实现存在差异。

**跨链需求与方案**：跨链需求会逐渐增多，但目前不完全是去中心化方案，熊市业务不太好，牛市时活跃度可能提高。

**密码学学习程度**：以做MPC签名为例，要搞清楚私钥切割、计算、交互等原理，以及如何保证安全。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
