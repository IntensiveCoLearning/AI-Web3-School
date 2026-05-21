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
