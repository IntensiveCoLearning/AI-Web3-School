---
timezone: UTC+8
---

# TopAimer

**GitHub ID:** AimerMike

**Telegram:** @aimersadist

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->
Prompt design is safety design. In Web3, context quality and permission boundaries decide whether an AI agent is just helpful or dangerously overconfident.

```markdown
- Define the agent as a wallet safety assistant.
- Ask it to explain intent and summarize risk, not make the signing decision.
- Require structured context: chain ID, contract address, decoded calldata, token, amount, spender or recipient, current allowance, simulation result, warnings, and sources.
- Require output to separate confirmed facts, missing data, assumptions, and risks.
- Make the boundary explicit: the agent must not sign, submit, or approve anything without human confirmation.
```

|   |   |   |   |   |   |   |   |   |   |   |   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|   |   |   |
|   |   |   |
|   |   |   |
|   |   |   |
|   |   |   |
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->


| 角色 | 擅长领域 | 短板 | 使用边界 |
| --- | --- | --- | --- |
| LLM 大语言模型 | 解读释义、内容总结、对比分析、方案规划 | 无上下文无法获取实时信息，无法保证内容绝对真实 | 必须主动说明信息不确定点与信息来源局限 |
| 外部工具 | 获取实时链上数据、执行定向专属操作 | 无法独立理解用户真实诉求 | 严格限定工具使用权限，仅做专项操作 |
| 人类 | 确定核心目标、理性判断、最终审批决策 | 低效重复的数据搜集工作 | 不可逆链上操作必须由人工确认 |
| 区块链公链 | 交易结算、公开链上状态留存、行为留痕审计 | 无法自主解读行为含义、判定交易安全 | 仅记录用户签名确认后的最终链上行为 |

| 概念 | 通俗释义 | AI+Web3 行业应用意义 |
| --- | --- | --- |
| 令牌（Token） | 模型读写文本的最小文字单元 | 务必精准留存钱包地址、函数名、转账数额等关键信息 |
| 上下文（Context） | 当前任务中提供给模型的全部信息 | 必须明确给出钱包状态、区块链 ID、合约元数据、交易模拟结果 |
| 幻觉（Hallucination） | 看似合理、实则无真实依据的虚假回答 | 绝对不能把大模型输出内容当作智能合约安全判定依据 |
| 工具调用（Tool use） | 调取外部系统获取实时 / 结构化数据 | 借助区块链远程调用接口、区块浏览器、数据索引器、交易模拟工具、官方文档核实信息，杜绝主观猜测 |
| 核验校验（Verification） | 对照可靠信源核实各类结论 | 执行操作前，要求信息溯源、进行确定性核查或人工复核 |
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->




CODEX helped me built a full AI Web3 project

今天完成了 AI x Web3 School 的学习环境初始化：

-   阅读了 Learning Agent 启动 Prompt，明确了 Agent 的边界：辅助规划、整理、生成草稿，但正式提交和写入平台需要人工确认。
    
-   阅读了 Handbook 首页，理解了整体知识地图：AI 基础、Web3 基础、AI x Web3 Bridge、前沿探索。
    
-   初始化了个人学习仓库结构，用于沉淀 daily notes、tasks、experiments、handbook feedback、hackathon 想法和 submissions 草稿。
    
-   建立了隐私规则：公开 repo 不提交 API key、私钥、助记词、密码、未公开联系方式、内部链接或他人个人数据。
    

明天计划：

-   补全个人学习画像。
    
-   根据 WCB Learning 页面确认当天任务。
    
-   从 Handbook 中选择最需要补齐的基础章节开始学习。
    

今日卡点：

-   还需要手动授权确认sync GitHub仓库，把每日学习投入时间降低、把学习路径调得更贴合。
    

AI绝不是万能的，我只是学习中的prompt engineer & auditor
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
