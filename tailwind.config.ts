import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Light grounds (marble / plates / daylight) ──────────
        "bayou-cream":        "#F5EFE3",  // primary page background
        "bayou-paper":        "#FBF8F1",  // elevated cards / lighter panels
        "bayou-sand":         "#ECE3D2",  // subtle contrast band on light

        // ── Teal family (the real storefront facade) ────────────
        "bayou-teal":         "#1E4A44",  // primary dark section bg
        "bayou-teal-deep":    "#143430",  // deepest teal (footer)
        "bayou-teal-soft":    "#28564F",  // hover / elevated on teal
        "bayou-ink":          "#243B36",  // primary text on light

        // ── Cobalt (the enamel plate rim — signature accent) ────
        "bayou-cobalt":       "#2B5C9E",
        "bayou-cobalt-light": "#4A7CC0",
        "bayou-cobalt-dim":   "#1F4576",

        // ── Brass (the gold storefront lettering) ───────────────
        "bayou-brass":        "#B68A4E",
        "bayou-brass-light":  "#CBA46A",
        "bayou-brass-dim":    "#8A6836",

        // ── Warm supporting ─────────────────────────────────────
        "bayou-roux":         "#3A2A1E",  // dark warm brown (rare accent)
        "bayou-ember":        "#C44A2E",  // hot-sauce red (heat scale)
        "bayou-terracotta":   "#C97A4A",  // playful warm accent (menu graphics)
        "bayou-stone":        "#6B6B5A",  // muted text on light
        "bayou-sage":         "#A7B3A0",  // muted text on teal

        // ── Semantic aliases ────────────────────────────────────
        bg: {
          primary:   "#F5EFE3",
          paper:     "#FBF8F1",
          sand:      "#ECE3D2",
          teal:      "#1E4A44",
          "teal-deep": "#143430",
        },
        text: {
          primary:   "#243B36",
          muted:     "#6B6B5A",
          "on-teal": "#F5EFE3",
          accent:    "#B68A4E",
          cobalt:    "#2B5C9E",
        },
        accent: {
          DEFAULT: "#B68A4E",
          hover:   "#CBA46A",
          active:  "#8A6836",
          cobalt:  "#2B5C9E",
        },
      },

      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body:    ["var(--font-inter)", "system-ui", "sans-serif"],
        script:  ["var(--font-caveat)", "cursive"],
      },

      fontSize: {
        "display-2xl": ["clamp(3rem, 8vw, 6rem)",     { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-xl":  ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.0",  letterSpacing: "-0.03em" }],
        "display-lg":  ["clamp(2rem, 4.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md":  ["clamp(1.75rem, 3vw, 2.5rem)",{ lineHeight: "1.1",  letterSpacing: "-0.02em" }],
        "display-sm":  ["clamp(1.25rem, 2vw, 2rem)",  { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "body-xl":     ["1.25rem",  { lineHeight: "1.6" }],
        "body-lg":     ["1.125rem", { lineHeight: "1.65" }],
        "body-md":     ["1rem",     { lineHeight: "1.7" }],
        "body-sm":     ["0.875rem", { lineHeight: "1.6" }],
        "body-xs":     ["0.75rem",  { lineHeight: "1.5" }],
        "label-lg":    ["0.75rem",  { lineHeight: "1",   letterSpacing: "0.15em" }],
        "label-sm":    ["0.625rem", { lineHeight: "1",   letterSpacing: "0.2em"  }],
      },

      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "120": "30rem",
        "160": "40rem",
      },

      maxWidth: {
        prose:  "68ch",
        site:   "80rem",
        wide:   "90rem",
      },

      borderRadius: {
        none: "0px",
        sm:   "2px",
        md:   "4px",
        lg:   "8px",
        full: "9999px",
      },

      boxShadow: {
        "glow-brass":   "0 0 24px 0 rgba(182, 138, 78, 0.25)",
        "glow-cobalt":  "0 0 24px 0 rgba(43, 92, 158, 0.22)",
        "glow-ember":   "0 0 16px 0 rgba(196, 74, 46, 0.25)",
        "surface":      "0 6px 28px 0 rgba(36, 59, 54, 0.12)",
        "card":         "0 2px 16px 0 rgba(36, 59, 54, 0.08)",
        "card-hover":   "0 12px 40px 0 rgba(36, 59, 54, 0.16)",
        "depth":        "0 16px 64px 0 rgba(20, 52, 48, 0.45), 0 4px 16px 0 rgba(20, 52, 48, 0.25)",
        "inset-brass":  "inset 0 0 0 1px rgba(182, 138, 78, 0.45)",
        "inset-cobalt": "inset 0 0 0 1px rgba(43, 92, 158, 0.40)",
      },

      keyframes: {
        "draw-line": {
          "0%":   { width: "0%" },
          "100%": { width: "100%" },
        },
        "grain": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%":      { transform: "translate(-2%, -3%)" },
          "20%":      { transform: "translate(3%, 2%)" },
          "30%":      { transform: "translate(-1%, 4%)" },
          "40%":      { transform: "translate(2%, -1%)" },
          "50%":      { transform: "translate(-3%, 2%)" },
          "60%":      { transform: "translate(1%, -2%)" },
          "70%":      { transform: "translate(-2%, 3%)" },
          "80%":      { transform: "translate(3%, -3%)" },
          "90%":      { transform: "translate(-1%, 1%)" },
        },
        "flicker": {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.92" },
          "75%":      { opacity: "0.97" },
        },
        "steam": {
          "0%":   { transform: "translateY(0) scaleX(1)", opacity: "0.6" },
          "50%":  { transform: "translateY(-12px) scaleX(1.1)", opacity: "0.3" },
          "100%": { transform: "translateY(-24px) scaleX(0.9)", opacity: "0" },
        },
      },

      animation: {
        "draw-line": "draw-line 600ms cubic-bezier(0.76, 0, 0.24, 1) forwards",
        "grain":     "grain 0.8s steps(1) infinite",
        "flicker":   "flicker 4s ease-in-out infinite",
        "steam":     "steam 3s ease-out infinite",
      },

      transitionTimingFunction: {
        "out-smooth":  "cubic-bezier(0.22, 1, 0.36, 1)",
        "in-out-slow": "cubic-bezier(0.45, 0, 0.55, 1)",
        "bounce-soft": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "draw-line":   "cubic-bezier(0.76, 0, 0.24, 1)",
      },

      transitionDuration: {
        "50":   "50ms",
        "200":  "200ms",
        "300":  "300ms",
        "500":  "500ms",
        "600":  "600ms",
        "800":  "800ms",
        "1200": "1200ms",
      },
    },
  },
  plugins: [],
};

export default config;
