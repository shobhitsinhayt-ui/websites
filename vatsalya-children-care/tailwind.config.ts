// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0E2753",
        "navy-deep": "#001E51",
        gold: "#C29138",
        // Deeper gold for text/icons on cream backgrounds — meets WCAG AA
        // (>=4.5:1 on cream and cream-light). Bright `gold` stays for fills,
        // borders, and text on navy.
        "gold-ink": "#8A5E12",
        "gold-soft": "#D5B376",
        cream: "#FFF4E5",
        "cream-light": "#FFFCF0",
        ink: "#1B2436",
      },
      fontFamily: {
        // alice = Libre Caslon Text (headings), lora = same serif for italic accents,
        // poppins = Inter (body). Names kept stable so components need no changes.
        alice: ["var(--font-alice)", "Georgia", "serif"],
        lora: ["var(--font-alice)", "Georgia", "serif"],
        poppins: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
