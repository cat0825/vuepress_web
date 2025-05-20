import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',

  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'github', link: 'https://github.com/cat0825' },
  ],
  // navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  // footer: {
  //   message: 'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
  //   copyright: '',
  // },

  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    avatar: 'https://theme-plume.vuejs.press/plume.png',
    name: 'Rāna(Bass Ver.)',
    description: '一只区...',
    // circle: true,
    // location: '',
    // organization: '',
  },

  navbar: [
    { text: '首页', link: '/', icon: 'material-symbols:home-outline' },
    { text: '博客', link: '/blog/', icon: 'material-symbols:article-outline' },
    {
      text: '学习笔记',
      icon: 'material-symbols:menu-book',
      items: [
        {
          text: '大语言模型',
          link: '/大语言模型学习/导航/',
          icon: 'material-symbols:smart-toy-outline'
        },
        {
          text: '机器学习',
          link: '/机器学习/导航/',
          icon: 'material-symbols:psychology-outline'
        },
        {
          text: 'C++ Primer Plus',
          link: '/c++-primer-plus/导航/',
          icon: 'material-symbols:code-outline'
        },
        {
          text: 'LeetCode',
          link: '/leetcode/导航/',
          icon: 'material-symbols:code-blocks-outline'
        },
        {
          text: '毕业设计',
          link: '/毕业设计/导航/',
          icon: 'material-symbols:school-outline'
        },
        {
          text: 'Thino',
          link: '/thino/导航/',
          icon: 'material-symbols:terminal-outline'
        },
        {
          text: 'Transformer',
          link: '/transformer/导航/',
          icon: 'material-symbols:architecture-outline'
        }
      ]
    }
  ],
  notes,

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '公告板标题',
  //   content: '公告板内容',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  // transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
  //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  // },

})
