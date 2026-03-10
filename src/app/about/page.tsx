import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import CtaBand from "@/components/CtaBand";
import Newsletter from "@/components/Newsletter";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { getAllPosts } from "@/lib/blog";
import { buildFaqJsonLd, buildOrganizationJsonLd } from "@/lib/structured-data";
import { CALENDLY_URL } from "@/lib/config";
import type { Metadata } from "next";
import { Sprout, Puzzle, Heart, Handshake, BookOpen, Home } from "lucide-react";
import TeamMemberModal from "@/components/TeamMemberModal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Rebecca the educational therapist behind Medela Learning Support. Learn about Medela's approach to helping children with learning differences.",
  alternates: {
    canonical: "/about",
  },
};

const faqItems = [
  {
    question: "How do I know if my child needs educational therapy?",
    answer:
      "If your child is struggling with reading, writing, maths, or general confidence in school and traditional tutoring hasn't made a lasting difference, educational therapy may help. We look beyond surface-level symptoms to understand how your child learns, then build a programme around their specific needs. A free introductory call is the best way to find out if we're the right fit.",
  },
  {
    question:
      "What's the difference between a tutor and an educational therapist?",
    answer:
      "A tutor typically focuses on curriculum content, helping a child keep up with schoolwork. An educational therapist addresses the underlying learning processes: how a child takes in, stores, and retrieves information. We use evidence-based strategies to build foundational skills like phonological awareness, working memory, and self-regulation, so progress sticks long-term.",
  },
  {
    question: "How long are sessions, and how often?",
    answer:
      "Sessions are typically one hour and depending on the child's needs anywehre between once per week to once a day. The frequency depends on your child's needs and schedule. We'll recommend a cadence after the initial assessment, but we're always flexible as we know life with kids can be unpredictable!",
  },
  {
    question: "Do you offer online sessions?",
    answer:
      "Yes. We offer both in-person sessions in the Greater Lisbon Area (Lisbon, Cascais, Sintra) and online sessions for families across Portugal and beyond. Our online sessions use interactive tools and screen-sharing to keep things engaging and fun.",
  },
  {
    question: "What age range do you work with?",
    answer:
      "We work with children from age 5 through to 18. Our approach is adapted for each developmental stage, from early literacy through to exam preparation, executive coaching and study skills for older students.",
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
      "Yes, they're designed with learning differences in mind. Our resources use structured, multi-sensory approaches with clear visuals, dyslexia-friendly fonts, and step-by-step scaffolding. They're created by the Medela team based on the same evidence-based methods used in their one-to-one sessions.",
  },
  {
    question: "What is Aldeia, and how does it relate to Medela?",
    answer:
      "Aldeia (Portuguese for 'village') is our parent community. It brings parents, educators, and specialists together through workshops, meetups, and online events. While Medela focuses on one-to-one educational therapy and resources, Aldeia builds the wider support network, because raising a child with learning differences is easier with a village around you.",
  },
];

const faqJsonLd = buildFaqJsonLd(faqItems);
const orgJsonLd = buildOrganizationJsonLd();

