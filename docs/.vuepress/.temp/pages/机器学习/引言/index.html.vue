<template><div><p><strong>1. 监督学习</strong>
监督学习的特点是<strong>数据有标注</strong>，即每个输入数据都有明确的目标（标签）或期望的输出。模型的目标是学习输入与输出之间的映射关系。</p>
<p><strong>常见的监督学习算法</strong></p>
<p>• 线性回归、逻辑回归</p>
<p>• 支持向量机（SVM）</p>
<p>• 决策树、随机森林、梯度提升树（如 XGBoost、LightGBM）</p>
<p>• 人工神经网络（ANN）</p>
<p>• 深度学习（如卷积神经网络 CNN、循环神经网络 RNN）</p>
<p><strong>监督学习的适用场景</strong></p>
<ol>
<li><strong>分类任务</strong></li>
</ol>
<p>• 输入数据被划分为多个类别，目标是预测输入数据属于哪一类。</p>
<p>• <strong>典型应用</strong>：</p>
<p>• <strong>图像分类</strong>：识别图片中的物体（如猫狗分类、人脸识别）。</p>
<p>• <strong>文本分类</strong>：垃圾邮件检测、情感分析（正面或负面情绪）。</p>
<p>• <strong>语音识别</strong>：将语音转化为文本。</p>
<ol start="2">
<li><strong>回归任务</strong></li>
</ol>
<p>• 目标变量是连续的数值，模型输出一个具体的数值。</p>
<p>• <strong>典型应用</strong>：</p>
<p>• <strong>房价预测</strong>：根据房屋面积、位置等信息预测房价。</p>
<p>• <strong>股票价格预测</strong>：基于历史数据预测未来的股票价格。</p>
<p>• <strong>能源消耗预测</strong>：根据天气和用电需求预测未来的能耗。</p>
<ol start="3">
<li><strong>时间序列预测</strong></li>
</ol>
<p>• 使用历史数据预测未来的趋势或值。</p>
<p>• <strong>典型应用</strong>：</p>
<p>• <strong>天气预报</strong>：基于历史天气数据预测未来的气温和降雨量。</p>
<p>• <strong>销售预测</strong>：预测未来的销售量，用于库存管理。</p>
<ol start="4">
<li><strong>标注数据场景</strong></li>
</ol>
<p>• 数据有明确的输入和输出标签，监督学习表现非常好。</p>
<p>• <strong>典型应用</strong>：</p>
<p>• <strong>机器翻译</strong>：使用并行语料库，将一种语言翻译成另一种语言。</p>
<p>• <strong>医学诊断</strong>：通过患者的病史、体检数据预测疾病类型（如癌症检测）。</p>
<p><strong>2. 无监督学习</strong></p>
<p>无监督学习的特点是<strong>数据没有标注</strong>，即没有明确的目标输出。模型的目标是探索数据的结构、模式或分布。</p>
<p><strong>常见的无监督学习算法</strong></p>
<p>• 聚类算法：K-means、层次聚类、DBSCAN</p>
<p>• 降维算法：主成分分析（PCA）、t-SNE、UMAP</p>
<p>• 异常检测：孤立森林、单类支持向量机（One-Class SVM）</p>
<p>• 自编码器（Autoencoder）</p>
<p><strong>无监督学习的适用场景</strong></p>
<ol>
<li><strong>数据聚类</strong></li>
</ol>
<p>• 将数据划分为若干组，每组数据具有相似的特性。</p>
<p>• <strong>典型应用</strong>：</p>
<p>• <strong>客户细分</strong>：根据用户的购买行为，将客户划分为不同的群体（高价值客户、普通客户等）。</p>
<p>• <strong>市场分析</strong>：发现商品之间的关联，优化商品推荐（如购物篮分析）。</p>
<p>• <strong>图像分割</strong>：将图片中的像素划分为不同区域，应用于医学图像处理。</p>
<ol start="2">
<li><strong>降维</strong></li>
</ol>
<p>• 将高维数据映射到低维空间，保留数据的主要特征。</p>
<p>• <strong>典型应用</strong>：</p>
<p>• <strong>数据可视化</strong>：将高维数据降维后以 2D/3D 的形式展示。</p>
<p>• <strong>特征选择/提取</strong>：在大数据集中找到对目标最重要的特征。</p>
<p>• <strong>压缩数据</strong>：减少存储和计算需求。</p>
<ol start="3">
<li><strong>异常检测</strong></li>
</ol>
<p>• 发现与正常模式有显著不同的数据点。</p>
<p>• <strong>典型应用</strong>：</p>
<p>• <strong>信用卡欺诈检测</strong>：检测与常规交易行为不同的交易。</p>
<p>• <strong>网络入侵检测</strong>：发现潜在的网络攻击。</p>
<p>• <strong>设备故障检测</strong>：检测工业设备运行中的异常模式。</p>
<ol start="4">
<li><strong>探索性数据分析</strong></li>
</ol>
<p>• 寻找数据中的隐藏模式或分布。</p>
<p>• <strong>典型应用</strong>：</p>
<p>• <strong>文本主题分析</strong>：无监督学习方法（如 LDA）可以从文本中提取主题。</p>
<p>• <strong>基因组数据分析</strong>：聚类基因表达数据，发现潜在的生物学模式。</p>
<ol start="4">
<li><mark><strong>使用场景对比总结</strong></mark></li>
</ol>
<p><strong>适合监督学习的场景</strong></p>
<p>• 有大量的标注数据（如分类标签或目标值）。</p>
<p>• 问题目标明确，比如分类某种类型的事物（垃圾邮件、疾病类型等）。</p>
<p>• 模型评估有清晰的指标（准确率、MSE 等）。</p>
<p><strong>适合无监督学习的场景</strong></p>
<p>• 数据没有标注，且标注成本高。</p>
<p>• 需要探索数据的内部结构、模式或分布。</p>
<p>• 目标是发现未知的类别、异常数据或数据关系。</p>
<p>我在思考应该在什么应用场景下选择什么样的算法
之前突然想到人的一生无时无刻不在做着选择,正确的选择做得多了才能更快的向正确的结果收敛,具体问题具体分析,学习各个算法的应用场景是比纸上谈兵更加有深度.</p>
</div></template>


