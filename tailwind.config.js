/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          'dark-green': '#1A4D2E',
          'mustard': '#E2B447',
          'soft-orange': '#F4A259',
        }
      }
    },
  },
  plugins: [],
};
