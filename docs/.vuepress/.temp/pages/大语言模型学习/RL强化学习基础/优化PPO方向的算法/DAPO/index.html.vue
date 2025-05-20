<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li>分类：强化学习</li>
<li>标签：DAPO算法, 强化学习, 探索与利用, 奖励设计</li>
<li>日期：2025年4月12日</li>
</ul>
<h2 id="内容概述" tabindex="-1"><a class="header-anchor" href="#内容概述"><span>内容概述</span></a></h2>
<p>在强化学习领域，探索与利用的平衡一直是一个重要的研究课题。探索鼓励智能体在环境中尝试不同策略，以期找到更优的解决方案，而利用则强调使用现有的较优策略来获得稳定的收益。奖励设计在此过程中扮演着关键角色，它直接影响策略学习的效率和效果。</p>
<h3 id="dapo算法的核心改进" tabindex="-1"><a class="header-anchor" href="#dapo算法的核心改进"><span>DAPO算法的核心改进</span></a></h3>
<p>💡 <strong>启发点</strong>：DAPO算法通过去掉KL散度约束项，解决了在训练长推理模型过程中策略偏离初始策略的问题。</p>
<h4 id="关键技术改进" tabindex="-1"><a class="header-anchor" href="#关键技术改进"><span>关键技术改进</span></a></h4>
<ol>
<li>
<p><strong>移除KL散度约束项</strong>：在GRPO算法中，KL散度约束用于限制策略偏离初始策略的幅度。然而，在长推理模型训练中，这种限制显得不再必要。DAPO通过移除这一约束，允许策略有更大的灵活性。</p>
</li>
<li>
<p><strong>动态采样策略优化</strong>：DAPO引入了动态采样的方法，进一步提升了策略优化的效率。</p>
</li>
<li>
<p><strong>奖励设计的创新</strong>：通过结合传统强化学习中的奖励设计方法，DAPO在任务相关性上取得了更好的平衡。</p>
</li>
</ol>
<h2 id="技术术语简化" tabindex="-1"><a class="header-anchor" href="#技术术语简化"><span>技术术语简化</span></a></h2>
<ul>
<li><strong>KL散度</strong>：一种衡量两个概率分布差异的指标。在这里用于限制策略变化。</li>
<li><strong>Long-CoT推理模型</strong>：一种需要长时间推理计算的模型类型。</li>
<li><strong>GRPO算法</strong>：一种基于深度强化学习的算法，用于大规模模型训练。</li>
</ul>
<h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2>
<ol>
<li>✅ <strong>去除KL散度约束</strong>：允许策略更自由地演变。</li>
<li>⚠ <strong>引入动态采样</strong>：根据实时反馈调整采样策略。</li>
<li>❗ <strong>优化奖励设计</strong>：结合传统方法，提升任务相关性。</li>
</ol>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p>⚠ 在移除KL散度约束时，需确保策略不会过于偏离合理范围，否则可能导致不稳定的学习过程。</p>
</blockquote>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul>
<li>研究DAPO在不同任务上的适用性。</li>
<li>实施动态采样策略优化，观察其对效率的影响。</li>
<li>探讨奖励设计对不同类型任务的影响。</li>
</ul>
<h2 id="数据转换" tabindex="-1"><a class="header-anchor" href="#数据转换"><span>数据转换</span></a></h2>
<table>
<thead>
<tr>
<th>技术改进项</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>移除KL散度约束</td>
<td>提高策略灵活性</td>
</tr>
<tr>
<td>动态采样策略优化</td>
<td>提升策略优化效率</td>
</tr>
<tr>
<td>奖励设计创新</td>
<td>增强任务相关性</td>
</tr>
</tbody>
</table>
<h2 id="公式显示" tabindex="-1"><a class="header-anchor" href="#公式显示"><span>公式显示</span></a></h2>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mtext>原始GRPO公式</mtext></mrow><annotation encoding="application/x-tex">\text{原始GRPO公式}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord cjk_fallback">原始</span><span class="mord">GRPO</span><span class="mord cjk_fallback">公式</span></span></span></span></span></span></p>
<p><img src="/img/user/附件/Pasted image 20250422221555.png" alt="Pasted image 20250422221555.png"></p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mtext>DAPO公式</mtext></mrow><annotation encoding="application/x-tex">\text{DAPO公式}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord">DAPO</span><span class="mord cjk_fallback">公式</span></span></span></span></span></span></p>
<p><img src="/img/user/附件/Pasted image 20250422221606.png" alt="Pasted image 20250422221606.png"></p>
<blockquote>
<p>原文来源：[技术报告 DAPO: an Open-Source LLM Reinforcement Learning System at Scale]</p>
</blockquote>
<h1 id="clip-higher技术改进-提升低概率token探索能力" tabindex="-1"><a class="header-anchor" href="#clip-higher技术改进-提升低概率token探索能力"><span>Clip-Higher技术改进：提升低概率Token探索能力</span></a></h1>
<h2 id="元数据-1" tabindex="-1"><a class="header-anchor" href="#元数据-1"><span>元数据</span></a></h2>
<p>分类：技术改进</p>
<p>标签：Clip-Higher, 权重裁剪, Token生成, 推理过程</p>
<p>日期：2025年4月12日</p>
<h2 id="内容处理" tabindex="-1"><a class="header-anchor" href="#内容处理"><span>内容处理</span></a></h2>
<p>Clip-Higher是一个技术改进方法，旨在提高低概率token的探索能力。原有方法对重要性权重的裁剪阈值设置较低，限制了低概率token的生成概率增长。通过调整裁剪阈值，Clip-Higher促进学习长推理过程和新的推理范式。
<img src="/img/user/附件/Pasted image 20250422221754.png" alt="Pasted image 20250422221754.png"></p>
<h3 id="核心观点" tabindex="-1"><a class="header-anchor" href="#核心观点"><span>核心观点</span></a></h3>
<ul>
<li><strong>Clip-Higher的作用</strong>：提高了重要性权重的上裁剪阈值，促进低概率token的探索。</li>
<li><strong>原有问题</strong>：原始裁剪阈值设置为 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ϵ</mi><mo>=</mo><mn>0.2</mn></mrow><annotation encoding="application/x-tex">\epsilon = 0.2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">ϵ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0.2</span></span></span></span>，导致低概率token几乎没有增长。</li>
<li><strong>改进措施</strong>：调整裁剪阈值为 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>ϵ</mi><mrow><mi>l</mi><mi>o</mi><mi>w</mi></mrow></msub><mo>=</mo><mn>0.2</mn></mrow><annotation encoding="application/x-tex">\epsilon_{low} = 0.2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">ϵ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.01968em;">l</span><span class="mord mathnormal mtight">o</span><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0.2</span></span></span></span> 和 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>ϵ</mi><mrow><mi>h</mi><mi>i</mi><mi>g</mi><mi>h</mi></mrow></msub><mo>=</mo><mn>0.28</mn></mrow><annotation encoding="application/x-tex">\epsilon_{high} = 0.28</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7167em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal">ϵ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">hi</span><span class="mord mathnormal mtight" style="margin-right:0.03588em;">g</span><span class="mord mathnormal mtight">h</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0.28</span></span></span></span>。
<img src="/img/user/附件/Pasted image 20250422221805.png" alt="Pasted image 20250422221805.png"></li>
</ul>
<h3 id="技术术语转述" tabindex="-1"><a class="header-anchor" href="#技术术语转述"><span>技术术语转述</span></a></h3>
<ul>
<li><strong>重要性权重</strong>(<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>r</mi><mrow><mi>i</mi><mo separator="true">,</mo><mi>t</mi></mrow></msub><mo stretchy="false">(</mo><mi>θ</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">r_{i,t}(\theta)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0361em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight">t</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mclose">)</span></span></span></span>)：影响token生成概率的参数。</li>
<li><strong>优势值</strong>(<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>A</mi><mrow><mi>i</mi><mo separator="true">,</mo><mi>t</mi></mrow></msub></mrow><annotation encoding="application/x-tex">A_{i,t}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9694em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight">t</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span></span>)：用于决定是否提高当前response中token的生成概率。</li>
<li><strong>策略概率</strong>(<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mi>θ</mi></msub><mo stretchy="false">(</mo><msub><mi>o</mi><mi>i</mi></msub><mo>∣</mo><mi>q</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\pi_{\theta}(o_i \mid q)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">θ</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">o</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∣</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">q</span><span class="mclose">)</span></span></span></span>)：控制token生成的概率。</li>
</ul>
<h2 id="操作步骤-1" tabindex="-1"><a class="header-anchor" href="#操作步骤-1"><span>操作步骤</span></a></h2>
<ol>
<li>✅ 确定当前优势值是否为正。</li>
<li>⚠ 如果优势值为正，考虑提高当前response中token的生成概率。</li>
<li>❗ 调整裁剪阈值以促进低概率token的探索。</li>
</ol>
<h2 id="常见错误-1" tabindex="-1"><a class="header-anchor" href="#常见错误-1"><span>常见错误</span></a></h2>
<blockquote>
<p>原始裁剪阈值设置过低，导致低概率token生成受限。注意调整阈值以提高探索能力。</p>
</blockquote>
<h2 id="💡启发点" tabindex="-1"><a class="header-anchor" href="#💡启发点"><span>💡启发点</span></a></h2>
<p>通过调整裁剪阈值，Clip-Higher不仅提高了token生成的灵活性，还促进了复杂推理过程的学习。</p>
<h2 id="行动清单-1" tabindex="-1"><a class="header-anchor" href="#行动清单-1"><span>行动清单</span></a></h2>
<ul>
<li>研究其他可能影响token生成的参数。</li>
<li>评估Clip-Higher在不同应用场景中的效果。</li>
<li>开发新的推理范式以进一步提升模型能力。</li>
</ul>
<h2 id="数据转换-1" tabindex="-1"><a class="header-anchor" href="#数据转换-1"><span>数据转换</span></a></h2>
<table>
<thead>
<tr>
<th>参数</th>
<th>原始值</th>
<th>调整后值</th>
</tr>
</thead>
<tbody>
<tr>
<td><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ϵ</mi></mrow><annotation encoding="application/x-tex">\epsilon</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">ϵ</span></span></span></span></td>
<td>0.2</td>
<td>0.28</td>
</tr>
</tbody>
</table>
<blockquote>
<p>引用来源：原始内容来自技术文档关于Clip-Higher的描述。</p>
</blockquote>
<h1 id="动态采样技术在机器学习中的应用与挑战" tabindex="-1"><a class="header-anchor" href="#动态采样技术在机器学习中的应用与挑战"><span>动态采样技术在机器学习中的应用与挑战</span></a></h1>
<p><strong>分类</strong>：机器学习<br>
<strong>标签</strong>：动态采样、梯度消失、训练稳定性<br>
<strong>日期</strong>：2025年4月12日</p>
<h2 id="核心观点总结" tabindex="-1"><a class="header-anchor" href="#核心观点总结"><span>核心观点总结</span></a></h2>
<p>动态采样是一种在机器学习训练过程中，通过过滤掉准确率为1和0的样本，来避免梯度消失和提高训练稳定性的方法。随着训练的进行，准确率为1的样本会增多，若不加以处理，会导致梯度消失问题。
<img src="/img/user/附件/Pasted image 20250422221940.png" alt="Pasted image 20250422221940.png"></p>
<h2 id="动态采样的操作步骤" tabindex="-1"><a class="header-anchor" href="#动态采样的操作步骤"><span>动态采样的操作步骤</span></a></h2>
<ol>
<li>✅ <strong>每次训练前进行采样</strong>：在每个训练步骤开始前，对数据集进行动态采样。</li>
<li>⚠ <strong>过滤准确率为1和0的样本</strong>：确保每个批次（batch）的样本准确率介于0到1之间。</li>
<li>❗ <strong>避免梯度消失</strong>：通过过滤，确保在训练过程中不会因为某一组内的输出准确率为1而导致优势为0。
<img src="/img/user/附件/Pasted image 20250422221948.png" alt="Pasted image 20250422221948.png"><img src="/img/user/附件/Pasted image 20250422221954.png" alt="Pasted image 20250422221954.png"></li>
</ol>
<h2 id="常见错误-2" tabindex="-1"><a class="header-anchor" href="#常见错误-2"><span>常见错误</span></a></h2>
<blockquote>
<p><strong>警告</strong>：忽视动态采样可能导致梯度消失问题，尤其是在训练步数增加后，准确率为1的样本比例上升时。</p>
</blockquote>
<h2 id="💡-启发点" tabindex="-1"><a class="header-anchor" href="#💡-启发点"><span>💡 启发点</span></a></h2>
<p>动态采样不仅能提高训练的稳定性，还能有效避免因某些样本过于简单而导致的模型退化问题。</p>
<h2 id="行动清单-2" tabindex="-1"><a class="header-anchor" href="#行动清单-2"><span>行动清单</span></a></h2>
<ul>
<li>检查现有模型是否存在梯度消失问题。</li>
<li>评估动态采样对模型性能的影响。</li>
<li>实施动态采样策略，观察训练过程中的变化。</li>
</ul>
<blockquote>
<p>来源：[原始文本来源未提供]</p>
</blockquote>
<h1 id="token-level-loss-优化策略-提升深度学习模型的训练效果" tabindex="-1"><a class="header-anchor" href="#token-level-loss-优化策略-提升深度学习模型的训练效果"><span>Token-Level Loss 优化策略：提升深度学习模型的训练效果</span></a></h1>
<h2 id="元数据-2" tabindex="-1"><a class="header-anchor" href="#元数据-2"><span>元数据</span></a></h2>
<ul>
<li>分类：深度学习</li>
<li>标签：Token-Level Loss, 深度学习模型, 策略优化, 训练稳定性</li>
<li>日期：2025年4月12日</li>
</ul>
<h2 id="核心观点总结-1" tabindex="-1"><a class="header-anchor" href="#核心观点总结-1"><span>核心观点总结</span></a></h2>
<p>在深度学习模型的训练中，传统的损失计算方式可能会导致长样本的贡献被低估，影响策略学习。因此，采用Token-Level Loss的计算方法可以有效地提升长样本对模型训练的影响，使得训练过程更加稳定。</p>
<h2 id="重点段落" tabindex="-1"><a class="header-anchor" href="#重点段落"><span>重点段落</span></a></h2>
<h3 id="token-level-loss的优势" tabindex="-1"><a class="header-anchor" href="#token-level-loss的优势"><span>Token-Level Loss的优势</span></a></h3>
<p>Token-Level Loss通过对每个token单独计算损失，确保长样本中的每个部分都对总损失有足够的贡献。这种方法解决了传统Sample-Level Loss可能导致的长样本贡献不均衡的问题。</p>
<h3 id="训练过程的稳定性" tabindex="-1"><a class="header-anchor" href="#训练过程的稳定性"><span>训练过程的稳定性</span></a></h3>
<p>采用Token-Level Loss后，训练过程变得更加稳定，并且可以更好地控制熵值（entropy），避免策略过于随机或探索不足的问题。</p>
<h3 id="问题解决与策略调整" tabindex="-1"><a class="header-anchor" href="#问题解决与策略调整"><span>问题解决与策略调整</span></a></h3>
<p>通过将Sample-Level Loss转换为Token-Level Loss，DAPO（Deep Adaptive Policy Optimization）能够更有效地从长样本中学习关键推理模式，同时减少低质量样本对策略的负面影响。</p>
<h2 id="操作步骤-2" tabindex="-1"><a class="header-anchor" href="#操作步骤-2"><span>操作步骤</span></a></h2>
<ol>
<li>✅ <strong>计算每个token的loss</strong>：确保每个token对总损失有均等的贡献。</li>
<li>⚠ <strong>控制熵值</strong>：避免策略过于随机或探索不足。</li>
<li>❗ <strong>调整策略学习</strong>：通过Token-Level Loss，提升长样本在策略学习中的影响力。</li>
</ol>
<h2 id="常见错误-3" tabindex="-1"><a class="header-anchor" href="#常见错误-3"><span>常见错误</span></a></h2>
<blockquote>
<p>⚠ 在使用传统Sample-Level Loss时，长样本的贡献可能被低估，导致策略偏离高质量样本的关键推理模式。</p>
</blockquote>
<h2 id="💡-启发点-1" tabindex="-1"><a class="header-anchor" href="#💡-启发点-1"><span>💡 启发点</span></a></h2>
<p>Token-Level Loss不仅提升了训练过程的稳定性，还通过更精细的损失计算方法，增强了模型对长样本的学习能力。</p>
<h2 id="行动清单-3" tabindex="-1"><a class="header-anchor" href="#行动清单-3"><span>行动清单</span></a></h2>
<ul>
<li>研究更多关于Token-Level Loss在不同模型中的应用案例。</li>
<li>测试不同熵值控制策略对模型性能的影响。</li>
<li>评估Token-Level Loss对其他深度学习任务的适用性。</li>
</ul>
<blockquote>
<p>原始出处：[原始文档内容未提供具体出处信息]</p>
</blockquote>
<h1 id="token-level-loss-优化策略-提升深度学习模型的训练效果-1" tabindex="-1"><a class="header-anchor" href="#token-level-loss-优化策略-提升深度学习模型的训练效果-1"><span>Token-Level Loss 优化策略：提升深度学习模型的训练效果</span></a></h1>
<h2 id="元数据-3" tabindex="-1"><a class="header-anchor" href="#元数据-3"><span>元数据</span></a></h2>
<ul>
<li>分类：深度学习</li>
<li>标签：Token-Level Loss, 深度学习模型, 策略优化, 训练稳定性</li>
<li>日期：2025年4月12日</li>
</ul>
<h2 id="核心观点总结-2" tabindex="-1"><a class="header-anchor" href="#核心观点总结-2"><span>核心观点总结</span></a></h2>
<p>在深度学习模型的训练中，传统的损失计算方式可能会导致长样本的贡献被低估，影响策略学习。因此，采用Token-Level Loss的计算方法可以有效地提升长样本对模型训练的影响，使得训练过程更加稳定。
<img src="/img/user/附件/Pasted image 20250422222200.png" alt="Pasted image 20250422222200.png"></p>
<h2 id="重点段落-1" tabindex="-1"><a class="header-anchor" href="#重点段落-1"><span>重点段落</span></a></h2>
<h3 id="token-level-loss的优势-1" tabindex="-1"><a class="header-anchor" href="#token-level-loss的优势-1"><span>Token-Level Loss的优势</span></a></h3>
<p>Token-Level Loss通过对每个token单独计算损失，确保长样本中的每个部分都对总损失有足够的贡献。这种方法解决了传统Sample-Level Loss可能导致的长样本贡献不均衡的问题。
<img src="/img/user/附件/Pasted image 20250422222206.png" alt="Pasted image 20250422222206.png"></p>
<h3 id="训练过程的稳定性-1" tabindex="-1"><a class="header-anchor" href="#训练过程的稳定性-1"><span>训练过程的稳定性</span></a></h3>
<p>采用Token-Level Loss后，训练过程变得更加稳定，并且可以更好地控制熵值（entropy），避免策略过于随机或探索不足的问题。</p>
<h3 id="问题解决与策略调整-1" tabindex="-1"><a class="header-anchor" href="#问题解决与策略调整-1"><span>问题解决与策略调整</span></a></h3>
<p>通过将Sample-Level Loss转换为Token-Level Loss，DAPO（Deep Adaptive Policy Optimization）能够更有效地从长样本中学习关键推理模式，同时减少低质量样本对策略的负面影响。</p>
<h2 id="操作步骤-3" tabindex="-1"><a class="header-anchor" href="#操作步骤-3"><span>操作步骤</span></a></h2>
<ol>
<li>✅ <strong>计算每个token的loss</strong>：确保每个token对总损失有均等的贡献。</li>
<li>⚠ <strong>控制熵值</strong>：避免策略过于随机或探索不足。</li>
<li>❗ <strong>调整策略学习</strong>：通过Token-Level Loss，提升长样本在策略学习中的影响力。</li>
</ol>
<h2 id="常见错误-4" tabindex="-1"><a class="header-anchor" href="#常见错误-4"><span>常见错误</span></a></h2>
<blockquote>
<p>⚠ 在使用传统Sample-Level Loss时，长样本的贡献可能被低估，导致策略偏离高质量样本的关键推理模式。</p>
</blockquote>
<h2 id="💡-启发点-2" tabindex="-1"><a class="header-anchor" href="#💡-启发点-2"><span>💡 启发点</span></a></h2>
<p>Token-Level Loss不仅提升了训练过程的稳定性，还通过更精细的损失计算方法，增强了模型对长样本的学习能力。
<img src="/img/user/附件/Pasted image 20250422222215.png" alt="Pasted image 20250422222215.png"></p>
<h2 id="行动清单-4" tabindex="-1"><a class="header-anchor" href="#行动清单-4"><span>行动清单</span></a></h2>
<ul>
<li>研究更多关于Token-Level Loss在不同模型中的应用案例。</li>
<li>测试不同熵值控制策略对模型性能的影响。</li>
<li>评估Token-Level Loss对其他深度学习任务的适用性。</li>
</ul>
<blockquote>
<p>原始出处：[原始文档内容未提供具体出处信息]</p>
</blockquote>
<h1 id="优化过长回答的奖励机制-提升模型性能" tabindex="-1"><a class="header-anchor" href="#优化过长回答的奖励机制-提升模型性能"><span>优化过长回答的奖励机制：提升模型性能</span></a></h1>
<h2 id="分类-机器学习优化" tabindex="-1"><a class="header-anchor" href="#分类-机器学习优化"><span>分类：机器学习优化</span></a></h2>
<h3 id="标签-奖励机制-模型训练-性能提升" tabindex="-1"><a class="header-anchor" href="#标签-奖励机制-模型训练-性能提升"><span>标签：奖励机制，模型训练，性能提升</span></a></h3>
<h3 id="日期-2025年4月12日" tabindex="-1"><a class="header-anchor" href="#日期-2025年4月12日"><span>日期：2025年4月12日</span></a></h3>
<p>在机器学习模型的训练过程中，如何有效地处理过长回答的问题是一个关键挑战。本文探讨了一种通过奖励修改来优化过长回答的方法，并在Qwen2.5-32B模型上进行了实验验证。</p>
<h2 id="核心观点-1" tabindex="-1"><a class="header-anchor" href="#核心观点-1"><span>核心观点</span></a></h2>
<p>这篇文章介绍了一种称为“soft punishment”的方法，用于对过长的回答进行惩罚，并将其叠加到准确率奖励上，从而稳定训练过程并提升模型性能。实验结果表明，在数学任务AIME2024上，该方法仅用50%的训练步数就超过了传统的GRPO方法。</p>
<h2 id="重点内容" tabindex="-1"><a class="header-anchor" href="#重点内容"><span>重点内容</span></a></h2>
<ol>
<li>
<p><strong>奖励修改方法</strong><br>
使用一种软惩罚机制对过长回答进行处理，具体公式为：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msub><mi>L</mi><mi>max</mi><mo>⁡</mo></msub><mo>=</mo><mn>20480</mn><mo separator="true">,</mo><mspace width="1em"/><msub><mi>L</mi><mtext>cache</mtext></msub><mo>=</mo><mn>4096</mn></mrow><annotation encoding="application/x-tex">L_{\max} = 20480, \quad L_{\text{cache}} = 4096
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">L</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mop mtight"><span class="mtight">m</span><span class="mtight">a</span><span class="mtight">x</span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord">20480</span><span class="mpunct">,</span><span class="mspace" style="margin-right:1em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">L</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord text mtight"><span class="mord mtight">cache</span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">4096</span></span></span></span></span></p>
<p><img src="/img/user/附件/Pasted image 20250422222816.png" alt="Pasted image 20250422222816.png"></p>
</li>
<li>
<p>这种方法能够有效稳定训练过程，提高模型性能。</p>
</li>
<li>
<p><strong>实验结果</strong><br>
在Qwen2.5-32B模型上进行的实验表明，该方法在数学任务AIME2024上的表现，仅用50%的训练步数就超过了GRPO。
<img src="/img/user/附件/Pasted image 20250422222826.png" alt="Pasted image 20250422222826.png"></p>
</li>
<li>
<p><strong>💡启发点</strong><br>
通过调整奖励机制，可以在保持准确率的同时，减少训练时间和资源消耗。</p>
</li>
</ol>
<h2 id="操作步骤-4" tabindex="-1"><a class="header-anchor" href="#操作步骤-4"><span>操作步骤</span></a></h2>
<ol>
<li>✅ 确定过长回答的阈值。</li>
<li>⚠ 实施soft punishment机制，并计算惩罚值。</li>
<li>❗ 将惩罚值与准确率奖励结合，应用于模型训练。</li>
</ol>
<h2 id="常见错误-5" tabindex="-1"><a class="header-anchor" href="#常见错误-5"><span>常见错误</span></a></h2>
<blockquote>
<p>⚠ 在设置过长回答阈值时，需根据具体任务调整，以避免对模型性能产生负面影响。</p>
</blockquote>
<h2 id="行动清单-5" tabindex="-1"><a class="header-anchor" href="#行动清单-5"><span>行动清单</span></a></h2>
<ul>
<li>研究其他任务中soft punishment机制的适用性。</li>
<li>探索不同参数设置对模型性能的影响。</li>
<li>记录并分析不同训练步数下的模型表现。</li>
</ul>
<blockquote>
<p>原始出处：本文内容基于某项目中的实验记录与总结。</p>
</blockquote>
</div></template>


