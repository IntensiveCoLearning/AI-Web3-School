---
timezone: UTC+1
---

# WongKaraWong

**GitHub ID:** WongKaraWong

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->
今天这场直播又把我对 AI × Web3 的理解往前推了一步。  
有一句话让我印象很深：

> **AI agent 越来越擅长“决定要做什么”，但 Web3 要负责规定“它被允许做什么”，以及这些行为如何被记录和审计。**

整场分享都在围绕一个「Agent 经济栈」的思路展开：

-   **AI 负责理解和决策**  
    Agent 不再只是给建议，而是可以读数据、做判断，甚至直接给出要执行的具体动作。
    
-   **Web3 给它一套身份和账户系统**  
    钱包、权限、限额和日志，一起定义了这个 agent 在链上的“身份”和“权力边界”：它是谁、能动哪些资产、能调用哪些合约。
    
-   **风险和安全要内建在设计里，而不是事后补丁**  
    一旦 agent 能动真金白银，就必须有预算上限、交易模拟、欺诈检测，以及一键暂停 / 撤销的机制。  
    一个再聪明的模型，如果没有安全护栏，本质上只是“更快、更自动地犯昂贵错误”。
    

对我来说，最大的心态变化是：  
以后看到 AI × Web3 项目，不只是问「是不是 AI 项目 / Web3 项目」，  
而是会先问一句：  
**「它到底在这条 Agent 经济栈里，强化的是哪一层——资源、账户、分析、用户安全，还是系统风控？」**

这一点也直接影响了我后面想做的方向：  
与其盲目追新的叙事，不如老老实实去补一块栈里真实缺失的能力，让 agent 在链上的每一步都更可控、更可解释。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->

## **This week’s learning summary（简短版）**

This week felt like the moment my view of _AI × Web3_从「很多酷项目」变成「一整套经济系统」。

## **1\. 从“AI 会聊天”到“AI 会行动”**

-   通过 AI x Web3 Project Map，我开始用一句话看这条赛道：  
    **AI 负责理解和决策，Web3 负责身份、支付、结算和审计。**
    
-   真正有意思的不是「AI 项目发不发币」，而是：当 AI 变成能租算力、买数据、发交易、管理资产的 agent，它就需要钱包、权限、预算和可追责的记录。
    

## **2\. 学会用 “Agent 经济栈” 看项目**

这一周我反复在练习一个思路：  
不要先记住所有项目名，而是先看它在整条栈里解决哪一层的问题：

-   资源层：如 Bittensor、Render、Akash，解决 AI 需要的算力、存储、数据和模型服务从哪儿来，怎么用市场/激励机制组织起来。
    
-   账户层（Agent + 钱包）：如 Coinbase AgentKit、MoonPay Agents，让 AI 不只是「给建议」，而是能在授权范围内真的发交易、转账、swap。
    
-   认知层（链上分析）：如 Arkham、Nansen、Dune，把地址和资金流翻译成可理解的情报，为人和 agent 提供决策依据。
    
-   用户保护层：如 Blockaid、Rabby、Safe，通过交易模拟、权限管理和智能账户，帮普通用户看懂「点确认之前会发生什么」。
    
-   机构风控层：如 Chainalysis、Forta、Chaos Labs，帮助交易所和协议做 KYT、攻击预警、参数风险建模。
    

这也改变了我看项目的习惯：

> **先问：它在 Agent 经济栈里补的是哪一个环节？ 而不是只看叙事和价格。**

## **3\. 风险边界意识被拉高了一档**

这一周一个很重要的提醒是：

-   模型输出 ≠ 执行权。就算是很聪明的 agent，真正动钱那一刻，仍然需要授权、限额、日志和可撤销机制，否则 prompt injection 直接变资金损失。
    
-   链上标签是概率判断，不是法律事实，合规和风控需要证据链和人工复核。
    
-   钱包体验可以做得很丝滑，但「用户看得懂自己在干嘛」这一点不能牺牲。
    

