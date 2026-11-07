import { NextResponse } from "next/server";
import { addSupport, makeId } from "@/lib/store";
import type { SupportMessage } from "@/lib/types";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, topic, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email and message are required" }, { status: 400 });
    }

    const msg: SupportMessage = {
      id: makeId("sup"),
      name: String(name),
      email: String(email),
      topic: typeof topic === "string" && topic ? String(topic) : "General",
      message: String(message),
      createdAt: new Date().toISOString(),
    };

    await addSupport(msg);
    return NextResponse.json({ ok: true, id: msg.id });
  } catch {
    return NextResponse.json({ error: "Could not submit your message" }, { status: 500 });
  }
}
