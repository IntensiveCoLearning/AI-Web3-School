---
timezone: UTC+8
---

# ZanyK4502

**GitHub ID:** ZanyK4502

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->
用 GitHub CLI 把本地代码推到github仓库和其他方式推到github 仓库有什么区别，其他方式有哪些方式

区别主要在于：**GitHub CLI 帮你把“创建远程仓库 + 配置 remote + push”串起来了**；其他方式通常要你分开做。

你刚才用的是 GitHub CLI，也就是 `gh`。它能直接做：

```powershell
gh repo create ai-web3-school-cohort-0 --public --source . --remote origin --push
```

这一条相当于同时完成：

1.  在 GitHub 上创建 repo
    
2.  把本地仓库绑定到 GitHub remote
    
3.  执行 `git push`
    
4.  设置本地 `main` 跟踪远程 `origin/main`
    

**GitHub CLI 的优点**

-   适合命令行工作流
    
-   不需要手动去网页创建仓库
    
-   登录走浏览器授权，不用你复制 token 给任何人
    
-   对自动化、学习仓库初始化很方便
    

**其他常见方式**

1.  **GitHub 网页 + git 命令**
    

你先在 GitHub 网站手动点 New repository，创建空仓库。然后本地运行：

```powershell
git remote add origin <https://github.com/用户名/仓库名.git>
git branch -M main
git push -u origin main
```

这是最经典的方式。

1.  **VS Code Source Control**
    

在 VS Code 左侧源代码管理里操作：

-   初始化 Git
    
-   stage 文件
    
-   commit
    
-   Publish Branch / Publish to GitHub
    

它底层还是 Git/GitHub，只是用图形界面包装了。

1.  **GitHub Desktop**
    

安装 GitHub Desktop 后：

-   Add local repository
    
-   Publish repository
    
-   Commit / Push / Pull 都在图形界面点按钮
    

适合不想用命令行的人。

1.  **Git 命令 + SSH**
    

先在 GitHub 配好 SSH key，然后：

```powershell
git remote add origin git@github.com:用户名/仓库名.git
git push -u origin main
```

优点是以后不用反复登录，适合长期开发；缺点是第一次配置 SSH key 稍微麻烦。

1.  **直接网页上传文件**
    

GitHub repo 页面里点：

```
Add file -> Upload files
```

适合临时上传几个文件，但不适合长期维护项目，因为本地 Git 历史和远程同步会比较乱。

简单说：

-   **新手图形界面**：GitHub Desktop 或 VS Code
    
-   **经典开发方式**：GitHub 网页建仓库 + `git remote add` + `git push`
    
-   **长期开发更舒服**：SSH + Git
    
-   **自动化/Agent 辅助最方便**：GitHub CLI
    
-   **临时交作业**：网页上传也能用，但不推荐长期使用
    

你这次用 GitHub CLI 是合适的，因为它最适合“本地已经有仓库，要快速创建 GitHub repo 并推上去”的场景。

本地凭证是 SSH 吗，为什么我之前用GitHub 网页 + git 命令 没有登录，很早之前好像登录过

你当前这个仓库**不是 SSH**，是 **HTTPS + 本地凭证管理器/GitHub CLI token**。

我刚检查到：

```
origin <https://github.com/ZanyK4502/ai-web3-school-cohort-0.git>
Git operations protocol: https
Logged in via keyring
```

意思是：

-   remote 地址是 `https://...`，所以不是 `git@github.com:...` 这种 SSH。
    
-   你的 GitHub CLI 登录信息存在系统 keyring/凭证管理器里。
    
-   Git 也配置了 credential manager，所以之后 `git push` 时可能自动拿本地保存的 GitHub 凭证，不会每次问你登录。
    

你之前用“GitHub 网页 + git 命令”没有登录，很可能是因为很早之前已经登录过，凭证被 Windows 保存了。常见保存位置包括：

-   Windows Credential Manager
    
-   Git Credential Manager
    
-   GitHub CLI keyring
    
-   VS Code / GitHub Desktop 也可能帮你保存过授权
    

可以这样理解：

**SSH 方式：**

```
git@github.com:用户名/仓库名.git
```

靠本机的 SSH key，比如 `~/.ssh/id_ed25519`。

**HTTPS 方式：**

```
<https://github.com/用户名/仓库名.git>
```

靠本地保存的 token/凭证。你现在就是这种。

所以你之前不是“没登录也能推”，而是“已经登录过，电脑帮你记住了凭证”。这也是正常的。

那既然我之前本地已经有凭证为什么前面弄GitHub CLI 的时候又登录了一遍？

因为这是**两套相关但不完全相同的登录体系**。

你之前本地可能已经有的是：

```
Git / Git Credential Manager 的 HTTPS 凭证
```

它主要服务于这些命令：

```bash
git clone
git pull
git push
```

但我们刚才用的是 GitHub CLI：

```bash
gh repo create
gh auth login
gh auth status
```

`gh` 需要自己的 GitHub 授权，尤其是它要做的不只是 `git push`，还要调用 GitHub API，例如：

-   创建 GitHub repo
    
-   设置 repo 可见性 public/private
    
-   查询登录用户
    
-   管理 issue、PR、release 等
    

所以即使 `git push` 早就能用，`gh repo create` 也可能还需要你单独登录一次。

简单类比：

-   `git` 凭证：让我把代码推上去。
    
-   `gh` 凭证：让我操作 GitHub 网站上的功能，比如创建仓库。
    

它们都可能使用 HTTPS token，也都可能存在 Windows 凭证管理器里，但不是同一个“登录状态”。

这次你登录 `gh` 后，`gh auth status` 显示：

```
Git operations protocol: https
Logged in as ZanyK4502
```

所以以后再用 `gh repo create`、`gh pr create`、`gh issue list` 之类，一般就不用再登录了。
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
