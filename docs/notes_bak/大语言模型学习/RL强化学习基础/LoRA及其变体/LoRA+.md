---
dg-publish: true
dg-permalink: /大语言模型学习/RL强化学习基础/LoRA及其变体/LoRA+
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
permalink: /大语言模型学习/RL强化学习基础/LoRA及其变体/LoRA+/
dgShowBacklinks: true
dgShowLocalGraph: true
dgShowInlineTitle: true
dgPassFrontmatter: true
noteIcon: 0
created: 2025-04-24T11:15:41.000+08:00
updated: 2025-04-24T11:17:34.000+08:00
title: LoRA+
createTime: 2025/05/13 17:33:52
---



# LoRA+优化器：高效训练与学习率调整

## 元数据
- 分类：机器学习优化
- 标签：LoRA, 适配器, 学习率, 优化器, 训练
- 日期：2025年4月12日


## 内容摘要
LoRA+是一种针对LoRA适配器的优化方法，通过为矩阵A和B设置不同的学习率来提高训练效率。核心观点是使用不同的学习率策略，其中B的学习率是A的6倍。这种方法不仅提升了模型的适应性，还简化了优化过程。


## 核心内容
![Pasted-image-20250424111627.png](/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250424111627.png)

### LoRA+优化器创建
LoRA+优化器通过设置不同的学习率来实现更高效的训练。具体步骤如下：

✅ **参数分组**：
- 将模型参数分为不同组，分别设置学习率和权重衰减。
- 矩阵A的学习率为`lr`，矩阵B的学习率为`lr * lora_lr_ratio`。

⚠️ **注意事项**：
- 确保权重衰减设置正确，避免训练过程中出现过拟合。

```python
optimizer_grouped_parameters = [
    {
        "params": list(parameters["A"].values()),
        "weight_decay": weight_decay,
        "lr": lr,
    },
    {
        "params": list(parameters["embedding"].values()),
        "weight_decay": weight_decay,
        "lr": lora_lr_embedding,
    },
    {
        "params": list(parameters["B"].values()),
        "weight_decay": weight_decay,
        "lr": lr * lora_lr_ratio,
    },
    {
        "params": list(parameters["B_no_decay"].values()),
        "weight_decay": 0.0,
        "lr": lr * lora_lr_ratio,
    },
]
optimizer = optimizer_cls(optimizer_grouped_parameters, **optimizer_kwargs)
```


### 调整Trainer类方法
重写Trainer类的`create_optimizer`方法以支持LoRA+优化器：

❗ **实现步骤**：
1. 检查是否启用了Sagemaker多处理。
2. 使用`create_lorap_optimizer`方法创建优化器。

💡 **启发点**：
这种方法通过调整学习率提高了训练效率，值得在其他适配器中尝试。

```python
class LoraPlusTrainer(Trainer):
    def create_optimizer(self):
        opt_model = self.model_wrapped if is_sagemaker_mp_enabled() else self.model

        if self.optimizer is None:
            optimizer_cls, optimizer_kwargs = Trainer.get_optimizer_cls_and_kwargs(self.args)

            lora_lr_ratio = LORA_LR_RATIO
            lora_lr_embedding = LORA_LR_EMBEDDING

            self.optimizer = create_lorap_optimizer(opt_model, lora_lr_ratio, optimizer_cls, optimizer_kwargs, lora_lr_embedding)
            if is_sagemaker_mp_enabled():
                self.optimizer = smp.DistributedOptimizer(self.optimizer)

        return self.optimizer
```


### 公式调整
公式更新过程如下：
$$
A \leftarrow A - \eta \times G_A
$$
$$
B \leftarrow B - \lambda \eta \times G_B, \quad \lambda \gg 1
$$


## 常见错误
> 在调整学习率时，确保比例关系正确，避免因设置错误导致模型不收敛。


## 行动清单
- [ ] 实现并测试LoRA+优化器在不同模型中的效果。
- [ ] 记录训练过程中的参数变化以验证优化效果。
- [ ] 探索其他适配器中应用类似策略的可行性。

> 原始出处：simple-lora-plus/tricks/lora_plus.py
