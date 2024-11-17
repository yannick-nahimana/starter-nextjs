/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: "640px",

      laptop: "1024px",

      desktop: "1280px",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [require("daisyui")],
};
