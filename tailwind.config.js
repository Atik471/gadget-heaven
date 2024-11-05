/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "serif"],
      },
      colors: {
        primary: "#9538E2",
        root: "#F7F7F7",
      }
    },
  },
  plugins: [],
}