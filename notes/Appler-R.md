---
timezone: UTC+8
---

# Ryan

**GitHub ID:** Appler-R

**Telegram:** @Appler0x

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->
Agent=LLM+记忆 (Memory)+规划 (Planning)+工具 (Tools)

### 一、 核心四大支柱

1\. 大脑（Brain / Core LLM）

一切的核心。LLM 在这里充当“中央处理器”，负责理解人类的模糊意图、进行逻辑推理、做出决策。

2\. 规划（Planning）：怎么拆解任务

面对一个复杂目标（比如“帮我写一个 Web3 自动化交易脚本”），Agent 不能直接盲写，它需要规划能力：

-   **子任务拆解**：将大任务拆成 Step 1, Step 2, Step 3。
    
-   **反思与自我修正（Reflexion）**：执行过程中如果报错，它能像人一样看懂报错信息，倒回去修正自己的代码，重新尝试。
    

3\. 记忆（Memory）：怎么记住上下文

-   **短期记忆**：当前对话的 Context（上下文）。
    
-   **长期记忆**：通过 **RAG（检索增强生成）** 或外部向量数据库，存储长期的专业知识、历史操作记录或用户个人偏好，确保随时可以调取。
    

4\. 工具使用（Tools / Actions）：怎么改变现实

这是 Agent 与纯聊天机器人拉开差距的关键。LLM 本身不能上网、不能点外卖、不能跑代码，但 Agent 可以调用 **API**。

-   **计算器**：解决 LLM 做数学题容易幻觉的问题。
    
-   **网络搜索**：获取最新实时信息。
    
-   **代码沙盒（Code Interpreter）**：自写代码并在线运行，查看结果。
    

### 二、 Agent 圈子里必须懂的 3 个技术黑话

在研究 Agent 落地时，你会反复听到以下三个核心概念：

-   **ReAct 模式 (Reasoning + Acting)**： 思维与行动的交替循环。Agent 走一步、看一步。
    
    > 思考（Thoughts）➔ 行动（Actions）➔ 观察结果（Observations）➔ 再思考。
    
-   **Tool Calling（工具调用）**： LLM 本身不运行工具，它只做“选择题”。你给它一堆工具说明书，LLM 决定“现在应该调用高德地图 API，参数是经纬度”，然后把这个决定返回给代码系统去执行。
    
-   **Multi-Agent（多智能体协同）**： 让多个 Agent 分工合作。比如一个扮演“产品经理”提需求，一个扮演“程序员”写代码，一个扮演“测试员”找 Bug，它们在后台自己吵架、迭代，最后把成品交给你。
    

> **Takeaway 总结：**
> 
> 传统的软件开发是 **“人类写死逻辑 ➔ 机器执行”**； Agent 的逻辑是 **“人类给定目标和工具 ➔ AI 自己生成逻辑并执行”**。它代表了从“人机交互”走向“人机协同”的范式转变。
<!-- DAILY_CHECKIN_2026-05-20_END -->
<!-- Content_END -->
