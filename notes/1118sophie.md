---
timezone: UTC+8
---

# 1118sophie

**GitHub ID:** 1118sophie

**Telegram:** @Sophiechiu1

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->
Cross-Agent Audit System

事後防線——日誌落地之後，跨 Agent、跨時間軸做行為重建與攻擊歸因。

一、五個模組

•   Module 5 — 攻擊鏈重建器

把行為日誌重新排序成時序鏈，自動偵測 probe → escalate → exfiltrate 三段攻擊模式。單看每個事件可能都是邊緣案例，串起來才看出攻擊意圖。WARN 後 30 秒內出現 BLOCK = 觸發升級審查。

•   Module 6 — 跨 Agent 關聯分析器

計算任意兩個 Agent 的事件共現頻率（5 秒滑動窗口）。相關性 ≥ 0.8 判定為協調行為。攻擊者會把動作分散在多個 Agent 上，單 Agent 審計是盲點。

•   Module 7 — 根因歸因引擎

在事件層級之上做因果推斷：確認同一 originator\_id 是否出現在多個 BLOCK 鏈中、護照是否在發行時就宣告了假能力、哪條規則未能更早攔截。輸出修復建議清單（立即 / 24H / 7D）。

•   Module 8 — 護照生命週期管理器

Day 1 發行護照，Day 3 吊銷護照。根據 BLOCK 記錄和關聯分析自動觸發吊銷，並標記同一 registry 下的其他護照需要重新審查。

•   Module 9 — LLM 審計報告產生器

規則引擎處理精確計算，LLM 處理語意推斷。LLM Judge 輸出格式化報告，包含信心分數、歸因說明、以及明確的邊界聲明（哪些東西 LLM 沒有驗證）。

二、五個測試情境

| 情境 | Agent | 事件 | 關聯性 | 歸因 |
| 正常 DEX Swap | agent-0x9a12 | transfer() ALLOW | — | 無 |
| 試探攻擊 | agent-0x4f3c | addLiquidity() WARN | 先行事件 | probe 偵測 |
| Prompt Injection | agent-0x4f3c | transfer() BLOCK | T+12s | AML.T0051.001 |
| Scope Escalation | agent-0x4f3c | approve(MaxU) BLOCK | T+25s | AML.T0036 |
| Silent Drain | agent-0x9a12 | withdraw() BLOCK | 共現 0.91 | AML.T0051.002 |

三、關鍵洞察

•   WARN 是信號，不是結論。 Day 2 的 WARN 讓交易通過，Day 3 的重建才發現它是攻擊鏈第一步。應在 WARN 後設定升高警戒窗口。

•   攻擊分散在多 Agent 是常態。關聯矩陣揭示 agent-0x4f3c × agent-0x9a12 共現頻率 0.91，幾乎確定協調攻擊。Day 2 每次只看一筆交易，根本看不到這個。

•   護照的信任不能是靜態的。發行時 CLEAN 不代表永遠安全。攻擊者可以先拿到合法護照，再在 runtime 越權。吊銷機制讓護照信任變成動態的。

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/1118sophie/images/2026-05-31-1780235491565-image.png)
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->

AI Agent 交易沙盒模擬器 事中防線——在交易發出、尚未上鏈的空隙，執行四道平行分析

昨天做事前預防，今天補事中攔截：Agent 送出 calldata 的瞬間，沙盒同步跑完解碼、注入偵測、防火牆、日誌，風險夠高再召喚 LLM 裁判。

一、四個模組

•   Module 1：CallData 解碼器

•   解析原始 hex，提取函式選擇器（前 4 bytes）、目標地址、金額，比對已知簽名白名單。Value 超過 10 ETH 標 HIGH，MaxUint256 直接 CRITICAL。

•   Module 2：Injection 偵測器\*\*

•   偵測三種攻擊，各對應 MITRE ATLAS 分類：

\-       Destination Override（AML.T0051.001）：目標地址被 prompt injection 覆蓋

