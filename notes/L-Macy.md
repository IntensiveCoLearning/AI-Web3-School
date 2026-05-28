---
timezone: UTC+8
---

# Macy

**GitHub ID:** L-Macy

**Telegram:** @web3macy

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->
1\. 核心问题定义挑战：将 Web3 操作封装为 LLM 可安全调用的标准化 Tools，同时确保权限边界清晰、执行条件明确、用户确认机制完善。关键技术难点：

-   工具粒度平衡（过粗失控，过细复杂）
    
-   权限分类体系
    
-   安全边界（不暴露私钥）
    
-   链上状态一致性
    

范围：

-   In-Scope：Web3 工具设计、权限分类、Agent-钱包交互模式、MCP 协议应用
    
-   Out-of-Scope：智能合约开发、链下数据处理、密钥管理、多签实现
    

2\. 系统架构核心模块Web3 Tools（主要工具）：

-   read\_balance：读取余额
    
-   simulate\_transaction：交易模拟（不上链）
    
-   estimate\_gas：Gas 估算
    
-   request\_signature：请求用户签名
    
-   submit\_transaction：提交交易
    

权限等级：

![🔵](https://abs.twimg.com/emoji/v2/svg/1f535.svg)

ReadOnly：无需确认

![🟡](https://abs.twimg.com/emoji/v2/svg/1f7e1.svg)

UserConfirmationRequired：需用户确认

![🔴](https://abs.twimg.com/emoji/v2/svg/1f534.svg)

ForbiddenAutoExecution：禁止自动执行架构层级（数据流）：

-   用户层 → 钱包授权
    
-   Agent 层（LLM + Tool Executor + State Tracker）
    
-   工具层 → RPC 调用
    
-   链上层（区块链）
    

3\. 工具定义与权限矩阵（核心表）

| 工具名称 | 功能描述 | 权限等级 | 用户确认 | 自动执行 | 安全等级 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| read_balance | 读取余额 | ReadOnly |   |   | 低 | 公开数据 |
| simulate_transaction | 交易模拟 | ReadOnly |   |   | 低 | 预检安全 |
| estimate_gas | Gas 估算 | ReadOnly |   |   | 低 | 有误差 |
| request_signature | 请求签名 | UserConfirmation |   |   | 中 | 必须等待用户 |
| submit_transaction | 提交交易 | ForbiddenAuto |   |   | 高 | 必须前置签名 |

形式化定义（简版）：

-   ReadOnly：不修改状态
    
-   UserConfirm：需用户输入
    
-   Forbidden：禁止 Agent 自动执行
    

4\. 交互流程（状态机）典型时序：

1.  只读流程：Agent → ToolExec → RPC → 返回结果（无用户干预）
    
2.  写操作流程：
    
    -   Agent 调用 submit\_transaction → 权限检查失败 → 返回需授权
        
    -   调用 request\_signature → 钱包弹出确认框 → 用户批准 → 签名 → 提交上链
        

状态阶段：

-   Initiation：解析任务、准备参数
    
-   Verification：权限检查
    
-   Commitment：实际执行
    
-   Reporting：结果格式化并更新上下文
    

5\. Agent 决策与优化工具选择决策树：

-   查询类 → ReadOnly 工具
    
-   执行类（改状态） → 必须走 request\_signature + submit\_transaction
    
-   用户拒绝 → 授权失败
    

MCP 协议集成：

-   标准化 Tool Schema
    
-   上下文桥接（链上数据、钱包状态注入）
    
-   统一结果序列化 { success, data, error? }
    

优化策略：

-   批量只读合并（减 RPC 60%+）
    
-   Gas 缓冲 + 自动调整
    
-   签名超时（5min）+ pending 状态
    
-   缓存（余额 30s，模拟 5min）
    

6\. 安全漏洞与边界处理三大关键漏洞：

1.  自动交易执行：恶意 Prompt 导致资产转移 → 强制前置签名检查
    
2.  RPC 数据不可信：单一节点被攻击 → 多 RPC 交叉验证 + 新鲜度阈值
    
3.  签名钓鱼：不可读 message → 提供人类可读交易摘要（地址、金额、函数名）
    

边界场景：

-   无效地址 → 返回格式化 error
    
-   超大数据 → 设置上限
    
-   用户无响应 → 超时 + pending
    
-   链上拥堵 → 加速/取消机制
    
-   高频提交 → Rate Limit
    

7\. 学术/技术标签

-   Web3 Tool Use
    
-   MCP Protocol
    
-   Permission Matrix
    
-   Agent Security
    
-   Human-in-the-Loop
    
-   Gas Estimation
    
-   Smart Contract Interaction
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->

1\. 以太坊底层架构核心概念（Co-learning: Ethereum Whitepaper & Architecture）L1 与 L2 的职能解耦

-   Layer-1（以太坊主链）：负责最终结算（Finality） 与 最高级别安全共识。提供全局状态根、数据可用性与不可篡改性，是整个生态的安全锚点。
    
-   Layer-2（Rollups）：承担扩容重任。通过异步计算（off-chain execution）+ 数据压缩（仅将必要数据或状态差量提交至 L1），实现高吞吐量与低成本。
    
    -   优势：继承 L1 安全，同时大幅降低 Gas 费用与延迟。
        
    -   典型形态：Optimistic Rollups 与 ZK-Rollups。
        

轻节点（Light Client）同步机制

-   工作原理：仅下载区块头（Block Header），不下载完整区块数据。
    
-   通过完整节点提供的 Merkle 证明验证交易/状态的有效性。
    
-   意义：极大降低硬件需求（手机、边缘设备即可运行），是推动以太坊去中心化向移动端、IoT 普及的关键基础设施。
    
-   未来方向：Helios、Nimbus 等轻客户端实现将进一步降低参与门槛。
    

London 升级 & EIP-1559（2021）

-   引入 Base Fee（基础费用）动态调整 + 销毁机制。
    
-   核心影响：
    
    -   Gas 费率更具可预测性（不再是纯拍卖模式）。
        
    -   ETH 通缩压力增强（高活动期大量 Base Fee 被销毁）。
        
-   实战价值：为云端高频运行的多智能体量化交易系统（如 Aegis-Node）提供稳定、低成本环境，显著降低执行磨损与费用不确定性。L2 + EIP-1559 组合成为高频策略落地的先决条件。
    

2\. Neo-Cypherpunk 与隐私设计哲学课程隐私的文化层

-   隐私不再只是密码学工具堆砌（ZKP、环签名等），而是 Builders 必须内置的产品思维。
    
-   核心理念：隐私是产品体验的底层组成部分，而非事后补丁。
    

从绝对隐匿 → 可选择性披露

-   早期 Cypherpunk：追求绝对黑盒（完全匿名）。
    
-   新密码朋克（Neo-Cypherpunk）：在合规需求与用户隐私之间寻找动态平衡。
    
-   关键能力：用户可自主决定披露哪些信息、何时披露、向谁披露（Selective Disclosure）。
    

抗 MEV 与意图保护（Intent Protection）

-   MEV 问题：链上复杂金融策略的 Alpha 因子极易被搜索者（Searchers）与机器人捕获、抢跑（Front-running / Sandwich）。
    
-   隐私层解决方案：本质上在链上构建暗池（Dark Pool）。
    
-   GhostSwap 等隐私协议的核心价值：
    
    -   不仅仅是资金混淆（Tornado Cash 式）。
        
    -   更重要的是为高频量化策略、跨链路由提供意图保护（Intent-level privacy）。
        
    -   防止交易意图在被执行前暴露，从而保护策略 Alpha。
        

隐私设计实践要点

-   将隐私视为特性而非功能，在架构设计初期就嵌入。
    
-   结合 ZKP、MPC、多方计算、Threshold 加密等工具，实现“可见但不可知”。
    
-   在 DeFi 场景中，尤其需要保护订单流、路由路径、仓位策略等敏感意图
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->


核心目标：为 Agent 构建高质量、可追溯的上下文，建立「来源类型 → 刷新频率 → 引用规范」的决策框架。1. 来源可信度三级分级

-   L1（高稳定）：静态文档（Handbook、Wiki、官方文档）  
    刷新：月/季度 | 特点：确定性高，但可能滞后
    
-   L2（半动态）：课程内容、社区讨论、白皮书  
    刷新：周/日 | 特点：需交叉验证
    
-   L3（实时）：链上数据（余额、交易、合约事件、Gas）  
    刷新：秒/分钟 | 特点：时效性强，但依赖数据源可靠性
    

2\. 来源类型快速对比

-   L1：结构化、权威、离线可读 → 适合概念学习
    
-   L2：实践性强、有引导 → 适合案例与经验
    
-   L3：实时、不可篡改 → 适合状态查询，但需 RPC/索引器
    

3\. RAG 来源管理协议（核心流程）

1.  Query 分类：判断是 Factual / Conceptual / Action + 是否需要实时性
    
2.  检索策略：
    
    -   实时需求 → 优先 L3（Chain RPC + 验证）
        
    -   稳定需求 → L1（Handbook）+ L2（WCB）
        
3.  上下文融合：添加 Source Tag + Confidence Score
    
4.  输出：带 Citation 的回答
    

来源标注规范：

-   \[H:doc\_name\] → Handbook
    
-   \[W:course\_id\] → WCB 课程
    
-   \[C:chain:address\] → 链上合约
    
-   \[C:tx:hash\] → 交易记录
    

4\. 引用决策树（Checklist）

-   数据是否时间敏感？
    
    -   是 → 链上？→ 用 RPC + 带 block# + timestamp + confirmations ≥ 1
        
    -   否 → 概念题？→ 用 L1 + L2
        
-   通用验证：版本时间、权威性、交叉验证、变更历史、解析一致性
    

5\. 上下文质量公式Context Quality(t) = α·Freshness + β·Completeness + γ·Correctness  
（α+β+γ=1）不变量：链上数据 Freshness < 0.5 时强制刷新。6. 刷新频率决策表（实用）

| 数据类型 | 刷新策略 | TTL |
| --- | --- | --- |
| 合约 ABI | 首次读取 + 手动 | 无上限 |
| 代币余额 | 按需实时查询 | 即时 |
| Gas 价格 | 实时查询 | <1 分钟 |
| 概念定义 | 静态引用 | 无需刷新 |

示例回答：

当前 ETH 余额为 1.234 ETH（\[C:chain:0x...\]，区块 #12345678，2026-05-27）

7\. 安全风险与防御

-   RPC 不可信 → 指定可信节点（Alchemy/Infura/自建）
    
-   缓存过期 → 加 TTL + last\_fetched
    
-   链重组 → 要求 confirmations ≥ 1
    
-   Fallback：主源失败 → 次要源 → 全部失败则返回 “Data Unavailable”
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->



nthropic 认为，Memory（记忆） 是继 MCP、Claude Code/Agent SDK、Skills 之后，下一个关键的 Agent Primitive。为什么重要？  
传统 Agent 只是“调用工具 + 执行技能”，而 Memory 让 Agent 真正具备持续学习能力：

-   从自身任务、环境反馈、失败经验中学习
    
-   从其他 Agent 的工作中学习
    
-   支持长时间运行 + 多 Agent 并行的复杂任务
    

这才是真正走向“组织级智能体”的关键一步。

* * *

Anthropic Memory 的设计重点（企业级文件系统）把记忆抽象成 Agent 自主管理的文件系统，并注入企业级能力：

-   权限范围（Permission Scopes）：精细控制谁能读写哪些记忆
    
-   乐观并发（Optimistic Concurrency）：支持高并发安全更新
    
-   版本历史（Version History）：完整变更追踪
    
-   归因元数据（Attribution Metadata）：记录每条记忆来自哪个 Agent、哪个 Session
    
-   独立 API：Memory 可被单独调用和管理
    

目标：让上百到上千个 Agent 安全地共享、实时更新、审计同一套记忆库，实现真正意义上的集体智能。

* * *

即将发布的重磅功能：Dreaming

-   本质：一个异步后台过程（类似“做梦”）
    
-   工作内容：
    
    -   读取近期所有 Agent Sessions / Transcripts
        
    -   自动发现：
        
        -   共性错误（Common Pitfalls）
            
        -   有效策略（Winning Patterns）
            
        -   重复/过期的记忆
            
    -   生成可审核的 Memory Diff（差异建议）
        
-   核心价值： 把单个 Agent 的局部经验，快速沉淀为组织级知识，第二天所有 Agent 都能直接复用。  
    → 实现真正的知识飞轮和集体进化。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->




1.Blocks（区块）

-   出块时间：每个 Slot 为 12 秒，一个区块通常在一个 Slot 内由随机选出的 Validator 提议。
    
-   功能：将大量交易批量打包成链，留出足够时间让全网达成共识。
    
-   类比：快递攒够一波再发车，而不是每件快递单独发一趟车。
    

Proof of Stake（PoS 权益证明）

-   Validator 机制：需质押 32 ETH 作为押金（Stake）。
    
-   惩罚机制：作恶（如双签、离线）会被 slash（罚没） 部分或全部押金。
    
-   最终性（Finality）：Casper-FFG 机制，约 2 Epoch（约 12.8 分钟） 后区块实现最终不可逆。
    
-   分叉选择：LMD-GHOST 算法，用于在分叉时选择主链。
    
-   核心解决：谁有权写入 + 防止恶意行为。
    

EVM（Ethereum Virtual Machine）

-   本质：一个全球分布式状态机。
    
-   核心公式：Y(S, T) = S'（给定当前状态 S 和交易 T，产生新状态 S'）。
    
-   关键特性：确定性 —— 全网所有节点执行同一字节码，必须得到完全相同的结果。
    
-   类比：同一个 Excel 公式，所有人打开文件后计算结果必须一致。
    

Gas（燃料 / 计算资源计量）

-   作用：
    
    -   防止无限循环或资源耗尽攻击。
        
    -   对计算资源进行精确定价。
        
-   费用结构：
    
    -   Base Fee：基础费用，被 burn（销毁），调节网络拥堵。
        
    -   Priority Fee（Tip）：小费，支付给打包的 Validator。
        
-   Gas Limit：交易设置的最大 Gas 上限，防止意外高消耗。
    
-   类比：医院按检查复杂度收费，防止病人挂号后一直占着机器不走。
    

* * *

2\. Ethereum 分层架构（简洁版）

| 层级 | 名称 | 主要组件 | 核心职责 |
| --- | --- | --- | --- |
| L5 | 应用层 | dApps / 前端 UI | 用户交互入口 |
| L4 | 账户层 | EOA / Smart Account | 签名、支付、权限控制 |
| L3 | 执行层 | EVM + Gas | 一致执行合约 + 资源约束 |
| L2 | 协议层 | Blocks + Consensus (PoS) | 批量打包、共识、防止分叉 |
| L1 | 网络层 | P2P Gossip | 节点发现、广播、同步 |

* * *

3\. 进阶挑战 1：各组件解决的核心问题

| 组件 | 解决的问题 | 类比 |
| --- | --- | --- |
| Blocks | 交易量大，无法逐条实时确认 | 快递攒够一波再发车 |
| Consensus (PoS) | 谁来写入 + 防止分叉/作恶 | 押金制度 + 抽签记账 + 罚款 |
| EVM | 全网状态必须保持一致 | 同一个 Excel 公式，所有人算出相同结果 |
| Gas | 防止无限计算 + 资源公平定价 | 医院按复杂度收费 |

* * *

4\. 四者完整协作流程

1.  用户用钱包 签名交易（账户层）。
    
2.  交易被 Validator 打包进 Block（协议层：确定顺序和批量确认）。
    
3.  EVM 执行 合约字节码（执行层：确定性状态转换）。
    
4.  Gas 计量 本次执行消耗（资源层：定价 + 防止滥用）。
    
5.  状态变更写入链上，全网通过 P2P 同步。
    

* * *

5\. 进阶挑战 2：链上执行 vs 普通后端调用

| 维度 | 普通后端调用 | 链上执行（Ethereum） |
| --- | --- | --- |
| 数据所有权 | 开发者/公司控制数据库 | 全网共识，无单点控制 |
| 修改权限 | 可随时改代码、回滚 | 部署后只能按原逻辑，不可随意修改 |
| 故障恢复 | 数据库回滚、重发请求 | 不可回滚，只能发新交易修复 |
| 执行成本 | API 计费或免费 | 按 Gas（计算量）付费，可能超出预期 |
| 状态范围 | 私有 | 公开全局状态，所有人可读取 |

关键差异总结：

-   链上执行 = 不可逆的全局状态写入 + 全网验证 + 资源付费，三者缺一不可。
    

eth\_call 的特殊性：

-   它是一个只读模拟执行：不写链、不消耗 Gas、不需要签名。
    
-   而真实交易（eth\_sendTransaction）必须钱包签名、支付 Gas、等待区块确认，结果不可逆。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->





1.核心摘要（一句话记住）AI Agent 在链上操作时最核心的安全威胁有三大类：私钥泄漏、恶意授权、不可信 RPC 数据源。  
核心防御思路是：物理人在回路 + 多源 RPC 跨校验，建立多层安全底线。

2\. 三大核心威胁（必须死记）

| 威胁类型 | 定义简述 | 生活类比 | 防御核心原则 |
| --- | --- | --- | --- |
| Private Key Leak | 私钥暴露在 Agent 环境中 | 保险柜钥匙挂电线杆 | 零明文、永不进入内存 |
| Malicious Approval | 给合约无限/过大授权 | 把无限额信用卡给陌生人 | 最小授权原则 |
| Untrusted RPC | RPC 返回被篡改的数据 | 导航被黑，带你开下悬崖 | 多源交叉验证 |

3\. 重要概念 & 不变量（核心理论）

-   Physical Human-in-the-Loop：高价值操作必须人工审批（物理人在回路）
    
-   KMS / MPC / Multi-Sig：三种主流私钥安全方案
    
-   最小授权原则：金额上限 + 时间上限，双重约束
    

系统三大不变量（形式化）：

1.  任何交易输入不能包含明文私钥
    
2.  所有授权必须有金额和时间上限
    
3.  多 RPC 节点返回必须一致，否则标记异常
    

4\. 安全执行流水线（最实用部分）

```text
输入请求 → 威胁检测 → 权限校验 → 数据验证 → 沙箱模拟 
                    ↓
               人工审批节点
                    ↓
               执行 / 拒绝
```

每个步骤检查什么：

-   威胁检测：私钥暴露识别
    
-   权限校验：授权范围是否过大
    
-   数据验证：多 RPC 一致性
    
-   沙箱模拟：交易预执行 + 风险评估
    

5\. 工程落地分阶段目标短期：

-   基础私钥暴露检测
    
-   多节点 RPC 监控告警
    
-   接入 Tenderly 沙箱
    

中期：

-   KMS / MPC 集成
    
-   多签钱包 + 自动化审批流
    

长期：

-   自适应安全策略引擎
    
-   跨链安全态势感知
    
-   零知识证明集成
    

6\. 典型漏洞 & 防御（VULN-001~003）

-   VULN-001 私钥泄漏：配置、日志、环境变量最容易漏 → 用 KMS + 硬件隔离
    
-   VULN-002 恶意授权：钓鱼合约常见 → 永远只做有限额度 + 限时授权
    
-   VULN-003 RPC 攻击：单节点最危险 → 必须多节点 + 异常检测
    

7\. 边界场景重点记忆

1.  高频微交易：可批量合并，减少人工审批，但要设单笔+总额限制
    
2.  RPC 节点不可用：自动切换备用节点，降级时必须人工确认
    
3.  复杂合约调用：沙箱必须全量模拟调用链，异常即阻断
    

私钥隔离是绝对红线，授权最小化是基本准则，多源验证是数据可信的保障。Agent 再聪明，也不能让它“拿着你的银行卡和密码”在链上随便跑，必须始终保持人在回路 + 多重验证的防御姿态。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->






今天的学习让我把 Web3 基础知识重新串成了体系，也第一次更清晰地把 AI 和 Web3 结合到实际项目里。我一边复习了区块链机制、智能合约、DeFi 生态与常见安全问题，一边动手做了一个 Web3 AI Assistant，完成了安全审计、合约生成、合约解释和 Gas 优化 4 个核心工具，并通过测试脚本验证了整体功能。这次实践让我意识到，专业 Agent 的价值不在“什么都能做”，而在于聚焦真实场景、沉淀领域知识、提供高频且实用的能力；同时也更深刻地理解了智能合约安全的重要性，以及 AI 在开发中的正确定位是“增强效率、辅助判断”，而不是替代开发者。下一步，我希望继续探索静态分析与 AI 结合、链上数据查询以及 RAG + Web3 的应用，逐步把这个方向做得更深入、更系统。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->







今天把精力主要放在 Hermes Agent 上，这是 AI x Web3 School 官方推荐的启动入口 Agent（和 Claude Code / Codex 并列，但 Hermes 被特别突出）。它不是普通的聊天机器人，而是一个自改进、持久记忆、能长期陪伴学习的个人 AI Assistant，非常适合 builders 把 Handbook 知识真正落地成行动和项目。

Hermes Agent 核心亮点（为什么适合这个学习计划）：

-   自改进学习循环：内置 closed learning loop，能从每次交互中自动创建/优化 skills、持久化知识、建立对你的长期用户模型。
    
-   跨会话记忆：支持 Telegram 控制、可部署在 VPS / 云上 24/7 运行，不依赖本地电脑。
    
-   灵活模型支持：可切换 Nous Portal、OpenRouter、z.ai/GLM、Moonshot 等任意模型。
    
-   工具与自动化：适合处理 Web3 Tool Use、Agent Workflow、权限管理等复杂任务。
    
-   开源且社区活跃：由 Nous Research 开发（有 Web3 背景），GitHub 星标爆炸式增长，适合开源沉淀学习过程。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->








核心观点（Slide重点）

-   Thinking in Web3
    
-   在AI时代，Web3开发者不能只满足于“会用框架、会调用API”
    
-   必须具备更扎实的基础知识 + 更强的系统架构能力
    

关键能力要求：

1.  基础知识：区块链原理、密码学、共识机制、智能合约安全、去中心化身份等
    
2.  架构能力：系统设计、可扩展性、跨链交互、安全审计、用户体验与链上链下结合
    
3.  AI时代新要求：AI辅助开发 + Web3安全 + 实际业务落地能力
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
