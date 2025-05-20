<template><div><p>随着人工智能技术的不断发展，智能体（Agent）系统成为了一个热门的研究与应用领域。智能体系统可以在多种场景中实现自动化、智能化的任务处理。本文将介绍智能体系统的框架及其应用，帮助大家更好地理解和使用这些工具。</p>
<hr>
<h2 id="智能体框架" tabindex="-1"><a class="header-anchor" href="#智能体框架"><span>智能体框架</span></a></h2>
<p>构建智能体系统，离不开强大的框架支持。以下是几种常见的智能体框架分类及其特点。
<img src="/img/user/附件/Pasted image 20250505212146.png" alt="Pasted image 20250505212146.png"></p>
<h3 id="全代码框架" tabindex="-1"><a class="header-anchor" href="#全代码框架"><span>全代码框架</span></a></h3>
<p>全代码框架是指需要开发者通过编写代码来实现智能体系统的搭建和功能扩展。以下是两种常用的全代码框架：</p>
<ul>
<li>
<p><strong>Langchain &amp; LangGraph</strong><br>
这些框架提供了便捷的工具，用于管理语言模型（LLM）的调用、构建调用链以及定义工具等功能。它们适合开发者直接通过代码实现复杂的逻辑。</p>
</li>
<li>
<p><strong>LlamaIndex</strong><br>
LlamaIndex 是一个专注于数据索引和查询的框架，能够高效地管理和调用数据资源，特别适合需要处理大规模数据的场景。</p>
</li>
</ul>
<h3 id="多智能体协作框架" tabindex="-1"><a class="header-anchor" href="#多智能体协作框架"><span>多智能体协作框架</span></a></h3>
<p>当需要多个智能体协作完成任务时，多智能体协作框架显得尤为重要。以下是几种常见的多智能体协作框架：</p>
<ul>
<li>
<p><strong>AutoGen</strong><br>
提供了多智能体之间的高效协作机制，适合复杂任务分解与协作场景。</p>
</li>
<li>
<p><strong>CrewAI</strong><br>
专注于团队智能体间的任务分配与协调，能够提升整体任务执行效率。</p>
</li>
<li>
<p><strong>Swarm</strong><br>
模仿群体智能（如蜜蜂群、蚁群）的行为模式，适用于分布式任务处理。</p>
</li>
<li>
<p><strong>CAMEL</strong><br>
提供了灵活的多智能体协作方案，支持不同类型智能体之间的无缝交互。</p>
</li>
</ul>
<h3 id="可视化低代码平台" tabindex="-1"><a class="header-anchor" href="#可视化低代码平台"><span>可视化低代码平台</span></a></h3>
<p>对于不擅长编程或希望快速搭建系统的用户来说，可视化低代码平台是一个非常友好的选择。这类平台通常提供图形化界面，让用户通过拖拽组件或简单配置即可完成智能体系统的搭建。以下是几个典型的低代码平台：</p>
<ul>
<li>
<p><strong>DIfy</strong></p>
<ul>
<li>开源（基于有修改的 Apache 2.0 协议）。</li>
<li>超出免费额度后需要购买套餐。</li>
<li>提供了丰富的工具和模块，适合快速构建和测试原型。</li>
</ul>
</li>
<li>
<p><strong>Coze</strong></p>
<ul>
<li>闭源。</li>
<li>超出免费额度后需要购买套餐。</li>
<li>针对企业和个人用户提供了稳定、高效的平台支持，但由于闭源限制，可能不利于深度定制。</li>
</ul>
</li>
<li>
<p><strong>毕昇</strong></p>
<ul>
<li>开源（基于 Apache 2.0 协议）。</li>
<li>面向企业场景，同时个人用户可在其 demo 平台上免费体验。</li>
<li>提供了强大的功能和灵活性，适合企业需求，同时对个人用户也非常友好。</li>
</ul>
</li>
</ul>
<hr>
<h2 id="使用这些框架时的注意事项" tabindex="-1"><a class="header-anchor" href="#使用这些框架时的注意事项"><span>使用这些框架时的注意事项</span></a></h2>
<p>虽然上述框架能够简化基础任务（如 LLM 调用、工具定义、调用链构建等），但在实际使用中也存在一些潜在的问题需要注意：</p>
<ol>
<li>
<p><strong>抽象层遮蔽底层提示与响应</strong><br>
框架通常会对底层逻辑进行抽象处理，这可能导致用户无法直接接触到底层提示（Prompt）与响应（Response），从而增加了调试难度。</p>
</li>
<li>
<p><strong>定制化修改难度增加</strong><br>
尽管框架封装了许多功能，但这也可能导致对特定需求进行定制化修改时遇到较高的门槛。</p>
</li>
</ol>
<p>因此，在选择框架时，需要根据实际需求权衡其优缺点。如果需要高自由度和深度定制，可以选择全代码框架；如果更关注开发效率和易用性，则可视化低代码平台可能更适合。</p>
<hr>
<h2 id="单智能体应用" tabindex="-1"><a class="header-anchor" href="#单智能体应用"><span>单智能体应用</span></a></h2>
<p>近年来，单智能体在任务规划、执行及排序等方面的应用取得了显著成果。通过设计不同的 prompt 和工作流，结合 OpenAI 模型或 Huggingface 平台上的模型，开发者们实现了以下功能：</p>
<ul>
<li><strong>任务规划</strong>：智能体能够根据输入内容，推导出一系列步骤来完成特定目标。</li>
<li><strong>任务执行</strong>：基于任务规划，智能体能够逐步执行每个步骤。</li>
<li><strong>任务排序</strong>：智能体可以根据优先级对任务进行合理排序。</li>
</ul>
<p>一些典型的单智能体应用包括 BabyAGI、AutoGPT 和 HuggingGPT 等。这些工具为用户提供了强大的自动化能力，能够显著提升工作效率。</p>
<hr>
<h2 id="多智能体应用" tabindex="-1"><a class="header-anchor" href="#多智能体应用"><span>多智能体应用</span></a></h2>
<p>与单智能体不同，多智能体应用侧重于协作与交流。通过多个智能体之间的交互，可以更高效地完成复杂任务。常见的多智能体协作工具包括：</p>
<ul>
<li><strong>Generative Agents</strong>：通过生成式 AI 实现多智能体之间的无缝对话与协作。</li>
<li><strong>MetaGPT</strong>：提供多智能体协作框架，支持复杂任务分解与执行。</li>
<li><strong>GPT-researcher</strong>：专注于研究型任务的多智能体协作工具。</li>
<li><strong>STORM / Co-STORM</strong>：通过多智能体互动解决问题。</li>
</ul>
<p>这些工具不仅扩展了单一智能体的能力，还为团队协作提供了新的可能性。</p>
<hr>
<h2 id="agent-rl-框架" tabindex="-1"><a class="header-anchor" href="#agent-rl-框架"><span>Agent+RL 框架</span></a></h2>
<h3 id="结合-llm-与-rl-的双向优势" tabindex="-1"><a class="header-anchor" href="#结合-llm-与-rl-的双向优势"><span>结合 LLM 与 RL 的双向优势</span></a></h3>
<p>强化学习（RL）与智能体（Agent）是目前基座训练和应用最重要的两个方向之一。在 Agent+RL 框架中，开发者将大语言模型（LLM）作为 Agent 来进行强化学习训练，从而实现以下目标：</p>
<ol>
<li><strong>提升回答质量与交互表现</strong>：通过后续训练，优化 LLM 在特定场景下的行为，使其更适合应用需求。</li>
<li><strong>在特定任务上微调</strong>：通过 RL 微调，进一步提升 LLM 在特定任务上的表现。</li>
</ol>
<p>另一方面，LLM 也能反过来帮助 RL 系统。当 RL 系统遇到复杂输入时，LLM 可以凭借其强大的表示与推理能力预处理信息。此外，LLM 还可以充当奖励函数、世界模型等模块，从而加速 RL Agent 的学习过程。</p>
<hr>
<h2 id="gair-torl-框架" tabindex="-1"><a class="header-anchor" href="#gair-torl-框架"><span>GAIR/ToRL 框架</span></a></h2>
<h3 id="核心理念" tabindex="-1"><a class="header-anchor" href="#核心理念"><span>核心理念</span></a></h3>
<p>GAIR/ToRL 框架的核心在于通过强化学习（RL）使 LLM 能够自主探索和改进工具使用策略，从而减少对人类策划工具使用模式的依赖。简单来说，其目标是让 LLM 自主学习何时以及如何调用工具。</p>
<h3 id="具体做法" tabindex="-1"><a class="header-anchor" href="#具体做法"><span>具体做法</span></a></h3>
<ol>
<li>
<p><strong>工具调用频率控制</strong><br>
为了平衡训练效率，引入超参数 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>C</mi></mrow><annotation encoding="application/x-tex">C</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span></span></span></span>，表示每次响应生成允许的最大工具调用次数。</p>
</li>
<li>
<p><strong>执行环境选择</strong><br>
选择稳定、准确且响应迅速的代码解释器，以确保训练过程顺利进行。</p>
</li>
<li>
<p><strong>错误消息处理</strong><br>
提取关键错误信息，减少上下文长度，从而提高训练效率。</p>
</li>
<li>
<p><strong>沙盒输出掩码</strong><br>
在损失计算中掩盖沙盒环境的输出，以提高训练稳定性。</p>
</li>
<li>
<p><strong>奖励设计</strong><br>
实现基于规则的奖励函数：</p>
<ul>
<li>正确答案获得 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>+</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">+1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">+</span><span class="mord">1</span></span></span></span> 奖励。</li>
<li>错误答案获得 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">1</span></span></span></span> 奖励。</li>
<li>含有不可执行代码的响应会导致 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>−</mo><mn>0.5</mn></mrow><annotation encoding="application/x-tex">-0.5</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">0.5</span></span></span></span> 的奖励减少。</li>
</ul>
</li>
</ol>
<p>在默认实验设置中，仅使用答案正确性的奖励函数（reward）。</p>
<hr>
<h2 id="openmanus-openmanus-rl-框架" tabindex="-1"><a class="header-anchor" href="#openmanus-openmanus-rl-框架"><span>OpenManus/OpenManus-RL 框架</span></a></h2>
<h3 id="核心理念-1" tabindex="-1"><a class="header-anchor" href="#核心理念-1"><span>核心理念</span></a></h3>
<p>OpenManus 框架借鉴了 RAGEN 的 RICO 架构，并在此基础上进一步探索了新的算法结构、多样化的推理范式、复杂的奖励策略以及丰富的基准测试环境。</p>
<h3 id="具体总结" tabindex="-1"><a class="header-anchor" href="#具体总结"><span>具体总结</span></a></h3>
<ol>
<li>
<p><strong>推理模型探索</strong><br>
为了全面评估推理能力，研究选用了以下最先进的推理模型进行基准测试：</p>
<ul>
<li>GPT-O1</li>
<li>Deepseek-R1</li>
<li>QwQ-32B</li>
</ul>
</li>
<li>
<p><strong>替代展开策略</strong><br>
为了提升代理的规划效率和推理鲁棒性，实验了多种展开策略：</p>
<ul>
<li>ToT（Tree of Thoughts）</li>
<li>GoT（Graph of Thoughts）</li>
<li>DFSDT（Depth-First Search Decision Tree）</li>
<li>MCTS（Monte Carlo Tree Search）</li>
</ul>
</li>
<li>
<p><strong>多样化的推理格式</strong><br>
探索了多种推理格式，包括：</p>
<ul>
<li>ReAct（反应式推理）</li>
<li>Outcome-based Reasoning（基于结果的推理）</li>
</ul>
</li>
<li>
<p><strong>后训练策略（Post-Training Strategies）</strong><br>
研究了多种后训练方法，以进一步优化推理能力：</p>
<ul>
<li>SFT（Supervised Fine-Tuning）</li>
<li>GRPO（Gradient Policy Optimization）</li>
<li>PPO（Proximal Policy Optimization）</li>
<li>DPO（Direct Policy Optimization）</li>
</ul>
</li>
</ol>
<hr>
<h3 id="ragen-推理驱动的交互优化框架" tabindex="-1"><a class="header-anchor" href="#ragen-推理驱动的交互优化框架"><span>RAGEN：推理驱动的交互优化框架</span></a></h3>
<h4 id="一句话总结" tabindex="-1"><a class="header-anchor" href="#一句话总结"><span>一句话总结</span></a></h4>
<p>RAGEN 通过 MDP 框架及其独特的“推理-交互链优化”算法，解决了多轮交互和随机环境中的关键挑战；其进阶奖励归一化策略进一步增强了模型在不同复杂任务中的稳定性和表现。</p>
<h4 id="具体实现" tabindex="-1"><a class="header-anchor" href="#具体实现"><span>具体实现</span></a></h4>
<h5 id="_1-使用-mdp-进行建模" tabindex="-1"><a class="header-anchor" href="#_1-使用-mdp-进行建模"><span>1. 使用 MDP 进行建模</span></a></h5>
<p>RAGEN 将模型学习建模为状态和动作序列，通过最大化多轮交互中的累计奖励来优化表现。这里的 MDP（马尔可夫决策过程）是一种经典的强化学习框架，其核心目标是通过以下公式最大化累计奖励：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>R</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow><mi>T</mi></munderover><msup><mi>γ</mi><mi>t</mi></msup><msub><mi>r</mi><mi>t</mi></msub></mrow><annotation encoding="application/x-tex">R = \sum_{t=0}^{T} \gamma^t r_t
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:3.0954em;vertical-align:-1.2671em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.8283em;"><span style="top:-1.8829em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span><span class="mrel mtight">=</span><span class="mord mtight">0</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.2671em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05556em;">γ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8436em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></p>
<p>其中，<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>γ</mi></mrow><annotation encoding="application/x-tex">\gamma</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.05556em;">γ</span></span></span></span> 是折扣因子，<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>r</mi><mi>t</mi></msub></mrow><annotation encoding="application/x-tex">r_t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 是在时间步 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>t</mi></mrow><annotation encoding="application/x-tex">t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6151em;"></span><span class="mord mathnormal">t</span></span></span></span> 的即时奖励。</p>
<h5 id="_2-rico-算法-推理-交互链优化" tabindex="-1"><a class="header-anchor" href="#_2-rico-算法-推理-交互链优化"><span>2. RICO 算法：推理-交互链优化</span></a></h5>
<p>RAGEN 的核心算法 RICO 包括两个阶段：</p>
<ul>
<li><strong>生成阶段</strong>：生成推理驱动的行动轨迹。这一阶段通过模型的推理能力，探索可能的动作序列，并评估其潜在奖励。</li>
<li><strong>更新阶段</strong>：调整策略以优化整条轨迹的奖励。在这一阶段，模型会根据生成阶段的反馈，更新策略参数，以实现更高的累计奖励。</li>
</ul>
<h5 id="_3-奖励归一化策略" tabindex="-1"><a class="header-anchor" href="#_3-奖励归一化策略"><span>3. 奖励归一化策略</span></a></h5>
<p>为了应对多难度任务下的学习稳定性问题，RAGEN 引入了渐进的奖励归一化策略，包括以下几种方法：</p>
<ul>
<li><strong>ARPO（Adaptive Reward Policy Optimization）</strong></li>
<li><strong>BRPO（Balanced Reward Policy Optimization）</strong></li>
<li><strong>GRPO（Gradient-based Reward Policy Optimization）</strong></li>
</ul>
<p>这些策略通过动态调整奖励分布，使得模型能够在复杂任务中保持稳定的学习过程。</p>
<h5 id="_4-模型评估与数据平衡" tabindex="-1"><a class="header-anchor" href="#_4-模型评估与数据平衡"><span>4. 模型评估与数据平衡</span></a></h5>
<p>实验表明，大规模模型在性能上表现更优。然而，训练过程中需要平衡提示多样性与数据新鲜性，以避免过拟合或训练效率低下的问题。</p>
<hr>
<h3 id="rl-agents-全面强化学习算法测试框架" tabindex="-1"><a class="header-anchor" href="#rl-agents-全面强化学习算法测试框架"><span>RL-Agents：全面强化学习算法测试框架</span></a></h3>
<h4 id="一句话总结-1" tabindex="-1"><a class="header-anchor" href="#一句话总结-1"><span>一句话总结</span></a></h4>
<p>RL-Agents 为研究人员提供了一个全面的框架，用于实现和测试多种先进的强化学习算法，包括值迭代、蒙特卡罗树搜索和深度 Q 网络等。</p>
<h4 id="具体实现-1" tabindex="-1"><a class="header-anchor" href="#具体实现-1"><span>具体实现</span></a></h4>
<h5 id="_1-规划算法" tabindex="-1"><a class="header-anchor" href="#_1-规划算法"><span>1. 规划算法</span></a></h5>
<p>RL-Agents 提供了以下经典的规划算法，用于解决不同类型的强化学习任务：</p>
<ul>
<li><strong>值迭代（Value Iteration）</strong></li>
<li><strong>交叉熵法（Cross-Entropy Method, CEM）</strong></li>
<li><strong>蒙特卡罗树搜索（MCTS, Monte Carlo Tree Search）</strong></li>
<li><strong>乐观规划算法（Optimistic Planning Algorithms）</strong></li>
</ul>
<p>这些算法通过模拟环境中的可能路径，寻找最优策略，从而提升决策的准确性。</p>
<h5 id="_2-安全规划" tabindex="-1"><a class="header-anchor" href="#_2-安全规划"><span>2. 安全规划</span></a></h5>
<p>为了在不确定性较高的环境中确保决策安全性，RL-Agents 提供了一系列稳健规划方法：</p>
<ul>
<li><strong>稳健值迭代（Robust Value Iteration）</strong></li>
<li><strong>离散稳健乐观规划（Discrete Robust Optimistic Planning）</strong></li>
<li><strong>基于区间的稳健规划（Interval-based Robust Planning）</strong></li>
</ul>
<p>这些方法通过引入稳健性约束，确保算法在最坏情况下仍能取得较好的结果。</p>
<h5 id="_3-基于值的算法" tabindex="-1"><a class="header-anchor" href="#_3-基于值的算法"><span>3. 基于值的算法</span></a></h5>
<p>RL-Agents 同样支持基于值函数的强化学习算法，包括：</p>
<ul>
<li><strong>DQN（Deep Q-Network）</strong></li>
<li><strong>Fitted-Q</strong></li>
</ul>
<p>这些算法通过估计每个状态-动作对的价值函数 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>Q</mi><mo stretchy="false">(</mo><mi>s</mi><mo separator="true">,</mo><mi>a</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">Q(s, a)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">Q</span><span class="mopen">(</span><span class="mord mathnormal">s</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">a</span><span class="mclose">)</span></span></span></span> 来指导策略更新，其核心目标是近似以下公式：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>Q</mi><mo stretchy="false">(</mo><mi>s</mi><mo separator="true">,</mo><mi>a</mi><mo stretchy="false">)</mo><mo>=</mo><mi>r</mi><mo>+</mo><mi>γ</mi><munder><mrow><mi>max</mi><mo>⁡</mo></mrow><msup><mi>a</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></munder><mi>Q</mi><mo stretchy="false">(</mo><msup><mi>s</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo separator="true">,</mo><msup><mi>a</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">Q(s, a) = r + \gamma \max_{a&#x27;} Q(s&#x27;, a&#x27;)
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">Q</span><span class="mopen">(</span><span class="mord mathnormal">s</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">a</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.5459em;vertical-align:-0.744em;"></span><span class="mord mathnormal" style="margin-right:0.05556em;">γ</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.4306em;"><span style="top:-2.356em;margin-left:0em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">a</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6828em;"><span style="top:-2.786em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span><span class="mop">max</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.744em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">Q</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">s</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8019em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8019em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></span></p>
<h5 id="_4-安全基于值的方法" tabindex="-1"><a class="header-anchor" href="#_4-安全基于值的方法"><span>4. 安全基于值的方法</span></a></h5>
<p>在基于值的方法中，RL-Agents 还支持安全性增强版本，例如：</p>
<ul>
<li><strong>Budgeted Fitted-Q</strong>：通过预算约束来限制某些动作的选择，从而提升策略的安全性。</li>
</ul>
<hr>
</div></template>


