import { articles } from "@/lib/data";
import { ArticleCard } from "@/components/ArticleCard";
import { PageHeader } from "@/components/PageHeader";

export default function ArticlesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Articles"
        title="Ideas from the crossroads"
        subtitle="Short, practical essays on teaching and learning with authentic materials — written from the perspective of a future English teacher."
      />
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>
    </>
  );
}
