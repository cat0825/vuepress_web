<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li><strong>分类</strong>：机器学习</li>
<li><strong>标签</strong>：监督微调, 预训练, 模型优化, 数据处理</li>
<li><strong>日期</strong>：2023年10月22日</li>
</ul>
<h2 id="核心观点总结" tabindex="-1"><a class="header-anchor" href="#核心观点总结"><span>核心观点总结</span></a></h2>
<p>监督微调（SFT）与预训练（pretrain）在训练方式上无区别，但在数据处理和训练目的上存在显著差异。SFT数据不需要拼接，使用特殊标记符构造知识，并且强调指令遵循能力，而非知识注入。预训练主要是知识的学习，而SFT则是应用这些知识。</p>
<h3 id="重点段落" tabindex="-1"><a class="header-anchor" href="#重点段落"><span>重点段落</span></a></h3>
<ol>
<li>
<p><strong>数据组成形式</strong>：</p>
<ul>
<li>预训练数据达到模型输入长度上限，需拼接。</li>
<li>SFT数据保持原始长度，不需拼接，使用特殊标记符来构造语义。</li>
</ul>
</li>
<li>
<p><strong>训练目标差异</strong>：</p>
<ul>
<li>预训练旨在知识学习。</li>
<li>SFT专注于指令遵循能力。</li>
</ul>
</li>
<li>
<p><strong>知识注入策略</strong>：</p>
<ul>
<li>SFT不适合进行大规模知识注入。</li>
<li>知识注入应采用继续预训练策略，以维持模型通用能力。</li>
</ul>
</li>
</ol>
<h2 id="技术术语通俗解释" tabindex="-1"><a class="header-anchor" href="#技术术语通俗解释"><span>技术术语通俗解释</span></a></h2>
<ul>
<li><strong>特殊标记符（special_token）</strong>：在文本中使用的特定符号，用来标识不同角色或语义。</li>
<li><strong>EOS标记符（eos_token）</strong>：表示文本结束的符号，帮助模型停止生成内容。</li>
</ul>
<h2 id="重点步骤" tabindex="-1"><a class="header-anchor" href="#重点步骤"><span>重点步骤</span></a></h2>
<ol>
<li>✅ 确保SFT数据保持原始长度，不进行拼接。</li>
<li>⚠ 使用特殊标记符分割角色和语义。</li>
<li>❗ 避免在SFT阶段进行大量知识注入，保持模型的通用性。</li>
</ol>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p>在SFT阶段进行过多的知识注入，导致模型的通用能力下降。</p>
</blockquote>
<h2 id="💡启发点" tabindex="-1"><a class="header-anchor" href="#💡启发点"><span>💡启发点</span></a></h2>
<ul>
<li>使用特殊标记符可以有效提升模型理解复杂语境的能力。</li>
<li>适当控制知识注入比例可保持模型的多样性和灵活性。</li>
</ul>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul>
<li>研究如何优化特殊标记符的使用以提升模型性能。</li>
<li>探讨继续预训练策略在不同领域的应用效果。</li>
</ul>
<h2 id="📈趋势预测" tabindex="-1"><a class="header-anchor" href="#📈趋势预测"><span>📈趋势预测</span></a></h2>
<p>随着自然语言处理技术的发展，SFT将更广泛应用于需要高度精确指令执行的领域，如医疗和法律文本分析。</p>
<h2 id="后续追踪" tabindex="-1"><a class="header-anchor" href="#后续追踪"><span>后续追踪</span></a></h2>
<ul>
<li>探索SFT在多语言模型中的应用潜力。</li>
<li>研究继续预训练策略对不同类型数据集的影响。</li>
</ul>
<blockquote>
<p>来源：原文内容整理自关于监督微调与预训练的比较分析。</p>
</blockquote>
</div></template>


