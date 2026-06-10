---
timezone: UTC+8
---

# Allonsy

**GitHub ID:** Thomas-Novato

**Telegram:** @Allonsy_S

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-10
<!-- DAILY_CHECKIN_2026-06-10_START -->
## **01｜核心目标**

不是堆功能，而是让首页讲清楚一个完整故事：

**发现 agent → 搜索/筛选 agent → 查看活跃钱包与热度 → 安全投资 → 越界拦截 → 强制分润**

让评委和用户第一眼就明白：这不是一个普通 agent 浏览器，而是一个可以围观、发现、投资、约束和分润的 Agent Economy Live 平台。

* * *

## **02｜首页结构规划**

### **首屏 Hero**

一句话定义项目价值，配合核心数据指标（Agent 数量、活跃钱包数、交易数据等）建立信任感。

### **搜索与发现区**

新增搜索入口，降低用户进入门槛，让"发现 agent"成为首页的自然动作。

### **交互流程区**

用步骤式展示产品闭环，帮助新用户快速理解平台工作方式。

### **安全对比区**

突出两个关键安全机制——越界拦截与自动分润，这是项目的核心技术亮点。

### **Live 数据区**

复用现有实时数据展示组件（Ticker、热力图、排行榜），新增活跃钱包地址数作为生态活跃度指标。

### **代码设计区**

用轻量卡片展示模块协作关系，作为技术可信背书。

* * *

## **03｜新增功能概览**

| 功能 | 定位 |
| --- | --- |
| 活跃钱包地址数 | 实时生态活跃度指标，强化"真实经济网络"的感觉 |
| 搜索框 | 按 agent 名称、地址、标签、能力关键词搜索，前端过滤 |
| 热搜词 | 一组热门标签 chips，点击即触发筛选，降低用户探索成本（如 Cobo Protected、High Trust、Revenue Vault 等） |

* * *

## **04｜与之前内容的串联**

| 之前学的 | 本次连接点 |
| --- | --- |
| Agent 数据指标体系（6/9） | 活跃钱包数本身就是生态活跃度指标，纳入首屏实时展示 |
| AI Security（6/7） | Cobo 越界拦截是 Security 中 Permission Isolation + Tool Abuse 防护的真实落地 |
| Agent Wallet / Machine Payment（5/29/31） | Vault 强制分润是 Agent Wallet 权限管理和 Machine Payment 商业闭环的延续 |
| Web3 Tool Use（6/3） | 搜索与发现功能让"发现 agent"成为可操作的自然入口 |

* * *

## **05｜今日更新**

-   完成首页叙事结构规划（Hero → 搜索 → 流程 → 安全 → Live → 代码）
    
-   确定三项新增功能范围：活跃钱包数、搜索框、热搜词
    
-   明确实现策略：先做前端，保持低风险改造；外部数据失败时用 mock 保证演示稳定
    
-   整理项目 README 更新思路
<!-- DAILY_CHECKIN_2026-06-10_END -->

# 2026-06-09
<!-- DAILY_CHECKIN_2026-06-09_START -->

## **01｜核心目标**

不是单纯做"好看的榜单"，而是让每个指标都能回答一个实际问题：

| 指标维度 | 回答的问题 |
| --- | --- |
| 资金执行能力 | 这个 agent 是否真的在行动？ |
| 风险边界能力 | agent 是否被安全边界约束？ |
| 商业闭环能力 | agent 是否能完成商业协作？ |
| 收益与效率能力 | agent 是否具备资金效率？ |

* * *

## **02｜四类指标体系**

### **① 资金执行能力**

关注 agent 是否真实执行过资金操作：

-   交易次数
    
-   执行金额
    
-   最近活跃时间
    
-   合约调用多样性
    

> **意义**: 证明 agent 不是静态展示，而是具备**真实行动能力**。

### **② 风险边界能力**

关注 agent 的操作是否被策略规则有效约束：

-   允许/拒绝/人工审核比例
    
-   超额操作次数
    
-   非授权调用检测
    

> **意义**: 体现"自主执行"和"安全控制"之间的**平衡**。

### **③ 商业闭环能力**

关注 agent 是否能完成从任务触发 → 资金托管 → 交付确认 → 支付释放的**完整流程**：

-   任务完成率
    
-   结算成功率
    
-   全流程耗时
    

> **意义**: agent 从"会执行交易"进一步走向"能完成商业协作"。

### **④ 收益与效率能力**

关注 agent 是否能用资金产生有效产出：

-   ROI
    
-   净收益
    
-   单位资金效率
    
-   成功率
    
-   风险调整后的收益表现
    

> **意义**: 更贴近"agent 资产化"和"agent 投资价值"判断。

* * *

## **03｜Agent 行为画像**

画像不应该是主观描述，而应该由**行为数据推导**出来：

| 画像类型 | 特征 |
| --- | --- |
| 🟢 守约型 | 操作稳定，越界少，安全边界清晰 |
| 🔄 高频执行型 | 活跃度高，持续发生资金或任务操作 |
| ⚠️ 边界敏感型 | 较多试错或越界尝试，但能被规则拦截 |
| ✅ 闭环交付型 | 能完成任务并形成结算结果 |
| 📈 收益驱动型 | 能体现资金效率或收益能力 |

* * *

## **04｜今日最大收获**

> 排行榜本身不是重点，重点是把 agent 行为变成**可解释、可量化、可追溯的数据资产**。

后续方向：

-   优化指标的展示方式
    
-   既适合产品演示，也能支撑严肃的数据分析和决策
    
-   结合黑客松项目继续深化
    

* * *

## **05｜学习计划更新**

-   阶段三（项目实践）：确定方向为 **AI Agent 数据指标与画像分析**
    
-   待完善：选择具体的前沿探索方向
    

* * *

**学习时长**: 讨论中梳理框架 **完成度**: 框架搭建完成，待项目落地
<!-- DAILY_CHECKIN_2026-06-09_END -->

# 2026-06-08
<!-- DAILY_CHECKIN_2026-06-08_START -->



\# 2026-06-08 学习笔记 — AI Privacy

\> **Core Insight:** AI Privacy 的本质不是让用户数据完全不露面，而是在数据边界上做显式设计——画清数据流图，让每一条数据都明确：是否必要、能否脱敏、能否本地处理、谁会看到、日志保留多久。

\---

\## 01｜为什么要学这个

前天学 AI Security 时聚焦的是"攻击者怎么攻进来"，今天 AI Privacy 聚焦的是"用户的敏感信息怎么被暴露出去"——两者是防御的两面。

Web3 数据公开 ≠ 用户没有隐私。地址关联、交易历史、持仓、治理投票、Agent 偏好、私有任务和聊天内容组合在一起，会形成非常具体的用户画像。

AI 系统又会扩大数据面：读取更多上下文、保留记忆、调用第三方模型、写日志、上传文件、调用工具。

**核心风险：链上公开身份 + AI 私有上下文被拼接。** 单看一个地址是公开信息，但和聊天记录、邮箱、地理位置、社群身份结合后，就变成了真实身份画像。

\---

\## 02｜第一性原理

\> 模型只应该看到完成任务所需的最小数据。

不要因为模型"可能有帮助"就把钱包历史、私聊、API key、完整文档全部塞进上下文。上下文越多，泄漏面越大，误用风险越高。

三条原则：

1\. **数据边界要显式**：哪些进模型，哪些只进工具，哪些只在本地

2\. **记忆要可管理**：用户要能查看、删除、导出或关闭记忆

3\. **链上身份要谨慎关联**：不要默认把多个地址和真实身份合并展示

**与 AI Security 的对照：**

\- Security 防的是"别人攻进来"

\- Privacy 防的是"自己不小心露出去"

\- 共同的底层逻辑都是\*\*纵深隔离和控制\*\*——只不过 Security 隔离的是权限，Privacy 隔离的是数据

\---

\## 03｜七大知识节点

\### ① Data Boundary ⭐

定义数据在用户设备、后端、模型服务、链上和第三方工具之间如何流动。

每个字段都要问：是否必要、可脱敏、可本地处理、是否会进入日志、是否给第三方模型。

**最佳实践：画成数据流图，而不是写成隐私政策长文。**

对 Agent 来说，边界按工具划分：浏览器工具、钱包工具、模型工具、索引工具看到的数据不应该默认互通。

\### ② Local AI

把部分推理放在用户设备或私有环境，减少敏感数据外发。

适合：私有文档、钱包历史摘要、草稿生成、敏感分类。

**好用原则**：先在本地筛选和脱敏，再把必要摘要发给强模型。例如本地先从钱包历史中提取"与本任务有关的 3 笔交易"，而不是上传全部历史。

\> 注意：本地 ≠ 绝对安全。本地 Agent 仍可能被恶意文件、插件或网页攻击，需要 sandbox + 权限控制。

\### ③ Private Memory

Agent 为用户保存的长期偏好、历史任务和私有上下文。

**不能变成不可见黑箱**：用户应该知道记了什么、为什么记、如何删除、是否用于训练、是否跨设备同步。

可分层：短期任务记忆 → 长期偏好 → 敏感身份信息 → 钱包相关记录。不同层有不同保留时间和访问权限。

\> 常见风险：为了更智能而永久保存一切。默认应该最小化、可查看、可删除。

\### ④ Secret Management ⭐

处理私钥、API key、session token、JWT、wallet credentials、加密密钥。

**这些秘密不应该进入 prompt、模型输出、普通日志或 analytics。** Agent 要调用服务时，应该通过受控工具使用 secret，而不是让模型直接读取 secret。

还要处理：轮换和撤销（API key 泄漏后能否快速换掉）、有效期（短期 vs 长期）、环境隔离（生产 vs 测试）。

**Web3 最严格的纪律**：助记词和私钥不应该出现在任何 Agent prompt。即使用户主动粘贴，系统也应该识别并拒绝处理。

\### ⑤ Minimal Disclosure

只暴露完成任务所需的最少信息。

例子：

\- 证明"余额足够支付 10 USDC" → 不需要暴露全部持仓

\- 证明"用户有权限" → 不需要公开真实身份

\- 总结交易风险 → 不需要上传完整钱包历史

实现手段：只传必要字段、零知识证明、一次性地址、按应用隔离身份、summary 代替原文。

\### ⑥ Encrypted Data

加密保护存储和传输，但不能自动解决模型使用时的泄漏。

**数据进入模型推理时通常需要被解密或在可信环境中处理。** 加密要和访问控制、密钥管理、TEE、最小化上下文结合。

谁持有密钥也很关键：平台持钥 / 用户持钥 / 多方分片 / 硬件持钥——信任模型完全不同。

\> 如果只是服务器加密保存，但每次推理都由服务器解密发给模型，那它解决的是存储安全，不是模型使用隐私。

\### ⑦ User Consent

用户必须明确知道数据会被怎样使用。

同意连接钱包 ≠ 同意分析全部历史

同意使用 Agent ≠ 同意把数据发给所有第三方模型

同意保存记忆 ≠ 同意永久保存

**Consent 应该具体到动作和数据类型：**

\- "允许读取当前地址余额"

\- "允许分析最近 30 天交易"

\- "允许保存风险偏好"

\- "允许发送摘要给云端模型"

**Consent 还可撤销**：撤销后要说明哪些数据会删除、哪些链上公开记录无法删除、哪些日志因合规需要保留。

\---

\## 04｜与已学内容的串联

| 已学内容 | 与 AI Privacy 的连接 |

|---------|-------------------|

| **AI Security** | Security 防外部攻击，Privacy 防内部泄漏，需结合纵深防御 |

| **Agent Wallet** | 钱包权限管理决定了 Agent 能接触哪些数据，权限越细隐私越好控制 |

| **Chain-aware Context** | 链上数据进入 Agent 上下文时，要筛选而不是全量注入（Minimal Disclosure） |

| **Agent Workflow** | 每个工作流节点都可以加隐私检查：输入脱敏、输出摘要 |

| **Private Memory** | Agent Wallet 的 session key + Private Memory 的分层访问，组合成完整的身份隐私体系 |

\---

\## 05｜最小实践：画 Agent 数据流图

1\. 列出数据项：用户输入、钱包地址、交易历史、API key、模型上下文、日志、记忆

2\. 标记每项数据存在哪里（本地/服务器/链上/第三方模型）

3\. 标记哪些数据会发给第三方模型或工具

4\. 标记哪些字段可以脱敏、hash、聚合或本地处理

5\. 写出用户如何查看、撤销和删除这些数据

\---

学习时长：约 40 分钟
<!-- DAILY_CHECKIN_2026-06-08_END -->

# 2026-06-06
<!-- DAILY_CHECKIN_2026-06-06_START -->




## **01｜今天学到的核心观点**

很多成功的 LLM Agent 并不是靠复杂框架堆出来的，而是靠简单、可组合、可调试的模式构建出来的。

这对 AI × Web3 特别重要，因为 Web3 Agent 一旦涉及转账、授权、Swap、合约调用，就不是普通聊天错误，而可能变成真实链上损失。

* * *

## **02｜Workflow 和 Agent 的区别**

这篇文章把 agentic systems 分成两类：

### **Workflow：工作流**

LLM 和工具按照预先写好的代码路径执行。特点是稳定、可预测、适合明确任务。

例如：用户输入 → 分类 → 调用工具 → 检查结果 → 输出答案

### **Agent：智能体**

LLM 可以动态决定下一步怎么做、用什么工具、什么时候停。特点是灵活、适合开放任务，但成本更高，风险也更大。

例如：用户给目标 → Agent 自己规划 → 调用工具 → 看结果 → 再调整计划 → 完成任务

**我的理解：** Workflow 更像"固定流程的自动化系统"，Agent 更像"会自己决定步骤的执行者"。

* * *

## **03｜什么时候不应该用 Agent**

不是所有产品都需要 Agent。如果一个任务用一次 LLM 调用、RAG、Few-shot example 就能解决，就不要强行做成 Agent。

Agent 通常会带来：

-   更高延迟
    
-   更高成本
    
-   更难调试
    
-   更容易出现连续错误
    
-   更需要安全边界
    

**第一原则：** 先用简单方案解决问题，只有当简单方案明显不够时，再引入多步工作流或 Agent。

* * *

## **04｜Agentic System 的基础模块：Augmented LLM**

Agent 的基础不是"一个会说话的模型"，而是一个被增强过的 LLM。

增强能力包括：

-   **Retrieval**：能查资料、查数据库、查链上状态
    
-   **Tools**：能调用外部工具/API
    
-   **Memory**：能保留任务相关上下文
    
-   **Environment feedback**：能根据真实执行结果调整下一步
    

对 Web3 来说，这个模块可以理解为：

```
LLM + 链上查询工具 + 钱包权限工具 + 交易模拟工具 + 风险检测工具 + 用户确认机制
```

Agent 不是凭空"猜链上状态"，而是必须每一步都拿到 ground truth。

* * *

## **05｜五种常见 Workflow 模式**

### **① Prompt Chaining｜提示词链**

把复杂任务拆成多个固定步骤。

**适合：** 先生成大纲 → 检查大纲 → 再写正文

**AI × Web3 例子：**

```
解析用户意图 → 查询链上状态 → 生成候选交易 → 模拟交易 → 让用户确认
```

### **② Routing｜路由**

先判断用户请求属于哪一类，再分发给不同流程。

**AI × Web3 例子：**

-   查询余额 → 走只读流程
    
-   转账 → 走高风险人工确认流程
    
-   授权合约 → 走 allowance 检查流程
    
-   Swap → 走报价和滑点检查流程
    

这对之前学的 Agent 权限安全很关键。

### **③ Parallelization｜并行化**

多个 LLM 或模块同时处理任务，然后汇总结果。

两种形式：

-   **Sectioning**：拆成多个独立部分并行处理
    
-   **Voting**：多个模型/提示词同时判断，再投票
    

**AI × Web3 例子：**

```
一个模型生成交易解释
一个模型检查安全风险
一个模型检查合约地址
一个模型检查用户权限范围
→ 最后聚合成风险报告
```

### **④ Orchestrator-workers｜调度器-工人模式**

一个中心 LLM 负责拆任务，多个 worker 负责执行子任务。适合不确定步骤数量的复杂任务。

**AI × Web3 例子：** 用户说"帮我分析这个钱包的 DeFi 风险"

Orchestrator 拆成：

-   查余额
    
-   查授权
    
-   查历史交互合约
    
-   查风险标签
    
-   查收益来源
    
-   生成最终报告
    

适合「钱包体检 / Approval Tracker / Agent 金融助手」。

### **⑤ Evaluator-optimizer｜评估器-优化器**

一个 LLM 生成结果，另一个 LLM 负责评价和提出修改意见，循环优化。适合有明确评价标准的任务。

**AI × Web3 例子：**

```
生成交易计划 → 风险评估器检查 → 修改计划 → 再评估 → 输出最终版本
```

关键：必须有清晰的评价标准，例如：

-   是否超过预算
    
-   是否调用高风险合约
    
-   是否存在无限授权
    
-   是否需要用户二次确认
    
-   是否有模拟失败
    
-   是否存在 MEV / 滑点风险
    

* * *

## **06｜真正的 Agent 应该怎么设计**

Agent 通常是一个循环：

```
理解任务 → 规划 → 调用工具 → 获取环境反馈 → 判断进展 → 继续 / 暂停 / 结束
```

适合开放式任务，比如：

-   复杂代码修改
    
-   多轮搜索分析
    
-   自动化电脑操作
    
-   客服问题解决
    
-   多步骤工具调用
    

**Agent 必须有：**

-   沙盒测试
    
-   停止条件
    
-   最大迭代次数
    
-   人类确认点
    
-   工具调用记录
    
