---
{"dg-publish":true,"dg-permalink":"/大语言模型学习/RL强化学习基础/优化DPO方向的算法/TDPO","dg-home":false,"dg-description":"在此输入笔记的描述","dg-hide":false,"dg-hide-title":false,"dg-show-backlinks":true,"dg-show-local-graph":true,"dg-show-inline-title":true,"dg-pinned":false,"dg-passphrase":"在此输入访问密码","dg-enable-mathjax":false,"dg-enable-mermaid":false,"dg-enable-uml":false,"dg-note-icon":0,"dg-enable-dataview":false,"tags":["NLP"],"permalink":"/大语言模型学习/RL强化学习基础/优化DPO方向的算法/TDPO/","dgShowBacklinks":true,"dgShowLocalGraph":true,"dgShowInlineTitle":true,"dgPassFrontmatter":true,"noteIcon":0,"created":"2025-04-23T22:40:04.000+08:00","updated":"2025-04-23T22:40:35.087+08:00"}
---



# TDPO算法与KL约束在强化学习中的应用
元数据：

- 分类：算法与优化
- 标签：TDPO, KL约束, 强化学习, PPO, 前向KL
- 日期：2025年4月12日

## TDPO与PPO中的KL约束
TDPO（Trust Region Policy Optimization）算法通过引入PPO（Proximal Policy Optimization）中的KL约束来优化策略。不同于PPO使用的backward KL，TDPO采用forward KL来计算KL惩罚。这种选择的原因在于KL距离的非对称性：forward KL旨在尽可能覆盖整个分布的大部分，而backward KL则专注于拟合分布中的某一部分。
![Pasted image 20250423224032.png](/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250423224032.png)


## TDPO的优势
由于TDPO使用forward KL进行训练，其模型在输出多样性上更为自由。相比之下，PPO训练后的模型输出风格趋于一致，因为输出分布已聚集到一个局部分布上，导致reward方差小于SFT（Softmax Function Transformation）。

💡 启发点：TDPO在多样性输出上的优势使其在需要多种可能性探索的任务中表现更佳。


## 代码示例与计算步骤
在实现TDPO时，forward KL的计算方式可以通过以下代码实现：

```python
vocab_logps = logits.log_softmax(-1)
reference_vocab_ps = reference_logits.softmax(-1)
reference_vocab_logps = reference_vocab_ps.log()

# Forward KL 计算
per_position_kl = (reference_vocab_ps * (reference_vocab_logps - vocab_logps)).sum(-1)
per_token_logps = torch.gather(vocab_logps, dim=2, index=labels.unsqueeze(2)).squeeze(2)
per_reference_token_logps = torch.gather(reference_vocab_logps, dim=2, index=labels.unsqueeze(2)).squeeze(2)
```

### 操作步骤
1. ✅ 初始化策略模型与参考模型的logits。
2. ⚠ 计算logits的softmax并取log。
3. ❗ 计算每个位置的forward KL值。


## 常见错误
> **注意**：在实现TDPO时，务必确保forward KL计算的准确性，以避免模型输出的多样性不足。


## 行动清单
- 研究TDPO在不同任务中的表现。
- 比较TDPO和PPO在相同环境下的效果。
- 探索更多应用场景中的KL约束优化。

> 原始出处：[原文提供者未注明]

通过以上内容，我们总结了TDPO算法的核心概念及其与PPO的区别，特别是在KL约束的应用上。希望这篇笔记能够帮助你更好地理解TDPO算法及其优势。
