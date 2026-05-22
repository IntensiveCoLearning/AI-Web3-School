---
timezone: UTC+8
---

# cheng-gs

**GitHub ID:** cheng-gs

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->
# Remix + AI Web3 助手网页介绍

## 这个网页是做什么的

这个网页是我当前 AI × Web3 项目的第一阶段 MVP，也就是一个**面向 Remix 测试网练习的受限 AI 助手页面**。

它的目标不是替用户自动完成链上操作，而是帮助用户在真正去 Remix 和 MetaMask 执行之前，先把这次操作理解清楚、准备清楚、记录清楚。

换句话说，这个网页负责的是：

-   解释
    
-   提醒
    
-   整理
    
-   生成草稿
    

而不是：

-   自动签名
    
-   自动部署
    
-   自动转账
    
-   自动写链上状态
    

## 为什么要做这个网页

在 AI × Web3 的学习和实践里，一个很常见的问题是：

-   用户知道大概要去 Remix 点哪里
    
-   但不确定这一步到底是读取、写入、授权还是部署
    
-   也不确定钱包弹窗为什么出现
    
-   更不知道执行后应该记录哪些材料，才能形成可验证的 proof-of-work
    

所以这个网页的意义是把一条原本分散的流程先理顺：

`用户输入目标 -> AI 生成说明 -> 用户去 Remix 操作 -> 钱包人工确认 -> 测试网执行 -> 用户回填结果 -> AI 整理记录`

它解决的不是“自动执行”的问题，而是“在执行前后减少理解成本和记录成本”的问题。

## 这个网页现在能做什么

当前这个网页主要支持两类能力。

### 1\. 链上交互说明

用户输入：

-   目标网络
    
-   合约名称
    
-   合约地址
    
-   函数名
    
-   参数
    
-   操作类型
    
-   钱包类型
    
-   用户目标描述
    

网页会生成：

-   这次操作的解释
    
-   这是只读、写入还是部署
    
-   是否需要钱包确认
    
-   是否会消耗 Gas
    
-   Remix 操作步骤
    
-   风险提醒
    
-   执行前检查清单
    
-   执行后 Markdown 记录模板
    

这部分的作用是：帮助用户在真正点击 Remix 和 MetaMask 之前，先知道自己要做什么、为什么做、哪里要小心。

### 2\. 自然语言修改合约

用户输入：

-   合约名称
    
-   自然语言修改需求
    
-   原始 Solidity 合约代码
    

网页会生成：

-   修改摘要
    
-   改动清单
    
-   风险提醒
    
-   人工复核清单
    
-   Remix 下一步
    
-   修改后的 Solidity 草稿
    

这部分的作用是：让 AI 先根据自然语言需求给出一版修改草稿，再由人把草稿拿去 Remix 编译、检查和决定是否部署。

## 这个网页和 DeepSeek API 的关系

这个网页现在已经支持通过本地后端接入 DeepSeek API。

整体结构是：

`浏览器页面 -> 本地后端 -> DeepSeek API`

这样设计的原因是：

-   API Key 不会暴露在前端页面里
    
-   API Key 只保存在本地 `.env.local`
    
-   前端页面不直接接触密钥
    

所以这个网页已经不是纯静态模板，而是一个：

-   前端负责收集输入和展示结果
    
-   本地后端负责读取环境变量并调用模型 API
    

的最小可运行系统。

## 这个网页的安全边界

这个网页是一个**受限 Web3 助手**，所以它有明确边界。

### 它可以做的事

-   解释函数和链上动作
    
-   判断只读 / 写入 / 部署的区别
    
-   生成操作说明
    
-   生成执行前检查清单
    
-   生成执行后记录模板
    
-   根据自然语言需求改写 Solidity 草稿
    

### 它不能做的事

-   不能接触私钥
    
-   不能接触助记词
    
-   不能接触钱包恢复信息
    
-   不能替用户签名
    
-   不能替用户点击 MetaMask 确认
    
-   不能绕过人工确认自动授权
    
-   不能自动转账
    
-   不能自动部署到链上
    

这条边界非常重要，因为它决定了这个项目现在的定位是：

**AI 辅助理解和准备链上操作，而不是自动控制链上执行。**

## 这个网页适合什么场景

它最适合这些场景：

-   学习测试网交易和合约交互
    
-   使用 Remix 做最小合约练习
    
-   在执行前确认风险和步骤
    
-   在执行后整理 proof-of-work
    
