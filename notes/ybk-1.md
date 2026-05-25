---
timezone: UTC+8
---

# ybk-1

**GitHub ID:** ybk-1

**Telegram:** @bky71

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->
````markdown
# 最小 AI × Web3 工作流

## Agent → 工具调用 → 人工确认 → 链上支付 → 收据验证

```
┌─────────────────────────────────────────────────────────────────────┐
│                        用户（你）                                  │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  发起任务：「帮我用 USDC 给 0xabc... 转 100 刀」             │  │
│  └──────────┬───────────────────────────────────────────────────┘  │
└─────────────┼───────────────────────────────────────────────────────┘
              │
              ▼  (1) 发起
┌─────────────────────────────────────────────────────────────────────┐
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  AI Agent                                                     │  │
│  │  ● 解析意图：转账 100 USDC → 0xabc...                        │  │
│  │  ● 调用工具：查 USDC 合约地址、估算 Gas、构建交易数据         │  │
│  │  ● 输出：交易详情预览 + 风险提示                              │  │
│  └──────────────────┬───────────────────────────────────────────┘  │
│                    AI 系统                                         │
└─────────────────────┼───────────────────────────────────────────────┘
                      │
                      ▼  (2) 工具调用
┌─────────────────────────────────────────────────────────────────────┐
│  外部工具 / API                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  ● Etherscan API → 查 USDC 合约、目标地址历史               │  │
│  │  ● Gas 预估 → 当前建议 Gas Price                            │  │
│  │  ● 汇率 API → USDC/USD 价格确认                             │  │
│  └──────────────────┬───────────────────────────────────────────┘  │
└─────────────────────┼───────────────────────────────────────────────┘
                      │
                      ▼  (3) 人工确认 ★★★ 必须 ★★★
┌─────────────────────────────────────────────────────────────────────┐
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  用户审核面板                                                 │  │
│  │  ┌────────────────────────────────────┐                      │  │
│  │  │  转账金额：100 USDC                │                      │  │
│  │  │  目标地址：0xabc...                 │                      │  │
│  │  │  Gas 上限：21000                    │                      │  │
│  │  │  Gas Price：12 Gwei                 │                      │  │
│  │  │  总费用 ≈ 100.25 USDC              │                      │  │
│  │  │  ⚠ 目标地址为新地址，交易过 0 笔    │                      │  │
│  │  └────────────────────────────────────┘                      │  │
│  │  [ ✅ 确认并签名 ]  [ ❌ 拒绝 ]                               │  │
│  └──────────────────┬───────────────────────────────────────────┘  │
└─────────────────────┼───────────────────────────────────────────────┘
                      │
                      ▼  (4) 钱包签名 ★★★ 必须 ★★★
┌─────────────────────────────────────────────────────────────────────┐
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  钱包（MetaMask / WalletConnect / 硬件钱包）                 │  │
│  │  ● 用户检查交易详情                                          │  │
│  │  ● 用户点击「确认」签名                                      │  │
│  │  ● 钱包返回 signed transaction hash                          │  │
│  └──────────────────┬───────────────────────────────────────────┘  │
└─────────────────────┼───────────────────────────────────────────────┘
                      │
                      ▼  (5) 链上执行
┌─────────────────────────────────────────────────────────────────────┐
│  区块链网络（测试网 / 主网）                                       │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  ● 发送签名交易到节点                                        │  │
│  │  ● 等待区块确认（1-12 个区块）                                │  │
│  │  ● 返回 transaction receipt                                  │  │
│  └──────────────────┬───────────────────────────────────────────┘  │
└─────────────────────┼───────────────────────────────────────────────┘
                      │
                      ▼  (6) 结果验证
┌─────────────────────────────────────────────────────────────────────┐
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  AI Agent 回查                                                │  │
│  │  ● 调 Etherscan API 确认交易状态 = Success                   │  │
│  │  ● 检查目标地址 USDC 余额是否增加 100                        │  │
│  │  ● 组装收据：tx hash + 区块号 + 确认数 + Gas Used            │  │
│  │  ● 输出给用户：「转账成功，点击查看区块浏览器」               │  │
│  └───────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘

```

## 各方角色与责任

| 角色 | 谁 | 做什么 | 需要什么能力 |
|------|-----|--------|-------------|
| **发起者** | 用户 | 定义任务目标 | 知道要做什么 |
| **执行者** | AI Agent | 解析意图、调 API、构建交易、验证结果 | LLM + Tool Use + 链上数据读取 |
| **审核者** | 用户 | 确认交易详情、判断风险 | 基本的链上操作常识 |
| **签名者** | 钱包 | 私钥签名、广播交易 | 私钥管理 + 网络连接 |
| **验证者** | 区块浏览器 / AI Agent | 确认交易上链和状态 | API 读取 + 状态判断 |

## 关键边界（AI vs 链上操作）

| 层面 | AI 能做的 | AI 不能做的 |
|------|-----------|-------------|
| **信息处理** | 解析自然语言、查链上数据、构建交易参数 | 持有私钥、签名交易 |
| **决策** | 生成交易详情、风险评估 | 最终确认交易、授权付款 |
| **执行** | 发送已签名交易到节点 | 改变链上状态（必须经过签名 + 共识） |
| **验证** | 查询交易回执、对比余额变化 | 改变区块确认结果 |
| **安全** | 风险提示、地址白名单检查 | 替代私钥保护、替代人工判断 |

## 风险点

1. **Agent 构造了错误的交易参数**（地址、金额、contract call data）→ 人工确认环节兜底
2. **人工确认走神**，没仔细看就点了签名 → 建议：金额超过阈值时加二次确认
3. **钱包被钓鱼 / 恶意插件** → AI 无法防护，需要硬件钱包或 Safe 多签
4. **链上交易失败但 Agent 没检测到**（reorg、gas 不足）→ 验证环节需要检查 receipt status 而不是只看 tx hash 存在
5. **隐私泄露风险**：用户将私钥或助记词输入给了 AI → 需要在 prompt 层面加 guardrail 拦截

