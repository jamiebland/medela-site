import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import RevealOnScroll from "@/components/RevealOnScroll";
import CtaBand from "@/components/CtaBand";
import Newsletter from "@/components/Newsletter";
import { Puzzle, Smartphone, GraduationCap, MessageCircle, Mail, BookOpen, Star } from "lucide-react";
import { CALENDLY_URL, ASSET_BASE, SITE_URL, SITE_EMAIL } from "@/lib/config";
import JsonLd from "@/components/JsonLd";

const schools = [
  { name: "TASIS", logo: "tasis_logo-removebg-preview-irp56pe9jh.webp" },
  { name: "OIS", logo: "ois_logo-removebg-preview-4gqlr958da.webp" },
  { name: "EGI", logo: "egi_logo-removebg-preview-w5rjpbv75h.webp" },
  { name: "BSL", logo: "bsl_logo-removebg-preview-pyvlry9s56.webp" },
  { name: "CAISL", logo: "caisal_lisbon-removebg-preview-n7ofhimzsb.webp" },
  { name: "ULIS", logo: "ulis_logo-removebg-preview-gnmlggijfm.webp" },
  { name: "St. Julian's", logo: "st-julians-dl-removebg-preview-hx1dw1ydnz.webp" },
  { name: "Red Bridge", logo: "red_bridge_logo-removebg-preview-wc1s7eifdo.webp" },
  { name: "Aprendizes", logo: "aprendizes-removebg-preview-tvenjw3jed.webp" },
  { name: "St Katherine's", logo: "st_katherine_s_logo-removebg-preview-jojfuoplvc.webp" },
  { name: "Kingsmead", logo: "kings_mead_logo-removebg-preview-smhott9fkb.webp" },
  { name: "Crawford", logo: "crawford_sandton_logo-removebg-preview-fc8lzvlm0v.webp" },
  { name: "St Stithians", logo: "st_stithians_logo-removebg-preview-jxjkvgme7x.webp" },
  { name: "BIS", logo: "bavarian_international_school-removebg-preview-moir7kraqt.webp" },
];

const testimonials = [
  {
    quote:
      "Within three months, my daughter went from dreading reading to choosing books at bedtime. Rebecca gave her the confidence we couldn't unlock on our own.",
    author: "Ana R.",
    role: "Parent of Grade 2 student, Lisbon",
  },
  {
    quote:
      "The digital programmes have been a lifesaver for us. My son actually looks forward to his learning sessions now, and his teacher has noticed the difference in class.",
    author: "Sarah M.",
    role: "Parent of Grade 4 student, South Africa",
  },
  {
    quote:
      "We tried tutoring before, but Medela's approach is completely different. They understand how my child thinks and meet him exactly where he is. The progress has been remarkable.",
    author: "David K.",
    role: "Parent of Grade 3 student, Lisbon",
  },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Medela Learning Support",
  url: SITE_URL,
  email: SITE_EMAIL,
  description:
    "Specialist one-to-one educational therapy for children with learning differences in Lisbon and across Portugal.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lisbon",
    addressCountry: "PT",
  },
  areaServed: [
    { "@type": "Country", name: "Portugal" },
    { "@type": "Country", name: "South Africa" },
  ],
};

