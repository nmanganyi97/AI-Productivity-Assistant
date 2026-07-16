# AI Workplace Productivity Assistant

Work Smarter with AI — automate emails, organize tasks, and research anything in seconds using one intelligent workplace assistant.

## Overview

A modern, premium SaaS landing page for an AI-powered workplace productivity platform. Built with a clean, minimal aesthetic inspired by Notion, Linear, and Microsoft Copilot.

## Features

- **Hero** with animated AI illustration and clear CTAs
- **3 core modules** showcased: Smart Email Generator, AI Task Planner, AI Research Assistant
- **Benefits** section highlighting time savings and productivity gains
- **Pricing** tiers: Starter, Professional, Enterprise
- Fully responsive, dark-mode ready, smooth Framer Motion animations

## Tech Stack

- **TanStack Start** (React 19 + Vite 7) — SSR-ready full-stack framework
- **TypeScript** — strict mode
- **Tailwind CSS v4** — CSS-first design tokens in `src/styles.css`
- **shadcn/ui** — component primitives
- **Framer Motion** — animations
- **Lucide Icons** — iconography

## Design System

All colors, gradients, and shadows are defined as semantic tokens in `src/styles.css`:

- **Primary**: Indigo `#4F46E5`
- **Accent**: Cyan `#06B6D4`
- **Dark background**: Deep Navy `#0F172A`

Never hardcode color utilities in components — always use tokens (`bg-primary`, `text-foreground`, `var(--gradient-hero)`, etc.).

## Getting Started

```bash
bun install
bun run dev
```

The app runs at `http://localhost:8080`.

## Project Structure

```
src/
├── assets/          # Images (imported via ES6)
├── components/ui/   # shadcn components
├── lib/             # Utilities and helpers
├── routes/          # File-based routing (TanStack Router)
│   ├── __root.tsx   # Root layout + head metadata
│   └── index.tsx    # Landing page
└── styles.css       # Design tokens (@theme + oklch)
```

## Roadmap

- [ ] Authentication (Sign in with Google / Microsoft)
- [ ] Dashboard with sidebar navigation
- [ ] Smart Email Generator module (AI-powered)
- [ ] AI Task Planner (Kanban + calendar)
- [ ] AI Research Assistant (chat + export)
- [ ] History, Profile, and Settings
- [ ] Team workspaces and collaboration

## License

MIT
