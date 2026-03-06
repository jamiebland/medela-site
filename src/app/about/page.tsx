import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import CtaBand from "@/components/CtaBand";
import Newsletter from "@/components/Newsletter";
import FaqAccordion from "@/components/FaqAccordion";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";
import { Sprout, Puzzle, Heart, Handshake, BookOpen, Home, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Medela Learning Support",
};

const faqItems = [
  {
    question: "How do I know if my child needs educational therapy?",
    answer:
      "If your child is struggling with reading, writing, maths, or general confidence in school — and traditional tutoring hasn't made a lasting difference — educational therapy may help. We look beyond surface-level symptoms to understand how your child learns, then build a programme around their specific needs. A free introductory call is the best way to find out if we're the right fit.",
  },
  {
    question:
      "What's the difference between a tutor and an educational therapist?",
    answer:
      "A tutor typically focuses on curriculum content — helping a child keep up with schoolwork. An educational therapist addresses the underlying learning processes: how a child takes in, stores, and retrieves information. We use evidence-based strategies to build foundational skills like phonological awareness, working memory, and self-regulation, so progress sticks long-term.",
  },
  {
    question: "How long are sessions, and how often?",
    answer:
      "Sessions are typically 50 minutes, once or twice a week. The frequency depends on your child's needs and schedule. We'll recommend a cadence after the initial assessment, but we're always flexible — life with kids is unpredictable!",
  },
  {
    question: "Do you offer online sessions?",
    answer:
      "Yes. We offer both in-person sessions in Lisbon and online sessions for families across Portugal and beyond. Our online sessions use interactive tools and screen-sharing to keep things engaging — many children actually prefer them.",
  },
  {
    question: "What age range do you work with?",
    answer:
      "We work with children and young people from age 5 through to 18. Our approach is adapted for each developmental stage, from early literacy through to exam preparation and study skills for older students.",
  },
  {
    question: "Will you liaise with my child's school?",
    answer:
      "Absolutely. School liaison is a core part of what we do. With your permission, we'll communicate with your child's teachers to share strategies, align on goals, and ensure consistency between sessions and the classroom. This is especially important for children with formal learning differences.",
  },
  {
    question:
      "Are the digital resources suitable for children with learning differences?",
    answer:
      "Yes — they're designed with learning differences in mind. Our resources use structured, multi-sensory approaches with clear visuals, dyslexia-friendly fonts, and step-by-step scaffolding. They're created by Rebecca based on the same evidence-based methods used in her one-to-one sessions.",
  },
  {
    question: "What is Aldeia, and how does it relate to Medela?",
    answer:
      "Aldeia (Portuguese for 'village') is our community arm, led by Jamille. It brings parents, educators, and specialists together through workshops, meetups, and online events. While Medela focuses on one-to-one educational therapy and resources, Aldeia builds the wider support network — because raising a child with learning differences is easier with a village around you.",
  },
];

