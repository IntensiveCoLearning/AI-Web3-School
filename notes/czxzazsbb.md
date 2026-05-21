---
timezone: UTC+8
---

# czxzazsbb

**GitHub ID:** czxzazsbb

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
Hermes Agent 简介

Hermes Agent 是由 \[Nous Research\]([https://nousresearch.com/](https://nousresearch.com/)) 开发的开源 AI 智能体框架，核心特性：

\- 自进化学习：从交互中自动生成“技能”（Skill），越用越聪明

\- 多模型支持：兼容 OpenAI、Anthropic、DeepSeek、Ollama 等多种后端

\- 多平台接入：支持 Telegram、Discord、QQ、邮箱等

\- 轻量高效：Python 开发，内存占用约 850MB

环境准备

 1. 安装 WSL2（如未安装）

在 PowerShell（管理员）中执行：

powershell

wsl --install -d Ubuntu

 2. 进入 WSL 环境

bash

wsl

安装 Hermes Agent

第一步：安装 uv（Python 包管理器）

bash

curl -LsSf [https://astral.sh/uv/install.sh](https://astral.sh/uv/install.sh) | sh

如果提示 uv: command not found，执行：

bash

echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc

source ~/.bashrc

验证安装：

bash

uv --version

第二步：安装 Hermes

bash

curl -fsSL [https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh](https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh) | bash

安装过程会自动：

\- 检测/安装 Python 3.11+

\- 安装 Node.js（用于浏览器自动化）

\- 克隆代码到 ~/.hermes/hermes-agent

\- 创建虚拟环境并安装依赖

安装完成后：

bash

source ~/.bashrc

hermes --version  验证安装

配置模型提供商

方案一：DeepSeek API（国内推荐）

DeepSeek 国内可直接访问，新用户有免费额度（约 500 万 tokens）。

获取 API Key：

1\. 访问 \[DeepSeek 开放平台\]([https://platform.deepseek.com/](https://platform.deepseek.com/))

2\. 注册账号

3\. 进入“API Keys”页面创建密钥

配置 Hermes：

bash

hermes setup

选择 Quick setup → 在列表中找到 DeepSeek → 依次输入：

\- API Key（粘贴你的密钥）

\- Base URLhttps://[api.deepseek.com](http://api.deepseek.com)

\- 模型deepseek-chat 或 deepseek-coder

方案二：Claude API（Anthropic）

Claude 能力最强，适合高质量对话和复杂推理，需国际信用卡。

获取 API Key：

1\. 访问 \[Anthropic Console\]([https://console.anthropic.com/](https://console.anthropic.com/))

2\. 注册账号（需国外手机号验证）

3\. 进入“API Keys”页面创建密钥（新用户有 $5 赠金）

配置 Hermes：

bash

hermes setup

选择 Quick setup → 在列表中找到 Anthropic (Claude models) → 选择认证方式：

\- 选 2（Anthropic API key - pay-per-token）

\- 粘贴 API Key

\- 选择模型（推荐 claude-sonnet-4-20250514，性价比高）

\> 可选模型claude-opus-4-7（最强）claude-sonnet-4-6（平衡）claude-haiku-4-5（最快最便宜）

方案三：Ollama 本地模型（免费离线）

完全免费，无需网络，适合隐私敏感或不想付费的用户。

安装 Ollama：

bash

curl -fsSL [https://ollama.com/install.sh](https://ollama.com/install.sh) | sh

下载模型（任选一个）：

bash

ollama run deepseek-r1:1.5b  轻量，约 1GB，适合低配电脑

ollama run llama3.2:3b  轻量，约 2GB

ollama run qwen2.5:7b  平衡，约 4GB，需 16GB 内存

ollama run llama3.1:8b  较强，约 4.7GB

配置 Hermes 使用 Ollama：

1\. 保持 Ollama 服务运行（开一个终端执行 ollama serve，或先跑一次 ollama run 并保持不退出）

2\. 在新终端中执行：

bash

hermes setup

3\. 选择 More providers... → Custom endpoint (enter URL manually)

4\. Base URLhttp://127.0.0.1:11434/v1

5\. API Key：直接回车跳过（留空）

6\. 选择已下载的模型（如 deepseek-r1:1.5b）

7\. 其余选项默认，完成

8.配置完成后，直接运行：

bash

hermes
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

1.web3一部分程度上是要解决信任问题

2.如何解决信任问题（区块链）：

•数据不可篡改

•逻辑即代码公开透明

•不同的共识协议（信任模型：POW,POS，DPOS,POH等等）

•私钥签名进行鉴权

3.链只认私钥

4.钱包在 Web3 中扮演着身份与资产管理的双重角色

5.交易更快上链主要是gas

6.nonce：止重放攻击与交易乱序执行，确保账户状态变更的原子性。

7.Data：定义了复杂的业务逻辑与参数传递，是链上应用交互的灵魂。

8.交易模拟：在提交交易前验证执行结果，精准预测交易结果，避免不必要的资产损耗，是交易可视化的非常重要的一环。（在交易签名之前做）

9.可以根据目标倒推东西（就业方面）

10.需要具备能力：

•基础能力更重要：理解协议、共识与安全边界将成为 Web3 时代的唯一护城河。

•Web3 是系统工程：它不仅是合约编写，更是对一致性、安全性与分布式协作的极致追求。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->


1.了解了Hermes vs OpenClaw一些对比：

想要一个 越用越聪明的贴身 AI 助理，单智能体 + 内置学习闭环 → 选 Hermes

需要 组建一支 AI 团队处理复杂协作 ，多智能体编排 + 网关生态 → 选 OpenClaw

2.了解ai可以实现的web3场景：AI 赋能“交易所用户意图交易”、市场预测与情报分析

[3.hermes](http://3.hermes) agent如何切换模型hermes model

![屏幕截图 2026-05-19 210700.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/czxzazsbb/images/2026-05-19-1779196033538-_____2026-05-19_210700.png)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->



了解一个新的ai学习软件Hermes Agent很感兴趣，希望可以搭建一个我的专属学习搭档，帮我管理时间、追踪进度和整理知识的智能搭档，有效管理学习节奏。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
