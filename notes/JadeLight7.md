---
timezone: UTC+8
---

# 0xLight

**GitHub ID:** JadeLight7

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->
对demo做安全建模，学习x402安全知识，理清MCP（Agent↔工具）、A2A（Agent↔Agent）、ERC-8004（Agent↔链上注册表）三者的层级和分工。[https://github.com/JadeLight7/aiweb3/blob/main/daily/week2-day5.md](https://github.com/JadeLight7/aiweb3/blob/main/daily/week2-day5.md)
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->

这两天太忙，选定做的方向，转向 x402 Payment + CAW Agent 自主支付闭环。[https://github.com/JadeLight7/aiweb3/blob/main/daily/week2-day3.md](https://github.com/JadeLight7/aiweb3/blob/main/daily/week2-day3.md)
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->


[https://github.com/JadeLight7/aiweb3/blob/main/daily/week2-day1.md](https://github.com/JadeLight7/aiweb3/blob/main/daily/week2-day1.md)  
  
综合对比所有模块，打算做一个x402相关的应用出来，并最终在测试链可验证
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->



继续复习uniswap v3，同时在做hackenproof的审计比赛。[https://github.com/JadeLight7/aiweb3/blob/main/daily/day6.md](https://github.com/JadeLight7/aiweb3/blob/main/daily/day6.md)
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->




今天复习了下uniswap，[https://github.com/JadeLight7/aiweb3/blob/main/daily/day4.md](https://github.com/JadeLight7/aiweb3/blob/main/daily/day4.md)
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->





意识到似乎不需要学太深入，感觉transformer深入学习后较难理解。于是转向完成课程目标，完成了课程模块A中的任务[一二三](https://github.com/JadeLight7/aiweb3/tree/main/demos)，最近在投简历，后几天计划复习一下区块链知识，准备可能的面试。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->






\# Transformer 学习笔记

Transformer 可以理解成一种"让语言里的每个词都能主动去和其他词交流"的系统，它是现在几乎所有大模型（比如 OpenAI 的 GPT、Anthropic 的 Claude、Google 的 Gemini、DeepSeek 的 DeepSeek）的底层核心。它之所以革命性，是因为它第一次真正解决了"长文本理解"和"大规模并行训练"这两个问题。

\## 旧模型的问题

在它出现之前，主流模型更像人在逐字阅读：看完第一个词，再看第二个，再看第三个，前面的信息要靠"记忆"一路传下去，所以句子一长，模型就容易忘掉前面重要的信息。

例如一句话：

\> "The animal didn't cross the street because it was tired."（那只动物没有过马路，因为它太累了。）

这里的 "it" 指的是 animal，而不是 street，但旧模型很容易在读到后半句时已经"忘了"前面的 animal。

\## Transformer 的核心思路：Attention（注意力机制）

Transformer 的思路完全不同，它不再一个词一个词往后传递，而是让句子里的所有词同时出现，并且允许每个词都能直接查看其他所有词。于是当模型看到 "it was tired" 时，它会自动去整个句子里寻找最相关的对象，然后发现 "animal" 和 "tired" 的关系最合理，因此理解 "it" 指的是动物。这个"主动查看其他词"的过程，就是 **Attention（注意力机制）**。

\### 类比：会议室

你可以把它想象成一个会议室：以前的模型像"击鼓传话"，信息只能一个人一个人往下传；Transformer 则像"所有人同时开会"，任何人都可以立刻向任何人提问，所以信息流动速度和质量都会高很多。

\### 示例：代词消解

再比如一句话：

\> "Tom gave Jerry his book."

人类会意识到 "his" 可能指 Tom，也可能指 Jerry，Transformer 也会在内部自动分析这种关系，它会发现某些词之间联系更强，于是动态决定当前应该重点关注谁。它并不是死记硬背语法规则，而是在海量数据中学习"哪些词通常会关联哪些词"。

\### 示例：一词多义

再举个更直观的例子：假设一句话是

\> "I went to the bank near the river."

这里的 bank 指"河岸"；但如果句子是

\> "I deposited money in the bank."

这里的 bank 指"银行"。

Transformer 的强大就在于：同一个词，在不同上下文里，会自动连接到不同的信息。看到 river 时，它会联想到河流；看到 deposited money 时，它会联想到金融机构。它理解语言的方法，本质上不是查字典，而是\*\*动态分析上下文中的关系网络\*\*。

\## 并行计算优势

Transformer 还有一个特别重要的地方：它是\*\*并行的\*\*。以前的模型必须按顺序处理，所以 GPU 很难完全发挥性能；Transformer 则能让所有词同时计算，非常适合现代 GPU 的矩阵运算，因此模型规模可以暴涨，从几百万参数一路扩展到今天几千亿甚至万亿参数的大模型。这也是为什么 2017 年 Transformer 出现后，AI 能力突然开始爆炸式增长。

\## 变种与应用

后来 GPT 系列、Claude、Gemini 等模型，本质上都是 Transformer 的不同变种。比如 GPT 属于"\*\*Decoder-only Transformer\*\*"，它的特点是只能看前面的词，不能偷看后面的词，所以它特别适合"预测下一个 token"，也就是聊天和文本生成；而像 BERT 这种模型则可以同时看前后文，更适合理解任务。

\## 为什么大模型看起来像"会思考"

现代大模型之所以看起来像"会思考"，并不是因为它们真的拥有意识，而是因为 Transformer 在超大规模训练后，已经能够构建非常复杂的"词与词之间的关系网络"，于是逐渐涌现出了推理、写代码、规划、Agent 行为等能力。

\## 总结

你可以把 Transformer 最终理解成：\*\*一种能够让每个词都实时搜索整个上下文、动态寻找最相关信息、再把这些信息聚合起来进行预测的巨大信息路由系统。\*\*

\---

\## 今日反思

今天课比较多没时间学太多内容，初步认识到了 Transformer 的设计，其中数学相关内容还是比较难以理解，可能是有些时间没接触过这种数学内容了，希望在周四能完成 Transformer 的学习。最近也在做一个学院的项目设计，希望在这次学习中给这个项目设计一个 AI 功能。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->







# Day 1 — LLM 自主学习笔记

> 2026-05-18

## 背景

之前一直听过 AI 相关名词（LLM、Agent 等）但都没深入理解底层，AI 工具倒用得不错（Claude Code、ChatGPT）。借这次课程机会系统学习 AI 原理，目标是知其所以然，不只是停留在会用。

* * *

## 一、LLM 是什么？

### 三个关键词拆解

-   **大 (Large)**：参数量大，训练数据集大，计算资源消耗大
    
-   **语言 (Language)**：输入输出都是自然语言（人类使用的语言），模型内部将语言转化为数学表示再处理
    
-   **模型 (Model)**：本质上是一个极其复杂的数学函数 ，输入一段文本，输出一段文本。通过调整参数让输出符合预期
    

### 直观类比

LLM 像一个读过整个互联网的人，你跟它说话，它根据读过的东西预测该回什么。它不是在"思考"，而是在做超高维度的概率计算——给定前文，下一个词最可能是什么。

* * *

## 二、训练过程

LLM 的训练通常分为三个阶段：

### 阶段一：预训练

-   把训练数据中每条文本去掉最后一个 token
    
-   让模型根据前文预测被去掉的 token
    
-   使用**反向传播算法**：计算预测结果与正确答案的差距，从后往前逐层调整每个参数，让差距变小
    
-   训练初期模型完全胡言乱语，随机输出；随着迭代，预测逐渐合理
    
-   这个阶段烧掉绝大部分算力
    

### 阶段二：微调

-   用高质量的人工标注数据（问题-标准答案对）继续训练
    
-   让模型学会"对话格式"——知道什么是好的回答，什么是不好的回答
    

### 阶段三：RLHF（基于人类反馈的强化学习）

-   人工对模型的多个回答进行排序（A 比 B 好，B 比 C 好）
    
-   训练一个"奖励模型"来模拟人类偏好
    
-   用强化学习让 LLM 生成奖励得分更高的回答
    
-   这一步是 ChatGPT/Claude 比原始 GPT 好用很多的关键——不光是知识，更是对齐人类意图
    

* * *

## 三、为什么用 GPU？

训练 LLM 本质上是大量矩阵乘法和加法：

-   一个 token 的预测需要遍历整个神经网络的每一层，每一层都是矩阵运算
    
-   训练数据包含数万亿 token，每一个都要做同样的运算
    
-   **GPU 天生适合并行计算**：几千个核心同时跑矩阵运算，比 CPU 快几个数量级
    
-   现代大模型训练需要数千张 GPU 组成集群，训练一次成本在百万到千万美元级别
    

* * *

## 四、Transformer：为什么是关键突破？

### Transformer 之前：RNN/LSTM

-   处理文本只能一个接一个串行读，第 100 个词的计算依赖前 99 个词的结果
    
-   速度慢、长文本容易"遗忘"前面的信息（梯度消失）
    

### Transformer 的核心创新：自注意力（下一步深入理解这里，没太看懂）

-   一次性读取所有词，**并行处理**
    
-   每个词都和句子中的其他所有词计算"关联度"
    
-   “The cat sat on the mat because it was tired”——模型通过注意力机制知道 “it” 关联 “cat” 而不是 “mat”
    
-   大幅提升训练速度和长文本理解能力
    

## 下一步

-   \[ \] 深入理解 Transformer
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
