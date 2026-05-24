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
# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->
今日學習：深讀 Machine Payment 模組（Stablecoin Payment / Budget / Quote / Payment Intent / x402 / MPP / Subscription / Micropayment）

GitHub 筆記：https://github.com/roy328line/ai-web3-school-cohort-0/blob/main/daily/2026-05-24.md

Machine Payment 核心整理：

第一性原理：Agent 不應該擁有無限支付能力，只應該拿到具體任務、預算和收款方範圍內的支付權限。支付能力 = 執行能力，一旦 Agent 可以付款，它就可以消耗用戶資金或被惡意上下文誘導。

三個核心原則：預算先於執行（沒有預算邊界 = 沒有安全自動支付）、報價必須可比較（Agent 需知道價格/幣種/有效期/退款條件）、收據必須可驗證（付款後能證明付給誰/為什麼付/交付了什麼）。

關鍵知識點：x402 把 HTTP 402 Payment Required 變成互聯網原生支付流程，讓 Agent 處理 402（付款）就像處理 401（登錄）一樣自然。MPP 協議化機器間支付流程：服務發現 → 報價 → 授權 → 結算 → 收據。Micropayment 不適合每次都上鏈結算（成本超過服務本身），需要 L2 / payment channel / 批量結算設計。

個人洞察：機器支付不是技術問題，而是信任問題。Builder 機會：「Agent 可以信任、用戶可以控制、服務方可以驗證」的支付基礎設施。
<!-- DAILY_CHECKIN_2026-05-24_END -->

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
