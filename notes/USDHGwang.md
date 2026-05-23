---
timezone: UTC+8
---

# USDHGwang

**GitHub ID:** USDHGwang

**Telegram:** @USDHG00

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->
# 跟 Claude 深挖 Agent 記憶架構

## **起點：一個看起來很無聊的問題**

今天從一個工程問題開始：[**claude.ai**](http://claude.ai) **那邊累積的對話和記憶，能不能搬到 Claude Code？**

表面答案：沒有一鍵遷移，要手動 export → 解析 → 寫進 local memory。

但實際拆開看，這背後是個更大的問題：**在多 agent 環境下（我同時用 Claude + Hermes + 偶爾 GPT），記憶應該怎麼設計？**

整天的討論其實在解這件事。記下幾個我覺得 community 也用得上的思考。

* * *

## **關鍵發現 1：「記憶」和「知識」根本是兩件事**

很多人（包括我之前）會把這兩個攪在一起。但攪在一起，**vault 會被污染、agent 啟動會被噪音拖累**。

|   | 知識 | 記憶 |
| --- | --- | --- |
| 是什麼 | 你想累積的、未來會去查的 asset | agent 啟動 brief、行為規則、user 是誰 |
| 誰寫 | 主要自己 + AI 草稿 review | 主要 AI 自動載入用 |
| 會變化嗎 | 會持續成長、refine | 相對靜態，偶爾調整 |
| 載入時機 | 需要時去查 | 每次 session 啟動自動載 |
| 舉例 | AIP 技術細節、某個人物資料、技術框架 | 「user 是 John」、「寫 vault 要保守」 |

實作上：**知識放 Obsidian vault**（Hermes / Claude / 未來自己都讀）；**記憶放 agent 私有區**（Claude Code 自己的 `MEMORY.md`、Hermes 自己的 `~/.hermes/memories/`）。

> 為什麼這個分開很重要：vault 是長期資產，被 agent 啟動設定混進去之後，graph view / 搜尋會被雜訊拖累，你打開 vault 看到的不再是「我累積的洞見」，而是「AI 設定檔」。

* * *

## **關鍵發現 2：用「conversation paradigm」重構 multi-agent 記憶**

多 agent 共享記憶有兩種思考方式：

**Store paradigm**：記憶是 database。要設 schema、namespace、權限、衝突解決。**這是主流做法，但對個人用戶過重。**

**Conversation paradigm**：記憶是「跨時間的對話 transcript」，每筆 = 某 speaker 在某時間說的一句話。

選 conversation paradigm 之後，原本要解的問題**自動消失**：

-   Namespace 衝突？→ Speaker 天然分隔，不存在
    
-   寫入權限？→ 任何人都可以「說話」
    
-   衝突解決？→ 兩個 speaker 對同件事有不同看法，不是 conflict，是 perspectives
    

剩下要解的只是 6 個 irreducible 問題：誰說的 / 何時 / 對誰 / 接續哪句 / 還相信嗎 / 怎麼引用。

**而這 6 個用 git 就解了一半**（git author = attribution、git timestamp = temporal、git parent commit = lineage）。

* * *

## **關鍵發現 3：「Lifecycle closure」— 長期工作最容易壞的地方**

這個是今天最有價值的洞察，是我自己之前沒意識到的：

**長期任務有自然的狀態轉換**（完成 / 取消 / 被吸收 / 暫停 / 換載體），但**轉換的那一刻沒有 explicit 收官儀式**，記憶就會被卡在「最後看到的狀態」，agent 帶著過時世界觀回答。

具體例子（我自己的）：

```
Harness Engineering（我的 Agent 領域主線）
```

`↓ 2026-04 構想 3-month plan（M1/M2/M3）`

`↓ 4-5 月「徹底轉為」0G APAC Hackathon 執行`

`↓ Hackathon 結束，並行 AI × Web3 課程`

`↓ 現在 → 開放式持續 build，無 endpoint`

`但中間轉換都沒被顯式記錄，所以 Claude 還以為「M1/M2/M3 plan 還在按表執行」`

**根因**：我們的工具（Notion、memory）對「**開始**」很友善（新建 page、寫 note），但對「**結束 / 轉換**」沒有任何系統 prompt。**開始有儀式、結束沒儀式 → 累積偏差。**

設計上應該做的：

-   偵測 transition 訊號（連續 N session 沒提 / deadline 過了 / 你開始談架構不同的相關東西）
    
-   主動 prompt 收官（「這要 close 嗎？演化 / 取代 / 暫停？」）
    
-   在 project memory 加 **Lifecycle Log** 區塊，記錄演化路徑
    

* * *

## **關鍵發現 4：寫進 memory 的 filter**

副產品但很重要：**「這在 3 個月後還會 true / relevant 嗎？」**

不過這個 filter 就不寫進 memory。常見的誤判：

-   「這很**緊急**」 → 緊急不等於該入 memory，緊急該在 Notion / calendar
    
-   「這很**重要**」 → 重要但變動快的也不該入 memory
    
-   「**怕忘記**」 → memory 不是備忘錄，是 agent 啟動 brief
    

該入 memory：穩定 / 長壽 / 永久教訓  
不該入：deadline、進度狀態、推測性未來聯絡、任何「截至今天」snapshot

* * *

## **工具盤點（給有相同問題的人參考）**

主流 agent memory infra：

| 方案 | 公信力 | 適用 |
| --- | --- | --- |
| OpenMemory MCP (mem0.ai) | ⭐⭐⭐⭐⭐ | 明確為「Claude + Cursor + 其他 MCP client 共享記憶」設計，local-first |
| Mem0 | ⭐⭐⭐⭐⭐ | 41K stars、AWS Agent SDK 獨家、freemium |
| Zep | ⭐⭐⭐⭐ | LongMemEval 第一（63.8%），但記憶體很重 |
| Letta (MemGPT) | ⭐⭐⭐⭐ | 長期跑的 agent 強，是 runtime |
| Honcho | ⭐⭐⭐⭐ | Hermes 內建 provider，peer model 細緻，但對外封閉 |
| ByteRover | ⭐⭐⭐ | Hermes provider，記憶寫成 markdown 檔案，跟 Obsidian 哲學一致 |

但**全都不能直接套用我的情況**——我的 stack 是 Obsidian vault (`D:\dev\knowledge-base`) + Hermes + Claude Code 三方，每個方案都會犧牲一塊。

* * *

## **工作哲學的對應（為什麼不能直接套主流方案）**

> **「主流解法是泛式的，每個人情況不同能碰撞出更多的新火花」**

這句是今天歸納出來的個人姿態，但放更廣看是個普世原則：

-   主流方案被設計來覆蓋 80% 的 case → 設計 trade-off 對你的 20% 不一定 align
    
-   自己的工作流（vault 結構 / 對 reflection 的潔癖 / 對 transient 不入 memory 的判斷）有獨特性
    
-   **碰撞 > 套用**：把主流方案當組件，跟自己情況碰撞，做 bespoke 設計
    

對應到實作上，我們今天討論的解 — **Cross-Pointer Pattern**：

```
Claude 的 MEMORY.md                  Hermes 的 MEMORY.md
```

`───────────── ─────────────`

`第一行：對方記憶在 ←→ 互指 ←→ 第一行：對方記憶在`

`~/.hermes/memories/MEMORY.md C:\...\.claude\...\memory\MEMORY.md`

`── 自己的內容 ── ── 自己的內容 ──`

純 filesystem，零新依賴。Namespace 完全分開（互改不到對方），protocol 是「啟動時也讀對方檔」。

* * *

## **13 條 effects 清單（給設計 personal agent system 的人參考）**

從今天對話 distill 出來的：建構個人 agent 系統時可以拿來檢視的需求 checklist。

| # | 需求 |
| --- | --- |
| 1 | Passive：啟動時互帶對方 agent 的 brief |
| 2 | Active：mid-session 主動查對方 memory |
| 3 | Agent 能 read vault 找答案（vault 不是只寫不讀） |
| 4 | Staleness detection（舊紀錄跟新決策衝突要 surface） |
| 5 | WIP 透明度（agent 知道對方剛碰過什麼） |
| 6 | 跨 agent task Kanban（看情境） |
| 7 | 抓逃避 pattern 視覺化 |
| 8a | Lifecycle closure（轉換要顯式收官） |
| 8b | Timeline coherence（敘事線可追溯） |
| 9 | 跨 session self-correction |
| 10 | 外部 AI 建議形式化緩衝 |
| 11 | Reflections（user 私有聲音）隔離保護 |
| 12 | “Still true in 3 months” 寫入篩子 |
| 13 | Vault 結構優化 |

實際做下來會發現很多需求是耦合的（#3 跟 #9 強耦合、#5 是 #6 的前置、#8a + #8b 一起做才有意義）。

* * *

## **後設觀察：這次共學的真實價值**

今天最大的價值**不是任何單一結論**，是過程中 Claude 跟我互相 push back 形成的幾個 reframe：

1.  我說「能不能搬資料」→ 被 reframe 成「記憶架構該怎麼設計」
    
2.  我說「分開不通」→ 被 reframe 成「namespace 分但 protocol 通」是真實需求
    
3.  我說「歸納循環」→ 被我自己 reframe 成「lifecycle closure 才是更前置的問題」
    
4.  我以為 3-month plan 還在執行 → 對話中發現它早就被現實取代了，但 memory 沒更新
    

**最後一點很諷刺**：我們花了一整天討論「怎麼讓 memory 跟現實對齊」，而 trigger 點是發現 memory 本身就跟現實脫節。

* * *

## **領域定位反思**

順手把 Harness Engineering / Agent 領域 的定位寫清楚：**沒有結束點，是開放式持續承諾**。

不是「3-month 個人計畫」、不是 hackathon、不是某個 deliverable。

而是這個領域我會持續 build、持續學。**自我定位：Agent 領域前沿學習者 + builder**。

這個定位不是自我抬舉式宣稱——是定下「願意投時間在邊界探索、不只用主流現成解」的個人 commitment。

* * *

## **明天繼續**

13 條 effects 今天 address 了 #8a 框架、#8b（Harness 套用）、#12（已寫進 filter rule），明天高優先：

-   **#3 Agent 讀 vault** — 我點出的最大破口（vault 一直累積卻沒被 agent 工作時用到）
    
-   **#8a 寫成 feedback rule** — 讓未來 agent 偵測到任務轉換時自動 trigger 收官
    

* * *

## **給其他在搭個人 agent 系統的人：3 個建議**

1.  **先把「記憶」跟「知識」分開**，不要用同一個 vault 裝。
    
2.  **lifecycle log** 比進度表更重要——進度會 stale，演化軌跡才是長期 asset。
    
3.  **memory 寫入前過一次「3 個月後還 true 嗎」的篩子**，能擋掉 80% 的 transient 污染。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->


今天做了什麼：

1\. Learning Agent 初始化

• 讀了 AI × Web3 School 的啟動 Prompt 和 Handbook

• WSL 環境下搞 GitHub auth，gh auth login --web 卡關，最後走 Dashboard secrets + HTTPS token 方案

• 補完 learning repo 目錄結構

2\. Kanban & Dashboard 研究

• 查 Nous Research 的 Kanban / Dashboard 架構，理解 orchestrator → worker 的任務分解模式

• 對比 Kanban 和我之前用的 delegate\_task 機制

3\. Hermes Dashboard 配置

• 在 Dashboard 設定 GitHub token，發現 secrets 注入需要 session 重啟才生效

────────────────────────────────────

反思：

今天一大半時間花在 auth 上面。一個 gh auth login 在 WSL 上就撞了三次牆 — apt 版太舊缺 flag、web flow沒瀏覽器走不通、token-based 又被 read:org 卡。最後繞了一大圈才發現最簡單的方案就是 git 原生的 credential.helperstore。

這件事讓我想了兩件事：

第一，工具鏈摩擦是真實成本。我自認對 terminal 算熟了，但 auth這種「理應五分鐘搞定」的事還是吃掉了一小時。如果是剛入門的人，可能就直接卡死放棄了。這也解釋了為什麼好的 LearningAgent 不該只做資訊搬運 — 它應該能預判環境坑、主動給繞路方案，而不是反覆撞牆。

第二，Kanban 研究跟今天這整件事其實有關聯。我研究 Kanban 的初衷是看 multi-agent 怎麼分工，但過程中踩到的 auth坑讓我想：如果一個 orchestrator agent 把 auth 任務派給 worker，worker 在 WSL 環境撞同樣的牆怎麼辦？Kanban的文檔裡好像沒有提到 fallback / environment adaptation 這層。這反而成了我接下來可以深挖的方向：agent任務分解時，要不要預留一個 "環境適應層"（probe → adapt → execute）？

明天計畫：

• 繼續 Kanban，實際跑一次 orchestrator → worker 的任務分解

• 試著設計一個帶 environment probe 的 task template

• WCB 平台任務跟進
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->



今天做了什麼

發布 obsidian-knowledge-vault

過去一週我在設自己的 vault（擺 D 槽、修 ACL 權限、裝 Obsidian Git plugin、寫 operating guide），過程中跟 Claude和 Hermes 來回討論讀寫權限的邊界該畫在哪。最後定了三個關鍵規則：reflections 資料夾 AI 永不寫預設不讀、agents引用舊筆記要帶時間戳視為歷史記錄而非現在事實、AI 寫進 vault 的檔案 frontmatter 要標 status: ai-generated +created-by。

然後我想：這套東西如果是其他人來用，他們的環境不同（OS、agent、偏好），不可能直接複製我的setup。所以我把整個設計打包成一個公開 repo，核心是一個 AI\_ONBOARDING\_[PROMPT.md](http://PROMPT.md) — 任何人都可以把整包 repo丟給自己的 AI agent，讓 AI 自己去問使用者的環境、確認對方要採納哪些設計決定（還是要改掉）、然後生成客製化的 setup指令。不是給人看的 tutorial，是給 AI 讀的 prompt。

README 也寫了我 setup 時踩的坑：Windows D 槽 ACL 權限（File Explorer + UAC elevation 會讓資料夾被 Administrator擁有、非 admin 寫不進去 → icacls 解）、agent 更新後 stale state（Hermes auto-update 後回報 connection error 但API key 跟 provider 都正常 → 強制 clean restart）、decision log 紀律問題（覺得「對話已經記錄了就不寫 vault」→三天後要從 chat history 撈回來後悔沒寫）。

repo 7 個 commit，今天從空目錄推到完整 README + prompt + annotated operating guide example。

課程 + AIP 架構串聯

今天的課讓我把 AIP Protocol（on-chain identity）跟 AIP SafeHarness（off-chain agentloop）從兩個獨立專案串成一條完整 pipeline：user intent → agent loop → tool calling → HITL checkpoint → 0G storage → AIP on-chain tx。solo 做這條路，但確認方向踩在 agent identity / agent safety 的轉折點上。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->




\## 今天做了什麼

為 cohort 接下來 12 週搭建了一套個人知識管理系統。具體做了：

\- 用 Obsidian + GitHub 建了 local-first 的 vault（純 markdown、可長期保存、不綁工具）

\- 跟我已經在用的 Hermes Agent 接通，讓 agent 可以幫我整理對話、課堂內容、跟 builder roadmap 的連結

\- 寫了一份 operating guide 給 agent 看，明確界定哪些區域 agent 可以寫、哪些是我自己的思考空間

整套系統花了大概一天，但接下來 12 週這套東西就是我累積的基礎設施。

\## 為什麼花這個力氣

過去半年我在做 agent infrastructure — 一個叫 Harness 的 agent 框架 + 一個 agent identity 協議 AIP（已部署 0G 主網）。

踩過一個坑是「跟 AI 高頻互動會讓自己的思考揮發在對話裡」— 三個月後忘了當初為什麼做某個決定、AIP 為什麼長成現在這樣。

這次 cohort 開始前想做的事很簡單：

**讓接下來上的課、踩的坑、想到的東西，都有一個地方累積，而不是散在對話 log 裡。**

\## 今天課的反思 — 講師留的四個思考題

這四題剛好都跟我正在做的 agent infrastructure 方向直接連。

我作為 builder 的 partial thinking：

\### Q1. 资产自托管：如何提高安全性、降低管理私钥的复杂度?

私鑰管理是我做 AIP 一直在 wrestle 的問題 — agent 如果要有自己的 identity 跟簽章能力，

不可能讓 end user 每次手動處理。

目前 PoS / staking 這類機制是我看到的其中一個方向。

但這題我自己還沒有 clear take，繼續想。

\### Q2. 没有中心化机构/税收时,公共基础设施谁来维护？

我看到比較有戲的方向是 PoS 這類 protocol-level mechanism —

用 staking 把參與者跟基礎設施 align，

比「中心化稅收 + 再分配」的治理 overhead 低。

\### Q3 & Q4 — 治理有害信息 / 公平分配（同一個 framing）

這兩題我用同一個視角看：\*\*本質都是規則設計問題\*\*，不是治理介入問題。

我的 thesis 是：

\- **終局**：規則本身可以演化，agent 在裡面執行 + 維護規則。HITL 不是 permanent necessity，是過渡。

\- **前提**：agent 接管治理角色的前提是「初始中立、無偏差」。

\- **現實**：這個前提目前不成立 — LLM 訓練資料本身有 bias、各家 RLHF 之後 priors 不同、「中立」這個概念本身就是 contested。

\- **所以**：\*\*過渡期 HITL 必要\*\*。但 HITL 是 transitional，不是永久角色 — 等 agent 中立性問題真的可解（不知道何時），HITL 就該交棒。

這個 thesis 跟我 Harness 框架的 HITL 模組設計直接相關 —

HITL 模組要設計成 **「可被替代的層」**，不是 hardcode 必要的層。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->






今天的主題是 Hermes Agent 安裝。

因為看到直播裡很多夥伴卡在環境設定，就順手做了一份 Windows WSL2 + macOS 的完整安裝教程，在課程進行中同步解答問題。

課堂上也有聊到 harness engineering 的概念。我的理解是：LLM 是一批能力很強的馬，但沒有東西約束，能力再強也無法為你所用。Harness engineering 的框架相當於韁繩——讓馬發揮出該有的實力，真正為你所用。Hermes Agent 就是一個把這套框架做得很完整的實作。

踩過的坑（給還在卡關的夥伴）：

-   Ubuntu apt 預設的 Node.js 版本太舊，要改用 NodeSource 20.x
    
-   Discord Bot 需要手動開 Send Messages + Read Message History 權限
    
-   `hermes --version` 輸出的版本號會跟教程不一樣，不代表裝錯了
    

教程已經開源：[github.com/USDHGwang/hermes-install-guide](https://github.com/USDHGwang/hermes-install-guide)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->







### 過去的痛點：自學的局限

-   在參加這次課程之前，我主要是靠**盲目自學**。
    
-   雖然累積了一些知識點，但因為缺乏**系統性的引導**，腦中的知識體系非常零散，點與點之間無法有效串聯，常有「知其然不知其所以然」的無力感。
    

### 核心轉折：深度講授帶來的系統串聯

-   **內容極具深度**：TC 老師的講課切入點很深，不是單純流於表面的理論灌輸。
    
-   **碎片知識的重組**：老師的框架成功把我過去自學所累積的、那些零零散散的知識點全部**拼湊並串聯**起來，終於在腦海中建立起一套完整的知識體系。
    

### 實戰收穫：課後問答的落地價值

-   **拒絕空談理論**：這門課最精華的部分之一在於課後問答。老師不講官話或不切實際的理論。
    
-   **業界一線視角**：所有回覆全部直擊痛點，完全是站在**現今業界非常實際的落地角度**去拆解與解答，讓人學到真正能在職場或實際專案中應用的實戰經驗。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
