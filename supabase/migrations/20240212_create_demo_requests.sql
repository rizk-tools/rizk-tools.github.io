-- Create the demo_requests table
create table if not exists public.demo_requests (
  id uuid default gen_random_uuid() primary key,
  email text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.demo_requests enable row level security;

-- Create a policy that allows inserting data
create policy "Allow anonymous insert" on public.demo_requests
  for insert
  with check (true);

-- Grant INSERT permissions to the anonymous role
grant insert on public.demo_requests to anon; 