---
timezone: UTC+8
---

# 0xroyluo

**GitHub ID:** roy328line

**Telegram:** @roy328328

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->
## **今日學習主題**

深讀 Handbook：Agent Trust & Reputation 模組

* * *

## **Agent Trust & Reputation｜核心整理**

### **為什麼需要 Agent 信任與聲譽系統？**

Agent Trust & Reputation 解決的是：當一個 Agent 聲稱自己能完成任務時，用戶和其他 Agent 如何判斷它是否可靠、歷史是否真實、失敗是否有代價。

第一性原理：**Agent 的可信度應該來自可驗證行為，而不是自我聲明。**

三個基本要求：
- 聲譽要綁定身份：沒有穩定身份，歷史記錄無法積累
- - 評價要綁定任務：泛泛評分不如具體任務結果
  - - 懲罰要真實：沒有成本的承諾很容易被濫用
   
    - ### **知識節點整理**
   
    - **Reputation（聲譽信號集合）**
    - - 包含：成功率、響應時間、爭議率、退款率、用戶評分、驗證通過次數、stake 數量和任務類型表現
      - - 最好按任務類型拆開，不同類型的 Agent 能力不能混用一個分數
        - - 需要時間衰減：模型、owner、endpoint 或工具棧都可能已變化，兩年前的好表現不能代表今天
         
          - **Review（任務結果反饋）**
          - - 應綁定任務 ID、交付物、付款記錄和評價者身份，避免成為可刷的口碑文本
            - - 質量比數量重要：包含任務說明、驗收標準、交付 hash 的 review 比十個「good job」更有價值
              - - 需防止互刷：評價者本身也需要身份和聲譽
               
                - **Attestation（可驗證聲明）**
                - - 某個主體對 Agent、任務或結果做出的可驗證聲明（如「某評測者證明這個 Agent 完成了測試集」）
                  - - 應結構化：issuer、subject、claim、evidence、expiration、revocation
                    - - 需要過期和撤銷機制，否則容易在條件變化後繼續誤導用戶
                      - - 可成為 reputation 的基礎數據，但仍要允許用戶查看原始聲明
                       
                        - **Stake（經濟保證）**
                        - - 讓承諾有成本，失敗時可能有資金被罰沒或賠付
                          - - 注意：Stake ≠ 能力，資本多不代表能力強，需與 validation、review、task history 一起評估
                            - - 設計要明確：抵押什麼、鎖多久、什麼條件釋放/罰沒、罰沒給誰
                             
                              - **Slashing（違約罰沒）**
                              - - 在 Agent 違約、作弊或輸出虛假結果時罰沒抵押
                                - - 設計很難：必須先定義違約證據、挑戰窗口、仲裁者、誤罰處理和申訴機制
                                  - - 自動 slashing 適合：未按時交付、簽名偽造、重複提交矛盾結果等明確可驗證違約
                                    - - 主觀任務（如「報告質量是否足夠」）不適合直接自動 slashing，應先進入 dispute
                                     
                                      - **Validation（能力/結果驗證）**
                                      - - 可以是：自動測試、benchmark、人工審核、Agent 複核、鏈上證明或 TEE attestation
                                        - - 區分「能力驗證」（大概率能做某類任務）和「任務結果驗證」（某次具體交付是否合格）
                                          - - 最好做成可查詢歷史，而不是只貼一個認證徽章
                                           
                                            - **ERC-8004（Agent 身份、聲譽和驗證 Registry 標準草案）**
                                            - - 把 Agent 的 identity、reputation、validation 分成可組合 registry
                                              - - 沒有試圖把「信任」做成單一中心化評分，而是提供身份、反饋和驗證信號的公共承載層
                                                - - 注意：鏈上注册可以證明身份連續性，不能自動證明服務質量
                                                 
                                                  - ### **Agent Trust & Reputation 在 AI x Web3 的位置**
                                                 
                                                  - 連接 Agent Identity、Settlement & Escrow 和 Machine Payment：
                                                  - - 沒有信任層，Agent 之間無法安全委托
                                                    - - 沒有聲譽和驗證，用戶也難以判斷哪個 Agent 值得付款
                                                     
                                                      - 信任鏈路：Identity（是誰）→ Trust（行為有代價）→ Reputation（可追溯歷史）
                                                     
                                                      - 真正可靠的系統應同時看：身份、任務歷史、評價者、證明、stake、爭議記錄和上下文適配度
                                                     
                                                      - ### **個人發想**
                                                     
                                                      - 今天最大的收穫是理解「聲譽不是一個分數，而是一組可追溯的證據」這個核心思想。
                                                     
                                                      - 人類信任體系用法律和社會關係作為保障，而 Agent 可以在毫秒間建立和消亡，傳統信任機制完全失效。Agent Trust & Reputation 的解法非常精妙：不是試圖建立一個「所有人都信任」的中央評分系統，而是提供結構化的可驗證信號，讓不同場景的用戶自行判斷。
                                                     
                                                      - Slashing 設計讓我印象深刻。真正有效的 slashing 必須限定在「明確可驗證違約」的場景，對主觀任務強制 slashing 反而會產生新的治理風險。這個分析框架—「哪些可以自動化，哪些需要人工仲裁」—在 AI x Web3 的很多場景都適用。
                                                     
                                                      - ERC-8004 的方向也很值得關注：身份/反饋/驗證三層分離的設計，讓不同應用可以在共同基礎上構建自己的信任過濾規則，而不是被迫使用某個平台的黑盒評分。這是真正去中心化信任基礎設施的方向。
                                                     
                                                      - ### **今日產出**
                                                     
                                                      - - Agent Trust & Reputation 核心概念整理（6 個知識節點完整筆記）
                                                        - - Reputation vs Review vs Attestation vs Stake vs Slashing vs Validation 的概念辨析
                                                          - - Slashing 適用場景分析框架（哪些可自動化，哪些需人工仲裁）
                                                            - - Identity → Trust → Reputation 完整信任鏈路整理
                                                             
                                                              - ### **明日計劃**
                                                             
                                                              - - 深讀 AI Oracle 模組
                                                                - - 整理 Agent Identity → Trust → Reputation → Oracle 的完整信任數據鏈路
                                                                  - <!-- DAILY_CHECKIN_2026-05-27_END -->
# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->
## **今日學習主題**

深讀 Handbook：Agent Identity 模組

* * *

## **Agent Identity｜核心整理**

### **什麼是 Agent Identity？**

Agent Identity 不是給 Agent 起個名字，而是讓用戶、服務和其他 Agent 能驗證：它是誰、誰控制它、能提供什麼能力、服務入口在哪裡、歷史記錄能不能追溯。

核心問題不是「如何命名 Agent」，而是：

-   誰擁有這個 Agent？
    
-   Agent 能做什麼（具體能力邊界）？
    
-   如何調用它（服務入口）？
    
-   它使用哪些錢包或密鑰？
    
-   歷史聲譽和驗證記錄在哪裡？
    

Agent Identity 的核心，是把 Agent 從臨時會話變成可發現、可驗證、可追責的經濟參與者。

* * *

### **第一性原理**

> **Agent 身份必須綁定控制權、能力聲明和服務入口，而不只是一個顯示名稱。**

三個基本要求：

-   **身份要可解析**：別人能從 identifier 找到 profile 和 endpoint
    
-   **控制權要可證明**：更新 profile 或接收付款的人要能證明自己是 owner
    
-   **能力要可驗證**：能力聲明需要測試、證明、評價或歷史記錄支撐
    

* * *

### **知識節點整理**

**Agent Profile（身份說明文件）**

-   包含：名稱、描述、服務範圍、價格、接口、錢包地址、能力列表、模型/工具說明、隱私政策、owner、版本
    
-   應同時給人和機器看：人能理解服務內容和運營方，機器能解析 endpoint、capabilities、schemas、auth、payment
    
-   **更新歷史很重要**：換了模型、換了服務端、換了收款地址、增加高風險能力，都不應靜默發生，更新記錄本身就是信任信號
    

**Capability（能力聲明）**

-   描述 Agent 能完成什麼任務、需要哪些輸入和權限
    
