---
timezone: UTC+8
---

# Zhangdajiang

**GitHub ID:** Zhangdajiang

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-02
<!-- DAILY_CHECKIN_2026-06-02_START -->
JEPA / 预测表征路线学习笔记

一、JEPA 是什么？

JEPA = Joint-Embedding Predictive Architecture。

它的核心不是生成图片，也不是补像素，而是在“抽象表示空间”里做预测。

普通生成模型问：

缺失区域的像素长什么样？

JEPA 问：

缺失区域在抽象表示空间里应该是什么样？

所以 JEPA 更关心：

物体结构

场景关系

语义一致性

未来变化

动作后果

任务相关信息

一句话：

JEPA 不画图，它预测世界的抽象状态。

二、JEPA 和传统路线的区别

1\. 和 MAE / AutoEncoder 的区别

MAE：

遮住图片一部分，然后重建像素。

JEPA：

遮住图片一部分，然后预测被遮住区域的 embedding。

区别：

MAE 更像“补图”；

JEPA 更像“理解缺失区域应该是什么”。

2\. 和 CLIP 的区别

CLIP：

把图片和文本对齐，适合开放词表分类、图文检索。

JEPA：

不依赖文本，而是通过视觉上下文预测视觉表示。

区别：

CLIP 强在图文语义；

JEPA 更可能强在物理结构、时空关系、细粒度状态理解。

3\. 和 DINO 的区别

DINO：

让同一图像不同增强视角的表示保持一致。

JEPA：

根据已知部分预测未知部分的表示。

区别：

DINO 偏“表示一致性”；

JEPA 偏“预测未知结构”。

4\. 和视频生成模型的区别

视频生成模型：

生成未来帧，看起来像视频。

JEPA 世界模型：

预测未来状态 embedding，不一定生成像素。

区别：

视频生成追求画面真实；

JEPA 追求表示有用。

三、JEPA 为什么重要？

因为智能不一定需要复原所有像素。

人类看世界时，也不是逐像素预测未来。

比如看到杯子在桌边，人不会想：

下一帧每个像素怎么变。

人会直接判断：

杯子可能掉下去；

需要把它往里推。

这就是抽象预测。

JEPA 的思想就是：

不要浪费能力预测无关像素细节；

要学习对理解、判断、规划有用的抽象状态。

四、JEPA 最可能替代哪些路线？

1\. 替代部分像素重建式自监督学习

比如 MAE、AutoEncoder 这类：

通过重建像素来学表示。

JEPA 认为：

重建像素可能让模型过度关注纹理、光照、噪声；

预测抽象表示更可能学到语义和结构。

2\. 替代部分图文对齐路线

CLIP 很强，但文本不一定描述所有视觉细节。

比如：

医学影像微小病灶；

工业缺陷；

机器人抓取几何；

视频动作前兆。

这些细节未必能被文本标签充分表达。

JEPA 有希望在这些任务中学到更细的视觉结构。

3\. 替代部分像素级视频预测世界模型

如果目标是规划和判断，不一定需要生成高清未来视频。

只要预测未来状态 embedding，就可能够用。

这比生成像素更轻，也更贴近决策。

4\. 补强机器人 / VLA 路线

很多 VLA 模型是：

视觉 + 语言 → 动作。

但中间缺少：

动作之后世界会怎样变化？

JEPA 可以作为 latent world model：

当前状态 + 候选动作

↓

预测未来状态表示

↓

选择更接近目标的动作

五、JEPA 现在都在发什么论文？

大方向主要有这些：

1\. 图像 JEPA

代表：

I-JEPA

任务：

图像自监督表示学习。

核心：

从图像已知区域预测未知区域的抽象表示。

2\. 视频 JEPA

代表：

V-JEPA、V-JEPA 2、V-JEPA 2.1

任务：

视频理解、动作预测、物理世界建模。

核心：

从视频上下文预测缺失片段或未来片段的表示。

3\. 机器人 JEPA / 世界模型

代表：

V-JEPA 2-AC、DINO-WM、JEPA-WM 等。

任务：

机器人规划、动作后果预测、zero-shot planning。

核心：

不直接生成未来图像，而是在 latent space 里预测未来状态，用于动作选择。

4\. 多模态 JEPA

代表：

VL-JEPA 等。

任务：

视觉-语言理解、判别式 VQA、开放词表任务。

核心：

不一定自回归生成文本，而是预测连续 embedding。

5\. 医学 / 工业 / 时间序列 JEPA

代表：

US-JEPA、Audio-JEPA、MTS-JEPA 等。

任务：

医学影像、音频理解、时间序列异常预测。

核心：

用抽象表示预测替代低级信号重建。

六、JEPA 的热度如何？

判断：

中高热度，正在上升，但还没到 LLM / Diffusion 那种全民路线级别。

为什么说有热度？

1\. Meta FAIR / Yann LeCun 持续推动。

2\. 从图像扩展到了视频、机器人、医学、音频、时间序列。

3\. 它和“世界模型”“具身智能”“Physical AI”高度相关。

4\. 机器人和自动驾驶需要预测动作后果，JEPA 正好切中这个问题。

为什么还没完全爆？

1\. 统一范式还没稳定。

2\. 工业落地不如 CLIP、DINO、Diffusion、LLM 成熟。

3\. 评估标准混乱，不同任务各测各的。

4\. 大规模视频/机器人 JEPA 训练成本高。

5\. “预测 embedding 是否等于理解世界”还需要更多证明。

七、对我来说，最适合的研究切口

不建议一上来做：

大规模视频世界模型

机器人真实硬件规划

自动驾驶世界模型

这些太重。

更适合的方向是：

1\. JEPA 表征用于图像-表格任务

问题：

I-JEPA / V-JEPA 的预测式视觉表征，是否比 CLIP / DINO 更适合细粒度图像-表格预测？

可用数据：

MulTaBench image-tabular 子集。

可比方法：

CLIP embedding

DINO embedding

I-JEPA embedding

V-JEPA embedding

下游模型：

LightGBM

CatBoost

TabPFN

MLP

评价：

AUC / R2

小样本表现

冻结表征 vs target-aware 表征

错误案例分析

注意力可视化

2\. JEPA 表征用于细粒度识别

适合任务：

宠物年龄预测

医学影像诊断

工业缺陷检测

商品属性/价格预测

农业病害识别

核心问题：

JEPA 是否比普通视觉 embedding 更能保留任务相关细节？

3\. JEPA 用于异常检测

普通异常检测：

看重建误差。

JEPA 异常检测：

看预测表示和真实表示是否不一致。

适合：

医学影像异常

工业表面缺陷

传感器异常

视频事件异常

八、最重要的研究判断

不要把 JEPA 理解成“新的图片分类器”。

它真正有价值的地方是：

学习更适合预测、规划、异常识别和细粒度判断的抽象状态表示。

所以不建议写：

用 JEPA 做图片分类。

更好的说法是：

JEPA-style predictive representations for fine-grained multimodal prediction.

中文可以理解为：

面向细粒度多模态预测的 JEPA 式预测表征研究。

九、一句话总结

JEPA 的核心思想是：

不要生成像素，而是预测抽象表示；

不要死记画面，而是学习世界结构；

不要只问“这是什么”，而要问“这个状态意味着什么、接下来可能怎样”。

它最可能在这些地方有价值：

细粒度视觉理解

多模态表格学习

异常检测

视频理解

机器人规划

动作后果预测

物理世界建模

最适合我的落地方向：

用 JEPA / V-JEPA 表征替代 CLIP / DINO 表征，

在图像-表格、多模态预测、细粒度识别任务上做系统比较。
<!-- DAILY_CHECKIN_2026-06-02_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->

# 1\. Viem？

我学 Wagmi 时，更多是在学：

```
React 页面里如何连接钱包？
如何用 Hook 读余额？
如何用 Hook 发交易？
如何显示 loading / error / success？
```

但学 Viem 时，我要换一个角度：

```
一次链上交互本质上发生了什么？
我怎么构造 RPC 请求？
我怎么读合约？
我怎么模拟交易？
我怎么签名？
我怎么处理 ABI？
我怎么等交易真正上链？
```

Wagmi 很方便，但如果只会 Wagmi，我容易变成“会调 Hook，但不知道链上发生了什么”。Viem 逼我理解 Ethereum 的原始概念：Client、Transport、Account、Action、ABI、Transaction、Receipt、Gas、Signature。

官网也明确说，Viem 的 API 可能比其他库更啰嗦，但这种啰嗦是有意的，因为它让模块更灵活，也帮助开发者理解 Ethereum 概念以及为什么要传某些参数。

* * *

# 2\. Viem 的核心心智模型

我把 Viem 的主干记成：

```
Client 负责“我能做哪些事”
Transport 负责“我怎么把请求发出去”
Action 负责“我要具体做哪件事”
Chain 负责“我在哪条链上做”
Account 负责“谁来签名/谁来发起交易”
ABI 负责“我怎么理解合约函数”
```

组合起来就是：

```
我创建一个 Client
  ↓
给它指定 Chain 和 Transport
  ↓
然后调用 Action
  ↓
Action 通过 Transport 发送 JSON-RPC 请求
  ↓
RPC 节点 / 钱包 / 合约 返回结果
```

* * *

# 3\. Client：我能做什么

Viem 里最重要的概念是 Client。

我一开始不要把 Client 理解成“客户端软件”，而要理解成：

```
Client = 一组能力的集合
```

官网说，Client 提供对某一部分 Actions 的访问。Viem 主要有三类 Client：Public Client、Wallet Client、Test Client。

## Public Client

我把 Public Client 理解为：

```
只读型客户端。
它用来读公开链上数据，不需要用户授权，也不负责签名。
```

它能做的事包括：

```
- 获取区块号
- 查余额
- 查交易
- 读合约 view / pure 函数
- 估算 gas
- 查 logs / events
- 等交易回执
```

官网说明，Public Client 是访问公共 JSON-RPC 方法的接口，比如获取区块号、交易、读取智能合约等。

## Wallet Client

我把 Wallet Client 理解为：

```
签名型客户端。
只要涉及“用户账户”“签名”“发交易”，就要用 Wallet Client。
```

它能做的事包括：

```
- 获取钱包地址
- 请求用户授权地址
- 签名消息
- 签名 typed data
- 发交易
- 写合约
- 切链
```

官网说明，Wallet Client 用于和 Ethereum Accounts 交互，可以获取账户、执行交易、签名消息等。它支持 JSON-RPC Accounts，比如浏览器钱包、WalletConnect，也支持 Local Accounts，比如私钥或助记词账户。

## Test Client

这个阶段我先知道它存在即可。

```
Test Client = 本地测试链/开发链专用工具
```

它会用于 Anvil、Hardhat、Ganache 之类的环境，比如挖块、冒充账户、改链状态。对我现在学 AI Agent + Web3 原型来说，前期重点还是 Public Client 和 Wallet Client。

* * *

# 4\. Transport：请求从哪里出去

我把 Transport 理解为：

```
Transport = RPC 请求通道
```

Client 本身只是能力集合，但真正把请求发到链上的，是 Transport。官网说，Transport 是负责执行外发请求，也就是 RPC 请求的中间层。Viem 主要有 HTTP、WebSocket、Custom 三类 Transport。

## HTTP Transport

官网提醒，如果不传 URL，Viem 会回退到 chain 上的公共 RPC URL，但生产环境强烈建议使用经过认证的 RPC Provider URL，以避免被限流。

我的理解：

```
学习阶段：
可以用公共 RPC，先跑通。

正式项目：
不要依赖免费公共 RPC。
要用 Alchemy / Infura / QuickNode / thirdweb / 自建节点等稳定 RPC。
```

## WebSocket Transport

WebSocket 更适合监听型任务：

```
- 监听新区块
- 监听 pending transactions
- 监听合约事件
```

官网说明，`webSocket` Transport 通过 WebSocket JSON-RPC API 连接，并支持 keepAlive、reconnect、retry 等配置。

我的理解：

```
普通读一次数据，用 HTTP 就行。
需要持续监听变化，WebSocket 更自然。
```

## Custom Transport

Custom Transport 主要用于接入 EIP-1193 provider，比如浏览器注入的钱包对象：

这就是前端浏览器里接 MetaMask 这类钱包时常见的写法。官网 Wallet Client 示例也是用 `custom(window.ethereum!)` 来接浏览器钱包。

* * *

# 5\. Action：我要具体做哪件事

Viem 不是让我直接手写 `eth_getBalance`、`eth_sendTransaction` 这些 JSON-RPC 方法，而是把它们包装成 Actions。

我把 Action 理解为：

```
Action = 一个具体链上操作
```

```
Public Actions：读公开链上数据，不需要签名。
Wallet Actions：需要钱包权限或签名能力。
```

官网说，Public Actions 一一对应 public Ethereum RPC 方法，比如 `eth_blockNumber`、`eth_getBalance`，用于 Public Client，不需要特殊权限，也不提供签名能力。

Wallet Actions 一一对应 wallet 或 signable Ethereum RPC 方法，比如 `eth_requestAccounts`、`eth_sendTransaction`，需要特殊权限，并提供签名能力。

所以我以后看到一个需求，要先判断：

```
这个操作只是读取公开数据吗？
是 → Public Client / Public Action

这个操作需要用户授权、签名、发交易吗？
是 → Wallet Client / Wallet Action
```

* * *

# 6\. 读合约：readContract

读合约就是调用 Solidity 合约里的 `view` 或 `pure` 函数。

我对它的理解：

```
readContract = 不改变链上状态的合约读取
```

官网说明，read-only 函数只能读取状态，不能修改合约状态，不需要 gas，任何用户都可以调用。`readContract` 内部使用 Public Client，通过 ABI 编码数据调用 `call`。

**ABI 不是装饰品，它决定 Viem 能不能知道函数名、参数类型、返回值类型。**

* * *

# 7\. 模拟合约：simulateContract

这是 Viem 里非常重要的一步。

我把 `simulateContract` 理解为：

```
先在本地/节点视角预演一次交易，看它会不会成功。
```

它适合用于写合约前的检查：

```
我准备 mint，但不知道会不会 revert。
我准备 transferFrom，但不知道 allowance 够不够。
我准备调用某个函数，但不知道参数是否正确。
```

官网说明，`simulateContract` 用于模拟和验证合约交互，可以获取写函数的返回数据和 revert reason；它不需要 gas，也不会改变链上状态，和 `readContract` 很像，但支持合约写函数。

最重要的模

官网也推荐把 `simulateContract` 和 `writeContract` 配合使用：先验证合约写入是否会成功，如果没有抛错，再真正执行写入。

