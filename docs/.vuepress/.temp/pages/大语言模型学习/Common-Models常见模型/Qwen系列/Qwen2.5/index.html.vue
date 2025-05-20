<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<p>分类：人工智能研究</p>
<p>标签：Qwen2.5模型，长文本处理，预训练数据</p>
<p>日期：2025年4月12日</p>
<h2 id="核心观点总结" tabindex="-1"><a class="header-anchor" href="#核心观点总结"><span>核心观点总结</span></a></h2>
<p>Qwen2.5是一系列专注于长文本处理的高性能模型，采用多阶段预训练方法和先进的数据过滤技术，旨在提升处理长文本的能力。其预训练数据经过精细过滤，确保高质量输入，并通过渐进式训练适应不同长度的上下文。模型系列包括多个参数规模的版本，从0.5B到72B不等。长序列生成和数学推理是其后训练的重点领域。</p>
<h2 id="重点段落" tabindex="-1"><a class="header-anchor" href="#重点段落"><span>重点段落</span></a></h2>
<h3 id="模型系列与结构" tabindex="-1"><a class="header-anchor" href="#模型系列与结构"><span>模型系列与结构</span></a></h3>
<p>Qwen2.5包含多个参数规模的模型，包括base和instruct版本，以及MoE模型如Qwen2.5-Turbo和Qwen2.5-Plus。其结构采用SwiGLU、RoPE、QKV bias、RMSNorm、GQA + YaRN + DCA，与前代模型一致。Tokenizer使用BBPE，词表大小为151643。</p>
<h3 id="预训练数据与方法" tabindex="-1"><a class="header-anchor" href="#预训练数据与方法"><span>预训练数据与方法</span></a></h3>
<p>使用18T tokens量级的数据进行预训练，数据经过Qwen2-Instruct模型过滤以确保质量。加入了专门的数学与代码数据，并对合成数据进行了严格过滤和奖励机制评估。数据混合策略通过对不同领域内容进行分类与平衡，以确保高质量信息的代表性。</p>
<h3 id="长文本预训练" tabindex="-1"><a class="header-anchor" href="#长文本预训练"><span>长文本预训练</span></a></h3>
<p>采用两阶段预训练方法：初始阶段使用4K token上下文长度，最终阶段扩展至32K token。Qwen2.5-Turbo经过四个阶段训练，最终达到256K token，能够处理最多1M个token。渐进式方法帮助模型适应增加的上下文长度，并应用YARN和DCA技术以扩展处理能力。</p>
<h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2>
<ol>
<li>✅ 初始预训练使用4K token上下文长度。</li>
<li>⚠ 最终阶段扩展至32K token。</li>
<li>❗ Qwen2.5-Turbo经过四个阶段达到256K token。</li>
</ol>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p>警告：在数据混合过程中，需避免过度代表的领域影响整体数据质量，确保高价值领域得到足够重视。</p>
</blockquote>
<h2 id="数据表格" tabindex="-1"><a class="header-anchor" href="#数据表格"><span>数据表格</span></a></h2>
<table>
<thead>
<tr>
<th>模型系列</th>
<th>参数规模</th>
<th>上下文长度</th>
</tr>
</thead>
<tbody>
<tr>
<td>Qwen2.5</td>
<td>0.5B-72B</td>
<td>4K-32K</td>
</tr>
<tr>
<td>Turbo</td>
<td>MoE</td>
<td>256K</td>
</tr>
</tbody>
</table>
<h2 id="💡启发点" tabindex="-1"><a class="header-anchor" href="#💡启发点"><span>💡启发点</span></a></h2>
<p>通过渐进式训练方法和先进的数据过滤技术，Qwen2.5实现了对长文本的高效处理能力，显著提升了模型的广泛适用性。</p>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul>
<li>进一步研究Qwen2.5在不同领域的应用效果。</li>
<li>探索更多数据过滤和奖励机制以提升样本质量。</li>
<li>扩展长文本处理能力至更多实际场景。</li>
</ul>
<blockquote>
<p>来源：Qwen2.5 Technical Report, https://arxiv.org/pdf/2412.15115</p>
</blockquote>
</div></template>


