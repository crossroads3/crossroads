import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles } from "@/lib/data";
import { MiniQuiz } from "@/components/MiniQuiz";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const a = articles.find((x) => x.slug === slug);
    return { title: a ? `${a.title} — Crossroads` : "Article — Crossroads" };
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((x) => x.slug === slug);
  if (!article) notFound();

  const others = articles.filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-mist bg-cream-soft">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <Link href="/articles" className="inline-flex items-center gap-2 text-sm font-medium text-indigo transition hover:text-clay">
            ← Back to articles
          </Link>
          <div className="mt-6 flex items-center gap-2 text-xs text-ink-soft">
            <span className="text-2xl">{article.flag}</span>
            <span className="font-medium text-indigo">{article.country}</span>
            <span className="text-mist">·</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            {article.title}
          </h1>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
          {article.body.map((para, i) => (
            <p key={i} className={i === 0 ? "text-xl text-ink" : undefined}>
              {para}
            </p>
          ))}
        </div>

        {article.links.length > 0 && (
          <div className="mt-10 rounded-2xl border border-mist bg-white p-6">
            <h2 className="flex items-center gap-2 font-serif text-xl text-ink">
              <span className="rounded-full bg-indigo/10 px-2 py-0.5 text-xs font-semibold text-indigo">BBC</span>
              Explore further
            </h2>
            <div className="mt-4 flex flex-col gap-2">
              {article.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-xl border border-mist px-4 py-3 text-sm font-medium text-ink transition hover:border-indigo hover:text-indigo"
                >
                  <span>{link.label}</span>
                  <span>↗</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {article.tasks.length > 0 && (
          <div className="mt-6 rounded-2xl bg-indigo-deep p-6 text-cream">
            <h2 className="font-serif text-xl">📝 Assignments</h2>
            <ol className="mt-4 space-y-3">
              {article.tasks.map((task, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-cream/90">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-amber text-xs font-bold text-ink">
                    {i + 1}
                  </span>
                  <span>{task}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {article.quiz.length > 0 && (
          <div className="mt-6 rounded-2xl border border-mist bg-white p-6 shadow-card">
            <h2 className="mb-4 font-serif text-xl text-ink">🎯 Article quiz</h2>
            <MiniQuiz questions={article.quiz} />
          </div>
        )}

        <div className="mt-10 rounded-2xl border border-mist bg-white p-6">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3 font-medium text-white transition hover:bg-indigo"
          >
            ← Back to all articles
          </Link>
        </div>
      </article>

      {others.length > 0 && (
        <section className="border-t border-mist bg-cream-soft py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="font-serif text-xl text-ink">More to read</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/articles/${o.slug}`}
                  className="rounded-2xl border border-mist bg-white px-5 py-4 transition hover:border-indigo/40 hover:shadow-card"
                >
                  <p className="text-xs text-ink-soft">
                    {o.flag} {o.country} · {o.readTime}
                  </p>
                  <p className="mt-1 font-serif text-lg leading-snug text-ink">{o.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