-   越具體越有用：輸入類型、輸出格式、是否需要錢包權限、是否調用外部 API、最長執行時間、失敗如何退款
    
-   **風險分級**：低風險（只讀分析）、中風險（生成交易草稿）、高風險（自動執行交易）
    
-   不應寫成「我什麼都能做」
    

**Service Endpoint（服務入口）**

-   可以是：HTTPS API、A2A endpoint、MCP server、Webhook 或鏈上 registry 指向的服務地址
    
-   **安全性直接影響身份可信度**：攻擊者劫持 endpoint，即使鏈上 Agent id 沒變，用戶實際調用的也可能是惡意服務
    
-   Endpoint 更新應需要 owner 簽名，並保留歷史
    
-   還要描述支持的協議和版本（A2A、MCP、REST API、WebSocket 交互方式不同）
    

**Registry（身份登記）**

-   用來登記、發現和更新 Agent 身份
    
-   鏈上 registry：提供公開可查的身份錨點（agent id、owner、profile URI、服務 endpoint 和更新記錄），更去中心化
    
-   鏈下 registry：更靈活，但信任邊界更中心化
    
-   **Registry 能證明「這個身份是誰注册的」，但不能證明「這個 Agent 一定好用或安全」**
    

**DID / VC（去中心化身份與可驗證憑證）**

-   DID：可解析的去中心化身份，不局限於某條鏈，Agent 可用 DID 表達跨平台身份
    
-   VC（Verifiable Credential）：由某個 issuer 簽發的聲明（如「通過了某個能力測試」「由某團隊運營」）
    
-   **VC 的可信度取決於 issuer**：任何人都能簽發聲明，不等於任何聲明都可信，產品要展示 issuer、簽發時間、撤銷狀態和驗證路徑
    
-   相關標準：W3C DID Core、W3C Verifiable Credentials
    

**A2A（Agent 間通信）**

-   關注 Agent 與 Agent 之間如何發現、通信、協商任務和交換結果
    
-   A2A 是通信層（怎麼協作），身份系統是信任層（在和誰說話），兩者需要結合
    
-   **在支付場景中**，A2A 消息最好和 Payment Intent、Receipt、Escrow 狀態關聯，否則對話和結算會分裂成兩套不可對帳系統
    

**Ownership（控制權）**

-   決定誰能更新 Agent profile、收款地址、服務 endpoint 和權限
    
-   Agent owner 可以是：EOA、Smart Account、多簽、DAO 或企業帳戶
    
-   **高價值 Agent 不應由單個熱錢包控制**
    
-   建議把 operator（運行服務）和 owner（控制身份和關鍵更新）分開
    

* * *

### **Agent Identity 在 AI x Web3 的位置**

Agent Identity 是 Agent Trust、Machine Payment 和 Agentic Commerce 的**前置條件**：

-   用戶要付款給 Agent → 必須知道付款對象是誰
    
-   另一個 Agent 要委托任務 → 需要驗證對方服務入口和歷史記錄
    

**身份本身不等於可信**，它只是信任系統的第一層：

1.  先知道對象是誰（Identity）
    
2.  再看它做過什麼、誰評價過它（Reputation）
    
3.  是否有 stake、是否有驗證證明（Trust）
    

* * *

### **關鍵概念對比**

| 概念 | 定義 | 重點 |
| --- | --- | --- |
| Agent Profile | Agent 的公開說明文件 | 同時服務人和機器，更新要有記錄 |
| Capability | Agent 能完成的任務聲明 | 具體化、分風險等級 |
| Service Endpoint | Agent 的調用入口 | 更新需要 owner 簽名，保留歷史 |
| Registry | 身份的登記和發現系統 | 提供發現性，但不保證能力品質 |
| DID / VC | 去中心化身份和可驗證聲明 | VC 可信度取決於 issuer |
| A2A | Agent 間通信協議 | 通信層，需與支付/結算系統關聯 |
| Ownership | 控制 Agent 身份和關鍵操作的權力 | 高價值 Agent 需多簽，operator/owner 分離 |

* * *

### **最小實踐設計**

設計一個 Agent Profile：

