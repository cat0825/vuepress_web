<template><div><h2 id="分类" tabindex="-1"><a class="header-anchor" href="#分类"><span>分类</span></a></h2>
<p>自动推断</p>
<h2 id="标签" tabindex="-1"><a class="header-anchor" href="#标签"><span>标签</span></a></h2>
<ul>
<li>深度学习</li>
<li>强化学习</li>
<li>人类反馈</li>
</ul>
<h2 id="日期" tabindex="-1"><a class="header-anchor" href="#日期"><span>日期</span></a></h2>
<p>2025年4月12日</p>
<hr>
<h2 id="研究背景" tabindex="-1"><a class="header-anchor" href="#研究背景"><span>研究背景</span></a></h2>
<p>深度学习中的人类偏好学习（RLHF）首次在2017年的论文《Deep Reinforcement Learning from Human Preferences》中被提出。最初的目的是解决复杂强化学习任务中环境奖励函数设计的问题。强化学习在许多任务中面临目标复杂、难以定义奖励函数的问题，导致难以将人类实际目标传达给智能体。不正确的、有偏的奖励函数会导致智能体过分利用奖励函数，产生reward hacking问题，即实际学到的行为与人类期望不符合，甚至有害。这种奖励函数的设计需要大量专业人士的精力，而现有方法如逆强化学习和模仿学习在处理复杂行为时存在局限性，直接使用人类反馈作为奖励函数成本过高。</p>
<h2 id="研究目标" tabindex="-1"><a class="header-anchor" href="#研究目标"><span>研究目标</span></a></h2>
<p>为了解决没有明确定义奖励函数的强化学习问题，需要满足以下几点：</p>
<ol>
<li>✅ 能够解决那些人类只能识别期望行为，但不一定能提供示范（demonstration）的任务。</li>
<li>⚠ 允许非专家用户对智能体进行教导。</li>
<li>❗ 能够扩展到大型问题。</li>
<li>在用户反馈方面经济高效。</li>
</ol>
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2>
<blockquote>
<p>在设计奖励函数时，容易产生偏见或错误，导致智能体行为偏离期望。</p>
</blockquote>
<h2 id="💡启发点" tabindex="-1"><a class="header-anchor" href="#💡启发点"><span>💡启发点</span></a></h2>
<p>使用人类反馈作为奖励函数是一种创新，能够有效地传达人类的期望，即使在复杂任务中。</p>
<h2 id="行动清单" tabindex="-1"><a class="header-anchor" href="#行动清单"><span>行动清单</span></a></h2>
<ul>
<li>调查现有RLHF技术的应用领域。</li>
<li>评估RLHF在不同任务中的效果。</li>
<li>研究如何降低人类反馈成本。</li>
</ul>
<h2 id="后续追踪" tabindex="-1"><a class="header-anchor" href="#后续追踪"><span>后续追踪</span></a></h2>
<ul>
<li>探索RLHF在其他领域的应用。</li>
<li>开发更高效的用户反馈机制。</li>
</ul>
<blockquote>
<p>引用: Deep Reinforcement Learning from Human Preferences, https://arxiv.org/pdf/1706.03741</p>
</blockquote>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考"><span>[思考]</span></a></h2>
<ol>
<li>如何确保用户反馈的准确性和一致性？</li>
<li>RLHF能否应用于其他机器学习领域？</li>
<li>在没有专家参与的情况下，如何保证智能体的训练质量？</li>
</ol>
</div></template>


