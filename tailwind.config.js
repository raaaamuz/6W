// tailwind.config.js

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Set 'Poppins' as the default sans-serif font
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        // Add 'Playfair Display' as a 'serif' or 'display' font
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}

