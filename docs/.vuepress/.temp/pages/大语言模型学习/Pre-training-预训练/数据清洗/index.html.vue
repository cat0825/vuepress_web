<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<p><strong>分类</strong>：机器学习/自然语言处理<br>
<strong>标签</strong>：数据清洗、预训练、语言模型、数据质量<br>
<strong>日期</strong>：2023年10月25日</p>
<hr>
<h2 id="核心观点总结" tabindex="-1"><a class="header-anchor" href="#核心观点总结"><span>核心观点总结</span></a></h2>
<p>数据清洗是预训练模型构建过程中最重要的环节之一，数据的质量和多样性直接影响模型的通用能力与性能。本篇内容详细介绍了数据清洗的关键步骤，包括URL过滤、内容提取、语言识别及低质内容过滤，并分享了相关技术实现与注意事项。</p>
<hr>
<h2 id="重点内容提取" tabindex="-1"><a class="header-anchor" href="#重点内容提取"><span>重点内容提取</span></a></h2>
<h3 id="url-过滤" tabindex="-1"><a class="header-anchor" href="#url-过滤"><span>URL 过滤</span></a></h3>
<p>通过制定URL黑名单（如成人网站）和计算URL分数来筛选内容。此外，为了避免模型过于依赖某些特定数据源，像Arxiv和WikiPedia等精心构建的数据集内容也会被过滤。</p>
<p>💡 <strong>启发点</strong>：避免模型对单一来源的过度依赖，可以提升模型的泛化能力。</p>
<hr>
<h3 id="内容提取" tabindex="-1"><a class="header-anchor" href="#内容提取"><span>内容提取</span></a></h3>
<p>在获取到已过滤的URL后，需进一步提取有效文本信息，去除目录、标题、广告等无关内容。<br>
推荐工具：<code v-pre>trafilatura</code>库，用于高效抓取网页内容。</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 示例代码：使用trafilatura抓取网页内容</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> trafilatura</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">url </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://example.com</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">downloaded </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> trafilatura</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">fetch_url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">text </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> trafilatura</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">extract</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">downloaded</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">print</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">text</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>⚠ <strong>注意</strong>：确保抓取内容时合法合规，避免侵犯版权。</p>
<hr>
<h3 id="语言识别" tabindex="-1"><a class="header-anchor" href="#语言识别"><span>语言识别</span></a></h3>
<p>使用<code v-pre>FastText</code>或<code v-pre>langid</code>工具进行语言检测，将语言阈值分数低于0.65的文章剔除，以确保数据集中语言一致性。</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 核心代码示例：基于FastText的语言识别</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">def</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> compute_stats_single</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> sample</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    text </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> sample</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">text_key</span><span style="--shiki-light:#999999;--shiki-dark:#666666">].</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">lower</span><span style="--shiki-light:#999999;--shiki-dark:#666666">().</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">replace</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    ft_model </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> get_model</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">model_key</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    pred </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> ft_model</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">predict</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">text</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    lang_id </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> pred</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">][</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">].</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">replace</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">__label__</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> ''</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    lang_score </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> pred</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">][</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    sample</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Fields</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">stats</span><span style="--shiki-light:#999999;--shiki-dark:#666666">][</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">StatsKeys</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">lang</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> lang_id</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    sample</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Fields</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">stats</span><span style="--shiki-light:#999999;--shiki-dark:#666666">][</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">StatsKeys</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">lang_score</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> lang_score</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> sample</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="低质内容过滤" tabindex="-1"><a class="header-anchor" href="#低质内容过滤"><span>低质内容过滤</span></a></h3>
<ol>
<li>
<p><strong>篇章级别过滤</strong></p>
<ul>
<li>去除重复段落或包含错误信息（如抓取超时）的文章。</li>
<li>根据文章长度、标点符号比例等标准筛选不正规文章。</li>
</ul>
</li>
<li>
<p><strong>句子级别过滤</strong></p>
<ul>
<li>删除由纯大写字符或纯数字组成的句子。</li>
<li>丢弃命中特定关键词（如“关注”“转发”“点赞”）的句子。</li>
<li>过滤掉长度小于10且符合特定模板（如以“登录”开头或以“展开”结尾）的句子。</li>
</ul>
</li>
</ol>
<p>💡 <strong>启发点</strong>：利用启发式规则进行数据清洗，可以显著提升数据质量。</p>
<hr>
<h2 id="常见错误警告" tabindex="-1"><a class="header-anchor" href="#常见错误警告"><span>常见错误警告</span></a></h2>
<blockquote>
<p><strong>⚠ 数据清洗易犯错误：</strong></p>
<ol>
<li>过度过滤导致数据量不足，影响模型训练效果。</li>
<li>未充分考虑多语言数据的多样性，可能导致模型表现偏向某些语言。</li>
<li>忽略版权或数据合法性问题，可能引发法律风险。</li>
</ol>
</blockquote>
<hr>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ol>
<li>熟悉并实践<code v-pre>trafilatura</code>库的网页内容抓取功能。</li>
<li>学习FastText和langid工具的语言识别实现。</li>
<li>根据本指南设计并优化自己的数据清洗Pipeline。</li>
</ol>
<hr>
<h2 id="📈-趋势预测" tabindex="-1"><a class="header-anchor" href="#📈-趋势预测"><span>📈 趋势预测</span></a></h2>
<p>随着大规模语言模型的普及，数据清洗技术将更加关注以下方向：</p>
<ul>
<li>更智能的自动化过滤工具，如结合深度学习的内容分类器。</li>
<li>跨领域数据质量标准化，确保多样性与公平性。</li>
<li>更高效的多语言支持，特别是低资源语言的数据增强。</li>
</ul>
<hr>
<h2 id="思考-板块" tabindex="-1"><a class="header-anchor" href="#思考-板块"><span>[思考]板块</span></a></h2>
<ol>
<li>数据清洗中如何平衡“数据量”和“数据质量”之间的矛盾？</li>
<li>是否可以通过生成式AI辅助生成高质量数据以弥补清洗后的数据缺失？</li>
<li>对于低资源语言，是否需要不同于主流语言的数据清洗策略？</li>
</ol>
<hr>
<blockquote>
<p><strong>原始出处</strong>：深度学习技术报告及相关文档（如DeepSeek-Math技术报告）
[[大语言模型学习/Pre-training 预训练/模型打分与数据去重|模型打分与数据去重]]</p>
</blockquote>
</div></template>


