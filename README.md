# Next-Gen Learning Dashboard

A dark-mode learning dashboard built for an internship challenge. It features a responsive Bento grid layout, server-fetched course data from Supabase, and Framer Motion micro-interactions—all on **Next.js App Router** with **JavaScript** and **Tailwind CSS v4**.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61dafb)
![Supabase](https://img.shields.io/badge/Supabase-SSR-3ecf8e)

## Live demo

Deploy to [Vercel](https://vercel.com) and add environment variables (see [Deployment](#deployment)).

## Features

- **Bento grid dashboard** — Hero, course grid, and activity tiles with a shared `.bento-card` design system
- **Responsive shell** — Icon sidebar (tablet), full sidebar (desktop), bottom nav (mobile)
- **Server-side data** — Courses fetched in a Server Component via `@supabase/ssr`
- **Motion design** — Staggered card entrance, spring hover, `layoutId` nav highlight, GPU-friendly `transform` / `opacity` animations
- **Loading & errors** — Route-level `loading.jsx` skeletons and `error.jsx` boundary

## Tech stack

| Layer | Choice |
|--------|--------|
| Framework | Next.js 16 (App Router) |
| Language | JavaScript (JSX) |
| Styling | Tailwind CSS v4 |
| Database | Supabase |
| Animation | Framer Motion |
| Icons | Lucide React |

## Getting started

### Prerequisites

- Node.js 18+
- npm (or pnpm / yarn)
- A [Supabase](https://supabase.com) project (optional for local dev—mock data is used when env vars are missing)

### 1. Clone and install

```bash
git clone <your-repo-url>
cd next-gen-learning-dashboard
npm install
```

### 2. Environment variables

Copy the example file and add your Supabase credentials:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xnvpwiepeavkhtrumgic.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_or_publishable_key
NEXT_PUBLIC_STUDENT_NAME=Kajal
```

| Variable | Where to find it |
|----------|------------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase Dashboard → **Project Settings** → **API** → Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Same page → **anon** `public` key |
| `NEXT_PUBLIC_STUDENT_NAME` | Your name for the hero tile (`Welcome back, [Name]!`) |

> **Note:** Never commit `.env.local`. It is gitignored. Only `.env.example` belongs in the repo.

**Without Supabase:** In development, the app falls back to mock courses so you can work on UI immediately. Restart the dev server after changing env vars.

### 3. Database setup (Supabase)

Run the full schema and seed script in the Supabase SQL editor:

```bash
# File: supabase/schema.sql
```

This creates the `courses` table (`id`, `title`, `progress`, `icon_name`, `created_at`), enables RLS with a public read policy, and inserts 4 seed rows.

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve production build
npm run lint    # ESLint
```

## Project structure

```
src/
├── app/
│   ├── page.jsx          # Server Component — fetches courses
│   ├── layout.jsx        # Root layout & metadata
│   ├── loading.jsx       # Route loading skeleton
│   ├── error.jsx         # Error boundary (client)
│   └── globals.css       # Tailwind + .bento-card utility
├── components/
│   ├── layout/           # AppShell, Sidebar, MobileNav, NavLink
│   └── dashboard/        # Bento tiles, CourseCard, CourseGrid
└── lib/
    ├── supabase/         # Browser & server Supabase clients
    └── data/             # fetchCourses + mock fallback
```

## Architecture

### Next.js App Router + Server Components

The home route (`page.jsx`) is an **async Server Component**. It calls `fetchCourses()` on the server so the initial HTML includes real (or mock) course data—no client-side fetch waterfall for the main grid.

`export const dynamic = "force-dynamic"` ensures fresh data per request when using Supabase.

### Server / client split

| Concern | Renders on | Examples |
|---------|------------|----------|
| Data fetching | Server | `page.jsx`, `fetch-courses.js`, `lib/supabase/server.js` |
| Static structure | Server | `DashboardGrid.jsx`, `HeroTile.jsx`, `AppShell.jsx` (wrapper) |
| Interactivity | Client (`"use client"`) | `Sidebar`, `CourseCard`, `CourseGrid`, `NavLink`, `error.jsx` |

**Rule of thumb:** Keep `"use client"` at the leaves—navigation, animations, and error retry—while the page and data layer stay on the server.

```
page.jsx (Server)
  └── fetchCourses()
  └── <DashboardGrid courses={...} />  (Server)
        └── <CourseGrid />             (Client — Framer Motion)
              └── <CourseCard />       (Client — hover + progress)
```

### Responsive layout

| Breakpoint | Sidebar | Dashboard grid |
|------------|---------|----------------|
| **Mobile** (`< md`) | Bottom `<nav>` | 1 column, stacked tiles |
| **Tablet** (`md`–`lg`) | Left icon rail (`4.5rem`) | 2 columns; hero spans full width |
| **Desktop** (`lg+`) | Expandable sidebar (icons + labels) | 2-column Bento grid |

### Semantic HTML

- `<nav>` — Desktop sidebar and mobile bottom bar
- `<main>` — Dashboard content (`page.jsx`)
- `<section>` — Bento regions (hero, courses, activity, grid wrapper)
- `<article>` — Individual course cards
- `<figure>` / `<figcaption>` — Activity chart placeholder

## Challenges & solutions

### 1. Supabase in the App Router

Server Components cannot use the browser client. We use `createServerClient` from `@supabase/ssr` with the Next.js `cookies()` adapter in `lib/supabase/server.js`. The browser client in `client.js` is reserved for future client-only features.

**Dev ergonomics:** Missing or placeholder env vars trigger mock data in development so the UI is never blocked.

### 2. Hardware-accelerated animations

Animating `width` or `height` triggers layout recalculations. We standardized on:

- **Progress bars** — `scaleX` + `transform-origin: left` (not `width`)
- **Card entrance / hover** — `opacity` + `translateY` / `scale` via Framer Motion
- **Nav highlight** — `layoutId` (Framer composes with transforms)

Box-shadow hover effects were replaced with opacity-based rings to reduce paint cost.

### 3. Shared navigation state

`layoutId` highlights must live in client components. `NavProvider` shares `activeId` between the sidebar and mobile nav while keeping `page.jsx` on the server.

### 4. `layoutId` active indicator

Clicking a nav item moves a shared `motion.span` (`layoutId="sidebar-nav-indicator"`) between links with spring physics—no manual position calculations.

## Deployment

### Vercel (recommended)

1. Push the repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy.

Production **requires** valid Supabase env vars (mock data is development-only).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |

## Challenge requirements checklist

| Requirement | Status |
|-------------|--------|
| Dark mode + Bento grid + semantic HTML | Done |
| Collapsible sidebar / tablet icons / mobile bottom nav | Done |
| Hero: `Welcome back, [Name]!` + streak | Done (`NEXT_PUBLIC_STUDENT_NAME`) |
| Supabase RSC fetch + `loading.tsx` + `<Suspense>` + `error.jsx` | Done |
| Staggered Bento tile entrance (fade + Y) | Done (`AnimatedDashboardGrid`) |
| Spring hover + glow on all Bento tiles | Done |
| `layoutId` sidebar nav highlight | Done |
| Course cards: icon, title, animated progress, grain | Done |
| `transform` / `opacity` animations only | Done |
| `.env.example` + README + deploy-ready | Done |
| Data types for Supabase payloads | Done (`src/types/course.js` JSDoc) |

## Submission

1. Push to a **public GitHub** repository.
2. Deploy on **Vercel** with `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and `NEXT_PUBLIC_STUDENT_NAME`.
3. Do **not** commit `.env.local`.

## License

Private / internship submission — adjust as needed for your organization.
