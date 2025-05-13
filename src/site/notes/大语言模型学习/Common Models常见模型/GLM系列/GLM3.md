---
{"dg-publish":true,"dg-permalink":"/大语言模型学习/Common-Models常见模型/GLM系列/GLM3","dg-home":false,"dg-description":"在此输入笔记的描述","dg-hide":false,"dg-hide-title":false,"dg-show-backlinks":true,"dg-show-local-graph":true,"dg-show-inline-title":true,"dg-pinned":false,"dg-passphrase":"在此输入访问密码","dg-enable-mathjax":false,"dg-enable-mermaid":false,"dg-enable-uml":false,"dg-note-icon":0,"dg-enable-dataview":false,"tags":["NLP"],"permalink":"/大语言模型学习/Common-Models常见模型/GLM系列/GLM3/","dgShowBacklinks":true,"dgShowLocalGraph":true,"dgShowInlineTitle":true,"dgPassFrontmatter":true,"noteIcon":0,"created":"2025-04-25T10:50:12.000+08:00","updated":"2025-04-25T10:51:06.000+08:00"}
---



# ChatGLM3 模型优化与结构对比

## 元数据
- 分类：人工智能
- 标签：ChatGLM3, 模型优化, 人工智能, 机器学习
- 日期：2025年4月12日


## 内容概述
ChatGLM3 是 ChatGLM 系列的最新版本，其模型结构与 ChatGLM2 完全一致，但与初代 ChatGLM 有显著不同。本文将详细探讨 ChatGLM2 和 ChatGLM3 的优化和变化。


## 主要优化点

### 词表大小调整
相对于初代 ChatGLM，ChatGLM2 和 ChatGLM3 将词表大小从 150,528 缩小至 65,024。这一改变使得模型加载速度显著提升。


### 位置编码改进
位置编码从每个 GLMBlock 独立配置，改为在全局共享一份。这种改进提高了模型的效率和一致性。


### 前馈网络激活函数更改
- **ChatGLM** 使用 GeLU 激活函数。
- **ChatGLM2 和 ChatGLM3** 则采用 SwiGLU 激活函数，提供了更好的性能表现。


## 操作步骤
1. ✅ 确认词表大小调整至 65,024。
2. ⚠ 检查位置编码是否已全局共享。
3. ❗ 确认前馈网络激活函数已更改为 SwiGLU。


## 常见错误
> 在进行模型加载时，未能正确缩小词表大小可能导致加载速度减慢。


## 💡启发点
- 通过合理缩小词表大小和优化位置编码，模型性能可以显著提升。
- 激活函数的选择对模型性能有直接影响。


## 数据表格
| 模型版本 | 词表大小 | 激活函数 |
|----------|----------|----------|
| ChatGLM  | 150,528  | GeLU     |
| ChatGLM2 | 65,024   | SwiGLU   |
| ChatGLM3 | 65,024   | SwiGLU   |


## 行动清单
- 研究更多激活函数对模型性能的影响。
- 探索进一步优化位置编码的方法。
- 测试不同词表大小对加载速度的具体影响。

> 原始出处：[GitHub](https://github.com/THUDM/ChatGLM3)