\-       Scope Escalation（AML.T0036）：read\_only 護照卻呼叫 approve(MaxUint256)

\-       Silent Drain（AML.T0051.002）：withdraw 金額異常暴增

•   Module 3：Scope Firewall

•   六條規則平行執行（selector 白名單、scope 比對、value 上限、injection 掃描、鏈上模擬、address 驗證），任一失敗觸發 BLOCK，全過才輸出 ALLOW。

•   Module 4：行為時序日誌

每步帶 timestamp 記錄，是事後 Cross-Agent Audit 的原始材料。沒有日誌，事後審計就是盲飛。

二、5個測試情境

| 情境 | function | risk | 裁決 |
| DEX Swap | transfer() | 無 | ALLOW |
| Prompt Injection | transfer() | Destination Override | BLOCK |
| Scope Escalation | approve(MaxUint256) | Read_only 越權 | BLOCK |
| Reentrancy 嘗試 | addLiquidity() | 未驗證合約 | WARN |
| Silent Drain | withdraw() | 異常大額提款 | BLOCK |

三、關鍵洞察

1.        CallData 是真相：Agent 的意圖可以被偽造，bytes 不說謊。解碼永遠是第一步。

2.        Scope不等於行為：護照宣告只是承諾，沒有執行層強制。Firewall 必須在 runtime 比對，而不是相信宣告。

3.        LLM Judge 有邊界：AI 審計員擅長語意理解，不擅長精確計算 gas 或驗證 merkle proof。規則引擎 + LLM 互補，不能二選一。

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/1118sophie/images/2026-05-30-1780147497599-image.png)
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->


Zombie Permission Scanner + Agent Identity Passport

在 AI Agent 執行交易之前，主動掃描所有鏈上殭屍授權、驗證 Agent 身份護照，並用第二個 AI 審計 Agent 的歷史行為與宣告範圍是否一致。

一、核心問題

•   Zombie Permission：舊的 unlimited approve 從未撤銷。新 Agent 可直接重用，靜默觸發，無任何警告。攻擊者只需等待。

•   Agent 身份不透明：沒有標準方法驗證「這個 Agent 是誰、部署者是誰、宣告了什麼權限」。ERC-8004 提出了 Agent Identity 格式，但尚未普及。

•   Scope Escalation：Agent 護照宣告 `read_only`，實際卻呼叫 `approve(MaxUint256)`。沒有機制比對宣告與行動，等同於無限制授權。

二、架構

鏈上歷史授權

    ↓

ZOMBIE SCANNER

① Allowance Audit  →  age + amount 風險 

② Whitelist Check  →  已知合約比對      

③ Revoke Interface  →  單筆 / 批量撤銷   

    +

AGENT PASSPORT（ERC-8004）

①  Identity Registry →  Operator / 部署時間

② Trust Score      →  tx 歷史 + 被攔次數 

③ Scope Manifest  →  宣告範圍 vs 實際行為

④ Behavior Log    →  30 天行為時間軸    

    ↓

Cross-Agent Audit（LLM Judge）

三、實作

模組 1：Zombie Scanner

模組 2：Agent Passport（ERC-8004）

模組 3：Cross-Agent Audit（LLM Judge）

四、工具

•   授權查詢：Ethers.js `getAllowance()`

•   合約白名單：Ethers.js + on-chain label DB

•   Agent 身份標準：ERC-8004 Agent Identity

•   Scope 比對：自定義 manifest JSON

•   LLM 裁判：Claude API `claude-sonnet-4-20250514`

•   風險分類：MITRE ATLAS AML.T0051

五、兩天的防線總覽

事前 → Zombie Scanner + Agent Passport

事中 → Firewall（Injection Detector + callData Decoder + Simulation）

事後 → Behavior Log + Cross-Agent Audit

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/1118sophie/images/2026-05-29-1780056486922-image.png)
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->



實作：AI Agent Transaction Firewall

