import { NextResponse } from "next/server";
import { addQuizSubmission, makeId } from "@/lib/store";
import type { QuizSubmission } from "@/lib/types";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { quizId, author, score, total } = body || {};

    if (typeof quizId !== "string" || !quizId) {
      return NextResponse.json({ error: "quizId is required" }, { status: 400 });
    }
    if (typeof score !== "number" || typeof total !== "number" || score < 0 || total <= 0) {
      return NextResponse.json({ error: "Valid score and total are required" }, { status: 400 });
    }

    const submission: QuizSubmission = {
      id: makeId("quiz"),
      quizId,
      author: typeof author === "string" && author ? author : "Guest",
      score,
      total,
      createdAt: new Date().toISOString(),
    };

    await addQuizSubmission(submission);
    return NextResponse.json({ ok: true, id: submission.id });
  } catch {
    return NextResponse.json({ error: "Could not save quiz result" }, { status: 500 });
  }
}
