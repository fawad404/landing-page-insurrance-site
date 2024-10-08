

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      abc: ["Nunito Sans", "sans-serif"],
      cabin : ["Cabin", "sans-serif"],
      canadara : ["Radio Canada", "sans-serif"],
      hindi : ["Hind Siliguri", "sans-serif"],
      fijala: ["Fjalla One", "sans-serif"],
      'roboto-condensed-italic': ['"Roboto Condensed"', 'Arial', 'sans-serif'],
      'datenschutz': ['"Noto Sans Hanunoo"', 'sans-serif'],
      'numbersDaten': ['"Cormorant Garamond"', 'serif'],
    },
  },
  plugins: [],
};
