/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'main-blue': '#2A1A5E',
        'light-blue': '#1D24CA',
        'dark-blue': '#070F2B',
        'gold': '#FAB95B',
      },
    },
  },
  plugins: [],
}

