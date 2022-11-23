/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/layout/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    // MEDIA QUERIES
    screens: {
      xs: '375px',
      sm: '480px',
      md: '768px',
      xl: '1436px',
    },
    // BASE FONT
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'], // class="font-montserrat"
      inter: ['Inter', 'sans-serif'], // class="font-inter"
      mulish: ['Mulish', 'sans-serif'],
    },
    // SHADOW
    boxShadow: {
      main: '0px 2px 2px rgba(125, 198, 252, 0.24), 0px -2px 2px rgba(125, 198, 252, 0.24)', // class="shadow-main"
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
        mint: 'rgba(2, 147, 28, 0.2)', // class="bg-mint text-mint border-mint"
        accent: {
          DEFAULT: '#064E3B', // class="bg-accent text-accent border-accent"
          bright: '#02931C', // class="bg-accent-bright text-accent-bright border-accent-bright"
        },
      },
      // GRADIENT
      backgroundImage: {
        'gradient-green':
          'linear-gradient(180deg, rgba(24, 55, 55, 0) 0%, #183737 100%);', // class="bg-gradient-green"
        'gradient-gray':
          'linear-gradient(89.63deg, rgba(116, 115, 115, 0.53) 36.38%, rgba(116, 115, 115, 0.01) 99.73%);', // class="bg-gradient-gray"
      },
      // BUTTON RADIUS
      borderRadius: {
        main: '4px', // class="rounded-main"
      },
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '1.25rem',
          xl: '1.25rem',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
