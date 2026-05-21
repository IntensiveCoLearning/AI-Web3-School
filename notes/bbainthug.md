---
timezone: UTC+8
---

# Rukun Mou

**GitHub ID:** bbainthug

**Telegram:** @bbainthug

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
# **Day 4 学习笔记：Web3 交易排查与 AI Agent 自动交易测试**

日期：2026-05-21  
主题：Tx Hash / Nonce / Approve / Permit / 盲签 / Agent 自动交易测试

## **1\. Tx Hash 查不到怎么排查**

前端显示成功，不等于链上成功。Tx hash 查不到时，不能直接认为“浏览器坏了”。

排查顺序：

1.  确认 tx hash 来源：
    
    -   LLM 编的？
        
    -   前端生成的？
        
    -   钱包返回的？
        
    -   RPC 返回的？
        
    -   eth\_sendRawTransaction 返回的？
        
2.  确认是否真正广播：
    
    -   后端有没有调用 eth\_sendRawTransaction；
        
    -   RPC 是否成功返回；
        
    -   有没有报错。
        
3.  确认有没有查错链：
    
    -   Base Mainnet；
        
    -   Base Sepolia；
        
    -   Ethereum；
        
    -   Arbitrum；
        
    -   Optimism。
        
4.  检查链上执行相关信息：
    
    -   chainId；
        
    -   RPC endpoint；
        
    -   区块浏览器网络；
        
    -   钱包网络；
        
    -   gas；
        
    -   nonce；
        
    -   签名；
        
    -   pending 状态。
        

核心句：

> _Tx hash 查不到时，先确认 hash 来源，再确认是否广播，再确认 chainId，再查 RPC 状态，最后才考虑区块浏览器延迟。_

## **2\. Nonce 的常见问题**

Nonce 是一个地址发交易的顺序编号。同一个地址的交易必须按 nonce 连续执行。

如果 nonce = 10 的交易 pending，后面的 nonce = 11、nonce = 12 不会先执行。

三个常见错误：

-   nonce too low：用了旧 nonce，链上认为这个 nonce 已经被用过。
    
-   nonce too high：跳号了，例如链上期待 nonce 10，但你发了 nonce 12。
    
-   replacement transaction underpriced：想用同一个 nonce 替换 pending 交易，但新交易 gas 加得不够。
    

处理方式：

-   加速交易：用同一个 nonce 重新发交易，提高 gas fee。
    
-   取消交易：用同一个 nonce 给自己转 0 ETH，提高 gas fee。
    

核心句：

> _nonce too low 是旧号，nonce too high 是跳号，replacement underpriced 是替换交易 gas 不够高。_

## **3\. Approve 和 Permit**

### **Approve**

approve 是链上授权。

用户允许某个 spender 在额度范围内使用自己的 ERC-20 token。之后 spender 可以调用 transferFrom 转走 token。

### **Permit**

permit 是离线签名授权。

用户不一定自己发链上 approve 交易。攻击者如果拿到 permit 签名，可以自己付 gas 上链提交授权，最终形成 allowance。

典型攻击链路：

`用户签 permit -> 攻击者拿到签名 -> 攻击者上链提交 permit -> 获得 allowance -> 调用 transferFrom -> 转走 USDC`

### **无限授权**

无限授权通常是授权额度非常大，接近 uint256 max。

这意味着 spender 可以长期、大量转走该 token，直到用户 revoke。

可用检查工具：

