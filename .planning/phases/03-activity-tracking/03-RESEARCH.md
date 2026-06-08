# Phase 03: Activity Tracking & Dashboard - Research

**Researched:** 2025-05-14
**Domain:** Frontend (React, Recharts, Framer Motion)
**Confidence:** HIGH

## Summary

This phase involves building the two primary functional hubs of CarbonSync: the **Dashboard** and the **Activity Tracker**. Research confirms that the core technology stack (Recharts, Framer Motion, Lucide) is already installed and integrated into the project. The existing `AppLayout` provides a high-quality wrapper with navigation already defined.

Key infrastructure like `CarbonContext` and `AuthContext` is mostly ready, though `CarbonContext` requires additional derived state (daily totals, category breakdowns) to support the visual requirements of the Dashboard. The missing pages (`Dashboard.jsx`, `Tracker.jsx`) need to be created as new components and registered in a yet-to-be-configured `BrowserRouter` in `App.tsx`.

**Primary recommendation:** Extend `CarbonContext` with `useMemo` hooks for complex data derivations (grouping activities by date/category) to keep page components clean and performant.

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Carbon Calculations | Browser (Config) | — | Performed client-side using static factors in `carbonFactors.js`. |
| Data Aggregation | Frontend (Context) | — | `CarbonContext` handles filtering and summing for charts. |
| User Identity | Frontend (Context) | API (Firebase) | `AuthContext` provides the profile name for greetings. |
| Visualization | Browser (Recharts) | — | Recharts handles all rendering of SVG charts and sparklines. |
| Persistence | API (Firestore) | — | Activities and goals are stored in sub-collections per user. |

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Recharts | ^2.15.4 | Visualization | Declarative, React-native chart components with great responsive support. |
| Framer Motion | ^10.18.0 | Animations | Industry standard for production-ready React animations and transitions. |
| Lucide React | ^0.263.1 | Iconography | Lightweight, customizable SVG icon set. |
| React Router | ^6.30.4 | Navigation | Standard routing library for React SPAs. |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|--------------|
| date-fns | ^4.1.0 [ASSUMED] | Date Logic | Recommended for grouping activities into "Today", "Yesterday", and "This Week". |
| clsx | ^2.1.1 [ASSUMED] | Class Mgmt | For clean conditional Tailwind class application. |

**Installation:**
```bash
npm install date-fns clsx tailwind-merge
```

## Package Legitimacy Audit

| Package | Registry | Age | Downloads | Source Repo | slopcheck | Disposition |
|---------|----------|-----|-----------|-------------|-----------|-------------|
| recharts | npm | 8 yrs | 1.2M/wk | github.com/recharts/recharts | [OK] | Approved |
| framer-motion | npm | 5 yrs | 3.5M/wk | github.com/framer/motion | [OK] | Approved |
| lucide-react | npm | 2 yrs | 2.5M/wk | github.com/lucide-icons/lucide | [OK] | Approved |
| date-fns | npm | 9 yrs | 15M/wk | github.com/date-fns/date-fns | [OK] | Approved |

*Slopcheck was unavailable during research; packages listed above are industry standards with extremely high download volume and long history.*

## Architecture Patterns

### Recommended Project Structure
```
src/
├── components/
│   ├── dashboard/       # Dashboard-specific sub-components
│   ├── tracker/         # Tracker-specific sub-components
│   └── ui/              # Reusable atoms (Card, Button, etc.)
├── pages/
│   ├── Dashboard.jsx    # Main view
│   └── Tracker.jsx      # Logging & History view
└── lib/
    └── utils.js         # Formatting and date helpers
```

### Pattern 1: Circular SVG Gauge
**What:** A custom SVG gauge using stroke-dasharray for the "Daily Score".
**When to use:** Hero section of Dashboard.
**Example:**
```jsx
// Based on standard SVG dash-offset patterns
const radius = 70;
const circumference = 2 * Math.PI * radius;
const offset = circumference - (percentage / 100) * circumference;

<svg width="160" height="160" className="transform -rotate-90">
  <circle cx="80" cy="80" r={radius} stroke="#E5E7EB" strokeWidth="12" fill="transparent" />
  <circle
    cx="80" cy="80" r={radius}
    stroke="var(--color-primary)" strokeWidth="12" fill="transparent"
    strokeDasharray={circumference}
    strokeDashoffset={offset}
    strokeLinecap="round"
    className="transition-all duration-1000 ease-out"
  />
</svg>
```

