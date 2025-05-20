<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<p><strong>分类</strong>：机器学习<br>
<strong>标签</strong>：数据配比、模型训练、课程学习、领域数据<br>
<strong>日期</strong>：2023-10-17</p>
<hr>
<h2 id="核心观点总结" tabindex="-1"><a class="header-anchor" href="#核心观点总结"><span>核心观点总结</span></a></h2>
<p>在机器学习模型的训练中，数据配比和训练顺序至关重要，尤其对于大语言模型的预训练和微调（SFT）。本文探讨了数据分类、比例分配以及领域数据的使用策略，同时介绍了课程学习的概念及其在大模型训练中的应用。以下是核心观点：</p>
<ol>
<li>数据分类需精细化，以便更好地适配不同任务类型。</li>
<li>数据配比对于模型性能影响显著，中文模型建议中文占比超过50%，代码和逻辑数据需适量增加。</li>
<li>领域数据的比例需要严格控制，以免影响模型的通用能力。</li>
<li>课程学习可以有效缓解模型遗忘问题，需在小模型上先实验再应用于大模型。</li>
</ol>
<hr>
<h2 id="重点内容提取" tabindex="-1"><a class="header-anchor" href="#重点内容提取"><span>重点内容提取</span></a></h2>
<h3 id="数据分类与配比方法" tabindex="-1"><a class="header-anchor" href="#数据分类与配比方法"><span>数据分类与配比方法</span></a></h3>
<p>✅ <strong>指导思想</strong>：</p>
<ul>
<li>数据按照任务类型进行精细划分，建议划分至三级类别（如中文、英文、代码）。</li>
<li>使用分类器对文档进行类别判断，分类器推荐采用 BERT 家族模型。</li>
<li>数据规模建议控制在约 2 万条。</li>
</ul>
<p>⚠ <strong>常见比例</strong>：<br>
大多数中文模型的数据配比为：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mtext>中文：英文：代码</mtext><mo>=</mo><mn>4</mn><mo>:</mo><mn>4</mn><mo>:</mo><mn>2</mn></mrow><annotation encoding="application/x-tex">中文：英文：代码 = 4:4:2
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord cjk_fallback">中文：英文：代码</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span></span></p>
<p>其中，中文数据占比需超过50%，以保证模型对中文任务的适配性；英文质量较高但不宜过少；代码和逻辑数据（如数学、COT）则需尽可能多以提升推理能力。</p>
<hr>
<h3 id="领域数据的使用策略" tabindex="-1"><a class="header-anchor" href="#领域数据的使用策略"><span>领域数据的使用策略</span></a></h3>
<p>❗ <strong>关键点</strong>：</p>
<ul>
<li>在继续预训练（Continue Pretraining）时，领域数据比例建议控制在 15% 以下，以避免通用能力显著下降。</li>
<li>不同预训练模型对领域数据的阈值要求有所不同，例如 LLaMA 模型需更低比例。</li>
</ul>
<p>💡 <strong>启发点</strong>：<br>
领域数据比例的阈值范围通常为 10%-15%，且与预训练模型大小和原始数据比例密切相关，需要通过实践不断调整。</p>
<hr>
<h3 id="数据训练顺序与课程学习" tabindex="-1"><a class="header-anchor" href="#数据训练顺序与课程学习"><span>数据训练顺序与课程学习</span></a></h3>
<p>✅ <strong>课程学习概念</strong>：</p>
<ul>
<li>大模型在大量数据上预训练时，采用课程学习的方式：先学习简单内容，再逐步进入复杂内容。</li>
<li>数据训练顺序的重要性：可有效缓解模型“遗忘”问题。</li>
</ul>
<p>⚠ <strong>实验流程</strong>：</p>
<ul>
<li>在小模型上先进行多组数据配比实验，观察损失（Loss）变化情况。</li>
<li>利用 Scaling Law 推算大模型上的效果。</li>
</ul>
<hr>
<h2 id="警告区块" tabindex="-1"><a class="header-anchor" href="#警告区块"><span>警告区块</span></a></h2>
<blockquote>
<p><strong>注意事项</strong>：</p>
<ul>
<li>领域数据比例过高会显著降低模型的通用能力，应严格控制在经验阈值范围内。</li>
<li>数据分类器不要求特别精准，但需能有效区分主要类别。</li>
<li>数据训练顺序需经过充分实验验证，否则可能导致模型性能下降。</li>
</ul>
</blockquote>
<hr>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ol>
<li>实验不同的数据配比方案，观察对小模型性能的影响。</li>
<li>优化领域数据比例，确保通用能力不受损。</li>
<li>实施课程学习策略，对训练顺序进行设计与验证。</li>
</ol>
<hr>
<h2 id="📈趋势预测" tabindex="-1"><a class="header-anchor" href="#📈趋势预测"><span>📈趋势预测</span></a></h2>
<p>随着大语言模型的发展，领域专项模型将成为主流，但如何平衡领域数据与通用数据仍是核心挑战。此外，课程学习策略可能会进一步细化，甚至引入自动化排序算法来优化训练顺序。</p>
<hr>
<h2 id="后续追踪" tabindex="-1"><a class="header-anchor" href="#后续追踪"><span>后续追踪</span></a></h2>
<ul>
<li>探讨不同预训练模型对领域数据比例的敏感性。</li>
<li>开发自动化工具，用于动态调整数据配比和训练顺序。</li>
<li>深入研究 Scaling Law 在大模型上的应用效果。</li>
</ul>
<hr>
<h2 id="思考-板块" tabindex="-1"><a class="header-anchor" href="#思考-板块"><span>[思考]板块</span></a></h2>
<ol>
<li>数据配比对不同任务类型的影响是否可以通过统一指标量化？</li>
<li>是否可以开发一种通用算法，根据任务需求自动调整领域数据比例？</li>
<li>课程学习能否结合强化学习机制，实现动态优化？</li>
</ol>
<hr>
<blockquote>
<p>原文出处：《2.2.4 数据配比和顺序》</p>
</blockquote>
</div></template>


