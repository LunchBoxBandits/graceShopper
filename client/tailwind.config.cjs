/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background:
          "url('/src/assets/ronan-furuta-ZJ8M0bfiu8U-unsplash (3).jpg')",
      },
      colors: {
        customyellow: "#fff700",
        pblue: "#14213D",
        pyellow: "#FCA311",
        pgray: "#E5E5E5",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "cursive"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
