---
dg-publish: true
dg-permalink: /大语言模型学习/Common-Models常见模型/MOE系列/Switch-Transformer
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
permalink: /大语言模型学习/Common-Models常见模型/MOE系列/Switch-Transformer/
dgShowBacklinks: true
dgShowLocalGraph: true
dgShowInlineTitle: true
dgPassFrontmatter: true
noteIcon: 0
created: 2025-04-27T22:25:40.483+08:00
updated: 2025-04-27T22:26:21.560+08:00
title: Switch Transformer
createTime: 2025/05/13 17:33:53
---



# Switch Transformer: 创新与负载均衡策略

## 元数据
- 分类：人工智能
- 标签：Switch Transformer, 负载均衡, MoE模型, 深度学习
- 日期：2025年4月12日


## 模型特点
Switch Transformer是一种基于T5开发的encoder-decoder结构模型，拥有1.6万亿参数和2048个专家（experts）。该模型的核心特性在于其参数量可以独立于计算量进行调整，从而在不增加训练和推理计算量的情况下提升效果。

💡启发点：通过改变参数量而不增加计算负担，Switch Transformer实现了性能提升。


## 创新点
- **MoE to dense**：将效果较好的MoE模型蒸馏到dense模型，压缩99%的参数，效果仍优于直接训练的dense模型。
- **多语言训练**：在多语言数据集上训练，发现101种语言效果普遍提升。


## 模型结构设计
Switch Transformer通过将transformer每层的FFN替换为MoE层，并简化gating为只选择一个expert（即k=1），形成Switch layer。
![Pasted-image-20250427222619.png](../../.vuepress/public/img/user/附件/Pasted-image-20250427222619.png)


## 负载均衡

### 公式与设定
专家容量通过容量系数（capacity factor）控制，公式如下：
$$
\text{expert capacity} = \left( \frac{\text{number of experts}}{\text{tokens per batch}} \right) \times \text{capacity factor}
$$

💡启发点：容量系数影响专家处理token的能力，需权衡计算和通讯压力。


### 负载均衡损失设计
给定 $N$ 个专家和包含 $T$ 个token的batch $B$，负载均衡损失计算如下：
$$
\text{loss} = \alpha \cdot N \cdot \sum_{i=1}^{N} f_i \cdot P_i
$$
- $f_i$ 表示被分配到第 $i$ 个专家的token数。
- $P_i$ 表示整个batch每个token分配给第 $i$ 个专家的概率总和。


### 数据表格
| 参数 | 描述 |
|------|------|
| $N$ | 专家数量 |
| $T$ | token数量 |
| $f_i$ | 分配到第 $i$ 个专家的token数 |
| $P_i$ | 每个token分配给第 $i$ 个专家的概率总和 |


## 常见错误
> ⚠ 注意：容量系数过大可能导致计算和通讯压力增大，需谨慎设置。


## 行动清单
- 探索Switch Transformer在不同任务中的应用效果。
- 研究负载均衡损失对模型性能的影响。
- 实验不同容量系数设置对overflow情况的影响。

> 来源：原始内容来自Switch Transformer文档。
