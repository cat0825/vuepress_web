<template><div><h2 id="_1-过程编程-procedural-programming" tabindex="-1"><a class="header-anchor" href="#_1-过程编程-procedural-programming"><span>1. 过程编程（Procedural Programming）</span></a></h2>
<ul>
<li>
<p><strong>定义</strong>：过程编程是以函数为中心的编程范式，强调过程（或算法）的定义和调用。</p>
</li>
<li>
<p><strong>特点</strong>：</p>
<ul>
<li>强调步骤和数据处理的顺序。</li>
<li>代码主要由函数组成，数据和功能分离。</li>
<li>适用于解决简单、线性的任务。</li>
</ul>
</li>
<li>
<p><strong>示例</strong>：</p>
<div class="language-cpp line-numbers-mode" data-highlighter="shiki" data-ext="cpp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> add</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    std</span><span style="--shiki-light:#999999;--shiki-dark:#666666">::</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">cout </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">&#x3C;&#x3C;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> a </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">+</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> b </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">&#x3C;&#x3C;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> std</span><span style="--shiki-light:#999999;--shiki-dark:#666666">::</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">endl</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span># **面向对象编程（Object-Oriented Programming, OOP）**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>• **定义**：面向对象编程通过类和对象来组织代码，强调数据和操作数据的函数绑定在一起。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>• **特点**：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>• 强调封装、继承和多态。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>• 更关注对象之间的交互和状态管理。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>• 适用于复杂系统的建模和开发。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>• **关键概念**：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>• **封装**：将数据和操作数据的代码封装在对象内部，限制外部直接访问。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>• **继承**：通过继承，派生类可以继承父类的属性和方法，减少代码重复。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>• **多态**：允许通过基类指针或引用调用派生类的方法，增强灵活性和扩展性。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>• **示例**：</span></span>
<span class="line"><span>```cpp</span></span>
<span class="line"><span>class Calculator {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    int add(int a, int b) {</span></span>
<span class="line"><span>        return a + b;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    int subtract(int a, int b) {</span></span>
<span class="line"><span>        return a - b;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    Calculator calc;</span></span>
<span class="line"><span>    std::cout &#x3C;&#x3C; calc.add(5, 3) &#x3C;&#x3C; std::endl;</span></span>
<span class="line"><span>    std::cout &#x3C;&#x3C; calc.subtract(5, 3) &#x3C;&#x3C; std::endl;</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="泛型编程-generic-programming" tabindex="-1"><a class="header-anchor" href="#泛型编程-generic-programming"><span><strong>泛型编程（Generic Programming）</strong></span></a></h1>
<p><strong>定义</strong>：泛型编程通过模板来编写与类型无关的代码，支持代码复用，允许在编译时选择类型。</p>
<p>• <strong>特点</strong>：</p>
<p>• 使用模板（函数模板、类模板）实现类型无关的代码。</p>
<p>• 提高代码复用性和灵活性，适用于处理多种类型的数据。</p>
<p>• 关注算法和数据结构的通用性。</p>
<p>• <strong>关键概念</strong>：</p>
<p>• <strong>模板</strong>：C++ 的模板允许编写与数据类型无关的代码，支持类型参数化。</p>
<p>• <strong>类型推导</strong>：通过模板推导机制，编译器能够自动推导出函数或类实例化的具体类型。</p>
<p>• <strong>示例</strong>：</p>
<div class="language-cpp line-numbers-mode" data-highlighter="shiki" data-ext="cpp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#x3C;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">typename</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> T</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">T</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> add</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">T</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> T</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> a </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">+</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    std</span><span style="--shiki-light:#999999;--shiki-dark:#666666">::</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">cout </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">&#x3C;&#x3C;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> add</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">5</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;&#x3C;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> std</span><span style="--shiki-light:#999999;--shiki-dark:#666666">::</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">endl</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // 整数类型</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    std</span><span style="--shiki-light:#999999;--shiki-dark:#666666">::</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">cout </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">&#x3C;&#x3C;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> add</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">3.5</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 2.5</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;&#x3C;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> std</span><span style="--shiki-light:#999999;--shiki-dark:#666666">::</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">endl</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 浮点类型</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="区别与联系" tabindex="-1"><a class="header-anchor" href="#区别与联系"><span><strong>区别与联系</strong></span></a></h1>
<p><strong>1. 过程编程 vs 面向对象编程</strong></p>
<p>• <strong>过程编程</strong>侧重函数和操作的顺序，而<strong>面向对象编程</strong>侧重数据和功能的封装。</p>
<p>• 面向对象编程通过类和对象实现更复杂的模型，提供更高的抽象层次。</p>
<p><strong>2. 面向对象编程 vs 泛型编程</strong></p>
<p>• <strong>面向对象编程</strong>关注对象和类的设计，<strong>泛型编程</strong>关注算法和数据结构的通用性。</p>
<p>• 泛型编程通过模板实现类型无关的代码，可以与面向对象编程结合使用。</p>
<p><strong>3. 过程编程 vs 泛型编程</strong></p>
<p>• <strong>过程编程</strong>关注步骤和功能，<strong>泛型编程</strong>通过模板使得函数和数据结构可以适应不同的数据类型。</p>
<p>• 泛型编程可以看作是过程编程的一种增强，提供了更多的灵活性。</p>
<p><strong>总结</strong></p>
<p>• <strong>过程编程</strong>：适合处理简单的、线性的问题，代码简单直接。</p>
<p>• <strong>面向对象编程</strong>：适合构建复杂的系统，通过类和对象管理代码。</p>
<p>• <strong>泛型编程</strong>：通过模板实现代码复用和类型独立，特别适用于处理通用算法和数据结构。</p>
<p>demodemo</p>
</div></template>


