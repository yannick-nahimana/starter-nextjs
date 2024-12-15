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
      inbtn: "840px",
      laptop: "1024px",

      desktop: "1280px",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        playfair: ["Playfair Display"],
        lobster: ["Lobster"],
      },
      colors: {
        whiteOff: "#f9f5f2",
        accentCol: "#fce348",
        accentDark: "#af9804",
        bunker: "#066b6a",
        bunkerDark: "#03302f",
        bgCol: "#fafeff",
        textCol: "#141414",
        accentOrange: "#f38422",
      },
    },
  },
  plugins: [require("daisyui")],
};