---

## 对比：另一个可选工作流（AI 生成合约交互说明）

```
用户发起 → AI 读取合约 ABI → AI 写交互说明 → 人工复核 → 钱包确认 → 测试网执行 → 区块浏览器验证
                                                              ↑ 关键区别：AI 只『建议』不『执行』
```

这个变体更保守：AI 只写交互步骤，全部操作由用户手动在区块浏览器或 Hardhat 控制台里完成。适合学习场景或高安全需求场景。

---

## 总结

这个工作流的核心原则是：**AI 可以读链、算链、构建交易，但绝对不能碰私钥和签名。** 钱包签名是 Web3 的安全底线，也是 AI 系统边界最清晰的那条线。
````
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->

## 4\. Workflow

**一句话解释**：Workflow 是把多个 AI 调用按固定流程串起来，前一步的输出作为后一步的输入。

**具体例子**：一个自动翻译工作流：先用 LLM 检测源语言 → 翻译成英文 → 检查语法 → 人工审核 → 输出。每一步都有明确的输入输出，中间可以插人干预。

**常见误区**：Workflow 和 Agent 不是一回事。Workflow 是写死的流程，每一步干什么提前定好了。Agent 是有自主决策能力的，它能自己决定下一步调什么工具。Workflow 适合确定性强的任务，Agent 适合不确定性强的任务。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->


# AI 基础概念整理

## 1\. LLM（大语言模型）

**一句话解释**：LLM 是一个用海量文本训练出来的神经网络，它的核心能力是根据上文预测下一个最合理的词，从而生成连贯的回答。

**具体例子**：你问 ChatGPT “Python 怎么读取一个 CSV 文件？”，它不会去查数据库，而是根据训练时见过的无数类似问答，组合出一段看起来合理的代码。

**常见误区**：很多人以为 LLM 是"有知识的"或者"会思考的"。其实它没有真正理解你的问题，它只是在做概率计算——选词。所以它可能自信满满地编造一个不存在的库函数，这就是所谓的"幻觉"。

## 2\. Prompt

**一句话解释**：Prompt 就是你给 LLM 的输入文本，用来引导它生成你想要的输出。

**具体例子**：你不只是问"写个排序算法"，而是写：“请用 Python 写一个快速排序，加上中文注释，输入是一个整数列表。”——这就是一个工程化的 prompt。

**常见误区**：很多人以为 prompt 越长越精确越好。实际上不必要的上下文会分散 LLM 的注意力，反而降低输出质量。好的 prompt 是精确、简洁、结构清晰的。

## 3\. Context Window

**一句话解释**：Context window 是 LLM 一次能"看到"的文本总量，包括你输入的 prompt 和它生成的回复。

**具体例子**：你把一份 100 页的合同丢给 Claude 让它总结，但 Claude 一次只能看 200K token（大概十几万汉字），超过的部分它根本不知道存在。

**常见误区**：Context window 大不代表它能"记住"。它只是能在更大的范围内做注意力计算，但中间的内容仍然可能被"稀释"。而且 context window 越大，计算成本越高、响应越慢。

## 4\. Workflow

**一句话解释**：Workflow 是把多个 AI 调用按固定流程串起来，前一步的输出作为后一步的输入。

**具体例子**：一个自动翻译工作流：先用 LLM 检测源语言 → 翻译成英文 → 检查语法 → 人工审核 → 输出。每一步都有明确的输入输出，中间可以插人干预。

**常见误区**：Workflow 和 Agent 不是一回事。Workflow 是写死的流程，每一步干什么提前定好了。Agent 是有自主决策能力的，它能自己决定下一步调什么工具。Workflow 适合确定性强的任务，Agent 适合不确定性强的任务。

## 5\. Agent

**一句话解释**：Agent 是一个有"能动性"的 AI 系统，它能自己决定要做什么、用什么工具、什么时候算完成任务。

**具体例子**：你给 Agent 一个任务：“帮我订下周去北京的机票和酒店”。它自己会依次调用航班查询 API、比价、调用酒店 API、检查日历冲突，最后给你一个方案确认。每一步都是它自己 decide 的。

**常见误区**：Agent 不是"更聪明的 LLM"。LLM 只是 Agent 的"大脑"，Agent 还需要工具集、记忆系统、决策循环等组件才能工作。把 Agent 等同于 LLM 会导致期望管理失败——Agent 的不可靠性不是 LLM 的错，是整个系统的复杂性导致的。

## 6\. Tool Use (Function Calling)

**一句话解释**：Tool Use 是让 LLM 能调用外部工具（API、数据库、代码执行器）的能力，突破它只能生成文本的限制。

**具体例子**：你问 AI “帮我查一下今天北京的天气”，LLM 本身不知道天气，但它可以调用一个天气 API——它返回一个格式化的函数调用请求，系统执行这个请求并把结果返回给 LLM，LLM 再组织成自然语言回复。

**常见误区**：Tool Use 不是 LLM 在"主动操作"。它只是在输出一个结构化的"我想调用这个函数"的文本，真正执行的是外面的代码。所以工具调用的稳定性和安全性取决于外面的编排层，不是 LLM 本身。

## 7\. AI Coding

**一句话解释**：AI Coding 是指用 LLM 辅助写代码的场景，包括代码生成、补全、解释、调试、重构等。

**具体例子**：我在 VS Code 里用 Cursor，写一个函数名后按 Tab 就能补全整个函数体；或者选中一段代码让 AI 帮我重构。这就是 AI Coding 在日常开发中的真实用法。

**常见误区**：以为 AI Coding = AI 完全替代程序员。实际上 AI 生成的代码经常有逻辑漏洞、安全问题和依赖错误，你需要理解每一段它生成的代码才能放心用。AI 是高级自动补全，不是无脑外包。

