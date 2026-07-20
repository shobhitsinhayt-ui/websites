// src/components/ContactForm.tsx
"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { NAP } from "./brand";

const FIELD =
  "w-full border-0 border-b border-white/30 bg-transparent px-0 py-2.5 font-poppins text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none focus:ring-0";
const LABEL =
  "block font-poppins text-xs font-semibold uppercase tracking-wide text-gold-soft";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "Hello Vatsalya Children Care, I'd like to get in touch.",
      "",
      `Name: ${form.name}`,
      form.phone && `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.subject && `Subject: ${form.subject}`,
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/919016039796?text=${encodeURIComponent(lines)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="rounded-3xl bg-navy p-6 md:p-10">
      <h2 className="font-alice text-2xl leading-tight text-white md:text-3xl">
        We&apos;ll be in touch within a few hours!
      </h2>
      <p className="mt-2 font-poppins text-sm text-white/60">
        Submitting opens WhatsApp with your details ready to send to{" "}
        {NAP.phone}.
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-6">
        <div>
          <label htmlFor="name" className={LABEL}>
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={onChange}
            placeholder="Your name"
            className={FIELD}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className={LABEL}>
              Phone Number *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={onChange}
              placeholder="+91 …"
              className={FIELD}
            />
          </div>
          <div>
            <label htmlFor="email" className={LABEL}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="you@email.com"
              className={FIELD}
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className={LABEL}>
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            value={form.subject}
            onChange={onChange}
            placeholder="e.g. Newborn consultation"
            className={FIELD}
          />
        </div>

        <div>
          <label htmlFor="message" className={LABEL}>
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={onChange}
            placeholder="How can we help you and your child?"
            className={`${FIELD} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="group inline-flex items-center gap-3 rounded-full bg-cream py-2 pl-6 pr-2 font-poppins text-sm font-semibold text-navy-deep shadow-md transition-transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-gold/40"
        >
          Send on WhatsApp
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-navy transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </button>
      </form>
    </div>
  );
}
