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
# 2026-06-14
<!-- DAILY_CHECKIN_2026-06-14_START -->
今日學習：Demo Day | Hackathon 項目展示 + 四週學習總回顧

核心主題：AI × Web3 School 最終日——Demo Day 正式展示 AI Security 項目，並完成整個四週課程的學習回顧與個人成長總結。

Demo Day 展示準備與執行：今日下午1:00舉行 Demo Day，每個 Hackathon 項目進行 3 分鐘展示 + 2 分鐘 Q&A。我的 AI Security Demo 聚焦於「AI Agent 在 Web3 執行場景中的 Defense-in-Depth 安全架構」，主要展示四層防禦機制的實際攔截效果。Demo 故事線依照計畫執行：首先展示無防禦狀態下 Prompt Injection 攻擊如何讓 Agent 執行非授權的 transfer() 調用；接著展示部署防禦後，相同攻擊被指令層隔離檢查攔截並記錄到審計日誌；最後展示 Base Sepolia EAS Explorer 上的不可篡改鏈上記錄，證明整個防禦決策過程可被外部驗證。

Q&A 重點問答：評委提問集中在三個方向——攻擊向量的覆蓋完整性（說明當前 10 種向量是最常見類型，真實部署需要持續更新測試集）、鏈上 attestation 的 gas 成本（說明 Base Sepolia 成本極低，正式部署可選擇批次上鏈降低成本）、與現有 Web2 安全工具的差異（說明 Web3 場景中 Agent 操作不可逆性更高，因此需要在執行層前置攔截而非事後修復）。

其他項目觀摩與學習：觀摩了其他學員的 Demo 展示，印象最深的三個方向是：基於 Cobo CAW 的 Agent Commerce 自主支付閉環（展示了 Pact 機制在真實 DeFi 場景的預算控制能力）、GLM-5.1 驅動的合約代碼審查助手（將 AI Security 應用於開發時審查而非執行時防禦，是很好的方向補充）、以及多簽治理輔助工具（讓 AI 生成提案摘要和行動項，保留最終決策給人類）。

四週學習成果總回顧：回顧整個 AI × Web3 School 的學習旅程。Week 1 建立了 LLM 能力邊界、Agent Workflow 和 Web3 基礎的共同語言；Week 2 深入研究 AI × Web3 六大交叉方向並選定 AI Security 主線；Week 3 完成從方向研究到 Hackathon 題目收斂的轉換；Week 4 完成從架構設計到可運行 Demo 的全程。最核心的學習是一個判斷框架：哪些 Agent 動作可以自動化執行，哪些必須保留人工確認，以及如何通過可驗證記錄讓整個執行過程具備外部可審計性。
<!-- DAILY_CHECKIN_2026-06-14_END -->

# 2026-06-13
<!-- DAILY_CHECKIN_2026-06-13_START -->
今日學習：Demo Day 前最終準備 | 提交包完善 + Demo 演練 + 跨方向學習整合

核心主題：Hackathon Demo Day 前最後一天，聚焦三件事：完善最終提交材料包、進行 Demo 完整演練，以及整合其他賽道的學習，補全 AI × Web3 全景視野。

最終提交包完善：今日完成 Final Submission Pack 所有材料的最後確認與補充。GitHub Repo 完整性確認（README 包含 Project Overview、Problem、Why AI + Why Web3 雙問題、Demo 截圖、Validation 材料、Risks 與 Next Steps）；核心代碼三個模組（prompt_guard.py、tool_validator.py、audit_logger.py）在 clean environment 下完成最終一鍵運行測試；鏈上驗證材料確認（Base Sepolia testnet EAS attestation 的 tx hash 和 EAS Explorer 連結均寫入 README）；Demo 影片腳本最終版（攻擊演示 30 秒 → 防禦攔截 30 秒 → 審計日誌 20 秒 → 鏈上驗證 20 秒）。

