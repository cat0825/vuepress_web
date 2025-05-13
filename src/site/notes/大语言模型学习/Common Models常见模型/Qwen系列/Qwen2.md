---
{"dg-publish":true,"dg-permalink":"/大语言模型学习/Common-Models常见模型/Qwen系列/Qwen2","dg-home":false,"dg-description":"在此输入笔记的描述","dg-hide":false,"dg-hide-title":false,"dg-show-backlinks":true,"dg-show-local-graph":true,"dg-show-inline-title":true,"dg-pinned":false,"dg-passphrase":"在此输入访问密码","dg-enable-mathjax":false,"dg-enable-mermaid":false,"dg-enable-uml":false,"dg-note-icon":0,"dg-enable-dataview":false,"tags":["NLP"],"permalink":"/大语言模型学习/Common-Models常见模型/Qwen系列/Qwen2/","dgShowBacklinks":true,"dgShowLocalGraph":true,"dgShowInlineTitle":true,"dgPassFrontmatter":true,"noteIcon":0,"created":"2025-04-25T11:16:19.000+08:00","updated":"2025-04-25T11:16:36.000+08:00"}
---



# QWEN2技术报告解析与优化策略
**分类**：人工智能

**标签**：QWEN2、模型优化、预训练、数据合成

**日期**：2025年4月12日

## 模型结构与创新
QWEN2模型在其架构上进行了多项优化，与之前的Qwen版本相比，显著提升了性能。主要的创新包括：

- **GQA与YaRN+双块注意力（Dual Chunk Attention, DCA）**：这些技术用于提高模型对长文本的处理能力。
- **位置编码优化**：在1.5章节中详细描述了YARN技术的应用。
- **词表与编码器**：采用BBPE编码器，词表大小为151643，以提高语言理解能力。


## 模型训练与数据处理
QWEN2的训练过程涉及多个关键步骤，以确保模型的高效性和准确性：

### 预训练阶段
1. **质量提升**：通过改进过滤算法，使用Qwen模型过滤低质量数据。
2. **数据扩展**：收集了更大容量的高质量代码、数学和多语言数据，支持约30种语言。
3. **分布改进**：在小规模模型上实验以优化数据混合。


### 后训练数据合成
1. **拒绝采样**：用于数学任务，以提高解决方案质量。
2. **执行反馈**：在编码任务中，通过编译和执行生成的解决方案来评估其有效性。
3. **数据再利用**：使用高质量公共领域文学作品开发指令。


## 训练过程的阶段划分
QWEN2的训练过程分为两个阶段：

- **离线训练阶段**：使用预先收集的偏好数据集进行DPO训练。
- **在线训练阶段**：利用即时反馈的奖励模型不断改进性能。


## 常见错误警告
> ⚠️ 在执行数据合成时，确保准确判断偏好数据与非偏好数据，以免影响模型表现。


## 行动清单
- 继续优化数据过滤算法，以进一步提高预训练数据质量。
- 扩展多语言支持，增加更多语言的数据集。
- 在小规模实验中测试新的数据混合策略。


## 💡 启发点
QWEN2通过多种技术手段提升模型对长文本和多语言的处理能力，特别是在数据合成和执行反馈方面的创新，为未来的模型训练提供了新的思路。

> 原始出处：[QWEN2 TECHNICAL REPORT]