-   用自然语言先生成一版合约修改草稿
    

特别适合像我现在这样的阶段：

-   已经开始做测试网和 Remix 实践
    
-   想把 AI 和 Web3 结合起来
    
-   但又不希望一开始就做一个过度自动化、风险过高的 Agent
    

## 这个网页目前的限制

虽然它已经能运行，但它仍然是第一阶段 MVP，所以限制也很明确：

-   不直接连接 MetaMask
    
-   不直接读取链上状态
    
-   不自动获取交易哈希
    
-   不自动部署合约
    
-   不自动执行写入交易
    
-   不自动保存链上结果到仓库
    

另外，合约修改草稿虽然能由 AI 生成，但仍然必须经过：

-   人工阅读
    
-   Remix 编译
    
-   人工检查访问控制和副作用
    
-   人工决定是否测试或部署
    

## 我为什么先做这个版本

因为这个版本是打通全链路的最快方式。

如果一开始就做：

-   前端页面
    
-   钱包连接
    
-   `wagmi`
    
-   `viem`
    
-   页面内直接读写
    
-   状态管理
    
-   错误处理
    

那工程复杂度会明显上升，可能在真正验证需求之前就被技术细节拖住。

而现在这个第一阶段版本先验证的是：

-   AI 的解释有没有帮助
    
-   风险提醒有没有价值
    
-   记录模板是否真的节省整理时间
    
-   用户是否更容易理解链上操作边界
    

只有这些答案是肯定的，第二阶段的产品化才值得做。

## 下一步如何升级

这个网页的下一步升级方向已经比较明确：

### 第二阶段目标

把“解释、执行、验证记录”尽量收进同一个网页里。

### 可能的技术方向

-   Next.js
    
-   wagmi
    
-   viem
    
-   页面内连接 MetaMask
    
-   页面内直接读函数
    
-   页面内发起写入交易
    
-   自动拿到交易哈希
    
-   自动生成浏览器链接和记录
    

### 但仍然保留的边界

即使升级到第二阶段，也仍然要坚持：

-   AI 不接触私钥
    
-   钱包确认必须人工完成
    
-   授权、转账、部署、写入不能绕过人工确认
    

## 总结

如果用一句话总结这个网页的作用，那就是：

**它是一个面向 Remix 测试网练习的受限 AI 助手，负责帮助用户理解、准备和记录链上操作，但不替用户执行高风险链上动作。**

这也是我当前把 AI 和 Web3 结合起来的最小可行路径。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

