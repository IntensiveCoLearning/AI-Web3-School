---
timezone: UTC+0
---

# beautifulremi

**GitHub ID:** beautifulrem

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->
[https://eips.ethereum.org/EIPS/eip-4337](https://eips.ethereum.org/EIPS/eip-4337)

# 从设计到编译器 —— Policy DSL 的最小落地路径

这周从 5/26 到 5/28 把 Policy DSL 的设计推了三轮:声明式语法 → 有状态 session → 多 session 两级预算。今天该回答一个绕不开的问题:这套 DSL 怎么真的变成链上能执行的东西?换句话说,编译器长什么样。

想清楚之后,发现它就是一个标准的编译器流水线,只是后端目标特殊(链上配置而不是机器码):

**1\. Lexer/Parser → AST**:把 `permit swap on "0xE592..." where value <= 50 USDC` 这样的文本解析成抽象语法树。这一步最简单,DSL 是受限语法,用 PEG 或手写递归下降都行。关键是语法要小到 LLM 不会生成出歧义结构。

**2\. 语义校验(这层最重要)**:AST 不等于安全。要在这里做静态检查——合约地址格式对不对、方法 selector 在不在目标合约 ABI 里、预算单位一致(别混 USDC 和 wei)、session 预算之和不超过 account 预算、有效期没过期。这一层是"人工审批"真正发生的地方:用户看的是 DSL 文本,但保证 DSL 语义正确的是这个校验器。

**3\. Codegen → 目标 provider 配置**:同一棵 AST,编译成不同后端。ZeroDev 的 SessionKeyPermission 结构体、Biconomy 的 Rule\[\] 数组、Kernel 的 Permission 对象——target 不同,生成的代码不同,但源 DSL 一样。这正是 5/26 说的"可移植性":换 provider 不用重写权限逻辑。

今天的关键认知:**这个编译器的价值不在生成代码,在那层语义校验**。如果只是想配 Session Key,直接调 SDK 就行,不需要 DSL。DSL 存在的意义是在"人类意图"和"链上执行"之间插入一个**可读、可审计、可静态验证**的中间表示。

这也让我重新理解了 5/26 引用的 Cedar 和 OPA 为什么是好参照:它们的核心从来不是"写策略",是"策略的可判定性"——能不能在执行前静态证明这条策略不会越权。Cedar 甚至能做形式化验证。Policy DSL 如果要做到生产可用,这层静态保证比语法糖重要得多。

MVP 范围因此可以砍得很狠:Week 3 先只支持一个 provider(ZeroDev Kernel)、一种动作(DEX swap)、三种约束(合约白名单 + 单笔限额 + 有效期)。Lexer/Parser 用现成的 PEG 库,语义校验手写,codegen 直接拼 ZeroDev 的 permission 对象。能在 Sepolia 上跑通"DSL 文本 → Session Key → 一笔受限 swap"这条完整链路,MVP 就成立了。

把这周连起来看:5/25 定了要做最小实验,5/26-5/28 把 DSL 设计从语法推到并发模型,今天收敛出编译器的三段式结构和 MVP 边界。设计阶段到此为止,Week 3 开始就是写 lexer、写校验器、在测试网上跑第一条 DSL。从"想清楚"到"跑起来"的临界点到了。
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->

[https://eips.ethereum.org/EIPS/eip-4337](https://eips.ethereum.org/EIPS/eip-4337)

# 多 Session 并发 —— 权限隔离还是预算共享？

昨天设计完 session 块和 track 关键字之后，今天碰到一个没预料到的问题：一个 Agent 同时跑多个 session 的时候，预算怎么算？

现实场景：用户给一个 DeFi Agent 签了两个 session——一个负责每日 DCA 买 ETH（日限 200 USDC），另一个负责在 Aave 上管理借贷仓位（日限 500 USDC）。问题来了：这两个 session 的日限是各自独立的 700 USDC 总量，还是共享用户账户的一个总预算池？

如果独立：用户的实际日曝露是 700 USDC（200+500），但每个 session 的 track 变量只看到自己那部分，互不干扰。简单，但用户可能没意识到总曝露比任何单个 session 的限额都大。

如果共享：需要一个全局预算层，两个 session 的 cumulative\_spent 都从同一个池子扣减。问题是链上并发——如果两个 session 在同一个区块里各提交一笔交易，validateUserOp 怎么保证它们读到的预算余额是一致的？

这本质上是一个**链上并发控制**问题，和数据库的事务隔离级别很像：

**Read Committed（默认）**：每个 session 读到的预算余额是最新已确认的值。如果两笔交易在同一个区块里，第二笔读到的余额已经被第一笔扣减过。EVM 单线程执行天然保证了这一点——同一个区块里的交易是顺序执行的。

**但跨区块就不保证了**：Session A 在 block N 读到"余额还剩 300"，构造了一笔 200 的 swap UserOp；Session B 在同一时间也读到"余额还剩 300"，构造了一笔 250 的借贷操作。两笔一起提交给 Bundler，Bundler 可能把它们打包进同一个区块——这时候第二笔会因为预算不足被 revert。

这个问题的解法其实不复杂：**让全局预算也是链上 storage**，每笔 validateUserOp 原子地扣减。EVM 的顺序执行保证了不会出现 double-spend。代价是每个 session 的每笔交易都要多一次 SSTORE（写全局预算余额），大约多花 5000-20000 gas。

这样 Policy DSL 的预算声明需要分两级：

`account budget 500 USDC per day; // 全局预算`

`session "dca" { budget 200 USDC per day from account; // 从全局池扣 }`

`session "lending" { budget 500 USDC per day from account; // 从同一个池扣 }`

这里 `from account` 表示这个 session 的预算是从全局池里扣减的，而不是独立的。编译器把 account budget 翻译成一个全局 storage slot，session budget 各自有自己的 slot 但扣减时同时更新全局 slot。validateUserOp 先检查 session 限额，再检查全局限额，两个都过了才放行。

意外的收获：这个两级预算模型跟企业财务的"部门预算 + 公司总预算"完全同构。每个部门（session）有自己的花钱额度，但总花费不能超过公司总预算。链上做这个比企业 ERP 做还简单——原子性和顺序执行天然解决了并发冲突。

这也回答了 5/24 提的"Agent 信用分"问题的一个细节：全局预算的使用率（实际花费 / 授权额度）本身就是一个强信号——用到 80% 还是只用了 10%，反映了 Agent 的活跃度和资金效率。
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->


[https://eips.ethereum.org/EIPS/eip-4337](https://eips.ethereum.org/EIPS/eip-4337)

# 有状态的权限 —— 当 Agent Memory 遇到 Session Key

昨天看完 Long-term Memory 的分享之后一直在想一个问题：如果 Agent 的 memory 是跨时间的状态管理，那它的权限系统为什么还是无状态的？

目前主流的 Session Key 实现都是无状态校验：每笔 UserOp 进来，validateUserOp 检查"这把 key 能不能调这个合约、value 是不是在限额内"，过了就执行，没过就 revert。每笔交易独立判断，不知道前面发生过什么。

但真实的 Agent 工作流不是单笔交易。一个 DCA bot 的典型 session 是：查询当前价格 → 计算应该买多少 → 执行 swap → 检查执行结果 → 更新累计消耗。这五步属于同一个"意图"，应该共享一个预算池，而不是每步独立扣减。

这就是 memory 和 permission 的交叉点：**Agent 需要的不是无状态的"每笔检查"，而是有状态的"session 级权限管理"**。

Cobo 的 Pact 其实已经在做这件事了——Pact 有 Intent（这个 session 要做什么）、Execution Plan（预期执行路径）、Policies（session 级的预算和约束）、Completion Conditions（session 什么时候结束）。这本质上就是一个"有状态的权限 session"。

把这个想法落到 Policy DSL 的设计里，语法可能从昨天的单行 permit 规则扩展成一个 session 块：

`session "daily-dca" { permit swap on "0xE592..." where value <= 50 USDC; budget 200 USDC per day; track cumulative_spent, last_price, execution_count; complete when budget_exhausted or time > 24h; on_failure pause and notify owner; }`

这里的关键是 `track` 关键字——它声明了这个 session 需要维护哪些跨交易状态。编译器把它翻译成链上 storage slot 或者链下的 state store，validateUserOp 在每次校验时读取并更新这些状态。

这带来一个有意思的架构选择：session state 存在哪？

**链上存储**：完全可审计，但每次更新要付 gas（SSTORE 是最贵的 opcode 之一）。适合关键状态（cumulative\_spent、execution\_count）。

**链下存储 + 链上验证**：Bundler 或 Agent 自己维护状态，提交 UserOp 时附带状态证明（Merkle proof 或签名）。cheaper，但引入了"谁维护状态"的信任问题。

**混合方案**：关键状态（预算消耗）上链，非关键状态（执行历史、决策上下文）留链下。validateUserOp 只校验链上状态，链下状态用于 Agent 自己的决策但不参与权限判断。

这个分线原则跟昨天追问的"memory 的链上/链下怎么分"直接对应：**凡是影响"能不能执行"的状态必须上链**（因为这是权限边界，必须链上强制执行），**凡是只影响"怎么执行"的状态留链下**（因为这是 Agent 的内部决策，不需要链上共识）。

这条分线清楚之后，Policy DSL 的 session state 设计就有了明确的约束：`track` 里声明的变量自动上链（编译成 Session Key Module 的 storage），Agent 的 memory 系统管理链下状态，两者通过 session ID 关联。Week 3 开始实现的时候，这个架构应该能跑得通。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->



[https://eips.ethereum.org/EIPS/eip-4337](https://eips.ethereum.org/EIPS/eip-4337)

# Policy DSL 的形状 —— 从"能不能做"到"怎么说清楚能做什么"

昨天设计最小实验的时候意识到一个问题：Session Key 的权限配置在不同 SDK 里长得完全不一样。ZeroDev 用一套 JS API，Biconomy 用另一套，Kernel 又是另一套。做的事情一样——限定合约、方法、限额、有效期——但写法完全不通用。这意味着每换一个 Session Key provider 就要重写一遍权限逻辑。

Week 2 做方向研究的时候把这个问题推到了底：**缺的不是 Session Key 本身，而是一个声明式的 Policy DSL**——让你用人类可读的方式写清楚"这个 Agent 能做什么"，然后编译成不同 provider 的链上配置。

想清楚这个 DSL 应该长什么样，花了不少时间。参考了两个现有方案：Amazon Cedar（用于 AWS 权限管理）和 OPA/Rego（用于云原生策略引擎）。Cedar 的优点是语法接近自然语言，OPA 的优点是可以表达复杂的上下文条件。Session Key 的 Policy DSL 需要兼顾两者——既要简单到非开发者能看懂（毕竟用户要审批 Agent 的权限），又要精确到能编译成链上校验逻辑。

初步想到的语法大概是这样：

`permit agent "dca-bot" on contract "0xE592..." method "exactInputSingle" where value <= 50 USDC and daily_total <= 200 USDC expires 2026-06-01`

一行就把合约白名单、方法限制、单笔限额、日累计限额、有效期全说清了。编译器把这行翻译成 ZeroDev 的 SessionKeyPermission 结构体，或者 Biconomy 的 Rule\[\] 数组，或者 Kernel 的 Permission 对象——取决于目标 provider。

这个方向之所以有意思，是因为它恰好卡在 AI 和 Web3 的交叉点上：

**AI 侧**：LLM 可以帮用户把自然语言意图（"我想让这个 bot 每天帮我在 Uniswap 上花最多 200 刀买 ETH"）翻译成 Policy DSL。这比直接让 LLM 生成 Solidity 或 SDK 调用安全得多——DSL 是受限语法，不会出现"LLM 幻觉生成出危险调用"的问题。

**Web3 侧**：编译后的配置直接在链上强制执行。不是"建议"Agent 遵守限额，而是 EntryPoint 的 validateUserOp 在链上原子校验，违反 policy 的操作根本无法上链。

**交叉点**：用户说人话 → LLM 翻译成 DSL → 用户审批 DSL（可读）→ 编译器生成链上配置 → EntryPoint 强制执行。每一步都有明确的信任边界：LLM 只负责翻译（不执行），DSL 是人工审批的检查点，链上执行是最终防线。

这跟 5/23 讲的"表达力 vs 约束力"张力直接相关。Policy DSL 的本质就是在表达力和约束力之间找到一个**可审计的中间层**——它比原始 SDK 配置有表达力（人类可读），但比自然语言有约束力（严格语法，可编译验证）。

Week 3 的计划：先在 Sepolia 上跑通 5/25 设计的 DCA bot 实验，同时开始写 Policy DSL 的语法定义和最小编译器原型。如果这两件事都能跑通，Week 4 Hackathon 就有东西可以 demo 了。
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->




[https://eips.ethereum.org/EIPS/eip-4337](https://eips.ethereum.org/EIPS/eip-4337)

# Week 2 第一天：把理论栈拍成一个最小实验

Week 1 花了七天搭完了 AI Agent 上链的理论栈：L2 容量、Session Key 权限、信任模型、EntryPoint 验证、Paymaster 经济、表达力约束力张力、链上信誉循环。现在的问题是——这套东西到底能不能跑起来，还是只是纸上逻辑自洽？

Week 2 的第一件事应该是设计一个**最小可验证实验**，用尽量少的代码把整条栈穿一遍。

5/23 分了三类场景：高频低值、规则明确、判断密集。最小实验应该选第一类——高频低值——因为出错成本最低，不需要复杂的 LLM 判断，但能验证 Session Key + EntryPoint + Paymaster 的完整链路。

具体来说，一个**测试网 DCA bot** 就够了：

用户在 Sepolia 上部署一个 ERC-4337 智能账户，给 bot 签发一把 Session Key：只能调用特定 DEX 的 swap 方法、每次最多 10 test-USDC、每天最多 3 次。bot 每隔 8 小时自动生成一笔 UserOperation，经 Bundler 提交到 EntryPoint，由 Paymaster 代付 gas。整个过程用户不需要在线。

这个实验虽然简单，但它能验证四个关键假设：

**假设 1**：Session Key 真的能约束 bot 行为——如果 bot 试图超额或调用非白名单合约，EntryPoint 的 validateUserOp 会 revert。这验证了 5/19 + 5/21 的双层防御。

**假设 2**：Paymaster 代付 gas 在实际操作中的延迟和成本可接受——5/22 讲的经济模型是理论上的，实际跑起来 Bundler 的打包延迟、Paymaster 的验证开销是多少？testnet 数据虽然不等于 mainnet，但数量级能看出来。

**假设 3**：链上执行记录真的可索引——5/24 的信誉循环依赖于"任何人都能查 Agent 的历史"，这在 EntryPoint 事件日志里是什么格式、用什么工具查最方便？跑完实验自然就知道了。

**假设 4**：从"规则驱动 bot"升级到"意图驱动 Agent"的 gap 有多大——这个 DCA bot 是纯规则驱动的（每 8 小时执行一次固定操作），但如果要变成"当 ETH 跌破某价位时加大买入量"，需要加多少 LLM 判断逻辑、Session Key 要怎么调？从简单 bot 开始做，感受到约束后再往 Agent 方向推，比直接上 Agent 靠谱。

技术栈初步选型：智能账户用 Safe 或 Kernel（都兼容 4337），Session Key 模块用 ZeroDev 或 Biconomy 的实现，Bundler 用 Pimlico 或 Stackup 的 testnet 服务，Paymaster 用 Pimlico 的 Verifying Paymaster。整套在 Sepolia 上跑，不碰真钱。

这个实验如果成功，Week 1 的理论栈就从"逻辑自洽"升级成了"可运行的原型"。如果失败，失败的点就是理论和现实的 gap，也是最值得写的东西。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->





[https://ethereum.org/en/roadmap/account-abstraction/](https://ethereum.org/en/roadmap/account-abstraction/)

# 链上执行记录即信誉 —— Agent 的"信用分"怎么来

5/23 最后提了一个产品路径：从极端保守起步 → 逐步放开低风险自动执行 → 积累链上执行记录建立信任 → 用户主动提高限额。今天想的是中间那个关键环节——"链上执行记录建立信任"到底长什么样。

传统金融的信用体系是封闭的：银行看你的还款记录决定给你多少额度，但这个记录只有银行能看到、只有银行说了算。AI Agent 在链上的执行记录天然不是这样——每一笔 UserOperation 都经过 EntryPoint，都在链上可索引、可验证、任何人可审计。

这意味着一个 Agent 的"信用"不需要中心化评级机构，它自己的链上行为就是信用证明：执行了多少笔交易、有没有超过 Session Key 限额、有没有被 EntryPoint revert 过、Paymaster 为它付了多少 gas、每笔交易的 value 分布是什么。这些数据全部公开，任何人都可以跑一个聚合脚本算出一个"Agent 信用分"。

这个视角让 5/22 的 Paymaster 经济模型多了一层：**Paymaster 本身可以根据 Agent 的链上信用决定要不要帮它付 gas**。信用好的 Agent（历史执行无异常、限额内操作、零 revert）可以拿到更低的 gas 费率甚至免费赞助；信用差的 Agent（频繁 revert、接近限额边界操作）要付更高费率或直接被拒。这不需要任何链下基础设施，纯粹靠链上数据就能实现。

再往前推一步：用户决定给 Agent 多大的 Session Key 限额，也可以参考这个信用分。一个新部署的 Agent 只能拿到"日限 10 USDC、只能调白名单合约"的最低权限；跑了 30 天零事故之后，用户看到链上记录，主动把限额提到 500 USDC 并开放更多合约。这个"提额"操作本身也是链上交易，又变成了信用记录的一部分。

整个循环是自强化的：好的执行记录 → 更高信任 → 更大权限 → 更多执行记录 → 更高信任。坏的方向也一样：一次异常 → 权限收紧 → 执行受限 → 信用停滞。这跟信用卡的提额/降额逻辑完全同构，但透明度高了几个数量级。

Week 1 到这里可以画一条完整的线了。从 L2 容量（5/18）到 Session Key 权限（5/19）到信任模型（5/20）到 EntryPoint 验证（5/21）到 Paymaster 经济（5/22）到表达力约束力张力（5/23）再到今天的链上信誉循环——七天走完了"AI Agent 凭什么能安全且可持续地在链上执行"的完整逻辑链。Week 2 该动手了。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->






[https://ethereum.org/en/roadmap/account-abstraction/](https://ethereum.org/en/roadmap/account-abstraction/)

# 表达力 vs 约束力 —— AI Agent 上链的根本张力

5/22 收完五层信任栈之后留了个问题：具体哪些场景值得让 Agent 自动执行链上动作？想了一天，发现这个问题本身就问偏了。真正的问题不是"做什么"，而是"Agent 的判断空间给多大"。

链上现有的自动化全是**规则驱动**的：MEV bot 看到套利空间就执行，清算 bot 看到 health factor 跌破阈值就触发，DCA bot 每 N 小时买定额。规则写死在代码里，没有判断空间，也不需要 LLM。这类 bot 用 EOA + 私钥就够了——反正行为完全可预测，爆炸半径等于代码逻辑本身。

AI Agent 加入 LLM 之后多了一层：**意图驱动**。用户说"保持我的稳定币配比在 60% 以上"，Agent 要自己判断：现在配比多少？该卖哪个波动资产？走哪个 DEX 路由最优？滑点容忍度设多少？这些判断以前只有人能做，现在 LLM 可以做——但"可以做"和"应该让它做"之间隔着一个巨大的信任问题。

这个信任问题的技术形状就是**表达力 vs 约束力**：

Session Key 的限制越紧（只能调特定合约、特定方法、日限 50 USDC），Agent 越安全但越没用——它可能判断出"现在应该卖 200 USDC 的 ETH 来维持配比"，但 Session Key 不让它超过 50。约束越松（允许调任意 DEX、限额 5000），Agent 越有用但越危险——一次 prompt injection 或幻觉就能在限额内造成真实损失。

这不是工程问题，是**产品设计问题**。不同场景对这个 tradeoff 的最优解不同：

**高频低值**（gas 优化、小额 DCA、测试网交互）：Session Key 可以放松，因为单笔损失上限本身很低。这是 AI Agent 最先落地的场景——不是因为技术最成熟，而是因为出错成本最低。

**规则明确**（清算保护、止损、定时转账）：其实不需要 LLM，传统 bot 就够。硬上 AI Agent 反而引入了不必要的不确定性。这类场景应该走 Workflow 而不是 Agent。

**判断密集**（投资组合再平衡、跨协议策略、治理投票建议）：这是 LLM 真正有价值的地方，但也是 Session Key 最难设计的地方。我目前想到的折中是**分级执行**：Agent 自主处理日限内的小调整，超过阈值的操作只生成 calldata 等人工确认——本质上是在同一个 Agent 里混合 Workflow（大额走审批）和 Agent（小额自主）两种模式。

回头看 5/19 提的 Restricted Web3 Helper，它的设计其实就是把这个张力推到了极端保守的一端：所有写动作都不让 Agent 执行，只生成 calldata。这对 demo 来说足够安全，但对产品来说没有竞争力——用户为什么不自己用 DEX 前端？Agent 的价值恰恰在于替你执行，而不只是替你准备。

所以真正的产品路径可能是：从极端保守起步（Helper 模式）→ 逐步放开低风险自动执行（DCA、gas 优化）→ 积累链上执行记录建立信任 → 用户主动提高限额授权更复杂的策略。这跟传统金融的信用额度逻辑一样——先给你 1000 额度，用得好再提到 50000。区别是链上所有执行记录都是公开可验证的，"用得好"不是银行说了算，是任何人都能审计。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->







[https://eips.ethereum.org/EIPS/eip-4337](https://eips.ethereum.org/EIPS/eip-4337)

# 谁为 AI Agent 的 gas 买单 —— Paymaster 经济模型

5/21 最后一段点到 Paymaster 让 Agent 钱包变成零余额账户，但没展开"那 gas 谁出"。今天想清楚了：这不只是技术问题，是决定 AI×Web3 产品能不能活下去的商业模型问题。

没有 Paymaster 的世界里，Agent 要上链就必须持有 ETH。持有 ETH 意味着：第一，Agent 钱包本身成了攻击目标（哪怕只留 0.01 ETH 当油费，攻击者也可以通过控制 Agent 去 approve 别的资产）；第二，运营方得不断给 Agent 充油，这个充值流程本身就是管理负担；第三，ETH 价格波动会让成本不可预测。三重摩擦加起来，足以杀死大部分早期产品。

Paymaster 把这三重摩擦一次性消解了，但它不是免费午餐——总有人在付钱。拆开看有三种模式：

**赞助模式**：项目方跑一个 Paymaster 合约替用户的 Agent 付 gas。经济逻辑跟 Web2 的 freemium 一样——花钱补贴用户获取，赌后续留存回本。适合早期拉新阶段，Pimlico / Alchemy 这类 Bundler 服务商提供开箱即用的 Verifying Paymaster 正是卖这个。

**ERC-20 抵扣模式**：Agent 用 USDC 付 gas，Paymaster 合约内置 DEX 路由帮你换成 ETH 交给 EntryPoint。Agent 的成本变成了稳定币计价，运营方不再暴露在 ETH 价格波动里。对 AI Agent 场景尤其合适——Session Key 限额本来就用稳定币定义，gas 也用稳定币结算，整条财务线统一了。

**预付/订阅模式**：用户往 Paymaster 合约存一笔月度预算，Agent 每笔 UserOp 从中扣减。用完即停。这是最干净的权限模型——用户掌控总支出上限，Agent 在预算内自主行动，超了自动失效，不需要额外的 kill switch。

三种模式可以叠加。一个成熟的 AI Agent 产品可能是：新用户走赞助（零门槛体验）→ 活跃用户切 USDC 抵扣（按量付费）→ 高频用户切订阅（包月更便宜）。这跟 AWS 的 Free Tier → On-Demand → Reserved Instance 路径完全同构。

但 Web3 比 Web2 多了一个维度：**所有花费都在链上可审计**。Agent 这个月花了多少 gas、调了哪些合约、每笔的 Paymaster 补贴了多少——全部公开透明。这不是隐私问题（Agent 账户本来就不是个人隐私），这是治理优势：项目方可以向投资人/DAO 证明 Agent 运营成本结构，用户可以自己验算 Agent 有没有乱花钱。传统 AI SaaS 的 billing 是黑箱，链上 Paymaster 的 billing 是透明账本。

到这里 5/18-5/22 这条线可以收一下了。五天走完了 AI Agent 上链的完整信任栈：L2 给了执行层容量（5/18）→ Session Key 定义了权限边界（5/19）→ 信任模型反转决定了这些边界必须 by-design 而非 by-patch（5/20）→ EntryPoint 验证实现了原子性兜底（5/21）→ Paymaster 解决了经济可行性（今天）。五层缺任何一层，AI 自动上链都只是 demo 不是产品。Week 2 该从"能做"转向"做什么"了——具体哪些场景值得让 Agent 自动执行链上动作。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->








[https://eips.ethereum.org/EIPS/eip-4337](https://eips.ethereum.org/EIPS/eip-4337)

# UserOperation 验证流程 —— Agent 的"硬刹车"在哪

5/19 留了个坑：搞清楚 ERC-4337 的 UserOperation 怎么走完一整条验证链。今天补上。

这套流程的真实形状跟普通 EOA 发交易完全不同。EOA 是 wallet → mempool → validator，签完名直接进公共内存池。UserOperation 不是。它先进 4337 自己的 alt-mempool，由 Bundler 节点捡走，Bundler 调用 EntryPoint 合约的 `handleOps`，里面先对每条 UserOp 跑 `validateUserOp` —— 校验签名、nonce、gas、Paymaster —— 全部过了才进 `execute` 真正改状态。如果你有 Paymaster，还要先过 `validatePaymasterUserOp`，由 Paymaster 决定愿不愿意帮你付 gas。整条链路在一笔真正的 L1 交易里原子完成。

把这个流程放到 Agent 视角下重看，5/19 提的 Session Key 突然有了配对的另一半。

Session Key 是**策略层**：在写动作发生之前就约束"Agent 这把钥匙能干什么、上限多少、到期失效"。但策略写在合约 owner 模块里，模块的代码本身可能出错，更要命的是 Agent 可能生成出"看起来合法、模块也放过、但实际语义有问题"的 calldata。

UserOperation 验证是**执行层**：每一笔真要落链的写动作都强制再过一遍链上原子校验。validateUserOp 是个可以本地模拟、可以被 Bundler 拒绝、被拒后**状态不变**的硬关卡。Agent 即使中了 prompt injection 生成出畸形 op，EntryPoint 会直接 revert，不会留下"半执行"的脏状态。这是 EOA 模型给不了的——EOA 一旦签名广播，错就是错。

所以双层是分工的：Session Key 控制爆炸半径（最坏能损失多少），EntryPoint 控制原子性（不允许中间状态泄漏到链上）。两层都过了，写动作才真的发生。这才是为什么"AI 自动上链"在 4337 模型下可谈，在纯 EOA 模型下不可谈。

5/20 想了一晚上的跨链 Session Key 问题，今天看完反而觉得问错了。真正的难点不是"怎么让一把 Session Key 在多链上有效"，而是**每条链都有自己独立的 EntryPoint 实例，状态不共享**。Base 上花掉 30 USDC 限额，Ethereum 主网的 EntryPoint 根本不知道，于是同一把"日限 50 USDC"的钥匙在两条链上各花 50，实际上花了 100。要解决这个就得引入一个跨链的状态聚合层——链下 attestation 网络 + 链上轻客户端，或者干脆让 Session Key 自己持有一条"已消费额度"的 Merkle root 并在每次校验时拉最新值。这个方向 ERC 还没共识，可能是 Week 2 应该多读几篇 spec 的地方。

Paymaster 单独再说一句：把 gas 抽象掉之后，Agent 不需要持有任何 ETH 也能发交易。这把"资金面"和"操作面"彻底解耦了——以前 Agent 钱包里必须留点 ETH 当油费，留多了是攻击面，留少了执行会失败。Paymaster 让 Agent 钱包可以是**零余额账户**，限额完全由 Session Key 决定，被打也只损失策略允许范围内的资产。这是 4337 真正改变 AI×Web3 游戏规则的点，比 Account Abstraction 字面意义大得多。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->









[https://x.com/i/broadcasts/1OxwbljlYnrJB](https://x.com/i/broadcasts/1OxwbljlYnrJB)

# Web3 运行原理——从钱包到出块

Bruce 的这场从第一性原理讲 Web3 怎么"跑起来"的。主线是：从钱包到出块，从应用到协议。

对我触动最大的一个视角：Web2 的请求是 client → server → database，整条链路都是可信的、可回滚的；Web3 的请求是 wallet → RPC → node → mempool → validator → state change，中间经过的每一层都是公开的、不可信的、不可逆的。这不只是技术栈不同，是信任模型完全反过来了——Web2 默认信任服务端，Web3 默认不信任任何人，靠密码学和共识来兜底。

这个视角直接解释了为什么 Web3 开发的心智负担比 Web2 重得多：你写的每一行合约代码都是公开的（任何人可以调用）、不可改的（部署即永久）、直接管钱的（一个 bug 就是真实损失）。后端写崩了最多 500 error，合约写崩了是真的被搬空。

跟昨天 TC 讲的"安全不能后补"完全对上了。不是开发者不想补，是链上这个执行环境从根上就不给你补的机会。

另外 Bruce 提到跨链的时候让我想到一个问题：如果 AI Agent 需要跨链操作（比如在 Base 上执行然后到 Ethereum 主网结算），Session Key 的权限边界怎么跨链传递？ERC-4337 目前是单链的，跨链场景下权限模型还没有标准方案。这个可能是 Week 2 值得深挖的方向。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->











[https://www.anthropic.com/research/building-effective-agents](https://www.anthropic.com/research/building-effective-agents)

# 当 AI Agent 碰到链上写操作

今天把 Week 1 的 AI 侧和 Web3 侧概念整理完，开始想一个问题：Workflow 和 Agent 的边界放到 Web3 场景里会变成什么样？

Anthropic 那篇 Building Effective Agents 讲得很清楚：大多数生产系统其实是 Workflow（路径写死，LLM 只管单步语言处理），只有路径真不可预知时才值得用 Agent（模型自己决定下一步调什么工具）。普通 SaaS 场景里选 Workflow 还是 Agent 主要是成本和可控性的权衡——Agent 步数不可预测可能死循环烧 token，Workflow 更稳。

但在 Web3 场景下多了一层：**写链操作不可逆**。后端 API 调错了可以回滚、重试、灰度。链上交易一旦广播确认，状态就改了，ETH 就转了，approve 就生效了。Agent 在 Web3 里的 blast radius 不是多烧几美元 token，是可能丢真金白银。

这逼着我去想：如果 AI Agent 真的要执行链上操作，它的权限应该怎么设计？

答案不在 AI 侧，在 Web3 侧——账户模型本身就是权限边界。

EOA 的权限是二元的：给了私钥就等于交出整个钱包。让 Agent 直接持有 EOA 私钥，一次 prompt injection 就能把账户清空。Safe 多签引入了人工审批，但每笔交易都要凑签名，跟 Agent 自动执行的节奏冲突——适合当上级金库，不适合当执行账户。

ERC-4337 智能账户 + Session Key 才是关键拐点。Session Key 可以绑定特定合约、特定方法、单日限额、有效期。Agent 拿到的不是整个账户的钥匙，而是"在某个 DEX 上每天最多花 50 USDC"的受限钥匙。即使被攻击，损失上限可预测。

所以分层来看：Safe 当金库和策略层，ERC-4337 智能账户当 Agent 执行账户，Session Key 当具体任务的钥匙串，EOA 退化为纯签名工具。

这套分层不只是安全考虑，而是决定了系统架构——在哪一层让 AI 自主决策（Agent），哪一层走写死流程（Workflow），哪一层强制人工。读链可以全自主，写链必须 AI 生成 calldata → guardrails 校验 → 人工确认 → Session Key 执行，签名永远不进 Agent 进程。

明天想继续看 ERC-4337 的 UserOperation 验证流程，搞清楚 Bundler 和 Paymaster 怎么配合。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->












[https://vitalik.eth.limo/general/2021/01/05/rollup.html](https://vitalik.eth.limo/general/2021/01/05/rollup.html)

# Layer 1 scaling and Layer 2 scaling

扩容的办法有两种，第一层扩容和第二层扩容。

直接链上扩容有两种办法，**增加区块大小**和进行**分片**。

区块变大会导致数据量剧增，使得验证区块的硬件要求变高，普通人无法再运行节点，最终可能导致网络**中心化**。以太坊选择的方法是把整个区块链网络的工作（如处理交易、验证数据）分割成许多个小“片区”，让不同的节点去分担处理。这样一来，系统可以并行处理很多事，整体效率就大大提高了。

链下扩容的思想是绝大部分的计算和交易转移到链下的一个独立层去处理。大量的、频繁的交易在 Layer 2 网络中进行，速度极快，成本极低。主链上只部署一个**智能合约**。这个合约只做两件事：**验证Layer 2的证明**，然后进行**存款和提款**。

在主链上验证一个“证明”的成本，要远远低于在主链上执行成千上万笔原始交易的成本。

在 Layer 2 上目前主要的思路是三种。State Channels，Plasma和Rollups。

# State Channels

状态通道解决方法的思路是开一个类似P2P的通道，这两个设备之间可以私下独立的进行无限次交易，但是这些交易只有在两个人最后确定后，才统一上传给主链。

例子：爱丽丝 (Alice) 向鲍勃 (Bob) 提供互联网服务，每1MB收费$0.001。

1.  **第一步：开启通道 (On-chain)**
    
    -   鲍勃先往一个**智能合约**里存入一笔押金，比如$1。  
        
    -   **这是第一次链上交易**，相当于开了一个账户。这个通道现在只在爱丽丝和鲍勃之间生效。  
        
2.  **第二步：链下交易 (Off-chain)**
    
    -   鲍勃每用1MB流量，就给爱丽丝签发一张“票据”(ticket)**。这个票据只是一个带他签名的**链下消息，不需要发到区块链上。  
        
    -   第一次，票据上写着“应付$0.001”。  
        
    -   第二次，他会签一张新的票据，上面写着“应付$0.002”（**始终是累计总额**）。  
        
    -   以此类推，他们可以在链下进行无数次这样的“记账”，**速度极快，且没有手续费**。  
        
3.  **第三步：关闭通道 (On-chain)**
    
    -   当他们决定结束交易时（比如鲍勃不想用网络了），爱丽丝会将她收到的、**金额最高的那张票据**（也就是最后一张）提交给链上的智能合约。  
        
    -   智能合约验证爱丽丝和鲍勃的签名都无误后，会把票据上的金额（比如$0.80）付给爱丽丝，然后把剩余的押金（$0.20）退还给鲍勃。  
        
    -   **这是第二次，也是最后一次链上交易**。
        

通过这种方式，成百上千次的微小交易，最终只在主链上产生了**两次记录**。

如果爱丽丝不愿意关闭通道，鲍勃可以启动一个“提款等待期”（例如7天）。如果在这7天内，爱丽丝没有向智能合约提交任何有效的票据来证明鲍勃欠她钱，那么鲍勃就可以取回他所有的押金。这保证了鲍勃的资金安全。

-   优点
    
    -   **功能强大**: 不仅限于支付，还可以处理双向支付、复杂的智能合约关系（比如在通道内执行一个金融合约）。  
        
    -   **可组合性**: 这个功能很强大，如果爱丽丝和鲍勃有通道，鲍勃和查理也有通道，那么爱丽丝可以通过鲍勃，无需信任地与查理进行交互。
        
-   缺点
    
    -   **参与者固定**: 无法向通道之外的人发送资金。你必须和交易对象预先建立一个通道。  
        
    -   **不适用于无主资产**: 无法用于代表那些没有明确逻辑所有者的对象（例如去中心化交易所 Uniswap 的流动性池）。  
        
    -   **资金锁定**: 需要参与者锁定大量的资金作为押金，特别是用于处理复杂应用时，资金占用成本很高。
        

# Plasma

Plasma 在功能上类似于依附于以太坊主链的、有独立**操作员**的子链。工作流程如下

-   **存款 (Deposit)** 
    
    -   用户将资产（如 ETH 或代币）发送到主链上的一个智能合约中，这个合约负责管理这条 Plasma 链。  
        
    -   Plasma 链会为这个存入的资产分配一个**唯一的ID**（比如 537号资产）。  
        
-   **链下交易与打包 (Off-chain Transaction & Batching)** 
    
    -   用户在 Plasma 这条“子链”上进行交易，并将交易信息发送给**操作员**。  
        
    -   操作员会定期（比如每15秒）将收到的所有链下交易打包成一个“批次”(batch)。  
        
    -   操作员会用这些交易构建一个**Merkle tree**。  
        
    -   操作员**只需将Merkle root发布到主链上**。同时，他会把每笔交易的Merkle Proof发送给对应资产的新主人。  
        
-   **取款与挑战期 (Withdrawal & Challenge Period)** 
    
    -   当用户想把资产从 Plasma 链取回到主链时，他需要向主链的智能合约提交他收到的最新的“默克尔证明”，以证明他是该资产的合法所有者。  
        
    -   合约收到请求后，会启动一个“挑战期”（比如7天）。  
        
    -   在此期间，**任何人**都可以提交证据来挑战这次取款。例如，证明：
        
        1.  发送者在发送这笔资产时，其实并不拥有它。
            
        2.  发送者在更晚的时间点，把这个资产又发送给了另外一个人。
            
    -   如果在挑战期内无人能成功证明这次取款是欺诈性的，那么用户就可以成功取回他的资产。
        

Plasma的优点在于可以向**从未参与过系统的人**发送资产，并且对用户需要锁定的资金量要求远低于状态通道。

但是Plasma的缺点在于，在正常运行时，状态通道可以做到完全不在主链上产生数据，但 Plasma **需要定期将默克尔根发布到主链上**。另外，交易不是瞬间完成的，你必须等待操作员打包并发布下一个批次。

Plasma 和状态通道共有一个**核心缺陷**，它们的安全性都建立在一个博弈论基础上，即**每个资产都有一个明确的、会关心自己资产的“逻辑所有者”**。如果所有者不在乎自己的资产被盗，或者一个资产没有明确的所有者（比如 **Uniswap 的流动性池**），那么攻击者就可以进行欺诈操作而无人挑战，安全模型就会失效。

正因为这个“所有权”限制，Plasma 和状态通道都无法模拟一个完整的、通用的以太坊环境（EVM）。它们更像是为特定应用设计的专用解决方案。

实际上，所有需要一个“挑战”声明的结构，基于博弈论总是会有缺陷的，不管是主观还是客观原因。当有一个所有权人的时候，会出现这两个情况：

1.  **所有者“不在乎”或“无能力”保护资产**
    

当有人（比如一个恶意操作员）试图用一个无效的状态来取走某个人的资产时，系统会给他一个“挑战期”（比如7天）。

他必须在这7天内，发现这个欺诈行为，并向主链提交一个“挑战”交易来戳穿它。为了做到这一点，他需要：

1.  **保持在线**：要么自己一直监控着链上的动态，要么付费雇佣一个“瞭望塔 (Watchtower)”服务来帮他监控。
    
2.  **愿意支付成本**：提交“挑战”是需要支付主链 Gas 费的，这可能是一笔不小的开销。
    

在以下情况下，“所有者”可能无法完成挑战：

-   **客观上无能力**：他可能正好在度假、生病住院、或者更糟的情况……总之他无法及时上线操作。  
    
-   **主观上不在乎**：如果被盗的资产价值只有1，但发起一次挑战的Gas费却要20，从经济角度看，他根本没有动力去挑战，只能眼睁睁看着它被盗。  
    
-   **丢失私钥**：如果丢失私钥，所有者就失去了对资产的控制权，自然也无法发起挑战。
    

2.  **资产没有一个“明确的所有者”**
    

有些类型的资产，其所有权是**分散的、集体的**，而不是属于某一个特定的人。比如Uniswap 流动性池。如果一个恶意操作员试图通过欺诈手段，从任何有所有权机制的Layer 2 扩展链上的 Uniswap 池子里偷走100个ETH，实际上没有人发起挑战：

-   **Uniswap 团队** 协议是去中心化的，他们不控制用户资金。  
    
-   **某一个流动性提供者** 也许可以。但 A 可能会想：“这个池子这么大，B 肯定会去挑战的，我就不出这个Gas费了。” 李四也在想：“C 会去做的。”  
    
-   **所有流动性提供者** 这更不现实。
    

每个人都觉得别人会去解决问题，结果可能根本没有人站出来。每个人都想搭便车，享受别人挑战成功带来的好处，但没人愿意自己付出那个成本。

State Channels和Plasma这样的扩展方法是**有条件的、需要主动维护的**。它无法像以太坊主链那样，提供一种**无需干预的、被动的** 安全保障。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
