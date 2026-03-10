import Link from "next/link";
import Image from "next/image";
import { CALENDLY_URL, LOGO_URL, SOCIALS } from "@/lib/config";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-text pt-15 pb-7 px-6 md:px-20">
      <div className="max-w-[1180px] mx-auto grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-9 md:gap-13 mb-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="text-[15px] font-bold text-white mb-2.5 flex items-center gap-2 tracking-tight">
            <Image
              src={LOGO_URL}
              alt="Medela Learning"
              width={120}
              height={30}
              className="h-[30px] w-auto object-contain brightness-0 invert shrink-0"
            />
            Medela Learning Support
          </div>
          <p className="text-[13px] text-white/55 leading-7 max-w-[250px] mb-4">
            Educational therapy and learning support for children in Lisbon and across Portugal.
          </p>
          {/* Medela socials */}
          <div className="flex items-center gap-2">
            <a
              href={SOCIALS.medela.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medela on Instagram"
              className="w-8 h-8 rounded-full bg-white/[.08] flex items-center justify-center text-white/60 hover:bg-white/[.16] hover:text-white transition-colors"
            >
              <InstagramIcon />
            </a>
            <a
              href={SOCIALS.medela.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medela on Facebook"
              className="w-8 h-8 rounded-full bg-white/[.08] flex items-center justify-center text-white/60 hover:bg-white/[.16] hover:text-white transition-colors"
            >
              <FacebookIcon />
            </a>
            <a
              href={SOCIALS.medela.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medela on TikTok"
              className="w-8 h-8 rounded-full bg-white/[.08] flex items-center justify-center text-white/60 hover:bg-white/[.16] hover:text-white transition-colors"
            >
              <TikTokIcon />
            </a>
          </div>
        </div>

        {/* Medela */}
        <div>
          <p className="text-[11px] tracking-[.1em] uppercase font-bold text-white/45 mb-3">Medela</p>
          <ul className="flex flex-col gap-2">
            <li><Link href="/about" className="text-sm text-white/65 hover:text-white transition-colors underline-offset-2 hover:underline">About us</Link></li>
            <li><Link href="/learning-resources" className="text-sm text-white/65 hover:text-white transition-colors underline-offset-2 hover:underline">Resources</Link></li>
            <li><a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-white/65 hover:text-white transition-colors underline-offset-2 hover:underline">Book a session</a></li>
            <li><Link href="/contact" className="text-sm text-white/65 hover:text-white transition-colors underline-offset-2 hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Aldeia */}
        <div>
          <p className="text-[11px] tracking-[.1em] uppercase font-bold text-white/45 mb-3">Aldeia</p>
          <ul className="flex flex-col gap-2 mb-4">
            <li><Link href="/aldeia" className="text-sm text-white/65 hover:text-white transition-colors underline-offset-2 hover:underline">Community</Link></li>
            <li><Link href="/aldeia#workshops" className="text-sm text-white/65 hover:text-white transition-colors underline-offset-2 hover:underline">Workshops</Link></li>
            <li><Link href="/blog" className="text-sm text-white/65 hover:text-white transition-colors underline-offset-2 hover:underline">Blog</Link></li>
          </ul>
          {/* Aldeia Instagram */}
          <a
            href={SOCIALS.aldeia.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Aldeia on Instagram"
            className="inline-flex items-center gap-1.5 text-[12px] text-white/60 hover:text-white transition-colors"
          >
            <InstagramIcon />
            @aldeia_parent_community
          </a>
        </div>

        {/* Resources */}
        <div>
          <p className="text-[11px] tracking-[.1em] uppercase font-bold text-white/45 mb-3">Resources</p>
          <ul className="flex flex-col gap-2">
            <li><Link href="/learning-resources" className="text-sm text-white/65 hover:text-white transition-colors underline-offset-2 hover:underline">Grade 1</Link></li>
            <li><Link href="/learning-resources" className="text-sm text-white/65 hover:text-white transition-colors underline-offset-2 hover:underline">Grade 2</Link></li>
            <li><Link href="/learning-resources" className="text-sm text-white/65 hover:text-white transition-colors underline-offset-2 hover:underline">Grade 3</Link></li>
            <li><Link href="/learning-resources" className="text-sm text-white/65 hover:text-white transition-colors underline-offset-2 hover:underline">Grade 4</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto pt-4 border-t border-white/[.07] flex justify-between items-center flex-wrap gap-2">
        <p className="text-xs text-white/45">&copy; 2026 Medela Learning Support. All rights reserved.</p>
        <p className="text-xs text-white/55">
          An <Link href="/aldeia" className="text-purple-light hover:text-white underline underline-offset-2 transition-colors">Aldeia</Link> initiative
        </p>
      </div>
    </footer>
  );
}
