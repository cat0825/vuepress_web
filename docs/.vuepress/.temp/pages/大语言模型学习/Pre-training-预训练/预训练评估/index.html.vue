<template><div><p><strong>分类</strong>：人工智能</p>
<p><strong>标签</strong>：预训练评估、困惑度、Benchmark</p>
<p><strong>日期</strong>：2023年10月20日</p>
<h2 id="预训练评估的核心观点" tabindex="-1"><a class="header-anchor" href="#预训练评估的核心观点"><span>预训练评估的核心观点</span></a></h2>
<p>预训练评估是大语言模型（LLM）全链路评估中较为简单的环节，主要关注模型的知识掌握程度，而非指令跟随能力或安全性等。</p>
<h2 id="重点内容" tabindex="-1"><a class="header-anchor" href="#重点内容"><span>重点内容</span></a></h2>
<h3 id="困惑度-ppl-测量" tabindex="-1"><a class="header-anchor" href="#困惑度-ppl-测量"><span>困惑度（PPL）测量</span></a></h3>
<ul>
<li><strong>数据准备</strong>：使用百科、逻辑、代码等数据集。</li>
<li><strong>观察趋势</strong>：每日观察模型在这些集合上的损失（loss）表现，正常情况下损失会逐渐下降并趋于稳定。</li>
<li><strong>模型对比</strong>：困惑度只能在同一模型的不同版本之间进行比较，因为不同的tokenizer压缩率会影响loss的可比性。</li>
</ul>
<h3 id="benchmark评估" tabindex="-1"><a class="header-anchor" href="#benchmark评估"><span>Benchmark评估</span></a></h3>
<p>推荐使用开源平台OpenCompass进行Benchmark评估。以下是一些常用的Benchmark：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>用途</th>
<th>数据地址</th>
</tr>
</thead>
<tbody>
<tr>
<td>MMLU</td>
<td>评估广泛主题领域的理解和推理能力</td>
<td><a href="https://github.com/hendrycks/test" target="_blank" rel="noopener noreferrer">MMLU数据集</a></td>
</tr>
<tr>
<td>GLUE</td>
<td>全面评估语言理解能力</td>
<td><a href="https://huggingface.co/datasets/nyu-mll/glue" target="_blank" rel="noopener noreferrer">GLUE数据集</a></td>
</tr>
<tr>
<td>MultiNLI</td>
<td>评估根据陈述推理正确类别的能力</td>
<td><a href="https://huggingface.co/datasets/multi_nli" target="_blank" rel="noopener noreferrer">MultiNLI数据集</a></td>
</tr>
<tr>
<td>SuperGLUE</td>
<td>评估语言理解和推理的更深层次</td>
<td><a href="https://huggingface.co/datasets/super_glue" target="_blank" rel="noopener noreferrer">SuperGLUE数据集</a></td>
</tr>
</tbody>
</table>
<h3 id="技术术语解释" tabindex="-1"><a class="header-anchor" href="#技术术语解释"><span>技术术语解释</span></a></h3>
<ul>
<li><strong>困惑度（PPL）</strong>：衡量模型预测下一个词的难易程度，数值越低表示模型预测越准确。</li>
<li><strong>Benchmark</strong>：用于评估模型性能的标准化测试集。</li>
</ul>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考"><span>思考</span></a></h2>
<ul>
<li>如何在不同的领域中优化LLM的知识掌握？</li>
<li>在困惑度下降趋于稳定后，还有哪些优化空间？</li>
<li>Benchmark测试结果如何反映在实际应用中？</li>
</ul>
<blockquote>
<p>来源：预训练评估文档</p>
</blockquote>
<hr>
<h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2>
<ol>
<li>✅ 准备数据集，包括百科、逻辑和代码。</li>
<li>⚠ 每日观察测试集合上的loss表现。</li>
<li>❗ 使用OpenCompass进行Benchmark评估。</li>
</ol>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p>警告：不同模型之间直接比较困惑度可能导致误解，因为tokenizer压缩率不同。</p>
</blockquote>
<h2 id="💡启发点" tabindex="-1"><a class="header-anchor" href="#💡启发点"><span>💡启发点</span></a></h2>
<ul>
<li>使用多种Benchmark可以全面评估模型的各方面能力。</li>
</ul>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul>
<li>继续优化模型以降低困惑度。</li>
<li>扩展Benchmark测试以涵盖更多领域。</li>
</ul>
<h2 id="📈趋势预测" tabindex="-1"><a class="header-anchor" href="#📈趋势预测"><span>📈趋势预测</span></a></h2>
<p>未来，随着更复杂的数据集和更高效的算法，模型的知识掌握能力将进一步提升。</p>
<h2 id="后续追踪" tabindex="-1"><a class="header-anchor" href="#后续追踪"><span>后续追踪</span></a></h2>
<ul>
<li>探索更多领域特定的Benchmark。</li>
<li>研究不同tokenizer对困惑度的影响。
[[大语言模型学习/Pre-training 预训练/预训练评估2|预训练评估2]]</li>
</ul>
</div></template>


