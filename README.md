# CarbonSync 3D — Carbon Footprint awareness Platform

> **Hack2skill PromptWars competition (Challenge 3)**  
> An immersive, fully 3D gamified carbon profiling dashboard built entirely inside WebGL.

---

## 🚀 Tech Stack

- **Core**: React 18 + Vite
- **3D Graphics**: 
  - `Three.js` (Core WebGL)
  - `@react-three/fiber` (R3F React Renderer)
  - `@react-three/drei` (Holograms, custom geometries, scroll controllers, Billboard typography)
- **Post-Processing**: `@react-three/postprocessing` (Selective Bloom, Chromatic Aberration, Vignette)
- **State & Router**: `zustand` (Single-page global WebGL routing)
- **Animations**: `@react-spring/three` (Spring physics on hover/click) + `gsap` (Scroll and portal vortex)
- **Database & Auth**: Firebase Auth (Google Sign-In + Email/Password) + Firestore (Activities logging & streak stats)
- **AI Core**: `@google/generative-ai` (Gemini 1.5 Flash for EcoBot Chat Coach & carbon insights)
- **Styling**: Tailwind CSS (Tailwind HUD overlays & mobile navs)

---

## 🎨 Design System: "Eco Cosmos"

- **Deep Green Space Background**: `#020b06`
- **Primary Glowing Mint**: `#00ff87`
- **Secondary Cyan**: `#00d4ff`
- **Warm Heat Accent**: `#ffb347`
- **3D Glassmorphism**: `MeshTransmissionMaterial` (Transmission: `0.92`, Thickness: `0.3`, Roughness: `0.0`)
- **Neon Borders**: Custom glowing Edge segments mapped to 3D rounded panels.
- **Ambient Particles**: `instancedMesh` slow-drifting starfield (1,500 particles).
- **Interactive Springs**: 1.05x scaling on hover, punch scaling on click.
- **Camera Shake**: Gentle continuous HUD camera shake (`intensity={0.06}`).

---

## 🛠️ Project Structure

```text
src/
  store/
    useStore.js          (Zustand routing, state & chat logs)
  contexts/
    AuthContext.jsx      (Firebase authentication provider)
  lib/
    firebase.js          (Firebase connection setup)
    firestore.js         (Firestore CRUD logs & profiles)
  services/
    geminiService.js     (Gemini API direct client integrations)
  components/
    Scene.jsx            (Root WebGL Canvas with Bloom & Vignette composer)
    Particles.jsx        (Slow-drifting instanced particle system)
    GlassPanel.jsx       (3D translucent panel geometry)
    Button3D.jsx         (Springy button with emissive glows)
    EarthGlobe.jsx       (3D rotating globe with CO2 hotspots)
    BarChart3D.jsx       (Extruded 3D box bar chart)
    PieChart3D.jsx       (Exploding 3D cylinder sector chart)
    AreaChart3D.jsx      (Waving ribbon wave chart)
    StreakCalendar3D.jsx (30-day streak cube grid calendar)
    AchievementBadge3D.jsx (Hexagonal rotating medals)
    Portal3D.jsx         (Gsap vortex page transition portal)
  pages/
    LandingScene.jsx     (Scroll-parallax marketing home)
    AuthScene.jsx        (Glass login panel in space)
    OnboardingScene.jsx  (Camera panning preferences setup)
    DashboardScene.jsx   (Cockpit stats dashboard)
    TrackerScene.jsx     (Interactive spaceship log inputs)
    InsightsScene.jsx    (Chart observation observatory)
    GoalsScene.jsx       (3D target garden of growing plants)
    LeaderboardScene.jsx (Gold/Silver/Bronze podium stage)
    AICoachScene.jsx     (EcoBot hologram chat terminal)
  shaders/
    aurora.vert / .frag  (Waving sine-wave plane shader)
    neonGlow.vert / .frag (Fresnel glowing edge highlight shader)
```

---

## 📦 Installation & Setup

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

---

## 🏆 Key Features

1. **3D Target Garden**: Set targets and watch your plants grow in real-time as you log positive carbon choices.
2. **Observatory Analytics**: Rotate category share cylinders and examine period comparison bars.
3. **EcoBot Chat Hologram**: Speak directly to a Gemini 1.5 Flash assistant customized with your carbon profiles.
4. **Interactive Dashboard**: Features typewriter greetings, fire streak badges, and staggered counting metric cards.
5. **Physical Podium Leaderboard**: Staggered gold/silver/bronze stages that rise dynamically on mount.
