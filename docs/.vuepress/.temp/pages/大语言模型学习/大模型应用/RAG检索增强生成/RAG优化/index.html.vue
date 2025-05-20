<template><div><p>在构建基于 RAG（Retrieval-Augmented Generation）技术的系统时，文档知识准备是至关重要的一步。为了确保模型能够高效、准确地从知识库中检索并生成答案，我们需要对原始数据进行清洗、优化和增强。本文将详细探讨文档知识准备阶段的关键步骤，帮助大家更好地理解和实践这一过程。</p>
<hr>
<h2 id="数据清洗" tabindex="-1"><a class="header-anchor" href="#数据清洗"><span>数据清洗</span></a></h2>
<p>RAG 的性能高度依赖于知识数据的准确性和清洁程度。在数据清洗过程中，我们需要关注以下几个方面：</p>
<h3 id="_1-确保数据的准确性" tabindex="-1"><a class="header-anchor" href="#_1-确保数据的准确性"><span>1. 确保数据的准确性</span></a></h3>
<p>为了保证数据的准确性，我们需要优化文档读取器和多模态模型。特别是在处理如 CSV 表格等文件时，单纯的文本转换可能会导致表格原有结构的丢失。因此，我们需要引入额外的机制，在文本中恢复表格结构。例如，可以使用分号或其他符号来区分数据，从而保留表格的逻辑关系。</p>
<h3 id="_2-基本数据清理" tabindex="-1"><a class="header-anchor" href="#_2-基本数据清理"><span>2. 基本数据清理</span></a></h3>
<p>对知识文档进行基本的数据清理是必不可少的一步，其中包括：</p>
<ul>
<li><strong>规范文本格式</strong>：统一文档中的字体、段落样式等，确保格式一致。</li>
<li><strong>去除特殊字符和不相关信息</strong>：如多余的标点符号、乱码等。</li>
<li><strong>删除重复文档或冗余信息</strong>：避免因重复内容而导致检索效率下降。</li>
</ul>
<h3 id="_3-实体解析" tabindex="-1"><a class="header-anchor" href="#_3-实体解析"><span>3. 实体解析</span></a></h3>
<p>在知识库中，不同术语可能会指代相同的实体或概念。为了避免歧义，我们需要对实体和术语进行标准化处理。例如：</p>
<ul>
<li>将“LLM”、“大语言模型”和“大模型”统一为同一个通用术语。</li>
<li>通过消歧技术确保引用的一致性，使系统能够正确地理解用户查询。</li>
</ul>
<hr>
<h2 id="文档划分" tabindex="-1"><a class="header-anchor" href="#文档划分"><span>文档划分</span></a></h2>
<p>合理划分文档是提升检索效率的重要环节。我们需要思考以下问题：</p>
<ul>
<li><strong>主题的组织方式</strong>：不同主题的文档是集中存放还是分散存放？<br>
如果人类都无法轻松判断需要查阅哪个文档来回答常见问题，那么检索系统也会面临同样的困难。</li>
<li><strong>划分策略</strong>：可以根据主题、时间、内容类型等维度对文档进行分类，使其更加有序和易于检索。</li>
</ul>
<hr>
<h2 id="数据增强" tabindex="-1"><a class="header-anchor" href="#数据增强"><span>数据增强</span></a></h2>
<p>为了提升语料库的多样性和覆盖范围，可以采用以下数据增强方法：</p>
<ul>
<li><strong>同义词和释义扩展</strong>：为现有内容添加同义词或释义版本，以便系统能够更灵活地理解用户查询。</li>
<li><strong>多语言翻译</strong>：将内容翻译为其他语言，扩展知识库的语言适应性，同时也增加了语料的多样性。</li>
</ul>
<hr>
<h2 id="用户反馈循环" tabindex="-1"><a class="header-anchor" href="#用户反馈循环"><span>用户反馈循环</span></a></h2>
<p>现实世界用户的反馈是优化知识库的重要依据。通过收集用户在实际使用中的反馈，我们可以：</p>
<ul>
<li><strong>更新数据库</strong>：基于用户反馈对现有内容进行增补或修正。</li>
<li><strong>标记真实性</strong>：确保知识库中的信息真实可靠，剔除可能误导用户的信息。</li>
</ul>
<p>这种循环机制能够帮助我们不断改进知识库，使其更加贴合用户需求。</p>
<hr>
<h2 id="时间敏感数据处理" tabindex="-1"><a class="header-anchor" href="#时间敏感数据处理"><span>时间敏感数据处理</span></a></h2>
<p>对于一些经常更新的主题，例如新闻、科技动态等，我们需要设计一套机制来管理时间敏感的数据：</p>
<ul>
<li><strong>失效机制</strong>：让过时的文档自动失效，避免用户查询到不再适用的信息。</li>
<li><strong>更新机制</strong>：定期检查并更新相关内容，以确保知识库始终保持最新状态。</li>
</ul>
<hr>
<h2 id="解析pdf文件的主流方法详解" tabindex="-1"><a class="header-anchor" href="#解析pdf文件的主流方法详解"><span>解析PDF文件的主流方法详解</span></a></h2>
<p>在构建RAG（Retrieval-Augmented Generation）系统时，最麻烦的莫过于构建知识库，而一个完美的知识库是实现检索精准的关键。今天，我们就来聊一聊目前有哪些主流的PDF解析手段，以及它们的优缺点和适用场景。</p>
<hr>
<h2 id="一、基于规则的解析算法" tabindex="-1"><a class="header-anchor" href="#一、基于规则的解析算法"><span>一、基于规则的解析算法</span></a></h2>
<h3 id="方法简介" tabindex="-1"><a class="header-anchor" href="#方法简介"><span>方法简介</span></a></h3>
<p>在Langchain中，默认使用的PDF解析算法是 <strong>pypdf</strong>。其主要原理是根据PDF页面中的文本对象的坐标和布局信息，按照一定的顺序提取文本内容，尽可能保持原文档中的文本顺序和格式。</p>
<h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h3>
<ul>
<li>能够根据文档的组织特征，确定每个部分的风格和内容。</li>
<li>对于结构化较好的文档，解析效果较为理想。</li>
</ul>
<h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h3>
<ul>
<li>不够通用，无法处理复杂排版。</li>
<li>对于格式较为复杂的PDF文档（如多栏排版、嵌套表格等），解析效果较差。</li>
</ul>
<hr>
<h2 id="二、基于多模态大模型的解析技术" tabindex="-1"><a class="header-anchor" href="#二、基于多模态大模型的解析技术"><span>二、基于多模态大模型的解析技术</span></a></h2>
<h3 id="方法简介-1" tabindex="-1"><a class="header-anchor" href="#方法简介-1"><span>方法简介</span></a></h3>
<p>该方法直接利用 <strong>VLM（Vision-Language Model）</strong> 对PDF信息进行抽取。其核心在于如何编写一个完备的prompt，以及如何评估抽取结果的准确性。</p>
<h3 id="可选的基座模型" tabindex="-1"><a class="header-anchor" href="#可选的基座模型"><span>可选的基座模型</span></a></h3>
<p>目前，许多大模型都可以作为基座模型使用，这里需要根据具体需求选择适合的模型。</p>
<h3 id="prompt示例" tabindex="-1"><a class="header-anchor" href="#prompt示例"><span>Prompt示例</span></a></h3>
<p>以下是一个效果较好的prompt示例（需注意，<code v-pre>do_sample</code> 参数需设置为 <code v-pre>False</code>）：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>"As a professional OCR expert, analyze the provided document/images and extract text with 100% fidelity. For multi-page PDFs, maintain page separation using clear markers. Preserve original layouts including paragraphs, lists, tables using appropriate delimiters. Convert formulas to LaTeX (preferred) with context notation for complex equations. Retain original formatting styles (bold/italic) using Markdown. Flag low-confidence text regions with xxx. Exclude headers/footers unless specified. Never modify/add content."</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="优势与挑战" tabindex="-1"><a class="header-anchor" href="#优势与挑战"><span>优势与挑战</span></a></h3>
<ul>
<li><strong>优势</strong>：该方法能够处理复杂排版，并且可以通过prompt灵活调整解析需求。</li>
<li><strong>挑战</strong>：需要设计合理的prompt，同时对抽取结果进行人工评估，以确保准确性。</li>
</ul>
<hr>
<h2 id="三、多级标题如何处理" tabindex="-1"><a class="header-anchor" href="#三、多级标题如何处理"><span>三、多级标题如何处理</span></a></h2>
<h3 id="为什么要处理多级标题" tabindex="-1"><a class="header-anchor" href="#为什么要处理多级标题"><span>为什么要处理多级标题？</span></a></h3>
<ul>
<li>对于一些高层次的问题，没有标题信息很难得到满意的结果。</li>
<li>标题是快速生成摘要的核心文本，能够帮助我们快速定位关键信息。</li>
</ul>
<h3 id="具体做法" tabindex="-1"><a class="header-anchor" href="#具体做法"><span>具体做法</span></a></h3>
<ol>
<li>
<p><strong>使用OCR工具提取标题区块文字</strong><br>
推荐使用 <strong>Layout-parse</strong> 工具，但其缺点是速度较慢。<br>
不建议使用 <strong>unstructured</strong> 工具，因为其效果较差，且会将许多公式误识别为标题。</p>
</li>
<li>
<p><strong>存储标题信息</strong><br>
将检测出的所有标题存储为一个列表。</p>
</li>
<li>
<p><strong>判断标题层级</strong><br>
利用标题区块的高度来判断哪些是一级标题、二级标题或三级标题。例如，unstructured工具的fast模式会按照文字边界切分，同一级标题区块的高度误差在 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>0.001</mn></mrow><annotation encoding="application/x-tex">0.001</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0.001</span></span></span></span> 之间。因此，只需要利用unstructured获取标题高度值即可完成层级判断。</p>
</li>
</ol>
<hr>
<h2 id="四、好用的pdf文件解析工具推荐" tabindex="-1"><a class="header-anchor" href="#四、好用的pdf文件解析工具推荐"><span>四、好用的PDF文件解析工具推荐</span></a></h2>
<p>以下是一些常用且好用的PDF文件解析工具：</p>
<ol>
<li><strong>Deepdoc</strong></li>
<li><strong>TextMonkey</strong></li>
<li><strong>OLMOCR</strong></li>
<li><strong>Pandoc</strong></li>
<li><strong>Pymupdf</strong></li>
<li><strong>Mathpix</strong></li>
<li><strong>Docling</strong></li>
<li><strong>Marker</strong></li>
</ol>
<p>这些工具各有特点，可以根据具体需求选择合适的工具。例如，Mathpix在公式识别方面表现出色，而Pandoc则适用于文档格式转换。</p>
<hr>
<h2 id="文本分块策略" tabindex="-1"><a class="header-anchor" href="#文本分块策略"><span>文本分块策略</span></a></h2>
<p>在构建 RAG（Retrieval-Augmented Generation）系统时，文档需要被分割成多个文本块后再进行向量嵌入。这一过程的核心目标是<strong>在保持语义连贯性的同时，尽可能减少嵌入内容中的噪声，从而更高效地找到与用户查询最相关的文档部分</strong>。本文将详细探讨文本分块策略的重要性及其对大模型输出的影响。</p>
<hr>
<h2 id="文本分块策略的意义" tabindex="-1"><a class="header-anchor" href="#文本分块策略的意义"><span>文本分块策略的意义</span></a></h2>
<p>在 RAG 系统中，文本分块的策略直接影响检索和生成的效果。如果分块过大，可能包含大量不相关的信息，从而降低了检索的准确性；而分块过小则可能丢失必要的上下文信息，导致生成的回答缺乏连贯性或深度。因此，实施适当的文档分块策略的目标是<strong>在信息完整性和相关性之间找到平衡</strong>。</p>
<h3 id="理想文本块的特性" tabindex="-1"><a class="header-anchor" href="#理想文本块的特性"><span>理想文本块的特性</span></a></h3>
<p>一般来说，一个理想的文本块应该满足以下条件：</p>
<ol>
<li><strong>语义独立性</strong>：在没有周围上下文的情况下，对人类来说仍然有意义。</li>
<li><strong>模型可理解性</strong>：保持语义清晰，便于语言模型处理和理解。</li>
</ol>
<p>这种设计方式不仅有助于提高检索的精确度，还能提升大模型生成回答的质量。</p>
<hr>
<h2 id="文本分块策略对大模型输出的影响" tabindex="-1"><a class="header-anchor" href="#文本分块策略对大模型输出的影响"><span>文本分块策略对大模型输出的影响</span></a></h2>
<p>将长文档拆分为适合检索的“段落”是 RAG 系统成功的关键之一。一个良好的分块策略能够让每个文本片段既包含足够的信息来回答某类问题，又不会过长以至于增加噪声或使向量表示模糊不清。</p>
<h3 id="文本分块过长的影响" tabindex="-1"><a class="header-anchor" href="#文本分块过长的影响"><span>文本分块过长的影响</span></a></h3>
<p>在构建 RAG 系统时，<strong>过长的文本块</strong>会带来一系列问题：</p>
<h4 id="_1-语义模糊" tabindex="-1"><a class="header-anchor" href="#_1-语义模糊"><span>1. 语义模糊</span></a></h4>
<p>当文本块过长时，在向量化过程中，细节语义信息容易被平均化或淡化。这是因为向量化模型需要将大量词汇信息压缩成固定长度的向量表示，导致无法精准捕捉文本的核心主题和关键细节。结果是生成的向量难以代表文本的重要内容，从而降低了模型对文本理解的准确性。</p>
<h4 id="_2-降低召回精度" tabindex="-1"><a class="header-anchor" href="#_2-降低召回精度"><span>2. 降低召回精度</span></a></h4>
<p>在检索阶段，系统需要根据用户的查询从向量数据库中检索相关文本。过长的文本块可能涵盖多个主题或观点，增加了语义的复杂性，导致检索模型难以准确匹配用户的查询意图。这会直接导致召回结果的相关性下降，从而影响大模型生成答案的质量。</p>
<h4 id="_3-输入受限" tabindex="-1"><a class="header-anchor" href="#_3-输入受限"><span>3. 输入受限</span></a></h4>
<p>大语言模型（LLM）对输入长度有严格限制。过长的文本块会占据更多输入空间，减少可供输入的大模型的文本块数量。这种限制可能导致遗漏重要上下文或相关信息，从而影响最终回答效果。</p>
<h3 id="文本分块过短的影响" tabindex="-1"><a class="header-anchor" href="#文本分块过短的影响"><span>文本分块过短的影响</span></a></h3>
<p>相反，<strong>过短的文本块</strong>也会对大模型输出产生不利影响，其具体表现为：</p>
<h4 id="_1-上下文缺失" tabindex="-1"><a class="header-anchor" href="#_1-上下文缺失"><span>1. 上下文缺失</span></a></h4>
<p>短文本块可能缺乏必要的上下文信息。而上下文对于理解语言意义至关重要。缺乏上下文的信息会让模型难以准确理解文本内容，从而影响生成回答的连贯性和准确性。</p>
<h4 id="_2-主题信息丢失" tabindex="-1"><a class="header-anchor" href="#_2-主题信息丢失"><span>2.主题信息丢失</span></a></h4>
<p>段落或章节级别的主题信息需要一定的文本长度来表达。过短的文本块可能只包含片段信息，无法完整传达主要观点或核心概念，影响模型对整体内容的把握。</p>
<hr>
<h4 id="_3-碎片化问题" tabindex="-1"><a class="header-anchor" href="#_3-碎片化问题"><span>3.碎片化问题</span></a></h4>
<p>大量的短文本块会导致信息碎片化，增加检索和处理的复杂度。系统需要处理更多的文本块，增加了计算和存储的开销。同时，过多的碎片化信息可能会干扰模型的判断，降低系统性能和回答质量。</p>
<hr>
<h2 id="如何制定合适的文本分块策略" tabindex="-1"><a class="header-anchor" href="#如何制定合适的文本分块策略"><span>如何制定合适的文本分块策略？</span></a></h2>
<p>在实际应用中，为了取得最佳效果，可以参考以下原则来制定文本分块策略：</p>
<ol>
<li><strong>基于语义单元划分</strong>：尽可能以自然段落、句子组或主题为单位进行划分，确保每个文本块具有相对独立的语义。</li>
<li><strong>控制文本长度</strong>：根据具体任务需求设置文本块长度范围，既不过短导致上下文缺失，也不过长引入多余噪声。</li>
<li><strong>测试与优化</strong>：通过实验不断调整分块策略，分析不同长度和划分方式对检索和生成效果的影响。</li>
</ol>
<hr>
<h2 id="常见文本分块策略" tabindex="-1"><a class="header-anchor" href="#常见文本分块策略"><span>常见文本分块策略</span></a></h2>
<p>在自然语言处理和文本处理的过程中，分块（Chunking）是一项非常重要的技术。分块的目标是将大段的文本划分为更小的块，以便更高效地进行处理和分析。本文将详细介绍几种常见的文本分块策略，包括其特点、适用场景以及优缺点。</p>
<hr>
<h2 id="固定大小的分块" tabindex="-1"><a class="header-anchor" href="#固定大小的分块"><span>固定大小的分块</span></a></h2>
<p>固定大小的分块是最简单和直接的方法。在这种策略中，我们直接设定每个块中包含的字数，并决定块之间是否需要重叠内容。通常，为了避免语义上下文在块之间丢失，我们会让相邻的块之间保持一定程度的重叠。</p>
<h3 id="优点-1" tabindex="-1"><a class="header-anchor" href="#优点-1"><span>优点</span></a></h3>
<ul>
<li>简单易用。</li>
<li>不需要消耗大量的计算资源。</li>
</ul>
<h3 id="缺点-1" tabindex="-1"><a class="header-anchor" href="#缺点-1"><span>缺点</span></a></h3>
<ul>
<li>对于语义密集或结构复杂的文本，可能会丢失部分上下文信息。</li>
<li>缺乏灵活性。</li>
</ul>
<p>固定大小分块适用于对上下文要求不高或对计算资源有限制的场景。</p>
<table>
<thead>
<tr>
<th>&gt;[[大语言模型学习/大模型应用/RAG检索增强生成/固定长度分块|固定长度分块]]</th>
</tr>
</thead>
</table>
<h2 id="内容分块" tabindex="-1"><a class="header-anchor" href="#内容分块"><span>内容分块</span></a></h2>
<p>内容分块是根据文档的具体内容进行分割。例如，可以根据标点符号（如句号）将文本分割为句子，或者利用更高级的自然语言处理工具库（如 NLTK 或 spaCy）提供的句子分割功能，进行更精确的分块。</p>
<h3 id="优点-2" tabindex="-1"><a class="header-anchor" href="#优点-2"><span>优点</span></a></h3>
<ul>
<li>能够更好地保留语义完整性。</li>
<li>对于语义分析和上下文相关性要求较高的任务更为适合。</li>
</ul>
<h3 id="缺点-2" tabindex="-1"><a class="header-anchor" href="#缺点-2"><span>缺点</span></a></h3>
<ul>
<li>需要依赖额外的工具库。</li>
<li>分割精度受限于工具库的能力。</li>
</ul>
<p>这种策略对于需要保留语义连贯性的文档处理任务非常有用，例如问答系统和摘要生成。</p>
<table>
<thead>
<tr>
<th>&gt;[[大语言模型学习/大模型应用/RAG检索增强生成/基于语义分块|基于语义分块]]</th>
</tr>
</thead>
</table>
<h2 id="递归分块" tabindex="-1"><a class="header-anchor" href="#递归分块"><span>递归分块</span></a></h2>
<p>递归分块是一种推荐程度较高的方法。通过重复应用分块规则，递归地将文本分解为更小的块。例如，使用 <code v-pre>langchain</code> 库时，可以按照以下步骤进行递归分块：</p>
<ol>
<li>首先，根据段落换行符（<code v-pre>\n\n</code>）进行初步分割。</li>
<li>检查每个块的大小。如果某个块的大小超过预设阈值，则对其使用单换行符（<code v-pre>\n</code>）再次进行分割。</li>
<li>如果仍然超过阈值，则进一步根据空格、句号等更细粒度的规则进行分割。</li>
<li>不断调整规则，直到满足块大小的要求。</li>
</ol>
<h3 id="优点-3" tabindex="-1"><a class="header-anchor" href="#优点-3"><span>优点</span></a></h3>
<ul>
<li>灵活性强，可以根据文本内容动态调整分块规则。</li>
<li>能够适应不同类型的信息密度。例如：
<ul>
<li>信息密集的部分可以更细致地分割，以捕捉细节。</li>
<li>信息稀疏的部分可以使用更大的块，以减少不必要的计算量。</li>
</ul>
</li>
</ul>
<h3 id="缺点-3" tabindex="-1"><a class="header-anchor" href="#缺点-3"><span>缺点</span></a></h3>
<ul>
<li>需要制定精细的规则。</li>
<li>实现过程相对复杂。</li>
</ul>
<p>递归分块适合对语义保留要求高、文本结构复杂且信息密度变化较大的场景。</p>
<hr>
<h2 id="从小到大分块" tabindex="-1"><a class="header-anchor" href="#从小到大分块"><span>从小到大分块</span></a></h2>
<p>小的分块和大的分块各有优势，因此一种更直接的解决方案是将同一文档按照从大到小的所有尺寸进行分块。然后，将不同大小的分块全部存储到向量数据库中，并保存每个分块之间的上下级关系，以便支持递归搜索。</p>
<h3 id="优点-4" tabindex="-1"><a class="header-anchor" href="#优点-4"><span>优点</span></a></h3>
<ul>
<li>同时保留了大分块和小分块的优点。</li>
<li>灵活性强，可以支持多层次搜索。</li>
</ul>
<h3 id="缺点-4" tabindex="-1"><a class="header-anchor" href="#缺点-4"><span>缺点</span></a></h3>
<ul>
<li>需要存储大量重复内容，导致存储空间需求显著增加。</li>
</ul>
<p>这种方法适用于需要多粒度语义查询的场景，例如知识图谱构建和复杂问题解答。</p>
<hr>
<h2 id="特殊结构分块" tabindex="-1"><a class="header-anchor" href="#特殊结构分块"><span>特殊结构分块</span></a></h2>
<p>针对特定结构化内容（如代码、Markdown 文件、LaTeX 文件）的专门分块器，可以确保正确地保留和理解这些文档的结构。例如，<code v-pre>langchain</code> 提供了以下特殊分块器：</p>
<ul>
<li>Markdown 文件分块器。</li>
<li>LaTeX 文件分块器。</li>
<li>各种主流代码语言（如 Python、JavaScript 等）的专用分块器。</li>
</ul>
<h3 id="优点-5" tabindex="-1"><a class="header-anchor" href="#优点-5"><span>优点</span></a></h3>
<ul>
<li>针对性强，能够有效处理特定格式的文档。</li>
<li>保留了文档原有的结构信息。</li>
</ul>
<h3 id="缺点-5" tabindex="-1"><a class="header-anchor" href="#缺点-5"><span>缺点</span></a></h3>
<ul>
<li>只能应用于特定类型的文档。</li>
<li>实现难度较高，需要针对不同格式设计专用算法。</li>
</ul>
<p>这种方法适合处理具有明确结构化特征的文本，如技术文档、代码库和学术论文等。</p>
<hr>
<h2 id="分块大小的选择" tabindex="-1"><a class="header-anchor" href="#分块大小的选择"><span>分块大小的选择</span></a></h2>
<p>选择合适的分块大小是影响文本处理效果的重要因素。以下是几个需要考虑的重要因素：</p>
<ol>
<li>
<p><strong>嵌入模型</strong><br>
不同嵌入模型有其最佳输入大小。例如，OpenAI 的 <code v-pre>text-embedding-ada-002</code> 模型在 256 或 512 大小的块上表现最佳。因此，在使用这些模型时，应尽量选择与其匹配的分块大小。</p>
</li>
<li>
<p><strong>文档类型</strong><br>
文档类型决定了上下文保留的重要性：</p>
<ul>
<li>对于长篇文章或书籍，较大的分块有助于保留更多上下文和主题连贯性。</li>
<li>对于社交媒体帖子等短文本，较小的分块可能更适合捕捉每个帖子的精确语义。</li>
</ul>
</li>
<li>
<p><strong>用户查询长度及复杂性</strong></p>
<ul>
<li>如果用户查询通常简短且具体，则较小的分块可能更合适。</li>
<li>如果用户查询较为复杂，则可能需要更大的分块来确保足够的信息量支持答案生成。</li>
</ul>
</li>
</ol>
<p>综上所述，选择合适的分块大小需要综合考虑嵌入模型、文档类型以及用户查询特点等多方面因素。</p>
<hr>
<h2 id="embedding模型阶段" tabindex="-1"><a class="header-anchor" href="#embedding模型阶段"><span>Embedding模型阶段</span></a></h2>
<p>嵌入模型（Embedding Model）是一种能够将文本转换为高维向量表示的工具。通过这种方式，文本的语义信息得以以数值化的形式表示，便于计算机进行处理和分析。</p>
<h3 id="不同嵌入模型的效果差异" tabindex="-1"><a class="header-anchor" href="#不同嵌入模型的效果差异"><span>不同嵌入模型的效果差异</span></a></h3>
<p>不同的嵌入模型在效果上可能存在显著差异，因此选择合适的模型对于具体任务至关重要。推荐参考 <a href="https://huggingface.co/spaces/mteb/leaderboard" target="_blank" rel="noopener noreferrer">Hugging Face 的嵌入模型排行榜 MTEB</a>，该排行榜提供了关于各种嵌入模型性能的详细对比，能够帮助我们根据实际需求选择最优的解决方案。</p>
<hr>
<h2 id="向量数据库阶段" tabindex="-1"><a class="header-anchor" href="#向量数据库阶段"><span>向量数据库阶段</span></a></h2>
<p>在完成文本向量化后，向量数据库（Vector Database）成为存储和检索这些向量的重要工具。在这一阶段，元数据的引入可以显著提升检索效率和用户体验。</p>
<h3 id="元数据的作用" tabindex="-1"><a class="header-anchor" href="#元数据的作用"><span>元数据的作用</span></a></h3>
<p>元数据是指与向量关联的非向量化数据。在向量数据库中，某些数据库支持将向量和元数据一同存储。为向量添加元数据标注是一种有效的策略，它在提高检索效率和优化搜索结果方面起着关键作用。</p>
<h4 id="示例-日期作为元数据标签" tabindex="-1"><a class="header-anchor" href="#示例-日期作为元数据标签"><span>示例：日期作为元数据标签</span></a></h4>
<p>日期是一个常见且实用的元数据标签。它能够帮助我们根据时间顺序对搜索结果进行筛选。例如：</p>
<p>假设我们正在开发一款允许用户查询电子邮件历史记录的应用程序。在这种情况下，日期最近的电子邮件可能更符合用户的查询需求。然而，从嵌入向量的角度来看，我们无法直接判断这些邮件与用户查询之间的相似度。</p>
<p>通过将每封电子邮件的日期作为元数据附加到其嵌入向量中，我们可以在检索过程中优先考虑日期最近的邮件，从而显著提高搜索结果的相关性。这种方法结合了语义匹配和时间排序，为用户提供了更精准的搜索体验。</p>
<h4 id="其他元数据类型" tabindex="-1"><a class="header-anchor" href="#其他元数据类型"><span>其他元数据类型</span></a></h4>
<p>除了日期，还可以添加以下类型的元数据：</p>
<ul>
<li><strong>章节或小节的引用</strong>：标记文本所属章节或小节，有助于用户快速定位相关内容。</li>
<li><strong>文本关键信息</strong>：提取并存储文本中的核心信息，如摘要或主要观点。</li>
<li><strong>小节标题或关键词</strong>：为每段文本附加标题或关键词，便于分类和检索。</li>
</ul>
<p>这些元数据不仅能够提升知识检索的准确性，还能为最终用户提供更加丰富和精确的搜索体验。例如，通过关键词标注，可以快速定位与用户查询高度相关的小节内容。</p>
<hr>
<h1 id="大语言模型学习-大模型应用-rag检索增强生成-rag优化中查询索引阶段-rag优化中查询索引阶段" tabindex="-1"><a class="header-anchor" href="#大语言模型学习-大模型应用-rag检索增强生成-rag优化中查询索引阶段-rag优化中查询索引阶段"><span>[[大语言模型学习/大模型应用/RAG检索增强生成/RAG优化中查询索引阶段|RAG优化中查询索引阶段]]</span></a></h1>
<h2 id="生成回答阶段的设计与优化" tabindex="-1"><a class="header-anchor" href="#生成回答阶段的设计与优化"><span>生成回答阶段的设计与优化</span></a></h2>
<p>在构建基于大型语言模型（LLM）的系统时，生成回答阶段是一个至关重要的环节。LLM 的解码器部分通常基于给定输入来预测下一个词，这意味着提示词的设计会直接影响模型的输出质量和行为表现。本文将探讨如何通过提示词设计、模型选择以及 RAG 系统的构建来优化 LLM 的生成回答阶段。</p>
<hr>
<h3 id="提示词设计的关键要点" tabindex="-1"><a class="header-anchor" href="#提示词设计的关键要点"><span>提示词设计的关键要点</span></a></h3>
<h4 id="提示词对模型行为的影响" tabindex="-1"><a class="header-anchor" href="#提示词对模型行为的影响"><span>提示词对模型行为的影响</span></a></h4>
<p>大型语言模型的解码器部分通过预测下一个词来生成完整的回答。因此，提示词（Prompt）的设计方式会显著影响模型预测下一个词的概率。这给我们带来了一些启示：通过调整提示词的形式，可以有效地影响模型对不同类型问题的接受程度和回答方式。</p>
<p>例如，通过修改提示词，可以让 LLM 更清楚地知道它正在执行的任务。这种方式不仅能够帮助模型更准确地理解用户意图，还能减少生成回答过程中的不确定性。</p>
<h4 id="减少主观性和幻觉的提示词策略" tabindex="-1"><a class="header-anchor" href="#减少主观性和幻觉的提示词策略"><span>减少主观性和幻觉的提示词策略</span></a></h4>
<p>为了减少模型产生主观回答和幻觉（hallucination）的概率，在 RAG（Retrieval-Augmented Generation）系统中，提示词应明确指出回答仅基于检索到的信息，而不应包含任何其他主观推测。例如，可以设置如下提示词：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>你是一名智能客服。你的目标是提供准确的信息，并尽可能帮助提问者解决问题。你应保持友善，但不要过于啰嗦。请根据提供的上下文信息，在不考虑已有知识的情况下，回答相关查询。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这一提示明确了模型的角色、目标以及回答依据，能够有效减少模型生成主观性内容的可能性。</p>
<h4 id="动态调整提示词以适应场景需求" tabindex="-1"><a class="header-anchor" href="#动态调整提示词以适应场景需求"><span>动态调整提示词以适应场景需求</span></a></h4>
<p>当然，根据具体场景需求，我们也可以适当让模型的回答融入一些主观性或其对知识的理解。此外，还可以使用少量样本（Few-Shot Learning）的方式，将希望生成的问答示例加入提示词中，以指导 LLM 如何利用检索到的信息。这种方法不仅能使模型的回答更加精准，还能显著提升其在特定情境下的实用性。</p>
<hr>
<h3 id="模型选择与开发框架" tabindex="-1"><a class="header-anchor" href="#模型选择与开发框架"><span>模型选择与开发框架</span></a></h3>
<h4 id="根据需求选择合适的-llm" tabindex="-1"><a class="header-anchor" href="#根据需求选择合适的-llm"><span>根据需求选择合适的 LLM</span></a></h4>
<p>在选择 LLM 时，可以根据以下几个关键因素进行决策：</p>
<ol>
<li><strong>开放模型与专有模型</strong>：根据预算和数据隐私需求，选择开源模型（如 GPT-Neo、LLaMA）或专有模型（如 OpenAI 的 GPT-4）。</li>
<li><strong>推理成本</strong>：不同模型在推理阶段所需的计算资源和时间可能差别较大，需要根据实际应用场景权衡。</li>
<li><strong>上下文长度</strong>：一些任务可能需要处理长文本上下文，因此需要选择支持较长上下文长度的模型。</li>
</ol>
<h4 id="使用开发框架搭建-rag-系统" tabindex="-1"><a class="header-anchor" href="#使用开发框架搭建-rag-系统"><span>使用开发框架搭建 RAG 系统</span></a></h4>
<p>为了更高效地搭建 RAG 系统，可以借助一些 LLM 开发框架，例如：</p>
<ul>
<li><strong>LlamaIndex</strong>：一个灵活且功能强大的框架，支持多种数据索引和检索方式。</li>
<li><strong>LangChain</strong>：提供了丰富的工具集，便于构建复杂的 LLM 应用。</li>
</ul>
<p>这些框架通常配备了调试工具，可以帮助开发者定义回调函数，查看使用了哪些上下文，检查检索结果来自哪个文档等，从而确保系统行为符合预期。</p>
<hr>
<p><img src="/img/user/附件/Pasted image 20250506221216.png" alt="Pasted image 20250506221216.png"></p>
</div></template>


