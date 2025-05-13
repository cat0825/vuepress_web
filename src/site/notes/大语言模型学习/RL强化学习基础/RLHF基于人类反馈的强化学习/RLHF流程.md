---
{"dg-publish":true,"dg-permalink":"/大语言模型学习/RL强化学习基础/RLHF基于人类反馈的强化学习/RLHF流程","dg-home":false,"dg-description":"在此输入笔记的描述","dg-hide":false,"dg-hide-title":false,"dg-show-backlinks":true,"dg-show-local-graph":true,"dg-show-inline-title":true,"dg-pinned":false,"dg-passphrase":"在此输入访问密码","dg-enable-mathjax":false,"dg-enable-mermaid":false,"dg-enable-uml":false,"dg-note-icon":0,"dg-enable-dataview":false,"tags":["NLP"],"permalink":"/大语言模型学习/RL强化学习基础/RLHF基于人类反馈的强化学习/RLHF流程/","dgShowBacklinks":true,"dgShowLocalGraph":true,"dgShowInlineTitle":true,"dgPassFrontmatter":true,"noteIcon":0,"created":"2025-04-16T10:25:36.000+08:00","updated":"2025-04-16T10:27:06.000+08:00"}
---



# 深度强化学习中的人类偏好学习（RLHF）

## 分类
自动推断


## 标签
- 深度学习
- 强化学习
- 人类反馈


## 日期
2025年4月12日

---


## 研究背景
深度学习中的人类偏好学习（RLHF）首次在2017年的论文《Deep Reinforcement Learning from Human Preferences》中被提出。最初的目的是解决复杂强化学习任务中环境奖励函数设计的问题。强化学习在许多任务中面临目标复杂、难以定义奖励函数的问题，导致难以将人类实际目标传达给智能体。不正确的、有偏的奖励函数会导致智能体过分利用奖励函数，产生reward hacking问题，即实际学到的行为与人类期望不符合，甚至有害。这种奖励函数的设计需要大量专业人士的精力，而现有方法如逆强化学习和模仿学习在处理复杂行为时存在局限性，直接使用人类反馈作为奖励函数成本过高。


## 研究目标
为了解决没有明确定义奖励函数的强化学习问题，需要满足以下几点：

1. ✅ 能够解决那些人类只能识别期望行为，但不一定能提供示范（demonstration）的任务。
2. ⚠ 允许非专家用户对智能体进行教导。
3. ❗ 能够扩展到大型问题。
4. 在用户反馈方面经济高效。


## 常见错误
> 在设计奖励函数时，容易产生偏见或错误，导致智能体行为偏离期望。


## 💡启发点
使用人类反馈作为奖励函数是一种创新，能够有效地传达人类的期望，即使在复杂任务中。


## 行动清单
- 调查现有RLHF技术的应用领域。
- 评估RLHF在不同任务中的效果。
- 研究如何降低人类反馈成本。


## 后续追踪
- 探索RLHF在其他领域的应用。
- 开发更高效的用户反馈机制。

> 引用: Deep Reinforcement Learning from Human Preferences, https://arxiv.org/pdf/1706.03741


## [思考]
1. 如何确保用户反馈的准确性和一致性？
2. RLHF能否应用于其他机器学习领域？
3. 在没有专家参与的情况下，如何保证智能体的训练质量？
