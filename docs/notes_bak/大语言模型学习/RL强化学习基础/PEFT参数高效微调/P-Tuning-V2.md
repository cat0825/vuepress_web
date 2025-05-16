---
dg-publish: true
dg-permalink: /大语言模型学习/RL强化学习基础/PEFT参数高效微调/P-Tuning-V2
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
permalink: /大语言模型学习/RL强化学习基础/PEFT参数高效微调/P-Tuning-V2/
dgShowBacklinks: true
dgShowLocalGraph: true
dgShowInlineTitle: true
dgPassFrontmatter: true
noteIcon: 0
created: 2025-04-23T22:55:47.000+08:00
updated: 2025-04-24T11:10:28.000+08:00
title: P-Tuning V2
createTime: 2025/05/13 17:33:52
---



# P-Tuning V2：增强自然语言处理任务的提示优化
元数据：

分类：自然语言处理

标签：P-Tuning V2, 自然语言理解, 提示优化

日期：2025年4月12日

## 核心观点总结
P-Tuning V2 是一种改进的提示优化技术，旨在解决之前方法中存在的模型参数规模和任务通用性问题。通过在每一层加入提示（Prompts）而不仅仅是输入层，P-Tuning V2 提供了更多可学习的参数，并能更直接影响模型预测。💡这使得提示优化在较小模型和多任务学习中表现更为优异。


## 重点段落
1. **缺乏模型参数规模和任务通用性**  
   之前的提示优化方法在大规模模型中表现良好，但在较小模型（100M到1B参数）上与全量微调差异显著，限制了其适用性。

2. **深度提示优化的引入**  
   在每一层加入提示令可学习参数增加，从而提升了参数效率和模型预测的直接影响。

3. **多任务学习和提示长度优化**  
   针对不同任务采用不同提示长度，并通过多任务学习进行预训练，以缓解优化困难。


## 技术术语通俗转述
- **提示优化（Prompt Tuning）**：一种通过在输入中插入特殊提示来引导模型学习的技术。
- **全量微调**：对整个模型进行参数调整以提高性能的方法。
- **多任务学习**：同时学习多个相关任务，以提高模型在各个任务上的表现。


## 实施步骤
1. ✅ 在每一层加入 Prompts tokens 作为输入。
2. ⚠ 移除重参数化的编码器以提高训练速度和鲁棒性。
3. ❗ 针对不同任务选择合适的提示长度。
4. ✅ 引入多任务学习进行预训练。
![Pasted-image-20250424105959.png](/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250424105959.png)


## 代码实现
```Python
#设置virtual_token的数量及past_key_values维度
prompt_tokens = prompt_tokens[:, : peft_config.num_virtual_tokens]
past_key_values = past_key_values.view(
batch_size,peft_config.num_virtual_tokens,
peft_config.num_layers * 2 ,
peft_config.num_attention_heads,
peft_config.token_dim // peft_config.num_attention_heads,
)
# prefix encoder类的定义
class PrefixEncoder (torch.nn.Module):
"""
The torch.nn model to encode the prefix Input shape: (batch-size, prefix-length) Output shape: (batch-size, prefix-length, 2*layers*hidden) """
def __init__ ( self, config: ChatGLMConfig ):
super ().__init__()
self.prefix_projection = config.prefix_projection
# self.prefix_projection=True-->prefix tuning
# self.prefix_projection=False-->p-tuning v2
if self.prefix_projection:
# Use a two-layer MLP to encode the prefix
kv_size = config.num_layers * config.kv_channels * config.multi_query_group_num * 2
self.embedding = torch.nn.Embedding(config.pre_seq_len, kv_size)
self.trans = torch.nn.Sequential(
torch.nn.Linear(kv_size, config.hidden_size),
torch.nn.Tanh(),
torch.nn.Linear(config.hidden_size, kv_size)
)
else :
self.embedding = torch.nn.Embedding(config.pre_seq_len,
config.num_layers * config.kv_channels * config.multi_query_group_num * 2 )
def forward ( self, prefix: torch.Tensor ):
if self.prefix_projection:
prefix_tokens = self.embedding(prefix)
past_key_values = self.trans(prefix_tokens)
else :
past_key_values = self.embedding(prefix)
return past_key_values

```


## 常见错误
> ⚠ 使用不合适的提示长度可能导致性能下降。确保根据具体任务调整提示长度。


## 行动清单
- 研究如何在现有项目中集成 P-Tuning V2。
- 针对特定任务测试不同的提示长度。
- 探索多任务学习在其他领域的应用潜力。

> 来源：本文内容来源于对 P-Tuning V2 技术的总结与分析。
