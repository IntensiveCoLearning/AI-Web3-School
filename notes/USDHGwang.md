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
# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->
# 實際跑一條 fan-out / fan-in 的多 agent 流程，學到的東西

延續前幾天玩 agent harness 的紀錄。今天主要在搞「多 agent 怎麼協作」——不是並排各做各的，而是真的串成一條有依賴關係的流程。

## **1\. 並行很容易，協作才是重點**

一開始我以為「多 agent」就是開好幾個同時跑。實際做才發現，純並行（各做各的、互不相干）沒什麼了不起——難的是讓多個 agent 的產出**匯流成一件事**。

今天跑的結構：三個 worker **並行**處理三份不同輸入（fan-out）；第四個 agent **等三個都完成後**，把產出彙整成一份（fan-in）。「等三個都完成才啟動」是關鍵，而且不是我手動盯著按的，是系統自己處理。

## **2\. DAG 依賴：把「等待」變成宣告，而不是流程控制**

第四個任務在建立時就宣告「我的 parent 是這三個」。它會自動卡在 todo，**不被調度器認領**，直到三個 parent 全完成才自動升級 → 被認領 → 跑。

漂亮的地方：**依賴是用「聲明」表達，不是用「程式流程」控制**。我不用寫「if A and B and C done then run D」，只要把依賴關係講清楚（一個 DAG），剩下調度系統自己算。從 harness engineering 看，這是把「編排邏輯」從使用者手上接走、做進基礎設施——使用者只描述「要什麼」，不管「怎麼協調」。

## **3\. 持久化任務板讓多 agent 變得可觀測**

整個流程跑在 SQLite-backed 任務看板上。狀態變化、認領、心跳、完成摘要全留在 DB。意外的好處：**整個多 agent 系統是可觀測的**——隨時能查每個 worker 在哪個狀態、哪個 pid、有沒有報錯。多 agent 最怕「背景一堆東西在跑但不知道發生什麼」，把狀態落進持久 store 等於天然有 audit trail + debug 入口。越做越覺得：**agent 系統的工程，一大半是「讓不可見的東西變可見」**。

## **4\. 心跳與 reclaim：長任務的容錯**

worker 跑長任務要定時送心跳，超時沒心跳就被判掛、收回重派（reclaim）。這是分散式系統老觀念（lease / liveness），但在 agent 場景特別有意義——agent 任務常慢又不穩，沒這層容錯，一個 worker 卡死整條依賴鏈就卡住。

## **收斂**

最大體感：**多 agent 的價值不在「數量」，在「編排」**。好的多 agent harness 幫你做掉三件難事——依賴管理（DAG 宣告式）、自動調度、可觀測+容錯。模型一個都沒變，變強的是外面那層協調基礎設施。又一次印證主線：agent 的工程，主要在 harness。
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->

# 我讓一個 AI agent 整夜把我自己的 AIP 拆開重做,踩到的幾件事

這兩天的作業是把 AIP 那句核心主張 ——「**宣告 = 執行**(declarations match execution)」—— 真的做成可執行、擋得住攻擊的東西。我沒自己埋頭寫,而是讓一個 AI agent 整夜在一份 sandbox 副本上動手(原 repo 沒碰、沒 push),而且關鍵在:**每做一版,我就叫另一個獨立的 AI 子代理當「攻擊者」去對抗式審查它**,寫 probe 測試把它打穿,再補。記一下跟我原本直覺不一樣的東西。

## **1\. 先證明缺口,而不是先相信宣稱**

第一件事是抓 ground truth。AIP 對外講 "declarations match execution",但我讓 agent 實讀出貨的 demo 程式後發現:鏈下其實是把 agent 的意圖雜湊成一個**不透明的 32-byte hash** 丟上鏈,而鏈上 hook 收到後解出來是**空陣列**,真正的 action 還是 mock。也就是說那筆「AIP 保護的交易」實際上**什麼都沒檢查**。重點是——這不是我嘴上講,是用一個可執行的 Foundry 測試把它證出來的。先有可執行證據,再談修。

## **2\. 一版一版做,每版都被 AI 對抗式打穿一次**

接著是迭代。我刻意不讓「寫的人」自己 review,而是每完成一版,**開一個全新的 AI 子代理,假設它是攻擊者,去寫 probe 測試打穿**。結果七版裡每一版都被打穿一個最關鍵的洞,下一版補掉:

-   綁了「宣告的清單」→ 但沒人簽,等於循環論證
    
-   加 EIP-712 簽章 → 但 hook 管不到 account 實際執行什麼(綁定只是「建議」)
    
-   改成合約自己執行 → 但它一旦持有資金,**留下的 ERC-20 授權**就能被直接搬走
    
-   授權改成「用完即撤」+ 防重入 → 但只要簽錯一次,流出無上限
    
-   加上「每種 token 流出上限」→ 但這個清單是**簽名者自己列的**,沒列到的 token / ETH 照樣全漏
    

## **3\. 最大的一課:簽章 bound 不住一個會花錢的 agent**

七輪打下來,收斂到一個我一開始沒想到的結論:

> **簽章只能認證「誰批准了、宣告了什麼」。它 bound 不住「實際執行了什麼、流出了多少」。**

一個持有資金、又能呼叫任意合約的 executor,你給它再完美的簽章、再嚴的 commitment,只要它能 call 到一個惡意目標,錢就出得去。真正能限制損失的,是**把它能呼叫/授權的對象限制在一份「被審核過的白名單」**。

這直接改寫了我對 registry 的理解:它的價值不在「黑名單擋壞地址」,而在「**白名單只放可信的執行目標**」。而這恰好就是 ERC-8004 那個還在演進的 **Validation registry** 的定位 —— AIP 真正該卡的位置是這層,不是去跟 x402 / AP2 搶支付軌。

## **4\. 方法論的一課:讓 AI 打穿 AI,但每個結論都要可執行證據**

用「對抗式 AI 子審查」去打 AI 自己寫的合約,比我自己 code review 強得多 —— 因為它**真的寫 probe 去打穿**,而不是「看起來對就過」。它甚至自己寫了 11 個拋棄式測試實證、跑完再刪掉。

但前提跟我上一篇 Hermes 筆記那條完全一樣:**AI 會很自信地給你結論**,所以我每個 finding 都要求它用可執行測試證明,不接受嘴砲。最後落地的是 67 個離線測試 + 2 個 fuzz 不變量(各 256 runs)+ 真鏈 anvil 跑通一筆完整 swap + 對**真實 mainnet ETH/USDC 池** fork 驗過門檻邏輯。沒有「terminal 顯示成功」就當完成這種事。

## **收斂**

我原本以為這題的難點在「怎麼把 intent 綁好」,做完才發現難點在「**怎麼 bound 執行**」。一句話:**intent integrity = (認證過的 intent) ×(有界且受審的執行),缺一不可。** 大家盯著怎麼簽、怎麼證明意圖,但會花錢的 agent 真正危險的地方,是它執行時能碰到誰。

## **下一步**

把這條接回 SafeHarness 的 HITL —— 人在錢包簽一個 EIP-712 intent(已驗過 MetaMask 的 `signTypedData_v4` 算出來的 digest 跟合約逐位元組相同),鏈上 executor 強制執行;「自然語意 plan → canonical intent」那條我也跑通了。剩下要定的是產品形態:自執行 executor(我就是 account)vs 掛在第三方帳戶上的 ERC-7579 hook(那樣綁定只是建議)。
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->


# **把一個 self-hosted agent harness 跑起來，踩到的幾件事**

這幾天在折騰 Hermes Agent（Nous Research 的自架 agent 平台），不是當聊天框用，而是真的拿它接幾條 workflow：把報告萃取成知識圖、排程做新聞摘要、用 Kanban 跑多 agent 並行。記一下實際踩出來、跟「官網說法」不太一樣的東西。

## **1\. harness ≠ model**

最反直覺的一點：我這台跑的根本不是 Hermes 自家的模型，是 DeepSeek V4 Flash（透過 NVIDIA 的 API）。也就是說，這套東西的價值不在模型，在**外面那層 harness**——人格（SOUL）、跨 session 的記憶檔、skills、cron、多 agent 調度。模型是可抽換的零件。

這讓我重新理解 agent 這個詞：大家盯著模型多聰明，但真正決定一個 agent 好不好用的，是它周邊那層通常很無聊的鷹架。

## **2\. 記憶是「你看得到、改得到的檔」**

它的記憶不是黑箱。是硬碟上幾個 markdown：人格一個檔、使用者輪廓一個檔、長期記憶一個檔，啟動時載進 context。跟一般聊天工具那種「它好像記得你、但你看不到也搬不走」的記憶完全不同——這裡你能打開、能編輯、能版控。對「要長期累積、又不想被綁死在某平台」的人來說，這個差別很關鍵。

