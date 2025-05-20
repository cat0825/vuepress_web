<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li>分类：人工智能技术</li>
<li>标签：Prefix Tuning、Prompt Tuning、Transformer、机器学习</li>
<li>日期：2025年4月12日</li>
</ul>
<h2 id="核心观点总结" tabindex="-1"><a class="header-anchor" href="#核心观点总结"><span>核心观点总结</span></a></h2>
<p>Prefix Tuning是一种通过在输入token前构造任务相关的连续virtual tokens作为Prefix的方法。它在训练过程中只更新Prefix部分的参数，而保持LLM其他部分参数不变。此方法对于不同模型结构需要构造不同的Prefix，并在每层都加上prompt的参数以提高性能。
<img src="/img/user/附件/Pasted image 20250423225341.png" alt="Pasted image 20250423225341.png"></p>
<h2 id="重点段落" tabindex="-1"><a class="header-anchor" href="#重点段落"><span>重点段落</span></a></h2>
<h3 id="prefix-tuning的实现" tabindex="-1"><a class="header-anchor" href="#prefix-tuning的实现"><span>Prefix Tuning的实现</span></a></h3>
<p>Prefix Tuning通过在输入token前构造任务相关的连续virtual tokens作为Prefix。这些virtual tokens不对应于真实tokens，而是自由参数。在训练过程中，仅更新这些Prefix的参数，保持LLM其他部分参数固定。
<img src="/img/user/附件/Pasted image 20250423225444.png" alt="Pasted image 20250423225444.png"></p>
<h3 id="应用于不同模型结构" tabindex="-1"><a class="header-anchor" href="#应用于不同模型结构"><span>应用于不同模型结构</span></a></h3>
<ol>
<li><strong>自回归架构模型</strong>: 在句子前面添加前缀，形成 z = [PREFIX; x; y]。合适的上文能够在固定LM的情况下引导生成下文。</li>
<li><strong>编码器-解码器架构模型</strong>: Encoder和Decoder都增加了前缀，形成 z = [PREFIX; x; PREFIX0; y]。Encoder端增加前缀是为了引导输入部分的编码，Decoder端增加前缀是为了引导后续token的生成。
<img src="/img/user/附件/Pasted image 20250423225409.png" alt="Pasted image 20250423225409.png"></li>
</ol>
<h3 id="防止训练不稳定" tabindex="-1"><a class="header-anchor" href="#防止训练不稳定"><span>防止训练不稳定</span></a></h3>
<p>为了防止直接更新Prefix参数导致训练不稳定和性能下降，在Prefix层前面加了MLP结构。在训练完成后，仅保留Prefix的参数。此方法通过消融实验验证，仅调整embedding层表现力不够，会导致性能显著下降，因此在每层都加了prompt的参数。</p>
<h2 id="技术术语通俗解释" tabindex="-1"><a class="header-anchor" href="#技术术语通俗解释"><span>技术术语通俗解释</span></a></h2>
<ul>
<li><strong>Prefix</strong>: 在输入数据前添加的一段可调整的虚拟数据，用于优化模型性能。</li>
<li><strong>MLP结构</strong>: 多层感知器结构，用于处理复杂数据关系。</li>
<li><strong>消融实验</strong>: 一种实验方法，通过去除某个组件来评估其对系统整体性能的影响。</li>
</ul>
<h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2>
<ol>
<li>✅ 构造任务相关的连续virtual tokens作为Prefix。</li>
<li>⚠ 在训练过程中仅更新Prefix部分参数。</li>
<li>❗ 在每层都加上prompt的参数以提高性能。</li>
</ol>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p>注意：直接更新Prefix参数可能导致训练不稳定和性能下降，应在Prefix层前面加MLP结构。</p>
</blockquote>
<h2 id="💡启发点" tabindex="-1"><a class="header-anchor" href="#💡启发点"><span>💡启发点</span></a></h2>
<p>通过消融实验验证，仅调整embedding层表现力不够，会导致性能显著下降，因此在每层都加了prompt的参数。</p>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul>
<li>研究不同模型结构下Prefix Tuning的具体实现。</li>
<li>进行消融实验以评估各组件对系统性能的影响。</li>
<li>探索其他可能的优化策略以提高模型性能。</li>
</ul>
<blockquote>
<p>原始出处：[原文内容]</p>
</blockquote>
<p>注意：所有公式或公式字母（如 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>α</mi></mrow><annotation encoding="application/x-tex">\alpha</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span></span></span></span>、<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>β</mi></mrow><annotation encoding="application/x-tex">\beta</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.05278em;">β</span></span></span></span>、<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>max</mi><mo>⁡</mo></mrow><annotation encoding="application/x-tex">\max</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mop">max</span></span></span></span>、<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>lim</mi><mo>⁡</mo></mrow><annotation encoding="application/x-tex">\lim</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mop">lim</span></span></span></span> 等），一律用块级公式包裹，以便在Obsidian中识别为块级公式。</p>
</div></template>


