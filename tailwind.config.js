/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      work: ["Work Sans"],
    },
    extend: {
      colors: {
        "Light-Pink": "#F8EEFF",
        "Dark-Purple": "#301534",
        "Pale-Purple": "#8B6990",
        "Pink": "#AD28EB",
      },
    },
  },
  plugins: [],
};
