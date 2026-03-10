import Link from "next/link";
import { Phone, Mail, Building } from "lucide-react";
import Newsletter from "@/components/Newsletter";
import ContactForm from "./ContactForm";
import { SITE_EMAIL, SOCIALS } from "@/lib/config";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Medela Learning Support. Book a free call or send us a message.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="relative overflow-hidden px-6 md:px-20 py-18 md:py-20"
        style={{ background: "linear-gradient(270deg, #6a96e0 0%, #80a8eb 100%)" }}
      >
        <div className="absolute -right-20 -top-20 w-[440px] h-[440px] rounded-full border border-blue/[.09] pointer-events-none" />
        <div className="max-w-[1180px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs text-white mb-5 font-medium">
            <Link href="/" className="hover:text-white/80 transition-colors underline-offset-2 hover:underline">Home</Link>
            <span className="text-white/50">/</span>
            Contact
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight max-w-[640px] mb-3.5">
            Get in <span className="text-blue-dark">touch</span>
          </h1>
          <p className="text-base md:text-lg text-white/85 leading-7 max-w-[500px] mb-7">
            Whether you have a question, want to discuss your child&apos;s needs, or just want to say hello. We&apos;d love to hear from you.
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
              The easiest way to start is with a free 15-minute call. No commitment, no pressure, just a conversation about your child.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-pale flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-blue-btn" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-text mb-1">Book a free call</h3>
                  <p className="text-sm text-text-mid leading-relaxed mb-2">
                    A 15-minute call with Rebecca to discuss your child&apos;s needs.
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
            <div className="bg-purple-pale rounded-[var(--radius-lg)] p-6 mb-6">
              <h3 className="text-[15px] font-bold text-purple-dark mb-2">Looking for the Aldeia community?</h3>
              <p className="text-sm text-text-mid leading-relaxed mb-3">
                Join our free parent community &ndash; workshops, WhatsApp group, and fortnightly newsletter.
              </p>
              <Link
                href="/aldeia"
                className="text-sm font-semibold text-purple-dark inline-flex items-center gap-1 border-b-[1.5px] border-purple-light pb-0.5 hover:gap-2 transition-all"
              >
                Explore Aldeia &rarr;
              </Link>
            </div>

            {/* Social links */}
            <div>
              <h3 className="text-[11px] tracking-[.12em] uppercase font-bold text-text-mid mb-3">Follow us</h3>
              <div className="flex flex-col gap-2.5">
                <a href={SOCIALS.medela.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-sm text-text-mid hover:text-text transition-colors group">
                  <span className="w-8 h-8 rounded-lg bg-blue-pale flex items-center justify-center shrink-0 group-hover:bg-blue-pale/80 transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-btn" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </span>
                  <span><span className="font-semibold text-text">Medela</span> on Instagram</span>
                </a>
                <a href={SOCIALS.aldeia.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-sm text-text-mid hover:text-text transition-colors group">
                  <span className="w-8 h-8 rounded-lg bg-purple-pale flex items-center justify-center shrink-0 group-hover:bg-purple-pale/80 transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-purple" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </span>
                  <span><span className="font-semibold text-text">Aldeia</span> on Instagram</span>
                </a>
                <a href={SOCIALS.medela.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-sm text-text-mid hover:text-text transition-colors group">
                  <span className="w-8 h-8 rounded-lg bg-blue-pale flex items-center justify-center shrink-0 group-hover:bg-blue-pale/80 transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-btn" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </span>
                  <span><span className="font-semibold text-text">Medela</span> on Facebook</span>
                </a>
                <a href={SOCIALS.medela.tiktok} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-sm text-text-mid hover:text-text transition-colors group">
                  <span className="w-8 h-8 rounded-lg bg-blue-pale flex items-center justify-center shrink-0 group-hover:bg-blue-pale/80 transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-btn" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                  </span>
                  <span><span className="font-semibold text-text">Medela</span> on TikTok</span>
                </a>
              </div>
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
