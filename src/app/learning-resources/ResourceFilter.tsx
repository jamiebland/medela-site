"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Snowflake, Leaf, Sun } from "lucide-react";

/* ── Resource data ────────────────────────────────────────── */

interface Resource {
  title: string;
  subtitle: string;
  grade: string;       // "1" | "2" | "3" | "4" | "bundle"
  gradeLabel: string;
  season: string;
  year: number;
  price: string;
  originalPrice?: string;
  includes: string[];
  coverBg: string;
  coverEmoji: React.ReactNode;
  badge?: { text: string; style: string };
  buyLabel: string;
  buyUrl: string;
  coverImage?: string;
}

const resources: Resource[] = [
  // ── Grade 1 ──
  {
    title: "Grade 1 Winter Activity Pack",
    subtitle: "Maths, English, Science & Geography \u2014 all in a winter theme your child will love.",
    grade: "1", gradeLabel: "Grade 1", season: "Winter", year: 2026,
    price: "\u20ac35",
    includes: ["30+ activity pages", "Full answer booklet", "Instant PDF download"],
    coverBg: "bg-gradient-to-br from-[#d4e8fb] to-[#b8d3f5]", coverEmoji: <Snowflake className="w-12 h-12 text-blue-dark/40" />,
    coverImage: "/images/resources/winter-grade1-cover.png",
    badge: { text: "New", style: "bg-blue-btn text-white" },
    buyLabel: "Buy now", buyUrl: "https://medelalearning.sellfy.store/p/coming-soon-winter-2025-activity-booklet-grade-2-hyjztx/",
  },
  {
    title: "Grade 1 Fall Learning Programme",
    subtitle: "Autumn-themed cross-curricular activities to keep learning going through the season.",
    grade: "1", gradeLabel: "Grade 1", season: "Fall", year: 2025,
    price: "\u20ac29.99",
    includes: ["30+ activity pages", "Full answer booklet", "Instant PDF download"],
    coverBg: "bg-gradient-to-br from-[#fde8d0] to-[#f5c898]", coverEmoji: <Leaf className="w-12 h-12 text-blue-dark/40" />,
    coverImage: "/images/resources/fall-grade1-cover.png",
    badge: { text: "Popular", style: "bg-amber text-[#5a3800]" },
    buyLabel: "Buy now", buyUrl: "https://medelalearning.sellfy.store/p/fall-2025-programme-grade-1-mkxnwp/",
  },
  // ── Grade 2 ──
  {
    title: "Grade 2 Winter Activity Pack",
    subtitle: "A step up from Grade 1 \u2014 richer vocabulary, more complex Maths, same engaging theme.",
    grade: "2", gradeLabel: "Grade 2", season: "Winter", year: 2026,
    price: "\u20ac35",
    includes: ["32+ activity pages", "Full answer booklet", "Instant PDF download"],
    coverBg: "bg-gradient-to-br from-[#d4e8fb] to-[#b8d3f5]", coverEmoji: <Snowflake className="w-12 h-12 text-blue-dark/40" />,
    coverImage: "/images/resources/winter-grade2-cover.png",
    badge: { text: "New", style: "bg-blue-btn text-white" },
    buyLabel: "Buy now", buyUrl: "https://medelalearning.sellfy.store/p/winter-2025-activity-pack-grade-2-0qzwhg/",
  },
  {
    title: "Grade 2 Fall Activity Pack",
    subtitle: "Our most popular Grade 2 pack \u2014 teachers and parents love the balance of challenge and accessibility.",
    grade: "2", gradeLabel: "Grade 2", season: "Fall", year: 2025,
    price: "\u20ac29.99",
    includes: ["32+ activity pages", "Full answer booklet", "Instant PDF download"],
    coverBg: "bg-gradient-to-br from-[#fde8d0] to-[#f5c898]", coverEmoji: <Leaf className="w-12 h-12 text-blue-dark/40" />,
    coverImage: "/images/resources/fall-grade2-cover.png",
    badge: { text: "Bestseller", style: "bg-[#3db87a] text-white" },
    buyLabel: "Buy now", buyUrl: "https://medelalearning.sellfy.store/p/fall-2025-programme-grade-2/",
  },
  // ── Grade 3 ──
  {
    title: "Grade 3 Fall Activity Pack",
    subtitle: "A favourite for parents helping children settle into the demands of Grade 3 after summer.",
    grade: "3", gradeLabel: "Grade 3", season: "Fall", year: 2025,
    price: "\u20ac29.99",
    includes: ["34+ activity pages", "Full answer booklet", "Instant PDF download"],
    coverBg: "bg-gradient-to-br from-[#fde8d0] to-[#f5c898]", coverEmoji: <Leaf className="w-12 h-12 text-blue-dark/40" />,
    coverImage: "/images/resources/fall-grade3-cover.png",
    buyLabel: "Buy now", buyUrl: "https://medelalearning.sellfy.store/p/fall-2025-programme-grade-3-x5v8wc/",
  },
  {
    title: "Grade 3 Summer Programme \u2014 Week 1",
    subtitle: "Keep the Grade 3 momentum going over summer \u2014 structured enough to matter, fun enough to use.",
    grade: "3", gradeLabel: "Grade 3", season: "Summer", year: 2025,
    price: "\u20ac39.99",
    includes: ["Full activity pack", "Full answer booklet", "Instant PDF download"],
    coverBg: "bg-gradient-to-br from-[#d0f5e8] to-[#a8e8d0]", coverEmoji: <Sun className="w-12 h-12 text-blue-dark/40" />,
    coverImage: "/images/resources/summer-grade3-cover.png",
    buyLabel: "Buy now", buyUrl: "https://medelalearning.sellfy.store/p/2025-summer-programme-for-grade-3-students-otubmt-week-1/",
  },
  {
    title: "Grade 3 Summer Programme \u2014 Week 2",
    subtitle: "Continue the Grade 3 summer learning with a fresh set of activities for week two.",
    grade: "3", gradeLabel: "Grade 3", season: "Summer", year: 2025,
    price: "\u20ac39.99",
    includes: ["Full activity pack", "Full answer booklet", "Instant PDF download"],
    coverBg: "bg-gradient-to-br from-[#d0f5e8] to-[#a8e8d0]", coverEmoji: <Sun className="w-12 h-12 text-blue-dark/40" />,
    buyLabel: "Buy now", buyUrl: "https://medelalearning.sellfy.store/p/2025-summer-programme-for-grade-3-students-week-2/",
  },
  // ── Grade 4 ──
  {
    title: "Grade 4 Fall Activity Pack",
    subtitle: "Bridge the summer gap and consolidate the skills needed for a strong Grade 4 year.",
    grade: "4", gradeLabel: "Grade 4", season: "Fall", year: 2025,
    price: "\u20ac29.99",
    includes: ["36+ activity pages", "Full answer booklet", "Instant PDF download"],
    coverBg: "bg-gradient-to-br from-[#fde8d0] to-[#f5c898]", coverEmoji: <Leaf className="w-12 h-12 text-blue-dark/40" />,
    coverImage: "/images/resources/fall-grade4-cover.png",
    buyLabel: "Buy now", buyUrl: "https://medelalearning.sellfy.store/p/fall-2025-programme-grade-4-ph7pqq/",
  },
  {
    title: "Grade 4 Summer Programme \u2014 Week 1",
    subtitle: "For children heading into Grade 4 who want to feel ready and confident from day one.",
    grade: "4", gradeLabel: "Grade 4", season: "Summer", year: 2025,
    price: "\u20ac39.99",
    includes: ["Full activity pack", "Full answer booklet", "Instant PDF download"],
    coverBg: "bg-gradient-to-br from-[#d0f5e8] to-[#a8e8d0]", coverEmoji: <Sun className="w-12 h-12 text-blue-dark/40" />,
    coverImage: "/images/resources/summer-grade4-cover.png",
    buyLabel: "Buy now", buyUrl: "https://medelalearning.sellfy.store/p/2025-summer-programme-for-grade-4-students-70usou-week-1/",
  },
  {
    title: "Grade 4 Summer Programme \u2014 Week 2",
    subtitle: "Continue the Grade 4 summer learning with a fresh set of activities for week two.",
    grade: "4", gradeLabel: "Grade 4", season: "Summer", year: 2025,
    price: "\u20ac39.99",
    includes: ["Full activity pack", "Full answer booklet", "Instant PDF download"],
    coverBg: "bg-gradient-to-br from-[#d0f5e8] to-[#a8e8d0]", coverEmoji: <Sun className="w-12 h-12 text-blue-dark/40" />,
    buyLabel: "Buy now", buyUrl: "https://medelalearning.sellfy.store/p/2025-summer-programme-for-grade-4-students-week-2/",
  },
];