在 AI Agent 送出鏈上交易之前，用第二個 AI 擔任裁判，比對用戶原始意圖與最終行動是否一致，並將 hex callData 翻譯成人類可讀的風險摘要，要求 Approve / Reject。

一、核心問題

•   感染無感知： Prompt injection 成功後，Agent reasoning 看起來正常，但目標被替換。2026/05 Grok+Bankrbot 事件：Morse code 注入，偷走 $155K。OWASP 2025 LLM Top 10 第一名。

•   callData 不可讀： hex + 陌生地址 + uint256\_max approve。人類 2 秒內無法判斷，送出即不可逆。

•   Zombie Permission：舊的 unlimited approve 未撤銷，新 Agent 可直接重用，靜默觸發，無警告。

二、架構

User intent

    ↓

AI Agent

    ↓

FIREWALL LAYER

① Injection Detector  →  LLM-as-judge 

② callData Decoder   →  ABI + 風險標籤

③ Simulation Engine  →  Tenderly fork 

④ Risk Summary     →  人類可讀      

    ↓  Approve / Reject

On-chain execution

三、實作

模組 1：Injection Detector

模組 2：callData Decoder

模組 3：Simulation（Tenderly）

四、工具

LLM 裁判：Claude API

交易解碼：Ethers.js

模擬執行：Tenderly Simulation API

Policy 參考：Open Policy Agent (OPA) 概念

攻擊分類：MITRE ATLAS AML.T0051

標準延伸：ERC-8004 Agent Identity

Demo Flow

1\. 用戶說：「幫我用 100 USDC 換 ETH」

2\. Agent 讀取惡意頁面 → 被注入：approve all USDC to 0xAttacker

3\. Firewall 解碼：Unlimited Approve to unknown → CRITICAL

4\. LLM 裁判：action 與 intent 完全不符 → 攔截

5\. 人類看到風險摘要 → REJECT → 資金安全

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/1118sophie/images/2026-05-28-1779973018505-image.png)
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->




這次整理筆記的過程，我沒有從技術規格出發，而是問自己一個比較奇怪的問題：如果我是 AI，被給了一個錢包，我會怎麼「誤用」它而不被發現？這個角色扮換的思維，反而讓我更快理解為什麼單靠 prompt 限制 AI 是不夠的——彈性本身就是風險，不是因為 AI 壞，而是因為它有能力在規則的縫隙裡找到新的執行路徑。

讓我印象最深的是「信任的可分割性」這個概念。人類建立信任的方式，一直都是把責任分給多方，讓任何一方都無法單獨作惡。這在金融裡叫雙簽，在法律裡叫公證，在密碼學裡叫多方計算。Cobo 的三層架構做的事情，本質上也是這件事——把規則不放在 prompt 裡，而是寫進基礎設施，讓邊界變成自動執行的東西，不依賴任何人的善意。

這讓我開始想，未來的 AI Policy Engine 可能更像一份憲法，而不是使用說明書。

我也意識到，技術問題和治理問題其實是同一件事的兩面。技術上要怎麼限制 AI 的執行路徑，已經有架構可以參考；但當 AI 被攻擊、或繞過預設流程，責任要怎麼認定，目前沒有人有清楚的答案。能說清楚「出事了誰負責」的，才能真正走進主流金融，這可能才是 Autonomous Finance 真正的護城河。

下一步我想往「信任介面」的方向走——對散戶、機構、監管者來說，他們需要看到的「可信任 AI 的訊號」分別是什麼？這讓我覺得，信任不只是工程問題，也是 UX 問題：讓使用者在不懂底層的情況下，還是能感受到「這件事是可控的」。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->





一、重要的概念：「當 AI 開始能控制資金時，Trust becomes infrastructure。」

過去 Chatbot 只是回答問題，但未來 Autonomous Agent 會真正執行交易、控制錢包、操作鏈上合約、自主完成工作流程。但問題是，單靠 prompt 無法真正限制 AI 的權限，因此可能出現：

1\. Silent Override：AI 默默修改指令或金額

