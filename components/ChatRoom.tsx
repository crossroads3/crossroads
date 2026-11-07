"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ChatMessage } from "@/lib/types";
import { useAuth } from "./AuthContext";

const seeded: ChatMessage[] = [
  {
    id: "seed-1",
    author: "Crossroads",
    role: "system",
    text: "Welcome to the community chat! Ask questions about lessons, share your progress or connect with other learners and teachers. Messages are stored in the local data store.",
    createdAt: new Date().toISOString(),
  },
];

export function ChatRoom() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>(seeded);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/chat");
      const data = await res.json();
      if (data.messages?.length) setMessages(data.messages);
    } catch {
      /* keep seeded */
    }
  }, []);

  useEffect(() => {
    // Load persisted chat messages on mount (async fetch -> setState in callback).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refresh();
  }, [refresh]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text || sending) return;
    setSending(true);
    try {
      await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author: user?.name || "Guest",
          text,
          role: user?.role || "system",
        }),
      });
      setDraft("");
      await refresh();
    } finally {
      setSending(false);
    }
  };

  const badge = (role: ChatMessage["role"]) => {
    if (role === "teacher") return "bg-indigo text-white";
    if (role === "student") return "bg-amber text-ink";
    return "bg-mist text-ink-soft";
  };

  return (
    <div className="flex h-[70vh] flex-col overflow-hidden rounded-3xl border border-mist bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-mist bg-cream-soft px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="relative grid h-10 w-10 place-items-center rounded-full bg-indigo text-white">💬</span>
          <div>
            <p className="font-serif text-lg text-ink">Community chat</p>
            <p className="flex items-center gap-1.5 text-xs text-ink-soft">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> {messages.length} messages in this session
            </p>
          </div>
        </div>
        <button
          onClick={refresh}
          className="rounded-lg border border-mist px-3 py-1.5 text-xs font-medium text-ink transition hover:border-indigo hover:text-indigo"
        >
          ↻ Refresh
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto bg-cream/40 px-6 py-6">
        {messages.map((m) => {
          const isMe = user && m.author === user.name;
          return (
            <div key={m.id} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                  isMe ? "bg-indigo text-white" : "bg-white shadow-card ring-1 ring-mist"
                }`}
              >
                <div className={`flex items-center gap-2 text-xs ${isMe ? "text-indigo-soft" : "text-ink-soft"}`}>
                  <span className={`rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase ${badge(m.role)}`}>
                    {m.role}
                  </span>
                  <span className="font-semibold">{m.author}</span>
                  <span>
                    {new Date(m.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
                <p className={`mt-1.5 text-sm leading-relaxed ${isMe ? "text-white" : "text-ink"}`}>{m.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      <form onSubmit={send} className="flex gap-3 border-t border-mist bg-cream-soft px-6 py-4">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={user ? `Message as ${user.name}…` : "Sign in to send with your name…"}
          className="flex-1 rounded-xl border border-mist bg-white px-4 py-3 text-ink outline-none transition focus:border-indigo focus:ring-2 focus:ring-indigo/20"
        />
        <button
          disabled={sending || !draft.trim()}
          className="rounded-xl bg-ink px-6 py-3 font-medium text-white transition hover:bg-indigo disabled:opacity-40"
        >
          Send
        </button>
      </form>
    </div>
  );
}