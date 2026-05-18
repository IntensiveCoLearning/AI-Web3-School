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
