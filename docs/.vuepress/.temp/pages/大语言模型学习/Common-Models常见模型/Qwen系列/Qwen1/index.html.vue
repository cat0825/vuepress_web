<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li>分类：机器学习</li>
<li>标签：Transformer, Qwen模型, 自回归语言模型, 注意力机制</li>
<li>日期：2025年4月12日</li>
</ul>
<h2 id="核心观点总结" tabindex="-1"><a class="header-anchor" href="#核心观点总结"><span>核心观点总结</span></a></h2>
<p>Qwen模型是一种基于Transformer改进的语言模型，采用了类似LLaMA的结构。通过一系列技术优化，Qwen在模型性能和外推能力上取得了显著提升。其关键特点包括未绑定的嵌入方式、RoPE位置编码和Flash Attention技术等。
<img src="/img/user/附件/Pasted image 20250425111315.png" alt="Pasted image 20250425111315.png"></p>
<h2 id="重点段落" tabindex="-1"><a class="header-anchor" href="#重点段落"><span>重点段落</span></a></h2>
<h3 id="模型结构与创新之处" tabindex="-1"><a class="header-anchor" href="#模型结构与创新之处"><span>模型结构与创新之处</span></a></h3>
<p>Qwen模型在结构上进行了多项改进：</p>
<ul>
<li><strong>未绑定嵌入</strong>：输入和输出嵌入不共享权重，尽管增加了内存消耗，但显著提升了性能。</li>
<li><strong>RoPE位置编码</strong>和<strong>Pre-RMSNorm</strong>：增强了模型的表达能力。</li>
<li><strong>偏置项的选择性保留</strong>：在大多数层移除偏置，但在注意力的QKV层保留，以提升外推能力。</li>
</ul>
<h3 id="模型训练方法" tabindex="-1"><a class="header-anchor" href="#模型训练方法"><span>模型训练方法</span></a></h3>
<p>训练采用标准自回归语言模型目标：</p>
<ul>
<li><strong>上下文长度</strong>：训练时为2048，通过动态NTK插值和LogN-Scaling等技术，推理时可扩展至8192。</li>
<li><strong>优化器与学习率</strong>：使用AdamW优化器，超参数设置为 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>β</mi><mn>1</mn></msub><mo>=</mo><mn>0.9</mn></mrow><annotation encoding="application/x-tex">\beta_1=0.9</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05278em;">β</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0528em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0.9</span></span></span></span>、<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>β</mi><mn>2</mn></msub><mo>=</mo><mn>0.95</mn></mrow><annotation encoding="application/x-tex">\beta_2=0.95</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05278em;">β</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0528em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0.95</span></span></span></span> 和 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ϵ</mi><mo>=</mo><mn>1</mn><msup><mi>e</mi><mrow><mo>−</mo><mn>8</mn></mrow></msup></mrow><annotation encoding="application/x-tex">\epsilon=1e^{-8}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">ϵ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">8</span></span></span></span></span></span></span></span></span></span></span></span>，并采用余弦学习率计划。</li>
</ul>
<h3 id="外推能力扩展技术" tabindex="-1"><a class="header-anchor" href="#外推能力扩展技术"><span>外推能力扩展技术</span></a></h3>
<ul>
<li><strong>动态NTK插值</strong>：通过位置编码优化提升长度外推能力。</li>
<li><strong>LogN-Scaling</strong>：根据熵不变性对注意力值进行缩放，确保稳定性。</li>
<li><strong>分层窗口Self-Attention</strong>：限制注意力范围，防止关注过远内容。</li>
</ul>
<h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2>
<ol>
<li>✅ 选择未绑定嵌入以提升性能。</li>
<li>⚠ 保留注意力QKV层偏置以增强外推能力。</li>
<li>❗ 使用Flash Attention技术提高计算效率。</li>
</ol>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p>⚠ 在实现未绑定嵌入时，需注意内存消耗可能增加，应根据硬件条件合理配置。</p>
</blockquote>
<h2 id="💡-启发点" tabindex="-1"><a class="header-anchor" href="#💡-启发点"><span>💡 启发点</span></a></h2>
<p>Qwen模型通过未绑定嵌入和多种注意力机制的创新组合，实现了在外推能力上的突破性进展。</p>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul>
<li>研究未绑定嵌入对不同任务性能的影响。</li>
<li>探索RoPE位置编码在其他模型中的应用潜力。</li>
<li>实验不同上下文长度对模型性能的影响。</li>
</ul>
<h2 id="数据转换" tabindex="-1"><a class="header-anchor" href="#数据转换"><span>数据转换</span></a></h2>
<table>
<thead>
<tr>
<th>技术</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>未绑定嵌入</td>
<td>输入和输出不共享权重</td>
</tr>
<tr>
<td>RoPE位置编码</td>
<td>增强表达能力</td>
</tr>
<tr>
<td>Flash Attention</td>
<td>提高计算效率</td>
</tr>
</tbody>
</table>
<h2 id="公式显示" tabindex="-1"><a class="header-anchor" href="#公式显示"><span>公式显示</span></a></h2>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mtext>Attention</mtext><mo stretchy="false">(</mo><mi>Q</mi><mo separator="true">,</mo><mi>K</mi><mo separator="true">,</mo><mi>V</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>softmax</mtext><mrow><mo fence="true">(</mo><mfrac><mi>d</mi><mrow><mi>κ</mi><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow></mfrac><mi>Q</mi><msup><mi>K</mi><mi mathvariant="normal">⊤</mi></msup><mo fence="true">)</mo></mrow><mi>V</mi></mrow><annotation encoding="application/x-tex">\text{Attention}(Q, K, V) = \text{softmax} \left( \frac{d}{\kappa \log n} QK^\top \right) V
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord text"><span class="mord">Attention</span></span><span class="mopen">(</span><span class="mord mathnormal">Q</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">K</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.4em;vertical-align:-0.95em;"></span><span class="mord text"><span class="mord">softmax</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3714em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">κ</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">n</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">d</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.8804em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal">Q</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">K</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8991em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">⊤</span></span></span></span></span></span></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size3">)</span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span></span></span></span></span></p>
<blockquote>
<p>来源：QWEN TECHNICAL REPORT</p>
</blockquote>
</div></template>


