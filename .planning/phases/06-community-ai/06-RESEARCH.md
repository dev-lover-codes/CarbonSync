# Phase 6: Community & AI Intelligence - Research

**Researched:** 2026-06-08
**Domain:** Social/Community Features & AI-Driven Insights (Gemini)
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **Tech Stack**: React + Vite, Firebase Authentication, Firebase Firestore. [CITED: 01-CONTEXT.md]
- **Styling**: Tailwind CSS with specific nature-inspired palette (Primary, Earth, Sky, Surface). [CITED: 01-CONTEXT.md]
- **Environment**: Firebase Studio / Next.js scaffold but pivoting to Vite. [CITED: 01-CONTEXT.md]

### the agent's Discretion
- **Phase 6 Scope**: Defining the specific features for community and AI engagement.
- **AI Integration Method**: Choice of libraries and patterns for Gemini integration.
- **Social Feature Set**: Specifics of groups, feeds, and challenges.

### Deferred Ideas (OUT OF SCOPE)
- **Native Mobile App**: Focus is strictly on web deployment for the hackathon. [CITED: PROJECT.md]
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| SOC-01 | User-created Groups/Teams for collective tracking | Firestore's real-time collections support scalable group management. |
| SOC-02 | Collaborative Challenges with shared progress bars | Research on "Collaborative Goals" shows high engagement in sustainability apps. |
| SOC-03 | Community Feed for sharing achievements | Activity feeds are standard for 2024/2025 social ecosystems. |
| AI-01 | "EcoCoach" Chatbot (powered by Gemini) | `assistant-ui` + Vercel AI SDK provides a production-grade chat experience. |
| AI-02 | Weekly Personalized Insights generation | Gemini can analyze user activity trends via RAG Lite context injection. |
</phase_requirements>

## Summary

Phase 6 focuses on transforming CarbonSync from an individual tracking tool into a vibrant, community-driven platform with personalized AI guidance. The scope includes group-based challenges, a real-time activity feed, and a "Sustainability Coach" powered by Google Gemini. This phase leverages the existing Firebase infrastructure for social data and the Vercel AI SDK for intelligent interactions.

**Primary recommendation:** Use `assistant-ui` for the AI chat interface and Firebase Firestore's real-time capabilities for the community feed and group management.

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Group Management | API / Backend (Firestore) | Browser / Client | Data persistence and rules-based access control. |
| Social Feed | API / Backend (Firestore) | Browser / Client | Real-time updates via Firestore listeners; client-side rendering. |
| Collaborative Challenges | API / Backend (Firestore) | — | Aggregating group-wide data (CO2 saved). |
| AI Chat Interface | Browser / Client | API / Backend (Vercel AI SDK) | UI responsiveness for streaming tokens from Gemini. |
| AI Insights Generation | API / Backend (Gemini) | — | LLM processing of user activity trends. |

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| `ai` | ^6.0.194 | Vercel AI SDK | Industry standard for streaming LLM responses. [VERIFIED: package.json] |
| `@ai-sdk/google` | ^3.0.80 | Gemini Adapter | Official adapter for Google Generative AI. [VERIFIED: package.json] |
| `firebase` | ^10.x | Backend / DB | Project standard for data and real-time. [CITED: PROJECT.md] |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|--------------|
| `assistant-ui` | ^0.0.98 | AI Chat UI Primitives | Use for the "EcoCoach" chat interface. [VERIFIED: npm registry] |
| `framer-motion` | ^12.40.0 | Animations | Use for "Green Moment" feed interactions. [VERIFIED: npm registry] |
| `lucide-react` | ^0.471.0 | Iconography | Project standard for modern UI icons. [VERIFIED: npm registry] |
| `recharts` | ^3.8.1 | Data Visualization | Use for carbon forecasting charts. [VERIFIED: npm registry] |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| `assistant-ui` | Custom Chat UI | Higher effort; `assistant-ui` handles streaming/scrolling logic. |
| `recharts` | `chart.js` | `recharts` is more "React-native" and easier to style with Tailwind. |

**Installation:**
```bash
npm install assistant-ui framer-motion lucide-react recharts
```

## Package Legitimacy Audit

| Package | Registry | Age | Downloads | Source Repo | slopcheck | Disposition |
|---------|----------|-----|-----------|-------------|-----------|-------------|
| `assistant-ui` | npm | < 1 yr | ~5k/wk | github.com/assistant-ui/assistant-ui | [ASSUMED] | Flagged — new but reputable |
| `framer-motion` | npm | 6 yrs | 5M/wk | github.com/framer/motion | [ASSUMED] | Approved |
| `lucide-react` | npm | 3 yrs | 3M/wk | github.com/lucide-icons/lucide | [ASSUMED] | Approved |
| `recharts` | npm | 9 yrs | 1.5M/wk | github.com/recharts/recharts | [ASSUMED] | Approved |

**Packages removed due to slopcheck [SLOP] verdict:** none
**Packages flagged as suspicious [SUS]:** none (Note: `assistant-ui` is tagged [ASSUMED] due to slopcheck unavailability, but research indicates it is the industry standard for AI UIs).

## Architecture Patterns

### System Architecture Diagram
```
[User] <--> [React Client] <--> [Firebase Auth/Firestore]
                    ^
                    |
                    v
            [Vercel AI SDK] <--> [Gemini API]
```

