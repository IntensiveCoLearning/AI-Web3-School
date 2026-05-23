---
timezone: UTC-11
---

# Oris

**GitHub ID:** xyyccc

**Telegram:** @xyyccc

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->
## **今日学习内容**

精读了 AI × Web3 Bridge 前三章：

### **1\. Chain-aware Context（链感知上下文）**

-   核心：让 AI 在回答前能看见正确的链、地址、合约、交易、事件、余额、授权和数据来源
    
-   关键原则：模型不能凭语言记忆判断链上事实，必须从工具和索引层读取
    
-   7 个知识节点：On-chain Data、Contract Docs、ABI/Event、Transaction History、Explorer Context、Indexing Context、Citation
    
-   每条关键结论必须附带 citation（链上证据：tx hash、block number、contract address、explorer link）
    

### **2\. Web3 Tool Use（Web3 工具调用）**

-   核心：将 RPC、合约读写、钱包、区块浏览器、DeFi 封装为 Agent 可调用的工具
    
-   关键原则：工具必须用确定性边界限制模型，读写分离，权限分层
    
-   8 个核心工具：RPC、Contract Read、Contract Write、Wallet、Explorer、DeFi、Tool Permission、Tool Log
    
-   权限分层：查询自动 → 小额 session key → 大额人工确认 → 任意合约禁止
    

### **3\. Agent Workflow（智能体工作流）**

-   核心：把用户目标拆成可控步骤（上下文→计划→工具→风险检查→执行→记录）
    
-   关键原则：高风险 Agent 必须有状态、边界和停止条件
    
-   7 个知识节点：Task Graph、State Machine、Human-in-the-Loop、Retry/Fallback、Trace、Evaluation Harness、Regression Set
    

## **关键收获**

1.  AI × Web3 产品 = 链感知上下文包 + 受限工具集 + 显式工作流 + 可审计日志
    
2.  三层架构：Context（事实层）→ Tool Use（能力层）→ Workflow（流程层）
    
3.  安全底线：Citation（引用）、读写分离、Human-in-the-Loop（人在回路）、日志可审计
    

## **下一步**

-   继续阅读 Agent Wallet（智能体钱包）
    
-   完成 WCB 平台任务
    
-   开始最小实践：为一笔交易构建上下文包
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->

# 今天观看了AI下乡的学习视频

AI+Web3是新技术+去中心化基建。

我觉得web3支付很有前景，web3 支付工具可被agent调用，living with agents
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->


# 1\. 听布老师分享“web3运行原理”

个人主权与资产本质：私钥是数字世界个人主权的起点，无需向平台申请即可生成。必须明确，资产并不保存在钱包里，而是记录在链上账本中（如余额、NFT、合约状态）。钱包仅仅是管理密钥和发起签名的工具，因此妥善保管助记词和私钥是守护资产的唯一防线。交易流与 Gas 机制：一笔交易（tx）本质上是“授权网络执行某件事”的数据，其生命周期大致为：本地身份签名 → 节点传播 → 内存池（Mempool）排队 → Builder 排序 → 验证者出块 → 最终确认。执行过程中支付的 Gas Fee 旨在为网络资源定价，防止垃圾交易滥用公共资源，并为出块者提供激励。

智能合约与信任重构：智能合约是部署在 EVM 等虚拟机上、由交易触发执行的代码。它的社会学意义在于让“规则可视”，将人们传统的“相信某个中心化机构”的模式，扭转为“检查代码 + 共识 + 审计治理”的去信任（Trustless）模式。

核心特性与边界：Web3 具备去中心化、无许可、抗审查、开放可验证等优势，其标准接口带来的可组合性让应用能像乐高一样互相调用。但需注意，主流公链默认是“公开账本 + 伪匿名”，并非绝对的隐私保护系统。

# 补一下前两天落下的课
<!-- DAILY_CHECKIN_2026-05-20_END -->
<!-- Content_END -->
