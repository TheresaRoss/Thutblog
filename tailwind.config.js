/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {//b-1 dark mode, b-2 light mode
        'bgtype1-b-1': '#2e0066',   //custom color with custom name
        'bgtype1-b-2': 'rgba(0, 0,0, 0.9)', //to
        'bgtype1-b-3': 'rgba(38, 0, 59, 1)', //via
        'bgtype2-b-1': ' rgba(255, 255, 169, 0.4)',
        'bgtype2-b-2': '#ffeed1', //to
        'bgtype2-b-3': 'rgba(255, 205, 237, 0.8)', //via
        




      },
      backgroundImage: {
        'snowBg': "url('../public/snowbg.jpg')"
      }
    },
  },
  plugins: [],
}