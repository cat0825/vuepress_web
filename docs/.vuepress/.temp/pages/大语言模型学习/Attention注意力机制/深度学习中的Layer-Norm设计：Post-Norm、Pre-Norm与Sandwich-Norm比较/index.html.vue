<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li><strong>分类</strong>：深度学习、模型优化</li>
<li><strong>标签</strong>：Layer Norm、残差网络、模型训练</li>
<li><strong>日期</strong>：2025年3月2日</li>
</ul>
<hr>
<h2 id="内容摘要" tabindex="-1"><a class="header-anchor" href="#内容摘要"><span>内容摘要</span></a></h2>
<p>Layer Norm是一种常用于深度学习模型中的归一化技术，特别是在NLP领域。本文探讨了Layer Norm在不同位置（Post-Norm、Pre-Norm和Sandwich-Norm）对模型训练稳定性和性能的影响，并分析了其计算公式与特性。</p>
<hr>
<h2 id="核心内容" tabindex="-1"><a class="header-anchor" href="#核心内容"><span>核心内容</span></a></h2>
<h3 id="layer-norm的位置对模型的影响" tabindex="-1"><a class="header-anchor" href="#layer-norm的位置对模型的影响"><span><strong>Layer Norm的位置对模型的影响</strong></span></a></h3>
<ol>
<li>
<p><strong>Post-Norm</strong>：</p>
<ul>
<li>优点：对参数正则化效果更强，收敛性更好。</li>
<li>缺点：深层模型容易出现梯度消失，训练初期不稳定，需要使用warmup策略。</li>
<li>特性：削弱恒等分支的权重，更突出残差分支。</li>
</ul>
</li>
<li>
<p><strong>Pre-Norm</strong>：</p>
<ul>
<li>优点：梯度范数在各层间保持近似相等，训练较为稳定。</li>
<li>缺点：牺牲了模型深度，最终效果通常不如Post-Norm。</li>
<li>特性：无形中增加了模型宽度，同时降低实际深度。</li>
</ul>
</li>
<li>
<p><strong>Sandwich-Norm</strong>：</p>
<ul>
<li>优点：有效控制激活值范围，提升模型学习能力。</li>
<li>缺点：训练过程中可能出现不稳定，甚至导致崩溃。</li>
</ul>
</li>
</ol>
<p>📈 <strong>趋势预测</strong>：目前大规模模型更倾向于使用Pre-Norm，因为它能较好地控制梯度爆炸问题，适合复杂任务。</p>
<hr>
<h3 id="layer-norm的计算公式" tabindex="-1"><a class="header-anchor" href="#layer-norm的计算公式"><span><strong>Layer Norm的计算公式</strong></span></a></h3>
<p>Layer Norm针对每个样本的所有特征进行归一化，公式如下：</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">μ </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> E</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">X</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">/</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">H</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Σ</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">x_i</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">σ² </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Var</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">X</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">/</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">H</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Σ</span><span style="--shiki-light:#999999;--shiki-dark:#666666">((</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">x_i </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> μ</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">²</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> +</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> ε</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">y </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">X </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> μ</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> /</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> √σ² </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> γ </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">+</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> β</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>输入维度</strong>：<code v-pre>b × l × d</code>（批量大小 × 序列长度 × 嵌入维度）</li>
<li><strong>参数</strong>：
<ul>
<li><code v-pre>γ</code>：可学习的缩放参数</li>
<li><code v-pre>β</code>：可学习的偏移参数</li>
<li><code v-pre>ε</code>：防止分母为零的小值</li>
</ul>
</li>
</ul>
<p>💡 <strong>启发点</strong>：这种归一化方式能够消除样本间的大小关系，但保留样本内特征之间的相对关系，非常适合NLP任务。</p>
<hr>
<h3 id="技术术语通俗解释" tabindex="-1"><a class="header-anchor" href="#技术术语通俗解释"><span><strong>技术术语通俗解释</strong></span></a></h3>
<ul>
<li><strong>梯度爆炸与消失</strong>：模型在反向传播时，梯度值过大或过小导致训练失败。</li>
<li><strong>残差分支与恒等分支</strong>：
<ul>
<li>残差分支：用于捕捉输入与输出之间的变化。</li>
<li>恒等分支：用于保留输入信息，减少信息丢失。</li>
</ul>
</li>
</ul>
<p>⚠ <strong>常见错误</strong>：</p>
<ul>
<li>忽略Layer Norm位置对训练稳定性的影响。</li>
<li>未调整初始化或未使用warmup策略，导致Post-Norm模型难以训练。</li>
</ul>
<hr>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<p>✅ 探索不同任务中Layer Norm位置的最佳选择<br>
✅ 优化初始化策略以提升Post-Norm的训练稳定性<br>
✅ 比较不同归一化方式（如Batch Norm与Layer Norm）的适用场景</p>
<hr>
<h2 id="思考-板块" tabindex="-1"><a class="header-anchor" href="#思考-板块"><span>[思考]板块</span></a></h2>
<ol>
<li>如何在深度模型中平衡宽度与深度，以提高最终效果？</li>
<li>是否可以结合Pre-Norm和Post-Norm的优势，设计新的归一化方法？</li>
<li>在实际应用中，如何动态调整Norm位置以适应不同任务需求？</li>
</ol>
<hr>
<h2 id="后续追踪计划" tabindex="-1"><a class="header-anchor" href="#后续追踪计划"><span>后续追踪计划</span></a></h2>
<ul>
<li>深入研究Sandwich-Norm的潜在应用场景及优化策略。</li>
<li>测试不同归一化方式在Transformer架构中的性能表现。</li>
<li>开展实验分析，验证Pre-Norm与Post-Norm在大规模模型中的效果差异。</li>
</ul>
<hr>
<blockquote>
<p><strong>来源</strong>：整理自深度学习技术文档和相关研究资料</p>
</blockquote>
</div></template>


