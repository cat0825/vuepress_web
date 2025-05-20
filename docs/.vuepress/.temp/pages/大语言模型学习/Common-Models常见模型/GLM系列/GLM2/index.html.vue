<template><div><p>元数据：</p>
<ul>
<li>分类：人工智能</li>
<li>标签：ChatGLM2, 解码器, 人工智能, 模型训练, 自回归</li>
<li>日期：2025年4月12日</li>
</ul>
<h2 id="模型结构概述" tabindex="-1"><a class="header-anchor" href="#模型结构概述"><span>模型结构概述</span></a></h2>
<p>ChatGLM2-6B 采用了完全的 Decoder-only 架构，结合了以下技术特性：</p>
<ul>
<li><strong>RoPE</strong>（旋转位置编码）用于增强位置编码能力。</li>
<li>激活函数从 <strong>Gelu</strong> 转换为 <strong>SwiGLU</strong>。</li>
<li>使用 <strong>Pre-RMSnorm</strong> 规范化技术。</li>
<li>多头注意力机制（MHA）优化为多查询注意力（MQA），提高推理效率。</li>
<li>基于 <strong>FalshAttention</strong> 的上下文长度从 2K 增加到 32K，并在对话阶段采用 8K 上下文进行训练。</li>
</ul>
<h2 id="训练目标" tabindex="-1"><a class="header-anchor" href="#训练目标"><span>训练目标</span></a></h2>
<p>ChatGLM2-6B 使用了 GLM 的混合目标函数，经过了 1.5 万亿中英标识符的预训练，并进行了人类偏好对齐训练。</p>
<h2 id="解码器架构的选择" tabindex="-1"><a class="header-anchor" href="#解码器架构的选择"><span>解码器架构的选择</span></a></h2>
<h3 id="为什么选择-decoder-only-架构" tabindex="-1"><a class="header-anchor" href="#为什么选择-decoder-only-架构"><span>为什么选择 Decoder-only 架构？</span></a></h3>
<p>多轮对话中，使用 prefix-decoder 需要构造多个数据来训练，而 decoder-only 架构通过使用 casual mask 可以直接处理整个多轮对话数据。此改动还消除了二维编码的需要。</p>
<p>💡 <strong>启发点</strong>：Decoder-only 架构展现了强大的自回归生成能力。</p>
<h3 id="样本构建与损失计算" tabindex="-1"><a class="header-anchor" href="#样本构建与损失计算"><span>样本构建与损失计算</span></a></h3>
<p>在处理多轮对话时，例如三轮对话 Q1A1，Q2A2，Q3A3：</p>
<ul>
<li>
<p><strong>PrefixLM 需要构建的样本</strong>：</p>
<ul>
<li>Q1 -&gt; A1</li>
<li>Q1A1Q2 -&gt; A2</li>
<li>Q1A1Q2A2Q3 -&gt; A3</li>
</ul>
</li>
<li>
<p><strong>Decoder-only 样本构建与损失计算</strong>：</p>
<ul>
<li>样本构建：Q1 A1 Q2 A2 Q3 A3</li>
<li>损失计算：只需计算 A1、A2 和 A3 部分</li>
</ul>
</li>
</ul>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p>⚠ 在使用 prefix-decoder 架构时，容易造成数据冗余和训练复杂度增加。</p>
</blockquote>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 深入研究 SwiGLU 激活函数的优势。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 探讨 RoPE 在其他模型中的应用。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 分析多查询注意力（MQA）的具体实现细节。</label></li>
</ul>
<blockquote>
<p>原始出处：<a href="https://github.com/THUDM/ChatGLM2-6B" target="_blank" rel="noopener noreferrer">GitHub</a></p>
</blockquote>
</div></template>


