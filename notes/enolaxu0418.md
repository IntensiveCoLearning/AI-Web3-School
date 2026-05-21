---
timezone: UTC+8
---

# enolaxu

**GitHub ID:** enolaxu0418

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
| 方向 | 解决什么问题 | 主案例 | 核心原理 |
| --- | --- | --- | --- |
| 1. 去中心化 AI 基础设施 | 算力、存储、模型服务如何组织与激励 | Bittensor | Subnet 定义任务 → Miner 提供服务 → Validator 评估质量 → 链上共识 → Token 奖励优质供给 |
| 2. AI Agent + 钱包 | AI 如何获得链上执行能力 | Coinbase AgentKit | LLM 拆解任务 → AgentKit 选 action → 钱包签名广播 → 链上结果返回 |
| 3. AI 链上分析工具 | 公开的链上数据如何变成可理解的情报 | Arkham | 地址聚类 → 实体归因 → 资金流追踪 → 生成画像和告警 |
| 4. 智能钱包 & 安全助手 | 普通用户如何安全签名、防钓鱼 | Blockaid | 扫描域名/合约 → 模拟交易 → 匹配恶意模式 → 钱包拦截或警告 |
| 5. 交易所/DeFi 风控 | 机构如何发现异常交易和系统性风险 | Chainalysis | 采集多链数据 → 实体归因 + 风险分类 → KYT 实时监控 → 告警处置 |
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->

### 关键配置项

| 配置项 | 说明 | 推荐值 |
| --- | --- | --- |
| tools | 工具白名单 | 审查类用 Read, Grep；执行类用 Read, Write, Edit |
| disabledTools | 禁用工具 | 审查任务禁用 Write, Edit |
| model | 模型选择 | 简单任务用 haiku；复杂分析用 sonnet/opus |
| description | 功能描述 | 明确说明何时触发该 Agent |
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->


## 支付系统：从Web2到Web3

**Web2支付（银行转账）**

-   信任银行和支付服务商
    
-   请求流：电商平台 → 支付服务 → 银行
    
-   资金流：用户账户 → 支付服务账户 → 商户账户
    
-   安全问题：API Key、支付密码、相互信任
    

**换成Web3（稳定币支付）**

-   从银行到区块链
    
-   不同链 = 不同银行
    
-   信任基础变了：从信任权威 → 信任算法（数据不可篡改、逻辑即代码、共识协议）
    
-   认证方式：从API Key → **私钥签名**
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
