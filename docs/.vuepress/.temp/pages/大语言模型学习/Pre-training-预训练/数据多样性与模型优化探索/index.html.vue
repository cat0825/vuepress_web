<template><div><p><strong>分类：</strong> 数据科学<br>
<strong>标签：</strong> 数据多样性、聚类算法、模型优化<br>
<strong>日期：</strong> 2023-10-13</p>
<hr>
<h2 id="数据多样性的核心价值" tabindex="-1"><a class="header-anchor" href="#数据多样性的核心价值"><span>数据多样性的核心价值</span></a></h2>
<p>数据多样性是大模型建设中的重要环节，涵盖任务、语义、语种及数据来源的多样性。在模型预训练阶段，数据的质量和多样性直接影响模型的表现。尤其是在微调（SFT）阶段，行业普遍认为仅需高质量且多样性的少量数据（可能仅占总数据的0.5%）。通过聚类方法筛选核心样本是一种有效的解决方案。</p>
<p>💡 <strong>启发点：</strong></p>
<ul>
<li>数据多样性不仅提升模型泛化能力，还能减少冗余数据对训练效率的影响。</li>
</ul>
<hr>
<h2 id="核心数据筛选方法" tabindex="-1"><a class="header-anchor" href="#核心数据筛选方法"><span>核心数据筛选方法</span></a></h2>
<p><img src="/img/user/附件/Pasted image 20250408142542.png" alt="Pasted image 20250408142542.png"></p>
<h3 id="方法1-基于k-means聚类的多样性采样" tabindex="-1"><a class="header-anchor" href="#方法1-基于k-means聚类的多样性采样"><span>方法1：基于K-means聚类的多样性采样</span></a></h3>
<p>✅ <strong>步骤：</strong></p>
<ol>
<li>使用SimBERT对数据进行向量化处理。</li>
<li>通过K-means算法进行聚类。</li>
<li>从不同聚类簇中采样核心样本。</li>
</ol>
<p>⚠ <strong>缺点：</strong><br>
质量较差的样本可能因聚类分布而被采样。</p>
<hr>
<h3 id="方法2-加权采样-基于聚类簇的多样性权重和质量权重" tabindex="-1"><a class="header-anchor" href="#方法2-加权采样-基于聚类簇的多样性权重和质量权重"><span>方法2：加权采样（基于聚类簇的多样性权重和质量权重）</span></a></h3>
<p>✅ <strong>步骤：</strong></p>
<ol>
<li>对每个聚类簇计算权重，包括多样性权重和质量权重。</li>
<li>根据权重进行加权采样。</li>
</ol>
<p>⚠ <strong>缺点：</strong><br>
部分簇间样本相似度可能高于簇内样本，影响采样效果。</p>
<hr>
<h3 id="方法3-基于knn聚类的权重采样" tabindex="-1"><a class="header-anchor" href="#方法3-基于knn聚类的权重采样"><span>方法3：基于KNN聚类的权重采样</span></a></h3>
<p>✅ <strong>步骤：</strong></p>
<ol>
<li>计算类内平均样本相似度并反向作为多样性权重。</li>
<li>结合质量权重，最终进行加权采样。</li>
</ol>
<p>💡 <strong>创新点：</strong><br>
此方法通过对比阈值相似度（如80%以内）计算权重，使得采样分布更接近正态分布。</p>
<hr>
<h2 id="垂域数据扩充流程" tabindex="-1"><a class="header-anchor" href="#垂域数据扩充流程"><span>垂域数据扩充流程<img src="/img/user/附件/Pasted image 20250408142553.png" alt="Pasted image 20250408142553.png"></span></a></h2>
<p>以下是从通用数据中筛选垂域相关内容的具体步骤：</p>
<h3 id="数据处理与筛选流程" tabindex="-1"><a class="header-anchor" href="#数据处理与筛选流程"><span>数据处理与筛选流程</span></a></h3>
<p>❗ <strong>操作步骤：</strong></p>
<ol>
<li><strong>初始数据爬取：</strong> 爬取尽可能多的互联网开源书籍、百科数据及网页资料，形成种子数据语料库。</li>
<li><strong>关键词筛选：</strong> 使用jieba分词工具对种子文本进行关键词挖掘，并人工整理关键词表。</li>
<li><strong>召回相似数据：</strong> 从通用数据中筛选出与种子数据相似度最高的前10条内容（基于前512 tokens计算相似度）。</li>
<li><strong>人工筛选：</strong> 对召回数据进行人工标注，选择垂域相关内容作为扩充数据。</li>
</ol>
<p>💡 <strong>启发点：</strong></p>
<ul>
<li>结合自动化工具和人工筛选，提高垂域数据的精准度。</li>
</ul>
<hr>
<h2 id="常见错误与注意事项" tabindex="-1"><a class="header-anchor" href="#常见错误与注意事项"><span>常见错误与注意事项</span></a></h2>
<p>⚠ <strong>警告区块：</strong></p>
<ul>
<li>聚类算法易受噪声数据影响，需提前清洗数据。</li>
<li>类间高相似度可能导致采样结果偏差，应优化权重计算方法。</li>
</ul>
<hr>
<h2 id="📈-未来趋势预测" tabindex="-1"><a class="header-anchor" href="#📈-未来趋势预测"><span>📈 未来趋势预测</span></a></h2>
<p>随着大模型的发展，对高质量、多样性数据的需求将持续增长。未来可能会出现更加智能化的数据筛选算法，例如结合深度学习的动态聚类方法，以进一步提高效率和准确性。</p>
<hr>
<h2 id="思考板块" tabindex="-1"><a class="header-anchor" href="#思考板块"><span>思考板块</span></a></h2>
<ol>
<li>如何进一步优化聚类算法以减少噪声影响？</li>
<li>是否可以引入主动学习机制来动态调整采样权重？</li>
<li>在跨语种数据处理中，如何解决语义偏差问题？</li>
</ol>
<hr>
<blockquote>
<p><strong>来源：</strong> LIMA: Less Is More for Alignment；D4: Improving LLM Pretraining via Document De-Duplication and Diversification；DeepseekMath实践经验</p>
</blockquote>
<hr>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 探索不同聚类算法对采样质量的影响。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 测试SimBERT在不同领域文本中的表现。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 开发自动化工具整合关键词挖掘与人工筛选流程。</label></li>
</ul>
<hr>
<h2 id="后续追踪计划" tabindex="-1"><a class="header-anchor" href="#后续追踪计划"><span>后续追踪计划</span></a></h2>
<ol>
<li>深入研究加权采样方法对模型微调效果的提升。</li>
<li>开发中文领域分类器并评估其准确率。</li>
<li>设计跨语种数据筛选方案，验证其在多语言模型中的适用性。</li>
</ol>
<hr>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mtext>公式示例：</mtext></mrow><annotation encoding="application/x-tex">\text{公式示例：}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord cjk_fallback">公式示例：</span></span></span></span></span></span></p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><munder><mrow><mi>max</mi><mo>⁡</mo></mrow><mrow><mi>x</mi><mo>∈</mo><mi mathvariant="double-struck">R</mi></mrow></munder><mo stretchy="false">(</mo><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\max \limits_{x \in \mathbb{R}} (f(x))
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.5256em;vertical-align:-0.7756em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.4306em;"><span style="top:-2.3518em;margin-left:0em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">x</span><span class="mrel mtight">∈</span><span class="mord mathbb mtight">R</span></span></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span><span class="mop">max</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.7756em;"><span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">))</span></span></span></span></span></p>
</div></template>


