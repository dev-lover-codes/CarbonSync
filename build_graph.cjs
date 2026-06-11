const fs = require('fs');

const files = [
  'src/main.tsx',
  'src/pages/AICoach.jsx',
  'src/pages/AICoachScene.jsx',
  'src/pages/Auth.jsx',
  'src/pages/AuthScene.jsx',
  'src/pages/Dashboard.jsx',
  'src/pages/DashboardScene.jsx',
  'src/pages/Goals.jsx',
  'src/pages/GoalsScene.jsx',
  'src/pages/Insights.jsx',
  'src/pages/InsightsScene.jsx',
  'src/pages/Landing.jsx',
  'src/pages/LandingScene.jsx',
  'src/pages/Leaderboard.jsx',
  'src/pages/LeaderboardScene.jsx',
  'src/pages/NotFound.jsx',
  'src/pages/Onboarding.jsx',
  'src/pages/OnboardingScene.jsx',
  'src/pages/Profile.jsx',
  'src/pages/Tips.jsx',
  'src/pages/Tracker.jsx',
  'src/pages/TrackerScene.jsx',
  'src/pages/auth/AuthIllustration.jsx',
  'src/pages/auth/ForgotPassword.jsx',
  'src/pages/auth/Login.jsx'
];

let nodes = [];
let edges = [];

// Helper to sanitize node ID
const sanitize = (id) => id.toLowerCase().replace(/[^a-z0-9_]/g, '_');

// To store exports to link file logic correctly
const fileExports = {};

for (let file of files) {
  try {
    let text = fs.readFileSync('/home/user/site/' + file, 'utf8');
    
    // Create a node for the file/component itself based on filename
    const compName = file.split('/').pop().split('.')[0];
    const compId = sanitize(compName);
    
    nodes.push({
      id: compId,
      label: compName,
      file_type: "code",
      source_file: file,
      source_location: null,
      source_url: null,
      captured_at: null,
      author: null,
      contributor: null
    });

    const importRegex = /import\s+.*?\s+from\s+['"](.*?)['"]/g;
    let match;
    while ((match = importRegex.exec(text)) !== null) {
      let importedPath = match[1];
      if (importedPath.startsWith('.')) {
         // Resolve some imports conceptually
         let impName = importedPath.split('/').pop();
         let impId = sanitize(impName);
         edges.push({
           source: compId,
           target: impId,
           relation: "references",
           confidence: "EXTRACTED",
           confidence_score: 1.0,
           source_file: file,
           source_location: null,
           weight: 1.0
         });
      }
    }
    
    // Function calls inside this component
    const callRegex = /([A-Z][a-zA-Z0-9_]*|use[A-Z][a-zA-Z0-9_]*|fetch[A-zA-Z0-9_]*)\(/g;
    let calls = new Set();
    while ((match = callRegex.exec(text)) !== null) {
      let callName = match[1];
      if(!['Set', 'Map', 'Promise', 'Error', 'Date', 'Boolean', 'String', 'Number', 'Math', 'JSON', 'Object', 'Array'].includes(callName)) {
        let calleeId = sanitize(callName);
        
        // Add a node for the callee if not exists
        if (!nodes.find(n => n.id === calleeId) && calleeId !== compId) {
            nodes.push({
              id: calleeId,
              label: callName,
              file_type: "code",
              source_file: file,
              source_location: null,
              source_url: null,
              captured_at: null,
              author: null,
              contributor: null
            });
        }

        edges.push({
           source: compId,
           target: calleeId,
           relation: "calls",
           confidence: "EXTRACTED",
           confidence_score: 1.0,
           source_file: file,
           source_location: null,
           weight: 1.0
        });
      }
    }
  } catch (e) {
    console.error(`Error processing ${file}: ${e.message}`);
  }
}

// Ensure uniqueness
const uniqueNodesMap = new Map();
for (let n of nodes) {
  uniqueNodesMap.set(n.id, n);
}
nodes = Array.from(uniqueNodesMap.values());

const uniqueEdgesSet = new Set();
const uniqueEdges = [];
for (let e of edges) {
  const sig = `${e.source}->${e.target}->${e.relation}`;
  if (!uniqueEdgesSet.has(sig) && e.source !== e.target) {
    uniqueEdgesSet.add(sig);
    uniqueEdges.push(e);
  }
}

const hyperedges = [];
// Example hyperedge if we find components implementing a common scene
const sceneNodes = nodes.filter(n => n.id.endsWith('_scene')).map(n => n.id);
if (sceneNodes.length >= 3) {
   hyperedges.push({
      id: "all_scenes",
      label: "3D Scene Components",
      nodes: sceneNodes.slice(0, 5), // take up to 5
      relation: "participate_in",
      confidence: "INFERRED",
      confidence_score: 0.85,
      source_file: "src/pages"
   });
}

const graph = {
  nodes: nodes,
  edges: uniqueEdges,
  hyperedges: hyperedges,
  input_tokens: 0,
  output_tokens: 0
};

fs.writeFileSync('/home/user/site/graphify-out/.graphify_chunk_03.json', JSON.stringify(graph, null, 2));
console.log("Graph saved.");