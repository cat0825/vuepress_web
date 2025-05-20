<template><div><h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h2>
<ul>
<li>分类：机器学习算法</li>
<li>标签：价值迭代，动态规划，贝尔曼方程，策略评估</li>
<li>日期：2025年4月10日</li>
</ul>
<h2 id="内容处理" tabindex="-1"><a class="header-anchor" href="#内容处理"><span>内容处理</span></a></h2>
<h3 id="核心观点" tabindex="-1"><a class="header-anchor" href="#核心观点"><span>核心观点</span></a></h3>
<p>价值迭代算法是一种用于求解马尔可夫决策过程（MDP）的动态规划方法。它通过反复更新状态价值函数，直到收敛到一个最优值。然后，利用这个最优值来提取最优策略。与策略迭代不同，价值迭代直接利用最优贝尔曼方程进行更新。</p>
<h3 id="重点段落" tabindex="-1"><a class="header-anchor" href="#重点段落"><span>重点段落</span></a></h3>
<ol>
<li>
<p><strong>价值迭代公式</strong>：
价值迭代的核心公式是：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msub><mi>V</mi><mrow><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy="false">(</mo><mi>s</mi><mo stretchy="false">)</mo><mo>=</mo><munder><mrow><mi>max</mi><mo>⁡</mo></mrow><mrow><mi>a</mi><mo>∈</mo><mi>A</mi></mrow></munder><mrow><mo fence="true">{</mo><mi>r</mi><mo stretchy="false">(</mo><mi>s</mi><mo separator="true">,</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>γ</mi><munder><mo>∑</mo><msup><mi>s</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></munder><mi>P</mi><mo stretchy="false">(</mo><msup><mi>s</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi mathvariant="normal">∣</mi><mi>s</mi><mo separator="true">,</mo><mi>a</mi><mo stretchy="false">)</mo><msub><mi>V</mi><mi>k</mi></msub><mo stretchy="false">(</mo><msup><mi>s</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">)</mo><mo fence="true">}</mo></mrow></mrow><annotation encoding="application/x-tex">V_{k+1}(s) = \max_{a \in A} \left\{ r(s, a) + \gamma \sum_{s&#x27;} P(s&#x27; | s, a) V_k(s&#x27;) \right\}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">s</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:3.044em;vertical-align:-1.294em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.4306em;"><span style="top:-2.3557em;margin-left:0em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">a</span><span class="mrel mtight">∈</span><span class="mord mathnormal mtight">A</span></span></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span><span class="mop">max</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.7717em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size4">{</span></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mopen">(</span><span class="mord mathnormal">s</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">a</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.05556em;">γ</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.05em;"><span style="top:-1.856em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">s</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6828em;"><span style="top:-2.786em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.294em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">s</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8019em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord">∣</span><span class="mord mathnormal">s</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">a</span><span class="mclose">)</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">s</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8019em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mclose">)</span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size4">}</span></span></span></span></span></span></span></p>
</li>
<li>
<p><strong>算法流程</strong>：</p>
<ul>
<li>随机初始化状态价值函数 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi><mo stretchy="false">(</mo><mi>s</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">V(s)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mopen">(</span><span class="mord mathnormal">s</span><span class="mclose">)</span></span></span></span>。</li>
<li>反复更新每个状态的价值，直到相邻两次迭代的变化小于给定阈值。</li>
<li>提取最优策略 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>π</mi><mo stretchy="false">(</mo><mi>s</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\pi(s)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">π</span><span class="mopen">(</span><span class="mord mathnormal">s</span><span class="mclose">)</span></span></span></span>。</li>
</ul>
</li>
<li>
<p><strong>代码示例</strong>：</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<p>class ValueIteration:
&quot;&quot;&quot; 价值迭代算法 &quot;&quot;&quot;
for s in range(self.env.ncol * self.env.nrow):
qsa_list = [] # 开始计算状态s下的所有Q(s,a)价值
for a in range(4):
qsa = 0
for res in self.env.P[s][a]:
p, next_state, r, done = res
qsa += p * (r + self.gamma * self.v[next_state] * (1 - done))
qsa_list.append(qsa) # 这一行和下一行代码是价值迭代和策略迭代的主要区别
new_v[s] = max(qsa_list)
max_diff = max(max_diff, abs(new_v[s] - self.v[s]))
self.v = new_v
if max_diff &lt; self.theta: break # 满足收敛条件,退出评估迭代
cnt += 1
print(&quot;价值迭代一共进行%d轮&quot; % cnt)
self.get_policy()
def get_policy(self): # 根据价值函数导出一个贪婪策略
for s in range(self.env.nrow * self.env.ncol):
qsa_list = []
for a in range(4):
qsa = 0
for res in self.env.P[s][a]:
p, next_state, r, done = res
qsa += p * (r + self.gamma * self.v[next_state] * (1 - done))
qsa_list.append(qsa)
maxq = max(qsa_list)
cntq = qsa_list.count(maxq) # 计算有几个动作得到了最大的Q值
# 让这些动作均分概率
self.pi[s] = [1 / cntq if q == maxq else 0 for q in qsa_list]</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 技术术语解释</span></span>
<span class="line"><span>- **最优贝尔曼方程**：一种用于确定最优策略的方程，通过最大化期望回报来更新状态价值。</span></span>
<span class="line"><span>- **状态价值函数**：表示在给定策略下，从某一状态开始的期望回报。</span></span>
<span class="line"><span>- **策略评估**：计算在某策略下，每个状态的期望回报。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 操作步骤</span></span>
<span class="line"><span>1. ✅ 随机初始化状态价值函数 $V(s)$。</span></span>
<span class="line"><span>2. ⚠ 检查相邻两次迭代的变化是否小于阈值。</span></span>
<span class="line"><span>3. ❗ 提取最优策略 $\pi(s)$。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 常见错误</span></span>
<span class="line"><span>> **警告**：在更新过程中，确保所有状态都被正确地遍历和更新，以免导致收敛不正确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 💡启发点</span></span>
<span class="line"><span>- 价值迭代直接利用最优贝尔曼方程，减少了策略评估与策略更新的交替过程。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 行动清单</span></span>
<span class="line"><span>- 实现一个简单的价值迭代算法。</span></span>
<span class="line"><span>- 测试不同阈值对收敛速度的影响。</span></span>
<span class="line"><span>- 比较价值迭代与策略迭代的效率。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 📈趋势预测</span></span>
<span class="line"><span>随着计算能力的提升，价值迭代算法在更大规模问题上的应用将更加广泛，并且可能会与其他优化算法结合使用以提高效率。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 后续追踪</span></span>
<span class="line"><span>- 探索价值迭代在非确定性环境中的应用。</span></span>
<span class="line"><span>- 研究结合深度学习的价值迭代方法。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## [思考]板块</span></span>
<span class="line"><span>1. 如何选择合适的收敛阈值以平衡计算效率与结果精度？</span></span>
<span class="line"><span>2. 在实际应用中，如何处理状态空间过大的问题？</span></span>
<span class="line"><span>3. 价值迭代能否与其他强化学习算法结合使用以提高性能？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>> 来源：本文内容基于对价值迭代算法的解析，原始出处未提供。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


