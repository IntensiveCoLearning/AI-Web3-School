---
timezone: UTC+8
---

# nobodyhi

**GitHub ID:** nobodyhi

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->
\## Getting Started with the Claude API

\### 1. **Installation & Setup**

\`\`\`bash

pip install anthropic

\`\`\`

Set your API key:

\`\`\`python

import anthropic

import os

client = anthropic.Anthropic(

api\_key=os.environ.get("ANTHROPIC\_API\_KEY") # Or set directly

)

\`\`\`

\### 2. **Basic Message Creation**

\`\`\`python

response = client.messages.create(

model="claude-3-5-sonnet-20241022",

max\_tokens=1024,

messages=\[

{"role": "user", "content": "Hello, Claude! Explain quantum computing briefly."}

\]

)

print(response.content\[0\].text)

\`\`\`

\### 3. **System Prompts**

\`\`\`python

response = client.messages.create(

model="claude-3-5-sonnet-20241022",

max\_tokens=1024,

system="You are a physics professor who explains concepts with simple analogies.",

messages=\[

{"role": "user", "content": "Explain quantum computing briefly."}

\]

)

\`\`\`

\### 4. **Multi-turn Conversations**

\`\`\`python

messages = \[

{"role": "user", "content": "What's the capital of France?"},

{"role": "assistant", "content": "The capital of France is Paris."},

{"role": "user", "content": "What's its population?"}

\]

response = client.messages.create(

model="claude-3-5-sonnet-20241022",

max\_tokens=1024,

messages=messages

)

\`\`\`

\### 5. **Streaming Responses**

\`\`\`python

with [client.messages.stream](http://client.messages.stream)(

model="claude-3-5-sonnet-20241022",

max\_tokens=1024,

messages=\[{"role": "user", "content": "Write a short poem about AI"}\]

) as stream:

for text in stream.text\_stream:

print(text, end="", flush=True)

\`\`\`

\## Advanced Features

\### Vision Capabilities

\`\`\`python

import base64

with open("image.jpg", "rb") as img\_file:

image\_data = base64.b64encode(img\_[file.read](http://file.read)()).decode("utf-8")

response = client.messages.create(

model="claude-3-5-sonnet-20241022",

max\_tokens=1024,

messages=\[{

"role": "user",

"content": \[

{

"type": "image",

"source": {

"type": "base64",

"media\_type": "image/jpeg",

"data": image\_data

}

},

{

"type": "text",

"text": "Describe this image in detail."

}

\]

}\]

)

\`\`\`

\### Tool Use (Function Calling)

\`\`\`python

tools = \[

{

"name": "get\_weather",

"description": "Get weather for a location",

"input\_schema": {

"type": "object",

"properties": {

"location": {"type": "string", "description": "City and state"},

"unit": {"type": "string", "enum": \["celsius", "fahrenheit"\]}

},

"required": \["location"\]

}

}

\]

response = client.messages.create(

model="claude-3-5-sonnet-20241022",

max\_tokens=1024,

tools=tools,

messages=\[{"role": "user", "content": "What's the weather in San Francisco?"}\]

)

\`\`\`

\## Best Practices

1\. **Error Handling**

\`\`\`python

from anthropic import APIError, RateLimitError

try:

response = client.messages.create(...)

except RateLimitError:

\# Implement exponential backoff

pass

except APIError as e:

print(f"API error: {e}")

\`\`\`

2\. **Token Management** - Monitor `response.usage.input_tokens` and `output_tokens`

3\. **Model Selection** - Choose based on needs:

\- Claude 3.5 Sonnet: Best balance of speed/capability

\- Claude 3 Opus: Most capable for complex tasks

\- Claude 3 Haiku: Fastest, most cost-effective
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->

web3
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->


## **1\. Getting Started with the OpenAI API**

Start by getting your API key from the [OpenAI Platform](https://platform.openai.com/). Add a spending limit in your account settings (e.g., $10–20) while learning to avoid unexpected costs.

python

```
import os
from openai import OpenAI

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))
```

✨ **Model Selection (2026)**

| Model | Best For | Approx. Input Cost |
| --- | --- | --- |
| GPT-4o | Complex reasoning, multimodal tasks, highest quality | $2.50 / 1M tokens |
| GPT-4o-mini | Most production apps – fast, cheap, capable | $0.15 / 1M tokens |
| o3 / o3-mini | Math, science, logic with deep reasoning | Premium |
| text-embedding-3-small | RAG and semantic search | $0.02 / 1M tokens |

* * *

## **💬 2. Chat Completions API & Streaming**

Chat Completions API is the core of most OpenAI apps. Messages include system, user, and assistant roles.

python

```
response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "What is the capital of France?"}
    ],
    temperature=0.7,
    max_tokens=1000
)
```

For real-time UX, use **streaming**:

python

```
stream = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Tell me a story"}],
    stream=True
)
for chunk in stream:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="")
```

* * *

## **3\. Prompt Engineering: The Six Core Principles**

Based on OpenAI's official 2026 guidelines, effective prompt engineering now emphasizes **clarity, structured instructions, and reasoning**.

| Principle | Example Application |
| --- | --- |
| Write Clear Instructions | "Summarize AI in healthcare (200 words) with 3 cases." vs. vague "Talk about AI." |
| Provide Reference Text | Inject external context (RAG) to reduce hallucinations and ground responses in facts. |
| Split Complex Tasks | Break into intent classification → summarization → analysis → conclusion pipeline. |
| Give the Model Time to Think | Use Chain-of-Thought: "Let's think step by step" → dramatically improves logic and math. |
| Leverage External Tools | Offload precise calculations to code execution; use function calling for real-time data. |
| Iterative Development | A/B test different phrasing; analyze failures and iterate systematically. |

💡 **Key Insight for 2026**: Shorter, results-oriented prompts are often more effective than lengthy, over‑specified ones—a shift noted in OpenAI's latest guidance.

* * *

## **4\. Function Calling (Tool Use)**

Function calling is the primary way to connect AI models to external APIs and actions. The model returns a structured JSON tool call rather than raw text, which you then execute.

### **Define a function schema (JSON)**

python

```
tools = [{
    "type": "function",
    "function": {
        "name": "get_weather",
        "description": "Get current temperature for a location",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {"type": "string", "description": "City and state, e.g., San Francisco, CA"},
                "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]}
            },
            "required": ["location"]
        }
    }
}]
```

### **Let the model choose a tool**

python

```
response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "What's the weather in Tokyo?"}],
    tools=tools,
    tool_choice="auto"          # model decides when to call
)
```

### **Handle the tool call**

python

```
tool_call = response.choices[0].message.tool_calls[0]
arguments = json.loads(tool_call.function.arguments)
# Execute actual weather API call, then return result to model
```

For **multi‑step workflows**, you can chain multiple function calls—the model sees previous outputs before deciding the next action, enabling powerful agents that search, fetch, then process.

* * *

## **5\. Embeddings & RAG (Retrieval-Augmented Generation)**

Embeddings convert text into dense **vectors** (e.g., 1,536 floats for `text-embedding-3-small`) that capture semantic meaning.

python

```
response = client.embeddings.create(
    model="text-embedding-3-small",
    input="Your text here"
)
vector = response.data[0].embedding
```
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->



While LLMs are an impressive achievement, their output is only statistically plausible and not the result of a reasoning process.  
  
**Understanding NLP and LLMs**

While this course was originally focused on NLP (Natural Language Processing), it has evolved to emphasize Large Language Models (LLMs), which represent the latest advancement in the field.

**What’s the difference?**

-   **NLP (Natural Language Processing)** is the broader field focused on enabling computers to understand, interpret, and generate human language. NLP encompasses many techniques and tasks such as sentiment analysis, named entity recognition, and machine translation.
    
-   **LLMs (Large Language Models)** are a powerful subset of NLP models characterized by their massive size, extensive training data, and ability to perform a wide range of language tasks with minimal task-specific training. Models like the Llama, GPT, and Claude series are examples of LLMs that have revolutionized what’s possible in NLP.
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
