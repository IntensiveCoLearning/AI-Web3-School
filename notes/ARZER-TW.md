---
timezone: UTC+8
---

# james_1022

**GitHub ID:** ARZER-TW

**Telegram:** @Lain_1022

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->
假日打卡
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->

假日請假
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->


## 2026-05-28

Week 2 Day 4。今天主題是 MCP(Model Context Protocol)跟 chain-aware context。

MCP 大家普遍講的是「把模型接工具標準化」——client 發現 server 暴露的 resources/tools/prompts,工具要有清楚 schema 說明叫什麼、何時用、收什麼參數、回什麼結果。這層抽象是對的,把碎片化的 tool 適配收斂成一個協議確實有價值。但我想戳一個 MCP 在 Web3 場景會被高估的地方:**MCP 解決的是「怎麼接」,不是「能不能信」。**

把這兩件事分清楚很重要。MCP 給你的是一個乾淨的 tool 入口:可描述、可發現、可限制。但「可限制」這個詞在 MCP 語境裡指的是 schema 層的限制——這個 tool 接受什麼參數、要不要授權。它本質上還是我前幾天說的 **soft constraint**:約束活在協議描述跟 client 的執行邏輯裡,靠的是大家照規矩走。一個 MCP server 宣稱自己「只讀」,這只是個_宣告_,不是個_保證_;真正 enforce「只讀」的,是底層那個系統有沒有在權限上真的不給寫的能力。所以在 Web3,MCP 可以當 agent 連 RPC、合約文件、區塊瀏覽器、開發工具的接口層,但它**不是錢包安全方案**。最終的帳戶權限、簽名確認、交易模擬、session key、審計日誌,還是得由 Web3 帳戶系統自己扛——MCP 不背這個鍋,也背不動。

更直接的講法:MCP 是 transport/discovery 層的標準化,authority 層它碰不到也不該碰。一個設計清楚的系統應該是分層的——MCP 負責「怎麼把工具描述給模型、怎麼把調用請求傳過去」,而「這個調用到底能不能執行」必須由一個獨立的、模型碰不到的 enforcement 層決定(在 Sui 就是 capability/object 權限,在 EVM 就是 smart contract wallet 的 validation)。把這兩層混在一起,或以為「我用了 MCP 所以工具調用就安全了」,是我覺得這波 agent infra 最容易踩的坑。

Chain-aware context 那塊我也想補一刀。大家強調 agent 不能猜自己在哪條鏈、要拿結構化的 chain id / RPC / block height / tx hash / 確認數,總結要引用這些可驗證資訊而不是只說「交易成功了」——這完全對,而且呼應我昨天講的 simulation 跟 ground truth。但我想往前推:chain-aware context 的真正價值不只是「給 agent 正確的輸入」,而是它讓 agent 的**每一句斷言都變得可稽核**。當 agent 說「你在主網、餘額 X、這筆 tx 確認了 Y 次」,每一項背後都該掛一個 citation 指向可驗證的鏈上來源。這樣一來,就算模型輸出不穩,人類(或另一個驗證元件)也能逐項對照真相。這跟前面 MCP 那條線其實是同一個收斂點:**讓 AI 只負責推理跟編排,把狀態、結算、enforcement 全留給可驗證的那一側。** AI 做建議,錢包做授權,合約做可驗證執行,監控記結果——這個分工不是為了好看,是因為每一層的信任假設根本不一樣。
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->



## 2026-05-27

Week 2 Day 3。今天圍繞 smart contract 互動路徑、agent workflow threat model、Neo-Cypherpunk。

Smart contract 那條鏈拆開看是:frontend → wallet request → tx → calldata → contract function → state change → event logs → indexer。多數人講到「agent 要解讀交易」就停在 ABI decode,但我覺得真正缺的那塊是 **simulation**。calldata 解出來只告訴你「這筆交易長這樣」,沒告訴你「這筆交易跑完之後狀態會變成怎樣」。沒有 simulation/dry-run 的結果,agent 看到的永遠是意圖層,不是後果層——而使用者真正在乎的、簽下去會發生什麼,只活在後果層。所以原則應該是:**agent 在沒拿到 simulation 結果之前不該對交易結果或安全性做任何 confident 解釋**。它可以說「這個 function 叫 swap」,但它不能說「你會拿到 X 顆 token」,除非那是模擬出來的、不是它腦補的。這跟前兩天那條「黑箱輸出不可信」的線是同一個原則:把可驗證的東西交給可驗證的元件,LLM 只做翻譯不做斷言。

