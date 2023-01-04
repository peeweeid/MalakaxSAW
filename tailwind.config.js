/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container : {
      padding : '28px',
      center : true,
    },
    extend: {
      screen : {
        '2xl' : '1440px',
      },
      colors :{
        primary : '#00BAC7',
        second : '#2E354A',
        third : '#252B3C',
      },
      fontFamily :{
        'DMsans' : ['sans-serif'],
        'serif' : ['Source Sans Pro', 'sans-serif']
      },
    },
    
  },
  plugins: [],
}
