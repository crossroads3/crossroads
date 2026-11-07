"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import type { Role, SafeUser } from "@/lib/types";

const AccountModalContext = createContext<{ open: () => void }>({ open: () => {} });

export function useAccountModal() {
  return useContext(AccountModalContext);
}

type Mode = "login" | "register";

export function AccountModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("login");
  const [role, setRole] = useState<Role>("student");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<{ kind: "error" | "ok"; text: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const { user, login, register, logout } = useAuth();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const open = () => {
    setMessage(null);
    setPassword("");
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          mode === "register"
            ? { action: "register", name, email, password, role }
            : { action: "login", email, password }
        ),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage({ kind: "error", text: data.error || "Something went wrong." });
        return;
      }
      if (mode === "register") register(data.user as SafeUser);
      else login(data.user as SafeUser);
      setMessage({ kind: "ok", text: "Welcome to Crossroads!" });
      setIsOpen(false);
    } catch {
      setMessage({ kind: "error", text: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AccountModalContext.Provider value={{ open }}>
      {children}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-indigo-deep/60 backdrop-blur-sm animate-fade-in"
            onClick={close}
          />
          <div className="relative w-full max-w-md rounded-3xl bg-cream p-8 shadow-soft animate-fade-up">
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-mist text-ink-soft transition hover:bg-indigo hover:text-white"
            >
              ✕
            </button>

            {user ? (
              <div className="text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-indigo text-2xl text-white">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <h2 className="mt-4 font-serif text-2xl text-ink">Welcome, {user.name}</h2>
                <p className="mt-1 text-sm text-ink-soft">
                  Signed in as a {user.role} · {user.email}
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="/account"
                    onClick={close}
                    className="rounded-xl bg-indigo px-5 py-3 text-center font-medium text-white transition hover:bg-indigo-soft"
                  >
                    Open my account
                  </a>
                  <button
                    onClick={() => {
                      logout();
                      close();
                    }}
                    className="rounded-xl border border-mist px-5 py-3 font-medium text-ink transition hover:border-clay hover:text-clay"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex gap-2">
                  {(["login", "register"] as Mode[]).map((m) => (
                    <button
                      key={m}
                      onClick={() => setMode(m)}
                      className={`flex-1 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                        mode === m
                          ? "bg-indigo text-white"
                          : "bg-mist text-ink-soft hover:bg-indigo-soft/20"
                      }`}
                    >
                      {m === "login" ? "Sign in" : "Create account"}
                    </button>
                  ))}
                </div>

                <h2 className="mt-6 font-serif text-2xl text-ink">
                  {mode === "login" ? "Welcome back" : "Join Crossroads"}
                </h2>
                <p className="mt-1 text-sm text-ink-soft">
                  {mode === "login"
                    ? "Sign in to continue your journey."
                    : "Create a free account to save your progress."}
                </p>

                <form onSubmit={submit} className="mt-6 space-y-4">
                  {mode === "register" && (
                    <>
                      <label className="block">
                        <span className="mb-1.5 block text-sm font-medium text-ink-soft">Your name</span>
                        <input
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Alex Learner"
                          className="w-full rounded-xl border border-mist bg-white px-4 py-3 text-ink outline-none transition focus:border-indigo focus:ring-2 focus:ring-indigo/20"
                        />
                      </label>

                      <div>
                        <span className="mb-1.5 block text-sm font-medium text-ink-soft">I am a…</span>
                        <div className="grid grid-cols-2 gap-2">
                          {(["student", "teacher"] as Role[]).map((r) => (
                            <button
                              key={r}
                              type="button"
                              onClick={() => setRole(r)}
                              className={`rounded-xl px-4 py-3 text-sm font-medium capitalize transition ${
                                role === r
                                  ? "bg-amber text-ink ring-2 ring-amber"
                                  : "bg-mist text-ink-soft hover:bg-amber-soft/40"
                              }`}
                            >
                              {r}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium text-ink-soft">Email</span>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-mist bg-white px-4 py-3 text-ink outline-none transition focus:border-indigo focus:ring-2 focus:ring-indigo/20"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium text-ink-soft">Password</span>
                    <input
                      required
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-mist bg-white px-4 py-3 text-ink outline-none transition focus:border-indigo focus:ring-2 focus:ring-indigo/20"
                    />
                  </label>

                  {message && (
                    <p
                      className={`rounded-xl px-4 py-3 text-sm ${
                        message.kind === "ok"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {message.text}
                    </p>
                  )}

                  <button
                    disabled={loading}
                    className="w-full rounded-xl bg-ink px-5 py-3.5 font-medium text-white transition hover:bg-indigo disabled:opacity-60"
                  >
                    {loading ? "Please wait…" : mode === "login" ? "Sign in" : "Create account"}
                  </button>
                </form>

                <p className="mt-4 text-center text-xs text-ink-soft">
                  Demo project · data is stored locally as JSON files.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </AccountModalContext.Provider>
  );
}
