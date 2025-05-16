import os
import re
from pathlib import Path

def fix_image_links(directory):
    # 图片链接的正则表达式模式
    pattern = r'!\[(.*?)\]\((.*?)\)'
    
    # 遍历目录下的所有.md文件
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                modified = False
                
                # 读取文件内容
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # 查找所有图片链接
                matches = re.finditer(pattern, content)
                for match in matches:
                    alt_text = match.group(1)  # []中的文本
                    link = match.group(2)      # ()中的链接
                    
                    # 检查alt_text中是否包含空格
                    if ' ' in alt_text:
                        # 替换空格为连字符
                        new_alt_text = alt_text.replace(' ', '-')
                        # 替换链接中的文件名
                        new_link = link.replace(alt_text, new_alt_text)
                        # 更新整个图片链接
                        old_link = f'![{alt_text}]({link})'
                        new_link = f'![{new_alt_text}]({new_link})'
                        content = content.replace(old_link, new_link)
                        modified = True
                    
                    # 检查链接中是否包含空格
                    if ' ' in link:
                        # 替换空格为连字符
                        new_link = link.replace(' ', '-')
                        # 更新整个图片链接
                        old_link = f'![{alt_text}]({link})'
                        new_link = f'![{alt_text}]({new_link})'
                        content = content.replace(old_link, new_link)
                        modified = True
                
                # 如果文件被修改，写回文件
                if modified:
                    print(f'修改文件: {file_path}')
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)

if __name__ == '__main__':
    # 设置要处理的目录
    target_dir = '/Users/qianyuhe/Desktop/my-project/docs/notes_bak/大语言模型学习'
    fix_image_links(target_dir)
    print('处理完成！') 