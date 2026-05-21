---
timezone: UTC+8
---

# Ci Yang

**GitHub ID:** ci-yang

**Telegram:** @ciiyang

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->
今天聽 Bruce 講「Web3 運行原理」，從第一性原理帶一筆交易到底怎麼跑。最有感的是他的拆法：當你在錢包點下那個 confirm，整個系統其實在回答三個問題——你是誰（私鑰、簽名）、你要做什麼（交易內容、gas、nonce）、以及大家為什麼會相信這個結果（廣播、驗證、出塊）。把一個按鈕拆成這三個問題，整條鏈的運作一下就有框架了。

他重新定義了「交易」這件事我也記下來：交易的本質不是轉帳，而是「我授權網路執行這件事的一段資料」。轉帳只是其中一種，投票、mint NFT、呼叫任何合約方法都是交易。從第一性原理它就四個零件——你要做的事、手續費（gas）、nonce（防止交易被重放）、簽名（證明真的是你發的）。簽名這段他講得很清楚：私鑰對交易資訊簽出一段雜湊，別人用 EC recover 反推地址來驗證，交易內容改一個字元，簽名就完全不一樣。

私鑰是「個人主權的起點」這句讓我停了一下。生成一個錢包不需要任何人批准、不用提供身份，生成完就能收款、自己保管——對金融或身份體系不完善的地方，這個意義很大。這正好接上前兩天 TC 老師講的「私鑰→簽名→signature 黑盒」，Bruce 是把整條交易生命週期（簽名 → RPC 廣播 → mempool 排隊 → builder 排序打包 → validator 出塊 → 確認）從頭到尾串起來，兩場剛好互補。

今天也動手了：領了我的第一筆 Sepolia testnet ETH，準備做測試網交易和部署最小合約。中間踩了個坑——pk910 的 PoW faucet captcha 一直載不出來、跳「Could not start session」，換成 Google Cloud 的 Sepolia faucet 一次就成功（0.05 ETH 到帳）。提醒自己：原理看懂，還要親手把一筆交易、一個合約真的跑過一遍，才不會只停在名詞上。  
  

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/ci-yang/images/2026-05-20-1779291399868-image.png)
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->

今天聽 Jackson 講「AI Agent 入門 — Hermes 從 0 到 1」。他開場那句話我很有共鳴：問題不是大家不知道 AI 很強，而是市面上的名字太多——ChatGPT、Cursor、Claude Code、OpenRouter、Hermes，搞不清楚誰是誰。他把工具分成五類：聊天型、AI 編程助手、終端開發 Agent、Provider 平台、通用助手底座，一條線就把我腦子裡那團名詞理清了。

Agent 跟聊天機器人的差別，他講得很乾淨：聊天是一問一答，Agent 是一個迴圈——理解目標、規劃步驟、調用工具、觀察結果、自我修正。Hermes 的定位不是「最強的 coding agent」，而是一個 agent runtime，模型加工具加記憶加 skills，還能接 Telegram。他形容成「小型 Jarvis」。

最打中我的是這句：「Demo 展示的是模型會做，產品需要的是模型每次都照規則做。」他列了從 demo 到產品的四個邊界——工具權限、記憶管理、技能版本、人類驗收機制。這跟昨天 TC 老師講的「人類驗收程式碼」根本是同一條鐵則，兩天連著聽到，很難當巧合。尤其 Web3 場景，錢包、簽名、轉帳這種事，他說得很直接：要保留人類授權，Agent 不能自己決定。

提醒自己：我平常在做的 harness，做的其實就是這四個邊界的事。今天比較清楚的是 Memory 跟 Skills 為什麼是分水嶺——把不穩定的自然語言互動，壓成一個每次都跑得一樣的工作流，這件事做不做得到，就是 demo 和產品的差別。

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/ci-yang/images/2026-05-19-1779203874254-image.png)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->


今天聽 TC 老師講「AI 時代，Web3 開發者需要具備的基礎知識與架構能力」。

最有感的一句：基礎不夠紮實，就判斷不了 AI 端上桌的程式碼是「屎山還是真修」。AI 是放大器、不是替代品，架構決策與最終驗收的責任仍在人手上。

技術上記住一條鐵則——交易模擬一定要在「簽名前」做：簽名一旦產生就會在系統裡流轉、人人可見，事後才發現被釣魚已經來不及。這正呼應老師說的「安全源於設計」：Web3 沒有 chargeback，設計沒做好，上線當天就可能資產歸零。

提醒自己：與其焦慮被 AI 取代，不如先把基礎、架構、debug 這三層地基打牢。我們駕馭 AI，而不是被 AI 驅動。

![03_human_ai_boundary.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/ci-yang/images/2026-05-18-1779119151850-03_human_ai_boundary.png)
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
