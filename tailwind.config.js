const colors = require('tailwindcss/colors')



/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  important: true,
  theme: {
      screens: {
          xs: "540px",
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
      },
      fontFamily: {
          'nunito': ['"Nunito", sans-serif'],
          'cursive-alex': ['"Alex Brush", cursive'],
          'cursive-kaushan': ['"Kaushan Script", cursive'],
          'head-ebgaramond': ['"EB Garamond", serif'],
          'para-worksans': ['"Work Sans", sans-serif'],
      },
      container: {
          center: true,
          padding: {
              DEFAULT: '12px',
              sm: '1rem',
              lg: '45px',
              xl: '5rem',
              '2xl': '13rem',
          },
      },
      extend: {
          colors: {
              'dark': '#3c4858',
              'dark-footer': '#192132',
              'white': colors.white,
              'black': colors.black,
              'gray': colors.gray,
              'red': colors.red,
              'yellow': colors.yellow,
              'green': colors.green,
              'blue': colors.blue,
              'dropshiphub-primary': {
                  100: '#FFCC33',
                  200: '#99CCFF',
                  300: '#91C4FF',
                  400: '#89BCFF',
                  500: '#FF9900',
                  600: '#6396ff',
                  700: '#4A7DE6',
                  800: '#3063CC',
                  900: '#F15A29',
              },
              'dropshiphub-secondary': {
                  100: '#ffcc63',
                  200: '#ffcc63',
                  300: '#ffcc63',
                  400: '#ffcc63',
                  500: '#ffcc63',
                  600: '#ffcc63',
                  700: '#ffcc63',
                  800: '#ffcc63',
                  900: '#ffcc63',
              },
              'dropshiphub-dark': colors.black,
          },

          boxShadow: {
              sm: '0 2px 4px 0 rgb(60 72 88 / 0.15)',
              DEFAULT: '0 0 3px rgb(60 72 88 / 0.15)',
              md: '0 5px 13px rgb(60 72 88 / 0.20)',
              lg: '0 10px 25px -3px rgb(60 72 88 / 0.15)',
              xl: '0 20px 25px -5px rgb(60 72 88 / 0.1), 0 8px 10px -6px rgb(60 72 88 / 0.1)',
              '2xl': '0 25px 50px -12px rgb(60 72 88 / 0.25)',
              inner: 'inset 0 2px 4px 0 rgb(60 72 88 / 0.05)',
              testi: '2px 2px 2px -1px rgb(60 72 88 / 0.15)',
          },

          spacing: {
              0.75: '0.1875rem',
              3.25: '0.8125rem'
          },

          maxWidth: ({
              theme,
              breakpoints
          }) => ({
              '1200': '71.25rem',
              '992': '60rem',
              '768': '45rem',
          }),

          zIndex: {
              1: '1',
              2: '2',
              3: '3',
              999: '999',
          },
      },
  },

  plugins: [
      require("@tailwindcss/forms")({
        strategy: 'class', // only generate classes
      }),
  ],
}

