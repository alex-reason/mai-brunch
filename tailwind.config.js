/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        "grey-1": "#F3F3F3",
        "white-1": "#F8F8F8",
        "white-2": "#FCFCFC",
        "black-1": "#2C2C2C",
        "black-2": "#3A3A3A",
        "primary": "#38AA6D"
      },
    },
  },
}