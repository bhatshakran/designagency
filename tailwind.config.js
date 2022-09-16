/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        domaine: ['DOMAINE', 'sans-serif'],
        inter: ['Inter', 'cursive'],
      },
    },
  },
  plugins: [],
};
