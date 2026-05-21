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
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
## **7\. DAI 储蓄率（DAI Savings Rate, DSR）**

-   用户可以将 DAI 存入 DSR 合约，获得利息。
    
-   利率由治理设定，收益来源于借款人支付的稳定费。
    
-   DSR 机制让 DAI 持有者可以无风险获得被动收益。
    

* * *

## **8\. 风险控制**

-   **抵押率要求**：不同资产有不同的最低抵押率。
    
-   **债务上限（Debt Ceiling）**：控制某类资产最多能借出多少 DAI，避免系统过度依赖单一资产。
    
-   **全局清算（Emergency Shutdown）**：极端情况下，系统可以强制关闭，用户可按比例赎回抵押物。
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
