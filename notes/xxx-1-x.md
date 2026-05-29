---
timezone: UTC+8
---

# xxx-1-x

**GitHub ID:** xxx-1-x

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->
AI Agent的核心能力：动态纠错

工具调用的层级逻辑

执行过程的逻辑复盘
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->

![67b8b97f2842d68d99f915f430cda5c9.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/xxx-1-x/images/2026-05-28-1779982268730-67b8b97f2842d68d99f915f430cda5c9.png)
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->


![ad04ead82933c3241c7fc48f196d5334.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/xxx-1-x/images/2026-05-27-1779896073919-ad04ead82933c3241c7fc48f196d5334.png)
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->



核心议题：AI 代理与资金安全的矛盾

目前 AI 代理直接管理钱包存在巨大风险。演示文稿指出，“提示词”（Prompts）可以表达意图，但无法强制执行权限。依赖传统的直接授权模式极易导致以下风险：

静默覆盖（Silent Override）： 代理违背提示词指令，未经授权擅自操作。

影子托管（Shadow Custody）： 代理在控制范围外自行创建钱包并转移资金，无审计追踪且不可找回。

其他挑战： 提示注入、无范围权限（Unscoped Authority）、僵尸权限（长期未过期的旧密钥）等。

解决方案：Cobo Agentic Wallet（代理钱包）的三大支柱

为了将“信任”转化为基础设施，Cobo 提出了三个行业首创的技术层，旨在实现从“给代理钱包”到“给代理契约（Pacts）”的范式转变。

1\. MPC 技术（多方计算）

逻辑： 彻底放弃单方控制。通过在代理、用户和 Cobo 之间拆分私钥份额。

保障： 实行 2/2 阈值签名，没有单一参与方可以单方面移动资金，实现了数学层面的安全保障，而非仅靠软件承诺。

2\. Pact 授权协议（Pact Authorization Protocol）

逻辑： 将执行权限制在“契约”内。

关键要素：

意图（Intent）： 明确任务目标。

执行计划（Execution Plan）： 预定义的路线图。

策略（Policies）： 包含预算上限、白名单、合约限制等。

完成条件（Completion Conditions）： 触发自动停止的机制（如任务完成、时间到期、预算耗尽）。

3\. Recipe 技能层（Recipe-Driven Skill Layer）

逻辑： 为代理提供“技能胶囊”。

作用： 不再让 AI 自由发挥（避免幻觉），而是让其执行经过预先验证的标准化工作流（例如 Uniswap 交换、资金流转等），从而弥合“代理想要做的事情”与“安全执行”之间的鸿沟。

总结与展望

架构升级： 从单纯的钱包访问模式，转变为“一人多代理，统一控制平面”的治理结构。

核心理念： Don’t give Agents Wallets. Give them Pacts.（不要只给代理钱包，要给他们“契约”）。通过基础设施层面的 enforce（强制执行），实现 AI 代理操作的透明、可控与合规。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->




1\. 行业痛点：区块链世界的隐私危机

分享者指出了当前 Web3 使用过程中的三个主要“痛点”：

中心化风险：用户高度依赖远程过程调用（RPC），如果预设的 RPC 服务商出现故障（如曾经发生的 AWS 宕机），钱包和交易功能会瞬间瘫痪，这种单点故障风险极大。

隐私泄露（IP与地址关联）：在发起交易时，节点或 RPC 提供商可以轻易关联用户的 IP 地址与钱包地址，从而实现变相的 KYC（了解你的客户），导致去中心化程度大打折扣。

资产可见性：大多数钱包会追踪用户收到的资产，虽然方便，但也让每一笔资金流动轨迹完全暴露在链上，缺乏隐私保护。

2\. 解决方案：以 Railgun 为代表的 ZK 隐私系统

分享的核心在于介绍 Railgun 这种利用 ZK (Zero-Knowledge，零知识证明) 实现的隐私协议：

ZK-Privacy System（ZK 隐私系统）：其核心逻辑是引入“屏蔽池（Shielded Pool）”。通过将资产存入屏蔽池并生成零知识证明，隐藏资产的具体来源和流向。

UTXO 模型与隐私保护：利用 UTXO 模型，将“公共地址资产”转换为“Railgun 私密地址资产”。即使在隐私地址内部进行转账（如 Alice 传给 Bob），外界也无法在链上直接追踪到具体的归属和流转过程。

“更新期”设计：Shield（屏蔽）资产入池后会有 1 小时左右的更新期，确保匿名集合有足够的时间进行数据更新，防止攻击者利用新交易的规律性进行关联分析（解匿名）。

3\. 会议背景

这是一个通过 Zoom 进行的线上交流会（截图中有多人在线）。

参与者正在阅读 X（推特）上关于“UTXO：隐秘及稳定的关键”的深度技术长文。

讨论内容具有很强的技术指向性，偏向于去中心化金融（DeFi）的底层架构与隐私方案。

一句话总结：

这场分享主要讨论了 Web3 在 RPC 服务、IP 关联及资产追踪上的隐私短板，并重点讲解了 Railgun 如何通过零知识证明（ZK）和屏蔽地址技术，在保证资产流转的同时实现链上交易的高度隐私化。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->





会议逐字稿｜中英竖向对照版

AI and Web3 School Bonus Session: Open Agentic Economy  
整理范围：从 Sophia 入会开始；保留时间码与发言人；自动字幕错误已按上下文合理修正，疑似内容以【猜】标注。

# **一、Sophia 入会与主持人开场**

**\[10:05:46\] Sophia**

**Original / Cleaned transcript**

Hello, hello. So sorry for the delay. I did not have a calendar invite, so I messed up the time on my time zone.

**中文翻译 / 整理**

大家好，大家好。非常抱歉我迟到了。我没有收到日历邀请，所以把自己时区里的时间弄错了。

**\[10:05:54\] LXDAO**

**Original / Cleaned transcript**

Okay, okay, thank you. Since you are here, we can start right now.

**中文翻译 / 整理**

好的，好的，谢谢你。既然你来了，我们现在就可以开始了。

**\[10:06:01\] LXDAO**

**Original / Cleaned transcript**

Hello everyone. So sorry for making you wait for such a long time. Thank you so much for joining us this morning.

**中文翻译 / 整理**

大家好，非常抱歉让大家等了这么久。非常感谢大家今天早上加入我们。

**\[10:06:10\] LXDAO**

**Original / Cleaned transcript**

Welcome to today's session. I know it is very early on Saturday morning. I really appreciate everyone still being here right now, and you have waited for one hour. So sorry.

**中文翻译 / 整理**

欢迎来到今天的 session。我知道现在是周六非常早的时间。大家已经等了一个小时，还愿意留在这里，我真的非常感谢，也再次抱歉。

**\[10:06:24\] LXDAO**

**Original / Cleaned transcript**

Because of the time-zone difference, we scheduled this session a bit earlier than weekdays. Today is also a special bonus session for the AI and Web3 School. We are super happy to have Sophia from the Ethereum Foundation here with us today.

**中文翻译 / 整理**

因为时差的原因，我们把这次 session 安排得比工作日更早一些。今天也是 AI and Web3 School 的特别 bonus session。我们非常高兴邀请到来自 Ethereum Foundation 的 Sophia，今天和我们一起分享。

**\[10:06:44\] LXDAO  _【含猜测/整理】_**

