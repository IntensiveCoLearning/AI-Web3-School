---
timezone: UTC+8
---

# wangchengln

**GitHub ID:** wangchengln

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->
### **🎯 今日目标**

用 HTML + ethers.js 做一个极简前端，实时读取链上 AI 结论。

### **📖 理论**

将区块链的信任与 AI 的智能相结合，开发者可以创建能扩展、少手动操作的应用。2025年越来越多的 Web3 团队使用 AI 来运行智能合约、管理用户流程和检测威胁。

### **🛠️ 实操**

新建 `frontend/index.html`：

```
HTML
```

```
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <title>AI × Web3 Oracle Demo</title>
  <script src="https://cdn.jsdelivr.net/npm/ethers@6.10.0/dist/ethers.umd.min.js"></script>
  <style>
    body { font-family: monospace; background: #0d1117; color: #58a6ff; padding: 40px; }
    .card { border: 1px solid #30363d; padding: 20px; border-radius: 8px; max-width: 600px; }
    .result { color: #3fb950; font-size: 1.2em; margin-top: 10px; }
    button { background: #238636; color: white; border: none; padding: 10px 20px; 
             border-radius: 6px; cursor: pointer; margin-top: 15px; }
  </style>
</head>
<body>
  <h2>⛓️ AI × Web3 Oracle — 链上 AI 分析仪</h2>
  <div class="card">
    <p>合约地址: <span id="addr">加载中...</span></p>
    <p>最新 AI 结论:</p>
    <div class="result" id="result">读取中...</div>
    <p style="color:#8b949e">更新时间: <span id="time">-</span></p>
    <button onclick="fetchResult()">🔄 刷新链上数据</button>
  </div>

  <script>
    const CONTRACT_ADDRESS = "你的合约地址";  // 替换！
    const ABI = [
      "function getResult() view returns (string, uint256)",
    ];
    const RPC = "https://eth-sepolia.g.alchemy.com/v2/你的KEY"; // 替换！

    async function fetchResult() {
      const provider = new ethers.JsonRpcProvider(RPC);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
      const [result, timestamp] = await contract.getResult();
      
      document.getElementById("addr").textContent = CONTRACT_ADDRESS;
      document.getElementById("result").textContent = result || "暂无数据";
      document.getElementById("time").textContent = 
        new Date(Number(timestamp) * 1000).toLocaleString("zh-CN");
    }

    fetchResult();
  </script>
</body>
</html>
```

直接用浏览器打开 `index.html` 即可看到效果。

**产出**：浏览器页面显示链上的 AI 分析结论和时间戳 ✅
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->

### **📖 理论**

区块链上每笔交易、钱包余额、合约状态都可公开读取；AI Agent 可分析数百万地址的模式，无需协商 API 权限——区块链本身就是数据库。与传统金融需要中间人不同，AI 可以直接与智能合约交互。

### **🛠️ 实操**

安装依赖：`pip install web3`

编写核心 Bridge 脚本 `bridge.py`：

```
Python
```

```
import json, os
from web3 import Web3
from dotenv import load_dotenv
from ai_analyzer import analyze_market_sentiment

load_dotenv()

# 连接到 Sepolia
w3 = Web3(Web3.HTTPProvider(os.getenv("SEPOLIA_RPC_URL")))
assert w3.is_connected(), "❌ Web3 连接失败"

# 加载合约
with open("artifacts/contracts/AIDataStore.sol/AIDataStore.json") as f:
    abi = json.load(f)["abi"]

contract = w3.eth.contract(
    address=os.getenv("CONTRACT_ADDRESS"),
    abi=abi
)

account = w3.eth.account.from_key(os.getenv("PRIVATE_KEY"))

def push_ai_result_to_chain(news: str):
    # Step 1: AI 分析
    ai_result = analyze_market_sentiment(news)
    print(f"[AI] 分析结果: {ai_result}")
    
    # Step 2: 构造并发送交易
    tx = contract.functions.updateResult(ai_result).build_transaction({
        "from": account.address,
        "nonce": w3.eth.get_transaction_count(account.address),
        "gas": 200000,
        "gasPrice": w3.eth.gas_price
    })
    
    signed = account.sign_transaction(tx, private_key=os.getenv("PRIVATE_KEY"))
    tx_hash = w3.eth.send_raw_transaction(signed.raw_transaction)
    receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
    
    print(f"[Chain] ✅ 已上链！TxHash: {tx_hash.hex()}")
    print(f"[Chain] Gas Used: {receipt['gasUsed']}")
    return tx_hash.hex()

if __name__ == "__main__":
    push_ai_result_to_chain(
        "Ethereum upgrade boosts network efficiency; analysts predict strong Q3."
    )
```

**产出**：终端显示 `✅ 已上链！TxHash: 0x...`，在 Etherscan 上可查到交易 ✅
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->


### **🎯 今日目标**

搭建 AI 分析脚本，模拟"链下 AI 推理"环节。

