/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#282c34',
        'light-dg':'#4a4a4a',
        'body-bg':'#202225'
      },
    },
  },
  plugins: [],
}