---
dg-publish: true
dg-permalink: /大语言模型学习/训练推理优化/训练框架/Accelerate
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
permalink: /大语言模型学习/训练推理优化/训练框架/Accelerate/
dgShowBacklinks: true
dgShowLocalGraph: true
dgShowInlineTitle: true
dgPassFrontmatter: true
noteIcon: 0
created: 2025-04-30T22:23:41.000+08:00
updated: 2025-05-06T10:29:38.000+08:00
title: Accelerate
createTime: 2025/05/13 17:33:53
---



# 加速你的 PyTorch 训练：深入了解Accelerate 库

## Accelerate
Accelerate 是一个为 PyTorch 用户设计的库，旨在帮助简化分布式训练和混合精度训练的过程。它提供了一种简单且灵活的方式来加速和扩展您的 PyTorch 训练脚本，而无需编写冗长的样板代码。使用户能够更轻松地利用大规模计算资源并加速模型训练过程。在无需大幅修改代码的情况下完成并行化，支持 DeepSpeed 的多种 ZeRO 策略。

代码效率高，支持无论是单机单卡还是多机多卡适配同一套代码。

允许在单个实例上训练更大的数据集：Accelerate 还可以使 DataLoaders 更高效。这是通过自定义采样器实现的，它可以在训练期间自动将部分批次发送到不同的设备，从而允许每个设备只需要储存数据的一部分，而不是一次将数据复制四份存入内存。

支持 DeepSpeed：无需更改代码，只用配置文件即可对 DeepSpeed 开箱即用。


## 分布式推理
当模型参数大到单张卡放不下时候（哪怕 batchsize 为 1 也会报显存不足的情况），这里就需要将大模型中的不同 layer 放到不同的 GPU 上，而每个 GPU 只负责其中一部分训练，当然数据在不同卡上流转的时候，都需要自动将数据放到对应的卡上。

```Python


from accelerate import dispatch_model
# device_map设置为自动的最方便了，不用自己设计把模型的layer分配到哪个GPU
model = dispatch_model(model, device_map="auto")
# 打印device_map
print(model.hf_device_map)
print(f'memory_allocated {torch.cuda.memory_allocated()}')


```


## 分布式训练
下面是官方的例子，只需要更新几行代码即可开启分布式训练之旅啦！

### 代码块
```python
import torch
import torch.nn.functional as F
from datasets import load_dataset
from accelerate import Accelerator

accelerator = Accelerator()
device = 'cpu'
device = accelerator.device

model = torch.nn.Transformer().to(device)
optimizer = torch.optim.Adam(model.parameters())
dataset = load_dataset('my_dataset')
data = torch.utils.data.DataLoader(dataset, shuffle=True)

model, optimizer, data = accelerator.prepare(model, optimizer, data)
model.train()

for epoch in range(10):
    for source, targets in data:
        source = source.to(device)
        targets = targets.to(device)

        optimizer.zero_grad()
        output = model(source)
        loss = F.cross_entropy(output, targets)

        loss.backward()
        accelerator.backward(loss)
        optimizer.step()

        # 等待所有进程达到一定程度后再执行指令
        accelerator.wait_for_everyone()

        # 只在主进程中保存模型
        if self._accelerator.is_main_process:
            unwrapped_model = accelerator.unwrap_model(model)
            accelerator.save(unwrapped_model, model_path)
            torch.save(unwrapped_model.state_dict(), "./model/accelerate.pt")
```
