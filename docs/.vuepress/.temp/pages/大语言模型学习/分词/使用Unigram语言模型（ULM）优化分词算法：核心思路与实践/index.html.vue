<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li><strong>分类</strong>：自然语言处理（NLP）</li>
<li><strong>标签</strong>：Unigram语言模型、分词算法、BPE、子词优化</li>
<li><strong>日期</strong>：2025年4月2日</li>
</ul>
<hr>
<h2 id="核心观点总结" tabindex="-1"><a class="header-anchor" href="#核心观点总结"><span>核心观点总结</span></a></h2>
<p>Unigram语言模型（ULM）是一种基于概率的分词算法，通过逐步优化词表，保留对整体损失影响较大的子词，从而生成更优的分词结果。其核心思想是利用语言模型的概率分布来衡量子词的重要性，最终构建一个高效且覆盖全面的词表。</p>
<hr>
<h2 id="重点内容解析" tabindex="-1"><a class="header-anchor" href="#重点内容解析"><span>重点内容解析</span></a></h2>
<h3 id="_1-ulm的核心思路" tabindex="-1"><a class="header-anchor" href="#_1-ulm的核心思路"><span>1. <strong>ULM的核心思路</strong></span></a></h3>
<p>ULM通过以下步骤实现子词优化：
✅ <strong>初始化大词表</strong>：创建一个包含所有字符和高频n-gram的初始词表，确保覆盖语料中的所有单词。可以利用BPE（Byte Pair Encoding）等方法构建。<img src="/img/user/附件/Pasted image 20250327125052.png" alt="Pasted image 20250327125052.png">
✅ <strong>计算子词概率</strong>：使用Unigram语言模型（如EM算法）估计每个子词的概率，并通过维特比算法寻找最优分词结果。<img src="/img/user/附件/Pasted image 20250327125114.png" alt="Pasted image 20250327125114.png">
✅ <strong>评估子词重要性</strong>：计算删除每个子词对总损失（Loss）的影响，重要性越高的子词对Loss的影响越大。<img src="/img/user/附件/Pasted image 20250327125044.png" alt="Pasted image 20250327125044.png">
✅ <strong>精简词表</strong>：按照Loss大小排序，移除对Loss影响最小的子词，重复上述步骤，直到词表缩减到目标大小。<img src="/img/user/附件/Pasted image 20250327125036.png" alt="Pasted image 20250327125036.png"></p>
<hr>
<h3 id="_2-ulm的优势与挑战" tabindex="-1"><a class="header-anchor" href="#_2-ulm的优势与挑战"><span>2. <strong>ULM的优势与挑战</strong></span></a></h3>
<table>
<thead>
<tr>
<th>优势 💡</th>
<th>挑战 ⚠️</th>
</tr>
</thead>
<tbody>
<tr>
<td>利用所有可能的分词结果，提高分词质量</td>
<td>初始词表质量对结果影响显著</td>
</tr>
<tr>
<td>能为多种分词结果赋予概率，处理噪声能力强</td>
<td>算法实现较复杂</td>
</tr>
<tr>
<td>支持生成带概率的分词结果，提高灵活性</td>
<td>需要大量计算资源</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_3-ulm操作流程示例" tabindex="-1"><a class="header-anchor" href="#_3-ulm操作流程示例"><span>3. <strong>ULM操作流程示例</strong></span></a></h3>
<p>以下是一个基于&quot;hug&quot;单词的具体操作示例：</p>
<ol>
<li><strong>初始分词方法</strong>：对于&quot;hug&quot;，可能有以下分词方式：
<ul>
<li><code v-pre>h,u,g</code></li>
<li><code v-pre>hu,g</code></li>
<li><code v-pre>h,ug</code></li>
<li><code v-pre>hug</code>（不在初始词表中）</li>
</ul>
</li>
<li><strong>概率计算</strong>：
<ul>
<li>假设前三种分词方式在初始词表中，其概率分别为：<code v-pre>P(h,u,g) = 0.005</code>, <code v-pre>P(hu,g) = 0.006</code>, <code v-pre>P(h,ug) = 0.011</code>。</li>
</ul>
</li>
<li><strong>选择最优分词</strong>：
<ul>
<li>根据最大似然原则，选择<code v-pre>P(h,ug) = 0.011</code>作为最优分词结果。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="_4-数据与趋势📈" tabindex="-1"><a class="header-anchor" href="#_4-数据与趋势📈"><span>4. <strong>数据与趋势📈</strong></span></a></h3>
<p>以下是ULM优化过程中需要关注的数据点：</p>
<table>
<thead>
<tr>
<th>数据点</th>
<th>示例值</th>
</tr>
</thead>
<tbody>
<tr>
<td>初始Loss总值</td>
<td>170.40</td>
</tr>
<tr>
<td>子词<code v-pre>ug</code>的使用频率</td>
<td>0</td>
</tr>
<tr>
<td>子词<code v-pre>ug</code>对Loss影响</td>
<td>最小</td>
</tr>
</tbody>
</table>
<p>📈 <strong>趋势预测</strong>：随着迭代次数增加，低频或无用子词将逐步被移除，最终形成一个高效的紧凑型词表。</p>
<hr>
<h3 id="_5-常见错误⚠️" tabindex="-1"><a class="header-anchor" href="#_5-常见错误⚠️"><span>5. <strong>常见错误⚠️</strong></span></a></h3>
<ul>
<li><strong>删除单字符子词</strong>：由于单字符子词是语料覆盖的基础，它们不能被移除，否则会导致OOV（Out of Vocabulary）问题。</li>
<li><strong>初始词表不完整</strong>：如果初始词表不能覆盖语料中的所有单词，后续概率计算将失败。</li>
</ul>
<hr>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ol>
<li>📌 使用BPE或字符级初始化构建大规模初始词表。</li>
<li>📌 实现基于Unigram模型的EM算法，用于子词概率估计。</li>
<li>📌 开发自动化流程，定期评估和精简子词表。</li>
</ol>
<hr>
<h2 id="思考-延伸问题" tabindex="-1"><a class="header-anchor" href="#思考-延伸问题"><span>[思考] 延伸问题</span></a></h2>
<ol>
<li>如何平衡初始大词表的覆盖范围和计算复杂度？</li>
<li>ULM是否适用于多语言场景？如何处理不同语言间的差异？</li>
<li>能否结合深度学习模型进一步优化ULM的分词效果？</li>
</ol>
<hr>
<blockquote>
<p><strong>来源</strong>：本文基于Unigram语言模型（ULM）的技术文档整理与总结，原文详述了ULM在自然语言处理中的应用与实现细节。</p>
</blockquote>
</div></template>


