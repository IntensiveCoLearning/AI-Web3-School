---
timezone: UTC+8
---

# Connor532

**GitHub ID:** Connor532

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-02
<!-- DAILY_CHECKIN_2026-06-02_START -->
今天简单整理了后续想推进的方向，把之前设计的受限 Agent payment workflow 再往 demo 靠近一步，比如先不接真实支付，只模拟 x402 的 402 Payment Required 流程，再让 Agent 判断金额、网络、收款方和资源路径是否符合策略。这样可以先验证流程设计，而不是一上来就碰真实钱包或真实资金。
<!-- DAILY_CHECKIN_2026-06-02_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->

今天主要完成了 Week 2 除线上活动外的作业提交整理，把之前写好的方向研究、Payment / Commerce 流程、x402 + CAW 架构草图、Agent Profile、钱包权限策略、Threat Model、治理协作 workflow 和 Week 2 总 Proposal 都整理成了可以直接提交的 GitHub 链接和证明文本。

今天的主线是“受限 Agent 支付与交付 workflow”。我理解到 AI × Web3 的关键不是简单地让 Agent 自动付款，而是设计清楚：谁授权、预算是多少、能调用什么服务、什么时候必须人工确认、如何撤销权限、如何验证结果，以及失败后怎么退款或争议处理。AI 可以帮忙拆流程、读资料、写 proposal、整理 proof，但涉及钱包、签名、付款、授权、合约调用和治理执行的步骤，仍然必须有明确的人类确认或规则约束。

今天也把 Week 2 的提交证明按任务拆好了，后续可以逐项粘贴到课程平台。下一步我想继续深入 x402、ERC-8004、ERC-8183、Safe / ERC-4337 这些协议和工具，看看能不能从设计稿推进到一个最小可运行 demo。
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->


今天主要收尾 Week 1 的 Proof-of-Work Pack，把前几天做过的学习记录、概念卡片、流程图、受限 Web3 助手 workflow、行业信息流、测试网交易和最小智能合约部署记录串起来，整理成一个可以公开提交的 GitHub 汇总链接。

今天比较有收获的是，我对 AI × Web3 的边界更清楚了：AI 很适合帮我拆任务、写草稿、整理 proof、解释交易和合约逻辑，但钱包连接、签名、交易确认、合约部署和写入调用必须由我自己人工确认。Week 1 的核心不是把所有工具都装完，而是建立一套“AI 辅助 + 人工确认 + 链上验证 + GitHub 留痕”的学习流程。

目前已完成 Sepolia 测试网交易、MinimalStorage 合约部署和 setValue(100) 调用记录，也把相关 tx hash、合约地址和 Etherscan 链接整理到了 PoW Pack。下一步想继续学习智能账户、session key 和受限 Agent 权限，看看 AI 在不接触私钥和不直接确认交易的情况下，能安全地辅助到什么程度。
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->



今天开始尝试了解量化方向，把它作为 AI x Web3 后续学习的一个可能切入点。我先没有急着追求策略或收益，而是整理了一个基础研究流程：先提出问题，再看数据质量，定义信号，做简单回测，然后检查手续费、滑点、流动性、过拟合和风险控制。AI 可以帮助我解释概念、生成研究 checklist、辅助写脚本和整理实验记录，但不能直接替我做交易判断。量化和 AI x Web3 其实有相似点：都需要可验证的数据、清晰的日志、人工复核和边界意识。下一步想尝试找一个非常小的公开数据集，做一次只用于学习的回测练习。
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->




今天拆解了 Hermes Agent 和 Safe / Smart Account 两个 AI x Web3 相关方向。Hermes Agent 让我更关注 agent framework 里的 tool use、memory、skills 和长期 workflow；Safe / Smart Account 则让我看到 Web3 账户权限、multisig、可编程授权和共享控制的重要性。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->





