# Graph Report - .  (2026-06-10)

## Corpus Check
- 136 files · ~60,253 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 540 nodes · 895 edges · 58 communities (29 shown, 29 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.85)
- Token cost: 4,250 input · 1,950 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Authentication Flow|Authentication Flow]]
- [[_COMMUNITY_AI Coach Interface|AI Coach Interface]]
- [[_COMMUNITY_Carbon Footprint Context|Carbon Footprint Context]]
- [[_COMMUNITY_Firebase Integration|Firebase Integration]]
- [[_COMMUNITY_Activity Tracking|Activity Tracking]]
- [[_COMMUNITY_Package Dependencies|Package Dependencies]]
- [[_COMMUNITY_Auth State Management|Auth State Management]]
- [[_COMMUNITY_Dashboard Insights|Dashboard Insights]]
- [[_COMMUNITY_Tracker Data Model|Tracker Data Model]]
- [[_COMMUNITY_3D Background Scenes|3D Background Scenes]]
- [[_COMMUNITY_Interactive Goals|Interactive Goals]]
- [[_COMMUNITY_Leaderboard Fetching|Leaderboard Fetching]]
- [[_COMMUNITY_Leaderboard Display|Leaderboard Display]]
- [[_COMMUNITY_Project Planning Config|Project Planning Config]]
- [[_COMMUNITY_3D Charts|3D Charts]]
- [[_COMMUNITY_Landing Page Graphics|Landing Page Graphics]]
- [[_COMMUNITY_Goal Management Logic|Goal Management Logic]]
- [[_COMMUNITY_3D Navigation|3D Navigation]]
- [[_COMMUNITY_3D Input Panels|3D Input Panels]]
- [[_COMMUNITY_Circular 3D Charts|Circular 3D Charts]]
- [[_COMMUNITY_Auth Globe Animation|Auth Globe Animation]]
- [[_COMMUNITY_Dev Environment Scripts|Dev Environment Scripts]]
- [[_COMMUNITY_Landing Page UI|Landing Page UI]]
- [[_COMMUNITY_Netlify Deployment|Netlify Deployment]]
- [[_COMMUNITY_Font Management Scripts|Font Management Scripts]]
- [[_COMMUNITY_Firestore Indexes|Firestore Indexes]]
- [[_COMMUNITY_Readme Documents|Readme Documents]]
- [[_COMMUNITY_Gemini CLI Settings|Gemini CLI Settings]]
- [[_COMMUNITY_IDX Environment config|IDX Environment config]]
- [[_COMMUNITY_Activity Plan|Activity Plan]]
- [[_COMMUNITY_Goal Dashboard Plan|Goal Dashboard Plan]]
- [[_COMMUNITY_Carbon Budget Context|Carbon Budget Context]]
- [[_COMMUNITY_AI Coach Research|AI Coach Research]]
- [[_COMMUNITY_Agent Rules|Agent Rules]]
- [[_COMMUNITY_Blueprint Management|Blueprint Management]]
- [[_COMMUNITY_Cloud Deploy Script|Cloud Deploy Script]]
- [[_COMMUNITY_Vercel Config|Vercel Config]]
- [[_COMMUNITY_VSCode Settings|VSCode Settings]]
- [[_COMMUNITY_Goal Form Plan|Goal Form Plan]]
- [[_COMMUNITY_Goal List Plan|Goal List Plan]]
- [[_COMMUNITY_Goal Context|Goal Context]]
- [[_COMMUNITY_Goal Research|Goal Research]]
- [[_COMMUNITY_RAG Lite Research|RAG Lite Research]]
- [[_COMMUNITY_Auth Illustration UI|Auth Illustration UI]]
- [[_COMMUNITY_App Entry Point|App Entry Point]]
- [[_COMMUNITY_404 Page|404 Page]]
- [[_COMMUNITY_Insights Plan|Insights Plan]]
- [[_COMMUNITY_Leaderboard Plan|Leaderboard Plan]]
- [[_COMMUNITY_Project Definition|Project Definition]]
- [[_COMMUNITY_Dev Wrapper Init|Dev Wrapper Init]]
- [[_COMMUNITY_Cloud Deployment|Cloud Deployment]]

## God Nodes (most connected - your core abstractions)
1. `useAuth()` - 45 edges
2. `Tracker` - 33 edges
3. `TrackerScene` - 28 edges
4. `useStore` - 24 edges
5. `DashboardScene` - 22 edges
6. `Insights` - 22 edges
7. `useState` - 20 edges
8. `useAuth` - 18 edges
9. `Goals` - 18 edges
10. `AICoach` - 17 edges

