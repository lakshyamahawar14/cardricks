/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Roboto"',
          '"Segoe UI"',
          'sans-serif',
          ...fontFamily.sans,
        ],
      },
      screens : {
        'sm' : '450px',
        'md': '512px',
        'lg': '1024px',
      }
    },
  },
  plugins: [],
}

