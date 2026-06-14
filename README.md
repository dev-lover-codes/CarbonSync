<div align="center">
  <h1>🌍 CarbonSync 3D</h1>
  <p><strong>An immersive, fully 3D gamified carbon profiling dashboard built entirely inside WebGL.</strong></p>
  
  [![Live Demo](https://img.shields.io/badge/Live_Demo-carbonsync--site.netlify.app-00ff87?style=for-the-badge&logo=netlify&logoColor=black)](https://carbonsync-site.netlify.app)
  <br />
  
  [![React](https://img.shields.io/badge/React_18-20232A?style=flat-square&logo=react&logoColor=61DAFB)](#)
  [![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white)](#)
  [![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)](#)
  [![Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=flat-square&logo=google&logoColor=white)](#)

</div>

<br />

## 📖 About The Project

**CarbonSync 3D** was developed for the **Hack2skill PromptWars Competition (Challenge 3)**. It transcends standard 2D web interfaces by delivering a complete Spatial Computing experience right in your browser. 

By leveraging the power of WebGL, CarbonSync gamifies the process of logging, tracking, and understanding your carbon footprint through stunning 3D visual data representations, glassmorphic interactive UI, and Google AI-powered personalized insights.

---

## 🚀 Tech Stack

- **Core Framework**: React 18 + Vite
- **3D Graphics & Rendering**: 
  - `Three.js` (Core WebGL API)
  - `@react-three/fiber` (React-based renderer for Three.js)
  - `@react-three/drei` (Scroll controls, Billboards, and specialized helpers)
- **Post-Processing**: `@react-three/postprocessing` (Selective Bloom, Chromatic Aberration, Vignette)
- **State & Routing**: `zustand` (Seamless single-page global WebGL state management)
- **Physics & Animation**: `@react-spring/three` (Spring physics on hover/click) + `gsap` (Complex scroll and portal vortex transitions)
- **Database & Auth**: Firebase Auth (Google Sign-In) + Firestore (Real-time activity logging & streak stats)
- **AI Core**: `@google/generative-ai` (Gemini 1.5 Flash driving the EcoBot Chat Coach & intelligent analytics)
- **Styling**: Tailwind CSS + Custom CSS 3D Depth Layering

---

## 🎨 Design System: "Eco Cosmos"

The aesthetic is built to impress, feeling like an advanced space-station interface orbiting Earth.

- 🌌 **Deep Green Space Background**: `#020b06`
- 🟢 **Primary Glowing Mint**: `#00ff87`
- 🔵 **Secondary Cyan**: `#00d4ff`
- 🟠 **Warm Heat Accent**: `#ffb347`
- 🧊 **3D Glassmorphism**: Custom `MeshTransmissionMaterial` (Transmission: `0.92`, Thickness: `0.3`)
- ✨ **Ambient Particles**: Custom `instancedMesh` slow-drifting starfield (1,500 particles)
- 🎥 **Cinematic Camera**: Gentle continuous HUD camera shake (`intensity={0.06}`)

---

## 🏆 Key Features

1. **3D Target Garden**: Set targets and watch your digital plants grow in real-time as you log positive carbon choices.
2. **Observatory Analytics**: Rotate category share cylinders and examine period comparison 3D bar charts.
3. **EcoBot Chat Hologram**: Speak directly to a Gemini 1.5 Flash assistant customized with your specific carbon profiles and habits.
4. **Interactive Dashboard**: Features typewriter greetings, fire streak badges, and staggered counting metric cards in deep 3D space.
5. **Physical Podium Leaderboard**: Staggered gold/silver/bronze stages that rise dynamically out of the ground upon rendering.

---

## 🛠️ Project Structure

```text
src/
  store/
    useStore.js          # Zustand routing, state & chat logs
  contexts/
    AuthContext.jsx      # Firebase authentication provider
  lib/
    firebase.js          # Firebase connection setup
    firestore.js         # Firestore CRUD logs & profiles
  services/
    geminiService.js     # Gemini API direct integrations
  components/
    Scene.jsx            # Root WebGL Canvas & Post-Processing
    GlassPanel.jsx       # 3D translucent panel geometry
    EarthGlobe.jsx       # 3D rotating globe with CO2 hotspots
    Portal3D.jsx         # Gsap vortex page transition portal
    ... (And many more custom 3D components)
  pages/                 # WebGL routing scenes
    LandingScene.jsx     
    DashboardScene.jsx   
    AICoachScene.jsx     
    ...
```

---

## 📦 Local Setup & Installation

### 1. Configure Environment Variables
Create a `.env.local` file in the root directory and input your credentials:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_GEMINI_API_KEY=your_gemini_api_key
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally (Dev Mode)
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```
