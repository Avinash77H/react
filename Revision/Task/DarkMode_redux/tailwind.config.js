  /** @type {import('tailwindcss').Config} */
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode:"selector",
    theme: {
      extend: {
        animation:{
          right_animation:'anime 1s linear',
          left_animation:'reverse_anime 1s linear'
        },
        keyframes:{
          anime:{
            '0%':{transform:'translateX(500px)'},
            '100%':{transform:'translateX(0px)'}
          },
          reverse_anime:{
            '0%':{transform:'translateX(-500px)'},
            '100%':{transform:'translateX(0px)'}
          }
        },
      },
    },
    plugins: [],
  }