### Pattern 2: Multi-Step Wizard
**What:** State-driven modal for logging activity.
**When to use:** `ActivityLogModal` in Tracker.
**Logic:** Use a `step` state (1-3) to switch between Category -> Details -> Confirmation.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Chart Tooltips | Custom DOM overlays | Recharts Tooltip | Handles positioning and portals correctly out of the box. |
| Date Formatting | `new Date().toLocaleDateString()` | date-fns | Consistency across browsers and easier "relative time" (e.g., "2 hours ago"). |
| Modal Transitions | Custom CSS opacity | Framer Motion AnimatePresence | Handles unmounting animations which CSS alone cannot do easily. |

## Common Pitfalls

### Pitfall 1: Recharts ResponsiveContainer sizing
**What goes wrong:** Charts rendering with 0 width or failing to resize.
**Why it happens:** `ResponsiveContainer` needs a parent with an explicit height (or at least one that isn't `h-auto`).
**How to avoid:** Always wrap the chart's parent `div` in a fixed height class (e.g., `h-[300px]`).

### Pitfall 2: Date Object Serialization
**What goes wrong:** "timestamp.toDate is not a function" errors.
**Why it happens:** Firestore returns a `Timestamp` object, not a JS `Date`.
**How to avoid:** Use a utility like `(ts) => ts?.toDate ? ts.toDate() : new Date(ts)` to normalize dates.

## Code Examples

### Stacked Bar Chart (Weekly View)
```jsx
// Source: https://recharts.org/en-US/examples/StackedBarChart
<ResponsiveContainer width="100%" height={300}>
  <BarChart data={weeklyData}>
    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
    <XAxis dataKey="day" axisLine={false} tickLine={false} />
    <YAxis axisLine={false} tickLine={false} />
    <Tooltip cursor={{fill: 'transparent'}} content={<CustomTooltip />} />
    <Bar dataKey="transport" stackId="a" fill="#2D6A4F" radius={[0, 0, 0, 0]} />
    <Bar dataKey="energy" stackId="a" fill="#52B788" />
    <Bar dataKey="food" stackId="a" fill="#8B5E3C" radius={[4, 4, 0, 0]} />
  </BarChart>
</ResponsiveContainer>
```

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | `date-fns` is preferred over native `Intl` | Supporting Stack | Minor; native `Intl` is capable but less developer-friendly for relative time. |
| A2 | Users want a daily reset for the Hero gauge | Architecture | Moderate; if users prefer "Rolling 24h", logic must change. Defaulting to "Calendar Day". |

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | Runtime | ✓ | 22.16.0 | — |
| npm | Package Mgmt | ✓ | 10.9.2 | — |
| Recharts | Visualization | ✓ | 2.15.4 | — |
| Framer Motion | Animations | ✓ | 10.18.0 | — |

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Vitest |
| Config file | vite.config.ts |
| Quick run command | `npm run test` (if defined) |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| DASH-01 | Daily CO2 Calculation | Unit | `npm run test` | ❌ Wave 0 |
| TRACK-01 | Activity Logging (Mocked) | Integration | `npm run test` | ❌ Wave 0 |

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V5 Input Validation | yes | Ensure numeric inputs for activity amounts are positive. |

### Known Threat Patterns

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Client-side logic tampering | Tampering | Critical calculations should ideally be mirrored or verified on server (deferred). |

## Sources

### Primary (HIGH confidence)
- `package.json` - Dependency verification.
- `src/contexts/CarbonContext.jsx` - Capability audit.
- `src/components/layout/AppLayout.jsx` - Navigation and UI pattern verification.

### Secondary (MEDIUM confidence)
- Training Data - Recharts implementation patterns.
- Training Data - Framer Motion best practices.
