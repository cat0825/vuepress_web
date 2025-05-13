---
dg-publish: true
dg-permalink: /大语言模型学习/RL强化学习基础/PEFT参数高效微调/Prefix-Tuning
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
permalink: /大语言模型学习/RL强化学习基础/PEFT参数高效微调/Prefix-Tuning/
dgShowBacklinks: true
dgShowLocalGraph: true
dgShowInlineTitle: true
dgPassFrontmatter: true
noteIcon: 0
created: 2025-04-23T22:48:57.007+08:00
updated: 2025-04-23T22:54:46.178+08:00
title: Prefix-Tuning
createTime: 2025/05/13 17:33:52
---



# Prefix Tuning与Prompt Tuning的比较与应用

## 元数据
- 分类：人工智能技术
- 标签：Prefix Tuning、Prompt Tuning、Transformer、机器学习
- 日期：2025年4月12日


## 核心观点总结
Prefix Tuning是一种通过在输入token前构造任务相关的连续virtual tokens作为Prefix的方法。它在训练过程中只更新Prefix部分的参数，而保持LLM其他部分参数不变。此方法对于不同模型结构需要构造不同的Prefix，并在每层都加上prompt的参数以提高性能。
![Pasted image 20250423225341.png](/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250423225341.png)


## 重点段落

### Prefix Tuning的实现
Prefix Tuning通过在输入token前构造任务相关的连续virtual tokens作为Prefix。这些virtual tokens不对应于真实tokens，而是自由参数。在训练过程中，仅更新这些Prefix的参数，保持LLM其他部分参数固定。
![Pasted image 20250423225444.png](/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250423225444.png)


### 应用于不同模型结构
1. **自回归架构模型**: 在句子前面添加前缀，形成 z = [PREFIX; x; y]。合适的上文能够在固定LM的情况下引导生成下文。
2. **编码器-解码器架构模型**: Encoder和Decoder都增加了前缀，形成 z = [PREFIX; x; PREFIX0; y]。Encoder端增加前缀是为了引导输入部分的编码，Decoder端增加前缀是为了引导后续token的生成。
![Pasted image 20250423225409.png](/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250423225409.png)


### 防止训练不稳定
为了防止直接更新Prefix参数导致训练不稳定和性能下降，在Prefix层前面加了MLP结构。在训练完成后，仅保留Prefix的参数。此方法通过消融实验验证，仅调整embedding层表现力不够，会导致性能显著下降，因此在每层都加了prompt的参数。


## 技术术语通俗解释
- **Prefix**: 在输入数据前添加的一段可调整的虚拟数据，用于优化模型性能。
- **MLP结构**: 多层感知器结构，用于处理复杂数据关系。
- **消融实验**: 一种实验方法，通过去除某个组件来评估其对系统整体性能的影响。


## 操作步骤
1. ✅ 构造任务相关的连续virtual tokens作为Prefix。
2. ⚠ 在训练过程中仅更新Prefix部分参数。
3. ❗ 在每层都加上prompt的参数以提高性能。


## 常见错误
> 注意：直接更新Prefix参数可能导致训练不稳定和性能下降，应在Prefix层前面加MLP结构。


## 💡启发点
通过消融实验验证，仅调整embedding层表现力不够，会导致性能显著下降，因此在每层都加了prompt的参数。


## 行动清单
- 研究不同模型结构下Prefix Tuning的具体实现。
- 进行消融实验以评估各组件对系统性能的影响。
- 探索其他可能的优化策略以提高模型性能。

> 原始出处：[原文内容]

注意：所有公式或公式字母（如 $\alpha$、$\beta$、$\max$、$\lim$ 等），一律用块级公式包裹，以便在Obsidian中识别为块级公式。