这点很重要。以后我写 Web3 项目，不能一上来就 `writeContract`。

* * *

# 8\. 写合约：writeContract

写合约就是调用会改变链上状态的函数。

我把它理解为：

```
writeContract = 构造并发送一笔交易，让合约状态发生变化
```

比如：

```
- mint()
- transfer()
- approve()
- stake()
- withdraw()
- claim()
```

官网说明，Solidity 里的 write 函数会修改区块链状态，需要 gas，因此需要广播交易。`writeContract` 内部使用 Wallet Client 调用 `sendTransaction`，并发送 ABI 编码后的 data。文档还强调，`writeContract` 本身不会验证这次合约写入一定成功，强烈建议执行前用 `simulateContract`。

写合约返回的不是函数返回值，而是交易 hash：

官网也明确说，`writeContract` 只返回 Transaction Hash。如果我想知道写函数的返回数据，要用 `simulateContract`；因为真正上链执行写交易时，我拿到的是交易哈希，不是普通函数返回值。

这背后的第一性原理是：

```
普通函数调用：
我调用 → 马上返回结果

链上写交易：
我构造交易 → 用户签名 → 广播 → 等打包 → 得到 receipt
```

所以不要把链上写操作当成本地函数调用。

* * *

# 9\. 等交易确认：waitForTransactionReceipt

拿到交易 hash 不等于成功。

我现在要把交易生命周期记清楚：

```
用户签名
  ↓
交易广播
  ↓
拿到 hash
  ↓
交易进入 mempool
  ↓
被打包进区块
  ↓
得到 receipt
  ↓
才知道成功或失败
```

Viem 的 `waitForTransactionReceipt` 会等待交易被包含进区块，默认是一确认，然后返回交易回执；它还支持 replacement detection，比如交易被加速、替换或取消。

我的规则：

```
hash 只是“交易已广播”的凭证。
receipt 才是“交易已上链”的证据。
```

* * *

# 10\. Contract Instance：少重复写 address 和 ABI

但如果我在一个文件里反复操作同一个合约，每次都传 `address` 和 `abi` 很啰嗦。Viem 提供 `getContract` 创建 Contract Instance。

我把 Contract Instance 理解为：

```
把 address + ABI + client 绑定在一起，
生成一个类型安全的合约对象。
```

官网说明，Contract Instance 是由 `getContract` 创建的类型安全接口，需要传 ABI、地址以及 Public 和/或 Wallet Client；创建后可以调用合约方法、获取事件、监听事件等。

不过这里有一个性能/包体积取舍：官网提醒，Contract Instances 虽然能减少重复代码，但会引入多个 contract actions；如果只需要少数几个方法，并且极度在意 bundle size，可能更适合用单独 action。

我的实践判断：

```
学习阶段 / 小项目：
用 Contract Instance 更直观。

极度追求包体积的前端：
用 readContract / writeContract 单独调用。
```

* * *

# 11\. Account：谁来签名

我以前容易把“钱包”和“账户”混为一谈。学 Viem 后要分清：

```
Wallet：
管理账户和签名能力的软件/环境，比如 MetaMask、WalletConnect、私钥钱包。

Account：
真正发起交易、签名消息的身份，比如某个地址或私钥账户。
```

Viem 的 Wallet Client 支持两类账户：

```
JSON-RPC Account：
签名交给钱包，比如 MetaMask。
前端请求钱包签名，但私钥不进入我的代码。

Local Account：
私钥/助记词在本地代码里，Viem 可以直接用私钥签名。
更适合后端、脚本、机器人、测试环境。
```

官网说明，JSON-RPC Account 会把交易和消息签名交给目标钱包，例如通过 `window.ethereum` 使用浏览器扩展钱包；Local Account 则是在执行 JSON-RPC 方法前，用私钥完成交易和消息签名。

```
前端页面里不要硬编码私钥。
Local Account 更适合后端脚本、测试机器人、受控环境。
浏览器用户交互一般用 JSON-RPC Account。
```

* * *

# 12\. TypeScript：不是锦上添花，而是安全网

Viem 很重视 TypeScript。官网说 Viem 设计目标是尽可能类型安全，目前类型要求 TypeScript 5.0.4 或更高，并建议 `tsconfig.json` 开启 `strict: true`。

```
balanceOf 需要 address 参数
返回值是 bigint
不能随便传字符串、数字或错误函数名
```

官网说明，Viem 可以基于 ABI 和 EIP-712 Typed Data 推断类型；要让推断生效，需要把 ABI 用 `as const`，或者直接 inline 定义。文档还提醒，如果类型推断没生效，通常是忘了加 const assertion。

我的学习重点：

```
Web3 里类型安全不是“代码洁癖”。
它是在防止我把函数名写错、参数传错、地址类型搞错、交易构造错。
```

* * *

# 13\. 错误处理：不要只写 console.log

Viem 的错误处理也比较体系化。官网说，每个模块都会导出对应的 error type，比如 `getBlockNumber` 会导出 `GetBlockNumberErrorType`，可以用来给 catch 语句做强类型处理。`ract` 页面也展示了捕获合约自定义错误的方式，并提醒 ABI 里要包含 custom error item，才能访问相关错误数据。

```

- 用户拒绝签名
- 钱包没连接
- 链不对
- RPC 限流
- gas 不够
- 合约 revert
- 参数错误
- nonce 问题
- 交易被替换
```
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->


## 1\. Wagmi

Wagmi 是一个用于构建以太坊前端应用的工具库。官方给它的定位是：**React Hooks library for Ethereum**，也就是“给 React 前端用的一套以太坊交互 Hooks”。它的目标不是写智能合约，而是帮助前端完成钱包连接、读链上数据、发交易、签名、多链切换、监听状态等工作。

可以把它理解成：

```
普通 Web 前端：
React 页面  ←→  后端 API  ←→  数据库

Web3 前端：
React 页面  ←→  Wagmi  ←→  钱包 / RPC / 智能合约 / 链上数据
```

Wagmi 的价值在于：你不用自己从零处理钱包连接、多链配置、RPC 请求、异步状态、缓存、交易等待、错误状态等一堆细节。官方也明确说，构建 Ethereum 应用很难，因为应用通常要处理连接钱包、多链、签名、交易、事件监听、刷新过期链上数据等问题。Wagmi 的定位就是把这些复杂度包装起来，让开发者更专注于应用体验。

* * *

## 2\. 它解决的核心问题

从第一性原理看，一个 Dapp 前端至少要解决四件事：

```
第一，知道用户是谁：
用户连接钱包，前端拿到地址。

第二，知道用户在哪条链上：
以太坊主网？Sepolia 测试网？Base？Optimism？

第三，读取链上状态：
查余额、查合约状态、查 NFT、查交易结果。

第四，让用户发起链上动作：
转账、mint NFT、调用合约、签名消息。
```

这些事情如果手写，会非常烦：

```
- 要识别不同钱包
- 要处理用户拒绝签名
- 要处理链不对
- 要处理交易 pending
- 要等待交易上链
- 要处理 RPC 报错
- 要防止重复请求
- 要缓存链上数据
- 要让 React 页面根据状态自动更新
```

Wagmi 的作用就是把这些问题变成一批可组合的 Hooks，比如 `useConnect`、`useConnection`、`useReadContract`、`useWriteContract`、`useSendTransaction`、`useWaitForTransactionReceipt` 等。官方文档列出的 Hooks 覆盖账户、钱包、合约、交易、签名、ENS、事件监听等场景。

* * *

## 3\. Wagmi 的底层结构

Wagmi 不是单独工作的。它主要站在两个东西之上：

```
Wagmi
├─ Viem：底层以太坊 TypeScript 接口，负责真正和链交互
└─ TanStack Query：负责异步请求、缓存、加载状态、错误状态
```

官方文档说，Viem 是一个底层 TypeScript Ethereum 接口，提供 JSON-RPC 抽象、智能合约交互、钱包签名、编码解析等能力；Wagmi Core 本质上是在 Viem 上做了一层包装，增加多链配置和自动账户管理。

TanStack Query 的作用是管理异步数据。Wagmi Hooks 不只是 Core Actions 的包装，还会利用 TanStack Query 处理获取、缓存、同步、更新异步数据的问题。没有这层抽象，你就要自己处理 loading、error、success、竞态条件、缓存 key 等问题。

所以它的分层可以记成：

```
React 组件
  ↓
Wagmi Hooks
  ↓
Wagmi Config / Connectors
  ↓
Viem Client
  ↓
RPC 节点 / 钱包 / 智能合约
  ↓
区块链
```

* * *

## 4\. 核心概念

### config：全局配置中心

`createConfig` 用来创建 Wagmi 的配置对象。它至少要告诉 Wagmi：

```
- 支持哪些链 chains
- 每条链用什么 RPC 通道 transports
- 支持哪些钱包 connectors
```

官方示例中，`createConfig` 可以配置 `mainnet` 和 `sepolia`，并为每条链配置 `http()` transport。文档还说明，`transports` 是 chain ID 到 Transport 的映射，Wagmi 内部会用它创建对应的 Viem Client。

### transports：你怎么访问链

Transport 可以粗暴理解成“RPC 访问方式”。

如果你用免费公共 RPC，可能不稳定；如果是正式项目，一般会换成 Alchemy、Infura、QuickNode、自建节点等 RPC 地址。

### connectors：你支持哪些钱包

Connector 是钱包连接器。官方文档说 Connectors 用于流行的钱包提供商和协议，比如 injected、MetaMask、WalletConnect、Coinbase Wallet、Safe 等。

可以理解成：

```
connector = 钱包适配器

MetaMask 有 MetaMask 的连接方式
WalletConnect 有 WalletConnect 的连接方式
Coinbase Wallet 有 Coinbase Wallet 的连接方式
Safe 有 Safe 的连接方式
```

* * *

## 5\. 安装与初始化流程

官方推荐新项目可以用 `create-wagmi` 快速创建；手动安装 React 项目时，需要安装 `wagmi`、`viem@2.x` 和 `@tanstack/react-query`。文档也说明，Viem 负责以太坊操作，TanStack Query 负责请求、缓存等异步状态管理。

```
pnpm add wagmi viem@2.x @tanstack/react-query
```

初始化分三步：

```
第一步：创建 config
第二步：用 WagmiProvider 包住 React 应用
第三步：再用 QueryClientProvider 包住应用
```

官方文档要求把应用包在 `WagmiProvider` 里，并把前面创建的 `config` 传进去；同时还要在里面加入 TanStack Query 的 `QueryClientProvider`。

典型入口文件：

```
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {/* 你的页面 */}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
```

这一步非常关键。没有 Provider，React 组件里的 Wagmi Hooks 就拿不到全局配置和缓存上下文。

* * *

## 6\. 最重要的心智模型：Query 和 Mutation

Wagmi Hooks 分两类：

```
Query：读数据
Mutation：改数据 / 产生副作用
```

官方文档说，Queries 用于获取数据，比如获取区块号、读取合约；通常默认在组件挂载时执行，并且有唯一 Query Key。Mutations 用于改变数据，比如连接/断开账户、写合约、切换链；通常由用户交互触发。

这点特别重要：

```
读余额、读合约、查 ENS：
一般是 Query

连接钱包、发交易、写合约、切链：
一般是 Mutation
```

为什么？因为读链上数据不会改变区块链状态；写合约、转账、签名这些行为会产生用户确认、交易广播、链上状态变化。

* * *

## 7\. 连接钱包

连接钱包是 Dapp 的入口。官方说，用户连接钱包后，才能执行写合约、签名消息、发送交易等任务。Wagmi 提供了构建 Connect Wallet 模块所需的 Hooks，也可以使用第三方库如 ConnectKit、Dynamic、Privy，它们也构建在 Wagmi 之上。

自己写连接钱包时，基本流程是：

```
第一步：在 config 里配置 connectors
第二步：用 useConnect / useConnectors 展示钱包选项
第三步：用户点击钱包按钮
第四步：调用 connect({ connector })
第五步：用 useConnection 读取当前连接状态
第六步：用 useDisconnect 断开连接
```

* * *

## 8\. 读合约：useReadContract

读合约就是调用智能合约里的 `view` 或 `pure` 函数。官方文档说明，`useReadContract` 可以读取合约只读函数；这类函数只能读取状态，不能修改状态，因此不需要 gas，任何用户都可以调用。

典型场景：

```
- 查 ERC20 余额
- 查 NFT owner
- 查 totalSupply
- 查某个用户是否 mint 过
- 查合约里的配置参数
```

注意一个坑：如果参数还没准备好，不要让 Hook 立刻执行。官方给出的做法是使用 `query.enabled`，比如只有 `address` 存在时才读取余额。

* * *

## 9\. 写合约：useWriteContract

写合约就是调用智能合约里的 `payable` 或 `nonpayable` 函数。官方文档说，这类函数会修改链上状态，需要 gas，因此会广播交易。写合约内部本质上就是发交易。

典型场景：

```
- mint NFT
- approve 授权
- transfer 转 token
- deposit 存款
- withdraw 提款
- stake 质押
```

基本流程：

```
第一步：用户连接钱包
第二步：前端收集参数
第三步：调用 writeContract
第四步：钱包弹窗让用户确认
第五步：交易广播，得到 hash
第六步：等待交易确认
```

* * *

## 10\. 发普通交易：useSendTransaction

如果不是调用合约，而是单纯从一个地址给另一个地址转 ETH，可以用 `useSendTransaction`。官方的 Send Transaction 指南使用 `useSendTransaction` 和 `useWaitForTransactionReceipt`，并在表单里收集地址和值，然后调用 `sendTransaction({ to, value })`。

这里 `parseEther('0.01')` 来自 Viem，用来把人类可读的 ETH 数量转换成链上需要的整数单位。

* * *

## 11\. 等交易确认：useWaitForTransactionReceipt

很多新手会犯一个错误：以为拿到交易 hash 就等于成功。

其实不是。

```
用户确认交易
  ↓
交易广播出去，得到 hash
  ↓
交易进入 mempool
  ↓
矿工/验证者打包
  ↓
交易上链
  ↓
交易可能成功，也可能失败
```

所以发交易或写合约后，通常要继续等 receipt。Wagmi 的指南里，无论是发送交易还是写合约，都配合使用 `useWaitForTransactionReceipt`。

* * *

## 12\. TypeScript 很重要

Wagmi 强调类型安全。官方文档说 Wagmi 被设计得尽可能类型安全，并且当前类型要求 TypeScript `>=5.9.3`；同时建议开启 `strict: true`。文档还提到可以通过“注册 config”或把 `config` 直接传给 hooks，使 React Context 边界之外也能获得强类型推断。

