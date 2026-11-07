"use client";

import { useState } from "react";
import type { LessonFile } from "@/lib/data";

export function LessonFiles({ files, country }: { files: LessonFile[]; country: string }) {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <div className="mt-5 space-y-2 border-t border-mist pt-4">
      {files.map((file) => (
        <div key={file.path}>
          <div className="flex items-center gap-2">
            <a
              href={file.path}
              download
              className="flex flex-1 items-center justify-between gap-2 rounded-xl bg-ink px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo"
            >
              <span>⬇ {file.label}</span>
              <span className="text-xs opacity-70">PDF</span>
            </a>
            <a
              href={file.path}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${file.label} in new tab`}
              title="Open in new tab"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-mist text-ink transition hover:border-indigo hover:text-indigo"
            >
              ↗
            </a>
            <button
              onClick={() => setPreview(preview === file.path ? null : file.path)}
              aria-label={`Preview ${file.label}`}
              title="Preview"
              className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border text-sm transition ${
                preview === file.path
                  ? "border-indigo bg-indigo text-white"
                  : "border-mist text-ink hover:border-indigo hover:text-indigo"
              }`}
            >
              {preview === file.path ? "✕" : "👁"}
            </button>
          </div>

          {preview === file.path && (
            <div className="mt-2 h-72 overflow-hidden rounded-2xl border border-mist bg-cream-soft animate-fade-in">
              <iframe
                src={`${file.path}#toolbar=1`}
                title={`${country} — ${file.label}`}
                className="h-full w-full"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}