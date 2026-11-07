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
| `/support` | Contact form → saved to Supabase |
| `/chat` | Community chat → saved to Supabase |
| `/account` | Account page + login/registration modal (student / teacher) |

## Data storage (Supabase)

User-submitted data is stored in a **Supabase (PostgreSQL)** database, not local files. Four tables are used:

- `users` — registered accounts (login/register via `/api/auth`)
- `support_messages` — support messages (`/api/support`)
- `chat_messages` — chat messages (`/api/chat`)
- `quiz_submissions` — quiz results (`/api/quizzes`)

### Setup

1. Create a free project at **supabase.com**.
2. Run the SQL in **`supabase/schema.sql`** in the Supabase SQL editor to create the tables and service-role policies.
3. Copy `.env.example` to `.env.local` and fill in:
   - `NEXT_PUBLIC_SUPABASE_URL` — your project URL (Dashboard → Settings → API)
   - `SUPABASE_SERVICE_ROLE_KEY` — the `service_role` secret key (server-side only, never expose it)
4. The storage layer lives in `lib/store.ts`; API routes call it. The site's static pages do not require the DB.

### Deploying (free)

Deploy on **Vercel** (recommended) or **Netlify** (free tier) and set the two environment variables there.
Then everything — accounts, chat, support, saved quiz results — works for all visitors.

## Lesson plan files

There are **5 country units** (USA, Canada, New Zealand, Australia, UK). Each unit has **3 lessons**, and each lesson ships **two files**: a **Lesson plan** and a **Presentation**.

Real PDF files live in subfolders of `public/lesson-plans/` (e.g. `public/lesson-plans/australia/australia-lesson-1-plan.pdf`). The paths are referenced from `lib/data.ts` (`Country[].lessons[].files`). To add or replace a file, drop it into the matching subfolder and update the path in `lib/data.ts`.