Demo 完整演練與問題排查：進行兩輪完整 Demo 演練。第一輪發現 CLI 輸出顏色在截圖中對比度不夠明顯，調整了 DENY 事件的紅色高亮方式；第二輪發現 EAS Explorer 頁面載入速度較慢，在 Demo 腳本中加入替代方案（預先截圖 + 提前開啟 Tab），避免 Demo 現場網路問題影響展示效果。演練過程也強化了對自己項目邊界的清晰理解——哪些攻擊向量已被覆蓋、哪些尚未覆蓋、哪些是 Mock 而非真實調用。

Cobo CAW Agentic Commerce 深度研究：補充研究 Cobo CAW 的 Pact 機制在 Agentic Commerce 場景的具體實現。Pact 的核心設計邏輯是「任務粒度的臨時授權」——每個 Agent 執行任務都需要用戶預先批准一個包含預算、合約白名單、操作類型和時間窗口的 Pact；任務完成後 Pact 自動失效，Agent 無法保留持久性的廣泛權限。這個設計和 AI Security 的 Scope Freeze 原則高度相似：越具體的授權邊界，越難被 Prompt Injection 或 Tool Abuse 繞過。

Agent Identity 與 ERC-8004 補充學習：補充學習 ERC-8004 的 agent trust 框架，理解 agent profile、capability declaration、job、escrow 和 evaluator 的協議層設計。Agent Identity 方向最有意思的問題不是「如何給 Agent 起名字」，而是「如何讓調用方在執行任務前驗證 Agent 的能力邊界、歷史記錄和失敗責任歸屬」。一個可信的 Agent Identity 系統必須包含鏈上可驗證的執行記錄，而不只是靜態的能力聲明。
<!-- DAILY_CHECKIN_2026-06-13_END -->


# 2026-06-12
<!-- DAILY_CHECKIN_2026-06-12_START -->
今日學習：Week 4 最終衝刺 | Hackathon 最終提交答疑 + 例會 + Final Submission Pack 整備

核心主題：Week 4 最後衝刺日（6/12），參加 Co-learning Hackathon 最終提交答疑和 Week 4 例會，完成 Final Submission Pack 的最後整備，確認 Demo Day 準備就緒。

Co-learning 最終提交答疑重點：本次 Co-learning 聚焦 Hackathon 最終提交的技術細節和常見問題。核心討論圍繞三個問題：Demo 跑通標準（評委關注的是可觀察的鏈路，而非功能完整性）、驗證材料標準（鏈上 tx hash、agent trace 日誌、截圖三種驗證方式的優先順序）、README 呈現方式（Why AI + Why Web3 兩個問題必須有獨立段落，不能混淆在技術描述中）。學習到的關鍵點：Demo 敘事的核心是「問題 → 為什麼舊方法不夠 → 解法 → 可驗證證明」，而不是功能列表。

Final Submission Pack 最終整備：確認提交材料完整性。GitHub repo 結構確認（README + demos/ + notes/ + logs/ 目錄齊全）；Demo 可運行性確認（prompt_guard.py + tool_validator.py + audit_logger.py 三個核心模組在 clean environment 下可一鍵運行）；鏈上驗證材料確認（Base Sepolia testnet EAS attestation 記錄，tx hash 和 EAS Explorer 連結均寫入 README）；Demo 影片腳本確認（攻擊演示 30 秒 → 防禦攔截 30 秒 → 審計日誌 20 秒 → 鏈上驗證 20 秒，總時長 2 分鐘以內）。

例會學習筆記：Week 4 例會討論了三個主題。第一是 Hackathon 項目總覽與 Demo Day 格式說明：Demo Day 在 6/14 舉行，每個項目 3 分鐘展示 + 2 分鐘 Q&A，評委關注可驗證性和 AI × Web3 結合點的清晰度。第二是優秀項目分享：分享了幾個完成度高的項目，共同特點是「問題清晰 + 主流程跑通 + 驗證材料充分」，而不是功能多。第三是下週課程預告：Week 5 聚焦整體學習成果回顧和職涯路徑探索，完整學習地圖的最後一塊拼圖。

