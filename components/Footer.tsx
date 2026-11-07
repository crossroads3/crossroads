import Link from "next/link";
import { navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-mist bg-indigo-deep text-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl font-semibold">Crossroads</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
              Where the world&apos;s Englishes meet — a resource hub for future teachers and
              curious learners of languages and cultures.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-soft">Explore</p>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/70 transition hover:text-amber-soft">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-soft">Account</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/account" className="text-cream/70 transition hover:text-amber-soft">
                  My account
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-cream/70 transition hover:text-amber-soft">
                  Contact support
                </Link>
              </li>
              <li>
                <Link href="/chat" className="text-cream/70 transition hover:text-amber-soft">
                  Community chat
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row">
          <p>© 2026 Crossroads — diploma project.</p>
          <p>🇺🇸 · 🇨🇦 · 🇳🇿 · 🇦🇺 · 🇬🇧</p>
        </div>
      </div>
    </footer>
  );
}