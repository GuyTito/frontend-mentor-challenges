const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.html",],
  theme: {
    extend: {
      colors: {
        "Soft-red": "hsl(7, 99%, 70%)",
        "Yellow-primary": "hsl(51, 100%, 49%)",
        "Dark-desaturated-cyan": "hsl(167, 40%, 24%)",
        "Dark-blue": "hsl(198, 62%, 26%)",
        "Dark-moderate-cyan": "hsl(168, 34%, 41%)",
        "Very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
        "Very-dark-grayish-blue": "hsl(213, 9%, 39%)",
        "Dark-grayish-blue": "hsl(232, 10%, 55%)",
        "Grayish-blue": "hsl(210, 4%, 67%)",
      },
      fontFamily: {
        serif: ["'Fraunces'", ...defaultTheme.fontFamily.serif],
        sans: ["'Barlow'", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'header': "url('./images/mobile/image-header.jpg')",
        'header-d': "url('./images/desktop/image-header.jpg')",
        'graphic-design': "url('./images/mobile/image-graphic-design.jpg')",
      },
    },
  },
  plugins: [],
}
