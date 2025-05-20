<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li><strong>分类</strong>：自然语言处理</li>
<li><strong>标签</strong>：YaRN、RoPE嵌入、注意力机制、LLaMA、深度学习</li>
<li><strong>日期</strong>：2025年3月5日</li>
</ul>
<hr>
<h2 id="内容概要" tabindex="-1"><a class="header-anchor" href="#内容概要"><span>内容概要</span></a></h2>
<p>YaRN（Yet another RoPE extensioN method）是一种针对RoPE（旋转位置编码）进行扩展的方法，通过引入温度参数 $$t$$，优化了注意力权重的计算。该方法在推理和训练阶段没有额外开销，且适用于扩展上下文窗口的场景，如LLaMA模型的增强。</p>
<h3 id="核心观点" tabindex="-1"><a class="header-anchor" href="#核心观点"><span>核心观点</span></a></h3>
<ol>
<li>
<p><strong>引入温度参数统一影响困惑度</strong><br>
在计算注意力权重时，通过在softmax操作前引入温度参数 $$t$$，可以实现对困惑度的统一调节，提升模型的适配能力。</p>
</li>
<li>
<p><strong>按比例缩放RoPE嵌入</strong><br>
将query和key向量以 $$1/t$$ 的比例缩放，使得嵌入更具鲁棒性，并结合NTK-by-parts方法（分段自然梯度核）完成YaRN的实现。</p>
</li>
<li>
<p><strong>无额外开销</strong><br>
RoPE嵌入提前生成且可重复使用，因此YaRN在推理和训练阶段不会增加额外计算成本。</p>
</li>
<li>
<p><strong>推荐公式</strong><br>
对于LLaMA模型，建议使用以下公式进行温度参数的选择：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mfrac><mn>1</mn><mi>t</mi></mfrac><mo>=</mo><mn>0.1</mn><mi>ln</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>s</mi><mo stretchy="false">)</mo><mo>+</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">\frac{1}{t} = 0.1 \ln(s) + 1
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.0074em;vertical-align:-0.686em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3214em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">t</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">0.1</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop">ln</span><span class="mopen">(</span><span class="mord mathnormal">s</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></span></p>
</li>
</ol>
<hr>
<h2 id="技术细节" tabindex="-1"><a class="header-anchor" href="#技术细节"><span>技术细节</span></a></h2>
<h3 id="_1-温度参数对注意力机制的优化" tabindex="-1"><a class="header-anchor" href="#_1-温度参数对注意力机制的优化"><span>## 1. 温度参数对注意力机制的优化</span></a></h3>
<p>在传统注意力权重计算中，softmax操作的输入为query和key的点积结果。通过引入温度 $$t$$，公式变为：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mtext>softmax</mtext><mrow><mo fence="true">(</mo><mi>t</mi><mo>⋅</mo><mfrac><mrow><msubsup><mi>q</mi><mi>m</mi><mi>T</mi></msubsup><msub><mi>k</mi><mi>n</mi></msub></mrow><msqrt><msub><mi>d</mi><mi>k</mi></msub></msqrt></mfrac><mo fence="true">)</mo></mrow></mrow><annotation encoding="application/x-tex">\text{softmax}\left( t \cdot \frac{q_m^T k_n}{\sqrt{d_k}} \right)
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.4684em;vertical-align:-0.95em;"></span><span class="mord text"><span class="mord">softmax</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">(</span></span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.5183em;"><span style="top:-2.2528em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8572em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord"><span class="mord mathnormal">d</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-2.8172em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1828em;"><span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8413em;"><span style="top:-2.453em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">m</span></span></span><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0315em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.93em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size3">)</span></span></span></span></span></span></span></p>
<p>这里 $$q_m$$ 和 $$k_n$$ 分别是query和key向量，$$d_k$$ 是向量的维度。温度参数 $$t$$ 的作用是调整点积结果的幅度，从而影响softmax分布的陡峭程度。</p>
<p>💡<strong>启发点</strong>：通过调整温度参数，可以更灵活地适配不同上下文长度下的注意力分布。</p>
<hr>
<h3 id="_2-rope嵌入的比例缩放" tabindex="-1"><a class="header-anchor" href="#_2-rope嵌入的比例缩放"><span>## 2. RoPE嵌入的比例缩放</span></a></h3>
<p>RoPE（旋转位置编码）是一种通过对query和key向量进行旋转变换来引入位置信息的方法。在YaRN中，进一步对RoPE嵌入进行按比例缩放：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mtext>缩放因子</mtext><mo>=</mo><mfrac><mn>1</mn><mi>t</mi></mfrac></mrow><annotation encoding="application/x-tex">\text{缩放因子} = \frac{1}{t}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord cjk_fallback">缩放因子</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.0074em;vertical-align:-0.686em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3214em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">t</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p>
<p>这种方式使得query和key能够更好地适配扩展上下文窗口中的远距离依赖。</p>
<hr>
<h3 id="_3-llama模型的推荐公式" tabindex="-1"><a class="header-anchor" href="#_3-llama模型的推荐公式"><span>## 3. LLaMA模型的推荐公式</span></a></h3>
<p>对于LLaMA模型，YaRN提供了一个经验公式来选择温度参数：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mfrac><mn>1</mn><mi>t</mi></mfrac><mo>=</mo><mn>0.1</mn><mi>ln</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>s</mi><mo stretchy="false">)</mo><mo>+</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">\frac{1}{t} = 0.1 \ln(s) + 1
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.0074em;vertical-align:-0.686em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3214em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">t</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">0.1</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop">ln</span><span class="mopen">(</span><span class="mord mathnormal">s</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></span></p>
<p>其中，$$s$$ 是上下文窗口的扩展比例。这个公式可以帮助模型在不同上下文长度下保持较好的性能。</p>
<p>✅ <strong>操作步骤</strong>：</p>
<ol>
<li><strong>确定上下文窗口扩展比例 $$s$$</strong>。</li>
<li><strong>根据公式计算缩放因子 $$1/t$$</strong>。</li>
<li><strong>将缩放因子应用于RoPE嵌入</strong>。</li>
<li><strong>在推理或训练阶段直接使用优化后的嵌入，无需额外计算。</strong></li>
</ol>
<p>⚠️ <strong>常见错误</strong>：</p>
<ul>
<li>忽略上下文窗口扩展比例 $$s$$ 的变化，导致缩放因子不准确。</li>
<li>对RoPE嵌入重复计算，增加不必要的开销。</li>
</ul>
<hr>
<h2 id="思考板块" tabindex="-1"><a class="header-anchor" href="#思考板块"><span>思考板块</span></a></h2>
<ol>
<li><strong>如何进一步优化YaRN方法，使其适配更加复杂的上下文场景？</strong></li>
<li><strong>是否可以将类似温度参数的思想应用于其他类型的位置编码方法？</strong></li>
<li><strong>在多模态模型中，YaRN是否也能有效提升性能？</strong></li>
</ol>
<hr>
<blockquote>
<p>原始出处：[论文/文章未注明具体来源]</p>
</blockquote>
<hr>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 测试YaRN方法在不同上下文窗口下的实际效果。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 比较YaRN与其他位置编码方法（如ALiBi）的性能差异。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 探索YaRN在多模态模型中的应用潜力。</label></li>
</ul>
<hr>
<h2 id="数据表格示例" tabindex="-1"><a class="header-anchor" href="#数据表格示例"><span>数据表格示例</span></a></h2>
<table>
<thead>
<tr>
<th>参数</th>
<th>公式</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>温度参数 $$t$$</td>
<td>$$\frac{1}{t} = 0.1 \ln(s) + 1$$</td>
<td>控制注意力权重分布</td>
</tr>
<tr>
<td>RoPE缩放因子</td>
<td>$$\frac{1}{t}$$</td>
<td>调整query和key的比例</td>
</tr>
<tr>
<td>上下文扩展比例 $$s$$</td>
<td>-</td>
<td>上下文窗口扩展的倍数</td>
</tr>
</tbody>
</table>
<hr>
<p>📈 <strong>趋势预测</strong><br>
随着上下文窗口扩展需求的增加，像YaRN这样的方法可能会被更广泛地应用于大语言模型（LLM），尤其是在需要高效处理长文本任务时。</p>
<hr>
<h2 id="后续追踪" tabindex="-1"><a class="header-anchor" href="#后续追踪"><span>后续追踪</span></a></h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 探索是否可以结合动态温度调整策略，使YaRN在不同任务中更具适应性。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 调研其他基于RoPE优化的方法并进行对比实验。</label></li>
</ul>
</div></template>


