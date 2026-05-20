---
timezone: UTC+8
---

# 0xEzekiel

**GitHub ID:** Ezekie363

**Telegram:** @Ezekiel363ul

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
今日学习： Day 4 学习完成。AI 基础：检索增强生成（RAG）——理解了 RAG 解决 LLM 知识截止和上下文成本问题的思路，学习了 Embedding、向量数据库、Chunk、相关性分数四个核心概念，梳理了离线建库和在线检索的完整流程，以及 RAG Poisoning 这一新攻击面；Web3 基础：开发栈（Dev Stack）——建立了 Solidity → Foundry/Hardhat → Anvil → ethers.js 四层工具链的整体印象，理解了本地链和测试网在开发工作流中的不同定位。

收获 / 思考： 今天最大的认知升级是理解了 RAG 的本质：它不是「把更多东西塞进去」，而是把知识管理和语言生成分开——知识库是 Agent 的外部长期记忆，Context Window 是工作记忆，每次只按需取用相关片段。这也让我意识到 RAG Poisoning 的危险之处：攻击者不需要直接攻击 Prompt，只要在知识库里植入一块恶意文档，等它被检索进上下文就能影响 Agent 行为。Web3 这边建立了一个直觉：本地链是可以随意折腾的沙盒，合约有 Bug 直接重置重来；而测试网和主网一样受不可变性约束，部署前必须在本地把所有边界情况测透。

明日计划： AI 基础 → 智能体（Agent）；Web3 基础 → 网络（Network）
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

今日学习： Day 3 学习完成。AI 基础：上下文（Context）——理解了上下文窗口的本质与上限，学习了 Context Window、Token、Context Poisoning、Lost in the Middle 四个核心概念，以及摘要压缩、RAG、信任分层三种管理策略，并梳理了上下文在 AI×Web3 Agent 中的安全含义；Web3 基础：智能合约（Smart Contract）——建立了「链上代码自动执行、部署后几乎不可撤回」的直觉，理解了 ABI、部署、不可变性、事件等基础概念，以及重入攻击、权限控制缺失、整数溢出三类常见风险。  

收获 / 思考： 今天最深的收获是重新认识了 Context Poisoning 的危险等级。之前以为它只是「影响输出质量」的普通问题，但实际上它是 Prompt Injection 的超集，危害更大——攻击者可以通过 RAG 检索、工具调用、网页抓取等任意渠道悄悄污染上下文，Agent 会在用户完全不知情的情况下执行恶意操作。在 AI×Web3 场景里，这意味着一笔伪造的上下文就可能让 Agent 自动签署一笔恶意转账，防御必须下沉到代码校验层。智能合约的不可变性也给我一个同样的感受：链上世界的「代码即法律」，写错了就是真实代价。

明日计划： AI 基础 → 检索增强生成（RAG）；Web3 基础 → 开发栈（Dev Stack）
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->


今日学习： Day 2 学习完成。AI 基础：提示词（Prompt）——理解了 Prompt 是软约束而非安全边界，学习了 Instruction/Few-shot/Structured Output/Prompt Injection 四个核心概念，以及完整的 AI×Web3 安全链路；Web3 基础：钱包（Wallet）——建立了连接钱包/签名/发送交易三类操作的风险直觉，理解了 EOA、助记词、Gas 等基础概念。

收获 / 思考： 今天最大的收获是理解了 Prompt 的本质边界——它只是软约束，不是安全护栏，真正的拦截要靠代码层和人工确认。Prompt Injection 的 DeepSeek think 注入案例让我意识到，只要模型能执行动作，恶意输入就可能绕过规则产生真实危害。钱包部分建立了一个重要直觉：连接钱包只是「亮身份证」，发送交易才是「动用资产」，两者风险天差地别。

明日计划： AI 基础 → 上下文（Context）；Web3 基础 → 智能合约（Smart Contract）
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->



**今日学习：** 完成了 AI × Web3 School 第一天正式学习。AI 基础：大语言模型（LLM）——理解了 LLM 是概率模型而非事实来源，学习了 Token、Embedding、Transformer、Hallucination 四个核心概念；Web3 基础：密码学入门——建立了哈希、公钥/私钥、签名的基础直觉。

**收获 / 思考：** 今天最大的收获是理解了 LLM 的本质——它输出的是「概率上合理的内容」而不是事实，这意味着在任何严肃系统里都需要外部校验来兜底。密码学部分建立了一个关键直觉：Web3 里的身份和控制权完全由私钥决定，没有中心化机构托底，所以私钥安全是一切的前提。

**明日计划：** AI 基础 → 提示词（Prompt）；Web3 基础 → 钱包（Wallet）
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
