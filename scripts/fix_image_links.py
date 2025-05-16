import os
import re
from pathlib import Path

def fix_image_links(directory):
    # 遍历目录下的所有文件
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # 查找所有图片链接
                pattern = r'!\[(.*?)\]\((.*?)\)'
                matches = re.finditer(pattern, content)
                
                modified = False
                for match in matches:
                    alt_text = match.group(1)
                    img_path = match.group(2)
                    
                    # 如果路径中包含空格，替换为连字符
                    if ' ' in img_path:
                        new_path = img_path.replace(' ', '-')
                        content = content.replace(img_path, new_path)
                        modified = True
                
                # 如果有修改，写回文件
                if modified:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f'Modified: {file_path}')

if __name__ == '__main__':
    # 处理 docs/notes_bak 目录下的所有文件
    fix_image_links('docs/notes_bak') 