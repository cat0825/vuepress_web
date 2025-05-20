<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li>分类：机器学习</li>
<li>标签：Prompt Tuning, 模型微调, 语言模型</li>
<li>日期：2025年4月12日</li>
</ul>
<h2 id="核心观点总结" tabindex="-1"><a class="header-anchor" href="#核心观点总结"><span>核心观点总结</span></a></h2>
<p>Prompt Tuning 是一种通过调整提示（prompt）模板来实现模型微调的方法。它不需要改变预训练模型的参数，而是通过在输入文本中添加特殊的 tokens 来优化模型表现。该方法主要分为 Hard Prompt 和 Soft Prompt 两种类型，每种类型都有其独特的实现方式和应用场景。
<img src="/img/user/附件/Pasted image 20250423224623.png" alt="Pasted image 20250423224623.png"></p>
<h2 id="重点段落" tabindex="-1"><a class="header-anchor" href="#重点段落"><span>重点段落</span></a></h2>
<h3 id="prompt-tuning-的基本原理" tabindex="-1"><a class="header-anchor" href="#prompt-tuning-的基本原理"><span>Prompt Tuning 的基本原理</span></a></h3>
<p>Prompt Tuning 通过在输入文本前添加一系列特殊 tokens 来实现对语言模型的微调。这些 tokens 作为 prompts 的专有参数，在训练过程中被更新优化，而预训练模型参数保持固定。</p>
<h3 id="prompt-ensembling-方法" tabindex="-1"><a class="header-anchor" href="#prompt-ensembling-方法"><span>Prompt Ensembling 方法</span></a></h3>
<p>Prompt Ensembling 是一种集成多种 prompts 的方法，通过在同一任务上训练多个 prompts，为一个任务创建多个模型，并共享预训练语言模型的核心参数。</p>
<h3 id="hard-prompt-与-soft-prompt-的区别" tabindex="-1"><a class="header-anchor" href="#hard-prompt-与-soft-prompt-的区别"><span>Hard Prompt 与 Soft Prompt 的区别</span></a></h3>
<ul>
<li><strong>Hard Prompt</strong>：通过显式构建离散字符的模板，不参与训练过程中的参数调整。</li>
<li><strong>Soft Prompt</strong>：允许模板参数在训练过程中根据上下文语义和任务目标进行连续调整。
<img src="/img/user/附件/Pasted image 20250423224641.png" alt="Pasted image 20250423224641.png"></li>
</ul>
<h2 id="技术术语转述" tabindex="-1"><a class="header-anchor" href="#技术术语转述"><span>技术术语转述</span></a></h2>
<ul>
<li><strong>Prompt Tuning</strong>：通过调整输入文本中的提示模板来优化模型，而无需改变模型本身的参数。</li>
<li><strong>Hard Prompt</strong>：固定的文本模板，用于直接与原始文本拼接。</li>
<li><strong>Soft Prompt</strong>：可调节的模板参数，允许在训练过程中进行优化。</li>
</ul>
<h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2>
<ol>
<li>✅ 确定任务类型并定义合适的 Prompt 模板。</li>
<li>⚠ 在输入文本中添加特殊 tokens 作为 prompts。</li>
<li>❗ 保持预训练模型参数固定，更新 prompts 的专有参数。</li>
</ol>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p>在使用 Hard Prompt 时，容易忽视模板字符的词向量在训练过程中的固定性。</p>
</blockquote>
<h2 id="💡启发点" tabindex="-1"><a class="header-anchor" href="#💡启发点"><span>💡启发点</span></a></h2>
<p>Prompt Tuning 提供了一种轻量级的模型微调方法，适用于多任务推理场景，减少了为每个任务训练独立模型的需求。</p>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul>
<li>研究不同任务下的最佳 Prompt 模板设计。</li>
<li>实验 Prompt Ensembling 方法以提高模型性能。</li>
<li>探索 Soft Prompt 在复杂语境下的应用潜力。</li>
</ul>
<h2 id="数据转换" tabindex="-1"><a class="header-anchor" href="#数据转换"><span>数据转换</span></a></h2>
<table>
<thead>
<tr>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>Hard Prompt</td>
<td>固定模板，不参与参数调整</td>
</tr>
<tr>
<td>Soft Prompt</td>
<td>可调模板，参与训练优化</td>
</tr>
</tbody>
</table>
<h2 id="公式显示" tabindex="-1"><a class="header-anchor" href="#公式显示"><span>公式显示</span></a></h2>
<p>在 Prompt Tuning 中，我们最大化生成文本 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>Y</mi></mrow><annotation encoding="application/x-tex">Y</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">Y</span></span></span></span> 的概率：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>Y</mi><mo>∣</mo><mo stretchy="false">[</mo><mi>P</mi><mo separator="true">;</mo><mi>X</mi><mo stretchy="false">]</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">P(Y \mid [P; X])
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.22222em;">Y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∣</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mpunct">;</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="mclose">])</span></span></span></span></span></p>
<blockquote>
<p>原始出处：Prompt Tuning 的相关文献和研究资料。</p>
</blockquote>
</div></template>


