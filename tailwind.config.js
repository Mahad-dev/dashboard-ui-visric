/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#fff",
      secondary: "#111C44",
      gray: "#A3AED0",
      blue: "#4318FF",
      green: "#05CD99",
      "base-blue": "#1B254B",
      purple: "#7551FF",
      font: "#2B3674",
      "body-light": "#F4F7FE",
      "body-dark": "#0B1437",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1736px",
      // => @media (min-width: 1736px) { ... }
    },
    extend: {
      boxShadow: {
        light: "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
      },
    },
  },
  plugins: [],
};
