<template><div><h2 id="分类" tabindex="-1"><a class="header-anchor" href="#分类"><span>分类</span></a></h2>
<p>自然语言处理, 机器学习</p>
<h2 id="标签" tabindex="-1"><a class="header-anchor" href="#标签"><span>标签</span></a></h2>
<p>PaLM, Transformer, 自然语言处理, 机器学习, 模型训练</p>
<h2 id="日期" tabindex="-1"><a class="header-anchor" href="#日期"><span>日期</span></a></h2>
<p>2025年4月12日</p>
<h2 id="内容概述" tabindex="-1"><a class="header-anchor" href="#内容概述"><span>内容概述</span></a></h2>
<p>本文介绍了PaLM（Pathways Language Model）的结构、训练设置和优化策略。PaLM采用了标准的Transformer架构，并进行了多项改进以提升模型性能和训练稳定性。
<img src="/img/user/附件/Pasted image 20250424124216.png" alt="Pasted image 20250424124216.png"><img src="/img/user/附件/Pasted image 20250424124234.png" alt="Pasted image 20250424124234.png"></p>
<h2 id="模型结构" tabindex="-1"><a class="header-anchor" href="#模型结构"><span>模型结构</span></a></h2>
<p>PaLM使用标准的Transformer架构，采用了仅包含解码器的结构，并进行了以下改动：</p>
<ul>
<li><strong>SwiGLU激活函数</strong>：替换了传统的FFN部分。</li>
<li><strong>并行层设计</strong>：改变了序列化表述，使用并行化结构以提升计算效率。</li>
<li><strong>其他优化</strong>：引入MQA、RoPE、共享输入输出embedding，并去掉了dense层和Layer Norm中的偏差项。</li>
</ul>
<p>💡 <strong>启发点</strong>：使用SwiGLU激活函数和并行层设计显著提高了模型的训练效率和稳定性。</p>
<h2 id="训练设置" tabindex="-1"><a class="header-anchor" href="#训练设置"><span>训练设置</span></a></h2>
<ul>
<li><strong>权重初始化</strong>：核心权重采用“fan-in variance scaling”初始化，而输入embedding则使用标准正态分布初始化。</li>
<li><strong>优化器</strong>：使用Adafactor优化器进行训练，相较于传统Adam优化器，其学习率根据参数矩阵的均方根进行缩放。</li>
<li><strong>损失函数</strong>：采用标准语言模型损失函数，并额外添加辅助损失以提高softmax标准化的稳定性。</li>
</ul>
<h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2>
<ol>
<li>✅ 初始化权重时，核心权重使用“fan-in variance scaling”。</li>
<li>⚠ 使用Adafactor优化器，注意学习率衰减策略。</li>
<li>❗ 设置损失函数时，添加辅助损失来稳定softmax标准化。</li>
</ol>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p>使用不当的权重初始化方法可能导致模型收敛缓慢或不稳定。确保在不同层中使用适合的初始化策略。</p>
</blockquote>
<h2 id="数据与公式" tabindex="-1"><a class="header-anchor" href="#数据与公式"><span>数据与公式</span></a></h2>
<h3 id="公式" tabindex="-1"><a class="header-anchor" href="#公式"><span>公式</span></a></h3>
<ul>
<li>权重初始化：<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>W</mi><mo>∼</mo><mi>N</mi><mo stretchy="false">(</mo><mn>0</mn><mo separator="true">,</mo><mfrac><mn>1</mn><msub><mi>n</mi><mrow><mi>i</mi><mi>n</mi></mrow></msub></mfrac><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">W \sim N(0, \frac{1}{n_{in}})
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">W</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∼</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.1574em;vertical-align:-0.836em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mopen">(</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3214em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">in</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.836em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose">)</span></span></span></span></span></p>
</li>
<li>输入embedding初始化：<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>E</mi><mo>∼</mo><mi>N</mi><mo stretchy="false">(</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">E \sim N(0, 1)
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∼</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mopen">(</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose">)</span></span></span></span></span></p>
</li>
</ul>
<h3 id="数据表格" tabindex="-1"><a class="header-anchor" href="#数据表格"><span>数据表格</span></a></h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>值</th>
</tr>
</thead>
<tbody>
<tr>
<td>序列长度</td>
<td>2048</td>
</tr>
<tr>
<td>词表大小</td>
<td>256K</td>
</tr>
</tbody>
</table>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 研究并实现SwiGLU激活函数的具体应用。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 探讨并行层设计对模型效率的影响。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 测试不同优化器对大规模模型训练的效果。</label></li>
</ul>
<blockquote>
<p>来源：本文内容基于PaLM: Scaling Language Modeling with Pathways论文分析与总结。</p>
</blockquote>
</div></template>


