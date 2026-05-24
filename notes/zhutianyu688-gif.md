---
timezone: UTC+8
---

# zhutianyu688-gif

**GitHub ID:** zhutianyu688-gif

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->
今日主要拆解了前段时间很好的存储板块，以及一个相关的存储项目arweave。  
arveave的底层逻辑是，矿工负责提供存储空间  
用户一次性交费用  
这个费用会分两个部分  
有一个部分直接给打包这个数据成为区块的矿工，另一部分是作为长期奖励，这个是协议规定的，如果检测方发现你没有长期保存一个数据，那你就不会再得到激励

虽然存储是一个最近很热的话题，但是如果我们细细观察，最近炒作非常凶猛的几家存储厂，他们的利润来润主要是hbm，这种高带宽，读写能力强，与模型训练的gpu配套的存储，你从长远角度看，这些公司当然股价还会继续上涨，因为用于ai agent训练的内存是不够的，但是你回顾过去几十年，用于永久存储的不管是ssd还是各种产品，并没有存在一个需求过剩，所以从长远角度看ar这个山寨币的投资价值有限，仅能作为短期炒作来看，并不具体增长爆发点，但是不排除币圈炒作，个人观点。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->

![截屏2026-05-23 23.53.11.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/zhutianyu688-gif/images/2026-05-23-1779551603298-__2026-05-23_23.53.11.png)

深入研究了bittensor，这个项目。

具体打卡内容见5.21提交的作业。

思考：这个项目在最初设计的poa机制是否还有其他办法来解决，tao的最开始的发型和生态的维持，协议的修改没法做到完全的去中心化，如何能够更好的设计这个项目？

明天继续拆解file 和 ar
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->


5.22（不是在水笔记，今天重新思索了一下）

重新梳理了钱包，网络，节点，rpc，共识机制等概念

如果以快递站举例，钱包像是你发起的一个上门取件或者是你的一个寄包裹请求，这个钱包里面有你填写的地址，身份信息。

节点可以看作是上门取件的快递小哥，他来找你要收款码，也就是验证寄快递的人的身份，同时要求你支付金额，相当于验证你的gas费是否充足

网络可以理解为整个快递站的运行系统，统筹调度，可以看到你的包裹的位置等等

rpc理解为你连接各个快递站的接口，就像一家快递公司有很多个站点，你从app里就可以看不同站点的联系方式，地址等等，总之是一个连接点

共识机制需要从实际情况web3理解

以比特币网络，共识机制是pow,proof of work 工作量的证明，节点找到工作量最大的，给他广播出去，然后大家去验证，验证成功这个区块就被上联

当然这个共识机制与实际的快递公司不同的点在于，快递公司是由老板的，规则是老板说的算，老板发工资

而web3网络虽然有原生住民和开发者，但是后的运行是靠所有人的努力

理解可能不够准确。。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->



![截屏2026-05-20 17.03.19.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/zhutianyu688-gif/images/2026-05-21-1779378792797-__2026-05-20_17.03.19.png)

今天比较忙，先提几个问题，周末解决

1rpc网络是谁提出的，为什么会达成共识

2 pos如何产生的

3 节点和网络如何理解

4 eth的v神是如何设置gas费 来获得所谓的“诺贝尔经济学奖
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->




![截屏2026-05-20 17.03.19.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/zhutianyu688-gif/images/2026-05-20-1779277180808-__2026-05-20_17.03.19.png)

学习总结：

1 搞懂embedding attention transformer的区别 embedding更像是给文本确定身份 attention 主要负责决定词在上下文中更应该参考哪些词 transformer 感觉更像是 通过多层attention来理解 文本的真实意思。

2 理清一次交易的过程 大致包括 钱包产生交易 签名 广播 打包 验证 确认（不够严谨）

钱包知识保存私钥，但其实资产是在链上

问题：钱包是谁规定的 算法吗？ 有公共承认的技术在支撑吗 我怎么知道我生成的钱包是有效的。，

为什么曾经的gas fee很贵 现在的可以价格打得很低
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->





![截屏2026-05-19 23.49.16.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/zhutianyu688-gif/images/2026-05-19-1779205838582-__2026-05-19_23.49.16.png)

第一次深入了解了web3和web2的区别，虽然并未完全理解，至少通过与web2对比，把web3的支付系统了解清楚了，**Web2 里，银行是最终裁判。Web3 里，区块链状态是最终裁判。**后面我将搞懂关于一笔稳定币支付交易的生命周期。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->






今天把hermes agent接好了，按照指引配置了机器人，配置到github cli的时候出了问题，还没有找到解决办法。

![截屏2026-05-18 22.36.34.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/zhutianyu688-gif/images/2026-05-18-1779115054084-__2026-05-18_22.36.34.png)
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
