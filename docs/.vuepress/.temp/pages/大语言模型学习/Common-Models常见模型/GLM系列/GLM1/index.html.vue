<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li>分类：自然语言处理</li>
<li>标签：GLM1, 自回归填空, Transformer, 预训练</li>
<li>日期：2025年4月12日</li>
</ul>
<h2 id="内容概述" tabindex="-1"><a class="header-anchor" href="#内容概述"><span>内容概述</span></a></h2>
<p>GLM1是一种基于Transformer的语言模型，通过自回归填空任务实现高效的语言模型预训练。它采用prefix-decoder结构，并使用二维位置编码技术来增强模型的性能。
<img src="/img/user/附件/Pasted image 20250425104630.png" alt="Pasted image 20250425104630.png"></p>
<h3 id="模型结构与创新点" tabindex="-1"><a class="header-anchor" href="#模型结构与创新点"><span>模型结构与创新点</span></a></h3>
<p>GLM1使用了prefix-decoder结构，这实际上是Transformer的decoder部分，通过特殊的mask实现了文本的双向和单向attention。以下是GLM1模型的一些关键改动：</p>
<ul>
<li><strong>Pre Deep Norm</strong>：在模型中加入了深度归一化层。</li>
<li><strong>线性层输出</strong>：使用单层线性层进行token预测。</li>
<li><strong>激活函数</strong>：从ReLU切换到GeLU。</li>
</ul>
<p>💡启发点：GLM1通过自回归填空任务预训练语言模型，为条件生成和无条件生成任务提供了新的可能性。
<img src="/img/user/附件/Pasted image 20250425104726.png" alt="Pasted image 20250425104726.png">做分类任务示例</p>
<h3 id="自回归填空任务" tabindex="-1"><a class="header-anchor" href="#自回归填空任务"><span>自回归填空任务</span></a></h3>
<p>自回归填空任务结合了自编码和自回归思想：</p>
<ul>
<li><strong>自编码思想</strong>：在输入文本中随机删除连续的tokens。</li>
<li><strong>自回归思想</strong>：顺序重建连续tokens，模型可以访问损坏文本和之前预测的spans。
<img src="/img/user/附件/Pasted image 20250425104657.png" alt="Pasted image 20250425104657.png">
通过改变缺失spans的数量和长度，自回归填空目标可以为条件生成和无条件生成任务预训练语言模型。</li>
</ul>
<h3 id="二维位置编码技术" tabindex="-1"><a class="header-anchor" href="#二维位置编码技术"><span>二维位置编码技术</span></a></h3>
<p>GLM1采用二维位置编码技术：</p>
<ul>
<li><strong>位置标记</strong>：第一个位置id标记Part A中的位置，第二个位置id表示span内部的相对位置。</li>
<li><strong>嵌入投影</strong>：位置id通过embedding表投影为两个向量，加入到输入token的embedding表达中。</li>
</ul>
<h2 id="多任务预训练策略" tabindex="-1"><a class="header-anchor" href="#多任务预训练策略"><span>多任务预训练策略</span></a></h2>
<p>GLM1采用多任务预训练策略，以优化生成更长文本与空白填充目标：</p>
<ul>
<li><strong>Doc-level文档级</strong>：从原始长度的50% - 100%范围内均匀采样一个span，旨在生成长文本。</li>
<li><strong>Sentence-level句子级</strong>：限制被mask的span必须是完整句子，采样多个span以覆盖原始token的15%。</li>
</ul>
<h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2>
<ol>
<li>✅ 使用prefix-decoder结构进行文本处理。</li>
<li>⚠ 确保二维位置编码技术正确应用。</li>
<li>❗ 在多任务预训练中平衡文档级和句子级目标。</li>
</ol>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p>警告：在应用自回归填空任务时，注意不要过度依赖损坏文本，否则可能导致模型性能下降。</p>
</blockquote>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul>
<li>研究GLM1的应用场景，如条件生成任务。</li>
<li>探索二维位置编码技术在其他模型中的应用。</li>
<li>测试多任务预训练策略对不同数据集的影响。</li>
</ul>
<blockquote>
<p>原始出处：[论文：GLM：General Language Model Pretraining with Autoregressive Blank Infilling]</p>
</blockquote>
</div></template>


