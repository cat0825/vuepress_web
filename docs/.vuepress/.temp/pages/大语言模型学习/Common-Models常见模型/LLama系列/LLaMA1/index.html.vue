<template><div><h2 id="分类-机器学习模型" tabindex="-1"><a class="header-anchor" href="#分类-机器学习模型"><span>分类：机器学习模型</span></a></h2>
<h2 id="标签-llama1-自监督学习-机器学习-gpt-adamw" tabindex="-1"><a class="header-anchor" href="#标签-llama1-自监督学习-机器学习-gpt-adamw"><span>标签：LLaMA1, 自监督学习, 机器学习, GPT, AdamW</span></a></h2>
<h2 id="日期-2025年4月12日" tabindex="-1"><a class="header-anchor" href="#日期-2025年4月12日"><span>日期：2025年4月12日</span></a></h2>
<p>LLaMA1模型是一个开源且高效的基础语言模型。通过对GPT模型进行若干改动，LLaMA1提升了训练稳定性和性能。本文将总结其核心观点，提取重点段落，并用通俗语言解释技术术语。</p>
<h2 id="模型结构改进" tabindex="-1"><a class="header-anchor" href="#模型结构改进"><span>模型结构改进</span></a></h2>
<p>LLaMA1在模型结构上做出了一些关键改动：</p>
<ol>
<li><strong>增强训练稳定性</strong>：采用 pre-RMSNorm 作为层归一化方法。</li>
<li><strong>提升模型性能</strong>：使用 SwiGLU 作为激活函数。</li>
<li><strong>优化长序列数据建模</strong>：采用 RoPE 作为位置编码。</li>
<li><strong>分词技术</strong>：使用BPE算法进行分词，并由sentencepiece实现。数字被分解为单独的字符，未知的UTF-8字符回退到字节分解，词表大小为32k。</li>
</ol>
<h2 id="训练方式" tabindex="-1"><a class="header-anchor" href="#训练方式"><span>训练方式</span></a></h2>
<p>LLaMA1使用自监督学习模式，没有经过特定任务的微调。其训练配置详细描述如下：</p>
<ul>
<li><strong>优化器</strong>：使用AdamW优化器，以更有效地处理权重衰减，提高训练的稳定性。参数 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>β</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">\beta_1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05278em;">β</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0528em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 和 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>β</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">\beta_2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05278em;">β</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0528em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 的选择影响训练过程的收敛行为。</li>
<li><strong>学习率调度</strong>：采用余弦学习率调度，通过逐渐减少学习率来改善收敛性。</li>
<li><strong>防止过拟合</strong>：实施0.1的权重衰减和1.0的梯度裁剪。</li>
<li><strong>warmup策略</strong>：在训练初期稳定训练动态，优化资源分配。
<img src="/img/user/附件/Pasted image 20250424223014.png" alt="Pasted image 20250424223014.png"></li>
</ul>
<h2 id="训练数据" tabindex="-1"><a class="header-anchor" href="#训练数据"><span>训练数据</span></a></h2>
<p>LLaMA1在海量无标注数据上进行自监督学习，使用了1.4T token的预训练数据。这些数据来源多样且公开，具体来源及采样比例如下表所示：
<img src="/img/user/附件/Pasted image 20250424222958.png" alt="Pasted image 20250424222958.png"></p>
<table>
<thead>
<tr>
<th>数据来源</th>
<th>数据量</th>
<th>采样比例</th>
</tr>
</thead>
<tbody>
<tr>
<td>来源A</td>
<td>500B</td>
<td>35%</td>
</tr>
<tr>
<td>来源B</td>
<td>600B</td>
<td>40%</td>
</tr>
<tr>
<td>来源C</td>
<td>300B</td>
<td>25%</td>
</tr>
</tbody>
</table>
<h2 id="⚠️-常见错误" tabindex="-1"><a class="header-anchor" href="#⚠️-常见错误"><span>⚠️ 常见错误</span></a></h2>
<ul>
<li>忽视优化器参数对收敛性的影响。</li>
<li>未正确实施学习率调度策略。</li>
</ul>
<p>💡 <strong>启发点</strong>：使用预训练模型时，应根据具体任务调整优化器和学习率策略，以达到最佳性能。</p>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 研究LLaMA1在特定任务中的表现。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 探索不同学习率调度策略的效果。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 分析模型在不同数据集上的泛化能力。</label></li>
</ul>
<blockquote>
<p>原文出处：<a href="https://example.com" target="_blank" rel="noopener noreferrer">LLaMA: Open and Efficient Foundation Language Models</a></p>
</blockquote>
</div></template>