export default async function AboutPage() {
  const allPosts = await getAllPosts();
  const blogPosts = allPosts.slice(0, 3);

  return (
    <main>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={orgJsonLd} />
      {/* ── Hero ── */}
      <section className="relative grid md:grid-cols-2 min-h-[480px] overflow-hidden bg-blue">
        {/* Left */}
        <div className="flex flex-col justify-center px-6 md:px-16 lg:px-20 py-16 md:py-24 relative z-10">
          <nav className="flex items-center gap-1.5 text-[13px] text-white mb-8">
            <Link href="/" className="hover:text-white/80 transition-colors underline-offset-2 hover:underline">Home</Link>
            <span>/</span>
            <span className="text-white font-semibold">About</span>
          </nav>
          <RevealOnScroll>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.12] tracking-tight max-w-[560px] mb-5">
              We help children{" "}
              <span className="text-blue-dark">rediscover their confidence</span>{" "}
              in learning
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <p className="text-base md:text-lg text-white leading-7 max-w-[460px]">
              Medela Learning Support was founded to give
              every child access to specialized, compassionate educational
              therapy. 
              We have a combined 15+ years worth of experience with children with dyslexia, dyscalculia, ADHD, and Autism. 
              We know that with the right support, every child can make meaningful progress.
              Whether in Lisbon, Portugal or online. 
            </p>
          </RevealOnScroll>
        </div>

        {/* Right — image */}
        <div className="relative hidden md:block">
          <Image
            src="/images/medela/image-sit.jpg"
            alt="Educational therapy session with a child in Lisbon, Portugal"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Smooth gradient: starts solid blue, fades gradually across the image */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, #80a8eb 0%, rgba(128,168,235,0.75) 25%, rgba(128,168,235,0.3) 55%, rgba(128,168,235,0) 80%)" }}
          />
        </div>
      </section>

      {/* ── Team ── */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-20">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-14">
            <RevealOnScroll>
              <div className="flex items-center justify-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-text-mid mb-2.5">
                <span className="block w-[18px] h-0.5 bg-blue-light rounded-sm" />
                The team
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-text leading-[1.15] tracking-tight mb-3">
                Meet the growing team!
              </h2>
              <p className="text-[15px] text-text-mid leading-7 max-w-[520px] mx-auto">
                Complementary skill sets, one shared mission: making
                learning accessible, enjoyable, and effective for every child.
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Rebecca */}
            <RevealOnScroll className="h-full">
              <TeamMemberModal
                name="Rebecca Bland"
                title="Educational Therapist & Founder"
                image="/images/team/image-rebecca-profile.jpg"
                modalImage="/images/team/medela-rebecca-profile-2.webp"
                mobileModalImage="/images/team/medela-rebecca-profile-closeup.jpg"
                email="rebecca@medelalearning.com"
                accentClass="text-blue-btn"
                bio={
                  <>
                    <p>I began my studies with a focus on psychology, but quickly realised that I wanted to be directly involved in the solutions and journeys of children&apos;s learning, rather than in assessments or counselling. This led me to studying teaching and, eventually, to specialising as an education therapist.</p>
                    <p>My early work involved partnering with universities and parents to support students with reading and writing difficulties. This experience highlighted the importance of individualised support and creative teaching methods in improving children&apos;s engagement and understanding. Here, the dream for Medela Learning Support began.</p>
                    <p>My journey took me from working at an independent school in Johannesburg, South Africa, where I provided one-on-one academic support to remedial learners, to teaching at an international school in Portugal. Now I am fulfilling my dream, working as a private education specialist.</p>
                    <p>I am also currently working toward a Master&apos;s degree with a specific focus on dyslexia. This continues to allow me to stay at the forefront of research and best practice, ensuring that the support I offer remains both deeply informed and highly effective.</p>
                  </>
                }
              >
              <div className="bg-bg rounded-[var(--radius-lg)] shadow-[var(--shadow)] overflow-hidden hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col">
                <div className="relative h-[300px] overflow-hidden shrink-0">
                  <Image
                    src="/images/team/image-rebecca-profile.jpg"
                    alt="Rebecca — Educational Therapist & Founder"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 590px"
                    className="object-cover"
                    style={{ objectPosition: "50% 50%" }}
                  />
                  <span className="absolute top-4 left-4 bg-blue-btn text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Founder
                  </span>
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-extrabold text-text mb-0.5">
                    Rebecca
                  </h3>
                  <p className="text-sm font-semibold text-blue-btn mb-3">
                    Educational Therapist
                  </p>
                  <p className="text-sm text-text-mid leading-7 mb-4">
                    Rebecca is a specialized remedial therapist with over 7+ years
                    of experience supporting children with learning difficulties and disabilities. 
                    She designs every programme around the individual child. Alongside her one-to-one work, Rebecca is passionate about sharing her knowledge and building a community of support around families, through Aldeia. 
                    Combining structured, evidence-based methods with warmth and
                    creativity to rebuild confidence and love for learning.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      "Dyslexia",
                      "Dyscalculia",
                      "ADHD",
                      "Language Processing",
                      "Case Management",
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
                  <p className="text-[12px] text-text-mid leading-5">
                    B.Ed (FP) &middot; AvDip Remedial Therapy &middot; Dyslexia Specialist
                  </p>
                  <a
                    href="mailto:rebecca@medelalearning.com"
                    className="mt-4 self-start inline-flex items-center gap-2 bg-blue-pale text-blue-btn text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-blue hover:text-white transition-colors"
                  >
                    rebecca@medelalearning.com
                  </a>
                </div>
              </div>
              </TeamMemberModal>
            </RevealOnScroll>

            {/* Jamille */}
            <RevealOnScroll delay={1} className="h-full">
              <TeamMemberModal
                name="Jamille"
                title="Resource Creator & Co-founder of Aldeia"
                image="/images/team/jamille-avatar.jpg"
                modalImage="/images/team/jamille-avatar-2.jpg"
                mobileModalImage="/images/team/jamille-avatar-closeup.jpg"
                email="jamille@medelalearning.com"
                accentClass="text-purple-dark"
                bio={
                  <>
                    <p>I was born in Brazil and raised with a deep appreciation for community and connection, my path to Medela was shaped by years of firsthand experience within international schools across Portugal.</p>
                    <p>As an education specialist embedded in Lisbon&apos;s international school community, I witnessed firsthand the isolation and confusion experienced by families when a child begins to struggle. Without local networks, language fluency, or knowledge of the international education system, many parents were left navigating learning difficulties entirely alone.</p>
                    <p>This gap, between what families needed and what was available has become my driving force. I co-founded Aldeia with a clear mission: to build a village of support around every family. Through workshops, community events, a growing WhatsApp network, and curated resources, Aldeia creates the connections that make a real difference.</p>
                    <p>With the goal to grow Aldeia into a thriving network of parents, educators, and specialists, I believe that no family should face learning challenges alone.</p>
                  </>
                }
              >
              <div className="bg-bg rounded-[var(--radius-lg)] shadow-[var(--shadow)] overflow-hidden hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col">
                <div className="relative h-[300px] overflow-hidden shrink-0">
                  <Image
                    src="/images/team/jamille-avatar-closeup.jpg"
                    alt="Jamille — Co-founder & Community Lead"
                    fill
                    className="object-cover md:hidden"
                  />
                  <Image
                    src="/images/team/jamille-avatar.jpg"
                    alt="Jamille — Co-founder & Community Lead"
                    fill
                    className="object-cover hidden md:block"
                  />
                  <span className="absolute top-4 left-4 bg-purple-dark text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Co-founder of Aldeia
                  </span>
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-extrabold text-text mb-0.5">
                    Jamille
                  </h3>
                  <p className="text-sm font-semibold text-purple-dark mb-3">
                    Psychopedagogy Specialist
                  </p>
                  <p className="text-sm text-text-mid leading-7 mb-4">
                    Jamille's background as an educational specialist alongside her skills in community development and family support
                    mean that she understands that learning differences affect the
                    whole family, not just the child. She helps to connect parents, educators, and
                    specialists through workshops, events, and shared resources. Additionally she is a contributer to the creation of Medela's digital resources, ensuring they meet the real needs of families.             
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      "Community Building",
                      "Parent Workshops",
                      "Parental Support",
                      "Dyscalculia",
                      "Aldeia Events",
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
                  <p className="text-[12px] text-text-mid leading-5">
                    Bachelor of Education &middot; Psychopedagogy Specialist
                  </p>
                  <a
                    href="mailto:jamille@medelalearning.com"
                    className="mt-4 self-start inline-flex items-center gap-2 bg-purple-pale text-purple-dark text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-purple hover:text-white transition-colors"
                  >
                    jamille@medelalearning.com
                  </a>
                </div>
              </div>
              </TeamMemberModal>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── Mission & Values ── */}
      <section className="bg-bg py-20 md:py-28 px-6 md:px-20">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-14">
            <RevealOnScroll>
              <div className="flex items-center justify-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-text-mid mb-2.5">
                <span className="block w-[18px] h-0.5 bg-blue-light rounded-sm" />
                What we believe
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-text leading-[1.15] tracking-tight mb-3">
                The values that guide everything we do
              </h2>
            </RevealOnScroll>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {[
              {
                icon: <Sprout className="w-6 h-6 text-blue-btn" />,
                title: "Every child can grow",
                desc: "We believe that with the right support, every child can make meaningful progress regardless of diagnosis or starting point.",
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
                desc: "You know your child best. We work alongside families, sharing strategies, celebrating wins, and adapting together.",
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
              <RevealOnScroll key={value.title} delay={i % 3 === 0 ? 0 : i % 3 === 1 ? 1 : 2} className="h-full">
                <div className="flex flex-col h-full bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
                  <span className="mb-4 block">{value.icon}</span>
                  <h3 className="text-base font-bold text-text mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-text-mid leading-7 flex-1">
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
              <div className="flex items-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-text-mid mb-2.5">
                <span className="block w-[18px] h-0.5 bg-blue-light rounded-sm" />
                How we work
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-text leading-[1.15] tracking-tight mb-3">
                A methodology built around the child
              </h2>
              <p className="text-[15px] text-text-mid leading-7 mb-10">
                Every child&apos;s journey with Medela follows a clear,
                structured process but one that always stays flexible
                enough to adapt as they grow.
              </p>
            </RevealOnScroll>

            {/* Accent pull-quote */}
            <RevealOnScroll>
              <div className="relative rounded-2xl overflow-hidden mb-8 px-7 py-6" style={{ background: "linear-gradient(135deg, var(--color-purple) 0%, #3d72c4 100%)" }}>
                <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-white/[.06] pointer-events-none" />
                <div className="absolute -left-4 -bottom-8 w-36 h-36 rounded-full bg-white/[.04] pointer-events-none" />
                <p className="relative text-[22px] md:text-[26px] font-extrabold text-white leading-[1.25] tracking-tight">
                  No two children learn<br />
                  <span className="text-purple-light">the same way.</span>
                </p>
                <p className="relative text-[13px] text-white/60 mt-2 leading-6 max-w-[340px]">
                  That&apos;s why every Medela programme is built from scratch — not adapted from a template.
                </p>
              </div>
            </RevealOnScroll>

            <div className="flex flex-col gap-6">
              {[
                {
                  step: "01",
                  title: "Initial conversation",
                  desc: "A free 15-minute call to understand your child's needs, your concerns, and whether Medela is the right fit.",
                },
                {
                  step: "02",
                  title: "Learning profile assessment",
                  desc: "A thorough evaluation of how your child learns. We cover literacy, numeracy, memory, attention, and emotional wellbeing.",
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
              <div className="rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow)] mb-6 relative h-[300px]">
                <Image
                  src="/images/medela/medela-teaching.webp"
                  alt="Rebecca Bland, educational therapist, working one-to-one with a child in Lisbon"
                  fill
                  className="object-cover"
                  style={{ transform: "scale(1.35) translateX(10%)", objectPosition: "center" }}
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
              <div className="flex items-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-text-mid mb-2.5">
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
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue text-white px-6 py-3 rounded-full text-sm font-bold shadow-[var(--shadow-btn)] hover:bg-blue-mid hover:-translate-y-0.5 transition-all"
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
                <div className="flex items-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-text-mid mb-2.5">
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

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {blogPosts.map((post, i) => (
                <RevealOnScroll key={post.slug} delay={i % 3 === 0 ? 0 : i % 3 === 1 ? 1 : 2} className="h-full">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col h-full bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] overflow-hidden hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="relative h-[180px] shrink-0 bg-blue-pale flex items-center justify-center">
                      {post.featuredImage ? (
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          unoptimized
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <BookOpen className="w-8 h-8 text-blue-btn" />
                      )}
                      {post.category && (
                        <span className="absolute top-3 left-3 bg-white/90 text-[11px] font-bold text-text-mid uppercase tracking-[.08em] px-2.5 py-1 rounded-full">
                          {post.category}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col flex-1 p-5">
                      <p className="text-[12px] text-text-mid mb-2">{post.date}</p>
                      <h3 className="text-[15px] font-bold text-text leading-snug mb-2 group-hover:text-blue-btn transition-colors">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-[13px] text-text-mid leading-6 line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>
                      )}
                      <span className="mt-auto text-[13px] font-bold text-blue-btn">
                        Read article &rarr;
                      </span>
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
