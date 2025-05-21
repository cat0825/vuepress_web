import ChartJS from "/Users/qianyuhe/Desktop/my-project/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.83_chart.js@4.4.9_echarts@5.6.0_flowchart.ts@3.0.1__6ab4d26aa4528e1823d5cab552ad92f7/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import ECharts from "/Users/qianyuhe/Desktop/my-project/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.83_chart.js@4.4.9_echarts@5.6.0_flowchart.ts@3.0.1__6ab4d26aa4528e1823d5cab552ad92f7/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import FlowChart from "/Users/qianyuhe/Desktop/my-project/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.83_chart.js@4.4.9_echarts@5.6.0_flowchart.ts@3.0.1__6ab4d26aa4528e1823d5cab552ad92f7/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import Mermaid from "/Users/qianyuhe/Desktop/my-project/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.83_chart.js@4.4.9_echarts@5.6.0_flowchart.ts@3.0.1__6ab4d26aa4528e1823d5cab552ad92f7/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";

export default {
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
  },
};
