"use client";

import { useState } from "react";
import type { AudioTrack } from "@/lib/data";
import { MiniQuiz } from "./MiniQuiz";

function LevelBadge({ level }: { level: string }) {
  return (
    <span className="rounded-full bg-indigo/10 px-2.5 py-0.5 text-xs font-semibold text-indigo">
      {level}
    </span>
  );
}

export function AudioCard({ track }: { track: AudioTrack }) {
  const [playing, setPlaying] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);

  if (track.kind === "radio") {
    return (
      <div className="flex flex-col gap-4 rounded-2xl border border-mist bg-white p-6 shadow-card transition hover:border-indigo/40 sm:flex-row sm:items-center">
        <button
          aria-label={playing ? "Pause" : "Play"}
          onClick={() => setPlaying((v) => !v)}
          className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-clay text-xl text-white shadow-soft transition hover:bg-indigo-soft"
        >
          {playing ? "❚❚" : "▶"}
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 text-xs text-ink-soft">
            <span className="text-base">{track.flag}</span>
            <span className="font-medium text-clay">{track.country}</span>
            <span className="rounded-full bg-amber/15 px-2 py-0.5 font-semibold text-clay">LIVE</span>
            <LevelBadge level={track.level} />
          </div>
          <h3 className="mt-1 font-serif text-lg text-ink">{track.title}</h3>
          <p className="text-sm text-ink-soft">{track.description}</p>
        </div>

        {track.url && (
          <div className="w-full sm:w-auto">
            <audio
              controls
              preload="none"
              src={track.url}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              className="h-10 w-full sm:w-72"
            />
          </div>
        )}

        {track.link && (
          <a
            href={track.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-mist px-4 py-2.5 text-sm font-medium text-ink transition hover:border-indigo hover:text-indigo"
          >
            Listen ↗
          </a>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col rounded-2xl border border-mist bg-white p-6 shadow-card transition hover:border-indigo/40">
      <div className="flex items-center gap-5">
        <button
          onClick={() => setPlaying((v) => !v)}
          aria-label={playing ? "Pause" : "Play"}
          className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-indigo text-xl text-white shadow-soft transition hover:bg-indigo-soft"
        >
          {playing ? "❚❚" : "▶"}
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 text-xs text-ink-soft">
            <span className="text-base">{track.flag}</span>
            <span className="font-medium text-clay">{track.country}</span>
            <span className="text-mist">·</span>
            <span>{track.duration}</span>
            <LevelBadge level={track.level} />
          </div>
          <h3 className="mt-0.5 truncate font-serif text-lg text-ink">{track.title}</h3>
          <p className="truncate text-sm text-ink-soft">{track.description}</p>

          <div className="mt-3 flex h-6 items-end gap-1" aria-hidden>
            {Array.from({ length: 18 }).map((_, i) => {
              const h = playing ? 6 + ((i * 13) % 16) : 4 + ((i * 7) % 9);
              return (
                <span
                  key={i}
                  className={`w-1 rounded-full bg-indigo/50 ${playing ? "animate-pulse" : ""}`}
                  style={{ height: `${h}px` }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {track.quiz && (
        <div className="mt-4">
          <button
            onClick={() => setQuizOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo"
          >
            {quizOpen ? "Hide quiz" : "📝 Take the listening quiz"}
          </button>
          {quizOpen && (
            <div className="mt-4 animate-fade-up">
              <MiniQuiz questions={track.quiz} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}