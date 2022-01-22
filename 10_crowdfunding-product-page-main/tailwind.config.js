const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.html",],
  theme: {
    extend: {
      colors: {
        "Moderate-cyan": "hsl(176, 50%, 47%)",
        "Dark-cyan": "hsl(176, 72%, 28%)",
        "Dark-gray": "hsl(0, 0%, 48%)",
      },
      fontFamily: {
        serif : ["'Commissioner'", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
