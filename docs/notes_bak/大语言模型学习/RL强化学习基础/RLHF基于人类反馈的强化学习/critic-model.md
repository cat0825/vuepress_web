---
dg-publish: true
dg-permalink: /大语言模型学习/RL强化学习基础/RLHF基于人类反馈的强化学习/critic-model
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
permalink: /大语言模型学习/RL强化学习基础/RLHF基于人类反馈的强化学习/critic-model/
dgShowBacklinks: true
dgShowLocalGraph: true
dgShowInlineTitle: true
dgPassFrontmatter: true
noteIcon: 0
created: 2025-04-16T10:35:24.000+08:00
updated: 2025-04-17T09:02:24.000+08:00
title: critic-model
createTime: 2025/05/13 17:33:52
---



# 深度学习中的Critic模型与价值函数优化
元数据：

- 分类：深度学习
- 标签：Critic模型, 价值函数, RLHF, Actor-Critic
- 日期：2025年4月12日

## 核心观点总结
Critic模型用于预测期望总收益 $V_t$，通过TD-error进行更新。其核心在于对模型进行训练，以提升其对人类喜好的量化判断能力。Critic模型的存在意义在于帮助模型生成符合人类喜好的内容。

![Pasted image 20250416104730.png](/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250416104730.png)


## 重点段落
1. **Critic模型的初始化与更新**  
   Critic模型可以通过多种方式初始化，例如与Actor共享部分参数或从Reward Model初始化。价值头层是一个简单的线性层，用于将原始输出映射为单一值。Critic模型通过TD-error更新，当前状态的预估收益对齐即时奖励加上下一步状态预估收益。

2. **Critic Loss计算**  
   Critic损失函数为：
   $$
   \text{Critic\_loss} = (r_t + \gamma \cdot V_{t+1} - V_t)^2
   $$
   实际代码中使用GAE+value=returns，然后使用critic当前的输出values对齐returns。

3. **代码实现中的关键步骤**  
   在代码实现中，ValueLoss类用于计算损失。通过裁剪操作来对values进行处理，确保模型的稳定性。


## 技术术语转述
- **TD-error**：一种用于更新价值函数的方法，通过比较预期收益与实际收益来调整。
- **GAE**：广义优势估计，用于提高策略梯度方法的效率。
- **Value Head层**：一个简单的线性层，将复杂的输出映射为单一数值。


## 操作步骤
1. ✅ 初始化Critic模型，可以选择与Actor共享参数或从Reward Model初始化。
2. ⚠ 使用TD-error更新Critic模型，确保对当前状态的预估收益进行校正。
3. ❗ 在代码实现中，使用裁剪操作来稳定values的计算。


## 常见错误
> ⚠ 在计算Critic损失时，忘记应用裁剪操作可能导致不稳定的训练过程。


## 代码示例
```python
class ValueLoss(nn.Module):
    def __init__(self, clip_eps: float = None) -> None:
        super().__init__()
        self.clip_eps = clip_eps

    def forward(self, values: torch.Tensor, old_values: torch.Tensor, returns: torch.Tensor, action_mask: Optional[torch.Tensor] = None) -> torch.Tensor:
        if self.clip_eps is not None:
            values_clipped = old_values + (values - old_values).clamp(-self.clip_eps, self.clip_eps)
            surr1 = (values_clipped - returns) ** 2
            surr2 = (values - returns) ** 2
            loss = torch.max(surr1, surr2)
        else:
            loss = (values - returns) ** 2

        loss = masked_mean(loss, action_mask, dim=-1).mean()
        return 0.5 * loss
```


## 💡启发点
在训练过程中，结合GAE和value能够有效提高Critic模型的稳定性和准确性。


## 行动清单
- [ ] 检查Critic模型的初始化方法是否合理。
- [ ] 确保在计算损失时应用裁剪操作。
- [ ] 评估GAE与value结合使用的效果。

> 来源：原文内容基于深度学习与强化学习结合的技术文档。
