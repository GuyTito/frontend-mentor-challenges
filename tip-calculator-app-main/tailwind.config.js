module.exports = {
  content: ["./*.html",],
  theme: {
    extend: {
      colors: {
        "Strong-cyan": "hsl(172, 67%, 45%)",
        "Very-dark-cyan": "hsl(183, 100%, 15%)",
        "Dark-grayish-cyan-1": "hsl(186, 14%, 43%)",
        "Dark-grayish-cyan-2": "hsl(184, 14%, 56%)",
        "Light-grayish-cyan-1": "hsl(185, 41%, 84%)",
        "Light-grayish-cyan-2": "hsl(189, 41%, 97%)",
      },
      fontFamily: {
        "space-mono": "'Space Mono', monospace",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