今天我主要完成了 Week 1 Proof-of-Work Pack 的收口工作，把零散材料整理成了可提交、可审核的公开入口。核心产出是把 \[[README.md](http://README.md)\]重写成 Week 1 总入口，并补上了 \[tasks/[minimal-ai-web3-workflow.md](http://minimal-ai-web3-workflow.md)\]，用最小流程说明了 AI 生成、人工复核、钱包确认、测试网执行和区块浏览器验证之间的边界。

今天还补充了对这个最小 AI × Web3 工作流的简短说明，明确了它解决什么问题、哪些步骤由 AI / Agent 辅助、哪些步骤必须人工确认、如何验证最终结果，以及主要风险点。最后，这些更新已经提交并推送到 GitHub
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->


# Daily Note - 2026-05-19

## 今日概览

今天的主要工作是把 Week 1 里已经完成的 Web3 实践和学习材料系统化整理进 GitHub 仓库，形成可以提交、可以复盘、也可以继续扩展的公开 proof-of-work。

我没有继续停留在“做过一次测试”这个层面，而是把测试钱包、Sepolia 测试交易、SimpleStorage 合约、Web3 基础概念和账户权限差异都整理成了结构化文档。

## 今天完成了什么

### 1\. 补齐了 Web3 基础概念文档

我新增了 [tasks/web3-basic-concepts.md](/F:/ai-web3/ai-web3-school-cohort-0/tasks/web3-basic-concepts.md)，用自己的话整理了 Web3 入门阶段最核心的一组概念，包括：

-   account
    
-   address
    
-   wallet
    
-   seed phrase
    
-   private key
    
-   signature
    
-   transaction
    
-   gas
    
-   smart contract
    
-   testnet
    
-   block explorer
    
-   EOA / smart account / multisig
    

每个概念都包含一句话解释、一个例子和一个安全提醒或常见误区，并特别说明了为什么私钥、助记词、签名和授权必须谨慎处理。

### 2\. 记录了测试网交易信息

我确认并保留了一笔 Sepolia 测试网普通转账的关键记录：

-   测试网：Sepolia
    
-   测试钱包地址：`0x7A26dFA802c664DB65e03454bFAFe042e3f14266`
    
-   交易哈希：`0xcb2586107f160f4431d5107085a3d16aa152f384179b11ce12b14c68c57f55ac`
    
-   区块浏览器链接： `https://sepolia.etherscan.io/tx/0xcb2586107f160f4431d5107085a3d16aa152f384179b11ce12b14c68c57f55ac`
    

我还写出了一段简短说明，解释了这笔交易由哪个地址发起、转账给谁、交易状态如何、所在区块是多少、Gas 使用量和手续费大致是多少。

### 3\. 保存了最小智能合约代码

我把测试合约保存到了仓库中：

-   [experiments/contracts/SimpleStorage.sol](/F:/ai-web3/ai-web3-school-cohort-0/experiments/contracts/SimpleStorage.sol)
    

这个合约用于练习最基础的链上读写逻辑：

-   `constructor(uint256 _initialNumber)`
    
-   `setNumber(uint256 _number)`
    
-   `getNumber()`
    

它对应的是我在 Remix 上完成的最小合约部署与调用练习。

### 4\. 整理了合约部署与调用记录

我新增了 [submissions/week-1-contract-practice.md](/F:/ai-web3/ai-web3-school-cohort-0/submissions/week-1-contract-practice.md)，把当前可提交的合约实践信息整理成了规范格式，包括：

-   合约地址：`0xA4B6b39A7D0dC7EFb55608A886a71e09b4080272`
    
-   区块浏览器链接： `https://sepolia.etherscan.io/address/0xA4B6b39A7D0dC7EFb55608A886a71e09b4080272`
    
-   合约代码 GitHub 链接
    
-   我部署和调用了哪些函数
    
-   哪些步骤必须人工确认
    

目前这份记录里，读取或写入的具体返回值还可以继续补全。

### 5\. 比较了 EOA、智能账户和多签账户

我新增了 [tasks/eoa-vs-smart-account-vs-multisig.md](/F:/ai-web3/ai-web3-school-cohort-0/tasks/eoa-vs-smart-account-vs-multisig.md)，重点比较了三类账户在这些维度上的差异：

-   谁持有控制权
    
-   谁可以发起交易
    
-   是否支持多人确认
    
-   是否支持恢复、限额或自动化策略
    
-   典型使用场景
    
-   主要风险点
    

这份文档的核心收获是：不同账户类型的差别，不只是技术实现不同，而是它们对“谁能动手、谁来批准、谁承担风险”给出了不同答案。

### 6\. 已把今天新增内容推送到 GitHub

今天整理的材料已经提交并推送到远端仓库，最新一次相关提交是：

-   `1dc0543 Add Web3 practice notes and contract files`
    

仓库地址：

-   `https://github.com/cheng-gs/ai-web3-school-cohort-0`
    

## 今天的学习收获

今天最大的收获不是“我做了一笔测试网交易”或“我部署了一个合约”，而是开始能把这些操作放进一条完整的链上学习路径里理解：

-   钱包不是普通登录
    
-   签名不等于交易
    
-   授权不等于无风险
    
-   Gas 不只是手续费
    
-   区块浏览器才是链上结果验证入口
    
-   不同账户结构对应不同的权限和风险分配方式
    

相比昨天偏 AI learning workflow 的整理，今天更像是在补齐 Web3 执行层的基础认知。

## 还缺什么

今天的材料已经基本可提交，但还有几个点后续可以补得更完整：

-   `SimpleStorage` 的实际部署交易哈希
    
-   `getNumber()` 的真实读取结果
    
-   `setNumber(...)` 的真实写入参数和写入后结果
    
-   对应的区块浏览器函数调用或交易链接
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->



# Week 1 配置记录与运行记录

## 1\. 我选择的 Agent / AI 工具

-   工具：Codex
    
-   使用场景：作为我的 AI × Web3 School learning agent，协助我初始化学习仓库、整理学习计划、生成打卡草稿、沉淀课程笔记和 Handbook feedback 流程。
    

## 2\. 我让 Agent 帮我完成的学习任务

这次我让 Codex 帮我完成了几类实际任务：

-   阅读 AI × Web3 School Learning Agent 启动 Prompt 和 Handbook
    
-   根据我的背景初始化个人学习计划
    
-   在本地创建并初始化 GitHub 学习仓库
    
-   生成 `README.md`、`profile.md`、`learning-plan.md`、`daily/2026-05-18.md`
    
-   根据 WCB Learning 页面内容补齐 Week 1 学习目标和交付清单
    
-   生成 AI 基础概念整理文档
    
-   整理 Handbook feedback 工作流
    

## 3\. 一段关键 Prompt / 配置说明

我给 Codex 的关键任务说明大意如下：

> 请作为我的 AI × Web3 School Learning Agent，先阅读启动 Prompt 和 Handbook，帮我初始化个人学习计划、GitHub 学习仓库、每日打卡草稿和 Handbook feedback 流程。

本次使用中的关键配置和边界：

-   主工具选择：Codex
    
-   输出语言：中文
    
-   学习背景：AI 熟悉，Web3 新手，会基础脚本
    
-   每日投入时间：2 小时
    
-   仓库策略：公开 GitHub repo，作为 proof-of-work workspace
    
-   安全边界：不把 API key、私钥、助记词、密码、隐私信息写入公开仓库
    
-   执行边界：涉及 GitHub 仓库创建、提交、推送等写入动作时，先确认再执行
    
-   平台边界：WCB 打卡和正式提交以人工手动提交为准，不假设 Agent 能自动代提
    

## 4\. 一次成功输出记录

一次明确成功的输出是：Codex 帮我完成了本地仓库初始化、首个 commit、远端 GitHub repo 创建和首次 push。

相关结果：

-   GitHub repo：[https://github.com/cheng-gs/ai-web3-school-cohort-0](https://github.com/cheng-gs/ai-web3-school-cohort-0)
    
-   本地目录：`F:\ai-web3\ai-web3-school-cohort-0`
    
-   首次提交信息：`Initialize AI Web3 School learning repo`
    

同时，Codex 还生成了以下学习材料：

-   [README.md](/F:/ai-web3/ai-web3-school-cohort-0/README.md)
    
-   [learning-plan.md](/F:/ai-web3/ai-web3-school-cohort-0/learning-plan.md)
    
-   [daily/2026-05-18.md](/F:/ai-web3/ai-web3-school-cohort-0/daily/2026-05-18.md)
    
-   [tasks/ai-basic-concepts.md](/F:/ai-web3/ai-web3-school-cohort-0/tasks/ai-basic-concepts.md)
    
-   [tasks/week-1-deliverables.md](/F:/ai-web3/ai-web3-school-cohort-0/tasks/week-1-deliverables.md)
    

## 5\. 一次人工复核、修正或拒绝 Agent 建议的记录

这次过程里，我至少做了两次明确的人工复核：

### 记录 A：WCB Learning 内容人工确认

一开始 Agent 只能拿到 WCB Learning 页面入口，但没有读到完整的学习内容。这里没有让 Agent 猜测“今天任务是什么”，而是由我手动打开 WCB Learning 页面，把 Week 1 的真实目标和任务内容贴回对话，再由 Agent 写入 repo。

这次人工复核的意义是：

-   避免 Agent 在页面内容不完整时编造课程安排
    
-   保证学习计划和交付清单与课程平台实际内容一致
    

### 记录 B：GitHub 登录与远端创建问题修正

在创建远端仓库时，Agent 第一次遇到了认证和权限问题，后来又遇到 PAT 权限不足的问题。这里没有让 Agent 继续盲目重试，而是由我手动重新执行 `gh auth login`，改用正确的登录方式后，再让 Agent 继续创建远端仓库并推送。

这次人工修正的意义是：

-   防止错误认证状态下继续执行写入动作
    
-   把“创建公开仓库”这个外部写入动作保留在人可确认的范围内
    

## 6\. 这次使用 Codex 的体会

我目前最直接的感受是：

-   Codex 很适合做 repo 初始化、文档整理、任务拆解和学习材料沉淀
    
-   对于结构化工作，例如创建目录、写 Markdown、维护学习计划，它的效率很高
    
-   但涉及外部平台状态、认证、权限、打卡提交、敏感信息时，仍然必须人工确认和复核
    

## 7\. 后续准备

接下来我会继续用 Codex 处理这些学习任务：

-   整理 Web3 基础概念笔记
    
-   设计并记录测试网交互流程
    
-   生成最小 AI × Web3 交叉实验说明
    
-   维护 daily notes、提交记录和 handbook feedback
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
