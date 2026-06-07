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
