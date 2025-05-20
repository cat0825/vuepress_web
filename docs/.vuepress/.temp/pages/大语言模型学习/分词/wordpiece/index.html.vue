<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li><strong>分类</strong>：自然语言处理 (NLP)</li>
<li><strong>标签</strong>：WordPiece, 分词算法, 自然语言处理, NLP模型, Tokenization</li>
<li><strong>日期</strong>：2025年4月2日</li>
</ul>
<hr>
<h2 id="wordpiece分词算法简介" tabindex="-1"><a class="header-anchor" href="#wordpiece分词算法简介"><span>WordPiece分词算法简介</span></a></h2>
<p>WordPiece是一种常见的分词算法，广泛应用于自然语言处理任务中（如BERT模型）。其核心思想与BPE（Byte Pair Encoding）类似，但在合并子词时采用了基于互信息（Mutual Information）的策略，能更好地平衡词表大小和OOV（Out-Of-Vocabulary，未登录词）问题。</p>
<p>💡 <strong>启发点</strong>：通过互信息优化子词合并，提升了语言模型的表现力。</p>
<hr>
<h2 id="核心观点与实现步骤" tabindex="-1"><a class="header-anchor" href="#核心观点与实现步骤"><span>核心观点与实现步骤</span></a></h2>
<h3 id="wordpiece的核心思想" tabindex="-1"><a class="header-anchor" href="#wordpiece的核心思想"><span>WordPiece的核心思想</span></a></h3>
<ul>
<li>与BPE类似，WordPiece从一个基础词表出发，通过不断合并子词生成最终的词表。</li>
<li>不同于BPE按频率选择合并对，WordPiece通过计算子词间的互信息来决定合并顺序。</li>
<li><strong>互信息的公式</strong>：<br>
假设合并子词 <code v-pre>x</code> 和 <code v-pre>y</code> 后生成新子词 <code v-pre>z</code>，互信息得分计算如下：<div class="language-math line-numbers-mode" data-highlighter="shiki" data-ext="math" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>score = P(x) * P(y) / P(z)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>其中，<code v-pre>P(x)</code> 表示子词 <code v-pre>x</code> 在语料中的出现频率。</li>
</ul>
<hr>
<h3 id="wordpiece的实现步骤" tabindex="-1"><a class="header-anchor" href="#wordpiece的实现步骤"><span>WordPiece的实现步骤</span></a></h3>
<p>以下是WordPiece分词的主要步骤，用简单的符号和标记描述：</p>
<p>✅ <strong>步骤1</strong>：准备基础词表</p>
<ul>
<li>包含26个英文字母及常见符号，如<code v-pre>a, b, c, @, #</code>等。</li>
</ul>
<p>✅ <strong>步骤2</strong>：将语料拆分为最小单元</p>
<ul>
<li>每个单词被拆分为基础字母或符号，例如<code v-pre>hello</code>被拆分为<code v-pre>h, e, l, l, o</code>。</li>
</ul>
<p>✅ <strong>步骤3</strong>：训练语言模型</p>
<ul>
<li>基于拆分后的数据，使用Unigram语言模型训练子词概率。</li>
</ul>
<p>✅ <strong>步骤4</strong>：选择互信息最大的子词对合并</p>
<ul>
<li>从所有可能的子词对中选择，使得合并后能最大程度提高语料的概率。</li>
</ul>
<p>✅ <strong>步骤5</strong>：重复合并，直到满足条件</p>
<ul>
<li>条件可以是达到预设的词表大小或概率增量低于某一阈值。</li>
</ul>
<hr>
<h3 id="实现代码片段" tabindex="-1"><a class="header-anchor" href="#实现代码片段"><span>实现代码片段</span></a></h3>
<p>以下是WordPiece中计算互信息得分的核心代码：</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 计算子词对的互信息得分</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">scores </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    pair</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> freq </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">/</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">letter_freqs</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">pair</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]]</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> letter_freqs</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">pair</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]])</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    for</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> pair</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> freq </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">in</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> pair_freqs</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">items</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">return</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> scores</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="优缺点分析" tabindex="-1"><a class="header-anchor" href="#优缺点分析"><span>优缺点分析</span></a></h2>
<table>
<thead>
<tr>
<th><strong>优点</strong></th>
<th><strong>缺点</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>较好地平衡了词表大小和未登录词问题</td>
<td>可能产生不合理的子词切分</td>
</tr>
<tr>
<td>子词间关联性强，提高语言模型表现</td>
<td>对拼写错误敏感</td>
</tr>
<tr>
<td>支持高效的语言模型训练</td>
<td>对前缀处理效果不佳</td>
</tr>
</tbody>
</table>
<p>💡 <strong>启发点</strong>：可以通过改进前缀和复合词处理，进一步优化算法效果。</p>
<hr>
<h2 id="常见错误与注意事项" tabindex="-1"><a class="header-anchor" href="#常见错误与注意事项"><span>常见错误与注意事项</span></a></h2>
<p>⚠️ <strong>常见错误1</strong>：忽略基础词表的重要性</p>
<ul>
<li>基础词表过小会导致过多无意义的子词生成。</li>
</ul>
<p>⚠️ <strong>常见错误2</strong>：不合理设置阈值</p>
<ul>
<li>如果合并阈值过低，可能导致训练时间过长或出现低质量子词。</li>
</ul>
<p>⚠️ <strong>常见错误3</strong>：未考虑语料质量</p>
<ul>
<li>拼写错误、噪声数据会显著影响分词效果。</li>
</ul>
<hr>
<h2 id="思考与延伸问题" tabindex="-1"><a class="header-anchor" href="#思考与延伸问题"><span>思考与延伸问题</span></a></h2>
<ol>
<li>如何在WordPiece中更好地处理拼写错误或前缀问题？</li>
<li>是否可以结合BPE和WordPiece的优点创建新的分词算法？</li>
<li>在多语言环境下，WordPiece是否需要特殊优化？</li>
</ol>
<hr>
<blockquote>
<p><strong>来源</strong>：<a href="https://arxiv.org/pdf/2012.15524" target="_blank" rel="noopener noreferrer">论文《Fast WordPiece Tokenization》</a></p>
</blockquote>
<hr>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 实现WordPiece分词算法，并测试不同语料下的效果。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 比较BPE与WordPiece在OOV处理上的性能差异。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 探索基于互信息优化的新型分词方法。</label></li>
</ul>
<hr>
<h2 id="后续追踪计划" tabindex="-1"><a class="header-anchor" href="#后续追踪计划"><span>后续追踪计划</span></a></h2>
<p>📈 <strong>趋势预测</strong>：随着NLP模型对多语言支持需求增加，更高效、更通用的分词算法将成为研究热点。<br>
📋 <strong>研究计划</strong>：</p>
<ol>
<li>开展对比实验，评估不同分词算法在实际任务中的表现。</li>
<li>探索如何结合深度学习优化分词过程，例如用Transformer预测子词合并。</li>
</ol>
</div></template>