**Original / Cleaned transcript**

Today's topic is "Open Agentic Economy," from ERC-8004 or ERC-1A3【guess】 to build a path【guess】. Recently, there has been a lot of discussion around AI agents, on-chain coordination, and what the future agent economy could look like. So I think today's sharing is going to be really interesting.

**中文翻译 / 整理**

今天的主题是"Open Agentic Economy"。字幕中识别为"from ERC-8004 or ERC-1A3 to build a path"，其中后半部分可能有误【猜】。最近大家围绕 AI agent、链上协调，以及未来 agent economy 会是什么样子，有很多讨论。所以我觉得今天的分享会非常有意思。

**\[10:07:12\] LXDAO**

**Original / Cleaned transcript**

Before we start, feel free to say hi in the chat and let us know where you are joining from today. Thank you everyone. Sophia, I will pass it over to you now.

**中文翻译 / 整理**

在开始之前，大家可以在聊天区打个招呼，也可以说一下今天是从哪里加入的。谢谢大家。Sophia，现在交给你。

# **二、Sophia 自我介绍与分享框架**

**\[10:07:31\] Sophia**

**Original / Cleaned transcript**

Amazing. Thank you all, everyone, and apologies again for the time-zone mishap. I am super excited to talk to you all today. I have an exciting presentation all about the future of AI and Ethereum. I think this is a big question that many people have had questions about and wanted to learn more about.

**中文翻译 / 整理**

太好了。谢谢大家，也再次为刚才的时区问题道歉。今天我非常高兴能和大家交流。我准备了一个关于 AI 和 Ethereum 未来的 presentation。我觉得这是很多人都关心、也有很多问题想进一步了解的话题。

**\[10:07:51\] Sophia**

**Original / Cleaned transcript**

I am going to share my screen. Let's see... There we go. Can everyone see my screen okay?

**中文翻译 / 整理**

我现在来分享屏幕。让我看一下……好了。大家能看到我的屏幕吗？

**\[10:08:26\] LXDAO**

**Original / Cleaned transcript**

Yeah. Yeah.

**中文翻译 / 整理**

可以，可以。

**\[10:08:27\] Sophia**

**Original / Cleaned transcript**

Amazing. Well, I am Sophia. I work on the Developer Acceleration team at the Ethereum Foundation. A lot of my job is talking to builders about why Ethereum, and what the opportunities are for actually building on Ethereum.

**中文翻译 / 整理**

太好了。我是 Sophia，在 Ethereum Foundation 的 Developer Acceleration 团队工作。我的工作很大一部分是和 builders 交流，讨论为什么选择 Ethereum，以及在 Ethereum 上构建有哪些机会。

**\[10:08:39\] Sophia**

**Original / Cleaned transcript**

What I am excited to talk about today is: where is Ethereum's role in the future of artificial intelligence? Artificial intelligence is really taking the world by storm and affecting all of our technology, and Ethereum has a very crucial role to play. I am super excited to talk to you a little bit more about that today.

**中文翻译 / 整理**

今天我最想讲的是：Ethereum 在人工智能的未来中扮演什么角色？人工智能正在快速发展，并且影响我们所有的技术，而 Ethereum 在其中有一个非常关键的角色。今天我很期待和大家展开讲讲。

**\[10:09:02\] Sophia**

**Original / Cleaned transcript**

Before I get into the whole presentation, I wanted to back up and give a big picture of AI and Ethereum, what the future of these two technologies is, and the full context. Then I will jump into what Ethereum actually is, why its specific properties matter for AI, and then we will jump into real-world examples for you to start building and areas where you can get involved yourself.

**中文翻译 / 整理**

在正式开始之前，我想先从宏观层面讲一下 AI 和 Ethereum，以及这两种技术未来的关系和完整背景。然后我会讲 Ethereum 到底是什么，为什么它的一些特性对 AI 很重要。最后我会讲一些真实世界的例子，以及你们可以开始构建、参与的方向。

# **三、AI Agent 成为经济参与者**

**\[10:09:27\] Sophia**

**Original / Cleaned transcript**

To back up a little bit, I want to start from where LLMs even began. There have been huge improvements in actual AI capabilities. Over the last 18 months, large language models went from a smart chatbot that you can ask questions to, to agents that are writing code, moving money, making decisions, negotiating with software, hiring other agents, and more.

**中文翻译 / 整理**

为了往前追溯一点，我想先从 LLM，也就是大语言模型的发展说起。AI 的实际能力已经有了非常大的提升。在过去 18 个月里，大语言模型已经从一个可以回答问题的智能聊天机器人，变成了能写代码、转移资金、做决策、与软件协商，甚至雇佣其他 agents 的系统。

**\[10:09:56\] Sophia**

**Original / Cleaned transcript**

What we are really seeing is that AI is no longer just a tool that you query. It is starting to be a new type of economic participant, and it is starting to participate in the economy.

**中文翻译 / 整理**

我们真正看到的是：AI 不再只是一个你去查询的工具，它正在成为一种新的经济参与者，并且开始参与经济活动。

**\[10:10:10\] Sophia**

**Original / Cleaned transcript**

Then this new question comes up: if they are an economic participant, what rails do they run on? What infrastructure do they use? How do they pay? How do they build, and how do they actually make commitments?

**中文翻译 / 整理**

于是一个新的问题出现了：如果 AI agents 是经济参与者，那么它们运行在什么轨道上？它们使用什么基础设施？它们如何付款？如何构建？又如何真正作出承诺？

**\[10:10:23\] Sophia**

**Original / Cleaned transcript**

What we are seeing is that Ethereum is becoming this coordination layer for value and commitments. I will describe what coordination, value, and commitment mean later in this presentation.

**中文翻译 / 整理**

我们正在看到，Ethereum 正在成为一个关于价值和承诺的协调层。后面我会解释 coordination、value 和 commitment 分别是什么意思。

# **四、为什么现在讨论 AI + Ethereum**

**\[10:10:38\] Sophia**

**Original / Cleaned transcript**

So, why now? Why are we having this conversation about AI and Ethereum today? Why were we not having this conversation last year, or the year before, or when Ethereum was created in 2015?

**中文翻译 / 整理**

那么，为什么是现在？为什么我们今天要讨论 AI 和 Ethereum？为什么不是去年、前年，或者 Ethereum 在 2015 年刚被创造出来的时候？

**\[10:10:51\] Sophia  _【含猜测/整理】_**

**Original / Cleaned transcript**

The big reason is that the rise of AI agents is growing at an exponential rate. A year ago, Davez【guess】 wrote an interesting post called "The Internet of Agents." He said there would be a future internet full of agents. At that time, it sounded really futuristic, but now that has become a lot more mainstream.

**中文翻译 / 整理**

一个很大的原因是 AI agents 正在以指数级速度增长。一年前，Davez【猜】写了一篇很有意思的文章，叫"The Internet of Agents"。他认为未来会出现一个充满 agents 的互联网。当时这听起来还非常未来主义，但现在已经越来越主流了。

**\[10:11:17\] Sophia  _【含猜测/整理】_**

**Original / Cleaned transcript**

At the same time, ERC-8004 went live earlier this January, around the same time that OpenAI / OpenCode【guess】 went mainstream and people were building agents for the first time. People started to ask: what does this agent have access to? Can it get all of my information and data? How can I actually put rules on these agents? These were questions mainstream people started to ask for the first time.