## 8\. Guardrails

**一句话解释**：Guardrails 是在 AI 系统外围加的规则和检查，用来限制 LLM 的输出内容、格式和行为边界。

**具体例子**：一个客服 AI 被配置了 guardrail：不允许讨论政治话题，不允许给出医疗建议，回复长度不能超过 200 字。当用户问"我头痛应该吃什么药"，AI 会检测到触发了医疗 guardrail，转而回复"建议咨询医生"。

**常见误区**：Guardrails 不是 prompt 里写一句"不要回答违法问题"就够了。真正的 guardrails 需要独立的检测模型、内容过滤器和规则引擎，因为 prompt 级别的约束很容易被越狱绕过。

## 9\. Tracing

**一句话解释**：Tracing 是把一个 AI 请求从输入到输出的完整路径记录下来，包括 LLM 调用、工具调用、中间结果等，方便调试和优化。

**具体例子**：用户用 Agent 订机票但报错了。通过 tracing 工具（比如 LangSmith），你可以看到 Agent 调了哪个 API、API 返回了什么、LLM 怎么解析的、哪一步出了异常——而不是只能看到最终报错信息发呆。

**常见误区**：Tracing 不是日志。日志是开发者自己定的"我觉得这里应该打个 log"，而 tracing 是自动记录请求的完整调用链，跨多个服务和组件。两者解决的问题不同。

## 10\. Human-in-the-Loop

**一句话解释**：Human-in-the-Loop 是指在 AI 工作流的某些关键节点强制插入人工审批或干预，而不是让 AI 全自动跑完。

**具体例子**：一个自动发邮件的工作流，AI 可以起草邮件内容，但点击发送之前必须经过人工审核确认。这就是一个典型的 human-in-the-loop 设计。

**常见误区**：Human-in-the-loop 不等于"人在旁边看着"。它是系统设计的一部分——流程会停下来等人，人没确认流程就不继续。这是工程化的设计决策，不是操作习惯问题。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->



最小实践 为“钱包授权检查 Agent”设计一份 context spec。 选择一个场景：用户问“这个 dApp 要我 approve，可以签吗？”你需要列出模型回答前必须拿到的上下文： chain id 和当前区块 token 合约、spender 地址、approve 数量 用户当前 allowance 和余额 spender 是否在可信列表 simulation 或静态检查结果 dApp 页面提供的说明，标记为不可信外部内容 用户本次意图 再写清楚哪些字段必须实时查询，哪些可以来自缓存，哪些不能被模型当成事实。

今天完成了这个

````markdown
# Wallet Approve Check — Context Spec

## Overview

当用户询问"这个 dApp 要我 approve，可以签吗？"时，Agent 必须拿到以下上下文才能做出判断。每条列出其类型、来源、和可信度规则。

---

## 1. Chain Context

| 字段 | 类型 | 来源 | 可信度 |
|------|------|------|--------|
| `chainId` | `uint256` | JSON-RPC `eth_chainId` | ✅ 实时，**必须** |
| `blockNumber` | `uint256` | JSON-RPC `eth_blockNumber` | ✅ 实时，**必须** |
| `blockTimestamp` | `uint256` | JSON-RPC `eth_getBlockByNumber` | ✅ 实时，**必须** |

**规则**
- chainId **必须** 来自钱包当前连接的链，不能相信 dApp 页面声称的 chainId。
- blockNumber 和 blockTimestamp 用于判断 allowance/balance 是否在正确的链状态上读取。

---

## 2. Transaction to Sign

从钱包的 `eth_sendTransaction` / `eth_signTypedData` 参数中解析：

| 字段 | 类型 | 来源 | 可信度 |
|------|------|------|--------|
| `to` (token address) | `address` | tx `to` 字段 | ✅ 实时，**必须** |
| `spender` | `address` | `approve(address,uint256)` 参数 | ✅ 实时，**必须** |
| `amount` | `uint256` | `approve(address,uint256)` 参数 | ✅ 实时，**必须** |
| `rawData` | `hex` | tx `data` 字段 | ✅ 实时，**必须** |
| `value` | `uint256` | tx `value` 字段 | ✅ 实时，**必须** |

**规则**
- 如果 `value > 0` 且函数是 approve，属于异常模式，必须警告。
- `amount == type(uint256).max` 代表无限额度，必须明确告知用户。
- rawData 必须由 Agent 用 ABI 解码验证，不能信任 dApp 端的描述。

---

## 3. On-Chain State

| 字段 | 类型 | 来源 | 可信度 |
|------|------|------|--------|
| `userAllowance` | `uint256` | `token.allowance(user, spender)` | ✅ 实时，**必须** |
| `userBalance` | `uint256` | `token.balanceOf(user)` | ✅ 实时，**必须** |
| `decimals` | `uint8` | `token.decimals()` | 💾 缓存（存续期内不变） |
| `symbol` | `string` | `token.symbol()` | 💾 可缓存 |
| `name` | `string` | `token.name()` | 💾 可缓存 |

**规则**
- `allowance` 和 `balanceOf` **必须** 在被调用块上查，保证一致。
- `decimals` 可用已知 token list（如 trust-wallet-tokens）缓存，但不能信任 dApp 提供的 decimals。
- 如果 token 是原生 ETH（approve 到 WETH 等），余额要从 `eth_getBalance` 拿。

---

## 4. Spender Reputation

| 字段 | 类型 | 来源 | 可信度 |
|------|------|------|--------|
| `isInTrustedList` | `bool` | 本地维护的可信合约列表 | 💾 缓存，定期更新 |
| `isInBlockedList` | `bool` | 本地维护的黑名单 | 💾 缓存，定期更新 |
| `knownName` | `string \| null` | 区块浏览器 / 合约元数据 | 💾 可缓存 |
| `isProxy` | `bool` | 静态分析 | ❌ 不可靠，仅作参考 |
| `creator` | `address` | 在创建交易时的 EOA | 💾 可缓存 |
| `ageInBlocks` | `uint256` | 从创建块到当前块的差值 | ✅ 实时 |

