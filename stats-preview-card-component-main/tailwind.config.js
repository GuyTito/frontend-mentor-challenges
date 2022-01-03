const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: ["./*.html",],
  theme: {
    screens: {
      'xs': '376px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "very-dark-blue": "#090b1a",
        "dark-desaturated-blue": "#1b1938",
        "soft-violet": "#aa5cdb",
      },
      fontFamily: {
        "inter": "'Inter', sans-serif",
        "lexend": "'Lexend Deca', sans-serif",
      },
    },
  },
  plugins: [],
}
