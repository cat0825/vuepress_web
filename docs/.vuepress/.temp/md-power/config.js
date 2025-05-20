import { defineClientConfig } from 'vuepress/client'
import Tabs from '/Users/qianyuhe/Desktop/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.146_artplayer@5.2.3_esbuild@0.25.4_less@4.3.0_markdow_21b4de68bbea3d838146c74c1b8ba310/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from '/Users/qianyuhe/Desktop/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.146_artplayer@5.2.3_esbuild@0.25.4_less@4.3.0_markdow_21b4de68bbea3d838146c74c1b8ba310/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from '/Users/qianyuhe/Desktop/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.146_artplayer@5.2.3_esbuild@0.25.4_less@4.3.0_markdow_21b4de68bbea3d838146c74c1b8ba310/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeNode from '/Users/qianyuhe/Desktop/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.146_artplayer@5.2.3_esbuild@0.25.4_less@4.3.0_markdow_21b4de68bbea3d838146c74c1b8ba310/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'

import '/Users/qianyuhe/Desktop/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.146_artplayer@5.2.3_esbuild@0.25.4_less@4.3.0_markdow_21b4de68bbea3d838146c74c1b8ba310/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
  }
})