对你来说，TypeScript 的意义不是“装逼”，而是防止你在 Web3 里犯低级错误。

比如：

```
- chainId 写错
- 合约函数名拼错
- 参数类型传错
- 地址格式不对
- ABI 和函数调用不匹配
```

Web2 里写错可能只是页面报错；Web3 里写错，轻则交易失败，重则钱真的没了。所以类型安全在链上前端里非常有价值。

* * *

## 13\. React 版和 Core 版的区别

官网有 React 和 Core 两条线。React 版是最常用的，提供 Hooks；Core 版是 VanillaJS library，不依赖 React，使用的是 actions，比如 `getConnection`、`getEnsName` 等。官方 Core 文档说明，`@wagmi/core` 也是用 `createConfig` 配置 chains 和 transports，然后把 config 传给 actions 使用。

简单说：

```
你写 React 前端：
优先学 wagmi/react，也就是普通 wagmi 包里的 Hooks。

你写非 React 环境：
可以看 @wagmi/core。
```
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->



# OpenZeppelin Contracts 学习笔记

## 1\. 先别把它理解成“框架”

OpenZeppelin Contracts 本质上是一套 **Solidity 智能合约组件库**。它不是帮你自动写完整项目，而是把智能合约里最容易写错、最常重复、最需要安全审计的部分提前封装好，比如 ERC20、ERC721、权限控制、治理、升级合约等。官方对它的定位是“secure smart contract development”的基础库，提供社区验证过的代码、常见标准实现、基于角色的权限方案和可复用 Solidity 组件。

一句话理解：

> 自己从零写合约，相当于自己造轮子，还容易把刹车线接错。  
> OpenZeppelin 是别人反复测试过的轮子，但你仍然要知道轮子装在哪里、谁能踩油门、什么时候会爆胎。

## 2\. 安装时第一个坑：版本不是随便选的

Hardhat/npm 项目里一般直接装：

```
npm install @openzeppelin/contracts
```

官方说明这个命令默认安装 `latest`，也就是经过审计的稳定版本；如果装 `@dev`，则是功能完成但还没审计的版本。Foundry 用 git 安装时，官方特别提醒不要长期依赖 `master` 分支，因为 release 流程里有安全措施，而 `master` 分支不保证这些安全流程。

这里要记住：

-   学习阶段可以看新东西。
    
-   真要部署到链上，优先用 `latest`。
    
-   不要复制网上某段“看起来能跑”的 OpenZeppelin 代码。
    
-   不要为了“魔改”库文件而直接改依赖包源码。
    

官方也明确建议：使用已经安装的库代码，不要从网上复制粘贴，也不要自己修改库代码；库只会部署你实际用到的部分，不需要担心无用代码白白增加 gas。

## 3\. Token 的第一性原理：不是“币在钱包里”，而是“合约里有账本”

很多新手会误以为 token 是某种“存在钱包里的东西”。文档里讲得很朴素：所谓“发送 token”，本质上是在调用某个 token 合约的方法；token 合约可以粗略理解成一张地址到账户余额的映射表，再加上一些修改余额的方法。某人“拥有 token”，只是因为他在这个合约里的余额不为零。

所以 ERC20、ERC721、ERC1155 的差异，不是“长得不一样”，而是它们描述的账本类型不同。

## 4\. ERC20：适合“每一份都一样”的东西

ERC20 用来表示同质化资产。一个 token 和另一个 token 没有区别，适合货币、积分、治理投票权、质押凭证等。官方示例里，继承 `ERC20` 后，在构造函数里设定名称和符号，再用 `_mint` 给部署者初始供应量。
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->




# 从第一性原理理解 OpenAI Agents SDK

理解 OpenAI Agents SDK，不能先把它看成一个“更高级的聊天机器人框架”。这样理解容易走偏。它真正解决的问题，不是让大模型“更像人”，而是把大模型放进一个可以执行任务、调用工具、保存状态、检查风险、追踪过程的软件系统里。

从最底层看，大模型本质上只是一个根据上下文生成输出的函数。输入一段内容，它生成一段输出。这个能力很强，但它本身还不是一个完整的应用系统。因为真实任务往往不是回答一句话，而是需要一步一步完成：先理解用户意图，再决定是否需要查资料、读文件、调用 API、运行代码、交给其他专家处理，最后整理成结果。这个过程中，还要考虑上下文怎么保存、错误怎么处理、工具怎么限制、行为怎么审计、结果怎么评估。

所以，Agents SDK 的基本定位是：它不是单纯包装 OpenAI API 的库，而是一个给大模型补上“运行时”的框架。普通模型调用像是“问一句，答一句”；Agent 系统则像是“接到任务后，持续判断、行动、观察反馈，再继续行动，直到任务完成”。

也就是说，OpenAI Agents SDK 的核心价值，是把一次性的 LLM 调用，升级为一个可运行、可控制、可观察的任务执行系统。

* * *

## 一、Agent：不是人格，而是执行单元

很多人一开始容易把 Agent 想象成一个“虚拟人格”或者“AI 助手”。但从工程角度看，这个理解并不准确。Agent 不是一个玄乎的智能生命，而是一个被配置过的大模型执行单元。

一个 Agent 通常包含几部分：

-   使用哪个模型；
    
-   要遵守什么 instructions；
    
-   可以调用哪些 tools；
    
-   能不能把任务交给其他 Agent；
    
-   输出有没有固定格式；
    
-   输入输出有没有安全检查；
    
-   运行过程中有没有 hooks 和 tracing。
    

可以简化理解成：

```
Agent = LLM + instructions + tools + runtime behavior
```

这句话很重要。普通 prompt 只是告诉模型“应该怎么说话”；而 Agent 不只是说话，它还被放进一个执行环境里，可以调用工具、转交任务、保存上下文、触发检查。

因此，Agent 的重点不是“角色扮演”，而是“能力边界”。

定义一个 Agent，本质上是在定义：

它负责什么任务；  
它不负责什么任务；  
它可以使用哪些外部能力；  
它在什么情况下应该停止；  
它的输出应该长什么样。

如果把 Agent 仅仅理解成“写一个很长的提示词”，那就太浅了。真正的 Agent 是 prompt、工具、状态、运行时和约束机制的组合。

* * *

## 二、Runner：让 Agent 真正跑起来的执行引擎

Agent 本身只是配置，真正让它动起来的是 Runner。

可以把 Agent 理解成“人设和能力说明书”，把 Runner 理解成“执行引擎”。Runner 会负责一轮又一轮地调用模型，根据模型输出判断下一步该做什么。

它的运行过程大概是：

```
用户输入任务
↓
Runner 调用当前 Agent
↓
模型判断下一步
↓
如果可以直接回答，就输出最终结果
↓
如果需要工具，就调用工具
↓
工具结果返回给模型
↓
模型继续判断
↓
如果需要转交，就 handoff 给另一个 Agent
↓
直到任务完成或超过最大轮数
```

这就是 Agent 系统和普通聊天机器人的根本区别。

普通聊天机器人是一次响应。  
Agent Runner 是一个循环。

这个循环让模型具备了类似“行动—观察—再行动”的结构。模型不再只是生成一句话，而是在一个受控环境中不断推进任务。

所以，Agentic 的关键，不是“它像人一样聪明”，而是它有一个持续执行任务的 loop。没有这个 loop，所谓 Agent 只是一个带工具说明的聊天模型；有了这个 loop，模型才能真正完成多步骤任务。

* * *

## 三、工具：Agent 影响外部世界的手

大模型本身不会真正上网，不会真正打开文件，不会真正运行代码，不会真正调用数据库。它只能根据上下文生成文本。如果要让它做真实任务，就必须给它工具。

工具的本质，是 Agent 和外部世界之间的接口。

比如：

-   WebSearchTool 让 Agent 能查网页；
    
-   FileSearchTool 让 Agent 能检索文件；
    
-   CodeInterpreterTool 让 Agent 能运行代码；
    
-   自定义 function tool 让 Agent 能调用开发者写的 Python 函数；
    
-   另一个 Agent 也可以被包装成工具，供当前 Agent 调用。
    

从第一性原理看，工具系统可以拆成两部分。

模型负责判断：

“现在需不需要调用工具？调用哪个工具？传什么参数？”

SDK 负责执行：

“真正调用这个工具，把结果拿回来，再塞回上下文。”

这就是工具调用闭环：

```
模型提出工具调用
↓
SDK 执行工具
↓
工具返回结果
↓
结果进入上下文
↓
模型基于新信息继续推理
```

这件事看似简单，但它改变了大模型的性质。

没有工具时，模型只能“说”。  
有工具后，模型才能“做”。

不过也要警惕：工具越强，风险越大。查网页还好，如果工具能发邮件、删文件、执行 shell、修改数据库、调用支付接口，那就不能只靠 prompt 说“请谨慎”。必须有权限控制、参数校验、人工确认和 tracing。

所以工具不是越多越好，而是越清晰越好。每个工具都应该有明确边界：它做什么，不做什么，输入参数是什么，失败时如何处理。

* * *

## 四、多 Agent：不是堆角色，而是任务分工

很多初学者会本能地觉得，多 Agent 系统很高级。比如一个负责规划，一个负责搜索，一个负责写作，一个负责批判，一个负责总结。听起来很酷，但如果没有清晰的任务边界，这种设计很容易变成混乱。

更准确的理解是：

多 Agent 的本质不是“多个 AI 人格聊天”，而是“复杂任务的模块化分工”。

在 OpenAI Agents SDK 中，多 Agent 协作大体有两种方式。

第一种是 agents as tools。

也就是一个主 Agent 保持控制权，把其他专业 Agent 当工具调用。比如有一个 Writer Agent，它可以调用 Research Agent、Code Agent、Critic Agent，但最终由 Writer Agent 统一输出。这种模式适合需要统一口径、统一结构、统一风格的任务。

第二种是 handoff。

也就是一个 Agent 把对话控制权交给另一个 Agent。比如前台 Agent 判断用户是退款问题，就把用户转给 Refund Agent；如果是技术问题，就转给 Tech Support Agent。被转交的 Agent 会接管后续对话。

可以这样区分：

```
主 Agent 统一负责最终答案 → agents as tools

专家 Agent 需要直接接管对话 → handoff
```

这两个机制没有谁更高级，只有适不适合。

如果要做“论文学习笔记 Agent”，更适合用 agents as tools，因为最后的笔记需要统一结构、统一风格。

如果要做“客服分流系统”，handoff 更自然，因为不同业务应该由不同专家直接处理。

需要记住一个原则：

能用单 Agent 稳定解决的任务，不要强行拆成多 Agent。

多 Agent 会增加成本、延迟、上下文污染和路由错误。真正成熟的多 Agent 设计，不是 Agent 数量多，而是边界清楚、协作可靠、失败可追踪。

* * *

## 五、Session：解决上下文连续性

普通模型调用是无状态的。每一次调用，它只知道这次传给它什么。如果第二轮问“那它有什么问题？”，模型必须知道“它”指的是上一轮讨论的对象。

这就是 session 的意义。

Session 负责在多轮运行之间保存对话历史，让 Agent 能够接着上一轮继续工作。

但要特别注意：

Session 不等于长期记忆。

Session 保存的是当前对话历史，解决的是“这一段任务上下文怎么连续”。

它不是知识库，也不是用户画像，更不是自动理解长期目标的记忆系统。

可以这样理解：

```
Session = 当前任务的工作记忆

长期记忆 = 跨任务、跨时间的用户偏好和知识积累

知识库 = 外部文档、资料、向量库、数据库
```

如果把 session 当成长期记忆，就会误用。

比如做论文阅读助手，session 可以保存上一段读到了哪里、刚才解释了什么、用户提出了哪些问题。

但如果要长期记录研究方向、学习偏好、基础薄弱点、项目规划，那就需要更专门的记忆系统，而不是仅靠 session。

所以 session 是必要的，但不是万能的。

* * *

## 六、Guardrails：把不可靠的模型放进可靠边界

大模型输出具有概率性。它可能理解错任务，可能调用错工具，可能生成不合规内容，也可能在高风险任务上过度自信。

因此，Agent 系统必须有 guardrails。

Guardrails 不是一句“请你安全一点”的 prompt，而是外部的、可执行的检查机制。

它可以检查：

-   用户输入是否允许；
    
-   工具调用参数是否合法；
    
-   工具执行前是否需要阻断；
    
-   最终输出是否符合要求；
    
-   是否包含敏感内容；
    
-   是否需要人工确认。
    

Guardrails 可以理解成 Agent 系统里的“制度”和“刹车”。

没有 guardrails 的 Agent，就像一个能联网、能执行代码、能调接口的实习生，但没有审批流程。它可能很能干，也可能造成严重事故。

尤其是涉及真实副作用的任务，比如：

-   发邮件；
    
-   删除文件；
    
-   修改数据库；
    
-   执行 shell；
    
-   下单支付；
    
-   操作用户账号；
    
-   提交代码；
    

这些都不能只靠模型自己判断。必须有工具级限制、参数校验、权限控制、人工确认和日志记录。

所以，不能把 Agent 安全寄托在“模型会听话”上。

成熟的 Agent 系统一定是：

模型负责生成建议，系统负责执行约束。

* * *

## 七、Tracing：没有追踪，就没有真正的调试

Agent 系统最大的问题不是“它会出错”，而是“它出错以后，开发者不知道它为什么出错”。

它可能在第一步就理解错了用户意图；  
也可能选错了工具；  
也可能工具参数错了；  
也可能工具返回结果被误读；  
也可能 handoff 给了错误的 Agent；  
也可能上下文太长导致关键信息丢失；  
也可能最终输出看似正确，但中间过程完全不可靠。

所以 tracing 非常关键。

Tracing 能看到：

-   模型调用了几次；
    
-   每次输入输出是什么；
    
-   调用了哪些工具；
    
-   工具参数是什么；
    
-   工具返回了什么；
    
-   是否发生 handoff；
    
-   哪个 Agent 生成最终结果；
    
-   哪一步耗时最长；
    
-   哪一步 token 成本最高；
    
-   guardrail 有没有触发。
    

这对学习 Agent 非常重要。

因为如果只看 final output，只能凭感觉判断好坏。  
但如果看 trace，就能具体分析错误发生在哪里。

没有 tracing 的 Agent 开发，很容易变成玄学调 prompt。  
有 tracing，才是真正的软件工程。

* * *

## 八、Responses API 和 Agents SDK 的关系

Responses API 更像底层模型接口。  
Agents SDK 是建立在它之上的运行时框架。

