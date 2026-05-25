# Learning Plan · @czxzazsbb

> 起点：2026-05-25（Day 8） · 终点：2026-06-14（Day 28，Hackathon Demo）
> 剩余 ~21 天 · 每日 30–60 分钟 · Vibe Coding 路径

## 设计原则

1. **每日有最小路径**（≤30 分钟）+ **推荐路径**（≤60 分钟），保底完成最小路径就算打卡。
2. **每周一个阶段目标**，结束时产出一个可在仓库里看到的 artifact。
3. **AI 基础先于 Web3 桥接**，Web3 基础已有则跳过基础概念。
4. **Vibe Coding 贯穿全程**——所有 hands-on 优先用 Claude Code / Cursor 让 AI 协助跑代码，不卡在语法。

## 周节奏

### Week 2 补课 + AI 基础（2026-05-25 → 05-31，Day 8–14）

补 Week 1 没打的 AI 基础课程，用 leave rules 处理前 7 天。

| 日 | 主题 | Handbook 链接 | 产出 |
| --- | --- | --- | --- |
| Day 8 (05-25 日) | LLM 基础 | [/zh/handbook/ai/llm/](https://aiweb3.school/zh/handbook/ai/llm/) | `personal/daily/2026-05-25.md` + 笔记里 1 个"我还没搞懂的问题" |
| Day 9 (05-26 一) | Prompt | [/zh/handbook/ai/prompt/](https://aiweb3.school/zh/handbook/ai/prompt/) | 在 `personal/experiments/` 写一个 prompt 模板 |
| Day 10 (05-27 二) | Context | [/zh/handbook/ai/context/](https://aiweb3.school/zh/handbook/ai/context/) | 笔记一段"上下文窗口对真实任务的影响" |
| Day 11 (05-28 三) | RAG | [/zh/handbook/ai/rag/](https://aiweb3.school/zh/handbook/ai/rag/) | 画 RAG 流程图（手绘 / mermaid 都行）放在 `personal/daily/` |
| Day 12 (05-29 四) | Agent | [/zh/handbook/ai/agent/](https://aiweb3.school/zh/handbook/ai/agent/) | 列出 3 个"我以为是 Agent 其实只是 Workflow"的例子 |
| Day 13 (05-30 五) | Vibe Coding | [/zh/handbook/ai/vibe-coding/](https://aiweb3.school/zh/handbook/ai/vibe-coding/) | 装好 Claude Code（已装则跳过），跑一个 hello-world 项目 |
| Day 14 (05-31 六) | MCP | [/zh/handbook/ai/mcp/](https://aiweb3.school/zh/handbook/ai/mcp/) | 用一个公开 MCP server 连接试一下 |

### Week 3 AI × Web3 Bridge + 选 Hackathon 方向（2026-06-01 → 06-07，Day 15–21）

| 日 | 主题 | 产出 |
| --- | --- | --- |
| Day 15 (06-01 日) | Chain-aware Context | [/zh/handbook/bridge/chain-aware-context/](https://aiweb3.school/zh/handbook/bridge/chain-aware-context/) 读完 + 自己说一遍区别 |
| Day 16 (06-02 一) | Agentic Commerce 案例 | [/zh/handbook/tracks/agentic-commerce/](https://aiweb3.school/zh/handbook/tracks/agentic-commerce/) 拆解一个具体案例 |
| Day 17 (06-03 二) | 赛道扫描 | 把 4 个赛道（Agentic Commerce / Dev Tooling / AI Security / AI Governance）各写 100 字 |
| Day 18 (06-04 三) | 选定方向 | 写出"我选 X 因为 Y"——`personal/hackathon/direction.md` |
| Day 19 (06-05 四) | 问题图 | 在选定方向里画一个 problem map（谁发起/执行/付费/校验/担责） |
| Day 20 (06-06 五) | 提案初稿 | `personal/hackathon/proposal-v1.md` |
| Day 21 (06-07 六) | 找队友 / 自己单干 | 在 TG / WCB 上找搭子，记录决定 |

### Week 4 MVP + 提交（2026-06-08 → 06-14，Day 22–28）

| 日 | 主题 | 产出 |
| --- | --- | --- |
| Day 22 (06-08 日) | MVP 骨架 | 用 Vibe Coding 跑出最小可运行版本（前端壳 + 一个 mock 调用） |
| Day 23 (06-09 一) | 加 AI 能力 | 接 LLM API（不是真做模型，是接） |
| Day 24 (06-10 二) | 加 Web3 能力 | 接钱包 / testnet 交互（不是写新合约） |
| Day 25 (06-11 三) | 串通流程 | 跑通一次 "意图 → AI 规划 → 用户确认 → 链上执行 → 可校验记录" |
| Day 26 (06-12 四) | Demo 录制 | 录 ≤3 分钟视频 + 写 README |
| Day 27 (06-13 五) | 提交 | 推到 `personal/submissions/`，链接放 WCB |
| Day 28 (06-14 六) | 复盘 | `personal/daily/2026-06-14.md` 写整个 cohort 的复盘 |

## 风险与对策

| 风险 | 对策 |
| --- | --- |
| 工作日只有 30 分钟 | 那天只做最小路径，挑战路径挪到周末 |
| Vibe Coding 在某个 bug 卡住 | 卡 > 30 分钟就停下来写"我卡在哪"的 issue 到 `personal/tasks/`，第二天问社区或 Agent |
| Week 1 没打卡的心理负担 | leave rules 每周允许 2 天，已经写明从 Day 8 开始记录，不补假打卡 |
| 隐私泄漏 | 任何笔记里出现 API key / 私钥 / 助记词，立刻撤回 + rotate |

## 迭代规则

本计划每周可调一次。每周日（Day 7/14/21/28）回顾，如果偏离严重就直接改这份文件 + commit，**不要硬扛**。
