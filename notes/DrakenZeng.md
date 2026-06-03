---
timezone: UTC+8
---

# Draken

**GitHub ID:** DrakenZeng

**Telegram:** @draken_zeng

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->
测试打卡记录
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

今天将 AI 的整体线路全部过过了一遍，大致有了一个基础的概念印象。然后也尝试着去做一个本地的 rag 大致上对 rag 的理解就是它会有两个模型的需要。一个是 embedding 模型，和一个是最后输出结果的 llm 模型。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->


今天主要学习了 AI Agent 相关的一些基础知识，重点理解了 **Prompt 在 Agent 系统中的作用**，以及 **Zero-shot 和 Few-shot 的区别**。

## **1\. 对 System Prompt 的理解**

以前可能会把 System Prompt 理解成“放在开头的一段提示词”，但今天学习后发现，它并不只是普通的开场白，而更像是 **Agent 代码层面的契约**。

System Prompt 会影响：

-   LLM 在整个会话中的行为方式
    
-   Agent 可以做什么、不可以做什么
    
-   Agent 的能力边界
    
-   输出内容的格式和风格
    
-   工具调用时的约束
    
-   遇到不确定问题时的处理方式
    

也就是说，System Prompt 本质上是在定义这个 Agent 的“运行规则”。  

它决定了 LLM 在当前 Agent 系统里的行为极限，而不只是简单地告诉模型“你是谁”。

## **2\. 对 Zero-shot 的理解**

今天也学习了 **Zero-shot** 的概念。

Zero-shot 指的是不给模型任何示例，只给它任务说明，让模型依靠自己的预训练知识、指令微调能力和推理能力来完成任务。

比如直接告诉模型：

```
请把下面这段话总结成三点。
```

这就是 Zero-shot。  

模型没有看到示例，只能根据任务描述自己判断应该怎么做。

我理解 Zero-shot 更适合：

-   任务比较简单
    
-   输出格式不复杂
    
-   模型本身已经熟悉这类任务
    
-   不需要严格模仿某种格式或风格
    

## **3\. 对 Few-shot 的理解**

Few-shot 指的是给模型一个或多个示例，让模型通过当前上下文中的示例学习任务模式。

这里的“学习”不是更新模型参数，也不是重新训练模型，而是在当前上下文里通过 **In-context Learning** 临时学会一种模式。

也就是说：

-   模型权重不会改变
    
-   示例只在当前 context 内有效
    
-   模型会根据示例模仿格式、风格和处理方式
    
-   示例越清晰，输出越稳定
    

比如给模型几个这样的例子：

输入：用户想学习 AI Agent

输出：建议从 LLM、Prompt、Tool Calling、Memory、Agent Workflow 开始

输入：用户想学习 RAG

输出：建议从 Embedding、Vector Database、Retriever、Chunking、Evaluation 开始

然后再让模型处理新问题，它就更容易按照同样的结构来回答。

## **4\. 用后端 API 来类比 Zero-shot 和 Few-shot**

我觉得可以用后端 API 调用来类比这两个概念。

**Zero-shot** 就像是只给调用方一份完整的 API 文档，让他自己根据文档理解怎么调用。

它依赖的是：

-   文档是否清楚
    
-   调用方是否理解能力强
    
-   任务本身是否简单明确
    

**Few-shot** 则像是不仅给了 API 文档，还额外给了几个示例请求和示例响应。

这样调用方就可以照着例子写，出错概率会更低。

所以可以这样理解：

Zero-shot ≈ 给一份 API 文档，让对方自己理解怎么调用

Few-shot ≈ 给 API 文档 + 几个示例请求和响应，让对方照着模式写

这个类比让我更容易理解 Few-shot 的价值：  

它不是在训练模型，而是在当前上下文里给模型一个可以模仿的模式。

## **5\. 今日总结**

今天最大的收获是：Prompt 不只是“怎么问 AI”，而是在 Agent 系统里承担了更重要的结构性作用。

尤其是 System Prompt，它更像是 Agent 的行为契约，会影响模型在整个任务执行过程中的能力边界和输出方式。

