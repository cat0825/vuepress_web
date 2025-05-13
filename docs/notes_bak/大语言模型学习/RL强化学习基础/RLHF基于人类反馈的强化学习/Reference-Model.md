---
dg-publish: true
dg-permalink: /大语言模型学习/RL强化学习基础/RLHF基于人类反馈的强化学习/Reference-Model
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
permalink: /大语言模型学习/RL强化学习基础/RLHF基于人类反馈的强化学习/Reference-Model/
dgShowBacklinks: true
dgShowLocalGraph: true
dgShowInlineTitle: true
dgPassFrontmatter: true
noteIcon: 0
created: 2025-04-16T21:14:29.000+08:00
updated: 2025-04-17T09:02:24.000+08:00
title: Reference-Model
createTime: 2025/05/13 17:33:52
---



# 强化学习中的KL约束与奖励机制解析
**分类**：人工智能

**标签**：强化学习、PPO算法、KL约束

**日期**：2025年4月12日

## 核心观点总结
在强化学习中，KL约束被用于防止策略偏离预训练模型太远。通过冻结SFT模型参数并在PPO训练中加入per-token的KL约束项，确保策略的稳定性。奖励机制通过调整公式，使得新的token-level reward能够更准确地反映策略的有效性。
![Pasted image 20250416211533.png](/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250416211533.png)


## 重点内容

### KL约束在PPO训练中的应用
在PPO训练过程中，冻结SFT模型的参数，并利用其产生per-token的KL约束项。这种机制旨在防止策略过度偏离SFT模型，确保训练过程中策略的稳定性。


### 奖励机制的调整
新的奖励公式可以表示为：
$$
r(x, y) - \beta \cdot KL\_reward
$$
其中，token-level reward根据时间状态进行区分。


### 奖励公式的具体表达
- 当$t \neq T$时：
  $$
  r_t = -\beta \cdot \left( \log \frac{\pi_{ref}(a_t \mid s_t)}{\pi(a_t \mid s_t)} \right)
  $$

- 当$t = T$时：
  $$
  r_t = r(x, y) - \beta \cdot \left( \log \frac{\pi_{ref}(a_t \mid s_t)}{\pi(a_t \mid s_t)} \right)
  $$

其中$T$表示终止状态时间，即句子末尾的token。
![Pasted image 20250416211541.png](/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250416211541.png)


## 操作步骤
1. ✅ 冻结SFT模型参数。
2. ⚠ 在PPO训练中加入per-token的KL约束项。
3. ❗ 调整奖励公式以反映新的策略有效性。


## 常见错误
> ⚠ 在训练过程中，忽视KL约束可能导致策略偏离预期结果。


## 💡 启发点
通过引入KL约束，可以有效地控制策略的偏移，从而提高模型的稳定性和可靠性。


## 行动清单
- 研究更多关于SFT模型在不同领域应用中的效果。
- 实验不同$\beta$值对奖励机制的影响。
- 探索其他可能的约束机制以提升策略稳定性。

> 原始出处：[文本来源未提供]
