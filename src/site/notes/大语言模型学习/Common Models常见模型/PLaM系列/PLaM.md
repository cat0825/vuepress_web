---
{"dg-publish":true,"dg-permalink":"/大语言模型学习/Common-Models常见模型/PLaM系列/PaLM","dg-home":false,"dg-description":"在此输入笔记的描述","dg-hide":false,"dg-hide-title":false,"dg-show-backlinks":true,"dg-show-local-graph":true,"dg-show-inline-title":true,"dg-pinned":false,"dg-passphrase":"在此输入访问密码","dg-enable-mathjax":false,"dg-enable-mermaid":false,"dg-enable-uml":false,"dg-note-icon":0,"dg-enable-dataview":false,"tags":["NLP"],"permalink":"/大语言模型学习/Common-Models常见模型/PLaM系列/PaLM/","dgShowBacklinks":true,"dgShowLocalGraph":true,"dgShowInlineTitle":true,"dgPassFrontmatter":true,"noteIcon":0,"created":"2025-04-24T12:41:12.000+08:00","updated":"2025-04-24T12:47:57.000+08:00"}
---



# PaLM: Pathways Language Model 解析与实现

## 分类
自然语言处理, 机器学习


## 标签
PaLM, Transformer, 自然语言处理, 机器学习, 模型训练


## 日期
2025年4月12日


## 内容概述
本文介绍了PaLM（Pathways Language Model）的结构、训练设置和优化策略。PaLM采用了标准的Transformer架构，并进行了多项改进以提升模型性能和训练稳定性。
![Pasted image 20250424124216.png](/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250424124216.png)![Pasted image 20250424124234.png](/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250424124234.png)


## 模型结构
PaLM使用标准的Transformer架构，采用了仅包含解码器的结构，并进行了以下改动：
- **SwiGLU激活函数**：替换了传统的FFN部分。
- **并行层设计**：改变了序列化表述，使用并行化结构以提升计算效率。
- **其他优化**：引入MQA、RoPE、共享输入输出embedding，并去掉了dense层和Layer Norm中的偏差项。

💡 **启发点**：使用SwiGLU激活函数和并行层设计显著提高了模型的训练效率和稳定性。


## 训练设置
- **权重初始化**：核心权重采用“fan-in variance scaling”初始化，而输入embedding则使用标准正态分布初始化。
- **优化器**：使用Adafactor优化器进行训练，相较于传统Adam优化器，其学习率根据参数矩阵的均方根进行缩放。
- **损失函数**：采用标准语言模型损失函数，并额外添加辅助损失以提高softmax标准化的稳定性。


## 操作步骤
1. ✅ 初始化权重时，核心权重使用“fan-in variance scaling”。
2. ⚠ 使用Adafactor优化器，注意学习率衰减策略。
3. ❗ 设置损失函数时，添加辅助损失来稳定softmax标准化。


## 常见错误
> 使用不当的权重初始化方法可能导致模型收敛缓慢或不稳定。确保在不同层中使用适合的初始化策略。


## 数据与公式

### 公式
- 权重初始化：
  $$
  W \sim N(0, \frac{1}{n_{in}})
  $$
- 输入embedding初始化：
  $$
  E \sim N(0, 1)
  $$


### 数据表格
| 参数 | 值 |
|------|----|
| 序列长度 | 2048 |
| 词表大小 | 256K |


## 行动清单
- [ ] 研究并实现SwiGLU激活函数的具体应用。
- [ ] 探讨并行层设计对模型效率的影响。
- [ ] 测试不同优化器对大规模模型训练的效果。

> 来源：本文内容基于PaLM: Scaling Language Modeling with Pathways论文分析与总结。
