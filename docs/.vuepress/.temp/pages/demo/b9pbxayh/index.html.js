import comp from "/Users/qianyuhe/Desktop/my-project/docs/.vuepress/.temp/pages/demo/b9pbxayh/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/b9pbxayh/\",\"title\":\"foo\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"foo\",\"createTime\":\"2025/05/12 15:07:52\",\"permalink\":\"/demo/b9pbxayh/\"},\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"notes_bak/demo/foo.md\",\"headers\":[]}")
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
