---
timezone: UTC+8
---

# WanZhenghao

**GitHub ID:** Oppenseagull

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->
# **2026-05-30 Week 2 总结打卡**

今天做了 Week 2 的阶段整理。相比 Week 1 主要是 learning agent、repo、钱包和基础工具，Week 2 更重要的是建立问题空间地图：哪些问题真的需要 AI 和 Web3 同时出现，哪些只是把概念拼在一起。

我把 AI x Web3 的方向先粗略分成几类：payment / commerce 关注机器支付和结算；identity / reputation 关注 Agent 或用户的身份与信誉；capability / interoperability 关注 Agent 能力声明和跨应用协作；wallet / permission 关注钱包授权和操作边界；privacy / security 关注数据暴露、签名风险和安全确认。

我目前更想继续做 wallet / permission 与 privacy / security 交叉的方向。一个初步 proposal 是：做一个“链上操作风险解释 Agent”。它不替用户签名或付款，而是在用户执行交易、授权或合约交互前，先解释这笔操作要做什么、涉及哪些权限、可能暴露哪些信息、是否存在高风险信号，并要求用户人工确认。

在这个方案里，AI 负责理解、总结、风险解释和交互式追问；Web3 提供交易数据、钱包权限、签名上下文、链上记录和可验证状态。任务发起方是用户，执行方是 Agent 和钱包工具，付款方仍然是用户，验证方可以是链上数据和规则检查，风险承担方主要是用户，因此必须保留 human-in-the-loop。

接下来进入 Week 3，我想把这个方向继续收敛成更清晰的项目说明：目标用户是谁、输入输出是什么、最小 demo 怎么做、哪些部分只读、哪些部分必须人工确认，以及如何避免 Agent 越权操作。
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->

# **2026-05-28 打卡**

今天继续做 Week 2 的方向选择和问题收敛。前几天看了 Agentic Economy、机器支付、钱包权限和隐私相关主题后，我感觉 AI x Web3 里面一个比较值得做的方向，是让 Agent 在用户执行链上操作前，帮助解释风险和确认边界。

我的初步理解是，AI 可以负责理解和总结，例如解释一笔交易要做什么、涉及哪些合约和权限、可能暴露哪些信息；Web3 则提供真实的交易、钱包、签名、权限和链上记录。这样两者不是硬拼在一起，而是围绕“用户如何更安全地使用链上应用”形成配合。

这个方向也有明显边界：Agent 不应该默认替用户签名或付款，而应该先做只读分析和风险提示。涉及资产、授权、支付、合约调用时，仍然需要 human-in-the-loop。对我来说，这比一开始做全自动 Agent 钱包更现实，也更适合 Week 3 继续打磨 proposal。

接下来我想把这个想法整理成一个小 proposal：输入一笔待签名交易或合约交互信息，输出自然语言解释、风险点、权限变化和是否需要人工确认。后续如果做 demo，可以先从模拟数据或测试网交易开始。
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->


# **2026-05-27 隐私主题打卡**

今天围绕 Neo-Cypherpunk 和隐私文化层做了学习整理。我的一个收获是：隐私不只是“把数据藏起来”的技术问题，也和个人自由、身份边界、抗审查、产品设计和用户信任有关。

Web3 强调开放和可验证，但链上公开状态也会让用户暴露更多行为痕迹。比如地址资产、交易历史、交互对象、社群关系都可能被长期追踪。对 Builder 来说，不能只追求透明和可组合性，也要考虑用户是否拥有足够的选择权和安全感。

我觉得 Neo-Cypherpunk 的启发是：隐私应该被当作基础设计原则，而不是最后补上的功能。一个 AI x Web3 项目如果涉及 Agent、钱包、支付或身份，就更要提前考虑哪些信息应该公开，哪些信息只应该本地处理，哪些操作需要用户明确授权。

接下来我想继续关注 privacy / security 方向，尤其是 AI Agent 在读取链上数据、调用钱包和生成用户画像时，如何避免过度收集信息，以及如何让用户理解自己正在暴露什么。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->



# **2026-05-26 Week 2 打卡**

今天开始进入 Week 2 的学习。相比 Week 1 偏工具入门和基础补齐，Week 2 更像是在做方向判断：哪些问题真的值得用 AI x Web3 来解决，哪些只是把两个概念拼在一起。

我今天先把问题空间粗略分成几个方向：payment / commerce、identity / reputation、wallet / permission、privacy / security 和 coordination。对我来说，目前比较感兴趣的是 wallet / permission 和 payment 方向，因为它们和 Agent 的工具调用、安全边界、机器支付、人类确认机制关系比较密切。