这让我开始把「安全设计、权限边界和风控思维」当成产品设计的一部分，而不是事后补救。

## **4\. 自己的角色感：从旁观者到“想动手做的人”**

综合下来，这一周对我的影响有两点：

-   心态上：从「看热闹」变成「想搞懂整个系统」，并且尝试用 Agent 经济栈来定位每一个新项目。
    
-   行动上：开始酝酿一个与**钱包体验 + 安全 + agent**相关的黑客松方向——做一个帮普通用户「读懂链上操作后果」的小型 agent / 安全层工具，把这周学到的账户、分析和安全结合起来。
    

如果用一句话总结这周：

> **AI 让软件开始自己“行动”，Web3 给这些行动一个可以被授权、被结算、被追责的舞台，而我正在学习如何看懂、设计这整套舞台。**
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->


Today I watched an English broadcast about AI × Web3 and one idea clicked for me:

> **AI is moving from “answering questions” to “taking actions”, and Web3 is the economic layer that makes those actions accountable.**

In the talk, they broke it down into a simple stack that really helped my understanding:

-   **AI handles understanding and decision-making**  
    Models and agents can read data, reason about options, and propose what to do next.
    
-   **Web3 provides identity and accounts**  
    Wallets, on-chain identity, permissions and limits define _who_ the agent is on-chain and _what it is allowed to do_.
    
-   **AI needs an economic account, not just an API key**  
    Once an agent starts renting compute, buying data, calling APIs or sending transactions, it needs a wallet, budget, spending limits and logs.
    
-   **Security and risk are not “nice to have”**  
    If an AI can move real money, you must design guardrails: authorization, limits, transaction simulation, fraud detection, and a clear way to pause or revoke access.
    
-   **Good projects solve a specific layer of this “agent economy stack”**  
    Some focus on compute and storage, some on agent wallets, some on on-chain analytics, some on user protection, some on institutional risk. Seeing them as parts of one stack makes the landscape much clearer.
    

对我来说，最大的收获是：以后看到 AI × Web3 项目，我不会只问「是不是热点赛道」，而是会先问：**它到底在这条 agent 经济栈里解决的是哪一个具体问题？**
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->



这周对我影响最大的一句话是：

> **AI 负责理解和决策，Web3 负责身份、支付、结算和审计。**

这句话直接帮我把之前很多零散的概念串起来了：

-   如果 AI 只是帮人聊天、写文案，其实 Web3 并不是刚需；
    
-   但当 AI 变成一个会「租算力、买数据、调用 API、发起交易、帮你管理资产」的 agent，它就一定会遇到一堆很 Web3 的问题：
    
    -   它的账户是谁？
        
    -   钱从哪儿来、怎么付、怎么限额？
        
    -   它做过什么事，出了问题怎么追责？
        

这份 Project Map 通过五个主案例，把这套「agent 经济栈」拆得很清晰：

-   Bittensor 对应的是：AI 需要的算力、模型服务从哪儿来，怎么被激励和定价；
    
-   Coinbase AgentKit 对应的是：AI agent 怎么真的长出「链上的手脚」，在授权范围内帮你转账、swap、调合约；
    
-   Arkham 对应的是：链上数据怎么被 AI 翻译成「谁在做什么、钱往哪儿走」这种可以用来决策的情报；
    
-   Blockaid 对应的是：用户在点「确认」之前，谁来帮他看清楚自己到底要签什么、会损失什么；
    
-   Chainalysis 对应的是：对机构来说，AI 帮不上忙还不行，但风控、合规和可审计又不能丢。
    

对我个人的冲击是：**以后再看到一个「AI + Web3」项目，我会先问：它在这条栈里解决的是哪一个具体问题？**  
而不是只停留在「这个东西是不是 AI 赛道、是不是 Web3 赛道」。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->




