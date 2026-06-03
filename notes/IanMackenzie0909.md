---
timezone: UTC+8
---

# Ian Mackenzie

**GitHub ID:** IanMackenzie0909

**Telegram:** @Newt_Scamender

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->
## 1\. 📝 EIP-7702：讓 EOA 接上智能帳戶能力

原本：

```text
EOA = 私鑰簽名 + 直接送交易
Smart Account = 合約驗證 + 可程式化邏輯
```

EIP-7702 的方向是：

```text
EOA + authorization / delegation
→ 暫時具備智能帳戶能力
→ 透過 UserOperation 流程執行
```

白話說就是：

> **原本普通錢包地址，也可以透過授權方式「暫時穿上智能帳戶外衣」。**

它讓 EOA 有機會支援：

-   批次交易
    
-   gas sponsor
    
-   權限降級
    
-   UserOperation 流程
    
-   更接近 Web2 的操作體驗
    

* * *

## 2\. 💰 Sponsored UserOp：把 gas 問題藏到後面

Sponsored UserOp 的重點是：

```text
UserOperation + Paymaster
```

也就是使用者不一定要自己付 ETH gas。

流程變成：

```text
使用者操作
→ 產生 UserOperation
→ Paymaster 判斷是否贊助
→ Bundler 送出
→ 使用者完成操作
```

這對 UX 很關鍵，因為 Web3 新手最常卡在：

-   沒 ETH
    
-   不懂 gas
    
-   不想先去交易所買幣
    
-   被多次簽名嚇跑
    

所以 Sponsored UserOp 的本質是：

> **讓鏈上操作更像一般 App：點下去就完成，而不是先搞懂 gas。**

* * *

## 3\. ⛓️ L2 / RIP-7560：AA 的未來會更原生化

ERC-4337 現在是用「應用層 workaround」達成智能帳戶：

```text
UserOperation → Bundler → EntryPoint → Smart Account
```

但 RIP-7560 想做的是：

```text
Native AA Transaction → 鏈本身直接支援智能帳戶交易
```

也就是把 Account Abstraction 從「外掛式架構」推向「鏈原生能力」。

差別是：

| 現在 ERC-4337 | 未來 RIP-7560 |
| --- | --- |
| 需要 EntryPoint | 不一定需要 |
| 需要 Bundler | 可能由原生 mempool / proposer 處理 |
| 是應用層方案 | 是協議層 / L2 原生方案 |
| 現在可用 | 需要 L2 升級支援 |

> **ERC-4337 是現在能用的 AA；RIP-7560 是未來更原生、更有效率的 AA。**

* * *

## 4\. 🌿 Core Standards：AA 不是單一技術，而是一組規格生態

| 標準 | 核心意思 |
| --- | --- |
| ERC-4337 | 現在主流的智能帳戶架構 |
| ERC-7562 | 保護 Bundler / Mempool 的安全規則 |
| EIP-7701 | Ethereum L1 原生 AA 的方向 |
| RIP-7560 | L2 / Rollup 原生 AA 的方向 |
| RIP-7711 | Native AA 的 mempool 傳播規則 |
| RIP-7712 | 多維 nonce，讓智能帳戶能平行處理不同任務 |

最重要的是：

> **ERC-4337 解決「現在怎麼做」；  
> EIP-7702 解決「EOA 怎麼過渡到智能帳戶」；  
> RIP-7560 / EIP-7701 解決「未來鏈要怎麼原生支援 AA」；  
> ERC-7562 / RIP-7711 / RIP-7712 解決「安全、mempool、nonce 管理」這些基礎設施問題。**

* * *

KEY TAKE AWAY：

> -   **EIP-7702 讓 EOA 也能接上 AA**
>     
> -   **Sponsored UserOp 讓 gas 體驗更接近 Web2**
>     
> -   **L2 / RIP-7560 讓 AA 往鏈原生化演進**
>     
> -   **Core Standards 則是整個 AA 生態的標準路線圖**
>     