1.  **基本信息**：Agent 名稱、描述、owner（Smart Account 地址）、endpoint（HTTPS API）
    
2.  **Capabilities**（3 個）：
    
    -   能力 1：「生成 Solidity 測試」（輸入：合約代碼，輸出：測試文件，價格：0.5 USDC，限制：無法執行部署）
        
    -   能力 2：「分析 DAO 治理提案」（輸入：提案 ID，輸出：摘要報告，價格：0.1 USDC，限制：只讀）
        
    -   能力 3：「執行小額穩定幣支付」（輸入：收款方地址、金額，輸出：交易 hash，價格：0.01 USDC，限制：每次最高 10 USDC，風險：高）
        
3.  **更新機制**：只有 owner 多簽錢包簽名才能更新 profile，更新後發送 on-chain event 通知訂閱方
    
4.  **Endpoint 驗證**：endpoint 包含 owner 簽名的 challenge-response，可用公鑰驗證歸屬
    

* * *

### **個人發想**

今天最大的收穫是理解了「Agent 身份」和「人的身份」的本質差異。

人的身份靠法律和社會關係來保證——信任一個人，因為有法律責任、社會聲譽、長期關係。但 Agent 可以在毫秒內建立、複製、消亡，傳統身份機制完全失效。

Agent Identity 的精妙之處在於：把身份從「名字」提升到「可驗證的能力邊界和控制權結構」——不需要信任一個 Agent「是好的」，只需要能驗證它能做什麼、誰負責、失敗怎麼辦。

DID/VC 的思路讓我感到興奮：如果 Agent 能累積 VC（能力測試通過證明、成功交付記錄、組織隸屬證明），那就像是 Agent 的「學歷和工作履歷」，可以跨平台攜帶和驗證。這是 Agentic Economy 的基礎設施，而不只是技術細節。

Operator/Owner 分離的設計也很關鍵——讓運行服務的人和控制身份的人可以是不同角色，這樣即使服務方出問題，身份的所有權和責任仍然清晰。

Builder 的機會在於：設計「Profile 可機器解析、Capability 有風險分級、Endpoint 更新有簽名記錄、VC 可跨平台攜帶」的 Agent Identity 系統，讓 AI Agent 的部署和使用從「盲目信任」走向「可驗證信任」。

* * *

## **今日產出**

-   Agent Identity 核心概念整理（7 個知識節點完整筆記）
    
-   關鍵概念對比表（Profile / Capability / Endpoint / Registry / DID / VC / A2A / Ownership）
    
-   最小實踐設計：完整 Agent Profile 設計（含 3 個 Capability、更新機制、Endpoint 驗證方式）
    
-   個人判斷框架：可信 Agent 身份的三個基本要求（可解析、控制權可證明、能力可驗證）
    

* * *

## **明日計劃**

-   深讀 Agent Trust & Reputation 模組
    
-   整理 Agent Identity → Trust → Reputation 的完整信任鏈路
    
-   繼續推進 Week 1 Proof-of-Work Pack
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->

\# 2026-05-25

<!-- DAILY\_CHECKIN\_2026-05-25\_START -->

今日學習：深讀 Settlement & Escrow 模組

