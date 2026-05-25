---
timezone: UTC+8
---

# Flower-jie

**GitHub ID:** Flower-jie

**Telegram:** @flower

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->
# **第六天学习笔记（AI × DePIN、人格证明与安全）**

**日期：2026年5月23日**

* * *

## **一、AI 与 DePIN 的结合**

### **1\. 什么是 DePIN**

-   **去中心化物理基础设施网络**：利用代币激励个人或企业部署硬件（如计算、存储、传感器、无线基站），形成共享网络。
    
-   **典型赛道**：计算（Akash）、存储（Filecoin, Arweave）、无线（Helium）、地图（Hivemapper）、能源（Powerledger）。
    

### **2\. AI 对 DePIN 的赋能**

-   **智能资源调度**：AI 预测不同区域的计算/存储需求，动态分配节点任务，提高利用率。
    
-   **异常检测**：监控节点在线率、响应延迟、数据质量，自动标记恶意或故障节点。
    
-   **自动化奖惩**：AI 计算节点贡献分数，智能合约据此发放代币或罚没质押。
    

### **3\. 数据采集与标注市场**

-   **问题**：AI 模型需要大量高质量标注数据，中心化平台抽成高且不透明。
    
-   **DePIN 方案**：全球用户通过 APP 采集图像、语音等数据，代币奖励，链上记录贡献；去中心化标注任务，使用智能合约自动结算。
    
-   **案例**：
    
    -   **Hivemapper**：行车记录仪采集地图数据，AI 提取道路信息。
        
    -   **Natix**：众包摄像头数据，用于城市 AI 分析。
        

### **4\. 边缘 AI 推理网络**

-   **概念**：在路由器、手机、IoT 设备上运行轻量级模型，将推理结果上链或卖给需求方。
    
-   **激励**：设备提供算力获得代币，用户支付小额费用调用推理。
    
