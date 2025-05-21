import { defineClientConfig } from 'vuepress/client'
import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'

export default defineClientConfig({
  enhance({ app }) {
    // 注册 RepoCard 组件
    app.component('RepoCard', RepoCard)
  },
})
