---
{"dg-publish":true,"dg-permalink":"/大语言模型学习/Common-Models常见模型/GLM系列/GLM2","dg-home":false,"dg-description":"在此输入笔记的描述","dg-hide":false,"dg-hide-title":false,"dg-show-backlinks":true,"dg-show-local-graph":true,"dg-show-inline-title":true,"dg-pinned":false,"dg-passphrase":"在此输入访问密码","dg-enable-mathjax":false,"dg-enable-mermaid":false,"dg-enable-uml":false,"dg-note-icon":0,"dg-enable-dataview":false,"tags":["NLP"],"permalink":"/大语言模型学习/Common-Models常见模型/GLM系列/GLM2/","dgShowBacklinks":true,"dgShowLocalGraph":true,"dgShowInlineTitle":true,"dgPassFrontmatter":true,"noteIcon":0,"created":"2025-04-25T10:48:16.000+08:00","updated":"2025-04-25T10:50:09.000+08:00"}
---



# ChatGLM2-6B 模型解析：解码器架构与训练目标
元数据：

- 分类：人工智能
- 标签：ChatGLM2, 解码器, 人工智能, 模型训练, 自回归
- 日期：2025年4月12日

## 模型结构概述
ChatGLM2-6B 采用了完全的 Decoder-only 架构，结合了以下技术特性：
- **RoPE**（旋转位置编码）用于增强位置编码能力。
- 激活函数从 **Gelu** 转换为 **SwiGLU**。
- 使用 **Pre-RMSnorm** 规范化技术。
- 多头注意力机制（MHA）优化为多查询注意力（MQA），提高推理效率。
- 基于 **FalshAttention** 的上下文长度从 2K 增加到 32K，并在对话阶段采用 8K 上下文进行训练。


## 训练目标
ChatGLM2-6B 使用了 GLM 的混合目标函数，经过了 1.5 万亿中英标识符的预训练，并进行了人类偏好对齐训练。


## 解码器架构的选择

### 为什么选择 Decoder-only 架构？
多轮对话中，使用 prefix-decoder 需要构造多个数据来训练，而 decoder-only 架构通过使用 casual mask 可以直接处理整个多轮对话数据。此改动还消除了二维编码的需要。

💡 **启发点**：Decoder-only 架构展现了强大的自回归生成能力。


### 样本构建与损失计算
在处理多轮对话时，例如三轮对话 Q1A1，Q2A2，Q3A3：

- **PrefixLM 需要构建的样本**：
  - Q1 -> A1
  - Q1A1Q2 -> A2
  - Q1A1Q2A2Q3 -> A3

- **Decoder-only 样本构建与损失计算**：
  - 样本构建：Q1 A1 Q2 A2 Q3 A3
  - 损失计算：只需计算 A1、A2 和 A3 部分


## 常见错误
> ⚠ 在使用 prefix-decoder 架构时，容易造成数据冗余和训练复杂度增加。


## 行动清单
- [ ] 深入研究 SwiGLU 激活函数的优势。
- [ ] 探讨 RoPE 在其他模型中的应用。
- [ ] 分析多查询注意力（MQA）的具体实现细节。

> 原始出处：[GitHub](https://github.com/THUDM/ChatGLM2-6B)