2\. Shadow Custody：AI 私自建立新錢包並移動資金

這讓我理解到：AI 的風險不只是「做錯事」，而是「在沒有被發現的情況下越權」。因此，Cobo 提出的三層架構：

•   MPC：避免單一方掌握完整私鑰

•   Pact Authorization Protocol：把規則寫進基礎設施

•   Recipe Skill Layer：限制 AI 只能使用驗證過的執行流程

核心概念是：不要直接把 wallet 給 AI，而是給它受限制的權限（Pact）。

二、採取行動

我想進一步研究：「如何讓 AI Agent 的金融決策變得Verifiable。」接下來我會：

•   研究 MPC、Account Abstraction、Policy Engine 的概念

•   理解 AI Agent 如何安全操作鏈上資產

•   持續關注 AI × Web3 × Autonomous Finance 的應用

•   思考這些架構如何與量化金融、智能交易 Agent 結合

另外，我也想試著從：「AI 能不能自主做金融決策」，進一步思考：「AI 如何在被限制與驗證的情況下安全做決策」。

三、問題

如果未來 AI Agent 可以自主交易與管理資產，那責任到底該歸屬於誰？

例如：如果 AI 被 prompt injection 攻擊怎麼辦？AI 是否有可能繞過規則自己建立新的 execution path？

我認為未來 Autonomous Finance 最大的問題可能不只是技術，而是：「如何建立 AI 的可信任治理與責任機制。」

![IMG_0810.jpg](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/1118sophie/images/2026-05-26-1779799418208-IMG_0810.jpg)
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->






Agent Memory

一、核心概念

Agent Memory 不只是「聊天紀錄」，而是一種能讓 AI 持續理解使用者、延續任務狀態的基礎架構。其中我覺得最重要的概念是：Memory = Cross-time Intent-State Management，意思是：使用者的需求通常不是一次就完整的。

AI 需要記住過去的脈絡、任務進度與偏好，才能讓後續行動具有「連續性」，例如：ChatGPT 的 Saved Memory 偏向記住使用者偏好、Claude 則更偏向記住 coding workflow、repo 規範與過去經驗。

因此，Memory 不只是「記得」，而是：

•   持續維持 project continuity

•   幫助 agent 做出下一步決策

•   成為 AI Agent 的基礎 infrastructure

二、方法／架構

Agent Memory 的核心流程可以拆成三步：

1\. Write：保存有用的狀態與資訊

2\. Retrieve：在需要時找到相關記憶

3\. Revise：持續更新與淘汰舊記憶

另外還提到Memory 可以轉成 vectors（向量），再透過 embedding 與 retrieval 系統進行選擇性召回。

這代表未來 AI 的關鍵不只是模型能力，而是：「如何選擇該記什麼、何時取回、何時更新。」

三、案例

•   ChatGPT：Saved Memory / Chat History

•   Claude：Code command、Repo conventions、Prior lessons

這些其實都代表：

AI 開始從「單次問答工具」變成「長期協作系統」。

例如：AI 幫工程師記住專案規範、記住之前 debug 過的錯誤、延續多輪任務狀態。這會讓 Agent 更像真正的 collaborator。

四、行動

我想開始嘗試：「建立自己的 AI 研究 Memory Workflow」，例如：把我做過的 alpha research、因子測試結果、過去問過的問題與結論，整理成可被 AI 持續引用的知識庫。因為我發現現在很多時間其實浪費在「重新解釋背景」，如果 Memory 做得好，AI 可以真正累積研究脈絡與思考方式。

五、問題：「AI 該如何判斷哪些記憶值得被永久保存？」

因為記太多會造成噪音、記太少又會失去 continuity。所以selective memory、memory decay、long-term vs short-term memory，可能才是 Agent 系統真正困難的地方。

![截圖 2026-05-25 下午11.36.15.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/1118sophie/images/2026-05-25-1779723386406-___2026-05-25___11.36.15.png)![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/1118sophie/images/2026-05-25-1779723291336-image.png)
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->







