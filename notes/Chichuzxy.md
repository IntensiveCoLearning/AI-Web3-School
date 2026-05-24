---
timezone: UTC+8
---

# Chichuzxy

**GitHub ID:** Chichuzxy

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->
### **当前 Hermes 配置问题（排查过程与现状）**

**现象：** 即使 API key 通过 `curl` 验证有效，Hermes 在配置为 `custom` provider 后仍返回 HTTP 401。

**排查步骤：**

1.  检查 `.env` 文件存在且包含 `CUSTOM_API_KEY`。
    
2.  确认 `hermes config show` 中 `model` 配置正确。
    
3.  手动设置环境变量 `set CUSTOM_API_KEY=...`，再次测试，依然 401。
    
4.  `curl` 直接调用成功，说明 key 和端点有效。
    
5.  `hermes update` 因网络限制无法完成。
    
6.  尝试 `hermes auth activate custom` 和 `hermes config set` 等操作，未解决问题。
    

**当前结论：** 可能是 Hermes 版本（v0.14.0）对 `custom` provider 的请求构造方式与 DashScope 兼容性不佳，或缺少必要的请求头参数。

**临时解决方案：** 使用 Python 脚本直接调用模型，完成本周任务。

**待解决问题：** 需要更新 Hermes 到支持 `--base-url` 或正确构造 `custom` 请求的版本，或等待后续版本修复。  
  
**下一步计划**

1.  **修复 Hermes 配置：** 尝试手动下载更新或使用国内镜像重新安装，待网络改善后继续调试。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->

AI x Web3 School 训练营 Week 1 学习打卡 日期：2026-05-23 (Day 4-5)

一、今日完成的任务

