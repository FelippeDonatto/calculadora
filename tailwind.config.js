/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      violet: {
        700: '#462878',
        600: '#975DFA',
        500: '#807ECE',
        400: '#8E7ECE'
      },

      gray: {
        900: '#2D2A37',
        500: '#6B6B6B',
        100: '#EBEBEB'
      },

      white: '#ffffff',
      black: '#000000'
    },
    extend: {}
  },
  plugins: []
}