**规则**
- 可信列表**只应包含经过审计的知名协议**（Uniswap Router, Seaport 等），不可随意添加。
- 黑名单优先级高于可信列表：spender 同时在两列表中时按黑名单处理。
- `knownName` 只能来自可信源（Etherscan verified source、已审计列表），禁止使用链上不可验证的元数据。
- `ageInBlocks` 的实时性很重要——新合约（< 1000 块）风险显著升高。

---

## 5. Simulation / Static Analysis

| 字段 | 类型 | 来源 | 可信度 |
|------|------|------|--------|
| `simulationSuccess` | `bool` | Tenderly / eth_call | ✅ 实时，**必须** |
| `stateDiff` | `dict` | simulation 返回 | ✅ 实时，**参考** |
| `transfersOut` | `list[Transfer]` | simulation 返回 | ✅ 实时，**参考** |
| `methodSignature` | `string` | 4byte.directory / 本地 ABI | 💾 可缓存 |
| `revertReason` | `string \| null` | simulation 返回 | ✅ 实时 |

**规则**
- simulation 结果**不能替代** allowance 查询 —— 同一个 spender 可能在 approve 之前就已经有额度了。
- `methodSignature` 必须是 approve / increaseAllowance，否则标记为"非标准 approve"。
- 如果 simulation revert，必须解释 revert reason 而非建议用户继续。

---

## 6. dApp 提供的说明

| 字段 | 类型 | 来源 | 可信度 |
|------|------|------|--------|
| `dAppTitle` | `string` | dApp 页面 | 🔴 **不可信外部内容** |
| `dAppDescription` | `string` | dApp 页面 | 🔴 **不可信外部内容** |
| `dAppOrigin` | `string` (URL) | 浏览器 URL | ✅ 可信（浏览器的 origin 无法伪造） |
| `estimatedGas` | `string` | dApp 页面 / wallet | 🔴 **不可信，仅作参考** |

**规则**
- dApp 提供的文字描述**必须视为不可信输入**，在 prompt 中用 `[UNTRUSTED]` 标签明确标记。
- Agent 不能将 dApp 的描述用作判断"这次 approve 是否安全"的事实依据。
- 但 `dAppOrigin` 可以用于匹配已知 phishing 域名列表。

---

## 7. User Intent

| 字段 | 类型 | 获取方式 |
|------|------|---------|
| `userIntent` | `string` | 用户自然语言输入（当前对话） |
| `expectedMethod` | `string \| null` | 用户预期的方法名（"我以为是 transfer"） |
| `freeTextNotes` | `string \| null` | 用户补充信息 |

**规则**
- 用户意图是唯一不受链上状态约束的信号。如果用户说"我只是想看看 NFT"，但 approve 的 to 是一个 ERC20，需要指出不匹配。
- 如果用户能清晰说出 "approve Uniswap 来 swap USDC"，且所有链上检查通过，可以降低风险评级。

---

## 综合置信度评分 (示例)

| 条件 | 安全 ✅ | 危险 ❌ |
|------|--------|--------|
| spender 在可信列表 | +2 | — |
| spender 在黑名单 | — | ✋ 直接阻止 |
| allowance 为 0（新 approve） | +1 | — |
| allowance 已存在且正在增加 | — | -1 |
| amount 为 ∞ | 0 | -2 |
| simulation 成功 | +1 | — |
| simulation 显示全部转出 | — | -2 |
| dApp origin 为新域名 | 0 | -1 |
| 用户意图清晰匹配 | +1 | — |
| 用户意图与方法不匹配 | — | -2 |

> **建议阈值**: 总分 ≤ 0 时建议用户拒绝或进一步调查。

---

## 数据生命周期汇总

| 数据 | 必须实时 | 可缓存 | 不可信 |
|------|----------|--------|--------|
| chainId | ✅ | | |
| blockNumber | ✅ | | |
| token address / spender | ✅ | | |
| allowance | ✅ | | |
| balance | ✅ | | |
| decimals / symbol / name | | ✅ (use token list) | |
| spender 可信列表 | | ✅ (定期更新) | |
| spender 黑名单 | | ✅ (定期更新) | |
| dApp 说明文字 | | | 🔴 |
| simulation 结果 | ✅ | | |
| method signature | | ✅ | |
| 用户意图 | 本轮对话 | | |

## Prompt 结构示例

```
## Context (all on-chain data is from block #{blockNumber} on chain {chainId})

[ON-CHAIN]
- Token: {symbol} ({address})
- Spender: {spender} [KNOWN: {name}] [TRUSTED: {yes/no}]
- Your allowance: {formattedAllowance} {symbol}
- Your balance: {formattedBalance} {symbol}
- Approve amount: {formattedAmount} {symbol}

[SIMULATION]
- Status: {success/revert}
- State diff: {summary}
- Method: {methodSignature}

[UNTRUSTED - from dApp origin {origin}]
- dApp says: "{dAppDescription}"

[USER INTENT]
- User says: "{userIntent}"
```

> `[UNTRUSTED]` 区块之后的所有内容模型不能当作事实引用，仅用作参考展示。
````

