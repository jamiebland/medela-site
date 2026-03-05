"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/about", label: "About" },
    { href: "/learning-resources", label: "Resources" },
    { href: "/aldeia", label: "Aldeia \u2726", aldeia: true },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-[200] bg-bg/95 backdrop-blur-[16px] border-b border-blue/[.16] h-[70px] px-6 md:px-12 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2.5 text-[15px] font-bold text-blue-dark tracking-tight">
        <div className="w-9 h-9 rounded-[9px] bg-blue-btn flex items-center justify-center shrink-0">
          <span className="text-[16px] font-extrabold text-white">M</span>
        </div>
        Medela Learning
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-6 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className={`text-sm font-medium relative pb-0.5 transition-colors
                ${l.aldeia ? "text-purple hover:text-purple-dark" : "text-text-mid hover:text-blue-dark"}
                ${pathname.startsWith(l.href) ? (l.aldeia ? "text-purple-dark" : "text-blue-dark") : ""}
              `}
            >
              {l.label}
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
            href="https://calendly.com/medelalearnings"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-btn text-white px-5 py-2 rounded-full text-sm font-semibold shadow-[var(--shadow-btn)] hover:bg-blue-hover hover:-translate-y-px transition-all"
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
              {l.label}
            </Link>
          ))}
          <a
            href="https://calendly.com/medelalearnings"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-btn text-white px-5 py-3 rounded-full text-sm font-semibold text-center shadow-[var(--shadow-btn)]"
          >
            Book a session &rarr;
          </a>
        </div>
      )}
    </nav>
  );
}
