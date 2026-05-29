---
timezone: UTC+8
---

# Hesper

**GitHub ID:** Y-shuyi

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->
今天主要听了1场solene的分享+co-learning weekly分享：  
1\. 在生态里，你需要的不止是一个好的项目，更是让生态认识到你。  
2\. 关于如何筛选黑客松idea，如果不知道如何拆解一个真问题，可以看一下前50的笔记参考。

![Integrate community.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Y-shuyi/images/2026-05-29-1780068287853-Integrate_community.png)![BUILDER JOURNEY.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Y-shuyi/images/2026-05-29-1780068299836-BUILDER_JOURNEY.png)
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->



本来想要重新再捡起前几天学到一半的RAG，突然想起一个Andrew Ng的通识课。真的非常推荐所有希望能更有效使用AI的人去看，不需要任何代码基础。总时长只有3h。[https://www.deeplearning.ai/courses/ai-prompting-for-everyone](https://www.deeplearning.ai/courses/ai-prompting-for-everyone)

今天主要看了Module 1，主要解答了诸如以下问题：

-   AI会有讨好的倾向，怎么让AI给到我诚实的回答？Ask neutral questions 描述的时候尽量使用客观的措辞而不是I have a great idea blabla（但这个很难做到诶）；使用评估标准（rubrics）for critiques;
    
-   Writing：怎么样和AI合作写出我想要的稿子？  
    start from outline + based on my notes > expand in bullet points 先从框架开始修改，最后再展开。
    
-   AI的回复有多可靠，这取决于什么？  
    取决于它的预训练数据的patterns。比如占比最高的数据是Reddit forum的公共数据库，而部分公司的私有数据库就不会在拍pretrained data当中，英语为语言的数据明显比粤语要多。基于这个数据范式，通用问题的答案会相对准确（而且Typos也不影响答案）。
    
-   但由于大模型摄入的Public data包含错误信息、过时信息，怎么进一步提高答案的准确性呢？  
    ——打开web search功能，并且在提问中限制条件，比如明确时间节点、明确搜索的资料范围。
    
-   那么是不是我现在有了chatbot，就把它当搜索引擎用就好了呢？什么时候用大模型对话，什么时候用搜索引擎？  
    我们需要根据我们的目的去选择合适的工具。搜索引擎适合：quickly scan several resources; search data in original form - 吴恩达举了一个例子是获得一个特定型号的电器，但是我感觉这个通过LLM也可以；去特定的网站 - 比如我已经注册了airbnb需要在上面订房子，在Agent支付还没有代替我的情况下我还是需要登录网站，但是不是agent支付后面普及之后就不需要了？
    
-   为什么我们需要鼓励AI给到置信度高的回答？因为大模型会自动pull data from most available info rather than most reliable info.
    
-   打开web search，但为什么生成的答案和它调用的resource中有出入？因为有两个模型在工作，一个是user-facing AI model / 另一个Assistant AI model，后者联网审阅材料之后给出总结，而前者并不会再次审阅材料，而是基于总结生成答案。
    
-   使用LLM不同的深入方式，以及在什么场景用到对应的方式？  
    pretrained knowledge / web search / deep research
    

维度：时间长度 / 生成样式 / 是否需要联网搜索 / 这边我漏了以下例如trigger和对比human answer time  

![Screenshot 2026-05-28 at 18.05.50.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Y-shuyi/images/2026-05-28-1779976737848-Screenshot_2026-05-28_at_18.05.50.png)

deep research：Impact类型的问题，需要几十上百份资料检索，人类回答时间几分钟到几小时，通常是你点deep search大模型才会花几分钟去生成  
Andrew举例gemini可以生成不同形式的输出报告，比如html/flashcards等等。

* * *

Co-learning：  
前端设计的话可以看一下opendesign  
[https://variant.com/community](https://variant.com/community)  
[https://stitch.withgoogle.com/](https://stitch.withgoogle.com/)

黑客松会讲故事很重要！  
能完成、跑通、上测试网。eg. 死了么
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->




![Screenshot 2026-05-27 at 18.38.14.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Y-shuyi/images/2026-05-27-1779878335614-Screenshot_2026-05-27_at_18.38.14.png)

## 今日复盘问题（8题）

###   1. 一句话定义：你现在怎么用一句话解释 Agentic Wallet？

  Agentic Wallet是让Agent在人为设定的规则限制下进行自动化支付操作，服务于Agent工作流的钱包。

  ▎ _Agentic Wallet 是让 Agent 在"人设定的规则边界内"执行自动化支付/结算的能力层，服务于 Agent 工作流，而不是让 Agent 自由花钱。_

**复盘补充：** 你的版本抓住了核心——"人为设定规则限制"这个表述很准确。Hermes 的优化把"能力层"这个定位加进去了，强调它是基础设施而不只是一个钱包产品。两个版本都到位。

###   2. 为什么是现在：你如何解释"为什么现在会出现 Agent 支付"？

因为现在agent已经是另一种生产力，生产力需要对应的agent"劳动成本"，自动化执行支付是机器之间协作的最短路径，人工支付需要更多时间成本显然是不能代替机器自动执行的。

  ▎ _因为 Agent 已从"回答问题"变成"执行任务"的新生产力形态。执行任务会产生机器间调用与结算需求；若每笔都依赖人工支付，会成为效率瓶颈，因此需要受控自动支付。_

**复盘补充：** 你的"另一种生产力"方向对，但 Hermes 加的"从回答问题变成执行任务"这个转折更精准——它解释了为什么支付需求是**新出现的**，而不只是"agent 很有用所以需要付钱"。

###   3. 信任问题本质："Agent 失控"在你理解里到底是哪里失控？

  agent失控，是agent对于人应该在何时介入的规则不清晰产生的失控。比如说应该在更换新付款方、价格变动超过20%等等通知+人工确认（但这个部分只是我的practice，不知道真实链上还有什么规则）

  ▎ _"Agent 失控"本质是权限与治理失控，而不是情绪失控。关键在于：哪些场景必须人工介入（如新收款方、价格异常上涨、超预算等）要写成明确规则并被系统强制执行。_

**复盘补充：** 你举的具体触发条件（新收款方、价格变动>20%）说明你在想实际落地而不是背概念，这比抽象回答有价值。Hermes 补的"权限与治理失控"是更准确的归类方式。

###   4. MPC vs 多签（入门版）：你会怎么向朋友解释两者差异（只讲体验/结构）？

  MPC缩写我忘了 Multi platform？

  MPC就是你和Agent、Cobo wallet共同要开一扇门，只有你们三个或者至少其中两个把手掌放上去门才会开，这个过程是可以不发生在链上的，只有交易才会发生在链上；多签就是每一方的签字都会存在链上。

  ▎ _MPC（Multi-Party Computation）：多方协同生成签名，协同过程主要在链下，对外可表现为单地址签名。_

  ▎ _多签（Multisig）：多方分别签名，签名与审批痕迹通常更直接体现在链上。_

  ▎ _共同点：都减少单点控制风险；差异在签名机制位置与链上可见性。_

**复盘补充：** 门锁比喻很好用，下次加上全称就完整了：Multi-Party Computation。核心区分点你抓到了——链下协同 vs 链上可见。

###   5. Pact 四要素：Intent / Execution Plan / Policies / Completion Conditions 你分别会怎么用人话解释？

例如在API付费场景，

  Intent=我想要让agent作为一个token控制器，自动选择模型并且在一定条件下控制我消耗的预算。

  Execution Plan=在policies的基础上执行支付。

  Policies=allowlist/blocklist；何时人工确认/通知；风险等级

  Completion Conditions=何时结束：比如到期、超过预算、项目结束等。

  ▎ _• Intent：我要 Agent 完成什么目标（例如控制 API 成本）_

  ▎ _• Execution Plan：Agent 按什么步骤完成任务_

  ▎ _• Policies：可执行约束（allowlist、预算、分级审批、风险触发条件）_

  ▎ _• Completion Conditions：任务何时自动结束（到期/预算耗尽/任务完成）_

**复盘补充：** 用 API 付费场景串四要素比抽象解释有效得多。Hermes 版本更简洁但你的版本有具体例子，实际向别人解释时你的方式更容易让人听懂。

###   6. 关键规则定位：预算熔断应该写在哪一层？执行流程里怎么调用？

  预算熔断写在Policy。Execution Plan会说请你先参考policy再确定是否能够执行规则；completion condition：超过当日累计预算/人工终止等等等等（这部分不熟悉）

 **复盘补充：** 你说"Execution Plan 会说请你先参考 policy"——方向对但不够精确。更清晰的模型：Policy 是硬约束层（护栏），Execution Plan 每一步执行时会被 Policy层**强制拦截校验**，不是"参考"而是 agent 没有选择权跳过。

###   7. 你的守门员策略：在你自己的场景里，哪3条规则最关键？（例如：allowlist、预算上限、L3人工确认）

allowlist、预算上限、L3人工确认都很关键啊，这个问题提问方式不太好

  ▎Allowlist（只允许已验证收款方/来源）、预算上限（单笔与日累计）、L3 人工确认（新收款方、价格异常、超阈值）

**复盘补充：** 这题的意图是让你**排优先级**。三条都重要没错，但如果只能先实现一条你选哪个？这种排序能力在实际设计系统时很关键。建议想一下：哪条规则缺失时风险最大？

###   8. 异常处理闭环：一旦出异常，你的3步停机SOP是什么？

停止执行并且留下审核报告、告知发起方、允许撤回

  ▎ _先停自动放行（切只读+告警）、_

  ▎ _撤销可疑权限（禁用 key/禁止可疑收款方）、_

  ▎ _复核近24小时日志后再恢复_

**复盘补充：** 你的"告知+撤回"本能是对的，但顺序修正很重要：第一步必须是**先断流**（切只读/停自动放行）。因为在你通知的过程中如果没断流，钱还在跑。顺序是：断流 → 撤权限 → 复核日志。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->





我想建立一个question bank的workflow，可以自动化地按照我关于课题的需要、我自己的学习路径+目标+习惯，去定制化question bank，让这个问题集合服务于我建立更好的知识系统。众所周知提问是非常重要的，尤其是现在有AI回答问题的速度会越来越快，但反过来说，也不是所有的问题都需要在当地下得到解答；AI的便利性也要求我们能够不迷失在问题里，让每一个问题之间由点成线，由线成面。基于这个理念我希望建立这样一个小的、可视化的学习工具。

-   梳理了Question Bank的基本结构
    

![Screenshot 2026-05-26 at 12.19.02.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Y-shuyi/images/2026-05-26-1779769199686-Screenshot_2026-05-26_at_12.19.02.png)

Q: 什么是 Agentic Wallet？它和普通钱包的核心区别是什么？

• date: 2026-05-26

• track: agent-commerce

• priority: now

• source: logs/[2026-05-26.md](http://2026-05-26.md)

• context: 想听懂 Cobo Agentic Wallet 分享，但目前对基础概念接近 0 了解。

• next\_action: 用“用户先设规则，Agent在规则内执行”写出1句话定义，并举1个自动支付例子。

• status: exploring

• answer\_note: Agentic Wallet核心是“策略授权+自动执行”，不是AI自由操作钱包。

☐ Q: 为什么 Web3 + Agent 支付会兴起？

• date: 2026-05-26

• track: ecosystem

• priority: now

• source: logs/[2026-05-26.md](http://2026-05-26.md)

• context: 对“支付兴起”背景不清楚，无法判断行业趋势是否真实。

• next\_action: 按“需求侧（Agent执行任务）/供给侧（链上可编程支付）”各写3点驱动因素。

• status: exploring

• answer\_note: 本质是AI从问答走向执行，执行需要可编程、全球化、7x24结算能力。

☐ Q: Agent 为什么会“失控”？失控具体指什么？

• date: 2026-05-26

• track: privacy

• priority: now

• source: logs/[2026-05-26.md](http://2026-05-26.md)

• context: 看到“Two Silent Failures”案例页，对风险表述理解困难。

• next\_action: 用“提示词约束≠权限约束”写一段100字解释，并列出1个越权示例与1个防护点。

• status: exploring

• answer\_note: 失控多为权限与架构问题，不是“AI情绪失控”；需策略引擎、审计与刹车机制。

☐ Q: MPC 是什么？它在钱包里解决的核心问题是什么？

• date: 2026-05-26

• track: data-sovereignty

• priority: now

• source: logs/[2026-05-26.md](http://2026-05-26.md)

• context: 在多处看到MPC术语，但缺少可落地理解。

• next\_action: 用“钥匙拆分、多人协同签名、无人持有完整私钥”做30秒口头复述。

• status: exploring

• answer\_note: MPC把单点私钥风险拆散，降低单点被盗/单人作恶风险。

☐ Q: MPC 和多签钱包到底差在哪（从用户体验和链上表现看）？

• date: 2026-05-26

• track: agent-commerce

• priority: now

• source: logs/[2026-05-26.md](http://2026-05-26.md)

• context: 两者都没实际体验过，概念容易混淆。

• next\_action: 做一张3行对比表（签名发生位置、链上可见性、操作流畅度）。

• status: exploring

• answer\_note: 多签常是链上多地址审批；MPC多在链下协同生成签名，链上常像单地址签名。

☐ Q: 如何找到并验证一个 DAO 的多签钱包地址是否可信？

• date: 2026-05-26

• track: ecosystem

• priority: now

• source: logs/[2026-05-26.md](http://2026-05-26.md)

• context: 需要从“知道概念”过渡到“能自己查证真实项目地址”。

• next\_action: 按“官网来源→Safe链接→Etherscan合约标签”流程，复查LXDAO地址并记录证据截图。

• status: exploring

• answer\_note: 可信性看来源（官方）、类型（Contract）、行为（与治理/金库上下文一致）。

☐ Q: 是否需要为 Agent 实验单独创建测试钱包，而不是复用主钱包？

• date: 2026-05-26

• track: privacy

• priority: soon

• source: logs/[2026-05-26.md](http://2026-05-26.md)

• context: 已开始测试网实践，担心权限和资金混用风险。

• next\_action: 制定“主钱包/实验钱包”隔离规则：网络、额度、白名单、授权周期。

• status: exploring

• answer\_note: 建议隔离；测试与主资产分离是最基础的风控动作。

☐ Q: 对当前学习阶段，哪些概念是“必须现在懂”，哪些可以后置？

• date: 2026-05-26

• track: meta

• priority: now

• source: logs/[2026-05-26.md](http://2026-05-26.md)

• context: 当前基础较弱，深入细节容易信息过载。

• next\_action: 建立“Now/Soon/Later”学习清单，每次新问题先归类再展开。

• status: exploring

• answer\_note: 当前优先：Agentic Wallet定义、MPC与多签差异、权限边界与风控；后置密码学细节。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->







# 打卡日志 — 2026-05-25

**学习时长**：\_ \_ 小时

## ✅ 今日完成

-   \[x\] 配置 Claude 工作流 hook（自动提醒 /rename 和 /export）
    
-   \[x\] 修复 hook shell 语法错误
    
-   \[x\] 学习 Hermes Agent 使用逻辑
    
-   \[x\]co-learning session
    

## 💡 核心收获

-   建立了对话管理工作流：新对话用 `/rename` 命名，结束用 `/export` 保存 md
    
-   搞清楚终端对话窗口里不能直接发 shell 命令——输入的所有内容都是"聊天内容"，不是 terminal 指令
    
-   理解了 Hermes vs Claude 的核心差异：Claude 自带"手脚"（Bash/Read/Edit 工具）；Hermes 是纯语言模型，工具执行层需要自己搭
    
-   Hermes 可以通过 tool use / function calling 装手脚，但执行器要自己写
    

### co-learning

Q:不怎么了解黑客松，做哪些方向比较好？ A:马铃薯

-   做有趣的UX，因为交易一般都很无聊；可以去看看有趣的UX是怎么做的。
    
-   隐私赛道也不错。
    
-   多与AI 聊天，积极和学霸组队！
    

## ❓ 遇到的问题 / 待解决

-   Hermes `/resume` / title 功能显示不出历史对话列表（原因待查，下次从 `hermes --help` 入手）
    

## 🔗 参考资料

-   Nous Research：[https://nousresearch.com](https://nousresearch.com)
    
-   Clippings/你好，我是小白，能白話的跟我說說啥是Kohaku跟Railgun嗎？[https://x.com/0xMalingshu/status/2016137832465682514](https://x.com/0xMalingshu/status/2016137832465682514)
    

## 📝 Handbook Feedback（如有）

-   章节：
    
-   反馈：
    

* * *

## 🗒 会话总结（/rename about hermes agent）

### 今日决策

-   Claude 工作流规则确立：每次新对话先 `/rename`，结束前 `/export`
    
-   正确命令确认：`/rename`（不是 `/title`），`/export`（不是其他）
    
-   Hermes 学习策略：先理解"模型 vs 客户端"的分层，再看具体功能
    

### 变更文件

-   `~/.claude/settings.json`：新增 SessionStart hook（提醒 /rename）和 Stop hook（提醒 /export）
    

### 明天第一步

-   查 `hermes --help` 或 Hermes 文档，找到历史对话 session 管理的正确用法
    
-   继续 Hermes agent 工具调用（tool use）的实践
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->








![Screenshot 2026-05-24 at 23.57.18.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Y-shuyi/images/2026-05-24-1779638290862-Screenshot_2026-05-24_at_23.57.18.png)
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->









![Screenshot 2026-05-23 at 23.59.19.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Y-shuyi/images/2026-05-23-1779551983031-Screenshot_2026-05-23_at_23.59.19.png)![Screenshot 2026-05-23 at 23.59.11.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Y-shuyi/images/2026-05-23-1779551995589-Screenshot_2026-05-23_at_23.59.11.png)
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->










![Screenshot 2026-05-22 at 23.57.21.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Y-shuyi/images/2026-05-22-1779465443887-Screenshot_2026-05-22_at_23.57.21.png)

今天诚实地请个假，有优先级更高的事情需要做。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->











**核心Takeaway：**AI 从"工具"变成"经济参与者"的那一刻，Web3 就从可选项变成了必需品。

/

**问：Web3产品保证安全是最重要的部分吗？安全之外有哪些维度？**

答：安全在AI+web3的产品当中的确比普通的软件产品权重更高。

-   **资产直接在链上**，出了漏洞钱就没了，不像传统软件可以回滚
    
-   **代码公开**，任何人都可以研究你的合约找漏洞
    
-   **用户信任门槛极高**，一次安全事故基本就死了
    

但是我现在所看到的一些情况是为了开发一个AI+链上产品而去做产品，变成了技术找场景，而不是场景找技术。

想到今天老师说的，大意是技术平权之后，真正需要的是**产品设计思维**。产品设计当中最重要的，包括用户真实需求和产品体验；  
技术以外，另一个难点是“冷启动”；关于一个项目团队的配置——如果A做产品，就需要找到运营BD等去做产品的推广。

/

目前对老师聊到的这几个方向还没有一个比较具体的感觉，再摸索下，尤其是如何看懂AI+web3：

1.  Agent需要经济账户
    
2.  每个项目在回答Agent经济栈的一个具体问题
    
3.  Token不是价值本身，重要的是让软件进入可授权、可结算、可审计的经济系统
    

/

Further question/action：

-   Web3 产品普遍体验很差？
    
-   搜索几款常用的和支付等我感兴趣赛道相关的产品，去体验。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->












今天主要听了Bruce分享的Web3的运行基础。之前我也听不同的人讲过这个部分，其它部分Bruce老师的解读其实能发现是从技术底层逻辑上去拆解为什么其中某一个环节的存在对于整个系统会有影响——这一点其实我还不够问自己更深。最后的Takeaway是web3不仅是关于技术，技术只是基础设施，而更涉及到社会学、经济学和密码学。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->













![Screenshot 2026-05-19 at 15.37.24.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Y-shuyi/images/2026-05-19-1779191101442-Screenshot_2026-05-19_at_15.37.24.png)

今天主要是在部署Hermes Agent，遇到一些网络问题，不过借助gemini解决了。以及目前已经准备好了TG bot，下一步是接LLM的API。  
  
主要参考内容  
官方deployment：  
[https://hermes-agent.nousresearch.com/docs/](https://hermes-agent.nousresearch.com/docs/)

X博主分享：  
[https://x.com/eternityspring/status/2041735065865220416?s=46](https://x.com/eternityspring/status/2041735065865220416?s=46)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->














-   **你是带着什么问题来的？**
    
    > 我想解决的核心问题是：了解自己现阶段（至少这3个月）在web3/AI想要深入的方向。
    
-   **一个月之后，你希望自己变成什么样？**
    
    > 一个月后，我希望能：更了解好的产品的形态；对于web3能够从不同角度参与建设（参与的维度增加，比如有跟lxdao社区members更深层的交互）；可以成为朋友问web3/AI相关问题就会来找的那个人。
    
-   **你最想 build 的东西是什么？**  
    目前没有特别想build的东西，以及没有觉得自己非得从无到有创造一个东西。不过会重点关注、了解下agent commerce和数据主权、隐私相关的产品。想build的更多是一种可持续投入的心态吧。
    

选好助教、布置好agent，把注意力集中在网站的资源上，放平心态，共学共建设。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
