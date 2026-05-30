---
timezone: UTC+8
---

# Miachen111

**GitHub ID:** Miachen111

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->
先理解哈希是把任意数据变成固定长度指纹，用来验证数据是否一致。

Hash 函数会把输入数据映射成一段固定长度输出。理想情况下，哪怕输入只改一个字符，输出也会完全不同。链上常用哈希来标识交易、区块、数据承诺和合约字节码。

哈希不是加密。它通常不能被“解密回原文”，用途是验证同一性和完整性。比如你拿到一份合约源码，可以通过哈希或编译结果去检查它是否和链上部署代码一致。

常见用途包括：

-   交易哈希：定位一笔交易。
    
-   区块哈希：定位一个区块。
    
-   合约字节码哈希：检查部署代码是否一致。
    
-   数据承诺：先公布哈希，之后再公开原文让别人验证没有被改。
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->

先理解托管模型 API 的调用方式、参数、限制和成本结构。

API Model 指通过云端服务调用模型，例如把输入发送给模型提供方，再接收文本、结构化输出、工具调用结果或多模态结果。它的优势是上手快、模型更新快、基础设施负担低。

但 API 不等于“没有工程问题”。你仍然要处理速率限制、超时、重试、日志脱敏、账单控制、版本变更和输出回归。尤其是 Agent 场景，一次用户请求可能触发多轮模型调用，成本和延迟会被放大。
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->


SFT 是 Supervised Fine-Tuning，监督微调。它使用输入和期望输出样本，让模型学习某类任务的回答方式。

SFT 适合：

-   固定格式输出
    
-   特定语气或风格
    
-   特定任务流程
    
-   领域术语和回答习惯
    
-   工具调用样式
    

但 SFT 对数据质量非常敏感。如果样本里有错误、格式不一致、边界不清，模型会把这些问题学进去。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->



-   **工具要有 schema**：没有 schema，模型调用工具就会变成自然语言猜参数。
    
-   **权限要在协议外也成立**：协议能描述能力，但真正的授权、审计和隔离仍要由系统实现。
    
-   **错误要可传递**：工具失败、超时、权限不足，必须明确返回，而不是让模型猜。
    

Server 的设计重点是边界：

-   暴露哪些资源
    
-   哪些工具只读，哪些有副作用
    
-   参数 schema 是否清楚
    
-   错误如何返回
    
-   是否需要用户授权
    
-   日志和审计在哪里记录
    

好的 schema 不只是字段类型，还要说明：

-   这个工具什么时候用
    
-   参数代表什么
    
-   哪些字段必填
    
-   是否会修改外部状态
    
-   失败时返回什么
    

剛好在寫schema 很有用的資訊
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->




**github vibe coding** 把 AI 生成的改动放回版本控制、issue、PR 和 review 流程里，而不是只看一次聊天输出。

GitHub 和 `gh` CLI 是 AI Coding 工作流里的协作边界。Agent 可以帮你看 issue、生成 branch、读 PR diff、写提交信息、整理 review，但版本控制仍然是人类审查的关键线。

一个实用原则：**让 Agent 多做局部 patch，少做不可追踪的大改动。**

每次改动后至少看：

-   `git diff`
    
-   修改文件列表
    
-   测试结果
    
-   是否包含不该提交的密钥、日志、构建产物
    

最近在練習這個 剛好學到
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->





LLM 一次回答问题，通常只是在生成文本。Agent 更进一步：它可以拆任务、查资料、调用 API、写代码、生成操作草稿、等待反馈再继续下一步。

Tool Use

Agent 从“会回答”变成“能做事”

今天在vscode裝了個gemini agent

之前的hermes agent 應該也屬於這個
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->






llm rag實作

rag 開書考試 找資料給llm回答 有相關資料 回答更準確

文檔怎麼切

讀文件 切小塊

fixed chunking 切的頭跟尾留著 通順

hierarchical chunking

semantic chunking

llm parsing 有結構的切

token embedding(詞轉高維空間向量)=詞嵌入

每個token都是一個向量

向量運算

語言模型理解詞之間的關係 語言之間的關係

向量資料庫 vector database

retrieval檢索 用cos 相似度算

增強 augment 參考了資料準確回答不瞎掰

fine tuning 特定領域訓練微調 調教他 動到原本的權重 會忘掉原本會的東西

Prompt engineering 提升輸出 提示詞作優化

rag 不動大腦 只外接資料庫

gemini 底層rag 丟檔案給他讀=外接資料庫

上下文窗口 文件大也能承受 語言模型增強 rag被替代
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->







助記詞丟了 私鑰全丟

資產不在錢包 實際上帳本跟數據在區塊鏈上

私鑰不是普通密碼 丟了找不回

交易 授權網路執行的事 要做的事 手續費 nonce(帳號發送的第幾筆交易，交易成功後加一，防重複執行) 簽名(驗證對應私鑰授權)

拿到私鑰有可能被仿簽

gas fee 手續費 防免費資源被濫用

wallet簽名 RPC node傳播 排隊 排序(看誰交錢多誰先 錢太少上車了還會被踢出去) 出塊 可查詢

block num

PoW BTC 誰先解出誰記帳

PoS ETH 偽隨機

錢包不直接連外網

智能合約

客戶端
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->








裝完hermes 用ollama裝

去ai web3 school那個網站讀了llm

embedding: code 轉向量 看語意接近不接近

hallucination: 幻覺 外部校驗
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->









\--7:00--

windows 子系統是wsl 跟虛擬機、docker 兩回事

先裝hermes 讓hermes安排學習地圖 裝不起來明天課會教

\--8:00--

對支付服務而言，web3用不用沒差

錢包 身分與資產管理 私鑰驗證，私鑰always不變 signature消息不同，簽名不同

鏈只認私鑰， 私鑰丟了喪失絕對控制權，別人能搶

eoa錢包 MPC多簽，把eoa切成很多塊

合約錢包 合約多簽

自託管錢包(取決於自己，愛幹啥幹啥) 全託管錢包(交易所，錢包控制權在交易所那，要做啥跟交易所說，有可能交易所跑路) 混和託管(常規方法，自己跟交易所都要，缺一個都完成不了)

多簽 硬件 隱私 分層(b2b b2c)

私鑰洩漏、簽名欺騙(eip712簽名可視化 被釣魚簽名) 權限濫用 安全理論(自己要懂)

錢包 交易、信息 私鑰簽名交易 廣播交易 給web3 block chain認 鏈上監聽 解析block上的交易 檢測到用戶轉帳，但不馬上幫用戶轉，要等block confirm 等鏈長度足夠長(block夠多) 錢到位

gas誰先上鏈(gas count 價高者先) nonce(連續的順序遞增) calldata(鏈上應用核心 instruction 鏈的生態 百花齊放 python code /java code 彙編)

風險控制:在簽名前先模擬 簽名後模擬沒用，且簽名已在流轉 誰都看的到

server: visualization approval simulation(not signature yet) signature(tee1 tee2對芯片)
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
