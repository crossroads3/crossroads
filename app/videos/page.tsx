import { videos } from "@/lib/data";
import { VideoCard } from "@/components/VideoCard";
import { PageHeader } from "@/components/PageHeader";

export default function VideosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Videos"
        title="Authentic English, on video"
        subtitle="Real BBC Learning English programmes and clips from native speakers — graded from A2 to C1. Watch, then test your comprehension with the quiz attached to each video."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {videos.map((v) => (
            <VideoCard key={v.slug} video={v} />
          ))}
        </div>

        <div className="mt-10 grid gap-4 rounded-2xl bg-indigo-deep p-6 text-sm text-cream/80 sm:grid-cols-3">
          <div>
            <p className="font-serif text-lg text-cream">A2–C1</p>
            <p className="mt-1 text-xs text-cream/60">Videos graded by CEFR level</p>
          </div>
          <div>
            <p className="font-serif text-lg text-cream">4 accents</p>
            <p className="mt-1 text-xs text-cream/60">British, American, Canadian, Australian</p>
          </div>
          <div>
            <p className="font-serif text-lg text-cream">Quiz per video</p>
            <p className="mt-1 text-xs text-cream/60">Comprehension test attached to every clip</p>
          </div>
        </div>

        <p className="mt-6 rounded-2xl bg-amber/10 px-5 py-4 text-sm text-ink-soft">
          <strong className="text-ink">Sources:</strong> BBC Learning English (6 Minute English, News Review, Pronunciation),
          Rachel&apos;s English and Aussie English Podcast — real, public, rights-cleared content for language learning.
        </p>
      </section>
    </>
  );
}
