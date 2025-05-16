---
dg-publish: true
dg-permalink: /大语言模型学习/训练推理优化/FlashAttention/FlashAttention-Forword流程
dg-home: false
dg-description: 在此输入笔记的描述
dg-hide: false
dg-hide-title: false
dg-show-backlinks: true
dg-show-local-graph: true
dg-show-inline-title: true
dg-pinned: false
dg-passphrase: 在此输入访问密码
dg-enable-mathjax: false
dg-enable-mermaid: false
dg-enable-uml: false
dg-note-icon: 0
dg-enable-dataview: false
tags:
  - NLP
permalink: /大语言模型学习/训练推理优化/FlashAttention/FlashAttention-Forword流程/
dgShowBacklinks: true
dgShowLocalGraph: true
dgShowInlineTitle: true
dgPassFrontmatter: true
noteIcon: 0
created: 2025-04-28T22:31:37.000+08:00
updated: 2025-04-29T11:13:24.000+08:00
title: FlashAttention Forword流程
createTime: 2025/05/13 17:33:53
---



# FlashAttention Forward流程
在这篇博客文章中，我们将深入探讨FlashAttention的前向流程，尤其是其独特的分块计算方法。FlashAttention通过引入额外的统计量，解决了注意力计算中Softmax分块计算的难题，并通过kernel融合优化了计算效率。
![Pasted-image-20250428223229.png](/img/user/附件/Pasted-image-20250428223229.png)

## Tiling 分块计算
SRAM的读写速度比HBM高一个数量级，但内存小很多。通过kernel融合的方式，将多个操作融合为一个操作，利用高速的SRAM进行计算，可以减少读写HBM的次数，从而有效减少内存受限操作的运行时间。但SRAM的内存大小有限，不可能一次性计算完整的注意力，因此必须进行分块计算，使得分块计算需要的内存不超过SRAM的大小。


## 分块计算的难点
注意力计算流程是矩阵乘法 $\rightarrow$ scale $\rightarrow$ mask $\rightarrow$ softmax $\rightarrow$ dropout $\rightarrow$ 矩阵乘法。矩阵乘法和逐点操作的分块计算是容易实现的，但是Softmax由于分母需要完整输入数据，所以分块计算很难。


## FlashAttention的做法

### 引入额外的统计量
为了实现Softmax分块计算，FlashAttention引入了额外的统计量 $m(x)$ 和 $l(x)$ 来进行解耦。通过这些统计量，可以求得Safe Softmax，并解耦拼接向量的Softmax计算。


### 公式说明
- $m(x) = m([x^{(1)}, x^{(2)}]) = \max(m(x^{(1)}), m(x^{(2)}))$
- $f(x) = [e^{m(x^{(1)}) - m(x)}f(x^{(1)}), e^{m(x^{(2)}) - m(x)}f(x^{(2)})]$
- $l(x) = l([x^{(1)}, x^{(2)}]) = e^{m(x^{(1)}) - m(x)}l(x^{(1)}) + e^{m(x^{(2)}) - m(x)}l(x^{(2)})$
- $\text{softmax}(x) = \frac{l(x)}{f(x)}$

通过保持额外的两个统计量可以实现Softmax的分块计算，同时注意，多个block的Softmax，GPU是可以做并行计算的，这也提升了计算效率。


## Kernel融合
在FlashAttention中，通过kernel融合，将mask和dropout加上的forward过程整合为一个操作：

- $S = \frac{1}{\sqrt{d_k}} QK^T \in \mathbb{R}^{N \times N}$
- $S_{\text{masked}} = \text{MASK}(S) \in \mathbb{R}^{N \times N}$
- $P = \text{softmax}(S_{\text{masked}}) \in \mathbb{R}^{N \times N}$
- $P_{\text{dropped}} = \text{dropout}(P, p_{\text{drop}}) \in \mathbb{R}^{N \times N}$
- $O = P_{\text{dropped}} V \in \mathbb{R}^{N \times d}$

Tiling分块计算使得可以用一个CUDA kernel来执行注意力的所有操作，从HBM中加载输入数据，在SRAM中执行所有的计算操作（矩阵乘法，mask，softmax，dropout，矩阵乘法），再将计算结果写回到HBM中，通过kernel融合将多个操作融合为一个操作，避免了反复地从HBM中读写数据。


