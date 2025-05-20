<template><div><h2 id="分类-自动推断" tabindex="-1"><a class="header-anchor" href="#分类-自动推断"><span>分类：自动推断</span></a></h2>
<h2 id="标签-数学预训练、强化学习、数据处理、deepseek" tabindex="-1"><a class="header-anchor" href="#标签-数学预训练、强化学习、数据处理、deepseek"><span>标签：数学预训练、强化学习、数据处理、DeepSeek</span></a></h2>
<h2 id="日期-2025年4月12日" tabindex="-1"><a class="header-anchor" href="#日期-2025年4月12日"><span>日期：2025年4月12日</span></a></h2>
<h2 id="核心观点总结" tabindex="-1"><a class="header-anchor" href="#核心观点总结"><span>核心观点总结</span></a></h2>
<p>本文探讨了Deepseek-math项目的主要贡献，包括可扩展的数学预训练和对强化学习的探索与分析。重点介绍了数据处理过程，涉及训练数据的收集与清洗、预训练模型的参数设置、以及指令微调和强化学习过程。
<img src="/img/user/附件/Pasted image 20250426221755.png" alt="Pasted image 20250426221755.png"></p>
<h2 id="重点段落与数据" tabindex="-1"><a class="header-anchor" href="#重点段落与数据"><span>重点段落与数据</span></a></h2>
<h3 id="训练数据与来源" tabindex="-1"><a class="header-anchor" href="#训练数据与来源"><span>训练数据与来源</span></a></h3>
<ul>
<li>120B数学标记来自Common Crawl的数据，使用fastText分类器提取，多语言支持。</li>
<li>数据分布：56%来自DeepSeekMath语料库，4%来自AlgebraicStack，10%来自arXiv，20%是Github代码，其余10%是Common Crawl的自然语言数据。</li>
</ul>
<h3 id="数据集收集和清洗过程" tabindex="-1"><a class="header-anchor" href="#数据集收集和清洗过程"><span>数据集收集和清洗过程</span></a></h3>
<ul>
<li><strong>去重和召回</strong>：确保数据唯一性，避免冗余。</li>
<li><strong>去污染</strong>：过滤掉包含英语和中文数学基准测试题目或答案的网页，以免基准污染。</li>
</ul>
<h3 id="指令微调与强化学习" tabindex="-1"><a class="header-anchor" href="#指令微调与强化学习"><span>指令微调与强化学习</span></a></h3>
<ul>
<li>构建了一个数学指令调优数据集，共776K个样本。</li>
<li>使用GRPO进行强化学习，group size设为64。</li>
</ul>
<h2 id="数据表格" tabindex="-1"><a class="header-anchor" href="#数据表格"><span>数据表格</span></a></h2>
<table>
<thead>
<tr>
<th>数据来源</th>
<th>占比</th>
</tr>
</thead>
<tbody>
<tr>
<td>DeepSeekMath Corpus</td>
<td>56%</td>
</tr>
<tr>
<td>AlgebraicStack</td>
<td>4%</td>
</tr>
<tr>
<td>arXiv</td>
<td>10%</td>
</tr>
<tr>
<td>Github代码</td>
<td>20%</td>
</tr>
<tr>
<td>Common Crawl</td>
<td>10%</td>
</tr>
</tbody>
</table>
<h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2>
<ol>
<li>✅ <strong>收集数据</strong>：从Common Crawl提取120B数学标记。</li>
<li>⚠ <strong>训练fastText模型</strong>：注意与word2vec CBOW的区别。</li>
<li>❗ <strong>去污染</strong>：确保基准测试题目或答案不被包含在训练数据中。</li>
</ol>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p>注意在数据去重和召回过程中，可能会遗漏重要的数据片段，需特别小心。</p>
</blockquote>
<h2 id="💡启发点" tabindex="-1"><a class="header-anchor" href="#💡启发点"><span>💡启发点</span></a></h2>
<ul>
<li>数据去污染策略有效防止了基准测试的污染，为模型的公平评估奠定了基础。</li>
</ul>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 研究fastText与word2vec CBOW的具体区别。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 探索如何优化GRPO在强化学习中的应用。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 分析不同数据来源对模型性能的影响。</label></li>
</ul>
<blockquote>
<p>原始出处：[Deepseek-math项目文档]</p>
</blockquote>
</div></template>


