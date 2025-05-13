---
{"dg-publish":true,"dg-permalink":"/大语言模型学习/RL强化学习基础/优化PPO方向的算法/REINFORCE算法改进：RLOO与REINFORCE++","dg-home":false,"dg-description":"在此输入笔记的描述","dg-hide":false,"dg-hide-title":false,"dg-show-backlinks":true,"dg-show-local-graph":true,"dg-show-inline-title":true,"dg-pinned":false,"dg-passphrase":"在此输入访问密码","dg-enable-mathjax":false,"dg-enable-mermaid":false,"dg-enable-uml":false,"dg-note-icon":0,"dg-enable-dataview":false,"tags":["NLP"],"permalink":"/大语言模型学习/RL强化学习基础/优化PPO方向的算法/REINFORCE算法改进：RLOO与REINFORCE++/","dgShowBacklinks":true,"dgShowLocalGraph":true,"dgShowInlineTitle":true,"dgPassFrontmatter":true,"noteIcon":0,"created":"2025-04-22T22:09:59.000+08:00","updated":"2025-04-22T22:46:13.000+08:00"}
---



## 元数据
- 分类：机器学习/强化学习
- 标签：REINFORCE, RLOO, 人类反馈, LLMs, 算法优化
- 日期：2025年4月12日



## 核心观点总结
本文探讨了两种基于REINFORCE算法的改进方法：RLOO（REINFORCE Leave-One-Out）和REINFORCE++。RLOO通过调整基线值来优化策略梯度，而REINFORCE++则提供了一种简单高效的方法来对齐大型语言模型。



## 重点段落

### RLOO的分析
在RLOO中，每个响应的基线值被设置为其奖励减去其他响应奖励的均值。这种方法通过对每个prompt $x_i$采样$M$条response，优化其策略梯度。公式如下：

$$
b_\theta(x_i, y_j^i) = \frac{1}{M-1} \sum_{k \neq j} r(x_i, y_k^i), \quad j \in M
$$

策略梯度公式为：

$$
g = \frac{1}{N} \sum_{i=1}^{N} \frac{1}{M} \sum_{j=0}^{M} \left[ \left( r(x_i, y_j^i) - \frac{1}{M-1} \sum_{k \neq j} r(x_i, y_k^i) \right) \nabla_\theta \log \pi_\theta(y_j^i | x_i) \right]
$$


### REINFORCE++概述
REINFORCE++是一种简单且高效的方法，用于对齐大型语言模型。它的详细内容在3.3.4章中有所涵盖。



## 操作步骤
1. ✅ **采样响应**：对于每个prompt $x_i$，采样$M$条response。
2. ⚠ **计算基线值**：对于每个response，计算其基线值为其奖励减去其他response奖励的均值。
3. ❗ **更新策略梯度**：根据调整后的基线值，更新策略梯度。



## 常见错误
> ⚠ 在计算基线值时，容易忽略排除当前response的奖励，从而导致错误的均值计算。



## 💡 启发点
- 通过调整基线值，RLOO能够更准确地反映每个response的相对价值。



## 行动清单
- 研究如何将RLOO应用于其他类型的强化学习问题。
- 探索REINFORCE++在不同大型语言模型中的表现。



## 来源
> 本文内容来源于论文《Back to Basics: Revisiting REINFORCE Style Optimization for Learning from Human Feedback in LLMs》和《REINFORCE++: A SIMPLE AND EFFICIENT APPROACH FOR ALIGNING LARGE LANGUAGE MODELS》。
> [[大语言模型学习/RL强化学习基础/优化PPO方向的算法/ReMax\|ReMax]]
> ![Pasted image 20250422221155.png](/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250422221155.png)