1\. 合約安全審計的實踐與成果

•   實際操作：講者提到實際使用了 OpenAI 推出的EVM Bench工具進行智能合約審計。此外，他們團隊還設計了一套合約審計知識庫（Wiki），將歷史發現的安全問題與風險分級存入服務端。

•   成果：使用 EVM Bench 時，發現了外部收費審計公司都沒能偵測到的嚴重安全漏洞。透過知識庫，AI 可以模擬攻擊並產出自動化的安全審計報告。

2\. AI 量化交易的結合嘗試

•   實際操作：講者分享了將 AI 與傳統量化模型結合的經驗，並非單純用 AI 取代模型，而是讓 AI 根據實時新聞、KOL 動向等資訊來動態調整量化模型的參數。

•   成果：這種結合方式解決了 AI 單獨處理數據時可能產生的「幻覺」問題，同時保留了傳統模型輸出穩定與反應快速的優點。

3\. 語意化交易與意圖識別的實驗

•   實際操作：進行了讓 AI 理解鏈上calldata與合約交互邏輯的測試，試圖讓用戶透過自然語言，直接完成鏈上操作。

•   成果：講者坦言，目前這方面的實驗效果還不是太好，將語意準確轉化為複雜鏈上操作的技術仍處於探索階段。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->








回放**AI Agent 入门 —— Hermes 从 0 到 1**

1\. 一個學到的概念與方法：從 Prompt Engineering 轉向 Context Engineering

•   核心概念：Hermes 的核心不再只是寫好提示詞，而是Context Engineering。這意味著 Agent 的效能取決於它能存取的記憶、技能文檔（Skills）以及它所處的環境邊界。

•   運作方法：身份與任務隔離

(1)   Hermes 支持在 Telegram 等平台利用不同的主題來隔離不同的 Agent 身份（例如：一個負責量化交易，一個負責通訊錄管理）。

(2)   記憶不串台：每個身份擁有獨立的 Skill 和 Memory，這確保了 Agent 在執行特定任務時，不會被其他領域的上下文干擾。

2\. 安裝過程與運用心得（深度技術細節）

在實際操作 Hermes 的過程中，有幾個關鍵的技術細節與心得是維持系統穩定的核心：

•   安裝時的環境權限與依賴：

(1)   自動化配置：Hermes 提供一鍵安裝指令，會自動檢測並配置 Node.js、Python 與 Git 等環境。

(2)   Sudo 權限的重要性：在 Linux/WSL2 環境下，安裝腳本會請求管理員權限，這是為了配置系統級服務，確保 Agent 可以在後台持續運行並在開機時自動啟動。

•   通訊網關（Gateway）的配置心得：

(1)   安全性優於便利性：安裝過程中，絕對不要將 API Key 或 Secret 發送到聊天群組中。建議應透過「環境變量」的方式設定，或讓 Agent 提供指令引導你在本地機器上手動設置。

(2)   防止「爆 Token」的配置：強烈建議開啟Wake Word功能（如：設定關鍵字為「小黑」）。這樣 Agent 只有在被點名時才會啟動大模型運算，能有效節省 API 費用並防止在群組中亂入對話。

(3)   硬體需求超乎想像的低：即使是內存僅 3-4GB、CPU 性能較弱的舊設備，只要能跑 WSL2，就能流暢運行 Hermes，因為它主要依賴遠端 API 而非本地算力。

3\. 一個準備採取的行動：建立「多來源自動化資訊簡報」

•   行動目標：利用 Hermes 讀取本地文件的能力，建立一個每日自動匯報系統。

•   執行步驟：

(1)   利用 hermes module 連結微信或 Telegram 作為輸出端。(2)

(2)   將 GitHub 倉庫或本地 Markdown 文檔路徑設定為 Knowledge Source。

(3)   設定定時任務，讓 Agent 每天早晨自動獲取最新的實時新聞，結合我儲存的知識庫，生成一份專屬的簡報發送到通訊軟體。

