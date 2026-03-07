import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import BlogGrid from "./BlogGrid";
import Newsletter from "@/components/Newsletter";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog",
  description: "Honest writing about learning differences, educational therapy, and raising confident children.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const featured = posts.find((p) => p.featured) || posts[0];
  const rest = posts.filter((p) => p.slug !== featured?.slug);
  const categories = [...new Set(posts.map((p) => p.category))];

  return (
    <>
      {/* Hero */}
      <div
        className="relative overflow-hidden px-6 md:px-20 py-18 md:py-20"
        style={{ background: "linear-gradient(140deg, #1e3a6e 0%, #0e2248 100%)" }}
      >
        <div className="absolute -right-20 -top-20 w-[440px] h-[440px] rounded-full border border-blue/[.09] pointer-events-none" />
        <div className="max-w-[1180px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs text-white/[.38] mb-5 font-medium">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            Blog
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight max-w-[640px] mb-3.5">
            Insights &amp; ideas for <span className="text-blue-light">parents &amp; educators</span>
          </h1>
          <p className="text-base text-white/55 leading-7 max-w-[520px]">
            Honest writing about learning differences, educational therapy, and raising confident children &ndash; from Rebecca, Jamille, and the Aldeia community.
          </p>
        </div>
      </div>

      <BlogGrid featured={featured} posts={rest} categories={categories} />

      <Newsletter />
    </>
  );
}
