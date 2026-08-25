/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          dark: "#1A4F26",
          primary: "#2D7A3B",
          secondary: "#89A833",
          light: "#E8F3E9",
          accent: "#F28C28", // Orange for contrast (offers, alerts)
        }
      },
    },
  },
  plugins: [],
};
