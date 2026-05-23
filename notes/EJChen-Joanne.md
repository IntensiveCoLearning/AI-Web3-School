---
timezone: UTC+8
---

# Joanne Chen

**GitHub ID:** EJChen-Joanne

**Telegram:** @joanne_ej_chen

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->
1.  回放今日分享會課程。
    
2.  整理好本週學到的AI、Web3知識點。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->

1.  復盤本週間課程及概念學習，準備週末可以補上本週尚缺內容：AI、Web3的知識解釋集錦、確定AI學習助手workflow
    
2.  參與同學筆記分享會和確立本次參與共學主要目標：本身Web3開發經驗，缺少AI Agent的實操和應用，先不以必須產出兩項技術交互的項目，我認為AI可以幫上我在每天非常多的Web3訊息內（訂閱的news、關注的），打造客製化的訊息流
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->


1.  智能合約複習、錢包知識學習。缺少AI輔助解釋交易內容、可視化簽名的步驟。
    
2.  每日接收非常多Web3的News，設計使用AI Agent整理每日訂閱內容 -> summary post-> 銜接各種premium post的機制
    
3.  參與今日分享會，新增Web3xAI Bridge知識閱讀。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->



1.  將handbook內容製作[學習卡](https://github.com/EJChen-Joanne/AI-Agent-Learning-Archive/blob/master/curriculums/terms.json)，並加入至learning bot的功能，可以在聊天機器人中做隨機的test。
    
2.  完成學習handbook中AI和Web3基礎的解釋。
    
3.  參與\[分享會\]，本身是Web3開發背景出身，很快速地過一次基本概念的復盤：
    

Web3 = Cryptography + Economics + Social Consensus
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->




將AIxWeb3School HandBook內容加入學習bot的學習資源，並產生一[每日重點整理。](https://github.com/EJChen-Joanne/AI-Agent-Learning-Archive/blob/master/curriculums/handbook.md)

\[分享會\] **探索AI Agent的新世界地圖**

分享人：Draken老師

1.  **AI的進化：**問答模式 ChatGPT -> 任務執行 Agent
    
2.  **AI常用類型**
    

-   聊天型AI: 常用的ChatGPT、Gemini、Claude
    
-   AI IDE: Cursor，AI的開發工具
    
-   CLI型: agents living in terminal
    
-   模型平台
    
-   Hermes Agent/OpenClaw
    

3.  **Hermes Agent**
    

-   Def: Agents' assitance
    
-   Pros: multi-models, Cron Scheduling, Gateway channels, long-term memory and iterated learning by itself.
    
-   Why Hermes Agent?
    
    -   Easy for beginner
        
    -   長期記憶能力、學習閉環
        

完成設定Telegram Learning Bot: /goal 、/notes指令，回傳每日學習目標及重點整理。

![S__473300995.jpg](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/EJChen-Joanne/images/2026-05-19-1779198588461-S__473300995.jpg)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->







1.  創建個人學習Github Repo，並讓Claude Code產生本週的[學習計劃表](https://github.com/EJChen-Joanne/AI-Agent-Learning-Archive/blob/master/curriculums/week1.md)
    
2.  **\[分享會\] AI時代，Web3開發者所需的能力**
    

-   **前言：**
    

Q1: 有了AI，是否還要學習基礎知識？

A: Of course, 有了AI，分析人與AI的專業邊界，人：設計方案，AI：協助人設計方案（細化方案、補足缺失、有效快速的方案執行），人應作為AI的審查者（AI並未降低複雜度）。

Q2: Web2 vs. Web3?

A: 沒有前端頁面、沒有好的後端管理服務，用戶是無法使用web3的，在web3的產品中，web2的佔比還是很大的，兩者並非互斥。

Q3: Web3上的安全

A: 在Web3內，涉及許多資金的交互，「安全」不是一個隨時加入的插件，而是設計的核心屬性。

-   **以支付系統作為例子：**
    

1\. In Web2: ex. Bank Transfer

各種請求流的服務之間API交互：

\- 請求流、資金流、安全檢查：KYC、服務之間的信任、密碼Permissions

\- 信任=>信任Institutional Backend

2\. In Web3: 擴展至穩定幣支付時

\- 抽象來看 將Bank Institution -replaced by-> Blockchain

\- Different Chain ~= Different Banks

\- 信任=>Transparency、Immutability、共識機制(PoW, PoS)、私鑰簽名

-   **錢包：**
    

1\. Def:

\- 錢包在Web3中扮演的是用戶的「身份」及「資產管理」=> 證明用戶行為的證明

\- 私鑰就是一串大數，透過數學的算法保證

\- message --input--> private key --output--> signature

2\. Category

\- EOA: Public+PrivateKey --> MCP 多簽

\- Smart Contract Wallet: ex. Safe (for Multi-sig)

\- AA: Combine EOA + Smart Account

\- 託管方式：自託管、全託管ex.Exchanger、Hybrid

3\. 錢包安全防線：

\- PrivateKey Leak

\- 簽名欺騙：eth\_sign禁用、簽名可視性低

\- 權限濫用

-   **Web3交易週期：構造->簽名->廣播**
    

交易的關鍵參數：

\- **gas**: 交易手續費（影響）

gas fee = gas count \* gas price

\- EIP-1559

\- **nonce**: 確保交易冪等

ETH => Account模型，default nonce排序

Tron/Solana => X nonce, sdk使用交易Hash確保

BTC => UTXO模型，cash只能用一次，原生冪等

\- Calldata: 鏈上交易的靈魂，可理解為interpreter，執行端會自行解析交易data

-   **交易模擬(Simulate)：**
    

1\. 在提交交易前驗證執行結果

2\. _必須在簽名前進行模擬_

-   **Web3 Server端的錢包安全**
    

1\. 資金量拆分，減少單點風險

2\. 私鑰保護 ex. TEE可信任空間，無任何暴露

_安全屬於Web3的核心要素_

-   **AI 的變與不變**
    

(變)1. Coding更快 放大了個人的能力

(不變)

1\. 系統的複雜度

2\. 錯誤成本: 人應確保AI安全是可控的

3\. 安全邊界

結論：我們駕馭AI，而不是被AI驅動！
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
