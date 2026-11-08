# Week 1 前置准备：创建课程 GitHub repo

> 提交人：2758star | 日期：2026-05-18

## 仓库

| 仓库 | 可见性 | 用途 |
|------|--------|------|
| [2758star/AI-Web3-School](https://github.com/2758star/AI-Web3-School) | 公开 | 残酷共学打卡 + WCB 任务 proof |
| 2758star/ai-web3-school-cohort-0 | 私密 | 个人学习日志、草稿、实验代码 |

## Week 1 学习目标

1. 完成 Handbook AI 基础模块（LLM → Prompt → Context）
2. 完成 Handbook Web3 基础模块（钱包 → 交易 → 合约）
3. 完成测试网交易 + 合约交互
4. 做出至少一个 AI × Web3 实验原型
5. 每日打卡不断档

## 私密仓库目录结构

```
ai-web3-school-cohort-0/
  README.md              # 项目说明
  profile.md             # 学员画像
  learning-plan.md       # 三阶段学习计划
  PROGRESS.md            # 学习进度总览
  CLAUDE.md              # Claude Code 上下文
  daily/                 # 每日学习笔记
  tasks/                 # 任务清单
  experiments/           # 实验项目（如 tx-interpreter）
  handbook-feedback/     # Handbook 反馈积累
  hackathon/             # Hackathon 准备
```

## Agent 初始化说明

Hermes Agent 最初帮我初始化了仓库，包括：
- 阅读了启动 prompt（https://aiweb3.school/learning-agent.zh.txt）
- 创建了基础目录结构
- 生成了 profile.md 和 learning-plan.md 草稿

我人工确认/修改了：
- 学习方向改为「产品研究 + 内容运营 + Hackathon」
- 三阶段学习计划的具体模块安排
- 后来把 Hermes 的 cron 移除，改由 Claude Code 全面接管学习代理

## commit 记录

两个仓库均有多次 commit 记录。
