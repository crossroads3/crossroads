# Crossroads 🇬🇧 · 🇺🇸 · 🇨🇦 · 🇦🇺

**Crossroads** — a multi-page resource hub built for a diploma project in pedagogy (for a future teacher of **English**). Where the world's Englishes meet — and cultures cross paths.

Built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**. User-submitted data is stored in local **JSON files** served through API routes (no external database needed).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). For a production build:

```bash
npm run build
npm run start
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing: About Crossroads · How it works (For Students / For Teachers) · Assessment criteria · Guidelines (Working with authentic materials) |
| `/lesson-plans` | Overview of the five country units |
| `/lesson-plans/[country]` | Country page with its lessons — each lesson has a **Lesson plan** + **Presentation** PDF (`/usa`, `/canada`, `/new-zealand`, `/australia`, `/uk`) |
| `/articles` | Expandable articles on teaching & learning |
| `/videos` | Embedded BBC Learning English & authentic native-speaker videos (A2–C1) with a quiz attached to each video |
| `/audio` | Interactive audio player cards (placeholders) |
| `/quizzes` | Interactive quizzes with instant feedback & saved results |
| `/support` | Contact form → saved to JSON |
| `/chat` | Community chat → saved to JSON |
| `/account` | Account page + login/registration modal (student / teacher) |

## Data storage

All user-submitted data is written to `data/*.json` files at the project root:

- `users.json` — registered accounts (login/register via `/api/auth`)
- `support.json` — support messages (`/api/support`)
- `chat.json` — chat messages (`/api/chat`)
- `quizzes.json` — quiz submissions (`/api/quizzes`)

The `data/` folder is git-ignored and created automatically on first write. The storage layer lives in `lib/store.ts` — swap it for **SQLite** (`better-sqlite3`/Prisma) or **PostgreSQL** later without touching the API routes.

## Lesson plan files

There are **5 country units** (USA, Canada, New Zealand, Australia, UK). Each unit has **3 lessons**, and each lesson ships **two files**: a **Lesson plan** and a **Presentation**.

Real PDF files live in subfolders of `public/lesson-plans/` (e.g. `public/lesson-plans/australia/australia-lesson-1-plan.pdf`). The paths are referenced from `lib/data.ts` (`Country[].lessons[].files`). To add or replace a file, drop it into the matching subfolder and update the path in `lib/data.ts`.