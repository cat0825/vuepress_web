<template><div><hr>
<p><strong>元数据：</strong><br>
<strong>分类：</strong> 自然语言处理<br>
<strong>标签：</strong> 语言模型、采样方法、AI生成技术<br>
<strong>日期：</strong> 2025年4月1日</p>
<hr>
<h2 id="什么是语言模型采样方法" tabindex="-1"><a class="header-anchor" href="#什么是语言模型采样方法"><span>什么是语言模型采样方法？</span></a></h2>
<p>在生成式语言模型中，采样方法决定了输出文本的多样性和质量。这些方法通过调整模型选择词语的概率分布，来平衡生成内容的随机性与稳定性。以下是几种主流采样技术的核心概念及应用场景。</p>
<hr>
<h2 id="top-k-sampling" tabindex="-1"><a class="header-anchor" href="#top-k-sampling"><span>Top-K Sampling</span></a></h2>
<h3 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念"><span>核心概念：</span></a></h3>
<p>Top-K Sampling 是一种从排名靠前的 k 个词中随机选择的方法。它允许高概率词语有更大的被选中机会，同时保留一定的随机性。这种方式可以提升生成质量，但也可能在以下两种情况下出现问题：</p>
<ol>
<li><strong>分布尖锐时</strong>：可能导致生成内容不连贯或胡言乱语。</li>
<li><strong>分布平坦时</strong>：限制了模型的创造力。
<img src="/img/user/附件/Pasted image 20250407180356.png" alt="Pasted image 20250407180356.png"></li>
</ol>
<hr>
<h2 id="top-p-sampling" tabindex="-1"><a class="header-anchor" href="#top-p-sampling"><span>Top-P Sampling</span></a></h2>
<h3 id="核心概念-1" tabindex="-1"><a class="header-anchor" href="#核心概念-1"><span>核心概念：</span></a></h3>
<p>Top-P Sampling（又称核采样）通过累积概率设定一个阈值 $$P$$，从满足该阈值的最小词集合中随机采样。这种方式动态调整候选词集合大小，更适合应对概率分布变化较大的场景。</p>
<h3 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现"><span>代码实现：</span></a></h3>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">masked_probs </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> torch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">gather</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">probs</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> dim</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">-</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> index</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">sorted_indices</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[:,</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> :</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">cutoff_idx </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">+</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 重新归一化剩余概率</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">masked_probs </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> masked_probs </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">/</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> masked_probs</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">sum</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">dim</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">-</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> keepdim</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">True</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 从候选词中随机选择一个词</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">selected_idx </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> torch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">multinomial</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">masked_probs</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">return</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> sorted_indices</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">gather</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">-</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> selected_idx</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/img/user/附件/Pasted image 20250407180404.png" alt="Pasted image 20250407180404.png"></p>
<hr>
<h2 id="temperature-sampling" tabindex="-1"><a class="header-anchor" href="#temperature-sampling"><span>Temperature Sampling</span></a></h2>
<h3 id="核心概念-2" tabindex="-1"><a class="header-anchor" href="#核心概念-2"><span>核心概念：</span></a></h3>
<p>通过调整 Softmax 的温度系数来影响输出词的概率分布：</p>
<ul>
<li><strong>温度高</strong>（如 $$T &gt; 1$$）：概率分布更平坦，生成更随机。</li>
<li><strong>温度低</strong>（如 $$T &lt; 1$$）：概率分布更集中，生成更稳定。</li>
</ul>
<p>这种方法适用于需要控制生成文本风格和随机程度的场景。</p>
<hr>
<h2 id="综合采样策略-kpt" tabindex="-1"><a class="header-anchor" href="#综合采样策略-kpt"><span>综合采样策略：KPT</span></a></h2>
<h3 id="核心概念-3" tabindex="-1"><a class="header-anchor" href="#核心概念-3"><span>核心概念：</span></a></h3>
<p>KPT 是一种结合 Top-K、Top-P 和 Temperature 的综合方法，逐步进行采样以提升生成效果。通过多层筛选，KPT 能在保持随机性的同时提高生成质量。</p>
<hr>
<h2 id="多答案选择策略" tabindex="-1"><a class="header-anchor" href="#多答案选择策略"><span>多答案选择策略</span></a></h2>
<h3 id="best-of-n" tabindex="-1"><a class="header-anchor" href="#best-of-n"><span>Best-of-N</span></a></h3>
<p>让模型生成 N 个回答，通过评分机制（如 Verifier 或 PRM）选择得分最高的答案作为最终结果。
<img src="/img/user/附件/Pasted image 20250407180419.png" alt="Pasted image 20250407180419.png"></p>
<h3 id="majority-vote" tabindex="-1"><a class="header-anchor" href="#majority-vote"><span>Majority Vote</span></a></h3>
<p>让模型输出多个答案，以一致性最多的答案作为最终结果。</p>
<h3 id="self-consistency" tabindex="-1"><a class="header-anchor" href="#self-consistency"><span>Self-consistency</span></a></h3>
<p>通过生成多个推理路径，再用多数投票选出最合理的答案。这种方法在复杂推理任务中表现尤为突出。</p>
<hr>
<h2 id="常见错误-⚠️" tabindex="-1"><a class="header-anchor" href="#常见错误-⚠️"><span>常见错误 ⚠️</span></a></h2>
<ol>
<li><strong>参数设置不当</strong>：
<ul>
<li>K 值过小可能导致生成内容单一。</li>
<li>P 值过大可能引入低质量候选词。</li>
<li>温度过高可能使输出过于随机。</li>
</ul>
</li>
<li><strong>忽略采样方法组合</strong>：单一方法可能难以应对复杂场景，需结合多种策略。</li>
</ol>
<hr>
<h2 id="💡启发点" tabindex="-1"><a class="header-anchor" href="#💡启发点"><span>💡启发点</span></a></h2>
<ul>
<li><strong>动态调整采样参数</strong>：根据任务需求实时调整 K、P 和温度值。</li>
<li><strong>结合多答案选择策略</strong>：提升复杂任务的推理准确性。</li>
</ul>
<hr>
<h2 id="📈趋势预测" tabindex="-1"><a class="header-anchor" href="#📈趋势预测"><span>📈趋势预测</span></a></h2>
<ol>
<li><strong>自动化参数优化</strong>：未来可能出现基于任务自动调整采样参数的技术。</li>
<li><strong>强化学习结合采样策略</strong>：通过奖励机制优化生成质量。</li>
</ol>
<hr>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ol>
<li>实现不同采样方法的代码，并测试其在文本生成中的效果。</li>
<li>探索 KPT 综合采样策略对生成质量的提升。</li>
<li>应用 Self-consistency 方法于复杂推理任务。</li>
</ol>
<hr>
<h2 id="思考-延伸问题" tabindex="-1"><a class="header-anchor" href="#思考-延伸问题"><span>[思考]延伸问题</span></a></h2>
<ol>
<li>如何设计动态调整 K 和 P 的算法，使其适应不同场景？</li>
<li>是否可以结合语义理解优化采样过程？</li>
<li>如何评估生成内容的创造力与准确性之间的平衡？</li>
</ol>
<hr>
<blockquote>
<p><strong>来源：</strong> 原文内容整理自技术文档，部分代码示例来自 PyTorch 实现。</p>
</blockquote>
</div></template>


