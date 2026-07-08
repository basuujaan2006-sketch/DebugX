/** @type {import('tailwindcss').Config} */
// ============================================================
// tailwind.config.js — Custom Tailwind Theme
// Extends Tailwind with DebugX brand colors and animations.
// ============================================================
export default {
  // Only apply Tailwind classes to JSX/JS files
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // ── Custom Font ─────────────────────────────────────
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      // ── Brand Colors ─────────────────────────────────────
      colors: {
        navy: {
          900: "#0a0e1a",
          800: "#0d1224",
          700: "#111827",
        },
        purple: {
          glow: "#7c3aed",
          soft: "#a855f7",
        },
        blue: {
          glow: "#2563eb",
          soft: "#60a5fa",
        },
      },
      // ── Backdrop Blur ─────────────────────────────────────
      backdropBlur: {
        xs: "2px",
      },
      // ── Custom Animations ─────────────────────────────────
      animation: {
        "gradient-shift": "gradientShift 8s ease infinite",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "float-medium": "floatMedium 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease forwards",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        floatMedium: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(124, 58, 237, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(124, 58, 237, 0.8)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
