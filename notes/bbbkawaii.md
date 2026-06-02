---
timezone: UTC+8
---

# bbbkawaii

**GitHub ID:** bbbkawaii

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-02
<!-- DAILY_CHECKIN_2026-06-02_START -->
学习了A2A的内容
<!-- DAILY_CHECKIN_2026-06-02_END -->

# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->

学习了x402 Paywall + CAW Agent
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->


学习了agent commerce
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->



学习了Chat Completion API
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->




使用 Hardhat 或 Foundry 完成最小合约开发、测试与部署
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->





学习了Cypherpunk相关的内容
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->






学习了一些 PM 角度的观点
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->







学习了 AI agent 的Long-term Memory 的一些机制
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->








学习OpenAI Agents SDK，尝试创建 agent
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->









学习的内容：x402Coinbase 和 Cloudflare 推出的、复用 HTTP 402 状态码的机器原生支付协议，处理的是单次、即时、小额的「按调用付费」场景。三者的分工大致是：ERC-8004 管「我是谁、你信不信我」，x402 管「按次付费的微支付」，ERC-8183 管「带交付与验收的复杂任务结算」
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->










了解了ERC-20、ERC-721 与 ERC-1155 协议的商业精髓
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->











了解了区块浏览器和测试网，包括以太坊目前最常用的两个主流测试网
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->












学习了 gas 机制，L1 和 L2 的关系，以及和 AI agent 的联系
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->













学习了区块链浏览器、钱包、信任机制、支付生命周期相关的概念
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->














笔记：Web3 资产控制的核心在于“私钥—算法—签名”的链条。私钥本质上是一串随机数，对于普通开发者而言，可以将 ECDSA 或 EDDSA 等签名算法视为一个“黑盒”，但必须深刻理解其输入输出。

-   **签名的本质：** 签名（Signature）既是交易意图的证明，也是身份认证的唯一凭证。区块链不认识你，它只认符合数学逻辑的签名。
    
-   **风险缓解策略：** 私钥丢失是不可逆的灾难。为了规避单点风险，架构师通常采用以下方案：
    
    -   **MPC 钱包（多方计算）：** 将私钥切片（如 Share 7, 8, 9），通过数学算法让多方协同生成签名，私钥明文从未在任何地方完整出现。
        
    -   **合约多签（如 Safe）：** 在链上运行一套逻辑程序，必须满足（如 2/3 或 3/5）的签名阈值方可执行操作。要理解 Web3 的运行，必须剖析交易（Transaction）的生命周期及其核心参数。在这里，资深架构师与初级开发者的区别体现在对细节的掌握：
        
        -   **Nonce 的多重面相：**
            
            -   **EVM 模型：** 采用账户模型，Nonce 必须是连续递增的整数，用于确保交易顺序与幂等性。
                
            -   **Tron 模型：** 虽兼容 EVM，但引入了最近区块哈希（Block Hash）机制来防止重复提交。
                
            -   **BTC 模型：** 采用 UTXO（现金模型），天生具备不连续性，每一张“钞票”只能用一次。
                
        -   **Gas 的演进：** 现代 Web3 开发必须熟悉 **EIP-1559** 协议，理解 Base Fee、Tip（小费）与 Max Fee 的平衡，这直接关系到系统的成本控制与交互速度。
            
        -   **Data 字段：** 这是让区块链成为“全球计算机”的关键。它类似于被解释器执行的 Python/Java 字节码，驱动着复杂的智能合约状态转移。
            
        -   **交易模拟（Simulation）：** 这是预防钓鱼攻击的最后防线。虽然 EIP-712 和 Personal Sign 提升了签名的可视化，但门槛依然过高。开发者应在签名动作触发前，强制进行模拟执行，查看预期的账户余额变动。**模拟必须在签名之前进行，否则会增加 signature 的暴露面，引发不可控风险。**
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
