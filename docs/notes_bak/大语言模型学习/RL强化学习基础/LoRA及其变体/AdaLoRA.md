---
dg-publish: true
dg-permalink: /大语言模型学习/RL强化学习基础/LoRA及其变体/AdaLoRA
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
permalink: /大语言模型学习/RL强化学习基础/LoRA及其变体/AdaLoRA/
dgShowBacklinks: true
dgShowLocalGraph: true
dgShowInlineTitle: true
dgPassFrontmatter: true
noteIcon: 0
created: 2025-04-24T11:18:17.739+08:00
updated: 2025-04-24T11:18:43.096+08:00
title: AdaLoRA
createTime: 2025/05/13 17:33:52
---



# AdaLoRA: 动态适配低秩分解的创新技术

## 元数据
分类：自动推断

标签：动态适配、低秩分解、奇异值、深度学习、AdaLoRA

日期：2025年4月12日


## 核心观点
AdaLoRA是一种创新的深度学习技术，它通过动态调整不同层和参数类型的秩，根据下游任务需求进行优化。这种方法采用基于SVD（奇异值分解）的参数化形式，可以有效裁剪不重要的奇异值，降低计算复杂度。
![Pasted-image-20250424111842.png](../../.vuepress/public/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250424111842.png)
💡启发点：通过动态分配秩和使用SVD参数化，AdaLoRA实现了计算效率与性能优化的平衡。


## 重点段落

### 动态秩分配
AdaLoRA不仅为每个Adapter分配相同的秩，而是根据任务需求动态调整各层和参数类型的秩。这种灵活性使得模型能够更加高效地处理不同的任务。


### SVD参数化增量更新
采用SVD形式参数化增量更新，能够在规避复杂计算的同时高效裁剪不重要的奇异值。这种方法大大降低了计算量，并提高了模型的适应能力。


### 核心代码解析
```python
class AdaLoraLayer(LoraLayer):
    def update_layer(self, adapter_name, r, lora_alpha, lora_dropout, init_lora_weights):
        self.lora_A[adapter_name] = nn.Parameter(torch.randn(r, self.in_features))
        # Singular values
        self.lora_E[adapter_name] = nn.Parameter(torch.randn(r, 1))
        # Left singular vectors
        self.lora_B[adapter_name] = nn.Parameter(torch.randn(self.out_features, r))
        # The current rank
        self.ranknum[adapter_name] = nn.Parameter(torch.randn(1), requires_grad=False)
        self.ranknum[adapter_name].data.fill_(float(r))
        self.ranknum[adapter_name].requires_grad = False
        self.scaling[adapter_name] = lora_alpha if lora_alpha > 0 else float(r)
```


## 操作步骤
1. ✅ 初始化参数矩阵并分配秩。
2. ⚠ 使用SVD进行奇异值裁剪。
3. ❗ 根据任务需求动态调整适配器权重。


## 常见错误
> ⚠ 在调整秩时，可能会忽略特定任务对参数的特殊需求，导致模型性能下降。


## 行动清单
- 研究AdaLoRA在不同任务中的表现。
- 探索其他基于SVD的优化技术。
- 实验不同参数设置对模型性能的影响。


## 数据转换
| 参数 | 描述 |
|------|------|
| r    | 当前秩 |
| lora_alpha | 调整因子 |


## 公式显示
使用公式表示奇异值与秩关系：
$$ \text{ranknum} = \alpha \cdot \text{scaling} $$

> 原始内容来自PEFT/src/peft/tuners/adalora/layer.py。
