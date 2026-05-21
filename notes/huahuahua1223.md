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
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
# **我开始意识到自己"先做后读"的节奏可能是对的**

今天读了 Handbook 里的 AI > Agent 和 Bridge > Web3 Tool Use 两节,没动代码——这是这周第三个没有代码产出的"输入型日子"了。一开始有点焦虑("是不是又水了一天"),读着读着反而觉得这种节奏不该被否定。

回想这一周自己跟 Agent 的关系是怎么推进的:

-   5/18:看了 Cohort 介绍,把 Hermes、Claude Code、Cowork 三类 Agent 在脑子里贴了标签
    
-   5/19:让 Claude Code 拿我 WCB Secret Key 去调 `users.getProfile`,第一次有"Agent 在用我的身份办事"的体感
    
-   5/20:看了 draken 老师的 Hermes 直播 + 同学的 install guide,然后……没装
    
-   5/21:今天打开 Handbook 的 Agent 章节,反而读得比之前任何一次都细
    

我以为"今天才认真读 Handbook"是落后的表现,但今天读的时候有个特别明显的感觉:**章节里讲的那些抽象概念(工具调用、ReAct 循环、多步执行),不再是文档上的术语了,而是上周我让 Claude Code 跑 curl→jq→git 流水线时已经体验过的东西**。读"Agent 把任务拆成 reasoning + action + observation"这一句的时候,我立刻能对上 5/19 那次让 Claude 调 WCB API 的过程——它先想了一下我问的是什么、再决定调哪个 procedure、看到返回再决定下一步。

这让我意识到一件事:我之前对学习顺序的默认假设是错的。我以为应该"先读理论再实操",但实际效果更好的顺序好像是"**先用粗糙的体感把概念走过一遍,再回头读理论把体感命名清楚**"。Handbook 的 Agent 章节如果我 5/18 第一天就读,大概率会觉得"挺有道理但有点抽象";今天再读,每一个抽象概念都能在脑子里找到对应的实操记忆,理解就变成了"命名"而不是"建模"。

Bridge > Web3 Tool Use 那节也是一样。5/19 我做了「受限 Web3 助手设计」,自己把 Agent 行动按风险分了四层(信息/分析/模拟/签名)。今天读 Handbook 里讲 Agent 调 RPC / 钱包 / 合约的部分,有种"哦原来我那次画的那张图,在 Handbook 的话语体系里叫这个名字"的对照感。如果先读 Handbook 再设计,可能直接套用文档里的术语就交差了;先自己摸过一遍再读,反而能看出"自己摸的版本"跟"权威版本"之间的差异,有种"两份地图相互校对"的踏实感。

所以今天的"没有代码产出"我决定不算焦虑账。一周下来,**有动手日,有读书日,这两种日子的轮替本身就是学习节奏**。把读到的东西沉进昨天动过手的体感里,比再多写一个 demo 还重要。

明天 5/22 是 Week 1 Review Meeting,要把这周所有打卡过一遍。装 Hermes 也安排在明天——延迟了三天,但我现在反而更确定"装它之前先把 Handbook 那一章 + 同学的 install guide + 直播都读过一遍"是个对的顺序。Agent 这种东西,在它真的进我电脑之前,提前把概念地图建好,装的时候才知道每一步在做什么。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

# Hermes 直播 + 同学的 install guide：对 Agent 的新一层认知

昨晚 draken 老师讲完「Hermes 从 0 到 1」之后，我又翻了一遍 @0xUSDHG 同学整理的 \[Hermes 安装指南\](https://github.com/USDHGwang/hermes-install-guide)。两份内容叠在一起读，对 Agent 的理解突然清晰了——**直播给的是「为什么」，guide 给的是「怎么装才不踩坑」**。这一晚我没动手装，只是从头读到尾把流程顺了一遍，但这个「多读一遍」给我的认知更新比直播本身还多。

5/18 我对 Hermes 的理解是「长期运行的个人自动化助手」——那是听 Cohort 介绍后形成的标签，离落地很远。昨晚直播补了一层「为什么是 Hermes」：本地或 VPS 长期运行、skills 沉淀、Telegram/CLI 入口、跨会话状态。再读同学的 install guide，补的是另一层——「Hermes 落到本机长什么样」：Homebrew 装 Python 3.11`curl install.sh | bash` 拉 Nous Research 的 hermes-agent`hermes setup` 选 NVIDIA NIM provider、TUI 提示符 `❯`。**直播让我知道它存在并值得装，guide 让我知道装它需要付出什么**。

让我特别有感触的是「同学的 guide」补齐了官方教程不教的事。直播是概念地图——Hermes 是什么、能干什么、Web3 场景为什么适合。guide 是一份**摩擦清单**：Apple Silicon 需不需要装 Rosetta、NVIDIA NIM 40 RPM 怎么申请、HTTP 410 模型下架怎么换、Python PATH 要手动设、Discord Bot 的 Message Content Intent 必须开。这些是「踩过坑的人才能写的细节」，比任何 LLM 拼凑的 install 文档都准。学习 Agent 的最佳路径其实是：**官方讲哲学 + 学过的人讲摩擦**。少了任何一层都不够——只听哲学会觉得「概念漂亮但不知道怎么动手」，只看摩擦清单会觉得「步骤清楚但不知道为什么要这样做」。

最后想说一个特别诚实的观察：guide 我从头读到尾了，但**没动手装**。以前我会觉得「读完就懂了」，今天意识到——读懂 install 步骤和真的让 Agent 进自己电脑是两回事。读懂只是「在脑子里建了模型」，装一遍才是「在系统里建了进程」。我把实装推到了明天，但这个延迟本身让我看到一件事：**对 Agent 真正的判断，要在它真正占着我电脑的端口、消耗着我申请的 key、回复着我发的消息之后才能给**。在那之前我所有的「理解」都是文档级别的，是「Agent 的概念」，不是「Agent 的我」。

这次最大的认知更新其实有点反直觉——直播 + guide 都读完之后，我发现自己离「真懂 Hermes」还差一步「动手装」。Agent 这种东西的理解曲线，从文档跳到实装之间有个绝对绕不过去的台阶。
<!-- DAILY_CHECKIN_2026-05-20_END -->

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
