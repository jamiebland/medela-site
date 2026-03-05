"use client";

import { useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long" });
}

function PostCard({ post }: { post: BlogPost }) {
  const isAldeia = post.category.toLowerCase() === "aldeia";
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="bg-white rounded-[var(--radius)] overflow-hidden shadow-[var(--shadow-sm)] flex flex-col transition-all hover:-translate-y-1 hover:shadow-[var(--shadow)]"
    >
      <div className="h-[168px] overflow-hidden relative bg-blue-pale flex items-center justify-center text-4xl">
        {post.featuredImage ? (
          <img src={post.featuredImage} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <span>{getCategoryEmoji(post.category)}</span>
        )}
        <span
          className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase text-white ${
            isAldeia ? "bg-purple" : "bg-blue-btn"
          }`}
        >
          {post.category}
        </span>
      </div>
      <div className="p-4 pb-5 flex-1 flex flex-col">
        <div className="text-[11px] text-text-light mb-1.5 flex items-center gap-2">
          <span>{formatDate(post.date)}</span>
          <span>&middot;</span>
          <span>{post.readTime} min read</span>
        </div>
        <div className="text-sm font-bold text-text leading-snug mb-2 flex-1 tracking-tight">
          {post.title}
        </div>
        <p className="text-[13px] text-text-mid leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
        <span className={`text-[13px] font-semibold flex items-center gap-1 ${isAldeia ? "text-purple-dark" : "text-blue-btn"}`}>
          Read article <span>&rarr;</span>
        </span>
      </div>
    </Link>
  );
}

function getCategoryEmoji(cat: string) {
  const map: Record<string, string> = {
    Parents: "\uD83D\uDC6A",
    Schooling: "\uD83C\uDFEB",
    Growth: "\uD83C\uDF31",
    Homework: "\u270F\uFE0F",
    Reading: "\uD83D\uDCDA",
    Dyslexia: "\uD83E\uDDE9",
    ADHD: "\u26A1",
    Learning: "\uD83E\uDDE0",
    Aldeia: "\uD83C\uDF0D",
  };
  return map[cat] || "\uD83D\uDCD6";
}

export default function BlogGrid({
  featured,
  posts,
  categories,
}: {
  featured: BlogPost | undefined;
  posts: BlogPost[];
  categories: string[];
}) {
  const [filter, setFilter] = useState("all");

  const filteredPosts = filter === "all" ? posts : posts.filter((p) => p.category.toLowerCase() === filter.toLowerCase());
  const showFeatured = filter === "all" || featured?.category.toLowerCase() === filter.toLowerCase();

  return (
    <div className="max-w-[1180px] mx-auto px-6 md:px-20 py-18">
      <div className="grid md:grid-cols-[1fr_340px] gap-13 items-start">
        {/* Main content */}
        <div>
          {/* Featured post */}
          {featured && showFeatured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="block bg-white rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow)] mb-9 transition-all hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(30,58,110,.13)]"
            >
              <div className="h-[340px] md:h-[340px] overflow-hidden relative bg-blue-pale flex items-center justify-center text-6xl">
                {featured.featuredImage ? (
                  <img src={featured.featuredImage} alt={featured.title} className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <span>{getCategoryEmoji(featured.category)}</span>
                )}
                <span className="absolute top-4 left-4 z-10 bg-blue-btn text-white px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase">
                  Featured
                </span>
              </div>
              <div className="p-8 md:p-9">
                <div className="flex items-center gap-3.5 flex-wrap text-xs text-text-light mb-3.5">
                  <span>{formatDate(featured.date)}</span>
                  <span className="w-[3px] h-[3px] rounded-full bg-text-light" />
                  <span>By {featured.author}</span>
                  <span className="w-[3px] h-[3px] rounded-full bg-text-light" />
                  <span>{featured.readTime} min read</span>
                </div>
                <h2 className="text-xl md:text-[28px] font-extrabold text-text leading-[1.2] tracking-tight mb-3">
                  {featured.title}
                </h2>
                <p className="text-[15px] text-text-mid leading-7 mb-5">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-btn border-b-[1.5px] border-blue-light pb-0.5">
                  Read the full article <span>&rarr;</span>
                </span>
              </div>
            </Link>
          )}

          {/* Posts grid */}
          <div className="flex items-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-blue-btn mb-5">
            <span className="block w-[18px] h-0.5 bg-blue rounded-sm" />
            Recent articles
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {filteredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="text-center text-text-light py-12">No articles in this category yet.</p>
          )}
        </div>

        {/* Sidebar */}
        <aside className="md:sticky md:top-22 flex flex-col gap-6">
          {/* Categories */}
          <div className="bg-white rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-sm)]">
            <h3 className="text-[11px] tracking-[.08em] uppercase font-bold text-text mb-3.5">Browse by topic</h3>
            <div className="flex flex-col gap-0.5">
              <button
                onClick={() => setFilter("all")}
                className={`flex items-center justify-between px-3 py-2.5 rounded-[var(--radius)] text-sm font-medium transition-colors cursor-pointer ${
                  filter === "all" ? "bg-blue-pale text-blue-dark font-semibold" : "text-text-mid hover:bg-blue-pale hover:text-blue-dark"
                }`}
              >
                All posts
                <span className="text-[11px] text-text-light bg-bg px-2 py-0.5 rounded-full">{posts.length + (featured ? 1 : 0)}</span>
              </button>
              {categories.map((cat) => {
                const count = posts.filter((p) => p.category === cat).length + (featured?.category === cat ? 1 : 0);
                const isAldeia = cat.toLowerCase() === "aldeia";
                return (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-[var(--radius)] text-sm font-medium transition-colors cursor-pointer ${
                      filter === cat
                        ? isAldeia
                          ? "bg-purple-pale text-purple-dark font-semibold"
                          : "bg-blue-pale text-blue-dark font-semibold"
                        : "text-text-mid hover:bg-blue-pale hover:text-blue-dark"
                    }`}
                  >
                    {cat}
                    <span className="text-[11px] text-text-light bg-bg px-2 py-0.5 rounded-full">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Aldeia callout */}
          <div
            className="rounded-[var(--radius-lg)] p-6"
            style={{ background: "linear-gradient(148deg, #2a1d4e 0%, #180f38 100%)" }}
          >
            <div className="text-[10px] tracking-[.12em] uppercase font-bold text-purple-light/40 mb-2.5">Community</div>
            <h3 className="text-base font-extrabold text-white leading-snug tracking-tight mb-2">Join the Aldeia parent community</h3>
            <p className="text-[13px] text-white/45 leading-relaxed mb-4">Free workshops, a supportive WhatsApp group, and a fortnightly newsletter.</p>
            <Link
              href="/aldeia"
              className="flex items-center justify-center gap-2 bg-purple text-white px-5 py-2.5 rounded-full text-[13px] font-semibold shadow-[0_6px_18px_rgba(145,129,184,.28)] hover:bg-purple-mid hover:-translate-y-px transition-all"
            >
              Explore Aldeia &rarr;
            </Link>
          </div>

          {/* Book session */}
          <div className="bg-blue-btn rounded-[var(--radius-lg)] p-6 text-center">
            <h3 className="text-[15px] font-extrabold text-white leading-snug tracking-tight mb-2">Need one-to-one support?</h3>
            <p className="text-[13px] text-white/55 leading-relaxed mb-4">Book a free 20-minute call with Becs to talk through your child&apos;s challenges.</p>
            <a
              href="https://calendly.com/medelalearnings"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-blue-btn px-5 py-2.5 rounded-full text-[13px] font-bold hover:bg-blue-xpale hover:-translate-y-px transition-all"
            >
              Book a free call &rarr;
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
