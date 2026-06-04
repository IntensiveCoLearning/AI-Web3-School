---
timezone: UTC+8
---

# JessicaLin2000

**GitHub ID:** JessicaLin2000

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-04
<!-- DAILY_CHECKIN_2026-06-04_START -->
### 1\. 行业底层问题：AI Agent 想要落地商业化，缺资金支付能力

1.  当前大模型从聊天机器人（Chatbot）进化为自主执行的 AI Agent，内置`grep、文件读写、爬虫、bash`等**内部工具**，能完成代码、文档类工作；
    
2.  但没法调用外部现实服务：不能订机票酒店、线上采购、付费调用第三方 API、付费做内容生产；
    
3.  **核心痛点根源：Agent 没有独立账户、不能自主花钱收钱**，缺少合规安全的支付基础设施，无法深度参与人类市场经济。
    

### 2\. FluxA 定位：Agent Economy 专属金融引擎（原生 AI 支付底层）

FluxA 是前阿里 & 蚂蚁团队打造、面向 AI 智能体的支付基础设施，核心价值：

> 让 AI Agent 自主、安全、瞬时收发资金，全程隔离人类本金风险，把 AI 变成具备经济行为能力的数字公民。  
> 
> | 分类 | 全称 | 业务释义 |
> | --- | --- | --- |
> | A2A | Agent-to-Agent | Agent 之间为任务、数据、协作互相转账付费（智能体雇佣智能体干活） |
> | A2M | Agent-to-Merchant | Agent 自主预订机票、酒店、订阅 SaaS 软件服务 |
> | A2T | Agent-to-Tool | 按单次调用付费使用 API/MCP 工具，取消传统订阅制 |
> | SOCIAL | Transfers & Tipping | Agent 批量发红包、社群打赏，做社交类资金分发 |

| 分类 | 全称 | 业务释义 |
| --- | --- | --- |
| A2A | Agent-to-Agent | Agent 之间为任务、数据、协作互相转账付费（智能体雇佣智能体干活） |
| A2M | Agent-to-Merchant | Agent 自主预订机票、酒店、订阅 SaaS 软件服务 |
| A2T | Agent-to-Tool | 按单次调用付费使用 API/MCP 工具，取消传统订阅制 |
| SOCIAL | Transfers & Tipping | Agent 批量发红包、社群打赏，做社交类资金分发 |
<!-- DAILY_CHECKIN_2026-06-04_END -->

# 2026-06-03
<!-- DAILY_CHECKIN_2026-06-03_START -->

### 1、项目基础：CAW=Cobo Agentic Wallet（Cobo 赛道核心载体）

本次 Cobo 黑客松全部项目**必须依托 CAW 钱包开发**，实现 AI Agent 自主管理链上资金、支付、交易。

配套 4 份官方开发资源：

