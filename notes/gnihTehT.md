---
timezone: UTC+8
---

# ShadowDogee

**GitHub ID:** gnihTehT

**Telegram:** @gnihTehT

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->
## 每日打卡 — 2026-05-26（周二）

### 今日学习内容

\- \[x\] WCB 交接与任务梳理 — 接手 thound 工作，了解仓库现状

\- \[x\] Agent Secret API Key 测试与分析 — 发现 [api.web3career.build](http://api.web3career.build) 503 宕机

\- \[x\] 开发最小可交互 AI 学习产物 — ai\_[learn.py](http://learn.py)（概念测验 + 解释 + 对比）

\- \[x\] 任务清单梳理 — 整理 Week 1~2 所有有时限/长期任务

### 核心概念

\- **Agent Secret API Key**：WCB 平台生成的密钥，用于外部 Agent 以用户身份调用平台 API。当前独立后端（[api.web3career.build](http://api.web3career.build)）503 不可用，需等项目方修复。

\- **最小可交互学习产物**：一个 CLI 工具，覆盖 12 个 AI × Web3 概念，支持测验/解释/对比三种模式。

\- **Learning Agent 角色边界**：Agent 可规划、解释、整理、生成草稿；但创建 repo、写文件、commit/push、WCB 提交需人工确认；绝不碰钱包/私钥/API key。

### 疑问 / 不理解的点

\- \[ \] WCB 独立 API 后端什么时候恢复？需在 Discord 问项目方

\- \[ \] Demo 方向还没定——需要在 Week 3 结束前（6/7）锁定

### 练习 / 作业

\- \[x\] 完成 Learning Agent Setup 任务验证（已确认 thound 初始化完毕）

\- \[x\] 完成最小可交互学习产物 ai\_[learn.py](http://learn.py)（AI 辅助，人工复核）

\- \[ \] 提交 AI 基础概念卡片到 WCB（thound 已提交了 GitHub）

\- \[ \] 提交 Learning Agent Setup 到 WCB

### 明日计划

\- \[ \] 如果时间允许，开始 Phase 2 的 Agent 章节学习

\- \[ \] 准备 5/29 例会上麦分享（3-5 分钟学习感受）

\- \[ \] 关注 5/27 Neo-Cypherpunk & Privacy 活动 + 5/28 [Z.AI](http://Z.AI) 1st

### 笔记

\- 今日学习时长：~1h

\- 状态（🔥 顺利 / 😵 吃力 / 😤 卡住）：🔥 顺利 — 交接清晰，任务路标明确

\- 交接印象：thound 留了完整的工作流文档和学习计划，上手很顺畅
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->

## **EOA vs 智能账户 vs 多签账户：权限与安全边界对比**

### **对比总表**

| 维度 | EOA（外部账户） | 智能账户（Smart Account / AA） | 多签账户（Multisig） |
| --- | --- | --- | --- |
| 谁持有控制权 | 私钥持有者 — 谁有私钥谁就是主人 | 账户逻辑所有者（EOA或DAO），可通过升级逻辑变更 | 多个签名者的集合，控制权由签名阈值+签名者列表共同决定 |
| 谁可以发起交易 | 私钥持有者 — 一人签名即可发起 | 由账户逻辑定义的规则允许者（单个EOA、时间锁、自动化合约） | 需满足签名阈值（如 2/3），发起=签名数达到要求 |
| 是否支持多人确认 | ❌ 不支持 — 单签即生效 | ✅ 可自定义 — 可配置为单签、双签或用门限签名（TSS） | ✅ 核心功能 — 原生支持 N/M 签名阈值 |
| 是否支持恢复、限额、自动化策略 | ❌ 不支持 — 私钥丢失 = 账户丢失 | ✅ 支持 — 社交恢复、支出限额、自动转账、会话密钥、订阅定时任务 | ✅ 有限支持 — 可通过内置治理流程更换签名者，但灵活性低于智能账户 |
| 典型使用场景 | 个人日常转账、DApp交互、DeFi基础操作 | 个人/组织资产管理、游戏钱包、企业支付自动化、DeFi策略执行 | DAO 国库、团队资金管理、高价值资产保管、合约升级治理 |
| 主要风险点 | 私钥单点故障——丢失或泄露则资产全失；无熔断机制 | 合约漏洞（逻辑 bug、代理劫持）；依赖基础设施（relayer、bundler） | 治理僵局（签名者失联/恶意）；签名者合谋风险；链上 Gas 成本高 |
| 安全边界 | 私钥即一切 — 边界清晰但脆弱 | 逻辑层定义边界 — 灵活但复杂度高，攻击面更大 | 社会层定义边界 — 依赖签名者之间的信任与协调 |

### **详细说明**

### **EOA（Externally Owned Account）**

-   **本质**：公私钥对，私钥签名交易，公钥派生地址
    
-   **无状态**：没有代码、没有逻辑，纯粹由协议层定义
    
-   **安全模型**：私钥 = 绝对控制权，没有第二道防线
    
-   **局限**：无法批量操作、无法编程化、无法恢复
    

### **智能账户（Smart Account / ERC-4337）**

-   **本质**：运行在链上的合约，通过 `validateUserOp` 自定义验证逻辑
    
-   **核心能力**：
    
    -   多验证策略（单签、2FA、社交恢复）
        
    -   支出限额与白名单（类似信用卡授权）
        
    -   会话密钥（Session Key）—— 游戏内低权限自动操作
        
    -   原子批处理（一笔 UserOp 做多件事）
        
    -   无气体验（Paymaster 代付 Gas）
        
-   **安全模型**：逻辑即安全——代码写得好就安全，写不好就出事
    
-   **主要方案**：Safe{Core}、Biconomy、Argent、Lightsail
    

### **多签账户（Multisig / Gnosis Safe）**

-   **本质**：合约逻辑要求 N 个预定义签名者中的 M 个签名才能执行
    
-   **核心能力**：
    
    -   签名者管理（添加/移除/替换，通常需内部投票）
        
    -   交易模拟（链下预览交易效果）
        
    -   模块化扩展（可添加模块：时间锁、支出限额、Hooks）
        
-   **安全模型**：分布式信任——M 个签名者中必须 M 个都被攻破才出事
    
-   **主要方案**：Gnosis Safe（现 Safe）、Zodiac 模块
    

### **一句话总结**

> **EOA 是把钥匙挂脖子上——方便但丢了就完了；多签是把钥匙分给几个人——安全但每次开门都得等人到齐；智能账户是装了个指纹锁——可恢复、可限额、可授权临时密码，但锁本身得造得够结实。**

### **思考题**

1.  为什么说 "Account Abstraction 让 EOA 成为历史"？——因为智能账户可以做到 EOA 能做的一切 + 更多
    
2.  多签和智能账户是竞争还是互补？——互补。Safe 本身就是智能账户 + 多签逻辑的组合
    
3.  什么场景下 EOA 仍然是最优解？——高频低值交易（如单纯收发转账），因为简单=低风险、低 Gas
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->


## **1\. LLM（大型语言模型）**

**一句话解释：** LLM 是通过海量文本训练出来的模型，能够理解和生成自然语言，本质上是一个"预测下一个词"的概率系统。

**具体例子：** GPT-4、Claude、Gemini 都是 LLM。当你问"帮我写一封请假邮件"，模型会根据训练中见过的无数封邮件格式，生成一封听起来合理的回复。

**常见误区：** 很多人以为 LLM 在"思考"或"理解"，实际上它只是在做极其复杂的模式匹配和概率预测。它没有记忆、没有意图，也不会"知道"自己说的是否正确——这也是为什么它会一本正经地"胡说"（幻觉问题）。

* * *

## **2\. Prompt（提示词）**

**一句话解释：** Prompt 就是你给 AI 的输入指令，是人和模型之间沟通的语言，写法直接影响输出质量。

**具体例子：** 同样是问天气，"今天天气怎么样？"和"请用适合小学生理解的语言，解释什么是梅雨季节，并举一个生活中的例子"，得到的结果差距很大。后者就是一个更好的 prompt。

**常见误区：** 很多人以为 prompt 越短越好、越"自然"越好。实际上，给 AI 足够的上下文、明确的角色设定和输出格式，往往能得到更准确的结果。Prompt 是需要刻意练习的技能，不是随便问一句就完事的。

* * *

## **3\. Context Window（上下文窗口）**

**一句话解释：** Context window 是模型在一次对话中能"看到"并处理的最大文字量，超出这个范围的内容它就"忘了"。

**具体例子：** 假设一个模型的 context window 是 8000 个 token（大约 6000 个汉字），如果你和它聊了很长时间，早期的对话内容就会被"挤出"窗口，模型就不再记得你在最开始说过什么。

**常见误区：** 很多人以为 AI 可以记住"所有"对话。但实际上每次请求都只能看到窗口内的内容，窗口外的一概不知。此外，context window 越大不一定越好——太长的 context 会让模型注意力分散，反而影响输出质量。

* * *

## **4\. Agent（智能体）**

**一句话解释：** Agent 是一种能够自主规划、调用工具、执行多步骤任务的 AI 系统，而不只是被动地回答问题。

**具体例子：** 一个订机票的 AI Agent，接到"帮我订下周五去上海的机票"这个任务后，会自动搜索航班、比较价格、调用订票接口、发送确认邮件——整个流程无需人工介入每一步。

**常见误区：** 很多人把"会聊天的 AI"和"Agent"混为一谈。普通聊天只是一问一答；Agent 的核心是"自主执行"——它有目标，会分解任务，会用工具，会根据结果调整下一步行动。Agent 失控的风险也比普通对话高，因为它会做出实际影响世界的操作。

* * *

## **5\. Tool Use（工具调用）**

**一句话解释：** Tool use 是让 AI 能够调用外部工具（如搜索引擎、代码执行器、数据库、API）来获取信息或完成动作，突破模型本身的局限。

**具体例子：** Claude 本身不知道"今天股价是多少"，但如果给它配备一个查询股票 API 的工具，它就能实时查询并回答。这就是 tool use——模型判断何时需要用工具，然后调用，再把结果整合进回答。

**常见误区：** 容易误以为工具调用是模型"自带"的能力。其实是开发者预先定义好一组工具，并告诉模型"你有这些工具可以用，以及它们的参数格式"，模型才能选择调用。没有显式定义，模型什么外部工具都调不了。

* * *

## **6\. Workflow（工作流）**

**一句话解释：** Workflow 是把多个 AI 调用或操作按照逻辑顺序串联起来，形成一个可重复执行的自动化流程。

**具体例子：** 一个内容创作 workflow：第一步用 AI 生成文章大纲，第二步针对每个段落分别生成内容，第三步调用审核模型检查语气和合规性，第四步自动发布。每一步的输出是下一步的输入，整体构成一个 workflow。

**常见误区：** Workflow 和 Agent 经常被混淆。Workflow 的步骤和路径通常是开发者预先设计好的（确定性更强）；Agent 则更灵活，能自己决定下一步做什么（自主性更强）。实际项目中往往两者结合使用。

* * *

## **7\. Guardrails（护栏）**

**一句话解释：** Guardrails 是对 AI 输出进行约束和过滤的机制，用来确保模型的行为在安全、合法、符合业务规范的范围内。

**具体例子：** 一个客服 AI 被设置了 guardrail："不能讨论竞争对手产品""不能提供法律建议"。用户问"你们家产品和 XX 牌比哪个好？"，系统检测到这属于被限制的话题，自动引导到其他回答，而不是让 AI 自由发挥。

**常见误区：** Guardrails 不是万能的，也不是一次设置就完事。攻击者可以通过精心设计的 prompt（prompt injection）绕过护栏。好的 guardrails 需要持续测试和迭代，而不是贴一句"请不要输出有害内容"就算完成。

* * *

## **8\. Human-in-the-Loop（人在回路中）**

**一句话解释：** Human-in-the-loop 指在 AI 自动化流程的关键节点加入人工审核或决策，避免完全依赖 AI 自主判断。

**具体例子：** AI 生成了一份合同草稿，但在正式发送给客户之前，系统会暂停并弹出提示，要求律师审阅并确认，才能继续流程。这个"暂停-人工确认-继续"的设计就是 human-in-the-loop。

**常见误区：** 很多人觉得"加了 human-in-the-loop 就安全了"。其实如果审核频率太高、内容太多，人类会陷入"审核疲劳"，开始敷衍了事地点确认——结果和没有人工审核差不多。好的设计是把人工介入聚焦在真正高风险、高价值的决策节点上。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->



或许会有老师对在旧手机部署agent废物利用感兴趣？

今天又部署配置好了Hermes，都拉入了discord server，就我个人而言discord比telegram要好用一些，而且分栏分起来更舒适，我的server是建立了几个Agent的私人工作聊天区和一个协作区，但是我不打算在给他们完全调教好之前让他们自己互相艾特，一是怕烧很多token，二是怕把东西改坏掉

## Hermes Agent on Termux 部署笔记

### 安装

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

### 修复 Discord 依赖

```bash
cd ~/.hermes/hermes-agent
source venv/bin/activate
pip install "discord.py>=2.0"
```

### 设置代理（必须，否则无法连接 Discord）

```bash
export https_proxy=http://127.0.0.1:7890
export http_proxy=http://127.0.0.1:7890
```

### 启动

```bash
hermes          # CLI 聊天
hermes gateway  # 启动 Discord Bot
```

### 防止后台被杀

```bash
termux-wake-lock
tmux new -s hermes
hermes gateway
# Ctrl+B 然后 D 退出 tmux 保持后台运行
```

### Discord 开发者后台必须开启

-   Bot 页面 → Privileged Gateway Intents 开启三个 Intent
    
-   OAuth2 → 勾选 `bot` + `applications.commands`
    
-   Bot Permissions → Send Messages、Read Message History 等
    

### 配置文件位置

-   API Keys：`~/.hermes/.env`
    
-   配置：`~/.hermes/config.yaml`
    
-   日志：`~/.hermes/logs/gateway.log`
    

### 常用命令

```bash
hermes setup           # 重新配置
hermes gateway restart # 重启 Bot
hermes model           # 切换模型
hermes doctor          # 检查问题
```

### 注意事项

-   每次重开 Termux 需要重新设置代理环境变量
    
-   建议把代理写入 `~/.bashrc` 永久生效：
    

```bash
echo 'export https_proxy=http://127.0.0.1:7890' >> ~/.bashrc
echo 'export http_proxy=http://127.0.0.1:7890' >> ~/.bashrc
```
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->




### OpenClaw 接入 Discord 完整流程 🦞

* * *

一、Discord Developer Portal 设置

1.  创建应用 + Bot，获取 **Bot Token**
    
2.  开启 **Message Content Intent** 和 **Server Members Intent**
    
3.  OAuth2 生成邀请链接，把机器人拉入 Server
    

* * *

二、获取三个 ID

-   **Bot Token** — Developer Portal → Bot → Reset Token
    
-   **Server ID** — 右键服务器图标 → 复制服务器 ID
    
-   **User ID** — 右键自己头像 → 复制用户 ID
    

* * *

三、配置 OpenClaw

bash

```bash
node scripts/run-node.mjs config set channels.discord.token 你的BOT_TOKEN
node scripts/run-node.mjs config set channels.discord.enabled true
```

编辑 `~/.openclaw/openclaw.json`，在 discord 部分加入：

json

```json
"guilds": {
  "你的ServerID": {
    "requireMention": true
  }
}
```

* * *

四、设置代理并启动网关

bash

```bash
export http_proxy=http://127.0.0.1:7890
export https_proxy=http://127.0.0.1:7890
node scripts/run-node.mjs gateway
```

* * *

五、配对

1.  私信机器人，获取配对码
    
2.  运行：
    

bash

```bash
node scripts/run-node.mjs pairing approve discord 配对码
```

* * *

日常启动（永久保存代理）

bash

```bash
echo 'export http_proxy=http://127.0.0.1:7890' >> ~/.bashrc
echo 'export https_proxy=http://127.0.0.1:7890' >> ~/.bashrc
```

之后每次只需：

bash

```bash
cd ~/openclaw && node scripts/run-node.mjs gateway
```
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->





### **笔记 | AI 下乡计划｜AI 在 Web3 的应用**

如果AI只是聊天，Web3不是必需品，但当AI开始租算力、买数据、调用APl、发起交易、管理资产、和其他agent协作时，它就需要一个能被授权、能付款、能记录、能追责的经济层。

AI+Web3的核心不是发币，而是经济基础设施。

具体表现在

1.  去中心化的AI基础设施：谁来提供算例、存储、数据、模型推理和服务发展
    
2.  AI Agent 结合钱包：让 agent 有链上身份、资产账户、支付能力和执行权限
    
3.  AI 链上分析工具，把链上内容分析为人可以看懂的描述或者判断
    
4.  智能钱包与安全助手，帮助用户来真实后果
    
5.  交易所和DeFi智能风控
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->







**笔记 | Web3 运行原理**

参加了布老师的直播

理解了账户、钱包、签名、交易、Gas、合约、测试网和区块浏览器如何构成一条链上操作链。

这次再听内容比第一次参加冬季实习计划的时候要熟悉多了，可以跟得上了！

通俗来说可以把一次完整的链上操作理解成：

“拿着钥匙（钱包），用身份（账户）签了一份命令（签名），支付邮费（Gas），把命令发到区块链网络（测试网/主网），由智能合约执行，最后所有记录被区块浏览器公开查看。”

**比如Mint NFT**

完整流程：

```
1. 打开 DApp

2. 钱包连接网站
   ↓
   Wallet 提供账户地址

3. 点击 Mint
   ↓
   DApp 调用合约 mint()

4. 钱包弹窗
   ↓
   显示 Gas 和交易内容

5. 点击 Confirm
   ↓
   钱包使用私钥签名

6. 交易发送到测试网/主网
   ↓
   节点验证签名

7. 智能合约执行 mint()

8. 区块链打包进区块

9. 区块浏览器显示交易记录

10. NFT 出现在账户
```
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->









**笔记 | AI Agent 入门：Hermes 从 0 到 1**

今天学习了Hermes，总体来说和我在用的openclaw差不多，打算还是和龙虾一样部署在旧手机上。

在此之前，先使用openclaw进行辅助学习，正好进行对比观察。

今天还额外学习了一下密码学的第一课，对称加密，是昨天上课的 TC 老师推荐的 Lyndell 老师的课，大致了解了流程，对key 的概念更具象化了一些。

![QQ_1779202281601.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/gnihTehT/images/2026-05-19-1779202324964-QQ_1779202281601.png)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->











### **笔记 | AI 时代，Web3 开发者需要具备的基础知识和架构能力**

### 一、与传统支付的区别

web3 中的支付就是将 banking institution换成了一个blockchain，由于 block chain 不能主动访问外部服务，所以要通关链上监听服务来进行监听和发展。

### 二、为什么可以信任 web3 ?

第一点，通过算法这些去保证数据不可篡改；

第二点，逻辑及代码，公开透明。

### 三、什么是钱包？

钱包主要就是用于输入private key产出signature。

### 四、钱包的分类

**按技术分类：**

-   EOA 钱包（Externally Owned Account）
    
-   合约钱包（Contract Wallet）
    
-   AA 钱包（Account Abstraction）
    

**按签名控制方式分类：**

-   单签钱包（Single Signature）
    
-   多签钱包（Multisig）
    
-   MPC 钱包（Multi-Party Computation）
    

**按托管方式分类：**

-   自托管钱包（Self-Custody）
    
-   全托管钱包（Custodial Wallet）
    
-   混合托管钱包（Hybrid Custody）
    

**按载体分类：**

-   软件钱包（Hot Wallet）
    
-   硬件钱包（Cold Wallet）
    

**特殊类型钱包：**

-   隐私钱包
    
-   分层确定性钱包（HD Wallet）
    

### 五、钱包的主要安全风险

钱包主要有两个安全风险：**私钥泄露**（最致命）和**签名钓鱼**（最常见）

因为普通用户看不懂交易内容，不能理解密码学签名，导致钱包因为签名变得十分危险。

**EIP-712**，可读签名标准，把数据变成用户可懂的语言。但是即使数据可视化了，但是大部分用户还是可能看不懂合约权限、approve、permit、delegatecall、spender。

因此，web3 的大部分安全问题，本质上是“认知安全问题”。

**eth\_sign** 的废弃原因：eth\_sign 可以对任意数据签名，用户无法知道自己签了什么，所以钱包废弃它。

**Approve** 风险，权限滥用风险是另一个巨大风险，所以应该定期 revoke 权限，使用小额热钱包，大额资产放冷钱包。

钱包安全中，链只会认数学签名，在链上所有的事情都是：

**签名→链相信这是你→状态被修改**

### 六、交易生命周期（链上交易怎么发生）

构造交易（Construct）👉用户签名（Sign）👉广播（Broadcast）
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
