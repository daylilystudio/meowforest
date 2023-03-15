/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#669C49',
        second: '#FF904F',
        third: '#E9DECC',
        theme: '#665340',
        notice: '#E93E5D'
      },
      boxShadow: {
        'main': '0 0 20px rgba(0,0,0, .2)'
      },
      dropShadow: {
        'main': '0 0 6px rgba(0,0,0, 1)'
      }
    }
  },
  plugins: [],
  prefix: 'tw-',
  corePlugins: {
    preflight: false,
  }
}