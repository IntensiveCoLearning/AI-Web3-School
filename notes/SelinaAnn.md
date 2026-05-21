---
timezone: UTC+8
---

# SelinaAnn

**GitHub ID:** SelinaAnn

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
# WEB 3 运行原理

## 钱包、私钥、个人主权

### 交易流程

-   wallet签名-RPC传播-mempool排队-builder排序-validator证明-block可查询
    

### 私钥

-   授权账户操作
    

### 助记词

-   私钥体系的可读备份，派生路径生成多账户
    

### 地址

-   公钥计算得到的公开账户标识，收款地址，会被关联分析
    

## 交易与签名

### 交易

-   事
    
-   手续费（gas fee）
    
-   nonce（第几笔交易）
    
-   签名
    

## 区块链网络

### 共识机制

-   PoW(BTC)
    
-   PoS(ETH)
    

## 智能合约

写在链上，能被交易触发的代码，EVM虚拟机运行

## 区块链协议升级

## web3特性与边界

-   去中心化
    
-   无许可
    
-   抗审查
    
-   开源可验证
    
-   隐私边界
    
-   可组合
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

Hermes Agent学习

```
GitHub CLI 官网登录流程

1. 打开 GitHub 官网，注册或登录账号。
2. 打开 GitHub CLI 官网，按系统安装 `gh`。
3. 在终端运行：`gh auth login`。
4. 选择 GitHub.com，并按浏览器登录流程授权。
5. 运行：`gh auth status`，确认登录成功。
```

创建个人学习仓库

```
bash
gh repo create ai-web3-school-cohort-0 --public --description "Personal learning journal and proof-of-work for AI x Web3 School" --clone
```

如果 Agent 对本地 GitHub repo 做了任何变动，需要自动执行 git 状态检查，确认后 commit and push

```
bash
git status --short
git add .
git commit -m "Update AI Web3 School learning notes"
git push
```

初始化仓库结构

```
README.md
profile.md
learning-plan.md
daily/
tasks/
experiments/
handbook-feedback/
hackathon/
submissions/
templates/daily-note.md
templates/task-note.md
```

WCB Agent API

```
API 文档：https://web3career.build/llms.txt
```
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->


昨天的直播讲了AI 时代，Web3 开发者需要具备的基础知识和架构能力，先讲了AI时代的误区，web3简单概念，区分于web2，人的作用是评估与验收，人的价值在于驾驭AI，而AI则是协助与细化，web3区块链的信任与安全，钱包的本质和安全问题，私钥泄露，权限滥用，签名欺骗。web3交易的逻辑链，3个关键参数，监听逻辑。最关键的是交易模拟能力。
<!-- DAILY_CHECKIN_2026-05-19_END -->
<!-- Content_END -->
