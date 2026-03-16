/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gfis-green': '#1a472a',
        'gfis-light': '#f9fff9',
        'gfis-accent': '#5a7a5f',
      }
    },
  },
  plugins: [],
}