## 一个分块计算Softmax的例子
为了更好地理解分块计算Softmax，我们来看一个简单的例子：对向量$[1, 2, 3, 4]$计算Softmax，分成两块$[1, 2]$和$[3, 4]$进行计算。

### 计算block1：
- $m_1 = \max(\{1, 2\}) = 2$
- $f_1 = [e^{1-2}, e^{2-2}] = [e^{-1}, e^0]$
- $l_1 = \sum f_1 = e^{-1} + e^0$
- $o_1 = l_1 f_1 = (e^{-1} + e^0)[e^{-1}, e^0]$


### 计算block2：
类似的方法可以用于计算第二个block。

通过这些步骤，我们可以有效地进行分块计算Softmax，从而提升计算效率。



# Forward具体流程

## Flash Attention 具体做法
首先，将 $\mathbf{Q}$ 矩阵切为 $T_r$ 块（block），每块的长度为 $B_r$ 。用 $\mathbf{Q}_i$ 来表示切完后的某块矩阵，则 $\mathbf{Q}_i$ 的维度为 $(B_r, d)$ 。不难理解， $\mathbf{Q}_i$ 中存储着某 $B_r$ 个 token 的 query 信息。

然后，将 $\mathbf{K}^T$ 矩阵切为 $T_c$ 块，每块的长度为 $B_c$ 。用 $\mathbf{K}_j^T$ 表示切完后的某块矩阵，则 $\mathbf{K}_j^T$ 的维度为 $(d, B_c)$ 。易知 $\mathbf{K}_j^T$ 中存储着某 $B_c$ 个 token 的 key 信息。

同样，将 $\mathbf{V}$ 矩阵也切为 $T_c$ 块，每块长度为 $B_c$ 。用 $\mathbf{V}_j$ 表示切完后的某块矩阵，则 $\mathbf{V}_j$ 的维度为 $(B_c, d)$ 。易知 $\mathbf{V}_j$ 中存储着某 $B_c$ 个 token 的 value 信息。

![Pasted-image-20250428224444.png](/img/user/附件/Pasted-image-20250428224444.png)

### 计算初始attention分数
图中的 $S_{ij}$ 表示前 $B_r$ 个token和前 $B_c$ 个token间的原始相关性分数。


### afe softmax + mask + dropout
对 $S_{ij}$ 做safe softmax、mask和dropout操作，得到 $P_{ij}$ 。你可能会有疑惑：前面不是说， $P_{ij}$ 是归一化前的结果， $P_{ij}$ 是归一化后的结果吗？那么这里是不是应该用 $P_{ij}$ 呢？这里确实只用到算到 $P_{ij}$ ，在后文对分块计算细节的讲解中，我们会详细说这点。目前为止，大家不用太纠结符号，只用大体知道 $P$ 代表的含义即可。


### 计算output
细心的你肯定又发现了，这个等式不太对劲，这个 $O_{ij}$ 不太对劲。想一想，在正常情况下，前 $B_r$ 个token过attention后的输出结果，应该是它和所有token都做注意力计算后的输出结果。可是这里， $O_{ij}$ 却只是前 $B_r$ 个token和前 $B_c$ 个token的结果。虽然 $O_{ij}$ 的shape对了，但其中的内容却不是我们最终想要的。所以，关于 $O$ 的计算，也是我们需要关注的细节，我们同样放在后文详说。


### 计算的伪代码
```python
# 代码块
# ---------------------
# Tc: K和V的分块数
# Tr: Q的分块数量
# ---------------------

for 1 <= j <= Tc:

    for 1 <= i <= Tr:

        do....

```


### 图例加深理解
下面给出具体的图例加深理解（假设 $T_r$ 等于 2， $T_c$ 也等于 2）:


### 当 j=1 时
![Pasted-image-20250428224511.png](/img/user/附件/Pasted-image-20250428224511.png)


### 当 j=2 时
![Pasted-image-20250428224517.png](/img/user/附件/Pasted-image-20250428224517.png)


## Tilling 中的 Safe Softmax
探讨 Tilling 中的 Safe Softmax 的概念及其计算方法。我们假设标准场景下，矩阵某一行的向量为

