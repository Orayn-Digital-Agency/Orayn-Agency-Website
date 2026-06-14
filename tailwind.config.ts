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
        "orayn-navy": "#1B2A4A",
        "orayn-gold": "#C49A28",
        "orayn-light": "#EEF2F7",
        "orayn-mid": "#D0D9E8",
        "orayn-text": "#1B2A4A",
        "orayn-gray": "#5A6478",
        "orayn-green": "#1A6B3C",
        "orayn-green-bg": "#E6F4EC",
        "orayn-red": "#8B1A1A",
        "orayn-red-bg": "#FAE8E8",
        "orayn-dark": "#0F1B2D",
        "orayn-darker": "#080F1A",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      borderRadius: {
        sm: "3px",
        orayn: "6px",
        "orayn-card": "10px",
        "orayn-modal": "14px",
      },
      boxShadow: {
        "gold-glow": "0 0 40px rgba(196, 154, 40, 0.18)",
        "card-dark": "0 4px 24px rgba(0,0,0,0.35)",
        "card-light": "0 2px 12px rgba(27,42,74,0.08)",
      },
      backgroundOpacity: {
        "8": "0.08",
      },
    },
  },
  plugins: [],
};

export default config;
