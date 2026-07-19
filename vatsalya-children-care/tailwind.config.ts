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
        "gold-soft": "#D5B376",
        cream: "#FFF4E5",
        "cream-light": "#FFFCF0",
        ink: "#1B2436",
      },
      fontFamily: {
        alice: ["var(--font-alice)", "Georgia", "serif"],
        lora: ["var(--font-lora)", "Georgia", "serif"],
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
