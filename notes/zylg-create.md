---
timezone: UTC+8
---

# zylg-create

**GitHub ID:** zylg-create

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-02
<!-- DAILY_CHECKIN_2026-06-02_START -->
1
<!-- DAILY_CHECKIN_2026-06-02_END -->

# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->

听讲座，写黑客松计划书
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->


筹备黑客松
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->



忙着收拾东西，思绪很乱，先打个卡
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->




## **今日目标**

-   复盘 X 跟单机器人文章
    
-   反思"聪明钱"跟踪策略的局限性
    
-   构思 hackathon 自动交易钱包方案
    

## **学习内容**

### **主要收获**

**跟单策略的反思**

-   **跟单机器人永远比人快** —— 即使做到毫秒级，机器人之间的竞争是基础设施军备竞赛
    
-   **幸存者偏差严重** —— X 上高收益帖子多为骗子或极端案例
    
-   **个人跟踪"聪明钱"也亏损** —— 根源：信号源质量差、延迟、执行滑点
    

**新思路：不跟快钱，只吃中间段**

-   **核心逻辑**：筛选"中等速度 + 稳定逻辑"的钱包
    
    -   中等速度：不是最快，但也足够快（避开散户）
        
    -   稳定逻辑：单次收益率 ≥50% 作为硬门槛
        
    -   一致性：追踪逻辑稳定性，而非单次爆发
        
-   **策略目标**："吃鱼只吃中间一段" —— 放弃头尾高风险段
    
-   **辅助判断数据**：
    
    -   持仓周期
        
    -   Gas 费模式（判断是否机器人化）
        
    -   链上签名频率
        

**Hackathon 方案构思**

两个模块解耦：

**模块一：量化执行层**（hackathon 主打，更性感）

-   信号筛选引擎：筛选"中等速度 + 高胜率"钱包
    
-   钱包执行层：自动跟单 + 风控（止损/止盈）
    
-   技术栈：链上数据 API + 钱包 SDK + 策略引擎
    

**模块二：空投农夫层**（扩展故事，更稳定）

-   多链交互量刷单
    
-   空投申领自动化
    
-   收益可预期，风险较低
    

### **遇到的问题**

-   跟单策略核心问题是信号源质量，而非执行速度
    
-   快钱策略门槛高（基础设施竞争），普通人不适合
    

### **解决方案**

-   转向"中等速度 + 高胜率"信号源筛选
    
-   Hackathon 主打量化执行层，空投农夫作扩展
    

## **实验记录**

待周末开始写 hackathon 计划书

## **明日计划**

-   开始撰写 hackathon 计划书
    
-   调研链上数据 API（DeBank / Nansen / Dune）
    
-   调研钱包 SDK（RainbowKit / wagmi / viem）
    
-   竞品分析（现有的量化跟单/信号产品）
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->





## **今日目标**

-   学习量化基础知识（动量、反转）
    
-   体验 OKX 钱包一键跟单功能
    
-   思考毫秒级跟单方案
    
-   完成实验笔记整理
    

## **学习内容**

### **主要收获**

**量化：动量 vs 反转**

-   **动量效应 (Momentum)**：过去涨的继续涨，典型 CTA 策略基础，适合中期（周/月）
    
-   **反转效应 (Mean Reversion)**：价格偏离均值会回归，适合短期（秒/分钟），RSI 是典型指标
    
-   加密市场动量更短暂，信息传导更快，反转信号窗口更窄
    
-   经典文献：Jegadeesh & Titman (1993) 月度动量；长期(3-5年)反转更明显
    

**OKX 一键跟单痛点**

-   端到端延迟 200ms ~ 3s+
    
-   来源：服务器接收 → 风控处理 → 信号转发 → 执行，链路长
    
-   波动行情中延迟导致严重滑点
    

**毫秒级跟单架构思路**

-   **信号获取**：WebSocket 实时推送（<10ms），避免轮询
    
-   **执行层**：异步下单 + 预签名 + HTTP Keep-Alive 复用
    
-   **延迟瓶颈**：网络延迟 > 订单处理延迟，优化重点在同区域托管
    
-   **技术栈**：Python asyncio / Go（高性能）；Redis Pub/Sub 做进程间通信
    
-   **核心公式**：`总延迟 = 网络延迟 + 信号处理 + 订单签名 + API响应`
    

### **遇到的问题**

-   一键跟单延迟无法满足高频策略需求
    
-   Python GIL 在高频场景是瓶颈
    

### **解决方案**

-   探索程序化跟单：WebSocket 接收 + 异步下单
    
-   参考 Hummingbot 开源框架
    

## **实验记录**

详细实验笔记见： `experiments/2025-05-27-quant-momentum-reversal-copytrading.md`

### **核心代码片段**

```
# 动量因子
def momentum_factor(prices, lookback=20):
    return prices.pct_change(periods=lookback)

# 均值回归因子（Z-score）
def mean_reversion_factor(prices, window=20):
    ma = prices.rolling(window).mean()
    std = prices.rolling(window).std()
    return (prices - ma) / std

# 毫秒级跟单：异步下单框架
async def place_order(self, inst_id, side, sz):
    # 预签名 + 连接池复用
    await self.place_order(...)
```

