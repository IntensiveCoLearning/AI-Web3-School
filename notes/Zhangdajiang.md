---
timezone: UTC+8
---

# Zhangdajiang

**GitHub ID:** Zhangdajiang

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->
# 1\. 最小安装与启动流程

官方 Quickstart 的重点不是“炫功能”，而是先让一个基本聊天稳定跑起来。文档反复强调：如果 Hermes 不能完成普通聊天，不要急着加 gateway、cron、skills、voice、routing 等高级功能。

最短路线：

```
pip install hermes-agent
hermes postinstall
hermes model
hermes
```

或者用 git installer：

```
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

Windows 官方更推荐先用 WSL2，再在 WSL2 里跑 Linux/macOS/WSL2 的安装命令；原生 Windows 是 early beta。

模型配置是第一大坑。官方要求模型至少 64K context，因为 Hermes 的多步工具调用工作流需要足够上下文；如果本地模型或自建 endpoint 小于 64K，会在启动时被拒绝。

你真正要记：

```
第一步不是折腾插件。
第一步是：

hermes model
↓
选 provider
↓
hermes
↓
确认它能正常多轮对话
↓
确认它能用 terminal / file / web 之类工具
```

* * *

# 2\. Hermes 的核心执行循环

Hermes 的核心类是 `AIAgent`，在 `run_agent.py` 里。官方说这个类负责系统提示词组装、provider 选择、工具调度、conversation history、压缩、重试、fallback、iteration budget、memory flush 等。

它的 agent loop 可以压成：

```
用户输入
↓
追加到 conversation history
↓
构建 / 复用 system prompt
↓
检查上下文是否需要压缩
↓
按 provider 格式组装 API messages
↓
调用模型
↓
如果模型返回 tool_calls：
    执行工具
    把工具结果写回 history
    回到模型调用
↓
如果模型返回 text：
    保存 session
    必要时 flush memory
    返回最终回答
```

官方文档原文的 turn lifecycle 也是这个流程：append user message、build system prompt、preflight compression、build API messages、make API call、parse response；如果有 tool\_calls 就执行工具并 loop back，如果是文本响应就持久化 session 并返回。

这点非常重要：

```
Hermes 的核心不是“模型一次回答”。
Hermes 的核心是“模型 — 工具 — 模型 — 工具”的循环。
```

* * *

# 3\. Toolsets：Hermes 的手脚

Hermes 的 tools 是函数，toolsets 是工具分组，可以按平台启用或禁用。官方列出的工具范围很广，包括 web search、browser automation、terminal execution、file editing、memory、delegation、RL training、messaging delivery、Home Assistant、MCP 等。

常见工具类别：

```
web
= web_search, web_extract

terminal / file
= terminal, process, read_file, patch

browser
= browser_navigate, browser_snapshot, browser_vision

media
= vision_analyze, image_generate, video_generate, text_to_speech

agent orchestration
= todo, clarify, execute_code, delegate_task

memory
= memory, session_search

automation
= cronjob, send_message

integrations
= Home Assistant, MCP server tools, RL tools
```

官方文档还说，可以用：

```
hermes tools
```

查看和配置工具，也可以指定某次聊天启用哪些 toolsets：

```
hermes chat --toolsets "web,terminal"
```

常见 toolsets 包括 `web`、`terminal`、`file`、`browser`、`vision`、`skills`、`memory`、`session_search`、`cronjob`、`code_execution`、`delegation`、`clarify`、`safe`、`rl` 等。

你要把它和 OpenAI Agents SDK 对上：

```
OpenAI Agents SDK 里：
你自己写 function_tool。

Hermes 里：
它已经内置了一大堆工具和工具组。
你主要是配置能不能用、在哪个平台能用、用哪个后端执行。
```

* * *

# 4\. Terminal backend：它能在哪里执行命令

Hermes 的 terminal 工具可以在多个后端执行命令。官方列出 local、docker、ssh、singularity、modal、daytona、vercel\_sandbox 等后端。

理解方式：

```
local
= 直接在你本机执行。方便，但风险最高。

docker
= 在容器里执行。更安全，更适合生产或不完全信任的任务。

ssh
= 在远程服务器执行。适合把 agent 和自己本机隔离。

modal / daytona / vercel_sandbox
= 云端沙箱 / serverless / 远程 workspace。
```

官方特别说 Docker backend 是一个长期运行的 persistent container，不是每条命令新开一个容器；你装过的包、切过的目录、写过的 `/workspace` 文件，在 Hermes 进程生命周期内会保留。

这个设计很关键：

```
Hermes 不是只能在你电脑上“说话”。
它可以在隔离环境里持续执行任务。
```

* * *

# 5\. Memory：它怎么记住你和项目

Hermes 有两类内置持久记忆文件：

```
MEMORY.md
= agent 自己的笔记：环境事实、项目约定、学到的经验。

USER.md
= 用户画像：偏好、沟通风格、期待、技术水平。
```

官方说这两个文件都在 `~/.hermes/memories/`，session 开始时会作为 frozen snapshot 注入 system prompt。注意：记忆在 session 中被修改后会立刻写入磁盘，但不会在当前 session 的 system prompt 中刷新，要到下一个 session 才进入提示词；这样做是为了保持 prompt cache 稳定。

容量很小：

```
MEMORY.md：2200 chars，大约 800 tokens
USER.md：1375 chars，大约 500 tokens
```

所以它不是拿来塞长文档的。官方明确建议保存用户偏好、环境事实、项目约定、修正、完成工作等；不要保存琐碎信息、容易重新发现的事实、大段原始数据、一次性调试上下文。

Hermes 还有 `session_search`，它会把 CLI 和 messaging sessions 存在 SQLite 里，用 FTS5 做全文搜索。官方把 memory 和 session\_search 区分得很清楚：memory 是关键事实，始终进上下文；session\_search 是按需查过去对话，容量不限，不消耗 LLM 调用。

你要这样记：

```
memory
= 必须长期带在身上的小纸条。

session_search
= 过去所有聊天记录的搜索引擎。
```

* * *

# 6\. Skills：Hermes 的“程序性记忆”

Skills 是 Hermes 最有意思的部分之一。官方定义：skills 是 agent 需要时加载的 on-demand knowledge documents，采用 progressive disclosure，目的是减少 token 使用；所有 skills 默认在 `~/.hermes/skills/`。

一个 skill 本质上是一个目录，核心文件是 `SKILL.md`：

```
~/.hermes/skills/
└── some-skill/
    ├── SKILL.md
    ├── references/
    ├── templates/
    ├── scripts/
    └── assets/
