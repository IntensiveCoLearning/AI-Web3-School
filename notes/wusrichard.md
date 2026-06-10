---
timezone: UTC+8
---

# 吳語復

**GitHub ID:** wusrichard

**Telegram:** @wuspunk

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-11
<!-- DAILY_CHECKIN_2026-06-11_START -->
1
<!-- DAILY_CHECKIN_2026-06-11_END -->

# 2026-06-10
<!-- DAILY_CHECKIN_2026-06-10_START -->

１
<!-- DAILY_CHECKIN_2026-06-10_END -->

# 2026-06-09
<!-- DAILY_CHECKIN_2026-06-09_START -->


1
<!-- DAILY_CHECKIN_2026-06-09_END -->

# 2026-06-08
<!-- DAILY_CHECKIN_2026-06-08_START -->



**EF Mandate + EIP7805**                                                                    

  
**// 1 Liner:** 以太坊基金會 (EF) 貫徹網路中立性與抗審查的核心願景 (Mandate)，並透過 **EIP-7805 (FOCIL)** 的「強制包含列表 (Inclusion Lists)」機制，從掌握 MEV 權力的 **Builders** 手中奪回交易打包的公平性，防止單一實體惡意拒載普通使用者的交易。 

  

**// Importance:** 在目前的 PBS (Proposer-Builder Separation) 架構下，區塊建構權力高度集中於少數追求利潤或受限於法規（如 OFAC 制裁）的頂級 Builders 手中，導致嚴重的交易審查危機。EIP-7805 透過將防線寫入底層的 Fork-choice 規則中，確保了以太坊基礎設施級別的抗審查性，同時不必犧牲 Builder 處理複雜交易 (MEV) 的效率。這是確保以太坊不被中心化資本或單一政府控制的關鍵升級。 

  

**// Current XX****目前為 草案 (Draft) 階段 (歸類於 Core Standards Track)。正由社群、EF 研究員與各大客戶端開發團隊進行技術驗證與效能壓力測試（特別是針對 P2P 網路頻寬與 Payload 驗證時間的影響）。這是未來以太坊重大硬分叉升級的重點候選項目之一。** 

**Missing Pieces: 1. 利他主義假設與「零激勵機制」： FOCIL 明確指出，參與 IL 委員會的成員是沒有任何經濟獎勵的。機制完全建立在「1-out-of-N（只要 N 個人裡有 1 個是誠實的就好）」的利他假設上。如果未來出現某種強大的惡意 MEV 賄賂或政治施壓，導致整組委員會集體「消極罷工」（每個人都發送空的 IL 清單），目前的機制缺乏懲罰 (Slashing) 或正面激勵手段來反制。 2. 精確的時間參數尚未定案 (Timing Benchmarks)： 雖然流程圖中有給出時間（如 t=9s 凍結、t=11s 更新、t=0s 發車），但文件坦承「確切的時間間隔仍需要等待更多的實際測試與基準測試結果」才能敲定。時間抓得太緊，會導致網路不好的 Builder 來不及更新 Payload，進而威脅到共識層的活躍度 (Consensus Liveness)；時間抓得太鬆，又會損害區塊鏈本身的效能。 3. 缺乏統一的 IL 篩選標準： 文件把「如何從 mempool 挑選交易做成強制清單」的規則完全交給各個客戶端（例如邏輯是隨機挑選、按優先費、還是按排隊時間？）。如果不同節點篩選邏輯分歧太大，可能會造成 P2P 網路上不必要的溝通混亂。 4. 極端狀況下的 Builder 效能損耗： 雖然提出了追蹤 Nonce 與 Balance 的優化演算法，但在網路極端波動、或是遇到極其複雜的 Account Abstraction (AA, 帳戶抽象) 交易集體跳票時，Builder 實作 FOCIL 的運算效能是否真的不會導致出塊延遲，依然缺乏主網級別的實戰數據證明。** 

**// Example:** 假設某個使用者發起了一筆與 Tornado Cash 相關的合法交易。

-   **沒有 FOCIL 時：** 為了避免惹上美國政府麻煩，市場上前三大 Builders 集體封殺這筆交易，導致該使用者等了幾個小時都無法被打包上鏈。
    
-   **有 FOCIL 時：** 系統隨機選出的 IL 委員會 (糾察隊) 發現這筆交易被晾在 mempool 太久，便將其寫入強制名單 (IL)。接下來的 Builder 為了讓自己的區塊能獲得 Validators (Attesters) 的投票承認，**必須**將這筆交易塞進區塊中。使用者的交易成功上鏈。
    

  
  
  

**// Deep Dives:** 

**1\. PBS 架構的演進： 從最初的 MEV-Boost 到 ePBS (Enshrined PBS)，再到結合 FOCIL 的最終抗審查型態。 2. 效能與最佳化 (Payload Construction)： Builders 如何利用追蹤 EOA (外部擁有帳戶) 的 Nonce 與 Balance 變化，將原本 $O(n^2)$ 的 IL 驗證時間複雜度大幅降低，避免拖慢出塊速度。 3. IL Equivocation (雙重作惡防護)： 深入探討當 IL 委員會成員惡意發送兩份不同的強制清單時，P2P 網路如何透過「最多轉發兩次」的規則來限制頻寬攻擊。 4. Account Abstraction (AA) 的相容性： 探討 FOCIL 機制在面對複雜智能合約錢包 (如 EIP-4337) 交易失效時的邊界情況。** 

  
  

