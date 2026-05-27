---
timezone: UTC+8
---

# KUOLEYA

**GitHub ID:** KUOLEYA

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->
今天完成week2的模块a的任务

首先是任务1：

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/KUOLEYA/images/2026-05-27-1779896686712-image.png)

任务2：为什么不是纯 AI 问题 / 为什么不是纯 Web3 问题  
  
（1）Agent 可以自主议价、比价、做购买决策——但这只是信息和推理层面。一旦涉及"付款"这个动作，Agent 需要：  
\- 链上身份和资金支配权  
\- 托管合约实现"先验收后付款"  
\- 链上争议仲裁机制  
  
纯 AI 做不了结算层。  
  
（2）传统链上支付只是"转一笔代币"。Agent 场景下需要：  
\- 动态报价（Agent 自主比价）  
\- 自动验收（AI 判断服务是否达标）  
\- 争议处理（AI 评估证据）  
  
没有 AI 的语义理解能力，验收只能靠人工，失去了机器对机器自动化的意义。

任务3：方向选择：我选择主方向Governance因为我先做在做的项目就属于Governance
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->

今天完成模块C的实验方向4下图为生成的成果：

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/KUOLEYA/images/2026-05-26-1779809141872-image.png)
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->


今天完成模块B的所有实践任务

1.下图为创建的测试钱包,以及接入的测试网和领取的测试币

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/KUOLEYA/images/2026-05-24-1779611484803-image.png)

其中地址是收款账号（可公开），私钥是取款密码（绝不能泄），助记词是密码的备份形式（等同于私钥，同样不能泄）,**地址公开没关系，但私钥和助记词泄露就等于把银行卡密码和身份证一起交给别人——对方能直接转走你所有资产，而且区块链没有客服帮你追回**

**2.发送的交易：**

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/KUOLEYA/images/2026-05-24-1779611709410-image.png)

3.对应的区块信息

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/KUOLEYA/images/2026-05-24-1779611722873-image.png)

3.部署的合约：

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/KUOLEYA/images/2026-05-24-1779611850948-image.png)

4.合约部署的交易信息：

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/KUOLEYA/images/2026-05-24-1779611905714-image.png)
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->



今天复习Web3相关的一些知识点，这里还是引用材料中的知识点进行总结。

首先账户、地址与钱包常被混为一谈，但在AI与Web3的构建逻辑中，三者的边界必须厘清：钱包并非普通账号，而是一把掌握私钥、承担安全责任并发起链上动作的唯一入口。\*\*助记词\*\*是私钥的人类可读种子，\*\*私钥\*\*是控制资产的唯一凭证，\*\*地址\*\*则是从私钥推导出的公开收付款标识——正因私钥与助记词能直接支配资产与权限，一旦泄露意味着完全失控，所以必须永远离线保存、绝不触碰网络。

面向AI×Web3构建者，安全底线清晰而严格：地址并不等于匿名，通过链上分析往往能追溯到真实身份；签名不等于普通登录，它本质上是授权一个具体操作（比如转移资产或执行合约）；授权更不等于转账，无限授权可能让合约耗尽你的全部资产。因此，\*\*AI Agent 绝对不应直接接触私钥或助记词\*\*，凡是涉及签名、授权、转账或合约写入的关键动作，必须保留人工确认环节。

签名与交易的关系常被误解：签名不是“点一下确认”，而是用私钥对一段明确的消息或交易数据做数学证明，授权链上执行一个具体动作。至于Gas，则是支付给区块链网络的燃料费，链上计算与存储是有成本的，因而交易可能因Gas不足而失败，或需要等待区块确认。

在架构上，L1（如以太坊）提供安全与去中心化，但成本高、速度慢；L2（如Arbitrum、Optimism）把计算搬到链下再提交结果，从而大幅降低执行成本。智能合约与普通后端逻辑有本质差异：合约的状态与执行逻辑完全公开，升级权限可通过代码检查，有些合约甚至不可更改——这是透明性，也是不可逆的责任。学习和实验应先使用测试网（如Sepolia），避免真金白银的风险。

区块浏览器（如Etherscan）可以查看每一笔交易、事件和Gas消耗，钱包提示会解析签名意图，交易回执则能确认执行结果——这三者是理解链上行为的关键工具。

进一步的高级基础设施正在重塑AI×Web3的边界：\*\*账户抽象\*\*（ERC-4337）把智能账户与私钥解耦，\*\*Safe\*\*（多签钱包）要求多把钥匙才能执行操作，\*\*OpenZeppelin Contracts\*\*提供了经过审计的标准模块。这些技术让\*\*AI Agent 不再直接持有私钥\*\*，而是通过\*\*Session Key\*\*（会话密钥）获得临时、限额、特定权限的授权，配合\*\*社交恢复、邮件恢复\*\*等机制，做到既能自动化执行任务，又能守住资产与权限的安全边界——这才是从传统钱包走向 AI‑native Account 的核心路径：恢复可控、授权可限、人工确认不可绕过。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->




