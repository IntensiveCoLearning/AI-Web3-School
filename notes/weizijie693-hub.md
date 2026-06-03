---
timezone: UTC+8
---

# weizijie693-hub

**GitHub ID:** weizijie693-hub

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->
**代币**：链上数字资产，类似网络积分货币
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->

每天都在进步！
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->


ai的运行需要人为监督
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->



AI 在 Web3 中的具体应用

DeFi 金融领域

AI 智能量化交易，自动执行链上套利、流动性挖矿、止盈止损策略；AI 链上信用风控，依托钱包交易数据建立去中心化信用评分，助力无抵押借贷；AI 智能预言机，精准抓取现实市场数据，稳定币、衍生品定价。

Web3 安全领域

AI 自动化智能合约漏洞检测，快速排查重入攻击、闪电贷漏洞；AI 链上地址行为监测，识别洗钱、诈骗、盗币异常资金流向；AI 钓鱼网址、虚假钱包识别，拦截各类链上诈骗行为。

AIGC 与 NFT 数字文创

AI 一键生成图片、头像、文案、元宇宙场景并直接铸造 NFT；AI 完成链上版权存证与溯源，保障 AI 创作内容权属；AI 自动结算 NFT 二次交易版税，实现创作者持续收益。

去中心化 AI 算力网络

整合全球闲置 GPU 算力，搭建分布式 AI 训练网络，降低大模型训练成本；链上 AI 模型交易市场，用户按需调用各类 AI 模型服务；隐私联邦学习，数据不上链即可联合训练 AI 模型，保护用户隐私。

DAO 去中心化治理

AI 自动精简治理提案、梳理社区舆论，降低治理决策门槛；AI 智能代理代为参与社区投票、执行治理决议；AI 监控 DAO 国库资金流向，把控资金使用合规性。

元宇宙与链游

AI 生成游戏剧情、NPC 智能对话、虚拟场景与游戏道具；AI 优化链游经济模型，调控游戏代币供需平衡；AI 虚拟人入驻元宇宙，实现沉浸式社交、直播互动。

RWA 现实资产上链

AI 对房产、大宗商品、债券等实体资产自动估值核验；AI 打通实体产业数据与区块链，完成现实资产数字化确权；AI 自动化完成实体资产链上拆分、流转与收益分配。

社交与去中心化内容平台

AI 筛选链上优质内容、过滤低俗违规信息；AI 打造去中心化智能社交助手，管理链上社交关系；AI 优化去中心化社区流量分发机制。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->





Private Key 私钥:

一句话解释:私钥是控制钱包资产和链上身份的核心凭证，谁掌握私钥，谁就能控制这个钱包
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->






今天完成了 AI x Web3 School Learning Agent 工作流的配置记录，同时从零到一构建了一个概念学习工具，并做了迭代。

1\. 提交设置记录

在仓库 submissions/[setting-log-learning-agent.md](http://setting-log-learning-agent.md) 提交了第一份作业：记录了工具选择（Claude Code）、RAG/Agent/Web3

学习任务、关键提示配置、成功输出，以及 3 条人工审核案例（仓库创建、学习计划调整、词汇表审校）。

2\. 构建交互式概念学习工具

想法：Handbook 内容多但散，初学者不知道从哪看。做了 CLI + Web 双版本的概念学习工具，把每个核心概念写成"一句话解释 +

具体例子 + 常见误解"三段式。

v1（原版）：

\- 11 个概念：LLM、Prompt、Agent、RAG、Blockchain、PoS、DeFi、L2、Rollup、Smart Contract、HITL

\- CLI 命令有 list / explain / random / quiz

\- 网页版纯静态 HTML，双击就能打开

v2（迭代版）：在 v1 基础上，把概念库扩大到 35 个（AI 15 + Web3 15 + AIxWeb3 桥接

5），加了深色模式切换、分类筛选、localStorage 学习进度追踪和测验历史记录。

3\. 人机协作记录

AI 做的事：生成概念内容初稿、CLI 框架、网页版 HTML/CSS/JS、README 初稿

我做的事：逐条审校概念准确性、debug Windows 终端编码兼容性（emoji 变乱码 crash）、修复 Quiz 空输入边界问题、设计 UI

布局和分类标签、更新文档

4\. 学到的东西

\- HITL 不是每个操作都要人批准，而是关键节点需要人工把关，比如概念准确性必须审校，但 UI 框架可以直接用

\- GitHub Pages 部署后第一次访问需要等 1-2 分钟

\- JSON 里写中文直接存 UTF-8 没问题，但 Windows cmd 显示会乱码——浏览器和 VS Code 终端正常

\- 对比 v1 到 v2 的改动，增量迭代比一次性做大改更容易落地
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->







今天私下去了解了一下web3 network基础

有了一些理解：区块链网络的核心不是"存数据"，而是让互不信任的参与者对状态变化达成一致。传统应用是直接写数据库，链上应用则是在一个公开、按区块推进、由网络共识维护的状态机上提交请求。

同时配置了一些学习环境和工具库：zoom，cursor，claude code，metamask等

期待今晚的学习
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
