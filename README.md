<div align="center">
  <img src="public/favicon.ico" alt="CarbonSync Logo" width="80" height="80" />
  <h1>🌍 CarbonSync 3D</h1>
  <p><strong>An immersive, fully 3D gamified carbon profiling dashboard built with React and WebGL.</strong></p>
  
  [![Live Demo](https://img.shields.io/badge/Live_Demo-carbonsync--site.netlify.app-00ff87?style=for-the-badge&logo=netlify&logoColor=black)](https://carbonsync-site.netlify.app)
  <br />
  
  [![React](https://img.shields.io/badge/React_18-20232A?style=flat-square&logo=react&logoColor=61DAFB)](#)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](#)
  [![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white)](#)
  [![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)](#)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](#)
  [![Google Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=flat-square&logo=google&logoColor=white)](#)

</div>

<br />

## 📖 Overview

**CarbonSync 3D** is a next-generation environmental impact tracker developed for the **Hack2skill PromptWars Competition**. It moves beyond traditional 2D analytics, offering a spatial computing experience directly in the browser. 

By leveraging **WebGL**, CarbonSync transforms the mundane task of activity logging into an engaging journey through 3D data landscapes, interactive 3D charts, and an AI-driven "Eco Coach" powered by **Google Gemini**.

---

## ✨ Key Features

- **🛡️ 3D Spatial Dashboard**: Navigate a high-fidelity WebGL environment with glassmorphic UI elements and dynamic depth.
- **🌱 Interactive Growth System**: Set carbon reduction targets and watch your digital garden flourish as you hit your goals.
- **🤖 Gemini AI Eco-Coach**: A personalized AI hologram that analyzes your habits and provides real-time, context-aware reduction strategies.
- **📊 Advanced 3D Analytics**: Interactive cylinders, 3D bar charts, and category-share visualizations for a deep dive into your carbon footprint.
- **🏆 Global Leaderboards**: Compete with a community of eco-conscious users on a dynamic, tiered 3D podium.
- **🔥 Persistence & Streaks**: Real-time activity logging and streak tracking via Firebase Firestore.

---

## 🛠️ Tech Stack

### Frontend & Graphics
- **Core**: React 18 + Vite (TypeScript/JSX)
- **3D Engine**: [Three.js](https://threejs.org/) with [@react-three/fiber](https://github.com/pmndrs/react-three-fiber)
- **3D Utilities**: [@react-three/drei](https://github.com/pmndrs/drei)
- **Animation**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/), and [@react-spring/three](https://www.react-spring.dev/)
- **Styling**: Tailwind CSS + Custom Post-Processing (Bloom, Chromatic Aberration)

### Backend & AI
- **Auth & Database**: [Firebase](https://firebase.google.com/) (Authentication & Firestore)
- **AI Engine**: [Google Gemini 1.5 Flash](https://ai.google.dev/) via `@google/generative-ai`
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)

---

## 🎨 Design Language: "Eco Cosmos"

CarbonSync features a "Space-Station" aesthetic, blending nature with high-tech futurism.

- **Background**: Deep Forest Space (`#020b06`) with custom starfield.
- **Primary**: Glowing Mint (`#00ff87`) for interactive highlights.
- **Secondary**: Cyber Cyan (`#00d4ff`) for data visualizations.
- **Materials**: Multi-layered glassmorphism with high transmission and thickness for realistic refraction.
- **Experience**: Subtle camera shake, ambient particles, and typewriter-style UI feedback.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [Firebase Project](https://console.firebase.google.com/)
- A [Google AI (Gemini) API Key](https://aistudio.google.com/app/apikey)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/carbonsync-3d.git
   cd carbonsync-3d
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Fill in your Firebase and Gemini credentials.

4. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

### Deployment

The project is optimized for **Netlify** or **Vercel**. 

**Netlify CLI Deployment:**
```bash
npm run build
npx netlify deploy --dir=dist --prod
```

---

## 📂 Project Structure

```text
src/
├── components/          # 3D and UI components (Globe, Panels, Charts)
├── contexts/            # React Contexts (Auth, Carbon logic)
├── lib/                 # Service initializations (Firebase, Gemini)
├── pages/               # Main scene orchestrators (Dashboard, Leaderboard)
├── services/            # API and Data services
├── store/               # Global state (Zustand)
├── utils/               # Formatting, Calculations, Math helpers
└── shaders/             # Custom GLSL shaders for WebGL effects
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  Made with ❤️ for a greener planet.
</div>
