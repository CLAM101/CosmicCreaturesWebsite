require("./tailwind_colours");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/app/components/**/*.html"],
  theme: {
    fontFamily: {
      display: ["Futurina", "sans-serif"],
      body: ["Poppins", "sans-serif"],
      lead: ["Krona-One", "sans-serif"],
    },
    // this is a map of px values to rem values
    // they should rarely be used directly, but instead are used to generate .type- classes
    fontSize: {
      12: "0.75rem",
      13: "0.8125rem",
      14: "0.875rem",
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      22: "1.375rem",
      23: "1.4375rem",
      24: "1.5rem",
      26: "1.625rem",
      28: "1.75rem",
      30: "1.875rem",
      32: "2rem",
      36: "2.25rem",
      40: "2.5rem",
      42: "2.625rem",
      48: "3rem",
      52: "3.25rem",
      56: "3.5rem",
      62: "3.875rem",
      72: "4.5rem",
    },
    colors: colors,
    extend: {},
  },
  plugins: [],
}