## **3\. 今天最大的一課：可靠性是 prompt 精準度決定的，不是模型決定的**

做新聞摘要時撞到最有意思的事。

第一版 prompt 我寫得很鬆——「整理昨天的 AI 新技術跟新聞」。結果它**編了一整批假新聞**（什麼某大廠投資數十億、某模型發佈），連結全是 404，而且它還自己標註「這些查不到、視為不可靠」。更糟的是，它「採用」的那幾條看似從 API 來的連結，ID 是乾淨連號（…000、…001、…002）——一看就是編的。

第二版我把 prompt 收死：強制先呼叫 API、把原始回傳印出來、**連結只准用 API 回傳的真實 ID、API 裡沒有的一律不准寫、寧可少寫也不准補**。結果就乾淨了，連結是真的、點得開、ID 雜亂得像真的。

同一個任務、同一個模型，差別只在 prompt 的 grounding。結論很明確：**用這類工具的核心技能，其實是 prompt 跟 grounding 的紀律**，不是換更強的模型。開放式問法等於請模型用幻覺填空。

## **4\. 「會自我成長」的官方說法，實際是人機協作**

官網主打 self-improving、會自動從經驗生成 skill。實際問下來：它不會靜默自動建 skill，是**做完任務主動問你「要不要存成 skill」、你點頭才建**。所以與其說「自動成長」，不如說「human-in-the-loop 的能力沉澱」。這其實更誠實也更可控，只是跟行銷話術有落差。

## **5\. 一堆營運層的摩擦（這才是 harness engineering 的本體）**

-   **工具批准門檻**：terminal 指令預設要人工批准。在背景/排程任務裡沒人按，它就卡在 pending、一直重試。但 execute\_code（跑 Python）是自動放行的——所以實務上要把任務設計成走自動放行的那條路。這種「哪個工具要批准」的細節，直接決定自動化跑不跑得起來。
    
-   **慢而且不可預測**：每次 API call 帶約十萬 token 的 context、延遲幾十秒，一個任務動輒 3～15 分鐘，連很小的任務也是。同一件事這次 3 分、下次 15 分。這逼著你重新設計 UX——不能假設「現場即時跑完」，要設計成非同步、預先跑好。
    
-   這兩點加起來讓我體會：agent 系統的難處不在「能不能做」，在「可不可靠、可不可預測」。
    

## **6\. 多 agent 調度（Kanban）**

它的多 agent 是一個 SQLite-backed 的看板：每個看板一個 db，任務走狀態機（待办 → 就绪 → 进行中 → 完成，卡住就 blocked 等人）。dispatcher 每個 tick 把 ready 的卡各 spawn 一個 worker，沒設並發上限 = 預設就能並行。

踩到一個坑：worker 的 workspace 預設是隔離的暫存目錄，這樣它讀不到也寫不到你真正的資料夾——要明確指定成共享目錄（dir:絕對路徑）才行。又是一個「不講你不會知道、但會讓你卡很久」的細節。

## **收斂**

跑下來最大的體感：**一個 agent harness，八成是在處理無聊但關鍵的鷹架**——記憶怎麼存、輸出怎麼 grounding、哪些工具要批准、任務怎麼排程、多 agent 怎麼協調。模型是可換的；前沿的難題是可靠性跟可預測性，不是模型夠不夠聰明。

下一步想試的：既然 harness 是 model-agnostic 又支援 MCP，理論上可以把另一個專長不同的 agent 當工具編排進來。這條還沒跑通，之後再記。
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->



**\## 今天涵蓋**

1. **Week 2 Module A** —— AI × Web3 問題地圖(六方向),選 **Wallet × Privacy 交集** 當 Week 2 主線。

2. **Week 2 Module B** —— Agent payment / commerce flow 設計,場景: DEX execution agent;比較 x402 vs ERC-8004,結論「兩者 + 執行 integrity 三件套缺一不可」。

**\## 選 Wallet × Privacy 當主線的理由**

承接昨天 NeoCypherPunk 演講萃出的 conviction —— 我自己在做的 AIP 目前只解 integrity(agent 真的執行用戶授權的那筆,中間沒被偷改),**\*\*這條只解一半\*\***。Agent 在鏈上行動,intent 被 mempool 看到會被搶在前面交易,執行歷史被看到會建出行為指紋。**\*\*privacy + integrity 缺一,agent 都不可用\*\***。

