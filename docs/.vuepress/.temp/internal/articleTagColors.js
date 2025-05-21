import './articleTagColors.css'
export const articleTagColors = {"gardenEntry":"gks2","preview":"i0cb","component":"ww4a","markdown":"wxuz","C++":"9n5m","LeetCode":"8gyx","Thino":"ycyg","NLP":"ycyg","毕业设计":"zntw","机器学习":"uymx","transformer":"srd3","Transformer":"srd3","leetcode":"8gyx","链表":"kfu7","滑动窗口":"wxuz"}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateArticleTagColors) {
    __VUE_HMR_RUNTIME__.updateArticleTagColors(articleTagColors)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ articleTagColors }) => {
    __VUE_HMR_RUNTIME__.updateArticleTagColors(articleTagColors)
  })
}
