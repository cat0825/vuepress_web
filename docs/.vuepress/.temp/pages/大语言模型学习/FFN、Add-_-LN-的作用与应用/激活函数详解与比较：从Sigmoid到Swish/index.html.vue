<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li><strong>分类</strong>：深度学习基础</li>
<li><strong>标签</strong>：激活函数、梯度消失、ReLU、Swish</li>
<li><strong>日期</strong>：2025年3月2日</li>
</ul>
<hr>
<h2 id="内容摘要" tabindex="-1"><a class="header-anchor" href="#内容摘要"><span>内容摘要</span></a></h2>
<p>在深度学习中，激活函数是神经网络的核心组件之一，它决定了神经元的输出以及模型的学习能力。本文对常见的激活函数进行了总结，包括它们的优缺点、公式以及适用场景。</p>
<hr>
<h2 id="常见激活函数解析" tabindex="-1"><a class="header-anchor" href="#常见激活函数解析"><span>常见激活函数解析</span></a></h2>
<p>以下是完善后的公式格式，确保在Obsidian中正常显示：</p>
<hr>
<h3 id="sigmoid" tabindex="-1"><a class="header-anchor" href="#sigmoid"><span>Sigmoid</span></a></h3>
<ul>
<li><strong>公式</strong>：<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mo>−</mo><mi>x</mi></mrow></msup></mrow></mfrac></mrow><annotation encoding="application/x-tex">f(x) = \frac{1}{1 + e^{-x}}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.0908em;vertical-align:-0.7693em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3214em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6973em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mathnormal mtight">x</span></span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.7693em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p>
</li>
<li><strong>优点</strong>：
<ul>
<li>能够将输入值映射到 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(0,1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose">)</span></span></span></span> 之间，适合二分类问题。</li>
</ul>
</li>
<li><strong>缺点</strong>：
<ul>
<li>梯度消失问题：当输入值较大或较小时，梯度接近于 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>0</mn></mrow><annotation encoding="application/x-tex">0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>，导致训练效率低下。</li>
<li>输出非零中心：权重更新可能偏向特定方向。</li>
<li>指数运算耗费计算资源。
<img src="/img/user/附件/Pasted image 20250407113132.png" alt="Pasted image 20250407113132.png"></li>
</ul>
</li>
</ul>
<hr>
<h3 id="tanh" tabindex="-1"><a class="header-anchor" href="#tanh"><span>Tanh</span></a></h3>
<ul>
<li><strong>公式</strong>：<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><msup><mi>e</mi><mrow><mo>−</mo><mi>x</mi></mrow></msup></mrow><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><msup><mi>e</mi><mrow><mo>−</mo><mi>x</mi></mrow></msup></mrow></mfrac></mrow><annotation encoding="application/x-tex">f(x) = \frac{e^{x} - e^{-x}}{e^{x} + e^{-x}}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.2177em;vertical-align:-0.7693em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.4483em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.5904em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">x</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6973em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mathnormal mtight">x</span></span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">x</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7713em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mathnormal mtight">x</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.7693em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p>
</li>
<li><strong>优点</strong>：
<ul>
<li>输出值在 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mo>−</mo><mn>1</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(-1,1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">−</span><span class="mord">1</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose">)</span></span></span></span> 之间，零为中心，权重更新更稳定。</li>
</ul>
</li>
<li><strong>缺点</strong>：
<ul>
<li>梯度饱和问题仍然存在。</li>
<li>同样需要指数运算，计算资源消耗较大。
<img src="/img/user/附件/Pasted image 20250407113141.png" alt="Pasted image 20250407113141.png"></li>
</ul>
</li>
</ul>
<hr>
<h3 id="relu" tabindex="-1"><a class="header-anchor" href="#relu"><span>ReLU</span></a></h3>
<ul>
<li><strong>公式</strong>：<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mi>max</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn>0</mn><mo separator="true">,</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(x) = \max(0, x)
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">max</span><span class="mopen">(</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span></span></p>
</li>
<li><strong>优点</strong>：
<ul>
<li>解决了梯度消失问题，输入为正时不会饱和。</li>
<li>计算简单，不需要指数运算。</li>
</ul>
</li>
<li><strong>缺点</strong>：
<ul>
<li>Dead ReLU 问题：当输入为负时，梯度为 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>0</mn></mrow><annotation encoding="application/x-tex">0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>，导致神经元“死亡”，无法更新参数。
<img src="/img/user/附件/Pasted image 20250407113149.png" alt="Pasted image 20250407113149.png"></li>
</ul>
</li>
</ul>
<hr>
<h3 id="leaky-relu" tabindex="-1"><a class="header-anchor" href="#leaky-relu"><span>Leaky ReLU</span></a></h3>
<ul>
<li><strong>公式</strong>：<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mi>max</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>α</mi><mi>x</mi><mo separator="true">,</mo><mi>x</mi><mo stretchy="false">)</mo><mspace width="1em"/><mo stretchy="false">(</mo><mi>α</mi><mtext> 通常设为 </mtext><mn>0.01</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(x) = \max(\alpha x, x) \quad (\alpha\ \text{通常设为}\ 0.01)
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">max</span><span class="mopen">(</span><span class="mord mathnormal">αx</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:1em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mspace"> </span><span class="mord text"><span class="mord cjk_fallback">通常设为</span></span><span class="mspace"> </span><span class="mord">0.01</span><span class="mclose">)</span></span></span></span></span></p>
</li>
<li><strong>优点</strong>：
<ul>
<li>改进了 ReLU 的 Dead ReLU 问题，使负输入也能产生非零梯度。</li>
</ul>
</li>
<li><strong>缺点</strong>：
<ul>
<li>参数 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>α</mi></mrow><annotation encoding="application/x-tex">\alpha</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span></span></span></span> 需要人工设置。</li>
<li>在复杂分类任务中表现可能不够优秀。
<img src="/img/user/附件/Pasted image 20250407113156.png" alt="Pasted image 20250407113156.png"></li>
</ul>
</li>
</ul>
<hr>
<h3 id="elu" tabindex="-1"><a class="header-anchor" href="#elu"><span>ELU</span></a></h3>
<ul>
<li><strong>公式</strong>：<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mrow><mo fence="true">{</mo><mtable rowspacing="0.36em" columnalign="left left" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mi>α</mi><mo stretchy="false">(</mo><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo><mo separator="true">,</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mi>x</mi><mo>≤</mo><mn>0</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mi>x</mi><mo separator="true">,</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mi>x</mi><mo>&gt;</mo><mn>0</mn></mrow></mstyle></mtd></mtr></mtable></mrow></mrow><annotation encoding="application/x-tex">f(x) = 
\begin{cases} 
\alpha(e^x - 1), &amp; x \leq 0 \\ 
x, &amp; x &gt; 0 
\end{cases}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:3em;vertical-align:-1.25em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size4">{</span></span><span class="mord"><span class="mtable"><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.69em;"><span style="top:-3.69em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">x</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span><span class="mclose">)</span><span class="mpunct">,</span></span></span><span style="top:-2.25em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="mpunct">,</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.19em;"><span></span></span></span></span></span><span class="arraycolsep" style="width:1em;"></span><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.69em;"><span style="top:-3.69em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">0</span></span></span><span style="top:-2.25em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.19em;"><span></span></span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p>
</li>
<li><strong>优点</strong>：
<ul>
<li>输出均值接近零，加快学习速度。</li>
<li>对较小输入饱和至负值，有助于减少前向传播的变异。</li>
</ul>
</li>
<li><strong>缺点</strong>：
<ul>
<li>指数运算导致计算效率较低。
<img src="/img/user/附件/Pasted image 20250407113203.png" alt="Pasted image 20250407113203.png"></li>
</ul>
</li>
</ul>
<hr>
<h3 id="swish" tabindex="-1"><a class="header-anchor" href="#swish"><span>Swish</span></a></h3>
<ul>
<li><strong>公式</strong>：<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi><mo>⋅</mo><mi>σ</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mspace width="1em"/><mtext>其中 </mtext><mi>σ</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mtext> 为 Sigmoid 函数</mtext></mrow><annotation encoding="application/x-tex">f(x) = x \cdot \sigma(x) \quad \text{其中}\ \sigma(x)\ \text{为 Sigmoid 函数}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4445em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">σ</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:1em;"></span><span class="mord text"><span class="mord cjk_fallback">其中</span></span><span class="mspace"> </span><span class="mord mathnormal" style="margin-right:0.03588em;">σ</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace"> </span><span class="mord text"><span class="mord cjk_fallback">为</span><span class="mord"> Sigmoid </span><span class="mord cjk_fallback">函数</span></span></span></span></span></span></p>
</li>
<li><strong>优点</strong>：
<ul>
<li>无界性防止训练过程中梯度过早饱和。</li>
<li>有界性增强正则化能力，减少过拟合。</li>
<li>在复杂任务中表现更优。</li>
</ul>
</li>
<li><strong>缺点</strong>：
<ul>
<li>相较 ReLU，计算复杂度稍高。</li>
</ul>
</li>
</ul>
<p><img src="/img/user/附件/Pasted image 20250407113210.png" alt="Pasted image 20250407113210.png"></p>
<hr>
<p><img src="/img/user/附件/Pasted image 20250407113425.png" alt="Pasted image 20250407113425.png"></p>
<h2 id="激活函数优缺点对比表" tabindex="-1"><a class="header-anchor" href="#激活函数优缺点对比表"><span>激活函数优缺点对比表</span></a></h2>
<table>
<thead>
<tr>
<th>激活函数</th>
<th>优点</th>
<th>缺点</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sigmoid</td>
<td>简单易用，适合二分类问题</td>
<td>梯度消失，输出非零中心，计算资源消耗大</td>
</tr>
<tr>
<td>Tanh</td>
<td>零为中心，权重更新更稳定</td>
<td>梯度饱和问题，指数运算耗费资源</td>
</tr>
<tr>
<td>ReLU</td>
<td>快速收敛，解决梯度消失问题</td>
<td>Dead ReLU问题，输出非零中心</td>
</tr>
<tr>
<td>Leaky ReLU</td>
<td>改善Dead ReLU问题，负输入有梯度</td>
<td>α需人工设置，复杂分类效果一般</td>
</tr>
<tr>
<td>ELU</td>
<td>输出均值接近零，加快学习速度</td>
<td>指数运算效率低</td>
</tr>
<tr>
<td>Swish</td>
<td>强正则化能力，无界性防止梯度饱和，适合复杂任务</td>
<td>相较ReLU计算复杂度稍高</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="常见错误与警示区块" tabindex="-1"><a class="header-anchor" href="#常见错误与警示区块"><span>常见错误与警示区块</span></a></h2>
<p>⚠️ <strong>常见错误：</strong></p>
<ol>
<li>忽略激活函数选择对模型性能的影响。</li>
<li>在数据量较小时使用耗资源的激活函数（如ELU）。</li>
<li>未处理Dead ReLU问题导致部分神经元无效。</li>
</ol>
<hr>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<p>✅ 确认任务类型（分类/回归）选择合适激活函数。<br>
✅ 在调试过程中观察梯度变化是否出现梯度消失或爆炸。<br>
✅ 尝试不同激活函数组合以优化模型性能。</p>
<hr>
<h2 id="思考与启发" tabindex="-1"><a class="header-anchor" href="#思考与启发"><span>思考与启发</span></a></h2>
<p>💡 激活函数的选择不仅影响模型性能，还直接影响训练效率。以下是一些值得思考的问题：</p>
<ol>
<li>是否可以设计一个自适应激活函数，根据输入动态调整参数？</li>
<li>Swish是否能完全取代ReLU成为新的默认选择？</li>
<li>如何结合激活函数与优化算法进一步提升模型收敛速度？</li>
</ol>
<hr>
<blockquote>
<p>来源：深度学习相关文档与技术资料整理</p>
</blockquote>
</div></template>


