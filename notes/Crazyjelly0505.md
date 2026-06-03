---
timezone: UTC+8
---

# Crazyjelly0505

**GitHub ID:** Crazyjelly0505

**Telegram:** @Jellly0505

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->
今天主要学习了两部分内容：一部分是大语言模型的基本工作方式，另一部分是 Chainlink 代码库中 Job 被启动和执行的大致流程。

大语言模型可以理解为根据用户输入、上下文、参数和提示词来预测输出的模型。模型训练需要大量数据和计算资源。早期的语言模型更像是按顺序预测下一个词或 token；后来 Transformer 架构出现后，模型能够更有效地处理上下文关系，通过 attention 机制让文本中不同位置的信息互相关联，从而提升对长文本和复杂语境的处理能力。

为了让模型输出更符合人的预期，训练过程里还会使用人工反馈相关的方法。更准确地说，这是 RLHF，也就是 Reinforcement Learning from Human Feedback。它通过人工标注、偏好比较或质量评估，让模型学习哪些回答更符合人类期待，哪些回答质量较差，从而让模型输出更接近人类偏好的表达方式和安全边界。

今天还研究了 Chainlink 的代码库，重点理解节点启动后 Job 是如何被转换成可运行服务，并最终触发 Pipeline 执行的。当前理解到的流程是：节点启动后，app.Start 会启动 jobSpawner；jobSpawner 从数据库读取 Jobs；对于每个 Job，系统会根据 Job.Type 找到对应 Delegate；Delegate 负责把 Job 翻译成具体 Service；如果是 Cron Job，cron.Delegate 会创建 Cron service；Cron service 根据 CronSpec.CronSchedule 定时触发；触发后，系统会根据 PipelineSpec.DotDagSource 创建或初始化 Pipeline；最后由 pipelineRunner 执行这张任务图，生成一次 Run 和多个 TaskRun，并把执行结果保存下来。

这条链路说明，Chainlink 的 Job 并不是启动后直接执行一段固定逻辑，而是通过 Job 类型、Delegate、Service 和 Pipeline 这些层次逐步组织起来。Job 更像是数据库中的配置和任务定义；Delegate 负责把定义转换成运行时服务；Service 负责具体运行；Pipeline 则负责把任务拆成图结构并执行。

今天的关键收获是：无论是 LLM 还是 Chainlink Job 系统，表面上的一次输出或一次任务执行，背后都有分层结构。LLM 的输出背后有 token、Transformer、参数、提示词和人类反馈训练；Chainlink 的任务执行背后有 Job、Delegate、Service、Cron trigger、Pipeline run 和 TaskRun。理解这些中间层，比只看最终结果更重要。

今日 GitHub 学习记录：

[https://github.com/Crazyjelly0505/ai-web3-school-cohort-0/blob/main/daily/2026-05-19.md](https://github.com/Crazyjelly0505/ai-web3-school-cohort-0/blob/main/daily/2026-05-19.md)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->

今天主要学习了 LLM、RAG，以及它们在 Web3 场景中的使用边界。

LLM 是大语言模型，处理文本时会把内容拆成 token，而不是直接按完整句子处理。Embedding 可以把文本、图片、代码等内容转成向量，方便系统计算相似度。Transformer 是许多 LLM 的核心架构之一，擅长在上下文中捕捉信息之间的关联。

RAG 的核心不是让模型凭空“知道更多”，而是先从外部资料中检索相关内容，再让模型基于这些资料回答。一个基本的 RAG 流程通常包括文档切片、向量化、相似度检索、排序、生成回答和来源验证。这里最重要的不是模型回答得是否流畅，而是答案能否追溯到可靠来源。答案来自可验证文档，还是来自模型自己的补全，是完全不同的两件事。

最近一些 AI 回答误导用户的案例，也能说明盲目信任模型输出的风险。模型的语气可能很确定，表达也可能很自然，但这并不代表它真的查到了事实。尤其在 Web3 场景下，如果涉及交易、钱包、合约或资产安全，仅凭模型回答做判断非常危险。AI 可以作为学习和开发过程中的助手，但判断来源、验证事实、评估风险，仍然需要由人来完成。

之后看到了一个“交易解释器”的最小实践任务。这个任务要求输入一笔交易哈希，让系统读取交易详情、事件日志和相关合约 ABI，再让 LLM 生成解释。练习重点不是让解释写得多漂亮，而是把链上事实、模型推断、来源边界和不确定性分开。

一开始容易把这个任务理解成“找一笔交易哈希丢给模型，让它解释”。但实际测试后发现，大部分没有链上工具或联网能力的模型并不能直接读取真实链上数据。有的模型会说明自己无法查询链上信息，这种回答反而更可靠；也有模型会用很肯定的语气声称已经查询了以太坊、BSC、Polygon、Arbitrum 等主流链，并得出“交易不存在”的结论。但同一笔交易可以在 Etherscan 上查到，这说明模型所谓的“全网查询”并不一定真实发生。

这个例子说明，模型如果没有接入区块浏览器、RPC 或索引器，就不能天然读取链上信息。判断一条链上结论是否可靠，不能只看模型说得是否肯定，而要看它是否说明了具体查询来源，例如查询了哪些 explorer 或 RPC、返回结果是什么、查询时间是什么、是否包含测试网或其他 EVM 链。

在进一步对比中，还出现了另一类问题：模型会根据用户提供的少量信息进行看似合理的补全。比如在提供“ERC721 Token transfer”后，模型开始解释 ERC721 的 Transfer(address,address,uint256) 事件结构，但没有抓住 Etherscan 中更明确的链上事实：这笔交易的 Input Data 显示调用的是 mint()，MethodID 是 0x1249c58b。

所以这笔交易至少可以分成三层来看：

链上事实：

\- 交易状态是 success

\- value 是 0 ETH

\- block 是 25120900

\- 调用了 mint()

\- MethodID 是 0x1249c58b

\- 存在 ERC721 token transfer

模型可以合理推断的部分：

\- 这很可能是一次 NFT mint 操作

\- 用户可能调用合约 mint 了一个 ERC721 token

\- ERC721 transfer 事件可能表示 NFT 被铸造或转移给某个地址

模型不应该乱说的部分：

\- 如果没有完整 event log，就不能确定 tokenId

\- 不能确定 NFT 最终接收地址

\- 不能确定是否一定是标准 mint 流程

\- 不能确定是否还有其他内部逻辑

\- 不能确定这个 NFT 具体是什么项目

因此，交易解释器真正重要的不是“让 AI 解释交易”，而是先建立事实边界。链上数据决定事实边界，模型只能在事实边界内辅助解释。一旦缺少来源约束，模型很容易把常识性模板包装成具体交易分析。

最后还看到了另一个任务：做一个“协议文档 RAG 问答”的最小版本。这个任务需要选择官方文档站，抓取 10 到 20 篇页面，按标题结构切 chunk，存入向量库，再让系统回答问题并给出引用。它还要求测试文档中明确存在的问题、文档中不存在的问题，以及旧版本或版本不确定的问题。这个任务比交易解释器更复杂，涉及真正的 RAG 流程和证据链设计，适合下次单独完成。

今天的关键收获是：AI 可以帮助分析、整理和生成内容，但不能自动保证事实正确。尤其在 AI x Web3 场景中，链上事实、文档来源和版本信息都必须单独验证。后续实践中，需要持续区分事实、推断和不确定信息，不能因为模型语气肯定就默认它是对的。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