export default async function AboutPage() {
  const allPosts = await getAllPosts();
  const blogPosts = allPosts.slice(0, 3);

  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative py-20 md:py-28 px-6 md:px-20 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, var(--color-blue-dark) 0%, #0e2248 100%)",
        }}
      >
        <div className="max-w-[1180px] mx-auto relative z-10">
          <nav className="flex items-center gap-1.5 text-[13px] text-white/60 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/70">About</span>
          </nav>
          <RevealOnScroll>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.12] tracking-tight max-w-[680px] mb-5">
              We help children{" "}
              <span className="text-blue-light">
                rediscover their confidence
              </span>{" "}
              in learning
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <p className="text-base md:text-lg text-white/55 leading-7 max-w-[560px]">
              Medela Learning Support was founded by Rebecca and Jamille to give
              every child access to specialist, compassionate educational
              therapy &mdash; whether in Lisbon, across Portugal, or online.
            </p>
          </RevealOnScroll>
        </div>
        <div className="absolute right-[-80px] top-[-80px] w-[300px] h-[300px] rounded-full border border-white/[.06] pointer-events-none" />
        <div className="absolute left-[-40px] bottom-[-60px] w-[200px] h-[200px] rounded-full border border-white/[.04] pointer-events-none" />
      </section>

      {/* ── Team ── */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-20">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-14">
            <RevealOnScroll>
              <div className="flex items-center justify-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-text-light mb-2.5">
                <span className="block w-[18px] h-0.5 bg-blue-light rounded-sm" />
                The team
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-text leading-[1.15] tracking-tight mb-3">
                Meet Rebecca &amp; Jamille
              </h2>
              <p className="text-[15px] text-text-mid leading-7 max-w-[520px] mx-auto">
                Two complementary skill sets, one shared mission: making
                learning accessible, enjoyable, and effective for every child.
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Rebecca */}
            <RevealOnScroll>
              <div className="bg-bg rounded-[var(--radius-lg)] shadow-[var(--shadow)] overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src="https://assets.ycodeapp.com/assets/app95680/Images/published/rebecca%20top%20teacher!!!-15-7yb7mhu0ug.webp"
                    alt="Rebecca — Educational Therapist & Founder"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-blue-btn text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Founder
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-extrabold text-text mb-0.5">
                    Rebecca
                  </h3>
                  <p className="text-sm font-semibold text-blue-btn mb-3">
                    Educational Therapist &amp; Founder
                  </p>
                  <p className="text-sm text-text-mid leading-7 mb-4">
                    Rebecca is a specialist educational therapist with over a decade
                    of experience supporting children with dyslexia,
                    dyscalculia, ADHD, and language processing difficulties. She
                    designs every programme around the individual child &mdash;
                    combining structured, evidence-based methods with warmth and
                    creativity to rebuild confidence from the ground up.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      "Dyslexia",
                      "Dyscalculia",
                      "ADHD",
                      "Language Processing",
                      "School Liaison",
                      "Curriculum Design",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-pale text-blue-btn text-[11px] font-semibold px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-[12px] text-text-light leading-5">
                    PGCert SpLD (Dyslexia &amp; Literacy) &middot; BSc
                    Psychology &middot; Registered Educational Therapist
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Jamille */}
            <RevealOnScroll delay={1}>
              <div className="bg-bg rounded-[var(--radius-lg)] shadow-[var(--shadow)] overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                <div className="relative h-[300px] overflow-hidden bg-purple-pale flex items-center justify-center">
                  <Leaf className="w-16 h-16 text-purple-dark" />
                  <span className="absolute top-4 left-4 bg-purple-dark text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Co-founder
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-extrabold text-text mb-0.5">
                    Jamille
                  </h3>
                  <p className="text-sm font-semibold text-purple-dark mb-3">
                    Co-founder &amp; Community Lead
                  </p>
                  <p className="text-sm text-text-mid leading-7 mb-4">
                    Jamille brings the community to life. As the driving force
                    behind Aldeia, she connects parents, educators, and
                    specialists through workshops, events, and shared resources.
                    Her background in community development and family support
                    means she understands that learning differences affect the
                    whole family &mdash; not just the child.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      "Community Building",
                      "Parent Workshops",
                      "Aldeia Events",
                      "Family Support",
                      "Partnerships",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="bg-purple-pale text-purple-dark text-[11px] font-semibold px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-[12px] text-text-light leading-5">
                    Community Development &middot; Family Support Specialist
                    &middot; Aldeia Founder
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── Mission & Values ── */}
      <section className="bg-bg py-20 md:py-28 px-6 md:px-20">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-14">
            <RevealOnScroll>
              <div className="flex items-center justify-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-text-light mb-2.5">
                <span className="block w-[18px] h-0.5 bg-blue-light rounded-sm" />
                What we believe
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-text leading-[1.15] tracking-tight mb-3">
                The values that guide everything we do
              </h2>
            </RevealOnScroll>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Sprout className="w-6 h-6 text-blue-btn" />,
                title: "Every child can grow",
                desc: "We believe that with the right support, every child can make meaningful progress — regardless of diagnosis or starting point.",
              },
              {
                icon: <Puzzle className="w-6 h-6 text-blue-btn" />,
                title: "Learning is personal",
                desc: "No two children learn the same way. Our programmes are built from scratch around each child's unique profile, strengths, and challenges.",
              },
              {
                icon: <Heart className="w-6 h-6 text-blue-btn" />,
                title: "Confidence comes first",
                desc: "Academic skills follow confidence, not the other way around. We prioritise emotional safety and self-belief in every session.",
              },
              {
                icon: <Handshake className="w-6 h-6 text-blue-btn" />,
                title: "Parents are partners",
                desc: "You know your child best. We work alongside families — sharing strategies, celebrating wins, and adapting together.",
              },
              {
                icon: <BookOpen className="w-6 h-6 text-blue-btn" />,
                title: "Evidence drives everything",
                desc: "Every approach we use is grounded in research. We stay current with the latest in educational psychology and learning science.",
              },
              {
                icon: <Home className="w-6 h-6 text-blue-btn" />,
                title: "Community matters",
                desc: "Learning differences affect the whole family. Through Aldeia, we build a network of support that extends far beyond the session room.",
              },
            ].map((value, i) => (
              <RevealOnScroll key={value.title} delay={i % 3 === 0 ? 0 : i % 3 === 1 ? 1 : 2}>
                <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
                  <span className="mb-4 block">{value.icon}</span>
                  <h3 className="text-base font-bold text-text mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-text-mid leading-7">
                    {value.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="bg-bg-warm py-20 md:py-28 px-6 md:px-20">
        <div className="max-w-[1180px] mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <RevealOnScroll>
              <div className="flex items-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-text-light mb-2.5">
                <span className="block w-[18px] h-0.5 bg-blue-light rounded-sm" />
                How we work
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-text leading-[1.15] tracking-tight mb-3">
                A methodology built around the child
              </h2>
              <p className="text-[15px] text-text-mid leading-7 mb-10">
                Every child&apos;s journey with Medela follows a clear,
                structured process &mdash; but one that always stays flexible
                enough to adapt as they grow.
              </p>
            </RevealOnScroll>

            <div className="flex flex-col gap-6">
              {[
                {
                  step: "01",
                  title: "Initial conversation",
                  desc: "A free 20-minute call to understand your child's needs, your concerns, and whether Medela is the right fit.",
                },
                {
                  step: "02",
                  title: "Learning profile assessment",
                  desc: "A thorough evaluation of how your child learns — covering literacy, numeracy, memory, attention, and emotional wellbeing.",
                },
                {
                  step: "03",
                  title: "Personalised programme",
                  desc: "A structured, evidence-based plan tailored to your child's specific profile, with clear goals and measurable milestones.",
                },
                {
                  step: "04",
                  title: "Progress & adaptation",
                  desc: "Regular reviews, parent updates, and school liaison to ensure the programme evolves as your child grows in confidence and ability.",
                },
              ].map((item, i) => (
                <RevealOnScroll key={item.step} delay={i < 2 ? i : 2}>
                  <div className="flex gap-4">
                    <span className="text-2xl font-extrabold text-blue-btn/20 leading-none mt-1">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-[15px] font-bold text-text mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-text-mid leading-7">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <RevealOnScroll delay={1}>
              <div className="rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow)] mb-6">
                <img
                  src="https://assets.ycodeapp.com/assets/app95680/Images/published/rebecca%20top%20teacher!!!-15-7yb7mhu0ug.webp"
                  alt="Rebecca working with a child"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] p-6">
                <h4 className="text-sm font-bold text-text mb-3">
                  What&apos;s included in sessions
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {[
                    "Structured, multi-sensory teaching",
                    "Personalised resources & activities",
                    "Progress tracking & parent feedback",
                    "School liaison & teacher communication",
                    "Access to digital learning resources",
                    "Ongoing programme adaptation",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-text-mid leading-6"
                    >
                      <span className="text-blue-btn font-bold mt-0.5">
                        &rarr;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-20">
        <div className="max-w-[1180px] mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-14 items-start">
          <div className="lg:sticky lg:top-28">
            <RevealOnScroll>
              <div className="flex items-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-text-light mb-2.5">
                <span className="block w-[18px] h-0.5 bg-blue-light rounded-sm" />
                Support
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-text leading-[1.15] tracking-tight mb-3">
                Common questions
              </h2>
              <p className="text-[15px] text-text-mid leading-7 mb-6">
                Can&apos;t find what you&apos;re looking for? We&apos;re always
                happy to chat.
              </p>
              <a
                href="https://calendly.com/medelalearnings"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-btn text-white px-6 py-3 rounded-full text-sm font-bold shadow-[var(--shadow-btn)] hover:bg-blue-hover hover:-translate-y-0.5 transition-all"
              >
                Book a free call &rarr;
              </a>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={1}>
            <FaqAccordion items={faqItems} />
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Blog Mini ── */}
      {blogPosts.length > 0 && (
        <section className="bg-bg py-20 md:py-28 px-6 md:px-20">
          <div className="max-w-[1180px] mx-auto">
            <div className="flex items-end justify-between mb-10">
              <RevealOnScroll>
                <div className="flex items-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-text-light mb-2.5">
                  <span className="block w-[18px] h-0.5 bg-blue-light rounded-sm" />
                  From the blog
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold text-text leading-[1.15] tracking-tight">
                  Latest articles
                </h2>
              </RevealOnScroll>
              <Link
                href="/blog"
                className="hidden md:inline-flex items-center gap-1 text-sm font-semibold text-blue-btn hover:text-blue-hover transition-colors"
              >
                All articles &rarr;
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, i) => (
                <RevealOnScroll key={post.slug} delay={i % 3 === 0 ? 0 : i % 3 === 1 ? 1 : 2}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] overflow-hidden hover:-translate-y-1 transition-transform duration-300"
                  >
                    {post.featuredImage && (
                      <div className="h-[180px] overflow-hidden">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-[11px] text-text-light mb-2">
                        {post.category && (
                          <span className="bg-blue-pale text-blue-btn font-semibold px-2 py-0.5 rounded-full">
                            {post.category}
                          </span>
                        )}
                        <span>{post.readTime} min read</span>
                      </div>
                      <h3 className="text-[15px] font-bold text-text leading-snug mb-1.5 group-hover:text-blue-btn transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-text-mid leading-6 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm font-semibold text-blue-btn hover:text-blue-hover transition-colors"
              >
                All articles &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA Band ── */}
      <CtaBand />

      {/* ── Newsletter ── */}
      <Newsletter />
    </main>
  );
}
