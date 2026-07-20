// src/components/FooterWordmark.tsx
// Giant footer wordmark — near-black for a crisp, Medio-like finish. Static.

export default function FooterWordmark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none mt-8 select-none px-4 text-center"
    >
      <span className="inline-block pb-[0.14em] font-alice text-[18vw] leading-[0.82] tracking-tight text-navy-deep md:text-[14vw]">
        Vatsalya<span className="text-gold">.</span>
      </span>
    </div>
  );
}