-   可回放 trace
    
-   风险边界
    

**对于 AI × Web3：** 不能让 Agent"自由发挥到链上执行"。更合理的方式是：Agent 可以规划和建议，但高风险链上动作必须经过权限系统、模拟系统和用户确认。

* * *

## **07｜对框架的理解**

框架可以帮助快速开始，比如 Agent SDK、可视化 workflow builder 等。

但框架也可能带来问题：

-   抽象层太厚
    
-   看不清真实 prompt 和 response
    
-   难调试
    
-   容易让开发者过早堆复杂度
    
-   不理解底层时容易出错
    

**我的理解：** 框架适合 demo，但真正做生产级 Agent，必须理解底层流程。尤其是 Web3 产品，不能因为框架帮你封装了工具调用，就忽略权限、风控、交易模拟和可解释性。

* * *

## **08｜Agent-Computer Interface：ACI**

文章最后强调了一个很有价值的概念：**ACI，Agent-Computer Interface**。

它类似 HCI，但对象不是人，而是 Agent。我们不仅要设计"人怎么用软件"，还要设计：

-   Agent 怎么理解工具
    
-   Agent 怎么调用工具
    
-   Agent 怎么避免误用工具
    

**好的工具设计应该：**

-   参数清晰
    
-   名称明确
    
-   有示例
    
-   有边界说明
    
-   不容易误操作
    
-   尽量减少格式负担
    
-   对错误输入有防呆设计
    

**Web3 里的例子：** 不要只给 Agent 一个危险工具：`sendTransaction(to, data, value)`

更安全的工具应该拆成：

1.  `simulateTransaction()`
    
2.  `estimateRisk()`
    
3.  `checkAllowance()`
    
4.  `prepareTransaction()`
    
5.  `requestUserConfirmation()`
    
6.  `executeConfirmedTransaction()`
    

这样 Agent 不容易一步错到不可逆。

* * *

## **09｜和 AI × Web3 的连接**

今天这篇内容其实和之前学的 Agent Workflow、Agent Wallet、权限安全是一条线。

可以总结成一句话：

> **AI × Web3 Agent 的关键不是让模型"更聪明"，而是把模型放进一个可控、可审计、可恢复、可确认的执行系统里。**

如果做 Web3 Agent 产品，推荐架构不是：

```
用户说一句话 → Agent 直接操作钱包
```

而是：

```
用户意图
→ 任务分类 (Routing)
→ 链上状态查询 (Augmented LLM)
→ 多步骤 Workflow
→ 风险检测 (Parallelization)
→ 交易模拟 (Evaluator)
→ 用户确认
→ 权限范围内执行
→ 记录 trace
```

* * *

## **10｜今日思考：三大分层判断**

如果我要做一个 Web3 Agent 产品，不能先问"怎么让 Agent 自动帮用户操作？" 而应该先问：

> **哪些步骤必须固定成 Workflow？哪些步骤可以交给 Agent 动态决策？哪些动作必须人工确认？**

### **必须固定成 Workflow 的步骤**

-   用户意图分类（只读/交易/授权/分析）
    
-   链上状态读取（余额、allowance、合约状态）
    
-   风险检查（无限授权、陌生合约、大额转账）
    
-   交易模拟（生成候选交易 → simulate → 检查结果）
    
-   日志和 trace（Agent 动作必须完整记录）
    

### **可以交给 Agent 动态决策的步骤**

-   拆解复杂任务（"帮我分析这个钱包的 DeFi 风险"）
    
-   多来源信息搜索与分析（合约安全、项目背景）
    
-   生成自然语言解释和建议
    
-   推荐操作方案（建议撤销哪些授权）
    

### **必须人工确认的动作**

-   **转账** — ETH、USDC、NFT、批量转账
    
-   **Swap** — 尤其是高滑点、非主流池
    
-   **Approve/授权** — 尤其是无限授权、新合约、高风险 spender
    
-   **Bridge/跨链** — 等待时间、桥风险、手续费
    
-   **投资/借贷/质押/理财** — 涉及资产风险
    
-   **修改权限规则** — 改变 Agent 能力边界
    

### **最终答案浓缩成一句话**

> **Agent thinks. Workflow guards. Human approves. Wallet executes. Trace records.**

* * *

## **11｜与 Agent Resource Market 项目的关联**

| 今天学的概念 | 项目应用 |
| --- | --- |
| Routing | 不同任务类型分流（资源查询 vs 采购 vs 支付） |
| Prompt Chaining | 采购流程（需求分析→比价→生成Pact→执行支付） |
| Parallelization | 多 Worker 同时报价评估、风险检查 |
| Orchestrator-workers | Planner Agent 拆任务 → Buyer Agent 执行采购 |
| Evaluator-optimizer | 采购计划 → 预算/风险评估 → 优化 → 确认 |
| ACI 设计 | 工具拆分（simulate → check → confirm → execute） |
| 人工确认点 | 大额采购/新供应商/跨资源类型交易 |

* * *

## **今日收获**

-   🧠 **核心认知转变**：构建 Agent 不是越复杂越好，而是从最简单、最可控、最可评估的开始
    
-   🔑 **5 种 Workflow 模式**：Chaining / Routing / Parallelization / Orchestrator / Evaluator
    
-   💡 **三大分层**：哪些固定 Workflow？哪些 Agent 决策？哪些必须人工确认？
    
-   🛡 **ACI 设计原则**：好的工具应该让 Agent 不容易犯错，而不是靠 Agent 自己聪明
    
-   🎓 **一句话总结**：Agent thinks. Workflow guards. Human approves. Wallet executes. Trace records.
    

* * *

## **打卡记录**

| 项 | 内容 |
| --- | --- |
| 今日主题 | Building Effective Agents — Workflow × Agent 架构设计 |
| 学习时长 | ~2 小时 |
| 完成度 | 100% |
| 学习形式 | 文章精读 + 概念梳理 + AI×Web3 关联分析 |
| 关键词 | Workflow, Agent, Routing, Chaining, Parallelization, Orchestrator, Evaluator, ACI, Augmented LLM |
| GitHub 仓库 | https://github.com/Thomas-Novato/ai-web3-school-cohort-0 |
| 相关项目 | Agent Resource Market — 7 大模块架构设计 |

* * *

**学习时长**: ~2 小时 **完成度**: 100%

### **一句话记忆**

> Agent thinks. Workflow guards. Human approves. Wallet executes. Trace records.
<!-- DAILY_CHECKIN_2026-06-06_END -->

# 2026-06-05
<!-- DAILY_CHECKIN_2026-06-05_START -->





\# 2026-06-05 学习笔记 — 钱包与权限：执行型 Agent 的安全地基

\> **Core Insight:** Agent 不应该拥有资产，它只应该在被限制、被审计、可撤销的权限范围内执行任务。

\---

\## 01｜为什么要学这个

AI x Web3 产品最危险的地方：模型的错误判断可能被执行成\*\*真实链上操作\*\*。一次错误授权、错误转账、错误 swap，往往是不可逆的。

钱包与权限层决定了：

\- Agent 只能读还是能写

\- 用户是否看得懂自己授权了什么

\- 权限是否受资产、额度、合约、函数、时间限制

\- Agent 出错后能否撤销/冻结/恢复

\- 高风险操作是否必须人工确认或多签确认

\## 02｜第一性原理

**Agent 不应该真正"拥有钱包"，只应该拥有一组可限制、可审计、可撤销的能力。**

把私钥直接给 Agent = 最脆弱的设计。合理架构：

\`\`\`

Agent（意图理解）→ 生成候选交易 → Policy 检查 → 高风险人工确认 → 执行

\`\`\`

**六条核心原则：**

1\. 权限要具体

2\. 签名前要可理解

3\. 执行前要可模拟

4\. 执行中要可限制

5\. 执行后要可追溯

6\. 长期权限必须可撤销

\## 03｜核心知识节点

\### 3.1 AI Wallet UX

合格的 AI Wallet 界面至少展示：用户目标 → 行动计划 → 权限请求 → 交易解释 → 风险提示 → 撤销入口。目标不是"减少确认次数"，而是"让每次确认都有意义"。

\### 3.2 Permission Policy

给系统执行层的程序化规则，不是用户愿望。常见维度：资产范围、金额上限、目标合约、函数范围、滑点、时间窗口、频率限制。

\### 3.3 Session Key Flow

给特定任务的临时受限 key，适合低风险高频操作。价值是减少重复签名，但不能绕过风控。

\### 3.4 Safe Guard

交易前的确定性规则检查器——不关心模型为什么建议，只关心交易是否符合规则。白名单地址? 允许函数? 超额度? 模拟异常?

\### 3.5 ERC-4337 Workflow

可编程 Smart Account：权限进入账户层、paymaster 代付 gas、批量执行、模块化恢复。Agent 不需要直接持主私钥。

\### 3.6 Pre-transaction Simulation

签名前必须模拟：哪些 token 余额变化? 是否产生无限授权? 是否可能 revert? 滑点和手续费符合预期?

\### 3.7 Recovery / Revocation

撤销入口从第一天就要有：查看所有 Agent/session key、权限范围、已用额度、过期时间、最近动作、暂停/撤销入口。

\## 04｜安全分级

| 阶段 | 能力 | 安全要求 |

|:--|:--|:--|

| 只读 | 看链上数据 | 低 |

| 交易草稿 | 生成交易建议，用户手动签 | 中 |

| 小额自动 | session key + 白名单 + 额度 | 中高 |

| 复杂自动化 | guard + simulation + 日志 + 撤销 + 人工确认 | 高 |

\## 05｜最小实践：AI 自动小额换币助手

**允许：** USDC/ETH/DAI、Uniswap/1inch、单笔 50 USDC、日额度 200 USDC、滑点 1%、session key 24h

**禁止：** 无限 approve、非白名单合约、NFT、跨链桥

**必须重确认：** 超限、新合约、异常模拟、新 token approval、非白名单接收地址

\## 06｜与 Agent Resource Market 的关联

| 今天学的 | 项目中的对应 |

|:--|:--|

| Permission Policy | Pact 限制（预算、地址、token、次数） |

| Safe Guard | CAW 拦截（超预算/越权拒绝） |

| Tool Log | 审计追踪 + Procurement Ledger |

| AI Wallet UX | 展示用户目标 + 行动计划 + 风险提示 |

| Recovery / Revocation | CaW Pact 撤销 + 预算释放 |

\---

\## 今日副线：Hackathon 任务分配决策

与团队一起确定了 Agent Resource Market 的项目分工（待填写具体分配）：

**核心模块拆分：**

1\. **Planner Agent** — 任务拆解、资源需求判断

2\. **Resource Registry + Quote Engine** — 供应商注册、报价管理

3\. **Buyer Agent** — 比价决策、采购计划

4\. **CAW Integration** — Pact 配置、支付执行、交易查询

5\. **Procurement Ledger + Audit** — 日志记录、审计展示

6\. **Frontend** — 用户界面、Demo 流程展示

7\. **Compute Providers** — 轻量 Workers（风险评分、分析）

\---

\## 今日收获

\- 🧠 **核心认知转变**：Agent 不安全不是因为模型不可控，而是权限设计没做好

\- 🔑 **7 个核心知识点**：AI Wallet UX → Permission Policy → Session Key → Guard → ERC-4337 → Simulation → Recovery

\- 🛡 **安全分级框架**：只读 → 草稿 → 小额自动 → 复杂自动化，逐级开放

\- 💡 **最小实践**：自动小额换币助手的权限策略设计——什么允许/禁止/必须重确认

\- 🎓 **与项目强关联**：Agent Resource Market 的 CAW/Pact/审计正好对应今天 Wallet & Permission 的核心设计

\---

\## 打卡记录

| 项 | 内容 |

|---|------|

| **今日主题** | 钱包与权限：执行型 Agent 的安全地基 |

| **学习时长** | ~1.5 小时 |

| **完成度** | 95% |

| **学习形式** | Handbook 概念学习 + 项目关联思考 + 团队讨论 |

| **关键词** | AI Wallet UX, Permission Policy, Session Key, Safe Guard, ERC-4337, Transaction Simulation, Recovery, Agent Resource Market |

| **GitHub 仓库** | [https://github.com/Thomas-Novato/ai-web3-school-cohort-0](https://github.com/Thomas-Novato/ai-web3-school-cohort-0) |

| **相关文件** | submissions/[2026-06-05-checkin-draft.md](http://2026-06-05-checkin-draft.md) |

\---

**学习时长**: ~1.5 小时

**完成度**: 95%

\### 一句话记忆

\> Agent 不应该拥有资产，它只应该在被限制、被审计、可撤销的权限范围内执行任务——钱包与权限是执行型 Agent 的安全地基。
<!-- DAILY_CHECKIN_2026-06-05_END -->

# 2026-06-04
<!-- DAILY_CHECKIN_2026-06-04_START -->







今天有了 Hackathon 的一个赛道一想法：**Agent Resource Market**——一个面向 AI Agent 的资源采购市场。

### **项目一句话定位**

> Agent Resource Market 是一个让 AI Agent 在安全预算内自主采购 API 和算力的经济基础设施。它展示的不是单次付款，而是完整的 Agentic Commerce 流程：**任务触发 → 资源发现 → 比价决策 → CAW 授权支付 → 服务执行 → 结果验收 → 审计追踪**。

### **核心流程**

```
用户提交任务 + 预算
    ↓
Agent 拆解任务
    ↓
判断需要 API / 算力资源
    ↓
Resource Market 返回候选供应商
    ↓
Agent 比价：价格、速度、成功率、可信度、gas
    ↓
生成采购计划
    ↓
CAW Pact 限制预算、地址、token、次数、时间
    ↓
Agent 通过 CAW 支付
    ↓
API / Compute Provider 返回结果
    ↓
Agent 验收结果
    ↓