Week 4 整體回顧：回顧整個 Week 4 的學習旅程——從 Scope Freeze 鎖定 AI Security 主流程、到 MVP 核心代碼實作、到 README 與驗證材料整備、到今日的最終提交確認。最重要的學習不是技術本身，而是「如何在有限時間內做出可驗證的最小有意義成果」：先凍結範圍、再執行主流程、再收集驗證材料、最後包裝敘事。這個方法論適用於 Hackathon，也適用於任何 AI × Web3 的早期產品驗證場景。

<!-- DAILY_CHECKIN_2026-06-12_END -->
# 2026-06-11
<!-- DAILY_CHECKIN_2026-06-11_START -->
今日學習：Week 5 學習成果整合 | Hackathon Demo 反思 + Dev Tooling 探索 + 學習地圖完整回顧

核心主題：Hackathon 提交後的第一天，聚焦三件事：反思 AI Security Demo 的完成情況與可改進空間、探索 Dev Tooling 賽道的實踐方向，以及對整個 AI × Web3 學習地圖進行完整回顧，確認知識點的連接與缺口。

Hackathon Demo 反思：AI Security Demo 完成了 Defense-in-Depth 四層架構的最小可驗證原型，覆蓋 Prompt Injection 檢測、Tool Call 白名單驗證、Pact 範圍約束與鏈上 attestation 審計。反思三個可改進點：第一，攻擊向量測試集過於簡單，真實攻擊的語義多樣性遠超測試集；第二，鏈上 attestation 目前只記錄 DENY 事件，未來應擴展到所有決策點的摘要；第三，CLI 視覺化雖然直觀，但缺少 API 介面讓其他系統能整合這個安全層。這三個方向是 Demo 演進為真實系統的核心路徑。

Dev Tooling 賽道探索：Dev Tooling 指面向合約理解、測試、文檔、代碼審查和開發工作流的 AI 輔助工具。這個賽道和 AI Security 的交叉點是：AI 輔助的代碼審查工具本身也需要防止 Prompt Injection——開發者可能在代碼注釋中嵌入惡意指令，讓 AI 審查工具產生錯誤的安全評估。這是 AI Security 在 Dev Tooling 場景的具體應用，也是 Hackathon 項目後續演進的一個自然方向：從「執行時安全防護」擴展到「開發時安全審查」。

學習地圖完整回顧：回顧 AI × Web3 School 四週學習路徑的知識結構。AI 基礎部分涵蓋了 LLM 能力邊界、Prompt 設計、Context 管理、RAG 架構、Agent 工作流、Frameworks 編排層與 MCP 協議。Web3 基礎部分涵蓋了 Network 環境、Cryptography 基礎、Wallet 身份入口、Smart Contract 鏈上規則、Account Abstraction 智能帳戶、DeFi 協議結構、Oracle 數據橋接與 Indexing 數據層。AI × Web3 Bridge 部分涵蓋了 Chain-aware Context、Web3 Tool Use、Agent Workflow、Agent Wallet、Machine Payment、Settlement & Escrow、Agent Identity、Agent Trust、Verifiable AI、AI Security、AI Privacy 與 Governance AI。前沿探索部分完成了 AI Security 賽道的 Hackathon Demo，並在今日補充了 Dev Tooling 方向的初步探索。

下一步計畫：在剩餘三天（6/12-6/14）繼續完善 Hackathon Demo 的說明文件，補充 Dev Tooling 場景下 AI Security 的具體應用案例，並整理 WCB 個人頁面的學習記錄與技能標籤。

<!-- DAILY_CHECKIN_2026-06-11_END -->
# 2026-06-10
<!-- DAILY_CHECKIN_2026-06-10_START -->
今日學習：Week 4 Hackathon Build Day 5 | Governance AI 概念補全 + Hackathon Demo 最終整備

核心主題：Week 4 第五天，補全學習地圖中 Governance AI 主題，並完成 Hackathon Demo 最終整備，包括 CLI 視覺化優化、Demo 影片腳本準備與提交材料清單確認。

