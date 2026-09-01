import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sono)", "system-ui", "sans-serif"],
        sono: ["var(--font-sono)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          offwhite: "#F5F5EB",
          perk: "#BEFF50",
          offblack: "#14140F",
          orange: "#FF8C5F",
          purple: "#C8A0FF",
          cyan: "#82DCFA",
          pink: "#FAB9FA",
          yellow: "#FFBE00",
        },
        positive: {
          30: "#007D4B",
          95: "#D6FFEF",
          "30X": "#9CC5AB",
        },
        negative: {
          40: "#D20F46",
          95: "#FDE7ED",
          "40X": "#F6A5A7",
        },
        warning: {
          60: "#FFBE00",
          95: "#FFEDB8",
        },
        disabled: {
          5: "#14140f0d",
          dark: "#979790",
        },
      },
      boxShadow: {
        z1: "0px 4px 24px rgba(20, 20, 15, 0.08)",
        z2: "0px 8px 32px rgba(20, 20, 15, 0.12)",
      },
      borderRadius: {
        small: "18px",
        medium: "28px",
      }
    },
  },
  plugins: [],
};
export default config;