## **明日计划**

-   深入研究 OKX WebSocket API 文档
    
-   用 Demo 账号测试 WebSocket 接收延迟
    
-   对比 Backtrader 动量/反转策略回测效果
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->






## **今日目标**

-   参加 Agent Wallet 讲座
    
-   将 Hermes Agent 接入 Cobo Agentic Wallet
    
-   完成链上实际操作（转账、Swap）
    
-   探索 Agentic Wallet 与黑客松项目的结合点
    

## **学习内容**

### **主要收获**

-   **Agent Wallet 核心概念**：深入学习了 Cobo Agentic Wallet 的关键机制：
    
    -   **Pact**：策略委托协议，定义 Agent 可执行的操作范围和有效期
        
    -   **Policy**：链上访问控制策略，支持 allowlist、deny\_if、review\_if 多层控制
        
    -   **Approval**：审批流程（未配对时在对话内自动批准；配对后由用户在手机 App 审批）
        
    -   **caw CLI**：完整的命令行工具，支持 tx call、pact submit、util eth-call 等操作
        
-   **Agent 钱包集成**：成功将 Hermes Agent 连接至 Cobo Agentic Wallet，创建了专属 Agent 钱包
    
    -   BSC 地址：`0xed788dbae5ea12300e55cc3fad31dc19f8aeebeb`
        
    -   支持 12 条链（ETH、Arbitrum、Optimism、Base、BSC、Polygon、Solana 等）
        
    -   EVM 链共用同一地址，Solana 链使用独立地址
        
-   **链上操作实践**：
    
    -   查询了 BSC-USDT 余额（10 USDT）和 WBNB/PancakeSwap 合约地址
        
    -   通过 `caw util eth-call` 验证了 PancakeSwap V2 路由合约 `0x10ED43Cb5f7A9d50Dea8C4d2F6b0FeD8DeD12A2c` 在 BSC 上可用
        
    -   成功创建并提交 Pact，执行 approve 授权流程
        
-   **重要教训**：BSC 链上操作需要 BNB 支付 gas 费，钱包必须保持一定的 BNB 余额
    

### **遇到的问题**

-   **gas 费问题**：钱包 BNB 余额为 0，导致 approve 交易失败（insufficient balance for gas）
    
-   **跨链桥探索**：原计划将 BSC-USDT 跨链到 ETH 主网换成 ETH，因知识库无相关配方而放弃，改用 BSC 链上 swap 方案
    

### **解决方案**

-   使用 BSC 链内 swap 方案（PancakeSwap V2），避免跨链桥复杂度
    
-   充值少量 BNB（建议 0.01 BNB）后即可完成所有操作
    

## **实验记录**

### **Cobo Agentic Wallet CLI 操作**

```
# 初始化环境
bash ~/.hermes/skills/cobo-agentic-wallet/scripts/bootstrap-env.sh --only caw

# 钱包状态
caw status

# 查询 USDT 余额
caw wallet balance --chain-id BSC_BNB --token-id BSC_USDT --address 0xed788dbae5ea12300e55cc3fad31dc19f8aeebeb

# 创建 Pact
caw pact submit --intent "..." --policies '...' --completion-conditions '[...]' --execution-plan "..."

# 提交合约调用
caw tx call --chain-id BSC_BNB --contract 0x55d398326f99059ff775485246999027b3197955 --calldata 0x... --pact-id <pact-id>
```

### **关键合约地址（BSC）**

| 用途 | 地址 |
| --- | --- |
| BSC_USDT | 0x55d398326f99059ff775485246999027b3197955 |
| WBNB | 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c |
| PancakeSwap V2 Router  PancakeSwap V2 路由器 | 0x10ED43Cb5f7A9d50Dea8C4d2F6b0FeD8DeD12A2c |

## **明日计划**

-   充值 BNB 后完成 USDT→BNB Swap 操作
    
-   探索 Agentic Wallet API 与黑客松项目的结合点
    
-   研究更多链上自动化操作场景
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->







打卡，试一下我的Hermes Agent部署的Github仓库是否成功

话说ai真是好用
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->








收集资讯，学习英语
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->









加了小伙伴脑暴，在想项目最终的实现方式，如果能直接接入币安和okx钱包那就太好了。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->










今天参加了周会分享，认识了很多志同道合的小伙伴，有技术大佬，感觉这是实力最强的一次黑客松阵容!
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->











我的First Agent又进了一步，可以抓取实时数据了，下一步应该让他分析一些数据，生成一些投资小白能看懂的信号。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->












废了九牛二虎之力终于将Hermes与飞书连接上了，主要是上班一直挂着Telegram不太方便，算是我在agent方面迈出的第一步。

用的都是minimax的模型，但我怎么感觉Hermes的响应速度比open claw慢很多？

开始大力磨合。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->













明晚回家安装Hermes，可以用来比较一下和open claw有什么区别。

AI的应用试过很多，但还没有真正用来提高效率，我感觉我的输入有问题。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->














听了tc老师分享的安全相关的知识，钱包确实是非常重要的工具。

两天听下来觉得自己Web3方向扎实一点，我会先加强AI方向。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