Agent workflow 那五步循環(任務分解 → 工具選擇 → 執行 → 觀察 → 糾錯)我想補一個容易被忽略的點:**觀察跟糾錯之間需要 ground truth**。如果觀察階段拿到的是模型自己幻覺出來的「我以為我做完了」,糾錯就是在錯誤的世界模型上修正,越修越偏。對鏈上動作來說 ground truth 很乾淨——tx hash、state、event 都可驗,所以 Web3 場景反而是少數能給 agent loop 提供強力 ground truth 的環境。這某種程度上解釋了為什麼 AI × Web3 不只是兩個熱詞相加:**鏈上動作可驗證,是 agent 自我糾錯的天然錨點**。沒這個錨,五步循環就是五步漂移。

晚上 Neo-Cypherpunk 那場最有共鳴。Cypherpunk 我之前讀過不少——從 Chaum 的 mix network、Tim May 的 Crypto Anarchist Manifesto 到 Hughes 那句 "Cypherpunks write code"——那個時代的隱私是「技術精英全副武裝對抗國家」的姿態。Neo-Cypherpunk 把這件事重新定位成 **open、協作、可近用**:隱私不該是少數人的技術能力,而是普通使用者預設享有的權利。這個轉向我認同,但我想補一刀:對 builder 來說,這意味著隱私不能是 v2 才加的 feature,而必須是 **threat model 的預設前提**。產品設計第一天就該假設「使用者的所有資料都可能被觀察」,然後反推哪些資料根本不該被產品本身看到——這跟事後加密是兩種完全不同的東西。AI agent 場景尤其關鍵,因為 context window 就是個天然的隱私漏斗,使用者餵進去的東西不會自己消失。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->




水個打卡
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->





假日休息一下
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->






**观看回放 5.20｜Web3 运行原理**  
  
**笔记一：学到的核心概念——智能合约的“可升级性”底层逻辑** **智能合约的代码一旦部署到区块链上是不可篡改的**，这保证了规则的公开和执行的确定性。但为了修复 Bug 或扩展功能，开发者会**使用“代理合约（Proxy Contract）”的模式来间接实现升级**。代理合约的作用类似于一个“指针”，用户层面上始终只与这个代理合约进行交互，而代理合约会将具体的执行逻辑路由到背后的真实逻辑合约上。当需要升级时，开发者只需在链上部署一个新的逻辑合约，并将代理合约中的“指针”地址修改为新合约的地址，即可在用户无感的情况下完成业务逻辑的更换。

**笔记二：学到的关键机制——利用 Nonce 防止“重放攻击”** 在 Web3 发起一笔交易时，交易信息中除了执行内容、Gas 费和数字签名外，还包含一个**至关重要的参数：Nonce（序号）**。由于区块链交易会被广播到公开的网络中，如果不加防范，恶意者就可以抓取你的合法转账交易（比如你转给某人 10 U 的指令），并反复向网络发送这笔一模一样的交易，导致你的资金被多次重复扣除。**Nonce 就是为了防止这种重放攻击而设计的**，每当一笔交易成功执行后，该账户的 Nonce 值就会自动加一；如果区块链网络识别到已经被执行过的 Nonce 序号再次出现，就会直接将其拒绝。

**笔记三：准备采取的行动——交互 DeFi 协议前检查“时间锁（Time-lock）”** 既然许多智能合约可以通过代理模式进行升级，这就意味着控制合约的人或黑客有可能篡改业务逻辑并盗走资金。因此，在投入大量资金使用某个 DeFi 协议前，**我需要查验该协议的合约升级是否配备了“时间锁”机制**。带有时间锁的合约在提交升级指令后，不会立刻生效，而是会有一个缓冲期（例如 7 天）。这样一旦发生逻辑更改，社区和媒体都能及时发现，如果新逻辑存在作恶风险，我就能利用这段缓冲时间迅速撤出资金。