```markdown
# 设计说明

## 为什么需要 Context Spec？

"钱包授权检查 Agent" 的核心风险在于：**模型可能把 dApp 的恶意描述当真，或者把过时的链上数据当作当前状态**。Context Spec 划了一条清晰的边界：什么数据模型可以信任，什么数据必须实时查，什么数据根本不能信。

---

## 关键设计决策

### 1. 实时 vs 缓存：不信任过期状态

| 决策 | 理由 |
|------|------|
| allowance / balance 必须实时 | 链状态每秒都可能变。一个 approve 交易可能在你回答的间隙已经被 frontrun。多一步 RPC 调用值得。 |
| decimals / symbol 可缓存 | token 元数据在合约生命周期内不会变；即使被恶意合约事后修改（极少见），symbol 错了不影响资金安全。 |
| blockNumber + blockTimestamp 必须实时 | 这两个字段是所有链上查询的"锚点"。没有它们，你无法验证 allowance 是在哪个高度读的，也无法检查合约年龄。 |

### 2. [UNTRUSTED] 标签：防止模型被钓鱼

dApp 页面内容是**攻击面**。恶意 dApp 可以写：

> "This approves 0.001 ETH for gas"

而实际 calldata 是 `approve(0xdead, type(uint256).max)`。

把 dApp 描述标为 `[UNTRUSTED]` 的作用：
- 在 prompt 结构上一个视觉分隔，提醒模型"接下来这段不是事实"
- 模型在推理时不会把它作为"spender 是安全的"的论据
- 但仍然显示给用户看，让用户对比 dApp 说了什么 vs 链上实际在做什么

### 3. spender 可信列表：白名单不是银弹

可信列表的设计很保守：
- 只包含经过审计的知名协议（Uniswap Router v3, Seaport 1.6, 等）
- 新协议即使代码安全也**不加入**，直到有时间验证
- 黑名单优先级高于白名单——被攻破的知名合约可以从可信列表中移除并移入黑名单

但白名单的真正局限是：大多数 approve 请求来自**不在白名单中的** spender。所以白名单只能用来**降低**误报率，不能作为"非白名单即拒绝"的逻辑。

### 4. 综合评分而非二值判断

最终输出不是"安全/危险"这样的硬分类，而是多维度评分。原因：
- 安全不是二元属性。Uniswap 的 approve 在大多数场景下安全，但如果你在对一个假的 Uniswap 前端操作，spender 地址可能不同。
- 评分制允许模型给出 nuanced 的回复：**"spender 是已知的 Uniswap Router，但 amount 是无限额度且你只有 0.5 USDC——风险较低，不过你确定需要无限额度吗？"**
- 阈值可以由用户配置（保守/中等/激进），适应不同风险偏好。

### 5. Simulation 不是银弹

Simulation 是一个强大工具，但有三个盲区：
1. **approve 本身不转移资产**——simulation 只能看到本交易的结果，看不到后续交易。如果 approve 给了一个恶意合约，恶意合约可以在下一笔交易调用 `transferFrom`。
2. **approve 是授权未来操作**——simulation 无法预测"未来"会发生什么。
3. **impersonation 的限制**——复杂场景（多跳代理、delegatecall）的 simulation 可能不准确。

所以 simulation 的结果放在"参考"而非"必须"等级。

### 6. 信任链：钱包 origin 不可伪造

dApp 页面可以被任意篡改，但浏览器 origin 和钱包注入的 tx 参数来自钱包扩展，攻击者不可能伪造。这就是为什么：
- `dAppOrigin` 是可信的（来自浏览器）
- tx `to` / `data` 是可信的（来自钱包）
- `dAppDescription` 是不可信的（来自 DOM）

整个架构的信任锚点是**钱包扩展提供的交易数据**，而非 dApp 页面。

---

## 对抗场景测试

### 场景 A：恶意 dApp 显示假的 chainId

dApp 页面："This is on Ethereum mainnet"（实际 chainId 是 56 = BSC）

**Spec 的防御**：Agent 从 `eth_chainId` 拿 chainId，not from dApp 页面。如果用户说"我在以太坊"但 chainId 显示是 BSC，Agent 必须指出差异。

### 场景 B：恶意 dApp 显示假的 approve 数量

dApp 页面："Approve 5 USDC"（实际 calldata 是 `type(uint256).max`）

**Spec 的防御**：Agent 从 calldata 解码 amount，不读 dApp 的描述。当 decoded amount 是无限时，无论 dApp 说什么都是高风险。

### 场景 C：恶意 dApp 伪造 spender 名称

dApp 页面："Approving Uniswap Router"（实际 spender 是一个未审计的个人地址）

**Spec 的防御**：`knownName` 只来自可信来源（Etherscan verified source / 可信列表），不能来自 dApp。如果可信列表没有该地址，就显示 "unknown"，不论 dApp 怎么描述。

### 场景 D：dApp 发起的是 normal transfer 而非 approve

用户以为是 approve，实际 calldata 是 `transfer(wallet, amount)`。

**Spec 的防御**：Agent 解析 method signature 并与用户意图对比。如果用户说 approve 但 method 是 transfer，必须标记不匹配。

---

## 未解决的问题 / 后续工作

1. **多链可信列表同步**——目前是本地缓存，需要设计跨链更新机制。
2. **EIP-2612 permit**——`permit` 通过签名而非交易来实现 approve，signTypedData 的判断逻辑不同。
3. **dApp origin 的 phishing 库**——需要集成 PhishFort / MetaMask 的 phishing detect 接口。
4. **用户意图的 NLU 边界**——如果用户说"帮我看看"，没有明确意图，应该进入追问流程。
5. **score threshold 的校准**——需要真实的正负样本数据集来校准综合评分的阈值。
```
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->




![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/ybk-1/images/2026-05-21-1779376029547-image.png)

今天完成了一个ai交互的一个demo

````markdown
# AI Task Progress Manager

一个集成了 AI 能力的任务进度管理 Web 应用。将复杂任务拆解为可追踪的步骤，配合 AI 对话辅助完成。

## 功能

