---
timezone: UTC+8
---

# bootpuss

**GitHub ID:** bootpuss

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
之前的Claude Code配置在win端，运行效率不高，且cc本身就是基于unix设计的，很多web3的框架也是更适合linux  
因此今天配置了wsl linux for windows的虚拟系统  
并将claude code switch配置了  
  
WSL2部署与配置

### 安装WSL2

```PowerShell
wsl --install
```

```PowerShell
PS C:\Users\16260> wsl --list --online
以下是可安装的有效分发的列表。
使用“wsl.exe --install <Distro>”安装。

NAME                            FRIENDLY NAME
Ubuntu                          Ubuntu
Ubuntu-26.04                    Ubuntu 26.04 LTS
Ubuntu-24.04                    Ubuntu 24.04 LTS
Ubuntu-22.04                    Ubuntu 22.04 LTS
openSUSE-Tumbleweed             openSUSE Tumbleweed
openSUSE-Leap-16.0              openSUSE Leap 16.0
SUSE-Linux-Enterprise-15-SP7    SUSE Linux Enterprise 15 SP7
SUSE-Linux-Enterprise-16.0      SUSE Linux Enterprise 16.0
kali-linux                      Kali Linux Rolling
Debian                          Debian GNU/Linux
AlmaLinux-8                     AlmaLinux OS 8
AlmaLinux-9                     AlmaLinux OS 9
AlmaLinux-Kitten-10             AlmaLinux OS Kitten 10
AlmaLinux-10                    AlmaLinux OS 10
archlinux                       Arch Linux
FedoraLinux-44                  Fedora Linux 44
FedoraLinux-43                  Fedora Linux 43
eLxr                            eLxr 12.12.0.0 GNU/Linux
OracleLinux_7_9                 Oracle Linux 7.9
OracleLinux_8_10                Oracle Linux 8.10
OracleLinux_9_5                 Oracle Linux 9.5
SUSE-Linux-Enterprise-15-SP6    SUSE Linux Enterprise 15 SP6
```

安装指定版本

```PowerShell
wsl --install -d Ubuntu-24.04
```

注册系统账号和密码

关闭wsl

```PowerShell
wsl --shutdown
```

在D盘建一个新位置，然后导出wsl

```PowerShell
mkdir D:\WSL\Ubuntu
wsl --export Ubuntu-24.04 D:\WSL\ubuntu.tar
```

清理C盘

```PowerShell
wsl --unregister Ubuntu-24.04
```

在D盘解压

```PowerShell
wsl --import Ubuntu-24.04 D:\WSL\Ubuntu D:\WSL\ubuntu.tar
```

### 限制内存

笔电内存不够

`Win + R` 键

输入 `%UserProfile%` 然后回车。这会打开你 C 盘里的用户文件夹。

在这个文件夹里，右键 -> 新建 -> **文本文档**。

把这个文档重命名为 `.wslconfig`

用记事本打开这个文件，把下面这段代码复制进去，保存并关闭：

```Plain
[wsl2]
memory=4GB
processors=4
autoMemoryReclaim=dropcache
```

autoMemoryReclaim=dropcache，自动内存可能无法生效，可以去掉

没生效，直接在powershell里生成试试

```PowerShell
Set-Content -Path "$env:USERPROFILE\.wslconfig" -Value "[wsl2]`nmemory=4GB`nprocessors=4`nautoMemoryReclaim=dropcache" -Encoding ascii
```
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

学习了hermess agent

学习了 [Web3 运行原理](https://docs.google.com/presentation/d/1NUeO115bLnz0V8aejx9bYqQTaDrznTjhgbCkn-pK1a0/edit?usp=sharing)：作为 Week 1 的 Web3 基础补充材料，帮助学员理解账户、交易、Gas、合约执行和链上状态如何共同构成 Web3 的运行机制。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->


合约入门

Claude Code配置部署
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->



**MaaS**

Model as a Service（模型即服务）

不需要拥有模型，也不需要维护模型，只要联网就能直接调用模型的能力。

核心入参：`model`、`messages`、`temperature`、`max_tokens`

**Prompt** 是让模型回答，决策在人；

**Workflow** 是预定义任务流程，模型是其中一个节点，路径固定；

**Agent** 是模型自主规划、动态调用工具、跨轮管理状态

**什么时候用Agent？**

目标开放式、无法提前写死步骤；

需要多工具协作；

中间结果决定下一步策略；

需跨会话记忆状态。更适合用简单方案的信号：

数据确定性要求高用数据库查询。

[Hugging Face LLM Course Chapter 1](https://huggingface.co/learn/llm-course/chapter1/1)：系统理解 LLM 工作原理
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
