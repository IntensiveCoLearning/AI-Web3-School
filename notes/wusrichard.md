---
timezone: UTC+8
---

# 吳語復

**GitHub ID:** wusrichard

**Telegram:** @wuspunk

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->
### **Reflection**

Reflection 是讓 Agent 檢查自己的中間結果，例如發現資訊不足、工具失敗、計畫不合理，然後修正下一步。

它適合提升複雜任務質量，但不能取代外部驗證。 Agent 自我反思仍然由模型完成，模型可能會為自己的錯誤找理由。尤其是寫入、授權、支付這類動作，reflection 只能作為輔助診斷，不能作為最終安全判斷。

-   _自我檢查可以提高質量，確定性檢查才能承載風險。_ \*
    

### **Multi-Agent**

Multi-Agent 是多個 Agent 分工協作，例如研究 Agent 讀取資料，開發 Agent 寫程式碼，安全 Agent 做風險審查，執行 Agent 呼叫工具。

它適合複雜工作流程，但也會放大協調問題：上下文傳遞遺失、責任邊界模糊、一個 Agent 的錯誤被另一個 Agent 當成事實、工具權限擴散。

做 Multi-Agent 時，要先問一個樸素問題：多個 Agent 是否真的減少複雜度？如果只是把一個不清楚的流程拆成多個不清楚的角色，系統會更難調試。

# **在 AI x Web3 中的位置**

Agent 位元在模型能力和鏈上執行之間。它可以把使用者目標推進成多步驟流程，但不能繞過帳戶、權限和結算規則。

一個相對穩的 AI x Web3 Agent 架構通常是：

1.  用戶提出目標和限制。
    
2.  Agent 讀取上下文並產生計劃。
    
3.  系統把計畫拆成唯讀步驟和候選寫入步驟。
    
4.  唯讀工具自動執行，寫入工具進入 policy 檢查。
    
5.  Simulation 展示鏈上影響。
    
6.  使用者確認高風險動作。
    
7.  Wallet / Smart Account 執行。
    
8.  日誌記錄每一步和最終狀態。
    

最危險的設計是讓 Agent 同時擁有模糊目標、廣泛工具、長期記憶和大額資產權限。
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->

一個 Agent 如果只有模型和工具，就​​像一個會說話的腳本執行器。真正可用的 Agent 必須知道自己能做什麼、不能做什麼、做完如何驗證、失敗如何停止、誰能審計它所做的事情。

工具比回答更危險：讀取資料、寫資料庫、傳送請求、改配置不是同一風險等級。

狀態必須外置和可查：任務進度、工具結果、失敗原因、使用者確認都要記錄，不應只藏在模型脈絡中。

停止條件要明確：達到目標、超出預算、資訊不足、風險越界、用戶拒絕，都應該讓 Agent 停下來  
  
Tool Use

Tool Use 是 Agent 呼叫外部能力：搜尋、資料庫、API、程式碼執行、郵件、支付介面、內部系統等。

工具讓 Agent 從「會回答」變成「能做事」。但工具也讓 Prompt Injection 和模型誤判變得危險。一個能讀網頁的 Agent 被惡意網頁影響，和一個能寫入系統的 Agent 被惡意網頁影響，後果完全不同。

工具設計要明確：

輸入 schema

權限範圍

是否唯讀

是否會產生外部副作用

呼叫前後如何記錄

哪些呼叫需要人工確認  
  
Planning

Planning 是把目標拆成步驟。例如「幫我分析這個 DAO 提案」可以拆成讀取提案、檢索歷史討論、總結爭議、檢查投票機制、產生風險清單。

計劃有用，但不能神化。模型生成的計劃只是候選路線，不是授權。越靠近高風險動作，計劃越需要被系統規則拆開檢查。

一個好的 Agent plan 應該可以暴露：

每一步需要什麼工具

每一步讀還是寫

哪些步驟可自動執行

哪些步驟需要用戶確認

失敗時是否可以重試

最終如何驗證任務完成
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->



一個完整的 RAG 流程最多會用到**三種模型**：

```
Embedding 模型   →  把文字變向量（存進知識庫、搜尋時用）
Rerank 模型      →  評分排序搜出來的結果
LLM              →  看著排好的文件生成答案

```

