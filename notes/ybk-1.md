---
timezone: UTC+8
---

# ybk-1

**GitHub ID:** ybk-1

**Telegram:** @bky71

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->
````markdown
# Daily Note / 每日打卡 — 2026-05-20

## Today's Plan / 今日计划

- [x] 策划最小可交互 AI 学习产物
- [x] 设计 tx-explain CLI 架构
- [x] 编写 tx-explain.py 主体代码
- [ ] 运行 --test 验证（API key 失效，待解决）
- [ ] 更新 README

## Learning Log / 学习记录

### What I learned / 学到了什么

今天策划并动手做了一个新实验：**Tx-Explain CLI** — 一个交互式交易问答学习工具。

**核心思路**：在前两次实验（tx-interpreter 单次分析、tx-risk-summary 结构化风险判断）的基础上，增加「对话式追问」功能。用户输入一条交易哈希，AI 先给风险摘要，然后用户能像聊天一样不断追问：「这个 approve 是什么意思？」「gas 费合理吗？」「这个合约安全吗？」。

**架构设计**：

```
用户输入 tx_hash
  → 链上数据获取（复用已有 rpc 函数）
  → 首次分析：LLM 输出结构化风险摘要（复用 risk-summary prompt + schema）
  → 问答循环：
      → 携带交易上下文 + 历史对话 → 发给 LLM
      → 以教学方式回答
      → 支持 exit / new / help 命令
```

**关键技术决策**：
- **Context window 管理**：只保留最近 5 轮问答历史，避免 token 溢出
- **首次分析 vs 问答**：首次分析用 `response_format: json_object` 保证结构化输出；问答模式用自由文本，让 LLM 可以用自然语言教学
- **QA 模式 system prompt**：在原有风险分析 prompt 基础上，加了「教学」指令——解释专业术语、用例子和比喻帮助理解

**与前面实验的关系**：

| 实验 | 核心能力 | 新增 |
|------|---------|------|
| tx-interpreter | 单次交易解释 | - |
| tx-risk-summary | 结构化风险判断 + schema 校验 | code 层校验 |
| tx-explain (今天) | 交互式问答学习 | context 管理 + 对话循环 |

### Questions / 疑问与卡点

- **API key 失效**：运行 `--test` 时遇到 401，当前 Silicon Flow API key 需要更新
- **QA 模式的 prompt 需要迭代**：首次写的 QA prompt 效果如何，需要在 API key 恢复后实测验证
- **context window 裁剪策略**：MAX_HISTORY=5 是否合理，需要实测后调整

## Daily Check-in / 打卡

- [ ] 已提交 WCB 打卡
- [ ] 打卡链接：

## Tomorrow's Preview / 明日计划

- [ ] 解决 API key 问题，运行 --test 验证
- [ ] 实测一条真实交易哈希的完整交互流程
- [ ] 更新 README.md
- [ ] 如果时间充裕，迭代 prompt 质量

## Stats

- 学习时长：1.5h
- 完成度：策划 + 编码完成，待验证
````
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->

# Daily Note / 每日打卡 — 2026-05-19

## Today’s Plan / 今日计划

-   \[x\] 学习并整理 AI 基础核心概念
    
-   \[x\] 完成 tx-risk-summary 最小实践回顾
    
