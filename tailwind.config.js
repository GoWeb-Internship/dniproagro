/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    // MEDIA QUERIES
    screens: {
      xs: '375px',
      sm: '480px',
      md: '768px',
      xl: '1280px',
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
        'light-green': '#0F0E39',
        green: '#064E3B', // class="bg-green text-green border-green"
        yellow: '#a16207',
        red: '#ef4444',
        gray: '#374151',
        transparent: {
          DEFAULT: 'rgba(2, 147, 28, 0.2)', // class="bg-transparent"
        },
        accent: {
          DEFAULT: '#064E3B', // class="bg-accent text-accent border-accent"
          light: '#0F0E39', // class="bg-accent-light text-accent-light border-accent-light"
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
          md: '2rem',
          xl: '2.5rem',
        },
      },
    },
  },
  plugins: [],
};
