/**
 * Migration script: seed existing markdown blog posts into Supabase.
 *
 * Usage:
 *   npx tsx scripts/seed-posts.ts
 *
 * Reads NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY from .env.local
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { createClient } from "@supabase/supabase-js";

// Parse .env.local manually since dotenv version is old
const envPath = path.join(process.cwd(), ".env.local");
const envContent = fs.readFileSync(envPath, "utf8");
for (const line of envContent.split("\n")) {
  const match = line.match(/^([^#=]+)=(.*)$/);
  if (match) {
    process.env[match[1].trim()] = match[2].trim();
  }
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(url, key);
const postsDir = path.join(process.cwd(), "content/blog");

const CREATE_TABLE_SQL = `
create table if not exists posts (
  slug text primary key,
  title text not null,
  date text not null default '',
  excerpt text default '',
  category text default '',
  author text default 'Rebecca Bland',
  read_time int default 5,
  featured_image text default '',
  featured boolean default false,
  content text default '',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
`;

const RLS_SQL = `
alter table posts enable row level security;

do $$ begin
  if not exists (select 1 from pg_policies where tablename = 'posts' and policyname = 'Public read') then
    create policy "Public read" on posts for select using (true);
  end if;
  if not exists (select 1 from pg_policies where tablename = 'posts' and policyname = 'Anon insert') then
    create policy "Anon insert" on posts for insert with check (true);
  end if;
  if not exists (select 1 from pg_policies where tablename = 'posts' and policyname = 'Anon update') then
    create policy "Anon update" on posts for update using (true);
  end if;
  if not exists (select 1 from pg_policies where tablename = 'posts' and policyname = 'Anon delete') then
    create policy "Anon delete" on posts for delete using (true);
  end if;
end $$;
`;

async function seed() {
  // Try to create the table
  console.log("Ensuring posts table exists...");
  const { error: createErr } = await supabase.rpc("exec_sql", { sql: CREATE_TABLE_SQL });
  if (createErr) {
    // rpc may not exist — check if table already works
    const { error: testErr } = await supabase.from("posts").select("slug").limit(1);
    if (testErr) {
      console.error("\nCould not create table automatically.");
      console.error("Please run this SQL in your Supabase dashboard (SQL Editor):\n");
      console.error(CREATE_TABLE_SQL);
      console.error(RLS_SQL);
      process.exit(1);
    }
    console.log("Table already exists.\n");
  } else {
    console.log("Table created. Setting up RLS policies...");
    await supabase.rpc("exec_sql", { sql: RLS_SQL });
    console.log("Done.\n");
  }

  if (!fs.existsSync(postsDir)) {
    console.log("No content/blog directory found. Nothing to seed.");
    return;
  }

  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  console.log(`Found ${files.length} markdown posts to seed.\n`);

  for (const file of files) {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
    const { data, content } = matter(raw);

    const row = {
      slug,
      title: data.title || "",
      date: data.date || "",
      excerpt: data.excerpt || "",
      category: data.category || "",
      author: data.author || "Rebecca Bland",
      read_time: data.readTime || 5,
      featured_image: data.featuredImage || "",
      featured: data.featured || false,
      content: content.trim(),
    };

    const { error } = await supabase.from("posts").upsert(row, { onConflict: "slug" });

    if (error) {
      console.log(`  FAIL  ${slug}: ${error.message}`);
    } else {
      console.log(`  OK    ${slug}`);
    }
  }

  console.log("\nDone!");
}

seed();
