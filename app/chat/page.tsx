import { ChatRoom } from "@/components/ChatRoom";
import { PageHeader } from "@/components/PageHeader";

export default function ChatPage() {
  return (
    <>
      <PageHeader
        eyebrow="Chat"
        title="Meet fellow travellers"
        subtitle="A community space where learners and teachers share tips, ask questions and keep each other motivated on the language road."
      />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <ChatRoom />
        <p className="mt-6 rounded-2xl bg-amber/10 px-5 py-4 text-sm text-ink-soft">
          <strong className="text-ink">Demo note:</strong> messages are persisted to a local JSON store. Sign in to
          send with your name and role badge.
        </p>
      </section>
    </>
  );
}