### **📖 理论（1小时）**

NLP 是 AI 的重要子领域，在 Web3 中可显著改变用户与去中心化应用的交互方式，实现更直觉化的界面，弥合人类语言与数字服务之间的鸿沟。一个典型的 AI Oracle 服务场景：使用 NLP 模型分析社交媒体情绪，然后将"情绪评分"提交到链上，供 DeFi 协议作为风险评估参数。

### **🛠️ 实操（2小时）**

安装依赖：`pip install openai requests python-dotenv`

编写 `ai_analyzer.py`（以加密市场情绪分析为例）：

```
Python
```

```
import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def analyze_market_sentiment(news_text: str) -> str:
    """调用 LLM 分析加密市场情绪，返回 BULLISH/BEARISH/NEUTRAL + 简短理由"""
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": 
             "You are a crypto market analyst. Analyze the given news and return ONLY: "
             "SENTIMENT: [BULLISH/BEARISH/NEUTRAL] | REASON: [one sentence]"},
            {"role": "user", "content": f"News: {news_text}"}
        ],
        max_tokens=100
    )
    return response.choices[0].message.content.strip()

if __name__ == "__main__":
    test_news = "Bitcoin ETF sees record inflows as institutional adoption surges in 2025."
    result = analyze_market_sentiment(test_news)
    print(f"AI Analysis Result: {result}")
```
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->



### **🎯 今日目标**

将合约部署上链，拿到真实的合约地址。

### **📖 理论（30分钟）**

Oracle 在 Web3 中不仅是数据提供者，更是去中心化经济的使能者——将智能合约与真实世界数据连接起来，在金融、保险、游戏、供应链等场景中解锁无限应用。

### **🛠️ 实操（2.5小时）**

