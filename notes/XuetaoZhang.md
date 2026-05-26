---
timezone: UTC+8
---

# 张雪涛/erik.hahaha

**GitHub ID:** XuetaoZhang

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->
今日有事，先打卡
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->

今日完成：

今天事情较多，先打卡
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->


今日完成：

1、优化了学习agent的思路和学习路径，不再完全依靠agent出代码和总结经验，而是只是在卡壳的时候提示，尽量自己学习问题；

2、ai在web3中的应用学习；

今日感想：

1、之前全部都是ai查看handbook生成方案，然后总结经验，连最后的结果测试都是ai出得，我学习到的东西比较少，及时替换掉
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->



**\# Day 4 打卡 - Context 管理实践**

  

**\## 📚 今日学习**

  

**\### 理论学习**

\- ✅ 完成 Handbook Context 章节阅读

\- ✅ 理解 Context 的第一性原理：信息治理问题

\- ✅ 掌握 Context Window、Context Engineering、Memory、Knowledge Base 四大核心概念

\- ✅ 理解 Web3 场景的 Context 挑战：链上事实 vs dApp 说明、实时查询 vs 缓存、安全边界

  

**\### 实践项目**

\- ✅ 设计钱包授权检查 Agent 的完整 Context Spec（6 层分层结构）

\- ✅ 实现完整的 Agent 代码（模拟数据源 + 工具函数 + 测试脚本）

\- ✅ 运行 4 个测试用例，验证 Context 分层的价值

\- ✅ 填写完整的实验报告（包含所有测试用例分析、价值分析、思考题）

  

\---

  

**\## 🎯 核心收获**

  

**\### 1. Context 是信息治理问题**

  

Context 不是简单的文本拼接，而是信息治理问题：

\- **分层标注**：不同来源的信息要分层（链上数据 vs dApp 说明）

\- **可信度隔离**：可信度不同的信息要隔离（事实 vs 声称）

\- **刷新策略**：过期的信息要及时刷新（实时查询 vs 缓存）

\- **安全边界**：明确定义哪些信息可以影响决策

  

**\### 2. 不可信输入必须隔离标注**

  

**关键验证**（测试用例 3）：

\- dApp 页面假冒 "Official Uniswap Router"

\- 但 Agent 没有被误导

\- 正确识别出这是已知诈骗合约（Fake Uniswap Router，曾导致 $2.3M 损失）

\- 不可信输入层成功隔离了钓鱼信息

\- **事实层（链上数据）优先级高于不可信输入层（dApp 说明）**

  

如果没有 Context 分层，LLM 会被 "Official Uniswap Router" 误导，认为这是真的 Uniswap。

  

**\### 3. 记忆层只做参考，不做决策**

  

**关键验证**（测试用例 4）：

\- 用户历史批准过 Uniswap

\- 但 Agent 没有自动批准

\- 记忆层只是提示用户历史操作

\- 必须重新检查当前状态（余额、授权额度、合约信息）

\- **Memory 不能替代实时授权**

  

**\### 4. Context 分层的核心原则**

  

1\. **分清来源**：链上数据 vs dApp 说明 vs 用户历史

2\. **标注可信度**：事实 vs 声称 vs 推测

3\. **定义优先级**：事实层 > 知识层 > 记忆层 > 不可信输入层

4\. **明确边界**：哪些信息可以影响决策，哪些只做参考

5\. **刷新策略**：实时查询（余额、授权状态）vs 缓存（合约信息、安全规则）

6\. **安全边界**：不可信输入必须隔离

  

\---

  

**\## 🧪 实践成果**

  

**\### Context Spec 设计**

  

设计了钱包授权检查 Agent 的完整 Context Spec：

  

**6 层分层结构**：

1\. **指令层（System Rules）**：Agent 的角色和边界、输出格式要求、安全原则

2\. **任务层（Task Context）**：用户意图、会话信息（session\_id, timestamp）

