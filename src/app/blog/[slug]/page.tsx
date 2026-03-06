import { getPostBySlug, getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { notFound } from "next/navigation";
import Newsletter from "@/components/Newsletter";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — Medela Learning`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = await getAllPosts();
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Hero */}
      <div
        className="relative overflow-hidden px-6 md:px-20 pt-16 md:pt-20 pb-20 md:pb-24"
        style={{ background: "linear-gradient(140deg, #1e3a6e 0%, #0e2248 100%)" }}
      >
        <div className="absolute -right-20 -top-20 w-[440px] h-[440px] rounded-full border border-blue/[.09] pointer-events-none" />
        <div className="max-w-[780px] mx-auto relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-xs text-white/[.38] mb-5 font-medium">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <Link href="/blog" className="hover:text-white/70 transition-colors">Blog</Link>
            <span className="text-white/20">/</span>
            <span className="text-white/50">{post.category}</span>
          </div>

          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-blue-btn text-white mb-4">
            {post.category}
          </span>

          <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-[1.15] tracking-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-3.5 flex-wrap text-sm text-white/50">
            <span>{formattedDate}</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>By {post.author}</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </div>

      {/* Featured image */}
      {post.featuredImage && (
        <div className="max-w-[780px] mx-auto px-6 md:px-0 -mt-8 relative z-10 mb-2">
          <div className="rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow)]">
            <img src={post.featuredImage} alt={post.title} className="w-full h-auto block" />
          </div>
        </div>
      )}

      {/* Article body */}
      <article className="max-w-[780px] mx-auto px-6 md:px-0 py-12 md:py-16">
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.content || "" }} />

        {/* Share / back */}
        <div className="mt-12 pt-8 border-t border-bg-warm">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-btn hover:gap-3 transition-all"
          >
            &larr; Back to all articles
          </Link>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-bg-warm px-6 md:px-20 py-18">
          <div className="max-w-[1180px] mx-auto">
            <div className="flex items-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-blue-btn mb-2.5">
              <span className="block w-[18px] h-0.5 bg-blue rounded-sm" />
              Keep reading
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-text leading-[1.13] tracking-tight mb-10">
              More from the blog
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="bg-white rounded-[var(--radius)] overflow-hidden shadow-[var(--shadow-sm)] flex flex-col transition-all hover:-translate-y-1 hover:shadow-[var(--shadow)]"
                >
                  <div className="h-[160px] overflow-hidden relative bg-blue-pale flex items-center justify-center text-4xl">
                    {r.featuredImage ? (
                      <img src={r.featuredImage} alt={r.title} className="absolute inset-0 w-full h-full object-cover" />
                    ) : null}
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase text-white bg-blue-btn">
                      {r.category}
                    </span>
                  </div>
                  <div className="p-4 pb-5 flex-1 flex flex-col">
                    <div className="text-[11px] text-text-light mb-1.5">
                      {new Date(r.date).toLocaleDateString("en-US", { year: "numeric", month: "long" })}
                    </div>
                    <div className="text-sm font-bold text-text leading-snug mb-2 flex-1">{r.title}</div>
                    <span className="text-[13px] font-semibold text-blue-btn flex items-center gap-1">
                      Read article &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Newsletter />
    </>
  );
}
