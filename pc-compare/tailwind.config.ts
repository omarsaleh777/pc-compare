import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Stitch Design System Colors ──────────────────────────────────────
      colors: {
        // Surfaces (darkest → brightest)
        "surface-dim":              "#131313",
        "surface":                  "#131313",
        "surface-container-lowest": "#0e0e0e",
        "surface-container-low":    "#1b1c1c",
        "surface-container":        "#1f2020",
        "surface-container-high":   "#2a2a2a",
        "surface-container-highest":"#353535",
        "surface-bright":           "#393939",
        "surface-variant":          "#353535",
        "surface-tint":             "#a5c8ff",

        // Content on surfaces
        "on-surface":         "#e4e2e1",
        "on-surface-variant": "#c0c7d6",
        "on-background":      "#e4e2e1",

        // Primary — electric blue
        "primary":              "#a5c8ff",
        "primary-fixed":        "#d4e3ff",
        "primary-fixed-dim":    "#a5c8ff",
        "primary-container":    "#2792ff",
        "on-primary":           "#00315f",
        "on-primary-fixed":     "#001c3a",
        "on-primary-container": "#002a53",
        "on-primary-fixed-variant": "#004786",
        "inverse-primary":      "#005faf",

        // Secondary — gold / yellow
        "secondary":           "#fff9ef",
        "secondary-fixed":     "#ffe16d",
        "secondary-fixed-dim": "#e9c400",
        "secondary-container": "#ffdb3c",
        "on-secondary":        "#3a3000",
        "on-secondary-fixed":  "#221b00",
        "on-secondary-container": "#725f00",
        "on-secondary-fixed-variant": "#544600",

        // Tertiary — sky blue
        "tertiary":           "#96ccff",
        "tertiary-fixed":     "#cee5ff",
        "tertiary-fixed-dim": "#96ccff",
        "tertiary-container": "#5b96c9",
        "on-tertiary":        "#003353",
        "on-tertiary-fixed":  "#001d32",
        "on-tertiary-container":      "#002c48",
        "on-tertiary-fixed-variant":  "#004a75",

        // Error
        "error":              "#ffb4ab",
        "error-container":    "#93000a",
        "on-error":           "#690005",
        "on-error-container": "#ffdad6",

        // Misc
        "outline":            "#8a919f",
        "outline-variant":    "#404753",
        "inverse-surface":    "#e4e2e1",
        "inverse-on-surface": "#303030",

        // Background
        "background": "#131313",
      },

      // ── Typography ────────────────────────────────────────────────────────
      fontFamily: {
        headline: ["Inter", "sans-serif"],
        body:     ["Inter", "sans-serif"],
        label:    ["Space Grotesk", "sans-serif"],
        mono:     ["Space Grotesk", "monospace"],
      },

      // ── Border Radius (Stitch: minimal / square-ish) ──────────────────────
      borderRadius: {
        DEFAULT: "0.125rem",
        sm:      "0.125rem",
        md:      "0.125rem",
        lg:      "0.25rem",
        xl:      "0.5rem",
        "2xl":   "0.75rem",
        full:    "9999px",
      },

      // ── Background images / gradients ─────────────────────────────────────
      backgroundImage: {
        "primary-gradient": "linear-gradient(to right, #a5c8ff, #2792ff)",
        "hero-overlay":     "linear-gradient(to bottom, transparent, rgba(19,19,19,0.8), #131313)",
        "bento-gradient":   "linear-gradient(135deg, rgba(165,200,255,0.05) 0%, rgba(39,146,255,0.05) 100%)",
      },

      // ── Box shadows ───────────────────────────────────────────────────────
      boxShadow: {
        "blue-glow": "0 0 8px #a5c8ff",
        "card-hover": "0 20px 40px -10px rgba(39,146,255,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
