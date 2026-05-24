---
timezone: UTC+8
---

# Perseverance-wzy

**GitHub ID:** Perseverance-wzy

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->
LangChain 模型接口可参考官方文档：[https://reference.langchain.com/python/langchain\_core/language\_models/](https://reference.langchain.com/python/langchain_core/language_models/)

## 1.单独创建一个密钥环境变量并放在langchain\_env目录文件下面

### 步骤1：创建.env文件

打开终端（Mac/Linux）或命令提示符（Windows），进入你的项目文件夹，执行命令（我已经创建过了名为langchain\_env的环境

### 操作步骤：

1.  先**打开**`langchain_env`**文件夹**（右键→“打开”）；
    
2.  在文件夹的空白处右键→“新建”→“文本文档”；
    
3.  把新建的文本文档**重命名为**`.env`（注意：要把默认的`.txt`后缀去掉，直接改成`.env`，系统会提示“可能有风险”，点击“是”即可）；
    
4.  右键这个新建的`.env`文件→“打开方式”→选择“记事本”；
    
5.  在记事本里输入你的API密钥内容：
    
    ```
    DEEPSEEK_API_KEY=XXXX  # 深度求索的API密钥
    QWEN_API_KEY=XXXX      # 通义千问的API密钥
    OPENAI_API_KEY=XXX     # OpenAI的API密钥
    
    ```
    
6.  按`Ctrl+S`保存文件，这样`.env`文件就创建好啦~
    

之后你在Python代码里用`python-dotenv`就能读取这个文件里的密钥了。

要不要我帮你整理一份“创建.env文件的截图版步骤”？更直观好操作~

### 步骤2：填写.env文件内容

用文本编辑器（比如记事本、VS Code）打开刚创建的`.env`文件，写入你的API密钥，格式如下（把`XXXX`替换成真实的密钥）：

```
DEEPSEEK_API_KEY=XXXX  # 深度求索的API密钥
QWEN_API_KEY=XXXX      # 通义千问的API密钥
OPENAI_API_KEY=XXX     # OpenAI的API密钥

```

### 步骤3：用python-dotenv读取环境变量

先安装依赖库（激活langchain终端执行）：

```bash
pip install python-dotenv

```

然后在你的Python代码里，添加读取环境变量的代码：(或者直接把刚刚的密钥.env文件粘贴在pycharm项目下面

```python
import os
from dotenv import load_dotenv

# 加载.env里的环境变量到系统环境
load_dotenv(override=True)

# 读取指定的密钥
deepseek_api_key = os.getenv("DEEPSEEK_API_KEY")
qwen_api_key = os.getenv("QWEN_API_KEY")
openai_api_key = os.getenv("OPENAI_API_KEY")

# 可以打印验证是否读取成功
# print(deepseek_api_key)

```

## 2.调用API

官方文档：

[智谱 AI | 🦜️🔗 LangChain](https://imooc-langchain.shortvar.com/docs/integrations/chat/zhipuai/)

[https://imooc-langchain.shortvar.com/docs/integrations/chat/zhipuai/](https://imooc-langchain.shortvar.com/docs/integrations/chat/zhipuai/)

### **角度1：按照模型功能的不同：**

类型1：非对话模型（LLMs、Text Model）

```
    类型二：对话模型（Chat Models）（**推荐**）:
```

**大语言模型调用，以 ChatModel 为主！**

主要特点如下：

**输入**：接收消息列表 **List\[BaseMessage\]** 或 **PromptValue**，每条消息需指定角色（如 SystemMessage、HumanMessage、AIMessage）

**输出**：总是返回带角色的 **消息对象** （**BaseMessage** 子类），通常是 **AIMessage**

![image.png](attachment:ae4c7d1b-ddad-4c9d-9d2a-0273a01a12f6:image.png)

**原生支持多轮对话**。通过消息列表维护上下文（例如： **\[SystemMessage, HumanMessage, AIMessage, …\]**），模型可基于完整对话历史生成回复。

**适用场景**：对话系统（如客服机器人、长期交互的AI助手）

举例：

```python
1    from langchain_openai import ChatOpenAI
2    from langchain_core.messages import SystemMessage, HumanMessage
3    import os
4    import dotenv
5    dotenv.load_dotenv()
6    os.environ[ "OPENAI_API_KEY"] = os.getenv( "OPENAI_API_KEY1 ")
7    os.environ[ "OPENAI_BASE_URL "] = os.getenv( "OPENAI_BASE_URL ")
8
9
10    ########核心代码############
11    chat_model = ChatOpenAI(model = "gpt-4o-mini")
12
13    messages = [
14        SystemMessage(content = "我是人工智能助手，我叫小智"),
15        HumanMessage(content = "你好，我是小明，很高兴认识你")
16    ]
17    response = chat_model.invoke(messages)  #输入消息列表
18
19    print(type(response))  # <class 'langchain_core.messages.ai.AIMessage'>
20    print(response.content)

```

```python
类型3：嵌入模型 调用

1    import os
2    import dotenv
3    from langchain_openai import OpenAI Embeddings
4    dotenv.load_dotenv()
5    os.environ['OPENAI_API_KEY'] = os.getenv( "OPENAI_API_KEY1 ")
6    os.environ['OPENAI_BASE_URL '] = os.getenv( "OPENAI_BASE_URL ")
7
8
9    #############
10    embeddings_model = OpenAI Embeddings(
11        model = "text-embedding-ada-002 "
12    )
13
14    res1 = embeddings_model.embed_query('我是文档中的数据)'
15    print(res1)
16    #打印结果：[-0.004306625574827194, 0.003083756659179926, -0.013916781172156334,   ,]

```

## **接入 Ollama**

参考文档：[https://python.langchain.com/docs/integrations/chat/ollama/](https://python.langchain.com/docs/integrations/chat/ollama/)

```
from langchain_ollama import ChatOllama

# 设置本地模型，不使用深度思考
model = ChatOllama(base_url="<http://localhost:11434>", model="qwen3:14b", reasoning=False)

# 打印结果
print(model.invoke("什么是LangChain?"))

```

执行结果如下

```
content='**LangChain** 是一个用于构建**基于大型语言模型（LLMs）的应用程序**的开源框架。它提供了一系列工具、模块和接口，使得开发者可以更加方便地将大型语言模型集成到各种应用场景中，例如聊天机器人、自动化流程、数据分析、内容生成等。\\n\\n---\\n\\n## 🧠 LangChain 的主要功能\\n\\nLangChain 的核心目标是**让构建基于 LLM 的应用变得简单、可扩展、可组合**。它提供以下关键功能：\\n\\n### 1. **LLM 集成**\\n- 支持多种大型语言模型（如 OpenAI、Anthropic、Google Gemini、Hugging Face、本地 LLM 等）。\\n- 提供统一的接口，方便切换不同的模型。\\n\\n### 2. **数据处理**\\n- 提供工具用于从数据库、API、文档等来源加载和处理数据。\\n- 支持文档的加载、分割、向量化等操作。\\n\\n### 3. **记忆（Memory）**\\n- 提供**短期记忆**（如聊天历史）和**长期记忆**（如数据库、向量存储）的支持。\\n- 支持多种记忆方式，如 `ChatMessageHistory`、`ConversationBufferMemory` 等。\\n\\n### 4. **代理（Agent）**\\n- 提供**智能代理（Agent）**，可以执行任务、搜索信息、调用工具等。\\n- 支持多种代理类型（如 `LLMChain`、`AgentExecutor` 等）。\\n\\n### 5. **链（Chain）**\\n- 提供**链（Chain）**概念，将多个操作（如模型调用、数据处理、工具调用）串联起来。\\n- 支持 `LLMChain`、`SimpleSequentialChain`、`SequentialChain` 等。\\n\\n### 6. **工具（Tools）**\\n- 提供多种工具（如搜索工具、数据库查询工具、计算器等），可以被代理或链调用。\\n- 支持自定义工具的开发与集成。\\n\\n### 7. **向量存储（Vector Store）**\\n- 支持与向量数据库（如 FAISS、Pinecone、Weaviate、Chroma）集成。\\n- 用于实现**向量搜索**、**语义检索**等功能。\\n\\n---\\n\\n## 🛠️ LangChain 的典型应用场景\\n\\n- **聊天机器人**（Chatbot）：构建具有上下文理解能力的对话系统。\\n- **自动化助手**（AI Agent）：执行任务、搜索信息、调用工具。\\n- **内容生成**：自动生成文章、邮件、代码、文档等。\\n- **数据分析**：结合 LLM 与数据处理工具进行智能数据分析。\\n- **知识库检索**：基于向量存储构建智能问答系统。\\n\\n---\\n\\n## 📦 安装 LangChain\\n\\n你可以通过 pip 安装 LangChain：\\n\\n```bash\\npip install langchain\\n```\\n\\n---\\n\\n## 📚 学习资源\\n\\n- 官方文档：<https://docs.langchain.com>\\n- GitHub 仓库：<https://github.com/langchain-ai/langchain\\n-> 示例代码：<https://github.com/langchain-ai/langchain/tree/main/docs/src\\n\\n---\\n\\n##> 🌟 总结\\n\\n**LangChain** 是一个强大且灵活的框架，它让开发者可以更轻松地构建基于大型语言模型的应用。它不仅提供丰富的工具和模块，还支持高度的可扩展性和可组合性，是 AI 应用开发中的一个重要工具。\\n\\n如果你正在开发基于 LLM 的应用，LangChain 是一个非常值得使用的框架。' additional_kwargs={} response_metadata={'model': 'qwen3:14b', 'created_at': '2025-10-15T14:19:06.950494871Z', 'done': True, 'done_reason': 'stop', 'total_duration': 18186536365, 'load_duration': 14705460, 'prompt_eval_count': 20, 'prompt_eval_duration': 6723067, 'eval_count': 757, 'eval_duration': 18164078512, 'model_name': 'qwen3:14b'} id='run--b8bbd603-3d74-48fe-9460-c6bbed5fe9bb-0' usage_metadata={'input_tokens': 20, 'output_tokens': 757, 'total_tokens': 777}

```

## 接入**Hugging Face**

[https://imooc-langchain.shortvar.com/docs/integrations/platforms/huggingface/](https://imooc-langchain.shortvar.com/docs/integrations/platforms/huggingface/)

## **接入 deepseek**

参考文档：[https://python.langchain.com/api\_reference/deepseek/chat\_models/langchain\_deepseek.chat\_models.ChatDeepSeek.html](https://python.langchain.com/api_reference/deepseek/chat_models/langchain_deepseek.chat_models.ChatDeepSeek.html)

申请地址：[https://platform.deepseek.com/](https://platform.deepseek.com/)

支持模型列表

-   `deepseek-chat`：通用对话模型
    
-   `deepseek-coder`：偏向代码理解与生成
    
-   `deepseek-llm`：较大通用模型（如 DeepSeek-VL）
    
-   `deepseek-moe`：Mixture of Experts 多专家模型
    

```
import os
from dotenv import load_dotenv
from langchain_deepseek import ChatDeepSeek
load_dotenv(override=True)
deepseek_api_key = os.getenv("DEEPSEEK_API_KEY")

# 初始化 deepseek
model = ChatDeepSeek(
    model="deepseek-chat",
    temperature=0,
    max_tokens=None,
    timeout=None,
    max_retries=2,
    api_key=deepseek_api_key,
)

# 打印结果
print(model.invoke("什么是LangChain?"))

```

## **接入百度千帆平台**

**开发参考文档：**

[https://cloud.baidu.com/doc/qianfan-docs/s/Mm8r1mejk](https://cloud.baidu.com/doc/qianfan-docs/s/Mm8r1mejk)

**获取API Key和App ID：**

创建API Key：[https://console.bce.baidu.com/qianfan/ais/console/apiKey](https://console.bce.baidu.com/qianfan/ais/console/apiKey)

创建App ID：[https://console.bce.baidu.com/qianfan/ais/console/applicationConsole/application/v2](https://console.bce.baidu.com/qianfan/ais/console/applicationConsole/application/v2)

```python
代码举例：1    from openai import OpenAI
2
3    client = OpenAI(
4        api_key = "bce-v3/ALTAK-KZke********/f1d6ee *************",  #千帆bearer token
5        base_url="<https://qianfan.baidubce.com/v2>",  #千帆域名
6        default_headers ={"appid ":  "app-MuYR79q6"}   #用户在千帆上的appid，非必传
7    )
8
9    completion = client.chat.completions.create(
10        model = "ernie-4.0-turbo-8k ", #预置服务请查看模型列表，定制服务请填入API地址
11        messages =[{'role': 'system ', 'content': 'You are a helpful assistant.'},
12         {'role ': 'user ', 'content': 'Hello！'}]
13    )
14
15    print(completion.choices[0].message)

```

## **阿里云百炼平台**

**注册与key的获取：**

提前开通百炼平台账号并申请API KEY：[https://bailian.console.aliyun.com/#/home](https://bailian.console.aliyun.com/#/home)

```python
对应配置文件
DASHSCOPE_API_KEY = "sk-f1a87324#####e6a819a482 " #使用自己的apikey 
DASHSCOPE_BASE_URL="<https://dashscope.aliyuncs.com/compatible-mode/v1> "

```

## **接入通义千问**

参考文档：[https://python.langchain.com/api\_reference/community/chat\_models/langchain\_community.chat\_models.tongyi.ChatTongyi.html](https://python.langchain.com/api_reference/community/chat_models/langchain_community.chat_models.tongyi.ChatTongyi.html)

申请地址：[https://dashscope.console.aliyun.com/overview](https://dashscope.console.aliyun.com/overview)

```python
import os
from dotenv import load_dotenv
from langchain_community.chat_models import ChatTongyi
load_dotenv(override=True)
qwen_api_key = os.getenv("QWEN_API_KEY")

# 初始化 deepseek
model = ChatTongyi(
    model="deepseek-chat",
    temperature=0,
    max_tokens=None,
    timeout=None,
    max_retries=2,
    api_key=qwen_api_key,
)

# 打印结果
print(model.invoke("什么是LangChain?"))
```

### **接入 openAI**

参考文档：[https://python.langchain.com/docs/integrations/chat/](https://python.langchain.com/docs/integrations/chat/)

申请地址：[https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)

[https://imooc-langchain.shortvar.com/docs/integrations/chat/openai/](https://imooc-langchain.shortvar.com/docs/integrations/chat/openai/)

需要注意的是国内网络原因不能直接调用，可以通过第三方平台调用。例如[https://closeapi.net/](https://closeapi.net/)

现在你有了CloseAI的API Key，需**把代码切换为调用CloseAI（它兼容OpenAI的接口格式）**，直接替换成下面的代码即可调用：

```python
    from langchain_openai import ChatOpenAI
2
3    #硬编码API Key 和模型参数
4    llm = ChatOpenAI(
5        api_key = "sk-xxxxxxxxx ",  #明文暴露密钥
6        base_url="http://205.185.126.106:3000+模型广场端点接口"
7        model_name= "gpt-3.5-turbo ",
8    )
9
10    #调用示例
11    response = llm.invoke("解释神经网络原理")
12    print(response.content)

```

### 调用CloseAI的代码（直接复制运行）

```python
import os
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI  # CloseAI兼容OpenAI的接口
from langchain_core.messages import HumanMessage

# 加载.env文件（确保里面有CloseAI的API Key）
load_dotenv(override=True)

# 从.env读取CloseAI的API Key（注意：CloseAI兼容OpenAI的变量名，所以用OPENAI_API_KEY）
openai_api_key = os.getenv("OPENAI_API_KEY")

# 初始化CloseAI的模型（指定CloseAI的base_url）
model = ChatOpenAI(
    model="gpt-4o-mini",  # CloseAI支持的模型（和OpenAI一致）
    api_key=openai_api_key,
    base_url="<https://closeapi.net/v1>"  # CloseAI的API地址（必须加这个）
)

# 调用模型
response = model.invoke([HumanMessage(content="什么是LangChain?")])

# 打印回答
print("CloseAI回答：", response.content)

```

执行结果如下：

```python
CloseAI回答： LangChain 是一个用于构建基于语言模型应用程序的框架。它旨在简化开发者与语言模型（如 OpenAI 的 GPT-3、GPT-4 等）交互的过程，使得创建复杂的、具有智能对话能力的应用变得更加容易。

LangChain 的主要功能包括：

1. **组件化设计**：LangChain 提供了模块化的组件，可以用于不同的任务，比如文本生成、问答、对话管理等。这些组件可以灵活组合，以满足特定需求。

2. **链式调用**：通过“链”的概念，将多个处理步骤串联起来，使得程序能够按照特定顺序处理数据，例如将用户输入传递给语言模型，然后将结果进一步处理。

3. **工具集成**：LangChain 支持集成各种外部工具和API，这样开发者可以访问更多的数据源和功能，增强应用的能力。

4. **状态管理**：在对话系统中，LangChain 能够跟踪会话状态，使得上下文保留在多轮对话中。

5. **文档和知识库接口**：能够与文档和知识库进行交互，以提高问答系统的准确性和信息获取能力。

LangChain 针对开发者的需求，提供了丰富的文档和示例，使得构建应用更加高效。应用范围包括聊天机器人、智能问答系统、内容生成、信息检索等。
```

### 对应的.env文件配置

确保你的`.env`里`OPENAI_API_KEY`填的是CloseAI的令牌：

```
# .env文件内容
OPENAI_API_KEY="sk-ywoK********nKu1"  # 填CloseAI的令牌

```

### 为什么这样能成功？

CloseAI的API是**完全兼容OpenAI接口**的，所以可以直接用`langchain_openai.ChatOpenAI`类，只需要指定`base_url="<https://closeapi.net/v1>"`，就能把请求发到CloseAI的服务器，避开OpenAI的余额问题。

## 3.关于模型调用的方法

### **Runnable 定义的公共的调用方法如下：**

**invoke** : 处理单条输入，等待LLM完全推理完成后再返回调用结果

**stream** : 流式响应，逐字输出LLM的响应结果

**batch** : 处理批量输入

这些也有相应的异步方法，应该与 asyncio 的 **await** 语法一起使用以实现并发：

**astream** : 异步流式响应

**ainvoke** : 异步处理单条输入

**abatch** : 异步处理批量输入

**astream\_log** : 异步流式返回中间步骤，以及最终响应

**astream\_events** :（测试版）异步流式返回链中发生的事件（在 langchain-core 0.1.14 中引入）

### **对话模型**

聊天模型，除了将字符串作为输入外，还可以使用聊天消息作为输入，并返回聊天消息作为输出。LangChain有一些内置的消息类型：

-   `HumanMessage`：人类消息，type为"user"，表示来自用户输入。比如“实现 一个快速排序方法”。
    
-   `AIMessage`： AI 消息，type为"ai"，这可以是文本，也可以是调用工具的请求。
    
-   `SystemMessage`：系统消息，type为"system"，告诉大模型当前的背景是什么，应该如何做，并不是所有模型提供商都支持这个消息类型
    
-   `ToolMessage/FunctionMessage`：工具消息，type为"tool"，用于函数调用结果的消息类型
    
-   `ChatMessage`：可以自定义角色的通用消息类型。
    

```python
from langchain_core.messages import SystemMessage, HumanMessage
from langchain_ollama import ChatOllama

# 设置本地模型，不使用深度思考
model = ChatOllama(base_url="<http://localhost:11434>", model="qwen3:14b", reasoning=False)
# 构建消息列表
messages = [SystemMessage(content="你叫小亮，是一个乐于助人的人工助手"),
            HumanMessage(content="你是谁")
            ]
# 调用大模型
response = model.invoke(messages)
# 打印结果
print(response.content)
print(type(response))
#执行结果
我是小亮，一个乐于助人的人工助手。我在这里是为了帮助你解决问题、提供建议和支持。无论是生活上的小烦恼，还是工作上的难题，我都会尽力帮你。有什么需要帮忙的吗？
<class 'langchain_core.messages.ai.AIMessage'>
```

### 非流式输出

在大多数问答、摘要、信息抽取类任务中，非流式输出提供了结构清晰、逻辑完整的结果，适合快速集成和部署。

举例：用户提问，请编写一首诗，系统在静默数秒后 **突然弹出** 了完整的诗歌。（体验较单调）

非流式输出：这是Langchain与LLM交互时的 **默认行为**，是最简单、最稳定的语言模型调用方式。当用户发出请求后，系统在后台等待模型 **生成完整响应**，然后 **一次性将全部结果返回**。

### 流式输出

流式输出：一种 **更具交互感** 的模型输出方式，用户不再需要等待完整答案，而是能看到模型 **逐个 token** 地实时返回内容。

**Langchain 中通过设置 stream=True 并配合 回调机制 来启用流式输出。**

通过 model.stream 方法即可实现流式调用，代码如下（用这个注意本地要有ollama)：

### 步骤1：安装Ollama客户端（本地运行大模型的工具）

1.  打开Ollama官网：[https://ollama.com/](https://ollama.com/)
    
2.  根据你的系统（Windows/Mac/Linux）下载对应的安装包，安装后启动Ollama（启动后会在本地开启`http://localhost:11434`服务）。
    

### 步骤2：安装langchain-ollama库（LangChain与Ollama的连接库）

打开终端/命令行，执行：

```bash
pip install langchain-ollama

```

### 步骤3：验证是否可用

安装完成后，先在Ollama中拉取你代码里用的`qwen3:14b`模型（终端执行）：

```bash
ollama pull qwen3:14b

```

拉取完成后，再运行你当前的代码，就能通过LangChain调用本地Ollama的模型了。

```python
from langchain_core.messages import SystemMessage, HumanMessage
from langchain_ollama import ChatOllama

# 设置本地模型，不使用深度思考
model = ChatOllama(base_url="<http://localhost:11434>", model="qwen3:14b", reasoning=False)
# 构建消息列表
messages = [SystemMessage(content="你叫小亮，是一个乐于助人的人工助手"),
            HumanMessage(content="你是谁")
            ]
# 流式调用大模型
response = model.stream(messages)
# 流式打印结果
for chunk in response:
    print(chunk.content, end="",flush=True) # 刷新缓冲区 (无换行符，缓冲区未刷新，内容可能不会立即显示)
print("\\n")
print(type(response))
```

**例二**

```python
import os
import dotenv
from langchain_core.messages import HumanMessage
from langchain_openai import ChatOpenAI

dotenv.load_dotenv()

os.environ['OPENAI_API_KEY'] = os.getenv("OPENAI_API_KEY")
os.environ['OPENAI_BASE_URL'] = os.getenv("OPENAI_BASE_URL")

# 初始化大模型
chat_model = ChatOpenAI(
    model="gpt-4o-mini",  # 去掉了模型名后的多余空格
    streaming=True  # 启用流式输出
)

# 创建消息
messages = [HumanMessage(content="你好，请介绍一下自己")]

# 流式调用LLM获取响应
print("开始流式输出：")
for chunk in chat_model.stream(messages):
    # 逐个打印内容块
    print(chunk.content, end="", flush=True)  # 刷新缓冲区，确保内容实时显示

print("\\n流式输出结束")
```

输出结果如下

```python
1    开始流式输出：
2    你好！我是一个人工智能助手，旨在帮助用户回答问题、提供信息和解决问题。我可以处理各种主题，包
括科技、历史、文化、语言学习等。无论你有什么问题，尽管问我，我会尽力提供准确和有用的回答！
3    流式输出结束
```

## 3.2批量 /同步/异步调用

### 批量调用

LangChain 支持 **批量调用（Batch Inference）**，也就是**一次性向模型提交多个输入并并行处理**，从而显著提升吞吐量。

当你需要让模型处理多条输入时，比如：文本摘要批量生成、多轮任务预处理逐条 `.invoke()` 会导致网络请求多次

、速度慢、成本高等问题，而LangChain 提供的 `**.batch()**` 接口 能在内部自动并行执行。

```python
from langchain_ollama import ChatOllama

# 设置本地模型，不使用深度思考
model = ChatOllama(base_url="<http://localhost:11434>", model="qwen3:14b", reasoning=False)
# 问题列表
questions = [
    "什么是LangChain？",
    "Python的生成器是做什么的？",
    "解释一下Docker和Kubernetes的关系"
]
# 批量调用大模型
response = model.batch(questions)
for q, r in zip(questions, response):
    print(f"问题：{q}\\n回答：{r}\\n")
```

### 同步调用

```python
import time

def call_model():
    # 模拟同步API调用
    print("开始调用模型...")
    time.sleep(5)  # 模拟调用等待，单位：秒
    print("模型调用完成。")

def perform_other_tasks():
    # 模拟执行其他任务
    for i in range(5):
        print(f"执行其他任务 {i + 1}")
        time.sleep(1)  # 单位：秒

def main():
    start_time = time.time()
    call_model()
    perform_other_tasks()
    end_time = time.time()
    total_time = end_time - start_time
    return f"总共耗时: {total_time}秒"

# 运行同步任务并打印完成时间
main_time = main()
print(main_time)
```

### 异步调用

LangChain 提供

```
ainvoke()
```

异步调用接口，用于在 异步环境（async/await） 中高效并行地执行模型推理。

允许程序在等待某些操作完成时继续执行其他任务，而不是阻塞等待。这在处理I/O操作（如 网络请求、文件读写，特别适合大批量请求或 Web 服务场景（如 FastAPI）等）时特别有用，可以显著提高程序的效率和响应性。

```python
import asyncio
from langchain_ollama import ChatOllama

# 设置本地模型，不使用深度思考
model = ChatOllama(base_url="<http://localhost:11434>", model="qwen3:14b", reasoning=False)

async def main():
    # 异步调用一条请求
    response = await model.ainvoke("解释一下LangChain是什么")
    print(response)
    
# 运行异步程序的入口点
asyncio.run(main())
```

法二

```python
import asyncio
import time

async def async_call(llm):
    await asyncio.sleep(5)  # 模拟异步操作
    print("异步调用完成")

async def perform_other_tasks():
    await asyncio.sleep(5)  # 模拟异步操作
    print("其他任务完成")

async def run_async_tasks():
    start_time = time.time()
    await asyncio.gather(
        async_call(None),  # 示例调用，替换None为模拟的LLM对象
        perform_other_tasks()
    )
    end_time = time.time()
    return f"总共耗时: {end_time - start_time}秒"

# 正确运行异步任务的方式
if __name__ == "__main__":
    # 使用 asyncio.run() 来启动异步程序
    result = asyncio.run(run_async_tasks())
    print(result)
```

使用 **asyncio.gather()** 并行执行时，理想情况下，因为两个任务几乎同时开始，它们的执行时间将重叠。如果两个任务的执行时间相同（这里都是5秒），那么总执行时间应该接近单个任务的执行时间，而不是两者时间之和。

## Emebedding Model(嵌入模型）

## 一、嵌入模型核心概念

### 1\. 什么是嵌入模型？

嵌入模型（Embedding Model）是一种将**离散的、高维的符号数据**（如文字、单词、图片ID、用户ID等）映射为**连续的、低维的实数向量**的模型。

可以简单理解为：

-   输入：“苹果”、“香蕉”、“汽车” 这些离散的文字
    
-   输出：\[0.23, -0.56, 0.89\]、\[0.18, -0.49, 0.78\]、\[-0.87, 0.32, -0.11\] 这样的低维向量
    

核心特点：

-   语义相似的内容，对应的向量在空间中的距离更近（常用余弦相似度衡量）
    
-   低维向量保留了原始数据的核心特征，便于计算和处理
    

### 2\. 嵌入模型的应用场景

-   语义搜索（如搜索"手机"能匹配到"智能手机"）
    
-   推荐系统（用户/商品嵌入向量匹配）
    
-   文本分类/聚类
    
-   大语言模型（LLM）的基础输入表示
    
-   图像检索、跨模态匹配
    

## 二、嵌入模型的核心原理

### 1\. 经典嵌入算法

| 算法 | 适用场景 | 核心思想 |
| --- | --- | --- |
| Word2Vec | 单词嵌入 | 通过上下文预测中心词（CBOW）或中心词预测上下文（Skip-gram） |
| GloVe | 单词嵌入 | 基于全局词频统计的矩阵分解 |
| BERT Embedding | 句子/单词嵌入 | 基于Transformer的上下文相关嵌入 |
| Sentence-BERT | 句子嵌入 | 对BERT优化，专门用于生成语义一致的句子向量 |
| OpenAI Embedding | 通用文本嵌入 | 闭源的高性能文本嵌入模型（如text-embedding-ada-002） |

### 2\. 向量相似度计算

嵌入模型的核心价值在于通过向量相似度衡量语义相似度，常用方法：

-   **余弦相似度**：衡量两个向量的夹角，取值范围\[-1,1\]，越接近1越相似
    

![image.png](attachment:39f243bb-089f-4f17-a491-f1c7a4d68664:image.png)

-   **欧氏距离**：衡量向量空间中的直线距离，值越小越相似
    

## 三、实战教程：使用嵌入模型（Python）

### 环境准备

首先安装必要的依赖：

```bash
# 基础依赖
pip install numpy scikit-learn torch transformers sentence-transformers
# 可选：OpenAI嵌入
pip install openai

```

### 示例1：使用Sentence-BERT（开源免费）

Sentence-BERT是最常用的开源嵌入模型，适合文本嵌入：

```python
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

# 1. 加载预训练模型（多语言版）
model = SentenceTransformer('all-MiniLM-L6-v2')  # 轻量级模型，速度快
# 多语言支持：model = SentenceTransformer('paraphrase-multilingual-MiniLM-L12-v2')

# 2. 准备文本数据
texts = [
    "苹果手机的电池续航很好",
    "iPhone的电池能用很久",
    "特斯拉的自动驾驶技术很先进",
    "香蕉的价格今天很便宜"
]

# 3. 生成嵌入向量
embeddings = model.encode(texts)
print("嵌入向量形状：", embeddings.shape)  # (4, 384) → 4个文本，每个384维向量

# 4. 计算相似度（以第一个文本为基准）
similarity_scores = cosine_similarity([embeddings[0]], embeddings)[0]
print("\\\\n相似度得分：")
for i, score in enumerate(similarity_scores):
    print(f"文本0 vs 文本{i}：{score:.4f}")

# 输出示例：
# 文本0 vs 文本0：1.0000
# 文本0 vs 文本1：0.8923 （高度相似）
# 文本0 vs 文本2：0.1234 （几乎不相似）
# 文本0 vs 文本3：0.0567 （完全不相似）

```

### 示例2：使用OpenAI Embedding（闭源，需APIKey）

适合追求更高性能的场景：

```python
import openai
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

# 1. 配置API
openai.api_key = "你的OpenAI API Key"

# 2. 定义生成嵌入的函数
def get_openai_embedding(text, model="text-embedding-3-small"):
    text = text.replace("\\\\n", " ")
    response = openai.Embedding.create(input=[text], model=model)
    return response['data'][0]['embedding']

# 3. 生成嵌入向量
texts = ["猫喜欢吃鱼", "狗喜欢啃骨头", "小猫爱吃鱼"]
embeddings = [get_openai_embedding(text) for text in texts]

# 4. 计算相似度
similarity = cosine_similarity(embeddings)
print("相似度矩阵：")
print(np.round(similarity, 4))

# 输出示例：
# [[1.     0.1234 0.9876]
#  [0.1234 1.     0.1345]
#  [0.9876 0.1345 1.    ]]

```

### 示例3：嵌入模型的实际应用（语义搜索）

```python
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

# 1. 初始化模型和知识库
model = SentenceTransformer('all-MiniLM-L6-v2')
# 知识库文本
knowledge_base = [
    "Python是一种解释型、面向对象的编程语言",
    "Java是一种编译型、跨平台的编程语言",
    "机器学习是人工智能的一个分支，专注于数据驱动的模型训练",
    "深度学习是机器学习的子集，基于神经网络",
    "MySQL是一种开源的关系型数据库管理系统"
]
# 预生成知识库嵌入
kb_embeddings = model.encode(knowledge_base)

# 2. 定义语义搜索函数
def semantic_search(query, top_k=2):
    # 生成查询的嵌入
    query_embedding = model.encode([query])
    # 计算相似度
    similarities = cosine_similarity(query_embedding, kb_embeddings)[0]
    # 排序并返回top_k结果
    top_indices = similarities.argsort()[-top_k:][::-1]
    results = [(knowledge_base[i], similarities[i]) for i in top_indices]
    return results

# 3. 测试搜索
query = "Python属于什么类型的语言"
results = semantic_search(query)

print("搜索结果：")
for text, score in results:
    print(f"相似度：{score:.4f} | 内容：{text}")

# 输出示例：
# 相似度：0.9876 | 内容：Python是一种解释型、面向对象的编程语言
# 相似度：0.1234 | 内容：Java是一种编译型、跨平台的编程语言

```

## 四、进阶优化技巧

### 1\. 模型选择策略

-   轻量级场景：all-MiniLM-L6-v2（速度快，显存占用低）
    
-   高精度场景：all-mpnet-base-v2（精度更高，速度稍慢）
    
-   多语言场景：paraphrase-multilingual-MiniLM-L12-v2
    
-   超长文本：LongformerEmbeddings 或分段嵌入后聚合
    

### 2\. 嵌入向量优化

-   **归一化**：将向量归一化到单位长度（提升余弦相似度计算稳定性）
    
    ```python
    embeddings = embeddings / np.linalg.norm(embeddings, axis=1, keepdims=True)
    
    ```
    
-   **降维**：使用PCA/UMAP降低向量维度（减少存储和计算成本）
    
    ```python
    from sklearn.decomposition import PCA
    pca = PCA(n_components=128)  # 降到128维
    reduced_embeddings = pca.fit_transform(embeddings)
    
    ```
    

### 3\. 性能优化

-   批量处理：避免单条文本重复调用模型，批量生成嵌入
    
-   缓存机制：将生成的嵌入向量存储到向量数据库（如FAISS、Pinecone）
    
-   量化：对向量进行量化（如FP16/INT8），减少内存占用
    

### 4\. 自定义嵌入模型训练

如果开源模型不满足特定领域需求（如医疗、法律文本），可以微调：

```python
from sentence_transformers import SentenceTransformer, InputExample, losses
from torch.utils.data import DataLoader

# 1. 加载基础模型
model = SentenceTransformer('all-MiniLM-L6-v2')

# 2. 准备训练数据（示例：相似文本对）
train_examples = [
    InputExample(texts=["高血压的症状", "高血压有哪些表现"], label=1.0),
    InputExample(texts=["糖尿病的治疗", "如何治疗糖尿病"], label=1.0),
    InputExample(texts=["高血压的症状", "糖尿病的治疗"], label=0.0),
]

# 3. 配置训练
train_dataloader = DataLoader(train_examples, shuffle=True, batch_size=2)
train_loss = losses.CosineSimilarityLoss(model)

# 4. 开始微调
model.fit(
    train_objectives=[(train_dataloader, train_loss)],
    epochs=10,
    warmup_steps=100,
    output_path="./custom-medical-embedding"
)

```

## 五、向量数据库（进阶）

生成的嵌入向量通常需要存储在专门的向量数据库中，实现高效检索：

-   开源：FAISS（Facebook）、Milvus、Chroma
    
-   商用：Pinecone、Weaviate、Zilliz Cloud
    

示例（使用FAISS）：

```python
import faiss
import numpy as np
from sentence_transformers import SentenceTransformer

# 1. 初始化模型和FAISS索引
model = SentenceTransformer('all-MiniLM-L6-v2')
dimension = 384  # MiniLM模型的向量维度
index = faiss.IndexFlatL2(dimension)  # L2距离索引

# 2. 准备数据并添加到索引
texts = ["苹果手机", "华为手机", "小米电视", "三星平板"]
embeddings = model.encode(texts)
index.add(np.array(embeddings).astype('float32'))

# 3. 检索相似内容
query = "智能手机"
query_embedding = model.encode([query])
k = 2  # 返回top2相似结果
distances, indices = index.search(np.array(query_embedding).astype('float32'), k)

# 4. 输出结果
print(f"查询：{query}")
for i in range(k):
    idx = indices[0][i]
    dist = distances[0][i]
    print(f"相似项{i+1}：{texts[idx]} (距离：{dist:.4f})")

```

### 总结

1.  **核心本质**：嵌入模型将离散符号转为低维连续向量，保留语义特征，相似内容的向量距离更近。
    
2.  **实用选择**：入门/开源场景用Sentence-BERT（all-MiniLM-L6-v2），高精度场景用OpenAI Embedding。
    
3.  **关键应用**：语义搜索、推荐系统、文本聚类，结合向量数据库可实现高效大规模检索。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->


## 今天终于装上了。。。

## 一、前期准备

1.  电脑开启**CPU虚拟化**（任务管理器-性能-CPU查看已启用）
    
2.  D盘新建文件夹：`D:\\\\WSL`
    
3.  关闭电脑360/管家，避免拦截权限
    

* * *

# 第一步：管理员PowerShell开启WSL2功能

这是windows安装WSL官方文档，装完了才发现。

[Install WSL](https://learn.microsoft.com/en-us/windows/wsl/install)

1.  右键开始菜单 → **Windows终端(管理员)** / PowerShell管理员
    
2.  依次执行两行命令
    

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

1.  **立刻重启电脑**（不重启必报错）
    

## 第二步：安装WSL2内核+设定默认WSL2

1.  浏览器搜索下载：`wsl_update_x64.msi` 微软官方内核包，双击安装（安装文件关联有问题的，在powershell里运行这个
    

```python

msiexec /i "D:\\WSL\\wsl_update_x64.msi"
```

再PowerShell执行

```powershell
wsl --set-default-version 2
```

## 第三步：**手动把 Ubuntu 22.04 安装到 D 盘**

在**管理员 PowerShell** 中依次执行：

```powershell
# 1. 创建 Ubuntu 存放目录（全在D盘）
mkdir D:\\\\WSL\\\\Ubuntu

# 2. 导入系统到D盘（注意文件名和你下载的一致）
wsl --import Ubuntu D:\\\\WSL\\\\Ubuntu D:\\\\WSL\\\\ubuntu-22.04-root.tar.gz
```

> 如果提示文件不是 .tar.gz 而是 .tar.xz，请把文件名改成对应的一致。

1.  检查是否成功：
    

```powershell
wsl -l -v
```

看到 **Ubuntu** 显示 **版本 2** 就成功了！

## 第四步：**进入 WSL 并创建普通用户**

```python
# 进入Ubuntu
wsl -d Ubuntu-22.04
```

进入后执行以下命令（**一次性复制粘贴**）：

```python
NEW_USER=royce（记得换成你的用户名）
useradd -m -s /bin/bash $NEW_USER
passwd $NEW_USER
usermod -aG sudo $NEW_USER
tee /etc/wsl.conf > /dev/null << EOF
[user]
default=$NEW_USER
EOF
exit（这是退出
```

退出后重新进入：

```powershell
wsl -d Ubuntu-22.04
```

* * *

### **第五步：WSL 内部国内加速**

```bash
# 换阿里云源-一行一行粘贴-WSL粘贴ctrl+v不行 鼠标右键粘贴就行
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
sudo sed -i 's|archive.ubuntu.com|mirrors.aliyun.com|g' /etc/apt/sources.list
sudo sed -i 's|security.ubuntu.com|mirrors.aliyun.com|g' /etc/apt/sources.list

sudo apt update && sudo apt upgrade -y

```

* * *

```python
# 安装Git
sudo apt install -y git
git config --global user.name "你的名字"
git config --global user.email "你的邮箱@qq.com"
```

## 安装可选方法1

用**ghproxy镜像代理**执行官方安装脚本

```bash
curl -fsSL <https://mirror.ghproxy.com/https://raw.githubusercontent.com/NousResearch/HermesAgent/main/install.sh> | bash
```

等待自动安装：uv、Python、Node、Playwright全套依赖 **Playwright下载浏览器慢是正常现象，千万别终止！**

## 作者用的此方法2（安装比较快 需要魔法记得开TUN模式

```python
 curl -fsSL <https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh> | bash
```

安装完后出现界面

![image.png](attachment:e86e7586-1de6-412b-85ec-77ed66277b37:image.png)

## 第六步：安装完后生效配置

```bash
source ~/.bashrc
```

## 第七步：找到你需要配置API的官方文档查看如何接入

选择模型厂商

1.  粘贴你的API Key
    
2.  填写代理接口BaseURL
    
3.  接入成功后出现图标
    

![image.png](attachment:bc664810-15c0-4b1f-85e3-9c1db0761009:image.png)

# 那么日常如何进入

Powershell执行

```python
hermes
# 或
~/.local/bin/hermes
```

### **第八步：如果你想省 Token 优化**

进入对话后输入：

```
/config delegation.orchestrator_enabled false
/config agent.max_turns 30
```

以后想切换轻量模型就输入：`/model 模型名`
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->



### 一、LangChain 是什么

LangChain 不是一个大模型，而是一个**专为构建大语言模型（LLM）应用设计的 Python/JavaScript 框架**。你可以把它理解成“大模型应用的乐高积木”——它把调用大模型、处理数据、管理对话、连接外部工具（数据库/API）等功能拆分成标准化的组件，让你不用从零写代码，就能快速搭建复杂的 LLM 应用（比如智能问答机器人、文档分析工具、AI 助手等）。

核心目标：解决大模型“孤立无援”的问题——让大模型能**连接外部数据**（比如你的本地文档）、**调用外部工具**（比如查天气、查数据库）、**记忆对话上下文**，最终实现更实用的 AI 应用。

## LangChain 资料介绍

-   官网地址：[https://www.langchain.com/langchain](https://www.langchain.com/langchain)
    
-   官网文档：[https://python.langchain.com/docs/introduction/](https://python.langchain.com/docs/introduction/)
    
-   API 文档：[https://python.langchain.com/api\_reference/](https://python.langchain.com/api_reference/)
    
-   GitHub 地址：[https://github.com/langchain-ai/langchain](https://github.com/langchain-ai/langchain)
    

### 二、LangChain 的核心库（零基础能看懂的分类）

LangChain 拆分成多个模块化的核心库，不同库负责不同功能，你可以按需使用，不用全部引入。以下是最核心的库（Python 生态为主）：

| 核心库 | 作用（通俗解释） | 零基础示例场景 |
| --- | --- | --- |
| langchain-core | 所有功能的“基础骨架”：定义核心接口（比如大模型调用、提示词模板）、基础数据结构 | 定义一个通用的“调用大模型”的接口 |
| langchain-community | 社区贡献的扩展组件：支持各种第三方模型（ChatGLM、文心一言）、外部工具（数据库、API） | 调用本地的 ChatGLM 模型、连接 MySQL 数据库 |
| langchain-openai | 专门对接 OpenAI 生态的库（GPT-3.5/4、Embedding 等） | 调用 GPT-3.5 生成回答 |
| langchain-chroma | 对接向量数据库 Chroma 的库（用于存储/检索文本的向量表示） | 把本地文档转成向量，实现“文档问答” |
| langchain-text-splitters | 文本分割工具：把长文档拆成小片段（适配大模型的上下文长度限制） | 把 10000 字的文档拆成 500 字/段 |
| langchain-memory | 对话记忆组件：保存对话上下文，让大模型“记住”之前的对话 | 聊天机器人能记住你上一轮问的问题 |

### 安装

先装核心库，再按需装扩展库：

```bash
# 核心库（必装）
pip install langchain-core

# 社区扩展库（常用）
pip install langchain-community

# 对接 OpenAI（如果用 GPT）
pip install langchain-openai

# 对接向量数据库 Chroma（如果做文档问答）
pip install langchain-chroma chromadb

```

### 三、LangChain 的核心架构（拆成 6 个核心模块，零基础能懂）

LangChain 的架构是“模块化+可组合”的，核心可以拆成 6 个模块，每个模块都是一个独立的“积木”，组合起来就能搭建完整应用。

### 1\. 模型（Models）—— 核心“大脑”

-   **作用**：对接各种大模型（LLM），是应用的核心推理单元。
    
-   **分类**：
    
    -   LLM：生成文本的大模型（比如 GPT-3.5、ChatGLM、文心一言）；
        
    -   Chat Models：专门做对话的模型（比如 ChatGPT、GPT-4o）；
        
    -   Embedding Models：把文本转成向量的模型（比如 OpenAI Embedding、BGE Embedding）。
        
-   **零基础示例**（调用 OpenAI 的 ChatGPT）：
    

```python
from langchain_openai import ChatOpenAI

# 初始化模型（需要设置 OpenAI API Key）
llm = ChatOpenAI(
    model="gpt-3.5-turbo",
    api_key="你的 OpenAI API Key"  # 替换成自己的 Key
)

# 调用模型生成回答
response = llm.invoke("用一句话解释 LangChain")
print(response.content)
# 输出示例：LangChain 是一个用于构建大语言模型应用的框架，能连接外部数据和工具，简化AI应用开发。

```

### 2\. 提示词（Prompts）—— 给“大脑”的指令

-   **作用**：定义给大模型的输入（指令+上下文），是控制大模型输出的核心。
    
-   **核心功能**：提示词模板（Template）—— 把固定指令和动态变量结合，避免重复写提示词。
    
-   **零基础示例**：
    

```python
from langchain_core.prompts import ChatPromptTemplate

# 定义提示词模板（{question} 是动态变量）
prompt = ChatPromptTemplate.from_messages([
    ("system", "你是一个零基础友好的编程老师，回答要简单易懂。"),
    ("user", "{question}")
])

# 填充动态变量
formatted_prompt = prompt.format_messages(question="什么是 LangChain 的提示词模板？")
print(formatted_prompt)
# 输出示例：[SystemMessage(content='你是一个零基础友好的编程老师，回答要简单易懂。'), HumanMessage(content='什么是 LangChain 的提示词模板？')]

# 结合模型调用
llm = ChatOpenAI(model="gpt-3.5-turbo", api_key="你的 API Key")
chain = prompt | llm  # 把提示词和模型串联（LangChain 特有的管道语法）
response = chain.invoke({"question": "什么是 LangChain 的提示词模板？"})
print(response.content)
# 输出示例：提示词模板是LangChain里的工具，能把固定的指令（比如“做零基础讲解”）和动态的问题结合，不用每次问问题都重新写完整指令。

```

### 3\. 记忆（Memory）—— 让“大脑”记住对话

-   **作用**：保存对话上下文，让大模型能“记住”之前的交互（比如聊天机器人不会忘记你上一轮问的问题）。
    
-   **常用类型**：`ConversationBufferMemory`（简单保存所有对话）。
    
-   **零基础示例**：
    

```python
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.chat_history import InMemoryChatMessageHistory
from langchain_core.runnables.history import RunnableWithMessageHistory
from langchain_openai import ChatOpenAI

# 初始化模型
llm = ChatOpenAI(model="gpt-3.5-turbo", api_key="你的 API Key")

# 定义提示词模板（加入对话历史占位符）
prompt = ChatPromptTemplate.from_messages([
    ("system", "你是一个聊天助手，记住之前的对话内容。"),
    MessagesPlaceholder(variable_name="chat_history"),  # 对话历史占位符
    ("user", "{question}")
])

# 构建对话链
chain = prompt | llm

# 初始化对话历史（用内存保存）
chat_history = InMemoryChatMessageHistory()

# 把对话链和历史结合
chain_with_history = RunnableWithMessageHistory(
    chain,
    lambda session_id: chat_history,  # 按会话ID获取历史
    input_messages_key="question",
    history_messages_key="chat_history"
)

# 第一轮对话
response1 = chain_with_history.invoke(
    {"question": "我叫小明，记住我的名字"},
    config={"configurable": {"session_id": "123"}}  # 会话ID，区分不同用户
)
print(response1.content)  # 输出：好的小明，我记住你的名字啦！

# 第二轮对话（测试是否记住）
response2 = chain_with_history.invoke(
    {"question": "我叫什么名字？"},
    config={"configurable": {"session_id": "123"}}
)
print(response2.content)  # 输出：你叫小明呀😜

```

### 4\. 索引（Indexes）—— 让“大脑”访问外部数据

-   **作用**：把本地文档（PDF/Word/TXT）转成大模型能理解的格式，实现“文档问答”（比如问“我的PDF里讲了什么？”）。
    
-   **核心流程**：文本分割 → 转向量 → 存入向量数据库 → 检索相关片段 → 传给大模型回答。
    
-   **零基础简化示例**（用内存向量库）：
    

```python
from langchain_text_splitters import CharacterTextSplitter
from langchain_openai import OpenAIEmbeddings
from langchain_core.vectorstores import InMemoryVectorStore
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI

# 1. 准备本地文本
text = """
LangChain 核心架构有6个模块：Models（模型）、Prompts（提示词）、Memory（记忆）、
Indexes（索引）、Chains（链）、Agents（代理）。其中 Chains 是把多个组件串联，
Agents 是让大模型自主决定调用哪些工具。
"""

# 2. 分割文本（适配大模型上下文长度）
text_splitter = CharacterTextSplitter(chunk_size=100, chunk_overlap=10)
chunks = text_splitter.split_text(text)

# 3. 转向量 + 存入内存向量库
embeddings = OpenAIEmbeddings(api_key="你的 API Key")
vector_store = InMemoryVectorStore.from_texts(chunks, embeddings)

# 4. 检索相关文本（比如问“LangChain 的 Chains 是做什么的？”）
retriever = vector_store.as_retriever()
relevant_chunks = retriever.invoke("LangChain 的 Chains 是做什么的？")
print("检索到的相关文本：", relevant_chunks[0].page_content)

# 5. 结合模型回答
prompt = ChatPromptTemplate.from_messages([
    ("system", "根据下面的参考文本回答问题：{context}"),
    ("user", "{question}")
])
llm = ChatOpenAI(model="gpt-3.5-turbo", api_key="你的 API Key")
chain = prompt | llm

response = chain.invoke({
    "context": relevant_chunks[0].page_content,
    "question": "LangChain 的 Chains 是做什么的？"
})
print(response.content)
# 输出示例：LangChain 的 Chains 作用是把多个组件串联起来，形成完整的应用流程。

```

### 5\. 链（Chains）—— 把“积木”串联起来

-   **作用**：把多个组件（提示词、模型、索引、记忆）按顺序组合，形成完整的工作流。比如“提示词 → 模型 → 输出”就是最简单的链。
    
-   **核心语法**：LangChain 用 `|`（管道符）实现组件串联，就像“流水线”一样。
    
-   **示例**：前面的“提示词+模型”“检索+提示词+模型”都是链的应用。
    

### 6\. 代理（Agents）—— 让“大脑”自主决策

-   **作用**：让大模型根据用户问题，自主决定“调用哪些工具”“执行什么步骤”，是 LangChain 最强大的模块之一。
    
-   **场景**：比如用户问“今天北京的天气怎么样？”，代理会自动调用“天气API工具”，获取数据后再回答。
    
-   **零基础简化示例**（用内置的数学工具）：
    

```python
from langchain_openai import ChatOpenAI
from langchain_core.tools import Tool
from langchain.agents import create_openai_functions_agent, AgentExecutor
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder

# 1. 定义工具（比如计算加法的工具）
def add(a: int, b: int) -> int:
    """计算a加b的结果"""
    return a + b

tools = [
    Tool(
        name="AddCalculator",
        func=add,
        description="用于计算两个数的加法，输入是两个整数"
    )
]

# 2. 初始化模型和提示词
llm = ChatOpenAI(model="gpt-3.5-turbo", api_key="你的 API Key")
prompt = ChatPromptTemplate.from_messages([
    ("system", "你是一个助手，需要时调用工具解决问题"),
    MessagesPlaceholder(variable_name="chat_history", optional=True),
    ("user", "{input}"),
    MessagesPlaceholder(variable_name="agent_scratchpad"),  # 代理思考过程
])

# 3. 创建代理并执行
agent = create_openai_functions_agent(llm, tools, prompt)
agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)

# 4. 测试（让代理自主决定是否调用加法工具）
response = agent_executor.invoke({"input": "计算 123 + 456 的结果"})
print("最终回答：", response["output"])
# 输出：最终回答：123 + 456 的结果是 579

```

### 四、LangChain 的项目

| 项目名称 | 技术点 | 难度 |
| --- | --- | --- |
| 文档问答助手 | Prompt + Embedding + RetrievalQA | ⭐⭐ |
| 智能日程规划助手 | Agent + Tool + Memory | ⭐⭐⭐ |
| LLM+数据库问答 | SQLDatabaseToolkit + Agent | ⭐⭐⭐⭐ |
| 多模型路由对话系统 | RouterChain + 多LLM | ⭐⭐⭐⭐ |
| 互联网智能客服 | ConversationChain + RAG + Agent | ⭐⭐⭐⭐⭐ |
| 企业知识库助手（RAG+本地模型） | VectorDB + LLM + Streamlit | ⭐⭐⭐⭐⭐ |

### 总结

1.  LangChain 是**大模型应用开发框架**，核心是“模块化组件+可组合”，不用从零写代码就能搭建 LLM 应用；
    
2.  核心库分为 `langchain-core`（基础）、`langchain-community`（扩展）、`langchain-openai`（对接OpenAI）等，按需安装即可；
    
3.  核心架构有6个模块：Models（模型）、Prompts（提示词）、Memory（记忆）、Indexes（索引）、Chains（链）、Agents（代理），其中 Chains 负责串联组件，Agents 让模型自主决策调用工具。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->




# 以太坊账户（Accounts）笔记

## 一、账户概述

-   以太坊账户：拥有 ETH 余额、可在链上发送消息的实体。
    
-   两类账户：**外部账户（EOA）**、**合约账户**。
    
-   共同点：均可收发 ETH / 代币、与智能合约交互。
    

* * *

## 二、两类账户对比

### 1\. 外部账户（EOA，用户账户）

-   由**私钥**控制，无需部署成本，免费创建。
    
-   可**主动发起交易**（转账、调用合约）。
    
-   交易：EOA ↔ EOA 只能是 ETH / 代币转账。
    
-   组成：**公钥 + 私钥**加密对。
    

### 2\. 合约账户（智能合约）

-   由**代码逻辑**控制，**无私钥**。
    
-   创建需要 Gas（占用链上存储）。
    
-   只能**被动响应交易**（收到消息后执行代码）。
    
-   可执行复杂逻辑：转账、发代币、创建新合约等。
    

* * *

## 三、账户的四个核心字段

1.  **nonce**：
    
    -   EOA：已发送交易计数；
        
    -   合约：已创建合约计数；
        
    -   防重放攻击：同一 nonce 仅执行一次。
        
2.  **balance**：账户余额，单位 **wei**（1 ETH = 10¹⁸ wei）。
    
3.  **codeHash**：
    
    -   EOA：空字符串哈希；
        
    -   合约：EVM 代码哈希（不可修改）。
        
4.  **storageRoot**：
    
    -   账户存储的默克尔 Patricia 树根哈希；
        
    -   合约状态数据存在这里，EOA 默认为空。
        

* * *

## 四、外部账户与密钥对

-   **私钥**：64 位十六进制字符串，账户控制权核心，**必须保密**。
    
-   **公钥**：由私钥通过椭圆曲线算法生成。
    
-   **地址**：公钥 Keccak-256 哈希后取**最后 20 字节**，前缀 `0x`，共 42 字符。
    
-   逻辑：私钥 → 签名交易 → 网络验证公钥 → 确认交易合法。
    

* * *

## 五、账户创建

1.  **EOA**：随机生成私钥 → 推导公钥 → 生成地址；常用工具：Geth/Clef、钱包（MetaMask）、web3 库。
    
2.  **合约地址**：由**创建者地址 + nonce** 计算生成，部署时确定。
    

* * *

## 六、验证者密钥（PoS）

-   以太坊升级为权益证明（PoS）后引入 **BLS 密钥**。
    
-   用于标识验证者，支持密钥聚合，降低共识带宽和最低质押门槛。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->





## 一、前期准备

1.  电脑开启**CPU虚拟化**（任务管理器-性能-CPU查看已启用）
    
2.  D盘新建文件夹：`D:\\\\WSL`
    
3.  关闭电脑360/管家，避免拦截权限
    

* * *

# 第一步：管理员PowerShell开启WSL2功能

1.  右键开始菜单 → **Windows终端(管理员)** / PowerShell管理员
    
2.  依次执行两行命令
    

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

1.  **立刻重启电脑**（不重启必报错）
    

## 第二步：安装WSL2内核+设定默认WSL2

1.  浏览器搜索下载：`wsl_update_x64.msi` 微软官方内核包，双击安装
    
2.  管理员PowerShell执行
    

```powershell
wsl --set-default-version 2
```

## 第三步：手动把Ubuntu22.04安装到D盘（核心！不占C盘）

1.  先在D盘建好文件夹
    

```powershell
mkdir D:\\\\WSL\\\\Ubuntu
```

1.  下载Ubuntu22.04镜像到D盘
    

```powershell
curl -L -o D:\\\\WSL\\\\ubuntu-22.04-root.tar.xz <https://cloud-images.ubuntu.com/jammy/current/jammy-server-cloudimg-amd64-wsl.rootfs.tar.gz>
```

1.  导入系统至D盘（最重要）
    

```powershell
wsl --import Ubuntu D:\\\\WSL\\\\Ubuntu D:\\\\WSL\\\\ubuntu-22.04-root.tar.xz
```

1.  查看是否安装成功
    

```powershell
wsl -l -v
```

**显示Ubuntu 版本2 即为成功**

## 第四步：进入WSL创建日常普通用户

1.  进入刚装好的Ubuntu
    

```powershell
wsl -d Ubuntu
```

1.  WSL内执行创建用户（用户名自定义，我用xiaobai）
    

```bash
NEW_USER=xiaobai
useradd -m -s /bin/bash $NEW_USER
passwd $NEW_USER
usermod -aG sudo $NEW_USER
```

1.  设置开机默认登录这个用户
    

```bash
cat > /etc/wsl.conf << EOF
[user]
default=$NEW_USER
EOF
```

1.  输入 `exit` 退出，重新进WSL就是普通用户
    

* * *

# 第二步：WSL内部全网国内加速（必做）

## 1\. 替换Ubuntu阿里软件源

```bash
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
sudo sed -i 's|archive.ubuntu.com|mirrors.aliyun.com|g' /etc/apt/sources.list
sudo sed -i 's|security.ubuntu.com|mirrors.aliyun.com|g' /etc/apt/sources.list
sudo apt update && sudo apt upgrade -y
```

## 2\. 安装Git并配置

```bash
sudo apt install -y git
git config --global user.name "xiaobai"
git config --global user.email "xiaobai@qq.com"
```

* * *

# 第三步：国内镜像加速安装 Hermes Agent

## 1\. 加速一键安装命令（解决GitHub超时）

用**ghproxy镜像代理**执行官方安装脚本

```bash
curl -fsSL <https://mirror.ghproxy.com/https://raw.githubusercontent.com/NousResearch/HermesAgent/main/install.sh> | bash
```

等待自动安装：uv、Python、Node、Playwright全套依赖 **Playwright下载浏览器慢是正常现象，千万别终止！**

## 2\. 刷新环境变量识别hermes命令

```bash
source ~/.bashrc
```

## 3\. 验证安装成功

```bash
hermes --version
```

提示命令不存在就用完整路径：

```bash
~/.local/bin/hermes --version
```

* * *

# 第四步：对接大模型API配置（必须配置才能用）

Hermes无本地模型，只对接线上API

## 方式1：交互式快速配置

```bash
hermes setup
```

依次填写：

1.  选择模型厂商
    
2.  粘贴你的API Key
    
3.  填写代理接口BaseURL
    
4.  填写调用模型名称 回车确认完成
    

## 方式2：手动修改配置文件

```bash
nano ~/.hermes/config.yaml
```

写入格式

```yaml
model:
  default: 模型名
  provider: 厂商名
  base_url: 你的API接口地址
```

保存：Ctrl+O 回车，Ctrl+X退出

* * *

# 第五步：省Token省钱优化（新手必开）

进入Hermes对话界面后直接输入

1.  关闭多Agent并行（最耗Token）
    

```
/config delegation.orchestrator_enabled false
```

1.  减少对话轮数
    

```
/config agent.max_turns 30
```

1.  随时切换轻量模型
    

```
/model 轻量模型名称
```

* * *

# 第六步：日常启动使用

## 启动命令

```bash
hermes
# 或
~/.local/bin/hermes
```

## 常用内置命令

-   `/help` 查看全部功能
    
-   `/model 模型名` 快速切模型
    
-   `/config 参数 值` 修改配置
    

## 已解锁全部Hermes核心能力

1.  四层长效记忆系统
    
2.  AI自动生成实用技能
    
3.  多平台机器人网关
    
4.  任务并行处理
    
5.  本地语音输入Whisper
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
