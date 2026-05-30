# MinimalCounter — 最小智能合约

最简单的 Solidity 计数器合约，用于学习 Remix IDE 部署流程。

## 合约功能

- `count`：公开的计数器变量，初始值为 0
- `getCount()`：查询当前计数
- `increment()`：计数器 +1

## 手动部署步骤（Remix + MetaMask）

### 1. 打开 Remix
浏览器访问 https://remix.ethereum.org

### 2. 新建文件
左侧文件面板 → 点击「Create New File」图标 → 输入 `MinimalCounter.sol` → 将上面的合约代码粘贴进去

### 3. 选择编译器
左侧切换到「Solidity Compiler」标签 → 版本选 **0.8.20+**（或直接选 0.8.20）→ 点「Compile MinimalCounter.sol」

### 4. 连接 MetaMask
- 打开 MetaMask 插件，切换到 **Sepolia 测试网**
- 左侧切换到「Deploy & Run Transactions」标签
- Environment 下拉选 **Injected Provider - MetaMask**
- MetaMask 弹窗确认连接

### 5. 部署合约
- Contract 下拉选 `MinimalCounter`
- 点橙色的「Deploy」按钮
- MetaMask 弹窗 → 确认交易（Gas 费从测试币余额扣除）

### 6. 记录合约地址
部署成功后，下方「Deployed Contracts」展开会看到合约地址，**复制保存**。

### 7. 调用合约
- 点 `getCount` 蓝色按钮 → 结果应为 **0**
- 点 `increment` 橙色按钮 → MetaMask 弹窗确认
- 再点 `getCount` → 结果应为 **1**

### 8. 在区块浏览器查看
访问 https://sepolia.etherscan.io，搜索你的合约地址，可查看合约详情和交易记录。

---

## 环境要求

- Chrome + MetaMask 插件
- Sepolia 测试网 + 测试币
- 无需安装任何本地开发环境
