# Technology Stack

**Analysis Date:** 2025-01-24

## Languages

**Primary:**
- TypeScript 5.x - Core application logic and components

**Secondary:**
- JavaScript (ESM) - Configuration files (`eslint.config.mjs`, `postcss.config.mjs`)

## Runtime

**Environment:**
- Node.js (v20+ recommended based on `@types/node`)

**Package Manager:**
- npm
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- Next.js 16.2.4 - React framework (App Router)
- React 19.2.4 - UI library

**Testing:**
- Not detected - No testing framework or tests found in `package.json`

**Build/Dev:**
- Tailwind CSS 4 - Utility-first CSS framework
- ESLint 9 - Linting
- PostCSS 4 (via `@tailwindcss/postcss`) - CSS processing

## Key Dependencies

**Critical:**
- `ai` 6.0.194 - Vercel AI SDK for building AI-powered features
- `@ai-sdk/google` 3.0.80 - Google AI provider for AI SDK
- `@google/stitch-sdk` 0.3.5 - Google Stitch SDK integration

**Infrastructure:**
- `supabase` 2.105.0-beta.1 - Supabase CLI for database and backend management

## Configuration

**Environment:**
- Configured via `.idx/mcp.json` for Firebase integration
- `.env` files (not detected, but typically used)

**Build:**
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS configuration
- `eslint.config.mjs` - ESLint configuration

## Platform Requirements

**Development:**
- Firebase Studio / IDX environment (based on `GEMINI.md` and `.idx/` directory)

**Production:**
- Vercel (recommended deployment target for Next.js)

---

*Stack analysis: 2025-01-24*
