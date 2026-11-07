import { NextResponse } from "next/server";
import { addChatMessage, getChat, makeId } from "@/lib/store";
import type { ChatMessage } from "@/lib/types";

export async function GET() {
  const messages = await getChat();
  return NextResponse.json({ messages });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { author, text, role } = body || {};

    if (typeof author !== "string" || !author || typeof text !== "string" || !text.trim()) {
      return NextResponse.json({ error: "author and text are required" }, { status: 400 });
    }

    const msg: ChatMessage = {
      id: makeId("chat"),
      author,
      text: text.trim(),
      role: role === "teacher" ? "teacher" : role === "student" ? "student" : "system",
      createdAt: new Date().toISOString(),
    };

    await addChatMessage(msg);
    return NextResponse.json({ ok: true, message: msg });
  } catch {
    return NextResponse.json({ error: "Could not send message" }, { status: 500 });
  }
}