输出最终报告 + 交易记录 + 审计日志
```

### **项目包含的模块**

| 模块 | 内容 |
| --- | --- |
| 用户界面 | 输入任务、预算，查看 Agent 采购过程 |
| Planner Agent | 拆解任务，判断需要什么资源 |
| Resource Registry | 存放 API 和算力供应商信息 |
| Quote Engine | 获取报价，计算总成本 |
| Buyer Agent | 根据预算、质量和 gas 做采购决策 |
| CAW Payment Layer | 用 CAW 创建 Pact、执行支付、查询交易 |
| API Providers | 提供付费数据，比如链上数据、行情、新闻 |
| Compute Providers | 提供付费算力，比如风险评分、数据分析、推理任务 |
| Procurement Ledger | 记录每次采购原因、价格、tx hash、结果 |
| Audit 展示 | 展示 CAW 审计日志和被拒绝的越权操作 |

### **CAW 的角色**

CAW 是项目的资金核心，不是展示元素。它负责 Agent 钱包托管和资金执行、Pact 权限控制、真实链上付款，以及拦截超预算和越权操作。

Demo 需要展示两类动作：

1.  ✅ **成功支付**：Agent 买 API 或算力
    
2.  ❌ **拒绝支付**：Agent 尝试超预算或给非白名单地址付款，被 CAW 拦截
    

### **Demo 场景**

> "帮我分析某个 Web3 项目的风险，预算 2 USDC。"

Agent 自动拆解任务 → 发现需要链上数据 → 在市场中比价采购数据 API → 发现还需要风险评分模型 → 采购 Compute Worker → 输出报告 → 展示两笔 tx hash + Pact + 再展示一次被 CAW 拒绝的超预算购买。

### **关键问题思考**

-   CAW 不可替换：它是真实资金执行、Pact 权限控制、安全隔离和审计日志的基础
    
-   Agent 不会乱花钱：每个任务有 Pact 限制预算、收款地址、token、链和次数
    
-   MVP 先用单链（Base Sepolia）结算，跨链只做报价展示
    

### **主要难点**

| 难点 | 处理方式 |
| --- | --- |
| 真实 x402/API 支付接入 | 一个最小付费 endpoint，其他先模拟 |
| CAW Pact 配置 | 先限定单链、USDC、白名单地址 |
| Demo 稳定性 | 准备预录 tx、fallback 数据和短任务 |
| Compute Provider 复杂度 | 自建 worker，跑轻量真实任务 |
| 跨链和 gas | MVP 单链结算 |

* * *

## **知识连接**

| 之前学的 | 和 Agent Resource Market 的关系 |
| --- | --- |
| Web3 Tool Use | 市场中的 API/算力供应商本质就是 Tool Set—每个资源都有确定的输入、输出和付费方式 |
| Agent Wallet | CAW 是项目的资金核心—Pact 限制权限、执行支付、审计日志 |
| Agent Workflow | 采购流程本身就是 Workflow—任务拆解→比价→支付→验收→输出 |
| Machine Payment | Agent 间结算、按次付费、按结果付费—正是这个项目的支付模型 |
| Cobo Wallet 调研 | CAW + Pact 是实现安全 Agent 支付的关键基础设施 |

* * *

## **今日收获**

-   🧠 **确定 Hackathon 项目方向**：Agent Resource Market
    
-   🔑 **核心创新点**：Agent 自主采购能力 + CAW 安全支付 + 全链路可审计
    
-   🛡 **安全设计**：Pact 限制 + 白名单 + 预算上限 + 审计日志
    
-   💡 **Demo 设计**：一次成功支付 + 一次被拒绝支付，展示 CAW 的价值
    
-   🎓 **与课程强关联**：Web3 Tool Use → Agent Wallet → Agent Workflow → Machine Payment → Agentic Commerce
    

* * *

## **打卡记录**

| 项 | 内容 |
| --- | --- |
| 今日主题 | Agent Resource Market 项目提案 & 思路梳理 |
| 学习时长 | ~1 小时 |
| 完成度 | 90% |
| 学习形式 | 项目方向确定 & 提案文档编写 |
| 关键词 | Agent Resource Market、CAW、Pact、Agentic Commerce、机器支付、资源采购 |
| GitHub 仓库 | https://github.com/Thomas-Novato/ai-web3-school-cohort-0 |
| 相关文件 | submissions/2026-06-04-project-proposal.md |

* * *

## **明日计划**

-   开始技术方案设计：系统架构图、技术选型
    
-   如果有时间，可以看看 Cobo CAW 的实际 API 文档，评估 Pact 配置方式
    
-   研究 Resource Marketplace 的最小实现方案
    

* * *

**学习时长**: ~1 小时 **完成度**: 90%

### **一句话记忆**

> 确定了 Hackathon 方向：Agent Resource Market——一个让 AI Agent 在安全预算内自主采购 API 和算力的经济基础设施，CAW 作为资金核心负责执行和风控。
<!-- DAILY_CHECKIN_2026-06-04_END -->

# 2026-06-03
<!-- DAILY_CHECKIN_2026-06-03_START -->








## **. AI x Web3：Web3 Tool Use**

### **1.1 第一性原理**

**模型可以选择工具，但工具必须用确定性边界限制模型。**

不要让 Agent 直接拼接任意 calldata 或调用任意地址。工具应该把危险能力封装成受限接口，并在执行前检查网络、地址、额度、方法、模拟结果和用户确认。

**三条铁律：**

1.  **读写分离** — 读取链上状态和发送交易必须是不同工具、不同权限
    
2.  **参数结构化** — chain id、contract address、method、args、value、slippage 不能埋在自然语言里
    
3.  **日志不可省** — 每次工具调用都要记录输入、输出、时间、来源和错误
    

### **1.2 核心知识点**

**1.2.1 RPC Tool ⭐ 初级**

用来读取链状态、查询区块、估算 gas、获取日志或广播交易。

-   只读 RPC 可以开放更宽（余额、block number、合约 view 函数）
    
-   写入能力必须拆出去，不能混在"万能 RPC"工具里
    
-   工具返回应包含：chain id、RPC provider、block number、method、result、error — 这样 Agent 能说明自己基于哪个区块的数据
    

**1.2.2 Contract Read ⭐ 初级**

调用合约 view / pure 函数，不改变链上状态。

-   适合：余额、配置、owner、allowance、pool 状态、价格参数、nonce、是否 paused
    
-   对 Agent 来说是最常用也相对低风险的 Web3 工具
    
-   ⚠️ 陷阱：读错网络、读错合约、ABI 不匹配、RPC 数据滞后 → 模型基于错误事实生成建议
    

**1.2.3 Contract Write ⭐⭐⭐ 高级**

会改变链上状态，必须经过严格检查。

**写交易前至少需要：**

1.  chain id 和目标合约地址
    
2.  ABI method 和 args
    
3.  value 和 token 变化预估
    
4.  gas 估算
    
5.  simulation 结果
    
6.  policy 检查
    
7.  用户或 Smart Account 授权
    
8.  交易哈希和回执追踪
    

**Agnet 不应该直接拥有"任意合约写入"能力**。更好的做法是把写工具限制在白名单合约、白名单方法和额度策略里。

**1.2.4 Wallet Tool ⭐⭐⭐ 高级**

负责连接账户、请求签名、生成交易、管理授权和返回用户确认结果。

-   最敏感的边界 — 必须把"连接""签名消息""发送交易""授权 token""撤销授权"分成不同动作
    
-   清楚展示用户正在批准什么
    
-   **AI 生成的交易草稿不应该绕过钱包确认**
    
-   高风险动作必须回到用户、Smart Account policy 或多签流程
    

**1.2.5 Explorer Tool ⭐ 初级**

查询交易、合约源码、event、token transfer 和地址历史。

-   价值：提供**可验证证据**
    
-   Agent 可以回答：交易成功了吗？调用了哪个方法？转出了哪些 token？合约源码是否 verified？最近是否有升级或权限变更？
    

**1.2.6 DeFi Tool ⭐⭐⭐ 高级**

把 swap、借贷、授权、仓位查询、清算风险等能力封装给 Agent。

-   直接影响资产，必须特别小心
    
-   至少要求：协议白名单、最大交易额、最大滑点、价格来源、simulation、allowance 检查、人工确认或 session key policy
    
-   ❌ 不要给 Agent 一个"帮我调用任意 DeFi 协议"的通用工具
    

**1.2.7 Tool Permission ⭐⭐⭐ 高级**

定义 Agent 能调用哪些工具、在什么条件下调用、能传什么参数。

**分层权限示例：**

| 级别 | 操作 | 策略 |
| --- | --- | --- |
| 🟢 查询余额 | 自动允许 |   |
| 🟢 生成交易草稿 | 自动允许 |   |
| 🟡 小额白名单支付 | session key 允许 |   |
| 🔴 大额转账或授权 | 必须人工确认 |   |
| ⛔ 任意合约调用 | 默认禁止 |   |

**1.2.8 Tool Log ⭐⭐ 中级**

Agent 行为可审计的基础。

**每次工具调用至少记录：** 用户目标、工具名、输入参数、输出结果、错误类型、时间、链 ID、区块号、交易哈希、确认人、policy 判断。

> 当 Agent 造成错误时，日志能回答：模型看到了什么、调用了什么、工具返回了什么、系统有没有拦截、用户确认了什么。

### **1.3 在 AI × Web3 中的位置**

```
Chain-aware Context → AI 看到链上事实
    ↓
Web3 Tool Use     → AI 通过工具与链交互（读/写/签名/查询）
    ↓
Agent Wallet      → 权限边界（谁批准、在什么条件下批准）
    ↓
Agent Workflow    → 流程骨架（把工具调用组织成可执行、可控制的路径）
    ↓
