---
timezone: UTC+8
---

# 赵皓然

**GitHub ID:** rangeegnar

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->
## Tokenizer分词器

### 基本概念

1.  作用：Token -- Encoder --> 数字 -- Decoder --> Token
    

```Bash
"今天天气真好" → Tokenizer 编码 → [356, 1892, 478, 23]
                                         ↓
                              模型处理（全是矩阵运算）
                                         ↓
[198, 45, 3012, 67] → Tokenizer 解码 → "是的很舒服"
```

2.  特殊Token：标记序列的结构信息
    
3.  chat\_template：对话格式
    

### 代码实现BPE

```Python
from collections import Counter

def simulate_bpe(words_with_freq, num_merges=5):
    """手动模拟 BPE 合并过程

    Args:
        words_with_freq: dict, 如 {"low": 5, "lower": 2, "newest": 6}
        num_merges: 合并次数
    """
    vocab = set()
    corpus = []
    for word, freq in words_with_freq.items():
        chars = list(word)
        vocab.update(chars)
        for _ in range(freq):
            corpus.append(chars.copy())

    print(f"初始词表({len(vocab)}): {sorted(vocab)}\n")

    for step in range(num_merges):
        pair_freq = Counter()
        for tokens in corpus:
            for i in range(len(tokens) - 1):
                pair_freq[(tokens[i], tokens[i + 1])] += 1

        if not pair_freq:
            break

        best_pair, freq = pair_freq.most_common(1)[0]
        new_sym = best_pair[0] + best_pair[1]
        vocab.add(new_sym)

        new_corpus = [] # 合并
        for tokens in corpus:
            merged = []
            i = 0
            while i < len(tokens):
                if i < len(tokens) - 1 and (tokens[i], tokens[i + 1]) == best_pair:
                    merged.append(new_sym)
                    i += 2
                else:
                    merged.append(tokens[i])
                    i += 1
            new_corpus.append(merged)
        corpus = new_corpus

        print(f"Step {step+1}: 合并 {best_pair} → '{new_sym}' (频率={freq})")
        print(f"  词表大小: {len(vocab)}")
        example = corpus[0]
        print(f"  示例: {example}\n")

simulate_bpe({"low": 5, "lower": 2, "newest": 6, "widest": 3}, num_merges=5)
```

### 使用Minimind的Tokenizer

```Python
from transformers import AutoTokenizer
tokenizer = AutoTokenizer.from_pretrained('./model')    # tokenzier所在文件夹
text = "你好，世界！"
tokens = tokenizer.encode(text)
print(tokens)          
print(tokenizer.decode(tokens)) 
print(tokenizer.special_tokens_map)
```

## Embedding词嵌入

-   `nn.Embedding`： 查表操作。维护(vocab\_size, embedding\_dim) 的权重矩阵，给定 token\_id 就返回该行的向量。数学上等价于 One-Hot 向量与嵌入矩阵的乘法。
    

```Python
import torch
import torch.nn as nn

V, d = 6400, 768
W = nn.Embedding(V, d)

token_id = 356
embedding = W(torch.tensor(token_id))
```

-   权重共享（Weight Tying）
    
    -   输入端 Embedding 层（`embed_tokens`）：token id → 向量，形状：(vocab\_size, d\_model)
        
    -   输出端 LM Head 层（`lm_head`）：向量 → token\_id，形状：(d\_model, vocab\_size)
        
-   Word2Vec和Embedding的对比
    
    | Word2Vec | Embedding |
    | 静态词典 | 动态理解 |
    

## 归一化RMSNorm

### 归一化方法

```Python
class BATCHNorm(nn.Module): # LayerNorm 就是吧 0 改为 -1
    def __init__(self, dim: int, eps: float=1e-5):
        super().__init__()
        self.gamma = nn.Parameter(torch.ones(dim))
        self.beta = nn.Parameter(torch.zeros(dim))
        self.eps = eps
    def forward(self, x: torch.Tensor) -> torch.Tensor:
        mean = x.mean(0, keepdim = True)
        var = x.var(0, keepdim = True, unbiased=False)
        return self.gamma * (x - mean) / torch.sqrt(var + self.eps) + self.beta

class RMSNorm(nn.Module):
    def __init__(self, dim; int, eps: float=1e-6):
        super().__init__()
        self.eps = eps
        self.gamma = nn.Parameter(torch.ones(dim))    # gamma 也要更新
    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return x * torch.rsqrt(x.pow(2).mean(-1, keepdim=True) + self.eps) * self.gamma
        # x.pow(2) 张量的每一个数都要平方
```

### Pre-Norm && Post-Norm

-   Pre-Norm（常用）
    

```Plain
x = x + Att(Norm(x))
x → Norm → Attention → Add(x) → FFN → Norm → Add → 输出
```

-   Post-Norm（Transformer）
    

```Plain
x = Norm(x + Att(x))
x → Attention → Add(x) → Norm → FFN → Add → Norm → 输出
```
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->


## 密码学

第一性原理：你的身份不由任何平台定义，只取决于你是否能证明自己控制某个私钥

Hash：看作验证工具

Public key：用来验证私钥是否正确

Private Key：most important !!

Signature：用私钥对“某一条具体消息”说“我同意”，这份同意全世界都能验证

Merkle Tree：用一组哈希把大量数据组织起来，让你只拿到少量证明也能验证某条数据属于整体。

### 以太币/以太坊/区块链补充

区块链：是一个公共数据库，由网络中的多台计算机进行更新和共享。

-   “区块”：数据和状态存储在称为“区块”的连续群组中
    
-   "链"：在不改变所有后续区块的情况下，区块内数据是无法改变，但改变后续区块需要整个网络的共识。
    

以太坊：一条区块链，其中嵌入了计算机。

-   有一个以太坊虚拟机（EVM），其状态得到以太坊网络中所有人的一致同意。
    

以太币 (ETH)：以太坊的原生加密货币，允许计算市场化

-   铸造以太币：用来奖励提议的每个区块，以及在每个时段的检查点奖励验证者执行的和达成共识有关的其他活动。
    
-   销毁ETH：任何广播交易请求的参与者必须向网络提供一定数量的以太币作为奖金。 网络燃烧部分奖金，并将剩余部分奖励给最终验证、执行交易，将其提交到区块链并广播到网络的任何人。支付的以太币数量对应于进行计算所需的资源。
    

智能合约（[dapps](https://ethereum.org/zh/developers/docs/dapps/))：开发者发布到以太坊虚拟机状态中的可重用代码片段（程序）

## 钱包
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->






已经有AI相关概念，学习Web3相关概念

一. 密码学

第一性原理：你的身份不由任何平台定义，只取决于你是否能证明自己控制某个私钥

Hash：验证工具

Public key：用来验证私钥是否正确

Private Key：most important !!

Signature：用私钥对“某一条具体消息”说“我同意”，这份同意全世界都能验证

Merkle Tree：用一组哈希把大量数据组织起来，让你只拿到少量证明也能验证某条数据属于整体。

补充：以太币/以太坊
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
