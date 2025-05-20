<template><div><p>元数据：</p>
<ul>
<li>分类：算法与优化</li>
<li>标签：TDPO, KL约束, 强化学习, PPO, 前向KL</li>
<li>日期：2025年4月12日</li>
</ul>
<h2 id="tdpo与ppo中的kl约束" tabindex="-1"><a class="header-anchor" href="#tdpo与ppo中的kl约束"><span>TDPO与PPO中的KL约束</span></a></h2>
<p>TDPO（Trust Region Policy Optimization）算法通过引入PPO（Proximal Policy Optimization）中的KL约束来优化策略。不同于PPO使用的backward KL，TDPO采用forward KL来计算KL惩罚。这种选择的原因在于KL距离的非对称性：forward KL旨在尽可能覆盖整个分布的大部分，而backward KL则专注于拟合分布中的某一部分。
<img src="/img/user/附件/Pasted image 20250423224032.png" alt="Pasted image 20250423224032.png"></p>
<h2 id="tdpo的优势" tabindex="-1"><a class="header-anchor" href="#tdpo的优势"><span>TDPO的优势</span></a></h2>
<p>由于TDPO使用forward KL进行训练，其模型在输出多样性上更为自由。相比之下，PPO训练后的模型输出风格趋于一致，因为输出分布已聚集到一个局部分布上，导致reward方差小于SFT（Softmax Function Transformation）。</p>
<p>💡 启发点：TDPO在多样性输出上的优势使其在需要多种可能性探索的任务中表现更佳。</p>
<h2 id="代码示例与计算步骤" tabindex="-1"><a class="header-anchor" href="#代码示例与计算步骤"><span>代码示例与计算步骤</span></a></h2>
<p>在实现TDPO时，forward KL的计算方式可以通过以下代码实现：</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">vocab_logps </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> logits</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">log_softmax</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">-</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">reference_vocab_ps </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> reference_logits</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">softmax</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">-</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">reference_vocab_logps </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> reference_vocab_ps</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># Forward KL 计算</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">per_position_kl </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">reference_vocab_ps </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">*</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">reference_vocab_logps </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> vocab_logps</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)).</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">sum</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">-</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">per_token_logps </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> torch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">gather</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">vocab_logps</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> dim</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> index</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">labels</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">unsqueeze</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)).</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">squeeze</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">per_reference_token_logps </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> torch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">gather</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">reference_vocab_logps</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> dim</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> index</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">labels</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">unsqueeze</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)).</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">squeeze</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h3>
<ol>
<li>✅ 初始化策略模型与参考模型的logits。</li>
<li>⚠ 计算logits的softmax并取log。</li>
<li>❗ 计算每个位置的forward KL值。</li>
</ol>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p><strong>注意</strong>：在实现TDPO时，务必确保forward KL计算的准确性，以避免模型输出的多样性不足。</p>
</blockquote>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul>
<li>研究TDPO在不同任务中的表现。</li>
<li>比较TDPO和PPO在相同环境下的效果。</li>
<li>探索更多应用场景中的KL约束优化。</li>
</ul>
<blockquote>
<p>原始出处：[原文提供者未注明]</p>
</blockquote>
<p>通过以上内容，我们总结了TDPO算法的核心概念及其与PPO的区别，特别是在KL约束的应用上。希望这篇笔记能够帮助你更好地理解TDPO算法及其优势。</p>
</div></template>


