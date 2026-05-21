---
timezone: UTC+8
---

# fenixIves

**GitHub ID:** fenixIves

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
#   
AI大模型核心概念详尽笔记

## 一、大语言模型（LLM, Large Language Model）

### 1\. 核心定义

大语言模型是基于海量文本数据训练的深度学习模型，通过学习语言的统计规律和语义结构，能够生成人类可理解的自然语言文本，并执行各种语言理解和生成任务。它本质上是一个"下一个词预测器"，根据输入的上下文，预测最可能出现的下一个词/子词。

### 2\. 关键特性

-   **规模巨大**：拥有数十亿甚至数万亿个参数（如GPT-4o、Claude 3 Opus、Gemini Ultra）
    
-   **涌现能力**：当模型规模达到一定阈值后，会突然具备一些小规模模型没有的能力（如逻辑推理、数学计算、代码生成）
    
-   **上下文窗口**：模型能够处理的最大输入文本长度，单位为token（1个token≈0.75个英文单词或0.5个中文汉字）
    
-   **多模态能力**：现代LLM不仅能处理文本，还能理解图像、音频、视频等多种模态信息
    
-   **通用能力**：无需针对特定任务重新训练，通过提示即可完成翻译、写作、问答、推理等多种任务
    

### 3\. 核心技术原理

-   **Transformer架构**：所有现代LLM的基础，核心是自注意力机制（Self-Attention），能够捕捉文本中不同位置词之间的依赖关系
    
-   **预训练+微调范式**：
    

-   预训练：在海量无标注文本上进行自监督学习，学习通用语言知识
    
-   微调：在少量标注数据上进行监督学习，优化模型在特定任务上的表现
    

-   **对齐技术**：通过RLHF（人类反馈强化学习）、DPO（直接偏好优化）等方法，使模型输出符合人类价值观和偏好
    

### 4\. 典型应用场景

-   自然语言理解：文本分类、情感分析、实体识别、关系抽取
    
-   自然语言生成：文章写作、邮件撰写、代码生成、翻译
    
-   对话系统：智能客服、个人助理、聊天机器人
    
-   知识问答：知识库问答、搜索引擎增强
    
-   推理与决策：逻辑推理、数学计算、问题解决
    

### 5\. 主流模型与发展趋势

-   **闭源模型**：OpenAI GPT系列、Anthropic Claude系列、Google Gemini系列、字节跳动豆包系列
    
-   **开源模型**：Meta Llama系列、Mistral系列、Qwen（通义千问）系列、GLM（智谱清言）系列
    
-   **发展趋势**：模型规模持续增长、多模态融合、推理能力增强、效率提升（量化、蒸馏）、专用模型涌现
    

## 二、提示词工程（Prompt Engineering）

### 1\. 核心定义

提示词工程是设计和优化输入文本（提示词），以引导大语言模型生成高质量、符合预期输出的技术和实践。它是与LLM交互的最基本方式，也是充分发挥LLM能力的关键。

### 2\. 提示词的基本结构

一个完整的提示词通常包含以下部分：

-   **角色设定**：明确模型需要扮演的角色（如"你是一名资深软件工程师"）
    
-   **任务描述**：清晰说明需要完成的具体任务
    
-   **输入数据**：提供任务所需的原始数据或上下文
    
-   **输出要求**：指定输出的格式、长度、风格、语言等
    
-   **约束条件**：明确模型需要遵守的规则和限制
    

### 3\. 核心提示词技巧

-   **清晰明确**：使用具体、无歧义的语言，避免模糊表述
    
-   **分步指令**：将复杂任务分解为多个简单步骤，引导模型逐步完成
    
-   **少样本学习（Few-shot）**：在提示词中提供几个输入输出示例，让模型学习任务模式
    
-   **思维链（Chain of Thought, CoT）**：引导模型先展示推理过程，再给出最终答案，显著提升推理能力
    
-   **自我一致性（Self-Consistency）**：让模型生成多个推理路径，然后选择最一致的答案
    
-   **结构化输出**：要求模型以JSON、Markdown、表格等结构化格式输出，便于后续处理
    

### 4\. 高级提示词技术

-   **提示词模板**：将提示词的固定部分和可变部分分离，便于复用和批量处理
    
-   **提示词链**：将一个复杂任务拆分为多个提示词，前一个提示词的输出作为后一个提示词的输入
    
-   **检索增强生成（RAG）**：将外部知识库检索到的相关信息加入提示词，解决模型知识过时和幻觉问题
    
-   **自动提示词优化**：使用LLM本身或专门工具来生成和优化提示词
    

### 5\. 常见工具与框架

-   提示词管理：PromptPerfect、PromptBase、LangChain Prompt Hub
    
-   提示词测试：PromptLayer、Helicone、LangSmith
    
-   提示词工程平台：Cursor、Copilot Chat、Claude Projects
    

## 三、工作流（Workflow）

### 1\. 核心定义

AI工作流是将多个LLM调用、工具使用、人工审核等步骤按照一定的逻辑顺序和条件组合起来，形成的自动化流程。它用于解决需要多步操作、多角色协作或复杂决策的任务，比单个提示词更强大、更可靠。

### 2\. 工作流的核心组成部分

-   **节点（Node）**：工作流中的基本执行单元，可以是LLM调用、工具调用、条件判断、人工审核等
    
-   **边（Edge）**：连接不同节点的连线，表示执行顺序和数据流向
    
-   **条件分支**：根据某个条件的结果，选择不同的执行路径
    
-   **循环**：重复执行某个步骤直到满足特定条件
    
-   **变量**：在工作流中传递和存储数据的容器
    

### 3\. 工作流的类型

-   **线性工作流**：步骤按照固定顺序依次执行，没有分支和循环
    
-   **分支工作流**：根据条件判断选择不同的执行路径
    
-   **循环工作流**：重复执行某个步骤直到满足终止条件
    
-   **并行工作流**：多个步骤同时执行，提高效率
    
