#!/bin/bash

# 1. 创建目标图片目录
mkdir -p docs/.vuepress/public/img

# 2. 复制所有图片到新目录
cp src/site/img/user/附件/* docs/.vuepress/public/img/

# 3. 批量替换 markdown 文件中的图片路径
find docs/notes -type f -name "*.md" -exec sed -i '' 's|/img/user/附件/|/img/|g' {} \;

echo "图片路径批量替换完成，图片已统一到 docs/.vuepress/public/img/"

# 设置要搜索的目录
TARGET_DIR="docs/notes_bak/大语言模型学习"

# 查找并删除所有带2后缀的文件
find "$TARGET_DIR" -type f -name "*2.md" -exec rm -f {} \;

echo "已删除所有带2后缀的文件" 