---
{"dg-publish":true,"dg-permalink":"/大语言模型学习/Common-Models常见模型/Qwen系列/Qwen2.5","dg-home":false,"dg-description":"在此输入笔记的描述","dg-hide":false,"dg-hide-title":false,"dg-show-backlinks":true,"dg-show-local-graph":true,"dg-show-inline-title":true,"dg-pinned":false,"dg-passphrase":"在此输入访问密码","dg-enable-mathjax":false,"dg-enable-mermaid":false,"dg-enable-uml":false,"dg-note-icon":0,"dg-enable-dataview":false,"tags":["NLP"],"permalink":"/大语言模型学习/Common-Models常见模型/Qwen系列/Qwen2.5/","dgShowBacklinks":true,"dgShowLocalGraph":true,"dgShowInlineTitle":true,"dgPassFrontmatter":true,"noteIcon":0,"created":"2025-04-25T11:16:40.000+08:00","updated":"2025-04-25T11:17:25.000+08:00"}
---



# Qwen2.5: 高性能长文本处理模型技术报告

## 元数据
分类：人工智能研究

标签：Qwen2.5模型，长文本处理，预训练数据

日期：2025年4月12日


## 核心观点总结
Qwen2.5是一系列专注于长文本处理的高性能模型，采用多阶段预训练方法和先进的数据过滤技术，旨在提升处理长文本的能力。其预训练数据经过精细过滤，确保高质量输入，并通过渐进式训练适应不同长度的上下文。模型系列包括多个参数规模的版本，从0.5B到72B不等。长序列生成和数学推理是其后训练的重点领域。


## 重点段落

### 模型系列与结构
Qwen2.5包含多个参数规模的模型，包括base和instruct版本，以及MoE模型如Qwen2.5-Turbo和Qwen2.5-Plus。其结构采用SwiGLU、RoPE、QKV bias、RMSNorm、GQA + YaRN + DCA，与前代模型一致。Tokenizer使用BBPE，词表大小为151643。


### 预训练数据与方法
使用18T tokens量级的数据进行预训练，数据经过Qwen2-Instruct模型过滤以确保质量。加入了专门的数学与代码数据，并对合成数据进行了严格过滤和奖励机制评估。数据混合策略通过对不同领域内容进行分类与平衡，以确保高质量信息的代表性。


### 长文本预训练
采用两阶段预训练方法：初始阶段使用4K token上下文长度，最终阶段扩展至32K token。Qwen2.5-Turbo经过四个阶段训练，最终达到256K token，能够处理最多1M个token。渐进式方法帮助模型适应增加的上下文长度，并应用YARN和DCA技术以扩展处理能力。


## 操作步骤
1. ✅ 初始预训练使用4K token上下文长度。
2. ⚠ 最终阶段扩展至32K token。
3. ❗ Qwen2.5-Turbo经过四个阶段达到256K token。


## 常见错误
> 警告：在数据混合过程中，需避免过度代表的领域影响整体数据质量，确保高价值领域得到足够重视。


## 数据表格
| 模型系列 | 参数规模 | 上下文长度 |
|----------|----------|------------|
| Qwen2.5  | 0.5B-72B | 4K-32K     |
| Turbo    | MoE      | 256K       |


## 💡启发点
通过渐进式训练方法和先进的数据过滤技术，Qwen2.5实现了对长文本的高效处理能力，显著提升了模型的广泛适用性。


## 行动清单
- 进一步研究Qwen2.5在不同领域的应用效果。
- 探索更多数据过滤和奖励机制以提升样本质量。
- 扩展长文本处理能力至更多实际场景。

> 来源：Qwen2.5 Technical Report, https://arxiv.org/pdf/2412.15115
