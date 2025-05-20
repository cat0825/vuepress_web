<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li>分类：自然语言处理</li>
<li>标签：BERT, 预训练模型, NLP, 深度学习</li>
<li>日期：2025年4月12日</li>
</ul>
<h2 id="内容处理" tabindex="-1"><a class="header-anchor" href="#内容处理"><span>内容处理</span></a></h2>
<p>BERT（Bidirectional Encoder Representation from Transformers）是一种用于自然语言处理的预训练模型，主要用于替代传统的Word2Vec。通过两个核心任务：Masked Language Model (MLM) 和 Next Sentence Prediction (NSP)，BERT可以学习更丰富的文本表征。
<img src="/img/user/附件/Pasted image 20250424113448.png" alt="Pasted image 20250424113448.png">
<img src="/img/user/附件/Pasted image 20250424113459.png" alt="Pasted image 20250424113459.png"></p>
<h3 id="bert-embedding" tabindex="-1"><a class="header-anchor" href="#bert-embedding"><span>BERT Embedding</span></a></h3>
<p>BERT的输入编码向量由三个嵌入特征组成：</p>
<ul>
<li><strong>位置嵌入</strong>：将单词的位置信息编码为特征向量，帮助模型理解单词之间的位置关系。</li>
<li><strong>Token嵌入</strong>：将单词分解为更小的token，例如‘playing’被拆分成‘play’和‘ing’。</li>
<li><strong>Segment嵌入</strong>：用于区分两个句子，例如判断句子B是否为句子A的后续部分。</li>
</ul>
<h3 id="masked-lm-mlm" tabindex="-1"><a class="header-anchor" href="#masked-lm-mlm"><span>Masked LM (MLM)</span></a></h3>
<p>在训练过程中，约15%的单词会被替换为[MASK]，并通过上下文预测这些被掩盖的单词。具体步骤包括：</p>
<p>✅ 80%的tokens替换为[MASK]以融合双向语义信息。</p>
<p>⚠ 10%的tokens替换为随机单词以增强纠错能力。</p>
<p>❗ 10%的tokens保持不变以提供模型偏向。</p>
<h3 id="next-sentence-prediction-nsp" tabindex="-1"><a class="header-anchor" href="#next-sentence-prediction-nsp"><span>Next Sentence Prediction (NSP)</span></a></h3>
<p>BERT通过成对的句子进行训练，预测第二个句子是否是原始文档中的后续句子。50%的句子对是前后关系，另50%是随机组合。</p>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p>⚠ 在使用BERT进行微调时，务必确保输入数据格式正确，否则可能导致不准确的预测结果。</p>
</blockquote>
<h2 id="💡启发点" tabindex="-1"><a class="header-anchor" href="#💡启发点"><span>💡启发点</span></a></h2>
<ul>
<li>BERT通过双向语境学习解决了一词多义的问题。</li>
<li>使用随机替换和保持不变的方法提高了模型的泛化能力。</li>
</ul>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ol>
<li>探索BERT在不同NLP任务中的应用。</li>
<li>研究其他预训练模型与BERT的比较。</li>
<li><img src="/img/user/附件/Pasted image 20250424113517.png" alt="Pasted image 20250424113517.png"></li>
<li>实施BERT微调以提高特定任务的性能。</li>
</ol>
<h2 id="数据转换" tabindex="-1"><a class="header-anchor" href="#数据转换"><span>数据转换</span></a></h2>
<table>
<thead>
<tr>
<th>特征类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>位置嵌入</td>
<td>编码单词位置信息</td>
</tr>
<tr>
<td>Token嵌入</td>
<td>将单词拆分为小单位</td>
</tr>
<tr>
<td>Segment嵌入</td>
<td>区分句子对中的两个句子</td>
</tr>
</tbody>
</table>
<h2 id="来源标注" tabindex="-1"><a class="header-anchor" href="#来源标注"><span>来源标注</span></a></h2>
<blockquote>
<p>原始来源：[选自提供文本内容]</p>
</blockquote>
</div></template>


