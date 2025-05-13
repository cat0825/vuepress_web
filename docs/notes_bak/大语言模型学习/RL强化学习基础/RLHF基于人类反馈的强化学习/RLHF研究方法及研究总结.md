---
dg-publish: true
dg-permalink: /大语言模型学习/RL强化学习基础/RLHF基于人类反馈的强化学习/RLHF流程2
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
permalink: /大语言模型学习/RL强化学习基础/RLHF基于人类反馈的强化学习/RLHF流程2/
dgShowBacklinks: true
dgShowLocalGraph: true
dgShowInlineTitle: true
dgPassFrontmatter: true
noteIcon: 0
created: 2025-04-16T10:27:08.000+08:00
updated: 2025-04-16T10:28:24.000+08:00
title: RLHF研究方法及研究总结
createTime: 2025/05/13 17:33:52
---



# 人类偏好建模与奖励函数优化：RLHF方法
分类：人工智能、机器学习

标签：人类偏好、奖励函数、RL算法

日期：2025年4月12日

## 核心观点总结
在研究中，算法通过拟合奖励函数与人类偏好，并使用强化学习（RL）算法训练策略，以优化当前预测的奖励函数。人类通过比较智能体行为轨迹片段来提供偏好标签，而不是绝对数值分数。此方法利用了人类更容易进行比较的特性，帮助学习人类偏好。
![Pasted image 20250416102822.png](/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250416102822.png)


## 重点段落
1. **偏好标签与建模**  
   对于两个智能体轨迹片段 $\sigma_1$ 和 $\sigma_2$，偏好标签 $y$ 可以表示为 0, 1 或 0.5，分别对应 $\sigma_1$ 更被偏好、$\sigma_2$ 更被偏好或两者同等偏好。

2. **偏好建模方法**  
   假设人类偏好一个片段的概率与潜在奖励在该片段长度上的总和呈指数关系。基于 Bradley-Terry 模型，可以得出人类偏好片段 $\sigma_1$ 超过 $\sigma_2$ 的概率：
   $$
   \hat{P}[\sigma_1 \succ \sigma_2] = \frac{\exp \sum \hat{r}(s_t^1, a_t^1)}{\exp \sum \hat{r}(s_t^1, a_t^1) + \exp \sum \hat{r}(s_t^2, a_t^2)}
   $$

3. **奖励学习与优化**  
   收集到的人类偏好标签可以通过二分类思路来学习奖励函数，损失函数采用交叉熵：
   $$
   \text{loss}(\hat{r}) = -\mathbb{E}_{(\sigma_1, \sigma_2, y) \in D}[y(\sigma_1 \succ \sigma_2) \log \hat{P}[\sigma_1 \succ \sigma_2] + y(\sigma_2 \succ \sigma_1) \log \hat{P}[\sigma_2 \succ \sigma_1]]
   $$


## 操作步骤
1. ✅ 提供智能体行为轨迹的片段给人类进行比较。
2. ⚠ 根据人类反馈的偏好标签构建奖励函数。
3. ❗ 使用交叉熵损失函数进行优化，得到符合人类偏好的奖励函数。


## 常见错误
> ⚠ 在收集人类偏好标签时，确保数据的多样性和代表性，以避免偏差。


## 💡 启发点
- 利用人类偏好进行奖励函数优化是一种创新的方法，有助于提升AI决策的合理性。


## 行动清单
- [ ] 进一步研究不同领域中人类偏好的适用性。
- [ ] 探索其他模型在偏好建模中的应用。


## 后续追踪
- 后续研究计划包括探索如何在更复杂的环境中应用该方法，以及研究不同偏好标签对学习效果的影响。

> 原始出处：研究方法与算法描述文档

通过这种方法，我们能够更好地理解和应用人类偏好，从而提升人工智能系统的表现和用户满意度。
