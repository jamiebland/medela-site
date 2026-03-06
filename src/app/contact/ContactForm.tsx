"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { SITE_EMAIL } from "@/lib/config";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${SITE_EMAIL}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-white rounded-[var(--radius-lg)] p-8 shadow-[var(--shadow)] h-fit">
        <div className="text-center py-8">
          <div className="mb-3 flex justify-center"><Mail className="w-9 h-9 text-blue-btn" /></div>
          <h3 className="text-lg font-bold text-text mb-1">Message sent!</h3>
          <p className="text-sm text-text-mid">We&apos;ll get back to you within 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[var(--radius-lg)] p-8 shadow-[var(--shadow)] h-fit">
      <h3 className="text-lg font-bold text-text mb-1 tracking-tight">Send us a message</h3>
      <p className="text-sm text-text-mid mb-6">We&apos;ll get back to you within 24 hours.</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" name="_honey" className="hidden" />
        <input type="hidden" name="_template" value="table" />
        <div>
          <label className="text-xs font-semibold text-text-mid uppercase tracking-wider mb-1.5 block">Your name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl border border-blue-light/50 text-sm outline-none focus:border-blue-btn transition-colors bg-bg"
            placeholder="Full name"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-text-mid uppercase tracking-wider mb-1.5 block">Email address</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-xl border border-blue-light/50 text-sm outline-none focus:border-blue-btn transition-colors bg-bg"
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-text-mid uppercase tracking-wider mb-1.5 block">Subject</label>
          <select
            name="subject"
            className="w-full px-4 py-3 rounded-xl border border-blue-light/50 text-sm outline-none focus:border-blue-btn transition-colors bg-bg text-text-mid"
          >
            <option>General enquiry</option>
            <option>One-to-one sessions</option>
            <option>Learning resources</option>
            <option>School liaison</option>
            <option>Aldeia community</option>
            <option>Partnership</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold text-text-mid uppercase tracking-wider mb-1.5 block">Message</label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full px-4 py-3 rounded-xl border border-blue-light/50 text-sm outline-none focus:border-blue-btn transition-colors bg-bg resize-none"
            placeholder="Tell us a bit about your child and how we can help..."
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-blue-btn text-white px-6 py-3 rounded-full text-sm font-bold shadow-[var(--shadow-btn)] hover:bg-blue-hover hover:-translate-y-0.5 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send message \u2192"}
        </button>
        {status === "error" && (
          <p className="text-sm text-red-600">Something went wrong. Please try again or email us directly.</p>
        )}
        <p className="text-[11px] text-text-light">We respect your privacy and will never share your information.</p>
      </form>
    </div>
  );
}
