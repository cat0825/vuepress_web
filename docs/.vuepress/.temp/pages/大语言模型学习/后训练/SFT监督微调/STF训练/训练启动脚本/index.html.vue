<template><div><p>分类：机器学习</p>
<p>标签：SFT训练，模型评估，深度学习</p>
<p>日期：2023年10月22日</p>
<h2 id="核心观点总结" tabindex="-1"><a class="header-anchor" href="#核心观点总结"><span>核心观点总结</span></a></h2>
<p>在深度学习中，SFT（Supervised Fine-Tuning）训练和评估是提升模型性能的重要环节。本文介绍了OpenRLHF框架下的SFT训练启动脚本，并详细阐述了SFT评估的原则和方法。通过结合机评和人评，可以更全面地评估模型在不同维度上的表现。</p>
<h2 id="重点段落" tabindex="-1"><a class="header-anchor" href="#重点段落"><span>重点段落</span></a></h2>
<ol>
<li>
<p><strong>SFT训练启动脚本</strong><br>
使用OpenRLHF进行SFT训练的启动脚本示例展示了如何设置训练参数，包括最大长度、数据集、批量大小、预训练模型、保存路径等。</p>
</li>
<li>
<p><strong>评估原则</strong><br>
SFT评估需要关注模型的Helpfulness（帮助性）、Honesty（诚实性）和Harmlessness（无害性）。此外，还需根据需求制定其他指标，如指令遵循、内容准确性和安全性。</p>
</li>
<li>
<p><strong>机评与人评</strong><br>
机评利用大模型如GPT4进行，需精心设计prompt以减少偏差；人评则通过人工直接判断模型输出的质量。</p>
</li>
</ol>
<h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2>
<ol>
<li>
<p>✅ <strong>启动训练</strong><br>
使用以下命令启动SFT训练：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">openrlhf.cli.train_sft</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">--max_len </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2048</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">--dataset </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">xxx</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">--input_key </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">question</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">--output_key </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">response</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">--train_batch_size </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">256</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">--micro_train_batch_size </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">--max_samples </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">500000</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">--pretrain </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">meta-llama/Meta-Llama-3-8B</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">--save_path </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">./checkpoint/llama3-8b-sft</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">--save_steps </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">-1</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">--logging_steps </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">--eval_steps </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">-1</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">--zero_stage </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">--max_epochs </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">--bf16 </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">--flash_attn </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">--learning_rate </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">5e-6</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">--load_checkpoint </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">--gradient_checkpointing</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>⚠ <strong>注意事项</strong></p>
<ul>
<li>确保数据集和预训练模型路径正确。</li>
<li>调整学习率以适应不同数据集。</li>
</ul>
</li>
<li>
<p>❗ <strong>评估准备</strong><br>
准备与训练集一致的高质量评测集合，确保评估任务类型明确。</p>
</li>
</ol>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p>在启动训练时，常见错误包括路径配置错误、参数设置不当以及未充分考虑数据集特点等。这些错误可能导致训练失败或结果不理想。</p>
</blockquote>
<h2 id="💡启发点" tabindex="-1"><a class="header-anchor" href="#💡启发点"><span>💡启发点</span></a></h2>
<ul>
<li>在设计评估指标时，如何平衡不同维度的权重？</li>
<li>如何更好地利用大模型进行机评以减少偏差？</li>
</ul>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 优化训练脚本参数以提高效率。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 制定详细的评估指标并测试其有效性。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 探索更多评估方法以提升结果准确性。</label></li>
</ul>
<h2 id="📈趋势预测" tabindex="-1"><a class="header-anchor" href="#📈趋势预测"><span>📈趋势预测</span></a></h2>
<p>随着大模型的不断发展，未来SFT训练和评估将更加依赖于自动化工具和更智能的评估指标，以提高效率和准确性。</p>
<h2 id="后续追踪" tabindex="-1"><a class="header-anchor" href="#后续追踪"><span>后续追踪</span></a></h2>
<ul>
<li>研究如何结合更多数据源进行多维度评估。</li>
<li>探索新型评估算法以提高机评准确性。</li>
</ul>
<blockquote>
<p>原始出处：此内容基于OpenRLHF框架的SFT训练与评估文档。</p>
</blockquote>
</div></template>


