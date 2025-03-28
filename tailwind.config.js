/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A5F7A', // bleu profond
          light: '#2C7A98',
        },
        accent: {
          DEFAULT: '#E67E22', // orange vif
          light: '#F39C12',
        },
        earth: '#2E4053',     // gris foncé
        cream: '#F5F6FA',     // gris très clair
        leaf: '#27AE60',      // vert
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};