**// People Profiles:  
份提案主要由以太坊基金會內部研究團隊 (特別是 Robust Incentives Group, RIG) 以及外部核心基礎設施開發者共同推動。** 

**Authors of Summary:**

  

**MEV 導致權力集中：** 為了榨取最大利潤 (MEV)，區塊打包變成一場算力與演算法的軍備競賽，導致絕大多數的區塊生產被少數幾個超級 **Builder** 壟斷。

**壟斷帶來「審查」的籌碼：** 既然這幾個 Builder 掌握了「誰能上鏈、誰不能上鏈」的生殺大權，他們就可以因為外部法規壓力（例如美國政府的制裁黑名單）或私人利益，輕易地**拒絕處理某些普通使用者的交易**。

**EIP-7805 (FOCIL) 的反制：** 核心開發者的態度是：「我們無法消滅 MEV，也需要 Builder 的專業排序能力來維持網路效率。但是，你不能濫用這個權力來欺負一般人。」因此，透過強制的 **IL (包含列表)**，等於是給 Builder 下了最後通牒：**你可以繼續排你的高收益交易去賺錢，但那些被你故意晾在一旁的普通交易，你必須給我一併帶上車，否則你的區塊就會被全網拒絕。**
<!-- DAILY_CHECKIN_2026-06-08_END -->

# 2026-06-07
<!-- DAILY_CHECKIN_2026-06-07_START -->





1
<!-- DAILY_CHECKIN_2026-06-07_END -->

# 2026-06-06
<!-- DAILY_CHECKIN_2026-06-06_START -->






Since releasing [Gemma 4](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/) two months ago, we've been continuously working to expand its capabilities. First, we introduced [Multi-Token Prediction](https://blog.google/innovation-and-ai/technology/developers-tools/multi-token-prediction-gemma-4/) (MTP) to accelerate inference, and just a couple of days ago, we released [a 12B model](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemma-4-12b/) to bridge the gap between our E4B and 26B MOE models.

Today, we are releasing new checkpoints optimized with Quantization-Aware Training (QAT) to make Gemma 4 even more efficient, so you can run models locally on everyday edge devices and consumer GPUs.

By simulating quantization during training, QAT minimizes quality loss when the model is compressed. This release includes QAT checkpoints for the popular Q4\_0 quantization format as well as a novel quantization format specialized for mobile use cases. Using this mobile format, we’ve reduced the memory footprint of Gemma 4 E2B to 1GB. Together, these dramatically reduce memory requirements while preserving the capabilities and quality you expect from Gemma 4.

## **Keeping model quality while making them smaller**

Quantization is a key technology to run models on consumer hardware by reducing their memory footprint while also accelerating decode speed. However, standard
<!-- DAILY_CHECKIN_2026-06-06_END -->

# 2026-06-05
<!-- DAILY_CHECKIN_2026-06-05_START -->








# 写入工具权限升级方案

## 1\. 核心原则

只读是默认状态，写入权限是临时例外，而非永久特权。 每次授权都有范围（路径）、有期限（TTL）、有记录（审计日志）、可撤销。

* * *

## 2\. 权限模型

```
READ  ──默认────────────────────────────────────────► 任何工具调用均可使用
WRITE ──需要显式授权──► 授权令牌（Token）──► 过期/撤销后自动失效
```

### 授权令牌字段

json

```json
{
  "token_id":   "tok_abc123",
  "granted_by": "user@example.com",
  "granted_at": "2026-06-05T10:00:00Z",
  "expires_at": "2026-06-05T10:30:00Z",
  "scope": {
    "paths":      ["/project/src"],
    "operations": ["write_file", "delete_file"],
    "max_bytes":  102400
  },
  "revoked":    false,
  "revoked_at": null
}
```

* * *

## 3\. 需要用户确认的场景

| 触发条件 | 要求 |
| --- | --- |
| 首次调用任何写入工具 | 交互式确认 + 选择 TTL |
| 目标路径超出已授权 scope | 重新确认，扩展 scope |
| 单次写入 > 64 KB | 额外确认，显示 diff 摘要 |
| 删除操作（任何大小） | 强制确认，显示完整路径 |
| 距上次授权 > 30 分钟 | 重新确认（防止令牌滥用） |
| 批量写入 > 5 个文件 | 逐批确认，每批最多 5 个 |

确认交互示例（stdio / UI 均适用）：

```
[MCP write_file] 请求写入：
  路径: /project/src/main.py
  大小: 2,048 bytes
  有效期: 30 分钟

请选择:
  [1] 允许（本次）
  [2] 允许（30 分钟内免确认）
  [3] 拒绝
```

* * *

## 4\. 撤销授权

### 4.1 自动撤销（无需用户操作）

-   Token TTL 到期（默认 30 分钟，可配置 5 / 30 / 120 分钟）。
    
-   进程重启：所有内存中的 Token 失效；持久化 Token 需显式续期。
    
-   检测到路径遍历攻击（`../` 等）：立即撤销同 session 的所有写权限。
    

### 4.2 手动撤销

python

