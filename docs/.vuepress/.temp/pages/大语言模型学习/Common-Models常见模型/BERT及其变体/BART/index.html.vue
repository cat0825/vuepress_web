<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li>分类：自然语言处理</li>
<li>标签：BART, Transformer, NLP, 文本生成, 文本理解</li>
<li>日期：2025年4月12日</li>
</ul>
<h2 id="内容概述" tabindex="-1"><a class="header-anchor" href="#内容概述"><span>内容概述</span></a></h2>
<p>BART是一种基于Transformer架构的模型，结合了双向和自回归的特性。它在文本生成任务中表现优异，同时也能在文本理解任务中取得领先的效果。
<img src="/img/user/附件/Pasted image 20250424113608.png" alt="Pasted image 20250424113608.png"></p>
<h3 id="核心观点" tabindex="-1"><a class="header-anchor" href="#核心观点"><span>核心观点</span></a></h3>
<ul>
<li><strong>模型架构</strong>：BART采用标准的encoder-decoder结构，并进行了若干调整。</li>
<li><strong>激活函数与参数初始化</strong>：与GPT类似，BART使用GeLU激活函数，参数初始化服从正态分布 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>N</mi><mo stretchy="false">(</mo><mn>0</mn><mo separator="true">,</mo><mn>0.02</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">N(0,0.02)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mopen">(</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">0.02</span><span class="mclose">)</span></span></span></span>。</li>
<li><strong>层数配置</strong>：BART base模型的Encoder和Decoder各有6层，而large模型则扩展到12层。</li>
<li><strong>cross-attention</strong>：解码器的各层对编码器最终隐藏层额外执行cross-attention。</li>
<li><strong>与BERT的区别</strong>：BERT在词预测之前使用了额外的Feed Forward Layer，而BART没有。</li>
<li><strong>应用场景</strong>：相比GPT，BART增加了双向上下文语境信息，更适合文本生成。</li>
</ul>
<h3 id="技术术语简化" tabindex="-1"><a class="header-anchor" href="#技术术语简化"><span>技术术语简化</span></a></h3>
<ul>
<li><strong>Encoder-Decoder</strong>：一种用于处理输入数据并生成输出数据的结构，类似于翻译系统。</li>
<li><strong>GeLU激活函数</strong>：一种数学函数，用于帮助神经网络学习复杂模式。</li>
<li><strong>cross-attention</strong>：一种机制，允许解码器更好地理解编码器生成的信息。</li>
</ul>
<h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2>
<ol>
<li>✅ 将ReLU激活函数替换为GeLU。</li>
<li>✅ 初始化参数为正态分布 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>N</mi><mo stretchy="false">(</mo><mn>0</mn><mo separator="true">,</mo><mn>0.02</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">N(0,0.02)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mopen">(</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">0.02</span><span class="mclose">)</span></span></span></span>。</li>
<li>⚠ 确保解码器的各层执行cross-attention。</li>
</ol>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p>⚠ 在实现BART时，容易忽略cross-attention机制，这会导致模型性能下降。</p>
</blockquote>
<h2 id="💡启发点" tabindex="-1"><a class="header-anchor" href="#💡启发点"><span>💡启发点</span></a></h2>
<p>BART在文本生成任务中的双向上下文语境信息是其优于GPT的一大创新点。</p>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul>
<li>研究BART在其他NLP任务中的应用潜力。</li>
<li>比较BART与其他Transformer模型在不同任务中的表现。</li>
<li>探索BART与其他激活函数的兼容性。</li>
</ul>
<blockquote>
<p>来源：原始内容提供者不详，内容经过处理和总结。</p>
</blockquote>
</div></template>


