/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      inter: ["font-family: 'Inter', sans-serif;"],
      },
      colors: {
        "main-black" : "#121212",
        "white": "#ffffff",
        "brighter-black": "#181818",
        "gray": "#868686",
        "main-violet": "#BB86FC",
        "twitter-color": "#00acee",
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
    },
  },
    

  

  plugins: [],
}}