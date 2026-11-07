import Link from "next/link";
import type { Article } from "@/lib/data";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex flex-col rounded-3xl border border-mist bg-white p-8 shadow-card transition hover:-translate-y-1 hover:border-indigo/40"
    >
      <div className="flex items-center gap-2 text-xs text-ink-soft">
        <span className="text-lg">{article.flag}</span>
        <span className="font-medium text-indigo">{article.country}</span>
        <span className="text-mist">·</span>
        <span>{article.readTime}</span>
      </div>
      <h2 className="mt-3 font-serif text-2xl leading-snug text-ink group-hover:text-indigo">{article.title}</h2>
      <p className="mt-3 flex-1 text-ink-soft">{article.excerpt}</p>
      <span className="mt-5 inline-flex items-center gap-2 self-start font-medium text-indigo transition group-hover:text-clay">
        Read article →
      </span>
    </Link>
  );
}