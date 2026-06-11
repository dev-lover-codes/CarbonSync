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

let summary = '';
for (let file of files) {
  try {
    let text = fs.readFileSync('/home/user/site/' + file, 'utf8');
    summary += `\n--- ${file} ---\n`;
    // Extract imports
    const importRegex = /import\s+.*?\s+from\s+['"](.*?)['"]/g;
    let match;
    while ((match = importRegex.exec(text)) !== null) {
      summary += `IMPORT: ${match[1]}\n`;
    }
    // Extract exports
    const exportRegex = /export\s+(default\s+)?(function|const|class)\s+([a-zA-Z0-9_]+)/g;
    while ((match = exportRegex.exec(text)) !== null) {
      summary += `EXPORT: ${match[3]}\n`;
    }
    // Extract calls
    const callRegex = /([A-Z][a-zA-Z0-9_]*|use[A-Z][a-zA-Z0-9_]*|fetch[A-zA-Z0-9_]*)\(/g;
    let calls = new Set();
    while ((match = callRegex.exec(text)) !== null) {
      if(!['Set', 'Map', 'Promise', 'Error', 'Date', 'Boolean', 'String', 'Number', 'Math', 'JSON', 'Object', 'Array'].includes(match[1])) {
        calls.add(match[1]);
      }
    }
    summary += `CALLS: ${[...calls].join(', ')}\n`;
  } catch (e) {
    summary += `ERROR: ${e.message}\n`;
  }
}
fs.writeFileSync('/home/user/site/summary.txt', summary);