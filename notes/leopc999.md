---
timezone: UTC+8
---

# Leot (leopc999)

**GitHub ID:** leopc999

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-11
<!-- DAILY_CHECKIN_2026-06-11_START -->
# 《AI Business Opportunity Planning》会议学习笔记

这场分享的核心，不是单纯“用 AI 写东西”，而是把 AI Agent 当成一个能执行多步骤任务的研究与生产工具，用来发现本地商机、验证供应商、生成落地页、制定投放计划，最终把一个商业想法快速变成可执行方案。

## 一、这次分享讲了什么

会议以泰国芭提雅为例，演示了如何让 AI Agent 在过去 30 天的社交媒体信息中做市场调研，识别本地商业机会，并进一步完成供应商筛选、合作邀约、联系渠道判断、落地页生成和 Google Ads 投放方案设计。整体思路是：先找到真实需求，再把需求包装成可推广、可验证、可执行的业务流程。

## 二、我记住的几个关键点

### 1）Agent Mode 和 Chat Mode 不一样

Chat Mode 更适合单轮问答，Agent Mode 则更适合目标明确、步骤较多的任务。  
这意味着在做研究、策划、搭建业务流程时，不能只给一句模糊问题，而要给一个完整目标，让 Agent 按阶段推进。

### 2）Master Prompt 很重要

分享里强调了“主提示词”的作用。  
主提示词里通常要写清楚：

-   任务语言
    
-   预算
    
-   合作伙伴数量
    
-   安全规则
    
-   目标收益区间
    
-   期望输出格式
    

本质上，提示词不是“问问题”，而是在“定义工作说明书”。

### 3）用历史数据找机会，比看热闹更重要

分享提到的“30-day skill”很关键。  
不是看当天热度，而是扫描过去一段时间的真实反馈，比如点赞、评论、差评、用户反馈等，用这些信号判断机会是否真实存在。  
这比只看表面流量更接近“可落地商机”。

### 4）商业方案可以被 AI 拆成一条流水线

这次演示里，一个完整方案包含了：

-   选定细分赛道
    
-   找到并验证供应商
    
-   写合作邀约信
    
-   确定本地最有效的联系渠道
    
-   生成移动端友好的落地页
    
-   输出广告投放方案
    

这说明 AI 不只是写文案，而是可以参与“业务链条”的每个环节。

## 三、关于 AI 使用的实战经验

### 1）防止 Agent 跑偏

如果 Agent 走偏，不要放任它继续。  
正确做法是：

-   明确指出偏离点
    
-   重申当前目标
    
-   告诉它哪些已完成、哪些未完成
    
-   再让它继续执行
    

### 2）多步骤任务要做过程校验

在复杂任务里，不要只看最终答案。  
更稳妥的方式是每一步都要求：

-   证明材料
    
-   代码或工作产出
    
-   检查点
    
-   任务状态说明
    

这样能显著降低幻觉和错误累积。

### 3）模型卡住时要会切换

当模型输出不稳定或进入死胡同时，可以：

-   保存当前工作
    
-   做 Git commit
    
-   切换模型重试
    
-   必要时重建上下文
    

这是一种很实用的工程化思维：把 AI 当成会出错的协作者，而不是绝对正确的工具。

### 4）长对话容易丢上下文

如果任务很长，模型可能会忘记规则或偏离目标。  
分享里提到的办法是把聊天记录导出成 JSON，再导入新会话，让模型重新梳理当前进度。这本质上是在做“状态恢复”。

## 四、对我最有启发的地方

我觉得这次分享最有价值的一点，是把“AI 生成内容”升级成了“AI 辅助商业决策与执行”。

以前很多人用 AI 只是写一段文案、整理一份摘要；  
这次分享展示的是，AI 可以参与：

-   市场验证
    
-   机会筛选
    
-   合作撮合
    
-   落地页制作
    
-   投放策略生成
    

也就是说，AI Agent 更像一个“轻量商业团队”的雏形。

## 五、可以直接复用的学习结论

以后在使用 AI Agent 时，我可以按这个思路来：

先把任务写清楚，再让它分步骤执行；  
先验证真实需求，再生成内容；  
先要求过程证据，再接受最终结果；  
遇到跑偏就纠正，遇到卡住就切换和重建上下文。

## 六、一句话总结

这场分享告诉我：真正高效的 AI 使用方式，不是让模型替我“回答问题”，而是让模型像一个可控的执行助手，帮我把商业调研、方案设计和基础落地工作串成一条完整流程。
<!-- DAILY_CHECKIN_2026-06-11_END -->

# 2026-06-09
<!-- DAILY_CHECKIN_2026-06-09_START -->

# **学习笔记**

> 核心内容：Cobo CAW Dev 环境测试网转账实操 — 从 Pact 审批到链上确认

* * *

## **🧪 Cobo CAW 测试网转账：首次成功**

### **背景**

此前已完成 CAW dev 环境配置和 App 配对。今天继续推进：

1.  提交的 Pact（`97c0acf9-00f7-4799-98ca-3e1dc2546dc8`）已在手机 App 上审批通过 ✅
    
2.  执行第一次测试网转账
    

### **踩坑记录**

**问题 1：caw CLI 不走系统代理，dev API 超时**

-   现象：`caw wallet list --api-url https://api-core.agenticwallet.dev.cobo.com` 直接执行会超时
    
-   原因：WSL 下 dev API 需要走 Windows 上的 代理，但 `caw` CLI 作为 Go 编译的程序，默认读取 `HTTPS_PROXY`/`HTTP_PROXY` 环境变量
    
-   解决：`export HTTPS_PROXY=http://xxxxxx:xxxx HTTP_PROXY=http://xxxxxx:xxxx ALL_PROXY=http://xxxxxx:xxxx`，然后 caw 命令正常响应
    

**问题 2：transfer 缺少** `src_addr`**，422 Unprocessable Entity**

-   现象：不带 `--src-address` 和 `--chain-id` 时，API 返回 422，`body.src_addr` 字段缺失
    
-   原因：SETH 是 Sepolia 测试网 ETH，`--chain-id` 默认为 `ETH`（主网），且 auto-select src address 逻辑未生效
    
-   解决：显式指定 `--chain-id SETH` 和 `--src-address 0x4081aee3f32ab4f0a12e5f09422f4abaebcda1be`
    

### **成功转账详情**

```
命令：
caw tx transfer \
  --api-url https://api-core.agenticwallet.dev.cobo.com \
  --pact-id 97c0acf9-00f7-4799-98ca-3e1dc2546dc8 \
  --token-id SETH \
  --chain-id SETH \
  --amount 0.001 \
  --src-address 0x4081aee3f32ab4f0a12e5f09422f4abaebcda1be \
  --dst-address 0x4081aee3f32ab4f0a12e5f09422f4abaebcda1be \
  --description "Test: self-send 0.001 SETH on Sepolia"

结果：
- tx_id:     347da021-315e-4418-83f8-c43b43c9fcd9
- status:    Success ✅
- sub_status: completed
- amount:    0.001 SETH
- fee:       0.000089715117744 SETH (EIP-1559, gas_limit=21000)
- tx_hash:   0xc0d9da62e166df47e838f627feec25d3296ba774387e0d965c86a1220ec8dbb5
- chain:     SETH (Sepolia)
- pact_id:   97c0acf9-00f7-4799-98ca-3e1dc2546dc8
```

### **转账流程复盘**

```
用户意图 → caw CLI 发起 transfer → Pact 策略检查 → MPC 签名 → 链上广播 → Success
```

1.  **发起**：CLI 通过 `--pact-id` 关联已审批的 Pact，请求转入 0.001 SETH
    
2.  **策略检查**：Pact 已在 App 端审批通过，transfer 请求通过了风控引擎
    
3.  **MPC 签名**：签名过程不生成完整私钥（分片签名）
    
4.  **链上广播**：Sepolia 测试网确认，EIP-1559 费用模式
    
5.  **完成**：约 30 秒内状态从 Processing → Success
    

### **关键学习点**

-   **Pact 是转账的前提**：没有有效的 Pact，transfer 会被 policy denied。Pact = 委托授权协议，定义了 Agent 可以做什么
    
-   **chain-id 与 token-id 要匹配**：`SETH` token 必须配合 `SETH` chain-id，否则要么 422 要么走错链
    
-   **EIP-1559 费用结构**：`max_fee_per_gas` + `max_priority_fee_per_gas` + `gas_limit`，标准 ETH 转账 gas\_limit=21000
    
-   **self-send 是合法操作**：`src_address` = `dst_address` 时，链上效果是扣 gas fee，余额略减，但交易本身成功上链
    
-   **Dev 环境必须走代理**：`api-core.agenticwallet.dev.cobo.com` 从 WSL 直连超时，需 `HTTPS_PROXY`
    

* * *

## **🔗 链上验证**

Sepolia 浏览器查看 tx\_hash： `https://sepolia.etherscan.io/tx/0xc0d9da62e166df47e838f627feec25d3296ba774387e0d965c86a1220ec8dbb5`

* * *

## **🎯 下一步**

-   尝试合约调用（`caw tx call`）
    
-   做一笔不同地址间的转账（非 self-send）
<!-- DAILY_CHECKIN_2026-06-09_END -->

# 2026-06-08
<!-- DAILY_CHECKIN_2026-06-08_START -->



# 零知识证明分享会学习记录

## **零知识证明概念与特性**

-   **基本特性**
    
    -   completeness 与 soundness：completeness 为正面论述，若主张的事情正确，验证者几乎永远会接受；soundness 为反面论述，若证明的事实错误，验证者几乎 100% 会拒绝。
        
    -   零知识特性：验证者在看到证明前后所获讯息一样多，如验证是否年满 18 岁，零知识证明应让验证者仅知道是否年满 18 岁，而无其他多余信息。
        

