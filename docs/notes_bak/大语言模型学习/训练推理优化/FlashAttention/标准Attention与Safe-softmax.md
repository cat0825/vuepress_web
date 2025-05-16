---
dg-publish: true
dg-permalink: /大语言模型学习/训练推理优化/FlashAttention/标准Attention与Safe-softmax
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
permalink: /大语言模型学习/训练推理优化/FlashAttention/标准Attention与Safe-softmax/
dgShowBacklinks: true
dgShowLocalGraph: true
dgShowInlineTitle: true
dgPassFrontmatter: true
noteIcon: 0
created: 2025-04-28T22:30:07.000+08:00
updated: 2025-04-29T11:00:58.000+08:00
title: 标准Attention与Safe softmax
createTime: 2025/05/13 17:33:53
---



## 标准Attention
在介绍标准Attention之前，我们先定义几个基本变量：假设 $batch\_size$ 等于 1，$seq\_len$ 等于 $N$，$emb\_size$ 等于 $d$。在这个部分，我们只关注Attention的计算部分，忽略dropout、mask等其他计算。下面是标准的Attention计算流程：

$$
S = Q K^T
$$

$$
P = softmax(S)
$$


![Pasted-image-20250428223029.png](/img/user/附件/Pasted-image-20250428223029.png)



## 标准Safe softmax
在处理浮点数时，特别是对于 $float32$ 和 $bfloat16$ 类型的数据，当 $x \geq 89$ 时，$\exp(x)$ 就会变成无穷大（$\inf$），从而导致数据上溢的问题。为了避免数值溢出并保证数值稳定性，在计算时通常会减去最大值，这个过程称为Safe softmax。Safe softmax的计算公式如下：

首先，找出最大值 $m$：

$$
m = \max(x_i)
$$

然后，计算Safe softmax：

$$
softmax(x_i) = \frac{e^{x_i - m}}{\sum_{j=1}^{d} e^{x_j - m}}
$$

通过这样的处理，可以有效避免数值不稳定的问题，提高计算的精度和稳定性。在实际应用中，Safe softmax是一个非常重要的技巧，尤其是在深度学习模型中涉及到概率分布的计算时。
![Pasted-image-20250428223037.png](/img/user/附件/Pasted-image-20250428223037.png)
