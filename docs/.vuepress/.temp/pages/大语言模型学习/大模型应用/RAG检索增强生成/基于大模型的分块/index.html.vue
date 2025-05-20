<template><div><p><img src="/img/user/附件/Pasted image 20250506215709.png" alt="Pasted image 20250506215709.png"></p>
<p>在使用大语言模型（LLM）进行文本处理时，可以直接利用 LLM 的能力来创建分块（chunks）。这种方法能够生成语义孤立且有意义的分块，对语义的准确性具有很高的保障。这是因为 LLM 能够理解上下文和意义，而不是像简单启发式方法那样仅仅基于规则进行分割。</p>
<p>然而，这种方法也存在一定的挑战。首先，它对计算资源的要求较高，是目前计算成本最高的分块技术之一。其次，由于 LLM 的上下文窗口通常是有限的，因此在处理长文本时需要特别注意上下文窗口的限制。</p>
<hr>
<h2 id="dense-x-retrieval-检索粒度的选择" tabindex="-1"><a class="header-anchor" href="#dense-x-retrieval-检索粒度的选择"><span>Dense X Retrieval: 检索粒度的选择</span></a></h2>
<p>在论文 <em>Dense X Retrieval: What Retrieval Granularity Should We Use?</em> 中，作者提出了一种新的检索单位，称为 <strong>proposition</strong>。<strong>Proposition</strong> 被定义为文本中的原子表达（atomic expressions），即不能进一步分解的单个语义元素。这些元素可以用于构成更大的语义单位，能够以简明扼要的方式表达文本中的独特事实或特定概念。</p>
<h3 id="proposition-的特点" tabindex="-1"><a class="header-anchor" href="#proposition-的特点"><span>Proposition 的特点</span></a></h3>
<ul>
<li>使用自然语言完整地呈现一个独立的概念或事实。</li>
<li>不需要额外的信息来解释。</li>
<li>能够以更加简洁的形式表达复杂的信息。</li>
</ul>
<p>Proposition 的获取方式是通过构建提示词（prompts），并与 LLM 交互生成结果。目前，工具如 <strong>LlamaIndex</strong> 和 <strong>LangChain</strong> 都实现了相关算法。</p>
<hr>
<h2 id="llamaindex-的实现方案" tabindex="-1"><a class="header-anchor" href="#llamaindex-的实现方案"><span>LlamaIndex 的实现方案</span></a></h2>
<p>LlamaIndex 的实现思路是基于论文中提供的提示词，通过与 LLM 交互生成 <strong>proposition</strong>。以下是一个具体的代码示例：</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">PROPOSITIONS_PROMPT</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> PromptTemplate</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"""</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Decompose the "Content" into clear and simple propositions, ensuring they are interpretable out of context.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">1. Split compound sentence into simple sentences. Maintain the original phrasing from the input whenever possible.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">2. For any named entity that is accompanied by additional descriptive information, separate this information into its own distinct proposition.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">3. Decontextualize the proposition by adding necessary modifier to nouns or entire sentences and replacing pronouns (e.g., "it", "he", "she", "they", "this", "that") with the full name of the entities they refer to.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">4. Present the results as a list of strings, formatted in JSON.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Input: Title: ¯Eostre. Section: Theories and interpretations, Connection to Easter Hares. Content:</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">The earliest evidence for the Easter Hare (Osterhase) was recorded in south-west Germany in 1678 by the professor of medicine Georg Franck von Franckenau, but it remained unknown in other parts of Germany until the 18th century. Scholar Richard Sermon writes that "hares were frequently seen in gardens in spring, and thus may have served as a convenient explanation for the origin of the colored eggs hidden there for children. Alternatively, there is a European tradition that hares laid eggs, since a hare’s scratch or form and a lapwing’s nest look very similar, and both occur on grassland and are first seen in the spring. In the nineteenth century the influence of Easter cards, toys, and books was to make the Easter Hare/Rabbit popular throughout Europe. German immigrants then exported the custom to Britain and America where it evolved into the Easter Bunny."</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Output: [ "The earliest evidence for the Easter Hare was recorded in south-west Germany in 1678 by Georg Franck von Franckenau.", "Georg Franck von Franckenau was a professor of medicine.", "The evidence for the Easter Hare remained unknown in other parts of Germany until the 18th century.", "Richard Sermon was a scholar.", "Richard Sermon writes a hypothesis about the possible explanation for the connection between hares and the tradition during Easter", "</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


