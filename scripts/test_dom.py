import re

with open('js/app.js', 'r', encoding='utf-8') as f:
    js = f.read()

matches = re.findall(r'document\.getElementById\([\'"]([^\'"]+)[\'"]\)', js)
print(f'Total getElementById in app.js: {len(matches)}')

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

missing = [mid for mid in matches if f'id="{mid}"' not in html and f"id='{mid}'" not in html]
print(f'Missing in index.html: {missing}')

if not missing:
    print('SUCCESS: 100% of DOM IDs accessed by app.js exist in index.html!')
