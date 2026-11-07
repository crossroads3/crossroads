import { promises as fs } from "fs";
import path from "path";
import type { ChatMessage, QuizSubmission, SupportMessage, User } from "./types";

const DATA_DIR = path.join(process.cwd(), "data");

async function ensureDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

async function readJson<T>(file: string, fallback: T): Promise<T> {
  try {
    const raw = await fs.readFile(path.join(DATA_DIR, file), "utf-8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

async function writeJson<T>(file: string, data: T): Promise<void> {
  await ensureDir();
  await fs.writeFile(path.join(DATA_DIR, file), JSON.stringify(data, null, 2), "utf-8");
}

export function makeId(prefix: string): string {
  return `${prefix}_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}

// ---- Users ----
export async function getUsers(): Promise<User[]> {
  return readJson<User[]>("users.json", []);
}

export async function addUser(user: User): Promise<void> {
  const users = await getUsers();
  users.push(user);
  await writeJson("users.json", users);
}

// ---- Support ----
export async function getSupport(): Promise<SupportMessage[]> {
  return readJson<SupportMessage[]>("support.json", []);
}

export async function addSupport(msg: SupportMessage): Promise<void> {
  const list = await getSupport();
  list.push(msg);
  await writeJson("support.json", list);
}

// ---- Chat ----
export async function getChat(): Promise<ChatMessage[]> {
  return readJson<ChatMessage[]>("chat.json", []);
}

export async function addChatMessage(msg: ChatMessage): Promise<void> {
  const list = await getChat();
  list.push(msg);
  await writeJson("chat.json", list);
}

// ---- Quiz submissions ----
export async function getQuizSubmissions(): Promise<QuizSubmission[]> {
  return readJson<QuizSubmission[]>("quizzes.json", []);
}

export async function addQuizSubmission(sub: QuizSubmission): Promise<void> {
  const list = await getQuizSubmissions();
  list.push(sub);
  await writeJson("quizzes.json", list);
}