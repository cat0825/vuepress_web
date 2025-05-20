<template><div><p><strong>分类</strong>：数据科学<br>
<strong>标签</strong>：数据合成、质量过滤、模型训练<br>
<strong>日期</strong>：2023年10月25日</p>
<h2 id="数据生产合成" tabindex="-1"><a class="header-anchor" href="#数据生产合成"><span>数据生产合成</span></a></h2>
<p>数据生产合成的核心在于通过多样化的 prompt（提示）设计来满足大模型在不同专项能力上的需求。这通常通过以下几种方法实现：
<img src="/img/user/附件/Pasted image 20250410222852.png" alt="Pasted image 20250410222852.png"></p>
<h3 id="生产合成-prompt" tabindex="-1"><a class="header-anchor" href="#生产合成-prompt"><span>生产合成 Prompt</span></a></h3>
<ol>
<li><strong>Self-Instruct 方法</strong>：将技能库划分为不同的任务类型（task_type），为每个类型准备一些种子提示（seed prompt）。然后随机选择种子，利用强大模型生成更多问题。</li>
<li><strong>启发式规则合成</strong>：通过各种启发式规则收集不同任务类型的数据集，并进行适当改写。改写可以通过强大模型完成，生成不同格式和风格的 prompt。</li>
</ol>
<h3 id="生产合成-answer" tabindex="-1"><a class="header-anchor" href="#生产合成-answer"><span>生产合成 Answer</span></a></h3>
<p>使用效果好的模型如 GPT-4 来生成答案是优选方案。对于成本敏感或中文数据为主的场景，可选择在本地部署模型如 Qwen_72B。</p>
<h2 id="数据质量过滤" tabindex="-1"><a class="header-anchor" href="#数据质量过滤"><span>数据质量过滤</span></a></h2>
<h3 id="ifd-过滤" tabindex="-1"><a class="header-anchor" href="#ifd-过滤"><span>IFD 过滤</span></a></h3>
<p>数据质量过滤的关键在于根据指令跟踪难度筛选数据。初步训练阶段，模型通过内在的指令辨别能力评估数据集质量。</p>
<p><img src="/img/user/附件/Pasted image 20250410222910.png" alt="Pasted image 20250410222910.png"></p>
<h3 id="总体流程" tabindex="-1"><a class="header-anchor" href="#总体流程"><span>总体流程</span></a></h3>
<ol>
<li><strong>经验学习</strong>：从简单经验中学习，强迫模型首先熟悉目标数据集的一个子集。</li>
<li><strong>多样性确保</strong>：在指令嵌入上使用 K-Means 聚类方法，确保初始模型遇到足够多样的指令。</li>
</ol>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考"><span>思考</span></a></h2>
<ul>
<li>如何在数据合成过程中更高效地提高 prompt 的多样性？</li>
<li>在数据质量过滤中，如何自动化评估指令执行难度？</li>
<li>是否有其他更有效的方法来优化小模型的训练过程？</li>
</ul>
<blockquote>
<p>原始出处：<a href="https://github.com/vndee/llm-sandbox" target="_blank" rel="noopener noreferrer">https://github.com/vndee/llm-sandbox</a>、<a href="https://arxiv.org/abs/2410.23074" target="_blank" rel="noopener noreferrer">https://arxiv.org/abs/2410.23074</a></p>
</blockquote>
<h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2>
<ol>
<li>✅ 划分技能库并准备种子提示。</li>
<li>⚠ 使用启发式规则收集和改写数据。</li>
<li>❗ 使用强大模型生成答案并进行模型训练。</li>
</ol>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p>警告：在数据合成过程中，忽视多样性可能导致模型过拟合。</p>
</blockquote>
<h2 id="💡-启发点" tabindex="-1"><a class="header-anchor" href="#💡-启发点"><span>💡 启发点</span></a></h2>
<ul>
<li>利用强大模型进行数据合成可以显著提升生成效果。</li>
<li>数据质量过滤通过指令辨别能力提高整体数据集质量。</li>
</ul>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul>
<li>研究更多启发式规则以优化 prompt 合成。</li>
<li>探索自动化评估指令执行难度的方法。</li>
<li>试验不同模型组合以优化训练效果。</li>
</ul>
<h2 id="📈-趋势预测" tabindex="-1"><a class="header-anchor" href="#📈-趋势预测"><span>📈 趋势预测</span></a></h2>
<p>未来，随着大模型需求的增加，数据合成和质量过滤技术将会更加智能化和自动化，以支持更复杂的任务类型。</p>
<h2 id="后续追踪" tabindex="-1"><a class="header-anchor" href="#后续追踪"><span>后续追踪</span></a></h2>
<ul>
<li>进一步探索自我指导的方式来评估指令难度。</li>
<li>开发更高效的数据质量过滤算法。</li>
</ul>
</div></template>


