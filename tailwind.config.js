/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{html,js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'darkBlue': 'hsl(209, 23%, 22%)',
        'veryDarkBlue': 'hsl(200, 15%, 8%)',
        'darkGray': 'hsl(0, 0%, 52%)',
      },
      backgroundColor: {
        'veryDarkBlueBg': 'hsl(207, 26%, 17%)',
        'veryLightGrayBg': 'hsl(0, 0%, 98%)'
      },
    },
  },
  plugins: [],
}

