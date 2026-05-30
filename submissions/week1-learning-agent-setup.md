# Week 1 AI 向任务：Learning Agent Setup

> 提交人：2758star | 日期：2026-05-18

## 1. 选择的 Agent / AI 工具

| 工具 | 角色 | 说明 |
|------|------|------|
| Claude Code | 主力学习代理 | 代码执行、任务提交、笔记管理、实验开发 |
| Hermes Agent | 副驾驶 | 本地 Dashboard [localhost:9119](http://localhost:9119)，辅助规划和跟踪 |
| DeepSeek API | LLM 推理 | 给交易解释器等工具提供 AI 能力 |

分工：Claude Code 做所有代码和提交，Hermes 读 PROGRESS.md 跟上进度做规划建议。飞书已退场，全部本地。

## 2. Agent 帮我完成的学习任务

- 初始化学习仓库结构（daily/、tasks/、experiments/ 等）
- 生成三阶段学习计划（learning-plan.md）
- 每日打卡草稿生成 → 我确认后写进 notes/2758star.md
- WCB API 任务查询和提交
- 交易解释器原型开发
- 学习进度追踪（PROGRESS.md 维护）

## 3. 关键 prompt / 配置

**CLAUDE.md（给 Claude Code 的上下文）：**

```
你是 2758star 的 AI × Web3 School Learning Agent。
学员画像：AI 新手、Web3 新手、无代码，方向产品研究+内容运营+Hackathon。
ADHD，回复简短直接。

每日流程：
- 早 9:00：拉 WCB Learning 页面 → 读 Handbook → 生成学习路径
- 晚 21:00：读当天笔记 → 生成打卡草稿 → 推送 → 提 PR

提交规则：
- 所有 proof URL 指向 https://github.com/2758star/AI-Web3-School
- 提交 WCB 前必须征得用户同意
```

**PROGRESS.md** 作为 Hermes 和 Claude Code 的共享上下文，包含当前进度、待办事项、环境配置、上次完成和下次计划。

## 4. 成功输出记录

交易解释器的端到端运行输出（Sepolia ERC20 USDT+ 转账分析）：

```
用户发起的动作：发送方调用了合约 transfer 函数，向 0x69eA...3B20 转入 155 个代币。

事实 vs 推断：
| 事实 | 推断 |
|------|------|
| tx hash、区块高度、Gas 消耗都是链上数据 | 发送方可能是代币持有者 |
| Transfer 事件记录了从 A 到 B 转 155 个代币 | 可能是支付、转账或充值 |

工具限制：只做 eth_call 读操作，不碰私钥和钱包签名。
```

## 5. 人工复核 / 修正 / 拒绝记录

1. **Hermes 擅自提交 WCB 任务**（5.18 早期）：Hermes 在没有征得我同意的情况下提交了多个任务。我生气了。随后写入规则：WCB 提交前必须征得用户同意。Hermes 的 cron 被移除。

2. **飞书退场**：Hermes 最初接飞书做群聊提醒，但飞书 WebSocket 事件订阅一直有问题（消息发得出去收不回来），加上我发现全本地更方便，飞书直接退场。

3. **仓库改私密**：Hermes 初始化的个人仓库是公开的。我发现里面有 API endpoint 配置信息后，手动改成私密。

4. **概念卡片改写**：AI 概念卡片初稿太像教科书，我用自己的话重新写了一遍，加入实际使用中的体会。
