"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import { CALENDLY_URL, LOGO_URL } from "@/lib/config";

const links = [
  { href: "/about", label: "About" },
  { href: "/learning-resources", label: "Resources" },
  { href: "/aldeia", label: "Aldeia", aldeia: true },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[200] bg-bg/95 backdrop-blur-[16px] border-b border-blue/[.16] h-[70px] px-6 md:px-12 flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <Image
          src={LOGO_URL}
          alt="Medela Learning"
          width={120}
          height={28}
          className="h-7 w-auto object-contain shrink-0"
          priority
        />
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-6 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className={`text-[13px] font-medium relative pb-0.5 transition-colors
                ${l.aldeia ? "text-purple hover:text-purple-dark" : "text-text-mid hover:text-blue-dark"}
                ${pathname.startsWith(l.href) ? (l.aldeia ? "text-purple-dark" : "text-blue-dark") : ""}
              `}
            >
              <span className="inline-flex items-center gap-1">{l.label}{l.aldeia && <Sparkles className="w-3 h-3" />}</span>
              <span
                className={`absolute bottom-[-2px] left-0 right-0 h-0.5 rounded-sm transition-transform origin-left
                  ${l.aldeia ? "bg-purple" : "bg-blue"}
                  ${pathname.startsWith(l.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                `}
                style={{ transform: pathname.startsWith(l.href) ? "scaleX(1)" : undefined }}
              />
            </Link>
          </li>
        ))}
        <li>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue text-white px-4 py-1.5 rounded-full text-[13px] font-semibold shadow-[var(--shadow-btn)] hover:bg-blue-mid motion-safe:hover:-translate-y-px transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2"
          >
            Book a session &rarr;
          </a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-text transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-text transition-opacity ${open ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-text transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-[70px] left-0 right-0 bg-bg/98 backdrop-blur-xl border-b border-blue/[.16] p-6 flex flex-col gap-4 md:hidden z-[199]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-base font-medium ${l.aldeia ? "text-purple" : "text-text-mid"}`}
            >
              <span className="inline-flex items-center gap-1">{l.label}{l.aldeia && <Sparkles className="w-3.5 h-3.5" />}</span>
            </Link>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue text-white px-5 py-3 rounded-full text-sm font-semibold text-center shadow-[var(--shadow-btn)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2"
          >
            Book a session &rarr;
          </a>
        </div>
      )}
    </nav>
  );
}
