/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',               // ← вот это
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1e40af',
        'brand-gray': '#f3f4f6'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};
