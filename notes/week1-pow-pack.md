# Week 1 Proof-of-Work Pack

> AI × Web3 School Cohort 0 · 学员 2758star
> 2026.05.18 — 2026.05.24

---

## 一、AI 学习记录

### AI 基础概念卡片（10pt）

Week 1 完成了 Handbook AI 基础全部 11 章的学习：

| 模块 | 核心理解 |
|------|---------|
| LLM | 大语言模型本质是「猜下一个词」，参数够大、数据够多后展现出涌现能力 |
| Prompt | 是软约束不是安全边界——能提高遵循概率，但不能保证安全，真正边界在代码、权限、校验和审计 |
| Context | 上下文窗口是模型的「短期记忆」，窗口越大能一次性处理的内容越多 |
| RAG | 检索增强生成——让模型先查外部知识库再回答，解决知识截止和幻觉问题 |
| Agent | 能理解目标、调用工具、观察结果、出错修复的自主系统 |
| Frameworks | LangChain/Eliza 等框架降低了 Agent 开发门槛 |
| Vibe Coding | 用自然语言描述需求让 AI 生成代码的开发范式 |
| MCP | 模型上下文协议——AI 与外部工具的标准接口 |
| Evaluation | 评测模型能力的基准测试（MMLU、GSM8K 等） |
| Fine-tuning | 在预训练模型上追加特定领域数据继续训练 |
| Inference | 模型推理部署——vLLM、llama.cpp 等工具 |

