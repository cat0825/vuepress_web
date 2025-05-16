---
dg-publish: true
dg-permalink: /大语言模型学习/RL强化学习基础/RLHF基于人类反馈的强化学习/Reward-Model
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
permalink: /大语言模型学习/RL强化学习基础/RLHF基于人类反馈的强化学习/Reward-Model/
dgShowBacklinks: true
dgShowLocalGraph: true
dgShowInlineTitle: true
dgPassFrontmatter: true
noteIcon: 0
created: 2025-04-16T21:01:20.000+08:00
updated: 2025-04-17T09:02:24.000+08:00
title: Reward-Model
createTime: 2025/05/13 17:33:52
---



# 强化学习与大模型奖励模型训练
元数据：

- 分类：机器学习
- 标签：强化学习，奖励模型，PPO，SFT
- 日期：2025年4月12日

## 核心观点总结
在强化学习中，奖励模型（Reward Model）用于评估生成的响应的质量。在PPO（Proximal Policy Optimization）训练过程中，奖励模型的参数是冻结的，仅用于提供奖励值。本文介绍了奖励模型的训练流程及其与传统强化学习的区别。
![Pasted-image-20250416210854.png](../../.vuepress/public/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250416210854.png)


## 奖励模型训练
奖励模型通常是在SFT（Supervised Fine-Tuning）模型的基础上，通过添加价值头（Value Head）进行训练。以下是奖励模型训练的关键步骤：

- **奖励计算**：只在最后一个token处计算奖励值，作为整个响应的奖励。
- **损失函数**：
  $$
  \text{Reward\_loss} = - E_{(x, y_w, y_l) \sim D} \left[ \log \left( \frac{\exp(r(x, y_w))}{\exp(r(x, y_w)) + \exp(r(x, y_l))} \right) \right]
  $$
  其中 $x$ 表示提示（prompt），$y_w$ 表示选择的响应（chosen response），$y_l$ 表示拒绝的响应（rejected response）。

```Python
class PairWiseLoss(nn.Module):
    """
    Pairwise Loss for Reward Model
    """
    def forward(self, chosen_reward, reject_reward, margin):
        if margin is not None:
            loss = -F.logsigmoid(chosen_reward - reject_reward - margin)
        else:
            loss = -F.logsigmoid(chosen_reward - reject_reward)
        return loss.mean()

```


## 与传统强化学习的对比
传统强化学习的RLHF（Reinforcement Learning with Human Feedback）对一条轨迹中的所有状态动作对进行奖励加和，而大模型奖励模型仅针对整个响应提供一个奖励值。

- **传统RLHF损失函数**：
  $$
  \text{Reward\_loss} = - E_{(\sigma^+, \sigma^-, y) \in D} \left[ \log \left( \frac{\exp(\sum r(s_t^+, a_t^+))}{\exp(\sum r(s_t^+ , a_t^+)) + \exp(\sum r(s_t^-, a_t^-))} \right) \right]
  $$

![Pasted-image-20250416210927.png](../../.vuepress/public/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250416210927.png)


## 聚合操作
可以将传统强化学习中的奖励加和替换为聚合操作 $\text{AGG}$，如加和、加权和、取最后一个值或使用Transformer聚合。


## 操作步骤
1. ✅ 在SFT模型上添加Value Head。
2. ⚠️ 训练过程中冻结Reward Model参数。
3. ❗ 使用最后一个token的值作为整个响应的奖励。


## 常见错误
> 在奖励计算时，误将中间token的值作为最终奖励。


## 💡启发点
- 将prompt到response视为单步MDP（Markov Decision Process），这简化了模型的复杂性。


## 行动清单
- 探索更多聚合操作在奖励模型中的应用。
- 研究不同reward model在PPO中的表现差异。

> 原始出处：[原文链接或书名章节]