同时也理解了 Zero-shot 和 Few-shot 的区别：

-   Zero-shot：不给示例，靠模型已有能力和任务指令完成。
    
-   Few-shot：给示例，让模型在当前上下文中模仿示例模式。
    
-   Few-shot 不会更新模型权重，只在当前上下文中生效。
    
-   对复杂格式、固定风格、稳定输出要求高的任务，Few-shot 通常更可靠。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->



# 一、核心思想与基础概念

### 1.1 基本哲学

-   **万物皆函数 (Everything is a Function)**：一切智能过程都可以用数学函数表示
    
-   **符号主义 (Symbolism)**：试图用精确的符号逻辑解释智能（遇到瓶颈）
    
-   **连接主义 (Connectionism)**：通过大量简单单元的连接来模拟智能
    

### 1.2 模型基础

-   **模型 (Model)**：表示复杂函数的数学结构
    
-   **权重 (Weight)**：模型中的可调整参数
    
-   **大模型 (Large Model)**：参数量特别巨大的模型
    
-   **大语言模型 (LLM, Large Language Model)**：专门处理自然语言的大模型
    

# 二、基本概念

### 1\. Token

-   LLM 处理的最小单位,既不是字符也不是单词,是介于两者之间的"子词片段"(subword)。每个 token 在模型内部就是一个**整数 ID**。
    
-   **为什么不用字符或单词:**
    
    -   **按单词切**:词表会爆炸(英文几十万),且没法处理拼写错误 / 新词 / 中日韩这种没空格的语言
        
    -   **按字符切**:序列太长(1 万字文档 = 1 万 token),O(n²) attention 直接爆
        
    -   **subword 是折中**:常见词整词作一个 token(`the` / `tion`),低频词被拆碎(`unbelievable` → `un` + `believe` + `able`)
        

\*\*总结：\*\*Token 是信息论意义上的"最优压缩单位" —— 在固定词表预算(~10万)下,让训练语料的平均每 token 信息密度最大化。BPE算法本质就是贪心地"合并最高频 pair",直到词表填满。

### 2\. Embedding

-   把离散对象(token / 句子 / 图片 / 用户)映射到一个**固定维度的浮点向量**(典型 768 / 1024 / 1536 / 3072 维),让"语义相似"变成"向量距离近"。
    

例如：Token 是整数(5050、6231)。整数之间没有"相似度"概念:5050 和 5051不比 5050 和 99999 更相关。Embedding 给每个 token ID 分配一个向量，让语义相似的 token -> 向量距离近。

-   向量空间满足三件事,而这三件事是 LLM 能力的基础:
    
    -   可微(可以梯度下降训练) —— 离散整数不可微,向量可以
        
    -   可度量(cosine / 欧氏距离 = 语义相似度) ——"猫"和"狗"距离近,"猫"和"汽车"距离远
        
    -   可代数运算(著名的 king - man + woman ≈ queen) —— 语义关系变成几何方向
        

\*\*总结：\*\*Embedding 不是"设计"出来的,是"任务逼迫"出来的副产品。任何能让模型在大规模任务上做对预测的几何结构,就是好的 embedding。

### 3\. Transformer

-   2017 年 Google “Attention is All You Need” 提出的**纯 attention + 前馈层堆叠**的神经网络架构。所有现代 LLM(GPT / Claude / Llama / Qwen / Gemini)都是 Transformer 的变种。
    

Transformer = Attention + MLP + Residual + LayerNorm

| 组件 | 解决的根本问题 |

| Attention | “token 之间如何交换信息” —— 横向 mixing |

| MLP(前馈层) | “单个 token 内部如何加工信息” —— 纵向 transform。Attention 只能做"加权混合"线性操作,需要 MLP 提供非线性表达力 |

| Residual(x + sublayer(x)) | "深层网络如何保证梯度能传回去" —— 没有 residual ,堆 100 层直接训不动 |

| LayerNorm | "数值如何保持稳定" —— 防止激活值在深层网络里爆炸/消失 |
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