```

官方给的 `SKILL.md` 格式包括 frontmatter，例如 name、description、version、platforms、requires\_toolsets、config，然后正文里写 When to Use、Procedure、Pitfalls。

Progressive disclosure 的意思是：

```
Level 0:
只加载技能列表：name + description + category

Level 1:
需要时加载完整 SKILL.md

Level 2:
必要时加载 skill 里的具体参考文件
```

官方说 agent 只在真正需要时加载完整 skill 内容。

这和普通 prompt 最大区别是：

```
普通 prompt：
所有规则一开始都塞进去，浪费上下文。

Hermes skills：
先只给目录，需要哪个再加载哪个。
```

更关键的是：Hermes agent 可以通过 `skill_manage` 自己创建、更新、删除 skills。官方把它叫 procedural memory：当 agent 发现一个非平凡工作流，就能保存成 skill，未来复用。触发场景包括完成 5+ tool calls 的复杂任务、踩坑后找到正确路径、用户纠正了它、发现了非平凡流程。

这就是官方说 “self-improving” 的核心技术抓手之一：

```
不是模型权重变了。
而是 agent 把做事流程沉淀成 SKILL.md。
```

* * *

# 7\. Context Files：项目级指令怎么注入

Hermes 会自动发现并加载项目上下文文件。支持：

```
.hermes.md / HERMES.md
AGENTS.md
CLAUDE.md
SOUL.md
.cursorrules
.cursor/rules/*.mdc
```

官方说明了优先级：每个 session 只加载一种 project context，优先级是 `.hermes.md` → `AGENTS.md` → `CLAUDE.md` → `.cursorrules`；`SOUL.md` 独立加载，用作 agent identity。

`AGENTS.md` 是主要项目上下文文件，用来告诉 agent 项目结构、代码约定、架构和特殊注意事项。Hermes 启动时会加载当前工作目录的 `AGENTS.md`，并且在 agent 访问子目录文件时，逐步发现子目录里的 `AGENTS.md`，避免一开始把所有上下文塞爆。

你应该这样用：

```
AGENTS.md 放项目规则：
- 项目架构
- 代码规范
- 测试命令
- 不要碰哪些文件
- 端口、目录、部署方式

SOUL.md 放 agent 性格：
- 回答风格
- 语气
- 偏好
```

官方还说上下文文件会做安全扫描，超出 20,000 字符会截断。

* * *

# 8\. Delegation：子 agent 并行干活

Hermes 的 `delegate_task` 可以启动 child AIAgent。每个 child agent 有隔离上下文、受限 toolsets、独立 terminal session；子 agent 只把最终摘要带回父 agent 上下文。

最关键的坑：

```
Subagents Know Nothing.
```

官方说，子 agent 开始时是全新 conversation，不知道父 agent 的历史消息、之前工具调用、此前讨论内容。它唯一知道的是父 agent 在 `goal` 和 `context` 字段里传给它的内容。

所以坏写法：

```
delegate_task(goal="Fix the error")
```

好写法：

```
delegate_task(
  goal="Fix the TypeError in api/handlers.py",
  context="具体错误、文件路径、函数名、项目位置、Python 版本、复现方式……",
  toolsets=["terminal", "file"]
)
```

官方默认最多并发 3 个 subagents，可配置，没有硬上限。

你要这样理解：

```
delegation 不是“让几个 agent 聊天”。
它是把明确子任务丢给隔离 worker。
```

适合：

```
并行研究多个主题
代码审查 + 修复
多文件重构
把大任务拆成几个互不污染的子任务
```

* * *

# 9\. Cron：让 agent 定时执行任务

Hermes 支持 scheduled tasks，官方称为 Cron。它可以用自然语言或 cron 表达式创建一次性或周期任务，可以暂停、恢复、编辑、触发、删除，可以加载一个或多个 skills，可以把结果发回原聊天、本地文件或配置好的平台。

例子：

```
/cron add 30m "Remind me to check the build"
/cron add "every 2h" "Check server status"
/cron add "every 1h" "Summarize new feed items" --skill blogwatcher
```

也可以直接用自然语言：

```
Every morning at 9am, check Hacker News for AI news and send me a summary on Telegram.
```

官方说 Hermes 会内部用统一的 `cronjob` tool 创建任务。

有个限制很重要：cron-run sessions 不能递归创建更多 cron jobs，防止 runaway scheduling loop。

你要这样记：

```
cron = 让 Hermes 从“你问它才干活”
变成“到时间自己干活”。
```

适合：

```
每日新闻摘要
定时检查服务器
定时检查 GitHub PR
每天整理学习材料
每周生成项目报告
```

* * *

# 10\. MCP：接外部工具服务器

Hermes 支持 MCP。官方说 MCP 让 Hermes 连接外部 tool servers，从而使用 Hermes 自身之外的工具，例如 GitHub、数据库、文件系统、浏览器栈、内部 API 等。

MCP 的价值：

```
不用给 Hermes 原生写工具。
已有 MCP server，就能接进来。
```

两类 MCP server：

```
stdio server
= 本地子进程，通过 stdin/stdout 通信。

HTTP server
= 远程 MCP endpoint。
```

配置位置是 `~/.hermes/config.yaml` 的 `mcp_servers`。官方还说明 Hermes 会给 MCP 工具加前缀，避免和内置工具重名，格式是：`mcp_<server_name>_<tool_name>`。例如 filesystem 的 `read_file` 会注册成 `mcp_filesystem_read_file`。

它还支持 per-server filtering：

```
include
= 只暴露指定工具

exclude
= 屏蔽指定工具
```

官方说如果 include 和 exclude 同时存在，include 优先。

你要记：

```
MCP = Hermes 的外接工具生态接口。
```

* * *

# 11\. Security：别开着 yolo 乱跑

Hermes 的安全模型是 defense-in-depth。官方列了七层：用户授权、危险命令审批、容器隔离、MCP credential filtering、context file scanning、cross-session isolation、input sanitization。

危险命令审批有三种模式：

```
manual
= 默认，危险命令需要人工批准。

smart
= 用辅助 LLM 判断风险，低风险自动通过，高风险自动拒绝，不确定再问人。

off
= 关闭审批，相当于 yolo。
```

官方明确警告：`approvals.mode: off` 会关闭所有安全提示，只应该在可信环境里使用。

YOLO mode 可以通过：

```
hermes --yolo
```

或者 session 中 `/yolo` 开启。官方警告：YOLO 会绕过危险命令安全检查，但 hardline blocklist 仍然有效。hardline blocklist 包括 `rm -rf /`、fork bomb、mkfs、直接写磁盘等，不允许覆盖。

如果你以后真的用 Hermes，建议：

```
本机学习：
不要开 yolo。

生产 / 长任务：
优先 docker、ssh、modal、daytona、vercel_sandbox。

让 agent 改代码：
打开 checkpoints。

给 bot 接 Telegram/Discord：
必须配置 allowlist。
```

官方也说，在 gateway 模式下，如果没有配置 allowlists 且没有设置 allow-all，默认拒绝所有未授权用户。

* * *

# 12\. Checkpoints & Rollback：改坏了能回滚

Hermes 支持 checkpoints，但 v2 起默认关闭，需要 opt-in。启用后，它会在破坏性操作前自动 snapshot 项目，并可以用 `/rollback` 恢复。

启用：

```
hermes chat --checkpoints
```

或配置：

```
checkpoints:
  enabled: true
```

触发 checkpoint 的场景包括：

```
write_file
patch
rm / rmdir / mv / sed -i / truncate / dd
输出重定向 >
git reset / clean / checkout
```

官方说它用内部 Checkpoint Manager，在 `~/.hermes/checkpoints/store/` 维护一个 shadow git repository，不会碰真实项目的 `.git`。

回滚命令：

```
/rollback
/rollback <N>
/rollback diff <N>
/rollback <N> <file>
```

你要记：

```
只要让 agent 改真实项目文件，就应该考虑开 checkpoints。
```

* * *

# 13\. 和 OpenAI Agents SDK、LangGraph 的区别

```
OpenAI Agents SDK
= 程序员自己写 agent。
你定义 Agent、Tool、Runner、Handoff、Guardrail。

LangGraph
= 程序员自己画复杂 agent 流程图。
你定义 State、Node、Edge、Graph。

Hermes Agent
= 已经做好的终端 agent runtime。
你主要是安装、配置 provider、配置工具、接平台、写 skills、接 MCP、管安全。
```

更直白：

```
OpenAI Agents SDK 像“造发动机的零件包”。

LangGraph 像“复杂流程控制器”。

Hermes Agent 像“已经装好的工程车”：
能跑终端、改文件、用浏览器、查网页、接 Telegram、定时任务、记忆、技能、MCP、Docker 沙箱。
```

* * *

# 14\. 你该怎么学 Hermes

不要从头把所有文档啃完。按实用顺序来：

```
第一阶段：跑起来

读：
Quickstart
Configuration
Security

目标：
- 安装
- 选 provider
- 跑 hermes
- 能继续 session
- 能用 terminal/file/web 工具
- 不开 yolo
```

```
第二阶段：理解工具系统

读：
Tools & Toolsets
Terminal Backends
Checkpoints & Rollback

目标：
- 知道有哪些工具
- 知道 toolsets 怎么开关
- 知道 local / docker / ssh 差别
- 知道什么时候必须开 checkpoint
```

```
第三阶段：理解长期能力

读：
Memory
Skills
Context Files

目标：
- 明白 MEMORY.md / USER.md 是什么
- 明白 session_search 和 memory 的区别
- 明白 SKILL.md 怎么写
- 明白 AGENTS.md / SOUL.md 怎么控制行为
```

```
第四阶段：自动化和多 agent

读：
Delegation
Cron
MCP
Messaging Gateway

目标：
- 会把大任务分给子 agent
- 会创建定时任务
- 会接外部 MCP 工具
- 会接 Telegram / Discord 等平台
```

```
第五阶段：看源码架构

读：
Architecture
Agent Loop Internals
Prompt Assembly
Provider Runtime
Adding Tools

目标：
- 看懂 AIAgent 怎么循环
- 看懂工具怎么注册和调度
- 看懂 provider 怎么切换
- 能自己加工具或插件
```

* * *

# 15\. 最终压缩版

```
Hermes Agent 的本质：

一个终端原生、工具丰富、带长期记忆和技能系统的 autonomous agent runtime。

它的核心循环：

用户输入
↓
构建 system prompt
↓
调用模型
↓
模型要工具就执行工具
↓
工具结果回填
↓
继续调用模型
↓
直到最终回答
↓
保存 session / memory


它的核心模块：

Tools
= 让 agent 能查网页、跑命令、改文件、用浏览器。

Toolsets
= 按场景启用/禁用工具。

Terminal backend
= 决定命令在本机、Docker、SSH、云沙箱哪里执行。

Memory
= 小而精的长期事实，进 system prompt。

Session search
= 搜索过去所有对话。

Skills
= 可复用工作流，agent 可以自己创建和修正。

Context files
= 项目规则和人格设定，例如 AGENTS.md、SOUL.md。

Delegation
= 启动隔离子 agent 并行干活。

Cron
= 定时自动执行任务。

MCP
= 连接外部工具服务器。

Security
= 审批、沙箱、授权、扫描、隔离。

Checkpoints
= 改坏项目后可以 rollback。
```

我对它的判断：

```
Hermes 不是最适合“学习 agent 底层原理”的第一工具。
但它很适合学习“一个完整 agent 产品到底应该包含哪些工程模块”。

你学它，重点不是背命令。
重点是看懂：

一个能长期运行的 agent，
为什么必须有工具、记忆、skills、上下文文件、沙箱、回滚、授权、MCP、cron、gateway。
```

如果你接下来要把它和 OpenAI Agents SDK、LangGraph 放在一起学，我建议记成：

```
OpenAI Agents SDK：
学 agent 代码骨架。

LangGraph：
学 agent 流程控制。

Hermes Agent：
学 agent 产品工程化。
```
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->

```
Microsoft《AI Agents for Beginners》
```

```
先知道 agent 是什么
↓
再写出一个能调用工具的 agent
↓
最后把复杂 agent 做成可控流程图
```

* * *

# 1\. Microsoft《AI Agents for Beginners》

## 1.1 Agent 到底是什么？

```
AI Agent = 让 LLM 不只是回复 prompt，而是能借助工具和知识对世界采取行动的系统。
```

Agent 拆成几个部分：Environment、Sensors、Actuators、LLM、Tools、Memory + Knowledge。这里最关键的是：Agent 不是一个模型，而是一个由多部分组成的系统；LLM 负责理解和决策，工具负责执行动作，记忆负责保存当前对话和长期信息。

你要这样记：

```
Environment
= agent 工作的场景，比如订票系统、数据库、网页、文件系统。

Sensors
= agent 读取环境的方式，比如查航班、查库存、读文件、看用户输入。

Actuators
= agent 改变环境的方式，比如下单、发邮件、写数据库、调用 API。

LLM
= 负责理解自然语言、判断下一步、生成计划。

Tools
= agent 能用的外部能力，比如搜索、数据库、代码执行、API。

Memory + Knowledge
= 短期记忆 + 长期知识。
短期记忆：当前任务上下文。
长期知识：用户偏好、历史记录、知识库。
```

## 1.2 什么时候该用 Agent？

Agent 特别适合三类任务：open-ended problems、multi-step processes、improvement over time。也就是：步骤不能完全写死、多步骤调用工具、需要根据反馈变好。

你实际判断时，用这个标准：

```
适合 Agent：

- 用户目标比较模糊，需要系统自己拆步骤
- 任务需要多轮推进
- 任务需要查资料、调用 API、读文件、写文件
- 中途结果会影响下一步
- 需要根据失败结果重新尝试
- 需要记住用户偏好或历史状态

不适合 Agent：

- 一次问答就能解决
- 一个固定 API 调用就能解决
- 规则流程完全确定
- 不需要工具
- 不需要状态
- 不需要循环
```

* * *

## 1.3 Tool Use：这是 Agent 的手脚

Microsoft Tool Use 这一节说得很直接：工具让 AI agent 拥有更大能力范围。工具可以是简单函数，比如计算器；也可以是第三方 API，比如股价查询、天气查询。工具调用的本质是：模型根据用户意图选择函数名和参数，真正的函数代码由程序执行，再把结果返回给模型。

核心流程是：

```
用户提出任务
↓
LLM 判断需要工具
↓
LLM 输出 tool call：工具名 + 参数
↓
程序执行工具
↓
工具返回结果
↓
结果交回 LLM
↓
LLM 继续推理或输出最终答案
```

你必须抓住 Tool Use 的 6 个构件：

```
1. Tool Schema
告诉模型有哪些工具。
包括：工具名、用途、参数、返回值。

2. Function Execution Logic
真正执行工具的代码。
注意：模型不会真的执行函数，模型只是“请求调用”。

3. Message Handling
管理用户消息、模型消息、工具调用、工具返回结果。

4. Tool Integration Framework
把 agent 和函数/API/数据库/代码解释器连起来。

5. Error Handling & Validation
工具失败怎么办？
参数错了怎么办？
返回结果异常怎么办？

6. State Management
记录之前调用过什么工具、拿到了什么结果、下一步是否还要继续。
```

* * *

## 1.4 Agentic RAG：不是“检索一次再回答”

Microsoft 对 Agentic RAG 的解释很关键：它不是传统的“检索 → 阅读 → 回答”固定流程，而是 LLM 自己规划下一步，边调用工具/函数，边根据结果判断是否需要继续查、换查询、换工具，直到结果足够。原文还强调了 “maker-checker” 式循环。

普通 RAG：

```
用户问题
↓
系统检索一次
↓
把资料塞给模型
↓
模型回答
```

Agentic RAG：

```
用户问题
↓
模型判断需要查什么
↓
调用检索工具
↓
检查结果是否足够
↓
不够：改写查询 / 换检索方法 / 换数据源
↓
继续查
↓
资料足够后再回答
```

Microsoft 原文给的核心循环可以压成：

```
LLM call
↓
tool use
↓
LLM call
↓
tool use
↓
直到结果够用
```

Agentic RAG 可以改写失败查询，选择不同检索方式，整合 vector search、SQL database、custom APIs 等多个工具。它的重点不是“多查几次”，而是**模型根据资料质量决定下一步**。

你要记住：

```
普通 RAG = 固定检索流程
Agentic RAG = 自己判断检索路径
```

* * *

## 1.5 Planning：核心不是“想计划”，而是输出结构化任务

Microsoft Planning 这节重点讲：真实任务太复杂，不能一步做完，所以 agent 要先定义总目标，再拆成可管理的子任务。官方例子是 “Generate a 3-day travel itinerary”，然后拆成 Flight Booking、Hotel Booking、Car Rental、Personalization。

真正有用的是这个思路：

```
总任务
↓
拆子任务
↓
每个子任务分配 agent / 工具
↓
子任务分别完成
↓
汇总结果
```

而且原网页强调 structured output，比如 JSON，因为 JSON 更容易被后续 agent 或服务解析。Planning 不是让模型写一段漂亮计划，而是让模型输出机器能执行的结构。

你要这样记：

```
坏的 planning：

“我会先查资料，然后分析，最后总结。”

好的 planning：

{
  "main_task": "研究 OpenAI Agents SDK",
  "subtasks": [
    {
      "task_details": "阅读 quickstart，提取 Agent 和 Runner 的最小代码",
      "assigned_agent": "doc_reader"
    },
    {
      "task_details": "阅读 tools 文档，提取 function_tool 用法",
      "assigned_agent": "tool_extractor"
    },
    {
      "task_details": "整理成学习笔记",
      "assigned_agent": "writer"
    }
  ]
}
```

一句话：

```
Planning 的重点不是“计划写得像人话”，而是“计划能被程序继续执行”。
```

* * *

## 1.6 Multi-Agent：不是多个角色聊天，而是分工

Microsoft Multi-Agent 原文说，多 agent 是多个 agent 为共同目标协作的设计模式，适合大工作量、复杂任务、多种专业能力场景。它的优势包括 specialization、scalability、fault tolerance。

你不要把 Multi-Agent 理解成：

```
几个 AI 互相聊天，看起来很热闹。
```

应该理解成：

```
把一个复杂系统拆成多个职责明确的模块。
```

比如：

```
Research Agent
= 查资料

Code Agent
= 写代码

Review Agent
= 检查错误

Writer Agent
= 输出最终文本

Triage Agent
= 判断用户任务应该交给谁
```

Microsoft 原文还强调，多 agent 要考虑通信、协调机制、agent 架构、交互可见性、人类介入。尤其是 visibility 很重要：你必须知道 agent 之间发生了什么，否则系统就是黑箱。

你要记住：

```
Multi-Agent 的难点不是“创建多个 agent”。
难点是：

- 谁负责调度？
- 谁拥有最终答案？
- agent 之间传什么信息？
- 哪些步骤需要人确认？
- 出错后怎么追踪？
```

* * *

# 2\. OpenAI Agents SDK Intro 精华

OpenAI Agents SDK 的官方定位很明确：它是一个轻量级、少抽象、偏生产可用的 agentic app 开发包。核心原语包括 Agents、Agents as tools / Handoffs、Guardrails，并且内置 tracing。官方还说它有内置 agent loop，会处理工具调用，把结果送回 LLM，并持续运行直到任务完成。

```
怎么用 Python 把 agent 跑起来。
```

* * *

## 2.1 OpenAI Agents SDK 的核心对象

```
Agent
= 带 instructions 和 tools 的 LLM

Runner
= 运行 agent 的执行器

Tool
= agent 可以调用的函数/API/搜索/代码解释器

Handoff
= 一个 agent 把任务交给另一个 agent

Guardrail
= 输入/输出检查器

Tracing
= 记录 agent 执行过程
```

OpenAI 官方把 Agent 定义为“LLMs equipped with instructions and tools”；Handoffs 允许 agent 把任务委托给其他 agent；Guardrails 用来验证输入和输出；Tracing 用来可视化、调试和监控 agentic flows。

这几个词你必须背下来。它们就是 OpenAI Agents SDK 的骨架。

* * *

* * *

## 2.2 Tool：让 agent 真正做事

OpenAI Tools 文档说，tools 让 agents 能够执行动作，比如获取数据、运行代码、调用外部 API，甚至使用计算机。SDK 支持五类工具：Hosted OpenAI tools、Local/runtime execution tools、Function calling、Agents as tools、Codex tool。

你实际先学这三类就够：

```
1. Hosted tools
OpenAI 托管工具。
比如：
- WebSearchTool
- FileSearchTool
- CodeInterpreterTool
- HostedMCPTool
- ImageGenerationTool

2. Function tools
你自己写 Python 函数，然后包装成工具。

3. Agents as tools
一个 agent 可以作为另一个 agent 的工具。
```

* * *

## 2.3 Handoff：任务转交

OpenAI Handoffs 文档说，handoff 允许一个 agent 把任务委托给另一个 agent，适合不同 agent 负责不同专业领域。比如客服系统里，可以有订单状态 agent、退款 agent、FAQ agent。handoff 在 LLM 看来会表现成一个类似工具的调用，比如 `transfer_to_refund_agent`。

* * *

## 2.4Guardrail：不是装饰，是防止系统乱跑

OpenAI Guardrails 文档说有两类 agent-level guardrails：input guardrails 和 output guardrails。Input guardrails 检查初始用户输入，output guardrails 检查最终输出；此外 tool guardrails 会在每次自定义 function tool 调用前后运行。

你要这样记：

```
Input guardrail
= 入口检查
用户这个请求能不能处理？

Output guardrail
= 出口检查
最终答案能不能发出去？

Tool guardrail
= 工具调用检查
这个工具参数危险吗？
这个工具结果能不能返回？
```

真实用途：

```
不是为了“显得安全”。
而是为了防止：

- 用户输入恶意请求
- agent 调用危险工具
- agent 删除/修改不该动的数据
- agent 输出敏感信息
- agent 浪费高成本模型调用
```

最朴素的项目里，你也可以先做一个简单 guardrail：

```
如果用户请求涉及：
- 删除文件
- 发邮件
- 下单
- 转账
- 修改数据库

则必须先要求人类确认。
```

* * *

## 2.5 Tracing：没有 tracing，agent 就是黑箱

OpenAI Tracing 文档说，Agents SDK 内置 tracing，会记录 agent run 里的 LLM generation、tool calls、handoffs、guardrails 和 custom events，并可以用 dashboard 调试、可视化、监控工作流。

你要记住：

```
Tracing 不是高级功能。
Tracing 是 agent 开发的基本功能。
```

因为 agent 出错时，普通日志不够。你必须知道：

```
它到底有没有调用工具？
调用了哪个工具？
参数是什么？
工具返回了什么？
有没有 handoff？
handoff 给了谁？
guardrail 有没有触发？
最后答案是哪个 agent 生成的？
```

所以你学 OpenAI Agents SDK，最低要求不是“能跑出答案”，而是：

```
能在 Trace Viewer 里看懂它是怎么跑出答案的。
```

* * *

# 3\. LangGraph Overview 精华

LangGraph 官方说，它是一个 low-level orchestration framework and runtime，用来构建、管理、部署 long-running、stateful agents。官方还提醒：如果刚开始学 agent 或想要更高层抽象，可以先用 LangChain agents；LangGraph 更关注 durable execution、streaming、human-in-the-loop、persistence 等底层编排能力。

这句话翻译成人话就是：

```
LangGraph 不是给你快速写一个简单 agent 的。
LangGraph 是在 agent 流程复杂后，让你控制流程、状态、分支、恢复、人类介入。
```

* * *

## 3.1 LangGraph 的核心思想

LangGraph 不是“一个 Agent 类”，而是：

```
把任务流程拆成图。
```

核心元素：

```
State
= 当前任务状态

Node
= 一个执行步骤，本质上是函数

Edge
= 步骤之间的连接

Conditional Edge
= 根据状态决定下一步去哪

Graph
= 整个流程图

Checkpoint
= 保存中间状态，方便恢复
```

* * *

## 3.2 LangGraph 的真正使用方式

LangGraph 的 Thinking in LangGraph 页面说，构建 LangGraph agent 时，先把流程拆成离散步骤，也就是 nodes；然后描述节点之间的决策和转移；最后通过共享 state 把节点连起来，每个节点都可以读写 state。

它给的客服邮件 agent 例子非常实用：

```
Read Email
= 读取邮件

Classify Intent
= 判断邮件紧急程度和主题

Doc Search
= 搜索相关文档

Bug Track
= 创建或更新 bug issue

Draft Reply
= 起草回复

Human Review
= 人类审核

Send Reply
= 发送邮件
```

这才是 LangGraph 的正确打开方式：

```
不要先问“LangGraph API 怎么用？”
先问“我要自动化的流程有哪些步骤？”
```

然后每个步骤变成一个 node。

* * *

## 3.3 State：LangGraph 的命根子

Thinking in LangGraph 原文说，state 是所有节点共享的 memory；你可以把它想成 agent 的笔记本，用来记录它在流程中学到和决定的一切。原文还给了判断标准：需要跨步骤保留的数据就放进 state；能从其他数据推导出来的，就不要存。

关键原则：

```
State 存原始数据，不存 prompt 模板。

应该存：
- 原始用户问题
- 原始邮件内容
- 分类结果
- 搜索结果
- 工具返回结果
- 草稿
- 错误信息
- 当前执行步骤

不应该存：
- 大段拼好的 prompt
- 可以重新计算的格式化文本
- 临时变量
```

这句话很重要：

```
State schema 一旦乱，LangGraph 项目后面会很痛苦。
```

* * *

## 3.4 Node：每个节点只做一件事

LangGraph 原文说，node 就是一个 Python 函数：接收当前 state，做一些工作，返回对 state 的更新。

你要按这个粒度拆：

```
好节点：
classify_intent
search_documentation
draft_response
human_review
send_reply

坏节点：
do_everything
process_user_request
agent_main
```

一个好 node 应该清楚回答：

```
输入 state 里的哪些字段？
调用不调用 LLM？
调用不调用外部工具？
输出更新哪些字段？
下一步去哪？
失败怎么办？
```

* * *

## 3.5 LangGraph 解决的不是“调用模型”，而是“流程控制”

LangGraph 官方列出的核心收益包括 durable execution、human-in-the-loop、comprehensive memory、debugging with LangSmith、production-ready deployment。也就是：失败后恢复、人类随时检查/修改状态、短期和长期记忆、复杂路径追踪、生产部署。

所以它适合：

```
长任务
多步骤任务
有状态任务
有分支任务
有循环任务
需要人工确认的任务
失败后要恢复的任务
需要追踪执行路径的任务
```

不适合：

```
一次问答
一个工具调用
简单 Chatbot
刚入门时为了装复杂
```

你当前学 LangGraph，只需要抓住这个图：

```
START
↓
plan_node
↓
search_node
↓
check_node
↓
如果资料不足 → 回到 search_node
↓
如果资料足够 → write_node
↓
human_review_node
↓
END
```

这就是它和 OpenAI Agents SDK 的核心区别：

```
OpenAI Agents SDK
= 让 agent 容易跑起来。

LangGraph
= 让复杂 agent 流程可控。
```

* * *
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->


API 调用学习笔记

API 可以理解为不同程序之间沟通的接口。前端、后端、第三方平台之间，很多数据交换都依赖 API 完成。学习 API 调用，不能只停留在概念上，而要通过实际请求来理解它的运行过程。

一次完整的 API 调用，通常包括请求地址、请求方法、请求参数、请求头和返回结果。请求方法常见的有 GET 和 POST。GET 一般用于获取数据，参数通常放在 URL 后面；POST 一般用于提交数据，参数多放在请求体中。请求头里经常会包含 Content-Type、Authorization 等信息，其中 Authorization 通常用于身份验证，比如携带 Token。

调用 API 时，要重点观察返回结果。很多接口会返回 JSON 数据，里面通常包含状态码、提示信息和具体数据。学习时不能只看请求是否成功，还要理解返回字段的含义，知道哪些数据是自己真正需要的。

如果调用失败，要学会根据错误排查问题。比如 400 可能是参数错误，401 可能是权限或 Token 问题，404 可能是接口地址错误，500 通常是服务器内部错误。遇到问题时，应先检查接口文档，再检查请求方法、参数格式、请求头和权限设置。

学习 API 调用的关键，是边看文档边动手写。只看教程容易产生“我懂了”的错觉，真正写请求、改参数、看返回、排错误，才能建立实际理解。掌握 API 调用之后，才能更好地学习前后端交互、第三方服务接入、AI 接口调用以及后续项目开发。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->



## **. Ethereum Development Documentation**

Ethereum Development Documentation 是以太坊开发学习的总入口。

它是一张学习地图，主要分成三层：

`Foundational topics 基础概念 -> Ethereum stack 开发栈 -> Advanced 高级主题`

`Intro to Ethereum -> Accounts -> Transactions -> Blocks -> EVM -> Gas -> Networks -> Smart contracts`

`Smart contracts -> Smart contract languages -> Smart contract anatomy -> Compiling -> Deploying -> Verifying -> Security`

## **2\. Web3 一次链上操作到底怎么运行？**

把一次最普通的 Web3 操作拆开，大概是：

`用户 -> 钱包 -> 签名 -> 交易 -> 网络广播 -> 验证者打包进区块 -> EVM 执行 -> 状态改变 -> 区块浏览器验证`

更具体一点：

1.  用户在钱包或 dapp 里发起动作。
    
2.  钱包展示交易内容，例如接收地址、合约地址、金额、Gas。
    
3.  用户确认后，钱包用私钥签名。
    
4.  签名后的交易被广播到 Ethereum 网络。
    
5.  验证者把交易放入区块。
    
6.  如果交易调用合约，EVM 会执行合约代码。
    
7.  执行结果改变链上状态，例如余额变化、合约变量变化、事件日志产生。
    
8.  区块浏览器显示交易哈希、状态、区块高度、Gas、调用对象和日志。
    

这就是 Week 1 要建立的主线：

`账户 + 钱包 + 签名 + 交易 + Gas + 合约 + 网络 + 区块浏览器`

## **3\. 交易 Transaction 是什么？**

Ethereum 官方文档把交易定义成：账户发出的、经过密码学签名的指令，用来更新 Ethereum 网络状态。

零基础可以这样理解：

`交易 = 我用账户授权网络执行一个动作`

交易可能是：

-   从一个地址转 ETH 到另一个地址。
    
-   部署一个智能合约。
    
-   调用一个已经部署的智能合约。
    

一笔交易常见字段：

-   from：发送方地址。
    
-   to：接收方地址；如果是合约地址，就会执行合约代码。
    
-   signature：签名，证明发送方授权了这笔交易。
    
-   nonce：账户发出的第几笔交易，用来防止重放和排序混乱。
    
-   value：转多少 ETH。
    
-   input data：调用合约时传入的数据。
    
-   gasLimit：最多愿意消耗多少 Gas。
    
-   maxFeePerGas：每单位 Gas 最多愿意付多少。
    
-   maxPriorityFeePerGas：给验证者的小费上限。
    

注意：

`只有 EOA，也就是私钥控制的普通用户账户，能主动发起交易。 合约账户不会自己主动发交易；它通常是被交易调用后执行代码。`

## **4\. Gas**

Gas 是 Ethereum 对计算资源的计价单位。

不要把 Gas 只理解成“手续费”。更准确地说：

`Gas = 链上执行计算和存储的资源计量 Gas fee = 你为这些资源支付的 ETH`

为什么需要 Gas？

-   防止垃圾交易刷爆网络。
    
-   防止无限循环让 EVM 卡死。
    
-   让计算和存储成本可计量。
    
-   让验证者有动机处理交易。
    

Gas 费用大致是：

`gas used * (base fee + priority fee)`

其中：

-   gas used：实际消耗多少计算单位。
    
-   base fee：协议设定的基础费用，会被销毁。
    
-   priority fee：给验证者的小费。
    

重要细节：

-   普通 ETH 转账通常需要 21,000 gas。
    
-   合约交互通常更贵，因为要执行代码。
    
-   交易失败也可能消耗 Gas，因为网络已经花资源执行过。
    
-   gasLimit 是你愿意最多消耗多少，不一定全部用完，未使用部分会退回。
    

## **5\. 智能合约**

智能合约是部署在 Ethereum 上的程序。

官方文档的核心意思是：

`智能合约 = 位于某个 Ethereum 地址上的代码 + 状态`

它像一个“链上自动售货机”：

`输入符合规则 -> 合约代码执行 -> 状态按规则变化`

智能合约的特点：

-   有自己的地址。
    
-   可以持有余额。
    
-   可以被交易调用。
    
-   代码按预设逻辑执行。
    
-   默认不能随便删除。
    
-   交互通常不可逆。
    
-   公开可组合，其他合约也可以调用它。
    

智能合约和普通后端最大的区别：

`普通后端：服务器由公司控制，数据库可被管理员改。 智能合约：部署到链上后，状态公开，执行公开，改动受合约权限限制。`

所以写合约前要特别重视：

-   权限控制。
    
-   测试。
    
-   部署网络是否正确。
    
-   合约是否可升级。
    
-   谁是 owner / admin。
    
-   是否有资产转移或授权逻辑。
    

## **6\. 网络、主网、测试网**

Ethereum 有一个主网 Mainnet，也有多个测试网。

主网：

`真实资产 真实成本 真实风险`

测试网：

`测试资产 接近真实链上环境 适合学习、调试、部署 demo`

Ethereum 官方文档指出：Sepolia 是默认推荐给合约和应用开发者使用的测试网。

测试网 ETH 没有真实价值，但你仍然需要它支付测试交易的 Gas。

这就是 faucet 的作用：

`Faucet 水龙头 = 给测试地址领取少量测试网 ETH 的工具`

## **7\. Google Cloud Web3 Sepolia Faucet**

Google Cloud Web3 Sepolia Faucet 是一个领取 Sepolia 测试 ETH 的入口。

你使用它时大致流程是：

`打开 faucet -> 登录 Google 账号 -> 输入你的 Sepolia 钱包地址 -> 申请测试 ETH -> 等待到账 -> 在钱包或 Sepolia 区块浏览器中确认`

注意：

-   只能输入你的公开钱包地址，不能输入私钥或助记词。
    
-   领取的是 Sepolia 测试 ETH，不是真 ETH。
    
-   测试 ETH 只用于测试转账、部署合约、调用合约。
    
-   Faucet 可能有频率限制、账号限制或风控限制。
    
-   如果一个 faucet 不可用，可以回到 Ethereum Networks 文档里的 Sepolia faucet 列表换一个。
    

记录材料时保存：

-   faucet URL。
    
-   接收地址。
    
-   到账交易哈希，如果页面或钱包能看到。
    
-   Sepolia explorer 链接。
    
-   到账数量。
    
-   时间。
    

不要保存：

-   助记词。
    
-   私钥。
    
-   MetaMask 密码。
    
-   任何真实资产钱包敏感截图。
    

## **8\. Remix IDE**

Remix IDE 是以太坊智能合约开发的浏览器 IDE。

Remix 官方文档强调了几个入门友好的点：

-   不需要本地安装复杂环境。
    
-   可以在浏览器里写、编译、部署、调用合约。
    
-   有插件式界面。
    
-   适合从零开始理解智能合约开发流程。
    

`写 Solidity -> 编译 -> 部署 -> 调用 read 函数 -> 调用 write 函数 -> 钱包确认 -> 区块浏览器验证`

## **9\. Remix 最小合约实验路线**

Week 1 推荐从最小合约开始，不要一上来写 token、NFT、DeFi。

你要观察两类操作：

### **9.1 读取 read**

调用：

`message()`

特点：

-   读取链上状态。
    
-   不改变状态。
    
-   通常不需要钱包发交易。
    
-   通常不消耗 Gas。
    

### **9.2 写入 write**

调用：

`setMessage("hello week 1")`

特点：

-   改变链上状态。
    
-   需要钱包签名。
    
-   需要发送交易。
    
-   需要消耗 Sepolia ETH 支付 Gas。
    
-   会产生交易哈希。
    

这就是理解合约交互的关键：

`读 = 看链上状态。 写 = 发交易改变链上状态。`

## **10\. 最小实践前检查清单**

在 Remix 连接 MetaMask 前检查：

-   钱包是测试钱包，不是存真实资产的钱包。
    
-   网络是 Sepolia，不是 Ethereum Mainnet。
    
-   钱包里有少量 Sepolia ETH。
    
-   合约代码是自己能读懂的最小代码。
    
-   没有复制陌生项目的大段合约。
    
-   不上传助记词、私钥、密码。
    

部署合约前检查：

-   Remix 的 Environment 是否连接到 Injected Provider / MetaMask。
    
-   MetaMask 弹窗显示的是 Sepolia。
    
-   部署交易没有涉及真实资产。
    
-   Gas 费用可接受。
    

调用写函数前检查：

-   调用的是自己刚部署的合约地址。
    
-   函数名称和参数看得懂。
    
-   这次写入会改变什么状态。
    
-   交易确认后要记录 hash。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->




# **Ethereum Accounts 与 MetaMask 入门笔记**

理解账户、地址、钱包、私钥、助记词和密码分别是什么，以及为什么 Web3 里的安全责任和普通互联网账号完全不同。

## **1.**

在 Web3 里，重点是拥有一套可以控制链上资产和动作的密钥。

最小关系是：

`助记词 / Secret Recovery Phrase -> 派生出多个账户的私钥 -> 私钥生成公钥和地址 -> 地址公开收款和交互 -> 私钥签名交易 -> 钱包帮你管理密钥和发起签名`

所以最重要的安全原则是：

`地址可以公开。 私钥和助记词绝不能公开。 钱包密码不等于助记词，也不等于链上账户本身。`

## **2\. Ethereum account**

Ethereum account 是以太坊上的一个“可持有余额、可发送消息、可参与链上交互的实体”。

它可以：

-   持有 ETH。
    
-   持有 token。
    
-   向其他账户转账。
    
-   与智能合约交互。
    

但是 Ethereum account 不等于传统互联网账号

## **3\. 两类 Ethereum account**

Ethereum 主要有两类账户。

### **3.1 EOA：Externally Owned Account**

EOA 是普通用户最常接触的账户。

特点：

-   由私钥控制。
    
-   创建账户本身不需要花 gas。
    
-   可以主动发起交易。
    
-   可以转 ETH / token。
    
-   可以调用智能合约。
    

### **3.2 Contract Account：合约账户**

合约账户是部署到链上的智能合约。

特点：

-   由代码控制，不由某个私钥直接控制。
    
-   部署合约要花 gas，因为要占用链上存储。
    
-   不能自己主动发起交易。
    
-   只有收到外部交易或调用时，才会执行代码。
    

一句话区分：

`EOA 是“人用私钥控制的账户”。 合约账户是“代码控制的账户”。`

## **4\. 地址**

地址是账户在链上的公开标识。

Ethereum 地址特点：

-   以 0x 开头。
    
-   后面是 40 个十六进制字符。
    
-   总长度通常是 42 个字符。
    
-   可以公开给别人收款。
    
-   可以在区块浏览器中查询。
    

## **5\. 私钥**

`谁拥有私钥，谁就能控制对应地址里的资产和链上动作。`

私钥可以用来：

-   签名交易。
    
-   证明“这个动作确实由账户控制者授权”。
    
-   导入或恢复单个账户。
    

如果别人拿到你的私钥，他不需要你的密码，也不需要你的电脑，就可能控制对应账户。

## **6\. 助记词 / Secret Recovery Phrase**

MetaMask 会在创建钱包时生成 Secret Recovery Phrase，常见是 12 个英文单词，也叫 seed phrase / SRP / 助记词。

它的地位比单个私钥还高。

关系是：

`一个助记词 -> 可以派生出多个账户 -> 每个账户有自己的私钥 -> 每个私钥控制一个地址`

所以助记词可以理解成：

`整个钱包的总钥匙。`

必须记住：

-   助记词丢了，MetaMask 不能帮你恢复。
    
-   助记词泄露，别人可以控制你的钱包。
    
-   助记词顺序不能错。
    
-   助记词最好离线保存。
    
-   不要把助记词存到云文档、邮箱、聊天记录、截图、GitHub 或 AI 工具里。
    

## **7\. MetaMask**

MetaMask 是一个钱包客户端，可以是浏览器插件，也可以是手机 App。

它做的事情包括：

-   管理私钥。
    
-   显示地址和余额。
    
-   帮你连接 dapp。
    
-   帮你构造交易。
    
-   在你确认后帮你签名。
    
-   把交易发送到区块链网络。
    

但 MetaMask 不是银行，也不是普通平台账号。

它不能替你：

-   找回丢失的助记词。
    
-   撤销已经确认的链上交易。
    
-   阻止你签错合约或授权。
    
-   保证每个 dapp 都安全。
    

## **8\. MetaMask 密码**

MetaMask 密码主要用于解锁当前设备上的钱包。

它不是链上账户本身，也不是最终恢复方式。

如果你用传统助记词创建钱包：

`MetaMask 密码 = 解锁本机 MetaMask 助记词 = 恢复整个钱包`

这意味着：

-   忘记密码时，可以用助记词恢复。
    
-   丢失助记词时，MetaMask 官方不能帮你找回钱包。
    
-   只知道密码但没有助记词，不等于永远拥有钱包。
    

## **9\. 钱包、账户、地址、私钥、助记词**

可以这样记：

`钱包 = 管理工具 账户 = 链上的身份 / 资产控制实体 地址 = 账户的公开门牌号 私钥 = 控制单个账户的钥匙 助记词 = 恢复整个钱包的总钥匙 密码 = 解锁当前设备上钱包应用的本地锁`

类比：

`地址像收款码，可以给别人。 私钥像保险柜钥匙，不能给别人。 助记词像能重做所有钥匙的总图纸，更不能给别人。 MetaMask 像钥匙包，帮你保管和使用钥匙。 密码像打开这个钥匙包的本机锁。`

类比不完全准确，但适合入门阶段建立直觉。

## **10\. 签名**

签名不是“点一下登录”这么简单。

签名表示：

`我用这个账户的私钥，授权某个具体消息或交易。`

签名可能用于：

-   登录 dapp。
    
-   发送 ETH。
    
-   授权 token。
    
-   调用合约。
    
-   证明某个消息来自你。
    

风险在于：

-   有些签名只是登录消息。
    
-   有些签名会真的发交易。
    
-   有些授权会允许合约花你的 token。
    

所以每次 MetaMask 弹窗，都要停下来读：

-   当前网络是不是对的？
    
-   对方网站是不是可信？
    
-   调用的是哪个合约？
    
-   是签名消息还是发送交易？
    
-   是否涉及转账？
    
-   是否涉及 token approve / 授权额度？
    
-   gas 大概是多少？
    

## **11\. 安全责任清单**

### **可以公开**

-   钱包地址。
    
-   测试网交易哈希。
    
-   区块浏览器链接。
    
-   合约地址。
    
-   测试网学习记录。
    

### **不能公开**

-   助记词 / Secret Recovery Phrase。
    
-   私钥。
    
-   keystore 文件。
    
-   真实资产钱包的敏感截图。
    
-   任何能恢复或控制钱包的信息。
    

### **操作前检查**

-   只从官方渠道安装 MetaMask。
    
-   浏览器插件确认来自官方来源。
    
-   不要安装来路不明的“钱包插件”。
    
-   创建钱包后立刻备份助记词。
    
-   助记词离线保存。
    
-   测试学习优先使用测试钱包，不放真实资产。
    
-   涉及签名、授权、转账、合约写入时，必须人工确认。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->





**Large Language Models explained briefly**  

**简单来说，大模型只是在不断预测下一个词得概率，然后选取最大概率的词。因此不同的提示词，会输出不同的答案，事实上，相同的提示词也会输出不同的答案。因为每次运行都是分开的，它不会记住原先的答案，然后发布，而是再一次地不断预测下一词的概率，然后选取最大概率。为了使这个方方法行得通，需要大量的计算。以及训练的技巧，比如标记数据，强化学习等。Transformer的Attention也是很重要的。但涌现这种现象依然难以解释。**

**Hugging Face**

NLP是语言学和机器学习的结合，LLM虽然强大，但存在幻觉。**Transformers are everywhere!**

Pre-Processing-Model-Post-Processing

The carbon foorprint of Transformers

Transfer Learning 预训练的表现要更好

预训练会保存偏差

Encoders, decoders 嵌入特征 自注意力机制 自回归

Bert
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
