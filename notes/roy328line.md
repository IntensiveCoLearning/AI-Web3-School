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
# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->
\--

學習日誌 · 2026-05-22（Day 6）

\## 今日學習主題

直播：Co-learning｜任務推進與答疑（Week 1，5/22 19:00）

直播：例會分享｜上麥分享學習感受或信息觀察（Week 1，5/22 20:00）

\## Week 1 整體複習｜核心脈絡整理

本週學習的核心主軸是：用不可靠的推理引擎（AI）驅動不可逆的執行系統（Web3）——這是整個課程的核心設計張力。

**AI 基礎脈絡（Day 1–5 整合）**：LLM 是概率生成引擎，Hallucination 在 Web3 裡不是答錯是做錯。Prompt 是軟約束，系統安全需要代碼層 allowlist + 人工確認。Context 五層結構，不可信內容需與指令層隔離。Agent 是受約束的執行循環，最危險設計：模糊目標 + 廣泛工具 + 大額資產並存。Frameworks 選擇第一原則：先理解工作流。

**Web3 基礎脈絡**：Wallet 三類動作（連接/簽名/交易）風險截然不同。ABI 告訴你能調用什麼，不保證調用是否安全。ERC-4337 Session Key = AI Agent 上鏈的安全關鍵基礎（最小權限原則）。

\## AI × Web3 交叉設計原則

1. AI 解釋 ≠ AI 授權；AI 建議 ≠ AI 執行
2. 2. 每個執行動作需要可追溯的確認記錄
   3. 3. Simulation + Structured Output + Session Key + Human-in-the-loop + Audit Log 是解法組合
     
      4. \## 個人學習感受
     
      5. Week 1 最大收穫是建立了判斷框架：任何 AI 輸出進入 Web3 執行層之前，都需要一道人工確認節點。AI 降低了操作門檻，但不能降低安全標準。框架選擇和模型選擇是兩個不同維度——工具調用夠穩定的模型可以減少框架層的 guard，對鏈上場景系統設計成本影響很大。
     
      6. GitHub 筆記：https://github.com/roy328line/ai-web3-school-cohort-0/blob/main/daily/2026-05-22.md
     
      7. <!-- DAILY_CHECKIN_2026-05-22_END -->
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
