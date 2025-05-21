<template><div><RepoCard repo="cat0825/vuepress_web" /><div class="link-card">
  <a href="/notes_bak/大语言模型学习/导航.md">
    <h3>大语言模型学习</h3>
    <p>探索大语言模型的核心概念、架构和应用</p>
  </a>
</div>
<div class="link-card">
  <a href="/notes_bak/关于我.md">
    <h3>关于我</h3>
    <p>了解更多关于我的信息</p>
  </a>
</div>
</div></template>


<script setup>
import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
</script>
<style>
.link-card {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  transition: all 0.25s ease;
  background-color: var(--vp-c-bg-soft);
}

.link-card:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.link-card a {
  text-decoration: none;
  color: inherit;
  display: block;
}

.link-card h3 {
  margin: 0;
  font-size: 1.2rem;
  color: var(--vp-c-brand);
}

.link-card p {
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}
</style>