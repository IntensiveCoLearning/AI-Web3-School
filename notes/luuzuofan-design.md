---
timezone: UTC+8
---

# cooking

**GitHub ID:** luuzuofan-design

**Telegram:** @springisgrass

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->
Socket本身并不是协议，而是一个调用接口（API），通过Socket，才能使用TCP/IP协议

web3实在是复杂，很多名词都没接触过

`nonce` – 一个计数器

`balance` – 此地址拥有的 wei 数量

`codeHash` – 此哈希是指以太坊虚拟机 (EVM) 上某个账户的\_代码

`storageRoot` – 有时称为存储哈希

交易内容：`from` – 发送者的地址，该地址将签署交易。 这将是一个外部帐户，因为合约帐户无法发送交易

-   `to` – 接收地址（如果是外部所有的帐户，交易将转移价值。 如果是合约帐户，交易将执行合约代码）
    
-   `signature` – 发送者的标识符。 当发送者的私钥签署交易并确保发送者已授权此交易时，生成此签名。
    
-   `nonce` - 一个顺序递增的计数器，表示来自该帐户的交易序号
    
-   `value` – 从发送者转移到接收者的 ETH 数量（以 WEI 为单位，其中 1ETH 等于 1e+18wei）
    
-   `input data` – 包含任意数据的可选字段
    
-   `gasLimit` – 交易可消耗的最大燃料单位数量。EVM指定了每个计算步骤所需的燃料单位
    
-   `maxPriorityFeePerGas` - 作为给验证者的小费，愿意为每单位燃料支付的最高价格
    
-   `maxFeePerGas` - 愿意为交易支付的每单位燃料的最高费用（包括 `baseFeePerGas` 和 `maxPriorityFeePerGas`）
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->

# **学习Hardhat 3**

**安装好了环境，照着跑了一个示例，还在摸索中，好难啊。。。一点基础没有**
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->


### 学习了LLM  
示例：  
0x8f3a2b91c7d4e6f0a9b8c1d2e3f4567890abcdef1234567890abcdef98765432  
Method:swapExactTokensForTokens  
approve(spender, amount)

解释：到底授权了什么、风险在哪里、哪些是事实、哪些只是 AI 猜测，以及你签名前必须检查什么  
1.用户正在把 USDT 兑换成 ETH

2.用户正在授权某个合约可以动用你的 USDT  
3.专业交易解释器一定会区分

| 链上行为 | 用户能看懂的解释 |
| --- | --- |
| transfer | 转账 |
| swap | 兑换 |
| stake | 质押 |
| mint | 铸造 NFT |
| bridge | 跨链 |
| addLiquidity | 加流动性 |
| permit | 签名授权 |
| multicall | 批量操作 |

| 地址类型 | 含义 |
| --- | --- |
| 用户钱包 | 发起人 |
| DEX 合约 | 交易所 |
| Router | 路由合约 |
| Spender | 被授权方 |
| LP Pool | 流动池 |
| 黑名单地址 | 风险地址 |

| 信息 | 来源 |
| --- | --- |
| 转账金额 | 链上 |
| 调用函数 | 链上 |
| 合约地址 | 链上 |
| gas fee | 链上 |
| Token 合约 | 链上 |
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->



按照课程内容学习HuggingFace系统理解 LLM 工作原理:

晕了，光是在GoogleColab就遇到了很多问题，第一步vscode里安装Googlecolab,用codex做了个陪学计划，建了文件夹，所以直接就在vscode里打开了新文件，我的理解是，colab是云端跑代码的，vscode是本地跑代码的，如果本地已经有了虚拟python就不需要colab笔记本，这对小白来说，几个软件就要搞半天了

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/luuzuofan-design/images/2026-05-19-1779205102486-image.png)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->




其实今天在课程过程中我一直在操作Hermesagent的本地部署，因为我有两台电脑，我想要在这两台电脑上的tg里bot都使用上Hermesagent，所以我本身一开始进行的操作是

第一台电脑：直接把GitHub的仓库链接发给了Claudecode，但是遇到的第一个问题就是Ubuntu的使用，用wsl虚拟机，按照正常步骤一直yes下去，但是遇到了两个问题：1是虚拟网络端口一直被拦截，问原因，其实有很多，有可能是损坏有可能是之前装了类似openvpn这一类网关被限制了，因为提示这个，我就联想到是不是我目前的这个vpn有影响，是不是没开TUN，果然试了下，开了后，就不存在这个问题了2.是我想用minimax的token plan api，但是一直识别不到，后面我就转了其他的模型，不过这个问题在第二台电脑的时候倒是没出现，所以我也不清楚是什么原因。

第二台电脑：我本身是想按照chatgpt的一问一答来解决部署，我已经有安装经验了，原本这个电脑的Ubuntu和node都已经安装过，按理来说没有什么问题，但是！往往这个时候，又出现了问题：wsl一直无法识别Ubuntu，一直找不到虚拟磁盘，最终chatgpt给到判断;Windows 10 当前系统虚拟磁盘层已经异常.要么换系统，要么绕过wsl。我抱着尝试又在codex里重新发布任务，开放权限，把智能跳到超高！竟然成功了，所以今天我得到的结论是：

AI确实是有迷惑性的，不同的模型有不一样的技能，多多尝试！

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/luuzuofan-design/images/2026-05-18-1779119864613-image.png)
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
