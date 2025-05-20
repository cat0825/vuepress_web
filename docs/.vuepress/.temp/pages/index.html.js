import comp from "/Users/qianyuhe/Desktop/my-project/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"externalLinkIcon\":false,\"config\":[{\"type\":\"hero\",\"full\":true,\"background\":\"tint-plate\",\"hero\":{\"name\":\"大语言模型学习笔记\",\"tagline\":\"深入探索 LLM 的奥秘\",\"text\":\"从预训练到微调，从理论到实践，全方位解析大语言模型\",\"actions\":[{\"theme\":\"brand\",\"text\":\"大语言模型\",\"link\":\"/notes_bak/大语言模型学习/导航.md\"},{\"theme\":\"sponsor\",\"text\":\"目录\",\"link\":\"/blog/categories/\"},{\"theme\":\"alt\",\"text\":\"Github →\",\"link\":\"https://github.com/cat0825\"}]}},{\"type\":\"features\",\"features\":[{\"title\":\"大语言模型学习\",\"icon\":\"🤖\",\"details\":\"深入探索大语言模型的原理、训练方法和应用实践，包括预训练、微调、推理优化等核心内容\"},{\"title\":\"About Me\",\"icon\":\"👨‍💻\",\"details\":\"个人简介、技术栈、项目经验以及联系方式\"}]}]},\"readingTime\":{\"minutes\":0.55,\"words\":164},\"filePathRelative\":\"README.md\",\"headers\":[],\"categoryList\":[]}")
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
