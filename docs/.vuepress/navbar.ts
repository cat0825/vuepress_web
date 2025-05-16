import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/', icon: 'material-symbols:home' },
  { text: '博客', link: '/blog/', icon: 'material-symbols:article' },
  { text: '标签', link: '/blog/tags/', icon: 'material-symbols:label' },
  { text: '归档', link: '/blog/archives/', icon: 'material-symbols:archive' },
  {
    text: '笔记',
    icon: 'material-symbols:menu-book',
    items: [
      { 
        text: '大语言模型', 
        link: '/notes_bak/大语言模型学习/导航.md',
        icon: 'material-symbols:psychology'
      },
      { 
        text: 'LeetCode', 
        link: '/notes_bak/leetcode/',
        icon: 'material-symbols:code'
      },
      { 
        text: 'C++ Primer', 
        link: '/notes_bak/c++ primer plus/',
        icon: 'material-symbols:terminal'
      },
      { 
        text: '机器学习', 
        link: '/notes_bak/机器学习/',
        icon: 'material-symbols:science'
      }
    ]
  },
])
