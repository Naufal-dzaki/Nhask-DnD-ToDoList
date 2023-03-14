/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "nhask-primary": "#3AB79E",
        "nhask-text": "#E4EADF",
        "nhask-secondary": "#9CB0A4",
        "nhask-bg-primary": "#2F4858",
        "nhask-bg-secondary": "#263D4D",
        "nhask-danger": "#FC5555",
        "nhask-alert": "#F0BD38",
        "nhask-normal": "#30B2DB",
        "nhask-white-12/100": "rgba(228, 234, 223, 0.12)",
        "nhask-black-1/5": "rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
