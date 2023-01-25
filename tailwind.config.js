/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    letterSpacing: {
      wide: '0.1rem',
      wider: '1.2rem',
      widest: '1rem'
    },
    extend: {
      keyframes: {
        'open-menu': {
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'},
        }
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards'
      },
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
        'roboto': ['Roboto', 'serif']
      }
    },
  },
  plugins: [],
}
