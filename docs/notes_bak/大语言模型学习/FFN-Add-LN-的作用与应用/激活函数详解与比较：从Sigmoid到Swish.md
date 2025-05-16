---
dg-publish: true
dg-permalink: /大语言模型学习/FFN、Add-&-LN-的作用与应用/激活函数详解与比较：从Sigmoid到Swish
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
permalink: /大语言模型学习/FFN、Add-&-LN-的作用与应用/激活函数详解与比较：从Sigmoid到Swish/
dgShowBacklinks: true
dgShowLocalGraph: true
dgShowInlineTitle: true
dgPassFrontmatter: true
noteIcon: 0
created: 2025-04-07T11:27:07.000+08:00
updated: 2025-04-13T13:06:02.000+08:00
title: 激活函数详解与比较：从Sigmoid到Swish
createTime: 2025/05/13 17:33:52
---



## 元数据
- **分类**：深度学习基础
- **标签**：激活函数、梯度消失、ReLU、Swish
- **日期**：2025年3月2日

---



## 内容摘要
在深度学习中，激活函数是神经网络的核心组件之一，它决定了神经元的输出以及模型的学习能力。本文对常见的激活函数进行了总结，包括它们的优缺点、公式以及适用场景。

---



## 常见激活函数解析
以下是完善后的公式格式，确保在Obsidian中正常显示：

---

### Sigmoid
- **公式**：  
  $$
  f(x) = \frac{1}{1 + e^{-x}}
  $$
- **优点**：
  - 能够将输入值映射到 $(0,1)$ 之间，适合二分类问题。
- **缺点**：
  - 梯度消失问题：当输入值较大或较小时，梯度接近于 $0$，导致训练效率低下。
  - 输出非零中心：权重更新可能偏向特定方向。
  - 指数运算耗费计算资源。
![Pasted-image-20250407113132.png](../../.vuepress/public/img/user/%E9%99%84%E4%BB%B6/Pasted-image-20250407113132.png)
---


### Tanh
- **公式**：  
  $$
  f(x) = \frac{e^{x} - e^{-x}}{e^{x} + e^{-x}}
  $$
- **优点**：
  - 输出值在 $(-1,1)$ 之间，零为中心，权重更新更稳定。
- **缺点**：
  - 梯度饱和问题仍然存在。
  - 同样需要指数运算，计算资源消耗较大。
![Pasted-image-20250407113141.png](../../.vuepress/public/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250407113141.png)
---


### ReLU
- **公式**：  
  $$
  f(x) = \max(0, x)
  $$
- **优点**：
  - 解决了梯度消失问题，输入为正时不会饱和。
  - 计算简单，不需要指数运算。
- **缺点**：
  - Dead ReLU 问题：当输入为负时，梯度为 $0$，导致神经元"死亡"，无法更新参数。
![Pasted-image-20250407113149.png](../../.vuepress/public/img/user/%E9%99%84%E4%BB%B6/Pasted-image-20250407113149.png)
---


### Leaky ReLU
- **公式**：  
  $$
  f(x) = \max(\alpha x, x) \quad (\alpha\ \text{通常设为}\ 0.01)
  $$
- **优点**：
  - 改进了 ReLU 的 Dead ReLU 问题，使负输入也能产生非零梯度。
- **缺点**：
  - 参数 $\alpha$ 需要人工设置。
  - 在复杂分类任务中表现可能不够优秀。
![Pasted-image-20250407113156.png](../../.vuepress/public/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250407113156.png)
---


### ELU
- **公式**：  
  $$
  f(x) = 
  \begin{cases} 
  \alpha(e^x - 1), & x \leq 0 \\ 
  x, & x > 0 
  \end{cases}
  $$
- **优点**：
  - 输出均值接近零，加快学习速度。
  - 对较小输入饱和至负值，有助于减少前向传播的变异。
- **缺点**：
  - 指数运算导致计算效率较低。
![Pasted-image-20250407113203.png](../../.vuepress/public/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250407113203.png)
---


### Swish
- **公式**：  
  $$
  f(x) = x \cdot \sigma(x) \quad \text{其中}\ \sigma(x)\ \text{为 Sigmoid 函数}
  $$
- **优点**：
  - 无界性防止训练过程中梯度过早饱和。
  - 有界性增强正则化能力，减少过拟合。
  - 在复杂任务中表现更优。
- **缺点**：
  - 相较 ReLU，计算复杂度稍高。



![Pasted-image-20250407113210.png](../../.vuepress/public/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250407113210.png)

---
![Pasted-image-20250407113425.png](../../.vuepress/public/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250407113425.png)



## 激活函数优缺点对比表
| 激活函数       | 优点                      | 缺点                  |
| ---------- | ----------------------- | ------------------- |
| Sigmoid    | 简单易用，适合二分类问题            | 梯度消失，输出非零中心，计算资源消耗大 |
| Tanh       | 零为中心，权重更新更稳定            | 梯度饱和问题，指数运算耗费资源     |
| ReLU       | 快速收敛，解决梯度消失问题           | Dead ReLU问题，输出非零中心  |
| Leaky ReLU | 改善Dead ReLU问题，负输入有梯度    | α需人工设置，复杂分类效果一般     |
| ELU        | 输出均值接近零，加快学习速度          | 指数运算效率低             |
| Swish      | 强正则化能力，无界性防止梯度饱和，适合复杂任务 | 相较ReLU计算复杂度稍高       |

---



## 常见错误与警示区块
⚠️ **常见错误：**
1. 忽略激活函数选择对模型性能的影响。
2. 在数据量较小时使用耗资源的激活函数（如ELU）。
3. 未处理Dead ReLU问题导致部分神经元无效。

---



## 行动清单
✅ 确认任务类型（分类/回归）选择合适激活函数。  
✅ 在调试过程中观察梯度变化是否出现梯度消失或爆炸。  
✅ 尝试不同激活函数组合以优化模型性能。  

---



## 思考与启发
💡 激活函数的选择不仅影响模型性能，还直接影响训练效率。以下是一些值得思考的问题：
1. 是否可以设计一个自适应激活函数，根据输入动态调整参数？
2. Swish是否能完全取代ReLU成为新的默认选择？
3. 如何结合激活函数与优化算法进一步提升模型收敛速度？

---

> 来源：深度学习相关文档与技术资料整理