-   **混合工作流**：结合以上多种类型的复杂工作流
    

### 4\. 典型应用场景

-   内容创作：文章大纲生成→内容撰写→润色→排版→审核
    
-   客户服务：问题分类→知识库检索→回答生成→人工审核→发送
    
-   数据处理：数据提取→数据清洗→数据分析→报告生成
    
-   软件开发：需求分析→代码生成→代码审查→测试→部署
    
-   研究助理：文献检索→文献摘要→文献综述→论文撰写
    

### 5\. 主流工作流工具与平台

-   **低代码/无代码平台**：[Make.com](http://Make.com)、n8n、Zapier、Dify、Flowise
    
-   **代码优先框架**：LangChain、LlamaIndex、LangGraph、AutoGen
    
-   **大模型内置工作流**：GPTs、Claude Projects、Gemini Advanced Workflows
    

## 四、智能体（Agent）

### 1\. 核心定义

AI智能体是能够自主感知环境、制定计划、执行动作并根据反馈调整行为的人工智能系统。它比工作流更高级，具备自主决策和学习能力，能够在没有人类持续干预的情况下完成复杂任务。

### 2\. 智能体的核心组件

-   **感知模块**：接收和处理来自环境的信息（文本、图像、音频等）
    
-   **记忆模块**：存储智能体的知识、经验和历史交互信息
    

-   短期记忆：当前对话上下文
    
-   长期记忆：知识库、过往经验
    

-   **规划模块**：将复杂目标分解为子目标，制定执行计划
    
-   **决策模块**：根据当前状态和目标，选择下一步要执行的动作
    
-   **执行模块**：调用工具或直接生成输出，执行决策
    
-   **反思模块**：评估执行结果，总结经验教训，优化未来行为
    

### 3\. 智能体的工作流程

1.  **目标接收**：接收用户指定的目标或任务
    
2.  **任务分解**：将复杂目标分解为多个可执行的子任务
    
3.  **计划制定**：制定完成子任务的具体步骤和顺序
    
4.  **动作执行**：调用工具或生成输出，执行计划中的步骤
    
5.  **结果观察**：观察动作执行后的环境变化和结果
    
6.  **反思调整**：评估结果是否符合预期，如有偏差则调整计划
    
7.  **循环迭代**：重复步骤4-6，直到目标完成
    

### 4\. 智能体的类型

-   **单智能体**：单个智能体独立完成任务
    
-   **多智能体**：多个具有不同角色和能力的智能体协作完成任务
    

-   角色分工：如产品经理、工程师、设计师、测试员
    
-   通信机制：智能体之间通过消息传递进行沟通
    
-   协调机制：解决冲突、分配任务、同步进度
    

-   **专用智能体**：针对特定领域或任务优化的智能体（如代码智能体、研究智能体）
    
-   **通用智能体**：具备广泛能力，能够完成各种不同任务的智能体
    

### 5\. 主流智能体框架与项目

-   **框架**：LangGraph、AutoGen、CrewAI、BabyAGI、AutoGPT
    
-   **知名项目**：Devin（AI软件工程师）、SWE-agent、OpenAI o1、Google Gemini Advanced Agent
    

## 五、工具使用（Tool Use）

### 1\. 核心定义

工具使用是指大语言模型能够调用外部工具来扩展自身能力的技术。LLM本身存在知识过时、计算能力有限、无法与物理世界交互等局限性，通过调用工具可以弥补这些不足，实现更强大的功能。

### 2\. 工具使用的核心原理

-   **工具描述**：用自然语言或结构化格式（如JSON Schema）描述工具的功能、输入参数和输出格式
    
-   **工具选择**：模型根据当前任务需求，判断是否需要调用工具以及调用哪个工具
    
-   **参数生成**：模型生成调用工具所需的参数
    
-   **工具执行**：实际调用外部工具，执行相应的操作
    
-   **结果处理**：模型接收工具返回的结果，并将其整合到回答中
    

### 3\. 常见的工具类型

-   **信息检索工具**：搜索引擎（Google、Bing）、知识库查询、数据库查询
    
-   **计算工具**：计算器、数学计算库（Wolfram Alpha）、统计分析工具
    
-   **代码执行工具**：Python解释器、代码沙箱、终端命令执行
    
-   **文件操作工具**：文件读写、格式转换、压缩解压
    
-   **API调用工具**：调用第三方服务API（如天气、地图、邮件、支付）
    
-   **多模态工具**：图像生成（DALL-E、Midjourney）、语音识别、视频处理
    

### 4\. 工具使用的进阶技术

-   **并行工具调用**：同时调用多个工具，提高执行效率
    
-   **链式工具调用**：前一个工具的输出作为后一个工具的输入
    
-   **工具选择优化**：使用更智能的算法来选择最合适的工具
    
-   **工具错误处理**：当工具调用失败时，能够自动重试或选择替代方案
    
-   **自定义工具**：用户可以根据自己的需求创建和集成自定义工具
    

### 5\. 工具使用的应用场景

-   实时信息查询：天气、新闻、股票价格
    
-   复杂计算：数学题、科学计算、数据分析
    
-   代码开发：代码运行、调试、测试
    
-   自动化任务：邮件发送、日程安排、文件处理
    
-   多模态生成：根据文本描述生成图像、视频
    

## 六、AI编程（AI Coding）

### 1\. 核心定义

AI编程是指利用人工智能技术辅助或自动完成软件开发过程中的各种任务，包括代码生成、代码补全、代码审查、调试、测试、文档生成等。它是LLM最成功的应用领域之一，极大地提高了软件开发效率。

### 2\. AI编程的核心能力

-   **代码补全**：根据上下文自动补全代码片段
    
-   **代码生成**：根据自然语言描述生成完整的函数、类甚至整个项目
    
-   **代码解释**：解释现有代码的功能和工作原理
    
-   **代码审查**：检查代码中的bug、安全漏洞、性能问题和代码风格问题
    
-   **代码重构**：优化代码结构，提高代码的可读性和可维护性
    
-   **调试**：分析错误信息，定位并修复bug
    
-   **测试生成**：自动生成单元测试、集成测试用例
    
-   **文档生成**：为代码自动生成注释和文档
    

### 3\. 主流AI编程工具

-   **代码编辑器插件**：GitHub Copilot、GitHub Copilot Chat、Cursor、CodeLlama、Tabnine
    
-   **独立IDE**：Cursor、GitHub Copilot X、JetBrains AI Assistant
    
-   **代码智能体**：Devin、SWE-agent、CodeLlama Agent、OpenAI o1
    
-   **代码审查工具**：CodeGuru、DeepCode、Sourcery
    
-   **测试生成工具**：Testim、Applitools、Katalon
    

### 4\. AI编程的工作流程

1.  **需求描述**：用自然语言清晰描述需要实现的功能
    
2.  **代码生成**：AI根据需求描述生成初始代码
    
3.  **代码审查**：AI或人类开发者审查代码，发现问题
    
4.  **代码修改**：根据审查意见修改和优化代码
    
5.  **测试运行**：运行代码和测试用例，验证功能正确性
    
6.  **调试修复**：如果发现bug，进行调试和修复
    
7.  **文档生成**：为最终代码生成注释和文档
    

### 5\. AI编程的优势与挑战

-   **优势**：
    

-   显著提高开发效率，减少重复劳动
    
-   帮助开发者学习新技术和最佳实践
    
-   降低编程门槛，让非专业开发者也能创建简单应用
    
-   提高代码质量，减少bug和安全漏洞
    

-   **挑战**：
    

-   生成的代码可能存在bug、安全漏洞或性能问题
    
-   难以理解复杂的业务逻辑和系统架构
    
-   可能生成过时或不兼容的代码
    
-   知识产权和版权问题
    
-   过度依赖AI可能导致开发者能力下降
    

## 七、概念关系与发展脉络

### 1\. 概念关系图

```
LLM（基础）
├── Prompt Engineering（与LLM交互的基础方式）
│   └── RAG（检索增强生成，扩展LLM知识）
├── Workflow（多个LLM调用的有序组合）
│   └── 工具调用（Workflow中的重要节点）
└── Agent（具备自主决策能力的高级系统）
    ├── 记忆模块
    ├── 规划模块
    ├── 决策模块
    └── 工具使用模块（Agent的核心能力之一）
        └── AI Coding（工具使用在编程领域的具体应用）
```

### 2\. 发展脉络

1.  **第一阶段（2017-2020）**：Transformer架构提出，GPT-1/2/3相继发布，LLM初具规模，提示词工程开始兴起
    
2.  **第二阶段（2021-2022）**：GPT-3.5/ChatGPT发布，LLM能力爆发，AI编程工具（GitHub Copilot）普及，工作流概念开始出现
    
3.  **第三阶段（2023-至今）**：GPT-4、Claude 3等多模态大模型发布，Agent技术快速发展，工具使用能力显著增强，多智能体协作成为研究热点，Devin等专用代码智能体出现
    

### 3\. 未来发展趋势

-   **更强大的通用智能体**：具备更强的自主决策、规划和学习能力，能够完成更复杂的任务
    
-   **多模态融合**：智能体能够无缝处理文本、图像、音频、视频等多种模态信息
    
-   **人机协作**：人类和AI智能体更加紧密地协作，各自发挥优势
    
-   **可解释性与可靠性**：提高AI系统的可解释性和可靠性，减少幻觉和错误
    
-   **安全与对齐**：确保AI系统的行为符合人类价值观和安全要求
    
-   **边缘部署**：将AI模型部署到边缘设备，实现低延迟、高隐私的本地AI应用
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

# Hermes Agent Mac 云环境完整部署笔记

**适用场景**：需要24/7不间断运行、多设备远程访问、运行大模型的用户。本文从Mac端视角出发，覆盖从云服务器选购到生产级部署的全流程，所有命令均可直接复制执行。

## 一、前置准备

### 1.1 云服务器选型（2026年性价比推荐）

| 配置等级 | 推荐规格 | 月成本（约） | 可运行模型 | 适用场景 |
| 入门级 | 2核4GB CPU（Ubuntu 24.04） | ¥30-50 | 云端API + Hermes 3 7B Q3 | 消息网关、简单工具调用 |
| 进阶级 | 4核8GB CPU | ¥80-120 | Hermes 3 13B Q4 | 本地模型+代码解释器 |
| 旗舰级 | 8核16GB CPU / T4 16GB GPU | ¥200-500 | Hermes 3 34B Q4 / 70B Q4 | 复杂任务、多并发 |

**推荐云厂商**：

-   国内用户：腾讯云轻量应用服务器（有Hermes官方一键镜像）、阿里云ECS
    
-   国际用户：DigitalOcean、Hetzner、Vultr
    

**操作系统**：**Ubuntu 24.04 LTS**（官方唯一推荐，兼容性最好）

### 1.2 Mac端准备：SSH连接工具

Mac自带SSH客户端，无需额外安装。推荐配置SSH密钥登录（比密码安全100倍）：

```
# 生成SSH密钥（如果没有）
ssh-keygen -t ed25519 -C "your_email@example.com"

# 将公钥复制到云服务器（替换为你的服务器IP）
ssh-copy-id root@your_server_ip
```

现在可以直接免密码登录服务器：

```
ssh root@your_server_ip
```

## 二、云服务器基础环境配置

登录云服务器后，先执行系统更新和基础依赖安装：

```
# 更新系统
apt update && apt upgrade -y

# 安装必备依赖
apt install -y git curl wget nano

# 配置swap分区（4GB以下内存必做，防止OOM崩溃）
fallocate -l 4G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo '/swapfile none swap sw 0 0' | tee -a /etc/fstab

# 验证swap配置
free -h
```

## 三、Hermes Agent 云环境安装

### 3.1 官方一键安装（推荐）

和本地安装完全相同，官方脚本会自动适配Linux环境：

```
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

**安装完成后重载环境**：

```
source ~/.bashrc
```

**验证安装**：

```
hermes version
# 输出示例：hermes-agent 0.9.3
```

### 3.2 模型配置（二选一）

方案A：云端API（入门级服务器首选）

适合CPU配置较低的服务器，响应速度快，无需本地算力：

```
hermes model
```

在交互式菜单中选择：

-   OpenAI（GPT-4o）
    
-   Anthropic（Claude 3.5 Sonnet）
    
-   DeepSeek
    
-   阿里云百炼（国内用户推荐）
    
-   OpenRouter（200+模型可选）
    

输入对应的API Key即可完成配置。

方案B：本地Ollama模型（进阶级服务器）

如果服务器内存≥8GB，可以完全离线运行本地模型：

```
# 安装Ollama
curl -fsSL https://ollama.com/install.sh | sh

# 下载Hermes 3模型
ollama pull nousresearch/hermes3:13b-q4_K_M

# 配置Hermes使用本地模型
hermes model
# 选择Ollama，输入模型名称：nousresearch/hermes3:13b-q4_K_M
```

## 四、云环境核心配置：24/7不间断运行

这是云部署和本地部署最大的区别。Hermes官方提供了内置的systemd服务安装命令，无需手动编写配置文件。

### 4.1 安装并启动系统服务

```
# 安装systemd用户服务（推荐，无需root权限）
hermes gateway install

# 启用并立即启动服务
systemctl --user enable --now hermes-gateway

# 启用用户服务持久化（SSH退出后仍保持运行）
sudo loginctl enable-linger $USER
```

### 4.2 服务管理命令

```
# 查看服务状态
systemctl --user status hermes-gateway

# 查看实时日志（排查问题必备）
journalctl --user -u hermes-gateway -f

# 重启服务
systemctl --user restart hermes-gateway

# 停止服务
systemctl --user stop hermes-gateway

# 卸载服务
hermes gateway uninstall
```

## 五、网络与安全配置（关键步骤）

### 5.1 云平台安全组配置

必须在云服务器控制台的安全组中开放以下端口：

| 端口 | 用途 | 协议 | 来源IP |
| 22 | SSH远程登录 | TCP | 你的Mac公网IP（推荐）或0.0.0.0/0 |
| 80 | HTTP | TCP | 0.0.0.0/0 |
| 443 | HTTPS | TCP | 0.0.0.0/0 |
| 8080 | Hermes Dashboard（临时） | TCP | 你的Mac公网IP |

**安全提示**：不要将22端口和8080端口开放给0.0.0.0/0，只允许你的Mac IP访问。

### 5.2 配置Nginx反向代理与HTTPS

为了安全地从公网访问Hermes Dashboard，需要配置Nginx反向代理和Let's Encrypt免费SSL证书：

```
# 安装Nginx和Certbot
apt install -y nginx certbot python3-certbot-nginx
```

创建Nginx配置文件：

```
nano /etc/nginx/sites-available/hermes
```

粘贴以下内容（替换`hermes.yourdomain.com`为你的域名）：

```
server {
    listen 80;
    server_name hermes.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

启用配置并申请SSL证书：

```
# 启用站点
ln -s /etc/nginx/sites-available/hermes /etc/nginx/sites-enabled/

# 验证Nginx配置
nginx -t

# 重启Nginx
systemctl restart nginx

# 申请并自动配置SSL证书
certbot --nginx -d hermes.yourdomain.com
```

现在你可以通过`https://hermes.yourdomain.com`安全地访问Hermes Dashboard了。

## 六、从Mac端访问云Hermes

### 6.1 浏览器访问Dashboard

直接打开`https://hermes.yourdomain.com`，使用你在初始化时设置的账号密码登录。

### 6.2 Mac本地终端连接云Hermes

你可以在Mac本地安装Hermes客户端，然后配置连接到云服务器上的Hermes服务：

```
# 在Mac本地安装Hermes客户端
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash

# 配置连接到云服务器
hermes config set api_endpoint https://hermes.yourdomain.com/v1
hermes config set api_key your_api_key
```

现在你可以直接在Mac本地终端使用`hermes chat`命令，所有请求都会发送到云服务器上的Hermes Agent。

### 6.3 配置消息平台接入

Hermes支持接入Telegram、Discord、Slack、微信等消息平台，让你可以通过手机随时与你的AI助手对话：

```
# 交互式配置消息平台
hermes gateway setup
```

按照提示完成对应平台的Bot Token配置即可。

## 七、进阶：Docker容器化部署

如果你更喜欢容器化部署方式，可以使用官方Docker镜像：

```
# 创建数据目录
mkdir -p ~/.hermes

# 启动Hermes容器
docker run -d \
  --name hermes-agent \
  --restart always \
  -p 8080:8080 \
  -v ~/.hermes:/home/user/.hermes \
  nousresearch/hermes-agent:latest
```

## 八、维护与更新

### 8.1 更新Hermes Agent

```
# 停止服务
systemctl --user stop hermes-gateway

# 更新
hermes update

# 重启服务
systemctl --user start hermes-gateway
```

### 8.2 备份数据

所有Hermes配置和数据都存储在`~/.hermes`目录下，定期备份即可：

```
# 创建备份
tar -czf hermes-backup-$(date +%F).tar.gz ~/.hermes

# 恢复备份
tar -xzf hermes-backup-2026-05-19.tar.gz -C ~/
```

## 九、常见问题与排错

### 9.1 无法访问Dashboard

1.  检查云服务器安全组是否开放了80和443端口
    
2.  检查Nginx服务是否运行：`systemctl status nginx`
    
3.  检查Hermes服务是否运行：`systemctl --user status hermes-gateway`
    
4.  查看日志：`journalctl --user -u hermes-gateway -f`
    

### 9.2 模型下载慢

使用Hugging Face国内镜像：

```
export HF_ENDPOINT=https://hf-mirror.com
ollama pull nousresearch/hermes3:13b-q4_K_M
```

### 9.3 内存不足

-   使用更小量化级别的模型（Q3\_K\_M代替Q4\_K\_M）
    
-   增加swap分区大小
    
-   升级服务器配置
    

### 9.4 安全注意事项

-   永远不要在公网上直接暴露8080端口，必须通过HTTPS反向代理访问
    
-   禁用`shell_execution`工具或严格限制其权限
    
-   定期更新系统和Hermes Agent
    
-   使用强密码和SSH密钥登录
    

## 十、成本优化建议

1.  **入门级用户**：使用2核4GB服务器+云端API，月成本约¥30
    
2.  **本地模型用户**：选择夜间和周末按需运行GPU服务器，可节省70%成本
    
3.  **团队使用**：使用单台服务器部署多用户实例，分摊成本
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->


# Hermes Agent Mac 可复刻安装笔记

**本文针对 macOS 13 Ventura 及以上系统**，完美支持 Apple Silicon（M1/M2/M3/M4）和 Intel 芯片，提供两种安装方案：**一键安装（新手首选）** 和 **源码安装（开发者推荐）**，并包含所有实用操作技巧和学习路径。

## 一、前置准备

### 1.1 系统与硬件要求

| 配置等级 | 最低要求 | 推荐配置 | 可运行模型 |
| 入门级 | macOS 13+，8GB 内存 | M1/M2 16GB 统一内存 | Hermes 3 7B/9B Q4 |
| 进阶级 | M1 Pro/Max 16GB | M2 Pro/Max 32GB | Hermes 3 13B/34B Q4 |
| 旗舰级 | M2 Ultra 64GB | M3 Ultra 128GB | Hermes 3 70B Q4/Q8 |

**重要提示**：Apple Silicon 芯片有原生 Metal 加速，性能是同配置 Intel Mac 的 3-5 倍。Intel Mac 建议优先使用云端 API 而非本地模型。

### 1.2 必备依赖（仅需 Git）

打开终端（Command+空格 搜索 Terminal），执行：

```
# 安装 Homebrew（如果没有）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 安装 Git
brew install git

# 验证安装
git --version
```

## 二、方案一：官方一键安装（新手首选，5分钟完成）

这是 Nous Research 官方推荐的安装方式，自动处理所有依赖（Python 3.11+、Node.js、uv 包管理器等），无需手动配置环境。

### 2.1 执行一键安装脚本

```
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

**安装过程说明**：

-   脚本会自动检测系统架构（Apple Silicon/Intel）并安装对应版本
    
-   如果缺少 Homebrew 会自动安装
    
-   创建独立的 Python 虚拟环境，不会污染系统环境
    
-   注册全局 `hermes` 命令
    

### 2.2 重载 Shell 使命令生效

```
# macOS 默认使用 Zsh
source ~/.zshrc

# 如果你使用 Bash
source ~/.bashrc
```

### 2.3 验证安装成功

```
hermes version
```

如果显示版本号（如 `0.9.2`）则表示安装成功。

## 三、配置模型提供商（核心步骤）

Hermes Agent 本身不包含大模型，需要连接一个 LLM 提供商。**推荐优先使用 Ollama 本地模型**，完全免费且离线运行。

### 3.1 方案 A：Ollama 本地模型（强烈推荐）

步骤 1：安装 Ollama

```
# 一键安装 Ollama
curl -fsSL https://ollama.com/install.sh | sh
```

安装完成后，Ollama 会自动在后台运行。

步骤 2：下载 Hermes 3 模型

根据你的内存选择合适的模型：

```
# 8GB 内存推荐
ollama pull nousresearch/hermes3:7b-q4_K_M

# 16GB 内存推荐
ollama pull nousresearch/hermes3:13b-q4_K_M

# 32GB 以上内存推荐
ollama pull nousresearch/hermes3:34b-q4_K_M
```

步骤 3：在 Hermes Agent 中配置 Ollama

```
hermes model
```

在交互式菜单中选择：

1.  `Ollama`
    
2.  输入模型名称（如 `nousresearch/hermes3:7b-q4_K_M`）
    
3.  确认默认配置
    

### 3.2 方案 B：云端 API（适合低配置 Mac）

如果你的 Mac 内存不足 8GB，可以使用云端 API：

```
hermes model
```

支持的提供商包括：

-   OpenAI（GPT-4o）
    
-   Anthropic（Claude 3.5 Sonnet）
    
-   DeepSeek
    
-   OpenRouter（200+ 模型可选）
    
-   Kimi
    

输入对应的 API Key 即可完成配置。

## 四、基础使用

### 4.1 启动交互式对话

```
hermes chat
```

现在你可以直接在终端中与 Hermes Agent 对话，它会自动调用工具完成复杂任务。

### 4.2 常用命令速查

```
# 查看所有可用命令
hermes help

# 配置模型
hermes model

# 管理工具（启用/禁用）
hermes tools

# 查看运行状态
hermes status

# 启动内置 Web 管理面板
hermes dashboard

# 更新 Hermes Agent
hermes update

# 卸载 Hermes Agent
hermes uninstall
```

## 五、进阶：图形界面与增强功能

### 5.1 使用官方内置 Dashboard

Hermes Agent v0.9.0 起集成了 Web 管理面板：

```
# 启动 Dashboard（默认端口 8080）
hermes dashboard

# 指定端口启动
hermes dashboard --port 3000
```

打开浏览器访问 `http://localhost:8080`，可以查看：

-   运行状态和资源占用
    
-   历史对话记录
    
-   工具调用日志
    
-   系统配置
    

### 5.2 安装 Open WebUI（更强大的图形界面）

Open WebUI 是一个功能丰富的开源聊天界面，完美兼容 Hermes Agent。

步骤 1：安装 Docker Desktop

从 [Docker 官网](https://www.docker.com/products/docker-desktop/) 下载并安装 Docker Desktop for Mac。

步骤 2：启动 Hermes API 服务

```
hermes gateway
```

看到 `[API Server] API server listening on http://127.0.0.1:8642` 表示启动成功。

步骤 3：启动 Open WebUI

```
docker run -d \
  --name open-webui \
  --add-host=host.docker.internal:host-gateway \
  -p 3000:8080 \
  ghcr.io/open-webui/open-webui:main
```

步骤 4：配置连接

1.  打开浏览器访问 `http://localhost:3000`
    
2.  创建管理员账号
    
3.  点击头像 → Admin Settings → Connections
    
4.  在 OpenAI API 下点击 "Add New Connection"
    
5.  填写：
    

-   URL: `http://host.docker.internal:8642/v1`
    
-   API Key: 任意字符串（如 `test123`）
    

6.  保存后即可在模型列表中选择 Hermes Agent
    

### 5.3 启用工具调用（Hermes 核心功能）

Hermes Agent 内置了 50+ 实用工具，默认已启用常用工具：

```
# 查看所有可用工具
hermes tools list

# 启用特定工具
hermes tools enable web_search
hermes tools enable code_interpreter
hermes tools enable file_system

# 禁用工具
hermes tools disable shell_execution
```

**常用工具说明**：

-   `web_search`：联网搜索最新信息
    
-   `code_interpreter`：执行 Python 代码，数据分析
    
-   `file_system`：读写本地文件
    
-   `shell_execution`：执行终端命令（谨慎使用）
    
-   `image_generation`：生成图片
    

## 六、Apple Silicon 优化技巧

### 6.1 确认 Metal 加速已开启

Ollama 在 Apple Silicon 上会自动启用 Metal 加速，验证方法：

```
ollama run nousresearch/hermes3:7b-q4_K_M
```

在另一个终端执行：

```
ollama ps
```

查看输出中的 `GPU Layers` 列，如果显示全部层数（如 35/35）则表示完全 GPU 加速。

### 6.2 性能调优参数

创建或编辑 `~/.ollama/config` 文件，添加：

```
# 增加并行处理能力
OLLAMA_NUM_PARALLEL=2

# 增加上下文窗口大小
OLLAMA_CONTEXT_WINDOW=8192

# Apple Silicon 不需要设置 OLLAMA_NUM_GPU，自动检测
```

重启 Ollama 生效：

```
ollama serve restart
```

## 七、常见问题与排错

### 7.1 安装脚本失败

-   网络问题：使用国内镜像源
    

```
# 临时使用 GitHub 镜像
curl -fsSL https://ghp.ci/https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

-   权限问题：不要使用 `sudo` 运行安装脚本
    
-   依赖冲突：先卸载系统自带的 Python，使用 Homebrew 安装的版本
    

### 7.2 模型下载慢

使用 Hugging Face 镜像：

```
# 安装 huggingface-cli
brew install huggingface-cli

# 使用镜像下载模型
export HF_ENDPOINT=https://hf-mirror.com
huggingface-cli download nousresearch/Hermes-3-7B-GGUF hermes-3-7b.Q4_K_M.gguf --local-dir ~/.ollama/models
```

### 7.3 内存不足

-   使用更小的量化模型（如 Q3\_K\_M 代替 Q4\_K\_M）
    
-   关闭其他占用内存的应用
    
-   增加交换空间（不推荐，会影响性能）
    

### 7.4 端口冲突

修改默认端口：

```
# Hermes API 端口
hermes gateway --port 8643

# Ollama 端口
export OLLAMA_HOST=0.0.0.0:11435
ollama serve
```

## 八、学习资源与进阶路径

### 8.1 官方资源

-   [官方文档](https://hermes-agent.nousresearch.com/docs/)：最权威的使用指南
    
-   [GitHub 仓库](https://github.com/NousResearch/hermes-agent)：查看源码和提交 issue
    
-   [Discord 社区](https://discord.gg/nousresearch)：与开发者和其他用户交流
    

### 8.2 学习路径

1.  **基础阶段**：熟悉终端命令和常用工具，尝试简单任务（如写代码、查资料）
    
2.  **进阶阶段**：学习自定义工具，配置多智能体系统
    
3.  **高级阶段**：微调 Hermes 模型，开发自己的智能体应用
    

### 8.3 实用项目推荐

-   本地知识库助手：结合 LangChain 和 Chroma
    
-   代码审查工具：集成 Git 和代码分析工具
    
-   自动化办公助手：处理邮件、表格和文档
    

## 九、方案二：源码安装（开发者推荐）

如果你想要修改 Hermes Agent 的代码或者贡献代码，可以使用源码安装方式。

### 9.1 克隆仓库

```
git clone https://github.com/NousResearch/hermes-agent.git
cd hermes-agent
```

### 9.2 创建虚拟环境并安装依赖

```
# 安装 uv 包管理器（比 pip 快 10-100 倍）
curl -LsSf https://astral.sh/uv/install.sh | sh

# 创建虚拟环境并安装依赖
uv venv
source .venv/bin/activate
uv pip install -e .
```

### 9.3 运行开发版本

```
python -m hermes_agent chat
```

### 9.4 更新代码

```
git pull
uv pip install -e .
```
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->



# **TC老师Web3+AI时代开发者能力分享会详细总结**

本次分享会由安全领域技术专家TC老师主讲，聚焦**AI时代Web3开发者核心能力**，以「理论答疑+支付系统实战案例+钱包核心原理+行业就业答疑」为核心，深度拆解Web2与Web3的技术关联、AI与开发者的协作边界、Web3核心技术底层逻辑，同时解答大量学员实操、学习、就业相关问题，核心知识点整理如下：

## 一、核心认知答疑：破除Web3与AI开发常见误区

本部分为分享开篇核心，解答开发者最关心的两大基础问题，奠定整体技术认知基调。

### 1\. 有AI加持，开发者是否还需要学习技术基础知识？

**核心结论：AI不会降低开发复杂度，反而对开发者能力要求更高，基础知识和架构能力必不可少**。

-   **人机明确协作边界**：人类开发者负责顶层方案设计、方案合理性评估、AI代码成果验收、问题排查与复盘；AI仅作为辅助工具，负责细化技术方案、梳理数据流、落地编码、补充开发者遗漏的细节逻辑。
    
-   **AI高质量编码的核心前提**：AI编码质量的关键是**自我验证能力**，通过反复编写、校验迭代，输出合规代码，但该过程需要人类开发者把控整体方向，否则AI会出现逻辑偏差、代码漏洞。
    
-   **基础能力的不可替代性**：若开发者底层知识、架构能力薄弱，无法辨别AI输出内容的对错、逻辑漏洞、方向偏差，无法规避AI编码带来的安全风险，最终导致项目隐患。
    

### 2\. Web2与Web3技术体系是否完全割裂？

**核心结论：二者并非独立体系，高度互通，Web3大量复用Web2技术能力**。

-   **技术复用现状**：主流Web3项目（交易所、链上衍生品平台等）中，Web2技术占比极高，后端服务、状态管理、接口交互等核心能力均依赖成熟的Web2技术栈，Web3并非仅局限于智能合约开发。
    
-   **核心差异本质**：Web2完全依赖中心化机构的信用背书（信任权威平台）；Web3通过算法共识、代码透明性，解决中心化信任弊端。
    
-   **Web3安全核心准则**：安全无法事后补救，必须**源于设计、贯穿项目全生命周期**。审计仅为锦上添花，无法兜底安全；Web3安全是0和1的绝对概念，不存在折中，基础架构薄弱则所有安全优化都是空中楼阁。
    

## 二、实战案例拆解：Web2与Web3支付系统技术对比

本次分享以**支付系统**为落地案例，直观展示Web2到Web3的技术升级逻辑，是理解Web3架构的核心切入点。

### 1\. Web2传统支付系统模型

-   **参与主体**：普通用户、电商平台、支付服务、银行金融机构（中心化核心）。
    
-   **完整流程**：用户电商下单→支付服务向银行获取支付单据→用户法币转账付款→银行确认到账并回调支付服务→支付服务同步状态至电商平台→平台完成发货履约。
    
-   **资金流转路径**：用户银行卡 → 支付服务对公银行卡 → 定时清算至电商平台银行卡。
    
-   **安全与信任机制**：服务间通过API Key、Secret Key完成身份校验；用户侧依赖支付密码、MFA多重风控；全程高度信任银行、支付平台等中心化机构，默认机构不会造假、不会作恶。
    
-   **核心痛点**：完全依赖中心化权威，存在机构跑路、数据篡改、规则变更等未知风险。
    

### 2\. Web3链上支付系统升级逻辑

-   **核心改造**：仅将Web2的中心化银行金融机构，替换为**区块链分布式网络**，整体业务架构、资金流转逻辑完全复用Web2体系，学习门槛大幅降低。
    
-   **新增核心组件**：链上监听服务。区块链无法主动对外网服务发起请求，需通过监听、轮询的方式拉取链上交易数据，完成交易解析、状态回调。
    
-   **信任问题解决方案**：① 区块链共识算法保障数据**不可篡改**，杜绝中心化造假；② 智能合约代码公开透明，执行逻辑可全员校验、可追溯。
    
-   **支付服务层变化**：对前端用户、商户而言，使用体验与Web2几乎无差异，底层信任逻辑彻底重构，无需依赖第三方权威机构。
    

## 三、Web3核心模块：钱包体系全维度详解

钱包是Web3生态的核心基础设施，是身份认证、资产管控的核心载体，也是安全风险最高的模块，本次分享做了全方位拆解。

### 1\. 钱包核心本质与签名原理

-   **两大核心功能**：身份认证（证明账户归属权）、资产确权（掌控链上资产交易、操作权限）。
    
-   **签名核心逻辑**：私钥为固定不变的唯一标识，通过「私钥+自定义消息」生成唯一签名；第三方可验证签名合法性，全程无需泄露私钥，依托数学算法绝对安全。
    
-   **关键安全特性**：私钥永久不变，但消息不同则签名不同；**私钥一旦泄露、丢失，资产将完全失控，无任何找回途径**，链上仅识别私钥身份，不识别用户本人。
    

### 2\. 钱包全维度分类体系

（1）按底层技术形态分类

-   **EOA私钥钱包**：传统外部账户，单一私钥掌控全部资产，使用简单但风险集中，私钥泄露即资产归零。
    
-   **合约钱包**：基于链上智能合约实现的钱包，天然支持多签权限，适用于企业、DAO团队、机构资产管理。
    
-   **AA账户抽象钱包**：Web3未来核心趋势，旨在融合EOA钱包与合约钱包的优势，统一账户体系；目前技术尚未完全成熟（EIP-4337、3074、17702均为迭代方案），生态落地较少。
    

（2）按多签技术方案分类

-   **MPC多方签名钱包**：将单一私钥拆分为多份分片，由多方分别持有，需达到预设签名阈值（如2/3、3/5）方可完成交易，无需链上合约支撑，适配多链生态。
    
-   **合约多签钱包**：通过智能合约定义多签权限规则，是目前机构、团队资产管理的主流方案，安全性高、规则透明。
    

（3）按私钥托管模式分类

-   **自托管钱包**：私钥由用户自主持有，安全性最高，资产风险完全由用户承担。
    
-   **全托管钱包**：私钥由平台托管（如主流交易所），用户无需管理私钥、操作便捷，但存在平台跑路、风控冻结风险。
    
-   **混合托管钱包**：结合MPC多签技术，用户与服务商各持有部分私钥分片，单方无法独立完成交易，平衡了安全性与便捷性，是目前主流优化方案。
    

（4）其他细分钱包类型

-   硬件钱包：离线物理设备存储私钥，抵御网络攻击，安全性顶级；
    
-   隐私钱包：基于ZK零知识证明技术，隐匿链上交易信息，保护用户隐私；
    
-   分层钱包：通过路径算法批量管理多账户私钥，适用于企业批量账户管理、BTC生态场景。
    

### 3\. 钱包核心安全风险与行业解决方案

-   **核心风险1**：私钥泄露、丢失，造成不可逆资产损失，无任何补救方式；
    
-   **核心风险2**：签名钓鱼欺骗，恶意平台伪造交易消息，用户误签名后资产被盗；
    
-   **行业防护方案**：通过EIP721签名可视化迭代，优化交易信息展示，降低钓鱼风险；官方废弃高危eth\_sign方法，杜绝恶意交易签名漏洞；
    
-   **核心原则**：开发者必须吃透钱包底层原理，否则所有安全防护都是形式化操作，无法规避系统性风险。
    

## 四、链上交易全生命周期与核心技术参数

### 1\. 链上交易完整流程

构造交易（确定转账地址、金额、自定义数据）→ 私钥签名确权 → 广播交易至区块链节点 → 节点共识、区块打包 → 链上账本状态更新，交易正式生效。

### 2\. 交易核心关键参数

-   **Gas机制**：决定交易上链优先级与手续费成本，核心包含Gas Limit（交易资源消耗上限，固定值）、Gas Price（单位资源手续费，自定义）；
    
-   **EIP1559升级优化**：替代传统Gas定价模型，新增Base Fee（基础手续费）、Tip Fee（矿工小费）、Max Fee（最大手续费上限），解决链上交易拥堵、手续费混乱问题；
    
-   **Data字段（核心灵魂）**：区块链若仅支持转账无任何生态价值，Data字段支持自定义指令、合约交互、数据写入，是所有链上DApp、智能合约生态百花齐放的核心基础，可类比编程语言解析器，执行各类自定义逻辑。
    

### 3\. 链上交易监听实现方案

主流两种技术实现方式，适配不同业务场景：

-   **HTTP轮询**：主动批量查询区块交易数据，实现简单、稳定性高，适合常规业务场景；
    
-   **WebSocket长连接**：订阅区块事件，实时推送交易信息，底层仍为轮询逻辑封装，实时性更强；
    
-   **实操落地建议**：多链监听索引项目，可采用「Go协程+Redis」架构搭建，参考开源项目**ep-usdt**（GM WAS团队开发）的多链收款监听逻辑，适配高并发场景。
    

## 五、学员问答核心干货（学习、实操、就业、赛道前景）

### 1\. 技术实操问题解答

-   **链上小额免密支付**：纯支付层无可行落地方案，核心瓶颈是信任风险；可通过**账户层优化**解决，采用MPC多签拆分权限，设置单日交易限额、高频拦截、时段风控等规则，平衡便捷与安全；
    
-   **大数据在Web3的应用**：需求远低于Web2，非刚需技术，仅在量化交易策略、链上数据分析场景少量落地，普通开发者无需重点深耕；
    
-   **跨链赛道技术现状**：目前行业无完全去中心化的跨链方案，中心化跨链仍是主流；熊市赛道需求低迷，牛市随多链生态繁荣会小幅增长，岗位核心考察风险把控、跨链漏洞识别能力。
    

### 2\. 技术学习与基础搭建

-   **密码学学习深度**：无需深挖复杂理论，以落地为导向，重点掌握MPC算法、椭圆算法、ZK零知识证明的**运行逻辑、交互流程、漏洞风险**，能落地方案、清晰讲解原理即可；
    
-   **文科生入行Web3**：AI时代文理边界大幅弱化，无需深厚理科基础，核心培养逻辑拆解、架构分层、问题分析能力；
    
-   **Debug能力提升**：核心是逆向思维，从运行结果倒推代码逻辑，多拆解字节码、汇编底层逻辑，通过大量实操积累问题排查经验。
    

### 3\. 行业就业与求职技巧

-   **Web3面试考察重点**：一面侧重底层基础知识、技术八股；二三面侧重架构设计、场景解题、风险分析；新增**AI工具使用能力**考察，关注AI落地开发的实际场景；
    
-   **高效求职方法**：对标目标企业岗位JD，让AI拆解能力要求，针对性查漏补缺；优先直接投递项目方官网，海外非华人团队门槛相对宽松；
    
-   **智能合约审计岗**：看重实操能力与项目背书，无捷径，完全对标岗位JD补齐技术栈、积累实战案例；
    
-   **风控赛道前景**：行业合规化是必然趋势，牌照相关风控需求持续增长，岗位需求稳步提升。
    

### 4\. 主流赛道与技术前景判断

-   **AA钱包**：长期必然是行业趋势，以太坊官方主推，适配AI生态、权限管控更灵活，未来生态会持续成熟；
    
-   **Uniswap V4、402协议、Agent支付**：目前落地场景有限，行业普及度低，短期就业和落地前景一般；
    
-   **链上监听服务**：企业主流方案为「付费订阅RPC服务+多源校验」，自研成本高、性价比低，不建议中小企业自研；
    
-   **整体行业现状**：当前熊市整体岗位需求低迷，多数赛道增量有限，等待牛市生态爆发后，多链交互、链上应用、安全风控赛道会迎来需求增长。
    

## 六、分享核心总结

1.  AI是开发者的辅助工具，无法替代底层基础与架构能力，AI时代对Web3开发者的专业门槛更高；
    
2.  Web3并非全新技术体系，高度复用Web2成熟能力，核心革新是**去中心化信任机制**；
    
3.  钱包、签名、链上交易是Web3开发的核心底层，所有上层生态都基于此搭建，安全必须前置设计；
    
4.  入行学习以「落地场景+岗位需求」为导向，拒绝盲目学理论，依托AI高效补齐技术短板，聚焦安全、架构、实操核心能力。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
