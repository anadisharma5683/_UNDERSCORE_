/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indianRed: '#d36060',
        midnightGreen: '#005c69',
        frenchGray: '#acb0bd',
        bistre: '#412722',
        brownSugar: '#a9714b',
      },
    },
  },
  plugins: [],
}
