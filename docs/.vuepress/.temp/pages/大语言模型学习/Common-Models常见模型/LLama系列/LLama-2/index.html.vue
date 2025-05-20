<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li>分类：人工智能、机器学习</li>
<li>标签：Llama 2、模型训练、拒绝采样、数据质量</li>
<li>日期：2025年4月12日</li>
</ul>
<h2 id="内容概要" tabindex="-1"><a class="header-anchor" href="#内容概要"><span>内容概要</span></a></h2>
<p>Llama 2 是一种新型的开放基础和微调聊天模型，相较于 LLaMA1，Llama 2 在模型结构和训练数据上进行了多项优化。本文将深入探讨这些改进以及其对模型性能的影响。</p>
<h2 id="模型结构改进" tabindex="-1"><a class="header-anchor" href="#模型结构改进"><span>模型结构改进</span></a></h2>
<p>Llama 2 在以下几个方面对模型结构进行了优化：</p>
<ul>
<li><strong>GQA 增强</strong>：大参数模型引入了 GQA（Generalized Query Attention），虽然整体参数量有所减少，但模型的推理能力得到了提升。</li>
<li><strong>FFN 扩充</strong>：FFN（Feed-Forward Network）模块的矩阵维度扩展，增强了模型的泛化能力。</li>
<li><strong>上下文窗口延长</strong>：上下文窗口从 LLaMA1 的 2K 增加到 4K，能够处理更长的文本输入。</li>
</ul>
<h2 id="训练数据策略" tabindex="-1"><a class="header-anchor" href="#训练数据策略"><span>训练数据策略</span></a></h2>
<p>Llama-2 采用了来自公开可用源的 2T 数据 token 进行预训练。尽管公开数据丰富，Meta 强调数据质量的重要性，选择使用自有标注数据以确保高质量训练。不同的数据源和标注供应商显著影响下游微调结果，强调了数据检查的重要性。
<img src="/img/user/附件/Pasted image 20250424223130.png" alt="Pasted image 20250424223130.png"></p>
<h2 id="拒绝采样方法" tabindex="-1"><a class="header-anchor" href="#拒绝采样方法"><span>拒绝采样方法</span></a></h2>
<p>拒绝采样（Reject Sampling, RS）是一种从目标概率分布中获取样本的蒙特卡洛方法。在 LLM 中，模型对同一提示生成多个响应，并利用奖励模型对这些答案进行评分，选出得分最高的答案。这一过程提升了生成质量，并为模型进一步训练提供了优质样本。</p>
<h2 id="后训练总结" tabindex="-1"><a class="header-anchor" href="#后训练总结"><span>后训练总结</span></a></h2>
<ul>
<li><strong>SFT 阶段</strong>：SFT（Supervised Fine-Tuning）阶段不应停留太久，通常一万个样本足以达到标注员水平。</li>
<li><strong>奖励模型语料构建</strong>：建议从自身模型中获取数据，以提升奖励模型的效果。</li>
</ul>
<h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2>
<ol>
<li>✅ 确定模型结构调整，如 GQA 增强和 FFN 扩充。</li>
<li>⚠ 收集并筛选高质量的训练数据。</li>
<li>❗ 实施拒绝采样以优化生成质量。
<img src="/img/user/附件/Pasted image 20250424223151.png" alt="Pasted image 20250424223151.png">
<img src="/img/user/附件/Pasted image 20250424223139.png" alt="Pasted image 20250424223139.png"></li>
</ol>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p>小心选择数据源，不同数据源可能导致微调结果不一致。</p>
</blockquote>
<h2 id="💡-启发点" tabindex="-1"><a class="header-anchor" href="#💡-启发点"><span>💡 启发点</span></a></h2>
<ul>
<li>数据质量比数量更重要，少量高质量数据优于大量低质量数据。</li>
</ul>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 验证 GQA 增强对推理能力的具体影响。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 比较不同标注数据对微调结果的差异。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 评估拒绝采样在其他模型中的适用性。</label></li>
</ul>
<blockquote>
<p>原始出处：[Llama 2: Open Foundation and Fine-Tuned Chat Models]</p>
</blockquote>
</div></template>


