/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}',

  ],
  theme: {
    screens: {
      lg: '1440px',
      xl: '1440px',
      '2xl':  '1440px',
    },
    fontFamily: {
      'Outfit': ['Outfit, sans-serif'],
    },
    extend: {
      colors: {
        White: 'hsl(0, 0%, 100%)',
        Lightgray: 'hsl(212, 45%, 89%)',
        GrayishBlue: 'hsl(220, 15%, 55%)',
        DarkBlue: 'hsl(218, 44%, 22%)',
        
      },
    },
  },
  plugins: [],
}

