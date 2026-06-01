---
timezone: UTC+8
---

# tobaizhizhi

**GitHub ID:** tobaizhizhi

**Telegram:** @Baizhizhi123

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->
思考了黑客松思路。
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->

继续学习了langchain
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->


详细学习了几种借贷协议清算机制
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->



学习了提示词工程
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->




**MCP 学习笔记：Tools、Resources、Prompts 与 Client Features**

MCP，全称 Model Context Protocol，可以理解为一种让 AI 应用和外部系统连接的协议。它让模型不仅能“聊天”，还能读取上下文、调用工具、执行任务，并且通过客户端和用户控制机制保证安全。

MCP 里几个核心概念包括：

| 概念 | 作用 | 简单理解 |
| --- | --- | --- |
| Tools | 执行动作 | 让 AI 做事 |
| Resources | 提供资料 | 给 AI 上下文 |
| Prompts | 任务模板 | 给用户一个标准流程入口 |
| Host | 用户使用的应用 | 比如 Claude.ai、IDE |
| Client | 连接 Server 的协议组件 | Host 内部的通信通道 |
| Server | 提供能力的一方 | 提供工具、资源、提示词等 |

**1\. Tools：工具**

Tools 是 MCP 中让 AI 执行动作的机制。

比如：

`searchFlights(origin: "NYC", destination: "Barcelona", date: "2024-06-15") createCalendarEvent(title: "Barcelona Trip", startDate: "2024-06-15", endDate: "2024-06-22") sendEmail(to: "team@work.com", subject: "Out of Office", body: "...")`

Tools 的特点是：

-   每个工具通常只做一件明确的事
    
-   输入输出由 JSON Schema 定义
    
-   模型可以发现并调用工具
    
-   高风险操作通常需要用户批准
    
-   适合查航班、发邮件、创建日历、订酒店等动作
    

一句话：**Tools 是让 AI 执行具体操作的函数。**

**2\. Resources：资源**

Resources 是给 AI 提供上下文信息的机制。

比如：

`calendar://events/2024 file:///Documents/Travel/passport.pdf trips://history/barcelona-2023 weather://forecast/barcelona/2024-06-15`

Resources 可以来自：

-   文件
    
-   API
    
-   数据库
    
-   日历
    
-   历史记录
    
-   用户偏好
    

Resources 有两种形式：

| 类型 | 含义 | 例子 |
| --- | --- | --- |
| Direct Resources | 固定 URI 的资源 | calendar://events/2024 |
| Resource Templates | 带参数的动态资源 | weather://forecast/{city}/{date} |

比如：

`weather://forecast/barcelona/2024-06-15 travel://activities/barcelona/museums`

Resources 的重点不是执行动作，而是提供信息。

一句话：**Resources 是 AI 用来理解上下文的数据来源。**

**3\. Prompts：提示词模板**

Prompts 是可复用的任务模板，通常由用户主动调用。

比如旅行规划模板：

`{ "name": "plan-vacation", "title": "Plan a vacation", "arguments": [ { "name": "destination", "type": "string", "required": true }, { "name": "duration", "type": "number" }, { "name": "budget", "type": "number" }, { "name": "interests", "type": "array" } ] }`

用户可以通过类似下面的方式调用：

`/plan-vacation`

然后填写：

`Barcelona, 7 days, $3000, ["beaches", "architecture", "food"]`

Prompts 的特点是：

-   用户主动调用
    
-   可以带参数
    
-   可以标准化常见任务
    
-   可以结合 Resources 和 Tools 完成完整流程
    

一句话：**Prompts 是把常见任务包装成可复用流程的模板。**

**4\. Tools、Resources、Prompts 的区别**

| 概念 | 主要作用 | 旅行例子 |
| --- | --- | --- |
| Tools | 做事 | 查航班、订酒店、发邮件 |
| Resources | 给资料 | 日历、护照、旅行偏好 |
| Prompts | 开流程 | “帮我规划一次旅行”模板 |

完整流程可以这样理解：

`用户调用 Prompt ↓ 应用读取 Resources 作为上下文 ↓ AI 根据需要调用 Tools 执行动作`

例如：

`Prompt: /plan-vacation Resources: calendar://events/2024, trips://history/barcelona-2023 Tools: searchFlights(), bookHotel(), sendEmail()`

**5\. Host、Client、Server 的关系**

MCP 中还有三个重要角色：

`用户 ↓ Host 应用 ↓ MCP Client ↓ MCP Server`

Host 是用户真正使用的软件，比如：

-   Claude.ai
    
-   IDE
    
-   AI 桌面应用
    

Client 是 Host 内部的协议组件，负责和某个 MCP Server 通信。

Server 是提供能力的一方，可以提供：

-   Tools
    
-   Resources
    
-   Prompts
    

如果一个 Host 连接多个 Server，就可能有多个 Client：

