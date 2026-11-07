"use client";

import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";

const topics = ["General question", "Lesson plans", "Account help", "Technical issue", "Feedback"];

export default function SupportPage() {
  const [form, setForm] = useState({ name: "", email: "", topic: topics[0], message: "" });
  const [status, setStatus] = useState<null | { kind: "ok" | "error"; text: string }>(null);
  const [loading, setLoading] = useState(false);

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus({ kind: "error", text: data.error || "Something went wrong." });
        return;
      }
      setStatus({ kind: "ok", text: "Thank you! Your message has been sent to the Crossroads team." });
      setForm({ name: "", email: "", topic: topics[0], message: "" });
    } catch {
      setStatus({ kind: "error", text: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="We are here to help"
        subtitle="Ask a question, report a problem or share feedback. Your message is stored securely so the team can follow up."
      />

      <section className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
        <form
          onSubmit={submit}
          className="rounded-3xl border border-mist bg-white p-8 shadow-card"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink-soft">Name</span>
              <input
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Your name"
                className="w-full rounded-xl border border-mist bg-cream px-4 py-3 text-ink outline-none transition focus:border-indigo focus:ring-2 focus:ring-indigo/20"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink-soft">Email</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-mist bg-cream px-4 py-3 text-ink outline-none transition focus:border-indigo focus:ring-2 focus:ring-indigo/20"
              />
            </label>
          </div>

          <label className="mt-4 block">
            <span className="mb-1.5 block text-sm font-medium text-ink-soft">Topic</span>
            <select
              value={form.topic}
              onChange={update("topic")}
              className="w-full rounded-xl border border-mist bg-cream px-4 py-3 text-ink outline-none transition focus:border-indigo focus:ring-2 focus:ring-indigo/20"
            >
              {topics.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>

          <label className="mt-4 block">
            <span className="mb-1.5 block text-sm font-medium text-ink-soft">Message</span>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={update("message")}
              placeholder="Tell us how we can help…"
              className="w-full resize-none rounded-xl border border-mist bg-cream px-4 py-3 text-ink outline-none transition focus:border-indigo focus:ring-2 focus:ring-indigo/20"
            />
          </label>

          {status && (
            <p
              className={`mt-4 rounded-xl px-4 py-3 text-sm ${
                status.kind === "ok" ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
              }`}
            >
              {status.text}
            </p>
          )}

          <button
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-ink px-6 py-3.5 font-medium text-white transition hover:bg-indigo disabled:opacity-60"
          >
            {loading ? "Sending…" : "Send message"}
          </button>
          
        </form>
      </section>
    </>
  );
}