今天完成模块A的任务3：

第一个任务点：择一个 Week 1 概念（这里我选的是LLM）让 agent 帮你生成一个可交互产物：小页面、CLI、流程图、quiz、概念卡片或最小 demo。这里我让他生成了一个前端页面预览图如下(Github：[ai-web3-study/demos/llm-token-predictor/index.html at main · KUOLEYA/ai-web3-study](https://github.com/KUOLEYA/ai-web3-study/blob/main/demos/llm-token-predictor/index.html))

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/KUOLEYA/images/2026-05-22-1779433682845-image.png)

操作说明如下：**1\. 选一个示例 prompt** 页面中间有一排浅色小按钮，随便点一个，比如：

\- `"The meaning of life is"` — 哲理类

\- `"Once upon a time, a young wizard"` — 故事类

\- `def quicksort(arr):` — 代码类

点一下，输入框自动填上文字。

**2\. 点「▶ 生成」** 页面会逐 token 往外蹦文字，像 LLM 在打字一样。同时右边会显示这个位置 top-5 候选 token 的概率柱状图，选中的那个标蓝 ✓

**3\. 拉 🌡️ Temperature 滑条试不同效果**

\- **拉到左边 0.1–0.3** → 每次生成的 token 基本一样，稳定的（精确模式）

\- **拉到中间 0.5–0.9** → 偶尔变化，有创意但不离谱（均衡模式）

\- **拉到右边 1.0–2.0** → 每次生成五花八门，可能蹦出很意外的词（创意模式）

你观察概率分布的变化：低 T 时蓝色柱子又高又细，高 T 时各柱子高度差不多——这就是 LLM 里 temperature 的实际效果。

**4\. 🐢 速度滑条** 控制 token 蹦出来的速度，1 最慢（看得清每一步），5 最快（一眨眼生成完）。

**5\. 点 ✕ 清除** 重新开始。

第二个任务点：把产物放入 GitHub repo，并在 README 中说明：你让 agent 做了什么、你人工修改了什么、哪些输出不可靠、下一步准备如何改进。

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/KUOLEYA/images/2026-05-22-1779433385543-image.png)
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->






今天接着昨天的任务1完成任务2。

仓库链接：[KUOLEYA/ai-web3-study: AI × Web3 课程学习实验仓库](https://github.com/KUOLEYA/ai-web3-study)

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/KUOLEYA/images/2026-05-21-1779345178303-image.png)

README 截图

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/KUOLEYA/images/2026-05-21-1779345227060-image.png)

learning agent 配置说明:

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/KUOLEYA/images/2026-05-21-1779345294756-image.png)

Agent协助日志：

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/KUOLEYA/images/2026-05-21-1779345353105-image.png)
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->







今天完成了模块a的任务1,包括搭建hermes-agent并完成一次对话式学习任务

![屏幕截图 2026-05-20 100141.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/KUOLEYA/images/2026-05-20-1779290806560-_____2026-05-20_100141.png)

![屏幕截图 2026-05-20 101853.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/KUOLEYA/images/2026-05-20-1779290823067-_____2026-05-20_101853.png)
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->








今天补一下AI背景的基础明天开始正式的部署，这里主要是对课程的核心知识点进行一些总结，首先LLM 本质是基于上下文逐 token 做概率生成，擅长语言理解、代码生成和推理，但不擅长精确记忆、确定性计算与跨会话状态保持。控制它靠四层：上下文窗口是“工作内存”，系统指令设身份和边界，提示词传意图，工具调用让它从说变成做。调用 LLM 门槛很低，通过 MaaS 用 API Key 按量付费，核心入参就 model、messages、temperature 和 max\_tokens，跑通官方 Quick Start 即可。应用分为三种形态：Prompt 是模型回答、人决策；Workflow 是固定流程，模型只是节点；Agent 则自主规划、动态调工具、跨轮管状态，三者失控风险完全不同。AI Coding 工具能快速生成样板代码和原型，但代码审查、测试和架构决策仍依赖人。AI 输出必须验证，常见问题包括事实编造、假引用、推理漂移、越权操作和工具误用，需要用 guardrails、tracing 和人工介入防范。Agent 的核心组件涵盖状态管理、长期记忆、MCP、Skills、Tool Calling、Tracing、Guardrails、Handoff 和错误恢复。只有当目标开放、步骤无法预设、需多工具协作且中间结果决定策略时才需要 Agent；一次性问答用 Prompt，固定流程用脚本，高合规用人工审核，确定性数据直接查库，复杂度越高越要避免过度 agent 化
<!-- DAILY_CHECKIN_2026-05-19_END -->
<!-- Content_END -->
