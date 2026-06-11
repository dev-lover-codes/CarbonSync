$(cat graphify-out/.graphify_python) -c "
from pathlib import Path
import re

report = Path('graphify-out/GRAPH_REPORT.md').read_text(encoding='utf-8')

# Extract God Nodes
god_nodes_match = re.search(r'## God Nodes\n(.*?)(?=\n## |\Z)', report, re.DOTALL)
god_nodes = god_nodes_match.group(1).strip() if god_nodes_match else 'None found.'

# Extract Surprising Connections
surprising_match = re.search(r'## Surprising Connections\n(.*?)(?=\n## |\Z)', report, re.DOTALL)
surprising = surprising_match.group(1).strip() if surprising_match else 'None found.'

# Extract Suggested Questions
questions_match = re.search(r'## Suggested Questions\n(.*?)(?=\n## |\Z)', report, re.DOTALL)
questions = questions_match.group(1).strip() if questions_match else 'None found.'

print('## God Nodes')
print(god_nodes)
print('\n## Surprising Connections')
print(surprising)
print('\n## Suggested Questions')
print(questions)
"