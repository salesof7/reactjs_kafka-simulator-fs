/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        cursive: ["Gravitas One", "cursive"],
        goudy: ["'Goudy Bookletter 1911', serif"],
      },
    },
  },
  plugins: [],
};
