/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter']
      }
    },
    screens: {
      'md': '640px',
      'lg': '950px',
    },
  },
  plugins: [],
}