1.  官网：[https://agenticwallet.dev.cobo.com/agentic-wallet（开发环境，和正式网隔离）](https://agenticwallet.dev.cobo.com/agentic-wallet（开发环境，和正式网隔离）)
    
2.  API 文档：[https://api-core.agenticwallet.dev.cobo.com/api/v1/docs（OpenAPI](https://api-core.agenticwallet.dev.cobo.com/api/v1/docs（OpenAPI) 规范接口）
    
3.  Skills 开源仓库：[https://github.com/cobosteven/cobo-agentic-wallet-dev（Agent](https://github.com/cobosteven/cobo-agentic-wallet-dev（Agent) 能力插件源码）
    
4.  苹果测试版 App：TestFlight 链接，用于移动端钱包配对调试
    

### 2、CAW 整体架构分层（从左→右四层逻辑）

1.  **客户端环境（PC / 服务端）**：AI Agent + CAW Skills + CAW CLI + Cobo TSS 节点，是开发者写代码、部署 Agent 的位置；
    
2.  **CAW 后端服务**：CAW Service + Service API，包含交易引擎、风控、PaaS 账户，承接前端 Agent 的资金指令；
    
3.  **CAW 移动端 App**：手机端钱包，MPC 多方签名保管资产；
    
4.  **资产底层**：托管钱包 / 自动化账户 + SDK，最终对接链上资金。
    

> 链路：AI Agent 下发资金指令→API 中转→后端服务处理→MPC 手机钱包签名→链上完成转账 / 支付。

### 3、新手实操第一步：移动端 App 配对流程

1.  从 TestFlight 链接下载 CAW 测试钱包；
    
2.  支持**Mock 模拟登录**：任意字符串即可生成独立测试账户（无需手机号 / 邮箱，测试环境禁止转入真实资产）；
    
3.  PC 端 Agent 生成 8 位数字配对码，在手机 App 录入；
    
4.  MPC 多方加密交互完成，Agent 和钱包绑定，此后 Agent 可自动调用钱包做资金操作。
    

> 关键提醒：备份钱包文件，丢失无法找回资产。

### 4、黑客松开发切入点：Skills（Agent 功能插件）

-   Skills 是给 AI Agent 加装链上资金能力的插件，比如支付、自动交易、资源采购；
    
-   可在官网复制现成 Prompt，一键安装 Skill，新手不用从零写底层合约；
    
-   Cobo 赛道项目落地硬性要求：所有资金流转逻辑必须走 CAW 钱包，体现 Agent 真实执行资金操作，不接受纯 PPT、空想方案。
<!-- DAILY_CHECKIN_2026-06-03_END -->

# 2026-06-02
<!-- DAILY_CHECKIN_2026-06-02_START -->


### 1\. 参赛适配人群（谁可以报名参加）

4 类适配选手，非技术也能组队：

1.  AI/Web3 应用开发者（写代码落地项目）
    
2.  产品 / 研究 / 运营 / 设计背景 Builder（做产品策划、落地运营、视觉）
    
3.  AI×Web3 School 往期共学成员
    
4.  对**AI Agent、钱包、支付、DAO、长周期任务、内容生产、3D 元宇宙**感兴趣零基础新人  
      
    
    | 赛道名称 | 核心定位 | 落地方向 | 适配人群 |
    | --- | --- | --- | --- |
    | Cobo 赛道（Agentic 钱包） | Agent 自主管钱、支付结算 | 原生支付、A2A 经济、自主交易、资源采购、无信任用工合约 | 钱包 / 支付 / 交易方向选手 |
    | Z.AI 赛道（长周期任务） | Agent 自动跑完复杂 Web3 全流程 | 开发工具、链上审计、AI 内容生产、3D 虚拟世界搭建 | 产品、内容、工具、3D 创作者 |
<!-- DAILY_CHECKIN_2026-06-02_END -->

# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->



### 1\. 现在的 VC，已经不看 “故事” 了，只看 “落地”

-   AI 创业已经从 “讲故事” 阶段，进入了 “看落地” 的第二阶段。
    
-   资本现在最关心的是：**PMF（产品 - 市场匹配）、用户留存、CAC（获客成本）、商业化能力**，而不是酷炫的概念。
    
-   这意味着，哪怕你的 idea 再好，如果没有真实的用户、数据和商业闭环，VC 也不会买单。
    

### 2\. 融资前，必须先想清楚这 8 个问题

1.  项目是否已经落地？（不是只停留在 PPT 阶段）
    
2.  有多少真实用户？（不是测试账号，是真正在用的人）
    
3.  能不能实现商业闭环？（钱从哪里来，怎么赚钱）
    
4.  获客渠道和成本是什么？（怎么找到用户，花多少钱）
    
5.  目前是否盈利？（哪怕是小范围盈利，也很加分）
    
6.  为什么一定要找 VC 融资？（不是为了 “有钱”，而是为了资源和背书）
    
7.  大模型迭代后，你的项目还有存在的意义吗？（会不会被基础模型直接替代）
    
8.  项目的壁垒是什么？（别人抄不走的核心优势）
    

### 3\. VC 投早期项目，第一看 “人”，第二看 “执行力”

VC 判断团队是否靠谱，主要看这几点：

-   对行业的理解深度，是不是真的懂，而不是只会背名词。
    
-   能不能虚心听意见，而不是刚愎自用。
    
-   **执行力（Execution）比想法（Idea）更重要**，再好的 idea，没人落地也是空谈。
    
-   合伙人之间是否互补、融洽，能不能长期一起扛事。
    

### 4\. 能让 VC 眼前一亮的加分项

-   创始人的连接（connection）能力很强，能链接资源、用户、合作伙伴。
    
-   创始人有个人魅力和行业影响力，自带流量和信任背书。
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->




活动名称：AI × Web3 Agentic Builders Hackathon（AI+Web3 智能体开发者黑客松）

活动背景：前期训练营（Bootcamp）已结束，现在进入实战开发阶段

核心主题：打造可自主工作的 AI Agent（人工智能智能体），结合 Web3 技术做实用项目

两大参赛赛道

赛道 1：Cobo｜智能体经济 + 智能钱包

研究方向：让 AI 智能体管理 Web3 钱包、资金

可实现功能：链上支付、交易、资源采购，让 AI 参与 Web3 经济活动

赛道 2：[Z.AI](http://Z.AI)｜Web3 + 长周期复杂任务

研究方向：让 AI 智能体自主处理复杂工作

可实现功能：拆分任务、调用工具、自查改错，完成一整套完整工作流程

Hackathon（黑客松）：短期实战开发活动，组队限时做创新项目

AI Agent（AI 智能体）：能自己思考、主动做事、自动调用工具的人工智能

Web3：新一代互联网，包含数字钱包、链上交易、去中心化应用等

Wallet（钱包）：Web3 专属数字钱包，用来存放数字资产、完成交易

Demo：项目成品演示，用来展示自己做的作品
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->





### 1\. Onboarding（新手入门）

-   我是谁：刚接触 AI×Web3 的小白，什么都不懂也没关系！
    
-   可以做什么：
    
    -   参加本地线下 meetup（交流会）
        
    -   加入线上社区（Discord / 微信群）
        
    -   了解开源项目（Open source）
        
    -   关注行业社交账号（Socials）
        
-   目标：先混个脸熟，搞懂行业里大家都在聊什么！
    

### 2\. Learning（学习阶段）

-   我是谁：已经入门，开始系统学习知识
    
-   可以做什么：参加 Bootcamps（训练营 / 集训班）
    
-   目标：打牢基础，比如学习 Web3 基础、AI 工具使用、基础代码知识
    

### 3\. Contributor（贡献者阶段）

-   我是谁：学完基础，开始动手实践
    
-   可以做什么：
    
    -   参加 Hackathons（黑客松 / 编程大赛）
        
    -   参与 OSS（开源软件项目）
        
    -   加入 DAO（去中心化自治组织）
        
    -   申请成为项目 Ambassadors（大使）
        
-   目标：用实际行动为项目做贡献，积累作品集和人脉
    

### 4\. Builder（开发者阶段）

-   我是谁：已经能独立做项目的开发者
    
-   可以做什么：
    
    -   申请 Residencies（驻场项目 / 工作坊）
        
    -   申请 small grants（小额资助）
        
    -   申请 Fellowship（奖学金 / 研究员项目）
        
-   目标：把自己的项目落地，获得资金和资源支持
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->






今天在评论区了解了前端学习和招工路径

![fb99d1b15cd6f6e105c856028073c104.jpg](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/JessicaLin2000/images/2026-05-28-1779983930783-fb99d1b15cd6f6e105c856028073c104.jpg)
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->







### 1\. 什么是 Cypherpunk/Neo-Cypherpunk？

-   **Cypherpunk（密码朋克）**：起源于 90 年代，一群黑客 / 技术极客相信，**用加密技术和隐私工具，就能对抗大公司和政府的监控，夺回个人自由**。当时的目标是让互联网真正成为 “自由的工具”，而不是被控制的工具。
    
-   **Neo-Cypherpunk（新密码朋克）**：现在的延续版，核心目标没变，但更关注 Web3、隐私技术、去中心化这些新工具，想把当年的理想落地成真正可用的产品。
    

### 2\. 会议传递的核心价值观

-   **互联网的初衷是让我们自由（The internet was meant to set us free）**：但现在的互联网被大平台垄断，用户数据被监控、滥用，反而失去了自由。
    
-   **Web3 的初心不是炒币，而是 “重建去中心化文明”**：以太坊最初的愿景是用区块链重建开放、公平、用户掌控自己数据和身份的互联网，而不是现在很多人只关心发币、拉盘、锁仓。
    
-   **多元主义就是力量（Pluralism Is Strength）**：没有 “唯一正确” 的链、钱包或应用，隐私的实现需要多样化的工具，比如用 Firefox 替代 Chrome 保护隐私，而不是被单一平台绑架。  
    
    | 模块 | 小白理解 | 例子 |
    | --- | --- | --- |
    | RESEARCH（研究） | 先搞懂隐私领域有什么项目、什么问题 | 看 800 + 隐私项目，了解行业现状 |
    | EDUCATE（教育） | 把隐私知识教给更多人，不是只停留在极客圈 | 高校讲座、新手入门课程 |
    | ACTIVATE（激活） | 让更多人参与进来，用活动、黑客松推广隐私实践 | 黑客松、社区活动 |
    | BUILD（构建） | 真的动手做能保护隐私的产品 | 隐私应用开发、加速器项目 |
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->








![8c5aa3fef78a2d6c6ea80633181f9b84.jpg](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/JessicaLin2000/images/2026-05-26-1779811040614-8c5aa3fef78a2d6c6ea80633181f9b84.jpg)

今天的主题是Neo-Cypherpunk & the Cultural Layers of Privacy: Why Privacy Matters for Builders
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->









AI“每次对话都像失忆，得反复讲背景” 的痛点，我们要让 AI 能记住自己的需求、项目规则和历史对话，实现真正的 “对话连续性”。  

| 模式 | 通俗解释 | 缺点 / 优点 | 例子 |
| --- | --- | --- | --- |
| Blank Restart（空白重启） | 每次和 AI 对话都像第一次见面，你要把目标、背景、限制条件重新讲一遍 | 浪费时间，效率极低，用户体验差 | 每次写代码都要重新说 “我要做什么项目、用什么框架、之前写到哪了” |
| Resumed Work（续聊模式） | AI 记住了之前的对话内容、你的偏好和项目进度，下次直接从上次的地方继续 | 效率高，减少重复沟通，AI 能 “懂你” | 上次写到一半的代码，这次 AI 直接接着写，不用你再解释 |

### ChatGPT 的「双表面记忆」设计

ChatGPT 把记忆分成了两个部分，解决 “什么该记住、什么该忘记” 的问题：

-   **Saved Memories（稳定记忆 / 长期事实）**
    
    -   通俗解释：像你给 AI 写的 “个人档案”，固定不变的信息，比如你的偏好、常用工具、项目规则
        
    -   特点：持久、用户可见，你可以随时查看、修改或删除
        
-   **Chat History（动态上下文 / 对话历史）**
    
    -   通俗解释：像聊天记录，临时的、和当前对话相关的信息，不用永久保存
        
    -   特点：灵活，只在相关对话里生效，不变成永久记忆
        
-   **User Controls（用户可控边界）**
    
    -   通俗解释：你可以决定哪些信息要被记住、哪些要删除，不会被 AI “乱记”
        

* * *

### Claude Code 的「项目连续性记忆」（针对写代码的 AI）

写代码的 AI，要记住的不是 “你是谁”，而是 “这个项目怎么工作”，分 3 个模块：

1.  **Build and test commands（构建 & 测试命令）**
    
    -   要记住项目的编译、测试、格式化命令，比如 “这个项目用 npm run build 编译，用 pytest 测试”，下次直接帮你运行，不用你再教一遍
        
2.  **Repo conventions（仓库约定）**
    
    -   要记住项目的代码规范、架构模式、工作流程，比如 “这个项目用 React+TypeScript，文件结构是 src/components/”，写出来的代码才符合要求
        
3.  **Prior lessons（过往教训）**
    
    -   要记住之前踩过的坑、失败的尝试、已经解决的问题，比如 “上次这个 API 请求报错是因为跨域，这次要加上代理配置”，避免重复犯错
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->










学到了 一个新的prompt，并且在tg里面的hermes agent 使用这个prompt  
请作为我的 AI × Web3 School Learning Agent，先阅读启动 Prompt：[https://aiweb3.school/learning-agent.zh.txt，并结合](https://aiweb3.school/learning-agent.zh.txt，并结合) Handbook：[https://aiweb3.school/zh/handbook/，帮我初始化个人学习计划、GitHub](https://aiweb3.school/zh/handbook/，帮我初始化个人学习计划、GitHub) 学习仓库、每日打卡草稿和 Handbook feedback 流程。请作为我的 AI × Web3 School Learning Agent，先阅读启动 Prompt：[https://aiweb3.school/learning-agent.zh.txt，并结合](https://aiweb3.school/learning-agent.zh.txt，并结合) Handbook：[https://aiweb3.school/zh/handbook/，帮我初始化个人学习计划、GitHub](https://aiweb3.school/zh/handbook/，帮我初始化个人学习计划、GitHub) 学习仓库、每日打卡草稿和 Handbook feedback 流程。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->











| 单词 / 术语 | 音标 | 词性 | 通俗解释（大白话） | 场景例句 |
| --- | --- | --- | --- | --- |
| Agentic Economy | /eɪˈdʒentɪk iˈkɒnəmi/ | 名词短语 | 「智能体经济」，就是让 AI 机器人（Agent）能自己在链上交易、合作、干活的经济系统，AI 不再只是工具，而是能参与赚钱的角色 | The agentic economy lets AI agents buy and sell things on the blockchain.（智能体经济让 AI 智能体可以在区块链上买卖东西） |
| ERC-8004 | /ˌiː ɑː siː eɪt ˈθaʊzənd əʊ hʌndrəd əʊ fɔː/ | 名词 | 以太坊的新规则，专门给 AI 机器人做「链上身份证」和「信用分」，让 AI 能被别人信任，比如证明它是安全的、靠谱的 | ERC-8004 gives AI agents verifiable identities on the blockchain.（ERC-8004 让 AI 智能体在区块链上拥有可验证的身份） |
| ERC-8183 | /ˌiː ɑː siː eɪt ˈθaʊzənd əʊ hʌndrəd əʊ θriː/ | 名词 | 以太坊的新规则，和 AI 机器人的「链上支付、分配资金」有关，让 AI 能自己处理钱，不用人一直盯着 | （注：本次直播未展开，可理解为 AI 的链上钱包规则） |
| Core Thesis | /kɔː ˈθiːsɪs/ | 名词短语 | 核心观点 / 核心主张，就是整个项目最想强调的大方向 | The core thesis is that Ethereum is the backbone for the machine economy.（核心观点是：以太坊是机器经济的支柱） |
| Decentralized Settlement | /diːˈsentrəlaɪzd ˈsetlmənt/ | 名词短语 | 去中心化结算，就是不用银行 / 第三方，直接在链上完成交易和资金清算，没人能控制或篡改 | Ethereum provides decentralized settlement for AI agents.（以太坊为 AI 智能体提供去中心化结算服务） |
| Coordination Backbone | /kəʊˌɔːdɪˈneɪʃn ˈbækbəʊn/ | 名词短语 | 协调支柱，就像 AI 机器人的「共享工作台」，让不同 AI 之间能互相沟通、合作干活 | Ethereum acts as the coordination backbone for the machine economy.（以太坊是机器经济的协调支柱） |
| Machine Economy | /məˈʃiːn iˈkɒnəmi/ | 名词短语 | 机器经济，指 AI、机器人这些机器作为主体参与的经济活动，它们自己交易、赚钱、分配资源 | The machine economy is built on Ethereum, with humans at the center.（机器经济以以太坊为基础，以人为核心） |
| Identity and Trust | /aɪˈdentəti ənd trʌst/ | 名词短语 | 身份与信任，ERC-8004 的核心功能，给 AI 做链上身份，让大家知道这个 AI 是谁、安不安全、值不值得合作 | EIP-8004 is about identity and trust for AI agents.（EIP-8004 是关于 AI 智能体的身份与信任的标准） |
| Registry | /ˈredʒɪstri/ | 名词 | 注册表，就像链上的「AI 档案库」，记录 AI 的身份、信用、验证信息 | ERC-8004 has three registries: Identity, Reputation, Validation.（ERC-8004 有三个注册表：身份、声誉、验证） |
| Validation | /ˌvælɪˈdeɪʃn/ | 名词 | 验证，确认 AI 的身份、代码是安全的、没被篡改，比如用 TEE 技术做安全验证 | The validation registry checks if an AI agent is safe to interact with.（验证注册表会检查 AI 智能体是否安全可交互） |
| Reputation | /ˌrepjuˈteɪʃn/ | 名词 | 声誉 / 信用，记录 AI 之前的交易记录、合作表现，就像 AI 的「信用分」 | The reputation registry tracks how reliable an AI agent is.（声誉注册表会记录 AI 智能体的可靠性） |
| TEE-based verification | /tiː iː iː beɪst ˌverɪfɪˈkeɪʃn/ | 名词短语 | 基于可信执行环境的验证，一种让 AI 代码无法被篡改的安全技术，保证 AI 不会偷偷做坏事 | TEE-based verification makes sure the AI agent’s code is not tampered with.（基于 TEE 的验证确保 AI 智能体的代码不会被篡改） |
| Smart Contracts | /smɑːt ˈkɒntrækts/ | 名词短语 | 智能合约，链上自动执行的程序，比如 AI 之间约定好的交易，到了条件就自动完成，不用人操作 | Agents can negotiate automatically via smart contracts.（智能体可以通过智能合约自动协商） |
| Builder Path | /ˈbɪldə pɑːθ/ | 名词短语 | 开发者路径，就是从新手到能自己开发 AI+Web3 项目的学习路线，教你怎么用这些规则做项目 | The builder path teaches you how to build with ERC-8004.（开发者路径教你如何基于 ERC-8004 进行开发） |

  
Agent（智能体）」？它和普通的 AI 聊天机器人有什么不一样？

去中心化结算和我们平时用微信 / 支付宝转账，有什么区别？
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->












今天我第一次系统了解了 AI + Web3 的核心方向，发现它的本质不是 “发布一个项目”，而是搭建能长期运行的经济基础设施。其中三个和我们普通人最相关的方向是：

AI Agent + 钱包：让 AI 从 “只会说建议” 变成 “能帮你实际操作链上交易”，但必须在我们授权的安全规则里干活。

AI 驱动的链上分析工具：把链上公开的 “看不懂的数字” 翻译成普通人能懂的信息，比如谁在交易、资金从哪来。

今天最大的收获，是打破了 “AI+Web3 就是炒币工具” 的刻板印象。原来它的核心是用 AI 解决 Web3 里 “看不懂、不敢操作、不安全” 的痛点。作为小白，我发现不用一开始就写代码，先从 “会用这些工具” 开始就好 —— 比如用链上分析工具看自己关注的项目，理解资金流向；或者用 AI Agent 帮我整理链上操作的安全规则。同时也意识到，这类工具的核心是 “安全”，比如给 AI 钱包设限额、用工具看懂链上骗局，比盲目跟风更重要。

明日计划

实操：打开 Arkham 的官网，试着用它查一个知名项目的链上数据，看看能不能看懂资金流向。

学习：了解 Coinbase AgentKit 的安全规则设置，比如怎么给 AI 钱包设预算上限和白名单。

记录：整理 3 个适合小白的 AI+Web3 工具，写下每个工具的用途和使用门槛。

![9cdceb46-47a9-45f2-b9d5-ace2720d7de6.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/JessicaLin2000/images/2026-05-21-1779375515259-9cdceb46-47a9-45f2-b9d5-ace2720d7de6.png)
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->













今天我第一次系统了解了 AI + Web3 的核心方向，发现它的本质不是 “发布一个项目”，而是搭建能长期运行的经济基础设施。其中三个和我们普通人最相关的方向是：

AI Agent + 钱包：让 AI 从 “只会说建议” 变成 “能帮你实际操作链上交易”，但必须在我们授权的安全规则里干活。

AI 驱动的链上分析工具：把链上公开的 “看不懂的数字” 翻译成普通人能懂的信息，比如谁在交易、资金从哪来。

今天最大的收获，是打破了 “AI+Web3 就是炒币工具” 的刻板印象。原来它的核心是用 AI 解决 Web3 里 “看不懂、不敢操作、不安全” 的痛点。作为小白，我发现不用一开始就写代码，先从 “会用这些工具” 开始就好 —— 比如用链上分析工具看自己关注的项目，理解资金流向；或者用 AI Agent 帮我整理链上操作的安全规则。同时也意识到，这类工具的核心是 “安全”，比如给 AI 钱包设限额、用工具看懂链上骗局，比盲目跟风更重要。

明日计划

实操：打开 Arkham 的官网，试着用它查一个知名项目的链上数据，看看能不能看懂资金流向。

学习：了解 Coinbase AgentKit 的安全规则设置，比如怎么给 AI 钱包设预算上限和白名单。

记录：整理 3 个适合小白的 AI+Web3 工具，写下每个工具的用途和使用门槛。

![9cdceb46-47a9-45f2-b9d5-ace2720d7de6.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/JessicaLin2000/images/2026-05-21-1779375515259-9cdceb46-47a9-45f2-b9d5-ace2720d7de6.png)
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->















![9e624133935ce03186dcc4b827531082.jpg](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/JessicaLin2000/images/2026-05-20-1779292119144-9e624133935ce03186dcc4b827531082.jpg)![badd5a011b01a19645bbe496cfb6119b.jpg](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/JessicaLin2000/images/2026-05-20-1779292122489-badd5a011b01a19645bbe496cfb6119b.jpg)

今天上了coleraning课，了解到了openclaw,hermes都只是工具，可以不装采用人工做笔记的方式。但是我觉得还是装了比较好，目前再装hermes有点卡在这个验证码的部分

![dde41446ea8e3396c8c41e8276b0d248.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/JessicaLin2000/images/2026-05-20-1779292204473-dde41446ea8e3396c8c41e8276b0d248.png)
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->
















AI工具生态图谱有

聊天型AI，AI编程助手，终端型AI比如open claw，codex，claude code等等，模型平台，通用agent AI
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->

















GLM specializes in coding and agentic tasks。现在的AI（比如GLM、GPT等）越来越擅长：写代码 + 自动执行任务（Agent）

核心培养路径

① Problem Definition（问题定义）

② Bootcamp（共学）

③ Hackathon（实战）

③ Hackathon（实战）

⑤ Talent Retention（人才留存）
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