→ Week 2 主線從「AIP 是 integrity 工具」改成「integrity + privacy 雙保證 + 支援多 privacy/speed profile 共存的設計」。

**\## 今天寫筆記過程的自我校正**

寫 Module A 時我一度想畫「加 privacy 不能拖慢 interaction speed」當硬紅線。寫到一半發現 —— 這就是我昨天批評 NeoCypherPunk 不畫紅線的鏡像錯誤,只是方向相反:從「隱私要徹底」翻成「速度要徹底」,本質一樣絕對主義。

改成 trade-off framing:privacy 優先序高,但每個 use case speed budget 不同,選技術路線時動態權衡。

這個自我校正比 Module 內容本身更值得記下來。

**\## 開放問題**

\- AIP × privacy 候選技術路線(stealth address / private RPC / TEE / encrypted mempool / ZK / commit-reveal)哪條先做 PoC?需排序。

\- 同一個 AIP framework 支援多 privacy profile 時,module 邊界怎麼設計才不會 explode complexity?

**\## 後續行動**

\- 列 privacy primitive × AIP atomic intra-tx 相容性 matrix(部分已產於 Module A,待補實測數據)

\- Week 2 主線拆解 + proposal 圍繞 Privacy-aware AIP module 設計推進
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->




\---

date: 2026-05-27

event: Web3 × AI 學院 — 來賓演講

speaker: Web3 Privacy Now (NeoCypherPunk)

submitter: John (USDHG)

\---

\# 來賓演講筆記 — Web3 Privacy Now / NeoCypherPunk

\## 講座核心

Web3 Privacy Now 是非營利組織,把「社會主義者 + 自由科技人」連結在隱私議題上。三年從小型研究做到有影響力,核心產出:研究 / 教育 / 活動,有 Hackathon Pack 教育包。

NeoCypherPunk 由 Rose O'Leary (Dark5) 起,Paul Allen Ellis 發展。是對 Eric Hughes 1993 _Cypherpunk Manifesto_ 的當代重寫:把隱私從「專家小圈」擴成「所有人都能參與」的運動;不極端、不要求完全離開大公司;互助 > 競爭;把 Ethereum 拉回「世界電腦」的原意。態度從 90 年代的 Gloom and Doom 換成 Joycentric / Fused。

**2.「不極端、漸進務實」沒講紅線就退化成沒立場**

漸進派可以,但若沒明確說「哪些行為 / 哪些公司不能妥協」,「漸進放棄」會被 normalize 成「反正先用著」,然後永遠不放棄。

→ 想追問講者:NeoCypherPunk 自己畫的紅線在哪?

**3.「社會主義者 + 自由科技人」聯盟才是真政治創新,但大綱沒展開**

兩派對「個人 vs 集體」「私有 vs 共有」根本分歧。若只是「在反監控這個最小交集上聯手」 — 講清楚就好;若是更深整合 — 大綱沒交代,值得追問。

\## 對我自己工作的啟發

我正在做的 AIP(Autonomous Intent-integrity Protocol)目前只解決 **integrity**(AI agent 真的執行用戶授權的那筆,中間沒被偷改)。

聽完這場最大收穫:\*\*只解 integrity 是漏的,還必須解 privacy\*\*。

理由:agent 場景下,intent 被 mempool 看到 → 被搶在前面交易;執行歷史被看到 → 行為指紋被建,對手能預測下一步。\*\*兩個少一個 agent 都不可用\*\*。

更細的收穫(寫筆記過程中校正出來的):

\> 我一開始想畫「加 privacy 不能拖慢 interaction speed」為硬紅線,寫到一半發現 —— **這就是我前面批評 NeoCypherPunk 不畫紅線的鏡像錯誤,只是方向相反**。把絕對主義從「隱私要徹底」翻成「速度要徹底」,本質一樣。

\>

\> 真正誠實的設計姿態是 **trade-off,不是 filter**:privacy 優先序高,但每個 use case 的 speed budget 不同,選技術路線時要動態權衡。

\>

\> 這個自我校正其實是這場演講對我的實質影響 —— 不只是內容上,還有思考方式上。

具體選型還沒收斂,但 AIP 的角色從「integrity 工具」改成「\*\*integrity + privacy 雙保證、且容許多種 privacy/speed profile 共存\*\*的設計」。

