---
timezone: UTC+8
---

# yogurt2333

**GitHub ID:** yogurt2333

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->
Web3 底层原理

**交易生命周期：** 本机签名 → RPC 广播 → 内存池排队（gas高优先）→ Builder打包 → 验证者共识 → 上链 → 12min Safe → 18min Finalized

**密钥体系：** 私钥=资产控制权，签名在本地，不出门。公钥截后40位=地址。改了签名内容→ec\_recover对不上→节点拒绝

**Gas费：** 基础费🔥销毁（通缩）+ 小费💰给验证者（插队用）

**EVM：** 不跑在某个服务器，跑在每个全节点自己的电脑上。像浏览器各自跑JS渲染 → 所有节点各自跑EVM，结果一致才共识

**智能合约：** 代码部署到链上自动执行，不可篡改。条件不满足→revert回滚

**L2：** L1太慢太贵→L2在链下处理，只交结果到L1。Optimistic（等7天挑战）vs ZK（数学证明立刻确认）

**公链 vs 私链：** 公链任何人可读写，私链授权用户。跨链=连接不同链的桥

**DApp架构：** Vue/React + ethers.js调合约 = 把调API换成调链上函数

**为什么谈Web3必须谈经济：** 区块链信任不靠代码，靠经济博弈。验证者押32ETH ≈ 作恶成本>收益
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->

\## 📋 5月19日学习总结

\### ✅ 已完成

\# 事项 备注

1️⃣ **安装 MetaMask** 手机/浏览器装好，搞定地址 0xED38…a5

2️⃣ **切换到 Sepolia 测试网** 找到了测试网络切过去

3️⃣ **领到测试币** 各 faucet 都挡了（要主网余额），找社群老哥薅到了 🧑‍🤝‍🧑

4️⃣ **🔑 发人生第一笔链上交易** 转了 0.1 ETH 给小伙伴，nonce=0（第一笔处女秀）

5️⃣ **用 RPC 查交易** 拿到了完整的交易原始数据

6️⃣ **学了一堆概念** TxHash / Nonce / Gas / EIP-1559 / Base Fee vs Tip / Burn
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->


📅 今天（Day 1）我干了什么

时间段 做的事 状态

🛠️ 下午 初始化 learning agent、装 gh、建 GitHub repo ✅

📚 下午 获取 Week1 完整课程大纲、更新学习计划 ✅

🏦 下午-晚上 学 Web2 vs Web3 支付区别 ✅

🗣️ 晚上 参加 tc 老师分析会、消化 Web3 术语（EVM/多签/AA/Nonce/Gas/TEE） ✅

🔧 晚上 修好本机 Obsidian Git 插件同步 ✅

累计投入

⏱️ 约 **95 分钟**

其实已经在bootcomp之前部署过Hermes agent了 今天补足一些开发环境部分 明天的任务是装 MetaMask + 测试网交互
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
