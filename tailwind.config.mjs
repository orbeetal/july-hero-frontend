/* eslint-disable import/no-anonymous-default-export */
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
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
        brand: "var(--brand-color)",
      },
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
      },
      screens: {
        370: "370px",
        400: "400px",
        450: "450px",
        451: "454px",
        460: "460px",
        470: "470px",
        480: "480px",
        490: "490px",
        500: "500px",
        550: "550px",
        580: "580px",
        600: "600px",
        660: "660px",
        700: "700px",
        750: "750px",
        770: "770px",
        800: "800px",
        813: "813px",
        850: "850px",
        880: "880px",
        950: "950px",
        1000: "1000px",
        1100: "1100px",
        1150: "1150px",
        1200: "1200px",
        1300: "1300px",
        1400: "1400px",
        1450: "1450px",
        1480: "1480px",
        1800: "1800px",
      },
      container: {
        center: true,
        padding: "16px",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1200px",
        },
      },
    },
  },
  plugins: [typography],
};
