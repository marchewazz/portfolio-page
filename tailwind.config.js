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
        'main-blue': '#130837',
        'light-blue': '#000358',
        'dark-blue': '#070F2B',
        'gold': '#FAB95B',
      },
    },
  },
  plugins: [],
}

