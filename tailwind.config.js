/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      jersey: ["Jersey 15"],
      sedgwick: ["Sedgwick Ave Display"],
      trocchi: ["Trocchi"],
      spartan: ["League Spartan"],
    },
    colors: {
      primary: {
        DEFAULT: "#010145",
        dark: "#010123",
      },
      white: "#FFFFFF",
      gray: "#6b7280",
      black: "#000000",
    },
  },
  plugins: [],
};