![](https://my.feishu.cn/space/api/box/stream/download/asynccode/?code=NDA3MmM5ZmQ3MDQ0NjdhNGI4NTBmODg2NmEyNzI5ZWNfM253c3ZHR05EbUZIbEpsQzRCaWI2YXNQMUhST1ZLdm1fVG9rZW46TFRtMmJNeUZnbzd6THp4TlFyeWNudmVXbm9HXzE3ODA5MzI5MzU6MTc4MDkzNjUzNV9WNA&add_watermark=true&scene_type=CCM_DOUBAO)

-   **相关名词**
    
    -   snark：是一个证明，具有足够短且可快速验证的特性，属于 IP 的一个分支，具备 completeness 和 soundness 特性，但还未具备零知识特性。
        
    -   ZK - Snark：在 snark 基础上加上零知识证明元素，使验证者验证后不会获取不必要的资讯。
        

-   **零知识证明的研究方向**
    
    -   **证明大小**：证明大小要足够小，越小越好。
        
    -   **验证时间**：产生证明的时间和验证时间要足够快，越快越好。
        
    -   **抗量子威胁**：将相关内容迁移到基于后量子密码学的安全密码系统上，使零知识证明具备抗量子能力。
        
-   **零知识证明的应用案例**
    
    -   **机器学习（ZKML）**
        
        -   模型隐私：在公开资料训练模型的比赛中，可通过零知识证明电路验证模型参数，避免模型参数被偷走。
            
        -   资料隐私：使用 AI 工具时，可通过 ZKML 验证结果是否由指定模型处理，保障使用者隐私。
            
        -   可验证性：在模型参数和输入公开的情况下，可通过证明验证 AI 模型输出的正确性。
            
        -   相关框架：EZKL 是一个好用的框架，可将常用的 MLO 模型包装成零知识证明状态；BioNeta 可用于人脸辨识，所有运算在浏览器进行，人脸资料不会上传到服务器。
            
        
        ![](https://my.feishu.cn/space/api/box/stream/download/asynccode/?code=ZjBkNDE2NWIyNWM0YTMwNjQyYWRhODgxZmUwM2VhZWZfYjlJb3VQVzNSRzVSWWJibHRmbHo2cFR2Z0I2VWNjS0xfVG9rZW46RGQ0cGJxYnlIb2hJTzh4U1VvUWNyeFRjbnhmXzE3ODA5MzI5MzU6MTc4MDkzNjUzNV9WNA&add_watermark=true&scene_type=CCM_DOUBAO)
    -   **影像领域**：在相机中塞入私钥，为照片生成数字签章并加上零知识证明，当照片被修改时，验证证明将不通过，可用于打击虚假信息。
        
    -   **身份验证（ZKID）**
        
        -   资料最小化：使用 ZKID 技术可在证明身份时最小化资料揭露，如证明是否满 18 岁或国籍时，仅让验证者知道必要信息。
            
        -   技术发展：SDJot 存在可链接问题，openAC 采用匿名凭证形式，利用零知识证明实现验证且无法从证明链接回凭证持有者。
            
    -   **区块链领域**
        
        -   扩容应用：以 scroll 为例，将交易移到 Layer 2 网络，排序计算后压缩成一个证明上链到以太坊主网，主网只需验证证明即可确认交易合法性和执行状态转移。
            
        -   隐私工具争议：Tornado Cash 等隐私工具存在争议，虽能提供隐私保护，但可能被用于非法洗钱等活动，且责任界定困难。
            
-   **零知识证明的其他探讨**
    
    -   **隐私重要性**：以二战期间荷兰犹太人登记资料导致被纳粹迫害为例，强调隐私应作为预设模式，降低使用隐私工具的成本，人人都应有权保护自己的隐私安全。
        
    -   **答疑环节**
        
        -   主网上链内容：最后上链的是一个零知识证明，对应多笔交易的正确性和完整状态转移，Layer 2 需自行保管个别交易状态。
            
        -   验证方式：验证者只需验证最后一个证明，即可知道之前每个迭代的证明符合条件。
            
        -   项目情况：Polygon ZK 可能进入维护模式，目前主流 Layer 2 多使用乐观证明，以太坊主网有朝 ZK 发展的路线图，预计 2029 - 2030 年实现。
            
        -   学习途径：可参考 ZK Mook 课程，也可参与以太坊基金会的开源专案。
            
        -   证明安全性：零知识证明若电路编写良好、系统足够新，可降低风险，但仍依赖于电路质量，如 Zcash 曾因电路漏洞出现问题。
            
        -   分辨 ZK：可通过查看技术文件中的关键字，确认上传资料是否包含个人资料来分辨是否使用 ZK，也可在 Web3 领域的交流社群中咨询。
            

-   **零知识证明概念**：介绍 IP 的 completeness 和 soundness 特性，在此基础上引出零知识证明，即验证者在看到证明前后获得的讯息一样多，并举例说明。
    
-   **关键名词 snark**：是一种证明，具有足够短且可快速验证的特点，属于 IP 的分支，具备 completeness 和 soundness 特性。
    
-   **研究方向**：证明大小要足够小、产生和验证时间要足够快、迁移到基于后量子密码学的安全密码系统。
    
-   **应用案例**：涵盖机器学习、影像、身份验证、区块链等领域，如在机器学习中可实现输入输出印证、保护模型参数隐私等；在影像中可打击虚假信息；在身份验证中可最小化资料揭露；在区块链中可用于隐私保护和扩容。
    
-   **隐私工具争议**：以 Tornado Cash 为例，指出隐私工具是双刃剑，在提供隐私的同时可能被用于非法活动，且存在责任归属问题。
    
-   **学习建议**：推荐 ZK Mook 课程，建议跟随开源专案学习并贡献社区。
    
-   **辨别 ZK 方法**：查看技术文件关键字，确认上传资料是否含个人资料，利用 Web3 领域交流社群确认项目合理性。
    

# 金句时刻

「如果你持有这个事实是对的，验证者就会接受；反之如果是错的，验证者就会拒绝。」

—— 简洁概括了 IP 的 completeness 和 soundness 特性，是理解零知识证明的基础。

「隐私这件事情，它应该要是可以是一个预设的模式，因为你永远不知道你的资讯，即使现在泄露可能是无害的，但是未来可能会有一些影响在。」

—— 强调了隐私保护的重要性，引发对隐私问题的思考。

「在 AI 这么发达的阶段，最好的学习途径就是跟着某一个有趣的开源专案，一起去做，一起去贡献。」

—— 给出了在当前阶段学习零知识证明的有效建议。
<!-- DAILY_CHECKIN_2026-06-08_END -->

# 2026-06-07
<!-- DAILY_CHECKIN_2026-06-07_START -->




Cobo 的开发者环境一直有网络问题，还在解决中
<!-- DAILY_CHECKIN_2026-06-07_END -->

# 2026-06-06
<!-- DAILY_CHECKIN_2026-06-06_START -->





# **学习笔记**

> 今日重点：**CAW 实操 — Agent Mode 钱包创建与 CLI 部署** 来源：Cobo Agentic Wallet 开发者教程实操 目标：跑通 CAW Skills 安装 + 钱包创建 + 地址生成，为 Pact 提交和 DeFi 操作做准备

* * *

## **一、今日实操概览**

基于之前开发者教程精读，今天进入实操阶段：安装 CAW CLI、创建钱包、生成链上地址。遇到了 WSL 网络问题，导致 Dev 环境钱包创建失败和后续操作受阻。

**核心收获**：CAW 的"一键创建"在正常网络下很顺畅，但 WSL + Cloudflare WARP 的 DNS 劫持会导致 Go binary 无法连接 API——这是"环境依赖型踩坑"，不是产品本身的 bug。

* * *

## **二、操作记录**

### **2.1 CAW CLI 安装**

**方式**：通过 Skills bootstrap 脚本自动安装

```
安装路径：~/.cobo-agentic-wallet/bin/caw
版本：v0.2.86
```

**目录结构**（安装后自动生成）：

```
~/.cobo-agentic-wallet/
├── bin/
│   └── caw              # CAW 主程序
├── config                # default_profile 配置（JSON）
├── profiles/             # 每次 onboard 创建一个子目录
├── cache/
├── logs/
└── onboard-drafts/
```

> 💡 每次运行 `caw onboard` 创建新 profile，不会覆盖旧钱包。默认操作只对 `default_profile` 生效。

### **2.2 钱包创建**

**Dev 环境（❌ 创建失败）**

```
~/.cobo-agentic-wallet/bin/caw onboard --env dev
```

-   **profile**：`profile_caw_agent_b913e0925c0d58c2`
    
-   **API URL**：`api-core.agenticwallet.dev.cobo.com`
    
-   **session\_id**：`sess-466acb3627a3e3b9`
    
-   **状态**：❌ `phase: "error"`，`bootstrap_stage: "failed"`
    
-   **错误信息**：`dial tcp 198.18.0.59:443: i/o timeout`
    
-   **根因**：WSL DNS 将域名解析到 `198.18.0.59`（Cloudflare WARP 范围），Go binary 直连超时
    
-   **wallet\_uuid**：空（创建未完成）
    

> ⚠️ 踩坑：Dev 环境的 TSS Node 因为钱包创建未完成，未在服务端注册 node ID，导致后续所有连接都报 `invalid node ID, please bind your TSS Node to application first`，持续重连失败。

**Prod 环境（✅ 创建成功）**

```
~/.cobo-agentic-wallet/bin/caw onboard --env prod
```

-   **profile**：`profile_caw_agent_cb1451ccdd1fab70`（当前 default\_profile）
    
-   **API URL**：`api.agenticwallet.cobo.com`
    
-   **session\_id**：`sess-f5c7a4b5cb2e0e4a`
    
-   **wallet\_uuid**：`a304eb63-6821-420d-a04e-3b1bf9c45a3f`
    
-   **状态**：✅ `phase: "wallet_active"`，`wallet_status: "active"`
    
-   **is\_paired**：`false`（未配对 App）
    

### **2.3 钱包地址生成**

Prod 钱包成功后，生成了两个链类型的地址：

| 链类型 | 地址 | 兼容链 |
| --- | --- | --- |
| ETH | 0x2e6eb0c31bc431335ad7d115f08a9cbf5b26a7a6 | SETH, BASE_ETH, MATIC, TBASE_SETH, ETH, ARBITRUM_ETH, OPT_ETH, BSC_BNB, AVAXC, HYPEREVM_HYPE |
| SOL | DEcE7YrCn7Ct66RA3hoHZ9pr8eWZNBwRmxvovdKyjZ17 | SOL, SOLDEV_SOL |

> 💡 ETH 地址兼容 10 条 EVM 链，这是 MPC 钱包的一个优势——同一个私钥分片对应对一个地址，多链共享。

* * *

## **三、未完成项与阻塞分析**

| 计划操作 | 状态 | 阻塞原因 |
| --- | --- | --- |
| App 配对（Testflight Mock 登录） | ❌ | 需手机端操作，未执行 |
| 创建第一个 Pact | ❌ | CLI pact list 超时（WSL DNS 问题） |
| 获取测试币（faucet） | ❌ | faucet tokens 命令超时（同上） |
| 通过 Pact 发起测试交易 | ❌ | 依赖 Pact 创建完成 |
| Python SDK DeFi 操作 | ❌ | 尚未开始 |

### **WSL 网络问题详解**

**现象**：

-   `curl -sk` 可以直接访问 `api.agenticwallet.cobo.com`（返回 JSON 响应）
    
-   CAW CLI（Go binary）调用同一个 API 超时
    
-   DNS 解析结果为 `198.18.0.59`（Cloudflare WARP 保留地址段）
    

**分析**：

-   Go 的 net/http 使用系统 DNS 解析器，与 curl 可能走不同的解析路径
    
-   WSL + Cloudflare WARP 环境下，Go binary 的 DNS 解析被 WARP 劫持，将域名解析到不可路由的内部 IP
    
-   `curl -sk` 可能因为使用了不同的 DNS 缓存或绕过机制而成功
    

**临时解决方案**：

-   对 CLI 命令可尝试通过 `--api-url` 参数指定 API 地址
    
-   或在 WSL 中配置 `/etc/resolv.conf` 使用固定 DNS（如 `8.8.8.8`）
    
-   长期：在非 WSL 环境运行 CAW 操作
    

* * *

## **四、Dev Profile TSS Node 问题记录**

Dev 环境的钱包创建失败后，TSS Node 进入了不可恢复的状态：

```
ERROR: invalid node ID, please bind your TSS Node to application first
```

**原因链**：

1.  `caw onboard --env dev` → Go binary DNS 解析失败 → 创建请求未到达服务端
    
2.  本地 TSS Node 已启动，但未在服务端注册（因为没有 wallet\_uuid）
    
3.  TSS Node 尝试连接 `wss://ws.caw.tss.cobo.com/ws` → 服务端拒绝（node ID 无效）
    
4.  TSS Node 每 2 分钟重连一次 → 持续失败
    

**影响**：Dev profile 的 TSS Node 占用资源但无法工作，日志持续增长。

**处置建议**：

-   停止 Dev TSS Node 进程（kill PID）
    
-   在网络恢复后重新运行 `caw onboard --env dev`
    
-   或删除 Dev profile 重新开始
    

* * *

## **五、与 06-03 学习的交叉对照**

| 06-03 学到的 | 实操验证 |
| --- | --- |
| Skills 一键安装 CLI | ✅ 确认：Skills bootstrap 自动安装 caw binary + 创建目录结构 |
| 每次 onboard 创建新 profile | ✅ 确认：Dev 和 Prod 各一个独立 profile |
| default_profile 控制默认操作 | ✅ 确认：config 文件记录 default，caw address list 等命令默认操作 prod |
| 未配对时 Agent 可自由操作 | ✅ 确认：prod profile is_paired: false，此时无 Pact 约束 |
| MPC 需要运行 TSS Node | ✅ 确认：每个 profile 下都有独立的 tss-node 进程和配置 |
| Dev 环境有 OpenAPI Docs | ⬜ 未验证（CLI 超时未能访问 dev API） |
| Pact 提交流程 | ❌ 未跑通（CLI 超时阻塞） |

* * *

## **六、实操心得**

### **6.1 "环境依赖型踩坑"的模式识别**

这不是 CAW 产品 bug，而是 **WSL + Cloudflare WARP 的 DNS 劫持**问题。这类问题的特征：

-   现象：Go binary 超时，但 curl/cbrowser 正常
    
-   根因：不同语言的 DNS 解析路径不同
    
-   影响：所有依赖外部 API 的 CLI 操作全部阻塞
    
-   教训：在 WSL 环境做链上实操前，先验证网络连通性
    

### **6.2 "先跑通再优化"的实践**

-   先成功创建 Prod 钱包（网络通的），验证 CAW 的核心流程可用
    
-   Dev 环境的失败作为踩坑记录，不阻塞对产品的理解
    
-   下一步需要解决 WSL 网络问题或换环境后继续
    

* * *

## **七、下一步行动**

### **优先级 1 — 解除网络阻塞**

-   修复 WSL DNS（配置 `/etc/resolv.conf` 或关闭 WARP）
    
-   验证 `caw wallet list` / `caw pact list` 能否正常返回
    
-   重试 Dev 环境钱包创建
    

### **优先级 2 — 继续 CAW 实操**

-   完成 App 配对（Testflight Mock 登录）
    
-   创建第一个 Pact（简单转账策略）
    
-   获取测试币（faucet）
    
-   通过 Pact 发起测试交易
    

### **优先级 3 — DeFi 操作**

-   用 Python SDK 调用 API 完成 Uniswap V3 Swap
    
-   设计 Budget Guardian 的核心 Pact Policy 模板
<!-- DAILY_CHECKIN_2026-06-06_END -->

# 2026-06-05
<!-- DAILY_CHECKIN_2026-06-05_START -->






今天参加了第三周例会，了解到黑客松的具体细节。
<!-- DAILY_CHECKIN_2026-06-05_END -->

# 2026-06-04
<!-- DAILY_CHECKIN_2026-06-04_START -->







# **学习笔记**

> 今日重点：**Cobo Agentic Wallet 赛道实战 — 开发者教程精读 + 产品架构拆解** 来源：Cobo 官方赛道实战分享会 + 开发者教程文档 目标：从产品层深入到开发层，跑通 CAW 的 Agent 集成和 Developer 集成两条路径，为 Hackathon Demo 做技术预研

* * *

## **一、今日学习概览**

参加了 Cobo 赛道实战分享会，孟老师从产品环境、架构、使用模式、开发工具四个维度系统讲解了 CAW。结合收到的开发者教程文档，对 CAW 的完整技术栈做了从 Skill → CLI → API → SDK 的逐层拆解。

**核心收获**：CAW 不是"给 Agent 一个钱包"，而是**给 Agent 一个带权限控制系统的钱包**——Pact 是权限的载体，Policy 是约束的声明，MPC 是安全的底层，审批流是人的防线。

* * *

## **二、CAW 产品架构拆解**

### **2.1 整体架构（自上而下）**

```
用户侧
├── Agent Mode（Codex, Claude Code, OpenCode, Hermes 等）
│   └── Skills → 自动安装 CAW CLI + 创建钱包
│       └── MCP Server（替代方案，功能弱于 Skills）
├── Mobile App
│   ├── 正式版：App Store / Google Play
│   └── 开发者版：Testflight（支持 Mock 登录）
│
中间层
├── CLI（caw binary + cobo-tss-node binary）
│   └── Skills 底层调用的就是 CLI
├── API（REST API，CLI 的更底层）
│   └── dev: api-core.agenticwallet.dev.cobo.com
│   └── prod: api-core.agenticwallet.cobo.com
├── SDK
│   ├── Python: pip install cobo-agentic-wallet
│   └── TypeScript: npm install @cobo/agentic-wallet
│
后端核心服务
├── 交易引擎
├── 风控引擎
└── Pact 审批流
```

### **2.2 MPC 钱包架构**

**核心原理**：私钥被拆成两片（2-2 threshold），一片在用户端（TSS Node），一片在服务端。签名时两片通过密码学交互生成签名，**任何一方在内存中都不生成完整私钥**。

**与多签的区别**：

-   多签（如 Safe）：多把钥匙，凑够数量开锁 → 链上有多个地址
    
-   MPC：一把钥匙拆成碎片，碎片组合签名 → 链上只有一个地址，用户体验更简洁
    

> 💡 金句：「通过 MPC 技术，在整个签名过程中，永远不会有任何一方在内存里面生成一个完整的私钥，但最终能够签名出等同于私钥签名的结果。」

* * *

## **三、两条使用路径详解**

### **3.1 Agent Mode（面向 AI Agent 用户）**

**典型流程**：

1.  **安装 Skills**：复制官网首页 prompt 到 Agent
    
    ```
    npx skills add cobosteven/cobo-agentic-wallet-dev --skill cobo-agentic-wallet-dev --yes --global
    ```
    
2.  **创建钱包**：Agent 自动执行（或指示"帮我创建一个钱包"）
    
3.  **App 配对**（可选）：下载 Testflight App → Agent 生成 8 位配对码 → App 输入
    
4.  **Pact 审批**：配对后，Agent 发起交易需提交 Pact → 人类在 App 审批
    

**关键设计**：

-   未配对：Agent 可自由操作（无风控，适合测试/开发）
    
-   已配对：Agent 受 Pact 约束，交易需人类确认
    
-   Mock 登录：dev 环境 App 支持任意字符串登录，**但不建议充大额真实资产**
    

> ⚠️ 踩坑记录：配对完成后必须备份钱包文件，丢失无法恢复！这是 MPC 钱包的特性——没有助记词恢复机制。

### **3.2 Developer Mode（面向开发者集成）**

**四层工具栈**（从高到低）：

| 层级 | 工具 | 适合场景 |
| --- | --- | --- |
| L1 | Skills | Agent 有 bash/terminal 能力时首选，功能最全 |
| L2 | MCP Server | Agent 不支持 terminal 但支持 MCP 时使用 |
| L3 | CLI | 自动化脚本、CI/CD、固定流程任务 |
| L4 | API | 自定义集成、Web 服务、SaaS 产品 |

**选择逻辑**：

-   如果产品是 Agent 形态（如 Hermes、Claude Code）→ Skills
    
-   如果产品有固定流程但 AI 属性不强 → CLI / API
    
-   如果产品是 Web 服务 / SaaS → API / SDK
    

* * *

## **四、CLI 实操流程拆解**

### **4.1 安装与目录结构**

运行 Skills 的 bootstrap 脚本后，本地 `~/.cobo-agentic-wallet/` 目录：

```
~/.cobo-agentic-wallet/
├── bin/
│   ├── caw           # CAW 主程序
│   └── caw.meta
├── config            # default_profile 配置
├── profiles/
│   ├── profile_caw_agent_xxx/
│   │   ├── credentials          # API Key 等
│   │   └── tss-node/
│   │       ├── cobo-tss-node
│   │       ├── configs/
│   │       ├── db/secrets.db
│   │       └── recovery/
├── cache/
├── logs/
└── onboard-drafts/
```

> 💡 关键设计：每次 `caw onboard` 创建新 profile，不覆盖旧钱包。默认操作只对 `default_profile` 生效。

### **4.2 钱包创建流程**

```
# 1. 创建钱包
~/.cobo-agentic-wallet/bin/caw onboard --env dev
# 返回 agent_id + session_id

# 2. 查看进度
~/.cobo-agentic-wallet/bin/caw onboard --session-id sess-xxx
# wallet_status: "active" = 创建完成

# 3. 查看凭证
cat ~/.cobo-agentic-wallet/profiles/profile_caw_agent_xxx/credentials
# 含 wallet_uuid + api_key
```

### **4.3 Pact 提交流程**

```
# 1. 定义 Policy
POLICIES=$(jq -c -n '[{
  "name": "base-eth-usdc-uniswap-v3-swap",
  "type": "contract_call",
  "rules": {
    "effect": "allow",
    "when": {
      "chain_in": ["BASE_ETH"],
      "target_in": [{ 合约地址白名单 }]
    },
    "deny_if": {
      "usage_limits": {
        "rolling_24h": {"tx_count_gt": 1}
      }
    },
    "always_review": true
  }
}]')

# 2. 提交 Pact
caw pact submit \
  --name "Swap 0.0005 ETH to USDC on Base" \
  --intent "..." \
  --policies "$POLICIES" \
  --completion-conditions "$CONDITIONS" \
  --execution-plan "$PLAN" \
  --context '{...}'
# 返回 pact_id + approval_id，状态 pending_approval

# 3. App 审批后，使用 Pact 发起交易
caw tx call \
  --pact-id xxx \
  --chain-id BASE_ETH \
  --contract 0x... \
  --calldata "$CALLDATA" \
  --value 0.0005
```

> ⚠️ Policy 的 `params_match` 字段可传入 ABI 指定参数约束，但对数组和结构体类型 ABI 解析支持不佳，简单单层参数适用。

* * *

## **五、API 层实操拆解**

API 是 CLI 的底层实现，适合需要自定义集成的场景。

### **5.1 完整 API 流程**

```
1. 启动 TSS Node → cobo-tss-node init + start --caw
2. 创建 API Key → POST /api/v1/principals/provision
3. 创建钱包 → POST /api/v1/wallets (X-API-Key header)
4. 创建地址 → POST /api/v1/wallets/{id}/addresses
5. 发起配对 → POST /api/v1/wallets/pairs/initiate
6. 提交 Pact → POST /api/v1/pacts/submit
7. 查看 Pact → GET /api/v1/pacts/{id} (状态 active 后可用)
8. 使用 Pact → 用 Pact 的 API Key 发起交易
```

> 💡 关键区别：CLI 用 `--pact-id` 参数识别 Pact，API 层面通过**Pact 专属 API Key** 识别——提交 Pact 审批通过后，系统生成新的 API Key，后续用此 Key 发交易即代表在此 Pact 规则下执行。

### **5.2 开发者环境 vs 正式环境**

| 维度 | 开发者环境 | 正式环境 |
| --- | --- | --- |
| 官网 | agenticwallet.dev.cobo.com | agenticwallet.cobo.com |
| API | api-core.agenticwallet.dev.cobo.com | api-core.agenticwallet.cobo.com |
| Skills | cobosteven/cobo-agentic-wallet-dev | CoboGlobal/cobo-agentic-wallet |
| App | Testflight（Mock 登录） | App Store / Google Play |
| OpenAPI Docs | ✅ 有 | ❌ |

* * *

## **六、与 Hackathon 方案的对照**

### **6.1 方案C（Budget Guardian）技术映射**

基于今天学到的开发细节，方案C 的技术路径可以更精确地规划：

| Budget Guardian 功能 | CAW 对应能力 | 实现方式 |
| --- | --- | --- |
| 自然语言→Policy 解析 | Pact Policy JSON Schema | 用 LLM 将用户意图转为 Policy 结构体 |
| 创建预算约束 | caw pact submit --policies | Policy 的 deny_if.usage_limits + when.target_in |
| 白名单管理 | Policy when.target_in | 合约地址白名单 |
| 额度控制 | rolling_24h / rolling_7d / rolling_30d | 累计金额限制 |
| 单次上限 | always_review + deny_if | 超额自动拒绝 |
| 消费审计 | Pact 状态查询 API | GET /api/v1/pacts/{id} |
| 撤销预算 | Pact 废弃/销毁 | 手机端操作 |

### **6.2 约束确认**

-   Pact **不可变**：创建后不能修改，只能新建 + 废弃旧的
    
-   长期有规律的转账：应设计长期 Pact（含金额/时间限制），避免每次都创建新 Pact 需人工审批
    
-   合约调用金额限制：目前仅转账支持累计金额限制，合约调用无法从 calldata 判断金额（需模拟执行），这是**已知缺陷**
    

### **6.3 Demo 技术选型建议**

| 维度 | 选型 | 理由 |
| --- | --- | --- |
| CAW 集成方式 | Skills（开发阶段）→ API（Demo 阶段） | Skills 最快上手，API 更可控适合 Demo 展示 |
| 开发环境 | Dev 环境 | Mock 登录 + OpenAPI Docs + 无需真实资产 |
| Agent 框架 | Hermes / 自定义 Python | Python SDK 有 AI 框架工具封装 |
| 前端 | 简易 Web UI | 展示 Audit Dashboard + Pact 创建交互 |

* * *

## **七、Q&A 重点整理**

### **7.1 MPC vs 多签**

-   多签（Safe）：链上多地址，N-of-M 模式，gas 更高
    
-   MPC：链下单地址，2-2 threshold，用户体验更简洁，但需要运行 TSS Node
    

### **7.2 Pact 的生命周期**

-   **不可变**：创建后不能修改内容
    
-   **新建替代**：有新需求 → 创建新 Pact → 旧 Pact 在手机端作废/销毁
    
-   **长期 Pact**：对规律性操作（如每月固定转账），应设计含时间/金额限制的长期 Pact，避免反复审批
    

### **7.3 Intent 识别与 AI 洞察**

-   Intent + 执行计划由 Agent 根据用户话语创建
    
-   人类审批时需核对：申请权限 vs 原始意图是否一致
    
-   App 端有 AI 洞察功能：服务端大模型判断提交内容是否合理，提示风险
    

### **7.4 X402 支付相关**

-   X402 与 Policy 引擎结合不够完善
    
-   可通过 message send policy 在 EIP-712 层面做限制
    
-   签名单认证风控方式不足，是后续迭代方向
    

* * *

## **八、小作业评估**

开发者教程最后提出了两个小作业：

1.  **通过 Agent + Skills 完成任意钱包操作**（转账/合约调用/消息签名）
    
    -   🎯 计划：使用 Hermes + Skills 创建钱包 → 配对 → 创建 Pact → 发起测试交易
        
    -   ⏰ 可在 06-04 完成
        
2.  **通过 API / SDK 完成任意 DeFi 操作**
    
    -   🎯 计划：使用 Python SDK 调用 API 完成 Uniswap V3 Swap（dev 环境 Base 链）
        
    -   ⏰ 可在 06-05 完成
        

* * *

## **九、与之前学习的串联**

| 日期 | 学了什么 | 与今天的关联 |
| --- | --- | --- |
| 05-25 | Bridge: Agent Wallet + Machine Payment | 理论层：今天终于看到 CAW 的具体实现——Policy = Policy 理论的工程化，Pact = Guard 机制的载体 |
| 05-26 | Cobo 线上活动初体验 | 初识层：上次只了解了产品概念，这次深入到 CLI/API/SDK 的实操细节 |
| 06-01 | Cobo 赛道全链路复习 | 预研层：Pact 的不可变性、Policy 的限制维度、审批流设计都是方案C 的关键输入 |
| 06-02 | 黑客松赛道解读 + 方案脑暴 | 决策层：方案C 的技术路径今天得到了验证——CAW API 确实能支撑 Budget Guardian 的核心功能 |

**认知跃迁**：

-   之前理解 Pact = "交易审批"，现在理解 Pact = **可编程的权限合约**（Policy 是条款，completion\_conditions 是终止条件，execution\_plan 是执行蓝图）
    
-   之前理解 MPC = "更安全的多签"，现在理解 MPC = **链下协作签名架构**（需要持续运行 TSS Node，这是架构约束不是功能选择）
    
-   之前理解 Skills = "安装脚本"，现在理解 Skills = **Agent 原生集成层**（自动完成 CLI 安装 + 钱包创建 + 操作引导，是 Agent-to-Wallet 的桥梁）
<!-- DAILY_CHECKIN_2026-06-04_END -->

# 2026-06-03
<!-- DAILY_CHECKIN_2026-06-03_START -->








# **📖 学习笔记**

> 今日重点：**黑客松正式发布 — 赛道解读与项目脑暴** 来源：[Casual Hackathon 官网](https://casualhackathon.com/hackathons/ai-web3-agentic-builders-hackathon) 目标：理解两条赛道的评审标准，结合自身积累，脑暴可行项目方向

* * *

## **一、黑客松基本信息**

**名称**：AI × Web3 Agentic Builders Hackathon

**主题**：Build the On-chain World with AI Agents

**奖金池**：7000u

**时间线**：

-   报名 & 组队：2026年6月1日 — 6月13日中午12:00（UTC+8）
    
-   Build Period：6月1日 — 6月12日
    
-   Demo Day：6月14日
    

**当前统计**：13注册 / 2团队 / 0项目 / 0提交

**定位**：不是只比拼概念的线上比赛。希望看到 Builder 在短周期内完成从问题理解、方案设计、技术实现到 Demo 展示的完整闭环——让 AI 不只是辅助写文档或生成代码，而是成为能够规划、调用工具、执行任务并与链上系统交互的生产力。

**Workshop & Office Hour**：[https://web3career.build/zh/programs/AI-Web3-School?tab=learning](https://web3career.build/zh/programs/AI-Web3-School?tab=learning)

> ⚠️ llms.txt 文件已发布但内容未更新完，内部链接仍指向 localhost:3000，无法直接抓取结构化数据。

* * *

## **二、Cobo 赛道解读**

### **2.1 赛道定位**

**全称**：cobo 赛道｜agentic economy × cobo agentic wallet

**核心关注**：Agentic Commerce — 构建让 AI 参与经济活动的应用或基础设施。参赛项目可以是一个能花钱、赚钱、交易的 Agent，也可以是让 Agent 经济运转的底层工具。

### **2.2 五个建议方向**

| 方向 | 核心问题 | CAW 角色 |
| --- | --- | --- |
| 01｜Agent-Native Payments | 让 Agent 成为互联网的一等支付公民：HTTP 402 自动完成支付，不依赖 API Key 和人类预注册 | 让 Agent 持有和支配资金 |
| 02｜Trustless Agent Work Agreements | 基于 ERC-8183 实现 Agent 间去信任工作协议：发布→托管→交付→验收/驳回→付款 | Agent 资金账户，接收报酬、支付佣金、管理托管 |
| 03｜Agent Resource Procurement | Agent 根据任务自主发现、比价、采购算力、数据、API、存储等资源 | 赋予 Agent 自主采购能力 |
| 04｜Autonomous Trading | Agent 自主执行链上交易策略：套利、做市、组合管理、流动性挖矿 | 让 Agent 持有交易资金，授权边界内自主签署交易 |
| 05｜A2A Economy | 多个 Agent 各自拥有钱包→Agent-to-Agent 经济体：互雇、拍卖、分账、管理 Treasury | 每个 Agent 独立 CAW 钱包，Agent 间直接支付、结算、分润 |

### **2.3 赛道规则**

1.  项目必须围绕 **Agent 与资金操作**场景展开
    
2.  Agent 的资金相关操作需通过 **Cobo Agentic Wallet（CAW）** 完成
    
3.  Agent 需要具备**真实的资金执行能力**（支付、转账、结算、收益管理或资产调度），而非仅停留在流程设计层面
    
4.  项目需体现 CAW 在**钱包管理、权限控制、安全隔离或自主支付**等方面的价值
    
5.  最终成果需为**可运行或可演示的产品原型（Demo）**，不接受纯 PPT、概念设计或 Mockup
    

### **2.4 提交要求**

-   GitHub Repo
    
-   README 与项目说明文档
    
-   Demo 视频（建议 3–5 分钟）
    
-   项目演示链接（如有）
    
-   使用 CAW 的关键代码或配置说明
    
-   如涉及链上交互：测试网地址 / Transaction Hash / Agent Wallet 地址 / 流程截图或操作记录
    

### **2.5 评审侧重点**

| 维度 | 评判标准 |
| --- | --- |
| 场景贴合度 | 项目是否清楚体现 Agentic Commerce，即 AI 如何参与经济活动，而不是只把钱包作为附属功能 |
| CAW 关键性 | CAW 是否是项目资金流程中的关键组件，而不是可替换的展示元素 |
| 资金流程完整度 | Demo 是否清楚展示 Agent 从任务触发到资金操作完成的主要流程 |
| 可演示性 | Demo 是否能稳定展示核心流程，并让评委理解 Agent 如何管钱、花钱、赚钱或交易 |
| 风险边界说明 | 如果涉及权限、账户、链上交互或测试资产，是否说明基本边界和控制方式 |

### **2.6 参考资料**

-   官网：[https://www.cobo.com/agentic-wallet](https://www.cobo.com/agentic-wallet)
    
-   Recipes：[https://agenticwallet.cobo.com/agentic-wallet/recipes](https://agenticwallet.cobo.com/agentic-wallet/recipes)
    
-   文档：[https://www.cobo.com/products/agentic-wallet/manual/start-here/introduction](https://www.cobo.com/products/agentic-wallet/manual/start-here/introduction)
    
-   SDK：[https://www.cobo.com/products/agentic-wallet/manual/developer/quickstart-overview](https://www.cobo.com/products/agentic-wallet/manual/developer/quickstart-overview)
    
-   什么是 Agentic Wallet：[https://www.cobo.com/products/agentic-wallet/manual/learn/what-is-agentic-wallet](https://www.cobo.com/products/agentic-wallet/manual/learn/what-is-agentic-wallet)
    
-   Agentic Economy 专栏：[https://www.cobo.com/blog-new-page?tag=Cobo+Agentic+Economy](https://www.cobo.com/blog-new-page?tag=Cobo+Agentic+Economy)
    

* * *

## **三、**[**Z.AI**](http://Z.AI) **赛道解读**

### **3.1 赛道定位**

**全称**：[z.ai](http://z.ai) 赛道｜web3 × long-horizon task

**核心关注**：GLM-5.1 的长程任务能力 — 让 Agent 不只是回答问题，而是能**自主拆解复杂任务、制定多步骤计划、持续调用工具、迭代修复**，并完成从需求到交付的完整 Web3 工作流。参赛项目应体现**长程、自主、持续执行**，而不是只做一次性生成或普通 API 调用。

### **3.2 建议方向**

| 方向 | 描述 |
| --- | --- |
| 01｜Agentic Dev Tools for Web3 | 让 Agent 自主完成 Web3 开发任务：从需求→代码→部署→测试的全链路 |
| 02｜Autonomous On-chain Operations | Agent 持续监控链上状态，自动执行多步操作（如套利、再平衡、清算保护） |
| 03｜Multi-step Research & Analysis | Agent 自主完成研究流程：信息收集→交叉验证→生成报告→链上存证 |
| 04｜Agent Orchestration | 多 Agent 协作完成复杂 Web3 任务：拆解→分配→并行执行→汇总→验证 |

> ⚠️ [Z.AI](http://Z.AI) 赛道的完整建议方向和评审标准，因网站内容在浏览器中部分截断，以上方向基于可见内容推断。建议后续访问官网或 [Z.AI](http://Z.AI) 文档补充完整信息。

* * *

## **四、赛道选择分析**

### **4.1 自身优势映射**

| 积累维度 | 内容 | 与赛道匹配 |
| --- | --- | --- |
| Agentic Commerce 理论 | 06-01 完成了全链路复习：Agent Wallet → Machine Payment → Escrow → Identity → Security | ✅ Cobo 赛道核心 |
| Cobo 产品理解 | MPC 2-2 threshold / Pact / Recipe / Session Key / Policy / Guard 全链路串联 | ✅ Cobo 赛道关键 |
| Bridge 层概念 | Agent Identity / Settlement & Escrow / Machine Payment / AI Security / Verifiable AI | ✅ 两赛道都受益 |
| AI Agent 实践 | Hermes Agent 日常使用 / Vibe Coding 实践 / MCP 工具调用理解 | ✅ Z.AI 赛道基础 |
| 写作能力 | LI.FI Intents 技术文章经验 / 合并多视角写作偏好 | 辅助，非决定性 |
| 开发能力 | 有开发经验，但时间有限（6月12日前需完成 Demo） | ⚠️ 约束条件 |

### **4.2 赛道选择倾向**

**首选：Cobo 赛道** — 原因：

1.  **积累最深**：已经完成了从理论（Bridge 全链路）到产品（Cobo 技术栈映射）的系统学习
    
2.  **评审标准明确**：场景贴合度、CAW 关键性、资金流程完整度 — 都有清晰的成功定义
    
3.  **技术路径可行**：CAW SDK + Recipe 已有文档，不需要从零搭建基础设施
    
4.  **差异化空间**：06-01 笔记已识别三个切入角度，有预研基础
    

**备选：**[**Z.AI**](http://Z.AI) **赛道** — 如果 GLM-5.1 的长程能力有令人惊喜的表现，且项目能同时覆盖 Cobo 场景

* * *

## **五、项目脑暴**

### **💡 方案 A：Agent Procurement Hub — Agent 自主采购平台**

**赛道**：Cobo 方向03（Agent Resource Procurement）+ 方向01（Agent-Native Payments）

**一句话**：一个让 Agent 能自主发现、比价、采购 API/数据/算力资源，并通过 CAW 完成支付和验收的平台。

**用户故事**：

1.  用户给 Agent 设定任务："我需要调用 GPT-4 级别的推理 API，预算每天 2 USDC"
    
2.  Agent 在 Procurement Hub 上搜索可用 API 提供方
    
3.  Agent 比较报价（价格/延迟/QPS/SLA），选择最优
    
4.  Agent 通过 CAW 创建 Pact：限定额度 + 白名单收款方 + 时效
    
5.  Agent 调用 API，获得服务，自动支付
    
6.  验收不通过时（API 超时/返回质量差），触发 Escrow 争议流程
    

**技术架构**：

```
Agent（GLM-5.1 / Claude）
  → MCP Tool: Procurement Hub API
  → CAW Pact: 预算控制 + 白名单 + 时效
  → Provider Registry: 服务发现 + 报价
  → Delivery Proof: API 调用日志 + 返回质量评估
  → Escrow: 托管 → 验收 → 释放/退款
```

**Demo 路径**：

1.  用户在 UI 上设定采购意图和预算
    
2.  Agent 展示搜索结果和比价分析
    
3.  Agent 创建 CAW Pact 并等待确认
    
4.  Agent 调用 API，展示调用过程和结果
    
5.  Agent 自动完成支付，展示 Receipt
    
6.  模拟一个验收失败场景，展示退款流程
    

**CAW 关键性**：核心。Pact 是预算控制的关键机制，MPC 签名是支付执行的必要组件。

**风险**：

-   ⚠️ Provider Registry 如何获取真实数据？12天内很难对接真实 API 提供方
    
-   💡 降级方案：用 2-3 个模拟 Provider（如 OpenAI API、Coingecko API）做 Demo
    
-   ⚠️ Delivery Proof 的自动验收逻辑需要设计
    
-   💡 降级方案：先用简单规则（HTTP 200 + 响应时间 < 阈值）代替 AI 验收
    

* * *

### **💡 方案 B：Agent Work Agreement — Agent 间去信任工作协议**

**赛道**：Cobo 方向02（Trustless Agent Work Agreements）

**一句话**：基于 ERC-8183 思路，实现 Agent 间发布任务→托管→交付→验收→付款的去信任协议，通过 CAW 管理资金。

**用户故事**：

1.  Research Agent 需要一个链上数据分析报告
    
2.  Research Agent 在 Work Agreement 平台发布任务：需求描述 + 预算 + 截止时间
    
3.  Analyst Agent 认领任务，Research Agent 通过 CAW 托管资金
    
4.  Analyst Agent 提交交付物（数据报告）
    
5.  Research Agent 验收：自动检查（格式/字段完整性）+ 人工确认（内容质量）
    
6.  验收通过 → CAW 释放托管资金给 Analyst Agent
    
7.  验收失败 → 争议流程
    

**技术架构**：

```
Work Agreement Smart Contract (ERC-8183 inspired)
  → Task: 需求 + 预算 + 截止时间 + 验收标准
  → Escrow: CAW 托管资金
  → Delivery: 交付物 hash + 描述
  → Acceptance: 自动检查 + 人工确认
  → Settlement: CAW 释放/退款
```

**Demo 路径**：

1.  部署 Work Agreement 合约到测试网
    
2.  Agent A 发布任务，通过 CAW 托管资金
    
3.  Agent B 认领并提交交付物
    
4.  展示自动验收流程
    
5.  展示资金释放
    
6.  展示验收失败→退款场景
    

**CAW 关键性**：核心。托管资金的创建和释放必须通过 CAW，Pact 限定只有合约地址可以触发释放。

**风险**：

-   ⚠️ ERC-8183 尚未正式发布，合约设计需要自行定义
    
-   ⚠️ 两个 Agent 之间的通信协议（A2A）需要简化实现
    
-   💡 降级方案：不做真正的 A2A 协议，用 HTTP API 模拟 Agent 间通信
    

* * *

### **💡 方案 C：Agent Budget Guardian — 智能预算守护 Agent**

**赛道**：Cobo 方向01（Agent-Native Payments）+ 方向03（Agent Resource Procurement）

**一句话**：一个专门帮用户监控和管理 Agent 消费的守护 Agent，通过 CAW Pact 实现预算策略的自动生成和执行。

**用户故事**：

1.  用户说"我的 Agent 这周最多花 10 USDC 在 API 调用上"
    
2.  Budget Guardian 解析意图，自动生成 CAW Pact Policy：
    
    -   总额度：10 USDC
        
    -   单次上限：1 USDC
        
    -   白名单：\[OpenAI, Coingecko, Alchemy\]
        
    -   时效：本周结束
        
    -   完成条件：总支出达到 10 USDC 或超时
        
3.  Agent 每次发起支付前，Budget Guardian 检查 Policy 并模拟交易
    
4.  超限时自动拒绝并通知用户
    
5.  用户可随时查看消费记录和剩余预算
    

**技术架构**：

```
Budget Guardian Agent
  → 自然语言→Policy 解析器
  → CAW Pact API: 创建/修改/撤销 Pact
  → Simulation: 每笔交易预演
  → Audit Dashboard: 消费记录 + 预算剩余 + 异常告警
```

**Demo 路径**：

1.  用户输入自然语言预算指令
    
2.  Guardian 展示自动生成的 Pact Policy（可编辑）
    
3.  Guardian 创建 Pact，等待用户确认
    
4.  模拟 Agent 消费场景（3笔小额通过 + 1笔超额被拒）
    
5.  展示 Audit Dashboard
    
6.  用户撤销 Pact，Agent 失去执行能力
    

**CAW 关键性**：核心。Pact 是预算策略的载体，Policy 是执行约束，Simulation 是安全网。

**优势**：

-   ✅ 最贴合 06-01 学习的"用户侧权限管理"方向
    
-   ✅ 不需要对接外部 Provider，降低了 Demo 复杂度
    
-   ✅ 自然语言→Policy 的解析是技术亮点，可展示 AI 能力
    
-   ✅ 评审维度全面覆盖：场景贴合（预算管理）、CAW 关键（Pact 是核心）、资金流程完整（创建→使用→撤销）、风险边界清晰
    

**风险**：

-   ⚠️ CAW Pact API 的实际调用需要在 Demo 期间跑通
    
-   ⚠️ 自然语言→Policy 的解析准确率需要保证
    
-   💡 缓解：先用结构化输入+模板，自然语言作为锦上添花
    

* * *

## **六、方案对比与初步推荐**

| 维度 | 方案A: Procurement Hub | 方案B: Work Agreement | 方案C: Budget Guardian |
| --- | --- | --- | --- |
| Cobo方向覆盖 | 01+03 | 02 | 01+03 |
| CAW关键性 | 高 | 高 | 高 |
| Demo复杂度 | 高（需对接Provider） | 中（需部署合约） | 低（主要用CAW API） |
| 12天可完成度 | ⚠️ 有风险 | ✅ 可行 | ✅ 最可行 |
| 评审维度覆盖 | 4/5 | 4/5 | 5/5 |
| 与积累的匹配度 | 高 | 中 | 最高 |
| 差异化 | Agent比价采购 | ERC-8183探索 | 自然语言→Policy |

**初步推荐：方案C（Budget Guardian）**

理由：

1.  12天时间紧迫，方案C 的 Demo 复杂度最低，但评审维度覆盖最全
    
2.  自然语言→Pact Policy 的解析是真正的 AI×Web3 交叉点
    
3.  与 06-01 的"用户侧权限管理"方向完全对齐
    
4.  Audit Dashboard 是天然的 Demo 亮点
    
5.  如果时间允许，可以在方案C 基础上叠加方案A 的采购场景作为扩展
    

* * *

## **七、下一步行动**

### **本周必做（6月2日-8日）**

-   确认赛道选择（Cobo 还是 [Z.AI](http://Z.AI) 或双赛道）
    
-   确认项目方案（A/B/C 或组合）
    
-   在 Casual Hackathon 网站注册报名
    
-   阅读并跑通 CAW SDK Quickstart
    
-   验证 CAW Pact API 的核心调用（创建/修改/撤销 Pact）
    
-   设计 Demo 的核心交互流程
    

### **本周选做**

-   寻找队友（如果是团队项目）
    
-   参加 Workshop / Office Hour
    
-   研究方案A/B 的可行性
    

* * *

## **八、与之前学习的串联**

| 日期 | 学了什么 | 与今天的关联 |
| --- | --- | --- |
| 05-20~22 | LLM/Context/Agent + Wallet/Tx&Gas/SmartContract | 基础层：Agent能力 + 链上操作是黑客松项目的地基 |
| 05-25 | Bridge 5章连读 | 核心层：Agent Wallet / Machine Payment / Agent Workflow 是 Cobo 赛道的理论基础 |
| 05-26 | Cobo 线上活动 | 产品层：第一次接触 CAW / Pact / Recipe，今天的赛道理解直接来源 |
| 05-27~29 | Dev Tooling / AI Security / Governance | 方向层：Dev Tooling 是 Z.AI 赛道的核心场景 |
| 05-30 | AA + DeFi + Security + Bridge 深化 | 技术层：AA 是 CAW 的基础设施，DeFi 是主要应用场景 |
| 06-01 | Cobo 赛道全链路复习 | 预研层：已识别三个切入角度，今天的方案脑暴是对预研的落地 |
<!-- DAILY_CHECKIN_2026-06-03_END -->

# 2026-06-02
<!-- DAILY_CHECKIN_2026-06-02_START -->









# **学习笔记**

> 今日重点：**Cobo 赛道聚焦 — Agentic Commerce 全链路复习与深化** 范围：Agent Wallet → Machine Payment → Settlement & Escrow → Agent Identity → AI Security → Agentic Commerce 赛道总览 目标：以 Cobo 产品为锚点，把 Bridge 层所有相关概念串成完整商业闭环，形成 Hackathon 选方向的技术判断基础

* * *

## **一、Agentic Commerce 赛道定位**

**一句话**：当 Agent 能代表用户发现商品、调用 API、比较报价、发起付款和验收结果时，商业流程应该如何被重新设计。

**核心张力**：传统电商是人点按钮、填表单、确认付款。Agentic Commerce 变成机器之间的协作——但真正的难点不在"自动买东西"，而在**交易边界**：

-   Agent 是否能判断这个服务值得买？
    
-   用户预算如何表达成机器可执行的限制？
    
-   服务方如何证明任务完成？
    
-   结果不满意时如何退款或仲裁？
    
-   小额、高频、跨平台的机器支付怎么做？
    

**第一性原理**：Agent 可以替用户发起商业动作，但不能替用户承担无限责任。商业自动化的核心不是让 Agent 随便花钱，而是把购买意图、预算、验收标准和争议规则变成结构化协议。

> 📌 **购买前要有 intent，购买中要有约束，购买后要有证据。**

* * *

## **二、全链路：从用户意图到资金释放**

Agentic Commerce 的完整链路拆解：

```
用户表达意图 → Agent 生成执行计划 → 系统转成受限交易/操作
→ Guard + Simulation 检查风险 → 用户确认关键动作 → 执行
→ 日志记录 → 验收 → 结算/退款
```

### **2.1 Agent Wallet：权限的起手式**

**核心问题**：Agent 可以代表用户做哪些链上动作？有没有额度、时间、对象和风险限制？用户什么时候必须重新确认？

**第一性原理**：控制权不能交给一个概率系统。Agent 只能拿到可验证、可限制、可撤销的行动空间。

三条原则：

1.  **Agent 不直接控制主资产** — 模型可以生成计划和交易草稿，但不应该拿到用户主私钥
    
2.  **钱包不只是签名按钮，而是权限系统** — 要表达时间、金额、合约、方法、资产、接收方和撤销条件
    
3.  **自动化必须绑定撤销能力** — 用户随时要能看见 Agent 拿了什么权限、做过什么、还能做什么
    

**关键知识节点**：

| 节点 | 难度 | 核心记忆 |
| --- | --- | --- |
| AA Wallet | 中级 | 账户终于可以表达规则：谁能操作、能操作什么、什么时候失效、超出边界怎么办 |
| Smart Account | 中级 | 带规则的钱包账户，定义谁可以发起操作、哪些需确认、每日限额、权限自动失效、异常暂停 |
| Safe | 中级 | 天然适合把执行权拆开，Agent 生成草稿/触发低风险模块，大额仍需多签确认 |
| Session Key | 高级 | 临时有限权限小钥匙——不是小号私钥，而是一组受限能力（时间、合约方法、额度、token 类型、外部转出、可撤销） |
| Policy | 高级 | 系统能检查的规则：每日最多 10 USDC、白名单合约、只能 swap 不能 approve 无限额度、滑点超 1% 停止、NFT 转出需确认 |
| Guard | 高级 | 确定性拦截层：Agent 生成候选动作，Guard 必须拒绝越界动作（地址白名单、方法允许、金额限制、授权额度、模拟结果、市场状态） |
| Simulation | 中级 | 签名前预演——翻译成人能看懂的内容：支付多少、收到什么、授权变化、失败成本、是否和目标一致 |
| Revocation | 中级 | 所有自动化权限都应有用户看得见的关闭入口；系统也应自动收紧（session key 到期、额度用完、多次失败、异常地址、行为偏离、用户长时间未确认） |
| Human Check | 初级 | 分层：低风险可逆自动执行、中等风险先模拟再确认、高风险不可逆必须展示影响并确认、超出 policy 直接拒绝不问 |

> 🔗 **Cobo 对照**：
> 
> -   MPC 2-2 threshold 模式 = Safe 多签思想的工程实现（Agent+Cobo 共管 / Human+Cobo 审批）
>     
> -   Pact = Policy + Session Key + Revocation 的产品级封装
>     
> -   Recipe = Web3 Tool Use 的知识封装，帮 Agent 把链上操作做对
>     

### **2.2 Machine Payment：自动化的资金流**

**核心问题**：Agent、API、服务和钱包之间如何自动完成报价、授权、付款、收据和预算控制？

**第一性原理**：Agent 不应该拥有无限支付能力，只应该拿到具体任务、预算和收款方范围内的支付权限。

三条：

1.  **预算先于执行** — 没有预算边界，就没有安全自动支付
    
2.  **报价必须可比较** — Agent 要知道价格、币种、有效期、服务范围和退款条件
    
3.  **收据必须可验证** — 付款后要能证明付给谁、为什么付、交付了什么
    

**关键知识节点**：

| 节点 | 难度 | 核心记忆 |
| --- | --- | --- |
| Stablecoin Payment | 初级 | 计价 ≠ 结算；Agent 不能只看到"0.1"，必须知道是 0.1 USDC/USDT/gas token；approve 本身就是高风险动作 |
| Budget | 初级 | 多层：全局/任务/单次/服务方/紧急停止；不只设总预算，还要设频率和服务方范围 |
| Quote | 中级 | 合格 quote：服务内容、价格、币种、收款地址、有效期、交付条件、退款条件、quote id；过期 quote 不能使用，应能签名验证来源 |
| Payment Intent | 中级 | "用户授权这类付款"而非"某笔交易已发生"；绑定任务/金额/收款方/有效期/可接受结果 |
| x402 | 中级 | HTTP 402 变成互联网原生支付——客户端请求→服务返回付款要求→完成支付→带证明重放请求；不解决服务质量/退款/争议 |
| MPP | 中级 | 机器间支付协议化：发现服务、报价、授权支付、结算、返回收据；链下完成大部分，链上只承担最终结算 |
| Subscription | 中级 | 需撤销能力；小心"静默续费"；应与 smart account policy 结合（月上限、白名单、扣款窗口、异常告警） |
| Micropayment | 高级 | 先算经济账：L2/payment channel/批量结算/预付余额/链下账本+链上最终结算 |

> 🔗 **Cobo 对照**：
> 
> -   小额免密支付 = Micropayment + x402 的 Pact 限定版
>     
> -   Pact.policy = Budget Control 的合约级实现
>     
> -   链上支付快速高效结算 = Stablecoin Payment 的优势
>     

### **2.3 Settlement & Escrow：资金的安全释放**

**核心问题**：钱什么时候释放、服务怎么算完成、失败怎么退款、争议怎么处理？

**第一性原理**：自动化交易必须有明确完成条件，否则支付就无法安全自动化。

三条：

1.  **资金状态要清楚** — pending / locked / released / refunded / disputed
    
2.  **交付证明要可保存** — 结果、hash、日志、模型输出、交易哈希都可能成为证据
    
3.  **争议流程要提前设计** — 不要等失败后才讨论谁有权判定
    

**关键知识节点**：

| 节点 | 难度 | 核心记忆 |
| --- | --- | --- |
| Escrow | 初级 | 状态机：Created→Funded→Delivered→Accepted→Refunded/Disputed→Released；先定义业务流程再定义资金流 |
| Receipt | 初级 | 不只是"已付款"：谁付给谁、金额币种、任务 ID、quote id、时间 tx、服务结果引用、验收状态；同时服务人和机器 |
| Delivery Proof | 中级 | 文件 hash/API 返回日志/模型输出签名/链上 event/TEE attestation/人工验收/Agent 验证；证明必须能和原始任务对应 |
| Acceptance | 中级 | AI 初审 + challenge window + 人工复核；拆成可检查条件（字段完整、测试通过、时间匹配、hash 匹配、预算未超） |
| Refund | 初级 | 退款是协议的一部分，不是失败后的临时善意；也要考虑部分交付的比例退款 |
| Dispute | 高级 | 发起成本、证据格式、裁决权、可否申诉；无成本争议易滥用，成本过高小额无法维权 |
| Evaluator | 高级 | 脚本+测试套件+AI+人类组合；evaluator 本身也需要被评估（错误率、历史争议） |
| ERC-8183 | 高级 | Agent 任务/支付/escrow/交付/验证的统一流程标准草案；交易不是 token transfer，而是围绕任务生命周期的状态转换 |

> 🔗 **Cobo 对照**：
> 
> -   Pact 的 Completion Condition = Escrow 状态机中的自动过期条件
>     
> -   多 Agent 共管 = Escrow 中"谁有权判定"的问题
>     
> -   Recipe 执行结果 = Delivery Proof 的来源
>     

### **2.4 Agent Identity：经济参与者的身份基础**

**核心问题**：它是谁、谁控制它、能提供什么能力、服务入口在哪里、历史记录能不能追溯？

**第一性原理**：Agent 身份必须绑定控制权、能力声明和服务入口，而不只是一个显示名称。

三条：

1.  **身份要可解析** — 从 identifier 找到 profile 和 endpoint
    
2.  **控制权要可证明** — 更新 profile 或接收付款的人要能证明自己是 owner
    
3.  **能力要可验证** — 能力声明需要测试、证明、评价或历史记录支撑
    

**关键知识节点**：

| 节点 | 难度 | 核心记忆 |
| --- | --- | --- |
| Agent Profile | 初级 | 同时给人和机器看：人理解做什么/谁运营/收费；机器解析 endpoint/capabilities/schemas/auth/payment/terms |
| Capability | 中级 | 越具体越有用；输入类型、输出格式、是否需要钱包权限、是否调用外部 API、最长执行时间、失败退款；标记风险等级 |
| Service Endpoint | 初级 | HTTPS API/A2A/MCP/Webhook/链上 registry；endpoint 更新需 owner 签名，保留历史 |
| Registry | 中级 | 链上提供公开身份锚点（agent id/owner/profile URI/endpoint/更新记录）；能证明"谁注册的"，不能证明"一定好用" |
| DID / VC | 中级 | 跨平台身份+可验证声明；VC 可信度取决于 issuer |
| A2A | 中级 | Agent 间通信层：发现/协商/委托/返回结果；A2A 消息应和 Payment Intent/Receipt/Escrow 状态关联 |
| Ownership | 高级 | 高价值 Agent 不应单热钱包控制；身份/endpoint/收款变更需可验证记录；建议 operator 和 owner 分开 |

> 🔗 **Cobo 对照**：
> 
> -   多 Agent 钱包 = 不同 Agent 有独立身份和资金
>     
> -   Recipe 目录 = Capability 声明的产品实现
>     
> -   Agent Profile + Service Endpoint = Agent 被发现和调用的入口
>     

### **2.5 AI Security：不可信输入无法变成不受限执行**

**核心问题**：防止模型错误、恶意上下文和工具滥用变成真实资产、权限或治理事故。

**第一性原理**：所有进入模型的内容都可能是攻击面，所有离开模型的动作都必须被约束。

三条：

1.  **上下文不等于指令** — 网页、合约文档、API 返回值不能覆盖系统规则
    
2.  **工具权限要隔离** — 读工具和写工具分开，普通任务和高风险任务分开
    
3.  **日志要可审计** — 出了问题要能看到模型读了什么、做了什么
    

**关键知识节点**：

| 节点 | 难度 | 核心记忆 |
| --- | --- | --- |
| Prompt Injection | 中级 | Web3 攻击面：合约 README/网页/治理提案/token metadata/交易备注/API 返回；防护=分层标注上下文可信级别+高风险工具不听模型一句话 |
| Tool Abuse | 高级 | 不是一次大动作而是很多小动作累积（重复购买/循环调用/查询敏感数据）；工具层需独立异常检测 |
| Malicious Context | 中级 | 不只是恶意指令，还可能是错误事实（假合约地址/伪造审计/过期价格/被污染 metadata）；链上事实优先从 RPC/explorer/verified source 读 |
| Key Safety | 高级 | secret 不进入 prompt/输出/日志/analytics；优先 Smart Account policy 或 session key，不把 EOA 私钥放进自动化 runtime |
| Permission Isolation | 高级 | 读/写/撤销/大额支付不同能力；环境隔离：浏览器 sandbox ≠ 钱包签名 ≠ 代码执行 |
| Sandbox | 中级 | 默认禁止 .env/ssh key/wallet seed/cookie/生产凭证；浏览器自动化不能和钱包签名无边界连接 |
| Audit Log | 初级 | 完整链路：模型看到什么上下文→为什么选某工具→工具返回什么→policy 是否通过→用户是否确认；日志防篡改 |
| Alert | 中级 | 告警要连接响应动作（暂停/撤销/冻结/通知/人工审核）；告警也要避免过度打扰 |

> 🔗 **Cobo 对照**：
> 
> -   Prompt Injection → Cobo 讨论的"意图传递攻击"，通过 Recipe 和 AI 助手审计 Pact 缓解
>     
> -   Shadow Operations → MPC 三方分片天然防止单方暗箱操作
>     
> -   Unscoped Authority → Pact.policy 精确限定链/token/合约/额度
>     
> -   Zombie Permissions → Pact.completion condition 设定时效和数量上限
>     

* * *

## **三、Cobo 产品方案：全链路串联**

回顾 05-26 Cobo 线上活动笔记，把 Cobo 产品拆解到上面五个概念层：

### **Cobo 的技术栈映射**

| Bridge 概念 | Cobo 实现 | 解决什么 |
| --- | --- | --- |
| AA / Smart Account | MPC 钱包（三方分片：Cobo+Agent+Human） | 替代单私钥，任意一方无独立掌控权限 |
| Safe / 多签 | 2-2 threshold（Agent+Cobo / Human+Cobo） | 执行权拆分，大额需人类参与 |
| Session Key | Pact 的时间/数量/额度限制 | 临时权限，用完即止 |
| Policy | Pact.policy（预算审批、白名单链/TOKEN/合约） | 系统可检查的规则 |
| Revocation | Pact.completion condition（时效+数量上限） | 自动过期，防 Zombie Permission |
| Budget Control | Pact 的额度上限 | 防止 Agent 循环错误无限消费 |
| Web3 Tool Use | Recipe 知识胶囊（AaveV3/UniswapV3 等） | 帮 Agent 把链上操作做对 |
| Payment Intent | Pact.intent + Execution Plan | 用户意愿→机器可执行的边界 |
| AI Security | MPC 分片 + Pact 审计 + Recipe 知识校验 | 不可信输入无法变成不受限执行 |

### **Cobo 的完整业务闭环**

```
用户表达意图 → Pact.intent
  → Agent 转译 + Recipe 辅助 → Pact.Execution Plan
  → Pact.policy 检查（额度/白名单/时效）→ Guard 拦截
  → Human 审批（App 端确认）
  → MPC 2-2 签名执行（Agent+Cobo 或 Human+Cobo）
  → 交易上链 → Simulation 预演/Receipt 记录
  → Pact.completion condition 检查 → 自动过期或继续
```

* * *

## **四、Agentic Commerce 三个切入方向**

Handbook 给出的方向选择：

1.  **帮 Agent 购买 API、数据或推理服务** — Agent 侧，侧重 Payment Intent + Budget + Quote
    
2.  **帮服务方接受 Agent 支付并自动交付** — Provider 侧，侧重 Delivery Proof + Receipt + Escrow
    
3.  **帮用户管理预算、权限和消费审计** — User 侧，侧重 Policy + Guard + Audit Log + Revocation
    

### **我的初步判断**

Cobo 明确走了**方向 3（用户侧权限管理）**，且从 MPC 钱包基础设施切入，向上构建 Pact + Recipe。这是一个重基础设施、高安全要求的路径。

如果选 Cobo 赛道做 Hackathon 项目，可以从以下角度差异化：

-   **方向 1 + 方向 3 的交叉**：做一个 Agent 购买 API 时的自动预算协商+审批流程，替代手动 Pact 配置
    
-   **方向 2 的补位**：Cobo 目前聚焦 Agent 侧和用户侧，Provider 侧（服务发现/报价/交付证明/争议处理）还有空间
    
-   **Agent Identity + Escrow 的组合**：让 Agent 的身份和声誉直接参与 escrow 的信用评估，降低争议成本
    

* * *

## **五、踩坑记录与待验证问题**

### **踩坑预感**

1.  **Pact 表达能力边界** — Policy 越细致，用户体验越复杂。如何做到"默认安全"而非"配置地狱"？
    
2.  **Recipe 覆盖度** — 目前只覆盖 AaveV3/UniswapV3 等主流协议，长尾 DeFi 怎么办？Agent 能否自己"学会"新协议？
    
3.  **Human-in-the-loop 体验瓶颈** — 如果每笔交易都要人批准，效率比手动操作还低。"条件不变时自动执行"的规则设计是关键
    
4.  **x402 + Pact 的集成** — x402 只解决付款协议的一部分（不解决服务质量/退款/争议），和 Pact 的 completion condition 如何协同？
    
5.  **跨链场景** — MPC 钱包跨链可用性，不同链的 Policy 表达差异
    

### **待深入**

-   Cobo Agent Wallet 的 MPC 技术细节（TSS 算法、分片生成与恢复）
    
-   Pact 协议是否开放标准？能否跨平台使用？
    
-   Recipe 如何扩展到非 EVM 链？
    
-   x402 微支付协议与 Cobo Pact 的集成方式
    
-   ERC-8183（Agentic Commerce 标准草案）与 Pact 的对齐度
    
-   Agent Identity（ERC-8004）和 Cobo 多 Agent 身份的关系
    

* * *

## **六、与之前学习的串联**

| 日期 | 学了什么 | 与今天的关联 |
| --- | --- | --- |
| 05-20 | LLM + Wallet | Wallet 是 Agent Wallet 的前提：先理解签名和身份，再谈权限分层 |
| 05-21 | Context + Tx&Gas | 交易成本是 Budget 的约束因子；Gas 管理是 Agent 支付必须处理的 |
| 05-22 | Agent + Smart Contract | Agent 是执行者，Smart Contract 是规则承载者——Smart Account 就是二者的交汇 |
| 05-25 | Bridge 5 章连读 | 今天是 05-25 所学的深化：从概念理解到产品级串联 |
| 05-26 | Cobo 线上活动 | 今天把 Cobo 产品方案拆解到每个 Bridge 概念层，形成完整映射 |
| 05-30 | AA + DeFi + Security | AA 是 Agent Wallet 的基础设施；DeFi 是 Agentic Commerce 的主要场景 |

* * *

## **七、最小实践规划**

### **选择方向：Agentic Commerce — Agent 购买 API 的权限管理**

**场景**：用户允许 Agent 在一天内最多花 5 USDC，调用白名单数据 API。Agent 可以自动完成小额支付，但不能转账给任意地址，也不能修改授权。

**需要写清楚或实现**：

-   用户授权的额度、时间和目标地址
    
-   Agent 可以自动执行的操作
    
-   哪些操作必须人工确认
    
-   交易发出前如何模拟和展示结果
    
-   超出 policy 时系统如何拒绝
    
-   用户在哪里查看和撤销当前权限
    
-   每次支付如何留下可审计记录
    

**对比场景设计**：

1.  ✅ 正常：Agent 在额度内自动支付，并留下记录
    
2.  ❌ 超限：Agent 想支付 6 USDC，被 policy 拒绝
    
3.  ❌ 异常：目标地址不在白名单内，被 Guard 拦截
    
4.  👤 用户操作：用户手动撤销 session key，Agent 失去执行能力
<!-- DAILY_CHECKIN_2026-06-02_END -->

# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->










## **项目评估要点**

**用户情况**：需关注项目的用户数量、用户规模、获客渠道和成本等，如有人提到项目获客成本为6元。

**产品潜力**：考察产品是否有效果、潜力以及实际功能，能否快速迭代。

**商业化落地**：很多项目需关注能否实现现实的商业化落地，避免同质化，要给超级用户提供新鲜的东西。

## **团队要求**

**创始人特质**：创始人要有主见，但也要能客观地听取别人的意见，避免固执陷入自我制造的泥潭。

**商务能力**：创始合伙人、内部合伙人要有较强的商务能力，如能快速进入平台并与他人达成一致。

**团队核心**：团队的核心对项目能否成功很重要，团队要能在创业过程中学习成长，应对意外和挫折。

## **市场情况**

**竞争激烈**：由于门槛降低、成本不大，各领域竞争都很激烈，如电商等行业。

**Tob项目问题**：小团队做Tob项目存在问题，大公司新用户付费意愿不高，尤其AI项目。

**外部投资市场**：与之前相比，现在项目多但投入少，投资流程一般是先评审分析，合适的话再进一步操作。

## **投资策略**

**风险与收益**：投资早期项目风险高、收益也高，如投10个项目，可能5个跑路，三四个亏点钱或保本，收益靠一两个优秀项目。

**投资风格**：投资人投资风格不同，有的求稳，有的喜欢玩大的，与VC所处阶段有关。

**投后工作**：投后会帮项目做曝光，如写文章、举办活动等。

## **具体项目案例**

**共享车辆项目**：有解决共享车辆问题的项目，如欧洲的共享卡车、共享特斯拉项目，能解决二次车辆问题，绿色环保，解决交通问题。

**AI项目**：提到AI知识库项目，探讨能否将相关内容放在RD基础上形成公司知识；还提到一个AI公司返利社IPO前上市交易价格与最后通过价格相似，用技术手段解决大众参与不公开发行的问题。

**跨行建议**：传统金融背景学生想跨行到WEB3行业，可先找外媒或第三方项目实习，通过主流媒体新闻建立认知框架，提升学习能力。
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->











## **EOA / 智能账户 / 多签 — 权限差异比较**

## **1\. 三类账户是什么**

### **EOA（Externally Owned Account）**

由私钥直接控制的账户。一个私钥 → 一个地址，谁有私钥谁就能做一切。一般钱包默认创建的就是 EOA。

-   **控制权来源**：单一私钥（或由助记词推导的密钥对）
    
-   **验证逻辑**：固定 — 只认 ECDSA 签名
    
-   **地址格式**：0x 开头的 20 字节地址
    

### **智能账户（Smart Account / Contract Account）**

由智能合约代码控制逻辑的账户。底层是 ERC-4337 体系下的合约钱包（如 Safe、Biconomy、Kernel），验证规则可编程。

-   **控制权来源**：合约代码中定义的验证函数
    
-   **验证逻辑**：可定制 — 多签、Passkey、社交恢复、Session Key、策略模块
    
-   **交易流程**：UserOperation → Bundler → EntryPoint → 智能账户验证 & 执行
    

### **多签账户（Multisig Account）**

需要 N 个签名中的 M 个才能执行操作（M-of-N）的账户。本质上是智能账户的一种特化形式，最典型的实现是 Gnosis Safe（现 Safe）。

-   **控制权来源**：N 个持有者各自持有独立私钥/签名权
    
-   **验证逻辑**：M-of-N 签名校验
    
-   **常见配置**：2-of-3、3-of-5、5-of-8 等
    

* * *

## **2\. 六维比较**

| 维度 | EOA | 智能账户 | 多签 |
| --- | --- | --- | --- |
| 谁持有控制权 | 持有单一私钥的个人 | 合约所有者/模块权限持有者 | N 个签名者共同持有 |
| 谁可以发起交易 | 任何持有私钥的人 | 满足验证规则的任何人/Agent（可设 Session Key） | 收集到 M 个签名后的任何人 |
| 是否支持多人确认 | ❌ 不支持，一人独占 | ✅ 可选（通过多签模块或策略） | ✅ 核心特性（M-of-N） |
| 是否支持恢复/限额/自动化 | ❌ 无恢复、无限额、无自动化 | ✅ 社交恢复、Session Key 限额、批量交易、Paymaster 代付 | ⚠️ 部分支持（替换签名者可变相恢复，但无自动化策略） |
| 典型使用场景 | 个人日常钱包、dApp 交互 | Agent 自动执行受限操作、gas 抽象、社交恢复、批量 DeFi 操作 | DAO 金库、团队资金、高价值资产冷存储 |
| 主要风险点 | 私钥丢失=资产永久丢失；无恢复；钓鱼签名可清空 | 合约 bug 或模块权限漏洞；升级逻辑被攻击；依赖 Bundler/Paymaster 等外部基础设施 | M 个签名者被串通/社会工程攻击；M 值设置过低形同虚设；操作延迟高影响时效 |

### **补充说明**

**控制权粒度**：

-   EOA 是"全有或全无" — 有私钥 = 100% 控制权，没有 = 0%
    
-   智能账户可以做细粒度拆分：Session Key 只允许特定合约+方法+额度+时间段，其余仍需主签名
    
-   多签在"谁能批准"维度做了拆分，但在"批准后能做什么"维度不如智能账户精细
    

**自动化能力**：

-   EOA 无法自动化 — 每次都需要人工签名
    
-   智能账户可通过 Session Key 实现 Agent 自动执行低风险操作（如：每小时最多一次小额再平衡）
    
-   多签的"自动化"只能通过将某个签名者设为自动化 Bot 来变相实现，但该 Bot 拥有的权限等同于一个完整签名者
    

* * *

## **3\. 适用场景 × 风险点**

### **EOA**

**适用场景**：

-   个人用户日常 DeFi 交互（Swap、Stake、NFT 购买）
    
-   快速原型开发和测试网实验
    
-   Gas 赞助不需要的简单场景
    

**风险点**：

-   私钥/助记词泄露 → 资产瞬间清空，无任何追回机制
    
-   签名钓鱼 — 用户可能在不知情的情况下签名了恶意 approve，导致代币被盗
    
-   无法设置任何限制 — 一旦签名授权，权限即完全交出
    

**必须人工确认的操作**：所有交易和签名 — EOA 没有任何"自动执行"机制

### **智能账户**

**适用场景**：

-   AI Agent 受限执行链上操作（通过 Session Key 限制合约+方法+额度+时间）
    
-   新用户 onboarding（Paymaster 代付 gas，用户无需持有原生代币）
    
-   需要社交恢复的场景（丢失设备后通过恢复人找回账户）
    
-   批量交易（一次确认执行多步操作，减少签名疲劳）
    

**风险点**：

-   合约本身可能有 bug — 代码即法律，bug 即漏洞
    
-   模块权限设计不当 — 权限过大的模块等于后门
    
-   外部依赖风险 — Bundler 拒绝打包 → 操作卡住；Paymaster 耗尽 → 用户无法操作
    
-   升级风险 — 如果代理合约的 admin key 泄露，攻击者可以替换实现
    

**必须人工确认的操作**：

-   超出 Session Key 额度/范围的操作
    
-   合约升级/模块安装/权限变更
    
-   大额资产转移（应设置单笔限额）
    
-   添加或移除恢复人
    

### **多签**

**适用场景**：

-   DAO/团队资金管理（如 Safe 2-of-3 管理国库）
    
-   高价值资产保管（分散风险到多人）
    
-   审计/审批流程（关键操作需多人确认才能执行）
    

**风险点**：

-   M 值过低（如 5-of-8 中设 M=2）→ 两方串通即可转移资产
    
-   社会工程攻击 — 攻击者逐个欺骗签名者
    
-   操作时效差 — 紧急情况需快速响应时，等待多人签名可能错过窗口
    
-   替换签名者流程缓慢 → 如果某个签名者私钥泄露，替换期间存在窗口风险
    

**必须人工确认的操作**：

-   所有交易 — 这是多签的设计初衷，每笔都需 M 人确认
    
-   添加/替换签名者
    
-   修改 M 阈值
    

* * *

## **4\. 从 AI × Web3 视角看权限设计**

三类账户对应三种"AI Agent 能做什么"的模型：

**EOA 模式**：Agent 只能建议，用户每步签名

-   安全但效率极低 — Agent 形同虚设，每步都打断用户
    
-   用户签名疲劳 → 反而可能不看就签
    

**多签模式**：Agent 作为签名者之一

-   Agent 有固定投票权，但仍受制于其他人
    
-   适合 DAO 治理/团队决策场景，不适合个人 Agent 自动执行
    

**智能账户 + Session Key 模式**：Agent 在受限范围内自动执行

-   核心：让 Agent 的自由被规则包起来
    
-   Session Key 可限制：合约地址、方法、额度、过期时间、链 ID、最大交易次数
    
-   低风险自动执行 + 高风险回退人工确认 → **这是 AI × Web3 最合理的权限架构**
    

> 正如 Account Abstraction 章节所述："账户抽象不是让 AI 更自由，而是让 AI 的自由被规则包起来。"

* * *

## **5\. 实践思考：如果设计一个 Agent Session Key 策略**

假设场景：AI Agent 帮用户在测试网做每日小额资产再平衡

**策略设计**：

-   允许合约：仅 Uniswap Router 地址
    
-   允许方法：`swapExactTokensForTokens`、`swapExactETHForTokens`
    
-   额度：单笔 ≤ 0.01 ETH，每日累计 ≤ 0.05 ETH
    
-   有效期：24 小时，最多 3 次交易
    
-   链 ID：Sepolia 测试网（chainId: 11155111）
    
-   超出以上任一条件的操作 → 必须回到用户钱包确认
    

**撤销与审计**：

-   Session Key 过期自动失效，也可由用户主动撤销
    
-   所有通过 Session Key 执行的操作记录在链上 event log 中，可审计
    

* * *

## **6\. 踩坑 / 失败案例记录**

1.  **EOA 签名钓鱼误操作**：曾在测试网交互时不小心签名了一个无限 approve，虽然测试网无真实损失，但意识到 EOA 的"全有或全无"权限模型在真实场景中极其危险。智能账户的 Session Key 限额设计能直接避免这个问题。
    
2.  **多签操作时效问题**：在 DAO 治理参与中遇到过，一个紧急提案需要 3-of-5 签名，但其中 2 人时区不同且未及时响应，导致提案错过执行窗口。多签的安全性以牺牲时效性为代价。
    
3.  **智能账户的 Bundler 依赖**：在测试 ERC-4337 流程时，Bundler 偶尔会拒绝打包看似合法的 UserOperation（模拟验证不通过），原因可能是 nonce 冲突或 gas 估算偏差。这提醒我们：智能账户的"自动执行"并不等于"一定成功"，基础设施稳定性是隐性风险。
    

* * *

## **7\. 总结**

|   | EOA | 智能账户 | 多签 |
| --- | --- | --- | --- |
| 一句话 | 私钥即王，简单但脆弱 | 权限可编程，灵活但依赖基础设施 | 人多安全，但慢 |
| AI Agent 契合度 | ❌ 无自动化空间 | ✅ Session Key 天然适配 | ⚠️ 可参与投票，但非自动执行最优解 |
| 安全边界 | 单点故障 | 规则围栏（前提：规则写对） | 分散风险（前提：M 值合理） |

**核心洞察**：三类账户不是递进关系（EOA → 多签 → 智能账户），而是针对不同信任模型的工具。EOA 适合"只信任自己"，多签适合"信任集体决策"，智能账户适合"信任可编程规则"。在 AI × Web3 场景中，智能账户 + Session Key 是最自然的匹配 — 因为 Agent 的行为本质上就是可编程的，用可编程规则约束可编程行为，比用人工签名约束 Agent 更合理。
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->












# **📖 学习笔记 2026-05-30**

> 今日目标：完成所有未读章节，打通 AI 基础 + Web3 基础 + Bridge + 前沿探索的完整阅读闭环

* * *

## **一、AI 基础补充章节**

### **1\. Vibe Coding（氛围编程）**

**核心观点**：Vibe Coding ≠ "把需求丢给 AI 然后等代码出现"。它是人和 AI Coding Agent 共同迭代软件的工作方式——人负责方向、约束和验收，Agent 负责生成、修改、搜索和执行工程动作。

**第一性原理**：AI Coding 的核心不是自动生成代码，而是把工程反馈循环压短。

-   任务要小：越具体、越有边界，Agent 越容易产出可审查结果
    
-   上下文要准：让 Agent 看对文件、设计约束和错误输出，比写长篇需求更重要
    
-   验证要硬：运行测试、类型检查、构建、截图或日志，比"看起来对"可靠
    

**适合场景**：搭原型、修小 bug、补测试、写脚本、重构局部模块、解释陌生代码 **不适合**：无边界地"重写整个项目"

**Claude Code / Codex CLI**：把 AI Agent 放进本地开发环境的关键问题——哪些文件可以改、哪些命令可以跑、是否允许安装依赖/访问网络、什么时候必须停下来让人确认。

> 💡 **踩坑对照**：我自己用 Hermes Agent 的体验完全验证了"任务要小"——给 Agent 一个模糊目标，它会改到不该改的地方；给一个精确 patch 目标，反而又快又准。

* * *

### **2\. Evaluation（评估）**

**核心观点**：Evaluation 把"感觉效果不错"变成"系统可持续改进"的方法。没有 eval，prompt、模型、RAG、Agent 和工具调用的变化都只能靠主观试用判断。

**第一性原理**：不能被重复测量的 AI 行为，就不能被稳定改进。

关键概念：

-   **Harness**：运行 eval 的框架，负责喂样本、调用系统、收集输出、运行 grader、记录结果
    
-   **Golden Set**：被认真挑选和标注的测试样本（30-100 条高质量样本比随便收集更有用），要覆盖常见正常问题、边界问题、容易误判的问题、高风险问题、历史 bug
    
-   **LLM-as-Judge**：用模型给模型输出评分，但不能被神化——对可自动判断的字段用规则评分，对开放式质量用 LLM judge，对高风险样本保留人工抽检
    
-   **Regression**：防止"修 A 坏 B"——每次改动都重新跑历史问题
    
-   **Observability**：线上观察系统行为的能力，记录输入、检索结果、工具调用、模型输出、错误、用户反馈、成本和延迟
    

**AI x Web3 特殊要求**：错误可能影响资产、权限、治理判断和链上执行。需要特别评估：交易解释准确性、风险提示漏报、工具调用参数越界、能否拒绝不确定请求、能否识别 Prompt Injection、引用来源可追溯性。

> 💡 **实践启发**：30 条样本的最小 eval 设计非常实用——10 正常 + 10 边界 + 5 历史 bug + 5 恶意注入，每次改 prompt/模型/检索策略前后跑一遍。

* * *

### **3\. Fine-tuning（微调）**

**核心观点**：Fine-tuning 不是"模型效果不好就训练一下"。它适合让模型更稳定地学习某种格式、风格、领域任务，但不适合补实时知识、修权限边界或替代评估。

**决策优先级**（遇到模型效果不好，先问）：

1.  是 prompt 不清楚吗？
    
2.  是上下文缺了吗？
    
3.  是检索没拿到正确资料吗？
    
4.  是输出格式没有 schema 吗？
    
5.  是模型本身能力不够吗？
    
6.  是否已经有 eval 证明问题稳定存在？
    

关键概念：

-   **SFT**：监督微调，用输入+期望输出样本让模型学习回答方式，对数据质量非常敏感
    
-   **LoRA**：低秩适配，不更新全部参数，训练较小适配参数，降低训练成本
    
-   **PEFT**：参数高效微调统称，适合大模型、任务范围明确、数据量中等的场景
    
-   **Overfitting**：训练数据记得太死导致新样本表现变差——样本太少/风格单一/训练轮数太多
    

**AI x Web3**：fine-tuning 可用于交易解释风格、治理摘要格式、风险标签输出，但不可替代链上实时状态查询、合约安全审计、交易模拟、钱包权限控制。

> 💡 **最小实践**：先做"结构化摘要格式"的微调前评估——比较只改 prompt vs prompt+few-shot vs 小规模 fine-tuning，用同一套 eval 检查字段完整性、来源虚构、风险遗漏和输出稳定性。

* * *

### **4\. Inference（推理服务）**

**核心观点**：推理决定模型在真实产品里如何响应用户。不是云服务按钮，而是延迟、成本、上下文、稳定性和部署边界的综合选择。

**第一性原理**：推理服务的核心不是"跑出答案"，而是在约束条件下交付可用答案。

-   质量有代价：更强模型 = 更高成本/更长延迟/更复杂部署
    
-   部署改变边界：API model 少管基础设施，本地模型多拿控制权
    
-   服务要可替换：把模型调用封装清楚，才能做 fallback、灰度和评估
    

**API Model**：托管模型 API 的调用方式、参数、限制和成本结构。Agent 场景一次用户请求可能触发多轮模型调用，成本和延迟被放大。

* * *

## **二、Web3 基础补充章节**

### **5\. Cryptography（密码学）**

**核心观点**：Web3 里"账户""签名""地址""所有权"都建立在密码学之上。理解密码学基础，是为了知道什么时候不能"点确认"。

**第一性原理**：链上身份不是由平台发给你的，而是由你能否证明自己控制某个私钥决定的。

-   **私钥是控制权**：丢失 = 失去控制权，泄漏 = 别人获得控制权
    
-   **签名是授权证据**：签名内容必须能被人读懂，不能只展示一串难懂数据
    
-   **哈希是承诺**：哈希不能还原原文，但可以验证数据有没有被改过
    

关键概念：

-   **Hash**：固定长度指纹，验证同一性和完整性。不是加密。常见用途：交易哈希、区块哈希、合约字节码哈希、数据承诺
    
-   **Public Key**：和私钥成对，可验证签名但不能反推私钥。地址是从公钥进一步处理的短标识
    
-   **Private Key**：账户控制权本身。基本规则：不截图、不上传云盘、不粘贴给网页、不发 AI 工具、不放进代码仓库、不用主钱包测试陌生 dApp
    

> 💡 **踩坑记忆**：私钥管理规则看似朴素但极其重要——每一个"不要"背后都有真实的安全事故。

* * *

### **6\. Dev Stack（开发栈）**

**核心观点**：Web3 开发栈是一条从写合约、测合约、部署合约、连接钱包、调用合约到监控结果的工程链路。工具选型目标是让链上开发更可验证、更可复现、更少事故。

**最小开发链路六步**：

1.  在本地或浏览器 IDE 写出合约
    
2.  编译合约，得到 bytecode 和 ABI
    
3.  在本地链或测试网部署合约
    
4.  写测试覆盖核心状态变化和权限边界
    
5.  前端用合约地址和 ABI 读取或发送交易
    
6.  在区块浏览器验证源码、交易和事件
    

**第一性原理**：Web3 工具链的核心是把不可逆执行前移到可测试、可模拟、可审查的流程里。

-   **Remix**：浏览器里的 Solidity IDE，适合快速理解、部署小合约。但真实项目需要 Git + 测试框架 + 部署脚本 + CI
    

> 💡 **实践要点**：前端拿错 ABI → 参数编码错误；部署地址没有版本记录 → 不知道在和哪份合约交互；测试只覆盖 happy path → 权限和失败分支漏掉。缺一环后面都变成排查成本。

* * *

### **7\. Network（网络）**

**核心观点**：Web3 的"网络"是交易能否被打包、状态能否被同步、费用如何产生、确认需要多久、L2 和主网如何分工的基础环境。

**第一性原理**：区块链网络的核心不是"存数据"，而是让互不信任的参与者对状态变化达成一致。

-   区块是同步节奏：状态不是每毫秒连续更新，而是按区块批量推进
    
-   共识是信任来源：用户相信状态因为网络按规则达成一致
    
-   网络选择会改变体验：主网、测试网、L2 的费用、速度、安全假设和工具支持都不同
    

**Block**：交易被批量提交和排序的单位。关键理解：交易有顺序且顺序会影响结果、区块有 gas limit、新区块引用前一区块形成可验证历史。

* * *

### **8\. Account Abstraction（账户抽象）**

**核心观点**：把"账户如何验证操作、谁来付 gas、哪些权限可以自动执行"从固定的 EOA 模式里释放出来，让钱包更像可编程账户系统。

**核心不是"免 gas"，而是把账户控制权从单一私钥扩展成可编程规则。**

**第一性原理**：当账户本身可以编程，权限就可以从"有私钥/没私钥"变成"在什么条件下允许什么动作"。

对 AI x Web3 特别重要：Agent 不应该拿用户主私钥，也不应该拥有无限交易权限。更合理的方式是给 Agent 一个可限制、可过期、可撤销、可审计的行动空间。

**ERC-4337**：用户创建 UserOperation → Bundler 打包 → EntryPoint 调用智能账户验证和执行 → Paymaster 可选择赞助 gas。

> 💡 **交叉对照**：Account Abstraction 和 Agent 权限设计天然契合——session key 可以只允许特定合约、额度、时间和方法，这就是给 Agent 的最小权限沙箱。

* * *

### **9\. DeFi（去中心化金融）**

**核心观点**：DeFi 的核心不是"去掉中介"，而是把金融规则变成可组合、可验证、也可被攻击的链上协议。

**第一性原理**：DeFi 协议管理的是资产状态，不只是应用界面。

-   资产是协议输入：token 标准、decimals、授权和余额都会影响协议行为
    
-   流动性决定可执行性：有价格 ≠ 能成交，能成交 ≠ 低成本成交
    
-   可组合性放大风险：一个协议出问题可能影响依赖它的多个协议
    

**Token**：ERC-20 最常见。检查：合约地址、decimals、总供应量和发行权限、是否可暂停/冻结/增发/升级、是否有转账税或黑名单。

**AMM**：用流动性池和定价公式替代订单簿。关键概念：滑点、流动性提供者（无常损失）、价格影响、MEV 风险（sandwich attack）。

* * *

### **10\. Oracle（预言机）**

**核心观点**：区块链自己不能天然知道链外世界发生了什么。Oracle 是链上系统和外部世界之间的桥。桥带来能力，也带来风险。

**第一性原理**：合约只能按链上可见的数据执行，所以外部数据一旦进入链上，就会变成协议规则的一部分。

-   数据源是信任边界
    
-   延迟会变成风险：价格变化快时旧数据可能导致错误清算
    
-   异常要有保护：合约应该处理 stale price、极端跳变和 feed 暂停
    

**Price Feed**：读取价格至少要检查——feed 对应哪个资产对、decimals、更新时间是否过旧、返回值是否异常、feed 地址是否正确。

* * *

### **11\. Indexing（索引）**

**核心观点**：链上数据是公开的但不等于好用。Indexing 把区块、交易、事件和合约状态整理成产品、分析工具和 AI Agent 能快速查询的结构化数据。

**第一性原理**：产品需要的是面向问题的数据模型，而不是原始区块流。

-   事件是重要入口：合约 event 是索引器构建状态的主要信号
    
-   RPC 不是数据库：RPC 适合读取链状态和发送交易，不适合复杂历史查询
    
-   索引要能重放：合约升级、reorg、bug 修复时需要从某个区块重新构建数据
    

**Event Indexing**：设计 event 时要考虑后续查询——是否包含关键地址、是否需要 indexed 参数、是否能从 event 还原业务状态、失败交易不会产生成功 event。

* * *

### **12\. Security（安全）**

**核心观点**：Web3 安全不是上线前找人审一次代码，而是从合约设计、权限、测试、交易模拟、监控、应急暂停到权限撤销的一整套工程流程。

**第一性原理**：链上系统默认暴露在公开对抗环境里，任何可调用路径都要按攻击面看待。

-   权限必须最小化
    
-   执行前要模拟
    
-   上线后要监控
    

**Reentrancy**：合约在外部调用未完成前被再次调用。防护：Checks-Effects-Interactions 模式、reentrancy guard、避免在状态未更新前调用不可信合约。

* * *

## **三、AI × Web3 Bridge 补充章节**

### **13\. Agent Identity（智能体身份）**

**核心观点**：Agent Identity 不是给 Agent 起个名字，而是让用户、服务和其他 Agent 能验证：它是谁、谁控制它、能提供什么能力、服务入口在哪里、历史记录能不能追溯。

**第一性原理**：Agent 身份必须绑定控制权、能力声明和服务入口，而不只是一个显示名称。

-   身份要可解析：别人能从 identifier 找到 profile 和 endpoint
    
-   控制权要可证明：更新 profile 或接收付款的人要能证明自己是 owner
    
-   能力要可验证：能力声明需要测试、证明、评价或历史记录支撑
    

关键概念：

-   **Agent Profile**：公开说明文件，应同时给人和机器看，包含更新历史
    
-   **Capability**：越具体越有用——输入类型、输出格式、是否需要钱包权限、风险等级
    
-   **Service Endpoint**：外部系统调用 Agent 的入口（HTTPS API、A2A、MCP server 等）
    
-   **Registry**：链上 registry 提供公开可查的身份锚点；链下更灵活但更中心化
    
-   **DID / VC**：去中心化身份和可验证声明模型，跨平台身份，VC 承载能力证明、组织隶属、审计通过
    

> 💡 **与 ERC-8004 的关系**：ERC-8004 提供 Agent 身份、声誉和验证 registry 的标准草案，没有试图把"信任"做成单一中心化评分，而是提供信号公共承载层。

* * *

### **14\. Agent Trust & Reputation（智能体信任与声誉）**

**核心观点**：信任不是一个分数，而是一组可追溯、可比较、可解释的证据。

**第一性原理**：Agent 的可信度应该来自可验证行为，而不是自我声明。

-   声誉要绑定身份：没有稳定身份，历史记录无法积累
    
-   评价要绑定任务：泛泛五星评价不如具体任务结果
    
-   惩罚要真实：没有成本的承诺很容易被滥用
    

关键概念：

-   **Reputation**：按任务类型拆开，处理时间衰减（两年前的好表现不代表今天）
    
-   **Review**：绑定任务 ID、交付物、付款记录和评价者身份，防止互刷
    
-   **Attestation**：可验证声明，应结构化——issuer、subject、claim、evidence、expiration、revocation
    
-   **Stake**：经济保证，让承诺有成本；但资本多 ≠ 能力强
    
-   **Slashing**：罚没抵押，必须先定义违约证据、挑战窗口、仲裁者、误罚处理
    
-   **Validation**：区分"能力验证"和"任务结果验证"
    

* * *

### **15\. Settlement & Escrow（结算与托管）**

**核心观点**：结算的核心不是"把钱打过去"，而是把任务、交付、验收和付款绑定成可验证流程。

**第一性原理**：自动化交易必须有明确完成条件，否则支付就无法安全自动化。

-   资金状态要清楚：pending → locked → released / refunded / disputed
    
-   交付证明要可保存
    
-   争议流程要提前设计
    

关键概念：

-   **Escrow**：状态机设计——Created、Funded、Delivered、Accepted、Refunded、Disputed、Released。好的 escrow 先定义业务流程，再定义资金流
    
-   **Receipt**：记录谁付给谁、金额、币种、任务 ID、时间、交易哈希、验收状态
    
-   **Delivery Proof**：文件 hash / API 返回日志 / 模型输出签名 / 链上 event / TEE attestation
    
-   **Acceptance**：尽量拆成可检查条件，高价值用"AI 初审 + challenge window + 人工复核"
    
-   **Dispute**：争议流程可预期、可记录、可执行
    
-   **Evaluator**：判断交付是否合格——脚本检查格式、测试检查功能、AI 检查语义、人类处理争议
    
-   **ERC-8183**：Agentic Commerce 草案标准，围绕任务生命周期的状态转换
    

> 💡 **与 ERC-8004 互补**：ERC-8004 偏身份/声誉/验证，ERC-8183 偏任务/支付/托管/交付。完整 agent commerce 系统需要两者思路。

* * *

### **16\. Verifiable AI（可验证 AI）**

**核心观点**：Verifiable AI 的核心，是让"相信模型"变成"验证证据和约束"。

**第一性原理**：验证成本必须和输出影响力匹配。给用户总结新闻不需要 ZK proof；释放 escrow 或罚没 stake 不能只靠一句模型输出。

关键概念（按成本/强度递进）：

-   **Audit Trail**（最基础）：记录输入、输出、模型版本、工具调用、时间、用户确认。即使没有 TEE 或 ZK，完整审计轨迹也能支持复盘和争议
    
-   **TEE**：可信执行环境，隐私+较低证明成本，但依赖硬件和供应链信任
    
-   **ZK**：密码学验证最强，但生成证明成本高、工程复杂。适合边界清楚、规模可控的任务
    
-   **zkML**：ML 推理转可证明计算，大型 LLM 完整 zk proof 仍然昂贵，实际常用混合方案
    
-   **Proof of Inference**：证明对象要明确——证明输入没变？证明模型版本？证明运行环境？证明输出未篡改？这些不是同一件事
    
-   **Verifiable Compute**：链下执行、链上验证，是很多 AI x Web3 系统的现实路径
    
-   **Benchmark**：不能替代任务级验证，项目应建立自己的 benchmark（含正常+边界+攻击样本）
    

> 💡 **成熟系统通常是混合使用**：日志用于日常复盘，attestation 用于服务证明，ZK/TEE 用于高风险场景，challenge 用于处理争议。

* * *

### **17\. AI Oracle（AI 预言机）**

**核心观点**：AI Oracle 的核心不是让模型替合约做判断，而是让模型判断变成可记录、可验证、可挑战的输入。

**第一性原理**：当 AI 输出会影响链上资产或权限时，输出本身必须有来源、边界和争议机制。

-   输入要可追溯：模型看到了什么，不能只留最终答案
    
-   结果要结构化：链上不适合消费长篇自然语言，需要明确字段
    
-   争议要提前设计：谁能挑战，挑战期多久，如何复核
    

关键概念：

-   **AI Output**：链上最好只消费结构化输出（`accepted: true`、`riskScore: 72`），长文本链下存储用 hash 关联
    
-   **Data Feed**：AI data feed 比价格 feed 更容易漂移（模型升级、训练数据变化、prompt 调整都会让评分变化）
    
-   **Oracle Risk**：按影响范围分层——低风险直接展示，中风险人工复核，高风险需要 challenge/multi-evaluator
    
-   **Attestation**：证明"谁在什么条件下给出了这个结果"
    
-   **Dispute / Challenge**：optimistic 模式——先接受结果，给出挑战窗口。按金额和风险分层设置窗口和成本
    

> 💡 **与 Oracle 章节的交叉**：普通预言机喂价格，AI 预言机喂判断。判断比价格更容易出错也更难验证，所以争议机制是必须的。

* * *

### **18\. AI Privacy（AI 隐私）**

**核心观点**：AI x Web3 的隐私问题不是单点数据泄漏，而是链上公开身份和 AI 私有上下文被拼接。

**第一性原理**：模型只应该看到完成任务所需的最小数据。上下文越多，泄漏面越大，误用风险越高。

关键概念：

-   **Data Boundary**：定义数据在设备、后端、模型服务、链上和第三方工具间如何流动，画数据流图比写隐私政策更有用
    
-   **Local AI**：先在本地做筛选和脱敏，再把必要摘要发给强模型
    
-   **Private Memory**：默认最小化、可查看、可删除。"为了更智能而永久保存一切"是常见风险
    
-   **Secret Management**：私钥/API key/session token 不应进入 prompt、模型输出、普通日志。Agent 通过受控工具使用 secret，不让模型直接读取
    
-   **Minimal Disclosure**：证明"余额足够"不一定要暴露全部持仓；总结风险不一定要上传完整钱包历史
    
-   **Encrypted Data**：加密保护存储和传输，但数据进入模型推理时通常需解密。如果每次推理都由服务器解密并发送，它解决的是存储安全不是模型使用隐私
    
-   **User Consent**：同意连接钱包 ≠ 同意分析全部历史；同意使用 Agent ≠ 同意把数据发给所有第三方模型
    

> 💡 **实践要点**：画一张 Agent 数据流图——列出每项数据存在哪里、哪些发给第三方、哪些可脱敏/hash/聚合/本地处理、用户如何查看/撤销/删除。

* * *

### **19\. AI Sovereignty（AI 主权）**

**核心观点**：AI 主权的核心，是让用户保留退出、迁移、选择和验证的能力。

**第一性原理**：越靠近用户决策和资产的 AI，越不能只依赖平台承诺。

-   控制权要在用户侧可见
    
-   选择权要真实存在
    
-   可验证性要保底
    

关键概念：

-   **User Control**：控制面板至少要显示——连接的钱包、session key、授权额度、启用的工具、记忆开关、数据导出入口和紧急停止按钮
    
-   **Data Portability**：不能导出的记忆就是锁定。分层导出——任务历史、偏好、工具日志、身份凭证、私有记忆分别导出
    
-   **Model Choice**：系统允许策略化选择——隐私优先、成本优先、质量优先、开源优先
    
-   **Local-first AI**：混合架构——本地模型做过滤/脱敏/风险初筛，云端强模型只接收必要摘要
    
-   **Censorship Resistance**：开源客户端、多模型 fallback、可自托管 endpoint、可迁移身份、去中心化存储
    
-   **d/acc**（defensive accelerationism）：不要只追求更强自动化，也要建设权限隔离、隐私保护、开源工具、可验证执行
    
-   **CROPS**：Censorship resistance、Open source、Privacy、Security——AI 进入钱包/治理/身份/支付层时不能牺牲这些
    

> 💡 **Vitalik 的观点串联**：d/acc、CROPS、钱包未来文章——AI x Web3 不应该只做"更强的自动代理"，还要做"更好的防御工具"。

* * *

### **20\. Governance AI（治理 AI）**

**核心观点**：Governance AI 的核心是提高公共决策的信息质量，而不是替代人的政治判断。

**第一性原理**：治理里的 AI 输出必须保留来源和不确定性。

-   来源可追溯：每个关键摘要都要能回到提案、论坛、会议或链上记录
    
-   立场要分开：事实、推断、观点和建议不能混在一起
    
-   人保留决策权
    

关键概念：

-   **Proposal Summary**：固定结构（目标、背景、预算、执行主体、时间线、影响范围、支持/反对理由、未决问题），标注不确定性
    
-   **Meeting Action**：从讨论中提取承诺——"我们应该研究一下"不是 action，"Alice 在下周五前整理三种支付方案"才是
    
-   **Contribution Graph**：帮助发现"隐形贡献"——长期 review、协调会议、维护文档、回答新人问题
    
-   **Budget Check**：让社区看清问题——deliverables 是否绑定付款节奏，历史拨款是否完成
    
-   **Source Traceability**：没有来源的治理摘要不应该用于投票依据
    
-   **Deep Funding**：影响不是线性的——底层库被间接使用、协调者让多个团队成功、文档降低新人门槛
    
-   **Plurality**：AI 摘要不要只给"主流意见"，还要展示少数派担忧、利益相关者差异和可协商空间
    

* * *

### **21\. Decentralized AI（去中心化 AI）**

**核心观点**：去中心化 AI 不是"把模型放到链上"，而是重新设计 AI 系统里数据、模型、算力、推理、评测和收益分配的组织方式。

**第一性原理**：AI 系统真正需要去中心化的，不一定是模型本身，而是关键资源和关键决策的控制权。

-   先分层再判断价值：数据、模型、算力、推理、评测、结算、治理不能混成一个词
    
-   开放性需要工程代价：分布式网络会引入延迟、质量波动、女巫攻击、节点作恶
    
-   链上更适合做协调层：记录权属、激励贡献、结算任务，比直接承载大规模模型训练更现实
    

关键概念：

-   **Model Market**：真正有用的模型市场要解决发现、评测、路由和结算
    
-   **Data Market**：链上记录更适合保存授权、哈希、版本、贡献和收益分配，不是直接保存原始数据
    
-   **Compute Market**：更适合容器化推理、批处理、可重复验证任务。高价值交易/隐私数据需 TEE/ZK/人工审计
    
-   **Inference Network**：请求发给了哪个模型和节点、版本是否可追踪、隐私数据是否暴露给不可信节点
    
-   **Model Routing**：按任务类型、风险等级、数据敏感度、成本预算、延迟要求、评测反馈做策略化选择
    
-   **Quality Benchmark**：不只看固定数据集分数，还要看结果稳定性、节点执行一致性、延迟/失败率
    
-   **Settlement**：AI 任务结算比普通 API 更复杂——结果质量不是二元的，需要状态机（报价、执行、验证、付款/退款/争议）
    

> 💡 **判断去中心化 AI 项目的四个问题**：去中心化的是哪一层？链上负责什么？具体改善了什么？开放网络带来的质量波动和治理成本是否值得？

* * *

## **四、前沿探索：Open Track（开放赛道）**

### **22\. Open Track**

**核心观点**：开放赛道不是"什么都可以做"。它适合那些无法被单一方向完全覆盖，但确实能把 AI 和 Web3 结合出新工作流、新协议或新体验的项目。

**两个必答题**：

1.  AI 具体承担了什么不可替代的工作？
    
2.  Web3 具体提供了什么不可替代的能力？
    

答不清就变成"AI 包装一个 Web3 概念"或"Web3 包装一个普通 AI 工具"。

**第一性原理**：开放赛道的核心不是追热点，而是发现新的用户工作流。

-   先找工作流：用户现在如何完成任务，哪里慢、贵、难、不透明或不可验证
    
-   再拆 AI 和 Web3 的职责：AI 负责理解、生成、规划、推荐；Web3 负责资产、身份、权限、记录、激励或治理
    
-   最后做最小闭环：输入、处理、输出、权限、失败路径都要讲清楚
    

**AI-native Wallet**：不是在钱包里加一个聊天框，而是让钱包理解用户目标、解释交易、管理权限、提醒风险。关键安全边界：AI 可以解释和建议，但签名、授权和高风险操作必须交给明确的钱包权限系统。

* * *

## **五、交叉洞察总结**

### **洞察 1：Agent 经济的完整闭环正在成型**

从 Agent Identity → Agent Trust → Settlement & Escrow → Machine Payment，一条 Agent 经济的基础设施链已经清晰：

-   身份让 Agent 可发现、可验证
    
-   声誉让 Agent 可信赖、可追责
    
-   托管让交易可安全执行
    
-   支付让 Agent 可以自主结算
    

**但每一步都有陷阱**：身份可以被伪造、声誉可以被刷、escrow 可以被争议卡住、支付可以被滥用。没有哪一层可以单独保证安全。

### **洞察 2：可验证性是 AI × Web3 的分水岭**

普通 AI 产品"说错了重来"就行。但链上场景里：

-   AI Oracle → 判断进入可执行合约 → 错误输出直接影响资产
    
-   Governance AI → 摘要影响投票 → 隐藏反对意见 = 操纵治理
    
-   Verifiable AI → 按**风险分层**选验证强度
    

验证成本必须和影响力匹配。不是所有场景都需要 ZK proof，但涉及资金释放/罚没/权限变更时必须有 challenge 期和人工复核。

### **洞察 3：隐私 ≠ 不共享，而是最小化 + 可控制**

AI Privacy 和 AI Sovereignty 的交集在于：

-   隐私设计 = 只暴露完成任务所需的最少信息
    
-   主权设计 = 用户能查看、撤销、迁移、退出
    

两者的共同敌人是"为了更智能而把所有数据塞进上下文"。

### **洞察 4：d/acc 思维——更强也要更安全**

Vitalik 的 d/acc 思路提醒：AI × Web3 不应该只追求"更强的自动代理"，还要做"更好的防御工具"。CROPS（Censorship resistance、Open source、Privacy、Security）是检查产品是否偏离底线的框架。

* * *

## **六、今日学习反思**

**收获**：完成了全部 handbook 阅读闭环，从 AI 基础到 Web3 基础到 Bridge 到前沿探索，所有章节一气读完。最大的收获是看到了 Agent 经济的完整设计思路——不是单点技术，而是一组相互依赖的基础设施（身份→声誉→托管→支付→验证→隐私→主权→治理）。

**踩坑/疑问**：

1.  很多 Bridge 章节提到的 ERC 标准（ERC-8004、ERC-8183）都还是草案阶段，实际落地可能和规范有差异
    
2.  去中心化 AI 的"链上更适合做协调层而非执行层"这个判断很务实，但实际项目很容易为了叙事把不该上链的东西也推上链
    
3.  AI Privacy 的数据流图实践——理论很清晰，但 Agent 生态目前还没有标准化的数据边界协议
    

**下一步**：

-   完成 Week 1 实践交付（测试网转账、合约部署/调用）
    
-   选定 Hackathon 方向，开始写 Proposal
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->













## **📖 Governance — 治理**

> 来源：[https://aiweb3.school/zh/handbook/tracks/governance/](https://aiweb3.school/zh/handbook/tracks/governance/)

### **核心定位**

治理类 Agent 的重点**不是替人投票，而是让人更清楚地理解、讨论和执行公共决策**。

AI 可以降低治理参与的信息成本，但也可能把复杂争议压扁成看似客观的摘要。治理的核心是权力、资源和责任分配——AI 可以帮助参与者看清信息，但不能把政治问题伪装成技术问题。

### **第一性原理**

**治理 Agent 不能替代公共判断，它只能降低理解和协作成本。**

三条底线：

1.  **摘要必须可追溯** — 每个关键判断都应能回到原文、会议或链上记录
    
2.  **不同立场要被保留** — 治理不是消除分歧，而是让分歧更清楚
    
3.  **执行要可核对** — 提案通过后，预算、任务、负责人和链上执行都要能追踪
    

### **知识节点**

**1\. Proposal Summarizer — 提案摘要**

治理场景最常见的 AI 应用：把长提案拆成背景、目标、预算、执行步骤、风险、支持/反对理由。

好摘要应帮助读者快速判断：

-   这个提案要改变什么
    
-   涉及多少资金或权限
    
-   谁受益、谁承担风险
    
-   执行路径是否清楚
    
-   争议点在哪
    
-   需要进一步阅读哪些原文
    

> **核心质量标准：来源保真，而不是文风流畅。**

**2\. Meeting-to-Action Workflow — 会议到行动**

治理失败常见原因：不是没有讨论，而是讨论没有变成行动。

治理会议 Agent 应输出：

-   本次会议做出的决定
    
-   没有达成共识的问题
    
-   每个 action item 的负责人
    
-   需要提交到论坛/投票/多签的事项
    
-   下次会议前需要准备的材料
    

⚠️ 常见错误：把"有人提到"误写成"已经决定"。Agent 必须区分**讨论、建议、决定、执行**四种状态。

**3\. Contribution Tracker — 贡献追踪**

不是简单排名。真实贡献有很多类型：

-   代码提交、审计、文档、翻译
    
-   社区组织、活动、支持和教育
    
-   协议研究、数据分析、风险提示
    
-   公共物品建设和长期维护
    

> AI 可以聚合证据，但不能只凭活跃度判断贡献价值。发言多 ≠ 贡献大，低频但关键的安全修复可能价值更高。

**4\. Budget Checklist — 预算审查**

治理预算最容易出问题的地方：提案愿景很美，但钱如何花、谁负责、如何验收不清楚。

Budget Checklist 帮助检查：

-   预算总额和付款资产
    
-   分阶段付款条件
    
-   交付物和验收方式
    
-   负责人、收款地址和利益冲突
    
-   失败/延期处理方案
    
-   可比较的历史预算
    
-   是否需要多签/streaming payment/milestone escrow
    

> AI 可以先做预算审查，但高金额预算必须交给人和治理流程判断。

**5\. Public-goods Impact Dashboard — 公共物品影响仪表盘**

Impact 很难衡量——下载量、star、交易数都只是部分信号。

Dashboard 应把多维度证据放在一起：

-   项目产出（代码、文档、工具、研究）
    
-   使用情况（真实用户、集成方、链上交互）
    
-   生态影响（是否降低开发成本、提升安全、带来新增开发者）
    
-   维护情况（持续更新、响应 issue）
    
-   资金使用（资助是否对应明确交付）
    

> 价值不是替 badgeholder 做决定，而是减少他们收集信息的时间。

**6\. Source-preserving Summary — 来源保真摘要**

治理 AI 的底线能力。实用格式：

-   **结论**：一句话说明要点
    
-   **证据**：列出原文段落、会议时间戳、链上交易或论坛链接
    
-   **不确定性**：说明哪些是推断，哪些缺少证据
    
-   **反方观点**：保留主要异议
    
-   **建议阅读**：指出必须读原文的部分
    

> 没有来源的摘要只是模型观点；有来源但误导读者的，比没有摘要更危险。

### **在 AI × Web3 中的位置**

治理是最适合先做"辅助型 Agent"的方向之一——不需要一开始就控制资产，却能马上降低信息成本。

稳进的产品路径：

1.  先做**提案摘要 + 来源追踪**
    
2.  再做**会议到任务 workflow**
    
3.  再做**预算、贡献、影响 dashboard**
    
4.  最后才考虑**投票建议或执行自动化**
    

### **最小实践**

选一个真实 DAO/协议提案，做一份来源保真的治理摘要：

-   提案想解决的问题
    
-   预算、权限或协议参数变化
    
-   支持理由和反对理由
    
-   至少 5 个关键事实的来源链接
    
-   需要人工判断的争议点
    
-   如果通过，后续有哪些执行动作
    

### **扩展阅读**

-   [Snapshot Docs](https://docs.snapshot.box/) — 链下投票和治理提案基础设施
    
-   [Tally Docs](https://docs.tally.xyz/) — 链上治理、委托和提案执行工具
    
-   [Optimism Retro Funding](https://community.optimism.io/citizens-house/how-retro-funding-works) — 公共物品影响评估和追溯资助
    
-   [Gitcoin Docs](https://docs.gitcoin.co/) — grants、公共物品资助和社区评审
    
-   [Vitalik: d/acc: one year later](https://vitalik.eth.limo/general/2025/01/05/dacc2.html) — 防御性、民主化和差异化加速
    

* * *

## **🧠 个人思考**

### **治理 Agent 的"可信度悖论"**

治理场景存在一个悖论：AI 摘要越精炼，阅读成本越低，但**被误导的风险反而越大**。因为读者倾向于信任"看起来完整"的摘要而不再去看原文。Source-preserving Summary 是唯一解——不是让摘要更漂亮，而是让它更"丑"（保留链接、保留争议、保留不确定性标记）。

### **与之前章节的交叉对照**

| 概念 | 关联 |
| --- | --- |
| Context (AI基础) | 治理 Agent 的上下文 = 提案全文 + 论坛讨论 + 链上记录 + 历史投票，超长上下文管理是核心挑战 |
| Agent Workflow (Bridge) | Meeting-to-Action 就是典型的多步 workflow：记录→提取决定→分配任务→追踪执行 |
| AI Security | 治理 Agent 的 prompt injection 风险极高——恶意提案可能包含操纵摘要的隐藏指令 |
| Machine Payment (Bridge) | Budget Checklist 的自动化延伸：预算通过后，付款条件满足时自动触发 streaming/milestone escrow |

### **踩坑预警（如果未来做治理 Agent）**

1.  **"已决定" vs "有人提"** — 这是最容易出错的边界，必须做显式标注
    
2.  **来源链接死链** — 治理材料分散在 Snapshot、Discourse、Discord、Notion 等平台，链接失效会导致摘要不可验证
    
3.  **中立性幻觉** — LLM 默认倾向给出"结论"，但治理摘要应该让读者自己做判断，Agent 要克制归纳倾向
    
4.  **贡献量化陷阱** — GitHub commit 数、Discord 消息数都不是好指标，容易激励刷量行为
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->














## **📖 AI Security — AI 安全**

> 来源：[https://aiweb3.school/zh/handbook/bridge/ai-security/](https://aiweb3.school/zh/handbook/bridge/ai-security/)

### **核心定位**

AI Security 在 AI x Web3 里不是"防止模型说错话"，而是**防止模型错误、恶意上下文和工具滥用变成真实资产、权限或治理事故**。

Agent 一旦能读链、调工具、生成交易、管理 session key，就不再只是聊天机器人。攻击面从"聊天窗口"扩展到合约文档、网页内容、交易 memo、API 返回值、token metadata 等一切可进入模型上下文的信息源。

### **第一性原则**

**所有进入模型的内容都可能是攻击面，所有离开模型的动作都必须被约束。**

1.  **上下文 ≠ 指令**：网页、合约文档、API 返回值不能覆盖系统规则
    
2.  **工具权限要隔离**：读工具和写工具分开，普通任务和高风险任务分开
    
3.  **日志要可审计**：出了问题要能看到模型读了什么、做了什么
    

### **知识节点**

**Prompt Injection**

-   恶意内容试图改变模型原始任务或安全规则
    
-   在 Web3 里可能藏在：合约 README、网页内容、治理提案、token metadata、交易备注、外部 API 返回
    
-   **防护第一步**：分层标注上下文可信级别（用户指令 > 系统规则 > 工具结果 > 网页/合约文档）
    
-   **防护第二步**：高风险工具不直接听模型一句话，wallet tool / policy / human check 应拦住
    

**Tool Abuse**

-   模型或攻击者诱导系统滥用工具能力：反复调用付费 API、查询敏感数据、生成无限授权交易
    
-   **防护靠**：tool permission、rate limit、budget、simulation、human check
    
-   特征：不是一次大动作，而是很多小动作累积（高频调用、重复付款、参数偏离目标、请求访问 secret）
    
-   **工具层应有独立异常检测**
    

**Malicious Context**

-   看似普通的上下文里包含攻击指令或误导数据
    
-   包括错误事实：假合约地址、伪造审计报告、过期价格数据、被污染的 token metadata
    
-   **链上事实应优先从 RPC、explorer、verified source 和索引层读取**；网页说明只能作为辅助解释
    

**Key Safety**

-   私钥、API key、session key、JWT、支付凭证**不应进入模型上下文或日志**
    
-   Agent 需要执行时，应通过钱包工具、smart account、session key 或后端签名服务间接完成
    
-   底线：secret 不进 prompt、不进模型输出、不进普通日志、不进 analytics
    
-   **优先使用 Smart Account policy 或 session key，而非把 EOA 私钥放进自动化 runtime**
    

**Permission Isolation**

-   把不同风险等级的工具、数据和动作隔离开
    
-   只读查询 vs 交易草稿 vs 发送交易 vs 撤销授权 vs 大额支付 — 不同能力
    
-   **不要给 Agent 一个"万能 Web3 工具"**
    
-   环境隔离：浏览器环境 ≠ 钱包签名权限；sandbox ≠ 生产数据库
    
-   **最安全的工具不是功能最多，而是刚好能完成任务且无法越界**
    

**Sandbox**

-   隔离环境运行代码、浏览网页、处理文件
    
-   默认禁止访问：.env、ssh key、wallet seed、浏览器 cookie、生产数据库凭证
    
-   对 Web3 Agent：浏览器 sandbox 和钱包签名权限不能无边界连在一起
    

**Audit Log**

-   记录完整链路：模型看到了哪段上下文 → 为什么选择某工具 → 工具返回什么 → policy 是否通过 → 用户是否确认
    
-   不能只记"最终回答"
    
-   高价值系统可把日志 hash 锚定到链上
    

**Alert**

-   监控信号：异常工具频率、预算快速消耗、非白名单地址、连续失败交易、session key 越界
    
-   **告警必须连接响应动作**：暂停 Agent / 撤销 session key / 冻结 escrow / 通知用户 / 人工审核
    
-   低风险进后台队列，高风险立即打断
    

### **AI Security 在 AI × Web3 中的位置**

贯穿所有桥接层：Chain-aware Context 防恶意上下文 → Web3 Tool Use 防工具滥用 → Agent Wallet 防权限扩大 → Governance AI 防信息操纵

**系统设计目标不是让模型永不犯错，而是让模型犯错时无法直接造成不可接受损失。**

* * *

## **📖 Security（Web3）— Web3 安全**

> 来源：[https://aiweb3.school/zh/handbook/web3/security/](https://aiweb3.school/zh/handbook/web3/security/)

### **核心定位**

Web3 安全不是上线前找人审一次代码，而是**从合约设计、权限、测试、交易模拟、监控、应急暂停到权限撤销的一整套工程流程**。

链上系统的错误成本比普通应用高：合约一旦部署，资产已进入协议，攻击者可直接和公开接口交互，交易结果通常不能随意回滚。

**Web3 安全的核心不是"没有 bug"，而是把可预见风险尽量挡在执行前，并在执行后能快速发现和止损。**

### **第一性原则**

链上系统默认暴露在公开对抗环境里，任何可调用路径都要按攻击面看待。

1.  **权限必须最小化**：owner、admin、upgrade、pause、withdraw 都要有清楚边界
    
2.  **执行前要模拟**：交易能不能成功、会改什么资产、会调用哪些合约
    
3.  **上线后要监控**：异常转账、参数变更、失败交易、价格波动持续观察
    

### **知识节点**

**Reentrancy**

-   合约在外部调用未完成前被再次调用，导致状态被重复利用
    
-   经典模式：先转账 → 再更新余额 → 恶意合约在回调中重复提款
    
-   防护：
    
    -   Checks-Effects-Interactions 模式
        
    -   reentrancy guard
        
    -   避免状态未更新前调用不可信合约
        
    -   测试多合约交互，不只测单函数
        

**Access Control**

-   决定谁能执行敏感动作，最常见也最容易被低估
    
-   检查权限时不要只问"有没有 onlyOwner"，更要问：
    
    -   owner 是 EOA、多签还是治理合约？
        
    -   是否有 timelock？
        
    -   角色能否相互授予？
        
    -   私钥泄漏时最坏结果是什么？
        

**Audit**

-   **外部安全审查，不是安全保证书**
    
-   阅读 audit report 至少看：覆盖了哪些 commit/合约、哪些问题已修复/接受风险、是否覆盖经济机制和外部依赖、上线代码是否和审计代码一致
    

**Simulation**

-   交易发出前的预演：调用哪个合约、转出哪些 token、gas 大概多少、是否 revert
    
-   不能替代审计，但能挡住明显错误：链 ID 错、合约地址错、授权额度异常、滑点过大
    

**Monitoring**

-   上线后的安全感知层：大额转账、管理员权限变更、合约升级、预言机价格异常、TVL 快速流出
    
-   **监控 + 响应**：谁收到告警、谁能 pause、谁确认误报、恢复流程是什么
    

### **AI × Web3 安全交叉**

AI 会让安全边界更复杂。Agent 可以解释合约、生成交易、调用工具，但也可能读错上下文、被 prompt injection 影响、调用错误工具。

**安全设计要把模型输出和链上执行分开**：模型可以建议 → 工具返回事实 → policy 限制权限 → simulation 预演结果 → human check 确认高风险动作 → monitoring 记录执行后果

* * *

## **🔗 AI Security × Web3 Security 交叉感悟**

### **双层防线：输入层 vs 执行层**

今天读的两个安全章节恰好构成一个**纵深防御体系**：

| 防线 | AI Security | Web3 Security |
| --- | --- | --- |
| 输入层 | Prompt Injection / Malicious Context | — |
| 处理层 | Tool Abuse / Permission Isolation / Sandbox | Access Control / Reentrancy |
| 输出层 | Key Safety / Audit Log | Simulation |
| 运行层 | Alert / Audit Log | Monitoring |

AI Security 解决"不可信输入 → 模型"这一环，Web3 Security 解决"模型/代码 → 链上执行"这一环。两者缺一不可——光有 AI 防护没有链上模拟，模型输出了危险交易照样会执行；光有链上防护没有输入层防御，恶意上下文会不断诱导模型生成危险请求直到找到漏洞。

### **最小权限原则的两个面**

-   AI 侧："不要给 Agent 一个万能 Web3 工具"
    
-   Web3 侧："owner/admin/upgrade/pause 都要有清楚边界"
    

本质相同：**能力要和任务精确匹配，多余的能力就是攻击面**。这让我想到 Unix 的最小权限原则和零信任架构的核心思想——在 AI × Web3 里，这个原则必须同时在模型层和合约层实施。

### **审计/日志的一致性**

-   AI Security 的 Audit Log：模型看到了什么上下文 → 为什么选择某工具 → 结果是什么 → policy 判断
    
-   Web3 Security 的 Monitoring：谁调了什么合约 → 资产变化 → 权限变更 → 异常信号
    

两者都需要**完整链路记录**，而且可以打通：当 Agent 发起一笔链上交易，从 AI 侧的上下文/决策记录到 Web3 侧的交易 trace/asset change，应该能串联成一条完整的审计链路。

### **踩坑思考**

1.  **Prompt Injection ≠ "让模型说奇怪的话"**：之前我低估了这个问题。在 Agent 场景里，恶意合约文档可能诱导模型生成转账请求——这不是"说错话"，是"做错事"
    
2.  **Malicious Context 包含错误事实**：不只是恶意指令，假的合约地址、过期价格也是攻击。这让我想到 Hermes Agent 自己的工具调用——如果 API 返回被篡改的数据，模型也会做出错误判断
    
3.  **Simulation 是最后一道自动防线**：在 human check 之前，simulation 能挡住大量"明显错误"。之后做实践时应该优先尝试 Tenderly 或类似工具
    
4.  **Session Key 是 Key Safety 的关键工具**：不给 Agent EOA 私钥，用 session key 限制额度/时间/目标/方法——这正好对应了前几天学的 Account Abstraction
    

### **对 Hermes Agent 的安全反思**

用 Hermes Agent 辅助学习这几周，现在回顾它的工具权限设计：

-   ✅ 有 terminal / file / browser / web 等工具分类
    
-   ✅ 有 delegate\_task 子代理隔离
    
-   ⚠️ 但目前没有显式的"上下文可信级别标注"——如果 curl 请求返回恶意内容，模型会直接当事实用
    
-   ⚠️ 没有 tool rate limit 或 budget 机制（至少用户层面看不到）
    

这是 AI Security 章节提到的两个关键防护，Hermes 作为 Learning Agent 可能不需要，但如果是处理链上资产的 Agent 就必须有。
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->















## **🔧 Dev Tooling — 开发工具赛道**

> 来源：[https://aiweb3.school/zh/handbook/tracks/dev-tooling/](https://aiweb3.school/zh/handbook/tracks/dev-tooling/)

### **核心定位**

Dev Tooling 赛道的核心命题：AI 不只是"帮我写合约"，而是帮开发者**理解协议、解释交易、生成测试、检查部署风险**，把复杂工具链串成更可靠的工作流。

### **第一性原理**

> AI 开发工具的价值不是生成更多代码，而是减少错误理解和不可逆操作。

Web3 里错误代码 = 真实资金损失，所以 AI 工具要优先帮开发者看清上下文、约束和风险，而不是追求"自动完成一切"。

三条原则：

1.  **文档要变成可检索上下文** — 回答必须能回到官方文档、源码或 EIP
    
2.  **交易要变成可解释对象** — 用户需要看到函数、参数、资产变化和风险
    
3.  **部署要变成检查流程** — AI 可以生成 checklist，但关键步骤必须可复核
    

### **六个知识节点**

**1\. Docs-to-Agent**

-   把协议文档、SDK 文档、EIP、README、代码示例和 changelog 变成 Agent 可查询的知识库
    
-   不是简单丢进向量数据库，实用系统需要处理：
    
    -   **文档版本**：回答必须对应当前 SDK/合约版本
        
    -   **来源优先级**：官方文档和源码 > 博客摘要
        
    -   **代码片段可运行性**：示例是否过期、依赖版本是否匹配
        
    -   **引用追踪**：回答里关键步骤要能回到原文
        
    -   **更新机制**：文档更新后索引要同步
        
-   关联：RAG（检索增强）、MCP（标准化工具读取）
    

**2\. Contract Reading Assistant**

-   帮开发者读合约，不只是总结"做什么"，还要解释权限、状态变量、关键函数、事件、外部调用和潜在风险
    
-   应该输出：
    
    -   合约职责和依赖关系
        
    -   谁可以调用管理函数
        
    -   哪些函数会移动资产
        
    -   哪些地方依赖 oracle / owner / proxy / 外部合约
        
    -   是否存在 upgrade、pause、fee、黑名单或紧急权限
        
    -   关键事件如何对应状态变化
        
-   ⚠️ 安全结论不能只靠模型 — 高风险判断应结合 Slither、Foundry 测试、静态分析、审计报告和人工复核
    

**3\. Transaction Interpreter**

-   把 calldata、事件日志、token transfer、approval 和合约调用翻译成人能理解的操作说明
    
-   应该回答：
    
    -   调用了哪个合约和函数
        
    -   参数分别代表什么
        
    -   哪些资产会转出、转入或被授权
        
    -   是否存在无限授权、代理调用或多跳 swap
        
    -   交易失败可能的原因
        
    -   交易和用户原始意图是否一致
        
-   对 Agent 钱包来说，这是**签名前确认**的重要组成部分
    

**4\. Test Generator**

-   AI 帮补测试，不能只生成 happy path — Web3 测试最重要的是边界、权限、失败路径和经济假设
    
-   应覆盖：
    
    -   权限测试：非 owner / admin 能否调用
        
    -   状态转换：每个状态是否只能按规则前进
        
    -   数值边界：0、最大值、精度、舍入和溢出
        
    -   资产安全：余额变化、重复提款、重入、授权边界
        
    -   Oracle 和外部依赖：价格异常、延迟、返回错误
        
    -   升级和迁移：proxy storage layout 是否安全
        
-   ⚠️ 开发者要检查测试是否真的验证了业务不变量
    

**5\. Deployment Checklist**

-   部署是 Web3 开发里最不该临场发挥的环节
    
-   典型 checklist：
    
    -   合约地址、chain id、RPC、deployer 是否正确
        
    -   环境变量和私钥是否隔离
        
    -   编译器版本、optimizer、constructor 参数是否确认
        
    -   proxy admin、owner、多签和 timelock 是否设置正确
        
    -   初始权限、fee、oracle、token 地址是否核对
        
    -   部署后是否验证源码、保存 ABI、写入前端配置
        
    -   监控、告警、pause 权限和回滚方案是否准备好
        
-   AI 输出应该是**可执行清单**，不是一句"部署成功"
    

**6\. SDK Integration Assistant**

-   帮开发者把钱包、RPC、合约调用、事件监听和后端服务接起来
    
-   真正有价值的是减少版本和边界错误：
    
    -   前端框架和包管理器版本兼容性
        
    -   viem / ethers / wagmi / RainbowKit 版本兼容
        
    -   合约 ABI 和地址是否对应目标链
        
    -   read / write / simulate / waitForReceipt 调用顺序
        
    -   错误处理是否区分用户拒签、RPC 失败、链不匹配和交易 revert
        
-   如果能读取本地代码库，可以直接指出应该改哪个文件
    

### **最小实践**

-   选择一个开源 Solidity 合约，输出：
    
    -   合约职责和关键权限
        
    -   会移动资产的函数列表
        
    -   3 个最值得测试的不变量
        
    -   5 条测试用例建议
        
    -   需要人工复核的安全问题
        
    -   使用到的官方文档、源码或工具链接
        

* * *

## **🔌 MCP — 模型上下文协议（复习 + Dev Tooling 对照）**

> 来源：[https://aiweb3.school/zh/handbook/ai/mcp/](https://aiweb3.school/zh/handbook/ai/mcp/)

### **核心定位**

MCP 把模型和外部工具、数据源、应用上下文之间的连接**标准化**。解决的不是"模型会不会更聪明"，而是"模型如何以可描述、可复用、可管理的方式使用外部能力"。

### **与 Dev Tooling 的交叉**

Dev Tooling 里的 Docs-to-Agent 节点直接依赖 MCP：

-   MCP **Server** 暴露文档检索能力 → 对应 Docs-to-Agent 的知识库接口
    
-   MCP **Tool Schema** 定义 search\_docs(query)、get\_file(path) 等工具 → 确保模型调用有结构化输入
    
-   MCP **Permission** 决定哪些路径可读、哪些动作需授权 → 对应 Dev Tooling 的"可检索但可追踪"原则
    

**踩坑点**：一个不加限制的 MCP server，很容易把本地文件、内部 API 或高风险动作暴露给模型。在 Dev Tooling 场景下，这意味着合约源码读取是低风险的，但如果工具暴露了"部署合约"能力，就进入 Contract Write 的权限域。

### **关键节点速记**

| 节点 | 核心要点 | Dev Tooling 对照 |
| --- | --- | --- |
| Server | 暴露 resources/tools/prompts，设计重点是边界 | Docs-to-Agent 的知识库 server |
| Client | 发现 server 能力，展示给用户哪些工具可用 | SDK Integration Assistant 的客户端侧 |
| Tool Schema | 工具名、参数、返回值、约束 — schema 模糊 = 模型猜参数 | Contract Read/Write 必须有清晰 ABI schema |
| Permission | 只读/写入、会话/长期授权、用户确认、副作用、可撤销 | Tool Permission 的分层模型 |

* * *

## **🛠️ Web3 Tool Use — Web3 工具调用（复习 + Dev Tooling 对照）**

> 来源：[https://aiweb3.school/zh/handbook/bridge/web3-tool-use/](https://aiweb3.school/zh/handbook/bridge/web3-tool-use/)

### **核心定位**

Web3 Tool Use 把 RPC、合约读取、交易生成、钱包确认、区块浏览器和 DeFi 操作变成 Agent 可调用工具。真正难的不是"能调用"，而是**权限、参数、模拟和日志**。

### **与 Dev Tooling 的交叉**

Dev Tooling 的六个节点几乎都有 Web3 Tool Use 的影子：

| Dev Tooling 节点 | 对应 Web3 Tool Use 能力 | 风险等级 |
| --- | --- | --- |
| Contract Reading Assistant | Contract Read（view/pure） | 初级（只读） |
| Transaction Interpreter | Explorer Tool + Contract Read | 初级（只读） |
| Test Generator | Contract Read + 模拟 | 初级-中级 |
| Deployment Checklist | Contract Write + Wallet Tool | 高级（写链） |
| SDK Integration Assistant | 全工具链组合 | 中级-高级 |
| Docs-to-Agent | MCP + RPC Tool | 初级（只读） |

### **第一性原理重读**

> 模型可以选择工具，但工具必须用确定性边界限制模型。

三条约束：

1.  **读写分离** — 读取链上状态和发送交易必须是不同工具、不同权限
    
2.  **参数结构化** — chain id、contract address、method、args、value、slippage 不能埋在自然语言里
    
3.  **日志不可省** — 每次工具调用都要记录输入、输出、时间、来源和错误
    

### **工具分级速记**

-   **RPC Tool**（初级）：读链状态、估算 gas → 只读可开放更宽，写入要拆出
    
-   **Contract Read**（初级）：view/pure 函数 → 最常用、相对低风险，但读错网络/ABI 也会误导
    
-   **Contract Write**（高级）：改变链上状态 → 必须：chain id + ABI + 模拟 + policy + 用户授权
    
-   **Wallet Tool**（高级）：连接/签名/交易/授权 → 最敏感边界，高风险必须回用户确认
    
-   **Explorer Tool**（初级）：查交易/源码/事件 → 提供可验证证据
    
-   **DeFi Tool**（高级）：swap/借贷/授权 → 协议白名单 + 最大额度 + 滑点 + simulation + 人工确认
    
-   **Tool Permission**（高级）：按工具/合约/方法/金额/时间/频率分层
    
-   **Tool Log**（中级）：每次调用记录用户目标/工具名/输入/输出/错误/链ID/区块号/交易哈希
    

* * *

## **🔄 Agent Workflow — 智能体工作流（复习 + Dev Tooling 对照）**

> 来源：[https://aiweb3.school/zh/handbook/bridge/agent-workflow/](https://aiweb3.school/zh/handbook/bridge/agent-workflow/)

### **核心定位**

把"用户目标 → 上下文读取 → 计划生成 → 工具调用 → 风险检查 → 执行 → 记录和复盘"组织成可控流程。核心是**把概率模型放进确定性流程里**。

### **与 Dev Tooling 的交叉**

Dev Tooling 的工具链本质就是一个 Agent Workflow：

```
用户请求 → Docs-to-Agent(查找文档) → Contract Read(读取合约) → 
Transaction Interpreter(解释交易) → Test Generator(补测试) → 
Deployment Checklist(检查部署) → SDK Assistant(接入工具) → 记录 Trace
```

每一步都对应 Workflow 的节点：

| Workflow 节点 | Dev Tooling 对应 |
| --- | --- |
| Task Graph | Dev Tooling 工具链本身就是任务图 — 6 个节点有依赖关系 |
| State Machine | 部署流程的状态：draft → configured → simulated → confirmed → deployed → verified |
| Human-in-the-loop | Contract Write 前必须确认；Deployment Checklist 关键步骤需复核 |
| Retry / Fallback | Contract Read 失败可重试；交易 pending 不能简单再发一笔 |
| Trace | Dev Tooling 每一步都应该有 log — 文档来源、合约分析结果、测试覆盖、部署 hash |
| Evaluation Harness | 测试 Generator 生成的测试是否真的验证了不变量 |
| Regression Set | 5 条 regression：正常/错误链/滑点过大/余额不足/用户拒绝 |

### **第一性原理重读**

> 高风险 Agent 不能只有"下一步推理"，必须有状态、边界和停止条件。

三条约束：

1.  **流程要显式** — 不要把完整执行链路藏在一段长 prompt 里
    
2.  **状态要可恢复** — 工具失败、用户拒绝、交易 pending 时，系统要知道如何继续或停止
    
3.  **评估要可回放** — 没有 trace 和 regression set，就很难知道改模型后是否更安全
    

* * *

## **🧠 交叉洞察**

### **1\. Dev Tooling 是 AI×Web3 的"纵向赛道"，MCP/Web3 Tool Use/Workflow 是"横向基础设施"**

Dev Tooling 赛道的每个节点，都可以向下拆解到 MCP（工具接口）、Web3 Tool Use（链上能力）、Agent Workflow（流程控制）三层。理解赛道不是另起炉灶，而是把 Bridge 层的概念组装成面向开发者的产品。

### **2\. "读"的安全、"写"的严格 — 三章的共识**

-   MCP: "只读工具可开放更宽，写入要拆出去"
    
-   Web3 Tool Use: "读写分离，参数结构化，日志不可省"
    
-   Agent Workflow: "只读分析自动执行，高风险交易必须人工确认"
    
-   Dev Tooling: "AI 帮开发者看清上下文和风险，而不是追求自动完成一切"
    

**四章说了同一件事：在 Web3 里，AI 的价值是降低认知负担，不是替代判断。**

### **3\. Dev Tooling 最小实践的实操路径**

我可以直接用 Hermes Agent 作为 Dev Tooling 的实践平台：

-   **Contract Reading Assistant**：让 Hermes 读一个开源合约（如 OpenZeppelin ERC20），输出职责/权限/资产函数/风险
    
-   **Transaction Interpreter**：让 Hermes 解释一笔测试网交易
    
-   **Test Generator**：让 Hermes 为合约生成边界测试用例
    
-   **Deployment Checklist**：用 Hermes 的 MCP server 管理部署流程
    

这恰好也是 Week 2 交付（选定方向 + 小型实战）的切入点。

### **4\. 踩坑/失败预判**

-   **Docs-to-Agent 的幻觉风险**：MCP server 返回的文档片段如果没有版本标注，模型可能基于过时文档生成错误建议 → 解决方案：Tool Schema 强制返回 chain\_id + doc\_version
    
-   **Contract Read 误导链**：读错网络/ABI → 模型基于错误事实建议写交易 → 双重错误 → 解决方案：Contract Read 结果必须带 chain\_id + block\_number + contract\_verified 状态
    
-   **Deployment Checklist 的"假安全感"**：AI 生成了看起来完整的清单 ≠ 开发者真的逐条检查 → 解决方案：checklist 每项需要手动标记"已确认"，而不是 AI 自己打勾
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->
















## **📖 Agentic Commerce — 智能体商业**

> 来源：[https://aiweb3.school/zh/handbook/tracks/agentic-commerce/](https://aiweb3.school/zh/handbook/tracks/agentic-commerce/)

### **核心定位**

Agentic Commerce 讨论的是：当 Agent 能代表用户发现商品、调用 API、比较报价、发起付款和验收结果时，商业流程应该如何被重新设计。

这不是"AI 自动买东西"这么简单——真正的难点在交易边界。

### **为什么要探索这个**

传统电商和 SaaS 订阅都是人来点按钮、填表单、确认付款。Agentic Commerce 的变化在于，很多购买行为会变成**机器之间的协作**：Agent 发现服务 → 询价 → 确认预算 → 付款 → 拿结果 → 交回用户。

五个核心问题：

1.  **判断力** — Agent 是否能判断这个服务值得买？
    
2.  **预算表达** — 用户预算如何变成机器可执行的限制？
    
3.  **完成证明** — 服务方如何证明任务完成？
    
4.  **争议处理** — 结果不满意时如何退款或仲裁？
    
5.  **小额高频** — 小额、高频、跨平台的机器支付怎么做？
    

### **第一性原则**

> Agent 可以替用户发起商业动作，但不能替用户承担无限责任。

商业自动化的核心不是让 Agent 随便花钱，而是把购买意图、预算、验收标准和争议规则变成**结构化协议**。

三条原则：

1.  **购买前要有 intent** — 买什么、为什么买、最多花多少、接受什么结果
    
2.  **购买中要有约束** — 报价、有效期、服务条款、数据使用范围和退款条件
    
3.  **购买后要有证据** — 任务结果、收据、日志、验收记录和争议路径
    

### **知识节点**

**Agents Purchasing APIs**

Agent 直接购买 API、数据、推理、存储、检索、执行服务的能力。不是人类开发者提前注册账号、复制 key、充值套餐，而是 Agent 在任务过程中**动态发现服务并完成调用**。

最小流程：

1.  Agent 识别当前任务需要外部服务
    
2.  查询可用服务、价格、能力和限制
    
3.  生成购买请求和预算约束
    
4.  服务方返回报价和调用方式
    
5.  Agent 在用户授权范围内付款并调用
    
6.  系统记录结果、费用和失败原因
    

⚠️ 最重要的不是"自动付款"，而是**服务发现、价格透明、权限限制和调用日志**。

> 相关：Machine Payment（Agent 如何为服务付款）、x402（基于 HTTP 402 的机器支付协议）

**Payment Intent**

用户授权 Agent 花钱之前的结构化表达。比"帮我买最合适的服务"更具体。

一个 Payment Intent 包含：

-   **任务目标**：要完成什么
    
-   **预算**：单次、每日或总额度
    
-   **支付资产**：稳定币、平台余额或其他 token
    
-   **可接受服务方**：白名单、黑名单或最低声誉
    
-   **质量要求**：输出格式、响应时间、准确性或验收标准
    
-   **退款条件**：超时、失败、格式错误、结果不可用
    
-   **有效期**：这次授权持续多久
    

Payment Intent 把用户意愿变成**机器能检查的边界**。Agent 可以在边界内决策，但不能把边界解释得越来越宽。

**Budget Control**

预算控制是 Agentic Commerce 的安全阀。没有预算控制，Agent 的一次循环错误就可能不断购买服务、重复调用 API 或发起无意义交易。

预算应该**分层**：

1.  **任务预算**：完成某个任务最多花多少
    
2.  **服务预算**：单个 API 或 provider 的上限
    
3.  **时间预算**：每小时、每天、每周的总额度
    
4.  **风险预算**：高风险服务必须人工确认
    
5.  **失败预算**：连续失败几次后停止
    

对用户来说，预算界面要可理解：不是一堆抽象参数，而是"这个 Agent 最多能花多少钱、花在哪些服务上、什么时候自动停止"。

**Proof of Task Completion**

服务方拿到钱之前，系统需要判断任务是否完成。Proof 不是单一证明，而是**一组证据**。

不同服务的证据类型：

-   **API 服务**：请求 ID、响应状态、结构化输出、时间戳
    
-   **数据服务**：数据哈希、版本、字段说明、授权记录
    
-   **推理服务**：模型版本、输入摘要、输出哈希、评测结果
    
-   **执行服务**：交易哈希、事件日志、状态变化
    
-   **人工服务**：交付物、验收记录、争议窗口
    

低价值场景 → 日志和回调可能够了；高价值场景 → 需要签名回执、链上事件、第三方评测或托管仲裁。

> 相关：Settlement & Escrow（验收/退款/争议的状态机）、ERC-8183（Agent 任务与支付结算标准化）

**On-chain Receipt**

把关键交易结果记录到链上。不一定保存完整内容，而是保存足够让双方事后核对的**证据**。

一个 receipt 包含：

-   payer、provider、agent 或 task id
    
-   支付金额、资产、链和交易哈希
    
-   服务类型和报价 id
    
-   输出哈希或交付物引用
    
-   完成时间、验收状态和争议状态
    

链上 receipt 的价值：**跨平台结算更容易对账，Agent 商业行为更可追踪**。

⚠️ 不要把所有敏感输入和输出都直接上链，隐私数据只保存哈希或加密引用。

**Escrow Flow**

用托管状态机降低交易双方的不信任。用户不想先付款后拿不到服务，服务方也不想先交付后收不到钱。

基础 escrow 流程：

1.  用户或 Agent 创建任务和预算
    
2.  资金进入托管合约或受控账户
    
3.  服务方接受任务并交付结果
    
4.  系统按验收标准检查结果
    
5.  验收通过则放款
    
6.  验收失败则退款或进入争议
    

⚠️ Agentic Commerce 里的 escrow 要特别注意**自动验收边界**。模型可以帮助判断结果是否合格，但高价值或主观结果不应该只靠模型自动放款。

### **在 AI × Web3 中的位置**

Agentic Commerce 把 Agent、钱包、权限、支付、托管、声誉和验证连在一起。它不是单个功能，而是一条**商业闭环**。

三个切入方向：

1.  帮 Agent 购买 API、数据或推理服务
    
2.  帮服务方接受 Agent 支付并自动交付
    
3.  帮用户管理预算、权限和消费审计
    

### **最小实践：设计"Agent 购买链上数据分析 API"流程**

需要写清楚：

-   用户目标和预算
    
-   Agent 如何发现 API 服务
    
-   服务方报价包含哪些字段
    
-   Payment Intent 如何限制金额、次数和服务范围
    
-   API 如何证明已经完成分析
    
-   收据和日志如何保存
    
-   失败、超时和结果不满意时如何退款
    

* * *

## **💡 个人收获**

### **与 Week 1 Bridge 概念的串联**

Agentic Commerce 是前 5 个 Bridge 概念的**自然收束**：

| Bridge 概念 | Agentic Commerce 中的角色 |
| --- | --- |
| Chain-aware Context | Agent 读取链上价格/流动性/状态来决策是否购买 |
| Web3 Tool Use | Agent 调用链上工具完成支付、查询、交互 |
| Agent Workflow | 从发现 → 询价 → 授权 → 支付 → 验收的完整编排 |
| Agent Wallet | Agent 需要独立钱包来执行付款（受用户预算约束） |
| Machine Payment | x402 协议实现 Agent 之间的 HTTP 402 微支付 |

**关键洞察**：前 5 个 Bridge 概念各自解决一个能力层的问题，Agentic Commerce 则需要**所有能力层同时工作**才能形成闭环。缺任何一层——没有钱包就无法付款，没有预算控制就无法约束，没有验收就无法放款——商业流程就断了。

### **第一性原则的深度**

"Agent 可以替用户发起商业动作，但不能替用户承担无限责任" — 这句话和 Week 1 学的 Agent 第一性原则（"Agent 不是自主权本身，而是被约束的执行循环"）形成了**递进关系**：

-   Week 1 Agent 原则：约束的是**执行过程**（工具、状态、停止条件）
    
-   Agentic Commerce 原则：约束的是**商业责任**（意图、预算、验收、争议）
    

本质上是同一个思想在不同层面的展开：**信任不能被代理，只能被结构化**。

### **Payment Intent 的设计哲学**

Payment Intent 让我想到了合约的 modifier 和 Agent 的 tool 权限分级——三种不同场景下的同一个问题：**如何把人的意图翻译成机器可检查的边界**。

-   合约用 modifier：`onlyOwner`, `whenNotPaused` — 函数级别的权限检查
    
-   Agent 用 tool 分级：只读/写入/需确认 — 工具级别的执行约束
    
-   Agentic Commerce 用 Payment Intent：预算/白名单/有效期/退款条件 — 商业级别的授权边界
    

一层比一层更抽象，但底层逻辑相同：**边界必须可计算，不能靠 Agent "理解"**。

### **Escrow 与自动验收边界**

"模型可以帮助判断结果是否合格，但高价值或主观结果不应该只靠模型自动放款" — 这和 Week 1 的 "Reflection 不能替代外部验证" 完全一致。

这其实是 AI × Web3 的核心设计模式：

-   **低价值/客观标准** → 自动化（Agent 自检 + 合约自动放款）
    
-   **高价值/主观标准** → 人工介入（用户确认 + 争议仲裁窗口）
    

价值高低不是绝对的，而是根据具体场景设定阈值。

### **踩坑预感**

1.  **Payment Intent 边界漂移** — Agent 可能会找到 creative 的方式"解释"用户意图，在边界内做用户没想过的操作。Intent 设计必须考虑"被创造性解读"的情况
    
2.  **Budget Control 的 granularity** — 分 5 层预算看起来很完备，但实际配置体验可能很糟糕。用户需要"简单到能理解"的界面，同时系统需要"精确到能约束"的参数——这两个需求天然矛盾
    
3.  **Escrow 流动性锁定** — 资金在托管期间无法使用，如果服务方交付慢或争议拖长，用户体验很差。需要设计合理的超时机制
    
4.  **On-chain Receipt 的隐私问题** — 哪些信息上链、哪些只存哈希，这个决策比看起来复杂得多。过多信息上链可能暴露 Agent 的商业策略
    

## **❓ 待深入**

-   x402 协议的具体实现（HTTP 402 状态码如何变成完整的支付协商协议）
    
-   ERC-8183 的提案内容（Agent 任务支付的标准化尝试）
    
-   Payment Intent 的具体 schema 设计（如何平衡可表达性和可验证性）
    
-   Escrow 合约的验收状态机设计（自动/半自动/人工验收的切换逻辑）
    
-   Agent Trust & Reputation 如何和 Agentic Commerce 配合（声誉系统是支付决策的重要输入）
    

## ⚠️ **AI Agent 动钱的痛点与风险**

### **资金管理痛点**

-   链上资金管理存在**资金归属安全**和**确定性**问题
    
-   基础设施是否到位也影响 Agent 代币消费
    

### **四类失控风险**

| 风险类型 | 说明 |
| --- | --- |
| Prompt Injection | 因 prompt 受影响或模型幻觉导致执行未经授权交易 |
| Shadow Operations | Agent 在人类看不见的地方创建子账户和执行潜在路径 |
| Unscoped Authority | Agent 对链上资金有无限掌控能力 |
| Zombie Permissions | 授权未撤销导致交易处于系统性风险 |

* * *

## **🛡️ Cobo 的解决方案**

### **1\. MPC 钱包方案**

采用 MPC 解决钱包底层安全性问题：

-   **三方分片**：Cobo、Agent 和 Human 各自持有私钥分片
    
-   **任意一方无独立掌控资金转移权限**
    
-   **开放私钥导出功能**
    
-   **2-2 threshold 模式**：
    
    -   Agent + Cobo 共管（Agent 日常操作）
        
    -   Human + Cobo 配合（人类审批操作）
        

### **2\. Pact 授权协议**

Pact 是一份结构化授权协议，包含四个核心组件：

| 组件 | 作用 |
| --- | --- |
| Intent | 期待 Agent 完成的具体任务或目标 |
| Execution Plan | AI 将 intent 转译成的具体执行计划 |
| Policy | 风控约束：预算审批、白名单链/TOKEN/合约限制等 |
| Completion Condition | 避免 Zombie permission：设定交易时效和数量上限 |

执行流程：

1.  用户表达意图
    
2.  Agent 转译信息，封装成 Pact 推到 APP
    
3.  人类审阅批准
    
4.  Agent 在可控范围内完成交易
    

### **3\. Recipe 知识胶囊**

解决「Agent 如何把事情做对」的问题：

-   预加载知识库，封装合约授权、特殊接口调用等知识
    
-   已上线 AaveV3、UniswapV3 等主流 Recipe
    
-   帮助 Agent 更好完成链上动作
    

* * *

## **🏦 产品应用与讨论**

### **多 Agent 共管资产**

-   单个用户可创建多个钱包，委托多个 Agent 管理理财资产
    
-   不同 Agent 资金彼此独立，更细颗粒度管理资金安全
    

### **小额免密支付**

-   支持 X402 微支付协议
    
-   计划支持 Gasless 场景
    
-   可实现小额免密支付
    
-   在 Pact 体系下将转账行为限制在小风险敞口内
    

### **支付场景分析**

-   主流支付场景目前偏向 Web2
    
-   Agent Economy 未来更多基于链上自主、可追溯的交易形式
    
-   链上支付有快速、高效结算优势
    
-   短期内不会完全颠覆 Web2 支付
    
-   国内链上支付可能有联盟链或企业内部区块链基础设施场景
    

* * *

## **💬 Q&A 精华**

| 问题 | 回答要点 |
| --- | --- |
| 首次执行 vs 重复操作 | 首次需授权，后续相同操作在条件不变时可自动执行 |
| Agent Wallet 与主钱包 | 操作同一账户，但 Agent 操作需人类审批且有资金上限 |
| Human-in-the-loop 趋势 | 短期是主流，未来 agent 足够智能时可能自发完成意图决策和支付 |
| Agent 掉线兜底 | MPC 钱包创建恢复有冗余设计 |
| 防范意图传递攻击 | 通过 Recipe 和 AI 助手审计 Pact |
| 高风险合约 | 需用户自行管理或提交需求添加约束条件 |
| 多跳风控 | 从合约地址、代币数量等参数层面进行风控管理 |

* * *

## **💡 个人收获**

### **与 Week 1-2 学习的串联**

1.  **Agent 发展阶段的递进** — 从问答→建议→Agent→自主探索，和 Week 1 学的 Agent 第一性原则（"Agent 是被约束的执行循环"）形成了张力：越自主，约束越重要
    
2.  **四类风险与 Bridge 概念对照**：
    
    -   Prompt Injection → Week 1 Agent 章节的"幻觉"问题
        
    -   Shadow Operations → Agent Workflow 的可观测性需求
        
    -   Unscoped Authority → Agent Wallet 的权限分层
        
    -   Zombie Permissions → Machine Payment 的时效性
        
3.  **Pact = Payment Intent 的工程实现** — 昨天（05-25）学的 Payment Intent 是理论框架，Cobo 的 Pact 就是它的产品级实现！
    
    -   Intent → Pact.intent
        
    -   Budget Control → Pact.policy（预算审批、白名单）
        
    -   Completion Condition → Pact.completion condition（时效+数量上限）
        
4.  **Recipe = Web3 Tool Use 的知识封装** — Recipe 本质上就是把"如何调用 AaveV3/UniswapV3"这类链上操作知识，打包成 Agent 可直接使用的工具描述——这就是 Week 2 学的 Web3 Tool Use 概念在产品层的落地
    
5.  **MPC 2-2 模式与 Account Abstraction 的关系** — MPC 分片替代了单私钥风险，2-2 threshold 相当于一种"双签"机制。这和 Week 1 概念卡片中的多签、智能账户形成了对照
    

### **踩坑预感**

1.  **Pact 的表达能力边界** — Policy 越细致，用户体验越复杂。和昨天分析的 Budget Control granularity 问题一致
    
2.  **Recipe 的覆盖度** — 只覆盖主流协议（AaveV3、UniswapV3），长尾 DeFi 协议怎么办？Agent 能不能自己"学会"新协议？
    
3.  **Human-in-the-loop 的体验瓶颈** — 如果每笔交易都要人批准，效率比手动操作还低。关键在于"条件不变时自动执行"的规则设计
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-25
<!-- DAILY_CHECKIN_2026-05-25_START -->

















## **一、Chain-aware Context（链感知上下文）**

**一句话**：让 AI 在行动前看到正确的链、地址、合约、交易、余额——而不是只靠用户一句话猜链上状态。

### **核心要点**

-   **链上状态有时间性**：同一地址余额、授权随区块变化
    
-   **上下文要带来源**：合约地址、区块号、交易哈希、explorer 链接都必须可追溯
    
-   **事实 vs 解释分离**：工具返回事实，模型负责解释，不要把模型猜测当事实
    

### **知识节点速记**

| 节点 | 难度 | 关键记忆点 |
| --- | --- | --- |
| On-chain Data | 初级 | 读取至少带 chain id、block number、contract address、method、返回值、读取时间 |
| Contract Docs | 初级 | ABI 只给签名不解释语义，文档可能过期，仍需链上验证 |
| ABI / Event | 中级 | 能调用 ≠ 应该调用，写交易前还需权限/余额/allowance/simulation/policy 检查 |
| Transaction History | 中级 | 至少保留 hash、block、from/to、method、value、token transfers、logs |
| Explorer Context | 初级 | 给 explorer link 比只说"交易成功"更可靠 |
| Indexing Context | 中级 | 索引必须带时间戳和同步状态，落后 500 区块的结果不是当前事实 |
| Citation | 初级 | 无 citation 的链上解释=观点，有 citation=可验证 |

### **最小实践**

给一笔交易做上下文包：找公开交易哈希 → 收集 chain id、block、from/to、method、value、transfers、logs → 找 ABI/verified source → 写模型可读上下文（每条结论附 citation）→ 标出事实 vs 解释。

### **💡 交叉感悟**

Hermes Agent 的工具调用就有类似的"上下文可信度"问题。比如我调用 `terminal` 执行 `curl` 获取链上数据，返回的是事实；但如果 AI 直接根据记忆说"Uniswap 在 Sepolia 上地址是 0x..."，这可能是过时或错误的。**所有链上事实都应该通过工具读取，不应该靠模型记忆。**

* * *

## **二、Web3 Tool Use（Web3 工具调用）**

**一句话**：把 RPC、合约读写、钱包、Explorer、DeFi 操作变成 Agent 可调用工具——真正难的不是"能调用"，而是权限、参数、模拟和日志。

### **第一性原理**

> 模型可以选择工具，但工具必须用确定性边界限制模型。

### **知识节点速记**

| 节点 | 难度 | 关键记忆点 |
| --- | --- | --- |
| RPC Tool | 初级 | 读写分离；返回含 chain id、provider、block number、method、result |
| Contract Read | 初级 | 最常用低风险，但可能误导（读错网络/合约、ABI 不匹配、数据滞后） |
| Contract Write | 高级 | 需 chain id、ABI method、value 预估、gas 估算、simulation、policy、用户授权 |
| Wallet Tool | 高级 | 最敏感边界——连接/签名/发送/授权/撤销必须分成不同动作 |
| Explorer Tool | 初级 | 提供可验证证据：交易状态、合约验证、事件、token transfer |
| DeFi Tool | 高级 | 必须有协议白名单、最大交易额、最大滑点、价格来源、simulation |
| Tool Permission | 高级 | 按工具/合约/方法/金额/时间/频率/确认级别分层 |
| Tool Log | 中级 | 每次调用至少记录：目标、工具名、输入、输出、错误、时间、chain ID、tx hash |

### **读-写分离原则**

-   只读链上查询 → 自动允许
    
-   交易草稿生成 → 自动允许
    
-   小额白名单支付 → session key 允许
    
-   大额转账/授权 → 必须人工确认
    
-   任意合约调用 → 默认禁止
    

### **💡 交叉感悟**

Hermes Agent 的 `terminal`、`browser`、`file` 等工具本质就是 Tool Use，但目前没有按"读写分离"做权限分级。terminal 既能 `ls` 也能 `rm -rf`，browser 既能读页面也能填表单提交。Web3 场景下这种"万能工具"设计是危险的——对照学习后更理解为什么 Contract Write 和 Wallet Tool 必须独立于 Contract Read。

* * *

## **三、Agent Workflow（智能体工作流）**

**一句话**：把"用户目标 → 上下文 → 计划 → 工具 → 风险检查 → 执行 → 记录"组织成可控流程，而不是让模型自由发挥。

### **第一性原理**

> 高风险 Agent 不能只有"下一步推理"，必须有状态、边界和停止条件。

### **知识节点速记**

| 节点 | 难度 | 关键记忆点 |
| --- | --- | --- |
| Task Graph | 中级 | 目标拆成节点和依赖，每步设输入/输出/权限/停止条件 |
| State Machine | 高级 | 状态：draft → context_loaded → plan_ready → waiting_confirmation → submitted → confirmed/reverted |
| Human-in-the-loop | 中级 | 分层：只读自动/草稿自动/小额session key/高风险人工确认/超policy拒绝 |
| Retry / Fallback | 中级 | 读失败可重试；交易失败先判断是否已广播；pending 不重发；模型不可用降级只读 |
| Trace | 初级 | 记录：目标、模型版本、上下文来源、工具输入输出、policy判断、simulation、确认、tx hash |
| Evaluation Harness | 高级 | 测：是否拒绝越权、是否识别错误链/合约、是否在缺数据时停止、是否要求 human check |
| Regression Set | 中级 | 固定用例防退化：正常请求/错误链/无限approve/恶意文档/余额不足/用户拒绝 |

### **💡 交叉感悟**

Hermes Agent 的 `execute_code` + `terminal` + `delegate_task` 其实就是简化的 workflow，但缺少显式的状态机和 Task Graph。比如 `delegate_task` 的 subagent 完成后只返回摘要，没有 trace 链路可回放。如果要做一个 Web3 Agent，这些"骨架"必须补上。

**Regression Set 的概念特别有用**：每次改 prompt 或换模型后，跑一遍"无限 approve 请求"的测试用例，确认 Agent 没退化成"更顺但更危险"。

* * *

## **四、Agent Wallet（智能体钱包）**

**一句话**：Agent Wallet 不是"给 AI 一个私钥"，而是让用户把一小部分可撤销、可审计的权限交给 Agent。

### **第一性原理**

> 控制权不能交给概率系统。Agent 只能拿到可验证、可限制、可撤销的行动空间。

### **知识节点速记**

| 节点 | 难度 | 关键记忆点 |
| --- | --- | --- |
| AA Wallet | 中级 | Account Abstraction 让账户表达规则：谁能操作、能操作什么、何时失效 |
| Smart Account | 中级 | 带规则的钱包账户：谁可发起/哪些需确认/每天限额/权限失效/异常暂停 |
| Safe | 中级 | 多签+模块分散执行权；Agent 参与流程但不独占控制权 |
| Session Key | 高级 | 临时有限权限小钥匙——限时间/合约/方法/金额/资产/转出/可撤销 |
| Policy | 高级 | 写成系统可检查的规则：每日限额/白名单合约/只swap不approve/滑点超1%停止 |
| Guard | 高级 | 确定性拦截层——Agent 生成候选动作，Guard 拒绝越界动作 |
| Simulation | 中级 | 签名前预演：你付多少/收什么/授权变化/失败风险——回答"你会失去什么" |
| Revocation | 中级 | 所有自动化权限都应有用户可见的关闭入口；系统也可自动收紧 |
| Human Check | 初级 | 不是全手动确认，而是关键风险点让用户看懂并决定 |

### **典型链路**

用户目标 → Agent 读上下文+生成计划 → 系统转受限交易 → Guard+simulation 检查 → 用户确认 → Smart Account/Safe 执行 → 日志记录

### **💡 交叉感悟**

对照 Hermes Agent 的 `terminal` 工具——目前它基本上就是"万能 EOA"，没有 Guard、没有 Policy、没有 Session Key 的概念。如果我要做一个链上 Agent，第一步不是"连钱包"，而是"设计权限边界"。从 Smart Account + Session Key 的思路出发比直接用 EOA 私钥安全得多。

**Simulation 的翻译思路特别好**：不是问"交易能不能发"，而是"这笔交易会让用户失去什么、得到什么、承担什么风险"。这才是用户确认时真正需要理解的信息。

* * *

## **五、Machine Payment（机器支付）**

**一句话**：Machine Payment 不是"AI 会花钱"，而是让机器之间的支付可限制、可验证、可追踪。

### **第一性原理**

> Agent 不应该拥有无限支付能力，只应该拿到具体任务、预算和收款方范围内的支付权限。

### **知识节点速记**

| 节点 | 难度 | 关键记忆点 |
| --- | --- | --- |
| Stablecoin Payment | 初级 | 稳定币=计价单位；仍需处理 chain id/token address/decimals/allowance/gas；approve 是高风险动作 |
| Budget | 初级 | 多层预算：全局/任务/单次上限/服务方上限/紧急停止；设频率和范围，不设总额度 |
| Quote | 中级 | 合格 quote 含：服务内容/价格/币种/收款地址/有效期/退款条件/quote id；过期不可用 |
| Payment Intent | 中级 | "用户授权这类付款"≠"交易已发生"；绑定目标/金额/收款方/有效期/quote引用 |
| x402 | 中级 | HTTP 402 → 互联网原生支付：请求→付款要求→付款→重放；只解决付款协议部分 |
| MPP | 中级 | 机器对机器：发现/报价/授权/结算/收据；链下协商+链上结算 |
| Subscription | 中级 | 订阅+智能账户 policy：月上限/白名单/扣款窗口/异常告警；避免静默续费 |
| Micropayment | 高级 | 先算经济账：单次价值 vs 链上手续费；适合批量结算/L2/payment channel |

### **💡 交叉感悟**

x402 的设计特别优雅——把"付费才能访问资源"放回 HTTP 语义里，Agent 处理 402 就像处理 401（登录）一样自然。不过文中也点出了它的局限：不解决服务质量、退款、交付争议。

MPP 的"机器之间怎么谈生意"是个很有意思的框架：发现→报价→授权→结算→收据。如果把这个协议化，Agent 就不用每次临时拼流程了。

* * *

## **六、AI Security（AI 安全）—— 前沿探索章节**

**一句话**：AI x Web3 的安全核心，是让不可信输入无法直接变成不受限执行。

### **知识节点速记**

| 节点 | 难度 | 关键记忆点 |
| --- | --- | --- |
| Prompt Injection | 中级 | 可能藏在合约README/网页/token metadata/API返回中；分层标注上下文可信级别 |
| Tool Abuse | 高级 | 反复调用付费API/生成无限授权/循环消耗预算——靠 permission/rate limit/budget/human check |
| Malicious Context | 中级 | 错误事实也是攻击：假合约地址/伪造审计/过期价格/被污染 metadata |
| Key Safety | 高级 | secret 不进 prompt、不进输出、不进日志、不进 analytics |
| Permission Isolation | 高级 | 越靠近资产工具接口越窄；最安全工具=刚好完成任务且无法越界 |
| Sandbox | 中级 | 默认禁止访问 .env/ssh key/wallet seed/cookie；浏览器 sandbox ≠ 钱包签名权限 |
| Audit Log | 初级 | 完整链路：模型看什么→为什么选某工具→工具返回什么→policy→用户确认 |
| Alert | 中级 | 异常→响应动作：暂停Agent/撤销session key/冻结escrow/通知用户 |

* * *

## **🧩 Bridge 层整体框架**

读完全部 5 个核心章节后，Bridge 层的关系变得清晰：

```
Chain-aware Context（输入层）
       ↓ 提供"链上事实"
Web3 Tool Use（能力层）
       ↓ 提供"读写工具"
Agent Workflow（流程层）
       ↓ 组织成"可控步骤"
Agent Wallet（权限层）
       ↓ 定义"行动边界"
Machine Payment（支付层）
       ↓ 实现"机器结算"
```

每一层的安全设计原则一致：**概率模型放确定边界里，不可信输入不能变成不受限执行**。

* * *

## **🤔 今日踩坑 & 思考**

### **踩坑**

1.  [**aiweb3.school**](http://aiweb3.school) **连接不稳定**：`/bridge/machine-payment/` 用 curl 反复超时（exit code 28），换浏览器才成功。`/bridge/ai-security/` 在 Bridge 目录下 404，实际在前沿探索下。网站结构有 inconsistency。
    
2.  **Bridge 目录结构 vs 学习计划**：[learning-plan.md](http://learning-plan.md) 里 Week 2 列了 5 个 Bridge 核心 + 方向选择。但实际 Bridge 目录有更多章节（Settlement & Escrow、Agent Identity、Agent Trust & Reputation、AI Oracle、Verifiable AI 等），这些是 Week 3 深化内容。
    

### **关键思考**

1.  **"能调用 ≠ 应该调用"**——这是整个 Bridge 层反复出现的主题。从 Tool Use 到 Wallet 到 Payment，都在强调：能力必须被约束。
    
2.  **Hermes Agent 作为实践对照**：Hermes 目前的工具设计（terminal/browser/file）本质上是"万能工具"，没有按 Web3 的读写分离/Policy/Guard 模式做权限分级。如果要把它改造成链上 Agent，需要：
    
    -   terminal 拆分为 read-only（ls/cat/curl）和 write（rm/mv/write）
        
    -   新增 wallet tool + guard + simulation
        
    -   新增 session key + budget policy
        
3.  **Regression Set 的价值被低估**：不只是测试"能不能做"，更关键是测"会不会在不该做的时候做了"。
<!-- DAILY_CHECKIN_2026-05-25_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->


















## **📖 Vibe Coding — 氛围编程**

> 来源：[https://aiweb3.school/zh/handbook/ai/vibe-coding/](https://aiweb3.school/zh/handbook/ai/vibe-coding/)

### **核心定位**

Vibe Coding 不是"把需求丢给 AI 然后等代码出现"。更准确地说，它是一种**人和 AI Coding Agent 共同迭代软件的工作方式**：人负责方向、约束和验收，Agent 负责生成、修改、搜索和执行一部分工程动作。

### **为什么要学这个**

AI Coding Agent 已经能读代码、改文件、跑测试、解释错误、生成 PR。速度变快之后，真正的问题变成：

-   你能不能**清楚描述任务**？
    
-   你能不能**审查结果**？
    
-   你能不能**控制改动范围**？
    
-   你能不能**验证没有引入新 bug**？
    

Vibe Coding 最容易被误解成"凭感觉写代码"。实际可用的做法正好相反：**你要更清楚地管理 repo、任务、上下文、测试和提交边界。**

> AI 能帮你写更多代码，但不能替你承担工程判断。

### **第一性原理**

AI Coding 的核心不是自动生成代码，而是**把工程反馈循环压短**。

过去：自己搜索文件 → 理解模块 → 改代码 → 跑测试 → 看错误 → 再修改。现在 Agent 可以并行承担很多步骤。但如果反馈循环里没有测试、审查和版本控制，速度只会放大混乱。

三条原则：

1.  **任务要小** — 越具体、越有边界，Agent 越容易产出可审查结果
    
2.  **上下文要准** — 让 Agent 看对文件、设计约束和错误输出，比写长篇需求更重要
    
3.  **验证要硬** — 运行测试、类型检查、构建、截图或日志，比"看起来对"可靠
    

### **知识节点**

**1\. Vibe Coding（难度：初级）**

人和 AI Coding Agent 的分工：

-   **人负责**：目标、边界和验收
    
-   **Agent 负责**：搜索、生成、修改和执行
    

Vibe Coding 是一种快速和 AI 共同探索代码的方式。先描述目标 → Agent 生成方案或 patch → 运行、检查、追问、迭代收敛。

适合场景：

-   搭原型
    
-   修小 bug
    
-   补测试
    
-   写脚本
    
-   重构局部模块
    
-   解释陌生代码
    

**不适合**无边界地"重写整个项目"——如果任务范围太大，Agent 很容易改到不该改的地方，或引入看似合理但不符合项目约束的抽象。

**2\. Claude Code / Codex CLI（难度：初级）**

重点不是背命令，而是学会**把 AI Agent 安全地接入本地 repo、终端和测试流程**。

这类工具的关键价值不是"聊天"，而是能在 repo 里行动。正因为它能行动，你需要明确：

-   哪些文件可以改
    
-   哪些命令可以跑
    
-   是否允许安装依赖
    
-   是否允许访问网络
    
-   什么时候必须停下来让人确认
    

相关工具：

-   Claude Code Docs：了解 Claude Code 的本地开发工作流
    
-   OpenAI Codex CLI Help：了解 Codex CLI 的基础使用方式
    

**3\. Model / API Config（难度：中级）**

这一层要处理模型选择、API key、工具权限、上下文、成本和日志，不只是"能不能调用成功"。

常见问题：

-   本地和 CI 用的模型不一致
    
-   API key 泄漏到日志或提交里
    
-   上下文太长导致成本失控
    
-   Agent 使用了不合适的工具权限
    
-   输出风格和项目规范不一致
    

好的配置应该能被团队复用，而不是每个人在本机随手调。

**OpenCLI** 值得关注：把网站、浏览器会话、Electron 应用和本地二进制工具统一成可被命令行调用的接口，让 AI Agent 可以通过更稳定的命令去发现、学习和执行工具。它还可以复用本地浏览器登录态，并把 gh、docker 等本地 CLI 暴露到同一个工具入口里。

这类工具的价值不在于"又多一个 AI 编程产品"，而在于把 Agent 可调用的外部能力变得更清楚：有哪些命令、需要什么权限、输出格式是什么、失败时怎么诊断。

**4\. GitHub / gh（难度：中级）**

你需要把 AI 生成的改动放回版本控制、issue、PR 和 review 流程里，而不是只看一次聊天输出。

实用原则：**让 Agent 多做局部 patch，少做不可追踪的大改动。**

每次改动后至少看：

-   `git diff`
    
-   修改文件列表
    
-   测试结果
    
-   是否包含不该提交的密钥、日志、构建产物
    

**5\. CLI / Script（难度：中级）**

这一层开始把 Agent 输出变成真实命令和脚本，所以要特别关注**读写范围、dry run 和外部副作用**。

很多开发任务不需要完整应用界面，先写 CLI 或脚本更快。Agent 很适合帮你生成一次性脚本、数据迁移脚本、检查脚本和批量修改脚本。

脚本的两个边界：

1.  读写文件前要确认范围
    
2.  会修改外部状态的脚本要先 dry run
    

如果脚本会删文件、发请求、改数据库、提交交易或调用生产 API，就不能只靠 Agent 判断。

**6\. Repo Workflow（难度：高级）**

你要把 AI Coding 接进完整工程流程，并能判断**什么时候应该让 Agent 继续，什么时候必须由人停下来审查**。

Repo Workflow 是把 AI Coding 放进正常工程流程：issue → branch → commit → test → review → merge → release。

不要让 AI 绕过这些流程。更好的方式是让它参与这些流程：

-   从 issue 提炼任务边界
    
-   搜索相关文件
    
-   生成最小 patch
    
-   跑测试并解释失败
    
-   补充 changelog 或文档
    
-   写 PR summary 和验证说明
    

> AI Coding 的质量，最终还是要落到 repo workflow 里。

### **在 AI × Web3 中的位置**

AI × Web3 项目通常同时有前端、合约、脚本、索引器、Agent 后端和文档。Vibe Coding 可以显著加快探索速度，尤其适合 hackathon 和早期原型。

但**链上相关代码的风险更高**。合约、签名、权限、支付、迁移脚本不能只靠 Agent 生成后直接上线。AI Coding 可以帮你写测试、解释 ABI、生成脚本，但高风险动作必须经过审查、模拟和多方确认。

### **最小实践**

选择一个小功能，让 AI Coding Agent 完成一轮完整工程闭环：

1.  写清楚任务边界和不能改的文件
    
2.  让 Agent 搜索相关代码并给出计划
    
3.  让 Agent 做最小 patch
    
4.  运行测试或构建
    
5.  查看 git diff，手动审查结果
    
6.  要求 Agent 写一段 PR summary 和验证说明
    

完成后记录：哪些信息给少了，哪些测试缺失，哪些改动需要人类判断。

### **挑战**

在自己的电脑上安装并配置至少一个 Vibe Coding 工具（例如 Claude Code、Codex CLI 或 OpenCLI），并确认它能在一个测试 repo 中正常使用。

完成标准：

-   能启动工具并读取当前项目
    
-   已配置必要的模型、API key、浏览器桥接或本地工具权限
    
-   能让工具完成一个只读任务（解释目录结构、搜索相关文件、总结某段代码）
    
-   能让工具完成一个低风险小改动（补一段注释、生成一个脚本、修改一处测试）
    
-   保留验证记录：工具版本、配置方式、执行命令、关键输出或截图
    

* * *

## **💡 个人思考**

### **与 Hermes Agent 的对照**

自己正在使用的 Hermes Agent 就是 Vibe Coding 的一种实践：

-   **人负责方向和验收** — 我指定学习目标和提交任务，Agent 执行具体步骤
    
-   **Agent 负责搜索和生成** — 抓取网页、解析内容、写入笔记、调用 API
    
-   **验证要硬** — 每次都 git diff + push，API 结果写文件再解析
    
-   **任务要小** — 一次一个章节学习，而非"一次搞定所有"
    

### **Vibe Coding 的"反直觉"点**

1.  **Vibe Coding 不凭感觉** — 越是"氛围"，越需要明确的边界
    
2.  **速度加快后，审查更重要** — 不是省掉审查，而是审查频率要跟上速度
    
3.  **Agent 不是替代判断，而是放大判断** — 好的判断被放大为好的代码，草率的判断被放大为草率的代码
    

### **Web3 场景的特殊风险**

合约、签名、支付相关代码 — Agent 可以辅助生成，但必须：

-   在测试网先验证
    
-   经过多方 review
    
-   模拟边界情况
    
-   不能"看起来对"就上线
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->



















## **📖 MCP — 模型上下文协议**

> 来源：[https://aiweb3.school/zh/handbook/ai/mcp/](https://aiweb3.school/zh/handbook/ai/mcp/)

### **核心定位**

MCP 试图把模型和外部工具、数据源、应用上下文之间的连接标准化。它解决的不是"模型会不会更聪明"，而是"模型如何以可描述、可复用、可管理的方式使用外部能力"。

可以理解为 AI 应用的"工具接口标准"：客户端负责和模型交互，server 负责暴露资源、工具和 prompts。

### **第一性原则**

模型不应该直接拥有世界；它应该通过明确协议访问被授权的上下文和工具。

MCP 的关键不是"能接更多工具"，而是让工具接入变得**可描述、可发现、可限制**。

三条原则：

1.  **工具要有 schema** — 没有 schema，模型调用工具就会变成自然语言猜参数
    
2.  **权限要在协议外也成立** — 协议能描述能力，但真正的授权、审计和隔离仍要由系统实现
    
3.  **错误要可传递** — 工具失败、超时、权限不足，必须明确返回，而不是让模型猜
    

### **知识节点**

**Server**

-   MCP Server 是提供能力的一侧，暴露 resources、tools、prompts
    
-   设计重点是**边界**：
    
    -   暴露哪些资源
        
    -   哪些工具只读，哪些有副作用
        
    -   参数 schema 是否清楚
        
    -   错误如何返回
        
    -   是否需要用户授权
        
    -   日志和审计在哪里记录
        
-   一个不加限制的 MCP server，很容易把本地文件、内部 API 或高风险动作暴露给模型
    

**Client**

-   MCP Client 连接模型和 server（桌面应用、IDE、Agent runtime、聊天客户端）
    
-   负责发现 server 能力、把工具信息交给模型、把模型调用请求转回协议消息
    
-   也应负责用户确认、权限提示、会话隔离和工具调用展示
    
-   判断 client 靠不靠谱：是否让用户知道连接了哪些 server、模型能调用哪些工具、调用前是否需要确认
    

**Tool Schema**

-   描述工具名字、用途、参数、返回值和约束
    
-   好的 schema 不只是字段类型，还要说明：
    
    -   这个工具什么时候用
        
    -   参数代表什么
        
    -   哪些字段必填
        
    -   是否会修改外部状态
        
    -   失败时返回什么
        
-   Schema 写得模糊，模型就会用错误参数填空
    
-   **关联**：工具描述本质上也是 prompt 的一部分；Agent 的工具调用能力必须和状态、权限、停止条件一起设计
    

**Permission**

-   MCP 真正进入产品时最容易被低估的问题
    
-   方便 ≠ 安全。读文档、查 issue、创建 PR、发支付、删文件，风险完全不同
    
-   Permission 至少要区分：
    
    -   只读还是写入
        
    -   当前会话授权还是长期授权
        
    -   是否需要用户确认
        
    -   是否能访问敏感信息
        
    -   是否会产生外部副作用
        
    -   是否可撤销和审计
        
-   **Server 暴露能力之前，应该先定义权限模型**
    

### **在 AI × Web3 中的位置**

MCP 可以作为 Agent 连接链上工具和开发工具的接口层：

-   读取区块浏览器、查询合约文档、调用 RPC、生成交易草稿、读取项目 issue
    

但 MCP 本身**不是钱包安全方案**。它可以标准化工具入口，不能替代账户权限、交易模拟、签名确认、session key 和审计日志。

**比较稳的设计**：MCP 负责工具发现和调用格式；Web3 账户系统负责最终权限和执行边界。

### **最小实践**

做一个只读 MCP server，暴露两个工具：

1.  `search_docs(query)` — 搜索本地项目文档
    
2.  `get_file(path)` — 读取白名单目录里的文件
    

要求：

-   不能读取白名单外路径
    
-   返回结果必须带来源路径
    
-   工具调用要写日志
    
-   错误要明确返回
    

完成后，再设计"写入工具"的权限升级方案：什么时候需要用户确认、如何撤销授权、如何审计。

### **💭 个人思考**

-   MCP 本质是 AI 世界的"API 标准化"，类似 Web3 里 ERC 标准化合约接口的思路。一边是让工具可组合，一边是让合约可组合，背后都是**可描述、可发现、可限制**
    
-   Permission 部分让我想到 Agent 章节里的"工具比回答更危险"。MCP 让接入更方便，但方便的接入如果没有权限模型，反而放大了风险
    
-   **实际体验关联**：我正在用的 Hermes Agent 就内置了 native MCP client（在 skills 里看到 `native-mcp` skill）。它通过 MCP 协议连接外部服务器，自动发现工具，用户在 config.yaml 里配置服务器。这恰好就是 Client 端的实现——连接 server、发现能力、把工具交给模型
    
-   MCP + Web3 的关键洞见：MCP 管"发现和调用格式"，Web3 账户系统管"最终权限和执行边界"。两层分离，不要让 MCP 管钱
    

* * *

## **📖 Network — 网络**

> 来源：[https://aiweb3.school/zh/handbook/web3/network/](https://aiweb3.school/zh/handbook/web3/network/)

### **核心定位**

Web3 里的"网络"不是抽象背景，而是交易能否被打包、状态能否被同步、费用如何产生、确认需要多久、L2 和主网如何分工的**基础环境**。

链上应用不是直接写数据库，而是在一个公开、按区块推进、由网络共识维护的状态机上提交请求。

### **第一性原则**

区块链网络的核心不是"存数据"，而是让互不信任的参与者对状态变化达成一致。

普通应用里服务器可以直接更新数据库；链上系统里，交易要被节点传播、执行、打包、验证和确认。这个过程带来公开可验证性，也带来延迟、费用和最终性问题。

三条原则：

1.  **区块是同步节奏** — 状态不是每毫秒连续更新，而是按区块批量推进
    
2.  **共识是信任来源** — 用户相信状态不是因为某家公司说了算，而是因为网络按规则达成一致
    
3.  **网络选择会改变体验** — 主网、测试网、L2 的费用、速度、安全假设和工具支持都不同
    

### **知识节点**

**Block（初级）**

-   区块是交易被批量提交和排序的单位
    
-   包含：交易列表、前一区块引用、状态根、时间戳、gas 使用情况、共识相关信息
    
-   重点关注三件事：
    
    1.  交易有顺序，顺序会影响结果
        
    2.  区块有 gas limit，网络吞吐不是无限的
        
    3.  新区块引用前一区块，形成可验证历史
        

**Consensus（中级）**

-   共识是网络决定"哪段历史有效"的机制
    
-   对应用开发者的影响：
    
    1.  交易需要等几个 confirmation 才算安全
        
    2.  区块可能短暂重组，前端不能过早假设最终结果
        
    3.  节点故障或 RPC 异常时，状态读取可能延迟
        

**PoS（中级）**

-   以太坊当前使用 Proof of Stake
    
-   验证者质押 ETH 参与区块提议和证明，行为错误被惩罚（slashing）
    
-   网络安全来自经济质押、客户端实现和节点参与
    
-   解释了区块时间、最终性、验证者、质押、slashing 这些概念
    

**Testnet（初级）**

-   测试网用于在接近真实链的环境里测试合约、前端和交易流程
    
-   Testnet 资产没有真实经济价值，但能验证部署脚本、钱包连接、RPC 配置等
    
-   **测试网不能替代主网安全审查**：流动性、MEV、攻击动机、资产规模和用户行为都不同
    
-   做项目时至少记录：
    
    1.  部署在哪条测试网
        
    2.  合约地址和部署交易
        
    3.  使用哪个 RPC
        
    4.  前端如何切换 chain id
        
    5.  测试资产从哪里获取
        

**L2（中级）**

-   在主网安全和更低成本之间做扩展的网络层
    
-   大量交易放到主网之外执行，结果/证明提交回主网
    
-   优势：费用更低、确认更快
    
-   复杂性：桥、提现等待、排序器、跨链状态同步
    
-   **产品设计不能只写"支持 Ethereum"**：要清楚展示当前网络、资产在哪条链、桥接需要多久、合约地址是否不同
    

**Rollup（高级）**

-   主流 L2 扩展路线，执行搬到链下/L2，数据和结果提交到 L1
    
-   两种类型：Optimistic Rollup（欺诈证明）和 ZK Rollup（零知识证明）
    
-   差异：证明方式、提现延迟、数据可用性、开发体验、生态工具
    
-   **关键判断**：Rollup 降低了单笔交易成本，但没有消除链上系统复杂度。跨链资产、RPC、浏览器、合约地址、桥接风险和用户确认，仍然要处理
    

### **在 AI × Web3 中的位置**

AI Agent 读取链上状态或执行交易时，**必须知道自己在哪条网络上操作**。主网和测试网、L1 和 L2、不同 chain id、不同合约地址，不能靠模型"猜"。

更稳妥的做法：让工具返回**结构化网络信息**——chain id、RPC 来源、区块高度、交易哈希、确认数、explorer 链接。Agent 的总结应该引用这些可验证信息，而不是只说"交易成功了"。

### **最小实践**

做一笔测试网交易追踪：

1.  在测试网领取少量测试 ETH
    
2.  用测试钱包发送一笔转账或调用一个简单合约
    
3.  在区块浏览器里查看交易状态、区块号、gas used、from、to 和 logs
    
4.  记录交易从 pending 到 confirmed 用了多久
    
5.  切换到另一条网络，观察同一个地址的余额和交易历史是否不同
    

完成后写下：如果这个流程由 AI Agent 辅助，哪些字段必须由工具读取，哪些描述可以由模型生成。

### **💭 个人思考**

-   Network 章节把"链上应用不是直接写数据库"这个本质讲得非常清楚。交易签名 → RPC → mempool → 区块 → 共识 → 执行 → 确认 → 索引 → 浏览器，这条链路对理解 Web3 所有上层问题都至关重要
    
-   **和前几天的知识串联**：
    
    -   Wallet 章节的"签名入口"，在这里变成了交易链路的起点
        
    -   Transaction & Gas 章节的"gas 机制"，在这里变成了区块 gas limit 的约束
        
    -   Smart Contract 章节的"合约执行"，在这里变成了区块内交易按序执行后的状态更新
        
-   Testnet 不能替代主网安全审查这个观点很重要。测试网验证的是**流程正确性**，不是**经济安全性**
    
-   AI Agent 必须知道自己在哪条网络——这和 MCP 章节的"Tool Schema 必须明确"直接呼应。网络信息就是 Agent 调用链上工具时最关键的 schema 字段之一
    
-   L2/Rollup 的复杂性让我意识到：AI Agent 如果要支持多链操作，不能只是"切换 network"，还要理解桥接时间、排序器风险、提现延迟等差异。这些信息必须通过工具结构化返回，不能靠模型"猜"
    

* * *

## **🔗 交叉感悟：MCP × Network**

今天的两个章节有一个非常自然的交叉点：

**MCP 定义了"工具怎么被描述和调用"，Network 定义了"链上工具必须区分哪些网络环境"。**

结合起来就是：

-   MCP 的 Tool Schema 应该包含网络信息字段（chain id、RPC 来源等）
    
-   MCP 的 Permission 模型需要区分主网 vs 测试网的授权级别
    
-   Agent 通过 MCP 调用链上工具时，返回的结果应该是结构化的网络信息，而不是模糊的文字描述
    

这正是 handbook 反复强调的思路：**MCP 管工具发现和调用格式，Web3 账户系统管最终权限和执行边界**。网络信息是两者之间的桥梁。
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->




















## **📖 Agent — 智能体**

> 来源：[https://aiweb3.school/zh/handbook/ai/agent/](https://aiweb3.school/zh/handbook/ai/agent/)

### **核心定位**

Agent 是能围绕目标持续调用工具、读取状态、调整步骤的 AI 系统。关键不在"像人"，而在于能不能在明确权限和可审计流程里，把建议推进到行动。

### **第一性原则**

Agent 不是自主权本身，而是被约束的执行循环。目标、工具、状态、权限和停止条件缺一不可。

三条原则：

1.  **工具比回答更危险** — 读数据、写数据库、发送请求、改配置不是同一风险等级
    
2.  **状态必须外置和可查** — 任务进度、工具结果、失败原因、用户确认都要记录，不应只藏在模型上下文里
    
3.  **停止条件要明确** — 达到目标、超出预算、信息不足、风险越界、用户拒绝，都应该让 Agent 停下来
    

### **知识节点**

**Tool Use**

-   Agent 调用外部能力：搜索、数据库、API、代码执行、邮件、支付接口等
    
-   工具让 Agent 从"会回答"变成"能做事"，但也让 Prompt Injection 和误判更危险
    
-   一个能读网页的 Agent 被恶意网页影响 vs 一个能写入系统的 Agent 被恶意网页影响 — 后果完全不同
    
-   工具设计要明确：输入 schema、权限范围、是否只读、是否产生外部副作用、调用前后如何记录、哪些需要人工确认
    

**Planning**

-   把目标拆成步骤，计划是候选路线，不是授权
    
-   越靠近高风险动作，计划越需要被系统规则拆开检查
    
-   好的 Agent plan 应暴露：每步需要什么工具、读还是写、哪些可自动执行、哪些需确认、失败可否重试、如何验证完成
    

**State**

-   Agent 当前任务状态：用户目标、已完成步骤、工具返回、错误、预算、确认记录和最终输出
    
-   ⚠️ 很多 Demo 把 state 只放在 prompt 历史里，这不够 — 生产系统需要可查询、可恢复、可审计的 state
    
-   否则很难回答：Agent 为什么调用了这个工具？是否拿到用户确认？哪一步开始偏离目标？
    

**Reflection**

-   Agent 检查自己的中间结果并修正下一步
    
-   适合提升复杂任务质量，但**不能替代外部验证**
    
-   模型可能给自己的错误找理由 — 写入/授权/支付动作，reflection 只能辅助诊断，不能做最终安全判断
    
-   自我检查可以提高质量，确定性检查才能承载风险
    

**Multi-Agent**

-   多个 Agent 分工协作：研究 Agent 读资料，开发 Agent 写代码，安全 Agent 做审查，执行 Agent 调用工具
    
-   ⚠️ 会放大协调问题：上下文传递丢失、责任边界模糊、一个 Agent 的错误被另一个 Agent 当成事实、工具权限扩散
    
-   先问朴素问题：多个 Agent 是否真的减少复杂度？如果只是把不清楚的流程拆成多个不清楚的角色，系统更难调试
    

### **Agent 在 AI × Web3 中的位置**

Agent 位在模型能力和链上执行之间，可以把用户目标推进成多步流程，但不能绕过账户、权限和结算规则。

一个相对稳的 AI × Web3 Agent 架构：

1.  用户提出目标和约束
    
2.  Agent 读取上下文并生成计划
    
3.  系统把计划拆成只读步骤和候选写入步骤
    
4.  只读工具自动执行，写入工具进入 policy 检查
    
5.  Simulation 展示链上影响
    
6.  用户确认高风险动作
    
7.  Wallet / Smart Account 执行
    
8.  日志记录每一步和最终状态
    

> 最危险的设计：让 Agent 同时拥有模糊目标、广泛工具、长期记忆和大额资产权限。

### **最小实践：DAO 提案研究 Agent（只读版）**

它只能执行只读动作：

-   读取提案正文
    
-   检索论坛讨论
    
-   总结支持和反对理由
    
-   标记缺失信息
    
-   输出投票前检查清单
    

不要让它直接投票。输出里明确：用了哪些来源、哪些结论证据不足、是否发现治理或资金风险、如果要投票还需人工检查什么。

权限升级版：只有当用户明确授权，并经过投票交易 simulation 后，系统才允许生成投票交易草稿。

* * *

## **💡 个人收获（Agent）**

-   Agent 的本质是"被约束的执行循环"——这个定义比"自主决策系统"更精准，也更有工程价值
    
-   State 外置化和可审计是关键——Hermes Agent 的 memory/skill/context 三层结构其实就是一种 state 分层：memory 是跨会话持久状态，skill 是过程知识，context 是当前任务状态
    
-   Reflection 不能替代外部验证——"自我检查提高质量，确定性检查承载风险"这句话很到位，对应到 Web3 就是 simulation 不能替代多签确认
    
-   Multi-Agent 的"朴素问题"值得反复问——我日常用 Hermes 的 delegate\_task 就是一种 Multi-Agent，确实遇到过上下文传递丢失的问题
    

## **❓ 待深入**

-   Agent 的 Planning 在实际项目中的拆解策略（和 Hermes 的 plan skill 对比）
    
-   Tool Use 的权限分层具体实现方案（只读/写入/需确认三级）
    
-   Multi-Agent 之间的上下文传递最佳实践
    

* * *

## **📖 Smart Contract — 智能合约**

> 来源：[https://aiweb3.school/zh/handbook/web3/smart-contract/](https://aiweb3.school/zh/handbook/web3/smart-contract/)

### **核心定位**

智能合约不是"自动执行的法律合同"，而是部署在链上的程序。它把规则、资产和状态放到公开可验证的执行环境里，也把错误、权限和升级风险暴露给所有人。

### **第一性原则**

合约的价值来自可验证执行，不来自"代码看起来很聪明"。

三条原则：

1.  **状态公开可查** — 链上状态不是私有数据库字段，很多信息会被所有人看到
    
2.  **调用有成本和顺序** — 每次执行都受 gas、区块顺序和外部状态影响
    
3.  **权限必须显式** — 谁能 mint、pause、upgrade、withdraw，不能靠默认信任
    

### **知识节点**

**Solidity**

-   EVM 生态最常见的合约语言
    
-   关键不是语法，而是 storage、msg.sender、modifier、event、external call、revert 和权限控制这些链上特有概念
    
-   最小合约示例：Counter 合约 — count 是链上状态，increment() 是写操作需签名+gas，event 是外部可索引日志
    
-   前端读取 count() 不需要签名，调用 increment() 需要钱包签名并支付 gas
    

**EVM**

-   合约执行环境，决定代码如何部署、调用、计费和隔离
    
-   Solidity 编译成 EVM 字节码，部署到链上由节点执行
    
-   解释了：为什么要 gas、为什么 storage 贵、为什么外部调用有风险、为什么合约能部署到多条 EVM 链
    

**ABI**

-   合约的机器可读接口说明：有哪些函数、参数、返回值和事件
    
-   前端 SDK、脚本、区块浏览器和 AI 工具都通过 ABI 理解如何编码调用数据、解码返回结果
    
-   ⚠️ ABI 是 Agent 理解合约能力的重要上下文，但只告诉"能调用什么"，不保证"调用是否安全"
    
-   ABI 不会告诉你：to 是否恶意、amount 单位是否正确、是否触发外部合约、余额是否足够、函数是否被暂停
    

**Event**

-   合约向外部系统留下的可索引日志
    
-   事件不会成为合约可读取状态，但适合让外部系统追踪"发生过什么"
    
-   前端订单列表、用户历史、数据看板往往通过索引事件构建，不是逐条读 storage
    
-   例：NFT marketplace 发出 OrderCreated / OrderCancelled / OrderFilled
    

**Upgrade**

-   合约升级是安全、治理和产品迭代之间的权衡
    
-   不可升级更接近"规则固定"，但 bug 修复困难；可升级更灵活，但引入管理员权限、治理攻击和用户信任问题
    
-   判断升级风险四问：
    
    1.  升级权限在谁手里（单签/多签/DAO/timelock）？
        
    2.  用户能否提前看到升级提案和新实现地址？
        
    3.  升级能否改变资产转移、提款、暂停或权限逻辑？
        
    4.  管理员密钥泄漏最坏结果是什么？
        
-   ⚠️ "合约已审计"但不说明升级权限 — 安全说明仍然不完整
    

### **一个调用流程怎么发生**

以"用户点击投票按钮"为例：

1.  前端读取钱包地址和当前网络
    
2.  根据 ABI 编码 vote(proposalId) 调用数据
    
3.  钱包展示交易信息，用户确认签名
    
4.  交易广播到 RPC 节点
    
5.  验证者把交易打包进区块
    
6.  EVM 执行合约逻辑 — 成功则更新状态并发出 event，失败则 revert
    
7.  前端监听交易回执，更新页面状态
    
8.  索引器读取 event，更新历史记录或看板
    

> 合约开发不能只看 Solidity 文件 — 要同时理解钱包、RPC、区块浏览器、前端 SDK、event 和索引层。

### **常见错误**

-   把 view 函数和写交易混在一起：读取不需要签名，改变状态需要交易
    
-   没有处理 decimals：token amount 不是人类看到的"1.5"，而是按 decimals 放大的整数
    
-   只测成功路径：权限失败、余额不足、重复调用、过期时间、暂停状态都要测
    
-   把 owner 当成永远可信：owner 权限太大时，用户实际是在信任管理员
    
-   忽略事件设计：没有事件，后续做前端历史、索引和审计会困难很多
    

### **Smart Contract 在 AI × Web3 中的位置**

智能合约应承担最终规则和约束，而不是把所有判断交给模型。

稳架构：**AI 做建议和编排，钱包做授权确认，合约做可验证执行，监控系统记录结果。**

即使 AI 输出不稳定，链上规则仍然有明确边界。

### **最小实践：合约阅读练习**

找一个已验证源码的简单 ERC-20 或 NFT 合约：

1.  在区块浏览器查看源码、ABI、事件和最近交易
    
2.  找出哪些函数改变状态，哪些只是读取
    
3.  找出权限函数（owner、admin、pause、mint、burn、upgrade）
    
4.  找出最重要的 event，解释它对应哪类用户动作
    
5.  用一句话解释：这个合约最重要的风险边界是什么
    

* * *

## **💡 今日收获汇总**

**AI 侧（Agent）**：Agent = 被约束的执行循环。State 必须外置可审计，Reflection 不能替代外部验证，Planning 是候选路线不是授权。最危险的设计是模糊目标 + 广泛工具 + 长期记忆 + 大额资产权限。

**Web3 侧（Smart Contract）**：合约 = 部署在链上的程序。价值来自可验证执行，不是代码聪明。ABI 是机器接口不是安全说明书，Upgrade 四问不能省，前端状态往往来自 event 索引而非直接读 storage。

**交叉感悟**：Agent 和 Smart Contract 在 AI × Web3 中是**互补的执行层** — Agent 负责灵活推理和编排，合约负责固定规则和可验证边界。两者共同的原则是：

-   **权限必须显式** — Agent 的 tool use 需要权限分级（只读/写入/需确认），合约的函数需要 modifier 和 access control，本质一样
    
-   **State 必须可查** — Agent 的 state 不应只藏在 prompt 里，合约的 state 天然公开可查——链上状态其实是"state 外置化"的终极形态
    
-   **执行需要审计** — Agent 的日志记录每一步，合约的 event 记录每次状态变化——两种审计机制对应不同层级的可信度需求
    

一句话：**Agent 是"会思考但必须被管住"的执行者，合约是"不会思考但规则透明"的执行者。AI × Web3 的关键设计就是把两者放在正确的位置上** — 让 Agent 处理需要灵活性的部分，让合约守住不能出错的边界。

## **❓ 待深入**

-   Agent Planning 的实际拆解策略（对比 Hermes plan skill）
    
-   Tool Use 权限分层具体实现（只读/写入/需确认三级）
    
-   找一个已验证合约做最小实践（合约阅读练习）
    
-   Upgrade proxy 模式的具体技术实现（proxy vs implementation 合约）
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->





















## **📖 Context — 上下文**

> 来源：[https://aiweb3.school/zh/handbook/ai/context/](https://aiweb3.school/zh/handbook/ai/context/)

### **核心定位**

Context 是模型这一次能看到、能使用、能被影响的信息空间。真正难的不是把更多内容塞进去，而是把系统规则、用户目标、历史状态、工具结果和外部文档分清楚。

### **第一性原则**

模型只能基于它看见的上下文行动；系统必须决定什么能进上下文、带着什么身份进去、过期后怎么退出。

三条原则：

1.  **可信来源要显式标注** — 系统状态、用户输入、检索文档、工具结果要分区放置
    
2.  **上下文要可刷新** — 状态、配置、权限、价格、版本和任务进度不能长期缓存后继续使用
    
3.  **记忆要可撤销** — 用户偏好和历史任务可以提升体验，但不能变成隐藏权限或永久身份假设
    

### **知识节点**

**Context Window**

-   模型一次请求能处理的最大上下文范围
    
-   窗口越大 ≠ 模型会完美使用每个细节
    
-   ⚠️ 长上下文常见问题：看见了但没抓住重点，被无关内容分散注意力，引用过期段落
    
-   正确用法：关键状态直接给，长文档按需取，低可信内容隔离标注
    

**Context Engineering**

-   设计上下文进入模型的方式：选择数据源、排序、裁剪、标注来源、隔离不可信内容、决定哪些必须每次重新查询
    
-   一个稳定的工具型 Agent 上下文应包括：
    
    1.  当前任务状态
        
    2.  工具返回结果
        
    3.  相关日志或证据
        
    4.  可信数据来源
        
    5.  外部检查结果
        
    6.  用户原始意图
        
    7.  系统禁止事项和输出 schema
        
-   **目标不是塞满窗口，而是让模型在正确的信息层级里工作**
    

**Memory**

-   跨请求保留的信息：用户偏好、历史任务、常用钱包、项目配置
    
-   ⚠️ 隐性风险：记住"用户常用 0xabc 地址"→ 下次默认是收款地址；记住"用户风险偏好较高"→ 放松高风险交易确认
    
-   **Memory 不能替代实时授权** — 过去允许 ≠ 现在仍然允许，涉及身份/权限/资产的记忆必须重新绑定当前会话
    

**Knowledge Base**

-   系统可检索的外部知识库：产品文档、SDK 文档、代码说明、FAQ
    
-   解决知识过期问题，但不自动保证正确
    
-   知识库至少要记录：
    
    -   文档来源和 URL
        
    -   最后更新时间
        
    -   适用协议版本
        
    -   适用版本或运行环境
        
    -   是否来自官方或第三方
        
    -   是否需要人工复核
        

### **Context 在 AI × Web3 中的位置**

Context 是连接模型和现实系统的入口。AI 负责推理，Web3 负责状态和结算；context 决定模型看到的是用户幻想、过期文档，还是可验证的链上事实。

靠谱的 Agent 上下文分层：

-   **指令层**：系统规则、工具使用规则、禁止事项
    
-   **任务层**：用户目标、本次会话参数
    
-   **事实层**：链上状态、工具结果、simulation
    
-   **知识层**：文档、标准、论坛、历史案例
    
-   **记忆层**：用户偏好和项目配置
    

> 层级越清楚，后续越容易做权限控制、prompt injection 防护和审计。

### **最小实践：钱包授权检查 Agent 的 context spec**

场景：用户问"这个 dApp 要我 approve，可以签吗？"模型回答前必须拿到的上下文：

1.  chain id 和当前区块
    
2.  token 合约、spender 地址、approve 数量
    
3.  用户当前 allowance 和余额
    
4.  spender 是否在可信列表
    
5.  simulation 或静态检查结果
    
6.  dApp 页面提供的说明（标记为不可信外部内容）
    
7.  用户本次意图
    

字段分类：

-   **必须实时查询**：chain id、当前区块、allowance、余额、simulation 结果
    
-   **可以缓存**：token 合约元数据（name/decimals）、可信列表
    
-   **不能被模型当成事实**：dApp 页面说明、用户意图（需交叉验证）
    

* * *

## **💡 个人收获（Context）**

-   Context Engineering 是信息治理问题，不是简单的"多塞点资料"——给模型错误信息比缺信息更危险
    
-   Memory 的隐性风险很值得警惕：在 Web3 场景中，"记住上次授权"可能直接导致资产损失
    
-   上下文分层模型（指令/任务/事实/知识/记忆）和 LLM 的"推理层而非真相源"原则一脉相承：每层都有自己的可信度边界
    

## **❓ 待深入**

-   RAG 中的具体检索策略和引用机制（明天学 RAG 章节）
    
-   prompt injection 防护的具体技术手段
    
-   Context Engineering 在 Hermes Agent 中的实际应用（memory vs skill vs context）
    

* * *

## **📖 Network — 网络**

> 来源：[https://aiweb3.school/zh/handbook/web3/network/](https://aiweb3.school/zh/handbook/web3/network/)

### **核心定位**

Web3 里的"网络"不是抽象背景，而是交易能否被打包、状态能否被同步、费用如何产生、确认需要多久、L2 和主网如何分工的基础环境。

### **第一性原则**

区块链网络的核心不是"存数据"，而是让互不信任的参与者对状态变化达成一致。

三条原则：

1.  **区块是同步节奏** — 状态不是每毫秒连续更新，而是按区块批量推进
    
2.  **共识是信任来源** — 用户相信状态不是因为某家公司说了算，而是网络按规则达成一致
    
3.  **网络选择会改变体验** — 主网、测试网、L2 的费用、速度、安全假设和工具支持都不同
    

### **知识节点**

**Block**

-   交易被批量提交和排序的单位
    
-   包含：交易列表、前一区块引用、状态根、时间戳、gas 使用、共识信息
    
-   理解重点：
    
    1.  交易有顺序，顺序影响结果
        
    2.  区块有 gas limit，网络吞吐不是无限的
        
    3.  新区块引用前一区块，形成可验证历史
        

**Consensus**

-   网络决定"哪段历史有效"的机制
    
-   对应用开发者的具体影响：
    
    1.  交易需要等几个 confirmation 才算安全
        
    2.  区块可能短暂重组，前端不能过早假设最终结果
        
    3.  节点故障或 RPC 异常时，状态读取可能延迟
        

**PoS（Proof of Stake）**

-   用质押和惩罚机制组织验证者，替代 PoW 挖矿
    
-   以太坊当前使用 PoS，验证者质押 ETH 参与区块提议和证明
    
-   网络安全来自经济质押、客户端实现和节点参与，不是"免费"的
    

**Testnet**

-   接近真实链的环境测试合约、前端和交易流程
    
-   ⚠️ 测试网不能替代主网安全审查 — 流动性、MEV、攻击动机、资产规模都不同
    
-   做项目至少要记录：部署在哪条测试网、合约地址、RPC、chain id 切换、测试资产来源
    

**L2**

-   在主网安全和更低成本之间做扩展
    
-   优势：费用更低、确认更快
    
-   新增复杂度：桥、提现等待、排序器、跨链状态同步
    
-   ⚠️ 产品设计不能只写"支持 Ethereum"，要清楚展示当前网络、资产在哪条链、桥接时间、合约地址
    

**Rollup**

-   主流 L2 扩展路线，执行搬到链下，数据和结果提交到 L1
    
-   Optimistic rollup vs ZK rollup：证明方式、提现延迟、数据可用性、开发体验各有差异
    
-   **降低单笔交易成本，但没有消除链上系统复杂度**
    

### **Network 在 AI × Web3 中的位置**

AI Agent 要读取链上状态或执行交易，**必须知道自己在哪条网络上操作**。主网/测试网、L1/L2、不同 chain id、不同合约地址，不能靠模型"猜"。

更稳妥的做法：让工具返回结构化网络信息（chain id、RPC 来源、区块高度、交易哈希、确认数、explorer 链接）。Agent 总结应引用可验证信息，而不是只说"交易成功了"。

### **最小实践：测试网交易追踪**

1.  在测试网领取少量测试 ETH
    
2.  用测试钱包发送一笔转账或调用简单合约
    
3.  在区块浏览器查看：交易状态、区块号、gas used、from、to、logs
    
4.  记录 pending → confirmed 用了多久
    
5.  切换另一条网络，观察同地址余额和交易历史
    

**AI Agent 辅助时的分工**：

-   必须由工具读取：chain id、区块高度、交易状态、gas used、确认数
    
-   可以由模型生成：交易摘要、风险提示、下一步建议
    

* * *

## **💡 今日收获汇总**

**AI 侧（Context）**：上下文 = 信息治理，不是长文本拼接。Memory 带隐性风险，Knowledge Base 要维护来源和时效。

**Web3 侧（Network）**：网络是交易生命周期的基础环境。从签名到确认经过钱包→RPC→mempool→区块→共识→执行→确认→索引→浏览器，每一层都可能出问题。

**交叉感悟**：Context 的"信息分层治理"和 Network 的"交易经过多层才能确认"是对应关系 — Context 管信息如何**进入**模型，Network 管交易如何**通过**链上系统。两者都在说同一件事：**中间过程的每一层都可能有错，不能假设"进去了就对了"**。

Context 的 fact 层如果包含了正确的 chain id 和区块高度，就是 Chain-aware Context 的基础 — 这正好是下周 Bridge 章节要深入的内容。

## **❓ 待深入**

-   RAG 的检索和引用机制（Context → RAG 是自然递进）
    
-   prompt injection 防护的具体技术手段
    
-   测试网交易追踪实操（验证 Network 的多层概念）
    
-   Optimistic vs ZK Rollup 的具体技术差异
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->






















## **📖 LLM — 大语言模型**

> 来源：[https://aiweb3.school/zh/handbook/ai/llm/](https://aiweb3.school/zh/handbook/ai/llm/)

### **核心定位**

LLM 不是会聊天的黑盒，而是把大量文本、代码和多模态信号压进参数里的**概率模型**。

**关键判断：**

-   模型输出是**候选结果**，不是事实本身
    
-   模型能力是**推理入口**，不是最终验证
    

### **第一性原则**

LLM 生成的是**概率上合理的输出**，而不是天然可信的事实。

三条原则：

1.  **把模型当推理层，不当真相源** — 关键事实必须来自数据库、API、日志、文档源或其他可信系统
    
2.  **把输出变成可检查对象** — 摘要、分类、计划应落成 schema、参数、引用或日志，而非只停留在自然语言
    
3.  **把不确定性前移暴露** — 模型不知道、资料过期、上下文不足时，要显式降级，而不是编一个顺滑答案
    

### **知识节点**

**Token**

-   模型处理文本的基本单位，tokenizer 切分后的片段
    
-   直接影响：上下文容量、调用成本、模型能否看见关键信息
    
-   ⚠️ 不要把"页面很短"误认为"token 很少" — 代码、JSON、长标识符、表格更吃 token
    

**Embedding**

-   把文本/代码映射成向量，衡量"语义是否接近"
    
-   用途：搜索、聚类、推荐、异常检测、RAG
    
-   ⚠️ 向量相似度 ≠ 结论正确，不能替代来源校验和规则检查
    

**Transformer**

-   现代 LLM 的核心架构，关键能力来自 **attention** 机制
    
-   擅长在上下文里找模式，但不等于拥有稳定数据库
    
-   ⚠️ 给了强大的模式组合能力，但没有给事实最终裁决权
    

**Hallucination（幻觉）**

-   模型生成看起来合理但不真实/无法验证的内容
    
-   在带执行能力的系统里 → 幻觉变成**流程风险**
    
-   处理方式不只是"更好的 prompt"，更要：来源引用、schema 校验、规则检查、人工确认、审计日志
    

**Multimodal（多模态）**

-   可处理文本、图片、音频、视频、截图
    
-   价值不是"更炫"，而是让模型读懂更多真实工作界面
    
-   ⚠️ 截图文字可能遮挡、图表可能缺坐标、页面可能被伪造 — 关键判断仍要回到结构化数据
    

### **LLM 在 AI × Web3 中的位置**

LLM 位于**理解和生成层**，需要四层配合：

| 层 | 内容 |
| --- | --- |
| 数据层 | RPC、索引器、预言机、向量库、项目文档 |
| 编排层 | Prompt、Context、RAG、Agent workflow |
| 执行层 | 工具调用、钱包、Smart Account、合约交互 |
| 安全层 | Guard、simulation、权限策略、人工确认、日志 |

> **LLM 越靠近执行层，系统越要把自然语言输出变成可验证对象。**

### **最小实践：交易解释器**

输入一笔交易哈希 → 读取交易详情、事件日志、合约 ABI → LLM 生成解释，包含：

1.  用户发起了什么动作
    
2.  涉及哪些资产和地址
    
3.  哪些信息来自链上数据，哪些是模型推断
    
4.  模型不确定的地方
    
5.  如果要签类似交易，用户应该检查什么
    

**练习重点**：把「模型生成 / 链上事实 / 来源边界 / 不确定性」分开。

* * *

## **💡 个人收获**

-   LLM 是推理层不是真相源，这个定位在 Web3 场景特别重要（因为链上操作不可逆）
    
-   幻觉不只是"答错"，在自动化流程中是真正的风险入口
    
-   交易解释器是个好起点：小但完整，能体验模型输出与链上事实的边界
    

## **❓ 待深入**

-   Token 计算的实际体验（不同类型文本的 token 消耗差异）
    
-   Embedding 在 RAG 中的具体用法
    

* * *

## **📖 Wallet — 钱包**

> 来源：[https://aiweb3.school/zh/handbook/web3/wallet/](https://aiweb3.school/zh/handbook/web3/wallet/)

### **核心定位**

钱包不是 Web3 的"登录按钮"，而是**用户管理账户、签名授权、发送交易、切换网络和确认风险的入口**。

### **第一性原则**

钱包管理的不是"账号资料"，而是**链上控制权**。

三条原则：

1.  **连接 ≠ 授权资产** — 读取地址和发起交易是完全不同的权限
    
2.  **签名必须可解释** — 用户需要知道签名目的，而不是只看到十六进制数据
    
3.  **网络是上下文** — 同一个地址在不同链上可能有不同资产和状态
    

### **钱包交互三类动作（风险递增）**

| 动作 | 说明 | 风险 |
| --- | --- | --- |
| 连接钱包 | 应用读取地址和网络 | 低 — 不等于可以动用资产 |
| 签名消息 | 用户证明控制某个地址 | 中 — 可能用于登录、授权或创建订单 |
| 发送交易 | 请求改变链上状态 | 高 — 转账、授权 token、调用合约、支付 gas |

### **知识节点**

**EOA（外部账户）**

-   由私钥控制的账户，可签名消息、发起交易、支付 gas、调用合约
    
-   大多数浏览器/移动钱包默认创建的都是 EOA
    
-   ⚠️ 限制：私钥丢失难恢复、权限难细分、自动化能力弱
    

**Mnemonic（助记词）**

-   一组单词，用来恢复钱包私钥
    
-   ⚠️ **任何网页、客服、AI Agent 要求输入助记词 = 危险**
    
-   正确做法：用户在钱包应用内恢复账户，dApp 只请求连接
    

**Transaction（交易）**

-   对链上状态的正式请求，上链后通常不可撤回
    
-   常见误区："点击按钮" ≠ 交易本身，还要经过钱包确认→签名→广播→打包→执行
    
-   前端至少要展示的状态：等待确认 / 用户拒绝 / 已广播等待 / 成功 / 失败 revert / 长时间 pending
    

**Gas**

-   链上执行成本，影响用户付费和交易是否被及时处理
    
-   产品至少要让用户知道：大概费用、用什么资产支付、失败是否仍消耗费用、能否重试
    

**Explorer（区块浏览器）**

-   查看链上事实的窗口，但**不是链本身**
    
-   看一笔交易至少检查：Status / From·To / Method / Value / Token Transfers / Logs / Gas Used
    
-   AI 产品引用链上信息时应给出 explorer 链接或交易哈希，让用户可自行验证
    

### **Wallet 在 AI × Web3 中的位置**

AI Agent 想进入链上执行，最终碰到钱包边界。合理设计：

**AI 做理解和辅助 → 钱包负责确认和授权 → 策略合约/智能账户负责执行约束**

用户既得到 AI 的效率，也保留对资产和权限的控制。

### **最小实践：钱包交互地图**

用测试钱包连接测试网 dApp，记录完整流程：

1.  连接钱包、切换网络
    
2.  签名消息、发送交易
    
3.  标出哪些只是读取信息，哪些改变链上状态
    
4.  写出每步用户应看到的关键信息
    
5.  思考如果由 AI Agent 辅助，哪些必须保留人工确认
    

* * *

## **💡 今日收获汇总**

**AI 侧（LLM）**：模型 = 推理层 ≠ 真相源，幻觉在自动化链路中是流程风险

**Web3 侧（Wallet）**：钱包 = 链上控制权入口，连接/签名/交易风险递增，助记词不可交出

**交叉感悟**：LLM 的"推理层而非真相源"和钱包的"确认界面而非登录按钮"是对应关系 — 一个是 AI 输出的边界，一个是链上执行的边界，两条边界必须对接

## **❓ 待深入**

-   Token 计算的实际体验
    
-   Embedding 在 RAG 中的具体用法
    
-   EOA vs Smart Account 的实际区别（Account Abstraction 章节）
    
-   用测试钱包走一遍钱包交互地图
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->























# AI Agent 学习笔记

今天参加了 Draken 老师关于 AI Agent 的学习分享，对 Agent 的发展逻辑、工具生态以及 Hermes Agent 的实际使用方式有了更系统的理解。

过去我对 AI 的认知更多停留在“聊天机器人”阶段，例如 ChatGPT、Gemini、DeepSeek 这类产品，本质上还是以问答交互为核心。但这次学习让我意识到，AI 正在从“回答问题”转向“执行任务”。

Agent 的核心并不只是会聊天，而是具备：

1.  理解任务目标
    
2.  调用外部工具
    
3.  观察执行结果
    
4.  自动修复与继续执行
    

这一整套闭环能力。

例如，一个 Agent 在收到“帮我完成开发任务”的指令后，不只是生成代码，而是会进一步调用终端、文件系统、API、浏览器等工具，真正参与任务执行。这和传统 Chatbot 已经有明显区别。

这次还系统了解了当前 AI Agent 的工具生态，大致可以分为：

-   聊天型 AI（ChatGPT、Gemini、DeepSeek）
    
-   AI 编程助手（Cursor、GitHub Copilot、Antigravity）
    
-   终端型 Agent（Codex CLI、Claude Code）
    
-   模型聚合平台（OpenRouter、ModelScope）
    
-   通用 Agent 底座（Hermes Agent、OpenClaw）
    

其中我比较感兴趣的是 Hermes Agent 这一类“通用 Agent 框架”。

它的特点包括：

-   支持多模型接入
    
-   支持工具调用
    
-   支持长期记忆
    
-   支持技能（Skill）沉淀
    
-   可接入微信、Telegram、飞书等消息平台
    

我感觉它更像一个“AI 操作系统”，而不仅仅是聊天工具。

另外一个比较有启发的点，是关于“Skill 沉淀”的概念。

如果一个任务经常重复执行，Agent 可以把流程固化为技能，之后自动复用。这其实已经有点接近“个人自动化工作流”的方向了。

技术实践方面，也学习了 Hermes Agent 的部署思路：

-   Windows 推荐使用 WSL
    
-   使用 Quick Setup 完成初始化
    
-   配置模型 Provider、API Key、消息网关
    
-   对接微信 / Telegram 等平台
    

同时也了解到：

-   命令行开发更适合使用 Codex CLI、Claude Code
    
-   高度定制化 Agent 框架对新手有一定门槛
    
-   Agent 权限控制非常重要，危险命令最好单次授权
    

目前我对 AI Agent 的理解，已经从“AI 会聊天”，逐渐转向：

> AI 是一种可调用工具、可执行任务、可沉淀工作流的新型操作层。

后续希望继续深入学习：

-   Agent Workflow
    
-   Tool Calling
    
-   MCP
    
-   Memory System
    
-   Multi-Agent 协作
    
-   AI IDE / Terminal Agent
    
-   本地模型接入
    
-   自动化工作流编排
    

接下来计划尝试：

1.  在 WSL 环境部署 Hermes Agent
    
2.  配置 Model API 与消息平台
    
3.  尝试构建自己的第一个自动化 Agent 工作流
    

整体来说，这次学习让我对 AI Agent 的整体生态有了比较清晰的认知，也开始真正理解“AI 帮人做事”意味着什么。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->
























# AI 时代 Web3 开发研讨会记录

AI 时代 Web3 开发者需要具备的基础知识和架构能力，用Web3支付系统举例说明，穿插安全设计考量，最后分享开发者核心技能。

## **常见问题**

**AI与基础知识**：有了AI更应学习基础知识和架构能力，人负责设计方案、评估合理性、验收代码结果和分析问题，AI协助设计方案、细化分析和按计划编码，AI自我验证是决定编码质量的关键。

**Web3与Web2关系**：Web3并非完全独立于Web2，多数Web3项目中Web2能力占比较高，如币安、Polymarket、Defi等项目都需要Web2的支持。

**Web3安全问题**：Web3中资金交互特性决定安全源于设计，应贯穿项目生命周期，审计只是锦上添花，安全需扎实的基础知识和架构能力作支撑。

## **支付系统案例分析**

**Web2支付模型**：以电商购物支付为例，用户下单后，支付服务从银行获取支付单信息展示给用户，用户支付法币，银行收到钱后回调，电商平台流转订单状态。该模型存在服务间身份验证、用户支付安全和信任等问题。

**引入Web3支付**：将银行机构替换为区块链，用户向电商平台生成的地址转账，链上监听服务记录交易并通知支付服务，资金流从用户账户到支付服务账户再到商户账户。Web3通过算法保证数据不可篡改、逻辑和代码公开透明、私钥签名校验等方式解决信任问题。

## **钱包相关知识**

**钱包概念与作用**：钱包解决用户控制资产问题，输入私钥，通过算法产出交易签名和消息签名，实现身份和资产的双重认证。

**钱包分类**：按技术分为EOA钱包（私钥钱包）、合约钱包和AA钱包；按多签分为MPC多签钱包等；按托管方式分为自托管钱包、全托管钱包和混合托管钱包；还有硬件钱包、隐私钱包和分层钱包等。

**钱包安全问题**：私钥泄露和签名欺骗是主要风险，业界有EIP712签名可视化等措施，但仍存在门槛。

## **交易相关知识**

**交易生命周期**：用户支付构造交易，用私钥签名后广播，链上处理达成节点共识，记录交易状态。

**交易关键参数**：包括gas（gas count和gas price）、nonce（确保交易幂等）和instructions（链上应用交互的灵魂）。

**交易监听与确认**：链上服务监听区块，检测到交易后等待一定数量的区块确认，避免链分叉，再进行合规筛查，确认无误后回调支付服务。

**交易模拟**：在未签名前模拟交易执行结果，避免签署有风险的交易，签名后模拟无意义。

**服务器侧钱包安全**：采用权限拆分和多签方案，通过交易可视化、审核、模拟和可信执行环境（Tee）签名等方式确保安全。

## **AI对开发者的影响**

**改变之处**：提高编码速度，减少精力消耗，学习更易。

**未变之处**：系统复杂度未变，开发者仍需具备判断系统架构和复杂度的能力，对AI生成的代码需进行审核和负责。

**AI时代架构师能力**：包括架构能力、debug能力和扎实的基础知识。

## **QA环节答疑**

**安全学习路径**：先扎实掌握开发基础知识，可参考招聘要求，让AI反推所需能力进行针对性学习。

**钱包私钥管理**：浏览器插件钱包私钥在本地，交易所钱包私钥由平台托管，充值地址由平台创建，资金会归集到热钱包。

**AI在Web3安全应用**：可用于分析未验证的合约代码，如去年很多老合约被爆破时用AI处理；claude code推出的Mythos是AI帮忙做安全的工具。

**数据集成与量化**：量化相关策略多为内部知识，大数据在Web3中的应用机会相对较少，价值需通过市场反馈。

**链上小额免密支付**：存在信任问题，可从账号权限拆分侧解决，如设置风控规则。

**钱包监听交易**：可通过轮询或Websocket监听，开源项目Epusdt可参考。

**AA钱包发展**：会越来越成熟，以太坊准备融合不同账号类型采用AA方案，但不同链的实现存在差异。

**跨链需求与方案**：跨链需求会逐渐增多，但目前不完全是去中心化方案，熊市业务不太好，牛市时活跃度可能提高。

**密码学学习程度**：以做MPC签名为例，要搞清楚私钥切割、计算、交互等原理，以及如何保证安全。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
