import { getSupabase, hasSupabase } from "./supabase";
import { remark } from "remark";
import html from "remark-html";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: number;
  featuredImage: string;
  featured: boolean;
  content?: string;
}

// ── Filesystem fallback (lazy imports to avoid edge/client bundling issues) ──

function getAllPostsFromFiles(): BlogPost[] {
  const fs = require("fs");
  const path = require("path");
  const matter = require("gray-matter");
  const postsDirectory = path.join(process.cwd(), "content/blog");

  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((name: string) => name.endsWith(".md"))
    .map((fileName: string) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        excerpt: data.excerpt || "",
        category: data.category || "",
        author: data.author || "Rebecca",
        readTime: data.readTime || 5,
        featuredImage: data.featuredImage || "",
        featured: data.featured || false,
      };
    });
  return posts.sort((a: BlogPost, b: BlogPost) => (a.date > b.date ? -1 : 1));
}

async function getPostBySlugFromFiles(slug: string): Promise<BlogPost | null> {
  const fs = require("fs");
  const path = require("path");
  const matter = require("gray-matter");
  const postsDirectory = path.join(process.cwd(), "content/blog");

  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  return {
    slug,
    title: data.title || "",
    date: data.date || "",
    excerpt: data.excerpt || "",
    category: data.category || "",
    author: data.author || "Rebecca",
    readTime: data.readTime || 5,
    featuredImage: data.featuredImage || "",
    featured: data.featured || false,
    content: processed.toString(),
  };
}

// ── Supabase ──

async function getAllPostsFromSupabase(): Promise<BlogPost[]> {
  const { data, error } = await getSupabase()
    .from("posts")
    .select("slug, title, date, excerpt, category, author, read_time, featured_image, featured")
    .order("date", { ascending: false });

  if (error || !data) return [];

  return data.map((row) => ({
    slug: row.slug,
    title: row.title || "",
    date: row.date || "",
    excerpt: row.excerpt || "",
    category: row.category || "",
    author: row.author || "Rebecca",
    readTime: row.read_time || 5,
    featuredImage: row.featured_image || "",
    featured: row.featured || false,
  }));
}

async function getPostBySlugFromSupabase(slug: string): Promise<BlogPost | null> {
  const { data, error } = await getSupabase()
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) return null;

  const processed = await remark().use(html).process(data.content || "");

  return {
    slug: data.slug,
    title: data.title || "",
    date: data.date || "",
    excerpt: data.excerpt || "",
    category: data.category || "",
    author: data.author || "Rebecca",
    readTime: data.read_time || 5,
    featuredImage: data.featured_image || "",
    featured: data.featured || false,
    content: processed.toString(),
  };
}

// ── Public API ──

export async function getAllPosts(): Promise<BlogPost[]> {
  if (hasSupabase) return getAllPostsFromSupabase();
  return getAllPostsFromFiles();
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (hasSupabase) return getPostBySlugFromSupabase(slug);
  return getPostBySlugFromFiles(slug);
}
