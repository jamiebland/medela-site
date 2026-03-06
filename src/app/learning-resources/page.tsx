import Link from "next/link";
import Image from "next/image";
import {
  ShoppingCart,
  CreditCard,
  Download,
  Printer,
  BookOpen,
  Calculator,
  FlaskConical,
  CheckCircle,
  Snowflake,
  Star,
  User,
} from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import CtaBand from "@/components/CtaBand";
import Newsletter from "@/components/Newsletter";
import FaqAccordion from "@/components/FaqAccordion";
import ResourceFilter from "./ResourceFilter";

export const metadata = {
  title: "Learning Resources",
  description:
    "Downloadable activity packs for Grades 1\u20134 \u2014 designed by a specialist using evidence-based methods. Cross-curricular, beautifully structured, and built with learning differences in mind.",
};

const faqItems = [
  {
    question: "What age or year group are the packs for?",
    answer:
      "The packs are designed for Grades 1\u20134, which typically corresponds to ages 6\u201310. Each pack is clearly labelled by grade. If your child is between grades or you\u2019re unsure, the Fall pack for the grade they\u2019re entering is usually the best starting point.",
  },
  {
    question: "Are these suitable for children with dyslexia or ADHD?",
    answer:
      "Yes \u2014 the packs are specifically designed with learning differences in mind. Clear fonts, uncluttered page layouts, chunked tasks, and a multisensory approach mean they work well for children who struggle with traditional worksheets. They also work well for neurotypical children.",
  },
  {
    question: "How do I get the pack after buying?",
    answer:
      "Immediately after purchase you\u2019ll receive a download link by email. Your PDF is available to download straight away and the link remains active so you can re-download any time.",
  },
  {
    question: "Do I need to print the pack, or can it be used digitally?",
    answer:
      "Both. Most families print the pack at home or at a local print shop. You can also use the PDF on a tablet with a stylus. We recommend printing for most children as it\u2019s more tactile and reduces screen time.",
  },
  {
    question: "Can I buy a pack as a gift for another family?",
    answer:
      "Yes. After purchase you\u2019ll receive the download link \u2014 you can forward this to whoever you\u2019re gifting it to. We\u2019re working on a gift card option for future releases.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Because these are digital downloads, we don\u2019t offer refunds once the file has been downloaded. If you have a problem with your purchase \u2014 a corrupt file, incorrect pack \u2014 please get in touch and we\u2019ll sort it immediately.",
  },
];

