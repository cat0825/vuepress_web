<template><div><p><strong>分类</strong>：深度学习<br>
<strong>标签</strong>：预训练模型，Scaling Law，计算预算，深度学习优化<br>
<strong>日期</strong>：2023年10月XX日</p>
<hr>
<h2 id="核心观点总结" tabindex="-1"><a class="header-anchor" href="#核心观点总结"><span>核心观点总结</span></a></h2>
<p>在深度学习模型的预训练中，资源预算、数据量和模型尺寸之间存在紧密关系。通过Scaling Law（缩放定律），可以优化计算资源的使用，确定最佳模型大小和数据集规模。</p>
<hr>
<h2 id="核心内容" tabindex="-1"><a class="header-anchor" href="#核心内容"><span>核心内容</span></a></h2>
<h3 id="_1-计算预算公式及其意义" tabindex="-1"><a class="header-anchor" href="#_1-计算预算公式及其意义"><span>1. <strong>计算预算公式及其意义</strong></span></a></h3>
<p>计算预训练所需资源的公式为：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mtext>计算预算</mtext><mo stretchy="false">(</mo><mi>F</mi><mi>L</mi><mi>O</mi><mi>P</mi><mi>s</mi><mo stretchy="false">)</mo><mo>=</mo><mn>6</mn><mo>×</mo><mtext>数据</mtext><mo stretchy="false">(</mo><mi>t</mi><mi>o</mi><mi>k</mi><mi>e</mi><mi>n</mi><mtext>数量</mtext><mo stretchy="false">)</mo><mo>×</mo><mtext>模型尺寸</mtext><mo stretchy="false">(</mo><mtext>参数数量</mtext><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">计算预算 (FLOPs) = 6 \times 数据(token 数量) \times 模型尺寸(参数数量)
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord cjk_fallback">计算预算</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="mord mathnormal">L</span><span class="mord mathnormal" style="margin-right:0.13889em;">OP</span><span class="mord mathnormal">s</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">6</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord cjk_fallback">数据</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">e</span><span class="mord mathnormal">n</span><span class="mord cjk_fallback">数量</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord cjk_fallback">模型尺寸</span><span class="mopen">(</span><span class="mord cjk_fallback">参数数量</span><span class="mclose">)</span></span></span></span></span></p>
<ul>
<li><strong>通俗解释</strong>：FLOPs（浮点运算次数）是衡量计算量的标准。公式表明，计算预算与数据规模和模型参数数成正比。</li>
<li><strong>示例</strong>：使用100台A800显卡训练一个月，每块A800的吞吐量为210 TFLOPs：<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mtext>总预算</mtext><mo>=</mo><mn>210</mn><mo>×</mo><msup><mn>10</mn><mn>12</mn></msup><mo>×</mo><mn>100</mn><mo>×</mo><mn>30</mn><mo>×</mo><mn>24</mn><mo>×</mo><mn>3600</mn><mo>=</mo><mn>5.4</mn><mo>×</mo><msup><mn>10</mn><mn>22</mn></msup><mi>F</mi><mi>L</mi><mi>O</mi><mi>P</mi><mi>s</mi></mrow><annotation encoding="application/x-tex">总预算 = 210 \times 10^{12} \times 100 \times 30 \times 24 \times 3600 = 5.4 \times 10^{22} FLOPs
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord cjk_fallback">总预算</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">210</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.9474em;vertical-align:-0.0833em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">12</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">100</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">30</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">24</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">3600</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">5.4</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8641em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">22</span></span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="mord mathnormal">L</span><span class="mord mathnormal" style="margin-right:0.13889em;">OP</span><span class="mord mathnormal">s</span></span></span></span></span></p>
</li>
</ul>
<h3 id="_2-数据与模型尺寸的平衡" tabindex="-1"><a class="header-anchor" href="#_2-数据与模型尺寸的平衡"><span>2. <strong>数据与模型尺寸的平衡</strong></span></a></h3>
<p>给定固定预算，数据量与模型尺寸成反比：</p>
<ul>
<li><strong>小模型+大数据</strong>：例如，7B（70亿参数）模型可以训练约10T Tokens。</li>
<li><strong>大模型+小数据</strong>：例如，70B（700亿参数）模型只能训练约1T Tokens。</li>
</ul>
<p>💡 <strong>启发点</strong>：在实际应用中，需要根据任务的需求选择“更多数据”还是“更大模型”。</p>
<hr>
<h3 id="_3-scaling-law实验结果" tabindex="-1"><a class="header-anchor" href="#_3-scaling-law实验结果"><span>3. <strong>Scaling Law实验结果</strong></span></a></h3>
<p>Llama3团队通过实验验证了Scaling Law：</p>
<ul>
<li>在不同预算下（$$6 \times 10<sup 22="">{18}$$到$$10</sup> FLOPs$$），调整模型大小（40M到16B参数）。<img src="/img/user/附件/Pasted image 20250409223919.png" alt="Pasted image 20250409223919.png"></li>
<li>使用幂律公式拟合最优点：<p v-pre class='katex-block'><span class="katex-error" title="ParseError: KaTeX parse error: Can&#x27;t use function &#x27;$&#x27; in math mode at position 27: …\cdot C^\alpha
$̲$![Pasted image…" style="color:#cc0000">N^*(C) = A \cdot C^\alpha
$$![Pasted image 20250409223942.png](/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250409223942.png)
- $$C$$：预算（FLOPs）
- $$N^*$$：最优Token数量
- $$A=0.299$$，$$\alpha=0.537$$![Pasted image 20250409223958.png](/img/user/%E9%99%84%E4%BB%B6/Pasted%20image%2020250409223958.png)

</span></p>
</li>
</ul>
<p>⚠ <strong>常见错误提醒</strong>：</p>
<ol>
<li>忽略了预算对Token数量和模型大小的限制。</li>
<li>未根据实验数据调整模型参数，可能导致资源浪费。</li>
</ol>
<hr>
<h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2>
<p>✅ <strong>步骤1</strong>：确定可用计算预算，例如显卡数量、每日工作时间。<br>
✅ <strong>步骤2</strong>：使用公式估算FLOPs预算，并选择合适的模型和数据规模平衡策略。<br>
✅ <strong>步骤3</strong>：参考Scaling Law实验结果，验证模型与数据组合是否接近最优点。</p>
<hr>
<h2 id="数据表格" tabindex="-1"><a class="header-anchor" href="#数据表格"><span>数据表格</span></a></h2>
<table>
<thead>
<tr>
<th>模型大小 (参数数量)</th>
<th>数据量 (Tokens)</th>
<th>FLOPs预算范围 ($$10^{18}$$ FLOPs)</th>
</tr>
</thead>
<tbody>
<tr>
<td>小模型 (40M)</td>
<td>大量数据</td>
<td>$$6 - 10$$</td>
</tr>
<tr>
<td>中等模型 (7B)</td>
<td>中等数据</td>
<td>$$10 - 100$$</td>
</tr>
<tr>
<td>大模型 (16B)</td>
<td>少量数据</td>
<td>$$100 - 1000$$</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="📈-趋势预测" tabindex="-1"><a class="header-anchor" href="#📈-趋势预测"><span>📈 趋势预测</span></a></h2>
<p>未来预训练中的Scaling Law可能进一步优化：</p>
<ol>
<li><strong>自适应算法</strong>：动态调整模型与数据比例。</li>
<li><strong>硬件优化</strong>：更高效的硬件（如H100）将降低FLOPs成本。</li>
<li><strong>混合训练策略</strong>：结合小模型预热和大模型微调。</li>
</ol>
<hr>
<h2 id="思考-板块" tabindex="-1"><a class="header-anchor" href="#思考-板块"><span>[思考]板块</span></a></h2>
<ol>
<li>如何在有限预算下进一步提升预训练效率？</li>
<li>是否可以通过迁移学习减少对大规模数据的依赖？</li>
<li>Scaling Law是否适用于特定领域（如医学、金融）的定制模型？</li>
</ol>
<hr>
<blockquote>
<p>原文出处：<a href="https://developer.nvidia.com/cuda-gpus" target="_blank" rel="noopener noreferrer">Llama3 Scaling Law</a></p>
</blockquote>
<hr>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 测试不同显卡配置对预训练效率的影响。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 应用Scaling Law公式优化现有项目的资源分配。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 深入研究幂律定则在其他机器学习任务中的应用。</label></li>
</ul>
<hr>
<h2 id="后续追踪" tabindex="-1"><a class="header-anchor" href="#后续追踪"><span>后续追踪</span></a></h2>
<ol>
<li>收集更多实验数据验证Scaling Law在大规模项目中的适用性。</li>
<li>探讨如何利用多模态数据进一步优化预训练。</li>
</ol>
</div></template>