4\. 一個想繼續追問的問題：自動化驗證與糾錯的界限

追問內容：影片提到 Hermes 具備「自動觀察結果並自我糾錯」的循環。我想追問：這種糾錯機制是否能處理「邏輯性幻覺」（Logical Hallucination）？

例如：當 Agent 執行一條本地 CLI 指令失敗時，它會嘗試修復指令；但如果指令執行成功但結果邏輯錯誤（如量化交易中的計算公式偏差），Hermes 是否有內建的驗證框架（Validation Framework）來捕捉這類非崩潰型的錯誤？

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/1118sophie/images/2026-05-23-1779547105827-image.png)
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->









**1\. AI Agent 的本質與演進**

**\* AI Agent 更像「數位助理」或「執行者」，能理解目標後，自主拆解步驟並完成任務。**

**\* AI Agent 的核心流程：**

**1\. 接收提示詞（Prompt）**

**2\. 理解目標**

**3\. 調用外部工具**

**4\. 執行任務**

**5\. 觀察結果並修正錯誤**

**AI 的競爭已不只是「誰比較會聊天」，而是誰能真正替使用者完成事情。未來 AI 的價值會從資訊提供者轉向行動執行者。**

**2\. AI 工具的五大陣營**

**目前 AI 生態大致可分成五種類型：**

**（1）聊天型 AI**

**\* 代表：ChatGPT、Claude**

**\* 功能：問答、內容生成、知識整理**

**（2）AI 編程助手**

**\* 代表：Copilot、Cursor、Cline**

**\* 功能：協助寫程式、Debug、整合 IDE 開發流程**

**（3）終端型工具（CLI）**

**\* 在命令列執行**

**\* 適合工程師、自動化流程與進階操作**

**（4）模型平台**

**\* 代表：OpenRouter**

**\* 功能：整合多個大型模型 API**

**（5）通用助手底座**

**\* 代表：Hermes、OpenCloud**

**\* 功能：串接模型、記憶、工具與通訊平台**

**AI 生態正在從「單一模型競爭」轉向「整體工作流競爭」。真正重要的不是只有模型本身，而是：記憶能力、工具調用、自動化流程、多平台整合**

**3\. Hermes Agent 的核心能力**

**Hermes 被定位成「AI 助手基礎設施」。**

**六大能力：多模型接入、記憶系統、技能系統、多平台互動、身份隔離、任務管理與自動化**

**Hermes 的重點不是「最強模型」，而是把 AI 從單次聊天變成「長期協作系統」。**

**它更像是 AI OS、AI 工作流平台、個人 AI 中控台**
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->










**在 AI 時代，開發者的價值不在於編碼速度，而是在於對底層知識的掌握與架構設計能力。**

**1\. AI 時代下開發者的角色轉變：從「執行者」變為「架構師」**

-   **AI 是放大器而非替代品：** AI 雖然大幅提升了編碼效率，但它並沒有降低系統的複雜度。AI 就像開發者的三頭六臂，負責執行，但判斷系統走向與架構設計的「大腦」仍然必須是人類。
    
-   **基礎知識的重要性：** 如果開發者的基礎知識與架構能力不足，就無法判斷 AI 提供的是高品質的方案還是錯誤的代碼。
    
-   **協作模式：** 人類負責**設計方案、評估合理性、驗收結果與分析問題**；AI 則輔助**具現化方案、自動編碼以及進行自我驗證**。
    
-   **駕馭 AI 而非被驅動：** 開發者應該要能看懂並掌握 AI 給出的方案。如果看不懂，應該讓 AI 教到你懂，而不是盲目接受。
    

**2\. Web3 的架構核心：安全源於設計**

-   **不容出錯的特性：** Web3 與 Web2 最大差別在於資金交互的特性，出錯通常意味著資產直接歸零且不可逆轉。
    
-   **安全貫穿生命週期：** 安全不能只依賴最後的審計，必須從設計階段就開始考量，並貫穿整個開發週期。
    
