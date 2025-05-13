#!/bin/bash

# 复制所有笔记文件
cp -r src/site/notes/* docs/notes/

# 修改所有 .md 文件中的图片引用路径
find docs/notes -type f -name "*.md" -exec sed -i '' 's|/img/user/附件/|/img/|g' {} \; 