---
dg-publish: true
dg-permalink: /大语言模型学习/RL强化学习基础/RLHF基于人类反馈的强化学习/Actor-Model
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
permalink: /大语言模型学习/RL强化学习基础/RLHF基于人类反馈的强化学习/Actor-Model/
dgShowBacklinks: true
dgShowLocalGraph: true
dgShowInlineTitle: true
dgPassFrontmatter: true
noteIcon: 0
created: 2025-04-16T10:34:25.000+08:00
updated: 2025-04-17T09:02:24.000+08:00
title: Actor-Model
createTime: 2025/05/13 17:33:52
---



# 强化学习中的PPO算法与Actor模型

## 元数据
- 分类：机器学习
- 标签：PPO算法, 强化学习, Actor模型
- 日期：2025年4月12日


## 文章内容
在这篇博客中，我们将探讨如何在强化学习中使用PPO（Proximal Policy Optimization）算法来优化Actor模型。PPO是一种用于策略优化的算法，能够在保证策略更新稳定性的同时提高学习效率。

### 核心观点
PPO算法通过计算策略的损失函数来更新Actor模型。具体来说，输入一条prompt（批大小为1），输出其对应的response，然后将prompt与response结合计算损失，用于更新Actor。PPO算法中的损失计算涉及到优势函数（Advantage Function），并在每个输出token处计算损失。
![Pasted image 20250416103547.png](/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250416103547.png)


### 重点段落
1. **损失函数的定义**：
   PPO算法中的Actor损失函数定义为：
   $$
   \text{Actor\_loss} = - \min \left( \frac{\pi_{\text{old}}(a_t|s_t)}{\pi(a_t|s_t)} \cdot A_t(s_t, a_t), \text{clip}\left(\frac{\pi_{\text{old}}(a_t|s_t)}{\pi(a_t|s_t)}, 1 - \epsilon, 1 + \epsilon\right) \cdot A_t(s_t, a_t) \right)
   $$
   其中，$\epsilon$取0到1之间的值。

2. **代码实现**：
   ```python
   class PolicyLoss(nn.Module):
       """Policy Loss for PPO"""
       def __init__(self, clip_eps: float = 0.2) -> None:
           super().__init__()
           self.clip_eps = clip_eps

       def forward(self, log_probs: torch.Tensor, old_log_probs: torch.Tensor, advantages: torch.Tensor, action_mask: Optional[torch.Tensor] = None) -> torch.Tensor:
           ratio = (log_probs - old_log_probs).exp()
           surr1 = ratio * advantages
           surr2 = ratio.clamp(1 - self.clip_eps, 1 + self.clip_eps) * advantages
           loss = -torch.min(surr1, surr2)
           loss = masked_mean(loss, action_mask, dim=-1).mean()
           return loss

       def masked_mean(tensor, mask, dim):
           if mask is None:
               return tensor.mean(axis=dim)
           return (tensor * mask).sum(axis=dim) / mask.sum(axis=dim)
   ```
   
3. **优势函数的计算**：
   优势函数在每个输出token处都进行计算，以确保策略更新的准确性。


### 操作步骤
1. ✅ 输入一条prompt并获取对应的response。
2. ⚠ 将prompt与response结合计算损失。
3. ❗ 使用PPO算法更新Actor模型。


### 常见错误
> **警告**：在实现PPO算法时，需注意优势函数的准确计算，尤其是在处理不同批次数据时，可能会出现误差。


### 💡启发点
在实现策略优化时，使用token-level的优势函数可以提高模型的精度和稳定性。


### 行动清单
- [ ] 实现并测试PolicyLoss类中的forward方法。
- [ ] 验证不同$\epsilon$值对模型性能的影响。
- [ ] 优化代码以提高计算效率。

> 原文出处：本文内容基于强化学习领域的PPO算法及其应用于Actor模型的研究与实践。
