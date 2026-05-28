---
timezone: UTC+8
---

# Justin Li

**GitHub ID:** may-tonk

**Telegram:** @maytonk

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->
## **四、Web3 数据分析常见问题**

学习 Web3 数据分析时，可以围绕这些问题展开：

-   某个协议每天有多少活跃用户？
    
-   某个合约被调用了多少次？
    
-   哪些钱包地址最活跃？
    
-   某个 Token 的转账量是否增长？
    
-   NFT 项目的铸造人数和二级交易情况如何？
    
-   某次活动是否带来了真实用户增长？
    
-   用户是一次性参与，还是持续返回？
    
-   项目是否存在机器人刷量或异常交易？
    
-   某个地址是否可能是大户、机器人、交易所或合约地址？
    

好的数据分析不是“查出一堆数字”，而是回答一个具体问题。

## **五、核心链上数据概念**

### **1\. 区块**

区块是区块链中存储交易的基本单位。多个交易会被打包进一个区块，区块按照时间顺序连接起来。

常见字段包括：

-   区块高度
    
-   区块时间
    
-   区块哈希
    
-   父区块哈希
    
-   验证者或矿工
    
-   Gas 使用量
    
-   Gas 上限
    

在数据分析中，区块常用于时间维度分析，例如按天、按小时统计交易数量。

### **2\. 地址**

地址是 Web3 世界中的基本身份单位。

地址主要分为两类：

-   外部账户地址：由私钥控制，通常是用户钱包。
    
-   合约账户地址：由智能合约代码控制。
    

需要注意：

```
一个钱包地址不一定等于一个真实用户。
一个真实用户也可能拥有多个钱包地址。
```

所以在分析“用户数”时，很多时候只能用“活跃地址数”作为近似指标。

### **3\. 交易**

交易是链上状态变化的记录。用户转账、调用智能合约、铸造 NFT、兑换 Token，都会形成交易。

常见字段包括：

-   交易哈希
    
-   区块高度
    
-   交易时间
    
-   发送方地址
    
-   接收方地址
    
-   转账金额
    
-   Gas 价格
    
-   Gas 使用量
    
-   输入数据
    
-   交易状态
    

交易数据可以用于分析：

-   活跃度
    
-   用户行为
    
-   合约调用情况
    
-   手续费成本
    
-   资金流向
    

### **4\. 智能合约**

智能合约是部署在区块链上的程序。Web3 应用大多依赖智能合约运行。

例如：

-   Token 合约
    
-   NFT 合约
    
-   去中心化交易所合约
    
-   借贷协议合约
    
-   DAO 治理合约
    

分析智能合约时，常见问题包括：

-   合约被多少地址调用？
    
-   哪些方法被调用最多？
    
-   合约每天产生多少交易？
    
-   合约消耗多少 Gas？
    
-   是否存在异常调用？
    

### **5\. 事件日志**

智能合约在执行过程中可以释放事件，事件会被记录为日志。

事件日志非常适合数据分析，因为它比原始交易输入更结构化。

例如，ERC-20 Token 转账通常会产生 `Transfer` 事件，其中包含：

-   发送方
    
-   接收方
    
-   转账数量
    

事件日志常用于分析：

-   Token 转账
    
-   NFT 铸造
    
-   NFT 转移
    
-   Swap 交易
    
-   流动性添加和移除
    
-   质押和解质押
    
-   DAO 投票
    

## **六、数据分析基础知识**

### **1\. 数据分析基本流程**

一个完整的数据分析流程通常包括：

1.  明确分析问题
    
2.  找到数据来源
    
3.  理解字段含义
    
4.  清洗和转换数据
    
5.  设计分析指标
    
6.  进行统计和可视化
    
7.  总结发现
    
8.  提出建议
    

初学者最容易犯的错误是：还没想清楚问题，就直接开始查数据。

### **2\. 维度与指标**

维度是用来分组和切分数据的角度。

常见维度：

-   时间
    
-   链
    
-   协议
    
-   Token
    
-   合约
    
-   钱包地址
    
-   用户类型
    

指标是用来衡量结果的数值。

常见指标：

-   活跃地址数
    
-   交易数量
    
-   转账金额
    
-   Gas 费用
    
-   Token 持有人数量
    
-   留存率
    
-   增长率
    

例如：

```
按天统计活跃地址数
按合约统计交易数量
按 Token 统计转账金额
按用户分组统计留存率
```

### **3\. 常用统计概念**

入门阶段需要掌握：

-   总数
    
-   平均值
    
-   中位数
    
-   占比
    
-   增长率
    
-   环比
    
-   同比
    
-   分布
    
-   异常值
    
-   相关性
    
-   留存
    
-   Cohort 分组
    

一开始不需要急着学很复杂的机器学习。大多数项目分析，核心还是清晰的问题、准确的指标和可靠的解释。

### **4\. 数据清洗**

链上数据虽然结构化，但不代表可以直接使用。

常见清洗工作包括：

-   过滤失败交易
    
-   处理 Token 小数位
    
-   把时间戳转换成日期
    
-   区分钱包地址和合约地址
    
-   去重
    
-   排除明显机器人行为
    
-   排除交易所地址或桥地址
    
-   标准化字段名称
    

例如，很多 Token 原始数量不是直接的人类可读金额，而是需要除以 `10 ** decimals`。

## **七、SQL 在 Web3 数据分析中的作用**

SQL 是 Web3 数据分析最重要的基础技能之一，尤其是在 Dune 这类平台中。

必须掌握：

-   `SELECT`
    
-   `FROM`
    
-   `WHERE`
    
-   `GROUP BY`
    
-   `ORDER BY`
    
-   `JOIN`
    
-   `HAVING`
    
-   `WITH`
    
-   窗口函数
    

示例：按天统计交易数。

```
SELECT
  DATE_TRUNC('day', block_time) AS day,
  COUNT(*) AS tx_count
FROM ethereum.transactions
WHERE success = true
GROUP BY 1
ORDER BY 1;
```

示例：按天统计活跃地址数。

```
WITH addresses AS (
  SELECT block_time, "from" AS address
  FROM ethereum.transactions
  WHERE success = true

  UNION ALL

  SELECT block_time, "to" AS address
  FROM ethereum.transactions
  WHERE success = true
)
SELECT
  DATE_TRUNC('day', block_time) AS day,
  COUNT(DISTINCT address) AS active_addresses
FROM addresses
WHERE address IS NOT NULL
GROUP BY 1
ORDER BY 1;
```
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->

## 继续学习AI+链上数据分析

## **如何 像数据分析师一样处理链上数据**

不能只把项目理解成“写几个 SQL”或“让 AI 判断币好坏”。

更准确的思路是：像数据分析师一样做链上数据研究。

### **3.1 明确分析问题**

每一次分析前先问：

1.  这个币是否有真实交易活动？
    
2.  当前买盘强还是卖盘强？
    
3.  早期买家是否已经大量退出？
    
4.  早期买家是否由同一批资金控制？
    
5.  有没有安全层面的硬风险？
    
6.  这个币应该进入关注列表，还是只存档，还是直接过滤？
    

