---
timezone: UTC+8
---

# Kevin Jiang

**GitHub ID:** doctorzero666

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->
Agent Workflow 的核心就一句：别让模型自由发挥，把它关进固定流程里。以 swap 为例，不是 Agent 直接调合约，而是拆成九步——读余额→查价格→生成交易→模拟→展示风险→人等确认→发交易→追踪结果。每一步都有输入输出和失败处理，模拟失败就往回退，交易 pending 了不能盲目再发一笔。

风险分三层特别清楚：只读分析自动走，小额白名单 Session Key 自动走，高风险交易必须人确认。而且人确认的时候不能只看一个按钮，得能看懂资产变化、权限变化和失败风险，不然确认就是走形式。

状态机解决了 Agent 失忆的问题。传统 chatbot 状态藏在聊天记录里，刷新页面就没了。Workflow 要求显式状态——draft → plan\_ready → waiting\_confirmation → confirmed → reverted——系统随时知道自己走到哪了。

Machine Payment 解决 Agent 花钱的问题。也不是转账本身，而是三条铁律：预算先于执行（不能说先花再算）、报价必须可比较（过期报价不能用）、收据必须可验证（付了钱得证明付给谁、为什么付）。预算最容易犯的错是只设总数不设频率和服务方范围，结果 Agent 被恶意网页诱导把全部额度花在一个异常报价上。

这两个东西底下都有 Account Abstraction 兜着。普通 EOA 钱包一把私钥控制一切，Agent 根本没法用——太危险。智能账户把权限拆成 Session Key：只在某段时间有效、只能调某个合约、只能花某个额度。这才是 Agent Wallet 真正能落地的技术底座。

一句话总结：Agent 不是拿到权限就放飞——Workflow 管它怎么走，Payment 管它怎么花，AA 在链上提供可编程规则底座。三者合在一起，Agent 才从「会聊天的脚本」变成可控系统。
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->

今天主要做了一件事：把 AI 和 Web3 交叉领域的核心概念用大白话串成了完整的认知链条。

学到的概念（六个）

智能合约 — 不是「自动执行的法律合同」，就是放在链上的程序。任何人都能查看、调用，但部署后不能偷偷改。规则透明是优点，bug 改不了是风险。

Agent Wallet — 不是给 AI 一个钱包私钥，而是给 Agent 设权限边界的系统：每天能花多少、能调哪些合约、写链必须你确认、随时能收回。因为 Agent 是概率系统，控制权不能全交给它。

Agent — 不是「像人的 AI」，而是被约束的执行循环：目标→思考→调工具→看结果→再思考。五要素缺一不可：目标、工具、状态、权限、停止条件。

MCP — 不是和 Agent 并列的新概念，而是 Agent 工具层的标准化协议。以前同一个工具给不同 Agent 用要写四套适配代码，MCP 就像 USB 接口——统一格式，插上就用。

Frameworks — Agent 的工程骨架。把模型调用、Agent 循环、工具管理、状态记录、评估、部署组织成能上线维护的系统。骨架选错了不是跑不起来，是后面调不动、换不掉。

Chain-aware Context / Web3 Tool Use — AI 和 Web3 真正交汇的地方。前者让 Agent 看得见链上真实状态（余额、Gas、合约地址），后者让 Agent 在链上操作时每一笔都有权限边界、参数校验、交易模拟和可审计日志。

核心认知

\> AI × Web3 不是两个 buzzword 拼在一起，而是让 AI 在链上规则、资产边界、可验证执行的框架里做事——每一步都知道能做什么、不能做什么、出错了怎么停。

明日计划

继续 Bridge 部分：Agent Workflow（自动 vs 人工确认的边界）+ Machine Payment（机器间小额支付）
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
