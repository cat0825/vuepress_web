---
dg-publish: true
dg-permalink: /大语言模型学习/RL强化学习基础/PPO算法
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
permalink: /大语言模型学习/RL强化学习基础/PPO算法/
dgShowBacklinks: true
dgShowLocalGraph: true
dgShowInlineTitle: true
dgPassFrontmatter: true
noteIcon: 0
created: 2025-04-12T23:35:22.000+08:00
updated: 2025-04-13T13:06:02.000+08:00
title: PPO算法
createTime: 2025/05/13 17:33:52
---



# PPO算法详解与应用 | 强化学习策略优化

## 元数据
- 分类：强化学习
- 标签：PPO算法, 策略优化, 强化学习
- 日期：2023年11月2日


## 核心观点
Proximal Policy Optimization (PPO) 是一种用于强化学习的策略优化算法，通过限制策略更新的变化幅度，提升了算法的稳定性和效率。PPO主要有两个版本：PPO-penalty和PPO-clip，其中PPO-clip因其简化的优化目标而广泛应用。它通过引入重要性采样和策略截断，解决了样本利用效率低的问题。


## 重点段落

### PPO算法的基本原理
PPO基于TRPO的优化目标进行了简化，直接对策略更新进行clip操作，限制更新幅度在一个安全范围内。其优化目标如下：
$$
\max_{\theta} \mathbb{E}_{s \sim \nu_{\beta}, a \sim \pi_{\theta_k}( \cdot | s )} \left[ \min \left( \frac{\pi_{\theta_k}(a|s)}{\pi_{\theta}(a|s)} A^{\pi_{\theta_k}}(s, a), \text{clip} \left( \frac{\pi_{\theta_k}(a|s)}{\pi_{\theta}(a|s)}, 1 - \epsilon, 1 + \epsilon \right) A^{\pi_{\theta_k}}(s, a) \right) \right]
$$
其中，$\pi_{\theta}$为Actor的策略，$A^{\pi_{\theta_k}}$为Critic提供的优势函数估计。


### 重要性采样技术
PPO利用重要性采样提高样本利用效率。假设有一个提议分布$q(x)$，可以将关于目标分布$p(x)$的期望重写为：
$$
\mathbb{E}_{p}[h(x)] = \int h(x) \frac{p(x)}{q(x)} q(x) dx
$$
这样可以利用之前迭代的策略产生的数据。


### 策略截断与稳定性
PPO通过clip操作进行策略截断，避免策略更新偏离上一个迭代回合的策略。相比TRPO复杂的KL散度估计，PPO采用固定截断，更为简便。


## 操作步骤
1. ✅ **策略初始化**：设定初始策略参数$\theta$。
2. ⚠ **采样数据**：从当前策略中采样动作和状态。
3. ❗ **计算优势**：利用Critic计算优势函数$A^{\pi_{\theta_k}}(s, a)$。
4. ✅ **更新策略**：根据PPO-clip优化目标更新策略参数。


## 常见错误
> **警告**：在使用PPO时，需注意clip范围的设置不宜过大，否则会导致策略更新过于激进。


## 💡启发点
- PPO通过引入clip操作简化了复杂的数学推导，提高了算法的实用性。
- 重要性采样的应用显著提升了样本利用效率。

```Python
class PolicyNet(torch.nn.Module): 
    def __init__(self, state_dim, hidden_dim, action_dim): 
        super(PolicyNet, self).__init__() 
        self.fc1 = torch.nn.Linear(state_dim, hidden_dim) 
        self.fc2 = torch.nn.Linear(hidden_dim, action_dim) 

    def forward(self, x): 
        x = F.relu(self.fc1(x)) 
        return F.softmax(self.fc2(x), dim=1) 

class ValueNet(torch.nn.Module): 
    def __init__(self, state_dim, hidden_dim): 
        super(ValueNet, self).__init__() 
        self.fc1 = torch.nn.Linear(state_dim, hidden_dim) 
        self.fc2 = torch.nn.Linear(hidden_dim, 1) 

    def forward(self, x): 
        x = F.relu(self.fc1(x)) 
        return self.fc2(x) 

class PPO: 
    ''' PPO算法,采用截断方式 ''' 
    def __init__(self, state_dim, hidden_dim, action_dim, actor_lr, critic_lr, 
                 lmbda, epochs, eps, gamma, device): 
        self.actor = PolicyNet(state_dim, hidden_dim, action_dim).to(device) 
        self.critic = ValueNet(state_dim, hidden_dim).to(device) 
        self.actor_optimizer = torch.optim.Adam(self.actor.parameters(), 
                                                lr=actor_lr) 
        self.critic_optimizer = torch.optim.Adam(self.critic.parameters(), 
                                                 lr=critic_lr) 
        self.gamma = gamma 
        self.lmbda = lmbda 
        self.epochs = epochs # 一条序列的数据用来训练轮数 
        self.eps = eps # PPO中截断范围的参数 
        self.device = device 

    def take_action(self, state): 
        state = torch.tensor([state], dtype=torch.float).to(self.device) 
        probs = self.actor(state) 
        action_dist = torch.distributions.Categorical(probs) 
        action = action_dist.sample() 
        return action.item() 

    def update(self, transition_dict): 
        states = torch.tensor(transition_dict['states'], 
                              dtype=torch.float).to(self.device) 
        actions = torch.tensor(transition_dict['actions']).view(-1, 1).to( 
            self.device) 
        rewards = torch.tensor(transition_dict['rewards'], 
                               dtype=torch.float).view(-1, 1).to(self.device) 
        next_states = torch.tensor(transition_dict['next_states'], 
                                   dtype=torch.float).to(self.device) 
        dones = torch.tensor(transition_dict['dones'], 
                             dtype=torch.float).view(-1, 1).to(self.device) 

        td_target = rewards + self.gamma * self.critic(next_states) * (1 - dones)
        
        self.actor_optimizer.step() 
        self.critic_optimizer.step()

```


## 行动清单
- 探索PPO在不同环境下的表现。
- 比较PPO与其他强化学习算法的优劣。
- 实现PPO算法并进行实验验证。


## 📈趋势预测
随着强化学习在各领域的应用扩展，PPO因其稳定性和高效性，将在更多复杂任务中得到应用。


## 后续追踪
- [ ] 研究PPO在多智能体系统中的应用。
- [ ] 探索结合深度学习技术对PPO进行改进。

> 原始出处：[PPO算法和代码](#)
