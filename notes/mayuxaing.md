---
timezone: UTC+8
---

# ma0xfly

**GitHub ID:** mayuxaing

**Telegram:** @Ma_0xFly

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
## 概念

> 要理解 Web3，得先看它是怎么演变来的。互联网到现在其实经历了三个阶段，可以理解为**数字社会的‘三次工业革命’**：”

第一阶段：Web 1 —— “只读互联网” (Read-Only)

> “大约是 90 年代到 2004 年。那时是以新浪、搜狐、雅虎为主的门户网站时代。 **特征是：平台写什么，我们看什么。** 这就像是把线下的报纸杂志搬到了屏幕上，我们只是信息的**被动接收者**，没法互动。”

第二阶段：Web 2 —— “交互互联网” (Read + Write)

> “这就是我们现在所处的时代，微信、抖音、淘宝。 **特征是：用户创造内容，平台垄断收益。** 我们可以在网上发文章、发视频（Write），但这里有个巨大的逻辑悖论：**数据是我们产生的，但数据的所有权归平台。** 比如说，您在微信上的社交关系，如果您号被封了，这十年的积累瞬间清零。或者抖音利用您的浏览习惯把数据卖给广告商赚钱，分不到您一分钱。平台就像是一个**数字地主**，创作者是雇农。

第三阶段：Web 3 —— “价值互联网” (Read + Write + **Own**)

> “Web3 要解决的就是 Web2 的‘垄断’问题。它的核心定义是：**用户拥有自己的数字资产和数据主权。** 它是基于区块链技术的下一代互联网。在这里，您的账号不再属于腾讯或阿里，而是属于您自己（通过私钥控制）。 您创造的内容、游戏里的装备、甚至您的社交关系，都确权变成了您的‘数字私产’**。平台没法随意删您的号，也没法拿您的数据白白去卖钱。 如果说 Web2 是传递信息的，那 Web3 就是传递价值的。** 它试图从技术底层构建一个更公平的分配机制。”

## 实际意义

“历史唯物主义”的视角来回答。类比是**2000 年的互联网泡沫（Dot-com Bubble）**。

### 1\. 历史的镜像： 2000 年互联网泡沫

**策略：** 用已知解释未知，证明“泡沫破裂”是技术成熟的必经之路。

