<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li>分类：自然语言处理</li>
<li>标签：多轮对话、数据构造、模型优化、伪多轮数据</li>
<li>日期：2023年11月1日</li>
</ul>
<h2 id="核心观点总结" tabindex="-1"><a class="header-anchor" href="#核心观点总结"><span>核心观点总结</span></a></h2>
<p>本文讨论了如何通过多轮对话数据的构造和优化来提升对话模型的表现。重点在于如何判断和利用真多轮与伪多轮数据，以及如何通过合成和飞轮机制来增强数据集。此外，还介绍了通过样本拆分和合并来加速计算的策略。</p>
<h2 id="重点段落" tabindex="-1"><a class="header-anchor" href="#重点段落"><span>重点段落</span></a></h2>
<h3 id="多轮对话数据判断" tabindex="-1"><a class="header-anchor" href="#多轮对话数据判断"><span>多轮对话数据判断</span></a></h3>
<p>✅ 首先，训练一个小的判别模型来判断session中的每个turn是否连续。连续为1，不连续为0。主题不变的真多轮数据直接加入训练，而主题变化的伪多轮数据则选择性加入，以提高模型学习难度。</p>
<h3 id="多轮对话数据合成" tabindex="-1"><a class="header-anchor" href="#多轮对话数据合成"><span>多轮对话数据合成</span></a></h3>
<p>✅ 如果现有数据量不足，可以利用单轮对话合成多轮对话数据。通过第一轮的数据构造第二轮的提示（prompt），可以使用模板或GPT进行合成，然后继续合成回答。</p>
<h3 id="多轮计算loss" tabindex="-1"><a class="header-anchor" href="#多轮计算loss"><span>多轮计算loss<img src="/img/user/附件/Pasted image 20250411130451.png" alt="Pasted image 20250411130451.png"></span></a></h3>
<p>✅ 假设一个对话中有3轮user和bot的交互，可以构建三个样本。计算loss时，只计算bot response部分，公式为：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mtext>loss</mtext><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mrow><mo fence="true">(</mo><msub><mi>n</mi><mn>1</mn></msub><mo>⋅</mo><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mo>⋅</mo><msub><mi>l</mi><mn>2</mn></msub><mo>+</mo><msub><mi>n</mi><mn>3</mn></msub><mo>⋅</mo><msub><mi>l</mi><mn>3</mn></msub><mo fence="true">)</mo></mrow></mrow><annotation encoding="application/x-tex">\text{loss} = \frac{1}{3} \left( n_1 \cdot l_1 + n_2 \cdot l_2 + n_3 \cdot l_3 \right)
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord text"><span class="mord">loss</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.0074em;vertical-align:-0.686em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3214em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">3</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0197em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0197em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0197em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose delimcenter" style="top:0em;">)</span></span></span></span></span></span></p>
<p>其中，$$l_i$$表示第$$i$$个样本的loss，$$n_i$$表示第$$i$$个样本输出的token数量。</p>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<p>⚠️ 如果将多个样本合并为一个样本进行计算，需注意token_ids和labels的设置，否则会导致loss计算错误。</p>
<h2 id="💡启发点" tabindex="-1"><a class="header-anchor" href="#💡启发点"><span>💡启发点</span></a></h2>
<ul>
<li>适量伪多轮数据能够有效提升模型的学习能力。</li>
<li>数据飞轮机制有助于持续优化模型。</li>
</ul>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul>
<li>评估现有对话数据是否符合真多轮和伪多轮的标准。</li>
<li>实施数据合成策略以扩大训练集。</li>
<li>优化loss计算方法以提高训练效率。</li>
</ul>
<h2 id="📈趋势预测" tabindex="-1"><a class="header-anchor" href="#📈趋势预测"><span>📈趋势预测</span></a></h2>
<p>随着对话系统需求的增加，未来在多轮对话数据的自动构造和优化方面将会有更多创新技术出现。</p>
<h2 id="后续追踪" tabindex="-1"><a class="header-anchor" href="#后续追踪"><span>后续追踪</span></a></h2>
<ul>
<li>探索更多关于伪多轮数据对模型影响的实证研究。</li>
<li>研究如何更高效地实现多轮对话数据飞轮机制。</li>
</ul>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考"><span>[思考]</span></a></h2>
<ul>
<li>如何进一步提高伪多轮数据的质量？</li>
<li>有哪些新的方法可以自动识别和合成多轮对话？</li>
<li>在不同应用场景下，多轮对话模型需要做哪些调整？</li>
</ul>
<blockquote>
<p>原始出处：本文内容基于提供的文本进行总结与整理。
[[大语言模型学习/后训练/SFT监督微调/STF训练/多轮对话专项提升2|多轮对话专项提升2]]</p>
</blockquote>
</div></template>


