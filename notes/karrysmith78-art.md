---
timezone: UTC+8
---

# karrysmith78-art

**GitHub ID:** karrysmith78-art

**Telegram:** @karryw77

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->
NaN.  **数据可信与共享**
      
      -   区块链记录数据的来源、使用和交易过程，保证数据真实性。
          
      -   AI 模型可以在此基础上安全地训练。
          
      -   例如：医疗数据上链 → 供 AI 模型训练 → 确保数据安全、合规。
          
NaN.  **去中心化 AI 市场**
      
      -   把 AI 模型、算力和数据打包成 NFT 或 Token 上链，形成 **AI 服务市场**。
          
      -   开发者可以把模型上传，用户用代币调用。
          
      -   项目案例：Ocean Protocol、SingularityNET。
          
NaN.  **AI + 智能合约**
      
      -   AI 可以作为 **去中心化预言机的补充**，给智能合约提供预测和决策支持。
          
      -   例如：AI 预测市场价格 → 智能合约根据结果自动清算。
          
NaN.  **生成内容 + NFT/元宇宙**
      
      -   AI 生成艺术品、音乐，上链铸造成 NFT，保证版权。
          
      -   AI 驱动的虚拟人、元宇宙 NPC 上链，具备数字身份。
          
NaN.  **AI 算力的去中心化**
      
      -   通过区块链把闲置 GPU 共享出来，形成 **算力市场**。
          
      -   类似去中心化版的“AI 云计算平台”。
          
      -   案例：Gensyn、Akash Network。
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->

### **1\. Maintainers（维护者）**

这些角色保证系统正常运行：

-   **Developers（开发者）**：负责编写和维护智能合约代码。
    
-   **Oracles（预言机）**：向系统提供链下价格数据（如 ETH/USD 价格），保证清算时有真实可靠的市场价格。
    
-   **Keepers（清算人）**：监控抵押仓位，当抵押不足时，触发清算机制，把抵押品卖出，维持系统稳定。
    

👉 可以理解为“**运维团队**”，保证 DAI 不会失控。

### **2\. Governors（治理者）**

这些角色决定系统的规则：

-   **MKR Holders（MKR 持有人）**：MKR 是 MakerDAO 的治理代币，持有人可以投票决定抵押率、利率、清算机制等参数。
    
-   **Risk Teams（风险团队）**：评估哪些资产可以作为抵押品、设定风险参数，保证系统不被高风险资产拖垮。
    

👉 可以理解为“**股东+风险管理部门**”，负责制定政策。

### **3\. Users（用户）**

真正使用 DAI 的人：

-   **Vault Owners（仓库拥有者）**：把 ETH、USDC 等资产抵押到协议中，生成 DAI。
    
-   **DAI Holders（DAI 持有人）**：使用、存储、交易 DAI 的人。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->


## **方式 A（优先）：用系统盈余缓冲 Surplus Buffer填坑**

-   协议平时会累积“盈余”（来自稳定费、PSM 手续费、RWA 收益等），先放进 **Surplus Buffer**。
    
-   如果某笔清算后仍有**缺口**（bad debt/系统赤字），就**先用缓冲里的 DAI**把缺口补上。
    
-   如果缓冲里的钱**足够**，事情到此结束。
    

## **方式 B（不足时）：启动债务拍卖 Debt Auction（Flop），增发 MKR 来补**

-   若 Surplus Buffer **不够**，协议会**增发 MKR**，通过**债务拍卖（flop）**把 MKR 卖给出价者，**换回 DAI**来填补缺口。
    
-   这等于把风险**摊给 MKR 持有者**（被动稀释），确保 DAI 背后资产仍然完备。
    

> 对应的三类拍卖你可以这样记：
> 
> -   **抵押物拍卖**：卖抵押物换 DAI（清算本身，Liquidations 2.0 用荷兰式 “clip”）。
>     
> -   **盈余拍卖（flap）**：当系统 DAI 过多、超过缓冲时，用 DAI **回购并销毁 MKR**。
>     
> -   **债务拍卖（flop）**：当出现赤字时，**增发 MKR** 卖出换 DAI 补洞。
>
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->



## **方式 A（优先）：用系统盈余缓冲 Surplus Buffer填坑**

-   协议平时会累积“盈余”（来自稳定费、PSM 手续费、RWA 收益等），先放进 **Surplus Buffer**。
    
-   如果某笔清算后仍有**缺口**（bad debt/系统赤字），就**先用缓冲里的 DAI**把缺口补上。
    
-   如果缓冲里的钱**足够**，事情到此结束。
    

## **方式 B（不足时）：启动债务拍卖 Debt Auction（Flop），增发 MKR 来补**

-   若 Surplus Buffer **不够**，协议会**增发 MKR**，通过**债务拍卖（flop）**把 MKR 卖给出价者，**换回 DAI**来填补缺口。
    
-   这等于把风险**摊给 MKR 持有者**（被动稀释），确保 DAI 背后资产仍然完备。
    

> 对应的三类拍卖你可以这样记：
> 
> -   **抵押物拍卖**：卖抵押物换 DAI（清算本身，Liquidations 2.0 用荷兰式 “clip”）。
>     
> -   **盈余拍卖（flap）**：当系统 DAI 过多、超过缓冲时，用 DAI **回购并销毁 MKR**。
>     
> -   **债务拍卖（flop）**：当出现赤字时，**增发 MKR** 卖出换 DAI 补洞。
>
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->





## **1\. 清算机制**

-   当抵押率过低时，系统会拍卖抵押物，确保 DAI 有足够资产支撑。
    
-   清算时：
    
    NaN.  抵押物被卖出。
          
    NaN.  偿还用户的 DAI 债务。
          
    NaN.  多余资产退还给用户。
          
-   如果清算不足，会由 **MakerDAO 的保险机制（Surplus Buffer / MKR 代币）**兜底。
    

* * *

## **2\. 稳定锚定机制（Peg Stability Module，PSM）**

-   DAI 通过市场机制保持与 1 美元挂钩，但也会有波动。
    
-   PSM 的作用是允许用户 **1:1 用 USDC、USDP 等稳定币兑换 DAI**，从而帮助 DAI 保持锚定。
    
-   例如：如果 DAI 价格高于 1 美元，用户会用 USDC 换 DAI 并卖出套利，价格回落；反之亦然。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->






DAI 是 **MakerDAO 协议**发行的去中心化稳定币，目标是锚定美元（1 DAI ≈ 1 USD）。它不同于 USDT、USDC 等中心化稳定币，不依赖单一公司储备，而是通过智能合约和抵押资产来维持稳定。

**核心机制：超额抵押**

-   用户需要将 **加密资产（ETH、WBTC、LST 等）**抵押到 Maker 协议的金库（Vault）中。
    

抵押率必须高于一定门槛（例如 150%），即：如果要借出 100 DAI，你至少需要抵押价值 150 美元的 ETH。

-   如果抵押物价格下跌，导致抵押率低于清算线（Liquidation Ratio），系统会触发清算机制。
    
-   针对质押的代币如果价格波动的非常大的话，他会导致质押率变得非常的大
    
-   抵押率=抵押的代币美元价格/你实际借出的dai币，如果小于150就会导致被清算
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