Machine Payment   → 资金结算（有执行才有支付）
```

Web3 Tool Use 是从"AI 能解释链上信息"走向"AI 能参与链上执行"的关键层。

### **1.4 最小实践：Agent Web3 工具设计**

1.  只读工具：读取某地址在某链上的 ETH 余额
    
2.  合约读取工具：读取 ERC-20 allowance(owner, spender)
    
3.  交易草稿工具：生成 ERC-20 approve calldata，但不发送交易
    
4.  写交易工具的权限规则：只允许特定 token、特定 spender、最大额度
    
5.  为每个工具定义：输入 schema、输出字段、错误类型、日志字段
    

> 重点不是马上实现所有工具，而是把**读、写、签名、确认、记录**分清楚。

* * *

## **2\. 知识连接**

| 之前学的 | 和 Web3 Tool Use 的关系 |
| --- | --- |
| Chain-aware Context | 工具需要基于链上事实才能做出正确决策 — Context 是工具的输入层 |
| Agent Wallet | Wallet Tool 是工具集的权限边界 — 钱包决定签名和授权怎么走 |
| Agent Workflow | Workflow 把多个工具调用串成流程 — 工具是 Workflow 的执行节点 |
| Machine Payment | 支付本身就是 Web3 Tool Use 的一个具体场景 |
| Agent Trust & Reputation | 有了工具日志才能追溯 Agent 行为，才能建立信任证据链 |
| RPC (之前 Web3 基础) | RPC Tool 是所有 Web3 工具的底层通信协议 |

* * *

## **3\. 今日自测**

| # | 问题 | 答案 |
| --- | --- | --- |
| Q1 | Web3 Tool Use 的第一性原理是什么？ | 模型可以选择工具，但工具必须用确定性边界限制模型 |
| Q2 | 为什么要读写分离？ | 读取和发送交易风险不同，不能把写入能力混在万能 RPC 里 |
| Q3 | Contract Read 的陷阱有哪些？ | 读错网络、读错合约、ABI 不匹配、RPC 数据滞后 |
| Q4 | Contract Write 前至少需要检查什么？ | chain id、地址、ABI、value、gas、simulation、policy、授权 |
| Q5 | Wallet Tool 为什么是最敏感的边界？ | 它控制签名和交易发送 — AI 生成的交易草稿不能绕过钱包确认 |
| Q6 | Explorer Tool 对 Agent 有什么独特价值？ | 提供可验证证据 — 交易状态、合约源码、event、权限变更 |
| Q7 | DeFi Tool 的关键限制是什么？ | 协议白名单、最大交易额、最大滑点、simulation — 不允许通用调用 |
| Q8 | Tool Permission 的分层策略是什么？ | 查询自动 → 草稿自动 → 小额白名单 session key → 大额人工确认 → 任意调用禁止 |
| Q9 | Tool Log 至少记录什么？ | 用户目标、工具名、输入、输出、错误、时间、链 ID、区块、交易哈希、确认人、policy |
| Q10 | Web3 Tool Use 在 Bridge 模块中的角色是什么？ | 从"解释链上信息"到"参与链上执行"的关键转换层 |

* * *

## **4\. 今日收获**

### **新知识**

-   🧠 **Web3 Tool Use = Agent 的"手"** — Agent Wallet 是权限边界，Workflow 是流程骨架，而 Tool Use 是执行实体
    
-   🔑 **8 个工具节点**：RPC Tool → Contract Read → Contract Write → Wallet Tool → Explorer Tool → DeFi Tool → Tool Permission → Tool Log
    
-   🛡 **三层限制**：读写分离（架构边界）+ 权限分层（策略边界）+ 日志审计（追溯边界）
    
-   💡 **最大的风险点在 Contract Write、Wallet Tool、DeFi Tool** — 这三个直接面对资产变更，必须有 simulation 和人工确认
    
-   🎓 **Web3 Tool Use 是 Bridge 模块最后一个工具层概念** — 接下来是 AI Oracle、Verifiable AI、AI Security 等应用层
    

### **新技能**

-   理解了 Web3 工具的分类和风险等级（读/写/签名/查询/DeFi）
    
-   掌握了工具权限的分层设计（从自动允许到默认禁止）
    
-   能设计一个最小 Agent Web3 工具集的结构和权限规则
    

### **与个人项目的关联**

> Approval Tracker MVP 之前关注的是"谁在什么条件下做了授权"。Web3 Tool Use 补了工具层：Agent 通过什么工具操作？这些工具有没有读写分离、权限限制和日志记录？后续可以把 Approval Tracker 的权限策略和 Tool Permission 结合，形成更完整的 Agent 调用管控。

* * *

## **5\. 今日副线：Cobo Wallet 调研 — Hackathon 赛道一脑暴素材**

> 和小伙伴一起脑暴赛道一的想法，决定深挖 Cobo Wallet 的改进空间。以下是调研整理的素材，供后续方向决策和 Demo 设计参考。

### **5.1 Cobo Wallet 产品概览**

Cobo 是一个**面向机构**的数字资产托管和钱包基础设施平台，核心产品：

| 产品线 | 说明 |
| --- | --- |
| Cobo Portal | 机构级资产管理平台，SOC 2 Type II / ISO 27001 认证 |
| Wallet-as-a-Service (WaaS) 2.0 | 4 种钱包类型 API：Custodial、MPC、Smart Contract、Exchange |
| Cobo Agentic Wallet (CAW) | 2026年4月发布，三个行业首创 — AI Agent 可自主操作的钱包 |
| Cobo AI | AI 助手、Onboarding Agent、Payment AI Assistant |
| Cobo Portal Apps | Earn、Screening、OTC、Token Swap、Staking、Reports |
| Fee Station | 自动化 Gas 费支付管理 |
| Compliance | KYT (Know Your Transaction)、Travel Rule、Satoshi Test |

**技术能力：** 支持 80+ 链、3000+ 代币、4 种钱包架构（Custodial / MPC / Smart Contract / Exchange）

### **5.2 与行业龙头对比（Cobo vs Fireblocks）**

| 对比维度 | Cobo | Fireblocks |
| --- | --- | --- |
| 钱包架构 | 4 种（Custodial + MPC + SCW + Exchange） | 仅 MPC |
| 链支持 | 80+ 条链，3000+ 代币 | ≤70 条链 |
| AI Agent | ✅ CAW（2026 发布） | ❌ 无类似产品 |
| Smart Contract Wallet | ✅ Safe{Wallet} 集成 + 自动 Farming Rewards | ❌ 有限 |
| 合规 | KYT、Travel Rule、Satoshi Test | 有 |
| Tokenization | ✅ 发币、Mint/Burn、Blacklist/Allowlist | ❌ 无 |
| Portal App 生态 | ✅ 开发者可构建 Portal Apps | ❌ 封闭平台 |
| AI 助手 | ✅ Cobo AI Assistant | ❌ 无 |
| Staking | ✅ 原生（Babylon、Berachain 等） | 部分支持 |
| Fee Station | ✅ 自动 Gas 管理 | ❌ 无 |

**Cobo 的核心优势：** 钱包类型更丰富、链/代币覆盖更广、有 AI Agent 原生能力、开发者生态更开放、合规功能更完善。

**Cobo 的潜在不足（可改进方向）：**

**5.2.1 产品体验层面**

1.  **开发者文档虽然全面但入口分散** — [manuals.cobo.com](http://manuals.cobo.com)、[developers.cobo.com](http://developers.cobo.com)、llms.txt 三个入口，新手容易迷路
    
2.  **Portal 功能丰富但学习曲线陡峭** — 配置复杂，虽然有 Cobo AI 但场景覆盖还在扩展中
    
3.  **Mobile 端功能有限** — Portal Mobile 主要做审批，不支持全功能管理
    

**5.2.2 支付场景不足**

1.  **Cobo Payments Solution 文档极少** — 在 Developer Hub 只有一个 redirect 链接，没有详细的 API 参考或 guide
    
2.  **缺乏端到端支付流程示例** — 没有"用户 A 通过 Cobo 钱包向用户 B 支付稳定币"的完整 demo
    
3.  **没有 fiat on/off ramp 原生集成** — 机构仍需自行对接第三方法币通道
    
4.  **稳定币支付用例在文档中一笔带过** — 虽然集成了 Morph、Plasma 等，但支付场景的文档和代码示例很有限
    

**5.2.3 Agent 控制层面**

1.  **CAW (Agentic Wallet) 刚发布** — 文档和最佳实践仍在建设，Agent 的权限粒度和自动化程度待验证
    
2.  **Agent 的行为追溯/Tool Log 没有对标** — Cobo 的 Tool Log 概念（来自 Web3 Tool Use 章节）在 Cobo 实际产品中的曝光度低
    
3.  **缺乏 Agent 控制面板** — 没有直观的 GUI 让机构设置"哪些 Agent 可以用多少钱、调什么协议、是否需要人批"
    

### **5.3 基于 Cobo 平台可以扩展的支付方法与场景**

> 这些方向基于 Cobo 现有的技术底座（WaaS API、MPC、SCW、Fee Station、CAW）和平台资源，适合 Hackathon 做 demo 验证。

**方向一：Agent 驱动的自动支付引擎 ⭐⭐⭐⭐**

**核心想法：** 基于 Cobo CAW + Agent Workflow 设计思路，做一个**Agent 钱包控制面板**——机构可以设置规则让 AI Agent 自动执行小额支付、定期结算或条件性付款。

**可做 Demo：**

-   Agent 根据预设规则（预算上限、白名单地址、频次限制）自动发起 USDC 支付
    
-   每笔交易自动生成 Tool Log + 审批追溯
    
-   管理面板：查看 Agent 支出、设置规则、暂停/恢复权限
    

**技术可行性：** Cobo 已有 WaaS API（transfer token、call smart contract）+ CAW + Webhook/Tool Log 能力

**方向二：智能合约钱包自动化结算 ⭐⭐⭐⭐**

**核心想法：** 利用 Cobo 的 Smart Contract Wallet (Safe{Wallet}) 做**条件触发结算**——当链上条件满足时（Oracle 价格达标、时间锁到期、多签达成），自动执行 Token 结算。

**可做 Demo：**

-   订阅制付款：用户存入 USDC 到 SCW，每月自动扣款
    
-   按使用量结算：Agent 记录使用量，触发 SCW 自动转账
    

**技术可行性：** Cobo SCW 已有 automate farming rewards 能力，扩展做支付逻辑合理

**方向三：多链统一支付网关 ⭐⭐⭐**

**核心想法：** 利用 Cobo 的 80+ 链支持 + Fee Station，做一个**统一入金/出金接口**——用户不管用什么链入金，系统自动兑换成目标资产并归集。

**可做 Demo：**

-   用户通过任意 5 条链存入 USDC
    
-   Fee Station 自动处理各链 Gas
    
-   系统自动归集到主钱包，生成统一余额视图
    

**技术可行性：** Cobo 已有 Fee Station + auto-sweep + 多链支持

**方向四：AI Agent 间的机器支付 ⭐⭐⭐⭐**

**核心想法：** 结合 Machine Payment 概念和 Cobo CAW，做**Agent 间自动结算**——一个 Agent 调用了另一个 Agent 的服务后，自动从委托方钱包扣款结算给对方。

**可做 Demo：**

-   Agent A 请求 Agent B 执行链上分析
    
-   Agent B 完成后自动发送支付请求
    
-   Agent A 的 CAW 自动审批（在预算和策略范围内）并付款
    

**技术可行性：** CAW + WaaS API transfer + 这刚好是 AI × Web3 School Bridge 模块 Machine Payment 的真实用例

**方向五：合规支付审批工作流 ⭐⭐⭐**

**核心想法：** 用 Cobo Portal Apps 的工作流引擎 + 合规 API（KYT、Travel Rule），做一个**合规支付审批面板**——每笔大额支付自动过 KYT 检查，风险标记后走多人审批。

**可做 Demo：**

-   发起支付 → KYT 自动扫描 → 低风险自动通过 / 高风险进入审批流
    
-   审批人手机端确认（用 Portal Mobile）
    
-   交易完成后生成合规报告
    

**技术可行性：** Cobo 已有 KYT Screening、Travel Rule、Approval Workflow、Portal Mobile

### **5.4 推荐优先做的 Demo 方向**

| 方向 | 复杂度 | 差异化 | 与课程关联 | Demo 效果 | 推荐指数 |
| --- | --- | --- | --- | --- | --- |
| 方向一：Agent 支付引擎 | ⭐⭐ | 🟢 强 | 🔥 Web3 Tool Use + Agent Wallet | 可视化控制面板 | ⭐⭐⭐⭐⭐ |
| 方向四：Agent 间机器支付 | ⭐⭐⭐ | 🟢 很强 | 🔥 Machine Payment + Agent Workflow | 两条 Agent 自动结算 | ⭐⭐⭐⭐⭐ |
| 方向二：SCW 自动结算 | ⭐⭐⭐ | 🟡 中等 | 👍 Smart Contract Wallet | 自动扣款流程 | ⭐⭐⭐⭐ |
| 方向五：合规审批面板 | ⭐⭐ | 🟡 中等 | 👍 Compliance | 审批流演示 | ⭐⭐⭐ |
| 方向三：多链支付网关 | ⭐⭐⭐⭐ | 🔴 较弱 | 👌 基础设施 | 效果不够直观 | ⭐⭐ |

**最佳切入建议：方向一 + 方向四 合并** — 做一个 **Agent 间自动支付引擎**，带可视化管理面板：

1.  **管理面板**：设 Agent 预算、白名单、频次限制（Tool Permission）
    
2.  **Agent A** 发起支付任务给 **Agent B**
    
3.  **Agent B** 执行后请求结算
    
4.  **Agent A 的 CAW** 自动审批并扣款
    
5.  **Tool Log** 记录所有操作（可审计、可回放）
    
6.  **合规检查** 集成 KYT（可选加分）
    

这个方向既用到了你近期学的全部 Bridge 知识（Chain-aware Context → Web3 Tool Use → Agent Wallet → Agent Workflow → Machine Payment），又能在 Cobo 现有 API 基础上快速出 demo，而且市场上没有现成的竞品。

* * *

## **6\. 知识连接**

| 之前学的 | 和 Cobo / 赛道一的关系 |
| --- | --- |
| Web3 Tool Use | Cobo 的 WaaS API 本质就是 Tool Set——Read/Write/Wallet/Permission/Log 全有 |
| Agent Wallet | Cobo CAW 的实现框架——Agent 有独立钱包 + 权限策略 |
| Agent Workflow | 支付引擎需要 Task Graph + State Machine + Human-in-the-loop |
| Machine Payment | 方向四的核心——Agent 间自动结算，Machine Payment 的真实用例 |
| Agent Trust & Reputation | Tool Log = 信任证据链，Agent 间是否可信靠日志和验证决定 |
<!-- DAILY_CHECKIN_2026-06-03_END -->

# 2026-06-02
<!-- DAILY_CHECKIN_2026-06-02_START -->









今天学习的是 **Agent Trust & Reputation**，也就是智能体信任与声誉机制。

它解决的核心问题是：当一个 Agent 声称自己能完成某个任务时，用户、平台或其他 Agent 如何判断它是否可靠？它过去的表现是否真实？如果它失败、作弊或虚假承诺，是否需要承担代价？

在 AI x Web3 场景里，未来的 Agent 可能会互相委托任务、购买服务、执行支付、提交报告、参与治理，甚至管理资产。这个时候，不能只依赖一句“我很专业”或者一个好看的介绍页面来建立信任。真正的信任应该来自可验证的历史行为，而不是自我声明。

## 一、核心理解

Agent 的可信度不是一个简单分数，而是一组可以追溯、比较和解释的证据。

一个 Agent 说“我擅长合约审查”并不重要。更重要的是：

它审查过哪些合约？  
谁验证过它的结果？  
它有没有漏掉严重漏洞？  
它是否有 stake 抵押？  
失败后有没有退款、赔付或 slashing？  
评价是不是绑定了具体任务？  
历史表现是否仍然适用于当前版本？

所以，Agent Trust & Reputation 的重点不是做一个“五星评分系统”，而是建立一套可验证的信任信号体系。

## 二、第一性原理

Agent 的可信度应该来自可验证行为，而不是自我包装。

声誉系统至少要满足几个原则：

第一，声誉要绑定身份。  
如果 Agent 没有稳定身份，历史记录就无法积累，也无法判断它是不是换壳重来。

第二，评价要绑定任务。  
泛泛的“good job”价值很低，真正有用的是和任务 ID、交付物、付款记录、验收标准绑定的评价。

第三，惩罚要有真实成本。  
没有成本的承诺很容易被滥用。stake、refund、slashing、dispute 机制，都是为了让失败和作恶产生代价。

第四，信任要可解释。  
不要把所有信息压缩成一个黑盒分数。用户需要知道这个 Agent 到底在哪类任务上表现好、谁验证过、失败过什么、争议记录如何。

## 三、关键知识节点

### 1\. Reputation：声誉

Reputation 是 Agent 历史表现形成的一组信号。

它可以包括成功率、响应时间、退款率、争议率、用户评分、验证通过次数、stake 数量、不同任务类型下的表现等。

声誉最好按任务类型拆开。一个擅长总结治理提案的 Agent，不一定擅长合约测试；一个擅长执行小额支付的 Agent，也不一定适合做高价值托管评估。

声誉还需要时间衰减。两年前表现很好，不代表今天仍然可靠，因为 Agent 的模型、工具、owner、endpoint 都可能发生变化。

### 2\. Review：评价

Review 是用户、客户或其他 Agent 对某次任务结果的反馈。

高质量 Review 应该绑定任务 ID、交付物、付款记录和评价者身份。否则就容易被刷评、互评或伪造口碑污染。

有价值的 Review 不只是“很好”，而是包含任务说明、验收标准、交付 hash、具体问题、返工情况和最终结果。

评价者本身也应该有身份和声誉，否则一个没有历史记录的小号评价，很难和长期可信用户的评价拥有同等权重。

### 3\. Attestation：可验证声明

Attestation 是某个主体对 Agent、任务或结果做出的可验证声明。

例如：

某评测者证明这个 Agent 通过了测试集。  
某用户证明任务已经按要求交付。  
某 TEE 证明这个输出来自某个特定版本程序。  
某验证者证明某份报告结果可复现。

Attestation 的价值取决于 issuer 是否可信、声明内容是否具体、是否有 evidence、是否支持 expiration 和 revocation。

它最好是结构化的，包括 issuer、subject、claim、evidence、expiration、revocation 等字段。

### 4\. Stake：抵押

Stake 是 Agent 或运营方押上的经济保证。

Stake 的意义是让承诺有成本。一个有抵押的 Agent，在失败时可能被罚没或用于赔付，因此用户会更愿意信任它。

但 stake 不等于能力。资本多的 Agent 不一定更专业，小团队或公共物品 Agent 可能 stake 不高，但质量很好。

所以 stake 不能单独看，必须和任务历史、validation、review、dispute 记录一起判断。

设计 stake 时要明确：

抵押什么资产？  
锁定多久？  
什么时候释放？  
什么情况下罚没？  
罚没给谁？  
是否允许申诉？

### 5\. Slashing：罚没

Slashing 是当 Agent 违约、作弊或提交虚假结果时，对其抵押进行罚没。

这是一个高级且危险的机制。因为不是所有任务都适合自动 slashing。

对于明确可验证的违约行为，比如未按时交付、签名伪造、重复提交矛盾结果、违反链上可检查 policy，可以考虑自动 slashing。

但对于主观任务，比如“报告质量是否足够”“分析是否深入”，直接自动罚没就很危险，更适合先进入 dispute 争议流程。

Slashing 机制必须定义清楚证据标准、挑战窗口、仲裁者、误罚处理和申诉机制，否则它本身就会变成新的治理风险。

### 6\. Validation：验证

Validation 是对 Agent 能力或任务结果的验证流程。

它可以来自自动测试、benchmark、人工审核、其他 Agent 复核、链上证明或 TEE attestation。

Validation 要区分两种：

一种是能力验证，说明这个 Agent 大概率能完成某类任务。  
另一种是任务结果验证，说明某一次具体交付是否合格。

对 Agent marketplace 来说，validation 不应该只是一个认证徽章，而应该是一段可查询、可复现的验证历史。

### 7\. ERC-8004：Agent 身份、声誉与验证注册表

ERC-8004 是围绕 Trustless Agents 的标准草案，试图为 Agent 提供 identity、reputation 和 validation registry。

它的价值在于：不把信任做成单一中心化评分，而是把 Agent 的身份、反馈和验证信号放到公共承载层里，让不同应用可以基于这些数据建立自己的过滤、排序和信任模型。

但需要注意，链上注册只能证明身份连续性，不能自动证明服务质量。Agent 是否真的可靠，仍然要看验证记录、任务历史、评价者可信度、stake、争议记录和具体任务类型。

## 四、在 AI x Web3 中的位置

Agent Trust & Reputation 连接了 Agent Identity、Settlement & Escrow、Machine Payment 等模块。

没有身份，声誉无法积累。  
没有声誉，用户不知道该信任谁。  
没有验证，Agent 的能力声明无法被确认。  
没有抵押和惩罚，承诺缺乏约束。  
没有 dispute，主观任务很难公平处理失败。

所以，Agent 信任层是 Agent 之间安全协作的前提，也是用户愿意为 Agent 服务付费的基础。

## 五、最小实践设计

如果要设计一个 Agent 任务声誉记录，可以从一个简单任务开始，比如“生成一份合约风险摘要”。

需要记录：

Agent ID  
用户 ID  
任务类型  
任务输入 hash  
交付物 hash  
付款记录  
是否按时交付  
是否需要返工  
用户 review  
验证者 validation  
争议状态  
退款或 slashing 条件

Review 字段可以包括：

准确性  
及时性  
表达清晰度  
是否符合验收标准  
是否需要人工修正

Validation 字段可以包括：

谁验证  
怎么验证  
使用什么测试集  
是否可复现  
验证时间  
验证结果 hash

失败处理可以包括：

未交付则退款  
超时则部分退款  
可验证作弊则 slashing  
主观争议进入 dispute  
仲裁后决定赔付或释放 stake

## 六、我的理解

Agent Trust & Reputation 的本质，不是给 Agent 打分，而是把“为什么值得信任”拆成一组可验证证据。

未来的 Agent 市场里，真正有价值的不是谁宣传自己最强，而是谁能留下稳定身份、可查任务历史、真实评价、验证记录、抵押约束和失败处理机制。

信任不是一句话，也不是一个分数。  
信任是一条可以回放的行为链。

对于 AI x Web3 来说，Agent 的能力越强、权限越大、能控制的资金越多，信任与声誉系统就越重要。否则 Agent 只能停留在 demo 阶段，很难进入真实服务和高价值协作场景。
<!-- DAILY_CHECKIN_2026-06-02_END -->

# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->










\# 2026-06-01 学习笔记 — Agent Workflow（智能体工作流）+ IELTS\_Training 产品

\> **Core Insight:** Agent Workflow 的本质，是把概率模型放进确定性流程里。Web3 Agent 的成熟标志不是能不能自动操作，而是能不能在每一次操作前后都证明：为什么这样做、依据是什么、风险在哪里、谁确认了、失败后如何停止。

\---

\## 目录

1\. \[AI x Web3：Agent Workflow\](#1-ai-x-web3agent-workflow)

2\. \[AI 应用：IELTS\_Training / BandPath\](#2-ai-应用ielts\_training--bandpath)

\---

\## 1. AI x Web3：Agent Workflow

\### 1.1 第一性原理

高风险 Agent 不能只有"下一步推理"，必须有明确的状态、边界和停止条件。

模型可以负责理解目标和生成计划，但系统必须知道：

\- 当前执行到哪一步

\- 哪些工具已经调用

\- 哪些结果可信

\- 哪些动作需要用户确认

\- 失败后应该重试、降级还是停止

**三条铁律：**

1\. **流程要显式** — 不能把完整执行链路藏在一段长 prompt 里

2\. **状态要可恢复** — 避免用户刷新页面、RPC 失败、交易 pending 后系统失控

3\. **评估要可回放** — 否则模型、prompt 或工具升级后，很难判断安全性有没有退化

\### 1.2 核心知识点

\#### 1.2.1 Task Graph ⭐⭐ 中级

把用户目标拆成多个节点和依赖关系，而不是让 Agent 一口气自由执行。

**示例：** "帮我评估并执行一次低风险 swap"拆成：

1\. 读取用户目标和限制

2\. 获取余额和 allowance

3\. 查询价格和流动性

4\. 生成候选交易

5\. 模拟交易

6\. 展示风险

7\. 等待用户确认

8\. 发送交易

9\. 追踪结果

每一步都能设置输入、输出、可用工具、权限范围和停止条件。

\#### 1.2.2 State Machine ⭐⭐ 中级

让 Agent 不只是依赖聊天历史，而是进入明确的执行状态。

**常见状态：**

`draft` → `context_loaded` → `plan_ready` → `simulation_failed` → `waiting_user_confirmation` → `submitted` → `confirmed` → `reverted` → `cancelled`

**价值：** 当用户刷新页面、交易 pending、RPC 失败或模型重试时，系统不会忘记自己在哪一步，也不会重复执行危险动作。

\#### 1.2.3 Human-in-the-loop ⭐⭐⭐ 高级

人工确认不是让用户确认每一个步骤，而是放在真正高风险的位置。

**按风险分层：**

| 风险等级 | 动作 | 执行策略 |

|:--|:--|:--|

| 🟢 只读分析 | 自动执行 | 无需确认 |

| 🟡 交易草稿 | 自动生成 | 无需确认 |

| 🟠 小额白名单操作 | 通过 session key 执行 | 预算内自动 |

| 🔴 高风险交易 | 必须人工确认 | 等待确认 |

| ⛔ 超出 policy | 直接拒绝 | 不可执行 |

\> 关键不是"有没有确认按钮"，而是用户确认时是否能看懂资产变化、权限变化、滑点、失败风险和链上后果。

\#### 1.2.4 Retry / Fallback ⭐⭐ 中级

Web3 Agent 的重试逻辑必须非常谨慎：

\- ✅ 读取余额失败 → 可以重试

\- ✅ RPC 异常 → 可以切换 provider，但要记录数据来源

\- ❌ 发送交易失败 → 必须先判断交易是否已经广播

\- ❌ 交易 pending → 不能简单再发一笔

\- ❌ 模型不可用 → 可以降级成只读模式，但不能自动换一个未经评估的模型继续发交易

\#### 1.2.5 Trace ⭐⭐ 中级

Agent 每一步输入、判断、工具调用和结果的记录。

**有用的 trace 至少包括：**

\- 用户目标

\- 模型版本

\- 上下文来源

\- 工具输入输出

\- policy 判断

\- simulation 结果

\- 人工确认

\- 交易哈希

\- 最终状态

\> 没有 trace，出问题后只能翻聊天记录。有 trace，才能复盘到底是模型理解错、工具返回错、策略漏判，还是用户确认了错误动作。

\#### 1.2.6 Evaluation Harness ⭐⭐⭐ 高级

Web3 Agent 的评估不应该只看回答好不好，还要测试它在风险和异常场景下是否能正确停止。

**需要测试的问题：**

\- 是否拒绝越权请求

\- 是否识别错误链和错误合约

\- 是否在缺少关键数据时停止

\- 是否要求人工确认

\- 是否记录来源和 trace

\- 是否避免生成危险 calldata

\#### 1.2.7 Regression Set ⭐⭐⭐ 高级

一组固定测试用例，防止模型、prompt、工具或策略更新后出现安全倒退。

**可以包括的用例：**

\- 正常 swap 请求

\- 错误链请求

\- 无限 approve 请求

\- 恶意文档诱导

\- 余额不足

\- 预言机价格过旧

\- 用户拒绝签名

\- 交易 pending 超时

\> 每次改模型、工具或策略前，都应该跑这组用例，确认 Agent 没有从"会拒绝危险请求"退化成"看起来更顺，但更危险"。

\### 1.3 在 AI × Web3 中的位置

Agent Workflow 是桥接层的\*\*流程骨架\*\*：

\`\`\`

Chain-aware Context → 提供链上事实

Web3 Tool Use → 提供执行能力

Agent Wallet → 提供权限边界

Agent Workflow → 把它们组织成可执行、可控制、可恢复、可追踪的路径

\`\`\`

如果没有 workflow，项目很容易变成"模型直接调用工具"。这在 demo 阶段很快，但在真实资产、真实权限和真实用户面前远远不够。

\### 1.4 最小实践：ERC-20 Swap 工作流

**步骤：**

1\. 读取用户目标和限制

2\. 读取链、地址、余额和 allowance

3\. 查询价格、流动性和滑点

4\. 生成交易计划

5\. 做交易模拟

6\. 展示风险和资产变化

7\. 等待用户确认

8\. 发送交易

9\. 追踪交易状态

10\. 记录 trace

**5 个 regression case：**

\- 正常 swap

\- 错误链

\- 滑点过大

\- 余额不足

\- 用户拒绝签名

\---

\## 2. AI 应用：IELTS\_Training / BandPath

\### 2.1 项目定位

IELTS\_Training（也叫 BandPath）是一个雅思备考工作台，定位为\*\*备考操作系统\*\*。

不是简单的题库或 AI 批改工具，而是一个把目标分数、考试时间、当前水平、每日任务、复盘反馈和模考状态组织起来的连续学习平台。

**核心判断：** 雅思备考最大的问题不是缺资料，而是缺路径。学生需要的是"今天该练什么、为什么要练这个、练完后进度怎么变化"。

\### 2.2 核心功能节点

\#### 2.2.1 Daily Mission

学习产品的难点不是告诉用户长期目标，而是把长期目标拆成当天可以执行的任务。Daily Mission 把备考任务压缩成一组当天可完成的动作。

\#### 2.2.2 Adaptive Study Path

解决方向感问题。从 baseline 诊断 → evidence locating → paraphrase patterns → writing cohesion → 模考与复盘。学生不只是刷题，而是在一条可解释的路径里前进。

\#### 2.2.3 Practice / Review 闭环

练习结果进入复盘，复盘影响下一次任务。AI 最适合在这里发挥作用——帮助学生发现错因、总结模式、给出下一步任务。

\#### 2.2.4 Mock Tests

检测 readiness，区分练习模式/考试模式，结果回流到学习路径。

\#### 2.2.5 Progress

回答三个问题：我在哪里？离目标多远？下一步最该补什么？

\#### 2.2.6 Library

内容资产库，涉及版权、来源、版本和内容状态管理。

\#### 2.2.7 Mainland-ready Architecture

面向中国大陆环境的生产化设计：Next.js + NestJS + BullMQ + PostgreSQL + Redis/Tair + OSS/CDN + 微信支付/支付宝 + Qwen 反馈 + 阿里云语音 + ICP 合规。

\### 2.3 AI 在该项目中的角色

AI 不适合只做"批改按钮"，更适合承担三类任务：

1\. **结构化反馈** — criteria + evidence + strengths + priorities + nextTask

2\. **学习路径调整** — 根据练习结果动态调整 Daily Mission 和 Study Path

3\. **复盘生成** — 把练习/模考结果转为错因、短板和下一步任务

⚠️ 注意：IELTS 分数预测不能随便模拟，应先做"练习反馈"，等有专家标注数据后再校准。

\### 2.4 工程价值判断

该项目已具备产品工程意识：

\- ✅ 响应式前端工作台

\- ✅ 多页面产品结构

\- ✅ API 原型

\- ✅ 数据库 schema

\- ✅ 支付事件表、学习计划表、每日任务表

\- ✅ 模考 session、内容版本管理

\- ✅ AI feedback adapter 设计

\- ✅ 生产架构文档

\- ✅ 合规和数据保留意识

**当前阶段：** 可运行 MVP + 产品架构蓝图

\### 2.5 最小实践（下一步优先）

1\. 把 Daily Mission 和用户目标分数绑定

2\. 做真实 Diagnostic 流程（判断初始水平）

3\. 完成 Writing/Speaking 的结构化 AI feedback

4\. 让每次练习结果自动生成 Review 任务

5\. 建立专家标注样本，校准 AI 反馈质量

\---

\## 3. 知识连接

| 之前学的 | 和 Agent Workflow 的关系 |

|:--|:--|

| **Agent** | Agent 基础定义 Agent 是什么；Workflow 定义 Agent 怎么做 |

| **Machine Payment** | 支付是 Workflow 中的一个关键步骤节点 |

| **Chain-aware Context** | 为 Workflow 提供可靠的链上状态输入 |

| **Agent Wallet** | 为 Workflow 提供权限检查的边界 |

| **IELTS\_Training (新)** | 同一个 workflow 理念在不同领域的应用——学习流程也可以被结构化成任务图+状态机 |

\---

\## 4. 今日自测

| # | 问题 | 答案 |

|:--|:--|:--|

| Q1 | Agent Workflow 的第一性原理是什么？ | 把概率模型放进确定性流程里——高风险动作不能被模型自由决定 |

| Q2 | Task Graph 解决什么问题？ | 防止 Agent 自由执行，把目标拆成可控制的节点 |

| Q3 | State Machine 在处理交易 pending 时的价值？ | 系统不会忘记自己在哪一步，不会重复发交易 |

| Q4 | 人工确认应该放在什么位置？ | 高风险节点，不是所有步骤——用户确认时需看懂资产、权限、风险 |

| Q5 | 交易发送失败时能不能直接重试？ | 不能，必须先判断交易是否已经广播 |

| Q6 | Trace 至少包含哪些信息？ | 用户目标、模型版本、工具调用、policy 判断、simulation、人工确认、交易哈希 |

| Q7 | Regression Set 防止什么问题？ | 模型/工具/策略更新后安全性退化 |

| Q8 | BandPath 的核心产品判断是什么？ | 学生需要的不是更多内容，而是更清晰的下一步 |

\---

\## 5. 今日收获

\### 新知识

\- 🧠 **Agent Workflow = 概率模型 + 确定性流程** — 7 个核心组件构成完整的 Agent 执行骨架

\- 🔑 **Task Graph + State Machine** — 让 Agent 从"自由推理"变成"状态驱动流程"

\- 🛡 **Human-in-the-loop 分层** — 按风险决定是否需要人工确认

\- 💡 **Trace + Regression Set** — 可审计、可回放的安全保障

\- 🎓 **IELTS\_Training** — AI 教育产品的正确方向不是"用户问 AI 答"，而是诊断→计划→任务→练习→反馈→复盘→模考→进度的连续循环

\### 新技能

\- 理解了如何设计 Web3 Agent 的完整工作流（Task Graph → State Machine → Tools → HITL → Retry → Trace → Eval）

\- 掌握了按风险等级分层人工确认的策略（只读→草稿→session key→人工确认→拒绝）

\- 能区分 Web3 Agent 特有的重试陷阱（交易 pending 不能重发、广播状态必须先检查）

\### 与个人项目的关联

\> 之前设计的 Approval Tracker MVP 本质上就是一个简化版的 Agent Workflow 管理器。Machine Payment 补了资金层，Agent Workflow 补了流程层。下一步可以把三者结合成一个完整的 Agent 执行引擎。

\---

\## 6. 明日计划与打卡

\### 明日计划

\- \[ \] 继续 Bridge 模块：\*\*Web3 Tool Use（Agent 调用 Web3 工具）\*\*

\- \[ \] 或者开始动手：将学习到的 Agent Workflow 知识落地到 Approval Tracker MVP

\### 打卡记录

| 项 | 内容 |

|:--|:--|

| **今日主题** | Agent Workflow（智能体工作流）+ IELTS\_Training |

| **学习时长** | ~1 小时 |

| **完成度** | 95% |

| **学习形式** | 概念学习 + 自测问答 + 知识图谱连接 + 产品实践设计 |

| **关键词** | Task Graph、State Machine、Human-in-the-loop、Retry、Trace、Evaluation Harness、Regression Set、IELTS 备考系统 |

| **GitHub 仓库** | [https://github.com/Thomas-Novato/ai-web3-school-cohort-0](https://github.com/Thomas-Novato/ai-web3-school-cohort-0) |

| **Handbook 章节** | [https://aiweb3.school/zh/handbook/bridge/agent-workflow/](https://aiweb3.school/zh/handbook/bridge/agent-workflow/) |

\---

**学习时长**: ~1 小时

**完成度**: 95%

\### 一句话记忆

\> Web3 Agent 的成熟标志，不是能不能自动操作，而是能不能在每一次操作前后都证明：为什么这样做、依据是什么、风险在哪里、谁确认了、失败后如何停止。
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->











今天学习的是 **Machine Payment / 机器支付**。

如果 Agent 只能免费调用工具，它的能力很容易停在 demo 阶段。真实世界里的 Agent 要完成任务，往往需要购买外部服务：模型推理、数据 API、浏览器环境、链上交易、存储、人工审核，甚至委托另一个 Agent 执行任务。

所以问题不再只是“Agent 能不能转账”，而是：

-   谁授权 Agent 花钱？
    
-   单次最多能花多少？
    
-   总预算是多少？
    
-   可以付给哪些服务方？
    
-   报价是否可信？
    
-   服务失败后怎么退款？
    
-   付款后如何验证收据？
    
-   如何防止 Agent 被恶意上下文诱导乱花钱？
    

## 1\. 一句话理解

Machine Payment 的核心不是付款，而是把 **付款意图** 和 **实际结算** 拆开。

付款意图说明：用户允许 Agent 在什么条件下付款。  
实际结算说明：这笔钱真的付给了谁、多少钱、为什么付、是否交付成功。

只有把这两层拆开，Agent 的支付行为才可以被审计、被限制、被追责。

## 2\. 第一性原理

Agent 不应该拥有无限支付能力。

Agent 只应该拿到和当前任务相关的、有限范围内的支付权限：

-   有具体任务
    
-   有预算上限
    
-   有服务方范围
    
-   有币种限制
    
-   有有效期
    
-   有失败处理规则
    
-   有可验证收据
    

没有预算边界，就没有安全自动支付。

## 3\. 关键概念

### Stablecoin Payment

稳定币适合机器支付，因为它价格相对稳定、结算快、可编程，也容易被合约和服务方验证。

但 Agent 不能只看到“0.1”这个数字。它必须知道：

-   是 0.1 USDC，还是 0.1 USDT？
    
-   在哪条链？
    
-   token address 是什么？
    
-   decimals 是多少？
    
-   用户余额是否足够？
    
-   是否需要 approve？
    
-   gas 谁来付？
    
-   收款方是否接受这个 token？
    

尤其要注意：approve 本身是高风险动作，不能和普通付款混在一起。

### Budget

Budget 是用户授权给 Agent 的最大支出范围。

预算不应该只写在聊天记录里，而应该进入钱包策略、session key、后端账本或智能账户 policy。

一个好的预算系统至少包括：

-   全局预算
    
-   当前任务预算
    
-   单次调用上限
    
-   服务方上限
    
-   频率限制
    
-   紧急停止条件
    

错误做法是只设置总预算。这样 Agent 可能一次性把钱花在异常报价上，也可能被恶意网页诱导反复购买同一服务。

### Quote

Quote 是服务方给 Agent 的可执行报价。

一个合格的 quote 至少应该包含：

-   服务内容
    
-   价格
    
-   币种
    
-   收款地址
    
-   有效期
    
-   交付条件
    
-   退款条件
    
-   quote id
    
-   服务方签名或来源证明
    

Agent 接受 quote 前，必须检查三件事：

1.  报价是否在预算内
    
2.  服务方是否可信
    
3.  quote 是否过期
    

没有 quote id、没有签名、没有收款地址绑定的报价，后续很难审计和追责。

### Payment Intent

Payment Intent 表达的是“用户或 Agent 想为某个具体服务付款”，但它不等于已经付款。

它应该绑定：

-   用户目标
    
-   当前任务
    
-   服务方
    
-   最大金额
    
-   币种
    
-   链
    
-   quote 引用
    
-   过期时间
    
-   是否允许自动重试
    
-   是否需要人工确认
    

Payment Intent 的作用是给后续 payment、escrow 和 receipt 提供上下文。

### x402

x402 试图把 HTTP 402 Payment Required 重新变成互联网原生的支付流程。

典型流程是：

1.  Agent 请求某个 API 或资源
    
2.  服务返回 402 Payment Required
    
3.  响应里包含付款要求
    
4.  Agent 检查预算和 policy
    
5.  Agent 完成付款
    
6.  Agent 带着付款证明重新请求资源
    
7.  服务交付结果
    

它适合 API、数据、内容和 Agent service 的小额按次付费。

但 x402 不自动解决服务质量、退款、争议处理和长期订阅问题。高价值服务仍然需要 escrow、receipt 和 dispute 机制。

### MPP

MPP 可以理解成机器之间做生意的支付协议方向。

它关注的不只是转账，而是完整流程：

-   服务发现
    
-   获取报价
    
-   授权支付
    
-   结算
    
-   返回收据
    
-   失败重试
    
-   对账
    

实现上，不一定所有步骤都要上链。很多协商过程可以链下完成，链上只负责最终结算、抵押、收据锚定或争议证据。

### Subscription

Subscription 是持续服务的支付模型，比如每月 API 套餐、持续监控、长期 Agent 任务。

订阅比单次付款更需要撤销能力。用户必须能看到：

-   当前订阅是什么
    
-   下次扣款时间
    
-   剩余额度
    
-   月度最高预算
    
-   服务方是否能涨价
    
-   是否可以随时停止
    
-   失败时是否还会继续扣款
    

Agent 订阅不能依赖无限 allowance。更合理的方式是和智能账户 policy 结合：每月上限、服务方白名单、扣款窗口、异常告警。

### Micropayment

Micropayment 适合高频、小额、自动化服务。

但它最难的地方是经济账：

-   单次服务价值是多少？
    
-   链上手续费是否高于服务价格？
    
-   失败率是多少？
    
-   欺诈成本是多少？
    
-   对账成本是多少？
    

很多 AI 工具调用并不适合每次都上链结算。更合理的模式可能是：

-   预付余额
    
-   payment channel
    
-   L2 小额结算
    
-   链下账本
    
-   批量结算
    
-   定期上链对账
    

一次搜索、一次轻量推理、一次网页抓取，适合批量结算。  
一次高价值报告、审计或交易执行，更适合 escrow + 单独 receipt。

## 4\. 在 AI x Web3 中的位置

Machine Payment 是 Agentic Commerce 的基础设施。

它连接了：

-   Agent Wallet
    
-   Policy
    
-   Budget
    
-   Quote
    
-   Payment Intent
    
-   Settlement
    
-   Receipt
    
-   Dispute
    
-   Service Delivery
    

一个完整链路应该是：

用户授权预算 → Agent 获取 quote → 系统检查 policy → 付款进入 escrow 或直接结算 → 服务交付 → 生成 receipt → 记录证据 → 更新剩余预算。

## 5\. 最小实践案例

设计一个 Agent 购买 API 的支付流程：

1.  用户授权：今天最多 3 USDC
    
2.  API 返回 quote：一次调用 0.1 USDC，5 分钟内有效
    
3.  Agent 检查预算、服务方身份和 quote 是否过期
    
4.  钱包或支付工具完成付款
    
5.  API 返回结果和 receipt
    
6.  系统记录 quote、payment intent、交易哈希、结果和剩余预算
    

这个流程的重点不是“付了 0.1 USDC”，而是每一步都有证据、限制和可审计记录。

## 6\. 今日结论

Agent 的支付能力，必须从第一天就和安全边界绑定。

真正可用的 Machine Payment 系统，不是让 Agent 随便付款，而是让 Agent 在用户授权的预算、服务范围和时间窗口内，完成可验证、可追责、可撤销的付款。
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->












# AI x Web3 打卡笔记｜Chain-aware Context 链感知上下文

## 1\. 今日核心概念

**Chain-aware Context，链感知上下文**，指的是 AI 在回答、判断或执行链上动作之前，必须先看见正确的链上事实，包括：

-   当前链和 chain id
    
-   用户地址
    
-   合约地址
    
-   ABI
    
-   交易历史
    
-   Event logs
    
-   余额
    
-   allowance 授权
    
-   区块号
    
-   数据来源
    
-   数据更新时间
    
-   explorer 链接或其他 citation
    

它的核心目标是：**让 AI 不靠猜，而是基于可验证的链上事实行动。**

普通 AI 应用的上下文主要来自文档、聊天记录、数据库或网页。  
但 AI x Web3 多了一层复杂性：**链上状态会持续变化，而且很多状态直接关系到资产、授权和交易执行安全。**

如果 Agent 不知道当前网络、合约地址、ABI、用户授权、余额、交易历史和数据更新时间，它就可能给出错误建议，甚至构造危险交易。

## 2\. 第一性原理

**模型不能凭语言记忆判断链上事实。链上事实必须从工具、RPC、索引器或区块浏览器读取。**

模型知道“Uniswap 是 DEX”没有实际执行价值。  
真正执行一笔交易时，Agent 需要知道：

-   具体在哪条链
    
-   使用哪个合约
    
-   调用哪个函数
    
-   当前价格是多少
    
-   用户余额是否足够
    
-   allowance 是否足够
    
-   滑点是否合理
    
-   交易模拟是否通过
    
-   数据来自哪个区块
    
-   结果是否可以追溯验证
    

所以，链感知上下文不是“背景知识”，而是 **AI x Web3 Agent 的输入安全层**。

## 3\. 为什么 Chain-aware Context 很重要？

因为 Web3 里的错误不是简单回答错，而可能带来真实损失。

在传统应用中，AI 说错一句话，最多是信息错误。  
但在链上场景中，AI 如果拿错链、错合约、错地址、错授权状态，就可能导致：

-   用户把资产转到错误地址
    
-   调用错误合约
    
-   给恶意 spender 授权
    
-   在错误网络执行交易
    
-   基于过期价格做 swap
    
-   重复执行已经完成的操作
    
-   忽略合约升级、权限变更或风险事件
    

所以链感知上下文的价值是：  
**把链上事实变成模型可读、可引用、可验证的上下文。**

## 4\. 链感知上下文的三个原则

### 4.1 上下文要有时间性

链上状态不是静态的。

同一个地址的余额、授权、仓位、NFT 持有、借贷状态，都会随着区块变化。

所以 Agent 读取链上数据时，不能只说“当前余额是多少”，而应该记录：

-   读取时间
    
-   block number
    
-   chain id
    
-   数据来源
    
-   查询方法
    

否则模型可能会把旧数据当成当前事实。

### 4.2 上下文要有来源

每条关键结论最好能回到证据。

例如：

-   合约地址
    
-   交易哈希
    
-   区块号
    
-   event log
    
-   explorer link
    
-   文档 URL
    
-   审计报告章节
    
-   ABI 来源
    

没有 citation 的链上解释，只能算观点。  
带 citation 的解释，才有机会被验证、复盘和追责。

### 4.3 上下文要区分事实和解释

工具返回的是事实，模型负责解释。

例如：

链上事实：  
某地址在某个区块对某 spender 的 USDC allowance 是 100000000。

模型解释：  
这代表该 spender 仍有权限转走用户最多 100 USDC，需要结合 spender 身份判断风险。

事实和解释必须分开。  
否则模型可能会把自己的推测包装成链上事实。

## 5\. 关键知识节点

## 5.1 On-chain Data 链上数据

**难度：初级**

On-chain Data 是链上可以直接验证的数据，例如：

-   地址余额
    
-   交易记录
    
-   区块信息
    
-   合约状态
    
-   Event logs
    
-   Token transfers
    
-   Allowance
    
-   NFT owner
    
-   合约 storage
    

常见来源包括：

-   RPC
    
-   区块浏览器
    
-   索引器
    
-   协议 API
    

对 Agent 来说，读取链上数据时至少要带上：

-   chain id
    
-   block number
    
-   contract address
    
-   method
    
-   返回值
    
-   读取时间
    

如果缺少这些字段，模型很容易把不同链、不同时间、不同合约的数据混在一起。

## 5.2 Contract Docs 合约文档

**难度：初级**

Contract Docs 帮助模型理解合约的设计意图、参数含义、权限边界和使用方式。

ABI 只能告诉模型函数长什么样，但不能告诉模型业务语义。

例如：

```solidity
execute(bytes calldata data)
```

这个函数可能只是普通执行入口，也可能是高权限入口。  
仅靠 ABI，模型无法判断它到底安全不安全。

所以 Agent 还需要参考：

-   README
    
-   NatSpec
    
-   合约部署说明
    
-   审计报告
    
-   官方文档
    
-   协议治理说明
    

但文档也可能过期。  
所以读取文档之后，还要用链上数据验证：

-   合约地址是否匹配
    
-   版本是否匹配
    
-   proxy implementation 是否变化
    
-   owner 是否变化
    
-   最近交易是否符合文档描述
    
-   event 是否符合预期
    

## 5.3 ABI / Event

**难度：中级**

ABI 和 Event 是 Agent 理解合约能力和历史行为的核心结构。

ABI 的作用：

-   编码函数调用
    
-   解码返回值
    
-   识别函数签名
    
-   判断参数类型
    
-   解析合约可调用方法
    

Event 的作用：

-   记录链上业务行为
    
-   给索引器提供数据来源
    
-   帮助 Agent 理解历史动作
    

常见 Event 包括：

-   Transfer
    
-   Approval
    
-   Swap
    
-   Deposit
    
-   Withdraw
    
-   VoteCast
    

但要注意：  
**能调用，不等于应该调用。**

写交易前仍然需要检查：

-   权限
    
-   余额
    
-   allowance
    
-   滑点
    
-   交易模拟
    
-   合约风险
    
-   用户确认
    
-   policy 限制
    

## 5.4 Transaction History 交易历史

**难度：中级**

Transaction History 帮助 Agent 理解用户或合约过去做过什么。

它可以用于判断：

-   用户是否已经授权
    
-   某个策略是否执行过
    
-   用户是否和高风险合约交互过
    
-   某个合约最近是否升级过
    
-   某个地址是否频繁失败交易
    
-   某个 token 是否存在异常转账
    

但交易历史不能只看自然语言总结。

至少要保留：

-   transaction hash
    
-   block number
    
-   from
    
-   to
    
-   method
    
-   value
    
-   token transfers
    
-   logs
    
-   status
    

模型可以总结交易历史，但证据必须能回到链上。

## 5.5 Explorer Context 区块浏览器上下文

**难度：初级**

Explorer Context 是区块浏览器提供的可视化链上证据。

它适合帮助用户和 Agent 检查：

-   交易是否成功
    
-   合约是否验证
    
-   源码是否公开
    
-   token transfer 是否发生
    
-   event 是否发出
    
-   合约创建者是谁
    
-   合约最近是否有异常交易
    

在 AI x Web3 产品里，给出 explorer link 比只说“交易成功”更可靠。

因为用户可以自己打开链接核验，开发者也可以基于 explorer 排查问题。

## 5.6 Indexing Context 索引上下文

**难度：中级**

Indexing Context 是把链上事件整理成产品可查询的数据。

Agent 通常不只是想知道“某个区块里有什么”，而是想问：

-   用户最近 30 天有哪些 DeFi 操作？
    
-   这个池子的 TVL 如何变化？
    
-   某个 Agent 做过哪些支付？
    
-   某个地址的授权风险有哪些？
    
-   某个钱包最近和哪些协议交互？
    

这类问题直接用 RPC 查会很低效，通常需要索引层。

但索引上下文必须带：

-   同步到哪个区块
    
-   数据更新时间
    
-   数据来源
    
-   查询条件
    
-   是否存在延迟
    

一个落后 500 个区块的索引结果，不应该被 Agent 当成当前事实。

## 5.7 Citation 引用与证据

**难度：初级**

Citation 是让模型回答能回到具体链上证据或文档来源。

在链上场景中，citation 可以是：

-   交易哈希
    
-   区块号
    
-   合约地址
    
-   event log
    
-   explorer 链接
    
-   文档 URL
    
-   审计报告章节
    
-   GitHub commit
    
-   subgraph 查询结果
    

Citation 的价值是让用户和系统知道：  
**这句话是基于什么事实得出的。**

没有 citation 的链上解释，只能算模型观点。  
带 citation 的链上解释，才具备可验证性。

## 6\. Chain-aware Context 在 AI x Web3 中的位置

Chain-aware Context 是所有链上 Agent 的输入层。

如果没有这层，后面的能力都会变得不可靠：

-   Web3 Tool Use
    
-   Agent Workflow
    
-   Agent Wallet
    
-   自动交易
    
-   授权管理
    
-   风险分析
    
-   链上数据问答
    
-   DeFi 策略执行
    

一个好的链感知上下文包应该包含：

-   用户目标
    
-   当前 chain id 和网络名称
    
-   用户地址
    
-   用户余额
    
-   相关合约地址
    
-   ABI
    
-   合约文档
    
-   风险提示
    
-   最近交易
    
-   授权状态
    
-   索引数据更新时间
    
-   每条关键结论的 citation
    

## 7\. 最小实践任务

今天的练习是：  
**给一笔公开交易做一个 Chain-aware Context 包。**

步骤：

1.  找一笔公开交易哈希。
    
2.  确认它所在的 chain id 和网络名称。
    
3.  记录 block number。
    
4.  记录 from、to、method、value。
    
5.  查看 token transfers。
    
6.  查看 event logs。
    
7.  找到相关合约 ABI 或 verified source。
    
8.  写一段模型可读的上下文。
    
9.  每个关键结论附上交易哈希或 explorer 链接。
    
10.  标出哪些是链上事实，哪些是你的解释。
     

目标不是写长，而是写清楚：

-   事实是什么
    
-   来源是什么
    
-   模型解释是什么
    
-   是否存在风险或不确定性
    

## 8\. 今日自测问题与答案

### Q1：什么是 Chain-aware Context？

**A：**  
Chain-aware Context 是让 AI 在回答或执行链上动作前，先读取正确的链、地址、合约、交易、事件、余额、授权和数据来源。它的目标是让 AI 基于可验证的链上事实行动，而不是凭用户一句话或模型记忆猜测链上状态。

### Q2：为什么普通 AI 上下文不够用于 Web3 Agent？

**A：**  
因为普通 AI 上下文通常来自聊天记录、文档、网页或数据库，而 Web3 场景中的关键状态来自链上，并且会随着区块持续变化。余额、授权、仓位、合约状态、交易结果都可能变化，如果 Agent 不读取链上事实，就可能给出错误甚至危险的建议。

### Q3：链上数据读取时，至少应该保留哪些字段？

**A：**  
至少应该保留：

-   chain id
    
-   block number
    
-   contract address
    
-   method
    
-   返回值
    
-   读取时间
    
-   数据来源
    

这些字段可以避免模型混淆不同链、不同时间、不同合约的数据。

### Q4：ABI 能不能完全解释一个合约？

**A：**  
不能。ABI 只能告诉模型函数签名、参数类型和返回值结构，但不能解释业务语义、权限边界和风险。比如 `execute(bytes calldata data)` 可能是普通入口，也可能是高权限入口，所以还需要合约文档、NatSpec、README、审计报告和链上验证。

### Q5：为什么 Event 对 Agent 很重要？

**A：**  
Event 是合约向外部系统留下的业务日志。它可以帮助 Agent 理解链上发生过什么，例如转账、授权、兑换、存款、投票等行为。索引器通常也是通过 Event 把链上数据整理成产品可查询的数据。

### Q6：Transaction History 可以帮助 Agent 判断什么？

**A：**  
它可以帮助判断用户是否授权过、策略是否执行过、地址是否交互过高风险合约、合约是否最近升级过、交易是否成功、token transfer 是否发生等。但交易历史不能只保留自然语言总结，还要保留交易哈希、区块号、from、to、method、value、logs 等证据。

### Q7：Explorer Context 的价值是什么？

**A：**  
Explorer Context 给用户和开发者提供可检查入口。相比只说“交易成功”，给出 explorer link 更可靠，因为用户可以自己核验交易状态、合约源码、事件、token transfer 和调用细节。

### Q8：Indexing Context 为什么要带同步状态？

**A：**  
因为索引器可能滞后。如果一个索引结果落后 500 个区块，它就不能被当成当前事实。Agent 使用索引数据时，必须知道数据同步到哪个区块、更新时间和来源，否则可能基于过期数据做决策。

### Q9：什么是 Citation？为什么链上场景特别需要它？

**A：**  
Citation 是让模型回答可以回到具体证据的引用。在链上场景中，citation 可以是交易哈希、区块号、合约地址、event log、explorer 链接或文档 URL。它让用户知道模型的结论基于什么事实，也方便验证和追责。

### Q10：Chain-aware Context 和 Agent Wallet 有什么关系？

**A：**  
Agent Wallet 涉及真实资产和权限。如果没有 Chain-aware Context，Agent 可能不知道当前链、余额、allowance、目标合约和风险状态，就可能生成错误交易。Chain-aware Context 是 Agent Wallet 安全执行的前置条件。

## 9\. 今日打卡总结

Chain-aware Context 的本质是：  
**把链上事实结构化地交给 AI，让 AI 的链上判断有来源、有时间、有证据、可验证。**

AI x Web3 不是让模型“记住链上世界”，而是让模型通过工具读取链上世界。

一个可靠的链上 Agent 不应该说：

> 我觉得这个地址安全。

而应该说：

> 根据某条链、某个区块、某个合约、某笔交易和某个 explorer 证据，我判断这个地址当前存在或不存在某类风险。

这就是 Chain-aware Context 的意义。

## 10\. 一句话记忆

**链感知上下文 = 链、地址、合约、交易、授权、余额、事件、索引状态和引用证据的结构化集合，是 Web3 Agent 安全行动前必须读取的事实层。**
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->













今日打卡｜从 Agent Wallet 到 Approval Tracker：把“可控授权”做成一个 MVP  
今天不只是学习了 Agent Wallet 的概念，还顺手 vibe 了一个可以落地展示的项目：**Approval Tracker**。  
前面理解 Agent Wallet 时，我记住了一个核心判断：  
**AI 可以执行任务，但不能无边界地控制资产。**  
真正靠谱的 AI x Web3 产品，不是让 Agent 直接拿走用户的钱包权限，而是让它只能在用户预先允许的范围内行动：能做什么、能花多少、能调用谁、什么时候失效、怎么撤销，都必须被明确写成规则。  
但顺着这个问题继续想，会发现一个更基础的现实问题：  
很多用户其实根本不知道自己曾经给哪些合约授权过，也不知道哪些授权现在仍然有效。  
这就是我这次做 **Approval Tracker** 的原因。  
它不是一个“帮用户自动撤销授权”的完整钱包产品，而是一个更适合黑客松 MVP 的安全扫描工具：  
**先帮用户看清楚：我给过谁授权？现在还有多少 allowance？风险大不大？交易记录在哪里？**  
项目目标  
我计划在本地新建一个 Python MVP 项目：  
`E:\歪脖3\AIWEB3\Hackthon\approval-tracker`  
项目名称是：  
**Approval Tracker**  
它的目标是做一个共享扫描核心，同时提供两种入口：  
CLI 命令行工具  
Telegram Bot  
用户可以输入一个 EVM 地址，系统扫描 Ethereum 主网和 Sepolia 上的 ERC-20 Approval 记录，读取当前 allowance，并生成一份中文风险报告。  
报告里会包含：  
链名  
Token 信息  
Spender 地址  
当前授权额度  
合约是否验证  
是否是常见协议  
风险等级  
对应交易哈希链接  
这个 MVP 的定位很清楚：  
**不碰私钥，不请求签名，不提交交易，只做可验证数据扫描和风险解释。**  
为什么这个项目和 Agent Wallet 有关系？  
Agent Wallet 讨论的是：Agent 怎么在受限权限内安全执行任务。  
Approval Tracker 解决的是更前置的问题：  
**用户到底已经给出过哪些权限？这些权限现在是否还存在风险？**  
如果用户看不见自己的授权状态，后面谈 Session Key、Policy、Guard、Revocation 都会变得很抽象。  
所以 Approval Tracker 可以理解成 Agent Wallet 安全链路里的一个基础模块：  
Agent Wallet 关注如何授权  
Approval Tracker 关注已有授权是否安全  
Policy 负责定义边界  
Guard 负责执行前拦截  
Revocation 负责权限收回  
从产品角度看，它可以作为 Agent Wallet 的一个安全面板原型：先扫描，再解释，再提醒用户哪些授权值得关注。  
MVP 的关键修正  
这次计划里最重要的地方，是没有直接照着旧思路用所谓的 `tokenapproval` 接口，而是改成更可靠的做法：  
通过 Etherscan V2 的 `logs.getLogs` 查询 ERC-20 的 `Approval(address,address,uint256)` 事件日志。  
然后再用 `eth_call` 调用 ERC-20 合约的 `allowance(owner, spender)`，读取当前真实有效的授权额度。  
这样做的好处是：  
历史上出现过 Approval 事件，不代表现在仍然有授权。  
用户可能后来已经撤销了授权，也可能额度已经被消费或改写。所以只看历史 logs 是不够的，必须再查当前 allowance。  
这个设计能避免把已经失效的历史授权误报成当前风险。  
核心数据流  
整个扫描流程可以拆成几步：  
第一步，校验用户输入的 EVM 地址。  
第二步，分别扫描 Ethereum 主网和 Sepolia。  
第三步，通过 Approval 事件 topic 查询 owner 相关的授权日志。  
其中：  
`topic0` 是 Approval 事件签名  
`topic1` 是 owner 地址  
第四步，从 log 里解析出：  
token 合约地址  
spender 地址  
approval amount  
transaction hash  
block number  
timestamp  
第五步，对每组 token + owner + spender 调用 `allowance()`，读取当前授权额度。  
第六步，过滤掉当前 allowance 为 0 的历史授权，只保留仍然有效的授权。  
第七步，读取 ERC-20 的 `symbol`、`name`、`decimals`，如果读取失败，就降级显示 token 地址。  
第八步，调用 Etherscan `getsourcecode(spender)`，判断 spender 合约是否 verified，并读取 contract name。  
第九步，用本地标签库识别常见协议，比如 Uniswap、Aave、OpenSea、1inch 等。  
第十步，根据规则生成风险等级和中文报告。  
风险评级规则  
MVP 里的风险评级不追求复杂 AI 判断，而是先用清晰可解释的规则。  
我设定了四类风险：  
**critical：严重风险**  
例如：  
spender 合约未验证  
当前 allowance 是无限额度  
这种情况说明用户给了一个源码不可见的合约长期大额权限，需要重点提示。  
**high：高风险**  
例如：  
spender 是未知地址  
当前 allowance 是无限额度  
即使合约已验证，只要不是常见协议，又拿到了无限授权，也值得警惕。  
**medium：中风险**  
例如：  
spender 是 Uniswap、Aave、1inch 等已知协议  
但 allowance 是无限额度  
已知协议不代表没有风险，因为无限授权本身仍然扩大了攻击面。  
**low：低风险**  
例如：  
授权额度有限  
spender 信息相对明确  
没有明显异常因素  
这个规则的好处是简单、透明、适合 demo 展示。  
最重要的是：系统不会把“未验证合约”直接判定为恶意，而是把它作为风险因子之一。这样更严谨，也避免过度恐吓用户。  
CLI 和 Telegram Bot  
MVP 会提供两个入口。  
CLI 适合开发者和黑客松现场演示：  

```
approval-tracker scan 0x... --chains ethereum,sepolia --format table
```

  
也可以输出 JSON：  

```
approval-tracker scan 0x... --format json
```

  
Telegram Bot 适合展示更接近普通用户的交互方式：  

```
/scan 0x地址
```

  
Bot 返回中文摘要和风险项，让用户快速知道当前地址是否存在危险授权。  
这个设计的好处是：  
同一个扫描核心可以复用，CLI 和 Bot 只是不同入口。  
这样项目不会变成两个半成品，而是一个核心能力，两种展示方式。  
工程结构  
项目会包含这些基础文件：  

```
approval-tracker/
├── pyproject.toml
├── README.md
├── .env.example
├── src/
│   └── approval_tracker/
├── tests/
```

  
环境变量包括：  

```
ETHERSCAN_API_KEY=
TELEGRAM_BOT_TOKEN=
OPENAI_API_KEY=
OPENAI_BASE_URL=
```

  
其中：  
`ETHERSCAN_API_KEY` 是必需的  
`TELEGRAM_BOT_TOKEN` 只有启动 Bot 时必需  
`OPENAI_API_KEY` 或 `OPENAI_BASE_URL` 是可选的  
如果没有 LLM key，系统仍然要能用规则模板生成中文报告，保证 demo 不会因为模型接口缺失而跑不起来。  
LLM 在这里的角色也被限制住：  
**LLM 只能改写解释，不能新增事实。**  
所有事实必须来自 Etherscan API、链上调用结果或本地标签库。  
安全边界  
这个 MVP 的安全边界必须非常明确。  
它不会做这些事：  
不请求私钥  
不请求助记词  
不要求用户签名  
不提交链上交易  
不自动 revoke  
不实时监控  
不做定期报告  
不支持 NFT `setApprovalForAll`  
不支持 EIP-2612 Permit  
这些功能不是不重要，而是不适合塞进 MVP。  
黑客松项目最怕做成“看起来很完整，但每一块都不稳”。  
所以这次的边界是：  
**只做 ERC-20 Approval 扫描、当前 allowance 校验、风险评级和中文报告。**  
先把一个小闭环跑通，比堆一堆半成品功能更重要。  
测试计划  
测试会分成三类。  
第一类是单元测试：  
EVM 地址校验  
Approval topic 编码  
Approval log 解码  
`allowance()` calldata 编码  
返回值解析  
无限额度识别  
金额格式化  
风险评级规则  
Etherscan 错误处理  
空结果处理  
限速和分页逻辑  
第二类是集成测试：  
使用 fixture 模拟 Ethereum 和 Sepolia API 响应  
跑通从 scan 到报告生成的完整流程  
验证 CLI JSON 输出可以被解析  
验证 table 输出包含链名、token、spender、风险和 tx 链接  
用 mock bot 验证 `/scan` 能返回摘要和风险项  
第三类是手动验收：  
配置 `ETHERSCAN_API_KEY` 后扫描一个真实地址  
配置 `TELEGRAM_BOT_TOKEN` 后启动 Bot  
在 Telegram 中发送 `/scan 0x...`  
能收到中文风险报告  
无 LLM key 时仍然可以生成规则报告  
无 API key 时 README 有明确报错说明  
黑客松展示思路  
这个项目的 demo 可以这样讲：  
第一步，展示一个普通用户地址。  
第二步，用 CLI 扫描：  

```
approval-tracker scan 0x... --chains ethereum,sepolia --format table
```

  
第三步，展示系统发现的仍然有效的 ERC-20 授权。  
第四步，重点展示风险评级：  
哪些是无限授权  
哪些 spender 是未知地址  
哪些合约未验证  
哪些是已知协议但仍然存在中风险  
第五步，切到 Telegram Bot：  

```
/scan 0x...
```

  
第六步，Bot 返回中文摘要，说明这个工具不只是开发者能用，普通用户也可以理解。  
最后强调安全边界：  
**Approval Tracker 不替用户签名，不替用户交易，只帮助用户看清楚已有权限。**  
这和 Agent Wallet 的理念是一致的：  
让自动化更有用，但不能让权限失控。  
今天的收获  
今天最大的收获是，把 Agent Wallet 从一个抽象概念，往真实产品形态推进了一步。  
Agent Wallet 讲的是：  
**Agent 能不能在有限权限内安全行动。**  
Approval Tracker 做的是：  
**用户能不能先看清楚自己已经给出去的权限。**  
这两个问题连在一起，就是 AI x Web3 安全体验的关键。  
真正有价值的 Web3 Agent，不应该只是帮用户“生成交易”，而应该帮助用户理解：  
我授权了什么  
谁还能花我的 token  
当前风险在哪里  
哪些操作应该自动执行  
哪些操作必须人工确认  
哪些权限应该及时撤销  
所以这个 MVP 虽然小，但方向是对的。  
它不是在做一个复杂钱包，而是在做一个更基础的安全入口：  
**把链上授权从不可见、难理解、难判断，变成可扫描、可解释、可追踪。**  
这也是我今天对 Agent Wallet 更具体的理解：  
**不是让 AI 帮用户接管钱包，而是让用户重新看见并控制自己的权限。**
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->














Web3 密码学基础笔记  
一、核心理解  
很多 Web3 新手容易把钱包理解成传统互联网账号，把签名理解成登录确认，把地址理解成用户名。但这种理解是不安全的。  
在 Web3 中，账户不是平台发给你的，而是由你是否能证明自己控制某个私钥决定的。  
因此，密码学不是抽象理论，而是 Web3 产品和安全边界的基础。  
简单来说：  
**私钥代表控制权**  
**公钥和地址用于验证身份**  
**签名代表授权**  
**哈希用于验证数据是否被改动**  
**Merkle Tree 用于高效证明某条数据属于一批数据**  
学习这部分的目的，不是手推复杂公式，而是在看到钱包弹窗、签名请求、交易哈希、Merkle proof 或合约验证时，知道它们到底在证明什么，以及什么时候不能随便点击确认。  
二、第一性原理  
链上身份的本质不是“注册账号”，而是“证明控制权”。  
在传统互联网中，平台通过数据库记录用户是谁，用户可以通过密码、手机号、邮箱找回账号。  
但在 Web3 中，账户控制权由私钥决定。谁能用私钥生成有效签名，谁就能控制对应地址上的资产和权限。  
这带来了两个结果：  
一方面，Web3 账户开放、可组合、不依赖平台许可。  
另一方面，用户必须承担更高的密钥管理和签名风险。  
三、关键知识点  
1\. Hash：哈希  
**难度：初级**  
Hash 是把任意数据转换成固定长度“指纹”的方法。  
只要输入数据发生一点变化，输出的哈希结果通常就会完全不同。因此，哈希常用于验证数据是否一致、是否被篡改。  
需要注意的是，哈希不是加密。  
加密通常可以解密，而哈希一般不能从结果反推出原文。  
常见用途  
交易哈希：定位一笔交易  
区块哈希：定位一个区块  
合约字节码哈希：检查部署代码是否一致  
数据承诺：先公布哈希，之后公开原文供别人验证  
问题与简答  
**问题 1：Hash 是加密吗？**  
简答：不是。Hash 主要用于生成数据指纹，验证数据是否一致，通常不能被解密回原文。  
**问题 2：交易哈希有什么用？**  
简答：交易哈希可以用来在区块浏览器中定位和查询一笔交易。  
**问题 3：为什么输入只改一个字符，哈希结果也会变很多？**  
简答：这是哈希函数的特性，目的是让数据变化能够被明显发现。  
2\. Public Key：公钥  
**难度：初级**  
Public Key 是和私钥成对出现的公开信息。  
别人可以用公钥验证某个签名是否来自对应私钥，但不能从公钥反推出私钥。  
在以太坊中，用户更常看到的是地址，而不是完整公钥。地址可以理解成由公钥进一步处理得到的短标识。  
公钥和地址可以公开，但私钥绝不能公开。  
问题与简答  
**问题 1：公钥可以公开吗？**  
简答：可以。公钥的作用是让别人验证签名，不会直接暴露私钥。  
**问题 2：地址等于用户名吗？**  
简答：不完全等于。地址更像是一个可验证控制关系的标识，而不是平台账号名。  
**问题 3：看到一个地址像官方地址，就可以相信吗？**  
简答：不可以。地址必须来自可信来源，并与官网、文档或区块浏览器验证信息一致。  
3\. Private Key：私钥  
**难度：初级**  
Private Key 是账户控制权本身。  
谁拥有私钥，谁就能对对应地址生成签名，从而控制资产和权限。  
如果私钥丢失，通常意味着失去账户控制权；如果私钥泄漏，攻击者可能直接转走资产或授权恶意合约。  
钱包、助记词、硬件钱包、多签和账户抽象，本质上都是为了解决“如何更安全地管理私钥”这个问题。  
私钥管理基本规则  
不截图  
不上传云盘  
不粘贴给网页  
不发给 AI 工具或客服  
不放进代码仓库  
不用主钱包测试陌生 dApp  
问题与简答  
**问题 1：私钥为什么这么重要？**  
简答：因为私钥代表账户控制权，谁掌握私钥，谁就能控制对应资产和权限。  
**问题 2：私钥泄漏后还能像密码一样重置吗？**  
简答：通常不能。Web3 没有传统互联网那种统一的密码找回机制。  
**问题 3：为什么不能把助记词发给客服或 AI？**  
简答：因为助记词可以恢复钱包，本质上等同于私钥控制权，泄漏后资产可能被盗。  
4\. Signature：签名  
**难度：中级**  
签名不是简单的“登录确认”，而是对某段具体消息或交易内容的授权证明。  
用户用私钥对消息或交易签名，验证者可以用公钥或地址判断签名是否有效。  
如果签名有效，就说明这段授权确实来自对应账户。  
签名最大的风险是：用户看不懂自己签了什么。  
因此，一个好的钱包或 dApp 应该尽量展示清楚：  
签名目的  
域名  
链 ID  
合约地址  
授权额度  
过期时间  
潜在风险  
尤其在 AI Agent 场景中，签名更需要明确权限边界，不能让模型随意触发高风险授权。  
问题与简答  
**问题 1：签名等于登录吗？**  
简答：不等于。签名是对具体消息或交易内容的授权证明，不只是登录确认。  
**问题 2：为什么不能随便点钱包里的“确认”？**  
简答：因为确认可能意味着授权资产转移、批准合约额度或执行链上操作。  
**问题 3：一个安全的签名请求应该展示哪些信息？**  
简答：应该展示签名目的、链 ID、合约地址、授权额度、过期时间和风险提示等。  
**问题 4：签名消息和发送交易有什么区别？**  
简答：签名消息通常不直接上链，主要用于证明身份或授权；发送交易会提交到链上，可能改变状态并消耗 Gas。  
5\. Merkle Tree：默克尔树  
**难度：中级**  
Merkle Tree 是一种用哈希组织大量数据的结构。  
它会把很多数据逐层哈希，最终得到一个 Merkle Root。  
只要这个 Root 是可信的，用户就可以用 Merkle Proof 证明自己的数据属于这批数据，而不需要下载全部数据。  
常见用途  
空投名单验证  
轻客户端  
状态证明  
可验证数据结构  
问题与简答  
**问题 1：Merkle Tree 解决了什么问题？**  
简答：它让用户可以用少量证明验证某条数据属于一大批数据，而不用下载全部数据。  
**问题 2：Merkle Root 有什么作用？**  
简答：Merkle Root 是整批数据的最终哈希承诺，只要 Root 可信，就可以验证其中某条数据是否属于整体。  
**问题 3：空投为什么常用 Merkle Tree？**  
简答：因为项目方可以只在链上记录一个 Root，用户通过 Proof 证明自己在名单中，从而节省存储和验证成本。  
四、AI x Web3 中的意义  
在 AI x Web3 场景中，AI Agent 如果要帮助用户解释交易、判断授权、生成链上操作或管理权限，就必须理解密码学边界。  
AI 可以帮助用户解释：  
这笔交易在做什么  
这个签名请求是否可疑  
授权额度是否过大  
合约地址是否需要核对  
交易哈希如何查询  
但 AI 不应该：  
保管用户私钥  
要求用户提供助记词  
在用户看不懂内容时推动签名  
自动执行高风险授权  
进一步来说，AI 的输出也可能需要被哈希、签名或记录，用于之后审计。  
例如：某个 Agent 在什么输入下给了什么建议，用户是否确认，最终执行结果是否一致。  
五、最小实践  
可以做一个安全的签名观察练习：  
创建一个测试钱包，不放真实资产。  
在测试环境中发起一次普通转账或消息签名。  
在钱包界面或区块浏览器中观察地址、交易哈希、签名提示和链 ID。  
记录哪些信息可以公开，哪些信息绝不能公开。  
对比“签名消息”和“发送交易”的区别。  
注意：  
不要使用主钱包练习。  
不要把助记词或私钥粘贴到网页、聊天工具、AI 工具或代码仓库中。  
六、重点总结  
Web3 密码学基础可以用一句话概括：  
**私钥决定控制权，签名表达授权，哈希验证数据，Merkle Tree 高效证明数据归属。**  
对于新手来说，最重要的不是掌握复杂数学公式，而是建立安全直觉：  
看到钱包弹窗时，要先问自己：  
我在签什么？  
这个签名会不会授权资产？  
合约地址可信吗？  
授权额度是否过大？  
这是不是我的主钱包？  
我是否真的理解这次确认的后果？  
只有理解这些问题，才不会把 Web3 钱包误当成普通互联网登录账号。
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->















# Web3 Network 打卡笔记

今天学习的主题是 **Network：区块链网络层**。

很多 Web3 问题表面看起来像是前端、钱包或合约问题，但底层往往是网络问题。比如用户切错链、RPC 延迟、交易一直 pending、测试网资产不足、L2 提现等待、区块浏览器和前端状态不一致等，本质上都和网络层有关。

## 一、为什么要理解 Network？

理解 Network，是为了知道一笔交易从用户点击确认开始，到最终在前端和区块浏览器里显示成功，中间到底经历了什么。

一笔链上交易大致会经过：

**钱包签名 → RPC 提交 → 节点传播 → mempool 等待 → 区块打包 → 共识确认 → 状态执行 → confirmation → 索引服务更新 → 区块浏览器/前端展示**

所以，链上应用不是像传统应用那样直接写数据库，而是在一个公开、按区块推进、由网络共识维护的状态机上提交请求。

* * *

## 二、第一性原理

区块链网络的核心不是“存数据”，而是：

**让互不信任的参与者，对状态变化达成一致。**

普通 Web2 应用中，服务器可以直接更新数据库；但在 Web3 中，交易需要被节点传播、执行、打包、验证和确认。

这带来了三个重要特征：

1.  **公开可验证**  
    任何人都可以查看交易、区块和状态变化。
    
2.  **存在延迟和费用**  
    交易不是即时完成的，需要等待打包和确认，同时需要支付 gas。
    
3.  **存在最终性问题**  
    前端不能过早假设交易已经绝对成功，因为可能存在短暂重组、RPC 延迟或索引滞后。
    

* * *

## 三、核心知识点

### 1\. Block：区块

区块是交易被批量提交和排序的单位。

一个区块通常包括：

-   交易列表
    
-   前一个区块的引用
    
-   状态根
    
-   时间戳
    
-   gas 使用情况
    
-   共识相关信息
    

理解区块时，重点不是死记字段，而是理解三件事：

第一，**交易是有顺序的**，顺序会影响执行结果。  
第二，**区块有 gas limit**，所以网络吞吐不是无限的。  
第三，**新区块会引用前一区块**，形成一条可验证的历史链。

* * *

### 2\. Consensus：共识

共识决定的是：

**哪一段链上历史是有效的。**

不同节点可能会在不同时间收到交易和区块，共识机制让它们在没有中心数据库的情况下，对区块顺序和状态变化形成一致看法。

对开发者来说，共识会影响：

-   交易需要等几个 confirmation 才算安全
    
-   区块可能发生短暂重组
    
-   RPC 或节点异常时，前端读取状态可能延迟
    
-   不能只根据一次返回结果就认定交易最终成功
    

* * *

### 3\. PoS：权益证明

以太坊现在使用的是 **Proof of Stake**。

PoS 通过验证者质押 ETH、参与区块提议和证明来维护网络安全。如果验证者作恶或行为异常，可能会受到惩罚，也就是 slashing。

这说明区块链网络安全不是免费的，而是来自：

-   经济质押
    
-   验证者参与
    
-   客户端实现
    
-   网络规则约束
    

所以在理解以太坊网络时，经常会遇到验证者、最终性、质押、slashing、区块时间等概念。

* * *

### 4\. Testnet：测试网

测试网用于在接近真实链的环境中测试合约、前端和交易流程。

测试网可以帮助验证：

-   合约部署流程
    
-   钱包连接
    
-   RPC 配置
    
-   合约调用
    
-   区块浏览器验证
    
-   前端网络切换
    
-   测试交易状态处理
    

但测试网不能替代主网安全审查。

原因是测试网的资产没有真实价值，攻击动机、流动性、MEV 环境、用户行为和资产规模都和主网不同。

做项目时至少要记录：

-   部署在哪条测试网
    
-   合约地址
    
-   部署交易哈希
    
-   使用的 RPC
    
-   chain id
    
-   测试资产来源
    
-   前端如何切换网络
    

* * *

### 5\. L2：二层网络

L2 是在主网安全和更低成本之间做扩展的网络层。

它通常把大量交易放到主网之外执行，再把结果或证明提交回 L1。

对用户来说，L2 的优势通常是：

-   gas 更低
    
-   确认更快
    
-   交互体验更好
    

但 L2 也会带来新的复杂性：

-   跨链桥
    
-   提现等待
    
-   排序器
    
-   不同链上的资产状态
    
-   不同合约地址
    
-   不同区块浏览器
    
-   跨链状态同步
    

所以产品不能只写“支持 Ethereum”，而要明确告诉用户当前在哪条链、资产在哪条链、合约地址对应哪条网络、桥接和提现大概需要多久。

* * *

### 6\. Rollup：主流 L2 扩展方案

Rollup 是目前主流的 L2 扩展路线。

它的核心思路是：

**把执行放到 L2，把数据或证明提交到 L1。**

常见类型包括：

-   Optimistic Rollup
    
-   ZK Rollup
    

它们在证明方式、提现延迟、数据可用性、开发体验和生态工具上都有区别。

对 builder 来说，需要记住一点：

**Rollup 降低了单笔交易成本，但没有消除链上系统复杂度。**

依然要处理 RPC、跨链资产、浏览器、合约地址、桥接风险、用户确认和网络切换问题。

* * *

## 四、AI x Web3 中的 Network 价值

如果 AI Agent 要读取链上状态或执行交易，必须明确知道自己在哪条网络上操作。

不能靠模型猜：

-   是主网还是测试网
    
-   是 L1 还是 L2
    
-   chain id 是多少
    
-   合约地址是哪条链上的
    
-   当前区块高度是多少
    
-   交易确认数是多少
    
-   explorer 链接对应哪条网络
    

更稳妥的做法是让工具返回结构化信息，例如：

-   chain id
    
-   RPC 来源
    
-   block number
    
-   transaction hash
    
-   confirmation 数
    
-   from / to
    
-   gas used
    
-   logs
    
-   explorer 链接
    

AI Agent 可以负责解释和总结，但关键链上状态必须来自工具读取，而不是模型自己生成。

* * *

## 五、最小实践任务

今天的最小实践是：**追踪一笔测试网交易。**

实践步骤：

1.  在测试网领取少量测试 ETH。
    
2.  使用测试钱包发送一笔转账，或调用一个简单合约。
    
3.  在区块浏览器中查看交易状态。
    
4.  记录交易的 pending 时间和 confirmed 时间。
    
5.  查看交易所在区块号、gas used、from、to、logs。
    
6.  切换到另一条网络，观察同一个地址的余额和交易历史是否不同。
    
7.  思考如果由 AI Agent 辅助完成，哪些字段必须由工具读取，哪些内容可以由模型生成。
    

* * *

## 六、今日总结

今天最大的收获是：  
**Web3 应用不是直接操作数据库，而是在区块链网络这个公开状态机上提交交易请求。**

Network 决定了交易的传播、打包、确认、最终性和展示方式。很多前端问题、钱包问题、交易状态问题，本质上都要回到网络层理解。

以后在开发 Web3 应用或设计 AI Agent 时，不能只关注“交易是否成功”，还要关注：

-   当前网络是否正确
    
-   RPC 是否稳定
    
-   交易是否 pending
    
-   区块是否已确认
    
-   前端状态和浏览器状态是否一致
    
-   L1/L2/测试网/主网之间是否混淆
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->
















今天学习了 MCP（Model Context Protocol）的基本概念。MCP 是一套让 AI 与外部工具、资源和系统进行标准化连接的协议。其核心架构包括 Model、MCP Client 和 MCP Server，其中 Client 负责能力发现和工具调用，Server 负责暴露资源和工具能力。

学习过程中认识到，MCP 的重点不是连接能力本身，而是能力边界管理。Server 需要明确暴露哪些资源、哪些工具具有副作用、参数 Schema 如何设计以及权限如何控制。Tool Schema 决定模型是否能够正确调用工具，而 Permission 则决定模型能调用到什么程度。

在 AI × Web3 场景中，MCP 可以作为 Agent 与链上工具之间的接口层，例如读取区块链数据、查询合约信息、生成交易草稿等。但 MCP 本身不是安全方案，最终权限控制仍然依赖钱包授权、交易模拟、用户签名和审计系统。

通过最小实践案例，我理解了一个安全的 MCP Server 应优先从只读能力开始设计，并逐步增加权限控制、用户确认和审计机制，而不是直接开放高风险写入能力。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->

















**AI Agent × On-chain 的"觉醒"**  
\- AI 不再只是写代码的工具  
\- 可以自主在 Mantle 上交易、管理资产、执行策略  
\- 传统金融视角：「以后我的钱包里住着一个小 AI，它比我还懂交易」

2\. **生态观察**  
\- 现场聚集了 AI Builder、Web3 开发者、Agent 创业者  
\- 自主 Agent 赛道正在从概念走向落地  
\- 结识了河海大学的一位 AI 研究者（中文溜得飞起 😄）

3\. **与课程交叉印证**  
\- Mantle (L2) ↔️ 模块化区块链章节  
\- On-chain Agent ↔️ Agent 自主执行 / 机器支付  
\- Builder 生态 ↔️ 去中心化 AI 从理论走向实践

**个人感悟**

雨下得挺大，但挡不住 Builder 们的热情。窗外雨丝拉成线，屋里热火朝天——这就是 Web3 × AI 社区的真实状态。🌧️
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->



















今天非常充实且兴奋，我参加了 Bittensor Ideathon，全程深度体验了一次高质量的黑客松/创想马拉松。上午：系统性学习  
上午主要听取了 Bittensor 子网（Subnet）结构的详细介绍。讲者把 Bittensor 的核心架构讲得非常清晰，从激励机制（Yuma Consensus）、子网注册、验证者与矿工的角色分工，到不同子网如何通过竞争获取 TAO 排放，一整个生态的逻辑被完整串联起来。我第一次这么系统地理解了 Bittensor “去中心化机器学习市场”的设计哲学，收获很大，也对目前哪些子网在做什么有了更直观的认识。下午：高强度脑暴与产出  
下午进入自由组队脑暴环节，大家围绕 Bittensor 子网的实际应用场景和创新方向进行了密集讨论。我们组从问题定义到方案设计，再到技术可行性与商业价值评估，一路推进得很快。最后我代表团队进行了汇报（Pitch），把我们的 idea 完整呈现了出来。虽然时间紧张，但整个过程非常过瘾，真正感受到了黑客松那种高专注、高协作、高反馈的独特氛围。核心体会：Bittensor 的子网机制确实为 AI 开发者提供了一个极具想象力的开放市场，激励与竞争并存的设计非常巧妙。  
线下/半线下 Ideathon 的效率和碰撞感是线上活动完全无法替代的，短短一天就能和不同背景的人快速产出有意思的方向。  
自己的表达能力和结构化思考在高压汇报环境下又得到了一次锻炼。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->






















主要学习了MCP的相关内容，下午还在看师姐的毕业答辩，有点过于繁忙了悲

一、核心理解

MCP 解决的是：模型如何标准化连接外部工具、数据源和应用上下文。

Eval 解决的是：如何持续判断 AI 系统是否可靠、是否退化、是否适合上线。

简单来说：

\- MCP 关注“怎么接工具”

\- Eval 关注“接上以后是否可靠”

\- 在 AI x Web3 场景中，二者都服务于安全、可控、可验证的 Agent 系统

二、MCP：模型连接外部能力的协议层

MCP，Model Context Protocol，是一种让模型连接外部工具和上下文的标准协议。

它的重点不是让模型更聪明，而是让模型使用外部能力的方式变得：

\- 可描述

\- 可发现

\- 可限制

\- 可复用

\- 可审计

MCP 可以理解为 AI 应用时代的“工具接口标准”。

MCP 的第一性原理

模型不应该直接拥有世界，而应该通过明确协议访问被授权的上下文和工具。

也就是说，模型不能随意读文件、调 API、改数据，而是必须通过被定义好的工具、权限和边界来行动。

\-–

三、MCP 的关键知识节点

1\. Server

MCP Server 是提供能力的一侧。

它可以暴露：

\- resources：文件、文档、数据库记录等资源

\- tools：搜索、查询、调用 API、创建任务等工具

\- prompts：可复用的提示词或工作流模板

Server 的重点是边界设计：

\- 暴露哪些资源

\- 哪些工具只读

\- 哪些工具有副作用

\- 参数 schema 是否清楚

\- 错误如何返回

\- 是否需要用户授权

\- 是否记录日志和审计

2\. Client

MCP Client 是连接模型和 server 的一侧，比如 IDE、桌面应用、Agent runtime 或聊天客户端。

Client 负责：

\- 发现 server 能力

\- 把工具信息交给模型

\- 执行模型发起的工具调用

\- 展示调用过程

\- 处理权限确认和会话隔离

判断一个 client 是否可靠，重点看用户是否知道模型能访问什么、能调用什么、哪些动作需要确认。

3\. Tool Schema

Tool Schema 描述工具的名字、用途、参数、返回值和约束。

好的 schema 应该说明：

\- 工具什么时候用

\- 参数代表什么

\- 哪些字段必填

\- 是否会修改外部状态

\- 失败时返回什么

schema 写得越模糊，模型越容易误调用。

4\. Permission

MCP 让工具连接更方便，但方便不等于安全。

权限至少要区分：

\- 只读还是写入

\- 当前会话授权还是长期授权

\- 是否需要用户确认

\- 是否能访问敏感信息

\- 是否有外部副作用

\- 是否可撤销和审计

MCP 能描述能力，但真正的安全、授权、审计和隔离仍然要由系统实现。

\-–

四、Eval：持续判断 AI 系统是否可靠

Eval 是对 AI 系统进行系统化测试和评分的机制。

它的作用是让团队能够持续比较：

\- 不同 prompt 的效果

\- 不同模型的效果

\- 不同检索策略的效果

\- 不同工具调用策略的效果

\- 系统是否出现 regression

没有 eval，AI 应用的改动就很容易变成“凭感觉优化”。

\-–

五、Eval 的关键知识节点

1\. Harness

Harness 是运行 eval 的框架。

它负责：

\- 喂样本

\- 调用系统

\- 收集输出

\- 运行 grader

\- 记录结果

\- 生成报告

它的核心价值是可重复。只有 eval 可以重复运行，才能比较不同版本的真实差异。

2\. Golden Set

Golden Set 是一组高质量测试样本。

早期不需要很大，30 到 100 条高质量样本就很有价值。

应该包含：

\- 常见问题

\- 边界问题

\- 容易误判的问题

\- 高风险问题

\- 历史 bug

\- 用户真实反馈

每修一个重要 bug，都应该考虑加入 regression set。

3\. LLM-as-Judge

LLM-as-Judge 是用模型给模型输出评分。

适合评估：

\- 摘要质量

\- 回答完整性

\- 格式遵循

\- 是否引用来源

\- 风险提示是否充分

但 Judge 模型也会出错，所以不能把它当成最终真相。更稳的做法是：规则评分、LLM judge、人工抽检结合使用。

4\. Regression

Regression 是为了防止旧问题复发。

AI 系统很容易出现“修 A 坏 B”。一次 prompt 修改、模型升级或检索策略调整，都可能影响旧场景。

实用流程：

1\. 记录用户反馈的问题。

2\. 复现输入。

3\. 标注期望输出或拒答条件。

4\. 加入 regression set。

5\. 每次发布前重新运行。

5\. Observability

Observability 是线上观察系统行为的能力。

至少要记录：

\- 输入类型和来源

\- 检索结果

\- 工具调用

\- 模型输出

\- 错误和重试

\- 用户反馈

\- 成本和延迟

没有 observability，就不知道真实用户在哪里失败，也不知道该往 golden set 里补什么样本。

\-–

六、在 AI x Web3 中的位置

在 AI x Web3 系统中，MCP 和 Eval 都很重要，因为错误可能影响资产、权限、治理判断和链上执行。

MCP 可以帮助 Agent 连接：

\- 区块浏览器

\- 合约文档

\- RPC 节点

\- 项目 issue

\- 治理提案

\- 交易解释工具

但 MCP 不是钱包安全方案，不能替代签名确认、交易模拟、账户权限、session key 和审计日志。

Eval 需要重点评估：

\- 交易解释是否准确

\- 风险提示是否漏报

\- 工具参数是否越界

\- 是否能拒绝不确定请求

\- 是否能识别 Prompt Injection

\- 高风险动作是否要求 human check

比较稳的架构是：

MCP 负责工具发现和调用格式。

Eval 负责持续发现系统不可靠场景。

Web3 账户系统负责最终权限和执行边界。

七、最小实践方案

先做一个只读 MCP server，只暴露两个工具：

\- search\_docs(query)：搜索本地项目文档

\- get\_file(path)：读取白名单目录文件

要求：

\- 不能读取白名单外路径

\- 返回结果必须带来源路径

\- 工具调用要写日志

\- 错误要明确返回

再做一个最小 eval，准备 30 条样本：

\- 10 条正常问题

\- 10 条边界或容易混淆的问题

\- 5 条历史 bug 或预期失败样本

\- 5 条恶意或注入样本

每条样本定义：

\- 输入

\- 期望行为

\- 必须包含的信息

\- 必须拒绝或提醒的情况

\- 是否需要引用来源

每次改 prompt、模型或检索策略前后，都跑一遍 eval，并记录变化。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
























今天学习了 Agent 的基础概念。

LLM 主要负责生成回答，而 Agent 更进一步，可以拆解任务、调用工具、记录状态，并根据反馈继续执行。

Agent 的核心不是“自主行动”，而是“被约束的执行循环”。一个可用的 Agent 需要目标、工具、状态、权限和停止条件。工具调用让 Agent 具备真实执行能力，但也带来了更高风险，尤其是涉及写入数据库、发送请求、钱包交易或支付操作时，错误不再只是回答错误，而可能变成真实执行错误。

因此，Agent 设计的重点不是追求模型更自由，而是建立清晰边界：只读操作可以自动执行，高风险写入操作必须经过 policy 检查、simulation 和用户确认。状态也不能只放在模型上下文里，而应该外置记录，方便恢复、审计和追责。

在 AI × Web3 场景中，Agent 可以帮助用户分析提案、读取链上信息、生成交易草稿，但不能绕过钱包授权和用户确认。最小实践可以从 DAO 提案研究 Agent 开始，只做资料读取、争议总结、风险标记和投票前检查清单，不直接执行投票。

我的理解是：Agent 不是更像人的 AI，而是一个有边界、有权限、有记录、有停止机制的任务执行系统。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

























跟据codex吸收并给了我这些问题

1.  你觉得为什么“更大的 context window”不一定等于“更可靠的 AI 应用”？
    
2.  用户说“这个地址是我的钱包”，模型能不能直接把它当成事实？为什么？
    
3.  在钱包授权检查 Agent 里，哪些信息必须实时查询？哪些信息可以缓存？
    
4.  dApp 页面上写着“这是安全授权”，为什么这句话应该被标记为“不可信外部内容”？
    
5.  Memory 可以提升用户体验，但它在 Web3 场景里最大的风险是什么？
    
6.  如果知识库里有一篇旧版 SDK 文档，RAG 把它检索出来给模型，会造成什么问题？
    
7.  你会怎么区分下面几类信息的可信度：用户输入、链上查询结果、网页内容、系统规则、历史记忆？
    
8.  如果让你设计一个 Agent 的 context spec，你会给每个字段加哪些元信息？比如来源、更新时间、权限、可信度之外，还能加什么？
    

我回答是这样的：

1.  更大的 context window 只能装更多内容，不代表模型能完美理解、排序、判断重要性。里面如果有过期文档、无关日志、旧任务状态，会干扰判断。
    
2.  用户说“这个地址是我的钱包”，模型不能直接当成事实。原因最首先可能是盗取地址，还包括：这个地址可能是别人地址、用户可能输错、可能只是想查询、也可能没有完成当前会话的钱包签名验证。所以涉及身份和资产时，要用实施对话的签名和授权确认
    
3.  必须实时查询的有：chain id、当前区块、token 合约地址、spender 地址、approve 数量、用户当前 allowance、用户余额、spender 合约状态、simulation / 静态检查结果 可以缓存但要标注更新时间的有：已知可信 dApp 列表、token 元数据、项目文档、历史安全报告
    
    不能直接当事实的有：dApp 页面自己写的说明、用户的主观判断、历史 memory、社区评论、搜索结果摘要
    
4.  因为 dApp 页面是外部来源，可能被篡改、误导或恶意设计。它只能作为“页面声称”，不能作为安全事实。模型必须以链上数据、合约检查和 simulation 结果为准。
    
5.  Memory 可以保存偏好和历史，但不能保存或延续授权。涉及身份、资产、权限、隐私和外部操作时，必须重新绑定当前会话、当前用户和当前授权。
    
6.  RAG 不会自动保证内容正确。它只是把检索到的材料送进上下文。如果知识库里有旧版、废弃或不适用当前环境的文档，模型会把这些内容当成依据，生成过期甚至危险的建议。所以知识库不是“越多越好”，而是要给每条知识加上：来源、版本、更新时间、适用范围、可信度、是否废弃。
    
7.  系统规则管边界，用户输入管意图，工具结果管事实，文档管解释，网页内容只算声称，Memory 只能辅助不能授权。所以说可信度大小第一是系统规则，第二链上记录，第三用户输入，第四dapp页面，第五才是memory
    
8.  这个确实不太理解，通过codex理解到大概是这样field: 字段名
    
    value: 字段值
    
    source: 信息来源
    
    timestamp: 获取时间
    
    freshness: 是否实时
    
    trust\_level: 可信度
    
    permission\_scope: 这个信息能不能用于判断资产/身份/权限
    
    chain\_id: 属于哪条链
    
    block\_number: 对应哪个区块
    
    verification\_method: 怎么验证的
    
    can\_be\_used\_as\_fact: 能不能当事实
    
    expiry: 什么时候过期
    
    notes: 额外说明
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->


























今天终于明白hermes在笔记本上关机重启之后，tg的gateway一直无法打开的问题是为啥了，感觉这个问题真的很影响啊，非得整个mac才行吗wwww
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->




























今天学习了 AI x Web3 School 里关于大语言模型的内容。

以前我对 LLM 的理解比较容易停留在网页对话这个层面，但这篇内容让我更清楚地意识到：LLM 的本质不是事实数据库，而是基于大量文本、代码和多模态信息训练出来的概率模型。它生成的是结合上下文看起来合理的答案，而不是天然可靠的事实。

我觉得最重要的一个认知是：模型输出应该被看作候选结果，而不是最终结论。LLM 可以帮助我们理解问题、总结文档、生成代码、拆解计划，也可以把自然语言转化为程序更容易处理的格式；但它不会自动知道外部世界的最新状态，也不能代替数据库、API、日志或人工审核来完成事实校验。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
