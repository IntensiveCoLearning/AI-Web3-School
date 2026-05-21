---
timezone: UTC+8
---

# sl

**GitHub ID:** sl-tech-design

**Telegram:** @yishengjiuhao

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
今天任务：  
①在[https://aiweb3.school/zh/handbook/ai/](https://aiweb3.school/zh/handbook/ai) 网站上复习AI的概念

②琢磨我的hermes和tg为什么连不上。找了很多帖子，也借助AI工具，步骤都大致一样，我这边也照着做了，并且也确认了hermes的config.yaml和.env文件，该添加的配置我都是添加了，但是我这边就是不通....不抛弃不放弃，明天继续看看

③今天大部分时间都在忙工作上的事情。然后今天在使用codex辅助编程的时候，觉得codex太喜欢过度设计了。比如，在优化业务流程时，它会增加非必要的数据结构，然后会把流程拉的很长。

④参加线上的分享会
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

两个任务：学习web3基础概念；本地部署hermes。  
**Web3基础概念**

-   account
    

> **账户：区块链的链上身份，可以用于持有资产、发送交易以及与智能合约交互。在以太坊中，有两种类型的账户：EOA账户（任何拥有私钥的人控制）和合约账户（部署到网络中的智能合约，其由代码控制）。**

-   address
    

> **地址：区块链账户链上公开的标识，由账户公钥衍生而来，称为address，可以理解为“收款地址“。**
> 
> **链上转账就是转到对应账户的address。**

-   wallet
    

> **钱包：用于管理私钥，发起交易或者签署交易等操作的工具。**

-   seed phrase
    

> **助记词：可以恢复私钥的一组单词。助记词的存在主要便于人类记忆，可以通过助记词恢复私钥。拥有助记词就相当于拥有对应的私钥了。**

-   private key
    

> **私钥：随机生成的字符串和数字，拥有账户的绝对控制权。私钥一旦泄露，账户上的资产面临被盗的风险。**

-   signature
    

> **签名：交易内容和私钥结合生成的字符串，能够证明该交易的确是由本人发起，且交易内容没有被修改。**

-   transaction
    

> **交易：交易是由账户发起的行为，如账户A向账户B转账1 eth，这个行为是一笔交易。如果交易正常完成，那么账户A减少1eth，同时账户B余额增加1 eth。**

-   Gas
    

> **一种用于在区块链中执行交易所需费用的计量单位。Gas费是用户发起交易的交易手续费，只要是支付给执行并确认该用户这笔交易的区块链节点。粗略的说，Gas费=Gas Price \* Gas Limit**

-   smart contract
    

> **智能合约是存储在区块链上的代码，当满足执行的条件时，会触发其自动执行。合约可以被链上用户部署和调用。合约也可以存储状态数据，但是合约存储成本比较高，一般仅把必要的数据存储在合约中。**

## **win11 搭建hermes过程记录**

Hermes支持Linux、macOS、WSL2 和 Android (Termux)，不支持win系统。因此，想要在win上运行，需安装使用WSL。

### **WSL安装**

**wsl2是什么**

可以把它理解成“Windows 里的 Linux 终端环境”。装好以后，你可以在 Windows 电脑上直接打开 Ubuntu 终端，按 Linux 的方式安装和运行 Hermes Agent。

**安装wsl2**

以管理员身份运行PowerShell，输入命令`wsl --install`，安装好后重启电脑。

![image-20260519094620294.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/sl-tech-design/images/2026-05-20-1779280427748-image-20260519094620294.png)

等待一段时间后，安装完成。需要重启。

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/sl-tech-design/images/2026-05-20-1779280456555-image.png)

这里只是安装好了WSL环境，但是Linux发行版还未安装。执行命令`wsl.exe --install Ubuntu-26.04`安装制定版本的Ubuntn系统。

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/sl-tech-design/images/2026-05-20-1779280475012-image.png)

等了蛮久的，终于安装成功了。

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/sl-tech-design/images/2026-05-20-1779280504638-image.png)

