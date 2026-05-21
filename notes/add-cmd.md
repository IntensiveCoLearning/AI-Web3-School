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
