"use client";

import { useEffect, useState } from "react";

interface Criterion {
  name: string;
  desc: string;
  self: string[];
}

const criteria: Criterion[] = [
  {
    name: "Task completion",
    desc: "Did you achieve the communicative goal of the task?",
    self: [
      "Unable to complete any aspect of the task.",
      "Does not complete all aspects of the task.",
      "Successfully completes most aspects of the task.",
      "Successfully completes all aspects of the task.",
      "Successfully and thoroughly completes all aspects of the task.",
    ],
  },
  {
    name: "Fluency",
    desc: "Your ability to keep the conversation flowing with natural pauses.",
    self: [
      "I spoke very slowly with many long pauses.",
      "I spoke slowly with noticeable pauses.",
      "My speech generally flowed with occasional pauses.",
      "My speech was smooth with only natural pauses.",
      "My pace was natural and effortless.",
    ],
  },
  {
    name: "Accuracy",
    desc: "Your control of grammar, vocabulary and pronunciation where relevant.",
    self: [
      "I made many errors that hindered communication.",
      "I made frequent errors, but my meaning was mostly clear.",
      "I made some errors, but my meaning was always clear.",
      "I made only a few minor errors.",
      "I was accurate, with only rare slips.",
    ],
  },
  {
    name: "Interaction",
    desc: "Your active listening, responding and repairing of breakdowns.",
    self: [
      "I did not respond or take turns.",
      "I responded with difficulty.",
      "I responded and took turns with some support.",
      "I listened and responded well, and repaired misunderstandings.",
      "I actively led and balanced the conversation.",
    ],
  },
  {
    name: "Cultural awareness",
    desc: "Your sensitivity to the target culture and appropriate register.",
    self: [
      "I was unaware of cultural differences.",
      "I noticed some cultural cues only with help.",
      "I showed respect and some understanding of cultural norms.",
      "I understood and adapted to cultural norms.",
      "I was sensitive, adaptable and insightful about culture.",
    ],
  },
  {
    name: "Range of language",
    desc: "The variety and flexibility of vocabulary and structures you used.",
    self: [
      "My vocabulary and structures were very limited.",
      "My range was narrow and I repeated forms.",
      "I used some variety of vocabulary and structures.",
      "I had a good range, flexible enough for the task.",
      "My range was wide, precise and appropriate.",
    ],
  },
];

function SelfAssessmentModal({
  criterion,
  onClose,
}: {
  criterion: Criterion | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!criterion) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [criterion, onClose]);

  if (!criterion) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-indigo-deep/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-cream p-8 shadow-soft animate-fade-up">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-mist text-ink-soft transition hover:bg-indigo hover:text-white"
        >
          ✕
        </button>

        <h3 className="mt-3 font-serif text-2xl text-ink">{criterion.name}</h3>
        <p className="mt-1 text-sm text-ink-soft">{criterion.desc}</p>

        <div className="mt-6 space-y-3">
          {criterion.self.map((text, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-2xl border border-mist bg-white px-4 py-3"
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-indigo text-xs font-bold text-white">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed text-ink-soft">{text}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export function AssessmentSection() {
  const [open, setOpen] = useState<Criterion | null>(null);

  return (
    <section id="assessment" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-clay">Assessment criteria</span>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-ink">How progress is measured</h2>
          <p className="mt-4 text-lg text-ink-soft">
            A transparent, communicative rubric used across all Crossroads lessons. Click any criterion to see
            self-assessment descriptors.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {criteria.map((c) => (
            <button
              key={c.name}
              onClick={() => setOpen(c)}
              className="group rounded-2xl border border-mist bg-white p-6 text-left shadow-card transition hover:-translate-y-1 hover:border-indigo/40"
            >
              <div className="flex items-center justify-between">
                <div className="h-1.5 w-10 rounded-full bg-amber" />
              </div>
              <h3 className="mt-4 font-serif text-xl text-ink">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo transition group-hover:text-clay">
                Open criteria →
              </span>
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-cream-soft p-6 text-sm text-ink-soft">
          Each criterion is scored on a <strong className="text-ink">1–5 scale</strong> with descriptors, so learners
          always know what to improve next. The rubric emphasises communication and cultural awareness alongside
          linguistic accuracy.
        </div>
      </div>

      <SelfAssessmentModal criterion={open} onClose={() => setOpen(null)} />
    </section>
  );
}