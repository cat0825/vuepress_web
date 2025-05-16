---
dg-publish: true
dg-permalink: /大语言模型学习/RL强化学习基础/PEFT参数高效微调/Prompt-Tuning
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
permalink: /大语言模型学习/RL强化学习基础/PEFT参数高效微调/Prompt-Tuning/
dgShowBacklinks: true
dgShowLocalGraph: true
dgShowInlineTitle: true
dgPassFrontmatter: true
noteIcon: 0
created: 2025-04-23T22:45:15.011+08:00
updated: 2025-04-23T22:46:43.186+08:00
title: Prompt Tuning
createTime: 2025/05/13 17:33:52
---



## 元数据
- 分类：机器学习
- 标签：Prompt Tuning, 模型微调, 语言模型
- 日期：2025年4月12日



## 核心观点总结
Prompt Tuning 是一种通过调整提示（prompt）模板来实现模型微调的方法。它不需要改变预训练模型的参数，而是通过在输入文本中添加特殊的 tokens 来优化模型表现。该方法主要分为 Hard Prompt 和 Soft Prompt 两种类型，每种类型都有其独特的实现方式和应用场景。
![Pasted-image-20250423224623.png](../../.vuepress/public/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250423224623.png)



## 重点段落

### Prompt Tuning 的基本原理
Prompt Tuning 通过在输入文本前添加一系列特殊 tokens 来实现对语言模型的微调。这些 tokens 作为 prompts 的专有参数，在训练过程中被更新优化，而预训练模型参数保持固定。


### Prompt Ensembling 方法
Prompt Ensembling 是一种集成多种 prompts 的方法，通过在同一任务上训练多个 prompts，为一个任务创建多个模型，并共享预训练语言模型的核心参数。


### Hard Prompt 与 Soft Prompt 的区别
- **Hard Prompt**：通过显式构建离散字符的模板，不参与训练过程中的参数调整。
- **Soft Prompt**：允许模板参数在训练过程中根据上下文语义和任务目标进行连续调整。
![Pasted-image-20250423224641.png](../../.vuepress/public/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250423224641.png)



## 技术术语转述
- **Prompt Tuning**：通过调整输入文本中的提示模板来优化模型，而无需改变模型本身的参数。
- **Hard Prompt**：固定的文本模板，用于直接与原始文本拼接。
- **Soft Prompt**：可调节的模板参数，允许在训练过程中进行优化。



## 操作步骤
1. ✅ 确定任务类型并定义合适的 Prompt 模板。
2. ⚠ 在输入文本中添加特殊 tokens 作为 prompts。
3. ❗ 保持预训练模型参数固定，更新 prompts 的专有参数。



## 常见错误
> 在使用 Hard Prompt 时，容易忽视模板字符的词向量在训练过程中的固定性。



## 💡启发点
Prompt Tuning 提供了一种轻量级的模型微调方法，适用于多任务推理场景，减少了为每个任务训练独立模型的需求。



## 行动清单
- 研究不同任务下的最佳 Prompt 模板设计。
- 实验 Prompt Ensembling 方法以提高模型性能。
- 探索 Soft Prompt 在复杂语境下的应用潜力。



## 数据转换
| 类型       | 描述                        |
|------------|-----------------------------|
| Hard Prompt | 固定模板，不参与参数调整     |
| Soft Prompt | 可调模板，参与训练优化       |



## 公式显示
在 Prompt Tuning 中，我们最大化生成文本 $Y$ 的概率：
$$
P(Y \mid [P; X])
$$

> 原始出处：Prompt Tuning 的相关文献和研究资料。
