/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#262626',
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('@tailwindcss/line-clamp')],
}