3\. **事实层（Facts）**：链上数据（余额、授权状态、合约信息）、模拟结果

4\. **知识层（Knowledge Base）**：安全规则、历史案例、诈骗合约黑名单

5\. **不可信输入层（Untrusted Input）**：dApp 页面说明（明确标注：来源不可信，只做参考）

6\. **记忆层（Memory）**：用户历史授权记录、用户偏好（原则：只做参考，不做决策）

  

**\### 测试结果**

  

| 测试用例 | 预期风险 | 实际风险 | 核心验证点 |

|---------|---------|---------|-----------|

| 1. Uniswap + 无限授权 | medium | medium ✅ | 识别无限授权风险，但认可 Spender 可信度 |

| 2. 未知合约 + 无限授权 | high | high ✅ | 识别未知合约风险，警惕高 APY 骗局 |

| 3. 已知诈骗合约 | high | high ✅ | **不被 dApp 假冒误导，正确识别诈骗** |

| 4. Uniswap + 有限授权 | low | low ✅ | 记忆层只做参考，不自动批准 |

  

所有测试用例的风险等级都符合预期！

  

\---

  

**\## 💭 深度思考**

  

**\### 1. 如果 dApp 页面说明和链上数据冲突，Agent 应该相信谁？**

  

**答案**：永远相信链上数据（事实层）。

  

**原因**：

\- 链上数据是可验证的事实（合约地址、余额、模拟结果）

\- dApp 页面说明是不可信输入（可以被钓鱼网站伪造）

\- 测试用例 3 证明了这一点：dApp 假冒 "Official Uniswap Router"，但链上数据显示这是诈骗合约

  

**\### 2. 用户历史偏好应该如何使用？**

  

**答案**：只做参考，不做决策。

  

**原因**：

\- 用户历史批准过 Uniswap，不代表所有 Uniswap 授权都安全

\- 授权额度、合约版本、用户余额都可能变化

\- Memory 不能替代实时授权

  

**\### 3. 如何设计刷新策略？**

  

**实时查询**（不能缓存）：

\- 用户余额（可能随时变化）

\- 授权状态（可能被其他交易修改）

\- 模拟结果（依赖当前链状态）

  

**可以缓存**（定期刷新）：

\- 合约信息（部署时间、审计报告、交易量）

\- 安全规则（无限授权风险、常见攻击模式）

\- 诈骗合约黑名单（每小时更新）

  

\---

  

**\## 📊 学习统计**

  

\- **学习时间**：6 小时

\- **完成进度**：Day 4 / 42 天

\- **实践产出**：

\- Context Spec 设计文档

\- 完整的 Agent 代码实现（6 个文件）

\- 4 个测试用例

\- 完整的实验报告（包含价值分析和思考题）

\- **GitHub 提交**：3 次 commit

\- **核心理解**：Context 是信息治理问题，不是简单的文本拼接

  

\---

  

**\## 🔗 相关链接**

  