$$
x = [ x_1, x_2, \ldots, x_d]
$$

因为分块的原因，它被我们切成了两部分

$$
x = [ x^{(1)}, x^{(2)}]
$$

### 我们定义：
在分块计算的过程中，我们将输出定义为 $O$。我们需要确保分块计算中的结果与标准场景下的结果完全一致。然而，由于 memory-bound 的问题，我们只保留 $m$, $l$, $O$ 而不存各块 $S$, $P$。因此，当我们遍历到最后一块时，虽然有了全局的 rowmax 和 rowsum，但没有 $S$, $P$，我们根本无法算出最终的 $O_i$。


### 思路转变：
为了解决这个问题，我们需要换个思路。即使我们没有每块的 $S$, $P$，我们仍然可以通过不断使用当前最新的 rowmax 和 rowsum 来更新 $O_i$，直到遍历完最后一块。这时的 $O_i$ 就和标准场景下的结果完全一致了。我们希望构造形如下面这样的更新等式：

$$
O_i = O_i + 当前最新结果
$$


### 更新公式：
对于每一块，我们可以通过以下公式进行更新：

$$
O_i^{(j+1)} = P_{i,:j+1} V_{:j+1} = \text{softmax}(S_{i,:j+1}) V_{:j+1}
$$

其中，

$$
= \text{diag}(l^{(j+1)})^{-1} [ \exp([S_{i,:j}, S_i^{(j+1)}] - m^{(j+1)}) ] [V_{:j}, V_{j+1}]
$$

进一步简化为：

$$
= \text{diag}(l^{(j+1)})^{-1} [ \exp(S_{i,:j} - m^{(j+1)}) V_{:j} + \exp(S_i^{(j+1)} - m^{(j+1)}) V_{j+1}]
$$

最终我们得到：

$$
= \text{diag}(l^{(j+1)})^{-1} [ e^{-m^{(j+1)}} \exp(S_{i,j}) V_{:j} + e^{-m^{(j+1)}} \exp(S_i^{(j+1)}) V_{j+1}]
$$

经过多次迭代更新后，我们可以表示为：