Governance AI 核心概念：Governance AI 指的是將 AI 應用於 DAO 治理、公共決策與協議升級流程中的一系列工具和機制。核心問題不是「AI 能否做決策」，而是「如何讓 AI 在治理流程中扮演輔助角色，同時保持決策的透明度與可追責性」。主要應用場景包括：提案摘要自動生成（讓持幣者快速理解長篇提案）、歷史投票模式分析（識別鯨魚行為、選民倦怠、利益衝突模式）、治理參與度提升（個性化通知、投票提醒、影響評估說明），以及爭議解決輔助（基於歷史判例提供建議，但最終決策保留給人類）。

Governance AI 的風險與邊界：AI 輔助治理最大的風險是「AI 建議固化為社群共識」——當 AI 的摘要和建議被大多數人直接採用，反而可能造成意見同質化，削弱去中心化治理的多元價值。解法是將 AI 定位為「資訊工具」而非「決策推薦系統」：呈現多元觀點摘要而非單一結論，公開訓練數據與提示詞以確保可審計性，以及讓用戶有能力覆蓋和質疑 AI 的摘要邏輯。另一個風險是治理操控——精心設計的提案可以欺騙 AI 摘要器，讓惡意提案看起來無害，因此 Governance AI 系統本身也需要 AI Security 的防護機制。

Hackathon Demo CLI 輸出優化：完成 CLI 輸出格式的視覺化調整，採用顏色編碼區分決策結果（綠色 ALLOW、紅色 DENY、黃色 ESCALATE），並加入進度指示器顯示每個驗證層的通過狀態。優化後的 Demo 輸出更直觀地展示了 Defense-in-Depth 四層架構的實際攔截過程，有助於評委在演示時快速理解系統邏輯。

Hackathon 提交材料清單確認：確認最終提交材料包括：可運行的 Demo 代碼（prompt_guard.py + tool_validator.py + audit_logger.py）、完整測試套件（10 種 Prompt Injection 攻擊向量測試 + 工具調用合規測試）、README（背景 + 架構圖 + 快速運行指南 + 測試結果）、鏈上 attestation 記錄（Base Sepolia EAS Explorer 連結）、Demo 影片腳本草稿（攻擊演示 → 防禦攔截 → 審計日誌 → 鏈上驗證）。

Week 4 學習地圖回顧：整個 Week 4 的學習路徑從 AI Security 問題定義出發，經過 Defense-in-Depth 架構設計、AI Privacy 補充、MVP 代碼實作，到今日的 Governance AI 概念補全，完整覆蓋了 Handbook 中 AI × Web3 Bridge 部分的核心交叉問題。AI Security + AI Privacy + Governance AI 三者共同構成 AI Agent 在 Web3 場景中可信運行的基礎設施：Security 確保 Agent 不被濫用、Privacy 確保用戶數據受保護、Governance AI 確保 Agent 參與的決策過程可透明審計。

<!-- DAILY_CHECKIN_2026-06-10_END -->
# 2026-06-09
<!-- DAILY_CHECKIN_2026-06-09_START -->
今日學習：Week 4 Hackathon Build Day 4 | MVP 核心代碼實作完成 + README 初稿 + Demo 驗證材料整理


核心主題：Week 4 第四天，依照昨日計畫完成 AI Security Demo 的 MVP 核心模組代碼實作，整理 README 初稿與驗證材料，為 Demo 提交做準備。


MVP 核心代碼實作成果：今日完成兩個核心模組的可運行版本。Prompt Injection 檢測器（`prompt_guard.py`）測試覆蓋 10 種攻擊向量，包含角色扮演注入（「忽略所有之前的指令」）、系統指令覆寫、越獄模式提示等，攔截率達到 100%（測試集）。Tool Call Validator（`tool_validator.py`）實作三層驗證邏輯：Pact 範圍白名單檢查 → 參數格式校驗 → 金額上限保護，合規工具調用通過率 100%，非法調用攔截率 100%。


