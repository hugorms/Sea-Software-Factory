/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'brand': {
          'carbon-black': '#121212',     // Negro carbón (fondos principales)
          'anthracite': '#292929',       // Gris antracita (cards, navbar)
          'gray-medium': '#737373',      // Gris medio (textos secundarios)
          'gray-light': '#ebebeb',       // Gris muy claro (fondos claros)
          'white': '#ffffff',            // Blanco puro (highlights)
          // Colores verdes para acentos (actualizados para coincidir con logo)
          'dark-green': '#029f7c',
          'green-medium': '#029f7c',
        }
      }
    },
  },
  plugins: [],
};
