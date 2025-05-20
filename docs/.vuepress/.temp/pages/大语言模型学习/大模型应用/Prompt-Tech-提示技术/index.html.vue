<template><div><h2 id="icl概念原理" tabindex="-1"><a class="header-anchor" href="#icl概念原理"><span>ICL概念原理</span></a></h2>
<p>在前面讲GPT系列模型的时候，提到GPT使用的Few-shot Learning，这就属于ICL的一个部分。</p>
<p><strong>In-Context Learning</strong> 允许模型在给定的上下文中进行学习和推理，而无需真正更新模型参数。这种方法充分利用了模型的预训练知识，并通过在推理阶段提供相关的上下文信息来生成或调整模型输出。
<img src="/img/user/附件/Pasted image 20250504145026.png" alt="Pasted image 20250504145026.png"></p>
<hr>
<h2 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念"><span>核心概念</span></a></h2>
<h3 id="上下文依赖" tabindex="-1"><a class="header-anchor" href="#上下文依赖"><span>上下文依赖</span></a></h3>
<p>ICL的核心在于<strong>利用模型的上下文理解能力来完成任务</strong>。模型根据输入的上下文信息（包括示例和任务描述）进行推理，而不是依赖于显式的训练过程。</p>
<h3 id="无参数更新" tabindex="-1"><a class="header-anchor" href="#无参数更新"><span>无参数更新</span></a></h3>
<p>ICL不涉及对模型实际参数的修改，只是根据提供的上下文信息调整其生成或分类行为。</p>
<h3 id="动态适应" tabindex="-1"><a class="header-anchor" href="#动态适应"><span>动态适应</span></a></h3>
<p>模型在推理时会动态地适应给定的上下文，通过分析上下文中的示例或指示来生成合适的输出。这种适应能力来源于模型在预训练阶段学到的通用知识。</p>
<hr>
<h2 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理"><span>工作原理</span></a></h2>
<h3 id="提示词和示例" tabindex="-1"><a class="header-anchor" href="#提示词和示例"><span>提示词和示例</span></a></h3>
<p>ICL常通过提示词来引导模型的生成过程。提示词通常包括任务描述、问题陈述或请求模型执行的操作。在少样本学习（Few-Shot Learning）中，提示词可能包括一些示例输入和输出，帮助模型理解如何处理类似的任务。</p>
<h3 id="上下文提供" tabindex="-1"><a class="header-anchor" href="#上下文提供"><span>上下文提供</span></a></h3>
<p>在ICL中，任务描述用于告诉模型要完成的任务，例如：生成一个关于人工智能的总结。提供几个示例输入和输出对，可以帮助模型理解特定任务的模式或要求，例如：给出一些翻译示例来帮助模型进行语言翻译。</p>
<h3 id="推理和生成" tabindex="-1"><a class="header-anchor" href="#推理和生成"><span>推理和生成</span></a></h3>
<p>模型根据提供的上下文进行推理，生成与上下文相关的响应或输出。在ICL中，生成的文本基于模型对上下文的理解，以及预训练中学到的知识。</p>
<hr>
<h2 id="icl形式化定义" tabindex="-1"><a class="header-anchor" href="#icl形式化定义"><span>ICL形式化定义</span></a></h2>
<p>ICL可以形式化地定义为：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>L</mi><mi>L</mi><mi>M</mi><mtext> </mtext><mo stretchy="false">(</mo><mi>I</mi><mo separator="true">,</mo><mi>f</mi><mo stretchy="false">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy="false">)</mo><mo separator="true">,</mo><mo>…</mo><mo separator="true">,</mo><mi>f</mi><mo stretchy="false">(</mo><msub><mi>x</mi><mi>k</mi></msub><mo separator="true">,</mo><msub><mi>y</mi><mi>k</mi></msub><mo stretchy="false">)</mo><mo separator="true">,</mo><mi>f</mi><mo stretchy="false">(</mo><msub><mi>x</mi><mrow><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msub><mo separator="true">,</mo><mi mathvariant="normal">_</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>→</mo><msub><mover accent="true"><mi>y</mi><mo>^</mo></mover><mrow><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msub></mrow><annotation encoding="application/x-tex">LLM \ (I, f(x_1, y_1), \dots, f(x_k, y_k), f(x_{k+1}, \_)) \rightarrow \hat{y}_{k+1}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.06em;vertical-align:-0.31em;"></span><span class="mord mathnormal">LL</span><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="mspace"> </span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">…</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord" style="margin-right:0.02778em;">_</span><span class="mclose">))</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.9028em;vertical-align:-0.2083em;"></span><span class="mord"><span class="mord accent"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6944em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1944em;"><span class="mord">^</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1944em;"><span></span></span></span></span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span></span></span></span></span></p>
<p>其中：</p>
<ul>
<li><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>I</mi></mrow><annotation encoding="application/x-tex">I</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">I</span></span></span></span> 是任务定义，</li>
<li><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><msub><mi>x</mi><mi>i</mi></msub><mo separator="true">,</mo><msub><mi>y</mi><mi>i</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(x_i, y_i)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span> 表示示例，</li>
<li><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mrow><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msub></mrow><annotation encoding="application/x-tex">x_{k+1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6389em;vertical-align:-0.2083em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span></span></span></span> 是输入，</li>
<li><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">_</mi></mrow><annotation encoding="application/x-tex">\_</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;vertical-align:-0.31em;"></span><span class="mord" style="margin-right:0.02778em;">_</span></span></span></span> 是要预测的答案，</li>
<li><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mover accent="true"><mi>y</mi><mo>^</mo></mover><mrow><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msub></mrow><annotation encoding="application/x-tex">\hat{y}_{k+1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9028em;vertical-align:-0.2083em;"></span><span class="mord"><span class="mord accent"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6944em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1944em;"><span class="mord">^</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1944em;"><span></span></span></span></span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span></span></span></span> 是模型生成的预测输出。</li>
</ul>
<p><img src="/img/user/附件/Pasted image 20250504145052.png" alt="Pasted image 20250504145052.png"></p>
<hr>
<h2 id="icl示例设计" tabindex="-1"><a class="header-anchor" href="#icl示例设计"><span>ICL示例设计</span></a></h2>
<p>在自然语言处理（NLP）领域，示例选择（Demonstration Selection）是提升模型性能的重要环节之一。本文将详细介绍几种常见的示例选择方法，包括启发式方法、基于多样性的方法、基于LLM的方法、基于主动学习/强化学习的方法以及基于自生成的方法。</p>
<hr>
<h3 id="示例选择" tabindex="-1"><a class="header-anchor" href="#示例选择"><span>示例选择</span></a></h3>
<h4 id="启发式方法" tabindex="-1"><a class="header-anchor" href="#启发式方法"><span>启发式方法</span></a></h4>
<h5 id="基于语义相似度" tabindex="-1"><a class="header-anchor" href="#基于语义相似度"><span>基于语义相似度</span></a></h5>
<p>在基于语义相似度的方法中，我们通常使用BERT类模型作为编码器，提取其CLS embedding的输出向量，作为训练样本的文本表征。通过KNN或欧式距离等算法，选取与当前测试句子（test sentence）语义最近的10个训练样本，作为demonstration。</p>
<p>这种方法的核心在于通过语义相似性度量，找到最接近测试样本的训练样本，从而帮助模型提高对测试样本的预测能力。
<img src="/img/user/附件/Pasted image 20250504145633.png" alt="Pasted image 20250504145633.png"></p>
<hr>
<h4 id="基于多样性" tabindex="-1"><a class="header-anchor" href="#基于多样性"><span>基于多样性</span></a></h4>
<p>在某些情况下，训练数据和测试数据可能存在较大的分布差异，这使得基于相似度的方法难以挑选出合适的demonstration。此时，可以从多样性的角度出发进行选择。</p>
<p>具体来说，在原有的语义相似度基础上，进一步考虑不同demonstration之间的差异性。如果两个demonstration高度语义相似，则可以剔除其中一个，以确保最终选择的示例具有更高的多样性。</p>
<p>相关研究可以参考论文：<br>
<strong>Diverse Demonstrations Improve In-context Compositional Generalization</strong>
<img src="/img/user/附件/Pasted image 20250504145647.png" alt="Pasted image 20250504145647.png"></p>
<hr>
<h4 id="llm-based方法" tabindex="-1"><a class="header-anchor" href="#llm-based方法"><span>LLM-based方法</span></a></h4>
<h5 id="直接用llm生成demonstration" tabindex="-1"><a class="header-anchor" href="#直接用llm生成demonstration"><span>直接用LLM生成Demonstration</span></a></h5>
<p>此方法直接利用大语言模型（LLM）的生成能力，让其生成合适的demonstration。这种方法依赖于LLMs强大的语言理解和生成能力，可以减少对外部样本库的依赖。</p>
<h5 id="基于prompt召回" tabindex="-1"><a class="header-anchor" href="#基于prompt召回"><span>基于Prompt召回</span></a></h5>
<p>在这种方法中，将训练集中的每一个样本都当作示例，与输入一起输入模型。通过评估模型输出的概率大小来判断当前示例的好坏。为了降低因数据集过大而导致的计算成本，可以利用BM25或SBERT对训练集进行预筛选，召回候选示例集。
<img src="/img/user/附件/Pasted image 20250504145717.png" alt="Pasted image 20250504145717.png"><img src="/img/user/附件/Pasted image 20250504145726.png" alt="Pasted image 20250504145726.png">
具体步骤如下：</p>
<ol>
<li><strong>召回候选集</strong>：利用BM25或SBERT筛选候选示例集。</li>
<li><strong>评估示例质量</strong>：对候选示例集中的每个示例进行评估，选取最高分的 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi></mrow><annotation encoding="application/x-tex">k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span></span></span></span> 条作为正例集，最低分 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi></mrow><annotation encoding="application/x-tex">k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span></span></span></span> 条作为负例集。</li>
<li><strong>训练Retriever</strong>：使用对比学习的方法，训练一个Retriever，同时生成针对输入编码的Utterance Encoder和针对示例编码的Prompt Encoder。</li>
<li><strong>计算相似度</strong>：结合Faiss相似度计算框架，找出输入对应最佳的demonstrations。</li>
</ol>
<p>这种方法通过结合检索和模型评估，有效地提高了示例选择的效率和质量。</p>
<hr>
<h4 id="基于主动学习-强化学习" tabindex="-1"><a class="header-anchor" href="#基于主动学习-强化学习"><span>基于主动学习/强化学习</span></a></h4>
<h5 id="主动学习思路" tabindex="-1"><a class="header-anchor" href="#主动学习思路"><span>主动学习思路</span></a></h5>
<p>主动学习的目标是从样本库中选择适合的样本提供给标注者标注，而示例选择的问题与其类似。示例选择的目标是从样本库中挑选适合的示例提供给prompt，以提高测试样本的准确率。</p>
<h5 id="强化学习方法" tabindex="-1"><a class="header-anchor" href="#强化学习方法"><span>强化学习方法</span></a></h5>
<p>由于demonstrations的可选空间与样本库（通常是训练集）呈指数关系，要枚举所有可能的demonstrations组合几乎不可能。因此，可以将示例选择看作是一个序列决策问题，并基于马尔可夫决策过程（MDP）使用强化学习（RL）的方法进行优化。</p>
<p>具体定义如下：</p>
<ul>
<li><strong>State</strong>：当前时刻的demonstration，即 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><msub><mi>x</mi><mi>i</mi></msub><mo separator="true">,</mo><msub><mi>y</mi><mi>i</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(x_i, y_i)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>。</li>
<li><strong>Action</strong>：样本库中的所有样本以及一个停止信号标识（<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>⊥</mo></mrow><annotation encoding="application/x-tex">\perp</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mrel">⊥</span></span></span></span>）。</li>
<li><strong>Reward</strong>：利用LLMs将state与当前action构成的新demonstrations，在验证集中的准确率。</li>
</ul>
<p>Prompt由state和action构成的新demonstrations，再加上验证集中的样本输入组成。通过对比验证集标签与LLMs输出结果，可以计算准确率并作为奖励信号。接下来，只需选择一种RL算法即可完成任务。</p>
<hr>
<h4 id="基于自生成的" tabindex="-1"><a class="header-anchor" href="#基于自生成的"><span>基于自生成的：</span></a></h4>
<ol>
<li>借助预先设计的prompt，让LLMs生成 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi></mrow><annotation encoding="application/x-tex">k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span></span></span></span> 个合适的示例。</li>
<li>在原输入的基础上，加入第一阶段生成的示例，让LLMs预测最终结果。</li>
</ol>
<p>这种方法不仅减少了对外部样本库的依赖，还能在一定程度上提高模型的生成效果。
<img src="/img/user/附件/Pasted image 20250504145736.png" alt="Pasted image 20250504145736.png"></p>
<hr>
<h5 id="示例格式" tabindex="-1"><a class="header-anchor" href="#示例格式"><span>示例格式</span></a></h5>
<p>在完成demonstrations的选择后，下一步就是将这些demonstrations整合成一个自然语言Prompt。以下是一个具体示例：
<img src="/img/user/附件/Pasted image 20250504145748.png" alt="Pasted image 20250504145748.png"></p>
<h5 id="cross-task-generalization-via-natural-language-crowdsourcing-instructions" tabindex="-1"><a class="header-anchor" href="#cross-task-generalization-via-natural-language-crowdsourcing-instructions"><span>Cross-task generalization via natural language crowdsourcing instructions</span></a></h5>
<p>这篇论文提出了一个新的跨任务instruction数据集。他们使用总包的方式，按照规定的instruction格式，对多个开源数据集进行改造。针对每一个prompt，其格式包含以下几个部分：</p>
<ol>
<li>
<p><strong>title</strong><br>
包含一个high-level的任务描述，以及其相关技能，如question generation，answer generation等。</p>
</li>
<li>
<p><strong>prompt</strong><br>
单独的文本命令，一般出现在输入示例之前。</p>
</li>
<li>
<p><strong>definition</strong><br>
指令的补充内容，更加详细地描述指令的具体执行细节。</p>
</li>
<li>
<p><strong>things to avoid</strong><br>
包含模型应该避免的内容或规则。</p>
</li>
<li>
<p><strong>emphasis and caution</strong><br>
警告或反对的内容。</p>
</li>
<li>
<p><strong>positive examples</strong><br>
提供一个类似系统期望的输入、输出例子，使得众包人员更好地理解任务。</p>
</li>
<li>
<p><strong>negative examples</strong><br>
提供一个类似系统期望的输入、输出的负例，让众包人员尽量避免。</p>
</li>
<li>
<p><strong>reason</strong><br>
解释为什么例子是positive或negative。</p>
</li>
<li>
<p><strong>suggestion</strong><br>
包含一些建议，主要用于指导如何将负例改成正例。</p>
</li>
</ol>
<p>通过这种格式化的设计，模型在经过上述instruction数据集微调后，能在unseen样本上达到较好的生成效果。在新样本推断时，将demonstrations加入到task instances中即可。</p>
<hr>
<h5 id="示例顺序" tabindex="-1"><a class="header-anchor" href="#示例顺序"><span>示例顺序</span></a></h5>
<p>在整合prompt的时候，各个示例放入的顺序也非常关键。排序的方法多种多样，主要包括以下几种：</p>
<ol>
<li>
<p><strong>无需训练的方法</strong><br>
示例顺序可以随机排列或按照固定规则排列，无需额外训练模型。</p>
</li>
<li>
<p><strong>基于距离排序</strong><br>
根据示例与当前输入之间的距离远近进行排序，从而提高模型对当前输入的适配性。</p>
</li>
<li>
<p><strong>基于熵指标重排</strong><br>
通过自定义熵指标对示例进行重排，以优化示例顺序对模型推断结果的影响。</p>
</li>
</ol>
<p>合理选择和组织示例顺序能够显著提升模型推断时的效果和效率。</p>
<hr>
<h3 id="icl-的挑战" tabindex="-1"><a class="header-anchor" href="#icl-的挑战"><span>ICL 的挑战</span></a></h3>
<p>尽管基于自生成的方法在许多任务中表现良好，但仍然存在一些不可忽视的挑战：</p>
<h4 id="_1-长上下文问题" tabindex="-1"><a class="header-anchor" href="#_1-长上下文问题"><span>1. 长上下文问题</span></a></h4>
<p>大规模语言模型对上下文长度有一定限制。如果上下文过长，可能会导致模型在处理时性能下降。因此，在实际操作中需要合理控制上下文长度。</p>
<h4 id="_2-选择适当的上下文" tabindex="-1"><a class="header-anchor" href="#_2-选择适当的上下文"><span>2. 选择适当的上下文</span></a></h4>
<p>确定哪些信息应该包含在上下文中，以及如何组织这些信息，是ICL（In-Context Learning）的关键挑战之一。上下文设计直接影响到模型生成结果的质量。</p>
<h4 id="_3-输出一致性" tabindex="-1"><a class="header-anchor" href="#_3-输出一致性"><span>3. 输出一致性</span></a></h4>
<p>在不同上下文中，模型生成的内容可能会有所不同。如何确保生成结果的一致性和准确性，是需要特别关注的问题。</p>
<h1 id="chain-of-thought-思维链" tabindex="-1"><a class="header-anchor" href="#chain-of-thought-思维链"><span>Chain-of-Thought 思维链</span></a></h1>
<h2 id="cot-概念原理" tabindex="-1"><a class="header-anchor" href="#cot-概念原理"><span>CoT 概念原理</span></a></h2>
<p>Chain-of-Thought (CoT) 是一种改进的 Prompt 技术，旨在提升大语言模型 (LLMs) 在复杂推理任务上的表现。对于复杂问题，尤其是复杂的数学题，大模型往往难以直接给出正确答案，例如算术推理 (arithmetic reasoning)、常识推理 (commonsense reasoning)、符号推理 (symbolic reasoning) 等。</p>
<p>CoT 通过要求模型在输出最终答案之前，显式输出中间逐步的推理步骤，从而增强大模型的算术、常识和推理能力。这种方法简单但有效。通过让大模型逐步参与将一个复杂问题分解为一步一步的子问题并依次进行求解，可以显著提升大模型的性能。</p>
<p>与传统 Prompt 从输入直接映射到输出 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">⟨</mo><mtext>input</mtext><mo>→</mo><mtext>output</mtext><mo stretchy="false">⟩</mo></mrow><annotation encoding="application/x-tex">\langle \text{input} \rightarrow \text{output} \rangle</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">⟨</span><span class="mord text"><span class="mord">input</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord text"><span class="mord">output</span></span><span class="mclose">⟩</span></span></span></span> 的方式不同，CoT 完成了从输入到思维链再到输出的映射，即 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">⟨</mo><mtext>input</mtext><mo>→</mo><mtext>reasoning chain</mtext><mo>→</mo><mtext>output</mtext><mo stretchy="false">⟩</mo></mrow><annotation encoding="application/x-tex">\langle \text{input} \rightarrow \text{reasoning chain} \rightarrow \text{output} \rangle</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">⟨</span><span class="mord text"><span class="mord">input</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord text"><span class="mord">reasoning chain</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord text"><span class="mord">output</span></span><span class="mclose">⟩</span></span></span></span>。</p>
<hr>
<h2 id="cot-和普通提示的区别" tabindex="-1"><a class="header-anchor" href="#cot-和普通提示的区别"><span>CoT 和普通提示的区别</span></a></h2>
<p>一个完整的包含 CoT 的 Prompt 往往由以下三部分组成：</p>
<ol>
<li><strong>指令 (Instruction)</strong>：用于描述问题并告知大模型的输出格式。</li>
<li><strong>逻辑依据 (Rationale)</strong>：指 CoT 的中间推理过程，可以包含问题的解决方案、中间推理步骤，以及与问题相关的任何外部知识。</li>
<li><strong>示例 (Exemplars)</strong>：通过少样本的方式为大模型提供输入输出对的基本格式。每一个示例都包含：问题、推理过程与答案。
<img src="/img/user/附件/Pasted image 20250504145923.png" alt="Pasted image 20250504145923.png"><img src="/img/user/附件/Pasted image 20250504145933.png" alt="Pasted image 20250504145933.png"></li>
</ol>
<hr>
<h2 id="zero-shot-cot-与-few-shot-cot" tabindex="-1"><a class="header-anchor" href="#zero-shot-cot-与-few-shot-cot"><span>Zero-Shot-CoT 与 Few-Shot-CoT</span></a></h2>
<p>根据是否包含示例，可以将 CoT 分为 Zero-Shot-CoT 和 Few-Shot-CoT 两种形式。</p>
<h3 id="zero-shot-cot" tabindex="-1"><a class="header-anchor" href="#zero-shot-cot"><span>Zero-Shot-CoT</span></a></h3>
<p>Zero-Shot-CoT 不添加示例，仅在指令中添加一行经典的提示语——“Let’s think step by step”，即可“唤醒”大模型的推理能力。实际上，Zero-Shot-CoT 是一个 pipeline（流水线）。具体过程如下：</p>
<ol>
<li>通过提示语 “Let’s think step by step”，引导 LLM 尽可能生成一些思考过程。</li>
<li>将生成的推理过程 (rationale) 和问题 (question) 拼接在一起，再配合一个新的 Prompt，例如 “The answer is”，来激励模型生成答案。</li>
</ol>
<p>从技术上讲，完整的 Zero-Shot-CoT 过程涉及两个单独的提示/补全步骤：</p>
<ul>
<li>第一个提示生成一个思维链。</li>
<li>第二个提示接收第一个提示（包括第一个提示本身）的输出，并从思维链中提取最终答案。</li>
</ul>
<p>需要注意的是，“Let’s think step by step” 是经过验证有效的提示语，其他类似提示效果通常不如这一句。
<img src="/img/user/附件/Pasted image 20250504145948.png" alt="Pasted image 20250504145948.png"><img src="/img/user/附件/Pasted image 20250504145955.png" alt="Pasted image 20250504145955.png"></p>
<p><img src="/img/user/附件/Pasted image 20250504150007.png" alt="Pasted image 20250504150007.png"></p>
<h3 id="few-shot-cot" tabindex="-1"><a class="header-anchor" href="#few-shot-cot"><span>Few-Shot-CoT</span></a></h3>
<p>Few-Shot-CoT 则在 Prompt 中详细描述了解题步骤，通过提供示例让模型“照猫画虎”地学习推理能力。这种方法通过提供样本问题、对应的推理过程和答案，使得模型能够更好地理解复杂问题的解决路径。</p>
<hr>
<h2 id="cot-改进方法" tabindex="-1"><a class="header-anchor" href="#cot-改进方法"><span>CoT 改进方法</span></a></h2>
<p>在自然语言处理领域，思维链（Chain-of-Thought, CoT）方法是一种有效提升大语言模型（LLM）推理能力的技术。随着研究的深入，学者们提出了多种针对 CoT 的改进方法，包括 Self Consistency（CoT-SC）、Tree-of-Thoughts（ToT）和 Graph-of-Thoughts（GoT）。本文将详细介绍这些改进方法的核心思想及其实现方式。</p>
<hr>
<h3 id="cot-sc-self-consistency" tabindex="-1"><a class="header-anchor" href="#cot-sc-self-consistency"><span>CoT-SC：Self Consistency</span></a></h3>
<p>CoT-SC 的核心改进在于引入了多数投票（majority vote）机制。具体来说，它通过生成多个思路链，从中提取答案并取多数答案作为最终答案。这种方法显著提高了思维链方法的性能。</p>
<p>在 CoT-SC 中，提示（prompt）依然是使用少样本思维链范例编写的。通过这个提示，独立生成多个思维链，并从每个思维链中提取答案。最终答案的计算过程基于“边缘化推理路径”，即通过统计多个推理路径中最常见的答案来决定最终结果。</p>
<p>这种方法的优势在于，它利用了模型在不同推理路径中的多样性，从而有效地提升了答案的鲁棒性和准确性。
<img src="/img/user/附件/Pasted image 20250504150215.png" alt="Pasted image 20250504150215.png"></p>
<hr>
<h3 id="tot-tree-of-thoughts" tabindex="-1"><a class="header-anchor" href="#tot-tree-of-thoughts"><span>ToT：Tree-of-Thoughts</span></a></h3>
<p>ToT 方法通过树（tree）的结构来建模 LLM 的推理过程。这种方法允许模型使用不同的思维路径，并引入了一些全新的功能，比如基于不好的结果进行反向回溯推理。</p>
<p>然而，ToT 方法也存在明显的局限性。由于其为思维过程强加了严格的树结构，这种约束会极大限制 prompt 的推理能力。因此，尽管 ToT 提供了一种新的思维建模方式，但其实际应用范围可能受到一定限制。
<img src="/img/user/附件/Pasted image 20250504150530.png" alt="Pasted image 20250504150530.png"></p>
<hr>
<h3 id="got-graph-of-thoughts" tabindex="-1"><a class="header-anchor" href="#got-graph-of-thoughts"><span>GoT：Graph-of-Thoughts</span></a></h3>
<p>GoT 方法进一步改进了 ToT 的局限性，通过引入图（graph）的概念，将 LLM 的思维建模为图结构。在 GoT 中，一个 LLM 的思维被建模为一个顶点，而顶点之间的依赖关系则被建模为边。
<img src="/img/user/附件/Pasted image 20250504150546.png" alt="Pasted image 20250504150546.png"></p>
<h4 id="got-的核心特点" tabindex="-1"><a class="header-anchor" href="#got-的核心特点"><span>GoT 的核心特点</span></a></h4>
<ol>
<li><strong>聚合操作</strong>：通过构建具有多条输入边的顶点，可以将任意思维聚合起来。这使得 GoT 能够无缝地将 CoT 和 ToT 泛化到更复杂的思维模式，并且无需更新模型。</li>
<li><strong>分治思想</strong>：相比于 ToT，GoT 增加了聚合操作，能够更灵活地实现分治策略，从而提升推理效率和效果。</li>
</ol>
<p>GoT 中的图是一个有向无环图（Directed Acyclic Graph, DAG）。其整体结构如下图所示：</p>
<p><em>注：由于附件不支持打印，图示内容请参考相关资料。</em></p>
<hr>
<h4 id="got-的模块组成" tabindex="-1"><a class="header-anchor" href="#got-的模块组成"><span>GoT 的模块组成</span></a></h4>
<p>GoT 的实现由一组交互式模块构成，具体包括以下部分：</p>
<ol>
<li><strong>Prompter</strong>：负责准备用于 LLM 的消息。</li>
<li><strong>Parser</strong>：解析器，用于提取 LLM 答复中的信息。</li>
<li><strong>评分模块</strong>：验证 LLM 答复并对其评分。</li>
<li><strong>Controller</strong>：控制器，负责协调整个推理过程，并决定如何推进推理。</li>
</ol>
<h5 id="controller-的两个重要组件" tabindex="-1"><a class="header-anchor" href="#controller-的两个重要组件"><span>Controller 的两个重要组件</span></a></h5>
<ul>
<li>
<p><strong>操作图（GoO）</strong>：<br>
GoO 是一个静态结构，其指定了对给定任务的图分解。这意味着 GoO 规定了应用于 LLM 思维的变换及其顺序和依赖关系。</p>
</li>
<li>
<p><strong>图推理状态（GRS）</strong>：<br>
GRS 是一个动态结构，用于维持正在进行的 LLM 推理过程的状态，包括其思维及其状态的历史记录。
<img src="/img/user/附件/Pasted image 20250504150558.png" alt="Pasted image 20250504150558.png"></p>
</li>
</ul>
<hr>
</div></template>


