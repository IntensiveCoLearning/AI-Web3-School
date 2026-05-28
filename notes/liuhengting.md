---
timezone: UTC+8
---

# liuhengting

**GitHub ID:** liuhengting

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->
今日学完账户抽象（AA）：核心是把账户控制权从单一私钥扩展为可编程规则，而非"免 gas"。理清了 ERC-4337 五步流程，以及 EntryPoint / Smart Account / Paymaster 在链上、Bundler 在链下的分工。搞懂了 MetaMask 仍是 EOA、密码 ≠ 私钥；ERC-20 approve 是资产级授权，ERC-4337 是账户级重构。Session Key 是 Agent Wallet 的关键基础——让 AI 的自由被规则包起来。  
  
[daily\_note](https://github.com/liuhengting/ai-web3-school-bootcamp/blob/master/daily/2026-05-28.md)
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->

MCP 的核心不是让模型更聪明，而是让工具接入可描述、可发现、可限制。架构上 Client 连接模型与 Server，Server 暴露能力，但关键在于 Tool Schema——它是给模型看的合约，不是给人看的文档。Schema 模糊，模型就会猜错参数。Permission 最易被低估：只读/写入、会话/长期授权、副作用、可审计，缺一不可。MCP 与 Shell 权限的本质区别：Shell 信任操作者（人），MCP 不信任调用者（模型）。`--help` 替代不了 Schema，因为人能消歧义，模型只能靠精确约束。  
  
[daily\_note](https://github.com/liuhengting/ai-web3-school-bootcamp/blob/master/daily/2026-05-26.md)
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->


今天学习了 AI Framework 和 LangGraph Persistence。Framework 的本质不是替代业务理解，而是管理模型、工具、状态、评估和部署等工程复杂度。Agent 框架尤其要面对模型不稳定、工具调用错误、上下文漂移和长流程恢复问题。深入 LangGraph 后，我理解了 State 是共享黑板，Super-step 是执行节拍，Thread 是持久化会话，Checkpoint 是状态快照。它们共同支撑中断恢复、记忆、时间旅行和可观测性。今天最大的收获是：Agent 工程化的核心，是把不确定的 AI 能力放进可控系统里。  
  
[daily\_note](https://github.com/liuhengting/ai-web3-school-bootcamp/blob/master/daily/2026-05-25.md)
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->



今天完成了 Hardhat 3 部署合约到 Sepolia 的流程梳理。理解了 Hardhat 不是节点，而是通过 Alchemy / Infura 这类 RPC Provider 连接测试网；部署时本地用私钥签名交易，再通过 RPC 广播到 Sepolia。实践上整理了 pnpm 命令、Hardhat keystore 保存 RPC URL 和私钥、hardhat.config.ts 网络配置、Ignition 部署模块，以及部署后用脚本调用合约验证状态变化。核心收获是：合约部署不是单独写 Solidity，而是一条“编译—签名—广播—确认—调用验证”的完整链路。  
  
[daily\_note](https://github.com/liuhengting/ai-web3-school-bootcamp/blob/master/daily/2026-05-24.md)
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->




今日学习打卡 ​

学习了智能合约开发栈与 Web3 网络基础两个模块。

合约开发工具上，Hardhat 适合全栈团队协作，Foundry 内置 fuzz/fork 测试，安全敏感场景首选；前端通过 viem/wagmi 直接调合约，后端主要承担索引、RPC 代理等周边职责。

网络层面，USDT 是多链发行，转账必须保证收发同链；PoW 靠算力、PoS 靠质押保证安全，51% 类攻击的最大障碍是"你必须先重仓它，攻击成功后它立刻归零"；L2 用户体验快但最终安全依赖 L1，提现回主网需等待结算；CEX 内部转账不上链，只有提币到外部钱包才触发链上交易。  
  
详细笔记参考[daily\_note](https://github.com/liuhengting/ai-web3-school-bootcamp/blob/master/daily/2026-05-23.md)
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->





### Week 1 收尾 + Web3 入门实操

完成内容：

\- 参加 Week 1 例会（5.22 20:00）

\- 阅读 Web3 相关资料（密码学、钱包）

\- 在 MetaMask 创建新账户

\- 领取 Sepolia 测试网水龙头代币

本周完成：

\- AI 基础：LLM、Prompt、Context、RAG、Agent（工具调用、多步执行、循环终止）

\- Web3 基础：钱包创建、账户类型、测试网、水龙头领取

\- 建立行业信息流关注清单

下周计划：

\- 完成智能合约部署/调用

\- 设计受限 Web3 助手 workflow

\- 画 AI × Web3 最小交叉流程图

  
[daily\_note](https://github.com/liuhengting/ai-web3-school-bootcamp/blob/master/daily/2026-05-22.md)
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->






今天参与了Swen老师的Co-Learning，顺便浏览了下老师的Twitter，了解到了Agent Economy的概念和ERC-8183协议，在脑子里建个索引，以后可以持续关注

阅读了手册里的Agent章节，笔记记在了[daily\_note](https://github.com/liuhengting/ai-web3-school-bootcamp/blob/master/daily/2026-05-20.md)
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->








昨天晚上直播观看了Web架构课，发现了以往对Web3相关的知识点只有零散的了解，无法把知识应用起来满足一个能通过安全Review的合约，Web3相对于Web2对安全这块需要格外注意，很多东西一上线后就无法挽回。  
  
今天根据根据Learning Agent的学习规划，阅读Context、RAG章节，记录阅读疑问，笔记和疑问统一记录在个人学习Repo
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->









Claude Code 接入 Learning Agent，搭建个人学习Repo: [Personal learning journal and proof-of-work for AI x Web3 School](https://github.com/liuhengting/ai-web3-school-bootcamp)

根据Learning Agent的学习规划，阅读LLM、Prompt章节，记录阅读疑问，笔记和疑问统一记录在个人学习Repo
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