**中文翻译 / 整理**

与此同时，ERC-8004 在今年 1 月早些时候上线。差不多同一时期，OpenAI / OpenCode【猜】变得非常主流，人们第一次开始构建 agents。大家开始问：agent 能访问什么？它能拿到我所有的信息和数据吗？我怎样才能给这些 agents 设置规则？这些是普通用户第一次开始真正提出的问题。

**\[10:11:50\] Sophia**

**Original / Cleaned transcript**

All of these agents are popping up, and they will need infrastructure for transacting, negotiating, and payments. That payment infrastructure will shape everything about how the economy on top of it works.

**中文翻译 / 整理**

越来越多的 agents 正在出现，而它们需要用于交易、协商和支付的基础设施。而这个支付基础设施，将决定建立在其上的整个经济如何运转。

**\[10:12:05\] Sophia**

**Original / Cleaned transcript**

Right now, if you think about agents and the infrastructure they use on our internet, they cannot use infrastructure designed for humans. Think about a password. If you tell an agent to keep a password secret, it cannot really keep that secret because it stores it in the context window. If you tell it to open a bank account and make a payment, it also cannot always do that safely; it can easily be prompted into doing something wrong.

**中文翻译 / 整理**

现在，如果你想想 agents 以及它们在互联网中使用的基础设施，就会发现：它们不能直接使用那些原本为人类设计的基础设施。比如密码，如果你告诉一个 agent"请把这个密码保密"，它其实不能真正保密，因为它会把内容存储在上下文窗口里。如果你让它开银行账户并完成支付，它也不一定能安全做到，因为它很容易被 prompt 诱导去做错误的事情。

**\[10:12:36\] Sophia**

**Original / Cleaned transcript**

They cannot actually settle a legal contract, and they cannot build reputation through human channels either.

**中文翻译 / 整理**

它们也不能真正签署法律合同，也不能通过人类社会的渠道来建立信誉。

**\[10:12:53\] Sophia**

**Original / Cleaned transcript**

This brings up a question: if the infrastructure that AI agents transact on will shape how this new economy works, who can participate? How does trust get established? Where does the value flow? How is the playing field open? That is the infrastructure being designed right now, and the design choices being made right now will compound as AI activity starts to scale.

**中文翻译 / 整理**

于是就出现了一个问题：如果 AI agents 交易所依赖的基础设施会塑造这个新经济的运行方式，那么谁能参与？信任如何建立？价值流向哪里？竞争环境如何保持开放？这些基础设施现在正在被设计，而现在做出的设计选择，会随着 AI 活动规模扩大而不断放大影响。

**\[10:13:25\] Sophia**

**Original / Cleaned transcript**

At any point, if you want to ask a question or jump in, I would love to make this interactive. Feel free to add something in the chat. Let me check if I have anything in the chat.

**中文翻译 / 整理**

任何时候，如果你们想提问或者插话，都可以。我希望这次分享是互动的，所以欢迎大家在聊天区留言。我来看一下聊天区有没有问题。

**\[10:13:43\] LXDAO**

**Original / Cleaned transcript**

If anyone has questions, feel free to put them in the chat.

**中文翻译 / 整理**

如果大家有问题，欢迎直接放到聊天区。

**\[10:13:56\] Sophia**

**Original / Cleaned transcript**

Awesome. I do not think I have any questions yet. If you do, feel free to add any there.

**中文翻译 / 整理**

很好。我现在好像还没有看到问题。如果后面有问题，欢迎继续放在聊天区。

# **五、Ethereum for AI = Ethereum for Humans 与 CROPS**

**\[10:14:05\] Sophia**

**Original / Cleaned transcript**

Ultimately, the main point I want to talk about is that Ethereum for AI really means Ethereum for humans. Ethereum is a public, programmable blockchain that does two things: you can own things digitally without an intermediary, and you can coordinate with other people without a central operator. Ethereum moves value and enforces agreements without needing a middleman. This is really important for the agentic economy.

**中文翻译 / 整理**

我今天想讲的核心观点是：Ethereum for AI，其实意味着 Ethereum for humans。Ethereum 是一个公共的、可编程的区块链，它做两件事：第一，你可以在没有中介的情况下拥有数字资产；第二，你可以在没有中心化运营方的情况下与其他人协作。Ethereum 可以移动价值，也可以执行协议，而且不需要中间人。这对 agentic economy 非常重要。

**\[10:14:38\] Sophia**

**Original / Cleaned transcript**

One of the unique things about Ethereum is that it is built around design principles. We use the acronym CROPS, and these are the principles that make Ethereum uniquely Ethereum, not just another blockchain. CROPS stands for censorship resistance, open source and free, privacy, and security.

**中文翻译 / 整理**

Ethereum 的一个独特之处在于，它围绕一些设计原则来构建。我们用缩写 CROPS 来概括这些原则。正是这些原则让 Ethereum 成为 Ethereum，而不仅仅是另一个区块链。CROPS 分别代表：抗审查、开源且自由、隐私和安全。

**\[10:14:58\] Sophia**

**Original / Cleaned transcript**

Ultimately, this enables a whole suite of applications. You might be familiar with DeFi and financial applications. We can also do things with identity, governance, and AI agentic infrastructure.

**中文翻译 / 整理**

这些原则最终支持了一整套应用。你们可能熟悉 DeFi 和金融应用，但我们也可以在身份、治理，以及 AI agent 基础设施方面做很多事情。

**\[10:15:24\] Sophia**

**Original / Cleaned transcript**

One second. I will be right back. I am just going to switch my computer so that I have better audio. Sorry about that. Can you hear me? Still here.

**中文翻译 / 整理**

等我一下，我马上回来。我换一下电脑，让音频更好一点。抱歉，大家还能听到我吗？我还在。

**\[10:15:55\] Swen Chan**

**Original / Cleaned transcript**

Hi Sophia, just a little question. Can you expand CROPS in detail? I think some people from the school do not know it very well.

**中文翻译 / 整理**

Hi Sophia，我有一个小问题。你能不能详细解释一下 CROPS？我觉得 school 里有些同学可能还不是很了解。

**\[10:16:10\] Sophia**

**Original / Cleaned transcript**

Yeah, I would love to explain more about CROPS. Let's jump into it.

**中文翻译 / 整理**

当然可以，我很愿意多解释一下 CROPS。我们来看这一部分。

**\[10:16:22\] Sophia**

**Original / Cleaned transcript**

CROPS has four aspects: censorship resistance, open source and free, privacy, and security.

**中文翻译 / 整理**

CROPS 有四个方面：抗审查、开源且自由、隐私和安全。

**\[10:17:12\] Sophia**

**Original / Cleaned transcript**

Censorship resistance is about no single actor being able to block valid transactions or valid activity on the network. For example, when you deploy a smart contract on the blockchain, if someone tries to interfere or block that code from executing, they cannot actually do that. Every valid transaction goes through and runs.

**中文翻译 / 整理**

抗审查的意思是：没有任何单一参与者能够阻止网络上的有效交易或有效活动。比如，当你把一个智能合约部署到区块链上，如果有人想干预或阻止这段代码执行，他其实做不到。每一笔有效交易都会被执行。

**\[10:17:46\] Sophia**

**Original / Cleaned transcript**

