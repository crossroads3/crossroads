"use client";

import Link from "next/link";
import { useAuth } from "@/components/AuthContext";
import { useAccountModal } from "@/components/AccountModal";
import { quizzes } from "@/lib/data";
import { countries } from "@/lib/data";

export default function AccountPage() {
  const { user, logout } = useAuth();
  const { open } = useAccountModal();

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      {!user ? (
        <div className="rounded-3xl border border-mist bg-white p-10 text-center shadow-card">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-indigo text-2xl text-white">🔑</div>
          <h1 className="mt-5 font-serif text-3xl text-ink">Sign in to your account</h1>
          <p className="mx-auto mt-2 max-w-sm text-ink-soft">
            Create a free account or sign in to track your lessons, save quiz results and join the community chat.
          </p>
          <button
            onClick={open}
            className="mt-6 rounded-xl bg-ink px-6 py-3 font-medium text-white transition hover:bg-indigo"
          >
            Sign in / Register
          </button>
        </div>
      ) : (
        <div>
          <div className="flex flex-col items-start justify-between gap-4 rounded-3xl bg-indigo-deep p-8 text-cream sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-amber text-3xl text-ink">
                {user.name.charAt(0).toUpperCase()}
              </span>
              <div>
                <h1 className="font-serif text-3xl">{user.name}</h1>
                <p className="text-cream/70">{user.email}</p>
              </div>
            </div>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm capitalize ring-1 ring-cream/20">
              {user.role}
            </span>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-mist bg-white p-6 shadow-card">
              <h2 className="font-serif text-xl text-ink">Your journey</h2>
              <p className="mt-2 text-sm text-ink-soft">
                {countries.length} country lessons are waiting for you. Start with any crossroads.
              </p>
              <Link
                href="/lesson-plans"
                className="mt-4 inline-block rounded-xl bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo"
              >
                Browse lessons →
              </Link>
            </div>

            <div className="rounded-2xl border border-mist bg-white p-6 shadow-card">
              <h2 className="font-serif text-xl text-ink">Quizzes</h2>
              <p className="mt-2 text-sm text-ink-soft">
                {quizzes.length} quizzes to test yourself. Results can be saved to your data store.
              </p>
              <Link
                href="/quizzes"
                className="mt-4 inline-block rounded-xl bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo"
              >
                Take a quiz →
              </Link>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-mist bg-white p-6 shadow-card">
            <h2 className="font-serif text-xl text-ink">Account settings</h2>
            <p className="mt-2 text-sm text-ink-soft">
              In this demo, account data is stored in a local JSON file. Session is kept in your browser.
            </p>
            <button
              onClick={logout}
              className="mt-4 rounded-xl border border-mist px-5 py-2.5 text-sm font-medium text-ink transition hover:border-clay hover:text-clay"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
