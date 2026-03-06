import { NextResponse } from "next/server";
import { getSupabase, hasSupabase } from "@/lib/supabase";

function requireSupabase() {
  if (!hasSupabase) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 503 });
  }
  return null;
}

export async function GET() {
  const err = requireSupabase();
  if (err) return err;

  const { data, error } = await getSupabase()
    .from("posts")
    .select("slug, title, date, category, author, featured")
    .order("date", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data || []);
}

export async function POST(req: Request) {
  const err = requireSupabase();
  if (err) return err;

  const body = await req.json();
  const { slug, frontmatter, content } = body;

  if (!slug || !frontmatter?.title) {
    return NextResponse.json({ error: "Slug and title are required" }, { status: 400 });
  }

  const safeSlug = slug
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  const { error } = await getSupabase().from("posts").insert({
    slug: safeSlug,
    title: frontmatter.title,
    date: frontmatter.date || new Date().toISOString().split("T")[0],
    excerpt: frontmatter.excerpt || "",
    category: frontmatter.category || "",
    author: frontmatter.author || "Rebecca Bland",
    read_time: Number(frontmatter.readTime) || 5,
    featured_image: frontmatter.featuredImage || "",
    featured: frontmatter.featured || false,
    content: content || "",
  });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ error: "A post with this slug already exists" }, { status: 409 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ slug: safeSlug });
}
