---
timezone: UTC+8
---

# SelinaAnn

**GitHub ID:** SelinaAnn

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->
# **Product manager of Cobo Agentic Wallet**

## agentic economy

-   prompt injection
    
-   unscoped authority
    
-   shadow operations
    
-   zombie permissions
    

## how control is maintained

## 3 industries - how AI agent go on-chain

-   MPC for AI agents
    
-   pact authorization protocol
    
-   recipe skill layer
    

## how 1 pact comes to life

1.  you state the intent
    
2.  agent drafts a pact
    
3.  you review & approve in the app
    
4.  wallet executes under policy
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->

# MetaMask

-   metamask is a app tht allows you to manage ethereum,solana,bitcoin and private keys.
    

## today I created a wallet with metamask

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/SelinaAnn/images/2026-05-26-1779787857885-image.png)

### Secret Recovery Phrase(srp)

-   **Whoever has the SRP has full control over the assets in a given wallet.**
    

## transfer

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/SelinaAnn/images/2026-05-26-1779788235122-image.png)
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->


# **Long-term Memory for AI Agents**

## restart VS resume

## write, retrieve, revise

## recall, retrieve, revise

## 5 terms , 5 jobs

## memory becomes infrastructure
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->



# 以太坊账户

-   以太坊账户是**拥有 ETH 余额、可发送消息**的实体，分为用户控制账户与智能合约账户
    

### 1\. 外部拥有账户（EOA）

-   由**私钥**控制
    
-   创建**免费**
    
-   可**主动发起交易**
    
-   EOA 之间仅能转账 ETH / 代币
    
-   由公钥 + 私钥密码对管理
    

### 2\. 合约账户

-   部署到网络的**智能合约**，由代码控制
    
-   创建**有成本**（占用网络存储）
    
-   只能**被动响应交易**发送消息
    
-   无私钥，由合约逻辑控制
    
-   可执行复杂操作（转账、创建新合约等）
    

## 账户四大字段

1.  **nonce**
    
    交易计数器，防重放攻击；同一 nonce 仅执行一次交易。
    
2.  **balance**
    
    账户余额，单位 wei（1 ETH = 10¹⁸ wei）。
    
3.  **codeHash**
    
    EVM 代码哈希；EOA 为空字符串哈希，合约账户为代码哈希（不可修改）。
    
4.  **storageRoot**
    
    账户存储的 Merkle Patricia Trie 根哈希，默认空。
    

## EOA 与密钥对

-   私钥：64 位十六进制字符，用于签名交易，**不可泄露**。
    
-   公钥：由私钥通过**椭圆曲线数字签名算法**生成。
    
-   地址：公钥 Keccak-256 哈希取最后 20 字节 + 前缀`0x`，共**42 位**。
    
-   单向性：私钥可推公钥，公钥不可推私钥
    

## 合约地址

-   同样 42 位十六进制格式。
    
-   由**创建者地址 + 创建者 nonce**计算生成
    

## 验证者密钥（BLS 密钥）

-   以太坊转为 **权益证明（PoS）** 后引入。
    
-   用于验证者身份，支持高效聚合，降低共识带宽
    

## 钱包与账户的区别

-   **账户**：链上实体，有地址与状态。
    
-   **钱包**：管理账户的**界面 / 工具**，用于操作 EOA 或合约账户
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->




# **Open Agentic Economy: From ERC-8004 / ERC-8183 to Builder Path**

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/SelinaAnn/images/2026-05-23-1779524951056-image.png)

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/SelinaAnn/images/2026-05-23-1779524982169-image.png)

## ethereum

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/SelinaAnn/images/2026-05-23-1779525113825-image.png)

-   CROPS
    

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/SelinaAnn/images/2026-05-23-1779525016109-image.png)

## ERC-8004:identity and trust for agents

## X402 payments
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->






# AI在WEB3的应用

去中心化AI基础设施

-   基于区块链网络搭建的AI算力、数据、模型训练与推理体系，实现**算力去中心化、数据确权、算法开源可溯源、隐私可保护**，是Web3 AI生态的底层支撑。
    

AI agent +钱包

-   将传统“被动工具型钱包”升级为**主动智能资产管理终端**，无需用户手动操作，即可自主完成链上合规、低风险的资产交互行为。
    

AI驱动链上分析工具

-   传统链上数据繁杂、冗余、碎片化，人工分析效率极低。AI驱动的链上分析工具，依托大数据训练模型，对**链上交易数据、地址行为、资金流向、项目数据、链上舆情**进行自动化清洗、解析、建模与预测，输出可视化、可落地的分析结论
    

智能钱包+安全助手

-   以智能钱包为载体，搭载AI安全检测模型，构建全流程、实时化的链上资产防护体系，弥补传统钱包仅具备存储、转账功能，无主动风控能力的短板。
    

交易所+DEFI智能风控系统

-   针对中心化交易所（CEX）、去中心化金融（DeFi）协议的**平台级风险**，依托AI大数据模型，搭建全场景智能风控体系，防范交易作弊、资金洗钱、合约漏洞、恶意套利、清算风险等各类平台风险，保障交易生态稳定。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->







# WEB 3 运行原理

## 钱包、私钥、个人主权

### 交易流程

-   wallet签名-RPC传播-mempool排队-builder排序-validator证明-block可查询
    

### 私钥

-   授权账户操作
    

### 助记词

-   私钥体系的可读备份，派生路径生成多账户
    

### 地址

-   公钥计算得到的公开账户标识，收款地址，会被关联分析
    

## 交易与签名

### 交易

-   事
    
-   手续费（gas fee）
    
-   nonce（第几笔交易）
    
-   签名
    

## 区块链网络

### 共识机制

-   PoW(BTC)
    
-   PoS(ETH)
    

## 智能合约

写在链上，能被交易触发的代码，EVM虚拟机运行

## 区块链协议升级

## web3特性与边界

-   去中心化
    
-   无许可
    
-   抗审查
    
-   开源可验证
    
-   隐私边界
    
-   可组合
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->








Hermes Agent学习

```
GitHub CLI 官网登录流程

1. 打开 GitHub 官网，注册或登录账号。
2. 打开 GitHub CLI 官网，按系统安装 `gh`。
3. 在终端运行：`gh auth login`。
4. 选择 GitHub.com，并按浏览器登录流程授权。
5. 运行：`gh auth status`，确认登录成功。
```

创建个人学习仓库

```
bash
gh repo create ai-web3-school-cohort-0 --public --description "Personal learning journal and proof-of-work for AI x Web3 School" --clone
```

如果 Agent 对本地 GitHub repo 做了任何变动，需要自动执行 git 状态检查，确认后 commit and push

```
bash
git status --short
git add .
git commit -m "Update AI Web3 School learning notes"
git push
```

初始化仓库结构

```
README.md
profile.md
learning-plan.md
daily/
tasks/
experiments/
handbook-feedback/
hackathon/
submissions/
templates/daily-note.md
templates/task-note.md
```

WCB Agent API

```
API 文档：https://web3career.build/llms.txt
```
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->









昨天的直播讲了AI 时代，Web3 开发者需要具备的基础知识和架构能力，先讲了AI时代的误区，web3简单概念，区分于web2，人的作用是评估与验收，人的价值在于驾驭AI，而AI则是协助与细化，web3区块链的信任与安全，钱包的本质和安全问题，私钥泄露，权限滥用，签名欺骗。web3交易的逻辑链，3个关键参数，监听逻辑。最关键的是交易模拟能力。
<!-- DAILY_CHECKIN_2026-05-19_END -->
<!-- Content_END -->
