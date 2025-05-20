<template><div><p>分类：机器学习，人工智能</p>
<p>标签：大模型训练，多任务学习，SFT策略</p>
<p>日期：2023年10月20日</p>
<h2 id="训练技巧" tabindex="-1"><a class="header-anchor" href="#训练技巧"><span>训练技巧</span></a></h2>
<p>在进行大模型训练时，不同的任务类型（task_type）需要使用不同的损失函数（channel_loss）进行观察。特殊标记（special_token）的损失一开始可能会较高，但下降速度也很快。对于创作类任务，其损失通常比其他任务更高，因为这些任务的答案较为固定，搜索结果越单一，损失越低。</p>
<h3 id="关键步骤" tabindex="-1"><a class="header-anchor" href="#关键步骤"><span>关键步骤</span></a></h3>
<ol>
<li><strong>观察损失函数变化</strong>：✅ 不同任务需要不同的损失函数。</li>
<li><strong>注意初始损失水平</strong>：⚠ 确保使用通用的数据进行采样，初始损失不会特别高。</li>
<li><strong>监控损失趋势</strong>：❗ 如果损失持续升高，检查训练代码而非数据难度。</li>
</ol>
<h3 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h3>
<blockquote>
<p>在训练过程中，如果发现损失持续升高，不要怀疑数据的难度，而是检查训练代码是否有问题。</p>
</blockquote>
<h2 id="sft阶段的packing策略" tabindex="-1"><a class="header-anchor" href="#sft阶段的packing策略"><span>SFT阶段的Packing策略</span></a></h2>
<p>在SFT（Supervised Fine-Tuning）阶段，不建议使用packing策略，因为这可能削弱模型对短查询和短答案的拟合能力。无packing情况下，短文本的梯度更集中，有助于提升模型拟合能力。然而，packing策略在大批量数据上对泛化效果无损。</p>
<h3 id="重点段落" tabindex="-1"><a class="header-anchor" href="#重点段落"><span>重点段落</span></a></h3>
<ul>
<li><strong>无packing时的梯度集中性</strong>：无packing情况下，batch的梯度全是短文本的梯度，这增强了模型对短查询的拟合能力。</li>
<li><strong>packing对泛化效果的影响</strong>：在小数据量或特定困难的数据上，packing可能损害泛化效果。</li>
</ul>
<h2 id="训练策略" tabindex="-1"><a class="header-anchor" href="#训练策略"><span>训练策略</span></a></h2>
<h3 id="多任务学习" tabindex="-1"><a class="header-anchor" href="#多任务学习"><span>多任务学习</span></a></h3>
<p>直接混合不同的SFT数据源并应用SFT，将每个数据源视为不同任务进行多任务学习。</p>
<h3 id="顺序训练" tabindex="-1"><a class="header-anchor" href="#顺序训练"><span>顺序训练</span></a></h3>
<p>依次在每个数据集上应用SFT，如编码、数学推理和综合能力数据集。</p>
<h3 id="混合序列训练" tabindex="-1"><a class="header-anchor" href="#混合序列训练"><span>混合序列训练</span></a></h3>
<p>在专业数据集（如代码、数学）上应用多任务学习，然后在通用能力数据集上应用SFT。
<img src="/img/user/附件/Pasted image 20250411111212.png" alt="Pasted image 20250411111212.png"></p>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考"><span>思考</span></a></h2>
<ul>
<li>在大规模数据集上，如何优化packing策略以提升泛化能力？</li>
<li>多任务学习是否适用于所有类型的数据集？</li>
<li>如何在训练过程中实时监控和调整损失函数？</li>
</ul>
<blockquote>
<p>来源：《Do We Really Need Packing in LLM SFT?》，《Enhancing Training Efficiency Using Packing with Flash Attention》</p>
</blockquote>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 评估当前模型的损失函数设置是否合理。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 实验不同的packing策略对小数据集的影响。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 探索多任务学习在不同数据集上的效果。</label></li>
</ul>
<h2 id="📈趋势预测" tabindex="-1"><a class="header-anchor" href="#📈趋势预测"><span>📈趋势预测</span></a></h2>
<p>随着大模型训练技术的发展，未来可能会出现更加智能的自动化调参工具，以优化训练效率和效果。</p>
<h2 id="后续追踪" tabindex="-1"><a class="header-anchor" href="#后续追踪"><span>后续追踪</span></a></h2>
<ul>
<li>进一步研究如何在不同的数据集上优化多任务学习策略。</li>
<li>探索更多关于SFT packing策略对模型性能影响的实验证据。</li>
</ul>
</div></template>


