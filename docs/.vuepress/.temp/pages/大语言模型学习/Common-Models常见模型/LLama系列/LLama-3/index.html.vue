<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<p><strong>分类</strong>: 人工智能模型</p>
<p><strong>标签</strong>: Llama3, 多语言处理, 机器学习, 模型优化</p>
<p><strong>日期</strong>: 2025年4月12日</p>
<hr>
<h2 id="内容概述" tabindex="-1"><a class="header-anchor" href="#内容概述"><span>内容概述</span></a></h2>
<p>Llama 3系列模型是Meta公司推出的最新人工智能模型，包含Llama3和Llama3.1。该系列模型在多语言处理、长文本处理和工具使用方面进行了显著的改进。本文将深入解析Llama 3的模型结构、训练数据及训练流程。
<img src="/img/user/附件/Pasted image 20250424223641.png" alt="Pasted image 20250424223641.png"></p>
<h2 id="模型结构" tabindex="-1"><a class="header-anchor" href="#模型结构"><span>模型结构</span></a></h2>
<p>与之前的LLaMA2相比，LLaMA3进行了以下改进：</p>
<ul>
<li><strong>词表扩展</strong>: tokenizer由sentencepiece更换为tiktoken，词表大小从32k扩展到128k。</li>
<li><strong>上下文长度</strong>: 上下文长度扩展到了8k，预训练后期通过多阶段长文本训练达到了128K。</li>
<li><strong>GQA技术应用</strong>: LLaMA3 8B和70B模型均采用了GQA技术。</li>
</ul>
<p>💡启发点：通过扩展词表和上下文长度，Llama 3显著提升了处理复杂任务的能力。</p>
<h2 id="训练数据" tabindex="-1"><a class="header-anchor" href="#训练数据"><span>训练数据</span></a></h2>
<p>Llama 3采用了精心设计的预训练语料库，扩展到15T Tokens，代码数据扩充了4倍，显著提升了模型在代码能力和逻辑推理能力方面的表现。数据来源包括30多种语言，超过5%的非英语token。这些措施不仅提高了英语内容处理效率，也增强了多语言处理能力。</p>
<h3 id="数据过滤流程" tabindex="-1"><a class="header-anchor" href="#数据过滤流程"><span>数据过滤流程</span></a></h3>
<p>Meta开发了一系列数据过滤工具，包括启发式过滤器、NSFW过滤器、语义重复数据删除技术及预测数据质量的文本分类器。这些工具确保了高质量数据的选择。</p>
<h2 id="训练流程" tabindex="-1"><a class="header-anchor" href="#训练流程"><span>训练流程</span></a></h2>
<p>Llama-3系列包括两个模型：预训练模型Llama-3和微调后的模型Llama-3-Instruct。</p>
<h3 id="整体流程" tabindex="-1"><a class="header-anchor" href="#整体流程"><span>整体流程</span></a></h3>
<ol>
<li>✅ 初始预训练</li>
<li>⚠ 长上下文预训练</li>
<li>❗ 退火（Annealing）</li>
</ol>
<p>后训练阶段包括监督式微调（SFT）、拒绝采样、RLHF和直接微调等步骤。</p>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p>警告：LLaMA-3没有采用MOE结构，这可能导致在性能上无法与同规模的密集型模型相比。随着模型规模的扩大，如何降低推理成本将成为一个需要关注的问题。</p>
</blockquote>
<h2 id="数据表格" tabindex="-1"><a class="header-anchor" href="#数据表格"><span>数据表格</span></a></h2>
<table>
<thead>
<tr>
<th>参数</th>
<th>Llama 3 8B</th>
<th>Llama 3 70B</th>
</tr>
</thead>
<tbody>
<tr>
<td>上下文长度</td>
<td>8k</td>
<td>8k</td>
</tr>
<tr>
<td>GQA</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>Token数量</td>
<td>15T+</td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul>
<li>研究如何进一步优化多语言处理能力。</li>
<li>探讨降低模型推理成本的方法。</li>
<li>开发更高效的数据过滤技术以提升数据质量。</li>
</ul>
<blockquote>
<p>原文出处: &quot;The Llama 3 Herd of Models&quot;</p>
</blockquote>
</div></template>


