export type Role = "student" | "teacher";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
  language: "fr" | "en";
  createdAt: string;
}

export type SafeUser = Omit<User, "password">;

export interface SupportMessage {
  id: string;
  name: string;
  email: string;
  topic: string;
  message: string;
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  author: string;
  text: string;
  role: Role | "system";
  createdAt: string;
}

export interface QuizSubmission {
  id: string;
  quizId: string;
  author: string;
  score: number;
  total: number;
  createdAt: string;
}