export default async function HomePage() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <>
      <JsonLd data={localBusinessJsonLd} />
      {/* ───── 1. Hero ───── */}
      <section className="relative grid md:grid-cols-2 min-h-[600px] overflow-hidden bg-bg">
        {/* Left */}
        <div className="flex flex-col justify-center px-6 md:px-16 lg:px-20 py-16 md:py-24 relative z-10">
          <span className="inline-flex items-center self-start gap-1.5 text-[11px] tracking-[.1em] uppercase font-bold text-text-mid bg-white/70 border border-black/[.06] rounded-full px-4 py-1.5 mb-5">
            Educational Therapy &middot; Lisbon, Portugal
          </span>

          <h1 className="text-[2.5rem] md:text-[3.2rem] font-extrabold leading-[1.1] tracking-tight text-text mb-4">
            Every child deserves to<br />
            <span className="text-blue-btn">love learning</span>
          </h1>

          <p className="text-base md:text-[17px] text-text-mid leading-7 mb-8 max-w-[480px]">
            Specialist educational therapy and digital learning programmes that
            help children build confidence, close gaps, and fall in love with
            learning &mdash; wherever they are.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-btn text-white px-6 py-3 rounded-full text-sm font-bold shadow-[var(--shadow-btn)] hover:bg-blue-hover motion-safe:hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-btn focus-visible:ring-offset-2"
            >
              Book a free call &rarr;
            </a>
            <Link
              href="/learning-resources"
              className="inline-flex items-center gap-2 bg-transparent text-text-mid px-6 py-3 rounded-full text-sm font-medium border-[1.5px] border-black/[.12] hover:border-black/[.28] hover:text-text transition-all"
            >
              Browse resources
            </Link>
          </div>

          <div className="flex items-center gap-3 text-[13px] text-text-light">
            <div className="flex gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-4 h-4 fill-amber text-amber" />
              ))}
            </div>
            <span>
              Trusted by families across Portugal, South Africa &amp; Europe
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="relative hidden md:block">
          <Image
            src="https://assets.ycodeapp.com/assets/app95680/Images/published/rebecca%20top%20teacher!!!-18-dd0kutji5t.webp"
            alt="Rebecca, educational therapist, working with a child"
            fill
            priority
            className="object-cover object-right"
          />
          {/* gradient overlay fading from bg to transparent */}
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/40 to-transparent" />

          {/* Floating stat cards */}
          <div
            className="absolute bottom-16 left-8 bg-white rounded-[var(--radius)] px-5 py-4 animate-float"
            style={{ boxShadow: "var(--shadow)" }}
          >
            <p className="text-[28px] font-extrabold text-blue-btn leading-none">
              14+
            </p>
            <p className="text-[12px] text-text-light mt-1">Partner schools</p>
          </div>
          <div
            className="absolute top-20 right-8 bg-white rounded-[var(--radius)] px-5 py-4 animate-float-delayed"
            style={{ boxShadow: "var(--shadow)" }}
          >
            <p className="text-[28px] font-extrabold text-purple leading-none">
              500+
            </p>
            <p className="text-[12px] text-text-light mt-1">
              Families supported
            </p>
          </div>
        </div>
      </section>

      {/* ───── 2. Schools Strip ───── */}
      <section className="bg-blue-dark py-8 overflow-hidden">
        <p className="text-center text-[11px] tracking-[.12em] uppercase font-bold text-white/60 mb-5 px-6">
          Trusted by families from 14 partner schools across Portugal, South
          Africa &amp; Europe
        </p>
        <div className="relative overflow-hidden">
          <div className="animate-scroll-track flex w-max gap-6 px-3 items-start will-change-transform">
            {[...schools, ...schools].map((school, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-start gap-2 px-3 select-none shrink-0 group"
              >
                {/* Raw img: animated marquee with CSS filters + dynamic sizing — next/image not suited */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${ASSET_BASE}/${school.logo}`}
                  alt={school.name}
                  loading="lazy"
                  className="h-14 w-auto object-contain brightness-0 invert opacity-60 group-hover:opacity-90 transition-opacity"
                />
                <span className="text-[10px] font-medium text-white/40 group-hover:text-white/70 transition-colors">
                  {school.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 3. Services ───── */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-text-light mb-2.5">
              <span className="block w-[18px] h-0.5 bg-blue-btn/40 rounded-sm" />
              What we offer
            </div>
            <h2 className="text-2xl md:text-[36px] font-extrabold text-text leading-[1.15] tracking-tight">
              Two ways to support your child&apos;s learning
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-7">
            {/* Card 1 — Educational Therapy */}
            <RevealOnScroll>
              <div
                className="rounded-[var(--radius-lg)] overflow-hidden border border-black/[.05]"
                style={{ boxShadow: "var(--shadow)" }}
              >
                <div className="bg-gradient-to-br from-blue-btn to-blue-dark px-7 py-8 text-white">
                  <div className="w-11 h-11 rounded-xl bg-white/[.18] flex items-center justify-center text-xl mb-4">
                    <Puzzle className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-extrabold mb-2">
                    One-to-One Educational Therapy
                  </h3>
                  <p className="text-[14px] text-white/65 leading-6">
                    Personalised sessions tailored to your child&apos;s unique
                    learning profile &mdash; building skills, confidence, and
                    independence.
                  </p>
                </div>
                <div className="bg-white px-7 py-7">
                  <ul className="space-y-3 mb-6">
                    {[
                      "Comprehensive learning assessment",
                      "Individualised therapy plan",
                      "Weekly 1:1 sessions (online or in-person)",
                      "Regular progress reports for parents",
                      "School liaison & collaboration",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[14px] text-text-mid leading-6"
                      >
                        <span className="text-blue-btn mt-0.5 font-bold">
                          {"\u2713"}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-[14px] font-bold text-blue-btn hover:text-blue-hover transition-colors"
                  >
                    Learn more &rarr;
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            {/* Card 2 — Digital Programmes */}
            <RevealOnScroll delay={1}>
              <div
                className="rounded-[var(--radius-lg)] overflow-hidden border border-black/[.05]"
                style={{ boxShadow: "var(--shadow)" }}
              >
                <div className="bg-gradient-to-br from-purple to-purple-dark px-7 py-8 text-white">
                  <div className="w-11 h-11 rounded-xl bg-white/[.18] flex items-center justify-center text-xl mb-4">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-extrabold mb-2">
                    Digital Learning Programmes
                  </h3>
                  <p className="text-[14px] text-white/65 leading-6">
                    Structured, therapist-designed digital resources your child
                    can work through at home &mdash; at their own pace.
                  </p>
                </div>
                <div className="bg-white px-7 py-7">
                  <ul className="space-y-3 mb-6">
                    {[
                      "Seasonal themed learning packs",
                      "Printable worksheets & activities",
                      "Video-guided lessons",
                      "Parent guidance included",
                      "New packs released regularly",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[14px] text-text-mid leading-6"
                      >
                        <span className="text-purple mt-0.5 font-bold">
                          {"\u2713"}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/learning-resources"
                    className="inline-flex items-center gap-1.5 text-[14px] font-bold text-purple hover:text-purple-dark transition-colors"
                  >
                    Browse resources &rarr;
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ───── 4. Approach ───── */}
      <section className="bg-bg-warm py-20 px-6 md:px-20">
        <div className="max-w-[1180px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left — photo */}
          <RevealOnScroll>
            <div className="relative">
              <div
                className="rounded-[var(--radius-lg)] overflow-hidden"
                style={{ boxShadow: "var(--shadow)" }}
              >
                <Image
                  src="https://assets.ycodeapp.com/assets/app95680/Images/published/rebecca%20top%20teacher!!!-18-dd0kutji5t.webp"
                  alt="Educational therapy session"
                  width={800}
                  height={420}
                  className="w-full h-[420px] object-cover object-right"
                />
              </div>
              <div
                className="absolute -bottom-5 -right-5 bg-white rounded-[var(--radius)] px-5 py-3.5 animate-float"
                style={{ boxShadow: "var(--shadow)" }}
              >
                <p className="text-[13px] font-bold text-blue-btn">
                  10+ years experience
                </p>
                <p className="text-[11px] text-text-light">
                  Qualified educational therapist
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right — text */}
          <RevealOnScroll delay={1}>
            <div>
              <div className="flex items-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-text-light mb-2.5">
                <span className="block w-[18px] h-0.5 bg-blue-btn/40 rounded-sm" />
                Our approach
              </div>
              <h2 className="text-2xl md:text-[36px] font-extrabold text-text leading-[1.15] tracking-tight mb-6">
                Built for the child, not the curriculum
              </h2>

              <div className="space-y-7">
                {[
                  {
                    num: "01",
                    title: "Understand the whole child",
                    desc: "We start with a thorough assessment to understand your child\u2019s strengths, challenges, and how they learn best.",
                  },
                  {
                    num: "02",
                    title: "Design a personalised plan",
                    desc: "Every therapy plan is built around your child \u2014 not a one-size-fits-all programme. Goals are meaningful and achievable.",
                  },
                  {
                    num: "03",
                    title: "Build confidence & independence",
                    desc: "Through targeted, evidence-based strategies, we help your child develop the skills and self-belief to thrive.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <span className="text-[28px] font-extrabold text-blue-btn/20 leading-none mt-0.5">
                      {step.num}
                    </span>
                    <div>
                      <h3 className="text-[15px] font-bold text-text mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[14px] text-text-mid leading-6">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ───── 5. Blog Preview ───── */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-[1180px] mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-text-light mb-2.5">
                <span className="block w-[18px] h-0.5 bg-blue-btn/40 rounded-sm" />
                From the blog
              </div>
              <h2 className="text-2xl md:text-[36px] font-extrabold text-text leading-[1.15] tracking-tight">
                Learning insights for parents
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center gap-1.5 text-[14px] font-bold text-blue-btn hover:text-blue-hover transition-colors"
            >
              All articles &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {posts.map((post, i) => (
              <RevealOnScroll key={post.slug} delay={i as 0 | 1 | 2 | 3}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-[var(--radius-lg)] overflow-hidden border border-black/[.05] bg-white hover:-translate-y-1 transition-all"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  <div className="relative h-44 bg-blue-pale flex items-center justify-center text-4xl">
                    {post.featuredImage ? (
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        unoptimized
                        className="object-cover"
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
                  <div className="px-5 py-5">
                    <p className="text-[12px] text-text-light mb-2">
                      {post.date}
                    </p>
                    <h3 className="text-[15px] font-bold text-text leading-snug mb-3 group-hover:text-blue-btn transition-colors">
                      {post.title}
                    </h3>
                    <span className="text-[13px] font-bold text-blue-btn">
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
              className="inline-flex items-center gap-1.5 text-[14px] font-bold text-blue-btn"
            >
              All articles &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ───── 6. Aldeia Teaser ───── */}
      <section
        className="py-20 px-6 md:px-20 text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #4a3d7a 0%, #2a1d4e 100%)",
        }}
      >
        <div className="max-w-[1180px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-white/60 mb-2.5">
              <span className="block w-[18px] h-0.5 bg-purple-light/50 rounded-sm" />
              Community
            </div>
            <h2 className="text-2xl md:text-[36px] font-extrabold leading-[1.15] tracking-tight mb-2">
              The Aldeia Community
            </h2>
            <p className="text-[17px] text-white/55 leading-7 mb-8 max-w-[440px]">
              A village of support for every family &mdash; because raising a
              learner is easier when you&apos;re not doing it alone.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Monthly workshops",
                "WhatsApp community",
                "Fortnightly newsletter",
                "Resource library",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-[14px] text-white/70"
                >
                  <span className="text-purple-light font-bold">
                    {"\u2713"}
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/aldeia"
              className="inline-flex items-center gap-2 bg-purple text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-purple-mid hover:-translate-y-0.5 transition-all"
            >
              Explore Aldeia &rarr;
            </Link>
          </div>

          {/* Right — 2x2 cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: <GraduationCap className="w-5 h-5" />,
                title: "Workshops",
                desc: "Monthly live sessions on topics that matter to your family",
              },
              {
                icon: <MessageCircle className="w-5 h-5" />,
                title: "WhatsApp Group",
                desc: "Connect with other parents on the same journey",
              },
              {
                icon: <Mail className="w-5 h-5" />,
                title: "Newsletter",
                desc: "Practical tips and updates delivered fortnightly",
              },
              {
                icon: <BookOpen className="w-5 h-5" />,
                title: "Resource Library",
                desc: "Curated tools and guides you can use at home",
              },
            ].map((card) => (
              <RevealOnScroll key={card.title}>
                <div className="bg-white/[.08] border border-white/[.10] rounded-[var(--radius)] p-5">
                  <span className="text-2xl mb-3 block">{card.icon}</span>
                  <h3 className="text-[14px] font-bold text-white mb-1">
                    {card.title}
                  </h3>
                  <p className="text-[12px] text-white/50 leading-5">
                    {card.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 7. Testimonials ───── */}
      <section className="bg-bg-warm py-20 px-6 md:px-20">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-text-light mb-2.5">
              <span className="block w-[18px] h-0.5 bg-amber/50 rounded-sm" />
              Testimonials
            </div>
            <h2 className="text-2xl md:text-[36px] font-extrabold text-text leading-[1.15] tracking-tight">
              What parents say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.author} delay={i as 0 | 1 | 2 | 3}>
                <div
                  className="bg-white rounded-[var(--radius-lg)] p-7 border border-black/[.05]"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  <div className="flex gap-0.5 text-amber mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg
                        key={j}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[14px] text-text-mid leading-6 mb-5 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-[14px] font-bold text-text">
                      {t.author}
                    </p>
                    <p className="text-[12px] text-text-light">{t.role}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 8. Newsletter ───── */}
      <Newsletter />

      {/* ───── 9. CTA Band ───── */}
      <CtaBand />
    </>
  );
}
