<template><div><h2 id="什么是rag" tabindex="-1"><a class="header-anchor" href="#什么是rag"><span>什么是RAG？</span></a></h2>
<p>RAG（Retrieval Augmented Generation，检索增强生成）为生成式模型提供了与外部世界互动的一个很有前景的解决方案。其主要作用类似于搜索引擎，能够找到用户提问最相关的知识或者是相关的对话历史，并结合原始提问（查询），创造信息丰富的 prompt，指导模型生成准确输出。本质上，RAG应用了 In-Context Learning（上下文学习）的原理。</p>
<p>我们可以用以下公式来表示 RAG 的基本组成：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mtext>RAG（检索增强生成）</mtext><mo>=</mo><mtext>检索技术</mtext><mo>+</mo><mtext>LLM（大语言模型）提示</mtext></mrow><annotation encoding="application/x-tex">\text{RAG（检索增强生成）} = \text{检索技术} + \text{LLM（大语言模型）提示}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord">RAG</span><span class="mord cjk_fallback">（检索增强生成）</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord text"><span class="mord cjk_fallback">检索技术</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord">LLM</span><span class="mord cjk_fallback">（大语言模型）提示</span></span></span></span></span></span></p>
<hr>
<h2 id="llm本身的局限性" tabindex="-1"><a class="header-anchor" href="#llm本身的局限性"><span>LLM本身的局限性</span></a></h2>
<p>大语言模型（LLM）虽然功能强大，但它们也存在一些不可忽视的局限性。这些局限性包括以下几个方面：</p>
<h3 id="_1-知识的局限性" tabindex="-1"><a class="header-anchor" href="#_1-知识的局限性"><span>1. 知识的局限性</span></a></h3>
<p>LLM 的知识完全来源于其训练数据，而当前主流的大模型训练集基本基于网络公开的数据。因此，对于一些实时性的、非公开的或离线的数据，模型无法获取，也就无法具备这部分知识。</p>
<h3 id="_2-幻觉问题" tabindex="-1"><a class="header-anchor" href="#_2-幻觉问题"><span>2. 幻觉问题</span></a></h3>
<p>所有 AI 模型的底层原理都是基于数学概率，其输出本质上是一系列数值运算。大语言模型也不例外，因此它有时会出现所谓的“幻觉问题”，即在缺乏某一领域知识或不擅长的场景下，会生成看似合理但实际上错误的信息。这种幻觉问题难以区分，因为它要求使用者自身具有相应领域的知识。</p>
<h3 id="_3-数据安全性" tabindex="-1"><a class="header-anchor" href="#_3-数据安全性"><span>3. 数据安全性</span></a></h3>
<p>对于企业而言，数据安全至关重要。没有企业愿意承担数据泄露的风险，将自身的私域数据上传至第三方平台进行训练。这种顾虑导致完全依赖通用大模型能力的应用方案在数据安全性和效果之间不得不做出取舍。</p>
<hr>
<h2 id="rag的特点" tabindex="-1"><a class="header-anchor" href="#rag的特点"><span>RAG的特点</span></a></h2>
<p>RAG 的出现为解决 LLM 的局限性提供了一种有效方法。它具备以下几个显著特点：</p>
<h3 id="_1-依赖llm来强化信息检索和输出" tabindex="-1"><a class="header-anchor" href="#_1-依赖llm来强化信息检索和输出"><span>1. 依赖LLM来强化信息检索和输出</span></a></h3>
<p>RAG 的运作需要结合强大的 LLM 来进行信息检索和生成。如果单独使用 RAG，其能力会受到限制。因此，RAG 需要依赖性能优越的语言模型支持，才能更有效地生成和提供信息。</p>
<h3 id="_2-能与外部数据有效集成" tabindex="-1"><a class="header-anchor" href="#_2-能与外部数据有效集成"><span>2. 能与外部数据有效集成</span></a></h3>
<p>RAG 能够很好地接入和利用外部数据库中的数据资源。这一特性弥补了通用大模型在某些垂直领域或专业领域中的知识不足问题。例如，在行业特定术语和深度知识方面，RAG 能够提供更精确的答案。此外，它还能解决数据时效性问题，使得生成结果更加实时和可靠。</p>
<h3 id="_3-数据隐私和安全保障" tabindex="-1"><a class="header-anchor" href="#_3-数据隐私和安全保障"><span>3. 数据隐私和安全保障</span></a></h3>
<p>通常情况下，RAG 所连接的私有数据库不会参与到大模型的数据集中训练。因此，RAG 不仅能提升模型的输出表现，还能有效保护这些私有数据的隐私性和安全性，不会将敏感信息暴露给大模型的训练过程。</p>
<h3 id="_4-表现效果因多方面因素而异" tabindex="-1"><a class="header-anchor" href="#_4-表现效果因多方面因素而异"><span>4. 表现效果因多方面因素而异</span></a></h3>
<p>RAG 的效果受多种因素影响，包括所使用语言模型的性能、输入数据的质量、算法以及检索系统的设计等。不同的 RAG 系统之间可能存在较大的效果差异，因此不能一概而论。</p>
<hr>
<h1 id="rag流程与分类" tabindex="-1"><a class="header-anchor" href="#rag流程与分类"><span>RAG流程与分类</span></a></h1>
<h2 id="表现效果因多方面因素而异" tabindex="-1"><a class="header-anchor" href="#表现效果因多方面因素而异"><span>表现效果因多方面因素而异</span></a></h2>
<p>RAG的效果受到多个因素的影响，包括所使用的语言模型的性能、输入数据的质量、算法以及检索系统的设计等。这意味着不同的RAG系统之间可能存在较大的效果差异，因此不能一概而论。</p>
<hr>
<h2 id="rag整体思路" tabindex="-1"><a class="header-anchor" href="#rag整体思路"><span>RAG整体思路</span></a></h2>
<p>RAG系统的工作流程可以分为以下五个基本步骤：</p>
<ol>
<li>知识文档的准备</li>
<li>Embedding模型</li>
<li>向量数据库</li>
<li>查询检索</li>
<li>生成回答</li>
</ol>
<p>接下来，我们将逐步解析每个步骤的具体内容和实现方式。</p>
<hr>
<h2 id="知识文档的准备" tabindex="-1"><a class="header-anchor" href="#知识文档的准备"><span>知识文档的准备</span></a></h2>
<p>在构建一个高效的RAG系统时，首要步骤是准备知识文档。现实中的知识源可能包括多种格式，例如：</p>
<ul>
<li>Word文档</li>
<li>TXT文件</li>
<li>CSV数据表</li>
<li>Excel表格</li>
<li>PDF文件</li>
<li>图片和视频</li>
</ul>
<h3 id="转换为纯文本数据" tabindex="-1"><a class="header-anchor" href="#转换为纯文本数据"><span>转换为纯文本数据</span></a></h3>
<p>为了让大语言模型能够理解这些知识源，第一步需要使用专门的文档加载器或多模态模型将其转换为纯文本数据。例如：</p>
<ul>
<li><strong>PDF文件</strong>：可以利用PDF提取器抽取文本内容。</li>
<li><strong>图片和视频</strong>：OCR（光学字符识别）技术能够识别并转换其中的文字信息。</li>
</ul>
<h3 id="文档切片" tabindex="-1"><a class="header-anchor" href="#文档切片"><span>文档切片</span></a></h3>
<p>由于文档可能存在过长的问题，我们需要对其进行切片处理，将长篇文档分割成多个文本块。这项关键步骤有助于：</p>
<ol>
<li>减轻模型的计算负担。</li>
<li>提高信息检索的准确性。</li>
</ol>
<hr>
<h2 id="embedding模型" tabindex="-1"><a class="header-anchor" href="#embedding模型"><span>Embedding模型</span></a></h2>
<p>Embedding模型的核心任务是将文本转换为向量形式。日常语言中往往充满歧义和无意义的助词，而向量表示更加密集、精确，能够捕捉句子的上下文关系和核心含义，从而有效识别语义上相似的句子。</p>
<p>目前常用的Embedding模型包括：</p>
<ul>
<li>Word2Vec</li>
<li>BERT</li>
<li>GPT系列</li>
<li>BGE系列</li>
</ul>
<p>这些模型通过先进的算法，将复杂的语言表达映射到高维向量空间，为后续检索和生成提供了坚实基础。</p>
<hr>
<h2 id="向量数据库" tabindex="-1"><a class="header-anchor" href="#向量数据库"><span>向量数据库</span></a></h2>
<p>向量数据库是一种专门设计用于存储和检索向量数据的数据库系统。在RAG系统中，所有通过Embedding模型生成的向量都会被存储在这样的数据库中。</p>
<h3 id="优化存储与检索效率" tabindex="-1"><a class="header-anchor" href="#优化存储与检索效率"><span>优化存储与检索效率</span></a></h3>
<p>向量数据库优化了处理和存储大规模向量数据的效率，使得在面对海量知识向量时，系统能够迅速检索出与用户查询最相关的信息。</p>
<hr>
<h2 id="查询检索" tabindex="-1"><a class="header-anchor" href="#查询检索"><span>查询检索</span></a></h2>
<p>在这一阶段，用户的问题会被输入到Embedding模型中进行向量化处理。接着，系统会在向量数据库中搜索与该问题向量语义上相似的知识文本或历史对话记录，并将结果返回给用户。</p>
<p>这一过程确保了用户能够快速获取与问题相关的信息，为后续回答生成奠定了基础。</p>
<hr>
<h2 id="生成回答" tabindex="-1"><a class="header-anchor" href="#生成回答"><span>生成回答</span></a></h2>
<p>最后一步是生成回答。系统将用户提问与上一阶段检索到的信息结合起来，构建出一个提示模板，并将其输入到大语言模型中。随后，大语言模型会根据提示模板生成最终答案并输出。</p>
<p>这一阶段是RAG系统的核心目标所在，也是用户体验的重要体现。</p>
<h2 id="rag分类" tabindex="-1"><a class="header-anchor" href="#rag分类"><span>RAG分类</span></a></h2>
<h3 id="三个阶段-naive-rag、advanced-rag、modular-rag" tabindex="-1"><a class="header-anchor" href="#三个阶段-naive-rag、advanced-rag、modular-rag"><span>三个阶段：Naive RAG、Advanced RAG、Modular RAG</span></a></h3>
<p>RAG技术的发展可以划分为以下三个阶段：</p>
<ol>
<li><strong>Naive RAG</strong>：经典的RAG方法，主要涉及“检索-阅读”过程。</li>
<li><strong>Advanced RAG</strong>：在Naive RAG的基础上，通过优化索引、检索和生成质量，克服了许多技术挑战。</li>
<li><strong>Modular RAG</strong>：在结构和功能上更加灵活，引入了更多模块化设计，支持复杂场景下的应用。</li>
</ol>
<p><img src="/img/user/附件/Pasted image 20250506211943.png" alt="Pasted image 20250506211943.png"></p>
<h3 id="相关综述论文" tabindex="-1"><a class="header-anchor" href="#相关综述论文"><span>相关综述论文</span></a></h3>
<p>关于RAG的详细综述可以参考以下文献：
<strong>《Retrieval-Augmented Generation for Large Language Models: A Survey》</strong></p>
<hr>
<h2 id="naive-rag" tabindex="-1"><a class="header-anchor" href="#naive-rag"><span>Naive RAG</span></a></h2>
<p>Naive RAG是最基础的RAG实现，主要包含以下三个步骤：</p>
<ol>
<li><strong>索引</strong>：将文档库分割成较短的文本块（Chunk），并通过编码器构建向量索引。</li>
<li><strong>检索</strong>：根据用户问题与文本块之间的相似度，检索相关文档片段。</li>
<li><strong>生成</strong>：以检索到的上下文为条件，生成问题的回答。</li>
</ol>
<h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h3>
<ul>
<li>采用传统的索引、检索和生成流程，操作简单。</li>
<li>直接基于用户输入进行查询。</li>
<li>结合相关文档与问题形成新的提示，供大型语言模型生成答案。</li>
</ul>
<h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h3>
<ul>
<li>检索质量低，可能导致“空中掉落”现象，即模型未能找到相关答案。</li>
<li>响应生成质量存在幻觉（hallucination）和转换不相关性问题。</li>
<li>增强过程中的集成挑战较多，如冗余和风格一致性问题。</li>
</ul>
<hr>
<h2 id="advanced-rag" tabindex="-1"><a class="header-anchor" href="#advanced-rag"><span>Advanced RAG</span></a></h2>
<p>Advanced RAG在Naive RAG的基础上进行了改进，主要针对以下几个方面进行优化：</p>
<ol>
<li><strong>数据索引优化</strong>：通过更精细的数据清洗、设计文档结构和添加元数据等方法，提升文本的一致性、准确性和检索效率。</li>
<li><strong>检索前优化</strong>：
<ul>
<li>使用问题重写（Query Rewriting）对齐问题和文档块之间的语义差异。</li>
<li>路由和扩充技术可以更好地匹配用户问题与文档内容。</li>
</ul>
</li>
<li><strong>检索后优化</strong>：
<ul>
<li>对检索出来的文档库进行重排序，避免“Lost in the Middle”现象（即重要信息被忽略）。</li>
<li>通过上下文筛选与压缩的方法缩短窗口长度，提高生成效率。</li>
</ul>
</li>
</ol>
<h3 id="优点-1" tabindex="-1"><a class="header-anchor" href="#优点-1"><span>优点</span></a></h3>
<ul>
<li>优化数据索引，提高了索引内容质量。</li>
<li>实施预检索和后检索方法，提高了检索和生成的质量。</li>
<li>引入混合检索和图结构优化，提高了复杂场景下的表现能力。</li>
</ul>
<h3 id="缺点-1" tabindex="-1"><a class="header-anchor" href="#缺点-1"><span>缺点</span></a></h3>
<ul>
<li>高级优化增加了系统复杂性。</li>
<li>对计算资源和处理能力有更高要求。</li>
<li>需要更多的定制和调优以提高效率和相关性。</li>
</ul>
<hr>
<h2 id="modular-rag" tabindex="-1"><a class="header-anchor" href="#modular-rag"><span>Modular RAG</span></a></h2>
<p>Modular RAG是RAG发展的高级阶段，其特点是引入了更多功能模块，使系统更加灵活和可扩展。主要特性包括：</p>
<ol>
<li><strong>功能模块化</strong>：
<ul>
<li>支持查询搜索引擎。</li>
<li>融合多个回答模块。</li>
</ul>
</li>
<li><strong>技术融合</strong>：
<ul>
<li>将检索与微调、强化学习等技术相结合。</li>
</ul>
</li>
<li><strong>流程设计与编排</strong>：
<ul>
<li>支持串行或端到端训练方法。</li>
<li>允许跨多个模块进行定制，形成多种RAG模式。</li>
</ul>
</li>
</ol>
<h3 id="优点-2" tabindex="-1"><a class="header-anchor" href="#优点-2"><span>优点</span></a></h3>
<ul>
<li>增加功能模块，提供多样性和灵活性。</li>
<li>适应性强，可针对特定问题上下文替换或重组模块。</li>
<li>支持跨模块训练，进一步提升系统性能。</li>
</ul>
<h3 id="缺点-2" tabindex="-1"><a class="header-anchor" href="#缺点-2"><span>缺点</span></a></h3>
<ul>
<li>构建和维护模块化系统可能较为复杂。</li>
<li>需要仔细管理以确保模块间的协调和一致性。</li>
</ul>
<hr>
</div></template>


