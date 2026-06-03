---
timezone: UTC+8
---

# YoungAd

**GitHub ID:** Aerdax

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->
**今日完成：** 阅读 MCP 章节，理清 MCP 协议的本质架构（Server / Client / Tool Schema / Permission 四层）；完成 Week 2 方向地图，确定主方向为企业级 AI Agent × Web3 支付与钱包管理，完成统一判断框架分析、问题拆解、项目 Proposal 初稿和参考资料清单。

**学到的关键点：** MCP Server 是真正运行的服务进程，不是描述文件；自然语言到工具调用的映射是 LLM（Agent）的能力，MCP 只是标准化执行层；协议统一（JSON-RPC 2.0），不同 MCP 服务客户端统一对接；部分 MCP 服务（如 Figma MCP）内部嵌套专有 AI 模型，形成两层 AI 分工架构。

**遇到的问题：** MCP 和 RAG / Agent 的关系一开始不清晰——理解后的结论是：三者独立存在，MCP 是工具接口标准，RAG 可以作为 MCP 工具暴露，Agent 是编排决策层，职责清晰分开。

**明日计划：** 完成 MCP 最小实践实验（只读 Server，接入企业 Agent 场景）；开始 Week 3 准备，接入 Testnet 支付层，跑通带链上支付的最小 demo。
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->

\# 2026-05-27 学习笔记  
  
\> WCB Learning：https://web3career.build/zh/programs/AI-Web3-School#tab=learning  
  
\## 今日任务  
  
\- \[x\] 阅读 Handbook：智能体（Agent）  
\- \[x\] 写笔记  
\- \[x\] 完成实践：DAO 提案研究 Agent（带权限升级）  
\- \[x\] 接入 WCB Agent API，更新学习工具规范  
\- \[ \] 完成今日打卡  
  
\## 学习路径  
  
今日选择：\*\*挑战路径\*\*（Handbook 章节 + 笔记 + 实验 + WCB API 工具接入）  
  
\## 笔记  
  
\### Handbook 阅读：智能体（Agent）  
  
\*\*核心定义：\*\*  
Agent 是能围绕目标持续调用工具、读取状态、调整步骤的 AI 系统。关键不在"像人"，而在于能否在\*\*明确权限和可审计流程\*\*里把建议推进到行动。  
  
\*\*第一性原理：\*\*  
\> Agent 不是自主权本身，而是\*\*被约束的执行循环\*\*。目标、工具、状态、权限和停止条件缺一不可。  
  
\*\*5 个知识节点：\*\*  
  
| 节点 | 一句话 | 关键认知 |  
|------|--------|---------|  
| Tool Use | 调用外部能力 | 读和写是不同风险等级，工具设计必须明确权限范围 |  
| Planning | 把目标拆成步骤 | 计划只是候选路线，不是授权 |  
| \*\*State\*\* | 任务进度和结果的外置记录 | 必须外置可查，不能只藏在 prompt 历史里 |  
| Reflection | Agent 检查中间结果 | 自我检查提高质量，但不能替代外部验证 |  
| Multi-Agent | 多 Agent 分工 | 先问：是否真的减少了复杂度？ |  
  
\*\*对我认知的校正：\*\*  
之前理解 Agent 是"调用模型前用多个环节丰富 prompt"——这只描述了入口。真正的 Agent 是一个\*\*循环\*\*：模型调用是循环里的一个节点，调用后还要读工具结果、更新 State、再决策，直到满足停止条件。  
  
\*\*AI × Web3 关键结论：\*\*  
\> 最危险的设计是让 Agent 同时拥有\*\*模糊目标、广泛工具、长期记忆和大额资产权限\*\*。  
  
稳健的 AI × Web3 Agent 架构：只读步骤自动执行 → 写入步骤进入 policy 检查 → simulation 展示链上影响 → 用户确认 → 钱包执行 → 日志记录。  
  
\### 代码 / 实验  
  
