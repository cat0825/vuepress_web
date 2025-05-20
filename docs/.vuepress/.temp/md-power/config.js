import { defineClientConfig } from 'vuepress/client'
import Tabs from '/Users/qianyuhe/Desktop/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.146_esbuild@0.25.4_less@4.3.0_markdown-it@14.1.0_sass_56ffa1abe1cbff8933d0bdd55797b560/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from '/Users/qianyuhe/Desktop/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.146_esbuild@0.25.4_less@4.3.0_markdown-it@14.1.0_sass_56ffa1abe1cbff8933d0bdd55797b560/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from '/Users/qianyuhe/Desktop/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.146_esbuild@0.25.4_less@4.3.0_markdown-it@14.1.0_sass_56ffa1abe1cbff8933d0bdd55797b560/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeNode from '/Users/qianyuhe/Desktop/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.146_esbuild@0.25.4_less@4.3.0_markdown-it@14.1.0_sass_56ffa1abe1cbff8933d0bdd55797b560/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'

import '/Users/qianyuhe/Desktop/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.146_esbuild@0.25.4_less@4.3.0_markdown-it@14.1.0_sass_56ffa1abe1cbff8933d0bdd55797b560/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
  }
})
