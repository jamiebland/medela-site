import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden py-18 px-6 md:px-20 text-center" style={{ background: "linear-gradient(135deg, #5a89de 0%, #1e3a6e 100%)" }}>
      <div className="absolute left-1/2 -top-20 -translate-x-1/2 w-[400px] h-[400px] rounded-full border border-white/[.07] pointer-events-none" />
      <div className="max-w-[620px] mx-auto relative z-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-[1.15] tracking-tight mb-3.5">
          Ready to take the first step?
        </h2>
        <p className="text-base text-white/[.58] leading-7 mb-7">
          A free 20-minute call is the easiest way to find out whether Medela is right for your child &mdash; no commitment, no pressure.
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <a
            href="https://calendly.com/medelalearnings"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-btn px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-xpale hover:-translate-y-0.5 transition-all"
          >
            Book a free call &rarr;
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-transparent text-white/80 px-6 py-3 rounded-full text-sm font-medium border-[1.5px] border-white/[.28] hover:border-white/70 hover:text-white transition-all"
          >
            Send us a message
          </Link>
        </div>
      </div>
    </section>
  );
}
