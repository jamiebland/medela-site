"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="bg-white rounded-[var(--radius)] shadow-[var(--shadow-sm)] border border-black/[.04] overflow-hidden"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold text-text cursor-pointer hover:bg-blue-xpale/50 transition-colors"
            >
              <span>{item.question}</span>
              <span
                className="text-blue-btn text-lg font-bold shrink-0 transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </button>
            <div
              className="transition-all duration-300 ease-in-out overflow-hidden"
              style={{ maxHeight: isOpen ? "600px" : "0px" }}
            >
              <div className="px-5 pb-4 text-sm text-text-mid leading-7">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