> **这里埋了一个坑：看上面安装的过程信息，有提示网络代理问题。我当时没有在意，就直接开始执行安装Hermes命令了，但是就一直提示安装失败。**
> 
> ![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/sl-tech-design/images/2026-05-20-1779280523800-image.png)
> 
> **如果需要WSL 访问代理，那是要修改一些配置的。这里采取了使用WSL 镜像网络模式（新版本）。具体修改如下：**
> 
> **win系统中，在C:\\Users\\你的用户名\\.wslconfig文件中，增加**
> 
> ```
> [wsl2]
> networkingMode=mirrored
> ```
> 
> **然后在win的PowerShell中使用命令**`wsl --shutdown`**关闭，并重启命令**`wsl.exe`**重启wsl linux。**
> 
> **然鹅，就在我以为可以成功安装Hermes的时候，它报！ 错！ 了！。**
> 
> ![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/sl-tech-design/images/2026-05-20-1779280546137-image.png)
> 
> **通过把错误问题丢给GPT，走一步排查一步，最终还是需要设置http\_proxy。**
> 
> **设置过程**
> 
> **①先删除之前配置的./wslconfig，关闭wsl并重启wsl。**
> 
> **②进入wsl，使用命令cat /etc/resolv.conf查看nameserver 后面的IP地址，就是win主机的地址。注意，如果代理开启了tun模式，那么nameserver 不一定是真正可访问的 Windows 主机 IP，还是得去win主机上使用ipconfig找到以太网适配器 vEthernet (WSL (Hyper-V firewall))的地址。**
> 
> **③查看clash verge 代理端口，结合上一步查找到的IP地址。在wsl中分别输入命令：**`export http_proxy=http://172.28.64.1:7890`**和**`export https_proxy=http://172.28.64.1:7890`**。**
> 
> **④关闭wsl并重启wsl。重新下载Hermes。**
> 
> **信心满满，但是又意外的失败了....**
> 
> ![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/sl-tech-design/images/2026-05-20-1779280561854-image.png)
> 
> **这次，直接给错误信息给GPT，分析出Git 大数据传输仍然不稳定{ GnuTLS recv error (-9) -> TLS 连接中途断了 }，部分机场对HTTP/2 + GitHub clone兼容性差。**
> 
> **那如何让 git 使用更稳定的传输方式？使用**`HTTP/1.1`**。在wsl中关闭http/2：**`git config --global http.version HTTP/1.1`**。重新下载hermes：**
> 
> ![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/sl-tech-design/images/2026-05-20-1779280584698-image.png)
> 
> **麻了，还是失败，放弃http的方式了，使用ssh。直接在wsl配置ssh，然后在github上添加wsl的ssh公钥。**
> 
> **然后就正常了，开始常见虚拟环境，安装python了。**
> 
> ![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/sl-tech-design/images/2026-05-20-1779280600045-image.png)

## **安装Hermes**

使用命令`curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash`安装hermes：

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/sl-tech-design/images/2026-05-20-1779280617809-image.png)

这是一个漫长的过程....，不过，这次结果是好的，哈哈哈~

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/sl-tech-design/images/2026-05-20-1779280646553-image.png)

确定成功了！

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/sl-tech-design/images/2026-05-20-1779280668912-image.png)

### **参考**

```
wsl安装：https://learn.microsoft.com/zh-cn/windows/wsl/install
​
https://github.com/NousResearch/hermes-agent/blob/main/README.zh-CN.md
```
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->


主要在自己本地部署hermes。但是遇到一些问题，现在卡在网络上，下载hermes到约99%就会失败，目前正在排查（放弃使用http clone，改为使用ssh了，不知道会不会成功）。后面也会把整个部署过程记录，上传到打卡点。

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/sl-tech-design/images/2026-05-19-1779196495368-image.png)
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->



学习一些有关AI基础概念：  
**AI 基础概念**

-   LLM
    

> **全称是：Large Language Model，即大语言模型，用于理解、生成和处理人类的自然语言。它是通过大量的数据训练，学会了人类语言规律和知识，基于训练的知识，可以推理出答案。**

-   prompt
    

> **提示词，简单来说，就是你给AI输入的指令，如：“介绍GO语言的特性”。当然，prompt可以是简单的一句话，也可以是包含角色、任务目标、输出要求、还有设定的条件等内容。当然，也**

-   context window
    

> **上下文窗口：指在和AI交流过程中的，AI能够记忆的内容大小。超过这个内容大小，AI会忘记前面的内容。在已有的一些工具中，当达到窗口大小时，会进行自动压缩，以便于AI工具能够记忆更多的内容，并且降低遗忘更早内容的概率。**

-   workflow
    

> **工作流：AI的工作拆分成流水线的形式，然后逐步执行。比如用户提出问题，AI可能的流水线：检索资料->阅读资料并提取重点-> 总结重点内容 -> 输出给用户**

-   agent
    

> **智能体：能自主决策并执行下一步动作的 AI 系统。**

-   tool use
    

> **工具使用，主要指大语言模型调用外部工具能力。比如说，大语言模型本身是无法联网的，如果借助外部搜索引擎工具，就可以实时联网查询最新的资讯信息。**

  
线上参与co-learning和分享会
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
