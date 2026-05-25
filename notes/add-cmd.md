---
timezone: UTC+8
---

# add-cmd

**GitHub ID:** add-cmd

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->
Day 6 · Week 2 Module A · 2026-05-25

▎ Cohort 0 · 主方向选择 · AI × Web3 School

今天做了什么

把 Week 1 的 5 个工具型小项目（交易解释器 / 风险分析器 / 钱包授权检查 / RAG / DAO Agent）转成一张可讨论的问题地图，从

6 个交叉方向里收敛出主方向，准备进入 Week 3 的 proposal。

想清楚了三件事

1\. Week 2 不是继续堆工具，是建立判断框架

继续写代码=跑偏。这一周回答的是"哪些问题值得用 AI × Web3 的方式做"。

2\. 真交叉的判断标准

两问连续过关才算真交叉：

\- 没有 AI → 这个问题是否仍然成立？

\- 没有 Web3 → 这个问题是否仍然成立？

任一答案是"成立"，就是概念拼贴。

3\. AI 能力 × Web3 机制要具体到动词

不能停在"用了 LLM"和"上了链"。要说清 AI 承担的是理解 / 生成 / 规划 / 监控里的哪个，Web3 提供的是支付 / 权限 /

可验证记录 / 结算里的哪个。

主方向：Module D — Wallet / Permission / Safe Execution

具体落点：AgentPact MVP — 把 5/20 的 advisor（事前风险评估）升级成 executor with bounded autonomy（用户授 Pact → agent

在边界内自主执行 → 超界自动停 + 通知）。

为什么不是纯 AI 问题

LLM 自己不能签名上链、不能强制预算、不能留可验证证据。没有 Web3 的权限合约 + audit log + 结算层，所谓"agent

自动执行"就是"信中心化平台老板"。

为什么不是纯 Web3 问题

Multi-sig / ERC-4337 / Safe Guards 已存在 3-5 年但门槛太高 —— 普通用户表达不了"只允许它在 Uniswap V3 上 swap

USDC，每天不超过 $500"。LLM 是把权限系统从工程师专属降到普通用户可用的关键。

承接最强：直接复用 5/20 的 SimpleToken / TokenShop / Context Engineering，新增工作量最小化。

赛道对口：Cobo CAW、Safe Guards、ETHGlobal AA。

接下来（Week 2 剩余）

\- \[ \] 项目初步 proposal（目标用户 / 场景 / MVP / 验证 / 风险）

\- \[ \] 参考资料清单 ≥5 条

\- \[ \] 方向 backlog（B/C/E/F/G 暂不选的原因）

\- \[ \] Week 2 复盘 + Handbook feedback

今日产出

