---
timezone: UTC+8
---

# Penn

**GitHub ID:** A-Pang

**Telegram:** @rocchan

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->
erc721代币详解：  
[https://x.com/Pang26989586/status/2057820218366533700?s=20](https://x.com/Pang26989586/status/2057820218366533700?s=20)
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->

发布erc20代币相关：approve race condition 授权竞态攻击 讲解  
[https://x.com/pang26989586/status/2057470923213873255?s=46](https://x.com/pang26989586/status/2057470923213873255?s=46)
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->


1、学些erc20代币合约细节  
1）查询类方法  
totalSupply()

uint256

代币总发行量（固定或可增发）

balanceOf(address account)

地址

uint256

查询某个地址的代币余额

allowance(address owner, address spender)

所有者地址、授权地址

uint256

查询 owner 授权给 spender 的额度  
2）交易类方法  
transfer(address to, uint256 amount)

接收地址、转账数量

最常用：从调用者账户直接转账

approve(address spender, uint256 amount)

授权地址、授权数量

授权某个合约/地址可以从自己账户扣除代币（最重要！）

transferFrom(address from, address to, uint256 amount)

发送方、接收方、数量

被授权者调用，从 from 账户转账到 to  
3）  
event Transfer(address indexed from, address indexed to, uint256 value); event Approval(address indexed owner, address indexed spender, uint256 value);
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->



1、hermes对接wx bot ，试用wechat 聊天  
2、完成web3相关知识学习，整理内容并发布推特帖子  
[https://x.com/Pang26989586/status/2056659742425288980?s=20](https://x.com/Pang26989586/status/2056659742425288980?s=20)  
3、参加会议听取老师分享会hermes使用技巧
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->




1、参与今天的co-learning 听取助教对问题答疑  
2、听取今天分享会，讲解ai 及web3的真实场景案例，支付系统由web2转向web3，多签钱包等  
3、安装Hermes Agent，申请openrouter key
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
