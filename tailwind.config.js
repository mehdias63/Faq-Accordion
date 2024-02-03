/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      work: ["Work Sans"],
    },
    extend: {
      colors: {
        "light-pink": "#F8EEFF",
        "dark-purple": "#301534",
        "pale-purple": "#8B6990",
        "pink": "#AD28EB",
      },
    },
  },
  plugins: [],
};
