<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li>分类：人工智能</li>
<li>标签：开源模型、LLaMA、深度学习、语言模型</li>
<li>日期：2025年4月12日</li>
</ul>
<h2 id="内容概述" tabindex="-1"><a class="header-anchor" href="#内容概述"><span>内容概述</span></a></h2>
<p>Deepseek-V1是基于LLaMA架构的开源语言模型，旨在通过长远发展理念进行扩展。模型采用了多种先进技术以优化性能和推理成本，并通过不同阶段的训练提升其在中英文指令数据上的表现。</p>
<h2 id="模型结构" tabindex="-1"><a class="header-anchor" href="#模型结构"><span>模型结构</span></a></h2>
<p>Deepseek-V1基于LLaMA架构，采用了以下技术：</p>
<ul>
<li><strong>Pre-RMSNorm</strong>：一种用于优化神经网络训练的正则化方法。</li>
<li><strong>SwiGLU</strong>和<strong>RoPE</strong>：用于提升模型的非线性表达能力。</li>
<li><strong>GQA</strong>：在67B参数模型中使用以降低推理成本。</li>
<li><strong>BBPE算法</strong>：用于将文本分词，训练语料库约24GB，词汇表大小为102400。
<img src="/img/user/附件/Pasted image 20250426221705.png" alt="Pasted image 20250426221705.png"></li>
</ul>
<h2 id="训练过程" tabindex="-1"><a class="header-anchor" href="#训练过程"><span>训练过程</span></a></h2>
<h3 id="sft训练" tabindex="-1"><a class="header-anchor" href="#sft训练"><span>SFT训练</span></a></h3>
<ul>
<li>收集了1.5百万条中英文指令数据。</li>
<li>微调7B参数模型进行4个epochs，67B参数模型进行2个epochs。</li>
<li>学习率设置为1e-5和5e-6。</li>
</ul>
<h3 id="dpo训练" tabindex="-1"><a class="header-anchor" href="#dpo训练"><span>DPO训练</span></a></h3>
<ul>
<li>使用Deepseek Chat Models生成响应，构建偏好对。</li>
<li>批量大小为512，学习率为5e-6。</li>
</ul>
<h2 id="数据表格" tabindex="-1"><a class="header-anchor" href="#数据表格"><span>数据表格</span></a></h2>
<table>
<thead>
<tr>
<th>模型参数</th>
<th>微调周期</th>
<th>学习率</th>
</tr>
</thead>
<tbody>
<tr>
<td>7B</td>
<td>4 epochs</td>
<td>1e-5</td>
</tr>
<tr>
<td>67B</td>
<td>2 epochs</td>
<td>5e-6</td>
</tr>
</tbody>
</table>
<h2 id="警告区块" tabindex="-1"><a class="header-anchor" href="#警告区块"><span>警告区块</span></a></h2>
<blockquote>
<p>⚠ 在训练过程中，确保数据集的多样性和质量，以避免模型偏差。</p>
</blockquote>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul>
<li>✅ 研究并实施Pre-RMSNorm、SwiGLU和RoPE在其他模型中的应用。</li>
<li>✅ 测试GQA在不同规模模型中的推理成本优化效果。</li>
<li>❗ 收集更多多样化的中英文指令数据以提升模型泛化能力。</li>
</ul>
<blockquote>
<p>来源：DeepSeek LLM: Scaling Open-Source Language Models with Longtermism</p>
</blockquote>
<p>💡启发点：通过结合多种优化技术，Deepseek-V1在性能和推理成本上取得了显著平衡，这为未来开源语言模型的发展提供了新思路。</p>
</div></template>


