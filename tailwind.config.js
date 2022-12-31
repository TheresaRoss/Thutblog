/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bgtype1-b-1' : '#2e0066',   //custom color with custom name
        'bgtype1-b-2' : '#160f1f', //to
        'bgtype1-b-3' : '#02546d', //via
        'bgtype2-b-1' : '#ecff8f',
        'bgtype2-b-2' : '#ffeed1', //to
        'bgtype2-b-3' : '#fea3a3', //via


        

      }
    },
  },
  plugins: [],
}