<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li>分类：人工智能</li>
<li>标签：ChatGLM3, 模型优化, 人工智能, 机器学习</li>
<li>日期：2025年4月12日</li>
</ul>
<h2 id="内容概述" tabindex="-1"><a class="header-anchor" href="#内容概述"><span>内容概述</span></a></h2>
<p>ChatGLM3 是 ChatGLM 系列的最新版本，其模型结构与 ChatGLM2 完全一致，但与初代 ChatGLM 有显著不同。本文将详细探讨 ChatGLM2 和 ChatGLM3 的优化和变化。</p>
<h2 id="主要优化点" tabindex="-1"><a class="header-anchor" href="#主要优化点"><span>主要优化点</span></a></h2>
<h3 id="词表大小调整" tabindex="-1"><a class="header-anchor" href="#词表大小调整"><span>词表大小调整</span></a></h3>
<p>相对于初代 ChatGLM，ChatGLM2 和 ChatGLM3 将词表大小从 150,528 缩小至 65,024。这一改变使得模型加载速度显著提升。</p>
<h3 id="位置编码改进" tabindex="-1"><a class="header-anchor" href="#位置编码改进"><span>位置编码改进</span></a></h3>
<p>位置编码从每个 GLMBlock 独立配置，改为在全局共享一份。这种改进提高了模型的效率和一致性。</p>
<h3 id="前馈网络激活函数更改" tabindex="-1"><a class="header-anchor" href="#前馈网络激活函数更改"><span>前馈网络激活函数更改</span></a></h3>
<ul>
<li><strong>ChatGLM</strong> 使用 GeLU 激活函数。</li>
<li><strong>ChatGLM2 和 ChatGLM3</strong> 则采用 SwiGLU 激活函数，提供了更好的性能表现。</li>
</ul>
<h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2>
<ol>
<li>✅ 确认词表大小调整至 65,024。</li>
<li>⚠ 检查位置编码是否已全局共享。</li>
<li>❗ 确认前馈网络激活函数已更改为 SwiGLU。</li>
</ol>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p>在进行模型加载时，未能正确缩小词表大小可能导致加载速度减慢。</p>
</blockquote>
<h2 id="💡启发点" tabindex="-1"><a class="header-anchor" href="#💡启发点"><span>💡启发点</span></a></h2>
<ul>
<li>通过合理缩小词表大小和优化位置编码，模型性能可以显著提升。</li>
<li>激活函数的选择对模型性能有直接影响。</li>
</ul>
<h2 id="数据表格" tabindex="-1"><a class="header-anchor" href="#数据表格"><span>数据表格</span></a></h2>
<table>
<thead>
<tr>
<th>模型版本</th>
<th>词表大小</th>
<th>激活函数</th>
</tr>
</thead>
<tbody>
<tr>
<td>ChatGLM</td>
<td>150,528</td>
<td>GeLU</td>
</tr>
<tr>
<td>ChatGLM2</td>
<td>65,024</td>
<td>SwiGLU</td>
</tr>
<tr>
<td>ChatGLM3</td>
<td>65,024</td>
<td>SwiGLU</td>
</tr>
</tbody>
</table>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul>
<li>研究更多激活函数对模型性能的影响。</li>
<li>探索进一步优化位置编码的方法。</li>
<li>测试不同词表大小对加载速度的具体影响。</li>
</ul>
<blockquote>
<p>原始出处：<a href="https://github.com/THUDM/ChatGLM3" target="_blank" rel="noopener noreferrer">GitHub</a></p>
</blockquote>
</div></template>


