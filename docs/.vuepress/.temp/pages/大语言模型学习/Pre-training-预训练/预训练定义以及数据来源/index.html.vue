<template><div><p><strong>分类</strong>：人工智能<br>
<strong>标签</strong>：预训练、大模型、自监督学习、数据处理、Next Token Prediction<br>
<strong>日期</strong>：2023-10-10</p>
<hr>
<h2 id="核心观点总结" tabindex="-1"><a class="header-anchor" href="#核心观点总结"><span>核心观点总结</span></a></h2>
<p>大模型的预训练旨在通过在大规模数据集上进行自监督学习，捕捉通用特征和模式，从而提升模型的适应性和泛化能力。预训练依赖于高质量、多领域的数据，使用Next Token Prediction（NTP）作为主要训练目标，帮助模型掌握语言和其他复杂技能。</p>
<hr>
<h2 id="重点内容解析" tabindex="-1"><a class="header-anchor" href="#重点内容解析"><span>重点内容解析</span></a></h2>
<h3 id="_1-预训练的定义与目标" tabindex="-1"><a class="header-anchor" href="#_1-预训练的定义与目标"><span>1. <strong>预训练的定义与目标</strong></span></a></h3>
<ul>
<li><strong>目标</strong>：
<ul>
<li>通过在大规模数据集上学习，捕捉通用特征和模式。</li>
<li>减少对标注数据的依赖，加速适应新任务。</li>
</ul>
</li>
<li><strong>训练方法</strong>：
<ul>
<li>自监督学习（区别于无监督学习）。</li>
<li>使用 <strong>Next Token Prediction (NTP)</strong> 作为训练目标，其公式为：<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>L</mi><mo>=</mo><mo>−</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><mi>log</mi><mo>⁡</mo><mi>p</mi><mo stretchy="false">(</mo><msub><mi>x</mi><mi>n</mi></msub><mi mathvariant="normal">∣</mi><msub><mi>x</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>x</mi><mn>2</mn></msub><mo separator="true">,</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mo separator="true">,</mo><msub><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo separator="true">;</mo><mi>θ</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">L = - \sum_{n=1}^N \log p(x_n | x_1, x_2, ..., x_{n-1}; \theta)
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">L</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:3.0954em;vertical-align:-1.2671em;"></span><span class="mord">−</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.8283em;"><span style="top:-1.8829em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.10903em;">N</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.2671em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">p</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord">∣</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">...</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mpunct">;</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mclose">)</span></span></span></span></span></p>
</li>
<li>模型根据上下文预测下一个最可能的单词，并通过对数似然损失优化。</li>
</ul>
</li>
</ul>
<p>💡 <strong>启发点</strong>：NTP方法不仅适用于语言，还能扩展到代码、数学等领域的预测任务。</p>
<hr>
<h3 id="_2-预训练数据的来源与规模" tabindex="-1"><a class="header-anchor" href="#_2-预训练数据的来源与规模"><span>2. <strong>预训练数据的来源与规模</strong></span></a></h3>
<ul>
<li><strong>数据量级</strong>：
<ul>
<li>初始预训练：约 10T tokens。</li>
<li>进一步微调：至少 100B tokens。</li>
</ul>
</li>
<li><strong>数据来源</strong>：
<ul>
<li><strong>Common Crawl</strong>：开放网页数据平台。</li>
<li><strong>GitHub</strong>：代码相关数据。</li>
<li><strong>电子书与教育资料</strong>：涵盖多领域知识。</li>
<li><strong>内部数据</strong>：企业自有业务数据。</li>
</ul>
</li>
<li><strong>多语种支持</strong>：
<ul>
<li>通用模型需覆盖中英文，小语种根据需求选择性收集。</li>
</ul>
</li>
</ul>
<table>
<thead>
<tr>
<th>数据来源</th>
<th>特点</th>
</tr>
</thead>
<tbody>
<tr>
<td>Common Crawl</td>
<td>网页数据，覆盖广泛</td>
</tr>
<tr>
<td>GitHub</td>
<td>专注于代码与技术</td>
</tr>
<tr>
<td>教育资料与论文</td>
<td>提供高质量知识内容</td>
</tr>
<tr>
<td>内部数据</td>
<td>企业特定领域的专属语料</td>
</tr>
</tbody>
</table>
<p>📈 <strong>趋势预测</strong>：未来，高质量多模态数据（如图像、视频与文本结合）将成为预训练的重要方向。</p>
<hr>
<h3 id="_3-数据处理的挑战" tabindex="-1"><a class="header-anchor" href="#_3-数据处理的挑战"><span>3. <strong>数据处理的挑战</strong></span></a></h3>
<ul>
<li><strong>问题</strong>：
<ul>
<li>高质量数据（如论文、书籍）通常以PDF格式存在，解析复杂。</li>
</ul>
</li>
<li><strong>解决方案</strong>：
✅ 使用专业PDF解析服务，避免依赖低效的Python库。<br>
✅ 训练OCR模型，前提是有足够高质量的PDF-文本对齐数据。<br>
⚠ 注意：直接用大模型（如GPT-4）解析PDF可能成本过高。</li>
</ul>
<p>💡 <strong>启发点</strong>：高效的数据处理工具是预训练成功的关键。</p>
<hr>
<h2 id="常见错误与注意事项" tabindex="-1"><a class="header-anchor" href="#常见错误与注意事项"><span>常见错误与注意事项</span></a></h2>
<blockquote>
<p><strong>⚠ 警告</strong>：</p>
<ul>
<li>数据质量直接影响模型性能，低质量或偏向单一领域的数据可能导致模型在实际应用中表现不佳。</li>
<li>多语种处理需确保语料分布均衡，否则可能影响小语种任务的表现。</li>
</ul>
</blockquote>
<hr>
<h2 id="思考-延伸问题" tabindex="-1"><a class="header-anchor" href="#思考-延伸问题"><span>[思考] 延伸问题</span></a></h2>
<ol>
<li>如何优化多模态数据（如图像与文本）的联合预训练方法？</li>
<li>在多语种模型中，如何权衡不同语种的数据比例以提升性能？</li>
<li>对于特定领域的垂直应用，是否需要重新设计预训练目标？</li>
</ol>
<hr>
<blockquote>
<p><strong>来源</strong>：本文内容基于大模型预训练技术文档整理与总结。</p>
</blockquote>
<hr>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ol>
<li>✅ 调研现有的开源数据集（如FineWeb、Pile、RedPajama），并尝试整合到自己的项目中。</li>
<li>✅ 学习如何使用专业PDF解析服务或OCR技术提升数据处理效率。</li>
<li>❗ 探索多模态预训练方法，关注图像、文本、音频等多种形式的数据整合。</li>
</ol>
<hr>
<h2 id="后续追踪" tabindex="-1"><a class="header-anchor" href="#后续追踪"><span>后续追踪</span></a></h2>
<ul>
<li>跟踪最新发布的大规模开源模型及其预训练技术进展。</li>
<li>深入研究自监督学习在非语言任务（如代码生成、逻辑推理）中的应用潜力。</li>
</ul>
<h2 id="数据资源概览" tabindex="-1"><a class="header-anchor" href="#数据资源概览"><span>数据资源概览</span></a></h2>
<p>以下是一些常用的开源数据集及其获取地址：</p>
<table>
<thead>
<tr>
<th>数据集名称</th>
<th>地址</th>
</tr>
</thead>
<tbody>
<tr>
<td>Skywork/SkyPile-150B</td>
<td><a href="https://huggingface.co/datasets/Skywork/SkyPile-150B" target="_blank" rel="noopener noreferrer">点击访问</a></td>
</tr>
<tr>
<td>Wikipedia中文20230720</td>
<td><a href="https://huggingface.co/datasets/pleisto/wikipedia-cn-20230720-filtered" target="_blank" rel="noopener noreferrer">点击访问</a></td>
</tr>
<tr>
<td>C4</td>
<td><a href="https://github.com/allenai/allennlp/discussions/5056" target="_blank" rel="noopener noreferrer">点击访问</a></td>
</tr>
<tr>
<td>RedPajama</td>
<td><a href="https://huggingface.co/datasets/togethercomputer/RedPajama-Data-V2" target="_blank" rel="noopener noreferrer">点击访问</a></td>
</tr>
<tr>
<td>EleutherAI/the_pile_deduplicated</td>
<td><a href="https://huggingface.co/datasets/EleutherAI/the_pile_deduplicated" target="_blank" rel="noopener noreferrer">点击访问</a></td>
</tr>
<tr>
<td>WuDaoCorporaText</td>
<td><a href="https://data.baai.ac.cn/details/WuDaoCorporaText" target="_blank" rel="noopener noreferrer">点击访问</a></td>
</tr>
<tr>
<td>PRM800K</td>
<td><a href="https://github.com/openai/prm800k?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">点击访问</a></td>
</tr>
<tr>
<td>YeungNLP/firefly-pretrain-dataset</td>
<td><a href="https://huggingface.co/datasets/YeungNLP/firefly-pretrain-dataset" target="_blank" rel="noopener noreferrer">点击访问</a></td>
</tr>
</tbody>
</table>
<p>💡 <strong>启发点</strong>：这些数据集涵盖了多语言、多领域的语料，适合用于构建通用型预训练模型。</p>
<hr>
<h2 id="数据采样与分布策略" tabindex="-1"><a class="header-anchor" href="#数据采样与分布策略"><span>数据采样与分布策略</span></a></h2>
<p>在继续预训练中，通用数据的采样策略对模型性能影响显著。以下是一个具体分配案例：</p>
<h3 id="数据分布比例" tabindex="-1"><a class="header-anchor" href="#数据分布比例"><span>数据分布比例</span></a></h3>
<ul>
<li><strong>总Tokens量</strong>：100B</li>
<li><strong>语言分布</strong>：中文 : 英文 : 代码 = 20% : 70% : 10%</li>
</ul>
<h3 id="中文语料采样" tabindex="-1"><a class="header-anchor" href="#中文语料采样"><span>中文语料采样</span></a></h3>
<table>
<thead>
<tr>
<th>数据集名称</th>
<th>Tokens数量 (单位：B)</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>cc</td>
<td>4.024</td>
<td></td>
</tr>
<tr>
<td>baidu_baike_v3</td>
<td>0.804</td>
<td></td>
</tr>
<tr>
<td>wiki_zw</td>
<td>0.1602</td>
<td></td>
</tr>
<tr>
<td>qikan</td>
<td>0.1602</td>
<td></td>
</tr>
<tr>
<td>recipe</td>
<td>0.0182</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="英文语料采样" tabindex="-1"><a class="header-anchor" href="#英文语料采样"><span>英文语料采样</span></a></h3>
<table>
<thead>
<tr>
<th>数据集名称</th>
<th>Tokens数量 (单位：B)</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>c4</td>
<td>32.675</td>
<td></td>
</tr>
<tr>
<td>arxiv_v2</td>
<td>3.2652</td>
<td></td>
</tr>
<tr>
<td>wiki_en</td>
<td>3.6792</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="code语料采样" tabindex="-1"><a class="header-anchor" href="#code语料采样"><span>Code语料采样</span></a></h3>
<p>| 数据集名称          | Tokens数量 (单位：B) | 备注                      |
|---------------------|---------------------------|
| code               | 4.9042              |                          |
| github70v1         | 1.2168              |                          |</p>
<hr>
<blockquote>
<p>原始内容来源：<a href="https://huggingface.co/datasets/Skywork/SkyPile-150B" target="_blank" rel="noopener noreferrer">Skywork/SkyPile-150B</a>、<a href="https://huggingface.co/datasets/pleisto/wikipedia-cn-20230720-filtered" target="_blank" rel="noopener noreferrer">Wikipedia中文20230720</a>、<a href="https://github.com/allenai/allennlp/discussions/5056" target="_blank" rel="noopener noreferrer">C4</a> 等。</p>
</blockquote>
</div></template>


