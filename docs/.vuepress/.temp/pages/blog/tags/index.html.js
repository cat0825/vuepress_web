import comp from "/Users/qianyuhe/Desktop/my-project/docs/.vuepress/.temp/pages/blog/tags/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/tags/\",\"title\":\"标签\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"标签\",\"gitInclude\":[],\"draft\":true},\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"headers\":[],\"type\":\"blog-tags\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
