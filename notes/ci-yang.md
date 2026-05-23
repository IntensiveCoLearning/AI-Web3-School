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
# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->
今天這場 Open Agentic Economy 有點戲劇性：嘉賓 Sophia（Ethereum Foundation 開發者加速團隊）因為時差晚到快一小時，主持人先帶大家 Q&A、聊 Hackathon 安排，等她上線後才開始正式分享，全程英文。等這一小時值得。

她的主軸一句話：「Ethereum for AI 其實就是 Ethereum for humans」。AI agent 正在從「你查詢的工具」變成「經濟參與者」——會寫 code、做決策、跟軟體談判、甚至雇用其他 agent。一旦它要參與經濟，就得回答：它跑在什麼軌道上、怎麼付款、怎麼做出可信的承諾。她的論點是 Ethereum 正在變成 agent 經濟的「協調與結算層」，而 CROPS 四個設計原則（抗審查、開源、隱私、安全）讓這層基礎設施中立、可被人檢查治理，人留在中心。

兩個我之前只聽過名字、今天總算搞懂的標準：ERC-8004 是給 agent 的「可驗證身份 + 信譽」，讓你跟一個 agent 互動前能查它的信任分數；x402 是機器對機器的支付（一個 HTTP 402 狀態碼 + 穩定幣），不用信用卡、API key、帳單。她舉的例子很傳神：與其把信用卡丟給 agent 叫它買披薩（它可能花太多、買錯、買一千個），不如給它一個只有 10 美元的錢包 + 一個智能合約，規定只能花 10 美元、只能找這個供應商。

聽到這裡我突然發現這週五場是同一條線：TC 的「人類驗收程式碼」、Jackson 的「從 demo 到產品四個邊界」、Bruce 的「控制權重新分配」、Alan 的「Agent 錢包三層權限」，到今天 Sophia 用 ERC-8004 + x402 + 受限錢包把它收尾成具體標準——agent 經濟要建在「人保有控制權、規則可被人檢查」的中立基礎設施上。programmable money 就是「可控的自動化」最乾淨的實作。Week 1 結束，框架終於成形了。  
  

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/ci-yang/images/2026-05-23-1779550376479-image.png)
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->

今天 Alan（交易所工程師）講 AI 在 Web3 的應用。核心框架先把問題擺正：AI × Web3 不是把兩個熱詞疊在一起，而是雙向互補——Web3 補 AI（提供去中心化算力、市場協調、驗證能力），AI 補 Web3（降低使用者與開發者的理解門檻、自動化流程、輔助審查）。

最有感的是他講「去中心化算力市場」這段。AI 高度中心化——模型、算力、資料、支付都集中在少數公司，還受地區政策、平台規則、風控限制；Web3 想把它轉成多節點、多供應者的市場（請求 → 網關分發 → 節點推論 → 品質評價 → 支付結算）。但他點破一句很實在的話：難的不是把 API 分散出去，而是「評價節點能力、防止低品質輸出、讓市場價格反映服務品質」——技術容易，市場設計才難。

對我共鳴最強的是 Agent 錢包的三層權限：讀取層（查鏈上資料、讀合約，低風險）→ 草擬層（建交易草案、標簽名欄位，不提交）→ 執行層（簽名、授權、資產移動，必須人工確認）。他說「可控的自動化優於無限自動化，私鑰和簽名權不該交給黑盒 Agent」。這跟 TC 講的人類驗收、Jackson 講的從 demo 到產品四個邊界、Bruce 講的控制權重新分配，根本是同一條鐵則——四場聽下來，這條線越來越清楚：AI 擅長理解、規劃、生成，Web3 擅長驗證、結算、保留控制權。

他給的評估框架我記下來，Hackathon 用得上：評估一個 AI × Web3 產品就問四件事——誰提供能力、誰驗證結果、誰承擔風險、誰保有控制權。還有一句矯正預期的話也很值得記：「AI 在 Web3 最大的價值不是代操，而是降低理解成本。」  
  

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/ci-yang/images/2026-05-21-1779377123956-image.png)
<!-- DAILY_CHECKIN_2026-05-21_END -->

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
