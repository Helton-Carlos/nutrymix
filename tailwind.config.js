/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "470px",
      md: "750px",
      lg: "1280px",
      xl: "1440px",
    },
    fontSize: {
      sm: '0.89rem',
      base: '1.1rem',
      xl: '1.4rem',
      '2xl': '1.7rem',
      '3xl': '2rem',
    },
    colors: {
      primary: "#5278FF",
      secondary: "#121626",
      warning: "#FF9500",
      error: "#FF2D55",
      "error-ground": "#5A0314",
      success: "#34C759",
      "success-ground": "#009927",
      white: "#FFFF",
      black: "#3A3A3A",
      gray: "#737375",
      "gray-light": "#DADADA",
      "gray-dark": "#232323",
      blue: "#007AFF",
      purple: "#AF52DE",
      orange: "#F45928",
    },
  },
  plugins: [],
}