審計日誌與鏈上 Attestation：審計日誌模組完成，所有決策點（ALLOW / DENY / ESCALATE）輸出結構化 JSON 格式，包含時間戳、操作類型、輸入摘要、決策結果與原因。鏈上 attestation 採用 Base Sepolia testnet，通過 EAS（Ethereum Attestation Service）記錄每次 DENY 事件的哈希摘要，確保審計記錄不可篡改。今日完成第一筆測試 attestation 寫入，transaction hash 已記錄在 README。


README 初稿整理：完成 README 主要結構，包含項目背景（AI Agent 在 Web3 場景的安全挑戰）、核心架構圖（Defense-in-Depth 四層）、快速運行指南（`pip install + python demo.py`）、測試結果摘要（攔截率 / 通過率）、鏈上驗證連結（EAS Explorer）。Demo 故事線確認為：攻擊演示 → 防禦攔截視覺化 → 審計日誌展示 → 鏈上記錄查詢。


Verifiable AI 概念深化：今日整理 Demo 時深入思考 Verifiable AI 的核心問題——如何讓 AI 的決策過程和結果可以被外部驗證，而不只是「相信模型說的話」。鏈上 attestation 是目前 Verifiable AI 最直接的落地路徑：對每個關鍵決策點（尤其是拒絕操作）留下哈希摘要上鏈，可以事後審計任何 Agent 操作是否符合預設規則。這個模式對 DeFi 場景的 Agent 尤其重要——用戶可以驗證 Agent 是否真的按照 Pact 規定行動。


明日計畫：完善 Demo 視覺化介面（CLI 輸出格式優化），準備 Hackathon 提交材料（repo 清理 + demo video 錄製準備），複習 Governance AI 主題以補全學習地圖。

<!-- DAILY_CHECKIN_2026-06-09_END -->

# 2026-06-08
<!-- DAILY_CHECKIN_2026-06-08_START -->
今日學習：Week 4 Hackathon Build Day 3 | Scope Freeze + MVP 主流程推進 + Co-learning & Moven 分享會

核心主題：Week 4 第三天，進行 Hackathon 項目 Scope Freeze，鎖定 AI Security Demo 最小可驗證主流程，並參加 Co-learning 答疑與 Moven 支付場景分享會。

Scope Freeze 決策：根據 Week 4 最低完成路徑要求，將 AI Security Demo 範圍收斂為一條核心鏈路：惡意 Prompt Injection 輸入 → 多層防禦攔截 → Pact 範圍驗證 → 審計日誌記錄 → 鏈上 attestation 存證。確認 Must-have（Prompt Injection 檢測 + Tool Call 白名單 + 審計 JSON）、Should-have（鏈上 attestation 接入）、Nice-to-have（前端 Dashboard 展示）、Cut/Mock（完整 DeFi 場景模擬）。

MVP 主流程架構確認：整體流程為「用戶輸入 → 指令層隔離檢查 → 工具調用白名單驗證 → Pact 範圍確認 → 執行或拒絕 → 審計日誌輸出」。關鍵驗證指標：Prompt Injection 攔截率（測試 10 種攻擊向量）、合規工具調用通過率、完整審計記錄可追溯性。

Co-learning 答疑重點：本週 Co-learning session 重點圍繞 Hackathon 衝刺答疑，討論了 AI Security 賽道中「攻擊模擬 vs 防禦展示」的 Demo 敘事策略——評委更關注防禦機制的可解釋性而非攻擊的複雜性。建議 Demo 故事線：展示攻擊 → 展示被攔截的防禦 → 展示審計記錄 → 解釋為什麼鏈上記錄不可篡改。

Moven 分享會學習筆記：Moven 在支付場景的探索和思考分享了 AI Agent 如何在不需要用戶每次確認的情況下完成微支付閉環。核心洞察是「預算授權 + 條件執行」模式——用戶提前設定支付條件（金額上限、收款方白名單、有效期），Agent 在條件範圍內自動執行，超出範圍必須暫停請求人工確認。這與 AI Security 賽道的 Pact 機制高度相似，兩者共同構成 Agentic Commerce 的基礎設施層。