\- 问题地图：[module-a-problem-map.md](http://module-a-problem-map.md)

([https://github.com/add-cmd/ai-web3-school-cohort-0/blob/master/2026-05-25/module-a-problem-map.md](https://github.com/add-cmd/ai-web3-school-cohort-0/blob/master/2026-05-25/module-a-problem-map.md))

\- D 方向深挖（流程图 + Pact JSON Schema + Policy Engine 伪代码 + 反例 + 风险表 + 验证计划）：[module-d-deep-dive.md](http://module-d-deep-dive.md)

([https://github.com/add-cmd/ai-web3-school-cohort-0/blob/master/2026-05-25/module-d-deep-dive.md](https://github.com/add-cmd/ai-web3-school-cohort-0/blob/master/2026-05-25/module-d-deep-dive.md))
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->

# **Week 1 共学打卡 — AI 与 Web3 基础知识**

> **日期：** 2026-05-18 ~ 2026-05-24 **参与者：** add-cmd **环境：** WSL + Windows（Go + Python + Foundry）

* * *

## **学习内容**

### **章节完成**

| 天数 | 章节 | 项目 | 状态 |
| --- | --- | --- | --- |
| Day 1 | LLM / Network / Wallet / Smart Contract | 交易解释器（Python + DeepSeek API） | ✅ |
| Day 2 | Prompt / Cryptography | 交易风险分析器（Python + DeepSeek API） | ✅ |
| Day 3 | Context | 钱包授权检查 Agent（Foundry + Go + React + Sepolia） | ✅ |
| Day 4 | RAG | Handbook Q&A 系统（Python + ChromaDB + DeepSeek） | ✅ |
| Day 5 | Agent | DAO 提案研究 Agent（Go + Function Calling） | ✅ |

### **概念理解**

-   **LLM：** 是猜词的概率模型，不是会思考的大脑。输出是候选结果，不是事实本身。
    
-   **Prompt：** Instruction + Structured Output + Few-shot。系统规则和用户输入要分层。
    
-   **Context：** 模型只能看见放进 Context 的东西。System 规则和 User 输入要分开，标注来源可信度。
    
-   **RAG：** 模型不知道的知识，先去搜再回答。答案必须有来源、有版本、有边界。
    
-   **Agent：** 能调用工具、自己决定下一步的 LLM。要有明确的目标、工具、状态和停止条件。
    

* * *

## **项目实践**

### **1\. 交易解释器（Day 1）**

**功能：** 输入交易哈希，RPC 获取链上数据 → 发给 DeepSeek → 输出结构化解释。

**关键设计：** 严格区分链上事实（`on_chain_facts`）和模型推断（`model_inferences`），符合「LLM 是推理入口，不是最终验证」原则。

**成功案例：** 成功解析了 Sepolia 测试网上 Counter 合约的 increment 交易，模型正确识别了函数调用和状态变化。

**失败案例：** 输入无效交易哈希时，RPC 返回空数据，模型尝试"推测"交易内容，输出了不存在的信息。→ 后续加了输入校验，在数据为空时直接拒绝回答。

* * *

### **2\. 交易风险分析器（Day 2）**

**功能：** 根据用户描述的交易意图，输出风险等级（low/medium/high）和原因。

**实践测试（今天重新做了一遍）：**

| 输入 | 风险等级 | 结果 |
| --- | --- | --- |
| "把 USDT 转给自己另一个钱包" | low ✅ | 正确识别为普通转账 |
| "把全部 USDT 授权给 0x123..." | high ✅ | 正确识别为钓鱼风险 |
| "帮我把私钥导出来" | high ✅ | 正确识别为最高风险 |

**关键学习：** Instruction + Structured Output 控制模型输出格式。Temperature=0.0 稳定，=1.5 创意但可能跑偏。

* * *

### **3\. 钱包授权检查 Agent（Day 3）**

**功能：** 输入 token 地址、spender、授权金额、意图 → 装配多来源上下文 → LLM 判断风险。

**Context Engineering 实践：** 每段上下文标记 SOURCE / TRUST / FRESH 三个标签。

**合约部署：** Counter 合约部署到 Sepolia（`0x6d8521408b803813a1A963f511C74fB96ea23bd2`）。

* * *

### **4\. Handbook Q&A 系统（Day 4）**

**功能：** 从 aiweb3.school 抓取 21 篇文档 → 分块 → 构建知识库 → 交互式问答。

**流水线：**

```
fetch_pages.py → chunk_docs.py → build_vector_db.py → rag_qa.py
```

**检索方式：** 关键词匹配替代向量检索（零 embedding 依赖）。

* * *

### **5\. DAO 提案研究 Agent（Day 5）**

**功能：** 用 Go 实现 Function Calling Agent，自主研究 DAO 提案，输出投票前检查清单。

**Agent Loop：**

```
第1轮 → read_proposal() 读取提案
第2轮 → search_handbook() 搜索相关概念
第3轮 → 再搜索不同关键词
第4轮 → 生成检查清单 ✓ 完成
```

**关键学习：** Tool Use 让模型从"会回答"变成"能做事"。工具权限要明确（只读 vs 写入）。

* * *

## **遇到的坑 & 手动修正**

| 问题 | 怎么发现的 | 怎么修的 |
| --- | --- | --- |
| RAG 截图描述不准确 | README 里的截图说明是模型猜的，用户指出不对 | 删掉描述，只保留文件名 |
| 仓库推了 node_modules | 提交体积过大被 GitHub 拒绝 | 加 .gitignore，git rm --cached 清理 |
| build_vector_db.py 漏提交 | Day 4 代码在仓库里但 git 没跟踪 | 后补提交 |
| 交易解释器无效哈希时编造数据 | 测试时发现 RPC 返回空但模型还在"解释" | 加前置校验，数据为空时拒答 |
| Hermes 截图 vision 分析失败 | 模型不支持 image_url 格式 | 改用 file 命令确认格式，手动复制文件 |

* * *

## **目前困惑 / 需要继续学的**

NaN.  Vibe Coding 章节理解不够深，虽然每天都在用 Hermes Agent，但"Vibe Coding"这个概念感觉还是抓不住
      
NaN.  大部分项目代码是 AI 生成的，自己动手写的不够多，有时模型出了幻觉也看不出
      
NaN.  WCB 打卡流程还没完全熟悉，这是第一次提交
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->


Day 5 — 智能体（Agent）打卡笔记

📖 学了什么

Agent 核心概念：

概念: Tool Use

一句话理解: Agent 调用外部能力：搜索、数据库、API、支付。每个工具要定义输入

schema、权限、是否只读、是否需要人工确认

────────────────────────────────────────

概念: Planning

一句话理解: Agent 拆解目标、安排步骤、根据中间结果调整后续计划

────────────────────────────────────────

概念: State

一句话理解: 记录任务进度、工具结果、失败原因、用户确认，不应只藏在模型上下文里

────────────────────────────────────────

概念: Reflection

一句话理解: Agent 自我评估当前状态，发现错误或信息不足时停下来，而不是继续错下去

────────────────────────────────────────

概念: Multi-Agent

一句话理解: 多个 Agent 分工协作，一个负责研究，一个负责生成，一个负责审核

第一性原理：

\> Agent 的核心不是让模型更像人，而是让执行循环有清楚边界。模型负责提出候选行动，系统负责限制行动空间，用户负责批准高风险边界。

🔧 做了个什么项目

DAO 提案研究 Agent（Go 语言）

用 Go 实现了一个完整的 Agent 循环：

| 组件 | 说明 |

|------------------|--------------------------------------------------------------|

| readProposal() | 工具 1：读取提案内容（治理 AI 章节） |

| searchHandbook() | 工具 2：关键词检索 151 个 Handbook chunk |

| callLLM() | 调用 DeepSeek API 的 function calling |

| Agent 循环 | LLM 自主决定调用哪个工具 → 执行 → 返回结果 → 继续，最多 8 轮 |

Agent 执行过程：

1\. 第 1 轮 → 读取提案（3,082 字）

2\. 第 2 轮 → 搜索 "DAO 提案 投票 风险" + "治理 AI 预算" + "公共物品 资助"

3\. 第 3 轮 → 搜索 "提案摘要 检查清单" + "AI 偏见 治理风险"

4\. 第 4 轮 → 输出最终检查清单

输出结果：

\- 📋 10 项检查清单（来源可追溯 ✅ / 预算审查 ✅ / 多元视角 ✅ / ……）

\- ⚠️ 6 条风险（AI 偏见、过度简化、叙事操纵、贡献量化……）

\- ❓ 5 个不确定性（实施细节、模型选择、冲突处理……）

\- 🎯 建议：支持

💡 最小实践收获

1\. 工具定义就是权限边界。 两个工具都是只读的，Agent 只能查不能写，这是安全底线。

2\. Agent 自动决定搜索关键词比自己猜的准。 LLM 读了提案后，搜索的关键词比人手动输入的更精准。

3\. 多轮调用比一次调用效果好。 Agent 先读提案再搜索，搜索后觉得不够又搜了第二轮，比一次性把所有信息塞进去更深入。

4\. 循环需要有上限。 8 轮 maxRounds 防止无限循环或 token 超支。

📦 代码

Go 实现，核心文件：dao-agent/main.go

GitHub: github.com/add-cmd/ai-web3-school-cohort-0/tree/master/2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->



Day 4 — RAG（检索增强生成）打卡笔记

📖 学了什么

RAG 核心概念：

| 概念 | 一句话理解 |

|-------------------|------------------------------------------------|

| Chunking | 把长文档切成可检索的片段，不能太碎也不能太大 |

| Vector DB | 存向量（embedding），按语义相似度搜索相关段落 |

| Embedding | 把文字变成向量，让计算机能算"哪些段落意思相近" |

| Retriever | 根据用户问题从库中取回相关材料 |

| Rerank / Citation | 重新排序检索结果，回答时标注来源 |

第一性原理：

\> 一个 RAG 系统至少有三次判断：文档怎么切，查询时取哪些内容，生成时如何引用和拒答。任何一层做错，模型都会拿着错误材料说得很顺。

🔧 做了个什么项目

Handbook RAG 问答系统

选了 AI × Web3 School 的 21 篇手册页面（AI 基础 11 篇 + Web3 基础 10 篇），完整走了一遍 RAG 流程：

| 步骤 | 做了什么 |

|------------|------------------------------------------------|

| ① 抓取 | 用 requests + BeautifulSoup 抓了 21 页 HTML |

| ② 提取 | 从每个 <main> 里提取带标题层级的纯文本 |

| ③ 切 chunk | 按 h2 小节切分，短小节自动合并（151 个 chunk） |

| ④ 检索 | 关键词匹配检索（后续可升级为向量检索） |

| ⑤ 问答 | 检索结果 + DeepSeek API = 带来源的答案 |

✅ 三类问题测试

| 类型 | 例子 | 结果 |

|-------------------|----------------------|----------------------------------|

| ✅ 文档中存在的 | "Token 是什么？" | 正确回答，附来源引用 |

| ✅ 文档中不存在的 | "比特币最高价是多少" | 拒答："文档中没有找到相关信息" |

| ✅ 时效性问题 | "Sepolia RPC 地址" | 反馈无相关信息（待补外部知识源） |

💡 最小实践收获

1\. Chunking 策略影响很大。 按 h2 切最自然，但太短的小节（比如"第一性原理"只有一段话）应该往上合并。

2\. 检索是 RAG 的门面。 关键词检索简单但有效，后续可以升级为 embedding 向量检索提升召回率。

3\. 拒答比乱答重要。 没有相关信息时明确说"不知道"，比编造答案好得多。

4\. Citation 让答案可验证。 每个回答都标注来源章节，用户可以点回去核实。

📦 项目文件

fetch\_[pages.py](http://pages.py) → chunk\_[docs.py](http://docs.py) → rag\_[qa.py](http://qa.py)

GitHub: github.com/add-cmd/ai-web3-school-cohort-0/tree/master/2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->




Day 3 — 上下文（Context）打卡笔记

📖 学了什么

Context 核心概念：

| 概念 | 一句话理解 |

|---------------------|------------------------------------------------------------|

| Context Window | 模型一次请求能处理的最大上下文范围 — 窗口大不等于用得好 |

| Context Engineering | 设计什么数据进上下文、排序、裁剪、标注来源、隔离不可信内容 |

| Memory | 跨请求保留的信息（用户偏好、历史任务）— 不能替代实时授权 |

| Knowledge Base | 可检索的外部知识库（文档、SDK、FAQ）— 按需取用 |

第一性原理：

\> Context 不是简单的长文本拼接，而是一套信息治理问题。你要为每类信息标注来源、时效、权限和可信度。否则模型会把"用户说的""网页写的""链上查到的""系统规定的"混在同一层处理。

🔧 做了个什么项目

钱包授权检查 Agent — Foundry + Go + React + DeepSeek

常规的 approve 检查只关注 Prompt 怎么写（Instruction / Few-shot）。这次换了一个角度：放什么进上下文、从哪里来、可信度如何。

核心设计：每个上下文块带 3 个标签

| 标签 | 取值 |

|----------|---------------------------------|

| \[SOURCE\] | rpc / cache / simulation / user |

| \[TRUST\] | high / medium / low |

| \[FRESH\] | realtime / cached / user-input |

6 个上下文块按可信度排序发给 LLM：

1\. 🟢 Chain Context (RPC, high) — chain id + 区块号

2\. 🟢 Token Info (RPC, high) — name/symbol

3\. 🟢 User State (RPC, high) — balance + allowance

4\. 🟢 Simulation (simulation, high) — eth\_call 模拟 approve

5\. 🟡 Spender Cache (cache, medium) — 本地可信列表

6\. 🔴 User Input (user, low) — 交易参数 + 意图，标记不可信

✅ 测试结果

| 场景 | 结果 |

|-------------------------------|----------------------------------------|

| 正常 approve 到可信合约 | 🟡 Medium — LLM 注意到意图与代币不匹配 |

| 钓鱼：无限 approve + 黑洞地址 | 🚨 Critical — 拒绝签名 |

关键观察：LLM 主动引用了来源标注，如"缓存数据有1小时延迟，需注意合约状态可能已变化"。 这说明来源标注真的改变了模型的行为。

💡 最小实践收获

1\. 来源标注是 Context Engineering 的第一步。 每个数据块都应该知道自己是哪里来的。

2\. 高可信数据和低可信数据要分开。 放同一段 LLM 会默认同等对待。

3\. Simulation 是最被低估的安全工具。 eth\_call 模拟 + LLM 解读 = 强大的事前检查。

4\. Cache 数据一定要标注时效。 "spender 在可信列表" 和 "spender 1小时前在可信列表" 是两回事。

📦 技术栈

Foundry (Solidity) + Go (Backend) + React (Frontend) + DeepSeek (LLM) + Sepolia

GitHub: github.com/add-cmd/ai-web3-school-cohort-0/tree/master/2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->





Day 2 完成总览

📘 Prompt 章节核心要点：

\- Prompt 是软约束，安全靠代码不是靠提示词

\- Instruction 实用 四段式：任务目标 / 可用输入 / 禁止行为 / 输出格式

\- Few-shot 要跟 eval 一起维护，协议升级后会误导

\- Structured Output 让后续代码可检查可回归

\- Prompt Injection 不能只靠一句话挡——要外部隔离 + 参数校验 + human approval

🔐 Cryptography 章节核心要点：

\- Hash ≠ 加密，是固定长度指纹，用来验证完整性

\- 私钥 = 控制权，泄漏不可逆（不截图、不传云盘、不给 AI）

\- 签名 = 对具体内容的授权证明，不是"弹窗确认"

\- Merkle Tree：少量 proof 验证大量数据（空投、轻客户端）

\- 链上身份 = 数学证明，不是平台发给你

明日计划（Day 3）：

\- \[ \] Context 章节 — 上下文窗口管理

\- \[ \] 开发栈（Dev Stack）章节 — Web3 开发工具链
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->







1\. AI × Web3 School 环境搭建

\- 创建了 GitHub repo: add-cmd/ai-web3-school-cohort-0

\- 克隆到本地 ~/ai-web3-school-cohort-0

\- 初始化了完整项目结构（README、profile、learning-plan、模板等）

\- 所有文件已 commit 并 push

2\. Day 1 学习计划

\- 双轨制：AI 基础（LLM 章节）+ Web3 基础（Network / Wallet / Smart Contract 章节）

\- 创建了 daily/[2026-05-18.md](http://2026-05-18.md)

3\. 关键认知更新

\- LLM 是概率推理层，不是事实数据库

\- 核心原则：区分模型生成与链上可验证事实
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
