require("./tailwind_colours");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/app/components/**/*.html",],
  theme: {
    colors: colors,
    extend: {},
  },
  plugins: [],
}
