/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        "col-primary": "#78350F",
        "col-light": "#FFFFF",
        "col-hover": "#FEF3C7",
      },
      boxShadow: {
        "light-xl": "0 15px 15px rgba(225, 225, 225, 0.25)",
      },
    },
  },
  plugins: [],
};
