"use client";

import { useState } from "react";
import type { Quiz } from "@/lib/data";
import { useAuth } from "./AuthContext";

interface AnswerState {
  selected: number | null;
  revealed: boolean;
}

export function QuizPlayer({ quiz }: { quiz: Quiz }) {
  const { user } = useAuth();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerState[]>(
    quiz.questions.map(() => ({ selected: null, revealed: false }))
  );
  const [finished, setFinished] = useState(false);
  const [saved, setSaved] = useState<null | boolean>(null);

  const q = quiz.questions[index];
  const current = answers[index];
  const score = answers.filter((a, i) => a.selected === quiz.questions[i].answer).length;

  const select = (optIdx: number) => {
    if (current.revealed) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], selected: optIdx, revealed: true };
      return next;
    });
  };

  const next = () => {
    if (index < quiz.questions.length - 1) setIndex(index + 1);
    else setFinished(true);
  };

  const saveResult = async () => {
    try {
      const res = await fetch("/api/quizzes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quizId: quiz.id,
          author: user?.name || "Guest",
          score,
          total: quiz.questions.length,
        }),
      });
      setSaved(res.ok);
    } catch {
      setSaved(false);
    }
  };

  const restart = () => {
    setIndex(0);
    setAnswers(quiz.questions.map(() => ({ selected: null, revealed: false })));
    setFinished(false);
    setSaved(null);
  };

  if (finished) {
    return (
      <div className="rounded-3xl border border-mist bg-white p-8 text-center shadow-card">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-amber/20 text-4xl">
          {score === quiz.questions.length ? "🏆" : score >= quiz.questions.length / 2 ? "🎉" : "💪"}
        </div>
        <h2 className="mt-5 font-serif text-3xl text-ink">
          {score} / {quiz.questions.length}
        </h2>
        <p className="mt-2 text-ink-soft">
          {score === quiz.questions.length
            ? "Perfect! You have truly crossed this crossroads."
            : score >= quiz.questions.length / 2
              ? "Great work — a little practice and you'll ace it."
              : "Good start — review the lesson and try again."}
        </p>

        {saved === null ? (
          <button
            onClick={saveResult}
            className="mt-6 rounded-xl bg-indigo px-6 py-3 font-medium text-white transition hover:bg-indigo-soft"
          >
            Save my result
          </button>
        ) : (
          <p className="mt-6 text-sm text-emerald-700">
            {saved ? "✓ Result saved to the Crossroads data store." : "Could not save your result."}
          </p>
        )}

        <button
          onClick={restart}
          className="mt-3 block w-full rounded-xl border border-mist px-6 py-3 font-medium text-ink transition hover:border-indigo hover:text-indigo"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-mist bg-white p-8 shadow-card">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-clay">
          Question {index + 1} of {quiz.questions.length}
        </span>
        <span className="text-ink-soft">{quiz.flag} {quiz.title}</span>
      </div>

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-mist">
        <div
          className="h-full rounded-full bg-indigo transition-all"
          style={{ width: `${((index + (current?.revealed ? 1 : 0)) / quiz.questions.length) * 100}%` }}
        />
      </div>

      <h2 className="mt-6 font-serif text-2xl text-ink">{q.q}</h2>

      <div className="mt-5 space-y-3">
        {q.options.map((opt, i) => {
          const isCorrect = i === q.answer;
          const isSelected = current.selected === i;
          let style = "border-mist bg-white hover:border-indigo hover:bg-indigo/5";
          if (current.revealed) {
            if (isCorrect) style = "border-emerald-400 bg-emerald-50 text-emerald-800";
            else if (isSelected) style = "border-red-300 bg-red-50 text-red-700";
            else style = "border-mist bg-white opacity-60";
          }
          return (
            <button
              key={i}
              onClick={() => select(i)}
              disabled={current.revealed}
              className={`flex w-full items-center justify-between rounded-xl border-2 px-5 py-3.5 text-left font-medium transition ${style}`}
            >
              <span>{opt}</span>
              {current.revealed && isCorrect && <span>✓</span>}
              {current.revealed && isSelected && !isCorrect && <span>✕</span>}
            </button>
          );
        })}
      </div>

      {current.revealed && (
        <p className="mt-4 rounded-xl bg-cream-soft px-4 py-3 text-sm text-ink-soft">
          💡 {q.explain}
        </p>
      )}

      <div className="mt-6 flex justify-end">
        <button
          onClick={next}
          disabled={!current.revealed}
          className="rounded-xl bg-ink px-6 py-3 font-medium text-white transition hover:bg-indigo disabled:cursor-not-allowed disabled:opacity-40"
        >
          {index < quiz.questions.length - 1 ? "Next question →" : "See my result"}
        </button>
      </div>
    </div>
  );
}