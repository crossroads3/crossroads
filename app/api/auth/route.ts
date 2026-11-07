import { NextResponse } from "next/server";
import { addUser, getUsers, makeId } from "@/lib/store";
import type { Role, SafeUser, User } from "@/lib/types";

function toSafe(user: User): SafeUser {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    language: user.language,
    createdAt: user.createdAt,
  };
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action } = body || {};

    if (action === "register") {
      const { name, email, password, role } = body || {};
      if (typeof name !== "string" || !name.trim()) {
        return NextResponse.json({ error: "Name is required" }, { status: 400 });
      }
      if (typeof email !== "string" || !email.includes("@")) {
        return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
      }
      if (typeof password !== "string" || password.length < 4) {
        return NextResponse.json({ error: "Password must be at least 4 characters" }, { status: 400 });
      }
      if (role !== "student" && role !== "teacher") {
        return NextResponse.json({ error: "Role must be student or teacher" }, { status: 400 });
      }

      const users = await getUsers();
      if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
        return NextResponse.json({ error: "An account with this email already exists" }, { status: 409 });
      }

      const user: User = {
        id: makeId("usr"),
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password,
        role: role as Role,
        language: "en",
        createdAt: new Date().toISOString(),
      };
      await addUser(user);
      return NextResponse.json({ ok: true, user: toSafe(user) });
    }

    if (action === "login") {
      const { email, password } = body || {};
      if (typeof email !== "string" || typeof password !== "string") {
        return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
      }

      const users = await getUsers();
      const user = users.find(
        (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
      );
      if (!user) {
        return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
      }
      return NextResponse.json({ ok: true, user: toSafe(user) });
    }

    return NextResponse.json({ error: "Unknown action" }, { status: 400 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
