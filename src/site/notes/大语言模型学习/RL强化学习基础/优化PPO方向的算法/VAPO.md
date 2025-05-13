---
{"dg-publish":true,"dg-permalink":"/大语言模型学习/RL强化学习基础/优化PPO方向的算法/VAPO","dg-home":false,"dg-description":"在此输入笔记的描述","dg-hide":false,"dg-hide-title":false,"dg-show-backlinks":true,"dg-show-local-graph":true,"dg-show-inline-title":true,"dg-pinned":false,"dg-passphrase":"在此输入访问密码","dg-enable-mathjax":false,"dg-enable-mermaid":false,"dg-enable-uml":false,"dg-note-icon":0,"dg-enable-dataview":false,"tags":["NLP"],"permalink":"/大语言模型学习/RL强化学习基础/优化PPO方向的算法/VAPO/","dgShowBacklinks":true,"dgShowLocalGraph":true,"dgShowInlineTitle":true,"dgPassFrontmatter":true,"noteIcon":0,"created":"2025-04-22T22:29:41.000+08:00","updated":"2025-04-22T22:46:13.000+08:00"}
---



## 分类：自动推断



## 标签：强化学习、VAPO算法、推理任务



## 日期：2025年4月12日



## 核心观点总结
VAPO（Value-model-based Augmented PPO）是一种新提出的算法，旨在提升复杂推理任务中的强化学习效率和稳定性。该算法在训练中使用了价值模型（Value Model），以更精确地估计每个动作对未来收益的影响，从而优化策略。VAPO在AIME 2024数据集上表现出色，超越了之前的算法，如Deepseek-R1-Zero-Qwen-32B和DAPO。



## 重点段落

### Value-model-based V.S. Value-model-free
- 传统的无价值模型方法（如GRPO、DAPO）在大型模型的强化学习中有效，但在复杂任务中表现不稳定。
- VAPO通过准确训练的价值模型可以实现更高的性能上限，因为它能够提供细粒度的奖励，优化策略。


### Value Model 的挑战
- 在长序列任务中训练一个完美的价值模型非常困难。
- 价值模型往往会在长轨迹序列中产生偏差，尤其是在使用自举方法时。


### 蒙特卡洛估计与价值模型
- 蒙特卡洛估计通常伴随着高方差，而价值模型可以生成低方差的估计，增强训练稳定性。
- 准确的价值模型有助于利用探索过程中产生的样本，提高强化学习的上限。



## 操作步骤
1. ✅ 确定任务目标，并选择合适的数据集。
2. ⚠ 使用价值模型初始化，注意避免偏差。
3. ❗ 在训练过程中监控方差和偏差，调整策略。



## 常见错误
> 在初始化价值模型时，避免使用不完整上下文，这可能导致偏差。



## 💡启发点
- 使用价值模型进行细粒度策略优化是提升复杂任务表现的关键。
- 低方差估计有助于增强训练稳定性，这对于长序列任务尤为重要。



## 行动清单
- 进一步研究价值模型在其他数据集上的表现。
- 探索不同初始化策略对VAPO性能的影响。
- 评估VAPO在实际应用中的可行性和效率。



## 数据转换
| 算法                 | 数据集         | 得分   |
|----------------------|---------------|--------|
| VAPO                 | AIME 2024     | 60.4   |
| Deepseek-R1-Zero-Qwen-32B | AIME 2024     | 未知   |
| DAPO                 | AIME 2024     | 未知   |



## 来源标注
> 本文内容基于论文《VAPO: Efficient and Reliable Reinforcement Learning for Advanced Reasoning Tasks》，链接: [arxiv.org/pdf/2504.05118](https://arxiv.org/pdf/2504.05118)
