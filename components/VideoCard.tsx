"use client";

import { useState } from "react";
import type { Video } from "@/lib/data";
import { MiniQuiz } from "./MiniQuiz";

export function VideoCard({ video }: { video: Video }) {
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-mist bg-white shadow-card">
      <div className="relative aspect-video bg-indigo-deep">
        <iframe
          src={`https://www.youtube.com/embed/${video.url}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
        <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold text-white">
          Level {video.level}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-ink-soft">
          <span className="rounded-full bg-amber/15 px-2.5 py-0.5 font-semibold text-clay">{video.source}</span>
          <span>{video.flag} {video.country}</span>
          <span className="text-mist">·</span>
          <span className="font-medium text-indigo">{video.accent} accent</span>
        </div>

        <h2 className="mt-3 font-serif text-xl text-ink">{video.title}</h2>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{video.description}</p>

        <button
          onClick={() => setQuizOpen((v) => !v)}
          className="mt-4 inline-flex w-fit items-center gap-2 rounded-xl bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo"
        >
          {quizOpen ? "Hide quiz" : "📝 Take the video quiz"}
        </button>

        {quizOpen && (
          <div className="mt-4 animate-fade-up">
            <MiniQuiz questions={video.quiz} />
          </div>
        )}
      </div>
    </article>
  );
}