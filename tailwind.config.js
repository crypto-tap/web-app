/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        aqua500: '#1BDCE3',
        aqua700: '#0A747C',
        aquaForGradient: '#0C8D96',

        gray500: '#333333',
        gray400: '#CFCFCF',
        gray300: '#E8E8E8',
        gray100: '#F2F2F2',

        green500: '#00966E',
      },
      fontFamily: {
        logo: ['Outfit', 'sans-serif'],
        rob: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        thin: 200,
        soft: 300,
        regular: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
}