不要一开始就问“它会不会涨”。  
ChainMind 当前要解决的是“风险过滤和投研辅助”，不是价格预测。

### **3.2 把链上事件变成指标**

链上原始数据通常是这样的：

-   一笔交易；
    
-   一个钱包；
    
-   一个时间戳；
    
-   一个 token transfer；
    
-   一个 swap；
    
-   一个 funding transaction。
    

数据分析师要做的是把它们聚合成指标：

| 原始事件 | 分析指标 |
| --- | --- |
| swap 交易 | 交易量、买卖方向、买卖人数 |
| transfer 记录 | 当前余额、是否退出 |
| funding 交易 | 首个资金来源、共同 funder |
| block_time | 首次交易、钱包年龄、时间窗口 |
| tx_from / tx_to | 钱包关系、资金路径 |

也就是说，链上分析的关键不是“看到很多交易”，而是“把交易变成可以判断的行为特征”。

### **3.3 先做事实，再做判断**

一个好的分析流程应该分层：

1.  事实层：Dune/API 返回的真实数据。
    
2.  指标层：交易量、买卖盘、退出比例、同源资金。
    
3.  证据层：哪些规则被触发。
    
4.  判断层：grade、action、risk\_score。
    
5.  解释层：AI 或报告用人话说明原因。
    

不能把这几层混在一起。

尤其不能让 AI 直接替代事实层和指标层。  
AI 适合解释和总结，不适合凭空生成链上事实。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->


**今天手动打卡，总结一下最近学习的内容和研究的方向**

对于meme币，我一直都是充满幻想和喜欢的，但是市场上太多的币种是没有然后对成长价值，就连最基本的安全和信任也没有，找到一个短期或是是长期潜力比较大的一个币是比较不容易的，我们不仅要去详细了解代币的安全性和代币的分配，还要去看链上的数据，是否是真实玩家买入，狗庄的格局，是否存在大量的机器人刷单，叙事和用户情绪怎么样，判断当前是否值得去投资，什么时候该撤退；所以现在我在做一个链上数据分析（识别bot，是否大量代币来至同一个钱包，是否大量钱包时最近在进行创建，是否是左手倒右手等等），通过接入各家相应平台的API来进行相应的筛选BNB链上的meme，筛选出值得研究的，在进行下一步的数据补充和分析，然后AI进行相应的报告的产生，这期间AI是可以对我们处理的数据结果根据相应的规则进行解释和分析建议和需要数据的补充进行下一步的分析；然后因为meme的短暂性，所以我们推荐值得研究的4个等级的meme会进行相应的AI复盘，AI可以参与到我们规则的相应的调整；
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->



**基于大语言模型（LLM）的智能体（Agent）记忆与检索增强生成（RAG）系统的架构图**。它整体采用了经典的**分层架构设计**，从左到右流式地展示了从用户端（Agent）到数据底层（数据库与基础设施）的调用与数据流转关系。

我们可以将整个系统拆分为六个核心层次来详细拆解：

## 1\. 前端层（Frontend Layer）

这是系统的入口，主要负责智能体与各种功能工具的对接与分发。

-   **SimpleAgent**：系统的核心主体（智能体），它通过发起任务来驱动整个流程。
    
-   **ToolRegistry（工具注册表）**：一个中央调度器，用来管理和路由 Agent 可以使用的工具。在这里，它将请求分流到两个方向：
    
    -   **MemoryTool**：专门处理与记忆相关的操作。
        
    -   **RAGTool**：专门处理与知识检索增强相关的操作。
        

## 2\. 管理层（Management Layer）

作为控制中枢，负责接收前端工具的请求，并将其分配给具体的处理管道。

-   **MemoryManager（记忆管理器）**：承接 `MemoryTool`，负责协调和调度不同类型的记忆模块（如短期记忆、长期记忆等）。
    
-   **RAGPipeline（RAG流水线）**：承接 `RAGTool`，负责编排文档解析、知识检索和问答增强的整体流程。
    

## 3\. 核心处理层（记忆类型层 vs RAG处理层）

这一纵列是系统的核心业务逻辑所在，分为两大板块：

### 板块 A：记忆类型层（Memory Types Layer）

仿照人类的大脑机制，将 AI 的记忆分为了四种类型：

-   **WorkingMemory（工作记忆）**：标有“纯内存+TTL（生存时间）”。这是短期记忆，数据只存在于内存中，到期自动销毁，用于处理当前对话的上下文。
    
-   **EpisodicMemory（情境记忆 / 事件序列）**：记录按时间顺序发生的事件或对话历史。
    
-   **SemanticMemory（语义记忆 / 知识图谱）**：存储结构化的核心概念、实体及其关系，形成知识网络。
    
-   **PerceptualMemory（感知记忆 / 多模态）**：处理和存储多模态数据（如声音、图片、视频或复杂的感知输入）。
    

### 板块 B：RAG处理层（RAG Processing Layer）

负责外挂知识库的处理与利用：

-   **DocumentProcessor（文档处理器）**：负责外部文档的解析、切片（Chunking）等前置处理。
    
-   **智能问答引擎（LLM增强）**：利用检索出来的知识来增强大模型，生成最终的准确回答。
    

## 4\. 存储抽象层（Storage Abstraction Layer）

这一层是代码逻辑与底层数据库之间的**中间件/数据访问层（DAO）**。它将不同类型的记忆和数据抽象为特定的存储接口：

-   **SQLiteDocumentStore（结构化存储）**：
    
    -   接收 `EpisodicMemory`（事件序列）和 `SemanticMemory`（知识图谱的某些结构数据）。
        
    -   也接收 `DocumentProcessor` 拆解后的文档块。
        
-   **Neo4jGraphStore（图谱管理）**：
    
    -   专门用来管理和存储实体关系，连接了 `EpisodicMemory`、`SemanticMemory` 和 `PerceptualMemory`。
        
-   **QdrantVectorStore（向量检索）**：
    
    -   专门用于相似度检索，接收 `PerceptualMemory` 的多模态向量，以及由“智能问答引擎”和“文档处理器”处理后的向量数据。
        

## 5\. 基础设施层（Infrastructure Layer）

这是系统最底层的物理存储和核心底层服务，所有数据最终落盘于此：

-   **内存**：直接为 `WorkingMemory` 提供极速的读写支持。
    
-   **SQLite**：轻量级关系型数据库，用于存储结构化文档和事件序列。
    
-   **Neo4j**：图数据库，专门用于高效查询和存储知识图谱中的复杂节点和关系。
    
-   **Qdrant**：高性能向量数据库，用于高维向量的快速近邻检索（ANN）。
    
-   **EmbeddingService（统一嵌入）**：这是一个底层核心服务，`DocumentProcessor`（文档解析）和`智能问答引擎`都会调用它，将文本或多模态数据转化为向量（Embedding），然后再存入 `Qdrant` 或进行检索。
    

## 1\. 数据库工程（Database Engineering）—— 解决“怎么存”

这一维度的核心是保证数据的**持久化、准确性与多模态存储**，对应上一张架构图中的 SQLite、Neo4j 等基础设施。

