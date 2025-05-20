<template><div><h2 id="什么是基于语义分块" tabindex="-1"><a class="header-anchor" href="#什么是基于语义分块"><span>什么是基于语义分块？</span></a></h2>
<p>基于语义分块是一种利用自然语言处理方法，根据语义或句子边界对文本进行切分的技术。这种方法通过在句子结尾或标点处分块，或者通过模型预测段落边界，将文档分段为有意义的单元（如句子、段落或主题部分）。其目标是尽量保证每个分块的语义独立完整。
<img src="/img/user/附件/Pasted image 20250506215357.png" alt="Pasted image 20250506215357.png">
<img src="/img/user/附件/Pasted image 20250506215404.png" alt="Pasted image 20250506215404.png"></p>
<h3 id="做法" tabindex="-1"><a class="header-anchor" href="#做法"><span>做法</span></a></h3>
<ol>
<li><strong>语义切分</strong>：在句子结尾、标点处或通过模型预测段落边界进行分块。</li>
<li><strong>创建 Embedding</strong>：为每个分段创建 embedding（嵌入向量）。</li>
<li><strong>相似度计算</strong>：比较相邻分段的 embedding。如果两个分段的余弦相似度较高，则将它们合并为一个分块。</li>
<li><strong>新片段开始</strong>：当余弦相似度显著下降时，开始一个新的片段，并重复上述步骤。</li>
</ol>
<h3 id="优势" tabindex="-1"><a class="header-anchor" href="#优势"><span>优势</span></a></h3>
<ul>
<li><strong>上下文相关性</strong>：每个分块的语义完整性更高，有助于上下文理解。</li>
<li><strong>灵活性</strong>：适用于不同语言和文本类型。</li>
<li><strong>提高检索准确性</strong>：内容更丰富，能够帮助语言模型（LLM）生成更连贯、更相关的回应。</li>
</ul>
<h3 id="局限性" tabindex="-1"><a class="header-anchor" href="#局限性"><span>局限性</span></a></h3>
<ul>
<li><strong>复杂性</strong>：实现过程较为复杂。</li>
<li><strong>处理时间长</strong>：由于需要计算余弦相似度和多次迭代，处理速度较慢。</li>
<li><strong>计算成本高</strong>：需要更多的计算资源。</li>
<li><strong>阈值调整</strong>：余弦相似度的阈值可能因文档而异，需要手动调整。</li>
</ul>
<hr>
<h2 id="nltk-的文本切分功能" tabindex="-1"><a class="header-anchor" href="#nltk-的文本切分功能"><span>NLTK 的文本切分功能</span></a></h2>
<p>NLTK（Natural Language Toolkit）是一个广泛使用的 Python 自然语言处理库，提供了丰富的文本处理功能。其 <code v-pre>sent_tokenize</code> 方法可以自动将文本切分为句子。</p>
<h3 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h3>
<p><code v-pre>sent_tokenize</code> 方法基于论文《Unsupervised Multilingual Sentence Boundary Detection》的研究成果，使用无监督算法为缩写词、搭配词和句子开头的词建立模型，然后利用这些模型识别句子边界。这种方法在多种语言（主要是欧洲语言）上都取得了良好效果。</p>
<h3 id="中文支持现状" tabindex="-1"><a class="header-anchor" href="#中文支持现状"><span>中文支持现状</span></a></h3>
<ol>
<li><strong>预训练模型缺失</strong>：NLTK 官方并未提供中文分句模型的预训练权重，因此需要用户自行训练。</li>
<li><strong>训练接口可用</strong>：NLTK 提供了训练接口，用户可以基于自己的中文语料库训练分句模型。</li>
</ol>
<hr>
<h2 id="在-langchain-中的应用" tabindex="-1"><a class="header-anchor" href="#在-langchain-中的应用"><span>在 LangChain 中的应用</span></a></h2>
<p>LangChain 集成了 NLTK 的文本切分功能，用户可以直接调用这些功能来实现文本切分。以下是一个示例代码：</p>
<h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h3>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">from</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> langchain</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">text_splitter </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> NLTKTextSplitter</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">text_splitter </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> NLTKTextSplitter</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">text </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">...</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 待处理的文本</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">texts </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> text_splitter</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">split_text</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">text</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">for</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> doc </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">in</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> texts</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    print</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">doc</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="扩展-基于-spacy-的文本切块" tabindex="-1"><a class="header-anchor" href="#扩展-基于-spacy-的文本切块"><span>扩展：基于 spaCy 的文本切块</span></a></h2>
<p>spaCy 是另一款强大的自然语言处理库，具备更高级的语言分析能力。LangChain 同样集成了 spaCy 的文本切分方法。</p>
<h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h3>
<p>只需将 <code v-pre>NLTKTextSplitter</code> 替换为 <code v-pre>SpacyTextSplitter</code> 即可：</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">from</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> langchain</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">text_splitter </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> SpacyTextSplitter</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">text_splitter </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> SpacyTextSplitter</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">text </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">...</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 待处理的文本</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">texts </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> text_splitter</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">split_text</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">text</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">for</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> doc </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">in</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> texts</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    print</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">doc</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="提示" tabindex="-1"><a class="header-anchor" href="#提示"><span>提示</span></a></h3>
<p>使用 spaCy 时，需要先下载对应语言的模型。例如，对于中文处理，可以下载 spaCy 的中文语言模型。</p>
<hr>
</div></template>


