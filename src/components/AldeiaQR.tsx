"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

import { WHATSAPP_URL } from "@/lib/config";

export default function AldeiaQR({ fullWidth = false, theme = "dark" }: { fullWidth?: boolean; theme?: "dark" | "light" }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {fullWidth ? (
        /* Wide banner version */
        <button
          onClick={() => setOpen(true)}
          className={`w-full flex items-center gap-5 rounded-xl p-4 transition-colors cursor-pointer text-left ${
            theme === "light"
              ? "bg-purple border border-purple hover:bg-purple-mid"
              : "bg-white/[.13] border border-purple/[.35] hover:bg-white/[.18]"
          }`}
          aria-label="Expand QR code"
        >
          <Image
            src="/images/image-whatsapp-qr.png"
            alt="WhatsApp QR code"
            width={72}
            height={72}
            className="rounded-md shrink-0"
          />
          <div className="flex-1">
            <p className="text-sm font-bold text-white mb-1">Join our WhatsApp community</p>
            <p className="text-[12px] text-white/70 leading-5">Scan the QR code or click to open WhatsApp and join the Aldeia parent group.</p>
          </div>
          <span className="text-[11px] text-white/60 shrink-0 pr-1">Click to expand →</span>
        </button>
      ) : (
        /* Thumbnail version */
        <button
          onClick={() => setOpen(true)}
          className="shrink-0 flex flex-col items-center gap-2 bg-white/10 border border-white/20 rounded-[var(--radius)] p-2 hover:bg-white/20 transition-colors cursor-pointer"
          aria-label="Expand QR code"
        >
          <Image
            src="/images/image-whatsapp-qr.png"
            alt="WhatsApp QR code"
            width={120}
            height={120}
            className="rounded-md"
          />
          <p className="text-[11px] text-white/60 text-center leading-4">
            Click to view<br />QR code
          </p>
        </button>
      )}

      {/* Lightbox — shared by both variants, rendered via portal to escape any transform stacking context */}
      {open && createPortal(
        <div
          className="fixed inset-0 z-[500] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-white rounded-[var(--radius-lg)] p-8 mx-6 max-w-md w-full flex flex-col items-center gap-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors text-xl leading-none"
              aria-label="Close"
            >
              ✕
            </button>

            <h3 className="text-[17px] font-extrabold text-text text-center">
              Join the Aldeia Community
            </h3>
            <p className="text-[13px] text-text-mid text-center leading-5">
              Open WhatsApp and scan this QR code to join our parent community group.
            </p>

            <Image
              src="/images/image-whatsapp-qr.png"
              alt="WhatsApp QR code — scan to join Aldeia community"
              width={340}
              height={340}
              className="rounded-lg"
            />

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#1ebe5d] hover:-translate-y-0.5 transition-all"
            >
              Open WhatsApp &rarr;
            </a>
          </div>
        </div>
      , document.body)}
    </>
  );
}
