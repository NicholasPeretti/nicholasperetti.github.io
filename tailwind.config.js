/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: "Archivo Black",
    },
    extend: {
      keyframes: {
        blink: {
          "0%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0,
          },
        },
        "arrow-bounce": {
          "30%": {
            opacity: 0.2,
          },
          "60%": {
            opacity: 1,
          },
        },
      },
      animation: {
        blink: "blink 2s linear infinite",
        bounce: "arrow-bounce 3s linear infinite",
      },
    },
  },
  plugins: [],
};