> 现在的 Web3 和区块链，特别像 1999 年到 2000 年的互联网。
> 
> 那时候，随便一个公司只要名字里带个‘.com’，哪怕没有盈利，股价也能翻几十倍。最后泡沫破了，这就是纳斯达克崩盘。
> 
> 像 [Pets.com](http://Pets.com) 这样的公司死了一大片（现在的空气币也会死一大片）。
> 
> 但是，泡沫破了，互联网消失了吗？
> 
> 没有。光缆留下了，服务器留下了，TCP/IP 协议留下了。
> 
> 大浪淘沙之后，活下来的是 Google、亚马逊、腾讯。
> 
> 现在的区块链也是一样。99% 的炒作项目最终都会归零，但那 **1% 的‘基础设施’** 会留下来，改变世界。”
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

## Planner 阶段要产出什么

Planner 的目标不是写代码，而是把项目讲清楚。它应该产出或准备产出：

```text
.apm/spec.md
.apm/plan.md
AGENTS.md
.apm/tracker.md
.apm/bus/
```

这些文件的作用：

| 文件 | 作用 |
| --- | --- |
| .apm/spec.md | 项目目标、需求边界、约束、架构决策 |
| .apm/plan.md | 阶段计划、任务拆分、依赖关系 |
| AGENTS.md | 所有 AI Worker 必须遵守的执行规则 |
| .apm/tracker.md | 当前进度、任务状态、审查结果 |
| .apm/bus/ | Manager 和 Worker 之间传递任务与报告 |

如果 Planner 没有先问清楚需求，就直接开始写代码，说明用法不对。

## Manager 阶段怎么用

Manager 负责协调，不是默认亲自写代码。

它应该做这些事：

-   读取 Spec、Plan 和 Tracker；
    
-   判断当前应该做哪个任务；
    
-   判断任务是否能并行；
    
-   给 Worker 写清楚任务提示词；
    
-   检查 Worker 的报告；
    
-   更新 Tracker；
    
-   必要时要求 Worker 返工。
    

Manager 派工时，任务应该足够具体。例如：

```text
你是情报源适配器 Worker。

目标：实现 NVD CVE 和 CISA KEV 两个数据源的最小采集链路。

要求：
- 只修改采集模块相关文件。
- 每个数据源都实现独立 Connector。
- Connector 输出统一 Raw Intelligence 结构。
- 实现限速、重试、错误记录和来源标记。
- 补充测试或可重复的验证命令。
- 完成后写明修改文件、验证结果、遗留问题。
```

## Worker 阶段怎么用

Worker 只做一个明确任务，不重新规划整个项目。

任务多时可以有多个 Worker，但每个 Worker 仍然只负责一个清晰边界内的任务。并行的前提是写入范围不冲突，例如采集器、数据模型、API、前端、部署文档可以拆开；如果两个任务都会改同一批核心文件，应由 Manager 顺序派发或明确文件归属。

推荐早期控制在 3 到 5 个 Worker。Worker 太少会拖慢进度，Worker 太多会增加审查成本和文件冲突。

Worker 应该做：

-   阅读 Manager 给的任务；
    
-   只修改任务范围内的文件；
    
-   运行必要测试；
    
-   记录验证结果；
    
-   写任务报告。
    

Worker 不应该做：

-   擅自扩大范围；
    
-   重写整体架构；
    
-   修改无关模块；
    
-   跳过验证；
    
-   不写完成报告。
    

## 一个完整循环示例

```text
1. 在项目根目录运行 apm init。
2. 确认项目里生成 .apm/、.codex/apm-guides/、.agents/skills/。
3. 在 Codex 中使用 $apm-1-initiate-planner，让 Planner 收集上下文并生成规划文档。
4. 用户确认 Planner 产出的 Spec、Plan 和 Rules。
5. 新开 Manager 会话，使用 $apm-2-initiate-manager。
6. Manager 派发任务。
7. 新开 Worker 会话，使用 $apm-3-initiate-worker。
8. Worker 使用 $apm-4-check-tasks 读取任务，执行代码修改和验证。
9. Worker 完成后写报告。
10. Manager 使用 $apm-5-check-reports 审查报告。
11. Manager 接受后更新进度，再派发下一个任务。
12. 阶段完成后归档、总结或继续下一阶段。
```

## 终端命令

查看版本：

```bash
apm --version
```

查看当前项目状态：

```bash
apm status
```

初始化当前项目：

```bash
apm init
```

更新 APM：

```bash
apm update
```

添加 assistant：

```bash
apm add
```

归档当前会话：

```bash
apm archive --name vehicle-threat-intel-mvp
```

查看归档：

```bash
apm archive --list
```

## 快速记忆

```text
终端 apm init：安装/初始化项目结构。
Codex $apm-1：启动 Planner，问清楚项目，生成 Spec 和 Plan。
Codex $apm-2：启动 Manager，派任务、审报告、维护进度。
Codex $apm-3：启动 Worker，做一个具体任务，跑验证，写报告。
```

当前 Codex 推荐这样起手：

```text
$apm-1-initiate-planner <项目背景>
```

最终原则：

```text
APM 适合管复杂项目，不适合替代日常小改动。
先规划，再派工，再执行，再审查。
```
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->


本文里的 APM 指 **Agentic Project Management**，仓库是：

```text
https://github.com/sdi2200262/agentic-project-management
```

它的用途是把复杂项目拆成 Planner、Manager、Worker 流程，让 AI 先规划、再派工、再执行、再审查。

当前推荐用法是：

```text
1. 在项目根目录运行 apm init。
2. 让 apm init 为 Codex 生成项目级 APM skills。
3. 在 Codex 里用 $apm-1-initiate-planner、$apm-2-initiate-manager、$apm-3-initiate-worker 等命令推进流程。
```

本文以 `apm init` 生成的项目级 skills 为准，不再使用全局 `apm-context-gathering`、`apm-work-breakdown` 那套写法。

## 什么时候该用 APM

适合用 APM 的场景：

-   从 0 开始做一个中大型项目；
    
-   重构一个多模块系统；
    
-   项目需求还不够清楚，需要多轮澄清；
    
-   需要把任务拆给多个 AI 会话执行；
    
-   需要保留 Spec、Plan、Tracker、任务记录和交接上下文；
    
-   一个会话做不完，容易上下文爆掉。
    

不适合用 APM 的场景：

-   单文件修 Bug；
    
-   改一段配置；
    
-   写一个小脚本；
    
-   需求已经非常明确，直接实现即可；
    
-   临时问答、代码解释、翻译。
    

判断标准：

```text
如果这个任务需要先讨论架构、模块边界、阶段计划、验收标准，就用 APM。
如果 30 分钟内能直接改完，就不要用 APM。
```

## 本机当前状态

当前 Windows / WSL 上已经能找到 `agentic-pm` 的 CLI：

```text
apm --version
1.0.1
```

如果在某个目录下看到：

```text
apm status
Not initialized.
Run "apm init" to get started.
```

这表示：

-   `agentic-pm` 命令行工具已经安装；
    
-   当前目录还没有执行 APM 项目初始化；
    
-   需要先在项目根目录运行 `apm init`，生成 `.apm/`、`.codex/apm-guides/` 和 `.agents/skills/`。
    

## 两个层级不要混淆

APM 有两个层级。

### 1\. 终端里的 `apm`

这是 CLI 命令，在 PowerShell、CMD、Windows Terminal 或 WSL 终端里运行：

```bash
apm --version
apm status
apm init
apm update
apm archive
```

它负责安装、初始化、更新和归档 APM 文件。

### 2\. AI 会话里的 APM skill

这是在 Claude、Codex 这类 AI 会话里输入的指令。对 Codex 来说，`apm init` 会生成项目级 skills，调用时使用 `$` 前缀。

常用命令是：

```text
$apm-1-initiate-planner
$apm-2-initiate-manager
$apm-3-initiate-worker
$apm-4-check-tasks
$apm-5-check-reports
$apm-6-handoff-manager
$apm-7-handoff-worker
$apm-8-summarize-session
$apm-9-recover
```

重点：

```text
apm init 是终端命令。
$apm-* 是 Codex 里调用项目级 APM skills 的方式。
```

## 第一次使用：正确初始化

在项目根目录运行：

```bash
cd /home/myx/SentinelDrive
apm init
```

初始化时根据提示选择要支持的助手。常见选择是：

```text
Claude Code
Codex CLI
```

初始化完成后检查：

```bash
apm status
```

理想状态应该显示当前项目已经 initialized，并能看到已启用的 assistant。

项目里通常会出现类似结构：

```text
.apm/
.apm/spec.md
.apm/plan.md
.apm/tracker.md
.agents/
.agents/skills/apm-1-initiate-planner/
.agents/skills/apm-2-initiate-manager/
.agents/skills/apm-3-initiate-worker/
.codex/apm-guides/
AGENTS.md
```

如果没有这些文件，说明当前目录还没有初始化成功，或者初始化到了另一个目录。

Codex 初始化时会提示：

```text
Codex CLI does not support custom slash commands.
APM commands are installed as skills and invoked with the $ prefix.
```

这不是错误。它的意思是：Codex 不能用 `/apm-*`，要用 `$apm-*`。

## 实际工作流

APM 的核心角色有 3 个。

| 角色 | 作用 | 什么时候用 |
| --- | --- | --- |
| Planner | 澄清需求、收集上下文、生成规划文档 | 项目开始前 |
| Manager | 拆任务、派发任务、审查报告、维护进度 | 规划确认后 |
| Worker | 执行具体任务、修改代码、运行验证、写报告 | Manager 派工后 |

实际使用顺序是：

```text
Planner -> 用户确认规划 -> Manager -> Worker -> Manager 审查 -> 下一个 Worker
```

不要一上来就让 Worker 写代码。APM 的价值在于先把项目拆清楚。

## Codex 里怎么用

按下面顺序使用。

第一步，启动 Planner：

```text
$apm-1-initiate-planner 我要开发一个车联网威胁情报平台，目标是 24 小时运行收集情报。MVP 先支持 NVD CVE、CISA KEV、厂商公告、RSS 和手动录入，完成采集、标准化、去重、搜索、风险评分和基础告警。系统需要具备良好扩展性，采集模块采用 Source Adapter / Connector 模式，后续可以方便增加更多信息源。部署目标是先用 Docker Compose 在单台 Ubuntu 服务器运行，后续可以迁移到云数据库、消息队列、对象存储、多节点 Worker 或 Kubernetes。
```

Planner 会先做工作区发现、需求澄清、上下文收集，然后生成 Spec、Plan 和 Rules。这个阶段不应该急着写代码。

第二步，Planner 完成并让你确认规划后，启动 Manager。建议新开一个 Codex 会话：

```text
$apm-2-initiate-manager
```

Manager 会读取 Planner 产出的 `.apm/spec.md`、`.apm/plan.md`、`.apm/tracker.md`，然后派发任务。

第三步，启动 Worker。简单任务可以只开一个 Worker 会话：

```text
$apm-3-initiate-worker
```

Worker 收到任务后，检查自己的任务：

```text
$apm-4-check-tasks
```

Worker 执行任务、运行验证、写报告。

注意：如果 Manager 已经给该 Worker 派发任务，`$apm-3-initiate-worker <worker-id>` 会在注册身份后直接进入任务执行流程，不一定需要手动再执行 `$apm-4-check-tasks`。

`$apm-4-check-tasks` 的作用是检查当前 Worker 是否有新任务。常见使用场景是：

-   Worker 启动时 Task Bus 为空，后面 Manager 又派了任务；
    
-   同一个 Worker 完成上一批任务后，需要领取下一批任务；
    
-   不确定当前 Worker 是否还有待处理任务。
    

一句话：`apm-3` 负责启动并注册 Worker；`apm-4` 是取任务按钮，不是每次启动 Worker 后都必须手动执行。

对于多模块项目，不要让一个 Worker 从头做到尾。正确方式是由 Manager 按模块拆分任务，然后启动多个 Worker 会话并行执行。每个 Worker 只处理自己收到的任务，完成后写报告，由 Manager 统一检查。

示例：

```text
$apm-3-initiate-worker worker-collector
$apm-3-initiate-worker worker-model
$apm-3-initiate-worker worker-api
$apm-3-initiate-worker worker-frontend
$apm-3-initiate-worker worker-devops
```

对应分工可以是：

| Worker | 负责范围 |
| --- | --- |
| worker-collector | 情报源 Connector，例如 NVD、CISA KEV、RSS、厂商公告 |
| worker-model | 数据模型、标准化、去重、字段映射 |
| worker-api | 后端 API、搜索、筛选、详情、告警接口 |
| worker-frontend | 前端工作台、列表页、详情页、告警页 |
| worker-devops | Docker Compose、环境变量、日志、健康检查、部署文档 |

每个 Worker 在自己的会话中执行：

```text
$apm-4-check-tasks
```

Manager 再通过：

```text
$apm-5-check-reports
```

批量检查 Worker 报告，决定接受、返工或继续派发下一批任务。

一句话：一个 Worker 不是一个完整项目，而是一个任务通道。复杂项目应该多 Worker 并行，Manager 分批派工、批量验收。

第四步，回到 Manager 会话检查报告：

```text
$apm-5-check-reports
```

第五步，如果 Manager 或 Worker 会话上下文太长，需要交接：

```text
$apm-6-handoff-manager
$apm-7-handoff-worker
```

Codex 自带会话压缩不能完全替代 APM handoff。两者解决的问题不同：

| 机制 | 作用 | 面向对象 |
| --- | --- | --- |
| Codex 会话压缩 | 保留当前对话摘要，让同一个会话继续工作 | 当前 Codex 会话 |
| APM handoff | 把 Manager / Worker 的任务状态、已读日志、下一步动作写入项目文件 | 新会话、新 Worker、新 Manager、人类复盘 |

会话压缩解决的是「这个聊天窗口别丢上下文」。APM handoff 解决的是「换一个会话、隔天继续、别人接手、审计复盘时知道该从哪里继续」。

使用建议：

-   短任务不用 handoff，任务报告就够。
    
-   单个 Worker 当天能做完的任务不用 handoff。
    
-   上下文快满、任务做到一半、需要换会话时，用 handoff。
    
-   Manager 已经派了多轮任务、状态复杂时，用 handoff。
    
-   阶段结束时优先用 summarize / archive，而不是 handoff。
    

第六步，阶段结束或需要恢复时：

```text
$apm-8-summarize-session
$apm-9-recover
```
<!-- DAILY_CHECKIN_2026-05-19_END -->
<!-- Content_END -->
