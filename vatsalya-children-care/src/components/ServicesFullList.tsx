// src/components/ServicesFullList.tsx
"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { NAP } from "./brand";

/**
 * Full, crawlable list of every service as animated cards (staggered fade-up).
 * Complements the interactive homepage grid, which only reveals one service at
 * a time — here all descriptions are present in the DOM for SEO and for users
 * who want to scan everything at once.
 */
export default function ServicesFullList() {
  return (
    <section
      aria-label="All services"
      className="bg-cream px-4 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 md:mb-14">
          <p className="mb-3 font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-gold-ink">
            Everything We Offer
          </p>
          <h2 className="font-alice text-3xl text-navy-deep md:text-4xl">
            Complete{" "}
            <span className="font-lora italic text-gold-ink">Care.</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <m.article
                key={service.slug}
                id={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="group flex scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-gold/20 bg-cream-light shadow-sm transition-shadow hover:shadow-lg hover:shadow-navy/5"
              >
                {service.image && (
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 text-navy">
                    <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.5} />
                  </span>
                  <h3 className="font-alice text-xl leading-tight text-navy-deep">
                    {service.title}
                  </h3>
                  <p className="mt-1 font-lora text-xs italic text-gold-ink">
                    {service.subtitle}
                  </p>
                  <p className="mt-3 flex-1 font-poppins text-sm leading-relaxed text-ink/75">
                    {service.description}
                  </p>
                  <a
                    href={NAP.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 font-poppins text-sm font-semibold text-navy transition-colors hover:text-gold"
                  >
                    Book this service
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </m.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