-   **代表项目**：[**NetMind.AI**](http://NetMind.AI)、[**Clore.ai**](http://Clore.ai)。
    

* * *

## **二、人格证明（Proof of Personhood）与 AI 身份**

### **1\. 为什么需要人格证明**

-   **问题**：AI 可以生成大量虚假账户，进行女巫攻击（Sybil Attack）、空投掠夺、虚假投票。
    
-   **目标**：在不泄露真实身份的前提下，证明一个地址背后是一个独立的人类。
    

### **2\. 主流解决方案**

| 项目 | 方法 | 隐私性 | 去中心化程度 |
| --- | --- | --- | --- |
| Worldcoin | 虹膜扫描（Orb） | 较高（哈希存储） | 中等（依赖 Orb 硬件） |
| BrightID | 社交验证（连接已有可信账户） | 高 | 高 |
| Proof of Humanity | 视频 + 押注挑战 | 低（信息公开） | 高（通过 Kleros 争议） |
| Idena | 每日画图验证（独特性游戏） | 高 | 高（无硬件） |

### **3\. AI 对人证的反向攻击**

-   **Deepfake 视频挑战**：攻击者可用生成视频伪装真人，通过视频验证。
    
-   **AI 生成虹膜/指纹**：理论上可欺骗部分生物识别系统（目前 Worldcoin 声称有抗攻击机制）。
    
-   **防御思路**：结合多因素（生物+社交+行为）+ 持续挑战+零知识证明。
    

### **4\. 人格证明与 AI 治理**

-   **一人一票 DAO**：防止鲸鱼和机器人垄断投票，实现更公平的社区决策。
    
-   **AI 生成内容的身份标识**：使用 DID 绑定模型，防止深度伪造滥用。
    

* * *

## **三、AI 安全与对抗攻击（Web3 视角）**

### **1\. 对抗性攻击**

-   **定义**：对输入添加微小扰动，导致 AI 模型输出完全错误。
    
-   **在 Web3 中的场景**：
    
    -   攻击 AI 预言机：篡改图像（如保险理赔照片），使模型将“损坏”误判为“完好”。
        
    -   攻击自动化交易策略：输入虚假链上数据，诱导 AI 机器人错误开仓。
        
-   **防御**：
    
    -   使用对抗训练（在训练时加入扰动样本）。
        
    -   模型集成投票。
        
    -   输入预处理（如特征压缩、随机平滑）。
        

### **2\. 数据投毒**

-   **在去中心化数据市场**：攻击者上传标注错误或后门数据，破坏模型训练。
    
-   **防御**：
    
    -   数据验证矿工（挑战标注质量）。
        
    -   分布式共识：多个节点独立标注，结果不一致则进入争议仲裁。
        
    -   信誉系统：历史准确率高的标注者权重更高。
        

### **3\. 模型窃取与反转**

-   **攻击者通过 API 查询偷取模型决策边界**，重构近似模型。
    
-   **在 Web3 中**：如果模型是作为链上资源（如 NFT 模型的权重文件），可能被直接下载。
    
-   **防御**：
    
    -   限制 API 调用频率和精度。
        
    -   对模型权重加密，仅授权地址可解密。
        
    -   使用可信执行环境（TEE）保护推理过程。
        

### **4\. 智能合约与 AI 交互的风险**

-   **重入攻击**：AI 回调合约时未正确更新状态。
    
-   **Gas 炸弹**：AI 生成超长输出导致交易 gas 暴涨。
    
-   **访问控制**：谁允许调用 AI 预言机更新结果？需设置权限或基于质押的共识。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->

# **第五天学习笔记（AI × Web3 实战与生态）**

**日期：2026年5月22日**

* * *

## **一、AI 驱动链上交易与 DeFi 策略**

### **1\. AI 辅助的自动做市商（AMM）优化**

-   **传统 AMM**：恒定乘积公式（x\*y=k），存在无常损失和低效资本利用。
    
-   **AI 动态调整**：利用强化学习或预测模型，根据历史波动率、订单流动态调整池子权重或费率。
    
-   **案例**：
    
    -   **Blackbird**（概念）：AI 管理的集中流动性池，自动调整价格区间。
        
    -   **Maverick Protocol**：已有一定程度的动态分配，未来可结合 AI 预测。
        
-   **学习点**：理解如何将 AI 模型输出（如价格区间建议）通过预言机上链，修改池子参数。
    

### **2\. 智能交易机器人**

-   **组件**：
    
    -   链上数据索引（The Graph、Dune）
        
    -   AI 信号生成（技术指标 + 情绪分析 + 链上巨鲸监控）
        
    -   交易执行模块（合约调用，支持限价单、时间加权平均价格 TWAP）
        
-   **风险控制**：设置最大回撤、黑名单代币、多签管理。
    
-   **开源框架**：Hummingbot（支持 AI 策略插件）、Freqtrade（可桥接 Web3）。
    

### **3\. 清算保护与借贷优化**

-   **AI 预警**：监控用户借贷头寸的健康因子，预测清算风险，提前发送提醒或自动还款。
    
-   **跨协议优化**：寻找最优借贷利率，自动在 Aave、Compound 之间迁移资金。
    
-   **实现思路**：链下 agent 定期扫描链上状态，调用合约执行再平衡。
    

* * *

## **二、AI 生成内容（AIGC）与 NFT 的结合**

### **1\. 动态 NFT（dNFT）**

-   **定义**：NFT 的元数据（图像、属性）可根据链上或链下数据变化。
    
-   **AI 驱动**：
    
    -   根据用户与 NFT 的交互（如游戏得分、投票行为），AI 生成新的视觉风格或故事情节。
        
    -   使用稳定扩散模型（Stable Diffusion）生成新图像，上传至 IPFS，并更新 NFT 的 URI。
        
-   **案例**：
    
    -   **Async Art**：允许 NFT 图层由不同参数控制。
        
    -   **Alethea AI**：可对话的智能 NFT（iNFT），内置 LLM。
        

### **2\. AI 生成 NFT 资产**

-   **工具**：通过提示生成独特艺术品的平台（如 **Botto** – 社区投票 + AI 创作）。
    
-   **版权与稀有度**：使用链上随机数 + 模型种子确保可验证的稀缺性。
    
-   **市场**：可在 OpenSea 上架，但需明确是否为 AI 生成。
    

### **3\. 文本到 3D 模型 + 链上存储**

-   **技术**：从文本生成 3D 模型（如 Shap-E），然后存入 IPFS/Filecoin，铸造为 NFT。
    
-   **适用场景**：元宇宙游戏道具、虚拟建筑、可交互的 3D 艺术品。
    

* * *

## **三、去中心化 AI 模型市场与推理**

### **1\. 模型所有权与 NFT 化**

-   **概念**：将 AI 模型权重或微调后的模型文件铸造为 NFT，代表所有权或使用许可。
    
-   **价值**：模型创作者可版税分成；购买者可验证所有权。
    
-   **案例**：
    
    -   **Model & Co**（实验性）：用 ERC-1155 表示不同版本的模型。
        
    -   **Ocean Protocol**：数据资产 token 化，可扩展至模型。
        

### **2\. 去中心化推理网络**

-   **用户发起推理任务** → 节点提供算力执行 → 结果聚合与验证 → 支付代币。
    
-   **验证机制**：
    
    -   乐观验证（挑战期）
        
    -   多数投票
        
    -   零知识证明（验证计算正确性，但成本高）
        
-   **代表项目**：
    
    -   **Gensyn**：分布式深度学习训练/推理网络。
        
    -   [**Together.ai**](http://Together.ai)：面向开发者的去中心化推理（半中心化）。
        
    -   **Hugging Face + Akash**：组合方案。
        

### **3\. 小语言模型（SLM）上链尝试**

-   随着轻量级模型（Phi-3、TinyLlama）的出现，可在链上 EVM 环境运行极简模型？
    
-   **现状**：完全链上推理仍不现实，但可以使用**链下 ZK 证明**来证明某个 SLM 的推理结果正确。
    

* * *

## **四、AI 治理 DAO 与智能体协作**

### **1\. AI 参与 DAO 投票**

-   **场景**：AI 根据链上数据分析、提案影响模拟，自动投出选票（需授权）。
    
-   **工具**：**Governor AI** 框架（概念），通过智能体分析提案并执行投票。
    
-   **风险**：如果 AI 被操纵，可能导致治理攻击。需设置权限范围。
    

### **2\. 多智能体协作 DAO**

-   **不同角色的 AI 智能体**：市场分析员、资金管理师、代码审计员。
    
-   **交互方式**：智能体通过链上消息（智能合约事件）或链下消息队列协调。
    
-   **案例**：
    
    -   **Autolas**（由基于 Bittensor 的子网构建）：多个 AI 模型竞争提供最佳答案。
        
    -   **SingularityDAO**：动态代币篮子管理。
        

### **3\. AI 生成提案与报告**

-   **自动撰写提案**：LLM 根据社区讨论、链上指标生成结构化的 DAO 治理提案。
    
-   **报告生成**：定期总结 DAO 的财务、活动、提案进展，通过邮件或 Discord 发布。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->


# **第五天学习笔记（项目实战与代币经济）**

**日期：2026年5月22日**

* * *

## **一、AI × Web3 代表性项目深度解析**

### **1\. Bittensor (TAO) —— 去中心化AI市场**

-   **核心机制**：
    
    -   网络由多个**子网（Subnet）** 组成，每个子网专注于特定AI任务（如文本生成、翻译、图像识别）。
        
    -   **矿工**：提供模型推理或训练服务，获得TAO奖励。
        
    -   **验证者**：评估矿工输出质量，决定奖励分配。
        
    -   **提名者**：质押TAO给验证者，分享奖励。
        
-   **经济模型**：
    
    -   每12秒一个区块，通胀率随时间递减。
        
    -   子网之间竞争，表现差的子网会被淘汰。
        
-   **AI×Web3启示**：通过市场机制激励高质量AI服务，无需中心化平台。
    

### **2\. Render Network (RNDR) —— 分布式GPU渲染 + AI推理**

-   **传统业务**：3D渲染（Octane、Blender）。
    
-   **AI扩展**：2024-2026年逐步支持AI推理任务（如Stable Diffusion、LLM微调）。
    
-   **工作原理**：
    
    -   用户支付RNDR代币，发布渲染/推理任务。
        
    -   节点运营商提供GPU算力，完成任务获得报酬。
        
    -   使用**OctaneRender**技术保证结果可验证。
        
-   **与Bittensor区别**：Render聚焦于**计算资源**，Bittensor聚焦于**模型输出**。
    

### **3\. Oraichain —— AI预言机**

-   **特色**：将AI模型作为“数据源”提供给智能合约。
    
-   **应用**：
    
    -   AI驱动的价格预言机（结合链上数据+外部模型预测）。
        
    -   可信执行环境（TEE）保证模型运行完整性。
        
-   **对比Chainlink**：Chainlink主要传递确定性数据（如价格），Oraichain传递AI模型的软输出（如概率、分类）。
    

### **4\. Autonolas (OLAS) —— 去中心化AI Agent网络**

-   **概念**：任何人都可以创建、共享、运行链下AI Agent。
    
-   **Agent注册表**：Agent存储在链上，用户可安装调用。
    
-   **代币用途**：质押、治理、购买Agent服务。
    
-   **值得关注**：为“Agent经济”提供了基础设施，类似App Store但去中心化。
    

* * *

## **二、设计一个AI × Web3项目的代币经济模型**

一个好的项目需要**代币飞轮**：用户 → 服务 → 价值 → 代币需求 → 网络增长。

### **案例：AI图像生成市场**

-   **角色**：
    
    -   **创作者**：使用平台工具生成AI图片，上传到NFT市场。
        
    -   **算力提供者**：运行Stable Diffusion节点，为生成任务提供GPU。
        
    -   **评估者**：审核生成图片质量，防止低质或违规内容。
        
    -   **收藏家**：购买或收藏NFT图片。
        
-   **代币（IMG）经济**：
    
    -   创作者生成图片消耗IMG，算力提供者赚取IMG。
        
    -   评估者质押IMG参与审核，获得代币奖励。
        
    -   收藏家可使用IMG购买图片，部分IMG销毁（通缩）。
        
    -   平台手续费回购IMG并分配质押者。
        
-   **飞轮**：更多创作者 → 更多生成任务 → 算力提供者收益高 → 更多节点 → 网络更快更便宜 → 更多用户。
    

### **代币设计要点**

| 设计维度 | 要点说明 |
| --- | --- |
| 发行 | 公平启动（无预挖）或机构轮 + 社区轮 |
| 分配 | 矿工/节点 > 国库/生态 > 团队（锁仓） > 早期支持者 |
| 效用 | 支付gas、质押、治理、回购销毁、访问高级功能 |
| 治理 | 代币持有者投票决定手续费率、新功能等 |
| 通胀 | 用于奖励，随时间递减（如比特币）或保持稳定（如以太坊） |

* * *

## **三、端到端迷你项目：链上AI问答市场**

### **项目背景**

用户可以用代币提问，AI模型回答，回答被点赞后，模型提供者获得奖励。

### **架构设计**

text

```
用户（提问 + 支付） → 智能合约（记录问题） → 链下监听程序 → 调用LLM API → 提交回答 → 用户点赞 → 奖励分发
```

### **智能合约核心功能**

solidity

```
contract AIAnswerMarket {
    struct Question {
        uint256 id;
        address asker;
        string content;
        uint256 bounty;
        string answer;
        uint256 upvotes;
        address responder;
        bool answered;
    }
    mapping(uint256 => Question) public questions;
    uint256 public nextId;
    mapping(address => uint256) public rewards;

    function ask(string calldata _content) external payable {
        require(msg.value > 0, "Need bounty");
        questions[nextId] = Question(nextId, msg.sender, _content, msg.value, "", 0, address(0), false);
        nextId++;
    }

    function submitAnswer(uint256 _id, string calldata _answer) external {
        Question storage q = questions[_id];
        require(!q.answered, "Already answered");
        q.answer = _answer;
        q.responder = msg.sender;
        q.answered = true;
    }

    function upvote(uint256 _id) external {
        Question storage q = questions[_id];
        require(q.answered, "Not answered");
        q.upvotes++;
        if (q.upvotes >= 3) { // 简化：3个点赞触发奖励
            uint256 reward = q.bounty;
            payable(q.responder).transfer(reward);
            rewards[q.responder] += reward;
        }
    }
}
```

### **链下Agent（Python伪代码）**

python

```
from web3 import Web3
import openai

w3 = Web3(Web3.HTTPProvider("http://localhost:8545"))
contract = w3.eth.contract(address=..., abi=...)

def listen_for_questions():
    event_filter = contract.events.QuestionAsked.create_filter(fromBlock='latest')
    for event in event_filter.get_new_entries():
        q_id = event.args.id
        content = event.args.content
        # 调用AI模型
        response = openai.ChatCompletion.create(..., messages=[{"role": "user", "content": content}])
        answer = response.choices[0].message.content
        # 提交答案
        contract.functions.submitAnswer(q_id, answer).transact({'from': agent_address})
```

### **经济模型简化版**

-   提问者支付ETH或代币作为赏金。
    
-   答主获得赏金，但需累积3个点赞（防止垃圾回答）。
    
-   平台可收取少量手续费，用于回购代币或销毁。
    

### **延伸方向**

-   加入**质押机制**：答主需质押代币才能提交答案，恶意回答罚没。
    
-   加入**Slashing**：被大量点踩扣除质押。
    
-   加入**声誉系统**：历史正确率高的答主权重更高。
    

* * *

## **四、Web3 AI应用的安全与风控**

### **常见风险**

| 风险类型 | 描述 | 应对 |
| --- | --- | --- |
| 模型输出操纵 | 恶意构造输入，误导模型输出错误结果 | 使用多个模型交叉验证，设置结果阈值 |
| 奖励篡改 | 点赞机器人虚假提高某个回答的排名 | 使用链上身份（如World ID）或二次方投票 |
| 重放攻击 | 重复提交相同的有效回答 | 记录内容哈希，不允许重复 |
| 数据隐私泄露 | 用户提问包含敏感信息 | 鼓励使用本地模型或TEE，或者对输入加密 |
| Gas攻击 | 用高Gas抢跑交易 | 使用私有内存池或commit-reveal方案 |

### **最佳实践**

-   **链下计算 + 链上验证**：不要把所有逻辑都放链上。
    
-   **使用已审计的合约模板**：如OpenZeppelin。
    
-   **限制单次操作复杂度**：防止gas耗尽。
    
-   **设置紧急暂停开关**：管理员可以在异常时停止合约。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->



# **第四天学习笔记（AI × Web3 深度融合）**

**日期：2026年5月21日**

* * *

## **一、AI 与 Web3 结合的前沿方向**

### **1\. 去中心化 AI 网络**

-   **问题**：当前大模型训练和推理被少数中心化公司控制，存在数据隐私、审查、单点故障风险。
    
-   **解决方案**：构建**去中心化计算网络**，利用全球闲置 GPU 资源进行模型训练/推理。
    
-   **代表项目**：
    
    -   **Bittensor (TAO)**：激励矿工提供算力与模型，子网可构建不同 AI 任务。
        
    -   **Render Network (RNDR)**：分布式 GPU 渲染，正扩展至 AI 推理。
        
    -   **Akash Network (AKT)**：去中心化云服务，已支持 GPU 租赁。
        
-   **意义**：AI 商品化，降低门槛，实现抗审查的智能服务。
    

### **2\. 链上 AI 智能体（On-chain Agent）**

-   **概念**：智能体的核心逻辑和状态存储在区块链上，行动通过交易执行。
    
-   **与普通智能体区别**：
    
    -   透明、不可篡改。
        
    -   可使用智能合约托管资金，自主支付 gas。
        
    -   可被多用户共享或组合。
        
-   **示例**：一个链上交易机器人，用户存入代币后，Agent 根据算法自动执行 DEX 交易，利润自动分红。
    
-   **技术挑战**：链上存储成本高，需用**压缩模型**或**零知识证明**验证链下计算。
    

### **3\. AI 预言机（AI Oracle）**

-   **传统预言机**（如 Chainlink）将链下数据（如价格）传输到链上。
    
-   **AI 预言机**：将 AI 模型的**输出结果**（如图像分类、情感分析、预测）带上链，供智能合约使用。
    
-   **应用场景**：
    
    -   预测市场（AI 预测体育比赛结果）。
        
    -   保险理赔（AI 验证事故照片）。
        
    -   动态 NFT（根据 AI 分析变化）。
        
-   **可信问题**：需要验证模型计算是否被篡改，可通过**可信执行环境（TEE）** 或**零知识证明**解决。
    

* * *

## **二、构建 AI × Web3 应用的完整技术栈**

| 层级 | 技术组件 | 示例工具/协议 |
| --- | --- | --- |
| 链上交互 | 智能合约、账户抽象、L2 | Solidity, EIP-4337, Arbitrum, Optimism |
| AI 计算 | LLM 推理、机器学习模型 | OpenAI API, Llama.cpp, Hugging Face |
| 去中心化计算 | GPU 算力市场、分布式训练 | Bittensor, Akash, Render |
| 数据索引 | 区块链数据查询、子图 | The Graph, Etherscan API, Dune Analytics |
| AI 预言机 | 模型结果上链、验证 | Chainlink Functions, Oraichain |
| 智能体框架 | Agent 编排、工具调用、记忆 | LangChain, AutoGPT, Eliza (AI 框架) |
| 身份与支付 | 去中心化身份、稳定币、钱包 | ENS, World ID, USDC, MetaMask |

* * *

## **三、从 0 到 1：搭建一个简单 AI × Web3 示例**

### **场景：链上情绪分析机器人**

-   **功能**：用户输入任意文本，合约返回情绪分数（0-100）并记录在链上。
    
-   **简化架构**：
    
    1.  前端或客户端调用 OpenAI API 分析情绪，获得分数。
        
    2.  用户签名并将分数作为参数调用智能合约的 `recordSentiment` 函数。
        
    3.  合约存储分数及对应的文本哈希（保护隐私）。
        
    4.  任何人可查询地址的历史情绪记录。
        

### **智能合约示例（Solidity 片段）**

solidity

```
contract SentimentRecorder {
    struct Entry {
        uint256 timestamp;
        uint8 score;      // 0-100
        bytes32 textHash;
    }
    mapping(address => Entry[]) public history;

    function record(uint8 score, string calldata text) external {
        require(score <= 100, "Score out of range");
        bytes32 textHash = keccak256(bytes(text));
        history[msg.sender].push(Entry(block.timestamp, score, textHash));
    }
}
```

### **前端集成注意点**

-   使用 `ethers.js` 调用合约。
    
-   文本发送前先计算哈希，链上不暴露原文。
    
-   可搭配 The Graph 索引事件做数据可视化。
    

* * *

## **四、以太坊进阶：MEV、隐私与合规**

### **1\. 最大可提取价值（MEV）**

-   **定义**：矿工/验证者通过重组、插入、审查交易获得的额外利润。
    
-   **常见 MEV**：套利、清算、三明治攻击。
    
-   **对 AI 的启发**：AI 智能体可自动搜索链上 MEV 机会，构建高频交易机器人。
    
-   **防护**：使用隐私内存池（如 Flashbots Protect）或使用抗 MEV 的 DEX（如 CowSwap）。
    

### **2\. 链上隐私技术**

-   **零知识证明（ZKP）**：证明某一事实（如“余额 > 100”）而不透露具体数值。
    
-   **隐私交易**：Tornado Cash（已制裁）、Railgun、Aztec（已停运）。
    
-   **AI 与隐私结合**：使用 ZK-ML（零知识机器学习）验证模型推理结果，同时保护输入数据隐私。
    

### **3\. 监管合规趋势**

-   **链上 KYC/AML**：Circle（USDC）已对部分地址冻结；TRM Labs 等提供链上分析。
    
-   **AI 辅助合规**：用 AI 模型实时监控交易模式，识别洗钱或高危地址。
    
-   **去中心化身份（DID）**：提供可验证凭证，平衡隐私与合规
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->




# **第三天学习笔记（进阶扩展）**

**日期：2026年5月20日**

* * *

## **一、大语言模型：检索增强生成（RAG）与智能体（Agent）**

### **1\. 检索增强生成（RAG）**

-   **背景**：LLM 的训练数据有截止时间，且无法访问私有知识库。RAG 解决“知识截止”和“幻觉”问题。
    
-   **工作流程**：
    
    1.  用户提问。
        
    2.  将问题向量化（embedding）。
        
    3.  在向量数据库中检索相关文档（知识库）。
        
    4.  将检索到的文档与原始问题一起拼接到提示中。
        
    5.  LLM 基于“问题 + 检索到的上下文”生成答案。
        
-   **优点**：
    
    -   可引用最新或私有信息。
        
    -   减少模型编造答案（幻觉）。
        
    -   方便更新知识库（无需重新训练模型）。
        
-   **典型技术栈**：LangChain、LlamaIndex、Chroma/Pinecone、OpenAI Embeddings。
    

### **2\. 智能体（Agent）**

-   **概念**：LLM 作为“大脑”，不仅能聊天，还能**自主决策、调用工具、执行多步任务**。
    
-   **核心组件**：
    
    -   **推理引擎**：LLM 分析目标，分解步骤。
        
    -   **工具集**：API、代码执行器、搜索引擎、数据库等。
        
    -   **记忆**：短期（对话历史）和长期（向量数据库）。
        
-   **工作流程（ReAct 模式）**：  
    **思考 → 行动 → 观察** 循环。
    
-   **示例**：用户问“巴黎今天天气如何？帮我订一个室内活动”。Agent 会：
    
    1.  调用天气 API 获取天气。
        
    2.  根据天气推荐室内活动。
        
    3.  调用预订 API。
        
-   **框架**：LangChain Agents、AutoGPT、BabyAGI、Semantic Kernel。
    

* * *

## **二、OpenAI API 高级：多模态与音频流**

### **1\. 多模态模型：GPT-4 with Vision**

-   **能力**：接受**图像**输入，理解图像内容并回答相关问题。
    
-   **API 调用**：
    
    python
    
    ```
    response = client.chat.completions.create(
        model="gpt-4-vision-preview",
        messages=[
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": "图中有什么？"},
                    {"type": "image_url", "image_url": {"url": "https://example.com/pic.jpg"}}
                ]
            }
        ]
    )
    ```
    
-   **限制**：不支持物体定位或精确图像编辑；费用高于纯文本模型。
    

### **2\. 音频生成（Text-to-Speech，TTS）**

-   **端点**：`/audio/speech`
    
-   **功能**：将文本转为自然语音，支持多种声音（alloy、echo、fable、onyx、nova、shimmer）。
    
-   **示例**：
    
    python
    
    ```
    from openai import OpenAI
    client = OpenAI()
    response = client.audio.speech.create(
        model="tts-1",
        voice="nova",
        input="你好，这是第三天学习笔记。"
    )
    response.stream_to_file("output.mp3")
    ```
    
-   **应用**：有声内容、语音助手、无障碍体验。
    

### **3\. 可解释性与结构化输出增强**

-   **JSON 模式更严格**：使用 `response_format={"type": "json_object"}` 结合提示保证输出合法 JSON。
    
-   **函数调用自动并行**：模型可一次性调用多个函数，在复杂任务中减少往返次数。
    

* * *

## **三、以太坊：Layer 2、跨链与账户抽象**

### **1\. Layer 2 扩容方案**

-   **为什么需要 L2**：以太坊主网拥堵、Gas 高。
    
-   **常见 L2 类型**：
    
    -   **乐观 Rollup**（Optimism、Arbitrum）：假设交易有效，提供挑战期；费用低，兼容性好。
        
    -   **零知识 Rollup**（zkSync、Starknet）：使用有效性证明，安全性高，提现快。
        
    -   **状态通道**（如闪电网络的思想）：适合高频小额支付。
        
-   **用户体验**：用户将资产桥接到 L2，交易费降低 10-100 倍。
    

### **2\. 跨链互操作性**

-   **桥（Bridge）**：锁定源链资产，在目标链铸造包裹资产（如 WETH）。
    
-   **主要桥协议**：Hop、Across、Stargate（基于 LayerZero）。
    
-   **风险**：桥漏洞是主要安全事件来源（如 Ronin 桥被盗）。建议使用经过审计、大额锁仓的桥。
    

### **3\. 账户抽象（EIP-4337）**

-   **目标**：让合约账户拥有外部账户的能力，摆脱硬编码私钥的限制。
    
-   **实现方式**：引入 **UserOperation** 交易类型，用户通过“入口点合约”提交。
    
-   **好处**：
    
    -   社交恢复（使用多个守护者找回账户）。
        
    -   批量交易（一次签名执行多个操作）。
        
    -   赞助交易（第三方支付 gas）。
        
    -   无 gas 代付（用户可用 ERC-20 支付）。
        
-   **现状**：已上线以太坊主网，钱包如 Safe（原 Gnosis Safe）开始支持。
    

### **4\. 去中心化身份（DID）与 ENS**

-   **ENS（Ethereum Name Service）**：将 `xxx.eth` 域名映射到地址，也可存储头像、邮箱等。
    
-   **使用**：通过 `ethers.js` 解析 `name` 或 `address`。
    
-   **去中心化身份**：将身份信息（凭证、认证）上链，由用户自己控制。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->





# **第二天学习笔记（扩展篇）**

**日期：2026年5月19日**

* * *

## **一、大语言模型进阶：评估与微调**

### **1\. 模型评估**

-   **困惑度（Perplexity）**：衡量模型对测试集预测的“惊讶程度”，越低越好。
    
-   **任务特定指标**：
    
    -   分类任务：准确率、F1 分数
        
    -   生成任务：BLEU（机器翻译）、ROUGE（摘要）、BERTScore
        
-   **人工评估**：流畅度、相关性、无害性（尤其对于对话系统）。
    

### **2\. 微调（Fine-tuning）**

-   **概念**：在预训练模型基础上，用特定领域的小规模标注数据继续训练，使模型适配特定任务。
    
-   **与提示工程的区别**：
    
    -   提示工程：不改变模型参数，通过输入设计引导输出。
        
    -   微调：改变模型参数，永久学习新知识或风格。
        
-   **典型流程**：
    
    1.  准备带标注的数据集（如“问题-答案”对）。
        
    2.  调用 OpenAI 微调 API 或使用开源框架（如 Hugging Face PEFT、LoRA）。
        
    3.  上传数据，启动微调作业，获得专属模型。
        
-   **成本与收益**：微调需要额外计算资源和数据准备，但能显著提升特定任务的准确率。
    

### **3\. 参数高效微调（PEFT）**

-   **LoRA（Low-Rank Adaptation）**：只更新原模型参数的极小子集（低秩矩阵），大幅降低显存需求。
    
-   **QLoRA**：结合量化（4-bit）与 LoRA，可在单张消费级 GPU 上微调数十亿参数模型。
    

### **4\. 模型量化**

-   将模型权重从 32 位浮点数压缩为 8 位或 4 位整数。
    
-   作用：减少显存占用、加快推理速度，但可能轻微损失精度。
    
-   常见方法：GPTQ、AWQ、GGUF（用于 llama.cpp）。
    

* * *

## **二、OpenAI API 高级用法与系统集成**

### **1\. 流式输出（Streaming）**

-   普通调用：模型生成完整回复后一次性返回。
    
-   流式调用：设置 `stream=True`，逐步返回 token，提升用户体验（像 ChatGPT 打字效果）。
    
-   示例：
    
    python
    
    ```
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": "写一首诗"}],
        stream=True
    )
    for chunk in response:
        if chunk.choices[0].delta.content:
            print(chunk.choices[0].delta.content, end="")
    ```
    

### **2\. 异步调用（Async）**

-   适用于高并发场景（如同时处理多个用户请求）。
    
-   使用 `async` 和 `await` + OpenAI 异步客户端。
    
-   示例：
    
    python
    
    ```
    import asyncio
    from openai import AsyncOpenAI
    
    async def get_response():
        client = AsyncOpenAI(api_key="...")
        response = await client.chat.completions.create(...)
        return response
    
    asyncio.run(get_response())
    ```
    

### **3\. 批量处理与成本优化**

-   **批处理 API**（OpenAI Batch API）：将多个请求打包一次性提交，价格折扣 50%，但结果异步返回（通常 24 小时内）。
    
-   **缓存语义相同请求**：对于 FAQ 等重复查询，使用嵌入相似度缓存结果，减少 API 调用。
    

### **4\. 安全与合规**

-   **内容过滤级别**：通过 `moderation` 端点或设置 `max_tokens` 限制风险输出。
    
-   **数据保留**：OpenAI API 默认不存储请求数据，但企业可签订数据保护协议。
    
-   **API Key 轮换**：定期生成新密钥，并使用密钥管理服务（如 AWS KMS、Vault）。
    

* * *

## **三、以太坊进阶：智能合约开发基础**

### **1\. 智能合约是什么**

-   存储在以太坊上的**不可更改的程序**，在满足条件时自动执行预设逻辑。
    
-   常用语言：**Solidity**（语法类似 JavaScript）。
    

### **2\. 一个简单的 Solidity 合约示例**

solidity

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 public storedData;

    function set(uint256 x) public {
        storedData = x;
    }

    function get() public view returns (uint256) {
        return storedData;
    }
}
```

### **3\. 部署与交互**

-   **开发环境**：Remix IDE（浏览器）、Hardhat、Foundry。
    
-   **部署工具**：使用 `ethers.js` 或 `web3.js` 调用合约。
    
-   **Gas 费用**：每执行一次合约操作（写入）需支付 ETH 作为燃料。
    

### **4\. 代币标准**

-   **ERC-20**：同质化代币（如 USDC、DAI）。
    
-   **ERC-721**：非同质化代币（NFT）。
    
-   **ERC-1155**：混合标准（可包含同质化与非同质化）。
    

### **5\. 账户与合约交互的风险**

-   **重入攻击**：合约在更新状态前再次调用自身（可通过检查-生效-交互模式或互斥锁防范）。
    
-   **整数溢出**：使用 SafeMath 库或 Solidity 8+ 内置检查。
    
-   **Gas 限制**：无限循环或复杂计算可能导致交易失败。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->







# **今日学习笔记汇总**

**日期：2026年5月18日**

* * *

## **一、大语言模型（LLM）的工作原理**

### **1\. 核心机制**

-   LLM 是一个复杂的数学函数，根据输入文本**预测下一个词的概率分布**。
    
-   通过反复执行“输入已有文本 → 预测下一个词 → 追加到文本”的过程，自动生成完整回复。
    
-   模型本身是确定性的，但为了让输出更自然，会**随机选择概率稍低的词**，因此每次回答可能不同。
    

### **2\. 训练方式（预训练）**

-   从互联网抓取海量文本（例如 GPT-3 的训练文本，一个人 24/7 不间断阅读需要 **2600 多年**）。
    
-   模型内部有数百亿个**参数（权重）**，初始随机 → 输出乱码。
    
-   通过**反向传播算法**，根据真实文本不断微调参数，使预测越来越准。
    

### **3\. 计算规模**

-   训练最大的 LLM，即使每秒执行 10 亿次加法/乘法，也需要 **超过 1 亿年**。
    
-   必须依赖 **GPU** 进行大规模并行计算。
    

### **4\. Transformer 架构（2017 年提出）**

-   **关键创新**：不逐词顺序阅读，而是**并行处理整个文本**。
    
-   **注意力机制（Attention）**：让每个词的数值向量根据上下文相互“交流”（例如区分 river bank 和 bank account）。
    
-   配合**前馈神经网络**，存储更多语言模式。
    

### **5\. 与人类对齐（RLHF）**

-   预训练只是补全互联网文本，不保证成为好助手。
    
-   使用**基于人类反馈的强化学习（RLHF）**：人工标注错误回答，进一步微调模型，使其更符合用户偏好。
    

### **6\. 局限性**

-   模型行为是数百亿参数**涌现**的结果，难以精确解释某个预测的原因。
    

* * *

## **二、OpenAI API 与实用 AI 开发课程**

### **（一）OpenAI API 基础**

-   **API**：应用程序编程接口，像“餐厅服务员”传递请求并返回结果。
    
-   **OpenAI API**：以编程方式调用 GPT、Whisper 等模型，不限于 ChatGPT。
    
-   **主要端点**：
    
    -   `/chat/completions` – 聊天补全
        
    -   `/embeddings` – 生成文本向量
        
    -   `/moderations` – 内容审核
        
    -   `/audio/transcriptions` & `/audio/translations` – 语音转文字 / 翻译
        
-   **认证与费用**：使用 API Key，费用基于模型和 token 数量。
    

### **（二）聊天补全详解**

-   **消息角色**：
    
    -   `system`：设定助手行为（如“你是友好客服”）
        
    -   `user`：用户输入
        
    -   `assistant`：模型回复
        
-   **温度（temperature）**：0（确定）~ 2（随机）
    
-   **最大令牌数（max\_tokens）**：限制回复长度
    

### **（三）函数调用（Function Calling）**

-   让模型输出**结构化的 JSON**，便于与外部系统集成。
    
-   应用：从非结构化文本提取字段、并行调用多个函数、调用外部 API（如博物馆推荐）。
    

### **（四）嵌入（Embeddings）与向量数据库**

-   **嵌入**：将文本映射为 1536 维向量，语义相似的文本在向量空间中距离更近。
    
-   **应用**：
    
    -   语义搜索（搜索“电脑”返回“新技术产品”文章）
        
    -   推荐系统（根据用户历史取向量均值推荐）
        
    -   零样本分类（与类别描述向量比较距离）
        
-   **向量数据库（以 Chroma 为例）**：
    
    -   高效存储和查询大规模向量。
        
    -   支持元数据过滤（如只查“电影”类型、2020 年后上映）。
        
    -   自动嵌入，支持增删改查。
        

### **（五）提示工程核心技巧**

1.  **使用明确的动作动词**（写、总结、分类），避免模糊词（理解、思考）。
    
2.  **提供详细指令**（长度、格式、风格、受众）。
    
3.  **使用分隔符**（如三重反引号 \`\`\`）区分指令与输入。
    
4.  **少样本提示（Few-shot）**：给出示例让模型学习输出格式。
    
5.  **思维链（Chain-of-Thought）**：要求展示推理步骤，提高复杂问题准确率。
    
6.  **多步提示（Multi-step）**：分解任务（如先改错别字，再改语气）。
    
7.  **迭代优化**：根据输出反复修改提示。
    

### **（六）生产环境最佳实践**

1.  **错误处理**：try/except 捕获认证错误、速率限制；使用 `tenacity` 库指数退避重试。
    
2.  **速率限制**：控制请求频率，批处理输入，减少 token 数。
    
3.  **内容审核**：moderation 端点检测暴力、仇恨等内容，可自定义阈值。
    
4.  **对抗性测试**：用刁钻输入（讽刺、反转情绪）测试鲁棒性。
    
5.  **安全建议**：
    
    1.  API Key 存在环境变量，不提交到仓库。
        
    2.  使用用户 ID 标记请求，便于审计。
        

### 设置“护栏”（guardrails）限制模型回答领域。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
