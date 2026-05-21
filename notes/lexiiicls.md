---
timezone: UTC+8
---

# lexiiicls

**GitHub ID:** lexiiicls

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->
### **\# Daily Note | 每日学习与打卡 (2026-05-20)**

\- **学习主题：** Cohort 0 启航 & AI x Web3 个人学习系统初始化

\- **今日目标：** 配置个人 Learning Agent，初始化本地与 GitHub 学习仓库，了解课程全貌，完成 Day 1 『上下文窗口』与『AI 幻觉』的商业操盘手认知对齐。听Web3 运行原理课程，并参加 Co-Learning。

\- **投入时间：** 2.5小时

📝 学习笔记与感悟

今天成功在本地和 GitHub 初始化了 AI × Web3 School 学习系统，我的个人 Learning Agent 开始运转。

💡 核心知识点卡片：

核心知识点卡片与 OPC 商业感悟

1\. 上下文窗口 (Context Window)

\* **大白话定义**：AI 的瞬时记忆脑容量（黑板面积）。超出上限 AI 就会遗忘初始约束（人设崩塌）。

\* **商业变现（OPC 场景）**：利用超大上下文窗口，直接喂入过去 100 篇爆款文案和品牌视觉规范。AI 可以在 1 分钟内批量输出 30 篇完全符合个人调性的“高阶伪原创”内容，一个人顶替 10 人营销团队。

\* **操盘手风控**：

\* 【防技术忽悠】：拒绝外包团队动辄几十万的“模型微调”忽悠，95% 场景用 Prompt + Workflow 在大上下文里就能解决，省钱且可控。

\* 【防溢出自动化】：技术上可通过“滑窗机制”或“自动摘要压缩”来自动化防止窗口超出，无需完全依赖人工盯 Token。

2\. AI 幻觉 (Hallucination)

\* **大白话定义**：大模型基于概率“一本正经地胡说八道”。它只在乎话听起来像不像人话，不在乎真理。

\* **商业套利（OPC 场景）**：

\* 【防守（降本增效）】：利用 RAG（检索增强生成）思想，把权威报告喂给 AI 圈定生成范围，命题作文，将幻觉率压制到近乎为零。

\* 【进攻（创意爆款）】：故意调高模型参数中的 `temperature`（温度值至 0.8-1.2），主动诱发“轻度幻觉”来激发爆款营销脑洞和猎奇标题。

\* **操盘手风控**：

\* 【公关防线】：绝不让 AI Agent 在无人工复核（Human-in-the-loop）的情况下深度参与即时客服或业务问答，防止幻觉引发品牌公关灾难。

\* 【资产防线】：在 Web3 项目交易、下单等资金流水上，AI 绝不享受“最终签名权”与“一票否决权”。采用“子母钱包”进行小额自动化实验，大额资金必须触发人工多签复核，防止幻觉导致钱包归零。

\---

🙋 本人第一阶段核心研究课题（追问记录）

1\. **自动化防窗口溢出**：如何在 Hermes 后台的 messages 数组中配置 max\_tokens 拦截与 Summary 压缩机制。

2\. **Temperature 简单配置**：掌握在 API 入参中通过 0.0（严谨检查）和 1.0（创意爆款）数字调控模型创造力的简易方法。

3\. **Web3 智能体技术红线**：理解 LLM 概率预测机制导致的“幻觉不可避免性”，明确链上自动化交易的“资产物理隔离墙”架构。

🛠️ 今日实验与输出

\- 在云端创建了 Public 仓库`lexiiicls/ai-web3-school-cohort-0`；

\- 在本地 `~/ai-web3-school-cohort-0` 搭建了规范的文件夹结构与三大模板（打卡、任务、Handbook反馈）；

\- 制定了专属的定制学习计划[https://github.com/lexiiicls/ai-web3-school-cohort-0/blob/main/learning-plan.md](https://github.com/lexiiicls/ai-web3-school-cohort-0/blob/main/learning-plan.md)

由于我的 Agent 大模型一直在报错，明天我调整模型后再重新优化这个 Learning Plan。目前的学习范围感觉有一点窄。

📂 个人学习仓库（内含今日完整笔记与代码）：

[https://github.com/lexiiicls/ai-web3-school-cohort-0/blob/main/daily/2026-05-20.md](https://github.com/lexiiicls/ai-web3-school-cohort-0/blob/main/daily/2026-05-20.md)
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->

今天跟着教程在 macOS 上面安装 Hermes Agent，准备阶段安装了Homebrew。

第一次模型选择 Google 3.1 pro preview

已经连接了Telegram，卡在 Telegram的回复特别慢，显示如下：

⏳ Still working... (3 min elapsed — iteration 1/90, waiting for stream response (150s, no chunks yet))

第二次模型选择 Google Flash Latest

还是有上面的情况，于是我跟着 AI 一起重新设置，创建了一个新的 API Key 替换掉了旧的。

目前 Telegram 状态是不回复，下一步要继续寻找问题，争取在明天内把这个助手搭建好，抓紧进入学习状态
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->


1.  重新看了开营回放
    
2.  研究Hermes Agent怎么搭建
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
