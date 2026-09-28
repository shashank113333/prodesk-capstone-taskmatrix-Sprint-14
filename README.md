# 🚀 TaskMatrix — Sprint 14: The Walking Skeleton MVP

![Sprint 14 Status](https://img.shields.io/badge/Sprint-14_Walking_Skeleton-emerald?style=for-the-badge)
![Track](https://img.shields.io/badge/Track-A:_Frontend_Specialist-blue?style=for-the-badge)
![Next.js 14](https://img.shields.io/badge/Next.js-14_App_Router-black?style=for-the-badge)
![State Management](https://img.shields.io/badge/State-Zustand-purple?style=for-the-badge)

## 📌 Executive Summary
Sprint 14 delivers the core **"Walking Skeleton"** architecture for TaskMatrix — an enterprise-grade Agile Project Management System. The application features end-to-end authentication infrastructure, Next.js 14 App Router viewports (`/login`, `/register`, `/dashboard`), Zustand global state serialization, and strict Route Protection Guards.

---

## 🌐 Live Application & Links

- 🚀 **Live Website (Vercel)**: [https://prodesk-taskmatrix-sprint-14.vercel.app](https://prodesk-taskmatrix-sprint-14.vercel.app)
- 📦 **GitHub Repository**: [https://github.com/shashank113333/prodesk-capstone-taskmatrix-Sprint-14](https://github.com/shashank113333/prodesk-capstone-taskmatrix-Sprint-14)
- 📝 **AI Compliance Log**: Refer to `Prompts.md` for architectural decision logs.

---

## 🏗️ Technical Architecture & Tech Stack

| Layer | Technology / Tool | Operational Rationale |
| :--- | :--- | :--- |
| **Framework** | Next.js 14 (App Router) | Server-driven routing & edge performance |
| **Language** | TypeScript | Strict typing for user payloads & state trees |
| **Styling** | Tailwind CSS | Modern dark-mode utility-first UI design |
| **State Management** | Zustand | Lightweight client-side auth state & localStorage sync |
| **Icons** | Lucide React | Clean enterprise dashboard iconography |

---

## 🔑 Key Features Implemented (Sprint 14 Deliverables)

### 1. Viewport Scaffolding (Phase 1 - P0)
- `/login`: Form with email, password, and Agile Role Selector (Developer, Project Lead, Admin).
- `/register`: User account creation form with state synchronization.
- `/dashboard`: 4-column Agile Kanban Board shell (`To Do`, `In Progress`, `In Review`, `Done`).

### 2. Authentication Logic & Persistence (Phase 2 - P1)
- User payload serialization (`uid`, `name`, `email`, `role`).
- Token persistence in `localStorage` with hydration lifecycle protection.

### 3. Route Protection & Global State Hydration (Phase 3 - P2)
- **Route Guard Interceptor**: Direct unauthenticated access to `/dashboard` triggers an instant security redirect to `/login`.
- **Dynamic User Hydration**: Real-time user payload reflection in dashboard header.

---

## 🛠️ Local Development Setup

```bash
# 1. Clone the repository
git clone https://github.com/shashank113333/prodesk-capstone-taskmatrix-Sprint-14.git

# 2. Navigate to project directory
cd prodesk-capstone-taskmatrix-Sprint-14

# 3. Install dependencies
npm install

# 4. Launch development server
npm run dev