---
timezone: UTC+8
---

# eyw8

**GitHub ID:** eyw8

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->
![屏幕截图 2026-05-20 231122.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/eyw8/images/2026-05-20-1779289894116-_____2026-05-20_231122.png)
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->

python

TOOLS = \[

{"name": "calculator", "description": "执行数学计算...", "parameters": {...}},

{"name": "get\_current\_time", ...},

...

\]

每个工具 = 名字 + 描述 + 参数。LLM 就是靠这段描述来判断"我该不该调这个工具"。比如你说"现在几点了"，LLM 看到 get\_current\_time

的描述里写了"获取当前日期和时间"，就会匹配上。

2\. 工具执行（execute\_tool

纯粹的 Python 逻辑 —— 跟 AI 无关。calculator 用 eval 算数学，unit\_converter 查换算表，等等。

3\. 格式转换（build\_tools\_schema，第 135-158 行）

把我们的简单格式转成 OpenAI 要求的 JSON Schema。这一步是"翻译" —— 让 LLM 能看懂我们定义的工具。

4\. Agent 循环（agent\_loop，第 168-235 行）—— 核心！

python

while round\_num < max\_rounds: # 最多 5 轮，防死循环

response = [client.chat](http://client.chat).completions.create(

messages=messages,

tools=tools\_schema, # 告诉 LLM 有哪些工具可用

)

if msg.tool\_calls: # LLM 说：我要调工具！

result = execute\_tool(...) # 执行工具

messages.append(结果) # 把结果塞回对话

continue # 再问 LLM：结果拿到了，然后呢？

else: # LLM 不调工具了 = 最终回答

return msg.content

关键点：这不是一次 LLM 调用，是一个 while 循环。LLM 可能调 1 次工具、2 次工具、或者不调直接答。每次工具结果都会追加到 messages，下一轮 LLM

能看到之前的结果。

5\. 交互入口（第 241-272 行）

两个模式：python [mini-agent.py](http://mini-agent.py) 帮我算...（单次）或直接 python [mini-agent.py](http://mini-agent.py)（交互式循环）。

你可以先这样跑

bash

1\. 先装依赖

pip install openai

2\. 设 key

export OPENAI\_API\_KEY=你的key

3\. 单次测试——看 LLM 调不调工具

python experiments/[mini-agent.py](http://mini-agent.py) 现在几点

python experiments/[mini-agent.py](http://mini-agent.py) 100华氏度是多少摄氏度

python experiments/[mini-agent.py](http://mini-agent.py) 你好，你是谁 # 这句不需要工具，LLM 直接答
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->


-   Token：模型处理文本的基本单位，影响上下文容量、调用成本与关键信息识别。
    
-   Embedding：将对象映射为向量，用于搜索、聚类等，不能单独判断结论正确性。
    
-   Transformer：LLM 核心架构，擅长找上下文模式，但无稳定数据库，可能出错。
    
-   Hallucination：模型生成虚假 / 不可验证内容，需通过外部校验规避风险。
    
-   Multimodal：可处理多模态输入，辅助识别工作界面，关键判断需靠结构化数据。
    

LLM 位于系统 “理解和生成层”，负责转换用户目标、解释链上数据等；需与数据层、执行层等配合，且越靠近执行层，输出越需可验证。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
