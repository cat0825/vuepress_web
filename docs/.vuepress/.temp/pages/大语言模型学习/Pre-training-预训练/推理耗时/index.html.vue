<template><div><p>分类：人工智能，深度学习</p>
<p>标签：推理机制，矩阵计算，时延优化</p>
<p>日期：2023年10月25日</p>
<h2 id="推理机制概述" tabindex="-1"><a class="header-anchor" href="#推理机制概述"><span>推理机制概述</span></a></h2>
<p>传统的推理方式采用逐个token生成的方法，无法并行化处理。推理过程主要包括：</p>
<ul>
<li><strong>矩阵-向量乘法</strong>：一个大矩阵（如8192x8192）与一个向量相乘，得到另一个向量。</li>
<li><strong>Attention计算</strong>：通过KV-cache进行推理。</li>
</ul>
<h3 id="关键瓶颈" tabindex="-1"><a class="header-anchor" href="#关键瓶颈"><span>关键瓶颈</span></a></h3>
<ul>
<li>矩阵-向量乘法的浮点运算：每个矩阵元素执行一次乘加运算（2 FLOPs）。</li>
<li>Attention计算需要对每个key和value执行一次乘加。</li>
</ul>
<h2 id="时延计算" tabindex="-1"><a class="header-anchor" href="#时延计算"><span>时延计算</span></a></h2>
<h3 id="数据量分析" tabindex="-1"><a class="header-anchor" href="#数据量分析"><span>数据量分析</span></a></h3>
<p>在模型使用FP16格式时，每生成一个token需要加载的数据总量为14.2 GB。虽然下一个token生成时可以复用每个矩阵，但由于硬件缓存大小有限，速度受限于显存带宽。</p>
<h3 id="kv-cache读取" tabindex="-1"><a class="header-anchor" href="#kv-cache读取"><span>KV-cache读取</span></a></h3>
<p>假设是7B大小的LLM，每个token对应的KV-cache数据量为130KB。例如，第1000个token需要读取130MB的数据，与总数据量14.2GB相比，这部分影响可以忽略不计。</p>
<h3 id="计算时延" tabindex="-1"><a class="header-anchor" href="#计算时延"><span>计算时延</span></a></h3>
<p>在NVIDIA RTX 4090上，读取14.2GB (FP16)数据需要约14.1ms，因此每个位置靠前的token大约需要14.1ms。使用8bit权重则需7.0ms。这是生成每个token的理论最小时间。</p>
<h2 id="公式总结" tabindex="-1"><a class="header-anchor" href="#公式总结"><span>公式总结</span></a></h2>
<p>模型的预测时间可以近似为：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>y</mi><mo>=</mo><mi>k</mi><mi>x</mi><mo>+</mo><mi>b</mi></mrow><annotation encoding="application/x-tex">y = kx + b
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span></span></p>
<p>其中，$$b$$是首个token的耗时，$$k$$是后续每个token的耗时，$$x$$是生成token的总数量。</p>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p>⚠️ 在进行推理机制优化时，容易忽视KV-cache对整体速度的微小影响，导致错误评估性能瓶颈。</p>
</blockquote>
<h2 id="💡启发点" tabindex="-1"><a class="header-anchor" href="#💡启发点"><span>💡启发点</span></a></h2>
<ul>
<li>矩阵-向量乘法和attention计算是推理过程中的核心操作，优化这些步骤可以显著提升模型性能。</li>
</ul>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul>
<li>探索更高效的矩阵计算方法。</li>
<li>优化KV-cache使用策略以减少不必要的数据读取。</li>
</ul>
<h2 id="📈趋势预测" tabindex="-1"><a class="header-anchor" href="#📈趋势预测"><span>📈趋势预测</span></a></h2>
<p>未来，大模型的推理速度将继续提升，通过硬件和算法的协同优化实现更快的响应时间。</p>
<h2 id="后续追踪" tabindex="-1"><a class="header-anchor" href="#后续追踪"><span>后续追踪</span></a></h2>
<ul>
<li>研究新型硬件架构对推理速度的影响。</li>
<li>探索更高效的attention机制以进一步减少推理时延。</li>
</ul>
<blockquote>
<p>来源：《LLM inference speed of light》</p>
</blockquote>
</div></template>


