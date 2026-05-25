---
timezone: UTC+8
---

# Deerjane

**GitHub ID:** deerjane-bjj

**Telegram:** @name_abcdef

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->
昨天做完最小的实践后再和朋友聊了一下，我才发现我理解的Prompt和handbook中的prompt是不一样。

我一直理解的prompt是指用户层面输入的内容，就是user prompt；可是handbook里面的prompt是internal prompt 内部Prompt/ system prompt。两者是不一样的东西。这么一来就解释了handbook多次提及的instructions 规则。 我还一直在想在用户层面上的prompt有这么大权力去控制agent的权限？（笑死）我的疑惑也解开了。所以这次我搭建的Ai agent工作流程简单而言就是：

### \_用户输入交易信息 （user prompt）

↓  
你的程序把「**_内部 prompt + 用户输入_**」一起发给模型  
↓  
模型按照\_**_内部 prompt_** _的规则分析  
↓  
返回固定 JSON  
↓  
你的页面显示风险结果_

而Chatgpt所建议的internal propmt是这个：

_“你是一个 Web3 交易风险分析助手。_

_你必须检查……_

_如果用户意图里的收款人和 transfer 参数里的 to 不一致，risk\_level 必须是 high。_

_只输出固定 JSON。_

_请分析下面这笔交易：#这个就是user prompt输入的内容_

_用户意图：我想给 Alice 转 100 USDC_

_交易目标地址：0xUSDC\_TOKEN_

_函数名：transfer_

_参数：to=0xMallory, amount=100 USDC_

_资产变化：用户减少 100 USDC_

_Simulation：成功，没有警告”_

在上一个笔记中，我也在demo内加入了规则，有什么condition等。如果下一次再需要搭建Agent的话，我会记住这个system prompt这个概念。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->



今天根据handbook的建议，完成了Prompt的最小实践。我用Codex搭建了一个小demo：[https://github.com/deerjane-bjj/aixweb3-learning/tree/Handbook-AI-Prompt-exe](https://github.com/deerjane-bjj/aixweb3-learning/tree/Handbook-AI-Prompt-exe)

这个任务比想象中有挑战。最开始他给我的版本是用户需要自己输入包括以下内容：交易目标地址、函数名、参数、资产变化、simulation 结果、用户原始意图的Json，增加了用户使用的难度（包括我）。于是我调整了一下，看看能不能输入自然语言。结果demo读不懂自然语言，Chatgpt告诉我需要另外做一个prompt去让模型抽取信息转化成json后，再把这段json发给风险分析的prompt。我觉得这个练习的目的是为了了解Prompt的明确输入边界，这么做可能令焦点模糊，于是我改用一个固定模版，使用者只需要跟着格式更改内容就可以。相对最开始的版本，使用的难度减少了。

练习提供的三个cases中，第一个（普通转账）和最后一个（目标地址与用户意图不符）很容易就让demo输出我预期的结果（risk=high），唯有第二个case（无限授权），demo出现了问题：他监测这个case为普通转账，risk=medium。和我预期的结果不一样。我咨询了Chatgpt的意见，**_原因是我在代码层的规则定得太弱，也对函数（Function）的本质区别不清晰_**，例如加上函数语义规则。所以\*\*_“Demo现在只看到了“没有直接资产转出”，判成 medium；但对_\*\* `approve + unlimited` **_这种权限变化没有足够高的优先级。”_** 然后他建议我加上新的规定 - **_“把 approve + unlimited 设成硬规则，并让它优先于“没有直接资产转出”。_** 在我更新这些规矩之后，就成为现在的version。这三个cases都可以输出我预期的结果。

更新：我发现model 纵使有missing data，也无办法判断risk> low，于是我增加了一个规则：如果miss任何一项条件，都会显示risk= medium，但条件仍然低于approve+unlimited。现在以下是Chatgpt帮我整理后的规则（可以用作参考）：

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/deerjane-bjj/images/2026-05-24-1779628772789-image.png)

最后我认为这个练习令我意识到现实情况一定有更多不同，形形色色的cases，在推出真实的模型给大众，必须要做足够的测试去囊括所有可能的情况。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->





今日主要是補听了之前的分享，包括Web3 的运行原理和Web3下乡计划。前者的分享者Bruce 老师在结束分享时提供了几个问题（附截图），值得好好思考一下，因为我也很认同老师所说的Web3 并不是只有技术本身，还是由密码学、经济学和社会学三种学科交集的中心。我的专业是社会学，难怪会被Web3这个大概念吸引。但他蕴含的底层逻辑和核心思想还是需要深刻的思考和认识。除此之外，老师也简介了Web3的一些基本概念和运行，这部分也加深我的认识，特别是节点等。不过因为我也使用过Web3产品（例如钱包、defi、domain等等），所以有一定的理解。

