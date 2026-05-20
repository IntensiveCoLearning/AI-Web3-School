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
# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->
1
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
