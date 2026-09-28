# Sprint 14 AI Architecture Prompts & Rationale Log

## Author & Project Info
- **Project**: TaskMatrix — Enterprise Agile Management System
- **Sprint**: Sprint 14 (The Walking Skeleton MVP)
- **Track**: Track A (Frontend Specialist)
- **Developer**: Shashank

---

## Architectural Queries & Engineering Decisions

### 1. Choice of State Management (Zustand over Context/Redux)
- **Prompt Query**: "Why choose Zustand for Next.js 14 App Router state serialization and hydration?"
- **Rationale**: Zustand provides a lightweight (<1kB), boilerplate-free store that seamlessly handles localStorage synchronization without context re-render overhead.

### 2. Route Protection & Hydration Mismatch Resolution
- **Prompt Query**: "How to handle client-side route protection and avoid Next.js hydration failed error when checking localStorage auth state?"
- **Rationale**: Implemented a `hydrateAuth` method executed inside a `useEffect` hook to ensure browser-specific APIs (`localStorage`) only run post-mount on the client.

### 3. App Router Viewport Scaffolding
- **Prompt Query**: "Architecture blueprint for /login, /register, and /dashboard viewports."
- **Rationale**: Scaffolds 3 core routes within Next.js 14 `src/app` directory with strict type safety and Lucide React icons.