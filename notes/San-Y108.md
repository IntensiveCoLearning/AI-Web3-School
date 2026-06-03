---
timezone: UTC+8
---

# San-Y108

**GitHub ID:** San-Y108

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->
[https://github.com/San-Y108/ai-web3-school-cohort-0/blob/main/daily/2026-05-28.md](https://github.com/San-Y108/ai-web3-school-cohort-0/blob/main/daily/2026-05-28.md)                                                      

     WCB 打卡内容：                                                                                                                                            

     今日学习：                                                                                                                                                

     1. Wallet/Permission 任务：学会了 EOA vs Smart Account、权限分层（read/prepare/write）、ERC-4337/Safe/Guard 如何做硬限制。已提交产出。                    

     2. Payment/Commerce 任务：学会了 x402（API paywall 标准）和 MPP（Stripe 的 agent 支付协议），设计了 7 环节最小 commerce flow。已提交产出。                

     3. 核心收获：agent commerce 最难的不是转账，而是把报价、预算、验收、争议串成可控链路。                                                                    

     明日计划：完善 Security/Privacy 任务 + 开始 x402 Paywall 实操。
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->

5月27日学习打卡：完成 Week 2 三个方向研究任务。画了 AI × Web3 问题地图（5个方向+SVG可视化），给 Hermes Agent 写了 Profile 草图并比较了 MCP vs A2A，设计了 DAO 贡献追踪器流程（AI自动抓取+打分 vs          

     人定规则+社区纠错）。主方向 Identity/Reputation 推进顺利。明天继续补 Handbook 和剩余方向任务。                                                                                                              

     >                                                                                                                                                                                                           

     > GitHub: [https://github.com/San-Y108/ai-web3-school-cohort-0](https://github.com/San-Y108/ai-web3-school-cohort-0)
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->


今天完成了 3 个 WCB 任务：                                                                                                                             

     1. 受限 Web3 助手设计 + CLI 原型：设计了一个"AI 只做解释和检查，不做签名和转账"的受限助手，并写了一个 Python CLI 工具。遇到的问题是 Python 的          

     hashlib.sha3\_256 ≠ 以太坊的 keccak256，selector 算错了，改成硬编码解决。                                                                               

     2. AI 可交互学习产物：做了一个概念教练 CLI，覆盖 LLM、Prompt、Agent、Wallet、Smart Contract、Gas 6 个概念。AI 辅助生成代码和解释，人工审核准确性。     

     3. 拆解 AI×Web3 项目：拆解了 Cobo Agentic Wallet 和 Hermes Agent。最大的收获是理解了"prompt 约束 vs 架构级限制"——prompt injection 可以绕过 Agent       

     的"自觉"，但绕不过 Pact 这样的代码层硬约束。                                                                                                           

     另外看了 5.20 Web3 运行原理的回放，理解了一笔链上交易的生命周期：钱包签名 → 节点广播 → 验证者打包 → 全网更新状态
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->



![截屏2026-05-25 20.05.44.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/San-Y108/images/2026-05-25-1779712282142-__2026-05-25_20.05.44.png)

Daily Note — 2026-05-25                                                                 

     今日学习内容                                                                            

     - Handbook 章节：AI 基础前三章 —                                                        

     大语言模型（LLM）、提示词（Prompt）、上下文（Context）                                  

     -                                                                                       

     关键概念：Token、Embedding、Transformer、Hallucination、Instruction、Few-shot、Stru     

     ctured Output、Prompt Injection、Context Window、Context                                

     Engineering、Memory、Knowledge Base                                                     

     笔记 / 理解                                                                             

     > 今天读了 Handbook AI 基础前三章，建立了一个核心认知：LLM 是推理层，不是真相源。       

     >                                                                                       

     > LLM 的工作方式是算概率，不是查数据库。Token                                           

     是模型处理文本的基本单位，直接影响上下文容量和调用成本。Hallucination                   

     在普通问答里是质量问题，在带执行能力的系统里是流程风险——不能只靠"写更好的               

     prompt"来应对，需要外部校验。                                                           

     >                                                                                       

     > Prompt                                                                                

     是你和模型之间的接口协议，不是神奇咒语。它应该定义任务目标、可用输入、禁止行为、输      

     出格式。Prompt 是软约束，真正的安全边界由代码、权限、校验和审计承担。                   

     >                                                                                       

     > Context                                                                               

     是模型这一次能看到的信息空间。模型的输出只取决于它当前能看见的上下文。所以系统必须      

     治理好什么能进上下文、带着什么身份进去、过期后怎么退出。Memory                          

     不能替代实时授权——过去允许的动作不代表现在仍然允许。                                    

     >                                                                                       

     > 三章的关联：Prompt 定任务 → Context 给数据 → LLM 生成 → 代码校验 → 人工确认。这是     

     AI×Web3 交叉场景的最小安全链路。                                                        

     疑问 / 卡点                                                                             

     暂无明显卡点，三章概念比较清晰。                                                        

     实验 / 动手                                                                             

     无，今天主要是概念学习阶段。                                                            

     打卡记录                                                                                

     - 打卡草稿：见下方                                                                      

     -                                                                                       

     提交链接：[https://github.com/San-Y108/ai-web3-school-cohort-0/blob/main/concepts/ll](https://github.com/San-Y108/ai-web3-school-cohort-0/blob/main/concepts/ll)     

     [m-prompt-context.md](http://m-prompt-context.md)                                                                     

     - 提交时间：待确认                                                                      

     明日计划                                                                                

     - Batch 2：读 Web3 基础「开发栈（Dev Stack）」，建立技术栈图景                          

     - 继续 Batch 3：读 AI 基础「RAG」和「Agent」，为 AI×Web3 交叉任务打基础                 

     要我直接写入仓库并提交吗？另外打卡草稿是：                                              

     今天完成了 Handbook AI 基础前三章学习：LLM、Prompt、Context。                           

     核心认知：LLM 是推理层不是真相源；Prompt 是软约束不是安全边界；Context                  

     决定模型看见什么，系统必须治理好信息的进出。                                            

     产出：concepts/[llm-prompt-context.md](http://llm-prompt-context.md)（系统笔记）
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->




5.24 打卡 | Web3 概念 + 第一笔链上交易                                                                                        

     今天集中收尾 Week 1 的 Web3 任务。                                                                                            

     概念卡片（5篇笔记）                                                                                                           

     - 密码学：私钥、签名、哈希是怎么串起来的                                                                                      

     - 钱包：连接/签名/发交易是三种完全不同的操作，风险逐级升高                                                                    

     - 网络：L1 是地基，L2 是快速通道，桥是搬运工也是最弱一环                                                                      

     - 智能合约与账户：EOA 单人单钥 vs 多签多人确认 vs 智能账户可编程                                                              

     - 钱包 vs 交易所：谁是真正的资产控制者                                                                                        

     测试网交易                                                                                                                    

     在 Sepolia 上完成了第一笔交易——0.01 ETH 自己转给自己，交易哈希 0x3875...，Etherscan 可查。Gas 21000、费用 ~0.00005            

     ETH。感受最深的是「点按钮 ≠ 交易完成」，从签名到确认真的需要时间。                                                            

     下一步： 用 Remix 在 Sepolia 部署一个最小智能合约。                                                                           

     笔记都在：[https://github.com/San-Y108/ai-web3-school-cohort-0](https://github.com/San-Y108/ai-web3-school-cohort-0)
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->





今日学习内容：                                                                                                        

     1. 完成 Web3 基础 Handbook 第四章「智能合约」阅读                                                                     

        - 理解了读操作（免费）和写操作（花 Gas）的本质区别                                                                 

        - 合约代码部署后不可改，修 bug 靠重新部署或可升级代理模式                                                          

     2. 完成第五章「账户抽象」阅读                                                                                         

        - EOA：一把私钥一个人，简单但单点故障                                                                              

        - 多签：多人确认才能动钱，适合团队金库                                                                             

        - 智能账户：可编程规则（限额、恢复、让 Agent 代操作）                                                              

     3. 整理了学习过程中的踩坑认知，写了一篇推特串记录从零学 Web3 的核心洞察                                               

     明日计划：                                                                                                            

     - 完成智能合约和账户抽象的概念笔记                                                                                    

     - 开始测试网交易实操（任务 2）
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->






今天吧那个实习手册全部看完了，学了好多，也知道了区块链的发展方向和岗位需求。由于今天考试，所以只能做这么多了
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->







今天我完成了「创建课程 GitHub repo」任务，由于开了一整天的会，所以没有看hermes的直播，明天看。我理解到它不只是建立一个仓库，而是在搭建未来 4 周 的学习工作台。通过这个任务，我实践了 Git 的基础操作，包括初始化仓库、创建目录、commit 和 push；同时也学会了用项目化方式组织学习内容，例如用 `daily/` 记录每日学习、`tasks/` 保存任务 proof、`experiments/` 存放实验、`handbook-feedback/` 记录反馈、`hackathon/` 为后续项目预留空间。本次仓库初始化主要由 Hermes Agent 协助完成，包括创建目录结构、README、profile、learning-plan 和模板文件，我负责人工确认内容是否准确、结构是否合理，并检查没有提交 API Key、私钥、助记词、token、`.env` 等敏感信息。最终，我已经将仓库 push 到 GitHub，并完成了多次 commit，为后续课程学习、记录和提交打下了基础。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->








![截屏2026-05-18 19.08.05.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/San-Y108/images/2026-05-18-1779109148126-__2026-05-18_19.08.05.png)

明确了自己的未来学习方向，也减少了很多的焦虑以及不确定的心情，今天第一天，尝试了配置hermes，配了一个下午，遇到了很多问题，最后一个一个弄好了，也学会了就是有时候时间比钱重要，要是直接爆金币就不用浪费这么久了。今天的第二节直播，能感觉出安全的重要性，但是因为没有什么基础，所以没听懂很多，后续会打算把课件的内容吃透了！
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