我也意识到，一个 AI x Web3 项目不能只说“用了 AI，也用了链”，而是要讲清楚：AI 负责理解、规划、总结还是自动化？Web3 负责支付、身份、权限、结算还是可验证记录？如果这两个部分不能互相增强，那可能只是概念拼贴。

接下来我想尝试把一个方向拆成几个角色：任务发起方、执行方、付款方、验证方、风险承担方和治理/仲裁方。这样应该更容易判断一个 proposal 是否真的成立，也能为 Week 3 或 Hackathon 的项目方向做准备。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->




# **2026-05-23 Open Agentic Economy 回放打卡**

## **主题**

Open Agentic Economy: From ERC-8004 / ERC-8183 to Builder Path

## **回放链接**

![](https://x.com/favicon.ico)

[**https://x.com/i/broadcasts/1kJzDMjMVBwKv**](https://x.com/i/broadcasts/1kJzDMjMVBwKv)

## **观看证明**

提交时请附上回放观看截图。

## **有效笔记**

1.  我对 Agentic Economy 的理解是：未来的 AI Agent 不只是回答问题或调用工具，还可能参与一套开放经济网络。Agent 需要能够表示身份、请求服务、验证结果、完成支付，并和其他 Agent 或人类用户协作。因此，Agentic Economy 不只是 AI 应用问题，也涉及支付、身份、信誉、验证和协议标准。
    
2.  ERC-8004 / ERC-8183 这类标准的价值在于把 Agent 行为从单个应用内部扩展到可组合的开放网络。它们关注的不只是“Agent 能不能完成任务”，还包括 Agent 如何被发现、如何声明能力、如何验证服务结果、如何完成机器支付，以及如何让不同应用之间形成互操作。
    
3.  机器支付是 AI x Web3 的关键场景之一。如果 Agent 能代表用户或组织调用服务，就需要一种低摩擦、可验证、可限制权限的支付方式。这里的核心问题不是简单让 AI 自动花钱，而是要设计清楚额度、权限、确认机制、可撤销性和风控边界。
    
4.  对 Builder 来说，设计 AI x Web3 项目时不能只从“做一个聊天机器人”出发，而应该思考 Agent 在协议中的位置：它是谁、能调用什么、如何证明它完成了任务、如何收款或付款、失败时如何追责。这些问题会影响产品架构和安全边界。
    

## **我准备采取的行动**

接下来我想先补两个方向：

1.  梳理 Agentic Economy 里的核心模块：Agent 身份、能力声明、任务请求、结果验证、支付结算、信誉记录。
    
2.  设计一个小型 demo 思路：让 Agent 帮用户查询链上信息或完成某个低风险服务，并明确哪些步骤只读、哪些步骤需要人工确认、哪些步骤可以引入机器支付。
    

## **我还想继续追问的问题**

如果 Agent 未来可以自动请求服务并支付费用，那么怎样设计权限边界才比较安全？例如：Agent 是否应该有独立钱包？是否应该使用 session key 或额度限制？当 Agent 判断错误、调用错误服务或支付给错误对象时，责任和追责机制应该如何设计？

## **今日总结**

今天围绕 Open Agentic Economy 主题做了学习整理。我的主要收获是：AI x Web3 的结合不只是“AI + 钱包”或“AI + 合约”，更重要的是让 Agent 进入一个开放、可验证、可支付、可组合的经济网络。ERC-8004 / ERC-8183 这类标准给 Builder 的启发是：做项目时要提前考虑身份、支付、验证、权限和互操作，而不是只关注单个应用里的功能体验。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->





# **2026-05-21 Hermes 工作流设计打卡**

今天比较忙，没有系统学习新的课程内容，主要在思考怎么把 Learning Agent 的方法用到自己的真实工作流里。

我现在的一个明显痛点是：经常需要人工在不同线程之间搬运信息。比如老师给了批注，我要先发给讨论线程，让它帮我分析；然后再把讨论结果发给 Codex，让它细化方案并实施；跑完之后，还要让 Codex 总结这次做了什么、结果怎么样；最后再把这些内容发给报告线程，让它帮我写周报或阶段报告。

这个流程能跑通，但中间复制粘贴太多，也很容易漏掉上下文。所以我今天在想，能不能让 Hermes 做一个更上层的协调者。

理想状态是：我只把老师批注发给 Hermes。Hermes 先自动调用讨论线程，帮我理解批注意图、拆解问题；讨论完之后，再把明确后的任务交给 Codex 实施线程；Codex 做完后，Hermes 再调用 Antigravity 或代码审查线程，检查代码和结果是否符合预期；最后 Hermes 把实施记录、审查意见、剩余风险和报告草稿整理给我，让我做最后人工审核。

这样我就不需要一直在多个线程之间来回传话，而是尽量只面对 Hermes 一个入口。Hermes 负责维护上下文和传递信息，我负责判断结果是否可信、是否符合老师要求、是否可以写进报告。

我觉得这个方向应该是可行的，也很符合 Learning Agent 的思路：不是让 Agent 替我判断一切，而是让它帮我减少重复操作、保留过程记录、串联讨论、执行、审查和报告。之后如果有时间，我想把这个流程整理成一个固定模板，先从“输入老师批注，输出实施计划和报告草稿”开始试。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->






# **2026-05-20 Web3 基础复盘打卡**

今天我继续复盘 Web3 基础知识，重点围绕钱包、签名、交易生命周期和 AI Agent 的安全边界做整理。

## **有效笔记**

1.  Web3 并不是完全替代 Web2，而是在 Web2 应用架构之上加入链上资产、钱包身份、签名授权、智能合约和公开可验证状态。很多 Web3 产品仍然需要后端服务、数据库、API、风控和用户体验设计。
    
2.  钱包不是普通登录工具，而是身份和资产权限入口。私钥代表最高权限，助记词是恢复入口，签名代表授权意图。理解钱包安全，是理解 Web3 开发和使用风险的第一步。
    
3.  一笔链上交易通常包括构造交易、签名、广播、节点打包、链上确认和业务系统监听更新。gas 影响成本和速度，nonce 保证交易顺序，calldata 决定合约调用内容。
    

## **我准备采取的行动**

接下来我会继续学习交易模拟、签名可视化和链上监听服务，重点理解如何在开发中降低误签、错误授权和错误入账风险。

## **我还想继续追问的问题**

如果 AI Agent 参与 Web3 操作，哪些能力应该默认只读，哪些操作必须用户人工确认？Agent 在解释交易和辅助签名前，应该展示哪些字段，才能让用户真正理解自己将要授权什么？

## **今日总结**

今天最大的收获是：AI Agent 可以帮助解释交易、整理链上数据、生成代码和辅助风控，但涉及资产、签名、授权和合约调用时，不能让 AI 自动越过安全边界。Web3 开发者仍然需要理解底层机制，才能判断 AI 给出的方案是否可靠。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->







# **Task: Web3 and Blockchain Security Basics**

## **Context**

今天学习主题是「AI 时代，Web3 开发者需要更扎实的基础知识与架构能力」。内容覆盖 Web3 与 Web2 的关系、Web3 支付模型、钱包与签名、交易生命周期、链上监听、服务器端钱包安全，以及 AI 对 Web3 开发者能力要求的影响。

## **Learning Goals**

-   理解 Web3 不是完全替代 Web2，而是在 Web2 系统能力上叠加链上资产和可信执行。
    
-   理解 Web3 支付与传统支付的关键差异。
    
-   掌握钱包、私钥、助记词、签名、gas、nonce、calldata 等基础概念。
    
-   理解 Web3 安全为什么必须从架构设计阶段开始考虑。
    
-   形成后续开发学习路线：先补基础，再做项目拆解和小实验。
    

## **Notes**

### **1\. Web3 and Web2**

Web3 项目仍然大量依赖 Web2 能力，例如用户界面、后端服务、订单系统、API、风控、数据分析和运维。Web3 的特殊性在于引入了链上资产、不可篡改状态、钱包身份、签名授权和智能合约交互。

因此，Web3 开发者不仅要懂链上概念，也要保留 Web2 工程能力。对安全要求更高的原因是：一旦涉及资产，很多错误无法像普通 Web2 业务一样轻易回滚。

### **2\. Web3 Payment Model**

传统 Web2 支付大致流程是：用户下单，平台向支付机构请求支付单，用户完成法币支付，支付机构回调平台，平台更新订单状态。

Web3 支付则变成：平台生成收款地址或收款请求，用户从钱包向地址转账，链上监听服务发现交易，等待足够区块确认后通知支付服务更新订单。

关键差异：

-   支付确认依赖链上交易和区块确认。
    
-   区块链不会主动调用外部服务，需要后端监听链上事件。
    
-   交易可能受到 gas、nonce、分叉、延迟确认等因素影响。
    
-   风控和合规筛查需要在链上监听与订单更新之间处理。
    

### **3\. Wallet and Signature**

钱包是 Web3 的身份和资产入口。用户并不是用账号密码直接控制链上资产，而是通过私钥签名来表达授权。

核心概念：

-   助记词：恢复私钥的入口，泄露后资产可能彻底丢失。
    
-   私钥：账户最高权限，必须绝对保密。
    
-   公钥/地址：可以公开，用于收款和链上身份识别。
    
-   签名：证明用户授权某个操作，不需要暴露私钥。
    
-   EIP-712：提高签名内容可读性，减少盲签和误签。
    

### **4\. Transaction Lifecycle**

一次链上交易通常包括：

1.  构造交易。
    
2.  用户用私钥签名。
    
3.  广播到区块链网络。
    
4.  节点打包并达成共识。
    
5.  状态更新记录到链上。
    
6.  后端监听交易并更新业务系统。
    

关键参数：

-   Gas fee：影响交易成本和上链速度。
    
-   Nonce：保证交易顺序，避免重复提交。
    
-   Calldata/Instruction：合约交互时的调用数据，是理解智能合约行为的关键。
    

### **5\. Security Architecture**

Web3 安全不能只靠上线前检查，而要从系统设计开始考虑。尤其是服务器端钱包、资金归集、多签、交易审核和风控规则，都应该有清晰边界。

可以采取的措施：

-   权限拆分，避免单点私钥控制全部资金。
    
-   使用多签或 MPC 降低单点风险。
    
-   对交易进行可视化和人工审核。
    
-   在签名前做交易模拟，而不是签名后才检查。
    
-   对异常行为设置风控规则，例如短时间高频交易、深夜大额交易、陌生地址转账等。
    

### **6\. AI and Developer Ability**

AI 可以帮助开发者写代码、梳理流程、解释概念和生成方案，但 Web3 开发者不能把判断完全交给 AI。涉及资产和权限时，开发者必须能判断 AI 输出是否合理。

AI 时代更重要的能力包括：

-   基础知识：知道钱包、交易、合约和链上状态的基本机制。
    
-   架构能力：能设计安全边界和系统流程。
    
-   Debug 能力：能定位 AI 生成代码中的错误。
    
-   验收能力：能判断方案是否真实可用、安全可控。
    

## **Actions**

-   了解 Web3 项目发展到一定阶段后，是否有大数据需求。
    
-   查看链上数据分析工具，例如 Dune 或相关 dashboard。
    
-   研究 Uniswap 等 swap 项目的交易和流动性数据。
    
-   查看 GMW 团队开源项目 Epusdt，理解多链收款实现。
    
-   选择一个小实验：解析一笔链上交易或画出 Web3 支付流程图。
    

## **Open Questions**

-   Web3 支付系统中，订单和链上交易如何可靠匹配？
    
-   链上监听服务如何处理重组、分叉和延迟确认？
    
-   企业级钱包应该选择 MPC、多签、AA 钱包，还是混合托管方案？
    
-   AI Agent 如果参与支付流程，权限边界应该如何设计？
    
-   Web3 大数据需求主要集中在风控、链上分析、量化交易，还是用户行为分析？
    

## **Submission Draft**

今天我学习了 Web3 和区块链支付安全基础。我的主要收获是：Web3 并不是完全替代 Web2，而是在 Web2 工程体系上加入链上资产、钱包、签名、智能合约和不可篡改状态。Web3 支付和传统支付最大的不同是，链上交易不会主动回调业务系统，所以需要链上监听服务等待确认后再更新订单。

我还学习了钱包和签名相关概念：私钥代表资产最高权限，签名代表用户授权意图，误签和私钥泄露都是核心风险。交易生命周期包括构造、签名、广播、共识确认和状态更新，gas、nonce 和 calldata 是理解链上交互的关键参数。

对 AI 时代的开发者来说，AI 可以提高学习和编码效率，但 Web3 涉及资产安全，仍然需要开发者具备基础知识、架构判断和 debug 能力。下一步我会继续了解 Web3 项目是否有大数据需求，并研究 Epusdt 等多链收款项目的实现方式。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->








# **Daily Note: 2026-05-18**

## **Today Focus**

初始化 AI x Web3 School Learning Agent 工作流。

## **Learning Input**

-   Learning Agent prompt: [**https://aiweb3.school/learning-agent.zh.txt**](https://aiweb3.school/learning-agent.zh.txt)
    
-   Handbook: [**https://aiweb3.school/zh/handbook/**](https://aiweb3.school/zh/handbook/)
    
-   WCB learning page: [**https://web3career.build/zh/programs/AI-Web3-School#tab=learning**](https://web3career.build/zh/programs/AI-Web3-School#tab=learning)
    

## **Minimum Path**

-   确认个人画像：AI 有基础、Web3 新手、每天 1h、偏开发。
    
-   选择 Week 1 主工具：Codex。
    
-   初始化学习仓库结构。
    
-   安装 GitHub CLI gh。
    
-   安装 Hermes Agent。
    
-   整理开营回放补交任务草稿。
    
-   登录 WCB，确认今天的课程任务和打卡入口。
    
-   手动提交打卡。
    

## **Recommended Path**

-   阅读 Handbook 首页，理解 AI x Web3 School 的知识地图。
    
-   阅读 Web3 基础目录，标记最陌生的 3 个概念。
    
-   产出一份今日问题清单。
    

## **Challenge Path**

-   安装 GitHub CLI gh。
    
-   安装 Hermes Agent Windows Native Beta。
    
-   运行 gh auth login 完成 GitHub 授权。
    
-   运行 hermes setup 配置 Hermes 模型/API key。
    
-   创建 public GitHub repo: ai-web3-school-cohort-0。
    
-   把本地学习记录 push 到 GitHub。
    

## **Official Task**

当前已知有两个可补交任务：

1.  开营回放任务
    
    -   回放链接：[**https://x.com/i/broadcasts/1YGNrZnBMrZGw**](https://x.com/i/broadcasts/1YGNrZnBMrZGw)
        
    -   要求：提交回放观看截图/链接，并整理至少 3 条有效笔记。
        
    -   状态：已根据朋友提供的 docx 和截图整理提交材料。
        
    -   文件：submissions/[2026-05-18-opening-replay-submission.md](http://2026-05-18-opening-replay-submission.md)
        
2.  「AI 时代的 Web3 架构能力」回放任务
    
    -   回放链接：[**https://x.com/i/broadcasts/1RKjpzPzVzZJw**](https://x.com/i/broadcasts/1RKjpzPzVzZJw)
        
    -   要求：提交回放观看截图/链接，并整理至少 3 条有效笔记。
        
    -   状态：Codex 当前无法直接读取 X 回放视频内容，已先创建观看记录模板，等待字幕、截图或朋友笔记后整理终稿。
        
    -   文件：submissions/[2026-05-18-web3-architecture-replay-draft.md](http://2026-05-18-web3-architecture-replay-draft.md)
        

## **Notes**

-   Hermes 暂不接 Telegram 或微信。Week 1 先用 Codex 跑通真实学习任务。
    
-   社交媒体接入不是任务 1 的硬要求。
    
-   公开 repo 不放 API key、助记词、私钥和隐私资料。
    
-   GitHub CLI 已安装，但需要重新打开 PowerShell 后运行 gh auth login。
    
-   Hermes 已安装到本机，后续需要运行 hermes setup 配置模型。API key 只放本地配置，不写入 repo。
    
-   X 回放如果没有字幕或可访问文本，Agent 不能可靠替代观看；可以用截图、字幕、朋友笔记来辅助整理。
    

## **Questions**

-   WCB 每日任务是否有固定提交格式？
    
-   Week 1 除 Learning Agent 外是否还要求 GitHub repo URL？
    
-   是否需要把 Handbook feedback 提交到官方仓库，还是先沉淀在个人 repo？
    
-   「AI 时代的 Web3 架构能力」回放是否有文字稿或同学笔记可以参考？
    

## **Check-in Draft**

今天我初始化并继续完善了自己的 AI x Web3 School Learning Agent。我的背景是 AI 有基础、Web3 新手、每天可投入约 1 小时，方向偏开发。Week 1 我选择 Codex 作为主工具，先完成课程资料整理、个人学习计划、GitHub 学习仓库结构、每日 note 模板和 Handbook feedback 流程。

今天还安装了 GitHub CLI 和 Hermes Agent。Hermes 暂不接入 Telegram 或微信，因为社交媒体接入不是任务 1 的必要条件，也会带来额外 token、隐私和稳定性成本。后续会先从本地终端使用开始，再考虑是否接入消息平台。

我也整理了开营回放补交任务材料，并创建了「AI 时代的 Web3 架构能力」回放任务的观看记录模板。下一步会登录 WCB Learning 页面提交开营回放任务，并补充第二个回放任务的真实笔记。

## **Submission Record**

-   WCB/check-in link:
    
-   Submitted at:
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
