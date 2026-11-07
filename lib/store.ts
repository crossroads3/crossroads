import { supabase, dbError } from "./supabase";
import type { ChatMessage, QuizSubmission, SupportMessage, User } from "./types";

export function makeId(prefix: string): string {
  return `${prefix}_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}

interface UserRow {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "student" | "teacher";
  language: string;
  created_at: string;
}

interface SupportRow {
  id: string;
  name: string;
  email: string;
  topic: string;
  message: string;
  created_at: string;
}

interface ChatRow {
  id: string;
  author: string;
  text: string;
  role: string;
  created_at: string;
}

interface QuizRow {
  id: string;
  quiz_id: string;
  author: string;
  score: number;
  total: number;
  created_at: string;
}

// ---- Users ----
export async function getUsers(): Promise<User[]> {
  if (!supabase) dbError("getUsers");
  const { data, error } = await supabase!
    .from("users")
    .select("*")
    .order("created_at", { ascending: true });
  if (error) dbError("getUsers", error.message);
  return ((data ?? []) as UserRow[]).map((r) => ({
    id: r.id,
    name: r.name,
    email: r.email,
    password: r.password,
    role: r.role,
    language: (r.language ?? "en") as User["language"],
    createdAt: r.created_at,
  }));
}

export async function addUser(user: User): Promise<void> {
  if (!supabase) dbError("addUser");
  const { error } = await supabase!.from("users").insert({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
    role: user.role,
    language: user.language,
    created_at: user.createdAt,
  });
  if (error) dbError("addUser", error.message);
}

// ---- Support ----
export async function getSupport(): Promise<SupportMessage[]> {
  if (!supabase) dbError("getSupport");
  const { data, error } = await supabase!
    .from("support_messages")
    .select("*")
    .order("created_at", { ascending: true });
  if (error) dbError("getSupport", error.message);
  return ((data ?? []) as SupportRow[]).map((r) => ({
    id: r.id,
    name: r.name,
    email: r.email,
    topic: r.topic ?? "General",
    message: r.message,
    createdAt: r.created_at,
  }));
}

export async function addSupport(msg: SupportMessage): Promise<void> {
  if (!supabase) dbError("addSupport");
  const { error } = await supabase!.from("support_messages").insert({
    id: msg.id,
    name: msg.name,
    email: msg.email,
    topic: msg.topic,
    message: msg.message,
    created_at: msg.createdAt,
  });
  if (error) dbError("addSupport", error.message);
}

// ---- Chat ----
export async function getChat(): Promise<ChatMessage[]> {
  if (!supabase) dbError("getChat");
  const { data, error } = await supabase!
    .from("chat_messages")
    .select("*")
    .order("created_at", { ascending: true });
  if (error) dbError("getChat", error.message);
  return ((data ?? []) as ChatRow[]).map((r) => ({
    id: r.id,
    author: r.author,
    text: r.text,
    role: r.role as ChatMessage["role"],
    createdAt: r.created_at,
  }));
}

export async function addChatMessage(msg: ChatMessage): Promise<void> {
  if (!supabase) dbError("addChatMessage");
  const { error } = await supabase!.from("chat_messages").insert({
    id: msg.id,
    author: msg.author,
    text: msg.text,
    role: msg.role,
    created_at: msg.createdAt,
  });
  if (error) dbError("addChatMessage", error.message);
}

// ---- Quiz submissions ----
export async function getQuizSubmissions(): Promise<QuizSubmission[]> {
  if (!supabase) dbError("getQuizSubmissions");
  const { data, error } = await supabase!
    .from("quiz_submissions")
    .select("*")
    .order("created_at", { ascending: true });
  if (error) dbError("getQuizSubmissions", error.message);
  return ((data ?? []) as QuizRow[]).map((r) => ({
    id: r.id,
    quizId: r.quiz_id,
    author: r.author,
    score: r.score,
    total: r.total,
    createdAt: r.created_at,
  }));
}

export async function addQuizSubmission(sub: QuizSubmission): Promise<void> {
  if (!supabase) dbError("addQuizSubmission");
  const { error } = await supabase!.from("quiz_submissions").insert({
    id: sub.id,
    quiz_id: sub.quizId,
    author: sub.author,
    score: sub.score,
    total: sub.total,
    created_at: sub.createdAt,
  });
  if (error) dbError("addQuizSubmission", error.message);
}