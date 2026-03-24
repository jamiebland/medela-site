"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface TeamMemberModalProps {
  children: React.ReactNode;
  name: string;
  title: string;
  image: string;
  modalImage?: string;
  mobileModalImage?: string;
  email: string;
  bio: React.ReactNode;
  accentClass?: string;
}

export default function TeamMemberModal({
  children,
  name,
  title,
  image,
  modalImage,
  mobileModalImage,
  email,
  bio,
  accentClass = "text-blue-btn",
}: TeamMemberModalProps) {
  const [open, setOpen] = useState(false);

  const modal = open ? createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center sm:p-6 bg-black/60 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative bg-white w-full sm:w-auto sm:min-w-[min(820px,100%)] rounded-t-[20px] sm:rounded-[18px] shadow-[0_24px_80px_rgba(0,0,0,0.25)] flex flex-col sm:flex-row overflow-hidden max-h-[92dvh] sm:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/25 border-none text-white text-sm font-bold cursor-pointer flex items-center justify-center hover:bg-black/40 transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Image — hidden on mobile, left column on desktop */}
        <div className="relative hidden sm:block w-full h-[220px] shrink-0 sm:w-[260px] sm:h-auto">
          {mobileModalImage && (
            <div className="absolute inset-0 sm:hidden">
              <Image
                src={mobileModalImage}
                alt={name}
                fill
                className="object-cover object-top"
              />
            </div>
          )}
          <div className={`absolute inset-0 ${mobileModalImage ? "hidden sm:block" : ""}`}>
            <Image
              src={modalImage ?? image}
              alt={name}
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)" }} />
        </div>

        {/* Content — scrollable */}
        <div className="flex-1 flex flex-col overflow-y-auto px-6 py-7 sm:px-10 sm:py-10 gap-0">
          <h3 className="text-[22px] font-extrabold text-text mb-1">{name}</h3>
          <p className={`text-[13px] font-semibold mb-6 ${accentClass}`}>{title}</p>

          <div className="space-y-3 text-[14px] text-text-mid leading-7 flex-1">
            {bio}
          </div>

          {/* Get in contact */}
          <div className="mt-8 pt-5 border-t border-black/[.07]">
            <p className="text-[11px] text-text-light uppercase tracking-[.1em] font-bold mb-3">
              Get in contact
            </p>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 bg-blue-pale text-blue-btn text-[14px] font-semibold px-5 py-2.5 rounded-full hover:bg-blue hover:text-white transition-colors"
            >
              {email} &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      <div
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) return;
          setOpen(true);
        }}
        className="cursor-pointer h-full"
      >
        {children}
      </div>
      {modal}
    </>
  );
}
