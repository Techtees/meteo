const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      roboto: ['Roboto', defaultTheme.fontFamily.sans]
    },
    colors:{
      white: '#ffff',
      dark: '#000',
      grey:'#f1f1f1',
      primary:{
        purple_dark:'#09143B',
        purple_light:'#161E42',
        light_blue:'#1AA2EF',
        purple:'#6627ED',
      },
    },
    extend: {},
  },
  plugins: [],
}