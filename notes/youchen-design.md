---
timezone: UTC+8
---

# youchen-design

**GitHub ID:** youchen-design

**Telegram:** @Yo_10_31

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->
今天看了幾個概念

**Nonce**代表帳戶發出的交易總數，用來防止重放攻擊，例如送出 nonce=5 的交易，nonce=4 還沒確認的話，nonce=5 會卡著等，但不是每個鏈都有，像是Bitcoin UTXO、Solana Recent Blockhash、Durable Nonce等不同機制。

然後關於ai Embedding用向量來衡量語意相近程度的方法蠻有趣的，但我的疑問是在還沒轉換成向量之前要如何知道兩個東西的相似程度，而這個就要讓模型由大量的文本統計訓練出來，早期方法：Word2Vec認為出現在相似上下文的詞，意思就相近，但是每個詞只有是一個固定向量，例如無法區分蘋果是水果還是公司，現代方法：Transformer解決了這個問題，向量會根據整個句子的上下文動態產生，他會用克漏字的方式去學習，判斷詞與詞之間的關係

**Multimodal**可以處理文字、聲音與圖片等等的，而剛剛大概知道了文字在Transformer上的概念就會好奇圖片和聲音是如何轉換的，圖片的話會切成很多個patch，聲音則轉頻譜圖，然後再用克漏的轉換

**Hallucination**本質上就是因為ai是預測下一個字，並不是查詢正確答案，而如果訓練資料有誤、資料不足或因語言模式的慣性，就會跟事實有差距。

剩下web3的公鑰、私鑰概念比較常見就不多贅述，如果之後有進階學習再做補充
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->

今日進度

1.使用Claude code輔助建立個人GitHub repo

2.建立AI × Web3之X關注清單，並選取幾篇文章進行後續閱讀

3.準備課程前置工具，Ex:zoom、telegram、claude code、輔助插件、測試錢包

4.參與AI 时代的 Web3 架构能力

5\*\*.\*\*參與Co-learning
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