```python
# 工具：revoke_write_permission(token_id)
# 任何时刻都可调用，无需理由

def revoke_write_permission(token_id: str) -> dict:
    token = _load_token(token_id)
    token["revoked"] = True
    token["revoked_at"] = utcnow()
    _save_token(token)
    _audit("revoke", {"token_id": token_id}, "ok", "user revoked token")
    return {"revoked": True, "token_id": token_id}
```

用户也可以通过 MCP client UI 一键撤销所有活跃令牌。

### 4.3 紧急全局撤销

bash

```bash
# 删除令牌存储文件，server 重启后无任何写权限
rm /var/log/mcp_readonly/tokens.json
```

* * *

## 5\. 审计日志设计

每次写入工具调用（无论成功与否）都追加一条 JSONL 记录：

jsonc

```jsonc
{
  "ts":         "2026-06-05T10:05:23Z",
  "session_id": "sess_xyz",
  "token_id":   "tok_abc123",
  "tool":       "write_file",
  "args":       { "path": "/project/src/main.py" },
  "status":     "ok",           // ok | denied | error | revoked
  "bytes":      2048,
  "sha256":     "e3b0c44...",   // 写入内容的哈希（便于回滚）
  "caller":     "claude-agent"
}
```

### 审计日志保护

-   日志文件权限：`0o640`，只有 server 进程可写，日志收集系统可读。
    
-   禁止 MCP 工具读取或修改自身的审计日志（日志目录不在白名单内）。
    
-   每天自动 rotate；至少保留 90 天。
    

### 查询示例

bash

```bash
# 查看所有写入失败记录
grep '"status":"denied"' audit.jsonl | jq .

# 查看某 token 的全部调用
jq 'select(.token_id == "tok_abc123")' audit.jsonl

# 统计今日写入字节数
jq 'select(.ts | startswith("2026-06-05")) | .bytes' audit.jsonl \
  | paste -sd+ | bc
```

* * *

## 6\. 实现结构（在 [server.py](http://server.py) 中增量扩展）

```
server.py          ← 现有只读 server（无需改动）
write_tools.py     ← 写入工具实现（write_file, delete_file, …）
permission.py      ← Token 生命周期管理（grant / revoke / validate）
confirm.py         ← 用户确认交互（stdio 或 HTTP callback）
audit.py           ← 统一审计日志（只读 + 写入共用）
```

写入工具在执行前必须经过以下门卫函数：

python

```python
def require_write_permission(path: str, operation: str, token_store: TokenStore) -> Token:
    """
    1. 检查是否存在未过期、未撤销的 Token，且 scope 覆盖 (path, operation)
    2. 如不满足 → 触发用户确认流程 → 颁发新 Token
    3. 返回 Token（供后续审计记录）
    如任一步骤失败 → 抛出 PermissionError，调用方记录 "denied" 日志
    """
```

* * *

## 7\. 安全要点小结

-   **最小权限**：Token scope 精确到路径和操作类型，不给"写整个项目"的宽泛权限。
    
-   **短生命周期**：默认 30 分钟，超时自动失效，无法续期只能重新确认。
    
-   **不可篡改日志**：写入日志与业务数据分离，MCP 工具本身无法修改日志。
    
-   **路径规范化**：所有路径在验证前先 `resolve()`，防止 `../` 绕过白名单。
    
-   **失败默认拒绝**：Token 验证抛出任何异常 → 一律视为 denied。
<!-- DAILY_CHECKIN_2026-06-05_END -->

# 2026-06-04
<!-- DAILY_CHECKIN_2026-06-04_START -->









### [**LangChain**](https://aiweb3.school/zh/handbook/ai/frameworks/#langchain)

