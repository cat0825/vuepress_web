---
{"dg-publish":true,"dg-permalink":"/大语言模型学习/RL强化学习基础/DPO直接偏好优化/对比学习角度理解DPO","dg-home":false,"dg-description":"在此输入笔记的描述","dg-hide":false,"dg-hide-title":false,"dg-show-backlinks":true,"dg-show-local-graph":true,"dg-show-inline-title":true,"dg-pinned":false,"dg-passphrase":"在此输入访问密码","dg-enable-mathjax":false,"dg-enable-mermaid":false,"dg-enable-uml":false,"dg-note-icon":0,"dg-enable-dataview":false,"tags":["NLP"],"permalink":"/大语言模型学习/RL强化学习基础/DPO直接偏好优化/对比学习角度理解DPO/","dgShowBacklinks":true,"dgShowLocalGraph":true,"dgShowInlineTitle":true,"dgPassFrontmatter":true,"noteIcon":0,"created":"2025-04-22T22:44:55.000+08:00","updated":"2025-04-22T22:46:13.000+08:00"}
---



# 对比学习与直接偏好优化：从人类反馈中学习

## 元数据
- 分类：机器学习
- 标签：对比学习、偏好优化、人类反馈、策略距离
- 日期：2025年4月12日


## 内容概述
在机器学习领域，对比学习（Contrastive Learning）和直接偏好优化（Direct Preference Optimization, DPO）是两种重要的技术。本文探讨了如何通过对比学习的视角来理解DPO，尤其是在处理人类反馈时的应用。

💡 **启发点**：DPO可以被视作一种特殊形式的对比学习，其中正负样本的数量都为一。


## 核心观点
- **对比学习的目标**：通过对比学习，我们希望学习一种表示，使得相似的样本彼此接近，而不相似的样本彼此远离。对于一个锚样本 $x$，我们有一个正样本 $x^+$ 和一组负样本 $\{x_i^-\}_{i=1}^m$，通过最小化损失函数来实现目标。
  
- **DPO的视角**：DPO可以被看作是对比学习的一种特例，其中正负样本的数量都为一。策略 $\pi(y|x)$ 表示锚样本与正/负样本的距离，目的是使策略更接近正样本而远离负样本。


## 重点段落

### 对比学习的损失函数
对于对比学习，损失函数可以表示为：

$$
\ell_f(x, x^+, \{x_i^-\}_{i=1}^m) = -\log \frac{\exp(f(x)^\top f(x^+))}{\exp(f(x)^\top f(x^+)) + \sum_{i=1}^m \exp(f(x)^\top f(x_i^-))}
$$

其中，两个表示的点积（如 $f(x)^\top f(x^+)$）被视为两个样本之间的相似性分数。


### DPO中的损失函数
在DPO中，损失函数类似于：

$$
\text{loss} = - E_{(y^+, y^-, x) \in D} \left[ \log P[y^+ \succ y^-] \right]
$$

这可以被理解为策略与正/负样本之间的距离计算。


## 操作步骤
1. ✅ 选择一个锚样本 $x$。
2. ⚠ 确定正样本 $x^+$ 和负样本集合 $\{x_i^-\}$。
3. ❗ 计算每个样本之间的相似性分数。
4. ✅ 最小化损失函数以优化策略。


## 常见错误
> ⚠ 在计算相似性分数时，确保使用正确的向量表示和点积操作，以避免误差。


## 行动清单
- 研究更多关于对比学习和DPO的文献。
- 实验不同的数据集以评估DPO性能。
- 探索如何将DPO应用于其他机器学习任务。

> 原始出处：
> CONTRASTIVE PREFERENCE LEARNING: LEARNING FROM HUMAN FEEDBACK WITHOUT RL  
> Models of human preference for learning reward functions  
> OFFLINE RL WITH NO OOD ACTIONS: IN-SAMPLE LEARNING VIA IMPLICIT VALUE REGULARIZATION  
> Direct Preference Optimization: Your Language Model is Secretly a Reward Model  
> Direct Preference-based Policy Optimization without Reward Modeling
