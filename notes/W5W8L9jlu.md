---
timezone: UTC+8
---

# jujubayi

**GitHub ID:** W5W8L9jlu

**Telegram:** @choushinotchatte

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->
````markdown
# Daily Note - 2026-05-23

## Today / 今日

- Course or Handbook page: https://aiweb3.school/zh/handbook/
- WCB Learning item: https://web3career.build/zh/programs/AI-Web3-School?tab=learning
- Time spent: 1-2 hours planned

## Minimum Path / 最小路径

- 完成 AI x Web3 School 个人公开学习仓库初始化。
- 确认学习画像：AI 新手、Web3 新手、能独立开发，目标方向为开发。
- 设置每日学习节奏：中文为主，英文为辅；每天 1-2 小时。

## Recommended Path / 推荐路径

- 将学习材料沉淀为可公开索引的 proof-of-work 仓库。
- 建立 daily notes、tasks、experiments、handbook feedback、hackathon 和 submissions 目录。
- 设置早晚学习提醒，用于规划任务和晚间复盘。

## Challenge Path / 挑战路径

- 后续把每日问题沉淀为 Handbook feedback，并把技术探索记录到 `experiments/`。
- 为 Hackathon 项目逐步积累问题、假设、原型和 demo 记录。

## Notes / 笔记

- Public repo 不能提交 secret、API key、助记词、私钥、验证码、内部会议链接或他人个人数据。
- Learning Agent 可以帮助生成打卡草稿和维护仓库，但正式提交到 WCB / 打卡平台前需要确认提交内容。
- English summary: Initialized a public proof-of-work repository for AI x Web3 School and set up the first learning workflow.

## Questions / 问题

- 今天 WCB Learning 页面中的具体打卡入口和任务要求需要在浏览器中确认。

## Handbook Feedback Candidate / Handbook 反馈候选

- Page:
- Issue:
- Suggestion:
- Source:

## Check-in Draft / 打卡草稿

```text
今天我完成了 AI x Web3 School 个人学习仓库初始化，建立了 README、学习画像、学习计划、daily note 模板、task note 模板，以及 daily、tasks、experiments、handbook-feedback、hackathon、submissions 等目录。

我确认了自己的学习画像：AI 新手、Web3 新手、能独立开发，当前目标方向是开发，每天计划投入 1-2 小时。后续输出会以中文为主、英文为辅，保证学习过程可以公开复盘和索引。

下一步我会根据 WCB Learning 页面确认当天课程和任务，把学习记录写入 daily note，并把学习中的问题整理为 Handbook feedback。

English summary: I initialized my AI x Web3 School public learning repository and set up a lightweight proof-of-work workflow for daily notes, tasks, experiments, feedback, and future hackathon work.
```

## Submission Record / 提交记录

- Pending: waiting for WCB / check-in platform submission confirmation.
````
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->

**RAG：先查资料，再回答**

RAG 就是让 AI 不要上来就瞎答，先去资料库里搜一搜，再结合搜到的内容回答。

所以它解决的是模型不知道或者模型记不准的问题。比如公司内部文档、最新政策、一些私有知识，模型训练的时候不一定见过，那就先检索，再生成。

但 RAG 其实和 web search很像。它主要是查资料，不是干活。它能告诉你怎么做，但不会真的替你去做。  
——————

**Agent：让 AI 开始干活的一堆程序**

Agent 就比普通聊天更进一步。

它会自己拆任务、调工具、看结果，然后继续下一步。

比如你说“帮我查天气，如果明天下雨就发个邮件”。Agent 理论上就应该真的去查天气、判断、再调用邮件工具。

所以 Agent 重点不是更聪明（本质的输入输出还是LLM在做），而是它开始有执行流程了。

它从一个会聊天的东西，变成一个能办事的东西。  
——————

**MCP：工具接口，agent和工具服务直接的约定**

Agent 想干活，肯定要用工具。查天气要接口，读文件要接口，操作浏览器也要接口。

如果每个工具都自己搞一套会乱套。MCP 就像一个统一插口，差不多可以理解成 AI 工具界的 USB（？）。

工具按 MCP 的格式接出来，支持 MCP 的 AI 就能调用。

