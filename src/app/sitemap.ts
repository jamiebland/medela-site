import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/learning-resources`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/aldeia`, changeFrequency: "monthly", priority: 0.8 },
  ];

  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const posts = await getAllPosts();
    blogPages = posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    // If Supabase is unavailable, still return static pages
  }

  return [...staticPages, ...blogPages];
}