[**LangChain 是最常見的 LLM 應用開發框架之一，涵蓋模型存取、prompt、工具呼叫、retriever、agent、output parser 等模組。**](https://aiweb3.school/zh/handbook/ai/frameworks/#langchain)

[**它適合快速把模型能力和外部系統接起來，也適合學習 AI 應用常見組件。但使用時要小心「抽象太早」：如果你還沒搞清楚自己的工作流程，直接套一堆 chain 和 agent，後面排查問題會變難。**](https://aiweb3.school/zh/handbook/ai/frameworks/#langchain)

[**LangChain 更像一套元件庫。它適合幫你組合能力，不適合替你決定產品邊界。**](https://aiweb3.school/zh/handbook/ai/frameworks/#langchain)
<!-- DAILY_CHECKIN_2026-06-04_END -->

# 2026-06-03
<!-- DAILY_CHECKIN_2026-06-03_START -->











昨天有參加OPEN DAY，主要參加COBO錢包或是串Z.AI的LLM  
API申請可以報銷
<!-- DAILY_CHECKIN_2026-06-03_END -->

# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->












今天去聽 VC分享  
老師地推特:[https://x.com/Tracywithcurios](https://x.com/Tracywithcurios)

老師會用gemini怎麼減肥

喜歡墨盒  

學到地

**PMF（Product-Market Fit）**：產品市場契合度。指產品真正解決了目標市場的痛點，用戶願意持續使用甚至主動推薦。早期 VC 問的是「你的 PMF 找到了嗎？」，現在不只問有沒有，還要看數據證明。

**CAC（Customer Acquisition Cost）**：獲客成本。拉一個新用戶/付費客戶平均花多少錢（廣告、銷售、行銷費用加總 ÷ 新增客戶數）。VC 會把 CAC 跟 LTV（客戶終身價值）放在一起看，LTV/CAC 比例太低代表商業模式燒錢不划算。

**留存（Retention）**：用戶留下來繼續用的比率。常見指標是 Day-7、Day-30 留存率，或 Monthly Churn（每月流失率）。留存差表示產品有漏水桶問題，再多行銷預算都補不住。
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->













### **Reflection**

Reflection 是讓 Agent 檢查自己的中間結果，例如發現資訊不足、工具失敗、計畫不合理，然後修正下一步。

它適合提升複雜任務質量，但不能取代外部驗證。 Agent 自我反思仍然由模型完成，模型可能會為自己的錯誤找理由。尤其是寫入、授權、支付這類動作，reflection 只能作為輔助診斷，不能作為最終安全判斷。

-   _自我檢查可以提高質量，確定性檢查才能承載風險。_ \*
    

### **Multi-Agent**

Multi-Agent 是多個 Agent 分工協作，例如研究 Agent 讀取資料，開發 Agent 寫程式碼，安全 Agent 做風險審查，執行 Agent 呼叫工具。

它適合複雜工作流程，但也會放大協調問題：上下文傳遞遺失、責任邊界模糊、一個 Agent 的錯誤被另一個 Agent 當成事實、工具權限擴散。

做 Multi-Agent 時，要先問一個樸素問題：多個 Agent 是否真的減少複雜度？如果只是把一個不清楚的流程拆成多個不清楚的角色，系統會更難調試。

# **在 AI x Web3 中的位置**

Agent 位元在模型能力和鏈上執行之間。它可以把使用者目標推進成多步驟流程，但不能繞過帳戶、權限和結算規則。

一個相對穩的 AI x Web3 Agent 架構通常是：

1.  用戶提出目標和限制。
    
2.  Agent 讀取上下文並產生計劃。
    
3.  系統把計畫拆成唯讀步驟和候選寫入步驟。
    
4.  唯讀工具自動執行，寫入工具進入 policy 檢查。
    
5.  Simulation 展示鏈上影響。
    
6.  使用者確認高風險動作。
    
7.  Wallet / Smart Account 執行。
    
8.  日誌記錄每一步和最終狀態。
    

最危險的設計是讓 Agent 同時擁有模糊目標、廣泛工具、長期記憶和大額資產權限。
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->














一個 Agent 如果只有模型和工具，就​​像一個會說話的腳本執行器。真正可用的 Agent 必須知道自己能做什麼、不能做什麼、做完如何驗證、失敗如何停止、誰能審計它所做的事情。

工具比回答更危險：讀取資料、寫資料庫、傳送請求、改配置不是同一風險等級。

狀態必須外置和可查：任務進度、工具結果、失敗原因、使用者確認都要記錄，不應只藏在模型脈絡中。

停止條件要明確：達到目標、超出預算、資訊不足、風險越界、用戶拒絕，都應該讓 Agent 停下來  
  
Tool Use

Tool Use 是 Agent 呼叫外部能力：搜尋、資料庫、API、程式碼執行、郵件、支付介面、內部系統等。

工具讓 Agent 從「會回答」變成「能做事」。但工具也讓 Prompt Injection 和模型誤判變得危險。一個能讀網頁的 Agent 被惡意網頁影響，和一個能寫入系統的 Agent 被惡意網頁影響，後果完全不同。

工具設計要明確：

輸入 schema

權限範圍

是否唯讀

是否會產生外部副作用

呼叫前後如何記錄

哪些呼叫需要人工確認  
  
Planning

Planning 是把目標拆成步驟。例如「幫我分析這個 DAO 提案」可以拆成讀取提案、檢索歷史討論、總結爭議、檢查投票機制、產生風險清單。

計劃有用，但不能神化。模型生成的計劃只是候選路線，不是授權。越靠近高風險動作，計劃越需要被系統規則拆開檢查。

一個好的 Agent plan 應該可以暴露：

每一步需要什麼工具

每一步讀還是寫

哪些步驟可自動執行

哪些步驟需要用戶確認

失敗時是否可以重試

最終如何驗證任務完成
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->
















一個完整的 RAG 流程最多會用到**三種模型**：

```
Embedding 模型   →  把文字變向量（存進知識庫、搜尋時用）
Rerank 模型      →  評分排序搜出來的結果
LLM              →  看著排好的文件生成答案

```

​[http://192.168.40.203/litellm](http://192.168.40.203/litellm)  
去了解litellm跟帳密怎麼使用

怎麼安裝模型

Rerank怎麼新增
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->

















retrieve

-   **事前準備（建立索引）**：把你的文件切成小塊（chunks），用 embedding model 轉成向量，存到向量資料庫（例如 Pinecone、Chroma、Weaviate）
    
-   **查詢時**：使用者問問題 → 也轉成向量 → 用「向量相似度」（通常是 cosine similarity）找出最接近的幾個片段
    
-   **回傳結果**：把找到的 top-k 個片段交給 LLM
    
-   **Vector Retriever**：基於 embedding 向量相似度搜尋（語意搜尋）
    
-   **Keyword Retriever**：傳統的關鍵字搜尋，例如 BM25
    
-   **Hybrid Retriever**：混合上面兩種，通常效果更好
    
-   **Multi-Query Retriever**：把一個問題改寫成多個問題去查，提高召回率
    
-   **Re-ranker**：先粗略撈一批，再用更強的模型重新排序
    

[**Rerank**](https://aiweb3.school/zh/handbook/ai/rag/#rerank)

### 什麼時候該加 Rerank？

實務上的判斷：

-   文件庫很大（幾萬筆以上）→ **要加**
    
-   使用者問題很多樣、語意複雜 → **要加**
    
-   對答案精準度要求高（法律、醫療、金融）→ **強烈建議**
    
-   玩具專案、文件就幾十筆 → 不加也沒差
    

**Retriever** = 圖書館員憑印象從書架上抽出 50 本「可能相關」的書

-   **Reranker** = 助理把這 50 本書每一本翻一翻、跟你的問題對照，挑出最相關的 5 本
    
-   **LLM** = 作家根據這 5 本書寫答案
    

[**Citation**](https://aiweb3.school/zh/handbook/ai/rag/#citation)

Citation（引用、出處標註）是 RAG 系統的「最後一哩路」——讓 LLM 在回答時**明確告訴你「這句話是從哪份文件來的」**。

### 為什麼需要 Citation？

RAG 雖然讓 LLM 有資料可以參考，但還是有兩個老問題：

1.  **幻覺（Hallucination）**：LLM 可能會「腦補」，講出資料裡根本沒有的內容
    
2.  **可信度問題**：使用者怎麼知道答案是真的還是假的？
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->


















## Three Product Components

他介绍了 Cobo Agentic Wallet 的三个核心方案：

### 1) MPC Security Model

Cobo 采用 MPC 架构服务 agent 场景，核心是解决“私钥由谁持有”的底层安全问题。与常见的 TEE、session token 或 API key delegated authorization 不同，MPC 让 Cobo、agent 以及用户各自持有私钥分片，任意一方都无法单独掌控资金转移权限。

他说明，常规资金管理下没有任何单方可以随意挪用用户资金，但在极端情况下仍允许用户导出分片以转移资金。该模型被设计成 2/2 threshold 的共管模式，用于保证资金安全和 self-custody 属性。

### 2) Pact Authority

Pact 是一个位于钱包之上的授权协议层，用来明确告诉 agent“能做什么、不能做什么、何时停下”。Johnny 解释，一个 pact 通常包含四个要素：

-   **Intent**：希望 agent 完成的目标，例如“ETH 低于 2000 时买入，高于 2500 时卖出”。
    
-   **Execution plan**：AI 根据 intent 转换出的可审计执行计划，包含调用哪个合约、数量、token pair 等细节。
    
-   **Policy**：风控约束，包括预算、白名单、链、token、合约限制，甚至可以精确到 ABI 参数级别。
    
-   **Completion condition**：完成条件与失效条件，避免永久授权和 zombie permission，例如交易总金额上限、时间到期后自动 revoke。
    

他展示了 pact 的执行流程：用户在 agent 中提出意图，agent 与钱包接口生成 execution plan 和 policy，封装成 pact 推送到移动端，用户在 app 内审阅、修改、批准或拒绝；批准后，agent 才能在可控范围内执行链上动作。

### 3) Recipe Skill Layer

Recipe 是为了解决“怎么把事做对”而设计的技能层，类似预加载知识库。Johnny 认为大模型本身并不擅长自主完成复杂链上操作，因此需要把合约地址、ABI 参数、风险边界、调用范式等封装成 recipe，供 agent 按照验证过的路径执行。

他把 recipe 定义为“知识胶囊”，用于减少幻觉、减少临时构造带来的错误，并支持主流 DeFi 场景。分享中提到已经上线或支持的 recipe 包括：

-   Uniswap V3
    
-   Polymarket
    
-   Hyperliquid
    
-   以及其他主流链上场景
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->



















聽agent **Long-term Memory**分享

[之前大家都會琢磨claud.md](http://claud.md) 控制200行內

前面半小時產品端

chatGPT是聊天用

claude code是寫程式用

long term meeomry 沒那麼嚴重

後面是工程端

小龍蝦會失意

agent meory

艾瑪似的向量不好 導致他的memory不好用

因為他本身是用英文去做的

多模态数据进行向量化，然后 做向量相似度的检索
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->




















今天在畫Framwork跟Web3的**Open Agentic Economy，感覺有個大框架的圖下去理解會比較懂**
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->





















0523

### **检索增强生成（RAG）**

RAG 不是“给模型接一个向量库”这么简单。它是一条把外部知识取回、筛选、引用、交给模型使用的证据链，用来减少过期知识和无来源回答。

RAG 的作用是：当用户提出问题时，系统先从知识库里找相关材料，再让模型基于这些材料回答。

RAG 很常见：产品文档问答、代码库助手、研究摘要、客服知识库、SDK Copilot、内部知识检索。

RAG 的核心不是让回答更长，而是让回答有来源、有版本、有边界。**没有 citation 和 freshness 的 RAG，只是把幻觉从模型内部搬到了检索系统里。**

### **Chunking**

是把长文档切成可检索片段。切太小，语义断裂；切太大，检索结果噪声多，token 成本高

比较稳的做法是按结构切：标题、API endpoint、函数说明、标准小节、FAQ 问答、审计或变更记录。每个 chunk 保留来源 URL、标题路径、更新时间和版本

### [**Vector DB**](https://aiweb3.school/zh/handbook/ai/rag/#vector-db)

用来存储 embedding，并按相似度检索相关 chunk。它解决的是“语义相近内容怎么快速找到”的问题。

但向量相似不等于答案正确。一个旧版本 SDK 文档可能和用户问题高度相似，却已经不适用；一个第三方博客可能写得很像官方文档，却缺少权威性。

所以 Vector DB 里不应该只存向量，还要存 metadata：来源、版本、chain、更新时间、可信等级、是否废弃。检索时先过滤，再排序。

下面是沒聽過的

### **Retriever**

是根据用户问题取回候选材料的组件。它可以是向量检索、关键词检索、混合检索、图检索，也可以加上 metadata filter。

好的 retriever 不能只看语义相似度。它还要知道用户问的是哪个产品、哪个版本、哪段时间、官方文档还是社区讨论。比如同一个 API 在不同 SDK 版本里可能参数

### **Citation** 是把答案里的关键结论连接回来源。它不是装饰，而是用户验证答案的入口。

在技术问答里，citation 至少要能说明：

-   这句话来自哪份文档或链上记录
    
-   来源是否官方
    
-   文档版本或更新时间
    
-   哪些结论只是模型归纳
    
-   哪些地方没有足够证据
    

RAG 位在 Knowledge Base 和模型之间。它帮 Agent 查资料、补上下文、引用证据，但不负责最终执行。

常见应用包括：

-   协议文档问答
    
-   合约接口解释
    
-   治理提案和论坛摘要
    
-   审计报告检索
    
-   SDK / API Copilot
    
-   交易解释时补充项目背景
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->






















oken 是模型处理文本的基本单位。它不一定等于一个汉字、一个英文单词或一个符号，而是 tokenizer 切分后的片段。**不要把“页面很短”误认为“token 很少”**。代码、JSON、长标识符、表格和混合语言文本经常比普通段落更吃 token。

Json、table這種表格。都比較吃token

Embedding 是把文本、代码或其他对象映射成向量，用来衡量“语义上是否接近”。它常用于搜索、聚类、推荐、异常检测和 RAG。

把資料代碼應射程向量來，用COS還看是否接近語意，用在RAG

Hallucination 指模型生成了看起来合理、但并不真实或无法验证的内容。它可能编造 API、错误解释代码、引用不存在的资料，或者把旧版本文档当成当前状态。

Hallucination 就是造成AI的幻覺

Multimodal 模型可以处理文本、图片、音频、视频或屏幕截图。对 builders 来说，它的价值不是“更炫”，而是让模型读懂更多真实工作界面：图表、控制台、设计稿、应用页面、错误截图和确认弹窗。

LLM 位在 AI x Web3 系统的理解和生成层。它负责把用户目标转成可讨论的计划，把复杂链上数据解释成人能读的语言，把文档和代码串成可执行思路。

-   数据层：RPC、索引器、预言机、向量库、项目文档。
    
-   编排层：Prompt、Context、RAG、Agent workflow。
    
-   执行层：工具调用、钱包、Smart Account、合约交互。
    
-   安全层：Guard、simulation、权限策略、人工确认、日志。
    

LLM 越靠近执行层，系统越要把它的自然语言输出变成可验证对象。

**提示词（Prompt）** 不是寫得越長越好，而是該有的邊界都要寫出來，避免讓AI去補沒有寫的東西，例如API

應該要寫出 • **指令分层要清楚**：系统规则、开发者规则、用户目标、检索内容不能混在一起。 • **输出格式要机器可检验**：关键结果尽量用 JSON schema、函数参数或明确字段承载。

• **高风险动作不能只靠 prompt 拦截**：写入数据库、发送消息、调用外部工具、执行支付或签名类动作，都必须再经过代码层校验和 human check。

Instruction 是给模型的任务规则。它应该回答：你是什么角色、要完成什么、不能做什么、遇到不确定信息怎么处理、输出应该是什么形态

一个实用写法是把 instruction 拆成四段：

-   任务目标
    
-   可用输入
    
-   禁止行为
    
-   输出格式和失败格式
    

Few-shot 是在 prompt 里放少量示例，让模型模仿示例的判断方式和输出格式。风险提示和不确定点，就可以放一个好示例和一个坏示例。

Prompt 处在用户目标和模型行为之间。它把“帮我看看这笔交易有没有问题”变成模型可以执行的任务：读取哪些字段、如何解释资产变化、哪些风险要标记、什么时候必须说不知道。

但 prompt 不应该独自承担安全。更稳的链路是：

1.  Prompt 定义任务和输出格式。
    
2.  Context 提供可信数据和来源边界。
    
3.  Model 生成解释或候选动作。
    
4.  Code 校验 schema 和业务规则。
    
5.  Guard / simulation 检查链上影响。
    
6.  Human check 确认高风险动作。
    

Context 是模型这一次能看到、能使用、能被影响的信息空间。真正难的不是把更多内容塞进去，而是把系统规则、用户目标、历史状态、工具结果和外部文档分清楚。

**模型只能基于它看见的上下文行动；系统必须决定什么能进上下文、带着什么身份进去、过期后怎么退出。**

Context Window 是模型一次请求能处理的最大上下文范围。窗口越大，能放进来的资料越多，但不代表模型会完美使用每个细节。

长上下文常见的问题是“看见了但没抓住重点”。如果你把合约源码、审计报告、治理讨论和交易日志全部塞进去，模型可能被无关内容分散注意力，也可能引用过期段落。

一个稳定的工具型 Agent 上下文，通常不只是“用户问题 + 一段 JSON”。它还应该包括：

-   当前任务状态
    
-   工具返回结果
    
-   相关日志或证据
    
-   可信数据来源
    
-   外部检查结果
    
-   用户原始意图
    
-   系統禁止事項和輸出 schema
    

Memory 是跨请求保留的信息，例如用户偏好、历史任务、常用钱包、Memory 不能替代实时授权。用户过去允许某个动作，不代表现在仍然允许。\*\*所有涉及身份、权限、资产或外部副作用的记忆，都必须重新绑定当前会话和当前授权。\*\*项目配置、上次分析结果。

Knowledge Base 是系统可检索的外部知识库，比如产品文档、SDK 文档、代码说明、论坛讨论、FAQ、内部 runbook。

为“钱包授权检查 Agent”设计一份 context spec。

选择一个场景：用户问“这个 dApp 要我 approve，可以签吗？”你需要列出模型回答前必须拿到的上下文：

-   chain id 和当前区块
    
-   token 合约、spender 地址、approve 数量
    
-   用户当前 allowance 和余额
    
-   spender 是否在可信列表
    
-   simulation 或静态检查结果
    
-   dApp 页面提供的说明，标记为不可信外部内容
    
-   用户本次意图
    

再写清楚哪些字段必须实时查询，哪些可以来自缓存，哪些不能被模型当成事实。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->























ReCt跟 Function Calling 的差別 看語言當初怎麼季季

ReCt會自己去想但不可控

Function Calling 會實際調用MCP 產出內容較明確

NL2SQL > 

今天有提到一個 "Playwright"  你可以先看一下, 這個做 E2E 用途

**1\. Playwright（網頁自動化測試框架）**

如何讓web去跟webapi不斷自動化測試?  

E2E 測試的概念是「從頭到尾走一遍」，模擬真實使用者的流程，而不是只測一個函式（Unit Test）或一個 API（Integration Test）。

例如：

早期透過爬蟲

2025使用微軟的工具play write MCP

現在用play wirter CLI

Claude → MCP Server → Playwright → 真實瀏覽器

\>>>

2025

建構虛擬機>>控API讓他可以動  
先讀懂API

知識拓譜去理解code 跟code 的關聯，郭sir是指底層跟底層的關聯，

code跟code 的知識拓譜連結寫成mermaid的格式，

爬完>整理>文件

讀取文件>看該怎麼改
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->

























### **參考 / 先修教程**

[inute Blitz](https://docs.pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html)

[Tensors — PyTorch Tutorials](https://docs.pytorch.org/tutorials/beginner/blitz/tensor_tutorial.html)

### **下一個要接的主題：Natural Language Processing (NLP)**

natural language processing (NLP)

NLP 不僅限於書面文本。它還解決了語音識別和計算機視覺中的複雜挑戰，例如生成音頻樣本的轉錄或圖像描述。

**例如，當我們讀到「我餓了」這句話時，我們很容易理解它的意思。同樣，給定兩個句子，例如「我很餓」和「我很傷心」，我們可以輕鬆確定它們的相似程度。對於機器學習 (ML) 模型，此類任務更加困難。文本需要以一種使模型能夠從中學習的方式進行處理。**

### **Transformers：核心概念與 pipeline()**

Transformers 庫中最基本的對象是 **pipeline()** 函數。它將模型與其必要的預處理和後處理步驟連接起來，使我們能夠通過直接輸入任何文本並獲得最終的答案：

from transformers import pipeline translator = pipeline("translation", model="Helsinki-NLP/opus-mt-fr-en") translator("Ce cours est produit par Hugging Face.")

​

### **里程碑**

**2018 年 6 月**: [**GPT**](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf), 第一個預訓練的 Transformer 模型

### **Transformer 是大模型：為什麼要「共享 + 微調」**

**Transformer是大模型**

除了一些特例（如 DistilBERT）外，實現更好性能的一般策略是增加模型的大小以及預訓練的數據量。

Transformers是由一個團隊領導的（非常大的）模型項目，該團隊試圖減少預訓練對環境的影響，通過運行大量試驗以獲得最佳超參數。

想象一下，如果每次一個研究團隊、一個學生組織或一家公司想要訓練一個模型，都從頭開始訓練的。這將導致巨大的、不必要的浪費！

這就是爲什麼共享語言模型至關重要：共享經過訓練的權重，當遇見新的需求時在預訓練的權重之上進行微調，可以降低訓練模型訓練的算力和時間消耗，降低全球的總體計算成本和碳排放。

例如，可以利用英語的預訓練過的模型，然後在arXiv語料庫上對其進行微調，從而形成一個基於科學/研究的模型。

微調只需要有限的數據量：預訓練模型獲得的知識可以“遷移”到目標任務上，因此被稱爲_遷移學習_。

### **Transformer 模型的一般架構**

**Encoder (左側)**: 編碼器接收輸入並構建其表示（其特徵）。這意味着對模型進行了優化，以從輸入中獲得理解。

**Decoder (右側)**: 解碼器使用編碼器的表示（特徵）以及其他輸入來生成目標序列。這意味着該模型已針對生成輸出進行了優化。

**依任務類型選用的模型家族**

**Encoder-only models**: 適用於需要理解輸入的任務，如句子分類和命名實體識別。

**Decoder-only models**: 適用於生成任務，如文本生成。

**Encoder-decoder models** 或者 **sequence-to-sequence models**: 適用於需要根據輸入進行生成的任務，如翻譯或摘要。

**注意力層（Attention Layer）**

注意力層可以使用一個句子中的所有單詞（正如我們剛纔看到的，給定單詞的翻譯可以取決於它在句子中的其他單詞）。

然而，解碼器是按順序工作的，並且只能注意它已經翻譯過的句子中的單詞。

例如，當我們預測了翻譯目標的前三個單詞時，我們將它們提供給解碼器，然後解碼器使用編碼器的所有輸入來嘗試預測第四個單

### **架構與參數（Architecture vs. Checkpoints vs. Model）**

在本課程中，當我們深入探討 Transformers 模型時，您將看到「架構、參數和模型」這些術語。它們的含義略有不同：

**架構（Architecture）**：這是模型的骨架 — 每個層的定義以及模型中發生的每個操作。

**Checkpoints**：這些是將在給架構中結構中加載的權重。

**模型（Model）**：這是一個籠統的術語，沒有「架構」或「參數」那麼精確：它可以指兩者。爲了避免歧義，本課程使用將使用架構和參數。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->


























今天主要是看LLM的課程，因為Web之前上過課比較熟悉，明天應該會架好agent，但今天上課聽得好像用Cladude code就可以配上hrmers 的skill  
LLM =   **Large  Language  Model**

## 核心概念

-   LLM = **Large Language Model**（大型語言模型）
    
-   特色：參數量可達**數十億～數千億**，能在大量文本中學到語言模式
    

## 訓練流程（最小必要直覺）

### Step 1：Pretraining（預訓練）

-   用大量語料做「下一個 token / 字詞」預測（自監督學習）
    
-   需要大量 GPU 訓練資源
    
-   2017 後 Transformer 成為主流架構
    

### Transformer 為何關鍵（直覺版）

-   **Attention**：讓模型在讀一句話時，能把注意力放在與當前字詞最相關的上下文，進而理解語意關聯
    
-   **可擴展性**：相較傳統 RNN 類模型，更能把在訓練中學到的語言模式「存得住、放得大」，因此更容易擴到更大模型與更長上下文
    

### Step 2：對齊 / 微調（人工標註）

-   透過人工標記「有意義 / 無意義」或「較好 / 較差」的回答，讓模型更符合人類偏好（常見做法：SFT、RLHF 等）
    

-   Pretraining / Transformer 架構概念
    
-   人工標註與對齊流程
    
-   模型可儲存更多語言模式（容量 / 表徵能力）
    

## Hugging face

## 你需要懂的 PyTorch 核心（不需要更多）

import torch x = torch.tensor(\[1.0, 2.0, 3.0\])

x.shape # 形狀

x.dtype # 資料型別

[x.to](http://x.to)("cuda") # 搬到 GPU（如果有）

| 層次 | 需要嗎 |
| --- | --- |
| 知道 tensor 是「裝數字的多維陣列」，類似 numpy array | ✅ 必須 |
| 懂 shape、dtype 代表什麼 | ✅ 必須 |
| 懂為什麼要 .to("cuda") | ✅ 最好懂（GPU 加速） |
| 懂底層記憶體怎麼存 | ❌ 不需要 |

2) Dataset / DataLoader（資料怎麼被「批次」餵進模型）

### 只要知道概念即可

```python
from torch.utils.data import DataLoader, Dataset
# 你懂得「資料如何被切成 batch 丟進 model」就夠了
```

### 需要的直覺

| 層次 | 需要嗎 |
| --- | --- |
| 知道資料會被切成一批一批（batch）餵給模型 | ✅ 必須 |
| 知道 batch_size 是什麼意思 | ✅ 必須 |
| 自己實作一個 Dataset class | ❌ 不需要（Hugging Face 會幫你） |

## 3) 前向傳播（Forward pass）：`output = model(input)`

### 最小會用（必備）

```python
output = model(input)   # 就是這樣呼叫模型
```

### 需要的直覺

| 層次 | 需要嗎 |
| --- | --- |
| 知道這行的意思是「把資料丟進模型，得到預測結果」 | ✅ 必須 |
| 知道模型內部有很多層（layers）在做矩陣運算 | ✅ 最好懂 |
| 懂每一層的數學公式 | ❌ 不需要 |

## 4) 訓練迴圈（最重要）

### 你一定要懂的 4 行（背後邏輯）

```python
optimizer.zero_grad()   # 清掉上一輪的梯度，否則會累加
loss = criterion(output, label)
loss.backward()         # 反向傳播：算出每個參數對 loss 的影響（梯度）
optimizer.step()        # 根據梯度更新參數（讓模型變好一點）
```

### 需要的直覺

| 層次 | 需要嗎 |
| --- | --- |
| 懂「模型預測 → 算誤差 → 反向傳播 → 更新參數」這個循環 | ✅ 必須 |
| 知道 loss 越小代表模型越好 | ✅ 必須 |
| 懂梯度下降的直覺（往坡度最陡的方向走） | ✅ 必須 |
| 會推導反向傳播的微積分 | ❌ 不需要 |
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