\*\*实践：DAO 提案研究 Agent（含权限升级版本）\*\*  
\- 路径：\`experiments/dao-agent/\`  
\- 数据源：Snapshot GraphQL API（真实 ENS DAO 提案）  
\- LLM：Groq llama-3.1-8b-instant（json\_mode 强制 JSON 输出）  
  
\*\*State 结构（演示核心）：\*\*  
\`\`\`python  
@dataclass  
class AgentState:  
proposal\_id / title / text / choices # 输入层  
pros / cons / risks / missing\_info # 分析层（每步写入）  
checklist / verdict # 判断层  
vote\_draft / user\_confirmed / confirmation\_time # 权限升级层  
steps\_completed / sources\_used / errors # 审计层  
\`\`\`  
  
\*\*5 步执行流程：\*\*  
\`\`\`  
Step 1: fetch\_proposal → 只读，Snapshot API  
Step 2: analyze\_content → LLM 分析 pros/cons/risks  
Step 3: identify\_gaps → LLM 找缺失信息  
Step 4: build\_checklist → LLM 生成检查清单 + verdict  
Step 5: simulate\_vote → 权限升级，需 3 次人工确认  
\`\`\`  
  
\*\*权限升级的 3 道门：\*\*  
1\. 用户主动选择进入（\`是否进入投票模拟步骤？\`）  
2\. policy 检查 verdict：high\_risk 需输入 OVERRIDE / needs\_review 再次确认  
3\. 展示草稿后最终确认，时间戳写入 State 审计轨迹  
  
\*\*踩到的坑：\*\*  
1\. Groq llama-3.1-8b-instant 不老实返回 JSON，用 \`response\_format: json\_object\` 解决  
2\. \`identify\_gaps\` 解析失败会阻断后续所有步骤——改为失败降级（空列表 + 继续）而非硬停止  
  
\*\*运行方式：\*\*  
\`\`\`bash  
cd experiments/dao-agent  
.venv/bin/python dao\_agent.py \[snapshot\_proposal\_id\]  
\`\`\`  
  
\### WCB Agent API 接入  
  
今天完成了 WCB Agent API 的完整接入和规范化：  
\- 确认可用 procedures（events、program、tasks 等）  
\- 修正 secret key 变量名为 \`WCB\_AGENT\_SECRET\_API\_KEY\`（对齐官方文档）  
\- 发现 Handbook 可直接读取（需绕过本地代理），更新了 CLAUDE.md 访问规范  
\- 新会话启动时会自动拉取今日活动 Zoom 链接和当周课程目标  
  
\### 卡点 & 疑问  
  
\- State 如何持久化（断点续跑）？目前每次运行重新拿 API，生产场景需要序列化到磁盘或 DB  
\- 多步 Agent 里，每个 step 的 LLM prompt 如何做版本管理？prompt 变了结果可能完全不同  
\- \`simulate\_vote\` 的 policy 检查目前是硬编码在代码里的，真实系统应该是可配置的规则引擎  
  
\## 打卡草稿  
  
\> 以下内容用于复制到打卡平台，手动提交。  
  
\*\*今日完成：\*\*  
阅读 Handbook Agent 章节，完成 DAO 提案研究 Agent 最小实践（experiments/dao-agent/）。实现了显式 State 管理的 5 步执行流程（Snapshot API 读取 → LLM 分析 → 识别缺口 → 生成检查清单 → 权限升级投票模拟），并为写入步骤设计了 3 道人工确认门。另完成 WCB Agent API 接入，学习工具链现在可自动读取课程活动和 Handbook 内容。  
  
\*\*学到的关键点：\*\*  
Agent 不是"调用模型前丰富 prompt 的流程"，而是一个以 State 为核心的执行循环：模型调用只是循环里的一个节点，之后还要读工具结果、更新 State、再决策。State 必须外置可查，不能藏在 prompt 历史里——这是 Agent 可审计、可恢复、可调试的基础。"只读步骤自动执行，写入步骤人工确认"是 AI × Web3 Agent 的最小安全边界。  
  
\*\*遇到的问题：\*\*  
Groq llama-3.1-8b-instant 不稳定返回 JSON，用 response\_format: json\_object 解决。另一个设计问题：某步 LLM 解析失败是否应该阻断后续步骤？选择了降级（失败 → 空列表 + 继续），而非硬停——因为只读分析的失败不应阻断用户拿到部分结果。  
  
\*\*明日计划：\*\*  
推进 Week 2 方向地图，用统一判断框架分析 1–2 个 AI × Web3 交叉方向（优先 agent identity 或 machine payment），并准备 5.29 Week 2 例会笔记分享。  
  
\## 打卡记录  
  
\- 提交时间：  
\- 打卡链接：https://web3career.build/zh/programs/AI-Web3-School#tab=learning  
  
\## Handbook Feedback  
  
暂无
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->


# 2026-05-26 学习笔记

> WCB Learning：[https://web3career.build/zh/programs/AI-Web3-School#tab=learning](https://web3career.build/zh/programs/AI-Web3-School#tab=learning)

## 今日任务

-   \[x\] 阅读 Handbook：检索增强生成（RAG）
    
-   \[x\] 写笔记
    
-   \[x\] 完成实践
    
-   \[ \] 完成今日打卡
    

## 学习路径

今日选择：**推荐路径**（Handbook 章节 + 写笔记 + 打卡）

## 笔记

### Handbook 阅读：检索增强生成（RAG）

**核心定义：** RAG 是一条把外部知识取回、筛选、引用、交给模型使用的证据链，用来减少过期知识和无来源回答。不是"给模型接一个向量库"，而是整条 pipeline 的可靠性。

**知识节点：**

| 组件 | 作用 | 关键点 |
| --- | --- | --- |
| Chunking | 把长文档切成可检索片段 | 按结构切（标题/函数/小节），不按固定字数；切太小语义断裂，切太大噪声多 |
| Vector DB | 存 embedding，按语义相似度检索 | 还要存 metadata（版本、来源、是否废弃），先过滤再排序 |
| Retriever | 根据用户问题取回候选材料 | 问题含版本/时间/地址时，不能只做纯向量搜索 |
| Rerank | 对候选结果重新排序 | 增加延迟和成本，面向风险/文档问答时值得加 |
| Citation | 把结论连接回来源 | 不是装饰，是用户验证答案的入口 |

**最重要的一句话：**

> 检索结果不是事实，它只是**候选证据**，仍要看来源、时间、版本和适用范围。

**概念辨析（踩过的坑）：**

-   Chunking ≠ 切词（tokenization）；Chunking 是段落级切分，切词是词级别的 NLP 操作
    
-   Vector DB 不只是"存 chunk"；它存的是 embedding（向量），检索靠语义相似度而非关键词匹配
    
-   证据链 = 整条 pipeline 可靠性，不只是"来源是否可信"这一点
    

**RAG 三次判断：**

1.  文档怎么切（Chunking）
    
2.  查询时取哪些内容（Retriever + Rerank）
    
3.  生成时如何引用和拒答（Citation + 拒答机制）
    

任何一层出错，模型都会拿着错误材料说得很顺。

### 代码 / 实验

**实践：EIP 协议文档 RAG 问答系统**

-   路径：`experiments/oz-rag/`
    
-   知识库：11 个 EIP 标准文档（ERC-20、ERC-721、ERC-1155 等），共 88 个 chunk
    
-   Embedding：sentence-transformers `all-MiniLM-L6-v2`（本地，免费）
    
-   向量库：ChromaDB（本地持久化）
    
-   生成：Groq API（llama-3.1-8b-instant）
    
-   输出格式：`answer / sources / uncertainties / needs_version_check`
    

**三类测试结果：**

| 测试 | 问题 | 结果 |
| --- | --- | --- |
| 文档中存在 | approve 函数用途 | ✅ 有答案 + 来源引用 |
| 文档中不存在 | ERC-20 gas 退款机制 | ✅ answer: null + 说明原因 |
| 版本相关 | ERC-2612 版本兼容性 | ⚠️ uncertainties 有说明，但 needs_version_check 未触发 |

**第三类的发现：** EIP 原始文档里没有版本对比内容，模型诚实地返回了 `uncertainties`，但没有触发 `needs_version_check`。这正好印证了 Handbook 的核心观点——**证据链的质量取决于文档本身的覆盖范围**，prompt 写得好也补不了文档里没有的内容。

**遇到的坑：**

1.  `WebFetch` 抓 Handbook 页面 → 403（Cloudflare 拦截）
    
2.  EIP GitHub 仓库已迁移：`ethereum/EIPs` → `ethereum/ERCs`，旧路径只返回一行跳转提示，导致第一次建库全是空内容
    
3.  Anthropic 订阅 ≠ API Key，Python 脚本需要独立的 Anthropic API Key；改用 Groq 免费 API 解决
    

### 卡点 & 疑问

-   `needs_version_check` 的触发依赖文档里有明确版本标注，需要在 metadata 和 prompt 层面配合设计
    
-   Rerank 的具体实现（cross-encoder vs bi-encoder）待后续实践
    
-   当 RAG 结果要影响链上动作时的 simulation + policy + human check 流程，还没有动手过
    

## 打卡草稿

> 以下内容用于复制到打卡平台，手动提交。

**今日完成：** 阅读 Handbook RAG 章节，完成 EIP 协议文档 RAG 问答系统最小实践（experiments/oz-rag/）。知识库包含 11 个 EIP 标准文档共 88 个 chunk，使用本地 sentence-transformers embedding + ChromaDB + Groq API，输出结构化的 answer / sources / uncertainties / needs\_version\_check 四字段。

**学到的关键点：** RAG 的可靠性来自整条证据链（Chunking → Retriever → Rerank → Citation），不是单独某个组件。“检索结果不是事实，只是候选证据”——这句话让我重新理解了 RAG 的边界。实践中踩到 EIP 仓库迁移的坑：旧路径只返回跳转提示，导致第一次建库全部是空内容，修正 URL 后才正常。

**遇到的问题：** needs\_version\_check 字段在测试中未稳定触发。根因是 EIP 原始文档没有版本对比内容，模型诚实返回 uncertainties 但不会凭空判断版本问题。理解：证据链的质量上限由文档本身决定，prompt 无法补齐文档缺失的内容。

**明日计划：** 推进下一个 Handbook 章节，或对 oz-rag 做扩展（加 metadata 过滤 / 替换真实 OpenZeppelin 文档）。

## 打卡记录

-   提交时间：
    
-   打卡链接：[https://web3career.build/zh/programs/AI-Web3-School#tab=learning](https://web3career.build/zh/programs/AI-Web3-School#tab=learning)
    

## Handbook Feedback

暂无
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->



今日完成： 阅读 Handbook「提示词」和「上下文」两章，完成两个最小实践：① 写出交易风险摘要 Prompt，按角色/任务/约束/输出四段结构，三组测试（普通转账/无限授权/意图不匹配）全部正确触发风险等级约束；② 为钱包授权检查 Agent 设计 Context Spec，按 5 层结构定义每个字段的来源、刷新策略和可信度。 学到的关键点： 高分线不能交给 Prompt——约束规则要硬编码进 system prompt，不依赖模型自由判断。Context 设计的核心是分层：指令层不可被外部输入覆盖，事实层必须实时查询不得缓存，dApp 页面说明属于不可信外部内容必须显式标注。 遇到的问题： Few-shot 的边界：维护的是推理模式和格式示例，不是覆盖所有业务逻辑。Prompt Injection 目前先了解概念，进入 Agent 开发阶段再深入。 明日计划： 继续阅读 Handbook 下一章节，考虑把 tx-risk-prompt 和 tx-explainer 的输出对接，形成完整的"读取链上数据 → 生成风险摘要"管道。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->




今天由于一直在外面没有电脑不方便更深度的学习，所以只是用手机看了昨天和今天的课程录播，并且阅读了handbook第二章节的内容，目前学习中靠之前掌握的知识和工作中内容暂时还没有遇到什么阻碍，看到群里有很多优秀的人分享自己的学习方法或者自制的小工具，向优秀的人学习
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->





**今日完成：**

阅读 Handbook「大语言模型（LLM）」章节，完成最小实践「交易解释器」。输入以太坊交易哈希，系统读取链上事实（RPC）、 解码合约调用（ABI），并将结构化数据传给 LLM 生成带来源标注的解释。

**学到的关键点：**

把"LLM 输出不可全信"这个原则落地成代码：用

\_sources

元数据字段声明每一层数据的可信度，强制 LLM 区分 \[链上事实\] 和 \[模型推断\]，把 Hallucination 的风险限制在推断层。

**遇到的问题：**

公共 RPC 节点稳定性差异大，换用稳定节点解决。用 Uniswap V3 的真实 swap 交易验证，成功解码出

exactInputSingle

函数调用和滑点参数。

**明日计划：**

继续阅读 Handbook 下一章节，尝试给交易解释器加入 ERC-20 Transfer 事件的通用解码（不依赖主合约 ABI）。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->






今天补齐了之前所有的录播课，下班前刚好有空终于可以参加一次直播了。由于公司本来就从事web3领域，虽然在大陆公司业务能接触到的公链业务场景和技术有限，不过还好是不少了解，并且日常对ai也是深度使用，目前学习起来还挺轻松，继续努力

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Aerdax/images/2026-05-20-1779269636559-image.png)
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->







补交18号的学习，已完成本地环境搭建
<!-- DAILY_CHECKIN_2026-05-19_END -->
<!-- Content_END -->
