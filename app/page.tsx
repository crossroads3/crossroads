import Link from "next/link";
import { countries } from "@/lib/data";
import { AssessmentSection } from "@/components/AssessmentSection";

function CrossroadsMotif() {
  return (
    <svg viewBox="0 0 200 200" className="h-40 w-40 text-amber-soft" aria-hidden>
      <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6" />
      <circle cx="100" cy="100" r="58" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M100 10v50M100 140v50M10 100h50M140 100h50" stroke="currentColor" strokeWidth="2" />
      <path d="M34 34l47 47M119 119l47 47M166 34l-47 47M81 119l-47 47" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

const guidelines = [
  {
    n: "01",
    title: "Choose real, relevant material",
    desc: "Menus, songs, clips and posts the target culture actually uses — always age- and level-appropriate.",
  },
  {
    n: "02",
    title: "Scale the task, not the language",
    desc: "Keep the material authentic but stage tasks: predict first, then listen for gist, then zoom in.",
  },
  {
    n: "03",
    title: "Scaffold before and after",
    desc: "Pre-teach key blocking words, give comprehension support, and end with a communicative follow-up.",
  },
  {
    n: "04",
    title: "Connect to learners' lives",
    desc: "Invite learners to react, compare with their own culture and bring their own authentic finds.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-indigo/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-amber/20 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-4 py-1.5 text-sm font-medium text-clay">
              <span className="h-2 w-2 rounded-full bg-amber" /> English Language Teaching · Teacher Toolkit
            </span>
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
              Where languages
              <span className="text-indigo"> meet</span> — and cultures{" "}
              <span className="italic text-clay">cross paths.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Crossroads is a resource hub for teachers and curious learners of
              English and its many world voices. Explore ready-to-use lesson plans, authentic
              materials, quizzes and a community of fellow travellers on the language road.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/lesson-plans"
                className="rounded-xl bg-ink px-6 py-3.5 font-medium text-white shadow-card transition hover:bg-indigo"
              >
                Explore lesson plans
              </Link>
              <a
                href="#about"
                className="rounded-xl border border-mist bg-white/60 px-6 py-3.5 font-medium text-ink transition hover:border-indigo hover:text-indigo"
              >
                Learn more ↓
              </a>
            </div>
          </div>

          <div className="relative flex justify-center animate-fade-in">
            <div className="relative">
              <CrossroadsMotif />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="font-serif text-lg text-indigo">CR</p>
                <p className="text-[10px] uppercase tracking-widest text-ink-soft">crossroads</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTRIES STRIP */}
      <section className="border-y border-mist bg-cream-soft">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-8 sm:grid-cols-5 sm:px-6">
          {countries.map((c) => (
            <Link
              key={c.slug}
              href={`/lesson-plans/${c.slug}`}
              className="group flex flex-col items-center gap-1 rounded-2xl px-3 py-4 text-center transition hover:bg-white hover:shadow-card"
            >
              <span className="text-3xl">{c.flag}</span>
              <span className="text-sm font-semibold text-ink group-hover:text-indigo">{c.name}</span>
              <span className="text-xs text-ink-soft">{c.language}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-clay">About Crossroads</span>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-ink">
              A hub built at the crossing of great language
            </h2>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              Crossroads was designed by English teachers for anyone
              who believes a language is more than grammar — it is a doorway into another way of life.
            </p>
            <p>
              Here you will find five country-based lesson journeys, authentic materials in real
              voices, interactive quizzes, and a community where learners and teachers share the road together.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="scroll-mt-20 bg-indigo-deep py-20 text-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-amber-soft">How it works</span>
            <h2 className="mt-3 font-serif text-4xl font-semibold">A simple guide for students and teachers</h2>
            <p className="mt-4 text-lg text-cream/80">Pick your role and follow the path.</p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white/[0.06] p-8 ring-1 ring-cream/10">
              <span className="inline-flex items-center gap-2 rounded-full bg-amber px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink">
                🎒 For students
              </span>
              <div className="mt-6 space-y-5">
                {[
                  {
                    t: "Choose Your Destination",
                    d: "Select a country or a cultural theme that interests you — the UK, the USA, Canada, Australia, New Zealand, or topics like holidays, traditions, and everyday life.",
                  },
                  {
                    t: "Explore Authentic Materials",
                    d: "Read Articles, watch Videos, and listen to Audio from real sources. Each material includes guiding questions to help you analyze cultural contexts.",
                  },
                  {
                    t: "Test Your Knowledge",
                    d: "Go to the Quizzes section to check your understanding of cultural realities, traditions, and differences.",
                  },
                  {
                    t: "Discuss and Share",
                    d: "Use the Chat section to exchange opinions with other learners. Discussing cultural differences develops tolerance and critical thinking.",
                  },
                ].map((item) => (
                  <div key={item.t}>
                    <h4 className="flex items-center gap-2 font-semibold text-cream">
                      <span className="text-amber-soft">▸</span>
                      {item.t}
                    </h4>
                    <p className="mt-1 pl-5 text-sm leading-relaxed text-cream/75">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white/[0.06] p-8 ring-1 ring-cream/10">
              <span className="inline-flex items-center gap-2 rounded-full bg-indigo-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                🧭 For teachers
              </span>
              <div className="mt-6 space-y-5">
                {[
                  {
                    t: "Download Lesson Plans",
                    d: "Lesson plans based on our authentic materials.",
                  },
                  {
                    t: "Use Assessment Criteria",
                    d: "Clear descriptors for different levels, helping you measure analysis, comparison, and respect for cultural differences.",
                  },
                  {
                    t: "Working with authentic materials",
                    d: "Practical recommendations on adapting authentic texts, videos, and audio for different language levels.",
                  },
                ].map((item) => (
                  <div key={item.t}>
                    <h4 className="flex items-center gap-2 font-semibold text-cream">
                      <span className="text-indigo-soft">▸</span>
                      {item.t}
                    </h4>
                    <p className="mt-1 pl-5 text-sm leading-relaxed text-cream/75">{item.d}</p>
                  </div>
                ))}
                <div className="rounded-2xl bg-white/[0.05] p-4 ring-1 ring-cream/10">
                  <h4 className="font-semibold text-amber-soft">Each lesson plan includes</h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-cream/75">
                    <li>Topic and objectives</li>
                    <li>Step-by-step instructions</li>
                    <li>Authentic materials with links</li>
                    <li>Assessment criteria</li>
                    <li>Homework and extension tasks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASSESSMENT CRITERIA */}
      <AssessmentSection />

      {/* GUIDELINES */}
      <section id="guidelines" className="scroll-mt-20 border-t border-mist bg-cream-soft py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-clay">Guidelines</span>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-ink">
              Working with authentic materials
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Four principles that turn real-world input into powerful lessons.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {guidelines.map((g) => (
              <div
                key={g.n}
                className="flex gap-6 rounded-2xl border border-mist bg-white p-7 shadow-card transition hover:-translate-y-1"
              >
                <span className="font-serif text-4xl font-semibold text-indigo/30">{g.n}</span>
                <div>
                  <h3 className="font-serif text-xl text-ink">{g.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-indigo-deep px-8 py-14 text-center text-cream">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-amber/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-indigo/40 blur-3xl" />
          <h2 className="relative font-serif text-4xl font-semibold">Ready to cross the road?</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-cream/80">
            Begin your first country lesson today, or join the community and meet fellow
            travellers on the language road.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/lesson-plans"
              className="rounded-xl bg-amber px-6 py-3.5 font-medium text-ink transition hover:bg-amber-soft"
            >
              Start a lesson
            </Link>
            <Link
              href="/chat"
              className="rounded-xl bg-white/10 px-6 py-3.5 font-medium text-cream ring-1 ring-cream/20 transition hover:bg-white/20"
            >
              Join the chat
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
