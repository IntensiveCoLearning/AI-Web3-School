---
timezone: UTC+8
---

# HirongVSuen

**GitHub ID:** HirongVSuen

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->
## 1\. web3 和 web2 的安全上的区别

web2依赖权威的中心，web3则需要一定的机制确保信任：

1.  数据不可篡改
    
2.  逻辑即代码，公开透明
    
3.  不同的共识协议-信任模型
    
4.  私钥签名校验
    

## 2\. 钱包

钱包在web3中扮演着身份与资产管理的双重角色，他是用户主权的具体化象征。其核心目的是用户如何控制自己的资产。主要通过私钥对资产有绝对的控制权，通过签名证明自己的交易意图和自己的身份。  
钱包在以太坊分为：eoa钱包、合约钱包、aa钱包。eoa钱包多签使用mpc，可以参考gg18/20。  
钱包的安全风险：

1.  私钥泄露
    
2.  签名欺诈
    
3.  权限滥用
    

## 3\. 交易

生命周期：构造、 签名、 广播  
关键参数：gas 系统的动力源，nonce 保证交易的幂等性，data 智能合约  
监听逻辑：交易确认，事件监听，不确定挑战
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->

> **今日学习内容：**
> 
> -   阅读了 Learning Agent 启动 Prompt，了解全部流程规则
>     
> -   阅读了 Handbook 首页，了解整体知识地图（AI 基础 → Web3 基础 → AI × Web3 Bridge → 前沿探索）
>     
> -   完成学员画像确认
>     
> -   安装并登录 GitHub CLI
>     
> -   创建并初始化个人学习仓库 `ai-web3-school-cohort-0`
>     
> 
> **学习时长：** 约 1 小时
> 
> **心得 / 收获：**
> 
> 1.  Handbook 的学习路径设计很清晰，从 AI 基础到 Web3 再到交叉领域循序渐进
>     
> 2.  Learning Agent 作为学习伙伴，能帮助养成每日记录和打卡的习惯
>
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->


# wls2安装hermes agent

_1.执行命令_

```
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

遇见的问题

-   安装依赖时报404
    
    -   更新到最新库，sudo apt update
        
-   uv.lock 被锁
    
    -   进入 ~/.hermes/hermes-agent 下 执`uv lock`
        

_2.配置deepseek_

1.  执行\`hermes model\`
    
2.  选择deepseek
    
3.  输入apikey 和 baseurl，然后选择需要的模型 参考[首次调用 API | DeepSeek API Docs](https://api-docs.deepseek.com/zh-cn/)
    

_3.集成飞书_

1.  在飞书创建智能体应用，保存好**App ID** and **App Secret**
    
2.  执行`hermes gateway setup`
    
3.  选择飞书
    
4.  输入appid 和 appsecret
    
5.  使用websocket
    
6.  其余使用推荐选项
    
7.  配置完成后，使用当前用户启动services
    
8.  和飞书中的助手聊天，助理会推一个命令，然后执行
    
    ![Pasted image 20260518160309.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/HirongVSuen/images/2026-05-18-1779093098555-Pasted_image_20260518160309.png)

_参考文档_

[Feishu / Lark | Hermes Agent (](https://hermes-agent.nousresearch.com/docs/zh-Hans/user-guide/messaging/feishu)[nousresearch.com](http://nousresearch.com)[)](https://hermes-agent.nousresearch.com/docs/zh-Hans/user-guide/messaging/feishu)

_4.生成学习助手_

告诉助手一下提示词：

请作为我的 AI × Web3 School Learning Agent，先阅读启动 Prompt：[https://aiweb3.school/learning-agent.zh.txt](https://aiweb3.school/learning-agent.zh.txt) ，并结合 Handbook：[https://aiweb3.school/zh/handbook/](https://aiweb3.school/zh/handbook/) ，帮我初始化个人学习计划、GitHub 学习仓库、每日打卡草稿和 Handbook feedback 流程。  
  
助理自动生成github仓库和个人学习推荐
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
