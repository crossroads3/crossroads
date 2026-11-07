"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";
import { useAuth } from "./AuthContext";
import { useAccountModal } from "./AccountModal";

function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo text-white shadow-card transition group-hover:rotate-45">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
      <span className="font-serif text-xl font-semibold tracking-tight text-ink">Crossroads</span>
    </Link>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useAuth();
  const { open } = useAccountModal();

  return (
    <header className="sticky top-0 z-40 border-b border-mist/70 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  active ? "bg-indigo/10 text-indigo" : "text-ink-soft hover:bg-mist hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={open}
            className="hidden rounded-xl bg-ink px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo sm:block"
          >
            {user ? user.name : "Sign in"}
          </button>
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-mist text-ink lg:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-mist bg-cream px-4 py-3 lg:hidden">
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft transition hover:bg-mist hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                open();
              }}
              className="mt-2 rounded-xl bg-ink px-4 py-2.5 text-left text-sm font-medium text-white"
            >
              {user ? `Account · ${user.name}` : "Sign in / Register"}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}