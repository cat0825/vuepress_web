<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li><strong>分类</strong>：自然语言处理（NLP）</li>
<li><strong>标签</strong>：BPE、分词算法、子词编码、自然语言处理、优化</li>
<li><strong>日期</strong>：2025年4月1日</li>
</ul>
<hr>
<h2 id="核心观点概述" tabindex="-1"><a class="header-anchor" href="#核心观点概述"><span>核心观点概述</span></a></h2>
<p>Byte Pair Encoding (BPE) 是一种常见的子词分词算法，通过逐步合并频率最高的字符对，生成一个高效的子词词表。它被广泛用于自然语言处理（NLP）任务中，尤其是在神经机器翻译（NMT）中，用以解决稀有词问题。</p>
<p>💡 <strong>启发点</strong>：BPE通过贪婪算法逐步构建子词表，能够在词汇表大小和编码效率之间取得平衡。</p>
<hr>
<h2 id="重点内容提取" tabindex="-1"><a class="header-anchor" href="#重点内容提取"><span>重点内容提取</span></a></h2>
<h3 id="bpe的核心思想" tabindex="-1"><a class="header-anchor" href="#bpe的核心思想"><span>## BPE的核心思想</span></a></h3>
<ul>
<li>BPE从一个基础的小型词表出发，不断合并频率最高的字符对，逐步生成新的子词单元。</li>
<li>其目标是在子词粒度和词汇表大小之间找到平衡，使得模型既能高效编码，又能处理稀有词。</li>
</ul>
<h3 id="bpe的操作步骤" tabindex="-1"><a class="header-anchor" href="#bpe的操作步骤"><span>## BPE的操作步骤</span></a></h3>
<ol>
<li><strong>✅ 准备基础词表</strong>：例如英文中包含26个字母及符号（如 <code v-pre>_</code> 表示单词结尾）。</li>
<li><strong>⚠️ 拆分语料为最小单元</strong>：将训练语料中的单词拆解为单个字符。</li>
<li><strong>❗️ 统计频率并合并</strong>：找到语料中频率最高的相邻字符对，并将其合并为新的子词。</li>
<li><strong>重复迭代</strong>：直到达到预设的子词表大小或频率阈值。</li>
</ol>
<hr>
<h3 id="示例-从语料库中生成子词表" tabindex="-1"><a class="header-anchor" href="#示例-从语料库中生成子词表"><span>## 示例：从语料库中生成子词表</span></a></h3>
<p>以下是一个简单的BPE操作示例。</p>
<h4 id="初始语料库-带频次" tabindex="-1"><a class="header-anchor" href="#初始语料库-带频次"><span>初始语料库（带频次）</span></a></h4>
<table>
<thead>
<tr>
<th>词频</th>
<th>单词</th>
</tr>
</thead>
<tbody>
<tr>
<td>[5]</td>
<td>low_</td>
</tr>
<tr>
<td>[2]</td>
<td>lowest_</td>
</tr>
<tr>
<td>[6]</td>
<td>newer_</td>
</tr>
<tr>
<td>[3]</td>
<td>wider_</td>
</tr>
<tr>
<td>[2]</td>
<td>new_</td>
</tr>
</tbody>
</table>
<h4 id="基础字符频次统计" tabindex="-1"><a class="header-anchor" href="#基础字符频次统计"><span>基础字符频次统计</span></a></h4>
<table>
<thead>
<tr>
<th>字符</th>
<th>频次</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>_</code></td>
<td>18</td>
</tr>
<tr>
<td><code v-pre>d</code></td>
<td>3</td>
</tr>
<tr>
<td><code v-pre>e</code></td>
<td>19</td>
</tr>
<tr>
<td><code v-pre>i</code></td>
<td>3</td>
</tr>
<tr>
<td><code v-pre>l</code></td>
<td>7</td>
</tr>
<tr>
<td><code v-pre>n</code></td>
<td>8</td>
</tr>
<tr>
<td><code v-pre>o</code></td>
<td>7</td>
</tr>
<tr>
<td><code v-pre>r</code></td>
<td>9</td>
</tr>
<tr>
<td><code v-pre>s</code></td>
<td>2</td>
</tr>
<tr>
<td><code v-pre>t</code></td>
<td>2</td>
</tr>
<tr>
<td><code v-pre>w</code></td>
<td>22</td>
</tr>
</tbody>
</table>
<h4 id="第一次迭代-合并频率最高的字符对" tabindex="-1"><a class="header-anchor" href="#第一次迭代-合并频率最高的字符对"><span>第一次迭代：合并频率最高的字符对</span></a></h4>
<ul>
<li>合并 <code v-pre>r</code> 和 <code v-pre>_</code>，形成新子词 <code v-pre>r_</code>，更新后的频次为9。</li>
<li>更新后的字符频次表：</li>
</ul>
<table>
<thead>
<tr>
<th>字符</th>
<th>频次</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>_</code></td>
<td>9</td>
</tr>
<tr>
<td><code v-pre>d</code></td>
<td>3</td>
</tr>
<tr>
<td><code v-pre>e</code></td>
<td>19</td>
</tr>
<tr>
<td><code v-pre>i</code></td>
<td>3</td>
</tr>
<tr>
<td><code v-pre>l</code></td>
<td>7</td>
</tr>
<tr>
<td><code v-pre>n</code></td>
<td>8</td>
</tr>
<tr>
<td><code v-pre>o</code></td>
<td>7</td>
</tr>
<tr>
<td><code v-pre>r</code></td>
<td>0</td>
</tr>
<tr>
<td><code v-pre>s</code></td>
<td>2</td>
</tr>
<tr>
<td><code v-pre>t</code></td>
<td>2</td>
</tr>
<tr>
<td><code v-pre>w</code></td>
<td>22</td>
</tr>
<tr>
<td><code v-pre>r_</code></td>
<td>9</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="优缺点分析" tabindex="-1"><a class="header-anchor" href="#优缺点分析"><span>## 优缺点分析</span></a></h3>
<ul>
<li><strong>优点</strong>：
<ul>
<li>高效平衡了词汇表大小和编码步数。</li>
<li>能够处理稀有词，避免OOV（Out of Vocabulary）问题。</li>
</ul>
</li>
<li><strong>缺点</strong>：
<ul>
<li>基于贪婪算法，无法生成带概率的多种分词结果。</li>
<li>解码时可能存在歧义问题，例如同一输入可对应多种分词方式。</li>
</ul>
</li>
</ul>
<hr>
<h2 id="常见错误与注意事项" tabindex="-1"><a class="header-anchor" href="#常见错误与注意事项"><span>常见错误与注意事项</span></a></h2>
<p>⚠️ <strong>分词歧义问题</strong>：例如，&quot;Hello World&quot; 的分词结果可能出现多种形式，如 &quot;Hell/o/world&quot; 或 &quot;He/llo/world&quot;。</p>
<p>⚠️ <strong>贪婪算法局限性</strong>：BPE仅考虑当前最优合并对，可能错过全局最优解。</p>
<hr>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 实现一个简单的BPE算法，用于小型语料库测试。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 探索不同BPE参数（如词汇表大小）对模型性能的影响。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 比较BPE与其他分词方法（如WordPiece）的实际效果。</label></li>
</ul>
<hr>
<h2 id="思考-延伸问题" tabindex="-1"><a class="header-anchor" href="#思考-延伸问题"><span>[思考] 延伸问题</span></a></h2>
<ol>
<li>如何改进BPE算法，使其支持概率分词？</li>
<li>在多语言模型中，BPE如何适配不同语言的特性？
<ol>
<li>
<ul>
<li>任务是跨语言迁移/翻译 → 建议 <strong>共享 BPE + 语言前缀</strong></li>
</ul>
</li>
<li>如果是低资源语言建模 → 考虑 <strong>独立子词表</strong> 或 BBPE 分配资源更公平</li>
</ol>
</li>
<li>以结合深度学习技术优化BPE的子词选择过程？</li>
</ol>
<hr>
<blockquote>
<p><strong>来源</strong>：本文内容摘自论文《Neural Machine Translation of Rare Words with Subword Units》，链接：<a href="https://arxiv.org/pdf/1508.07909" target="_blank" rel="noopener noreferrer">https://arxiv.org/pdf/1508.07909</a></p>
</blockquote>
</div></template>


