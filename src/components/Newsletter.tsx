"use client";

import { useState } from "react";

function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="p-4 bg-white/[.14] rounded-[var(--radius)] border border-white/[.24] text-center">
        <p className="text-white text-[15px] font-medium">
          You&apos;re in! Check your inbox for a welcome from the Medela team!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <label htmlFor="newsletter-name" className="sr-only">Your name</label>
      <input
        id="newsletter-name"
        type="text"
        name="name"
        placeholder="Your name"
        required
        className="px-4 py-3 rounded-full bg-white/[.14] border border-white/20 text-white text-sm outline-none w-full placeholder:text-white/[.55] focus:bg-white/20 focus:border-white/[.45] transition-all"
      />
      <div className="flex gap-2">
        <label htmlFor="newsletter-email" className="sr-only">Your email address</label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          placeholder="Your email address"
          required
          className="flex-1 min-w-0 px-4 py-3 rounded-full bg-white/[.14] border border-white/20 text-white text-sm outline-none placeholder:text-white/[.55] focus:bg-white/20 focus:border-white/[.45] transition-all"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-white text-blue-btn px-5 py-3 rounded-full text-sm font-bold hover:bg-blue-xpale transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-btn disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Subscribe \u2192"}
        </button>
      </div>
      {status === "error" && (
        <p className="text-[11px] text-red-300">Something went wrong. Please try again.</p>
      )}
      <p className="text-[11px] text-white/70">No spam. Unsubscribe any time.</p>
    </form>
  );
}

export { NewsletterForm };

export default function Newsletter() {
  return (
    <section className="bg-blue-mid py-18 px-6 md:px-20">
      <div className="max-w-[1180px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-2 text-[11px] tracking-[.12em] uppercase font-bold text-white/60 mb-2.5">
            <span className="block w-[18px] h-0.5 bg-white/40 rounded-sm" />
            Stay connected
          </div>
          <h2 className="text-2xl md:text-[32px] font-extrabold text-white leading-[1.15] tracking-tight mb-2">
            One useful thing, once a month
          </h2>
          <p className="text-[15px] text-white/80 leading-7">
            Practical tips, new resource launches, and community updates, straight to your inbox from Medela
          </p>
        </div>
        <div>
          <ul className="flex flex-col gap-2 mb-4 list-none">
            <li className="flex items-center gap-2 text-sm text-white/85">
              <span className="text-blue-light font-bold" aria-hidden="true">&rarr;</span>
              Practical tips you can use with your child this week
            </li>
            <li className="flex items-center gap-2 text-sm text-white/85">
              <span className="text-blue-light font-bold" aria-hidden="true">&rarr;</span>
              Early access to new resources and learning packs
            </li>
            <li className="flex items-center gap-2 text-sm text-white/85">
              <span className="text-blue-light font-bold" aria-hidden="true">&rarr;</span>
              Aldeia workshop announcements &amp; community news
            </li>
          </ul>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
