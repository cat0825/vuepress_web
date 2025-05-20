<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li>分类：深度学习</li>
<li>标签：预训练策略，学习率调度，模型优化</li>
<li>日期：2023年10月25日</li>
</ul>
<hr>
<h2 id="核心观点总结" tabindex="-1"><a class="header-anchor" href="#核心观点总结"><span>核心观点总结</span></a></h2>
<p>在深度学习模型的预训练过程中，优化策略至关重要。本文探讨了如何通过调整 <strong>batch_size</strong>、采用 <strong>WSD调度器</strong> 和 <strong>预训练Trick</strong> 来提升模型训练效率，同时总结了四阶段预训练设置的具体流程。</p>
<hr>
<h2 id="重点内容" tabindex="-1"><a class="header-anchor" href="#重点内容"><span>重点内容</span></a></h2>
<h3 id="最优-batch-size-的选择" tabindex="-1"><a class="header-anchor" href="#最优-batch-size-的选择"><span>最优 Batch Size 的选择</span></a></h3>
<ul>
<li><strong>关键点</strong>：Batch size 影响模型收敛速度与资源消耗的平衡。</li>
<li>数据实验表明：
<ul>
<li>Batch size 过大，数据和计算量增加。</li>
<li>Batch size 过小，训练步数增多且损失函数下降受限。</li>
</ul>
</li>
<li>C4 Loss 的规律公式：<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>B</mi><mi>S</mi><mo>=</mo><mi>L</mi><mo>⋅</mo><mn>6.2393</mn><mi mathvariant="normal">/</mi><mo stretchy="false">(</mo><mn>1.2110</mn><mo>×</mo><msup><mn>10</mn><mn>9</mn></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">BS = L \cdot 6.2393 / (1.2110 \times 10^9)
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">BS</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">L</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">6.2393/</span><span class="mopen">(</span><span class="mord">1.2110</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.1141em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">9</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></span></p>
</li>
<li><img src="/img/user/附件/Pasted image 20250409220613.png" alt="Pasted image 20250409220613.png"></li>
</ul>
<h3 id="wsd-调度器的三阶段学习率策略" tabindex="-1"><a class="header-anchor" href="#wsd-调度器的三阶段学习率策略"><span>WSD 调度器的三阶段学习率策略</span></a></h3>
<ul>
<li><strong>分阶段特点</strong>：
<ol>
<li><strong>快速收敛阶段</strong>（Warmup）：学习率线性上升。</li>
<li><strong>稳定阶段</strong>（Stable）：保持最大学习率。</li>
<li><strong>退火阶段</strong>（Decay）：采用余弦退火算法逐步降低学习率。</li>
</ol>
</li>
<li>学习率公式：<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>l</mi><mi>r</mi><mo stretchy="false">(</mo><mi>s</mi><mo stretchy="false">)</mo><mo>=</mo><mrow><mo fence="true">{</mo><mtable rowspacing="0.36em" columnalign="left left" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mi>s</mi><mi>W</mi></mfrac><mo>⋅</mo><mi>η</mi><mo separator="true">,</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mi>s</mi><mo>&lt;</mo><mi>W</mi></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mi>η</mi><mo separator="true">,</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mi>W</mi><mo>≤</mo><mi>s</mi><mo>&lt;</mo><mi>S</mi></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>s</mi><mo>−</mo><mi>S</mi><mo stretchy="false">)</mo><mo>⋅</mo><mi>η</mi><mo separator="true">,</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mi>S</mi><mo>≤</mo><mi>s</mi><mo>&lt;</mo><mi>S</mi><mo>+</mo><mi>D</mi></mrow></mstyle></mtd></mtr></mtable></mrow></mrow><annotation encoding="application/x-tex">lr(s) =
\begin{cases} 
  \frac{s}{W} \cdot \eta, &amp; s &lt; W \\ 
  \eta, &amp; W \leq s &lt; S \\ 
  f(s - S) \cdot \eta, &amp; S \leq s &lt; S + D
\end{cases}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mopen">(</span><span class="mord mathnormal">s</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:4.32em;vertical-align:-1.91em;"></span><span class="minner"><span class="mopen"><span class="delimsizing mult"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:2.35em;"><span style="top:-2.2em;"><span class="pstrut" style="height:3.15em;"></span><span class="delimsizinginner delim-size4"><span>⎩</span></span></span><span style="top:-2.192em;"><span class="pstrut" style="height:3.15em;"></span><span style="height:0.316em;width:0.8889em;"><svg xmlns="http://www.w3.org/2000/svg" width="0.8889em" height="0.316em" style="width:0.8889em" viewBox="0 0 888.89 316" preserveAspectRatio="xMinYMin"><path d="M384 0 H504 V316 H384z M384 0 H504 V316 H384z"/></svg></span></span><span style="top:-3.15em;"><span class="pstrut" style="height:3.15em;"></span><span class="delimsizinginner delim-size4"><span>⎨</span></span></span><span style="top:-4.292em;"><span class="pstrut" style="height:3.15em;"></span><span style="height:0.316em;width:0.8889em;"><svg xmlns="http://www.w3.org/2000/svg" width="0.8889em" height="0.316em" style="width:0.8889em" viewBox="0 0 888.89 316" preserveAspectRatio="xMinYMin"><path d="M384 0 H504 V316 H384z M384 0 H504 V316 H384z"/></svg></span></span><span style="top:-4.6em;"><span class="pstrut" style="height:3.15em;"></span><span class="delimsizinginner delim-size4"><span>⎧</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.85em;"><span></span></span></span></span></span></span><span class="mord"><span class="mtable"><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:2.41em;"><span style="top:-4.41em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6954em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">W</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">s</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">η</span><span class="mpunct">,</span></span></span><span style="top:-2.97em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">η</span><span class="mpunct">,</span></span></span><span style="top:-1.53em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">s</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">η</span><span class="mpunct">,</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.91em;"><span></span></span></span></span></span><span class="arraycolsep" style="width:1em;"></span><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:2.41em;"><span style="top:-4.41em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mord mathnormal">s</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">W</span></span></span><span style="top:-2.97em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">W</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">s</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">S</span></span></span><span style="top:-1.53em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">s</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.91em;"><span></span></span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p>
<ul>
<li>
<p v-pre class='katex-block'><span class="katex-error" title="ParseError: KaTeX parse error: Can&#x27;t use function &#x27;$&#x27; in math mode at position 5: \eta$̲$：最大学习率
" style="color:#cc0000">\eta$$：最大学习率
</span></p>
</li>
<li>
<p v-pre class='katex-block'><span class="katex-error" title="ParseError: KaTeX parse error: Can&#x27;t use function &#x27;$&#x27; in math mode at position 9: f(s - S)$̲$：关于 $$s$$ 的减函数…" style="color:#cc0000">f(s - S)$$：关于 $$s$$ 的减函数，范围 $$0 &lt; f(s - S) \leq 1
</span></p>
</li>
</ul>
</li>
</ul>
<h3 id="提高效率的预训练技巧" tabindex="-1"><a class="header-anchor" href="#提高效率的预训练技巧"><span>提高效率的预训练技巧</span></a></h3>
<ul>
<li><strong>显存优化</strong>：
<ul>
<li>若显存充足，尽量避免引入复杂并行技术（如 tensor_parallel）。</li>
<li>不开启 <strong>offload</strong> 和 <strong>重算</strong> 可节省时间。</li>
</ul>
</li>
<li><strong>指令数据</strong>：
<ul>
<li>加入更多指令数据有助于提升模型性能。</li>
</ul>
</li>
</ul>
<hr>
<h2 id="✅-四阶段预训练设置流程" tabindex="-1"><a class="header-anchor" href="#✅-四阶段预训练设置流程"><span>✅ 四阶段预训练设置流程</span></a></h2>
<ol>
<li><strong>Warmup 阶段</strong>：
<ul>
<li>学习率缓慢上升到最大值。</li>
</ul>
</li>
<li><strong>中期稳定阶段</strong>：
<ul>
<li>使用较大的学习率，是否引入衰减需视实验而定。</li>
</ul>
</li>
<li><strong>后期适应阶段</strong>：
<ul>
<li>改变 RoPE 的 base 频率，增加文本长度，让模型适应长文本任务。</li>
</ul>
</li>
<li><strong>收尾退火阶段</strong>：
<ul>
<li>使用高质量数据（如 IFT 数据）强化模型能力，为 benchmark 测试做准备。</li>
</ul>
</li>
</ol>
<hr>
<h2 id="⚠-常见错误与注意事项" tabindex="-1"><a class="header-anchor" href="#⚠-常见错误与注意事项"><span>⚠ 常见错误与注意事项</span></a></h2>
<blockquote>
<p><strong>警告区块</strong></p>
</blockquote>
<ul>
<li>忽视 batch size 对训练效率的影响，可能导致资源浪费或性能不足。</li>
<li>在显存不足时强行引入复杂并行技术，可能引发调试困难和性能下降。</li>
</ul>
<hr>
<h2 id="📈-趋势预测" tabindex="-1"><a class="header-anchor" href="#📈-趋势预测"><span>📈 趋势预测</span></a></h2>
<p>未来预训练策略可能会更加注重以下方向：</p>
<ol>
<li>自动化调参工具的普及，减少人工调整成本。</li>
<li>更智能的数据采样方法，提升高质量数据使用比例。</li>
<li>多模型协同训练策略（如多任务联合训练）的进一步发展。</li>
</ol>
<hr>
<h2 id="思考-延伸问题" tabindex="-1"><a class="header-anchor" href="#思考-延伸问题"><span>[思考] 延伸问题</span></a></h2>
<ol>
<li>如何在不同硬件条件下灵活调整 batch size 和学习率？</li>
<li>是否存在更高效的调度器替代 WSD 调度器？</li>
<li>长文本适应性优化是否能迁移至多模态任务中？</li>
</ol>
<hr>
<blockquote>
<p>原文出处：深度学习预训练策略文档</p>
</blockquote>
<hr>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 实验不同 batch size 对小模型的影响。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 测试 WSD 调度器与余弦退火算法在大规模任务中的性能差异。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 探索高效的显存管理技术以支持更大规模的预训练。</label></li>
</ul>
</div></template>