和 function calling很像，但是functioncaling是agent 和LLM的约定，比如让LLM按指定格式返回json格式

——————

**Skill：把一堆动作打包成技能**

Skill 比单个工具更像“成套流程”。

比如 MCP 工具可能只是点击、输入、截图、查文件这些小动作。

但 Skill 可以是“自动整理一份报告”“处理一篇论文”“发布一条内容”这种完整任务。

所以我理解 Skill 就是：把工具、经验、步骤，都封装成一个能反复用的技能包。

不然每次都从头教 AI 怎么做，也挺麻烦的。  
  
【有点搞不清 skill 和 mcp，因为感觉本地的mcp和skil有点职能重合】  
  
——————

总结：

```
大模型：脑子
```

```
RAG：查资料
```

```
MCP：接工具
```

```
Agent：拆任务、执行
```

```
Skill：封装好的技能包
```
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->


-   **AI 工具发展与功能变化**：
    
    -   **早期印象**：最初体验时，AI 像智能化搜索引擎，是问答式交互，对检索结果做优化，类似聊天助手。
        
    -   **功能进化**：随着迭代，AI 能做实际任务，如解释代码、总结文章、写文案，如今还能进行 Web coding 等开发任务。
        
    -   **核心运作机制**：用户给出提示词，AI 理解任务目标，调用外部工具执行，观察结果，有问题自动修复。
        
-   **AI 工具类型**：
    
    -   **聊天型 AI**：如 ChatGPT、DeepSeek、Gemini、QALD 等，主要是问答式交互。
        
    -   **AI 编程助手**：如 Cursor、Windsurf、Tora、Antigravity 等，集成 AI 的开发工具，大多基于 Vscode 二次开发。
        
    -   **终端型 agent**：如 Coder、Claw code 等，为开发者优化，训练语料有优化。
        
    -   **模型平台**：汇集市面上大模型供用户使用，如 Openrouter、魔搭社区。
        
    -   **通用助手底座**：如 Oncall 小龙虾、Humps agent，连接大模型、本地工具、特殊记忆和消息平台，类似小型贾维斯。
        
-   **Hive agent 特点与优势**：
    
    -   **核心超能力**：支持多模型接入和工具调用，优化了记忆和技能，能沉淀固定任务流程为技能，实现固定流程化任务。
        
    -   **适合新手**：便于新手通过微信、飞书等方式交互，降低上手难度。
        
-   **Hive agent 安装与配置**：
    
    -   **安装方式**：推荐使用 WSL，可在 GitHub 搜索 house 仓库，其自带一键安装指令，会安装 NODE、Python 等环境及相关依赖。
        
    -   **配置步骤**：新手可用 quick set up，配置大模型提供者、模型和消息网关，市面上大部分大模型都支持。
        
    -   **微信配置问题**：配置微信时可能遇到问题，需刷新环境变量；配置成功后可测试联通性，主网站可能不稳定。
        
-   **常见问题解答**：
    
    -   **Opencall**：定制化程度高，不太适合小白。
        
    -   **API 费用**：大部分 API 需付费，有免费中转站但可能有限制。
        
    -   **设备使用**：手机可使用，推荐对接消息平台；对设备配置要求不高，红米 K40 等低配置设备也能使用。
        
    -   **技能解释**：技能是模板化工作流，规定 agent 角色、行为边界和能力。
        
    -   **API key 设置**：不建议直接将 API key 发到群里，可在机器上设置环境变量，可让 agent 提示设置指令。
        
    -   **Claude 会员使用**：充了 Claude 会员可在 Hormus 使用，按步骤选择 from Claude cloud modules，授权操作。
        
    -   **量化应用**：不会过度依赖 AI 做量化，主要让其记录复盘、生成因子，起辅助作用。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->



-   **Web3 基础认知** ：
    
    -   **审计的作用** ：很多项目的审计更多是锦上添花，安全应贯穿项目生命周期，且安全难以证伪，做的越多项目相对更安全。
        
    -   **AI 的影响** ：AI 未降低系统复杂度，反而对人的要求更高，它是工具，开发者要驾驭 AI，利用它提升能力，但最终决策和审核仍靠人。
        
    -   **Web3 与 Web2 的关系** ：Web3 和 Web2 本质区别不大，只是倾向方向不同，Web3 一定程度上可解决 Web2 中的信任问题。
        
