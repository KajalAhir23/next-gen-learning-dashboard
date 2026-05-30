-- Next-Gen Learning Dashboard — Supabase schema + seed data
-- Run in Supabase Dashboard → SQL Editor

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null default 0
    check (progress >= 0 and progress <= 100),
  icon_name text not null default 'book-open',
  created_at timestamptz not null default now()
);

-- Row Level Security (enable and allow public read for demo)
alter table public.courses enable row level security;

create policy "Allow public read access on courses"
  on public.courses
  for select
  to anon, authenticated
  using (true);

-- Seed 4 courses (icon_name maps to Lucide React icons)
insert into public.courses (title, progress, icon_name) values
  ('Advanced React Patterns', 75, 'code-2'),
  ('UI/UX Design Systems', 45, 'palette'),
  ('Data Structures', 30, 'brain'),
  ('Node.js APIs', 58, 'server');
