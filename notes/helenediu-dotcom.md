---
timezone: UTC+8
---

# helenediu-dotcom

**GitHub ID:** helenediu-dotcom

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->
**概念部分**：完成了 Smart Contract 章节。理解了合约调用的完整链路：用户发起交易 → 钱包签名 → EVM 执行 → 状态写链上。记住了几个关键组件：

-   **Solidity**：合约开发语言，编译成字节码后部署
    
-   **EVM**：所有节点跑同一套虚拟机，保证执行结果一致
    
-   **ABI**：合约接口说明书，外部调用的"翻译层"
    
-   **Event**：合约向外部世界发信号的方式，不改状态但可监听
    
-   **Proxy Pattern**：合约不可修改，但可以通过代理模式实现升级
    

最有收获的是 AI × Web3 的分层设计思路：AI 做编排，钱包做授权，合约做执行，监控记录结果——AI 不直接持有执行权，每层都有人类或可验证机制兜底。

**实践部分**：完成了 MetaMask 全流程

1.  安装 MetaMask，创建钱包，备份助记词
    
2.  切换到 Sepolia 测试网
    
3.  用 Google Cloud Faucet 领取了 0.05 SepoliaETH
    
4.  发了一笔自转（0.001 ETH），在 Etherscan 上确认交易成功
    

Etherscan 上看到的信息让概念变得具体：Gas Fee 是真实存在的计算成本，7 个 block confirmations 对应"越多区块叠上去越不可逆"的描述，EIP-1559 是以太坊 2021 年升级后的交易格式。

## 遇到的卡点

领测试币时遇到了"需要主网 0.001 ETH"的要求，换了 Google Cloud Faucet 解决。提示：直接用 [https://cloud.google.com/application/web3/faucet/ethereum/sepolia，Gmail](https://cloud.google.com/application/web3/faucet/ethereum/sepolia%EF%BC%8CGmail) 登录即可，不需要主网余额。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->

\> 今天最大的理解：\*\*钱包不存钱，它存的是私钥\*\*。

区块链上的资产其实永远在链上，从未「在」某个钱包里。钱包只是保管私钥的工具——私钥能生成公钥，公钥能生成地址，地址才是链上资产的归属位置。所以钱包 App 删了、手机丢了，只要助记词还在，资产就还在。助记词是私钥的人类可读版本，两者本质等价，都要像真实的密码一样保护。

密码学这块让我意外的是：\*\*签名验证不需要私钥\*\*。任何人拿到公钥都能验证一条消息是不是你签的，但无法伪造你的签名——这个非对称性是整个 Web3 信任机制的核心。转账本质上就是：用私钥签一条「我要把 X 转给 Y」的消息，广播到网络，节点验证签名有效后记录上链。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->



今日学习：完成 AI 基础全部 11 个章节（LLM、Prompt、Context、RAG、Agent、Frameworks、Vibe Coding、MCP、Evaluation、Fine-tuning、Inference）

核心收获：这 11 个概念不是孤立的，而是一条完整链路——Prompt 定义任务，Context 提供信息，LLM 负责推理，RAG 补充外部知识，Agent 推进执行，Frameworks 组织工程，MCP 标准化工具接口，Evaluation 保证质量，Fine-tuning 调整行为，Inference 决定部署方式，Vibe Coding 是贯穿整个开发过程的工作方式。最重要的一个判断：模型输出是候选结果，不是事实本身；越靠近真实执行，越需要外部校验和人工确认。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->




参与了AI Agent入门——Hermes从0到1的直播分享，尝试进行用Claude code配置Learning Agent。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->





今日只简单学习了大语言模型，它不是真滴会聊天或知道答案，而是一个概率模型，其输出的结果并不是事实本身，需要我们去验证。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