-   **Persistent Storage（持久化存储）**：确保 AI 的记忆不会因系统重启或断电而丢失。
    
-   **Typed Schemas（强类型 Schema）**：对记忆数据进行结构化定义，例如明确哪些是“事件”，哪些是“实体关系”。
    
-   **ACID Transactions（ACID 事务）**：确保高并发下，AI 读取和写入记忆时的数据一致性与安全（不发生数据冲突或损坏）。
    
-   **Multi-Store Architecture（多模态存储架构）**：即上一张图展示的“混合存储”，同时管理关系型、图和向量数据库。
    

## 2\. 智能体工程（Agent Engineering）—— 解决“怎么用”

这一维度关注的是 **AI 智能体如何感知、调度和演化这些记忆**，对应上一张图中的 MemoryManager 和各种 Memory 类型的业务逻辑。

-   **Memory Lifecycle（记忆生命周期管理）**：决定记忆何时生成、何时转为长期记忆、何时因为到期（TTL）而被擦除。
    
-   **Write-Back Loops（写回循环）**：智能体在对话或思考后，将新的体验、结论重新写入记忆库的闭环机制。
    
-   **Memory Extraction（记忆提取）**：从嘈杂的原始对话或多模态数据中，提炼出有价值的核心事实或用户偏好。
    
-   **Autonomous Consolidation（自主固化/整合）**：类似于人类的“睡眠归纳”，AI 在闲时自动将零碎的情境记忆（Episodic）提炼并合并为常识性的语义记忆（Semantic）。
    
-   **Context-Aware Routing（上下文感知路由）**：根据当前任务，聪明地决定该调用哪一部分记忆。
    

## 3\. 信息检索（Information Retrieval）—— 解决“怎么查”

当记忆库变得非常庞大时，如何**快速、精准地捞出最相关的记忆**是关键。这对应上一张图中的向量检索（QdrantStore）和 RAG 处理层。

-   **Hybrid Search（混合检索）**：结合传统的关键词检索（BM25）与现代的向量语义检索，兼顾精准度与泛化性。
    
-   **Vector Indexes (HNSW, IVF)（向量索引）**：利用 HNSW（分层导航小世界）或 IVF（倒排文件）等算法，在百万级甚至亿级向量中实现毫秒级的近邻搜索。
    
-   **Relevance Ranking（相关性重排）**：评估捞出来的多条记忆中，哪些与当前问题最契合。
    
-   **Context Assembly（上下文组装）**：把检索出来的记忆片段合理地拼接、修剪，打包成 LLM 能理解的前景提示词。
    
-   **Query Optimization（查询优化）**：对 Agent 输入的复杂问题进行改写或拆解，以获得更好的检索结果。
    

## 4\. 机器学习工程（Machine Learning Engineering）—— 解决“怎么理解”

这是赋予记忆“语义理解能力”的底座，对应上一张图中的 EmbeddingService 和 LLM 增强引擎。

-   **Embedding Models（嵌入模型）**：负责将文本、图片等高维数据转化为计算机能计算其相似度的数学向量。
    
-   **Fine-Tuning (SLMs)（小模型微调）**：针对特定业务场景，微调小语言模型（SLM），使其能更精准地提取或判断记忆。
    
-   **Model Versioning（模型版本控制）**：管理不同代际的 Embedding 和 LLM 模型，因为一旦更换 Embedding 模型，底层的向量数据库就需要全部重新计算。
    
-   **Reranking Pipelines（重排流水线）**：利用精细的交叉编码器（Cross-Encoder）模型对初筛的记忆进行二次精细化打分。
    
-   **Continual Learning（持续学习）**：探索如何让 AI 系统在不发生“灾难性遗忘”的前提下，通过记忆库不断吸收新知识。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->




本文用于总结近期围绕 ChainMind 项目学到的核心内容，包括项目定位、量化属性、相似 GitHub 项目对比、当前工程状态、已形成的判断框架，以及后续最值得继续推进的方向。

## **1\. 我们对 ChainMind 的重新定位**

ChainMind 不应该被定义为普通行情看板，也不应该被包装成 AI 自动交易机器人。

更准确的定位是：

