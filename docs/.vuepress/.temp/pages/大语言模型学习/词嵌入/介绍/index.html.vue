<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li><strong>分类</strong>：自然语言处理（NLP）</li>
<li><strong>标签</strong>：Embedding、词向量、PyTorch、深度学习</li>
<li><strong>日期</strong>：2025年4月1日</li>
</ul>
<hr>
<h2 id="_1-什么是词嵌入-embedding" tabindex="-1"><a class="header-anchor" href="#_1-什么是词嵌入-embedding"><span>1. 什么是词嵌入（Embedding）？</span></a></h2>
<p>词嵌入（Embedding）是一种将高维数据（如文本或图像）映射到低维向量空间的技术。它的核心功能是将计算机无法直接理解的物理量（如文字、图片、语言等）转化为计算机可以处理的稠密向量，同时尽量保留原始信息。</p>
<p>💡 <strong>启发点</strong>：Embedding 的本质是一种映射关系，可以看作是从复杂的现实世界到计算机可操作世界的一种&quot;翻译&quot;。</p>
<h3 id="核心特性" tabindex="-1"><a class="header-anchor" href="#核心特性"><span>核心特性</span></a></h3>
<ol>
<li><strong>单射性和同构性</strong>：Embedding 是单射的映射，意味着每个输入都有唯一的输出。</li>
<li><strong>高维到低维</strong>：通过稠密向量表征高维数据，减少计算复杂度。</li>
<li><strong>可学习参数矩阵</strong>：Embedding 是一个全连接层，可通过训练优化。</li>
</ol>
<hr>
<h2 id="_2-embedding-的实现与工作机制" tabindex="-1"><a class="header-anchor" href="#_2-embedding-的实现与工作机制"><span>2. Embedding 的实现与工作机制</span></a></h2>
<h3 id="_2-1-pytorch-实现" tabindex="-1"><a class="header-anchor" href="#_2-1-pytorch-实现"><span>2.1 PyTorch 实现</span></a></h3>
<p>在 PyTorch 中，常用 <code v-pre>nn.Embedding(vocab_size, embed_dim)</code> 来实现词嵌入：</p>
<ul>
<li><code v-pre>vocab_size</code>：词表大小，即可能出现的词汇总数。</li>
<li><code v-pre>embed_dim</code>：词向量的维度，决定了每个词在向量空间中的表示复杂度。</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> torch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">nn </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">as</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> nn</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 定义一个Embedding层</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">embedding </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> nn</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Embedding</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">vocab_size</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">10000</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> embed_dim</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">300</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 示例输入：索引形式的单词</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">input_indices </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> torch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">tensor</span><span style="--shiki-light:#999999;--shiki-dark:#666666">([</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 5</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 8</span><span style="--shiki-light:#999999;--shiki-dark:#666666">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 输出：对应的词向量</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">output_vectors </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> embedding</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">input_indices</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>💡 <strong>启发点</strong>：通过查表（lookup）代替矩阵乘积，大幅提升性能。</p>
<hr>
<h3 id="_2-2-embedding-的物理意义" tabindex="-1"><a class="header-anchor" href="#_2-2-embedding-的物理意义"><span>2.2 Embedding 的物理意义</span></a></h3>
<p>用一个简单的比喻，Embedding 就像地图：</p>
<ul>
<li>地图是现实地理信息的二维表示，而真实地形可能是多维的。</li>
<li>Embedding 将文字、图片等复杂数据映射到低维空间，同时尽量保留其语义信息。</li>
</ul>
<p>📈 <strong>趋势预测</strong>：
随着更强大的模型和硬件支持，未来 Embedding 的维度和表现能力将进一步提升，可能会出现更高效的多模态嵌入技术。</p>
<hr>
<h2 id="_3-常见错误与注意事项" tabindex="-1"><a class="header-anchor" href="#_3-常见错误与注意事项"><span>3. 常见错误与注意事项</span></a></h2>
<p>⚠️ <strong>常见错误</strong></p>
<ul>
<li><strong>词表外词汇问题</strong>：对于未在训练中出现的词汇，Embedding 层可能无法生成有效表示。</li>
<li><strong>过小的词向量维度</strong>：可能导致语义信息丢失。</li>
<li><strong>过大的词向量维度</strong>：可能导致过拟合，增加计算成本。</li>
</ul>
<hr>
<h2 id="_5-行动清单" tabindex="-1"><a class="header-anchor" href="#_5-行动清单"><span>5. 行动清单</span></a></h2>
<p>✅ 学习 PyTorch 中 <code v-pre>nn.Embedding</code> 的更多用法<br>
✅ 探索不同维度大小对模型性能的影响<br>
❗️ 实验如何处理 OOV（词表外）问题</p>
<hr>
<h2 id="_6-思考-延伸问题" tabindex="-1"><a class="header-anchor" href="#_6-思考-延伸问题"><span>6. [思考] 延伸问题</span></a></h2>
<ol>
<li>如何设计更高效的 Embedding 方法以适应多模态数据（如文本+图像）？</li>
<li>在实际应用中，如何平衡 Embedding 的维度和模型性能？</li>
<li>是否可以通过预训练技术进一步提升 Embedding 的泛化能力？</li>
</ol>
<hr>
<h2 id="_7-后续追踪研究计划" tabindex="-1"><a class="header-anchor" href="#_7-后续追踪研究计划"><span>7. 后续追踪研究计划</span></a></h2>
<ul>
<li>探索基于 Transformer 的动态词嵌入方法。</li>
<li>比较不同深度学习框架中 Embedding 层的实现差异。</li>
<li>调研最新的多模态嵌入技术及其应用场景。</li>
</ul>
<hr>
<blockquote></blockquote>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">graph TD</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    A["输入文本: 'Playing with fire.'"] --> B[BBPE 分词器]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    B --> C["Token IDs: [12139, 356, 703, 1123, 13]"]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    C --> D["查嵌入矩阵: nn.Embedding(50257, 768)"]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    D --> E["输出 shape: (5, 768) 嵌入向量"]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    E --> F[Transformer 编码器]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    F --> G[预测下一个 token]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    G --> H[计算 Loss]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    H --> I[反向传播]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    I --> D</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


