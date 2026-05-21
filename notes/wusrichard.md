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