明日計畫：完成 MVP 核心代碼實作（Prompt Injection 檢測器 + Tool Call Validator），整理 README 初稿，確保驗證材料（測試日誌 + 攔截記錄）可復現。
<!-- DAILY_CHECKIN_2026-06-08_END -->

# 2026-06-07
<!-- DAILY_CHECKIN_2026-06-07_START -->
今日學習：Week 4 Hackathon Build Day 2 | AI Privacy 核心概念 + Hackathon Demo 實作進展

核心主題：深入學習 AI Privacy 在 Web3 場景中的關鍵問題，並推進 AI Security Hackathon Demo 的實際代碼實作。

AI Privacy 核心概念：AI Privacy 在 Web3 場景中有三個不同於 Web2 的特殊挑戰。第一是鏈上身份去匿名化風險——鏈上地址、交易歷史都是公開數據，結合 AI 的語義推斷能力可以輕易識別真實身份；隱私保護需要從「匿名化地址」升級到「零知識身份證明」。第二是 LLM 推斷洩漏——用戶向 Agent 描述意圖時，措辭本身可能洩漏持倉、策略、風險偏好等敏感信息；需要在 Prompt 設計層面建立「最小信息披露」原則。第三是 Memory Persistence 隱私邊界——Agent 的長期記憶跨會話存儲，如何讓用戶控制哪些信息可以被記憶、哪些在會話結束後自動清除，是 Web3 Agent 必須解決的基礎問題。

Zero-Knowledge Proof 在 AI Privacy 中的應用：ZK Proof 可以讓 Agent 在不洩漏具體數據的前提下證明「用戶滿足某個條件」（如 KYC 已完成、持有超過閾值的資產）。ZK + Agent 的組合邏輯：用戶提交 ZK Proof → Agent 驗證 Proof 有效性 → Agent 根據授權條件決策 → 整個過程用戶真實數據不上鏈。

Hackathon Demo 實作進展：今日開始搭建 AI Security Demo 的核心模組。完成 Prompt Injection 檢測器的基礎版本——通過比對指令層和輸入層的語義差異，識別試圖篡改系統指令的惡意輸入。Tool Call 白名單驗證邏輯完成初稿：每個工具調用在執行前必須通過三層驗證（Pact 範圍檢查 → 參數格式驗證 → 金額上限驗證）。審計日誌模組設計完成，所有決策點（通過/拒絕/escalate）記錄到結構化 JSON 格式，計畫接入鏈上 attestation。

核心洞察：AI Privacy 和 AI Security 不是兩個獨立問題，而是同一問題的兩面——Security 是「防止 Agent 被攻擊者控制執行惡意操作」，Privacy 是「防止 Agent 洩漏用戶不願公開的信息」。兩者的底層防禦機制高度重疊：最小權限原則、指令層隔離、輸出過濾、可審計記錄。
<!-- DAILY_CHECKIN_2026-06-07_END -->

# 2026-06-06
<!-- DAILY_CHECKIN_2026-06-06_START -->
今日學習：Week 4 Hackathon Build Day 1 | AI Security 賽道問題定義 + Demo 架構設計


核心主題：進入 Week 4 Hackathon Build 階段，聚焦 AI Security 賽道的問題定義與最小可展示 Demo 架構設計。


AI Security 賽道問題定義：AI Agent 在 Web3 場景中面臨的安全威脅不同於傳統 Web2。主要攻擊面包含 Prompt Injection（惡意提示注入，讓 Agent 執行非授權操作）、Tool Abuse（濫用工具調用，偽裝合法操作繞過 Pact 限制）、Memory Poisoning（污染 Agent 長期記憶，影響未來決策）、Context Manipulation（篡改上下文讓 Agent 誤判授權邊界）。


Defense-in-Depth 防禦架構設計：第一層 Prompt-level 防禦（指令層隔離，不可信輸入不能影響系統指令）、第二層 Tool-level 驗證（工具調用前參數校驗 + allowlist）、第三層 Pact-level 約束（Session Key 限額 + 合約白名單 + 時間窗口）、第四層 On-chain 審計（所有 Agent 操作留下可驗證的鏈上記錄）。
