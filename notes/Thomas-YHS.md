---
timezone: UTC+8
---

# Thomas

**GitHub ID:** Thomas-YHS

**Telegram:** @Thomas_YHS

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->
今天我完成了：

1\. 回看并整理了前几天的学习主线，继续把问题收敛到模型能力、工具调用、钱包签名、链上验证四层边界

2\. 对照 tasks/[week1-checklist.md](http://week1-checklist.md)，重新确认了本周当前仍缺的关键产物：workflow note、permission boundary 比较记录、experiment note

3\. 为今天建立了结构化 daily，保证 Week 1 的学习记录不断档，并把注意力重新拉回 AI × Web3 bridge 的真实问题

我当前的收获是：

\- Week 1 后半段更重要的是收束和判断，而不是继续堆概念

\- 模型能力要放回任务类型、上下文需求和失败模式里理解，才有实际价值

\- AI × Web3 的核心问题仍然是权限、风险和验证边界，而不是单纯追求更多自动化

我遇到的问题是：

\- 今天活动内容还没有完整整理进仓库，所以这份笔记还需要继续补全

\- 独立 workflow / analysis 产物仍然缺位，导致很多判断还停留在 daily 层

我明天的下一步是：

\- 把今天两场活动的实际记录补进来

\- 完成 tasks/[hermes-first-workflow.md](http://hermes-first-workflow.md) 或 permission boundary 比较笔记

\- 明确 Week 1 结束前最少还要补哪些 proof-of-work 文件
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->

今天我完成了：

NaN.  为 2026-05-22 建立了结构化 daily 草稿，保证 Week 1 记录不断档
      
NaN.  对照 `tasks/week1-checklist.md`，重新确认了本周当前仍缺的关键产物：workflow note、permission boundary 比较记录、experiment note
      
NaN.  把今天的学习重点继续收敛到四层边界：模型能力、工具调用、钱包签名、链上验证
      

我当前的收获是：

-   Week 1 后半段更重要的是收束和判断，而不是继续堆概念
    
-   模型能力要放回任务类型、上下文需求和失败模式里理解，才有实际价值
    
-   AI × Web3 的核心难点仍然不是“会不会调用”，而是“谁能授权、谁承担风险、谁来验证”
    

我遇到的问题是：

-   今天活动内容还没有记录进仓库，所以这份笔记目前还是一版可继续补写的框架
    
-   独立 workflow / analysis 产物仍然缺位，导致很多判断还停留在 daily 层
    

我明天的下一步是：

-   把今天两场活动的实际记录补进来
    
-   完成 `tasks/hermes-first-workflow.md` 或 permission boundary 比较笔记
    
-   明确 Week 1 结束前最少还要补哪些 proof-of-work 文件
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->


今天我完成了：

NaN.  回看并整理了 Week 1 前两天的 daily，确认当前学习主线仍然是 `prompt -> tool use -> wallet -> transaction -> verification`
      
NaN.  对照 `tasks/week1-checklist.md`，重新确认了当前最缺的三个产物：workflow note、permission boundary 比较记录、experiment note
      
NaN.  读取并整理了 `resources/Web3支付安全探讨.txt`，把 Web3 支付、钱包、签名、信任和安全这条链重新串了一遍
      
NaN.  把今天的重点收敛到 AI × Web3 bridge：不是泛泛谈 AI 应用，而是先明确 Agent、钱包和链上验证各自的边界
      

我当前的收获是：

-   Web3 可以先放回支付系统和信任系统里理解，而不是一开始就陷入抽象术语
    
-   钱包的本质是私钥控制与签名证明，它同时连接身份和资产
    
-   Agent 的工具调用权限，不等于可以替用户做资产授权；这两个边界必须分开设计
    
-   AI 的价值不在“自动化一切”，而在帮助人更清楚地理解、审查和验证关键动作
    

我遇到的问题是：

-   今天的课程锚点已经有了，但仓库里还没有对应的实际学习记录，暂时不能写成完成项
    
-   Hermes workflow note 和 permission boundary 对比笔记还没有真正落地成独立文档
    
-   Week 1 的 daily 记录里还缺 2026-05-20 这一天
    

我明天的下一步是：

-   完成 `tasks/hermes-first-workflow.md`
    
-   写一条 tool permission vs wallet signature permission vs smart-account policy 的比较笔记
    
-   补 `daily/2026-05-20.md` 或至少写一个缺口说明，避免 Week 1 记录断层
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->



把 Hugging Face Chapter 1 从 raw 整理成更可复用的学习资产，并开始把“prompt”作为新知识节点收入口袋。

## 今天完成了什么

### 1\. 整理 Hugging Face 原始资料

-   生成了整合版文档：raw/ai/web/huggingface教程/HuggingFace Chapter 1 - 格式化整合版
    
-   处理掉了原始页面里的导航噪音、跳转信息和重复结构
    
-   保留了正文、代码块、链接和章节顺序
    

### 2\. 把 Chapter 1 继续编译进 wiki

新增：

-   concept: [encoder-vs-decoder-vs-encoder-decoder](encoder-vs-decoder-vs-encoder-decoder)
    
-   workflow: [validate-an-nlp-task-with-pipeline](validate-an-nlp-task-with-pipeline)
    
-   analysis: [why-a-good-pipeline-demo-does-not-prove-task-fit](why-a-good-pipeline-demo-does-not-prove-task-fit)
    

同时补了交叉链接并更新：

-   [pipeline](pipeline)
    
-   [transformer](transformer)
    
-   [llm-and-transformer-basics](llm-and-transformer-basics)
    
-   [index](index)
    
-   [log](log)
    

### 3\. 新增了一条 prompt 相关 raw 笔记

-   raw/ai/conversation/prompt-what-is-2026-05-20
    

这条笔记的价值不在“定义已经定稿”，而在于先把几个边界固定下来：

-   prompt 是任务入口，不是魔法指令
    
-   prompt 很重要，但不够
    
-   prompt 不能替代 context / tool / verification
    
-   在 Agent 里，prompt 只是系统的一层
    

## 今天的关键判断

### 1\. 这次不是继续堆概念，而是补知识链缺口

原来已经有：

-   [nlp](nlp)
    
-   [pipeline](pipeline)
    
-   [pretraining-vs-finetuning](pretraining-vs-finetuning)
    
-   [transformer](transformer)
    
-   [attention](attention)
    
-   [rlhf](rlhf)
    

真正缺的是三层：

1.  模型家族分工
    
2.  如何用 pipeline 做低成本验证
    
3.  为什么 demo 跑通不等于任务适配成立
    

所以今天做的是“补边界和判断”，不是“重复写定义”。

### 2\. concept / workflow / analysis 这三类文档边界开始清楚了

-   concept：解释它是什么
    
-   workflow：解释怎么做
    
-   analysis：解释为什么这个判断成立，以及边界在哪
    

这个分层比把所有内容都塞进 concept 页更稳。

### 3\. Hugging Face Chapter 1 已经不只是课程阅读，而是知识网络入口

它已经开始连接：

-   [nlp](nlp)
    
-   [pipeline](pipeline)
    
-   [transformer](transformer)
    
-   [attention](attention)
    
-   [pretraining-vs-finetuning](pretraining-vs-finetuning)
    
-   [encoder-vs-decoder-vs-encoder-decoder](encoder-vs-decoder-vs-encoder-decoder)
    

说明这批内容已经从“原始课程材料”进入“可复用知识层”。

## 今日产出清单

### Raw

-   raw/ai/web/huggingface教程/HuggingFace Chapter 1 - 格式化整合版
    
-   raw/ai/conversation/prompt-what-is-2026-05-20
    

### Wiki

-   [encoder-vs-decoder-vs-encoder-decoder](encoder-vs-decoder-vs-encoder-decoder)
    
-   [validate-an-nlp-task-with-pipeline](validate-an-nlp-task-with-pipeline)
    
-   [why-a-good-pipeline-demo-does-not-prove-task-fit](why-a-good-pipeline-demo-does-not-prove-task-fit)
    

### Patched

-   [pipeline](pipeline)
    
-   [transformer](transformer)
    
-   [llm-and-transformer-basics](llm-and-transformer-basics)
    
-   [index](index)
    
-   [log](log)
    

## 今天学到的东西

1.  `pipeline()` 的价值是低成本验证，不是高置信证明。
    
2.  一个 demo 好看，不代表任务类型、模型家族、checkpoint 和真实场景边界都已经对齐。
    
3.  Transformer 总架构和 encoder / decoder / encoder-decoder 分工需要分开记。
    
4.  prompt 能塑造任务入口，但不能替代 verification。
    
5.  analysis 页确实是必要层，不然很多判断会被错误挤进 concept 页里。
    

## 当前未完成 / 待推进

1.  prompt 这条 raw 笔记还没正式编译进 wiki。
    
2.  Hugging Face Chapter 1 还缺一个更完整的 review 页（如果要做复习闭环）。
    
3.  后续可以继续推进：
    
    -   什么时候应该从 pipeline 升级到评估集和微调
        
    -   如何用少量样本做第一轮任务评估
        
    -   prompt / context / verification 的正式 wiki 链接
        

## 明天可接的下一步

优先顺序建议：

1.  把 prompt 相关 raw 编译成 1 个 concept + 1 个 analysis
    
2.  给 Hugging Face Chapter 1 补 1 个 review 页，形成学习闭环
    
3.  再继续往 Chapter 2 推进，而不是继续回头修 Chapter 1 的表面格式
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->




今天我完成了：

NaN.  把昨天未完成的任务顺延到今天，并重新收敛成一个可执行的 2 小时学习范围
      
NaN.  以 3Blue1Brown 的 LLM 入门视频为主线，明确了 Hermes 学习应该围绕 `prompt -> context -> tool use -> output -> correction` 这条链来理解
      
NaN.  读取并整理了 Hugging Face LLM Course Chapter 1 的 raw 材料，编译出了 \[\[nlp\]\]、\[\[pipeline\]\]、\[\[pretraining-vs-finetuning\]\] 三个 wiki 概念页
      
NaN.  对 Obsidian 知识库做了一次健康检查，生成维护报告，并清理了重新漂移出来的空 `Clippings/` 目录
      
NaN.  给核心学习笔记补齐了 `My Answers` 和 `Open Questions`，继续把知识层和学习层拆开
      
NaN.  新增了 \[\[attention\]\] 和 \[\[rlhf\]\] 两个关键概念页，并更新了 `wiki/index.md` 与 `wiki/log.md`
      

我当前的收获是：

-   LLM 可以先理解为“根据上下文预测下一个高概率 token 的模型”，这让我更清楚地区分“语言流畅”和“结果可靠”
    
-   attention 解释了模型为什么能利用上下文，RLHF 解释了模型为什么更像助手，但这两者都不等于事实验证或安全保证
    
-   Hermes 的价值不在模型会不会说，而在上下文、工具调用、验证流程和人工确认边界是否设计清楚
    
-   我今天不只是看内容，而是把 raw -> wiki -> maintenance -> daily 这条学习闭环真正跑通了一次
    

我遇到的问题是：

-   token / tokenization / sampling 这几个基础概念还没继续补齐
    
-   Hermes 的最小实操案例还没有单独整理成 workflow note
    
-   wallet signature permission 和 tool permission 的比较还需要再写成一条更清晰的分析记录
    

我明天的下一步是：

-   继续编译 `token`、`tokenization`、`sampling`
    
-   完成 `tasks/hermes-first-workflow.md`
    
-   把 tool permission vs wallet signature permission 写成一条清晰的比较笔记
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->





今天我完成了：

NaN.  验证了 WCB API 配置可用，并拉取了 Week 1 的登录态活动日程
      
NaN.  基于 Handbook + WCB 活动整理了本周执行清单
      
NaN.  明确了本周重点不是分开学 AI 和 Web3，而是把 prompt、tool use、wallet、transaction、verification 串成一条任务链
      

我当前的收获是：

-   我需要重点理解“工具调用权限”和“钱包签名权限”这两个边界，它们决定了 Agent 能做什么、不能直接做什么
    
-   Week 1 更像是建立工作流视角，而不是单纯补概念
    

我遇到的问题是：

-   WCB API 目前只稳定拿到了活动日程，个性化任务卡还需要从网页面板再核对一次
    

我明天的下一步是：

-   产出一篇 workflow note，记录一次 Hermes 任务执行和一次 Web3 操作之间的权限边界比较
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
