import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import Newsletter, { NewsletterForm } from "@/components/Newsletter";
import {
  Globe,
  Mail,
  MessageCircle,
  GraduationCap,
  MapPin,
  BookOpen,
  Hash,
  Zap,
  School,
  Plane,
  Handshake,
  Brain,
  ClipboardList,
  Heart,
  Home,
  Sparkles,
  Monitor,
  Clock,
  Video,
  Smile,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Aldeia — Parent Community",
  description:
    "Join Aldeia — a free parent community for families navigating learning differences in Portugal. Workshops, a WhatsApp group, and a fortnightly newsletter.",
};

export default function AldeiaPage() {
  return (
    <div style={{ background: "#f5f3fa" }}>
      {/* ════════════════════════════════════════
           HERO
         ════════════════════════════════════════ */}
      <section
        id="community"
        className="relative overflow-hidden min-h-[88vh] flex items-center px-6 md:px-20 py-16 md:py-[92px]"
        style={{
          background: "linear-gradient(148deg, #2a1d4e 0%, #180f38 100%)",
        }}
      >
        {/* Decorative rings */}
        <div className="absolute -right-[120px] -top-[120px] w-[580px] h-[580px] rounded-full border border-purple/[.10] pointer-events-none" />
        <div className="absolute right-10 top-10 w-[320px] h-[320px] rounded-full border border-purple/[.06] pointer-events-none" />

        {/* Floating particles */}
        <div className="absolute w-1.5 h-1.5 rounded-full bg-purple/30 top-[22%] left-[8%] animate-[drift_8s_ease-in-out_infinite]" />
        <div className="absolute w-1 h-1 rounded-full bg-purple-light/20 top-[60%] left-[14%] animate-[drift_8s_ease-in-out_infinite_1.5s]" />
        <div className="absolute w-2 h-2 rounded-full bg-purple/15 top-[38%] left-[3%] animate-[drift_8s_ease-in-out_infinite_3s]" />
        <div className="absolute w-[5px] h-[5px] rounded-full bg-purple-light/25 top-[75%] left-[22%] animate-[drift_8s_ease-in-out_infinite_0.8s]" />

        <div className="max-w-[1180px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[72px] items-center relative z-10">
          {/* Left column */}
          <div>
            <Image
              src="/images/brand/Aldeia Logo Full.png"
              alt="Aldeia"
              width={160}
              height={24}
              className="h-6 w-auto mb-6 brightness-0 invert opacity-80"
            />
            <div className="inline-flex items-center gap-[7px] bg-purple/[.18] border border-purple/[.28] text-purple-light px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[.07em] uppercase mb-3 w-fit">
              <Globe className="w-3.5 h-3.5 inline-block -mt-px" /> Lisbon · Portugal · Open to all families
            </div>
            <h1 className="text-[clamp(28px,4vw,52px)] font-extrabold text-white leading-[1.1] tracking-tight mb-[18px]">
              You shouldn&apos;t have to{" "}
              <span className="font-light text-purple-light">
                navigate this alone
              </span>
            </h1>
            <p className="text-base text-white/[.72] leading-7 max-w-[440px] mb-8">
              Aldeia is a warm, honest community for parents raising children
              with learning differences in Portugal. Expert workshops, a
              supportive WhatsApp group, and a fortnightly newsletter &ndash; all
              in one place.
            </p>
            <div className="flex items-center gap-2.5 flex-wrap mb-10">
              <a
                href="#newsletter"
                className="inline-flex items-center gap-[7px] bg-purple text-white px-[26px] py-[13px] rounded-full text-sm font-semibold shadow-[0_6px_20px_rgba(109,94,165,.32)] hover:bg-purple-dark transition-all hover:-translate-y-0.5"
              >
                Join the community &rarr;
              </a>
              <a
                href="#workshops"
                className="inline-flex items-center gap-[7px] text-white px-5 py-[13px] rounded-full text-sm font-medium border-[1.5px] border-white/40 hover:border-white/70 hover:bg-white/10 transition-all"
              >
                See upcoming workshops
              </a>
            </div>
          </div>

          {/* Feature cards — right column */}
          <div className="grid grid-cols-2 gap-3">
            {[
              {
                ico: <Mail className="w-6 h-6" />,
                title: "Newsletter",
                desc: "Fortnightly insights from Rebecca & Jamille. Practical, warm, never generic.",
              },
              {
                ico: <MessageCircle className="w-6 h-6" />,
                title: "WhatsApp Group",
                desc: "A safe space for parents to share, ask questions, and support each other.",
              },
              {
                ico: <GraduationCap className="w-6 h-6" />,
                title: "Workshops",
                desc: "Monthly sessions with psychometrists, OTs, teachers, and speech therapists.",
              },
              {
                ico: <MapPin className="w-6 h-6" />,
                title: "Rooted in Lisbon",
                desc: "Built for raising children in Portugal — whether Portuguese, expat, or both.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="bg-white/[.055] border border-purple/[.18] rounded-xl p-5 hover:bg-white/[.09] hover:-translate-y-[3px] transition-all"
              >
                <div className="text-purple-light mb-2.5">{c.ico}</div>
                <h4 className="text-sm font-bold text-white mb-[5px] tracking-tight">
                  {c.title}
                </h4>
                <p className="text-xs text-white/[.42] leading-[1.6]">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
           WHO IS ALDEIA FOR
         ════════════════════════════════════════ */}
      <section className="py-16 md:py-[88px] px-6 md:px-20 bg-white">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left — who is this for */}
            <RevealOnScroll>
              <div className="pt-2">
                <div className="flex items-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-purple-dark mb-2.5">
                  <span className="block w-[18px] h-0.5 bg-purple rounded-sm" />
                  Who is this for
                </div>
                <h2 className="text-[clamp(22px,3.2vw,40px)] font-extrabold leading-[1.13] tracking-tight text-[#1c2133] mb-3">
                  If any of this sounds familiar, Aldeia is for you
                </h2>
                <p className="text-base text-[#4a4468] leading-7 max-w-[560px]">
                  You don&apos;t need a diagnosis. You don&apos;t need to have it
                  all figured out. You just need a community that understands.
                </p>
                <div className="flex flex-col gap-2.5 mt-7">
                  {[
                    {
                      ico: <BookOpen className="w-4 h-4" />,
                      title: "Dyslexia or reading difficulties",
                      desc: "Your child is bright but struggles with reading, writing, or spelling in ways that confuse and frustrate them.",
                    },
                    {
                      ico: <Hash className="w-4 h-4" />,
                      title: "Dyscalculia or maths challenges",
                      desc: "Numbers just don't stick. Maths homework is a battleground every evening.",
                    },
                    {
                      ico: <Zap className="w-4 h-4" />,
                      title: "ADHD & attention differences",
                      desc: "Focusing is hard. School is hard. Finding support that actually works can feel impossible.",
                    },
                    {
                      ico: <MessageCircle className="w-4 h-4" />,
                      title: "Language & processing differences",
                      desc: "Your child struggles to follow instructions, process spoken language, or express themselves clearly.",
                    },
                    {
                      ico: <School className="w-4 h-4" />,
                      title: "School anxiety or avoidance",
                      desc: "Monday mornings are dreaded. Your child's relationship with school has broken down.",
                    },
                    {
                      ico: <Plane className="w-4 h-4" />,
                      title: "Expat families in Portugal",
                      desc: "Navigating the Portuguese education system — or an international school — as a newcomer, without a support network.",
                    },
                  ].map((r) => (
                    <div
                      key={r.title}
                      className="flex items-start gap-3 bg-purple-xpale border border-purple/[.14] rounded-xl p-3.5 hover:bg-purple-pale transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-pale border border-purple-light flex items-center justify-center text-[15px] shrink-0 mt-px">
                        {r.ico}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#1c2133] mb-0.5">
                          {r.title}
                        </h4>
                        <p className="text-[13px] text-[#4a4468] leading-[1.6]">
                          {r.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Right — why parents join */}
            <RevealOnScroll delay={1}>
              <div className="flex items-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-purple-dark mb-2.5">
                <span className="block w-[18px] h-0.5 bg-purple rounded-sm" />
                What you&apos;ll get
              </div>
              <h2 className="text-[clamp(22px,3.2vw,40px)] font-extrabold leading-[1.13] tracking-tight text-[#1c2133] mb-3">
                Why parents join Aldeia
              </h2>
              <p className="text-base text-[#4a4468] leading-7 max-w-[560px]">
                Community isn&apos;t just nice to have &ndash; it&apos;s often
                the thing that makes the difference.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-7">
                {[
                  {
                    ico: <Handshake className="w-5 h-5" />,
                    title: "Peer support",
                    desc: "Parents who genuinely understand what you're going through — because they've been there.",
                  },
                  {
                    ico: <Brain className="w-5 h-5" />,
                    title: "Expert access",
                    desc: "Monthly workshops with specialists you'd usually have to pay privately for an hour with.",
                  },
                  {
                    ico: <ClipboardList className="w-5 h-5" />,
                    title: "Practical guidance",
                    desc: "Not just theory — real strategies, scripts for school meetings, and step-by-step guides.",
                  },
                  {
                    ico: <Heart className="w-5 h-5" />,
                    title: "Hope & perspective",
                    desc: "This is hard. But children with the right support grow into confident, capable adults.",
                  },
                ].map((b) => (
                  <div
                    key={b.title}
                    className="bg-[#f5f3fa] rounded-xl p-5 shadow-[0_2px_12px_rgba(42,29,78,.06)] hover:-translate-y-[3px] hover:shadow-[0_4px_32px_rgba(42,29,78,.10)] transition-all"
                  >
                    <div className="text-[22px] mb-2.5">{b.ico}</div>
                    <h4 className="text-sm font-bold text-[#1c2133] mb-1 tracking-tight">
                      {b.title}
                    </h4>
                    <p className="text-xs text-[#4a4468] leading-[1.65]">
                      {b.desc}
                    </p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
           COMMUNITY FEATURES — How it works
         ════════════════════════════════════════ */}
      <section className="py-16 md:py-[88px] px-6 md:px-20">
        <div className="max-w-[1180px] mx-auto">
          <div className="flex items-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-purple-dark mb-2.5">
            <span className="block w-[18px] h-0.5 bg-purple rounded-sm" />
            How it works
          </div>
          <h2 className="text-[clamp(22px,3.2vw,40px)] font-extrabold leading-[1.13] tracking-tight text-[#1c2133] mb-3">
            Everything in one community
          </h2>
          <p className="text-base text-[#4a4468] leading-7 max-w-[560px]">
            Aldeia is free to join. Once you&apos;re in the newsletter, you get
            access to everything.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mt-13">
            {/* Feature list */}
            <div className="flex flex-col gap-[26px]">
              {[
                {
                  ico: <Mail className="w-5 h-5" />,
                  title: "Fortnightly newsletter",
                  desc: "Rebecca and Jamille write every issue personally. Practical tips, workshop recaps, recommended resources, and honest reflections on the realities of supporting a child with learning differences in Portugal.",
                  delay: 0,
                },
                {
                  ico: <MessageCircle className="w-5 h-5" />,
                  title: "WhatsApp community group",
                  desc: "A warm, moderated space for day-to-day questions, recommendations, and support. When you join the newsletter, you'll receive a private link to the WhatsApp group in your welcome email.",
                  delay: 1,
                },
                {
                  ico: <GraduationCap className="w-5 h-5" />,
                  title: "Monthly expert workshops",
                  desc: "Live online sessions with psychometrists, occupational therapists, speech therapists, educational psychologists, and experienced teachers. Recorded for those who can't make it live. Affordable and practical.",
                  delay: 2,
                },
                {
                  ico: <BookOpen className="w-5 h-5" />,
                  title: "Aldeia blog & resource library",
                  desc: "Articles written for parents — not professionals. Honest, readable, and grounded in the specific experience of raising a child with learning differences in Portugal.",
                  delay: 3,
                },
              ].map((f) => (
                <RevealOnScroll key={f.title} delay={f.delay as 0 | 1 | 2 | 3}>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-[10px] shrink-0 bg-purple-pale border-[1.5px] border-purple-light flex items-center justify-center text-lg">
                      {f.ico}
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-[#1c2133] mb-[5px] tracking-tight">
                        {f.title}
                      </h4>
                      <p className="text-sm text-[#4a4468] leading-[1.7]">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            {/* WhatsApp mockup */}
            <RevealOnScroll delay={1}>
              <div className="bg-white rounded-[18px] shadow-[0_4px_32px_rgba(42,29,78,.10)] overflow-hidden">
                {/* WA Header */}
                <div className="bg-purple-dark px-5 py-4 flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-purple-light flex items-center justify-center">
                    <Home className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-white">
                      Aldeia Community
                    </h4>
                    <p className="text-[11px] text-white/70 mt-px">
                      247 members
                    </p>
                  </div>
                </div>
                {/* WA Body */}
                <div
                  className="p-5 flex flex-col gap-3"
                  style={{ background: "#f0ece8" }}
                >
                  {/* them */}
                  <div className="self-start max-w-[80%]">
                    <div className="bg-white text-[#1c2133] px-3.5 py-2.5 rounded-xl rounded-bl-[3px] text-[13px] leading-[1.5]">
                      Has anyone navigated the psychometric report process at an
                      international school here? We just got ours back and I
                      don&apos;t know where to start <Smile className="w-3.5 h-3.5 inline-block -mt-px" />
                    </div>
                    <div className="text-[10px] text-[#aaa] mt-[3px]">
                      10:42
                    </div>
                  </div>
                  {/* me */}
                  <div className="self-end max-w-[80%]">
                    <div className="bg-[#dcf8c6] text-[#1a2033] px-3.5 py-2.5 rounded-xl rounded-br-[3px] text-[13px] leading-[1.5]">
                      Yes! We went through this last year. Rebecca actually did a
                      workshop on this &ndash; the recording should be in the
                      drive <Sparkles className="w-3.5 h-3.5 inline-block -mt-px" />
                    </div>
                    <div className="text-[10px] text-[#aaa] mt-[3px] text-right">
                      10:44
                    </div>
                  </div>
                  {/* them */}
                  <div className="self-start max-w-[80%]">
                    <div className="bg-white text-[#1c2133] px-3.5 py-2.5 rounded-xl rounded-bl-[3px] text-[13px] leading-[1.5]">
                      Oh amazing, thank you! I didn&apos;t know where to look.
                      This group is a lifesaver honestly <Heart className="w-3.5 h-3.5 inline-block -mt-px text-purple" />
                    </div>
                    <div className="text-[10px] text-[#aaa] mt-[3px]">
                      10:46
                    </div>
                  </div>
                  {/* me */}
                  <div className="self-end max-w-[80%]">
                    <div className="bg-[#dcf8c6] text-[#1a2033] px-3.5 py-2.5 rounded-xl rounded-br-[3px] text-[13px] leading-[1.5]">
                      Also &ndash; Jamille is hosting a Q&amp;A on psychometrics
                      next month. Definitely worth joining!
                    </div>
                    <div className="text-[10px] text-[#aaa] mt-[3px] text-right">
                      10:47
                    </div>
                  </div>
                </div>
                {/* WA Footer */}
                <div className="px-[18px] py-3.5 bg-white text-xs text-[#4a4468] border-t border-purple/[.1] text-center">
                  <Heart className="w-3 h-3 inline-block -mt-px text-purple" /> WhatsApp link shared in welcome email on signup
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
           WORKSHOPS
         ════════════════════════════════════════ */}
      <section
        id="workshops"
        className="py-16 md:py-[88px] px-6 md:px-20"
        style={{ background: "#ebe7f5" }}
      >
        <div className="max-w-[1180px] mx-auto">
          <div className="flex items-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-purple-dark mb-2.5">
            <span className="block w-[18px] h-0.5 bg-purple rounded-sm" />
            Upcoming workshops
          </div>
          <h2 className="text-[clamp(22px,3.2vw,40px)] font-extrabold leading-[1.13] tracking-tight text-[#1c2133] mb-3">
            Learn from the specialists
          </h2>
          <p className="text-base text-[#4a4468] leading-7 max-w-[560px]">
            Affordable, practical, and recorded. Every workshop is designed so
            you leave with something you can actually use.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mt-12">
            {/* Workshop 1 — Upcoming */}
            <RevealOnScroll>
              <div className="bg-white rounded-[18px] shadow-[0_2px_12px_rgba(42,29,78,.06)] overflow-hidden motion-safe:hover:-translate-y-[5px] hover:shadow-[0_4px_32px_rgba(42,29,78,.10)] transition-all flex flex-col">
                <div
                  className="px-[22px] pt-6 pb-5 relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(140deg, #2a1d4e, #4a3d7a)",
                  }}
                >
                  <div className="absolute -right-[18px] -top-[18px] w-[100px] h-[100px] rounded-full bg-white/[.05]" />
                  <div className="inline-flex items-center gap-[5px] px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[.06em] uppercase mb-3.5 w-fit bg-[rgba(232,168,76,.2)] text-[#e8a84c] border border-[rgba(232,168,76,.3)]">
                    ● Booking open
                  </div>
                  <h3 className="text-base font-bold text-white leading-[1.3] mb-2 tracking-tight">
                    Understanding Your Child&apos;s Psychometric Report
                  </h3>
                  <div className="text-xs text-white/70">
                    Tue 18 March 2026 · 7:00 PM Lisbon
                  </div>
                </div>
                <div className="px-[22px] pt-5 pb-[22px] flex-1 flex flex-col">
                  <p className="text-[13px] text-[#4a4468] leading-[1.7] mb-4 flex-1">
                    Your child has had a psychometric assessment &ndash; now
                    what? Jamille walks through what the scores actually mean,
                    what to ask the school, and how to use the report to get the
                    right support in place.
                  </p>
                  <div className="text-[11px] text-[#8a86a8] mb-1.5">
                    14 spots remaining
                  </div>
                  <div className="bg-purple/[.1] rounded h-1 mb-3.5 overflow-hidden">
                    <div
                      className="h-full bg-purple rounded"
                      style={{ width: "53%" }}
                    />
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="flex items-center gap-[5px] bg-purple-xpale border border-purple/[.15] px-2.5 py-1 rounded-full text-[11px] font-medium text-purple-dark">
                      <Monitor className="w-3 h-3 inline-block -mt-px" /> Online
                    </span>
                    <span className="flex items-center gap-[5px] bg-purple-xpale border border-purple/[.15] px-2.5 py-1 rounded-full text-[11px] font-medium text-purple-dark">
                      <Clock className="w-3 h-3 inline-block -mt-px" /> 75 mins
                    </span>
                    <span className="flex items-center gap-[5px] bg-purple-xpale border border-purple/[.15] px-2.5 py-1 rounded-full text-[11px] font-medium text-purple-dark">
                      <Video className="w-3 h-3 inline-block -mt-px" /> Recorded
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-[30px] h-[30px] rounded-full overflow-hidden bg-purple-pale shrink-0">
                      <Image
                        src="/images/team/jamille-avatar-sm.jpg"
                        alt="Jamille"
                        width={30}
                        height={30}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#1c2133]">
                        Jamille
                      </div>
                      <div className="text-[11px] text-[#8a86a8]">
                        Co-founder · Aldeia
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2.5 pt-3.5 border-t border-purple/[.1]">
                    <div className="text-lg font-extrabold text-purple-dark tracking-tight">
                      &euro;20{" "}
                      <span className="text-xs font-normal text-[#8a86a8]">
                        per family
                      </span>
                    </div>
                    <a
                      href="#"
                      className="text-[13px] font-semibold text-white bg-purple-dark px-4 py-2 rounded-full hover:bg-purple-deep transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-dark focus-visible:ring-offset-2"
                    >
                      Register &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Workshop 2 — Upcoming */}
            <RevealOnScroll delay={1}>
              <div className="bg-white rounded-[18px] shadow-[0_2px_12px_rgba(42,29,78,.06)] overflow-hidden motion-safe:hover:-translate-y-[5px] hover:shadow-[0_4px_32px_rgba(42,29,78,.10)] transition-all flex flex-col">
                <div
                  className="px-[22px] pt-6 pb-5 relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(140deg, #2a1d4e, #4a3d7a)",
                  }}
                >
                  <div className="absolute -right-[18px] -top-[18px] w-[100px] h-[100px] rounded-full bg-white/[.05]" />
                  <div className="inline-flex items-center gap-[5px] px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[.06em] uppercase mb-3.5 w-fit bg-[rgba(232,168,76,.2)] text-[#e8a84c] border border-[rgba(232,168,76,.3)]">
                    ● Booking open
                  </div>
                  <h3 className="text-base font-bold text-white leading-[1.3] mb-2 tracking-tight">
                    Dyslexia at Home: Practical Strategies That Actually Work
                  </h3>
                  <div className="text-xs text-white/70">
                    Thu 3 April 2026 · 7:30 PM Lisbon
                  </div>
                </div>
                <div className="px-[22px] pt-5 pb-[22px] flex-1 flex flex-col">
                  <p className="text-[13px] text-[#4a4468] leading-[1.7] mb-4 flex-1">
                    Rebecca shares the at-home techniques she uses in her own
                    sessions &ndash; from multisensory reading approaches to
                    managing the emotional side of homework battles. Honest,
                    practical, parent-friendly.
                  </p>
                  <div className="text-[11px] text-[#8a86a8] mb-1.5">
                    21 spots remaining
                  </div>
                  <div className="bg-purple/[.1] rounded h-1 mb-3.5 overflow-hidden">
                    <div
                      className="h-full bg-purple rounded"
                      style={{ width: "30%" }}
                    />
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="flex items-center gap-[5px] bg-purple-xpale border border-purple/[.15] px-2.5 py-1 rounded-full text-[11px] font-medium text-purple-dark">
                      <Monitor className="w-3 h-3 inline-block -mt-px" /> Online
                    </span>
                    <span className="flex items-center gap-[5px] bg-purple-xpale border border-purple/[.15] px-2.5 py-1 rounded-full text-[11px] font-medium text-purple-dark">
                      <Clock className="w-3 h-3 inline-block -mt-px" /> 60 mins
                    </span>
                    <span className="flex items-center gap-[5px] bg-purple-xpale border border-purple/[.15] px-2.5 py-1 rounded-full text-[11px] font-medium text-purple-dark">
                      <Video className="w-3 h-3 inline-block -mt-px" /> Recorded
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-[30px] h-[30px] rounded-full overflow-hidden bg-purple-pale shrink-0">
                      <Image
                        src="/images/team/rebecca-avatar-sm.jpg"
                        alt="Rebecca"
                        width={30}
                        height={30}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#1c2133]">
                        Rebecca
                      </div>
                      <div className="text-[11px] text-[#8a86a8]">
                        Educational Therapist · Medela
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2.5 pt-3.5 border-t border-purple/[.1]">
                    <div className="text-lg font-extrabold text-purple-dark tracking-tight">
                      &euro;15{" "}
                      <span className="text-xs font-normal text-[#8a86a8]">
                        per family
                      </span>
                    </div>
                    <a
                      href="#"
                      className="text-[13px] font-semibold text-white bg-purple-dark px-4 py-2 rounded-full hover:bg-purple-deep transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-dark focus-visible:ring-offset-2"
                    >
                      Register &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Workshop 3 — Coming soon */}
            <RevealOnScroll delay={2}>
              <div className="bg-white rounded-[18px] shadow-[0_2px_12px_rgba(42,29,78,.06)] overflow-hidden motion-safe:hover:-translate-y-[5px] hover:shadow-[0_4px_32px_rgba(42,29,78,.10)] transition-all flex flex-col">
                <div
                  className="px-[22px] pt-6 pb-5 relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(140deg, #2a1d4e, #4a3d7a)",
                  }}
                >
                  <div className="absolute -right-[18px] -top-[18px] w-[100px] h-[100px] rounded-full bg-white/[.05]" />
                  <div className="inline-flex items-center gap-[5px] px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[.06em] uppercase mb-3.5 w-fit bg-purple/[.25] text-purple-light border border-purple/[.3]">
                    Coming soon
                  </div>
                  <h3 className="text-base font-bold text-white leading-[1.3] mb-2 tracking-tight">
                    Navigating the Portuguese School System as an Expat Family
                  </h3>
                  <div className="text-xs text-white/70">
                    May 2026 · Date TBC
                  </div>
                </div>
                <div className="px-[22px] pt-5 pb-[22px] flex-1 flex flex-col">
                  <p className="text-[13px] text-[#4a4468] leading-[1.7] mb-4 flex-1">
                    The Portuguese education system is complicated. Combine that
                    with a child who needs extra support, and it can feel
                    overwhelming. This workshop breaks it down step by step, with
                    a panel of experienced parents and educators.
                  </p>
                  <div className="text-[11px] text-[#8a86a8] mb-1.5">
                    Join the waitlist
                  </div>
                  <div className="bg-purple/[.1] rounded h-1 mb-3.5 overflow-hidden">
                    <div
                      className="h-full bg-purple rounded"
                      style={{ width: "0%" }}
                    />
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="flex items-center gap-[5px] bg-purple-xpale border border-purple/[.15] px-2.5 py-1 rounded-full text-[11px] font-medium text-purple-dark">
                      <Monitor className="w-3 h-3 inline-block -mt-px" /> Online
                    </span>
                    <span className="flex items-center gap-[5px] bg-purple-xpale border border-purple/[.15] px-2.5 py-1 rounded-full text-[11px] font-medium text-purple-dark">
                      <Clock className="w-3 h-3 inline-block -mt-px" /> 90 mins
                    </span>
                    <span className="flex items-center gap-[5px] bg-purple-xpale border border-purple/[.15] px-2.5 py-1 rounded-full text-[11px] font-medium text-purple-dark">
                      <Video className="w-3 h-3 inline-block -mt-px" /> Recorded
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-[30px] h-[30px] rounded-full overflow-hidden bg-purple-pale shrink-0">
                      <Image
                        src="/images/team/jamille-avatar-sm.jpg"
                        alt="Jamille"
                        width={30}
                        height={30}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#1c2133]">
                        Jamille + Guest panel
                      </div>
                      <div className="text-[11px] text-[#8a86a8]">
                        Co-founder · Aldeia
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2.5 pt-3.5 border-t border-purple/[.1]">
                    <div className="text-lg font-extrabold text-purple-dark tracking-tight">
                      &euro;20{" "}
                      <span className="text-xs font-normal text-[#8a86a8]">
                        per family
                      </span>
                    </div>
                    <span className="text-[13px] font-semibold text-purple-dark bg-purple/[.2] px-4 py-2 rounded-full cursor-default whitespace-nowrap">
                      Waitlist &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
           PAST WORKSHOPS STRIP
         ════════════════════════════════════════ */}
      <div
        className="py-13 px-6 md:px-20"
        style={{
          background: "linear-gradient(135deg, #2a1d4e 0%, #180f38 100%)",
        }}
      >
        <div className="max-w-[1180px] mx-auto">
          <div className="text-[11px] tracking-[.12em] uppercase font-bold text-white/[.35] mb-[18px]">
            Topics we&apos;ve covered before
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "ADHD & focus at home",
              "Reading confidence in early years",
              "School anxiety & school refusal",
              "Occupational therapy basics",
              "Speech therapy — what to expect",
              "Dyscalculia demystified",
              "How to have the diagnosis conversation",
              "Supporting bilingual learners",
              "IEPs & support plans — know your rights",
              "Sensory processing & daily life",
              "Raising a twice-exceptional child",
            ].map((t) => (
              <span
                key={t}
                className="bg-white/[.07] border border-purple/[.2] text-white/55 px-4 py-[7px] rounded-full text-[13px] font-medium hover:bg-white/[.12] hover:text-white/80 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
           BLOG — Aldeia tagged
         ════════════════════════════════════════ */}
      <section className="py-16 md:py-[88px] px-6 md:px-20">
        <div className="max-w-[1180px] mx-auto">
          <div className="flex justify-between items-end mb-10 flex-wrap gap-3">
            <div>
              <div className="flex items-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-purple-dark mb-2.5">
                <span className="block w-[18px] h-0.5 bg-purple rounded-sm" />
                From the Aldeia blog
              </div>
              <h2 className="text-[clamp(22px,3.2vw,40px)] font-extrabold leading-[1.13] tracking-tight text-[#1c2133]">
                Honest writing for parents
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-semibold text-purple-dark border-b-[1.5px] border-purple-light pb-0.5"
            >
              All Aldeia articles &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                ico: <Brain className="w-8 h-8" />,
                cat: "ADHD",
                date: "February 2026",
                title:
                  "The one thing I wish someone had told me when my son was first diagnosed with ADHD",
                href: "/blog/adhd-diagnosis-first-steps",
                delay: 0,
              },
              {
                ico: <School className="w-8 h-8" />,
                cat: "Schools",
                date: "January 2026",
                title:
                  "How to prepare for a meeting with your child's school — and actually get what you need",
                href: "/blog/school-meeting-guide",
                delay: 1,
              },
              {
                ico: <MessageCircle className="w-8 h-8" />,
                cat: "Community",
                date: "December 2025",
                title:
                  "Why Aldeia exists — and what we hope it becomes",
                href: "/blog/why-aldeia-exists",
                delay: 2,
              },
            ].map((post) => (
              <RevealOnScroll
                key={post.href}
                delay={post.delay as 0 | 1 | 2}
              >
                <Link
                  href={post.href}
                  className="group bg-white rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(42,29,78,.06)] hover:-translate-y-1 hover:shadow-[0_4px_32px_rgba(42,29,78,.10)] transition-all flex flex-col"
                >
                  <div className="h-[162px] bg-purple-pale flex items-center justify-center text-4xl relative overflow-hidden">
                    {post.ico}
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-[3px] rounded-full text-[10px] font-bold tracking-[.07em] uppercase bg-purple text-white">
                      {post.cat}
                    </span>
                  </div>
                  <div className="px-[18px] pt-4 pb-[18px] flex-1 flex flex-col">
                    <div className="text-[11px] text-[#8a86a8] mb-[5px]">
                      {post.date}
                    </div>
                    <div className="text-sm font-bold text-[#1c2133] leading-[1.35] mb-2 flex-1">
                      {post.title}
                    </div>
                    <span className="text-[13px] font-semibold text-purple-dark flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read article &rarr;
                    </span>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
           NEWSLETTER / JOIN
         ════════════════════════════════════════ */}
      <div
        id="newsletter"
        className="py-16 md:py-[92px] px-6 md:px-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(148deg, #2a1d4e 0%, #180f38 100%)",
        }}
      >
        <div className="absolute -left-20 -bottom-20 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(145,129,184,.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
          {/* Left — what you get */}
          <div>
            <div className="flex items-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-white/[.38] mb-2.5">
              <span className="block w-[18px] h-0.5 bg-white/[.28] rounded-sm" />
              Join for free
            </div>
            <h2 className="text-[clamp(22px,3vw,38px)] font-extrabold text-white leading-[1.1] tracking-tight mb-3">
              Start with the{" "}
              <span className="font-light text-purple-light">newsletter</span>
            </h2>
            <p className="text-[15px] text-white/[.72] leading-7">
              The fortnightly Aldeia newsletter is the heart of the community.
              When you sign up, you&apos;ll get the WhatsApp group link in your
              welcome email &ndash; and access to everything Aldeia has to offer.
            </p>
            <div className="flex flex-col gap-2.5 mt-6">
              {[
                {
                  ico: <Mail className="w-5 h-5" />,
                  content: (
                    <>
                      <strong className="text-white/[.85] font-semibold">
                        What&apos;s in each issue:
                      </strong>{" "}
                      practical strategies, workshop recaps, parent stories,
                      resource recommendations, and honest reflections from Rebecca
                      &amp; Jamille.
                    </>
                  ),
                },
                {
                  ico: <MessageCircle className="w-5 h-5" />,
                  content: (
                    <>
                      <strong className="text-white/[.85] font-semibold">
                        WhatsApp community link
                      </strong>{" "}
                      shared in your welcome email &ndash; a warm, moderated
                      group of parents who get it.
                    </>
                  ),
                },
                {
                  ico: <GraduationCap className="w-5 h-5" />,
                  content: (
                    <>
                      <strong className="text-white/[.85] font-semibold">
                        Early access to workshops
                      </strong>{" "}
                      and subscriber-only rates &ndash; announced in the
                      newsletter before anywhere else.
                    </>
                  ),
                },
              ].map((issue, i) => (
                <div
                  key={i}
                  className="flex items-start gap-[11px] bg-white/[.055] border border-purple/[.16] rounded-xl px-[15px] py-[13px]"
                >
                  <div className="text-lg shrink-0 mt-px">{issue.ico}</div>
                  <div className="text-[13px] text-white/60 leading-[1.55]">
                    {issue.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form (uses Newsletter component pattern but purple-themed inline) */}
          <div>
            <div className="bg-white/[.07] border border-purple/[.2] rounded-[18px] p-8">
              <div className="text-lg font-bold text-white mb-1.5 tracking-tight">
                Join Aldeia &ndash; it&apos;s free
              </div>
              <div className="text-[13px] text-white/[.45] mb-5 leading-[1.6]">
                Sign up for the newsletter and get the WhatsApp link in your
                welcome email. Unsubscribe any time.
              </div>
              <NewsletterForm />
              <div className="flex items-center gap-[9px] bg-[rgba(37,211,102,.1)] border border-[rgba(37,211,102,.2)] rounded-xl px-3.5 py-[11px] mt-2.5 text-xs text-white/[.72] leading-[1.5]">
                <span><MessageCircle className="w-4 h-4" /></span>
                <span>
                  <strong className="text-white/80">
                    WhatsApp community link
                  </strong>{" "}
                  sent in your welcome email straight after signup.
                </span>
              </div>
              <div className="text-[11px] text-white/[.28] text-center mt-1">
                No spam. Unsubscribe any time. Your details are never shared.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
           TEAM — Meet Rebecca & Jamille
         ════════════════════════════════════════ */}
      <section className="py-16 md:py-[88px] px-6 md:px-20 bg-white">
        <div className="max-w-[1180px] mx-auto">
          <div className="flex items-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-purple-dark mb-2.5">
            <span className="block w-[18px] h-0.5 bg-purple rounded-sm" />
            Behind Aldeia
          </div>
          <h2 className="text-[clamp(22px,3.2vw,40px)] font-extrabold leading-[1.13] tracking-tight text-[#1c2133] mb-3">
            Meet Rebecca &amp; Jamille
          </h2>
          <p className="text-base text-[#4a4468] leading-7 max-w-[560px]">
            Two people who believed parents shouldn&apos;t have to figure this
            out alone &ndash; and built a community to prove it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-11">
            {/* Rebecca */}
            <RevealOnScroll>
              <div className="bg-[#f5f3fa] rounded-[18px] overflow-hidden shadow-[0_2px_12px_rgba(42,29,78,.06)] flex hover:-translate-y-[3px] hover:shadow-[0_4px_32px_rgba(42,29,78,.10)] transition-all">
                <div className="w-[120px] shrink-0 bg-purple-pale overflow-hidden">
                  <Image
                    src="/images/team/rebecca-avatar.jpg"
                    alt="Rebecca"
                    width={120}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <div className="text-[17px] font-extrabold text-[#1c2133] tracking-tight mb-0.5">
                    Rebecca
                  </div>
                  <div className="text-xs text-purple-dark font-semibold mb-2.5">
                    Educational Therapist &amp; Founder
                  </div>
                  <p className="text-[13px] text-[#4a4468] leading-[1.65]">
                    Specialist educational therapist and founder of Medela
                    Learning. Rebecca created Aldeia because she saw, every day in
                    her sessions, how isolated parents felt &ndash; and wanted to
                    change that.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Jamille */}
            <RevealOnScroll delay={1}>
              <div className="bg-[#f5f3fa] rounded-[18px] overflow-hidden shadow-[0_2px_12px_rgba(42,29,78,.06)] flex hover:-translate-y-[3px] hover:shadow-[0_4px_32px_rgba(42,29,78,.10)] transition-all">
                <div className="w-[120px] shrink-0 overflow-hidden relative">
                  <Image
                    src="/images/team/jamille-avatar.jpg"
                    alt="Jamille"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <div className="text-[17px] font-extrabold text-[#1c2133] tracking-tight mb-0.5">
                    Jamille
                  </div>
                  <div className="text-xs text-purple-dark font-semibold mb-2.5">
                    Co-founder &amp; Community Lead
                  </div>
                  <p className="text-[13px] text-[#4a4468] leading-[1.65]">
                    Jamille leads the Aldeia community and hosts the workshops.
                    Her background is in community building and parent advocacy
                    &ndash; and she brings warmth and practical wisdom to
                    everything Aldeia does.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
           MEDELA CTA BAND
         ════════════════════════════════════════ */}
      <div
        className="py-14 md:py-[72px] px-6 md:px-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #3d72c4 0%, #2a1d4e 100%)",
        }}
      >
        <div className="absolute -right-[60px] top-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-blue-btn/[.1] pointer-events-none" />
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center relative z-10">
          <div>
            <h2 className="text-[clamp(20px,2.8vw,34px)] font-extrabold text-white leading-[1.15] tracking-tight mb-2">
              Looking for one-to-one support for your child?
            </h2>
            <p className="text-[15px] text-white/[.72] leading-7 max-w-[480px]">
              Aldeia is for the community. Medela Learning Support is for the
              child. Rebecca offers specialist educational therapy sessions.
              One-to-one, personalised, and evidence-based for children
              with learning differences in Lisbon and online.
            </p>
          </div>
          <a
            href="https://calendly.com/medelalearnings"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[7px] bg-blue-btn text-white px-7 py-3.5 rounded-full text-sm font-semibold shadow-[0_6px_20px_rgba(90,137,222,.3)] hover:bg-[#4a78cc] hover:-translate-y-0.5 transition-all whitespace-nowrap"
          >
            Book a free call with Medela &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
