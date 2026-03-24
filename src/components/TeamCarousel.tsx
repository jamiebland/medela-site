"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TeamCarousel({ items }: { items: React.ReactNode[] }) {
  const [page, setPage] = useState(0);
  const perPage = 2;
  const totalPages = Math.ceil(items.length / perPage);
  const visible = items.slice(page * perPage, page * perPage + perPage);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {visible.map((item, i) => (
          <div key={i} className="h-full">
            {item}
          </div>
        ))}
        {visible.length < perPage && <div className="hidden md:block" />}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="Previous team members"
            className="w-10 h-10 rounded-full border-2 border-[#c8d9f0] flex items-center justify-center text-blue-btn disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-pale transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2 items-center">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`rounded-full transition-all duration-200 ${
                  i === page
                    ? "bg-blue-btn w-5 h-2"
                    : "bg-[#c8d9f0] w-2 h-2 hover:bg-blue-btn/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            aria-label="Next team members"
            className="w-10 h-10 rounded-full border-2 border-[#c8d9f0] flex items-center justify-center text-blue-btn disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-pale transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
