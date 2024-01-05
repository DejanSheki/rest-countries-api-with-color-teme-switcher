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

      }
    },
  },
  plugins: [],
}

