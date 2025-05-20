import './articleTagColors.css'
export const articleTagColors = {"preview":"s6zi","component":"w5ev","markdown":"fi73","gardenEntry":"yvxu","C++":"myna","LeetCode":"8mj2","transformer":"pmle","Transformer":"pmle","Thino":"xkki","机器学习":"q2n6","NLP":"xkki","毕业设计":"zy7k","leetcode":"8mj2","链表":"mqot","滑动窗口":"fi73"}

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
