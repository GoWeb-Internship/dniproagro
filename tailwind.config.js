/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/layout/**/*.{js,jsx,ts,tsx}',
    './src/views/**/*.{js,jsx,ts,tsx}',
  ],
  variants: {
    backgroundColor: ['group-focus'],
    textColor: ['group-focus'],
  },
  theme: {
    // MEDIA QUERIES
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
    },
    // BASE FONT
    fontFamily: {
      mulish: ['Mulish', 'sans-serif'], // class="font-mulish"
    },
    // SHADOW
    boxShadow: {
      main: '0px 2px 2px rgba(125, 198, 252, 0.24), 0px -2px 2px rgba(125, 198, 252, 0.24)', // class="shadow-main"
      modal:
        '0px -2px 4px rgba(6, 78, 59, 0.25), 2px 0px 4px rgba(6, 78, 59, 0.25), -2px 0px 4px rgba(6, 78, 59, 0.25), 0px 4px 4px rgba(6, 78, 59, 0.25);', // class="shadow-modal"
    },
    // THEME
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
      }),
      // COLORS
      colors: {
        white: '#FCFCFC', // class="bg-white text-white border-white"
        'light-green': '#02931C', // class="bg-light-green text-light-green border-light-green"
        green: '#064E3B', // class="bg-green text-green border-green"
        yellow: '#A16207', // class="bg-yellow text-yellow border-yellow"
        red: '#EF4444', // class="bg-red text-red border-red"
        gray: '#374151', // class="bg-gray text-gray border-gray"
        'dark-grey': '#CDCDCD', // class="bg-dark-grey text-dark-grey border-dark-grey"
        mint: 'rgba(2, 147, 28, 0.2)', // class="bg-mint text-mint border-mint"
        accent: {
          DEFAULT: '#064E3B', // class="bg-accent text-accent border-accent"
          bright: '#02931C', // class="bg-accent-bright text-accent-bright border-accent-bright"
        },
      },
      //
      fontSize: {
        small: ['16px', '20px'], // class="text-small"
        middle: ['18px', '23px'], // class='text-middle'
        big: ['20px', '27px'], // class="text-big"
        large: ['36px', '45px'], // class="text-large"
      },
      // GRADIENT
      backgroundImage: {
        'gradient-green':
          'linear-gradient(180deg, rgba(24, 55, 55, 0) 0%, #183737 100%);', // class="bg-gradient-green"
        'gradient-gray':
          'linear-gradient(89.63deg, rgba(0, 0, 0, 0.5) 26.03%, rgba(116, 115, 115, 0.01) 99.73%);', // class="bg-gradient-gray"
      },
      // BUTTON RADIUS
      borderRadius: {
        main: '4px', // class="rounded-main"
      },
      // TRANSITION
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.25, 1, 0.5, 1)', // class='ease-in-expo'
      },
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '1.25rem',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        // ...
      };

      addUtilities(newUtilities, {
        variants: ['hover', 'group-hover'],
      });
    }),
  ],
};
