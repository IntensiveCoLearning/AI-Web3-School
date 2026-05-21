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
