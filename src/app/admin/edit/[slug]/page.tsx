"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PostEditor from "../../PostEditor";

export default function EditPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [data, setData] = useState<{
    frontmatter: Record<string, unknown>;
    content: string;
  } | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/api/blog/${slug}`)
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then(setData)
      .catch(() => setError(true));
  }, [slug]);

  if (error) {
    return (
      <div className="text-center py-12 text-gray-500">
        Post not found.{" "}
        <a href="/admin" className="text-[#1e3a6e] font-medium">
          Go back
        </a>
      </div>
    );
  }

  if (!data) {
    return <div className="text-center py-12 text-gray-400">Loading...</div>;
  }

  const fm = data.frontmatter;
  return (
    <PostEditor
      mode="edit"
      slug={slug}
      initial={{
        title: (fm.title as string) || "",
        date: (fm.date as string) || "",
        excerpt: (fm.excerpt as string) || "",
        category: (fm.category as string) || "",
        author: (fm.author as string) || "Rebecca Bland",
        readTime: (fm.readTime as number) || 5,
        featuredImage: (fm.featuredImage as string) || "",
        featured: (fm.featured as boolean) || false,
        content: data.content || "",
      }}
    />
  );
}