第二个分享是Web3下乡计划，这个我有点难过，因为recording的质量很差，声音很小，有起码一半时间并没有声音。所以我也没有浪费时间继续听下去。有点遗憾。

最后我会做一些handbook里面的最小实践，因为我一直都不知道如何开始，直到我的朋友提点我一下，说可以用Codex 。于是我下载了Codex，有点小激动。想不到有机会玩一下vibe coding。Let‘s see！

![Screenshot 2026-05-23 at 20.59.52.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/deerjane-bjj/images/2026-05-23-1779550411952-Screenshot_2026-05-23_at_20.59.52.png)
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->







今天去了例會，裡面的小夥伴都很厲害！！特別是Luvia，她只有大一而已，真的後生可畏！！我也要好好加油！！另外一樣有趣的事情，就是大家都有不同程度的焦慮，果然焦慮都是亞洲人的標配啊。。。

今天沒有真實使用到Hermes Agent，這個要留到明天才可以用了。今天就只看了handbook的內容，重點還是focus在AI方面。可能我也了解一下Obsidian怎麼用去打造屬於我的知識庫吧！

最後，我也想說一下我自己也有焦慮啊。。。第一就是這個bootcamp的小夥伴都是理工人，科班出身。作為社科人的我真的很迷惘，唯一的優勢可能就是有在行業工作，比較了解目前我自身行業的需求吧。但是談及編程、建構什麼的還是不懂。。。明天有時間要想想怎麼定位還有在這個bootcamp的outcome是什麼（原本只是想先學習的，目前估計還得有一個小目標）。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->








今天終於可以部署hermes AI，作為一個編程小白，我有點小激動。之後再來更新一下set up的結果。

* * *

經過了幾個小時的set up 我的AI agent終於可以動起來了！簡單紀錄一下我遇到的困難：

1）硬件問題：因為我真的十分擔心安全性的問題，於是我用我的舊電腦（2015年）去安裝Hermes Agent。因為電腦太舊的緣故，原本想安裝的Docker（一個類似Container的軟件）並不支援，於是我只好把電腦reset，由0開始。

2）地區限制：我原本選擇的是OpenAI做我的provider，中國地區用不到只好選擇其他AI provider。開始是選擇Zai的model，發現要收費，最後在openrouter找到免費的模型，完美解決問題！！！！

一頓操作下來，我發現安裝其實是蠻直觀的，新手如我也順利完成安裝（只是有其他issue令我的安裝過程不太順暢QQ）期待明天的真實使用！！

今天除了安裝AI agent之外，也回看了不同老師的分享，收穫滿滿！如果之後有精力，會繼續看handbook的 concepts。

下圖是Hermes Agent動起來的screenshot：

![Screen Shot 2026-05-21 at 9.31.38 PM.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/deerjane-bjj/images/2026-05-21-1779371356311-Screen_Shot_2026-05-21_at_9.31.38_PM.png)
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->











今日目標是要做3樣東西：

1）根據ChatGPT提供的Study Plan，在Github建立Repo，並將Day1、2的筆記錄入。  
2）看昨天的分享並Set up AI agent  
3）繼續學習handbook 關於AI 方向的concepts

鑑於今天是在有點事耽誤了，目前只做了第一樣，馬上會做第二項。第三項估計要明天才可以繼續。Keep Going！
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->












Day2

My note is saved in Google docs: [https://docs.google.com/document/d/18Bv98uTSMrQCXBd3qxowlZqXCX\_dfMbQRMUDxJcWA0k/edit?usp=sharing](https://docs.google.com/document/d/18Bv98uTSMrQCXBd3qxowlZqXCX_dfMbQRMUDxJcWA0k/edit?usp=sharing)

Basically I just read the handbook and clarify the ideas of different AI concepts.
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->















今天我查看了Portal裡面Week1的要求，我發現有90%我都看不懂我到底要做什麼。因為我目前的背景是在Web3 end-user 有經驗、AI 新手、編程零基礎。於是我查詢了Chatgpt，他給了我關於第一週的建議和方向：

核心要求其实只有三件事：  
**理解 AI 基础概念、完成一次 Web3 测试网操作、做一个 AI × Web3 的最小交叉实验。**

Day. 1：用 ChatGPT 建立你的个人学习计划  
Day 2：低风险 Learning Agent 配置体验  
Day 3：建立一个 GitHub repo  
Day 4：理解錢包、簽名、交易、Gas  
Day 5：做一次测试网交易，不要急着部署合约  
Day 6: 做一个最小 AI × Web3 交叉实验  
Day 7: Week 1 Reflection：写一份复盘

完成以上tasks後，他建議我可以做一些延展：  
1.不懂的问题整理成“问题清单  
2.选一个你自己的小方向（用户、信任、安全、解释、治理）

我覺得這個學習計劃既適合我現在的程度以及能在我的舒適圈擴展到我的伸展區。會持續在學習筆記和github更新進度。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