## Surprising Connections (you probably didn't know these)
- `EcoCoach Chatbot` --semantically_similar_to--> `EcoBot Chat Hologram`  [INFERRED] [semantically similar]
  .planning/phases/06-community-ai/06-RESEARCH.md → README.md
- `Graphify Knowledge Graph Flow` --conceptually_related_to--> `CarbonSync 3D Platform`  [INFERRED]
  GEMINI.md → README.md
- `BarChart3D()` --semantically_similar_to--> `AreaChart3D()`  [INFERRED] [semantically similar]
  src/components/BarChart3D.jsx → src/components/AreaChart3D.jsx
- `Scene()` --calls--> `Particles()`  [EXTRACTED]
  src/components/Scene.jsx → src/components/Particles.jsx
- `LandingScene()` --calls--> `useStore`  [EXTRACTED]
  src/pages/LandingScene.jsx → src/store/useStore.js

## Import Cycles
- 2-file cycle: `src/contexts/AuthContext.jsx -> src/pages/Auth.jsx -> src/contexts/AuthContext.jsx`
- 3-file cycle: `src/contexts/AuthContext.jsx -> src/lib/firebase.js -> src/pages/Auth.jsx -> src/contexts/AuthContext.jsx`
- 3-file cycle: `src/lib/firebase.js -> src/pages/Auth.jsx -> src/lib/firestore.js -> src/lib/firebase.js`
- 4-file cycle: `src/contexts/AuthContext.jsx -> src/lib/firestore.js -> src/lib/firebase.js -> src/pages/Auth.jsx -> src/contexts/AuthContext.jsx`

## Hyperedges (group relationships)
- **3D UI Components** — components_achievementbadge3d_achievementbadge3d, components_areachart3d_areachart3d, components_barchart3d_barchart3d, components_bottomnav3d_bottomnav3d, components_button3d_button3d, components_chatbubble3d_chatbubble3d [INFERRED 0.95]
- **Global State Providers** — contexts_authcontext_authprovider, contexts_carboncontext_carbonprovider [INFERRED 0.85]
- **Core 3D Components** — components_navbar3d_navbar3d, components_particles_particles, components_piechart3d_piechart3d, components_portal3d_portal3d, components_progressring3d_progressring3d, components_scene_scene, components_streakcalendar3d_streakcalendar3d [INFERRED 0.85]
- **Shared UI Components** — ui_avatar_avatar, ui_badge_badge, ui_button_button, ui_card_card, ui_input_input, ui_modal_modal, ui_progressbar_progressbar, ui_spinner_spinner [INFERRED 0.85]
- **Goals Dashboard Components** — 04_goals_management_04_02_plan_goalcard, 04_goals_management_04_02_plan_goalform, 04_goals_management_04_02_plan_goallist, 04_goals_management_04_02_plan_goals_dashboard [INFERRED 0.95]

## Communities (58 total, 29 thin omitted)

### Community 0 - "Authentication Flow"
Cohesion: 0.05
Nodes (34): ForgotPassword(), Login(), Signup(), EmptyState(), AuthContext, AuthProvider(), useAuth(), tips (+26 more)

### Community 1 - "AI Coach Interface"
Cohesion: 0.05
Nodes (51): AICoachScene, ChatMessage, ChatResponse, Complete, DailyFootprintCount, DashboardScene, DashboardScrollHandler, Diet (+43 more)

### Community 2 - "Carbon Footprint Context"
Cohesion: 0.08
Nodes (35): calculateFootprint(), carbonFactors, CarbonContext, CarbonProvider(), useCarbon(), AICoach(), QUICK_CHIPS, CATEGORY_COLORS (+27 more)

### Community 3 - "Firebase Integration"
Cohesion: 0.05
Nodes (36): auth, providers, firestore, database, indexes, location, rules, oAuthBrandDisplayName (+28 more)

### Community 4 - "Activity Tracking"
Cohesion: 0.08
Nodes (32): Activities, Activity, Amount, AnimatingSubmit, Attribute, BikeCO2, Blob, BusCO2 (+24 more)

### Community 5 - "Package Dependencies"
Cohesion: 0.08
Nodes (23): devDependencies, autoprefixer, eslint, eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-react-refresh, postcss, tailwindcss (+15 more)

### Community 6 - "Auth State Management"
Cohesion: 0.19
Nodes (19): ActiveTab, Auth, AuthScene, AuthSuccess, ConfirmPassword, Default, Email, Errors (+11 more)

