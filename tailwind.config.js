/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF3E6',
        paper: '#FFFDF7',
        ink: {
          DEFAULT: '#2B2119',
          soft: '#6B5A4E',
        },
        terracotta: {
          light: '#E08B57',
          DEFAULT: '#C1622F',
          dark: '#94491F',
        },
        ochre: {
          light: '#F0C878',
          DEFAULT: '#D9A441',
          dark: '#A87A26',
        },
        brown: {
          light: '#6B4630',
          DEFAULT: '#4A2E22',
          dark: '#301B13',
        },
      },
      fontFamily: {
        serif: ['"Fraunces Variable"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Work Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.75rem',
      },
    },
  },
  plugins: [],
}