\## 後續行動

\- 找 NeoCypherPunk manifesto 原文讀,verify 大綱的轉述是否準確

\- 列出 AIP × privacy 的候選技術路線,挑一條做 PoC(優先挑「最能 calibrate trade-off 空間」的,不是「最快的」)
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->





**\## Today's Events**

\- 學院 Week 2 Lesson 2：Cobo 團隊來賓演講介紹 Agentic Wallet (CAW)

\- Q&A 跟講者交流 AIP 的 approach 對比

**\## Key Learnings**

1. **Cobo CAW 三層架構**：MPC（私鑰分片成 User + Agent + Cobo 三份，Cobo 永遠是 co-signer）+ Pact（off-chain 授權協議：intent / execution plan / policy / completion condition）+ Recipe（為已驗證的 DeFi 協議預先寫好執行路徑，例如 Aave V3、Uniswap V3、Hyperliquid）

2. **Cobo 提的 4 種 agent 系統風險**：Prompt Injection / Shadow Operations（agent 在用戶看不見處創建紙帳戶）/ EOA private key 洩漏 / Zombie Permissions（未撤銷的合約授權變成攻擊面）

3. **Cobo 的 gap**：講者親口承認 CAW 目前**\*\*沒解決 unverified contract safety\*\*** 這個問題，遇到 Recipe 沒覆蓋的合約時只能在 UI 跳高風險提醒，無法強制攔截

4. **架構抽象層對比**：

\- Cobo CAW = service-level 解法：vertically integrated wallet 服務、centralized trust（Cobo 為必要 co-signer）、proprietary Pact framework

\- AIP（基於 ERC-7579）= protocol-level 解法：modular smart account、open standard、提供 base + 社群擴展 module，以 ERC-7579 module 形式嵌入既有 AA wallet

\- 兩者不是直接競品，是不同抽象層的方法。Cobo 講者把 AIP 定位為「另一層方法」是準確的

**\## Actions Taken**

\- Q&A 跟講者確認 Cobo 在 unverified contract 這層的處理上限

\- 對比後 AIP 的 differentiator 變清楚：Cobo 解的是「agent 在已知協議範圍內的安全執行」，AIP 解的是「agent 在 account 層的執行 integrity，包含未驗證合約的處理」

**\## Questions / Follow-ups**

\- Cobo Recipe（DeFi 協議 specific 的 validated execution path）這層在 AIP 開放生態下要不要對應提供？還是留給社群 module？

\- AIP 動態閾值 module 設計（能應不同 pool 做調整）作為 first additional module，這個方向學院黑客松可以開始 prototype
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->






學院筆記 — Agent Memory

\## 課堂訊號

來賓演講主題：Agent memory。內容偏基礎（已懂層級），對自己 value 偏低。

但剛好是最近研究方向，因此另外補一段影片素材，並延伸出「三層 memory」的 framing。

\---

\## 補充素材：影片 _AI Agent Development: From Theoretical Frameworks to Practical Implementation_

\### 三個關鍵 architecture transitions

1\. **Flattening infrastructure** — 用 Skills（dynamic prompt injection）取代 sub-agents，降低 communication cost、改善 context inheritance。

2\. **Managing context attention** — 用 Restatement（週期性重述任務與規則）對抗 long task 的 lost-in-the-middle / rule decay。

3\. **Strategic context isolation** — 重新引入 sub-agent，不是為了「結構好看」，而是給 clean context window 避免 output 同質化。

\### Plan-Execute 教科書架構的實務坑

\- 小改動成本太高（單行改也要跑整條 hierarchy）

\- Role overstepping：再嚴格的 system prompt 也擋不住 main agent 越界寫 code

\- OpenCode 等工業實作允許 **functional redundancy**，跟教科書「乾淨分層」反向

\### Long-running task 的三種 failure mode

\- **Step merging** — 合併步驟趕完

\- **Rule decay** — 早期規則被「看不見」

\- **Output homogenization** — 後期模仿前期自己

**根因**：LLM attention 集中在 system prompt + 最近輸出，中間段被埋。

\### 工程解法

\- **Restatement**：把當前狀態 + 下一步推回高 attention 區（context 尾端）。

\- **KV cache 經濟學**：

\- **靜態規則**（code style）→ 放 system prompt

\- **動態資訊**（ToDo、specific skills）→ 接在 context 尾端，避免破壞 KV cache chain

