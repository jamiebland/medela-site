import Link from "next/link";
import { Phone, Mail, Building } from "lucide-react";
import Newsletter from "@/components/Newsletter";
import ContactForm from "./ContactForm";
import { SITE_EMAIL } from "@/lib/config";

export const metadata = {
  title: "Contact — Medela Learning Support",
  description: "Get in touch with Medela Learning Support. Book a free call or send us a message.",
};

export default function ContactPage() {
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
            Contact
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight max-w-[640px] mb-3.5">
            Get in <span className="text-blue-light">touch</span>
          </h1>
          <p className="text-base text-white/55 leading-7 max-w-[520px]">
            Whether you have a question, want to discuss your child&apos;s needs, or just want to say hello &mdash; we&apos;d love to hear from you.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="px-6 md:px-20 py-18">
        <div className="max-w-[1180px] mx-auto grid md:grid-cols-2 gap-16">
          {/* Left: contact info */}
          <div>
            <div className="flex items-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-blue-btn mb-2.5">
              <span className="block w-[18px] h-0.5 bg-blue rounded-sm" />
              Reach out
            </div>
            <h2 className="text-2xl md:text-[40px] font-extrabold text-text leading-[1.13] tracking-tight mb-3">
              We&apos;re here to help
            </h2>
            <p className="text-base text-text-mid leading-7 mb-8 max-w-[460px]">
              The easiest way to start is with a free 20-minute call. No commitment, no pressure &mdash; just a conversation about your child.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-pale flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-blue-btn" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-text mb-1">Book a free call</h3>
                  <p className="text-sm text-text-mid leading-relaxed mb-2">
                    A 20-minute call with Rebecca to discuss your child&apos;s needs.
                  </p>
                  <a
                    href="https://calendly.com/medelalearnings"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-btn inline-flex items-center gap-1 border-b-[1.5px] border-blue-light pb-0.5 hover:gap-2 transition-all"
                  >
                    Schedule on Calendly &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-pale flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-blue-btn" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-text mb-1">Email us</h3>
                  <p className="text-sm text-text-mid leading-relaxed">
                    For general enquiries, partnerships, or school liaison requests.
                  </p>
                  <a href={`mailto:${SITE_EMAIL}`} className="text-sm font-semibold text-blue-btn">
                    {SITE_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-pale flex items-center justify-center shrink-0">
                  <Building className="w-5 h-5 text-blue-btn" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-text mb-1">Based in Lisbon</h3>
                  <p className="text-sm text-text-mid leading-relaxed">
                    In-person sessions available across Lisbon. Online sessions for families anywhere in Portugal or internationally.
                  </p>
                </div>
              </div>
            </div>

            {/* Aldeia callout */}
            <div className="bg-purple-pale rounded-[var(--radius-lg)] p-6">
              <h3 className="text-[15px] font-bold text-purple-dark mb-2">Looking for the Aldeia community?</h3>
              <p className="text-sm text-text-mid leading-relaxed mb-3">
                Join our free parent community &mdash; workshops, WhatsApp group, and fortnightly newsletter.
              </p>
              <Link
                href="/aldeia"
                className="text-sm font-semibold text-purple-dark inline-flex items-center gap-1 border-b-[1.5px] border-purple-light pb-0.5 hover:gap-2 transition-all"
              >
                Explore Aldeia &rarr;
              </Link>
            </div>
          </div>

          {/* Right: contact form */}
          <ContactForm />
        </div>
      </section>

      <Newsletter />
    </>
  );
}