-   \[x\] 配置项目级 + 全局 [CLAUDE.md](http://CLAUDE.md)
    
-   \[ \] 浏览下一章节 Handbook
    

## Learning Log / 学习记录

### AI 核心概念整理

基于 Handbook 和已有实践，整理以下概念作为后续 Agent、workflow、AI coding 的共同语言：

1\. LLM（大语言模型）

**一句话**：LLM 是一个概率模型，它的本质是根据上文预测下一个 token，不是事实数据库，也不是逻辑引擎。

**具体例子**：当你问 “1 ETH 等于多少 USD”，LLM 不是在查汇率数据库，而是基于训练数据中见过的文本模式，生成一个最可能接着出现的 token 序列。

**常见误区**：把 LLM 的输出当真理。它可能编造一个看起来很合理的数字。在交易解释器项目里，我们把 LLM 输出叫 “model inference”，和链上事实分开标注，就是对这点的防御。

* * *

2\. Prompt（提示词）

**一句话**：Prompt 是你跟 LLM 沟通的"代码"，它的质量直接决定输出质量——本质上你是在通过自然语言编程。

**具体例子**：在 [tx-risk-summary.py](http://tx-risk-summary.py) 里，我们用了 Instruction 四段式结构——任务目标 / 可用输入 / 禁止行为 / 输出格式，而不是只写一句 “分析这笔交易”。

**常见误区**：以为 prompt 是安全边界。实际上 prompt 是软约束，LLM 可能被注入的指令覆盖（prompt injection）。所以必须在 code 层做校验，不能只靠 prompt 保证安全。

* * *

3\. Context Window（上下文窗口）

**一句话**：LLM 一次能"看到"的最大 token 数，超出部分会被遗忘，类似短期记忆的上限。

**具体例子**：在 tx-interpreter 里，我们把交易数据、收据、方法签名全部塞进一条 prompt 里发给 LLM——这些内容必须在模型的 context window 范围内。

**常见误区**：以为 context window 越大越好。更大的窗口意味着更贵的成本、更慢的响应，而且模型对中间内容的注意力会衰减。关键信息放在开头或结尾效果最好。

* * *

4\. Tool Use（工具调用）

**一句话**：让 LLM 不只是输出文字，还能调用外部工具（API、数据库、合约）来执行实际操作，是 LLM 从"聊天"走向"行动"的关键能力。

**具体例子**：我们的 tx-interpreter 虽然还没用到 LLM 主动调用工具，但架构上已经规划了——比如 LLM 分析出 “这是一个 swap” 后，可以自动调用 DexScreener API 查价格、调用 Etherscan 查合约审计状态。

**常见误区**：把 tool use 和 agent 混为一谈。tool use 只是一个动作（LLM 决定调一个函数），agent 是能自主决策、多步推理、记住过程、纠正错误的完整循环。

* * *

5\. Agent（智能体）

**一句话**：Agent 是能自主完成多步任务的 LLM 系统——它有自己的推理循环、能使用工具、能记住中间结果、能在出错时自我纠正。

**具体例子**：一个 DeFi agent 的流程可能是：用户说 “帮我找最优借贷利率” → Agent 调用多个协议 API 查利率 → 比较结果 → 发现 AAVE 最高 → 检查用户钱包余额 → 估算 gas → 确认执行。每一步自己决策，不需要人每一步都指引。

**常见误区**：觉得 agent 就是 “调了一个 LLM 的 API”。真正的 agent 需要一套完整架构：planning（规划下一步）、memory（记住已完成和待完成）、tool use（执行动作）、reflection（判断结果对不对、需不需要重试）。

* * *

6\. Workflow（工作流）

**一句话**：Workflow 是把一个复杂任务拆成多个预设步骤，每一步可能调用 LLM、规则逻辑或人工审核，串成一个可预测的流水线。

**具体例子**：我们的 tx-risk-summary 本质上就是一个简单 workflow：获取链上数据 → 解析方法签名 → 构建 prompt → 调 LLM → schema 校验 → 判断是否需要人工审批。每个步骤是确定的、可追踪的。

**常见误区**：workflow 和 agent 的区别——workflow 是"预先画好的路线图"，每一步做什么是写死的；agent 是"给你一个目标，自己找路过去"。workflow 适合稳定、已知的任务（如交易风险分析），agent 适合需要灵活探索的任务。

* * *

7\. Guardrails（护栏 / 安全边界）

**一句话**：Guardrails 是在 LLM 输入和输出周围加的代码层检查，防止模型做出不安全或不符合预期的行为。

**具体例子**：tx-risk-summary 里的 `validate_schema()` 函数就是最基础的 guardrail——校验 risk\_level 是不是 low/medium/high 之一、requires\_human\_approval 是不是布尔值。如果格式不对，不走后续流程。

**常见误区**：以为 guardrail 就是 prompt 里写 “不要做 X”。代码层的 guardrail 才是真正的安全边界，prompt 只是第一道防线。越关键的系统，越需要在代码层拦截（比如金额超过阈值自动拦截、目标地址不在白名单自动拦截）。

* * *

8\. Human-in-the-Loop（人在回路）

**一句话**：在关键决策点让真人介入确认，而不是让 AI 全自动执行——适用于高风险场景的最后一道防线。

**具体例子**：tx-risk-summary 的 `requires_human_approval` 字段就是 HITL 的切入点——当风险等级为 high 时标记需要人工确认，交易不会自动执行。用户先看风险摘要，再决定签不签。

**常见误区**：“AI 已经很准了，不需要人看了”。问题是 LLM 可能在高风险场景下（如无限授权）做对 99%，但剩下的 1% 足以造成损失。HITL 不是对 AI 的不信任，而是对风险的保险。

* * *

### Questions / 疑问与卡点

-   Agent 的 planning 和 reflection 环节具体怎么实现？需要看一些开源 agent 框架（如 LangChain Agent、Vercel AI SDK）的实际代码
    
-   Guardrails 的代码层拦截在 DeFi 场景下能做到多细？比如能不能做到 “只允许交易已审计的合约”？
    

## Daily Check-in / 打卡

-   \[ \] 已提交 WCB 打卡
    
-   \[ \] 打卡链接：
    

## Tomorrow’s Preview / 明日计划

-   \[ \] 看下一章节 Handbook 内容
    
-   \[ \] 尝试把 tool use 整合进现有实验
    
-   \[ \] 继续深入 Agent 架构学习
    

## Stats

-   学习时长：2h
    
-   完成度：概念整理阶段
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->


![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/ybk-1/images/2026-05-18-1779097067324-image.png)

已经完成最小可验证的实践

```json
{
  "summary": "一笔低价值、低Gas费的合约调用交易，状态成功，但具体意图不明。",
  "details": {
    "action": "用户向合约地址发送了一笔极小额ETH并附带22字节的input数据，调用了Method ID为0x043bc855的函数。",
    "assets": [
      "0.000000000673592463 ETH（约6.74e-10 ETH）"
    ],
    "addresses": {
      "from": "0xae2fc483527b8ef99eb5d9b44875f005ba1fae13",
      "to": "0x1f2f10d1c40777ae1da742455c65828ff36df387",
      "interacted_contract": "0x1f2f10d1c40777ae1da742455c65828ff36df387"
    }
  },
  "chain_facts": [
    "交易状态为成功（status: success）",
    "发送方地址：0xae2fc483527b8ef99eb5d9b44875f005ba1fae13",
    "接收方/合约地址：0x1f2f10d1c40777ae1da742455c65828ff36df387",
    "转账金额：0.000000000673592463 ETH",
    "Gas使用量：111,114",
    "有效Gas价格：0.184089938 Gwei",
    "总交易费：约0.000020 ETH",
    "Method ID：0x043bc855",
    "Input数据长度：22字节",
    "产生了4条日志（logs_count: 4）"
  ],
  "model_inference": [
    "这是一笔与合约的交互交易，而非简单的ETH转账，因为input数据非空且长度固定。",
    "Method ID 0x043bc855 未在常见函数选择器库中匹配到标准函数（如ERC20 transfer、approve等），可能是一个自定义合约函数。",
    "转账金额极低（约6.74e-10 ETH），可能仅作为触发合约逻辑的“燃料”或占位符。",
    "Gas使用量（111,114）和日志数量（4）表明合约执行了非平凡的操作，可能涉及状态变更或事件触发。",
    "极低的Gas价格（0.18 Gwei）表明发送方对交易确认速度要求不高，可能是测试、批量操作或低优先级调用。"
  ],
  "uncertainties": [
    "无法确定Method ID 0x043bc855对应的具体函数名称和功能。",
    "无法确定input数据（22字节）的具体含义（可能是参数编码）。",
    "无法确定合约地址0x1f2f10d1c40777ae1da742455c65828ff36df387的归属和用途。",
    "无法确定4条日志的具体内容（未提供日志数据）。",
    "无法确定发送方发起此交易的真实目的（测试、空投领取、治理投票、或恶意调用等）。"
  ],
  "risk_notes": [
    "由于Method ID未知且input数据不可读，无法评估合约调用的安全性。",
    "建议在签署类似交易前，通过区块链浏览器（如Etherscan）查看目标合约的源代码和ABI，确认函数功能。",
    "注意极低Gas价格可能导致交易在拥堵时长时间待处理，但此处已成功。",
    "如果合约地址是未知或未经验证的，应避免授权或发送任何有价值的资产。",
    "检查发送方地址的历史交易，确认其与目标合约的交互模式是否正常。"
  ]
}
```

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/ybk-1/images/2026-05-18-1779097317932-image.png)
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