如果只需要问模型一个问题，或者开发者想完全控制工具调用和状态管理，那么直接用 Responses API 就可以。

但如果要做多步骤任务，比如：

-   自动调用工具；
    
-   多 Agent 协作；
    
-   保存上下文；
    
-   进行 handoff；
    
-   加 guardrails；
    
-   做 tracing；
    
-   构建比较完整的 Agent workflow；
    

那 Agents SDK 更合适。

可以这样理解：

```
Responses API = 发动机

Agents SDK = 带方向盘、变速箱、仪表盘、安全带的车
```

发动机本身很重要，但要真正开起来，还需要运行时系统。

* * *
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->





Safe 是一个围绕 **Smart Account，智能账户** 展开的 Web3 基础设施项目。它的核心判断是：传统外部拥有账户，也就是 EOA，虽然长期承担了数字资产管理入口的角色，但在安全性、灵活性、用户体验和大规模普及方面存在结构性限制。Safe 试图通过模块化智能账户、开放合约标准、账户抽象基础设施和官方钱包界面，将数字资产、身份、数据与应用权限的管理，从“私钥直接控制资产”的模式，推进到“智能合约账户承载规则、权限和安全机制”的模式。Safe 官方文档把这一目标概括为：让用户不只是读写数字世界，而是真正拥有数字身份、金融资产、数字艺术等链上对象。

* * *

## 一、问题背景：为什么传统钱包不够用

在以太坊早期和多数 Web3 应用中，用户主要通过 **EOA，Externally-Owned Account，外部拥有账户** 管理资产。EOA 的基本特征是：账户由私钥控制，本身没有代码，用户通过私钥签名交易来发起链上操作。Ethereum 官方文档也将账户分为两类：EOA 由私钥控制，合约账户由部署在链上的代码控制。

这种设计足够简单，但问题也很明显。Safe 文档指出，EOA 虽然是数字资产管理的基础，但在主流用户进入 Web3 时存在很多限制：助记词难以安全保存，账户功能缺乏弹性，安全能力有限，这些问题会阻碍真正意义上的数字所有权普及。

用更直白的话讲，EOA 的问题是：**一个私钥几乎决定一切**。

```
私钥在，资产在；
私钥丢，资产可能永远丢；
私钥泄露，资产可能瞬间没。
```

这对于极客用户还能勉强接受，但对普通用户、企业、DAO、AI Agent、多成员团队来说，就显得非常粗糙。现实中的资产管理通常需要多人审批、权限分层、额度限制、恢复机制、自动化规则和审计记录，而传统 EOA 很难原生支持这些能力。

* * *

## 二、Safe 的基本定位：智能账户基础设施

Safe 的定位不是单纯做一个钱包界面，而是做 **modular smart account infrastructure，模块化智能账户基础设施**。Safe 官方文档称，Safe 致力于构建通用、开放的合约标准，用于数字资产、数据和身份的托管，从而让开发者能够创建各种应用和钱包。

这里要抓住一个关键点：

```
Safe 的核心不是“钱包 App”，而是“智能账户标准与基础设施”。
```

钱包只是用户看到的前端界面，真正重要的是后面的合约账户结构、权限管理逻辑、签名验证机制、模块扩展能力和开发工具。

因此，Safe 的价值可以分成两层：

```
第一层：用户层
用户通过 Safe Wallet 管理资产、发起交易、设置多签、连接应用。

第二层：开发者层
开发者通过 Safe Infrastructure 把 Safe Smart Account 集成进自己的产品。
```

Safe 文档也明确区分了两大方向：一是 **Safe Infrastructure**，即帮助开发者集成 Safe Smart Account 与账户抽象能力的工具和基础设施；二是 **Safe Wallet**，即面向个人和机构的官方资产管理界面。

* * *

## 三、核心概念：Smart Account 不是普通钱包，而是可编程账户

Safe 的中心概念是 **Smart Account，智能账户**。在 Safe Glossary 中，智能账户也被称为智能合约账户，它利用智能合约的可编程性来扩展账户功能，并相对 EOA 提升安全性；智能账户可以由一个或多个 EOA 或其他智能账户控制。

这句话非常关键。EOA 像一把钥匙，智能账户像一套保险柜系统。

EOA 的逻辑大概是：

```
谁有私钥，谁能动账户。
```

智能账户的逻辑可以变成：

```
满足某些规则，账户才执行操作。
```

这些规则可以包括：

```
需要 2/3 个管理员签名；
每天最多转出 1000 USDC；
某些地址只能执行特定操作；
大额交易必须人工确认；
可以批量执行多笔交易；
可以通过恢复机制替换丢失的密钥；
可以让第三方代付 gas；
可以让 AI Agent 在额度范围内执行交易。
```

Safe Glossary 总结了智能账户常见能力，包括多签、交易批处理、账户恢复和 gasless transaction。

所以，智能账户不是“更漂亮的钱包”，而是把账户本身从“私钥控制的地址”升级为“由合约规则控制的权限系统”。

* * *

## 四、账户抽象：把账户从私钥模型推进到合约模型

Safe 文档中的另一个核心背景是 **Account Abstraction，账户抽象**。Safe Glossary 将账户抽象定义为一种新范式：通过用智能账户替代 EOA，改善用户与区块链交互的体验。其常见功能包括减少对助记词的依赖、简化多链交互、账户恢复、免 gas 交易和交易批处理。

这里的“抽象”不是玄学，意思是：**把用户不该直接面对的复杂细节隐藏起来**。

传统链上交互要求用户理解很多东西：

```
私钥是什么？
助记词怎么保存？
gas 是什么？
为什么必须有 ETH 才能转 USDC？
每次交易为什么都要签名？
丢了私钥怎么办？
```

账户抽象想做的是，把这些底层复杂性封装进智能账户和基础设施里，让用户体验更接近传统互联网应用，但资产控制权仍然留在链上账户体系中。

Ethereum 官方对账户抽象的解释也类似：大多数用户目前通过 EOA 使用以太坊，这会限制交互方式，例如难以批量交易，并要求用户始终持有 ETH 来支付交易费。

* * *

## 五、Safe 的基础设施栈：SDK、API、Smart Account

Safe Infrastructure 页面将 Safe Infrastructure 定义为一个开源、模块化的账户抽象技术栈，用于把 Safe Smart Account 集成到数字平台中。这个技术栈的目标是提供经过测试的核心合约，以及灵活、安全的扩展能力。

Safe Infrastructure 主要分为三组：

```
Safe SDK
帮助开发者降低操作智能合约账户的复杂度，并提供与外部服务商集成的开发工具包。

Safe API
为界面和应用提供 Safe 账户相关信息，包括交易服务、事件服务等基础能力。

Safe Smart Account
模块化、可扩展的智能合约账户，目标是成为智能合约钱包和应用的标准核心。
```

这些不是简单的“开发文档分类”，而是 Safe 的产品结构。

```
Smart Account 是账户本体；
SDK 是开发者调用账户的工具；
API 是读取账户状态、交易、事件等信息的服务层；
Wallet 是最终用户操作账户的界面。
```

如果用操作系统类比：

```
Safe Smart Account 像底层账户内核；
Safe SDK 像开发者工具；
Safe API 像系统服务接口；
Safe Wallet 像用户图形界面。
```

* * *

## 六、多签机制：Safe 最典型的安全模型

Safe 最出名的能力之一是 **multi-signature，多签账户**。Safe Glossary 解释，多签账户是一种智能账户，允许用户根据需要自定义所有权和控制结构；多个 EOA 可以被指定为 owner，用户还可以设定一笔交易执行前需要多少 owner 批准。

多签的本质不是“多几个人签名”这么简单，而是把账户控制权从单点私钥，变成一种阈值治理结构。

常见形式包括：

```
1/1
一个 owner，一个签名即可执行。安全性接近普通钱包，但可使用智能账户能力。

N/N
所有 owner 都必须签名。安全性强，但灵活性差，任何一个人丢失私钥都可能卡住账户。

M/N
共有 N 个 owner，只需要 M 个签名即可执行。比如 2/3、3/5、5/9。
这是团队、DAO、机构最常见的模式。
```

Safe 的 threshold，也就是阈值，决定了一个 Safe 交易需要多少 owner 确认后才能执行。

多签的意义在于消除单点失败：

```
传统 EOA：
一个私钥泄露，资产可能全部丢失。

Safe 多签：
攻击者需要同时控制足够数量的 owner，才能转走资产。
```

但多签不是无风险。Safe Glossary 也提醒，如果 N/N 配置中任何 owner 丢失私钥，Safe 可能被锁死；即便是 1/1 Safe，如果 owner 丢失私钥且没有恢复机制，也无法恢复账户。

所以多签不是“自动安全”，而是“把安全问题从单私钥管理，升级为权限结构设计”。

* * *

## 七、ERC-4337：账户抽象的标准化路径

Safe 这类智能账户和更广泛的账户抽象生态密切相关，其中一个重要标准是 **ERC-4337**。EIP-4337 官方规范引入了一种更高层的伪交易对象 UserOperation；用户将 UserOperation 发送到单独的 mempool，Bundler 将这些对象打包成交易，并调用 EntryPoint 合约执行。

Safe Glossary 对 ERC-4337 的解释也类似：ERC-4337 引入 UserOperation，用户把 UserOperation 发送到独立 mempool，Bundler 将其打包并提交给 EntryPoint 合约。

简化成流程就是：

```
用户意图
  ↓
UserOperation
  ↓
Bundler 打包
  ↓
EntryPoint 验证并执行
  ↓
Smart Account 执行实际逻辑
```

在这个结构里，几个角色要分清：

```
UserOperation：
用户想执行的操作，不是传统意义上的普通交易。

Bundler：
负责收集、打包 UserOperation，并提交到链上的角色。

EntryPoint：
统一处理 UserOperation 的入口合约。

Smart Account：
真正承载用户账户规则的智能合约账户。

Paymaster：
可以替用户支付 gas，或允许用其他方式承担交易成本。
```

ERC-4337 的重要性在于，它不要求修改以太坊底层协议，而是在更高一层实现账户抽象。ERC-4337 官方文档也强调，它通过 UserOperation、替代 mempool 和链上 EntryPoint 合约，在不改变以太坊基础协议的情况下实现账户抽象能力。

* * *

## 八、Safe 的本质：数字资产托管逻辑的标准化

Safe 文档里有一句话很重要：Safe 通过为数字资产、数据和身份的托管建立通用、开放的合约标准，把数字所有权带给所有人。

这说明 Safe 不只是“一个多签钱包”。它真正想做的是一套 **数字所有权的账户标准**。

所谓数字所有权，不只是“地址里有币”。更完整的数字所有权包括：

```
资产由谁控制；
控制权如何分配；
什么条件下可以转移；
谁可以审批；
谁可以撤销；
谁可以恢复；
谁能代表账户执行某些操作；
这些操作是否可审计；
规则能否升级和扩展。
```

传统 EOA 只能回答一个问题：

```
谁有私钥？
```

Safe Smart Account 可以回答一组问题：

```
谁是 owner？
需要几个 owner 才能批准？
哪些模块可以自动执行？
哪些交易需要限制？
哪些操作可以被守卫合约拦截？
哪些应用可以被集成？
账户能否批量交易、恢复、升级？
```

因此，Safe 的意义在于：**把账户从“地址”变成“制度”**。

* * *

## 九、对 AI Agent 与链上支付的启发

AI Agent 如果要在链上执行任务，不能直接给它一个普通私钥。那样风险太大：

```
私钥泄露怎么办？
Agent 误操作怎么办？
模型被 prompt injection 攻击怎么办？
Agent 能不能只花一小笔钱？
能不能每次大额操作都需要人批准？
能不能限制它只能和某些合约交互？
```

Safe 这类智能账户提供了一种更合理的结构：

```
人类控制 owner 权限；
Agent 被放进受限模块或授权规则里；
小额操作可以自动执行；
大额交易需要人工多签；
异常交易可以被 Guard 拦截；
所有行为保留链上审计记录。
```

这就是为什么 Safe 文档导航里已经出现了与 Agent 相关的教程，例如“Setup your Agent with a Safe account”“Human approval for agent action”“Agent with spending limit”等内容。虽然这些不是 What is Safe 页面的正文重点，但它们说明 Safe 正在把智能账户和 AI Agent 操作权限结合起来。

从这个角度看，Safe 不只是钱包基础设施，也是未来 AI Agent 链上执行的权限底座之一。

* * *

## 十、总结：Safe 要解决的不是“转账”，而是“可信控制权”

Safe 的核心可以总结成一句话：

```
Safe 是一种以智能账户为核心的数字所有权基础设施，它试图用可编程账户替代传统私钥账户，让资产控制从单点私钥模式转向规则化、模块化、可恢复、可审计的账户治理模式。
```

更简洁地说：

```
EOA 解决的是：谁有私钥，谁控制资产。
Safe 解决的是：在什么规则下，谁可以怎样控制资产。
```

它的知识框架可以归纳为：

```
第一，问题层：
传统 EOA 存在安全、恢复、灵活性和用户体验不足。

第二，概念层：
智能账户通过合约逻辑扩展账户能力。

第三，标准层：
账户抽象和 ERC-4337 推动智能账户成为更通用的账户模型。

第四，产品层：
Safe 提供 Safe Smart Account、SDK、API、Wallet 等基础设施。

第五，应用层：
DAO、企业金库、个人资产管理、Web3 应用、AI Agent 支付和自动化交易都可以基于 Safe 构建。
```

学习 Safe 时，不要只把它记成“多签钱包”。这个理解太窄了。

更准确的理解是：

```
Safe = 智能账户标准 + 多签安全模型 + 账户抽象基础设施 + 数字资产权限管理系统。
```

这也是它在 Web3 里的重要位置：它把“钱包”从一个简单的签名工具，推进成了一个可以承载组织治理、资产托管、自动化执行和人机协作的账户层基础设施。
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->






# Agent 进入执行层后的架构变化：以 OpenClaw 为例

## 摘要

Agent 一旦从“回答问题”进入“执行任务”，系统架构就会发生根本变化。传统 LLM 应用的核心是一次请求与一次回复；执行层 Agent 的核心则是一个长期运行的运行时系统。它要接收来自不同渠道的消息，维持会话状态，动态组装上下文，调用工具，产生副作用，并在安全边界内完成真实动作。OpenClaw 的设计很好地体现了这种变化：它不是单纯聊天机器人，而是一个本地优先的 Gateway control plane，负责统一管理 channels、sessions、tools 与 events，并将 agent 接入 WhatsApp、Telegram、Slack、Discord、Signal、iMessage 等消息入口。

* * *