我重点关注了 Hermes Agent 这类 agent framework，以及 Safe / smart account / multisig 这类账户权限方向。我的观察是：AI x Web3 的关键不只是“让 AI 控制钱包”，而是如何做受限授权和可验证执行。AI 可以帮助解释交易、整理合约交互步骤、生成风险清单和维护学习记录；但涉及签名、授权、转账、合约写入时，仍然需要人类确认。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->







今天对 Web3 的重点复盘是：私钥和助记词代表账户控制权，不能交给 AI 或提交到公开仓库；签名不是普通点击，而是在授权具体消息或交易；授权也需要谨慎，因为过大的权限可能带来持续风险。当前已经准备好 AI/Web3 概念卡片、交互式 Quiz、最小 AI x Web3 流程图、受限 Web3 Assistant workflow、行业观察和 PoW Pack。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->









今天继续完成 AI x Web3 School Week 1 的任务提交材料。我重点完善了 AI 基础概念卡片，把 LLM、Prompt、Context Window、Workflow、Agent、Tool Use、AI Coding、Verification 等概念整理成自己的理解，并补充了例子、误区和使用边界。同时准备了 Learning Agent Setup 记录，说明我选择 Codex 作为学习 Agent，让它协助初始化仓库、整理学习计划、生成笔记和 PoW 材料，也记录了我人工复核、修正和拒绝自动执行的部分。今天还确认了可交互学习产物：一个 Week 1 概念 Quiz demo。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->











今天继续推进 AI x Web3 School Week 1 的学习和 PoW 整理。我把学习仓库作为主要工作区，梳理了 Learning Agent Setup、工具准备、AI 概念卡片、Web3 概念卡片、AI x Web3 最小流程和 PoW Pack 的提交链接。今天的重点收获是：AI Agent 可以帮助拆解任务、生成笔记和维护 repo，但涉及钱包、签名、交易和提交的动作必须保留人工确认。下一步会补上测试钱包、测试网交易和最小合约交互记录。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->













AI 作为极其强大的生产力工具，正在向农业病虫害管理、基层社会网络等下沉场景渗透。但要解决非技术性的信任和激励问题，必须依靠 Web3 提供的生产关系（DID 身份、去中心化协作和 Tokenomics 支付结算）。两者的结合，正在给出解决本地化公共服务供给难题的新解法。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->














AI 极大地降低了知识和劳动力的门槛，是极强的生产力工具，但要让 AI 真正赋能基层、社会服务和跨国协作，必须依靠 Web3 提供的分布式经济模型与治理框架（生产关系）来解决利益分配与协同信任问题。无论是复杂的社会网络管理，还是农业等基层公共服务的数字化，技术工具最终都要嵌入到具体的人类社会组织和经济博弈中。Web3 的 DAO 和 Tokenomics 模型，恰恰为解决这种全球性与地方性公共产品的供给，提供了一种全新的全球治理实验场。但是，在下沉或公共服务场景中，由于用户群体的技术门槛较高，应该如何设计极其平滑的 Web2.5 用户准入路径，让非技术人员在感知不到底层复杂密码学的情况下享受 AI × Web3 的红利？
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->















今天看了 Web3 运行原理回放，Gas 机制本质上是对有限区块空间这种稀缺计算资源的动态定价模型。账户的数字签名确认意愿，而智能合约保证执行。这种用密码学和代码共识替代传统中介信任的机制，正是构建跨越国界的 DAO 以及实现高效全球化治理的底层基石。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->
















智能合约的底层逻辑是“代码即法律”，其不可篡改性带来了高信任。但如果面对现实世界中的突发危机或复杂博弈，DAO 在没有链下仲裁机制的情况下，如何兼顾这种硬性代码限制与治理的灵活性？

随着以太坊生态的演进，不同的测试网是如何平稳更替的？在本地使用 Foundry 模拟环境与在公共测试网上进行合约联调，各自的最佳实践场景是什么？
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->

















今天除了下载安装工具、建仓库之外没有进行实质性的课程学习，但把本地的工作流彻底搭好也是必经之路。明天的首要任务是去找个稳定的 Sepolia 水龙头领点测试用的 ETH，然后正式进入 Week 1 课程内容的学习。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
