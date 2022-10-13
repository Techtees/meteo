const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      roboto: ['Roboto', defaultTheme.fontFamily.sans]
    },
    colors:{
      primary:{
        purple_dark:'#240D57',
        purple_light:'#240D57',
        evited_purple:'#8456EC',
        Evited_pink:'#E87BF8',
      },
    },
    extend: {},
  },
  plugins: [],
}