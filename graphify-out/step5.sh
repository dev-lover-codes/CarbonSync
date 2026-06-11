$(cat graphify-out/.graphify_python) -c "
import sys, json
from graphify.build import build_from_json
from graphify.cluster import score_all
from graphify.analyze import god_nodes, surprising_connections, suggest_questions
from graphify.report import generate
from pathlib import Path

extraction = json.loads(Path('graphify-out/.graphify_extract.json').read_text(encoding='utf-8'))
detection  = json.loads(Path('graphify-out/.graphify_detect.json').read_text(encoding='utf-8'))
analysis   = json.loads(Path('graphify-out/.graphify_analysis.json').read_text(encoding='utf-8'))

G = build_from_json(extraction)
communities = {int(k): v for k, v in analysis['communities'].items()}
cohesion = {int(k): v for k, v in analysis['cohesion'].items()}
tokens = {'input': extraction.get('input_tokens', 0), 'output': extraction.get('output_tokens', 0)}

# LABELS
labels = {
    0: 'Authentication Flow',
    1: 'AI Coach Interface',
    2: 'Carbon Footprint Context',
    3: 'Firebase Integration',
    4: 'Activity Tracking',
    5: 'Package Dependencies',
    6: 'Auth State Management',
    7: 'Dashboard Insights',
    8: 'Tracker Data Model',
    9: '3D Background Scenes',
    10: 'Interactive Goals',
    11: 'Leaderboard Fetching',
    12: 'Leaderboard Display',
    13: 'Project Planning Config',
    14: '3D UI Components',
    15: '3D Charts',
    16: 'Landing Page Graphics',
    17: 'Goal Management Logic',
    18: '3D Navigation',
    19: '3D Input Panels',
    20: 'Circular 3D Charts',
    21: 'Auth Globe Animation',
    22: 'Dev Environment Scripts',
    23: 'Landing Page UI',
    24: 'Netlify Deployment',
    25: 'Font Management Scripts',
    26: 'Firestore Indexes',
    27: 'Readme Documents',
    28: 'Gemini CLI Settings',
    29: 'IDX Environment config',
    30: 'Activity Plan',
    31: 'Goal Dashboard Plan',
    32: 'Carbon Budget Context',
    33: 'AI Coach Research',
    34: 'Agent Rules',
    35: 'Blueprint Management',
    36: 'Cloud Deploy Script',
    37: 'Loading Skeletons',
    38: 'Landing Page State',
    39: 'Loading Spinners',
    40: 'Vercel Config',
    41: 'VSCode Settings',
    42: 'Goal Form Plan',
    43: 'Goal List Plan',
    44: 'Goal Context',
    45: 'Goal Research',
    46: 'RAG Lite Research',
    47: 'Auth Illustration UI',
    48: 'App Entry Point',
    49: '404 Page',
    50: 'Insights Plan',
    51: 'Leaderboard Plan',
    52: 'Project Definition',
    53: 'PostCSS Config',
    54: 'Dev Wrapper Init',
    55: 'Cloud Deployment',
    56: 'Tailwind Config',
    57: 'Vite Config'
}

questions = suggest_questions(G, communities, labels)

report = generate(G, communities, cohesion, labels, analysis['gods'], analysis['surprises'], detection, tokens, '.', suggested_questions=questions)
Path('graphify-out/GRAPH_REPORT.md').write_text(report, encoding='utf-8')
Path('graphify-out/.graphify_labels.json').write_text(json.dumps({str(k): v for k, v in labels.items()}, ensure_ascii=False), encoding='utf-8')
print('Report updated with community labels')
"