​[http://192.168.40.203/litellm](http://192.168.40.203/litellm)  
去了解litellm跟帳密怎麼使用

怎麼安裝模型

Rerank怎麼新增
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->




retrieve

-   **事前準備（建立索引）**：把你的文件切成小塊（chunks），用 embedding model 轉成向量，存到向量資料庫（例如 Pinecone、Chroma、Weaviate）
    
-   **查詢時**：使用者問問題 → 也轉成向量 → 用「向量相似度」（通常是 cosine similarity）找出最接近的幾個片段
    
-   **回傳結果**：把找到的 top-k 個片段交給 LLM
    
-   **Vector Retriever**：基於 embedding 向量相似度搜尋（語意搜尋）
    
-   **Keyword Retriever**：傳統的關鍵字搜尋，例如 BM25
    
-   **Hybrid Retriever**：混合上面兩種，通常效果更好
    
-   **Multi-Query Retriever**：把一個問題改寫成多個問題去查，提高召回率
    
-   **Re-ranker**：先粗略撈一批，再用更強的模型重新排序
    

[**Rerank**](https://aiweb3.school/zh/handbook/ai/rag/#rerank)

### 什麼時候該加 Rerank？

實務上的判斷：

-   文件庫很大（幾萬筆以上）→ **要加**
    
-   使用者問題很多樣、語意複雜 → **要加**
    
-   對答案精準度要求高（法律、醫療、金融）→ **強烈建議**
    
-   玩具專案、文件就幾十筆 → 不加也沒差
    

**Retriever** = 圖書館員憑印象從書架上抽出 50 本「可能相關」的書

-   **Reranker** = 助理把這 50 本書每一本翻一翻、跟你的問題對照，挑出最相關的 5 本
    
-   **LLM** = 作家根據這 5 本書寫答案
    

[**Citation**](https://aiweb3.school/zh/handbook/ai/rag/#citation)

Citation（引用、出處標註）是 RAG 系統的「最後一哩路」——讓 LLM 在回答時**明確告訴你「這句話是從哪份文件來的」**。

### 為什麼需要 Citation？

RAG 雖然讓 LLM 有資料可以參考，但還是有兩個老問題：

1.  **幻覺（Hallucination）**：LLM 可能會「腦補」，講出資料裡根本沒有的內容
    
2.  **可信度問題**：使用者怎麼知道答案是真的還是假的？
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->





## Three Product Components

他介绍了 Cobo Agentic Wallet 的三个核心方案：

### 1) MPC Security Model

Cobo 采用 MPC 架构服务 agent 场景，核心是解决“私钥由谁持有”的底层安全问题。与常见的 TEE、session token 或 API key delegated authorization 不同，MPC 让 Cobo、agent 以及用户各自持有私钥分片，任意一方都无法单独掌控资金转移权限。

他说明，常规资金管理下没有任何单方可以随意挪用用户资金，但在极端情况下仍允许用户导出分片以转移资金。该模型被设计成 2/2 threshold 的共管模式，用于保证资金安全和 self-custody 属性。

### 2) Pact Authority

Pact 是一个位于钱包之上的授权协议层，用来明确告诉 agent“能做什么、不能做什么、何时停下”。Johnny 解释，一个 pact 通常包含四个要素：

-   **Intent**：希望 agent 完成的目标，例如“ETH 低于 2000 时买入，高于 2500 时卖出”。
    
-   **Execution plan**：AI 根据 intent 转换出的可审计执行计划，包含调用哪个合约、数量、token pair 等细节。
    
-   **Policy**：风控约束，包括预算、白名单、链、token、合约限制，甚至可以精确到 ABI 参数级别。
    
-   **Completion condition**：完成条件与失效条件，避免永久授权和 zombie permission，例如交易总金额上限、时间到期后自动 revoke。
    

他展示了 pact 的执行流程：用户在 agent 中提出意图，agent 与钱包接口生成 execution plan 和 policy，封装成 pact 推送到移动端，用户在 app 内审阅、修改、批准或拒绝；批准后，agent 才能在可控范围内执行链上动作。

### 3) Recipe Skill Layer

Recipe 是为了解决“怎么把事做对”而设计的技能层，类似预加载知识库。Johnny 认为大模型本身并不擅长自主完成复杂链上操作，因此需要把合约地址、ABI 参数、风险边界、调用范式等封装成 recipe，供 agent 按照验证过的路径执行。

他把 recipe 定义为“知识胶囊”，用于减少幻觉、减少临时构造带来的错误，并支持主流 DeFi 场景。分享中提到已经上线或支持的 recipe 包括：

-   Uniswap V3
    
-   Polymarket
    
-   Hyperliquid
    
-   以及其他主流链上场景
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->






聽agent **Long-term Memory**分享

[之前大家都會琢磨claud.md](http://claud.md) 控制200行內

前面半小時產品端

chatGPT是聊天用

claude code是寫程式用

long term meeomry 沒那麼嚴重

後面是工程端

小龍蝦會失意

agent meory

艾瑪似的向量不好 導致他的memory不好用

因為他本身是用英文去做的

多模态数据进行向量化，然后 做向量相似度的检索
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->







今天在畫Framwork跟Web3的**Open Agentic Economy，感覺有個大框架的圖下去理解會比較懂**
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->








0523

### **检索增强生成（RAG）**

RAG 不是“给模型接一个向量库”这么简单。它是一条把外部知识取回、筛选、引用、交给模型使用的证据链，用来减少过期知识和无来源回答。

RAG 的作用是：当用户提出问题时，系统先从知识库里找相关材料，再让模型基于这些材料回答。

RAG 很常见：产品文档问答、代码库助手、研究摘要、客服知识库、SDK Copilot、内部知识检索。

RAG 的核心不是让回答更长，而是让回答有来源、有版本、有边界。**没有 citation 和 freshness 的 RAG，只是把幻觉从模型内部搬到了检索系统里。**

### **Chunking**

是把长文档切成可检索片段。切太小，语义断裂；切太大，检索结果噪声多，token 成本高

比较稳的做法是按结构切：标题、API endpoint、函数说明、标准小节、FAQ 问答、审计或变更记录。每个 chunk 保留来源 URL、标题路径、更新时间和版本

### [**Vector DB**](https://aiweb3.school/zh/handbook/ai/rag/#vector-db)

用来存储 embedding，并按相似度检索相关 chunk。它解决的是“语义相近内容怎么快速找到”的问题。

但向量相似不等于答案正确。一个旧版本 SDK 文档可能和用户问题高度相似，却已经不适用；一个第三方博客可能写得很像官方文档，却缺少权威性。

所以 Vector DB 里不应该只存向量，还要存 metadata：来源、版本、chain、更新时间、可信等级、是否废弃。检索时先过滤，再排序。

下面是沒聽過的

### **Retriever**

是根据用户问题取回候选材料的组件。它可以是向量检索、关键词检索、混合检索、图检索，也可以加上 metadata filter。

好的 retriever 不能只看语义相似度。它还要知道用户问的是哪个产品、哪个版本、哪段时间、官方文档还是社区讨论。比如同一个 API 在不同 SDK 版本里可能参数

### **Citation** 是把答案里的关键结论连接回来源。它不是装饰，而是用户验证答案的入口。

在技术问答里，citation 至少要能说明：

-   这句话来自哪份文档或链上记录
    
-   来源是否官方
    
-   文档版本或更新时间
    
-   哪些结论只是模型归纳
    
-   哪些地方没有足够证据
    

RAG 位在 Knowledge Base 和模型之间。它帮 Agent 查资料、补上下文、引用证据，但不负责最终执行。

常见应用包括：

-   协议文档问答
    
-   合约接口解释
    
-   治理提案和论坛摘要
    
-   审计报告检索
    
-   SDK / API Copilot
    
-   交易解释时补充项目背景
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->









oken 是模型处理文本的基本单位。它不一定等于一个汉字、一个英文单词或一个符号，而是 tokenizer 切分后的片段。**不要把“页面很短”误认为“token 很少”**。代码、JSON、长标识符、表格和混合语言文本经常比普通段落更吃 token。

Json、table這種表格。都比較吃token

Embedding 是把文本、代码或其他对象映射成向量，用来衡量“语义上是否接近”。它常用于搜索、聚类、推荐、异常检测和 RAG。

把資料代碼應射程向量來，用COS還看是否接近語意，用在RAG

Hallucination 指模型生成了看起来合理、但并不真实或无法验证的内容。它可能编造 API、错误解释代码、引用不存在的资料，或者把旧版本文档当成当前状态。

Hallucination 就是造成AI的幻覺

Multimodal 模型可以处理文本、图片、音频、视频或屏幕截图。对 builders 来说，它的价值不是“更炫”，而是让模型读懂更多真实工作界面：图表、控制台、设计稿、应用页面、错误截图和确认弹窗。

LLM 位在 AI x Web3 系统的理解和生成层。它负责把用户目标转成可讨论的计划，把复杂链上数据解释成人能读的语言，把文档和代码串成可执行思路。

-   数据层：RPC、索引器、预言机、向量库、项目文档。
    
-   编排层：Prompt、Context、RAG、Agent workflow。
    
-   执行层：工具调用、钱包、Smart Account、合约交互。
    
-   安全层：Guard、simulation、权限策略、人工确认、日志。
    

LLM 越靠近执行层，系统越要把它的自然语言输出变成可验证对象。

**提示词（Prompt）** 不是寫得越長越好，而是該有的邊界都要寫出來，避免讓AI去補沒有寫的東西，例如API

應該要寫出 • **指令分层要清楚**：系统规则、开发者规则、用户目标、检索内容不能混在一起。 • **输出格式要机器可检验**：关键结果尽量用 JSON schema、函数参数或明确字段承载。

• **高风险动作不能只靠 prompt 拦截**：写入数据库、发送消息、调用外部工具、执行支付或签名类动作，都必须再经过代码层校验和 human check。

Instruction 是给模型的任务规则。它应该回答：你是什么角色、要完成什么、不能做什么、遇到不确定信息怎么处理、输出应该是什么形态

一个实用写法是把 instruction 拆成四段：

-   任务目标
    
-   可用输入
    
-   禁止行为
    
-   输出格式和失败格式
    

Few-shot 是在 prompt 里放少量示例，让模型模仿示例的判断方式和输出格式。风险提示和不确定点，就可以放一个好示例和一个坏示例。

Prompt 处在用户目标和模型行为之间。它把“帮我看看这笔交易有没有问题”变成模型可以执行的任务：读取哪些字段、如何解释资产变化、哪些风险要标记、什么时候必须说不知道。

但 prompt 不应该独自承担安全。更稳的链路是：

1.  Prompt 定义任务和输出格式。
    
2.  Context 提供可信数据和来源边界。
    
3.  Model 生成解释或候选动作。
    
4.  Code 校验 schema 和业务规则。
    
5.  Guard / simulation 检查链上影响。
    
6.  Human check 确认高风险动作。
    

Context 是模型这一次能看到、能使用、能被影响的信息空间。真正难的不是把更多内容塞进去，而是把系统规则、用户目标、历史状态、工具结果和外部文档分清楚。

**模型只能基于它看见的上下文行动；系统必须决定什么能进上下文、带着什么身份进去、过期后怎么退出。**

Context Window 是模型一次请求能处理的最大上下文范围。窗口越大，能放进来的资料越多，但不代表模型会完美使用每个细节。

长上下文常见的问题是“看见了但没抓住重点”。如果你把合约源码、审计报告、治理讨论和交易日志全部塞进去，模型可能被无关内容分散注意力，也可能引用过期段落。

一个稳定的工具型 Agent 上下文，通常不只是“用户问题 + 一段 JSON”。它还应该包括：

-   当前任务状态
    
-   工具返回结果
    
-   相关日志或证据
    
-   可信数据来源
    
-   外部检查结果
    
-   用户原始意图
    
-   系統禁止事項和輸出 schema
    

Memory 是跨请求保留的信息，例如用户偏好、历史任务、常用钱包、Memory 不能替代实时授权。用户过去允许某个动作，不代表现在仍然允许。\*\*所有涉及身份、权限、资产或外部副作用的记忆，都必须重新绑定当前会话和当前授权。\*\*项目配置、上次分析结果。

Knowledge Base 是系统可检索的外部知识库，比如产品文档、SDK 文档、代码说明、论坛讨论、FAQ、内部 runbook。

为“钱包授权检查 Agent”设计一份 context spec。

选择一个场景：用户问“这个 dApp 要我 approve，可以签吗？”你需要列出模型回答前必须拿到的上下文：

-   chain id 和当前区块
    
-   token 合约、spender 地址、approve 数量
    
-   用户当前 allowance 和余额
    
-   spender 是否在可信列表
    
-   simulation 或静态检查结果
    
-   dApp 页面提供的说明，标记为不可信外部内容
    
-   用户本次意图
    

再写清楚哪些字段必须实时查询，哪些可以来自缓存，哪些不能被模型当成事实。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->










ReCt跟 Function Calling 的差別 看語言當初怎麼季季

ReCt會自己去想但不可控

Function Calling 會實際調用MCP 產出內容較明確

NL2SQL > 

今天有提到一個 "Playwright"  你可以先看一下, 這個做 E2E 用途

**1\. Playwright（網頁自動化測試框架）**

如何讓web去跟webapi不斷自動化測試?  

E2E 測試的概念是「從頭到尾走一遍」，模擬真實使用者的流程，而不是只測一個函式（Unit Test）或一個 API（Integration Test）。

例如：

早期透過爬蟲

2025使用微軟的工具play write MCP

現在用play wirter CLI

Claude → MCP Server → Playwright → 真實瀏覽器

\>>>

2025

建構虛擬機>>控API讓他可以動  
先讀懂API

知識拓譜去理解code 跟code 的關聯，郭sir是指底層跟底層的關聯，

code跟code 的知識拓譜連結寫成mermaid的格式，

爬完>整理>文件

讀取文件>看該怎麼改
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->












### **參考 / 先修教程**

[inute Blitz](https://docs.pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html)

[Tensors — PyTorch Tutorials](https://docs.pytorch.org/tutorials/beginner/blitz/tensor_tutorial.html)

### **下一個要接的主題：Natural Language Processing (NLP)**

natural language processing (NLP)

NLP 不僅限於書面文本。它還解決了語音識別和計算機視覺中的複雜挑戰，例如生成音頻樣本的轉錄或圖像描述。

**例如，當我們讀到「我餓了」這句話時，我們很容易理解它的意思。同樣，給定兩個句子，例如「我很餓」和「我很傷心」，我們可以輕鬆確定它們的相似程度。對於機器學習 (ML) 模型，此類任務更加困難。文本需要以一種使模型能夠從中學習的方式進行處理。**

### **Transformers：核心概念與 pipeline()**

Transformers 庫中最基本的對象是 **pipeline()** 函數。它將模型與其必要的預處理和後處理步驟連接起來，使我們能夠通過直接輸入任何文本並獲得最終的答案：

from transformers import pipeline translator = pipeline("translation", model="Helsinki-NLP/opus-mt-fr-en") translator("Ce cours est produit par Hugging Face.")

​

### **里程碑**

**2018 年 6 月**: [**GPT**](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf), 第一個預訓練的 Transformer 模型

### **Transformer 是大模型：為什麼要「共享 + 微調」**

**Transformer是大模型**

除了一些特例（如 DistilBERT）外，實現更好性能的一般策略是增加模型的大小以及預訓練的數據量。

Transformers是由一個團隊領導的（非常大的）模型項目，該團隊試圖減少預訓練對環境的影響，通過運行大量試驗以獲得最佳超參數。

想象一下，如果每次一個研究團隊、一個學生組織或一家公司想要訓練一個模型，都從頭開始訓練的。這將導致巨大的、不必要的浪費！

這就是爲什麼共享語言模型至關重要：共享經過訓練的權重，當遇見新的需求時在預訓練的權重之上進行微調，可以降低訓練模型訓練的算力和時間消耗，降低全球的總體計算成本和碳排放。

例如，可以利用英語的預訓練過的模型，然後在arXiv語料庫上對其進行微調，從而形成一個基於科學/研究的模型。

微調只需要有限的數據量：預訓練模型獲得的知識可以“遷移”到目標任務上，因此被稱爲_遷移學習_。

### **Transformer 模型的一般架構**

**Encoder (左側)**: 編碼器接收輸入並構建其表示（其特徵）。這意味着對模型進行了優化，以從輸入中獲得理解。

**Decoder (右側)**: 解碼器使用編碼器的表示（特徵）以及其他輸入來生成目標序列。這意味着該模型已針對生成輸出進行了優化。

**依任務類型選用的模型家族**

**Encoder-only models**: 適用於需要理解輸入的任務，如句子分類和命名實體識別。

**Decoder-only models**: 適用於生成任務，如文本生成。

**Encoder-decoder models** 或者 **sequence-to-sequence models**: 適用於需要根據輸入進行生成的任務，如翻譯或摘要。

**注意力層（Attention Layer）**

注意力層可以使用一個句子中的所有單詞（正如我們剛纔看到的，給定單詞的翻譯可以取決於它在句子中的其他單詞）。

然而，解碼器是按順序工作的，並且只能注意它已經翻譯過的句子中的單詞。

例如，當我們預測了翻譯目標的前三個單詞時，我們將它們提供給解碼器，然後解碼器使用編碼器的所有輸入來嘗試預測第四個單

### **架構與參數（Architecture vs. Checkpoints vs. Model）**

在本課程中，當我們深入探討 Transformers 模型時，您將看到「架構、參數和模型」這些術語。它們的含義略有不同：

**架構（Architecture）**：這是模型的骨架 — 每個層的定義以及模型中發生的每個操作。

**Checkpoints**：這些是將在給架構中結構中加載的權重。

**模型（Model）**：這是一個籠統的術語，沒有「架構」或「參數」那麼精確：它可以指兩者。爲了避免歧義，本課程使用將使用架構和參數。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->













今天主要是看LLM的課程，因為Web之前上過課比較熟悉，明天應該會架好agent，但今天上課聽得好像用Cladude code就可以配上hrmers 的skill  
LLM =   **Large  Language  Model**

## 核心概念

-   LLM = **Large Language Model**（大型語言模型）
    
-   特色：參數量可達**數十億～數千億**，能在大量文本中學到語言模式
    

## 訓練流程（最小必要直覺）

### Step 1：Pretraining（預訓練）

-   用大量語料做「下一個 token / 字詞」預測（自監督學習）
    
-   需要大量 GPU 訓練資源
    
-   2017 後 Transformer 成為主流架構
    

### Transformer 為何關鍵（直覺版）

-   **Attention**：讓模型在讀一句話時，能把注意力放在與當前字詞最相關的上下文，進而理解語意關聯
    
-   **可擴展性**：相較傳統 RNN 類模型，更能把在訓練中學到的語言模式「存得住、放得大」，因此更容易擴到更大模型與更長上下文
    

### Step 2：對齊 / 微調（人工標註）

-   透過人工標記「有意義 / 無意義」或「較好 / 較差」的回答，讓模型更符合人類偏好（常見做法：SFT、RLHF 等）
    

-   Pretraining / Transformer 架構概念
    
-   人工標註與對齊流程
    
-   模型可儲存更多語言模式（容量 / 表徵能力）
    

## Hugging face

## 你需要懂的 PyTorch 核心（不需要更多）

import torch x = torch.tensor(\[1.0, 2.0, 3.0\])

x.shape # 形狀

x.dtype # 資料型別

[x.to](http://x.to)("cuda") # 搬到 GPU（如果有）

| 層次 | 需要嗎 |
| --- | --- |
| 知道 tensor 是「裝數字的多維陣列」，類似 numpy array | ✅ 必須 |
| 懂 shape、dtype 代表什麼 | ✅ 必須 |
| 懂為什麼要 .to("cuda") | ✅ 最好懂（GPU 加速） |
| 懂底層記憶體怎麼存 | ❌ 不需要 |

2) Dataset / DataLoader（資料怎麼被「批次」餵進模型）

### 只要知道概念即可

```python
from torch.utils.data import DataLoader, Dataset
# 你懂得「資料如何被切成 batch 丟進 model」就夠了
```

### 需要的直覺

| 層次 | 需要嗎 |
| --- | --- |
| 知道資料會被切成一批一批（batch）餵給模型 | ✅ 必須 |
| 知道 batch_size 是什麼意思 | ✅ 必須 |
| 自己實作一個 Dataset class | ❌ 不需要（Hugging Face 會幫你） |

## 3) 前向傳播（Forward pass）：`output = model(input)`

### 最小會用（必備）

```python
output = model(input)   # 就是這樣呼叫模型
```

### 需要的直覺

| 層次 | 需要嗎 |
| --- | --- |
| 知道這行的意思是「把資料丟進模型，得到預測結果」 | ✅ 必須 |
| 知道模型內部有很多層（layers）在做矩陣運算 | ✅ 最好懂 |
| 懂每一層的數學公式 | ❌ 不需要 |

## 4) 訓練迴圈（最重要）

### 你一定要懂的 4 行（背後邏輯）

```python
optimizer.zero_grad()   # 清掉上一輪的梯度，否則會累加
loss = criterion(output, label)
loss.backward()         # 反向傳播：算出每個參數對 loss 的影響（梯度）
optimizer.step()        # 根據梯度更新參數（讓模型變好一點）
```

### 需要的直覺

| 層次 | 需要嗎 |
| --- | --- |
| 懂「模型預測 → 算誤差 → 反向傳播 → 更新參數」這個循環 | ✅ 必須 |
| 知道 loss 越小代表模型越好 | ✅ 必須 |
| 懂梯度下降的直覺（往坡度最陡的方向走） | ✅ 必須 |
| 會推導反向傳播的微積分 | ❌ 不需要 |
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
