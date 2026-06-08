# Phase 6 Context: Community & AI Intelligence

## Phase Goal
Transform CarbonSync into a community-driven platform with personalized AI guidance.

## Requirements Covered
- **SOC-01**: User can create and join Groups/Teams for collective tracking
- **SOC-02**: Groups can participate in Collaborative Challenges with shared progress bars
- **SOC-03**: Users can view and post to a Community Feed for sharing achievements
- **AI-01**: User can interact with an "EcoCoach" Chatbot (powered by Gemini) for sustainability advice
- **AI-02**: Application generates weekly personalized insights based on user activity trends

## Decisions

### Social & Community
- **Group Management**: Use Firestore collections `groups` and `groupMembers`.
- **Challenges**: Implement as a sub-collection of `groups` or a top-level `challenges` collection with group participation.
- **Feed**: Use a `communityFeed` collection in Firestore. Leverage `onSnapshot` for real-time updates.
- **Privacy**: Ensure user-to-group and group-to-public privacy controls are in place via Firestore Security Rules (to be planned in detail).

### AI Intelligence (EcoCoach)
- **Engine**: Google Gemini (Pro/Flash).
- **Integration**: Vercel AI SDK (`ai` package) + `@ai-sdk/google`.
- **UI**: `assistant-ui` for the chat interface.
- **Context**: Inject user's recent activity logs and goals into the prompt for personalized coaching.

### Personalized Insights
- **Generation**: Triggered weekly (or on-demand) via a serverless function (or client-side call if appropriate for hackathon) that summarizes activity data using Gemini.
- **Storage**: Store generated insights in `userInsights` collection for later retrieval.

## Implementation Details
1. Install new dependencies: `ai`, `@ai-sdk/google`, `assistant-ui`, `framer-motion`.
2. Setup Gemini API configuration in `.env.local`.
3. Implement Firestore helpers for Groups, Challenges, and Feed in `src/lib/firestore-social.js`.
4. Create the "EcoCoach" chat component.
5. Implement the weekly insights generation logic.
6. Build the community feed and group management UI components.
