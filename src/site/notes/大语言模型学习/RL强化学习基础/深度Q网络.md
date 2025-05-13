---
{"dg-publish":true,"dg-permalink":"/大语言模型学习/RL强化学习基础/深度Q网络","dg-home":false,"dg-description":"在此输入笔记的描述","dg-hide":false,"dg-hide-title":false,"dg-show-backlinks":true,"dg-show-local-graph":true,"dg-show-inline-title":true,"dg-pinned":false,"dg-passphrase":"在此输入访问密码","dg-enable-mathjax":false,"dg-enable-mermaid":false,"dg-enable-uml":false,"dg-note-icon":0,"dg-enable-dataview":false,"tags":["NLP"],"permalink":"/大语言模型学习/RL强化学习基础/深度Q网络/","dgShowBacklinks":true,"dgShowLocalGraph":true,"dgShowInlineTitle":true,"dgPassFrontmatter":true,"noteIcon":0,"created":"2025-04-11T13:41:20.000+08:00","updated":"2025-04-13T13:06:02.000+08:00"}
---



# 深度Q网络（DQN）在强化学习中的应用
元数据：
- 分类：强化学习
- 标签：深度学习，DQN，强化学习，Q-learning
- 日期：2025年4月11日

## DQN简介
深度Q网络（DQN）是对传统Q-learning算法的扩展，专为处理状态和动作空间非常大的情况而设计，如图像或连续变量。传统的表格法在这种情况下无法有效记录状态动作对的Q值，因此DQN采用神经网络来拟合Q值函数。


## Q-learning的更新方式
更新公式如下：
$$
Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha [r_t + \gamma \max_a Q(s_{t+1}, a) - Q(s_t, a_t)]
$$

DQN通过使Q值网络的输出与时序差分目标（TD target）接近来构造均方误差损失函数形式：
$$
L_{DQN} = \frac{1}{2N} \sum_{i=1}^{N} [Q_w(s_i, a_i) - (r_i + \gamma \max_{a'} Q_w(s'_i, a'))]^2
$$

```Python
class ReplayBuffer: 
    ''' 经验回放池 ''' 
    self.target_update = target_update # 目标网络更新频率 
    self.count = 0 # 计数器,记录更新次数 
    self.device = device 

    def take_action(self, state): # epsilon-贪婪策略采取动作 
        if np.random.random() < self.epsilon: 
            action = np.random.randint(self.action_dim) 
        else: 
            state = torch.tensor([state], dtype=torch.float).to(self.device) 
            action = self.q_net(state).argmax().item() 
        return action 

    def update(self, transition_dict): 
        states = torch.tensor(transition_dict['states'], dtype=torch.float).to(self.device) 
        actions = torch.tensor(transition_dict['actions']).view(-1, 1).to(self.device) 
        rewards = torch.tensor(transition_dict['rewards'], dtype=torch.float).view(-1, 1).to(self.device) 
        next_states = torch.tensor(transition_dict['next_states'], dtype=torch.float).to(self.device) 
        dones = torch.tensor(transition_dict['dones'], dtype=torch.float).view(-1, 1).to(self.device) 

        q_values = self.q_net(states).gather(1, actions) # Q值 
        # 下个状态的最大Q值 
        max_next_q_values = self.target_q_net(next_states).max(1)[0].view(-1, 1) 
        q_targets = rewards + self.gamma * max_next_q_values * (1 - dones) # TD误差目标 
        dqn_loss = torch.mean(F.mse_loss(q_values, q_targets)) # 均方误差损失函数 

        self.optimizer.zero_grad() # PyTorch中默认梯度会累积,这里需要显式将梯度置为0 
        dqn_loss.backward() # 反向传播更新参数 
        self.optimizer.step() 

        if self.count % self.target_update == 0: 
            self.target_q_net.load_state_dict(self.q_net.state_dict()) # 更新目标网络 

        self.count += 1

```


## DQN的重要改进

### Repaly Buffer（经验回放）
- ✅ **使样本满足独立假设**：通过维护一个Replay Buffer，打破样本之间的相关性。
- ❗ **提高样本效率**：每个样本可以被使用多次，适合深度神经网络的梯度学习。


### Target Network（目标网络）
- ⚠ **目标稳定性**：引入目标网络来计算TD目标，避免目标不断变化导致训练不稳定。


## 常见错误
> 在更新网络参数时，如果不使用目标网络，容易出现目标漂移现象，导致训练不稳定。


## 💡启发点
- 使用Replay Buffer和Target Network是提高DQN训练稳定性的重要策略。


## 行动清单
1. 探索如何优化Replay Buffer的采样策略。
2. 研究Target Network更新频率对训练效果的影响。
3. 实验不同网络架构对DQN性能的影响。


## 📈趋势预测
随着计算能力的提升，DQN将在更复杂的环境中得到广泛应用，可能会结合更多先进技术如分布式训练和自适应采样策略。


## 后续追踪
- 研究如何将DQN应用于实时决策系统。
- 探讨DQN在多智能体环境中的表现。

> 原始出处：[深度强化学习相关文档]

[思考]
1. 如何进一步优化DQN以适应更复杂的状态空间？
2. 在多智能体环境中，DQN是否需要进行特别调整？
3. DQN与其他强化学习算法相比有哪些优势和劣势？