今天认真看完了这份《AI x Web3 Project Map》，用 Bittensor、Coinbase AgentKit、Arkham、Blockaid、Chainalysis 五个主案例，把「AI 走进 Web3 经济系统」需要的整套能力串了起来：从资源、账户，到认知、安全和风控，感觉像是第一次从「系统视角」去看 AI x Web3。

以前我对 AI + Web3 的理解还停留在「AI 项目发个币」「Web3 项目加个 AI 功能」这种比较表层的认知，这次最打动我的，是那句核心判断：**AI 负责理解和决策，Web3 负责身份、支付、结算和审计**。 换句话说，如果 AI 只是聊天机器人，其实不一定需要 Web3；但一旦 AI 变成真正会「下单、付款、租算力、买数据、发交易」的 agent，它就必须进入一个「有账户、有权限、有记录、能追责」的经济系统，而这正是 Web3 擅长的地方。

整套框架里有五个方向，每一个都对应一个很具体的问题：

-   去中心化 AI 基础设施：Bittensor、Render、Akash 这类项目在回答「AI 生产要素从哪儿来、怎么算价格、怎么激励供给」。让我第一次把算力、存储、数据看成一种可以被市场化组织的资源网络，而不是只存在云厂商控制面板里的东西。
    
-   AI Agent + 钱包：像 Coinbase AgentKit、MoonPay Agents 解决的是「AI 不只是给建议，而是怎么安全地执行转账、swap、调用合约」。这让我意识到，真正的风险不在于「AI 会不会想错」，而在于「人怎么给 AI 授权、限额和撤销机制」。
    
-   链上分析工具：Arkham、Nansen、Dune 把冷冰冰的链上数据翻译成「谁在干什么、钱往哪儿走、风险在哪」。这对我自己很有启发——未来看链上，不该只盯价格，而要学会看地址、资金流和行为模式。
    
-   智能钱包与安全助手：Blockaid、Rabby、Safe 等项目在解决「用户看不懂自己在签什么」的问题。这里我特别有共鸣，因为这跟我以前被各种复杂签名吓到的体验很像。
    
-   交易所和 DeFi 风控：Chainalysis、Forta、Chaos Labs 这些项目，让我第一次系统性地理解，机构眼里的 Web3 不是「投机」，而是一堆需要实时监控和建模的风险点。
    

对我个人来说，收获最大的有三点：

1.  **视角从「单个项目」升级到「经济栈」**  
    原来每一个看似孤立的 AI x Web3 项目，其实都在回答同一条 agent 经济栈里的某个环节：资源从哪里来、账户怎么授权、数据如何解释、用户怎么被保护、系统风险谁来兜底。 以后再看到新项目，我会先问自己：它是站在哪个层？在补什么缺口？
    
2.  **开始区分「基础设施」和「纯叙事」**  
    这份地图一直强调：AI + Web3 的价值，不在于给 AI 套一个 token，而在于让软件主体能被授权、能结算、能审计。 这让我意识到，以后看项目不能只看故事多好听，而要看它有没有真实接口、真实用户、清晰的安全边界和合规意识。
    
3.  **重新思考自己在 AI x Web3 里的位置**  
    当 AI 逐渐从「工具」变成「agent」，我有两个选择：继续当只会用工具的用户，还是努力成为可以设计规则、搭建栈、把这些能力拼在一起的人。 这份内容像是在提醒我，如果真想往后者走，就不能只学某一个圈子（只学 AI 或只学 Web3），而是要练习用「系统」的眼光去看整条链路。
    

最后对「风险边界」那部分也挺有感触：

-   模型不等于执行权，AI 最后能不能动钱，一定要有明确的授权和限额。
    
-   链上标签不是法律事实，分析工具给的是概率，需要人类复核和证据链。
    
-   钱包和体验做得再顺滑，也不能牺牲安全感和可恢复性。
    

