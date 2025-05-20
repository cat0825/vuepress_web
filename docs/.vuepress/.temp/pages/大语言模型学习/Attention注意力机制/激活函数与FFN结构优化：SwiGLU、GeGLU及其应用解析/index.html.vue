<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li><strong>分类</strong>：深度学习</li>
<li><strong>标签</strong>：激活函数、FFN结构、SwiGLU、GeLU、神经网络优化</li>
<li><strong>日期</strong>：2025年3月2日</li>
</ul>
<hr>
<h2 id="核心内容概述" tabindex="-1"><a class="header-anchor" href="#核心内容概述"><span><strong>核心内容概述</strong></span></a></h2>
<p>在现代大规模语言模型（如LLaMA2-7B）中，传统的前馈神经网络（FFN）结构正逐渐被更高效的变种所取代，例如SwiGLU和GeGLU。这些变种通过引入更复杂的激活函数（如Swish和GeLU），优化了计算效率和模型性能，并通过调整中间层维度来保持参数量的平衡。
<img src="/img/user/附件/Pasted image 20250407112246.png" alt="Pasted image 20250407112246.png"></p>
<hr>
<h2 id="关键内容解析" tabindex="-1"><a class="header-anchor" href="#关键内容解析"><span><strong>关键内容解析</strong></span></a></h2>
<h3 id="_1-ffn结构与激活函数基础" tabindex="-1"><a class="header-anchor" href="#_1-ffn结构与激活函数基础"><span><strong>1. FFN结构与激活函数基础</strong></span></a></h3>
<p>传统FFN模块的计算公式为：</p>
<div class="language-math line-numbers-mode" data-highlighter="shiki" data-ext="math" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>FFN(x) = ReLU(xW₁ + b₁)W₂ + b₂</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>FFN的作用</strong>：处理输入特征并生成非线性输出。</li>
<li><strong>ReLU激活函数</strong>：简单但高效，通常作为FFN的默认激活函数。</li>
</ul>
<hr>
<h3 id="_2-glu与其变种-swiglu、geglu-的改进" tabindex="-1"><a class="header-anchor" href="#_2-glu与其变种-swiglu、geglu-的改进"><span><strong>2. GLU与其变种（SwiGLU、GeGLU）的改进</strong></span></a></h3>
<p>💡 <strong>线性门控单元（GLU）</strong>：</p>
<div class="language-math line-numbers-mode" data-highlighter="shiki" data-ext="math" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>GLU(x) = (xV) ⋅ σ(xW + b)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>引入门控机制，通过<code v-pre>sigmoid</code>选择哪些信号通过，哪些被抑制。</li>
</ul>
<p>💡 <strong>SwiGLU 和 GeGLU 的创新</strong>：</p>
<ul>
<li>将GLU中的<code v-pre>sigmoid</code>替换为更复杂的激活函数：
<ul>
<li><strong>SwiGLU</strong>：使用Swish激活函数。</li>
<li><strong>GeGLU</strong>：使用GeLU激活函数。</li>
</ul>
</li>
</ul>
<table>
<thead>
<tr>
<th>激活函数</th>
<th>公式</th>
<th>特点</th>
</tr>
</thead>
<tbody>
<tr>
<td>Swish</td>
<td><code v-pre>Swish(x) = x × sigmoid(β * x)</code></td>
<td>平滑且具备非线性增强能力。</td>
</tr>
<tr>
<td>GeLU</td>
<td><code v-pre>GeLU(x) ≈ 0.5x(1 + tanh(√(2/π)(x + 0.044715x³)))</code></td>
<td>更适合深层网络，计算更复杂。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_3-llama2中的参数优化" tabindex="-1"><a class="header-anchor" href="#_3-llama2中的参数优化"><span><strong>3. LLaMA2中的参数优化</strong></span></a></h3>
<p>📈 为了适配SwiGLU带来的额外计算开销，大模型通常对FFN的中间层维度进行调整。例如：</p>
<ul>
<li><strong>LLaMA2-7B模型</strong>：
<ul>
<li>原始输入维度：4096。</li>
<li>中间层维度（传统FFN）：4倍输入维度，即16384。</li>
<li>中间层维度（SwiGLU优化后）：缩减为原来的2/3，约10922。</li>
<li>为满足256的整数倍需求，最终调整为11008。</li>
</ul>
</li>
</ul>
<p>这种调整在保持模型参数量基本不变的同时，提高了计算效率和性能。</p>
<hr>
<h3 id="_4-常见错误与注意事项" tabindex="-1"><a class="header-anchor" href="#_4-常见错误与注意事项"><span><strong>4. 常见错误与注意事项</strong></span></a></h3>
<p>⚠ <strong>常见错误</strong>：</p>
<ol>
<li>忽略中间层维度调整，导致模型参数量增加过多。</li>
<li>在实现SwiGLU或GeGLU时未正确替换激活函数，影响模型性能。</li>
<li>对Swish或GeLU公式误解，导致梯度计算不准确。</li>
</ol>
<hr>
<h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span><strong>代码示例</strong></span></a></h2>
<p>以下是一个实现SwiGLU的简单代码片段（PyTorch）：</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> torch</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> torch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">nn </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">as</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> nn</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> SwiGLU</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">nn</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Module</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    def</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> __init__</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> input_dim</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> hidden_dim</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        super</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">SwiGLU</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> self</span><span style="--shiki-light:#999999;--shiki-dark:#666666">).</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">__init__</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">        self</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">linear1 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> nn</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Linear</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">input_dim</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> hidden_dim</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">        self</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">linear2 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> nn</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Linear</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">hidden_dim</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> input_dim</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">        self</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">swish </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> lambda</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> x</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> x </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> torch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">sigmoid</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">x</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    def</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> forward</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> x</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        hidden </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> self</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">swish</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">linear1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">x</span><span style="--shiki-light:#999999;--shiki-dark:#666666">))</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">        return</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> self</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">linear2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">hidden</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 示例</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">input_tensor </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> torch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">randn</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 4096</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">model </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> SwiGLU</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">4096</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 11008</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">output </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> model</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">input_tensor</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">print</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">output</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">shape</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 输出张量形状</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="个人见解-思考" tabindex="-1"><a class="header-anchor" href="#个人见解-思考"><span><strong>个人见解 [思考]</strong></span></a></h2>
<ol>
<li>
<p><strong>激活函数选择对模型性能影响有多大？</strong></p>
<ul>
<li>为什么SwiGLU和GeLU在大模型中表现更优？是否存在其他潜在替代品？</li>
</ul>
</li>
<li>
<p><strong>参数量平衡与性能优化的权衡</strong></p>
<ul>
<li>中间层维度缩减是否会影响模型的泛化能力？是否可以通过其他方式优化？</li>
</ul>
</li>
<li>
<p><strong>未来趋势</strong></p>
<ul>
<li>📈 随着硬件性能提升，是否会有更多复杂激活函数被引入？如何评估其实际收益？</li>
</ul>
</li>
</ol>
<hr>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span><strong>行动清单</strong></span></a></h2>
<p>✅ 学习并实现SwiGLU和GeGLU的代码实现。<br>
✅ 比较不同激活函数对模型训练速度和性能的影响。<br>
✅ 调研其他激活函数（如Mish、ELU）在大模型中的应用潜力。</p>
<hr>
<h2 id="后续追踪研究计划" tabindex="-1"><a class="header-anchor" href="#后续追踪研究计划"><span><strong>后续追踪研究计划</strong></span></a></h2>
<ol>
<li>
<p><strong>深入分析</strong>：</p>
<ul>
<li>对比不同激活函数在Transformer架构中的表现。</li>
<li>探索更多高效的FFN结构替代方案。</li>
</ul>
</li>
<li>
<p><strong>实验验证</strong>：</p>
<ul>
<li>在中小规模数据集上测试SwiGLU和GeGLU，评估其适用性。</li>
</ul>
</li>
<li>
<p><strong>硬件适配</strong>：</p>
<ul>
<li>研究新型硬件（如TPUs）对复杂激活函数的支持情况。</li>
</ul>
</li>
</ol>
<blockquote>
<p>本文参考自深度学习相关资料与大语言模型技术文档。</p>
</blockquote>
</div></template>


