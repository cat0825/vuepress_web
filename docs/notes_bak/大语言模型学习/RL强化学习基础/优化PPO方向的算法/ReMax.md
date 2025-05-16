---
dg-publish: true
dg-permalink: /大语言模型学习/RL强化学习基础/优化PPO方向的算法/ReMax
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
permalink: /大语言模型学习/RL强化学习基础/优化PPO方向的算法/ReMax/
dgShowBacklinks: true
dgShowLocalGraph: true
dgShowInlineTitle: true
dgPassFrontmatter: true
noteIcon: 0
created: 2025-04-19T23:44:59.026+08:00
updated: 2025-04-19T23:46:55.617+08:00
title: ReMax
createTime: 2025/05/13 17:33:52
---



# ReMax: Reinforcement Learning for Large Language Models

## 分类
自动推断


## 标签
- 强化学习
- 策略梯度
- PPO算法
- 大型语言模型


## 日期
2025年4月12日


## 内容摘要
ReMax是一种简单、有效且高效的强化学习方法，旨在对齐大型语言模型。本文回顾了策略梯度与PPO算法的基本概念，并介绍了如何通过优势函数指导策略更新。


## 策略梯度与PPO回顾
策略梯度方法通过奖励估计值 $\psi_t$ 来提供更新幅度和方向。其公式为：

$$
g = E_{\pi_{\theta}} \left[ \sum_{t=0}^{T} \psi_t \nabla_{\theta} \log \pi_{\theta} (a_t | s_t) \right]
$$

当计算期望时，基于多条样本的公式为：

$$
g = \frac{1}{N} \sum_{i=1}^{N} \sum_{t=0}^{T} \psi_t^i \nabla_{\theta} \log \pi_{\theta} (a_t^i | s_t^i)
$$

### 重点段落
- **轨迹的总回报**：通过累积折扣奖励来估计 $\psi_t$。
- **蒙特卡洛估计**：提供动作后的回报，但方差较大。
- **基线改进版本**：通过加入基线 $b(s_t)$ 降低方差，常用基线是价值函数 $V(s_t)$。


### PPO算法简化
PPO算法利用优势函数指导策略更新，通过剪辑机制来稳定训练过程。其核心思想简化为：

$$
\arg_{\theta} \max E_{s \sim \nu_{\beta}, a \sim \pi_{\theta_k} (\cdot | s)} \left[ \min \left( \frac{\pi_{\theta_k} (a | s)}{\pi_{\theta} (a | s)} A_{\pi_{\theta_k}} (s, a), \text{clip} \left( \frac{\pi_{\theta_k} (a | s)}{\pi_{\theta} (a | s)}, 1 - \epsilon, 1 + \epsilon \right) A_{\pi_{\theta_k}} (s, a) \right) \right]
$$


## 操作步骤
1. ✅ 使用轨迹的总回报进行初步估计。
2. ⚠ 选择合适的基线以降低方差。
3. ❗ 实施PPO剪辑机制以稳定训练。


## 常见错误
> 注意：蒙特卡洛估计可能导致方差过大，需谨慎使用。


## 💡启发点
PPO算法通过剪辑机制有效地稳定了策略更新过程，值得在其他强化学习应用中借鉴。


## 行动清单
- 探索其他基线选择对策略梯度方法的影响。
- 实验不同剪辑参数对PPO算法性能的影响。
- 应用ReMax方法于其他大型语言模型。

> 原始出处：[ReMax: A Simple, Effective, and Efficient Reinforcement Learning Method for Aligning Large Language Models](链接未提供)



# ReMax具体算法

## 元数据
- 分类：机器学习
- 标签：ReMax，策略梯度，强化学习，算法
- 日期：2025年4月12日


## 核心观点总结
ReMax算法是基于策略梯度方法的强化学习算法，旨在通过修改基线计算来降低方差。它结合了REINFORCE方法和最大化策略，特别适用于大模型强化学习场景。
![Pasted-image-20250419234638.png](/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250419234638.png)


## 重点段落

### ReMax的基本概念
ReMax算法的出发点是去掉Critic Model，类似于GRPO，它在策略梯度的基础上进行改进。ReMax完全回到了策略梯度算法，并对其中的基线计算进行了修改。


### REINFORCE方法的修正
在REINFORCE中，传统上使用蒙特卡洛方法估计回报，但这会导致高方差。在大模型强化学习中，只有最后一个动作处有奖励，因此中间的奖励被视为0，这样修正后的形式可以更好地适应大模型场景。


### 基线计算的创新
ReMax通过减去基线值来降低方差。基线值是通过每个输出token处使用贪心解码产生的响应的奖励值计算得出的。这种方法有效减少了方差。

![Pasted-image-20250419234653.png](/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250419234653.png)


## 操作步骤
1. ✅ 从策略梯度中的REINFORCE方法出发，使用蒙特卡洛估计后续回报。
2. ⚠️ 考虑到大模型强化学习中只有最后一个动作处有奖励，中间动作处的奖励视为0。
3. ❗ 使用贪心解码产生的响应奖励值作为基线值来降低方差。


## 常见错误
> ⚠️ 注意：在使用REINFORCE方法时，直接使用蒙特卡洛估计可能导致方差过大，需通过基线值调整来解决。


## 💡 启发点
- ReMax算法通过创新的基线计算方法，有效解决了传统REINFORCE方法中的高方差问题，为大模型强化学习提供了新的思路。


## 行动清单
- 研究ReMax算法在不同大模型上的应用效果。
- 探讨其他可能的基线计算方法。
- 实现ReMax算法并与其他强化学习算法进行对比实验。


## 数据转换
| 参数      | 描述                           |
|-----------|--------------------------------|
| $g$       | 策略梯度                       |
| $r(x, y)$ | 奖励函数                       |
| $b_\theta(x)$ | 基线值                      |


## 公式显示
$$
g = \frac{1}{N} \sum_{i=1}^{N} \sum_{t=0}^{T} \left( r(x_i, a_{1:T}^i) - b_\theta(x_i) \right) \nabla_\theta \log \pi_\theta(a_t^i \mid [x_i, a_{1:t-1}^i])
$$

> 来源：本文内容参考了相关技术文档与研究论文，具体出处请参阅相关文献。
