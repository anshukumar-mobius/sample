/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backdrop: "#0B0C0F",
        tableRing: "#2F3037",
        tableRingInner: "#41424B",
        money: "#34E59B",
        cardFace: "#F8FAFC",
        pill: "#2E3037"
      },
      fontFamily: {
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      dropShadow: {
        glow: "0 0 24px rgba(52,229,155,0.35)"
      },
      boxShadow: {
        card: "0 10px 25px rgba(0,0,0,.45)"
      }
    }
  },
  plugins: []
};