$$
= \text{diag}(l^{(j+1)})^{-1} [ \text{diag}(l^{(j)}) e^{m^{(j)} - m^{(j+1)}} \text{diag}(l^{(j)})^{-1} \exp(S_{i,:j} - m^{(j)}) V_{:j} + e^{-m^{(j)}}
$$

最终，我们得到完整的更新公式：

$$
= \text{diag}(l^{(j+1)})^{-1} [ \text{diag}(l^{(j)}) e^{m^{(j)} - m^{(j+1)}} P_{i,:j} V_{:j} + e^{-m^{(j+1)}} \exp(S_i^{(j+1)}) V_{j+1}]
$$

通过这样的更新方法，我们能够确保在遍历完所有块后，得到的结果与标准场景下完全一致。


### Forward计算代码解析
在深度学习中，计算效率和模型性能是两个重要的考量因素。本文将详细解析一个用于前向传播（Forward Pass）的计算代码，帮助读者理解其内在逻辑和操作步骤。

```Python
import torch

NEG_INF = -1e10  # -infinity
EPSILON = 1e-10
Q_LEN = 6
K_LEN = 6
Q_BLOCK_SIZE = 3
KV_BLOCK_SIZE = 3
P_DROP = 0.2

Tr = Q_LEN // Q_BLOCK_SIZE
Tc = K_LEN // KV_BLOCK_SIZE

Q = torch.randn(1, 1, Q_LEN, 4, requires_grad=True).to(device='cpu')
K = torch.randn(1, 1, K_LEN, 4, requires_grad=True).to(device='cpu')
V = torch.randn(1, 1, K_LEN, 4, requires_grad=True).to(device='cpu')

O = torch.zeros_like(Q, requires_grad=True)
l = torch.zeros(Q.shape[:-1])[..., None]
m = torch.ones(Q.shape[:-1])[..., None] * NEG_INF

# step 4
Q_BLOCKS = torch.split(Q, Q_BLOCK_SIZE, dim=2)
K_BLOCKS = torch.split(K, KV_BLOCK_SIZE, dim=2)
V_BLOCKS = torch.split(V, KV_BLOCK_SIZE, dim=2)

# step 5
O_BLOCKS = list(torch.split(O, Q_BLOCK_SIZE, dim=2))
l_BLOCKS = list(torch.split(l, Q_BLOCK_SIZE, dim=2))
m_BLOCKS = list(torch.split(m, Q_BLOCK_SIZE, dim=2))

# step 6
for j in range(Tc):
    # step 7
    Kj = K_BLOCKS[j]
    Vj = V_BLOCKS[j]
    # step 8
    for i in range(Tr):
        # step 9
        Qi = Q_BLOCKS[i]
        Oi = O_BLOCKS[i]
        li = l_BLOCKS[i]
        mi = m_BLOCKS[i]
        # step 10
        S_ij = torch.einsum('... i d, ... j d -> ... i j', Qi, Kj)
        # step 11
        mask = S_ij.ge(0.5)
        S_ij = torch.masked_fill(S_ij, mask, value=0)
        # step 12
        m_block_ij, _ = torch.max(S_ij, dim=-1, keepdims=True)
        P_ij = torch.exp(S_ij - m_block_ij)

l = torch.cat(l_BLOCKS, dim=2)
m = torch.cat(m_BLOCKS, dim=2)

```


### 数据块的拆分
首先，我们需要将输入的数据张量 $O$、$l$ 和 $m$ 按照 $Q\_BLOCK\_SIZE$ 进行拆分，以便后续的操作。

```python
O_BLOCKS = list(torch.split(O, Q_BLOCK_SIZE, dim=2))
l_BLOCKS = list(torch.split(l, Q_BLOCK_SIZE, dim=2))
m_BLOCKS = list(torch.split(m, Q_BLOCK_SIZE, dim=2))
```


## 循环计算过程

### Step 6: 外层循环
我们开始遍历 $K\_BLOCKS$，对于每一个块 $K_j$ 和 $V_j$，执行后续操作。

```python
for j in range(Tc):
    Kj = K_BLOCKS[j]
    Vj = V_BLOCKS[j]
```


### Step 8: 内层循环
在内层循环中，我们遍历 $Q\_BLOCKS$，对于每一个块 $Q_i$，以及相应的 $O_i$、$l_i$、$m_i$，进行计算。

```python
for i in range(Tr):
    Qi = Q_BLOCKS[i]
    Oi = O_BLOCKS[i]
    li = l_BLOCKS[i]
    mi = m_BLOCKS[i]
```


### Step 10: 相似度计算
通过爱因斯坦求和约定计算相似度矩阵 $S_{ij}$：

$$
S_{ij} = \text{torch.einsum}('... i d, ... j d -> ... i j', Qi, Kj)
$$


### Step 11: 掩码处理
将 $S_{ij}$ 中大于等于0.5的元素置为0：

```python
mask = S_ij.ge(0.5)
S_ij = torch.masked_fill(S_ij, mask, value=0)
```


### Step 12: 权重计算
通过最大值归一化和指数函数计算权重矩阵 $P_{ij}$ 及其相关量：

$$
m\_block\_ij, \_ = \text{torch.max}(S_{ij}, \text{dim}=-1, \text{keepdims}=True)
$$

$$
P_{ij} = \text{torch.exp}(S_{ij} - m\_block\_ij)
$$

$$
l\_block\_ij = \text{torch.sum}(P_{ij}, \text{dim}=-1, \text{keepdims}=True) + \epsilon
$$

$$
P\_ij\_Vj = \text{torch.einsum}('... i j, ... j d -> ... i d', P_{ij}, Vj)
$$


### Step 13: 更新最大值和权重
更新 $m_i$ 和 $l_i$：

$$
m_i\_\text{new} = \text{torch.maximum}(m\_block\_ij, m_i)
$$

$$
l_i\_\text{new} = \text{torch.exp}(m_i - m_i\_\text{new}) \times l_i + \text{torch.exp}(m\_block\_ij - m_i\_\text{new}) \times l\_block\_ij
$$


### Step 14: Dropout操作
对 $P_{ij}V_j$ 应用Dropout：

```python
m = torch.nn.Dropout(p=P_DROP)
P_ij_Vj = m(P_ij_Vj)
```


### Step 15: 更新输出块
更新输出块 $O_i$：

$$
O\_BLOCKS[i] = \frac{l_i}{l_i\_\text{new}} \times \text{torch.exp}(m_i - m_i\_\text{new}) \times O_i + \frac{\text{torch.exp}(m\_block\_ij - m_i\_\text{new})}{l_i\_\text{new}} \times P_{ij}V_j
$$

并打印调试信息：

```python
print(f'-----------Attention : Q {i} xK {j} ---------')
print(O_BLOCKS[i].shape)
print(O_BLOCKS[0])
print(O_BLOCKS[1])
print('\n')
```


### Step 16: 更新块信息
将更新后的 $l_i$ 和 $m_i$ 保存回对应的块中：

```python
l_BLOCKS[i] = li_new
m_BLOCKS[i] = mi_new
```


### 拼接结果
最后，将所有块拼接回完整的张量：

```python
O = torch.cat(O_BLOCKS, dim=2)
l = torch.cat(l_BLOCKS, dim=2)
m = torch.cat(m_BLOCKS, dim=2)
```


### 计算量和显存


## FlashAttention 计算流程

### 计算量
在算法第9行，我们有 

$$
S_{ij} = Q_i K_j^T
$$

其中 

$$
Q_i \in \mathbb{R}^{B_r \times d}, K_j^T \in \mathbb{R}^{d \times B_c}
$$

根据前置知识，求 

$$
S_{ij}
$$

的计算量为 

$$
O(B_r B_c d)
$$

在算法第12行，我们有 

$$
P_{ij} V_j
$$

其中 

$$
P_{ij} \in \mathbb{R}^{B_r \times B_c}, V_j \in \mathbb{R}^{B_c \times d}
$$

则这里的计算量同样为 

$$
O(B_r B_c d)
$$

接下来我们看一共计算了多少次(1)和(2)，也就是执行了多少次内循环：

综合以上三点，flash attention的forward计算量为：

$$
O(B_c B_r N^2 B_r B_c d) = O(N^2 d)
$$

同理大家可以自行推一下backward中的计算量，在论文里给出的结论是 

$$
O(N^2)
$$

，$d$远小于$N$，因此 $d$ 也可以略去不表达。


### 显存
和标准attention相比，如果不考虑$O$的话，Flash Attention只需要存储 $m, l$ ，其显存需求为 

$$
O(N)
$$

。而标准attention需要存储 $S, P$ ，其显存需求为 

$$
O(N^2)
$$

。可以发现相比于标准attention，flash attention明显降低了对显存的需求。


### IO复杂度
我们来看伪代码的第六行，在每个外循环中，我们都会加载 $K, V$ 的block。所有外循环结束后，相当于我们加载了完整的 

$$
K, V \in \mathbb{R}^{N \times d}
$$

因此这里的IO复杂度为：

$$
O(Nd)
$$

再看伪代码第8行，在每个内循环中，我们都加载了部分 $Q, O, m, l$ block，由于 $m, l$ 本身比较小(IO复杂度是 

$$
O(N)
$$

)，因此我们暂时忽略它们，只考虑 $Q, O$ (原论文也是这么分析的)。固定某个外循环，所有内循环结束后，我们相当于完整遍历了 

$$
Q, O \in \mathbb{R}^{N \times d}
$$

。同时我们会经历 $T_c$ 次外循环。因此这里最终的IO复杂度为：

$$
O(T_c N d)
$$

将 $O, m, l$ 写回HBM，这里近似后IO复杂度为：

$$
O(Nd)
$$

。不过在原论文的分析中并没有考虑写回的复杂度，不过省略一些常数项不会影响我们最终的分析。

所以，总体来说flash attention的IO复杂度为：

$$
O(T_c N d) = O(B_c N N d) = O(M 4 N d N d) = O(M N^2 d^2)
$$

。论文中提过，一般$d$的取值在64～128，$M$的取值在100KB左右，因此有 

$$
\frac{M}{d^2} \ll 1
$$

。因此可以看出，Flash attention的IO复杂度是要显著小于标准attention的IO复杂度的。
