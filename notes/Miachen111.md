---
timezone: UTC+8
---

# Miachen111

**GitHub ID:** Miachen111

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->
LLM 一次回答问题，通常只是在生成文本。Agent 更进一步：它可以拆任务、查资料、调用 API、写代码、生成操作草稿、等待反馈再继续下一步。

Tool Use

Agent 从“会回答”变成“能做事”

今天在vscode裝了個gemini agent

之前的hermes agent 應該也屬於這個
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->

llm rag實作

rag 開書考試 找資料給llm回答 有相關資料 回答更準確

文檔怎麼切

讀文件 切小塊

fixed chunking 切的頭跟尾留著 通順

hierarchical chunking

semantic chunking

llm parsing 有結構的切

token embedding(詞轉高維空間向量)=詞嵌入

每個token都是一個向量

向量運算

語言模型理解詞之間的關係 語言之間的關係

向量資料庫 vector database

retrieval檢索 用cos 相似度算

增強 augment 參考了資料準確回答不瞎掰

fine tuning 特定領域訓練微調 調教他 動到原本的權重 會忘掉原本會的東西

Prompt engineering 提升輸出 提示詞作優化

rag 不動大腦 只外接資料庫

gemini 底層rag 丟檔案給他讀=外接資料庫

上下文窗口 文件大也能承受 語言模型增強 rag被替代
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->


助記詞丟了 私鑰全丟

資產不在錢包 實際上帳本跟數據在區塊鏈上

私鑰不是普通密碼 丟了找不回

交易 授權網路執行的事 要做的事 手續費 nonce(帳號發送的第幾筆交易，交易成功後加一，防重複執行) 簽名(驗證對應私鑰授權)

拿到私鑰有可能被仿簽

gas fee 手續費 防免費資源被濫用

wallet簽名 RPC node傳播 排隊 排序(看誰交錢多誰先 錢太少上車了還會被踢出去) 出塊 可查詢

block num

PoW BTC 誰先解出誰記帳

PoS ETH 偽隨機

錢包不直接連外網

智能合約

客戶端
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->



裝完hermes 用ollama裝

去ai web3 school那個網站讀了llm

embedding: code 轉向量 看語意接近不接近

hallucination: 幻覺 外部校驗
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->




\--7:00--

windows 子系統是wsl 跟虛擬機、docker 兩回事

先裝hermes 讓hermes安排學習地圖 裝不起來明天課會教

\--8:00--

對支付服務而言，web3用不用沒差

錢包 身分與資產管理 私鑰驗證，私鑰always不變 signature消息不同，簽名不同

鏈只認私鑰， 私鑰丟了喪失絕對控制權，別人能搶

eoa錢包 MPC多簽，把eoa切成很多塊

合約錢包 合約多簽

自託管錢包(取決於自己，愛幹啥幹啥) 全託管錢包(交易所，錢包控制權在交易所那，要做啥跟交易所說，有可能交易所跑路) 混和託管(常規方法，自己跟交易所都要，缺一個都完成不了)

多簽 硬件 隱私 分層(b2b b2c)

私鑰洩漏、簽名欺騙(eip712簽名可視化 被釣魚簽名) 權限濫用 安全理論(自己要懂)

錢包 交易、信息 私鑰簽名交易 廣播交易 給web3 block chain認 鏈上監聽 解析block上的交易 檢測到用戶轉帳，但不馬上幫用戶轉，要等block confirm 等鏈長度足夠長(block夠多) 錢到位

gas誰先上鏈(gas count 價高者先) nonce(連續的順序遞增) calldata(鏈上應用核心 instruction 鏈的生態 百花齊放 python code /java code 彙編)

風險控制:在簽名前先模擬 簽名後模擬沒用，且簽名已在流轉 誰都看的到

server: visualization approval simulation(not signature yet) signature(tee1 tee2對芯片)
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