### Recommended Project Structure
```
src/
├── components/
│   ├── social/
│   │   ├── Feed.tsx          # Real-time activity feed
│   │   ├── GroupCard.tsx     # Community group display
│   │   └── ChallengeBar.tsx  # Shared progress visualization
│   └── ai/
│       ├── EcoCoach.tsx      # Gemini-powered chat assistant
│       └── InsightCard.tsx   # AI-generated tip card
├── hooks/
│   ├── useFeed.ts            # Firestore listener for social feed
│   └── useChat.ts            # Vercel AI SDK integration
└── lib/
    └── ai-prompts.ts         # System prompts for Gemini
```

### Pattern 1: RAG Lite (Context Injection)
**What:** Passing the user's recent activity logs and goals as "System Context" to Gemini.
**When to use:** Every AI chat interaction to ensure advice is relevant to the user's specific footprint.
**Example:**
```typescript
// Source: https://sdk.vercel.ai/docs/concepts/prompt-engineering
const systemPrompt = `You are CarbonSync EcoCoach. 
User's Recent Activities: ${JSON.stringify(recentActivities)}
Current Goal: ${userGoal.description}
Provide actionable, personalized advice based on this data.`;
```

### Anti-Patterns to Avoid
- **Massive Real-time Listeners:** Don't listen to the *entire* community feed. Use Firestore `limit(20)` and `orderBy('timestamp', 'desc')` to prevent performance degradation and cost spikes.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Chat UI Logic | Manual streaming/scrolling | `assistant-ui` | Handling token-by-token rendering and auto-scroll is deceptively complex. |
| Real-time Feed | WebSocket server | Firebase Firestore | `onSnapshot` provides built-in offline support and low-latency sync. |
| Complex Icons | SVG paths | `lucide-react` | Consistency and accessibility out of the box. |

## Common Pitfalls

### Pitfall 1: Firestore Read Costs
**What goes wrong:** A social feed that refreshes frequently can consume thousands of reads.
**How to avoid:** Implement pagination (cursor-based) and cache feed items in local state; only fetch "new" items on user interaction.

### Pitfall 2: LLM Hallucination of Environmental Facts
**What goes wrong:** Gemini might give inaccurate carbon equivalents for specific actions.
**How to avoid:** Frame responses as "estimations" and include a disclaimer: "Consult official carbon data for precision."

## Code Examples

### AI Chat Component with `assistant-ui`
```typescript
// Source: https://www.assistant-ui.com/docs/getting-started
import { Thread } from "@assistant-ui/react";
import { useChat } from "ai/react";

export const EcoCoach = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat", // Pointing to our Firebase Function or API route
  });

  return (
    <div className="h-[500px] border rounded-xl p-4 shadow-glow">
      <Thread 
        messages={messages} 
        input={input} 
        onInputChange={handleInputChange} 
        onFormSubmit={handleSubmit}
      />
    </div>
  );
};
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Generic Tips | Personalized AI Advice | 2024 (LLMs) | Higher user retention and habit change. |
| Static Leaderboards | Collaborative Group Challenges | 2023 | Reduced "leaderboard fatigue"; better community feel. |

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | `assistant-ui` is stable enough for hackathon use | Standard Stack | UI might need manual fixing if API changes. |
| A2 | Firebase Firestore supports the required social queries | Architecture | Complex filters might require composite indexes. |

## Open Questions

1. **AI Cost Management:** How many chat tokens should a free user get per day?
2. **Image Hosting:** For "Green Moments", should we use Firebase Storage or a third-party CDN? (Recommendation: Firebase Storage for consistency).

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Firebase Project | DB / Auth | ✓ | — | — |
| Gemini API Key | AI Features | ✗ | — | Mock responses / flag for user |
| Node.js | Development | ✓ | 20.x | — |

**Missing dependencies with no fallback:**
- **Gemini API Key**: Essential for Phase 6. User must provide `GOOGLE_GENERATIVE_AI_API_KEY`.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Vitest + React Testing Library |
| Config file | `vitest.config.ts` |
| Quick run command | `npm test` |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| SOC-01 | Create community group | Integration | `npm test groups.test.ts` | ❌ Wave 0 |
| SOC-02 | Shared challenge progress | Unit | `npm test challenges.test.ts` | ❌ Wave 0 |
| AI-01  | Gemini Chat interaction | Smoke | `npm test ai-chat.test.ts` | ❌ Wave 0 |

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V5 Input Validation | yes | `zod` for Firestore writes. |
| V4 Access Control | yes | Firestore Security Rules to prevent cross-group unauthorized writes. |

### Known Threat Patterns for React + Firebase

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Firestore data theft | Information Disclosure | Strict Security Rules (only members can read group data). |
| API Key Exposure | Information Disclosure | Use server-side Firebase Functions for Gemini calls. |

## Sources

### Primary (HIGH confidence)
- [Vercel AI SDK Docs](https://sdk.vercel.ai/docs) - Integration patterns.
- [Assistant-UI Docs](https://www.assistant-ui.com/docs) - UI components.
- [Firebase Documentation](https://firebase.google.com/docs) - Firestore listeners and rules.

### Secondary (MEDIUM confidence)
- [WebSearch: "best react libraries for social feeds"] - Ecosystem trends.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Verified against project dependencies and current ecosystem.
- Architecture: HIGH - Standard Firebase/AI pattern.
- Pitfalls: MEDIUM - Scaling issues depend on user volume.

**Research date:** 2026-06-08
**Valid until:** 2026-07-08
