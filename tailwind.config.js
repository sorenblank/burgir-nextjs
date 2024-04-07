/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        n: {
          orange: "#ff9d2e",
          white: "#ffffff",
          offwhite: "#f1d6c6",
          offwhite2: "#e8ccbb",
          yellow: "#FF9D2E",
          notyellow: "#FF8D29",
          sonicSilver: "#787878",
          richblackfogra: "#0e0e12",
          champagnepink: "#f1d6c6",
          saffron: "#ffcc33",
          darkOrange: "#ff8d29",
          desertSand: "#e8ccbb",
          issabeline: "#f9f6f0",
        },
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", ...fontFamily.sans],
        shadows: "var(--font-shadows)",
        rubik: "var(--font-rubik)",
      },
    },
  },
};
