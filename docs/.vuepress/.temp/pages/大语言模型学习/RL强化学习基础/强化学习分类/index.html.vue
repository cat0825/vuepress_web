<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li>分类：人工智能</li>
<li>标签：强化学习, 策略优化, 数据采样, 环境动态</li>
<li>日期：2025年4月11日</li>
</ul>
<h2 id="内容概要" tabindex="-1"><a class="header-anchor" href="#内容概要"><span>内容概要</span></a></h2>
<p>在强化学习领域中，策略优化的分类是一个重要的研究方向。本文将讨论几种主要的分类概念，包括在线与离线学习、策略采样与更新、环境动态的需求以及策略学习的方法。</p>
<h3 id="以数据来源划分" tabindex="-1"><a class="header-anchor" href="#以数据来源划分"><span>以数据来源划分</span></a></h3>
<ul>
<li>
<p><strong>Online</strong>：代理（Agent）在与环境交互时，实时收集轨迹样本并进行策略学习。这样的过程可以用以下形式表示：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo>&lt;</mo><msub><mi>s</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>a</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>r</mi><mn>1</mn></msub><mo separator="true">,</mo><mo>…</mo><mo separator="true">,</mo><msub><mi>s</mi><mi>T</mi></msub><mo separator="true">,</mo><msub><mi>a</mi><mi>T</mi></msub><mo separator="true">,</mo><msub><mi>r</mi><mi>T</mi></msub><mo>&gt;</mo></mrow><annotation encoding="application/x-tex">&lt;s_1, a_1, r_1, \ldots, s_T, a_T, r_T&gt;
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">s</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">…</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">s</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span></span></span></span></span></p>
<p>代理一边收集数据，一边更新其策略。</p>
</li>
<li>
<p><strong>Offline</strong>：代理使用预先收集好的轨迹样本进行学习，这些样本作为一个离线数据集提供给代理，学习过程中不涉及环境交互。</p>
</li>
</ul>
<h3 id="以采样策略和更新策略划分" tabindex="-1"><a class="header-anchor" href="#以采样策略和更新策略划分"><span>以采样策略和更新策略划分</span></a></h3>
<ul>
<li>
<p><strong>On-Policy</strong>：采样的行为策略和更新的目标策略是同一个策略。例如，SARSA算法在更新时需要使用当前行为策略采样得到的五元组数据：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo stretchy="false">(</mo><mi>s</mi><mo separator="true">,</mo><mi>a</mi><mo separator="true">,</mo><mi>r</mi><mo separator="true">,</mo><msup><mi>s</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo separator="true">,</mo><msup><mi>a</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(s, a, r, s&#x27;, a&#x27;)
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0519em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">s</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">a</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">s</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8019em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8019em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></span></p>
</li>
<li>
<p><strong>Off-Policy</strong>：采样的行为策略和更新的目标策略不是同一个策略。例如，Q-learning算法使用当前行为策略采样的四元组：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo stretchy="false">(</mo><mi>s</mi><mo separator="true">,</mo><mi>a</mi><mo separator="true">,</mo><mi>r</mi><mo separator="true">,</mo><msup><mi>s</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(s, a, r, s&#x27;)
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0519em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">s</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">a</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">s</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8019em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></span></p>
<p>而<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>a</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow><annotation encoding="application/x-tex">a&#x27;</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7519em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7519em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span>是通过<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>max</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>Q</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\max(Q)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">max</span><span class="mopen">(</span><span class="mord mathnormal">Q</span><span class="mclose">)</span></span></span></span>得到的，而不是行为策略采样得到的。</p>
</li>
</ul>
<p><img src="/img/user/附件/Pasted image 20250411134007.png" alt="Pasted image 20250411134007.png"></p>
<h3 id="以需不需要环境动态划分" tabindex="-1"><a class="header-anchor" href="#以需不需要环境动态划分"><span>以需不需要环境动态划分</span></a></h3>
<ul>
<li>
<p><strong>Model-based</strong>：环境动态已知或通过学习得到环境模型，通过动态规划或树搜索等方法直接求解最优策略，代理无需与环境交互采样。</p>
</li>
<li>
<p><strong>Model-free</strong>：环境动态未知，通过代理与环境交互采样来学习策略，而不需要学习状态转移模型。</p>
</li>
</ul>
<h3 id="以如何学习策略划分" tabindex="-1"><a class="header-anchor" href="#以如何学习策略划分"><span>以如何学习策略划分</span></a></h3>
<ul>
<li>
<p><strong>Value-based</strong>：先学习值函数，然后从值函数导出策略，过程中不存在显式的策略。</p>
</li>
<li>
<p><strong>Policy-based</strong>：直接显式地学习一个目标策略。</p>
</li>
</ul>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p>在使用Off-Policy方法时，需注意行为策略与目标策略的区别，否则可能导致错误的策略更新。</p>
</blockquote>
<h2 id="💡启发点" tabindex="-1"><a class="header-anchor" href="#💡启发点"><span>💡启发点</span></a></h2>
<p>通过不同的分类方法，可以灵活地选择适合具体问题的强化学习算法，提升策略优化效率。</p>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ol>
<li>探索如何结合Online和Offline方法以提高数据利用率。</li>
<li>实验不同的Model-based与Model-free方法在特定任务中的性能表现。</li>
<li>对比Value-based与Policy-based方法在复杂环境中的适用性。</li>
</ol>
<h2 id="📈趋势预测" tabindex="-1"><a class="header-anchor" href="#📈趋势预测"><span>📈趋势预测</span></a></h2>
<p>随着计算能力和算法研究的深入，强化学习中Model-free方法可能会在更多领域得到应用，尤其是在复杂环境中。</p>
<h2 id="后续追踪" tabindex="-1"><a class="header-anchor" href="#后续追踪"><span>后续追踪</span></a></h2>
<ul>
<li>探索如何将不同策略优化方法结合，以应对多变环境。</li>
<li>研究如何动态调整行为和目标策略，以提高适应性。</li>
</ul>
<blockquote>
<p>来源：本文内容基于强化学习分类及策略优化相关资料编写。</p>
</blockquote>
</div></template>


