// src/components/FooterWordmark.tsx
// Giant footer wordmark — near-black for a crisp, Medio-like finish. Static.

export default function FooterWordmark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none mt-8 select-none px-4 text-center"
    >
      <span className="inline-block pb-[0.06em] font-poppins text-[20vw] font-bold leading-[0.85] tracking-tight text-[#0a1526] md:text-[16vw]">
        Vatsalya.
      </span>
    </div>
  );
}
