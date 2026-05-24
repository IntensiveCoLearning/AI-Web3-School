---
timezone: UTC+8
---

# wodeche

**GitHub ID:** wodeche

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->
Memory

memory 是跨请求保留的消息，比如用户偏好，历史任务等，是Agent 在多次交互中持久化存储的信息，可以跨对话保留，不受context window限制，可以无限大，但需要检索机制将其转化为 context，类似档案库

memory 的风险是可能会放松高风险行为的确认

Context

context 是单次交互中，直接给LLM的所有信息，包括用户提示词、系统提示词、工具输出，以及一部分Memory中的相关信息，类似当前的工作台面

Knowledge Base

s是系统可以检索的外部知识库，比如文档、论坛讨论、FAQ，适合解决模型知识过期的问题。是需要维护的，像一个专业化、结构化的外部记忆。Memory记录关于这用户/对话的事情、Knowledge base 记录关于这个世界/领域的客观事实。就像图书馆，存储公共知识。  
  
RAG 检索增强生成

RAG 的作用是：当用户提出问题时，系统先从知识库里找相关材料，再让模型基于这些材料回答。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->

Token:

Token 是模型处理文本的基本单位，和英文单词、汉字、符号没有直接关系，是 tokenizer 切分后的片段,OpenAI

文档里写，对于常见的英文文本，一个token大约四个字符，100个token大约是75个单词，对于中文，大约是两个中文字，有时候也是一个中文字  

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/wodeche/images/2026-05-23-1779540420223-image.png)

Embedding

Embedding 是把文本、代码或其他对象映射成向量，用来衡量语义上是否接近

Hallucination

指模型生成了看起来合理，但不真实或无法验证达到内容，也就是幻觉。处理幻觉需要把模型输出接到外部校验。

Prompt

告诉模型，任务是什么，哪些信息可以使用，应该输出什么格式

instruction

给模型的规则，包含任务目标、可用输入、禁止行为、输出格式和失败格式

prompt injection

攻击者通过用户输入网页、文档等内容，让模型忽略原始规则，泄露信息或者调用危险工具

最小实践

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/wodeche/images/2026-05-23-1779546265707-image.png)
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->


![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/wodeche/images/2026-05-21-1779376991528-image.png)

成功配置好Hermes 学习小助手
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->



观看了今日 Bruce 分享的 Web3 运行原理留下如下思考题

### 1\. 资产自托管：如何提高安全、降低私钥复杂度？

-   **AA 账户抽象与智能合约钱包**：摆脱传统助记词，支持手机号/邮箱登录，允许设置每日限额和白名单。
    
-   **社交恢复机制**：允许指定信任的亲友或 DAO 组织在丢失密钥时联合帮用户恢复账户。
    
-   **MPC（多方安全计算）**：将私钥分片化管理，消灭单点故障，利用 Passkey 和生物识别（FaceID）实现无感签名。
    

### 2\. 没有中心化机构/税收时，公共基础设施谁维护？如何分配？

-   **谁来维护**：通过 DAO 国库或**公共物品资助（如 Gitcoin 二次方资助、Optimism 追溯性资助）**，由社区投票或根据历史实际贡献发放奖励。
    
-   **如何分配**：通过智能合约将**协议手续费**进行编码分配
    

### 3\. 没有审查且隐私很强时，如何治理有害信息/黑产？

-   **分层治理（前端屏蔽）**：底层区块链保持中立和不可篡改，但上层应用（App 前端）根据法律和社区共识进行内容过滤和地址屏蔽。
    
-   **信誉惩罚**：引入链上信誉分（反女巫体系），作恶地址会被永久标记并剥夺协作权限，极大提高其作恶成本。
    

### 4\. 去中心化协作下，如何实现公平、可信的分配？

-   **去中心化评议（如 Coordinape，FairSharing）**：由团队成员根据实际付出互相打分，通过同行共识决定激励，避免单一主管的偏见。
    
-   **基于成果的链上悬赏（Bounty）**：任务拆解、标准明确，通过智能合约托管资金，一旦验收通过自动链上释放。
    
-   **信誉加权与流程透明**：分配权重挂钩“长期贡献值”而非单纯的“持币量”（防止巨鲸垄断）；财务与分配规则全链上公开，接受全员监督与乐观挑战。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->




今天参加了 Draken老师的分享，成功安装好了hermas agent，正式开启了 AI 之旅

![ScreenShot_2026-05-19_222001_156.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/wodeche/images/2026-05-19-1779200411348-ScreenShot_2026-05-19_222001_156.png)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->





参加 Day1 的分享会，AI 工具链如何改变开发流程，Web3 开发者需要补齐哪些架构能力，以及如何把这些能力转化为后续 PoW 和 Hackathon 项目准备
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
