/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: "hsl(0 0% 100%)",
        foreground: "hsl(222.2 84% 4.9%)",
        card: "hsl(0 0% 100%)",
        cardForeground: "hsl(222.2 84% 4.9%)",
        primary: "hsl(221.2 83.2% 53.3%)",
        primaryForeground: "white",
        muted: "hsl(210 40% 96.1%)",
        border: "hsl(214.3 31.8% 91.4%)",
      },
    },
  },
  plugins: [],
}