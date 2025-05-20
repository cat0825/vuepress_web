<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<p><strong>分类</strong>：自然语言处理<br>
<strong>标签</strong>：位置内插法、RoPE、上下文扩展、语言模型<br>
<strong>日期</strong>：2025年3月5日</p>
<hr>
<h2 id="核心观点" tabindex="-1"><a class="header-anchor" href="#核心观点"><span>核心观点</span></a></h2>
<p>位置内插（Positional Interpolation，PI）是一种扩展语言模型上下文窗口长度的技术。通过将未见过的位置映射到模型训练时见过的位置，避免了直接外推导致的性能下降。这种方法在扩展上下文窗口时表现出较好的困惑度（Perplexity）指标，尤其是在微调后效果显著提升。<img src="/img/user/附件/Pasted image 20250407171913.png" alt="Pasted image 20250407171913.png"></p>
<hr>
<h2 id="重点内容" tabindex="-1"><a class="header-anchor" href="#重点内容"><span>重点内容</span></a></h2>
<h3 id="rope的问题与位置内插法的解决方案" tabindex="-1"><a class="header-anchor" href="#rope的问题与位置内插法的解决方案"><span>RoPE的问题与位置内插法的解决方案</span></a></h3>
<p>RoPE（相对位置编码）通过正弦和余弦函数嵌入位置信息，但直接外推会导致注意力分数（Attention Score）显著增加，影响模型性能。位置内插法通过缩放位置索引，将扩展的上下文长度映射到模型训练时支持的范围，避免了灾难性性能下降。</p>
<p>公式描述：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>s</mi><mo>=</mo><mfrac><mi>L</mi><msup><mi>L</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mfrac></mrow><annotation encoding="application/x-tex">s = \frac{L}{L&#x27;}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">s</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.0463em;vertical-align:-0.686em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">L</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6779em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">L</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>g</mi><mo stretchy="false">(</mo><mi>m</mi><mo stretchy="false">)</mo><mo>=</mo><mi>s</mi><mo>⋅</mo><mi>m</mi></mrow><annotation encoding="application/x-tex">g(m) = s \cdot m
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mopen">(</span><span class="mord mathnormal">m</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4445em;"></span><span class="mord mathnormal">s</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">m</span></span></span></span></span></p>
<p>其中：</p>
<ul>
<li>
<p v-pre class='katex-block'><span class="katex-error" title="ParseError: KaTeX parse error: Can&#x27;t use function &#x27;$&#x27; in math mode at position 2: L$̲$ 为原训练支持的上下文长度（…" style="color:#cc0000">L$$ 为原训练支持的上下文长度（如2048）
</span></p>
</li>
<li>
<p v-pre class='katex-block'><span class="katex-error" title="ParseError: KaTeX parse error: Can&#x27;t use function &#x27;$&#x27; in math mode at position 3: L&#x27;$̲$ 为扩展后的目标长度（如40…" style="color:#cc0000">L&#x27;$$ 为扩展后的目标长度（如4096）


</span></p>
</li>
</ul>
<h3 id="微调对效果的影响" tabindex="-1"><a class="header-anchor" href="#微调对效果的影响"><span>微调对效果的影响</span></a></h3>
<p>✅ <strong>步骤0（无微调）</strong>：位置内插后，模型在扩展到8192上下文窗口时，困惑度 &lt; 20，相比直接外推（困惑度 &gt; 1000）有显著改善。<br>
✅ <strong>微调后</strong>：经过200步微调，模型超过了原始2048上下文窗口大小的性能；在1000步后，困惑度进一步降低，显示出语言建模能力的稳步提升。</p>
<h3 id="困惑度指标的重要性" tabindex="-1"><a class="header-anchor" href="#困惑度指标的重要性"><span>困惑度指标的重要性</span></a></h3>
<p>困惑度（Perplexity）是衡量语言模型性能的重要指标。公式如下：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>P</mi><mi>e</mi><mi>r</mi><mi>p</mi><mi>l</mi><mi>e</mi><mi>x</mi><mi>i</mi><mi>t</mi><mi>y</mi><mo stretchy="false">(</mo><mi>M</mi><mi>o</mi><mi>d</mi><mi>e</mi><mi>l</mi><mo stretchy="false">)</mo><mo>=</mo><mi>e</mi><mi>x</mi><mi>p</mi><mrow><mo fence="true">(</mo><mo>−</mo><mfrac><mn>1</mn><mi>N</mi></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><mi>log</mi><mo>⁡</mo><mi>P</mi><mo stretchy="false">(</mo><msub><mi>w</mi><mi>i</mi></msub><mo stretchy="false">)</mo><mo fence="true">)</mo></mrow></mrow><annotation encoding="application/x-tex">Perplexity(Model) = exp\left(-\frac{1}{N} \sum_{i=1}^N \log P(w_i)\right)
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mord mathnormal" style="margin-right:0.02778em;">er</span><span class="mord mathnormal" style="margin-right:0.01968em;">pl</span><span class="mord mathnormal">e</span><span class="mord mathnormal">x</span><span class="mord mathnormal">i</span><span class="mord mathnormal">t</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="mord mathnormal">o</span><span class="mord mathnormal">d</span><span class="mord mathnormal">e</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:3.106em;vertical-align:-1.2777em;"></span><span class="mord mathnormal">e</span><span class="mord mathnormal">x</span><span class="mord mathnormal">p</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size4">(</span></span><span class="mord">−</span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3214em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.8283em;"><span style="top:-1.8723em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.10903em;">N</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.2777em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0269em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size4">)</span></span></span></span></span></span></span></p>
<p>困惑度越低，说明模型对下一个单词的预测越准确。</p>
<h3 id="应用位置内插的操作步骤" tabindex="-1"><a class="header-anchor" href="#应用位置内插的操作步骤"><span>应用位置内插的操作步骤</span></a></h3>
<ol>
<li>✅ <strong>确定目标上下文长度</strong>：设定扩展后的长度 $$L'$$。</li>
<li>✅ <strong>计算缩放比例</strong>：使用公式 $$s = \frac{L}{L'}$$ 确定缩放因子。</li>
<li>✅ <strong>映射位置索引</strong>：将目标位置 $$m$$ 映射至训练范围 $$g(m) = s \cdot m$$。</li>
<li>✅ <strong>验证效果</strong>：测试模型困惑度并根据需求微调。</li>
</ol>
<hr>
<h2 id="常见错误与警告" tabindex="-1"><a class="header-anchor" href="#常见错误与警告"><span>常见错误与警告</span></a></h2>
<p>⚠ <strong>直接外推问题</strong>：使用未见过的位置索引会导致注意力分数异常高，模型性能急剧下降。<br>
⚠ <strong>微调不足</strong>：未充分微调可能导致扩展后的上下文窗口性能未达到预期。</p>
<hr>
<h2 id="💡启发点" tabindex="-1"><a class="header-anchor" href="#💡启发点"><span>💡启发点</span></a></h2>
<ol>
<li>使用位置内插法可以有效扩展语言模型的上下文窗口，而无需重新训练整个模型。</li>
<li>微调是提升效果的关键，尤其是在大规模上下文扩展时。</li>
</ol>
<hr>
<h2 id="📈趋势预测" tabindex="-1"><a class="header-anchor" href="#📈趋势预测"><span>📈趋势预测</span></a></h2>
<p>随着自然语言处理任务对长上下文处理需求的增加，位置内插法可能成为主流技术之一，并与其他扩展方法（如混合位置编码）结合使用以进一步优化性能。</p>
<hr>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul>
<li>测试位置内插法对不同语言模型的适用性。</li>
<li>比较微调与非微调情况下的性能差异。</li>
<li>探索与其他位置编码技术（如绝对位置编码）的结合方式。</li>
</ul>
<hr>
<h2 id="思考-板块" tabindex="-1"><a class="header-anchor" href="#思考-板块"><span>[思考]板块</span></a></h2>
<ol>
<li>在扩展上下文窗口时，是否可以结合其他编码方式（如动态位置编码）进一步优化？</li>
<li>微调步骤是否可以进一步简化，以适应更多低资源场景？</li>
<li>如何利用位置内插法提升多模态任务中的上下文处理能力？</li>
</ol>
<hr>
<blockquote>
<p>原始内容来源：关于位置内插法及其在语言模型中的应用分析（2023）。</p>
</blockquote>
</div></template>


