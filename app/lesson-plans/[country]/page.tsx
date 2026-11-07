import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { countries } from "@/lib/data";
import { LessonFiles } from "@/components/LessonFiles";

export function generateStaticParams() {
  return countries.map((c) => ({ country: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  return params.then(({ country }) => {
    const c = countries.find((x) => x.slug === country);
    return { title: c ? `${c.name} · ${c.theme} — Crossroads` : "Lesson — Crossroads" };
  });
}

export default async function CountryLessonPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const c = countries.find((x) => x.slug === country);
  if (!c) notFound();

  const others = countries.filter((x) => x.slug !== c.slug);

  return (
    <>
      <section className="relative overflow-hidden border-b border-mist bg-indigo-deep text-cream">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber/20 blur-3xl" />
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Link href="/lesson-plans" className="text-sm text-cream/70 transition hover:text-amber-soft">
            ← All lesson plans
          </Link>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-5xl">{c.flag}</span>
                <div>
                  <h1 className="font-serif text-4xl font-semibold sm:text-5xl">{c.name}</h1>
                  <p className="mt-1 text-lg text-amber-soft">{c.theme}</p>
                </div>
              </div>
              <p className="mt-2 text-cream/70">{c.tagline}</p>
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-cream ring-1 ring-cream/20">{c.language}</span>
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-cream ring-1 ring-cream/20">{c.level}</span>
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-cream ring-1 ring-cream/20">{c.duration}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="font-serif text-2xl text-ink">About this country unit</h2>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-ink-soft">{c.summary}</p>

        <h3 className="mt-8 font-serif text-xl text-ink">Learning objectives</h3>
        <ul className="mt-4 space-y-3">
          {c.objectives.map((o) => (
            <li key={o} className="flex gap-3 text-ink-soft">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-amber/20 text-xs font-bold text-clay">
                ✓
              </span>
              <span className="leading-relaxed">{o}</span>
            </li>
          ))}
        </ul>

        <h3 className="mt-8 font-serif text-xl text-ink">Focus areas</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {c.accents.map((a) => (
            <span
              key={a}
              className="rounded-full border border-indigo/30 bg-indigo/5 px-4 py-1.5 text-sm font-medium text-indigo"
            >
              {a}
            </span>
          ))}
        </div>

        <h2 className="mt-14 font-serif text-2xl text-ink">
          Lessons ({c.lessons.length})
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {c.lessons.map((lesson, i) => (
            <div
              key={lesson.id}
              className="flex flex-col rounded-3xl border border-mist bg-white p-6 shadow-card"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-amber/20 font-serif text-lg font-semibold text-clay">
                  {i + 1}
                </span>
                <span className="rounded-full bg-indigo/10 px-2.5 py-0.5 text-xs font-semibold text-indigo">
                  {lesson.level}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-xl leading-snug text-ink">{lesson.title}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-soft">{lesson.duration}</p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{lesson.summary}</p>

              <LessonFiles files={lesson.files} country={c.name} />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-mist bg-cream-soft py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h3 className="font-serif text-xl text-ink">Continue the journey</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/lesson-plans/${o.slug}`}
                className="flex items-center gap-3 rounded-2xl border border-mist bg-white px-5 py-4 transition hover:border-indigo/40 hover:shadow-card"
              >
                <span className="text-2xl">{o.flag}</span>
                <div>
                  <p className="font-semibold text-ink">{o.name}</p>
                  <p className="text-xs text-ink-soft">{o.theme}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
