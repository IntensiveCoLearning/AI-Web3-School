---
timezone: UTC+8
---

# heheer

**GitHub ID:** newfish-cmyk

**Telegram:** @zenprai

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
Web3 不能只追求“去中心化”，还必须重新设计安全、财政、治理、责任和分配机制。 否则去中心化只是把旧世界的问题换了一种形式重新出现。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

今天是 AI x Web3 School Day 3，我先用 Learning Agent 通过 WCB API 查询了今天的课程和任务。今天主要有两项安排：17:00-18:00 的「Web3 运行原理」，以及 19:00-20:00 的 Co-learning「任务推进与答疑」。目前两项任务都还没开始，所以今天的打卡先记录课前计划和准备，不提前声明已参加。

今天我会把重点放在 Web3 的基础运行机制上。前两天已经初步理解了钱包、地址、私钥 / 助记词、签名、交易、Gas、授权和区块浏览器这些概念，今天希望进一步把它们串起来：用户通过钱包发起签名，交易被发送到链上，Gas 代表执行成本，合约调用会改变或读取链上状态，最后可以通过交易哈希和区块浏览器验证结果。这些基础对后续理解 AI Agent 如何安全调用 Web3 工具非常关键。

今天也会继续维护学习仓库，把 WCB 任务、proof 草稿、提交状态和学习问题沉淀到 daily/[2026-05-20.md](http://2026-05-20.md)。我希望把 Learning Agent 用成一个稳定的学习工作流：它可以帮我查询任务、整理笔记、生成打卡草稿、维护 repo 和提交普通 proof，但涉及钱包签名、转账、授权、私钥、seed phrase 或 API key 的操作仍然必须保持人工确认。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->


今天是 AI x Web3 School Day 2，我先补看了昨晚课程的回放，并继续用 Learning Agent 查询和整理今天的 WCB 任务。昨晚回放帮助我把 AI x Web3 的学习主线重新捋了一遍：这不是简单把 AI 和 Web3 两个关键词拼在一起，而是要理解模型能力、工具调用、钱包、签名、支付、身份、权限、安全执行和可验证记录如何在真实场景里连成一条执行链。

Web3 基础上，今天主要补了几个心智模型：钱包不只是“登录工具”，更像是用户控制账户和签名权限的入口；地址是链上身份和资产位置的公开标识，但真正能控制地址的是私钥 / 助记词，所以绝不能交给任何 Agent；交易不是普通的后端请求，一旦签名并上链，就会进入区块链的状态变更流程，并且需要通过区块浏览器、交易哈希和合约调用记录来验证结果；授权和转账也不是一回事，授权可能会给某个合约持续使用资产的权限，因此比“点一下确认”更需要看清楚对象、额度和风险。

我今天的重点是两件事：一是继续消化这些 Web3 基础概念，尤其是钱包、签名、交易、Gas、合约调用和区块浏览器验证之间的关系；二是关注今晚 Hermes / Learning Agent 如何帮助学习者把学习计划、GitHub repo、每日记录、任务 proof、Handbook feedback 串成一个稳定 workflow。同时也会继续保持边界：Agent 可以帮我计划、整理、生成草稿和提交普通任务 proof，但涉及钱包签名、转账、授权、私钥、seed phrase 或 API key 的操作仍然必须人工确认。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->



今天完成了 AI x Web3 School 个人 Learning Agent 和学习仓库初始化。

我的当前学习画像是：AI 基础较熟悉，Web3 仍是新手，能独立开发，输出语言偏好中文。因此接下来会采用项目驱动路线，而不是只线性读材料。第一阶段会围绕 Hackathon 项目补齐钱包、签名、链、合约、账户抽象、链上数据和安全边界等核心概念。

今天已经确认并更新了学习仓库结构，包括 daily notes、tasks、experiments、handbook-feedback、hackathon、submissions 和 templates。后续每天会把学习记录、实验结果、打卡草稿和 Handbook 反馈都沉淀到仓库里，形成可复盘的 proof-of-work。

下一步我会从 Handbook 的 Web3 基础和 AI x Web3 Bridge 开始，选一个最小 Web3 实验，例如查询地址余额、理解一笔交易，或连接钱包读取地址，并把过程中遇到的问题整理成 Handbook feedback。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
