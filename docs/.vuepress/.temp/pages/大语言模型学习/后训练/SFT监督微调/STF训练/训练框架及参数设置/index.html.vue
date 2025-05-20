<template><div><p><strong>分类</strong>：机器学习</p>
<p><strong>标签</strong>：SFT训练，OpenRLHF，DeepSpeed</p>
<p><strong>日期</strong>：2023年10月27日</p>
<h2 id="综述" tabindex="-1"><a class="header-anchor" href="#综述"><span>综述</span></a></h2>
<p>在SFT（监督微调）训练过程中，通常我们不会对损失函数和训练策略进行大幅修改，而是通过调整一些关键参数来优化训练效果。这些参数包括 <code v-pre>checkpoint_path</code>、<code v-pre>model_path</code>、<code v-pre>data_path</code>、<code v-pre>dp</code>（数据并行）、<code v-pre>pp</code>（流水线并行）和 <code v-pre>lr</code>（学习率）。推荐使用OpenRLHF框架，基于Ray和DeepSpeed，简单易用。</p>
<h2 id="参数设置与注意事项" tabindex="-1"><a class="header-anchor" href="#参数设置与注意事项"><span>参数设置与注意事项</span></a></h2>
<ol>
<li>
<p><strong>epoch设置</strong>：</p>
<ul>
<li>通常设置为1个epoch。</li>
<li>如果数据量较小（如1万条以内），可以设为3个epoch以避免过拟合。</li>
</ul>
</li>
<li>
<p><strong>梯度累积与批量大小</strong>：</p>
<ul>
<li><code v-pre>gradient_accumulation_steps</code>：指在更新模型参数前，梯度会在多少个小批次上累积。</li>
<li>全局批量大小计算公式：<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mtext>global_batch_size</mtext><mo>=</mo><mtext>gradient_accumulation_steps</mtext><mo>×</mo><mtext>per_device_batch_size</mtext><mo>×</mo><mtext>num_devices</mtext></mrow><annotation encoding="application/x-tex">\text{global\_batch\_size} = \text{gradient\_accumulation\_steps} \times \text{per\_device\_batch\_size} \times \text{num\_devices}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0044em;vertical-align:-0.31em;"></span><span class="mord text"><span class="mord">global_batch_size</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0044em;vertical-align:-0.31em;"></span><span class="mord text"><span class="mord">gradient_accumulation_steps</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0044em;vertical-align:-0.31em;"></span><span class="mord text"><span class="mord">per_device_batch_size</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0044em;vertical-align:-0.31em;"></span><span class="mord text"><span class="mord">num_devices</span></span></span></span></span></span></p>
</li>
</ul>
</li>
<li>
<p><strong>学习率与调度器</strong>：</p>
<ul>
<li>SFT阶段的学习率一般是预训练阶段的10倍。</li>
<li>常用的学习率调度器类型有：<code v-pre>constant</code>、<code v-pre>linear</code>、<code v-pre>cosine</code>、<code v-pre>exponential</code>，其中 <code v-pre>cosine</code> 使用较多。</li>
</ul>
</li>
</ol>
<h2 id="技术细节" tabindex="-1"><a class="header-anchor" href="#技术细节"><span>技术细节</span></a></h2>
<ul>
<li>
<p><strong>梯度检查点</strong>：
使用 PyTorch 的 <code v-pre>torch.utils.checkpoint.checkpoint</code> 和 <code v-pre>torch.utils.checkpoint.checkpoint_sequential</code> 可以降低内存使用量。其原理是保存模型每个函数的输入元组，在反向传播时重新计算。</p>
</li>
<li>
<p><strong>DeepSpeed设置</strong>：</p>
<ul>
<li><code v-pre>zero_stage</code>：一般设置为 <code v-pre>zero2</code>，以平衡显存占用和训练速度。</li>
<li><code v-pre>max_seq_len</code>：通常设为4K。</li>
<li><code v-pre>offload</code>：通常不设置，以免影响训练效率。</li>
</ul>
</li>
</ul>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p>⚠ 在使用DeepSpeed时，确保正确配置<code v-pre>zero_stage</code>，以避免因带宽通信成本导致的训练速度减慢。</p>
</blockquote>
<h2 id="💡启发点" tabindex="-1"><a class="header-anchor" href="#💡启发点"><span>💡启发点</span></a></h2>
<ul>
<li>通过合理设置 <code v-pre>epoch</code> 和 <code v-pre>gradient_accumulation_steps</code>，可以在有限资源下最大化训练效率。</li>
<li>使用 <code v-pre>cosine</code> 学习率调度器通常能带来更稳定的收敛效果。</li>
</ul>
<h2 id="思考-未来展望与问题" tabindex="-1"><a class="header-anchor" href="#思考-未来展望与问题"><span>[思考] 未来展望与问题</span></a></h2>
<ul>
<li>如何在更大规模的数据集上优化SFT训练效率？</li>
<li>是否有可能通过自动化工具进一步简化参数调整过程？</li>
<li>在不同领域模型微调时，是否有通用的参数优化策略？</li>
</ul>
<blockquote>
<p>来源：本文内容基于对SFT训练的技术分析与实践经验总结。</p>
</blockquote>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 探索OpenRLHF框架的更多应用场景。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 实验不同学习率调度器对训练效果的影响。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 研究DeepSpeed的最新更新与优化功能。</label></li>
</ul>
<h2 id="📈趋势预测" tabindex="-1"><a class="header-anchor" href="#📈趋势预测"><span>📈趋势预测</span></a></h2>
<p>随着深度学习框架的不断发展，预计未来SFT训练将更加高效，并且会有更多自动化工具来简化参数调整过程。</p>
<h2 id="后续追踪" tabindex="-1"><a class="header-anchor" href="#后续追踪"><span>后续追踪</span></a></h2>
<ul>
<li>关注DeepSpeed在处理大规模模型训练中的新特性。</li>
<li>跟踪OpenRLHF框架在社区中的应用案例。</li>
</ul>
</div></template>