Open source and free means that the blockchain infrastructure and the code are open. Anyone can audit it, copy it, and build on top of it. If you interact with a smart contract, you can go to Etherscan and see the code. If you do not like what it is doing, you can fork it, copy it, and make changes.

**中文翻译 / 整理**

开源且自由意味着区块链基础设施和代码是开放的。任何人都可以审计、复制，并在其之上继续构建。如果你和一个智能合约交互，可以去 Etherscan 上查看它的代码。如果你不喜欢它现在做的事情，可以 fork 它，也就是复制一份，然后进行修改。

**\[10:18:11\] Sophia**

**Original / Cleaned transcript**

This affects what is possible when you are building, because you can build with Lego bricks. It actually changes what is possible here.

**中文翻译 / 整理**

这会影响开发者可以构建什么，因为你可以像搭乐高积木一样使用已有模块。这真正改变了这里的可能性。

**\[10:18:26\] Sophia**

**Original / Cleaned transcript**

Privacy is also a big thing in the Ethereum protocol itself. You can see that with zero-knowledge proofs, where you can prove something is true without revealing the underlying data.

**中文翻译 / 整理**

隐私也是 Ethereum 协议本身非常重视的一点。一个例子就是零知识证明，你可以证明某件事情是真的，但不暴露背后的底层数据。

**\[10:18:42\] Sophia**

**Original / Cleaned transcript**

Security is about having the code and the blockchain do what they say they will do, being secure, and being able to continue to run no matter what.

**中文翻译 / 整理**

安全指的是代码和区块链能够按照它们承诺的方式运行，保持安全，并且无论发生什么都能持续运行。

**\[10:19:01\] Sophia**

**Original / Cleaned transcript**

Feel free to drop more questions in the chat. I will jump into why CROPS specifically matters for Ethereum and how it adapts to what these agents actually need.

**中文翻译 / 整理**

如果大家还有问题，欢迎继续发到聊天区。接下来我会讲 CROPS 为什么对 Ethereum 特别重要，以及它如何对应到 agents 真正需要的东西上。

**\[10:19:14\] Sophia**

**Original / Cleaned transcript**

As I mentioned before, identity, reputation, payments, and enforceable agreements are all possible when these design principles are embedded in the infrastructure: censorship resistance, open source, privacy, and security.

**中文翻译 / 整理**

就像我前面提到的，身份、声誉、支付和可执行协议，都是在抗审查、开源、隐私和安全这些设计原则嵌入基础设施之后才成为可能的。

**\[10:19:30\] Sophia**

**Original / Cleaned transcript**

The core thing I want to emphasize is that Ethereum is this decentralized settlement and coordination backbone for machines in the machine economy, with humans at the center. In other words, it can be neutral infrastructure where anyone and machines can coordinate at scale, while people retain agency, ownership, and control.

**中文翻译 / 整理**

我想强调的核心是：Ethereum 是机器经济中面向机器的去中心化结算与协调骨干，但人类仍然处在中心位置。换句话说，它可以成为一种中立的基础设施，让任何人和机器都能在大规模下进行协调，同时人类仍然保留能动性、所有权和控制权。

**\[10:19:56\] Sophia**

**Original / Cleaned transcript**

This is much better than having one company decide the entire infrastructure that these agents would run on. What makes Ethereum a neutral layer is that people can settle value and make commitments there. Identity, reputation, and agreements can live out in the open, and the rules can be inspected and governed by humans.

**中文翻译 / 整理**

这比由某一个公司决定所有 agents 运行的基础设施要好得多。Ethereum 之所以能成为中立层，是因为人们可以在上面结算价值、作出承诺。身份、声誉和协议都可以公开存在，而规则也可以被人类检查和治理。

**\[10:20:30\] Sophia**

**Original / Cleaned transcript**

These are the pieces that make it possible for agents to run in a trusted way on Ethereum.

**中文翻译 / 整理**

这些就是让 agents 能够在 Ethereum 上以可信方式运行的关键组成部分。

# **六、EIP-8004、x402 与真实案例**

**\[10:20:47\] Sophia**

**Original / Cleaned transcript**

Now, a little bit about what you are currently building: EIP-8004. This is identity and trust for agents. Ultimately, EIP-8004 is a standard that gives AI agents verifiable identity and reputation.

**中文翻译 / 整理**

现在讲一点你们正在构建的东西：EIP-8004。它关注的是 agents 的身份和信任。简单来说，EIP-8004 是一个为 AI agents 提供可验证身份和声誉的标准。

**\[10:21:04\] Sophia**

**Original / Cleaned transcript**

There are three parts: verification, a registry, and reputation. This makes it possible that at any touch point with an agent, you can see its trust status and its reputation score. You can know whether you can or cannot trust that piece of software.

**中文翻译 / 整理**

它有三个部分：验证机制、注册表 registry，以及声誉 reputation。这样一来，在你和 agent 发生任何接触时，都能看到它的信任状态和声誉分数，从而判断这个软件是否值得信任。

**\[10:21:36\] Sophia  _【含猜测/整理】_**

**Original / Cleaned transcript**

You also have x402【guess; caption said "xbox 2"】, which is machine-to-machine payments. This is a payment-required status code, so there is an easy way to send or request payments. You can pay with stablecoins, so you do not need a credit card, API keys, billing setups, or different invoices.

**中文翻译 / 整理**

另外还有 x402【猜；字幕识别成"xbox 2"】，它与机器到机器之间的支付有关。这是一种"需要支付"的状态码，可以让机器更容易地发送或请求付款。你可以用稳定币支付，因此不需要信用卡、API key、账单设置或不同的发票系统。

**\[10:22:01\] Sophia  _【含猜测/整理】_**

**Original / Cleaned transcript**

Some concrete projects happening in this space include AI-powered protocol security, ZKLM credits【guess】, ZKML, and different university research partnerships.

**中文翻译 / 整理**

这个领域正在发生的一些具体项目包括：AI 驱动的协议安全、ZKLM credits【猜】、ZKML，以及不同的大学研究合作。

**\[10:22:16\] Sophia**

**Original / Cleaned transcript**

I want to go into a live example of something being run with AI agents right now in the Ethereum ecosystem. Recently, the Ethereum Foundation piloted a mechanism that allows AI agents to allocate public goods funding.

**中文翻译 / 整理**

我想讲一个现在已经在 Ethereum 生态中运行的 AI agents 真实案例。最近 Ethereum Foundation 试点了一个机制，允许 AI agents 分配公共物品资金。

**\[10:22:55\] Sophia**

**Original / Cleaned transcript**

If you are allocating hundreds of thousands of dollars across hundreds of GitHub repositories, how do you make that decision? This mechanism lets humans make the decision, while agents help scale human judgment. Humans design what these agents value and do not value, and then continue to tweak that in a back-and-forth process.

**中文翻译 / 整理**

如果你要把几十万美元分配给几百个 GitHub 仓库，你要如何做决定？这个机制的思路是仍然让人类作出决策，但让 agents 帮助扩大人类判断的规模。人类设计这些 agents 应该重视什么、不重视什么，并持续调整这些规则，这是一个来回迭代的过程。

**\[10:23:02\] Sophia**

**Original / Cleaned transcript**

This gets into the core of putting rules and guardrails around agents, and how they allocate capital in a way aligned with human incentives.

**中文翻译 / 整理**

这涉及一个核心问题：如何给 agents 设置规则和护栏，让它们在分配资本时与人类激励保持一致。