\- **Context isolation**：sub-agent 解決的是隔離需求，不是組織美學

\### 影片結論

Agent 架構應由系統的\*\*具體 failure point\*\* 驅動（context anxiety vs unwanted imitation），不是追 buzzword（「Harness」這種詞本身不解決問題）。

\---

\## 我的延伸思考

\### 一、影片在談的是 working memory，不是 long-term memory

影片講的「memory」窄化成 **working memory / attention 管理**——單一 context window 內的事。對「\*\*long-term memory across sessions\*\*」幾乎沒著墨。

而這正是：

\- 我最近研究方向

\- Hermes 的核心問題

\- 真正讓重度 user 體驗差異化的層

\### 二、Power user 系統其實是三層 memory

| 層 | 內容 | 召回方式 | 範例 |

|---|---|---|---|

| **1\. Working memory** | 當前 context window | attention 分布 | 影片講的所有東西 |

| **2\. Structured personal memory** | 高密度、typed、帶 why 的個人記憶 | 顯式索引 + frontmatter | Claude 的 `MEMORY.md` + 各 memory file |

| **3\. Vault / RAG corpus** | 長文素材、原始筆記 | semantic search / read tool | `knowledge-base` vault |

自己其實已經三層都在用，只是還沒命名出來。影片的盲點是只看到第 1 層。

\### 三、Memory vs RAG：互補不是競爭

| | RAG | Structured Memory |

|---|---|---|

| 召回 | embedding similarity | 顯式 type + frontmatter |

| 狀態 | stateless（同 query 同結果） | stateful（積累判斷） |

| 強項 | 大量非結構化檢索 | user model、cross-session continuity |

| 弱項 | 不知道「誰」在問、無判斷層 | scale 不上去（千筆事實壓垮 context） |

兩者解的問題交疊但取捨不同。Power user 系統需要\*\*同時\*\*有結構化的第 2 層（memory）跟可檢索的第 3 層（vault as RAG corpus）。

\### 四、Push back 自己原本的 framing

**原想法**：「一般用戶不需要龐大記憶框架，工程師/重度用戶需要。」

**更精準**：一般用戶不需要「\*\*手動維護\*\*」記憶框架。ChatGPT 也有 memory feature——一般用戶也需要 memory，只是維護成本要趨近於零。

工程師 vs 一般用戶的差別不是「\*\*需不需要\*\*」，是「\*\*願不願意手動 curate 換取更高訊號密度\*\*」。

**對 Harness 設計的含義**：產品決策不是「要不要做 memory」，是「\*\*curation 的 friction 設多高\*\*」——對應不同 user segment。

\---

\## Open questions（給未來自己 / Hermes）

\- 第 2 層（structured memory）跟第 3 層（vault）的邊界在哪？哪些東西該升到 memory，哪些留在 vault？

\- 影片那種 working-memory 級的 Restatement 機制，能延伸到 cross-session 嗎？例如每次 session 開頭自動 restate「你是誰、你在做什麼」？

\- Curation friction 的 spectrum 設計：auto-write（零 friction、低訊號）→ confirmed-write（中 friction）→ manual-only（高 friction、最高訊號）——各自的 trigger 條件？

\- 影片提的「functional redundancy」（main agent 也能寫 code）vs「context isolation」（sub-agent 給 clean window）這兩個原則，何時衝突、何時互補？
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->







```
# Vault for Agents, Not Self-Review — 一個 PKM Reframe 紀錄
```

`## TL;DR`

`主流 PKM (Personal Knowledge Management) 工具如 Obsidian、Notion 預設「人會回頭讀筆記」。`

`但對 forward research 型工作者（Agent / Web3 等快迭代領域），這個假設失效。`

`我的 vault 用了一段時間後意識到：**我幾乎不回頭讀，卻仍在維護**——直到 reframe 為「**vault 是給 Agent 讀的，不是給自己 review 的**」，整個設計重心才對位。`

`本文記下 reframe 後幾個 design choices。`

`---`

`## 問題：主流 PKM 對快迭代領域工作者失效`

`主流框架共通假設：`

`- 寫筆記 → 未來會 review → 知識複利`

`對應實踐：每日筆記、週 review、Zettelkasten 鏈接網。`

`但快迭代領域的真實工作 pattern：`

`- forward research 為主、不回頭`

`- 領域知識本身快速 outdated`

