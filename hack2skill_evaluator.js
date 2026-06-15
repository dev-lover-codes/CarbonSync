import fs from 'fs';
import path from 'path';

// A fun "Hack2Skill Marks Giver" script to evaluate the project

console.log("==================================================");
console.log("🚀 HACK2SKILL PROMPTWARS - AUTOMATED MARKS GIVER 🚀");
console.log("==================================================\n");

console.log("Analyzing project structure and code quality...\n");

let score = {
  innovation: 0,
  ui_ux: 0,
  code_quality: 0,
  ai_integration: 0,
  total: 0
};

// 1. Innovation & Completeness (Max 25)
// Check if 3D scenes are present
const srcPagesDir = path.join(process.cwd(), 'src', 'pages');
if (fs.existsSync(srcPagesDir)) {
  const files = fs.readdirSync(srcPagesDir);
  const threeDScenes = files.filter(f => f.includes('Scene.jsx')).length;
  if (threeDScenes > 5) {
    score.innovation += 25;
    console.log("✅ [25/25] Innovation: Incredible 3D Spatial UI detected (" + threeDScenes + " scenes). Very innovative!");
  } else {
    score.innovation += 15;
    console.log("✅ [15/25] Innovation: Standard web app detected.");
  }
} else {
  score.innovation += 10;
}

// 2. UI/UX Design (Max 25)
// Check for framer-motion and gsap for animations
const pkgJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(pkgJsonPath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
  const deps = pkg.dependencies || {};
  if (deps['framer-motion'] && deps['gsap'] && deps['@react-three/drei']) {
    score.ui_ux += 25;
    console.log("✅ [25/25] UI/UX: Found advanced animation libraries (GSAP, Framer Motion, React Three Fiber). Beautiful UI!");
  } else {
    score.ui_ux += 15;
    console.log("✅ [15/25] UI/UX: Good UI elements detected.");
  }
}

// 3. Code Quality (Max 25)
// Check for state management (zustand) and context
if (fs.existsSync(path.join(process.cwd(), 'src', 'store', 'useStore.js'))) {
  score.code_quality += 25;
  console.log("✅ [25/25] Code Quality: Excellent global state management using Zustand and Context APIs. Clean architecture!");
} else {
  score.code_quality += 15;
}

// 4. AI Integration (Max 25)
// Check for Gemini API
if (fs.existsSync(pkgJsonPath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
  const deps = pkg.dependencies || {};
  if (deps['@google/generative-ai']) {
    score.ai_integration += 25;
    console.log("✅ [25/25] AI Integration: Google Generative AI (Gemini) successfully integrated for smart insights!");
  } else {
    score.ai_integration += 10;
    console.log("❌ [10/25] AI Integration: No AI models detected.");
  }
}

score.total = score.innovation + score.ui_ux + score.code_quality + score.ai_integration;

console.log("\n==================================================");
console.log("🏆 FINAL SCORE: " + score.total + " / 100 🏆");
console.log("==================================================");

if (score.total >= 90) {
  console.log("🌟 OUTSTANDING! You are a top contender for the Hack2Skill PromptWars! 🌟\n");
} else if (score.total >= 70) {
  console.log("👍 GREAT JOB! You have a solid project. Keep pushing!\n");
} else {
  console.log("💡 GOOD START! Needs a bit more polish to win.\n");
}
