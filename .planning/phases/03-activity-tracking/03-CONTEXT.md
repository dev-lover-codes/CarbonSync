# Phase 03: Activity Tracking & Dashboard

## Overview
This phase focuses on building the core user experience for CarbonSync: the main Dashboard for visual insights and the Activity Tracker for logging environmental impact.

## Requirements

### Dashboard (src/pages/Dashboard.jsx)
- **Design:** Organic, nature-inspired. Cards with subtle green tints. Data feels alive.
- **Sections:**
  1. **Hero Greeting Card:** Full-width card with "Good morning, {name} 🌱", a large circular gauge for today's carbon score (CSS+SVG), color-coded by performance, and quick actions ("+ Log Activity", "Ask AI Coach").
  2. **Stats Row:** 4 cards (Today's CO2, Weekly CO2 with Recharts sparkline, CO2 Saved, Streak).
  3. **Weekly Chart:** Recharts stacked BarChart showing last 7 days CO2 by category.
  4. **Goals Progress:** Top 3 active goals with progress bars.
  5. **Recent Activities:** Feed of the last 5 activities.
  6. **AI Insight Card:** Card displaying the latest AI tip from context.
  7. **Tips of the Day:** 3 random tips from a static array, seeded by date.

### Activity Tracker (src/pages/Tracker.jsx)
- **Design:** Clean, form-focused. Step-by-step logging.
- **Sections:**
  1. **Top Stats:** Month/week toggle, category breakdown PieChart (Recharts), and Export CSV button.
  2. **Log Activity Modal:** 3-step form wizard:
     - Step 1: Category selection (Transport, Energy, Food, Shopping, Waste).
     - Step 2: Input details based on category (dropdowns/inputs).
     - Step 3: Confirmation showing calculated CO2e and comparisons (e.g., "driving Y km").
  3. **Activity Feed:** Grouped feed (Today, Yesterday, This Week) with category icons and delete functionality.
  4. **CO2 Calendar:** Intensity grid showing daily footprint levels (green/amber/red).

## Technical Implementation
- **State:** Use `useCarbon()` from `src/contexts/CarbonContext.jsx`.
- **Calculations:** Use `calculateFootprint` and `carbonFactors` from `src/config/carbonFactors.js`.
- **Charts:** Recharts for BarChart, PieChart, and sparklines.
- **Components:** Custom UI components (Card, Button, ProgressBar, etc.) from `src/components/ui/`.
- **Animations:** Framer Motion for modal transitions and card loading.
- **Iconography:** Lucide React.

## Constraints
- No external chart libraries besides Recharts.
- Circular gauge must be custom CSS+SVG.
- Ensure responsive design (Mobile Bottom Nav vs Desktop Sidebar).
