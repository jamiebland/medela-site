"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface PostSummary {
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  featured: boolean;
}

export default function AdminPage() {
  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/blog")
      .then((r) => r.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  async function handleDelete(slug: string) {
    if (!confirm(`Delete "${slug}"? This cannot be undone.`)) return;
    setDeleting(slug);
    await fetch(`/api/blog/${slug}`, { method: "DELETE" });
    setPosts((prev) => prev.filter((p) => p.slug !== slug));
    setDeleting(null);
  }

  function formatDate(d: string) {
    if (!d) return "";
    return new Date(d).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
        <button
          onClick={() => router.push("/admin/new")}
          className="bg-[#1e3a6e] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#16305c] transition-colors cursor-pointer"
        >
          + New Post
        </button>
      </div>

      {loading ? (
        <div className="text-gray-500 py-12 text-center">Loading...</div>
      ) : posts.length === 0 ? (
        <div className="text-gray-500 py-12 text-center">
          No posts yet. Create your first one!
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 divide-y divide-gray-100">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="px-5 py-4 flex items-center gap-4"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-semibold text-gray-900 truncate">
                    {post.title}
                  </span>
                  {post.featured && (
                    <span className="text-[10px] font-bold uppercase tracking-wide bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>{formatDate(post.date)}</span>
                  {post.category && (
                    <>
                      <span>&middot;</span>
                      <span>{post.category}</span>
                    </>
                  )}
                  {post.author && (
                    <>
                      <span>&middot;</span>
                      <span>{post.author}</span>
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => router.push(`/admin/edit/${post.slug}`)}
                  className="text-sm font-medium text-[#1e3a6e] hover:text-[#16305c] px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post.slug)}
                  disabled={deleting === post.slug}
                  className="text-sm font-medium text-red-500 hover:text-red-700 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors cursor-pointer disabled:opacity-50"
                >
                  {deleting === post.slug ? "..." : "Delete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