**\[10:23:13\] Sophia**

**Original / Cleaned transcript**

On the roadmap, there will be a validation registry for ERC-8004 with TEE-based verification. There will be expanded private payment infrastructure, automated negotiation between agents and smart contracts, more integration with AI frameworks and enterprise tools, and deeper university research partnerships.

**中文翻译 / 整理**

在未来路线图上，ERC-8004 会有一个 validation registry，并结合基于 TEE 的验证；还会扩展 private payment infrastructure；推进 agents 与智能合约之间的自动化协商；与 AI 框架和企业工具进行更多集成；以及开展更深入的大学研究合作。

**\[10:23:40\] Sophia**

**Original / Cleaned transcript**

The big core thesis is that Ethereum for AI really means Ethereum for humans: public infrastructure for creating ownership and coordination that nobody controls. The infrastructure that AI agents transact on will shape how this new AI agentic economy works. Whether that infrastructure should be open and neutral, or controlled by a few companies, is a question all of us get to decide based on how we build this technology.

**中文翻译 / 整理**

最大的核心论点是：Ethereum for AI，实际上意味着 Ethereum for humans。它是一种公共基础设施，用来创造没有任何人单独控制的所有权和协调方式。AI agents 未来用于交易的基础设施，将塑造新的 AI agentic economy 的运行方式。这个基础设施应该是开放、中立的，还是由少数几家公司控制，取决于我们如何构建这项技术。

**\[10:24:24\] Sophia**

**Original / Cleaned transcript**

