import comp from "/Users/qianyuhe/Desktop/my-project/docs/.vuepress/.temp/pages/article/oie1xumy/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/oie1xumy/\",\"title\":\"Custom Component\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Custom Component\",\"tags\":[\"preview\",\"component\"],\"createTime\":\"2025/05/12 15:07:52\",\"permalink\":\"/article/oie1xumy/\"},\"readingTime\":{\"minutes\":0.05,\"words\":15},\"filePathRelative\":\"preview/custom-component.example.md\",\"headers\":[],\"categoryList\":[{\"id\":\"5ebeb6\",\"sort\":10001,\"name\":\"preview\"}]}")
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
