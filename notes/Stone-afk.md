---
timezone: UTC+8
---

# Stone

**GitHub ID:** Stone-afk

**Telegram:** @stoneafk

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->
## 多链地址生成 / 助记词派生多链地址的流程

**共同部分（所有链一样）**：

1.  生成 128 或 256 位随机数（熵）
    
2.  对熵算校验位，按每 11 位切分映射到 2048 词表，得到 12 或 24 个助记词（BIP-39）
    
3.  助记词 + 可选密码经过 PBKDF2（2048 轮 HMAC-SHA512）得到 64 字节种子
    
4.  种子经过 HMAC-SHA512（key 为 "Bitcoin seed"）得到主私钥（前 32 字节）+ 主链码（后 32 字节）
    

### BTC

1.  按 BIP-32 从主私钥逐层派生，路径 m/44'/0'/0'/0/0（Legacy）或 m/86'/0'/0'/0/0（Taproot）
    
2.  最终私钥通过 secp256k1 椭圆曲线乘法得到 33 字节压缩公钥
    

P2PKH（1 开头，Legacy）

1.  对压缩公钥做 SHA-256，得到32字节哈希
    
2.  再对结果做RIPEMD-160，得到 20 字节公钥哈希（这两步合称 Hash160）
    
3.  前面加版本前缀 0x00（主网）
    
4.  对 「版本前缀 + 公钥哈希（Hash160结果）」 做两次SHA-256，取前四个字节做校验码
    
