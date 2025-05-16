import os
import re
from pathlib import Path

def fix_image_paths(docs_dir):
    """
    修复 Markdown 文件中的图片引用路径
    将相对路径 ../../.vuepress/public/img/ 改为绝对路径 /img/
    """
    # 遍历所有 Markdown 文件
    for root, _, files in os.walk(docs_dir):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                print(f"处理文件: {file_path}")
                
                # 读取文件内容
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # 使用正则表达式替换图片路径
                # 匹配 ../../.vuepress/public/img/ 或 ../.vuepress/public/img/ 开头的路径
                pattern = r'!\[(.*?)\]\((\.\.\/)+\.vuepress\/public\/img\/(.*?)\)'
                new_content = re.sub(pattern, r'![\1](/img/\3)', content)
                
                # 如果内容有变化，写回文件
                if new_content != content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"已修复: {file_path}")

if __name__ == "__main__":
    # 获取项目根目录
    project_root = Path(__file__).parent.parent
    docs_dir = project_root / "docs"
    
    print("开始修复图片路径...")
    fix_image_paths(docs_dir)
    print("修复完成！") 