import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
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
import { WHATSAPP_URL } from "@/lib/config";
import AldeiaCircles from "@/components/AldeiaCircles";
import AldeiaQR from "@/components/AldeiaQR";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Aldeia — Parent Community",
  description:
    "Join Aldeia — a free parent community for families navigating learning differences in Portugal. Workshops, a WhatsApp group, and a fortnightly newsletter.",
};

export default async function AldeiaPage() {
  const posts = (await getAllPosts()).slice(0, 3);
  return (
    <div style={{ background: "#f5f3fa" }}>
      {/* ════════════════════════════════════════
           HERO
         ════════════════════════════════════════ */}
      <section
        id="community"
        className="relative overflow-hidden min-h-[88vh] flex items-center px-6 md:px-20 py-16 md:py-[92px]"
        style={{ background: "var(--color-purple)" }}
      >
        <AldeiaCircles />

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
              supportive WhatsApp group, and a fortnightly newsletter. All
              in one place.
            </p>
            <div className="flex items-center gap-2.5 flex-wrap mb-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[7px] bg-purple-dark text-white px-[26px] py-[13px] rounded-full text-sm font-semibold shadow-[0_6px_20px_rgba(74,61,122,.45)] hover:bg-purple-deep transition-all hover:-translate-y-0.5"
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

          {/* Feature cards + QR — right column */}
          <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            {[
              {
                ico: <Mail className="w-6 h-6" />,
                title: "Newsletter",
                desc: "Fortnightly insights from the Medela team and other guests. Practical, warm, never generic.",
              },
              {
                ico: <MessageCircle className="w-6 h-6" />,
                title: "WhatsApp Group",
                desc: "A safe space for parents to share, ask questions, and support each other.",
              },
              {
                ico: <GraduationCap className="w-6 h-6" />,
                title: "Workshops",
                desc: "Regular sessions with psychometrists, OTs, teachers, and speech therapists.",
              },
              {
                ico: <MapPin className="w-6 h-6" />,
                title: "Rooted in Lisbon",
                desc: "Built for raising children with learning challenges in Portugal and beyond.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="bg-white/[.13] border border-purple/[.35] rounded-xl p-5 hover:bg-white/[.18] hover:-translate-y-[3px] transition-all"
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
                      desc: "Navigating the Portuguese education system, or an international school, as a newcomer, without a support network.",
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
                Community isn&apos;t just nice to have, it&apos;s often
                the thing that makes the difference.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-7">
                {[
                  {
                    ico: <Handshake className="w-5 h-5" />,
                    title: "Peer support",
                    desc: "Parents who genuinely understand what you're going through because they've been there.",
                  },
                  {
                    ico: <Brain className="w-5 h-5" />,
                    title: "Expert access",
                    desc: "Regular workshops with specialists you'd usually have to pay privately for an hour with.",
                  },
                  {
                    ico: <ClipboardList className="w-5 h-5" />,
                    title: "Practical guidance",
                    desc: "Not just theory real strategies, scripts for school meetings, and step-by-step guides.",
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
              <div className="mt-3">
                <AldeiaQR fullWidth theme="light" />
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
            Aldeia is free to join the community and access the parents and specialists. Once you&apos;re in you'll be sent the newsletter and kept up to date with future meetups and events.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mt-13">
            {/* Feature list */}
            <div className="flex flex-col gap-[26px]">
              {[
                {
                  ico: <Mail className="w-5 h-5" />,
                  title: "Fortnightly newsletter",
                  desc: "Practical tips, workshop recaps, recommended resources, and honest reflections on the realities of supporting a child with learning differences in Portugal.",
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
                  desc: "Articles written for parents, not professionals. Honest, readable, and grounded in the specific experience of raising a child with learning differences in Portugal.",
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
                      Aldeia - Parent Support Community
                    </h4>
                    <p className="text-[11px] text-white/70 mt-px">
                      60+ members
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
                      workshop on this. The recording should be in the
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
                      Also Jamille is hosting a Q&amp;A on psychometrics
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

          <div className="max-w-md mx-auto mt-12">
            <RevealOnScroll>
              <div className="bg-white rounded-[18px] shadow-[0_2px_12px_rgba(42,29,78,.06)] overflow-hidden flex flex-col">
                <div
                  className="px-[22px] pt-6 pb-5 relative overflow-hidden"
                  style={{ background: "linear-gradient(140deg, #2a1d4e, #4a3d7a)" }}
                >
                  <div className="absolute -right-[18px] -top-[18px] w-[100px] h-[100px] rounded-full bg-white/[.05]" />
                  <div className="inline-flex items-center gap-[5px] px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[.06em] uppercase mb-3.5 w-fit bg-purple/[.25] text-purple-light border border-purple/[.3]">
                    Date TBC
                  </div>
                  <h3 className="text-base font-bold text-white leading-[1.3] mb-2 tracking-tight">
                    Understanding Your Child&apos;s Learning Journey
                  </h3>
                  <div className="text-xs text-white/70">
                    Coming soon · Book your spot
                  </div>
                </div>
                <div className="px-[22px] pt-5 pb-[22px] flex-1 flex flex-col">
                  <p className="text-[13px] text-[#4a4468] leading-[1.7] mb-5 flex-1">
                    Your child has had a psychometric assessment, now
                    what? Jamille walks through what the scores actually mean,
                    what to ask the school, and how to use the report to get the
                    right support in place.
                  </p>
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
                      <div className="text-xs font-semibold text-[#1c2133]">Jamille</div>
                      <div className="text-[11px] text-[#8a86a8]">Co-founder · Aldeia</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2.5 pt-3.5 border-t border-purple/[.1]">
                    <div className="text-lg font-extrabold text-purple-dark tracking-tight">
                      &euro;10{" "}
                      <span className="text-xs font-normal text-[#8a86a8]">per person</span>
                    </div>
                    <a
                      href="https://buy.stripe.com/eVq4gzdwX4xWfJJa27dnW00"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-semibold text-white bg-purple-dark px-4 py-2 rounded-full hover:bg-purple-deep transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-dark focus-visible:ring-offset-2"
                    >
                      Join waitlist &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
           UPCOMING TOPICS STRIP
         ════════════════════════════════════════ */}
      <div
        className="py-14 px-6 md:px-20 relative overflow-hidden"
        style={{ background: "var(--color-purple)" }}
      >
        {/* Static concentric circles */}
        <svg
          className="absolute pointer-events-none select-none"
          style={{ right: "-40px", top: "50%", transform: "translateY(-50%)", width: 420, height: 420, opacity: 0.18 }}
          viewBox="0 0 420 420"
          fill="none"
          aria-hidden="true"
        >
          {[50, 100, 150, 200, 250, 300, 350].map((r) => (
            <circle key={r} cx="210" cy="210" r={r} stroke="white" strokeWidth="1" />
          ))}
        </svg>

        <div className="max-w-[1180px] mx-auto relative z-10">
          <div className="text-[11px] tracking-[.12em] uppercase font-bold text-white/[.45] mb-[18px]">
            Upcoming topics
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "ADHD & focus at home",
              "Reading confidence in early years",
              "School anxiety & school refusal",
              "Occupational therapy basics",
              "Speech therapy, what to expect",
              "Dyscalculia demystified",
              "How to have the diagnosis conversation",
              "Supporting bilingual learners",
              "IEPs & support plans, know your rights",
              "Sensory processing & daily life",
              "Raising a twice-exceptional child",
            ].map((t) => (
              <span
                key={t}
                className="bg-purple-mid/[.5] border border-purple-mid text-white/80 px-4 py-[7px] rounded-full text-[13px] font-medium hover:bg-purple-mid/[.7] hover:text-white transition-colors"
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
              All articles &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-7 items-stretch">
            {posts.map((post, i) => (
              <RevealOnScroll key={post.slug} delay={i as 0 | 1 | 2} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full rounded-[var(--radius-lg)] overflow-hidden border border-black/[.05] bg-white hover:-translate-y-1 transition-all"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  <div className="relative h-44 shrink-0 bg-purple-pale flex items-center justify-center">
                    {post.featuredImage ? (
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    ) : (
                      <BookOpen className="w-8 h-8 text-purple" />
                    )}
                    {post.category && (
                      <span className="absolute top-3 left-3 bg-white/90 text-[11px] font-bold text-text-mid uppercase tracking-[.08em] px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col flex-1 px-5 py-5">
                    <p className="text-[12px] text-[#8a86a8] mb-2">{post.date}</p>
                    <h3 className="text-[15px] font-bold text-[#1c2133] leading-snug mb-2 group-hover:text-purple transition-colors">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-[13px] text-[#4a4468] leading-6 line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                    )}
                    <span className="mt-auto text-[13px] font-bold text-purple-dark">
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