- **任务管理** — 创建/删除任务，侧边栏切换，每个任务包含标题、摘要和步骤列表
- **步骤管理** — 添加/删除/拖动排序步骤，步骤状态循环：待办 → 进行中 → 完成 → 阻塞
- **自动推进** — 步骤完成后自动将下一个待办步骤设为进行中，并继承上一步结果
- **子任务清单** — 每个步骤内支持子任务复选框，可添加/勾选/删除，支持 AI 自动生成
- **进度条** — 实时显示完成步骤/总步骤数
- **AI 拆解任务** — 输入自然语言描述，AI 自动生成 3-8 个结构化步骤
- **AI 对话面板** — 每个任务专属聊天面板，AI 感知完整任务上下文（标题、步骤、进度）
- **步骤详情对话** — 点击步骤打开详情弹窗，每个步骤有独立 AI 对话窗口
- **导出 Markdown** — 将当前任务及所有步骤/结果导出为 Markdown，一键复制
- **历史回顾** — 查看所有已完成步骤及结果
- **中英文切换** — 内置中文/英文双语支持，即时切换
- **多 AI 提供商** — 支持 Claude、OpenAI、DeepSeek、SiliconFlow 及自定义兼容端点

## 截图

*(暂无)*

## 技术栈

| 层 | 技术 |
|---|---|
| 前端 | 纯 HTML/CSS/JS 单页应用（单个 `index.html`） |
| CSS | Tailwind CSS（CDN）+ 自定义样式 |
| 存储 | 浏览器 localStorage |
| 后端 | Node.js + [Hono](https://hono.dev/) Web 框架 |
| AI | Anthropic Claude / OpenAI / DeepSeek / SiliconFlow API |

## 快速启动

### 前置条件

- [Node.js](https://nodejs.org/) 18+
- 至少一个 AI 提供商的 API Key

### 启动步骤

```bash
# 1. 进入后端目录
cd server

# 2. 安装依赖（首次）
npm install

# 3. 配置 API Key
#    编辑 .env 文件，填入你的 API Key：
#    ANTHROPIC_API_KEY=sk-ant-...
#    DEEPSEEK_API_KEY=sk-...
#    SILICONFLOW_API_KEY=sk-...

# 4. 启动后端服务器
node src/index.js
```

看到 `🚀 Server running at http://localhost:3001` 后，在浏览器打开 http://localhost:3001。

### 或者用后端代理

也可以把 API Key 放在前端的设置弹窗里（浏览器 localStorage），不配置后端的 .env。

## 项目结构

```
v_map/
├── index.html            # 前端单页应用（~1900 行）
├── README.md             # 本文件
├── ai-task-roadmap-prompt.md  # AI 提示词原始文件
└── server/
    ├── .env              # 后端环境变量（API Key）
    ├── package.json
    └── src/
        └── index.js      # Hono 后端服务器（~228 行）
```

## 数据模型

所有数据存储在浏览器 `localStorage`，key 为 `ai_task_progress`：

```js
{
  tasks: [{
    id: "uuid",
    title: "任务名称",
    summary: "任务摘要",
    createdAt: "ISO 日期",
    updatedAt: "ISO 日期",
    steps: [{
      id: "uuid",
      name: "步骤名称",
      requirements: "步骤要求",
      expectedResult: "预期结果",
      result: "实际结果",
      status: "pending | in_progress | done | blocked",
      order: 0,
      subtasks: [{ label: "子任务", done: false }],
      inheritedResult: "继承的上一步结果",
      inheritedFromName: "上一步名称"
    }]
  }],
  currentTaskId: "uuid | null",
  language: "zh | en",
  apiConfig: { provider, apiKey, endpoint, model },
  chatMessages: { "[taskId]": [...], "step_[id]": [...] }
}
```

## AI 集成架构

```
浏览器 (index.html)
  ├── Claude → 后端代理 (localhost:3001) → Anthropic API
  ├── OpenAI → 后端代理 → OpenAI API
  ├── DeepSeek → 浏览器直连 → DeepSeek API
  ├── SiliconFlow → 浏览器直连 → SiliconFlow API
  └── 自定义 → 浏览器直连 → 自定义端点

AI 调用场景：
  - 拆解任务：POST /api/split（非流式，返回 JSON）
  - 对话：POST /api/chat（SSE 流式）
  - 生成子任务：直接调用 AI，解析 JSON 数组
```

## 使用说明

1. **创建任务**：点击侧边栏 "+" 按钮，输入任务名称
2. **添加步骤**：点击 "+ 添加步骤" 或使用 "🤖 AI 拆解任务" 自动生成
3. **推进步骤**：点击步骤状态图标循环切换状态
4. **AI 对话**：点击右上角 "💬" 打开聊天面板
5. **步骤详情**：点击任意步骤打开详情弹窗，可查看/编辑子任务、预期结果，与 AI 讨论该步骤
6. **导出**：点击 "📥 导出 Markdown" 复制任务报告

## License

MIT
````
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->






````markdown
# Daily Note / 每日打卡 — 2026-05-20

## Today's Plan / 今日计划

- [x] 策划最小可交互 AI 学习产物
- [x] 设计 tx-explain CLI 架构
- [x] 编写 tx-explain.py 主体代码
- [ ] 运行 --test 验证（API key 失效，待解决）
- [ ] 更新 README

## Learning Log / 学习记录

### What I learned / 学到了什么

今天策划并动手做了一个新实验：**Tx-Explain CLI** — 一个交互式交易问答学习工具。

**核心思路**：在前两次实验（tx-interpreter 单次分析、tx-risk-summary 结构化风险判断）的基础上，增加「对话式追问」功能。用户输入一条交易哈希，AI 先给风险摘要，然后用户能像聊天一样不断追问：「这个 approve 是什么意思？」「gas 费合理吗？」「这个合约安全吗？」。

**架构设计**：

```
用户输入 tx_hash
  → 链上数据获取（复用已有 rpc 函数）
  → 首次分析：LLM 输出结构化风险摘要（复用 risk-summary prompt + schema）
  → 问答循环：
      → 携带交易上下文 + 历史对话 → 发给 LLM
      → 以教学方式回答
      → 支持 exit / new / help 命令
```

**关键技术决策**：
- **Context window 管理**：只保留最近 5 轮问答历史，避免 token 溢出
- **首次分析 vs 问答**：首次分析用 `response_format: json_object` 保证结构化输出；问答模式用自由文本，让 LLM 可以用自然语言教学
- **QA 模式 system prompt**：在原有风险分析 prompt 基础上，加了「教学」指令——解释专业术语、用例子和比喻帮助理解

**与前面实验的关系**：

| 实验 | 核心能力 | 新增 |
|------|---------|------|
| tx-interpreter | 单次交易解释 | - |
| tx-risk-summary | 结构化风险判断 + schema 校验 | code 层校验 |
| tx-explain (今天) | 交互式问答学习 | context 管理 + 对话循环 |

### Questions / 疑问与卡点

- **API key 失效**：运行 `--test` 时遇到 401，当前 Silicon Flow API key 需要更新
- **QA 模式的 prompt 需要迭代**：首次写的 QA prompt 效果如何，需要在 API key 恢复后实测验证
- **context window 裁剪策略**：MAX_HISTORY=5 是否合理，需要实测后调整

## Daily Check-in / 打卡

- [ ] 已提交 WCB 打卡
- [ ] 打卡链接：

## Tomorrow's Preview / 明日计划

- [ ] 解决 API key 问题，运行 --test 验证
- [ ] 实测一条真实交易哈希的完整交互流程
- [ ] 更新 README.md
- [ ] 如果时间充裕，迭代 prompt 质量

## Stats

- 学习时长：1.5h
- 完成度：策划 + 编码完成，待验证
````
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->







# Daily Note / 每日打卡 — 2026-05-19

## Today’s Plan / 今日计划

-   \[x\] 学习并整理 AI 基础核心概念
    
-   \[x\] 完成 tx-risk-summary 最小实践回顾
    
-   \[x\] 配置项目级 + 全局 [CLAUDE.md](http://CLAUDE.md)
    
-   \[ \] 浏览下一章节 Handbook
    

## Learning Log / 学习记录

### AI 核心概念整理

基于 Handbook 和已有实践，整理以下概念作为后续 Agent、workflow、AI coding 的共同语言：

1\. LLM（大语言模型）

**一句话**：LLM 是一个概率模型，它的本质是根据上文预测下一个 token，不是事实数据库，也不是逻辑引擎。

**具体例子**：当你问 “1 ETH 等于多少 USD”，LLM 不是在查汇率数据库，而是基于训练数据中见过的文本模式，生成一个最可能接着出现的 token 序列。

**常见误区**：把 LLM 的输出当真理。它可能编造一个看起来很合理的数字。在交易解释器项目里，我们把 LLM 输出叫 “model inference”，和链上事实分开标注，就是对这点的防御。

* * *

2\. Prompt（提示词）

**一句话**：Prompt 是你跟 LLM 沟通的"代码"，它的质量直接决定输出质量——本质上你是在通过自然语言编程。

**具体例子**：在 [tx-risk-summary.py](http://tx-risk-summary.py) 里，我们用了 Instruction 四段式结构——任务目标 / 可用输入 / 禁止行为 / 输出格式，而不是只写一句 “分析这笔交易”。

**常见误区**：以为 prompt 是安全边界。实际上 prompt 是软约束，LLM 可能被注入的指令覆盖（prompt injection）。所以必须在 code 层做校验，不能只靠 prompt 保证安全。

* * *

3\. Context Window（上下文窗口）

**一句话**：LLM 一次能"看到"的最大 token 数，超出部分会被遗忘，类似短期记忆的上限。

**具体例子**：在 tx-interpreter 里，我们把交易数据、收据、方法签名全部塞进一条 prompt 里发给 LLM——这些内容必须在模型的 context window 范围内。

**常见误区**：以为 context window 越大越好。更大的窗口意味着更贵的成本、更慢的响应，而且模型对中间内容的注意力会衰减。关键信息放在开头或结尾效果最好。

* * *

4\. Tool Use（工具调用）

**一句话**：让 LLM 不只是输出文字，还能调用外部工具（API、数据库、合约）来执行实际操作，是 LLM 从"聊天"走向"行动"的关键能力。

**具体例子**：我们的 tx-interpreter 虽然还没用到 LLM 主动调用工具，但架构上已经规划了——比如 LLM 分析出 “这是一个 swap” 后，可以自动调用 DexScreener API 查价格、调用 Etherscan 查合约审计状态。

**常见误区**：把 tool use 和 agent 混为一谈。tool use 只是一个动作（LLM 决定调一个函数），agent 是能自主决策、多步推理、记住过程、纠正错误的完整循环。

* * *

5\. Agent（智能体）

**一句话**：Agent 是能自主完成多步任务的 LLM 系统——它有自己的推理循环、能使用工具、能记住中间结果、能在出错时自我纠正。

**具体例子**：一个 DeFi agent 的流程可能是：用户说 “帮我找最优借贷利率” → Agent 调用多个协议 API 查利率 → 比较结果 → 发现 AAVE 最高 → 检查用户钱包余额 → 估算 gas → 确认执行。每一步自己决策，不需要人每一步都指引。

**常见误区**：觉得 agent 就是 “调了一个 LLM 的 API”。真正的 agent 需要一套完整架构：planning（规划下一步）、memory（记住已完成和待完成）、tool use（执行动作）、reflection（判断结果对不对、需不需要重试）。

* * *

6\. Workflow（工作流）

**一句话**：Workflow 是把一个复杂任务拆成多个预设步骤，每一步可能调用 LLM、规则逻辑或人工审核，串成一个可预测的流水线。

**具体例子**：我们的 tx-risk-summary 本质上就是一个简单 workflow：获取链上数据 → 解析方法签名 → 构建 prompt → 调 LLM → schema 校验 → 判断是否需要人工审批。每个步骤是确定的、可追踪的。

**常见误区**：workflow 和 agent 的区别——workflow 是"预先画好的路线图"，每一步做什么是写死的；agent 是"给你一个目标，自己找路过去"。workflow 适合稳定、已知的任务（如交易风险分析），agent 适合需要灵活探索的任务。

* * *

7\. Guardrails（护栏 / 安全边界）

**一句话**：Guardrails 是在 LLM 输入和输出周围加的代码层检查，防止模型做出不安全或不符合预期的行为。

**具体例子**：tx-risk-summary 里的 `validate_schema()` 函数就是最基础的 guardrail——校验 risk\_level 是不是 low/medium/high 之一、requires\_human\_approval 是不是布尔值。如果格式不对，不走后续流程。

**常见误区**：以为 guardrail 就是 prompt 里写 “不要做 X”。代码层的 guardrail 才是真正的安全边界，prompt 只是第一道防线。越关键的系统，越需要在代码层拦截（比如金额超过阈值自动拦截、目标地址不在白名单自动拦截）。

* * *

8\. Human-in-the-Loop（人在回路）

**一句话**：在关键决策点让真人介入确认，而不是让 AI 全自动执行——适用于高风险场景的最后一道防线。

**具体例子**：tx-risk-summary 的 `requires_human_approval` 字段就是 HITL 的切入点——当风险等级为 high 时标记需要人工确认，交易不会自动执行。用户先看风险摘要，再决定签不签。

**常见误区**：“AI 已经很准了，不需要人看了”。问题是 LLM 可能在高风险场景下（如无限授权）做对 99%，但剩下的 1% 足以造成损失。HITL 不是对 AI 的不信任，而是对风险的保险。

* * *

### Questions / 疑问与卡点

-   Agent 的 planning 和 reflection 环节具体怎么实现？需要看一些开源 agent 框架（如 LangChain Agent、Vercel AI SDK）的实际代码
    
-   Guardrails 的代码层拦截在 DeFi 场景下能做到多细？比如能不能做到 “只允许交易已审计的合约”？
    

## Daily Check-in / 打卡

-   \[ \] 已提交 WCB 打卡
    
-   \[ \] 打卡链接：
    

## Tomorrow’s Preview / 明日计划

-   \[ \] 看下一章节 Handbook 内容
    
-   \[ \] 尝试把 tool use 整合进现有实验
    
-   \[ \] 继续深入 Agent 架构学习
    

## Stats

-   学习时长：2h
    
-   完成度：概念整理阶段
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->








![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/ybk-1/images/2026-05-18-1779097067324-image.png)

已经完成最小可验证的实践

```json
{
  "summary": "一笔低价值、低Gas费的合约调用交易，状态成功，但具体意图不明。",
  "details": {
    "action": "用户向合约地址发送了一笔极小额ETH并附带22字节的input数据，调用了Method ID为0x043bc855的函数。",
    "assets": [
      "0.000000000673592463 ETH（约6.74e-10 ETH）"
    ],
    "addresses": {
      "from": "0xae2fc483527b8ef99eb5d9b44875f005ba1fae13",
      "to": "0x1f2f10d1c40777ae1da742455c65828ff36df387",
      "interacted_contract": "0x1f2f10d1c40777ae1da742455c65828ff36df387"
    }
  },
  "chain_facts": [
    "交易状态为成功（status: success）",
    "发送方地址：0xae2fc483527b8ef99eb5d9b44875f005ba1fae13",
    "接收方/合约地址：0x1f2f10d1c40777ae1da742455c65828ff36df387",
    "转账金额：0.000000000673592463 ETH",
    "Gas使用量：111,114",
    "有效Gas价格：0.184089938 Gwei",
    "总交易费：约0.000020 ETH",
    "Method ID：0x043bc855",
    "Input数据长度：22字节",
    "产生了4条日志（logs_count: 4）"
  ],
  "model_inference": [
    "这是一笔与合约的交互交易，而非简单的ETH转账，因为input数据非空且长度固定。",
    "Method ID 0x043bc855 未在常见函数选择器库中匹配到标准函数（如ERC20 transfer、approve等），可能是一个自定义合约函数。",
    "转账金额极低（约6.74e-10 ETH），可能仅作为触发合约逻辑的“燃料”或占位符。",
    "Gas使用量（111,114）和日志数量（4）表明合约执行了非平凡的操作，可能涉及状态变更或事件触发。",
    "极低的Gas价格（0.18 Gwei）表明发送方对交易确认速度要求不高，可能是测试、批量操作或低优先级调用。"
  ],
  "uncertainties": [
    "无法确定Method ID 0x043bc855对应的具体函数名称和功能。",
    "无法确定input数据（22字节）的具体含义（可能是参数编码）。",
    "无法确定合约地址0x1f2f10d1c40777ae1da742455c65828ff36df387的归属和用途。",
    "无法确定4条日志的具体内容（未提供日志数据）。",
    "无法确定发送方发起此交易的真实目的（测试、空投领取、治理投票、或恶意调用等）。"
  ],
  "risk_notes": [
    "由于Method ID未知且input数据不可读，无法评估合约调用的安全性。",
    "建议在签署类似交易前，通过区块链浏览器（如Etherscan）查看目标合约的源代码和ABI，确认函数功能。",
    "注意极低Gas价格可能导致交易在拥堵时长时间待处理，但此处已成功。",
    "如果合约地址是未知或未经验证的，应避免授权或发送任何有价值的资产。",
    "检查发送方地址的历史交易，确认其与目标合约的交互模式是否正常。"
  ]
}
```

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/ybk-1/images/2026-05-18-1779097317932-image.png)
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
