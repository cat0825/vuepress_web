<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li>分类：AI模型优化</li>
<li>标签：小模型、专家组、推理效率、Transformer、MoE</li>
<li>日期：2025年4月12日</li>
</ul>
<h2 id="核心观点总结" tabindex="-1"><a class="header-anchor" href="#核心观点总结"><span>核心观点总结</span></a></h2>
<p>Mixtral of Experts模型通过将大型模型分解为多个“专家”，在推理过程中只选择最相关的两个专家进行计算，从而提高推理效率并降低成本。该模型的创新在于使用门控机制动态选择专家组合，适用于处理大规模数据集或复杂任务。
<img src="/img/user/附件/Pasted image 20250427222157.png" alt="Pasted image 20250427222157.png"></p>
<h2 id="重点段落与数据" tabindex="-1"><a class="header-anchor" href="#重点段落与数据"><span>重点段落与数据</span></a></h2>
<h3 id="模型结构与工作原理" tabindex="-1"><a class="header-anchor" href="#模型结构与工作原理"><span>模型结构与工作原理</span></a></h3>
<p>Mixtral模型由8个小模型组成，训练时使用所有8个模型，但推理时仅使用其中两个。这种设计使得总参数量为46.7B，但每个token只需使用12.9B参数，降低了计算成本。专家组中的每个成员专注于处理输入数据的特定方面，例如语法或语义。
<img src="/img/user/附件/Pasted image 20250427222213.png" alt="Pasted image 20250427222213.png"></p>
<h1 id="moe并行训练" tabindex="-1"><a class="header-anchor" href="#moe并行训练"><span>MOE并行训练</span></a></h1>
<h2 id="分类" tabindex="-1"><a class="header-anchor" href="#分类"><span>分类</span></a></h2>
<p>机器学习</p>
<h2 id="标签" tabindex="-1"><a class="header-anchor" href="#标签"><span>标签</span></a></h2>
<p>MoE, 并行训练, 分布式系统, GPU</p>
<h2 id="日期" tabindex="-1"><a class="header-anchor" href="#日期"><span>日期</span></a></h2>
<p>2025年4月12日</p>
<h2 id="内容概述" tabindex="-1"><a class="header-anchor" href="#内容概述"><span>内容概述</span></a></h2>
<p>本文探讨了在机器学习中使用Mixture of Experts (MoE)技术进行并行训练的方法，重点介绍了分布式初始化和FWD与BWD过程中的关键步骤。我们将复杂的技术术语转化为通俗易懂的语言，并提供关键流程的编号列表，以帮助读者更好地理解和应用这些技术。</p>
<h2 id="分布式初始化" tabindex="-1"><a class="header-anchor" href="#分布式初始化"><span>分布式初始化</span></a></h2>
<p>分布式初始化是将专家分布排列到多个GPU上的过程。我们先确定使用几块GPU来装载一套专家（EP），然后确认全局有多少套专家副本在运行（DP）。这种方法有助于优化资源使用并提高计算效率。</p>
<p><img src="/img/user/附件/Pasted image 20250427222354.png" alt="Pasted image 20250427222354.png"></p>
<h2 id="fwd与bwd过程" tabindex="-1"><a class="header-anchor" href="#fwd与bwd过程"><span>FWD与BWD过程</span></a></h2>
<p>在FWD过程中，数据首先通过non-MoE层，然后进入MoE层。每个GPU上的数据维度是(E, C, M)，通过ep_group内的all2all通讯将token发送到对应的专家。在BWD过程中，通过ep_dp_group中的allreduce来更新梯度结果。
<img src="/img/user/附件/Pasted image 20250427222409.png" alt="Pasted image 20250427222409.png"></p>
<h3 id="关键步骤" tabindex="-1"><a class="header-anchor" href="#关键步骤"><span>关键步骤</span></a></h3>
<ol>
<li>✅ 确定GPU数量用于装载专家（EP）。</li>
<li>⚠ 确认全局专家副本数量（DP）。</li>
<li>❗ 在FWD过程中使用all2all通讯发送token。</li>
<li>✅ 在BWD过程中使用allreduce更新梯度。</li>
</ol>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p>注意在allreduce过程中确保所有GPU同步更新梯度，否则可能导致模型不一致性。</p>
</blockquote>
<h2 id="💡启发点" tabindex="-1"><a class="header-anchor" href="#💡启发点"><span>💡启发点</span></a></h2>
<p>通过合理配置GPU和专家数量，可以显著提高模型训练速度和效率。</p>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul>
<li>研究MoE技术在不同应用场景中的表现。</li>
<li>探索其他分布式训练策略。</li>
<li>测试不同GPU配置对训练效率的影响。</li>
</ul>
<blockquote>
<p>原始出处：[粘贴您选取的文本]</p>
</blockquote>
<h3 id="路由与门控机制" tabindex="-1"><a class="header-anchor" href="#路由与门控机制"><span>路由与门控机制</span></a></h3>
<p>关键组成部分是门控机制，它根据输入数据特性动态选择最优专家组合。前馈块从8组不同参数集中选择两个“专家”Transformer处理输入，并将它们的输出加权结合。</p>
<h3 id="优化细节" tabindex="-1"><a class="header-anchor" href="#优化细节"><span>优化细节</span></a></h3>
<ul>
<li><strong>Sentence-Level</strong>：对各个样本分别进行路由。</li>
<li><strong>Token-Level</strong>：对样本中的各个token分别进行路由。</li>
<li><strong>Task-Level</strong>：要求不同的expert明确负责不同任务。</li>
</ul>
<h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2>
<ol>
<li>✅ 将输入token通过Attention层及残差连接传入模型。</li>
<li>⚠ 路由网络选择两个最优专家处理输入。</li>
<li>❗ 对专家输出进行加权聚合，并通过残差连接获取最终输出。</li>
</ol>
<h2 id="常见错误-1" tabindex="-1"><a class="header-anchor" href="#常见错误-1"><span>常见错误</span></a></h2>
<blockquote>
<p>注意在选择专家组合时，确保门控机制的准确性，否则可能影响模型性能。</p>
</blockquote>
<h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h2>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 示例代码展示如何使用门控机制选择专家</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">def</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> select_experts</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">token</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> experts</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    weights </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> softmax</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">top_k</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">token </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> W_g</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> k</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">))</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    selected_experts </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">experts</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> for</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> i </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">in</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> range</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)]</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> sum</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">weight </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> expert</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">token</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> for</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> weight</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> expert </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">in</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> zip</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">weights</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> selected_experts</span><span style="--shiki-light:#999999;--shiki-dark:#666666">))</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="💡启发点-1" tabindex="-1"><a class="header-anchor" href="#💡启发点-1"><span>💡启发点</span></a></h2>
<p>Mixtral模型通过仅使用部分专家进行推理，大幅降低了计算成本，同时保持了高效性能。这种设计为未来agent技术的发展提供了重要启示。</p>
<h2 id="行动清单-1" tabindex="-1"><a class="header-anchor" href="#行动清单-1"><span>行动清单</span></a></h2>
<ul>
<li>研究其他MoE模型的优化策略。</li>
<li>评估Mixtral在不同任务场景下的性能表现。</li>
<li>探索门控机制的进一步改进方法。</li>
</ul>
<h2 id="数据转换" tabindex="-1"><a class="header-anchor" href="#数据转换"><span>数据转换</span></a></h2>
<table>
<thead>
<tr>
<th>参数总量</th>
<th>使用参数量</th>
<th>专家数量</th>
</tr>
</thead>
<tbody>
<tr>
<td>46.7B</td>
<td>12.9B</td>
<td>8</td>
</tr>
</tbody>
</table>
<h2 id="公式显示" tabindex="-1"><a class="header-anchor" href="#公式显示"><span>公式显示</span></a></h2>
<p>对于输入token <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 的输出 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>y</mi></mrow><annotation encoding="application/x-tex">y</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span></span></span></span> 计算如下：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>0</mn></mrow><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></munderover><mtext>Softmax</mtext><mo stretchy="false">(</mo><mtext>Top 2</mtext><mo stretchy="false">(</mo><mi>x</mi><mo>⋅</mo><msub><mi>W</mi><mi>g</mi></msub><mo stretchy="false">)</mo><msub><mo stretchy="false">)</mo><mi>i</mi></msub><mo>⋅</mo><msub><mtext>SwiGLU</mtext><mi>i</mi></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">y = \sum_{i=0}^{n-1} \text{Softmax}(\text{Top 2}(x \cdot W_g))_i \cdot \text{SwiGLU}_i(x)
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:3.0788em;vertical-align:-1.2777em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.8011em;"><span style="top:-1.8723em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">0</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.2777em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord text"><span class="mord">Softmax</span></span><span class="mopen">(</span><span class="mord text"><span class="mord">Top 2</span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0361em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">W</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">g</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord text"><span class="mord">SwiGLU</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span></span></p>
<blockquote>
<p>原始出处：<a href="%E6%9D%A5%E6%BA%90%E6%9C%AA%E6%8F%90%E4%BE%9B">论文：Mixtral of Experts</a></p>
</blockquote>
<h1 id="moe推理优化" tabindex="-1"><a class="header-anchor" href="#moe推理优化"><span>MOE推理优化</span></a></h1>
<h2 id="元数据-1" tabindex="-1"><a class="header-anchor" href="#元数据-1"><span>元数据</span></a></h2>
<ul>
<li>分类：深度学习优化</li>
<li>标签：推理优化、滑动窗口、注意力机制、模型深度</li>
<li>日期：2025年4月12日</li>
</ul>
<h2 id="核心观点总结-1" tabindex="-1"><a class="header-anchor" href="#核心观点总结-1"><span>核心观点总结</span></a></h2>
<p>滑动窗口注意力机制通过限制每个token只与其前面固定数量的token进行注意力计算，从而减少缓存压力。虽然每层只能看到部分前置序列，但随着模型深度增加，最终可以覆盖所有前置tokens。这类似于CNN中的感受野概念。</p>
<h2 id="重点段落" tabindex="-1"><a class="header-anchor" href="#重点段落"><span>重点段落</span></a></h2>
<h3 id="滑动窗口注意力机制" tabindex="-1"><a class="header-anchor" href="#滑动窗口注意力机制"><span>滑动窗口注意力机制</span></a></h3>
<p>滑动窗口注意力机制旨在减少KV缓存的存储压力。传统的因果解码形式需要每个token与之前所有的token进行注意力计算，导致缓存与序列长度正相关。通过限制每个token仅与其前W个token做注意力计算，可以将缓存容量维持在W。</p>
<p><img src="/img/user/附件/Pasted image 20250427222501.png" alt="Pasted image 20250427222501.png"></p>
<h3 id="rolling-buffer-cache" tabindex="-1"><a class="header-anchor" href="#rolling-buffer-cache"><span>Rolling Buffer Cache</span></a></h3>
<p>在Rolling Buffer Cache中，prompt中第i个token在KV缓存中的存储序号为 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>i</mi><mi mathvariant="normal">%</mi><mi>W</mi></mrow><annotation encoding="application/x-tex">i \% W</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8056em;vertical-align:-0.0556em;"></span><span class="mord mathnormal">i</span><span class="mord">%</span><span class="mord mathnormal" style="margin-right:0.13889em;">W</span></span></span></span>。这种方法帮助缓解缓存压力，并提高模型的推理效率。
<img src="/img/user/附件/Pasted image 20250427222512.png" alt="Pasted image 20250427222512.png"></p>
<h3 id="chunking方法" tabindex="-1"><a class="header-anchor" href="#chunking方法"><span>Chunking方法</span></a></h3>
<p>Chunking方法通过将过长的prompt切成若干chunk，每次喂给模型一个chunk并更新KV缓存，解决显存压力问题。通常情况下，设定chunk_size等于cache_window等于sliding_window，所有尺寸保持一致，设为W。</p>
<h2 id="步骤流程" tabindex="-1"><a class="header-anchor" href="#步骤流程"><span>步骤流程</span></a></h2>
<ol>
<li>✅限制每个token只与其前W个token进行注意力计算。</li>
<li>⚠使用Rolling Buffer Cache来管理KV缓存。</li>
<li>❗将长prompt切割成chunk以优化显存使用。</li>
</ol>
<h2 id="常见错误-2" tabindex="-1"><a class="header-anchor" href="#常见错误-2"><span>常见错误</span></a></h2>
<blockquote>
<p>在实现滑动窗口注意力机制时，容易错误地设置窗口大小W过小，导致信息无法充分流动。</p>
</blockquote>
<h2 id="💡启发点-2" tabindex="-1"><a class="header-anchor" href="#💡启发点-2"><span>💡启发点</span></a></h2>
<p>滑动窗口注意力机制不仅优化了缓存，还通过模型深度实现了信息传递的完整性，这为大型模型的推理提供了一种高效解决方案。</p>
<h2 id="行动清单-2" tabindex="-1"><a class="header-anchor" href="#行动清单-2"><span>行动清单</span></a></h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 实验验证不同窗口大小对推理效率和准确性的影响。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 探索其他可能的缓存优化策略。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 评估Chunking方法在不同模型架构中的适用性。</label></li>
</ul>
<blockquote>
<p>原始出处：[粘贴您选取的文本]</p>
</blockquote>
</div></template>