**笔记四：继续追问的问题——去中心化世界的公共品如何维持与治理？** Web3 消解了传统现实世界中的中心化机构和税收制度。但是，**像底层网络维护、公共软件（如以太坊各种语言版本的客户端）开发这些不直接产生暴利的公共基础设施，长期应该由谁来持续出资和开发？** 如果去中心化网络未来也演化出某种形式的“税收”（例如对部分交易费进行再分配），我们该如何在一个无主导机构的环境下，通过共识机制去实现公平且可信的资金分配？ 这是区块链在技术之外，必须依靠社会学和经济学来共同解决的关键问题。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->







學習了**Hermes Agent** 的入門概述  
  

## 核心定位

Hermes 是一個**自我改進的 AI Agent**。它與傳統無狀態 Agent 框架最大的差異在於：**閉合了學習循環**。傳統 Agent 執行完任務就遺忘，而 Hermes 會觀察自身表現、把可複用流程提取成技能、持久化知識，並隨時間加深對使用者的理解。它可運行在任何模型（透過 OpenRouter、NVIDIA NIM 等 25+ 提供商），並存在於 CLI、Telegram、Discord、Slack、WhatsApp、Signal 等任何平台。

## 關鍵特性

主打的 **40+ 內建工具**（終端、瀏覽器、檔案、網頁搜尋、圖像生成、任務委派）、**持久記憶**（多提供商記憶系統 + FTS5 跨會話搜尋）、**多平台網關**（單一進程服務 10+ 平台）、**7 種終端後端**（Local、Docker、SSH、Modal 等含無伺服器持久化方案）、**子 Agent 委派**、**Cron 排程**、**插件系統**與 **MCP 整合**。

## 自我改進循環（最關鍵的架構）

這套循環跨三個時間維度運作：

-   **會話內**：處理複雜任務時提取流程存成技能（`~/.hermes/skills/` 帶 YAML frontmatter 的 Markdown），立即注入系統提示詞讓 Agent 變聰明。
    
-   **跨會話**：記憶管理器在輪次前預取、輪次後同步；用 SQLite FTS5 搜尋過往對話；`USER.md` 持續累積使用者偏好。
    
-   **後台**：Agent 閒置超過閾值（預設 2 小時）且距上次整理超過一週時，**整理器（curator）** 會 fork 一個 AIAgent 來審查技能——可置頂、歸檔、整合，但**絕不自動刪除**（歸檔可復原），且使用輔助 client 以避免干擾主會話的提示詞快取。
    

## 值得注意的工程設計

**三層系統提示詞**（為了提示詞快取最佳化）：

-   **穩定層**：身份（SOUL.md）、工具指導、技能提示——每會話建一次，維持位元組級一致以保持快取熱度
    
-   **上下文層**：呼叫方的 system\_message + 工作目錄下的上下文檔（AGENTS.md 等）
    
-   **易變層**：記憶快照、USER.md、時間戳等——每輪重建、不快取
    

另外，**工具註冊與暴露是刻意分離的**：工具透過 `registry.register()` 自動發現，但只有出現在 `toolsets.py` 工具集中的工具才會真正暴露給 Agent。對話循環本身是**完全同步**的 while 迴圈，而自我改進機制（記憶同步、技能提取、整理器）都是**輪次後的鉤子**，絕不阻塞主迴圈。

## 安裝

Linux/macOS/WSL2 一行指令即可：

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

* * *

整體來看，Hermes 的賣點不是工具數量，而是那套**無人干預的閉合學習循環**——技能會被自動提取、改進、後台整理，配合持久記憶與可插拔上下文引擎，理論上越用越好。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->








打卡，基本上把第一週的內容都看完了。都是些較為基礎的內容。把任務一跟任務二完成了。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->









打卡，今天是共學第一天，差點忘記打卡，趕在截止時間前打個卡
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
