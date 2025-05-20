<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li>分类：自然语言处理</li>
<li>标签：P-Tuning, GPT, NLU, Embedding, Prompt</li>
<li>日期：2025年4月12日</li>
</ul>
<h2 id="内容概述" tabindex="-1"><a class="header-anchor" href="#内容概述"><span>内容概述</span></a></h2>
<p>P-Tuning是一种通过优化embedding层来增强GPT在自然语言理解任务中的方法。该方法通过将prompt转换为可学习的embedding层，并利用MLP和LSTM对其进行处理，从而使GPT更好地应用于NLU任务。
<img src="/img/user/附件/Pasted image 20250423224821.png" alt="Pasted image 20250423224821.png"></p>
<h2 id="主要观点" tabindex="-1"><a class="header-anchor" href="#主要观点"><span>主要观点</span></a></h2>
<ol>
<li>
<p><strong>Prompt Encoder的引入</strong>：为了处理伪标记的相互依赖关系，P-Tuning采用了一层RNN作为Prompt Encoder，以编码prompt embedding序列。</p>
</li>
<li>
<p><strong>上下文词的指定</strong>：在训练过程中，选择具有代表性语义的词作为伪标记的初始化，以确保模板在语义上与句子保持一致。</p>
</li>
<li>
<p><strong>重参数化</strong>：在训练时使用Prompt Encoder来表征伪标记，并在推理阶段不再使用。</p>
</li>
<li>
<p><strong>混合提示</strong>：结合连续提示与离散token，以提高模型的灵活性和适应性。</p>
</li>
</ol>
<h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2>
<ol>
<li>✅ 将Prompt转换为可学习的embedding层。</li>
<li>⚠ 使用MLP+LSTM对Prompt Embedding进行处理。</li>
<li>❗ 在训练过程中更新embedding层中virtual token的部分参数。</li>
</ol>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<ul>
<li>随机初始化virtual token可能导致优化到局部最优值，应使用Prompt Encoder进行编码以加速收敛。</li>
</ul>
</blockquote>
<h2 id="💡启发点" tabindex="-1"><a class="header-anchor" href="#💡启发点"><span>💡启发点</span></a></h2>
<ul>
<li>P-Tuning通过优化embedding层而非整个模型，减少了需微调的参数量级，提高了训练效率。</li>
</ul>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul>
<li>探索更多关于Prompt Encoder在不同任务中的应用。</li>
<li>实验不同的上下文词选择策略对模型性能的影响。</li>
<li>研究混合提示对其他语言模型的适用性。</li>
</ul>
<h2 id="数据转换" tabindex="-1"><a class="header-anchor" href="#数据转换"><span>数据转换</span></a></h2>
<table>
<thead>
<tr>
<th>项目</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>Prompt Encoder</td>
<td>使用RNN编码伪标记</td>
</tr>
<tr>
<td>上下文词选择</td>
<td>选择具有代表性语义的词进行初始化</td>
</tr>
<tr>
<td>重参数化</td>
<td>训练时使用，推理阶段不使用</td>
</tr>
</tbody>
</table>
<p><img src="/img/user/附件/Pasted image 20250423224844.png" alt="Pasted image 20250423224844.png"></p>
<h2 id="公式显示" tabindex="-1"><a class="header-anchor" href="#公式显示"><span>公式显示</span></a></h2>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msub><mi>h</mi><mi>i</mi></msub><mo>=</mo><mi>M</mi><mi>L</mi><mi>P</mi><mo stretchy="false">(</mo><mo stretchy="false">[</mo><msub><mi>h</mi><mi>i</mi></msub><mo>:</mo><msub><mi>h</mi><mi>i</mi></msub><mo stretchy="false">]</mo><mo stretchy="false">)</mo><mo>=</mo><mi>M</mi><mi>L</mi><mi>P</mi><mo stretchy="false">(</mo><mo stretchy="false">[</mo><mi>L</mi><mi>S</mi><mi>T</mi><mi>M</mi><mo stretchy="false">(</mo><msub><mi>h</mi><mn>0</mn></msub><mo>:</mo><mi>i</mi><mo stretchy="false">)</mo><mo>:</mo><mi>L</mi><mi>S</mi><mi>T</mi><mi>M</mi><mo stretchy="false">(</mo><msub><mi>h</mi><mi>i</mi></msub><mo>:</mo><mi>m</mi><mo stretchy="false">)</mo><mo stretchy="false">]</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">h_i = MLP([h_i : h_i]) = MLP([LSTM(h_0 : i) : LSTM(h_i : m)]) 
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">h</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="mord mathnormal">L</span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">([</span><span class="mord"><span class="mord mathnormal">h</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">h</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">])</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="mord mathnormal">L</span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">([</span><span class="mord mathnormal">L</span><span class="mord mathnormal" style="margin-right:0.10903em;">STM</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">h</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">i</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">L</span><span class="mord mathnormal" style="margin-right:0.10903em;">STM</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">h</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">m</span><span class="mclose">)])</span></span></span></span></span></p>
<blockquote>
<p>来源：原始文本内容来自于技术文档，详细探讨了P-Tuning的实现及其对GPT性能提升的作用。</p>
</blockquote>
</div></template>


