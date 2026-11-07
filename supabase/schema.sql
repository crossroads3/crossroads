-- Crossroads — Supabase schema
-- Run this in the Supabase SQL editor (Dashboard -> SQL -> New query -> Run).

-- Users (accounts)
create table if not exists public.users (
  id text primary key,
  name text not null,
  email text not null unique,
  password text not null,
  role text not null check (role in ('student', 'teacher')),
  language text not null default 'en',
  created_at timestamptz not null default now()
);

-- Support messages
create table if not exists public.support_messages (
  id text primary key,
  name text not null,
  email text not null,
  topic text not null default 'General',
  message text not null,
  created_at timestamptz not null default now()
);

-- Chat messages
create table if not exists public.chat_messages (
  id text primary key,
  author text not null,
  text text not null,
  role text not null,
  created_at timestamptz not null default now()
);

-- Quiz submissions
create table if not exists public.quiz_submissions (
  id text primary key,
  quiz_id text not null,
  author text not null,
  score int not null,
  total int not null,
  created_at timestamptz not null default now()
);

-- Allow the service role to read/write (service role bypasses RLS anyway).
alter table public.users enable row level security;
alter table public.support_messages enable row level security;
alter table public.chat_messages enable row level security;
alter table public.quiz_submissions enable row level security;

-- Policies for the service role (used by the API routes).
drop policy if exists "service read users" on public.users;
drop policy if exists "service write users" on public.users;
create policy "service read users" on public.users for select to service_role using (true);
create policy "service write users" on public.users for insert to service_role with check (true);

drop policy if exists "service read support" on public.support_messages;
drop policy if exists "service write support" on public.support_messages;
create policy "service read support" on public.support_messages for select to service_role using (true);
create policy "service write support" on public.support_messages for insert to service_role with check (true);

drop policy if exists "service read chat" on public.chat_messages;
drop policy if exists "service write chat" on public.chat_messages;
create policy "service read chat" on public.chat_messages for select to service_role using (true);
create policy "service write chat" on public.chat_messages for insert to service_role with check (true);

drop policy if exists "service read quizzes" on public.quiz_submissions;
drop policy if exists "service write quizzes" on public.quiz_submissions;
create policy "service read quizzes" on public.quiz_submissions for select to service_role using (true);
create policy "service write quizzes" on public.quiz_submissions for insert to service_role with check (true);
