export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-mist bg-cream-soft">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo/10 blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <span className="text-sm font-semibold uppercase tracking-widest text-clay">{eyebrow}</span>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-ink sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-ink-soft">{subtitle}</p>}
      </div>
    </section>
  );
}