![](http://localhost:63342/markdownPreview/1736260782/docs/learning?_ijt=o9fek9s7gq87sjai28vme2ljk7)

`面向 BNB / EVM meme token 的链上行为风险过滤与可解释投研系统。`

它的核心目标不是预测某个 token 一定会涨，而是回答：

![](http://localhost:63342/markdownPreview/1736260782/docs/learning?_ijt=o9fek9s7gq87sjai28vme2ljk7)

`这个链上机会是否真实？ 风险来自哪里？ 早期资金是否已经撤退？ 买盘是否真实扩散？ 多个钱包买入是真共识还是假共识？ 聪明钱信号是否可复制？ 是否值得进入人工研究列表？`

因此，ChainMind 第一阶段的正确方向是：

![](http://localhost:63342/markdownPreview/1736260782/docs/learning?_ijt=o9fek9s7gq87sjai28vme2ljk7)

`先过滤坏机会 再识别可观察机会 最后由 AI 解释为什么`

## **2\. ChainMind 是否算量化**

ChainMind 算量化，但不是传统意义上的自动交易量化。

它更接近：

![](http://localhost:63342/markdownPreview/1736260782/docs/learning?_ijt=o9fek9s7gq87sjai28vme2ljk7)

`链上行为因子研究型量化 风险过滤型量化 半自动投研量化系统 事件驱动型链上分析系统`

它不属于：

-   高频交易量化。
    
-   做市或套利机器人。
    
-   单纯 K 线技术指标策略。
    
-   自动下单系统。
    
-   黑箱式机器学习涨跌预测模型。
    

ChainMind 的量化特征主要来自三类因子：

### **2.1 Token Risk 因子**

用于判断 token 是否存在明显风险。

典型指标包括：

-   流动性是否过低。
    
-   5m / 15m net\_buy\_usd 是否转负。
    
-   trades / unique\_traders 是否异常。
    
-   前 20 / 50 早期买家清仓比例。
    
-   holder 集中度。
    
-   同 funder 早期买家数量。
    
-   新钱包比例。
    
-   合约权限和 LP 风险。
    

### **2.2 Wallet Alpha 因子**

用于判断某个钱包是否真的有稳定 alpha。

典型指标包括：

-   历史胜率。
    
-   realized PnL。
    
-   median return。
    
-   最大回撤。
    
-   rug exposure。
    
-   最近 7D / 30D / 90D 表现。
    
-   买入后 15m / 1h / 6h 表现。
    

### **2.3 Copyability 因子**

用于判断普通用户是否还能复制这个钱包信号。

典型指标包括：

-   是否同区块买入。
    
-   是否开池几秒内买入。
    
-   是否依赖机器人速度或极高 gas。
    
-   买入时流动性是否过低。
    
-   买入后 5-15 分钟是否仍有成交量。
    
-   买入后是否仍有净买入和观察窗口。
    

核心认知是：

![](http://localhost:63342/markdownPreview/1736260782/docs/learning?_ijt=o9fek9s7gq87sjai28vme2ljk7)

`高胜率钱包 ≠ 可复制钱包 聪明钱买入 ≠ 普通用户能跟`

## **3\. 与 GitHub 相似项目的对比**

我们查看了 GitHub 上几类相似项目后发现，ChainMind 不是和某一个项目完全重合，而是处在多个方向的交叉点上。

## **3.1 传统 crypto 量化交易框架**

代表项目：

-   Freqtrade: [https://github.com/freqtrade/freqtrade](https://github.com/freqtrade/freqtrade)
    
-   Hummingbot: [https://github.com/hummingbot/hummingbot](https://github.com/hummingbot/hummingbot)
    
-   Jesse: [https://github.com/jesse-ai/jesse](https://github.com/jesse-ai/jesse)
    

这些项目重点在：

-   策略回测。
    
-   参数优化。
    
-   交易所连接。
    
-   订单管理。
    
-   自动交易执行。
    
-   实盘风控。
    

ChainMind 与它们的区别：

| 对比维度 | 传统交易框架 | ChainMind |
| --- | --- | --- |
| 核心目标 | 自动交易与策略执行 | 风险过滤与投研解释 |
| 数据基础 | K 线、订单簿、交易所成交 | 链上交易、钱包、资金来源 |
| 输出结果 | 买卖信号或订单 | 风险等级、观察理由、研究报告 |
| 是否下单 | 通常会 | 第一阶段不做 |
| 适合场景 | 已知交易对策略 | 新 meme token 早期筛选 |

学习结论：

![](http://localhost:63342/markdownPreview/1736260782/docs/learning?_ijt=o9fek9s7gq87sjai28vme2ljk7)

`ChainMind 不应该去卷成熟 trading bot， 而应该强调链上行为风控和可解释研究。`

## **3.2 Rug / Honeypot / Token 安全检测工具**

代表项目：

-   RugWatch: [https://github.com/machenxi/rugpull-scam-token-detection](https://github.com/machenxi/rugpull-scam-token-detection)
    
-   bsc-honeypot-detector: [https://github.com/mraicodedev/bsc-honeypot-detector](https://github.com/mraicodedev/bsc-honeypot-detector)
    
-   DumpDetective: [https://github.com/JN-Bot666/dump-detective](https://github.com/JN-Bot666/dump-detective)
    

这些项目重点在：

-   合约是否高危。
    
-   是否 honeypot。
    
-   是否能正常卖出。
    
-   LP 是否有风险。
    
-   owner / mint / blacklist / tax 权限。
    
-   项目方或创建者钱包是否异常。
    

ChainMind 与它们的区别：

| 对比维度 | Token 安全工具 | ChainMind |
| --- | --- | --- |
| 核心关注 | 合约和池子是否危险 | 资金行为是否真实、独立、可复制 |
| 判断对象 | token 合约 / LP / 权限 | token + 早期买家 + 钱包集群 |
| 优势 | 快速安全红旗 | 解释风险来源和观察条件 |
| 可借鉴点 | honeypot、LP、权限、税率检查 | 纳入 Risk Score 基础层 |

学习结论：

![](http://localhost:63342/markdownPreview/1736260782/docs/learning?_ijt=o9fek9s7gq87sjai28vme2ljk7)

`ChainMind 不必重复造 Token Sniffer。 更好的做法是把 GoPlus / honeypot / LP 检查作为基础安全层， 然后继续做早期资金行为分析。`

## **3.3 Smart Money / Wallet Tracker / Copy Trader 项目**

代表项目：

-   whale-wallet-mirror-copy-trader: [https://github.com/Rezzecup/whale-wallet-mirror-copy-trader](https://github.com/Rezzecup/whale-wallet-mirror-copy-trader)
    
-   DeepLens: [https://github.com/alanisme/deeplens](https://github.com/alanisme/deeplens)
    

这类项目重点在：

-   监听重点钱包。
    
-   追踪 whale / smart money。
    
-   提醒钱包买入或卖出。
    
-   有些项目会直接做 mirror trading。
    

ChainMind 与它们的区别：

| 对比维度 | Wallet Tracker | ChainMind |
| --- | --- | --- |
| 常见逻辑 | 某钱包买了就提醒或复制 | 先判断这个信号是否可信、独立、可复制 |
| 主要风险 | 盲目追高或跟机器人 | 通过 Copyability 降噪 |
| 输出结果 | 钱包动作通知 | 钱包质量、同实体风险、可复制性 |
| 差异化 | 速度和钱包列表 | 判断质量和复盘闭环 |

学习结论：

![](http://localhost:63342/markdownPreview/1736260782/docs/learning?_ijt=o9fek9s7gq87sjai28vme2ljk7)

`ChainMind 的差异化不是“更快提醒聪明钱”， 而是判断聪明钱信号是否真的值得普通用户观察。`

## **3.4 链上数据基础设施项目**

代表项目：

-   Ethereum ETL: [https://github.com/blockchain-etl/ethereum-etl](https://github.com/blockchain-etl/ethereum-etl)
    
-   BlockSci: [https://github.com/citp/BlockSci](https://github.com/citp/BlockSci)
    
-   Dune SQL 查询仓库: [https://github.com/bitman09/Dune-Analytics](https://github.com/bitman09/Dune-Analytics)
    

这些项目更像基础设施，重点在：

-   链上数据抽取。
    
-   数据清洗。
    
-   查询模板。
    
-   地址和交易分析。
    
-   研究型数据处理。
    

ChainMind 与它们的关系：

![](http://localhost:63342/markdownPreview/1736260782/docs/learning?_ijt=o9fek9s7gq87sjai28vme2ljk7)

`Dune / ETL / RPC / API 是数据基础设施。 ChainMind 是基于这些数据的 meme token 风险研究应用。`

学习结论：

![](http://localhost:63342/markdownPreview/1736260782/docs/learning?_ijt=o9fek9s7gq87sjai28vme2ljk7)

`ChainMind 应该复用这些数据能力， 但产品价值要体现在评分、解释、分级和复盘上。`

## **4\. ChainMind 的核心差异化**

综合对比后，ChainMind 最应该强调的差异化是：

1.  不只看合约安全，还看早期买家是否撤退。
    
2.  不只看聪明钱买入，还判断该信号是否可复制。
    
3.  不只看钱包数量，还判断是否存在同实体分仓和假共识。
    
4.  不直接输出交易指令，而是输出研究结论、风险来源和观察条件。
    
5.  不停留在一次性评分，而是通过每日复盘持续校正规则。
    

一句话表达：

![](http://localhost:63342/markdownPreview/1736260782/docs/learning?_ijt=o9fek9s7gq87sjai28vme2ljk7)

`ChainMind 是 meme token 的链上风险研究 copilot， 不是自动炒币机器人。`

## **5\. 当前工程状态学习**

当前项目已经从纯文档阶段进入基础工程阶段。

已经具备：

-   Python 项目配置：`pyproject.toml`。
    
-   开发依赖：`requirements-dev.txt`。
    
-   样本 token JSON。
    
-   本地分析脚本：`scripts/analyze_token.py`。
    
-   CLI 入口：`src/chainmind/cli/analyze_token.py`。
    
-   编排层：`src/chainmind/orchestration/analyze_token.py`。
    
-   领域对象：`src/chainmind/domain/token_snapshot.py`。
    
-   风险评分模块：`src/chainmind/scoring/token_risk.py`。
    
-   机会评分模块：`src/chainmind/scoring/opportunity.py`。
    
-   优先级分级模块：`src/chainmind/scoring/priority.py`。
    
-   基础自动测试：`tests/unit/test_analyze_token_cli_foundation.py`。
    

已验证的最小链路：

![](http://localhost:63342/markdownPreview/1736260782/docs/learning?_ijt=o9fek9s7gq87sjai28vme2ljk7)

`样本 token JSON -> TokenSnapshot -> token risk / opportunity score -> grade A/B/C/D -> action -> CLI 输出`

这说明项目已经可以开始从“想法验证”进入“规则验证”。

## **6\. 当前已经形成的判断框架**

ChainMind 的综合判断可以分为 8 类：

1.  是否进入分析。
    
2.  合约安全判断。
    
3.  买卖盘健康判断。
    
4.  早期买家行为判断。
    
5.  同实体 / 假共识判断。
    
6.  钱包质量判断。
    
7.  可复制性判断。
    
8.  是否推送判断。
    

最终输出应包含：

![](http://localhost:63342/markdownPreview/1736260782/docs/learning?_ijt=o9fek9s7gq87sjai28vme2ljk7)

`Risk Score Entity Cluster Score Wallet Alpha Score Copyability Score Opportunity Score Priority Score Grade A/B/C/D`

可观察候选的大致逻辑是：

![](http://localhost:63342/markdownPreview/1736260782/docs/learning?_ijt=o9fek9s7gq87sjai28vme2ljk7)

`风险不过高 + 买盘相对健康 + 早期买家未明显撤退 + 没有强同实体嫌疑 + 有高质量钱包参与 + 这个钱包信号仍有可复制窗口`

## **7\. Dune 手动分析学习**

Phase 1 的重点不是立即自动化，而是用 Dune 手动跑通分析路径。

已经理解的 Dune 分析模块包括：

-   token 基础信息。
    
-   合约创建信息。
    
-   DEX 交易与主要池子。
    
-   5 分钟买卖盘。
    
-   早期买家分析。
    
-   holder 集中度。
    
-   早期买家资金来源。
    
-   同来源资金统计。
    

关键学习点：

![](http://localhost:63342/markdownPreview/1736260782/docs/learning?_ijt=o9fek9s7gq87sjai28vme2ljk7)

`同 funder 是风险证据之一， 但不能直接等于同一个真实人。`

需要进一步区分：

-   普通钱包地址。
    
-   DEX Router。
    
-   池子合约。
    
-   协议基础设施地址。
    
-   交易所或常见资金分发地址。
    

否则 same-funder 规则容易误判。

## **8\. AI 在项目中的正确位置**

AI 不应该直接读取全量原始交易并预测涨跌。

AI 更适合在规则过滤之后工作：

![](http://localhost:63342/markdownPreview/1736260782/docs/learning?_ijt=o9fek9s7gq87sjai28vme2ljk7)

`程序负责计算 规则负责过滤 AI 负责解释 复盘负责校正`

AI 的输入应该是结构化摘要，例如：

![](http://localhost:63342/markdownPreview/1736260782/docs/learning?_ijt=o9fek9s7gq87sjai28vme2ljk7)

`{"token":"XXX","chain":"bnb","risk_score":68,"opportunity_score":55,"early_buyer_exit_ratio":0.42,"same_funder_cluster_count":2,"copyability_score":61}`

AI 的输出应该回答：

-   是否值得观察。
    
-   机会来自哪里。
    
-   风险来自哪里。
    
-   是否可复制。
    
-   后续观察条件是什么。
    
-   不确定性在哪里。
    

## **9\. 最需要避免的表达**

项目介绍中应避免：

![](http://localhost:63342/markdownPreview/1736260782/docs/learning?_ijt=o9fek9s7gq87sjai28vme2ljk7)

`AI 自动发现暴涨币 智能炒币机器人 自动跟单系统 保证发现 alpha 高胜率买入信号`

更推荐使用：

![](http://localhost:63342/markdownPreview/1736260782/docs/learning?_ijt=o9fek9s7gq87sjai28vme2ljk7)

`链上行为风险过滤 meme token 投研辅助 可解释风险摘要 聪明钱可复制性判断 同实体与假共识识别`

推荐一句话：

![](http://localhost:63342/markdownPreview/1736260782/docs/learning?_ijt=o9fek9s7gq87sjai28vme2ljk7)

`ChainMind helps researchers filter risky meme tokens and explain on-chain signals before making manual decisions.`

## **10\. 后续最值得推进的方向**

短期最重要的不是做大而全，而是补齐一个可验证闭环。

推荐优先级：

### **P0：沉淀 Phase 1 Dune SQL**

把已经跑通的手动查询整理为固定 SQL 模板：

-   基础交易。
    
-   5m 买卖盘。
    
-   早期买家。
    
-   资金来源。
    
-   holder 集中度。
    

### **P0：完善 Token Risk Score**

把当前硬编码启发式规则逐步变成可配置权重：

-   低流动性。
    
-   net\_buy\_usd 转负。
    
-   trades / unique\_traders 异常。
    
-   早期买家清仓比例。
    
-   same-funder 风险。
    
-   holder 集中度。
    
-   合约安全风险。
    

### **P1：补充 Entity Cluster Score**

先做低成本版本：

-   同 funder。
    
-   买入时间集中。
    
-   新钱包比例。
    
-   买入前交易次数。
    
-   基础设施地址过滤。
    

### **P1：生成 AI 报告模板**

让 AI 基于结构化 JSON 生成：

-   A/B/C/D 等级解释。
    
-   机会来源。
    
-   风险来源。
    
-   可复制性说明。
    
-   后续观察条件。
    
-   不确定性。
    

### **P2：建立复盘数据**

每次分析或推送后记录：

-   15m / 1h / 6h / 24h 最大涨幅。
    
-   15m / 1h / 6h / 24h 最大回撤。
    
-   是否 rug。
    
-   是否存在普通用户可执行窗口。
    
-   当时风险分和机会分是否合理。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->





### 1\. 基本概念概述

-   **EOA（Externally Owned Account，外部拥有账户）** 传统钱包账户，由私钥直接控制。最常见的 MetaMask 默认账户。
    
-   **智能账户（Smart Account / ERC-4337 Account Abstraction）** 基于智能合约实现的账户（也称 AA 账户）。用户不直接用私钥签名，而是通过 EntryPoint 合约和 UserOperation 发起交易。代表项目：ERC-4337、Pimlico、Alchemy Account、ZeroDev 等。  
    **智能账户（智能账户/ERC-4337 账户抽象）** 基于智能合约实现的账户（也称 AA 账户）。用户不直接用私钥签名，而是通过 EntryPoint 合约和 UserOperation 发起交易。代表项目：ERC-4337、Pimlico、Alchemy Account、ZeroDev 等。
    
-   **多签账户（Multi-Signature Wallet）** 需要多个私钥共同批准才能执行交易的智能合约钱包。代表项目：Gnosis Safe（现 Safe）、Gnosis MultiSig 等。
    

* * *

### 2\. 详细维度对比

| 维度 | EOA（传统钱包） | 智能账户（Smart Account） | 多签账户（Multi-Sig）  多签名 |
| --- | --- | --- | --- |
| 1. 谁持有控制权 | 单一私钥持有者 谁掌握私钥，谁就完全控制账户 | 合约 + 签名者 合约拥有逻辑控制权，私钥仅用于签名 UserOp。支持多因素或社交恢复 | 多人/组织共同控制 合约拥有最终控制权，需要设定阈值（Threshold） |
| 2. 谁可以发起交易 | 只有私钥持有者本人 必须用私钥签名 | 任何被授权的签名者或 Bundler 支持 Gasless、批量、自动化发起 | 任意签名者可提出交易，但需达到多人确认 一人无法单独执行 |
| 3. 是否支持多人确认 | 不支持 单签 | 支持（高度灵活） 可设置多签名者、不同权重、临时授权 | 原生强支持 典型 2/3、3/5、M-of-N 模式 |
| 4. 是否支持恢复、限额或自动化策略 | 极弱 丢私钥 = 资产永久丢失 几乎无限额、自动化功能 | 最强 • 社交恢复（朋友/邮箱/Guardian） • 每日限额 • 自动化支付、条件触发 • 模块化插件 | 较强 • 可设置多签恢复机制 • 限额模块 • 但自动化较弱（需额外模块） |
| 5. 典型使用场景 | • 个人日常小额交易 • DeFi 个人操作 • 新手入门 | • 个人高级钱包（Gasless、批量交易） • 团队/DAO 日常支出 • 企业级支付自动化 • 移动端友好钱包 | • DAO 国库管理 • 团队/公司资产共管 • 大额资金托管 • 机构/高净值用户 |
| 6. 主要风险点 | • 私钥泄露 = 资产全部丢失 • 单点故障 • 钓鱼签名风险高 • 无法挽回 | • 合约漏洞风险（虽经审计） • 依赖 Bundler / EntryPoint • 复杂度高，新手易误操作 • 部分实现仍有中心化风险 | • 审批流程慢 • 签名者勾结风险（内部作恶） • 合约漏洞 • 密钥管理复杂 |

* * *

### 3\. 权限与风险深度解读

**控制权本质差异**

-   **EOA**：控制权 = 私钥。极简但脆弱，一人掌控一切。
    
-   **智能账户**：控制权从“私钥”转移到“智能合约逻辑”。私钥只是“钥匙”之一，可随时更换或增加防护。
    
-   **多签**：控制权被明确分散到多人。任何单人无法独占资产。
    

**交易发起与批准流程**

-   EOA：签名即执行。
    
-   智能账户：签名 → UserOperation → Bundler 打包 → EntryPoint 执行（可实现“一人签名 + 自动执行”或“多人签名”）。
    
-   多签：提出交易 → 多人签名确认 → 达到阈值后执行。
    

**恢复能力**

-   EOA：几乎无恢复能力（除非提前在中心化交易所托管）。
    
-   智能账户：支持 Guardian（守护者）机制，可通过社交恢复、时间锁、邮箱验证等方式找回。
    
-   多签：可通过更换签名者或设置备用多签实现恢复。
    

**自动化与策略支持**

智能账户在这方面优势最大，可集成：

-   消费限额（spending limits）
    
-   自动支付订阅
    
-   条件交易（if-then 逻辑）
    
-   插件系统（Session Keys）  插件系统（会话密钥）
    

* * *

### 4\. 实际选择建议

-   **个人用户**：推荐从 **EOA 起步**，资金量增大后升级到 **智能账户**（兼顾便利性和安全性）。
    
-   **团队 / DAO / 公司**：强烈推荐 **多签账户**（Safe）作为主要资金管理工具，可结合智能账户作为执行层。
    
-   **高安全性需求**：**多签 + 智能账户混合使用**（多签作为最终国库，智能账户作为日常操作账户）。
    
-   **高便利性需求**：优先 **智能账户**（Gasless、批量、移动端友好）。
    

* * *

### 5\. 总结表格（一目了然）

| 账户类型  类类型 | 安全性  安全 | 便利性  方便 | 适合多人  多人 | 恢复能力 | 推荐指数（个人） | 推荐指数（团队） |
| --- | --- | --- | --- | --- | --- | --- |
| EOA | 低 | 高 | 不适合  不匹配 | 极差  不同之处 | ★★★☆☆ | ★☆☆☆☆ |
| 智能账户 | 中高  初中和高中 | 最高 | 支持 | 优秀 | ★★★★★ | ★★★★☆ |
| 多签账户 | 最高 | 中低 | 极适合 | 良好 | ★★★☆☆ | ★★★★★ |
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->






# **2026-05-21 项目进度总结**

## **1\. 今日目标**

今天的工作目标不是直接完成整个 ChainMind 项目，而是先完成以下两件事：

1.  确认当前 Python 工程能够在 PyCharm 中正常运行和测试。
    
2.  用一个真实 BSC 代币完成 Phase 1 Dune 手动分析流程的首轮检验。
    

本次检验采用的目标代币为：

| 字段 | 内容 |
| --- | --- |
| 链 | BSC / BNB Chain |
| 代币名称 | 14 |
| 代币地址 | 0x205f39c39f5fe15d4ef000aeb835de8deb264444 |
| 检验日期 | 2026-05-21 |

## **2\. 今日先完成的工程准备**

### **2.1 项目结构确认**

今天先确认了当前项目已经具备基础工程骨架：

-   `src/chainmind/`：正式 Python 包代码。
    
-   `scripts/`：本地脚本入口。
    
-   `tests/`：自动测试目录。
    
-   `samples/`：样例 token 数据。
    
-   `docs/`：项目设计、路线图和分析手册。
    
-   `experiments/`：实验与阶段检验记录。
    

这说明当前项目已经可以从“只有想法和文档”进入“可运行、可检验”的状态。

### **2.2 PyCharm 运行配置学习**

今天重点理解了 PyCharm `Run/Debug Configuration` 的作用。

当前运行配置中关键字段的含义如下：

| 配置项 | 含义 |
| --- | --- |
| Python Interpreter | 选择用哪个 Python 环境运行项目 |
| Script path | 选择要运行的 Python 脚本 |
| Parameters | 给本次运行传入输入文件和运行选项 |
| Working directory | 指定程序从哪个目录出发查找相对路径 |

本项目当前分析脚本需要传入 snapshot JSON 文件，因此不能只运行脚本本身，还需要给出输入参数。

示例参数：

![](http://localhost:63342/markdownPreview/277497423/docs/progress?_ijt=3l4bp4ejcm389oqs945ukjbr59)

`samples\tokens\example-healthy-token.json --json`

其含义是：

![](http://localhost:63342/markdownPreview/277497423/docs/progress?_ijt=3l4bp4ejcm389oqs945ukjbr59)

`使用健康样例 token 数据运行分析，并以 JSON 格式输出结果。`

### **2.3 本地脚本验证**

今天在 PyCharm 中完成了两个样例输入的运行验证。

**健康样例**

输入：

![](http://localhost:63342/markdownPreview/277497423/docs/progress?_ijt=3l4bp4ejcm389oqs945ukjbr59)

`samples\tokens\example-healthy-token.json`

观察到的结果方向：

| 字段 | 结果 |
| --- | --- |
| symbol | GOOD |
| grade | A |
| action | manual_review |
| risk_score | 20 |
| opportunity_score | 75 |

**风险样例**

输入：

![](http://localhost:63342/markdownPreview/277497423/docs/progress?_ijt=3l4bp4ejcm389oqs945ukjbr59)

`samples\tokens\example-risky-token.json`

观察到的结果方向：

| 字段 | 结果 |
| --- | --- |
| symbol | RISK |
| grade | D |
| action | filter |
| risk_score | 100 |
| opportunity_score | 30 |

这说明当前最小分析链路已经可以根据不同输入产生不同判断结果。

### **2.4 自动测试验证**

今天运行了当前项目的基础单元测试：

![](http://localhost:63342/markdownPreview/277497423/docs/progress?_ijt=3l4bp4ejcm389oqs945ukjbr59)

`tests\unit\test_analyze_token_cli_foundation.py`

运行结果：

![](http://localhost:63342/markdownPreview/277497423/docs/progress?_ijt=3l4bp4ejcm389oqs945ukjbr59)

`1 passed`

该测试确认了当前最小分析流程可以完成：

![](http://localhost:63342/markdownPreview/277497423/docs/progress?_ijt=3l4bp4ejcm389oqs945ukjbr59)

`TokenSnapshot -> analyze_token -> AnalysisResult`

当前工程层结论：

![](http://localhost:63342/markdownPreview/277497423/docs/progress?_ijt=3l4bp4ejcm389oqs945ukjbr59)

`PyCharm 本地运行、样例脚本和基础自动测试均已通过。`

## **3\. 今日学习到的工程概念**

### **3.1 命令行脚本与输入参数**

今天明确了一个重要概念：

![](http://localhost:63342/markdownPreview/277497423/docs/progress?_ijt=3l4bp4ejcm389oqs945ukjbr59)

`程序负责处理规则，参数负责告诉程序本次处理什么输入。`

当前 `scripts/analyze_token.py` 不是最终产品界面，而是早期开发和测试时的本地入口。

它的价值在于：

-   快速验证分析逻辑。
    
-   快速替换不同输入样例。
    
-   方便调试和自动测试。
    
-   后续可以被 API、定时任务或 Hermes 调用。
    

### **3.2 当前结构化结果与未来报告的区别**

当前脚本输出的是结构化分析结果，例如：

![](http://localhost:63342/markdownPreview/277497423/docs/progress?_ijt=3l4bp4ejcm389oqs945ukjbr59)

`risk_score opportunity_score grade action reasons`

它不是最终面向人的完整报告，而是后续报告层可使用的基础判断结果。

当前阶段的职责可以先这样理解：

![](http://localhost:63342/markdownPreview/277497423/docs/progress?_ijt=3l4bp4ejcm389oqs945ukjbr59)

`ChainMind 核心逻辑负责结构化判断。 AI 报告层负责把判断解释成人能读懂的摘要。 Hermes 更偏向负责触发、调度和推送。`

## **4\. Phase 1 今日检验内容**

### **4.1 Phase 1 当前理解**

Phase 1 当前先聚焦：

![](http://localhost:63342/markdownPreview/277497423/docs/progress?_ijt=3l4bp4ejcm389oqs945ukjbr59)

`用 Dune 手动分析 BSC token， 跑通风险过滤所需的数据查询和观察路径。`

今天做的是：

![](http://localhost:63342/markdownPreview/277497423/docs/progress?_ijt=3l4bp4ejcm389oqs945ukjbr59)

`Phase 1 Dune 手动分析流程首轮检验。`

它不是一次性完成整个项目，也不是马上完成所有后续阶段。

### **4.2 已检验的 Dune 分析模块**

今天已经对目标代币 `14` 检验了以下模块：

1.  DEX 交易活动观察。
    
2.  5 分钟买卖盘与净买入观察。
    
3.  Buyer Analysis 排名买家分析。
    
4.  Tracks All Trades 全量交易行为查看。
    
5.  Holder Analysis 持有人汇总与集中度字段查看。
    
6.  合约创建信息查询。
    
7.  早期买家入场前 BNB 资金来源查询。
    
8.  selected early buyers 的同来源资金汇总。
    

当前检验结论：

![](http://localhost:63342/markdownPreview/277497423/docs/progress?_ijt=3l4bp4ejcm389oqs945ukjbr59)

`Phase 1 的主要 Dune 查询路径已经能够跑通。`

## **5\. 目标代币检验记录**

### **5.1 合约创建信息**

今天已从 Dune 查询到该代币的创建记录：

| 字段 | 观察结果 |
| --- | --- |
| 创建时间 | 2026-05-17 16:12:21 |
| 区块号 | 98843750 |
| 创建交易 | 0xe9f50e4d32b55431717ee394d54f1615961b3f293dbdeb5d15a4bc8478b80d01 |
| 代币地址 | 0x205f39c39f5fe15d4ef000aeb835de8deb264444 |
| 创建侧地址观察值 | 0x757eba15a64468e6535532fcf093cef90e226f85 |

说明：

-   当前创建记录查询已可用。
    
-   本次只做流程检验，没有展开字节码审计。
    

### **5.2 交易与持有人字段**

今天从 Dune 看到了以下关键字段：

-   交易者活跃度。
    
-   `net_buy_usd` 变化。
    
-   买卖交易比例。
    
-   trader 的买入额、卖出额、净 token 变化。
    
-   holder 数量与 top holder 集中度字段。
    

Holder 汇总中观察到：

| 字段 | 观察值 |
| --- | --- |
| holder_count | 1985 |
| buy_volume_usd | 2188487.9 |
| sell_volume_usd | 2169786.4 |
| net_buy_usd | 18701.5 |
| top10_supply_pct | 0.2 |
| top20_supply_pct | 0.3 |

注意：

![](http://localhost:63342/markdownPreview/277497423/docs/progress?_ijt=3l4bp4ejcm389oqs945ukjbr59)

`集中度字段的百分比展示口径后续需要进一步确认， 不能仅凭显示值直接形成正式规则。`

### **5.3 早期买家分析**

今天已拿到前排早期买家的排名、首次买入时间、买入额和当前余额字段。

本次用于资金来源测试的前 5 个 early buyers 为：

| 排名 | 地址 |
| --- | --- |
| 1 | 0x0f80aa9dd2aff0d79455a1f7843c6e39e5a27985 |
| 2 | 0xa9b0295aa2d8486735d3fb3e92ab77e678ae3f9a |
| 3 | 0x79e337339346c9f5786a746916a0600d3f9eda65 |
| 4 | 0x175c6e02f549d9ae58205693854b2f8f8621022a |
| 5 | 0x4dc0c365578ed0b5161ce97551c613354df3e400 |

通过该模块，后续可以继续观察：

-   早期买家是否大量退出。
    
-   前排买家买入时间是否过度集中。
    
-   早期买家当前余额是否快速归零。
    

### **5.4 资金来源与同来源信号**

今天已完成前 5 个 early buyers 的入场前 BNB 资金来源测试。

观察到：

1.  排名第 1 的 early buyer 在首次买入前收到了多笔 BNB 入账。
    
2.  地址 `0x62ccef0b4545166f721caa9fee13c1d3767e27dc` 在选定 early buyers 中覆盖了 2 个买家。
    
3.  地址 `0x10ed43c718714eb63d5aa57b78b54704e256024e` 也覆盖了 2 个买家，但这类基础设施地址不能直接当作真实出资人判断。
    

本次学习到的关键点：

![](http://localhost:63342/markdownPreview/277497423/docs/progress?_ijt=3l4bp4ejcm389oqs945ukjbr59)

`同来源资金是风险证据之一， 但同一个来源地址不一定代表同一个真实人或同一实体。`

后续若要把 same-funder 信号写入规则，需要先区分：

-   普通钱包地址。
    
-   DEX Router。
    
-   池子合约。
    
-   其他协议基础设施地址。
    

## **6\. Phase 1 当前结论**

### **6.1 已完成**

截至 2026-05-21，已经完成：

-   Phase 1 的首轮流程检验。
    
-   Dune 主要分析模块可执行性验证。
    
-   当前项目 Python 本地运行与测试验证。
    
-   第一份 Phase 1 检验报告落盘。
    

本次检验报告位置：

![](http://localhost:63342/markdownPreview/277497423/docs/progress?_ijt=3l4bp4ejcm389oqs945ukjbr59)

`experiments/week1-risk-filter/phase1-check-report.md`

### **6.2 当前阶段判断**

当前可以将 Phase 1 状态记录为：

![](http://localhost:63342/markdownPreview/277497423/docs/progress?_ijt=3l4bp4ejcm389oqs945ukjbr59)

`Phase 1 首轮检验完成。`

这表示：

-   手动分析流程可跑通。
    
-   查询模块已被理解和验证。
    
-   可以进入下一阶段准备。
    

这不表示：

-   整个项目已经完成。
    
-   后续规则、报告、实体识别、推送、复盘已经完成。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->







几天继续了链上数据分析，AI+Defi投研报告自动项目的学习详细链接[链接](https://github.com/may-tonk/ai-web3-school-cohort-0/tree/codex/chainmind-foundation)
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->








**今天和AI探讨了链上数据分析，AI+Defi的想法，简单的建立了一个工作项目计划，内容太多了，上传到了AI x Web3school的GitHub了；详细请查看**[**链接**](https://github.com/may-tonk/ai-web3-school-cohort-0/blob/master/daily/2026-05-19/AI_DeFi_Meme_Workflow_%E5%AD%A6%E4%B9%A0%E6%80%BB%E7%BB%93.md)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->









\# 2026-05-18 — Day 1: 初始化与学习启动

\> 日期：2026-05-18

\> 周次：Week 1

\> 主题：AI and Web3 foundations — 基础对齐 + 数据连接

\---

\## 📝 今日学习内容

\### 课程/资料阅读

\- \[x\] 读取 Learning Agent Prompt: [https://aiweb3.school/learning-agent.zh.txt](https://aiweb3.school/learning-agent.zh.txt)

\- \[x\] 阅读 Handbook 结构和内容：[https://aiweb3.school/zh/handbook/](https://aiweb3.school/zh/handbook/)

\- \[x\] 了解 WCB Agent API 文档: [https://web3career.build/llms.txt](https://web3career.build/llms.txt)

\### 关键收获

\- Learning Agent 设计原则：轻量优先、人工确认、开源沉淀、隐私安全

\- 仓库结构：daily/ tasks/ experiments/ handbook-feedback/ hackathon/ submissions/ templates/

\- 每日流程：课程 → 实践 → 笔记 → 打卡

\- 课程时长确认：\*\*4 周\*\*（2026-05-18 → 2026-06-14）

\---

\## 🚀 今日产出物

\### 1. GitHub 学习仓库（完成初始化）

\- 创建本地仓库并 push 到 GitHub

\- 仓库地址：[https://github.com/may-tonk/ai-web3-school-cohort-0](https://github.com/may-tonk/ai-web3-school-cohort-0)

\- 总计 **5 次 commit**

\### 2. 核心文件

\- \[x\] `profile.md` — 学员画像（技能、目标、方向）

\- \[x\] `learning-plan.md` — 4 周精确学习计划（ChainMind 项目主线）

\- \[x\] `tasks/week1-daily-tasks.md` — Week 1 每日任务清单

\- \[x\] `README.md` — 项目介绍 + Week 1 目标 + 记录结构

\### 3. 目录结构

\- \[x\] `daily/` — 每日学习笔记

\- \[x\] `tasks/` — 每周任务清单

\- \[x\] `experiments/` — 实验记录

\- \[x\] `handbook-feedback/` — 手册反馈

\- \[x\] `submissions/` — 最终交付物

\- \[x\] `templates/` — 笔记模板

\- \[x\] `hackathon/` — 黑客松材料

\### 4. 环境配置

\- \[x\] `.env` 安全存放 WCB Agent Secret API Key（已加入 .gitignore）

\- \[x\] `.gitignore` — 排除敏感文件

\- \[x\] 仓库移至 D 盘`D:\ai-web3-school-cohort-0`）

\### 5. WCB 平台连接

\- \[x\] 验证 WCB API 连接正常

\- \[x\] 确认已录取 AI × Web3 School（Program ID: `cmnx791nl008sru0167pzp4ki`）

\- \[x\] 查看今日活动安排（Co-learning + AI 基础讲座）

\---

\## 📊 今日打卡信息

**打卡类型**：初始化完成 / 学习记录

**主要证据**：GitHub 仓库 + 学习计划 + 每日笔记

**证据链接**：[https://github.com/may-tonk/ai-web3-school-cohort-0](https://github.com/may-tonk/ai-web3-school-cohort-0)

\---

\## 🤔 反思与问题

1\. 平台任务似乎尚未发布`tasks.listForLearner` 返回空），可能需要明天再查。

2\. 今天以工程化初始化为主，明天开始进入核心学习与编码阶段。

3\. 需要了解 Hermes Agent 的具体使用方式，以便更好地将学习流程自动化。

\---

\## 📅 明日计划（Day 2 — 5/19）

\- \[ \] 搭建 `chainmind/core/agent.py` ReAct 骨架

\- \[ \] 学习 Handbook LLM / Tool Use 章节

\- \[ \] 实现多工具支持

\- \[ \] git commit: `feat: multi-tool support with retry`

\---
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
