---
timezone: UTC+8
---

# huahua

**GitHub ID:** huahuahua1223

**Telegram:** @huahuahua1223

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->
# Agent 不再只是写代码，开始替我跟平台对话了

今天有个挺奇怪的感觉：Agent 第一次跨过了「帮我写代码」的边界，开始**帮我跟学习平台直接对话**。

起因是想知道自己 Week 1 到底提交了多少任务、还差什么。一开始打算去 WCB 网页一个个数，但翻 Learning Agent 启动 Prompt 时看到第 7 节写着「WCB Agent API 与 secrets」，附了一个 `https://web3career.build/llms.txt`——平台居然把 API 用 `llms.txt` 格式直接吐给 Agent 看。我让 Claude Code 用 curl 拉了一下，里面写得清清楚楚`POST /api/agent/call`，所有 procedure 走一个入口，body 是 `{ procedure, input }`，tRPC 风格。

然后就是连环动作：在 WCB 创建 Secret API Key、用 macOS Keychain 存（不放 `.env`，怕 commit 漏出去）、让 Claude Code 用 keychain 现取 Key 调 API。第一次跑 `users.getProfile` 返回了我自己的所有信息，那一刻才意识到——**这跟过去用 ChatGPT 的体验完全不同**。它不是在帮我「生成内容」，是在用我的身份**真的访问平台数据**。

接着拉了 Week 1 的全部 38 个任务进度，发现 16 个已提交，22 个未交（其中有些是直播回放、有些是综合任务）。这份报告我自己手动整理至少要半小时，Agent 一分钟拼好。下一步想试试用 `tasks.submitEvidence` 直接通过 API 提交综合任务，连网页都不用开。

这件事让我对「Agent + Web3」的想象具体了很多。**Web3 讲的「身份」「权限」「可验证」，本质上就是给 Agent 一个能合法行动的边界**——WCB 给我一把 Secret Key，限定它只能以「我」的身份做我有权限做的事，删 Key 就立刻失效。这跟 Web3 钱包给 dApp 授权的逻辑是一样的，只是这里授权的不是签名而是 API 调用。

顺便今天也把昨天合约可读化助手的几个边界补完了：Etherscan V1 弃用切到 V2、中国大陆不能直连 LLM 所以接了智增增中转 + 美团 LongCat 免费模型、Vercel 上线了 <https://week1-contract-reader.vercel.app/> 。这些工程细节本身没什么浪漫，但凑在一起的感觉是——**我开始有「让** [](https://week1-contract-reader.vercel.app/%3E%E3%80%82%E8%BF%99%E4%BA%9B%E5%B7%A5%E7%A8%8B%E7%BB%86%E8%8A%82%E6%9C%AC%E8%BA%AB%E6%B2%A1%E4%BB%80%E4%B9%88%E6%B5%AA%E6%BC%AB%EF%BC%8C%E4%BD%86%E5%87%91%E5%9C%A8%E4%B8%80%E8%B5%B7%E7%9A%84%E6%84%9F%E8%A7%89%E6%98%AF%E2%80%94%E2%80%94**%E6%88%91%E5%BC%80%E5%A7%8B%E6%9C%89%E3%80%8C%E8%AE%A9)**Agent 在多个平台和工具之间真的把事做完」的能力**了。

这一周下来最大的认知更新：**Agent 的价值不是会不会聊天，是它能不能在拿到合适的 Key 和工具后，把一件事跨平台地推到底**。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->



# 了解 Hermes Agent 和不同类型的 Agent

今天主要了解了 **Hermes Agent**，也顺便对比了一下 **Claude Code** 和 **Claude Cowork**。

我之前对 Agent 的理解比较笼统，感觉只要能帮我干活就都叫 Agent。今天看下来发现，其实不同 Agent 的定位差别挺大。

**Hermes Agent** 更像是一个可以长期运行的个人自动化助手。它可以部署在本地或者 VPS 上，通过 Telegram、CLI 等方式使用，还可以记住项目上下文、沉淀 skills、做定时任务。放到 Web3 场景里，我觉得它很适合做链上监控、数据分析、定时报告、自动跑脚本这些事情。

**Claude Code** 更偏开发场景。它主要是在终端或者代码项目里帮开发者写代码、改 bug、跑测试、看报错、处理 Git 流程。比如我做 Solidity、Hardhat、React DApp 项目时，这类 Agent 会比较直接提升开发效率。

**Claude Cowork** 更像是办公和资料整理类 Agent。它适合处理文档、合同、报告、简历、项目资料整理这些任务，不是专门写代码的。

所以我今天的理解是：

**Claude Code 是写代码的 Agent，Claude Cowork 是整理资料的 Agent，Hermes Agent 是长期运行和自动化任务的 Agent。**

这也让我更理解 AI × Web3 里 Agent 的价值。它不只是聊天，而是可以结合工具、钱包、链上数据和权限控制，帮助用户完成真实任务。

不过 Web3 场景里的 Agent 也要特别注意安全边界。比如它可以帮用户分析数据、生成交易建议，但如果要真正发起交易，就必须考虑钱包授权、用户确认、额度限制和风险提示。

今天的收获是：  
**Agent 的核心不是会聊天，而是能在明确权限和工具范围内，把任务真正执行下去。**
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
