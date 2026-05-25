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
# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->
今日學習：深讀 Settlement & Escrow 模組

GitHub 筆記：https://github.com/roy328line/ai-web3-school-cohort-0/blob/main/daily/2026-05-25.md

## 核心整理

**Settlement & Escrow** 解決的是 Agent 經濟裡「錢什麼時候釋放、服務怎麼算完成、失敗怎麼退款、爭議怎麼處理」，把支付從一次轉帳變成完整交易流程。

**第一性原理**：自動化交易必須有明確完成條件，否則支付就無法安全自動化。Escrow 設計首先要定義狀態機，而不是先寫付款代碼。

**Escrow**：鎖定資金直到交付條件滿足後釋放，最小狀態機：Created → Funded → Delivered → Accepted → Released（或 Refunded / Disputed）。好的 escrow 先定義業務流程，再定義資金流。

**Receipt**：不只是「已付款」，應同時服務人和機器：記錄任務 ID、交易 hash、驗收狀態，並成為 reputation 的輸入。

**Delivery Proof**：服務方交付的可驗證證明（文件 hash、API 日誌、模型輸出簽名等），必須能和原始任務對應，避免「結果存在但不可驗證」。

**Acceptance**：驗收可自動也可人工，高價值任務建議「AI 初審 + challenge window + 人工復核」組合。

**Refund**：退款規則必須在任務開始前寫清楚，並考慮部分交付的按比例退款。

**Dispute**：爭議記錄是聲譽系統的重要輸入，設計需回答：誰能發起、成本多少、誰有裁決權、是否可申訴。

**ERC-8183**：Agentic Commerce 草案標準，把 Agent 交易從「轉帳」提升到「狀態轉換」維度，與 ERC-8004 互補（ERC-8004 偏身份聲譽，ERC-8183 偏任務支付交付）。

## 核心發想

Settlement & Escrow 的本質不是「鎖錢」，而是「把整個業務流程狀態機化」。Builder 機會：設計「狀態透明、proof 可驗證、dispute 有成本但可處理」的 Agentic Escrow 系統，讓 AI Agent 之間的委托和交易真正可信任。

<!-- DAILY_CHECKIN_2026-05-25_END -->
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
