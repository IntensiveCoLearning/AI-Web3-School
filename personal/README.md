# personal/

我（@czxzazsbb）的 AI × Web3 School 个人学习工作区。

本目录是 fork 内的个人命名空间，**不影响 upstream**（`IntensiveCoLearning/AI-Web3-School`）。upstream 同步走 `git pull upstream main` 时不会和这里冲突。

## 目录约定

| 目录 | 用途 |
| --- | --- |
| `profile.md` | 学员画像、目标、节奏（public repo，**不写隐私信息**） |
| `learning-plan.md` | 个人学习计划（按周/阶段，可随时迭代） |
| `daily/` | 每天一份详细学习笔记 `YYYY-MM-DD.md` |
| `tasks/` | 课程任务 / hackathon 子任务的过程记录 |
| `experiments/` | 实验性脚本、prompt 试验、demo 草稿 |
| `handbook-feedback/` | 对 [aiweb3.school/zh/handbook/](https://aiweb3.school/zh/handbook/) 的勘误与建议（4 字段格式见目录内 README） |
| `hackathon/` | 项目提案、技术路线、Demo 材料 |
| `submissions/` | 正式提交给 WCB / 打卡平台的内容存档（链接 + 截图说明） |
| `templates/` | daily-note / task-note 等模板，新建笔记时复制 |

## 打卡机制说明

**官方打卡**通过 fork 根目录 `notes/czxzazsbb.md` 的 `<!-- Content_START -->` 区域记录（被 upstream 的 `sync_status_readme.py` 扫描统计）。

**本目录里的 daily/** 是详细版本，`notes/czxzazsbb.md` 里只放一行摘要 + 链接到本目录。两边互不替代。

## 隐私

本仓库是 public fork：
- **不写**：API key / 助记词 / 私钥 / 内部会议链接 / 他人个人信息 / 未公开联系方式
- WCB Agent API secret 放在本地环境变量 `WCB_AGENT_SECRET_API_KEY`，不进任何文件
