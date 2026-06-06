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
# 2026-06-06
<!-- DAILY_CHECKIN_2026-06-06_START -->
今日學習：Week 4 Hackathon Build Day 1 | AI Security 賽道問題定義 + Demo 架構設計

核心主題：進入 Week 4 Hackathon Build 階段，聚焦 AI Security 賽道的問題定義與最小可展示 Demo 架構設計。

AI Security 賽道問題定義：AI Agent 在 Web3 場景中面臨的安全威脅不同於傳統 Web2。主要攻擊面包含 Prompt Injection（惡意提示注入，讓 Agent 執行非授權操作）、Tool Abuse（濫用工具調用，偽裝合法操作繞過 Pact 限制）、Memory Poisoning（污染 Agent 長期記憶，影響未來決策）、Context Manipulation（篡改上下文讓 Agent 誤判授權邊界）。

Defense-in-Depth 防禦架構設計：第一層 Prompt-level 防禦（指令層隔離，不可信輸入不能影響系統指令）、第二層 Tool-level 驗證（工具調用前參數校驗 + allowlist）、第三層 Pact-level 約束（Session Key 限額 + 合約白名單 + 時間窗口）、第四層 On-chain 審計（所有 Agent 操作留下可驗證的鏈上記錄）。

Hackathon Demo 架構設計：最小可展示閉環——使用者自然語言下達任務 → Agent 解析意圖 → 識別操作需求 → 對照 Pact 邊界自動決策 → 在邊界內執行（無需人工確認）/ 超出邊界時觸發 human approval → 所有決策點輸出可讀審計日誌。核心展示點：Agent 能主動識別 Prompt Injection 並拒絕執行，而不是被動等待用戶發現問題。

技術棧確認：前端使用 Next.js，Agent 框架使用 LangChain/LangGraph，鏈上交互使用 viem + Cobo CAW SDK，測試網使用 Sepolia。Session Key 生成與管理接入 ERC-4337 智能合約錢包。

核心洞察：AI Security 不是「把現有安全措施搬到 AI 上」，而是「重新設計攻擊模型」——AI Agent 的主要漏洞是語義層的歧義和上下文污染，傳統的輸入過濾、防火牆規則在語義攻擊面前幾乎無效。需要從「驗證輸入格式」升級到「驗證操作語義的授權合法性」。
<!-- DAILY_CHECKIN_2026-06-06_END -->

# 2026-06-05
<!-- DAILY_CHECKIN_2026-06-05_START -->
今日學習：Week 3 直播 | AI Agent 時代，重新審視區塊鏈這項技術選擇 & AI Agent 深度參與下的區塊鏈應用開發實戰


核心主題：從 AI Agent 視角重新審視區塊鏈的技術價值，以及 AI Agent 深度參與區塊鏈應用開發的實戰方法。


重新審視區塊鏈的三個問題框架：AI Agent 時代，評估一條鏈/技術棧不再是「TPS 多少、生態多大」，而是「這條鏈能不能讓 Agent 安全執行、身份可驗證、行為可審計、支付可自主」。四個關鍵判斷維度：鏈上 Agent 身份（DID/ENS）、可程式化授權（Session Key/Account Abstraction）、原生支付（穩定幣/ERC-20 自動結算）、行為審計（on-chain log + attestation）。


AI Agent 深度參與區塊鏈開發實戰：Hackathon 週期的技術選型邏輯——優先選有完整 SDK、有 simulation、有明確 escrow 機制的技術棧。Agent 參與的鏈上應用需要「可組合性」：Session Key + Policy + Pact 可以組合，但每個模組必須獨立可測試。Demo 設計原則：能端到端跑通比功能完整更重要，優先展示「Agent 自主決策 → 觸發 Pact 授權 → x402 支付 → 鏈上收據」這條主線閉環。
