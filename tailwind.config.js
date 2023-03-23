/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'black': '#000',
      'blue': '#0b059f',
      'gray-dark': '#273444',
      'purple-light': '#ebe8f1',
      'white': '#fff'
    },
    extend: {},
  },
  plugins: [],
};
