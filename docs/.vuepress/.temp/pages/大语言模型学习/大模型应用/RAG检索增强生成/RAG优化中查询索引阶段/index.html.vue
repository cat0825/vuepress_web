<template><div><p>在现代信息检索系统中，查询索引阶段是一个至关重要的环节。它不仅决定了系统能否快速、准确地找到相关信息，还直接影响用户体验和系统性能。在这一阶段，我们通常会经历检索召回和重排两个步骤，而多级索引和多级路由机制的引入为这一过程提供了更强大的支持。</p>
<h2 id="多级索引" tabindex="-1"><a class="header-anchor" href="#多级索引"><span>多级索引</span></a></h2>
<p>在元数据无法充分区分不同上下文类型的情况下，可以考虑进一步尝试多重索引技术。多重索引技术的核心思想是将庞大的数据和信息需求按类别划分，并在不同层级中组织，以实现更有效的管理和检索。这意味着系统不仅依赖于单一索引，而是建立了多个针对不同数据类型和查询需求的索引。</p>
<p>例如，可能存在以下几种索引：</p>
<ul>
<li><strong>摘要类问题处理索引</strong>：专门负责处理需要简要回答的问题。</li>
<li><strong>具体答案寻求索引</strong>：针对直接寻找具体答案的问题。</li>
<li><strong>时间因素相关索引</strong>：用于处理需要考虑时间维度的问题。</li>
</ul>
<p>这种多重索引策略使得 RAG（Retrieval-Augmented Generation）系统能够根据查询的性质和上下文，选择最合适的索引进行数据检索，从而提升检索质量和响应速度。然而，为了实现多重索引技术，还需要配套加入多级路由机制。</p>
<h2 id="多级路由机制" tabindex="-1"><a class="header-anchor" href="#多级路由机制"><span>多级路由机制</span></a></h2>
<p>多级路由机制的作用在于确保每个查询被高效地引导至最合适的索引。具体来说，查询会根据其特点（如复杂性、所需信息类型等）被路由至一个或多个特定的索引。这种机制不仅提升了处理效率，还优化了资源分配和使用，确保对各类查询的精确匹配。</p>
<p>例如，对于查询“最新上映的科幻电影推荐”，RAG 系统可能会采取以下步骤：</p>
<ol>
<li>首先将查询路由至专门处理当前热点话题的索引。</li>
<li>然后利用专注于娱乐和影视内容的索引来生成相关推荐。</li>
</ol>
<p>通过这种方式，多级路由机制和多重索引技术相辅相成，为复杂查询场景提供了高效、精准的解决方案。</p>
<h2 id="索引-查询算法" tabindex="-1"><a class="header-anchor" href="#索引-查询算法"><span>索引/查询算法</span></a></h2>
<p>在查询阶段，索引的作用是筛选出与查询相关的数据，并从中检索出相关的文本向量。然而，由于向量数据量庞大且复杂，寻找绝对的最优解往往计算成本极高，有时甚至不可行。再加上大模型本质上并不是完全确定性的系统，这些模型在搜索时追求的是语义上的相似性——只要找到一种合理的匹配即可。从应用角度来看，这种方法是完全合理的。</p>
<p>例如，在推荐系统中，用户通常不会关注每个推荐项目是否绝对最佳匹配，而是更关心推荐内容是否总体上符合他们的兴趣。因此，查找与查询向量完全相同的项通常不是目标，而是要找到“足够接近”或“相似”的项。这种方法被称为<strong>最近邻搜索（Approximate Nearest Neighbor Search，ANNS）</strong>。ANNS 不仅能够满足用户需求，还为检索优化提供了巨大的潜力。</p>
<h3 id="常见的向量搜索算法" tabindex="-1"><a class="header-anchor" href="#常见的向量搜索算法"><span>常见的向量搜索算法</span></a></h3>
<p>以下是一些常见的向量搜索算法，可以根据具体使用场景进行取舍：</p>
<h4 id="_1-聚类算法-k-means-等" tabindex="-1"><a class="header-anchor" href="#_1-聚类算法-k-means-等"><span>1. 聚类算法：K-means 等</span></a></h4>
<p>聚类算法通过将数据划分为多个簇，使得每个簇内的数据点具有较高的相似性。K-means 是一种经典的聚类算法，其核心思想是通过迭代不断调整簇中心的位置，使得簇内点到中心的距离总和最小化。</p>
<h4 id="_2-位置敏感哈希" tabindex="-1"><a class="header-anchor" href="#_2-位置敏感哈希"><span>2. 位置敏感哈希</span></a></h4>
<h5 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想"><span>核心思想</span></a></h5>
<p>沿着缩小搜索范围的思路，位置敏感哈希（Locality-Sensitive Hashing, LSH）算法是一种重要的实现策略。传统的哈希算法中，通常希望每个输入对应一个唯一的输出值，并努力减少输出值的重复。然而，在位置敏感哈希算法中，我们的目标恰恰相反：<strong>需要增加输出值碰撞的概率</strong>。</p>
<p>这种碰撞正是分组的关键，哈希值相同的向量将被分配到同一个组中，也就是同一个“桶”里。此外，这种哈希函数还需满足另一个条件：<strong>空间上距离较近的向量更有可能被分入同一个桶</strong>。这样在进行搜索时，只需获取目标向量的哈希值，找到相应的桶，并在该桶内进行搜索即可。</p>
<hr>
<h4 id="_3-查询转换" tabindex="-1"><a class="header-anchor" href="#_3-查询转换"><span>3.查询转换</span></a></h4>
<p>在 RAG（Retrieval-Augmented Generation）系统中，用户的查询问题通常被转化为向量，然后在向量数据库中进行匹配。然而，查询的措辞会直接影响搜索结果。如果搜索结果不理想，可以尝试以下几种方法对问题进行重写，以提升召回效果。</p>
<h5 id="结合历史对话的重新表述" tabindex="-1"><a class="header-anchor" href="#结合历史对话的重新表述"><span>结合历史对话的重新表述</span></a></h5>
<p>在向量空间中，对人类来说看似相同的两个问题，其向量大小并不一定很相似。此时可以直接利用 LLM（大语言模型）重新表述问题来进行尝试。此外，在多轮对话中，用户提问中的某个词可能会指代上文中的部分信息，因此可以将历史信息和用户提问一并交给 LLM 重新表述，从而生成更具上下文一致性的查询。</p>
<h5 id="假设文档嵌入-hyde" tabindex="-1"><a class="header-anchor" href="#假设文档嵌入-hyde"><span>假设文档嵌入（HyDE）</span></a></h5>
<p>HyDE 的核心思想是接收用户提问后，先让 LLM 在没有外部知识的情况下生成一个假设性的回复。然后，将这个假设性回复和原始查询一起用于向量检索。尽管假设回复可能包含虚假信息，但它蕴含着 LLM 认为相关的信息和文档模式，有助于在知识库中寻找类似的文档。</p>
<h5 id="退后提示-step-back-prompting" tabindex="-1"><a class="header-anchor" href="#退后提示-step-back-prompting"><span>退后提示（Step Back Prompting）</span></a></h5>
<p>如果原始查询太复杂或返回的信息过于广泛，可以选择生成一个抽象层次更高的“退后”问题，并将其与原始问题一起用于检索，以增加返回结果的数量。例如：</p>
<ul>
<li>原问题：“桌子君在特定时期去了哪所学校？”</li>
<li>退后问题：“桌子君的教育历史是什么？”</li>
</ul>
<p>通过这种更高层次的问题，可能更容易找到答案。</p>
<h5 id="多查询检索-多路召回-multi-query-retrieval" tabindex="-1"><a class="header-anchor" href="#多查询检索-多路召回-multi-query-retrieval"><span>多查询检索/多路召回（Multi Query Retrieval）</span></a></h5>
<p>对于一个问题可能需要依赖多个子问题的情况，可以使用 LLM 生成多个搜索查询。这种方法特别适用于复杂问题，同时能有效覆盖更多潜在答案。</p>
<hr>
<h4 id="_4-检索参数" tabindex="-1"><a class="header-anchor" href="#_4-检索参数"><span>4.检索参数</span></a></h4>
<p>在具体的检索过程中，可以根据向量数据库的特定设置来优化一些检索参数。以下是一些常见的可设定参数：</p>
<h5 id="稀疏和稠密搜索权重" tabindex="-1"><a class="header-anchor" href="#稀疏和稠密搜索权重"><span>稀疏和稠密搜索权重</span></a></h5>
<p>稠密搜索是通过向量进行搜索的一种方式。然而，在某些场景下，稠密搜索可能存在一定的限制，例如无法很好地处理关键字匹配问题。这时可以尝试结合稀疏搜索，即使用原始字符串进行关键字匹配。<br>
一种常见的稀疏搜索算法是<strong>最佳匹配25（BM25）</strong>。BM25基于统计输入短语中的单词频率，赋予频繁出现的单词较低的得分，而将稀有的词视为关键词，赋予较高得分。</p>
<p>为了结合稀疏和稠密搜索，我们可以对两者的得分设置权重比例。例如，权重比例为 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>0.6</mn></mrow><annotation encoding="application/x-tex">0.6</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0.6</span></span></span></span> 时，表示 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>40</mn><mi mathvariant="normal">%</mi></mrow><annotation encoding="application/x-tex">40\%</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8056em;vertical-align:-0.0556em;"></span><span class="mord">40%</span></span></span></span> 的得分来自稀疏搜索，<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>60</mn><mi mathvariant="normal">%</mi></mrow><annotation encoding="application/x-tex">60\%</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8056em;vertical-align:-0.0556em;"></span><span class="mord">60%</span></span></span></span> 来自稠密搜索。向量数据库通常支持这种权重比例的设定，以便得出更优的检索结果。</p>
<hr>
<h5 id="结果数量-topk" tabindex="-1"><a class="header-anchor" href="#结果数量-topk"><span>结果数量（topK）</span></a></h5>
<p>检索结果的数量（即 topK 参数）是另一个关键因素。足够数量的检索结果可以确保系统覆盖到用户查询的各个方面。在回答多方面或复杂问题时，更多的结果提供了丰富的语境，有助于 RAG 系统（Retrieval-Augmented Generation）更好地理解问题的上下文和隐含细节。</p>
<p>然而，需要注意的是，当结果数量过多时可能会导致信息过载。这不仅会降低回答的准确性，还会增加系统的时间和资源成本。因此，在设置 topK 参数时，需要根据具体应用场景权衡覆盖范围与系统性能。</p>
<hr>
<h5 id="相似度度量方法" tabindex="-1"><a class="header-anchor" href="#相似度度量方法"><span>相似度度量方法</span></a></h5>
<p>计算两个向量相似度的方法也是一个可选参数。常见的方法包括：</p>
<ol>
<li><strong>欧式距离</strong>：计算两个向量之间的几何距离。</li>
<li><strong>Jaccard 距离</strong>：衡量两个集合之间的不相似性。</li>
<li><strong>余弦相似度</strong>：通过衡量向量夹角的相似性来判断内容的相关性。</li>
</ol>
<p>通常情况下，<strong>余弦相似度</strong>更受青睐，因为它不受向量长度的影响，仅反映方向上的相似性。这使得模型能够忽略文本长度差异，专注于内容的语义相似性。</p>
<p>需要注意的是，并非所有嵌入模型都支持所有度量方法。在使用之前，应参考所用嵌入模型的说明文档，确保其支持目标度量方法。</p>
<hr>
<h4 id="_5-高级检索策略" tabindex="-1"><a class="header-anchor" href="#_5-高级检索策略"><span>5.高级检索策略</span></a></h4>
<p>除了基础检索参数外，高级检索策略能够进一步提升系统性能，尤其是在处理复杂文档或大规模数据时。以下是几种常见的高级策略：</p>
<h5 id="上下文压缩" tabindex="-1"><a class="header-anchor" href="#上下文压缩"><span>上下文压缩</span></a></h5>
<p>当文档文块过大时，可能包含过多不相关的信息。如果将这样的整个文档传递给大语言模型（LLM），可能会导致更高的调用成本以及更差的响应效果。<br>
<strong>上下文压缩</strong>是一种解决方案，其核心思想是通过 LLM 的帮助，根据上下文对单个文档内容进行压缩，或者对返回结果进行一定程度的过滤，仅返回相关信息。这种方法能够有效减少传递给 LLM 的无关内容，从而提升响应质量。</p>
<hr>
<h5 id="句子窗口搜索" tabindex="-1"><a class="header-anchor" href="#句子窗口搜索"><span>句子窗口搜索</span></a></h5>
<p>与上下文压缩相反，如果文档文块太小，则可能导致上下文信息不足，影响系统对问题的理解。<br>
一种解决方案是<strong>窗口搜索</strong>。该方法的核心思想是，当用户提问匹配到某个分块后，将该分块周围的一些块作为上下文一并传递给 LLM。这种方式能够增加 LLM 对文档上下文的理解，从而生成更准确的回答。</p>
<hr>
<h5 id="父文档搜索" tabindex="-1"><a class="header-anchor" href="#父文档搜索"><span>父文档搜索</span></a></h5>
<p><strong>父文档搜索</strong>是一种与窗口搜索类似的解决方案。其具体步骤如下：</p>
<ol>
<li>首先将文档分为尺寸较大的主文档。</li>
<li>再将主文档分割为更短的小型子文档。</li>
<li>用户的问题会与子文档进行匹配。</li>
<li>然后，将匹配到子文档所属的主文档与用户提问一并传递给 LLM。</li>
</ol>
<p>这种方法结合了大范围上下文和精准匹配子文档的优点，是一种兼顾效率与效果的检索策略。</p>
<hr>
<h5 id="自动合并" tabindex="-1"><a class="header-anchor" href="#自动合并"><span>自动合并</span></a></h5>
<p>自动合并是在父文档搜索上更进一步的复杂解决方案。同样地，我们先对文档进行结构切割，比如将文档按三层树状结构进行切割，顶层节点的块大小为$$1024$$，中间层的块大小为$$512$$，底层的叶子节点的块大小为$$128$$。而在检索时只拿叶子节点和问题进行匹配，当某个父节点下的多数叶子节点都与问题匹配上则将该父节点作为结果返回。</p>
<h5 id="多向量检索" tabindex="-1"><a class="header-anchor" href="#多向量检索"><span>多向量检索</span></a></h5>
<p>多向量检索同样会给一个知识文档转化成多个向量存入数据库，不同的是，这些向量不仅包括文档在不同大小下的分块，还可以包括该文档的摘要，用户可能提出的问题等等有助于检索的信息。在使用多向量查询的情况下，每个向量可能代表了文档的不同方面，使得系统能够更全面地考虑文档内容，并在回答复杂或多方面的查询时提供更精确的结果。例如，如果查询与文档的某个具体部分或摘要更相关，那么相应的向量就可以帮助提高这部分内容的检索排名。</p>
<h5 id="多代理检索" tabindex="-1"><a class="header-anchor" href="#多代理检索"><span>多代理检索</span></a></h5>
<p>多代理检索，简而言之就是选取优化策略中的部分交给一个智能代理合并使用。就比如使用子问题查询、多级索引和多向量查询结合，先让子问题查询代理把用户提问拆解为多个小问题，再让文档代理对每个子问题进行多向量或多索引检索，最后排名代理将所有检索的文档总结再交给LLM。这样做的好处是可以取长补短，比如，子问题查询引擎在探索每个子查询时可能会缺乏深度，尤其是在相互关联或关系数据中。相反，文档代理递归检索在深入研究特定文档和检索详细答案方面表现出色，以此来综合多种方法解决问题。</p>
<p>需要注意的是，现在网络上存在不同结构的多代理检索，具体在多代理选取哪些优化步骤尚未有确切定论，可以结合使用场景进行探索。</p>
<h5 id="self-rag" tabindex="-1"><a class="header-anchor" href="#self-rag"><span>Self-RAG</span></a></h5>
<p>自反思搜索增强是一个全新RAG框架，其与传统RAG最大的区别在于通过检索评分和反思评分来提高质量。它主要分为三个步骤：<strong>检索</strong>、<strong>生成</strong>和<strong>批评</strong>。Self-RAG首先用检索评分来评估用户提问是否需要检索，如果需要检索，LLM将调用外部检索模块查找相关文档。接着，LLM分别为每个检索到的知识块生成答案，然后为每个答案生成反思评分来评估检索到的文档是否相关，最后将评分高的文档当作最终结果一并交给LLM。</p>
<h5 id="重排模型" tabindex="-1"><a class="header-anchor" href="#重排模型"><span>重排模型</span></a></h5>
<p>Reranking（重排模型）通过对初始检索结果进行更深入的相关性评估和排序，确保最终展示给用户的结果更加符合其查询意图。这一过程通常由深度学习模型实现，如Cohere模型。这些模型会考虑更多的特征，如查询意图、词汇的多重语义、用户的历史行为等，以提高排序质量。</p>
</div></template>


