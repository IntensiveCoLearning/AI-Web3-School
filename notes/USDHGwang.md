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
# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->
\# AI x Web3 School - Day 1 進度

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