-   [Revoke.cash](http://Revoke.cash)
    
-   Etherscan / BaseScan Token Approval Checker
    
-   Rabby
    
-   DeBank
    
-   MetaMask Portfolio
    

核心句：

> _approve 是链上交易授权，permit 是离线签名授权，但两者最终都可能变成 allowance。_

## **4\. 盲签为什么危险**

盲签的危险不在 gas 高低，而在于用户签了一段自己看不懂的原始数据。

用户以为是登录签名，实际可能是：

-   授权；
    
-   permit；
    
-   订单；
    
-   转移资产的可执行意图。
    

攻击者拿到签名后，可能自己付 gas 提交到链上执行。

防范方式：

-   不签看不懂的消息；
    
-   优先使用 EIP-712 typed data；
    
-   钱包要清楚显示 spender、token、amount、deadline、chainId；
    
-   禁用或强提醒危险的 eth\_sign；
    
-   大额钱包和交互钱包分离。
    

## **5\. AI Agent 自动交易测试重点**

如果测试一个 AI Agent 自动把 USDC 存进收益池，不能只看“能不能跑通”。

重点检查：

-   钱包权限：Agent 用什么钱包签名？私钥是否安全？
    
-   Allowance 生命周期：是否无限授权？是否只授权本次额度？用完是否 revoke？
    
-   ChainId：是否发到正确链？
    
-   Token 地址：不同链的 USDC 地址不同，不能只看 symbol。
    
-   收益池真实性：vault 地址、APY、TVL 是否来自可信 API？有没有更新时间？
    
-   Slippage / minAmountOut：swap 或 deposit 是否有最小到账保护？
    
-   Nonce 管理：连续交易是否会因为 pending 卡住？
    
-   RPC / API 失败处理：timeout、429、502、节点异常时，前端不能误报成功。
    
-   用户确认流程：是否展示金额、spender、chain、vault、收益、风险？
    
-   日志记录：记录 user address、chainId、token、spender、amount、tx hash、RPC response、error、timestamp、模型推荐依据。
    

核心句：

> _AI Agent 自动交易不能只测“能不能跑”，要测权限、数据真实性、链上执行、失败处理和日志追踪。_

## **我的总结**

今天的内容让我更清楚 Web3 support 的排查顺序。

交易问题不能只看前端状态，要从 hash 来源、广播、chainId、RPC、nonce、gas、pending 状态逐层确认。授权问题也不能只看“有没有 approve”，还要理解 permit、allowance、无限授权和盲签风险。

对 AI Agent 来说，自动交易测试的重点不是让模型完成动作，而是确认权限边界、数据来源、用户确认、失败处理和日志证据都完整。

## **打卡短版**

今天学习了 Web3 钱包和交易排查，重点包括 tx hash 查不到、nonce 错误、approve / permit、盲签风险，以及 AI Agent 自动交易测试。

我的核心理解是：前端显示成功不等于链上成功。Tx hash 查不到时，要先确认 hash 来源，再确认是否广播、是否查错链、RPC 状态、nonce、gas 和 pending 状态。

我也区分了 approve 和 permit：approve 是链上授权，permit 是离线签名授权，但最终都可能形成 allowance，让 spender 调用 transferFrom 转走 token。盲签危险不在 gas，而在用户签了自己看不懂、但可能可执行的意图。

如果测试 AI Agent 自动把 USDC 存进收益池，不能只测能不能跑，要重点测钱包权限、allowance 生命周期、chainId、token 地址、vault 真实性、slippage、nonce、RPC 失败处理、用户确认和日志追踪。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

# **Day 3 学习笔记：AI x Web3 API Support FAQ**

日期：2026-05-20  
来源：[**https://github.com/bbainthug/ai-web3-api-support-kit**](https://github.com/bbainthug/ai-web3-api-support-kit)  
读取版本：99f17e5

## **今日学习主题**

今天把学习内容整理成了一个 API Support / Developer Support FAQ。

这个 FAQ 的价值不是“背概念”，而是把 LLM API 和 Web3 场景里的常见问题拆成：

`用户现象 -> 问题原因 -> 排查路径 -> 解决方案 -> 技术支持回复`

这说明我开始从“学习者视角”转向“技术支持 / 开发者支持视角”。

## **1\. Token 超限不是文件大小问题**

Solidity 合约审计时，如果 API 报：

`context length exceeded token limit exceeded maximum context length exceeded`

核心原因通常是输入超过模型上下文窗口。

关键理解：

-   LLM 不是按文件 KB 处理输入，而是按 token 处理。
    
-   Solidity 代码里有大量符号、括号、地址、import、注释和重复结构，token 可能比直觉更多。
    
-   长合约不应该一次性全塞给模型。
    

更好的做法：

-   按 contract / function / module 拆分；
    
-   先分析结构，再定位高风险模块；
    
-   删除无关注释和依赖；
    
-   必要时换长上下文模型；
    
-   最后汇总多轮审计结果。
    

## **2\. 模型生造代币，本质是数据源和验证问题**

如果模型生成了不存在的代币，比如 USDT\_PLUS，不能只怪 prompt。

原因可能有三层：

-   模型层：LLM 按概率生成，看起来合理不等于真实。
    
-   参数层：temperature 太高会增加发散和幻觉。
    
-   数据层：没有接 RPC、explorer、协议 API、RAG 或真实数据源。
    

Web3 事实敏感信息不能让模型凭语言模式猜：

-   token symbol；
    
-   合约地址；
    
-   chainId；
    
-   APY / TVL；
    
-   协议名称；
    
-   空投规则；
    
-   安全事件。
    

正确方向是：模型负责解释，事实来自工具和数据源。

## **3\. SSE / Stream 解决的是体验问题**

流式输出不是为了让模型更准，而是为了改善长回答体验。

普通 JSON 返回：

`模型生成完整答案 -> 服务端一次性返回 -> 用户等待很久`

SSE / Stream：

`模型生成一段 -> 服务端推一段 -> 前端边收边显示`

适合开启 stream 的场景：

-   聊天；
    
-   长文本；
    
-   代码生成；
    
-   合约审计报告；
    
-   投资分析报告；
    
-   多步骤推理展示。
    

不一定需要 stream 的场景：

-   短分类；
    
-   关键词提取；
    
-   后台任务；
    
-   必须完整解析的 JSON 结构输出。
    

## **4\. System Prompt 不是硬规则**

今天一个很重要的点：system prompt 是软约束，不是程序里的 if/else。

写了“不要编造”只能降低幻觉概率，不能保证模型永远不编。

如果产品允许模型直接输出合约地址、收益率、代币名称，但没有验证层，那就是产品设计问题。

更稳的方案：

-   prompt 要求无法验证时返回 unknown 或 null；
    
-   接入 RPC、explorer API、协议官方 API、RAG；
    
-   后端校验合约地址、chainId、token metadata、数据更新时间；
    
-   验证失败时拦截，不直接展示给用户。
    

## **5\. LLM 评测不能只看谁说得像专家**

比较两个模型是否适合 Solidity 审计，不能只看文风。

应该固定变量：

-   同一批测试合约；
    
-   同一个 prompt；
    
-   同样的 temperature；
    
-   同样的 max tokens；
    
-   同样的输出格式；
    
-   同样的评分标准。
    

测试样本要覆盖：

-   已知漏洞合约；
    
-   正常合约；
    
-   真实项目代码片段；
    
-   边界样本。
    

评分重点：

-   是否找到真实漏洞；
    
-   是否漏掉高危漏洞；
    
-   是否误报；
    
-   是否解释清楚攻击路径；
    
-   修复建议是否可执行；
    
-   多次运行是否稳定。
    

安全审计看的是准确性、可验证性和可复现性，不是表达是否华丽。

## **我的总结**

今天的核心收获是：LLM API 问题要分层排查。

不能把所有问题都归因成“模型不听话”。一个可靠的 AI x Web3 产品至少要同时考虑：

-   输入是否超上下文；
    
-   参数是否适合任务；
    
-   是否接入真实数据源；
    
-   prompt 是否给出清楚边界；
    
-   产品层是否有校验和拦截；
    
-   评测是否固定变量和标准答案。
    

这和我的主线方向很一致：AI x Web3 Dev Tooling 的重点不是让 AI 自信输出，而是让它能被验证、能被排查、能被审计。

## **后续 TODO**

-   用 tokenizer 实际估算一次 Solidity 合约 token 数。
    
-   跑一个 streaming API demo 或阅读官方 stream 示例。
    
-   找一个简单漏洞合约，做一次模型审计评测样本。
    
-   把 FAQ 里的 5 个案例扩展成可验证实验。
    
-   给每个 FAQ 加上“如何复现 / 如何验证”的小节。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->


# **Day 2 学习笔记：LLM 底层机制与 Agent 自动化**

日期：2026-05-19  
主题：LLM 原理 / QKV Attention / 推理阶段 / 采样控制 / Agent

## **1\. LLM 不是数据库**

今天最重要的理解：大模型不是“查资料”的系统

训练结束后，原始文本不会像数据库一样被模型逐条保存。模型真正留下的是大量参数，也就是权重。输入文本会被切成 token，再转成 embedding，进入模型做矩阵计算

所以 LLM 的回答不是“查出来”的，而是根据上下文和参数“算出来”的概率结果。

这也解释了为什么模型会幻觉：它擅长生成最像答案的文本，但不天然知道什么是事实。

## **2\. QKV Attention：上下文匹配机制**

Attention 可以理解成 token 之间的大规模匹配和信息聚合。

-   Q，Query：当前 token 想找什么信息。
    
-   K，Key：每个 token 提供什么语义标签。
    
-   V，Value：每个 token 真正携带的信息内容。
    

模型会用 Q 和 K 做匹配，得到 attention score，再按权重吸收对应的 V。这样每个 token 的向量都会被上下文重新影响。

简单说：Attention 让模型知道“当前词应该重点参考上下文里的哪些词”。

## **3\. Prefill 和 Decode**

LLM 推理分成两个阶段：

-   Prefill：处理用户输入。所有输入 token 可以并行计算，所以速度相对快。
    
-   Decode：生成回答。模型一次只能生成下一个 token，因为它不能提前看到未来输出，所以是自回归串行过程。
    

生成过程大概是：

`输入 -> 生成 A 输入 + A -> 生成 B 输入 + A + B -> 生成 C`

这也是为什么长回复会慢：每个新 token 都要依赖前面的历史。

## **4\. Temperature 控制输出风格**

Temperature 控制模型采样的随机性。

-   Temperature = 0：更稳定，更适合代码、合约、数据提取、审查。
    
-   Temperature 较高：更发散，更适合文案、创意、社媒内容。
    

对 AI x Web3 来说，涉及链上事实、代码、安全、合约解释时，应该更偏低温度和可验证输出。

## **5\. Agent：模型加上工具和循环**

Agent 不是单纯聊天。它更像：

`Agent = LLM + Memory + Tools + Action Loop`

ReAct 流程可以理解为：

`Thought -> Action -> Observation -> Thought -> ... -> Final Output`

也就是模型先思考要做什么，再调用工具，比如 API、终端、脚本，然后观察结果，再继续修正。

这让模型从“只会输出文本”变成“能执行一套任务流程”。

## **6\. 我的理解**

LLM 本质是概率生成机器，不是事实源。Agent 则是在模型外面加工具、记忆、日志和循环，让它能做事。

但越接近执行，风险越高。尤其在 Web3 场景里，Agent 可以帮我查数据、写脚本、解释交易，但签名、转账、授权、合约写入必须人工确认。

## **打卡短版**

今天学习了 LLM 的底层运行逻辑和 Agent 自动化机制。

我的理解是：LLM 不是数据库，回答不是查出来的，而是 token 经过 embedding、attention 和大量矩阵计算后生成的概率结果。QKV attention 负责让 token 在上下文中互相匹配和吸收信息；Prefill 阶段处理输入比较快，Decode 阶段因为自回归生成只能串行。

另外，Temperature 控制输出随机性，链上事实、代码和安全场景应该偏低温度。Agent 则是在 LLM 外面加上工具、记忆和 action loop，让模型能从“生成文本”变成“调用工具并根据结果继续修正”。

对 AI x Web3 来说，我今天最大的收获是：AI 可以帮我理解、整理、调用工具，但不能被当成事实源，更不能绕过人工确认去做签名、转账、授权或合约写入
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->



# **学习笔记：钱包原理、链上支付与 Learning Agent 配置**

日期：2026-05-18  
主题：Week 1 - Web3 基础 + AI Learning Agent

## **今日学习概览**

今天主要学了三件事：

1.  钱包的基本原理：钱包不是“装钱的软件”，而是管理私钥、生成地址、发起签名和链上交易的入口。
    
2.  链上支付和传统支付的不同：传统支付依赖银行、支付机构和清结算系统；链上支付依赖用户签名、区块链网络、Gas、交易确认和公开可验证的账本。
    
3.  配置自己的 learning agent：把 Codex 配置成 AI x Web3 School 的学习助手，用它来整理课程、生成学习计划、维护 GitHub repo、产出笔记和 proof-of-work。
    

## **1\. 钱包的核心原理**

### **钱包不是账户本身**

Web3 钱包更像一个“钥匙管理器 + 签名工具 + 链上交互入口”。

资产并不是存在钱包软件里，而是记录在区块链状态里。钱包通过私钥证明“我有权控制某个地址”，然后发起签名或交易。

### **几个关键概念**

-   助记词：通常用于恢复钱包，可以推导出私钥。绝对不能泄露。
    
-   私钥：控制地址资产和权限的核心秘密。谁拿到私钥，谁就能控制对应地址。
    
-   公钥 / 地址：地址可以公开，用来接收资产或作为链上身份。
    
-   签名：用私钥对某个消息或交易做授权证明。
    
-   钱包 App：帮用户管理密钥、展示交易内容、连接 DApp、发起签名和广播交易。
    

### **重要理解**

钱包里显示的余额，本质上是钱包通过 RPC / 节点 / 索引服务读取链上状态后展示出来的结果。钱包不“保存余额”，链保存状态，钱包保存控制权。

所以安全边界非常清楚：

-   可以公开：地址、交易哈希、区块浏览器链接。
    
-   不能公开：助记词、私钥、真实 API key、签名授权的敏感内容。
    
-   需要人工确认：签名、授权、转账、合约写入。
    

## **2\. 链上支付 vs 传统支付**

### **传统支付的基本路径**

传统支付通常是：

用户发起支付 -> 支付机构 / 银行校验 -> 账户记账 -> 清算结算 -> 商户或收款方到账。

特点：

-   账户通常绑定真实身份。
    
-   支付过程依赖银行、支付公司、卡组织等中介。
    
-   用户体验上比较“可逆”：可能有退款、拒付、风控冻结、人工客服介入。
    
-   底层账本不是公开的，用户只能看到平台给出的账单记录。
    
-   信任基础是机构信用、监管、账户体系和清结算网络。
    

### **链上支付的基本路径**

链上支付通常是：

用户用钱包构造交易 -> 私钥签名 -> 交易广播到链上网络 -> 验证者 / 矿工打包 -> 区块确认 -> 区块浏览器可验证。

特点：

-   地址就是链上身份入口，但地址不等于完全匿名。
    
-   支付动作由私钥签名授权。
    
-   交易一旦确认，通常不可随意撤销。
    
-   状态公开透明，可以用交易哈希、区块高度、事件日志验证。
    
-   需要 Gas，失败的交易也可能消耗 Gas。
    
-   信任基础是密码学签名、共识机制、链上状态和智能合约规则。
    

### **关键差异表**

| 维度 | 传统支付 | 链上支付 |
| --- | --- | --- |
| 身份入口 | 银行账户 / 支付账户 | 钱包地址 |
| 授权方式 | 密码、短信、人脸、银行风控 | 私钥签名 |
| 记账系统 | 银行 / 支付机构内部账本 | 区块链公开账本 |
| 中介角色 | 强依赖支付机构和清结算系统 | 依赖链和合约，减少中心化中介 |
| 可逆性 | 可退款、拒付、冻结、人工处理 | 确认后通常不可逆 |
| 成本 | 手续费通常由商户或平台承担 | 用户或发起方支付 Gas |
| 可验证性 | 依赖平台账单 | 可用 explorer 验证交易 |
| 风险点 | 账户冻结、风控、信息泄露 | 私钥泄露、错误签名、错误地址、合约风险 |

## **3\. 支付背后的“信任模型”不同**

传统支付更像是在信任机构：

-   银行帮我保管账户。
    
-   支付机构帮我传递指令。
    
-   清算网络帮我完成最终结算。
    
-   出问题时可以找平台或客服处理。
    

链上支付更像是在信任规则：

-   私钥能证明控制权。
    
-   节点验证交易是否合法。
    
-   共识决定状态更新。
    
-   智能合约按代码执行。
    
-   交易记录公开可查。
    

这也解释了为什么 Web3 里“确认交易”比传统支付里的“点击付款”更重：一笔链上交易可能改变资产、授权、合约状态，而且撤回成本很高甚至不可撤回。

## **4\. 配置 Learning Agent 的收获**

今天也把 Codex 配置成了自己的 AI x Web3 School learning agent。

这个 agent 的作用不是替我学习，而是帮我把学习过程变成一个持续 workflow：

-   读取课程任务和 Handbook。
    
-   根据我的背景生成个人学习计划。
    
-   把学习内容整理成 notes、logs、prompts、demos。
    
-   维护 GitHub 学习仓库结构。
    
-   生成每日打卡草稿。
    
-   形成 Handbook feedback 草稿。
    
-   提醒我哪些操作需要人工确认。
    

### **当前 agent 工作流**

1.  我提供课程公告、学习内容或个人经历。
    
2.  Agent 整理成结构化学习任务。
    
3.  Agent 更新本地学习 repo。
    
4.  我人工审核笔记和打卡内容。
    
5.  涉及 GitHub push、WCB 提交、钱包签名、链上交易时，必须由我确认。
    

### **Agent 安全边界**

这个边界非常重要：

-   Agent 可以生成解释、计划、代码、笔记和检查清单。
    
-   Agent 可以维护本地 repo。
    
-   Agent 不应该保存 API key、私钥、助记词。
    
-   Agent 不应该自动签名、转账、授权、写合约。
    
-   Agent 如果要调用 WCB API、提交任务或 push GitHub，需要先确认。
    

## **5\. 我今天形成的理解**

钱包是 Web3 的“控制权入口”，支付是“签名后的链上状态变更”。传统支付把复杂性藏在机构系统里，链上支付把规则、状态和结果公开出来，但也把更多安全责任交还给用户。

对 AI x Web3 来说，最关键的问题不是“让 AI 自动付款”，而是：

-   AI 能不能解释清楚用户将要签什么？
    
-   AI 能不能区分读操作和写操作？
    
-   AI 能不能在高风险动作前停下来？
    
-   AI 能不能留下日志、hash、区块高度和 explorer 链接？
    
-   用户能不能复核每一步？
    

所以我后续的学习方向会继续围绕：chain-aware context、tool log、human confirmation、wallet permission 和 read-only Web3 agent。

## **6\. 可以放进打卡的短版**

今天学习了钱包原理、链上支付和传统支付的差异，也继续配置了自己的 AI x Web3 learning agent。

我最大的收获是：钱包不是“存钱的账户”，而是私钥、签名和链上交互的入口；链上支付不是传统支付那种依赖机构清结算的流程，而是由用户签名、网络验证、区块确认和公开账本共同完成的状态变更。

同时我把 Codex 配置成学习 agent，用来整理课程、维护 GitHub repo、生成学习笔记和打卡草稿。但涉及 API key、GitHub push、WCB 提交、钱包签名、转账和合约写入的动作，都必须由我人工确认。

下一步我会完成测试网交易和最小合约读写，把交易哈希、Gas、区块高度、合约地址和 explorer 链接记录到 repo。

## **7\. 下一步 TODO**

-   准备一个测试专用钱包。
    
-   获取 Sepolia 或课程指定测试网测试币。
    
-   完成一笔测试网转账并记录交易哈希。
    
-   用 Remix / Hardhat / Foundry 部署一个最小合约。
    
-   完成一次合约读取和一次合约写入。
    
-   把 AI 生成 -> 人工复核 -> 钱包确认 -> 链上执行 -> explorer 验证画成流程图或补进 demo。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
