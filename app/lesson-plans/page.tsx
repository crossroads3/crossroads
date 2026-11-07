import Link from "next/link";
import { countries } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";

export default function LessonPlansPage() {
  return (
    <>
      <PageHeader
        eyebrow="Lesson plans"
        title="Five countries, five crossroads"
        subtitle="Complete, ready-to-download lessons built around authentic cultural materials. Every country unit has three lessons — each with a lesson plan and a presentation."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((c) => (
            <Link
              key={c.slug}
              href={`/lesson-plans/${c.slug}`}
              className="group flex flex-col rounded-3xl border border-mist bg-white p-7 shadow-card transition hover:-translate-y-1.5 hover:border-indigo/40"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl">{c.flag}</span>
                <span className="rounded-full bg-amber/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-clay">
                  {c.level}
                </span>
              </div>
              <h2 className="mt-5 font-serif text-2xl text-ink group-hover:text-indigo">{c.name}</h2>
              <p className="font-medium text-indigo">{c.theme}</p>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">{c.summary}</p>
              <div className="mt-5 flex items-center gap-2 border-t border-mist pt-4 text-xs text-ink-soft">
                <span>{c.language}</span>
                <span className="text-mist">·</span>
                <span>{c.lessons.length} lessons</span>
                <span className="ml-auto font-medium text-indigo">View &amp; download →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-indigo-deep p-8 text-cream">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-serif text-xl">Need all five at once?</h3>
              <p className="mt-1 text-sm text-cream/70">
                Each country unit includes three lessons, and every lesson ships a lesson plan and a presentation — all ready to download and print.
              </p>
            </div>
            <span className="rounded-full bg-amber px-4 py-2 text-sm font-medium text-ink">
              PDF · A4 · printable
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
