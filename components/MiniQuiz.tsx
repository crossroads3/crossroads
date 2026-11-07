"use client";

import { useState } from "react";
import type { Question } from "@/lib/data";

export function MiniQuiz({ questions }: { questions: Question[] }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [finished, setFinished] = useState(false);
  const [correct, setCorrect] = useState(0);

  const q = questions[index];

  const choose = (i: number) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    if (i === q.answer) setCorrect((c) => c + 1);
  };

  const next = () => {
    if (index < questions.length - 1) {
      setIndex((i) => i + 1);
      setSelected(null);
      setRevealed(false);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setIndex(0);
    setSelected(null);
    setRevealed(false);
    setFinished(false);
    setCorrect(0);
  };

  if (finished) {
    return (
      <div className="rounded-2xl border border-mist bg-cream p-6 text-center">
        <p className="text-2xl">{correct === questions.length ? "🏆" : correct >= 2 ? "🎉" : "💪"}</p>
        <p className="mt-2 font-serif text-xl text-ink">
          {correct} / {questions.length}
        </p>
        <p className="mt-1 text-sm text-ink-soft">
          {correct === questions.length
            ? "Perfect — you really understood the video!"
            : "Nice try — watch again and test yourself once more."}
        </p>
        <button
          onClick={restart}
          className="mt-4 rounded-xl border border-mist px-5 py-2 text-sm font-medium text-ink transition hover:border-indigo hover:text-indigo"
        >
          Retake quiz
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-mist bg-cream p-5">
      <div className="flex items-center justify-between text-xs text-ink-soft">
        <span className="font-semibold text-clay">
          Video quiz · question {index + 1} of {questions.length}
        </span>
        <span>Test your comprehension</span>
      </div>
      <p className="mt-3 font-serif text-lg text-ink">{q.q}</p>
      <div className="mt-3 space-y-2">
        {q.options.map((opt, i) => {
          const isCorrect = i === q.answer;
          const isSelected = selected === i;
          let style = "border-mist bg-white hover:border-indigo";
          if (revealed) {
            if (isCorrect) style = "border-emerald-400 bg-emerald-50 text-emerald-800";
            else if (isSelected) style = "border-red-300 bg-red-50 text-red-700";
            else style = "border-mist bg-white opacity-60";
          }
          return (
            <button
              key={i}
              onClick={() => choose(i)}
              disabled={revealed}
              className={`flex w-full items-center justify-between rounded-lg border-2 px-4 py-2.5 text-left text-sm font-medium transition ${style}`}
            >
              <span>{opt}</span>
              {revealed && isCorrect && <span>✓</span>}
              {revealed && isSelected && !isCorrect && <span>✕</span>}
            </button>
          );
        })}
      </div>
      {revealed && (
        <p className="mt-3 rounded-lg bg-white px-3 py-2 text-xs text-ink-soft">💡 {q.explain}</p>
      )}
      <div className="mt-4 flex justify-end">
        <button
          onClick={next}
          disabled={!revealed}
          className="rounded-lg bg-ink px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo disabled:opacity-40"
        >
          {index < questions.length - 1 ? "Next →" : "See result"}
        </button>
      </div>
    </div>
  );
}