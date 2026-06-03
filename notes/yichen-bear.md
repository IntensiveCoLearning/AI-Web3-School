---
timezone: UTC+8
---

# yichen-bear

**GitHub ID:** yichen-bear

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->
文章閱讀：[https://hermes-agent.nousresearch.com/docs/](https://hermes-agent.nousresearch.com/docs/)

這是 Hermes Agent 官方說明文件的重點整理：

核心定位與特色

-   具備自我進化能力 (Closed Learning Loop)：這是唯一內建學習循環的 AI Agent。它能從經驗中建立技能、在執行過程中優化技能、持久化保留知識，並在不同對話間深化對使用者的理解。
    
-   非傳統 Chatbot：它不是單純綁定在 IDE 的編碼副駕駛 (Coding Copilot)，也不是單一 API 的包裝。它是一個自主運作的 Agent，運行時間越長，能力就越強。
    
-   隨處可運作：不依賴使用者的筆電。可運行於 5 美元的 VPS、GPU 叢集，或幾乎不耗費閒置成本的無伺服器架構（如 Daytona、Modal），並支援 6 種終端後端（包含 Local、Docker、SSH、Singularity 等）。
    

支援平台與整合功能

-   20種以上的傳訊平台整合：使用者不需要透過 SSH 連線到伺服器，直接從一處網關就能透過 Telegram、Discord、Slack、WhatsApp、Teams、Signal 甚至是系統內建簡訊等平台與其對話並指派工作。
    
-   全功能網頁控制：透過 Nous Portal 訂閱，即可一體化使用網頁搜尋、資料提取、瀏覽、視覺辨識、圖像生成與 TTS（文字轉語音）等功能。此外也支援 MCP（Model Context Protocol）伺服器來擴充工具。
    
-   自動化與多任務：內建 Cron 定時任務排程，並能生成隔離的子 Agent（Subagents）來處理並行工作流。
    

快速安裝指令

Linux / macOS / WSL2 / Android (Termux)

curl -fsSL [https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh](https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh) | bash

Windows (PowerShell 測試版)

iex (irm [https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.ps1](https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.ps1))

提示：安裝完成後，執行 hermes setup --portal 即可完成 OAuth 驗證，直接啟用模型與四大網關工具（搜尋、生圖、TTS、瀏覽器）。

開發者與 LLM 友善資源

為了方便大型語言模型（LLM）或編碼 Agent 快速讀取，官方提供了機器可讀的文本入口（每次部署皆會更新）：

-   /llms.txt (~17 KB)：精簡版的文件索引與短描述，適合載入 LLM 上下文。
    
-   /llms-full.txt (~1.8 MB)：將所有說明頁面整合為單一文字檔案，方便進行一次性吞吐與訓練。
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->

簡報閱讀：[https://docs.google.com/presentation/d/1NUeO115bLnz0V8aejx9bYqQTaDrznTjhgbCkn-pK1a0/edit?slide=id.g3b7c5a77f32\_0\_395#slide=id.g3b7c5a77f32\_0\_395](https://docs.google.com/presentation/d/1NUeO115bLnz0V8aejx9bYqQTaDrznTjhgbCkn-pK1a0/edit?slide=id.g3b7c5a77f32_0_395#slide=id.g3b7c5a77f32_0_395)

## 一、 個人主權的起點：私鑰、助記詞與地址

Web3 的世界強調「資產自我託管」，而一切的權力皆源自於密碼學：

-   **私鑰 (Private Key)：** 你的「終極簽名印章」，誰擁有誰就能控制資產。私鑰一旦丟失便無法重置，資產也將永久遺失。
    
-   **助記詞 (Seed Phrase)：** 私鑰的可讀備份，可衍生生成多個帳戶。
    
-   **地址 (Address)：** 公鑰截取後的字串，屬於公開的收款號碼。
    
-   **安全原則：** 絕大多數的資產被盜源於私鑰外洩或釣魚授權。必須做到**不截圖、不放網盤、不發人、不複製到不可信環境**。
    

## 二、 交易的生命週期與 Gas Fee 的本質

在 Web3 中，任何行為（轉帳、調用合約、投票）都是一筆交易（Transaction）。

-   **交易三要素：** 你要做的事 + 手續費 (Gas Fee) + 防重放序號 (Nonce)。
    
-   **Gas Fee 的三層作用：** 1. 防止垃圾交易淹沒網絡（提高作惡成本）。
    
    2\. 激勵打包者／驗證者提供算力與頻寬。
    
    3\. 形成經濟閉環，維持去中心化網絡的長期穩定運轉。
    
-   **交易流程：** 錢包（簽名）--> RPC/Node（傳播）--> Mempool（排隊）--> Builder/Validator（挑選）--> Block（落盤／寫入區塊）。
    
-   **不可篡改需要時間：** 區塊鏈的「最終確認 (Finality)」需要時間累積（例如 PoS 機制下約需 12–13 分鐘），隨著後續區塊不斷疊加，歷史被推翻的成本會變得極高。
    

## 三、 共識機制與智能合約 (Code is Law)

Web3 如何在互不信任的全球節點間達成共識，並實現自動化規則？

-   **共識機制對比：**
    
    -   **PoW（工作量證明，如 BTC）：** 靠算力競爭記帳，耗能但極其安全。
        
    -   **PoS（權益證明，如 ETH）：** 靠質押資產與隨機抽籤記帳，更節能，作惡會被罰沒保證金。
        
-   **智能合約的本質：** 寫在區塊鏈帳本裡、在虛擬機 (EVM) 裡運行的「可執行代碼」。它讓規則可驗證、部署後難以更改，進而將傳統對「人或機構」的信任，轉化為對「代碼與共識」的信任，大幅降低中介摩擦成本。
    

## 四、 Web3 關鍵特性與未來的四個思考

簡報最後指出，Web3 是一個結合了**密碼學**（提供可信基礎）、**經濟學**（激勵機制設計）與**社會學**（去中心化治理）的跨學科領域。

### 關鍵特性

-   **無許可：** 任何人都能讀寫網絡。
    
-   **抗審查：** 節點全球分佈，入口（錢包、RPC、前端）皆可替換。
    
-   **開放開源：** 代碼開源、交易記錄公開透明可審計。
    
-   **隱私現狀：** 目前多為「偽匿名」（地址公開但隱私不等於真實身份），未來正朝向零知識證明 (ZK) 等隱私方案演進。
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->


文章閱讀：[https://support.metamask.io/start/getting-started-with-metamask/](https://support.metamask.io/start/getting-started-with-metamask/)

## 1\. 什麼是 MetaMask？

-   **核心功能**：它是一款瀏覽器擴充功能與行動裝置 App，主要用來管理 Ethereum、Solana、Bitcoin 等多個區塊鏈的私鑰。
    
-   **主要用途**：作為加密貨幣錢包（儲存 ETH 與其他代幣），並與去中心化應用程式（dapps）進行互動。
    
-   **自主掌控**：屬於自託管錢包（Self-custodial wallet），使用者擁有資產與加密身份的完全控制權。
    

* * *

## 2\. 安裝與支援平台

-   **瀏覽器擴充功能**：支援 **Chrome**、**Firefox**、**Edge**、**Brave** 等瀏覽器，可直接至各瀏覽器的線上應用程式商店搜尋下載。
    
-   **行動裝置**：提供 iOS 與 Android 的 Mobile app。
    
-   安裝完成後，可以選擇[建立新錢包](https://www.google.com/search?q=https://support.metamask.io/start/getting-started-with-metamask/create-a-new-metamask-wallet/)或[匯入現有錢包](https://www.google.com/search?q=https://support.metamask.io/start/getting-started-with-metamask/connect-or-import-an-existing-wallet-in-metamask/)。
    

* * *

## 3\. 地區使用限制（Infura 節點服務）

-   **錢包本身**：全球任何國家的人都可以自由下載與使用 MetaMask。
    
-   **預設節點限制**：MetaMask 預設使用 **Infura** 節點來讀取和處理區塊鏈交易。由於 Infura 是美國公司，必須遵守美國的制裁法令，因此預設服務**不支援**以下地區：
    
    > 伊朗、北韓、古巴、敘利亞，以及烏克蘭的克里米亞、頓內茨克和盧甘斯克地區。
    
-   **解決方案**：因為 MetaMask 具備高度自訂性，受限制地區的使用者可以自行切換至非 Infura 的其他區塊鏈節點來正常使用。
    

* * *

## 4\. 錢包資金充值

-   建立錢包後，系統會提示進行充值。
    
-   支援透過金融卡/信用卡購買、從其他帳戶接收加密貨幣，或是從中心化交易所（CEX）轉帳進來。
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->



閱讀文章：[https://ethereum.org/developers/docs/accounts/](https://ethereum.org/developers/docs/accounts/)

### 1\. 什麼是以太坊帳戶？

以太坊帳戶是一個擁有以太幣（ETH）餘額、並能在以太坊網絡上發送交易的實體。它可以由使用者控制，也可以透過智能合約來部署。

* * *

### 2\. 兩大帳戶類型與差異

以太坊帳戶主要分為以下兩種，兩者皆可接收、持有和發送 ETH 或代幣，並能與智能合約互動：

-   **外部帳戶 (Externally-owned account, EOA)：**
    
    -   由任何持有**私鑰**的人控制。
        
    -   創建帳戶完全免費。
        
    -   可以主動發起交易。
        
    -   外部帳戶之間的交易只能是 ETH 或代幣的轉移。
        
-   **合約帳戶 (Contract account)：**
    
    -   由**智能合約代碼**控制，沒有私鑰。
        
    -   創建時需要消耗網絡儲存空間，因此需要支付費用。
        
    -   無法主動發起交易，只能在收到交易時觸發代碼來執行回應（例如轉移代幣或創建新合約）。
        

* * *

### 3\. 帳戶的四大組成欄位

無論哪種帳戶，在以太坊虛擬機（EVM）中都包含以下四個基本欄位：

-   **nonce：** 交易計數器。外部帳戶代表發出的交易數量；合約帳戶代表創建的合約數量。用來防止重放攻擊。
    
-   **balance：** 該帳戶擁有的以太幣數量（以最小單位 Wei 計算，$1 \\text{ ETH} = 10^{18} \\text{ Wei}$）。
    
-   **codeHash：** 帳戶在 EVM 中的代碼雜湊值。外部帳戶的此欄位為空字串的雜湊。
    
-   **storageRoot：** 儲存樹的根節點雜湊，用來編碼該帳戶的儲存內容。
    

* * *

### 4\. 關鍵觀念釐清

-   **私鑰安全：** 外部帳戶由一對加密金鑰（公鑰與私鑰）組成。你擁有的不是加密貨幣，而是控制帳戶資金的私鑰，因此私鑰必須絕對保密。
    
-   **帳戶 $\\neq$ 錢包：** 帳戶是底層的實體，而錢包（Wallet）則是用來與帳戶互動、管理私鑰並發起交易的介面或應用程式。
    
-   **驗證者金鑰 (Validator keys)：** 以太坊轉為權益證明（PoS）後引入的 BLS 金鑰，專門用於驗證者節點的身份識別與共識簽章聚合。
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->




閱讀文章：[https://huggingface.co/learn/llm-course/chapter1/6](https://huggingface.co/learn/llm-course/chapter1/6)

### \## 1. Transformer 三大架構與應用

根據任務需求，Transformer 主要分為三種架構：

-   **Encoder-only（自編碼模型）**
    
    -   **特點**：雙向注意力機制，能同時看到完整前後文。
        
    -   **適用**：文本分類、命名實體識別（NER）、抽取式問答。
        
    -   **代表**：[BERT](https://huggingface.co/docs/transformers/model_doc/bert)、DistilBERT、[ModernBERT](https://huggingface.co/docs/transformers/en/model_doc/modernbert)。
        
-   **Decoder-only（自迴歸模型）**
    
    -   **特點**：只能看到當前字之前的訊息。**現代大語言模型（LLMs）的主流架構**，經預訓練與指令微調來聽懂人類指令。
        
    -   **適用**：創意寫作、文本生成、對話 AI、邏輯推理。
        
    -   **代表**：Llama 系列、Gemma 系列、DeepSeek-V3。
        
-   **Encoder-Decoder（序列到序列模型）**
    
    -   **特點**：結合兩者，Encoder 理解輸入，Decoder 生成輸出。
        
    -   **適用**：需要將一個序列轉換成另一個序列的任務，如機器翻譯、文本摘要。
        
    -   **代表**：[T5](https://huggingface.co/docs/transformers/model_doc/t5)、[BART](https://huggingface.co/docs/transformers/model_doc/bart)。
        

* * *

### \## 2. 長文本注意力機制優化

標準注意力機制的計算複雜度為 $O(n^2)$，處理長文本時極耗資源。以下模型提出了優化方案：

-   **LSH 注意力**（[Reformer](https://huggingface.co/docs/transformers/model_doc/reformer)）：利用雜湊演算法，只計算彼此接近的 Query 和 Key，避免處理整張矩陣。
    
-   **局部注意力**（[Longformer](https://huggingface.co/docs/transformers/model_doc/longformer)）：限制每個 Token 只關注鄰近的 Token（局部窗口），並搭配少數特定 Token 給予全域注意力。
    
-   **軸向位置編碼**（[Reformer](https://huggingface.co/docs/transformers/model_doc/reformer)）：將巨大的位置編碼矩陣因式分解為兩個較小的矩陣相乘/拼接，大幅節省 GPU 記憶體。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->





閱讀文章：[https://huggingface.co/learn/llm-course/chapter1/5](https://huggingface.co/learn/llm-course/chapter1/5)

### 1\. 核心觀念：萬變不離其宗

雖然處理的資料型態與任務不同，但多數 Transformer 模型的運作邏輯非常相似。模型在經過大規模預訓練（Pretraining）獲得通用能力後，**只需要在上方加上一個簡單的「任務頭（Specific Head）」**（通常是線性層），就能將模型輸出的特徵（Hidden States）轉換為特定任務所需的預測結果。

* * *

### 2\. 文字領域（Language）

網頁依據架構特性，將 NLP 任務分為三大類：

-   **解碼器模型（Decoder-only，如** [**GPT-2**](https://huggingface.co/docs/transformers/model_doc/gpt2)**）**
    
    -   **核心任務**：文字生成（Text Generation）。
        
    -   **原理**：採用**自迴歸（Auto-regressive）與因果語言建模（Causal language modeling, CLM）**，利用「遮罩自注意力機制」確保模型只能根據左側已出現的字來預測下一個字。
        
-   **編碼器模型（Encoder-only，如** [**BERT**](https://huggingface.co/docs/transformers/model_doc/bert)**）**
    
    -   **核心任務**：文字分類（如情緒分析）、標記分類（如命名實體識別 NER）、問答任務（QA）。
        
    -   **原理**：採用**雙向語境（Bidirectional context）與遮罩語言建模（Masked language modeling, MLM）**。在文字開頭加入特殊的 `[CLS]` 標記，其輸出的特徵會直接送進分類頭來做整段文字的分類；問答任務則是利用分類頭去預測答案在文本中的起始與結束範圍。
        
-   **編碼器-解碼器模型（Encoder-decoder，如** [**BART**](https://huggingface.co/docs/transformers/model_doc/bart)**、**[**T5**](https://huggingface.co/learn/llm-course/chapter1/model_doc/t5)**）**
    
    -   **核心任務**：摘要（Summarization）、翻譯（Translation）等序列轉換任務。
        
    -   **原理**：Encoder 負責理解輸入內容（如破壞後的文本或源語言），Decoder 則負責重構或生成目標文本（如摘要或目標語言）。在翻譯任務中，通常會加入額外的編碼器來做語言之間的映射。
        

* * *

### 3\. 語音領域（Speech and Audio）

-   **代表模型**：[Whisper](https://huggingface.co/docs/transformers/main/en/model_doc/whisper)（Encoder-Decoder 架構）
    
-   **應用任務**：自動語音識別（ASR，語音轉文字）。
    
-   **運作方式**：先將原始語音訊號轉換為 **Log-Mel 頻譜圖（Spectrogram）**，由 Encoder 處理語音特徵，再由 Decoder 自動預測並輸出對應的文字。
    
-   **特點**：在多達 68 萬小時的多元語音資料上進行預訓練，具備極強的零樣本（Zero-shot）通用能力，開箱即用。
    

* * *

### 4\. 電腦視覺領域（Computer Vision）

處理影像主要有兩種思維：一是使用改良版的卷積網路（如 [ConvNeXT](https://huggingface.co/docs/transformers/model_doc/convnext)），二是徹底將影像「文字化」交給 Transformer。

-   **代表模型**：[ViT（Vision Transformer）](https://huggingface.co/docs/transformers/model_doc/vit)
    
-   **應用任務**：影像分類（Image Classification）。
    
-   **運作方式**：
    
    1.  將一張圖片切成許多非重疊的**正方形小方塊（Patches）**，就像文字的 Token 一樣。
        
    2.  將這些方塊轉換成向量（Patch Embedding），並加入位置編碼（Position Embeddings）與一個類似 BERT 的 `[CLS]` **標記**。
        
    3.  送入 Transformer Encoder 處理後，同樣只取 `[CLS]` 的輸出送進多層感知機（MLP 頭）進行分類。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->






閱讀文章：[https://huggingface.co/learn/llm-course/chapter1/4](https://huggingface.co/learn/llm-course/chapter1/4)

### 1\. Transformer 的發展歷史與分類

Transformer 架構自 2017 年提出後，演化出眾多衍生模型，主要可分為三大家族：

-   **BERT 家族（Auto-encoding，自編碼模型）**：側重於「理解輸入」，適合文本分類、命名實體識別（NER）。
    
-   **GPT 家族（Auto-regressive，自迴歸模型）**：側重於「文本生成」，如最新的 Llama、Mistral、Gemma 2、SmolLM2。
    
-   **T5 家族（Sequence-to-sequence，序列到序列模型）**：結合編碼與解碼，適合需要輸入的生成任務，如翻譯或摘要。
    

### 2\. 語言模型的訓練雙階段

-   **預訓練（Pretraining）**：從頭開始（Scratch），隨機初始化權重，在海量原始文本上進行**自我監督學習**。成本極高（時間、金錢與碳足跡）。
    
-   **微調（Fine-tuning）**：利用預訓練模型具備的語言統計能力，使用特定任務的標註資料進行**遷移學習**。成本低、見效快。
    

### 3\. 環保與資源共享

大型模型的預訓練會產生巨大的**碳足跡（Carbon footprint）**。Hugging Face 強調開源與共享模型權重（Checkpoints）的重要性，呼籲社群基於現有成果微調，避免重複從頭訓練帶來的環境負擔。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->







**「Transformers 能做什麼？ (Transformers, what can they do?)」**。

它主要介紹了 Hugging Face 的核心工具 `pipeline()` 函數，並展示如何用它來輕鬆操作各種自然語言處理（NLP）、語音、以及電腦視覺（CV）的任務。

以下為該頁面的核心重點整理：

### 1\. `pipeline()` 的核心概念與運作流程

`pipeline()` 是 Hugging Face `transformers` 庫中最頂層、最易用的 API。當你把一段文字丟給 `pipeline` 時，它在背後其實自動執行了**三個主要步驟**：

1.  **預處理 (Preprocessing)**：將人類看得懂的文字，轉換成模型能理解的格式（Token）。
    
2.  **模型預測 (Model Pass)**：將預處理後的輸入傳給模型進行計算。
    
3.  **後處理 (Post-processing)**：將模型輸出的數字（Predictions）轉換成人類看得懂的結果。
    

### 2\. 經典的 NLP 任務範例

網頁中介紹了幾種最常見的文字處理 pipeline 應用：

-   **情感分析 (Sentiment Analysis)**：
    
    -   **功能**：判斷一段文字是正面的還是負面的。
        
    -   _範例_：輸入 "I've been waiting for a HuggingFace course my whole life." $\\rightarrow$ 輸出 `POSITIVE` (信心度 99.9%)。
        
-   **零樣本分類 (Zero-shot Classification)**：
    
    -   **功能**：對**未標籤**的文字進行分類。你可以自行決定任何想分類的標籤（Labels），模型不需要重新訓練就能直接分類。
        
    -   _應用場景_：現實中缺乏標籤數據、需要靈活分類時。
        
-   **文字生成 (Text Generation)**：
    
    -   **功能**：給予一段初始提示（Prompt），讓模型自動續寫接下來的句子。
        
-   **遮罩填空 (Fill-Mask)**：
    
    -   **功能**：給予一個帶有 `<mask>`（遮罩）的句子，讓模型預測被蓋住的字詞是什麼。
        
-   **命名實體識別 (NER - Named Entity Recognition)**：
    
    -   **功能**：找出文本中的實體，並將其分類。例如區分出哪些字是「人名（PER）」、「組織名（ORG）」或「地點（LOC）」。
        
-   **問答系統 (Question Answering)**：
    
    -   **功能**：給予一段「上下文（Context）」與一個「問題」，模型會直接從上下文中抽取出正確答案。
        
-   **文本摘要 (Summarization)**：
    
    -   **功能**：將長篇文章縮短，同時保留核心重點。
        
-   **機器翻譯 (Translation)**：
    
    -   **功能**：將一種語言轉換成另一種語言（如法文轉英文）。
        

### 3\. 多模態（跨領域）的應用擴展

除了文字（NLP）之外，`pipeline()` 也能應用在語音和影像上：

-   **影像 Pipeline (Image pipelines)**：
    
    -   `image-to-text`：看圖說故事（產生影像的文字描述）。
        
    -   `image-classification`：影像分類（辨識圖中物體是什麼）。
        
    -   `object-detection`：物件偵測（在圖像中定位並標出物體位置）。
        
-   **語音 Pipeline (Audio pipelines)**：
    
    -   `automatic-speech-recognition`：自動語音辨識（語音轉文字）。
        
    -   `audio-classification`：語音分類。
        
    -   `text-to-speech`：文字轉語音（讓電腦說話）。
        

### 💡 總結

這一節的重點在於讓學習者明白：**你不需要知道模型背後複雜的數學與架構，只要呼叫** `pipeline()` **並指定任務名稱，就能直接將當前最頂尖的 AI 模型應用在文字、語音與影像處理上。**
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->








### What is a Large Language Model? 影片觀看

LLM是模型判斷下一個生成的文字是甚麼，藉由大量的文章資料訓練調整超級多的參數，讓下一個生成的文字越來越順暢合理
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->









因為我是AI和Web3兩者的初學者，所以我今天先了解模塊A的核心知識點

### 一、 大模型基礎與控制參數

-   **Token**：大模型處理文字的基本單位，大約一個英文單字或一個中文字。
    
-   **MaaS (Model as a Service)**：模型即服務。指開發者不需要自己購買硬體，直接透過 API 密鑰，按照使用的 Token 數量付費調用雲端模型。
    
-   **Context Window (上下文窗口)**：模型單次對話能容納的最高訊息量，可以理解為模型的短期工作記憶體。
    
-   **System Instruction (系統指令)**：在對話開始前幫模型設定的根本規則，用於定義模型的角色、語氣和行為邊界，優先級高於一般提示詞。
    
-   **Temperature (溫度)**：控制模型輸出隨機性的參數。設定越接近 0，回答越精準嚴謹；設定越接近 1，回答越具創意與隨機性。
    

* * *

### 二、 開發模式的三個演進階段

-   **Prompt (提示詞)**：最基礎的一問一答模式。模型被動回應，下一步的決策完全由人類主導。
    
-   **Workflow (工作流)**：將任務拆解為固定步驟的自動化流程。路徑是提前寫死的，大模型在其中只負責特定節點的處理。
    
-   **Agent (智能體)**：人類只給定最終目標，由大模型自己思考、規劃步驟，並根據中間結果動態決定要調用哪些工具。
    

* * *

### 三、 Agent 核心技術組件

-   **State (狀態管理)**：在複雜的長流程中，用來紀錄當前進度與資料的共享資料結構，讓不同的執行節點可以讀寫同一個狀態。
    
-   **Tool Calling (工具調用)**：模型將自己的意圖轉化為結構化的數據格式（通常是 JSON），讓外部程式能夠幫它執行查資料、發送郵件等具體動作。
    
-   **MCP (Model Context Protocol)**：大模型上下文協議。一種讓大模型與外部工具、資料源進行標準化連接的統一協議。
    
-   **Skills (技能集)**：將高層次的指令或常用動作打包成可複用的模組，讓 Agent 能夠動態發現並重複使用。
    
-   **Tracing (鏈路追蹤)**：紀錄 Agent 每一步思考與執行細節的日誌系統，主要用於開發時的排錯與行為視覺化。
    
-   **Guardrails (護欄)**：在輸入和輸出端設置的硬性檢查規則，只要發現不合規的內容或越權行為就會強制中斷。
    
-   **Handoff (控制權移交)**：在多 Agent 系統中，當一個子任務完成或超出能力範圍時，將主導權移交給另一個 Agent 的機制。
    

* * *

### 四、 風險與防範機制

-   **Hallucination (幻覺)**：模型以極其自信的語氣編造出錯誤的事實、不存在的論文或網址連結。
    
-   **Reasoning Drift (推理漂移)**：在長文本或多輪對話中，模型後期的邏輯鏈條斷裂，導致最終結論偏離了一開始的前提。
    
-   **Human-in-the-loop (人工介入)**：在高風險或合規要求高的操作節點（如涉及資金、敏感數據變更），強制加入人類審核的卡點。
    

* * *

核心的評估準則可以總結為：流程固定、合規要求高的場景優先使用傳統腳本或 Workflow；目標開放、需要走一步看一步的複雜場景才考慮 Agent。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
