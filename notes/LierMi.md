---
timezone: UTC-3
---

# Riso

**GitHub ID:** LierMi

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->
**开发栈（Dev Stack）**

可以先把一条最小开发链路拆成六步：

在本地或浏览器 IDE 写出合约。

编译合约，得到 bytecode 和 ABI。

在本地链或测试网部署合约。

写测试覆盖核心状态变化和权限边界。

前端用合约地址和 ABI 读取或发送交易。

在区块浏览器验证源码、交易和事件。

\-Remix

Remix 是浏览器里的 Solidity IDE，它可以编写、编译、部署和调试合约，适合入门、教学、原型和快速验证

合约实验台

\-Hardhat

适合 JavaScript/TypeScript 项目，把合约开发接进测试、脚本和前端工程理解本地链、测试网、部署脚本、合约验证和环境变量如何组成完整开发流程

合约工程框架

contracts/：Solidity 合约源码。

test/：TypeScript 或 Solidity 测试。

ignition/ 或 scripts/：部署模块和脚本。

hardhat.config.ts：网络、编译器、插件和变量配置。

artifacts/：编译生成的 ABI、bytecode 和 metadata。

\-Foundry

更偏命令行和 Solidity-native 测试，适合高强度合约开发和快速反馈

forge、cast、anvil

forge test：运行合约测试。

forge build：编译合约。

anvil：启动本地测试链。

cast call：读取链上合约。

cast send：发送交易调用合约。

\- OpenZeppelin

提供常用合约标准和安全组件，但不能替代对业务逻辑的审查

包含 ERC-20、ERC-721、AccessControl、Ownable、Pausable 等常见模块。使用成熟库可以减少重复造轮子，也能避免很多基础实现错误产品决策要自己做

\-viem / wagmi

主要解决前端与链交互的问题：读合约、写合约、管理账户、处理网络和缓存

viem 是 TypeScript 以太坊接口库，强调类型安全和底层调用能力

wagmi 则面向 React 应用，提供钱包连接、账户状态、合约读写和 hooks

**网络（Network）**

理解 Network，是为了知道一笔交易从钱包签名到最终被用户看到，中间经过了哪些层：钱包、RPC、mempool、区块、共识、执行、确认、索引和浏览器

链上应用不是直接写数据库，而是在一个公开、按区块推进、由网络共识维护的状态机上提交请求

\-Block

区块是交易被批量提交和排序的单位

一个区块通常包含交易列表、前一个区块的引用、状态根、时间戳、gas 使用情况和共识相关信息。交易进入区块后，节点会执行这些交易并更新全局状态

\-Consensus

Consensus 让这些节点在没有中心数据库的情况下，对区块顺序和状态变化形成一致看法

\-PoS

PoS 用质押和惩罚机制组织验证者，替代 PoW 挖矿来维护网络安全

网络安全不是“免费”的，它来自经济质押、客户端实现和节点参与

\-Testnet

测试网用于在接近真实链的环境里测试合约、前端和交易流程

Testnet 的资产没有真实经济价值

\-L2

Layer 2 通常把大量交易放到主网之外执行，再把结果或证明提交回主网

费用更低、确认更快

\-Rollup

是主流 L2 扩展路线

常见 rollup 类型包括 optimistic rollup 和 zero-knowledge rollup
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->

观看回放 Web3运行原理

助记词-私钥-公钥-钱包地址

资产不在钱包里，账本数据都在链上-可以通过区块浏览器读取

转账：12min 安全线 finalized

智能合约可变但不可篡改，装一个新合约进去

DEFI协议 7天时间锁-给反应时间

以太坊升级 - Ethereum Magicians论坛讨论 - 会议 - 文档 - 确定的改动

Web3是三门学科的交叉——密码学，经济学，社会学

**Web3知识图谱**

**密码学** 

\-Hash

\-Public Key

\-Private Key 

用来生成签名，不同于密码，无法重置/找回

私钥是控制权，不能泄露\*\*

\-Signature

签名是授权证据

是对某段具体消息或交易内容的授权证明，由私钥对消息生成对 Agent 来说，签名更要有权限边界，不能让模型随意触发高风险授权

钱包、助记词、硬件钱包、多签和账户抽象，本质上都在解决同一个问题：如何让密钥控制权更安全、更可恢复、更适合真实用户

\-Merkle Tree常见于空投名单、轻客户端、状态证明和可验证数据结构区块链可以把大量状态组织成可验证结构

**钱包（Wallet）**

钱包是用户意图进入链上执行之前的最后一道确认界面

钱包管理的是链上控制权

\-EOA Externally Owned Account

它可以签名消息、发起交易、支付 gas、调用合约

\-Mnemonic 助记词

任何网页、客服、AI Agent、表单或脚本要求你输入助记词，都应该默认视为危险

\-Transaction

要经过钱包确认、签名、广播、打包和执行

\-Gas

\-Explorer 区块浏览器

是用户和开发者查看链上事实的窗口，但它不是链本身

**智能合约（Smart Contract）**

智能合约把规则变成公共基础设施，也把 bug 变成公共风险

\-Solidity

最主流的智能合约开发语言合约状态会写入链上，函数调用可能消耗 gas，错误权限可能直接影响资产安全

理解 storage、msg.sender、modifier、event、external call、revert 和权限控制这些链上特有概念\*count 是链上状态

\*increment() 是会改变状态的写操作

\*event 是外部系统可以索引的日志

\*count() 不需要用户签名

\*increment() 通常需要钱包签名并支付 gas

\-EVM（Ethereum Virtual Machine）

是合约执行环境，运行智能合约的虚拟机

Solidity 代码会被编译成 EVM 字节码，部署到链上后由节点执行

\-ABI（Application Binary Interface）

是应用和合约沟通的接口说明，是 Agent 理解合约能力的重要上下文

\-Event

合约向外部系统留下的可索引日志

\-Upgrade
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->


赶不上直播  
观看回放 _AI 时代，Web3 开发者需要具备的基础知识和架构能力_  
  
Web3其实和Web2在很多方面逻辑都是相通的，Web2的能力在Web3也适用，有很大重合的部分，他们本质上是方向不一样，刚开始在面对Web3纷杂的名词时可能会觉得无从下手，但在搞清楚这些之后，Web2的技术能力也同样可以用到Web3上  
  
在支付链条中 web3 block chain = web2 Bank Institution，且方式不一样，Web3不需要回调  
  
安全问题很重要\*\*否则项目上线=结束，资产归零，注意私钥不能泄漏，要从一开始就培养严格的安全意识  
  
消息——私钥——签名 通过这种方式来验证身份，所以私钥泄露=身份盗用，在交易过程中不认人只认签名  
  
Web3基础知识继续充电中……
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->



学习以太坊的基础基础概念、生态系统  
  
智能合约、dApps、Gas手续费、NFT  
  
以及历史发展和变革，对比理解web2和web3的异同
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->




查看了**AI x Web3 School 2026 开营仪式 的回放**  
  
**学习配置Hermes小助手**  
  
**学习了web3的基础知识，对这个领域有了一个初步的认识**
<!-- DAILY_CHECKIN_2026-05-19_END -->
<!-- Content_END -->