Notion: [https://rainy-cry-c97.notion.site/3687c68bd87f81e3bf12d2e29a00d03c?pvs=74](https://rainy-cry-c97.notion.site/3687c68bd87f81e3bf12d2e29a00d03c?pvs=74)
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->

## 1\. Smart Account：錢包變成「可程式化帳戶」

ERC-4337 最核心的改變是：  
使用者不再只能用 **EOA 私鑰帳戶**，而是可以用 **合約錢包 Smart Account**。

代表錢包可以內建：

-   社交恢復
    
-   多簽
    
-   Passkey / 生物辨識
    
-   Session key 臨時授權
    
-   批次交易
    
-   權限控管
    
-   模組化功能擴充
    

Take away：

> **Smart Account 讓錢包從「一把私鑰」變成「可寫邏輯的使用者帳戶」。**

* * *

## 2\. UserOperation + Bundler + EntryPoint：新的交易流程

ERC-4337 不是讓使用者直接送一般交易，而是改成送出：

> **UserOperation = 使用者想讓智能帳戶執行的操作請求**

流程變成：

```
UserOperation
→ Bundler 收集與模擬
→ EntryPoint 統一驗證
→ Smart Account 執行操作
```

其中：

-   **Bundler** 負責收集、模擬、打包 UserOperation。
    
-   **EntryPoint** 是鏈上的統一入口，負責驗證、執行、結算 gas。
    
-   **Smart Account** 則決定這筆操作是否合法。
    

Take away：

> **ERC-4337 把「直接送交易」改成「送 UserOperation，由 Bundler 打包，再交給 EntryPoint 統一處理」。**

* * *

## 3\. Paymaster：讓使用者不一定要自己付 ETH gas

Paymaster 是 ERC-4337 改善使用者體驗的關鍵，讓：

-   使用者沒有 ETH 也能操作
    
-   dApp 幫新手補貼 gas
    
-   使用 ERC-20 token 支付 gas
    
-   特定活動、白名單、訂閱用戶享有 gas sponsor
    

Paymaster 卻也是安全風險最高的部分，因為它本質上是在**替別人付錢**，所以必須有：

-   quota
    
-   deadline
    
-   nonce
    
-   防重放
    
-   rate limit
    
-   deposit / stake
    
-   風控與監控
    

Take away：

> **Paymaster 解決的是「誰來付 gas」的問題，讓 Web3 體驗更接近一般 App。**

### 智能帳戶的目的，是在不改變區塊鏈去中心化帳本本質的前提下，把原本難用、慢感強、需要多次簽名與 gas 操作的 Web3 交易流程，抽象成更接近 Web2 App 的使用體驗。

智能帳戶 (Notion)：[https://rainy-cry-c97.notion.site/3687c68bd87f81e3bf12d2e29a00d03c?source=copy\_link](https://rainy-cry-c97.notion.site/3687c68bd87f81e3bf12d2e29a00d03c?source=copy_link)
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->


# 私鑰的意義：**揭開個人主權的序幕**

## 隨機創建 → 立即擁有

# 區塊鏈網路運行

一筆交易從發起到完成，需經歷完整的生命周期：**Wallet**（簽名）→ **RPC/Node**（傳播）→ **Mempool**（排隊等待）→ **Builder/Validator**（挑選打包）→ **Block**（寫入區塊）→ **Explorer**（公開可查）。

### Web3 關鍵特性

| 特性 | 說明 |
| --- | --- |
| 去中心化 | 錢包創建高度去中心化；交易廣播與 RPC 入口存在中心化風險；節點與客戶端越分散越安全 |
| 無許可 | 任何人都可讀寫網路，寫入只需支付 Gas |
| 抗審查 | 節點全球分布，錢包、前端、RPC 皆可替換 |
| 開放開源 | 客戶端開源，交易記錄公開可查，透明且可審計 |
| 隱私（演進中） | 現為公開帳本加偽匿名，地址可被關聯分析；ZK 等隱私方案仍在持續發展 |

### **Web3 就是用私鑰簽名證明你的身份，用共識網路保證帳本可信，用智能合約讓規則自動執行。**
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->



（先聽我嘮叨會：前兩天一直不知道去哪打卡🥹一直在任務區裡翻找，找了個寂寞🤣。今天終於發現要在哪點到了😭我是不是快被淘汰了🥲）

# 1\. Web3 的本質是「讀、寫、擁有」

**Web1 是讀，Web2 是讀寫，Web3 則多了 Own 的權利，也就是擁有權。**

重點不是都搬到鏈上，是讓使用者透過錢包、「Token」　、「NFT」　、「DAO」　、鏈上身份，自己掌握數位資產與部分網路的權力。

# 2\. Web3 開發是將後端重新拆分

Web3 的前端仍然很像傳統 Web2，但後端一部分會變成：

**_智能合約 + 錢包 + RPC + Indexer + 去中心化儲存 + Oracle_**

也就是說，Web3 開發者不只要會寫網頁，還要理解哪些邏輯該放在鏈上，哪些資料與服務還是要走鏈下。

# 3\. Web3 最大價值是降低對中心平台的依賴，但代價是複雜度與安全風險

**Web3 帶來去中心化、無需許可、原生支付與可驗證規則，但也伴隨：**

-   使用門檻高
    
-   Gas 成本
    
-   智能合約不可隨便修
    
-   私鑰遺失無法救回
    
-   合約漏洞可能直接造成資產損失
    

所以 Web3 不是比較潮的 Web2，而是**一種把所有權、信任與資產邏輯重新設計的架構**。

有興趣的朋友可以看一下我整理的 Notion Page: [Web3 開發概述](https://rainy-cry-c97.notion.site/Web3-3667c68bd87f81969166c839f3cfa0d2)

English version: [Web3 Development Overview](https://rainy-cry-c97.notion.site/Web3-Development-Overview-3667c68bd87f81ee8db5d3369f0f8e24)
<!-- DAILY_CHECKIN_2026-05-20_END -->
<!-- Content_END -->
