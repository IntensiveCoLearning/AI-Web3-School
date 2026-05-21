---
timezone: UTC+8
---

# @0xMrByte

**GitHub ID:** panrui1984

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
function Calling的流程可以分为：

1.  **LLM/AIGC大模型思考：** 用户输入问题，AI Agent中的核心LLM/AIGC大模型先对问题进行分析思考。
    
2.  **Function Calling行动：** 如果问到了股票涨跌问题，则需要LLM/AIGC大模型分析出需要调用的Function以及要传入的参数。
    
3.  **Function Calling响应：**Function运行后返回输出结果，LLM/AIGC大模型再将答案整理成自然语言回复给用户。
    
4.  **流程的循环迭代：**除了一次性将输出结果发送给用户，我们还可以设置循环迭代的Function Calling过程，让LLM/AIGC大模型带着回答和问题进行多次思考，多次调用Function，使得输出结果完善。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

一个主流AI Agent系统中通常包含：

-   **感知（Perception）模块**：获取外部环境信息，接收多模态输入（文本、图像、传感器数据），例如GPT-4o可端到端处理视觉与语音。
    
-   **决策（Planning）模块**：基于LLM/AIGC大模型进行思考、规划、决策，通过思维链（CoT）、思维树（ToT）等技术拆解复杂目标，并基于反馈持续优化策略。
    
-   **行动（Action）模块**：调用工具（API、数据库、搜索引擎、机器人肢体等）去完成任务。
    
-   **记忆（Memory）模块**：记忆模块又可以分为短期记忆和长期记忆。短期记忆依赖大模型的上下文窗口（如128K tokens）存储数据和知识，用于优化任务效果。长期记忆则通过向量数据库+RAG实现历史经验存储与检索。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->


今天在本机安装了hermes， 接入deepseek，渠道段使用了tg，

学习内容：

**unction Calling本质上是LLM/AIGC大模型能够调用外部工具和API的能力**。我们在使用大模型的Function Calling能力时，首先需要定义相关的Functions，通过系统提示词告知大模型。**当用户输入问题时，大模型首先需要判断是否使用Function，如果需要使用Function，再确定具体使用哪个Function。如果不需要使用Function，则直接生成回答**。

如果需要调用Function，大模型会返回一个JSON或者XML格式信息，其中包括了需要调用的Function名称、参数名及对应的参数值等传参信息。

Function Calling的流程可以分为：

1.  **LLM/AIGC大模型思考：** 用户输入问题，AI Agent中的核心LLM/AIGC大模型先对问题进行分析思考。
    
2.  **Function Calling行动：** 如果问到了股票涨跌问题，则需要LLM/AIGC大模型分析出需要调用的Function以及要传入的参数。
    
3.  **Function Calling响应：**Function运行后返回输出结果，LLM/AIGC大模型再将答案整理成自然语言回复给用户。
    
4.  **流程的循环迭代：**除了一次性将输出结果发送给用户，我们还可以设置循环迭代的Function Calling过程，让LLM/AIGC大模型带着回答和问题进行多次思考，多次调用Function，使得输出结果完善。**但是多次迭代时，也可能会引入大模型的“幻觉”，从而使得回复内容有所偏差**。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->



对照着[LLM API 调用入门](https://www.youtube.com/watch?v=mnJJPltybBM)（视频）：边看边跟着写 API 调用

学习了基础使用，我使用了deepseek,

```
from openai import OpenAI

client = OpenAI(api_key="<DeepSeek API Key>", base_url="https://api.deepseek.com")

response = client.chat.completions.create(
    model="deepseek-chat",
    messages=[
        {"role": "system", "content": "You are a helpful assistant"},
        {"role": "user", "content": "Hello"},
    ],
    stream=False
)
```

此外，
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
