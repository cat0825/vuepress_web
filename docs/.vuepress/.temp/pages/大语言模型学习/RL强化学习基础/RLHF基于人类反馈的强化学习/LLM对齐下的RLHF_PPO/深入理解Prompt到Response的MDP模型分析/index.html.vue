<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li>分类：自然语言处理</li>
<li>标签：MDP模型，深度学习，奖励机制</li>
<li>日期：2025年4月12日</li>
</ul>
<h2 id="内容概述" tabindex="-1"><a class="header-anchor" href="#内容概述"><span>内容概述</span></a></h2>
<p>在自然语言处理（NLP）任务中，Prompt到Response的过程可以被看作是马尔可夫决策过程（MDP）的一个实例。本文探讨了将这一过程视为单步MDP和多步MDP的不同视角，并分析了奖励机制的设计。</p>
<h2 id="核心观点总结" tabindex="-1"><a class="header-anchor" href="#核心观点总结"><span>核心观点总结</span></a></h2>
<ol>
<li>
<p><strong>单步MDP视角</strong>：在这种视角下，初始状态是Prompt，动作是Response，二者皆为token序列。此时，没有状态转移，而是直接根据当前状态和动作给予奖励。这种视角采用了AGG聚合操作中的-1操作。</p>
</li>
<li>
<p><strong>多步MDP视角</strong>：在这一视角中，每个token被视为一个动作，状态则由当前动作和之前所有token拼接而成。整个过程被看作一个整体，最后一个token位置的输出奖励值聚合了整个句子的信息。</p>
</li>
<li>
<p><strong>句子级别奖励的必要性</strong>：由于偏好标签是基于句子级别的，因此需要采用代表整个句子的奖励值。</p>
</li>
</ol>
<h2 id="重点段落" tabindex="-1"><a class="header-anchor" href="#重点段落"><span>重点段落</span></a></h2>
<h3 id="单步mdp模型" tabindex="-1"><a class="header-anchor" href="#单步mdp模型"><span>单步MDP模型</span></a></h3>
<p>在单步MDP中，初始状态 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>s</mi><mn>0</mn></msub></mrow><annotation encoding="application/x-tex">s_0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">s</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 为Prompt，动作 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub></mrow><annotation encoding="application/x-tex">a_0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 为Response。两者都是token序列，但与传统NLP RL MDP不同，这里的动作是一个完整的token序列。奖励函数 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mo stretchy="false">(</mo><msub><mi>s</mi><mn>0</mn></msub><mo separator="true">,</mo><msub><mi>a</mi><mn>0</mn></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">r(s_0, a_0)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">s</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span> 即为 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">r(x, y)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span></span></span></span>。</p>
<h3 id="多步mdp模型" tabindex="-1"><a class="header-anchor" href="#多步mdp模型"><span>多步MDP模型</span></a></h3>
<p>多步MDP将[prompt, response]中的每个token视为一个动作，状态为当前动作与之前token的序列。此时，最后一个token位置的输出奖励值可视作聚合整个句子信息的Transformer操作。</p>
<h3 id="奖励机制设计" tabindex="-1"><a class="header-anchor" href="#奖励机制设计"><span>奖励机制设计</span></a></h3>
<p>由于偏好标签是基于句子级别的，因此需要设计能够代表整个句子的奖励值。在PRM过程中，也会有中间过程的偏好标签。</p>
<h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2>
<ol>
<li>✅ 将prompt视为初始状态，response视为动作。</li>
<li>⚠ 在单步MDP中，不进行状态转移，直接给予奖励。</li>
<li>❗ 在多步MDP中，将每个token视为动作，聚合信息给予奖励。</li>
</ol>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p>在设计奖励机制时，容易忽略句子级别的偏好标签，从而导致奖励值不准确。</p>
</blockquote>
<h2 id="💡-启发点" tabindex="-1"><a class="header-anchor" href="#💡-启发点"><span>💡 启发点</span></a></h2>
<ul>
<li>使用MDP模型分析NLP任务中的prompt-response过程，为奖励机制设计提供了新的思路。</li>
</ul>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul>
<li>探索更多关于MDP模型在NLP中的应用。</li>
<li>研究如何优化奖励机制以提高模型性能。</li>
</ul>
<hr>
<blockquote>
<p>原始出处：[来源未提供]</p>
</blockquote>
</div></template>


