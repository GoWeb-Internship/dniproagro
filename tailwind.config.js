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
      // ALL COLORS
      colors: {
        body: {
          DEFAULT: '#FCFCFC', // class="bg-body"
          dark: '#1D1C4B', // class="bg-body-dark"
        },
        accent: {
          DEFAULT: '#3B82F6', // class="bg-accent text-accent border-accent"
          dark: '#0F0E39', // class="bg-accent-dark text-accent-dark border-accent-dark"
        }, 
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