### Community 7 - "Dashboard Insights"
Cohesion: 0.12
Nodes (18): DailyTip, Dashboard, DateString, Each, fetchInsights, fetchScore, fetchTip, Float (+10 more)

### Community 8 - "Tracker Data Model"
Cohesion: 0.24
Nodes (12): CATEGORIES, TYPE_LABELS, TYPE_UNITS, calcBikeCO2(), calcBusCO2(), calcCarCO2(), calcElectricityCO2(), calcFlightCO2() (+4 more)

### Community 9 - "3D Background Scenes"
Cohesion: 0.13
Nodes (11): Particles(), AICoachScene, AuthScene, CurrentScene(), DashboardScene, GoalsScene, InsightsScene, LandingScene (+3 more)

### Community 10 - "Interactive Goals"
Cohesion: 0.15
Nodes (14): Accordion, ActiveAccordion, At, Goal, Input, Int, IsEditing, Level (+6 more)

### Community 11 - "Leaderboard Fetching"
Cohesion: 0.17
Nodes (13): AICoach, fetchLeaders, Fixed, Gemini, Index, IsLoading, Leaderboard, Leaders (+5 more)

### Community 12 - "Leaderboard Display"
Cohesion: 0.17
Nodes (13): AiTips, Filter, IsGenerating, LeaderboardScene, Lifestyle, LowerCase, Search, SortBy (+5 more)

### Community 13 - "Project Planning Config"
Cohesion: 0.15
Nodes (12): commit_docs, granularity, mode, model_profile, parallelization, ship, pr_body_sections, workflow (+4 more)

### Community 15 - "3D Charts"
Cohesion: 0.18
Nodes (3): AreaChart3D(), BarChart3D(), DashboardScene()

### Community 17 - "Goal Management Logic"
Cohesion: 0.20
Nodes (10): AddGoal, fetch, Goals, IsModalOpen, IsSuggesting, Modal, SuggestedGoals, Target (+2 more)

### Community 18 - "3D Navigation"
Cohesion: 0.44
Nodes (5): BottomNav3D(), NavBar3D(), Portal3D(), Scene(), useStore

### Community 21 - "Auth Globe Animation"
Cohesion: 0.29
Nodes (3): AuthScene(), inputFocusStyle, inputStyle

### Community 22 - "Dev Environment Scripts"
Cohesion: 0.29
Nodes (6): child, __dirname, modifiedArgs, projectRoot, rawArgs, vitePath

### Community 23 - "Landing Page UI"
Cohesion: 0.33
Nodes (6): ElementById, FullYear, IntoView, Landing, main, Root

### Community 24 - "Netlify Deployment"
Cohesion: 0.60
Nodes (5): apiRequest(), deploy(), getAllFiles(), sha1File(), uploadFile()

### Community 27 - "Readme Documents"
Cohesion: 0.67
Nodes (3): Graphify Knowledge Graph Flow, CarbonSync 3D Platform, Eco Cosmos Design System

## Knowledge Gaps
- **224 isolated node(s):** `BeforeTool`, `npx`, `mode`, `granularity`, `parallelization` (+219 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **29 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Auth` connect `Auth State Management` to `Authentication Flow`, `Interactive Goals`, `Leaderboard Display`?**
  _High betweenness centrality (0.273) - this node is a cross-community bridge._
- **Why does `useState` connect `Leaderboard Display` to `AI Coach Interface`, `Activity Tracking`, `Auth State Management`, `Dashboard Insights`, `Interactive Goals`, `Leaderboard Fetching`, `Goal Management Logic`?**
  _High betweenness centrality (0.119) - this node is a cross-community bridge._
- **Why does `useAuth` connect `Auth State Management` to `AI Coach Interface`, `Activity Tracking`, `Dashboard Insights`, `Interactive Goals`, `Leaderboard Fetching`, `Leaderboard Display`, `Goal Management Logic`?**
  _High betweenness centrality (0.090) - this node is a cross-community bridge._
- **What connects `BeforeTool`, `npx`, `mode` to the rest of the system?**
  _229 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Authentication Flow` be split into smaller, more focused modules?**
  _Cohesion score 0.05271629778672032 - nodes in this community are weakly interconnected._
- **Should `AI Coach Interface` be split into smaller, more focused modules?**
  _Cohesion score 0.05254901960784314 - nodes in this community are weakly interconnected._
- **Should `Carbon Footprint Context` be split into smaller, more focused modules?**
  _Cohesion score 0.07607843137254902 - nodes in this community are weakly interconnected._