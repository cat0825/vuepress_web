<template><div><ul>
<li><strong>分类</strong>：深度学习</li>
<li><strong>标签</strong>：位置编码，RoPE，ALiBi，Transformer</li>
<li><strong>日期</strong>：2025年3月5日</li>
</ul>
<hr>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>在深度学习中，位置编码是Transformer模型中不可或缺的一部分，用于引入序列的位置信息。本文介绍了两种先进的技术：<strong>旋转式位置编码（RoPE）<strong>和</strong>ALiBi（Attention Linear Bias）</strong>，它们在不同场景下优化了位置嵌入的表现。</p>
<hr>
<h2 id="核心内容" tabindex="-1"><a class="header-anchor" href="#核心内容"><span>核心内容</span></a></h2>
<h3 id="_1-什么是rope" tabindex="-1"><a class="header-anchor" href="#_1-什么是rope"><span>1. 什么是RoPE？</span></a></h3>
<p>RoPE（Rotary Position Embedding）通过<strong>绝对位置编码</strong>的方式实现了<strong>相对位置编码</strong>，同时结合了两者的优点。其步骤如下：</p>
<p>✅ <strong>核心原理</strong>：</p>
<ul>
<li>RoPE将位置信息注入到Attention机制中的查询向量 $$q$$ 和键向量 $$k$$ 中。</li>
<li>对 $$q$$ 和 $$k$$ 应用旋转变换后计算点积，从而引入相对位置信息。</li>
</ul>
<p>✅ <strong>二维情况下的公式</strong>：
RoPE的核心公式为：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><msub><mi>q</mi><mi>m</mi></msub><mo separator="true">,</mo><mi>m</mi><mo stretchy="false">)</mo><mo>=</mo><msub><mi>R</mi><mi>m</mi></msub><mi>q</mi><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mi>cos</mi><mo>⁡</mo><mi>m</mi><mi>θ</mi></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mi>sin</mi><mo>⁡</mo><mi>m</mi><mi>θ</mi></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mi>sin</mi><mo>⁡</mo><mi>m</mi><mi>θ</mi></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mi>cos</mi><mo>⁡</mo><mi>m</mi><mi>θ</mi></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><msub><mi>q</mi><mn>0</mn></msub></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><msub><mi>q</mi><mn>1</mn></msub></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow><annotation encoding="application/x-tex">f(q_m, m) = R_m q = 
\begin{bmatrix}
\cos m\theta &amp; \sin m\theta \\
-\sin m\theta &amp; \cos m\theta
\end{bmatrix}
\begin{bmatrix}
q_0 \\
q_1
\end{bmatrix}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">m</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">m</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0077em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">m</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.03588em;">q</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.4em;vertical-align:-0.95em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">[</span></span><span class="mord"><span class="mtable"><span class="col-align-c"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.45em;"><span style="top:-3.61em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mop">cos</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">m</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span></span></span><span style="top:-2.41em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">−</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop">sin</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">m</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.95em;"><span></span></span></span></span></span><span class="arraycolsep" style="width:0.5em;"></span><span class="arraycolsep" style="width:0.5em;"></span><span class="col-align-c"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.45em;"><span style="top:-3.61em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mop">sin</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">m</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span></span></span><span style="top:-2.41em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mop">cos</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">m</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.95em;"><span></span></span></span></span></span></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size3">]</span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">[</span></span><span class="mord"><span class="mtable"><span class="col-align-c"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.45em;"><span style="top:-3.61em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-2.41em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.95em;"><span></span></span></span></span></span></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size3">]</span></span></span></span></span></span></span></p>
<p>其中，$$m$$ 是位置信息，$$\theta$$ 是旋转角度。</p>
<p>✅ <strong>高维扩展</strong>：
对于偶数维向量，RoPE可以通过二维拼接扩展到高维空间。</p>
<h2 id="💡-启发点-由于旋转矩阵-r-m-是正交矩阵-不改变向量模长-因此rope不会破坏模型的稳定性。" tabindex="-1"><a class="header-anchor" href="#💡-启发点-由于旋转矩阵-r-m-是正交矩阵-不改变向量模长-因此rope不会破坏模型的稳定性。"><span>💡 <strong>启发点</strong>：
由于旋转矩阵 $$R_m$$ 是正交矩阵，不改变向量模长，因此RoPE不会破坏模型的稳定性。
<img src="/img/user/附件/Pasted image 20250407162134.png" alt="Pasted image 20250407162134.png"></span></a></h2>
<h3 id="_2-什么是alibi" tabindex="-1"><a class="header-anchor" href="#_2-什么是alibi"><span>2. 什么是ALiBi？</span></a></h3>
<p>ALiBi（Attention Linear Bias）是一种更简单的改进方法，通过在Softmax之前对Attention分数进行线性偏置调整来引入位置信息。</p>
<p>✅ <strong>公式表达</strong>：
将原始Attention计算：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msubsup><mi>q</mi><mi>m</mi><mi>T</mi></msubsup><msub><mi>k</mi><mi>n</mi></msub></mrow><annotation encoding="application/x-tex">q_m^T k_n
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1383em;vertical-align:-0.247em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8913em;"><span style="top:-2.453em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">m</span></span></span><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0315em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></p>
<p>修改为：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msubsup><mi>q</mi><mi>m</mi><mi>T</mi></msubsup><msub><mi>k</mi><mi>n</mi></msub><mo>−</mo><mi>λ</mi><mi mathvariant="normal">∣</mi><mi>m</mi><mo>−</mo><mi>n</mi><mi mathvariant="normal">∣</mi></mrow><annotation encoding="application/x-tex">q_m^T k_n - \lambda |m-n|
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1383em;vertical-align:-0.247em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8913em;"><span style="top:-2.453em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">m</span></span></span><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0315em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">λ</span><span class="mord">∣</span><span class="mord mathnormal">m</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">n</span><span class="mord">∣</span></span></span></span></span></p>
<p>其中：</p>
<ul>
<li>
<p v-pre class='katex-block'><span class="katex-error" title="ParseError: KaTeX parse error: Can&#x27;t use function &#x27;$&#x27; in math mode at position 12: \lambda &gt; 0$̲$ 是超参数，用于控制位置偏移…" style="color:#cc0000">\lambda &gt; 0$$ 是超参数，用于控制位置偏移的权重。
</span></p>
</li>
<li>每个Attention Head可以使用不同的 $$\lambda$$ 值。</li>
</ul>
<p>💡 <strong>启发点</strong>：
ALiBi的设计类似于局部注意力机制，但它通过简单的线性偏置实现了更高效的相对位置编码。
<img src="/img/user/附件/Pasted image 20250407162155.png" alt="Pasted image 20250407162155.png"></p>
<hr>
<h3 id="_3-rope与alibi的对比" tabindex="-1"><a class="header-anchor" href="#_3-rope与alibi的对比"><span>3. RoPE与ALiBi的对比</span></a></h3>
<table>
<thead>
<tr>
<th>特性</th>
<th>RoPE</th>
<th>ALiBi</th>
</tr>
</thead>
<tbody>
<tr>
<td>实现方式</td>
<td>通过旋转矩阵引入相对位置信息</td>
<td>在Softmax前添加线性偏置</td>
</tr>
<tr>
<td>复杂度</td>
<td>较高</td>
<td>较低</td>
</tr>
<tr>
<td>模型稳定性</td>
<td>不改变向量模长，稳定性较好</td>
<td>简单易用，但需要调整超参数</td>
</tr>
<tr>
<td>应用场景</td>
<td>高维向量嵌入</td>
<td>长序列任务</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<p>⚠ <strong>矩阵维度匹配问题</strong>：在实现RoPE时，需确保旋转矩阵与输入向量维度一致，否则会导致计算错误。</p>
<p>⚠ <strong>超参数选择</strong>：对于ALiBi，选择不合适的 $$\lambda$$ 值可能导致模型无法有效学习。</p>
<hr>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考"><span>思考</span></a></h2>
<ol>
<li>RoPE和ALiBi是否可以结合使用，以同时提升模型效率和性能？</li>
<li>ALiBi是否适用于所有类型的Transformer模型，尤其是多模态任务？</li>
<li>对于长序列任务，这两种方法在性能上的差异如何？</li>
</ol>
<hr>
<blockquote>
<p>原文出处：[选自深度学习技术文档]</p>
</blockquote>
<hr>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ol>
<li>实现一个简单的RoPE和ALiBi代码示例，测试其效果。</li>
<li>在长文本生成任务中对比两种方法的表现。</li>
<li>探索RoPE应用于非Transformer架构（如RNN）的可能性。</li>
</ol>
<hr>
<h2 id="后续追踪" tabindex="-1"><a class="header-anchor" href="#后续追踪"><span>后续追踪</span></a></h2>
<p>📈 <strong>趋势预测</strong>：随着Transformer模型在大规模预训练中的广泛应用，RoPE和ALiBi可能会进一步优化以适配超长序列任务。</p>
<p>🔍 <strong>研究计划</strong>：尝试在多模态模型（如CLIP）中引入RoPE或ALiBi，观察其对图像和文本融合效果的影响。</p>
</div></template>


