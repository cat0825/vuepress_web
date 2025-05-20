<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<p><strong>分类</strong>：人工智能、机器学习、自然语言处理<br>
<strong>标签</strong>：NTK插值、RoPE嵌入、上下文扩展<br>
<strong>日期</strong>：2025年3月5日</p>
<h2 id="核心观点总结" tabindex="-1"><a class="header-anchor" href="#核心观点总结"><span>核心观点总结</span></a></h2>
<p>本文探讨了两种针对长上下文扩展的插值方法，分别是<strong>NTK-aware插值</strong>与<strong>NTK-by-parts插值</strong>。它们旨在优化嵌入的缩放方式，使模型更好地处理超长上下文场景。以下是核心内容：</p>
<ul>
<li><strong>NTK-aware插值</strong>通过调整高频和低频区域的缩放比例，结合外推和内插方法，分散插值压力。</li>
<li><strong>NTK-by-parts插值</strong>关注嵌入维度的波长与上下文长度的关系，解决不同维度嵌入在缩放过程中的不均匀分布问题。</li>
</ul>
<hr>
<h2 id="关键内容解析" tabindex="-1"><a class="header-anchor" href="#关键内容解析"><span>关键内容解析</span></a></h2>
<h3 id="ntk-aware插值-高频外推与低频内插" tabindex="-1"><a class="header-anchor" href="#ntk-aware插值-高频外推与低频内插"><span>NTK-aware插值：高频外推与低频内插</span></a></h3>
<h4 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想"><span>核心思想</span></a></h4>
<ul>
<li>高频区域：通过外推（不缩放或轻微缩放）减少插值压力。</li>
<li>低频区域：通过内插（增加缩放比例）优化嵌入调整。</li>
<li>插值公式中引入参数 $$\lambda$$，对最低频项 $$\beta_{d/2-1}/m$$ 进行缩放，使其与内插一致：<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo stretchy="false">(</mo><mi>λ</mi><mi>β</mi><msub><mo stretchy="false">)</mo><mrow><mi>d</mi><mi mathvariant="normal">/</mi><mn>2</mn><mo>−</mo><mn>1</mn></mrow></msub><mi mathvariant="normal">/</mi><mi>m</mi><mo>=</mo><msub><mi>β</mi><mrow><mi>d</mi><mi mathvariant="normal">/</mi><mn>2</mn><mo>−</mo><mn>1</mn></mrow></msub><mi mathvariant="normal">/</mi><mo stretchy="false">(</mo><mi>m</mi><mi mathvariant="normal">/</mi><mi>s</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(\lambda \beta)_{d/2-1}/m = \beta_{d/2-1}/(m/s)
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1052em;vertical-align:-0.3552em;"></span><span class="mopen">(</span><span class="mord mathnormal">λ</span><span class="mord mathnormal" style="margin-right:0.05278em;">β</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">d</span><span class="mord mtight">/2</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span><span class="mord">/</span><span class="mord mathnormal">m</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1052em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05278em;">β</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:-0.0528em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">d</span><span class="mord mtight">/2</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span><span class="mord">/</span><span class="mopen">(</span><span class="mord mathnormal">m</span><span class="mord">/</span><span class="mord mathnormal">s</span><span class="mclose">)</span></span></span></span></span></p>
而 $$\lambda$$ 的计算公式为：<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>λ</mi><mo>=</mo><msup><mi>s</mi><mrow><mn>2</mn><mi mathvariant="normal">/</mi><mo stretchy="false">(</mo><mi>d</mi><mo>−</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></msup></mrow><annotation encoding="application/x-tex">\lambda = s^{2/(d-2)}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">λ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.938em;"></span><span class="mord"><span class="mord mathnormal">s</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.938em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2/</span><span class="mopen mtight">(</span><span class="mord mathnormal mtight">d</span><span class="mbin mtight">−</span><span class="mord mtight">2</span><span class="mclose mtight">)</span></span></span></span></span></span></span></span></span></span></span></span></span></p>
</li>
</ul>
<h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h4>
<ul>
<li>某些维度可能被轻微外推到边界之外，导致微调效果不如传统PI方法。</li>
<li>理论尺度因子 $$s$$ 无法准确描述真实上下文扩展尺度，需设置高于预期值。</li>
</ul>
<hr>
<h3 id="ntk-by-parts插值-波长与上下文长度的关系" tabindex="-1"><a class="header-anchor" href="#ntk-by-parts插值-波长与上下文长度的关系"><span>NTK-by-parts插值：波长与上下文长度的关系</span></a></h3>
<h4 id="核心思想-1" tabindex="-1"><a class="header-anchor" href="#核心思想-1"><span>核心思想</span></a></h4>
<ul>
<li>波长定义：嵌入维度 $$j$$ 上执行完整旋转 $$2\pi$$ 所需的token长度：<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msub><mi>λ</mi><mi>j</mi></msub><mo>=</mo><mfrac><msub><mi>θ</mi><mi>j</mi></msub><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><msub><mi>b</mi><mi>d</mi></msub></mrow><msup><mn>2</mn><mrow><mo stretchy="false">(</mo><mi>j</mi><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msup></mfrac></mrow><annotation encoding="application/x-tex">\lambda_j = \frac{\theta_j}{2\pi} = \frac{2\pi b_d}{2^{(j-1)}}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9805em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal">λ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.0574em;vertical-align:-0.686em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3714em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">2</span><span class="mord mathnormal" style="margin-right:0.03588em;">π</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.0754em;vertical-align:-0.704em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3714em;"><span style="top:-2.296em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.814em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span><span class="mbin mtight">−</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">2</span><span class="mord mathnormal" style="margin-right:0.03588em;">π</span><span class="mord"><span class="mord mathnormal">b</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">d</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.704em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p>
</li>
<li>问题：某些维度的波长可能超过预训练时的最大上下文长度 $$L$$，导致嵌入在旋转域中分布不均匀。
<ul>
<li>长波长维度：嵌入几乎保持绝对位置信息。</li>
<li>短波长维度：嵌入反映相对位置信息。</li>
</ul>
</li>
</ul>
<h4 id="缺点-1" tabindex="-1"><a class="header-anchor" href="#缺点-1"><span>缺点</span></a></h4>
<p>使用统一比例 $$s$$ 对所有维度进行缩放时：</p>
<ul>
<li>嵌入间的局部关系受损，模型难以理解标记间的顺序变化。</li>
<li>导致标记之间的向量方向更加趋同，混淆模型对邻近标记的理解。</li>
</ul>
<hr>
<h3 id="常见错误与注意事项" tabindex="-1"><a class="header-anchor" href="#常见错误与注意事项"><span>常见错误与注意事项</span></a></h3>
<p>⚠ <strong>注意事项</strong>：</p>
<ol>
<li><strong>越界问题</strong>：某些维度可能超出边界，需在实践中调整尺度因子 $$s$$。</li>
<li><strong>波长不均问题</strong>：长波长维度可能保持绝对位置信息，需针对不同维度优化缩放方式。</li>
<li><strong>局部关系损害</strong>：统一缩放比例可能破坏嵌入间的小型关系。</li>
</ol>
<hr>
<h2 id="操作步骤-如何应用ntk-aware和ntk-by-parts插值" tabindex="-1"><a class="header-anchor" href="#操作步骤-如何应用ntk-aware和ntk-by-parts插值"><span>操作步骤：如何应用NTK-aware和NTK-by-parts插值？</span></a></h2>
<p>✅ <strong>步骤1</strong>：分析上下文扩展需求，确定目标长度。<br>
✅ <strong>步骤2</strong>：选择插值方法（NTK-aware或NTK-by-parts）并计算相关参数（如 $$\lambda$$ 和 $$s$$）。<br>
✅ <strong>步骤3</strong>：对高频和低频区域分别进行外推和内插优化。<br>
✅ <strong>步骤4</strong>：验证嵌入分布是否均匀，并调整波长相关参数。<br>
❗ <strong>步骤5</strong>：在微调阶段测试模型性能，确保上下文扩展效果满足预期。</p>
<hr>
<h2 id="💡启发点" tabindex="-1"><a class="header-anchor" href="#💡启发点"><span>💡启发点</span></a></h2>
<ul>
<li>NTK-aware插值结合了外推与内插，提出了针对高频和低频区域的差异化处理方法。</li>
<li>NTK-by-parts插值引入波长概念，从嵌入维度的角度进一步优化了上下文扩展性能。</li>
</ul>
<hr>
<h2 id="📈趋势预测" tabindex="-1"><a class="header-anchor" href="#📈趋势预测"><span>📈趋势预测</span></a></h2>
<p>随着上下文长度需求的增加，未来可能会：</p>
<ol>
<li>开发更精细化的插值方法，解决越界与局部关系损害问题。</li>
<li>提升模型对不同波长嵌入的适配能力，使其能够更灵活地处理超长上下文场景。</li>
</ol>
<hr>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ol>
<li>针对现有模型尝试不同插值方法，并记录性能变化。</li>
<li>开发可视化工具展示嵌入分布与波长关系。</li>
<li>探索更多优化参数（如 $$\lambda$$ 和 $$s$$）的计算公式。</li>
</ol>
<hr>
<h2 id="思考-板块" tabindex="-1"><a class="header-anchor" href="#思考-板块"><span>[思考]板块</span></a></h2>
<ol>
<li>如何进一步优化NTK-aware插值以减少越界问题？</li>
<li>是否可以设计动态调整波长的方法，使其适应不同上下文长度？</li>
<li>在实际应用中，如何平衡绝对位置信息与相对位置信息的重要性？</li>
</ol>
<hr>
<blockquote>
<p>原始出处：<a href="%E5%8E%9F%E6%96%87%E9%93%BE%E6%8E%A5">NTK-aware 插值到 Dynamic NTK插值</a></p>
</blockquote>
</div></template>