5.  拼接：版本前缀(1字节) + 公钥哈希(20字节) + 校验码(4字节） ，做 Base58 编码
    
6.  得到开头1的地址
    

手续费最贵，因为花费时 scriptSig 里要放完整签名 + 公钥，体积大。

P2WPKH（bc1q 开头，Native SegWit）

1.  对压缩公钥做 Hash160（SHA-256 + RIPEMD-160）, 得到 20 字节公钥哈希
    
2.  组装 witness program：version=0 + 公钥哈希(20字节)
    
3.  用 Bech32编码（全小写，支持纠错）
    
4.  得到 bc1q 开头的地址
    

手续费较低，因为签名数据在 witness 区域，按 1/4 权重计费。

P2SH-P2WPKH（3 开头，Nested SegWit）

1.  对压缩公钥做 Hash160 (SHA-256 + RIPEMD-160）, 得到 20 字节的公钥哈希
    
2.  组装 witness program：version=0 + 公钥哈希(20字节)，然后再做一次 Hash160，得到 20 字节脚本哈希
    
3.  脚本哈希前面加上版本前缀，拼成 21 字节：0x05 + 脚本哈希(20字节)
    
4.  对这21字节做两次 SHA-256，然后取结果的前 4 字节作为校验码
    
5.  拼接：版本前缀(1字节) + 脚本哈希(20字节) + 校验码(4字节) = 25 字节
    
6.  对这 25 字节做 Base58 编码，得到 3 开头的地址
    

存在意义：向后兼容，老钱包不认识 bc1q 但认识 3 开头，嵌套后老钱包也能向 SegWit 地址转账。

P2TR（bc1p 开头，Taproot）

1.  取压缩公钥的 X 坐标（32字节，称为 x-only 内部公钥 P）
    
2.  计算 tweak：t = tagged\_hash("TapTweak", 坐标（P）)
    
3.  计算输出公钥：Q = P + t·G
    
4.  用 Bech32m 编码：version=1 + Q 的 x 坐标(32字节)
    
5.  得到 bc1p 开头的地址
    

Taproot 手续费最低，因为 key path 花费时 witness 里只需要一个 64 字节的 Schnorr 签名，没有公钥、没有脚本，极其紧凑。

Tweak 的意义：即使没有脚本路径也必须 tweak，确保输出公钥 Q ≠ 内部公钥 P，防止直接用原始密钥签名绕过 Taproot 逻辑。

**总结**

```
  随机数/助记词
      ↓
    私钥 (256 bit)
      ↓  secp256k1 椭圆曲线乘法
    公钥 (压缩 33 字节)
      ↓
      ├── Hash160 → Base58Check        → 1xxx   (P2PKH)
      ├── Hash160 → Bech32(v0)         → bc1qxx (P2WPKH)
      ├── Hash160 → 包P2WPKH脚本 → Hash160 → Base58Check → 3xxx (P2SH-P2WPKH)
      └── x-only + tweak → Bech32m(v1) → bc1pxx (P2TR)
```

核心思想就是：私钥决定所有权，公钥经过不同哈希和编码方式变成不同格式的地址，地址格式的演进是为了更省手续费、更好的隐私和更强的脚本能力。

### ETH

1.  按 BIP-32 从主私钥逐层派生，路径 m/44'/60'/0'/0/0
    
2.  最终私钥通过 secp256k1 椭圆曲线乘法得到 65 字节非压缩公钥
    
3.  去掉 0x04 前缀，取后64字节得到纯坐标数据
    
4.  Keccak-256 哈希获得 32 字节哈希
    
5.  取后20字节为地址（40个十六进制字符）
    
6.  执行 EIP-55 checksum 校验，后得到⼀个“⼤⼩写混合”的地址
    

1.  先把地址转成小写16进制字符串
    
2.  对这个字符串进行 Keccak-256哈希
    
3.  根据哈希里对应位的大小，决定地址里的某些字母是否大写
    
4.  最后得到一个大小写混合的地址
    

EIP-55 checksum 的意义是：地址本身带来轻量校验能力，不是为了加密，而是为了防止人工抄错、输错。

**单向性**：地址无法反推公钥（Keccak-256 单向），公钥无法反推私钥钥（椭圆曲线离散对数困难）, 但在交易签名中可以通过 ecrecover(msgHash, v,r,s) 推导出公钥；

**r / s / v 是怎么来的**：

r,s是来自 secp256k1 ECDSA 的签名结果

-   r：签名的随机数分量
    
-   s：签名的私钥分量
    
-   v：恢复位（也叫 recid / recovery id），帮助从签名中恢复公钥
    

只是在不同的交易格式下，对 v 的编码方式不同

### Solana

1.  按 SLIP-0010 从主私钥逐层派生，路径 m/44'/501'/0'/0'（每一级都是硬化派生，带 '）
    

1.  SLIP-0010 和 BIP-32 的区别：只支持硬化派生（因为 Ed25519 数学上不支持非硬化子密钥推导）
    

2.  最终私钥通过 Ed25519 曲线计算出 32 字节公钥
    
3.  对公钥直接做 Base58 编码，得到地址
    

没有哈希、没有校验码、没有版本前缀。Solana 地址就是公钥本身的 Base58 表示，通常 32~44 个字符。

和 BTC/ETH 的核心区别：

-   BTC 和 ETH 都要对公钥做哈希（Hash160 或 Keccak-256）再编码，地址 ≠ 公钥
    
-   Solana 的地址就是公钥，所以链上不需要额外暴露公钥来验签，直接用地址就能验
    
-   签名算法是 Ed25519（不是 secp256k1 ECDSA），签名 64 字节固定长度，验签速度比 ECDSA 快
    

## 钱包账户抽象怎么做

"账户抽象"在 Web3 钱包领域有两层含义：一层是**链下多链 SDK 的工程架构抽象**，一层是**链上 ERC-4337 的账户模型升级**。

### 多链 SDK 账户抽象（链下工程架构层）

要解决的问题

一个钱包要支持 30+ 条链，每条链的地址生成逻辑、交易结构、签名算法、编码方式都不一样。如果没有抽象，每条链都要从头写一套独立代码，维护成本极高。

能统一的部分

-   **密钥派生（从熵到私钥到公钥的整条路径）**：所有链都走 随机数(熵) → BIP-39 助记词 → 种子 → 主私钥 → 按路径逐层派生 → 最终私钥 → 公钥。
    

-   但派生算法分两条路：
    

-   secp256k1 链（BTC、ETH）用 BIP-32 密钥树，
    
-   Ed25519 链（Solana、Sui、Aptos）用 SLIP-0010（只支持硬化派生，路径如 `m/44'/501'/0'/0'` 每一级都带 `'`）。
    
-   路径格式统一遵循 BIP-44，只是 coin\_type 和派生算法不同；
    

-   **地址生成**：输入是公钥字节，输出是地址字符串，格式固定
    
-   **签名**：输入是哈希 + 私钥，输出是签名字节，接口形态一致
    

不能统一的部分（也不应该硬抽）

交易构建的输入参数在不同链上根本不是同一个东西：

| 链 | 构建交易需要什么 |
| BTC | UTXO 列表、找零地址、fee rate、输出地址和金额 |
| ETH | nonce、gasLimit、maxFeePerGas、to、value、data |
| Solana | recent blockhash、instructions 数组、payer |
| Cosmos | sequence、memo、msgs 数组、fee |

硬统一成一个 `TxParams`，要么变成 `map[string]interface{}`（没有类型安全），要么变成巨大联合结构体（大部分字段每次都是空的）。两种都比直接按链调还难用。

实际工程做法：分层抽象

a. **能统一的统一**：密钥派生、地址生成、签名（输入输出格式固定）  
b. **不能统一的不硬抽**：交易构建、广播、确认逻辑各链各写，上层用 `switch chainType` 路由

| 对比维度 | BTC 脚本多签 | EVM 合约多签 | MPC-TSS 门限签名 |
| 多签逻辑在哪 | 链上脚本 | 链上合约 | 链下计算 |
| 链上可见性 | 能看出是多签 | 能看出是多签合约 | 看起来是普通单签 |
| 灵活性 | 固定规则，改规则要换地址 | 可升级、可加策略 | 规则在链下，灵活 |
| 跨链 | 仅 BTC | 仅 EVM 链 | 任意链 |
| Gas 开销 | 签名越多 Witness 越大 | 合约验签消耗 Gas | 和单签一样 |
| 适合场景 | BTC 冷钱包、托管 | DAO 金库、企业钱包 | 交易所热钱包、MPC 钱包产品 |

### ERC-4337 账户抽象（链上智能合约层）

要解决的问题

传统以太坊只有两种账户：  
a. **EOA（Externally Owned Account）**：由私钥控制，能发起交易  
b. **合约账户**：由代码控制，不能主动发起交易

这导致几个痛点：  
a. 用户必须持有 ETH 才能付 Gas，新用户第一笔交易就卡住了  
b. 丢了私钥就丢了一切，没有社交恢复、没有多签、没有限额  
c. 签名算法锁死 secp256k1 ECDSA，无法用指纹、面容等方式验证  
d. 一个交易只能做一件事，不能批量操作

核心思想

让合约账户也能"主动发起交易"，把验证逻辑从协议层移到合约层，让每个钱包自己定义"什么算合法操作"。

关键角色和流程

a. **用户**构造一个 `UserOperation`（不是传统 Transaction），包含 sender、callData、签名等字段  
b. `UserOperation` 不进普通交易池，而是进入独立的 **UserOp Mempool**  
c. **Bundler（打包者）** 从 UserOp Mempool 里收集多个 UserOp，打包成一笔普通交易  
d. 这笔交易调用链上的 **EntryPoint 合约**（全局单例，统一入口）  
e. EntryPoint 逐个调用每个 UserOp 对应的 **钱包合约（Smart Account）** 的 `validateUserOp` 方法来验证签名  
f. 验证通过后，EntryPoint 调用钱包合约执行实际操作  
g. 如果用户不想自己付 Gas，可以指定 **Paymaster（代付者）** 替用户付

```
用户 → 构造 UserOperation
        ↓
  UserOp Mempool
        ↓
  Bundler 收集打包 → 一笔普通交易
        ↓
  EntryPoint 合约
        ↓
  ┌─────────────────────┐
  │ 1. validateUserOp   │ ← 钱包合约自定义验证（多签/指纹/社交恢复/任意签名算法）
  │ 2. execute          │ ← 执行实际业务逻辑
  └─────────────────────┘
        ↓
  Paymaster（可选）→ 替用户代付 Gas
```

解锁的能力

a. **Gas 代付**：Paymaster 替用户出 Gas，甚至可以用 USDT 付 Gas  
b. **自定义签名验证**：钱包合约里的 `validateUserOp` 可以用任意逻辑——多签、社交恢复、Passkey 指纹、Session Key 临时授权，不再绑死 ECDSA  
c. **批量操作**：一个 UserOp 的 callData 里可以编码多个调用，一次完成授权+兑换+转账  
d. **钱包可升级**：合约账户可以用代理模式升级验证逻辑和功能模块  
e. **无私钥即可恢复**：社交恢复——让几个守护人投票就能换控制密钥

两种"账户抽象"的本质区别

|   | ERC-4337 账户抽象 | 多链 SDK 账户抽象 |
| 抽象的是什么 | 链上账户的验证和执行逻辑 | 多链钱包的地址生成、签名、交易构建 |
| 在哪一层 | 链上（智能合约层） | 链下（SDK/后端服务层） |
| 解决的问题 | EOA 功能太弱，不够灵活 | 多链接入成本高，逻辑不统一 |
| 核心价值 | 让钱包像应用一样可编程 | 让一套代码适配多条链 |

一个是**链上的账户模型升级**，一个是**链下的工程架构设计**，层次完全不同但都叫"账户抽象"。

## 多签怎么做

多签（Multi-Signature）, 就是一笔交易需要多个私钥签名共同签名才能执行，比如 2-of-3 多签， 意思就是3个人各持一把私钥，至少2个人签名这比交易才有效。

### BTC 原生多签（脚本级）

BTC 的 Script 语言天然支持多签，直接在锁定脚本里写规则：

1.  多个参与方各自生成密钥对，收集所有公钥
    
2.  用公钥构造一个多签赎回脚本（RedeemScript）：OP\_2 <pubKey1> <pubKey2> <pubKey3> OP\_3 OP\_CHECKMULTISIG（这是2-of-3）
    
3.  对赎回脚本做 Hash160，生成 P2SH 地址（3 开头）， 资金打到这个地址
    
4.  花费时，用PSBT流程协作签名：
    

1.  Creator 构造交易骨架（inputs/outputs），生成 PSBT 文件
    
2.  Updater：填充每个 input 的 UTXO 信息（金额、scriptPubKey）、redeemScript
    
3.  Signer 1 用自己的私钥签名，写入 PSBT 的 partial\_sigs 字段
    
4.  Signer 2 同上，添加第二个签名
    
5.  Finalizer 检查签名数 ≥ 门限（2），组装最终的 witness/scriptSig
    
6.  Extractor：从 PSBT 提取完整原始交易（raw tx）
    

5.  广播
    

特点：多签逻辑在链上脚本里执行，节点直接验证。

### EVM 合约多签（Gnosis Safe 方案）

EVM 链上没有原生多签指令，通过智能合约实现：

1.  部署一个多签合约（如 Gnosis Safe），初始化时设定 owners 列表和门限值（如 2-of-3）
    

1.  owners = \[0xAAA..., 0xBBB..., 0xCCC...\]；threshold = 2
    
2.  那 Owner 就是这三个 EOA 地址背后的人（或设备），谁持有这个地址的私钥谁就是 Owner。
    

2.  资金打到这个合约地址
    
3.  发起交易时
    

1.  一个 owner 提交提案（目标地址、金额、calldata）
    
2.  其他 owner 对提案哈希进行链下签名
    
3.  收集足够门限数量的签名后，任何人调用合约的 execTransaction
    
4.  合约内部逐个验证签名，通过后执行转账
    

4.  合约还支持：增减 owner、修改门限、加时间锁、加白名单
    

特点：灵活可升级，但每笔多签交易本身要消耗 Gas。

### MPC-TSS 门限签名（链下多签）

前面两种方案，链上能看出来这是多签交易。MPC-TSS 不一样——链上看起来和普通单签交易完全一样：

1.  密钥生成（KeyGen）：多方通过 GG18/GG20 协议交互，各自得到一个密钥分片（share），全程没有任何一方持有完整私钥
    
2.  签名（Sign）：需要签名时，达到门限数量的参与方各自用自己的 share 参与多轮交互计算，最终合成一个标准的 ECDSA/EdDSA 签名
    
3.  这个签名和单把私钥签出来的格式完全相同，链上验证者无法区分
    
4.  支持 Key Refresh：定期刷新所有 share，旧 share 失效，但对应的公钥和地址不变
    

特点：

-   隐私最好，链上不暴露多签结构
    
-   跨链通用，BTC/ETH/Solana 都能用同一套方案
    
-   但实现复杂度高，多方需要在线交互
    

**三种方案对比**

| 对比维度 | BTC 脚本多签 | EVM 合约多签 | MPC-TSS 门限签名 |
| 多签逻辑在哪 | 链上脚本 | 链上合约 | 链下计算 |
| 链上可见性 | 能看出是多签 | 能看出是多签合约 | 看起来是普通单签 |
| 灵活性 | 固定规则，改规则要换地址 | 可升级、可加策略 | 规则在链下，灵活 |
| 跨链 | 仅 BTC | 仅 EVM 链 | 任意链 |
| Gas 开销 | 签名越多 Witness 越大 | 合约验签消耗 Gas | 和单签一样 |
| 适合场景 | BTC 冷钱包、托管 | DAO 金库、企业钱包 | 交易所热钱包、MPC 钱包产品 |

## BTC签名流程

### 普通单签

P2PKH（1 开头，Legacy）

1.  构造交易骨架：指定输入（要花哪些 UTXO）、输出（收款地址 + 金额）、找零输出，得到未签名的交易结构体
    
2.  对交易数据按 SIGHASH\_ALL 序列化，做双重 SHA-256，得到 32 字节待签名哈希
    
3.  用私钥对哈希做 secp256k1 ECDSA 签名，得到 (r, s)
    
4.  对 (r, s) DER 编码，末尾附加 SigHash 类型字节（0x01），得到71-73 完整签名，
    
5.  把完整签名 + 33 字节压缩公钥放入 scriptSig 字段（共约 107 字节），得到已签名的完整交易
    
6.  广播
    

scriptSig 体积大（约 107 字节），手续费最贵。

P2SH-P2WPKH（3 开头，Nested SegWit）

1.  构造交易骨架：指定输入（要花哪些 UTXO）、输出（收款地址 + 金额）、找零输出，得到未签名的交易结构体
    
2.  按 BIP-143 规则序列化（包含输入金额，防 fee 欺诈），做双重 SHA-256，得到 32 字节待签名哈希
    
3.  用私钥对哈希做 secp256k1 ECDSA 签名，得到 (r, s)
    
4.  对 (r, s) DER 编码，末尾附加 SigHash 类型字节（0x01），得到71-73 完整签名
    
5.  完整签名 + 33 字节压缩公钥放入 witness 字段，得到 witness 数据（约 107 字节）
    
6.  scriptSig 里放赎回脚本 OP\_0 <20字节公钥哈希>，得到 scriptSig（约 23 字节），告诉老节点去 witness 找真正的签名数据
    
7.  组装得到已签名的完整交易，广播
    

兼容方案：scriptSig 里有壳（给老节点看），实际签名在 witness 里（享受 1/4 权重折扣）。

P2WPKH（bc1q 开头，Native SegWit）

1.  构造交易骨架：指定输入（要花哪些 UTXO）、输出（收款地址 + 金额）、找零输出，得到未签名的交易结构体
    
2.  按 BIP-143 规则序列化（包含输入金额，防 fee 欺诈），做双重 SHA-256，得到 32 字节待签名哈希
    
3.  用私钥对哈希做 secp256k1 ECDSA 签名，得到 (r, s)
    
4.  对 (r, s) DER 编码，末尾附加 SigHash 类型字节（0x01），得到71-73 完整签名
    
5.  完整签名 + 33 字节压缩公钥放入 witness 字段，得到 witness 数据（约 107 字节）
    
6.  scriptSig 为空，组装得到已签名的完整交易，广播
    

比 P2PKH 省约 38% 手续费，因为 witness 按 1/4 权重计费。

P2TR（bc1p 开头，Taproot key path）

1.  构造交易骨架：指定输入（要花哪些 UTXO）、输出（收款地址 + 金额）、找零输出，得到未签名的交易结构体
    
2.  按 BIP-341 的 tagged hash 规则序列化（包含所有输入的金额和 scriptPubKey），得到 32 字节待签名哈希
    
3.  用私钥做 Schnorr 签名（不是 ECDSA），得到固定 64 字节签名（不需要 DER 编码）
    
4.  签名放入 witness 字段，不需要放公钥（验证者直接从输出地址的 x-only 公钥验签），得到 witness 数据（64 字节）
    
5.  scriptSig 为空，组装得到已签名的完整交易，广播
    

witness 只有 64 字节，是四种里最小的，手续费最低。

**四种地址签名对比**

| 对比维度 | P2PKH | P2SH-P2WPKH | P2WPKH | P2TR |
| 签名算法 | ECDSA | ECDSA | ECDSA | Schnorr |
| 序列化规则 | Legacy | BIP-143 | BIP-143 | BIP-341 |
| 签名放哪 | scriptSig | witness | witness | witness |
| 是否携带公钥 | 是（scriptSig 里） | 是（witness 里） | 是（witness 里） | 否 |
| scriptSig 大小 | ~107 字节 | ~23 字节 | 空 | 空 |
| witness 大小 | 无 | ~107 字节 | ~107 字节 | 64 字节 |
| 链上总数据 | 最大 | 中等 | 较小 | 最小 |

## ETH签名流程

### 交易签名（链上交易）

Legacy 交易

1.  构造交易参数：nonce、gasPrice、gasLimit、to、value、data，得到未签名交易对象
    
2.  RLP 编码这 6 个字段， (nonce, gasPrice, gasLimit, to, value, data, 空占位, 空占位) （不含 chainId），得到待签名字节串
    
3.  做 Keccak-256，得到32 字节待签名哈希
    
4.  用私钥对待签名的哈希做 secp256k1 ECDSA 签名，得到(r, s, v)
    

1.  EIP-155引入防重放，v 里面编码 chainId：v = chainId \* 2 + 35/36
    

5.  在 RLP 编码列表末尾追加 (v, r, s) 三个字段：rlp(nonce, gasPrice, gasLimit, to, value, data, v, r, s)， 得到完整签名
    
6.  广播
    

EIP-1559 交易

1.  构造交易参数：chainId、nonce、maxPriorityFeePerGas、maxFeePerGas、gasLimit、to、value、data、accessList，得到未签名交易对象
    
2.  将 (chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data, accessList, 空占位, 空占位) 这 9 个字段按顺序做RLP 编码，前面加 type 字节 0x02，得到待签名字节串
    
3.  待签名字节串做 Keccak-256，得到32 字节待签名哈希
    
4.  用私钥对待签名的哈希做 secp256k1 ECDSA 签名，得到(r, s, v)
    

1.  v 只存恢复位 0 或 1
    

5.  在 RLP 编码列表末尾追加 (v, r, s) 三个字段：rlp(\[chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to,value, data, accessList, v, r, s\])，再前面加 0x02， 得到完整签名
    
6.  广播
    

EIP-7702 交易

和 EIP-1559 交易一样，都是 typed transaction 结构，只是在字段列表末尾多了一个 authorization\_list，允许 EOA 临时授权合约代码执行。

### 消息签名（链下签名，不产生交易）

personal\_sign（EIP-191，version 0x45）

1.  DApp 构造一条消息字符串（比如 "Login to OpenSea at 2026-05-21"），钱包弹出给用户看，用户确认
    
2.  钱包对消息加前缀包裹：原始消息："Hello" 包裹后： "\\x19Ethereum Signed Message:\\n5Hello" 得到前缀包裹后的完整消息
    
3.  对包裹后的消息做 Keccak-256，得到32 字节待签名哈希
    
4.  用私钥对待签名哈希做 secp256k1 ECDSA 签名，得到 (r, s, v)
    

1.  v 的取值范围是 0 或 1
    

5.  对 v 加上 27（变成 27 或 28），作为链下签名的约定恢复标识，得到(r, s, v+27)
    
6.  对(r, s, v+27) 做 hex 编码，得到130 字符的十六进制签名字符串
    

用途：DApp 登录认证，用户签一条消息证明自己持有该地址，不用发交易花 Gas。

EIP-712（结构化数据签名）

1.  定义 domain 对象（应用名、版本、chainId、合约地址verifyingContract），得到domain 结构体
    
2.  计算 domainTypeHash ：keccak256("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)")，得到domain typeHash 32 字节
    
3.  对 domain 每个字段值编码后拼接：domainTypeHash + keccak256(name) + keccak256(version) + chainId + verifyingContract，再做 Keccak-256，得到domainSeparator 32 字节
    
4.  定义业务 struct（比如"我要从合约A授权100个代币给合约B，有效期到XXX"），得到业务 struct 对象
    
5.  同理计算 struct 的 typeHash + 各字段值拼接后 Keccak-256，得到structHash 32 字节
    
6.  拼接domainSeparator，structHash， 做最终签名哈希：keccak256("\\x19\\x01" + domainSeparator + structHash)，得到32 字节待签名哈希
    
7.  用私钥对待签名哈希做 secp256k1 ECDSA 签名，得到 (r, s, v)，得到链下完整签名
    

用途：DApp 交互时用户能看清签的是什么，不是签 hex。domainSeparator 防止签名被另一个 DApp 盗用。

## Solana签名流程

1.  构造指令（Instructions）数组：转账指令、Token 指令、Nonce 指令等，每个指令包含 program\_id + accounts 列表 + data（指令参数序列化），得到指令列表
    
2.  指定 payer（手续费支付者）和 recentBlockhash（最近的一个区块哈希，作为交易有效期），得到未签名交易消息（Message）
    
3.  将 未签名交易消息（Message） 序列化成字节数组，得到待签名字节串
    
4.  用私钥对待签名字符串做 EdDSA 签名，得到固定 64 字节 Ed25519 签名
    
5.  将64字节的签名附加到交易的 signatures 列表，如果有多个 signer，按照账户顺序依次签名，得到签名列表
    
6.  将 message + signatures 组装成完整交易，做 Base58（或 Base64）编码， 得到已签名交易字符串
    
7.  广播
    

## BTC、ETH 和 SoIana 的签名有什么不同，各组的优劣是什么？

### 签名算法

| 对比维度 | BTC | ETH | Solana |
| 算法 | ECDSA（P2PKH / SegWit） / Schnorr（Taproot） | ECDSA | Ed25519 |
| 曲线 | secp256k1 | secp256k1 | Curve25519 |
| 签名大小 | 71~73 字节（ECDSA DER） / 64 字节（Schnorr） | ~65 字节（r32 + s32 + v1） | 固定 64 字节 |
| 签名格式 | 变长 DER 编码 | r、s、v 三个独立值拼接 | 固定宽字节切片 |

### 优缺点

ECDSA（BTC 传统 / ETH）

**优势**

-   生态最成熟，硬件钱包、HSM、各类密码库几乎全部支持
    

**劣势**

-   签名大小不固定（DER 编码下 71-73 字节），链上存储有浪费
    
-   不支持天然签名聚合，多方签名长度随签名数线性增长
    
-   验签速度中等
    

Schnorr（BTC Taproot）

**优势**

-   签名固定 64 字节，比 ECDSA DER 更省空间，Taproot key path 下一个签名就搞定
    
-   天然支持签名聚合，多签场景下 N 个签名能聚合为一个
    
-   批量验证（batch verification）极快，一次验证多个签名比逐个验证省算力
    
-   线性特性保障门限签名的安全性，适合做 MPC
    

**劣势**

-   生态比 ECDSA 年轻，硬件钱包和老工具支持程度不如 ECDSA 全
    

Ed25519（Solana）

**优势**

-   签名固定 64 字节，没有变长编码问题
    
-   验签速度最快（比 ECDSA 快数倍），适合高性能链
    
-   不需要签名前额外哈希（Ed25519 内部自带哈希，因此签名过程更简洁）
    
-   设计上防侧信道，实现更安全
    
-   同样支持批量验证
    

**劣势**

-   不支持非硬化子密钥派生（BIP-32 硬化派生那条路走不通，只能用 SLIP-0010 全部走硬化派生）
    
-   生态不如 ECDSA 广
    

## 主流公链的共识算法

### BTC：PoW（工作量证明）

⼀句话本质：**谁算⼒强、先算出满⾜难度⽬标的哈希，谁就获得出块权。**

**核⼼怎么⼯作**

矿工不断修改 nonce， 对区块头做 SHA-256，

谁先找到满足目标难度的哈希，谁就打包新区块

如果出现分叉，全网选择累计工作量最大那条链

BTC的最终性是概率最终性，确认数越多，被回滚的概率就越低，通常6个确认视为比较安全。

**特点**

-   最去中心化，最稳
    
-   吞吐低，确认慢（6 个确认约 60 分钟）
    
-   最终性是概率性的，确认数越多越安全
    

### ETH：Gasper PoS（权益证明）

⼀句话本质：**不再⽐算⼒，⽽是由质押 ETH 的验证者投票来决定区块和最终性。**

早期 ETH ⽤的是 **Ethash PoW**，思路和 BTC 类似

**核⼼怎么⼯作**

1.  验证者质押 32 ETH， 按 slot/epoch 参与提议与投票
    
2.  两个组件协作：
    

1.  Casper FFG：负责最终性确认，超过 2/3 投票的区块逐步进入 finalized
    
2.  LMD-GHOST：分叉选择，告诉节点该跟哪条链走
    

3.  如果有超过 **2/3** 的质押权重⽀持，区块会逐步进⼊ finalized（最终确认）状态
    
4.  如果验证者恶意双签或者恶意投票，则会**Slashing（罚没质押）**
    

**特点**

-   节能（不再烧电挖矿）
    
-   最终性比 PoW 强
    
-   有 Slashing 惩罚恶意行为
    
-   系统复杂，理解门槛高
    

从 PoW 切到 PoS，核⼼⽬标是降低能耗、提升经济安全性

**The Merge（合并）** 完成了 PoW → PoS 的切换

### Solana：PoH + Tower BFT

⼀句话本质：**PoH 先把顺序排好，Tower BFT 再让验证者对这个顺序投票确认。**

**核心工作流程**

-   PoH（历史证明）：一个可验证的时钟，先排出序交易的先后顺序，减少验证者之间来回确认顺序的通信量
    
-   Tower BFT：负责共识，验证者对 slot 投票确认，基于 PBFT 改进。越早投票锁定时间越长，越难被推翻
    

**特点**

-   速度最快（理论上 400ms 出块）
    
-   对网络、硬件和节点质量要求高
    
-   曾有停机历史
    

### Cosmos：Tendermint BFT（现 CometBFT）

⼀句话本质：**验证者围绕⼀个候选区块做三轮投票，只要 2/3 投票通过，这个区块就直接最终确认。**

**核⼼怎么⼯作**

1.  Propose**（提议）**: 轮到某个验证者提议新区块
    
2.  Prevote**（预投票）**: 验证者们对这个区块进行投票
    
3.  Precommit**（预确认）**: 这个区块超过 2/3 验证者投票，就进⼊确认阶段
    

当超过区块 2/3 的 Precommit 到位，这个区块就**⽴即 Finalized**

**特点**

-   确认最快，投票通过即最终
    
-   但超 1/3 验证者离线，链就停摆
    
-   适合需要即时最终性的跨链生态
    

### 四个链对比

-   BTC：靠算力抢出块，安全但慢
    
-   ETH：靠质押投票确认最终性，更节能，也更复杂
    
-   Solana：先排序再投票，速度最快，但对基础设施要求高
    
-   Cosmos：三轮投票直接Finalized，确认最快，但更怕验证者大面积掉线
    

## 零知识证明（ZKP）

核心概念：证明者向验证者证明"我知道某个秘密/某个计算是正确的"，但验证者除了"这个命题为真"之外，什么信息都得不到。

### ZKP 的三个核心性质

完整性（Completeness）：真的证明一定能通过验证

可靠性（Soundness）： 假的证明一定不能通过验证（恶意证明者骗不过验证者）

零知识性（Zero-Knowledge）：验证者除了知道“命题为真”，不知道额外任何东西

### ZK-SNARK

**优势**

-   证明小（几百字节）
    
-   验证快
    
-   很适合链上验证成本敏感的场景
    

**缺点**

-   不能抗量子（基于椭圆曲线配对）
    
-   通常需要 trusted setup
    

**代表项目**

-   Groth16、Plonk
    

### ZK-STARK

**优势**

-   验证速度快
    
-   不需要 trusted setup
    
-   更透明，理论上抗量⼦更强（基于哈希函数）
    

**缺点**

-   证明较大（几十到几百 KB） ，验证和传输成本通常也更⾼
    

**代表项目**

-   StarkWare（StarkNet）
    

### 在区块链中的主要应用

ZK-Rollup（Layer 2 扩容）

把几千笔交易在链下（L2）执行，生成一个zk证明（"这几千笔交易都合法"），提交给链上（L1）， 链上（L1）只需要验证这一个证明，Gas 降到原来的 1/100 ~ 1/1000。代表项目：zkSync、Scroll、StarkNet。

**ZK-Rollup 工作流程**

1.  用户在 L2 发起交易（转账、合约调用等），交易发给 Sequencer
    
2.  Sequencer 收集一批交易（比如 1000 笔），按顺序执行这批交易，得到执行前后的状态对比：旧状态根 → 执行 1000 笔 → 新状态根
    
3.  Sequencer 把执行过程的输入（交易数据）和输出（新状态根）交给 Prover
    
4.  Prover 把执行过程转换成电路约束，跑 ZK 算法，生成一个有效性证明（validity proof）。这个证明的语义是："我保证，老状态根经过这 1000 笔交易后，一定会变成新状态根，绝无作假"
    
5.  Prover 把 有效性证明（validity proof） + 新的状态根 + 压缩交易数据 打包，提交给L1 的 Rollup 合约
    
6.  L1 的合约 做两件事情
    

1.  验证 有效性证明（validity proof）：密码学验证，算力极小，秒级完成
    
2.  证通过后，把 L1 上记录的状态根更新为新值，L2 资金同步完成
    

7.  完成，用户若想从L2提现回L1，状态根更新后即可提款，不需要等待挑战期
    

ZK-Rollup 相比 Optimistic Rollup 的优势：不需要 7 天挑战期，凭密码学证明即刻确认，提现更快。

隐私交易

隐藏交易的发送方、接收方和金额，但依然能向链上证明"我没有双花""我的余额够"。代表项目：Zcash（zcashd）、Tornado Cash。
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

## 钱包账户抽象怎么做

"账户抽象"在 Web3 钱包领域有两层含义：一层是 **链下多链 SDK 的工程架构抽象**，一层是**链上 ERC-4337 的账户模型升级**。

### 多链 SDK 账户抽象（链下工程架构层）

要解决的问题

一个钱包要支持 30+ 条链，每条链的地址生成逻辑、交易结构、签名算法、编码方式都不一样。如果没有抽象，每条链都要从头写一套独立代码，维护成本极高。

能统一的部分

-   **密钥派生（从熵到私钥到公钥的整条路径）**：所有链都走 随机数(熵) → BIP-39 助记词 → 种子 → 主私钥 → 按路径逐层派生 → 最终私钥 → 公钥。
    

-   但派生算法分两条路：
    

-   secp256k1 链（BTC、ETH）用 BIP-32 密钥树，
    
-   Ed25519 链（Solana、Sui、Aptos）用 SLIP-0010（只支持硬化派生，路径如 `m/44'/501'/0'/0'` 每一级都带 `'`）。
    
-   路径格式统一遵循 BIP-44，只是 coin\_type 和派生算法不同；
    

-   **地址生成**：输入是公钥字节，输出是地址字符串，格式固定
    
-   **签名**：输入是哈希 + 私钥，输出是签名字节，接口形态一致
    

不能统一的部分（也不应该硬抽）

交易构建的输入参数在不同链上根本不是同一个东西：

| 链 | 构建交易需要什么 |
| BTC | UTXO 列表、找零地址、fee rate、输出地址和金额 |
| ETH | nonce、gasLimit、maxFeePerGas、to、value、data |
| Solana | recent blockhash、instructions 数组、payer |
| Cosmos | sequence、memo、msgs 数组、fee |

硬统一成一个 `TxParams`，要么变成 `map[string]interface{}`（没有类型安全），要么变成巨大联合结构体（大部分字段每次都是空的）。两种都比直接按链调还难用。

实际工程做法：分层抽象

a. **能统一的统一**：密钥派生、地址生成、签名（输入输出格式固定）  
b. **不能统一的不硬抽**：交易构建、广播、确认逻辑各链各写，上层用 `switch chainType` 路由

### ERC-4337 账户抽象（链上智能合约层）

要解决的问题

传统以太坊只有两种账户：  
a. **EOA（Externally Owned Account）**：由私钥控制，能发起交易  
b. **合约账户**：由代码控制，不能主动发起交易

这导致几个痛点：  
a. 用户必须持有 ETH 才能付 Gas，新用户第一笔交易就卡住了  
b. 丢了私钥就丢了一切，没有社交恢复、没有多签、没有限额  
c. 签名算法锁死 secp256k1 ECDSA，无法用指纹、面容等方式验证  
d. 一个交易只能做一件事，不能批量操作

核心思想

让合约账户也能"主动发起交易"，把验证逻辑从协议层移到合约层，让每个钱包自己定义"什么算合法操作"。

关键角色和流程

a. **用户**构造一个 `UserOperation`（不是传统 Transaction），包含 sender、callData、签名等字段  
b. `UserOperation` 不进普通交易池，而是进入独立的 **UserOp Mempool**  
c. **Bundler（打包者）** 从 UserOp Mempool 里收集多个 UserOp，打包成一笔普通交易  
d. 这笔交易调用链上的 **EntryPoint 合约**（全局单例，统一入口）  
e. EntryPoint 逐个调用每个 UserOp 对应的 **钱包合约（Smart Account）** 的 `validateUserOp` 方法来验证签名  
f. 验证通过后，EntryPoint 调用钱包合约执行实际操作  
g. 如果用户不想自己付 Gas，可以指定 **Paymaster（代付者）** 替用户付

```
用户 → 构造 UserOperation
        ↓
  UserOp Mempool
        ↓
  Bundler 收集打包 → 一笔普通交易
        ↓
  EntryPoint 合约
        ↓
  ┌─────────────────────┐
  │ 1. validateUserOp   │ ← 钱包合约自定义验证（多签/指纹/社交恢复/任意签名算法）
  │ 2. execute          │ ← 执行实际业务逻辑
  └─────────────────────┘
        ↓
  Paymaster（可选）→ 替用户代付 Gas
```

解锁的能力

a. **Gas 代付**：Paymaster 替用户出 Gas，甚至可以用 USDT 付 Gas  
b. **自定义签名验证**：钱包合约里的 `validateUserOp` 可以用任意逻辑——多签、社交恢复、Passkey 指纹、Session Key 临时授权，不再绑死 ECDSA  
c. **批量操作**：一个 UserOp 的 callData 里可以编码多个调用，一次完成授权+兑换+转账  
d. **钱包可升级**：合约账户可以用代理模式升级验证逻辑和功能模块  
e. **无私钥即可恢复**：社交恢复——让几个守护人投票就能换控制密钥

两种"账户抽象"的本质区别

|   | ERC-4337 账户抽象 | 多链 SDK 账户抽象 |
| 抽象的是什么 | 链上账户的验证和执行逻辑 | 多链钱包的地址生成、签名、交易构建 |
| 在哪一层 | 链上（智能合约层） | 链下（SDK/后端服务层） |
| 解决的问题 | EOA 功能太弱，不够灵活 | 多链接入成本高，逻辑不统一 |
| 核心价值 | 让钱包像应用一样可编程 | 让一套代码适配多条链 |

一个是**链上的账户模型升级**，一个是**链下的工程架构设计**，层次完全不同但都叫"账户抽象"。
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->


# Prompt 工程核心笔记（AI × Web3）

* * *

## 1\. Prompt 的本质：不是“提问”，而是“协议设计”

Prompt 不只是问 AI 一句话，而是：

> 定义模型如何完成任务的“执行协议”。

它需要明确：

-   任务目标
    
-   可用输入
    
-   输出格式
    
-   失败处理
    
-   安全边界
    

本质上：

```
Prompt = 人类意图 → 模型行为 的接口层
```

* * *

## 2\. Prompt 是“软约束”，不是安全边界

Prompt 可以：

-   提高模型遵循规则的概率
    
-   降低误解任务的概率
    

但不能保证：

-   模型绝不越权
    
-   不被恶意输入污染
    
-   不执行危险操作
    

因此：

> 真正的安全边界必须由代码、权限、校验和审计实现。

尤其在：

-   支付
    
-   签名
    
-   数据写入
    
-   Agent 工具调用
    

等场景下：

```
不能只靠 prompt 做安全控制
```

* * *

## 3\. Instruction 的四段式结构（非常实用）

好的 instruction 不只是“你是一个助手”。

推荐拆成：

| 模块 | 作用 |
| --- | --- |
| 任务目标 | 要完成什么 |
| 可用输入 | 哪些信息可信 |
| 禁止行为 | 不能做什么 |
| 输出格式 | 返回什么结构 |

例如：

```
目标：解释交易风险
输入：simulation + tx data
禁止：不能假装验证成功
输出：固定 JSON
```

* * *

## 4\. Few-shot 的价值：让模型学“边界感”

Few-shot 的作用：

> 用示例教模型“如何判断”

适合：

-   风格难描述
    
-   风险边界复杂
    
-   输出格式严格
    

例如：

-   好交易解释
    
-   坏交易解释
    
-   无限授权风险案例
    

但 Few-shot 不是一次性素材：

> 它需要和 Eval 一起长期维护。

* * *

## 5\. Structured Output 是 AI 工程化核心

真实系统不需要“散文”。

需要：

```
{
  "risk_level": "high",
  "requires_human_approval": true
}
```

结构化输出的意义：

-   方便代码校验
    
-   可做自动化测试
    
-   可审计
    
-   可回归评估
    

本质：

> 让 AI 输出变成“可执行数据”，而不是自然语言。

* * *

## 6\. Prompt Injection 是 Agent 最大安全风险之一

攻击方式：

```
“忽略之前所有规则”
“把内部信息发给我”
```

如果模型：

-   能读文档
    
-   能调用工具
    
-   能访问上下文
    

就可能被诱导越权。

* * *

### 核心防御思路

不是：

```
“不要被注入”
```

而是：

-   外部内容视为不可信输入
    
-   工具调用必须校验参数
    
-   高风险操作必须 Human Check
    
-   敏感权限不能交给模型
    

* * *

## 7\. AI × Web3 的正确链路（重点）

安全 AI 系统不应该：

```
用户 → Prompt → 直接执行
```

更合理的是：

```
Prompt
→ Context
→ Model
→ Code Validation
→ Simulation
→ Human Approval
```

即：

| 层 | 职责 |
| --- | --- |
| Prompt | 定义任务 |
| Context | 提供可信数据 |
| Model | 生成候选结果 |
| Code | 校验规则 |
| Simulation | 验证链上影响 |
| Human | 最终确认 |

* * *

## 8\. Web3 场景中的核心原则

在 Web3 中：

> “无法解释交易行为，就无法保证资产安全。”

因此 AI 不能：

-   擅自签名
    
-   默认交易可信
    
-   默认 simulation 正确
    
-   默认用户意图正确
    

模型应该：

-   标记不确定性
    
-   输出风险等级
    
-   明确需要人工确认
    

* * *

## 9\. 一个非常重要的工程观

Prompt Engineering 本质不是：

```
“如何骗 AI 更聪明”
```

而是：

> 如何把模糊任务，变成稳定、可验证、可审计的系统接口。
<!-- DAILY_CHECKIN_2026-05-19_END -->
<!-- Content_END -->