`Host ├─ Client A → Travel Server ├─ Client B → Weather Server └─ Client C → Calendar Server`

一句话：**Host 是用户看到的应用，Client 是连接 Server 的通信组件，Server 是提供能力的服务。**

**6\. Elicitation：向用户临时询问信息**

Elicitation 是 Server 在执行过程中向用户请求额外信息的机制。

比如旅行 Server 准备订票前，需要确认：

-   是否确认预订
    
-   喜欢靠窗还是靠过道
    
-   酒店要海景房还是城景房
    
-   是否添加旅行保险
    

流程是：

`Server 发起 elicitation/create ↓ Client 显示表单 ↓ 用户填写或确认 ↓ Client 返回结果 ↓ Server 继续执行`

Elicitation 的好处是：

-   不需要一开始收集所有信息
    
-   缺少信息时不用直接失败
    
-   可以在关键节点让用户确认
    
-   表单可以通过 schema 自动生成和校验
    

一句话：**Elicitation 是 Server 做事做到一半时，向用户要必要信息的机制。**

**7\. Roots：文件系统范围提示**

Roots 是 Client 告诉 Server：“你应该关注这些文件夹”的机制。

例子：

`{ "uri": "file:///Users/agent/travel-planning", "name": "Travel Planning Workspace" }`

它表示当前工作范围是：

`/Users/agent/travel-planning`

Roots 的作用是：

-   告诉 Server 当前项目目录
    
-   帮 Server 聚焦文件范围
    
-   避免误读、误写无关目录
    
-   组织工作区边界
    

但有一个重点：

**Roots 不是安全边界。**

它只是告诉 Server “应该”在哪些目录里工作，但不能真正阻止恶意 Server 访问其他地方。真正的安全限制要靠：

-   操作系统权限
    
-   沙箱
    
-   文件权限
    
-   Host/Client 的访问控制
    

一句话：**Roots 是文件范围提示，不是真正的安全隔离。**

**8\. Sampling：Server 请求 Client 调用大模型**

Sampling 是 Server 请求 Client 帮它调用 LLM 的机制。

比如 Travel Server 查到了 47 个航班，但它自己没有大模型能力。它可以请求 Client：

`请分析这些航班，并根据用户偏好推荐最合适的。 用户偏好：早上出发，最多转机一次。`

流程是：

`Server 发起 sampling/createMessage ↓ Client 让用户审批 ↓ Client 调用 LLM ↓ LLM 返回分析结果 ↓ 用户可再次确认 ↓ Client 把结果返回 Server`

Sampling 的特点是：

-   Server 不需要自己接入模型
    
-   Client 控制用哪个模型
    
-   用户可以审批、修改或拒绝请求
    
-   可以防止 Server 偷偷发送敏感信息
    
-   适合复杂判断，比如航班推荐、数据分析、摘要生成
    

一句话：**Sampling 是 Server 通过 Client 间接请求 LLM 帮忙思考。**

**9\. 一个完整旅行规划例子**

用户调用：

`{ "prompt": "plan-vacation", "arguments": { "destination": "Barcelona", "departure_date": "2024-06-15", "return_date": "2024-06-22", "budget": 3000, "travelers": 2 } }`

应用读取 Resources：

`calendar://my-calendar/June-2024 travel://preferences/europe travel://past-trips/Spain-2023`

AI 调用 Tools：

`searchFlights() checkWeather() bookHotel() createCalendarEvent() sendEmail()`

如果缺少信息，Server 用 Elicitation 问用户：

`是否确认预订？ 座位偏好是什么？ 是否购买旅行保险？`

如果 Server 需要模型分析航班，就用 Sampling：

`请帮我从 47 个航班中选出最适合用户偏好的 3 个。`

如果涉及文件，Client 用 Roots 告诉 Server 工作目录范围：

`file:///Users/agent/travel-planning file:///Users/agent/client-documents`

最终，MCP 把多个 Server 的能力组合起来，让 AI 能完成一个复杂任务：**根据用户日历、偏好、预算和旅行历史，规划并预订一次旅行。**

**最终总结**

MCP 的核心可以这样记：

`Prompts 负责启动任务 Resources 负责提供上下文 Tools 负责执行动作 Elicitation 负责中途向用户要信息 Roots 负责告诉 Server 文件范围 Sampling 负责让 Server 借助 Client 调用大模型 Host/Client/Server 负责整体连接结构`

最简洁的一句话：

**MCP 是一种让 AI 安全、结构化地连接外部工具、数据和工作流的协议。**
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->





学习了rag有关知识
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->






使用了一下cobo的工具，思考了项目思路，
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->







去了趟医院休息一天
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->








学习了uniswapV2相关知识，并学习使用了ai的skill功能。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->









学习了agent有关知识。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->










做了两关ethernaut
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
