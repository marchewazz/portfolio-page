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
        'main-blue': '#080c37',
        'light-blue': '#000358',
        'dark-blue': '#070F2B',
        'light-text': '#BDBDBF',
        'gold': '#FAB95B',
      },
      transitionProperty: {
        multiple: "width , height , backgroundColor , border-radius"
      }
    },
  },
  plugins: [],
}

