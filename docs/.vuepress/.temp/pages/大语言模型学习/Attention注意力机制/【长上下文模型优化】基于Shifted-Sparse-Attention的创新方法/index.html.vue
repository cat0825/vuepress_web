<template><div><p class="block-language-dataview"></p>
<h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li><strong>分类</strong>：人工智能、深度学习</li>
<li><strong>标签</strong>：长上下文模型、注意力机制、LongLoRA、优化算法</li>
<li><strong>日期</strong>：2024年10月2日</li>
</ul>
<hr>
<h2 id="核心观点总结" tabindex="-1"><a class="header-anchor" href="#核心观点总结"><span>核心观点总结</span></a></h2>
<p>在长上下文语言模型的优化中，论文《LongLoRA: Efficient Fine-Tuning of Long Context Large Language Models》提出了一种名为**Shifted Sparse Attention (S2-Attention)**的方法。该技术通过分组计算注意力并引入移位机制，实现了长上下文训练的高效性，同时避免了信息泄漏问题。</p>
<hr>
<h2 id="技术解析" tabindex="-1"><a class="header-anchor" href="#技术解析"><span>技术解析</span></a></h2>
<h3 id="✅-核心原理-shifted-sparse-attention" tabindex="-1"><a class="header-anchor" href="#✅-核心原理-shifted-sparse-attention"><span>✅ 核心原理：Shifted Sparse Attention</span></a></h3>
<ul>
<li><strong>分组处理</strong>：将上下文长度划分为多个组，每组单独计算注意力。</li>
<li><strong>移位机制</strong>：在半注意力头中，将token按组大小的一半进行移位，确保相邻组之间的信息流动。</li>
<li><strong>信息泄漏控制</strong>：通过对注意力掩码的微调，可以规避移位可能引入的信息泄漏问题。</li>
</ul>
<h3 id="⚠️-操作步骤" tabindex="-1"><a class="header-anchor" href="#⚠️-操作步骤"><span>⚠️ 操作步骤</span></a></h3>
<ol>
<li><strong>特征分块</strong>：沿头部维度将特征分为两大块（如8行4列，8行表示token数量，4列表示头部数量）。</li>
<li><strong>移位处理</strong>：
<ul>
<li>第一个块的部分标记按组大小的一半移位。</li>
<li>例如，第8个token的后一半表示移动到第2块的第1行，其余标记整体向下移一行。</li>
</ul>
</li>
<li><strong>分组计算</strong>：将token重新分组，重塑为批量维度，仅在组内计算注意力。</li>
<li><strong>信息流动优化</strong>：移位机制保证跨组的信息流动，同时通过掩码调整避免信息泄漏。</li>
</ol>
<hr>
<h2 id="数据与示例" tabindex="-1"><a class="header-anchor" href="#数据与示例"><span>数据与示例</span></a></h2>
<h3 id="📊-数据表格-上下文长度分组与注意力计算" tabindex="-1"><a class="header-anchor" href="#📊-数据表格-上下文长度分组与注意力计算"><span>📊 数据表格：上下文长度分组与注意力计算</span></a></h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>总上下文长度</td>
<td>8192</td>
<td>模型训练的最大上下文长度</td>
</tr>
<tr>
<td>每组大小</td>
<td>2048</td>
<td>单组内上下文长度</td>
</tr>
<tr>
<td>注意力计算范围</td>
<td>组内独立计算</td>
<td>每组单独处理</td>
</tr>
<tr>
<td>信息流动机制</td>
<td>移位处理</td>
<td>跨组信息流动</td>
</tr>
</tbody>
</table>
<h3 id="示例代码-分组与移位处理" tabindex="-1"><a class="header-anchor" href="#示例代码-分组与移位处理"><span>示例代码：分组与移位处理</span></a></h3>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 分组与移位示例</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">group_size </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 2048</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">tokens </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> ...</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 8192</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 分组</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">groups </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">tokens</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">+</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">group_size</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> for</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> i </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">in</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> range</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> len</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">tokens</span><span style="--shiki-light:#999999;--shiki-dark:#666666">),</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> group_size</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 移位处理</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">shifted_groups </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> []</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">for</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> group </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">in</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> groups</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    half_size </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> group_size </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">//</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    shifted_group </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> group</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">half_size</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:]</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> +</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> group</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[:</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">half_size</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    shifted_groups</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">append</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">shifted_group</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="常见错误警告-⚠️" tabindex="-1"><a class="header-anchor" href="#常见错误警告-⚠️"><span>常见错误警告 ⚠️</span></a></h2>
<ol>
<li><strong>信息泄漏未处理</strong>：未对注意力掩码进行微调可能导致跨组信息泄漏。</li>
<li><strong>组大小设置不合理</strong>：若组大小过小，可能无法充分利用长上下文特性。</li>
<li><strong>移位逻辑错误</strong>：移位操作未正确实现可能导致数据错乱。</li>
</ol>
<hr>
<h2 id="💡-启发点" tabindex="-1"><a class="header-anchor" href="#💡-启发点"><span>💡 启发点</span></a></h2>
<ul>
<li><strong>创新点</strong>：通过移位机制实现跨组信息流动，避免传统方法的高计算成本。</li>
<li><strong>应用场景</strong>：适用于需要处理超长文本的任务，如法律文档分析、小说生成等。</li>
</ul>
<hr>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ol>
<li>学习并实现S2-Attention的核心算法。</li>
<li>测试不同上下文长度对模型性能的影响。</li>
<li>探索注意力掩码微调的最佳实践。</li>
</ol>
<hr>
<h2 id="思考-🤔" tabindex="-1"><a class="header-anchor" href="#思考-🤔"><span>思考 🤔</span></a></h2>
<h3 id="延伸问题" tabindex="-1"><a class="header-anchor" href="#延伸问题"><span>延伸问题</span></a></h3>
<ol>
<li>移位机制是否适用于其他类型的注意力模型？</li>
<li>如何进一步优化跨组信息流动而不增加计算复杂度？</li>
<li>是否可以将S2-Attention应用于多模态任务（如图像+文本）？</li>
</ol>
<hr>
<h2 id="来源标注" tabindex="-1"><a class="header-anchor" href="#来源标注"><span>来源标注</span></a></h2>
<blockquote>
<p>原文出处：<a href="https://arxiv.org/pdf/2309.12307" target="_blank" rel="noopener noreferrer">论文链接</a><br>
项目源码：<a href="https://github.com/dvlab-research/LongLoRA" target="_blank" rel="noopener noreferrer">GitHub地址</a></p>
</blockquote>
<hr>
<h2 id="后续追踪-📈" tabindex="-1"><a class="header-anchor" href="#后续追踪-📈"><span>后续追踪 📈</span></a></h2>
<ul>
<li><strong>研究计划</strong>：
<ul>
<li>深入分析S2-Attention在不同任务上的表现。</li>
<li>探索长上下文模型在实时交互场景中的潜力。</li>
<li>开发更灵活的注意力掩码微调方法以提升鲁棒性。</li>
</ul>
</li>
</ul>
</div></template>


