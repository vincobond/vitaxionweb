/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./public/*.{html,js}"],
  theme: {
    extend: {
      // header:{

      // }

      colors: {
        chocolate: '#D2691E',
        deepChocolate: '#8B4513', // Add the chocolate color
      },
    },
  },
  plugins: [

    require('@tailwindcss/aspect-ratio')
  
  ],
}