> 详细笔记见：[打卡文件](https://github.com/2758star/AI-Web3-School/blob/main/notes/2758star.md)

---

## 二、Learning Agent / AI 工具实践

### Learning Agent Setup（20pt）

搭建了双 Agent 协作系统：

| Agent | 角色 | 说明 |
|-------|------|------|
| Claude Code | 主力执行 | 代码、WCB 提交、学习管理 |
| Hermes（墨熵） | 调度中枢 | 提醒、进度追踪、任务分发 |

关键经验：
- Claude Code 读 PROGRESS.md 和 CLAUDE.md 获取上下文
- Hermes 读 HERMES.md 和 MEMORY.md 获取用户偏好
- 双 Agent 通过 `ai-configs/` 目录共享规则文件

> 详细说明：[打卡文件 - 5.18](https://github.com/2758star/AI-Web3-School/blob/main/notes/2758star.md)

---

## 三、Web3 学习记录

### Web3 基础概念卡片（10pt）

| 概念 | 一句话理解 |
|------|-----------|
| 私钥 | 账户的唯一控制凭证，谁有私钥谁就控制这个地址 |
| 助记词 | 人类可读的私钥备份形式，12/24 个单词 |
| 签名 | 用私钥对交易内容做数学认证，证明「这确实是我发起的」 |
| Gas | 链上操作的手续费，支付给矿工/验证者 |
| 智能合约 | 部署在链上的自动执行代码，不可篡改 |
| 账户抽象 | ERC-4337，让智能合约像 EOA 一样发起交易 |
| 区块浏览器 | 公开查看链上所有交易和合约状态的工具（如 Etherscan） |

### EOA / 智能账户 / 多签账户权限差异分析（30pt）

从控制权、安全性、使用场景三个维度对比了三类账户的权限模型：

- **EOA**：私钥即控制权，简单但单点风险高
- **智能账户**：合约规则定义权限，支持恢复、限额、自动化
- **多签账户**：多人共同批准，适合团队和 DAO

> 完整分析：[EOA/智能账户/多签对比](https://github.com/2758star/AI-Web3-School/blob/main/notes/week1-eoa-smart-multisig.md)

---

## 四、链上验证

### 测试网交易（20pt）

- **网络**：Sepolia 测试网
- **交易类型**：ETH 转账（0.00001 ETH → 销毁地址 0x000...dEaD）
- **Tx Hash**：`0x52304a7ca8fa4171d5ff51816e7aaf2f32ee458c89dd0a3a548e0196e30b340a`
- **Etherscan**：[查看交易](https://sepolia.etherscan.io/tx/0x52304a7ca8fa4171d5ff51816e7aaf2f32ee458c89dd0a3a548e0196e30b340a)
- **Gas**：21000，燃料费 ~0.000031 SepoliaETH

### 部署最小智能合约（30pt）

- **合约名称**：MinimalCounter
- **网络**：Sepolia 测试网
- **合约地址**：`0x6F26...Ae75`
- **工具**：Remix IDE + MetaMask
- **功能**：一个带计数器的最小 Solidity 合约，含 increment 和 getCount 函数
- **代码**：[experiments/minimal-counter](https://github.com/2758star/AI-Web3-School/tree/main/experiments/minimal-counter)

---

## 五、AI × Web3 交叉实验

### 实验一：交易解释器（40pt — 受限 Web3 助手）

用 Node.js + ethers.js + DeepSeek API 构建了交易解释器：
- 输入 tx hash → 自动解码 ERC20 Transfer 事件和函数调用
- DeepSeek 生成人话解释
- 核心收获：学会区分「链上可验证的事实」和「模型在推断的东西」

> 代码：[experiments/tx-interpreter](https://github.com/2758star/AI-Web3-School/tree/main/experiments/tx-interpreter)

### 实验二：签还是不签（30pt — AI 可交互学习产物）

Web 工具，模拟 5 个合约授权场景（安全/中风险/高风险/极高风险）：
- 用户判断签或不签 → DeepSeek API 动态分析风险
- 暗色主题中文界面，训练 Web3 新手签名前三思的习惯

> 代码：[experiments/sign-or-not](https://github.com/2758star/AI-Web3-School/tree/main/experiments/sign-or-not)

### 项目拆解：Bittensor & Render Network（30pt）

深度分析了两个 AI × Web3 项目，学到核心判断框架：
- **Bittensor**（协议层）：用 token 激励机制做去中心化 AI 评估
- **Render Network**（资源层）：去中心化 GPU 算力市场
- **判断标准**：去掉 AI 还能跑吗？换成 USD 结算还能跑吗？

> 完整拆解：[打卡文件 - 5.19 晚间](https://github.com/2758star/AI-Web3-School/blob/main/notes/2758star.md)

---

## 六、信息流关注清单（20pt）

在 X 上建立了 AI × Web3 信息流，关注 13 个账号，分五类：

| 类别 | 账号举例 |
|------|---------|
| 课程/社区 | @aiweb3school |
| 赞助方 | @GoPlusSecurity |
| 安全 | 安全审计类账号 |
| 专家 | AI × Web3 领域研究者 |
| 项目 | Bittensor、Render 等 |

> 完整清单：[打卡文件 - 5.19 晚间追记](https://github.com/2758star/AI-Web3-School/blob/main/notes/2758star.md)

---

## 七、直播课参与（Week 1 全勤）

| 日期 | 课程 | 积分 | 状态 |
|------|------|:---:|:----:|
| 5.18 | Co-learning | 20 | ✅ |
| 5.18 | AI 时代的 Web3 架构能力 | 20 | ✅ |
| 5.19 | AI Agent 入门：Hermes 从 0 到 1 | 20 | ✅ |
| 5.20 | Web3 运行原理 | 20 | ✅ |
| 5.20 | Co-learning | 20 | ✅ |
| 5.21 | AI 下乡计划：AI 在 Web3 的应用 | 20 | ✅ |
| 5.22 | Z.AI | 20 | ✅ |
| 5.22 | Week 1 例会 | 20 | ✅ |
| 5.22 | Co-learning | 20 | ✅ |
| 5.23 | Open Agentic Economy | 20 | ✅ |

---

## 八、本周遇到的问题与人工修正

### 问题 1：Hermes 擅自提交 WCB 任务（🔥 最重要的教训）

- **发生了什么**：墨熵在用户未同意的情况下自行提交了多个 WCB 任务，proof 只有光秃秃的仓库 URL，跟任务要求完全不沾边
- **怎么发现的**：回头看已提交任务的 proof 时发现全部不合格
- **怎么修正的**：逐条打开每个任务的 proofPrompt，对照要求手动重写全部 proof 后补交。同时建立红线规则——WCB 提交前必须征得我同意
- **学到什么**：Agent 是工具不是主人，关键操作必须留有人工确认环节

### 问题 2：WCB API 字段名搞错

- **发生了什么**：提交 EOA/多签任务时用了 `"evidence"` 字段，API 返回「请填写提交证明」
- **怎么修正的**：查 API 文档后发现正确字段是 `"proof"`，改正后提交成功

### 问题 3：DeepSeek API 开销

- **发生了什么**：交易解释器每次调用 DeepSeek API 烧 token 比预想快
- **怎么修正的**：默认不加 LLM 先看提示词质量，确认逻辑通后再接 API

### 问题 4：飞书调试耗时→放弃

- **发生了什么**：花太多时间调试飞书 WebSocket 消息通道
- **怎么修正的**：最终放弃飞书，改为 Claude Code 全面接管 + PROGRESS.md 共享上下文

---

## 九、Week 1 积分总览

| 状态 | 数量 | 积分 |
|------|:---:|:---:|
| APPROVED | 23 | — |
| SUBMITTED | 2 | 50pt |
| 累计完成 | — | **365pt** |

---

## 十、核心收获

**AI 侧**：
- LLM 本质是猜词，Prompt 是软约束，Agent 让 AI 从问答变成执行
- 用 AI 时最重要的习惯：区分「事实」和「模型在猜的东西」

**Web3 侧**：
- 私钥即身份，签名即授权，链上数据全公开可查
- EOA/智能账户/多签代表三种不同的信任模型，选择取决于场景

**AI × Web3 侧**：
- 判断项目真假的框架：去掉 AI 还能跑吗？换成 USD 还能跑吗？
- Bittensor（协议层）vs Render（资源层）是两种典型路径

**工具链**：
- Claude Code 做执行，Hermes 做调度，GitHub 做版本
- 双仓库架构（私密存草稿 + 公开交作业）

---

## 📖 完整学习日志

所有每日笔记、概念卡片、项目拆解详见打卡文件：

👉 [notes/2758star.md](https://github.com/2758star/AI-Web3-School/blob/main/notes/2758star.md)（Content_START 到 Content_END 之间，5.17-5.24）

---

*最后更新：2026.05.24*