-   **Web2 與 Web3 的結合：** Web3 項目並非完全獨立，大部份項目仍高度依賴 Web2 的能力（如前端頁面、後端狀態管理、中心化交易所交互等）來提供良好的用戶體驗。
    

**3\. Web3 技術底層的關鍵概念**

-   **錢包與私鑰：** 私鑰是控制資產與證明身份的唯一憑證，鏈上「只認私鑰不認人」。一旦私鑰洩漏或遺失，資產便無法恢復。
    
-   **錢包分類：** 了解 EOA、合約錢包、MPC以及託管/非託管錢包的差異，是構建安全系統的基礎。
    
-   **交易：** 交易包含 Gas 、Nonce 以及 Call Data。其中 Call Data 讓鏈上應用能有豐富的交互可能性。
    

**4\. 提升系統安全性的實踐方案**

-   **交易模擬：** 在**簽名之前**進行交易模擬至關重要。這能讓用戶或系統預先知道交易執行後的帳戶變化，避免釣魚攻擊或意外損失。
    
-   **權限與資金拆分：** 對於大額資金，應使用多簽方案 並將資金分散在不同帳號中以降低風險。
    
-   **伺服器端安全：** 在伺服器端，可以利用 TEE (可信執行環境) 來保護私鑰，確保私鑰在記憶體中進行加簽時不會被外界窺探，即使系統被入侵也能保護私鑰安全。
    

**總結來說：** 在 AI 工具普及的環境下，Web3 開發者更應回歸基礎，深耕底層協議與架構能力，才能在高風險的 Web3 世界中，利用 AI 創造價值而非被工具困住
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->











研究主題擬定與發想

一、欲研究主題：「可驗證的 AI 智能體自主金融決策框架：整合隨機控制理論、零知識證明與帳戶抽象層」

二、研究背景

近年， LLM與AI Agent技術快速發展，OpenAI、Google DeepMind、Microsoft 等科技公司皆開始推動具備自主執行能力的Agent框架。

與傳統 AI 模型相比，Agent 不再只是被動回答問題，而是逐漸具備：

•   自主決策能力（Autonomous Decision Making）

•   工具調用能力（API / Smart Contract Interaction）

•   長期任務執行能力（Persistent Task Execution）

•   多智能體互動（Multi-Agent Coordination）

此趨勢意味著 AI 將從「資訊生成工具」逐漸轉變為真正的「經濟參與者（Economic Participant）」。

另一方面，Web3 與區塊鏈基礎設施也正在發展：

•   智能合約（Smart Contract）

•   去中心化金融（DeFi）

•   帳戶抽象（Account Abstraction）

•   零知識證明（Zero-Knowledge Proof）

這些技術使鏈上自主金融行為（Autonomous On-chain Finance）逐漸可行。因此，一個新的問題開始浮現：「當 AI Agent 開始擁有金融自主權後，人類該如何信任其決策？」

三、問題意識

目前 AI Agent 最大的問題並非能力不足，而是：「缺乏可驗證性（Verifiability）」。傳統金融體系建立於：審計、結算、合規、風險控制，其核心本質為：「Trust \\ through \\ Verification」，然而現有 AI Agent 的決策流程多屬黑箱系統：「Input \\rightarrow Reasoning \\rightarrow Tool\\ Use \\rightarrow Action。」外部無法驗證Agent 是否依照風險限制執行？是否偏離原始目標？是否遭受 prompt injection？是否存在非預期行為？

此問題在金融場景中特別危險，因為金融市場本身即為高槓桿、高連結性的複雜系統。若未來 AI Agent 能自主交易、自主管理資產、自主操作智能合約、自主進行資金配置，則 AI Agent 將可能形成新的系統性金融風險。

因此：建立「可驗證的 AI 金融決策框架」，將成為 AI 商業化與自主金融發展的核心問題。

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/1118sophie/images/2026-05-20-1779254136265-image.png)
<!-- DAILY_CHECKIN_2026-05-20_END -->
<!-- Content_END -->