1.  GitHub Repo 交付物整理
    
    -   创建 artifacts/tx-hashes.txt 交易哈希汇总文件 合约地址: 0xc56a356d2ccfe3240cc35dc8a8b3064e2cc67948 部署交易: 0xf414a4aea774f9c34c0fc694e9f0792b8cfacdeaad7cca35adee7cd391dff937 包含 Etherscan 验证链接
        
    -   创建 module-b-web3-fundamentals/[testnet-tx-record.md](http://testnet-tx-record.md) 详细测试网交易记录 包含部署信息、读写验证清单、Gas 记录表
        
    -   更新 [README.md](http://README.md) 进度追踪区
        
    -   Commit 并推送到 GitHub (commit: f1b8954)
        
2.  Week 1 提交笔记整理
    
    -   从会话日志中提取完整学习内容
        
    -   整理为精简版提交文档: [AI-Web3-Week1-Submission-Notes.md](http://AI-Web3-Week1-Submission-Notes.md)
        
    -   涵盖 7 大模块: Learning Agent 配置、Web3 基础任务、AI 工具实践、核心概念、交叉实验、安全原则、本周统计
        
3.  项目结构梳理
    
    -   确认 repo 包含 4 个 commits
        
    -   核心文件: Module A: [learning-agent-setup.md](http://learning-agent-setup.md), [prompts-library.md](http://prompts-library.md), demo/ Module B: [testnet-tx-record.md](http://testnet-tx-record.md) Docs: [prompt-parameter-experiments.md](http://prompt-parameter-experiments.md), daily-checkin Artifacts: tx-hashes.txt
        

二、本周完成的全部交付物

Module A - AI Fundamentals (已完成) Hermes Agent 配置记录 ([learning-agent-setup.md](http://learning-agent-setup.md)) Prompt 库 ([prompts-library.md](http://prompts-library.md)) Prompt 参数实验记录 ([prompt-parameter-experiments.md](http://prompt-parameter-experiments.md)) Demo 代码: [eth-checksum-cli.py](http://eth-checksum-cli.py), [gas-price-checker.py](http://gas-price-checker.py)

Module B - Web3 Fundamentals (已完成) 测试钱包创建 (MetaMask, Sepolia) 地址: 0x147Fcf3EB8B9E305a5b4e16cbba90462F7126db9 领取测试币并发送交易 合约部署到 Sepolia 合约: 0xc56a356d2ccfe3240cc35dc8a8b3064e2cc67948 交易: 0xf414a4aea774f9c34c0fc694e9f0792b8cfacdeaad7cca35adee7cd391dff937 区块浏览器验证 (Sepolia Etherscan) 测试网交易记录文档 ([testnet-tx-record.md](http://testnet-tx-record.md)) 交易哈希汇总 (artifacts/tx-hashes.txt)

Module C - AI x Web3 交叉实验 (部分完成) 智谱 API 调用实践 (已完成) 完整链路验证: AI 生成 -> 人工复核 -> 钱包确认 -> 链上执行 -> 浏览器验证 (已完成) 模块 C 文档目录待创建 (未完成)

综合交付 (已完成) GitHub Repo: [https://github.com/Chichuzxy/ai-web3-training-week1](https://github.com/Chichuzxy/ai-web3-training-week1) Week 1 提交笔记 ([AI-Web3-Week1-Submission-Notes.md](http://AI-Web3-Week1-Submission-Notes.md)) 每日打卡记录 (docs/) 核心概念速查表 (AI + Web3 各 8 个概念)

三、本周统计

活跃天数: 5 天 (2026-05-19 至 2026-05-23) 会话数: 33+ 独立会话 使用模型: 5 种 (qwen3.6-plus, qwen3.6-35b, qwen3.5-27b, glm-5.1, qwen3.6-flash) 主要工具: terminal, search\_files, read\_file, write\_file, session\_search, execute\_code GitHub Commits: 4+

四、待补充项

1.  合约源码文件，补充到 module-b-web3-fundamentals/smart-contract-demo/
    
2.  合约部署方式说明，Remix 或 Hardhat 或 Foundry
    
3.  合约读写验证截图
    
4.  普通转账交易 TX Hash
    
5.  Gas 数据记录
    
6.  模块 C 交叉实验的详细文档
    

五、安全红线回顾

私钥和助记词从未暴露给 AI 全部操作在 Sepolia 测试网完成 每笔交易和合约写入均经人工确认 AI 仅负责代码生成和流程指导，签名环节完全人工

记录时间: 2026-05-23 21:49 记录方式: Hermes Agent 从会话日志提取汇总，人工确认后输出
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->


# **AI x Web3 School 训练营 - Week 1 学习打卡**

**日期：** 2026-05-22 **学员：** Chichuzxy

## **一、今日完成的任务**

**1\. Hermes Agent 配置与使用**

-   环境：Windows 桌面版 Hermes Agent
    
-   完成模型切换测试：Qwen 3.6/3.5 系列、GLM 等
    
-   验证工具链：browser / search / terminal / file 等全部正常运行
    
-   记录 Session 数量：今日约 33 个独立会话
    

**2\. Web3 基础任务回顾（专业课已完成）**

-   钱包：MetaMask 已创建 (地址: 0x147Fcf...6db9)
    
-   测试网：Sepolia (已领币、已发交易)
    
-   合约部署：使用 Remix IDE 连接 MetaMask 部署合约
    
-   验证：已在 Sepolia Etherscan 确认交易和合约
    

**3\. AI 工具实践**

-   使用 ZhipuAI (智谱) SDK 编写并运行了 Python 聊天脚本
    
-   实现了 API Key 安全加载 (.env) 和上下文管理
    
-   验证了"AI 生成代码 -> 人工复核 -> 运行"的完整链路
    

**4\. Learning Agent 配置记录**

-   确认当前 Hermes Agent 即为 Week 1 要求的 learning agent
    
-   已生成两份配置文档：实验报告 + 学习日志
    

## **二、今日学到的关键概念**

**Agent vs Chatbot**

-   Chatbot 只能输出文本，Agent 可以调用工具（读写文件、执行命令、联网等），形成"感知-决策-执行"循环。
    

**安全原则**

-   私钥/助记词绝对不能给 AI。
    
-   所有链上操作必须在测试网进行。
    
-   签名、转账必须保留人工确认环节。
    

## **三、遇到的问题与解决**

1.  **API 401 错误**: 原因是 Key 失效，已更换有效 Key 解决。
    
2.  **GitHub 推送失败**: HTTPS 连接不稳定，尝试通过 API 推送，待网络恢复。
    

## **四、明日计划**

-   检查网络，确认 GitHub 推送是否成功。
    
-   补充 Etherscan 交易哈希截图到 Repo。
    
-   完善最小交叉实验记录文档。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->



\# Week 1 Day 1 学习打卡日志

\## 基本信息

\- 日期：2026-05-21（Week 1）

\- 状态：进行中

\- 学习目标对齐：理解 LLM/AI 基本概念、搭建 Learning Agent、建立 Web3 操作安全意识、启动交叉实验链路

\## 今日完成事项

\### 1. Learning Agent 配置记录

\- 使用 Hermes CLI 完成 `training-week1` 技能加载与 Chat 会话初始化

\- 配置目录`~/.hermes/config.yaml`

\- 启用的核心工具集：terminal / file / web / browser / memory / skills / todo / delegation

\- 安全上下文已开启 `security_context.redact_secrets: true`，自动屏蔽私钥/助记词等敏感信息

\- 遇到 Windows 终端兼容问题（Git Bash 下 `hermes setup` 报错），已明确需在 PowerShell / Windows Terminal 中运行

\### 2. 项目仓库初始化

\- 创建统一学习入口仓库：[https://github.com/Chichuzxy/ai-web3-training-week1](https://github.com/Chichuzxy/ai-web3-training-week1)

\- 规划文档结构：README（任务清单）、docs/[learning-agent.md](http://learning-agent.md)（Agent 配置说明）、[log.md](http://log.md)（每日进度记录）

\### 3. 核心概念学习与理解

\- Learning Agent：具备上下文记忆、结构化 Prompt 工程能力、多工具 Workflow 整合的持续学习系统。相比传统一次性问答，能主动追踪进度并生成可复用的学习笔记。

\- Web3 操作链基础路径：创建测试钱包 -> 领取测试币 -> 发送测试交易 -> 部署最小合约 -> 区块浏览器验证。强调必须在测试网完成，严禁主网随意调用。

\## 安全与规范确认

\- 私钥/助记词绝不交由 AI Agent 直接接触，所有签名、转账、合约写入必须保留人工确认环节

\- 实验严格限制在测试网环境

\- 建立权限意识与失败恢复意识，为后续交叉实验铺底

\## 本周模块规划（今日已讨论）

\- 模块 A：Learning Agent 配置记录 + Prompt 工程实践（今日已打底）

\- 模块 B：创建测试钱包、领测试币、发一笔测试交易（核心实操，待执行）

\- 模块 C：AI + Web3 的最小交叉实验（跑通 AI 生成 -> 人工复核 -> 钱包确认 -> 链上执行 -> 浏览器验证 链路）

\## 待办与明日计划

\- \[ \] 切换至 PowerShell 完成 `hermes setup` 深度配置，更新 API Key

\- \[ \] 准备测试网钱包地址与 Faucet 链接，开始模块 B 实操

\- \[ \] 将本日志正式推送到 `ai-web3-training-week1` 仓库

\- \[ \] 继续推进 Prompt Template 设计，用于自动化周报总结

\## 交付物清单对齐

| 交付项 | 状态 | 备注 |

|--------|------|------|

| Learning Agent 配置记录 | 基本完成 | 需补全环境配置细节 |

| GitHub Repo 及日志 | 进行中 | Repo 已建，首篇 [log.md](http://log.md) 归档中 |

| Web3 测试网交互数据 | 待执行 | 需生成测试钱包与 TX Hash |

| 概念说明与交叉实验记录 | 规划中 | 明日启动模块 B/C |
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->




好的，这是根据你今天的实际操作整理的学习笔记，可以直接放入 GitHub 仓库的 `notes/` 目录。

\---

\## 📝 Week 1 学习笔记：Hermes Agent 配置与 LLM 模型接入

\*\*日期\*\*：2026-05-20

\*\*作者\*\*：zxy

\*\*主题\*\*：在 WSL2 中安装并配置 Hermes Agent，接入免费 LLM 模型，完成首次 AI 工具实践

\---

\### 🎯 学习目标回顾

\- 理解 LLM 的基本工作方式与 API 调用

\- 动手搭建一个 AI Agent（learning agent）

\- 完成 AI 工具实践：跑通 Agent 对话，并用它辅助学习

\- 建立 GitHub 学习仓库，记录全过程

\---

\### ⚙️ 环境与工具

\- \*\*操作系统\*\*：Windows 11 + WSL2 (Ubuntu)

\- \*\*Agent 框架\*\*：Hermes Agent v0.14.0（安装在 `~/.hermes/hermes-agent`）

\- \*\*模型服务\*\*：

\- 最终选择 \*\*智谱AI BigModel\*\* 的免费模型 `GLM-4.7-Flash`

\- 兼容 OpenAI 接口，通过 `GLM_API_KEY` + 修改 `GLM_BASE_URL` 接入

\---

\### 🚧 遇到的问题与解决过程

1\. \*\*找不到 `openai.py` 文件\*\*

\- 现象`find ~/.hermes -name "openai.py"` 无结果。

\- 原因：Hermes 使用模块化插件结构，没有独立的 `openai.py` 文件。

\- 解决：通过查看 `.env.example` 了解配置机制，转而配置 Provider 环境变量。

2\. \*\*[Z.ai](http://Z.ai) 模型不可用\*\*

\- 尝试使用 [Z.ai](http://Z.ai) 的 `glm-4-flash` 报错 `Unknown Model`。

\- 通过 API 查询发现 [Z.ai](http://Z.ai) 当前可用模型列表中无该模型，免费额度已下线。

\- 转向课程推荐的 BigModel`open.bigmodel.cn`）。

3\. \*\*Hermes 配置文件的修改\*\*

\- 复制 `.env.example` 为 `.env`

\- 设置 `GLM_API_KEY` 和 `GLM_BASE_URL` 指向 BigModel

\- 使用 `hermes config set model.default GLM-4.7-Flash` 切换模型

\- 重启 Hermes 后成功返回对话。

\---

\### ✅ 最终配置（关键参数）

\`\`\`ini

\# ~/.hermes/hermes-agent/.env

GLM\_API\_KEY=你的BigModel密钥

GLM\_BASE\_URL=[https://open.bigmodel.cn/api/paas/v4](https://open.bigmodel.cn/api/paas/v4)

\`\`\`

\`\`\`yaml

\# ~/.hermes/config.yaml (自动修改)

model:

default: GLM-4.7-Flash

\`\`\`

\---

\### 🧪 验证测试

\- 启动 Hermes`hermes`

\- 输入：“你好”

\- 返回：Hermes 自我介绍并列举能力，回复正常，上下文用量 19.8K/200K（10%）

\---

\### 🎓 模型选择总结

| 方案 | 可用性 | 费用 | 结论 |

|------|--------|------|------|

| 阿里云百炼 | 未成功配置 | 免费额度 | 暂未使用 |

| [Z.ai](http://Z.ai) (智谱国际) | 免费模型已下线 | 无免费 | 放弃 |

| BigModel (智谱国内) | ✅ 正常 | 免费 2000万 tokens | \*\*最终采用\*\* |

| OpenRouter | 备选方案 | 有免费模型 | 后续可尝试 |

\---

\### 💡 图形化界面探索

\- Hermes WebUI：通过 Docker 部署，浏览器访问 `localhost:3001`，可直接对接现有 WSL2 中的 Hermes 配置。

\- Hermes Desktop：独立 Windows 应用，需重新配置，暂时不采用。

\- 决定优先使用命令行完成本周任务，图形化界面留待后续优化。

\---

\### 📦 产出与下一步

\- ✅ 创建 GitHub 学习仓库（待补充链接）

\- ✅ 本次笔记归档至 `notes/week1-hermes-setup.md`

\- ⏭️ 下一步任务：

\- 用 Hermes 生成 LLM/Agent 概念笔记

\- 创建 Web3 测试钱包，完成一笔测试网交易

\- 完成最小交叉实验（AI 输出 → 人工复核 → 链上执行）

\---

\### 📌 重要经验

\- \*\*环境变量优先\*\*：Agent 框架通常通过 `.env` 和 config.yaml 控制模型，而不是直接修改代码。

\- \*\*API 兼容性\*\*：很多国产模型都支持 OpenAI 接口格式，只需改 base\_url 和 api\_key。

\- \*\*免费模型选择\*\*：密切关注平台公告，模型生命周期和免费政策会动态调整。

\- \*\*学习记录是关键\*\*：所有操作、错误和解决过程都应写下来，形成可回溯的材料。

\---

_本笔记由 Hermes Agent (GLM-4.7-Flash) 辅助整理，人工审核后归档。_
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->





\### 📝 任务1：搭建Learning Agent（Hermes）— 进度与困惑记录

**📅 打卡日期：** 2026年5月19日

**🧰 当前环境：** Windows + WSL2（已安装）

**🔧 正在搭建的工具：** Hermes Agent

**🔑 API状态：** 已获取免费模型API（但还在选择用哪个模型）

\---

\#### ✅ 已完成的工作

1\. **WSL2环境已安装就绪**

\- 可以在Windows下运行Linux子系统，为Hermes等工具提供了运行环境。

2\. **初步了解Hermes**

\- 知道它是一个可以接入不同大模型API的Agent工具，适合做学习助手的搭建。

3\. **已获取免费API**

\- 已在某个平台（[如Z.ai](http://如Z.ai)、GLM或DeepSeek等）申请了免费API Key，暂时不需要充值。

\---

\#### ❌ 当前卡住的问题（核心困惑）

1\. **免费模型太多，不知道怎么选**

\- 手里有几个候选：GLM-4-flash、DeepSeek-V3、Qwen-turbo、[Z.ai](http://Z.ai)免费版等。

\- 纠结点：

\- 哪个和Hermes兼容性最好？（有些模型API格式不一样，怕接不上）

\- 哪个在免费额度下性能够用？（怕跑不动Hermes的完整功能）

\- 哪个回复质量适合做学习辅助？（怕生成的学习计划太水）

2\. **不确定怎么把免费API接入Hermes**

\- 是直接在Hermes的配置文件里改Base URL和API Key？还是需要额外写代码？

\- 不同平台的API格式（如OpenAI兼容格式、智谱格式、DeepSeek格式）怎么统一适配？

\- 没找到特别清晰的教程，怕自己配错了跑不起来。

3\. **Hermes的搭建方法不明确**

\- 是在WSL2里直接git clone下来运行？还是需要pip install特定包？

\- 需不需要提前装Node.js或Docker？（有些Agent工具需要这些依赖）

\- 怕装了半天发现差某个依赖，又得重新搞。

4\. **免费模型的限制有多大**

\- 免费版会不会有每分钟请求次数限制（RPM）或每天额度限制？

\- 万一在实验中途额度用完，会不会导致任务中断？

\- 生成学习计划、概念解释这些任务，大概会消耗多少token？心里没底。

5\. **还是没有完全搞懂“Agent”和“普通API调用”的区别**

\- 在Hermes里调用API，[和我在Python里直接requests.post](http://和我在Python里直接requests.post)调用API，本质上有什么不同？

\- Agent到底“智能”在哪里？是不是只是多了一个Prompt模板和上下文管理？

\- 担心自己理解偏了，后面的作业基础打歪。

\---

\#### 💡 我的下一步打算（明确计划）

1\. **先选一个免费模型试水**

\- 初步决定：优先选 **GLM-4-flash**（智谱免费版），或者 **DeepSeek-V3**（也是免费且API格式兼容OpenAI）。

\- 理由：这两个模型对中文理解好，API文档清晰，且免费额度够学习使用。

2\. **先在WSL2里用Python跑通一个最简单的Hermes demo**

\- 不追求完美配置，先验证API能不能通。

\- 如果官方的Hermes安装太复杂，先找个替代方案（比如直接用LangChain或简单的Python脚本模拟Agent行为）。

3\. **先完成“对话任务”的最小闭环**

\- 不纠结高大上的配置，直接用Hermes或脚本把Week1大纲扔进去，看到输出就收货。

\- 哪怕只是让AI生成一个简单的学习计划表格，也算任务完成。

4\. **记录每一步踩的坑**

\- 把API配置、依赖安装、报错信息都截图或记下来，后面也好复盘。

\---

\#### ❓ 待解决的新问题清单（留给后续）

1\. WSL2里运行Hermes时，如果有网络代理问题怎么处理？

2\. 免费API的Key如果到期了，怎么快速续期或换新的？

3\. 如果Hermes不支持某个模型格式，有没有办法用Python做个中转适配层？

4\. 后续任务2、3会不会要求必须用付费版模型才能完成？
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->






\### 📚 每日学习笔记：从LLM到Agent工作流

**日期：** 2026年5月18日

**学习模块：** AI基础（LLM原理与 Agent Workflow）

**核心目标：** 理解“模型”（只会说话）和“智能体”（能干活的机器人）的区别，以及如何控制它们。

\#### 1. 搞懂 LLM 的“人设”与“脑容量”

\* **它像什么？** 一个\*\*疯狂爱“接话茬”\*\*的聊天高手。

\* **底层逻辑：** 它不停预测下一个字/词，所以擅长文字、代码和推理。

\* **它的弱项：** 精算数学、记死信息、跨会话的记忆（聊完就忘）。

\* **控制它的“四大金刚”：**

1\. **窗口（工作内存）：** 能同时记多少东西，满了就忘。

2\. **系统指令（设定人设）：** 你是谁（比如“你是专业医生”）。

3\. **提示词（给出任务）：** 你到底要干嘛。

4\. **工具调用（给它手脚）：** 让它去联网、去查数据库、去画画。

\#### 2. 最容易混淆的三个概念（💡必考点）

| 类型 | 通俗比喻 | 主要特点 | 什么时候用？ |

| :--- | :--- | :--- | :--- |

| **Prompt (提示词)** | **给大厨看菜谱** | 人决策，模型只回答。 | 一问一答，不需要复杂流程。 |

| **Workflow (工作流)** | **自动炒菜机** | 流程固定，人工写死步骤。 | 流程确定不变，如文档翻译、表格处理。 |

| **Agent (智能体)** | **全能自动机器人** | 自己规划任务，会动态拿工具，有跨轮记忆。 | 开放性问题，无法提前写完所有步骤。 |

\#### 3. AI 写代码（Cursor/Claude Code）怎么用？

\* **优点：** 超级给力！能光速生成各种样板代码、解释你看不懂的老代码、快速搭个原型。

\* \*\*巨大坑点（避雷区）：\*\* **绝对不要让它完全取代你的思考和架构**。代码审查（Code Review）、系统架构设计、关键测试（Test）必须你自己人工把关，否则代码会跑得乱七八糟。

\#### 4. 千万别信AI的“鬼话”（必须验证的核心原因）

AI 输出的内容，必须像法官审案一样去核查，因为：

\* **编造事实：** 它没钱了查不到数据，就自己瞎编一个。

\* **逻辑漂移：** 聊着聊着，逻辑跑到外太空去了。

\* **伪造引用：** 它给你引用个论文或新闻，可能根本不存在。

\* **执行越权：** 如果你给了它操作权限，它可能把服务器删了（所以必须有\*\*安全护栏\*\*和\*\*人工兜底\*\*）。

\#### 5. 到底要不要用“Agent”？

\* **🟢 适合用Agent的场景：** 目标很模糊（比如“规划一次智能旅行”）、需要跨多个工具协作、不知道下一步会发生什么。

\* **🔴 不要盲目用Agent的场景：** 简单的问答（直接用Prompt）、固定流程的任务（直接写脚本/Workflow）、需要极高确定性的事情（比如算账）。

\#### 6. 参考资料食用指南（直接上手推荐）

\* **想快速摸清AI原理：** 看推荐材料中的 **视频1 (What is a Large Language Model?)**

\* **想上手写代码调API：** 看 [**Z.ai**](http://Z.ai) **API开发者文档** 或 **OpenAI/Anthropic 官方文档**（最快上手只需5分钟）。

\* **想搞懂Agent：** 必看 **视频8 (AI Agent入门)** 和 **LangGraph Overview**。

\---

\### 🎉 本日总结

不要把大模型当成万能的“上帝”，把它当作一个\*\*“能力很大、智商很高、但不懂事容易撒谎的实习生”\*\*。\*\*人的核心价值在于：架构设计、安全兜底（人工审核）、以及定义明确的业务流程。\*\* 控制AI，而不是被AI控制！打卡完毕 ✅
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
