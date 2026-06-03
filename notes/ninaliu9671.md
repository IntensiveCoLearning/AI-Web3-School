---
timezone: UTC+8
---

# ninaliu9671

**GitHub ID:** ninaliu9671

**Telegram:** @ninaliu9671

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->
Day 5 完成：开始收拢 Week 1 输出，准备 AI 学习产物 / 学习总结 / Proof-of-Work Pack

今天我进入了 AI × Web3 School Week 1

的收尾阶段，重点不是再学一个新概念，而是把这一周分散的学习记录整理成可以复用、可以展示、可以提交的成果。

这一周我已经完成或搭好了这些核心产出：

\- Learning Agent 学习仓库初始化

\- AI 基础概念卡片（T1）

\- Web3 基础概念卡片（T4）

\- 测试网交易记录模板（T5）

\- 最小合约部署/调用记录模板（T6）

\- AI × Web3 最小交叉流程图模板（T8）

今天最大的任务，是开始把这些内容往 T3 / T11 / T9 三个最终交付方向收拢：

1\. T3：AI 可交互学习产物

我开始明确“学习产物”不只是一个静态笔记，而是一个能接收输入、帮助解释概念、组织学习步骤的交互式东西。

这也让我重新理解了 AI 在学习场景里的价值：不是替我学习，而是帮我把“理解 → 练习 → 输出”这条路径变得更清晰。

2\. T11：AI × Web3 学习总结发布

我开始整理这一周真正形成的新理解：

\- AI 侧：workflow、agent、tool use 的边界

\- Web3 侧：钱包、签名、Gas、合约执行的责任边界

\- 交叉问题：Agent 能辅助链上流程，但不能越过人工授权

3\. T9：Week 1 Proof-of-Work Pack

这一步让我意识到，真正的学习成果不是“我学过了”，而是“我能不能把它整理成别人也能验证的东西”。

repo、概念卡片、交易记录、流程图、总结，这些放在一起，才更像一个完整的 PoW Pack。

今天最大的收获

这一周我最深的感受是：

AI × Web3 不是把两个热门词放在一起，而是要真正看清楚“自动化能力”和“授权责任”之间的边界。

AI 可以帮我加速理解和组织，但涉及链上签名、交易确认、合约写入时，人仍然必须在关键节点承担责任。

接下来

接下来我会继续把 Week 1 的最终交付补齐，包括：

\- AI 可交互学习产物

\- 学习总结发布文案

\- Proof-of-Work Pack 总入口整理
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->

我今天重点完成了两件事：

1\. 最小合约部署 / 调用练习（T6）

我用 Remix/测试网环境去理解一个最小智能合约从编写、编译、部署/调用，到区块浏览器验证的完整路径。

这一步让我更清楚地理解了：

\- 合约地址和钱包地址的角色不同

\- “调用成功”不仅是钱包里点确认，还要看链上结果

\- 合约写入、授权、签名这些动作必须人工确认，不能让 Agent 自动执行

2\. AI × Web3 最小交叉流程图（T8）

我把一个最小工作流拆成了清晰的边界：

AI 负责生成与整理 → 人工复核 → 钱包确认 → 测试网执行 → 区块浏览器验证

这让我更明确地看到，AI 可以辅助理解、生成草稿、组织流程，但真正涉及签名、授权、链上写入时，人必须在关键节点亲自确认。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->


**今日完成：** 我整理了 7 个 Web3 基础概念卡片，完成了 T4 提交稿，也把 T5 测试网交易提交模板和 5 步说明写好了。

**遇到的挑战：** 最容易混淆的是 wallet、address、seed phrase、private key 这几个词。我现在会用“它是否公开、是否能恢复控制权、是否用于签名”来区分它们。

**明天继续：** 手动在 Sepolia 完成一笔测试网交易，把 tx hash 和区块浏览器链接补进 T5，然后进入最小合约练习。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->



**今日完成：** 我继续了顺延后的 Day 2，阅读 Handbook 并整理了 6 个 AI 基础概念的学习摘要，开始把它们转成可提交的 T1 内容。

**遇到的挑战：** LLM、prompt、workflow、agent 这些词很容易混在一起，所以我改用“它负责什么 / 不负责什么”来区分。

**明天继续：** 把今天的概念摘要整理成 `submissions/` 里的 T1 提交草稿，然后进入 Web3 基础部分。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->




**Day 1 | AI × Web3 School Bootcamp 启动**

**今日完成：**

-   配置 Claude Code 作为个人 Learning Agent，完成 Week 1 Learning Agent Setup 任务
    
-   初始化 GitHub 学习仓库：[https://github.com/ninaliu9671/ai-web3-school](https://github.com/ninaliu9671/ai-web3-school)
    
-   梳理 Week 1 打卡任务和学习计划
    
-   建立学习仓库结构：daily/、tasks/、experiments/、handbook-feedback/ 等
    

**明日计划：**  
整理 AI 基础概念卡片，覆盖 LLM、prompt、context window、workflow、agent、tool use 等概念

**一个问题/思考：**  
Learning Agent 的边界在哪里——它能帮我生成草稿和记录，但链上操作和平台提交必须我自己确认，这本身就是今天学到的第一个 AI 使用边界。
<!-- DAILY_CHECKIN_2026-05-19_END -->
<!-- Content_END -->
