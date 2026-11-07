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
      </section>
    </>
  );
}