## 一、从“聊天接口”到“Gateway 控制平面”

普通 Chatbot 的架构很简单：用户输入，模型生成，系统返回。此时应用的核心只是一个模型调用入口。

但执行层 Agent 不再只有一个入口。用户可能从 Telegram 发消息，也可能从 Web UI、CLI、移动端节点、定时任务或自动化流程触发 agent。于是系统必须出现一个统一控制平面。OpenClaw 里的 Gateway 就承担这个角色：它是一个长期运行的 daemon，拥有所有 messaging surfaces，并让 CLI、Web UI、macOS app、automations 和节点通过 WebSocket 接入。

这说明，Agent 进入执行层后的第一变化是：系统中心从“模型接口”转移到“运行时网关”。模型只是其中一个组件，真正的中枢变成了 Gateway。Gateway 负责接收消息、识别来源、路由会话、维护连接、发出事件，并把 agent 的执行结果送回原渠道。

因此，执行层 Agent 的架构不再是：

```
User → LLM → Response
```

而是：

```
Channels / Clients / Automations
↓
Gateway
↓
Session + Agent Runtime
↓
Model + Tools + Memory
↓
Events / Replies / Persistence
```

这就是从“聊天应用”到“agent runtime”的第一步。

* * *

## 二、从“一次请求”到“会话生命周期”

传统 LLM 应用可以把一次调用看成无状态请求：输入 messages，得到 response。但执行层 Agent 不能这样处理。它必须知道：这条消息来自哪个渠道、哪个用户、哪个会话；上一次任务是否结束；当前工具是否还在运行；会话记录是否需要写回。

OpenClaw 的 agent loop 明确不是一次模型调用，而是完整的运行路径：intake → context assembly → model inference → tool execution → streaming replies → persistence。官方还指出，一个 loop 是每个 session 下的单次序列化运行，并通过 lifecycle 和 stream events 反映模型思考、工具调用和输出过程。

这意味着：执行层 Agent 处理的不是 request，而是 run。一个 run 需要 runId、session key、队列、锁、超时、abort、写入 transcript 等机制。OpenClaw 会通过 per-session queue 和 global queue 串行化运行，防止工具和 session 状态竞争；transcript 写入也有 session write lock 保护。

所以，执行层 Agent 的第二个架构变化是：状态管理从“保存聊天历史”升级为“会话生命周期管理”。没有 session 管理，agent 会在多入口、多任务、多工具场景下互相污染。

* * *

## 三、从“生成文本”到“调度动作”

Chatbot 的输出主要是文本；执行层 Agent 的输出经常是动作意图。模型会决定是否调用工具，而 runtime 负责检查、执行、回填结果，再把结果交给模型继续推理。

OpenClaw 的 capabilities 文档把 tool 定义为 agent 可以调用的 typed function，例如 `exec`、`browser`、`web_search`、`message`、`image_generate`。这些 visible tools 会作为结构化函数定义交给模型；当 agent 需要读数据、改文件、发消息、调用 provider 或操作外部系统时，就使用工具。

这里最重要的架构变化是：模型不再只是文本生成器，而变成动作规划器。但模型本身不应该直接执行动作。真正执行工具的是 runtime；runtime 还必须做权限检查、参数验证、结果记录与错误处理。

因此，执行层 Agent 必须新增一层工具执行系统：

```
Tool Registry
↓
Tool Schema
↓
Tool Policy
↓
Tool Executor
↓
Tool Result
↓
Context 回填
```

这就是 Agent 从“会说”到“会做”的核心工程变化。

* * *

## 四、从“Prompt 控制”到“Tool Policy 控制”

在普通 LLM 应用中，开发者常常试图用 system prompt 约束模型行为。但进入执行层后，只靠 prompt 是不够的。因为工具代表真实权限：读文件、写文件、执行命令、发消息、搜索网络、创建自动任务，每一个都是对外部世界的能力开放。

OpenClaw 的工具系统把 tool、skill、plugin 区分得很清楚：tool 是可调用动作，skill 是教 agent 如何工作的说明书，plugin 则为系统增加新的运行时能力，例如工具、provider、channel、hook 或 packaged skill。

这说明，Agent 系统的能力边界不能只靠“告诉模型不要做坏事”，而要靠工具可见性和工具权限来控制。模型只能调用 runtime 暴露给它的工具；没有暴露的工具，在模型视野中根本不存在。

所以执行层 Agent 的安全重点从“输出内容是否安全”变成“工具权限是否受控”。这是一个根本变化：

```
普通聊天：
重点是模型说了什么。

执行层 Agent：
重点是模型能调用什么。
```

Prompt 是软约束，Tool Policy 才是硬边界。

* * *

## 五、从“内容安全”到“执行安全”

当 agent 只能聊天时，主要风险是胡说、误导、泄露信息。但当 agent 能执行命令、发消息、读写文件时，风险就升级了。攻击者不一定要让模型输出危险文本，只要能诱导模型调用危险工具，就可能造成真实损害。

OpenClaw 的安全文档明确采用 personal assistant trust model：一个 gateway 对应一个可信 operator boundary。它并不声称能作为 hostile multi-tenant security boundary，不能把多个互不信任用户放在同一个 tool-enabled gateway 中共享。如果多个不可信用户都能给同一个 agent 发消息，就要把他们视为共享了这个 agent 的 delegated tool authority。

这句话非常关键。它说明执行层 Agent 的安全问题不是抽象的“AI 安全”，而是具体的“权限边界安全”。

因此，执行层 Agent 需要的不只是内容过滤，还包括：

```
身份验证
渠道 allowlist
DM pairing
群聊 mention gating
工具 allow/deny
沙箱隔离
文件系统 workspace 限制
命令审批
审计日志
```

Agent 越接近真实执行层，越不能把安全寄托在模型自觉上。真正可靠的安全来自系统边界：谁能触发它，它能看到什么工具，它能访问哪些文件，它能不能执行命令。

* * *

## 六、从“应用”到“运行时系统”

OpenClaw 的价值不只在于“把 AI 接到 Telegram”。它更重要的启发是：一旦 Agent 进入执行层，它就不再是一个模型应用，而是一个小型运行时系统。

这个运行时系统至少包括：

```
Gateway：统一入口与控制平面
Session：会话隔离与生命周期
Agent Loop：模型—工具—模型的执行循环
Tools：真实动作能力
Tool Policy：权限边界
Memory：长期状态
Plugins：能力扩展
Events：流式观测
Security：身份、沙箱、审计
Persistence：运行结果与会话记录
```

所以，架构关注点从“模型怎么回答得更好”转移为“系统如何安全、稳定、可追踪地执行任务”。

这也是理解 Agent 工程化的关键：Agent 的难点不在于让模型多说几句话，而在于让模型在真实环境中受控地行动。

* * *

## 结论

Agent 进入执行层后，架构发生了五个核心变化。

第一，入口从单一聊天框变成多渠道 Gateway。第二，请求从一次性 response 变成有状态 run。第三，输出从文本变成工具调用和动作调度。第四，控制方式从 prompt 约束变成 tool policy 约束。第五，安全问题从内容安全升级为执行安全。

OpenClaw 展示的正是这种架构跃迁：它把 agent 放进一个由 Gateway、Session、Tool、Plugin、Memory、Security 组成的运行时系统中。此时模型只是决策核心之一，不再是整个系统本身。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->







# 1\. 最小安装与启动流程

官方 Quickstart 的重点不是“炫功能”，而是先让一个基本聊天稳定跑起来。文档反复强调：如果 Hermes 不能完成普通聊天，不要急着加 gateway、cron、skills、voice、routing 等高级功能。

最短路线：

```
pip install hermes-agent
hermes postinstall
hermes model
hermes
```

或者用 git installer：

```
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

Windows 官方更推荐先用 WSL2，再在 WSL2 里跑 Linux/macOS/WSL2 的安装命令；原生 Windows 是 early beta。

模型配置是第一大坑。官方要求模型至少 64K context，因为 Hermes 的多步工具调用工作流需要足够上下文；如果本地模型或自建 endpoint 小于 64K，会在启动时被拒绝。

你真正要记：

```
第一步不是折腾插件。
第一步是：

hermes model
↓
选 provider
↓
hermes
↓
确认它能正常多轮对话
↓
确认它能用 terminal / file / web 之类工具
```

* * *

# 2\. Hermes 的核心执行循环

Hermes 的核心类是 `AIAgent`，在 `run_agent.py` 里。官方说这个类负责系统提示词组装、provider 选择、工具调度、conversation history、压缩、重试、fallback、iteration budget、memory flush 等。

它的 agent loop 可以压成：

```
用户输入
↓
追加到 conversation history
↓
构建 / 复用 system prompt
↓
检查上下文是否需要压缩
↓
按 provider 格式组装 API messages
↓
调用模型
↓
如果模型返回 tool_calls：
    执行工具
    把工具结果写回 history
    回到模型调用
↓
如果模型返回 text：
    保存 session
    必要时 flush memory
    返回最终回答
```

官方文档原文的 turn lifecycle 也是这个流程：append user message、build system prompt、preflight compression、build API messages、make API call、parse response；如果有 tool\_calls 就执行工具并 loop back，如果是文本响应就持久化 session 并返回。

这点非常重要：

```
Hermes 的核心不是“模型一次回答”。
Hermes 的核心是“模型 — 工具 — 模型 — 工具”的循环。
```

* * *

# 3\. Toolsets：Hermes 的手脚

Hermes 的 tools 是函数，toolsets 是工具分组，可以按平台启用或禁用。官方列出的工具范围很广，包括 web search、browser automation、terminal execution、file editing、memory、delegation、RL training、messaging delivery、Home Assistant、MCP 等。

常见工具类别：

```
web
= web_search, web_extract

terminal / file
= terminal, process, read_file, patch

browser
= browser_navigate, browser_snapshot, browser_vision

media
= vision_analyze, image_generate, video_generate, text_to_speech

agent orchestration
= todo, clarify, execute_code, delegate_task

memory
= memory, session_search

automation
= cronjob, send_message

integrations
= Home Assistant, MCP server tools, RL tools
```

官方文档还说，可以用：

```
hermes tools
```

查看和配置工具，也可以指定某次聊天启用哪些 toolsets：

```
hermes chat --toolsets "web,terminal"
```

常见 toolsets 包括 `web`、`terminal`、`file`、`browser`、`vision`、`skills`、`memory`、`session_search`、`cronjob`、`code_execution`、`delegation`、`clarify`、`safe`、`rl` 等。

你要把它和 OpenAI Agents SDK 对上：

```
OpenAI Agents SDK 里：
你自己写 function_tool。

Hermes 里：
它已经内置了一大堆工具和工具组。
你主要是配置能不能用、在哪个平台能用、用哪个后端执行。
```

* * *

# 4\. Terminal backend：它能在哪里执行命令

Hermes 的 terminal 工具可以在多个后端执行命令。官方列出 local、docker、ssh、singularity、modal、daytona、vercel\_sandbox 等后端。

理解方式：

```
local
= 直接在你本机执行。方便，但风险最高。

docker
= 在容器里执行。更安全，更适合生产或不完全信任的任务。

ssh
= 在远程服务器执行。适合把 agent 和自己本机隔离。

modal / daytona / vercel_sandbox
= 云端沙箱 / serverless / 远程 workspace。
```

官方特别说 Docker backend 是一个长期运行的 persistent container，不是每条命令新开一个容器；你装过的包、切过的目录、写过的 `/workspace` 文件，在 Hermes 进程生命周期内会保留。

这个设计很关键：

```
Hermes 不是只能在你电脑上“说话”。
它可以在隔离环境里持续执行任务。
```

* * *

# 5\. Memory：它怎么记住你和项目

Hermes 有两类内置持久记忆文件：

```
MEMORY.md
= agent 自己的笔记：环境事实、项目约定、学到的经验。

USER.md
= 用户画像：偏好、沟通风格、期待、技术水平。
```

官方说这两个文件都在 `~/.hermes/memories/`，session 开始时会作为 frozen snapshot 注入 system prompt。注意：记忆在 session 中被修改后会立刻写入磁盘，但不会在当前 session 的 system prompt 中刷新，要到下一个 session 才进入提示词；这样做是为了保持 prompt cache 稳定。

容量很小：

```
MEMORY.md：2200 chars，大约 800 tokens
USER.md：1375 chars，大约 500 tokens
```

所以它不是拿来塞长文档的。官方明确建议保存用户偏好、环境事实、项目约定、修正、完成工作等；不要保存琐碎信息、容易重新发现的事实、大段原始数据、一次性调试上下文。

Hermes 还有 `session_search`，它会把 CLI 和 messaging sessions 存在 SQLite 里，用 FTS5 做全文搜索。官方把 memory 和 session\_search 区分得很清楚：memory 是关键事实，始终进上下文；session\_search 是按需查过去对话，容量不限，不消耗 LLM 调用。

你要这样记：

```
memory
= 必须长期带在身上的小纸条。

session_search
= 过去所有聊天记录的搜索引擎。
```

* * *

# 6\. Skills：Hermes 的“程序性记忆”

Skills 是 Hermes 最有意思的部分之一。官方定义：skills 是 agent 需要时加载的 on-demand knowledge documents，采用 progressive disclosure，目的是减少 token 使用；所有 skills 默认在 `~/.hermes/skills/`。

一个 skill 本质上是一个目录，核心文件是 `SKILL.md`：

```
~/.hermes/skills/
└── some-skill/
    ├── SKILL.md
    ├── references/
    ├── templates/
    ├── scripts/
    └── assets/
```

官方给的 `SKILL.md` 格式包括 frontmatter，例如 name、description、version、platforms、requires\_toolsets、config，然后正文里写 When to Use、Procedure、Pitfalls。

Progressive disclosure 的意思是：

```
Level 0:
只加载技能列表：name + description + category

Level 1:
需要时加载完整 SKILL.md

Level 2:
必要时加载 skill 里的具体参考文件
```

官方说 agent 只在真正需要时加载完整 skill 内容。

这和普通 prompt 最大区别是：

```
普通 prompt：
所有规则一开始都塞进去，浪费上下文。

