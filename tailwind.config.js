/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {


    extend: {
      colors : {
        primary : '#0bbbcc',
        secondary : '#545454',
      },
      backgroundImage: {
        'header-pattern': "url('./src/assests/envatoBg.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },

  },
  plugins: [],
}