export default function LearningResourcesPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <div
        className="relative overflow-hidden px-6 md:px-20 py-18 md:py-20"
        style={{ background: "linear-gradient(140deg, #1e3a6e 0%, #0e2248 100%)" }}
      >
        {/* Decorative circles */}
        <div className="absolute -right-20 -top-20 w-[440px] h-[440px] rounded-full border border-blue/[.09] pointer-events-none" />
        <div className="absolute left-[5%] -bottom-[60px] w-[260px] h-[260px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(128,168,235,.06)_0%,transparent_70%)]" />

        <div className="max-w-[1180px] mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-white/[.38] mb-5 font-medium">
            <Link href="/" className="hover:text-white/70 transition-colors">
              Home
            </Link>
            <span className="text-white/20">/</span>
            Learning Resources
          </div>

          <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight max-w-[600px] mb-3.5">
                Learning packs that{" "}
                <span className="text-blue-light">actually work</span> at home
              </h1>
              <p className="text-base text-white/55 leading-7 max-w-[500px] mb-7">
                Downloadable activity packs for Grades 1&ndash;4 &mdash; designed by Rebecca
                using the same evidence-based approach she uses in her one-to-one
                sessions. Cross-curricular, beautifully structured, and built with
                learning differences in mind.
              </p>
              <div className="flex items-center gap-5 flex-wrap">
                {["Instant PDF download", "Designed by a specialist", "Works for all learners", "Includes answer booklet"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="flex items-center gap-2 text-[13px] text-white/65 font-medium"
                    >
                      <span className="text-[#3db87a] font-bold">{"\u2713"}</span>
                      {badge}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Stats card */}
            <div className="bg-white/[.07] border border-white/[.12] rounded-[var(--radius-lg)] p-6 md:p-7 flex flex-row md:flex-col gap-5 md:gap-[18px] min-w-[220px] justify-around md:justify-start">
              <div className="text-center">
                <div className="text-[32px] font-extrabold text-white tracking-tight leading-none">
                  14+
                </div>
                <div className="text-xs text-white/45 mt-1">packs available</div>
              </div>
              <div className="w-px md:w-auto h-auto md:h-px bg-white/10" />
              <div className="text-center">
                <div className="text-[32px] font-extrabold text-white tracking-tight leading-none">
                  G1&ndash;4
                </div>
                <div className="text-xs text-white/45 mt-1">grade range</div>
              </div>
              <div className="w-px md:w-auto h-auto md:h-px bg-white/10" />
              <div className="text-center">
                <div className="text-[32px] font-extrabold text-white tracking-tight leading-none">
                  30+
                </div>
                <div className="text-xs text-white/45 mt-1">pages per pack</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          FILTER BAR + PRODUCT GRID  (client)
      ═══════════════════════════════════════════ */}
      <ResourceFilter />

      {/* ═══════════════════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════════════════ */}
      <section className="bg-bg-warm py-20 px-6 md:px-20">
        <div className="max-w-[1180px] mx-auto">
          <div className="flex items-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-blue-btn mb-2.5">
            <span className="block w-[18px] h-0.5 bg-blue rounded-sm" />
            How it works
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold leading-[1.13] tracking-tight text-text mb-3">
            Download, print, and go
          </h2>
          <p className="text-base text-text-mid leading-7 max-w-[560px]">
            There&apos;s no subscription, no account to create, and nothing complicated.
            Just buy, download, and start using.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px] mt-11">
            {[
              { num: 1, icon: <ShoppingCart className="w-6 h-6 text-blue-btn" />, title: "Choose your pack", desc: "Pick the grade and season that matches your child\u2019s year. Not sure? Grade 2 Fall is a great starting point." },
              { num: 2, icon: <CreditCard className="w-6 h-6 text-blue-btn" />, title: "Buy securely", desc: "Checkout is handled via Sellfy \u2014 secure, fast, and no account needed. Pay by card or PayPal." },
              { num: 3, icon: <Download className="w-6 h-6 text-blue-btn" />, title: "Download instantly", desc: "Your PDF is available immediately after purchase. You\u2019ll also get an email link so you can download it again anytime." },
              { num: 4, icon: <Printer className="w-6 h-6 text-blue-btn" />, title: "Print & use", desc: "Print at home or at a local print shop. The pack works page by page or as a complete unit \u2014 whatever suits your child." },
            ].map((step, i) => (
              <RevealOnScroll key={step.num} delay={i}>
                <div className="bg-white rounded-[var(--radius)] p-6 text-center shadow-[var(--shadow-sm)] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[var(--shadow)]">
                  <div className="w-10 h-10 rounded-full bg-blue-pale border-2 border-blue-light flex items-center justify-center text-sm font-extrabold text-blue-btn mx-auto mb-3">
                    {step.num}
                  </div>
                  <div className="flex justify-center mb-3">{step.icon}</div>
                  <h4 className="text-sm font-bold text-text mb-1.5 tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-[13px] text-text-mid leading-[1.65]">{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHAT'S INSIDE
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-blue-btn mb-2.5">
                <span className="block w-[18px] h-0.5 bg-blue rounded-sm" />
                What&apos;s inside
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold leading-[1.13] tracking-tight text-text mb-3">
                More than a worksheet &mdash; a full learning programme
              </h2>
              <p className="text-base text-text-mid leading-7 max-w-[560px]">
                Every pack is carefully designed to work as a complete unit &mdash; not
                just a collection of activities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8">
                {[
                  { icon: <BookOpen className="w-5 h-5 text-blue-btn" />, title: "Literacy activities", desc: "Reading comprehension, phonics practice, creative writing prompts, and vocabulary work \u2014 all season-themed." },
                  { icon: <Calculator className="w-5 h-5 text-blue-btn" />, title: "Maths activities", desc: "Number, operations, problem-solving and reasoning \u2014 matched to grade expectations and scaffolded for different learners." },
                  { icon: <FlaskConical className="w-5 h-5 text-blue-btn" />, title: "Science & Geography", desc: "Cross-curricular content that makes English and Maths practice feel meaningful by connecting it to the world." },
                  { icon: <CheckCircle className="w-5 h-5 text-blue-btn" />, title: "Answer booklet", desc: "Every pack includes a full answer guide so parents can mark confidently and children get immediate feedback." },
                ].map((feat, i) => (
                  <RevealOnScroll key={feat.title} delay={i % 2}>
                    <div className="bg-bg rounded-[var(--radius)] p-[18px] shadow-[var(--shadow-sm)]">
                      <div className="mb-2">{feat.icon}</div>
                      <h4 className="text-sm font-bold text-text mb-1 tracking-tight">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-text-mid leading-[1.65]">{feat.desc}</p>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>

            {/* Pack preview card */}
            <RevealOnScroll delay={1}>
              <div className="bg-bg rounded-[var(--radius-lg)] p-7 shadow-[var(--shadow)]">
                <div className="flex items-center gap-3 mb-[18px]">
                  <div className="w-12 h-12 rounded-xl bg-blue-pale flex items-center justify-center">
                    <Snowflake className="w-5 h-5 text-blue-btn" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-text tracking-tight">
                      Grade 2 Winter Pack &mdash; sample pages
                    </h4>
                    <p className="text-xs text-text-light mt-0.5">
                      30+ pages &middot; Full answer booklet
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-[18px]">
                  {[
                    { key: "literacy", icon: <BookOpen className="w-6 h-6 text-blue-btn" /> },
                    { key: "maths", icon: <Calculator className="w-6 h-6 text-blue-btn" /> },
                    { key: "science", icon: <FlaskConical className="w-6 h-6 text-blue-btn" /> },
                  ].map((item) => (
                    <div
                      key={item.key}
                      className="bg-white rounded-lg aspect-[3/4] border border-blue/[.15] flex items-center justify-center shadow-[var(--shadow-sm)]"
                    >
                      {item.icon}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-1.5">
                  {[
                    "Clear font \u2014 readable for dyslexic learners",
                    "Uncluttered layout \u2014 never overwhelming",
                    "Chunked tasks \u2014 one step at a time",
                    "Multisensory \u2014 draw, write, cut, colour",
                    "Works for all learners, designed for LD",
                  ].map((line) => (
                    <div key={line} className="flex items-center gap-2 text-[13px] text-text-mid">
                      <span className="text-[#3db87a] font-bold shrink-0">{"\u2713"}</span>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════ */}
      <section className="bg-bg py-20 px-6 md:px-20">
        <div className="max-w-[1180px] mx-auto">
          <div className="flex items-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-blue-btn mb-2.5">
            <span className="block w-[18px] h-0.5 bg-blue rounded-sm" />
            What parents say
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold leading-[1.13] tracking-tight text-text mb-3">
            Trusted by families across Portugal &amp; beyond
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-11">
            {[
              {
                text: "The activity packs are the only resource I recommend to every parent in my class. Cross-curricular, beautifully paced, and genuinely useful for children of all abilities.",
                name: "Sofia M.",
                role: "Primary Teacher \u00b7 Porto",
                avatar: <User className="w-4 h-4 text-blue-btn" />,
              },
              {
                text: "My daughter has dyslexia and I was worried these packs would feel like more of the same struggle. They don\u2019t. The layout is so much calmer \u2014 she actually asks to do them.",
                name: "Catarina F.",
                role: "Parent of Grade 3 student \u00b7 Lisbon",
                avatar: <User className="w-4 h-4 text-blue-btn" />,
              },
              {
                text: "We bought the Grade 1 bundle for the summer and it was the best thing we did. My son went back to school feeling confident and ready \u2014 huge difference from previous years.",
                name: "Mark & Joana L.",
                role: "Parents of Grade 1 student \u00b7 Cascais",
                avatar: <User className="w-4 h-4 text-blue-btn" />,
              },
            ].map((t, i) => (
              <RevealOnScroll key={t.name} delay={i}>
                <div className="bg-white rounded-[var(--radius)] p-[22px] shadow-[var(--shadow-sm)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow)] flex flex-col h-full">
                  <div className="flex items-center gap-0.5 text-amber mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-text-mid leading-7 flex-1 mb-4 relative pl-3.5">
                    <span className="absolute -left-0.5 -top-1 text-[30px] text-blue-pale leading-none font-extrabold">
                      &ldquo;
                    </span>
                    {t.text}
                  </p>
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-blue-pale flex items-center justify-center shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-text">{t.name}</div>
                      <div className="text-xs text-text-light mt-0.5">{t.role}</div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT BECS
      ═══════════════════════════════════════════ */}
      <div
        className="relative overflow-hidden py-18 px-6 md:px-20"
        style={{ background: "linear-gradient(135deg, #1e3a6e 0%, #0e2248 100%)" }}
      >
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-blue/[.08] pointer-events-none" />
        <div className="max-w-[1180px] mx-auto grid md:grid-cols-[auto_1fr] gap-11 items-center relative z-10 text-center md:text-left">
          <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-[3px] border-white/[.15] shrink-0 bg-blue-pale mx-auto md:mx-0">
            <Image
              src="https://assets.ycodeapp.com/assets/app95680/Images/published/rebecca%20top%20teacher!!!-15-7yb7mhu0ug.webp"
              alt="Rebecca \u2014 Educational Therapist and creator of Medela Learning Resources"
              width={140}
              height={140}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <div className="text-[10px] tracking-[.12em] uppercase font-bold text-blue-light opacity-60 mb-2">
              Designed by a specialist
            </div>
            <h2 className="text-lg md:text-[28px] font-extrabold text-white leading-[1.2] tracking-tight mb-2.5">
              Every pack is created by Rebecca &mdash; Educational Therapist &amp; Founder
            </h2>
            <p className="text-[15px] text-white/[.72] leading-7 max-w-[540px]">
              These aren&apos;t generic worksheets. Every activity in every pack is
              designed by Rebecca using the same evidence-based methodology she uses in
              her one-to-one sessions. That means they work for neurotypical children
              and children with learning differences &mdash; because they were built
              with both in mind from the start.
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════ */}
      <section className="bg-bg-warm py-20 px-6 md:px-20">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="md:sticky md:top-[116px]">
              <div className="flex items-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-blue-btn mb-2.5">
                <span className="block w-[18px] h-0.5 bg-blue rounded-sm" />
                Questions
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold leading-[1.13] tracking-tight text-text mb-3">
                Everything you need to know before buying
              </h2>
              <p className="text-[15px] text-text-mid leading-7 mb-6">
                Still unsure? You can always book a free call with Rebecca to talk
                through which pack is right for your child.
              </p>
              <a
                href="https://calendly.com/medelalearnings"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-btn text-white px-6 py-3 rounded-full text-sm font-semibold shadow-[var(--shadow-btn)] hover:bg-blue-hover hover:-translate-y-0.5 transition-all"
              >
                Book a free call &rarr;
              </a>
            </div>
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA BAND
      ═══════════════════════════════════════════ */}
      <CtaBand />

      {/* ═══════════════════════════════════════════
          NEWSLETTER
      ═══════════════════════════════════════════ */}
      <Newsletter />
    </>
  );
}