Hermes skills：
先只给目录，需要哪个再加载哪个。
```

更关键的是：Hermes agent 可以通过 `skill_manage` 自己创建、更新、删除 skills。官方把它叫 procedural memory：当 agent 发现一个非平凡工作流，就能保存成 skill，未来复用。触发场景包括完成 5+ tool calls 的复杂任务、踩坑后找到正确路径、用户纠正了它、发现了非平凡流程。

这就是官方说 “self-improving” 的核心技术抓手之一：

```
不是模型权重变了。
而是 agent 把做事流程沉淀成 SKILL.md。
```

* * *

# 7\. Context Files：项目级指令怎么注入

Hermes 会自动发现并加载项目上下文文件。支持：

```
.hermes.md / HERMES.md
AGENTS.md
CLAUDE.md
SOUL.md
.cursorrules
.cursor/rules/*.mdc
```

官方说明了优先级：每个 session 只加载一种 project context，优先级是 `.hermes.md` → `AGENTS.md` → `CLAUDE.md` → `.cursorrules`；`SOUL.md` 独立加载，用作 agent identity。

`AGENTS.md` 是主要项目上下文文件，用来告诉 agent 项目结构、代码约定、架构和特殊注意事项。Hermes 启动时会加载当前工作目录的 `AGENTS.md`，并且在 agent 访问子目录文件时，逐步发现子目录里的 `AGENTS.md`，避免一开始把所有上下文塞爆。

你应该这样用：

```
AGENTS.md 放项目规则：
- 项目架构
- 代码规范
- 测试命令
- 不要碰哪些文件
- 端口、目录、部署方式

SOUL.md 放 agent 性格：
- 回答风格
- 语气
- 偏好
```

官方还说上下文文件会做安全扫描，超出 20,000 字符会截断。

* * *

# 8\. Delegation：子 agent 并行干活

Hermes 的 `delegate_task` 可以启动 child AIAgent。每个 child agent 有隔离上下文、受限 toolsets、独立 terminal session；子 agent 只把最终摘要带回父 agent 上下文。

最关键的坑：

```
Subagents Know Nothing.
```

官方说，子 agent 开始时是全新 conversation，不知道父 agent 的历史消息、之前工具调用、此前讨论内容。它唯一知道的是父 agent 在 `goal` 和 `context` 字段里传给它的内容。

所以坏写法：

```
delegate_task(goal="Fix the error")
```

好写法：

```
delegate_task(
  goal="Fix the TypeError in api/handlers.py",
  context="具体错误、文件路径、函数名、项目位置、Python 版本、复现方式……",
  toolsets=["terminal", "file"]
)
```

官方默认最多并发 3 个 subagents，可配置，没有硬上限。

你要这样理解：

```
delegation 不是“让几个 agent 聊天”。
它是把明确子任务丢给隔离 worker。
```

适合：

```
并行研究多个主题
代码审查 + 修复
多文件重构
把大任务拆成几个互不污染的子任务
```

* * *

# 9\. Cron：让 agent 定时执行任务

Hermes 支持 scheduled tasks，官方称为 Cron。它可以用自然语言或 cron 表达式创建一次性或周期任务，可以暂停、恢复、编辑、触发、删除，可以加载一个或多个 skills，可以把结果发回原聊天、本地文件或配置好的平台。

例子：

```
/cron add 30m "Remind me to check the build"
/cron add "every 2h" "Check server status"
/cron add "every 1h" "Summarize new feed items" --skill blogwatcher
```

也可以直接用自然语言：

```
Every morning at 9am, check Hacker News for AI news and send me a summary on Telegram.
```

官方说 Hermes 会内部用统一的 `cronjob` tool 创建任务。

有个限制很重要：cron-run sessions 不能递归创建更多 cron jobs，防止 runaway scheduling loop。

你要这样记：

```
cron = 让 Hermes 从“你问它才干活”
变成“到时间自己干活”。
```

适合：

```
每日新闻摘要
定时检查服务器
定时检查 GitHub PR
每天整理学习材料
每周生成项目报告
```

* * *

# 10\. MCP：接外部工具服务器

Hermes 支持 MCP。官方说 MCP 让 Hermes 连接外部 tool servers，从而使用 Hermes 自身之外的工具，例如 GitHub、数据库、文件系统、浏览器栈、内部 API 等。

MCP 的价值：

```
不用给 Hermes 原生写工具。
已有 MCP server，就能接进来。
```

两类 MCP server：

```
stdio server
= 本地子进程，通过 stdin/stdout 通信。

HTTP server
= 远程 MCP endpoint。
```

配置位置是 `~/.hermes/config.yaml` 的 `mcp_servers`。官方还说明 Hermes 会给 MCP 工具加前缀，避免和内置工具重名，格式是：`mcp_<server_name>_<tool_name>`。例如 filesystem 的 `read_file` 会注册成 `mcp_filesystem_read_file`。

它还支持 per-server filtering：

```
include
= 只暴露指定工具

exclude
= 屏蔽指定工具
```

官方说如果 include 和 exclude 同时存在，include 优先。

你要记：

```
MCP = Hermes 的外接工具生态接口。
```

* * *

# 11\. Security：别开着 yolo 乱跑

Hermes 的安全模型是 defense-in-depth。官方列了七层：用户授权、危险命令审批、容器隔离、MCP credential filtering、context file scanning、cross-session isolation、input sanitization。

危险命令审批有三种模式：

```
manual
= 默认，危险命令需要人工批准。

smart
= 用辅助 LLM 判断风险，低风险自动通过，高风险自动拒绝，不确定再问人。

off
= 关闭审批，相当于 yolo。
```

官方明确警告：`approvals.mode: off` 会关闭所有安全提示，只应该在可信环境里使用。

YOLO mode 可以通过：

```
hermes --yolo
```

或者 session 中 `/yolo` 开启。官方警告：YOLO 会绕过危险命令安全检查，但 hardline blocklist 仍然有效。hardline blocklist 包括 `rm -rf /`、fork bomb、mkfs、直接写磁盘等，不允许覆盖。

如果你以后真的用 Hermes，建议：

```
本机学习：
不要开 yolo。

生产 / 长任务：
优先 docker、ssh、modal、daytona、vercel_sandbox。

让 agent 改代码：
打开 checkpoints。

给 bot 接 Telegram/Discord：
必须配置 allowlist。
```

官方也说，在 gateway 模式下，如果没有配置 allowlists 且没有设置 allow-all，默认拒绝所有未授权用户。

* * *

# 12\. Checkpoints & Rollback：改坏了能回滚

Hermes 支持 checkpoints，但 v2 起默认关闭，需要 opt-in。启用后，它会在破坏性操作前自动 snapshot 项目，并可以用 `/rollback` 恢复。

启用：

```
hermes chat --checkpoints
```

或配置：

```
checkpoints:
  enabled: true
```

触发 checkpoint 的场景包括：

```
write_file
patch
rm / rmdir / mv / sed -i / truncate / dd
输出重定向 >
git reset / clean / checkout
```

官方说它用内部 Checkpoint Manager，在 `~/.hermes/checkpoints/store/` 维护一个 shadow git repository，不会碰真实项目的 `.git`。

回滚命令：

```
/rollback
/rollback <N>
/rollback diff <N>
/rollback <N> <file>
```

你要记：

```
只要让 agent 改真实项目文件，就应该考虑开 checkpoints。
```

* * *

# 13\. 和 OpenAI Agents SDK、LangGraph 的区别

```
OpenAI Agents SDK
= 程序员自己写 agent。
你定义 Agent、Tool、Runner、Handoff、Guardrail。

LangGraph
= 程序员自己画复杂 agent 流程图。
你定义 State、Node、Edge、Graph。

Hermes Agent
= 已经做好的终端 agent runtime。
你主要是安装、配置 provider、配置工具、接平台、写 skills、接 MCP、管安全。
```

更直白：

```
OpenAI Agents SDK 像“造发动机的零件包”。

LangGraph 像“复杂流程控制器”。

Hermes Agent 像“已经装好的工程车”：
能跑终端、改文件、用浏览器、查网页、接 Telegram、定时任务、记忆、技能、MCP、Docker 沙箱。
```

* * *

# 14\. 你该怎么学 Hermes

不要从头把所有文档啃完。按实用顺序来：

```
第一阶段：跑起来

读：
Quickstart
Configuration
Security

目标：
- 安装
- 选 provider
- 跑 hermes
- 能继续 session
- 能用 terminal/file/web 工具
- 不开 yolo
```

```
第二阶段：理解工具系统

读：
Tools & Toolsets
Terminal Backends
Checkpoints & Rollback

目标：
- 知道有哪些工具
- 知道 toolsets 怎么开关
- 知道 local / docker / ssh 差别
- 知道什么时候必须开 checkpoint
```

```
第三阶段：理解长期能力

读：
Memory
Skills
Context Files

目标：
- 明白 MEMORY.md / USER.md 是什么
- 明白 session_search 和 memory 的区别
- 明白 SKILL.md 怎么写
- 明白 AGENTS.md / SOUL.md 怎么控制行为
```

```
第四阶段：自动化和多 agent

读：
Delegation
Cron
MCP
Messaging Gateway

目标：
- 会把大任务分给子 agent
- 会创建定时任务
- 会接外部 MCP 工具
- 会接 Telegram / Discord 等平台
```

```
第五阶段：看源码架构

读：
Architecture
Agent Loop Internals
Prompt Assembly
Provider Runtime
Adding Tools

目标：
- 看懂 AIAgent 怎么循环
- 看懂工具怎么注册和调度
- 看懂 provider 怎么切换
- 能自己加工具或插件
```

* * *

# 15\. 最终压缩版

```
Hermes Agent 的本质：

一个终端原生、工具丰富、带长期记忆和技能系统的 autonomous agent runtime。

它的核心循环：

用户输入
↓
构建 system prompt
↓
调用模型
↓
模型要工具就执行工具
↓
工具结果回填
↓
继续调用模型
↓
直到最终回答
↓
保存 session / memory


它的核心模块：

Tools
= 让 agent 能查网页、跑命令、改文件、用浏览器。

Toolsets
= 按场景启用/禁用工具。

Terminal backend
= 决定命令在本机、Docker、SSH、云沙箱哪里执行。

Memory
= 小而精的长期事实，进 system prompt。

Session search
= 搜索过去所有对话。

Skills
= 可复用工作流，agent 可以自己创建和修正。

Context files
= 项目规则和人格设定，例如 AGENTS.md、SOUL.md。

Delegation
= 启动隔离子 agent 并行干活。

Cron
= 定时自动执行任务。

MCP
= 连接外部工具服务器。

Security
= 审批、沙箱、授权、扫描、隔离。

Checkpoints
= 改坏项目后可以 rollback。
```

我对它的判断：

```
Hermes 不是最适合“学习 agent 底层原理”的第一工具。
但它很适合学习“一个完整 agent 产品到底应该包含哪些工程模块”。

你学它，重点不是背命令。
重点是看懂：

一个能长期运行的 agent，
为什么必须有工具、记忆、skills、上下文文件、沙箱、回滚、授权、MCP、cron、gateway。
```

如果你接下来要把它和 OpenAI Agents SDK、LangGraph 放在一起学，我建议记成：

```
OpenAI Agents SDK：
学 agent 代码骨架。

LangGraph：
学 agent 流程控制。

Hermes Agent：
学 agent 产品工程化。
```
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->








```
Microsoft《AI Agents for Beginners》
```

```
先知道 agent 是什么
↓
再写出一个能调用工具的 agent
↓
最后把复杂 agent 做成可控流程图
```

* * *

# 1\. Microsoft《AI Agents for Beginners》

## 1.1 Agent 到底是什么？

```
AI Agent = 让 LLM 不只是回复 prompt，而是能借助工具和知识对世界采取行动的系统。
```

Agent 拆成几个部分：Environment、Sensors、Actuators、LLM、Tools、Memory + Knowledge。这里最关键的是：Agent 不是一个模型，而是一个由多部分组成的系统；LLM 负责理解和决策，工具负责执行动作，记忆负责保存当前对话和长期信息。

你要这样记：

```
Environment
= agent 工作的场景，比如订票系统、数据库、网页、文件系统。

Sensors
= agent 读取环境的方式，比如查航班、查库存、读文件、看用户输入。

Actuators
= agent 改变环境的方式，比如下单、发邮件、写数据库、调用 API。

LLM
= 负责理解自然语言、判断下一步、生成计划。

Tools
= agent 能用的外部能力，比如搜索、数据库、代码执行、API。

Memory + Knowledge
= 短期记忆 + 长期知识。
短期记忆：当前任务上下文。
长期知识：用户偏好、历史记录、知识库。
```

## 1.2 什么时候该用 Agent？

Agent 特别适合三类任务：open-ended problems、multi-step processes、improvement over time。也就是：步骤不能完全写死、多步骤调用工具、需要根据反馈变好。

你实际判断时，用这个标准：

```
适合 Agent：

- 用户目标比较模糊，需要系统自己拆步骤
- 任务需要多轮推进
- 任务需要查资料、调用 API、读文件、写文件
- 中途结果会影响下一步
- 需要根据失败结果重新尝试
- 需要记住用户偏好或历史状态

不适合 Agent：

- 一次问答就能解决
- 一个固定 API 调用就能解决
- 规则流程完全确定
- 不需要工具
- 不需要状态
- 不需要循环
```

* * *

## 1.3 Tool Use：这是 Agent 的手脚

Microsoft Tool Use 这一节说得很直接：工具让 AI agent 拥有更大能力范围。工具可以是简单函数，比如计算器；也可以是第三方 API，比如股价查询、天气查询。工具调用的本质是：模型根据用户意图选择函数名和参数，真正的函数代码由程序执行，再把结果返回给模型。

核心流程是：

```
用户提出任务
↓
LLM 判断需要工具
↓
LLM 输出 tool call：工具名 + 参数
↓
程序执行工具
↓
工具返回结果
↓
结果交回 LLM
↓
LLM 继续推理或输出最终答案
```

你必须抓住 Tool Use 的 6 个构件：

```
1. Tool Schema
告诉模型有哪些工具。
包括：工具名、用途、参数、返回值。

2. Function Execution Logic
真正执行工具的代码。
注意：模型不会真的执行函数，模型只是“请求调用”。

3. Message Handling
管理用户消息、模型消息、工具调用、工具返回结果。

4. Tool Integration Framework
把 agent 和函数/API/数据库/代码解释器连起来。

5. Error Handling & Validation
工具失败怎么办？
参数错了怎么办？
返回结果异常怎么办？

6. State Management
记录之前调用过什么工具、拿到了什么结果、下一步是否还要继续。
```

* * *

## 1.4 Agentic RAG：不是“检索一次再回答”

Microsoft 对 Agentic RAG 的解释很关键：它不是传统的“检索 → 阅读 → 回答”固定流程，而是 LLM 自己规划下一步，边调用工具/函数，边根据结果判断是否需要继续查、换查询、换工具，直到结果足够。原文还强调了 “maker-checker” 式循环。

普通 RAG：

```
用户问题
↓
系统检索一次
↓
把资料塞给模型
↓
模型回答
```

Agentic RAG：

```
用户问题
↓
模型判断需要查什么
↓
调用检索工具
↓
检查结果是否足够
↓
不够：改写查询 / 换检索方法 / 换数据源
↓
继续查
↓
资料足够后再回答
```

Microsoft 原文给的核心循环可以压成：

```
LLM call
↓
tool use
↓
LLM call
↓
tool use
↓
直到结果够用
```

Agentic RAG 可以改写失败查询，选择不同检索方式，整合 vector search、SQL database、custom APIs 等多个工具。它的重点不是“多查几次”，而是**模型根据资料质量决定下一步**。

你要记住：

```
普通 RAG = 固定检索流程
Agentic RAG = 自己判断检索路径
```

* * *

## 1.5 Planning：核心不是“想计划”，而是输出结构化任务

Microsoft Planning 这节重点讲：真实任务太复杂，不能一步做完，所以 agent 要先定义总目标，再拆成可管理的子任务。官方例子是 “Generate a 3-day travel itinerary”，然后拆成 Flight Booking、Hotel Booking、Car Rental、Personalization。

真正有用的是这个思路：

```
总任务
↓
拆子任务
↓
每个子任务分配 agent / 工具
↓
子任务分别完成
↓
汇总结果
```

而且原网页强调 structured output，比如 JSON，因为 JSON 更容易被后续 agent 或服务解析。Planning 不是让模型写一段漂亮计划，而是让模型输出机器能执行的结构。

你要这样记：

```
坏的 planning：

“我会先查资料，然后分析，最后总结。”

好的 planning：

{
  "main_task": "研究 OpenAI Agents SDK",
  "subtasks": [
    {
      "task_details": "阅读 quickstart，提取 Agent 和 Runner 的最小代码",
      "assigned_agent": "doc_reader"
    },
    {
      "task_details": "阅读 tools 文档，提取 function_tool 用法",
      "assigned_agent": "tool_extractor"
    },
    {
      "task_details": "整理成学习笔记",
      "assigned_agent": "writer"
    }
  ]
}
```

一句话：

```
Planning 的重点不是“计划写得像人话”，而是“计划能被程序继续执行”。
```

* * *

## 1.6 Multi-Agent：不是多个角色聊天，而是分工

Microsoft Multi-Agent 原文说，多 agent 是多个 agent 为共同目标协作的设计模式，适合大工作量、复杂任务、多种专业能力场景。它的优势包括 specialization、scalability、fault tolerance。

你不要把 Multi-Agent 理解成：

```
几个 AI 互相聊天，看起来很热闹。
```

应该理解成：

```
把一个复杂系统拆成多个职责明确的模块。
```

比如：

```
Research Agent
= 查资料

Code Agent
= 写代码

Review Agent
= 检查错误

Writer Agent
= 输出最终文本

Triage Agent
= 判断用户任务应该交给谁
```

Microsoft 原文还强调，多 agent 要考虑通信、协调机制、agent 架构、交互可见性、人类介入。尤其是 visibility 很重要：你必须知道 agent 之间发生了什么，否则系统就是黑箱。

你要记住：

```
Multi-Agent 的难点不是“创建多个 agent”。
难点是：

- 谁负责调度？
- 谁拥有最终答案？
- agent 之间传什么信息？
- 哪些步骤需要人确认？
- 出错后怎么追踪？
```

* * *

# 2\. OpenAI Agents SDK Intro 精华

OpenAI Agents SDK 的官方定位很明确：它是一个轻量级、少抽象、偏生产可用的 agentic app 开发包。核心原语包括 Agents、Agents as tools / Handoffs、Guardrails，并且内置 tracing。官方还说它有内置 agent loop，会处理工具调用，把结果送回 LLM，并持续运行直到任务完成。

```
怎么用 Python 把 agent 跑起来。
```

* * *

## 2.1 OpenAI Agents SDK 的核心对象

```
Agent
= 带 instructions 和 tools 的 LLM

Runner
= 运行 agent 的执行器

Tool
= agent 可以调用的函数/API/搜索/代码解释器

Handoff
= 一个 agent 把任务交给另一个 agent

Guardrail
= 输入/输出检查器

Tracing
= 记录 agent 执行过程
```

OpenAI 官方把 Agent 定义为“LLMs equipped with instructions and tools”；Handoffs 允许 agent 把任务委托给其他 agent；Guardrails 用来验证输入和输出；Tracing 用来可视化、调试和监控 agentic flows。

这几个词你必须背下来。它们就是 OpenAI Agents SDK 的骨架。

* * *

* * *

## 2.2 Tool：让 agent 真正做事

OpenAI Tools 文档说，tools 让 agents 能够执行动作，比如获取数据、运行代码、调用外部 API，甚至使用计算机。SDK 支持五类工具：Hosted OpenAI tools、Local/runtime execution tools、Function calling、Agents as tools、Codex tool。

你实际先学这三类就够：

```
1. Hosted tools
OpenAI 托管工具。
比如：
- WebSearchTool
- FileSearchTool
- CodeInterpreterTool
- HostedMCPTool
- ImageGenerationTool

2. Function tools
你自己写 Python 函数，然后包装成工具。

3. Agents as tools
一个 agent 可以作为另一个 agent 的工具。
```

* * *

## 2.3 Handoff：任务转交

OpenAI Handoffs 文档说，handoff 允许一个 agent 把任务委托给另一个 agent，适合不同 agent 负责不同专业领域。比如客服系统里，可以有订单状态 agent、退款 agent、FAQ agent。handoff 在 LLM 看来会表现成一个类似工具的调用，比如 `transfer_to_refund_agent`。

* * *

## 2.4Guardrail：不是装饰，是防止系统乱跑

OpenAI Guardrails 文档说有两类 agent-level guardrails：input guardrails 和 output guardrails。Input guardrails 检查初始用户输入，output guardrails 检查最终输出；此外 tool guardrails 会在每次自定义 function tool 调用前后运行。

你要这样记：

```
Input guardrail
= 入口检查
用户这个请求能不能处理？

Output guardrail
= 出口检查
最终答案能不能发出去？

Tool guardrail
= 工具调用检查
这个工具参数危险吗？
这个工具结果能不能返回？
```

真实用途：

```
不是为了“显得安全”。
而是为了防止：

- 用户输入恶意请求
- agent 调用危险工具
- agent 删除/修改不该动的数据
- agent 输出敏感信息
- agent 浪费高成本模型调用
```

最朴素的项目里，你也可以先做一个简单 guardrail：

```
如果用户请求涉及：
- 删除文件
- 发邮件
- 下单
- 转账
- 修改数据库

则必须先要求人类确认。
```

* * *

## 2.5 Tracing：没有 tracing，agent 就是黑箱

OpenAI Tracing 文档说，Agents SDK 内置 tracing，会记录 agent run 里的 LLM generation、tool calls、handoffs、guardrails 和 custom events，并可以用 dashboard 调试、可视化、监控工作流。

你要记住：

```
Tracing 不是高级功能。
Tracing 是 agent 开发的基本功能。
```

因为 agent 出错时，普通日志不够。你必须知道：

```
它到底有没有调用工具？
调用了哪个工具？
参数是什么？
工具返回了什么？
有没有 handoff？
handoff 给了谁？
guardrail 有没有触发？
最后答案是哪个 agent 生成的？
```

所以你学 OpenAI Agents SDK，最低要求不是“能跑出答案”，而是：

```
能在 Trace Viewer 里看懂它是怎么跑出答案的。
```

* * *

# 3\. LangGraph Overview 精华

LangGraph 官方说，它是一个 low-level orchestration framework and runtime，用来构建、管理、部署 long-running、stateful agents。官方还提醒：如果刚开始学 agent 或想要更高层抽象，可以先用 LangChain agents；LangGraph 更关注 durable execution、streaming、human-in-the-loop、persistence 等底层编排能力。

这句话翻译成人话就是：

```
LangGraph 不是给你快速写一个简单 agent 的。
LangGraph 是在 agent 流程复杂后，让你控制流程、状态、分支、恢复、人类介入。
```

* * *

## 3.1 LangGraph 的核心思想

LangGraph 不是“一个 Agent 类”，而是：

```
把任务流程拆成图。
```

核心元素：

```
State
= 当前任务状态

Node
= 一个执行步骤，本质上是函数

Edge
= 步骤之间的连接

Conditional Edge
= 根据状态决定下一步去哪

Graph
= 整个流程图

Checkpoint
= 保存中间状态，方便恢复
```

* * *

## 3.2 LangGraph 的真正使用方式

LangGraph 的 Thinking in LangGraph 页面说，构建 LangGraph agent 时，先把流程拆成离散步骤，也就是 nodes；然后描述节点之间的决策和转移；最后通过共享 state 把节点连起来，每个节点都可以读写 state。

它给的客服邮件 agent 例子非常实用：

```
Read Email
= 读取邮件

Classify Intent
= 判断邮件紧急程度和主题

Doc Search
= 搜索相关文档

Bug Track
= 创建或更新 bug issue

Draft Reply
= 起草回复

Human Review
= 人类审核

Send Reply
= 发送邮件
```

这才是 LangGraph 的正确打开方式：

```
不要先问“LangGraph API 怎么用？”
先问“我要自动化的流程有哪些步骤？”
```

然后每个步骤变成一个 node。

* * *

## 3.3 State：LangGraph 的命根子

Thinking in LangGraph 原文说，state 是所有节点共享的 memory；你可以把它想成 agent 的笔记本，用来记录它在流程中学到和决定的一切。原文还给了判断标准：需要跨步骤保留的数据就放进 state；能从其他数据推导出来的，就不要存。

关键原则：

```
State 存原始数据，不存 prompt 模板。

应该存：
- 原始用户问题
- 原始邮件内容
- 分类结果
- 搜索结果
- 工具返回结果
- 草稿
- 错误信息
- 当前执行步骤

不应该存：
- 大段拼好的 prompt
- 可以重新计算的格式化文本
- 临时变量
```

这句话很重要：

```
State schema 一旦乱，LangGraph 项目后面会很痛苦。
```

* * *

## 3.4 Node：每个节点只做一件事

LangGraph 原文说，node 就是一个 Python 函数：接收当前 state，做一些工作，返回对 state 的更新。

你要按这个粒度拆：

```
好节点：
classify_intent
search_documentation
draft_response
human_review
send_reply

坏节点：
do_everything
process_user_request
agent_main
```

一个好 node 应该清楚回答：

```
输入 state 里的哪些字段？
调用不调用 LLM？
调用不调用外部工具？
输出更新哪些字段？
下一步去哪？
失败怎么办？
```

* * *

## 3.5 LangGraph 解决的不是“调用模型”，而是“流程控制”

LangGraph 官方列出的核心收益包括 durable execution、human-in-the-loop、comprehensive memory、debugging with LangSmith、production-ready deployment。也就是：失败后恢复、人类随时检查/修改状态、短期和长期记忆、复杂路径追踪、生产部署。

所以它适合：

```
长任务
多步骤任务
有状态任务
有分支任务
有循环任务
需要人工确认的任务
失败后要恢复的任务
需要追踪执行路径的任务
```

不适合：

```
一次问答
一个工具调用
简单 Chatbot
刚入门时为了装复杂
```

你当前学 LangGraph，只需要抓住这个图：

```
START
↓
plan_node
↓
search_node
↓
check_node
↓
如果资料不足 → 回到 search_node
↓
如果资料足够 → write_node
↓
human_review_node
↓
END
```

这就是它和 OpenAI Agents SDK 的核心区别：

```
OpenAI Agents SDK
= 让 agent 容易跑起来。

LangGraph
= 让复杂 agent 流程可控。
```

* * *
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->









API 调用学习笔记

API 可以理解为不同程序之间沟通的接口。前端、后端、第三方平台之间，很多数据交换都依赖 API 完成。学习 API 调用，不能只停留在概念上，而要通过实际请求来理解它的运行过程。

一次完整的 API 调用，通常包括请求地址、请求方法、请求参数、请求头和返回结果。请求方法常见的有 GET 和 POST。GET 一般用于获取数据，参数通常放在 URL 后面；POST 一般用于提交数据，参数多放在请求体中。请求头里经常会包含 Content-Type、Authorization 等信息，其中 Authorization 通常用于身份验证，比如携带 Token。

调用 API 时，要重点观察返回结果。很多接口会返回 JSON 数据，里面通常包含状态码、提示信息和具体数据。学习时不能只看请求是否成功，还要理解返回字段的含义，知道哪些数据是自己真正需要的。

如果调用失败，要学会根据错误排查问题。比如 400 可能是参数错误，401 可能是权限或 Token 问题，404 可能是接口地址错误，500 通常是服务器内部错误。遇到问题时，应先检查接口文档，再检查请求方法、参数格式、请求头和权限设置。

学习 API 调用的关键，是边看文档边动手写。只看教程容易产生“我懂了”的错觉，真正写请求、改参数、看返回、排错误，才能建立实际理解。掌握 API 调用之后，才能更好地学习前后端交互、第三方服务接入、AI 接口调用以及后续项目开发。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->










## **. Ethereum Development Documentation**

Ethereum Development Documentation 是以太坊开发学习的总入口。

它是一张学习地图，主要分成三层：

`Foundational topics 基础概念 -> Ethereum stack 开发栈 -> Advanced 高级主题`

`Intro to Ethereum -> Accounts -> Transactions -> Blocks -> EVM -> Gas -> Networks -> Smart contracts`

`Smart contracts -> Smart contract languages -> Smart contract anatomy -> Compiling -> Deploying -> Verifying -> Security`

## **2\. Web3 一次链上操作到底怎么运行？**

把一次最普通的 Web3 操作拆开，大概是：

`用户 -> 钱包 -> 签名 -> 交易 -> 网络广播 -> 验证者打包进区块 -> EVM 执行 -> 状态改变 -> 区块浏览器验证`

更具体一点：

1.  用户在钱包或 dapp 里发起动作。
    
2.  钱包展示交易内容，例如接收地址、合约地址、金额、Gas。
    
3.  用户确认后，钱包用私钥签名。
    
4.  签名后的交易被广播到 Ethereum 网络。
    
5.  验证者把交易放入区块。
    
6.  如果交易调用合约，EVM 会执行合约代码。
    
7.  执行结果改变链上状态，例如余额变化、合约变量变化、事件日志产生。
    
8.  区块浏览器显示交易哈希、状态、区块高度、Gas、调用对象和日志。
    

这就是 Week 1 要建立的主线：

`账户 + 钱包 + 签名 + 交易 + Gas + 合约 + 网络 + 区块浏览器`

## **3\. 交易 Transaction 是什么？**

Ethereum 官方文档把交易定义成：账户发出的、经过密码学签名的指令，用来更新 Ethereum 网络状态。

零基础可以这样理解：

`交易 = 我用账户授权网络执行一个动作`

交易可能是：

-   从一个地址转 ETH 到另一个地址。
    
-   部署一个智能合约。
    
-   调用一个已经部署的智能合约。
    

一笔交易常见字段：

-   from：发送方地址。
    
-   to：接收方地址；如果是合约地址，就会执行合约代码。
    
-   signature：签名，证明发送方授权了这笔交易。
    
-   nonce：账户发出的第几笔交易，用来防止重放和排序混乱。
    
-   value：转多少 ETH。
    
-   input data：调用合约时传入的数据。
    
-   gasLimit：最多愿意消耗多少 Gas。
    
-   maxFeePerGas：每单位 Gas 最多愿意付多少。
    
-   maxPriorityFeePerGas：给验证者的小费上限。
    

注意：

`只有 EOA，也就是私钥控制的普通用户账户，能主动发起交易。 合约账户不会自己主动发交易；它通常是被交易调用后执行代码。`

## **4\. Gas**

Gas 是 Ethereum 对计算资源的计价单位。

不要把 Gas 只理解成“手续费”。更准确地说：

`Gas = 链上执行计算和存储的资源计量 Gas fee = 你为这些资源支付的 ETH`

为什么需要 Gas？

-   防止垃圾交易刷爆网络。
    
-   防止无限循环让 EVM 卡死。
    
-   让计算和存储成本可计量。
    
-   让验证者有动机处理交易。
    

Gas 费用大致是：

`gas used * (base fee + priority fee)`

其中：

-   gas used：实际消耗多少计算单位。
    
-   base fee：协议设定的基础费用，会被销毁。
    
-   priority fee：给验证者的小费。
    

重要细节：

-   普通 ETH 转账通常需要 21,000 gas。
    
-   合约交互通常更贵，因为要执行代码。
    
-   交易失败也可能消耗 Gas，因为网络已经花资源执行过。
    
-   gasLimit 是你愿意最多消耗多少，不一定全部用完，未使用部分会退回。
    

## **5\. 智能合约**

智能合约是部署在 Ethereum 上的程序。

官方文档的核心意思是：

`智能合约 = 位于某个 Ethereum 地址上的代码 + 状态`

它像一个“链上自动售货机”：

`输入符合规则 -> 合约代码执行 -> 状态按规则变化`

智能合约的特点：

-   有自己的地址。
    
-   可以持有余额。
    
-   可以被交易调用。
    
-   代码按预设逻辑执行。
    
-   默认不能随便删除。
    
-   交互通常不可逆。
    
-   公开可组合，其他合约也可以调用它。
    

智能合约和普通后端最大的区别：

`普通后端：服务器由公司控制，数据库可被管理员改。 智能合约：部署到链上后，状态公开，执行公开，改动受合约权限限制。`

所以写合约前要特别重视：

-   权限控制。
    
-   测试。
    
-   部署网络是否正确。
    
-   合约是否可升级。
    
-   谁是 owner / admin。
    
-   是否有资产转移或授权逻辑。
    

## **6\. 网络、主网、测试网**

Ethereum 有一个主网 Mainnet，也有多个测试网。

主网：

`真实资产 真实成本 真实风险`

测试网：

`测试资产 接近真实链上环境 适合学习、调试、部署 demo`

Ethereum 官方文档指出：Sepolia 是默认推荐给合约和应用开发者使用的测试网。

测试网 ETH 没有真实价值，但你仍然需要它支付测试交易的 Gas。

这就是 faucet 的作用：

`Faucet 水龙头 = 给测试地址领取少量测试网 ETH 的工具`

## **7\. Google Cloud Web3 Sepolia Faucet**

Google Cloud Web3 Sepolia Faucet 是一个领取 Sepolia 测试 ETH 的入口。

你使用它时大致流程是：

`打开 faucet -> 登录 Google 账号 -> 输入你的 Sepolia 钱包地址 -> 申请测试 ETH -> 等待到账 -> 在钱包或 Sepolia 区块浏览器中确认`

注意：

-   只能输入你的公开钱包地址，不能输入私钥或助记词。
    
-   领取的是 Sepolia 测试 ETH，不是真 ETH。
    
-   测试 ETH 只用于测试转账、部署合约、调用合约。
    
-   Faucet 可能有频率限制、账号限制或风控限制。
    
-   如果一个 faucet 不可用，可以回到 Ethereum Networks 文档里的 Sepolia faucet 列表换一个。
    

记录材料时保存：

-   faucet URL。
    
-   接收地址。
    
-   到账交易哈希，如果页面或钱包能看到。
    
-   Sepolia explorer 链接。
    
-   到账数量。
    
-   时间。
    

不要保存：

-   助记词。
    
-   私钥。
    
-   MetaMask 密码。
    
-   任何真实资产钱包敏感截图。
    

## **8\. Remix IDE**

Remix IDE 是以太坊智能合约开发的浏览器 IDE。

Remix 官方文档强调了几个入门友好的点：

-   不需要本地安装复杂环境。
    
-   可以在浏览器里写、编译、部署、调用合约。
    
-   有插件式界面。
    
-   适合从零开始理解智能合约开发流程。
    

`写 Solidity -> 编译 -> 部署 -> 调用 read 函数 -> 调用 write 函数 -> 钱包确认 -> 区块浏览器验证`

## **9\. Remix 最小合约实验路线**

Week 1 推荐从最小合约开始，不要一上来写 token、NFT、DeFi。

你要观察两类操作：

### **9.1 读取 read**

调用：

`message()`

特点：

-   读取链上状态。
    
-   不改变状态。
    
-   通常不需要钱包发交易。
    
-   通常不消耗 Gas。
    

### **9.2 写入 write**

调用：

`setMessage("hello week 1")`

特点：

-   改变链上状态。
    
-   需要钱包签名。
    
-   需要发送交易。
    
-   需要消耗 Sepolia ETH 支付 Gas。
    
-   会产生交易哈希。
    

这就是理解合约交互的关键：

`读 = 看链上状态。 写 = 发交易改变链上状态。`

## **10\. 最小实践前检查清单**

在 Remix 连接 MetaMask 前检查：

-   钱包是测试钱包，不是存真实资产的钱包。
    
-   网络是 Sepolia，不是 Ethereum Mainnet。
    
-   钱包里有少量 Sepolia ETH。
    
-   合约代码是自己能读懂的最小代码。
    
-   没有复制陌生项目的大段合约。
    
-   不上传助记词、私钥、密码。
    

部署合约前检查：

-   Remix 的 Environment 是否连接到 Injected Provider / MetaMask。
    
-   MetaMask 弹窗显示的是 Sepolia。
    
-   部署交易没有涉及真实资产。
    
-   Gas 费用可接受。
    

调用写函数前检查：

-   调用的是自己刚部署的合约地址。
    
-   函数名称和参数看得懂。
    
-   这次写入会改变什么状态。
    
-   交易确认后要记录 hash。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->











# **Ethereum Accounts 与 MetaMask 入门笔记**

理解账户、地址、钱包、私钥、助记词和密码分别是什么，以及为什么 Web3 里的安全责任和普通互联网账号完全不同。

## **1.**

在 Web3 里，重点是拥有一套可以控制链上资产和动作的密钥。

最小关系是：

`助记词 / Secret Recovery Phrase -> 派生出多个账户的私钥 -> 私钥生成公钥和地址 -> 地址公开收款和交互 -> 私钥签名交易 -> 钱包帮你管理密钥和发起签名`

所以最重要的安全原则是：

`地址可以公开。 私钥和助记词绝不能公开。 钱包密码不等于助记词，也不等于链上账户本身。`

## **2\. Ethereum account**

Ethereum account 是以太坊上的一个“可持有余额、可发送消息、可参与链上交互的实体”。

它可以：

-   持有 ETH。
    
-   持有 token。
    
-   向其他账户转账。
    
-   与智能合约交互。
    

但是 Ethereum account 不等于传统互联网账号

## **3\. 两类 Ethereum account**

Ethereum 主要有两类账户。

### **3.1 EOA：Externally Owned Account**

EOA 是普通用户最常接触的账户。

特点：

-   由私钥控制。
    
-   创建账户本身不需要花 gas。
    
-   可以主动发起交易。
    
-   可以转 ETH / token。
    
-   可以调用智能合约。
    

### **3.2 Contract Account：合约账户**

合约账户是部署到链上的智能合约。

特点：

-   由代码控制，不由某个私钥直接控制。
    
-   部署合约要花 gas，因为要占用链上存储。
    
-   不能自己主动发起交易。
    
-   只有收到外部交易或调用时，才会执行代码。
    

一句话区分：

`EOA 是“人用私钥控制的账户”。 合约账户是“代码控制的账户”。`

## **4\. 地址**

地址是账户在链上的公开标识。

Ethereum 地址特点：

-   以 0x 开头。
    
-   后面是 40 个十六进制字符。
    
-   总长度通常是 42 个字符。
    
-   可以公开给别人收款。
    
-   可以在区块浏览器中查询。
    

## **5\. 私钥**

`谁拥有私钥，谁就能控制对应地址里的资产和链上动作。`

私钥可以用来：

-   签名交易。
    
-   证明“这个动作确实由账户控制者授权”。
    
-   导入或恢复单个账户。
    

如果别人拿到你的私钥，他不需要你的密码，也不需要你的电脑，就可能控制对应账户。

## **6\. 助记词 / Secret Recovery Phrase**

MetaMask 会在创建钱包时生成 Secret Recovery Phrase，常见是 12 个英文单词，也叫 seed phrase / SRP / 助记词。

它的地位比单个私钥还高。

关系是：

`一个助记词 -> 可以派生出多个账户 -> 每个账户有自己的私钥 -> 每个私钥控制一个地址`

所以助记词可以理解成：

`整个钱包的总钥匙。`

必须记住：

-   助记词丢了，MetaMask 不能帮你恢复。
    
-   助记词泄露，别人可以控制你的钱包。
    
-   助记词顺序不能错。
    
-   助记词最好离线保存。
    
-   不要把助记词存到云文档、邮箱、聊天记录、截图、GitHub 或 AI 工具里。
    

## **7\. MetaMask**

MetaMask 是一个钱包客户端，可以是浏览器插件，也可以是手机 App。

它做的事情包括：

-   管理私钥。
    
-   显示地址和余额。
    
-   帮你连接 dapp。
    
-   帮你构造交易。
    
-   在你确认后帮你签名。
    
-   把交易发送到区块链网络。
    

但 MetaMask 不是银行，也不是普通平台账号。

它不能替你：

-   找回丢失的助记词。
    
-   撤销已经确认的链上交易。
    
-   阻止你签错合约或授权。
    
-   保证每个 dapp 都安全。
    

## **8\. MetaMask 密码**

MetaMask 密码主要用于解锁当前设备上的钱包。

它不是链上账户本身，也不是最终恢复方式。

如果你用传统助记词创建钱包：

`MetaMask 密码 = 解锁本机 MetaMask 助记词 = 恢复整个钱包`

这意味着：

-   忘记密码时，可以用助记词恢复。
    
-   丢失助记词时，MetaMask 官方不能帮你找回钱包。
    
-   只知道密码但没有助记词，不等于永远拥有钱包。
    

## **9\. 钱包、账户、地址、私钥、助记词**

可以这样记：

`钱包 = 管理工具 账户 = 链上的身份 / 资产控制实体 地址 = 账户的公开门牌号 私钥 = 控制单个账户的钥匙 助记词 = 恢复整个钱包的总钥匙 密码 = 解锁当前设备上钱包应用的本地锁`

类比：

`地址像收款码，可以给别人。 私钥像保险柜钥匙，不能给别人。 助记词像能重做所有钥匙的总图纸，更不能给别人。 MetaMask 像钥匙包，帮你保管和使用钥匙。 密码像打开这个钥匙包的本机锁。`

类比不完全准确，但适合入门阶段建立直觉。

## **10\. 签名**

签名不是“点一下登录”这么简单。

签名表示：

`我用这个账户的私钥，授权某个具体消息或交易。`

签名可能用于：

-   登录 dapp。
    
-   发送 ETH。
    
-   授权 token。
    
-   调用合约。
    
-   证明某个消息来自你。
    

风险在于：

-   有些签名只是登录消息。
    
-   有些签名会真的发交易。
    
-   有些授权会允许合约花你的 token。
    

所以每次 MetaMask 弹窗，都要停下来读：

-   当前网络是不是对的？
    
-   对方网站是不是可信？
    
-   调用的是哪个合约？
    
-   是签名消息还是发送交易？
    
-   是否涉及转账？
    
-   是否涉及 token approve / 授权额度？
    
-   gas 大概是多少？
    

## **11\. 安全责任清单**

### **可以公开**

-   钱包地址。
    
-   测试网交易哈希。
    
-   区块浏览器链接。
    
-   合约地址。
    
-   测试网学习记录。
    

### **不能公开**

-   助记词 / Secret Recovery Phrase。
    
-   私钥。
    
-   keystore 文件。
    
-   真实资产钱包的敏感截图。
    
-   任何能恢复或控制钱包的信息。
    

### **操作前检查**

-   只从官方渠道安装 MetaMask。
    
-   浏览器插件确认来自官方来源。
    
-   不要安装来路不明的“钱包插件”。
    
-   创建钱包后立刻备份助记词。
    
-   助记词离线保存。
    
-   测试学习优先使用测试钱包，不放真实资产。
    
-   涉及签名、授权、转账、合约写入时，必须人工确认。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->












**Large Language Models explained briefly**  

**简单来说，大模型只是在不断预测下一个词得概率，然后选取最大概率的词。因此不同的提示词，会输出不同的答案，事实上，相同的提示词也会输出不同的答案。因为每次运行都是分开的，它不会记住原先的答案，然后发布，而是再一次地不断预测下一词的概率，然后选取最大概率。为了使这个方方法行得通，需要大量的计算。以及训练的技巧，比如标记数据，强化学习等。Transformer的Attention也是很重要的。但涌现这种现象依然难以解释。**

**Hugging Face**

NLP是语言学和机器学习的结合，LLM虽然强大，但存在幻觉。**Transformers are everywhere!**

Pre-Processing-Model-Post-Processing

The carbon foorprint of Transformers

Transfer Learning 预训练的表现要更好

预训练会保存偏差

Encoders, decoders 嵌入特征 自注意力机制 自回归

Bert
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
