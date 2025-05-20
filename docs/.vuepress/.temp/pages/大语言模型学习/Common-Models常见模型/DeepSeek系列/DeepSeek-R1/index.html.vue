<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<p>分类：人工智能技术</p>
<p>标签：强化学习，深度学习，模型蒸馏，推理性能，人工智能</p>
<p>日期：2025年4月12日</p>
<h2 id="内容概述" tabindex="-1"><a class="header-anchor" href="#内容概述"><span>内容概述</span></a></h2>
<p>本文探讨了通过纯粹的强化学习（Reinforcement Learning）增强深度学习模型的推理能力，特别是介绍了DeepSeek-R1和DeepSeek-R1-Zero模型。DeepSeek-R1-Zero无需SFT（监督微调）即通过RL训练展现出强大的推理行为，而DeepSeek-R1通过多阶段训练和冷启动数据解决了Zero模型的可读性差等问题。此外，本文还研究了从DeepSeek-R1蒸馏到小模型的效果。
<img src="/img/user/附件/Pasted image 20250428211719.png" alt="Pasted image 20250428211719.png"><strong>整体训练流程</strong>
<img src="/img/user/附件/Pasted image 20250428211822.png" alt="Pasted image 20250428211822.png"></p>
<h2 id="研究背景与内容" tabindex="-1"><a class="header-anchor" href="#研究背景与内容"><span>研究背景与内容</span></a></h2>
<h3 id="研究背景" tabindex="-1"><a class="header-anchor" href="#研究背景"><span>研究背景</span></a></h3>
<ul>
<li><strong>Post-training</strong>提高推理任务准确性，与社会价值对齐，适应用户偏好。</li>
<li><strong>OpenAI</strong>通过增加思想链CoT推理过程的长度引入inference-time scaling。</li>
<li>后续工作探索test-time scaling，包括PRM、MCTS和Beam Search等，但未达到OpenAI-o1的水平。</li>
</ul>
<h3 id="研究内容" tabindex="-1"><a class="header-anchor" href="#研究内容"><span>研究内容</span></a></h3>
<ul>
<li>使用纯粹RL增强大模型推理能力，不使用SFT微调。</li>
<li>DeepSeek-R1-Zero出现可读性低、语言混合的问题，通过冷启动数据和多阶段训练解决。</li>
<li>从DeepSeek-R1蒸馏到小模型，取得良好效果。</li>
</ul>
<h2 id="研究贡献" tabindex="-1"><a class="header-anchor" href="#研究贡献"><span>研究贡献</span></a></h2>
<h3 id="强化学习在大模型上的应用" tabindex="-1"><a class="header-anchor" href="#强化学习在大模型上的应用"><span>强化学习在大模型上的应用</span></a></h3>
<ul>
<li>在Deepseek-V3-base上进行大规模强化学习，展示self-verification、reflection和生成长CoT功能。</li>
<li>大模型可以纯靠强化学习学习，而不需要SFT过程。</li>
</ul>
<h3 id="蒸馏技术的应用" tabindex="-1"><a class="header-anchor" href="#蒸馏技术的应用"><span>蒸馏技术的应用</span></a></h3>
<ul>
<li>较大模型的推理模式可以很好地蒸馏到较小模型，取得很好的成绩。
<img src="/img/user/附件/Pasted image 20250428211841.png" alt="Pasted image 20250428211841.png"></li>
</ul>
<h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2>
<ol>
<li>✅ 进行大规模强化学习训练。</li>
<li>⚠ 使用冷启动数据解决语言混合问题。</li>
<li>❗ 应用多阶段训练提升模型性能。</li>
<li>✅ 从DeepSeek-R1蒸馏至小模型。</li>
</ol>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p>⚠ 注意在强化学习过程中可能出现的可读性低、语言混合问题，需要通过适当的数据处理和训练策略解决。</p>
</blockquote>
<h2 id="💡启发点" tabindex="-1"><a class="header-anchor" href="#💡启发点"><span>💡启发点</span></a></h2>
<ul>
<li>利用纯粹的强化学习方法，不依赖于传统的微调步骤，展示了深度学习推理的新可能性。</li>
</ul>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul>
<li>探索更多RL在不同模型上的应用。</li>
<li>研究蒸馏技术在其他领域的潜力。</li>
<li>优化冷启动数据策略以提高模型性能。</li>
</ul>
<blockquote>
<p>原始出处：<a href="https://github.com/deepseek-ai/DeepSeek-R1/blob/main/DeepSeek_R1.pdf" target="_blank" rel="noopener noreferrer">DeepSeek-R1论文链接</a></p>
</blockquote>
<h1 id="method" tabindex="-1"><a class="header-anchor" href="#method"><span>Method</span></a></h1>
<h2 id="强化学习算法" tabindex="-1"><a class="header-anchor" href="#强化学习算法"><span>强化学习算法</span></a></h2>
<h2 id="重点段落" tabindex="-1"><a class="header-anchor" href="#重点段落"><span>重点段落</span></a></h2>
<h3 id="强化学习算法的优化" tabindex="-1"><a class="header-anchor" href="#强化学习算法的优化"><span>强化学习算法的优化</span></a></h3>
<p>GRPO算法使用自家的PPO算法进行优化，通过对相同问题产生的多个采样输出的平均奖励作为value的估计值，去掉了Value model，从而简化了训练过程。对于每个问题，GRPO从旧策略中采样一组输出，然后Reward model对这些回答给予奖励值，最后奖励值的平均值作为value的估计。</p>
<h3 id="优化公式" tabindex="-1"><a class="header-anchor" href="#优化公式"><span>优化公式</span></a></h3>
<p>优化公式如下：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msub><mi>J</mi><mrow><mi>G</mi><mi>R</mi><mi>P</mi><mi>O</mi></mrow></msub><mo stretchy="false">(</mo><mi>θ</mi><mo stretchy="false">)</mo><mo>=</mo><mi>E</mi><mrow><mo fence="true">[</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>G</mi></munderover><mrow><mo fence="true">(</mo><mi>min</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mfrac><mrow><msub><mi>π</mi><msub><mi>θ</mi><mrow><mi>o</mi><mi>l</mi><mi>d</mi></mrow></msub></msub><mo stretchy="false">(</mo><msub><mi>o</mi><mi>i</mi></msub><mi mathvariant="normal">∣</mi><mi>q</mi><mo stretchy="false">)</mo></mrow><mrow><msub><mi>π</mi><mi>θ</mi></msub><mo stretchy="false">(</mo><msub><mi>o</mi><mi>i</mi></msub><mi mathvariant="normal">∣</mi><mi>q</mi><mo stretchy="false">)</mo></mrow></mfrac><msub><mi>A</mi><mi>i</mi></msub><mo separator="true">,</mo><mtext>clip</mtext><mrow><mo fence="true">(</mo><mfrac><mrow><msub><mi>π</mi><msub><mi>θ</mi><mrow><mi>o</mi><mi>l</mi><mi>d</mi></mrow></msub></msub><mo stretchy="false">(</mo><msub><mi>o</mi><mi>i</mi></msub><mi mathvariant="normal">∣</mi><mi>q</mi><mo stretchy="false">)</mo></mrow><mrow><msub><mi>π</mi><mi>θ</mi></msub><mo stretchy="false">(</mo><msub><mi>o</mi><mi>i</mi></msub><mi mathvariant="normal">∣</mi><mi>q</mi><mo stretchy="false">)</mo></mrow></mfrac><mo separator="true">,</mo><mn>1</mn><mo>−</mo><mi>ϵ</mi><mo separator="true">,</mo><mn>1</mn><mo>+</mo><mi>ϵ</mi><mo fence="true">)</mo></mrow><msub><mi>A</mi><mi>i</mi></msub><mo fence="true">)</mo></mrow><mo>−</mo><mi>β</mi><msub><mi>D</mi><mrow><mi>K</mi><mi>L</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>π</mi><mi>θ</mi></msub><mi mathvariant="normal">∣</mi><mi mathvariant="normal">∣</mi><msub><mi>π</mi><mrow><mi>r</mi><mi>e</mi><mi>f</mi></mrow></msub><mo stretchy="false">)</mo><mo fence="true">)</mo></mrow><mo fence="true">]</mo></mrow></mrow><annotation encoding="application/x-tex">J_{GRPO}(\theta) = E \left[\sum_{i=1}^{G} \left( \min \left( \frac{\pi_{\theta_{old}}(o_i|q)}{\pi_{\theta}(o_i|q)} A_i, \text{clip} \left( \frac{\pi_{\theta_{old}}(o_i|q)}{\pi_{\theta}(o_i|q)}, 1-\epsilon, 1+\epsilon \right) A_i \right) - \beta D_{KL}(\pi_\theta || \pi_{ref}) \right)\right]
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.09618em;">J</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:-0.0962em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">GRPO</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:3.106em;vertical-align:-1.2777em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size4">[</span></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.8283em;"><span style="top:-1.8723em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">G</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.2777em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">(</span></span><span class="mop">min</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.427em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">θ</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">o</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.03588em;">q</span><span class="mclose">)</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.3488em;margin-left:-0.0278em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">o</span><span class="mord mathnormal mtight" style="margin-right:0.01968em;">l</span><span class="mord mathnormal mtight">d</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1512em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2559em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">o</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.03588em;">q</span><span class="mclose">)</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.936em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord text"><span class="mord">clip</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.427em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">θ</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">o</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.03588em;">q</span><span class="mclose">)</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.3488em;margin-left:-0.0278em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">o</span><span class="mord mathnormal mtight" style="margin-right:0.01968em;">l</span><span class="mord mathnormal mtight">d</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1512em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2559em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">o</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.03588em;">q</span><span class="mclose">)</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.936em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">ϵ</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">ϵ</span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size3">)</span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size3">)</span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.05278em;">β</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.07153em;">K</span><span class="mord mathnormal mtight">L</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">θ</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord">∣∣</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">re</span><span class="mord mathnormal mtight" style="margin-right:0.10764em;">f</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size3">)</span></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size4">]</span></span></span></span></span></span></span></p>
<h3 id="优势函数计算" tabindex="-1"><a class="header-anchor" href="#优势函数计算"><span>优势函数计算</span></a></h3>
<p>优势函数通过下式计算：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msub><mi>A</mi><mi>i</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>r</mi><mi>i</mi></msub><mo>−</mo><mtext>mean</mtext><mo stretchy="false">(</mo><mo stretchy="false">{</mo><msub><mi>r</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>r</mi><mn>2</mn></msub><mo separator="true">,</mo><mo>…</mo><mo separator="true">,</mo><msub><mi>r</mi><mi>G</mi></msub><mo stretchy="false">}</mo><mo stretchy="false">)</mo></mrow><mrow><mtext>std</mtext><mo stretchy="false">(</mo><mo stretchy="false">{</mo><msub><mi>r</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>r</mi><mn>2</mn></msub><mo separator="true">,</mo><mo>…</mo><mo separator="true">,</mo><msub><mi>r</mi><mi>G</mi></msub><mo stretchy="false">}</mo><mo stretchy="false">)</mo></mrow></mfrac></mrow><annotation encoding="application/x-tex">A_i = \frac{r_i - \text{mean}(\{r_1, r_2, \ldots, r_G\})}{\text{std}(\{r_1, r_2, \ldots, r_G\})}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.363em;vertical-align:-0.936em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.427em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord text"><span class="mord">std</span></span><span class="mopen">({</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">…</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">G</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">})</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord text"><span class="mord">mean</span></span><span class="mopen">({</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">…</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">G</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">})</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.936em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p>
<p><img src="/img/user/附件/Pasted image 20250428214417.png" alt="Pasted image 20250428214417.png"></p>
<h2 id="奖励建模" tabindex="-1"><a class="header-anchor" href="#奖励建模"><span>奖励建模</span></a></h2>
<h2 id="奖励建模核心观点" tabindex="-1"><a class="header-anchor" href="#奖励建模核心观点"><span>奖励建模核心观点</span></a></h2>
<p>奖励是强化学习（RL）的关键组成部分，提供训练信号并决定优化方向。本文设计了两种基于规则的奖励机制：</p>
<ol>
<li><strong>正确率奖励（Accuracy）</strong>：评估生成答案的正确性。对于数学问题，模型生成固定格式的答案以便验证；编程任务则通过测试用例和编译器验证。</li>
<li><strong>格式奖励（Format）</strong>：强制模型将思维过程生成在指定的标签内，以确保结构化输出。</li>
</ol>
<p>由于奖励过度利用问题，本文没有使用ORM或PRM奖励模型。</p>
<h2 id="训练模板设计" tabindex="-1"><a class="header-anchor" href="#训练模板设计"><span>训练模板设计</span></a></h2>
<p>本文设计了一个简单的训练模板，引导基础模型遵循指令。模板要求模型首先生成推理过程，然后给出最终答案，以避免偏差，比如强制进行反思性推理或推广特定解题策略。</p>
<p><img src="/img/user/附件/Pasted image 20250428214542.png" alt="Pasted image 20250428214542.png"></p>
<h2 id="性能" tabindex="-1"><a class="header-anchor" href="#性能"><span>性能</span></a></h2>
<p>DeepSeek-R1-Zero在无需监督微调数据的情况下，通过强化学习获得强大的推理能力，其在AIME benchmark上的性能随着训练进展而稳定提升，并且可以通过多数投票进一步增强性能。
<img src="/img/user/附件/Pasted image 20250428214707.png" alt="Pasted image 20250428214707.png"></p>
<h2 id="self-evolution" tabindex="-1"><a class="header-anchor" href="#self-evolution"><span>self-evolution</span></a></h2>
<p><img src="/img/user/附件/Pasted image 20250428214904.png" alt="Pasted image 20250428214904.png"></p>
<h2 id="关键段落" tabindex="-1"><a class="header-anchor" href="#关键段落"><span>关键段落</span></a></h2>
<h3 id="自我进化过程" tabindex="-1"><a class="header-anchor" href="#自我进化过程"><span>自我进化过程</span></a></h3>
<p>DeepSeek-R1-Zero在训练过程中表现出自我进化能力。随着训练步数的增加，模型的回答长度和思考时间几乎线性增长。这种提升源于模型内部的自我调整，而非外部的干预。</p>
<h3 id="复杂行为表现" tabindex="-1"><a class="header-anchor" href="#复杂行为表现"><span>复杂行为表现</span></a></h3>
<p>随着测试时间的增加，模型开始表现出复杂行为，例如反思行为。模型会重新审视和评估其先前步骤，并自发探索解决问题的替代方法。这些行为是模型与强化学习环境互动的结果，而不是预先编程设定的。</p>
<h3 id="技术术语解释" tabindex="-1"><a class="header-anchor" href="#技术术语解释"><span>技术术语解释</span></a></h3>
<ul>
<li><strong>自我进化</strong>：指模型在训练过程中通过内部机制自动提升性能，而不依赖外部调整。</li>
<li><strong>反思行为</strong>：模型在解决问题时，会重新评估其过去的步骤并尝试新的方法。</li>
</ul>
<h3 id="💡启发点-1" tabindex="-1"><a class="header-anchor" href="#💡启发点-1"><span>💡启发点</span></a></h3>
<p>DeepSeek-R1-Zero通过自我进化展现了深度学习模型在复杂环境中自动提升性能的潜力。</p>
<h2 id="deepseek-r1-zero的aha-moment" tabindex="-1"><a class="header-anchor" href="#deepseek-r1-zero的aha-moment"><span>DeepSeek-R1-Zero的Aha Moment</span></a></h2>
<p>💡 <strong>启发点</strong>：DeepSeek-R1-Zero模型在优化过程中，通过重新评估初始方法，为问题分配更多思考时间，这种自我改进的能力展示了强化学习的强大与优雅。
<img src="/img/user/附件/Pasted image 20250428215033.png" alt="Pasted image 20250428215033.png"></p>
<h3 id="强化学习的核心价值" tabindex="-1"><a class="header-anchor" href="#强化学习的核心价值"><span>强化学习的核心价值</span></a></h3>
<p>通过为模型提供正确的奖励信号，DeepSeek-R1-Zero无需明确指导，便能自主学习出更优的问题解决策略。这种方法不仅减少了人为干预，还体现了强化学习在复杂任务中的潜力。</p>
<hr>
<h3 id="deepseek-r1-zero的缺点与局限性" tabindex="-1"><a class="header-anchor" href="#deepseek-r1-zero的缺点与局限性"><span>DeepSeek-R1-Zero的缺点与局限性</span></a></h3>
<p>尽管推理能力显著提升，但DeepSeek-R1-Zero也存在以下问题：</p>
<ol>
<li><strong>可读性低</strong>：生成内容的语言结构复杂，难以理解。</li>
<li><strong>语言混合问题</strong>：输出中可能出现多语言混杂的情况，影响用户体验。</li>
</ol>
<hr>
<h3 id="操作步骤-如何优化deepseek-r1-zero的使用" tabindex="-1"><a class="header-anchor" href="#操作步骤-如何优化deepseek-r1-zero的使用"><span>操作步骤：如何优化DeepSeek-R1-Zero的使用</span></a></h3>
<p>以下是优化模型性能的关键步骤：<br>
✅ <strong>重新定义奖励机制</strong>：为模型提供更明确、更贴近任务目标的奖励信号。<br>
⚠ <strong>监控语言输出</strong>：检测并纠正潜在的语言混杂问题。<br>
❗ <strong>提升可读性</strong>：通过后处理算法简化输出语言结构，提高用户可读性。</p>
<h2 id="提高模型推理性能与用户友好性方法探讨" tabindex="-1"><a class="header-anchor" href="#提高模型推理性能与用户友好性方法探讨"><span>提高模型推理性能与用户友好性方法探讨</span></a></h2>
<h2 id="元数据-1" tabindex="-1"><a class="header-anchor" href="#元数据-1"><span>元数据</span></a></h2>
<ul>
<li>分类：人工智能模型训练</li>
<li>标签：强化学习、冷启动、语言一致性、推理性能、用户友好</li>
<li>日期：2025年4月12日</li>
</ul>
<h2 id="核心观点总结" tabindex="-1"><a class="header-anchor" href="#核心观点总结"><span>核心观点总结</span></a></h2>
<p>本文探讨了如何通过冷启动数据和强化学习方法提高模型的推理性能及用户友好性。主要研究问题包括利用少量高质量数据加速模型训练，以及如何训练出具备通用能力且能产生清晰连贯推理过程的模型。</p>
<h2 id="重点段落-1" tabindex="-1"><a class="header-anchor" href="#重点段落-1"><span>重点段落</span></a></h2>
<h3 id="冷启动的作用" tabindex="-1"><a class="header-anchor" href="#冷启动的作用"><span>冷启动的作用</span></a></h3>
<p>冷启动数据用于稳定强化学习初期训练。通过构建和收集少量高质量的长思维链（CoT）数据，微调模型以作为初始策略。此过程帮助防止早期训练不稳定，并提供一个较好的初始策略。</p>
<h3 id="推理过程中的语言一致性奖励" tabindex="-1"><a class="header-anchor" href="#推理过程中的语言一致性奖励"><span>推理过程中的语言一致性奖励</span></a></h3>
<p>在强化学习训练中引入语言一致性奖励与推理正确性奖励。计算基于思维链中目标语言单词的比例，从而提升模型在多语言环境下的推理能力。</p>
<h3 id="数据收集与处理" tabindex="-1"><a class="header-anchor" href="#数据收集与处理"><span>数据收集与处理</span></a></h3>
<p>推理数据通过设计推理提示和拒绝采样生成，合并额外数据扩展数据集。非推理数据则采用DeepSeek-V3 pipeline重用部分SFT数据集，共计800K数据用于SFT训练。</p>
<h2 id="技术术语转述" tabindex="-1"><a class="header-anchor" href="#技术术语转述"><span>技术术语转述</span></a></h2>
<ul>
<li><strong>冷启动</strong>：在模型训练初期使用少量高质量数据稳定训练过程。</li>
<li><strong>思维链（CoT）</strong>：一种用于记录和分析模型推理过程的数据结构。</li>
<li><strong>拒绝采样</strong>：一种选择正确响应的方法，通过多次采样确保质量。</li>
</ul>
<h2 id="操作步骤-1" tabindex="-1"><a class="header-anchor" href="#操作步骤-1"><span>操作步骤</span></a></h2>
<ol>
<li>✅ 构建并收集长思维链数据以微调模型。</li>
<li>⚠ 使用语言一致性奖励提升多语言环境下的推理能力。</li>
<li>❗ 通过拒绝采样确保推理数据质量。</li>
</ol>
<h2 id="常见错误-1" tabindex="-1"><a class="header-anchor" href="#常见错误-1"><span>常见错误</span></a></h2>
<blockquote>
<p>在强化学习过程中忽视语言一致性可能导致推理结果不准确或混乱。</p>
</blockquote>
<h2 id="💡启发点-2" tabindex="-1"><a class="header-anchor" href="#💡启发点-2"><span>💡启发点</span></a></h2>
<p>引入语言一致性奖励是提升模型在多语言环境下表现的创新方法。</p>
<h2 id="行动清单-1" tabindex="-1"><a class="header-anchor" href="#行动清单-1"><span>行动清单</span></a></h2>
<ul>
<li>研究其他领域的冷启动应用。</li>
<li>探索更多语言环境下的一致性奖励机制。</li>
<li>扩展现有数据集以提高模型通用能力。</li>
</ul>
<h2 id="数据转换" tabindex="-1"><a class="header-anchor" href="#数据转换"><span>数据转换</span></a></h2>
<table>
<thead>
<tr>
<th>数据类型</th>
<th>数据量</th>
</tr>
</thead>
<tbody>
<tr>
<td>推理数据</td>
<td>600K</td>
</tr>
<tr>
<td>非推理数据</td>
<td>200K</td>
</tr>
</tbody>
</table>
<blockquote>
<p>来源：原始出处未提供，内容基于选取文本进行总结与重构。</p>
</blockquote>
<h1 id="实验结果" tabindex="-1"><a class="header-anchor" href="#实验结果"><span>实验结果</span></a></h1>
<h2 id="deepseek-r1在chinese-simpleqa中的表现" tabindex="-1"><a class="header-anchor" href="#deepseek-r1在chinese-simpleqa中的表现"><span>DeepSeek-R1在Chinese SimpleQA中的表现</span></a></h2>
<p>DeepSeek-R1在Chinese SimpleQA中的表现不如DeepSeek-V3，主要原因在于它经过安全强化学习（safety RL）后，倾向于拒绝回答某些查询。在没有安全强化学习的情况下，DeepSeek-R1的准确率可以达到70%以上。</p>
<h2 id="总结生成的长度分析" tabindex="-1"><a class="header-anchor" href="#总结生成的长度分析"><span>总结生成的长度分析</span></a></h2>
<p>DeepSeek-R1生成的总结长度较为简洁。在ArenaHard上的平均长度为689个token，而在AlpacaEval 2.0上的平均长度为2218个token。这表明DeepSeek-R1避免了在评估过程中引入长度偏差（偏向于长的回答）。
<img src="/img/user/附件/Pasted image 20250428215348.png" alt="Pasted image 20250428215348.png"></p>
<h2 id="蒸馏实验结果" tabindex="-1"><a class="header-anchor" href="#蒸馏实验结果"><span>蒸馏实验结果</span></a></h2>
<h2 id="核心观点总结-1" tabindex="-1"><a class="header-anchor" href="#核心观点总结-1"><span>核心观点总结</span></a></h2>
<p>在蒸馏实验中，通过简单提取 DeepSeek-R1 的输出，可以有效提升 DeepSeek-R1-7B（又称为 DeepSeek-R1-Distill-Qwen-7B）的性能，使其在多个方面全面优于 GPT-4o-0513 等非推理模型。进一步的实验表明，DeepSeek-R1-14B 在所有评估指标上均超越了 QwQ-32BPreview，而 DeepSeek-R1-32B 和 DeepSeek-R1-70B 在大多数基准测试中也显著优于 o1-mini。对蒸馏模型应用强化学习能够带来显著的进一步提升。</p>
<p><img src="/img/user/附件/Pasted image 20250428215559.png" alt="Pasted image 20250428215559.png"></p>
<h2 id="重点段落与数据" tabindex="-1"><a class="header-anchor" href="#重点段落与数据"><span>重点段落与数据</span></a></h2>
<h3 id="_1-蒸馏模型的性能提升" tabindex="-1"><a class="header-anchor" href="#_1-蒸馏模型的性能提升"><span>1. 蒸馏模型的性能提升</span></a></h3>
<p>DeepSeek-R1-7B 通过简单提取输出就能全面优于 GPT-4o-0513。这表明在模型蒸馏过程中，适当的输出处理可以带来显著的性能提升。</p>
<h3 id="_2-大规模模型的对比结果" tabindex="-1"><a class="header-anchor" href="#_2-大规模模型的对比结果"><span>2. 大规模模型的对比结果</span></a></h3>
<table>
<thead>
<tr>
<th>模型</th>
<th>超越对象</th>
<th>评估结果</th>
</tr>
</thead>
<tbody>
<tr>
<td>DeepSeek-R1-14B</td>
<td>QwQ-32BPreview</td>
<td>在所有指标上超越</td>
</tr>
<tr>
<td>DeepSeek-R1-32B</td>
<td>o1-mini</td>
<td>在大多数基准测试中显著超越</td>
</tr>
<tr>
<td>DeepSeek-R1-70B</td>
<td>o1-mini</td>
<td>在大多数基准测试中显著超越</td>
</tr>
</tbody>
</table>
<h2 id="💡启发点-3" tabindex="-1"><a class="header-anchor" href="#💡启发点-3"><span>💡启发点</span></a></h2>
<p>通过简单的输出提取和强化学习应用，可以显著提升蒸馏模型的性能，这为未来的模型优化提供了重要的启发。</p>
<h1 id="discussion" tabindex="-1"><a class="header-anchor" href="#discussion"><span>discussion</span></a></h1>
<h2 id="核心观点总结-2" tabindex="-1"><a class="header-anchor" href="#核心观点总结-2"><span>核心观点总结</span></a></h2>
<p>在大规模模型优化中，蒸馏和强化学习是两种主要策略。尽管强化学习可以提升小模型的性能，但其计算成本高昂，且不一定能超越蒸馏策略的效果。蒸馏策略能够有效地将更强大的模型转化为更小的模型，提供经济高效的解决方案。然而，要突破智能的边界，依旧需要更强大的基础模型和大规模的强化学习。</p>
<p><img src="/img/user/附件/Pasted image 20250428215743.png" alt="Pasted image 20250428215743.png"></p>
<h2 id="重点段落-2" tabindex="-1"><a class="header-anchor" href="#重点段落-2"><span>重点段落</span></a></h2>
<ol>
<li>
<p><strong>蒸馏与强化学习对比</strong><br>
32B基础模型通过大规模强化学习训练后，其性能与QwQ-32B-Preview相当。而DeepSeek-R1-Distill-Qwen-32B在所有基准测试中明显优于DeepSeek-R1-Zero-Qwen-32B。</p>
</li>
<li>
<p><strong>蒸馏策略优势</strong><br>
更强大的模型蒸馏成更小的模型会产生优异的结果。虽然蒸馏策略既经济又有效，但超越智能的边界可能仍然需要更强大的基础模型和更大规模的强化学习。</p>
</li>
<li>
<p><strong>PRM过程奖励模型挑战</strong><br>
在一般推理中，明确定义细粒度步骤具有挑战性；使用模型进行自动标注可能无法得到满意的结果，而手动标注则不利于规模化。</p>
</li>
</ol>
<h2 id="技术术语解释-1" tabindex="-1"><a class="header-anchor" href="#技术术语解释-1"><span>技术术语解释</span></a></h2>
<ul>
<li><strong>蒸馏（Distillation）：</strong> 将一个复杂的模型转化为一个较小且高效的版本，同时保持其性能。</li>
<li><strong>强化学习（Reinforcement Learning, RL）：</strong> 一种机器学习方法，通过奖励机制来训练模型，使其在特定任务中表现更好。</li>
<li><strong>PRM（过程奖励模型）：</strong> 用于评估和指导模型推理过程的奖励机制。</li>
</ul>
<h2 id="操作步骤-2" tabindex="-1"><a class="header-anchor" href="#操作步骤-2"><span>操作步骤</span></a></h2>
<ol>
<li>✅ 使用大规模数据集进行基础模型训练。</li>
<li>⚠ 选择合适的蒸馏策略，将复杂模型精简化。</li>
<li>❗ 应用强化学习以进一步提升小模型性能。</li>
</ol>
<h2 id="常见错误-2" tabindex="-1"><a class="header-anchor" href="#常见错误-2"><span>常见错误</span></a></h2>
<blockquote>
<p><strong>警告：</strong> 强化学习过程中可能出现Reward-hacking现象，导致训练资源浪费。</p>
</blockquote>
<h2 id="💡启发点-4" tabindex="-1"><a class="header-anchor" href="#💡启发点-4"><span>💡启发点</span></a></h2>
<ul>
<li>蒸馏策略在资源有限的情况下提供了一种可行的高效解决方案。</li>
<li>强化学习在复杂任务中的潜力值得进一步探索。</li>
</ul>
</div></template>


