---
{"dg-publish":true,"dg-permalink":"/大语言模型学习/RL强化学习基础/DPO直接偏好优化/DPO公式推导","dg-home":false,"dg-description":"在此输入笔记的描述","dg-hide":false,"dg-hide-title":false,"dg-show-backlinks":true,"dg-show-local-graph":true,"dg-show-inline-title":true,"dg-pinned":false,"dg-passphrase":"在此输入访问密码","dg-enable-mathjax":false,"dg-enable-mermaid":false,"dg-enable-uml":false,"dg-note-icon":0,"dg-enable-dataview":false,"tags":["NLP"],"permalink":"/大语言模型学习/RL强化学习基础/DPO直接偏好优化/DPO公式推导/","dgShowBacklinks":true,"dgShowLocalGraph":true,"dgShowInlineTitle":true,"dgPassFrontmatter":true,"noteIcon":0,"created":"2025-04-22T22:33:02.000+08:00","updated":"2025-04-22T22:46:13.000+08:00"}
---



# DPO公式推导全解析

## 元数据
- **分类**：强化学习理论推导  
- **标签**：DPO, 公式推导, Bradley-Terry模型, KL散度, 策略优化  
- **日期**：2025年4月22日  

---


## 核心目标函数推导

### 1. 原始约束目标
从**行为约束的强化学习目标**出发：
$$
\max_{\pi} \mathbb{E}_{x \sim D, y \sim \pi} \left[ r(x,y) \right] - \beta D_{\text{KL}} \left[ \pi(y|x) \parallel \pi_{\text{ref}}(y|x) \right]
$$
其中：
- $r(x,y)$：奖励函数  
- $\beta$：约束强度系数  
- $D_{\text{KL}}$：KL散度（衡量策略$\pi$与参考策略$\pi_{\text{ref}}$的偏离程度）

---


### 2. 目标函数变形

#### 步骤1：展开KL散度
$$
D_{\text{KL}} = \mathbb{E}_{y \sim \pi(y|x)} \left[ \log \frac{\pi(y|x)}{\pi_{\text{ref}}(y|x)} \right]
$$
**变形后目标**：
$$
\max_{\pi} \mathbb{E}_{x \sim D} \left[ \mathbb{E}_{y \sim \pi(y|x)} \left[ r(x,y) - \beta \log \frac{\pi(y|x)}{\pi_{\text{ref}}(y|x)} \right] \right]
$$


#### 步骤2：转换为最小化问题
将最大化问题转换为最小化（乘 $-1$）：
$$
\min_{\pi} \mathbb{E}_{x \sim D} \left[ \mathbb{E}_{y \sim \pi(y|x)} \left[ \log \frac{\pi(y|x)}{\pi_{\text{ref}}(y|x)} - \frac{1}{\beta} r(x,y) \right] \right]
$$

---


### 3. 引入配分函数 $Z(x)$

#### 关键操作：构造指数形式
将目标表达式重写为：
$$
\min_{\pi} \mathbb{E}_{x \sim D} \left[ \mathbb{E}_{y \sim \pi(y|x)} \left[ \log \frac{\pi(y|x)}{\frac{1}{Z(x)} \pi_{\text{ref}}(y|x) \exp\left( \frac{1}{\beta} r(x,y) \right)} - \log Z(x) \right] \right]
$$
其中：
$$
Z(x) = \sum_{y} \pi_{\text{ref}}(y|x) \exp\left( \frac{1}{\beta} r(x,y) \right)
$$

---


### 4. 定义最优策略 $\pi^*$
令：
$$
\pi^*(y|x) = \frac{1}{Z(x)} \pi_{\text{ref}}(y|x) \exp\left( \frac{1}{\beta} r(x,y) \right)
$$
**合法性验证**：
$$
\sum_{y} \pi^*(y|x) = \frac{1}{Z(x)} \sum_{y} \pi_{\text{ref}}(y|x) \exp\left( \frac{1}{\beta} r(x,y) \right) = 1
$$

---


### 5. KL散度最小化
目标函数简化为：
$$
\min_{\pi} \mathbb{E}_{x \sim D} \left[ D_{\text{KL}} \left( \pi(y|x) \parallel \pi^*(y|x) \right) - \log Z(x) \right]
$$
**最优解**直接为：
$$
\pi(y|x) = \pi^*(y|x)
$$

---


### 6. 奖励函数反推
从$\pi^*$表达式解出$r(x,y)$：
$$
r^*(x,y) = \beta \log \frac{\pi^*(y|x)}{\pi_{\text{ref}}(y|x)} + \beta \log Z(x)
$$

---


### 7. 偏好概率模型
代入**Bradley-Terry模型**：
$$
p_\beta^*(y_1 \succ y_2 | x) = \frac{\exp\left( \beta \log \frac{\pi_{\text{ref}}(y_1|x)}{\pi^*(y_1|x)} + \beta \log Z(x) \right)}{\exp(\cdot) + \exp(\cdot)}
$$
**简化后**（利用$Z(x)$抵消）：
$$
p_\beta^* = \sigma\left( \beta \log \frac{\pi_{\text{ref}}(y_1|x)}{\pi^*(y_1|x)} - \beta \log \frac{\pi_{\text{ref}}(y_2|x)}{\pi^*(y_2|x)} \right)
$$

---


## ⚠ 常见错误警示
1. **配分函数计算遗漏**  
   → 必须对所有可能的$y$求和，否则会导致概率分布不合法。

2. **$\beta$系数误用**  
   → 在指数项和KL散度项中需严格区分$\beta$的位置。

---


## 💡 创新点解析
- **模型简化**：通过消去$Z(x)$，将依赖奖励函数的问题转化为直接优化策略比对问题。
- **端到端训练**：仅需偏好数据即可训练，无需单独建模奖励函数（Reward Model）和评价函数（Critic）。

---

> 原始推导参考：用户提供的技术文档（DPO推导章节）
