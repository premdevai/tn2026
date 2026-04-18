import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        headline: ["var(--font-outfit)", "ui-sans-serif", "system-ui", "sans-serif"],
        data: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#f8f9fa",
        foreground: "#191c1d",
        primary: {
          DEFAULT: "#041627",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#2c694e",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "#ba1a1a",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#191c1d",
        },
        "surface-tint": "#4f6073",
        "surface-dim": "#d9dadb",
        "primary-container": "#1a2b3c",
        "outline": "#74777d",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#b6885a",
        "on-error": "#ffffff",
        "on-primary-fixed-variant": "#38485a",
        "on-secondary": "#ffffff",
        "error-container": "#ffdad6",
        "surface-container-lowest": "#ffffff",
        "secondary-fixed": "#b1f0ce",
        "secondary-fixed-dim": "#95d4b3",
        "surface-container-low": "#f3f4f5",
        "surface-container-high": "#e7e8e9",
        "error": "#ba1a1a",
        "tertiary-container": "#402300",
        "primary-fixed": "#d2e4fb",
        "on-secondary-container": "#316e52",
        "on-primary": "#ffffff",
        "surface-bright": "#f8f9fa",
        "inverse-primary": "#b7c8de",
        "outline-variant": "#c4c6cd",
        "inverse-on-surface": "#f0f1f2",
        "tertiary-fixed-dim": "#f0bd8b",
        "primary-fixed-dim": "#b7c8de",
        "surface": "#f8f9fa",
        "tertiary-fixed": "#ffdcbd",
        "tertiary": "#241100",
        "on-tertiary-fixed": "#2c1600",
        "on-background": "#191c1d",
        "on-secondary-fixed": "#002114",
        "on-primary-fixed": "#0b1d2d",
        "secondary-container": "#aeeecb",
        "on-surface": "#191c1d",
        "surface-container-highest": "#e1e3e4",
        "surface-container": "#edeeef",
        "on-secondary-fixed-variant": "#0e5138",
        "on-surface-variant": "#44474c",
        "on-error-container": "#93000a",
        "on-tertiary-fixed-variant": "#623f18",
        "surface-variant": "#e1e3e4",
        "inverse-surface": "#2e3132",
        "on-primary-container": "#8192a7"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        soft: "0 12px 32px rgb(23 33 30 / 0.08)",
      },
    },
  },
  plugins: [animate],
} satisfies Config;

export default config;