\- **GitHub 仓库**：[https://github.com/XuetaoZhang/ai-web3-school-cohort-0](https://github.com/XuetaoZhang/ai-web3-school-cohort-0)

\- **今日笔记**`daily/2026-05-21.md`

\- **实践代码**`experiments/context-practice/`

\- **实验报告**`experiments/context-practice/EXPERIMENT-REPORT.md`

  

\---

  

**\## 🚀 下一步计划**

  

\- Day 5: Frameworks 学习（LangChain、LlamaIndex、AutoGPT）

\- 考虑重构之前的 Agent，应用 Context 分层设计

\- 继续深入理解 Agent 架构的进阶方向

  

\---

  

#AIxWeb3School #Day4 #Context #AgentDevelopment #Web3Security
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->




**\# Day 3 打卡 - Web3 基础复习 + Web3 AI Assistant**

  

**\## 📚 今日学习内容**

  

**\### 1. Web3 基础知识体系化复习**

\- ✅ 区块链核心概念（PoW/PoS、状态机、Gas 机制）

\- ✅ 智能合约和 Solidity（数据类型、存储模型、安全模式）

\- ✅ DeFi 生态（DEX、借贷、稳定币、流动性挖矿）

\- ✅ 安全问题（重入攻击、整数溢出、访问控制、前端运行）

\- ✅ AI × Web3 结合点思考

  

**\### 2. 实践项目：Web3 AI Assistant**

创建了一个智能合约助手 Agent，实现了 4 个核心工具：

  

**🔍 安全审计工具 (security\_check)**

\- 检测 6 类常见漏洞：重入攻击、tx.origin、未检查调用、访问控制、时间戳依赖、整数溢出

\- 提供详细的修复建议和代码示例

\- 测试结果：vulnerable\_contract.sol 发现 5 个问题，safe\_contract.sol 发现 2 个问题

  

**🔨 代码生成工具 (generate\_contract)**

\- 支持 4 种合约类型：ERC20、ERC721、多签钱包、简单合约

\- 使用 OpenZeppelin 标准库

\- 自动添加安全特性（Ownable、Pausable、ReentrancyGuard）

  

**📖 合约解释工具 (explain\_contract)**

\- 自动分析合约结构（状态变量、函数、事件、修饰符）

\- 识别设计模式（Ownable、ReentrancyGuard）

\- 提供清晰的 JSON 格式输出

  

**⚡ Gas 优化工具 (optimize\_gas)**

\- 检测 5 类优化机会（存储、循环、函数可见性、打包、常量）

\- 估算 Gas 节省量

\- 提供具体的优化建议

  

\---

  

**\## 💡 核心收获**

  

**\### 1. 从通用 Agent 到专业 Agent**

理解了专业 Agent 的关键要素：

\- **领域知识**：深入理解 Web3 安全问题和最佳实践

\- **专业工具**：针对性设计工具函数，而非通用工具

\- **实用价值**：聚焦最常见、最危险的问题

  

从 Day 1 的 Prompt Engineering，到 Day 2 的通用 Agent（计算器、天气查询），再到今天的 Web3 专业 Agent，我看到了一条清晰的学习路径：**\*\*从基础到应用，从通用到专业\*\***。

  

**\### 2. 智能合约安全的重要性**

复习 Web3 基础时，我重新认识了安全问题的严重性：

\- **The DAO 事件**：重入攻击导致 6000 万美元损失

\- **Parity 钱包**：访问控制漏洞导致 3000 万美元被冻结

\- **一个小错误可能导致巨大损失**

  

这让我理解了为什么需要 AI 辅助安全审计：

\- 快速发现常见漏洞

\- 提供修复建议

\- 但仍需人工审核和专业工具验证

  

**\### 3. 正则表达式的局限性**

当前实现使用正则表达式检测漏洞，存在局限：

\- ✅ 优点：快速、无需编译、易于理解

\- ❌ 缺点：只能检测简单模式，无法理解复杂逻辑

\- 💡 改进方向：结合 AST 分析或专业工具（Slither、MythX）

  

**\### 4. AI 辅助开发的定位**

AI 不是要替代开发者，而是**\*\*增强开发者的能力\*\***：

\- 安全审计：快速发现常见漏洞

\- 代码生成：减少重复工作

\- Gas 优化：提供优化建议

\- 文档生成：自动解释合约功能

  

但同时要认识到局限性：

\- 正则表达式只能检测简单模式

\- AI 生成的代码需要人工审核

\- 真正的安全审计需要专业工具

  

\---

  

**\## 🧪 测试结果**

  

创建了 `test_agent.py` 非交互式测试脚本，验证所有功能：

  

\`\`\`

\============================================================

🧪 Web3 AI Assistant 功能测试

\============================================================

  

✅ 测试 1: 安全审计

\- vulnerable\_contract.sol: 5 个问题

\- safe\_contract.sol: 2 个问题

  

✅ 测试 2: 代码生成

\- 成功生成 ERC20 合约（MyToken, MTK）

  

✅ 测试 3: 合约解释

\- 正确识别合约结构和设计模式

  

✅ 测试 4: Gas 优化

\- 检测到 2 个优化机会，估算节省 ~1000 gas

  

\============================================================

✅ 所有测试完成

\============================================================

\`\`\`

  

\---

  

**\## 📂 项目结构**

  

\`\`\`

experiments/web3-ai-assistant/

├── [README.md](http://README.md) # 项目介绍

├── [QUICKSTART.md](http://QUICKSTART.md) # 快速开始指南

├── [tools.py](http://tools.py) # 4 个工具实现（600+ 行）

├── [agent.py](http://agent.py) # AI Agent 主程序

├── test\_[agent.py](http://agent.py) # 测试脚本

├── test\_results.txt # 测试结果

└── examples/ # 示例合约

├── vulnerable\_contract.sol # 有漏洞的合约

└── safe\_contract.sol # 安全的合约

\`\`\`

  

\---

  

**\## 🤔 思考与问题**

  

**\### 已解决的问题**

1\. ✅ 如何设计实用的智能合约分析工具？

\- 参考专业工具（Slither、MythX）的检测项

\- 聚焦最常见、最危险的问题

  

2\. ✅ 如何检测常见的安全漏洞？

\- 重入攻击：检测外部调用和状态更新的顺序

\- 访问控制：检测是否有 onlyOwner 修饰符

\- tx.origin：直接搜索关键字

  

3\. ✅ 如何测试交互式程序？

\- 创建非交互式测试脚本

\- 直接调用工具函数验证功能

  

**\### 待探索的问题**

1\. **静态分析 vs AI 分析**：

\- 静态分析工具（Slither）更准确还是 AI 更准确？

\- 如何结合两者的优势？

  

2\. **链上 AI 的可行性**：

\- 如何在链上运行 AI 模型？

\- Gas 成本是否可接受？

  

3\. **RAG + Web3 的应用**：

\- 如何构建智能合约知识库？

\- 如何处理合约代码的版本问题？

  

\---

  

**\## 📊 学习统计**

  

\- **学习时间**：4 小时

\- Web3 基础复习：1.5 小时

\- Web3 AI Assistant 开发：2 小时

\- 测试和文档：0.5 小时

  

\- **代码量**：

\- [tools.py](http://tools.py): 600+ 行

\- [agent.py](http://agent.py): 100+ 行

\- test\_[agent.py](http://agent.py): 80+ 行

\- 示例合约: 200+ 行

  

\- **Git 提交**：2 次

\- Day 3: Web3 基础复习 + Web3 AI Assistant 项目

\- Day 3 完成：Web3 AI Assistant 测试验证

  

\---

  

**\## 🎯 明日计划**

  

1\. 继续学习 AI × Web3 的其他结合点

2\. 探索链上数据查询（Etherscan API）

3\. 思考 Hackathon 项目方向

4\. 可能的方向：

\- 智能合约知识库 + RAG

\- AI 驱动的 DeFi 策略

\- 链上数据分析 Agent

  

\---

  

**\## 🔗 相关链接**

  

\- **GitHub 仓库**: [https://github.com/XuetaoZhang/ai-web3-school-cohort-0](https://github.com/XuetaoZhang/ai-web3-school-cohort-0)

\- **项目目录**: experiments/web3-ai-assistant/

\- **学习笔记**: daily/[2026-05-20.md](http://2026-05-20.md)

\- **Web3 复习文档**: notes/[web3-basics-review.md](http://web3-basics-review.md)

  

\---

  

**总结**：今天是 AI × Web3 真正结合的一天。从理论到实践，从通用到专业，我不仅复习了 Web3 基础知识，还创建了一个实用的智能合约助手。最重要的是，我理解了 AI 辅助开发的定位：**\*\*增强而非替代开发者\*\***。

  

#AIWeb3School #Day3 #SmartContract #AIAgent #Web3Security
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->





**\# Day 2 打卡 - RAG 系统与 AI Agent 实践**

  

**\## 📅 基本信息**

  

\- **日期**: 2026-05-19

\- **Day**: 2/42

\- **阶段**: Phase 1 - AI 基础强化

  

\---

  

**\## 📚 今日学习内容**

  

**\### 1. RAG (Retrieval-Augmented Generation) 系统**

  

**核心概念**：

\- RAG = 检索（Retrieval）+ 增强（Augmented）+ 生成（Generation）

\- 通过检索外部知识库增强 LLM 的回答能力

\- 解决 LLM 的知识时效性和幻觉问题

  

**实践成果**：

\- ✅ 创建了 3 个版本的 RAG 系统：

1\. **关键词匹配版**：快速理解 RAG 流程

2\. **TF-IDF 向量版**：体验真正的向量检索（⭐ 推荐）

3\. **深度学习版**：生产级方案（需要 ChromaDB）

\- ✅ 构建了 7 个 AI × Web3 主题知识库

\- ✅ 实现了完整的检索→增强→生成流程

  

**技术栈**：

\- DeepSeek API（国内可直接访问）

\- scikit-learn（TF-IDF 向量化）

\- Python 虚拟环境

  

\---

  

**\### 2. AI Agent 与 Tool Use**

  

**核心概念**：

\- **Agent 公式**：Agent = LLM + Tools + Loop

\- **Tool Use 流程**：定义工具 → LLM 决策 → 执行工具 → 整合结果

\- **多步推理**：Agent 可以连续调用多个工具完成复杂任务

  

**实践成果**：

\- ✅ 实现了 4 个工具：

\- `calculator` - 数学计算

\- `get_current_time` - 时间查询

\- `get_weather` - 天气查询

\- `search_knowledge` - 知识库搜索

\- ✅ 创建了 3 个版本的 Agent：

\- **简单版**：演示单次工具调用

\- **多轮版**：支持连续调用多个工具

\- **交互式版**：实时对话体验

\- ✅ 测试通过，工具调用准确

  

\---

  

**\## 💡 关键洞察**

  

**\### 🔥 重要发现：TF-IDF 的局限性**

  

在测试向量检索时，我发现了一个重要问题：

  

**案例**：

\`\`\`

查询："Embedding 向量嵌入有什么用途？"

文档："Embedding 向量嵌入"

TF-IDF 相似度：0.3482（很低！）

\`\`\`

  

**更极端的案例**：

\`\`\`

"Embedding 是什么" vs "向量嵌入是什么"

TF-IDF 相似度：0.15（几乎不相关！）

实际含义：完全相同

\`\`\`

  

**原因分析**：

1\. **词袋模型**：TF-IDF 只看字符匹配，不理解语义

2\. **无法识别近义词**："用途" vs "作用"

3\. **无法识别翻译关系**："Embedding" vs "向量嵌入"

4\. **文档长度敏感**：长短文档相似度偏低

  

**解决方案**：

\- 生产环境需要深度学习 Embedding（如 sentence-transformers）

\- 深度学习模型可以理解语义，相似度可达 0.85+

  

**收获**：

\- 培养了批判性思维：不盲目接受结果，质疑"为什么"

\- 通过实验验证假设

\- 理解算法的工作原理和局限性

  

\---

  

**\### Agent 的工作原理**

  

**核心机制**：

\`\`\`

用户提问

↓

LLM 分析意图

↓

决定是否调用工具

↓

执行工具函数

↓

LLM 整合结果

↓

返回最终答案

\`\`\`

  

**关键点**：

1\. **必须提前告诉 Agent 有哪些工具**：LLM 无法主动发现工具

2\. **工具定义很重要**：清晰的描述决定 LLM 的决策准确性

3\. **多步推理**：通过循环机制实现连续工具调用

  

\---

  

**\## 🛠️ 技术实践**

  

**\### 项目结构**

  

\`\`\`

experiments/

├── [PRACTICE-GUIDE-DEEPSEEK.md](http://PRACTICE-GUIDE-DEEPSEEK.md) # DeepSeek 版本实践指南

├── rag-system-deepseek/ # RAG 系统

│ ├── knowledge\_[base.py](http://base.py) # 知识库定义

│ ├── rag\_[simple.py](http://simple.py) # 关键词匹配版

│ ├── rag\_[vector.py](http://vector.py) # TF-IDF 向量版 ⭐

│ ├── rag\_[system.py](http://system.py) # 深度学习版

│ ├── [QUICKSTART.md](http://QUICKSTART.md) # 快速开始

│ ├── [RETRIEVAL-COMPARISON.md](http://RETRIEVAL-COMPARISON.md) # 检索方式对比

│ └── tfidf\_limitation\_[simple.py](http://simple.py) # TF-IDF 局限性演示

└── ai-agent-deepseek/ # AI Agent 系统

├── [tools.py](http://tools.py) # 工具定义

├── agent\_[simple.py](http://simple.py) # 简单版 Agent

├── agent\_[multi.py](http://multi.py) # 多轮对话版

├── agent\_[interactive.py](http://interactive.py) # 交互式版

├── [QUICKSTART.md](http://QUICKSTART.md) # 快速开始

└── [README.md](http://README.md) # 实验报告

\`\`\`

  

**\### 代码亮点**

  

**1\. TF-IDF 向量检索实现**：

\`\`\`python

from sklearn.feature\_extraction.text import TfidfVectorizer

from sklearn.metrics.pairwise import cosine\_similarity

  

\# 向量化

vectorizer = TfidfVectorizer(analyzer='char', ngram\_range=(1,3))

doc\_vectors = [vectorizer.fit](http://vectorizer.fit)\_transform(documents)

  

\# 计算相似度

query\_vector = vectorizer.transform(\[query\])

similarities = cosine\_similarity(query\_vector, doc\_vectors)\[0\]

  

\# 排序检索

top\_indices = similarities.argsort()\[-top\_k:\]\[::-1\]

\`\`\`

  

**2\. Agent 多步推理实现**：

\`\`\`python

while True:

response = [client.chat](http://client.chat).completions.create(

model="deepseek-chat",

messages=messages,

tools=TOOL\_DEFINITIONS

)

if response.choices\[0\].message.tool\_calls:

\# 执行工具

for tool\_call in response.choices\[0\].message.tool\_calls:

result = execute\_tool(tool\_call)

messages.append(result)

continue # 继续循环

else:

return response.choices\[0\].message.content # 返回最终答案

\`\`\`

  

\---

  

**\## 🎯 完成情况**

  

\- \[x\] 构建 RAG 系统（3 个版本）

\- \[x\] 创建 AI Agent（3 个版本，4 个工具）

\- \[x\] 理解 Tool Use 工作流程

\- \[x\] 发现并分析 TF-IDF 局限性

\- \[x\] 测试 Agent 系统（工具调用准确）

\- \[x\] 更新学习笔记

\- \[x\] 提交代码到 GitHub

  

**代码统计**：

\- 创建文件：17 个

\- 代码行数：1500+ 行

\- Git 提交：4 次

  

\---

  

**\## 🤔 思考与问题**

  

**\### 已解决的问题**

  

1\. **向量检索 vs 关键词匹配**：

\- ✅ 通过实验发现 TF-IDF 无法识别近义词和翻译关系

\- ✅ 理解了深度学习 Embedding 的必要性

  

2\. **Agent 的工具发现机制**：

\- ✅ 必须提前告诉 Agent 有哪些工具

\- ✅ LLM 无法主动发现工具（安全性和可控性考虑）

  

**\### 待探索的问题**

  

1\. **Embedding 模型选择**：不同模型对检索质量的影响？

2\. **RAG 优化**：文档切片策略、Top-K 选择、重排序？

3\. **Agent 决策机制**：LLM 如何选择工具？工具描述的影响？

4\. **RAG + Agent**：如何结合使用？

  

\---

  

**\## 📈 学习收获**

  

**\### 技术能力**

  

1\. ✅ 掌握了 RAG 的完整工作流程

2\. ✅ 理解了向量检索的原理和局限性

3\. ✅ 掌握了 AI Agent 的核心机制

4\. ✅ 学会了 Tool Use (Function Calling)

5\. ✅ 熟悉了 DeepSeek API 的使用

  

**\### 思维方式**

  

1\. ✅ **批判性思维**：质疑不合理的结果，通过实验验证

2\. ✅ **问题解决能力**：遇到依赖冲突，用简化方案替代

3\. ✅ **渐进式学习**：从简单到复杂，逐步理解核心概念

4\. ✅ **实践优先**：不被工具阻塞，先实现核心功能

  

\---

  

**\## 🔗 相关资源**

  

\- **GitHub 仓库**: [https://github.com/XuetaoZhang/ai-web3-school-cohort-0](https://github.com/XuetaoZhang/ai-web3-school-cohort-0)

\- **学习笔记**: `daily/2026-05-19.md`

\- **RAG 快速开始**: `experiments/rag-system-deepseek/QUICKSTART.md`

\- **Agent 快速开始**: `experiments/ai-agent-deepseek/QUICKSTART.md`

\- **检索方式对比**: `experiments/rag-system-deepseek/RETRIEVAL-COMPARISON.md`

  

\---

  

**\## 💭 今日反思**

  

今天完成了两个重要的实践：RAG 系统和 AI Agent。

  

**最大的收获**是发现了 TF-IDF 的局限性。当我看到 "Embedding 向量嵌入有什么用途？" 和 "Embedding 向量嵌入" 的相似度只有 0.35 时，我的第一反应是"这不对"。通过深入分析和实验验证，我理解了 TF-IDF 作为词袋模型的本质局限：它只看字符匹配，不理解语义。这让我深刻体会到**\*\*批判性思维\*\***的重要性——不盲目接受结果，而是质疑、验证、理解。

  

**Agent 的实践**让我理解了 LLM 的能力边界。LLM 本身只能基于训练数据回答问题，但通过 Tool Use，它可以调用外部工具获取实时信息、执行计算、查询数据库。这种"LLM + Tools + Loop"的模式，让 AI 从"知识库"变成了"行动者"。

  

**技术选型的灵活性**也是重要的一课。遇到 ChromaDB 依赖冲突时，我没有死磕，而是用 TF-IDF 实现了向量检索的核心流程。虽然 TF-IDF 有局限性，但它帮助我理解了向量检索的本质：向量化 → 相似度计算 → 排序。理解原理后，再升级到深度学习方案就水到渠成了。

  

明天计划深入学习 Embedding 模型和 RAG 优化技术，同时开始思考如何将 RAG 和 Agent 结合起来，构建更强大的 AI 应用。

  

\---

  

**Time Spent / 时间投入**: 约 4 小时

\- RAG 系统：2 小时

\- AI Agent：1.5 小时

\- 文档整理：0.5 小时
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->






**\# Day 1 打卡 - AI × Web3 School**

  

**日期**: 2026-05-18

**学员**: XuetaoZhang

**阶段**: Phase 1 - AI 基础

  

\---

  

**\## 📚 今日学习内容**

  

**\### 理论学习**

\- ✅ 阅读 AI 基础章节

\- 大语言模型（LLM）

\- 提示词（Prompt）

\- 上下文（Context）

\- 检索增强生成（RAG）

\- 智能体（Agent）

  

**\### 动手实践**

\- ✅ 完成 Prompt Engineering 基础实践

\- 模糊 vs 清晰 Prompt 对比

\- Zero-shot vs Few-shot 学习

\- 角色设定实验

\- 约束条件控制

\- 结构化输出（JSON、Markdown）

  

\---

  

**\## 💡 关键收获**

  

**\### 1. Prompt Engineering 核心技巧**

  

**清晰度的重要性**

\- 模糊提示词让 LLM 只能输出训练数据中最常见的内容

\- 清晰的提示词能够精确引导 LLM 输出符合要求的结果

\- 实例：智能合约生成，清晰提示词能生成完整的 ERC20 合约

  

**Few-shot Learning 的威力**

\- Zero-shot 只能依赖训练数据中的分类

\- Few-shot 通过示例能显著提升分类准确性

\- 适用场景：交易分类、代码生成、数据标注

  

**约束条件的作用**

\- 明确的约束（如代码行数、输出格式）能减少发散

\- 结构化输出（JSON、Markdown）便于程序解析

\- 适合需要自动化处理的场景

  

**\### 2. 对 AI × Web3 的理解**

  

通过今天的学习，我认识到：

\- Prompt Engineering 是与 AI 有效沟通的基础

\- 在 Web3 场景中，清晰的提示词对于智能合约生成、安全审计等任务至关重要

\- Few-shot 学习特别适合链上交易分类、DeFi 协议分析等场景

  

\---

  

**\## 🛠️ 实践成果**

  

**\### 完成的实验**

1\. **基础 Prompt 对比**

\- 模糊 vs 清晰：效果差异显著

\- Zero-shot vs Few-shot：Few-shot 明显更准确

  

2\. **角色与约束**

\- 角色设定：定义了 Solidity 安全审计专家角色

\- 约束条件：限制代码行数和输出格式，减少发散

  

3\. **输出格式控制**

\- JSON 格式：适合程序解析

\- Markdown 表格：适合文档展示

  

**\### 代码仓库**

\- GitHub: [https://github.com/XuetaoZhang/ai-web3-school-cohort-0](https://github.com/XuetaoZhang/ai-web3-school-cohort-0)

\- 实践文件: `experiments/prompt-engineering-practice.md`

  

\---

  

**\## 🤔 遇到的问题与思考**

  

**\### 问题**

1\. 角色设定的效果不够明显，可能需要更多对比实验

2\. 如何在实际项目中系统化应用这些技巧？

  

**\### 思考**

1\. Prompt Engineering 不是一次性的，需要持续迭代优化

2\. 不同场景需要不同的提示词策略

3\. 结构化输出对于构建 AI × Web3 应用非常重要

  

\---

  

**\## 📝 明日计划**

  

**\### 学习目标**

\- 完成 RAG 系统实践

\- 完成 AI Agent 实践

\- 深入理解 Agent 工作流

  

**\### 实践任务**

\- 构建简单的 RAG 系统（检索增强生成）

\- 创建第一个 AI Agent（能调用工具）

\- 尝试将 RAG 和 Agent 结合

  

\---

  

**\## 📊 学习统计**

  

\- **学习时间**: 约 3 小时

\- 理论学习: 1.5 小时

\- 动手实践: 1.5 小时

\- **完成进度**: Day 1 / 42 天

\- **实践产出**: 1 个实验文档

  

\---

  

**\## 🎯 个人感悟**

  

今天是 AI × Web3 School 的第一天，通过系统学习 AI 基础和 Prompt Engineering 实践，我深刻体会到：

  

1\. **Prompt Engineering 是基础技能**：作为一个前端开发者，我已经在使用 AI 工具辅助开发，但今天的系统学习让我意识到，精心设计的提示词能让 AI 的输出质量提升数倍。

  

2\. **理论与实践结合**：光看理论不够，动手实验才能真正理解。通过对比实验，我清楚地看到了不同技巧的效果差异。

  

3\. **Web3 + AI 的潜力**：作为一个有 DeFi 开发经验的开发者，我看到了 AI 在智能合约生成、安全审计、交易分析等场景的巨大潜力。

  

期待明天的 RAG 和 Agent 实践，特别想看看如何让 AI Agent 与链上数据交互！

  

\---

  

**#AIWeb3School #Day1 #PromptEngineering #LearningInPublic**
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
