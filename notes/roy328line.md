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
