import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'en-US',
  title: 'My Vuepress Site',
  description: '',

  head: [
    // 配置站点图标
    ['link', { rel: 'icon', type: 'image/png', href: 'https://theme-plume.vuejs.press/favicon-32x32.png' }],
  ],

  bundler: viteBundler(),
  shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用

  theme: plumeTheme({
    /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
    // hostname: 'https://your_site_url',

    /* 文档仓库配置，用于 editLink */
    // docsRepo: '',
    // docsDir: 'docs',
    // docsBranch: '',

    /* 页内信息 */
    // editLink: true,
    // lastUpdated: true,
    // contributors: true,
    // changelog: false,

    /**
     * 博客
     * @see https://theme-plume.vuejs.press/config/basic/#blog
     */
    // blog: false, // 禁用博客
    // blog: {
    //   postList: true, // 是否启用文章列表页
    //   tags: true, // 是否启用标签页
    //   archives: true, // 是否启用归档页
    //   categories: true, // 是否启用分类页
    //   postCover: 'right', // 文章封面位置
    //   pagination: 15, // 每页显示文章数量
    // },

    /* 博客文章页面链接前缀 */
    article: '/article/',

    /**
     * 编译缓存，加快编译速度
     * @see https://theme-plume.vuejs.press/config/basic/#cache
     */
    cache: 'filesystem',

    /**
     * 为 markdown 文件自动添加 frontmatter 配置
     * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
     */
    // autoFrontmatter: {
    //   permalink: true,  // 是否生成永久链接
    //   createTime: true, // 是否生成创建时间
    //   title: true,      // 是否生成标题
    // },

    /* 本地搜索, 默认启用 */
    search: { provider: 'local' },

    /**
     * Algolia DocSearch
     * 启用此搜索需要将 本地搜索 search 设置为 false
     * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
     */
    // search: {
    //   provider: 'algolia',
    //   appId: '',
    //   apiKey: '',
    //   indexName: '',
    // },

    /**
     * Shiki 代码高亮
     * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
     */
    // codeHighlighter: {
    //   twoslash: true, // 启用 twoslash
    //   whitespace: true, // 启用 空格/Tab 高亮
    //   lineNumbers: true, // 启用行号
    // },

    /* 文章字数统计、阅读时间，设置为 false 则禁用 */
    // readingTime: true,

    /**
      * markdown
      * @see https://theme-plume.vuejs.press/config/markdown/
      */
    // markdown: {
    //   abbr: true,         // 启用 abbr 语法  *[label]: content
    //   annotation: true,   // 启用 annotation 语法  [+label]: content
    //   pdf: true,          // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
    //   caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
    //   plot: true,         // 启用隐秘文本语法 !!xxxx!!
    //   bilibili: true,     // 启用嵌入 bilibili视频 语法 @[bilibili](bid)
    //   youtube: true,      // 启用嵌入 youtube视频 语法 @[youtube](video_id)
    //   artPlayer: true,    // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)
    //   audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)
    //   icons: true,        // 启用内置图标语法  ::icon-name::
    //   codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)
    //   replit: true,       // 启用嵌入 replit 语法 @[replit](user/repl-name)
    //   codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
    //   jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
    //   npmTo: true,        // 启用 npm-to 容器  ::: npm-to
    //   demo: true,         // 启用 demo 容器  ::: demo
    //   repl: {             // 启用 代码演示容器
    //     go: true,         // ::: go-repl
    //     rust: true,       // ::: rust-repl
    //     kotlin: true,     // ::: kotlin-repl
    //   },
    //   math: {             // 启用数学公式
    //     type: 'katex',
    //   },
    //   chartjs: true,      // 启用 chart.js
    //   echarts: true,      // 启用 ECharts
    //   mermaid: true,      // 启用 mermaid
    //   flowchart: true,    // 启用 flowchart
    //   image: {
    //     figure: true,     // 启用 figure
    //     lazyload: true,   // 启用图片懒加载
    //     mark: true,       // 启用图片标记
    //     size: true,       // 启用图片大小
    //   },
    //   include: true,      // 在 Markdown 文件中导入其他 markdown 文件内容
    //   imageSize: 'local', // 启用 自动填充 图片宽高属性，避免页面抖动
    // },

    /**
     * 水印
     * @see https://theme-plume.vuejs.press/guide/features/watermark/
     */
    // watermark: true,

    /**
     * 评论 comments
     * @see https://theme-plume.vuejs.press/guide/features/comments/
     */
    // comment: {
    //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
    //   comment: true,
    //   repo: '',
    //   repoId: '',
    //   category: '',
    //   categoryId: '',
    //   mapping: 'pathname',
    //   reactionsEnabled: true,
    //   inputPosition: 'top',
    // },

    /**
     * 资源链接替换
     * @see https://theme-plume.vuejs.press/guide/features/replace-assets/
     */
    // replaceAssets: 'https://cdn.example.com',

    /**
     * 加密功能
     * @see https://theme-plume.vuejs.press/guide/features/encryption/
     */
    // encrypt: {},

    sidebar: {
      '/notes/': [
        {
          text: '笔记',
          children: [
            '/notes/README.md',
          ],
        },
      ],
      '/notes_bak/': [
        {
          text: '大语言模型学习',
          children: [
            '/notes_bak/大语言模型学习/导航.md',
            {
              text: '后训练',
              link: '/notes_bak/大语言模型学习/后训练/'
            },
            {
              text: 'Common Models常见模型',
              link: '/notes_bak/大语言模型学习/Common-Models常见模型/'
            },
            {
              text: 'Positional Encoding位置编码',
              link: '/notes_bak/大语言模型学习/Positional-Encoding位置编码/'
            },
            {
              text: 'Pre-training 预训练',
              link: '/notes_bak/大语言模型学习/Pre-training-预训练/'
            },
            {
              text: 'RL强化学习基础',
              link: '/notes_bak/大语言模型学习/RL强化学习基础/'
            },
            {
              text: '大模型应用',
              link: '/notes_bak/大语言模型学习/大模型应用/'
            },
            {
              text: '训练推理优化',
              link: '/notes_bak/大语言模型学习/训练推理优化/'
            },
            {
              text: 'Attention注意力机制',
              link: '/notes_bak/大语言模型学习/Attention注意力机制/'
            },
            {
              text: 'FFN、Add & LN 的作用与应用',
              link: '/notes_bak/大语言模型学习/FFN-Add-LN-的作用与应用/'
            },
            {
              text: 'MCP',
              link: '/notes_bak/大语言模型学习/MCP/'
            },
            {
              text: 'Structure & Decoding Policy 结构和解码策略',
              link: '/notes_bak/大语言模型学习/Structure-Decoding-Policy-结构和解码策略/'
            },
            {
              text: '分词',
              link: '/notes_bak/大语言模型学习/分词/'
            },
            {
              text: '模型压缩',
              link: '/notes_bak/大语言模型学习/模型压缩/'
            },
            {
              text: '词嵌入',
              link: '/notes_bak/大语言模型学习/词嵌入/'
            },
          ],
        },
        {
          text: 'LeetCode',
          children: [
            {
              text: '滑动窗口',
              link: '/notes_bak/leetcode/滑动窗口/'
            },
            {
              text: '链表',
              link: '/notes_bak/leetcode/链表/'
            },
          ],
        },
      ],
      '/notes_bak/c++ primer plus/': [
        {
          text: 'c++ primer plus',
          children: [
            '/notes_bak/c++ primer plus/using和namespace.md',
            '/notes_bak/c++ primer plus/关于过程编程,面向对象编程和泛型编程.md',
            '/notes_bak/c++ primer plus/函数声明.md',
            '/notes_bak/c++ primer plus/初始化.md',
            '/notes_bak/c++ primer plus/局部和全局的命名空间引入.md',
          ],
        },
      ],
      '/notes_bak/thino/': [
        {
          text: 'thino',
          children: [
            '/notes_bak/thino/2024-12-25.md',
          ],
        },
      ],
      '/notes_bak/transformer/': [
        {
          text: 'transformer',
          children: [
            '/notes_bak/transformer/什么是transformer.md',
          ],
        },
      ],
      '/notes_bak/机器学习/': [
        {
          text: '机器学习',
          children: [
            '/notes_bak/机器学习/关于单变量线性回归的思考.md',
            '/notes_bak/机器学习/关于逻辑回归中的代价函数.md',
            '/notes_bak/机器学习/关于逻辑回归的思考.md',
            '/notes_bak/机器学习/引言.md',
          ],
        },
      ],
      '/notes_bak/毕业设计/': [
        {
          text: '毕业设计',
          children: [
            '/notes_bak/毕业设计/学习资料.md',
          ],
        },
      ],
      '/notes_bak/demo/': [
        {
          text: 'demo',
          children: [
            '/notes_bak/demo/README.md',
            '/notes_bak/demo/foo.md',
            '/notes_bak/demo/bar.md',
          ],
        },
      ],
    },
  }),
})
