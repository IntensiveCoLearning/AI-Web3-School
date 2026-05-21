---
timezone: UTC+8
---

# Amber-DD

**GitHub ID:** Amber-DD

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->
老师晚上好，今天依旧很晚hahha，我看了Draked老师的回放+John老师的x教程，自己顺了一遍安装的流程并增加了细节，整个流程没有作完，因为最后是AI 模型服务商的选择，我在想是否搞一个付费的，可能要到24点之后了，我先提交已完成的流程笔记，最后有证明图片，Ubuntu窗口的用户名就是我报名的名字Amber

# Windows 安装 WSL + Ubuntu + 开发环境 + Hermes Agent 完整教程

## 一、安装 WSL（Linux 子系统）

1.  键盘同时按下 **Windows 键 + X**（Windows 键在键盘左下角，带窗口图标）
    
2.  屏幕左下角弹出菜单，点击 **Windows PowerShell (管理员)(A)**
    
3.  在窗口输入命令，系统自动开始下载 WSL（适用于 Linux 的 Windows 子系统）：
    
    powershell
    
    ```
    wsl --install
    ```
    
4.  下载成功后，**重启电脑**
    
5.  重启后，再次以管理员身份打开 PowerShell，检查 WSL 状态：
    
    powershell
    
    ```
    wsl --list --verbose
    ```
    
    ✅ 需看到结果：`Ubuntu-22.04 Running 2`（VERSION 必须为 2）
    
6.  查看官方支持的 Linux 版本列表：
    
    powershell
    
    ```
    wsl --list --online
    ```
    
7.  安装 Ubuntu-22.04（确认列表存在后执行）：
    
    powershell
    
    ```
    wsl --install -d Ubuntu-22.04
    ```
    
    等待进度条完成即可
    

* * *

## 二、Ubuntu 初始化配置

8.  在 Windows 开始菜单中找到 **Ubuntu** 并打开
    
9.  按照提示设置 Ubuntu 账户用户名和密码（密码输入时不显示，正常输入即可）
    

* * *

## 三、Ubuntu 安装 Python 3.11

10.  打开 Ubuntu 终端，依次执行以下命令（**Ubuntu 中右键 = 粘贴，Ctrl+V 无效**）：
     
     bash
     
     运行
     
     ```
     sudo add-apt-repository ppa:deadsnakes/ppa -y
     sudo apt update
     sudo apt install python3.11 python3.11-venv python3.11-dev -y
     ```
     

* * *

## 四、Ubuntu 安装 Node.js

11.  依次执行以下命令安装 Node.js 20 版本：
     
     bash
     
     运行
     
     ```
     curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
     sudo apt install -y nodejs
     ```
     
12.  验证安装是否成功（执行后显示版本号即为成功）：
     
     bash
     
     运行
     
     ```
     node -v
     npm -v
     ```
     

* * *

## 五、Ubuntu 安装 Hermes Agent

13.  执行一键安装命令：
     
     bash
     
     运行
     
     ```
     curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
     ```
     
14.  安装完成后，刷新环境配置：
     
     bash
     
     运行
     
     ```
     source ~/.bashrc
     ```
     
15.  验证安装（执行后显示版本号即为成功）：
     
     bash
     
     运行
     
     ```
     hermes --version
     ```
     

* * *

### 小提示

-   所有 Ubuntu 内的粘贴操作，**直接用鼠标右键**
    
-   执行命令时若提示输入密码，输入你设置的 Ubuntu 密码即可（密码不显示，输完回车）
    

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Amber-DD/images/2026-05-20-1779292163691-image.png)
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->

老师们好，由于本职工作周一周二最忙所以这两天有点掉队今天主要学习的是AI的基础知识

**LLM（大语言模型）**  
通过海量文本训练的“下一个词预测器”，能理解和生成文本，但困在训练数据的时空中，会“幻觉”，没有手脚去触碰真实世界。

**Prompt（提示词）**  
你写给模型的“任务小纸条”，通过设定角色、边界和格式把模糊需求翻译成模型能稳定执行的指令，纸条本身不包含逻辑。

**Workflow（工作流）**  
把 LLM 调用、工具操作和代码判断按固定顺序钉死的“标准作业程序”，稳定高效但路径写死，不懂变通。

**Agent（智能体）**  
以 LLM 为大脑、配上了眼睛和双手的自主决策者，在“观察→思考→行动→再观察”的循环里灵活追求目标，而不仅是机械执行流程。

**Tool Use（工具使用）**  
模型通过生成结构化指令去调用外部 API 的“工具箱”，让它从只会说的理论家变成能查、能算、能操作的实干派。

**AI Coding（AI 编程）**  
以上所有概念在编程领域的复合应用：把代码库当上下文，把读写文件和终端当工具，组装成一个帮你理解项目、写代码、找 bug 的编程搭子。

## **串联记忆：**

## 从**一个人**开始，一层一层给他加装备，最后变成**你的编程搭子**。

* * *

**第一层：裸人（LLM）**  
你雇了一个脑子极好、读过天下书的高材生，但他天生没有手脚，关在密室里，只能靠说话输出。他能写方案、能推理、能解释，但问他“外面天气怎样”，他只能瞎猜——因为他碰不到真实世界，也不知道今天是几号。

**第二层：递纸条（+ Prompt）**  
每次找他干活，你得递一张纸条，写清楚“你是谁、要干啥、什么格式、别瞎编”。纸条写得越细，他回答越靠谱。纸条本身没魔法，只是沟通界面。

**第三层：固定流水线（+ Workflow）**  
简单重复的事，你直接给他订一套标准作业流程：先做A，再做B，最后做C。他不用动脑子，照着跑就行。稳定高效，但不会拐弯。

**第四层：装上手脚（+ Tool Use）**  
你觉得光说不练不行，给他接上了外部工具——能搜网页的线、能执行命令的终端、能读写文件的手。他终于能碰到真实世界了：查资料、跑代码、读文件，不再只是动嘴。

**第五层：自主决策（= Agent）**  
有了手和眼睛，你不必再一步步指挥他了。你说“把这事办成”，他自己观察情况、选工具、看结果、发现错了就拐弯重来。他不是在执行流程，而是在追求目标。这就是 Agent——在循环里自己决策的高材生。

**第六层：编程搭子（= AI Coding）**  
把上面所有装备塞进一个编程环境里：他能看见你的代码库（Context），能读文件、写文件、跑终端（Tool Use），你递纸条说“修一下登录的 bug”（Prompt），他就自己查、自己改、自己验证，全程像 Agent 一样自主规划。这一整套组合拳，就叫 AI Coding。
<!-- DAILY_CHECKIN_2026-05-19_END -->
<!-- Content_END -->
