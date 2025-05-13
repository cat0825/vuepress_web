---
dg-publish: true
dg-permalink: /大语言模型学习/RL强化学习基础/Actor-Critic算法
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
permalink: /大语言模型学习/RL强化学习基础/Actor-Critic算法/
dgShowBacklinks: true
dgShowLocalGraph: true
dgShowInlineTitle: true
dgPassFrontmatter: true
noteIcon: 0
created: 2025-04-12T23:30:33.000+08:00
updated: 2025-04-13T13:06:02.000+08:00
title: Actor-Critic算法
createTime: 2025/05/13 17:33:52
---



# Actor-Critic算法详解与应用

## 元数据
- 分类：机器学习算法
- 标签：Actor-Critic，策略梯度，强化学习
- 日期：2025年4月12日


## 核心观点总结
Actor-Critic算法结合了策略梯度和值函数方法，通过Actor与环境交互采样轨迹，Critic评判Actor的状态、动作的好坏，指导策略更新的步长和方向。此算法不仅能用Q值函数指导策略更新，还能使用其他形式如轨迹总回报、动作后的回报等。通过加入基线降低估计方差，提高算法效率。


## 重点内容

### 策略梯度与Q值函数
- 策略梯度公式为：
  $$
  \nabla_\theta J(\theta) = E_{\pi_\theta} [ Q_{\pi_\theta}(s, a) \nabla_\theta \log \pi_\theta(a|s) ]
  $$
- REINFORCE算法使用蒙特卡洛方法（MC）估计Q值。


### Actor-Critic算法简介
- Actor代表策略，Critic代表值函数。
- Critic评判Actor的动作好坏，指导策略更新。

```Python
class PolicyNet(torch.nn.Module): 
    def __init__(self, state_dim, hidden_dim, action_dim): 
        pass

class ActorCritic: 
    def __init__(self, state_dim, hidden_dim, action_dim, actor_lr, critic_lr, gamma, device): 
        # 策略网络 
        self.actor = PolicyNet(state_dim, hidden_dim, action_dim).to(device) 
        self.critic = ValueNet(state_dim, hidden_dim).to(device) # 价值网络 
        # 策略网络优化器 
        self.actor_optimizer = torch.optim.Adam(self.actor.parameters(), lr=actor_lr) 
        self.critic_optimizer = torch.optim.Adam(self.critic.parameters(), lr=critic_lr) # 价值网络优化器 
        self.gamma = gamma 
        self.device = device

    def take_action(self, state): 
        state = torch.tensor([state], dtype=torch.float).to(self.device) 
        probs = self.actor(state) 
        action_dist = torch.distributions.Categorical(probs) 
        action = action_dist.sample() 
        return action.item()

    def update(self, transition_dict): 
        states = torch.tensor(transition_dict['states'], dtype=torch.float).to(self.device) 
        actions = torch.tensor(transition_dict['actions']).view(-1, 1).to(self.device) 
        rewards = torch.tensor(transition_dict['rewards'], dtype=torch.float).view(-1, 1).to(self.device) 
        next_states = torch.tensor(transition_dict['next_states'], dtype=torch.float).to(self.device) 
        dones = torch.tensor(transition_dict['dones'], dtype=torch.float).view(-1, 1).to(self.device)

        # 时序差分目标 
        td_target = rewards + self.gamma * self.critic(next_states) * (1 - dones) 
        td_delta = td_target - self.critic(states) # 时序差分误差 
        log_probs = torch.log(self.actor(states).gather(1, actions)) 
        actor_loss = torch.mean(-log_probs * td_delta.detach()) 

        # 均方误差损失函数 
        critic_loss = torch.mean(F.mse_loss(self.critic(states), td_target.detach())) 

        self.actor_optimizer.zero_grad() 
        self.critic_optimizer.zero_grad() 

        actor_loss.backward() # 计算策略网络的梯度 
        critic_loss.backward() # 计算价值网络的梯度 

        self.actor_optimizer.step() # 更新策略网络的参数 
        self.critic_optimizer.step() # 更新价值网络的参数

```


### 其他指导策略更新的方法
- **轨迹的总回报**：使用整个轨迹的总回报来指导策略更新，缺点是不能进行时间维度的效用分配。
- **动作后的回报**：使用蒙特卡洛估计，方差较大。
- **加入基线的改进版本**：通过加入基线（如价值函数 $V(s_t)$）来降低方差。


## 常见错误
> ⚠️ 使用MC方法时，注意其方差较大，可能影响最终价值估计。


## 💡启发点
通过引入基线降低方差是一个关键创新，有助于提高算法稳定性和效率。


## 行动清单
- 研究如何选择合适的基线来降低方差。
- 探索结合其他值函数的可能性。


## 📈趋势预测
随着强化学习的发展，Actor-Critic算法将继续演化，可能会与深度学习技术更紧密结合，以提高处理复杂任务的能力。


## 后续追踪
- 探索其他形式的Critic指导策略更新。
- 研究Actor-Critic在不同应用场景下的性能表现。

> 来源：基于原始文本内容整理而成。
