"use client";

import { useState } from "react";
import { quizzes, countries } from "@/lib/data";
import { QuizPlayer } from "@/components/QuizPlayer";
import { PageHeader } from "@/components/PageHeader";

const BANDS = ["A1", "A2", "B1", "B2", "C1"];

function levelBands(level: string): string[] {
  const clean = level.replace(/–/g, "-");
  const parts = clean.split("-").map((s) => s.trim());
  const a = BANDS.indexOf(parts[0]);
  const b = parts[1] ? BANDS.indexOf(parts[1]) : a;
  if (a < 0) return [];
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  return BANDS.slice(start, end + 1);
}

export default function QuizzesPage() {
  const [countriesSel, setCountriesSel] = useState<Set<string>>(new Set());
  const [levelsSel, setLevelsSel] = useState<Set<string>>(new Set());
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const toggle = (set: Set<string>, key: string) => {
    const next = new Set(set);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    return next;
  };

  const filtered = quizzes.filter((q) => {
    const countryOk = countriesSel.size === 0 || countriesSel.has(q.countryKey);
    const qBands = levelBands(q.level);
    const levelOk = levelsSel.size === 0 || qBands.some((b) => levelsSel.has(b));
    return countryOk && levelOk;
  });

  const activeQuiz = quizzes.find((q) => q.id === selectedId) || null;
  const anyFilter = countriesSel.size > 0 || levelsSel.size > 0;

  return (
    <>
      <PageHeader
        eyebrow="Quizzes"
        title="Test yourself at the crossroads"
        subtitle="Quizzes for every lesson plan, video and audio track — graded by level and matched to the authentic material."
      />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        {!activeQuiz ? (
          <>
            <div className="mb-8 space-y-5">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-soft">
                  Filter by country (select one or more)
                </p>
                <div className="flex flex-wrap gap-2">
                  {countries.map((c) => {
                    const active = countriesSel.has(c.slug);
                    return (
                      <button
                        key={c.slug}
                        onClick={() => setCountriesSel((prev) => toggle(prev, c.slug))}
                        className={`inline-flex items-center gap-2 rounded-xl border-2 px-4 py-2 text-sm font-medium transition ${
                          active
                            ? "border-indigo bg-indigo text-white"
                            : "border-mist bg-white text-ink-soft hover:border-indigo/50 hover:text-indigo"
                        }`}
                      >
                        <span className="text-base">{c.flag}</span>
                        {c.name}
                        {active && <span className="text-xs opacity-70">✕</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-soft">
                  Filter by level (select one or more)
                </p>
                <div className="flex flex-wrap gap-2">
                  {BANDS.map((band) => {
                    const active = levelsSel.has(band);
                    return (
                      <button
                        key={band}
                        onClick={() => setLevelsSel((prev) => toggle(prev, band))}
                        className={`rounded-xl border-2 px-4 py-2 text-sm font-semibold transition ${
                          active
                            ? "border-clay bg-clay text-white"
                            : "border-mist bg-white text-ink-soft hover:border-clay/50 hover:text-clay"
                        }`}
                      >
                        {band}
                        {active && <span className="ml-1 text-xs opacity-70">✕</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              <p className="text-xs text-ink-soft">
                Showing <strong className="text-ink">{filtered.length}</strong> of {quizzes.length} quizzes
                {anyFilter && " · lesson plans, videos and audio included"}
                {anyFilter && (
                  <button
                    onClick={() => {
                      setCountriesSel(new Set());
                      setLevelsSel(new Set());
                    }}
                    className="ml-2 font-medium text-clay transition hover:underline"
                  >
                    Clear all filters
                  </button>
                )}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {filtered.map((q) => (
                <button
                  key={q.id}
                  onClick={() => setSelectedId(q.id)}
                  className="group rounded-3xl border border-mist bg-white p-7 text-left shadow-card transition hover:-translate-y-1 hover:border-indigo/40"
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="text-2xl">{q.flag}</span>
                    <span className="rounded-full bg-amber/15 px-2.5 py-0.5 font-semibold text-clay">
                      {q.category === "lesson" ? "Lesson plan" : q.category === "video" ? "Video" : "Audio"}
                    </span>
                    <span className="rounded-full bg-indigo/10 px-2.5 py-0.5 font-semibold text-indigo">
                      {q.level}
                    </span>
                  </div>
                  <h2 className="mt-3 font-serif text-lg leading-snug text-ink group-hover:text-indigo">
                    {q.title}
                  </h2>
                  <p className="mt-1 text-sm text-ink-soft">
                    {q.country} · {q.questions.length} questions
                  </p>
                  <span className="mt-4 inline-block font-medium text-indigo">Start →</span>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="col-span-full text-center text-ink-soft">
                  No quizzes match this country and level yet — try clearing a filter.
                </p>
              )}
            </div>
          </>
        ) : (
          <div>
            <button
              onClick={() => setSelectedId(null)}
              className="mb-5 text-sm font-medium text-indigo transition hover:text-clay"
            >
              ← Choose another quiz
            </button>
            <QuizPlayer key={activeQuiz.id} quiz={activeQuiz} />
          </div>
        )}
      </section>
    </>
  );
}
