# Phase 3: Activity Tracking - Research

**Researched:** 2026-06-08
**Domain:** Environmental Activity Logging & CO2 Calculation
**Confidence:** HIGH

## Summary

Phase 3 focuses on enabling users to log their environmental activities and calculating the resulting CO2 impact. The technical challenge lies in providing a seamless UI for diverse activity types (transport, energy, food, shopping, waste) and ensuring accurate calculations using standardized factors. 

**Primary recommendation:** Use the `carbon-footprint` library for verified emission factors and implement a modular form architecture using `react-hook-form` and `zod` to handle multi-category activity logging.

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Activity Logging UI | Browser | — | Form state management and user input |
| CO2 Calculation | Browser | API/Functions | Immediate feedback for users; ensures logic is reusable in UI |
| Data Persistence | Database (Firestore) | — | Storing activity logs per user |
| Unit Conversions | Browser/Logic | — | Converting user-friendly units (km, kWh) to calculation units (m, J) |

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| `react-hook-form` | 7.78.0 | Form state management | Industry standard for performant, flexible forms |
| `zod` | 4.4.3 | Schema validation | Type-safe validation with excellent React integration |
| `carbon-footprint` | 1.7.0 | Emission factors | Provides SI-based constants for food, transport, and energy |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `date-fns` | 4.4.0 | Date formatting | Displaying "recent" activities with relative time (e.g., "2 hours ago") |
| `lucide-react` | Latest | Iconography | Visual cues for categories (car, leaf, bulb, etc.) |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| `carbon-footprint` | Manual constants | Library is more maintainable and covers more edge cases (e.g., specific flight lengths) |
| `react-hook-form` | Native state | Boilerplate grows exponentially with 5+ different form types |

**Installation:**
```bash
npm install react-hook-form zod carbon-footprint date-fns lucide-react
```

## Package Legitimacy Audit

| Package | Registry | Age | Downloads | Source Repo | slopcheck | Disposition |
|---------|----------|-----|-----------|-------------|-----------|-------------|
| `react-hook-form` | npm | 5 yrs | 5M+/wk | github.com/react-hook-form/react-hook-form | [OK] | Approved |
| `zod` | npm | 4 yrs | 10M+/wk | github.com/colinhacks/zod | [OK] | Approved |
| `date-fns` | npm | 8 yrs | 20M+/wk | github.com/date-fns/date-fns | [OK] | Approved |
| `carbon-footprint` | npm | 4 yrs | ~200/wk | github.com/NMF-earth/carbon-footprint | [SUS] | Approved (Niche) |

**Packages removed due to slopcheck [SLOP] verdict:** none
**Packages flagged as suspicious [SUS]:** `carbon-footprint` [WARNING: low download volume — verified as reputable via NMF-earth GitHub.]

## Architecture Patterns

### Recommended Project Structure
```
src/
├── components/
│   └── activities/
│       ├── ActivityForm.tsx      # Main form container
│       ├── TransportFields.tsx   # Category-specific fields
│       ├── EnergyFields.tsx
│       └── ActivityList.tsx      # Recent activity display
├── lib/
│   └── calculations.ts           # Wrapper for carbon-footprint SI conversions
└── config/
    └── activityTypes.ts          # Metadata for UI categories and icons
```

### Pattern 1: Unit-Safe Calculation Wrapper
**What:** A utility that wraps `carbon-footprint` to handle unit conversions from user input (km, kWh) to library units (m, J).
**Example:**
```typescript
import { transport, energy } from 'carbon-footprint';

export const calculateTransport = (km: number, mode: keyof typeof transport) => {
  return (km * 1000) * transport[mode]; // returns kg CO2
};

export const calculateEnergy = (kwh: number, source: keyof typeof energy) => {
  return (kwh * 3600000) * energy[source]; // returns kg CO2
};
```

### Anti-Patterns to Avoid
- **Client-only calculations:** While calculations happen on the client for UX, ensure the same logic is used or verified when reading data for leaderboards (Phase 5).
- **Direct library coupling in UI:** Wrap the calculation library in a local `lib/calculations.ts` to allow easy factor updates without touching UI components.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Emission Factors | Custom JSON factors | `carbon-footprint` | Verified factors for transport/food; SI unit consistency |
| Form Validation | Manual regex/checks | `zod` | Handling nested objects and numeric constraints reliably |
| Relative Time | "X minutes ago" logic | `date-fns` | Handles edge cases (pluralization, leap years, timezones) |

## Common Pitfalls

### Pitfall 1: Unit Mismatches
**What goes wrong:** User enters miles but formula expects meters.
**How to avoid:** Explicitly label inputs in UI (e.g., "Distance (km)") and use conversion helpers in the calculation layer.

### Pitfall 2: Firestore Indexing
**What goes wrong:** Fetching "Recent Activities" for a user fails or is slow without an index.
**How to avoid:** Create a composite index in Firestore for `userId` (ASC) and `timestamp` (DESC).

## Code Examples

### Zod Schema for Activities
```typescript
import { z } from 'zod';

export const ActivitySchema = z.object({
  type: z.enum(['transport', 'energy', 'food', 'shopping', 'waste']),
  subType: z.string().min(1),
  value: z.number().positive(),
  timestamp: z.date().default(() => new Date()),
});

export type ActivityInput = z.infer<typeof ActivitySchema>;
```

### Firestore Helper for Activities
```typescript
// Source: .planning/phase-01/01-02-PLAN.md (Refined)
import { db } from './firebase';
import { collection, addDoc, query, where, orderBy, limit, getDocs } from 'firebase/firestore';

export const logActivity = async (userId: string, data: any) => {
  return await addDoc(collection(db, `users/${userId}/activities`), {
    ...data,
    timestamp: new Date()
  });
};

export const getRecentActivities = async (userId: string, count = 10) => {
  const q = query(
    collection(db, `users/${userId}/activities`),
    orderBy('timestamp', 'desc'),
    limit(count)
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
```

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | Development | ✓ | 22.16.0 | — |
| npm | Package management | ✓ | 10.9.2 | — |
| Firebase CLI | Deployment/Rules | ✓ | 15.19.1 | — |

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Vitest 3.0.0+ |
| Config file | `vitest.config.ts` |
| Quick run command | `npm test` |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| ACT-01 | User logs car travel 10km | Integration | `npm test src/components/activities/__tests__` | ❌ Wave 0 |
| ACT-02 | Calculation matches factor | Unit | `npm test src/lib/__tests__/calculations.test.ts` | ❌ Wave 0 |
| ACT-03 | Activity list shows 5 items | Integration | `npm test src/components/activities/__tests__` | ❌ Wave 0 |

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V5 Input Validation | yes | `zod` for all form submissions |
| V4 Access Control | yes | Firestore rules: `allow read, write: if request.auth.uid == userId` |

### Known Threat Patterns for React/Firebase

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Privilege Escalation | Elevation of Privilege | Strict Firestore security rules per user path |
| Mass Assignment | Tampering | Use `zod` to pick only allowed fields before saving to Firestore |

## Sources

### Primary (HIGH confidence)
- `carbon-footprint` library docs - API for transport, food, energy calculations.
- Firestore official docs - Sub-collection patterns for user data.

### Secondary (MEDIUM confidence)
- UK/US GHG Conversion Factors (2024/2025) - Cross-referenced with library constants.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Industry defaults (zod, react-hook-form).
- Architecture: HIGH - Standard Firebase/React patterns.
- Pitfalls: HIGH - Common issues in unit-based logging apps.

**Research date:** 2026-06-08
**Valid until:** 2026-07-08
