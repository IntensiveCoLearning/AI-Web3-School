---
timezone: UTC+8
---

# ComAsUare

**GitHub ID:** ComAsUare

**Telegram:** @stan_aq

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->
1、harness需要可重复，来评估不同 prompt、不同模型、不同检索策略

输入样本

期望输出或评分规则

被测系统版本

模型和参数配置

运行日志

结果报告

2、Regression set 的作用就是把历史问题固定下来，每次改动都重新跑。
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->

1、harness需要可重复，来评估不同 prompt、不同模型、不同检索策略

输入样本

期望输出或评分规则

被测系统版本

模型和参数配置

运行日志

结果报告

2、Regression set 的作用就是把历史问题固定下来，每次改动都重新跑。

3、[https://modelcontextprotocol.io/specification/2025-11-25/basic/index](https://modelcontextprotocol.io/specification/2025-11-25/basic/index)

MCP协议的关键组成部分：

requests, response, notifications, auth, json schema
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->


1、MCP server 暴露能力之前，应该先定义权限模型。

2、MCP是标准化入口，MCP 负责工具发现和调用格式；Web3 账户系统负责最终权限和执行边界。

3、[https://modelcontextprotocol.io/docs/learn/architecture](https://modelcontextprotocol.io/docs/learn/architecture)

mcp 分为数据层和传输层：

数据层 client 和server之间通信协议。基于JSON-RPC，lifecycle management, and core primitives, such as tools, resources, prompts and notifications.

传输层：clients和server之间通信机制和通道。transport-specific connection establishment, message framing, and authorization
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->



1、lang graph 偏向工作流和状态机。如果任务需要多轮工具调用、重试、人工确认、分支、恢复和长期运行，显式 graph 会比一长串 prompt 历史更可靠。 2、Frameworks 在 AI x Web3 里负责把模型能力接到产品流程里：读取上下文、调用工具、生成结构化动作、记录 trace、进入 eval。

但它不应该直接替代 Web3 侧的权限、签名、交易模拟和账户规则。框架可以组织 Agent，不能替用户承担资产风险。

比较稳的分工是：

AI Framework 管理 prompt、tools、state、eval 和 trace。 Web3 基础设施管理账户、签名、合约、交易和链上状态。 产品层定义用户目标、权限边界、确认流程和失败处理。

3、LangChain 一切自定义组件被称为middleware。 几个后端中间件：filesystemMiddleware, 文件处理中间件；sandbox文件环境隔离；

4、langchain context管理： SummarizationMiddleware. ,MemoryMiddleware, SkillsMiddleware
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->




1、agent分工来建立边界：模型负责提出候选行动，系统负责限制行动空间，用户负责批准高风险边界。 2、agent是被约束的执行循环，目标、工具、状态、权限和停止条件缺一不可。 3、在编写 JSON 规范时，千万不要用 number 类型来代表256位数，因为很多语言的 JSON 解析器（包括 JavaScript）遇到这种超长数字会直接精度丢失变成科学计数法。永远用 string 类型来承载 Web3 的代币数量。 4、multi agent 它适合复杂工作流，但也会放大协调问题：上下文传递丢失、责任边界模糊、一个 Agent 的错误被另一个 Agent 当成事实、工具权限扩散。

做 Multi-Agent 时，要先问一个朴素问题：多个 Agent 是否真的减少复杂度？如果只是把一个不清楚的流程拆成多个不清楚的角色，系统会更难调试。

5、[https://developers.openai.com/api/docs/guides/function-calling](https://developers.openai.com/api/docs/guides/function-calling) openai 文档，关于如何让llm“填写”工具调用的参数方法。 [https://api-docs.deepseek.com/guides/tool\_calls](https://api-docs.deepseek.com/guides/tool_calls)

6、deepseek不支持OpenAI Python SDK 中的 client.beta.chat.completions.parse() 方法。 使用json\_object加instructor库解析。

7、agent plan应包含： 每一步需要什么工具 每一步读还是写 哪些步骤可自动执行 哪些步骤需要用户确认 失败时是否可以重试 最终如何验证任务完成
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->





1.3 最小实践完成。

```markdown
1、context windows管理：关键状态直接给，长文档按需取，低可信内容隔离标注。来避免模型注意力被分散
2、context window控制长度，因此文档知识需要通过rag, 索引到knowledge base对应的内容。
3、一个靠谱的 Agent 上下文通常会分层：

指令层：系统规则、工具使用规则、禁止事项。
任务层：用户目标、本次会话参数。
事实层：链上状态、工具结果、simulation。
知识层：文档、标准、论坛、历史案例。
记忆层：用户偏好和项目配置。
```

当前进度：

```markdown
| 进度 | 章节 | 主要关注问题 | 笔记 | 实践 |
|------|------|-------------|------|------|
| ✅ | 1.1 LLM | 大模型的概率生成内容与事实区分 | notes/1.1llm.md | experiments/1_1_llm_test |
| ✅ | 1.2 Prompt | 结构化输入，并非真正安全边界 |notes/1.2_prompt.md | experiments/1_2_tx_risk_summary|
| ✅ | 1.3 Context | 信息来源治理：来源、时效、权限和可信度 | | |
| 🔄 | 1.4 RAG | 从静态到动态知识注入 | | |
| 🔄 | 1.5 Agent | LLM 驱动多步推理循环 | | |
| 🔄 | 1.6 Frameworks | 标准化 Agent 开发 | | |
| ⬜ | 1.7 Vibe Coding | | | |
| 🔄 | 1.8 MCP | 统一工具调用协议 | | |
| ⬜ | 1.9 Evaluation | | | |
| ⬜ | 1.10 Fine-tuning | | | |
| ⬜ | 1.11 Inference | | | |
| ⬜ | 2.1 Network | | | |
| ⬜ | 2.2 Cryptography | | | |
| 🔄 | 2.3 Wallet | Agent 视角：编程化签名策略 | | |
| 🔄 | 2.4 Smart Contract | Agent 调用合约六步流程 | | |
| ⬜ | 2.5 Account Abstraction | | | |
| ⬜ | 2.6 DeFi | | | |
| ⬜ | 2.7 Oracle | | | |
| ⬜ | 2.8 Indexing | | | |
| ⬜ | 2.9 Security | | | |
| ⬜ | 3.1 Chain-aware Context | | | |
| ⬜ | 3.2 Web3 Tool Use | | | |
| ⬜ | 3.3 Agent Workflow | | | |
| ⬜ | 3.4 Agent Wallet | | | |
| ⬜ | 3.5 Machine Payment | | | |
| ⬜ | 3.6 Settlement & Escrow | | | |
| ⬜ | 3.7 Agent Identity | | | |
| ⬜ | 3.8 Agent Trust & Reputation | | | |
| ⬜ | 3.9 Verifiable AI | | | |
| ⬜ | 3.10 AI Security | | | |
| ⬜ | 3.11 AI Privacy | | | |
| ⬜ | 3.12 Governance AI | | | |
| ⬜ | 4.1 Agentic Commerce | | | |
| ⬜ | 4.2 Wallet / Permission | | | |
| ⬜ | 4.3 AI Security | | | |
| ⬜ | 4.4 Governance | | | |
| ⬜ | 4.5 Dev Tooling | | | |
| ⬜ | 4.6 Open Track | | | |
```
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->






1、任务是什么（任务目标），哪些信息可以使用（context），哪些输入只是参考，few shots

输出应该是什么格式（json格式来后续检查），遇到不确定信息时应该怎么处理(能否中断任务)。

2、Prompt 是软约束，不是安全边界。真正的边界必须由代码、权限、校验和审计来承担

3、如果是日常字段、指令，参数，应该放弃驼峰命名，这同样与分词器有关，但是如果是代码中的接口命名规范等，

依然可以用驼峰命名，来维持规范。

4、contetx window: memory limit(tokens)

GPT 5.4/5.5: 1M, GPT 5.4 mini: 400k, Deepseek V4 PRO:1M

5、prompt模版格式：instructions，few shots,output\_structure, context, 行为边界

6、structured output:JSON object、函数参数或 schema 约束字段
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->







repo: [https://github.com/ComAsUare/ai-web3-school-cohort-0](https://github.com/ComAsUare/ai-web3-school-cohort-0)

今日摘要：

1、反思过去4天学习较慢的进度和不佳的效果。比对分享的其他同学的笔记、分享，认为问题第一，没有在学习时不断保持追问、思维深度，第二，没有对ai web3交叉领域的大局认识，导致在开头章节慢慢看。

2、知识面方法论：

```markdown
柏拉图询问->回答式学习法：先谦虚询问，从不同个案中归纳共同点，概括定义；再比较不同个案，由浅入深追问反思自己是否局限、盲从；把零散观点归纳，聚拢；把阅读/讨论后，经得起逻辑推敲，清晰的概念总概括。
特点：主动检索、批判性思维，客观不带情绪。
```

3、通读handbook手册4个部分。笔记整理中
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->








````markdown
# Daily Note | 每日学习笔记

## Date | 日期: 2026-05-20

### 📅 Today's Plan | 今日计划
- [x] 阅读 Handbook LLM 章节（Module 1 #1）
- [ ] 阅读 Handbook Prompt 章节（Module 1 #2）
- [x] 第一个 AI 实验：用 DeepSeek API 调 prompt 观察模型行为
- [x] 设置 Python 开发环境（venv + openai + python-dotenv）
- [ ] 交易解释器案例学习
- [ ] 参与 Web3 运行原理直播
- [ ] WCB 平台提交首次打卡
- [ ] 🔗 昨日回顾：Handbook 概览页 + Agent 直播笔记整理

### ✅ Completion Status | 完成情况
- [x] Handbook LLM 章节阅读完成（Token → Embedding → Transformer → Decoding）
- [x] Python venv + openai + python-dotenv 环境搭建
- [x] DeepSeek API 调用成功，第一个 prompt 实验完成
- [ ] 交易解释器案例学习
- [ ] 参与 Web3 运行原理直播
- [ ] WCB 打卡提交
- [ ] Handbook Prompt 章节

### 📖 Learning Content | 学习内容

#### Topic | 主题: Handbook LLM + Python 环境 + DeepSeek API 实验

**Key Concepts | 关键概念**:
1. LLM重要问题：模型负责理解用户意图，还是生成内容？它只是在回答问题，还是能调用工具？它的错误会停留在文本里，还是会进入真实工作流？。模型输出是候选结果，不是事实本身；模型能力是推理入口，不是最终验证。
**LLM 生成的是概率上合理的输出，而不是天然可信的事实。**
2. Token
Token 直接影响三件事：上下文能放多少、调用成本是多少、模型能不能完整看见关键信息。
不要把“页面很短”误认为“token 很少”。代码、JSON、长标识符、表格和混合语言文本经常比普通段落更吃 token。
3. Embedding
Embedding 适合帮你从文档、知识库、代码仓库、讨论记录和产品日志中找相关材料。但它不适合单独判断“这个结论是否正确”。向量相似度只能说明内容接近，不能替代来源校验、规则检查和人工判断。
4、Transformer
注意力机制->上下文寻找模式->模型强大的模式组合能力，但不是最终事实
5、Hallucination
处理幻觉不要只靠“写更好的 prompt”。更可靠的方式是把模型输出接到外部校验：来源引用、schema 校验、规则检查、人工确认和审计日志。
6、LLM在ai*web3中位置
LLM 位在 AI x Web3 系统的理解和生成层。它负责把用户目标转成可讨论的计划，把复杂链上数据解释成人能读的语言，把文档和代码串成可执行思路。

真正的产品通常还需要这些层配合：
数据层：RPC、索引器、预言机、向量库、项目文档。
编排层：Prompt、Context、RAG、Agent workflow。
执行层：工具调用、钱包、Smart Account、合约交互。
安全层：Guard、simulation、权限策略、人工确认、日志。



**Code Examples | 代码示例**:
```python
# experiments/1_python_deepseek/dsPrompt.py
```

## 交易解释器案例学习
- 概念：通过 AI 把 calldata、事件日志、token transfer 翻译成人能理解的操作说明
- 核心能力：解析交易 → 识别资产变化 → 解释合约调用 → 标记风险
- 属于 Module 4「开发工具」赛道的知识节点
- 对 Agent 执行链上操作前的交易预检非常关键

## Web3 运行原理直播
- Web3 基本架构：Layer 1/2、节点、RPC、共识机制
- 钱包原理：EOA vs 智能合约钱包、公私钥、签名流程
- 交易生命周期：构造 → 签名 → 广播 → mempool → 打包 → 确认

### 💡 Insights & Reflections | 收获与思考

**What I Learned | 今日收获**:
- 理解了 Transformer 架构的 Token → Embedding → Attention → Decoding 完整流程
- 掌握了 Temperature / Top-p / Max Tokens 对模型输出的控制作用
- 通过 openai 兼容接口成功调用 DeepSeek，理解了 API Key 管理（.env）+ 基本请求结构
- LLM 在 AI×Web3 体系中处于"理解和生成层"，实际产品还需要数据层/编排层/执行层/安全层配合

**Problems Encountered | 遇到的问题**:
1. 

### 🎯 Tomorrow's Plan | 明日计划
- [ ] 阅读 Handbook Prompt 章节（Module 1 #2）
- [ ] 交易解释器案例学习
- [ ] 参与 Web3 运行原理直播
- [ ] 动手实验：调 prompt 参数（Temperature / Top-p / System Prompt）
- [ ] WCB 平台提交首次打卡

### 📊 Statistics | 学习统计
- **Study Time | 学习时长**: 1.5h (LLM 阅读 + 笔记)
- **Coding Time | 编码时长**: 0.5h (Python 环境 + DeepSeek API)
- **Completion Rate | 完成度**: ~50% (LLM + 环境 + 实验完成，待 Prompt + 交易解释器 + Web3 直播 + WCB 打卡)

### 🔗 Resources | 相关资源
- [Handbook LLM 章节](https://aiweb3.school/zh/handbook/ai/llm/)
- [Handbook Prompt 章节](https://aiweb3.school/zh/handbook/ai/prompt/)
- [WCB 打卡入口](https://web3career.build/zh/programs/AI-Web3-School#tab=learning)

### 📝 Check-in Draft | 打卡草稿

**Day 1: Handbook LLM 章节 + Python 环境 + 第一个 AI 实验 🎉**

✅ 完成 Handbook LLM 章节学习
   - Token → Embedding → Transformer → Attention → Decoding
   - 理解了 LLM 在 AI×Web3 体系中的定位：理解和生成层

✅ Python AI 开发环境搭建
   - venv + openai + python-dotenv

✅ DeepSeek API 调用成功
   - 通过 openai 兼容接口调用，完成第一个 prompt 实验
   - 代码路径：experiments/1_python_deepseek/dsPrompt.py

下一步：Handbook Prompt 章节 + 交易解释器案例 + Web3 直播！

**Check-in Link | 打卡链接**: [手动提交后填写]

---

**Mood | 心情**: 
**Energy | 精力**: ⭐⭐⭐⭐⭐ (1-5)
````
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->









[https://github.com/ComAsUare/ai-web3-school-cohort-0](https://github.com/ComAsUare/ai-web3-school-cohort-0)

```markdown
# Daily Note | 每日学习笔记

## Date | 日期: 2026-05-19

### 📅 Today's Plan | 今日计划
- [x] AI × Web3 School Learning Agent 初始化
- [x] GitHub 学习仓库搭建完成
- [x] 学习计划按 Handbook 四大模块重构
- [x] Profile 完善（学习时间、方向、风格）
- [x] Handbook feedback 流程搭建
- [x] 参与 AI Agent 直播分享
- [x] Hermes 代理安装完成，可通过 Telegram 安排每日计划、定时发送
- [ ] 阅读 Handbook 概览页 + LLM 章节（Module 1 启动）
- [ ] 设置 Python AI 开发环境
- [ ] 提交首次 WCB 打卡

### ✅ Completion Status | 完成情况
- [x] GitHub CLI 已认证，仓库已 push
- [x] `ai-web3-school-cohort-0` public repo 就绪
- [x] 目录结构完整：daily, tasks, experiments, handbook-feedback, hackathon, submissions
- [x] 模板已就位：daily-note, task-note, feedback TEMPLATE
- [x] 学习计划按 Handbook 四大模块重构，含三档路径
- [ ] 首次学习 session（待开始）
- [ ] WCB 打卡提交（待手动提交）

### 📖 Learning Content | 学习内容
## agent直播课程
主要了解内容：
# 不同ai工具分类：代码工具，cli工具，agent工具，hermes的区别
# hermes agent主要特点： 跨平台 开源 终端运行，消息网关。1）多模型 2）工具调用 3）cron 定时任务 4) meory 记忆 5)消息网关 6)记忆skills
# hermes完整配置流程，包括白名单，唤醒词等等。

## handbook概览页


#### Topic | 主题: Agent 初始化 → Handbook 结构对齐

**今日关键成果**:

1. **Learning Agent 角色明确**: 本 Agent 定位为 AI × Web3 School 的个人学习助手
   - 不替代学习，而是规划、整理、打卡、反馈
   - 每日早晨/晚上提醒，生成打卡草稿
   - 沉淀学习产物到 public repo

2. **Handbook 四大模块理解**:
   - Module 1: AI 基础（11 章节）— LLM→Prompt→Agent→MCP→...
   - Module 2: Web3 基础（9 章节）— Network→Wallet→Smart Contract→AA
   - Module 3: Bridge（12 章节）— Chain-aware Context→Agent Wallet→Verifiable AI
   - Module 4: 前沿探索（6 赛道）— Agentic Commerce→Wallet/Permission→...

3. **学习路径设计**:
   - 当前阶段：Module 1 AI 基础，最小路径 LLM→Prompt→Agent（3-4 天）
   - 下一阶段：Module 3 Bridge 核心交叉（Agent 开发重点）
   - 每一步有三档路径供按精力选择

### 💡 Insights & Reflections | 收获与思考

**What I Learned | 今日收获**:
- AI × Web3 不是简单 buzzword 拼接，而是多层面交叉：上下文→工具调用→权限→支付→验证
- Handbook 的结构设计很巧妙：AI 侧 + Web3 侧 → Bridge → Tracks，从补齐基础到交叉到项目
- 作为 AI 新手 + Web3 中级 + 独立开发者，最优路线是「补齐 AI 基础 → 快速穿越 Bridge 核心 → 动手做 Agent 原型」
- 三档路径能很好适配精力起伏：状态好走挑战路径，累了走最小路径保证每天有产出

### 🎯 Tomorrow's Plan | 明日计划
- [ ] 阅读 Handbook LLM 章节（Module 1 #1）
- [ ] 阅读 Handbook Prompt 章节（Module 1 #2）
- [ ] 第一个 AI 实验：动手调几次 prompt 看模型行为
- [ ] 设置 Python 开发环境（venv + openai + jupyter + python-dotenv）
- [ ] WCB 平台提交首次打卡

### 📊 Statistics | 学习统计
- **Study Time | 学习时长**: 1.5h (setup + plan)
- **Coding Time | 编码时长**: 0h
- **Completion Rate | 完成度**: ~70% (初始化完成，待学习 session)

### 🔗 Resources | 相关资源
- [AI × Web3 School Handbook](https://aiweb3.school/zh/handbook/)
- [WCB Course Page](https://web3career.build/zh/programs/AI-Web3-School)
- [WCB Learning](https://web3career.build/zh/programs/AI-Web3-School#tab=learning)
- [WCB Agent API](https://web3career.build/llms.txt)
- [GitHub Repo](https://github.com/ComAsUare/ai-web3-school-cohort-0)
- [Learning Agent Prompt](https://aiweb3.school/learning-agent.zh.txt)

### 📝 Check-in Draft | 打卡草稿

**Day 0: AI × Web3 School 学习初始化完成 🚀**

今天完成了全部学习环境搭建：

✅ 配置 Learning Agent 并确认学员画像
   - AI：新手 · Web3：中级 · 编程：独立开发
   - 方向：AI Agent 开发 + 智能合约集成
   - 节奏：早晨主力学习 1-2h，晚上复盘

✅ 创建 public 学习仓库：https://github.com/ComAsUare/ai-web3-school-cohort-0

✅ 按 Handbook 四大模块重构学习计划
   - Module 1: AI 基础（当前阶段，LLM→Prompt→Agent 最小路径）
   - Module 2: Web3 基础（复习重点：钱包、合约、账户抽象）
   - Module 3: AI × Web3 Bridge（核心交叉目标）
   - Module 4: 前沿探索（Agentic Commerce / Wallet Permission）

✅ 建立 Handbook feedback 流程，学习中的问题直接沉淀到 repo 反馈

下一步：从 Handbook LLM 章节开始，打好 AI 基础！

**Check-in Link | 打卡链接**: [手动提交后填写]
→ 打卡入口: https://web3career.build/zh/programs/AI-Web3-School#tab=learning

---

**Mood | 心情**: 😊 (Setup done, ready to learn!)
**Energy | 精力**: ⭐⭐⭐⭐ (4/5)
```
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->










1、参与AI 时代的 Web3 架构能力直播学习。

新增了解知识：

1）通过交易模拟，在签名前，排除钓鱼等攻击漏洞。

2）eip712, 通过可视签名，防止重放等攻击。

3）ai时代，扎实基础，好的系统架构能力、规划能力，审查ai输出结果，决定个人工作能力。

2、安装hermes工具，配置glm, claude模型
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
