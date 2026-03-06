import { NextResponse } from "next/server";
import { getSupabase, hasSupabase } from "@/lib/supabase";

function requireSupabase() {
  if (!hasSupabase) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 503 });
  }
  return null;
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const err = requireSupabase();
  if (err) return err;

  const { slug } = await params;

  const { data, error } = await getSupabase()
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({
    slug: data.slug,
    frontmatter: {
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      category: data.category,
      author: data.author,
      readTime: data.read_time,
      featuredImage: data.featured_image,
      featured: data.featured,
    },
    content: data.content,
  });
}

export async function PUT(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const err = requireSupabase();
  if (err) return err;

  const { slug } = await params;
  const body = await req.json();
  const { frontmatter, content } = body;

  const { error } = await getSupabase()
    .from("posts")
    .update({
      title: frontmatter.title,
      date: frontmatter.date,
      excerpt: frontmatter.excerpt || "",
      category: frontmatter.category || "",
      author: frontmatter.author || "Rebecca Bland",
      read_time: Number(frontmatter.readTime) || 5,
      featured_image: frontmatter.featuredImage || "",
      featured: frontmatter.featured || false,
      content: content || "",
      updated_at: new Date().toISOString(),
    })
    .eq("slug", slug);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ slug });
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const err = requireSupabase();
  if (err) return err;

  const { slug } = await params;

  const { error } = await getSupabase().from("posts").delete().eq("slug", slug);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ deleted: true });
}