> **AI 让软件开始自己「行动」，Web3 则负责给这些行动一个有规则、有记账、有追责的经济舞台。 而我接下来要做的，就是在这套舞台搭建的过程中，找到自己最想深挖的一块，并开始动手。**
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->





**为什么是 REALart、为什么是 Web3**  
这一轮学习，让我更确定自己想做的 REALart，不只是「做一个上链的艺术网站」而已，而是想用 Web3 去解决一个老问题：艺术家和收藏者，怎样才能真正掌握自己的作品和权益，而不是一切都被平台说了算。 在 REALart 里，每一件作品不只是图片，而是可以在区块链上被验证、追踪、分润的资产，这也逼得我不能只停留在概念层面，很需要真的弄懂技术，才有办法说服别人一起参与。

**Web3 核心：平台不再「帮你保管」，而是「还你主权」**  
以前我会直觉觉得「平台 = 帮你处理好一切」，但了解 Web3 之后，我开始觉得 REALart 应该走的是另一条路：让艺术家和收藏者自己掌握资产。 作品、身份、收益都绑在自己的钱包和私钥上，平台只是提供工具、界面和教育，教你怎么用，而不是全部帮你管。对我自己来说，这也是一种转变：我要学会少一点「替你做决定」，多一点「帮你有能力自己决定」。这个心态如果养成，其实以后不管做什么产品，都会更尊重用户的主动权。

**Gas Fee：让我开始在意「每一次操作值不值得」**  
这次学习后，我才真正理解 gas fee 是什么：就是在链上做事要付出的「服务费」，是给那些帮忙验证和打包交易的人。 想到 REALart 的场景，就变得很具体：铸造作品、转移所有权、分润版税，每一步都有 gas 成本。这提醒我，以后设计 REALart 流程时，要多问自己一句：「这一步，对创作者和收藏者来说，真的值得花这笔 gas 吗？」。这种想法，也在训练我做产品时更会取舍，而不是只是把功能一股脑堆上去。

**冷钱包：安全感是可以一步一步养成的**  
学到冷钱包之后，我第一次感觉到，资产安全其实是可以被「设计」出来的。 把私钥放在完全离线的冷钱包里，就是在帮自己把最重要、最贵的资产锁在一个更安全的地方——对 REALart 来说，可能就是那些代表关键作品，或者实体艺术所有权的代币。 这也让我发现，REALart 不应该只是方便大家 mint 和交易，而是应该教用户怎么做分层管理：日常小额交易用热钱包，更重要的作品放冷钱包，学会备份、学会分散风险。对我自己来说，这是在学会「事前把风险想到」，而不是出事之后再补救。

**PoW 和 PoS：选用哪条链，其实是在表达你相信什么**  
在弄懂 PoW 和 PoS 的过程中，我不只是知道了技术上的差别，也开始意识到：REALart 要站在哪一个价值立场上。 PoW 很安全、很传统，但耗电；PoS 更省能、更容易扩展，也更容易被大众接受。 对一个艺术平台来说，这不只是在选一条链，而是在跟艺术家和收藏者说：「我们在意安全？在意环境？还是在意扩展性？」。这让我之后在做技术选择时，不会只看「费用多少、速度多快」，而是会一起考虑品牌故事和价值观。

**Web3 x REALart：让我慢慢变成一个真正的「创造者」**  
把这些东西串起来，Web3 对我来说已经不只是很酷的名词，而是一套会逼我更有主动性和责任感的框架。 在 REALart 这个计划里，gas fee 让我学会思考每一步操作的价值；冷钱包让我重视长期安全；PoW 和 PoS 让我在技术选择上，开始考虑背后的立场和故事。这样的累积，让我不再只是旁边看 Web3 热闹的人，而是愿意真的动手，把自己对艺术和公平的想法放进产品里的人，也让我更期待 REALart 将来可以变成一个经得起时间考验的平台，而不是只有短期话题的项目。
<!-- DAILY_CHECKIN_2026-05-20_END -->
<!-- Content_END -->