`- context switching 頻繁、舊脈絡常被覆蓋`

`- 「累積感」≠ 實際使用`

`這時你會發現：花時間 maintain vault，但 ROI 模糊。`

`## Reframe：Knowledge vs Memory`

`兩種容易混淆但本質不同：`

`| | 知識 | 記憶 |`

`|---|---|---|`

`| 用途 | 累積、未來查、擴充 | Agent 啟動 brief、行為規則 |`

`| 讀者 | Agent + 偶爾自己 | Agent |`

`| 變動頻率 | 慢、累積 | 幾乎不變 |`

`| 位置 | Vault | Agent 私有區 |`

`→ Vault 放知識，Agent 私有區放記憶。混了 vault 會被 agent 雜訊污染。`

`## Design: Vault as Agent-Readable Filesystem`

`採用 LYT (Linking Your Thinking) 的 Maps of Content 概念，調整成 agent-readable：`

`**讀取路徑**：`

Top MOC (current state)  
└→ Project MOC (per main line)  
└→ Atomic concept notes  
└→ Source / Raw

```
Agent 進 vault 從 top MOC 開始，**不全 grep**。比 pure Zettelkasten「hop card to card」效率高一個量級。
```

`**三軸正交**（混淆是設計常見錯誤）：`

`- 邏輯層級 (reading-oriented)`

`- 物理結構 (writing-oriented)`

`- 生命週期 status (state-oriented)`

`一個檔同時被三軸定位。`

`## Design: Lifecycle Closure`

`Long-running work 有自然轉換（完成 / 取消 / 被吸收 / 暫停 / 載體變換）。`

`**問題**：轉換不被顯式記下 → agent 帶過時世界觀回答 → bias 累積。`

`驗證 case：某個 project 被 absorbed 進另一個但沒收官紀錄 → 之後 agent 仍當獨立 project 處理。`

`**Rule**：agent 偵測到下列訊號之一，主動 ask 收官狀態：`

`1. 同領域但架構不同的新東西出現`

`2. 長時間沒提某 work line`

`3. Deadline 過了 user 沒主動 mention 結果`

`4. User 自己宣告 pivot`

`這跟「寫入篩子（X 在 3 個月後還 true 嗎？）」是鏡像——**filter 守入口、closure 守出口，一起跑才完整**。`

`## 方法論: Pre-mortem 取代 Defer`

`對「目前看不到痛點的 feature」標準做法是 defer until pain。但這意味著被失敗 surprise。`

`替代：**Pre-mortem** — 列失敗模式、設計訊號 detector、定升級 trigger。`

`差別：`

`- Defer = passive，等訊號`

`- Pre-mortem = **active 設計 detector**`

`兩者都不立即動，但 pre-mortem 不會被 surprise。`

`## 開放問題（沒解的，希望聽 cohort 意見）`

`1. **Multi-agent memory federation**：兩個 agent 各自私有 memory + 共享 markdown filesystem，協議怎麼設計？Cross-Pointer Pattern (各自 MEMORY.md 互指對方位置) 是候選但未實作`

`2. **MOC 維護成本 vs ROI**：MOC 要定期更新才不 stale，但這需要紀律。多久 review 一次？`

`3. **Vault → Agent 讀取的 mid-session trigger**：啟動讀 OK，工作中何時主動翻？`

`## Takeaway`

`如果你在 Agent / Web3 領域常 context switching、不常回顧筆記、感覺 vault 沒派上用場——**可能不是你的問題，是框架不對位**。`

`考慮 reframe：**vault 不是給未來自己 review 的，是給未來的 agent 讀的**。`

`設計重心會變：`

`- 從「我會不會回頭看」→「agent 會不會找到」`

`- 從「美觀 review」→「machine-parseable」`

`- 從「Daily Notes」→「MOC navigation」`

`- 從「Defer pain」→「Pre-mortem signals」`

`不一定適用所有人，但**對 forward research 型工作者可能比 second brain 更務實**。`

`## 限制聲明`

`- 本文紀錄個人一次 design session 的結論，未長期驗證`

`- 「Agent 讀 vault」實踐效果取決於 vault 持續累積（input quality > system design）`

`- Multi-agent / Hermes 整合具體機制是 anchor，未實作`

`- 多數 rule 仰賴 agent 紀律執行，非 enforced`
<!-- DAILY_CHECKIN_2026-05-24_END -->

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
