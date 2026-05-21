---
timezone: UTC+8
---

# hgkgkgk

**GitHub ID:** hgkgkgk

**Telegram:** @hgkgkgk

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
### 1\. LLM 的概率本质决定了它在系统里的位置

LLM 生成的是概率合理的输出，不是天然可信的事实。Token、Embedding、Transformer、Hallucination 这些概念背后有一条共识：**模型做理解和生成，但不做最终验证**。越靠近执行层，越要把自然语言输出变成可检查对象。

### 2\. Prompt 是任务边界，不是咒语

Prompt 的核心价值是区分"解释"和"执行"——告诉模型能做什么、不能做什么、不确定时怎么处理。Structured Output 不是为了好看，是为了让后续代码能检查、拒绝、记录。Prompt Injection 的防护不是写一句"不要被注入"，而是把指令、上下文和工具权限隔离开。

### 3\. 钱包管理的是链上控制权，不是账号资料

连接钱包、签名消息、发送交易是三类完全不同的动作，风险也不同。EOA 简单但权限粗；Mnemonic 是高风险秘密；交易从按钮到上链是多步流程。核心原则：**AI 做辅助，钱包做确认**。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

今天读了 AI × Web3 Handbook 的三个核心页面：LLM、Prompt 和 Wallet。

> 最大的收获是找到了一个跨越 AI 和 Web3 的共同设计原则：**把"理解/辅助能力"和"签名/执行授权"分开**。LLM 可以解释交易但不能替用户确认，钱包可以签名但不能替用户判断。
> 
> 今天的疑问是：当 AI Agent 真正进入链上执行时，用户端的 UI/UX 如何让人理解"AI 的判断"和"你本人的决定"之间的边界。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->


![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/hgkgkgk/images/2026-05-18-1779114282348-image.png)![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/hgkgkgk/images/2026-05-18-1779115064415-image.png)

成功安装了Hermes Agent 并连接上了tg
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
