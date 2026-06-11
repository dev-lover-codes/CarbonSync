$(cat graphify-out/.graphify_python) -c "
import json
from pathlib import Path
detect = json.loads(Path('graphify-out/.graphify_detect.json').read_text(encoding='utf-8'))
print(f\"Corpus: {detect['total_files']} files · ~{detect['total_words']} words\")
files = detect['files']
for category in ['code', 'document', 'paper', 'image', 'video']:
    if category in files and files[category]:
        name = 'docs' if category == 'document' else category + 's' if category not in ['code'] else category
        print(f\"  {name}:     {len(files[category])} files\")
"
