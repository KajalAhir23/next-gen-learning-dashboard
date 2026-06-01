# 🚀 Next-Gen Learning Dashboard

A modern dark-mode learning dashboard built as part of a Frontend Engineering Internship Challenge. The project uses **Next.js App Router**, **Supabase**, **Framer Motion**, and **Tailwind CSS v4** to deliver a responsive Bento-style dashboard with server-side data fetching and smooth animations.

## 🌐 Live Demo

**Live Application:**
https://next-gen-learning-dashboard-4ik7eiuil-kajals-projects-6c686022.vercel.app

**GitHub Repository:**
https://github.com/KajalAhir23/next-gen-learning-dashboard

---

## ✨ Features

### 📊 Responsive Bento Dashboard

* Modern Bento Grid layout
* Dark-mode interface
* Reusable `.bento-card` design system
* Clean and semantic HTML structure

### 🧭 Navigation System

* Full sidebar navigation on desktop
* Icon-only sidebar on tablet
* Bottom navigation on mobile devices
* Smooth active-state animations

### 📚 Dynamic Course Management

* Server-side course fetching from Supabase
* Animated progress tracking
* Responsive course cards
* Dynamic course grid layout

### 🎨 Motion & User Experience

* Framer Motion micro-interactions
* Staggered card entrance animations
* Spring-based hover effects
* GPU-accelerated animations

### ⚡ Reliability

* Loading skeletons
* Error boundaries
* Mock fallback data during development
* Environment-based configuration

---

## 🛠 Tech Stack

| Category   | Technology              |
| ---------- | ----------------------- |
| Framework  | Next.js 16 (App Router) |
| Language   | JavaScript              |
| Styling    | Tailwind CSS v4         |
| Database   | Supabase                |
| Animation  | Framer Motion           |
| Icons      | Lucide React            |
| Deployment | Vercel                  |

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── page.jsx          # Dashboard page (Server Component)
│   ├── layout.jsx        # Root layout and metadata
│   ├── loading.jsx       # Loading skeleton UI
│   ├── error.jsx         # Error boundary
│   ├── globals.css       # Global styles and Bento utilities
│   └── favicon.ico       # Application favicon
│
├── components/
│   ├── dashboard/        # Dashboard-specific components
│   └── layout/           # Sidebar and navigation components
│
├── lib/
│   ├── supabase/         # Supabase configuration
│   └── data/             # Data fetching utilities
│
└── types/                # Shared application types
```

---

## 🏗 Architecture Decisions

### Server Components First

The dashboard uses Next.js Server Components to fetch course data directly on the server. This improves performance by reducing client-side requests and delivering fully rendered content on initial load.

### Server–Client Separation

#### Server Components

* Data fetching
* Layout rendering
* Static dashboard sections

#### Client Components

* Navigation interactions
* Animations
* Hover effects
* Error recovery

This approach minimizes client-side JavaScript while maintaining a smooth user experience.

---

## 📱 Responsive Design

### Desktop

* Expanded sidebar
* Multi-column Bento Grid

### Tablet

* Icon-only navigation
* Two-column layout

### Mobile

* Bottom navigation
* Single-column dashboard layout

---

## 🔗 Supabase Integration

Course data is stored and retrieved from Supabase using secure environment variables.

### Course Schema

| Field      | Type      |
| ---------- | --------- |
| id         | UUID      |
| title      | Text      |
| progress   | Integer   |
| icon_name  | Text      |
| created_at | Timestamp |

---

## ⚙ Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xnvpwiepeavkhtrumgic.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_4pEciNtJKLCSl41F1MdeSg_IYjQLFwr
NEXT_PUBLIC_STUDENT_NAME=Kajal
```

### Environment Variables Description

| Variable                      | Description                        |
| ----------------------------- | ---------------------------------- |
| NEXT_PUBLIC_SUPABASE_URL      | Supabase Project URL               |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | Supabase Publishable API Key       |
| NEXT_PUBLIC_STUDENT_NAME      | Name displayed in the Hero Section |

> Note: `.env.local` is ignored by Git and should never be committed to the repository.

---

## 🚀 Local Setup

Clone the repository:

```bash
git clone https://github.com/KajalAhir23/next-gen-learning-dashboard.git
cd next-gen-learning-dashboard
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🚀 Deployment

The application is deployed using Vercel.

### Deployment Steps

1. Push the repository to GitHub
2. Import the project into Vercel
3. Configure environment variables
4. Deploy the application

Required variables:

```env
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
NEXT_PUBLIC_STUDENT_NAME
```

---

## 🎯 Challenges Solved

* Responsive Bento Grid implementation
* Server-side Supabase integration using App Router
* Semantic HTML architecture
* Hardware-accelerated Framer Motion animations
* Shared navigation state management
* Error boundaries and loading states

---

## ✅ Challenge Requirements Checklist

* Responsive Bento Grid Layout
* Semantic HTML Structure
* Next.js App Router
* Supabase Integration
* Server Components
* Framer Motion Animations
* Loading & Error States
* Mobile, Tablet & Desktop Responsiveness
* Environment Configuration
* Vercel Deployment
* Production-Ready Architecture

---

## 📜 Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

---

## 👩‍💻 Author

**Kajal Ahir**

B.Tech Computer Science Engineering (AI)

Frontend Developer | Open Source Contributor

Built for a Frontend Engineering Internship Challenge.
