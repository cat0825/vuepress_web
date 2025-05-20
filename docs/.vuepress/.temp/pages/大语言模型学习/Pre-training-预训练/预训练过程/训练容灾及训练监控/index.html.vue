<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li><strong>分类</strong>：机器学习/深度学习</li>
<li><strong>标签</strong>：训练监控、Loss Spike、困惑度、模型优化</li>
<li><strong>日期</strong>：2023年10月29日</li>
</ul>
<hr>
<h2 id="核心观点总结" tabindex="-1"><a class="header-anchor" href="#核心观点总结"><span>核心观点总结</span></a></h2>
<p>在深度学习模型训练中，监控和优化是提高模型性能的关键。本文从训练容灾、Loss监控、困惑度（Perplexity）分析等方面，探讨了如何通过细致的观察和调整策略来优化模型性能，避免训练过程中的潜在问题。</p>
<hr>
<h2 id="核心内容解析" tabindex="-1"><a class="header-anchor" href="#核心内容解析"><span>核心内容解析</span></a></h2>
<h3 id="监控-loss-和-spike" tabindex="-1"><a class="header-anchor" href="#监控-loss-和-spike"><span>监控 Loss 和 Spike</span></a></h3>
<ol>
<li>
<p><strong>Loss 分开监控</strong><br>
对于不同类别的数据（如中文知识、英文知识、代码），需要分别监控Loss值，以便发现异常。</p>
</li>
<li>
<p><strong>Loss Spike（毛刺现象）</strong><br>
Loss突然激增或激减可能是数据问题的信号，例如脏数据或乱码。虽然目前尚无研究证明Loss Spike对模型有不可逆的损害，但避免其发生始终是更优的选择。</p>
<ul>
<li>⚠ <strong>注意</strong>：高Loss可能由乱码数据引起，低Loss可能由全是换行符的数据引起。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="困惑度-perplexity-分析" tabindex="-1"><a class="header-anchor" href="#困惑度-perplexity-分析"><span>困惑度（Perplexity）分析</span></a></h3>
<p>困惑度是衡量语言模型好坏的重要指标。困惑度越低，说明模型对下一个单词的预测越准确，性能越好。</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mtext>Perplexity(Model)</mtext><mo>=</mo><mi>exp</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mo>−</mo><mfrac><mn>1</mn><mi>N</mi></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><mi>log</mi><mo>⁡</mo><mi>P</mi><mo stretchy="false">(</mo><msub><mi>w</mi><mi>i</mi></msub><mi mathvariant="normal">∣</mi><msub><mi>w</mi><mn>1</mn></msub><mo separator="true">,</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mo separator="true">,</mo><msub><mi>w</mi><mrow><mi>i</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy="false">)</mo><mo fence="true">)</mo></mrow></mrow><annotation encoding="application/x-tex">\text{Perplexity(Model)} = \exp \left( -\frac{1}{N} \sum_{i=1}^N \log P(w_i | w_1, ..., w_{i-1}) \right)
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord text"><span class="mord">Perplexity(Model)</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:3.106em;vertical-align:-1.2777em;"></span><span class="mop">exp</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size4">(</span></span><span class="mord">−</span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3214em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.8283em;"><span style="top:-1.8723em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.10903em;">N</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.2777em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0269em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord">∣</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0269em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">...</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0269em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size4">)</span></span></span></span></span></span></span></p>
<ul>
<li>通用语料的困惑度变化规律：
<ul>
<li>初期：先升后降。</li>
<li>降低配比数据：可能会有上升趋势。</li>
<li>新增领域数据：呈现下降趋势。</li>
</ul>
</li>
</ul>
<p>💡 <strong>启发点</strong>：通过随机抽样200个样本作为监控基准，可以有效追踪困惑度的变化。</p>
<hr>
<h3 id="解决-loss-spike-的方法" tabindex="-1"><a class="header-anchor" href="#解决-loss-spike-的方法"><span>解决 Loss Spike 的方法</span></a></h3>
<ol>
<li>
<p>✅ <strong>更换Checkpoint</strong><br>
找到出现问题的最近Step，重新训练模型。</p>
</li>
<li>
<p>✅ <strong>减小学习率 $$\epsilon$$ 的大小</strong><br>
从优化器层面减少梯度更新幅度。</p>
</li>
<li>
<p>✅ <strong>浅层梯度缩放</strong><br>
为浅层梯度更新值乘以一个缩放系数，降低梯度更新幅度。</p>
</li>
<li>
<p>✅ <strong>采用WSD训练策略</strong><br>
使用miniCPM提出的WSD（Weight Scaling Decay）训练方法。</p>
</li>
<li>
<p>✅ <strong>引入z-loss正则化</strong><br>
控制Softmax归一化增长，避免梯度爆炸。</p>
</li>
</ol>
<hr>
<h2 id="常见错误警告" tabindex="-1"><a class="header-anchor" href="#常见错误警告"><span>常见错误警告</span></a></h2>
<blockquote>
<p><strong>警告区块</strong></p>
<ul>
<li>忽略Loss Spike可能导致模型训练失败。</li>
<li>未分开监控不同类别数据的Loss可能遮蔽问题来源。</li>
<li>困惑度监控样本过少可能导致误判结果。</li>
</ul>
</blockquote>
<hr>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 定期检查训练过程中各类数据的Loss趋势。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 每次训练前采样200个样本，建立困惑度基准。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 配置自动化监控系统，实时捕捉Loss Spike。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 学习并应用WSD策略和z-loss正则化技术。</label></li>
</ul>
<hr>
<h2 id="📈-趋势预测" tabindex="-1"><a class="header-anchor" href="#📈-趋势预测"><span>📈 趋势预测</span></a></h2>
<p>随着模型规模的不断扩大，训练过程中的异常监控将更加重要。未来可能会出现专门针对超大规模模型的自动容灾与优化工具。</p>
<hr>
<h2 id="思考-延伸问题" tabindex="-1"><a class="header-anchor" href="#思考-延伸问题"><span>[思考] 延伸问题</span></a></h2>
<ol>
<li>如何进一步细化Loss和困惑度的监控策略，以适配多语言、多领域数据？</li>
<li>是否可以通过自动化手段更高效地定位并修复Loss Spike问题？</li>
<li>除了z-loss正则化，还有哪些新型正则化方法可以应用于大规模模型训练？</li>
</ol>
<hr>
<blockquote>
<p><strong>来源</strong>：本文基于GLM130B技术报告及相关资料整理而成。</p>
</blockquote>
</div></template>


