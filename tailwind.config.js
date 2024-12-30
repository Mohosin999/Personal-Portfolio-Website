/** @type {import('tailwindcss').Config} */

const svgToDataUri = require("mini-svg-data-uri");

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
        primarycolor:"#F45508",
        secondarycolor:"#121214",
        bgcolor:"#0D0D0F"
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': (color) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${color}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        {
          values: theme('colors'),
          type: ['color', 'any'], 
        }
      );
    },
  ],
};