/* ── Filter tabs config ─────────────────────────────────── */

const tabs = [
  { key: "all", label: "All packs", count: 10 },
  { key: "1",   label: "Grade 1",   count: 2 },
  { key: "2",   label: "Grade 2",   count: 2 },
  { key: "3",   label: "Grade 3",   count: 3 },
  { key: "4",   label: "Grade 4",   count: 3 },
];

/* ── Grade section groups (for labelled grid sections) ──── */

const gradeSections = [
  { grade: "1", label: "Grade 1" },
  { grade: "2", label: "Grade 2" },
  { grade: "3", label: "Grade 3" },
  { grade: "4", label: "Grade 4" },
];

/* ── Components ──────────────────────────────────────────── */

function ProductCard({ r, delay = 0 }: { r: Resource; delay?: number }) {
  return (
    <RevealOnScroll delay={delay}>
      <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-[5px] hover:shadow-[var(--shadow)] group h-full">
        {/* Cover */}
        <div className={`h-[220px] relative overflow-hidden flex items-center justify-center ${r.coverBg}`}>
          {r.coverImage ? (
            <Image
              src={r.coverImage}
              alt={r.title}
              fill
              className="object-cover transition-transform duration-400 group-hover:scale-[1.04]"
            />
          ) : (
            r.coverEmoji
          )}
          {r.badge && (
            <span className={`absolute top-3 left-3 z-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-[.06em] uppercase ${r.badge.style}`}>
              {r.badge.text}
            </span>
          )}
          <span className="absolute top-3 right-3 z-2 bg-white/[.88] backdrop-blur-sm border border-blue/20 px-2.5 py-1 rounded-full text-[10px] font-bold text-blue-dark tracking-[.04em]">
            {r.gradeLabel}
          </span>
        </div>

        {/* Body */}
        <div className="px-5 pt-5 pb-[22px] flex-1 flex flex-col">
          <div className="text-[11px] text-text-light mb-1.5 uppercase tracking-[.06em] font-semibold">
            {r.season} &middot; {r.grade === "bundle" ? r.gradeLabel : r.year}
          </div>
          <div className="text-[15px] font-bold text-text leading-[1.3] mb-1.5 tracking-tight">
            {r.title}
          </div>
          <div className="text-[13px] text-text-mid leading-[1.6] mb-3.5 flex-1">
            {r.subtitle}
          </div>
          <div className="flex flex-col gap-1.5 mb-4">
            {r.includes.map((inc) => (
              <div key={inc} className="flex items-center gap-2 text-xs text-text-mid">
                <span className="text-[#3db87a] font-bold text-[11px] shrink-0">{"\u2713"}</span>
                {inc}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between gap-2.5 pt-3.5 border-t border-blue/10 mt-auto">
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-extrabold text-text tracking-tight">{r.price}</span>
              {r.originalPrice && (
                <span className="text-[13px] text-text-light line-through">{r.originalPrice}</span>
              )}
            </div>
            <a
              href={r.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-[18px] py-[9px] rounded-full text-[13px] font-semibold text-white whitespace-nowrap transition-all duration-200 hover:-translate-y-px bg-blue-btn shadow-[var(--shadow-btn)] hover:bg-blue-hover"
            >
              {r.buyLabel} &rarr;
            </a>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default function ResourceFilter() {
  const [active, setActive] = useState("all");

  return (
    <>
      {/* ── Filter bar ─────────────────────────────────── */}
      <div className="bg-white border-b border-blue/[.14] sticky top-[68px] z-[100] px-6 md:px-20">
        <div className="max-w-[1180px] mx-auto flex items-center justify-between">
          <div className="flex items-center overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`px-5 py-[18px] text-sm font-semibold whitespace-nowrap relative cursor-pointer transition-colors bg-transparent border-none ${
                  active === tab.key ? "text-blue-dark" : "text-text-light hover:text-blue-dark"
                }`}
              >
                {tab.label}
                <span
                  className={`inline-flex items-center justify-center w-[18px] h-[18px] rounded-full text-[10px] font-bold ml-1.5 ${
                    active === tab.key
                      ? "bg-blue-btn text-white"
                      : "bg-blue-pale text-blue-btn"
                  }`}
                >
                  {tab.count}
                </span>
                <span
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-blue-btn rounded-t-sm transition-transform origin-center ${
                    active === tab.key ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="text-[13px] text-text-light whitespace-nowrap hidden md:block">
            Instant download &middot; PDF format
          </div>
        </div>
      </div>

      {/* ── Product grid ───────────────────────────────── */}
      <div className="max-w-[1180px] mx-auto px-6 md:px-20 py-13 md:py-[52px]">
        {/* Grade sections */}
        {gradeSections.map((section) => {
          const sectionResources = resources.filter((r) => r.grade === section.grade);
          const isVisible =
            active === "all" || active === section.grade;

          if (!isVisible) return null;

          return (
            <div key={section.grade} className="mb-12">
              <div className="flex items-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-blue-btn mb-[22px]">
                <span className="block w-[18px] h-0.5 bg-blue rounded-sm" />
                {section.label}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {sectionResources.map((r, i) => (
                  <ProductCard key={r.title} r={r} delay={i % 3} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