If you are curious to learn more, I encourage you to check out resources including [ai.ethereum.foundation](http://ai.ethereum.foundation), [pse.dev](http://pse.dev), and [8004.org](http://8004.org). I am also available to chat on Twitter or Telegram if you have more questions, and I linked my Twitter here.

**中文翻译 / 整理**

如果你们想了解更多，我建议查看 [ai.ethereum.foundation](http://ai.ethereum.foundation)、[pse.dev](http://pse.dev) 和 [8004.org](http://8004.org) 等资源。如果之后还有问题，也欢迎通过 Twitter 或 Telegram 和我交流，我这里也放了我的 Twitter 链接。

# **七、Q&A 环节**

**\[10:25:02\] LXDAO**

**Original / Cleaned transcript**

Okay, thanks for sharing, Sophia. A lot of the ideas today were super interesting and inspiring. Now we can move to the Q&A part. If anyone has questions, feel free to raise your hand or drop your questions in the chat.

**中文翻译 / 整理**

好的，谢谢分享，Sophia。今天很多想法都非常有意思，也很有启发。现在我们进入 Q&A 环节。如果大家有问题，可以举手，或者把问题放到聊天区。

**\[10:25:25\] LXDAO**

**Original / Cleaned transcript**

I see a question in the chat box: "In what areas do you think AI will be applied? I have seen many payment systems already using it." Can you see that question in the chat?

**中文翻译 / 整理**

我看到聊天区有一个问题："你认为 AI 会应用在哪些领域？我已经看到很多支付系统在使用它。"你能看到这个问题吗？

**\[10:25:43\] Sophia**

**Original / Cleaned transcript**

Yes, I can see that.

**中文翻译 / 整理**

可以，我看到了。

**\[10:25:50\] Sophia  _【含猜测/整理】_**

**Original / Cleaned transcript**

If you are new to the space and want to get involved, I would recommend checking out ETH Skills【guess】. It is a skill file you can send to your agent, and it knows information about Ethereum, how to build on Ethereum, what it can and cannot do, how to register with 8004, and how to use some of the different EIP protocols involved.

**中文翻译 / 整理**

如果你是刚进入这个领域、想参与进来的新人，我会推荐你看看 ETH Skills【猜】。它是一个 skill file，你可以发送给你的 agent，让它了解 Ethereum、如何在 Ethereum 上构建、能做什么和不能做什么、如何注册 8004，以及如何使用相关的不同 EIP 协议。

**\[10:26:29\] Sophia**

**Original / Cleaned transcript**

Where do I think AI will mainly be applied? I do think payments are probably the biggest area where we will see AI and the agentic economy interacting. The main reason comes down to programmable money.

**中文翻译 / 整理**

我认为 AI 主要会应用在哪里？我确实觉得支付可能是我们看到 AI 和 agentic economy 发生互动的最大领域。主要原因在于 programmable money，也就是可编程货币。

**\[10:26:44\] Sophia**

**Original / Cleaned transcript**

Every smart contract can set rules for what payments can and cannot do. Think about how it would work outside of the blockchain. You might say: "Agent, go buy me a pizza. Here is my credit card information." It might spend too much money, it might not buy a pizza, or it might buy thousands of pizzas from the wrong vendor.

**中文翻译 / 整理**

每一个智能合约都可以为支付能做什么、不能做什么设置规则。想象一下，如果不使用区块链会怎样。你可能会说："Agent，帮我买一个披萨。这是我的信用卡信息。"但它可能花太多钱，可能根本没有买披萨，或者可能从错误商家那里买了几千个披萨。

**\[10:27:09\] Sophia**

**Original / Cleaned transcript**

Instead, you could say: "Agent, here is a wallet with only 10 dollars, and here is a smart contract. All you can do is spend up to 10 dollars, and you can only use it with this payment provider." That means it is guaranteed that I will actually get that pizza, and I can guarantee that you actually do what I said.

**中文翻译 / 整理**

相反，你可以说："Agent，这里有一个只有 10 美元的钱包，还有一个智能合约。你最多只能花 10 美元，并且只能通过这个支付服务商使用。"这意味着我可以保证自己真的拿到披萨，也能保证 agent 按照我说的方式执行。

**\[10:27:31\] Sophia**

**Original / Cleaned transcript**

That is something really powerful. So I definitely see payments as one of the big areas where AI will actually be applied.

**中文翻译 / 整理**

这非常强大。所以我确实认为，支付会是 AI 实际应用的重要领域之一。

**\[10:27:41\] Sophia**

**Original / Cleaned transcript**

I see another question here: in ERC-8004, does reputation represent the agent's reputation or the agent owner's reputation, or how does an agent have reputation? It is for the agent itself. It is for the actual piece of digital software that is there.

**中文翻译 / 整理**

我看到另一个问题：在 ERC-8004 中，reputation 代表的是 agent 的声誉，还是 agent owner 的声誉？或者说一个 agent 如何拥有声誉？答案是：它代表 agent 本身。也就是那个具体存在的数字软件实体。

**\[10:27:53\] Sophia**

**Original / Cleaned transcript**

It can expand beyond agents to APIs, oracles, or anything digital that needs reputation. For example, if you are an agent calling an API endpoint, you want to know: is that endpoint trusted? Is it malware? Is the endpoint still up? All of that information can come from 8004. But it is ultimately for agents; it is not for the humans behind the agent.

**中文翻译 / 整理**

这个概念也可以扩展到 agents 之外，比如 API、oracles，或者任何需要声誉机制的数字对象。例如，如果你是一个 agent，正在调用某个 API endpoint，你会想知道：这个 endpoint 值得信任吗？它是不是恶意软件？它现在还可用吗？这些信息都可以通过 8004 获得。但它最终是给 agents 或数字实体用的，不是给 agent 背后的人类用的。

**\[10:28:32\] Swen Chan**

**Original / Cleaned transcript**

Hi Sophia. I am Swen from East Panda. I think we have connected on Telegram. I also help with the school, and a core belief behind the school is that AI is becoming a new layer of internet infrastructure. Recently AI feels dramatically different from even a few months ago, not a year ago, just a few months ago. Silicon Valley is now putting real capex into infrastructure expansion, not just talking about infrastructure as a narrative.

**中文翻译 / 整理**

Hi Sophia，我是来自 East Panda 的 Swen。我觉得我们在 Telegram 上联系过。我也参与了这个 school。这个 school 背后的一个核心信念是：AI 正在成为互联网基础设施的新层。最近 AI 给人的感觉甚至和几个月前都非常不一样，不是一年前，而是几个月前。硅谷现在正在真正把资本开支投入到基础设施扩张中，而不只是把基础设施当成叙事来讲。

**\[10:29:16\] Swen Chan  _【含猜测/整理】_**

**Original / Cleaned transcript**

I am especially interested in agentic commerce and what you just included, like ERC-8004, A1A3【guess】, and related primitives. But I also see a gap: while AI is moving very fast, on-chain agent activity seems to be growing slowly. For example, some AGP【guess】 metrics have only moved from around 3.95 million to 4 million in recent months, just a little bit, and many jobs do not seem to be actually executing now. I checked the most popular jobs on their board.

**中文翻译 / 整理**

我特别感兴趣的是 agentic commerce，以及你刚才提到的 ERC-8004、A1A3【猜】和相关 primitives。但我也看到一个 gap：AI 发展非常快，而链上的 agent activity 似乎增长比较慢。比如某些 AGP【猜】指标最近几个月只从大约 395 万增长到 400 万，只增长了一点点，而且很多 jobs 好像并没有真的在执行。我看了他们 board 上最热门的 jobs。

**\[10:30:12\] Swen Chan**

**Original / Cleaned transcript**

My first question is: how would you interpret this gap? Looking forward, where do you think the next breakthrough for agentic commerce will come from?

**中文翻译 / 整理**

我的第一个问题是：你如何理解这个 gap？往前看，你认为 agentic commerce 的下一个突破会来自哪里？

**\[10:30:39\] Sophia**

**Original / Cleaned transcript**

Where will the next breakthrough in agentic commerce come from? I definitely think the main area will probably be payments from large enterprises. You are seeing things like Stripe, Bridge, Visa, and existing players who want to do AI-powered payments and AI-powered trading. That will probably be where a lot of actual agent payments start to have larger adoption.

**中文翻译 / 整理**

agentic commerce 的下一个突破会来自哪里？我认为主要方向很可能是大型企业的支付场景。你会看到 Stripe、Bridge、Visa 这类已有参与者，它们想做 AI-powered payments 和 AI-powered trading。很多实际的 agent payments 可能会从这些场景开始获得更大规模的应用。

**\[10:31:04\] Swen Chan  _【含猜测/整理】_**

**Original / Cleaned transcript**

Another interesting question: do you think MPP【guess】 would be better for agents to execute than x402?

**中文翻译 / 整理**

另一个有意思的问题：你认为 MPP【猜】是否会比 x402 更适合 agents 执行？

**\[10:31:19\] Sophia**

**Original / Cleaned transcript**

Yeah, super interesting. It is only on the Tempo blockchain right now, and it is designed specifically with agent payments in mind. I do not have as much information because I am more part of the Ethereum ecosystem rather than the Tempo blockchain, but it is a super interesting piece of software.

**中文翻译 / 整理**

是的，这很有意思。它目前只在 Tempo blockchain 上，而且设计时确实专门考虑了 agent payments。因为我更多是在 Ethereum 生态，而不是 Tempo blockchain，所以我没有那么多信息。但它确实是一个非常有意思的软件。

**\[10:31:40\] Swen Chan**

**Original / Cleaned transcript**

Another question: which is more important, new protocols or real applications built on top of primitives, like escrow jobs? Which one is better?

**中文翻译 / 整理**

还有一个问题：你觉得哪个更重要，是新的协议，还是基于 primitives 构建的真实应用，比如 escrow jobs？哪个更好？

**\[10:32:00\] Sophia**

**Original / Cleaned transcript**

Definitely applications, existing applications, or doing new types of applications. If you are a new builder, one of the areas where you can have the most advantage is having specific understanding of a specific market. I believe everyone here is in China, correct? So you understand the market better than some other builders. Building new types of applications in areas where you have expertise is where you can be successful.

**中文翻译 / 整理**

肯定是应用，已有应用，或者新的应用类型。如果你是一个新的 builder，你最有优势的地方之一就是你对某个具体市场有特定理解。我相信这里很多人都在中国，对吗？所以你们可能比其他 builders 更了解这个市场。基于自己熟悉的领域去构建新的应用类型，是你们可能成功的地方。

**\[10:32:37\] Swen Chan**

**Original / Cleaned transcript**

So do we need to customize more in our applications? From my opinion, the protocol side cannot cover every kind of job right now.

**中文翻译 / 整理**

所以我们是不是需要在自己的应用里做更多定制？在我看来，协议层目前还不能覆盖每一种 job。

**\[10:32:58\] Sophia**

**Original / Cleaned transcript**

Sorry, what was the question?

**中文翻译 / 整理**

抱歉，你的问题是什么？

**\[10:33:00\] Swen Chan**

**Original / Cleaned transcript**

I mean, if we want to build an application on agents, we need to customize more in the application, because the protocol cannot cover every kind of job right now.

**中文翻译 / 整理**

我的意思是，如果我们想构建一个基于 agents 的应用，就需要在应用层做更多定制，因为协议现在还不能覆盖每一种 job。

**\[10:33:26\] Sophia**

**Original / Cleaned transcript**

Yes, I think so.

**中文翻译 / 整理**

是的，我认为是这样。

**\[10:33:33\] LXDAO**

**Original / Cleaned transcript**

Okay. Any questions? Anyone can ask.

**中文翻译 / 整理**

好的，还有问题吗？大家都可以问。

**\[10:34:31\] Sophia**

**Original / Cleaned transcript**

That is a fabulous question. Ultimately, it is up to the builders to decide. I agree with you: users usually go for what is easiest and most convenient, and sometimes they give up privacy or other values just for convenience.

**中文翻译 / 整理**

这是一个非常好的问题。最终，这取决于 builders 如何决定。我同意你的看法：用户通常会选择最简单、最方便的东西，有时候他们会为了方便而放弃隐私或其他价值。

**\[10:34:48\] Sophia**

**Original / Cleaned transcript**

It is really up to builders to decide how we want the future to look: whether we want one company in control, or whether we want the future of agents and the agent economy to be on neutral infrastructure.

**中文翻译 / 整理**

所以这确实取决于 builders，我们希望未来是什么样子：是让一家公司掌控，还是让 agents 和 agent economy 的未来建立在中立的基础设施之上。

**\[10:35:06\] Sophia**

**Original / Cleaned transcript**

Alright, well, thank you guys so much for having me.

**中文翻译 / 整理**

好的，非常感谢大家邀请我。

**\[10:35:10\] LXDAO**

**Original / Cleaned transcript**

Thank you, Sophia. Does anyone have more questions? Just raise your hand or leave your questions in the chat box.

**中文翻译 / 整理**

谢谢你，Sophia。还有人有问题吗？可以举手，或者把问题留在聊天区。

**\[10:35:23\] Long San  _【含猜测/整理】_**

**Original / Cleaned transcript**

Can you hear me? There are so many projects and tokens【guess】. How can we tell the value of an opportunity?【guess】

**中文翻译 / 整理**

能听到我吗？现在有很多项目和 token【猜】。我们怎么判断机会的价值？【猜】

**\[10:35:48\] Sophia**

**Original / Cleaned transcript**

Around token stuff, I am not sure I have answers to that one.

**中文翻译 / 整理**

关于 token 相关的问题，我不确定我能回答。

**\[10:36:01\] Sophia**

**Original / Cleaned transcript**

I see another question here around 8004. I think, to not get through scams, just do your own due diligence.

**中文翻译 / 整理**

我看到这里还有一个关于 8004 的问题。我觉得，为了避免被骗，还是要自己做好尽职调查。

**\[10:36:14\] Sophia**

**Original / Cleaned transcript**

There is also a question about making applications resistant to attacks and safety models, and preventing facilitators from becoming centralized payment gateways. That is a great question. I have not thought about the specifics there, but I can definitely look more into that and get back to you. If you want to continue connecting about this, feel free to message me on Twitter. I would like to jam on this further.

**中文翻译 / 整理**

还有一个问题是关于如何让应用抵抗攻击、建立安全模型，以及防止 facilitators 变成中心化支付网关。这是一个很好的问题。我还没有具体思考过这个问题的细节，但我可以继续研究后再回复你。如果你想继续交流，欢迎在 Twitter 上联系我，我也很愿意继续讨论。

**\[10:36:48\] LXDAO**

**Original / Cleaned transcript**

There is still a question in the box about AI security and openness, ERC-8004.

**中文翻译 / 整理**

聊天区还有一个问题，是关于 AI 安全、开放性和 ERC-8004 的。

**\[10:36:55\] Sophia**

**Original / Cleaned transcript**

I just saw that one. I just read that one. I answered that.

**中文翻译 / 整理**

我刚刚看到了，也刚刚读了那个问题。我已经回答了。

**\[10:37:07\] LXDAO**

**Original / Cleaned transcript**

Does anyone still have questions? Just leave them here or raise your hand. We still have time for this session.

**中文翻译 / 整理**

还有人有问题吗？可以继续发在这里，或者举手。我们这个 session 还有时间。

**\[10:37:24\] Sophia**

**Original / Cleaned transcript**

In terms of AI crypto tokens, I definitely cannot comment on project tokens. I do not personally get involved there.

**中文翻译 / 整理**

关于 AI crypto tokens，我确实不能评论具体项目的 token。我个人不参与这方面。

**\[10:37:36\] Swen Chan**

**Original / Cleaned transcript**

I think we should try to be builders, not traders.

**中文翻译 / 整理**

我觉得我们应该努力成为 builders，而不是 traders。

**\[10:37:41\] Sophia**

**Original / Cleaned transcript**

Yeah, I can talk about building and protocols, but less about tokens. If you have more questions, I am happy to take them on Twitter as well. I am in a different time zone, so it is a bit later on my end, and I know it is early for you guys as well. Happy to follow up via Twitter.

**中文翻译 / 整理**

是的，我可以讨论构建和协议，但比较少谈 token。如果大家还有更多问题，我也很乐意在 Twitter 上继续回答。我在不同的时区，我这边时间已经有点晚了，我知道你们那边也很早。欢迎之后通过 Twitter 跟进。

**\[10:38:07\] LXDAO**

**Original / Cleaned transcript**

Thanks, Sophia. If there are no more questions, maybe we can end earlier.

**中文翻译 / 整理**

谢谢你，Sophia。如果没有更多问题，也许我们可以提前结束。

**\[10:38:22\] Sophia**

**Original / Cleaned transcript**

Awesome. Thank you so much. I definitely agree that hopefully we do not have to rely on centralized banks to move money, and we can have neutral decentralized infrastructure. That is one of the big goals as well.

**中文翻译 / 整理**

很好，非常感谢。我也完全同意，希望未来我们不必依赖中心化银行来转移资金，而是可以拥有中立的去中心化基础设施。这也是一个重要目标。

**\[10:38:40\] Sophia**

**Original / Cleaned transcript**

Thank you so much for having me. Again, if anything comes up or I can support in any way, feel free to message me on Twitter. Thank you.

**中文翻译 / 整理**

非常感谢大家邀请我。再次说明，如果之后有任何问题，或者我能提供任何支持，欢迎在 Twitter 上联系我。谢谢。

**\[10:38:48\] LXDAO**

**Original / Cleaned transcript**

Thank you. Bye-bye, Sophia. Thanks for sharing today.

**中文翻译 / 整理**

谢谢。拜拜，Sophia。感谢你今天的分享。

# **八、会后提醒**

**\[10:38:58\] LXDAO**

**Original / Cleaned transcript**

Thank you everyone for joining us today, and thank you again for still waiting here for one hour. Thanks Sophia for taking the time to share.

**中文翻译 / 整理**

感谢大家今天参加，也再次感谢大家等了一个小时。也谢谢 Sophia 抽时间来分享。

**\[10:39:11\] Swen Chan**

**Original / Cleaned transcript**

可以讲中文了，感觉。

**中文翻译 / 整理**

感觉现在可以讲中文了。

**\[10:39:14\] LXDAO**

**Original / Cleaned transcript**

Okay, 那可以了。我们现在就没有什么事儿了。然后跟大家提醒一下。

**中文翻译 / 整理**

好的，那可以了。我们现在基本没有其他事情了。然后跟大家提醒一下。

**\[10:39:23\] LXDAO**

**Original / Cleaned transcript**

如果大家还没有完成 Week 1 的一些任务，可以在这周周末完成一下。因为下周一又是新的分享会以及新的任务，会开放新的任务。

**中文翻译 / 整理**

如果大家还没有完成 Week 1 的一些任务，可以在这个周末完成一下。因为下周一会有新的分享会和新的任务，新的任务也会开放。

**\[10:39:43\] LXDAO**

**Original / Cleaned transcript**

如果前面的任务累计没有完成，后面压力可能会比较大。记分应该是在 6 月 14 号，可能 6 月 15 号就结束，大家自己安排时间。

**中文翻译 / 整理**

如果前面的任务累积没有完成，后面压力可能会比较大。计分应该会在 6 月 14 日，或者可能 6 月 15 日结束，大家可以根据自己的时间安排。

**\[10:40:02\] LXDAO**

**Original / Cleaned transcript**

如果有些分享会在看回放的时候还不是很理解，大家可以再去看一些，或者遇到技术难题，可以问我们的助教老师们。

**中文翻译 / 整理**

如果大家看回放时对某些分享会内容还不是很理解，可以再多看一些，或者如果有技术难题，可以问我们的助教老师们。

**\[10:40:15\] LXDAO**

**Original / Cleaned transcript**

关于回放，大家可以看 YouTube、Twitter，或者发到 T1 群里面的 Notion。Notion 上有中英文 recap。

**中文翻译 / 整理**

关于回放，大家可以去看 YouTube、Twitter，或者 T1 群里的 Notion。Notion 上会有中英文 recap。

**\[10:40:29\] LXDAO**

**Original / Cleaned transcript**

其他暂时没有了。下周主要是交互，内容会更多，难度也会更大。

**中文翻译 / 整理**

其他暂时没有了。下周主要是交互内容，会更多一些，难度也会更大。

**\[10:40:39\] LXDAO**

**Original / Cleaned transcript**

今天这边完成之后，如果大家想参加 LXDAO 周会的话，可以 11 点进来听一下；或者大家也可以自行安排周末时间。

**中文翻译 / 整理**

今天这边结束之后，如果大家想参加 LXDAO 周会，可以 11 点进来听一下；或者大家也可以自行安排周末时间。

**\[10:40:58\] LXDAO**

**Original / Cleaned transcript**

大家周一见。我发一下周会链接，想进来的话可以来，没关系。It is up to you. 这个也是 Room 会议，但是不加分，是自愿的。来就来，不来也没关系。

**中文翻译 / 整理**

大家周一见。我发一下周会链接，想来的话可以来，没关系。这个完全由你们自己决定。它也是 Room 会议，但是不加分，是自愿的。来不来都可以。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->






![a34e292af23a9a5f34f98856c459ccb3.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/xxx-1-x/images/2026-05-22-1779464827122-a34e292af23a9a5f34f98856c459ccb3.png)
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->







老师讲解了AI与WEB3的交叉应用 比如钱包（链上支付）量化 探讨了稳定币和AI结合的可能

![976be90c69060079dfed66eaca136881.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/xxx-1-x/images/2026-05-21-1779377503565-976be90c69060079dfed66eaca136881.png)
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->








爱马仕小助手像一个小型贾维斯，Skills是AI最小可复用独立技能包，将高频固定任务的规则、Prompt、工具逻辑、输出标准封装固化，实现一次封装、多次复用、随时调用。演示了如何安装配置爱马仕小助手
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->









🔄 支付系统模型：从 Web2 到 Web3 的演进

🌐 1. Web2 传统支付模型

🧩 **系统结构**：由电商平台、支付服务商（如TC）和银行/金融机构（Banking Institution）三个核心对象组成。

💸 **资金流转**：用户银行卡 → 支付服务商控制的银行卡 → 定时清结算至电商平台银行卡。

🔐 **安全与信任机制**

📩 **身份验证**：服务商之间依赖 API Key 或 Secret Key 进行回调的安全性验证，防止伪造支付成功通知。

👤 **用户侧安全**：依赖支付密码、风控系统、MFA（多因素认证）等。

🤝 **信任基础**：整套系统完全基于“对权威机构的绝对信任”，例如信任银行给出的扣款回调。

⛓️ 2. Web3 支付模型

🔁 **核心变化**：抽象层面将传统银行/金融机构替换为区块链，各类 Layer1 / Layer2 公链等同于不同银行接入渠道。

🏗️ **系统结构**：由电商平台、支付服务、区块链、链上监听服务组成。

📋 **业务流程**：电商平台发起支付 → 支付服务生成链上收款地址 → 用户往该地址转账 → 资产记入区块链。

⚡ **Web2 与 Web3 支付核心技术区别**

📴 **链下计算（Off-chain）**：支付服务与区块链共用统一密码学算法，可本地离线生成收款地址，无需频繁向机构请求支付单据。

👀 **异步监听（Push/Pull）**：区块链无法主动访问外网，需搭建链上监听服务，解析链上数据后回调同步至支付服务。

🤝 Web3 信任底座与钱包机制

✅ 1. Web3 如何解决信任问题

📜 **数据与逻辑的确定性**：依靠 PoW、PoS 等共识机制保障链上数据不可篡改；智能合约公开透明，相同输入与状态下执行结果固定唯一。

✍️ **去中心化验签**：脱离中心化权威背书，通过私钥密码学签名校验信息真实性，大幅降低单点泄露引发的系统性信任风险。

👛 2. 钱包的本质与分类

🎯 **钱包本质**：管控用户数字资产，同时兼具链上身份认证双重作用。

🔑 **基本原理**：输入私钥随机字符串，通过 ECDSA/EDDSA 等密码学算法生成有效签名。

💱 **交易签名**：完成资产转账确权，证明用户转账操作意愿。

🆔 **消息签名**：不泄露私钥，即可向第三方证明账户所有权与身份。

📂 **钱包技术类型**

🪙 **EOA 钱包（外部账户）**：纯私钥/助记词管控钱包，区块链仅识别私钥，私钥丢失泄露会直接造成资产永久损失。

📑 **合约钱包**：基于链上智能合约搭建，代表为Gnosis Safe多签钱包，支持多人分权协同管资。

✨ **AA 钱包（账户抽象）**：融合EOA与合约钱包优势，属于行业未来发展方向，目前技术尚未成熟。

🏷️ **托管方式分类**

🧑 **自托管**：私钥由用户全权掌控，安全性最高，所有资产风险自行承担。

🏢 **全托管**：以中心化交易所CEX为代表，用户无需管理私钥，操作便捷，但存在平台跑路等中心化风险。

🧩 **混合托管**：结合多签、MPC多方安全计算技术，拆分私钥分片，需多方达成签名阈值才可动用资产，杜绝单方盗转。

📊 交易生命周期与核心参数

🧭 1. 交易生命周期

📝 **第一步：用户构造交易**：用户填写收款地址、转账金额，钱包打包组装交易数据。

🔏 **第二步：私钥签名**：验证身份后调用私钥，对交易数据完成密码学授权签名。

📡 **第三步：广播至网络（Mempool）**：已签名交易推送全网节点，进入内存池排队等待打包。

⚙️ **第四步：节点共识处理**：节点校验交易余额、签名合法性，完成共识核验。

🛡️ **第五步：写入链上账本**：交易打包入块并上链，账户状态永久更新，交易不可篡改撤销。

📌 2. 核心交易参数

⛽ **Gas Fee（手续费）**：交易上链资源竞价费用，决定打包优先级，由资源消耗量与单价共同决定。

🔢 **Nonce（防重放计数器）**：账户交易连续递增流水号，固定交易执行顺序，抵御交易重放攻击。

📃 **Call Data（交互指令）**：交易附带十六进制字节码，用于调用触发智能合约各类业务逻辑。

🛠️ 服务端（Server侧）安全防护实战 面向支付服务商、交易所与项目方，搭建Web3充提完整安全闭环：

💳 1. 充值监听与入账防御

🧱 **多区块确认（防 Reorg）**：区块链存在分叉重组风险，监听转账后不可立即入账，需等待区块最终确认；以太坊建议等待2个Epoch，Layer2网络需延长确认时长。

🕵️ **合规与风控筛查**：业务回调前接入KYT链上交易溯源、KYC实名核验，对异常地址、高危交易提前拦截筛查。

💰 2. 资金管理与签名安全

🧊 **权限拆分与资金池隔离**：禁止单一私钥掌管全部平台资产，拆分冷热钱包分流存储，大额资金强制走多签多级审批流程。

🧪 **交易模拟（Simulation）**：**必须在签名前执行**，离线模拟预判资产变动，拦截恶意扣款、异常转账交易，签名后模拟无防护作用。

🔒 **TEE可信执行环境签名**：高危签名流程启用硬件级隔离安全环境

📤 **执行流程**：加密数据传入 → TEE独立内存解密 + MPC私钥分片协同签名 → 输出合规签名结果。

✅ **核心优势**：私钥明文全程不脱离安全隔离内存，杜绝系统层级恶意窃取私钥行为。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
