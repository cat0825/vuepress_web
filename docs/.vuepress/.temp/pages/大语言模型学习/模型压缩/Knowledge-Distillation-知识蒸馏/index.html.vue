<template><div><p>知识蒸馏（Knowledge Distillation, KD）是一种旨在将知识从大型复杂模型（即教师模型）转移到较小简单模型（即学生模型）的技术。根据教师模型的开放性程度，知识蒸馏可以分为以下两类：</p>
<ol>
<li><strong>Blackbox知识蒸馏</strong>：通常只能访问教师模型的输出，这些教师模型一般来自闭源的大语言模型。</li>
<li><strong>Whitebox知识蒸馏</strong>：在这种情况下，可以获取教师模型的参数或输出分布，教师模型通常来自开源的大语言模型。</li>
</ol>
<h2 id="知识蒸馏的基本组成部分" tabindex="-1"><a class="header-anchor" href="#知识蒸馏的基本组成部分"><span>知识蒸馏的基本组成部分</span></a></h2>
<p>知识蒸馏算法由以下三部分组成：</p>
<ol>
<li><strong>知识（Knowledge）</strong>：表示从教师模型中提取的内容。</li>
<li><strong>蒸馏算法（Distillation Algorithm）</strong>：用于实现知识转移的具体方法。</li>
<li><strong>师生架构（Teacher-Student Architecture）</strong>：描述教师模型与学生模型之间的关系及其结构。</li>
</ol>
<p>一般的师生架构如下图所示：</p>
<p><img src="/img/user/附件/Pasted image 20250504144355.png" alt="Pasted image 20250504144355.png"></p>
<p>通常情况下，教师网络会比学生网络大，通过知识蒸馏的方法将教师网络的知识转移到学生网络。因此，蒸馏学习可以用于压缩模型，将大模型变成小模型。需要注意的是，知识蒸馏的过程需要数据集，这个数据集可以是用于教师模型预训练的数据集，也可以是额外的数据集。</p>
<hr>
<h1 id="白盒知识蒸馏" tabindex="-1"><a class="header-anchor" href="#白盒知识蒸馏"><span>白盒知识蒸馏</span></a></h1>
<p>知识蒸馏是一种重要的模型压缩方法，其核心思想是通过教师模型（Teacher Model）向学生模型（Student Model）传递知识，以便在保持模型性能的同时减少模型的参数量和计算复杂度。在知识蒸馏领域，白盒知识蒸馏和黑盒知识蒸馏是两个主要研究方向。
<img src="/img/user/附件/Pasted image 20250504144618.png" alt="Pasted image 20250504144618.png"></p>
<hr>
<h2 id="知识的类型" tabindex="-1"><a class="header-anchor" href="#知识的类型"><span>知识的类型</span></a></h2>
<p>白盒知识蒸馏中，知识的类型主要分为三种：<strong>Response-based</strong>、<strong>Feature-based</strong> 和 <strong>Relation-based</strong>。这三种类型各有特点，适用于不同的场景和需求。</p>
<h3 id="_1-response-based" tabindex="-1"><a class="header-anchor" href="#_1-response-based"><span>1. Response-based</span></a></h3>
<p>在 <strong>Response-based</strong> 知识蒸馏中，学生模型直接学习教师模型输出层的特征。通俗地说，教师模型在充分学习后，直接将结论告诉学生模型。这种方法的特点是学习目标非常明确，学生模型只需模仿教师模型的最终预测结果即可。
<img src="/img/user/附件/Pasted image 20250504144631.png" alt="Pasted image 20250504144631.png"></p>
<hr>
<h3 id="_2-feature-based" tabindex="-1"><a class="header-anchor" href="#_2-feature-based"><span>2. Feature-based</span></a></h3>
<p>相比于 <strong>Response-based</strong> 方法直接学习教师模型的输出结果，<strong>Feature-based</strong> 方法进一步挖掘深度神经网络中不同层级的特征信息。它将教师模型中间层的特征激活作为学生模型的学习目标，从而对 <strong>Response-based</strong> 知识形成补充。</p>
<p>虽然基于特征的知识转移为学生模型提供了更多信息，但它也带来了新的挑战：</p>
<ul>
<li>教师模型和学生模型的结构可能不同，如何选择教师模型中的哪一层特征激活（提示层）以及学生模型中的哪一层（引导层）进行模仿，是一个需要深入研究的问题。</li>
<li>当提示层和引导层的大小存在差异时，如何正确匹配教师与学生的特征表示也是一个尚未完全解决的难题。</li>
</ul>
<p>目前，对于这些问题，还没有成熟统一的解决方案。
<img src="/img/user/附件/Pasted image 20250504144644.png" alt="Pasted image 20250504144644.png"></p>
<hr>
<h3 id="_3-relation-based" tabindex="-1"><a class="header-anchor" href="#_3-relation-based"><span>3. Relation-based</span></a></h3>
<p>与前两种方法不同，<strong>Relation-based</strong> 方法不仅关注教师模型中特定网络层的特征输出，还进一步探索了各网络层输出之间的关系或样本之间的关系。例如：</p>
<ul>
<li>使用教师模型中两层 feature maps 之间的 Gram 矩阵作为知识，这反映了网络层输出之间的关系。</li>
<li>利用样本在教师模型上的特征表示的概率分布，捕捉样本之间的关系。</li>
</ul>
<p>这种基于关系的方法能够更全面地传递教师模型中蕴含的信息，但其实现和优化也存在一定难度。
<img src="/img/user/附件/Pasted image 20250504144652.png" alt="Pasted image 20250504144652.png"></p>
<hr>
<h2 id="蒸馏的方法" tabindex="-1"><a class="header-anchor" href="#蒸馏的方法"><span>蒸馏的方法</span></a></h2>
<p>在白盒知识蒸馏中，常见的蒸馏方法可以分为三类：<strong>Offline distillation</strong>、<strong>Online distillation</strong> 和 <strong>Self-distillation</strong>。</p>
<h3 id="_1-offline-distillation" tabindex="-1"><a class="header-anchor" href="#_1-offline-distillation"><span>1. Offline distillation</span></a></h3>
<p><strong>Offline distillation</strong> 是大多数知识蒸馏算法采用的方法，其过程主要包括两个步骤：</p>
<ol>
<li><strong>教师模型预训练</strong>：首先对教师模型进行充分训练，使其具备较高的精度和性能。</li>
<li><strong>蒸馏算法迁移知识</strong>：将教师模型中的知识迁移到学生模型中。</li>
</ol>
<p>这种方法通常侧重于知识迁移部分，教师模型通常参数量大且训练时间较长。例如，大型预训练语言模型 BERT 通过这种方式可以生成更小、更高效的模型，如 tinyBERT。</p>
<hr>
<h3 id="_2-online-distillation" tabindex="-1"><a class="header-anchor" href="#_2-online-distillation"><span>2. Online distillation</span></a></h3>
<p>与 <strong>Offline distillation</strong> 不同，<strong>Online distillation</strong> 要求教师模型和学生模型同时更新。这种方法主要适用于以下场景：</p>
<ul>
<li>教师模型参数量大且精度性能高，但无法直接获得。</li>
<li>在线环境下需要动态更新模型。</li>
</ul>
<p>然而，由于在线环境下难以获得参数量大且精度性能高的教师模型，这种方法在实际应用中面临一定限制。</p>
<hr>
<h3 id="_3-self-distillation" tabindex="-1"><a class="header-anchor" href="#_3-self-distillation"><span>3. Self-distillation</span></a></h3>
<p><strong>Self-distillation</strong> 是 <strong>Online distillation</strong> 的一种特例。在这种方法中，教师模型和学生模型采用相同的网络结构。通过这种方式，学生模型在学习过程中能够更好地模仿教师模型，从而实现性能提升。</p>
<hr>
<h1 id="黑盒知识蒸馏" tabindex="-1"><a class="header-anchor" href="#黑盒知识蒸馏"><span>黑盒知识蒸馏</span></a></h1>
<h2 id="白盒知识蒸馏与黑盒知识蒸馏的区别" tabindex="-1"><a class="header-anchor" href="#白盒知识蒸馏与黑盒知识蒸馏的区别"><span>白盒知识蒸馏与黑盒知识蒸馏的区别</span></a></h2>
<p>白盒知识蒸馏（也叫标准KD）旨在让学生模型学习大语言模型（LLM）所用的常见知识，例如输出分布和特征信息。而黑盒知识蒸馏则有所不同，它通常促使教师大语言模型生成一个蒸馏数据集，利用该数据集微调学生语言模型，从而将能力从教师大语言模型转移到学生语言模型。</p>
<p>特别地，对于LLM来说，知识转移还涵盖了蒸馏它们独特的涌现能力（Emergent Abilities），因此黑盒知识蒸馏又被称为 <strong>Emergent Abilities-based KD</strong>。这种方法主要包括以下三种蒸馏方式：ICL、CoT 和 Instruction Following。</p>
<hr>
<h2 id="icl-上下文少样本学习蒸馏" tabindex="-1"><a class="header-anchor" href="#icl-上下文少样本学习蒸馏"><span>ICL：上下文少样本学习蒸馏</span></a></h2>
<p>ICL（In-Context Learning）采用结构化的自然语言提示（prompt），其中包含任务描述和一些示例。通过这些任务示例，LLM可以在不需要显式梯度更新的情况下掌握和执行新任务。</p>
<p>ICL 蒸馏的核心目标是将 LLM 的上下文少样本学习能力和语言建模能力转移到学生模型中。这种方法将上下文学习目标与传统的语言建模目标相结合，并在少样本学习范式下进行 ICL 蒸馏。</p>
<hr>
<h2 id="cot-中间推理步骤蒸馏" tabindex="-1"><a class="header-anchor" href="#cot-中间推理步骤蒸馏"><span>CoT：中间推理步骤蒸馏</span></a></h2>
<p>CoT（Chain of Thought）与 ICL 相比，在提示中加入了中间推理步骤。这些步骤不仅能够影响最终的输出，还能提升模型的推理能力，而不仅仅是简单的输入-输出对。</p>
<p>一些基于 CoT 的蒸馏工作包括：</p>
<ol>
<li>
<p><strong>MT-COT</strong><br>
MT-COT 利用 LLM 生成的解释来增强较小推理器的训练。通过多任务学习框架，较小的模型不仅具备强大的推理能力，还能够生成解释。</p>
</li>
<li>
<p><strong>Fine-tune-CoT</strong><br>
Fine-tune-CoT 通过随机采样从 LLM 生成多个推理解决方案。这种训练数据的增加有助于学生模型的学习过程。</p>
</li>
<li>
<p><strong>SOCRATIC CoT</strong><br>
SOCRATIC CoT 训练了两个蒸馏模型：问题分解器和子问题解决器。其中，分解器将原始问题分解为一系列子问题，而子问题解决器则负责解决这些子问题。</p>
</li>
<li>
<p><strong>DISCO</strong><br>
DISCO 引入了一种基于 LLM 的完全自动反事实知识蒸馏方法。它通过工程化提示生成短语扰动，然后通过任务特定的教师模型将这些扰动数据过滤，以提取高质量的反事实数据。</p>
</li>
<li>
<p><strong>SCOTT</strong><br>
SCOTT 采用对比解码，将每个原理与答案联系起来，鼓励学生模型从教师模型中提取相关的原理。</p>
</li>
</ol>
<hr>
<h2 id="if-基于指令跟随的蒸馏" tabindex="-1"><a class="header-anchor" href="#if-基于指令跟随的蒸馏"><span>IF：基于指令跟随的蒸馏</span></a></h2>
<p>IF（Instruction Following）与 ICL 不同，它仅依赖于任务描述，而不依赖于少量示例。通过使用一系列以指令形式表达的任务进行微调，语言模型展现出能够准确执行以前未见过的指令描述任务的能力。</p>
<p>这种方法充分利用了 LLM 的适应性来提升学生模型的性能。具体来说，它促使 LLM 识别和生成“困难”的指令，然后利用这些指令来增强学生模型的能力。</p>
<hr>
<p><img src="/img/user/附件/Pasted image 20250504144736.png" alt="Pasted image 20250504144736.png"></p>
</div></template>