1.  在 [**Alchemy**](https://alchemy.com/) 或 [**Infura**](https://infura.io/) 注册，获取 Sepolia RPC URL
    
2.  配置 `hardhat.config.js`：
    

```
JavaScript
```

```
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
```

3.  写部署脚本 `scripts/deploy.js`，执行部署：
    

```
Bash
```

```
npx hardhat run scripts/deploy.js --network sepolia
```

4.  在 [**Sepolia Etherscan**](https://sepolia.etherscan.io/) 上搜索你的合约地址，查看上链状态
    

**产出**：截图 Etherscan 上的合约页面，记录合约地址 ✅
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->




### **🎯 今日目标**

用 Solidity 写一个能接收并存储"AI 结论"的合约。

### **📖 理论（1小时）**

学习 Solidity 智能合约开发，构建几个基础项目以理解其核心原理。

重点概念：`mapping`、`event`、`only owner`、`string` 存储

### **🛠️ 实操（2小时）**

```
mkdir ai-oracle-demo && cd ai-oracle-demo
npx hardhat init
```

编写合约 `AIDataStore.sol`：

```
solidity
```

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract AIDataStore {
    address public owner;
    string public latestAIResult;
    uint256 public updatedAt;

    event ResultUpdated(string result, uint256 timestamp);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    function updateResult(string memory _result) public onlyOwner {
        latestAIResult = _result;
        updatedAt = block.timestamp;
        emit ResultUpdated(_result, block.timestamp);
    }

    function getResult() public view returns (string memory, uint256) {
        return (latestAIResult, updatedAt);
    }
}
```

```
npx hardhat compile
npx hardhat test  # 跑通默认测试
```

**产出**：合约编译通过，ABI 文件生成 ✅
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->





# **Web3 入门实践总结笔记**

* * *

* * *

## **任务 1：钱包三要素**

### **我理解了什么**

| 名称 | 是什么 | 能不能公开 | 类比 |
| --- | --- | --- | --- |
| 地址 | 链上身份标识，0x 开头 | ✅ 可以公开 | 门牌号 |
| 私钥 | 控制地址的唯一凭证 | ❌ 绝对不能 | 房门钥匙 |
| 助记词 | 可还原私钥的 12 个单词 | ❌ 绝对不能 | 配钥匙的母版 |

### **三者关系**

```
text
```

```
助记词
  ↓ 数学推导（单向，不可逆）
私钥
  ↓ 椭圆曲线加密（单向，不可逆）
地址
```

**单向**意味着：知道地址，永远反推不出私钥。

### **我的钱包地址**

```
text
```

```
地址：0x_______________
网络：Sepolia 测试网
```

### **关键安全认知**

```
text
```

```
❌ 任何人要求输入助记词 = 默认是钓鱼攻击
❌ 私钥截图 = 等于把保险箱钥匙拍照发出去
✅ 地址可以公开，别人才能给你转账
```

* * *

## **任务 2：测试网 + 领币 + 发交易**

### **我做了什么**

```
text
```

```
1. 在 MetaMask 切换到 Sepolia 测试网
2. 通过 Faucet 领取了测试币
3. 发送了一笔 0.001 ETH 的测试交易
```

### **我的第一笔交易**

```
text
```

```
交易哈希：0x_______________
发送金额：0.001 ETH
目标地址：0x_______________
```

### **这笔交易经历了什么**

```
text
```

```
① 我在 MetaMask 确认 → 钱包用私钥签名
       ↓
② 交易广播到 RPC 节点 → 发出去了
       ↓
③ 进入 Mempool（公开等待室）→ 全网可见
       ↓
④ 验证者打包进区块 → 按 Gas 费优先级排队
       ↓
⑤ EVM 执行 → 链上余额更新
       ↓
⑥ 后续区块叠加 → 越来越不可逆
```

### **我亲眼看到的**

```
text
```

```
切换网络前后：同一个地址，余额显示不同
              → 证明"网络是上下文"

发交易时弹窗：to地址 / 金额 / Gas费 / 总计
              → 证明"每一步需要明确授权"

交易 pending：广播后不是立刻完成，要等待打包
              → 证明"Web3 和 Web2 执行速度不同"
```

* * *

## **任务 3：在 Etherscan 读懂交易**

### **我记录的交易数据**

```
text
```

```
交易哈希：  0x_______________
Status：   _______________（Success / Failed）
Block：    #_______________
From：     0x_______________（我的地址）
To：       0x_______________（目标地址）
Gas Used： _______________
Gas Fee：  _______________ ETH
Etherscan 链接：https://sepolia.etherscan.io/tx/0x___
```

### **每个字段的含义**

| 字段 | 含义 | 我学到的 |
| --- | --- | --- |
| Transaction Hash | 交易唯一指纹 | 全球没有两笔相同，不可篡改 |
| Status | 成功或失败 | 失败了 Gas 也可能被扣 |
| Block | 被打包进的区块编号 | 区块越多叠加，越不可逆 |
| From / To | 发送方和接收方 | 没有私钥签名，From 不会出现你的地址 |
| Gas Used | 实际消耗的计算量 | 普通转账固定 21,000 Gas |
| Transaction Fee | Gas Used × Gas Price | 付给验证者的执行费用 |

### **Gas 的计算方式**

```
text
```

```
Gas Used  ×  Gas Price  =  实际费用
 21,000   ×   2 Gwei    =  0.000042 ETH

Gas Used  = 实际消耗（普通转账固定 21,000）
Gas Price = 当时网络的定价（越拥堵越贵）
Gas Limit = 你愿意消耗的上限（多余的退回）
```

### **我额外发现的**

```
text
```

```
点击 Block 高度数字 → 进入区块详情
→ 看到这个区块里打包了多少笔交易
→ 我的交易只是其中一笔
→ 这就是"打包进区块"在现实里的样子
```

* * *

## **核心概念速查**

### **Web2 vs Web3 支付对比**

| 维度 | Web2（支付宝） | Web3（链上转账） |
| --- | --- | --- |
| 信任对象 | 支付宝、银行 | 密码学规则 |
| 账户控制 | 平台控制 | 私钥控制 |
| 执行速度 | 毫秒级 | 秒到分钟 |
| 手续费 | 平台定价 | 市场竞价 |
| 失败后 | 平台可退款 | Gas 可能已扣 |
| 可撤销 | 可申诉冻结 | 原则上不可逆 |
| 账户找回 | 手机号验证 | 只有助记词 |

### **三类钱包动作的本质区别**

```
text
```

```
连接钱包  →  应用读取你的地址
             不改变链上状态 / 不消耗 Gas / 不需要私钥签名

签名消息  →  用私钥证明"这是我"
             不改变链上状态 / 不消耗 Gas / 需要私钥签名
             ⚠️ 可被用于链下授权，有风险

发送交易  →  请求改变链上状态
             改变链上状态 / 消耗 Gas / 需要私钥签名
             ⚠️ 不可逆，确认前必须看清楚每一行
```

### **关键概念一句话总结**

```
text
```

```
Smart Contract  →  规矩写在代码里，没人能偷偷改
Oracle          →  代码的眼睛，告诉链上世界发生了什么
Account Abstraction → 把账户从一把钥匙变成可编程保险箱
Network         →  交易从发出到完成要走的路，每段都可能堵
DeFi            →  用代码替代银行，自动执行，没有客服
Indexing        →  给账本加目录，让数据可以被快速查询
Security        →  按确认前想清楚，没有撤销键
Dev Stack       →  把一段代码变成稳定运行产品的工具链
```

* * *

## **我建立的直觉模型**

### **一笔链上操作的完整路径**

```
text
```

```
用户意图
  ↓
钱包签名（私钥证明身份）
  ↓
RPC 广播（发出去）
  ↓
Mempool 排队（公开等待）
  ↓
验证者打包（Gas 高的优先）
  ↓
EVM 执行（状态更新）
  ↓
区块确认（叠加，趋向不可逆）
  ↓
Etherscan 可查（永久记录）
```

### **读取 vs 写入的根本区别**

```
text
```

```
读取链上数据
  → 免费
  → 不需要签名
  → 不改变任何状态
  → 秒级返回

写入链上数据
  → 消耗 Gas
  → 必须私钥签名
  → 改变链上状态
  → 需要等待打包确认
  → 结果不可逆
```

* * *

## **安全清单**

```
text
```

```
操作前确认：
  □ 当前网络是否正确（Sepolia 还是主网）
  □ 目标地址是否正确（地址不可逆）
  □ 金额是否正确
  □ Gas 费是否合理
  □ 这个网站的域名是否正确

永远不做：
  □ 在任何网页输入助记词
  □ 把私钥截图或发给任何人
  □ 点击来源不明的链接连接钱包
  □ 无限 approve（授权无限额度给合约）

遇到问题先查：
  □ 交易哈希 → Etherscan 查状态
  □ 余额不对 → 确认当前网络
  □ 交易 pending → 等待或检查 Gas 是否太低
```

* * *

## **后续可以继续学习的方向**

```
text
```

```
已完成（本次实践）
  ✅ 钱包三要素
  ✅ 测试网操作
  ✅ Etherscan 读交易
  ✅ Remix 部署合约（如果完成了任务4）

下一步可以探索
  → 智能合约：写更复杂的合约，理解 ERC-20 token
  → DeFi 实操：在测试网上体验 swap、借贷
  → Account Abstraction：试用一个 AA 钱包
  → 安全：学习常见攻击方式（重入攻击、无限 approve）
  → Dev Stack：用 Foundry 在本地写合约测试
```

* * *

## **本次实践的链上证明**

```
text
```

```
这些记录永久存在于 Sepolia 链上，任何人可以验证：

钱包地址：      0x_______________
第一笔交易：    https://sepolia.etherscan.io/tx/0x___
合约地址：      0x_______________ （任务4完成后填写）
部署交易：      https://sepolia.etherscan.io/tx/0x___
```
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->






# **Web3基础知识串联理解**

## **生活场景：你想借一笔钱**

> **_你手里有一块名表，想临时借一些现金用，但不想卖掉表。你去找一家当铺。_**

就这么简单的一件事。我们一步一步来看，每一步对应一个概念。

* * *

## **第一步：当铺的规矩是谁定的？**

### **对应概念：Smart Contract（智能合约）**

**生活版本：**

你走进一家传统当铺。当铺老板说：

-   你的表值 10000 元，我最多借你 7000 元
    
-   每个月利息 3%
    
-   如果你 3 个月不还，我有权利把表卖掉
    

这些规矩是当铺老板定的。他也可以随时改变主意——今天说借 7000，明天改成 5000，甚至心情不好直接不借。

**Web3 版本：**

DeFi 借贷平台的规矩不是某个人定的，而是写进了**代码**里。

```
text
```

```
代码写着：
- 抵押品价值的 75%，你可以借走
- 利率根据当前有多少人在借自动计算
- 如果你的抵押品价值跌到借款额以下，任何人都可以来清算你
```

这段代码一旦发布，**任何人都改不了**，包括平台创始人。

**为什么重要：**

传统当铺——你要相信老板不会耍赖。

DeFi 当铺——规矩写在代码里，白纸黑字，全球任何人都可以看，没人能偷偷改。

> **_Smart Contract 就是：把"规矩"写成代码，发布到全世界的电脑上保存，没有人能单独修改它。_**

* * *

## **第二步：当铺怎么知道你的表值多少钱？**

### **对应概念：Oracle（预言机）**

**生活版本：**

当铺老板不可能知道世界上所有东西的价格。他需要去查：

-   查珠宝行的报价
    
-   查二手市场的成交记录
    
-   请专业鉴定师来评估
    

然后根据这些外部信息，决定借你多少钱。

**如果鉴定师被收买了怎么办？** 告诉老板你的表值 100000 元，你就能借走 70000 元——但表根本不值那么多。当铺亏了。

**Web3 版本：**

代码本身不知道今天 ETH 值多少美元。这个价格在"外部世界"，代码需要有人告诉它。

**Oracle（预言机）就是负责把外部价格传递给代码的机制。**

```
text
```

```
现实世界的 ETH 价格：$2000
    ↓
预言机（多个独立来源核对后）
    ↓
告诉合约：ETH 现在 = $2000
    ↓
合约计算：你存了 2 个 ETH = $4000，最多借 $3000
```

**为什么重要：**

如果有人攻击预言机，让它报告假价格：

```
text
```

```
被篡改的价格：ETH = $20000（假的）
    ↓
合约以为你的抵押品值 $40000
    ↓
你可以借走 $30000（实际上你的抵押品只值 $4000）
    ↓
你带着 $30000 跑路，协议损失惨重
```

这就是为什么预言机是整个系统里最危险的环节之一——代码本身没有漏洞，但喂给它的数据是假的。

> **_Oracle 就是：代码的"眼睛"，负责告诉代码外部世界正在发生什么。眼睛如果被蒙住或者骗了，代码就会做出错误决定。_**

* * *

## **第三步：你怎么证明那块表是你的？**

### **对应概念：Account Abstraction（账户抽象）**

**生活版本（普通当铺）：**

你带着表走进去，当铺要看：

-   身份证（证明你是你）
    
-   发票或购买记录（证明表是你的）
    

如果你忘带身份证，当铺不借。没有商量余地。

而且，你必须**亲自去**，不能让朋友代劳（当铺规矩）。也不能说"每个月自动从我账户还款"，必须手动来还。

**生活版本（更智能的当铺）：**

这家当铺更灵活：

-   你可以指定"我信任的三个人，任何两个人同意，就可以代表我操作"
    
-   你可以让助手每月自动还款，但单次还款不超过 500 元
    
-   你可以说"如果我三个月没来，自动帮我把表赎回来"
    

**Web3 版本：**

普通钱包（EOA）= 普通当铺：

-   只有一把钥匙（私钥）
    
-   钥匙丢了，什么都完了
    
-   每一步都必须手动确认
    
-   必须用 ETH 付手续费，没有 ETH 就寸步难行
    

智能账户（Account Abstraction）= 更智能的当铺：

-   可以设置"3 个人里 2 个人同意才能操作"（多签）
    
-   可以让 AI 助手自动操作，但限定"每天最多动 1000 元"（Session Key）
    
-   平台可以替你付手续费（Gas Sponsorship）
    
-   私钥丢了，可以通过信任的朋友恢复（社交恢复）
    

**为什么重要：**

对于普通用户来说，"必须自己保管一串神秘字符（私钥），丢了就永久失去一切"——这个体验太可怕了，大多数人不会接受。

账户抽象让 Web3 的账户体验更接近现实世界：有备份方案，有权限层级，有自动化空间。

> **_Account Abstraction 就是：让钱包从"只有一把钥匙开的保险箱"变成"可以设规则、可以恢复、可以委托的智能保险箱"。_**

* * *

## **第四步：你把表递给当铺，到收到现金，中间经历了什么？**

### **对应概念：Network（网络）**

**生活版本：**

你把表递给老板，老板：

1.  检查表是不是真的（验证）
    
2.  在台账上记录这笔交易（记账）
    
3.  从保险柜里数钱给你（执行）
    
4.  给你一张收据（确认）
    

整个过程你站在柜台前，5 分钟搞定。

**Web3 版本：**

你点击"存入"按钮，接下来发生了 6 件事，每一件都需要时间：

```
text
```

```
1. 你的钱包对这笔操作签名
   （相当于你在收据上签字，证明是你本人操作）
        ↓
2. 这笔操作被发送到 RPC 节点
   （相当于快递员把你签好的文件发出去）
        ↓
3. 进入 Mempool（等待室）
   （相当于你的文件到了邮局，在等被处理，
    此刻全世界都能看到你发了这个请求）
        ↓
4. 验证者把你的操作打包进区块
   （相当于邮局工作人员把今天的信件整理成一捆，
    gas 费高的信件优先处理）
        ↓
5. 代码执行，你的存款被记录
   （相当于对方收到信件，操作完成）
        ↓
6. 后续区块叠加，操作越来越不可逆
   （相当于越来越多人见证了这件事，想抵赖越来越难）
```

**为什么这个过程会出问题：**

```
text
```

```
RPC 没响应       → 相当于快递员接不到电话，你的文件发不出去
Mempool 太拥挤   → 相当于邮局积压，你的信排在很后面
gas 费给少了     → 你的信一直没被优先处理，一直在等
网络拥堵         → 大家都在抢，你要么加价，要么等
```

这就是为什么有时候你发了交易，页面一直转圈——不是代码坏了，是你的"信件"还在排队。

> **_Network 就是：你的操作从"发出"到"完成"经历的完整通道。通道里每一段都可能堵、可能慢、可能失败。_**

* * *

## **第五步：当铺老板怎么知道现在该收多少利息？**

### **对应概念：DeFi（去中心化金融）**

**生活版本（传统银行）：**

银行每年开一次会，董事会决定今年存款利率 2%，贷款利率 5%。这个数字和"现在市场上到底有多少人想借钱"没有直接关系。银行说多少就是多少。

**Web3 版本（DeFi）：**

DeFi 的利率是**自动计算的**，根据"现在有多少人在借"实时变化：

```
text
```

```
想象一个水池：

存款人往里倒水（存 USDC）→ 水池变满
借款人从里取水（借 USDC）→ 水池变浅

水池快空了（很多人在借）→ 利率自动升高
  原因：鼓励更多人来存钱（利息高了更划算）
  同时：借款变贵，部分人会还钱

水池很满（很少人在借）→ 利率自动降低
  原因：鼓励更多人来借（便宜嘛）
```

没有任何人在手动调这个数字，代码根据水位自动计算。

**清算是什么：**

回到当铺比喻——你用价值 10000 元的表借了 7000 元现金。

第二天表的市场价格跌到了 8000 元，老板还算安全。

但如果表跌到了 6500 元，低于你借的 7000 元——老板亏了。

```
text
```

```
传统当铺：老板打电话给你，"快来补抵押品或者还钱"
DeFi：代码自动允许任何人来"抢"你的抵押品
       抢的人帮你还了债，然后拿走你的抵押品，
       还能获得一点奖励（清算奖励）
```

没有老板打电话，代码自动执行。这就是 DeFi 的核心——**规则自动运行，没有人工干预**。

> **_DeFi 就是：把银行、当铺、交易所这些金融服务，用自动运行的代码来替代。规则透明，自动执行，但也意味着没有客服，出了问题没人帮你。_**

* * *

## **第六步：当铺怎么管理台账？**

### **对应概念：Indexing（索引）**

**生活版本：**

当铺有一本台账，记录：

-   谁在什么时候存了什么东西
    
-   利息累计了多少
    
-   哪些人快到期了
    

如果你想查"我三年前的交易记录"，老板翻翻台账就能找到。

**Web3 版本：**

链上的"台账"（区块链）记录了所有事情，但它的存储方式非常原始：

```
text
```

```
区块 1000000: [交易A, 交易B, 交易C...]
区块 1000001: [交易D, 交易E, 交易F...]
区块 1000002: [交易G, 交易H, 交易I...]
...
```

如果你想查"Alice 过去 30 天所有的借款记录"，你需要从第一个区块翻到最后一个区块，找出所有和 Alice 相关的交易——就像要找一条信息，但台账没有索引，只能从第一页翻到最后一页。

**Indexing 做的事：**

```
text
```

```
把链上数据
    ↓
重新整理，建立索引
    ↓
变成可以快速查询的数据库
    ↓
"查 Alice 最近 30 天记录" → 0.01 秒返回结果
```

**为什么重要：**

没有索引层，你的 App 每次显示用户历史记录，都要扫描几百万个区块，用户等 10 分钟才能看到页面——这根本没法用。

> **_Indexing 就是：给区块链的"台账"加上目录和索引，让查询从"翻遍整本书"变成"直接翻到那一页"。_**

* * *

## **第七步：整个过程哪里可能出问题？**

### **对应概念：Security（安全）**

**生活版本：**

你去当铺的路上，可能遇到：

```
text
```

```
骗局1：假当铺
  门口贴着正规当铺的牌子，进去把表交出去，
  拿到的是假钞，人跑了

骗局2：鉴定师造假
  故意压低你表的价值，让你以为表只值 3000，
  当铺实际上知道值 10000

骗局3：合同藏陷阱
  你以为签的是"3个月还款"，小字里写的是"3天还款"

骗局4：内鬼
  当铺伙计趁老板不注意，把你的表换成假的
```

**Web3 版本：**

```
text
```

```
假当铺（钓鱼网站）
  → 网页看起来和真的一模一样，但合约地址是假的
  → 你点击"存入"，钱直接进了骗子的口袋

鉴定师造假（预言机攻击）
  → 价格数据被篡改，合约基于错误价格运行

合同陷阱（合约漏洞）
  → 代码里有 bug，攻击者找到特殊操作路径，
    把本不属于他的钱取走

内鬼（权限管理问题）
  → 平台管理员私钥被盗
  → AI Agent 的权限设置太宽，被利用做了不该做的操作

没有后悔药
  → 传统银行被骗：打电话、报警、申请撤销
  → DeFi 被骗：交易已确认，没有任何机构可以帮你撤回
```

**最关键的一点：**

传统金融出了问题，有监管、有保险、有法院。

DeFi 出了问题，代码已经执行，结果不可逆，通常没有任何人可以帮你。

> **_Web3 安全的核心就是：在按下确认键之前，把所有可能出错的地方想清楚。因为按下去之后，没有撤销键。_**

* * *

## **第八步：当铺是怎么建起来的？**

### **对应概念：Dev Stack（开发工具栈）**

**生活版本：**

建一家当铺需要：

-   选址（选哪条链部署）
    
-   装修设计（写合约代码）
    
-   试营业测试（测试网验证）
    
-   工商注册（合约部署上链）
    
-   营业执照公示（合约代码开源验证）
    
-   日常运营系统（前端、监控、报警）
    

少了任何一步，当铺要么开不起来，要么开起来了但跑不稳。

**Web3 版本：**

```
text
```

```
Hardhat / Foundry  → 建筑工具，用来写、编译、测试合约代码
测试网             → 试营业，用假钱测试所有流程
部署脚本           → 正式开业的步骤记录，可以重复执行
合约验证           → 把合约代码公开，让用户可以亲眼核查规则
前端 SDK           → 收银台，让用户能和合约交互
监控系统           → 摄像头，发现异常自动报警
```

**为什么重要：**

一个 Web3 项目，写合约只是最开始的一步。

真正让它稳定运行，需要每一个环节都做对——部署错了链、合约地址记录错了、前端调用了错误的方法，都可能导致用户资产损失。

> **_Dev Stack 就是：把"一段合约代码"变成"一个可以稳定运行的产品"所需要的全套工具和流程。_**

* * *

## **把所有概念用一张图串起来**

```
text
```

```
你想去当铺借钱（用户想借 USDC）
        │
        ▼
当铺用什么规矩？          ← Smart Contract（规矩写在代码里，没人能改）
        │
        ▼
表值多少钱？              ← Oracle（外部价格传给代码，是代码的眼睛）
        │
        ▼
你怎么证明表是你的？       ← Account Abstraction（更灵活的身份和权限）
        │
        ▼
你递表、拿钱的过程        ← Network（操作从发出到完成的通道）
        │
        ▼
利率怎么算？触发清算？     ← DeFi（自动运行的金融规则）
        │
        ▼
台账怎么查？              ← Indexing（让数据可以被快速查询）
        │
        ▼
哪里可能被骗？            ← Security（每一步都有风险，没有撤销键）
        │
        ▼
当铺怎么建起来并稳定运营？  ← Dev Stack（从代码到产品的工具和流程）
```

* * *

## **最后一句话总结每个概念**

| 概念 | 一句大白话 |
| --- | --- |
| Smart Contract | 规矩写在代码里，没人能偷偷改 |
| Oracle | 代码的眼睛，负责告诉代码外面的世界 |
| Account Abstraction | 让钱包从"一把钥匙"变成"可编程的保险箱" |
| Network | 你的操作从发出到完成要走的路，每段都可能堵 |
| DeFi | 用代码替代银行，规则自动执行，没有客服 |
| Indexing | 给账本加目录，让查询从翻整本书变成直接翻到那页 |
| Security | 按下确认前想清楚，因为没有撤销键 |
| Dev Stack | 把一段代码变成稳定运行的产品所需的全套工具 |

* * *

**这八个概念，本质上是同一件事的八个角度：一笔不可逆的、公开的、自动执行的链上操作，从被创造到被确认的完整旅程。** 每个概念单独看都是局部，放在一起才是全貌。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->







# **Web2 vs Web3 交易支付区别**

* * *

## **先建立一个直觉模型**

用一个日常场景做锚点：

> **_你在网上买一件衣服，付了 200 元。_**

Web2 和 Web3 都能完成这件事，但**钱在中间经历的路径完全不同**。

* * *

## **Web2 支付：你信任的是中间人**

```
text
```

```
你 → 支付宝/微信 → 银行网络 → 商家收款账户
```

这条链上每一个节点都是**有牌照的中心化机构**。

### **一笔 Web2 支付实际发生了什么**

你点击"付款"的那一刻，**真正发生的不是钱在移动，而是数字在变化**：

```
text
```

```
支付宝数据库：
  你的账户余额：500 → 300    （减少 200）
  商家账户余额：1000 → 1200  （增加 200）
```

这只是支付宝**自己数据库里的两行记录更新**。钱并没有真的"走"过去，银行之间的实际清算可能是 T+1 甚至更晚。

### **Web2 支付的本质**

-   你相信支付宝不会改错这两行数字
    
-   支付宝相信银行的清算系统
    
-   银行受监管机构约束
    
-   **整个系统建立在对机构的信任上**
    

### **由此带来的能力**

| 能力 | 原理 |
| --- | --- |
| 忘记密码可以找回 | 平台控制账户，可以重置 |
| 转错了可以申请退款 | 平台可以修改数据库记录 |
| 账户被盗可以冻结 | 平台有权限锁定账户 |
| 不需要关心"手续费" | 成本被平台平摊或吸收 |

* * *

## **Web3 支付：你信任的是规则本身**

```
text
```

```
你的钱包 → 签名交易 → 广播到网络 → 矿工/验证者打包 → 链上状态更新
```

这条链上**没有任何一个机构**可以单独决定结果。

### **一笔 Web3 交易实际发生了什么**

分成六个物理步骤，每一步都有对应概念：

* * *

### **步骤 1：构造交易**

你的 dApp 或钱包把你的意图打包成一个结构化数据：

```
text
```

```
{
  from:     "0xYourAddress",       // 发送方
  to:       "0xShopAddress",       // 接收方
  value:    0.05 ETH,              // 金额
  gasLimit: 21000,                 // 愿意消耗的最大计算量
  gasPrice: 20 gwei,               // 每单位计算量愿意付多少
  nonce:    7                      // 你这个地址发出的第 7 笔交易
}
```

**Nonce 是什么？** 是你地址的交易序列号，从 0 开始累加，防止同一笔交易被重复提交。这是 Web2 里没有的概念，因为 Web2 的去重由平台数据库负责。

* * *

### **步骤 2：用私钥签名**

钱包用你的私钥对这笔交易做数字签名。

```
text
```

```
私钥 + 交易内容 → 签名（一串哈希）
```

**这一步的意义：**

-   证明"这笔交易确实是这个地址的控制者发出的"
    
-   签名后任何人都可以验证，但没有私钥就无法伪造
    
-   **私钥永远不离开你的设备**，钱包弹窗只是让你确认内容
    

对比 Web2：Web2 的"授权"是你输入密码，服务器验证密码是否匹配数据库记录。Web3 的"授权"是密码学证明，不需要任何服务器参与验证。

* * *

### **步骤 3：广播到网络**

签名后的交易被发送到以太坊的 P2P 网络，进入**内存池（Mempool）**。

Mempool 是什么？可以理解为**等待室**：所有已广播但还没被打包进区块的交易都在这里等待。

```
text
```

```
Mempool 里此刻可能有成千上万笔交易在排队
```

**这里出现了 Web2 完全没有的概念：你的交易不是立刻执行的，它在公开排队。**

* * *

### **步骤 4：验证者选择并打包**

验证者（或矿工）从 Mempool 里选取交易打包进区块。

**他们怎么选？** 通常优先选 gas 费高的交易，因为 gas 费是给他们的报酬。

这就是为什么网络拥堵时你需要付更高的 gas：**你在和其他用户竞价，争夺有限的区块空间。**

```
text
```

```
Web2：付款后立刻成功（毫秒级）
Web3：广播后等待打包（秒到分钟，拥堵时更久）
```

* * *

### **步骤 5：EVM 执行，状态更新**

交易被打包后，以太坊虚拟机（EVM）执行它，更新全局状态：

```
text
```

```
链上状态：
  0xYourAddress 余额：1.0 ETH → 0.95 ETH   （减少 0.05 ETH + gas）
  0xShopAddress 余额：0.5 ETH → 0.55 ETH   （增加 0.05 ETH）
```

表面上和 Web2 的数据库更新很像，但关键差异是：

-   **谁维护这个"数据库"？** 全网数千个节点同时保存同一份状态
    
-   **谁能修改？** 只有符合规则的交易才能触发修改，没有管理员权限
    

* * *

### **步骤 6：区块确认，不可篡改**

交易被打包进第 N 个区块后，后续区块会不断叠加在它上面。叠加的区块越多，篡改成本越高，交易越不可逆。

```
text
```

```
1 个确认  → 交易已上链，但理论上可被重组
6 个确认  → 业界通常认为足够安全（针对 PoW）
最终确认  → PoS 下达到 finality，数学上不可逆
```

**这是 Web2 里没有的概念**：Web2 的数据库记录随时可以被管理员修改；Web3 的历史记录修改成本接近不可能。

* * *

## **对比总结：同一笔付款，两个世界**

| 维度 | Web2（支付宝转账） | Web3（链上转账） |
| --- | --- | --- |
| 信任对象 | 支付宝、银行、监管机构 | 密码学规则、共识机制 |
| 账户控制权 | 平台控制，你使用 | 私钥控制，无人可代替 |
| 执行速度 | 毫秒级 | 秒到分钟 |
| 手续费逻辑 | 平台定价，有时免费 | 市场竞价，随网络状态浮动 |
| 失败后 | 平台退款，状态回滚 | gas 可能已消耗，需重新发送 |
| 可撤销性 | 可申诉、可冻结、可退款 | 原则上不可撤销 |
| 记录归属 | 平台数据库（私有） | 全网账本（公开） |
| 账户找回 | 手机号、身份证验证 | 只有助记词，无其他方式 |

* * *

## **由此打通三个常见困惑**

### **困惑 1：为什么 gas 费有时很贵，有时很便宜？**

因为区块空间是固定的，用户在竞价。网络拥堵（比如某个热门 NFT 开售）时，大家都想让自己的交易先被打包，于是竞相提高 gas，价格就涨上去了。

Web2 里这个成本被平台隐藏了，但它并不是不存在，只是你没看见。

* * *

### **困惑 2：为什么交易失败了还会扣 gas？**

因为 gas 是付给验证者的**执行费用**，不是结果费用。验证者执行了你的交易，发现它失败了（比如合约逻辑 revert），这个执行本身已经消耗了计算资源，所以费用不退。

类比：你叫了一辆出租车去机场，路上发现证件忘带了，司机把你送回家，你还是要付车费。执行了就计费。

* * *

### **困惑 3：为什么连接钱包不等于可以动用资产？**

连接钱包只是 dApp 获得了**读取你地址**的权限，相当于 Web2 里"用手机号登录"。

真正能动用资产，需要你用私钥**签名一笔具体的交易**，而且每一笔都需要单独签名确认。

这是一种比 Web2 更细粒度的权限控制：不是"登录了就信任这个应用"，而是"每一个链上动作都需要你明确授权"。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
