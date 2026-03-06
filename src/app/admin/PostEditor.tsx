"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RichEditor from "./RichEditor";

interface PostEditorProps {
  mode: "new" | "edit";
  slug?: string;
  initial?: {
    title: string;
    date: string;
    excerpt: string;
    category: string;
    author: string;
    readTime: number;
    featuredImage: string;
    featured: boolean;
    content: string;
  };
}

const defaultValues = {
  title: "",
  date: new Date().toISOString().split("T")[0],
  excerpt: "",
  category: "",
  author: "Rebecca Bland",
  readTime: 5,
  featuredImage: "",
  featured: false,
  content: "",
};

export default function PostEditor({ mode, slug, initial }: PostEditorProps) {
  const router = useRouter();
  const [form, setForm] = useState(initial || defaultValues);
  const [postSlug, setPostSlug] = useState(slug || "");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  function update(field: string, value: string | number | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
  }

  function autoSlug(title: string) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  async function handleSave() {
    if (!form.title.trim()) {
      setError("Title is required");
      return;
    }
    setSaving(true);
    setError("");

    const frontmatter = {
      title: form.title,
      date: form.date,
      excerpt: form.excerpt,
      category: form.category,
      author: form.author,
      readTime: Number(form.readTime) || 5,
      featuredImage: form.featuredImage,
      featured: form.featured,
    };

    try {
      if (mode === "new") {
        const finalSlug = postSlug || autoSlug(form.title);
        const res = await fetch("/api/blog", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug: finalSlug, frontmatter, content: form.content }),
        });
        const data = await res.json();
        if (!res.ok) {
          setError(data.error || "Failed to create post");
          setSaving(false);
          return;
        }
        router.push(`/admin/edit/${data.slug}`);
      } else {
        const res = await fetch(`/api/blog/${slug}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ frontmatter, content: form.content }),
        });
        if (!res.ok) {
          const data = await res.json();
          setError(data.error || "Failed to save");
          setSaving(false);
          return;
        }
        setSaved(true);
      }
    } catch {
      setError("Network error");
    }
    setSaving(false);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          {mode === "new" ? "New Post" : "Edit Post"}
        </h1>
        <div className="flex items-center gap-3">
          {saved && (
            <span className="text-sm text-green-600 font-medium">Saved!</span>
          )}
          {mode === "edit" && slug && (
            <a
              href={`/blog/${slug}`}
              target="_blank"
              className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
            >
              Preview &rarr;
            </a>
          )}
          <button
            onClick={() => router.push("/admin")}
            className="text-sm text-gray-500 hover:text-gray-800 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Back
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-[#1e3a6e] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#16305c] transition-colors disabled:opacity-50 cursor-pointer"
          >
            {saving ? "Saving..." : mode === "new" ? "Create Post" : "Save Changes"}
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3 mb-5">
          {error}
        </div>
      )}

      <div className="grid gap-5">
        {/* Title */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Title
          </label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => {
              update("title", e.target.value);
              if (mode === "new" && !postSlug) {
                setPostSlug(autoSlug(e.target.value));
              }
            }}
            placeholder="Post title..."
            className="w-full text-lg font-semibold text-gray-900 border-0 outline-none placeholder:text-gray-300"
          />
        </div>

        {/* Slug (new only) */}
        {mode === "new" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              URL Slug
            </label>
            <div className="flex items-center gap-1 text-sm text-gray-400">
              <span>/blog/</span>
              <input
                type="text"
                value={postSlug}
                onChange={(e) => setPostSlug(e.target.value)}
                placeholder="auto-generated-from-title"
                className="flex-1 text-gray-900 border-0 outline-none placeholder:text-gray-300"
              />
            </div>
          </div>
        )}

        {/* Meta fields */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Details
          </label>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Date</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 outline-none focus:border-[#1e3a6e] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Category</label>
              <input
                type="text"
                value={form.category}
                onChange={(e) => update("category", e.target.value)}
                placeholder="e.g. Homework, Reading, Parents"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 outline-none focus:border-[#1e3a6e] transition-colors placeholder:text-gray-300"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Author</label>
              <input
                type="text"
                value={form.author}
                onChange={(e) => update("author", e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 outline-none focus:border-[#1e3a6e] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Read time (minutes)</label>
              <input
                type="number"
                value={form.readTime}
                onChange={(e) => update("readTime", Number(e.target.value))}
                min={1}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 outline-none focus:border-[#1e3a6e] transition-colors"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-xs text-gray-400 mb-1">Featured image URL</label>
            <input
              type="text"
              value={form.featuredImage}
              onChange={(e) => update("featuredImage", e.target.value)}
              placeholder="https://..."
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 outline-none focus:border-[#1e3a6e] transition-colors placeholder:text-gray-300"
            />
          </div>
          <div className="mt-4 flex items-center gap-2">
            <input
              type="checkbox"
              id="featured"
              checked={form.featured}
              onChange={(e) => update("featured", e.target.checked)}
              className="rounded border-gray-300"
            />
            <label htmlFor="featured" className="text-sm text-gray-700">
              Featured post (shown at top of blog)
            </label>
          </div>
        </div>

        {/* Excerpt */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Excerpt
          </label>
          <textarea
            value={form.excerpt}
            onChange={(e) => update("excerpt", e.target.value)}
            placeholder="A short summary shown in blog listings..."
            rows={2}
            className="w-full border-0 outline-none text-sm text-gray-900 resize-none placeholder:text-gray-300"
          />
        </div>

        {/* Content */}
        <RichEditor
          value={form.content}
          onChange={(md) => update("content", md)}
        />
      </div>
    </div>
  );
}
