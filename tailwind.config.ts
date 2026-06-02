import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050505",
        ink: "#0a0a0a",
        smoke: "#141414",
        ash: "#1c1c1c",
        chrome: "#c8c8c8",
        silver: "#e8e8e8",
        pearl: "#f5f5f5",
        accent: {
          DEFAULT: "#a8a8a8",
          glow: "rgba(200, 200, 200, 0.15)",
        },
      },
      fontFamily: {
        display: ["Cinzel", "Georgia", "Times New Roman", "serif"],
        sans: ["DM Sans", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(180, 180, 180, 0.12), transparent)",
        "card-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%, rgba(255,255,255,0.02) 100%)",
        "chrome-text":
          "linear-gradient(180deg, #ffffff 0%, #b8b8b8 45%, #6a6a6a 100%)",
      },
      boxShadow: {
        glow: "0 0 60px rgba(200, 200, 200, 0.08)",
        "glow-sm": "0 0 30px rgba(200, 200, 200, 0.06)",
        card: "0 4px 24px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