GitHub 筆記：[https://github.com/roy328line/ai-web3-school-cohort-0/blob/main/daily/2026-05-25.md](https://github.com/roy328line/ai-web3-school-cohort-0/blob/main/daily/2026-05-25.md)

\## 核心整理

**Settlement & Escrow** 解決的是 Agent 經濟裡「錢什麼時候釋放、服務怎麼算完成、失敗怎麼退款、爭議怎麼處理」，把支付從一次轉帳變成完整交易流程。

**第一性原理**：自動化交易必須有明確完成條件，否則支付就無法安全自動化。Escrow 設計首先要定義狀態機，而不是先寫付款代碼。

**Escrow**：鎖定資金直到交付條件滿足後釋放，最小狀態機：Created → Funded → Delivered → Accepted → Released（或 Refunded / Disputed）。好的 escrow 先定義業務流程，再定義資金流。

**Receipt**：不只是「已付款」，應同時服務人和機器：記錄任務 ID、交易 hash、驗收狀態，並成為 reputation 的輸入。

**Delivery Proof**：服務方交付的可驗證證明（文件 hash、API 日誌、模型輸出簽名等），必須能和原始任務對應，避免「結果存在但不可驗證」。

**Acceptance**：驗收可自動也可人工，高價值任務建議「AI 初審 + challenge window + 人工復核」組合。

**Refund**：退款規則必須在任務開始前寫清楚，並考慮部分交付的按比例退款。

**Dispute**：爭議記錄是聲譽系統的重要輸入，設計需回答：誰能發起、成本多少、誰有裁決權、是否可申訴。

**ERC-8183**：Agentic Commerce 草案標準，把 Agent 交易從「轉帳」提升到「狀態轉換」維度，與 ERC-8004 互補（ERC-8004 偏身份聲譽，ERC-8183 偏任務支付交付）。

\## 核心發想

Settlement & Escrow 的本質不是「鎖錢」，而是「把整個業務流程狀態機化」。Builder 機會：設計「狀態透明、proof 可驗證、dispute 有成本但可處理」的 Agentic Escrow 系統，讓 AI Agent 之間的委托和交易真正可信任。

<!-- DAILY\_CHECKIN\_2026-05-25\_END -->
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->


\# 2026-05-24

<!-- DAILY\_CHECKIN\_2026-05-24\_START -->

今日學習：深讀 Machine Payment 模組（Stablecoin Payment / Budget / Quote / Payment Intent / x402 / MPP / Subscription / Micropayment）

GitHub 筆記：[https://github.com/roy328line/ai-web3-school-cohort-0/blob/main/daily/2026-05-24.md](https://github.com/roy328line/ai-web3-school-cohort-0/blob/main/daily/2026-05-24.md)

Machine Payment 核心整理：

第一性原理：Agent 不應該擁有無限支付能力，只應該拿到具體任務、預算和收款方範圍內的支付權限。支付能力 = 執行能力，一旦 Agent 可以付款，它就可以消耗用戶資金或被惡意上下文誘導。

三個核心原則：預算先於執行（沒有預算邊界 = 沒有安全自動支付）、報價必須可比較（Agent 需知道價格/幣種/有效期/退款條件）、收據必須可驗證（付款後能證明付給誰/為什麼付/交付了什麼）。

關鍵知識點：x402 把 HTTP 402 Payment Required 變成互聯網原生支付流程，讓 Agent 處理 402（付款）就像處理 401（登錄）一樣自然。MPP 協議化機器間支付流程：服務發現 → 報價 → 授權 → 結算 → 收據。Micropayment 不適合每次都上鏈結算（成本超過服務本身），需要 L2 / payment channel / 批量結算設計。

個人洞察：機器支付不是技術問題，而是信任問題。Builder 機會：「Agent 可以信任、用戶可以控制、服務方可以驗證」的支付基礎設施。

<!-- DAILY\_CHECKIN\_2026-05-24\_END -->
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->



學習日誌 · 2026-05-23（Day 7）

今日學習：Open Agentic Economy: From ERC-8004 / ERC-8183 to Builder Path（直播）+ Agent Wallet 模組深讀

Open Agentic Economy 核心：AI Agent 作為獨立經濟參與者的生態，能自主發現服務、協商任務、完成支付、留下可驗證記錄。

ERC-8004/8183 方向：鏈上 Agent 如何發現和調用去中心化服務的標準探索。Builder Path 四個維度：身份（誰授權 Agent？）、權限（能做什麼？）、支付（費用如何結算？）、記錄（行為如何被審計？）。

Agent Wallet 第一性原理：控制權不能交給一個概率系統。Agent 只能拿到可驗證、可限制、可撤銷的行動空間。六層防禦：Policy → Session Key → Guard → Simulation → Human Check → Revocation。

關鍵洞察：Open Agentic Economy 不是讓 Agent 更自由，而是讓 Agent 的自由被規則包起來。Builder 機會在於做「可信任的 Agent 基礎設施」。

GitHub 筆記：https://github.com/roy328line/ai-web3-school-cohort-0/blob/main/daily/2026-05-23.md
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->




學習日誌 · 2026-05-22（Day 6）

今日學習：Co-learning 任務推進 + 例會分享 + Week 1 整體複習

Week 1 核心收穫：建立判斷框架——任何 AI 輸出進入 Web3 執行層之前，都需要一道人工確認節點。AI 降低操作門檻，但不降低安全標準。

AI 基礎脈絡整合：LLM 概率生成 → Prompt 軟約束 → Context 五層結構 → Agent 受約束執行循環 → Frameworks 工作流優先

Web3 基礎脈絡整合：Wallet 三類動作風險不同 → 智能合約 ABI ≠ 安全說明 → ERC-4337 Session Key = AI Agent 安全上鏈基礎

AI × Web3 核心原則：AI 解釋 ≠ AI 授權；Simulation + Structured Output + Session Key + Human-in-the-loop + Audit Log

GitHub 筆記：https://github.com/roy328line/ai-web3-school-cohort-0/blob/main/daily/2026-05-22.md
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->





\-–

學習日誌 · 2026-05-21（Day 5）

\## 今日學習主題

直播：AI 下鄉計劃｜AI 在 Web3 的應用（Week 1，5/21 20:00）

複習框架模組，整合前幾天的學習

\## AI 在 Web3 的應用｜核心整理

**AI × Web3 的核心張力**：用不確定的推理引擎（AI）驅動不可逆的執行系統（Web3）。解法方向：Simulation + Structured Output + Session Key + Human-in-the-loop + Audit Log。

**三個應用層次**：

**Layer 1 輔助層**：AI 幫助理解鏈上資料，不直接執行（交易解釋、合約 ABI 翻譯、Gas 估算建議）。

**Layer 2 執行層**：AI 生成操作計劃，人工確認後執行（script 生成 → 人工審查 → 測試網驗證）。

**Layer 3 自動化層**：AI 在受限授權範圍內自動執行（Session Key 限時限額，最小權限原則）。

**AI 下鄉的核心設計原則**：

1\. 降低 Web3 操作門檻，但不降低安全標準

2\. AI 解釋 ≠ AI 授權；AI 建議 ≠ AI 執行

3\. 每一個執行動作都需要可追溯的確認記錄

**個人反思**：AI 在 Web3 的真正價值，不是替代人判斷，而是讓人能夠在更多資訊下做出更好的判斷。

框架複習小結

\- 框架選擇原則：工作流 > 工具能力 > 框架複雜度

\- LangChain 適合快速原型，LangGraph 適合需要狀態管理的生產場景

\- Hermes 提供穩定的 tool calling 和 JSON 輸出，適合 AI x Web3 執行場景

\- OpenAI Agents SDK 提供 handoff/guardrails/tracing 等完整工程化支持
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->








今日學習：Frameworks 模組深讀（LangChain / LangGraph / OpenAI Agents SDK / Hermes）+ Hermes 安裝實作

主要收穫：

-   框架選擇第一原則：先理解工作流，再決定用不用框架。框架是系統邊界的表達，不是智能本身
    
-   \- Hermes 讓我重新思考「框架複雜度 vs 模型能力」的取捨——模型本身工具調用夠穩定，就可以少一層框架抽象
    
-   \- 安裝 Hermes 心得：建議用虛擬環境隔離依賴；function schema 格式需嚴格對應；prompt 格式要按官方模板
    

明日計劃：繼續完善 Hermes 測試，準備測試網錢包實作（MetaMask + Sepolia 測試幣）

GitHub 筆記：https://github.com/IntensiveCoLearning/AI-Web3-School/pull/29
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->









今日學習：深讀 Handbook Agent 模組（Tool Use / Planning / State / Reflection / Multi-Agent）+ 預習 Hermes Agent 架構

GitHub 筆記：[https://github.com/roy328line/ai-web3-school-cohort-0/blob/main/daily/2026-05-19.md](https://github.com/roy328line/ai-web3-school-cohort-0/blob/main/daily/2026-05-19.md)

Agent 核心技術組件：

Tool Use：讓 Agent 從「會回答」變成「能做事」。工具設計六維度：輸入 schema / 權限範圍 / 是否只讀 / 外部副作用 / 記錄方式 / 人工確認觸發條件。Tool Use 的權限分級比工具能力本身更重要。

Planning：模型生成的計劃是候選路線，不是授權。越靠近高風險動作，計劃越需要被系統規則拆開逐步檢查。

State：生產系統需要可查詢、可恢復、可審計的外置 State，並記錄環境（鏈 ID、區塊高度）、工具調用結果、確認請求、撤銷事件。

Reflection：自我檢查可以提高質量，確定性檢查才能承載風險，不能替代外部驗證 + 人工確認。

Multi-Agent：核心判斷問題：多個 Agent 是否真的減少複雜度？

Hermes Agent 預習：Skills 可復用高層指令集 / Long-term Memory 跨 session 記憶 / Tracing 可視化執行鏈 / Guardrails 輸入輸出驗證 / Session Key 限時限額授權

明日計劃：整合今晚 Hermes 直播筆記，開始測試網錢包實作（MetaMask 安裝 + Sepolia 測試幣）
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->











今日學習：深讀 AI x Web3 School Handbook 模組 A（LLM / Prompt / Context / Agent）+ 模組 B（Wallet / Smart Contract / Account Abstraction）

GitHub 筆記：[https://github.com/roy328line/ai-web3-school-cohort-0/blob/main/daily/2026-05-18.md](https://github.com/roy328line/ai-web3-school-cohort-0/blob/main/daily/2026-05-18.md)

\## 模組 A｜AI 基礎

\*\*LLM\*\*：概率生成模型，生成的是「概率上合理的輸出」，不是天然可信的事實。Hallucination 在 Web3 執行系統裡會從「答錯」變「做錯」，因此 Simulation 和 Human-in-the-loop 是系統基礎而非選配安全功能。

\*\*Prompt\*\*：Prompt 是軟約束，不是安全邊界。好 Prompt 四段式：任務目標 → 可用輸入 → 禁止行為 → 輸出格式。真正安全需要代碼層 allowlist + 工具調用前參數校驗 + 高風險動作強制走 human approval。Prompt Injection 是 Agent 場景的核心攻擊面。

\*\*Context\*\*：Context 五層結構：指令層 → 任務層 → 事實層 → 知識層 → 記憶層。不可信外部內容必須與系統指令層隔離，Memory 不能替代實時授權。

\*\*Agent\*\*：Agent 是被約束的執行循環，不是自主體。最危險設計是「模糊目標 + 廣泛工具 + 大額資產權限」三者並存。AI x Web3 Agent 八步架構：用戶目標 → 生成計劃 → 只讀工具執行 → 寫入工具 policy 檢查 → Simulation → 用戶確認 → Wallet 執行 → 日誌記錄。

\## 模組 B｜Web3 基礎

\*\*Wallet\*\*：連接/簽名/交易三類動作風險截然不同，UI 設計必須反映這個差異。助記詞是高危資訊，任何系統要求輸入助記詞都應默認視為危險。

\*\*Smart Contract\*\*：ABI 是機器可讀接口，不是安全說明書——告訴你能調用什麼，不保證調用是否安全。一次完整鏈上調用是 9 步流程（前端 → ABI 編碼 → 錢包確認 → RPC 廣播 → 驗證者打包 → EVM 執行 → Event → 前端回執 → 索引器更新）。

\*\*Account Abstraction\*\*：ERC-4337 讓帳戶可編程。Session Key 是 AI Agent 安全上鏈的關鍵基礎——比喻：不是「給 AI 一把主鑰匙」，而是「給 AI 一張限時限額的員工門禁卡」（最小權限原則）。

\## 核心發想

AI 不確定性（幻覺/注入/推理漂移）× Web3 不可逆性（交易上鏈不能撤回）= 核心設計張力：需要用不可靠的推理引擎驅動不可逆的執行系統。

解法：Simulation + Structured Output + Session Key + Human-in-the-loop + Audit Log

\## 明日計劃

跟進 5/19 直播：AI Agent 入門 — Hermes 從 0 到 1，並開始測試網錢包實作
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
