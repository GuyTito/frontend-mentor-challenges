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
        "pale-blue": "#e0e8ff",
        "bright-blue": "#3829e0",
        "very-pale-blue": "#f5f7ff",
        "desaturated-blue": "#7280a7",
        "dark-blue": "#1f2f56",
      },
      fontFamily: {
        "red-hat": "'Red Hat Display', sans-serif",
      },
    },
  },
  plugins: [],
}
