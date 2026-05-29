---
timezone: UTC+8
---

# milli

**GitHub ID:** tz-hao

**Telegram:** 

## Self-introduction

学习

## Notes

<!-- Content_START -->
# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->
```
传统以太坊的痛点：

  EOA（私钥账户）:
    ❌ 丢失私钥 = 丢失全部资产
    ❌ 只能 ETH 付 gas（不能用 USDC）
    ❌ 没有权限控制（单签）
    ❌ 不能批量交易（多步操作要多次签名）
    ❌ 没有社交恢复 / 多签 / 限额

  智能合约钱包：
    ✅ 可以做到以上全部
    ❌ 但合约不能发起交易——必须有人用 EOA 触发
```

**ERC-4337 的答案**：让智能合约钱包自己"发起"交易——不是真的发起（那需要改协议层），而是通过一个替代 mempool（Alt Mempool）把用户的意图打包，由 Bundler 代为提交到链上。
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->

```
线 1：Agent 怎么做事？
  ├── MCP  → Agent ↔ 工具（发现 + 调用）
  ├── A2A  → Agent ↔ Agent（通信 + 协作）
  └── Z.AI Web Search → 托管搜索（MCP 的替代/补充方案）

线 2：做事之后怎么结算？
  ├── x402      → 支付（HTTP 层即时付款）
  ├── MPP       → 支付（Session 微支付，Stripe 出品）
  ├── ERC-8004  → 身份 + 声誉（你是谁、可信吗）
  └── ERC-8183  → 交易 + 结算（Escrow + Evaluator + Arbiter）
```
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->


# **MCP 远程服务器连接**  
**三种传输协议**

```
stdio                   Streamable HTTP          SSE (旧版，已废弃)
───────                 ────────────────         ──────────────────
本地子进程              远程 HTTP 单端点           远程双端点
无网络依赖              可过防火墙/负载均衡          GET /sse + POST /message
免认证                  支持 OAuth 2.1             需要两个端口
延迟最低                支持 session 恢复           不支持 session 恢复
Claude Desktop 默认     Lambda/SaaS 首选           2024-11 提出，2025-03 被取代
```

### **传输选择决策树**

```
服务器在哪里？
  ├── 本地本机 → stdio
  └── 远程/云端
        ├── 自己新写的 → Streamable HTTP（唯一推荐）
        └── 接已有旧服务 → SSE（兼容过渡，计划迁移）
```
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->



## **提示工程（让Agent从“靠运气”到“稳定可控”）**

### **1\. 系统提示符与用户提示符**

| 层 | 放什么 | 更新频率 | Web3类比 |
| --- | --- | --- | --- |
| 系统提示 | 角色、规则、工具说明 | 几乎不变 | 契约代码——行为定义边界 |
| 用户提示 | 具体任务、数据 | 各自不同 | 交易calldata——每次不同输入 |

**核心原则**：把“你是谁”“不能克”放系统，把“这次克”放用户。混着放→代理随任务变来变去，“看心情”遵守规则。

### **2\. 构造输出**

令Agent波形能力被程序解析，不能靠“感觉”：

| 方式 | 做法 | 适用场景 |
| --- | --- | --- |
| Markdown 规定 | 约定格式，则提取 | 简单的场景，够用就行 |
| JSON 模式 | 强制只输出JSON | 程序消费，但会降低推理质量 |
| 函数调用 | 重构输出重构参数 | 最可靠（部分模型支持） |
| 约束编码 | token生成阶段强制语法 | 100%合格，企业级 |

> **Web3类比**：Markdown ≈ 注释写接口文档（看人品），JSON 模式 ≈ ABI 编码，约束解码 ≈ solc 编译器（语法层保证）。

> **经验法则**：能用函数调用的用函数调用，不能用JSON模式，别用正则硬解析自然语言。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->




## **深度知识：Agent 架构模式**

> 补充 Handbook 没覆盖的工程层面知识

### **决策循环三模式**

| 模式 | 一句话 | Web3 类比 |
| --- | --- | --- |
| ReAct | 想一步，做一步，看一眼，再想一步 | 手动盯盘，边看边交易 |
| Plan-Execute | 先画完整地图，再逐步执行 | TWAP 定投，定好计划自动跑 |
| Multi-Agent | 多个 Agent 分头干活，统一汇报 | DAO 工作组分工 |

-   ReAct 是 Hermes 的底层模式（Thought → Action → Observation 循环）
    
-   死循环的根源：Agent 无法区分"没查到"和"方法不对"
    
-   解决：设最大步数、要求 Agent 换思路、工具返回加元数据
    

### **Multi-Agent 深入**

**任务分配**：

-   Centralized（Orchestrator 说了算）→ 实用，90% 的系统用这个
    
-   Decentralized（Agent 自己商量）→ 灵活但协调成本高
    

**拆分维度**：

-   按领域：Solidity 写手 / 前端写手 / 审计 → 适合并行任务
    
-   按阶段：研究 → 策略 → 执行 → 验证 → 适合流水线任务
    

**安全保障（三道防线）**：

1.  Orchestrator 做 sanity check
    
2.  独立 Reviewer Agent 审查
    
3.  涉及钱的留给人类确认
    

**经验法则**：能用一个 Agent 搞定的，不要用多个。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->





今天学习了一下web3xai有一些大概的总结：从 Agent Workflow 的 human-in-the-loop，到 Escrow 的多签仲裁，到 Sovereignty 的一键 kill switch，到 Governance AI 的「AI 不替你做投票建议」——**自动化程度越高，撤回机制必须越强**。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->






上午听了一下直播，感觉还是有点蒙  
  
**学习了Machine Payment（机器支付）**  
**核心理解**

**普通支付**：人 → 打开钱包 → 填地址 → 输金额 → 签名 → 等确认。每笔都要人。

**机器支付**：

-   机器 A（Agent）需要调机器 B（API 服务）的接口
    
-   一次调用 0.005 USDC，一天可能调几百次
    
-   人不可能守在旁边每笔确认
    
-   必须有自动化支付通道
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->







**1\. Web3 Tool Use（学完）**  
\- 工具分层：只读（RPC/Contract Read）↔️ 写交易（Contract Write/Wallet）必须硬分离  
\- 写交易前 7 步检查链：chain id → 合约地址 → ABI → value → gas → simulation → policy+确认  
\- 核心认知：Web3 工具比普通 API 调用高一个风险量级，工具设计本质是「模型能力 vs 确定性边界」的权衡  
  
**2\. Agent Workflow（开篇）**  
\- Task Graph：把目标拆成节点+依赖，每步定义输入/输出/权限/失败处理  
\- State Machine：Agent 要知道自己在哪个状态，交易 pending 时不"失忆"  
\- Human-in-the-loop：只读自动、小额放行、高风险必确认、越权直接拒
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->








核心收获：  
1\. Web3 工具必须**读写分离**——读链和写链是不同工具、不同权限，不能混在一个"万能 RPC"里  
2\. 写交易前需要完整的 7 步检查链：chain id → 合约 → ABI → value → gas → simulation → policy  
3\. 工具权限应该分层：查询自动允许 → 小额 session key → 大额必须人工确认 → 任意调用默认禁止  
4\. 日志是 Agent 行为的可审计基础——每次调用都要记录"模型看到了什么、调用了什么、用户确认了什么"
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->









今天听了一下web3的课，这些概念都懂算是巩固一下基础了
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->










今天终于把hermes弄好，也学习了一些ai的知识
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->











今天去研究了一下codex，昨天也听了一下开营仪式，下了一下hermas使用还是有一点问题还在研究中
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
