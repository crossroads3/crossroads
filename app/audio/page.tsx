import { audioPractice, audioRadio } from "@/lib/data";
import { AudioCard } from "@/components/AudioCard";
import { PageHeader } from "@/components/PageHeader";

export default function AudioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Audio"
        title="Listen to the crossroads"
        subtitle="Short comprehension exercises graded by level, plus real live radio from English-speaking countries. Every practice track has a listening quiz."
      />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h2 className="font-serif text-2xl text-ink">Listening practice</h2>
        <p className="mt-1 text-sm text-ink-soft">Short graded exercises with a comprehension quiz on each track.</p>
        <div className="mt-6 space-y-4">
          {audioPractice.map((t) => (
            <AudioCard key={t.slug} track={t} />
          ))}
        </div>

        <h2 className="mt-14 font-serif text-2xl text-ink">Live radio & podcasts</h2>
        <p className="mt-1 text-sm text-ink-soft">
          Real, stable public streams from the BBC, NPR, CBC and ABC. Press play to listen, or open the station in a new tab.
        </p>
        <div className="mt-6 space-y-4">
          {audioRadio.map((t) => (
            <AudioCard key={t.slug} track={t} />
          ))}
        </div>

        <p className="mt-8 rounded-2xl bg-amber/10 px-5 py-4 text-sm text-ink-soft">
          <strong className="text-ink">Note:</strong> live radio streams may take a few seconds to buffer. If a browser
          cannot play an HLS stream (e.g. CBC), use the station&apos;s official <em>Listen</em> link instead.
        </p>
      </section>
    </>
  );
}
