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
  email,
  bio,
  accentClass = "text-blue-btn",
}: TeamMemberModalProps) {
  const [open, setOpen] = useState(false);

  const modal = open ? createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(4px)",
        padding: "24px",
      }}
      onClick={() => setOpen(false)}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "white",
          borderRadius: "18px",
          boxShadow: "0 24px 80px rgba(0,0,0,0.25)",
          width: "min(820px, 100%)",
          display: "flex",
          overflow: "hidden",
          maxHeight: "90vh",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            zIndex: 10,
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "rgba(0,0,0,0.25)",
            border: "none",
            color: "white",
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Image — left column */}
        <div style={{ position: "relative", width: 260, flexShrink: 0 }}>
          <Image
            src={modalImage ?? image}
            alt={name}
            fill
            className="object-cover object-top"
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)" }} />
        </div>

        {/* Content — right column */}
        <div style={{ flex: 1, padding: "40px 40px 36px", display: "flex", flexDirection: "column", gap: 0 }}>
          <h3 style={{ fontSize: 22, fontWeight: 800, color: "var(--color-text)", margin: "0 0 4px" }}>{name}</h3>
          <p className={`text-[13px] font-semibold mb-6 ${accentClass}`}>{title}</p>

          <div className="space-y-3 text-[14px] text-text-mid leading-7 flex-1">
            {bio}
          </div>

          {/* Get in contact */}
          <div style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid rgba(0,0,0,0.07)" }}>
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
        className="cursor-pointer"
      >
        {children}
      </div>
      {modal}
    </>
  );
}
