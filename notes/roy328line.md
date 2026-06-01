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
# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->
今日學習：深讀 Governance AI 模組，理解 AI 如何輔助 DAO 與鏈上治理

核心概念：Governance AI 不是讓 AI 替社區投票，而是幫助治理參與者更好地閱讀提案、追蹤會議、理解預算、保留來源、發現協作關係，並在關鍵決策中減少信息不對稱。

第一性原理

治理裡的 AI 輸出必須保留來源和不確定性。治理不是客服問答，提案通常涉及價值取捨、資源分配和長期影響。AI 可以總結，但必須讓讀者回到原始材料，看到不同觀點，而不是只給一個「應該支持」的結論。

Governance AI 核心知識整理

Proposal Summary（提案摘要）

好的摘要不只縮短文本，還要保留關鍵來源、反對意見、未回答問題和影響範圍
治理摘要最好有固定結構：提案目標、背景、預算、執行主體、時間線、影響範圍、支持理由、反對理由、未決問題、相關歷史——讓不同提案可以橫向比較
AI 摘要必須標注不確定性：「預算是否合理」是判斷，「提案請求 50,000 USDC」才是事實；兩者混在一起會讓讀者誤以為 AI 判斷就是治理結論
不要讓 AI 把爭議性提案總結成單一宣傳稿

Meeting Action（會議行動事項）

核心難點：從討論中提取承諾。「我們應該研究一下」不是 action；「Alice 在下週五前整理三種支付方案」才是 action
必須記錄：誰負責、截止時間、上下文鏈接、決策狀態和後續檢查方式
還要記錄決策狀態：已決定、待確認、需要投票、需要預算、需要法律/安全複核
沒有 action owner 的會議摘要，很快會變成無用記錄

Contribution Graph（貢獻圖）

幫助社區看到誰在做什麼、貢獻如何連接、哪些工作被低估
資料來源：GitHub、論壇、鏈上支付、會議記錄和項目管理工具
特別重要：發現「隱形貢獻」——誰長期 review、誰在協調會議、誰維護文檔、誰回答新人問題
不應把複雜貢獻簡化成 commits 數量；社區照護、協調和研究類工作很難量化
在公共物品資助中，貢獻圖能幫助避免重複撥款和漏撥款

Budget Check（預算審查）

好的預算審查要問：這筆錢對應哪些 deliverables，付款節奏是否和里程碑綁定，是否有可驗證交付，失敗或延期怎麼辦
AI 可以幫忙檢查：預算項是否完整、里程碑是否具體、過去撥款是否完成、金額是否和工作範圍匹配
鏈上付款還要檢查：收款地址是否屬於提案方、是否是多簽、是否需要 vesting、歷史是否有異常提款
Budget Check 不是自動砍預算，而是讓社區看清問題

Source Traceability（來源可追溯性）

Governance AI 的底線：每條關鍵總結都應該附來源（論壇鏈接、提案編號、會議時間戳、鏈上交易、投票記錄或預算表）
沒有來源的治理摘要不應該用於投票依據
還要支持反向檢查：讀者看到一句摘要，能點回原文；看到一個預算結論，能點回表格和交易
如果 AI 輸出無法給出來源，應該明確標注為「推斷」或「不確定」

Deep Funding（深度資助）

核心難點：影響不是線性的——一個底層庫可能被很多項目間接使用，一個協調者可能讓多個團隊成功
AI 可以輔助構建證據包：項目依賴圖、使用案例、貢獻者網絡、歷史資助、用戶反饋
但最終分配應該保留多元評審、公開理由和申訴機制——模型不應該成為黑箱撥款者

Plurality（多元性）

強調在多元群體中保留差異、協調合作，而不是把所有人壓成一個平均意見
實際產品含義：AI 摘要不要只給「主流意見」，還要展示少數派擔憂、利益相關者差異、地區/角色差異和可協商空間
例如協議費用提案中，LP、交易者、開發者、金庫管理者和長期 token holder 的視角可能完全不同——治理 AI 應該把這些視角展開，而不是用一個平均立場抹平衝突

在 AI x Web3 中的位置

Governance AI 連接 AI 總結能力和 Web3 公共決策：可以讀取鏈上投票、論壇討論、預算流向和貢獻記錄，幫助社區理解治理狀態。

但治理比交易更重視正當性。AI 輔助工具必須透明、可質疑、可複核，尤其不能悄悄替用戶投票或隱藏反對意見。

最小實踐設計

設計一個治理提案摘要模板（以「AI x Web3 School 課程更新提案」為例）：

提案目標：新增 Decentralized AI 模組，覆蓋 FL / ZK / TEE 三個子方向
背景：學員反饋現有課程在去中心化 AI 執行層的內容不足
預算：20,000 USDC（課程設計 + 審核 + 翻譯），分三個里程碑付款
執行主體：核心貢獻者 + 外部 reviewer（需多簽審批）
支持理由：填補課程空白，與現有 Verifiable AI 模組強相關
反對理由：預算未明確 KPI，模組完成標準不夠具體
未決問題：第三方 reviewer 如何篩選？翻譯覆蓋哪些語言？
每條關鍵結論附來源鏈接：[提案討論串] [預算明細表]
明確寫出「AI 沒有替你做投票建議」

個人洞察

今天最大的收穫是理解了「治理 AI 的核心不是提升效率，而是提升信息質量」。治理決策的合法性來自公開辯論和多元聲音，不是來自 AI 的快速總結。如果 AI 把複雜爭議壓成單一結論，反而會損害治理正當性。

Proposal Summary + Source Traceability 的組合是 Governance AI 的基礎設施。沒有來源，摘要就是單方聲明；有了來源，讀者才能做獨立判斷。

Plurality 的思路讓我聯想到 Verifiable AI 的設計原則：系統不應該只暴露單一結果，而應該暴露不確定性範圍和多元視角。治理裡的「沒有單一正確答案」和 Verifiable AI 裡的「結果需要被質疑和挑戰」有異曲同工之妙。

Contribution Graph 是我覺得最有潛力但最難做好的部分。它試圖解決開源社區裡「可見貢獻 vs. 隱形貢獻」的不平等問題——但量化評分本身可能製造新的激勵扭曲。好的 Contribution Graph 應該是「展示證據」而非「計算分數」。

今日產出
Governance AI 七大知識節點整理（Proposal Summary / Meeting Action / Contribution Graph / Budget Check / Source Traceability / Deep Funding / Plurality）
治理提案摘要模板設計（含目標/背景/預算/支持反對理由/未決問題/來源）
Governance AI 在 AI x Web3 架構中的位置梳理
個人洞察：治理 AI 的核心是提升信息質量，而非替代人的政治判斷
明日計劃
進入 Decentralized AI 模組，研究去中心化 AI 執行的技術方向（FL / ZK / TEE）
<!-- DAILY_CHECKIN_2026-06-01_END -->
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