-   **WEB2 支付模型** ：
    
    -   **支付流程** ：用户在电商平台购物下单，电商平台向支付服务请求支付单信息，支付服务从银行机构获取信息展示给用户，用户支付法币，银行机构收到钱后回调，电商平台收到回调后流转状态。
        
    -   **安全考量** ：服务间需用 API key 或 secret key 验证身份，用户有支付密码、风控、MFA 等安全措施，还存在服务间的信任问题。
        
-   **WEB3 支付模型** ：
    
    -   **支付流程** ：用户使用电商平台，平台生成地址，用户往地址转账，转账记录到链上，链上监听服务监听到交易后通知支付服务，支付服务确认用户充值。
        
    -   **资金流** ：资金从用户账户到存款账户，再到支付服务账户，最后定时清结算给商户。
        
    -   **信任解决方式** ：通过算法保证数据不可篡改，逻辑及代码公开透明，利用私钥签名校验请求。
        
-   **钱包相关** ：
    
    -   **钱包本质** ：解决用户控制资产问题，输入私钥，产出 Signature，包括交易签名和消息签名，实现身份和资产的双重认证。
        
    -   **钱包分类** ：按技术分有 EUA 钱包（私钥钱包）、合约钱包、AA 钱包；按多签分有 MPC 多签钱包；按托管方式分有自托管钱包、全托管钱包、混合托管钱包；还有硬件钱包、隐私钱包、分层钱包等。
        
    -   **钱包安全提升** ：防止私钥泄露，避免签名欺骗，采用 EIP712 签名可视化，禁用 ethsign 方法等。
        
-   **交易相关** ：
    
    -   **交易生命周期** ：用户构造交易，用私钥签名并广播，链处理后完成节点共识，记录交易状态。
        
    -   **关键参数** ：包括 gas fee（含 gas count 和 gas price，EVM 从 gasprice 迁移到 EIP1559）、nonce（EVM 要求连续顺序递增，不同链实现不同）、instructions（calldata，是链上应用交互的灵魂）。
        
    -   **交易监听** ：链上服务监听 block，检测到地址收款后，等待一定数量 block 确定，避免链分叉，再进行合规筛查，最后回调支付服务。
        
    -   **交易模拟** ：在未签名时模拟交易执行结果，判断交易是否有风险，签名后模拟无意义。
        
    -   **服务端钱包安全** ：采用权限拆分，使用多签方案，交易可视化并审核，进行交易模拟，通过可信执行环境（Tee）签名。
        
-   **其他问题探讨** ：
    
    -   **学习路径** ：先扎实掌握开发基础知识，能写合约、判断链的基本情况，再根据目标岗位要求，利用 AI 反推所需能力进行学习。
        
    -   **AI 在 Web3 安全中的应用** ：可用于分析未验证的合约代码，如去年年中到年底很多老的未验证合约被 AI 爆破；cloud code 的 miss OS 是 AI 帮忙做安全的工具。
        
    -   **支付场景方案** ：小额免密支付存在信任问题，可从账号权限拆分侧解决，如设置风控规则，使用 MPC 多签。
        
    -   **跨链方向** ：目前跨链需求不算很大，熊市时业务不太好，牛市时链间活跃度可能提升，跨链方案会更好，且目前没有完全纯去中心化的跨链方案。
        
    -   **面试相关** ：面试基础技术岗会问基础知识，也会涉及 AI agent 的使用情况，一面多问基础，二面、三面可能给设计稿和场景题，回答要态度诚恳。
        
    -   **区块链监听** ：监听链上可付费订阅，成本较低，还需进行双重校验，自己维护成本高。
        
    -   **智能合约审计找工作** ：建议参考接力，需证明自己的能力。
        
    -   **放权边界** ：放权边界本质是安全边界，可参考风控规则，如短时高频、偶发大额深夜交易等，风控通过则自动处理，不通过则人工辅助签名。
<!-- DAILY_CHECKIN_2026-05-19_END -->
<!-- Content_END -->
