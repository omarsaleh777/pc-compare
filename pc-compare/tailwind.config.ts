import type { Config } from "tailwindcss";

/**
 * Helper: maps a CSS variable name to a Tailwind color value
 * that supports opacity modifiers (/10, /20, etc.).
 */
function colorVar(name: string) {
  return `rgb(var(--${name}) / <alpha-value>)`;
}

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Colors via CSS custom properties (light/dark + opacity support) ──
      colors: {
        // Surfaces
        "surface-dim":              colorVar("surface-dim"),
        "surface":                  colorVar("surface"),
        "surface-container-lowest": colorVar("surface-container-lowest"),
        "surface-container-low":    colorVar("surface-container-low"),
        "surface-container":        colorVar("surface-container"),
        "surface-container-high":   colorVar("surface-container-high"),
        "surface-container-highest":colorVar("surface-container-highest"),
        "surface-bright":           colorVar("surface-bright"),
        "surface-variant":          colorVar("surface-variant"),
        "surface-tint":             colorVar("surface-tint"),

        // Content on surfaces
        "on-surface":         colorVar("on-surface"),
        "on-surface-variant": colorVar("on-surface-variant"),
        "on-background":      colorVar("on-background"),

        // Primary
        "primary":              colorVar("primary"),
        "primary-fixed":        colorVar("primary-fixed"),
        "primary-fixed-dim":    colorVar("primary-fixed-dim"),
        "primary-container":    colorVar("primary-container"),
        "on-primary":           colorVar("on-primary"),
        "on-primary-fixed":     colorVar("on-primary-fixed"),
        "on-primary-container": colorVar("on-primary-container"),
        "on-primary-fixed-variant": colorVar("on-primary-fixed-variant"),
        "inverse-primary":      colorVar("inverse-primary"),

        // Secondary
        "secondary":           colorVar("secondary"),
        "secondary-fixed":     colorVar("secondary-fixed"),
        "secondary-fixed-dim": colorVar("secondary-fixed-dim"),
        "secondary-container": colorVar("secondary-container"),
        "on-secondary":        colorVar("on-secondary"),
        "on-secondary-fixed":  colorVar("on-secondary-fixed"),
        "on-secondary-container": colorVar("on-secondary-container"),
        "on-secondary-fixed-variant": colorVar("on-secondary-fixed-variant"),

        // Tertiary
        "tertiary":           colorVar("tertiary"),
        "tertiary-fixed":     colorVar("tertiary-fixed"),
        "tertiary-fixed-dim": colorVar("tertiary-fixed-dim"),
        "tertiary-container": colorVar("tertiary-container"),
        "on-tertiary":        colorVar("on-tertiary"),
        "on-tertiary-fixed":  colorVar("on-tertiary-fixed"),
        "on-tertiary-container":      colorVar("on-tertiary-container"),
        "on-tertiary-fixed-variant":  colorVar("on-tertiary-fixed-variant"),

        // Error
        "error":              colorVar("error"),
        "error-container":    colorVar("error-container"),
        "on-error":           colorVar("on-error"),
        "on-error-container": colorVar("on-error-container"),

        // Misc
        "outline":            colorVar("outline"),
        "outline-variant":    colorVar("outline-variant"),
        "inverse-surface":    colorVar("inverse-surface"),
        "inverse-on-surface": colorVar("inverse-on-surface"),

        // Background
        "background": colorVar("background"),
      },

      // ── Typography ────────────────────────────────────────────────────────
      fontFamily: {
        headline: ["Inter", "sans-serif"],
        body:     ["Inter", "sans-serif"],
        label:    ["Space Grotesk", "sans-serif"],
        mono:     ["Space Grotesk", "monospace"],
      },

      // ── Border Radius ──────────────────────────────────────────────────────
      borderRadius: {
        DEFAULT: "0.5rem",
        sm:      "0.375rem",
        md:      "0.5rem",
        lg:      "0.75rem",
        xl:      "1rem",
        "2xl":   "1.25rem",
        full:    "9999px",
      },

      // ── Background images / gradients ─────────────────────────────────────
      backgroundImage: {
        "primary-gradient": "linear-gradient(to right, var(--gradient-primary-from), var(--gradient-primary-to))",
        "hero-overlay":     "linear-gradient(to bottom, transparent, var(--hero-overlay-mid), var(--hero-overlay-end))",
        "bento-gradient":   "linear-gradient(135deg, rgba(165,200,255,0.05) 0%, rgba(39,146,255,0.05) 100%)",
      },

      // ── Box shadows ───────────────────────────────────────────────────────
      boxShadow: {
        "blue-glow": "0 0 8px rgb(var(--primary))",
        "card-hover": "0 20px 40px -10px rgba(39,146,255,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
